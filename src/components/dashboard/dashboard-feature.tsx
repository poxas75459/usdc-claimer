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
    "3RYArhw8toT71g6dxL9d4owmaivXr3MqVkKBtP9hGfpakobqgqkZLck4RG3m6MNYwcrGE6uhKsL6VjNVXGSZKDw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b67vwVD25yTqATQR9bbwUh4z6Fc7ts7UYtdqPac9VrgG3iifY9eD9mab86fuQvjYzQz3CWpxuTVZNhNZPAXSVL7",
  "key1": "5QzoiCTmA9tG5iGQiXwB5zrPtxjdjTpNpxVsSAfnGb38sxKMT2jRjb85KnZgZug3RRJZgw46ATrvkLanUJaWrixz",
  "key2": "2xbNWNZBrAWNvctjgUgddPophscwcA9kZdB8XHsn3knDKhWgLbJ8SVqViM2fHbWZXRaffFbEcXM2UDHKWWo9aELq",
  "key3": "3HSaZxsGt7EGFokZXN8XenmyRihWXEz78CRRc36Eg3MwzejbGfKVMMf8S7hWKPwrzgMdoYT9d6ru6aqHg28YBV7V",
  "key4": "4nVXfkBBitFZANcHL2ezvSWsvUZevKB6Md7enAt4e2NhxxUeTsKJTsnn6ZW3zHxSVnEBDoknPTWfr7R6LocDE7jV",
  "key5": "3MD8PdA53RPFBEb7G11nBQ5SvWvwmuDxoQuMEHQksUrCSdBig3njoKAzozkLwu9VTxgW4eMFmBihRDXG2ciY3R3q",
  "key6": "2ebk4AMYCvcqaMKYXmyDGP8Sq59Prty3Z7RMZPjMMw9RGhJhAhywJGRwYKGN2hJH3AFbsi5ACVcjFCaPY1JrXAu8",
  "key7": "sxRhV5GGjuaujJ8y25hjBVCSXuC74fDCris6hcVq8ZnrG1tvWmTfebw9pqx8QDq7X3aJ6QBc7QVQuqQPaR8s9Nc",
  "key8": "2wVQszS29dMfAPsfb66JnuAG43e8WNv4Fv3hSGdbpKy6J8sBc7VbFrmCotwEqTjPqBZUR3aHTdzepCwLdFc3zNQM",
  "key9": "2T8RXqqzTFN8D3G91cEnh8AcwBEGjzfx45Hcrhsj3NDyN5LYZcj5yLcb4R9jULenmihko4CnMb9556DR6C5KHudJ",
  "key10": "3LKjrju8jRYk2HWNpQtYDMsaLgeMnV21xfrWANDDzE97zhFq7emJqw1LknEtDccehjEZv9ccA1npBB27UgH51NS",
  "key11": "4dnNF93bNqRs1hWn4p7pBKsbe22PyJ7GLpHbCLxEhB8xwr5DXw7AKeePAfSMXPDum4ufCUup7o7M2EuCxic6bE3i",
  "key12": "2s7qCj3yAAai2VT71iWrHJXBGydf3s3FBaisNTz6s5woALQcgobt1FETUddS9wuVkbzzoAdpzUuS89n4A8jGThYZ",
  "key13": "gcJFHmvnmN9o4dACityKjg2QiweiAoMLRQ358yC3SeeAWY8bXhPKuMMykpZUPur6xDiQph5TEuuvCtbKM6b9ryZ",
  "key14": "3HvCrQKLf71W62c1BotVbh3YinNUEdt4Hc6aLuXWoMAneQM4v1eEwwjHrqPivgyt1RP77aZadMWAeCiBZ3e7xanP",
  "key15": "3gPHA8WDjqvM3pmgUcrFuEdtdoog1nYzXnpgvhktVBYk8ikC88pq5FH6bf3uQTdLCgc17LzRNDU4mGcvz1sNUb99",
  "key16": "4af1BwLdED7rGjyCtSPzq3571ZKcp7yHNa5ipe3fT24KphagHS1QCeGjyBNLNHHTecY5gwDCvvZAreREtrr9diZY",
  "key17": "2dWQgwwy95CjQVgmzWsrJJN4Q2u549xWj8XwzEHQtnL8MYcEW6nyGHXHMki6Wdppdi962AUJE5b1GEKThX5puNMX",
  "key18": "3qWLcPCYSBEZWhJAAwNdz5TpwwZTydjumQrPrYWZbdy3E7LRsErr5rHAETiuwZhQrQhMpJvCyETKLB7fKjzBEnbQ",
  "key19": "3A4M7SjpZuHmVAmB7Q8teXHszJqp4HqmxhEVEER5Jmsc8bGSeeVyZ6B2peW1GHxQk1dJYQ7zxSUZsmcVZNZEpP8Z",
  "key20": "QRYksLttA6rnvLbT7EaAZm1pfobBFqi6aTTUsNT7zzYHT5ZdAgyznDZN2uegXifFmpjwitaH7tyLeRsNu92JhNM",
  "key21": "2apPNnv1WhiJziix72C2iqubJziKH4mPncD9RetoxNMe3f9nMfw2Soq3i1CpJqa62Hb7ZFsCg9BWkCrDnspXv44L",
  "key22": "3pDYsfUSs3ym3Vyowct6Bnr77fQSgUpnNpvkHSqcAnzEmBS85jKVRQ8ocP8PiA9sMxKLwU4RVwbKRtfHXcSXkSnU",
  "key23": "4No3roqk5xLdQbJtWWTyymAzmadKeftY1D3dc8vtk1YHZ88kDak1HTmbekaYbi2xsLLeps59p6VGwvuRH4Xq3Lia",
  "key24": "3shbo166hn9GZS4og9FruhwsHpLVw8swypMFJgNEF1Bn8UxS4kwjSeUMGTMqrSPmais4XzowB35kZ2oVkLatgh4G",
  "key25": "2ZvKGrwZ5rRGiuZBC64cmZ9zprGyH2H7AEPBoBpN8w9c51jPq8h2mPNPQZ9wQdHmY22zWyvGZC47x6yo7Gpsbx3c",
  "key26": "5jiW9VMdFrTaesb1vFdfLPgNWciDj5rdtEMAz9VtQP7Gp1AuJi9z5HLEGGcjhXKxgaucVXJLbUoLLzBv5B2PiM9B",
  "key27": "3vypC5tuLZc8VezkHFq59txYf1niasouCN2pRo27gRze9BUYHixLv41L3azivVEK1RNPpTsfRf3iEFki18fCKXvi",
  "key28": "5FQfZTWBNSokViNBWZEhs6yLAjZRsCYgbCk2p8qKjqBeK29RqxhpWUCv8HAaichDLi7pLWSLwmEFBBXNkFVKACk4",
  "key29": "42mRre8Hs4cNXniG3o997vrsb1acGH5gGaRzwDeKmBC1ivcm3np1g6j8Jc3MciGHwRkZhvXGDmnN8Z72YweW8CVH",
  "key30": "4foBVdA9v9wr2NtmpghdywVk4FCHnBjzsz2ZiVfJg99uKRg5jz8x6Waf1kDxzuLHmMem8iHKwmv8vG3KY1zmvCc1",
  "key31": "5dM5GZ9mXWHCAATdVPWxnVqYmYJcXHjp9UKK8ozU7BdLyzcBdDddDHH4xUMHLtqWvZ9Z2NuB1KJJiCGVPaH2aXqi",
  "key32": "3LM4nBNKvehdcHAogMjUdAhiwYkAMPm9LQJB2r2gXQ2HCrJSiMz8Du8N8tnaiVuXZXH4HMUj2yozpgRVPj4ktQ3X",
  "key33": "61Z6WpckB6tvZiG5rTmgjHnkFjRe8eacRtTZyJpoX8jquzxjTSCf4PZj1yBtKRDQc4NEGhsBEurHy7Ph3tvV7Fwq",
  "key34": "3xUj8CzE9PCnn4aKX4A2ykyNZ1HFKb9wmT4uBznDPyjojHzqnU2z8kvwqPNooKr69S2kzE4WkXFnSPmnrPzAD8Mc",
  "key35": "xST9GP6Jxs2Fmcowbc4oh5AhzaHERQdJBtvWjBZrsbqRQeKb5ehXbwcapxyZuZ762aqBmfGn6CuQBWso3PhDDhc",
  "key36": "4rmKBCAoQp1y9BPcGuvux7ghKRpydrt5wV3mto5YZnkDGh3t74G12buZktUoeXBTjWPkvDUCo7G2AQX6Pajp1cW9",
  "key37": "s6o9WdR58xUiKwNx8RuuW5TUiARDrWWar1ran27SDCduiFYuimAb6r8aq6BhUUYenmNnwfFK39Ro3wMj1TPyJCu",
  "key38": "3v5TADKybf4CZYPApi3LzFuAqUvHYg3QebP8ehzRv4eYguwV9eouNHoqcgSvEqcgRwsh6TqaLfU8PqVL9tVT4pE6",
  "key39": "yPupagtXX48FFSZ7HisF92m4KWy3HLsicSbpkkLvCrQsvcKEdWCtDGJ1T7jaWyRssU9D6QxZwAWbGk9enZtirbg",
  "key40": "4XpuquvY746MuztQQCmDaGzcPPSVRAvHHcrJ72MaN2sHuBhnDAATNtFZa9KhsGtajbNdoDPC4TAhKaCcgF2Pu7MB",
  "key41": "1U481yo9mcUJ8oJSwbMZzX7dmdE6hcNXyLg7JopMkG8u4nVrWWtzFLcy1q9Z7NrjU6CiTZa4NwBpMQVmwkFpitX",
  "key42": "3J2rvCcKfFmfWT8gQVfXzizXKQGbcqRjR1yoXhcMLwMCssbYrnsgJbtSbgzwdSc978BJqRZZX2He9SBPaHHU1Bic",
  "key43": "3NzAULMvfuhzLHJVAg9qJgWHRbfQciirRkFaeASDjGhrxYdwrYcab2dagcfmouvGnhaVsgSYeFzNtEcEG4VEmXRT",
  "key44": "3wsuosSn6ns8FMkmCFfGyH2Tf1nW13bhaYfFfvJCpdP3GyWoD5hk4dHqhui3tkpq38iHDqDpZhCKq2vLknN8WejQ",
  "key45": "5TedAqCDXyx5Zwio6bfhqeMZZE5t7HH7xvPshfEGEi9kHgsgggGNyvvj9AXx57jafKymsKou1uim5cQWXXE7v65P",
  "key46": "2TznzbbCZdwa8JzKoxL1xhrc3i8DgT529Xu7ZX2hNpBe4aiuuDpMVsfnyHfxpkCCFefUGpH63RfjZTW71Ye9CURp",
  "key47": "3472rWn1Va5Rs6BjCsfrpnKkSh4vh3oSNkMRWDcmBi2mDyZ8hScUFtwqNoURZR2MKLytBDKqVwULVd7RWVbrHoCG",
  "key48": "5FP83KaakgBB6oUCbQURKm3QKuS9tCNYNNHWuhdTZvui1tUWwLZSoQSTUSTrnW63jHw5pZbq3xTNvfX5tS5Mhcij",
  "key49": "awZLAwRKFR9u5qUsDG5mHQ2pwbQeeRyxWWXF71DwmGEWYdcbcuPNbrNmrwjxSuj6p3sdEp7WsojwrYhweNDqZXf"
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
