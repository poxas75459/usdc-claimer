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
    "8rvhZthcF2P4BGZcuyiEW9yWJ1dW7vZAEAmpPTFiCoxhXK7jzMf9XCWAC8sbtPMDekxBoqLBnRXGj5sNTGViGof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLyXw8S7Re9gbVtNJQLSsdxGTGCC4N3cecCCKgcKvBKmSGP7pBEp4GjsEf3KbWLZFEtvuPAB8B9UzgJhsU1ZPj1",
  "key1": "3KS8HiBAsMHtyPQsJfpLpwDRLcMn7YkUTkHe8b5bxcAQmsYRCYw9xDiAbeMS8QUrqcKzzCatmDGBUfG7mk1mgEzS",
  "key2": "5ieVhhAJggeVAf5dJjQ9Tq8vRFDrYQppqviEaa6hS4C8JUYEp6Vzrnp5C2w4SBpR3AFGhVeD25sQwqwL23uBEjGL",
  "key3": "4jYVVrEynpNxrfkDh5uYuvpLEhKCmSYKLX3uvcHcuDw9ocjfwC6uWtmDA8jEuqSMfKrKoyUZnffdVqMCVxy9otUH",
  "key4": "5sG1qBYpd8sfq4iNefSmycMnYRbhT9sf3WGjUp8n8jARo847cckYRRjKJsq5DNU5fuJci7aAMhrHqdSsVc3z9Pvt",
  "key5": "4o71NYeqFWQ59khNQi7YFnT3keHJFhgY6XPtsGhbPZP9sGscpz9wSjwdMozFvYGDZcVgM6S5CfBB1ezi4ugafyhc",
  "key6": "5eNxTujLqicV8EjbitvDYpsa8a6bqo8Wm2rJNpDZthVRatXWXNyY87snfoeXb2PwD299Cn8EDGQKZeCVZ2nahypc",
  "key7": "2u8cjSCm1cqDVD4PqR3pXc2ctz6V8fowyJRJ3pBbSSF5T5kAErbHLgNyBdQxZRPeKkyseg6j5T9x3kYZe6RyyDJ2",
  "key8": "54RtRWFauJwSsgYYupfmnv6MkdjxYuBPQZvu2yxGXtAN9rSdZ48UZdgW3fbvYSr9ciCFMT1KFeki8C36vDzVpzf3",
  "key9": "5FG1L4NSwCt85j7KsbYHpUTNKuDTyytwCxByM8nhjePvEjsg6LrPF3Eo37jWbCpmp5r9iD9pBEjFgk2eR4bc6ujX",
  "key10": "4zL9t2kVaoeiz25ieF4dsLmhrxn4ghYSJ7JVT6CFd3w2KQNKUjBHFLfbcs97to8gvxNN4LX7kEdSJzz4wDMbx5As",
  "key11": "4R6TPcjBkYmbXjFh5U3d8hCgQR5BcERLGELu1PksxvzXW7ULF7JZSEPhmTHA1B3r6fBzU8Mmd7BRiLX5e7LwEPVk",
  "key12": "4PrXnqWAe1JpcH2ysCsVFc2BtpJ2Q6d9p2gXqTNWu57U4SbsyUiezWoRMpLfsG7YP7yM8Vikc4cd4Z1WuqawVwDE",
  "key13": "26vEdYaugcHnAncoteYXQwGtHzFxHW8vbfSdd8Ran1JeLTqMSG6LXnAbX7rdTpL9yB81ob7oT7twwraRDeS7kGFm",
  "key14": "fLz9YMD4XTiVijZAETEgYLKowV8BUs7XfXyApmye1oD4bGWGzBpQup7AEmeZEC3QR6K9QYuts7CWssYxUETDVcM",
  "key15": "3Gek1ZRWQA7q4qthocCi5Ui7vWypJfrBd3d7X5upKHEXMYenwb8RVuPKrkN68CZJi6HXh83EN6HVuU5V43DmLRuN",
  "key16": "5vECqgqKitrqkeX9wY3QBtQk3v2aPo4fHG8pweRzKf4vVHr6fsL6CUw3FGQXPKXqeqfMorc4TwVALHBv1fPkXvur",
  "key17": "566dk1CWBkdPBTXYFFR3q9uu8w3dWD1ZWkuiTDwZ58UxFd9SxtP5pc4pa5qFz3eQi29ffA88aF9E4gi4noWGhZry",
  "key18": "3xw8PjidKfyFgWkNY5neYnSg1pfmBRX1pkipJAZdtHuyXmJmMSZD9kB3LWcew1W46rJ437s7BhPJTSDrZF2v5XpT",
  "key19": "3f8b1ZEcVPPxLMQSZ6CDZLNbRRP9zDCwA1uqWVZew7nx231FG7EAiaUv7PaBfEiqxpQGwDjTiuuhpZqqzZbsjKBL",
  "key20": "54o1KLs2zKkf8nVeKtJQ8L73wJYcZHhyxEnNUa8xRfTsbyudnNRVWavkscZtVHCFabRgSHLdYLvdqjXHctFa4yp5",
  "key21": "3MACNu7keVqcmWCPSd2AoUHsEJ7cozFpxU1Vb29cS32zSnUEynbYH6teJ7UJiANKnhDWUjvwB1yzhe2VxhyZ91YU",
  "key22": "35znXJBVCASqCNTMH3yveVfmFp3sho9ydqFTin3R9UZeXktCLGQhvr6Brm8eLg4Ka6ymkFzATpZ6HWGzHAVVVBzd",
  "key23": "TGoqrXu6hwBn51PSSbpmep9GYFZVehXLqKiqh1LR4RibC9wG5CPtLp8YRU65mhj59KsrmMGhTkPgimbXJH2qspo",
  "key24": "4U3rmyoh5uqHGbmzKVnPrxHiu6bkcTmukFMxoJW3WVVLVcFWSj8J4qs29S9Ae3rLCr953qa4yV3CUZR6EB3V6eXj",
  "key25": "2JsaTgNPKWX7GHAuSMANzdPpTcVMzUL4FpppT1JqAfLACzS6GswSatg1GVWjc5Xrck5yMNVtazy2HuYGR8MXvU8H",
  "key26": "2Gz3KgPPBUbzKWasiUiCNPP543vwWM9skrv1jJGDCfHtcBm7K486Yzb4NNaPvTR8jwg1xULdNAcnnA7PcEDR7Bwr",
  "key27": "4kGKN3gtCLhPFMBdsuVPSJGkTQHh3qXNdY2jJMxjWmLaPk8M4aPzAwm9XyWXrMytwpvNxhrrjBCqNtNGUWG6u5FE",
  "key28": "3EMg5WGpzZ728e4b2bVXrmwWrnJMNGZ1e9AdQpfeBpPxRomv6BmZphnKwNaUsJrYMtbGpbZg5NBBpzrVDvadWLWD",
  "key29": "SFjkNeQs7YCGAEsq3EnNjovxRAmmVyQjUKtix1CwE9Ws7nrzkCZvZpXyRrPCrDn5BHoeHvpqFXqpy2N2S61JYoa",
  "key30": "3aa58CjmZzinABMAPvWJRtzXAAx1tKqvtwYj1ii5Lp17qqQtNVxVYkxiHsrXPenED58Fq27YDftbiGAHaG11WmpM",
  "key31": "RGEemmeR5duhuDuYVFaFgNY78fwFFwZSz1T3iajmHsMWAM9vubzokZaLASjWLajBHw4xzorYkLUuWEK5j858JFi",
  "key32": "cVHnh3sr2HRE89Db4WxaaMdXhNXssj7Ph5SSTMfoLPg3YG1UsTqasUPq3rz2bLxKbanEHgLBWJHgC2QLDeapRbj"
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
