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
    "5m8QN6QnHoFfZvHafVyozLkjxSQkAfYjETLWYwZntYnJ4DVk8ARhawCbG2G1irPq1FecsGPixaxUydQhLAqJayDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwidewiaKcHaGG4M7LQPWj4hYFRcXRDT3U1hdWxJ4GNWobFpz9x9AHcgLxHAibAbMvzMkTDgeE795zzLjNeWdWW",
  "key1": "3AUMiKBiT1XNx443S8sFYiBj7LPmXUnytB1X5cp12CjM1Dn4EABTHtvLDo73X3r4zosc4jF7fhbvybYcipV9tTJ4",
  "key2": "21rczc5zbKFftu92nHkFxUGrMUAqAYEbzs56uuxiWcChFiDdJQaCtETt4Ca7zorGpALa3nksfb8GgRbfHtadU5hM",
  "key3": "64wzTMaqny9ytiyH3d7FGT61GAF6hgPemTjg2VkBuHHtQ84YcdfzLmRSqheQ8zREJPBLoFQbf8HxmcrDaYqqbS1w",
  "key4": "274yxW3P9RupFD7kkoygoKkA1qxHsiB5WYjpxTfv3WqyYyMuz5K2cLmHvg5SkR1tkmku5CnKxRjk56MegSy4K9vu",
  "key5": "5YkRrWhW1RSvYW8bxyUNF92GnvcmNweroGAxZqJXzAGMmKskZ6LXj4Y4hsuiM5XoTDxzKjdNYWuNTeERKBB3rGL1",
  "key6": "2Uv7b94FWr44ySFyAPbNjbQT7EnZyiwY1oWEEgL8khsyPk1oxQrKt6mKjbbCAPchPUmpjjuTakYSBUQca1Ef2mSw",
  "key7": "5whbV5J1FVoyMSF5ZDykLJgoVRpayfNQzvgnaNEsstRmzR9YkryAEWmeXnXPZdyhyDNWbhWiPhGEcSAr4biVAy2s",
  "key8": "5prUqCAfsFhnyQsN8QQDdzQbQHyfGUF2W3bCnwmLgXHgNV4TMfX8eXKh6UJfKnjrH6pokBG2QWPUKbU49sBzJeXn",
  "key9": "3YJdbu8rwe2A3miu7LVFQ5Vucn3jwjgNLeBNy3pm7565RyWrsXB1DoVbnaSiGX4esqh4J3tpmyG4ba1gbjrttwne",
  "key10": "hvHCkrB5j3HP93LFWBDN5mXVxpsoSjTsffMwnuETqTC3fm3ZVbTX7MSjjbm6KgsYTcTMmyoG6mHXfNd21k82Bd4",
  "key11": "4u2emvNsk3jsy1qvpmSm7E8ioNzsZ8ta4upj1D4EAPPASyPKbDMbc9W2K4KaiQrPuMYspqEqbXGs2EKyBGkZzVAK",
  "key12": "59f7LyTRNwteUH57YyGvnJQWjV1Q4JmvxqqrNbyEvp5ZihZrxNqredZbcNtYXFyyR9UXRJ4xzZtwkxLLYbBhLgvj",
  "key13": "4e3F2w5s29RG84zyp6XPRNXx5HLmBJe3KpS87WjpNojDS2iN5uLoVJrH3YZZXm9s1Gz3mcnAFyWq3dDQKpo7JN71",
  "key14": "2zdYVh6og3mhwSoVvojqtgSojSdS2GpL7iWUdWJ7w6xZVbT4PUycoooNYBQhaD5fhds3LCbPtyLJ3N8mhFVyS7Ky",
  "key15": "4Cz4HsmKu8BpdFRwtiShkVYRACN67gShe2fia2wquKywELgwmQhpwNhjA3zfx52zxSS8LSWc1M8vSL49piwjKu3W",
  "key16": "2SKCB53uvGdPCnqhwk6tKEniDaPcPvHRuSEQeNexCY7vjP82Zoay2Q4CWZeB9UTpDvnzyFoyxAhHkwiYJDLpRYjt",
  "key17": "2iwUuVheP4teHvkxeCUYWNxRJm7N81dqsjN3hWWe3eFFQBNXW73c3G2xsSLDR65YMvQ9vevgwzKZpGxSGxsdMyCK",
  "key18": "6NmMjAt59ePF8FhxuVhx4JG2UEtMrdRUg2nxw9onfrMgGryLpKboPKDNtmBw4wjJABJ6cR5Q3nNVfb1K5MxwnRz",
  "key19": "4t7R1MHpuQua2mTUvtZWd9Ge39VyeSHZvW3SQUPAjrg6ZX8e6NqVo6SY2wYxFz1EN7v868omJVHnqPRE8GbH8hEG",
  "key20": "2iBrmdvL2XJ8d1pWnQEMA6gQf8y2kwSaDu76DXybYpC2M6xkQKvJeXAxRL1Nsar8bjzL51YAdWLAxysrQzKCv3zV",
  "key21": "5w1WBY163iPUkDNjyjZBLkAKD4ba7bRhtLGYtPtibkUAY4VBGSjsBFgVaXmsJwuM4WbG9nBVG89P5pBM2L3AHCtV",
  "key22": "3SEr4yLV71R3WnffNTHojdTYEFXPzbQMppQQCCSCXCFdrk4axijgJfqkSgzy7QDNXJBrBEZhJRUqULk7pHzZb7kN",
  "key23": "5p2ei3fDZjpZPyXXKgKqbespaCubay6dKnx7A31RP7oDisPZ5PAnuZYuixUqNVBrShvJxGabYxszCD8mCH47toWL",
  "key24": "2N55M3wUuVV1v2hSiCqWRW26mDdMc9EnMqdNFkMQzu8AspME4M2rfUf6eNpqrbmdAmrp4JoGQcxYUqkutq4zJdai",
  "key25": "2ZkLAv7WGXtFZfT4Eq3GNykt3TLqF39FdNjZAWGeX2XVTYn2WYPVRyEgBtLyEy6NDzVsqHy78Uu2y1MEGiUWp2mg",
  "key26": "638vr2LjGMBAkqoCHfsDW12fq5jG7GS5vddJzv9TcGXWWCfH2n5YMy2B2y3ytq8GaN7EZ8BsCubwqA5aut2Uh9MN"
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
