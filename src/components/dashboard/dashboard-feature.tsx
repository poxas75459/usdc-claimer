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
    "262ZgKvtmiiVXYW8GautWBQFRkccyi55cFMXpmo4iHrJwQMqHTHjfXTjSbbhoQtCrJ3zxkpV2ucTCGD1Qf2AZDJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRW5npo4awmzoFvPk2vePxZ6BfyKjznUSSsawuarcBRKBxeusH7u1Jg5Do8ZV6iHXV8dt2kUrVCJGGSoCXbh1tW",
  "key1": "3YUP6EoDG8VPrwqeiV1whBHhLK7H5o7zo3FZSaVLXW18QF3daXwqC2Qx1a8Xj59xBwptaBWKA3PDavSXRU7zLdcb",
  "key2": "q3aKQbvfcgBLTDtsLfewEUG9L34NYESqkE5eHtcAKdEVrJqcF4RRNPef7RY5USxLTWHMxX2upNjBfBXbPU4K8m4",
  "key3": "4A5qj3C1aamCLXbVnqQGHctAhqMTbPGaCzURdfhuuYLTnmc1Q9LdK3kA6Z8dHfWrfiNk2AN3Pb5DTVUxv88R1twu",
  "key4": "3UUANxiMic9fyYPy1HYVmTfFzAX4VwUYWp6prei76uLH1Uzvv8KGsME8hNCASe6GX897eBqS9UcMeAVzZxaQuhta",
  "key5": "MMrc9M6kStfYPuPt2ms96u99HjNcFywMiK64WuAwKLaumYLa7FoViY3dnFi2CxFsYsQgJC9rjus2ybCy8G3w7cs",
  "key6": "3MtxpWJEMckKRJ3FYe2PEwZ8NYrG1wnzX9XaNo83u4Qphqu8AuQstXme3aNqPKTDo7CJdEDFt92ADFjFGFi2LrW6",
  "key7": "3n4ybpeqLNYFXWqPTMzYnSPHWMyFk6mNzZn2Pik6gaa6262NieR7dWAtMckk2ZfyzRGE4cKKNJJWRWzP2oJmDJZ5",
  "key8": "2TJPfRbnTaJtKmsPkA5pmiJk4VqNArLu6wUrPWXezFE78NZ2wkVWgMhZPmZtisPvjD1PcqaouNFNG8SapXHwRhnA",
  "key9": "Ay7xsLBWGFyN2yvFzzeZXBLnC7vcfFZvczpDJuTdtegVmsjXpd2W9R353kfcAoTv5GVay6etpsRowcXR6rkRFM7",
  "key10": "5rsNiHUPQrnBmGAxpbsMPeZJdJRSbVooDCsuaBufVGCPFnvnL98C1NEMQRaaawkik5kwuNbXJVEU82ZvyLaf9vnK",
  "key11": "YXVJRpehhjA1zpm6CMa9oXnuRgz9Zcz1fP4VZFtamWic6GcJK5CVxyZBM5GRYPbVLv8ZQtPuhU5887FMLXNMNJN",
  "key12": "2qBsWCuesusG9YktqFZ85k4zFnD6g83fNwznAvAcDHnDWjvj5Bb6PJ1hmYAZxGdGnkGS9TduNWAYjQtqDEh6qb2",
  "key13": "22kw4mqovegTYhzw6QtBQ2ppqVM5qiCJCgLcJR6HuRFee8FzBMMbvHyKxMdNWM2E67DtHZ6xAixGDVfkpyd3Hqp5",
  "key14": "5LnfZpzKz98NQcPFHpRoDQGHehT2Lb7pVRevrjkZBvAWMLCuPecA9sQKRWZvQYusPCkmsKVYmxt8HpWTdDASqskj",
  "key15": "2WP25CV81kHq5uiqtF8tTNKrs9iMDnT4rZYZbEj2i6MYkq2nxTmKu14ueuzju3rDubvXkfhrBtfb9eeDQY7sVkEY",
  "key16": "4KVWKP2aaQJYzQg1aMQXZeK9nftkuCMyiU8oE4Qd5PDZfnNxYYzWpxKbhxYFUZQJF2WtsUYtm3br58iXhEgm5v1v",
  "key17": "3jurngQACKqPMnzVNXo23VNseMyY3j9ieJekTS3UFxkTXnExzjPPv5oganq8i2wvUcR17HoVtXKy7AdHcgHq1mtv",
  "key18": "54pFvfuUYJVbvLfQkxuSpzcRVuerwM8heXzMUeegYwvVurA39rke8b6a5BhXCCNa1YmBb8FEQWgQXcYdEeJD9qEe",
  "key19": "359fQvWS5HoYuiAVtKikewytkbPk7LHFwB1VKHFVmWFY588ZrVvXTS21GEUtVVMgCAqttgr5kFCesWQdpZd7Typ",
  "key20": "Vy5MHNbW84WnPuaUcynx6o4fpcP4cp1zAQT4J3mNfUCBtkhfztuy6gmerqbQFwK8hdJjN6bv3h81HWNAYxkoZt6",
  "key21": "K33DWnaDSrygVxvNj9Fs3CwCahEiLgUAYFEsbjEmeD1xzqrAr91RsoosgukznYi8f2NejgHXQ1Kzc535Vgfsr2n",
  "key22": "2hUhkVgKciCnzLok3v2trQvudpFYJizSNJVfTr8FFVyvLYoDMGD1M7LK7XPhZtuM8rATXAfGuqLmH8wwFcmdDYmd",
  "key23": "4dQSwfENRfVQ6faJMkrgsTC4soB6QCKW7UfC99LFDiGa8yobp9yUQUUiahz21Fq4nNQ1ZZcMTARNGb95M86s3YrH",
  "key24": "1upDLmNfqiJU6tA4jpn9JpRMSDBywaYdVjEgrhJGceaRAv2QpE5kjfuGNHAzj5vKoSmwMnMfbTqUx7Mk8DXfVu5",
  "key25": "4DkozGqBbMb6byoMoCEuj1JCQA9oACEvxQWGLeShkgaQA1Y1B3W8ZPZc1kXnkXQAtLYHqGWaC1wsJcZEGQVi1nih",
  "key26": "3QjUzHFRH3g9hvWkTRmmzUqNsUbofP1f88UEqLxdSWRR8euukZbhxbt97og95KKxdYfVtQXPGK8YrFJo4wYZpPFT",
  "key27": "5WGwd29fQQq36BHvQDcfBdKouXcNiVaSzxvVBJSEHPeNPZAbR6u5RLHRQoKVTiXe3wEh3ybFZHmMzj8t8B19omGx",
  "key28": "msWpePbpKKbxv2qMRYSBRjsT6hoKYLV4TZZXa7ZjuwRbApzWpRTPjjSRqFsE7fEsXQW9AJ488XTz6nQZb14EeD3",
  "key29": "3b33Q8LoFzerCwspoXMQnj4ppiKSEoY12MCuXFtSuZpAYWs2EAMmZ1biEWwsemZwqxDGnXpos9fMinpZuAAHkj4V",
  "key30": "3Jzqi3QKbNtUApYeMivqysgXwL3FQmTtFfjfAviMECcUDvaim7t8xdbdoF29EjBgeprwWiXKFRrJ5QfdJGR8GxMh",
  "key31": "3469BPrrtZkEvHjeRVdNfJ6gJzaBRoqZMewLNPycPxo2zcVduaauDxxHy8bnggEf8NM3JmJqRBGnkUFC2co17NSr",
  "key32": "JxTZw2YNgfjcaVmp9VsGxCQMcjhN9dPJchWaMjoCaH5H7dvavoGGmAFUJQCCuHBQd2T387rFAtFDS3FKv8CUFq2",
  "key33": "2MeCYo5rVR9KnN9jdm1b4aeodSUBJDT9XUMoXzxcSXPXRpQ1tTzm3Q5JMddcMsYR3jgtSZYxfXgfrQHgFVgji9AX"
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
