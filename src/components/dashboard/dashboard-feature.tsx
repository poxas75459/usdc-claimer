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
    "Zq7y8DHmjTeT3VL9A39ZE1pQwHNhv5Cg5gRCXyDTyJzMx8m8SyzKk1cjW3nMbh5EjCKJCxhtWLr1YWeuKfiUp8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hd4keovejbNqoswLhYdJxSEtRg3zDoinowx5DZThy8ACHPJMKNHNXQqiVsssyewuCSmAyCy3HxBcJejoNg9ohXS",
  "key1": "HGncbvQzuPy6hnAS5uxQ7EgyLV4d3HTSBZp5CfwoHpnVsCkPCtW85QbX2gAbds6XFrk6N9pjQ2oqWGSZRFjd6Vv",
  "key2": "f98pr49ZycgeQKeggVtb3KeeZ865uGJVwFVMDx36zBRYKaYUtLSHYzxKuYJpMUHLNMCupqFz4bBE6GurGgRZSxV",
  "key3": "4da1eeCxAT4tacBsHBC5zgSS6xSNg4d1NutjrP2ish2NMV3oeLQhUX9nKfbVHmkNLusHiXYpsVg9NxqdiBdxTt8c",
  "key4": "2gGqywkMju8muuAcdf7WUeKCga6VajRAfahywpUXLCZoiiJ4YWzZ3XgMBn2EQWfQQRA7SxpxJ5y4aJCCP6dhh5ES",
  "key5": "2jd8oPsm3SBTD8zn3VvHP5GAZCrLoX8wboy5egcRQ7hguQ5wP1qfz9bcognuTyNum7Pm9y2MYCVWjqg6cmNbqJQb",
  "key6": "2swdAM4umrqFC5J3TKR7VRXS1bVSXNAstarZiQdyKrFhfZLfhSCLLKPVHtf61UpquwynazygAP5hrGqXsBA4VdTU",
  "key7": "5p4zU8WufxeEiUcXXCxQ4srU3jTEpv9qni5uJtFPa6AJmsPq1mcf4ngZhsyDpkfsWJHnS2X4FXjue3nNbusk8Qc1",
  "key8": "4eiQuV2LXL2RzFDJspLCgckgTnLbbiMJqRVNQViZ3oZeWF39hiigb2r7CifY39s7DdqK2XMJ5nzPRSPeMpmqS94y",
  "key9": "3c3fB9X5xCkiSbG5YhQV7PhMX6zkA5PtoA7PWzFkzCo4WNfWhYNN5Eg6FnsuSU1V5aZpbnRQNf1HBLN4pwYLkFju",
  "key10": "4gBPvkushJsiRuswpEdXNb6BdVHVs5bnW8sD6emzagr2z8DECz8Sg5Yz43YmEVEbhpzPJud8oTo8QmMbjFUPjF9Z",
  "key11": "boP2FG4GoPXqzQuA7tCZ6kjQpRrt87SYStBso4W7xePDXRVfa9Qaf9Mg1NQxozs7zyZh9Etme1Gb4vkN2a9adg5",
  "key12": "63YGsoySKqDVMWdxVC9Bjd8X214sf1R8kkoPghLiFmW9YR5BDJR3YbmxGWddNoiUBrsBSAnQdFE5hcvr46JvdCgw",
  "key13": "3Q9s9uCum5nbdz9iWyUdhxFQTGqkQeSUHoi4z6RFRGYEsrXVmLfHUhmRYPfFrJ4kHigxsZfhfVGFsNg1RhNfwX9L",
  "key14": "5VXSs25qQ3JmNM53aQDdMyma6DLZG8aGyuHBm4sQwJZ6SWNjruWKFvmtM97o6Hsddrs8u4dDxBxjaJABz45tYtWQ",
  "key15": "p7x1gdB2Kwsjnk8vhheEsktgZcfAKmaHNnFBomBm5Ur8wKDwStZMJXRjzXnXYJKo5RPmhQrhCpAejovND198WCi",
  "key16": "9oRAi6A8TX1xso3WVPGzpYD4qjPkTFBRYRdrEPAbdLb3WSjUUGbic8tmEZurX6382we5ZAdP65YAhtyxQu2yuxS",
  "key17": "LEd6bmiHj8z2verDPtxxLX81pA6GUxofXEbPZ1UPCXFWnLuhKXAvPWzvRKcLNdKbtTzKys7EKDsirnfzt2dtZMK",
  "key18": "5vUvuqLKKknVrS6ZKhhntPYcNYt1PrpMrHoE4kDFKCBhrtGNyQUZ7uHMD3zGRcEyhuD73PKDj6NcrfHRihNutu5H",
  "key19": "4LwprAySo6pcyckee7qFgSxk7vANoAEV1QdpsrqgMj99V6QjX1StLcXE1Aj1uqtts1aP3vZPM4p731572PSontrV",
  "key20": "3KtQynU88sWqVkZh53s5U3Z4bja4QH682aMpcuUN4SrVyeWJ6ejWZgn9cnQMhW6hKJ1UTLJPNxeiMjDPffzGHuWz",
  "key21": "4n1ghcQ7NBLdf23vfwhMmyHg2SUijDZnBA8CPpVEBzu6e1DfLwTGtxYS2jybzscZSpu7r6N4darRjkHBwHd3opW5",
  "key22": "5CdtU8pXDQWhQi4Qy3odkLUFLVUTh1mQ9gi1eSWEbHWcn9C8X5HV27HuTbv7hcvkSd8F6iKtpL9eYJWXEcLZZsQE",
  "key23": "2778s3SrKBxBajA6ru7ucvm5VbzfSuvLsJ4xn4qNyTDCxbQzLKsPpCzVHkeLVqPdGhVZRhJEB8rsa7zkTDEBXYv4",
  "key24": "5WBmsHHvksTM3Y3w1mNKumW1LZLDKD4CYxLppUKDkzAMY8RbsXDrheg13svbgkQPwRihXXxJMUikueQBkNCVYThh",
  "key25": "3HLLsdQDH3CsgXwTuUc8XuPdKTHdNqxBeLiFhF6iw2riPuoMjRVmezDxJsfHEBHcy7p2254AKgJqu886t26N9T7F",
  "key26": "4ihVPPaPueCxsFgJWd4XipdcVXehriMzPytH2Vzx5YD9v1sx3GY34co4d1c31Q6PgpYdBVumVbsjUsFXUnJCBLu4",
  "key27": "vRsCK5QtW85SzT1a3XEHnqBo6Hpw3b3UienmMHcy8FASUA3hiqS1eeqi7e7J5pQa1r3Q7N4RmWf3kqgsuzXbXM3",
  "key28": "NxkjpVKfesUc77jVm87ps1t6oL7rNbNrJTtDaitXu2E3cC6BHmfL56UY2cZqqdaricE4vcUv1JZRAk7pe6S6zVh",
  "key29": "4d7eVNjjGEaoBAzwP7Mc9WKN4ZKvmLhXxUmYXU29ZwgpBsNqtekjtgAJpSE7i6pSbZZ6wQxxjMdfajjuDw7GU192",
  "key30": "VJC7wyd5DZoZnhboXMKkPoQ5ba7z95xZ2H7nJer12JFKb2JJFidWDYn9nDppx6NWTnb3XQZUEMmgLxcPscBBonf",
  "key31": "3cAaZCUKGjsUtUsTj9Qjqr6eg1JAPXwGKEHo7PdWcQwpwukhzqnotPNAFmtFGtmRPM3RqZSzMs5aJhhhPKtm4tPA",
  "key32": "GxV2JMuj4hfsq8DyAp6YKpoVjgfNDDrLwTnDe6NWcNQbEEDSEyvTHyQp6Mrsw17PMhvh6mmg1XsNB32xBLx6fp5",
  "key33": "32W398trRxCUVZzQ3ciTC5zLoXTpRqKirDevjMq1jbPcR7KZKr8UUJkt7mt6F6UW82nLMmrGKykTYwy8bCCT8rdC",
  "key34": "43gduSmiTshYPC69C1w7uN2AC9FKZMSxKEktERvffiNLKmUSNzt7QXrbxdTvesffss3VZKH8t4rxjMk6gQHe7iXU",
  "key35": "49iS9LHWmpERQZqWv9vkWnGMsCbYZTMG3TDTJyCN3WAcjYanKq7jPaapofXLd7sBUu1S3hUWSVUZ6mcSvMmvW1pw",
  "key36": "4H4z2G4Zrx2VCSRy1xVvM3hnCM4kBwe81QohpSnfpcn4P2epkKwBCsvcCsjTrFuu4bnMtw3XaB9KhEQ9AgVHJRrv",
  "key37": "5rzsEZveqBbDcjxPk75v5nMNivPHYMmUPVhuGTi5JfSWeZYaKTypZJHCx1W5mdYKyHqVUXLiP3DSGRUq5QMqxk4D",
  "key38": "4sy4UWJURZQNLzgnWFzXAf9eJJ2mwfzXaa2tBshqGuMHPmYpuwqW2892ePzARxgvk8kwV3zdCb4N9popnGy8gWEX",
  "key39": "3YesSbRUDuf9zc2M7z57eQrYQYNSUV3oqNNLudJCrU1vyU97dWBi4ATTzgkUCvjxJ7P3Vab9utTcq2SdazsGb5zN",
  "key40": "3gwqR9XAN8GkyjpmHYqwFpo6LjHsBPfHafBGdQS6aCLuGXqFRgWZM8AtbW1ZnTxKFbmCzHjtVY8GRXacJjGVDU7F",
  "key41": "CDQLvZWn7coo5XS4Vcm85Jtk6maZqnRq8b6QwvMRFYzu168DQiojC88iyhFBX5bKY3E2hjpspCcnzZe9s7CzEVp",
  "key42": "cb2Tc4A9CeeDVoyoynberDJHvFXQtEMhHHxvxWeLYcWLkL1AVmvgY5RbVHxpBqAyf4sHvcURYjREcHVarLkyg6R",
  "key43": "2nDist9sNvGJ7Vf4wD9eRTTpyh9XMYMa7do5ZoiXGWSTEiz414m1s5pjE28CgRBN1FJXTVt3TK7QdJNJhXrhqBzt",
  "key44": "27mvmrqmvAZiYY52mdMYnFsBoKR2sUV1v9ftQi7xh8gnWxNsCJYem66LjzF8xLErkmhKbShuJURWpaecfKC7WzeF",
  "key45": "2Zqy21EsKVrcFAgWF9ZLkUhYnC8WeKWRpYTfcHHAULhWqQxSMbLprzWS6UDG5H5QSindYf3fsRQPqHSxLE88qnJh",
  "key46": "53pMpCW11bk8KvXNu97S98VNGDz4UKmGbUkxzRMHRnfU3ZsBV1FG86RZHGgmi5j4KHNgNGbmDVPwkkYu3RBvz8B1",
  "key47": "25TNpQf2T3JYnxyPHSRPKQzzCixMjB28nf4PsExFPFxcDcNwyHubPb4m5mXkM5kpHBpayKxCniQTm8XW8261iQpz",
  "key48": "2PBvAe8nf3jD22bUnAG1eirGKoSG72igp8Ht19C7FVpsmr2MvPBVUYPdNBsB8pjmJPc45SrJZdR28karfSqJYprR"
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
