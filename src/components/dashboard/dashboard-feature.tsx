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
    "2igvJTw9XdXTiuqPeybgBZQKZcp24QqCw9oCjE5RMj4UDjYZywSB7cB1j4WWx2ABfiqvUKxHx3Gb4GTYsZXjcW5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fm6Kbq7cvZMS45cWRW6WvoCe1tkGzY7zXuCTBJbKbTjaRLDwVcGZuix4nUYpChJ3BXcsEqQfr4aA8CxZFdeGL5Y",
  "key1": "32QaMx42uxh8KXYRhUuSCF91mSSc3aqauYru16bezdrWsP8ErMLYqkMWVxG3nqPj968syGpfNpgRaqgKEBGDbNge",
  "key2": "2GXKTZxuzUpiYygctxdxsBC5naFWNbik3f1XrGFcvQnA6m4AC4mnpabNhWdNxyLMiEiiPRXzfHoREdR4ByBQLKjk",
  "key3": "5XtnSutmCYzeZCQ561RtRbRBhpwBxW7QV9W9PEf5bADuB6cDJcL7V525y7MVErWVAr1z1eMKTFm8NyqiyBjT1ymX",
  "key4": "5VsCndNUXQp8Lr88vpKYdopSm5SZqsncGGr3b61djNBmsQ2LxxbbVE2Z2zNA4RFnbeAvM6sbL8Z6iQD4pM8g7rgp",
  "key5": "S8y4ynbT1LcD9o1pzunkCZL3vdzAgLMjuU4usDx2kv9iyzjTVmaYBvK6WgmizRF1Qw3YXW2R1VPNgKXtnyPqE2e",
  "key6": "3M75eEFn5sW39BfrFav4R3AihzAVmVnt8JwHo1rfMfuDSSYugNypVy2iqZ91mDzq6QcTD4tUyuprKF5wMCxKniPH",
  "key7": "2dfgvBn2BbXbmEyaE5dAVBQ5i87QGG8avA7P16WnniyDHjSKQ46qUBaukf2cJ2wMW1NbPCvuLRbr7JAhTpdW8Hug",
  "key8": "3Exj6Pocv4ArE5kU6yJVzpfZaMGM1m5eEAX7W5vpT3TByjuE99SZ96iKygVdeLhnXvLgSVkjfEAHnPsWsjg6kqmv",
  "key9": "2VbLWFXYSkiPD7bTRXyfgDEkkSdTLmbHDMkSe57juxemkG9CRGoTqLs6ZVTdrCHfsjJWK8GaXwKAN4pN6s21JUYA",
  "key10": "5xUnk6bZx4kn31qqhzerCHf5Z4FY1ZjpAzLXpgL3M6Et8K7QSEotZerq7kJRyteotqb8E2vuStEsVcqfvcuWjjrp",
  "key11": "26kNN5kwDg4AsecoUQWBHtWjc8vwnSCXmyy99KM55H9qDUeR1c4vBD9vywUFg618fv8cqjAEEvQ1ELjsjYD25wGZ",
  "key12": "5BDezTXqcmjEQjRDEWESGUDYetZjyHadLNdiY5eZcavVxtgqiCqJCzTcDd6n5hd3jhvYcwiqxbzzovKGVMmheQn8",
  "key13": "2HSGB2TyCehE2JyfLiAyfuPxLwgVTrUDM62Eg7EewYaAXfi85VR1fNbFz3jxQeb3QAkb5x2UxN15GiymguWYzSTW",
  "key14": "3m85Rcb8cByXsDuCDqBonN22NyTR8QxE7KDCMMjf4TjUcPBsm5TCkYUATGueV23Bo9o6mYDjqJ3Z5SoYK4Zmh3HY",
  "key15": "yQwwL3vV3Zo5aTeazwP5moUBhiHwbnDTZZWZPPvu3AYDJUtCjZXxudArc8jygEzuApsAoHzR2CZEyVStkFQWtw4",
  "key16": "6NTHS3PwaUv2Sypddojq9XBSH21uDiof7f61NotSB8GR3woDT1T2SASDteJt7G9rVWYzrY5aoT7QxGC3wMXho4x",
  "key17": "3fGWAdVn254AKets4Pwz82C5cwRrRgpZGzkvXVPptArNZFHBadFVyCJ1zPcqPTUE1eWCdwzcdwEr4XZoDwhSLPdX",
  "key18": "4tK363VJi7HEupfdTjWdz5ZLJfuhNYr3kfztuJ8XxZihJsmw8APWp8ykj2eXA26ZGsrv3sKUGDZGGJJ3wjEbVtDG",
  "key19": "p6pa5aiFEwpFySJS1ipF8hpTWv4rpEw7gFCSQ6AWbn3zcE1Rt4V4QubfxVmSA45UHwn2CdTgHaJZhz5YMXPdafK",
  "key20": "rtBy8QCVbEQuhsvGvrXbZweTFzpi1Nix1K4L6EbVc4vBWNW6PnjX8RwosME3GyEaAz9vHYLM6ApFSXBXf7Yak8i",
  "key21": "4U5G7UpDrMjqEa1Bm45jDdCKNTXUVycSf8T6baaCTXhd3Z7PXZTucDGMYzEf62RrNpM8FBDzZF7out8UuxZP6JFj",
  "key22": "3jQodEmhJEx7asjBTcwUMAjYQfisg2kTfgLBJgr95ETzHSNg1AwFbBpBGj3BPih1cX3g6SmignBVpkZpJcnZzWyu",
  "key23": "5BTTUjoioowwhbGPJkRwt2KQ93eVZVatGZYscHKR6rWHkJ5etcezxAspNv9BmAVhtwBqz9C3YNwMk3m5r8J8w5fC",
  "key24": "2fAPRLpjKRme4b2TXVbsNTqCcbZPuMQci6MQT4Qh6agY23duTgcEUaLt5rvRAAFa3Nwvxmsnn1JwzRCK8ogH88J6",
  "key25": "5HQpkvuskdtZq6SaZRVWhiqabnheusQjZia9ocPXqVDaHvbNnvQh4iQsfNGH2omh9Vota8CMfSBqMYEpZuUD3bsy"
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
