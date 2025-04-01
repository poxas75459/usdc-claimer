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
    "4UfMRUJ6VBsduoDwTRk3KxBC5zPFhrSnUqrqKwBAuN74PpNnGwe8WRo4xi2nmsaDgF6juBLUhmitC68Q2WRDMyxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bSdAjJ8nDzPLNxxvZPMt8BnRtRasmKwAhAJ4tPE16cNQLP2ah5FyfdFfNGDqfYZyc5nDvjFLxnSuCnCzhwTdsiJ",
  "key1": "KR6cTzaodDbri8zaLMUreeBDVJYZTt2sGqW1NBpTnuxoDoG17nDBGCBp48xwV2deDSsQLqhjm8Hp1xBBzTDGdR4",
  "key2": "HQ55f7zJ86YPoPFuQFFLaneS9SJ637BCRGEnCnsh7ZVRELjZDzmmYa8kTEuutFNY6gUZwNPrTH9ToyCXS3gEzD4",
  "key3": "5PbZTWopyQG6RJRV8w72GoHnsfVtMBmH4QxqKCkgELcWT6cLwnZyrbKZxBadPA35SXxCb1qtqAZYsSnp9kE5H6JR",
  "key4": "5U3Sy24RJbAUWTULgw12BCHcnbmSPZFhQYw4NPknjcEPSv1nzCmZ2pKyLKbJpS1nU5LYjj3jhooeBgpDWLC3KLHS",
  "key5": "5kf4pD8DKm4jnqbGBKzykNy5wAewudHijus5TGx6Cy1CZbMpVspYp1nsUkeXYaHxVkrHV2fK6pso7JoCL51JopLc",
  "key6": "2ks1gf18VWbYbYHVwkojzVm6meDWNpJ4VA8PmqucoaV4RX9XZNWDu7heab7RJ68orjuqdQbTE8Y3diVYCme3mQmi",
  "key7": "2b8Wk6LK2dqTQsJP7YUEV2aUu9KNJzmTk2YMbt8BEyCDhc86LHRf63WHAn55RsTNGBx76kTH4ESq9eoxFrY16Ubm",
  "key8": "2dy1v2ra2H43sP1emiCTzr5WUP57JoJTzuVm9ne6WQN5RGnmDQFhLSkciGmw22BeDs9MWRRzr1aoCnq5xFY44Ggf",
  "key9": "2weSj35dpvtWCx3v1ieqkmvb29fUwHjSNG25S6a6aqbLyAzZfqf86d8KWFu2VedYxMZBg3SAht9gYpmSFxSfvniq",
  "key10": "4VyDG62tVB2RVDTtWTXvnVVhFySRhWdKpkVicECv7Qwor4Wbd8BXhxGUuhJtommGz9MyZNeFCpC3AMoypNdzCfU6",
  "key11": "4u76KvMwP1ZqYvU8bH5K38RRWJdSGKrCktXVQ96LXyRahKnSyMfBJLHu4FUFFFsivxSs28DWbvcotkmY6E5HFw7d",
  "key12": "G63eiALcykVjacC6KbWG9FV3snEsfJrs1LK3BVqyj6BnME7wnNanE1nGz5HGTnjfphtM7n5cemft1AeePRnNvhp",
  "key13": "355Gst1dRodEBiUoeF4p5hUbEPmVAmpc3t2pjSiZFMebvpHjvhHXxyWBHgp6sL9eLuVMMtCwGpYJ1s7aNawg2a54",
  "key14": "rUhYz5T6mgwbqPQkJ7qSeFdLubi5ntQDCdbydVe8rS8cWmLA9AAPPkX726zSskeG1N1Wq1agQapZRoEkDvBaUeQ",
  "key15": "5m4FbKsFp2EbpY8BCRa7cbtwWjWR6xtduLbboHXYg3RwsvKTgNdFADBhNNQzh6rR4ZsnQwNUR8vrPoaDZo3hv7Go",
  "key16": "2r6PCAXT3RomqZErXnFdnLteFRTSXpPfnVYvpxuCcPn8B9xCu2WtH1x8nKomCBh5ydRAM6LVLGkdZdYCU8Ccg9YQ",
  "key17": "62jv3JCpREVHqCwBShYCF8VwFnjuR3UfLKfPpgUQ8ytDkh5TGTazKi6Jpv6TTv9s6TEiBPvqA8rigQrE5PALWkxi",
  "key18": "3Y9DDuDbWvgZaJDtXRGfxhrgueJXcfpfubfawRMBB6dGKSmkVjgp44AMLcT8PTZLvjkJPK4f5nkw3BR1r93Xkvzv",
  "key19": "4fMoyqYoigrsNYnwAwfyy7MCZkmUFpK8YwcCuTBLqUWfSZ3SGWq6vdnNVdNsenwfQESbLaYhLXGbRyMFCAZYLsyv",
  "key20": "3RHeZuvHBvugvzho4fwZi4XWbTQ9a9mmY3V5BKfCyp2M3ZSmvGQxzT999XKzk7cnQ7gSF5A3yC5qySVTVU63A5gc",
  "key21": "3NWFdme8tE7NWw55s8QMGoJ6HQmjLcdxYPBhWhRQ29arqSZoQARnjn6hJTWvkTbNigoVfg9mzAwmkfkA9G267uxZ",
  "key22": "3qYkeTgdVcc2ts2GHUwTSHkQDUvYiUk6VjjjtmZNGp7zxR9BnAqm21U1j1mrK3J1H6WEEbvivTK5ZdtSaBEJbjLE",
  "key23": "2vAJZ9gvTbgg4Byhf9H8KQJ7fXrnvGQiX6DigKHMHyiGGdi7WRwhNuVsesNYdrLj3u3M2YjABNtwho42AbY49sgR",
  "key24": "2tcef8mv7wwqoiTFkBQEHTo4cbpJ6YMhd4tLZoxSnSoQY6Vvfx7GaPf6cuurBZaA5SsJB6zfJnT14Aq2tQSXYZuZ",
  "key25": "4SX6REWfD9nyfr6gPorfmrsp7JfRs5uBzrUcDkcS2H57BWYWuDt96LkvwiAyN4gAkWgas3t2ktqwoTpH29A21C2g",
  "key26": "5zM4pfac9oyrALbEM7WL9X9CYtWFnyRJG2oR6UWkNQcjBLFEBVLDtcuNtbVitmCDSJRuy1fUt2GXTbVeT9SK3HZ4",
  "key27": "BGKAvvPbTvjQLdUqUcmMRp2rN96oVcTPggdqr3MrrHgqnewGdrH7ph7JXNXdkTLPhuxK3jBwSK96QkkdWkRU9Q5",
  "key28": "2Jx7uawdHBepz4S3nTTQa3MuGxAReo7US1CenRuxgztBGFKfxFeQWjXjWjU1nXWgEAA7rKbEuQ19pLu7rzM6mTR4",
  "key29": "47oDr9QUgGQcD61E8F1xdts5AqLP5NEhUKvHPNzDU1X6qS8QUQ6t2L35Uwo671381LuK2oHDmiaw6W7pZC7Gbjye",
  "key30": "4hXio17H8XUKna7XEwmE6Mp7o5FBMQTDefarqFntYQAC28HXPXW7oksTjbmzpcHvEFzqU5vMHsDEK8FSe8vF3gxp",
  "key31": "3JqbuUFuWwveDyDagiUFHgSCfDDNTgs4U1X1n3UfWkcuR33Sr731KqJhnkdcneA9xo1kUBgW8Dd8x43QezUUJEsR",
  "key32": "2A6ngLGZVhvw1Bxx5soqc9X645KozfDa6jDFH3VLvSELLq8vxnJJXWWdS5CYkKmzXjW7LX8dE86ToNQF9Lne6SJ6",
  "key33": "3ZdZB748B93oxXVie7b78MSny3yZPRErUEvfsCd6PzFnw84gnuDdVmJCSr1iRC1e5vj3ruDuxJQyBBmgf8HDTewQ"
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
