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
    "2HWHe2qLPQDy9u9Eo358bQ1HCSDeV9mxmeePQA6XeFzcyH5b3bSUrXYMfZ9Avdn1ecdANGWnqnuc48QUgZzdjCUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mLLhWE3EbX7Jzr1FwQ5Hg3mBCXDUQT6vXj2xH2eNg8KLBohSgBmQJURMPDWkWkJamoNSJDWM7Qz8LwjiocPU1KB",
  "key1": "QzqUFSm54RzpBH2AznrkyX2x4Ms9gPpnQYLHUTP9sPARHnf3ffpvFDTF8x5K13ouuF6ebL3GtF6mvQb9DobVHjG",
  "key2": "DLYmz6z8EDKEyTjLcnM7tS39uNkJBuDLRkPQcomBZdSP4Cg86b7kb4qYrMG49eDXV8ooGczbxV9TVcVhrvR8jqn",
  "key3": "3C31DfpreFMXCMVTJVxvjymRDKHwHuiLrThGutCpcPHGSBTXcriSQgiyXoRYqbUqsTdTt2Nn4a2NQWricDAYP7UX",
  "key4": "2c67ggVigfJncg2iUmkXhfKVFhSPufCKSuvipom7d5BwKmdPbGWVs77FYHAKSqRwdwCtaSbxMgL3MwnpJrtsoyuA",
  "key5": "4XGAQ5M9xchKVAz2ioLTx84vQ4tNuARrZss7B7iVgBPF9a8vQ8xrytKoGRsHFWyRfJPSYKseVbjXfprF9vDTSa5Z",
  "key6": "FmUJL288mJ52qRWwbYZRux737j8cjzt18PYBhMqmTDNJrRew6yBMQTUfmgod18n7L41cbmJkvtHHxsX55gQHYfZ",
  "key7": "2yYQHFbpEtDp9cJFntm37jyUtCnGDviX6U2x9C4FfaMYazyQu9f9DeNYNDUZZzYNNFpqvHPB7SKLBA32NZXi5hNf",
  "key8": "Vk2HLtTFzkBHguUxKSUFzoojbRKv6Yae3s11Mmbr3hJfgZkK9mi6kfLg9r5YhEM1Fcs4EyxEhfu9Z19m6q3EQsJ",
  "key9": "5Zs2hjma3eFxewt3Ru8PAe61wFZuduYBCst1DSvk8v8B3ry9SorcfdmdrGQMuoDZZYFzYvFr4avcWap77gsaJNKn",
  "key10": "kTBMuGbj4tWX7fPFCYsWdLL6fK9qQmf6JGxeLto5oVkC6rN7ebrdVXVC8dzSKS2yQ3HbKJQ4mHqEdMXrscXvUmh",
  "key11": "4z86tevee9K8TSM6G3fiMeCbwicpazALc2ppoABh5NEwZ6aqBNTUjM3fBbH4kLJfxsJXe23ozbK6RqnHhba1Juc7",
  "key12": "4uEPpVYhE1p84s61bTF5UpQyh8NaoTWF7AhHwJJAD1Ta7YyL6XBJr3zh3mW5tAK8D8zNA9hkQEn6Fk8ZL4HYaR8v",
  "key13": "5SPdSmCDqTiTj9LEPR7xt56ust13Jb2ELRV269RUt3sbo59XB3ALyTjt6593qmVaEhnGoLmaNfSnDAuHdPvSe9PV",
  "key14": "3K9UjhFxj49Craxa4s4ut1Wf56VJMv8XehAoLpxjUi8LT8gBekDBGmJkyCj3uKAFFCZ4Q4HSDHjXtp6jUhif1TPi",
  "key15": "S6BG6wxuXFmGLMNqwPmv2W5Ffv6J5fs4eDJCQ8GAiUf4mbsnbWEwkzeXZuXPrzY4uXeWacigBmbz95CTq4ijhSS",
  "key16": "htoqrf4826C6fyVDX1hzjR16zbVgnDxLEG6frHQcaiFQGzQ5iPLRSRC2s8H4EzWJrow7jfrwfabcNDtkA2D53xH",
  "key17": "3DD4R3AJevTpf5BowdkmZQSWacbeUUMVJZrPnbikTjeWn3JXe6aTNeeatYnZKjXHG36i3jN1pNepspBqHuuJjAA",
  "key18": "4LpDeStX1Ut11c7NxRNj5UiBNa2JBfHESynSQVAx769peQGa4GwbkATXPGz2YgHrGmmuB1CZNYqsyfzWcMtFGeGo",
  "key19": "pex19AUMTevpspkCtzM4mWaZkFBWZNQt1Ps5sfTrgH79b4wWms7Qnzofk4Q14Nch8qNdZUj56LW98PcHc8jKGqq",
  "key20": "4Nvp5g1GmC6MQgAkcaq6XpuurxqMYbTqg3AVCv5JTdVYeWJPxYMAgsi6UyZCZ1L7nZwUCHyfond4zHg9gFdQA5yi",
  "key21": "NAJYA4vqE4C8XzN2kUvAcK6o7zdyLLqrEAnM4dUVypob1ZRfrY1wsoG7VkhhY16WgdR27gVv4LytJik61H3si8b",
  "key22": "3N6tn43PBXTbRGopo1Wqwk7rTVzuX6ijVMyCfSL1G9xFdAboADuA9hnT1zXpUAhGXz19mAsFC124nrKEGHBj7A9x",
  "key23": "3Ke5MQWJKyWTNZ1gxeJ92Y3n7Xa6sBwguesJet923cnnVvBk8ef37Gpcn5vKrsEEwWXPmFvShMphEanBDBSYfjrp",
  "key24": "mh1UUtjuRv4Ds3Aq4xrcrgzSsQK25Ss2GkNpWXuRAqtoCS1ab9ioZjvxzVi1qt6xbdo7bU1ps3ZwB3fXSufGjEP",
  "key25": "64UcmztT1vdVSEEhYzaMemNU9yhTXHgqUi2UDic5N3V8nQDjSXyAkjGDJLPUSNiLshkLkKRTVZbK3VChDZdnswUd",
  "key26": "5qE7dRiNqLyFryxnthV4tAcST8htyQa81nMjpc55dXLL1KRZqpYAKsq5m1kG5cfXcu6xArZxo6Ybj2zWywbnaFXz",
  "key27": "62zt54wMuB9Ub3M7biGCdGpfPMemocbjurk7pAxiBXmb9aApBJTS7odE68sQeYDkxxDQwZB94ES5pUBJDLmtK2yZ",
  "key28": "4HQJwHUtnPuosBVmfAjpcYjdnw4Mw4AMY7SmkpZs7FStfP6jM2A9Zqc3NE3tvCLFFtQUt756Sdwp2tKwfMbG6D8d",
  "key29": "5sson9gbBQAhEAwNkqcaXyKXTNzBDDW2tb7buopuDhoT6Hvx27n7MBq4LQcbkP65A9PK5r4S2cHCVnNufsATqpSF",
  "key30": "2nnWRr3mVXCZQv1TZaMQfsmtfcMTqu62keAR4jv29zXUNvb4rnPyYdXJAjXh4YioztjGZanP3a5T4YupFBBq17T4",
  "key31": "3UeBbKFyXJjZcreu8a2iDNsk6byfvNx8UGpSr7eobvmtW5nRK2G3uenD6S5vydtVAiPf2M2e71u9WU2Gaa3vRXHh",
  "key32": "3VCSn1RhYSHXyCEK8K7V4b9TE4LyUf1dqtQCEKGYN8tVa2CQhWiEkzjLescPLsEvoP4GgdezjMSRXbhMqV3ZppYi",
  "key33": "5kY6TCui57FAsDtTMNQGXNRbiizKFiN5NBh3ft7cEpuEn2SVn2RtmZHHvvBcZY7CLaDgBAeQRqNaMCos3nQ4fWLc",
  "key34": "3NcgwvM2UZWaSrWfb553RggkxqegGgaRRd3HwnVtwVRD7tcyfviymUW9XkaYF1kkxrnHLMR8JfeLVRPEVnRXdLAi",
  "key35": "4sWN9nUMWCV5U9y8GWZB2X5k8VhHtNyw9CgV5A1wbq9EEeYMuHDb7wRdL2tCqcpxzymFZ7DUBCA6UQa8B4ubGzwD",
  "key36": "26Pjdw9N3UQxDWKFccioWumWbrZ8KfBMQsroF1N57bjfLQEesgCbVEFL7LCtx2ETiHzKcWegqwJZZQQ6RbaVcyjf",
  "key37": "2p4HJboSWVFsEbr95csthvJN3FBPppjr3dBx3fwffV4JYQL22TUeYH7QN8aSMyPgd9tN2kep7Jf2zcTrFLvU7iB1",
  "key38": "21jTezdR4mtQwYthgP1rFKZBPr1TNCbagzQAuhtPBNiemTsBvDz5LY8yE9Sspe3U53b6hQBDoKyRYBYF7x63gmyf"
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
