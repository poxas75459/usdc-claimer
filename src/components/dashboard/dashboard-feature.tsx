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
    "3FHFcmdEsrr35QshHwGFURTKRrKxB9eb2aBk217qHdgGkVKb7F47EJ6LCfga4RERdmpLoZVK7XquPa9u5P3TTRyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmncJLTkGv9VkZycV5qszypEmPP9j8612T67k4s8WnteLfYboRVDMen4Ki6dpY7cwnxgmyGHAQh3Nk3o5fPaxQN",
  "key1": "KrncZHt5Q7eCn36Hj7sgm2rs8M6KD8UbvYpJgPd3KoG1ba7USpfvuHzeXH7CiuzrM9GhztFGv9RqKu23UQ5SFXU",
  "key2": "5bLXdDXM23DSKx3ut6hf2rnJn1ew6QJ95rHv64eE8aJM5m8r2YsfBq1Dp6ePEEu3quzPeBF1KioctEwTh9qy3mGd",
  "key3": "3s82qij4GAhQ3nrf1okTR4cUmQFTipDWPWd9nfXe64od2NLYZ92QQDTjhCnrbifLyKmvWzz6TdzbvvqemTQacGdu",
  "key4": "5imFWq2CvuokeHyJD1NE6tTXaKwcU9hvpW9VHtWZaiSrCMjkGYKj7gJedsccePxLSfxX5rnBKvzwn6n958q6aNw1",
  "key5": "4krTSYmwcEEtjxMtpgMnuA8YQDhV2NiKUaUZMmVre8TBmDUJ5r8sgU9qEboFnvPzNALihB2L9GepKeXrQa4wjaa3",
  "key6": "5VQ3CFL1cqaWmDad5njyjLDYzYjBdbnohuc2wHbs3FTedHz98cJPnqqCA3tv6zeuUBASSnVsW5nCRxoB5j2CJZzL",
  "key7": "3pB12kQAyMAkjVuyEsS5ZHKt64zdHo6Jm7JbLSJavvwsNyVLpg5uyJQuVWj2GfBXWBZ2ZxpYCPBwJ5aT7AAcBZYh",
  "key8": "2gtYy7EScEdvPG9QQJWRhx2hBKdbji4M8VwtsQiyTGYCVm8yJraSqFtZpm7xtisCh7eJfBySkUZZ44x6xESjnySq",
  "key9": "MkRzGq8xYnBA2pp3KUnGVTkqsTj76GVadPeNBovK7LEyBvisWigpcJm9NWEBBos4GGvW2y2GuDixUpDqGQNCYyC",
  "key10": "2wTMdrdjZcw18ieGjr5V2iDS2LHwT771QFBaNgz7U3B31p8zeuMmGqs6qcU7tc7q3nPrGLeEUAvgKUBK8HRpUit7",
  "key11": "3SCPsqHgjMD2EUbCaqP7au8U8gcG7uKLftLFtexh8JRGn2hNGc6c1xbnsH3oZo3woULbCdepsvBz5JTVz8vrC5Mk",
  "key12": "53sxb4ua5F5S9yv3rigkbrvo6fooANLf5oxmmqwJFhiukPNHxewKEnZBLTusrT76nQP8rN1R4yyNpd51nbTi8rQW",
  "key13": "66T76tNyArx4EGyJZYZVkVHXWRipX6nkFgnVf6V5cQQtLzsYs5HGxkcPZyh4trrHMoEEgrf42GuNTQCLYUcDuCbb",
  "key14": "7gTju3S1FBNp7G77Zoc84S9DFKEV7SFm4bD3RpoCUDzdZW3gMBsAFBFBjzx5BZyjKQtt4DcogbardQi4fwBQXQ3",
  "key15": "qmpcDGinmjZ848DYeLYHe1YeuEBmtQxpr9SBprwdeGVSD7rFSUh9ki1Chf6Lhm8gXYPqDpDGCcrjBsa26d8cNHA",
  "key16": "3m2CG23o1yJWGuV6bD7H2LjCz1kwHWrTomub53hj9ohpQ4KNBDQLa5LkiJ9szVkN4MX6BDkHboGdeDzhvMS8L251",
  "key17": "71NMpMF3LV4ZRon5aHkqKHk8cWvhsFbcnpMzvJqDf97yDgKMQN65MKG2BPHHp5TrSEwAfJSHv4M6EhNCNPv136k",
  "key18": "zJcpo35cRGxNCgsXbgVY8yt4cGi4nzJw7M4iLVG5HoffBVU46botbcbmNHCk81Ej4NDKJysAfDyhpE1Cs3dUGwg",
  "key19": "2CoDMRTAY2cHsmYdhyBPm3vekA7x92yZAegfJJo69M6fLTsrERaBBud9yRyYehEk31JRix2ccTTZeBtNRfocCVLv",
  "key20": "3wmjfRnsL2c8KzDpMNH9nc47NRbRB1jGuEa4nLZWBBzoyb67ZgMHz8MuTTu6hU2dH9xCFCv2EF4fFBa44scup89D",
  "key21": "5zNNSo9WPb99RTyXS6nTGDxdnqzXXVSd3bFiy4cLEpLejuSuqPTTA2qYBkQtFaHEUArBhG1ov4yB9QVAd45o2Ti9",
  "key22": "5MHAQFmn7u1Uicb5ZFCeii174CxwxkT6dTN7faP4JNMWADsP9T9CUbSEH3VJVJanyTJLqeqoaWGQa6R4jH3pvghz",
  "key23": "JtEUkNUS8fpPYnDzf7whJjc31pUUaTimnoqZNpCXcyDYUBm9WUfP27ZpJRiJ8maU8wehfe7NKic5a5Kf9wCCT2r",
  "key24": "5qMUW1xrJQbWEyUFPuW2zLE2R4V2rYXGfyAgKbpkSa7rDC7MjwE6xgtAL54BjbJgn4Q2ZaQfEu6bKBiUuz3YdZgF",
  "key25": "32CDF87jU2nVydduwsmiHhGB4KtWNgYhns1mXnCZ2unUVyVuBMry5ifBEuNKBPnxxTC4oti5YZwQwWnT29TNMYHj",
  "key26": "2qjWRsxenX9HtYkfoNwbyzk7q8B2D4zFBdpkXRGGJZsUpEeFSYooxs3jHYL4ew452aHQqyLwpErvLVBPgf5ZF6JZ"
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
