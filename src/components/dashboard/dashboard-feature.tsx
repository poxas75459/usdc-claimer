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
    "4yreV61kihNKWhQ9qSjub4TShzkxJgZ4YDNjSqLpLaJSaCLAWxxgStk4fUJTx6CRBbZ1ftqHweScGGevLxENQcwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbWupKUW9Nah9ZAkWLnEVs1Um3SQFakDDWWNsQmEpbB7weXuPX1M2pgsHbnnNi4SLyj7ckXZyZspHRrRMuSJpGG",
  "key1": "2R9Wq58g5oE2F3imXSyuycUmAyaD6w6kEgHR6E8ockqickUYRJPVfBSByzCPZQFGeUSZN8W6ZPn1NsovCokKz2eg",
  "key2": "5zpEw6E6RzEco6a4U2Gnsq1RpySfDpCssfmvuCEVnGZihgbXPKqB22VqzouMooBctXtWiQx7kforNxV9kVpctrY6",
  "key3": "u1LoEhN9ZMkYgAqBhiNWy6GBJziwTbC5AHbR9R6x4PJrTgNcFERx1xqt9U3bKDr2E5rfBR5Eq6MZrTnqkMBpiwC",
  "key4": "2traeKtfDC7jJFMr9vmdmX6AthNaHFUErcEX9mL3U8VRnYKxhN2Uxy4SD5VesjJgVG5fUZANv4n9XBRFWEQhaHpK",
  "key5": "5exQg3PJ9ucNdBCEWiTrWLR9AEfNJLZDug9arJT3xVu1CoghZL8QjHaZchBVTfSX4qFCEBjLstZ8JwmJnLCCVuZ8",
  "key6": "3x2cumooKaUSC9ij2DoRhpkWf1irdNgt6KdU67ZpHR6j6GHmxaPuKss7HC5HeqkjGYwjkABAj7Mj4Ld2b9Y4YdWp",
  "key7": "5pAy57nynjweGADeUS7qRi1bgt6uvR1Ng7Jh5exSgNgauJysnNdPXjhXtdgkgCeqNKbP4W5mJfkx3ATQiAVhYd5d",
  "key8": "3RNsQ9dBmVoqLG3FWQN8B1dc3Re5BN9HUKmn6JYQXowqC5zAE2HT4qp3TNBPw6nWYk7m6tHTP192bVW7MyKpHURo",
  "key9": "5pL7pMToe7mB5vXEvdt7ZN22HSYyxVxviMT3LVgN947mM556rPPgmd36ENVJC9Ci5PaN81tYowqgLWLxgMVJLXQK",
  "key10": "3ZirH8wnfBcWdqZMesW2Gs8W4WUeFHopU1Axvu23rZdMPDTocqqTViLLGdUiX2L9JpXxbr8278S6tfCNC2BobRBq",
  "key11": "2w5zRFynbsbQWnXr9De2yqGmsouEiYzBuwn64xykTZ7STqskEDSfAmm52yreLv6d2HHH31ZHWcqxQWGJWwkSngdd",
  "key12": "25gPvFdELgofuTcnaVsHPn3rtb9gzQ1rNaRnHrTpfxmtULkdSbUJH8Hjxc64WjRqgrYApYXMCuiQXWGkaw6rR9yM",
  "key13": "2jjurbqGRuan5b7TrWAHXJ4NuZnkZncTHvwyrMVRwXtDJF1s8ud463P1U8Ckd6DJTwGFeRC12PQzdgXkFQrb5k8b",
  "key14": "5x41GjHKCetj6J5zb8Rn5kL8WFfhYYuFoE2txUTyaPHmoD2Tax5kD1WJ2AoXEwtWeJEGVyiayhwBA6LWZvBXY8Av",
  "key15": "j7ZE7ciRnr5hqDtRh3m3tGveHB4vRyv7GmWN2bDgpc3NjPksZ31y5ya5g9EDgrhPzRHXRCEyixWCAHwG54Uq9tE",
  "key16": "52nDrbh926X12r9QEFx3qrDwE13N6DANVcgvKLo5LJYxfVXyk9LgbKwndcd7A8CTs2SKEi5ck414A3bKnFrJtLKu",
  "key17": "JYRTZqR8SJhwosYPjQtbx6pKYNh7mrVLWwsWx5LTYuPzRTkd32CCwbEjjrMYVLDdYZnPQck1RcEGMidnnpGNnuR",
  "key18": "4qTPWdcHqK6TxzKkeZT8dAvN1HrsmaVK5dh5jMjuXYbzeQLCSubUKvY1oEGjm84gRJGe8DN78r2N2ctGrF2LdcyW",
  "key19": "23cH1tD5mYHSRauJfdJEXGwFsi8SueDs7bU9tZYMSMPygV2LUstHb8rhXxXEGwSikFVSXTGDcsoTKW5U4TDdxidB",
  "key20": "5euJ3JVvrojJezxHjEmNC2ViXqn8AWSX4f6EhHgpDWFVnADHYnDSvRjvRKbDEykuUF4Q67iY4qhF5F26ZBGGgD53",
  "key21": "5dgyHJ3g3EFMy9EYARRQNgXy6JZQWUEi85bCJ9ojNq8kMvwihse8ehL9qRXbgtftnP8shGyT1RKdrqk2sXNMQHz2",
  "key22": "36ghhRv5j1UGXNjr95MgtWrt4HUEqLoEkStubf65KF4Gkf7b2TNbLrhB2CCQhyqYsSPt3bJgS7Ez1q5BpPYPSmxT",
  "key23": "2eoZfRmAM3o998JShWC2NTEpFoWoBqQsxmMmd7feh2uDqvi94CQK8wyueW4WD8ueaW7izKDHxjyBiqKy2KfcwLFV",
  "key24": "3S8xdBYAQeoM1bC65WofH2gpoKHJtVfb9EZAQ3s1ynAHD591nnCCY5GaV7QjsNS8DRpNE9xzUdpxsg3FszTMXxfA",
  "key25": "Xor2CqAvi68HBeU2LwYntux6gT1srrG7rZunGsAGPRrytp3JKp1FvSAw5HKYmHL8mPcjAZX3AXyvCU8FPGuyeK6",
  "key26": "38TmsaNrLVERscLscxVHraDwttxNDA6imRhiu7rXe1uQdTSmV6s5XhEZNTXgHbWSbtm4nE3e7MdwuRhyh2Z6WXRn",
  "key27": "4juu9DmkrTT4kSMfppZsb23bL5DdAaduimGqY3K2iXUJg8i9ud4SsRQDioCv5H2UyomtP3uEwxpD8woMk3VE9Zjf",
  "key28": "5yBEtSGV9bBDhHM3UzU6nkuaVp94p8eGj9tAG2qJkwBPuE7VHcedmbNKPs2jmE3VFpaE6A2FFrjidBMkbrCYxpQL",
  "key29": "wSdwkaDJd2YjHmVHZZ1zy4Y2PrCaoHX4ijFXau2UXpbEFqgJDDAnnanEbPdHRmMee7k37r8g4Yb8WxRrQKHM46P"
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
