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
    "4fLsUGmRzEgoZSfFgvuzTtBmEo7EiTc1DKQhk8Hc4nikSqikmAEwmdYFPNwi2aHxq8Sxo94WuVJkBLAaCFga3wwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FAsmiZiUxuCfREVyn2uVFsvYyT2cj6Qbs6vZ5qxRsSxu9szxFnTs1w4VY3TqCnKtQsogrBTamvVqne9RaRJJKa",
  "key1": "5tzPYnKNnJsSQnkxmevxMvg2i8uXY5tdfGNnKRmVoehpny8GtU1nBafuaZfE3CJQEj2DWsaKDHAzh1GdtwGzUQ4j",
  "key2": "5kJHfua4dBuBJk67GxRQekkj8jYSCMHkRwfr3eXfM2LJokREro78MConTy4uLvUNhzMsteTgetjJ93PnaBE4kuWA",
  "key3": "53tgmsNFZ7NujLDVss1K2xtKhWaWqkCdV6CJRo2Jz4g8BGQagds9wTJcEBLtbCrVVR4ESBgVEAUzPWHJc791NRWV",
  "key4": "2nTBWNhKyxYBnbQcgY2LMhtNxs9cuXnagUaSN5pswHsaVUys5aiUsVEYa4kixNVJv3JotgK7MmkyGZAEEvokH14S",
  "key5": "2mqMyA5q7881GZGEqt5m2FWbfBqf6w11mEJqhbePuELRTV5EjHu7xeJB68JCQoyv28ZvBgrwVYH1sWAdE9xuHHh4",
  "key6": "3F7WXhHHg8emhFd2YpvGJWQ8tUZiihLyTjd5JgwF6iMU2uDQY1yJH5MeS6j72wgB73dSRSCXZSfsbJgtHv1mN1G4",
  "key7": "5FCjzqJ7NrLJqygQf5eqq1uRCx6FGpxDswZF9gAEfkuA8ACPrBrRC8CzS8awxLuqYPY7Qct15vi5iXpcn9vkrpwe",
  "key8": "5U3eFQ5nbb46F7Hui9wbt6cv9mqbaVXgkLMjJKicD5yYSBfamTQ2fWk3pnTHVnga31uvtQAHGQSAoD387xwMMe8c",
  "key9": "3vkzhLMejfGqFU6twErMf85tQVA6c2mntubp7rsvsF6nGEwBcu8qJTo4nFehV8xzNmdXXx4VjNpbeaxZ3rRdQNYy",
  "key10": "5QTAqptvAfqaSbYTy1TvLPQ55DfzBYEcCtw5Gjuc3epLboTZm83eXi6N3aP1tw5WuoocTFPJHGc4NGWpsVup5nYB",
  "key11": "25Ezi84mQuDmRDCAgodVjvQEQudMmME4q3B4K35oj5AjvU9pfQNizc7aDggufFzikT3m95kZZS9K1rqdapdRbpSn",
  "key12": "58fYHSZXNsCZmfKrmHrzPnSnTdd9JxJmUdWxZuLhvbV8V5pHV3ovpgQEVP3oXjA9ev8XJKMXDVk8msxCugDdPPYX",
  "key13": "3XnuQg2cu2vQ9R8kVFFpTvpB467x6EU3gWD5fuS883iXW3aD63X9ChRnhZzbLv7pNUvAkuSWJZg24iJPtsSzXRAw",
  "key14": "5iWFXks92ibkpCP86KC2qDZeuN3c8V1QFwajfxH2QrHMDBe5SYAD8Hq1Z8q7RCovinZRP6NToE9fN4bjKsKghL2s",
  "key15": "3DngUmdqsfqTam12pBBhLP3B1ELUJ3wbY3GwdHRrfKVo7Jto4nTTv5gsNUL54p12ndqrnm2keyVSQ9u82e1dEA1",
  "key16": "9SFr4XPMZfRuK7UCRM2f1Af5TZSRfyj5cR6oxNC5WHkw6vAd59SgiyMWNukb1e7AsyasLKrQxCoDa8pexsKdHfE",
  "key17": "3kjsd7EZsVeU2vNQAbvELatZWcqfVWdJCkCGCwp2VAZTB9DkjyiUWC3Uv7Rhi25oJHveV6BD5gVf7BsZypqgxzfb",
  "key18": "TUZej9GXedUoWBUZbyUXPYfXKXoFWgdTvwS1vK9jCreLieG3zxNGJrfVhjyPLywB91dNKMY4hJxL5oLk2qPT3xZ",
  "key19": "5UJyvwHiVrdZ3MsACWH3jXuF2wCveh4xAoHwKQaTf6GQs8YWVoXy2fTidJiiDMtw9xeMtt5aHBzFQo84rZsyPgkG",
  "key20": "5Vzi9MuXPaZBBezADGDNPS2zUWqGnJ9ZTSfw4SDMsph3MQyaSWYWQBTMN8KGrDZCcWqVVwP8bUbSYXfuJhPDi7Lp",
  "key21": "3Tk44FFFhxc2t3sgWePJha7Ztk7T7eR6mJuXP1fd2phK4w4bmjDMwndcTKHkwGNhqBfCaxSdGghEQqP9HzbGM19z",
  "key22": "2P2vVvkP1XfhULDXd4W5k38m4JJGzH2TjbJXTmnPtKvs4fDzBCnMp9vahcipLEiwxpkUndFxcSefTBBiASYE2cbr",
  "key23": "77swuLDgUQ25AGLwCeThho1wtsEqtxLy4HzyGZdrvUy5yvcgWFBadRfWMHKhyYsgyy3cH37f1ntr3yd6HZ33JdA",
  "key24": "pbnCW6Pqhb8ujGHb27i93gBc4pc8XwX7vo85N71JqBfrycmH2MEwqKg2Ty4VDjXGMTRaqPFqD7Borkji7T4BkL6",
  "key25": "8QgGGkSwAoY4JXNTqUuXLaAYhEPNBcNrKS7opJG818cpQ8ovPgJ5veN6v5pWbu12WChABAFfEvqL6htZ5aQ4R5E",
  "key26": "2thYtxtbkvbyiV9DWhKfxPivJaz1oFqUGh8qdVcCDrf38U9E1dFGoA3oWpiFEFYjdZBP8799ZBc1AnAYLaZMwXiR",
  "key27": "3DT9vD6AkjopSW8qjDaAnkqrhCoFtuVXRdf5SDzAMoaBxJrrmGtrtdkMNvnPAEDmtdQ7oijvUn58PZD212erZZ32",
  "key28": "3PTFnwnP8jwazQhPd32x85CrHUpdRd986NrpNnGNr1C19J96ogzb1xgKz5sTegMBxgmRSQjoZDqd9XCLmoUgL94S"
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
