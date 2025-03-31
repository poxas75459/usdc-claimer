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
    "2CtRfoUh7dvMUgiJJczc4JSGbrQcHJdZd61EQABqUY7BNUbsMo44Wk2tJiZdSvugZiHmi35MLQdMf1wQ2L2A4LFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEAJT4i81Nn52nKNXVLcA6cMygeSEN8e9BpTz6DEJNYhoZKiAor41UA5hNHNmXf8zX5wZ8sPeHCaTkihnm2N9JY",
  "key1": "2725htq43Hb8x7KpDfPESNGnim8xgU1qErcywVFQ66T6jGV5awaXdSfixdiEyAPfPuCEpCTSRf4XGLyCcRbwdJQ8",
  "key2": "29KwR6coL3tXzCrwQkv2sBCrv9wUKswBu63n32i1oESmRjLYzAMABUA3hm85FoMyMENDuaNbpfevUomx21d11XJM",
  "key3": "3AAHUnFQUjSTRjUn9yU7BQDTbPoEmt5URhenvRDc36a7wFeFfCar3DCdbRxVmEEJxbL76MAnfNBzr5ZtdeTWBgqA",
  "key4": "3y2YWwRbDquzRqN3ZtKvYeuUiDiPsjmGQ4QYF68uFnNeTn1YjsAENbVJCxSXaDdQKKkW2FU858312RWsCvfEfBkW",
  "key5": "RbHiojWauSGKMV5fism1o5jsi1YUT4LWbFgT563Djmf4NEyvoR7wiQiZDSD3upNY415Mv6jhrpdoA9R9DQkpqoa",
  "key6": "4zkHqEgXKY3KdEeEt4LirgFd3jbwCngDoUvDTsZvEWCJGfDAKqsE9SV2iN3bveyAo9gtSNDMQANkZFLcZTa5CZsh",
  "key7": "4QEQbUMitFz6nLDVhtsHjc8p3h7MBrcqeYgXAE4xMiAVkQnnoUUeJcuGw4nwCQ7rW9SBBFSHdx5YjFG4ZgrvsStF",
  "key8": "5Ay4gHT9fgt3fzNWzfymFHAqwBJ7x8sDQdJBYuox1FkmkLFH8Ve1P2skfcdojKVkgv4sbqu8pKoxryxbRfsQ6yn2",
  "key9": "45FSvmf7XspLMmtzAsFoGnmxgsGQkYFqnzFybv3LPNawF3AB2nBvDpATKW8mAkBhpKUaYGv7ReNwxd5NYgZMtYUh",
  "key10": "5S3QWdXRNLWXc6rGzfDEUoNKxHErdCDbXLdTU2BUyPQ6rbuAJ15fweT3sLZtqbZ2tYCFzYMNFtQA9vftW3Gw4Nuh",
  "key11": "3vE1bAJc7369QpuqZ6hCnwnF2DEMFgSygH2zd3pw42xzK1fCbp9PqMgQ8fKacsPivGrepdRjjzTB9qQYpckv4Z4G",
  "key12": "4WkRHx43tpGeR8kV9Lc46pMGygcwf9PVJ7KPnVEEUSGXzJHpVBSeDncpV2tDgf44JxRgKZ4LWpjudn4skEJ73uTH",
  "key13": "548AZYemx3Q9ayanv9t9N1XkXs4nDndorVjZZdeDHh9ckeNeuXrPev7s7Zm4W1sgT37Tm8c64CimqM3bCeT3yKnh",
  "key14": "5A32aSmEHfiPorRZtVQqMnM9PEBCWWCd1rnEysFVNUc92awXgGnoZgfCyqe9QaaHpc8oM4emUicBHhw35FRa3BFb",
  "key15": "2ZEBfdb2ayKTD49ikWnZeGjWyKvc4D13v4BQ8jNDUhDYUVhADbeDPqvFTRpZ2P522yJ7VL4iPjJNqCfv1pms37P6",
  "key16": "5toJhdWNmtDb5cxQCriZaAEpVRfy2xMcTU1Mf1sxn7XWzyguv55bmEc4fZeZCLN49FFDiz5713i6RHWCWDCe3PFu",
  "key17": "3CRbNk4haGDWBbQe13MULAcNVAGNyNc2GVEUtsAu1SqTck9TZ8DWyZmgV6VqSRDT7ZfFgFwJsdq2y9kn64ahW5tK",
  "key18": "5UqyurN3gfwhPB6UTrLoFibeUKawUgkqsDLK2Yhrna42PixDyfLiX6SCrhAv4tk1dhZx48E9q3fyFyhBuKhQzCwo",
  "key19": "2Gpc8m3yznUizifexGJq2LvHcFuNq8Yj3KgHb221PVDSVDX27txPe95wL1gVPvm5VYZG7sMVraMYoY7hKCtPinht",
  "key20": "d9H3b9Yac1KgVutWeAYs5WW87RQ83AXG2SBoxAT17PAopU1g9GztcrnUKnXFXuye6xpaq7hdgDZDiyaMxf5jPz8",
  "key21": "9kCkkjWF35xzyNtgePYYprQLsGoX3HLJB2SguTKyCVocFZ9i9AbWVGqkzjSfRNDr5a2AM2A7Zify7gDUsDq92eX",
  "key22": "3WsKccALYqCSe3mymWCnVBC38e7jh6xUw5obTGNSr31PZ8aQuAtX4iUV8ouHgyB8ooWXG1BBgt2NHJ7PLRuP2wra",
  "key23": "3bSREVuD7gyu5KSx6jZrFnQ9WJeEH1xvsmjTH5dHGEPCgTLt4ZwmPtVLv1V3mkFMY3zdL1CWoPs37Wpn2AjG2Mhd",
  "key24": "5KF4C8sHCn1cu4PrZtW71zRxxZtiCF8tjLCM4MVQ8Lfx1WeAjbkWBh2o4rCCSWsdK2mkE1n1svtuSLzYhDN4yjCG"
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
