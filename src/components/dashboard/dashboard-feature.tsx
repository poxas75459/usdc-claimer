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
    "4mGQzmhkxERzpBb6UHNj6WTonBpMfTjgUf4QujY8YW3NQJEhRfwiBYZjKSQuDtNR73hEfjYRYmvtsfNpUuYRCFkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQmCTrDXjSv9hv2AX2Fui9kPyK6LKXwEjwwPGQ2h8G4MWN1TZqzXd7CsKG541di56pkv8DTGeNqd5dGh3ZMy58z",
  "key1": "jS2S5P2AjSKjjVhvnwxvBkau4yiGndmPoiKHa3UuDHcRcysiE7sEJ8GZYeArcAaC5Ey3WFyaKSC41gNoTAwBUg8",
  "key2": "3nU3UoyqP4W3PKkAHQF2iaZVPnMuKMy7UyWfN3KJo52hRLx6vk5zYzFkdaHs72wT1YwvWPSpCbpnr9R7w3AS8VSe",
  "key3": "5tijcXybQWFZ7RapUzMmRDKxwBtu4on3U2UtAtXgGrDd6vVj91SwWk228yctBfGWhqx6vCQZQpwVYfmdFMMGt7Sf",
  "key4": "252i9VYaYF8S3j1fTQUQEyQdhoEPCpte9eqGTgSaVUhJYoyBg3ad46bh9jHstyeG1GH25X4HDLf3PaUkNFw4jC43",
  "key5": "3xo4WioN5qAq7jdVhkEZmzRbiQPWWrqwL4x348JF8GouEvAafo6U5M2so1LqDzRecMvJjsB5LAL8TUFKsHavte46",
  "key6": "59Q55vwhCrbCpBbHGfapKL9W1grKhvVbH2FeY3PtN2iZybQvCj4KnbqT1jLmZhUzXz3wBhmfzzCRovce7rAHkhbx",
  "key7": "2YYU8rmBUroDyrXq9kQN1ZFN4PZHcDP75GTC6gM94p5t6q15F6ZpttfoKpkbjj64TvVhyK669WCyuTZGwJQXLsGh",
  "key8": "zsU9XqUz97bqnWktF4pN4uhfYn5rRmaCNwNdYNav2WKRYk4YwsohpXBuudB1ZozW2Sq7DczBhqfFwUTimcKFfom",
  "key9": "2MmwqiosrpyQNTGvRMfm5SsYPPuL1ygPMNtHQdrooLWkTXSY1Lw9SxTN9tY86aGGVUreUJKzFx8dqKPAZsXcRsuu",
  "key10": "61RoLpfUDzJ97uWvCtfT8hAY1xLgvgo1RAWzuABzhCbonzahZ49GxiduBoTyixTbdz22ttKMAZEYhDNrhRx7Vhiv",
  "key11": "3hc1KWTtacNjHGXeANDLpjhJaRzVPEWor9aaX8mbwKDkGmA5arE7M1RgresEm3bvrekm8GCq7z2G9TyH4xDSQdHK",
  "key12": "2cGnjUAbXVie4iTmuzeSxZxAwa2Q6n37qTighWFVsqft3L99waBbHX1qgUF8MurQ3d5LLgAckZ8vLrZhd2vQGRKE",
  "key13": "2xQjmSZpgv536MxWHqD5oHzYpRiC3V6HEioT3Ngyp5yCqTpT8xm5mv2GpLpLEvdh3qtN9pJEw4MMfF8wSCALZpQ3",
  "key14": "3scXG3WrppemnWFkJSKebsW7R1JpEPdEzHV8e1F8Ush7U113qxEPs9mvZL8ZQW9xt3h8yYzQYJFMMSMqx3FwQsKh",
  "key15": "iChzH8D4PjSEytsWwbD3EJMPbLxJKXZGX69DNp3LRqDEykpios4kfki9CGYYczKEfAMRuksVdRoEwc1mQWWo1Q2",
  "key16": "X9DFukJxxciBrKr26fc4P374K8vYt1cysZp5r3s7xGuzwZdHEFcSeJzdZ8ApQoupawCrVqz1yAYtYk3MDNhHtGW",
  "key17": "38LmEah8ASkdio67Dvd6Zjwmq3xHGV58hgxVno5gWr3S1CCGFLFnuECanf69CSLsTgEGjDgRpEMfFujPtSZfHXtw",
  "key18": "4HNKhSPH6PcXvJUxPh2isTcUYHRT2SJ7LV1u2WkZxc1ZXX3A3DPAvJRF9X6YTQ8uHsFx3DvoFReQYiwKhh5pQnkd",
  "key19": "zuxpb3VBENNaTuZg29mTs2EBo6yHo7eRQGxKH8NriocZqfPNE3uzAKn8WrLuXodjTW4Qw9N2HGcLPuPonsjVvY2",
  "key20": "3WfLjuXy2dd23N1GEcudwa44DKF2LY7w4Qx4BfGDeZ3V7GUQBM6fak8LM7cJ49bfjvk6JKK7NXoyLuBJLDviWkPx",
  "key21": "2W5PSACMsE98ibGf6EGWD9pCqtGH3KEkgnKrX4CzFad2EMyYeYXSTENmHJ2uWRYKjiqKeWgBmXpprUxcHAjbZyCa",
  "key22": "XS7KvpigZ9oWXXDWsf7dXNWobbzvvmFxG7LQtQqzdvRPWYNdkpKhQvehVaUJy6x95u4KgpvzTocSufycjwntaxm",
  "key23": "2cVh4cKqRKfsJYh4vRic25Wg1TjgJK9QS4rV84JC5gCSuDVg7sf4qA3w7GS668JttjbL6NtQYMg2PKc2c4wQgnSG",
  "key24": "4FRe56e7JgWQzovqwnehoyD492ykEEeD3nRFfXsMnBfLo6pFMCzqmerKRQ1ZPPASWeUV2zNa2bAS4cnJz4jo1LZ7",
  "key25": "5S92V47bW9QXmQAcrWAm4Dhf7ytWDnEem4NnGGmwqA2WXQZRjEqg6Fr87ho9kB9mGRhGN27odcrbZ7cuAG8pJJtw",
  "key26": "64w8iyGn7BDM8ahf38nF4z4vW17wY6vN72LCifAFMgCKyQemkvSuY9KveF1zdhwqmFtepzDN13HTJSVdBUCCZ8nz",
  "key27": "2h7j1CDe123E4rQafhFo1opmLmie6NhdnJduExpK8t95EjQmzdyMCcAh8cBLtBgescsNGeRi96BkpVi8KuLDjQiY",
  "key28": "58UMHCnZoU2hnvqQk87Kh3Rw9XN3YsANdRQCFdrLL8o8Do86TjCuLF6hSVGuJX4E9nSaPQJwNf3atbZ69ByQp6mN",
  "key29": "5uCZKv7fT2nKM6CpFXCsZEFmvs9uWdsqh1W12paHHvmMZaUAcWJKMXUuUs8Au4k8WcaHqS7qp8qFUbG3EjZietWM",
  "key30": "4Dy4Ms7C9vPZi1uoWvMvsfiv99ECMx2iRHJaunHmesnAJzgWkEy9vK381iEqvLycsYWr31d6HQBRJhdL8qUEtJK"
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
