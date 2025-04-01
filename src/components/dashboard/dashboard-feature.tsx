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
    "5moFaqtSRZJbLgngxUjVURH8xZFjKCnUXwkx3tP7HYVcB6basVhGp8K4nxMauBR3VvixzhahSUsy51ULemeeqGC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbtA745g6ssY4gZ9aSpGPUWKXPJCzZnF6adCr7KuUdy4RiqWo9EyMQwMT97Tc23U3VLwmUjQN6RJc1Bo6rd3MBX",
  "key1": "4C7wHZB3pkB2bjztEzPFmx41UT3rTqpxnJm6AxLCwKb3nfPFHhsHeqpWHrAgjHo3xz2q5RtHnchxnmkUytQkd4bn",
  "key2": "woNhAwNatZEZA4yT8Fy3mMSGi5jeyEZG6tBXBorhXfRXNSEJHYS7vmXrNtWFp5GFm2x3UkRJBkhHkTYZKzbr4cY",
  "key3": "4CDWBTYzFupz97urARzzeUEpXVMfGckmhVU6RZahn1iECQEa6grEWtwXwG93MwWsVCxJHo25Ym2Li8WWPnU8BxbH",
  "key4": "8oFLcKu3pcm2uHHEbLk13S9VxiypiCaD2erpX5VCEEyzVSsfrLMtiAFa28qJHq3so7hspJUznT2p8jNCnHQH9tn",
  "key5": "xhENsU38PV6DzsH6828hKNZRrpMwCkMwtv5CwvVdczjHQ4wTEkyyFRAbnPtoaLXWJLnoykD3MpFbVZKbgv7VSs1",
  "key6": "4nsgj6qpRtSDgGwSVbvuLVw78MEA4vCpvK4DGsyjzYzqb7njhArm1nKBJFUCqam4kEDQhr4gvDxaMsjKDNdKvh2A",
  "key7": "5xDdoZBaYucKj1GfAscEPBeChu36sAHzHLBVYa4A3b6PXifbSykY8ueZgPcN9EHP4uMTAnS5GLgWpwywecCrjYEe",
  "key8": "4Xerzk7mHpKeAbB4Uk2EwP3oGZDLrtvFjeZctVAMuAE39paiFKS194uPhEPVfP8MR7kHU3VvTuAAb4eEWfWwy4R6",
  "key9": "5sRy4CUhurCyHmhHScG9iBTDoL55rVcVWWAfRnqWe2i2gbjvuBFpronTT3ET1L57HBLcbeos2Hs2mgkZ3By6NeMa",
  "key10": "3FF19bsAyo4JWdmyRHzT5ETKSHX8ueCLUXo8vZiBptbApRcMS4qjuMWBYFWGg9NRds1EBAb85k9TWKbBtWvgDqb2",
  "key11": "4cfE5eCAiu5xCmRoe9nr7cY8UV6QKaJZm5rn2yqiJabFpNQC1V6yxGyojmxXYHvoSe7NnDkNSvk54NMokaT6eCkZ",
  "key12": "m1ugkoVteGAoTLpTUeuxHpHDrSaQoMHAQTgf3XiR1npZEWTXDwaHfXbQwxNphGZFEKR1KFchdz7yvtRNhr3phFT",
  "key13": "D9zCnw1n2goXfbWywigfDEryC4r5vvzLHhgYuBKQKEcYwvjUJWFrp4GPJa4PHpVKg91axkwE9dA98yZJK6qsz3s",
  "key14": "2psiiRka1voABrUJXCYvzji1dASgZpSa9MW9RGCkTh5fsCRQww4pUb61mcpS9UptGNR6payVcPX8RLgT4FbwFtiP",
  "key15": "2di47d4RheKU8CAwyRYHnnrEAYuxjKpw6pgVkFutdP8PuYmqarApMnr17ovdoHuVFsreA8P4hRxJFnvSQYqYvA7v",
  "key16": "645wS7iQ5ymyGbeRGb9g2ACWUTrwPvBSHSzYqmjMwRsERWm6wjBZN6NRgwpSP4QoPwfBCCuwANTrh2SkTqUZZ4nK",
  "key17": "4TocWqpXpzkXfJzUHiwaFMUsuCkhrH7nCEku5bLTHBt4WqUugRybsJWFVhDuFtiFnm7fzQHCHBnHMqjcy9LYiUB8",
  "key18": "4juTQ9n7khkBPaGvEme89cswXggzR5G8HL7GXcMTDCDcuaLvjbT2BN6nPTyfnkfUoDZ142dKYK1bi5WnWjfY3peo",
  "key19": "2UuFSKMtHFZ41JTwPfUpNLTp8eCqhAoRSWnXfiUNgnym57aXpsd1jdEYGSVWMh2gUKTpXUniNUhVRS2ozTRQzV61",
  "key20": "57i7Nnm8nR13NZqm5sCXxVFtiP4swVLDi9c3KCic9RPsSfyBH1jCTAuq1kgJDCNXq5yPyn1LoCWBM5fDzqiuUabb",
  "key21": "4TL8xcHN3Y7qKvCmuc9Ea72kAcb8ArdvKwvDK8GcAtTcRY64MD7KmMoYjxLyQ8njLSdLeAGh3vbNZhkz4bmihtxM",
  "key22": "2bBzPeEBAcuDeq9EoLKzb49uSwLxgwtmgGu7s1YLBjuDKTpW4WkAPyYLfXo4vhCXumUkhHmD1XqHXVghrPNyjXfs",
  "key23": "3r8Pj1TVR1fhz4EsK3Sz3HkNyo1VVyKmPdvCzGnbJg8HJj1cF6asYGFtB5F2ELnWKR5rYDm3c92mGx9iu5HgnT9X",
  "key24": "9AtBtdrnRtWckwaqeXzCHYk9tjBCt767pB1fs1zuHsvAC5Liu9uRJmGVoKdURjNAVLo9JbBWZsAAbqo1RebGiAv",
  "key25": "wjjsokqsNCjqm3UNzGauJsCk2aVxMnUUawucxnCbVySjAwVnULCFuKjjsVGAuZSXvmVf2LdyLpHb75jLahhcatm",
  "key26": "2b1Q9X7wvHqD6Xmpap69NXGUevNCr2M5XshCj48EsZd1mtKMvYQZrGWvwKLsX95c7nM4ZiyxJGG9qJKvcRrDKNUq",
  "key27": "4grnrPYbMjGjjJS2sESDuuHkZ6bzYRsryQEsaYECZjcpnCcMQNZRGb6avVizmyFxavBBhn2BcBHorcx8H5q7NEiK",
  "key28": "2W3BioKQFJyCi6nAatjmg59KBb8FYVejz4erkeuRJBU8ostFksE7Hba4AVnNxVbVVhqLfLFDw38jf884Degx2zaX",
  "key29": "4123EUJaQqsuuA3oFgsU1f32ryEcbWhbuWyW4qCk6wy1jP8N94WACvymhaza8XfwwSLy6Q1x7rGX2fxhbFExcjmA",
  "key30": "3d5xqUjFagfyXSoMgV3fUTUeda2Fi17DEcHe6jKyVpb1rspjDLQZfmXRqGxGDK7pFg7x44HbM64dcr9BzTZVdCn2",
  "key31": "5nuUxtzVv2G45VU2Ysk62nUBzuSRgw5qghS6e2RimLXdWkaPRHPKZTcrz7QW7UYaTHMYZVWJaBaxKSHLmhVGuqZx",
  "key32": "5Xutq5Gabqv9LoYzmV1QzGQYAASqnZZqzW7UCP5BmDdXfNP9EM65VtGxNvoqC6pTg3cxwjCJ86wpBwmoMMK2V5xc",
  "key33": "48SVCtM2VW7TzATbH2yGMKs7Lavnfs865gQt4uXF7MuzqLq2zVvR6wiuDyxQv5Qo5e6vN9sLXNk8MKCqsqi54vPP",
  "key34": "TL9QaYmyRBA9XKKEGzFqxopnXSLh72H8z928cRE1HAM7gDBmitamBwvSA7X2TvTRFjn2Sh7CMif5TC8isKBeY8W",
  "key35": "47wFkqUe5s29e2KEw2dmgGW3LX5xbsWBCDfLVWuGHLnwnbq8ni1cAbWKwhzCRJJWprMdvyAy1FcyBdVibWYynNYa",
  "key36": "2GLyNepBPH4opeuzP8kXruY61tKh1KfDtzimH4wzQ23L29YRcb36Gvje98XwSTdEZvapvitMynbWHVhyzeKrJcdS",
  "key37": "4p5YvVLaGjKzmCYbjB2w4NEQyhtjzjDsMSgyqEgXbq1FTS8xpqFhYjhVSGrCHwzTKrT1HxE5uQYXmZczMc2o1f9N",
  "key38": "3S7vyqjpgHcozaP8gG6jezjguj6TWwVzjnSiXGRTiTNhMMebotNb5tot5ioqDsiQL4B7TQQWnTNyz1j6xoZh1Tmq"
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
