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
    "3DBw1nqDyagiX3YJuiGfzZyniGGqxBk6LptUPLdYgSjxwDFTEHyMPrut1vvmAaRjCkq4psVfjVFoGGJv5yvKCsve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ya4eYZZyQdpULVP8bcfiBUJnMQ4uhWxtGSDNW1wCii42FKDn1weFLKwknr2hJvoFaQpQkdLRQcoSLs89N2wzpx",
  "key1": "2LKTSgDcrh1jSUWEH9ofNWQzMs4yoDjZDvzbekrZTx2f7sSAdqy8ehop5uJanXm2kP4WmF91a2Rq5uphozdneofi",
  "key2": "5iRoJDcqxWcHLfB8vtvL81SjohtetJxLbPa6sMCq2o96CBzVPyKaD46DbESsYsLTs36cuYGUaR9yJLSYsJ3xNDNX",
  "key3": "3ibfyyTZQ3bmqTNULzN9TCa9oVFWMRRzim9ER9ijHhkW667gSqpsT9runs4BuEfdieU6SRnvExfdMnaeXLH1tejT",
  "key4": "2Q7PVwDaofrzpJWQSzbrkUn3UcqG3Wtj5fi58Lzo671fgQqTLCzqqHrhJQ2xpHQ91hhEgeaQB3JbystVFdj6v6pt",
  "key5": "4aQmub36BA4aN5TTsPbVDV2uiXBWmNFx8nybCmyb9uVkQsecWKwFYiEiaxwevs3DNa6fXDHob3s12oEho6dDgqnw",
  "key6": "41kGZQ9VNv7WSxWuFSW6e9qUtkUr58srxBbFAiSkiJxE8CZ9XyJQ3hdABfqYLxsWWZP1ytHBNqHTDNVoZ17o4xP5",
  "key7": "Xubb4xeYJTUUXvuWkVzG7xJ3DgLcYpHGH7eVZba2VYTcseKp9THJzjUXdtDpJmf2gwhqaRb9XmGqqPNV29th3F5",
  "key8": "523uh9DxK2eL3Y8oqrFNn6kk4RjJ7yrbqXuZ7DabNAkU6mAPhCzbdKPpQfxPT5EnJgq6unneKpYVQUXMT1TcA7vo",
  "key9": "3EekBgKTGKtQZ562PQ5ttcwMXqj5ATXd1zvUE7WoZNL6Cv88aYRFPn6mpYjbeLs5oMYdtmyZRCg95zSTBwu1oFES",
  "key10": "2DS6sQFC5tF7nFAHeA7w56TWDRfHu3tfK5nCmGBa3BNw1FxNEAMZKo5HoNfSN9yZFnXHngP7LA881QJqCcJzX8pb",
  "key11": "5dKaKxu4jGAhZNACKGPEwh224sqvUK9sHyX2AqtaeP5BX9NnMuEVUPnVYQfCxqERGG6kufkk4GyJQ2aS19RA7E9U",
  "key12": "2hxZ3vqRDCmy1XqYrNgJUZSQu8XSEEEjU3wTefwfN8E5Q4HWBw9ghjVuS1AXjrGUUxJQoCMJiPeiUcmioqUypP2Y",
  "key13": "2KTmQcPWqnL4QrP4FZVarRaVcxwqTUXDrwJnchJcTdDn2h4edd3SsXsdTYbR6yebx62kNSpAvNMJNNNAdefSJAHE",
  "key14": "5cxW4fVmpS7Yda5XpiQjB4PbxmbAgEUesZAAByUGtgrube63puSx4rFtT5aUjeGgE5538VnMDRyGUCVs4UcgfMq1",
  "key15": "5HrMZM3xnsGVWdwWoZSZQL1241kc9YoyXdLpnanZrxLPFHKrXNaVnU1c2M51Si5fDJdJyTEykUmdeWwLN1DBhMj6",
  "key16": "xoaFnEZ6BJZGmL1a1s3SS87gCNPZ97dzpk8J6wQwqCpYo1mg6tdcQPmp9uUjeBpjSj3ouddHGShMDo1W7K6Q7Mv",
  "key17": "3cMdfPpuNKLxEtBoV54Liu8ZAhs4QJhNU9SeFcVdaM9kdinDXGwibHd3isGrtn4oEsWVNXHEKKTsTBhuDemYyFK9",
  "key18": "3diYzvAUghTKHtgHZM3URvS1KhnXZd4gNpTRT3XzXrWt32GoAdMjZStyfh9mDsDAeGNpn5xum7R5Vj1F5GFZF9bi",
  "key19": "41Yyj8qzF2LGrwgWxZgZJiuaafctPWQH8ssQ3cD1rLhCasWHRmankujaVaHpcVHNLqXrGFL5XEZJALxnQqjDbtYu",
  "key20": "2pvfLhB1eRKNdH5pJBSVxut1UkGbZfmCRR759BuQ3tBaMnkJN4mxQGp3TWgzD15i91iRk7vWLX8SqeLLMecLA64c",
  "key21": "48bcT83iRNSdKU9EUPnuZtfsBf9iM1srzyCdUjFGCeCoygpNWf29qMo8zqHbqjvCy77s9ceZpaFvu1f7hbJFFSiT",
  "key22": "2ZLxjjLTeMhYHJLNfZcC73jXWtjyyLwZYgP4oS81U86hcQbLk7MPcs3a8t4nzajeUpE3F5eRnuHsJBWJtLx3ivYb",
  "key23": "319neo5m4MWtbPfnG389taKQReVJPYCraQ5dWAU5tuF3yjMMQe9PsujJdZV5LDe5uLw8q8wRQSXize7TkyJRTnQA",
  "key24": "5hVKMTWMV2ZRDMQQH6SjGUm4bVL57sdBbL4eFYLCWXTRGLKqe8KEcupQATctEtjFLsLv4KDFy7pQrBQGDCJanKHC",
  "key25": "5jhRoLUu6LA78JYoNuwSdhBVtL1UEq4zbemmhNs45D1vY74pcF29PTHH34su2cx3KTn6xfcw4VmCQiW7a1uG2gu6",
  "key26": "3MZ5hdYeFAqwzMjr4iMtfCJHLDuM6Rg4UNmtpkzbpka4qyL33TLZLvjEk9jGD27BKKGLdUZvVqqbyd9XTHKByMaE",
  "key27": "cmd8NC9nPSW6SDEVtQZCDUgDjFtQ7YR1iwjKXKXvJ1ZsZyZemLoi75ybfbC252AdzqBDnqHbfmFXMY3BGuDpCDm",
  "key28": "4ehKTpMgctjptzmqiy83KnfuesGbsUyBCBMpcQuvfmhKMNk5QZSK82v9MUSEi3GonmQRWqAKsRTJLqcrErVRFeuL",
  "key29": "3QeNGEx5smCFswHNyoukZuw9hrQnCeiqyjqsarGnT5YhaXHuzWDAsuFb833FRxBgf9w32pHomDkr8mzDEUc6bQxy",
  "key30": "Ra3tpbs3tDR8vcaQt4xxXmZWTYD2aQh32ANzsKqbTic1EmPKcNYmgrdnYg2eJprmZS2KLHPnNQqrbTV4bQstgAS",
  "key31": "SbbAGYPtPNqYeGeeEYkNgQUWWJgCwb53xcwb96msvDdN9EbeFkzyQSWutZrGZKrn1uFHnmjspxt3dDBwTxWJniE",
  "key32": "5f9nJRr98gmM3n32zm5dvLzNUEnZPRtUWkn4Je8v4cSrUVRKiseDgTYQDD8N9JkFGiGuoQKYAQVWQT1xbTYNo9gi",
  "key33": "64P5PRrB1t5ejdUgCJGPcVuQkF19K5QvhbvhQCf2FCQ7EsWxXg5KGtvBMK2ejLWdm8mvvsc7vXv5sczQ8g64obrJ",
  "key34": "4VsjCNN9sSWtKvg1NMuK9ADDh2Cg5pXeZ9JJst7XuSWrg75ibyf5wkE1MY3SCaEGwa1LGN7gY1mfrk8Thp5suhCy",
  "key35": "4sgfz7goAi3w5QJtmX5Ac3jzPYJZqgccbCCGAeb9A2nYT8h9RJ9FcAGRwpwQPbqFjEx6P14p5ZaNqXwWz775RiX7",
  "key36": "3EkXX8uKDRBVvCGrqWShro7daDij5xFLgY4DQLkCHe5NrkjAwHZ8eBRZiVRnzpDq2Ht68N42BoT98KmJbaETXJ6m",
  "key37": "6QMji1CmMYh9FYVGptGtJ1hAaeEigeESs9bBo1G7Gw5o4vQQoDG5WpCcakDnzeVLCmhtwtNdHWKU4MeR4Lx9pbu",
  "key38": "4yAGTZd293oqcANKnzLMMZLUS674GV2ybRnEJounXj4noguHnPYsRWzPUTfNSgcREjRktqAyFgEH2cnBuVodZ9Pp",
  "key39": "3uNDzox4FDuCk2XDipBfFo6CBAd34tWF2J9FZgdoqCKYz2npjKsHSMtafTBFZBtLXftZ9bHjtpk4iB3YkNAv3civ"
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
