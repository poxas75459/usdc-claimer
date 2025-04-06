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
    "JkQvY6EvF75NqMwwrzddiX4A4pfd6mmjfvVDDv11A5ZADBEriAEo7tK41h3KXUXYVA9SUViqVomEYf5ciaGPPBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hz67S5JmVZKm6XQ4F7FrU4Z7wdU3CuLnGVGaoURtvdwW2zFFky8SngDnZJQdEocx5DSC1bk4W92HBCLU9bdxeV4",
  "key1": "65JAurZqAvNMehLtbrsdDsreR64zDJSiyDVue3EeovL2WzLVBGLC9mr9QQzceaxLEjAMYF5kbXRtmF8QbDN5E4D3",
  "key2": "R58yu9Q45ccDeUMh46dXvbXJK1Qr4J4FUQhUcSA9226gMPwD1KcjVAQLP4u7bx5BSpRCetPNDaLxUX2yFmiEfWC",
  "key3": "45ZDCftt2q1yrKd23boiABfk8bhvFNqZMp1enFQQQ9VST35qErCvLbuv85q8QZiCfV1CNjRv3AXQvZHPPkujvWHD",
  "key4": "31uiTkDtL3rhNm47NtZ9sVkYSAiQFJ4XwzNxucXcwSSo4Whqzf8nhqBBsuAfwyaeL1VzsT6mHWqPqwP1Pgwx37rw",
  "key5": "3WgamnnMeURuxmQYFRdnA5vSvERLDF6qVvVPwD2W8D5KcuU54ozJgq34u7deWc1cnCkbKhSonqcePH93B4F2kbkn",
  "key6": "24uEVLSYSCDiS6SdbpG2fnbN8mrwg8VShmXU9aEBTxBZ3QFweZSkG5s5dFctjZYoUVJUzVqmF4z6FR33FpnZJrwr",
  "key7": "3NLenUk7T8yxJLKRnY8xQK1ddXf9W5TMe4tt3T7MzDCDMRJwG7rbctoJ8boN6LbD6HugBu57KAxR47rXRJMnRvRd",
  "key8": "2dofac4WNUm3Hh4FJXR27RMfTJ7rUFDUCUb5QvX41Ldtexz4GkXqoy4mVP7L4XDQBtTZE9MVSxLfubQMxYXFinJS",
  "key9": "4Bma9n8Qq1d9rJfRLfFkHk9rLNT5ZV2wC6z2dMsEd5nNBgZDraCPUwZaz1MFzs56brgrDNhuo8bTnS9EfaTbPPCt",
  "key10": "2L8mXyQHQWrJnatpNJ4vS5MiBrPXZjkWMG1Pdzvdbtm8z1gcHzGDeg6PqBQyu1x5kuEQ6buN2sbQDsYUJx8Hfopk",
  "key11": "2vCsnp7KmcjbQfekBWNrQxkkyZqyxjYBXDdDizkkoGLnby7o11mhB1TQ6KmuWt32yQ7tPnUTiYanF3HV9ZWrznCW",
  "key12": "538xrKCGUmDbi1xGMF7Use5N3sYzDCxhDY6QdNx1KumB1B3aHceaLHxK5J2avjRbZNJpADgUyTWaLrdioGWZuQPz",
  "key13": "2ZiCaVupCwSAK5xb5fAgiYRgoEqG6jmxepEry1TLGBMTxGmbvLA8YnKBeQgcVLAGeJ9jeW1Fiwhht6g5XQ8aw8Kp",
  "key14": "28k24NvWNtLksg8VL9xeCnxmC9hW34Ms6Haebv96AKKHdvTZ1iWPdvEdzupqEaMcntNrb2FqHekQRRQbLRV6wm33",
  "key15": "5vANFXwdo44iri8GhMrPYyhwhbCLEAf9AUeL66Qic6zvbnCu9jvHoreqJJhMGmtU7r6xVbURRqYTaEiq5y1AqSpP",
  "key16": "4xWvdaUM2utWWmAqZcjsQwwj8iPdWBGEfRLwvaJGfFA9E9CTb69SHjSpqtMvXdCeZi7gJM3T9C1tVbyTvVFD8ExB",
  "key17": "5cvtpXebtGjfQmiv9zw9kwTj4ik7YR3hAfwizy8DNYDmizfD76mTR1DSwdWn9TG4dRMvYf2fAeeT1TEzreeajZ84",
  "key18": "5b7fkQ15Wa9SugFVKPJFED5v45RuAxGrmSP47yMBt8H6u6nsEWoa7keTCD8AJfhL46QkYnoVz4BupfknfxsBqTfs",
  "key19": "5zwgj6f1ZxCUoSpe6TceAVfT9xbNGh4sjwkr7Xh1wsbSTAGmpEn3UejZqjA48Z1ADTT6GDcNvYrdLydUKpacctH5",
  "key20": "2ZfHi1VRN1TXpVRxtmAx1Bao4mryDXWyr8Md3f77eTDWD3Rh7Wjv5ATsct6TYvAYqtxwooUj1xqLuhHc6zg7giUB",
  "key21": "5326ETUjnzRMiNThMBdnjNqL8KA1sRQD5ZFd6pBC11nk6PabUu4aBJLwMWHJRtgcvRXaTdUXNQpRLXMA3n3jrFAD",
  "key22": "4odFWMM42uPtS4zJYtWcBnJJpL9sKdyzPFsuht65LYTAqQ3nExn59mGsEzdW9FZfbKVw6ddVW6mQzTNy13Nj2JvQ",
  "key23": "2hR3qxvF2JbmF5FYv7pB2gu3Lvn4cagCt9PiBvV2CdkDCZCxwjVhmFv77PthQzHdXZ8VGcobaCY2hAYpiSx1rJ66",
  "key24": "3Bcpr57iHkCAyXmSCr56LJkd3prR65ScKeRjS1Q7XTfd3p1Vhwm5F73a7bPH6exD8GwVVD7gaSMGkdMW2nUnw8DS",
  "key25": "2k1T9QNsU65Kt2sdBFCFLQvo26gmM65gSNCAZRFwqgeurJUdB9Er24MZ6LjVRkTMrVKvexywQFBb2Y1ebgJpsesT",
  "key26": "435VxJoMnPD1mPmGjvYmXg1rBGWZvNKgJN5JSGe7pzYVGMCK5jhJUAKkHGScJjiRgcDqU4Ro5unCQ5C7CSFToBsp"
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
