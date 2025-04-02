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
    "5Y74Wubv7ZKz7RwoKV39LkzkYTtsPtn8yKxqcEcUt8UGpbs8ciimuE9tdRW5qGv92j3p8GLLBsWTTo4kbuEDqciE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zyuZd8Zdo94JA1FwLpRZ93waajZ4m911apGyRvKjWr2Qn13wtx6YHzB3MKuKF9VVtBmC2yUE2tcSWk3FJQ3xw1",
  "key1": "43EmMstwCbJv9qFF3B64qBWkrDvvGxNH2qN58yow6aCTLEM8s7dEH2ReYHXCPsQoCCiY1U1Xy7zyPSqnRHkvRAgT",
  "key2": "5634i4euNbfoAUGEhBDM9FcUfgaALP8Y49a8uWKQp54hoaRJeZVxKHEKrK4mmMVo9w4jh4cYeewHsNmd9oWW3hmB",
  "key3": "5P4bUoBwWn5KvUXGL7gRqnurk1Cpmb1fdx2gSeEqyyzqpJVA7Scb5Vif7kjYj6G6mDrMtbtezBY91AYq3Tqg8T2o",
  "key4": "5CFsU1nSYNR17j2texnPWM4ZVSoND8HS4kqYiBJQ7xBJdsgZDSZG2RF8jiiZFTUGR8MgNEZdn9jAa9azxCtm5cds",
  "key5": "4NEtKU7D9vheyNsNbr2LZiuoNk4L3kZq5kSZ88sBKEoeyXJm89CuznqJmtFjni8zTkZsMKf7YMJSnG4JNFkRHN3x",
  "key6": "3U6kpJQmoojLC9CpK4kPST8Qho5gSpDRK3G7u5hVuSpz7b26EHoFoQuXg6u8zic1Hyd4DMy7UtfkL2k381YgbjtC",
  "key7": "P115CSjyLpxzbp81NGBeMJ8GiSkmgAvKXY2K5WvyQaVSYghJypnATZY7dzg52qpokupt4LS3Nd21Kgk7K9vj3Wr",
  "key8": "B5ypY5g3UDxTowG2FozNFcsrBTEyC14VwYpZEN6YwyxKMB52TG6CQK3PrTctUspNG1E1xpXA6JyzhBACiZvkn28",
  "key9": "5kVR4Ebs1ggYpBia22jmH2neAG6H1RoewmqZoXPdf2f8Ns7jLg11AwLyyFcUXf1ALRMh8aTBdZLqQzJDUFpv22fh",
  "key10": "4ZwY1QigXZMXT5SdsxUP4UpYLGcwuYnhGHKqfdzhoAp66MaAWuh2L7zD8ks7L13mU4LwGHd3qGQWzaSaqvhk5D5V",
  "key11": "5LtPyvUdaH4MUcLdA8jdKAWnynMy2ojtG45JpnU2R1yso6xn8P1YFKaVPyN8sWJ8T52mEec6KmMJ52CniDFhs374",
  "key12": "4Yb42EcCoVhhrwjekNJExsetKQTYbLYbTqiJsBhxYXXyfsmQAb61sm8S5aPy7NrxApgxK6zCP2ekDopHuZp3B58K",
  "key13": "2Ue1k8SsiXDf77FU68vKUsjsUCgi8iDAVhGt6RZ3zgdVCxWEkhxcrNBqJeabfRDs1SxcUFqWjdQ6AvVWSRMKHPcW",
  "key14": "5eSYQGPX6WCyzGHz5d1HBnVCwFUSZChzGAsNQm6R7TnBBpSWKhATqVyU92DBfji1MonX19Uif1Ci29rcXhP9x6Sb",
  "key15": "5Lj9PmowAYKMGz8Pt3ffUgKJwpYWyAL74UbdFT3WEBZ52yjkREVaJHDZqNwa5SVpUknTvKWLdqq3uxLkiVQy417N",
  "key16": "2BJRNHxZyiAsPvPdJUS2jU5rSTmk6919fZDqzFYwwLaqn99Ny8HzpZs1Cz9J4MN9HJKwsfbqJ1iN6HaW4cL5bFZp",
  "key17": "3cwXTeFNZTjXCHmEqU9p16qkvBzD3cHYamYtvY8ozUa6WJVn7HDR58Gy38uvbv387SUB7gBPenwDzywpfR8roCz5",
  "key18": "4ZgmAifQv1Bq7Bs3kh88SzmLVGFvmz7ueAmeWEUNkjXz9Jt1qUt9iyiYVWhRGpeGVp3VS3gstaQ5DM8vw6uozUXp",
  "key19": "3o6XMRdDwyieVJBim7GbbD4Ge4FS8hvi4WodviF9tY5wFHTvqiDu2CKtJHu4HbDqzmyEp8H9kwYi7Uro8TF3f3rE",
  "key20": "5Btsxq9qhWPpcTkNLqUgrR3L7NRzYkTgaMCbqoH3GR9tuxrJQ6dZrWysckhwTTEGKNpgNrPze9KiZsG54EhabkvZ",
  "key21": "5J7dXMffbiLsmehZK6U1PUNM6ps4jZnHDUuGf8Jh6JQ6A8thCHWHR4WS9jadaNynkRk45mYufZjPB3sRMmRsbiLJ",
  "key22": "2aFRJB5JMa8CoUGoUm1eFsDVebMythFg6sX4dWUShRJCAhhzvLyJS5YmxjfpFNbtDDHw2q7TKnVrJHYKJurCyD1X",
  "key23": "5N8oPZhrkmfkzyZynVbtTXeAnvp9F2vh5qZ2zfLGjYaJwR2o9u8i3oVuTPhohoTTyLKzQMyEHsHcPFKr9ZZ1PLW",
  "key24": "43HwPF2XZbZjPqXykXnRRuyho1ESswZo6L6tG6cxaK7eqR5oa6PjwHpaJcSMiZo54v7oPW1T883TqRHFznB9zgVk",
  "key25": "14QLXkBuVkmSAsfBzRMc3oB3UffoczHCby6uQ3JxFgzPasgPznog1jJXsiPN76v2A1cqdHkqsmgtDgyZHhuW15A",
  "key26": "3wW4HsdmYnzXceuZWExKoTZpQJ11fvBFktR5K2ua86deDZDhs6jktcmMYSbhp6fjEqMycjDaDQMbNXwSgZaHny96",
  "key27": "HKWrH3g4XaNDXPy8YfcCGhUptzfyAfRLq7wqH9N9mBJmy3W8DgzEMn9JVX8TZaG9VnQuvBQyfFHJjDiorC7FvwC",
  "key28": "3eVXmQ1AaUMpzRi6kPAMRzBRXVEj3kN7pMkQtan5FkX39Wz9aZhvJ993hGneogJwennCJvyZg6xf2d8FgrMHotXh",
  "key29": "3U8ntUyS31mSt28U8r1KzYNQzknxVGpJw36RjRGgCrDegut5e5t5BPobdzK7m3c3CrmT4995iBLYcyh48ezHmSbr",
  "key30": "4VCJ3kdJHr8RB932xBAgWuyXZctdr1g8gyABKzrJ6MMoBcfp1kbHxnNdLtcYSbAMPttpDWFwSc48QwejU8a3L6ZN",
  "key31": "3QFKWiEBvy9mzMvenxfXom7YUczxHGBsHenWnK7GFejTXCdi5wZ1pngZoqkVQibzkhq2A1Ssm5KTn8wmVVvHC41k",
  "key32": "4nkCK92i6KNh8Hbfu9mxoEX8VUyMyNJUtYPJbUFenvNy7gG9drrS1Y69wPwrGYerFmE1gjJQhknEyEp9S2H39GBV",
  "key33": "4N1EY1ApuFa1Zeu1J8T3jGDSTp6g4KMLBNnjv9XSYAQyY6x7yu9mdp9K8vp7pBFpvBLtYf3yp6AGZuw3Axre93yF",
  "key34": "C2pBDgN9Mr1rhN9rTJsdttVtmUVRZ3TGKE3TugT3PasCbtwgWWwekVwNduzq8HBoq9QipzR1dywLrdHdSXY1z5h",
  "key35": "3iVnXh3rFVk674agxWLWSQWTUT5NHn4sB6CG41SJGehCLacpqvstJo9ksxSDZgaUZn7cadge29fiwL3qtWv1uV5m",
  "key36": "2JjZYNiNGX8mHRhGkCBV9YfXtkgoHjRKdBikKiGVsZxDcnvJLgniYz52VJTHsbAjLLgchB5yvqSt5cdLjbLqR8Rj",
  "key37": "48QQhDRaTKmGXFYcTfmyTou7pUUuY55m5dYSJEfmUrkLMWLJcrkKu7GMJq9pUfe1hhp7ZNmwqyRV14qzDQchuXKP",
  "key38": "4kBvK8iRcL7zbVpvyH9LegYQaTyKxcTmntnnS4XyECa52eAVVtgqYwHs9iV7bGNSEXDZ8N1jjx6ZGS9mPLg2NfXH"
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
