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
    "3rJKMA5BbxLCrXYuNrEQMajqZrYjzW1KS5UWUMfvYJQwrjCN6uf2v9mPPwU8eKaYCDgB7wptJ9yxCTEW6bYHDtCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GN2mQcKnUgJnMTdwhKX28gyn87WQx2GosuybGe8JM5kXE3zNzhnDJYfMzFXbUHN2cFogR1HWiXnmrtgiZ36HVyF",
  "key1": "3AdhQRyGSWkYjUxHSpdUZfGLuMiZHHnPJ2yscfXnMFPLQ23vj8Q5thZpSV8jLnXBVE66auJqmH4yMxN61w12N4Ec",
  "key2": "2YfZxdRAqfz6dCTo1oUm8RECRNrLQLP1CSKaP3R4Gu9RCjo3QPYqs6MBLxY66u9Haj37v9h7eJ7EFAPvFwz9c2KW",
  "key3": "3kEWkQ4QUN5VE76YDo3Jpp1usF2GVQjaonHz4GcAYcDec4jfgCnKrhDe3wVYdKQpLnT7MQAetQT2cuxNxvHRE7WM",
  "key4": "5sXCEcrLvVEGdc1Cq3v7A5hKNc1NLcsarNQCPf8UbrMXHCjPduDTYjgaZnE2VfxmHXYGNzYvZdN3jHz1jR2Gbc58",
  "key5": "5SDehToBEh6MqxTendqAdh3kQ9kDBQ93RkMJWd3b66DMqve7pLX6EFP18U7LTYaLPofQRBWobH8GgQREy9dbakvK",
  "key6": "AMURnXM9AL4hYuQJLuqch1w9hxzBP9Eo2KtDsdLwBpSYakAkUXkBfzfkVgtRxWVsGYFTQidmZyA8jhebZQZxjwC",
  "key7": "3XNSRNWZ6WDtZdKL2eq3pRpqBMxpnzzb6Pmot2aAcdFX4KxcE7PtEA5rwzzA651TbrEebue5ugwPqFBZ2QAuJDdV",
  "key8": "s4betowittGikBqkMHCLLMAo5VN9KgYLqPYVRjgi9bwjGphsN2No32CeQz8hsZ21272GLM3Dfj8HKohi8xSKKtj",
  "key9": "KQme3nrja2Q6SauSH44wYR968p3eWCfkxqq8kVcoegABFNE8ffxWX5jnSYPKBgzF4vxsDYxHj7X1cGd2Pn3QXet",
  "key10": "3AKquUVnJdAqfDfLyzH5JtwGB3ZEf1u7XwSrbXDFDZcz86mSu4gXCFxQhEDJwUtRn3UYE8N7v8VvavE29BCAx7Yp",
  "key11": "3eCfWFFJAGpE8GpWwrjn2tfLmEZg6SojFK4PpJQMNnXaKhmbERnxGxXHo5EwXBAcFVwm61hsfhYHoRkq4hjU1dgc",
  "key12": "9b1SxiircSkrTAiWdFQjz3HmhaRNmPYAtPA9M3JYJyRQGF4idGiXnztsnJxP9VzixjKZB6Luja5dMPGFfbKn77R",
  "key13": "uoPdFfhmwdpyCWDu8BhRNopFzNFTU9rbb3FWBad5PwTb1RmptwE8F35HGtrdHYNgp7ZKTEDX2SuDmmGYUdztRnE",
  "key14": "38GRxeHHRWChLLGJ39m1TjSA2EEVZofm3oVLLorMRpQ6kZcBxUhVvcwDuWLAWLes3hah4icXYnY7Xorzyg3xjscF",
  "key15": "5cHx28R6bP4dsdGXS5FVEA5Nt4VvPUvC2tV8mSaV1bAhAuBQZzs9BgUCU9xKfc2NtK35Q6BNzGeeQTpqQRrGj1qZ",
  "key16": "3F2zRSyftzgHaxzjrW3nLkjorgWFbb81eqBKV9yF6FuPMeU67WQJsUUCU2dGo7BmRXyWadFwFp13V6JbuhRFFgtk",
  "key17": "321qQLJX26b1xXigqjobSKxvb4AGHhPoDmbqf8jsD8z1K7SPQ3UKY32afyEM5h3bzoYDd3Yb3YUMmYFuS85TXrEB",
  "key18": "28x4MkpMH2DgbA7r9H4KUpYJiUFBvHvzwUrjyv5nmv8JHRLVkucfig9dfNHr9B9KcFmSZPL9X5BdhB68JKVkbRG7",
  "key19": "5Qqydvyj74kMkUmGcqoXE4pcR8KwZfYovbPPaUVeoMErWGQTDjhibd4X8CtC6DawgdfkACwBDi9eR9tgLVLuWy9K",
  "key20": "2VLJyfPHfRiq7HfLsCUE2RVK3xNaBkYRYTUcY16C5LQqY4X9cr59ZF7WbAMBsT3ZsWjMxiHypyvwjhrDGmK6gHbL",
  "key21": "rSL6ftGBv2AyvLBzXGUKmDRJJ9V9YFxnTaCSEPWDRUyLBzkPg4mSrt43hznuYjPcNNfgQQoSEmKzgB2yMgkdXcK",
  "key22": "2ziKeCpT9ghoo1SAuAKaGZrxhFmSdNzhvZRkW63bNoAKdCNLYHN4bfyyQpb9AQPgEBkZM8yYxd6AjWnPThBFwoK",
  "key23": "4f65pNAqHp8mn1ARRuNcuJxXDzetE2TdVtiMyP1aZUq4vfiAruq7eoGfKU92MHQi5CpAAQ4QX1z4QdTQfnh6NG1d",
  "key24": "5DwduAAaH4ZYSm2HFrZ2q1X6JYg5XZuRFMfEbiD9S4GCBwWKS1K1e8f3BzrXUgFKJo69qR2Ls9a4LkGUCWFZ2tnA",
  "key25": "5W7cModCYWuHhYYdmShe7NS71Bh3rAZXDmw1wcS4eU5WrxeQdi9316yESXMyVbmGBdVgGkSRzAAxNkkpBVv4vi1v",
  "key26": "4TLBVrHujZ3QFMM7dPSj52oCG7MhrmgBNk4sir3C6TUmQpuCRFFpC79sukPgaLSqJaqpayQuX5xfjHFiWfNAm8f2",
  "key27": "2i1BAJmzdgyuFshPPYqqKiAtzt8By5XD3Q91jKfsewMmPmxWoKtuXUeWdHabQEQzMUTcMkcaM9DeVbddHT7BepEE",
  "key28": "zEHvvKiE2addpZvJe5nGsHbHhQdKzoVCgKF8Ti8vSNzPSo5tfbtLo4ZotwWyvMEokbW46RZSoRrGyD9AHTTpVT1",
  "key29": "4okTZK8bP1gBM5KnMTd6xCsCzEizeP27m8WfJEm1qcKGHKYoSHjtEJH5WCKbFcS9vTxgkzG2X73kGgwbhZzF1nq8",
  "key30": "5RJvTNbpRUEghuwHQwk5Er9ngHUHjDoZXvrPsyjy5Gy7poGy8FjSo699Vd57TmfyJeZkTQPGwQjqAyjNkYo9VRZe",
  "key31": "5hqeNWySCo7SbfpZ4fYy2wPpLz1EZTnfMQihZvmnYq8oDtWfGU8pTWyxy5HaEWYqD6JrURGWyPUGi6ZTj5bFLmuW",
  "key32": "2sisX1iUxrtRBneqsTSv3ozXGbgtB9mGWjEKTtSPRU7Zxi5ZpvsTwofDfw4zpj8HhhMdT8RzsaHmr1XcQWELpJGu"
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
