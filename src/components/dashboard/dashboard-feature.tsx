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
    "5Whf3S3kg9TRYw2ksvsXE6JfYEGyKa8TCthuzVNGe6Esm1DF8f6kcLGgmiozpHZmeE3zy4GvxykNZkmrNeenPS5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9b9vC5eFuhUNqMd8ciGgQj9xQU4WbSd28HmDsSizjZkXAiYmjTDrvGzLyMT6uZedUK6P4Ai6vMhrwvJx7syjh2",
  "key1": "2NKMUtGALNhZPLRpPndgVX4zCj1GojLSbTVPkDaJLLMxFxgG5mjjHv3cPh4tJwXjGQZDGgsR2ZReeUdYzy8YY2G6",
  "key2": "4snBePyU2BZ2o7ktRC4Zm5AQrhL8iTMVo9r4ZDynKkA5QQsLu9cE8mDXQZytDiAFsmR3tvB4gpFjiqS23oGkumZa",
  "key3": "3uwyG6Bn9CYZAnz2b9U4mVNrbCtiepB4NNhFRYPwCzFCasbw7CqakboNTTcP2QrFtTQBG3KcaymYYY1NXJpm6ziJ",
  "key4": "2MuQHGsSmAg3CBzMgomX57oHKFiCBivRZ17ToWMRA4djEWTDMQKcdySaaBbnafuv9jX2NZX1etxbmmDgPsEEFwrp",
  "key5": "4zy5f8n2nHFrinGphHweAGWsX32G6rziUz65Keweo5o2wqCQvkcoEcFQ5sPe8rTTJHKqPX3ZDEkeYnJ3a5tYxBcz",
  "key6": "4o1j2ZLsecbjSw4XJ63k7L3sbxpNsjyuEahhPzNLzTm1ZCgaoXPhsZ6VG3GnJ7Kfn4gDxoiiKKWaBYcJviX4eVRZ",
  "key7": "5rX7QrfnuyiVsTQs6TQoL2iqw5k8TSsBZZWgpv1czscksnLcnkBkAmiooMvsDXpSuzKdakk8zGYSJNBB232ay4NV",
  "key8": "56kjnPwYKUZu9WuoULGYz4ydrutJV4z6P6xf89tJtqHAyFUhDn2fUxZ99siwwp8cxm8BYDtpn1RQAhyFvXhQhA3o",
  "key9": "33Fp8M3Zj2Tgcr11tifWbGqwiV6hHwinc4dzp6BKJDKJgESuMFXVRRzrhngiUu6QFcsqqEUCQMQT7aWfZFkHeh8y",
  "key10": "2cK51GDuZTPeA6YxPtpRia5pvA6AfYgc5DVVQVgXJoHrYjhiPFTdtMyWNpz3q8DK7Lnsi5G2JFX7KvwStRKTrcG3",
  "key11": "ahsP5pScrEtyHaAouhT6B9KfmgnobxsnCeCwuyMfEZ6aGxSTweciK8HEQ3VEybdGjDBNCufJ6YJ7V6SAvdeRhc5",
  "key12": "43TJ31Gia79PHYkpHGDnNUqCEfqJfaBQPnKBNvfSbNZU2iRSPimwdCtx6BFxp7tGXikTUypZKctkcFBSRm6HcwPG",
  "key13": "63VF738sswpnmPWjhcewsnv5hkcBYwVtB1M6KVP29acuQrfSJobvoarEK9umhzsatQ6yoNYbYwieAtoAaJScFtzM",
  "key14": "2MZTm3fPTkUhYBUCJTVto7u1quYYGjmW7MjRksDMK2xZvNdBYFwD7QAdEWdwfSAqah3pmhW1wEP6aaV2qzFUaUJD",
  "key15": "5CfEjtBwRoCw2fD1nUsqMRsLYPZUff6rPgJozsMZSSZPUtmhh5qnix9ShD81BDDhXCwmf5gWujtAxq4zWcUs3T78",
  "key16": "6oaEgqGKWVc5i4mit8t4eYkRV7NmYGqYNnPiQ98gm4gF4WhXY13w5iRjmjHbuKibyapVYp17xj3FgMyxcHAcuMz",
  "key17": "5XjsJJDn1tS1T2fWJjXqYDgsy7CXawCeVoso6TF8KMvneAr3DmGUX1YE1YMje385ZWfPUUVWqFb9TFgZy3fYcVds",
  "key18": "4DXmjtMmSJUNcsiBoUzjGFvAH52kyLQ8H2n5VvFzfENEUfnjbVA25sZHdRfL6enXf1a5ZtaQAzkqMnJYxDvtAdZb",
  "key19": "315vKQS1pGVZ5fAgnD1FJG38Dig4WrbttqWfQTYsV6uTsEVpEr47RTbUTJtA4e6Mb6qDY6UPqDuaPCgnZX1Mxqpf",
  "key20": "28fi7GNXGSgdY5dXBfKw4D7YxMzs4WHGMgrnwwtmT5zr86eeMSjv21nDUe3VMWXHN3ZPMk5n2fDNP1YNP9NBasFg",
  "key21": "UDutpgJSGc5hEUxHwFrjGNCVBNKcerG2kkUCi7DZqahoWfcg1MdrntCheZciGCAW8aJ7HXHVrnvMAjcxUYZni9z",
  "key22": "2mL8x1tfWeMX6o8LyWSvqb8cwpsbaQzo9GQ584kMH4h4sQpFp2zCPHNKSwJZzeVy3wq6f7QEtcvPs8hGHVrjxo1i",
  "key23": "4p4YPR5hm5UY3Dyk3MS1Foka9omugSUjLPVVeL39MxWmGwaP6C4LbN6AmKLvDqW9cL23eq9grVa9GSmCXRPPzEJi",
  "key24": "3JNHE1soUgmhM8q3RYUNvF34AbG21qDTVnMugk68ohkQpGogGqsjeq3thu1dGvCLBmmGjWhJo3FvJPmu1hYpBXja"
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
