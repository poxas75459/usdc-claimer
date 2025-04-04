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
    "5ZviEPBw9P4x2VKXzSuhmHJ7RuXGQWwZFBuHLsBRvRXmDpd7qYUv8oVEyTvtU3QrbZrrVad7FmLMGxBbTxmV3wcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpxF3KXYaEFfqDSMq891vcnxcEVbqKXnmKLLLFNNDPJP9cKaEexjQ2rse2afi8QABL6coHWfARzrRAyC9edyDh8",
  "key1": "3MB1MRZsi3547b2GxaJgQXKzEDR3JUGa7CnpMm5nEcMf12XYB4jG1wQeMHPJQSRtAVthFoDp786TPhCCSjDeUDVP",
  "key2": "5WLjN2P4W96P5nkuWiLkQY8LBCrgwKTTDgvYgoLkW7WTQCDkNxCxZkjVo21VubAaWsEjJDf9yL5xD3ZSCmfRWqPR",
  "key3": "2he6FmWD2mCsVgKZ7R6ZA5U5xnBwHzyCBXdFKyUkz6n6PWbBUBSYZaw7XFjCDHjayyRVX23XUfkTRSSx7KKAT74s",
  "key4": "66o3vVPLMt6hfhTs92u9UCVt4SAAX2v6u692gaCYt5eByE84EHPgULHkcBUWxZsUaQzuKhSAVeRE6ZwSj32UAbNY",
  "key5": "4RxTutKpY6u1mDLbv6TVZn6dfpTxZwoN4oBrLMVAAdU1TVYbNUy6dUXfHHMGkpyijX7xCgVFXi9dttGexkT7kRbk",
  "key6": "2Yob2BkhrsgXdr6RBkE2m62kAbAJAcJSssYxg8QNHbeYeANwgWcVkccwVwVwyxcHg3uxY8LDqrykYAybKVTiJyEb",
  "key7": "64Um2c8NCn9ASd6Z4rd9DE5cmCcQGXB8xPjwvviw1pyPiJfYCxGLMmyyJMPq1a1HgzwSvUyZxjPFbzsuPbpY8U6z",
  "key8": "492vLR13Hfio1ectJVHcH5wxo8jWcjKs5T6C9GbSG8z6UffPvP8UMa2tu47qNBx3eJ9RahjeMbC29hA5wwo1aC6J",
  "key9": "5iFyUmQKtkUKXB1kNoZnPhuzRMwAyFXiRopcnJBGHPWQvcBu3PRBtBQAGT6PXAdKRbTRLxW1tDy8rVhsy8DEzL9B",
  "key10": "22CYZPLpkzTravpRnyrguxvaDgJzY4pQrcT8FWFFHrrHa582CSh9aCWm6DuNyQjq2UKXPJUvCwpVJS91ZeAaVive",
  "key11": "4N8cLJqLWCZQWWpr8egN9yCgH5g65hXAeiRt2ADUY6AJq8auz3A4k8AJLpTRJiTaLcE6ee8qtz2brxzj3VCwCgGo",
  "key12": "hioutVnsitMTRY1ahuEg1vULsuL3bXRX18AQjixEv57Di38kWf9rZtDsvTbwKVctsd7vxV8ikMUJ9nwZUxwHMXf",
  "key13": "2FuXW86uYd5EEEGRthWY54ToVrtUf6sA7i3cbdV45iCSBKc53U53Qb8WSWUDxPeH8L64kLWg9b9ctF24eY4uPzrs",
  "key14": "5ZWbcEZQ9comafB64i7GAGgsZXa6ACMe2fn1hWx59ZQAZiF8z79h9VNjdvRb3QxK4tj5mVGi2hDSYcQ6LTXjfwRZ",
  "key15": "2omRrCE5uyQrUa83x8xFkk6c2Bi818XZMEprEHfG6VjyJHWH29mxsDxdFbeR7FhPiALELkaEigMbC1m2aJ6buQf1",
  "key16": "3fXxjV3bZqsksyjebeiEfTRXCpzA31Kwjr5vEz5SZkd3aXS5QbH2qLhVChJdP5fx7y5DjHYDmFVoTgJ5SFrJXQXZ",
  "key17": "2DA9PBM3F8grAXWzBoQBsrZKEpmQfKBqbqjzqEk8qwUJR89vUPJrasGXUNtZBkr2Beude3VYcAPXZekWMXA4sMHM",
  "key18": "A3cZoqK3tSu3JTrG6WxPX5T82tSmxb825qRhxwWxATeUekouwXWxp4jf8JxdiHPHj5kktFzDwDuio6jmVAVr9iz",
  "key19": "34yhp7mm74drqqNstSzgYacr5KkKP3NQKWDSfhyNiLrJn6AJoRzGn4W8TTA96sBwTCwL7Vo1EJZrvPp3dYsdsTf3",
  "key20": "5o9Biw5sTjMNrMgNrZTFXFQchngqjYT4eeaYSqMWNcnwtoDqWi7xghpGgZE7ombX2aDfy2HoiqVrZtJsuxZTxm2d",
  "key21": "3nrocwFbG2yw51T3pyAveMmV3MwhdLdCknib2f9u9GGoy7z6G8XbYgJQim15QaQ2R1kCv7osQ8Gyc9WKdtJQnR8f",
  "key22": "25vZ5qiq6UP8784zZZybufssQXxJdPSKQLDZXqHMczTsHWoUPpssaaYFCRHn1eMefD9pbnQqaZu3hx6UAkVK8Jmz",
  "key23": "5hj71PJqqD9GQUjGmj3E3LcynPVEVicAXbPr4Hv9dgRsLa5VdALTpDaD7UnGee1TGWQ2N62WP66xgWWVA26ZRXM6",
  "key24": "32tcaxdpbZJxge4qP5SVJJxDAoAjMLn6yTuZjJqSmpo5xbiSHEbatVKQKNVpAaGEtd3kb3LhPaqim9vsU9Ab9hao",
  "key25": "2v8dnmfGfE5fzEwktk8zWeM7whitCzaDj7efZqLtJ1H1P4ZHMHT9tf8Hc184EcXhMwCMyFxNBDGqEZFsWbB9gUMb",
  "key26": "7RUMcAwBNG5Y1drFPqx3Wxe9pkt86KeYZAokJYUgTrFDNCHow1MALmoBk62U81DMBg3sjLCdqNyJDpwsWNNkpDr",
  "key27": "creWHoXNFdkGnkciUQs3TSbidrR5U24R7DYjj8AAghXef4SpmVAeMRR6i1EdvuajDSBeZmFjkV7pbHMqvAxULBV",
  "key28": "2YB2Jcr4AQfCnZSjDdbhh8W9XdQBmfxVz2Sv7Sm7DBSZNkAGx4rXYyUfAQM99twyQ9NyqMn7WgKCf8Whe8CdSgZU",
  "key29": "5b6sbiRaXpu3D4xu1FBmDds3qMYEAzDgQv8V6iYpxoQ4k6RHj5c8v9wm2iXKNDmhWrT6obpMDN2pdQJeAkAMya2q",
  "key30": "4x3Kx9rDf4tvzXxqHCfYVbtVUxbbym9vgHALXA83fRE81aeVQ9CGQMiCtjJJwybJTSRrrwDcxXZpsjugErZr1Nd5",
  "key31": "2zk7LZmMqmRTksLjbM5Q9uQGb8oKvZfc9ir9LknwQEYRTUXowDpBxuHevtE11ib5Di6dW4JKhS5qGbpKu8bw2aqS",
  "key32": "5efjhiijqK8Yj4w9NH6iNFAcevRaERqeXy3DHqSMwdWRgiTWUYUWQRiA4CAL3ZmabCVb2WPDKr8fKdrfgx2oxEba",
  "key33": "3qaQsgSBxwFyCN65aTHcb5kdoLDpH9WqLdNszhhxUzqN21SAvaatxSiwveMQBPraDfajGqgxAnew7m6WPWbpy2u",
  "key34": "3XSvAd8ZFWFGauCLrgUCiDtxpZzLDRFXGQyZCEHUBbh9P9g6WdQAyrp8n4qiDfrqu1QAMykivtvn6EQnvEr1jb1W",
  "key35": "5azAAL6HRw97gffYTEFkwJm5HX6euwKacEYSBQMm5ouATnqVtSbFReTUG22jJMLNTWXCs7Zdz6C9rzAXAw3TLbUG",
  "key36": "3KowgkAMBqgYJd9E2FY6q1MnWou7ppnUcs6HVphQfMUGz4xDZtKX338DEGJh2HCBvbjtZaS6RCHAkYwastPehoRD",
  "key37": "3MkntUwqXYkw6oTV8QrJdmTmsSANMsv5NPvGgXVias8c73i7NLgssBXxupurK4yQVW9xnZsFrw7F33NTAkvWGUMV",
  "key38": "61ASFV7SCpzwCXWTQ7wfNHw6rfYdeLD3pEpmSoSzTCP4u26DCg6e68rRztSesWHASzRRpz2erxWsUE33piFc91k4",
  "key39": "5GAFNjtGdiF5aMdKo5yV5HC6st7WrMcxEezesxZyW89Yus4ZJbYvoPQx89tHxZoz1mnGjmgNe3oJYtptbrTbypbt",
  "key40": "2hShqBCFZCdajAQWfMg4kMGffhfUKfznzCuA6vEZKneJx5M9gKFFavkowgsBm8t1PZQmT4x6Rxw2jpTnWNonz8FH",
  "key41": "RkYKqfAJnQc9KQphpvnvcunYSrxT6nHRw4Srh4C9f1YYxAz67bLhNfkRYAoPZCtZeLpBcEzgZo3kFq27EQwDK5M",
  "key42": "ExGq13FJ3T9ZSe8bzCeArGtaUNMAUbYtiMB7N6EMAWXB2246HUMAvWfjeyxHbYRYkpXCv3skAEgSCpKkyraJr2B"
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
