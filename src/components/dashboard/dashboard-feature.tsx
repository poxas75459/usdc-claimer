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
    "3HuEcmBhH7ZSQVyr659EvEEmBvYFJLyjmbjWZ2nYcvT1hm3vutk1Dg6cd8yqeSFCyHMHQiA2hGezeGpsAgBDGo4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBBNtsCSC9vomWxbFNCwC3CybpBoHjm2r8ngDezuzQWM9dyondFDcc9Rgd6GrKRpjWDrBSrQfMnsjxopyXTZ1bX",
  "key1": "4VoTyR3eFU96zzYAgWZxJnMEQdp9HQybURqJxpoWw4bUgt8Jq8wFusW6Ftxz7TT5PJWmp4utP4y2jFWKzPGRPQiD",
  "key2": "4SaZmffbioQomLiLYZahpsFZGN3UKTyXBxocupQfVJHrztRhjAAidxL4gHKydQXXztmrdedyRw9axvNgsGKXnt7L",
  "key3": "4TWhxyEqqwvMT8Ye13WKE9XsvfDNgwJk2JXV4PBmnRGJJV6qGR8Tuh1YWEd71HLQTv2iKEThB3dKh41H1xXu68f2",
  "key4": "kwCDTdDwuKcukRkWfbbw7GNcyK8m5EUTym73qrgwh58jNz8RYcagrmxy2wUZpVDZWgbGk36xK2nxTa4n1ouUwmQ",
  "key5": "2dY8J5M8HikHrUL2BJ1PmpMVjDHbohoQ81Do6XHL1qREzEnD296J9fk9MQKVCQvHLadrYbazYkpKpA2AnWJ4Shky",
  "key6": "5Dp7RCo1p2NuEAX7HUkvBGYokp9vM8bhhyScMvPod7e8UgkXoYaVvqujjCwZW24N7YmvWxLW2VTaJNReGkMJbo21",
  "key7": "3eemPyhCJY3YqjSDnpSTMvnvQsyB9FzvFeywj2zRcbmsKeKjnVZbxBFJ3kr2vChKL9ETAn72YQN7gndNeatemHFc",
  "key8": "53dj8P5re59atomD2oD5btSHm3n75N8FooQGmAxRPKmBBZQW7Np3ETrAECdETnPKDf3b299HwraqW33SfVGyAzTM",
  "key9": "gVtESohoT79cn5bjnrEioPKLBFDbYNpgcmqNEnXcNujWQyMxRwdCPT8rJGLhQaAHMiihxUcJWoH2NZMDV5Tt7qH",
  "key10": "4EeQ1J9YypAWrmn8rjYcxCeSaVdriF8wrRHS4L4RnzWrYkEGyirEtsWPctUFf9HWZ4RCrB2rWVzQSw57LfahaYzz",
  "key11": "2uTuHa4chhUcPj1v8nUfckFeZZ4c27V95RrvBKw5p9GDS4BiZfEtGwMvZjGrKkBhQNK1yHNmULdWKbkmoj2xPVCT",
  "key12": "3qW6En8ccFeRNrsvSn7xyYxbEmjzoZTZ7rvwfX2cyPmKo19bsDmbJpiFv1rxELm2Vdj81mLu2dBCVm8ZezeG6TFQ",
  "key13": "62jexB4x577z4qCvQn3BHYKirjHAzGNsDahLvPetS4LXwjsMB8ewXeurjjGbYcA3JUgzH55S75krm6byPpNDyWNu",
  "key14": "4wyt2BanSypfXnDjDrUu9d8UdwM5Xo4T6JCRLi4qvtx4eBWK38VdXcmFBt4aZEMCdHp6eBjfUaAX71T9rWbhnajn",
  "key15": "FL62oZZucGw2yruVv43SsxD6tfB73AfrcmXVZhNbdyEXqFGBox2L9u5frfuJywKk9uzruy358dNAFvNzuuTocWn",
  "key16": "2czeA9dgkWC46BX2UCB77QqdhhaXrn23Jvqk6JE8UFNvHRWL7GqRzmvCnfKCUiQsgsakp4QpiUVZN9g7AtiHmkea",
  "key17": "2dHGrVjWDUeeMUcsZZe2mFSEv6smtAFAzZZr4vooeepkianbuzybLggJZJDGWJVQaXT7G6bazkoVPLR3saAtdEBW",
  "key18": "1i9cuY3siL63jq3ozScnvbo2g5awWqZeGHKUupEAbnwwpnMixoVaxtSTvPUXXqwRPLygLvojWkrCbv12761VPuV",
  "key19": "58D6JqP2sCgLaV8ButQZeLLePZQqJ9Pn5d44TiPWfdJpfWjNKF5Sdgnk22dcBLvhUzuXmbKVqU21zcCSQZ7JGEgx",
  "key20": "61Cior9DPbZiY4qgTjpYMRRd1n2sBKf89u4J2GHqWctpYZ2GBAocPpuNBtUjhSJLKVjPu74MffEFF8WwzpZqVhiB",
  "key21": "36toUGgLzSJtTduaiEbJ7B1FBQrJS9BuZmWskcfXCRcE2kcH3XL7ZyBKmr8heNbUKYdn3q4rYgP6wMTKCy1ZfwXX",
  "key22": "2UU7rWFkEtXsLLNuEWyXmZzrGYSiQpWVYQu7r8T8HrNgvZwHAc9oKxkuHMH2SkbRLH13HZTXpnQoAW18TUMiNEoo",
  "key23": "2NfnPda2D9ZcBKwUuttL4BTDr5TnaDckwp1B5Pva3WBjjk7Uavva1pudfXokNMa2J6nTHBLxhy9QHtEcHNjkMr8y",
  "key24": "4TkuE4cLBHMijBP3zKS4vrK6UKLcTKWhqQimejkhfi2ggFP2vkpV4B9oq8i35LJVMPvPCb4JYVACsCW3SbhmcHo3",
  "key25": "2QF39EKE89pCtrurdaGLV4a1xpjKQjwSHYSYdyHKvJiZHPmvLtq48eTpPUpncAsBNH4FyoMzV2dB7oPDioEZWnKF",
  "key26": "3XNAi8QFMJKhRgz5y19mjagyEmcQeYa7TT61vqEU4LpHEv1JDywyvaNy9xzvZ8VD1MjLkNtxacnonG83egntxtdU",
  "key27": "566vTvkiC6z6Dy7iryB9P1yBCsxtyUbFLtZ5H7B7zWtgM2fHjnEiUaWpWdXXyvCvbcYtHbTKgkYV9c1tT8FqJSf3",
  "key28": "2Y5S5sRnQo4VHXxkPcf3RsEFVLkA2FfvJrAjFUDYaiXr5jRHvcpDino52z9eJckyi5MAoP6ucynYQ71sX8i9wK29",
  "key29": "3UfmtjQ9Uk8KnZ5dLRxbUgGdQWaP4NN8jap5a5yoXR4noTgg3xz41F5Zfk9zfBCX3DKci96J6R1BmUFYhPhyNC8",
  "key30": "3x4difNiiEbnhbQuyUxUHdF3jS1G7iFBQyzvogae1Thtg7NR7LT3ARUCbUcbU8BvavQbLd4hRsUhbWY6cw3gxpS8",
  "key31": "4CPp7Zs4KPzK4DozMQy3a7cLCGrRgbRPhqVsQCGryGg5Uo7raJZ7U7HugY1y8ukkBJMGBbbBqfNqMVCS8Ru7wfZd",
  "key32": "4dEJUUAnkAcr5ZD6YeWT5xaGrAP64bL1NGXCf4Dw2VqTVs33RvTbD19QNiBgDHdQ391RSgFqukiGYJJigXvr2EPU",
  "key33": "2d1JDwrM7kd7Q6KWyfVhShzHbSyXkWSNe8YSTKPGP9k342pBndQh13DGEgeoPBxA23Jvy2LnRv5XUMFN1hYvV6yC",
  "key34": "2tw8aDs1Edw3QkCSmr3d4EXdXfVxTGtw6E86xfjmCMwQgMk8GWgUH9q4nczJsEMpPnvpT7TV5sDQxMYDhsvTCeSe",
  "key35": "2CQRiobboccXK6FVXAH6ZuJ5S63Sd4Vsvfcsg7bTokig24iRcjcRGshW9zcWPFafpKBpc74SghAyMSyHEwmtmw73",
  "key36": "4iXM3aTPCGe6v4fuHpT5VKxGziJRq6htdUdDKREuUR88tQfchVQ98eneJUxqxwZVojoGiyFfRPA1mgtbhAntRv6R",
  "key37": "2LMsif5tHL87vSwmXxnLVid3PJ964o55zYHYwPQj7n7JvhzxMDqP4cQJrFAmWdh13Q6XYsXzmq8fiQXT19haZ3mx",
  "key38": "4joRBtAvqMbTEYttTbr7csVVunaQaitiAkDBZAFqxTT9hiaeUbffCvbkVPxCqiRtkpvmjAQfNXK58AEM4Pe1GDEU",
  "key39": "394MpWE8oyfqpoqKjNpSPHobAE8TVDwJpsK7bZssWGfYYcQJrfa4q6eT7de9eTvAXsbuxUAbg3wZzkNFRGSKn75Q",
  "key40": "512N1VX7vQVHd35tNijwwhZieLeCh6ZREoNSX1WdRAnFpCckWLdANkn1D9iKdXssRW3gyH4JVzdoHLdu4u4Kc3MZ",
  "key41": "3oFB9eVStfYZLvsLEK5kLZ4SaPxGmsoxAHQbDez7nfdeycXonmaCHdYriTNraYLaZsEzGxqu8yZnn6o3UdHTy3ka",
  "key42": "4hg8xiWA7dkUnYMR7P9CFbNEXgxPp5xXqxWZMZDAF1KNDdDwYtzBHA2y3ijZjbUrJ9g5AN3TGQ3ArcnMeFPPnUwm",
  "key43": "2Y7HVqK6JaG33ZVQnLnWZFEBa8m1jU7snDskfNnhukhS6RNTm75sXmtZJxL277eYqYcJ1ry9GKxSiJhU8a5BWBbn",
  "key44": "2qGkssuXpsJ5Nzk2fSNQT6nDfymZjDsBdFoBHQt5fCYvhinNQTZjc2bobEFdLfaok8m5vfTFtZvBPCqFrMX6FYBM",
  "key45": "X1XeRadiZbZzcayvXBUdybDsfk8EPWHu6U9HmFvp9WpQ89VeH2pqt5wRZcNxkTrR1HjFvGaTVcfax2K4e3m2adK"
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
