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
    "5NTefHt1PhJA9cfej3BPbTjK136SrwoSEoWXmBw2jDvzpsoaa6r6sT12pbDanuLWupkgj18KF2AWpCGkU4tJC9AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7APHbD56UNFgejmGAMMybjSgzhzi8FhkfjkG9FQ2rwhwTEFWHTpWNuWamNfGgHRU548A7mK3kHAPtpqjghDxqT",
  "key1": "3raWdr3KvQPzqACMhSgxHu9gThyHKf18PhQayPhRcCj59RtRMxmnwUpj2iTBs8YfZ9bwpbwf7jeKUAKa2V9VA4tD",
  "key2": "3tn9ereJm6waWAS3Kw4MxNvWc42vMPEVFwjoBnDmE4kAASqgovAW81wok19LxNpjWGHvHZ6jCYwPmmaDgtLDAiXj",
  "key3": "36uM5zBtMshqJm4ErfMuB3zDQFVxoGU9iU7QnybdmgGzW2rwwhAFNDtk8gFFVuUqFjzo6b7PhCWL6g68GMSR5XSp",
  "key4": "FdkJjV3UncB3n8PiNTbbGoAikaZoLbKYupvd4FKL7tuzNQ5SttjLfJmM5Njabp29JWPTxWb2mYu7exU8K7QGCcu",
  "key5": "Ej6S5HQJRKewwpjWqYiy7xsqzxdELNu2bu9ph9b8zYD9DRgLf8SSDtmLEfSazWamd1bCVXUThe6xce5TEHXe2u5",
  "key6": "43aKaQD5GQ9Lkob71UMguAm38twha9gDRswEhf34uneRuyioagVrmap3KtVP34YbvhCmnp86c54XdjZarEfobeVw",
  "key7": "4y8mgCGypsuE8WW7y6uFKZNSzkX7AcKTVk2wDCbz8hKmGotMzged6jkeREEQgoKTXPqcSCZ13Mj4rHMHvExaN5za",
  "key8": "4H4uEYFh5Bip47V3d7angtP7Bak2hG8V2sKsViNfnVKEnVgaV1MCjvR3uVMwtX4HTKGMv7wFD2CgLYaS2u2PqgGA",
  "key9": "3PDGCA8ARhskGJwCVUFtJFywqCY2GqviCmW4VCvtoCGUcmkuccDgEY8vwoDwiGijHFe9JDvJ2mp125Z57KXwST94",
  "key10": "KnDK8TTiXzVv3f8ho23Pv8hSEigw5QXy2yUTSLpSu5LFyXgbFK8dzGiL6odQPi4abj6NeWCAbPo3w5VeEipP7SQ",
  "key11": "2CThMwVeLy29tuGFKWp7LrUSEDz3xgwsxeEe5XAsvvdf9wTbSTUgXYTkx18Rz9K1mbx26XBu7WqqmsnBfk1Gfqkm",
  "key12": "54Su5Ru4xKovxTsLz2ygt8WgUAd4NnnUcvz6wNBVeLuX5TfZLMjoiqrErL1BMiJWwMVgqnHT4t9zmHYDs1PZsPz1",
  "key13": "4rYgFp6n4sjUF8fdemt1b8TgZbVPig4NYkGmmUu8PuwyLpai5GopBpSCXPJCoU3KEKtB73AMPxZLZeC4xKS2CrVU",
  "key14": "221mgfVYDsgbunKZ3zMRxW2c7T17AfGCZqmuEzUk3ZpQLxmzTJHJMkzFFwnqSRyxAULa3DdihSkukPfSSWNbJWTj",
  "key15": "5TWZDRGVf7G6wgbyBeNJaQMur8MJbvbJvJbArPrUV3NkQ51JiFzG6FViYj9RyDcxyza4VQzUMnEhvdAM7XseSzsB",
  "key16": "DfHBTBwk4X2VUMs9dNZj2iQmqrE8QzKyAHZ5N2N8kNt3W8GAWdYZAPRqqMWAtRTHnKnzgCq3xczWM1PaJkMVK32",
  "key17": "5FCSCj3v6Wq3U636ELtB8kmmid9ALjFLm1rZeXT7WrP53KX3WeCvSFvAiCuVJZxw6mY62Nv4ojtRHXc9Dq5aH8wX",
  "key18": "2eKimmrB5rJaTEQ7Le81QyRMgLSog5tduBHSs2aCr5rbZT2tfdUDun2d5mS8A9z7HHYEeRMuRYhWYSYo4atQsSGi",
  "key19": "sLgJTLcLQmbZ3t4sZqwHs2gTRhpQinhonQ8jDkrNkfigkogV61ojE3ANb6LTU9JQ4iB5YbFEwxJNDnf6M81rreo",
  "key20": "VMrpg3JCdUeZEFQPREpDxzc1oxrtvYx85LvQ21biBG9LN1fy8vriBDHCHqe1fMC5hZ74V2XC8bSzKJXLaae6YGG",
  "key21": "4JsmGPpspRkG5iCCJ8s5pPtbNPZ9pK7XDxk1t4CUDMeXKnYsmj5gPK632bnV9kG72S4F1E82qGjKJTSJz6CjQHzV",
  "key22": "91ruUq2sv1xj2MzTukRaP9foUAaT12DD3KSWmMRztJyf7WUWhHZL1kWjULJ2AWdJ7PLCLhuKHXAkaW6ajySxmMd",
  "key23": "4tLaMutwU1TFsPjV5CmKPtW1RJefEo9962mcpMA4AyzEyTCvgS1PTe8LTWqZht4tc3cB777JrXM5DLiNiNAo4sEs",
  "key24": "5E4J9LimqnigYLqQXFSKcLuqq4qoG4y5xgLSB4W9khiMWEjRD8xrV5T3oNGXtk7XUx4FPRK9N4Eo2ZSv8ePcCrzX",
  "key25": "4BcuEL1fAUGLVuv4B44WhWrBVuavyuxmb5aCfj66LxJSknv9m9wo5n4irsFJH5UwUxd2j7uydkXRHYLaVAuB2htq",
  "key26": "31tMrJiW35LurtvFnhpfWn3ZZ2WK6VRJytwLt61tdThWd4bvdjL93EgjCryihF7VckTveSqyU9iU5uxzK93bX9dw",
  "key27": "2kCdrL5P3V9aCZsc8nqTnLMnw2S5YdFQqE7rQLHu3gkNT1cLvGAz8o7rYFXaqv1AqmLcvWhzd8JoSzbqNHkNNKAy",
  "key28": "2njsRoSA3C5V7gBnrC72hfBaKpq9k4fLDcnqL25R5wLuqPkDoUNP4yzCqkc8tDPGVJRW3HnmYq4jqp92Q8jxKT1",
  "key29": "59RtAgNFFkuB58tudGiHkfszeLKNy9tM47mwpUmkL7aVSLNJdqzzwxm2fuRLXvg8yGJ97qzBg5u4gYi8QPvHP8Mq",
  "key30": "vRPdhYuD281ithvdvFPftuFqD8HuYbdrjZ5ypmgYnxbvo6gNK4JoZKrRt5VdRfXnYnzMz3VDM7szwpknmLGANi7",
  "key31": "4KX3ixiwPrJjQZri1wfdMvjUwEdx418mVpa5hycT1vMGuXycWbSxUCGUbDEDJGh7se7s5UzXPbKu5UwY2yKZo3q7",
  "key32": "2Db9n6w56pBsprTvmtbCmuv6SfBQjBfTo4W88YUycXvRiuQLmkmP6tUFVXXjRi3N6kTnSXyf6MaK6qFDSUsC9MFB"
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
