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
    "2RRdTLcJPwUYzYhFa7cs6HRZQfgBuAs7famtgEyty4uJJdit5WC3zHztQNvYk5FNtjNkitPSyrDqdNKEVAMFnEMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWFJGhaPaqPJ85M2ycFxyP5RbApCRyofZFG4s8mxYXrUcCorvLJfUeMiXgmR8vpmoAE9pYGeWmzPb4Ue5MVBRxx",
  "key1": "2eM9p3eTdqKigyy3zjgZKCWM7TRGnWWxRDVUsumoAcpJb1g29i3HMiDaEA9a3BJAxhM7qhxrydA71KbGyNfDLZK1",
  "key2": "siZmhHTp2x4wcLV6TUth8pFDVgaJ1Y4bF6VbCDYrx1snRa5cKXSSuLtr315YPd6C58HSVWpxth3uLvbusi2kQd9",
  "key3": "5dtHYquaa5gnn56UPgBzZz5UxF39pjYY7MnPHvzAd2KS7DdF4Vp9uAoBFsEN7Pg4MSH2cWxj2AXW7CzG1LFDDpYZ",
  "key4": "5YKM5q4Nwk9sai17UdALQaM2PKpuJArmjQeutbQwzHiqkin9sHepHXKTAxfKUgUt83ZbnA84Q9iCuG6FZuhhyHom",
  "key5": "5w193dAdjNowbJGhaitjZ3yGpyiRNgHSU8jpfExhfLc1vc2TSyvNN4ks8diz24gibMiGxUfKy3vhuacQjbLbHZos",
  "key6": "27kCA1ytS488fBBtWKWQMSkApQezW3D7Z8YyyWmpzUJCcitbGsHDU47zyfmoAzQkxSqxmLe3W7zBWsAC6rZ8EygX",
  "key7": "5d27coZYgKG7WtBZufKsNtvEsCuzFR9ui3BtrNtceCbvw7Qgi389DRBRjfmmBfW1vyQicTKz1Uqi8gAvLUiYRxHd",
  "key8": "4zZQbPBsJLN2QkHZrxugE3j3iD1K2zG3phnan7jopJo749ssSCaP8s2BbQZBdizut7yB8m8su4FScnz5Kbz19cnz",
  "key9": "25Kga2k3huyTvFbmcpVzwFLiibfPQzopBegCZs1bHDHnUGnJcV6DhAdqYh7Q9Aat41SvwJQNrkNJpQtb9LS7rXxj",
  "key10": "5Hfwz72uWZoGha1CafSYw8drUXe1mriFSAWvoX6a4YKHC7rVq9Dm4LLqvXKirJVfPKijxvghfqe3RyYdSwYpTZdB",
  "key11": "5N9VZ8zKvrJkon2NWw6uzzq22cpisDdneF68xw1EQ8PPS3UKMWcYjx5gDGEk9WJkxnvYEj6KpMpFvpgRBBLiQFtS",
  "key12": "3CjuCqeYMud4Wb4bi4G3CFYrKzEfUy8gZfU7Z49z7P1uGB23RKs3vuMRX17zcJFUpwso2YMHia1JQV3vgUbfrMtg",
  "key13": "3sTPqoDPg31u2wSu8tnQb3Bj8eu3UGAUreP3ZRv8Ljanhknb1iVXXSzWWztkjTsSCqnyiwvq6tCB6hTYNCCmxs6T",
  "key14": "4G7D8Zf4ofd6njD8NDpZgLPgFsAHv9rMrBVSdB6yCnYGrwiS9cikaqbhTetNX8GBB8iXdqQqH2cqrqMmySuSguZj",
  "key15": "9z5h2PMJQjam7r2TZ39EXNA2WpfRyyZ4XwYsEsYUKM7jGgmDwtUnxm41EwzW2sjY1iU5XdBN5pD56QF4iep5w1S",
  "key16": "EoMaaHqcLgKnBWS4fVFTLWYh6o9jiz9TtHCWvJLSniNCHjorQ2omFc7RhvuwvQMw1Ni7Q5eiJvaAQhTVjmpTFDN",
  "key17": "5pAtNyUoyH1VQnwVQy4sMSYfKsSR2UUQjpVNhdX6awUxZrKK1RTsPLGg5FtvspYZ9xE3rrVYUTM8G2hGye7SEe2V",
  "key18": "4DLBjyMRxBwPZTnXrLA1YJLUdhmTCGJ7hoYtQWSAkBvdDDJv1hTSVqHphrrNQMpjMfFNWEVYpmCwF79cm3efm1DG",
  "key19": "47kK5WPLWpYQ6ZVBzxG7A1iW5Ns8gpmH2Fm6XXCsVneuAUKvAJj3u9oU7FZEevg2mCxtK9KJVdaGzQJKfTNnVdnP",
  "key20": "3iX7dWyumKS3nSxZ9A4rRyLxh2giUwmRumPUp27zsnkkCF2pcdan7pdYsiXo3evsb5y8QnjE3YJbbmyfMBF1MRqc",
  "key21": "5wJJAddj2F91zA43pMB4h2ay1HAJFoRArBzTBZJdFTMYo5RK2Weh8P8cdmSCjpnTUiw6SEgoBH57dTLpkMqpGgdn",
  "key22": "4MuMMYpBt7qrkk3KJDoYL1MDKZiHHFsWAuGwioCZqgzPYfauJZSc4zes47n8LU1vRAxe7fDk9HxEKAUNmaRJtv69",
  "key23": "5bkaMrHTdxrq8sA4jpsRSqN9CbeVHme5GXDKNcZwcJgToRjfvRrk1U3XrYF7c4L9Ei586C77kvPJn22b9jutibNU",
  "key24": "2DKsGPcWgx6JLrwZ1Ah3mfCAUZZgSfoz1FsAWgkXRV49dswwFP2ErJa6NueNDsfu83F4n5rYJ1AWUmm2t7NkBPwW",
  "key25": "65Xu678ak4TSmLwn1vsGQVQbpKYE3KJjAfGrjcWAYeWzBnYhY3e7CosRRU6eedyX8ip1aEJWhhPTT12d9NSa2kU7",
  "key26": "A9ciWzWPnhMFhvU4AsNfsHYFjDw8rsGS9DRXSRNms4XTArXUK61vxNF98atdJnpDZt5uFy3WSNWyJkAeCFsAtVD"
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
