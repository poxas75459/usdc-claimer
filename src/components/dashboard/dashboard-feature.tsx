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
    "5nD1RWna296qve5eKfQZY1mvLghmyhgTGS6uAio6AwE1UZehkV2qffLy9JVmrYscXaNvMo29JjQgxwtSQ1jqsXVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2J7bWWGq4g1dzciJyaXK3gwEoXwENoP4Qj6CfVTiTBJDdE52RSWSMjbU4Uv8pXJi8pwhvJCqmA8i7j4DUPx7uN",
  "key1": "2HZDDgvJmYYPsuFbV4fL7gpJGCysvF12BtNe5EPzEApDxjq4uKdAvu8yrK2L5UUvz4idxCLyBUUR4YJcgz5VFPZE",
  "key2": "kCYk2M7ahwF7PKxA4uSFbmSx7PWCSzJGv7VBoKXcTPssUw9JjhFH2anWR3fdibjqyMbvkAp59cUmZw1HH4piPAh",
  "key3": "5aZmRfLRRE3WFC6a6yRaF6j2n2gQPmxw7N5CDgkJJ5orjdyHzk8dV3dNNdQpeRLvjL8w3aUAneHmMjDU8JJ2rcyA",
  "key4": "rJZ1m7eoPzrEaG3RHp2Zo1eXVpBt5iJHXXJ11gcbnxtSVHcaMgpt9GEBfsG17iFfNdzHmPBGJbBXS7hn9g8Tp3q",
  "key5": "5pmbAimCNqGQEwi9EN2VYwrdfsKKHd4S1pnmBGU417ucXVQhPo3egY9kqmM3rsqPRgpGFZA5gF7hoYZkqAfHqssq",
  "key6": "2HsJSWEawp9JUWrmZ1BHWnY4rvBXiQxkiCpGZT4uZCXJQB3xLcAU9jVwqL6KcDd2JZD4E3Xiyqv87jhqxowupSMo",
  "key7": "iNMpw5WekeQM1So7vsWtxo7vqRa1JEdg7hUbSC226yqM649iRRhDZjtCnqo443SQWGC2SmrVANuw3FpsPGdHkjS",
  "key8": "2xxbAn4rrLULf9WRaCoEJ4Hw86mkvKZ6EpQ7omaNYb8JAT3ztQXoFSz6YfgHMJkSFAuXHg226bGhAJqpYFduw8pu",
  "key9": "4uJMMpyxh23w2bFxwz3sKKvqKd3KYW6qWajxqFZHKzqJ3CwqoNvfH6AWMPybbqmxNirUfNSY8sfzfVbDcYua4xUE",
  "key10": "4qoDEUkHf4eWFndtRxWCimSamcsnPUFHjpi1osuoofDExdXsnbpFT2riENyQC6ia8kQCmvwsgLaGQpWakHviqX5r",
  "key11": "64Vquaj4ee2kxyLvbXUWtpssHn7zChZY1VnLX4tWXnQcFEed8CtgV2eC7Zq2fAi2whretCv77rTRJPMZsetJqsiH",
  "key12": "3PCtuguoQ4FpZSSs8k5tAuBd2A8xxvNpgZCMRCmibNbLtRQoupLh4wW3m9pxoyBrcqAFWwH9hLLxzniqjdY6izt3",
  "key13": "49tkK9jnUwyDQVfzauvpECVCsMX5mo1WDQmtW5BvQPf8V2e1PBJnE9XisKWjjxjgdRLKcmMFUPQwD3qjwqP9qt43",
  "key14": "5sbJoxMm4zxngXzpGPumqRPBiotaGGGPKNTsbTc92D5kCk4x9XCGMDCLCQPvUmxPCRMS8UuqByanRd4tkEu6Wwu",
  "key15": "4C94rafKJauvz71ByFrcmJozbFP6ykAkFLhvaad2nTn8jUtX4LZ9kYdyPEKPrDitx5RtDdc8ep2BaBEQv4qNPRpi",
  "key16": "3nKBqMtNX9kLZ7GZgz7tLZf4Tv6gRXqbCygSDWRtc7dnkv9ykDmpgdsRiveurPvbDW2STZjyMNQ3GZRBcvXnPDdm",
  "key17": "5AkCRYjpZeiyowqedXfVFRcB8VUk9xULZPEusGznWSoCijKPdeXsCtZsMd4AX5Udq7EewzouhfhnwsWyyBDuuPDR",
  "key18": "55LSZaF3hsiCsdSHXatMjcQ3f1JJZuvX9cb8EuRE4X64PRtJ9tigH8ggEbLJuBBX3DW21k5wfBiXGbRcMjv44Rq5",
  "key19": "4uYhsg8tmC54HkAdbm3bDMLnY3qkTTEK6MpnFT29xBmuQ9LgbXeDFpx7FeZsvnuXQgu3Vv8Wuwuo3DSaE425ffrC",
  "key20": "RnCzg9mhzyViYzYgUm1TYMok7bAkuHue7hWyyFW6MFDULZUkZi1u6FFpFUJBtXyrkvja5m45VCiWAeHStZHCHut",
  "key21": "5BahjSguQJvjcbCtZShjjFwYCRLMVtwRgni8Z7STipzBFJEEkn5cqMFVLz2xGKxpbMPe8eDmvz8Gbm1fbERXTW36",
  "key22": "2tTB7gdyUHtA28Emyb6CB8jCzhf7FvH1dCx7QV85Hrow3WGDkiXtQiGezhfbwMpLZ7LyeJNyX8oJm9DNCUqa1yDt",
  "key23": "2JpEXPJFGjsttFavkzg2RhgEpnssGpuvGnhtF4BJ93dLuVohGATvVJyqG7durfALvPKAS1QihrhzjgeqfKGYsL5",
  "key24": "4ZJx4cLZfzTakbWQCDVg7ELYA738RKiuSTF4tXzaBEJvAvG2oa7aBYjWqbA4Bak4XGw5uX8dXDkfinx7HZXApDaK",
  "key25": "3Dt61Uj1KufmpjT74KeMWBhWsc7heowuyz1TqJn5NwhRjCy9DjDAojDKuFhT9oM8yXmvnf8h9X4Kv9SikSfHrdrn",
  "key26": "8akPUm9ig4WCoepK1vsj6ELGbfx1gbWycqEwUuHP5mfiLX5rJeVAe25jmK5RsBZxj82WCPvUYEwiuAaCpcPgmPv",
  "key27": "5mCsFU3corQsHFYXYfzzGB2RicMkqraSBWeGHugwPLmPwZ3Cb12DsJfE6fN8kU51rrCct55cJLx3BaCXNdzrXaCf",
  "key28": "3cBVcJ7F8ujvKUjJoohq5Yn1fwfogGhcEePA5rqpZvetUPXmWYGMuaHUybwqnjgLzYBzKQmtz27eJGzsFvi74r7L",
  "key29": "rHFoBU7X3Y9dPxnfw9HsVpCuPmiekqTUjBtLiDM8o234b6BX6sSQLfRSLLHGqQ8jx4NeTzhmXKUSTRpMyTB2Nmj",
  "key30": "4X8EdeiEA9ZwjkujuZrWu5T2yF6fFKBd7xHFQDLjpi7NF7f47aJUjAhcGjadBrfKBuwt3EtfLV2yfaesVMnfhqLY",
  "key31": "5s3oSg6kqm92CJNWojZtYFdfMr6VJJQmL2G5GZjzx6e8L1qAzsRGvzEyYRbtphRqBFnuwtG8FU2mtpibWYRigg6W",
  "key32": "dToFrAAzbazkKi69vSidC9UyT2WhequqwmaXqgx3fS6QETsnaErdr6fiwup9YXERhfJP9TJJszgC6aLdVQFDgET",
  "key33": "Wdj47LLbRdDZaLvPX3dwbfNArHGsEkGSBUpkL4DT7zyDyeE2sYGXA8DCerrQrbUZBTogv7KiQPMuvny1Byng782",
  "key34": "5mFiu7eyzNxFVYWRT5E8f94BoTmcCdL3rqRgVeeXXPsgMMqg8LVnLKkwu5i7FNYvpA9h61dPRQRTCo8vR52EzXYj",
  "key35": "26jSueAmvd5vKzCCsb5WgF7AhzxBup4Tgq5TKRGRWWCR9UUF4tSWfb6wJKZtsNBSsty1qT4sB5mmduQxbvgPckpp",
  "key36": "3DJybqJPvkntUZRFEDtpUL6yo3bHM1rYM2ayCjrh66zTH1fFbHoxU5XrWY4KaQWaJwmRifZX6AM6Sdg2r9aXWKAz",
  "key37": "2uwJr8pyn2m1tKhvxVTMr8oWVnHzZh1MuNtKTTXeBNsqd6EBTsYoxaQR5jtyS8qQtFEjzBwbDAdoTRVGGr9pnsU3",
  "key38": "5NAYc77gvgiuRpt6u23Ye8rY5WVzhLR5FVdRTsFNxpFbdeMrz36Dz5P6dV3r8LrBTevvyeaHtusc1GpHgRfQbw55",
  "key39": "2qeQsbDuiJzMbjS3ZadzjgdxvsGty4ZKbXTfJJck8JqVHGHXtK7U4YZGpLRXF4vP7ptF3KwF9VuW9S57m9iiqXzC",
  "key40": "5Phue4HFrooQbg892ZFkiXi51fzX25Kcb6oh5VnHhscjLk4UhJPKLrJp52tB4kTQCU58sHQZa3ugNQArSRQ3mV31",
  "key41": "DsAr19A3aTbXuhAqu1eLSLRtqGq5PNJRh9mT1LoMtrf3Tw8d1UqZMnVWC57N6oqzprPFvSXezngQVF4Q4yc9jsk",
  "key42": "3iuLnhkmXE3AQUGj36k8ZnuaU2rmYWVyECjUeWJeSzNHLknBR258Rqa8dywttAhcUM1tGUgsTjEfLuU1NCXSdF6B"
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
