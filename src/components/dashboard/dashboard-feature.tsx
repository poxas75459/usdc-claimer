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
    "5WVA9fBGW1HVLfsCgNyxn2h6nJqoRbuggMZ9icsHhzVJXJi1wtLw4Ki29uXbb85wq1FFX82wuPE2akjDhsh6Qicd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkDD3WEHXE2sr4KZux2uvU8gPoHdERxBqKX7VKzp8HREqhWojAkJHE8RgsD722uZg3SMwrABx9NDVN28KhUbezv",
  "key1": "4mGwDmBiSY3u4sJnPhnSoCJAJkA1jYwbQv4qZp6XQdpCugoQdbRXB1shyUFpcTWeiMzv2rNhiDoCahzSecafTvQ9",
  "key2": "3MgeDq1ZftHtfr3sg7jExi4b2tWLReQEPX8GjRLvEJM7DHhh6PE3tnRpYAEhpqrbLCBaffRCTVBPvT1NXNzKytFr",
  "key3": "5HqLqSncf5dtNS1pB3EbsdRHeq8TcNkm6XnUUgzz5nq8nNNGfq98jCeHFa47XXrrgPCVL596q9DgmzHQ5wHRUU9U",
  "key4": "93jBc72Rn3wGQtRr9B51b3UMY2ZGwbhiecqHGrrcrpj3cpPxzH4pTU96U8uuAWb4fBKjUnB1eSNtaWEbKDRaoRw",
  "key5": "5tQyeNFxsCfAnhm7EQRB6yn3TGzdKugie4utZn3LopYQHsLAAxaq9SzMtjU1EVhRaCB98qYYdVed3NyfYKvoX9wS",
  "key6": "4PzGjr7YVJjUXuUhw1GwspgwBGECKicff94vWCni6WwDmtKRCdDgAcx9BkUSTqEbvAg3tP4aJuJNWwQ3p5YYJAi1",
  "key7": "RhakJ7Qu5ZrqndeEdTvuxzf2BwaX68Bj6s2sR2ivt9z38aNwQqcSB1bAVrws2tgoDTnDeVJAwYLNUCEFSSn7Wi5",
  "key8": "4ApGR2XgxJRBHUtHYR8K31v69K38J9GUsiXs6gkvjQER4o7CS7kTAnMs5z1rApUxKFbh3VGxWwRpaxpVxTip8jF2",
  "key9": "5fYr71mPx6xsxDsjkwWT8Fqo5mvqDySJesr3XpMKHrwDBPQXd6HZbLuCcZgQMpVxiKf3zGR687wnUETknaAEw3n4",
  "key10": "2YjK9enubEBrZhAGKdUb2J9PusmUpqW6SD54RERrFAbAHiiDom9P3UtMSKZT2eMgTRseS6xatuS13kmC6QzqVHqL",
  "key11": "4FjEN6kzZ4N4u3weHiDmGNfVG3p3Ede8M2achc8A1RjCcXdxD4pkviS7X5LPr5p1gSpPLrMRCvhhJrzskD38YPLw",
  "key12": "5HPC9Fs2MNmr9W3pTD4CChxXyTQjbXRbbCeBvhesLd9PpoSW7zNG2MDwqZgyrJGJ9ZfakJnsdKsRH2D1b1giYJCz",
  "key13": "2BGZs6bswbkX4MVA88mjz8aqiRNMhmDKQfgK82Bi1N6nNgArkxUvNgjawaD4KNDs8bJU3KjRKBjst11soJtJx8yX",
  "key14": "2xxy9SybwvbB48KW3Nwtce8xWJS1ALY58u6iknZoLcvtkjFLdkDakaw1LpXt38g8AbQznFLvPQ6n48yXydWCBnuE",
  "key15": "TF1UGcL8WqPkb5PZAGtYtmXciqspfWcMzmdmyjKjHSowMesdfipHMJArCJZh9SzVAhbi2X5xfPxKCRC79ojcCe7",
  "key16": "5g1mknqLMiwHAeNetihGz7dBzsw3XYZ9oN2n2E25ghohLhr481SFgR9QCpaTjcbU6ZaX5nHbWVNSnqafFNh5Eeyr",
  "key17": "3b5f1xcTUGi7QsAgnLBU9JDReG7DmAumuCPYEZwxAFKi4Y28amgXSd8onyiarsb8p3spVWwZPFbZf52iRDTfRfWa",
  "key18": "2xWYXHCs36R7wBbzqkacGVHjQ9J4EeGM225dDHCFEFxQM3qoeFeWgsD3LC2aHnqbHWNfTxa2mS7cQ75424xaq5bP",
  "key19": "2vLcgffD5fB7bssoiUxHmcG2ma8YNF3MtpWxUBW3BAhW8saCkWBbfptBrJegiDbhfVz3EGMtapACKoDmg66odPUT",
  "key20": "g3LVEEGd5FgupFPdVWG3EpjuPVT2YVRdqMW5SaHY7Zh2dAkSFFj2QGRizTEcZLoNihzaJqm4m1pFE3nH2dgVxkp",
  "key21": "66ofrM7gf8pqnkbpyR34vmCwPDacjyJNotiKPBzXqeTF9RguvaZ8wHWbPeLH2ngHtWpbP4j9UrJSzTRxMeWWE4KP",
  "key22": "3BQMWCi43ii4bzRzfTo5WGaRjn4HPNZU3MtRQirXtkgN4g943HUC28KsvS8dLDbAwmCi8yUEbidbUC3R1mkpWuiw",
  "key23": "354a7CBoHmKsGJRxcwX3y8BrtgPY9NwkHBXmzfVniVbPkjXACYP79st1GFsNaM86TdqojN84pRmUMFWCGrTy4jMx",
  "key24": "42z2KCn7CeAw4nDRnr3PBD8S8LsuWKm1kb5RBDNKXhpkgUsy9rFNfgSuPcbxFsK7nzt3KCmt9iPzFzNETr9QMwSo",
  "key25": "5p1cuo9EJc4eMgjPHy1yAPAzNLfNNNgdCXNmD8dqmC9oSt18UAWb2P7gccW43MhsaQ6vLFKyMYk8S8cMsKD5uPKP",
  "key26": "8skitjjMa6hNVecGQCaWZym8TiSC7RNrJKzkACA4XUb3efsiaD8D2Uyzs5F55rHXYxYfVdNDU7VBopwCediLuNJ",
  "key27": "5Yb7zbvp3tatbSohBUiUSjZ7zkst241myUc9LVSK7nPD5uY1iCfzXLKSPoi8CCyNcxSJCKX3angfA8Q1BRWfmHyd",
  "key28": "4RQcuacsJKtAFaPKGq5oihnqSSXviTgC3LohKMFH3mvYnvjbJkMMZDAvBsa1JAC5L28ni1hksyGSaUdJiooWb9yC"
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
