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
    "fT2zqy52aSzjkNXCnvuHnmhG99e1Y27hJUD9XS4MyKoHTUEyABvMf36SxroUBJcsdpUaptqyYY8KBy79Pj82o4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VM2UL7Bg4qaJ54DDuKaBXYdQm3uCYFmB6JBXdSAgjE7rxSQuM2dZcavdPWVCEdPEd5e9jHtk1oNCtWZs4Eg2eLT",
  "key1": "5Df7ASyRgDyYJ2PpRjYy3w7U6QkFjAg9sjhWhrLUJYsCapxRbh6ZsXdH8bYN9bjxAvh475d1e2rupCupzaeyj2NC",
  "key2": "433ayh39P3WWm2vYxQdF2dU5xzhTxn66mHX6rToJ3MikVGDHA39UbdASiXEyQgjaaKxZEyX67xswjW7eJucK13CY",
  "key3": "5qVyxFXS5eXdBbHGN82wobxN11sLCRL4jx6TfAtwWq5Tnm2acowNB9xjUznmF5B1weNc9ZGsrzg8gVHKsjzQmzgV",
  "key4": "5jxmxeeUKat9UeF4hTe4YaUHTmLngHtnaJwJeAvUCa4FumjRHMik7wF4pXh4aFMAVx7PYzpcfTr1N6oWTREFFQzT",
  "key5": "PUnksNQc9J55hy1t8fJojBLfWfCd3nT5hAmGtTPekSWBnKypLA9iQYhxVZ5NMN1D3BJyy8gwutsFCeDkgT3e3No",
  "key6": "xyTbrxkWy9XU454dp1vEgViGWN1JrXjqy7WdwRA31eykMR3uAuzmXAWdhpDiLw9h43d141xfbEhChWb34UMWMVc",
  "key7": "9pUBpgKaYWNsDWVGQgxVw43oW8yFszASaeDJa2ZSwRqTBbmLXApqPqneLKUVPvP7FpDQozQRDERKrUGcvXXma6n",
  "key8": "33hkmjiFUkYQ8QpnH1nJzji4r9BoWXUTbjgkQ3261C3ViVVn4UsvSizuAcX5qAqTorxkdFqfQxKBRZiaATviEDoQ",
  "key9": "2guE39S643fFWEKsRwjp4EjGNch3fBvJhuJKovpEaWi8WSyXkNKk7gzT6kRdU9ewXomfG8e87f2i9xtNZKcSawMP",
  "key10": "euAA7bsvVsran2CCMcbnV5erR6ufzzFWaNYTrL2yb2XHYCwJDuik6dugG7jJvKMrXhtLsrrKFYsz1iLnjSgMWVB",
  "key11": "5HxRMKQB72SeKuQCtAsfXxCUqbtDJ3yQbYzoHHR896imSqCVU2v4esc4sXQ4NgpFXbaXc1x76UyfjcRvuM8iB2Hp",
  "key12": "AF6HkYfFGLGxwp2HpMLfZUs5B2j41Egw53WZ4ZoqPhoE78uVixyV84C5RgZrgawhUAoeo8v2w3oGYYHtFxaYEw1",
  "key13": "5VoydeCyorDuS74UsshGR3dr6gdtPGS4i66HDQqMxfrv8XrF1jRApiVjidpwMJHJFYH247ttXcCeug3evCWH1xfT",
  "key14": "38cFKAeBgnRvfxusy4vCuT5vn2t3554KYYCU1Jm54qXJW9f9SGJWmq5Hud6cNaEt2nCtkJCRdaeA5zu1839ERr3z",
  "key15": "5Phkf5WfCtS9L4bsCubZ8SyBTW83W9KjTJXqCKkTMyCCgcRS6DS7zr1MoX3G5AzsXF8WdstLs4a588JmLM6Zc95h",
  "key16": "4txbQYb8WeuNp15mqzuS6hDRM5NTTApaLrLfMXyJGk9KjNATgcYSvoHGqw3VEMScyABmiGtadYTQM1Q62mJCerD",
  "key17": "4Q8tDPCttPDhBsddvrv9npAh6YeAeAQLHNtxEr8dkwDbxXAWx6TxMjs2x3ieVzvbw9pzWbyfLJH8X4gKaL1MKBxh",
  "key18": "4z9hjrvX51hpcLgm4bXcoMM3HL5Sz56qahphmMPogYMDZ5iEyFre3M6GwGBQULPfsdo4BNbLhqY6szwH2x5cSN9f",
  "key19": "5KLmEUxZmurJrSZuuLsCYXrFNakyDSDjL4g7WMvcEdSq1xSaqHDg9JSo7KUpUt93uNYgSQcgQ861YDNDXEfU6Zbu",
  "key20": "5acQkd9Cawb9yMzmdwVtcmYgUttHukZsThNMCGyRZJj38C26cfHnnEUrHamSuEwtXy3kG1FawfVTZtDfnSu5gdQQ",
  "key21": "5YNBZ1MgDhq6AJDixKxh51o4YzqJa58Dfhx5LtwZgvdSAgct3yFFmNGpHK2WtBbsv6e7BGh9zQkmfh6JH9zSoqdt",
  "key22": "4r7QkZPpsVtNQr5knZaVLEXMWLwn5sQt2EQXVGTKA53V7wfBAYmjPrZ5PgvVAsd6davvQFX1k2MFmqYrMZqGVbej",
  "key23": "2y6B2U8khYjjsZu1rNG2j5DhD5hqDcxUxyNvfdWihJAz3S2cNM7X3cjJ3oEGAr5QeMkeziKCY1XEkqU5UrkDHcGj",
  "key24": "45vCoXiEQXDu8EjdTUdKwz8V6ZWma3nsxvPN2jdVK6cTnkFMq4mUxXbx8yym4b8pMFAqZK8K2gn57rSSDtEgrrT3",
  "key25": "4s2YsDHAsXQS7zZvm3K425tsDSTLyXQWjNEuCQCPsmHTua45pwLE9Da7rYUrubnDHfJLDicbcWuv23XmMn8JJojY",
  "key26": "5p5tGCqu3c3jagb5Z9FqrhZYDyzvhT9n9XoJ3iED2g7aRmNsVnbd3gfDsjitDXkckPZsNnpQWFJCUNjnnv75eEnn",
  "key27": "56MGKqBTXP7BYgd3xLREKZVwewGZmAPHkfEo7SDUD5H2MB38zPVbjvNnh7W6SRSu53vxsjGPSip9vJK1ddbb3ruY",
  "key28": "5d7tNsGGRiF7c6pD5SHrm57jmhMX7MM7FP8xmE8femHwJcfXHFhBac3vJ6rcQK68Be7FsQbKU89qVowvrUvXf319",
  "key29": "5Gd3QiE71EKiv78jz4xQ4b1JDsvX91ejnw1ZbswJTFdrjGRwv8foNNsZQ8La68huTDqujjxkScoLEGWvMFa78aV2",
  "key30": "4ZXuZ9tHLjuGFj4zhJPYXv93zsKiLYrEkGgrRmcFQksudHkfQoa8UkvaYgWUAJ5T76xbpNEHey5nv2ztpSmVB1nx"
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
