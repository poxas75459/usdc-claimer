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
    "2bxBSDskfwqHVorg4T5jJVWSiuijK2oYUAxeFuAdTKFdUogToqQYC2Nd92Ry1atMPcoFmzZVSNSTDxS4S5ky3FWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVVcLaCT3Sa1yo4jfwk68Yx4GtRATMiuEmM1jtTDhgrsu7U1Fw35FEbtQFFELNU2E23otMzSmZBfP4vyMdZwCvY",
  "key1": "8rewK3YUzJYzgvWvd2njM4BAxXpQ36yqWMCeLyvTufELea2RcSSv3N1F3MKMYJSbQXi4xPP24J361itzgkHXCdR",
  "key2": "fSFK62DPE77ccjeVjidxcSELrmkguBmeezjcArwDwopLzRWKwcAJe1myNDdMpDUHpVnb2rcaBvkpa9nZarEkBQ2",
  "key3": "3ZsLm6DQHYBvBowJhVkUNhgTxLgWUoKFuQz3RK9buF61TmaeXAcsG2ftLR27ov93iwrznL4hmJxeFETrNNAqheha",
  "key4": "4hKeAa9dGzbUpUq8ReiBgoUFNoQVq5MCHLCBv6C92bDoZcxZ8qwvJL2sV9Ld2nwNBzbXhvMKHBRs65sREuMbA6tN",
  "key5": "4AbwGkzaUkjYmRTn45asaXtu1nuZX6MvwzKkJaYCZ4hvnYgR5JsASLyFLBJm5hvMhnQSFzb79shT9CpVgLhWAFKd",
  "key6": "cyrVmW7Q8HUJcu21CsqisUva78tRXS4HKkrLdgmfPEBAr7VCjadVKFNzestJn5r79QqhDBzaco3CfzRjY1XzmCD",
  "key7": "3xbEnihWpHCQwuYbnELVXSvFa4xSLdMBYGRWPTDS6tF6Y4hHvBeaxXmBSZeUevmYJCFz8m7t96PNWmWdssUXyhty",
  "key8": "3G4DrcrSiNhPMwwzTvKc1tNEwcojovoMxAfFBBmyoQ25EfmqyEvrgWSSJrmCnPwLbvVVocH6KoPZoHLdmL16dhXR",
  "key9": "5K7j1AdhjVBZuTxPQMHj1jn7K9NWJu7eEKTbRMMcD7pWXu27Y49bBhFgMVDaS1UyHkC9teqb3TNG7ByL6FLvqSK",
  "key10": "G3wWDEuoEM2REGUnMsg28ZRxmJexzKXsDLKJ62oo4zoafrN1daek3ciy2An5PvTB8tYMUWroTppew6ZJbD1Q4CW",
  "key11": "61txUUanYeCHwyWnXqcT7uowSSu8QEFeupV9tY8JA6TeFGt2GizqmeaEBSpXrJqEWUi4BSkFgGsH27ymWTyTzjwJ",
  "key12": "3bWDxWXagQfZ8S6DeCHyyBim5qcu31T4z3UFJJUntuhSfSv5Bvq4cmx61WeTn8mQPYNnXE1pdCGpnSDBic6UW7oW",
  "key13": "2Z1RdXZknuZAkdWE658aozACe2e2rQygvgUUWa466rnuMTpyBdEykYFGkyCScPjYVohSkW1Hfeu1AmWTqCYDGRUz",
  "key14": "2vyByxVPGdfRSgC2Um82USiAd9cXozrjqwrKk5fTE1TovyqxCR9wsZWaXHUhYGRGKrPe6h3NdgwYaDjGCzYXKbMs",
  "key15": "3jtdAvhH9ZBy1W9JvMdvBaSvTtRyBTtaTKTfz89EYvuFoPHmUWKSQnMTQodB9wLfZutPkome3PNipq8iA8kNtB5h",
  "key16": "f2oRxLdmrRoExQ2wwheshKfBgMTfGa6Phcrcp7CaamJegyEanp1Ve8Hw9CDuhGUSKqzTDEvAnnXgBcgT2uQB4Rj",
  "key17": "2nruGRcekSAxy7EjPMFwJYL1JeUdg6YiaMbxgNtT7MLyv581GYUrcshXsb3UMNUP9zm2FGKWNw7sHmFBHGzh2fTv",
  "key18": "5yn6KDz2w4CM96SxkyUoM8tpjjChZNTGBC65p96QwYBW5ZJ7qTHCuEuU9iAF1cGVG61CXVHDrzXbyLTi8EKtQdZx",
  "key19": "5G11ciJ5BWpAbpQaLtnLjhMMJ5scNwHvUJRpGLaK8pALHwHeAQth8STz82SLgwCdU4PFNCwpmhYHG3vVhnjZRBWm",
  "key20": "5GeBcK3MWLTiyooNstvL8RJecae4anCE3UbzRhV6RmY4vkUNeDd8PCxyaFfd2SsRiB8yNkXmJXyD7wfBwBqnZ7Vi",
  "key21": "5WzNqBvUDKDvVg5FeHs5YRcMEy55432qweNuPqBEGULBY9oRtv8Ph6mMhog4aPrjKrB1GERxoG3ykEtuhT4NTcfy",
  "key22": "eLKCK3T6jwnBUFERVMC1ZNAECCdJJa1GZ1WJHUEJUwg8XcTu3MKSoeeaCA5TcZQNrj89WSVpv7sR3TKWJnhdkkh",
  "key23": "5JNpTP9oCyHo9wDgn1ZFcGiXGcQvnQsQMA6bQPscVf8unxJZU8sLZn7ZLSZkcpJmjQMyf8NmREyHcmNN913KMJu7",
  "key24": "4PPRw6VDyYA9mUqauzcFb7xPD91S4QGtDDhrRsQQ3FvL9ca7sHSLCEy7PPb83Yr7sPcLd3ApP1WyGDQhe2qQbrDg",
  "key25": "3S2GSxNp6GzyyNCiUi6aMBGoDoZqW7Qgkxg77Q9iGjwiaKdgTXkRABk7dBUTMqGoFy4mgVDwTx2VorTE5TTntA8K",
  "key26": "29VNr7UNpCp5nqGeBfDWaPYP9REMJ9L2z99chDhmF3FE7RXh1ptkgfj6QBSCkEuTWP1f9qXnuXKikNrwWZWtgm2k",
  "key27": "66uSFTsdDXesTMrwrozVyydPGVisY7FwqNAvS65bMzbWmR2U7ySfDR3gQAUgfPvBejvgPQfUPRvA687ViWxHWpRW",
  "key28": "3jkvAS97hru4AwaHNRpy8KtXLK2BdfsMsyyNMAr8Nynd4nSZLTp1fi3hQ4US14sununuQVHcX8Vg9gkNLZR317M5",
  "key29": "3RaWq8rbuUPiuwjD2kW1ZdxEYCj672CHHYGw4JKT7oYnHGddAJkY8vaL5dX3k5LuYRnrLW43uE3fcY4tnS6uFJVV",
  "key30": "3d16SZc3zaBSVetrTaKikvbfxiAJnrnGtJYAyPC1kttisG2zsWjmzECkSfdnV3HSvaywXiwwxkNcBtQH1f4EAMaW",
  "key31": "3j9sxGtQ1mYPjQqm6QjpsZPSFY6SHBiY97YbwrQLSJWh1pGtaC56VMsh88v1v5hQFp9cjrV5SFme8KRvwCxjRz5H",
  "key32": "5UyfRHKaQM6hQs4Z6keq4fmvGMzaUBGwaQQndMkKrpJmpLU7MaDztFLi6692Non6pVjNKqenc58zE6R7FXPQMQMz",
  "key33": "QxGFZpYu6zNDpZxSe4o2FRyW3Nm7BZoBXcWpw1353PjvM7H45JkEkYTnJEXLocNgimG5DB8DQ98AUJ1z4k6s4F4",
  "key34": "2MHUVJdPWX8Przd4cfvcqkbYDquAtbcZLPjYmfARwn2egJjD4BqbMEeSBTYcX23gbJ71LBF3FGMUVSYqfkpupxYC",
  "key35": "4Rbr8BrN7FxEyP7B8KyHvtSV9WW1G12LGpiYDfFwuueePQq9wm1sEGh1yJKFKfAGSeHjEincayDEx8nXHdRshv4s",
  "key36": "4hejmtkoXsZSJRT9ozxwT5dULUEjbtay2MkZenb771NJm8A6Neia3RLNbnkuZwLNU2FQynkssAUV4wJA2WoU9W6q",
  "key37": "5rS2Sx2KSXS6SMp7aJAhCDaTHqJKZr6KKTd1BYXZz1EYgYCWz3NuTPh9DToTWqhkkE8ukn8qjBuEiXizkTzXU8iT",
  "key38": "42P8EJya9xuBEvxyCf1pNtTwx3CfrqjKjwxcKbQKK1agQ2D6fdpyD8s3JU1a5aWiEv7SWUWisvKP3WXhEJKXT2Nz",
  "key39": "5vhjCMY3AX5MLgTKi4mCNmviuLqagYvDA4Tc5xkgYuLkpxRYPyraTbAKrJXpe6hLdXZRhpiaiDX4wWKL2soHxtWB",
  "key40": "5w9UnknMXqS5zq1eyywmk514QAKz72jTa1KAgpCDwT8ysXTHVGEZTMkx7XtwtApstNT3h5i1ERT65fwQWcNd79Wz",
  "key41": "2RmrrE6anG8xGJUHie33MeXL6MJ7at2twLDAgUPk2gUaGuZBAH6nsafc9apFvD4CWHmgh22FMezAV675tj4kKcRv",
  "key42": "3Go1AesPu9UtFezJwerRDQiK9AoQG4iHfRvv3bKCb4gJ6LDFN3qPZVStcTfjHyQG6wGuE3cRregQ9wqnMjM2Zb7P",
  "key43": "53rNLrjf2T7MudzT7Gy6iqPjReKiR8Ddyqzx1KEioQhx1sCjw4oQJhudCFHJbzsazfMPTYXHUgr2FVw6HJpNYSMv",
  "key44": "4ke3MHNKwj5FhmUjEjU6LUQm7XmenFBBEhEjzofdWES4NP8p9VKZLREL12Umggge7oHe8a4Wj8G5mmcyowKUSDxS",
  "key45": "dEkQcj5nZsM8yTFTAUxCQK5x6xohCimKqXYjLQ71Gu3cjE7nFExECPdpDv5AZYkaMMDArdKa8kB5t2TZUDndR45",
  "key46": "5ZcjYouL2DFzZvn81E3NpKN7eGryV2EetgfWJYgEFtheCxayjemmHLeX8xyay6TaQTtuxAri7yN2vMtjKhZyov3C",
  "key47": "4QHRsgFNFjeBrTziXYeBxu18ai1w1eScjwab37J9nXESpiXcQY8Ek8pejvsanAwHNC2knjw5NWHZropMSXT7oVks",
  "key48": "2Q1Ew9DyMxG6mukhF1VREcVH13HYMGvPgggWKj2q7UEWnAdzoQ52bcfWRYvcVxn6zu9UzNLAzASf61xmxqvbF2iM"
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
