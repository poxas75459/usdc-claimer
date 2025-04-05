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
    "yehJxAj75YbQGJb8NK6veY6hDwStaDHKAMsp4RzfGQTujM2fVgQJHmiYo5EVRjP2ikszZNYeHZSVG5a3cFRfdnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gpq6idnSmSrXjx9gQWB2tAneioEG4ado5mYpHqsb84gvgkuLBJDDhmPWo1vgVVZoQRkQUBLm9YRQnHLFYfsQUdR",
  "key1": "3cs6DXySfrGv4iMsEedKLY2D3YP6r1TTx3tsjdHSicSiSHpwAE3WPqDFgoHVx9CL4zTD7Qb5cnzUCq5ZPgcuBTNK",
  "key2": "4pBwvyMG5WmmthQsLav99VmaxXgbYoNLGsVKNVN7V97xV6nFTqkF5B8qjYTxE5EsLjSopyr8vs9k5XqHvWyVN3kL",
  "key3": "4x6VhD5vATgSk5QC1k93oUrCpifWbbxQveCcDtLz2gPh9dAJpE18JU8WvepCoXpnWTuBiYuWocz4pq8iE4AGRixm",
  "key4": "2XFaCEeVWaUTgZVVhuaT6xrara2TrQJob6yccbXTRTvUxEaN6BSfuySaQk5gPktNXzJ3jgdZPGgHkxXtTru73Gph",
  "key5": "3ZZMFiTgiuu79ogeq8hqM4dci6C9jk6mUbjAaDsMwKSCt8Miyf8BCy25SaZt26sqGoKcJYrqyFNwBWJrGmnjFQjJ",
  "key6": "4EtE4BUrj5Hewc17qux3MPujA459QVGgsf1geVNoeRszvA8y3wo8g3PrALbFRksGeHjHm4Q9unhC5HS3EDodAUdQ",
  "key7": "4bw6DXYhDrBXWK8fvEYjQ6t5tDWbyZgBqfyY4kK3t9tWazR38BHojvfrPxG9Cve1n6LjYjSUkQsta3DgVX3Pbiro",
  "key8": "3h5Nspzx3PRxUhkpgUbGiyP5CJohq47kWeD8eBUyW7qVGk7yWtKjxJMtBkkVmzdXbaD5YjMxvG8rS5ghfPY3fPLa",
  "key9": "51JFcJPFAaif9d3mv3XfsL3z454RnxrQeV9T3s8t5d4H8PutqC9Hitn1Wa5iMvTmmWuYKeJNU7ABBGb5KPEmXomx",
  "key10": "5zaqaYhLCFuZFGBEyqfnyp8r2Fu5ZWz1oewsDLwwRtH2E1Tcxu9enuY9M7Q8Dw1NFuzFHvhkkdjk7CEzkgbb2wWs",
  "key11": "vEypqK9cfFb1GDaGa7fq8uxuaHL7vDnvreyrDd5HgwVkCxPKTUJhKctddXvfP4YoLSrj59dApEdhw4tJNMf82bK",
  "key12": "57s9r5iSPQtMQntrXu5H5ZeNUpactRCXE9NvvjtTXnA9Tn2VkTHkZVSmuYgQ7EPBKqwFVHX8AuD3QfMkyunMdRjV",
  "key13": "47XMBbwWh2fCeALRrZaSVTXUJthsVuxpn3tiSHoyXifKyDk6VxyfxVqCw1idzR7mrkJttCF68RipxJfkkenLVW3n",
  "key14": "3G5TkR9CaAi5RtUyeVWKkGixxJvYAzmeuk5hwR8eiZs4McWv1iAsN6fjSV4TvHmsbLqatN4vAgH29skpaLthkLez",
  "key15": "jsBHcDoK1n2oifWSncGzofSgTztinJTsdzL1oMLykE25gPjRboZHtyaxM4uGLzN5zXKnUE8yybkuJrdS7ED1FRY",
  "key16": "2ns679v3WdqE4KdsaGAjNzjqnaeiw7D7VJKXXbyqGbXaPJfZScYimknmKHNBmJQCE7uKnUHqeLoz1QgehrQ53yHJ",
  "key17": "2cmiaC1K7qKhR5h9wxXaWC9boRBuD93Rr2vZBagVbu7J3PB6uL2G9ngW3gALrrzBBwobdiGupCmJDcTa81Znt5AD",
  "key18": "2bamqMd6ebgovKDSNBSZh59Ug9mdKyXrYssyh4NszHzx3mz7wVP9wtpw66uYJXRmzWeVj63bUVTgf3Z9NpKsNRAS",
  "key19": "2mpReaDNzdieEf1PqWxuGctKCzGWJTUq1LRpTJ2x5KhbHbybv1pkrTR8ZqKXzSnmxbyd1GNcSYUTnwQhKnzSZ7sa",
  "key20": "3NoW6T2HkGRQufeoQPzPdmwEPj2KssaBrFu7fmLi4rzQrJqxKbXL2mw8zqGp26FBgopPzhFKwtveFxETUbW1YGZV",
  "key21": "GpoUe3QLy63QnBwmarMDwSGSqzfoosA17WBrMgW7supAztNysgX4RWeqHsfErAQwEoogu6b8UKMitALq8J66atw",
  "key22": "32d5zKVmdEBqLTjgXAqfoAr7DLpAkapRpCbRA5FgDc46qg1AucEKDXafZ3eDD7Pp8MF3VLV8gx4JV6heQduhSfZr",
  "key23": "58zwtm45ZZZcd5kaYEuoL3LJzM1oquvtFaeLLDyTFGtGXgbfpv9h3KAh8NqBU3Xxtv2yA7CkaToeUFLWQhoXFph7",
  "key24": "5hGKNwAf2BF5c23Xp4zXqYP6BMLt3RptVSiFMaRZKthRGUAHwPuHo4UtaMVTXiwaSvtr17JS5rbjuWzYnAp7GwvC",
  "key25": "2FJ8BqaVgBzNnTQfM3MbWRndQTw8YaKW4ayeMUQ3TT4nr9yzh1J8cxigKYq9YUsgZyQfhU73fyZVLW6uLf9SVcVg",
  "key26": "4hPvX3aV72Lkg45VPGbdZLztyiq6rC46W9Zn6e23dWPzWqWwaCWQxNU3ZjmtruZM4yhnMMyTY4m8Nh4sskpG4pn4",
  "key27": "4eopEZtLJfZGF17ApYcfFLzGiJMLunDFBDSau4hyiaUcNzGqqfX3Fzwe1XUFXBDhARtRPGB9J8fVm7soQPgmMCXb",
  "key28": "4FDegeyL8698PBYEJjp184qV4cDaFPrE47HS3JgJbymidFAYtmD6tNijnX144RP3kR4X3mknXUMajvpwnBjnzxnD",
  "key29": "445TBN7wQ649j7GHxKwBrs14FV6QcKQTseDLuzmPXkohcBuJSrnMxzRdDUVz1NcC1RujTD8awhpFMYopPWHPDaNB",
  "key30": "Jr5oqJozMzVHGPdt8E6W1eyLRSzmjbJomL8Ebu68SkZ1iL38jY3DE3dH1b4Pzg3F839Q4Uc8W6DMEHzdVUUrJ9Z",
  "key31": "5pNDcdtMSoVicx5LFbuVdK6ptwkn1D94z2wbfoYZQxddGn8qGR2mT7zuvCgBSXwvxfC8tJd3RyxMYAfc62xdC9A8",
  "key32": "4KsJJNtxGJwJHJajJKwPXYyiuMWtUqDNdeP5sr7daE6yHo3XCYtY3g5rrK2dw4Vr9sa7Y11BFBKpLyQLyCXKKu1u"
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
