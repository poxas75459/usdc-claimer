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
    "8p3P46Nq8Gb8ZSz4JRcpYU5KmBiptPCTv3ZPvBbRiTxzkayUd3zfVdNQKtgPJ5q4QEbZm92SsvB3bk9xEJ3Z1t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXYaorSnjHkEksSiFEUGL9i9XvRvKXvoJ3wM6Z2btwhjPxKkUcyPtBp6PDhyXpCVnWy8R8sR2e29wqdpnqQVzNH",
  "key1": "3Ws9Fv55fhYpYhvJDKL3ANfZ4LipgqwtgLDCGE58eEjCRyS7H5CrB8qJwrsbmSBxFXom7vnn6Mwk7dTPVFeCYBEW",
  "key2": "2CJ28FKAWZVq8q2kzZrAPfikDxCqTPBaAt4xjpTrfs5bpMcb8N6Cjaux51DXoNvBEYVEPmEVpixNxuSw6XB728W6",
  "key3": "3q8Ven1k62rqTQM7skBb7HqRnmYJGEyxNdr2Y49iZEVTkP4a4ZkKHCpv9KGLo3ceStVg1qtHJfueq2ztBnwV5ora",
  "key4": "5myMTvCAVNwHy2EihMxLkBiM2UWr1REVnwENrPbkUGtiyopj3JmSHoso5XC2Zdn7QXSHyhCaqTxq3pszxA4QTTcx",
  "key5": "4zLzhNRpBsyymhFk1YWTz5oDLmPrxorWggdoTLUcH5LmSz4cZ4QLBihQn7tnnJvdhTX7bFLcJJSf87Gg3wfD8QYq",
  "key6": "2w7RVdfa6iySA16xEuqMUUFMBu4WfN7qTJvPcRkURzESP3wLHFPnijm15MWAdmtEMg3QsuvpE5zCaw2LA3CYboXc",
  "key7": "227c7b9kxGQmvGZgcn45G1tQCk4CVwku25E1wcx2q3bMRpB6SrqfAPoetKtqmDPUdgL3kfHdvoou4Lb6VH7kDcFS",
  "key8": "5CydrVaT2xTHP6hbEW3cRkymu6bjmdSZfzoapZhnZ9rSnZXM9GA2gLux4hEjD7yJ65KJo5ZnZaKHAL2Tk2DHCwzk",
  "key9": "5KgMtQmyX7emcPsVefphQcwrCiZrT9jAspLn38SR3Q2LqSUeqfxkKCqsqBKkSwVmcBNHLSDk1e1AsnT7iuwmVoej",
  "key10": "5oJuySgbWrFRunzpuvbmo3JkC7gDBnvoWAYynG3WcbQDEppVfyP3USfPa6A53dqNc6sq5eiLT5bv5DixLj2gipkh",
  "key11": "3VvR4fEKku89Dc6GokNbkPPoZArELLA756SUoZQGqj4nUbq9Tt6vUWUemwSdwxAUexTyHDhBGjfjazP8M12zkKFq",
  "key12": "5MqY8R2Zqwyhu7gcu788dk8CnhrBRQepC9QLrm3ZvcfwT63murukEjNSH6hXjNkr2fkzkeJddc6W7eBZVdqsKnmp",
  "key13": "3aMfu88g1crejGFkYB6MTgCSnovyyM1AQjkZaQQ23wK5S5VNoAiro5hxLfjxQ5TaJWWKKAQ7hWy41m5rEnzCDcnq",
  "key14": "2JMup2fUg8jgneSCdsC9czhPbJPaSwseftDpHtXkKvmUfX9kC3pY7VpMeNwyNLZB71oBboZ7c6XFJGLQNnFVLGwr",
  "key15": "y7VRSzuhKzPysgR6m9DeBN1aw9aeFGJGRadZREHahVwJN9n9h4nTv5NVScGGos56MCokzhuoHxh76yLwPntiuVE",
  "key16": "2GP7KaLGWV6Ne5RKQgQ6QdiAsM3nwvaeJuFK8ZH37qDCdEpHuUDCyAxgQLBaPzWunnS99TwcZJTBUKLuu9sSqtRp",
  "key17": "3Hrs8YcQNXvDygStVzmy9ySW2ppTCAupt1aDdjenA8wwDDUhDrziFpoQP8f2bWyfB8UH2SpDGC8a8EGVd13cyfP5",
  "key18": "3bv5YbFXnp3HiDb6ffVbVkDP1kXNvXyAKqVZAYN1YpPCVcFyiSYsVCNdYuagGHrdNi79Arj78E5EmHoFcjiojxD5",
  "key19": "oGpnmU5aN3gvtezRm57ysPagnMxk1s4M3BDytExvkch3rRLNAbJgyVxqhjZowkygNneN9QXdojWZLYxw8QqMq4W",
  "key20": "5bGUAL9v94WrrhaZry6V8MP5Cxc9w8iti8tst6m3hmF1Qo5ig6EG6eNC6FSSwicaCh7uLbw6bBTig2g9sxFmMPMV",
  "key21": "2du36mUaarTWP7RZwt21hEgjFiJuLLVn9kqxsC3w9gxiivkdCc5YkPoxbvy14YMfoCTfosQ3zSJkBhtWBgxqCrpM",
  "key22": "63UZwDvBuvTZvffsYydw9zQsiWJpNhndGGrANBzNNPpnK5PB4xBu7mifM38kEo6bnvoiFcWHz5gyVz3juxGyJNQs",
  "key23": "YHYq3zx59ehZRLc6HKgT5Aaz45D5AJ3AxjDTXpN7vU5YqZGJzWCSH5Y5TSEuRSWTfcBPXekbPcVpbiBPwVn9GX8",
  "key24": "2fMZxbP5czZQJheJkSJ3dJBnk9ysGKRvShL6mNFLhC3dsHZ1mpRBppyHHMcD8PPQA2SDbDyADK5oos27MpTMEHmt"
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
