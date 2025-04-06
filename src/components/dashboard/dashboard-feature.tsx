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
    "283fAmtkJLHcE312GcZ9iKFj52174g4fgrrJzm6YtmGZKGRCa3CfWpBCEGUmbuJNeZuSRbzm9LB8J7vKXuB1LY44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6pVpgXM7Pp3A6C9rQi8Tzv3ovsoY2D424Tonev29oRe78vBm5J9HTh9YdbHJTTTU5uwHJ6BEDXMucfPqTjEtPe",
  "key1": "5byFqqNXcaXYd82NeBB9rPhoh1TR5neyGXdKz41dZjpmYU7E4fDgWaJKL5r35YdgZwNVup85aMod6aBYLK9fyM1G",
  "key2": "2Q23Cig5eR5SjbXTn9bizfRiPLfysrhg3JkSoTvncYQ4VgdY2SxsRXixADvRt6MhLzxrhdmTWa1RVhScvzmzLext",
  "key3": "2nSGNSokoK1GPH7ZMPWg1e6DYQo3nKBZdMyuwE35G4ZzMT5Jh3Wc9PXt6bYDTvuTNL71x2yBw1gfkQjKuRSHrraj",
  "key4": "3w2cSTybB3u5taVroQ5WWy3jUJV2H8bPw9GNHDBcR3tWUd9nGNfrUEUZG6GkUx3M2r5kaQSDxT8MsCYd4c8p4Ys1",
  "key5": "28xQZwN1QFncbd8oBXEXutbZYdcrkkj45WqmihYBYuSSBmZjRJxwjPApC9tzHFFHhZDvcs4zgW3yAvXwhsZpXzkb",
  "key6": "39tCxG2DPdzCLx7hd5L8W2Gr62XqLF9Xc1i4CSk5DzcYDLyGUzoy18GHDUwKTR5e4qPvoHueA4rMfzRnVXtuCDho",
  "key7": "NHvbGz9eRoqMzEkG2Q1xTTKt37gdmGwRRuHRyWvSCyYPBepz7PZqEXvMVfd8htygBnkSSJFDTXVUb2ugYzidWcQ",
  "key8": "4QFhm4bppeYomp9QJUyjYvDpe25ZMQHwFcq7NjtJkQksfudZXGwZj4jmvknFAo11tGVryRrqpWpkjLnh4i3LF8fq",
  "key9": "4hhScZR37DSCX1JP9DHWp12kBzWytoAmCSH4SaLmzoQstUEsHD4EgU3TsxDXhGcRg8rroS3hvwDLEFCK8cAZ36e8",
  "key10": "3rpbPBG8YT8aQRfvChSMopepcyEC1igsd4eEXAjR4M3mRqh87r1eR5SqrijR5EGE29xJKdrHuhc6YPew3fQgGuxU",
  "key11": "3rKYTUE5XZgH7iPw2sQsCEw81a17C3mEpDvDo1ybG4ey2Hys6q7aVnqbNcuLHbB6uoN5Lij68Afk9JhzunizJkvW",
  "key12": "438oJEcVn8MYxgGdxA5U2GgyieTFjdb6eTqUAmh73rnszRmaKpnpuWYS1oN7T7aA266TDgBbbDHwSwCdaLgP82nN",
  "key13": "2wbcDzpjZHzj9zUS5zGn827W5g38Ku5kFeZndcDPcjb8b9cD2FBSQSp1TtHL4wBL3zinNKXtBubqyTgfnmVQdoXs",
  "key14": "cMXpFJjrmh6Tdxz6U6kGzKohatvjNPpZhAz3uLzrktMsiVv45Aa8DGb2cv4AdngCaEgpfuH7hXHPwsc9qGgMHQJ",
  "key15": "4tjQc4pbc9RagAmz9cKU7zqauigsykaCn4MWwVf5JqtajLArUipHwM8wSFMvcswVjfXUXKQks6ZQosSmiEWc7XR1",
  "key16": "4WjEuwLTFEMCbXcdjNWr3mTdNhdBoDVbj7tvHq1pEdowR1dLPLLrk1hVNENys9Ja4Ljviiv94aQXKutk1CJz5nN9",
  "key17": "5gr8a263FS4j1wfTtf47kh9iqQaj95tJz7EX3YC1tAoQmF9K7Ms7VbaUizFfGYMK569vDP8uv1E7LjuQ54u6AvVT",
  "key18": "4vX8WXcerETTGy4z3ee9zFRvvNytPqb3cbdmexFGoGkcqzYdJiYhcu1CqCn2Qdn1iyBLaTJsbnnUHvr992rrMR7M",
  "key19": "5PVbGbWq7zNyTByiRZ952JZUtKQ4eix1DGmoqvSCMub1JxpYpATQhDpVeMLZGnNH3Vk3QBH8B4PhJBRUYGQMHQLt",
  "key20": "51Jd27CGbHqvaFJJQY93CucmSVhD2gQ4gPTY7ag5vKKxK4qAE4Qt2wsVfppnJHEzPMdiMb4EkkApSXuG64rUU6UT",
  "key21": "5ST8783fQQR8cAquskJY2cSNvUcLx2J5emumznDWZmuJMxzTvdzKd2dZomvE86GNDcd1e4c4tnuSoZj968H3BpDT",
  "key22": "4g8F9makScsMUn6Sddkm3yavqonVUKBS91Fhjgk8qK5sjGU73xtENVom6S5CMcrZGen9xKArvxSYUBpx7nBjgAQs",
  "key23": "kzEWavY1mZhmw6sdSFtuzDGuNi9g6x8gfeZU9tgSzbbLi29UR53fTV2A9kh25iM48yhdpXUsAMWrJRkFDLZE1U9",
  "key24": "2MHvRRnPCk9T3Lr4EVkFdvszg6EspBZVgjaoPX2XixLGyMni1vfwxbtBwngYq7C3mLWoeZVyhRHoXjW5neQUwQET",
  "key25": "3SCXX6DWsHi12iezPKMjEfpB4awAZ6Kh2uoHv3GnpYQxCHiKLVwDhiJQwTwUhZGPEFJCGLUEDLKy4HwW6WKEDT3B",
  "key26": "4KQe3uj5hfFYTL7yfGzF2vqpTXqNNPbqmhg92gYPiH46Bno8RnAcRPXiwuCbXEt2KpU7YK1BLLaceZjpgH9UsDXG",
  "key27": "3JvX9GHYc5Hvn7toFstNhPkFqfaQoupRyBoXfMM3Y18UK6Qk4VfvRj2B1aJ4ThMLfLCRCCb35Z78nGgbxUYoHLPA",
  "key28": "9EE7Au1XhnRyDUgyCLaBnLfaKAMaBSVST9cJ7ixhLQSR1CdnCKRLQZPMP1mwKN83UsSFXTrUaKshg9xZZF9uxjP",
  "key29": "gVCSeGqkmemi2DKDbR52b5T2KiFDrLopEXSDzDoj1AJ43uEYVM3nFB6D5qoju1VhvBbWtHN9DwB4S4mPpGgrHnZ",
  "key30": "4rtDtcukKEpKJUvybL3FZwECtijfbUCH6bDscvuTm7CWNT7BRBoCxFQ6n1R2c7QgiHrRbnpKKRLBsfBVkaxfgT9E"
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
