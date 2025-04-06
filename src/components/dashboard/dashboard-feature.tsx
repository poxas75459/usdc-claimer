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
    "F5H8YQMNXGcXjWJbpps9xi8rhEJAtGfeuBDdwFCC5DwT32mWqN8N2kfy3XTvXuG2gQM54QMeLByVigCa7bvKdwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJTJJdhBuQLBRiMFifDq6htnEVHhYRLdJhqJX9Eo2YncvsYen2ewGTsBkwhhtPj6jENBU5xJ9VtfnZtPrhHyKAf",
  "key1": "4Lo6Q7NH5f7nfeBgiPKKeUV7xo4J6L1dk2Tph4YsFjK9E9Ym8iwPo94AaYDmpd1yA8SeDTRq3EWvWf4yDdgomvcH",
  "key2": "4p9Ca1gs8baZFcWiQ5chiuWyZbxmhWAwLXKCqxiajNA5AdYCAm5ZReeVThyBpD7xVQ7YpRt7TrqJKVAKRC4cXR5r",
  "key3": "wivGjxz8u7qjsFfgM9fqeq2QPK4DFyNMN5SyLNZ2L1uSyGdHC7LdCzGvPT34Lu2N7MiX8pEtTxzhi5JdGDsBMgg",
  "key4": "3rSa8ghkh7xuQpVVxBydXadtQ3AQCEbG9Le3RLWJ8sf9BYAUwbsZnnM8dozRPj8yrtFc43nAmQsYjQLh9eCFp52R",
  "key5": "4N5izuYzozPXWGNoi6xfpwKgZUcm2ConL4m4TDh4ycT4RKYotpUPjaD4KLeMV6v1wWvtHU22FCp6kczsEPhH7axD",
  "key6": "4GYk74LZuRMZmswvSntp3jMMHz6HkbwVVGr7LfayedtFikSrjC2LZmzDLdxJGMyYzm9naLz9bKeANJnA55xUmDZz",
  "key7": "3LTr2temG5YNo2x3Amk36cTLC4LxzpikeeQ5aziWahwU5UjxTCgoBLn9bxBSYpmdcyRKTQtLj8jqrxWhfxt4PJvx",
  "key8": "2SNkX2i9sBt6bEkz6xbdKC3r34UKW73j9kerL8evU778fbmWFCoZPsHi3aGAB2kCSTMPcUvrksFo36hijjPtXXE",
  "key9": "2vcnmYkiDRWanS6ygAJEi4bH4WDGaeuvGsWtXpRbTxh1aHNV74crxELZwx8tXRbRkNMknDR838nNgsT2tichw1c6",
  "key10": "2pH3e82cv8NjNtVeRW2AbLasn5n2Fh1UdvGye7NT4Cs3b7B46wyq6Qjj5MviVn4eEaG8tKGs9sMHPw3oHMmzUsYs",
  "key11": "5tg7qn46TLGgenbYDvsPqvi1eSS1nTUFLs2qbNMoZhXVUdMCyUgaunUsJh8jJdaxPqQX3xL28WKq3RodSVhkdJ1r",
  "key12": "4GazFU8YahWnQMnF12v1g4QM62dDVL6ahVASHMoPJuKaRxEy71b8c3dEbRMGTGVKWupeZiz4uLvaMfwXBGa4Vot1",
  "key13": "55h4ULj7zsQ6uUnPuCSacutqdyT17jUobJg17iZfbbWuqwqbYeTWraUx3SQjzgaPgb4ijzK1bquiDcNSWvMqPTfY",
  "key14": "4VvzmymuVrhhfWfBKz9tgRhL75fcFT6g9SCRFPCFDaCyrStwPoVs3TfqoTTf3dFvi6CENr6rErpXgocy5cRbC3gg",
  "key15": "425WGEstGaKhzHPu9JoFjFDFU8Wsosep7LGQ6K2AajnoUoP4w2Q1CRiTAGDWYVuLvVxYvWy1bqBzxyzTdT5VoMWf",
  "key16": "42oMxERzoXouj7ui1eLxfL57C5ZEtkUgwbegD6KFbSBqBYEHezmApNxjvrNPC3u6pCqUd5zHTqYKngV841FkJSnz",
  "key17": "2bwzTdw5tusN7ptuMya2HqCvqeobrR6pj8VD7nou9WH3BC1y1F2wpWEHQC2xJvk14jx6q71bVwuKsXxbFPZeiXDq",
  "key18": "Lkv5xapgKBL6WYu1RAtVp3Waxb9gnRn3WpG11w5ouGnnb6ATJJaRtGWEztyUxTVYzTa4F4TYBDK8xXye8yR3fSK",
  "key19": "54qMHEeHzqMscq7LPJheUuoLaB5XnCkm9bDhQCqcMMDn8D56gkVimKb3Y8o9tvKU1mqxHUBSr2CcAxkjKjUGwL9H",
  "key20": "2c3h1qgJp5Vi9j5pN2mpchYDvUTrXBfPcyXv8i9GQX3ibjdq5JLGoCgDKqDUjKNG8qr4QVumVfesnLxWfTYwuJu3",
  "key21": "Gvgmn9yAdHBMHBjLm9SwB3tTe8zqKTVkLDR1HdhRdX64boeQJRR67Ava3ibDiEGqbB3Son3Xy4p7FdFXeHtQjpt",
  "key22": "5XHwQzLSpwStmP6m9sqWMLLZDRqvvpduXxJRpRTEfQyDqB9ESCkr8DD68xCjQuwTANj1iF1yJth2z4FBj2kCXPTC",
  "key23": "4cAbNbx1k6k11zgxNaFKGRiNNjKRbt2khbyoLQP2WySHKeHsfWM9wLAMWqVNKbeSC7xXW1XrSv8e9nS2bt7jBCAg",
  "key24": "t2WZNG5BzUJmcbBnPuanTc7qgtWcMzgsiAAChXrTm5JnUBxCi2DCtpH5w6sLV24QaowzwMrbuvLHLFsDq5DsYmb",
  "key25": "CeLXNmSHZDfXzr4hWvwqxRgwohUqs5TkSCAP6M2ZZnNWK1pTLQo2zj1DDqWs6G29zYUJi1VwKhvS9TeKFmVXgMr"
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
