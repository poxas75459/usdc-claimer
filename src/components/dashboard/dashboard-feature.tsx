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
    "5hNzD6kR1TJXFVyiPDvm6zrfWE7b8tSoo2vCHY77z8UzQCMciLCUWoaFEi8wjsBmEBBkxP5QWUzr4Veik5QnMKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gt1HtMw7TQp8H2X3zLC2zUgFWHAnitRufriY8eRjk5ctuMZa6MAax4M4N9Sc9jk14cWgg8RwHRHTHUrKbuqnJPK",
  "key1": "5GstVKovLtzjbJS3dg6FmE2kcJKuLhMQPW3k2GJcY2a5ELnC85DunYE6aAATK7H9Sq47RFP7W4RroXWvJJB1GE5u",
  "key2": "3BctLF91bTMtBwiHE4JoKmhjzkehWHuvnPFMtVWUACYAr4y3CN3aZxqTMpkBwhnWDiXNUYWf3z1bZaZZahjbmo6a",
  "key3": "66DDi8spLDD7ehiNGdw2HUezHdbjUxbPNF8LKprUbsh66GuRtDRnhT36m3cYsVLR7L8pABmNUSzN8vJq3BrsLGfc",
  "key4": "Nu888AHAQyw5MhMkP6FvgzQuVDtbpSQ1W7dyGoB99Q7bKPE3FTqyTSpHRcLVZbk6xUGGQZ9JDHh1Y7BgnmaNVJ4",
  "key5": "31SwPqu2bA6p1HW5uW9pA2TevyRFocRFz8FyTkZSqu7qnKogS3ewX3FwNbosdUSgMA41UjBcDCo7HUr5piUL7MBX",
  "key6": "44TvegB4kXrq6EB7unHTLaVNeYVd8LYPwaSonDEphWskQtHq7DLVXv6mjgNdAfF6ZzQSZoE24nrtWbzGVZcEfwEg",
  "key7": "3135cZjZNH1Qrkv7BvQ7egZqrNsNdmnNCMN5QZtRC3KUWqXcBC68i89zb42ekcjgxz6MGMqJseC9AonVmUzEE8u5",
  "key8": "3bz2pFsBqEvfMxfQAoQxBEMvqwA2XTWU7b317iCMa34Mnuc4qSk9gbxZBGVUGvash3G9ji4c1kPnjCBDsaYrYj9Q",
  "key9": "5PyNgvRTigZ5iC3LqwX2qd2aqqH6mPiLFHqggS5KTSxgR9KoLYVr4NNavqUAbtFuEhb8bWTT4BdeR81pjmfQKvjW",
  "key10": "4YsxLs5xQEvXHkHGqci6v8QKuxKHfo1SC77Gea4EbedoRaqnxpEdC6BGWGrmXfso3i2E8xzdudnWq51uEZ441ZSe",
  "key11": "27oRRrFgp6aL5mPw5sPBBhHj3gZoTdDgX9cXuuJkRunyAf6YyH5yyYPTLGWTegrcYNfVNpyKURBkwabsgj6tQxeX",
  "key12": "4eCfnTXopKv7DvWotT75Nz2NCuTqHs74saguKGi8ND3pgvEw2rn242jwZsPGoY6DcqTgQGVzLd7m8MmkezwZtkh4",
  "key13": "5mNviXbTpye6kYXeX42H9rSG4hDDxp2mSafvvPKu3wEPaqjCwpc3MkVJ1QdjEw5X1Yrx3D2pvikUssePcSiXJ2vZ",
  "key14": "3haPVF8zifgPZx1JwSmv2xLmtYDPewUAnPsGtEA59YrkGrMYs84G8EsGpDgXWUNaEifQ8x3ZDDmVw3e31i3h1tCx",
  "key15": "2Gu485uk9akLeZ5nuz7YnAj9nabAGZZRz1m3GePv6TNfrGgJw8iSFfbwAYbPhbHdK8Nf1Vsb8Rdx2M1YcbQT5orG",
  "key16": "4AGZjkRd8rLMeS731bNAXuH6RYuqqKR7K5Zpyyz2bXLAeJVJTTqNaJg489wGFJVGbBHowvNL3FcSJ1nNGoZJMNvJ",
  "key17": "3gUqZccmnG26iwnjdkTXqfHLZaKXMG2sj2gx2DtExwCcEWFpCd7wGWyZLYyQZm4AtVTXycsT1hPsYgtf5eKGDk85",
  "key18": "3jsPHENRrnsXrfgLJzgok2b9GKWcj8EyYjN24Wf3wANf76faJsh7bqHt3Ljkaxmor2R6Q8mMAvWFkc2HKvfLnUKp",
  "key19": "3kAHuQfoJu7AjRMpnTPDn45dXsRziXKxucZ7E1UgcLj6KTE4XAnTFi3fLxS5xLcyM5WKteLiG1bn4KCroJ3SU92e",
  "key20": "2cnQi7nruBMLRtWftR8Y2tSzxaTvGRpeWPvSBHZan2NPRZDJUG7mrKa6wDHmsprryjqBBaLaEQQBytrXKGrnMRpD",
  "key21": "4sARwpPPrHNpcLYQ5uLwVX81uqUcA4VY5eqwBivhauzKTvyyjUoPfoNmKyJW5qtFsgqXX4d11MMw5fmo4AStN7xL",
  "key22": "4aKpesahR5YK9uiUFEdSTRu8Gmtp7GNJEP5WfBF7Tmia3L7mN3HPCH9RGJZ2jvwuyXiB9jPCTFnexSAm77vBvycT",
  "key23": "2cbgZ98wa5hQKfq2wafdNWAwsTdMozcpSEr7DaagGr8a2C8cQMVMcFDrMVCGwUVnhh3yoMvQH7RAiUmjtE43zmEp",
  "key24": "L8tmRDPat95MaSAm1UumGjtusHEJkS3Nszbszwjs4i9wujSJAjpWaTNVKyPX66qnqzkH7AzsNmgGSUctiFvmShy",
  "key25": "yaBL5fUPjWa1heeJvPGjQjB29bvfQuonVYPUAPoGr3QtQDhT5QFvzWJn4oJ2FFUakp7h6DDZSGiYQWqtjoq1MDM",
  "key26": "632Bg5YF7f9w7qkkd61y8s8LcVXpC6PAXyXygqyp27zXTaVFKzvoYRHKNqDFkhV9bsnfDdzfrTExYo64FgKSpVM2",
  "key27": "5ZzMtTZ9Lv9svfGCcadijWBdywDBRJNpA4QX4kYF9tyTHUpFjkVR6URnRVjKAhNeP8rkzfyJzsXiio68gZWVCZMw",
  "key28": "32hEuTzWuyFuQ82xjFp3U72PNxTDUJH4oMX5tdmnL1bWwKzokVXd2NRJzF1DUBUMr23VBPtMXC9VWTfQoco7JjxJ",
  "key29": "2nyk6C6BoFKbyt4deMsbUkPTDni76DtNJMsrbF7P9VPvBFrBM77EANGujcFHM5y3HJi8UHsjazUKbcyHisCmrPqm",
  "key30": "3ByVvAzkDnsXkLLEkeV1LhQxBnTnSG3y4BvYunow18RwBEJR1eUHX9FgeTjwxkimWA8by5mCaPf3YtEL32c6nRcM",
  "key31": "4nNP523TWPNUmKZcD7LWvw6Wwdn7f1vkBpY54nse79oLpWkmcaF4ewAYctAkSLrTCwSWUyVmmwxir12LduL9Gv5R",
  "key32": "2yfQZocgeb7PzntmN4Pp8cRyjKdAQs6fqbuTmfWV7oTyDSoUtho1XWzPFiz9BrzzGpsVhGxPLLrH3cg2vG4iWPPp",
  "key33": "S2dKxuXTHfiiXYxXLx4SyrWgfPvibzGzH3kYB89PEnutQ4TmhVZR3NZL8HFsH27ERFdYWYy2e4yjrvv1sg7umtc",
  "key34": "121oAswAerS5M4DMbQoqXq4vhLJHbYihALsV66ZbN4d8AfHPfet1BREXDLBA123PzeFCcQnnJexdoeK4i2Bo84cH",
  "key35": "4MW1TZjA8XBaLbfyoQ1uuVV3GHcn2cVDFC2FMY49HwSihxEc2nbaggaFJsmhjdtNhKPsxVZqokSadJZ8Be92tkzk",
  "key36": "53CmaCZUTpTEgZrGPTH8UwXenW1aDbkiezi7PND7U5b1s6mxW2wc6vqhXKQv8mQqAP4AxTxQrKzTBqCewucUjAfz",
  "key37": "3P5yLyMchm9WeutabZUGnMJVYoPWd8KXtTJUtff3dCXh9L2ggg7MTjrxTagH5is59PrSz7L4SV787tfPGqFrqfqP",
  "key38": "5soAACUvoMSPWbjR5T2qwYtrzFHdCDNZ3YFrJRiqTogW4EDJkjCqdTt5GYiXarYzLh53zfxiEL3UWqqMWKnAodmZ",
  "key39": "4qQmqRNZNBkWnJi67jmY54haSEWM9k2g9n49nwBmEfPLvKZMnpGpFioo8t8JUGtEXPFPq32g61U8fvKgxqvxRJr9",
  "key40": "4dp46LgvmyPChMERFRt77xDbzj6JMAmDdCR9tiRvNPqcn4TYsE9LUv6rCEcu1NvEbH8teb44BDxciQB2MB46m3Lg",
  "key41": "3imDngsMDAu8DzsBkr5RU8Rk9AjJvf2fWrmyG1TEfqxvvPrEjZQTjVCHZVbYBob6DUHePFJ66WJwzWetd8Jt7FE7",
  "key42": "5RNmXNXeQw3Mot81FGPV2m5k63Y5aSC6KEvnBBUky8HRKdfaMcARvKbboJjgRnqMLEycQTTfX437WcXqCZaYNyd6",
  "key43": "Kj4LHd6jeuSskTBFwYzBgiwQTizD281hTavCjkzMwP4PzLGMr7pftby1MyC8dAVMJniYC5C5MMUP89sVwTuJ8ei",
  "key44": "5mAmTk7GtMUSwcLjnbGptexWra2srapbvd7BpMZ6R9iQdb4DbFAYHZMzVFQQHNCFEdUJi9BxB7GrBW892Bzi5hK",
  "key45": "4r2KQjikUrt8jzj3yakLFUPVDW723eycQAHZgfvJDFXj7Cw6yazuQQDiZsLVZgQjiuyNEYXineEonuqexEbSfHsJ",
  "key46": "46mjCKink5bF8x398wMmhkMgcdnxE6NWQCwFu8xNYEdrU8GYBHijoEKK5uQacrYvDf8yEwxL6pNqc28PmRddqCcW"
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
