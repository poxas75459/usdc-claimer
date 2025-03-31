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
    "5WALSJ5w3bheLS6tJgVi1mS8Pkmi7K22R6psGSrBTqgwr9p7qwk2n29sNisH8op67dLStoDjzWFevohSzJkLRBLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RniMdtAywJGEjhcwiex16md6o9vpVeMBZjDsrL6nxhSfHNs6dimykoKTrHCbfZy7pixHD43qJgLxdPnrc7GwJP8",
  "key1": "4AdNhbasKjQQFpWD3UDMSuvUgN6TDTkNpXiYWTMHqZiYZyof5ko7qdxZCh3VoTv6YWLrivrSJCK7A2XGLKXc4Nsq",
  "key2": "5bdMy1jTw278A8vSoSRAhpefbatCQk9sSQeHwpGW9pNZz8Ut6nbppTnDvQ8TRS3cDFPsJK6nZNYTwqc45z53D4FK",
  "key3": "4uW6VhqdxgGqRJFJoNAFZKQsmHyYnXCqZU1BihSsQ8Y8g2SotyjzpTv7ja33as8f6DaQoWdkkyz8b5bHPkzUFxMP",
  "key4": "2Vn3TEwM6L5sKrWGJehiyvrRHG8bhvC4sbFrKKWSgx4ei2fUATSpa8pyx3XShg5KaLfwAMTyCA84FSmTJWcfktSr",
  "key5": "2zr9GRSJYbygDWKtLWCz2XwwrsyVEQMvic6Gwei4K2a9N5iT7PVskMtA2wtySAuKAAbghaowvo19jAcoVW1jvMjh",
  "key6": "udPXJwPYa1Wopxf2t9ta36vWy7oQTJhqFnAFAXWQKCm5cdiQThZPnHt6WWBk8wKJ6q24xNjCHtDhkgHTsxcJD5M",
  "key7": "2dnahWkXMhtLyqg552hxbnQrBV195CqcF8fxCyqYZTj7Q5yxQcM7ob8hgdodKDcLpfsSPAHZE4YHPf6LurSpJxJM",
  "key8": "2V3RWA3CC4ZmBvghb8Q1NM1qEgUA5q6CPRbEUQY1HdBwun2B9eSY3cAZQcTLdXTttekZMVXmAWzJdHeogoMHfbhD",
  "key9": "2p9JUPNb3cfw6Bg6HNpp5aFNDhqm7hkWoDcbBMfMX5oLVH2hZMpZB6UAzh9oTBzYczYkKFG96mbs1BdgyyypqxbA",
  "key10": "AmqXq3oELXPWbjLxdT46YaQqBN6KKhdTJXzEpjJkMvcfaLTbKTq6dcXxuKXnWNqZ83JLJT8PQiZoaW9jiAg2Ab1",
  "key11": "3znXCVbH2EBkRs7ZEQVcdT6YLGS7g8aFW74bcC21ecrWJ7NZcB5J7J9x5zLjn5TMPKKT1NpgE9bTMJC5ZS9krFh2",
  "key12": "2LQacmpVDo8WdcW4um862XHaXWvS6KuR4gr6TLNHZSaJ5fqgSkU3X93CnT64zdes3T7XqXza3hi3vKpZZfWvYYE8",
  "key13": "3mMNEBExdg3djE24rkeLhH1pmRQa1PxfjiMHWjnxWT2iJMQTCv1oQ47Q9aTz8QwZbwHNoS5shEJQTG685gHtHrBj",
  "key14": "4EHhfnyMdzyimResTAwsrhFWRorWP8u73Z2efNAC89rFfhBDrbx6hE1U1ndWz91vran9cw1aeqX8Tnxd6TwMSA87",
  "key15": "3LCdp65TDivDh16BWmoLD74qf6evit2cQi5WoPJktHjiSckSEBSgECE6hf3szKH66GRSn5uj3SZMHeLu4t1cSAzM",
  "key16": "3mKsfbXGfjwBsednUzZw93ysipQ545k1gZmC8JaT747f92gi1w1zHm3avAL5hLhrtNrmDNVLukyKo8HSYeAcnTPV",
  "key17": "51ETgngeZxrD1rhV9xfibvxcFhd6yYxLJSAPjmvE3cSBpnPuEr4d1tbxcLsB1AjEbT7Gapf6M5Ra1ziRWCz4LsYe",
  "key18": "4QMvyUmFX8wyFazpvPp2htv3ke27uazdUSyzwUXWY2d5VgiTDZ8D31BMmB8zQYVGJ8NzboznEwAcyewCpWmhW8WE",
  "key19": "2r9kHFyB2mJJfdR1CMu56jdyzaY4iUrZkAUhGsEArGJjRh6roDsiLprUuHicdvSU1spHFK85v4pcwdDtkiuv63Nb",
  "key20": "2bzJqdbCZfjVHu9Sq3nqK7hCwKfHWYCKSKekbYSNgBNTpw3VXBU1KReuWY5i1qb5s4NwbvJ8unbBQTRm9t1rLPST",
  "key21": "3LeMBTAtUW5Cr9a237omwRdoFvBz1JPugWEPhLHCunePCP5oDpTXNzScWcUKR8aRfSWimBTAkyp7ME8w1MTHBagF",
  "key22": "HxUp68mZDh3Ro2xbBWZaEGF9gXPZ7bV894rDnGrgg59LRAASp45A2kxb2JvY3vzoHkPNGwBj9iphUUFoBtzPqNM",
  "key23": "4gLCXC2N7ekipKf6xqDjZuhvW6ahrcYiCD7caYZ4wU99LPNPDj2oD9gSA1JjBDUUSmzUbnYVbSr8BY4raRqFqqSD",
  "key24": "2v7Z39Kp1PsmUWz9pnWzASnG4TzEi3c9XbXUE9hGnJtB1xdNHjEGmvrDCkpKxub8SucMJogNzF7ijeexbePmzFtX",
  "key25": "5H9oafVfHjuigQTWsWAB81tCGriQyS6veiG6nJbgMrhok1Rkm7v7gCaudpqVeFZfv4VDP67wXKMcq4bm4KWRKEv5",
  "key26": "5nuWjkY7vtDX8y2xVFBrSjevXiY4kiwZuErCj3JLz2KkV953V5hXJyfq3qz78Xp2pHfhpYzhRqrFsoWxEU7eLFEr",
  "key27": "bWX7PLJCCpZ4xs7D2Lb15VvHfW2djUDZ7ycXvRPajZ7qb2wfLm9uQ4ZytWDGjzkqHP4Y5TLZtivQmhtX7TSSeV3",
  "key28": "46G9jq8JWHdEZM16AfBtXzfbbwE4xJJEJxk8YxJTNnnqVS4LhuG5c79xCJcc73Qkp8zDwuTogxxh6x67WBgYy7Ge",
  "key29": "5JtVKu3si6WhbzcBLhZUcfjTSR9QDMHqWzmFcL6TABnoJCeJ2S4xzRLV254sTbicppN52rKEeMhDS9X82Vr1LKHb",
  "key30": "3FDk9vVeRJa1SQcsua6bY5vRk7Cg4nPTH3R85iJmnE4XmMfQyoRKYHd4YbPZCcDiVeXDcQzX4gyjbnSBmdXbU4tk",
  "key31": "34NDwAUENYTkaFyF6dVcL6dgPgkeAN1sUgD99CEGCAzzvZgoxK9isb5C9RnRjBmb7Qhi3FFRoNkGXkBRAWPjadjT",
  "key32": "5REgb9dgdGBogfCHLFZrUQfsWvmoGiqjY4v5nYp6dQ76Xvo999eKGhG4RabjatCUZzKr1AxXyefYrSodxLsAJsNu",
  "key33": "tCNDCzVXe25sUPews1bPJJRK2crwnUyMoFk8TdBPYZXykGWK96QjHF9Z8L36yhGrczArgDxRtLWzajRRqHLwEPD",
  "key34": "tDGkwGycLXZiLxBN343r6Lni4MvTLZTJ99xhxMoumCC5RszY1a1TnmGHv8De9gGQaa3vf8pRak8vDFk4REsppo4"
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
