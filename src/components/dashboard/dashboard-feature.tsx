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
    "twUA78HWzY6YXEnz6TEjVD8quL3bgm5QWpnhe1yv8iLTseRhc4Wg6BXrgwmGnh7kJWSgeacK8GkKeC3UX5VXTFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmr7wsHvZFKZ8wA1QGNfDjW1vGpRfM6Rv1BPz9xmWGDYR5wjWfkereQuVJiETZ7Fj5VWFJPwJE8e1MPXRpk5fJR",
  "key1": "5RBLpesDdshm5otTKnpAe4gC17yPqgobKFoJvLmPicBGRT68E4xdkyy5uTLfBKwwR6w8Bqkhh2KgmEZR9nApuKPQ",
  "key2": "3dec2KkTp8mZyjcXr4Fqj9r6VLDYRfyB7KekzGyT97sZB9ethjw1kj6xbt8A7pBd27oih32TeAYsGXU3WtPz3SiG",
  "key3": "5MLdQAfbWD69LhjozWfkuwRciFNiD8fFZbiyoKZjNDPdazJrti9kaULZAzv2SkEMeaj7CRUxsWcjBn8VfzREw7Bs",
  "key4": "5jP492Tnj28RSfzmZSBQPbFDSJAohSLDwBhPVaxC6T4ny34BZvqBSszcVTUEptBzJPSu9NnPySy6g71qWebUEGuN",
  "key5": "5dkVmhBibFkTjWYGgnXPxD9Lc14AHzdS2q9juUy5Ze4ncfbdQPeuPLymLQvzwUZYUiUM5Un2xvR5LXpkPjxhkGK8",
  "key6": "4XrneM2bWqh4HU1cD6GZC1VRMhbB5DHEVKoZ2So7mNotCNg43SmZB2N5oVn19c5HFUhTrsF9C2UtRiQSbtoE4m3o",
  "key7": "5BZ7wq5J6RzyRyQur9C8T7aeuFttYVUwRCKhsyY7hDaiSsQrcwc2a7nUGdFizepHmu64jMV364qpispBYq1eWHRS",
  "key8": "5J5Nehxw67kFMTxLr67RnMRAE2mLVELCegLZydtVQ7b48XJp8TxS4FrS2m9ppWBKY76VAuCXwwhD2GS9tgMq18XY",
  "key9": "VrZ4wPC86m9fLDkT1iE55SBLeNEmZmVhvhuqFgzKNmwiwRFtcmH1vFywTurND5zMfzmbCnDmKjPV5VoyDHPF5xC",
  "key10": "3QWoxdyzdoyaTH2qNUnEMJV433d4ZbqoPg7DfrH8QdZm3VRmPqYMPJuNEgsKr1KUmhxZKCTj3XPwp6DPx1n8VKyE",
  "key11": "3MMVYESJdZikHCwY7U7Q1BJ6quBVBuPTGKs8dmyScfk58AobEvWXVAAGRCqSViKwpCTpPYQTcgbhMMwPc7ryx25",
  "key12": "3f82eW3X5pm5g1V5PWXcPJ5HWM2xqwxZdy4YEo26NjQiyLoma6hoXKQkNEs7y6G2xFHV4LBRJyidbmhWGPCybf3v",
  "key13": "4JZx7pT5WCSqFjpqXCcq6bkkQTaLbjSmw5cEsJcsb5N5q3r5oE92uebfDUt1YmfYas8t367vpPdQqw8MZU61BWVg",
  "key14": "2o4FPPWzAezLivYACARpExeTJgL6g7DAd3Prwc7U2kEf9Lfnt7AVYvdLkgXBH67j6JGVdSfeSDwkmFozZvr2chij",
  "key15": "5bkd3Y9oiJwEw8emc55nxush1SteFj685e2KwF8RFH1GmMwEumnBWwtqwZtmwarYiZvCVuEsndiLe5gjEfKHasLm",
  "key16": "5L7fRxVCpjvirjTk6C25NdGhzWTWxBMvC1SLZoWH44fza8fDnfLUZjSj9AVbjHKDrCxCt2QNEdiXqjyVqHD8NTdy",
  "key17": "5uocdb9hNPxAAawdHrvcAnvLbg8F2b1MC56nric33Q4TNxLQwxDT7CLsMYf7bUwToqxGb8u8Nm7cYg9LE1EV19R5",
  "key18": "3iQuVCVoq72FLnKGeZbhockJevaf1TMTQL7AuFfLacCt9ywEknsk4wqyGCESsuLxn2sfNLSDeZaJbQZW7KTba7SM",
  "key19": "51XbhCW57iP1h94Yn8w7EPPvBEQrktY1cixzfUTLhJqSBshQuiNkqZw6iCUYHwoCQPvr1i8SAy4yBKeHVTFQ2EUB",
  "key20": "3VbZhqJ9bLAoMxvjGFxpNQGjPut3kPdiJqVzCdhb297KFB4CXwxbx98D1pqJFBTar3HhFQi7CVSTxBMKPFMGgGct",
  "key21": "5FoPbEia73NzvhJxuY11maMasaznsvCxMqnUVdm9EXHjUevXgsvM7W521hC3pFcBFHLtpVUHrGv2ZpHeb8K9YGGu",
  "key22": "48RWCoukFv5i2UFeEQicgrjTQY3ovAN5er6YXCy6Y8ea3htMtJw1yff2VxQFo3EbfAoFgQh1bRYcg8g9PT5HcnaR",
  "key23": "4GedoyLL8hbbR3E1RF46HbXgqZRJi7LY3Jn87SPgzsTXhUsdQZLQBVVDSEm1tDPGoHjr8pdEcLFQ3w1SmSvJrEam",
  "key24": "3YHL4QEiYfiGXYmoUJnTdDeuPSjqk5Z9P6CMtWmuyUBNSQzT4FMbGErjQrTkJj2N9HwyvH6HUota7sMZvGtHTGU7",
  "key25": "3MGqGsa6WoERa9SKzP5hR5Bre6XSuZfXZPSJHwCWyzPridjbkYrhM7UENrLwAsTn1mn43rbSvSMxKuyMbRG6QVvP",
  "key26": "63ypcCcHyyvKngs9hg6rzSyssZN8PhbCpvmedfjLWyFcgEAKctcjx547GW8hTWV4GkcvYB82YsdK6S6cjfoeWyov",
  "key27": "4Akfin5DUbfvMxFQ34onfSMvHVvGMhGf3ZUKigzbqdHbRoMd3JXZzSDQXFFtWEmbcDxcM9gsTnmkj6P7t1PG3Nbn",
  "key28": "3TvSpkwhpjM1W2EFoD4W7jjCcT8ZdDRZ6ik7hVnrKP61YV6Lvoh6oxqLnGzNuW9pwaD4M7X9MhDBTuEsEoFxE5bX",
  "key29": "2BXjjB8TDJNcoHKFoKZ1b2oBq87AKt5PQZeukT7DERKLnDcUx6tsEnxaduwN8BK1sd5UcbrPeQRQXyyBrvPSX3QK",
  "key30": "4LzEec2tAsarDhVQbMMX9xauUZsFS2JZhYb48hrXD2mNteZHZvFTXnodfdYFUVP5DzztY99Z3vL3cwn9f4Em1ZnQ",
  "key31": "4a9p9L1QiEvHBBJMRsUDsHEGk1qbboHPjxu4gung3fT74WZv1n1E9BA5TwFpiDdsNyvh2eaQ1iQXRZYfYGu2sgrU"
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
