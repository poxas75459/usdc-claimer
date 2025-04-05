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
    "cerUsa2vjABDWbRXaa2uB3kiYwDyWGurHdq9WWCQbN4rLLgkXxx6G8ctkgVA2jXdEMpymSNnocDENLkSk7UbKUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbHWoS4UHtYv3wfdNiiZK4bcfULX1hHudnwB9ZV6k2A58tExbqGKnHYrhgzgwYX79Lh11uArjmFfgfhJ8w5K32o",
  "key1": "uLSpDGkgA587CPS1i1TYCsTVD2yoi9bFq62zGWnM5r95j4mGoTperaoS3qh5SpwdkV9xFyAHiHfQ24bPN6FvjdW",
  "key2": "4j1kr6zxxFmxKWTDpUVEtqgE9f8JL5sUBbVJZDRw26Don2SkMzJXyeRPSgycXHSaZumndKymUf8stFAgjVQRmaQK",
  "key3": "498n8JKEUMemAJZdmNvhthakovJS5wgTFY6kuXv8riRT9oaZFRBtnd6QnWSA54EiuoTiX7TheaBmPuMEES83JNF1",
  "key4": "2w35NmM4JRjwDU5huKC52LmhSQqnFeEX2MPCEjKFdotyUyv2txheGxAgJVAaVRTBCL33NXcZo5s83T91Ee5MaQNW",
  "key5": "4uNB5hYPtfvP58wDPpCgDcDrat2gTiSCUWyus1dhSd6rUZcXN2dr2pndDmoP7eA7T6CYH7JXedgvexZT1edi9mtF",
  "key6": "wMFFop2AQkh1SYcsFhZaJ2LyDK5h5T6BWMnqTARP9rRJsadiJFnJUFn7TrGtCZ8i11tkbRep8k4Bf8KA7AD1Kep",
  "key7": "rbfUEURbvJRiDNRf8B4yRHBYyM932vU1vFWK59EDunMawk4TqfCEQkdEr9XEyz46HbHFZmjYFrsDSve3Dog7heq",
  "key8": "2npDCWXE7wCcLR81pYMUReDLBTVTHMSuDR2X7yh6j54vPexxgySmFtgHCz34dByUAVJU1Qf6LsmaQ4fZiFuLu99G",
  "key9": "2W7v5rSTdkDSfF1qQTQ3euoWrFwmHZNw5cQs42jPPT4dQeVmwovanihBrNeXx3JQuRkhuhq39PRp2BKhWVsboGQb",
  "key10": "2EfEnnNf5EkTxBPruerNhCegouRm1QZiGBNnLwMegPEVYiTYjEWaw1Qhw3u2YiSS8fJhjn5icUJXJSvUeRYBcrSP",
  "key11": "5jazix1xrBjZweV4KyLLnSWJjVCXh73ZhVd6uZApnqFNvDfonqTLy85wWoDuLT5nXCvKX5a8F2YZUX5ycuQp69ND",
  "key12": "3Qk4XxNRNikqLPqL3JLV4pgRHPUmydwJWYDpZj77wmAuvmaeqvBmz5DYU2nWhZKxa9FjsDBfwfe8a6TRYqsv2Vsb",
  "key13": "2RpCUJ3Nrkhi7opW8p7cvSCaeXRHww9f9TAUCzpHVtcubufore9oi3h9fv2Sbb7inyzXfip9gij3hRydoLd7RHSc",
  "key14": "37pT7Zp4sVkVHLQ55Xghsx4Fchdpoaw9TiBD4V2cftPcAZFbccx59UYx1EcLyyZVDBHtiv21kPVvyM6GrCEQV2ji",
  "key15": "yc2m1jhEp3LFu1Py3duJCWR4gc9NEFazkNZ7P6DnwkWphoJhDFXLye3GENX2iDgMcuUPiLiMD4yGy11sC9Li6JC",
  "key16": "2ARQCufHuKxRa8mNgaL5ijq1M6DNEPucVKVKjCL32v9Ric3cY5frYzHfTUYZ6G9h3eQ6fpg8EkkXqSUArq693APg",
  "key17": "26oeRt61VtcaEqoKsgoMEjk5x2XwzWWobo58STstHqY4zNJFoYobaKqiUaVoCgXGdj9xyAV6GVmicAAfe6n7BbKe",
  "key18": "5MTgPozgQx6NCFYKkShCgMC2vjhPDKJ5oL5QWG5A1ALJt6fMnUt9wRoaEvuqc7AuZGF26f8E7V8jRBAXnH7fwZcb",
  "key19": "48bDdXAHYD2ebGBRcGTCVxix2WmCYT3EWeXdJY3p3BVfHCCqgWtF349HhF49uiCrTWR9yiF9EmGafoFDiqrqdqev",
  "key20": "xtpBG5uEcrb6ACSXLZoCvB8C7dRv7fMdf1ouFeyTgGoM16YALtrxVcaroiKZBaCVZJZoaCm9e4dtdpkisYXz6mZ",
  "key21": "zVvENLj9N3KXc14DdUECJ6agTontne1MAsj99oga6s6tVosk2pJLnP4dE3YZzkiXLPgfHnDe66jycXMAjMstdWE",
  "key22": "cYRnDR4vk3AT4mc1Wo7Kx3h7g5NVouuEBfcRG3QXNMJijKpn79syuEg5EKCLuzJKKsKo8UkCDrtFktBQnf4Pkck",
  "key23": "435E5T42eUbRQ91FMZFeiiFKrxfBDaQe41kyV7gTFPxKn1mdZfAqLNbVyRjGpy2CuxL9FUJyTZ6ntyNXMknDhad9",
  "key24": "4cA1MfnQeap91YMJ2Xm2inqrjVx8NKoe9sYe9UZoBrKR3UzFXmhuFyzLZVd2SnMj3i7UrdunWghEc19YeHFaVZfW",
  "key25": "4hcPus62zb8CcALpFeccpRmqygvmjG5oyG6PvBjL6djJ5cVpRbhQkuuTLbWwfmXEqr9KzziEmfvDMumbWdqTJyoA",
  "key26": "2KP34NKsrtne6GrrBJvBQpegEmFCG7JL8tyfuR8BrPbahNgCXxscJNmguET1kpqAfLZ8ddB42SP39VbeHBCz4UAT",
  "key27": "yRS7KRSDWDpRrRB9RCJjfEsp2GSt8oDUhYwmFNmTfidqQH96j226bckeqi8AR8xmKyUQB7gEWu2Zbj6qHAsz16m",
  "key28": "rNGd6teW3YjQ7xBm4sNSgjPxywbe9ixfS6SaNBW8tKfe9ZRCSdAMbqiocCpmyapCcpgmMoyDeaVEh382M5EeK69"
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
