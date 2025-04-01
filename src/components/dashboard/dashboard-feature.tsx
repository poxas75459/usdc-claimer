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
    "1ff9z8Rv8UVGfw1yYxvs7sViSf5xuuyKWdVNQnJVQEnNjWYBEY8koprzN6sBwtDLJ5PR5ZVzmMctzRFBRdfH9WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6aReBJ1Q6WXhqA5PrwWcufSXjRCNZMDZdYtUVBeR3koycwoYV6AQWQPC98HAK9akNsmbSfdUziJytNHn2NqjN4",
  "key1": "2LS4Wt44eptU3t4H5rwfCNrw5nJKpEexpibNufkzDPpyv3WsbPyay6Ly4KTi5bpNCcDZW9cnzktBB5hgajjH6tAM",
  "key2": "4BCeVe2o15yFmh7QtkFD5VcQDcT2qywDK2HYNB19FWRmvkUyntgRrpCeTG8DBiqqYKzLAep38eGzbdsdcoZXRDZD",
  "key3": "qwFNANUDdhn2epmqjDwq1Po8ZBDjANvVg8VgAncqJc7W3ZT6fUQVKzkXL3y2ysjGvBAPuuRCjmPpkC3eetztTDs",
  "key4": "4i7HV3A2ouPZXk4kqVR59etUhrgNYUMktgSZ6tKqnpLyPYqr9ZzmK3VcoFrtSeNV1xKAvsAweMwQGXF9HXcuCggy",
  "key5": "4vAm58TVAMgxEd1GcP3cr16hMuRN2j58gYgkUS1eeTPvKcYAWYVFEt85p6AJss93GMaHwofdvdN4yHKWbompjN8s",
  "key6": "43Tz4F3AvkPzRTDn4AfKmjADMPMzw15dKTtYCt2hppnEq6X3oBoFT6Xqh6jT4MTFXqwFoCHoo63kZJmCyz2mYyz7",
  "key7": "7joLGKcMWyHpP1mLpFXjHLNMuLfPMZxvQ9k1uoFH78QkQ2ewyqcFVrFaB5mGiQNPbZgmDE3ZT9TZoEDStN6YH5L",
  "key8": "2hEbpJKQ5uZCKhReMCQ6t8ZussQD6iFgcdrYrQQERuqJdB3qxRaTAs5v5ahCXtbiUrKPSxWHWZxyrjkJoZkeisWJ",
  "key9": "2km51AsfkxaYn2qWYF55nZzF8eTwybJVQTiaA2QEC6kLitTepK36fdjowDKeWMUGZmgSnL4p9k9Pq1nGiQRwzFdo",
  "key10": "31purk2dqZWdYUHNpJqfiFWXigZj3mneQU8fMv5V1rTDAud2qfvb5u1sPHDr7yX2MyTrjU7cKaNZT1KdJF8PL4iw",
  "key11": "ptVcopB954BpLDsn3JfM4jVCqDkE1cfKmsQZV2FXWAd1EAddJUNXExE3UgfjeaeuEwRVU6zPbTNuT6YiKvaAGeG",
  "key12": "4HUBm1G3U7qiCFBV9UnyfqoePbRGucjD1qNJxok6aDdpKoQWHSy5eiSLK1Kd1X9QjBSyM556dSmaFeBKXPgbia4s",
  "key13": "46GzgDZvmdHUsESAyiwNZdGJrAagPgvaXB3N91e8CJ7eEh8KrUbirDNy2KWj2UKedFDuZ2RKHbHjRS2DTNwHLLhF",
  "key14": "65Wv8FjviLPeZDufJCWvhCo6btx7XSrMqaRZ5P7pLh3sG7JuCkKv9yujSTp2fbiCHoHDuoxLaw9trWhTetMdhWtM",
  "key15": "BffE5AUAzqESogKpVkQ4S2wBJW4cZaCY7qZr81xZCHZKst14uvYtzyQ6vgHCYWjCjchhTsz1iVxmfAZVepurE6t",
  "key16": "4R5FhTcQRWqhjUpi6ooML97yDePLbbAKiK21xYPuYCS1N3sVAZPwUdMPvvGsXa4aoSERMFpk3mkDX4toh4FQkVQd",
  "key17": "2wLg4cdn2JH7WKxc7JP1qbcgMV14AFBkj3UaPU5RNuBZsB37Uu7vjKeDPesvCMd2vpkxGqMaSU4g7bH3nNjWz4oq",
  "key18": "4dNBMieJis1r2L43dngqNbiMSAQvYKQBeavqwg1XHLvPt8f5uHFnnsTjQeCuzdtsbdWKYLv3j31Qsso6UrrrfS2P",
  "key19": "4UQuekDxKjwMmbhijQkKgZrTkfqHBJqZoYmNhs9R7d7RJj5VSuDjz6j8AZvrp56ZMfEmExJ1VQ1z27B1b512Uvn3",
  "key20": "Lm3BPAvmGsuX5JkdfRCeeuZWvTj6Q27b8tF29tarVPXAdTguoqKh2KNriSXrJaDu1LFWxPbP5RkWJUnmHLn6ULB",
  "key21": "h3CTPKkp5io9BWgGGPHEPtnYiAS9uYM6zSm2X7N2wuPP6WMMfHf4LFrDQobokHeeU9MytXcD8fED2fL9XR4Xhiv",
  "key22": "3eXc7CqbNj8v5vogsYCb3REuCLYnwY5EiY2VdTfqFoXdct3Ua9DBxNvLe7Ktp7hedkBFmZoFutdFP1jgmWUbbksY",
  "key23": "5ZK4gMtWyL9jQ3CACVBz7GMmEECZ1YajmUausBZPdDziPfgK4vZsD5GEEbsQnNbDWozH5UWdQ4cWJks2wbBHENgP",
  "key24": "4wLkamRiv6qgEqihnPzs2QpLgqLwHmHir9rxLLDSzG9m3Nv2YxBa6wCGBsFAtiZkjVYQn7PPNwiRv5V9M82948C7",
  "key25": "2PKXePZkCi4d6dYk4kbvxGuKywY1gtXG2s2JuEf6zivpZPA5Nwfi6CKU4QJY9NDsbbrqPswAsaEfAx6jaURhsMW7",
  "key26": "67KrgQK5EzwBto7NkZdqQsQw2AscVF9LZKyxkaJqXS49AZqBrw6fBm4QiF499CjZdG9KTavg8ijfwwiJVpq1pELK",
  "key27": "4XVhPvV4oQezYcmz8XBy9mVkjpVua4du6zgoXznagJP9EdTqvaJ7UaAqb856YgDm1V8TdeNat8cd8ySeaS1Zze9F",
  "key28": "5ATGxh8QPinFQBy4Qs2XDFYPMHZpBiPyeJEMYFuTCZk8es1DLN4twbzGg3uXZPJABVRmnKK4MzasMetxqct9zmcW",
  "key29": "46xQQzcXWFV3j3DCoUkcujkP9SV3AVx4ZAWqr35sBF4RUzSGXZpEDrMvftWhwz4pee2nX63Ey4GPQdKwhRPbM3nM"
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
