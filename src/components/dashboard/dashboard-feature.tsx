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
    "4Vp52ZuQtSW9ZvcgmJsX5JEUYHT8HasnjgrSFoHEb4czdb6mBAwNnyGnJuTuSVU47JnP5FoQJNCvMA1QaSucscqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W66yRHceRH9J4Wu4HJSy1Nx95efSSuaLJW3jGGEWTAsWrpKcyeb9qZUzZXYg5efr82FRr6AeP9WEDwc6ZoS8wDL",
  "key1": "2fLMXeYhMhaRgapw6owjKbq2zK6FC5XRXVEdtTpFaK4b7LLRNo7VfmD3tJtNzPHmbD1ij2CTBJyZKxqzBVfZQXqG",
  "key2": "h6aNsfV87xPrxCnfAh9hf63ZLFhysgP6HN8ak8ZDws4B8cVie4PYkpaPQGwWd7Q6Pxtz7qyTKhGx4mRf9xZFkfL",
  "key3": "262u427452dAddAvLk9auVnmjwmDiUaCfF7dAhcjzHyLouFDAd9r3pfHKGqRt2FMVg97qcimFW34aEBWq1h8Upwg",
  "key4": "2FnpR3xyMoTZZEvc19vWdq9EZk6aMk5B7Uf9A2fx92EsDMJLLo1mMBEGWwk3u7XqqAYxtErNdiiRDVGRxKZEfzWx",
  "key5": "2UWb9nUnMiS9YC2MxJjxNCTxeAqwpyewiF67cNhW8pRM4YTeMjThKtPxpKUXVGGFkYAZ9t4V7gSQBuZwNTfBioYU",
  "key6": "47fRj6N6MDeZ5ss3HyTL9SGvH6duvM3usYRSxFi7CSXDxXXnuFxXVZEZuqCgRQx6GZZ5RYAm6jsUHhQe2nTwuTcw",
  "key7": "3CqsPA9bEV7wTv8uGPsg2pDd2koJBhiGY8tGXzGtzFiMmWY53KKH2nNpSm48hYjoYxrvYoXexAaZyf39qMF6Xk1i",
  "key8": "3g5LU4vFUK1AhUJvoM1yXzGNDxyvgu5q7U2CeJ81udRRrRKUbeV61mm4pQD64396YskDPZemEcPexwZgSFfnCLkg",
  "key9": "tKbNTWxd8AbWQVsf5cSDA294Svv8NxuLu435jqmb7yKWEPkqY6y6GW1SW7cysZ7XuRPD26z3JyMyxksqn5ZjQg7",
  "key10": "5yyshXt3saDH1UbXcPs3YqZQ47zQ6udbi2RfSHxNq5YTFJbDdBHyBEiKbxgrHrVJasMDcrx649EepMgCgjEEvAro",
  "key11": "52DWshbeLDHM6qQHxsjyLTgNdw7AsWZkKwNzPwv11qu8GXGBwugqPubDXGA2vtYihF8uog822JiUt5RzWkzdv33N",
  "key12": "59NSwnZTwnHFfS2gQStqssEszY4LCM7jaEztb9ZSnvscUPYt6TobSu1hVGCQWsTaLHLtRJ9eP44b4frJggEJe6Ge",
  "key13": "3mDA8z4rHVRbwsoaNMTfHiK6JNMqiQbWJWnWm1NdsfPyELDEcqDMu4KaonP9TesQP97iyHzhYVJa9yMH9MxTmuUs",
  "key14": "34X1YwTi2etU6s8ezsDrDTVF1fGeBiQodvYoQ8KUTQ4cYEv9RXwTCCU4DkuZ89EorKt91S8T4LqENYNL5tQCzkzd",
  "key15": "46mqCWbJbEFdBCW9vnTenw6GYGGuQ4EXTCJ9PtxdDz7bR3R3PfjKynLsvWqQbHe6E3rTGhYPk8KT5DRkGbYZADb7",
  "key16": "B3GVTaeGUsXLhDQAKSCt6v5VNnjqFNci4EgRHWzZYjj2mfjHoMpXuvwAc5SGTRUDR26pLb3tvfXkBXhEXXHNc4m",
  "key17": "4q6UbTEftcBcy1Xi5sf7v33k7mVqakjYMhjHivAhKWXwvZWxCKrYSqHGsoxhUsdKE1CvsS1jGgoozq27snros8Ng",
  "key18": "57vfRuKegcXzzXADtaQaZAHoapba9kRdCfpYj2uP2QawBZezRMFKAB1ku5SADc85kTjnwMuEvwbH6L64KhSz7PKc",
  "key19": "3FtBYNvKPtmMR8GKQFvUYDsfuXo4B7wZXzVjCPK2aDsV3o9XgnW7csNnYJcadDfy9b9SvwF83p4TP9h3SDwMctpP",
  "key20": "44p68PCFsgKfNaNKTvTAtrmRiiAs6zqfNtJzyBpNT9mkoNkYufYFrHfmQ4VhYdKDgUteatLSBVUFZnsSsaxJaq6a",
  "key21": "VMxPB6jvTGpK7A6kjeJp6TqhwRWRWYvH4Ty7ReHixshyfqmLpnUx1DPWnzrgEiyKjzMsBMPmJdb5emUzFs1RWaE",
  "key22": "5y74uCycJPRS3BQcwRXWEdHKcgLfaSwbfuHtn7TJHvMK2jea9udubAVurRGrothNZbRRFS2okxsjwhRSx1MwHcjq",
  "key23": "2xzaTVkUknwpkiJ6UfyUhkhooMVDAGbvp3hK4PbLjPZPGZJWaE4nfFsqtosbAagunBCvzhZybt8XjtqpbxekS4Wq",
  "key24": "53y3MVo8WSk2qMX2fb1P5w14Cd3bV24kZNtBZSs4N4WUXaoh8wmwJyJdqj9kcERmbK8mSSqx2be3vh8whvfQPEmG",
  "key25": "2VQ7fN8Rj1PyxrktMrPmu43iHRdn3qA6kb26kb3qE8Gm97KfS3eTNg6ND5LXurLbkGDJchGb79G7C3r6EZuNNdgH",
  "key26": "3UTz9V5YgbmRtEKc4jSdL6z7J9Mkef6oE97TVRiax2nPdJcZdo7zmXoj8maFxYuyHoNDZawhfcaCDJUpivLio3mn",
  "key27": "66Q928pXf5Rtshgoo79Pg6RNt664asezibYscu2CtW6L5kbSyum1ND12eUPqcYFmFRrjoBuYVpjEbWzr3b5EAVHA",
  "key28": "4omkAKh2jAUbnUxFGThttAeSf6kRYjNa4wbuSM5SnULoRw5AqTnzrVq4xuz2aBUYavU37dNc255UnA7AjA7xWEjn",
  "key29": "5gDxZy1h2fpLPPcUpXTZ9Y3vr2bwUPpwDG9SHYMHu7cchfrKJfPJB1WoqsrnKbofx2wdmGDNawcjeLbooiKdKeNF",
  "key30": "48Y9pWDgGvEEg4hh7k5NV6UGF6FTFGMPrf2mUBfLPscFAC4RwP52LZCvDxu6pfDyG5xSxRHDke8Dqc8Zo9b9Th9y",
  "key31": "53CtBi1tYn6xcymeFs27Wx26WM3C2UDUaV9EQf9XfmJCMD7rd2Bgck81QE88RScdF7vZDBmfn4bf2rUfitg5vhut",
  "key32": "3BVo7mN9zgytVnMayNaoyMsMgcGnytVqjQigBQvm6fqPRCGDdHgMfm72QmpZZfTBmqC5SVZZH6vbae8N88wgB3XF",
  "key33": "3U8KqDhBfK5P36KV8HJdaq1DB9cLCNH9Z7jctxpM7pWrVRXjNDSRVNavtZkKZHQn1ajgjgY2sGHWaNqoQVebwmpX",
  "key34": "2XbwfJ3uK8qwDSn9cVuoqRBr7wPMAzT6R2epkTSdh1Ei1bzh9xQjpN9NWeUji8H7ffw4ttFoAVbmsesLG65yjMLP",
  "key35": "4GnQyxX2SWh4XfXavWVmzNEGqb4kjdDLT9ycwhsPNPfV2Cwdu6Tdxxcjy2x6JyQrudTDUPZCfiB4fjdYThJccr9G",
  "key36": "3zi3cfFGw2Rw122UGaAzHq54V532iDhtoF3boz5ou5Wp8iphi3EzdiA3UjdruMD8DmCxxWttd7LGmiy4a42srAEU",
  "key37": "22VMDzzXEGbSZCgbpXqEHz2uMU6kdGrN3Qjp8DHQA2BpC33i9q2bqJ2FdQk4eDMWntuTt2fyxuz4F1fkjzRzd1q4",
  "key38": "2zuZsciBgU8BDtNpZfJSSArYNAt1Ht9mRT675NpVa26d8eXhnk2qKuND15SgvhLis1ZqJ7LbTGcawTSjiu2sJPWo",
  "key39": "5xuXAVH3Bzw4nwQ4fdF6qVkvz2ZeD3iQoeSpzC74W9iAEtYYecP83dH6kWy5QbUsrPzA6t85ForvqnapJDf6XwhN",
  "key40": "4jKSdLB6u6Hyec3qf5aPhv58uYzNGyCcbENFwpu3QDQn6LCe9WS1mDXTWB1gmUwPasDiiEiWv98pJLsFFWhy8taQ",
  "key41": "DrMmgD7R7fayRyS4yLEHwbC8gLGSdpnbqGf6DuYnTZhEW3cHjU4tYAWVcv7pXtTKYDUHpurcVKfkngRDsHpjgEJ",
  "key42": "58WgpdyrBaFHEee5zskJ7Qy4sBahhb2Gsa23abP9BtWTyamfFagpWkVcUoQAgoAz4miiF5aQRqgczfzSeU2B8B6i"
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
