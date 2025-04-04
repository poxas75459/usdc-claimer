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
    "4AaSPjXMC5H3X5JvPAebu2UYvQHPzNTDCXWmfnX5XrN7o3V8ZJfvG8ZXwSgwnadsyz8KNTCLaT5xMfbovL2mjgyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pd31syk2AGcPzzt4aRiNujiHPvJmQNJEC3PJF2vPMLXgK9vs6VjP5LL3d3Trmpfh27Z5wjyv6cG79syLCSnueE5",
  "key1": "3yXEY14quDkoCmnGCksK4mZW8GrtrjwRioqZ6s7qgzty2S3SzHXEy28kXCHvKc3mJb7PLQzLZfTx2ABdx1gHpraa",
  "key2": "3RSUHM7z8cXUXRAVSDTPksNPBaUGX3s4ZijQgeWncn3QPUX8rZiy8Ffim5e764z9em9ZzhpUib6WBDx9XSRgUR5T",
  "key3": "3LCmHMAXnSNhkQD6KbAiVHRmpoohpx6NDpusEFLJk4qJgcpHYv9Lx89KFzcPX4Kq7UU1nXFW1fKp1fMW683b3Ana",
  "key4": "4gjQ4NzTWYjy8QHhYinwWpcbkdm3dp7BFBxbCQUFs5RRMJA9tAmZ5WCRt3j2ZMfrGcExsvm7CxedGsetCvCbkL2p",
  "key5": "pGCDjFDv4Ed2mCS9Yr2Tn7V2fwQBvbMyfn6ttBoNPtrPnRowWcxMdSprbgUwrJkwjzZNbm8jiiZVizovwMySHEQ",
  "key6": "5zajgZwxZBLUDbfyXCBshS2N6Hv2FQvAmZjmPY6JNZtUUkuxdu3dYY9QQpxnDpH6JYEsqyUYRXQe4Zw713HLnpce",
  "key7": "5eDtxAGemjsW7yZ5h2eJhgemm4B2iEdT63fqkoEKFaMkC8GrRiwrVcXUsqvneYhevMBd34DtP9g6TtKfniStBib7",
  "key8": "3oNqyE56NGPB5UbwMMZMUjgCC1CXwwkpqoqu93Q54Z255epstcVg2b5yk75wGWwM67Bjk7CSiGYSnHnybfASbtmP",
  "key9": "5mCKrLJGy4h1PpRojVBG82JsUfUKMqWP4qbCZLzkEbwFQdLmdMNm7EkNjs9YgFgGFwbYqsx4xjznduCdGJdEfBa3",
  "key10": "2kCiyYehpy4EFHBAZVzR3fxN7ZtzzZwGdySf8pTBAbHncdJbf2WpwRCWrpbGCWTERWUHeb9t9gXVXVqqEeyDnNyR",
  "key11": "YwDffnR7i5hVyZbTLUJiawtGUBwpkBrRSU29gjHTR2xnG4SyYLcVdEJYcLCT7TfAjQe5eL7H6cxSfcinzvmcYC5",
  "key12": "2ter1hiTNJj6kykaXwr1qMTmyJq2DfK13gwwvY3n7aZkvuretEeZhqKPLcWoXbSEFEEhEAheVwTFqTpCSEUP1FXb",
  "key13": "5B3FMJXrrmXsWiRxmfz7nqjPCeA14coY95RU8MdSwHiLVLDqaVQSwZPf5ovVqzExacEFdDrg6hdZ57vAiMkJVefb",
  "key14": "3LKmNrfB9jrMrSqkdGGAN8JspJEATR3ujfEhgiGyjwEAgxwStSz4yUF7skVr8QE6WAwpPGqHh6FTJHESXMvNX1iL",
  "key15": "61UobjSe3Hn9iHEbjTshux8cKueiN4k3tRaJm7JwRPEV91x9qVq3shZTNPx9XL3t1wye1tWiRWTTvgUEmhUrmL1p",
  "key16": "2DrwWw7R4F8RnhccvWxqtkwJSHsfQ7wHNhg4SvWonsLhTCn2J2JwGkqZXFK15ZYan7nkg73KuhF9SvWVY71mbERA",
  "key17": "2DAUNtemk8Nx2Gm9D96NtJF8KQ9S4kHvbKPKLYcA11uGKmeaiEwSLkFZVR4a2MVtNsmJW19cE9DrrYm7dGZ4YVEA",
  "key18": "5o1v15oK6JuVg79RKQxtySZm1GXAW3BZo7bKkvKVC981gX1GSQhyCoCH4QuwVpC9pxEiNhsf8hZaJm8J5EZSFRXF",
  "key19": "2CAUXRbbVSqaCoTLRcMVBc9ijGjwsZy8nuoBTVqxQ5b8Cai5u2ZULS3gqEk7jAxGKL4GXGB25bQ9R9kqPma4qJy3",
  "key20": "adrPYDYWGaowFodrWJUuPTdbmWtjHFnLCvh5B96CG4j7RMgQ8vW8axGDjuDtfUQhXVATA5GQWe9DyU5r9xDrASu",
  "key21": "5GW4mQWPYjNRgr6yUEjdiwyr5ogL4G2FGXWEsqY6v8pj23Tzn3fC9xYFXp4wr8mtpnaWUspuesXshfmHRNsynXnL",
  "key22": "43igwZeYe9aYzsafddEKKBmrMEiFpEYRV8b8DY798LP2K7GeXpf5uRukXGHwruxfKUhLYzVFqFwwi7aQ9PUDTkaR",
  "key23": "3Fj17hoKTCCNyU1WqtaBSfcm4bQnq3hWSvouZUWRjdyS7gFYjcAPSdbx2CyTLg5vUq7Je1vw1qrhG8XETeYjSedW",
  "key24": "4M2FFueRNCU1qeAhLLyV15g6bsA5hZDCTVuvzvmmjP3rSaf5isiFARkvHfFD7MrqJe4iURyFrzc7LxxzGjhMKaik",
  "key25": "39XsMhCWw5P4gAhbYMRTLEwYSVBmFiTyuXxRGMd2Hi3WPWxuLo3wsBwWxfjkFT9622x9VTMps8yRPdmA3bb1rBen",
  "key26": "32gEdJ9FjEjqrKTtzoBVTLvRNEUC4dfQNkYbogUGEozxoeFbBMWxdQCsjxSRoStkf1WLkcXVU6zgfmrZ2Bdwvp4Q",
  "key27": "48j3bRFnre4PkqbB2yJMMpPiGA2amgsot6Ff4vqLSyraso7bcV7J6H32L84b4CpnSHHYBfgQWbD8tYoLEAm9iTMD",
  "key28": "2X6VELyujRjcS5gMJ3McF1zZzSg9u4t6QJTuGVNPTKLgGmJjD5oNCq9zRty6Ffw6xpfHwDuW8HcHtXDMm9jYJQEE",
  "key29": "5tJ275FeuJ24AaWHhqpD5WAVDRZbK2x27AUrsgFE6QgnSCQLmWXQjX2cPMx9Q3JTqJLSkKCTEaEWxbd2eznR3bu4"
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
