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
    "3NhoMv6z18fPWrQRj3ZDnpLs7JWY25mbEYEBtURsQDcvCYq3rj6q1bh9DxSDpDpqus2LowQVXEaA7LEamUhC69Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xW1AHRkvGo5UQeZLdpj7YB64z2BmPBj5YEjRGdTegNNFxb7i6pidNHw8hEoLPe2j6tFe12u2AAzG43WRzdbjM2x",
  "key1": "YFdgiN1zW8aE5nywmKF3r5ykyx7rGFLnPVN9SXyM3ZS5b17GvVfBzUbamo3fxBNBVN4dKZwqno2ozHhg3eGR2fK",
  "key2": "3hYiMSG9RKhTQCixVAyRfE4VibqV3KKAgZJsuEHYJ2b6zDqdiC5cfYWrNXg89bcp5NHtovw2ezs7ZagaDUsTAMq4",
  "key3": "3Utq8HQ7ntoEcqU5QRjJmJNMNRCdyyDuqCgccWxaXo58ngVhLC53q4qc41tD1JNrzQrd3h12uehbH5usiRZjYhkA",
  "key4": "2b4drv1esJdhN9s8gKLWV5c1RmxctPFHA1zL6kdr2VvBjTTLooyRkjLGomDZTxTMvQC4J9qTcqBXGi1D61TeJcqS",
  "key5": "3vXjXuS2rxB2Xe7js9Kao9Mp1yJ39bA7YjLTuY1Y8YTtSsfNk6LycYe3Z5Gam4AVVs1vEYKch6LVu4q1yRm1WYTP",
  "key6": "YUC2KfT5h5cAyJ8gt8hHdoTGF2GL1FnTuYn4YYa7X6EH5r6JNjvuNYAFNjvRjduPjGjSVX451kWUEmmwyXVoNHH",
  "key7": "7Z72GprVFDJDm7LSrcoCSbrydkUcUBaz8wCCyc85YyZPuWboZTFMK8AJYBL95RbuyBhaDhE1boFZJwdGtsRrCFL",
  "key8": "2Y6ChTB9LXuMc8xyf5XK65J3eEm51kVJ8yRkLXcKrofhBemmjoUg4NdndSEouiwA6uGRLwjxjvXjDwQcpGtPtWWp",
  "key9": "3zYT9P3DieaEk2paXdve5vBb8jTmLd8QVD431hCHDsaP8EUhWdz82xNPgHjMK9G42Q6uHaRFSD6hPw6Wf8k88tag",
  "key10": "2nczqSw3DcBv5oXZaHJdtZe6x1fnhGxZi6V1bthGEdoGBK6krxVUDDc23PeB5Kjxb9C8k9MR3BoWA81shwRPWJkn",
  "key11": "2rx7qcxXUihAhPeNC9HFgKctE72jfAPoybf1MuVomAT7DppYwygNTNhzUPiX4Eu4kKxDHXia979PoPGH1aYvJ4G2",
  "key12": "2DxdQ67Rz44WPu2fCdqBkhAh8LM1ZDRshsxM3skU9EmbWpyGa73McqYekAMioiRWS4cd6vEHmdtFNZShkW21kV1i",
  "key13": "2GMLZNsv4KYQYpjNQUnRoBs32ipPdG5LekvMjBiMcikQQq7jyu8cgKjuvtv2RXy78MGV7s22QJmLGjVHnkASHEUR",
  "key14": "3HNucQ2R2tgFCPHhDJGtkjMcEePWReGo89FNUzHZPwQCfcn8AAq7fXGZwND7icPsxKVNoqKC4ysvZcu4PRk1fXWV",
  "key15": "3iXD5P4Ds1SruFoRXUTLS6yJMs3m5KNyRb2u6xSZJJRRhTgbetb48MkVxStaiXkh3Jo48tqnStqHS41M2irgnh26",
  "key16": "2jdV5iRv8gD6PpBHoXb7cQmCxFTh7Sdi1upz93sfAnUByvn8VPMCAXtfWHxh6hiekMaTo68AqEYZZ8hVUnJpKpZw",
  "key17": "2wtaxqVxa5SMHR9Pcio5Nu9RKj6iS58Er7LZNH4rHabUH9R9mJ4nCcQNEADvBU9pzRBQxuAJSAmbryut9VS7VJPV",
  "key18": "3cX4ybZTtwXgFpLLcvQGRvWmcrhSrinxt3JsNS9UEqGwUNh85G9aQzGXoMpQ5DbRawwQmvVhL8fa6xahxKmGNssp",
  "key19": "5Dk6NwDUas2bG1YKRsvKdJVqDX3R3kqtJoM5VQ3zESBbAtoB1vqWQkcsXSVcnPYSJDLDzbDf2eWWSLCUCn3PyacS",
  "key20": "jkVBP5yofHGdshUqtULFxzXsHhgWqJKQ5LNJAo5YpP6vXvZj2ZBwgiw9gtLUGYwXRCwgzRegsUNUt8mFRVatHj6",
  "key21": "2DqK4r4z4hy6thXEhbicnCPmTn3DW3XjThaFznoJwiSLwjL7FgUWfTZcE5wCUf5k1o9cy51aJdoj3gukh2dFXvx",
  "key22": "2E4ufWNe8RFZfpW2aNKKZuavux75EPx3TEwZjoSFn8No8g9zeQUXGma7MriXT5MLbZRVSoAW8cPshoF9B43kyr8G",
  "key23": "2feADSTdsySdUQmsu6hNY15NXW1qN9waF8T2wUXURno9kDKs8TW5Jo3K5VqRjgMSfaPooa27hjGYzpZLqNRDf8Ln",
  "key24": "62o7rHJffNYXqzqKH7wAoVUDPcUgAFTQgTUjfEU9bw5XQ5xg5Jz68EaWHC8oZ5YNcoTnLRCsPxmFmRS6eSzJPMvo",
  "key25": "4s7M5FaHVHDP1VxS9Wv7dzG9UKKArm7RXXX7ASEwBCKALGZfeswYJyNP6nMe5osMJpqWpvLseiXjLvHGk6Uporid",
  "key26": "2x3Fe3NPkzhDA5Sp6f6DEdZotiJFtUDtc8RW8iW3czML2UYujaw31r2NUyePYRJTT4WaDgmPn4u4cF32EyxEWxH9",
  "key27": "pBtXDHH1v4a1EMRgVXEMqm2BPRmGoncMuhYUZZ4LkvraJC53gEnSpWYCRSavkUnVym1RZ8NjtjwGtk6wESKDAPQ",
  "key28": "4BWJz8euYzQfDah6FVAhiVCxfhMcShGfDKD7Vw3Mxto5v1no82QarsKdu9yG9p52692naW1ZPk3nBg3febcAUUaQ",
  "key29": "3RQrsVZEkwqGZoSgrhZg23UaNfEaDnjbqhZgP4CQaTWGfGds27CUc4W2uEWeaDX9XcYU95ToME8W51pV9drqQn4Z",
  "key30": "4dcmGXBRP5DDviXDuUpbyVC84TmvfC2tEiRasHL1JUTDEsptwd7vGzJ7MLkEvFEDRh5sbGGvJZGPUK1cbnTGi9Ko",
  "key31": "2svMcUAwRBvmeNWjtCZrEnKZoT2nCBmmZPdbNBFzPWnwW5xYrpGQzotTZXAJYNPpdmH6F7rab1QWmdhupeUheT5a",
  "key32": "5QVo41QUpdRw2WcXE31Cs8VVjtcKxh2oMxgPdRtaMZQgGhGVmQ8EZkSUJ4tp3KcC9ESEfKPh9NhecfNzoHkkbjPW"
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
