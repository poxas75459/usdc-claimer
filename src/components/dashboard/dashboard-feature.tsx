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
    "63VAkjkUX72k8qDGhmW55hnxVdJ8ArbkYKpfSLwn7hWEJP7Sjih4gGimVwpketjyZt2fU4f46UvGL8SSFGsVb6KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzJDiUtpdvztKV9bPB5oAGHXwcFAbDo48Nm5WqdP77KjGXPqhXWmGPWuzC3u216ytR3t1RJYu44pdHJXLC7Lu9m",
  "key1": "58sZM6NRQ4Uznw8ZCBp5YbQvW423P42epSUCHujnw8XLQ6XYRTLoHgMAJVXhGaqiHPGGYcd2weE3EtkSSARrddtJ",
  "key2": "zoKyuCUdHng1k3pEvounoXhAbBZQzhEMvBC7nXq8ngQLW5L5PF3waEMECJMZr3HHUGvTQszViYKXH2nfH4M46dp",
  "key3": "3u5kfEy5TNc6cHia7AxXvmiDijKLW7EUEbzdvrq4ZLa9yodRV2m1sbgvPfUKYkdS5juHC8NuymRKcZ3qCaBmDh9i",
  "key4": "37FHSyRUZYHzmBmuCGofhnJZjtPo3A4yc2BwpuNSzZLf552HQgFrBXwqXJQj4XmUYp5Sxy4SwhXp3JGm7hVKEfmY",
  "key5": "4VWs5vi3NV4Xmok5979YiVij3TupjUqdmLA87suCQ3MRJ5RfCnjugBezQmMfmU5uNA3N7Qf5jiz378YANYeUchDA",
  "key6": "bbUJ49XmTNZ92s8EiTVzBF8GJNThmDEmpfN6QHK34LrA8Ep9m5VmNJoV9p9SucMcmp4x6wjEkgKmQ28zjXHyqgy",
  "key7": "61XubTHaX1hdHNeNFS8toaDKTKtNwGQsewhSBWrSFB1ydoQE4GPoXtTa7cXv9rYEk3N4xjoaUfJGoo6DbtaJeAtQ",
  "key8": "4eSgcqngut7tCqYthABa3HN2PmnVkPFfoRBnwDwMBUk8CxawXmtfZ9fCEexbBjaERFcxDLh7CmGJoFaUh12RAa1r",
  "key9": "2MBDoTA2ewYJ3SaZYFbzT2HDhvp8FkKwNPoy7PwzDgpZdcjeXNLEMKvV8TzNbCXRyPNrgQAUvXUodVMS953p6sU",
  "key10": "41unSn93PUezeTKdcaFz9ygv6kEgT1fSpTPAz2cPuauEsbPNnh7Vjt2dHu1FMbt5Uvm2q5BDJEfFrshXefqzqHee",
  "key11": "3rsAECssby6xuqywcNp8Zw8dYGpRSFVp4eGSv2dQi3Yg8fykSuEB9f2GLTRbd574ZxUPFUxTagGpgBLw5e524Mkx",
  "key12": "ejVxEwjX4RB2xCBwqTQP6hErEKAH1wpeVQbpTC5sbkS47kZZ7k1gctSeD7xon92YtfbgqSyifWKjstncw6qXtfX",
  "key13": "55Umx9HZPDXxnbt5twVjeVA2nstdE5MCut5hmLKFcwTFHmwX2vZJEesgD1rJx71RSiasmPo7kSQfruDCn3baTGNh",
  "key14": "2bRGYYiMrSH8Bb9ZXqAdubs9D7GhLHnYvp4VyTRfRAvPVMw16zWL6ZBFzQq5P3VXyMLArHryGU3AAJFsqQzBEfsZ",
  "key15": "3EVqutQjXXdMCrsDmk7VNjNDABo4tqM7py9nvEM6GBgUk4aG85TcoF6zQJt63kN1axkQhpkauJqHKCG4Vz17GHWE",
  "key16": "2fLTCqTQSjK4hJHpoc2cLR6rLiQn9kakYQwABRGiNx11j8j1iqh6SzkJL7rUrMBBvrkvM7kHngAd2U4ddsmbkXig",
  "key17": "5sJaiSoF3cDUFfZ6JKhNvBGD4duKmZrc5w8wQriQ7PX8iLSDFgFMDUg5BbtwFARCmo2wibiggXNDbTGQmw4fDeT8",
  "key18": "4UJ6Syo6AxmHYi8UwGGRfVN7xiC8ccX5QwAzBVn3mhbUfbpyKTdcmDj2yCWV38ayC5qzZ5T2ykgtLt3GG4taMvwA",
  "key19": "2qNKcVQYFxu5xjkghKEBoqFRpZu2Wy1TwwRZNmjshzjme8yt1UuoL5QTt4VXuxugiigfQt7UbhvcG4mGhyY7Ni4C",
  "key20": "5ejFciyyWyXbdebpjthMNjj9JX7giBGKRubBro55PKmeYJARbg1huFDbUGsCxWFViv7ThbKZsF6xmdXsHruhK62u",
  "key21": "FuRi5Awrjiw1EJFPQURGwkfgW8effGZBhKoj5XBd5HicSWFPpBDwUdTxCUeytnkXgL9ceR83eP6p9XcrukcfEQY",
  "key22": "3e8fvaoyzFtZkXdrqpM3Fpe2m8BTfs53k9fmmSrsmbVmouqnyXoVSuBPcLbTYyjRxmoYieNNJh9FVPEDuosAazuh",
  "key23": "5SpHXRJCN8Twp61pcX3ZFX9ou6ETr5acHG6pvexUN6bxRCDrER5ZcCpmpdctK7wxMAamd3PazNqDbgbweJ5L1HCV",
  "key24": "2GcfZ3zgthf3mVdSwjiAFsTQFJexTuSmCSNMpfFcsiHqLudVfmH1xPfUFqkVej9f5YHJHb6icSMbyeJ96VK9UxWk",
  "key25": "5GioAMsfPgxAMvm7TSgFTLgibfTjwBfLnd8GoPspZYQRzqjk52GFFeEfdYXUpQjaWfqidz2X3KjorjdfChoRjW4r",
  "key26": "3ynDUDtT3PEwBdgReezybqLm1AYBoBFgcFeJvtPkLG6m4PFD3exy2LRqPv7TjQr3T55FXE5TcxnSLECBY8dBkGop",
  "key27": "5pxnCPGWmfzyScMFPnrtqBRTzNoekbEZF3CB94xnt3MKHes5EtTuHDJD2diV4bAyh3DSoYydY4vSqygSLCoNT36q",
  "key28": "8Dckq5eo3CbNGG2zJvkM686R1Lv6Rw6hxXvpBu9bUcz1DavqayjqfPq2JQKN1CHCWUte1VJ1tgFthmwi5as63p5",
  "key29": "66KSs9im1FFq1HZt51YNbnKfKjYeRWk7YsHyaiVgbAdfhN1Z3rfmNzMtdb9pyKp6F5oeiqVJ1GttqCiozEw4gwFK",
  "key30": "5v3AMvcPRShb7HpAAws3cdhwm8XdvXVjbp5EUnRRqe7qZ8LvVr16rNE2TxUucCFike7iE9WSDfr6Unf8vraYfmBj",
  "key31": "4pQrnQrhEBkaoefev24BzVQo8eWM4MUNXSv5ZC1Pg5Myj3x16ruGGiAqpByLCr8senyfwEA6tt1DJuwPmgrY2HAj",
  "key32": "5PWXh2BurU6NppZabAJDi8uQk6tfFE2Bi38VfNsKjoJH2FrQubz1ubavfN1KE3kLP5LysgVkWKHxKan5eSrFbc31",
  "key33": "5jQR4yaSRYnqYHUHNtDoFVJgXGwwJY7KHNvpFQaVUeRvgGYEvLfTqmBvsLrgbwwdzqWRDs8vMmf7QZZkamZ9bdtk",
  "key34": "4szrV17mHjWCiwcccBUiNpkFth2JPdABUNcEkmWpuMcehjPai6t5qSnbXdgkXg1AQqFBJBYtdCZGgB5Pa1Ce6AfC",
  "key35": "4hDauNJzjTCtTUS6dLHKsun1GuzHBSmaBb8BMVkY6n9PWvgoF7bsUaLK1eqENqeZ3iGeQ2FArH3VzU3zEHkMKUtW",
  "key36": "64ftK61sDwwLCS6xTRjAD9PtMLW4rLN6JBxrCB5fFYAe1L8jozHFKzHnWTWTbV7mJHDVGrxR1G5cFYiA963SZ8tj",
  "key37": "4KnNsmArxkqUxECbT3PbgQzs5XNBR1rEn19ks4dHbU1TfYhom88XKDn1io2Soayzk2sT8odzg5RwakDbitzBW1A",
  "key38": "3Ahfyq8kehwN4CJNYh8SMjhvx2LKdBSSEHM29u26LHM4RWZMcoBJj1EYhz1i7bLkGj9MPrTyb2T1ngTTBGA4RBw"
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
