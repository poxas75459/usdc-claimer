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
    "B4iWVW3gQRderc6CKrvDXCfeskifnhvMbGnqD4gu55uUvoqFn7YLimhdbtZvwLZtctZ4E8DxhAv8aAVvYbdNGHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJKZ3XbmtN6x6aJP9ucPu7FTRMdMXv7s3PQRPmnr1e9eaGd1nLExNRSAnZ4MGZiZTopkkXQZyUeigtPdU7SSuQW",
  "key1": "37A1z2idU2oE3BCMQGmiepJKxWJJ1S79UNvXDDSip8LawiQiiaKoGdg45otEPgH7yLDhzZtmevnBHY48P3b5orYK",
  "key2": "za8FgcdZf1iG4gZ3ncUE679zHAkQha4XcY6hqf4me52PbaY8jAV7Rg6Xcdmn9cbp23cEbowPdgAGDubpbMojhJ6",
  "key3": "3JWaoFTF3rmFcSJwt1HX8R68ENFB43AWSSWhLUn3G6rNqM64jLNKsYRRPSiyduauPCNnS7roHwWvtWbYKtZn9aHR",
  "key4": "3j7PP65ubGUcgP6jhpFZkMrLRZoFDSeQej9zYyM93RgssaR8z2QxsmUurf6mMuPwdgwgjKP6FajB5hTRoBpfaiiN",
  "key5": "33C9Y3GKMdUe6rxzDGHYkkz4mztMn48o8iJjZ16rhoyPg2gipF52dTrM6NMjjfjz4RL9Ht5r4eNsK97bLuwKNFwx",
  "key6": "27c9nE3JJzHiGEZEHAdcxnJNDZhgRN8zDGYYeMpi5gCKo5UqEFq3xfn3JNLad9DZPxeBPRnXioC7mX1xcdWVFTWZ",
  "key7": "pAoCctrKbcfDsQPWqngBTySsCBS4ezYdzS74EWCHv2zjV8FsocnyymEkqkfiDtjyxLmQ6gdyHB15ErakBNvbAJo",
  "key8": "5HN1WC7qGBwg9nGvsFvhJZLqtZjiaTY4NCj3Y78EJT1LuH8UhaGSnuKz3HChJwCgYNzd9Rq7zDohQmHtk5sd9cxb",
  "key9": "Vqy8wW6QggBHy7WXCRG6kkuyofm37W85TvWVsaFdwoyTrDMFksXEWKBWi9waeuEGV9Tu67zEKCwxjJQ9iCTcWxn",
  "key10": "2cyQNYYW3cpzVtV9xhjcv4tXwnSmZJeZUfp3MnErrTU3YzxwrQT1xQXGasC6p6fodDhwyj145v5NTYaUSLPe7KCW",
  "key11": "2Ly32TnPF9eeFzMRi4EWs1cW3AVCojjHjcHqvSUCKJZaQTPH4gTdrFPdVFMvzWq8J83XoRbewCc3Ztu38fBSmsUz",
  "key12": "4214rtVibDcWvm6wLtRifsG4zBSdoh5ryZADrbHzGdqzw5vbwTFkv4uss7C9iiC8YQJGcBZJ49g5UfDevkevNnq",
  "key13": "5Li7YFTSej6H4Ra7TVaZhoPBSf3keCc4Q9FZUW8tn4Cjy9hFmjn9zCUkrSPHndaJExjcJuQJBUAZoQ56ahDFbryr",
  "key14": "5yrdYwxHrNZRYcJEkcbUEg2auZAGZrP7drDiJNHkwbk2msS5WVJ7Dq95NFpxWZkhiLF9ThvBqQoJbrZqNESZik6x",
  "key15": "25fLei9uvMdZHMTTqeeJkwsYkVEVio7csUfMS446N2iTZr32ZTDu19s4wLZZWgth2X99pG4WQrD8KQxtn3wgtChF",
  "key16": "4ciJxFzZK6HbGyrk5KycTtSpf5QDTJTz9rfFSdt2jNdejwkTWuvtBeYhyXBY1Fv5gse6w6n369dP44jNXExgZ1mz",
  "key17": "4jXaotsMLVnBR2aCuFVjy4ALndCCA2Qn6F2Mj853huxiwpf9VTou5LQJfNYf3sex3tpGRFoTJzEurtyRtspGYiya",
  "key18": "5QDdPnfLt33j7o7cf9CwHaGLYdAZz7bmT6sf1BjcRyJWbNEJZLNSXoUjbpW5aZQ2cUJyLKSyAvWjtWXs3HPBdURC",
  "key19": "4j2Z886p7NAVXdNWnsZmSm7fagyW5H6zyZRRwegVPhB6AgpvQgB99PrPdQtNpXoSWNLJEbsYdRRdXFmYhFxGSYDe",
  "key20": "5HvYeD5tdnGfUepjnSuMoyCbhde7z9KgXmUaRWfJduyKjnybXoMSpFonNUeESHULfES63kgjUJ5bdE7b64xX4HiD",
  "key21": "31d1QQ4oW6Dj7QT8wTezLV8iNAtMQHPL89AhsGYsBLQmSg5Zdy3wqz7CgqeoVdYcwg1MzjzdtebWaihQhz58unP4",
  "key22": "5YXsNNJKzqihHavGyg4ZxWZUe3KRrhFREyabeTjabcKVWcEiXjUDM848w8szgys51B3WSQRp6Tr5khqdPwQy9xnt",
  "key23": "2jj6Y63YJhYk6QWzzMNs5ZvGWrk6JfuJEcFLg9sj1P7RbwPksBiCGit9RxLSfASZHJ2EYtLVcVhUzpEzubJqowp7",
  "key24": "67FmLet9EuQWhYFdpJDJSMC8YbzMGZKyhWo83byJR5VejreSeDJKGs3zyPvp2GQoSLmajRHhoyG8tsFybyG2JU3K",
  "key25": "3Cyqe3QNNyVXCCDe8QrQ4bYFZ6ZFLvARRM7n79Hhpa3utymE4dZSFowd6G3r7WaTqB8DYb8RtVk29bfh62HdVuW7",
  "key26": "ZeGtP2B1nBqWJiuRRuPzk5fnueUvnHomzWUnWei9pwejLwvx6tszLAJf4QX5vE4tQCpbaDS6E4R56MB5VbscFB6",
  "key27": "5wFcDaK4vjQMYt33q9sE38umhkci59gAXYgjNyPo3XygGL5TVVGrFkDUuTv76VheKFKt5JxLNyrsm3hNsKWj8fdA",
  "key28": "4nVcq4ggcSwtw4tWVS1awi7h49dowdMS2cKXovYJm7aBMJ94yUGseaMMngBFCdDvNA7GzQ5UDFo6aWquWYY63dKS",
  "key29": "2qEExyCsKAvZRriBSUjG8cHA43kAuTC7tEnEmtdWbshQ46Pw3vArCNnYGdoPz4sT412PXdxvKpVgvGGApsXaZaby",
  "key30": "3Th1kCF2WBMXrVgTKCCLYWZXQjRBsVyQkPSVUJs1AoVCdS9QsyA2BDue3UxcABnVajVbroLHudjbwBRnnFGSXTv"
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
