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
    "3dRUEkJK29Wm1xTwQ9ynwq9KG8n5VzUqwfSuHqDmfjqGmUHvQTbzxVaLj6uP6w6eZfZ58zHnLchwQfgtFc37hwkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywuMgDNsMrDdYusoXBtwgU3jm23CbdCyju9vWUtR35nHztez3m6a7SBqxReUd3ybr7YAqWuPtomj9y7NXQoVMMv",
  "key1": "39Xfj14YctoTobEZu298t5cScAuwqggKqkmA2eFMeoTxvWFdLKvowDPvmc4PNQuTeKjiVzSNHTx1RqPP2KtY7Dcz",
  "key2": "2cJfcKPbNAd3K4CmpXGbDYVPnjJWNghV21kmrEmh58EQGww1VqP1ZSgwvjxNBt2MLD9HH3wNte4gpadVrvsZis16",
  "key3": "3D1Zjx7KRSayjLhJQUGVyVBfLNewWGRSnKSqUAKG6E3AT6QPHxsnPUh9rqyMQqMe5dJACpapC81oKsAjJhLeMuHJ",
  "key4": "2GRyG9tr6MEY2FE8Xa2y9GDqxTooXqCYcbKQCmsTFC9mwAnytVjPcyMNQPQ4eRJWwgY9jepXpqnWE3zcSs27qDNt",
  "key5": "ioMSXJFQchHw5DooeSqnmzLRYEwrehK2sXfXRJdfpYBiBQXd6Q3ZScR59X6tfP5jeaygXHzN14Hgzf5KDWLscx2",
  "key6": "4hzyyjKrW5NXKbHzofXMg1PvPmVGxPNhBKBbGKthADZoA7EXEna4H3sfyeFqAbeDgabzKgaKH6Ggp6x8UKacTrs7",
  "key7": "4s3EB6PSr5VnWX3xXoq7KrACCNU6ny2WQiV137mX4gjTMXN34WMoJ2Qiwp8hHzrHN23w3xp4Jr3qUxT8a7n46Q7c",
  "key8": "4CbAdD8bXazcLv946aCxSekEqHbdG2YSQcLXwEBnzfXjurD1YH69muWTNvRNZdt86Q7sKrstAGYhxiyvtqdPXNrh",
  "key9": "5hCjm7wXgo9Dg4VsWJnBvwvJhw1N9Z1gJveNXMfCJQGGjVBmsmzGoyVVUwasEPpLgLQUTGaJrcDhpradW8LyC94",
  "key10": "5Dc3yFXSPbsxvMHcshdAYXcdYHonjV9uBwDdxo6Er2igdKvJbV6qsvgLPtBvtmen5BLGYbrn2JrebbDQzJHKfYYA",
  "key11": "3x8hAWX1hdW2EFSPABc4iEzLaa2HCWWsZnSP7ohQpNUfwHPqVhFjHAUihNzNN9bj6n3ieE3CNcLJTETPSZazxqW3",
  "key12": "2AGS5buzJRtrMbL2oRn8DtZJjUX4b9hbBYEBwQT39EExtayDMpt2MKDtwak3XMycp1nawBLsS8R9oaWkYVvYu75f",
  "key13": "DWagaFHpK3yoJ6CEoNHM7HFHhWbzG4Tq4GQGqcM4wkEFy6LRuxRgKxN7qJvRPXFXrvRqwz5quSNnvYbcvNhB3kM",
  "key14": "5kiphXnAQLiZadKk6D1twj9WWZMzrfMkCJhTsj4XnABt2bHxWbdW7mHJ6DsCMmHHj3r5yuBysDgDEwY5Utp1Sxrj",
  "key15": "21znjsTG5RKa9pkWy4aG1ZZxfmaSLAP3ACynq4yXKv7jKnpCHH3zYZhzvkdtNA8PSpCU3AFH7x7HfpvkCV2dXtVS",
  "key16": "3gLjQ9zYGGC745wkRDDeyuxN7cZo6uUTMXQXCeZiQZ8tTHZEicpjMKbZLMX8TZ2D9UwAt4A1d5TpxZE7wPHX2aFL",
  "key17": "4vT9ZBTPaJ8a464pa3mEDdFLCj5wQY4mseMhhVa2EWUxJz6FiKbEnU1rR3gnsFFGNDA26Wpy27gdoP3SKN6r4wSH",
  "key18": "5nE18mJJx3iTWTA4CCYqfj6YUG6KVNAXco9QyFYpTi9vemT3QkJ9ti57BVFNRswJ9rAaykPqfUvAi8KGtfZxPf6N",
  "key19": "4gZYidM1J92Gfzmcf1HYHQuzNAVvqzB8ZJiEQdKKZF9M4Xnu5vfzkre4aQPGHAh4SNzKgEA34a7vgpcgsQxy7UiF",
  "key20": "3Wie3Rxchif5aN5HneunNZ9SugEYNscCb5etFvwcvHXqNGNXi3rqhqvp76FJQazRQggvY8v8EQu9wmqtZv5CgFxp",
  "key21": "dQNhNJnEjHrj8dpCP8Qy4BS74XMKwaKmQ93DfuGLNrGKRkxcCBjpm9KRgTLip1GhV78MfEkwfwWiDYSnZwT5byi",
  "key22": "2aV6UCA2J6ZwZ58tHRSs2WMZFEct2KZALicXQJZpHAtvbPP8fpEsQhJDnmd5FYaviAV83xuJsTFCNy7VPzdNDQLy",
  "key23": "5XEiKdpM7MiBJmkiB5cuBYyxKGAcCSSLcbuC3QhrCVmtaKKSaXgJD4h2eb8GC8Qjrmd2RdoRdHCBSrd9skkGKLRW",
  "key24": "5KXAzyvK6kkidagdaV9TPTSXdD5A57eJh5etwWYHyDap3svSbqABS4RTN6t7FrkBLZFNXctKdUjjvfiMVKoHVjQR",
  "key25": "5K4Zqj6bm6AAk89dvtJktNJnnAYoyMjPtExXALeytFuX25gZE8W5ZeR96Vn6gUs8nyy9UwhdBhPaeXWFVeqQ65UZ",
  "key26": "2N6bPhR1xQpDcp2CjKvKm23SrrCNY3QiPFwxEmFq4o7LxyMSxjP3yNV8UXkbpamx9dpk7w8uzwX4o6poHeo9UTuh",
  "key27": "3fRzsovBDjUQ2LFLRHoSLxDqefBfE2L2DxWz2vQaXd5BsRtDTUdrVZByBPnWW3b5ermdq9GnwoAUBLxtdCNAjnQ2",
  "key28": "5KvbycM6jJR41PwxfVN89Ja7UyeHoMvCExjAVKmqxkuJ2ADkBHqgNKtmhTfkekBqFW3z5rwnAK8NjZxumGkpED1D",
  "key29": "2dNhm2eUsVQ49dQRnDH5rYqsF8vKJw1EjADASVCJfndazgsfFNa3oHUADq3Eo3wTNb1DQSyehXnx1MQGZUL2tujf",
  "key30": "3p8ZM51XwTbzXUxhGpmH1FjAH68YTbZuzs1vNLqiJDQEunzGSdeVA8xwdobZKVGvZMCRsjo1YKdzxUU6hqs5MmBC",
  "key31": "2PYAjS2Gx6b8pyLUjuE25Q9PRuv4fjjnKokwmZwcdFJVYC2NcHuoYnk6y41SxjF6PoYVpHEPo5rAmmPPpAzLHkxa",
  "key32": "3BpttH3WHVVPiKi6LUpxCGkYR2gUuaizeASae2dZrkvEshRH5ZLgdHQ2BgoqcurFJkzuFP3Hfuoe1tpSqJATXLwH",
  "key33": "4GSLiwnZ8icrToRnEKcNv599BTqL321dDuFNpnCP7h3RGRJWW9NusWNMUwkwSCynBFSNBqny8B4k6xfRXu6PcQBk",
  "key34": "4PGBWDPqXhReAT1HYBkCkuZVURtzb5VVyZicRZxnTRKnJdjZo23tb4YkXEketg5JoU3WiPLecgtEfZWMGGPV2eKm"
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
