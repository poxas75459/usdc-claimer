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
    "26rNXizHBwb7stx8etijKhwaCuT7R5RVzxQezsne96xvBbCztZhFtvgopXUERxmR8MrgFXoEQ2iNVD9f6krABoC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBt6ZBpPemix9AUc8Fz7NTm3tNXKd3JUCQyyU3PG6gVW6rdGCdf8KxJpujPEzCuHW29iiUgrzyZcc2Drm1q2Zbs",
  "key1": "4c18hV4m3rhdjJ64mAhP33Y4pMjoshj8dv6PziKTE3aiv6mz64UzeEcgVii3Eb9H69Tmy24VCWBdxKKnbePvEHiw",
  "key2": "4xc63PUcf1Vgt3GvEaMeuHiK5aChcrfYNb5n4c14TZdaZErrm1eSH51GkUUW7qqf7Vd4yf2BHyQexqXvKyQmxJEE",
  "key3": "2vSzxRjzuRDxTgVMpVd7nQz8Qm53KP4ofmozDRmbhvAKaC8NhyFBUMWzLqrmRuLcRkopzogTKSkwAGCNcphuwGxm",
  "key4": "2vc5fD4wBibQWDKntbofMe5wKJfZrEVbJpcMrJXomNZgoGsiZyTSJSYMkAs9Fv4tJiH3n1g2v1BejnumxHE59hNU",
  "key5": "5FfZvgVGsjoC5sQqQdrVtF7djybXqo2Y9gqyBGhKBdabJPJty7EpbGMpEztw7DXtbC5mUzBUGoxu2ZxPACwFzDfg",
  "key6": "J7ojaEtNTBJJNga2fzYezgjrkJzV7ofB7SCJg41UqBYVNfLB1NfF3QAioisn4yy14NgoexMz87kkNpjUZjf1DFX",
  "key7": "4v9vKD5Zfymp7yY7FfCitp5UQiLWHr68E46ixEuGgFAqS2TGzpTHy5vqwUREfoZRFpMrJeS5qM22pamDQRSDimag",
  "key8": "2syCAkK38D1fVYrApTw4pDfSc3rqegRjPBVCBgkpx3V8iF3QtD8L5UoJYHjtduR5CN3ppzMvYafcLNMLcAPnLhwN",
  "key9": "pc9rmtMSGvpUYgDBhwr7KT9hYi9qbLkZjMi2Pg1faEsh6e5jrU8qMQKhCTQB4rRyAyEUvwQg8joUiq2489mce59",
  "key10": "3Xcjjz3pA6e1padWWFw8f94KzERRQVYztncDKcivbFGKjXbJBfLbeZkfQwbE3dfGDEdxRoN4c718rdmfBEk4aDJD",
  "key11": "2BUTdhfdJQEmnCiTRY2TxDQ55WQa8apzPMTXGnvFXcd6TPdVb32btjMwLn4YvnUtoL1LvagPNnmJYzw2kwwpWgMp",
  "key12": "2xDLKUNvDh5zA6jFKErX3ybKkKZbh9eCgp7Zzbfzrntfg2WUggGJmCqPVMzPSrcxdToSNKxcZe6XzEh6qggsp5YE",
  "key13": "TN2A3M65gcsRvkN2dGhpCZHAo2EpLHaDCexqyrNWne3ak3YhMx1PqxsQjowtHBBuXpTJkWQjLVBRzJ3CEgNKysj",
  "key14": "3mBPFVwWzJKiufMrvxkvF4GPg4n1GXBJ62XWMkM5s6sFyxHpwH7C87j3rgiWNsr9qzLiZH3WNQ4T51ZLmCVGfgNu",
  "key15": "2B4xriXzQV8BhHS9eqpuEh5aKGeJ46CUkVPhWWMVoVZYfdTxTxqpwxm78qrWaq2U3aN3wppKZaDnWpf9LnjYrE1i",
  "key16": "4E7G3JMuykPiHCnH3thtHEufTEmWK8MJfsT2VB2HMFDk6XEhPEoQcdKHiHioHEdDLisAr5JzkZ551WJHgUgQWqdU",
  "key17": "ZyBq6axxDymAHWcBrkxoCc28xpBXB6hQf4n9n3e6j5gtFUdmdTJFLkm4dsW5Mkq5heqcBKWooCQbH56UWdXsv7F",
  "key18": "7dZAegsZav4AkZxan5kiKud6uQraahseuKjsEB3BeySw1qTVeXhx3VG8LJjfpgCHSYc2NwZ55bBmjPbxyoR4kpS",
  "key19": "3gyMfK82cKWwVC4XwkzjYeuXoLc74s8ZeApP7UBWwJcx8LhmsLVvqMfpgxKndHUfmk1Ybc31BBbch6QZSTS2SA7Q",
  "key20": "3BAh4wc7sTv2vbTKQdVHVBqCbAzyVWqPJ3Uih2QcLH6vgkC6EsUTas7D8LkoEBokf4ymLsCk7Su3nd7Yw6ox9S6G",
  "key21": "455ktdhLZBymoE9maugNdsy5hrudJzFvets27F8VWY33VrTnn6Rtnd6MhJ8eRq61FUm4ppAd6TuX2V1i1URneDZa",
  "key22": "2Nj6sc1gV7YMDFSVEcbPaWTUADmmg8sFtv9J6jXxUm2NPXfob7WdDi5gArNS3mdZsZanGSFw4ziGwqKGJbZurYQS",
  "key23": "3hbP5eo8N9fLdmwcEPwSWG4dj5pUZ5tUrStf1ViyC25SEJwjRdvYnzXQwqPCJxq963s5uVR7ZsJdkbck4Y2oaBKS",
  "key24": "2Fket8RrvLKWVrH3S1BZPmrnBJpuVgx9si9b3fWvPjYSkeiee2ZRFVNQHW4iJiitqCYxW8AKRrTeWroDrHEzF3ay",
  "key25": "5PfD4rnHw2YUHd8NZ7GUyiVCx5mafrBpRYs63dXejZ1D2fWwh6sgWsfvJ858grTcJjJ6N1PDx64A1WhFfAcgLmXd",
  "key26": "4azqmU7YbAzbo8ifGu2Z7CWAm9Er4Vk7pbihHTUfZnirHu9dmpE89n3Lh2b7dYN6SKBRZ46ECBFxMSzd4TDfzTNv",
  "key27": "24RmZXk4Gj3LLy3yCexrpMz7LG3upjt8ZWL6Z4xvUTywSBTaUea3EcrYcbpFRkh5VodnshqGsFdnwbBvcwdRNmdm",
  "key28": "3abmFMjqsoumekHj6cpczFu6bCys9GSR3iFZkgffRFVQQFQCDdu719mmNL8bjewWwz7Gzh59byaHxe85xtKoxgN3",
  "key29": "4XmVrR8ounEE3afNhJbvrfqPtPHP3q5J9jStUmthpJdvF2E1rSQUhjk2pAJaLiV6grWQWDNutZQksXWh7ucbtqYf"
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
