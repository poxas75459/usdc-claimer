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
    "3ZsyjgWo2v5w3voN5gXP9oxs8R8kEZMBTkwyycUgJfVBvtCw5gdqrLhqjs57b4Hyf9bpY8toxTf8rGTppP58JkT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ferwMCadNNs3zM5N6FKabBFEcGKuTh1EDL6PWdcBZ6FkqUE3dHvxdRmU8rFiWvpANs7XVXwTAchUdYP2gAXmUxS",
  "key1": "3uBh9Ro24cjNPbRokn2EDN6eBfwTnC2SYJGhi6VTSCMXbgdm3YthQeJAYaUjEAT417ckGN47hipGWWfxVeWEyVD7",
  "key2": "34MFD2zhhtnU5AeL7FTJ876fGaQEJgV5vBNfpHASDAu5RuyTcNAVrjDoEpdoDmck7ho4J3a5DuxhHGWRb16RtX8P",
  "key3": "3qVriiNsRNQ7EyhEuwScTH1Y8EsZpv41qeN4nHT27Pp8UACWHXegshsUPgwWtXXP1iWDGpmvJzNgh9RF5VRmnvEG",
  "key4": "5yPWyPUC8tnNkzMvLazW2emjTvWP7Z2Dsw9zdSTxTMAY1zatF1fefPpoGS9wWgqPQsh7WF6Q6PsScq2UgUTokBBR",
  "key5": "279jPm7zdrau8RqG73jnsfLzsWxr8sz2ZRsRUZyuKAt133qUvUUwT9y8BExjBmPtfYKBftfJkW9qHu3tLqMEZ9Qy",
  "key6": "uGJS7XFfQzMBMmZrCNefn13XzXjaR4bDQ9apF9es9fe1zUphXrf5H8PV9NqR1kpmHYvYxnQFhCuwUQWBJYqy6A5",
  "key7": "4maJG1QCf7Qge9Wd1Aon7sAYnnVCdgxeMx5emTbZhFz3G3aRE6BEPUY8iiJU6i8vo94emU6gtc2DzPtmuLHmsDV2",
  "key8": "5QEsKNJzoLBBkPT9m1NKS9tmVa2WRgZEvb5U6wqifp1fwqbHpofph2oFGb6pwYkRu8aBXnEm8LrBfVuKUe3tpS4V",
  "key9": "jS7qV1D2Xoma3XmdxM4Vf3BvMPfuTVNSs5BptGAreV26aEp4h9VRE1R2qUg41SJDNvXCDrG6Mtdz8YG4ufff7MJ",
  "key10": "3rkkQ1oN5ePuVdQ1NMxofwPer2ZGZ1JCAMFeoNAJpHCbrmLiKqYcUQ7Zjg6TRwVsTY3hXERQnmNp3fzh7J2S392f",
  "key11": "2zuygvRDkGmWgtBYEjiDLbdan3UwCQpKMAqxmDbq2g4HsqTUUG3NRygnDgznc38FzA3pKk4AfKGXpytQcVdzYAPb",
  "key12": "2gMbjBPr4bi1d38kuwXP7DU7Sbd65TdvQufiwqspD8pNfUeEAvHw4ycAuNskZSfvRVTby8dAEXStcEGpDjLKLJSy",
  "key13": "3AVMQ9RBXN5MzsUKsQx9Esd7nW18aR3r81BkVs1E7kVdRqmD1rPfb6cDvcsVuHQfUuHSTpjLsWY4o366hySQuPj6",
  "key14": "M5h9fJXmPprfyCLb9cdXXxARhgCZonSVc8ww6QMvmX56fwL5ds74PAHtCTfU7wzk8yx8GRdBeXNceCTYwt25tse",
  "key15": "5xMv4N5hWpspfCJp4hPtJK75aPwYcW4hDyqyhLjA8z4deTu1MXR6y1LW6gKpnejaGz6F5N7NWwxuJ5HTXfYRzSdU",
  "key16": "5CqHz2R6sTLjKxJeEV9AZSmqUyiBvjTM9WZ5W2hjkh72bfjcsdo3ApuoXXsvRrN7EnhwMVXPY3wYJmNATQ5D8Lkx",
  "key17": "2Y218gXU9c5MLqkpdJ1rL2oFmHPzF5FQmW85V2zJKM4vSx7mYKuMQhyeVTMYfNtdtqAcTdoXGhNQhzMarLmUQSVe",
  "key18": "4n3My7m5SgpiAoZvmefwuT9NXXgd35Lqt19mrVNri3dVJdt4vrhduLYTXBq5ajiqQgTrW9LqN1XVj4v6F2z2z9ao",
  "key19": "3abbztFudYnUyorT8wnNkRTsrS5nsQyvKF4dgdpWhTjZXvydDAq5Hi65wADfk6vt9Gk3hDdedcGsj3osqjmA4SkZ",
  "key20": "35x12Pc6ziSKJU71CYxUtvJ297QXDnj2PHxkLu2Q5YdRZTkzfGLVnAgcwEGT3k3NAHoh7D9Ucw9Z3Gc6BjvgkDjA",
  "key21": "2QFG5mWsuVUUzbJzHpi1pZgSZRRjNHnaUjSLUUXaUL6ot19jCZE4BwVgWw7vYFBUozdrBTx1oxbgpnwcQK6tH7Fr",
  "key22": "3DbzypqbjUSV7UrcYqNm7yQ5FF6aWDTg6tgQtosQifUk4PYdU6at2RFav6Uk1f9dQJE76xqYbTThV3WJVicua3wP",
  "key23": "248quFG5wFZKeWWi9BMJ5PHieQrUDz2eUbsqbpX68sH8YPNc8YhmfCvZz1o7ed9tSpcv44vWXgC3UjtYZjEKRnNt",
  "key24": "2niWgNdLeq8ondosPjkNhCevSkGUtnW7WHjHsA7VGnciykQMKqf1RQtUArBx3a5r99UDqrNrocs8vPBSkN6wJVki"
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
