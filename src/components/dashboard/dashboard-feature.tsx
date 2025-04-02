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
    "4PB9BZQLMFp1HyPiRW5dnKd3kTPoKMtcRuot6WMcTcg4RTbGbFBwVYM7n2R9yJzXaSfhktjTcgUMSdrq2DQgUfgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TfjLatqJo7Mxvns3NUds9YVRbrZ2sPvWwrWs3XrCFjBQFidt1ZQWx2Hiygq2GYrQKEbVC4khaeHpYeDVDiiwxHk",
  "key1": "JQy86ukgNacjFDZYcoduXWVLvSpF8xvaiCmN98BHekecJMnqFzYskSUrNck6kuz2ssiGnhY8dpvjkSNdKeB7giX",
  "key2": "2kbcbySMmzjeKoVkLCrRcoPvmN8jDcauiLnz4iQ5P8AzwE7BbQYDnvcEUJe33csm46Q6rNDEFuDNjGFyPdFzey4Q",
  "key3": "zjztp4YzRqbT2nznyvVvnk3KfHbZnjZBRF5zHVLfpeTZwZmoWEykN1vUH7egjzFxpUD7xpRe1wfDKbJnXrHKWNi",
  "key4": "5tZyf9gNGUkeQDdGA4Fz8Ze8UfrHXs7H2eZsfsW3Y9okzGuFGqso9BkTikyDhudnfTg5QRnUKNmXJWMgqA1QVuYH",
  "key5": "5hfuQX6RzEzPMFRjQ9ZF7kWhtD8jf8cpXzcCYcHw1REc87RbconJppsxjD8VDMn6nWfAdUqzoZu8keTT9wJCRE7P",
  "key6": "5dfUJhUynqF2GrdDGeMYJ5d5XXi9CQYpmjPvpooxzWbDYyz2sULRJHiGhpQWp8eQMnuyvFh6j2XcnX81pbFHWGhd",
  "key7": "3vzjb3kAMyYFz5kmw5gMpbLXGma45YJjVmaCWNnW8QDxu7CcmkQL1ynPpByAiynkc9rjjUGrWzzgGoYT6o5tdgt4",
  "key8": "2R87VoqrABJRczXiUDCd1RVamKKko2g3Mzg3aeVWN6rJ2DzVB8X9EbhETRZc3okmDfL6ED8vLSjoTgHJ1D1hdtkn",
  "key9": "62Q3GFkHkf2MQzhXtPcUtrfDS4cyAtmZSK9Mu35k2EunLjAGuqaVubxRtFWdEyxiKt5jNsHhATtNiAXsFL3L1W6E",
  "key10": "59gVqvYrdqTv1mMfKCQcTphDugM3txGafvTY7pxn7o5b4jrFq6tirTV5nyzfbhUDsPvAPXgBdaaQ2ZqzK6GqoUKQ",
  "key11": "RRnupmhsH9KnPYtiKbCt8hSDo7YqKPd2UMRLceSnWZ1xnSiawxFTAoeBJpvPtxR2GyMGVWeTx666FdS7CZ9WUDb",
  "key12": "52xyjKDqDAKmtj35sbjyvS3ddRYMTbxRpZvZN9vS7gi3yYaLFGoZb3FJ4txWbSh75uCJGrGa6Znt2VHKABDYoXdz",
  "key13": "3LhreJ6fKfyahQPpRWMH1BubBaP7xsuNov9iatVyXMS9YivvYC28x2neofDHpDK6Ars3RqtAX83ae9JhPfvHTvTX",
  "key14": "4Chbdi4kbo6yKyJDk7Rd9XguZyFs7dLVAXXDgZ2WfqyRBGZn7xf2bkjGQCrZYxFRUmunwxw1naXNyZCaSA5BoCS1",
  "key15": "5G5sahsR33PaAf7qEh3eju86jR7wkGFV4PHHcgsqP16RpoWs7FVMUZ6kY6RMYiNLcXhoSDBzPv57XgET9VJfDZRm",
  "key16": "5AUwt9XmCPEn424VEzJetDkNAQoj4iXWVZaSwbNa6U9nWUumajjtw8rThjzNeEZMgGLKDKtURzRrTAnwUeFgAZNF",
  "key17": "3Zt5oTQnNJegcgdKSAJRHFrH4FUhMf7mbn2JpGwDz2QUMuVyzWpAsePvn89UkqTiDvxPdLiJaJTkjgpZvYsgakjb",
  "key18": "47qCJquNLAosfHNTwXRLMLcPBLVFhVT53doNdszY7BM3bgapssL8Bkwzs8L4gv1g9eLiZcRX1ymLidjMkjRJW9nS",
  "key19": "3bo7pZPFRBmAYVsXNsKa5riKBgL7f4uSdcYzJDwCz24KVhMnp41w3GhTMUd2a2z5RbhUsqgjYWhtcHTqsBXXxAQG",
  "key20": "4K1mcFmmSRkBMTUTBUF18Q3VvpMwZ8VpoAuthnux86inqF12qaLykWqzpugiRBxcFpPc3pyXs7veW86QV339Y9gZ",
  "key21": "5QP8T9TNa8uK3oz51cbrbcBrJo6ZAvCzbUJ9QzbvfQHeRuyUsAo5b1ap1vTxGh9s6BWPZUJM3UBgWKehfKWMirJk",
  "key22": "qceJWompEYbVPqMJXck6WvzyHKymbeuwFKQMSvrSG7kPMVPo7ydePQSwRmp73aZ44rfHsGG3kBm64KhR2nSHdLj",
  "key23": "5E2yviSye3Zrmn7aKksLZqUQ4HxRKCPJnxEAoSc83aLe2o1rCmjMSXi9MgNUYwMTctUVqoBv4z2gtzyxgMitvMt1",
  "key24": "tv2ZYXFtCQPQawjLcSqiDGLALV13XkJKPys7sGsqAdC4JwQVhnk83LSu2L9K8bo42RZBkaJafB5zYfesnqPvVuq",
  "key25": "3kJsWTteyYRWK5fz7N8BpjkKNTthtzDGknLqgwxvE6kdzPBBr7J7qL6MjjYjZwTgG9EzV6qZ5bhTNirUrcJskPTQ",
  "key26": "3wwVFwMAzLaS7bG7nE2wtLDp6m8hiqfQkyvLwoxfSktx3nTobhqHq2FhpqdoQKMhEu7kmY1c1xT9Y6q6VuQovrgd",
  "key27": "5kfugGGJmLwjPHQH2Bymn53vFZSXwMboNyCdEWfBK1fjfkAF4PXDUArmRDfDazLPaQURQVT6XSraj7XrPDMDZm7k",
  "key28": "2pNKpwuxq1qk7WUcVW9MnLJygEa9TwBmyqUPa8s4kcJm815LStmr3iKLtdsVZnwKVaoh5xo5VMdXevrhQTfhkR4S",
  "key29": "5ohk65p47vGGxi5CxhQCjRfmujfa2AMwXKRnBLLpvvnDCqaQsvnRyRgLXcKiSrPSxDhcWdoMC8Z3TNvY4AyXBW6g",
  "key30": "2uUEtyVYdZRc2H7o63n4aF6A4uxJjDjJSrXwj2NpK9wcuN8CB6m6nB73MLXyD76yZ4uZdHq6cafbSmG1hPSDuowz"
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
