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
    "3mW3dV3yC2zZBXY2pZ6D5SMAV99hVoPkQhXY1muFdYbWDjjTmpE8LZZuqfQagE6bWsFg1qEaPzpqVfsY5egHapkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKg5zgaA6asygAWuMWF9a7AoLpiFp7HwptWHmsMtRPzkUfSc9j1Dctcf5zRxHghqpqSyY8ZVXGmLd1Vaf1SqZE1",
  "key1": "2LqseYc7wuc2MeW3Z6wtWYYK6KwegZuNd3vFcVDtm7AqpVNf8m8eb6BXHUMe5yC2SEkoCrkS4cLs2vwGGqVcUV2F",
  "key2": "26rGaf5DkiYiBJJ9jq5kwKuySMMccDUoraLUJQathr6VgUEXkgeiAhSvVyiLfBRSdhD3SsFfTWdABMuz4pzHFpc1",
  "key3": "4qvmgehpiYemQCExd99DDYaSheo99xxXsUz1SrxX9EN2mGgZSTfrixBVWGEY7hFn7F6DswbJwyukjmNaQEu7a3hm",
  "key4": "2RSiQZGWyJRVoJqCYnYrjsRS3JyCsTpiJCVHrgDcrC585DwuAGcvi2TyNTn92emPsBfpo91cbU9n4QSPPfphVEB2",
  "key5": "XvpKe8P2p9Q35VcA6hU9L6reuV3wUtHxPL9pMh75N6Cmx9s7QfwcrxbXNHTin2whewVMpxJ4aHVUZws8pJ7hTQA",
  "key6": "2q4D2kvQTD4Ceu5fKbA5XjnvAuPE5UHqhjRR5wnGuT8SmTHjzpcxE27WKRU1hCmoDbRFBCxjsPvE16cWG6zGXShr",
  "key7": "4n7LAdkJTX4dCd91kCZfWrC9te9Y3LKnN8EPkhWxuHWjNMo9weNPy5LmXxFkk7QGvr79wjkU4FELBdUTBX41fcvu",
  "key8": "UokHvSgw5mWmDW5WtvPegPGqTeVqBHJNJCVotuQCqwQnG7ckvhSRS9NWbLmHiRTaqKhLe2voau19CpfGe2oxt4V",
  "key9": "5idHRpfHCL7Qfb91nA6GbyTZFjh2eR9yvxZwFE2geWRHriw6zW51VZD6JsYzw4AkYMw6e659QmdgcFhT5uBifwPD",
  "key10": "2Qy9wdCBJ51uVZ3ApU1tGKkZ1WmEgi5Vk8jmCKHci8J3FaoWCPyzjkfEfQFqQimS7n6w1Y4hir9hcX8t6YuvFsWe",
  "key11": "RY2Cmn3pfLKNLpDAo98t8dqxUCMY3BTKwvbyRZ8DAN4sBzb8iwQSLkF2shaXsxLLJ7ZNAhcsbhAvjTuk9QXUd89",
  "key12": "5vBAuj52ajVALE5BW2jC6VqhPMr1QKjQCAL3V3gn4NT96TaFVdSSSHwVyyhWSL6Jq5MdRmS9cuBeUJc3k7C7D6vP",
  "key13": "3e3WGqNDQwe7VcRc1SkddkTHUo13w8SoRu6LvXJWWFvmzSRjLKSy9RbzAMUqmfxqoLsERCYzwk2WXccUwuGva7Q",
  "key14": "5snKbAzxD6T9jFvDYRuGj4yD6zqMU8FDGc5QNN9irfKEouSiGCM1J5f5gKKc1ryh8H2vC6cPzbYhaS7P4UUDkWwH",
  "key15": "2EqrQWxExmDKPfWWhQxuhC9TEJTX4qy6EyyDi3Dy6JgsevqzwpxdBzEs2R57PzULxdTcegBL2cZvubS8DMt2fNpv",
  "key16": "4YM7WF8e9Q2TX3DHFWsu8PGFuaP6JTZR1mj8TbJqP5CRU1vcLEvi8GpmAh747qsvDNd8ak1D3AvNCE9oXNbxNABF",
  "key17": "34a3XjRaufENuogaHKAsP5XtDkUJKPjzndGkqmTCesJvocq4TCPf1sn5815YZ5ZMgQJrmDF69Ugh4YQQ2fCdSDWW",
  "key18": "2ij9haJn8BViNhtweEGH5fcAEZqEcL3iZJ8CQ8G711qmtaZpxYrwFgFoV1r9X7umJH5Gw6UdWbrsHuWfh11Aq6Bx",
  "key19": "4skpEbzjwHvKZN54oMzyGjz69u52cRNa7eVhBcTXgPtGEPUZYWexS27RyZEGGxA1ws75tjzdtxoAzMeJDry4WriJ",
  "key20": "3NAq2c7dLkD6VVEMexBQhokn8wU3Zc5cWR2vr2ypqFYDEK6WwFjkAeDJ3nqby5BzQJqJmoXUJbBBURJdFfRoMPqM",
  "key21": "53vJYNSYgS1hMeQv9Cm25nSa4qvnXhyqdhoMSerCUKDtCNoWAiPD8t4bxJumQwdqbxshytCkoRiKWyRwTHDbNrmg",
  "key22": "4eafTpYPsGR8yvmoZgoQzScUVs79R5qnb2au1njDi6KpRNdRxqrawVmTqRJFgzCEbUM1gapUWyants7uQSUZQcWv",
  "key23": "2PGcqXyc23VGDGT8VmgZWjP6jyLxBQAQbzFD5KcAGSEvHRsm33uU2y2tX7NEQEJUdBK4wmX3Cosgo9khTqrhUiRx",
  "key24": "5nWUBjux4vjkfudfwP2LE3Af5zwahmqfGR6MoehjzMbmKgTGEpsMG6to9Dz51XxpjQ6s25FgQGYCsoqWSQtsdFr7",
  "key25": "4gMujXSmKbfGtYHFNoYWHpHVA8Z49AzfG75TanWbDbf4KoPsjpGXGfCYReMFaZxHHespspwVEF23MBovgeNUesJ",
  "key26": "3MAm14pQ6fAcysuCGKatx5a2K2uFXpovfrhgBoEc2HJJSRqYWwXb9d48tth2EuEZSzNBRN5zBkFh3XvTfLhB2giZ",
  "key27": "5nKtkx7a24bApxsmVUKp6GnqidLb5MQabGro7U9hreN8TLkvaoMQ6AgErEuLHs8BhGAuwinTqr9fsqjbDjDjmwd2",
  "key28": "2EvTnNQFGm7j146xoGSU3BB5pdEP1DKouS1eKxHBosUKXLoL3VvznjqTQ8JU7ygThTSL5PjZtGysjbtfz8h6sywY",
  "key29": "5c5UdhsLHGzYcoUVJko9J6eyEM1q8RFERdSt7kpSpsxRfENi3g5C4qTEX5Y2LJ3ezxEx7SWZ3wcS9yaywB7Zq4k7",
  "key30": "xFmrChBfs7GDKcXRnbuy9zdMtRCjswLxvdpA9KCkuaQ8jWV4cwCjLswpmXQRxnGhiyBD7XHuyvWv25UjRaZeioU",
  "key31": "VbqRygkuLHyawXd4rJaUD3EKsEPnr6Rp5fDXeas6DXz8e1KwhsvVSQNW6irZuevZot1QTy2qJPvZCNYi15kvqyT",
  "key32": "HMg1GXGG5VAU7pZVEC9k1LVkeSgYXhccG2EQEsxDEXRMpQLoq7T4CcwkC8mVMmjzxr6WNngSANMkaAxX2ZgUnry",
  "key33": "3PVPQBwY416Cfj4vXLYon6xja7fr8ueiaCfMXDyTnu3u1BpGyRYCkHSjaeaNBCxuvdbpeJasomCimXY9YoW2mQWM",
  "key34": "jJhCFenZQQD1srrXbdVw9cTiw4uNLDrQnr9zHUBdKMk9fssQ9Wn5namf1avCsA9JLqrXGxmcpdB4THr7n23cFqe",
  "key35": "3ADUy1G3Q1wut6Ms9CfSVCdbLqPJABFSeCcnkrCTriZr4nGax5gyr4koVgxHT1CdmAtKp1EYcWYSR5WM7DGPDqxr",
  "key36": "nWJPMasgJRWPdAhsztFETv3u8y2iHLttkG7g1VdpYzT5PtQafs5zKeUGwCv2tf7voTsNCcd6uNfbQpjtoRS4ZkT",
  "key37": "2PKwgparmwNmsXBY16FECR4gktjdVGWS58Q11BGNTXz12neCu8qxUtjYd7TVuLT2d7wcHPCFb6TFSPUKDYsQqUcV",
  "key38": "5dxC9TBJbSMDv31SLn7RbnCSJLfvMB6YtNrPMBGdi4t6cKhozFUe1VM7k3YHynoDnfdj75AaADQJa1TXqwFoCvqM",
  "key39": "2dRxCtfQdAaNzdwD14KkuR4H1hTmJ38Po2oQnQAapuWfVTkQ3WJKtW5WpBrppgrzALg1GGr6dzbXf9FboRsKYURm",
  "key40": "2GRCHk9nbDewdFK6xPPUZHtWmgzW5saL8UGz8tYFBZchgUmw6hn1wfukTjdrPprBngvsnEKWgCBdiekcqFJFbUow"
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
