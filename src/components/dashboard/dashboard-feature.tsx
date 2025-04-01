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
    "2eXa9oLvbJP6RVUWYJEYUy1mc397U7eCvoN3zsAAv2BEUXercgUeyaAW9c5AG4Wc3iFZqpLFzCrnMJ3BqvQbYkhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9574esyRXfLi9abxbn2tKsfUjKC3UZFf5CKRchZJ1Y78JAr21RHwZuK2YEGaihRo7uzuZnKo7XFTY93ft2Pf6h",
  "key1": "3Nv3fbwLCMzVjDuyzvE3uMR4TdhM4CHbeUGVxV4dtHrSEuWV9R9wEqyBsyg52t4b5pkjPNwkwnDbpXaoEEs7MUT9",
  "key2": "6ATQi1PdntbZf3xPxS5a752Je4DExMUzHMC2NLccouiuWeprCqeru92wzKdFJ3NWRWRinkXppvQewaUTCwCPCCK",
  "key3": "3CHHxQgkPhZeCKQkrdQzGWvmHvjPBPzrQrg2F9XBjNwLrVbDSdqejY2Vx4EFAkJAMUbjXyZtokPAS1G9jQdXKN8e",
  "key4": "4cS3rsC5Uw8ifjao75VJiMYV2DcXL6FWTErS1zCrsJkB5oki4pzbYFperoP8vEanPfBDc8C1wCg1ViaPC87xzgUP",
  "key5": "3iSxvL9q6K8BnG7j81U7DR4f1sJnREpz9tUgZVmg2JfWTgZHEj22CLQpS926uR8peZvTFprJgCT6DPj3gkz9cm6P",
  "key6": "3bmFQyydfu1hYMwGHd38x5JCNje1uEEBcMrS4ETA7yCEfoisN5K2imtW93t7r1NAdN2MjgJxHX1LAYXq4i4Ga6hM",
  "key7": "b59mdPwc126aK9iuQotaLroAgcGZzi5RE7TGKQDdssnWkSsxaEHH2qEQbM485tXh3zx4cPhr3X3mGTwqCJ7MXKy",
  "key8": "2MxJfVvxrcL4bVLRux4qhDP4QvYaL6pQxVab9VDwcKrc8SfkNnNT66Ub4aWp8XDfPX4KjmwFLYPiXenmCAh7dXbw",
  "key9": "3983hbZ5jbseAPQaL4uzDDsfkRgfs8s6EBGtcNwNKxZiYwHtjU8wqW1Z4mSD9fnWmwKutHcqGJNtqumvkJstk3P7",
  "key10": "46ZYdDuBpAotJFVWFiFpEpkbnZWV5avy9LkkN5CgLi7voUTTED34pg9Yd2hGHV5qpxMVHK4aaruTVK2qyvQCNzSu",
  "key11": "5aN3pYLtst6n1xykzrVRSiRoevqs63ZwGdkWXjLkCSDcdQ3Bei9KDvZTi51bb8avXWQDScUbdDK2cgP7nbmSFTTX",
  "key12": "JpeCewgN7ywehFCSiZWoxeUTUHja6fPf9ghGKaU2cEeaSeDmKkP9Z7fwSP963Gfae5Q2txChqRVUjzxDWumFwzS",
  "key13": "s7M8qLg9VVJNQr8exiLSQ2DiYrfN7VyRAM8t37EJUibUdsist1reyf62xpin8m4fuDYPiVnxorCPmv6jFeLbuyF",
  "key14": "jzSNnSCVsqWTw3AgAYyXasBojEBoXAhBSQgm8YkwKrsfd9fsZaVY7J6NYPMhdowEguZkVLPeiKzsBLpeEhqJBQH",
  "key15": "5VXZgpx7JgHoewGq5weE25YDv33hd92zmeBHCK3sX9dJVifEWookPo3jyssGuyn3xkCFnPB9cVtbV6ndXg9rreKa",
  "key16": "29njWNAgK7Txjo2ScYwnbcNZs3BzJAfzhU1NmFJhqNhhkznKHFSYxxkyUY2ayMWpQtzFKRnGoVPS7mWbT3NhMuDu",
  "key17": "3mSwih555ejB7D915EPHeA4nBn9dQT7uR4KkMdzQagLWGpSBYrx9mLjteXA9hm7djH2hJLy73Zn23wCRXwr9WEtM",
  "key18": "2H6fL6P3T2hCLxjchVVgHLFHNkAihfrtgraGCbJeZzHVCjfqe5F3dKKsCN44UZFHZF3jYKeMutTRkJS16joX7kvX",
  "key19": "kGVCciQegdgwhXvE1tow6copHibrRiHNLJGSwE9zVU4CD6Q8QQ8epWnETtt2bt1MxwtfRZp4iGAae7R8bWRFPhU",
  "key20": "5ziBKEjqJm85vaB9US8GopGytN6QjRYQhUtvxRmGdwAzxjCZn1NkdfGsDi6p7KL9n7FHT63D3CU74i84y44nwdf9",
  "key21": "2DKxDaqkgvxqoAgCpAQQtH3DYioxSgwko2xMZ7f9ddMZ1hqDNkbbKo4B1eAiWp5kNWaoSym3Q1KVcgbHuGfUteus",
  "key22": "3CQDvuvNsRY3XJU7t9qMbybp9gVNYqDm5nGcrYCCSvmkaLvPmPJn37vSSJGgcUhbcyYudFeYGyp65o8RmCtRU1Nk",
  "key23": "3V6yXKQkDmS4vQJmUYA7gSsNz5PfALfeVxe2LRqLqMJQYfVD3tK2u2Gep1GxDHN3DtXwWZAK6Ahy4EMnH6BXJtsz",
  "key24": "3ML54yMkqQ9et9dBtUY86MAGvw2rTsNWBnhvwzskVNYb2fAxLQKa2oDWK9GRqZp5bxczeZU1x8nVJoh9FxMYmTS4",
  "key25": "3bca2C6FGVxwqmoSjztnkT1CK98rmmd6komhb6jNjJfD86LXGYQxvxVqMBeHdZ3ML9YZg9w9vqjhCbbS2rJFgPG6",
  "key26": "2c1Hh2ZKcx8CGjAQr83uadH4yrt72qjonfjJoc5u3nWRtP95nJEC1Z4tvkatTdRnrg7ZCRK5MSMA9wDiBKMPgxhE",
  "key27": "5cqn7NZrVMRHUb6caJhL8fq64vSjgn3VLKFq6u63d72Uev85uPNfQ7ms24EyoHewFnTFr9V3EyrpAQHmj4iWRoyY",
  "key28": "2Bb7s429iyEdqtQxfV2KDpQgAjH3F6kqagZjqomC2HfVkWtMMDYsYLHhASW2ausRJU1jSUk9jgsK9xwGJsfSqGT9",
  "key29": "3XS39vR5B2ezdSKEbZpU5HBsv2hrpv1fV25LwQstTGDgBrMwf1PNHZ7ewbNwFj1Mxajfjt2PtasZhEwt5xvnQ5fQ",
  "key30": "jS5KA4XJpeAxTeba4dQ12A2nu49q34XE4J2Vr2Bg4RTVf4mETqLHPYqyippSpvcFNJj5UDFv4VXnRsgveJQEXHu",
  "key31": "4ABxzVdNTF3MrF18vUubT56jpHcZYvewZTj9AQhyfCZCXRjtQuFwdPT8ZdCZDBkLazJMDs7S74UgyvUmwhFynkNT",
  "key32": "5F8tpyHEHZVy8TpXtXbRf2Vb6XcFAgxs7hNqgtz5zCeyYgsFQP55YkoFnpRenLoSQsLRbFNmwFY4nEmxjKV4ne79",
  "key33": "oTDCTgQ8c6HZ4ZVu8gjKmzKxLsxnDRzSMa3WQRfCkEtgj11ijtEg7XupYKhfqqf3JY8p2yhbsJPhWJ2VF4iZv7u",
  "key34": "2f813Mzde9v4GaryYKiPmbamtG7DD6V51AG759inu8PLXj3npKxoWmcRNjVJx2qzxK2rbnqjCr5h7wBbfnMRbZ2o",
  "key35": "5LCp5hMgsg34DMAhve9hPcq7vGMP9Hx5H3Wk4EuretsqPS9yC16jVDjfMgxs5acvszjkvVHums6Z3fvhmimDbRTr",
  "key36": "5hXtyBvcjqPnGjC1KwqJGruYCnFcnkHKEStYnRScJNTUgoLDovMCapmBrMz78z6jvQXdGJyR3A3U3R6v8CECaXco",
  "key37": "4PXwAKeFYjRrFg8gWfHZeANGMhLJ8tdKK3iw9uS7yX6CHFPYyxZDe9ChewPWvTqoWVpwAjZJEv1P4uXetfSCbDCY",
  "key38": "46BJTHRcXv3rVLCaznLZUFywGUroSQvEeWLMJPHzJVK7wmJkU4ss5uqX2N2XcL7PMktFTpyvHyCDHm9izWYdSGS1",
  "key39": "5Bk8yxE5GHpPiCt4tKEGWo8erPvrPDHtKtV1Njp6zGV6xQPaYtmMbKhWc44GHNA83zHxdkUo7pCApkL11nUW3afy",
  "key40": "5J6z5WztU4hR4owTWF2mzcqXoYGgpGGo6rWUQfMmtSoN2f5ohoTd753Qe9C62p6K8irBq5rF7xGU5cwyCq71rteB",
  "key41": "2xANFF6foeqSMM1cqZzzvs5tKnuZ6aFydnhiEBYDpD4rXSxr4PuGjA9V4sro4MYLAA3nWK9wnmd8v4D41dJEWwAr",
  "key42": "zNGEsVDNv9LFnu6tA7cBjRWQDU3sDRn56PugTZ5hyoxN5HkYJCs9gakbVjPbrtB7FLhQ6WgHbfwcHdcP7DGJ4ZJ",
  "key43": "2ZGeGXS5uyLXg4X4DNzogmPEW9WRzkvPeXNAjBAvzBvgsFcxEJxZ2VJHizpqw8UycX41Avs1zgUqyy8THj684t9w",
  "key44": "vjmSU3a9zpWRBYNegZ8RtV6KZmZZp4MBUp2refEZ8TMoXMx8AdcSXcxutzgcQ2r4Xy4hmAFj2BWpU3PXNNkqb2C",
  "key45": "3MHpF7zEKKJPPtvgezG6mTZHNbhEt95PTyuYQnKEimowhCFtr8uKtF4Sh6kCmPDzqPYT9qW3bwZT1N3bmBiWs5bz"
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
