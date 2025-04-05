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
    "3J9vMUneFcEZCeaGy4v7TJ8j259qBTayGcqLUjGD18w6vwmjYE72WPFavCw556ahaaiJKMoe8aevxXjEX13DPYYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tnVzG52cct4RzAc8kcsTgF4114ouhxdvRKgAcHCrTwew9wzdthmoJTb3JyLQFU56UcntbYoY9gM3eZqS65sRZTJ",
  "key1": "5Ry8jkyGRyiV9VcJMVNyizEHN6Zdtd6LUAdJ36BSesBUKqELabCGBsZT9FyXwwWESBhCufNV8JmETAsDZ4LKd8Mt",
  "key2": "5ULnYZK29mEirBubx1dc7ayi7Dj3FHFnU9PCL8wKEawfZQyv6vyKY7HCbwJAk5FgGcFw57vktYiW7H7b4zhb3qXK",
  "key3": "7qKFJJYCKeHbBeN538LeZMDKe9jGsV2CScU2Qj74E93bR77SeRfkpXmyELV2fpbryuK2FjRpkhYEaGvALbEWsEf",
  "key4": "NRGnJtQSRXvqaAhoWUGaacbtTRqgat4PjPLYPDPCzqVpkcaxhBNijDnqth6NYqYNqMiWKRLEtLvkW1Ms2qrZ41m",
  "key5": "2LxEZmGsYRQifRJBeSc72XiTTyVDgWsq4Fw3PqbasCPfywDJxhtyDgPurABVEVTxPyyAfjH2WjA4jCz7Lgnno8Hv",
  "key6": "5qpjrUjvbywvJ3i5mbR79w5VFsJdSHVrNCjhMz3Bx8joL2Hkv2FirVNwxcbhkt9QrSbpiRdQybnXdyyo1SN81mLZ",
  "key7": "3rnSqDfH9kDfk8iJ13o8qZtiRHRB8rP7s8w9G1aShFNJNvuuZiEJUzWFbXRHmcN1BHuSK5jmy3mNehw5MQkaPZmy",
  "key8": "mEE7nRHjr8mGWNQkWMtPjSVLE77QLGEY2mCdHKSZFwbwDtPZGUWy1Hy97SMd4pJLqcrQMiEB4t8EwMndPoHczNi",
  "key9": "4saPcCFf3V2L8vg9V7qShLvQjiZkcNxjNx8gxnxkWyyHekFvf45xvjmhkdyHTdJtgdpuRza9FYTmZ2YwW4YSjZsj",
  "key10": "2pxmihpUeFbQQnKrEAm4cjCnT1mdXRsQDVRUaLub63MiCzaKHnLGXMqgWgDLAE25VQ9TYoyh2L5Tmue52uth1ybV",
  "key11": "NpgGJYufyM49DWeSST8xwSEDWuANhXdUwdw9GP8puLTh5Se53d7YXrKQZf3s6b7jEhrBoFzBahgzGMmY5wu6pbF",
  "key12": "4RsBtnQX6f731H8WH228s2C4CQxzoeYQPiAiAD68T4AStF9M1D457EEDearvUKZnrRurr3DUzYjooAyhcgFBsVy7",
  "key13": "2d3Zi5SdrcbJjAve6YTBU9puHtFZCmt16CCSiFkwyCXcWYBh2XEg1bwaAcsoDhAaV5vZTmG4BS2BMPFAzggADgdE",
  "key14": "2aSoCvF1AHPwYsoPT5BDa6Myb7DkGoLeUTpeJkEN6abXYzt1GwtD45REcCBCGLppR841xywAaJ55tHva89vUDzjf",
  "key15": "4TBHcMBArv78DXuJkWd8U3etjCZjqmKK6jdYNqWhgv2QqSNmA2qoKuZaCXuzFJGQT62Vgm2Q74Pziv4b6maMnUUR",
  "key16": "GFD2re7D2mPHvtHdztjRhVz7YYwyMz7KuM3Eeb8Hr3ZnjyWeva5xXY7dvD9nYS9hWJJRm95DV25y41JigAPNXLs",
  "key17": "3qwHZUhg9Kz593ZaJARZTq8jaruAZhad43NjVdQa2vyF7ZtwEBAN6o1GvDyGfcB28Rbtbncwa4NV8XRWxWWVWJET",
  "key18": "3iToYj7wSnFbeT9Gw597EftLyaAbMgQJoK7QcPMs7cJSjJZyswAN8dpfFCqKBWyR1gthk8EAkzXS41CJmc3xQg3J",
  "key19": "oZvpCmaDYE9oTRypfmCkc8g7X7MGtTvLG6KG57NJZ3LRN7AcG1dYwCe8ohUZYDomZggFhvsyvnxcYrWzMK9bfq7",
  "key20": "5JpzeVKvCEHtw8CwU1yD35B7ssDRuvnHmFzaxqbKN6j8vKdTqC6w5kzbjc3q4BSTBJxrGTRXDTLogc3EvYsYt4PU",
  "key21": "fSZ6YYzqMR93uNyQ9DbXAMC41CSov6BzPcUDVLCPXMo1dVn74s6WifoFn1KadVUaHdVSFiyzHxGayPMdu1tra4s",
  "key22": "3vGstbz99F8LVY5iEPfrpUy16i75Nz76sXBh545Kw9Bg2hdZQQGfg3QpboGHRTnHKQKdgCQBpDcZShCBxL3qugrt",
  "key23": "3wA3tNq3aByqxVZgGfQ8X19DKuCxwrvgjEpFt2MNhbY6GprxsHb2Gf3gmCGisKEjwTsSmg8FgCipnk8HjRPNnnn2",
  "key24": "3aAL2tQKhAiDHRzRJUWWp1e6puNSYVWjp8Ba6AdjE9D1VGpbwJgjE2mP1ZLErYgGcYGA9G4iDmVpK1hGyqKMxf3M"
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
