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
    "LURhpHhYznmxicdKiBeMqPZgUGW5rSBu9tWT8tZySZ4URJKpWZAeEevUD3QPqLfHMiriCUZV9rq4isQByxzqJbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZ3UPbpccr9NKRQWAd4NbBBz1HfyEsnVj1wqbWoQmRrCbzeFrsK7wKfb7mWPHBHQEYkKvkdMozSDGjkzkhvSkb8",
  "key1": "3ukBuvkHWp6d7WyVZgAghy4Zh6fScTmxvLCNLctJ7vhCnFFdDZgnA8XATUs1i7W5JSiVyw1TemW3WMa4zKEePx8W",
  "key2": "46wC5gCfmFKcxGARU365yBFqe3bsuAFxfSSLMPfV7zATVBTqxsbgTN173JugtYNbqZ3WJGoML15YjsUhhVdwPyC1",
  "key3": "2NA4HmZoi2YBosANvDvrNMHbqBXTud3R9bV6bSzmS52R83Wt7hzb8v79n6y5ANGFCbSYVBaBPgceBAxRKy3x7Yr2",
  "key4": "5hc6fJJRrxinZys532YAYAxBarTyEAacJMvxVoUboN3Mx4zeGKXGJhhJCk2r21F5RE2i6NVdRMxS3anUoaCJJW5L",
  "key5": "2hvGz4qZS4kqqUZfDrKzGoqvUs4QVE33bfscRXeorWB2AKgy5RLgeP7VNH7iskXF3dAAoTqGQeBkMABKtVkePoSA",
  "key6": "5i1cJV1XrALCFj8yjjQE79M8VYtktS75EcTFHyUEN7qWNNvYc4AyJAikX9GeyvSipe76N2CaC7iMKk1ujpBHe9MA",
  "key7": "5gnhNyfhLPS84ji1tneAsxqvSrQ54mvcAJdqdfvSzyNgHRxQYxqjEYijYWJecSpeYwHuhUKbfdNe4RPRiHdAuh9z",
  "key8": "5U8ytR1C7E88oH1v6Ht7GKdErqvdFmtrRv5YS3x8A4nmV9qf17MaJZYbifgBf2yRXyFMqkgF72paF61SM71V6EVn",
  "key9": "3NqAqm1natAkeReaKmxQHqGSfoGWSnUdUyU8Rp1jKPA4549i641aYCQGQq2AQdRPJovD46a9e5v2tMBRV46THDX4",
  "key10": "2y88CXkVcpU4yEZeE9GjZC4QbZej4cY1WrLApQsMnqoaLwtc4pdFHbS99boWVJYGpKRyhi71efRSiznQVrxEszLm",
  "key11": "3Ba4ESrVfe95T2nnv1WWjAvaeCFidGPxQjunChjTrTZAD739uEzXeEQvCsqcrMecYem7dGXTbwNGuzWM3AdDBqkg",
  "key12": "2R3fr1T7xqkaoyuBRM69ygc5mi9TUhfoTeQnReum7wjPmREUJhHd86uzUtJXx319rWXE78dbhLX6KgsCMQB45Ris",
  "key13": "3dRGEK6Z5b9EpUDRCeZAppBhLEVHd4xCjRBKBtfC5WtxqbLsecXQVU8RyANbEs3pb9HmSmapzHVbUFJs8cKaLLD6",
  "key14": "2AqxRrmmvJmRaS3wWdAnFiYqcENWefVADNwQvQPuYmL2SBny9P4FPhwtfwCAvXzdtpzSredKtTP4zrqJtYGyNwWo",
  "key15": "2xDtBTeGucoi98w28cT6b1MT1qkZBTLLqH5A7mtSZdVMwkpDBGUm494MpDw1JwigRcLHTdk3Yp1QXjCajQYBTzq",
  "key16": "3mk67QswiqJwKPgZyaBxM1sLAV1CeBe754pPwQ6v5Ry9KVNzQ86boHmFYxJsxPoCyuCwPPqhapuKKCnk7jert86C",
  "key17": "31mSrnMBxTZK1Gn5nYMdt8469DPWfrwvvCYXyH8d4LXg9nah7wewL23rxs5G2FwHaaCDvquceXXhckkhbi5s1vhz",
  "key18": "S2nhR4Q7YWV8fbCcBodc1QMt6pWkuCLbNnDxXTgnRNTPfyrMYGLLbHoHTaajmA1L1aDTmwqZ2oF8XYSHxq7inAT",
  "key19": "3GorYAYD4mR3eebkoEQh4goVysUygAvBk21MHNyXbP9ckdmG6Esy8bairJBJyD9SVr9Z53aWn1sNyGm7vTtLsDuj",
  "key20": "4iQf58b66k5eUwHchcvZBxZzFs6uPDKCmFpF4HUSwPX2QbAB5NPqfhY9hxMJaqCnkKx89a1KeuAPNGg8ALV2AQAH",
  "key21": "21qWrpa2pNTwf9p29AMRs33acUVmwG3z2pFfhHcBBMu83pSopKRJCPvqYfadM3pjX5GFop6772FRCKafbSbY3Fyh",
  "key22": "vKXwo1vuRSDxTDEyQ3QvsdXgae3Me2JvDSBAA5Lz4u9qPh6Cw2eoW3TP5PrwEECacJoh42BTsDUfZtEDjDbWWMa",
  "key23": "3gCjeRadrveJjhfcyhbFMMAttBEuoERAGNzeRapgyjboobStFr9VaNKWCayzhhdugzvBoMd6V63YgcqvHoUNUPU8",
  "key24": "27y9rL9Npen4UzpL1NCG2Kc8gc4PPexXRriRcYBKMnwETBLFpdwLZeQ9M5uou9uLkPirhFpVznd4Lu5QHMdbc7UN",
  "key25": "28KNAJWKsXC4enuj6JU63AMvXPVuLpcuAG2WPM7Bku3a7cqJPKkEuy5fvhADo3vEzWMEDq5yCwnbqNeVXYU6NXE5",
  "key26": "w2u94TLKAV7y9sx3No9D2QRQrRF9tQvynnmgFMUtUgium3XcqHTKBPMPBpVQtJwnQF9BEvok6HjTaYFYZi7vxGQ",
  "key27": "5ejE59nGw1mV2PJh1wzDBthiTyNmqfzt4MiL4J1S1f61kwTAPLATA8pymqhMxUNurFQsoNr4jysr1Tycz8dhdDff"
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
