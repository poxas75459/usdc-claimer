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
    "2EYMaizxEfX8oTipGwzJrhHPkQRfM54jQmUyzC2KDrD12MAZciNkQ7PDWHvpCE4AaCcx8ap9ZmSbPrVmhX2gC4JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUm8xBjeverWaph5RJKWTDBb3N2D1NWqs72Uga5hMRyWXKH88izUQ2gYTgKeoeedpkWhKzqynhjD9NG7ox2uWao",
  "key1": "muBVGASjDwnTktWuDRbk3mEo8sCSDqfNGJZ8XbGqjKRtxYJs5GouXT7oEtBUjfcCRCQ8HvXxkNJt5uVsrRSpqx3",
  "key2": "3Nt69k5hWJQhkFnXvAoFC8bsG49EEGhtThunm1HgaNXwK4YRW51H4CtKRNv8a6p2WbSiPfCYuusP72iF9EruJmY7",
  "key3": "42LTiqxnz3J8iNCcnmRmJCEkpCqPUZTV4qcdwnyW2DLQpkPDQtt62M1HrSDUhJgbbhKXACjVWSPtEz89zJ2LMuyY",
  "key4": "3FrtDhCcbqTS8sGbUWTPLQZTRa9hZgZZtSCiDewHbSD9iAujsM2SEevzHBULqkfTbo8ugZx2eK95nB6dykgomjsp",
  "key5": "2FEWgzCBvQUJxaPmRNFxBzreMuymJ4VYYxk4HUnodgeM8aQ7tkdfJ22Lqjp2RGd1ZHTJ1j6bx2JWBnoHn8zE5rjF",
  "key6": "3DUmLKzEqQk8bpAZyV7zvWs2VzfCRRHkL7t7spa2xtkkuQCxpCyESi5BozuTZut91XcFE9TKGw65v3XixPSsWtiW",
  "key7": "58EvbB2VudKERy6eq7R7MUMgvaqGTtpPcjVvwTPWxN69irbPTo4N1HuHv9kxX8kqPBfqfQPeK5Q7P4zwzdkTZzEX",
  "key8": "5idDcSf3h92Tf76iVfMASdSuskN6HAy6U77M3KkMrtD5k1RZLApqRspX6adFHFMYrhG8sWiTqzaAGS7ctJv84EPc",
  "key9": "5g5Jn6tu3TqKZb6pFuqQj12c2aRYT63hmKbCKj1Zt1gPiVVXyrPpYdYy5zqMu8uztJ2Q3GejaJ19zbfhwAB8emhL",
  "key10": "sHisyx7jRmiNdWKrsZKFgAsZuRrpVsMtHkfESEwgFeAtPzBaREpXLRrGbCDPF317zSB9DTayM4KXrkjnWwRoY5e",
  "key11": "242SaG94mUjrKToJqR8mRqbqNKSBWjwD65H9wX6cWFXbwZKiysHYLTHBQS1rf4jzqzK4NothLPMG4yDpwzhKaieb",
  "key12": "2BxDp9MzV3eJm5V6eKjHpdZWzXrxVUEiWgsK5drpEXk8uyc1wt3rh8TsV73WXh85UPb5YCbwTprHfrb1WLWDc9zD",
  "key13": "3fxq5Ye6C1FSuzBawzJWNN9LSLH2rNWVZR6ENgVPVvUzi1WBiFeheZZz1eeu9g9frbkFdHxhqQfNnnpt2cqiGRZS",
  "key14": "7hvrr1WdhqHYYwPoqjURetACFoD2asS5XfRmaRyuPGpmDf8R9V4NLXKNQCqArGvdNQSE2oe7oMxFS9DUbuUN2TE",
  "key15": "dZWKMDyXw93H8Gz8r4jWu9jDv7fRYY12n16stbvBn7RrRvGjocuCyxzNPVkYfWA8EP61VCVrriP4gEtntj2ccVd",
  "key16": "3PxEwzKcnUxhJ7XFw7kpH1R1MqAvTx5yHnXBWNseH1nPQGSETznKfRHGw7wzMBjXYTMz9yqinnnapZZowJszk83y",
  "key17": "2Hy95ae2o1Pka17nW3uxB7UrdBq9TyftkfUSkaUqRBaiuC8Q3qSMzaP7npcL1Qi1F3h4zipuqjdLrLxhwEkhfRhv",
  "key18": "27UWhapPsx696CrofcxaTTn9rBrnR7hCpRh17cGvgqA1rpcGryW5D1rBHrJcwFfK4VF53xTrZSFizgt2vqM9vdSA",
  "key19": "29o4qCMzAXBpchroscJfdftA5ugwqUiQuM531kKMQ5epmhP2ztV6QTKafear6Pqjeaiux6g1Eb6cbnzbEMDQiho4",
  "key20": "3ApBiqnY19VQYrT21xTNHq3HguvDVhWTWw4bwLBpRSNxeNYpDHcmVfyP3QocE9kPmyDq9VvSct8v3rqbbNmfFj3Z",
  "key21": "2RyVHzxoCPqahPyojAuCcYqCYT8yGUtLiCw6KQ22WWFSHvx62Yu5vymhh4bTC4sBv5snFTKM6M3B4obJv4d9X3jy",
  "key22": "2jWdH42CwhmBgCQbfry2zxC7yvi7PTueBcGJsSe3Skt4SSXFMJbQLfbFa2teRxnZggg5AxqZzg4bxSDX1JA9YZ4G",
  "key23": "22NZ3iSBp1tUzKXiHSutQ6F1h3pGfL3BQ8wwUWyGrzCEDyTWoC1Y3S6P3CE1syQP3dUyr79sVeuYCxPGboFfaKAf",
  "key24": "4DBiJhHf3uTzv9H8FbYvuf41E2eMAGE63ddDuP2Hron7RkhW2ov5Z6p2UJvWkg4PjHG69BTL9ypqcqAfyirEwFPj",
  "key25": "5tXt2GCR6j6JA8GBg6nLGW5GTnaawprszTZb5eAAhRLThim8oKebDx5UrrKXMHQ9FMpSPs64DJQTzc9tRi6fo8Rr",
  "key26": "3vRk1Ks1zz5XzPgtxMsFnR6LRF37AWRg6dX1xnwCag6nWVzSw6AmnZRhaJzaGEwcfibDo5XkscZUbG6boLcuQmCP",
  "key27": "4bXTZ1JzLkPnADBJL9QroCEgQERVQZfEsMYqwcFLVbEKSAoDJZ37MP81hMTBycwihwRo4dkkMTDojneQdYjs2o2N",
  "key28": "bHpy8Qid8e2gHSe9yTAad9XGmu9yHhzJ7WUZT3nn14FJuNGtt3XexE5hGarPi2Q9gRcTxyN1FRc6xXjiQ8GYURf",
  "key29": "3FHuZ2NABM2qHiyoooVdVYLJGfEGoNBnkzAqRh6q6Hh16fQdEjpmEw1mDy25rD2st1hDPhpVaPR5m42mDDaKpxn9",
  "key30": "3ivvLvuabrjSK6Lv4Es2zoLTRtuUAcpppbF2Zvu4BkeNRJVckgSqqcuCeGLWC3jkh9ZpJmJJ2XmQ5sN3EqGZf289",
  "key31": "5BnweoZSY5tGos2MCNqCk7ercpxsriHiKiUKtkCEwguDQ3aykQokPFqguFDCPvAGTJvZgcQ3jjhXg7po7EvSHcfr",
  "key32": "4oKVgmutjdVBcMcKtYyxqP3ChQfb2SQtxsRyJNg6SMoeKCAvt9E9oLmnCgk621Qs2Rbj946KdZZdWMk4GY1Lh4oM",
  "key33": "5a36FAH9XTjVVYo3LPPj3JPgUDZUM3v828GF9ezdzWQKyQHecxGNYFMSPxJwsNrG9F5gxK4n6LfKuN9EKdsTEto8"
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
