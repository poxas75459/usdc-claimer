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
    "3prJLjLwu34o5H2kD72kJBzEVmMcS31kFNVjaNBnDUpKjWHBK4KtUpXkCtHeSN4XSCiTykzhQsasYC2oY8m9rgcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ct6wccCxKGYTvR7CPb63aqW2eftFMUUSKvxQ521ayc4Z7SKrdWtZtxKudKZQxXnWkhffc2HjCSFn1igNpeFNfRU",
  "key1": "33JneeQx9duwDGSxRQYrsrw8vR2t3RE1kWjHnijPmKzFLmNRjL7BSwanQLLR1JvwLRwnsZYmc6CJwaxvqY6rTVdd",
  "key2": "4zhFM2zVp9nWzu8FvGBNvBPkGi5Qyv5JgZbXx6NH6KJqNZyBTwvekdqLzGWwwPjjJKejTQke1mehV2HkVHeyxaho",
  "key3": "n3E65vya9SZhh7Dh9GwvFXiQvqBXejUY8yrtAoNKGHwz1PVq1dNNvzW3LzcPJPBgwdoiB9DkBNGAQ4vzeCEWDU2",
  "key4": "5G8D3S9Bp6eZb8ZAchZsVSbXNSiJqRyprvYov6A9J1iV9HcfF8t2Pi43QRMwNfDaSdiJTFajgFM1vKPifcBzq52y",
  "key5": "5u8puLtHTezTcEgpSe7iRzmP3uxTdCe76X6BbLyrEKuPDEZpNHWgT3DT8XKhbuZhhcQzDGwn7Y44ADChvAYPzQL9",
  "key6": "4d5xAKfy3TszUTuGioft8Wuh8SSuebAbauqnCjHENR2ssTkshFm3G6WSfyy8XEXhD9py7pBwjQppaiaQG3RcN63T",
  "key7": "2biNQ5GyxhSYUDNiA9rn7BJPaHzJB8PGVYj2J1HdYyPsDgmNbZ5uX6Qw6FCfXiH1xCuTqYQEzHqCUMtfmUAJxhCY",
  "key8": "2ye5zHf36bhtDubNsuPg67xgAK2B439k8wkE56Mm67gdr8QFzRd2i6cniitoFwECsGPwPRDWxm9VcaAHp7pJFyM2",
  "key9": "4aDRrxodSh4rsRjtK3773m6zYpWv8h8LiN4vbz8sY9CKAnt572WR1J9K9uEeC4syi9H2Me2rWhCmHgPEKc8N1f5W",
  "key10": "WKvw9DFC2c6X9mhgCGyy5Nqz6XUDB7uUMbB8oaFqeSdtq5HfrFpdEBJ7qprgaqs8xXsUMRmF5jcZt3zzcafQZG6",
  "key11": "3vh7dYTzbRJfnVYbwVGCpdQFWPFG6a2a1Fr53FH9db1JQ9pTZZJB3eyTRs9ufmopWn8bTRYwHS1moKdcwQhBW1Yj",
  "key12": "5pUbkr7Uk6BAzmMwwzh8PdMQz3f3uz72wDsRZ1MYZQ7F9dTUS8hyPEw9fCHjDewUhkcfwu9x3LM1RHiKeCdNpVJh",
  "key13": "1XhvRYPNQdTcYVHTMYXgFnRsEsAz2xjdBgAkwtJ1weiRfWX9yY8dWjPcYLYvePMuKom4tWJQAtSPh9rSiCTz3zz",
  "key14": "2d49AiVKrSHAw5CDuHZM5TweqmiTgSyY1TiWD7DKcyuDNFYBQUWnLzSbeftY3EvHeK8krto5SghN6vfKJKWfystM",
  "key15": "5V7RvJ3ozTpGyVh7RbhCtfHR8BTWcvyiViChwirZUBbFwmEf3dRwmKujXPbxH4J6fmTvBoQUv6GJJ4AQeECkYvLA",
  "key16": "7aD3xPHTyYCudeM7iDX6gPQvFyS6YyUPksfd7f1BnMYAx6M5Sou2DHbJ3vaD5zsFHxuga3e9naTSYiSTxmLSJTg",
  "key17": "2yZ3JxuzLCjLPGPtcdF8R5KKqTFTg4NR8tmCoxw7tScPLxNr5WrRgV59EkTayWFZsmtvFV6apVWY6TyqQNurZZcN",
  "key18": "s7x4GHChUFtFe5bXYdpSy6337MkzumGx7N88PfRije1jC3yNQtpq35TtzigGez8UHx9jfLTpSnqSziZYH19nKby",
  "key19": "64uYhakGLMFmRLFVKsv88oYkaivUxxegYihyJ5Y67jZvqe39CMhHtweU1LfFny6yiHNVkKDuBSkDLWRqBU5FeYPT",
  "key20": "3GvPEUNNPcY6TnKyYSmV7p3YruBkXucaDY4FtDZjuF1gHVEE3dc1HjfbjrXhm8voe4Uvu5dhacHba4PNdsMuACyg",
  "key21": "4sCmE6sJReWkMJaybn63AWnDUnmEwrZKdxce9Pij5warUb3RUyJMJYxYjLLh2R2h9SSR5uhN9ufEcGQLkoRhn5Kv",
  "key22": "2paCr39zRiuABexR3WmJPbUj56BRCoBfQSTZYtESVMieEPXCGnCHH3gKH2A5R6A8cPDWVg57xipi4e6rzV8wjXdB",
  "key23": "4iDtduUp4XraBHjeCVM3V8xa3Tqp4w3wjkPQs5nkruPAc7ggzJPVjvQz9UJWvfwZMGMx2d5A3fvCrhd8Bvyw5E37",
  "key24": "yBU9WVDBQ2dxrZkg8L2ffxYaz2S2cFWBN3zXsmLJdTSATmS8EdnKY5fEnpv3sdYcBr2RyAgZfrTBKCdTzenQnVB",
  "key25": "S2HwrjhQAhu5GhezAmeaTj4YZjfTHLmjgchSYfZK44xumT1cqkja8Zz1T2Pt8THmqrWBEd3MhpceKP4WWeTg57j",
  "key26": "4ThqNT8vzYrjJ3AKBZxQj2CbUhc96qG418tpkoN3DtCBftCiy13kmP9uBb4RWEdVHZNvLTa8HVTBnQ5ruFUSNpdJ",
  "key27": "8uyYBEnZPjCptW1WBSDCL1RnXD6tBz7vUzyPc8mvcpVVJ4TxpoK2T4F3NTNqLRzSMDTw3hjWeSvMhPBSCgfjBFF",
  "key28": "62i565EZZ7gnyGUdw4UPNXUboDvjXy7iMZGezhmwETKpmSJ8uPMYUXY3yd1HayERxVSa9oWCy2k4sFznpTop2EqS"
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
