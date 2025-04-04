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
    "4r47eTeZdj1B2GbKyAAo5H2tSDhurNHnY1sPBy42s38iawM3SDUF28wnadTxoo5e8MxompxEQzocNPdeDj9WhFuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "orAU4STXE6rqoQxrrdcH2dG2mzKtYDri6UdagDYmj336qQkzsqFCTnh9aFjDGpP3mrjt1MFaqC6anJeJiYqbUyP",
  "key1": "4946eBztKCa8SQDnxRsboNfcVaA4G4K6nng4pAko8Q5Y2FAdnwvPPEcWrNvbDch3Epr9sRC7Gh5WEWRYSP5FvF3X",
  "key2": "2pR5wNnSNy58pPWTQQCjia62uAx9CQ5AdTvaiK7U7Jx9JxEjZgNkkvk1He46s1APcgPVN4U5c52RX8nXB1HLTqgz",
  "key3": "5YLxMPCSvqhWmEFEtL58wB15vBKmM1m8WRexh1XTAuB5MigVPWhuxVMhCRckCNPa2teBkNWz9KdK1TYdeb8y8L9e",
  "key4": "5a7DL1Cj7w531nfduqqAcZi74gAkiLRkwSAsDk7fgASrqWDyPmmwUwUHz74Vp2oH9VnXreNXagBpQANbnZwz1mEf",
  "key5": "3CVEsXYeK5skVGHoG9P4naJqCtUkGHRVhpHXEtn83qhtmwM85YKTUeEviw3VMD5dFHPRwn7YBjigEfAo1DYuAmcZ",
  "key6": "3Ftn527vfovuPG9eu98si9Yo5gKrCnJYWGkpaxf9DpDEHSLNg7y3ZmW7Ey1Q54VgdahV8XhegM6yMWGxEAiUquuN",
  "key7": "49jFtZKXJkvHXt9qpo9KKhbUGqNNqQYfVgmCq7ELEC3qvx4hAUw85EbQZub5NoyZn985xfRhTP37NL17KcPVzLGo",
  "key8": "4zTKnmjPXXundP17kR8cjuA6SrwKFeUqYsH44omyBsyKYfeCzCvXmMso2CBi7P8NVnFEfdA6gqqF8siW6tiawN5G",
  "key9": "52K6tugWKZnTd861AVFDAALzqnBsjmPcE9Q2T6BcTzmkTiZQMmvUgQZgDg9f9B8BrvUDHXrGHqBpRwSkP7KCCvCS",
  "key10": "2AiWVtASfr1NF9rSoFUwqfb3dA6aLCujNHeUGHH896zmNxu2LJkttDQ3HFuHEH4VoYe9EfcfqAp134nr3gWDA1VT",
  "key11": "4dYnPp8CKEwaKAPthUab38ozqNA7LreL1qLeocA2mb3ePS1WzMbAYrQ85MP6R6P1WA5wxHerKP8tfRimEvc8YXHR",
  "key12": "555U9GpQQoW2sWw6Sj4jwNiX8TcXZyzUFL9VbMcWKsfgigoXSQCnhj2MJRryCjetbFNMNdNNDn5K8nTdBUoceTFF",
  "key13": "3ApsKfvxdAUBQkW65aBafHcABQD5rF98S22SnKGdevNat2zUvP7zEXnSBj8fnEWA9hQRUyJAkAPX1RNQJNHKbTtr",
  "key14": "5GNSJhRZX3xdPaCo6N25irHA2VjQGykitYynkZghRCYuXKMX4DumnMu1XCLzCYGWsV6wCL4bqGkeAmAUFms7Z6ZL",
  "key15": "5FtuExq6jtk83jZT51mzKiUu8ndo5LkbXz4w7up7BDEpZXSqZtE9MJx7Ge2AGT9vMhkuKcH84AM7sYyKgJRbnkgD",
  "key16": "3q4ZpDEDYpHGQQUB8FqYZNmSUxG2jneSuX9hzF6yeG5vLY1uPaqLVSpA5iuUajX3rftpBKob3Hpve2tgRXaQN4YF",
  "key17": "5eHH1EGHWKpYFoyK1y2NzcgrRjLb7zxWnETgQRzpArSwPcMF4dyyDLv3BLQC4GRB27FQoUGNgs8fNnFEcHXR9Je",
  "key18": "4VCUdvAHR2mCAJrCKxUuJwyibZSyenJTLr2qg529nJDMNewpidHFh1xJB1vFtvxNshLY5DzvGDy6MYEaEn8YqUvV",
  "key19": "3emYgEzpRFyWNxTMv2zdmA37U63KiqCyS48uuhqtzpCojKCafuCXhrc6jXy6EUADPSKjrcMQKNsfizwgy3p2imV2",
  "key20": "5Gsy5NRq6jHJagzA9gZXGvXf96BtQL81sB7CU5apVqykpzR5gHKLXwAVM99w8ZMueKtxrAt6K3zjkWHXfYTrH2R",
  "key21": "37jJxbtWBd1CruZGrb9q6oJdv5a6aGvpgRNg4BPqmYFFGazLx8CGtahKUdAEZNMQ787f8XVrGjKEBAjaTo3HYLnz",
  "key22": "3SMLFnXhzam4Tk91CHiNunQruAKJxXUbEyj7ruCh5zKQpYUsEFh3esPSi2RywMgqbTnar6HNu73GABwgfoGGn8T4",
  "key23": "8ogQuNEZaa85q6CijbpnX7tzo3GmHnxZ13boMXjQZg7aNYtBV5vxhC8Y9r5Yu6yDdQKCwHYz6GkrvhVM5iMWqG8",
  "key24": "65eQhpPXxbH3Aa5Wgp3dCXFKjb71pYnm3NUnkmoQsmvqGkKpbN1DwSvZSt1W451FmWi4hXTYTCdWsMVzVM3LPYM8",
  "key25": "2kdYkiMGs8JFnQpvZFWaNzer3m5fkqhDZiTYxkJt2kqaMkiyjvJpV4F4ocewoDvNUAUpv18MNS1TJtWCdNZxTAHq",
  "key26": "3VJRGuseAEQVnnBrAyVF8H313Gic2VBqzYRq97Zjmat7Z6qT9jtX36earzfFpUJNsRpHLtqaaR6kCfvBH2zT8VPR",
  "key27": "2duzP7PmEvSUkrZKjoh3PD6wM2E6XA9fmLFq9hxqzadkdr846jJpzFut8LKQ5ZMFcWkzjH2QjSJNCQKA6s5Bj8xx",
  "key28": "19WocDDQasHm1vtowhidr8FMb6Uyk2jKi5F1ktNNB9dkf8LF374q9z83fZCmkvJAfrpaP97YyzGgTjFFAz6xwRx",
  "key29": "56dZZ3dWPujhrdNKPvqe1Qukf4GVMmTmHKZopYAWiJitQQxnxYYunBfeQYT9NuZpHeb2yC5KG2f36gTNDy3ZhFRE",
  "key30": "CMvZAB78jmshsDbn2ccxTMo5Ufc5eYpxFamXkYZhAARfTRwrPfKq8aycpqPvUwc2q7wNH3RLATMoUVq7dWXeXiH",
  "key31": "icC1CXrbGz2HTWCGRxRhLKbSbiuzhr9VZEx9qQw14w9S68ZWjVzjJNqZVkf3CWAcCXf378JuhK4AkFAe3n5HVyu",
  "key32": "47B3PVVVCMaRFdqg8mGppmSiuxXKjgp8D6h4nDvDhxrRfWYmxTTHkNhMKJ5sR4DQHrNoH6ME8JEBtumfmw3VArnb",
  "key33": "5LFgK9c2ihsdXG9uSFhZHbiDEmx4J3iJQPxosHKffLsS7N6vvSXynNXH9sRNPo2G7YyT38KZpULQ7pw2LeXtHXnV",
  "key34": "5tJYMEpgbh5NvYkKM4Y2Ctm6xXpueBknNtbqCmDbNcdu1pJ3Y4PCEsaPQY38RwBZLY7EPUp2CYsH2LXsDEXWE2JR",
  "key35": "5zJqWxwD4QnhCrcJhvTd4pyCwtPHkoReZCqUcRcigSve2rt5zyVGSxwrPn2UQxAKNsRHeawvF9SHLEtmoTTdiHui",
  "key36": "d48Zx2bKo8ALRacfzeYusx8nY9Nu8MVn2hhE8PQFX9Ka2J9dEp5cLkToXuC5x84LhtjkjFL3defBjposz9uKuzZ",
  "key37": "3PSZfpcVvEVxDRyCdDZiHtpSjAaMv4xVbxxnQ1fF2Dgpy36JGm4CqnxFmmkzr9DhPgrX5tHfe4t6kVMYzhdGjhpc",
  "key38": "5cFfmdUxG4kM4G34fiBuNTVkjDq1QbamzqaE3AVYyqazRui3u197ZPpvZQDTfc57E8UDYpfw7tNzxxAUSV5QeRo2"
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
