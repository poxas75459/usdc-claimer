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
    "4YdPWfGa5CnrC8EToQqox1cF1YsusEct7gxTiRBSAx856sHhg14gUX6XGEj5d9piP5gXSzvfaFB36PjCSoH9Yjkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tJhyMegwJiX7ydzEL2TonFkvsYum51mv1fm36nJiS2EiAwncPQdSYnDejsGpnxFRgU57j6xvEZjZuA58tzLwgv",
  "key1": "P7pZz6Jt1ACvXLNeYNChVscG8EViFaz21XryLvUmyXwyBkANBUWmkCLqPJvHGzUpmuq5cxnhTYVa4kdfMomL24s",
  "key2": "FJEw6qkEVKHyn9dV3UD9SYPHxKd4xewkqhTRvoLCrk8kePi32ZM1VmMXSKaJXTofJyU4JPUB4YFJshCCNsbtt3Q",
  "key3": "3pmk6w5cheXkNUknm8vqQgzqUYVD1wicdXCzWihkKLESQyZEgD8qMsB8kiZ8EQA5tyKKXWEn3Te552T8FBJ2jGmz",
  "key4": "3DTxioqDPQ5KRKM1fq7mNLQBwCHyQyNdBhkhpV3XNdiAfppKELaLpo2tpYLDocR626uTg1P2HQUHphCW5JaN56Vx",
  "key5": "3ZSpi49ApfbpgGjzkDjvUjt1nDkd6mXzNDwTPyyS3KtzDFTCr2PnFqzY7kJTb4Aj2uJtK2F49q221dVqGcSBTesS",
  "key6": "4Li1vjsPLvqNQ3RXtyuuPRPiPT43RunN1rFCffdq39J6tFtui4FL5fbS8jbzsnPhYVWDpfTEgt6PdDTgH2duKu6m",
  "key7": "cmEPMPpWwrihwtXxh9YfX1DVD8KcLcd55q2SwTNgmmDkJH6EM7DBkYp7on6FguT3kQrmWBGPVGxzgWg6WWQ8As9",
  "key8": "2NQ1StaGbXZ7YhQp4LopeLLnHoL8hWqBkcMSD6cYeTEoP6n2tCfksUNEvvL1ZHJnWNjcGZrvDnoKBqrzBX29egP7",
  "key9": "iy8gQWSX6QjG3FqZmsR2Wjb6j3zgq2okT35C8ZpZ19t5yUhu9emDJnYKXAep5Tdno36cquGhSzLF8TJWrnANeZz",
  "key10": "sPmxKQS2AcefiJ6RGRLkCo7kEoJT92pEeL3Do6GBLvWgAa3FzNQDFQxhsP4mf8xozpu8hiUgrJ9HYjYfRcoruZU",
  "key11": "584V6tV9qX76s9ZQVforqZSCeBCMyFawyLP87tZEosqyggygiSbohg85HKmKDw5kJZ7zsFTVty7RDfBpPu863Tsv",
  "key12": "J6SUnF48P5yuxMff9k9tYfaT4oY6mRvU14m2qnnU4HGL2NzTDfdmjDUP7L5qmmpUDCR8z3AWGpmfrXG1XGHPMQA",
  "key13": "5j5GQNTSCkgr1GT8FgSL4zvMXWxiEQZnpuydAJzpRYQqVo6WoarGAozoeGj3sqXCpH8zfYEX3wWyHuTdadzCtD3J",
  "key14": "5mgEMqeAvWtt3DDzLuNpnBT2nC3HbyYr6cgbhb1TgsGaHcGerdZej5vQLu1qRV552h6ap1ZFfJzqp2RkHuimSqig",
  "key15": "4EJVfcGu7EvQ6cUBN32hACwNYbTe8PnHf8SzCkTEkPLoSMHhqL5kuDnUUgVErfkTuvtuinD1trkFBfzk7wwAQe6e",
  "key16": "g4N8raiQcNoTgmbmVy9kN2nKnxgw1N1kJanmDaRswxWv7Uha61mu268gBTzeoJd1vDa23bk3TStgk7TGy7n4fG6",
  "key17": "35FYXxD4AmKbP4vkeFoZZypQw9FqyWAwmYTCE82Q1WNvY8dPzhNQ9L5BuauqoiiR9GmjASa2mA9V3qtrPAQqJZju",
  "key18": "3hEXydLary6uQbU5i3chrGsUJ7JHsF16vrZKU5inge1x8EuJTS3UrM7G34AXwvc7zdg89bHWB4eQTbHegXYXYkKH",
  "key19": "3V8igaFykWZSjc2bvve2PgSAVwyxoUWZkn6911hrJFg1hudUVpEBn8hPKp6aJyUZVyJwR6DyGamXEhzU27TrQyck",
  "key20": "3dvCJRZqQTHQMie8gg9aKp8PMNUrhjBfRWcLKb9dTGHeKgNRh2q9tpPUA6k5kQnyiXdsnrHCfdUSEq8rUvoDKgN",
  "key21": "3iqQUZDeRerkQwugxDkN3YDGpra5ypCLQi5JDaj4YNFfvurUoRdWVfKiMhuXk9jTB1VzK8rmcG9Y152Kab8QywhH",
  "key22": "2JwZonFCS7eZwBjR4Y64xkUiaNCNmrxrFNKTrvMCewPsnA6P7Du3jHzfjJPDZ6AEDKwGqKPxk67VNQcyfjqgbvZi",
  "key23": "4Barf9L84dsM1fgowuSNnMyuoLneTCeDVnaaNAK3vbHiWWhUoEAnyzum2Hg1dsS51TfLzAomLkcLsprYPoWqVay",
  "key24": "GPRRN55ffcuuotWGndLuuBopxXuYk1XfY3kh1HMmUyCJJdDYT2iVRYSqDPA5GbvHcL5ETo3Fn7dwwHMWENUXBuz",
  "key25": "34wJ7kAT3NgtuYVAgU9PWUWdGkUct3e8iXZJTCLLhhL1mmYRatDrtjjukm1DDyhszu6dHuyaS3BGYZ2fNDecJACp",
  "key26": "4LJBkEZocqG3QwGkcy9ajic85MaGtfXpH2XFnddK8ZpE6UxqWAULvoyWTtmEotFpWyepuawA9KicUgTLMP6LoYLy",
  "key27": "3uHm4NaNbkMeDVK84UFRxEnACsAawKoGzM2HMAck7cLkZrijLf159ipFZ8vhdpEAkG3qMNyavsTPnGbBxN8Z7k3E",
  "key28": "qFTrzozbnB8bASmWHrRMixmD193fud6rktUxDoubczSVo4e5NCwT7ctpnQmAfjaJLEx4WQUC8CBRhMVWxiVN3eS",
  "key29": "2FrDRFXhX4xXEnjUywow7Gqq3de8QT1qoUbHQ3cbiC3VTmxweZDoHK3sEXVUWm5BWRE6vUw4U6v8Gz59HqtPehCQ",
  "key30": "GQzfDrg28KooJBf75FYL2j181nPxCz2CT4TMRQSXoCtztVAFmtfLQ2UZvb5yhkeMcA561anXgrUGAzrDkiPS8qN"
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
