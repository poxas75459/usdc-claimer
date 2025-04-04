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
    "61mhXmZcBpbyLm5B7AtUYuRCRqNNhiZLpfLYVynuDEByjABgBsTWbLACKvXEoV8TGgecCZHHzRgQTDgee2Xf5Qpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C19pgdXHY9fx5spgXea4bw8hFbsPRtmNE1RLkoMzWsZjVuqQPkZApqDJCxWeAkNoqRdyo13Y5rAQkP8bZBZrtpr",
  "key1": "3upaFyXcF9VTWR1fHJ3CaNZwhYu8zdw2YfUve73UcdR6oQeCfp9nhnC7XQomiMPMC22R63Ly2J838qSYDrpb3YGo",
  "key2": "dyDQuKrc5Zyphbxtoy6BpSwkK2fTcEt3rwqbbpK3KGYywBU4Cdh8SjndANWJLMdYKrQULTt1ZLY3FHKkptkbvoK",
  "key3": "32E4GuugXZCGTQXfuSNeUxFU73LThu3aLV38aamUu4SSyYCmXwHJJWUCDmo19KvZc7LaYW5UHx9jwbFiPbPaRMjX",
  "key4": "4uEwALFGT91jEqvVmVrwgVfMWKwjR3JGdTzuHmcUnQgURfoznA2cccm9ZHPXSg3ChFQrxyge78gQLvQNbHSKpFp7",
  "key5": "4jFR8ux15VWtBgv49GuevyDqfgpzoctJ5qor2iHgPuQx1vR3htbnA8nWG55WnRUqeM4iHed8r4KKJPsYGuFQgi74",
  "key6": "oGqoge6Uj2oM7L4gHCtJnHJF5DMC8djPLVuoJkt7inEFVNnzG5JRkCDZqxVecHMnyynTv2HiPkSe5pKFhDqUq8g",
  "key7": "oi4dJvxT1qL2eQBwvGeGiBmh2gMykhjPRkS9tjRkk1tR513jUf6ydYmaLEEtmnKfPb2X3LMGtDHmKy1cvQCaFhA",
  "key8": "4tYAS4tkdLfY3gQWLYYss1ecCZptKxMH7UiL9QtNYL968U8ZugFvcnzB5qf9qMFJaTm3Ci4mZUhhdMGdCsBo3DhQ",
  "key9": "5hZtQZbSgxPZzpw4hz99Awx2QQ4y347Qu1MjYvgh25UbTHWSCyUhVPazGmdvQ8EcVk2vGFdq7nvj4AwqZaFnshDH",
  "key10": "APG5cxAavkPpuwMf3PYsGfipqHwejTNEdLqoi3KvQxYxGUtqeAULD5WHA6CjAq2DyPfBXLqNosq7Tuo14vUuF99",
  "key11": "4GCsL71TtgPbGD7YANQ7ZBR7n3zqbXTqdoz3MABEnAFTexbNa7zJBtJ6wkduQpnmY3LaRACnsh8AkPQM6txtQ1ST",
  "key12": "WFo843tMqdrZwZo6qsJhTi9SjCJ4A35vJ31se4YNnAUE8P1G3zWkQP83eZSCi6p2UqgCNPUKqWQLJhUM1dTA2WW",
  "key13": "4gzS4o6PpEYeSHwrCa2qSUdtLY59XxNEWFhatx7vYJdcPMbmCjRamdyLPFqHrcZvq5YE6EpLQ86wSneGqsaGh5XA",
  "key14": "7yXCkFKF6KVMPqomWpKZX3mtCJPfom8Zdcg3C8a1P982jvyZXLMxigsbUNv7x9Xknr1cbw16THWQaTLmXoa3jXW",
  "key15": "5o5omP3LzKgFXwX1NLtMNUB6waKfoeWr1MqDQwbu7o7h6qoCk8DbzD9ewpt2XMHt3MeZdoNbVTU6A76qL1nNiNxH",
  "key16": "2hZoam7wX1ATYZLauk4aFuPkyEJ5iudZ4WGsTobtmkzQWq1QmaQFNrhnDM6yV6MarftWRfWTdVfmu93LMGDSDbgx",
  "key17": "5o8KBKQds5JHtELLf3LV4QRj693Q7fkgxFAe7nK8v197WnUS8PRnHnpWpb8vzWsgkKEQgSs8dCyCR7AZzgDuq4kK",
  "key18": "374qPJoV3mSCPF3BmfssqrJwWxRxoS7Bw6VEoBQ19ZmDZssBCcwoHSks5v8BGsCz83t9qWeKk87BxXcbspZBiiYC",
  "key19": "5F1Sgu3JqPKuUUX1MJZfYd2S3CAJ4BmNk6CG5jmrv39ZFLs3QAkyxh5rQeGtdNkjyYd3Snh9ZJPxrHG1CrbpGFaY",
  "key20": "8Yu14GAsE5FC4rfkFusNHr2wSCJKe87ShXp7TjrauUTHvF6Ha7a8eYdUH1B7UENmcwEWNGVv5wm35do7T6BFKAp",
  "key21": "2MoJzDRHbrLjLZdg4dBAst1No6nyHFxxUodeDsTEkqadifCTX4eLo17kRVm5eos4JSvpuZNBaZ77puacUA5SCt7Q",
  "key22": "2P6JE1ciMRB7trdXeRob6K3yjR11W9CFBKoSStBATp1UvLuUg45eBobgXkDmzRsEKw3sqPLNraLw3zVj16DCNjJw",
  "key23": "4pJvnviaaDA3Kcxkfa94BGQVVMn6HkqbbG2Ds577Nqo9LjRePnsSauzWKhLFzcY9j9of6fbTM6btyjZt1ov69CKH",
  "key24": "5GZifmfSDbwSGxA4sxwTMS2M4s85udqgjcCRxJAUhHgQyn83FgA4ASKevTTJ7pA5r1uXXm9X6N4iaXKGaZRTkes2",
  "key25": "4YvhDsMRzsjb3HkskMoivQ8FcQymW8tMjMwRWg9UDEeyk5yneJxukso59vJFHsfuWVi14fzHDD7Jehhw4qYJFJAx",
  "key26": "5ZVb5nes3ih8CoLtJyJMBnJmYN7Rtu4jCwU1KMU9ZaTkfgUqtJCQtZXEpoae8MpiACB3VVCAikzeJVX9rGrpKPSE",
  "key27": "3Sb3Yi7HxXE7T2YxP6S1yMwmEmbvkykqqH9nMhPbGhZA88WMQZ8hbuZKXemcrRf263F88LwVQmCnrjuSp8vL4qvH",
  "key28": "4WhCubExUCGWqHNHnqxUaya8Y8jucvhLv3nR558DAxBFZV9g5SBdzm2vYHL3w9Np45YznNtcEAMiuiciFqpRLTrV",
  "key29": "5G3B1v97S5413ZbpgZeti8JxbDfvSijcUQk29ms8S9pzKkw7PhGNTpFZcM1HxJw7AmhXEzKo97Zt3rDh3bXAMJVa",
  "key30": "gZfSCLiuynmiUZMXziHNbaHbzujJzw9fVE6PWRnShuTx2FXMf45pV8MgC9BTEL5HXJUn1zRiuVDpi3cpN5iNDTM",
  "key31": "2NvKZSazau16QU7xr1ai25uWGkAdTMXtqwbNenKGBDDtXrR1frMaeVy9Cd5XpHKf5QVZyXZse3UF4Rg8m1oiwkyt",
  "key32": "64PPnwWFGTUTpQY9zdq6qBoz3TmB2EVhzzVuSo5yJbuojxsTRU9uJiKsoX6sAmydkQV1xowZPhhDxBHPNZWDrNuo",
  "key33": "54HQC4rok1sjJXCFfJzxDEXwjCs35qHDDM5SZB1o8BrsyLzDcqxxDLykW9ZnU5Dhsyy2muwKEfimNEHczQLPnXNk",
  "key34": "3WSvpKxoa3LEg3QPwU86EmVMtCCZxeGdZmd4qgy9HGCMeh7s3FiCgi3uUi4Nu5nAfMuAVNn8L2B1QE696nKVUiGg",
  "key35": "7c8gWTCpcDRVGm8JdQWKMLQzsvXrRrxHqW3wsdhbBwHZere1k9C1hxbzyEQwk1TKikoz98CNZEWh9bVSX2Fotts",
  "key36": "4RydVWJavU3bAjvRejbYqtt3EdRuneSEeBPuzwhVTtunuPxFinDfWYpzkRqWMVS488fA5fY2FwKnofJ5WPP18bE3",
  "key37": "43172ma3dz9rpx7yrH6CeiFf157u89cXY5vxSQbd1CGuHQz1MGfh14MUwdeqNe4pbujQ7D7n3qSux6v9vJnh9xZE",
  "key38": "67cy6GTojF1197UKfwbpggVGxR6e9v5Qwq7RamZrsJQzvfES7wNfgbJYrV1Eau6XJkKDkQ4o4ZgimFpHDdUAbLbj",
  "key39": "4UzLMvM5whtS6VosrmqAWhhYx5tJkjfxvx8hhT1fNWBsnpBUvtcFVxC9W7xcbWQVSyPHxKvcrMCDwcFsdkj3uKq5",
  "key40": "3Gqyn16m5d9ZyfRZKi4QyEgnHFAoYLEq67mkks3ZnLwVSBUubsmA1q3Z6gomk3y8GKAnhcGL91z5uMxBXGzgPmG1",
  "key41": "2NVHvh7HvgLBobzrLnnaM56jzaKQFPUEpTdTt7AgDPyPaxiCiSGQreb1sJNhS9bqC83iuzAAtSPp2SUP5snXCiSY",
  "key42": "ALtHbEufHr4GjhLXrh5gXWuaPQ7hFBcxDKKqFTEmXiMNNVmXstXCv21EekPgfw4HXNgMNBN1XHHAKv6Vm6cx8UW",
  "key43": "2v5cre1uNSoCE7SXoikdSey4h7YrGkm8SnZeg6kGGjzfX8UQyXQPHQoGWrf5EJnvdQZGMPLsHCdEYzAaiYZa8dfj",
  "key44": "2Zp8eNQJjhroZLTKJAM3yxMGmDUd2yv8uLBXPGWbRoWkt6YpuHGZeYqbF4xqf9ti2eaM1RRJ5n7VTqLxguf6j9TP",
  "key45": "5SAPcrzm26iCc5rhoH6gXc61jG6Xqq86D1nhQoLmBEizzzs7sZYzK7ceqeHcMaydxzp5zH7V713Hwpd4pJzs6MT7",
  "key46": "QabuTKK5aUVbroVNJrr24jEZwj4JUNE1L1FL9fw46xAzNPKBq6LgwF78U16mDpDQaY8Zp9sAaV9Lv5jGMGfNDxQ"
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
