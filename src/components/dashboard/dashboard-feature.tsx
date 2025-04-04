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
    "8hdzhGffMZEdVmykm7BRJnsHrfgJ9DUasNNFKnLjkjrRTh1fa9zrCgwaamrbYC35ZWFVb6qftCwt5GZ1MeEhaW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zcCxLsTta968e8pXHAWNm9SGqDhxBaJWMhufdi7xKgT76DQdMD6r77vDVH9ePntxyrtTxrJCRz2wFgEmdWzuPBi",
  "key1": "45Q8Z4YoYEfyirSpfFwMvoWYSnG4wYETC88Pauz7BxNJt114CoM4t4bmDDXUhREXwWeEHqtjW1E4da98gxjwXP9d",
  "key2": "54PfXgcPaiTi4q2DU5Wg1hkwc4VnhrPhy5QyTre3D9ySXVLU3G55Y5KrGJhFb3dzB5XByKTf5EeQRfkKxzyGCt1j",
  "key3": "4SmU8XAKMDkt72wwepqSeBhossF5qjNCnTcdrAMDCvn6CkAoudpCNuuSo3UVvVkHLUhwh2iCNEbaqqKKCbsQwLtQ",
  "key4": "nonaKN28mnZE4v2bkLLXPnyVu2jiVtL4FwtVQ5tphu2hwf5TP8yWx3K4GehcvcmVTexcfsX3ri5YazR1kciND5X",
  "key5": "XXM5Ld6aZUrrsuuoxpBBPZDXRSmsPdKSH1q7Rnce1517QXiX1FavgrQoo53jKeHFwxgiDHbWwDggjQbtRNfYqWu",
  "key6": "2ucRSE9icGbYJcTueNzKbJfhUuMVYPZpSHWZDTHxJFM9QQipknJpnt2pD9N2Su8do59JrrZnnDzmgiu8oT5W6Xi1",
  "key7": "kznaDsuj4L9bhskpCadN7euRqAXpG1Pzc9bDde7aChzR1CbUprf962ufsz2HTGBqtPDTLB6XYjFFgjLd5PaiXiK",
  "key8": "5RjuBtLePLKGJ7VXQh3UPRzWrSuKrm4rrbDopm8iBV6nz6Fby9T9yFAexbHTvWDvdUTaxNEz4Sz8ZDJRacAmJfec",
  "key9": "3BLLpByvsMNER9JGRC35qLcaW7XxMn3i8BJbw3dcZ1t2Qbsi2w6jrueVq7Lh9K2MojZUMmMknQYaQYMbeJti5d3V",
  "key10": "65PePD39tUcDZkupDoEgrCA6kHnQLj4bNafSubwfG4SB9wZfK8ejFqhEmU1AFF8vcDC66LFjTseHjHmRZMLpM1xn",
  "key11": "53GksLFN9W5Fnw1ChAMUaoGCkXfPJZXYdP8x3BmD7PNboXY9boG54jJi4uE9LT2v4w6cS9BGfkbUUxshQzgmg9fr",
  "key12": "4DtD7LfR3yGThwEtyFuPxXzvYrDa9HkRM8gbzU9xWXGHtLzrtMheyZvNPJpMjYatbhu3T35XifAmXuTVeJ3VuNJM",
  "key13": "34wiiNRhYXNM7VE9oraVSvkNAUjMT3rDmHrVQXQ2Y2gS3vCrg3E3buxGt7CiZKZP8D6icYiZxRHezXeXUSAZouxS",
  "key14": "REC2cjuM9zpxgZaPo1Seq9V1Rv7nF9gZ8tY3uNYneayYS9ZKBJYB3JL1ACCq2BQePZXafse9GdxwzeyKPE331qK",
  "key15": "4f1MNhhVDfM74VThLWbPpVqxa75vu9ZNuQoyMLmAvbwF64FzHqPtby76d7PtNJpDDZvj28XQcbfhiVD6GVAbGZ3u",
  "key16": "2sFKCcmBPe32QG7JcEb55HSbz6HBuV5ABqXV7BPntM29cED4yX1YfuCYr6Yen1vLuvW4zKQHFwMD72JUk8YSxTEN",
  "key17": "55Z4GH8kYaVSQSe1KJEpGKi5KhbpMtjcXt2eMEANc2P4jgfu6TkERcWdX2YXk9paEreZuGTfZeV2YAmgXZtrst3w",
  "key18": "rd5cXszNiMedLjtpaHsyDMSZ8TCMM6mGAWXsasAJid9Uz3bpa5o3RstzF5thcGqcWABn7udH9aRPratjf7e719u",
  "key19": "23uzYFXKBSKH18p1qSHrY9aEjqmVBQBmCNGX7AqoyhFth2jYibH3fDHXfiVLSyZRkodxw8ajU7SQAYH1mpNaBcqB",
  "key20": "5vCQyF9vM8jEXZSWygTQNKZHdhZmVW1g15suftmguzz7vZjdNfh5oz7LcfmHUiSv8PEZsDugnz4MHb61PCqGSjhk",
  "key21": "2W93Nc9gJqtpKweqdR3pSoQqdbPWyPe7CQzXucQ2KcAR2Ga7nVxcUutG67SGuLXwkNnCpxw4A7uB4E7LkCQHoeBk",
  "key22": "5KyHHNdwoAcSi2yjHFg7W3TWvxqCUtN7xb2RtdNpRaPam6iamhgcnojSQEFtyc3TUsXRgZRAVXVxr3psxJHGMcjV",
  "key23": "2fdJkfjyZkD3wRFtZwi6D4B3JRCtBUv6UocXvH36xrTzKAQ7zABDabpdHsWsoUS2H7ebggyW3gxRQueoGycdvccq",
  "key24": "pL7z7RXH2zhfDDwgSPmcqUfUr686oYCh2ZnzNhrTjBCvaR2xA29ct6yvkGFdFnM1p3UizJdn7fgfsDzLscqUGA7",
  "key25": "2XUJCk3qppnV8Nefj8sAuLGR1yXAngcCSByXEqRoNQQmyVeAhnXDt3ViyQQGbUoSV26wxnGwbmc2MQsXeFgVHZGH",
  "key26": "4fVoBfzXMcSLyJiP481v8SpEjejvSG9vvzV9xB12DMfqhGa6nfFSNhxpwLmX8kxibw8oirsGERnrbiPQDU8X7Vqe",
  "key27": "5NdNiovTXBCZhcNBTKxQGT4z3sASDFJaYF7fWB6xmX9QLW82ruUpW9vtjG4WgVqP87FmjN1hVtTq7KBYofx4R7aE",
  "key28": "4KxeLNgvBQRxtzJigsmMHoYmbvRQiywSY4drLaEsfFMBnjNqqymQ4czDiwedqD33ug98D61HdTeGbFhiHz3jkvh1",
  "key29": "5k6MAkkcSzUJ76VSsxK3mrhHASDqHxaDWbLVpsyQy3eJ875ShB9ZHZfqLVHJFnFhS9B1cLLxyFpcoYhPRuyK3DcR",
  "key30": "3B5oLLRjGFKjxDZwdYNhmCKGg9pCTQMdidHGPo8uNvgyDFbKJceDqLwYqi2LEoc3BqTm9uDN6NuBLMQAv9V4wute",
  "key31": "2iPkPfGSRt6S5MRF64DuFWjjTdFdAtfDPg47hLwzwfW4d4Wd9LnuwAG1UmfdvMvBJ9j6qDJ4jZuBjKQAkSm9NEBa",
  "key32": "3PT24eLK2Kxj3MLajTomNBY9Cmdd28AzjF1VzhHx5z4QUm2h8FzW63bbKSNHv51FZPFLcrttrR8JnTyeitJChmQ3",
  "key33": "4wVJLjFb67LSCLvyWTY2p4Ccrgzevnp774kNmuseumUbDRHGhwP9269Yf18Hoycxz5kHbA8ugcvNsdFVwvaNTkVK",
  "key34": "5Xr9nFizNyoiVNLgVJ6Kjc1P7PA6bD7PyftbYLNNVCou1LHNwQu79ru1u8vCEGmF3XUo2Uc47ayh6LSo9aqyW2s5",
  "key35": "5AFt6c5yCypH8ZUdyN7v4KKJ5rviwNjBeF638FcHCx325VtuB7tmb6CPVLDWsuYCuwwYcSWhQvvyo3SuBLEjtMSU",
  "key36": "4ny3mpTEkjeYf5r3j2KbeCNDDJJFyqEK8KpMJDJWt2RDk3hZsB6T5FENAbmdeFVBp2tx3DSiJKkybjYs5UGmvY8s"
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
