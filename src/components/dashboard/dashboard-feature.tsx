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
    "42rAViDVY2CVF8ho4VcWagjpKgwiDj6MxmXYxeAkNad4T4F4t3FHsxHoy5443fwywkfjE1PAP57VkTsn6jhcYbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpUUxSTLBMMrQ6uETUpgJ4uEcj2uo6tyiFgiYqnaKLuJy1NEMGKd8uZ5yApdHtUXWwRLjjMeM75yqRKEXKyr2Nm",
  "key1": "38jtzENLzTBhzyASbbsKYsg3dzyrYrgY7KGDRE1MWKETX4zS2ffX5K2Z6yGFqaxygzDe2hNUusKSnh1s1Ww4ETkQ",
  "key2": "2FsbxZd2BtAWpuERyYEaoE25CSDU4wyN9ufZLpzR35zqYHasCG8NkrF5rp9oTdooZJX1Nsosjqf3EoEcQfuUc6Z",
  "key3": "2pFReMSxHAoBuNSRjLJi6ZSRuywAtJStGJUxAzk1HBLS6DzcEZMfjm16Ma1UUYGFPHw9ZDosVgD84S8bcBX1k3ck",
  "key4": "5uqqzEtria2HTDgu21YcgCmSw8N7XHbd68zAdsLKayQnHY8Zzv1BFSWnkSHLPiZ16ZZ7yFFAAepEVetyUqagBtSc",
  "key5": "5bhLX15xSeTnqsJcpq37a3esLUNH8Y1gHXcrSb6M2NGFi8ss7ffgT7Qywk2L1PpCaoTdnmHyweAPj2a2xGVeeMMB",
  "key6": "3hjrRfBwYE5GojmJCSfdqY9coKgmuNb8RcaM3793jbuw9g5rbFoaDLgiMVLq2XYuY8hTAnsoNSpGxHZU3f9iwj2v",
  "key7": "4fqgYY7MzyiBHzNWL5w27aQxprunPh8toSpphx8B83Q3zepQE18214beQ4nVy6u4XtfsAFkbvAbqnHgdvt5WruTu",
  "key8": "UoevBHzE628b1SJZ18PmgS8H73RMRfDc3Dwv91jxXmE8D8ha4uVxCMjz2RhJ84xP9AHnbP1UZb1K16bG8tcefPK",
  "key9": "2U3CVpZW4yzKLapx993KrJfFW4pMTY3rcnm97jdfXN4UhnykNvGZpw2YH6jWusdQ7WfKi8fmeBCnwoQuh6KoLXtL",
  "key10": "4SmQa424v1GEkkJHeodDABUdPiwmuGFqTFyMDF1gvaVWoDpZPpg7ZPykjtW9EpAJ5YuuAjTwkSStsB6a2nXjEqCQ",
  "key11": "5piqAoNmAUQgR3VkTydPi74oXkq1W6SXu1RLt6SJ4Q4oD88rgqyt73FgT8EeMucDM81h3Qe66HavzGTbXFW7M1oJ",
  "key12": "4nRZ1L29FNDLjLxT43jxDc2NTerXXW1Emx6ddzpW5yrcpVda7wMPc8j5vFsnfE5hk37TFiDLAaX1QHDt4s7FdD1u",
  "key13": "4kKcwAQsyWfvNkECtg8iesbZtixQD4HuAAgycXbL4yMTGZ57ZJwTVprZ8LBr5ZdXCYjHnPU7cbAnyBahvoDamkfH",
  "key14": "5xkfaYweRAgAAEZFrBwW3PoRjVwZXKUuM1GJyU81jYC1YynnrVHRUoZax8QYQbpV4gn1sTWirkZWhTy267WJwqTj",
  "key15": "2x7EaJF1pmwA6S7xNdKxcDFNGECCjCr9dqNBkEQspiM9yLZLvTRbJRN8gzG6BxPFLNitpec3Kv2C6NTysTs1pu6K",
  "key16": "5L57iUkETw3ZUYxnnWgDM2Cg2Y8stPS9xpCsrj8rY99FyTjXSXnTz1Sd6V6SQRwJDPmAY9L8KJBGAboAtFLUR2mT",
  "key17": "38ftPzSRKq5XDX2i3brzLiUy8dmhzMmtNaKJogFU3pw3YYaoMkEH4pmX4wWm8ZJjr2BiL5PAs2mYngjSmLF2ymhF",
  "key18": "3mVzXR6fBZ1Ry2RzYcx6dbradrZ4hjxM2iHnxVKEYk68YGPHovZeNw4CSH3qT6grwU1t5K1tdQKMsrhRBxCG3jnu",
  "key19": "5rnApYbfF5JwyBWsjFQ3V8gGpBvEk3YzJZ8xZUxKGzfu9ycAQ5RcXtfm1Dt48Ye38gi3E6UZSXYzLDnT5jABYmRQ",
  "key20": "3bbVmrJMnVfYNMWpkWrAzqDGCTAxiATU26U7npmkjKiG9pvRnfjq8Jf2SEs4U3P7FWmV6grm7WjNB3mG4CpTRL3i",
  "key21": "4SXiWJ1w8v5TNpFbnqPrLGdUA58VjJu6JgQDCmqHN5gfb3vjjXvzc2U4SyYnEBSFzB24txRQ3VaoLnMfDSUEYi8q",
  "key22": "zeC7VWbX7xLaCTnYzZgHUoPkB65HSsdQqPqjjybe2WXZ4ApPseXme5J1JMsgpLQEejGanx9NrHfp7dbUapjsmtS",
  "key23": "Weje2Cq5PaP5w5Wm5ZrYsNdCevvcDHTDDD37LSxWbWYgGvJZnCf7iQzHCBmxerJg9tHEfMa3hHhqSjwg8AcDA1E",
  "key24": "2jAMtDJDxXfbQrZJbsigQPBZg8g2x7ZfBhGCG72542Nv8dzS6S5B7ghvTqEQWWThZPjbi42eMVZbYNBgTQZgwPgU",
  "key25": "2RBztz7DwfcZoMDh4NhYmPEmyfn6a4MhKzv2hdf8E2ZogSgshCaa8X7VrphxjWyfeLpCcE7EpS9ZCKxv2DUxwsae",
  "key26": "aK2x7Q3eNJvzJqAR8j3rd9H1xmFTAYip3dsBchb8t6mn4Ge2w8fdQpcHtZyfagBCyEu1ZzTc98uwjKmJSikoqpw",
  "key27": "XRduDmPBRTPW7d4wp9WjhBYsnzUJDbT8tKfybg28nqmMjJsBoRWbxdo5rKRYwWtSvh1VA7Lx2Y65seA9DXTBA7S",
  "key28": "85J1RyWwn2SvzemrfhmRd12HSzg8kvvgLmgkYmuDYgtpVMbMcni3QW6hern8x2QSEPQL1YzT6fTDNLBXLJS22G6",
  "key29": "RJpq8UHba1QmEPTFDhLReKvjXRF8KjVpV81DVzC4diKomGc8dRJVCeq6YG2PW2uYoTLVAGmi6PVZKwyxiwGwFEQ",
  "key30": "5QKZnFPvZJPSiqgPBCwkpUcF6sc1qaNcUeDUxYz6NttSKq6daTnVTnoNkjEBY8fhh9N7Enf2SNvXGHwRe7Axuqda",
  "key31": "3YP5sx1jFNxsF24vLYoyepTYYQSz1ngTj9WtrKPJZuCDi3LVSJTAZmkPPoLBpceUSCusHvJB9b5gDySJCY1M1Roo",
  "key32": "3XM1wmQbcHzkVR4MB9bLNLU4Y4veEESoRDFDHTa4ny1mhWgw7AGtJwFHTKj6vJMdAQW77gYeAhGK4TaGHtBK7NUC",
  "key33": "5GvBVbWuYJB39EgZHGZkZ1Y8hpirtohjAfRPoA5iMfNghbio3hxdhfTTv8FxjuCFMUVkZQPBUmLVAEB2ycQRg21S",
  "key34": "2yk49sApQ4KDsZkkyCuw2QS1jXLYMaSsvAeZMK58sKMxNCzjW9x22DpQHynJYzkUdAU4MYvfaStpMNSyrHDDP93N",
  "key35": "4Cyd2DtKeu7b6LhqE9asvHhSSht7f6x6Q6jaj8v2xw3KvJefwMiudqNokTwJtVi9H51bEPnWcKQAJh43CoVidK58",
  "key36": "22K3VhFBP4TtdFg4pe5Z1z9NmoFbFH1WYWuKgFGU1zEeuMGBrwfaUeQ7ZjmxMB1L6ecfJ94zjm2UueUFXXKagZcZ",
  "key37": "49RBTBqFvANBXsFijbJ6hv6kKtu7WE8e9mgLau5dbCMihB8ZTGGV5ymHtSyuoo8yXDZxSgTPdSCtvqAhW8yNpykX",
  "key38": "5L9HaVp3qVAUqVm1SUszp7YNfnJ5U24znCwDkpyQAUrdeBm2kYis7rYRYrQu1HJbj3WZsFULREpNdB84T4P3QJP9",
  "key39": "66zxmufHCmW9AGYY5Hn8BJmpfQYJAfQPAGhX5s7FvuCdboS4kFWR3XqykVPqwRJik4GeBXWwkrAxVVAJUGbCim9u",
  "key40": "3h8ZSNHgFdMEXUNTCiD2kF4nqownwWVKKSrMvoex1CBbWX6ZwEiJE4zb3g59jxHgeuUnyFnuC9FHkfm6c1zXbaBk"
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
