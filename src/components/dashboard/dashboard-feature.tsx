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
    "T4GaqskZzQ7ckWxf2R4NtUGA2wCDdabJ72qYYieejM1zxfUxo5xnCgSieJ7ddCbfsw3FH3ASfVBDPtyDaSA76kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sPEWB7VGduX1xj1fpSQ5p2BcZHxr9STepqDmdX7eSit7J8hnkp9CSj7btiwyvN7QaJPfBo9NA3tJ1wizLr8bjx",
  "key1": "2bdkNS4sK91X9VoTsGECagzn7MwycZndUdtk2j7eJ3Xvm1VaATKs3SyPkqy3NQsNPjuruxeACfzUowjUWgExHwVQ",
  "key2": "9VZJ8YC8ATrXhSB5qwFeJZW4Sfmnub249bLnLzwVGD7VXLThHEcz23uwg8W63evx3vR69fFLte1StU72JnjWsd5",
  "key3": "3oR6RiT4gbhy2MWabxCW18qaX1j9r1o8FgFAWH4sqCjYvtxiVMRtqUkcPh5JczNAyEXyp7Tqsz96CDjWEvmg62bC",
  "key4": "CDPHMb2iHKNLqDQ6m2vxyP3yFhVT1d22kN633xd8mtR69Pd7rUe4fz4qZ6n2tcPbWjF13AvQUJomhKPHj3QZYk5",
  "key5": "5zgq5HEZBGXWVYdxTtPNcrZo2XViCvYn8frK7Qe3xjdruTZsfMNGjHevEwfZ8PFPm1UsTRPFE7q7FT1fT4Rmd5ym",
  "key6": "4kzGSxrXz5vm5iXRp1bpcpchmmp6svgM3RRfShUv6YNVvxwTCn787vxkrutQbPnQjCp9ARBh9R2hPSb3PWnwb6UJ",
  "key7": "CTY143QfaVjY3GYA8FWB3Kqrbg2mcY2482KeTRMm3wstU3kddozj5EdSfxTsn8pPbdcsFrSJbJEA3FJfm4oJaSG",
  "key8": "5EMjkrq97dTzDtWvi8aATekWkkB5KZPaBtxcZJGuXN6LHz4TqvWYcABEiamHpRumZnp1fBGWCykHc2A1qfte5Egu",
  "key9": "22L59rzcut8eyLivh9bZZ7DZfE3xGnkMrU1erdyzAFskNhr491gWn6kgvBSfxptb4rNuMYBfJeisJ9PbMHCKddZF",
  "key10": "2biokUyrjukepWcUbPj6KZhwwXZeGFKEPRXA8dKvxkHDkxqSHUh78FYHzuppY8dQ7qeQjc5WPs6LXLNXsiPzPkPP",
  "key11": "KpXg56uRJWDLdHpW24EfPZV8uuuvdiN1aoaofVXNoxTGv5jEUXvCmgd85QPpGUvtN1UC8RdQXvHpejoBYfjDeG6",
  "key12": "3AK3NBuCRRYwbAXRbAy5qBWKGGaRZRyFB9eoynGMDk6N8tUTwuaKeW3dRxeRKEvg8VZGGdEHfDTCeGrtzGKs5r7U",
  "key13": "4F2Pau2J5vx7MGxLTYCjEGhourLfCLyYNL2mNgxE9YWYUHo9wHn3MDxiAZwzzhbhqhoL6heBABpXFYWA2SfPfq4Q",
  "key14": "3M2PB9gBqZkbkYtNEFviFonsuwCerXq5Rvxf2sAn7Sfa6hxa7in8Z53qqXGtSoTmRsJaJAjoMBQf83Z4Y9XTzwwV",
  "key15": "36kADmXFV7UGJgJ3mVkVVTFXnTFFfNgEznvQpfBn4xo14KQ36wD48YU3H4CKpDj2XSd1tYTKqpQK1aWsWuZemnHW",
  "key16": "E6dwd1ZiHbTRQJQQLEJagSCkGXxEgxXmm2e1m13MCt43GqRA32HJe5MiANxnK8D9vMPRmkFLBxFEEp1g2hkzVZm",
  "key17": "2crEThHV5yhhhXtVNCDBU5EQBhog225sJPwo31TkJochaHfnpwHC5rScMRatjPaqUdx7U65mVSdD7w5FDHscFaS8",
  "key18": "5b7zAZ4TRsFs91W5XVqZPriZmtFY26wpvqxs5knBqRkVFMXzqEXuu9WsGVmSMtRMBhoKha5Vzd8HGAGVfWDRp9Ct",
  "key19": "5LT89HMZT9odGzYwp1jGdD3Q6xiGiL1Wuz5UbczBM5xfLdJ8FaPJDDPvkUZkBuEWRLLaAqQhygM6eLTYUXytr5dC",
  "key20": "2GRhh5aXncdyHBRGXfdSXSq836TKZ96Tt6aK8PgNMWUjrNHhJ6mE8YH5T6fg4BsxctTiFrdWmC8Q9ymniCNWAkjc",
  "key21": "eUsjL3WZzptWHCu3vXSy2uQ3Lko7SiBLqXWpUbygqGDb1JMteYfJS77FcFghfevDxY7cT9NZBJrFXeEFwWvNj7f",
  "key22": "2KPJhFTbEznmJZxhVXpdoE7t9PKEXfapVAZh5vHBu5q1kvZPKrVXcaQLrNtaofva6fCSqyD7wbs83D77vsbhPWaU",
  "key23": "662LzbDW7FJMBxUPWcA77jh1EjxxsjamghhjE4iFfyU3J4AceaXDMdyfvkQVBtks63EhoaA9NHXLPd1gwa3awwsq",
  "key24": "5S98yHT1pLpRzn6Xi4BceFS7wgcvWWsPvMbMBTW3PyYhV4HyDAXdWv8bjp36ptydVpjDFWRs4N7dhwx9zhYE2BVy",
  "key25": "aBUhocCd9HwmcHh2mhY9JwYGkbwZt3Zqrb4dHQfMZ4fwHz3kqiCUdsiudMAhsnuZ6kckRhmLNMephdaNq79zzfg",
  "key26": "5e6DQJqn76AgpfYpkKpVbj6baGUnfFqbm62UhDb8ikhy2vnGGNaTqWjWNQs7jsouFVPCZLRDistixAMFreXAiroh",
  "key27": "CHC11iWSQ13EJNft1Z5d8XCP6MNgjSufjiZUKKbn8rUzA2uxJLPFCjP2tr9u9F8ocAWxeHqt47HUUUo5PhV8MQr"
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
