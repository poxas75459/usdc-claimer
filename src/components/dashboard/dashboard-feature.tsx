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
    "TVPpC62WPWRBA18xsggFvEmmgy6tZLWBpE6oNVU8DsCNXSqbUsyxpzPaTHSesCdKrpg5tBrxAWC513WUk87uLUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCBLT1xERTMMW9SASWrLguxQp189BDp8zJPHXPqFYurXAneoLTTCqhGQkohBekCTLPrQZdBdbMAcfzQyfou2L99",
  "key1": "2GuFE1e3ADVWvgMZkq6if4yoipW9WxTwHPtmM3R7KgC9TCuCdUkkDSkkgUyiPZsNtcZzxbJpZZp4nwxjKd6JC8oy",
  "key2": "e2J5utR6dehMDWTT7MWa8MEHvwaXC18bMxkzHLBf2urzQ3MWfb3FJ5bNc8eNAfsUBTzqnaUpcHC1KpJfyHNguYz",
  "key3": "p6wzyDwq6GqPFRpQWkmjZPhfAuWdKCaqSNGtRYU31v34UVtzM5EdEitMNasE1C8oexBgaVkzvLGNvZvKQrdXfPH",
  "key4": "6L9sYtaSASHzpNnVdWrpreRufVJFWQ8KN2idfPmsMFDhLmdM1Tn8ThHpaPUfu1jvVon9AoVugvo1NYWPr1vW8ut",
  "key5": "2nXBv7yPJfHgY65dNNah1MJyrV8ydF44pqNZGfSeEpAUSXvsZgMjHBFD3Cptb6TmU8pgykLUTBvGfNvK9Bdah5Sg",
  "key6": "2JTun2h74xMbLuA5CnmnduXtXNPK6PCZ7K9Harfq8VGmvrV5N3N5UHoSnmpNgNr4Jfz3BwZ8F9ursn4vkY3NTe2A",
  "key7": "1amLUyL9RvMuYFS9RwLAeVqmoJvRgPZQG2aA9Apan7rax6xGKgjjkkJAyGNDvAjiktYpLcFADayy1o839zjryHp",
  "key8": "4H6kjZsMymdwZXWw91NpSp1dxL5w8cuZERn3iD2bPfT6Ps6Q65m6un8wvyHWKP8dxESmDWENxTPTADyymfKmFLQw",
  "key9": "4ede1DsSSNnUJzYLFfR8TaE4fsj4FFDGMkmJmnRcTaccZC1Cy69uvSCtx3BEUf5Mjm1YJPrSb9BQNcA3JpzAM9ay",
  "key10": "iGKrBsDAwTXz1DKLrinz3RsQUsCSmGGQv9qwBA9NgxVkzmwjRiPtXsNUaeLZ7YwHCGGpKEp6A6fu1ryZ187iT3C",
  "key11": "BbSFdvmFaMnNQ9VQfSYA5SS3GtyThw2Rhz6yTufRPeuGDH5ekRkGGVc6NR3LGn2hBim7ZuEHbvihVHAc7TXyuGv",
  "key12": "2DbPsfwQne2baQ37ZuszAoJxsakYwZzpoimVqjsNzM6DrmGtvjioAChhLFnKGRDZ6nzhxHdU5WnykLgYBwh2EaJ6",
  "key13": "bMReMqq1MpgL9GpP9VdHnAB9rdkXgZgVhvmycRgaVJP6ztLBbKYiPo83cwTKg27TEUNV1ReggRsWKvMd23zRtdr",
  "key14": "4fEF8ztPBDNPkJ9LRqsWMCTY6jPSiYxmCgfi2n9u61oRsEHnB982cJL7R25R688yFfZcEAxMWfdWGSmZDisZN7QN",
  "key15": "4PWzP2oJND8zsYhMdx1zbpanbXp1sVXCCF1XU8zbC7FEBb3KFkHuhGbj3Ws6oi9nJraRMEA8ApFxp9ejT9XkmYcJ",
  "key16": "2fL5saAKausn5Y1jHKgGTd1WTdXEeEifTHMHvDhsgLbQbGDDMXYugNhKHegupHtHfb65PRj2EsWsc5gHV1SnF7D1",
  "key17": "2T8yN3sTwqoWa5E4k2rTDS8YD2ojgd8WFiQ5xXj1bhscTaYRhveCUKkFcuq6Av7D3Catem4sEoq6eKVCtfir7FEy",
  "key18": "2mvpfy9p7Wdm5w5FJKXw5J8vRyfuUDCW7SqC8bj5Ex1U1WyKvkpbxLqwqKdGy27jyQywx8NDTyhoq6zU4qahHyXP",
  "key19": "5kbzzkRSsmqcyc1F4i5KbfP8HndQpXRV9QvbQWa7GHWDQZ4JuWAqfKZPsGiZTiVhexy6U8r2kYaRnJg6B6JQf6EG",
  "key20": "63QT385PET3P5jmQ8fbpLghDwbssZSxipJRpMzbCZzyVdPcMMkkC2CLcgQG981Gs4SvZYoLvgydujiroki8Ce7Kn",
  "key21": "26gLn8XVQ4MAEUAvXjBCp4tdbXo7C3ZLTpFmVZkazpaYzEJe22aXhWAXbNE1zcbYXCNSonCk3mScrLYydT5bxchX",
  "key22": "4UmrjQ3SVWeNNYFE35cbgnvD4J3Ug9KMqbxyVfSZoSJZWjRKDQT8A74Z3quhfYnrqmNor6ggZqQsBZtxkZUiKLv5",
  "key23": "iWLJz37CDSzt6nhhiaGpkKMknZsWa7tSiaPaY4tzBRM7P7ag4CcawrgDdLc8phheQgbjhAZBnq8A5ndgQvA3kmm",
  "key24": "3jubZizF9BsRZQBPrQF6zkQiHLDGL4XAjrXATPGyQ5rwnjRCeCDdQTAWmxtpUxZfMidrez5utuAi7Xo8apfVYbyZ",
  "key25": "48YYjf6E6eTdFVD5r32jiZbEw89NBa5TcFH6S4hqdkK4Kq5WSPgMq3dwbVkg59G8S8MqcLAWSwHMhQ3c7qWD77jF",
  "key26": "3QwMu6gBiw3RTKTNVsjrhGTqCm3LyB25nW9FYVciAJfAPrLNzQ3GBdafwZoqSngpmRaMfk5REB7caNcfR2dLW34u",
  "key27": "4sihdgKMY1dKQ2YHfK4V3jTUMHizVeRJMTUGwYvYWPrwpFB5ZEQjHTMcyziF8hqEARQsAqHn54QQuVzWdet2iHBy",
  "key28": "RC7ZSD3xwv2C2HK6QfWHBkk1H6K2Y7bMhfd1kPHgWpZNzwb1Pyvv9hCEM9i8Y1JJwLSCsunCo7apTyUkzvzhJXE"
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
