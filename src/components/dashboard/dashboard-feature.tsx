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
    "4rBrLyDB5MhrSUhGgR6gM6itMVctn7ThTvuvNqMesASZPyCQB68J2XGiGK2BGzPR5wsQ2HoVDpTaDvSWwsrsNXQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJue6JynjDAXfhRx5hKYEdjm8g1GHyhEjFktqdppnVJtbGQoXGb3nrUSxsRmtiL46id1wxEUNa2LhMRFkVw6EFN",
  "key1": "MTVuNoTkhjcfsXxUWidx2qRT9SGZYvTgxfeeCHTzK29Gj8xcp9vRM5S6n9Wxbx2ECVtgHrXNFEC4Tmreqn8fnMP",
  "key2": "2rjycnCHxGq5ZDe9sTJNyQvoCoWxnsk4ZKnr5ecsVmncda1Pa74fv65KfHXjWteSjt9FCrDkXM1HxVo3XjFhYNVA",
  "key3": "2b8ujHmrve1ejT5zhYDYEoigdWjYAFcDHmPYUGiR1bNQtfoae8qSZSUtE12yh1iUvoFK76oyGNvgjqpVzBMptzNx",
  "key4": "2SKzDBU1SjLyuB9xRxdVxNYRrLZrYhKwjKXqtEuXpYoUrTqk85RFs3986cgunUw5tG9cprJWatdieWiTD7r63CWe",
  "key5": "4xp6wgZro6H5aC9N348tWT2riXPPX7m5WQ2EN5BdnoQVQ44zM7WuEXRAS9UHcEH5ZmuurYikGfUUKhsuua6nc31x",
  "key6": "2WZpqFq5WtdDVdSVFTKcusEcn12iZFyhSDGeig1bKJCLDkSUbt8TV5tdMa9dBr7Aqu8qTaAqAGWP3PZEVoUHJ8jN",
  "key7": "2pHcVQoDmDsdjsumLAtwKD3e8Re4Qr4JaXxZrnKgyjdmTQQ6GBqbaqnhqL61SVEAemoFxDboH81wJDHa4EVVLDv9",
  "key8": "4V4nfibxQYAdJd8uwjZutJZKAJzKmepaaHFc5x4xPbeRBRviH1sjGC7PuoRzFq4YPnd91GHr2avEbNesR7jbRpb",
  "key9": "4DiwchvWsrdrtZGMPNogwDEf7tr1MAAx8vW2r2UCvTMAC7zHSLXefgBpufpFDmj71QRibnpaR6zzGxywsatYZDvp",
  "key10": "4QGXz5Qdxkj5nB4Z9KwJphRgMvNVt1tFh4kqTokRGJGkdm1kXDdScRGJ2TfqVmcRXz6gbGGytCKn6rDwXSN9b3XP",
  "key11": "3f9xt6QY5QAkijrGCoGiAkRJYKGd4ANucvDqwbTv8V3nmAKhQpZW9oz9HnNKsMv1FXjDjgHa8UaEiESBvRiBfNYL",
  "key12": "45MH7NVdgcf1A7WZWYRGx6poiqtL6AjC2dWB9qWjoGCKc7ru2mRRSMYToehw3iD3UsEmNpSrVoEjY9tzyxN2GNXU",
  "key13": "284M7bFXbF6DrYEejJLCq1PMtzaNmTQhTCUv29JV9q73aVaiD61TzUsmbDHLBgUfpWWHHPYu8EasBdQD1idTVofF",
  "key14": "3wqce8pyHELy7myYzEqpxm9kT9Y6hvpxz4iDsVNbF8h9dS6yPgB7ABfPwnQyfxyeXT95sX6iZ1LqNfNgF576v38J",
  "key15": "4HZ1HPCZd55kwFoZzgBuKXcuYQeZb9Vkc1NZ7cM3iRYeC99rP2cZYghQKjXxjqfEPBiGZb2Px4jUFFthdvrtsXPM",
  "key16": "3XErNMQ5nDCDfW5UNtM8Kxv5Y8hCQLDHcvR6UuQqdYaXjkpnqhYrxGWkyhGrToiT34vxMCb1WaQxKgUDMNmvVPTg",
  "key17": "2bqusLsb4c9ATAmEkkL59TYhwiC5ZKxnyZPT7CF8DniTjCdNHVKRsynbNQwQaqjSviPhTfNxodWzBhGHpzPG2AFD",
  "key18": "wUNjZVX9vbMnnizPqamERhif5h9s1hDyqBtUHBoUjRJv3XfiKrghM1NjgW8oYB7VLy8xReNzA93suwn6yL8KECE",
  "key19": "4m5ZcLDHbu2GzBgpyShaZYuB4KYRMkRhqv8dbYeRssPpUD5GgwywkdJyMywnt3ezERruEJESWjvRCE8cwDshsTom",
  "key20": "2bxJ1xjZaXa3eJxjjv3FFQz4AMN2tD5LNessk8Wd5JCfGp6sJPHcVEU5QfbeJgj9syn5RCjb3CoSK5kotbousViG",
  "key21": "2uo3TqndQu3zPdBRiHrK3LcksrDZDhNYXCgAbq4PvVTdtuiuifwWpwpVeNMcSFuHQFgQf8HjWLeYmVSxY8FJ2tcS",
  "key22": "5mtERYtDyGXZbAuZrZYW9NEXcn5kNuFyop8USaEvKrSfr63LuPwnXfj1so5nTi5rzgJwfocWov8iEpJ1yos7WbFN",
  "key23": "j7XkiuBgQ1c4ZVYBh44NLFBiWKYgzLZkhwtAkt9VrmcBnav2auuVsM8cU7nRFeogk6zaNaBbqF3iysxwS1DkzNH",
  "key24": "5F9ru1wcS1TqKft12XchEM9yYoXaH6Eqkf9VJtz7KCPEUZ13zTHS8cbaQBMzca4BJKeapixiGTZF81ugnoH16hdF",
  "key25": "2ZyUS9KWodpJhfdycdiM2GBLcePYYUAD3EMpdcE2Naem44PGsXpDuvx1Sdhw5JzNA2vhbUoVNwViJw1ns95cGj77",
  "key26": "5YquRdDnnm7bLf9XhCTc1GyTCzTc3GcCwTGFvCQN8uHtGFuLTnDQNfChUNFTqkPEC3TKfiyXzSMvSCgV3ANvCwAy",
  "key27": "3YBxCq5th7h9kWTmVtBG476jDxscaiW7JcvT7D9tCguDto3DPs9hZa589mt9fNkAh3Xk9HRztNnPdkrvPG7qt1k4",
  "key28": "4F4kAbsgcHbJ7p4UZhL6XFBtBcRCVL46PwxNyAQCWFzf7s9pv4L2ijxxtjTqYQGvaiqxtskQmDY3B6XV6eeNdRWb",
  "key29": "5ien5tmkEEirgp9MUPdXyDnSES47tvTQciq4r1AMwM1QTtBUsFvK11rxCMtka4RPAXPgJnic1YvA4YvMJ8XwCgkm",
  "key30": "4tuU2Fq5hy4V8uD4FJQwJX1vfGtv9XXQigDGR8pJGQjEudkNZiq2y384JL85zwbt2CFUbv5znuQpudy5bgC3fdPM"
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
