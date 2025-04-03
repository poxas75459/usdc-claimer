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
    "FgqffwpaDJzQv722iNCWgPMBZFqoVfzNg93eHn6YCGeBQau7euXT347AkAWZJKuJyZdCfPaEgQkv6xG3a63wT5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmBryiPUVaXvLKNAqEcyfoAQfg1Qkqx4DgP95KHjg1zJP4kGRET7PNJfQsMX3MhCT2RZ2ifCpTKsS4aYmAkGMJm",
  "key1": "5tn8nnw2Ax38oEuMH5omg4QjsWSw9DmwBZSBZYkEXrrmkXTdduPCQJ8VmaQD4RDu44bHQQnrXuHMt1PpPA1pVBdy",
  "key2": "jGgMT63HaRHBmtGS8KrW5HdRJRjHRjGC9cEi1iWNURQYGzjQAUBSyvzFyGLGktuELNFcHWVk54yA3y4PpQiy4rM",
  "key3": "3cWBoC4W8aoSqp59nqgTdwvaBT19HgzYMJvGat8yYo5wTk6gHNMQS5PWk1h1fSE3ZX9vixuptdGU97By981wCP47",
  "key4": "3vfmMBSXAiVndpmpnVNjhR8So5wJa5ckTwj9kpo7scuEDCuQTvDjFNeMmq2Q92oQtFY6Vktk9Ww1zCpmRfz6Rzvp",
  "key5": "KUUsqBXEFCFoGuPVzKEVp9p2tbv5BuXUN6UgQgSQcKfVLpkUzYd2KKErz3pZAREq1v927qQnNb6nM3FvU53UB5d",
  "key6": "3mddvR5aGEQWD4K5Sz8cs9VXHZyD9thrhLPxj4CQV6AackWojia3rRnektFQyvYHfKUj4BFsVg2fc9WcZT7tKdbm",
  "key7": "4Z28b9gYH24ytY3VjkkADCh5GwqPwu7c6u2q64qPoHiPXVgUrDgyBjsvujDZdDTHeuKm2AiJw3uprrbmASNgvAjH",
  "key8": "3EAvaEKzxpgyzaiMuvCrbCfHPAMA8Gzd81EPCNYUeMu7quRrDiTbZEypKNNKasUwDCgagPcrVk7UpBZr28CjQ3x",
  "key9": "xuhx3qPmoWMX9ZVPdV4LmDm4csRAN4Axgr37kxF5FBmehkUi7HSVZB437SbSJGEj4SR4VgpXUhzDu5itZRcdxGc",
  "key10": "4QnRGbhkEqSpDSpyN6wSEB3DASDJqqh4wGL5bAGkfSgqNMZ1Kgj1wRuiXZLTS18iTt3scTb4Jv3UUEcr5WV245zW",
  "key11": "5bU32XJRUs5fLdCMEtsathUktYF6rcNv9kjFTtQuuMxLNBX4Zyz6wTk5YCJNP6bnJgeATyjANq6riSgRgQf6cXsi",
  "key12": "WRrWcsAeSx7QaX3FzJEXSbyy7MjZJevHdckKsgBZgUATiL3kEsU6ATAhcp1uNp6MZeghPnTWz5mou3hENcY9nkR",
  "key13": "437UdSfn4BMEnJm4P6iRmqXigA299LjcjuDASSUrR7yinSyWJC59vjo244jHVUVJsicuyQt9LPQ6WCsqXpJASzBM",
  "key14": "2iQXgNj5SzbGGHr41Nwt53vuYiPSqwg6xzPtvGQ1mawyq7M39QwFpynHWsvspH5P4sjJhEYZXjzZKrMLSSFPeEeq",
  "key15": "ctPHnkHoy9V43qBe8cHoL2tEthZ82y5hVA5BaDKWVFpoV1mJ312GUb425XtSUz9pobTw622HANTojQBH1roTi9U",
  "key16": "4PhsTdjJzkd3hAPB1TyaFoZvCEofz5PmVP9TAqwjJNLkGJJGmticG3McHH4ZHDSDzppqvx8kJdyqqqvV5xzUWchx",
  "key17": "4DMc23E5Lz8i2pKX19MUBLChW57sFYybMKxDV5nFXR6hAyLz7zPYFHd33pL1TNvTEg7LSkipHwvhakP67TASsLxr",
  "key18": "6zbNTPqBm2Rs6wSDH7qNTfyjEHeffwXN638xGon7tsMRxK3cSHJzthAgsGYiRA7ird9PrPfKPAGvCCfL9x6yNje",
  "key19": "4F8nS7oVqPKN1ySCdwvnEKSGkc8Cw565LjQUFsw55HahMxL4XNNogBSfxrRRkpS84DP8UYp8vQoZQrCZf2rNW4Z2",
  "key20": "dYvQBTsaVX6r9fWtbh2cssifho8NpduMBv2QLWG9839uQEQuzWc574wr7zvvMTsCDhVoaWqy68ofh7Dr4ZDSA6T",
  "key21": "62jmCug7Z6UR4nC5DvvNBRs5mkx9nTSx826fqVT59pPku7zxPE2744NTB4915tmABgVK1FzKMTgxHE66iuNC4ryy",
  "key22": "4CZcpTKp1AboBBEYxC7Gj9nbtSnGGBiufUCQkHgkTpVuwW8PvNGDQCEdxnRyAGtcTyM8sgrLq27t4KHGq7bsBG2E",
  "key23": "ZYCRaKcXneVJzCyfZmGjBEXMd3LXX9dFcCaaZwCa15aKT3LaaGuSFF4Q5Gjr6WkWxLwWboTp7LBrgrgcr7wTUJK",
  "key24": "tdfi4miHLxRbrSjEc4iij6Vb12bVkPB9pUta5UqKLbQaynhxxRDSMcf7dKftrsdGAT6Fat3DyA74yX8YwLSG4Se"
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
