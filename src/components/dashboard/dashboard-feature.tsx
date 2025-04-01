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
    "2RxQSYap378gjyQCsTARQ3nz3oNvVy8xMp7ATxPyLpaZs5btH8gXAU98kmSCuVwcGieiXTf81pFqy7qiP1k7idsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGaoNAJDzgyCBoWcXMRezd5GnaBtFMKBHzFzXbcSfd5NZYwhnKzdFVQgUgUrKXQamVY46exACTGDunrEvu8J3vp",
  "key1": "2XNB3icnydJBKwB2Af6F4GB7kDTJaLtmrighUkM1yVVvi279xPzcHptrY7ciGBURgmG3rzQRuzF6uxgdRzQxACuH",
  "key2": "3uX7xQGEMZko9GnmYPs3Vfg7DEcieHtWMb6ruFq4R8nVToYK4XcDS1utrLMm1o98UQksBkWoUEyxsXAj3TFtRNr",
  "key3": "5Z7EEyaFQDLoP9BmAf4J72cziMPMnCT51jM6M9JcWhnbFEs14kRcxoZ3qg4yNpcz9uU18cKaDstx3bZfWih22xZ4",
  "key4": "2K9DtXYUqXJE4um5AhCorUhd9vm6NwWSndzz3aNU3QSD35tG5J7PPXUV7squf6YKwbzW38husKhz1ZoVUiB9odwJ",
  "key5": "2mujDkfj46Yg9zFPMnQ3JBaJ5eiozzSwr9e7qdomehfEFMKBg1x42KdPERPTs4gBZRuRBPiN6Lc6CiNAfjt9TxEe",
  "key6": "4wFG6s5uQU1EVTJfaJFP7pN7xmLu83dSnp54ATgNruM5TzVD4LX5ed5AFnsiZvchLYnfEpp1Fc8bUBVBxTMj7dFh",
  "key7": "5rhMUzcZFT9R8HZtpWV1vJGBwb4iYM5FkF4ieG6rzPHQPMaUi6EYBa5h8U7ZW6FNd5SZAkRSZZUqYX4nirECi9Ta",
  "key8": "FgkewP9QhZX4WyiTZgx5yr6XFYJKckCagbKbRMKYSyfep6p5a8UMpWrw5EKq2ntqmw6rPLx1JJT4VcLpCeLTVbN",
  "key9": "FTHCn5ZPrPR7wXutT3dFSCT5eQZHDt8jPuE86Q7QahjuoprHcQnGk9N9jbL9TtF7xM69aC18Tt6GVk6nZZT5UAD",
  "key10": "3gqiUqokxH2hkrrAaCwDXTfHFqWwfKyPiyBUA3cLku1JHfi9axXFAoEnzDKxC9E1Pi4Bbi2nC6kfg1sVQ6oxdYN8",
  "key11": "43LQnu7Bk3Xf9BchwprKnnXhAhcsB6f3T7qPj9dhV5n1jXJDnos2T2pT3nUDkmYXrSaCSQ1zNbvRSuxfSnwDh2YD",
  "key12": "3zH6NbBmfy7sqEZBxUe2WEWcZoSUGXTExGfcs78GDXQJG2DrGAh37uXg99xookUynPpwcHCeikeBtcVd1oKcPUiA",
  "key13": "5d2eU1wK6UB9mFWZgJ1Tnmun4mNLKyJ51Gf9fiz6MbFKN7XaConBSqXJwd2JgJJfeYALxbezUDQmnY15SdzvRY1n",
  "key14": "4NDXvxihMh1g9eVnKEHuQsNvfi7kV9A36GZYq5S9HA1f4LAjpTPNKbhwdJV6WCAqRzNcXfp9nUpK9QrxJG6V6m2u",
  "key15": "mSyfdccWmWvftPET5cqjQpxg8jPddMPcfj1m7u5ER8WmZinZA1Ay8RKMLMCwZQqTFSZbcz6SA6rPzs4jS4ew6BS",
  "key16": "BpRZxGpop4zdaPSPMB1t6kmCnyhaRDd5xpumcWSRZ11tjAmmQfEBfewpHtU4X92P74rrg8tyxUXu7K1zojMDa6t",
  "key17": "64wyVhavNmbh28MqwPTdR32YmNqTnW61KXUhqrpM2Bu3k6nTMbEXwrDy8zGbECC2yZV7Q4ZfNXZvBtAUBtptoMPb",
  "key18": "67K82QWXq5tXBP7iSxoKdZubnKFPMosmF7pff2edGcYtWZtd8PBWYfP4pobHsUMXngXNj2Dcux1KncGXsQPbYrXS",
  "key19": "5NZUfukEYK8676w5KsHqLZkiqJsgrC6e8kz6T8jXHJqjkGDAUEzB6tNnkVMVGrgPBehnBzUuVnC4xCLfQVMTv43u",
  "key20": "2o4pv52CFi2MP35jJUCGYZhV2kb2eFNPprM6raDmn4HW2kq5jYWpxGsobtfKFFBTP6Y7b5XCCRcFC6zxHCxQAS2A",
  "key21": "2foW9qKpHoSbfhM7oM2inn5htZaekgwpSPp8NgZVUyn7ZSkSExm1F1JNzDj2x3SKEYdqFxLYRPzbcn1W3AjWjQGj",
  "key22": "X4oVFV1B2URySmaXEW6evTxoWjaGwQruu4eLTh76P3zvBeC3od2C3AJUgZkMUsLYUwEZbfBuN834C6mXB3a49Qd",
  "key23": "4JJg2uE2LdXQEqQNM1QxmuajsBmKkZt3XtfjHRFzGHoTQaYFv1ji3qPsuShxKCD9mQnoHLPNgiEgXJbCYtct7HmL",
  "key24": "64TZdxCoXH4cSUMavt3naUQGr8FbANQTCsBrsoBJStZmNPkcKNX9FhCibZTq1ncYefsHXGyCV1y6nvPdv3np4b5S",
  "key25": "4DoSiGdkeBQHELtEHq6MAmFohxYJ1eQZW527iyGaA5rQR75HhTvXXgUrQQ1DPePnFX8yKSheVPmDraqXheG5GUcS",
  "key26": "4v5uWAHA9Cy5YnQsoKtVDmHEtTKwFYUTjz3HX4nQKN454X5f3YGd1UEAgJovipDCYkMEbVu3AFyNgK5dFsW5L2Cx",
  "key27": "3TeLgBRVCdy3aSDQe7pxBzHRQLDZivz2SCjpN6or7uuunZFHqXFLtjr9UsUDDAgctfKJnR22ik5JFQuXb8nbzS3Z",
  "key28": "8VxdBVsJGLjjpLjjmKJ9FYSR5NLnhm5PYiw8rJd6JGTPkWN1AasVRUAzBrpD9Ai1KEqU3ihPUwpYTiak3mQXAk8",
  "key29": "5rLbUmCxarvWquJBhMMeieSWxotxTdvhG5GXaKhaK3e9APpAu1zDQdDdwkcnp6G73Rhnxb9mVmarW3T2URvtHLsi",
  "key30": "2PpRUyWXZFTA3fBmWvPd9ZQ7w55eprQvdzzPWMb5ysUFQQFxqfHcSnEc5hmmwCjpXrZMNzBgMYoQ9yigJxEQFy27",
  "key31": "4hqxVT3xyAuPkK18nWWXboPjW6mtERU3iGmFeRUGuKBYLhYw9FBP2ocLUDHFzmAAUJaJMWqRgYHYbK4cQsMG29UP",
  "key32": "9YdgugrDFRxR5WHNtxdRnuho1NB58nVNNMSyX7JJmpoHgY9EThzW2e9RQyYTy6g1G5a1YAKVyKa7wwYHSbEB3ua",
  "key33": "3Q27Yb3gSdKgT8B6KhiG1xre8GDN5yetT66pY4FjAWx3RJ4C4Jbb1JHtXXax8VBCbRW74Sw5cabUoQeZL5VHVcGL",
  "key34": "5GhMR4s6fY9b66LjZvUe7LzMQM5mzypwh99SRvNV18pzRXxLdyN7BuGYYYMppcgoy4REPB1yCpqsvsehQnDGUVLT",
  "key35": "Kvw7rZMr4hc4h4f3CHFbodH16e7teWwJZmEBFWHazoJhhDkMaiaQ5PM176hqsNY4ZGrRDYh1mga8CYC2PHVXArK",
  "key36": "4FFxa2AcCzgbGdKNhvzKBXLfnXCLKr7RjTdkrxmqMAqGgxCxWVQdgoBNFarZBDLLGwq3qE4qCSs8VG6BwJi8CoPU",
  "key37": "Q3BoHHuvfGeBwNgunC2o3YXGhzqHrnndvdZxebgj3Nw2R6wa1gisHUbYefTuD8SsYZG79N2nLMy4gBKvrC8yMtV",
  "key38": "3QS2phtZdyXS9DR6PNt18MrJKSJX9aCqUZBcfud4boFF8RGeRvvZRPnwDSCqskpvnCw7P6KfSekttfr6r9EkTo9i",
  "key39": "4QB9tzbpwgjWqBfoxBXR5NpByP4hrRt4iayevepZB7ETBMWPe48YYqKrNmF5DbMjUQ9VXu4nGFNMnBRVgFAVbdoF",
  "key40": "3uC98kF8jw6KYtaHTvXcsVQi4UDD954wG9jivmPDFteRrRRo3zjErmMVrqpYuXo4uVGmNiShaBgvvnGL8zB2pRmF",
  "key41": "4gtGYdCr7eFLvc1TwEZWSCt3K8b7VSdMZYAYXNXNyJbjgvzcDs2U34L3y5c5DqZ1QAbgK54jxmSMKb6cqk2q6ffh",
  "key42": "xVAjnfJVfXhkDJ2ietNLtjKFTFwRxEUszLa7rWqioW2qu2xAm1VCJ6kJzXP6mqHfvTGGv9ceE4RY47ahEEzDF6T",
  "key43": "3iG5hCaUk4QdPHtTvqNwyRjHkgTEjcY7VZm6NBrKPzSmjVPAX9ussZuT1DNmrsBwsTWeX4qsMNGFqJcBd2zchMa5",
  "key44": "5Bw7TsVoBcEF4m9NrSoYX1DFUCgvpVF4k9pHBFFXneGGLDMCqpGabZmk4mu4opMKVbLCuTEXueURJC4sZ3meaBSs",
  "key45": "3LM6NAxMhvdCaWKBFEbHgzEBQjkxC2hF5ThhNAj1DAnMWWb2dCw6Mvas4k38u4bLxei6D2einum798ceNYCRu4jm",
  "key46": "5bskTUMC73PK3W1H5Pi8xFzCxim4cmSeYyTupVKyGWGLVYVtBjf9nQJsxuHz81fxcSxR8vqtqqNMPWAQv4t8KteF",
  "key47": "bcP9tW7ufM5qcK5nTcKDKtha53KiAQWLPLSfZULjEwyxf3GSAmahXjPMeDw9zB45Z4CTAPxAHUS8aG4goBVgiZZ",
  "key48": "3oXHeqkuiwGw4r8YbJZ2x7NhJHkTi6jppWL13txJZoFi8vRYuka61nXwVxeY8Fe5pjZSEx4WEMiTeAYoypyN9nbF",
  "key49": "2Kzr1oub548Ar66EgSu4HbewvuZb6FoMW8avGuC1fKxCdmY2igoPQbBj1xn2V5fTKeYwpnH9qWVgrqF2b8ggyUEo"
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
