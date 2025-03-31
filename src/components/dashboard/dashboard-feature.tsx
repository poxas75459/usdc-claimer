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
    "DNjS5huaPoVgcEFhRpXPjAZDCtMEuFsphJrNAMgNNZFGftDqnDpJGggiJojPTeTmZxYUHFX41rNVT1hrw3aamYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SuKwiXEsZ7rmSaS3RxcxGDcNcW9ZHEgxjyK9nSiiGPw1g27PFCyELFYphoc3Sgkj359986vmTKcD6WdcU6rTysR",
  "key1": "2W48cX4fy2oPiueFnrHEV1a6KZypQeGPRTaV8kURuhwtYVTQ6xUjndryRuEjeufZ3pjv9JHDa2bM4UppMS22d4sJ",
  "key2": "5g4NERfD2NvH4HdoXVCSGBimxUNx9Jb36yfd1yQ9Wi3iNXpb4KxHcjrWgV4aQMN4Nok7tj5iAbJ6s12Taa8rdaKx",
  "key3": "2sG8BcymSwjq5qiEwQ4275HpH6g5qFRMJX45WqQ6Y3SWmEJf2CrVbDaebLZdkRwpDT4ejoqhpt2HT8dCaNDmurhe",
  "key4": "mScKUk5QaKdbmJ5BduteFMnoVZmMXoCbs96xxhjRzZUihdjgV87h2wkt2kDFCCQjjSMrmmj7EZ66fJx342mBBne",
  "key5": "2SzHrBVbNF4UL5omFJcoQwKLvS1fbVTfi8qZ8hkgeUUUv3CKnjY8Sbr82w31qjLRr6w9Jf7EXjbjnsfSx7h87aMg",
  "key6": "4EEGkJaa6vwYeAGyBThrU79mACcrWhZ1sv6pS1iw8GjSrdX3RbcDRfe9Zs36XMuTEq6oxNosVfYqmtxzaFyu5mXH",
  "key7": "4qwqrjpQFGQBxvFmtahe3nQ9j4yoj1nnhMyuyfZ8H6gBm7ydBwxEhnwL1wCAhevMiZpacvBd9d2LqiXY7n3nt5hD",
  "key8": "61Dc4nRFSF6UpvbKPG8Mdwppo8tG7FWoicvH2BZytzuuLFLJor97m1gUk7jaNCuemUNqxpBvvJb2UGjiZHVXSAxv",
  "key9": "zNMRadozbs2LLx4ZXwz77WdNgVdrr1VfZrFMKCXhPQtaeTbMViqgGkVu3xjRRwkyNAVXG4hyGSzo34JC49pdNk1",
  "key10": "5nH8BhT77vvw9r2fhNboYSFLuYstKhnkWZ74sJoWvS2dr3NTK2VBB5pDcSYtCVkhDisxdwACxrewPXF51zkzEzuX",
  "key11": "5rtgUbrJH3q2e29EMUbDQaMUHFxgbCFPX321YT7qwSFbbRaoPrjBmtcLTkZ8f89HLQGURTjAnFnrVrxLuaDKrPxv",
  "key12": "2FkivokRxKkLGM5HgpLaSnbQsMk7rMnM5SD5t8RJyomWWSP85boBH69gZXFoU3SSREYWboTrMkJW2TeCNfgApuyM",
  "key13": "5KXMa5RSCvmez9EhMuigkR2NWrWXf1NQQ3oJsFSwG9hYGe3xRg2n1mQuQLXBdXi5CKceS6EuY5gWGpg1rcjoGDJV",
  "key14": "9Spo1Wd9P7MyB8Z2r2gNY3n33DDHCo6ByYbUm4mt5FP81efg7LdFYj8JR5Nv5SK9M1yCJ9ybJPW3dARdJhd9oz8",
  "key15": "3qkf3o7SvzHAqBeWdWCd75XieHinWD8xVyM8zx2NQiyjC6qjQYy8jbSNn5wF3u1d1DgcouoPvbXkVmeaypf41JF3",
  "key16": "41b87GGwzXjKtsHbJfGgK2figtKU3wqvAVikofWeR5fcSro2TKd1vbZ7ucFfUG9q3roBY1btpoL25yNXneV48U86",
  "key17": "3asEJ6sbHATz6P8HzqFZK9zv6gr181FwVwoxJubYU4kvuUVZJgDf5WpUPUtLZfgsa8pYw1qTWMZ2dbsfnWB4QNUH",
  "key18": "5nvWnck1F8xG2BZiAJpJW27M6m1vzDZTFQTU9TtC2AJ8ZguUYMB7TSxq8xxpxUhSX3Bw9FwHAkFnT4y5efkX8msw",
  "key19": "2r6kMxNsJnrmD9DvA3Z6PgJDQq1DHjvKgKCByH6HCGCDpBGwVepbun4Yb4KRsaSpsJ73ENUzbbd1F8sdqp4kvtgu",
  "key20": "2F2sPPLMzfrdpu2owfevAxPktyVNrGmkxUK4HmTmaMJAPSnQjoKscTo1dUD1etxKb18EgoWQK4Tp8eL98f6D47TM",
  "key21": "UoG7ghVdxYpzhpJifqBSkYJE6nGCLcBAkVK8dM7boC1GVYyiAyoDRaxrKCUws5w5yLMHq3eg5VjYLdhLvzZLgrk",
  "key22": "5z5mfxyJFysheeE5rj6eRjKcaRL8F7tgDmzUAPLTvh7Y4en1HEFw4JipKR8nAQy5BJWVAgx83yeYHUiEbzXAUFBb",
  "key23": "5gERKoaQiEkux1TWq4JF5S8WHgtuqfmfx3523f1vUwjwZ2TRTuCFTSCUFypxPphuazntCRj4TtFQY68QbgMhwiiJ",
  "key24": "3mUxXvsXrc2jzhi25GtwwGmYMHHxy62AG5mx8QEcFuWJJgb4hgUZZyGeiEHZDC95Nq9kk84Cn2CZrxLSjwNmB1qw",
  "key25": "a6KeaBHzqUWbRg8tFUku8W1xgngpXVbimCYUF2q7mb964J2xpbSrezDNdvt5HnCqGRAiDAZjtjkP3wAKY1rY8kn",
  "key26": "2vtELKUQw1E1K2UudxPfNXSgXQoo4MKqfb34Tq5UWLRt394Kdn1qecb1Jfm24Sy3pvUaAQqLGohNYkceRTZyC5B8",
  "key27": "3PUs1vgfX1pm2u7pv9EiGBR3wUuRza8NMrU2ujyWzJAE48oh2om39nBToGG6ZKtsexQprwn6kQjMKnq529QkcJEU",
  "key28": "5ue2grwEMfhofeijMP8ut4p3EPts5PcScH3drqtMeEDpBxeuvU2CCzzjc2mBrsyr6tFtDhxSZPHJp8qYw4XKJTsf",
  "key29": "5qSxUwXN1VmVTzCc6KJuUXk9XAz2N7uW9zkNJwdFBZ6hKZw6zYe327nv1MKnzmZC1VHFtzribTMR2S7koGr77w3w",
  "key30": "4JGpsVLtr44SVt2a6ZKaunxyMhLSS7SPZ7pJWoGnncvCf2ukWFaFC29ZqsYkgepTqaZTSrwtzwSNg5fnSnQCA9Bo",
  "key31": "crQmsNv34pU2M6n13ePwR9vWtVqmurTkF9Du1gQZW9fefpUTLYSxBWVEntzvfj93k4u9uTmK5MH97w2aJCc9F4i",
  "key32": "2ETY8NbzhjakpaHhZV466CDZzZhbatGaMkDSqLVAwfZBsSzqB2kDDGX6ySm7tB5u3MRbaRCZsVqEyAmoiwm71EeX",
  "key33": "422BVFUWNBdCZcBSFWdXqhzdRuuJ4CXe6G6RBMsziKv35hxPQPPeQtyeopVN8cKfhZzPLfm4TsUFfAQChEbfpP3S",
  "key34": "4QBinPm9Crh8EhbHEt77hDnj7Q4s27a3oKMy3htB1XBrP7FgGpLn2nRAHkhYr4bjanLV1hM56u1xE86NT8dm1pv5",
  "key35": "5rMNt5fRR9NhDo95s3zCNd2bF5BWjGFNBbV3Kw4ETCcrJbvCfhtGmjxFjrdMYivUZ2VtBZ8EwZntNFhj5ZXFpNi6",
  "key36": "5gL9ii71z5GP4d2T7sP5eHUxfcQrqGWTUas4FMKNuFWh7jDmc7MnHicH1CFWyyyERMXnEjCbZ4doAdN5YcqNUrFk",
  "key37": "2Fw6ceEqhP8ehHihtpuYi38rKWYFTeRQeJZ3ggSajzM1WXEvy5oxKmBTdbZPB8zWMNrgcDozyKMC4ZmRQTmmuytg",
  "key38": "qhxBbeboy43SmdVxtuuNHZywYehYP7TbE5RCaipVUpTE3y2A2qdyfQvKKgKGjg8Mh1K5aXgDVV5hwjW9tqi76uq",
  "key39": "5aWcqKTZBFgdxycE743XzvonaGNEjPFCkkgrtg9dKcbPhvTRmYMdys6jM5agJ4sby3hvTrn4zmjo18CZojE2sBw6",
  "key40": "3kYTknDgspcJyYmhwzM521CuDG9J5S6fVMeqmWtmKNDR2VTLBSSTzuUtLoP77Nj9PJHmQW8kH3TQo6gPErT5Tob1",
  "key41": "3swfPXBHyNUyMS7rnXQLBibCnErBeMm7DnJsNeywqCFCFaDARdfdbKNnSvadKMKopy2VdswtX5Wuca1AaM8nkCWu",
  "key42": "2QnX11rBK2dCZsSoqA1tUu2LxDQhZ87QiZUQrCr99jSkxNa54nEudrGBh8zcMDZSTtfp53JegtLPed9CkMpjx5Q3",
  "key43": "42LYBiuAT5cdoictSeaCeKypDtFEfuSfRMA2Qf1au6GoGJdb64KCebSrNGjoS4cUrmhp6duTViuH7oFJ4djw8jX6",
  "key44": "3R13iY3vxuQT9q7xf9QpuoQbVegcmZheKDT6UHSbAZhJgo2ofqYymm6fKb83PTis7Pj8W1PYKLZrrxeZg61CqgbT",
  "key45": "4sSZ6rnhvY2bUzon6YyZRvUJHrYK8etsNWsEE8F3cXfDYLy1BcXnsC6ZUeTSbuZSHT2bZ7rd2trqKb6hq8FndK1e"
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
