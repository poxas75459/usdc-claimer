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
    "2dKRK13pRVoF9owAg7YfkvPBU1XuKe5rs7ZrmTdkQx85XQbwwP3XyeFxs4ZsYxYhYeK8YMG5VUw4tSYW6CJjNCtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBKCo5opfvm5YYX1p2tk5phK9sN1gKwv9apSi7FwHuNmu4gFisgFLHMJDCLgHerU9dfVSxD3ZY5M6Ao9H3mbNhQ",
  "key1": "4kwZuupHF5mCfarz331BNtUAQMG7mhoMz3RWwncbunhxjkaiYWPD7fkmStf5Scf7biVcVkzXrjFbLAz9o3gG8ykc",
  "key2": "4bMH6cfENyJLawgFjYf7dfuA3U27YvDqs86nGPhqcTsr4QnyCxYxqgsK2u2ZudTD2ugzdxBBLQEGQnmGXeQZAtH9",
  "key3": "mHwGM8WDgoP7QfudrvNxvAT4nVmnps4irfZMCGi2ikYcgUnjXeHNWqaDRNCsXkz6rB1uizWDjFiMnexHbLwvZeW",
  "key4": "3ST3TJrWvLCcwBPfWeD8DmMEYtZaMMXfzuB41WbJQzig99QjKSBbeB27xRokWEq46jAbta7TwbaP4JoyzCHr2kZF",
  "key5": "2ipHrzdGUdUfJZUKSDLHg2TttR4HYdKwQkep1S64Rzev7oeuQqxWP7UfZvsUMvsCBPV4w9nZxNPeeAX5zmn4hjPu",
  "key6": "SwVc9B7mEbk4edCgU6ZzihjzGbw8oqBmczMGbFfB1mCXaJ9fGpLcqTxMsF3xNGLyMY8i4Fe6eV9frXJFTmqDXrf",
  "key7": "4fjRei3iPGLf6GJ8Bhmrj2FEYhwFEXPT6kxpoc6rqgdTujpaLsVjuXPVzbQfytv3edRVTBTeEtH99GVxCkuwU4TZ",
  "key8": "5SFJ8NrWZ9P6MdbtBCVrxxuHrj8bJ2nGGs7yw4aRZLJo2tAo2S7GxTyetS3G6ehB9jJMR6r4wxqVJRgff5wYpXzG",
  "key9": "jpg5qNqKoPX3jnJkFz67df46C4hS7nZ7ivMTq9y5uWiVH7NniYVNyzqGmsqDmyBkyNQACHVeuJ4LQ6jpTxCxWfE",
  "key10": "e8A8c9tybNSC1SFq72tSCCNHAuffhr1JdgBM8QfPFesEGn6tgH8N587U3vopWSGm3MoU31CQXxxap6WGJwtZSax",
  "key11": "59f5R63CtaTNPjHaTJyp6BeeETWpppXZAqdUL63Z31VxQ1GZ3AQMxJbJcdzusQ5uj8qKPt9VERXWSqy5kqTfdiy9",
  "key12": "Xsuw4Kjdfcvok2N3zQVVGCdene3zf4dd7TNUM2mPP4fbytapMC4YW7U4hUTYjMUramg3EPXwXJm7hJgoEuJf3dh",
  "key13": "2J3JGpMuUzZKMouMdKyZgGRS8iAmmT2dHKDN61yH3aZvWJ3Esy2MP8sS6fPevwyzuAmB1QNE4jso5LiEjp5MRA7v",
  "key14": "3jrHDvZaDo4U5tur4GNEpfeFreixdVG2fBGD7KTtczSss6yzqV7A6wxBaYS5gE46EAgG6GBTMY3ttBT2iQytRatj",
  "key15": "2sxPf54yTJkrJ4trh1CRaZ4LsWPg9VymhmAVUqfJqSM11nuummdpcfkTBddQKg6bMD1MTPGDinKXeF1bjzgj6U9t",
  "key16": "4DJEwosEWjroQc62LAbcF5Yvz1dqaoELmuwKQMr1AH9Pj7SE9nWXwfti4ock8zrTNEL652tPRbXXPiyjxifnCWTV",
  "key17": "3p1WEv3PxvVFXM4LHj9gcy6NDjXHPtdUiH4nzepR7LLQH33HKbQw4BbpXGwadUt3U8wdxL22w4Rht9pnqxoKCANk",
  "key18": "2eVVE8oaqYQRHqJsNUxcttDHvCM8LTbDbQu3AtrJvPkix83SYHeHKx4SkfXHbwUvG4tk7Pxqy8g8BgjFRqjXbS3c",
  "key19": "2m6yk6ZArWPgew3bxVnWRJ8WP8orGWhHVMSRG5RNWjUvUzuD2tMs9tGUdNFCmdPbJX8mRABP6je36Rm6frNGocVJ",
  "key20": "5Mybmt1Nvy1N25fr1hVnEuoYAuwhSMLfPqxAGMijQSzzCjBsNscpPNiwFTKK6oX5CWQnKMNXX9pyEes23Lu5BDBk",
  "key21": "5dt8QL51UYcYc3TXiPbDb5tYbP4SR1Wdd3bsa7DmE7PivXwM9S6txehabidCLtJiwBLrAqN68LK8y1oLAsYHcMvA",
  "key22": "5KaicbuCEydNjJLMmGSqFZtEwTR3vW416maoammhLCL1HKeVH1CXEjSzsmcq5up6FrF58W4yKZWxoJKU3z59ib4E",
  "key23": "d262B9v3U64bTz8Nx8Uw4ygTXoyJJPq6iKzDRk7xvprLxJLtiSFoG7eyLmfH2yQNQ9xoRjfJH6ktmNmCDdRNpap",
  "key24": "L7FiTaESHpimLif5ePayZWMdWpb3i4nAgzxTNDEY5WMYSS14zvaCTCKyBnJLvf4Hbo2pBeGR4xrRAzcUit7FmgF",
  "key25": "knYpZD5jeexsSoQ1xt8Mj94PUdkqrcSt1K3REAxmr7oBx631PqeE35icFyXVhCEzAwjYurefZ6akS9twZ2cSTrK",
  "key26": "5tpVcMEYGiMCNFJbp9TmJqGwZYbgRCJQWDdyuMgwmjVZ6sP38xzZmk2gMiuWhNW4uzJgjmv3gVVEZnyWqRn5z6z2",
  "key27": "2DvchNAha6dpM3Ngdni2YQ5YFn59C6eU64xpFZcWBafhuofXKi4V5KVKbmLt1MUYWx2nsGDA1ouW1GTpdRMnWr7E",
  "key28": "2y5gNLsuxtdpi2PZHGJC8PgEpF46YaWu839kdssS61vZrxPpSUqFE7MeVTx2Y8ZPNS8UEyyTctHL3LQuJLhYPUZW",
  "key29": "2ozKpRYkCotvyDbHXA7vKWW2aHZFtyipZnhE5scdcGXVAwkaLd25VkcA9jM5KV22reJLj5NX6csexQv66S5UUVjM",
  "key30": "5NqZ4dKBFXVPacV9zYGRLjkwqXVqpjDqo8zd3GpZJo5GrN4URvCwrtVFcPfNS79Z7bpj2BztWxaiUbpBeSVVUZHa",
  "key31": "4ww9qcEGJBbFosMrUr2giUyAio2NTWTJ7JjT3vcS1k1NYLG8hgy1iyG8tkZuAYQfgBjXxmEGMiposg2tk6SVT7u5",
  "key32": "iZLq8ZxmyZagB3JqJ8RhfGYY1fR9p3pQjSudpjdAKj8LfeDdv8dCJzoWFhKTyp6nsqCfyP5SCfdiZvZruBdQSh1",
  "key33": "25SvDBYfPsRePNun7HMFrddgemRXkc5uGs2mjWoCbsKG9NKgJQd2CKsxHJm7q3y1H1mGwJjPyBy5ntF8otGuEA28",
  "key34": "2N78kFpFV8Yh1dSbrs8vPKR3NH8XRQpL1771DoibvbmHzdWinKeDWaDsaKgUGzDzSnd4XZN3ybx4G1azCts4kei3"
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
