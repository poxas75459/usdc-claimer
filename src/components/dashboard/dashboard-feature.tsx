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
    "4PEaaUz5aNppg67dtPC4XLaAxJ1zu6iG23sGAZvYip1437hgBPpEG3FtWEEsv2QpcUnPMa41t4cDU35ykHo64LAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Emk1WwphDXjDn7kbLPQaN5N6nPpAk1nex4JryoML52yu8FgzHFybZaMgW2A2EPPv6nthQYTcP1NAssyZKrA2Y3t",
  "key1": "5qoAtjDETbzb6d7BPA9hjajQ3PNN7BUX74uBvDyKGF3z6PPjz5kMpKH31kj7K6cHCXHPDpskGBsaBuzhDg2qWUns",
  "key2": "QBUG5Y36eHqnV373DVr2ETJdBrVHaJ4u7TV2WQfTeKH16qUSMv3PHoiHgKtUJwrbSpuoMY5NahAogmZCtr5Fqbe",
  "key3": "34PrWXnfV9gpTWSRzE9xadfEPyAtZQZht23JwJRZpnCBjiR4koE89YvbmmVHfGWYHMyLpsCg3Tpo4fWNmteUUeAR",
  "key4": "328TPGZ392MQR7MhhVxTLKaCqmqHzRuEpnNd6qHyQ6envqp3mu159VSjF6Pob47h1ZPFJsk8sT2wr1BvSigKfFGd",
  "key5": "vfdqdeDw51k6xc8XX1gTmMu3BP5pifzoGGEsV5pf3pBst5kzQmGjikiQW7DpQtm2CjsLDop6GFZKK9izmwWXnpF",
  "key6": "5rpE6ocoSfvn6Vt9MSLgx4PnJrfLqciCcmsU89ZgfsetVoTMpfjHXqph6KHyxrYRTZ9Kqpgs4eX8VsENVuotT7gf",
  "key7": "44L5QTghkLRoCp2zUV9gPnDYH5vAq3QHFYwN1yQ9jArBggKL1CndM5ULunhhgQ9XRgJmUwLjvaeVWbhLVMzK3YAY",
  "key8": "63XQokDHEbNScwyrKZL97eRrvUHBmUTV11AYDnTT6P74HRjgoC3tfC2JHMwuH2SqdmDbdSUbvgzsWbg1k86oRM6m",
  "key9": "54QorfSC7bajTAnf4eg1gYnGG4Nx1UJBWpEUW9uBZz5ajPEDHurx2jD2crhyFrtGREH3CmwaqTPUj5Z4V8tg2oiT",
  "key10": "ADc7Vir4Yzx1LXXpG7Sbo91cz6DWDFUa8qDokmaoF7bDuoeZuBshoKfHsuuVy4RVvybPVPskSrXnuEHQzKkL8fv",
  "key11": "oo7kp9QyjkC8qSge8BGCugcGREyMk5sFzt8wTxAcrTANUvn5rFzYZCDq4jstqiEotugeWAKAx1uVXNAQAVuZaFD",
  "key12": "5qa3ABk5icySnD3ZT75szggCRgmnV6wFPdeSJGHhoBj79LrmZsK7zM89TYqcwC9XNS7r2QRdBAwPKKZNSW1MRG6",
  "key13": "3hZwHYfddA2zUusJeF4pbjJxGyZE9ebLV3mEG4wQbPa2EAGejVzFqhBbQ8HsgVN1KftqyLpG3DuaxK6Ns4Espo6x",
  "key14": "5NsYhiBD1oWfWzDPX7ACFRzAeedxEPA99TxowhdnMKMYyfDSryLJhQ2pYEDXpnMhHHAocmro4o6mg2vbpwuxtVS5",
  "key15": "5us7QpvtZqHjYU3YW5ToRKUxQtA6GEsd5gjZXncy5j3XYUNjRwn1JzzAcHEScNYfpgA65XwMhASM1kXmsiMxr7Zs",
  "key16": "65bQotF3tyUQYSXXa3Tvvg5j9NRX9dUEN12hJF8a8BaBteS3aiGMB1kPB9HVfhBfgJjpv4Bd3GdGeKhMkqHhoHUt",
  "key17": "4yt4crYdxdhWrpiiKS1dkvgyuLH7TecFNsEWA1bADtHUTrC88eemw2juA5NSyr9meoJHMkbrkp6omYe48r9sRpo2",
  "key18": "4Vtr18WmU9GywPi4jJEytkJdzU3XKKC8ihKnazXJkpwefGCrFpSDApvarNXF97jejXjoaq8xW6mCEUk1en7UZ5CQ",
  "key19": "4Brp3f9tTrfas4JWnrZmhTDByDWtWR8zBVE34H7pUvg9PAERoCEvBFy49DdBLhN76JNUCYvfVERgUxQqPL6YSH7j",
  "key20": "2gRiZFsycEr2DekMeqDkFTMU37nJAWfu5ZoRXWMiXn5LWi3CUpBEgfewwxhaXWW6QaMcr5MCmhCkZWcgLk3fSf45",
  "key21": "3EbE7cKL4wkZazgtZxhojpvUbxYskSqMyRvnTyTcQKiAVfdk8igC3jt7781Sh7xbwmnjdfQ5o6neRg4N4M1Qhh1Q",
  "key22": "3eWLRHL3Agc7rzv7CveNbcM1GKp35xyNggX5w7Fu21DtvVp7naLe1Wsy1xUGXEhwATZRnyWCeKzNky7Rj2tuUZvS",
  "key23": "4qFkc8PPxHUpDQMi5qYEfZ4ocR1K6PaqgaaXVnp5C1ShNWaRQ8t3ohhSbLg3Rx56VyYcTq2Wt9qpMR3vxHGxNX2R",
  "key24": "5noiTvY5KJkP2rGfDSou5PFSSmwbAmN9WeHGX3QXeG2erwxZzDRjpG9dNMiaXz7m5QifbFdnxXAxbRg2vu8yX9AV",
  "key25": "5bkt7w6FvAqMzfve1FNHxkMnRpGxsqPJCtsBY8e6cHKuBTTM4PWJnwiFvw6Lrj3UAPL2U43tJUbMwcMMbMsMqumM",
  "key26": "4aCSNbpfKcXUm5S6kGUKACsuiqBbzPZos1NpgqmesDR31LJghnCNs2L67yC8KdxzhLvL3UUjzFHJ8P2gFtLKNREi"
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
