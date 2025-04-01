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
    "5RYzJWgauy7VLcJfKk4qJ9S9ujEcng83P1LXZpKhpFgteYKJKyzJsvSoL729YRZTbXc9n23rBksVssGQsNMneZ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQTb9PBbqF3Rh4spRuPLLEkaLvUxKU7X76KgtqmdoeFR8UZsqpspriMcViJHJ3LfiagAi69vgAnQPT2GpAFjmmj",
  "key1": "6YhgCRHrH76zBxwPdCbmPHKrJsN5Y1hgwzPwHuXHVJaaQxBeT233vqKjN2MJuG6D6TXNK6SBPnXq6o4a6ygsHbZ",
  "key2": "2vJnkLnqa2NRT2wVy7ddnT7J8qYSsD941NqBYqhHLoii5d7GWTskbwNV4QZVTVTxkdLmy79ShboNvPmpZMkcYhzZ",
  "key3": "4koQgvbJy725R1Vb5yy5ftxUUCYGFEo5eGL2SQ6JmWWLTXBQrRSvadH8uExC8VpNcZRXdr3Mf6oCf7jEeZa9G374",
  "key4": "GD374TCERcUpnvWob7CpZqiUWodnuNRT34ePpUV4XqpcfaFEob6cYeYoPkSHMFewnK91LDLFnSHN2id8ZYJzeZu",
  "key5": "4zCv6o86JJxpExgWyfcmuymUgvPAqo8No4NSBv42kSXd4YSsi2fjjDqPVuHzfEhY4i5Haoiv2ZhLGgSLbBSZgEVh",
  "key6": "2dcNuEiZfCa7TzQfgrWje4TsHC44NsDEFSXTRNkWX9ohyYFyT7QPThyw5WGcoBZ5oiq2MEaaDePpMdHGowFrBr7w",
  "key7": "4GagD5bR6mzDWPssikfWFcFx4xBn3TNtJCLA2EgxqQuwZtDVcPBjSPj73fSCHyo7GWJBubRfLyRasJAesYbsvp1C",
  "key8": "4QsJkcQxoCwE4QCGgVRYpCC5j6nTRtMob9LVk3GdG7tYDPzH34oK76u6R3XH8AyneQCLmHmPcEKjT5Cqd7uCHado",
  "key9": "3LGT8MwLKtCF86ijrWuaW1M5GESXZrADMHzq3aXenMwsuurpDffsDxqztQ5qd7HqJuP9s7d8xsF3X5ipfgSM2Zh1",
  "key10": "HaykVsMRJQKaee8477i73sHLN1syNYqMMvrdH5ko7SdwttX6e6DNaEzqN1jiY7aDBFfqrc8d3YncGWvbSqShq2U",
  "key11": "5UT88temwWevVg6eDNxAfSDthDuRWdzxPS2Ep8Ya7yENfebwMPooAyenHyXXoYxQEdK4iBELLaRuXhd5oASCv9es",
  "key12": "2PJQ6zLtMtm8wkzsjSRkEpooV3YPD841U8WVjtzR4WDguEZh1Bnikvyd4cqiKpDVwMswjs3qZkVTdTcbtcgk9kZx",
  "key13": "66hQvubZWQoiJd5QXJq97eDxgBKd6oaocPL5R2Gy5ZTqt1axk5hgMzX3jrMXns4FQvN7SB9HVh739wT5TwtZQAQr",
  "key14": "2RZArTD7U8y2hzVGB9Bn4uubbimQBawFbEH9Gj7uaHgYwjZjSJB3zvYUBFejcZXqnDrJ9QyvU38ieRqvnB64Bdr1",
  "key15": "XSZKLxuVVrUMMmjYB6WYE4jhAWFfeozahF9xkdcuqmhp243q1QBoGfEvrSBTVEvZeWd6GfJ6DZSRe6iB4HXHtVK",
  "key16": "3n597TVvXHkHa4RkY4T7DDacmuxcqaanVHLtDtkLcBYTMXjMMF5A4o9Neu7JvDtVCgXrx5rpB1zmtTwNEqtCmhUJ",
  "key17": "5kPgct7GAfGnKCdXTQUtJEEbBTjBgM8ScFwjvj5VFjmvgXSLcD45UqxcEn67E6cFLQR24HJzwboQXcWwSmvb4T9w",
  "key18": "34Y92wV1Cf8KqYCYy6CptsdW3Xbffcj71uDVLqC98CjgSJaVKUtZWNp1y1wtvr4sPp58gWcF6QjwQAaoCLx9AkeL",
  "key19": "66HxDZRap2LekMUTp4bnxRaZ9Lzqi2x8KnKMZ9SJkbsjwQPDeDDy7uUecJShdobnJdR3ABBjEcGDptTuGMCbgREa",
  "key20": "5RgYMVR2kmeMXkfFmm5HEmtqVdBoS8FHt9r61nvCprvvhWZg6ESRbi6X8W9q5NxVm2EmXFuqRAzYoxEU91Fdzijf",
  "key21": "GFA3RjMKtWmMLGXGFpPNGbnHkyYyabBqcCJVSFsor4azrnmJRVPwARhYxx2cH8wZmk4V7CCFU1AngCTwhcKzQfK",
  "key22": "xN6pRymcEdYAuzk7dn6UEatCi9jfZuqkq4Z6d7Qtyb3RPqjEuS7bL2xPe54o4oWv9tnd6jk9UB4JEMSWQ6tZDZC",
  "key23": "5Y2C3B4JMgXYEskoyRxHa9se98BaVVN78zbMhE3MDPuf3VCwT7h2LRCsMb3Xu9FGSP94WKbj4SVTkRAw6tT9PoAu",
  "key24": "3FX5mXokp9GyZFrgiFA1eP2ek6QVqe3sZBAgk82DU2RNEVexQXGGMvqBbRURGd9rujkinDmiERUG6SfdjEYbk8f7"
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
