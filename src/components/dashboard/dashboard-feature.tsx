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
    "5NwnnCFUfQuGzCrGeF7bwUCwNPzYdX1UCJha2qPdvTc9sqwGLhkznpf79k9dwWnXQvfDjA6rN6e4bhaWFS5EMsXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JryJJWeo6TipEpp6TXwR5iEtgW9UEnmCp368AG7A8ypxVYyVd7DJT86z79HWguLAi7rKtj4m4e7wNXaVuj56Gw9",
  "key1": "2oTxHEZ1noaqQVNWdaDUi7e7bpJ63ARnwYFc6KU6cChnQjfYd6tkWStD6obvVP1KquNsvwQJhdsXysgFMzJ4Wxz7",
  "key2": "59venEoEudyxi8gfoTrDycBm7aRVSmcM4idBDN9jU2ZVx26Jsx9UGemxHWCCSytCdKn5AJrCcpmLzd9bC4rUo5my",
  "key3": "9x3e7vkcnMxzaT5wMJgN9AqhJ3jLjEGrNPDhmHjsLraad41cuKSa28qt5XDgCF5s9sqhFQ7P5DcpD5p1TvS7aGj",
  "key4": "3rboqAcGJZ1QtekM2U9cTr6H4VCSuEVTMLSAUwZYTHQmSGzQGkHM8DgciSrujrQAZBE9G6ay8Kz5ENnf6goUShSP",
  "key5": "3vVzqabeHN8Kq8mKNxfbpL1UyQ3YTRffTZvUfQtZ7naJuQnfQ5NHVrV65LPGqnbaM5yMwX5H4GGrtpyjT9oTr8uL",
  "key6": "33YborER1ZKvZx5N2j685uFEPr9VdcbyVNpoz9BA2MPE3c7oL6U1kZitnUXXTm1M9ycsWLuCYRFin9ohxTiMNqej",
  "key7": "5Roybf1jFkP1pSUQKDkEhDbNCjNE6UQ5ckdYQ9CKcHBY8HVZFhypsvcs2Xn8UsWBfMjCPMr3H2kUbJihVLSBwhnn",
  "key8": "2LfnYExTHK6TM69mUJieP8No5RHRUH5pQDBZFgq8x67KDeEidHC4Agyp4wPG7wm5H5oAdJ4AU8YcrBCne8AzMbQb",
  "key9": "8iNyvoyDJdjUQpnjdFTz2g2zdCjMp9ERsCiyuRwTrABT4KgTSrU8kxQMRZQXPjjm94MBedT2yXcsac9tU6tHrBR",
  "key10": "2oAqXMxjnYgEY2bfBycdG1who3keCgPQbxPGZKbP14jX6PwM2E8sL7iWi3L5YWzNUgkSX45d4wGPV7Mdxbpe1Zen",
  "key11": "ULpCkC1rKiuddQrQtG2pVzy1BFZsCQRhKEjDBcbcyxHsTFy44pDxqJ9TNHTfstpjT4AUo1eBDgWWfBeA3sxBQsZ",
  "key12": "4zrfbujScun6tBP38Bs9hMdpJMSU9rxmsQSmD5aCKQWFqsm4MwfE6cX4KzXUgBEufn8gxg8VFbejtXhAy67uoveF",
  "key13": "3LbtbZeXFFoii26P32BPfwoY8qdNMhxd7q8v8PEiy5Mag1L56mLGdW3VmEs2WeAaQt6Y6WjmeH7E3AHFFvJDDaME",
  "key14": "3StzAtyZuLK5PW7JsUu2EpAMgbPdmpyeZaVrvTrymwAMciK5d3yvurpWsxByAzC2YJFenmg6VXThpUg8rSFhTPuC",
  "key15": "beUNQnEqd9xeDoErR9UUD8yisNDvo3CYBL6SBsP4CdEBRwqHaGW6NNRxyDk4nrkaHNn7wt8MFa4pPDunxhxZC9H",
  "key16": "3fTJHTVCuBGQJqMp7VND5nguTZbBXmibjAT7SFj5e13L3cqUJM7DCFbThdXu9dzym6ru2n5jgh6r8RPSSVrVxZMF",
  "key17": "2FG5NS8nRyzJuHqGRVjGYgnqQP6q5ZaRX89WftrWHeJdcBLRNc81PkmurVE6Tmh4C7t5MxB99Q3pFbVtkFNR8C8k",
  "key18": "62sQNhC1XBUip4ePv2ETrpsv84N51FeQCdVBcriyadjgYiEZokVvZ48U8nPc6btfJmifLCQk8ZMytSfPML94jbfi",
  "key19": "21fQgw9XnN6aYFMRQ2i63EFAKEguSkgskmLhNYaPNqubMvXuMopTNzdSvgnuaNr9SWRAUj8QpJGJqLj7jE9rsLQy",
  "key20": "9nPUH8Lj7B93cUL7m2CT4iEMmxJSobWAuQJpkkprRCm8BJMDg3Vboikubo6sTr37ZVxKgTrfQ3HF2zd9Kf75TtY",
  "key21": "3Ah99oSLZSoYHTYRwN3btcymZaNYzZWwtvvyX3LqzGMa4L3J2BkwWnj7XBcqZXwDwMMJFeqfzhtEmoNmNtqpUkN2",
  "key22": "2iQ7BFp46xkixmbpdYPVZBBoKtgsmTXmZih1N72x4kPXwZoMbtpk9jCuUCc7C5HcCDutWjFT8chwqi1vb77UJnGM",
  "key23": "2X1FFrwHTPpy5KZm6vm6ETjDsJsaasGh47kVNGYiRCqVGLBSpRQ9Ukq7HwyHuafJHBApREsmFY2nxRAkA5mkUU74",
  "key24": "2mZgexhBTNMX8vRYvdvUHRaJLQ4hnuWuc26hq7fmWxMnLTJXHeHe3ZnuxFGXsqaH953Jdg36Ae7NmoBWXbuQmKJK",
  "key25": "QqTwgQxxzy9eFS3B4czh1WZQvbjFPvJQ8MLzTmdpnnEVPUgRzBgoF9YAZmG4mfCWasEQhS8LK9MV2ue4X74HZAr",
  "key26": "3gp4s4ykgvLMnBqKDpc6jEKSZrLDYcKjHrpjTsDghsBjNsvf2Ze483rDQurU7mj34qVkWiCDvQQkJmKb9f6HuDcG",
  "key27": "2R15s6Twx2AZzRhwYiDQ6ZAcdjR87B597Jy6ht4RLyBcSkMty7zPUfqLbsMxyrEsGfrEDhAKESTTNkGwfH3g9dQa",
  "key28": "noiw5bQTJYPfdK4sVXDUCLncgHtzwTmU9vDrXExhcY1oGKBYCGzwWCUAzfDzqg9aoNMJgnFj8JyxszNhepgajKp",
  "key29": "3PQdL59wBFZ2Q5q1QtaYiutTmzFuyVJzUieuQZkQ4JNSTCuGLGHJ3fUPh5bBWHxyEz3XCnMi7BsERouFg5mzCU4F",
  "key30": "52F3P5dnKJHQcq4Vd6UHv98gwh1iHA3JD2Bkc61EgKLQzCd1KFi87oYNy4AHQEXVV13gqms7GJezoM1s6o7PUzHj",
  "key31": "2u5PcSq12UUfw2FHCLZqjV72yNXYvfpdjR3fvxQghHHXYBywxT2eYWoZWaxiHwnwQmcBbpdrNrrnYRKqhoZRYySp",
  "key32": "5UxDFcDczLj1tNJaK5soNAfZyWNChYQ5LPZLtYZRgHdqfxCiCSL38dbBcBEHVqv9QG1c2VAUKa5ir8J7VFyn3RLe",
  "key33": "61YsnNcvHp7ogvNqFWMHgx1WeAnVVgw6ob2ffiRCVmJW3A8gb6et9FQH65zDzs45TnNbbMujB71Fi8EXPfBMGrq7",
  "key34": "K5dXSdBGc4gZghWro4DovNugnn2ySpr6tKH1MYoauKGPW8tLEKscJ5PpWfUAX3L7R5JUL8FDX4ofs2pxf5ouwsY",
  "key35": "3oENkMKBg98pooBDzEkec6ERKTTitrwpvCEJ37Ho1bSzAkzHphQ8adTBZKynkdXeaZKCiB5yj3WMHBZmhgAnB3MY",
  "key36": "9MvEdNnVoQq28S8oyVbsNjaYZH2SvvReCC4FfNZmTiDjVSzCz7VPyMX68q2MokdE6ihPcN1EiRi7tfcUM1GwEtv",
  "key37": "2rmwbzCBSP5V6aCo1ozuKsNNJGqvtW2ViiXnb7gnRQCZD8DzZFRKuz9S5AaXxskniWjGGSEHess1KQxMNQx3ZZs2",
  "key38": "5sj77NarqSnS9wHvEt29rBcawG1beRhCEna4mLT3YU3F1FEPFqL5Yqnes8twYtjXN64u2dQ7DVqZWuUKSBWS9kAs",
  "key39": "4arP7aUW7G3A7krryjD2rjxVoDQeLeRdhjKvbD9VawnyxdoYWeQqcEGuMaR8euYRWHGbW2iujEuRHagHueWSayZd",
  "key40": "4x1J4mjRmJxGgAFwZChYeWJGsiZxkkV9MX3MubuAuauU2FppQoHfFNVWFAbjTMzFwHG1LegJQEy1KhbkRS2KyCcr",
  "key41": "5YwT5jhaxZF736Wv5yZZgJLVhFPPyudKaA7BwV2x68Df3Kirao5Ge14bMZBJx8CpMAgWY2v358W1VhFC7wtEsdBp",
  "key42": "5WXw7EfvTmG9UdDPp1USUgedoKFBhJqPq18CVzveCkgidZLq7MAzvtrYoh45umzrnRzQcfr8JnevC8ck7k3n5ZLj",
  "key43": "4c2B8JADNQwvXi93FnqPVJJ2TubcDcpSnRUY55KS6CXjtg2CYS5VfiANHAvMvQwFoTYe4eRt1wCdyNJTkZsYRLUk",
  "key44": "2U7E4x9rZiLv4uf3W52bA3TWZKsA1th2dxKFpU1cTQn47nxNPfDWdFF8saiPjyCTjQtKT8ChchWZdAFVLGBTd148",
  "key45": "4QemNA4Erjat3T8ciAsmhEogStbKebunqvd7gFhPRE9XHLZF7h6spzmmeKqcs8Xu7HNecAeqN1bTSGDCJLSVtZy2",
  "key46": "3AQuVh6Yz1zVTjjMgtSVdXDYKsuphGvxCGKrx2oeLYJ3K93Fxfna3oXENw77mhk14oV9jZ652Se2XaoaWHsrNjHV",
  "key47": "4f7F2H2TkhM5STXbKyMU7dZ1cbzXg7pQVYnbJxJCm3Jz5jwDsWPLAcANszU4wuVXNApZNrkQnubNTdhniKrJtLUv"
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
