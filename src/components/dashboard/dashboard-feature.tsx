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
    "5EdRDqtu5ripdrXXwTQGeYDaNXWBWWNHKem1UQkVsCv2zjjCXKcACYoUwhgoD93kFVE6H3g4cUpNiJkXDL1afiuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cp6zTqr9fZYvSPpCVPKq7YN5nMj6nSvfcVf5UTHP9CRv2JJYBgJUhuaEiw5RGUDiG2Yfz4e9oDSHrErbf2cpJyJ",
  "key1": "3cs4FamjAJEK9JZhRU3yJEcpAS1BkVKUChZjsC72oTZfqgUZbgxzaMC7DzY4aeAGXkGJWaHnWSzM4PAfEjRXB22m",
  "key2": "3AbLubKmqTdgLcbkaKkyHyeJ2Kokfn1DfJ59hQcvTrbfwq12cJGrYxiAZC7VX7mH3RQF7FS2xs8J7sAeWboRZQ2r",
  "key3": "5ksLs3X3xURuGuFW3xhbYzc4trWo3ptbvtcyidGnUkaY15MEmNN9JxDkuTMPAvnJHigp7Ze3BD9tD1mBa4VKWs4u",
  "key4": "4HcVmb8otoqbkbrA9Wq9APKGnrKBQjHTkBKZaVfPV6Pc182VwdseSkNUSFqGMnGsrqyYCVbWaL7sB74MnB7uERiT",
  "key5": "3adWdC2LxoVz4DpyyMbm9k4nQxbs9TpzBfsmHoLZP6Vrrnkm98vnAGUobgCWY55G5PgZwDGroihbsceWy3GPkDyY",
  "key6": "54np6ypkGWfjw5DYNFyri6ZXHgovPY6aNTGDSvoybkMpvZgmJDP6hh63venPiG9UgkzBRZbNChGDULs6MJpgrGkj",
  "key7": "5veGoQ1YEjzsLT77vionP9KcefisN98gCVeWokCChbSu4NneoMvrNbVJGnMjNMVmjWvMhe9weSiFCBFDKr26sYbL",
  "key8": "3iYUySuEWonJQPnH2JA2gdZM1pkZbW5thVBTe8eD7hCtx2x2jWQEMnfhzipopuFRSeQsQr6U1RFvWG65htow58X9",
  "key9": "2UT3ea8L8nJRx8DqR8Ldda1WJ4oeSH1FufK8erNYtPSUeLgNG4zSpx8GKgmFBGr3VL6Fk1F6RhR9SsJL31zDUbhG",
  "key10": "3Jwu8m1MJBCbFzJsdqFvL5oNwMFxSLiVmXvxzevrn4gZYVe4etiuXGekHZiiPrSjW1DHwcL4KZ8ZhRiNnFmEhTrE",
  "key11": "3cMt1S865cHZyDasffxigYBiuGPHSmQZHR2KndEd7KdHs6e5B5AeDjTaZVCPsrhDiQVyjw5TAHQqF3Jz8rUhmMV",
  "key12": "TYETeujVgVjRpetPnnczQH4pjrixc7YfzDyyMFQ7Zn73WF6jZEW493tkkAyT34KY41QB2WH2LiWZeqcDeP75TTj",
  "key13": "41bHTb2GXNNnB3q5zrLoV8gPKLBZvETCqFPAmPBy4ZmQutJJ5vvvmkxgZryd6iQM3iXUexJTJR3igKCyH971RMRR",
  "key14": "AKfGjDXYggJo3bjxSGZ53LKSf3dz6BuMhVHuSB3NoDRq94ANux5qu8qq3gC5oofQ25Z7WmBFfDyyZ87z7Muut12",
  "key15": "3fBrFLticqLJqkeuwPtUL1QveusbkrrLaV62Z494Ypg4pUcbUdnjXd5y6rhmpiMXqVuJuj5mqBVo3eCqtgzoA4zj",
  "key16": "3EKXnhk3cj2HQj3zpU7yxtMMgxpudrLFG3e2y5126Rnir3MFHU2HK6hnc1mVBTfZyvoM2j4o1FQCbWwmrwG3dwDV",
  "key17": "5K3xa2EpfvZSSxnpSHxbLZQ97idJ7xuw8KP2o7cmynq7vpYT9GGfArs21fHZ5dFbTuxtSGFTNMNzRbZFH9FMAJhR",
  "key18": "4MKQg9vodaebdJfJGAb78nk172QMRQYoUQnkfowi4W6a447DniLckuypdbRqgRsc6LatFGBXX9rxokaZtK6N3XhW",
  "key19": "3AsWMyvZMV4wb7mVuS19hVEm9Sb5EyzZ3Y5zX7MYvawgrtak36fDcJF9oab7aNZ4A842WyzLyoZoWnsqRBNL1Dwr",
  "key20": "3DHrc5VuU7856DfXz9ES9zPBHaHhYhwpc1p3aKE7KuHeS2G6Z1FpiXxSYrhybGcRZo2FtdkvGUtThY15DwaDpAhB",
  "key21": "5cieRR3gCaNWxHh1Bw3QtrWHg9PiTiwruJYPKF5pud48eR8ttEgzofp5nGboBCrNnfJfH2PjjjxB5EGgVXjqiRiw",
  "key22": "2vXm7irXdkuGArxSKDCbGdA1QJyyzLgwTvUwQFWmkNgC6Zwfa7oqPzq9aB6iCVv9bsk14pNLDhYzDm6aYKzbgD3a",
  "key23": "7kHknS8jKg3TCfHEHZDMS88iPR6scu6LT46drG17qDDr7EV3V5b19JsJRvaDTY9MUvQph3QTUwbxDpbWtgDJshM",
  "key24": "5dPd8kpvHMv3mb3unpuW2muAQiwegNgfbsjsRiWRoMhYjDz6ErrZ3VVpAichg7MkJewFrV32Z45GA9aqyzSNBwk9",
  "key25": "25TdYW5TaK6fWHKMBweyiJH2z6FQr2hHBQaGxjF7UHcrdMr3d9NqBdjiQYqJrf37cnNJcYPokMVWLUB7FSRbG2nR",
  "key26": "1B2pcAg6w9khvpHUVCVUmwDGiWvpW5RuUbC54fb2FrwCLWsXWTJV43uKhLu73BMUnhC6p5FA8z4HY3f82z82Z1V",
  "key27": "24mzfrkQJFAnobbmS966qKrjseSsFHuAzJXAkaULxGqjdQDShacw4nWUKtZu3jJP9SqakMBHndXMAzsYyPQwnDiu"
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
