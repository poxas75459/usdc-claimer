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
    "2c681yEqFLM6cTP5kra9DmgqYP7ERFex19ZP2mftua5co9jiUxg5XCwZ2qpswep2sp8VVmYjBVsVeQ7YF6ExpqGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hn2HBRbBAmTNWP54L8wkEmqE3cF3qzSMLMSeMzQSgb81WPytXThuBxY4K4nDSFtLznzfad9VqpGqLVaZqCnDUoM",
  "key1": "2Xjd7mZ4Smkp1QeqWi3mPvKyp4LZ6BFZqnoMvK4mZudrputUVqGot1bvcsGTkCo1kWF2p15rLvJa3JPfSxuGha7c",
  "key2": "5hNH2RVz2eYG4ixYDd8BqYgaSBRwu5MjvYiGRjio7vEmrojYpD3LxKwitYh1ewL7RUrsL178DVH5WJ9kGFoZuQXz",
  "key3": "4pauYrc6PZdZSdWgCPmaJGyV1SWCMKDV2u9rCyww2JEwZ25pVAUN1UtzxHw1kQ8zUo3Meh3MPrPniMeb2QKhd9cz",
  "key4": "2pAxiaN8gRLWS7wpyAeuaKcyz6cuWt8G1C2Up6AyGYPdeY1KxBHrv934MbmuGLRYuERKhRVxCCQvc1kXYj1aRbsa",
  "key5": "5ZiZdZ2rXXmCyxN5guu9nRYvxxZ8k48bqSTzBWTQn3KURHKW6exTks26sN4S9U3mfbAS8grXzbHeiamY9uebcnsS",
  "key6": "VpRtM2zVLmRBFvkQCqcTtFK5J6kTucYxGucf4nATz7B7N2f4L7Gn4HctD1Cmv21VMQBfezRnXc5nn9rnJsMvAKZ",
  "key7": "3uMtdEDEohcWLmGyNYBwSfqw3KMVnQeNPo8REyiVw6eXp7GgtWcZgUcCFnre5hcxY5ytJdQcRXDwTaweoei5LuSn",
  "key8": "3Y9rKwxurJcYocrQ47PX5g7N8jy5yYeapT8DZQWPjeYuba39bb6BoRDjcWWJ4AQM7c4AeQhLEYhe5T9ZUCPXBegP",
  "key9": "5ePmXYx8YXRbFZfJjSqmVKCctvZahb9B4U36L1RKKyKu6WDRFjCShBC2SnZxxis2CtTNVh1PF6dvMCwEnxj9gWQX",
  "key10": "3CsdeejSugQKZRfvgHH7u7BkP7VVKzbwEgSFoDcRVdHAoGBPTQojbAC86yqtNgFDofpeYsHjizyfWRqKDjoDBUWV",
  "key11": "4aSQdvbe8RPnnU4zvvr9oCJ7r3Zr1HcHjHyFS4KM23neoMYDqPbPSHdUUc9j1bKuVojgt1sLV7UfEcfEGrvMjXC8",
  "key12": "3YAbwAiAUDYA4JW8b8tVeAV6A3CQLAzdZyRSLfbJCFbAQuJiDuGTmupvkRb3RXQxKBrXx8vSnEDh52kcPLDwJ8zi",
  "key13": "4euUxwwBASVXdRLHGKpB4YkW5gDnp9PxtvkPyxd82Wm1iSa2pfo2v247MYrs1pwxCpDreyzKcYKbMSugKV4hBBhG",
  "key14": "4rcFtE8mFQnwedHfksnKfAwUyxsebiw7FZdC6FnB2RtmF8xUNNMftwrXbv5DTvB3JWjZk2m2GkvMgDAGzzjLu9ZV",
  "key15": "522TpggrJGkzQ1EHKqGMDziqv6YZaCYSNEyhRk3uhrRqi99vAuduRPP3c1rwWbRmMMRpjQhRu9VLDpU82gRqBGyo",
  "key16": "2zbjd1MBV5hWKpeNXPpURQTPevmWyrKHAZ14FZ51qKVKzm29Hcqnye9BrrtNRQw6BUySRJ3bxcNqXHGL8cJhrvR4",
  "key17": "67osh22vLgwA8Y8Mq4kvLs3ZMW1zzTUS5Wxrwu9FhCdyRaEfY883Fd3ckxiMNGv1b6kLZa2B6XQ68J48C2iTRUYk",
  "key18": "3PvnCBCrLAkmWUSZdSNrDgBygZXBvzWegxPqkH9u7PmfGdYFtnPwQkrDBjNGuKAPthHqHUpewm39qkcdsJRwcPd4",
  "key19": "2ShHJF1Dg93YseBhzoZ7PjAv6Uqm9mATmgPyV1Gidm6i2RvbbDjKEzK35QT2Yp4PRpgm6AWcSWJEfJHzyBaFVtjF",
  "key20": "2potmyqL9GLguTmZ6Lu29M9u9LAeTrMeWykW8nqrtVqGMvfwfTVvvMkAJowEGheMCy76S2JFUWdbX7dHKcnxsT7f",
  "key21": "5wMjWAN9TUia8cXhPseYndXhR1f8tL3CVywfaJCxHNVxe5wULjzvVZSs4TtJSLfTeuXYjvNyGvzd9EHNVAtp8Mpb",
  "key22": "56M7Q4GHUrFssoQwaUXood1xtJSKQNJPcb7sWdguqEudCcZiyrfURMUTsGWXyq6B2427f56DoVd2JVmDqV5FS6Q",
  "key23": "2uo4Ghv9tJ2CthfDM3NXTyn6B7krQN18Ci5nFipRbVJCzLQd8tx8RFuNsEbz77ptchJ3eL9tmrEkPwR4vvMR6cLk",
  "key24": "FnpZceGTq4cmX34jLpyqPDndm1VtmduAvT2W9zLFRFVwJVjYb8Q2Zk1RiUo7otjRTNpMy17dwGNmwFx4NY78GdR",
  "key25": "5yWFaebDksPmD6uTy2jebReKCxGd8xTUjLCchFr6crsKNRM9qwoFpwxb9F8frSg8BWrxna6z4A7QAWzp9YJSPovr",
  "key26": "3VzbsZWHXyACMEpq7nHVpTNty62iGptEn5AtLA8SQDiwMrqqamA9z8ZNHKPLJw5E7o91VoVPw6yMfrudF8X4GkyQ",
  "key27": "425zDmkX7VeckRyvxg2wrEsRboYiUqJnhqsxbnNKbtnkzvyKYeBBXizqTmBKXc6W14yVtxnCNUmDkRX4BstG5Faf",
  "key28": "5imvfpYtzZvknHjYTKbxhcsJWUnC6muJptRuiZePRFFmefoJS3Uccn9KtmVV6B55MeMrRo3CFgjarViMmYqzNbx6",
  "key29": "BNVJjXkhqaztt8mUGLP4hFPfBMnkc1nBaLFW3QVDn6FmyvPodsjzBnkYmyrC9DUg8ZYsrDEoBB81QydjMQH8P1a",
  "key30": "3Cpx7k9Y8YkduV8iLYSeZfC3qfBhacoSWk1NnYQzhpn5YyB7QWe4GktHWZLbCz35P35h33CRHdCJ4Zwt57xoMowe",
  "key31": "2HHqKxsL4GoGG86sv8MNKczaSUsujQGXGYD9w2De7Y5qbk5aqqtwpAyZjy1fjoaEF5wT3rihVeCCgEzKGjYaqtLa",
  "key32": "5giRCe7fHgSbnXsH98juh9vQYNhXzBb8J365xfzfF3aZmUAyAyetP8icgbJ2yCRTStAj7NQKRDNh6mhRyMJMGGKd",
  "key33": "4Ezv93CVCheZZj8iknLyohMkaYFF6bWq8QP7hphe1P3ewfLfrWzZQhD9oSzeeNK53iFttsfYwGLS4EH3ChDrJnV7"
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
