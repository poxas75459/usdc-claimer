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
    "T9iXeyEYkv3g5m3WMzgUxfLVNFSc3CzuNeNP5btdxJxha1wvPi4hd6d7VXW21LpGWfE7zGPoKx2SpCSro73S8Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdseK67Qnu6n3YMfa3wBH4xAPux5e9JVAMtAzQL6qgMwewv2P7cVFGMsuaFxR4VDncG3sXkeNZ36kZ6S5KEgQfn",
  "key1": "3vkmeomznzntV5RZBZDejg1WPZ6ZvQsRCJAr5T7kE9fBn3j3NTQEaGU8zXS2z6arnAa42gsZuYcnMvgjP7ihC5Ur",
  "key2": "5GAWs87hrkz3x5ZnCJy3Zw9CDosn2DZ3Hhtk2rWMgXmB5zUfbhbE4Yh45HbX3imGqkEzLencuuZux6uMnNtNQCrt",
  "key3": "44gw5zkoWBJ4TfNkKLUm7sp5q2CBcrSSp9FD8F7K76mHUS7XbcKgqrWPGwW8V8oKYV8F45dAfMLzRYm4U3BLhYEs",
  "key4": "3dL7oVmnQWmo2he1YHMhWP4JCSUBDxDg6k5SiULEfbwi3Q4vzZjC5ovsbrTJZtxu5A2j8JMAAm1CmJAdNAPXF4we",
  "key5": "2GPtnCQY4EwioLw4Q2tCwS93gv8qvvZJB7WhVDH636dBaUvXE3Uh2AEVPKZQ4Jhh2zghVo5xwrc2MSc1QtRngXRi",
  "key6": "5zAx6yQ6b1zmJaZoiHo2SVf8dfG1CFoSKU4afnCa7yeHbRSKXNEds6f5FjBGQsQJxDZX94Shda81FFotR3mxjgL5",
  "key7": "2XPAuW3Vstk7PaDtu5gsJBnHHSLvUQs9e1W96UX5doyvZwpcLEH87t8DMHrNuzyTvYRcVSzFXSrpw7Ayddr8N6bA",
  "key8": "3mFf89fYvWXdxYcbqyk79es7eahZhXYx56qbHQXg81zsXPgjUgLPKZsHNwkZzHBGkmc6Q6mHGbxH3QJFDV7oFRSa",
  "key9": "bUXm66HEhZApaYYYM1Ec36XzGwRr6x6EaypbP8mKkWK2JiuF813E7Asf84Z2PkhaiQ3QgnLtgm3e4jZLTMmaMfi",
  "key10": "4PDWLhKGCMHT62pzW2jHV1bZz2pL41ZnUiiC6t88ro6Wz4Qpc4hXQVginPY8kPyLVyLtdveWSjAbJAP7FeNjRDwa",
  "key11": "2ApW1cayps2HLwsx3A6ax1bqArkgnZj4raCARmmrGfZQC7QKGAj22z9wuSe672FvpF1phpkvp4m8AR43SyqtB1oW",
  "key12": "8QHD7c99VxA9acev8BaR582FudM1oeKkS24e12T8Jcq4sVa1XtHgviNWKm6aViGrRe1zLRTYQDJJgGqvApwhtHk",
  "key13": "2CMZ7sHhc2RrRy5ccf1zqWkqKzAMwypkUs6MyXxUo5uHD1w2QiL7yaQF7JhLjGceQfT2Y1xU3xdTBh8ewPbiMWV5",
  "key14": "34AhqQFZ7rcmnF1RZnvgrKk1DbwNaTmv7zzZRyi8jT1kej1gew3hjCHsu1dPAoTCSMTbhbUKm3NPYJo9GG6Msp6r",
  "key15": "r15yTwK9AuGE1zmsmGKWnigrbVk7WV6dqJYNKNgXSc2rBg6qsC8e2N1TxAAqaLPjFakxApRhFxcLASfu2taTC2s",
  "key16": "2XrEvYcURLGhMdrujESxc2Vxy7KaS4z6HhFEiPNJJuZfmaCE5hpqM9X8jdRWQtGT8daYpescXEV46FD7fZX8EHzF",
  "key17": "5bKgR2EpCxXU1fUgYCjLuX81GAWkxyrb2pqnGVSjxY1LvtnnkHJDNXzMGxnC47Jyp1iTpT41T7s9GLD2hHGRzPit",
  "key18": "5EZiRgjTdr1DmDNbAH6hFczB4X4Z7TmGSEPvkHpNevPVMfk3owPX9mLn6amVEMionYDkHdfgbQTg5eHjbUe4Rhjs",
  "key19": "5EssmdgoAtvUbcVmgBhpeQr7EVjtn3rzPTuxrHQ7stXBHw48quHducfymxWNR2U5bVkKatgvGHxQx1ywhiiXfcpw",
  "key20": "3iqBt2eNkMrZrAjgRb51MZjTs5qEQt6zeALwE8p3sTH2ACUQwpsxr6iz7gK3ypcBjcWHcBKCztcvybQUZh46zvY7",
  "key21": "5ZCP2wsKqBhGnmPzBfogdPCqpc9FAfbkiHk3qeNFwgjiGRVGSr5udJyz3boqNf1esURv6WpYvFoUymPhYuHJbDnj",
  "key22": "5sSbCUxy8vN1MBgsg3aV4xF2iGKgTcrHim8UjRC7jfX7AGg5JKa7zBr9fWivdYCnVNd3gZTjVzBX3m78nTxvupch",
  "key23": "3ruNPad4LVBxb6EkqQC24sZ2cbUz6VxCo8NS2VDo3cAywJUc9nNZX2wZQY7u7iNgcbBMyNdxcLBKbCkywTdtyJy6",
  "key24": "2yzfBkCa7CY62sGMLdhMKRcD4WTX7GtABC8vZ7vqAxyvhoKrAm8gZdQAHqJVSaCUfLrtuJui7NUhHZTyvDL9LdKN",
  "key25": "5C9wFnkZT7vDfU1C1yJkegq7KgtgL4MNwB8gx87MZbU4zvRRS3JjwUabo8HGt6j4uzzLJr7zGCmfwxrXApDZe83x",
  "key26": "L6rtg7zVYyhFVYtsVUDM1gng8KLagMmRUZnUaZsxNgepBS3h99nxjayTKCsHnSFJmHtQG8D74VW7QEySFCLdfuT",
  "key27": "2LRB1jiXLDCNkUnCjuU9Y5i8hzjTVYnk2R3NeskNkHxTCua6gi9T7NqqQQQ1N4shK97tBu4BeDLbtYZ7k2U7Bzrq",
  "key28": "5HrpJzwnepQi7BZppBb75oo4kvkQ2mTYYxNvL2x56GBYSMp4eMcbE3GtjPpWe9KQDZFvQtHy88CsxL2SXkiZWoZP",
  "key29": "3AF5T6pfFzs3fbnXgEV7v68T1bY3tSopmvrhGehETnVQQMZnCouynFEwCS8EfPfGWkg289ijarFL83LL3fhxV1zh",
  "key30": "b5w5ouHVeJBtN9KCStE5LrWtB2FaXetP4ZqumZCYQ3sA2bENaVrJ6ZwN4qrkyLxMZwuhAht24ncLpXibrgjEyy3",
  "key31": "qt9mwXcaSMcjgnbwFznVxd3xJZaBoWxWzyETrTUAnkegsjLkH5QW4DoggbiUvJbcV4jm5cpuaf4oG1iHyTzKxZV",
  "key32": "4uxstcty4mmrq7EpbJ1iLsRp2SfdykCFCe9A8U1jpQAMsFiaDFAmpwxewWYUEusxje1hJ7EYUZpv4NNXSUhNjRZZ",
  "key33": "4jWgqCnKoS5MLcoyZkJCnqVycvgNp85vZqCeVbvPTGE8Uwxy4rLjSe7NbkKkf7pn2FwSQVmyRNiaiQEmpgSBs5Xj",
  "key34": "5nn98ik3fGaZJMEZSdgwmQWJBcLJACLGi57rPxAZQoVQE9Ty77APpf2hzCLegDPvF4PBtVTSBhRmfFZ9EjicpSP",
  "key35": "sSkdPqLRdMPc3Fct7ViJzWScmWPPs1joPtfFcxhxdVErT8T118hYcYnLzXn3TDnJo4MLhQLa3mP3CMAeBPWXfco",
  "key36": "3wEv2w5Y4oh58KMMLJ948WQ1LizC2qZYL9ZLUHCq82hRVRT1sqtjM7iCpPLDR9Ct4Rxt5J5zGqtMfkiGSpDzeyau",
  "key37": "5LyWeMaXiHG1wzxYj2Y861r5ELgyvFE6VGTmW8ebvPY2ucyf9pNRfAiJgaYNUcZi4DKRqTeMxbvfG51mUGZHdP1S",
  "key38": "23SRsuN9su4Rm6Xtr2nYvbkJDQPudUjc8TNCrEusUUqev7bDJcGoSVrq5mhSGb91q5p1SE6QTirCAQGKbfHTKjtX",
  "key39": "4uvreFcRHT97wKK3u2Pcb3KYnzQVJ2cUHsaLwwdfUcyJ4ak2rqH4bZPxBM6jq3rKHcWbeBH9QhgQuiDo6JzmFsu8",
  "key40": "2pcJbpXL6QgJZ2wsPkJBRNSj5JLr2Qet4PFv3n9oir1X3np5daYKDg23rkfrwdm2Pkji4XcH2K6RUduHDo5V5WFB",
  "key41": "4ZKcsgfVRDwsCU2EX9hyU1RysqX5Y3b9GGNz6893GrWxcscz4ESfRkU8HiDHEMCVszBeUYQQsSzpcFpBQ9vej1KR",
  "key42": "2P13tjYCS7WvWSpTBb6bbYApjMYMQndJZwsyXUxYhHL91eRGEZC9kkHzQw1mX2EisBwuazRhbWwCb39ocTz5JgVz",
  "key43": "28SAUfeuKVwDiKAswQDCwPZVLwTmiYqZdkzBHoo9ngKYWaLdkXf3LgYXoGjNHJnknu9bwtU71PJbamPC79sReGAe",
  "key44": "3AUoxA6YnLdXD3dtpdJNz7zdW8UKuD2yXvbrfYmU9f6Z78kq3d9riT3Mo6x27pLKtW5twPYMnbRV9owwwHzTxccL",
  "key45": "4ZrQgZu8mADhEhiujthyFNgdRZnx1xSxQ3gg8pct33PtRgw6hQV7gxLxkRacCEMxzgPpv4J8Cancq63niJnVMXQZ",
  "key46": "2C8w9XrR5kAJ9LLoqXy3S2B2PYh25ZWygTg1gY421o1y55taNNmMiKeA38KMR9XyR44e5L6fpHKQeXWjQ8JTFf6g",
  "key47": "4iCtPYY8vvRRvz5CnAgy2AHJqwYR6NWETK4x6AwWk87vcBnpvMBubhjQt8djdjLrybbTB74MfhoPJec3mqqBce3w"
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
