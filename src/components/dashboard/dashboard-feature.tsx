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
    "jio9ZLPzQtiTZVEGXEdh91FhpsVc9sPqTXB3udS8gxbmCMEXoECQ5HDVf4kEHQuPWB29Gjw6vvkJ5QxCin9RuXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWvW8uCZGXKCKHUAQySWmi7DjDeYYUaE7Gjq4uCN2L947UKMpsEmrzf3fKMQkEiwMe5zo3MUA1HtTHqSCr1HXJi",
  "key1": "3z9gcSJkLQM3ibHYtAQmZhY4bem7pLMmdMjciHcLK8mdZd3U5U8mJWyyavTvfc1J56MSL8CdXwM53mTTnQehZpQi",
  "key2": "28LxuEmRb816atSA7mbcb4pKysahPPUKewcbLYbNYvvFpZH92d13UUDH775aZnGvmpZSqYVEdgwamYnuHdqpzUDN",
  "key3": "2kbUGsYAXXsuzJpHUaNnDu9UXXsQDQ4unPcUA6THUb9nPzZw3vqDjJLTErvkTDxZMfmRigVzAuyuqxsuuv1xDbHh",
  "key4": "2Hw3CbnutAdzMcYxdt1c4p16xsXYdz1PnsgwQEEMxuqzwqvDiHKvCybE2g966dyJzHdaCypCHHM8s4e3q7Y69u2U",
  "key5": "1itiZHk9v4hySbmbXXySFtvWGeDJNyktrw6vYBrmQcj4cztSBA6otV1NEnjqLiwqpVoSvWjGfdozBUAwhZEasmY",
  "key6": "2jPgGQiDaMBZAbjHS6hRgKL9dxkE1WhGzgDE4Hwxj5tkzfLZXXEcHvq9szVHek8xcXjs5z6fsqUXDaoKya47LCsv",
  "key7": "kURxpnpP7qTSUDSxR2DdxqdihNZ3iNb4VX8ARbxFkqsjm2cYAwhCEVrC88dzmr7XAZ2ykJHiRb45D7vt1GEwhA9",
  "key8": "54Z6T1gmWsy5b9HCAmxH3EwDuxZf1JdB5cgEvMaeCcPpoPm2GHVns6hPgxCczjpRCKfXVLeSQVMCfLJ3stVVT91g",
  "key9": "5wqK8zaW1T58qtaaZGsEgsC79wwiL3VVFQ9usPYmjp5dr23o2PhaVscZqEHDZytCU5yuSdo178Uta5vMeFeNk2Ko",
  "key10": "57yZzGJfRux7YeTohRPD57ftukg1wKeqUw5kAbRBySZHqUdpNqsmYJASja5GDhDbzBDvuJTmw53qLHcmFczigB2r",
  "key11": "3rV5cqcJbXMWRDymA8jkKL413UjcWFdjr51WNF5SCGmTLvyeEZ4NWX94wUFspXw8Q9j56ijgbN4sErmj7sA45Wck",
  "key12": "613bhJmxwU1381EQEjpgDKvCFZvajtnnUpeewYL2Af54aDLzkQTeowBPiL9LNE2knMaAHWi5wfBQcpqzfKoi65eA",
  "key13": "39eC71LJxkPjBDzmQnLKjnRAZz8ne8MRHsEJRNy4gTUJbF4TMw9fiFYmzzrFnCV1e3CQiWyPfpKTNyP7LnZ9eAjR",
  "key14": "3kveZDoGuurU8HmwaFe5MFF8wHcdDkdMG6ETpLUhbS8MmNSpnemeYyw9rg4C4JwdeZqMALnr2Ltz3LHAVDZDpUSd",
  "key15": "54CLUit8GQg2Mbcpvi6acHxBX59zBYrrgKp1shfUS6uf4m8BN7UMU9G2vrHuNnsFrXWVK6zVejboVEsx5j71SvoT",
  "key16": "4S52Rpv7wzs4rx6tHjAsNjzPMpdMhHpt8Quxj4EebGgdbiPrfAFPW4hWQEPpTeUg9pBSjxT9rkCYKhFsgUF6jEpV",
  "key17": "3jGxwQufhsjJKmUXEyrkApidMfmo5kZJVa7xbCDREtjTmtE1BzfRM9Zz1FocCWcndEbvJJoWUSGq5fv4AdrYYkoh",
  "key18": "5XnRXynXXAZY1mBtx6byi6GjLQRkxda8zpUVqqAndhE2tsDEHBgq7DehT14S7KweRPkZQQnXKDp8cSnt9jeXfcdH",
  "key19": "3Yr3dDermfbuyXCp5TUnMAi2gabvPEg1FJS1P9Ly8GrWg9QyZiDPftwQn8BDnuKVsrNQNMvtTMpYntykMhsGKWGF",
  "key20": "3nkEfg63cgtTPyEQQUUJ1e8t4dReUpbnvb6Pa2VFY1BfKohhEDpLqqJVXJpZ4w4dPB8ieGf2pV6tUmeZxK7DUM1b",
  "key21": "41MjhJKLYXTdv44qFmNWgvhWFpX1KoCYsssfYNj7KinmSQbKuysFv5RhrGPYmVYHrYRh1MTgMkvPxwzywi26Wqx",
  "key22": "2aKFtrwDzp3Q2AdDKVzX1fY58cPp8meXi1iYTqz3ktEPHBtYAPeu9qTKecXTUs4uTP9ZhA7Up1WiqEJXsGDdwLCW",
  "key23": "3Tjsf3xb5uGvZYWCxzN8MNeDtpr7gTiZjz4mtV7ZUk5ASw4qppkUebzpb3jyQCiNT8SG7zbL47VTVyzNzXaRuwMM",
  "key24": "2gGf4t5HDtyTg8n6uEB4A5MSJwJ5EEH6Kbg35Bzyn6dpk1YNe2uV32ybetevEioNxgnW2JDwxVhSqMVdmUHZafwn",
  "key25": "4knq1csrjQTC6eEtQJ1KRzWQN18aUzsSi8mKTqasE5W946iqvF43jUZ5TZY8rdyBebAeYBiRasUGXSmMz9SUpc5s",
  "key26": "3eMgNqUzuxAyUUU2NEYBYbzf7gyjDTE9qZEvfEogXABvjHtMKGGwiU6sXtoQSLDfRCW5dUJowMT6q4PqCvyAGHpT",
  "key27": "pGwMCL4Xv5Bb3mJ6LVu55DpNm4cdPcYJ7CpypPbAaUJjWp3GGEgh3z51HcM8Edm2uqkHVjKiZeg7RHHNDnzajCy",
  "key28": "9ERtQiBw8wWF2PfgPWNLBeQVTTnFTSQcqwjJpZVhEFjxpHyA7k88yjKpNmXsuxs5cWxjAy4FyrqqfC2jD2Fuq8i",
  "key29": "5HbmS2iTypostjS1Fek9T3WGqujuarAUUjFvirqYCBsxP5oZ2ZoMo2dr8ye7vgzZZbLnfaYfu4akMx6Gb6E3hXs",
  "key30": "N13VXYZztH8z5t3wYrx2WmxJiJyhu7FziczeLsxbUA8ijcxwioBbyE3RtEdUXLnptoHJ1qGFWB8UkBfYAY2uRQW",
  "key31": "37rNvpRZvsSetV97cycKwvxuh8mReHvUdYH45NkgCgrsBdcg6cc71cj1cMecxjHzcAHGqJFMo3CMcbnk7W8EMi3M",
  "key32": "9tyFmdFdgXCzS9M82Za8x8TqLoescGp6SqNFWHeqZxCBJa6S3tSa9taTEyQKCWUueEApQC98t2WaKXpm3DuCG7b",
  "key33": "3QNvkCQKMWYh3LPnLDceKxa63EaAMafiyt4sfGzHXtA7P8wHh1J1UUbhWS64tBJey2EkJgc2Ts8iB7TSyViatV7g",
  "key34": "4yVT872BhvBh5codBeibFDwHZpmAnzLsFpFk5dJUNCz64kVvjwFpprFeuw266aaApnMCb9wykuuNo5MC8G9ZtXFV",
  "key35": "31sC4Qx71u5WesS1JrhzfTWkFk2RKZnXTb5eksaCYgFdbmJHE7YcWcKDna1nSE48DfBNBc2hYzYb8oU9RKfJFC8t",
  "key36": "9NN6G858JLJyRWDxyn4orPNce9Zn5kDB9RFQhsa1wWcABabMeZtBn66JUNJ9x2NmhScyCXnfGvwrbDQ85T7Sbp8",
  "key37": "5dgC9yx3qNBL7SNnkqQmXNCbCisCYVoRG5AcTYB6fyQJ1Li1J5vy6R8S7FKpAmfPFCYLAvMydw1LhFtLz7X5FfJg",
  "key38": "4JXz2FYgnTePwg8AitfMdzPEhiLKVdWugieB1qkPbbPNon3xrukNM9H59MJ3ciMfBVLEoF5ot8pvEWuKEy2RAm4e",
  "key39": "2vTHBDhrTqFLR6B3WeghNyFSLpn1XdaqBYBZwUv6Wg1MrwM1cV8ARJWFvo2b9D7jN9Zjxzk1bLn2GHkEZZu2eN9a",
  "key40": "czwDrKB9xDGyodxCUh7gLV1syqy6f2Jpa13xhsAWtKAUKKj4pNUbWd786PMZqJrcg3azHbAttQKfrY51ktoUi7a",
  "key41": "23MVxWzbVemJte9nLVkKzGDQcBBhxpFKZ2RmqW69sTpLUEL9Mkb5dNfNLDYvxjYMZBnVF2NczJUkkyHrPgSNFEn4",
  "key42": "M8xrnm2gHChdga8cUakd35smuKUvBd9yzoRxBL1L965Zz7JctZFzXjpEuzQBQHaoppotC9LVVdVTsPUDZEcFRxU",
  "key43": "2tS4RjDG3UUhcC3P6Zu8PPWumJWqufsmjNgo1aU5txQDoMLvFnT7rEMHkpgVHimMmyWCngCoc3mycQponXUmMV7J",
  "key44": "5tzLPi21joVCXaFgxvwC4kNsLADZWw7nzhC89vhWhKxPHjcbe67uwr1wRMBnegSyyabxb8XFj5PqaPyFscibkKxM",
  "key45": "S3cBQJQ29ec2sRP3ANLW5eLB9UZvApPHSyzi96HePbHSaeomDA9BBZkypWPmk9CQ2nEA2aTX3kHp9PZZtv5KXmE"
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
