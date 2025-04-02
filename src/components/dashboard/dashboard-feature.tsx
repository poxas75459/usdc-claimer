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
    "2e4cn7GRbi2TZrHRG23tGsuvFnQB1E1HwH6fi5uHbgqBcweoD1E5rxF3uPeZWc4qX6mdKvq7ArDfp2JyAtirZC53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ng2Q5uUELqGBCERtGHxMTBUuKFh4R7zGWWkaZ5U96WhFy9BqcZbD1ZhXztzJAXkVBMB2r9DiBnCtrgVTP6gqqZ4",
  "key1": "5jTRhujMT5ZeHVsxCbjSRb8kkKGECyzjv85nWhT6aPDix5mZ7ytqpSY6X9Li3edWyucvtnWvARxkTJNkMebcdSeq",
  "key2": "4WVPpeBuKFzF6ywRiS2vTsMpQZWPdBiJ6KLcDSWZ13UPe1B8kgkQ59issKUzP2ME7ZM8cnoz65QZSx4uDFMJjC4S",
  "key3": "rAb6DCv8AXasMzWTkN47hX47nvTLbQtvUo5WmZzcvQznF69Cv1UK126S5TuwLyN6SaCKNifNCZgGvC1yAeBJe5g",
  "key4": "24YY9urisG6QM9mFVTYai6DbYL2Ahsm9tQ3DMEVyfsFb2S4og5J57fp8wSADw6GK3YWymR1HGT2NgPtdhigpSaPD",
  "key5": "45vD2vJmftBCJ7CFVxhruMjfJNkq48TxJ2SquiU3w3rkSBb5BxTXjhPKHQPCFZnZ4K5g5B9ZpUAkWjL1gv7oHSmS",
  "key6": "3Qh3iWcvxvVGvyUcAsoX7kBYgMBKqVnA6JccAwVuuXKhWcmMhdi54xWrbs59ZEzLt2UaTVB7kxB85iU4fVZQnRLj",
  "key7": "2d6tPYBNbUc4kq9VrxPD44Q1qUV5GBQotvN59KyRCqfFjMfhM6HaJAP6eDV8TA7gEpqZTZJFLJawN9RjWGbMSjk1",
  "key8": "2Ba99apHt24S2Um9izsjfaFRJqXdze41Jqj9ZJJ198S2Z66d2DqairhcJB5MAHuokdheB2LwHwZYBeS2mwGzYiRD",
  "key9": "3KFkgQyKrFLNCS3x5Esk7VfYEqGJiJHDSUQxEyyXdkg651NDoTkkrccyKeJ65NGbEA6nZRstifkKsMT1JiZFhfAk",
  "key10": "gARHEWDdYLLULw53mczRCqTTGAw8mT91NJnNRuihYeV7o2TewzhdX74PLoAihDP75WKs3R74H5K23AwK4Q9qZmp",
  "key11": "3koLHBzQsitRFcY6yN8fvxo2wVzgCuQyhLDiPffVpFeg6Lj6BX2th8HJHgEtpRGwZzEe9ZtpYuNk7Jfb39fbh8Bv",
  "key12": "2iFVGa3wwiYZWRGXNmcEqLRM48JtosvGCSaZjV4d9odh7pa4a7v9F4sjrfzNpwXA2n6XHR1JUonGKygaEKASUBb8",
  "key13": "5tkz3Mcqp7utrQzhxh2bKGQ6zoQGqFiieccXGHfaCxQS4rhWb2Mg5LUvUob6sniG3sHGAGX4Szdin6HYBt2dTHmQ",
  "key14": "5QHogsfyiQ5q6NSFytvrJgAEnuPZMVvLEaHRu9RbY5MJX6DxsGAiz7i4exKg9KVbam89amAHR1Kgn5knACb4zQdv",
  "key15": "4pvzSW3M3hPmgXcD9Z47myPwidEiVABHDdYd32CwUuwzrtULx2Ro2miiawaCQq9Xap2ykKFw6jdj7maqgD1gdLA3",
  "key16": "5w1BaDibcrZR5LTKCQBqK1dciavo1TF7niJNwtcTMUPc3AULmd2GQx2y9nzLNSbViG1jmJ7QrsHA2GBUaWmcozZN",
  "key17": "34emMSPoZ5EJyJsieLyedkZNzVtv1AkHVfhQTGd7KM1sj5CsZiMNfR7jxCR56pdarvSNTbC1Cscxk26Rk3xAuYap",
  "key18": "4LxMC19mR8PG8bij9KTd2gGMffGUZSzSTm5zc3jb6m2ctPhor23tXjQrTXUgKfXKzQU1GvJLStEKKhWX9vX4dMXh",
  "key19": "4dY3zcJHzbhDy1Btm2nj6H63e1CeNWAETkibjKhcLBQXViYYGiWY71ts8EbBiE21HP5KQ9HJ8VwLwhVonKHxJbno",
  "key20": "3n6GMKWNBQUFdtgS5ND96YCE4PH8ZeFwwyDiTb7rG7cLCsH8hcnoHwYPbCNqgVRhroiKYBkqQBV3FUECr5bzjUUG",
  "key21": "3DsqfCL16XE4JzFZitC9pMpyKEhaE4o9avavp7Xg5mkDQpbAs9Jx9kpXAWZ2uyUxspRuCqHZ1U6fAiHaMMeiURUD",
  "key22": "2CLBaTQbxgzvuh2oZqEgL9bMRbPUduGxiYEnvHjB2czq5mVFhx9ALgz6YqmbG31aoc6ZYFSY1XNVdpGM6xSy77zc",
  "key23": "E2R7YPJtEBTsPEzYTumLSDTcxdUeczgaMpdcv4iFiPqjuzW1DYrGzE3QX1VcvLMBywjTy4QYZL8EQxfpFB1RkkH",
  "key24": "4f6dXybz9JHraqYgfih997XuTBfSjt6YfsoSR7EiJQEr7XEiA61dG6mjvcNkqHm6RseyftNJXXC6Qg8XKGeyZ3oR",
  "key25": "3f6V9e6R24nuzcb4tiDhUrUAPfxfzvz6HPmF2bgi6qQmA574r4mm6PAoFxfzes1W3oRDn5tpxGFYPZPCkjdpiXy2",
  "key26": "2DNTqUP7F9rrHfeKkGvy6aubaVA19aYh2vaXzqcWeZRtC8nAN3QB23n1R7ZFeW9K4mw9riP5uvdHw33jjUymEgPH",
  "key27": "4viJgJ5CB4W4wN3jsvwoZqcpAr9hkYa6KJzKzTgUcYFF6Vt95HCseM7ABes5NDmpcaPDh3UfUzq9omJhKZ2J31X9",
  "key28": "2WQ3up73QLX9k5yjeBjujfrWBr8sZKN7CbVixHppf48rYbhLeHBjhirisdmEWC1Pbpfw8QQ984vPuWHBPBTMQNGF",
  "key29": "E6b3KZSbcAPHDodMNNPDBwzhkRPdUkG81owrKSa9ntjHwDDnpLPw3KhyLnE2w3cocKxPhpyJAoQy5WLCxqVGahW",
  "key30": "658EQwbvwHcqc9rakZdaY5nGf4zfzR2EFyvhwQTmLKCVr3zCuoySb7J4SA1p45tiytu7TAet2ykUNsUJvUHRMMte",
  "key31": "4wpDzVL5Vs7heMyZjc2HKxTt3B7uh39BjbuFY2Eicass2AFPLav6mQ8xjZGx7SX9521sLpPAveh5FzoUZBSgPswS",
  "key32": "2ebxDgbau29WivJXoMMY3165eUgxoaBA3ykmstWAHCmrm34st1XRQMKNqUzEGpW32876t9xf1tDfhvBbiySCxJb5",
  "key33": "366XTk31VqNvm3EtMgor6niHbPjUdUUcAAwxeUuKGcHppLcVtD2NPhTcvDf4riBBzWpxVCgG8a5cS6y6oRqbRyn8",
  "key34": "3LzFHCmPJ8cEeXEbxB4PVwWG6ffc5M1vmkwBg8tTe49MKfUs2fnwAWerBqYuiPHhkW5b6CNahophUmVgPf33w2vc"
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
