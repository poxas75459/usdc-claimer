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
    "Cytfgk28HuYtmoMMHXpTDH891AVAiNWnA72DBS9bUuXLSv5mCNXg1hBnFjY5NFtudLbYZcZC7Wex4VmMU88PRmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otC9uFXLoChy8ghuvSFaWRR7graQFuwtU6NDrQEHyZ29fKyWeVUyytLCM7xpNhzqAg53TeBvBSC8j2NDCM7qKs8",
  "key1": "5GzhVHW9dFCFKXySsC8GgFmR3ciG5FMXWEPbH8TFfvNNtKYdecEXVyuNyM8uS3P95AqH3MGFWxdYXF9oZsSfVsMz",
  "key2": "2AWCYE7tikdDHhNaMT2bcQ9AuvnZcPfByxE65iVJqUuFikpWTyB3vaAUB8WBpgAb6BqhKyxbWJHmGAQAoAWrqdzH",
  "key3": "3ZiZA7zv1Z7yByaaZpTS8z3uHzDduDUHWT5Qh27S8CwTkK3Z5p3AjvTNGpnotJjECaz6GkaSYrsxnrCLxc6p53Q",
  "key4": "38qkXgumiVz9YzzSHyoHL16AgcSj4DNQMbF3DvQzMqDYCQ35BVWw6pmJFLM6USt9TGmyrgthcd9SBm1fujveJVr",
  "key5": "S3dMxJypY84dF7Bn1Z6goYgCjHicFrwazMDreZMbTjigsg2YsyRrzVTt8y6UwQe5PMJo7zLDPthzAcrNVx4g23k",
  "key6": "52Zp5gJVbFXXRMiHAL1dbnePCg9LKEDjvZWexifNECUMJ581fo6BE32pBDzzuVeERU9F4Pp8BezkR4G6JsTneCf8",
  "key7": "3kYLfceWx1b3cEsRrVUZ7u1MPoTuigLtyfBju3TEHA1sdspphNHa4n4dzvuqqWHpMBfzv1WRzupw2CGv5aVaw1ux",
  "key8": "5npx81TUMCdTkodi1J9UVvhKnwh9DaYwsk4DFyai9jN4FN92YHBXEsEpmNmFMYkLAiy5ruAF3ETD5bsyRHAo33LJ",
  "key9": "5RKrfgDoEe4jx2nsg24rrhuiyTtK89zxxZVRbxf9ND38gc983LuGdvNNQ2Kd6Dv6EY4Ffn22d9vdU2sem1hZKkdK",
  "key10": "4N61vyAvab7LRWGN3wubSCiazYbQvjVjCHBGiydhyQbFnYqYyVmKVg92agTLrkjJA1gVBN8bCh2zFtNHjuTfDEdo",
  "key11": "G7shER7CPfgMtdXvkH3YRMpNqBGWnfbXrFzrtRjhYytR9G2W98JLCiyjnqD4NQvRmRZRmy3d3k2VGYrE4TCGsWM",
  "key12": "5JKpC4KtQkp2uouxUAsN7qoQKfNzMoefP6UMDC5bJQmnnKvqNz4z5d3nWNGp5X9esvY8xsVvrEoZ1C2KrsnhPzdb",
  "key13": "2EXAb8GzkE8fUCHvNaARK8Aer2PhXdwnQ6XuyCYKUtz9RfcNW1jQ7aRzAmmjBxZJVej5Ngda3k8s7LvLdHSoo1nQ",
  "key14": "zy5yx1T5J6ScG9uscRxKW26a56fCyz7VE25QEujC2MHcaiNEZDzhEtHgiBWFnTWDoXdcZnnPvPzVDYyBpBgRBgF",
  "key15": "3KE57fHMCSYBwTR6EbwwrejoJD4vPutnc3pm2o5RvsJfT2WNEP3mAPQSNcP8cgeVmfuv1iA3Zi2mE8ksgAju5xqV",
  "key16": "u85evBhUx3FXzqPNG3xmSaY8D9VvD3g7Q5NK8QUw5UHX7zgGJ5o648MPJGau2BXgEzdG6vLZGYamZoJ54dDn4vr",
  "key17": "3ehsb7KRJTU3qjhTpE52c19XgQ1RJ95bE5LCV6MhszUxDV6T8j3CJdzwhpDt6uttAE5GXYiDixDw1q1hvEkohCgK",
  "key18": "BFF9UhLKtitV9fj9Kd558DmSTHFhjzbheiGhk5f1gqZeBRHbFc9FbT11W6fbBkey5bgfxsegw8FAXWk1gN5kgQA",
  "key19": "6FWTMoPRTGmpVYB6CzR69Mq4j2N7VFPfPucA2iRKnCxCH2ecybZVwRwFycDUCmfkm7SPXyES4Hjkk8zE7WChr2P",
  "key20": "xSQeTtr9ass5ZesAikReGVq9Fzma9BiynxEDzjTBCxh8u6vpnYEDpF51c1g7xM5fBjqC1vNikrhWm2xSyonuqWP",
  "key21": "5rsd3fWwFfNjAzhiw2aBmMykbnyCiAFrqQnvS1a8DbmHuScirwDbKAZPaKwvbqfp1mkGBd4JizZjxPEJoADrW6mf",
  "key22": "53tUNAPn8SpqYQat5cggSMnR5KjBkyXQvAmraSYG1NSG36jynxYwAUGk6MGivRUbt4Wv3E41tiJpDPG3j7SeJXy5",
  "key23": "25Ezqu8fe9dTfokXXDy6FwmuUBUM3pZogTJeq82oXJsidXnSUSFhs82mVNJxyHUuHvrJhsjst5iniGeukW7i1GCm",
  "key24": "5h8v97P3GAKpsdSSayxEdpYLoDD6h71PKjzwMeKzZUACPM9Ub6rZQGxTsztZarEKvFFLRJv68Wy7ScyfcSTwNFzR",
  "key25": "HKM1SPmwj8fSj1ZxW3r5z5m2npcGVaQpYRN1Jn6AHsY2AkjnMX3mQStSF96gMFTWhDkXNsTgSqVo4i35DfFteav",
  "key26": "5JRmHEKN25SmTe7m5dwwQ1mnupmNVUcf2Abt18ajr3qeGRbPAkxzjw3jJgmmM55t8CRo34Srbf9gV5zCvJYcV6Wy"
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
