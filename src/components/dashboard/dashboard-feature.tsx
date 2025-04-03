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
    "2BvfM6JC5uhDLwrFn97rWc449C9mwds81J4wKjv4Bo5FS6buK1xuMdmRAuU71wtmvr5bwrDsZP9ZPBKzpmiPaNEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FL1spXnMWayBZVsmv7Yv1CrDdqVEZAeC17nKeew4EMKfRCxR8GDF3o2NzJ4a1KeZTLnTkZ4zJW4reyi7pUMQq5e",
  "key1": "5ND3sZoKU1D2NuSRkDi6tVzxqD5pmSfGNRdVBzVK9YTwp9GAYKPA7KTPfTAx8BMu847vR8hmL4n2hgu2ER7MyeBo",
  "key2": "4vD7tCC6FfiYaGYEUtHfNQbH2S9d6Amo45wDJTsmudpU6qH9kjm4jHur3tz4NhSHjvUhHGCXrvJkJEP3ZQ1NqYuo",
  "key3": "59Ca14hURWPRNffsWE1Zo8ELXUW7G2x4meo5s8QLsGmAYk16PuqGJns8M786sFTEShhT6RY5o4qRWmiaJDqRpNag",
  "key4": "xy77Tizw1o3wxAbjpapmdHegz28goAZpRgm1uK9GAgwHgVPHdu8iqGgShzMoKHaiB5hDiTnADG8YEBHcBHxnFvw",
  "key5": "2PsBBiqdwhtd1Q6S73eyrRCHbJTHAz7q3DxrW37sA8UunSZXv49vGUSM71veDEp11vP5pDp3K5tS4mVHf6Txn18n",
  "key6": "2Bufc1f92SR1AvFrUauV59SCFP4LNLCmrxc2snMg11bjxwrZmMtUi4DkZ4JP62jkNdvcLMtrGbvrZy7vsz9iqmRD",
  "key7": "JEnR1pjdBsXRiyp8gxdJaQVjHHUJdNUVMoPA4QdJvq47Zv1D3aYH8HECparjxk1kUMMsjsptz94YARvWxmFzbj5",
  "key8": "4RYCujZPjd21J1owSVnLZNVxEmecZYzzwEm9DbcFAPvcVorG9c5pKdF7cXZrpWHBFm5dF6vKvrKe2V8zykkCJ6Nw",
  "key9": "XLSjXvQiQK2Y7EKtpeTRNGxJK1zstj3c7HhWyrpSjMUQHTrSyUdpedjsjKWk15iCsWgXV2dSK6VrjcYod4HxoUj",
  "key10": "5v3kW51HrQjyNMG7Lhaue8PXodM7mXbmVR6WEWPnwaXXdigeYhd26sRwwqbZ3pBZ9Gif5WxU28JoxJ7saSa3yztR",
  "key11": "4p6VErcS68UEZMxtoa9eKtNEPpApKT19tPGBQ4wYqLZW93EGe7djKRh8m2EJduV2nuZr378gBdmovYFTYFQVKQ6W",
  "key12": "3npDduYfcpaW4N7QTDrtwqjST5oYHN9c2319eGvEogLaBBUt3Md7mWDJe6j8y5jtqtoquFDd33KK7wges8PREEnk",
  "key13": "2GYNnQz31Y3sStxj7J6QEGTjteWLWTDG7bwTvNXxEFHyR6PkQ4NJg4jeiAMuuxExyYfCemxyek4Bj6PSCHQ9HAcP",
  "key14": "5JNzohjHd3HPifMaSMwXFFshZ1f7wYN6HVbD2J8EWRB8mn1SsAS2HN8vWSW1vyh85Q5Fm3a684DFWYjQysfQambg",
  "key15": "3YdbCJZLZea7wZhcjdjJ4kUiq6MswoqbZEkjViayANUAGUQsAiwqwFB2hwXRBD1C1ciiczuZz3H3Ta96LgqDdRM5",
  "key16": "2S6TKrAQtivWaSAsXrdjke23mDbBFfU6WaK8LRmcsiiZxpJd8VY6uYLKusraJASbYkitiiCW44YEbdeKVdzFQ9Go",
  "key17": "565BrkVwPu6wGSyJzLMnn1VmS5o9AxC1YHx1hQa7sfmY4qWM2r3Wq2kAdELvXZ7GJZs2tycDNJE15y1YivdABvHQ",
  "key18": "5r7jRFG9mMbHA3AWihELKvi5rAH2s5BYcgETXDPjKJ24GdGebRGEi4UtL6Ems6LEAHtXjoSskvQAmMwtS7ZVQvPS",
  "key19": "5CrMWvnSxewiwx5rG4G2DHRxuBVkELw9fUgLLKcMHs1aksfs7NG9ewAB3D8XkGYE4tqce9SAfukxf7MrfG3uXPnD",
  "key20": "2FFz2u5AVPkPsGKXrdKN6BsS3uPmBQw21WwqGNDUS9WFqnLgn1wHRQdRC4AsfP8vr8q9cZTfmVa7ZuoshEVTp7GY",
  "key21": "2dKcHSfyDcWZeGcTSJTa2tHTgXR5mhsGh5Bo3qe2RyQrnrxjJJr14hTCqXiQevwN3E8eGPmVbZyU2X76u5nJM8ZJ",
  "key22": "4VuCBVC6ryqmb5dnrYfpf2jwpmLnzFWrpNHVKU7mV7Qy66MwMTvZfydQVRuBTKK26tWBqunQpEjtZQpHoWSvDdRi",
  "key23": "2f53dTfgkrJ7i4HZpngFwmu6BZQajYP8SRrnu22g4RRXSEZnviJTqmWmYY9d7F7T4ZtS7nC3veVisSNWwN2PUzXs",
  "key24": "4zLdgfW9PBb1c61fns9Z6fvpHuX1nYsp2sZLCDeYkwmYExUjkwmMBo9nKwYX4oc7FZSxtfsrKSkXKgSFiiyR1Qx5",
  "key25": "GMjMMFoY3n5pE4DNwYPr8GnNYWTvncdbJRDgWpkshEyYzaSjhMDmng62V63w5M3GVYD5VyNLDA4fE81Q28HwkGj",
  "key26": "2NBfuD7VDPoT3MaJ6ATHuoMwgbrKY49CP8Aw2kMxomVmEKPiHYgkfYGZJf3D6catgmWSUSNz3SEiQ5wiu6UiFni7",
  "key27": "5W1iLZM51V8bPJnxGoLsPi3hyYbvPmJUoduoS49jaD5PHu8fxxCQxKstJ5VjyojCvi1HPTHtQ6ShxViLGTQcZH4n",
  "key28": "1zwJLinRcmNhnPqLs4aABmMemrcXGLoAvBjjHZUaXYUi2Pt2wdLtVTsPbX9GW2m5A9ixVEzdxcZswVKqm53vpsh",
  "key29": "2pjg9hCM4GfWdRGnFdM7WudR5BSQzwMG5dtK7xeQ1MobTgFU3wKhJUQSdTFJKj92ADouVopVUcuRsX2i2pFG6gH6",
  "key30": "2tBfe1Cu4pQRVx5Rtbpmcvi7R2ErTAPqW5CrErZVvDwq29qV6BK4HTQ5axaFnSwyTdRjAEa3MG3tqhqeb2MmcLmG",
  "key31": "hHMrqEMH3Tv8rfkqbHHLb44WEXsmV6ArrjGbSzmfwnuAp4YgwhaQvsPXjnqefeaB1GwNeWPmifwioogsiiaRb3b",
  "key32": "3uCUStQr1CFKnfn6hWHWH1Xb7Rfnspwymzff2aaL9jJS1vMn3LKCfAH2TAZuvDAp6Tv7hLUURTioS4ir2PXhXSyP",
  "key33": "3iACQSmeLWe898tCvxWiMEcYj3f33q7XPv3PDtiDxKP1aPSUiM4dFQTssUmURh88NK4xVjCfgSrGNXL5y8dDVGai",
  "key34": "2ahTddCnSDCbErPQCJtH8kJSSG184W37w6qj3cKJ918wSmUwUfSe1rE4supf1vCAgKyEkmsRtHWqkjRsmXsriwiy",
  "key35": "2bXxfnUuxSTSHvNGVMHrTMV67BAAnKDo8obYJXZg3dh8U9kDR5hDp95evb3p3xMy2Fk5eyeCYyR7QN1gkZmVAfrg",
  "key36": "tvDSNvawJm1HqNcNkG9Cd2A2jrUEqSKEjj5wW4n2xNDpQuL4d5VaTix3iea2Va9Qe3VNArZScB6CWJy8uabRHfk",
  "key37": "5wEEjHuzoXYC7QWwi5NF6NVfW9Du7SqYGoawdZvbjHophpsFHAw76ZVsHYwCRPzBcmyn9qWMZJh5Bvgtv189cjP4",
  "key38": "5Vp3FexeJW89iGjq5kqTePAdebEBMXwnVhG4uEHGg1YNVQfyaPwtUi9spn6WyG7cTsYddEDfumDJzoLyxfKbTW9a",
  "key39": "4HQsPjFDcd71RZFGSDfW4DtgAo16on9UcFmBAkFTRUwvqs3bWWSjF2QVF12oihA1x8acFsrEogMLRReMoPB5fkWZ",
  "key40": "3EBkLJEpAGb9D62HhZCBBSxcFnNNWE5reBfRPxqVmPB7pmFnonvKEE9hUE4uaSJREAGWouiRP7ayJLvVd9zCmmDp",
  "key41": "4RXWrAxE2DnFeYfeqJGv9ydPc6A8Hn2VwA64r5JX4pQWasjhSQ9YXPWdHBtuRc9pH8k42i12XD9VrNnksYTVtX9o",
  "key42": "2G9V2jhg4X5cpQbufJAaEjHJW21XEgvUaS2Zbhz1fafgzGrBSLmJKKSpZkup7GZpmjVyA4C9J7GeNLAteK7h4853",
  "key43": "3uZLFZ9zmqmwBsXy2bsJjAe4KTd7aj2FTyFYcbqmcLYfreDLcGuUgEEEsoN8aFhZdt8YeZxky3QC2KMkNDNFmPfk",
  "key44": "5nkvuuvwKaLJv2B5MJkzG1ay8P9c8B54A45k4mrHAa3vPR2pDahB2yAnhTWCwb7fGdtRHbjA1guVUwESgJaF9iYm",
  "key45": "3bd2ih8zVauRxmRs7u3ZcP39yx8YaE9VvP67oxPX6yCzeniWjF65TzWHqUhdcJe8CBFW5JvEd5Pb6xKCMbwY7UBg"
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
