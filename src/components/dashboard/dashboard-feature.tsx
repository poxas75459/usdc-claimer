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
    "rWfHTmSSfZgdDJqT2Nh8NZaZukXWbruSk5tG5gdtw39SY51aGVoRM6aNYGFpGSb3aco7VQoHvoTbQSdQ9YSkJyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekm3yK3fd7XLzSph6dJoS4wdpVKCtNkgp3sLost5pqMJTC9Efyd114RzUF6rgU11xe63Xs5eB5e2LKbL29htv1n",
  "key1": "96nFjdexsSrDMf3GYGik47SD3CJqyEbqa4MpAJsbE3nCw9n6Axtd6A4ZmQmcjjdQKitEbaQXqoMVjHvkcVBdXct",
  "key2": "3YXpagCnSNN6KwAuUkRTPRwRa7e5bebSpgqwDuXTW76zSBQGWnoNQDFWDpsgFS4Ss1pNYUXUF52asKkiH2JVH7wo",
  "key3": "4jBbXgSQkLHdrgeMVQo2iE2tn76Lpnkw6DtsViiqceEiZgC9iutDdm4v45F3XagqLKENxcooDL9WA38HECjuKR2m",
  "key4": "3bFnGBv4QDFXDhZivtdWsUgW12C7WzqPjLsnH5YkEGnouJtn5ACxUWDZDM7r2Jvs4WdvQUtLJW71tpCp1H6hJmK6",
  "key5": "2fRanCXyoR1NgEhnZdfAUgsGGNKLDhRsENchTjF7Ei1wHcRVZFBg95Z9Nr4uVPZcPd6fH34Avv5RpgkuXcSPHpEe",
  "key6": "LYJrvKVHQJxhkhD96DTbqrvQxWfqeTkznFuWCsMDGRPDSAg8wfhvVHZ2ooPaEFBrvTXAMxveytbKpzKWREZhRFk",
  "key7": "4TzEJcL6NoqShBt7RovAWjs4NVoL8yoWuWqVf9ib51p9oBoyySbTfPixFzeAfJRmmVfQ1gozpg87L68vg1muY5dQ",
  "key8": "uVsGQGkpgpEEtEEhRr8WuvTwCfEsx8MfzUzYdeVTG56DUQHZhGAYc9JiWU5PStasDWdgtyuW3F6V9tmueRSkivv",
  "key9": "4jx2opLb7LLLM1dPpEsTnHjNyFRw8F1vuoFEK35eTvve1PB23kUD9eVqFm9oiSeZ1N4WDiAYazvWEf3HiPJJ9qhH",
  "key10": "7Sy1jTe2JgreWwc8EKKBi41ZFnNSnjpRurJqnkaVu4v7Cf9eeNigsdcVejCrfNgSoBs37SMZ3q3uuGA8pNmvs51",
  "key11": "gaQKFjyunoybxmiEGVjgHVTTeooWtT2XFQ9HG2fY8jsABQehqS7yR45sUGoLNUfLuiw7eRuHKTf3TenCve3q2ZM",
  "key12": "64CtAqFtG4BesNunF7Pkipr6N6LMCA4krmHT6mjJw7kKMmQg2WxHbUEkgPFVBbD4Tnucp8pWH75FR2CbnYTM3T73",
  "key13": "29ADBnPvAYq2SBb4NvL9e28a5WZgW3xcH1YKESiVAwEZpK8SgHT2ktDa7cZyGP1hXbrfBM8pTXgUDVCGcZRWn3S1",
  "key14": "2c5m7uYm4jEz4aALNXzah8ZX4p1beeJwzxNaPYLSYdQ1nJa11Z22N3WnYwLsHRHg3G2V3m1DotJqx5fPK5X1DaQj",
  "key15": "5F9fgkQwKBKC6vcNK2Cw5ZGDcHfVFnZ9W7GG2yG9C5TMLMR8eBuxMzHBjJGTxjmbQts9469r22dans87f5fvmwpd",
  "key16": "JSenJugYaL3kvxoADby9EAiAJLCdpVd3ScZqBa9WbaDKdfhHNrmfJJhcTyvtuRUhWTfFC8u5Pp61EVP5DXnMVep",
  "key17": "5NDNLGUcMpdbGBrLmm6DiHoykn36pRFHFqT1cgCaHJdtmGBERpNCtCBAv3UihBpyT4pRe3FgXQ5YgvLdvLPL5c2s",
  "key18": "4RD4fpLSGoei4m2HZkT5awHsHPopNbEpTq5C1upZNWBHo9ZqwnJ7QaRV3UmJo81T88QG3PxPRNdVDzPQseViUnEp",
  "key19": "24MJXp9KnJMw8zmqmy1AXLbc9hNAPetvxWdjsSWq4j7qRW1ccHpMnu3pXyzGyr9PqU1z4wFgRsES5viFRbBYHHH2",
  "key20": "2xWFZ2ZLeg7hu21QXjkfvaBX29EZ8ATnNSAwuXbjvUHwF6Q9cLkGvfCJFnmGtWyvjSCu9RUa9bx7JXJF54sbiR9C",
  "key21": "5XD9q42kEABeRuQxs3VUWwwBcybgw6JWmg8AQnanNM3nfpmms3R1jmSjiY27Ymwr1nwR9J8wDbCiaqkjypWDctB9",
  "key22": "448emN1LyLuXC6ik4DcVMYQ9TywAN3G17ZJTQjjrLHkXj41WEMozFnppM1qEn2vWbEUs2UwBUB74Ja4QNPC254Bw",
  "key23": "634FkEDpuMtY5CmsbaKrZJAqgrRrpbcep2AZU7Qc2Ybj59eBAEYV2znGx8UtwZh2JkA1pq8p1X399wygSepekaaJ",
  "key24": "3z1dZPT4wW5todhYwWLXrRnM4YY3FjmirEjJAzyJwBAppjnxyWYxt7MojYixdf5UH8bDrWLJTKEXmhuqRGVxhvaw",
  "key25": "34TmfeRYLNm52dgKoJKSWCY757PxVmxwXgWF95qy6ZjGgVD6jgnP8QZFRJCbdhwFwnzApb9TMFkP8nSLHtwF6Wwc",
  "key26": "5CuhnmfFLYPtLyYTZWaVPUnX1kaKQtTwqyJnQbQEnVQnosMmuXugDKuXPL8fn9PMKnfE89tQuwqtbtrduAc6YCsg",
  "key27": "4Y6bShgor4wcXyK5EFnuGGabs6ny1A9xU9gP4Mgckp1FKF9vbjhkyXpaENkHbuFzqaw8bzMew1Eznam5vE57L4tV",
  "key28": "3fk5orZaFKoz2AmZ8pVEQjsBaCZTVwnveCMMjaExQ1FmShURb5tKESZxKKTMbD6oSRntRA2cSYuSATfNUPjngCqi",
  "key29": "3u9rgbdwLGyxW1HbdWxFMygY2NdhJ4MySKQ1SZFZXYDo5qDBBgxbvJMf4NU6qDSsXBd9Y5bSUe4kLtD1AppUBsbT",
  "key30": "5wLFrXDJg36jSR88QoKCdvm4DwxyJ2NRVU677AYjrHXNRR7onADMGFrbm3nk1mjA1SEtDWpuLDtC5P3XiKwwvLeD",
  "key31": "31ooiy4fWK1Eax4TveubrPNRtW8i7usdzncxm4kDbU6Q8437W9im26BPLJG8wetuFnfx9unoGuZ1Q3HcyRAzV147"
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
