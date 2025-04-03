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
    "4KYDsCw9RhGY43Yjdm8LNoMHBxRCJn2fjjr6LQsKUvoLQhtXnYCkW5oP4eYC6J1ZjKCLjR1DkTCqTybDaqy2vYE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsQEDtF7om5FtZEeEG4EsknrB8b7LPFg4MEd3Jqi1ocJW31MqxW6YvLErHN1FtD85A8sbxm5nev421fe6Fvs2FW",
  "key1": "4QsrVuTAnSVz9tL4JFx6bz1SUunKZNvG8LeEuZ8mwxScrXz5MWBg3kNo72xfvryLejUY1g8zsi3MSJZnG9YrY7da",
  "key2": "8dW2QzS9eiRwYyZc1XeCnEutx4GAf8d113ErjYaWhy5DNED5fYLjBx3XmuVkapY6HZ9xVFwxYXHVZozQGVNR1Jk",
  "key3": "5VpzppXtNfJ8958dWAtiUARoBLV1q38FMjbVyW5UGLsuWTfkQx1gwT5fKW6eK5HJenNPz6oqi5s9Rh1udgPWWe4R",
  "key4": "ebyLwB1KLvhYA9GhX3iMhrtWJrAsDzG8SQZ4Mbm9y9UDPADuFe6zG2KAZs71CBzFi6ZmBVPKsANNVK1UbggF9Q4",
  "key5": "559Eg6jg6FQAo6FgXUcTqcAFHh7EQqA9b45k7fXdh8P69ouCYaarydUS97gQW1USJ9DUBmsVeoCHvLv54n977MJY",
  "key6": "K2HWggpWn3g21qqSmEnGk4DVCtW9cX9jh9bA3GJdP14UdvD2PqVriXQ6Hm9emhkK7MWs2VjisyNPe3rHjJfH27i",
  "key7": "2csDg5hqe1AEYW55h3JoRLgJ7GqhX2r59UF6aBvzwt9XHVEAqBcXzE12zeWjUurT8feVUSaXNMpyfCHfxhN6cXfU",
  "key8": "3PvQoyjQXj1GGrJRZqEh8d5U8XpWm8PKFyzFJVrcV48bHp5XLRSWMwJU1mYGPxpVeC7LjD4s7vATjtFFBR8zYG8s",
  "key9": "4Ym5JAisYFxWHGk1rY6u4Usbf5EDn227UwtnMvyuh2oJ4w4gwp78e2pttvL6uGXD1cQ7G4kTtVBFTe5NubRwimED",
  "key10": "2k56y7wK2YXZa9pvAN4GkGLGg1ei9TZ3AcE7tch9zynrsHphGYRwgeq23N6mH4BmTpwhrNjgXdCS1ca8FmEKu8E5",
  "key11": "2nYviCfy21t6nj97PTjVDy9ig9HMPAe1PgKBfA5csiS4hP7hQgJQa8t3bdkmsCuVscFKpj6B35kjgrbZBcVYdt22",
  "key12": "T7t1KkXjSG9PbwkQ8MaVULTvJdFLhpDMNftRDcZAEEEcyeoFLPVTazJYTeGQTjoE9GEeQ5vSAPFX7brYy67CqEA",
  "key13": "5jTcNgxV9My9hurjSiPkq5MDeLUUUYSu8TQKGk6inmdY5eCJ79bPEMxKa8G5VehUapndyTxGsdnCMy7Le8FJDzfz",
  "key14": "5raBs2Gpir7djhC2RkRsjqsQa8C3iRsp41W8FFEhjr1KJkfGyMV88MXNt1nnoSQeiSfhv2VBFss1vC927Cq5pDBi",
  "key15": "5WacjRWD35MZa4kk4WpVdY7LDaAb49FmoeE6LTHfCnj9x4oQKb1JqFt6QQV6aMgRHtHN3vHssfGGqeJMLcRsSmMH",
  "key16": "SuHEgxidfjE8zUYdAbVDzPo5na7JRV9TbeEnogXqoBYjgLLneY3NFQtDrgp4PbFDjdEuoaoyGf3SptAtwscHH8G",
  "key17": "4LyvoFXbeCD2ZfUAd9jUrcE14uvfYuR68PpXaG1FpJ889iLafGCdrsyxzCz4PaDWZAS7obFVZRVLyjegJYryqYNZ",
  "key18": "47ocjHmHp7tVUUkArm5eRNsRtDGG8esnJF1Za8h2haVVPUpRAey7Cfzy5pqCzmUuHRAGRGmbhqZeJYZRwTDoZspM",
  "key19": "3NBDgQjMvoUspyXzh7maDqrtwdp5D4tkEsi3Nhzq2vbDRv7EvReFzCbzs3dp4JeyN3tqxkRNpV2DwjuCyaMRg2X1",
  "key20": "3a3Zi6HD4GhRNUpw5ED5Mpuv4AWk5PtSb53XRmXb727DbYPbtLtW6yc2euUp2d2C3HkPj5gESxBvur4Av85egNBw",
  "key21": "4fEYhCRMWruGazUyms7g42hGCX2sLVXnZK9aQs4yM879Ft7hMhLKBTpxBEFUbTvVpVkY7qb4siKL2K5hKtSMzrnw",
  "key22": "FDFEP3zkJfWKDZWTJ76ym26jSwwptyPbsEeq6a1shnxjqsfvcS3CBesrUDbZyqdxb6y9ghtjvVrqncRdXLVnEBr",
  "key23": "67daD2DENMAzZ9PMVQCSvTaUpUBrtGebfQaLVRJZQFpBsnKtrD8HhgFYW9gHXvv6go9R26WmMziEfVptueY6DG7w",
  "key24": "5Y5iaJjYLEa3n18FHwDJ6iz5dHdcac98oE4799Z3RyinTtuZQDYmwFpUvZvLbo4yHZHvmGFa4i5SSaCxuKpd5T1f"
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
