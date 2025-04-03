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
    "3Uy95NQQAu4kBSH5RbzrR3tKp3eojQzWx9kixmAr3N5xAgSZuTJc4HWAQGitUNPN2Hb7XRG77dWYpzw96sbJzcjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tTAzwdDTi5aohtPHjXKzgxuMQxKCUTku7atYLrN1Rj5jrogK6H7n5TKb1WZYMTK4nWsR4tW6WxM3LJSaKkWboP",
  "key1": "4neormXPNmcGpfHvBKZtdZ1ggGc6cMMfyUNGcyWZZyXXe65AsUJCjs1xm36X6pnAJHgmmCJ2fFw78X9NnkrPTLsB",
  "key2": "3tNPj5FxCtNwpLVsiLoBup9ZsPGMziRCTkUCUFHrRRf2CXg3taKULos9B8HZuM7vefoXy3G2cXuY918GfHjT3RJw",
  "key3": "Pv6u71SAsrNdtMZznKhpdiEQyGUyhPMsL2f3WuqYZcqJgUwNid46jMKuWxY2ZpT7e9DCbQbVtwvTQWUh99K6MWy",
  "key4": "2zPEY7YD4w4A17otdr3hHTTnW3wjKY1miYkHfVGNa7228Mo6YAhGGKKLf1ZV66Q69ahhtQYbVYVCSVzDyDjU6Ady",
  "key5": "2EE4QD8euNp9ydQgpiaq4TmBeUavuGwhzCjBswXpok8wbYiouxxgCwBKn7nYHmxQhZHG6yYJ68RRgHriUu7Cgysi",
  "key6": "7YbdhsmTPAXq8D8pygXFBivYdbmRbw1Y5goD6emnzVXhuiFuqvRjXCwaKK9xMQgEB1XDq3pVmSyA8vmGjYDmNwP",
  "key7": "5uKQtg3bcr2QaT3bTgx92nMYkGAFW1RrDS9LFBbKz384Xr368tLvbpT75qicEwfbVBrZt3UFttbhZbe6tbmXTrzv",
  "key8": "qg4EZKtSmzi1Nkc3Nz8MQkBtSzzfQfPUgSgYQWgecHqzE8ro5txNfJhjpAHZ1nGXpmDyXT6Ldu4nw3Kcb4wasyR",
  "key9": "3jEXWq1eZ2DQ55vhMRwgP2ZjNerrjAaRPwcxjzgqwHZfUwHoGJyRi89ZGE88tNASLZ1GYsBHS24gGFCw45Df5EU3",
  "key10": "45SC8yqD7SBCpT8pAW7oUbx8XhpuvoRcVNja98RTDSRHtgmA7Uqq6xeZ5NDqUALgM8b2GP6E9wvJVVdnpCwRxHZ5",
  "key11": "3jh3HD6KaxF8wARPsoW6ZBiRp9SLDf2D9cj1Fvt22JM4rm7tkESwpbPgb3F3jJvDXCNsVagATu2YBLpZ8kVvj1sP",
  "key12": "5sEMwziYogEZV4xPDxSJiBUXhLq3wcvPcHSjGXJNLiPaaFe3WwpSE5G1XqiiPhitkv6w1bPkoRwSc2VuQ6nE2kKb",
  "key13": "65SHccEVtxLvobLJFDG5Gh4eVMMBW2XCDxYy6nRsP9TeDoJSaTwPKLiSy5o6iJ5iuAjhcyWSwJePDLKz4E3wXPoH",
  "key14": "4khnWzHEnVfSwz1DKZGxzxF2NNgV44hfZiBrC7CANeD292a3n1H8oMUv5i5ftXNd2FhhsBt6U7LTjjLR2D2tfWbn",
  "key15": "2vaEUwwepDGVmZhv4oDAzrCrMybhzwSYGgF2eN5FC7dWfvQTwx8rL2d5eqBeAhq621gxfB5fAokoxqBoyfGUkR1h",
  "key16": "5mrsETZUiKnUUy5TD2G9WBNkZwxhu1mLLgagTfZ9LRVuGNMX3C66JeyD3Vtfq3Gmhwv9bqUrp6FjKcC8bFukEqZh",
  "key17": "2R14i9e87ossU83pyodwmPiguUoA8XmmBkPSW3GUBVSoWJUnDNVVJPYcKrGX87hsmW1zVY1NciSsf1AhPXfmXR69",
  "key18": "5DPJ6avsPo97TNnU4q5nCATKB71xiLeBF5oNhJe7vqQLDrJjVRHAtxegvmGXT7i9FzNHkRLqUieL4nbGJXFkkcjX",
  "key19": "41fruAxCq3R8nhcJ8SA1bgRn4S31ubkJD4fCrY71FTvikMvQaJeSejfV6txpdfCCm3Cev8nwThY26vPV2MoyPoSX",
  "key20": "2B1DQQGAn422jWzhpKR14p4WuMDVmaHHkwUuRBW5zzZ9P9TGDz6sShnPF6qHRMTQJsCZedEPrjV5DpYSextyoiwm",
  "key21": "4KYwmWfkSjNHwKvHqKrzDs1JR1uzwxvTDPpcxmAYnrNrVLSWEKKkumJd5DjbbqCAoJRpT9XyXiwpbSW1JbycrZD7",
  "key22": "4sWsMWfDB4x3GmaxmR2MzukFM2BHg2HXEsaBTBvTcFDDNDJCyBFH2z9gUjBGD8yaFRpyEykLFKtdGhwJwMXS57eg",
  "key23": "3YofN74KUHnGJ7YZhgWFpJeWB9uC8Ln3VUTNTfbJiSkAbqaQhDckM5Bo1sWNu9kvjyQPbbUDQqx6FAqaip9VKpPo",
  "key24": "4FmHCRorwys53owU1VssD7VGJyy3CYUxfszKcRCqtDuMxts4jU6jdkRT5b5rbGTxiTS9jkfvMf3MuRa6PtxhHKoH",
  "key25": "gf4bVbbxHqTU5WDmMHjAuW6AgK1hCEUnaKy1uKAXcmw1kKNMy13unohnm6GjQkAhXtq4zVHKaR4L3mE6BGPr9wY",
  "key26": "3aiuDjnhzXovvVPKFL12HZcrbZ18em8rrR414vE3MXR2zaRoEpgCEKMHvEmMPQXbpWqBeQEwp4VSLg6ywagNFsv1",
  "key27": "wAD62iR5BmrjVW4JwByV39KnGvCWBG9XeFvq2Ev7k3BSArLzx32dZzw9XgVt1HrMy11NHqCWHPWZ61uCyAwsvgu",
  "key28": "3xBhkakGBLxG4a4x9zUctiptaQLqPBWoirm3hSeLpYxHMcXYouFgPvBJGS7DefkRqL5SU5RbgnpCBfPb8sf9yrNC",
  "key29": "3unoTtukGsV5bgu7Q43mJyvwjg3z5FCv7hxd7LhSVkymCiWkmnCPKBtD7PaxTpCEoVmoXKCkfpdRphsnQX1N8iw1",
  "key30": "3sHhYWshq4RCsbeES574wZFxRmDwUBfdEGPXB9PCrAxkxhqxDFdzsY8GdPWpEzxGgvxqUypEiiLRe89p6TC1eXgp",
  "key31": "8q671E2KHcMwo2G324ygwckWKYDNmPhS9Lu913rBqco1Tq17TriDWCtGe2GcccCYtL4uQULeXNYNRzeMRoS7xNL",
  "key32": "4dFTSzevc5zpwPB6WnQw71TtvWnor3kdghyHZ1w9ea6zzBjpvtvdp1krQNwKZy4tMYT2qc4umBJ7YxPJohcXFscA"
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
