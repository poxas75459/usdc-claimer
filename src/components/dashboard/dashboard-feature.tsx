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
    "2RFKcd7jQdToFHuj3h8kqF7hYjjyGmi6EfrWj6mV9sYebMyUSTc59b8t2jM8PK2ocgRfugjNMTQJXqQQ9tmrV1TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaoYhPHSNMfJ1UHfY21TgSAAjmiULutwQmv9Bo2bmmVFV88u6qcuuqY6W5FF3yvJBcosAcGJ9d8X8LDRo8WxhEg",
  "key1": "3dmGDzpYtVZSpXF3JBKpruWHaGtr3q4WcnTNnVXA5zhePVSrm2Hav1LNe1y15fVhvS6geXREUsQgr2p1ASDRwyPh",
  "key2": "43tE3RFefWZB8J1eFotU995m7Nv57ciA4p7FYbJ9xsr8qLnnEsvJ9VepRw1yLws3S6zp1864NZ1TSTzs8LZ3GM8H",
  "key3": "p1ujXPMe3vuVDWjm4NqrqZrrWTwkcb7HyUboTn6ZQsbuNjpoyjJGEUSU6DEjGYyU9J9qACkC6hWVDbreegXMSkW",
  "key4": "46CQjz3sbjSzodJi8V2xeShwLfAY5jKAoqa6njDAwy7NsLVkM6VV4zNKTzAHpBimvpnNpmT6DSQJ5RQnawNJz2Gk",
  "key5": "3kyQ1XAchZCaPH8dsn4MAEbqns5zJjXypQgrL1nEjaaE8nYrMHZLybud1SJEBGRHZSSiRwEAMfdwh3pwBiikUeTj",
  "key6": "3ZCZViQiE3eXt9e6MuATrPg9zJgFbtuTFwVbFAfHfXTpwoHM2oBRsDXdyD87WzMeG2GR3hy7ue39qEfCPP1564cG",
  "key7": "67cptBJ8t1eaW26ukLVwsVxFuGoVxUyS92baCQk2oVzapeDJwwdQcfSxztLrmJ44bSb4AJe2EswFT1oViznixAf9",
  "key8": "4XKCkNn3WvoGAhwyxEz9FbwpktdVmnvSEqSvmmzUG9edkZeh6WN3hagvKZHM7HKUhkJTpxCQgzY4c37jNVaxTFFE",
  "key9": "3hWfnoMzFBXuWcZkP3wJbzdWrMAAxZk2NincqpBGFnWeRRbSeNf2s7p1UM6xxbAeGoMzceKJSrnR3ehBbkrbqh4z",
  "key10": "5rapo6v6DEbnXd8opSJzt8Fr3MV8riVLbNz7mxbRNmJyTqUoD9kkSjTLgs6zriT6Xp9oTaBHvCLEsAkCmUzE1uVr",
  "key11": "zYH9gdBt5xLSgLCsKavpVLa4Pp63n5bHgvd4kBsZCoQigEwcMdGRS6dwbRcEABKFwwtgUQMKyapQab6XsUVe4Sk",
  "key12": "5bx7fFB5p6QJo4NCdS7dXizLjzH6hQJFsnDT2sjCjMoBcd8mt9vU1QmQLwN2xMQ2PzvgGgMW6HVMiExC1H9J56L2",
  "key13": "2vimCZJ4oFx87AMxBWVgTcU5e3x6GTYZH7DMEFik61rk2fihmqHKSeRghYR7iyc5Z7VPkhv97fB3Xmb1PYjHoA2P",
  "key14": "8SB62sriguFiqAgZFjgNifZPBLXiK5Pwxiiq4umSkTjzi4gbCNWrco23MnXsZcZDYsAFczAW6JtUiJekQs9MoqW",
  "key15": "2tdNXFhAjaUGShK37xbnVY6F5rswTNwYCivejkgKvrXhNBJr8XGvweehgabpM5iCckcxseA57QA3ZPpmi4Kigu74",
  "key16": "5aii2ZtDH1qokz4UjBq9RpsSDxkU5GEtzAJKQWHUsVKqLPznPn2Bj8ooURvq65EPFr6mp9czgnYQbKdWMPHVK6eV",
  "key17": "2K9MZVSchwQchy9WaeDYnt4meuC9FC9HYXjnQRCKwUxfP2wh94NnGBAxBYdLtXRAh7T2PQPgq7PRuLRR621TQKYN",
  "key18": "5axL46Bph9EAtEptqrQk6JTDcw9EfMnvQ92nKuCz5UZqERpXnUG1ZWGDHfjCEsxiRXEd4BLLuQbcab7tMgQyRkk7",
  "key19": "4Bamg5UngwBFXvyQg8USU9JbwnNBzu5KDaXZvP7WCiJcZJqnGEt3uxjdEnP2xynSCz95gYjjPKFyYyK146x1AAbT",
  "key20": "JeSmFvEpBVkuiZYV9H1rh7fWAXg3wiJ8KPhDXEgaqqJ7ZuuqTQaHBRLVeEKCANmUivQ5LyNWFgtxfhLdHhZ87HG",
  "key21": "4eML6B9CFkvDwR1ayMvAAiGs915JGcTpuADgv4gCwViykXmMnLYapAQ6VdHbD2XgHxM8dALreAiqahVMs8gcqXWr",
  "key22": "5n6mSRW3jcWnarqFP6huhtQFhknrCgg26xiNDP318QuKGkYtqxfzq6UsL5qDw4QuVN2RjGScY1wiYvfNr1Tprh37",
  "key23": "2jsqNN7Sg7GS3tJGB7J3jcfkmdt5BZiQ5Bh51MVDV42pwEMBtQntSzLR6E5azucJ1PGmPUEUtHwRLv5NHWT2ToAi",
  "key24": "2bkqvmVNku4W4rK4A3t2VVdZJVcWhLtUgFiitDcnp4RPeVixhowYUBHgD83yvSWc25hH9AR7gnd4wCKj5L9cBBuB",
  "key25": "5sreD4kdGvCsRmjxBMoU6vwj85Rt4Kk4YNCfNzU2eTZq6E6tFNmbWC6UBFjinWfN5YGVzSVJ1KnzvVhwfUgpg7ZY",
  "key26": "QAXPbrv7Ko27e1j1qNRFnG7bdmSp94BKWg6Kbv2NxgZMAx1sCyvgViFGuqddRKwvedBB7DeoQ4aFh2EeXjtoCDU",
  "key27": "3f5AVFAhAnF1vyJimhwduwruREnjqDLy6HYN79qA7D4hMbSP4Y1kMFUFj9LWjQ4pJ8BTnDut477Jx97NzzynYAgV",
  "key28": "3gETHcEqTpfbntyD9UfPYUX22qat8ZePCHcfM9fFta5qa8c1fyEAKYoFLcGdM7dhPKPjNniDCnJSa5E3P1RQXnNz",
  "key29": "2QyjRfedhxKMcup9AqvJtuwA1a4rEVM1CdQ2UNG7Ypic6kUu4YGdqHTPKfDjP65ymJCXKn7QTg17xbjspPTAeR8T",
  "key30": "61YoLtNWqkhovPDaqbBaZqimRgNoqJSLrwCFEe3C1Woc1cvSybEVqkcxje57ixWeJHv1SHrGtUQTNLQdW3K5HwgG",
  "key31": "5kLxkhXQgFhsgZ3W2wuyPxT6Rk3PzfSRzF6WWmZhfvQryn4y31KsEt9Tt9k7oAZBTWXCjGeaNoDaQjYBqARbSfAh",
  "key32": "3VcoQkQTtD9FAXCVx9d1xKKPkASniH4R9yyPRLnaTdePEj2kG2NRTDNKc6jy72sc6RsMGpAMTTeHDLrMkWpFPLKa",
  "key33": "515S7Qq45P59cPfGr67ssSHX4WT6FsYccPABRQMxjYPeHRopsFHLKhmDtp5vbcVYJsUodApYFromULRy3iP7vFJA",
  "key34": "3TmmVP43sFqMuk8xNUyGj3i9CFgx1oUQuyoZ8As37XnpmJsQbrwmfRdvFAf2gtBavR26Usn6L4ZHQ1CD42RYFpsq",
  "key35": "vM4cE45yUPdg8bmhWxMSdDcFEL5nTdukuLNEUGyjoFLavQBxdqJFbfJ3DPvPJY7fPpbrdhafbRRphWEHrEaA2yD",
  "key36": "4GSbFPdith2CUcq285RN7bFnfEdUG5bUEjTHppGrgEQxtwjWMBarVoP6HqNQXAa7kmuHwvbH5BTWwtLTYvmHQrRM",
  "key37": "WtCnDDFjGq6w6KedQbdbYe2NZJL6e54mGBYByniPgTQ8n5vmGS7HRh9gmCjtMqVfg3PgTbBX8YWAQx7An6pHkut",
  "key38": "4TVGVNbaGzx5vFL7ha8htzac8LydNV54qqndPrXTk4nNGQgNMfrkEZLeHoEnp5fhs36aVaDY5yyMYdmdy79WkXU6",
  "key39": "41ztcSHV1VjtKtCqeXjKrVKSicm8ss6WxPvwRh1SdgjHnhGbmGjizBLMjoUczLwKoFLErxgNjL1xQoLLxkxNmGfF",
  "key40": "5bHfUR2ejMe3AKDZTik6fPMS8qnBZopadHCkx4nTtW2vLKyNsFPVP6R8FFUX5B9MXZi8n3DVvjTXYuwVGZgsNrLU",
  "key41": "L4RnDxRFxF1KDgqJgW6ySNoj56VMvLqwGR2GurwiWmnmqweZp7WMS581kanpWtbTDZq3Q1PoudLvCiCz2w64c1P",
  "key42": "5gr9Xup6BkvKkVDVXw36fW4CjZKTghnUeLZaKvpAQFuSUGGBQ1bMj31Z4kfZMDnaaRRW5S8h4xCYrcJcnaTYdK21"
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
