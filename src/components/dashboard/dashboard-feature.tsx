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
    "3owCu3rLXCuTzJwab3SWYQP2sWMhmgUHP5S819Hj2DL84kUyWpSLGNhUuY27VXf3h7CHrP1zkDZA8FEtJx9Mq2tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33WxRrmvq54fUs8rdHJ7Rka92nUAwQ9o5ZRfmBxQjgy46Eq9mg2K2sAfzQT6K6fmmqrnYFp9oAdcxAFEneq4ZGQM",
  "key1": "4AhmrW7aRcDt8iRTe1qqtREBRD4SUqM98kPDoP97fwuH6C8boX4agdEjLtgzigAxNw6mEJHZNkV1AQVuqTPi8aq4",
  "key2": "Ab2EgYQ1nEw61fLFqToL2ykhbyLmuVwwDNPUCG1o3fgjphrZZPtdomWFsWgqvEowKpg8uyBjurNNWyBPpgPmQAp",
  "key3": "5K31AqpNJBnnZwGTZCVmCjQjEr2CNtXiqhmDiF23MyNe8A8oARehZRj5afNfTmkb7nYTDz8BguZJMDodWQmKsb6J",
  "key4": "D8rgkMu2hneX6CcKvTREr39Wu5a75Wkuiwq4Zd4FR94pJU1JvideqpTAazAd6UdN1wJPRUqdLN7mhCNhecueJ6k",
  "key5": "4XK6bYFS96fTvWf1XSobD2x4H1xFKM3LfLZtjsWwSYAT6zp9gMMKMYKg1kVPJCcpoaqkPQoQBZbUm21Q4fLMzviP",
  "key6": "4tfw57tyYE5HkLvFPWYeZDkqkATZ7KmsidWav58QwisRT2bKwer6P42RqRNou647v33yb39GoNYEr3rScGJDYcqC",
  "key7": "4RM7yaJ6Adima2JCy6uBkaEcqkwbYFATFmbSYQNcPzN6JsKuVjfJT9Xxm3AtdgrmW8eco73DSmoHuKbi9LE8xMtD",
  "key8": "2DCuQ7JyBk8Ed1YqaZ8ZL3Bnzsbk4s8oUFBjkFui1iGkq9ko8NCpc17n8BQX5NaDEzLyg1i7QBrpyiPeopz7hiny",
  "key9": "5h6RZoUGmDYufhMGnxb2hS8AQubbdNLTkDyqoWzCVdtQJv4aYf1nEW4Ho3h8ey2SWsHenjCBd2EEB9KjX217X9kK",
  "key10": "5E1x9cNoR5KqqACMfCYn9h8DXsnaauG6e5W1qhHFNQyB4HzetswKk6q3nYS8BBFwc97uwtLh8We436Kh6Ay7eAJU",
  "key11": "2naBVHMQZbFEPxk2mm6GCWqNxqdsrqF6HhPaZcxkrP3fxjBkgf9pq49ssvSch3SRaDDU2X6LZhDvi5YoDaQpWVrF",
  "key12": "2dapJ8V844WuyGGnTkVvPTAkcmMetTrsmBfyLaG6G2948jgXDHGnkw9Np2umW3T9jB3iP3PUmVmU9w8N4Q9tEWUT",
  "key13": "5EXqgiEZ7gcwTJtPNT4K2qhXgpPaiZRqX8rkRtUdvMgRmNb39hgMHvtWpUQ1iv4yZ2mmyZHnHPjff63y4yZty3wv",
  "key14": "5ki2MxYa9RJShNfJWG3ThF43nTSds1emBovJQ4KV9jHeVUutUzPEv8po1qkCLwKXd2qhFpnUhghPfeszwMF4rP8h",
  "key15": "3TiL6gq2kJVcUNoZpNhktnpJtep4EskXzqCGWpZB11KHTqNkqQSt7Vt6RpqLM3BxTcFvgjrCAqqD6sZfVXRSrcm5",
  "key16": "4mm46kRhsDbSQh5jhWNZEStFmo8FVNSHVh59gorTbGuLBbprgp7XvFhw99MdTaKp5T6yaNWdvHuS7SZMPdrmSZAW",
  "key17": "2Z9XnKfZtuFv6Rp2cwb1UPcbwBfoazQPRZEfY5JVB3TxSYVMSTRyM9emj7ww71EGVL5ZjR98dHSJmd2anN84dvvP",
  "key18": "3DeBfpTSDhYqtfbuCDAGkwviFjfBCRWKurkC8pRbydtyXgATxAACKj1BSWUjPR2DeNg99cZe6ffqbd3q7Q2VjSP8",
  "key19": "25kv1iWdXq5nYKrtAz7cerMVua43MncDuk7jz3umgpXn5GAMyvED6sHewkooCkad7zq6FRuYgtuy5Xgw4WSsh7EY",
  "key20": "6MnEmxVZ8DG6d6PoBf5pQptixAfx9bVrrbS58seEua8hoP31V6iMbpyXrendnLd6KBU8mbqFuF3rQx1MnreVKMv",
  "key21": "MH21EiAwk2RbFXiFAtRkMzuvNmGhiZTKt1C7L9q5Bn9jhPEU9jjkSL73WhyibxGc3dCbSHoqWXknVtUTrG4vNd5",
  "key22": "2Uxf33A1cSCf9eeyNyQUxJhxSp7VRxqzs73tcjVLT1Vro8fRZp1igqMSFNaFq6kzXAadhxR7MugT2bVpo3WhLHs4",
  "key23": "4TYp1DK1Gk5SjrvTKwWwDTcdG3f4j6JNUQMMGA9vBgE8aMFipdjxeHeP6ahckXiLVW7dkqYDjW1WQroZs79LtVoh",
  "key24": "8TTNUnS7KbSJvQxF8Nuoh54nJzQzdwWFnRniWisVJmrvgbroYyfbKwp7hH583VFBG8nyKxuqLrFGMQvt2uQASai",
  "key25": "w8KXhZ5K9PYKusb4UsFR92er58U51pftwBkBXtiX81bhBzJhKp4GcFgHABasz52urzf8KNEMhWee4V9VyG63XpX"
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
