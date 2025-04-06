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
    "5NM6mCF2R5Nc8oLb5usPNoQkuW4Z7DTBc7rQfkuqexB4JJdw1KMZT42x3jgfiPdmRH68kRyKBEDNLtYuFxa3Wr2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtxJYKfTTUJDS7WvyFYEBj1d236qAyvcXBuVUt98HDCfw1LcFeH77Wf7EtSoQnrf7Qj1y6YiL3vH1KKMbaJ3Brp",
  "key1": "31zR5bZgtzWjFuxTMNdsFr3QGDFh9v5J9heAyYvqjnsrVKnXhDwuNvn53aDe4rmqf75nSAe92QkBCnEBmadCpvJP",
  "key2": "4NuQxRU8uekXjBruTxwqNQhKwUu91uniiXMmeA28azWZxTamgv7y57vdBcYjPoMyX2HvWiJAvHfGkj9cRJJMgxZf",
  "key3": "4XewfX9LdQyWnEBn1jYffyctaRz21s6uFWPTcDiNb6cMWSJkDiUwiJKSHMkkMkmSEzdQEWs3q8YaLupzZR2Asg45",
  "key4": "42qPkFiCrnDeKK8kB4iTbjV7v3TY9L5Dzc7hXHRBtYrGeXfWneNATYxkoyK9qwZ7GDfWq9yiDxNNRBm3wmHhWQ1f",
  "key5": "5jZp3HBDjDgdPp5Smzqm6kZsLSzAoYHRTrUNx9SqPvgyBmeuEqVbJ55vTgByhEu5eFYSkhsgBSpWgAeBLJVUFV3Y",
  "key6": "5sSKm7MzvX6gA9Zz1RayicMUKjK9Sgb6d5HKJBpCa4zY7jxbdbPM8pz1BKQh9F4wmvouscVL4UboAr9Ltihsk73j",
  "key7": "3nTR9vEZwN4z2nJqqLFg1My5Qf1hX2ygVgCmxL4rpGyzUFvgfexF1bBSJRjPi3dBECZmfBAMPNaVTzFqHbCeoCfC",
  "key8": "2jV7QhwaaM4oUYUnFgJQ7DEdgVDSDDRjj6CMEnfyrup9qAUKku75sbhpXQ9V52ucZHsch4nzWdiakAet1k7ZAC2s",
  "key9": "YR2jGCxgSaxubfkPyi79HW8LL59DFRohNtABo4neHJE2WM4arRMCQeN1h1qZ9VG5rvaB5gEGS9N2qyYJg1DakCN",
  "key10": "4iXseSAGJGvGRNP8gwJCRM1v96nrqcLYbeC6jtek2SjyN1nWwWNXDSaKaKTd8Z7VLLXXfMjX7GEaG5FGDstGHpdD",
  "key11": "2KPLzKfxmUbGrhrf1dnkEgpMQPqdeSjg3AgqT1t3BEkPpPq2kR8wz9Z3j5TraNX56WQTfvVMfn8d4YdE7z8eQ8Uz",
  "key12": "2wVNwSQuhAkUYSFCvmu9oVk3AzbY2xXmbpZWBqGRhGTmKCbjnZTYEVqbCRf1o7fpooUjy1vKjntCvHCx4KxrWQ5R",
  "key13": "4R7sgCpmWo3yt2SCRi7JQoSGw7qW7uF6F5kviCzRdXM7Xrj5Ys9ioeiqhvwWqzGAQjrqy8YCN9fqct8KqoWiAfvZ",
  "key14": "4H1FHgavw6K42ULAsHRfs9DEEXyvHS1q118piaq9g5Cp8jgDAchQ5cCYVE9DwksHbDtK3cHaypZttcdS8J9CDrbW",
  "key15": "2UtirrQZ7VHEwQUP8AUUJXqQbVo24KpEA8Nt27vpPwDANSxB9h9Twed34xED1ecFoNNZzwAY49VJ2fUW6jfzsJHP",
  "key16": "4NmfMLLLWKP8ezw2QrrUxZcTxTnsZW9pkTB3KwWNrEtCB9JjjoxZQZVeRzbZiSzmuRFtnDQBtx1wUUwjKMbLYobt",
  "key17": "2UUEi74pezfLjc8nktnKPGGmXyDxtRGfQgGwYdFF189uyC4XbqoaeMnfXeT4RkcNuo8tGwQks5pQFdp1jiKv4ang",
  "key18": "2C2uXJcK3PtYW1eZ2RVNzXbXFtj9cdt9F4UtmAncHSiNMGRUvS5MwKtgbMuisTm2n6PWHKvxaxCGkVbbk1dbX9Eh",
  "key19": "3fGUMo37i19yMuZhi4jWZh9RR5K7ErEfjJ7a2VXLKHjjdnxhKazRYbUDGNW9drARNHiX8HdXb5HeU8CLhJLKLfYy",
  "key20": "3GJ9c4fcBs3NL96ks9W8sa13Ftt8qZEEY8vb5sSRWEBXGYuBmyjT65UfWFHY2kAgSrxuLKRCdhPNqdvNQWdwCJ7M",
  "key21": "3736t37zZNjaAVn4MD2vTomzHZv6G7iCA2qd7jPq4cvZF6tc7j5aXXk8Rikts6LzBYSS3CU24YT4fJoGEerHakbz",
  "key22": "uzm7YgCPtE6aHPvf8GqZWgkfmEFM4MZJwVcNizfdNTc5aTbevuH8AqL4iRR9s5w27SkcKvs6HB3zK1W42iKkoVa",
  "key23": "4mZPX1e6DXV2f113W1QKP7sG2Cm5CNp83eUk1H3ZfedQm4gmjMvimyoannUzB9bPJ5NYkgKD9jYwtNfTS9e8BCpK",
  "key24": "3qS67k52P6JwYR91SzQUhtVmzNSXGyrbWgfheeksvEHtXDteSzC6e5aXszvccXS314BLqYkjjuJtRBuV155KXk7z",
  "key25": "27PoiyDpYXgDm8K1NHhHNVjzpJuv35wnUTHr88WyzGMtLyyeLE1NPu61t7LVz29mRWtGxGXVb8Pm8JtDTRSAebBk",
  "key26": "i3hNTYT3dDffMauaE9MqVitz5dxs5caNFbwRwB2RUeRppdqbb3VPwbHDv6h6qSTMR9cgD8gGEb78W15DD51tMWn",
  "key27": "3zz457HVEe4j5yFjwBEx78Nk8pnzbi8z8Stdq2aRPS15NhScGWBqXeCLeSSTM3Pyk3jMiBeGThyX6CNRCpe6N2ie",
  "key28": "4JjyzuEXn9Kse91FWKq8twELUenXyUkR4HfD7sqvykcaFLgdCb4YpE9s1ED54gPmurniML4QujrLBcajKRuy3wYy",
  "key29": "2fjgS9cdU8sy1PE75fcv1MzKKqGmtmbXVmQ6x2rxLnsrZtJ1BXZtG6b6q64nBTG4vnpEeKSH2nU2euxevP98QzMf"
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
