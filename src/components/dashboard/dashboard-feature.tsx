/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "59uUTKWvHZTLDgVsSEMQsJgEC6gHUzKUxZrkhkULgLjGKhjRYqwJg4QjhwbNXYrMH6yeJJiANfBWq4JUWf5U8paz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyk5XWeaBzz3ssG2eYzNcNa4DUwMy9XhAjvd2tdhefc5Yq2QUkDmvuXJiMrMk6wpvWZqcn8kC6hoKvZa9Znh89B",
  "key1": "5thigMRTcnH1bCBvL4VLNP7ebvefszeP2kQR3B7yNnGohyFfAAZwZW3yoC1xyhmcAffRNezmmmx9UbzdsrYsxcau",
  "key2": "2ESqZGg2Ptk9aF8sWejKynaKMpb1w9jE5PRWzvSEM7XWNpoaFb1RAth6Y898ZwqseHuafiuM993xFZmyB6GULHPp",
  "key3": "XHq8BGZQUqdCpvHK8yUKZ1sS1RGe9qB7an6o81Rd8BSCnRmkr4JLSPggUCZdTMK2FLdEDXQHuuKAkjzrUqJhw8f",
  "key4": "3CY4RBZWWhEphJ5nGjXVnMHvkA3uZikDfd917DiqaTj9az8QrdvGGifwyEBhLnBp2oHYpP9nCjawYNxR9uyxwiqu",
  "key5": "mzYiafFYnYwfTvWv1HjPPM583fun7vk2pm2t8ALpRy5ryDRP5ZQULHJMxnjVXbwjMf2XtvXdf7ow52AEvWpHf9f",
  "key6": "4baknB5ePQuJh8gWuJPeLhfjazALDZ3BdcuV1L85XjdkVWThXTZB1XBXZjtwutWwf8e36K5FDPxaQiX7BmsJfJwi",
  "key7": "2HyhC9KTDeEGDnhSgZGZZBs4ej3vUxVWUBrDua1tH4TZXGWPcRQVEkfmhW5sxcGAEfsHjMbRtLnnZxjxWnDSwvhV",
  "key8": "2wqn6fuy53hNxz6XJx6MnRk7YJgVA11RtUveV1S6u3cM9XsaWeqZxonSpD2srCkNnssKRZLWSDyV6McJzg28za7j",
  "key9": "3dbjJib47TqRuCFG4m3hczgejHPJNdtNTvxGQhkPsSsT2L7aJsoRi9fTxMQW48DUgmx8paPuTduvQBpA6KwLX4dM",
  "key10": "3xDgXcGMcx3coWDrSQAMZEXi2AfN4eV7ozWs3bu9XyFAo7TQJzLYmb4q92PfJZMapoFb6y42DRCdtEiUkXAxwhQE",
  "key11": "32DfkaoZ2iqquZdYoK7fqWXKJGe1jGDoCaiiAfN73MyTZSrJ2mUkboRziHmVGEy2wnhWjqjvtyUw9AunM4pvKNHd",
  "key12": "4eJRh2SSDv2dXo2cbiAssrRsSmyC9kwvv4TbJJEBRoZxJeRWeKupxiEMTpoNYHW73X9iJhCAxieDbxJgPNPabF9S",
  "key13": "63KbKGQ6UHn84CCX88U5WoehVG2BLp9bPb5EbHeWNKqsSjx7LywXoYTtZJfNZFM1WDSKaaGYj8d9BELNjztUBvVa",
  "key14": "P2LGuzXBiXogZG5VVDytrZgThiprwD1xJ15mEasmJh3NYfa7SWmfHwgdHtky49arUbZEsKpj9YDFAbtfTKprtJy",
  "key15": "66USGpeUnUA8BGhmbq2RS3Sg8XQCdPecSYugtMjF5GVWVE6hsiRVquLkGxCF5FCkdbboiUZRyyFW99SjQfejzenS",
  "key16": "46s86TSNuEJHN3fwujoSiDZmUmyef81uxPxknVR37TPstigGX5aaxnM4Pf5c1byWRgzWriY8nSkgzZ2cek2LTsNv",
  "key17": "2K36zyeUkdHvaZkAoipE5y2Kyx37MgGgxcBFnZPiP1CS45j9AQ7oWPQBComTRXNQtNMuPXNbqPpF4taLvVobYAaY",
  "key18": "54NNTUjAQ4QHgBk9NfemeYCi5R6yQDGJjvzitQ4w28BYfdJc3Gn1TpwPvBRtiLfgYxP11Lpmmy6YTmdXTi81pfd4",
  "key19": "5rsqv3fsk7fPWzqHRG1ZAdbC6rtjxCBWLWVmYbdjuUHLwrcnYqHBjB6MrcD5wDU3C5UCuyaZRvEWjtLKei88QKd9",
  "key20": "67j5XUYSiBczYmcrAWgjQRoLbrSsnkYMiZsQKY5y5wEK4LgW5roMJjREfR5wDiDXb8QhSH7F1657tFBcDKz6Nhe2",
  "key21": "VygMgSuJa2Yj6Gv3CUY1hxfKEmpoLjN9UufJiAEz2zoLiwajoqyn3eoD6ndJg8txkYBoYdvE8h4CymVcs5E5pkp",
  "key22": "42BJ3nZNB3u1TeRg7HjvYrFRw3wSPoEjqm7fNZZny2iBfSC6hUzdf5DwGEdyYQN5YVgVGEbBtc6TAD9M5NDLhPnj",
  "key23": "3EwvKLiViyj1JLvnSz7bx3Qs6q8j8JWgqqtqs9EAAcPqywWiuhrnQM5Uc1x6MnbaFpKyh1DU5kGx3insk7jaqsPc",
  "key24": "3VXTmgPA3nic7ePRYveKmfgjSpHr6SLFNu3Q8F1uG6xFVa3pCp15skCbvBkc2Drxt98K3yF51i7k58Ua94s8zktA",
  "key25": "4aLSWB1rJb6FpkTdkDZg2KeoJrkkDVeb2kNhsQcgkSPZtoSAa9SLhdnCQBaGBQcG198Kn9cP7w3q1x4xnW65xCZ5"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
