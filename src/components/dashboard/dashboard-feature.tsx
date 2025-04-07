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
    "38zXpbmEgKYnMdxZYPLS4TNvEhyKgZbUkYjTH2pTxmpvRLiYSppbrrsVyHT2Qts4VhFynWKh7SDJo1jvEZUauR4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzjJEtMpu728d3RHfzWVAWL9ahMzpc3p75M2bpGwkiSBM7aPhCn6uraHestF3uAXC5a9L3PpubXiPMLxDDXRZTU",
  "key1": "u2s7Kdint5td3jEfaihUfrTuJdQwWdg1vtZvTVdUMZ4iU7UpiASFygmv9LTi8ewv7JsL1hNjtxqAwYdw6G8C9qh",
  "key2": "54eGC8tTXbbPSv8tG5uPTqX4KqG3NH37hn1mBSQjYXDjeQaQyrfpjLXUyRtZGWRzv56CQcvneVaThCuCFC5xkFhr",
  "key3": "ek7iX6Y3CuNkUCSSPgdFdUKKnnByK7Eas21QsT6XzmnC72XM8LXC5c42HbuC3Rx7hCCMVRU8dDHrip4e2qR4oML",
  "key4": "NYLPeNaAtR5zQip99WrC4zRiF3gijwkdY54vzqeMFuuS1gzX7QdA4ahrJ7bnEsLS9puT9F4sCb5Urhw74euZQHC",
  "key5": "5yotMMwHJWQek3GQWxY9ZkfLpNui6ncEn85cb8rNBWtrFRom8euLRZEssBzHZqdTtLP98gZGALEfD6Pgkr7j8h3U",
  "key6": "w2eL1p1Phq8VGwZxL913MrH4hSuPDNch8PXYYYpq8UcbtANnE14RcMkyq1PSYasxvRXnwrDb7NXCbWZENCMGWZ8",
  "key7": "3EPfrYHbiZeSkXjH9McQesj5G193257mTwbCd2USomfGy6mF4f7kCzwXs1HmS5Y1wuhVaZd4xvMWa6RUjyAY1Cxd",
  "key8": "3DikP4uB9JZBuiUqGM3zK1tkKtCsrtfUpVhKTtM16pTdiB4MDopCTwUAjt71zxr5sXtxtpB2Sq6Wd7SVuiQrfkCw",
  "key9": "3NV7L5ScF7f9q3VzNVEZmZGySTivp164CTW6iEZq2fCxuHvpLueUt4D8qmLmZwK6mYZPPAQV2PGfPmkRQXMEdLU7",
  "key10": "657HwGHrkqP2G7WStfZky3N2u9dz2bL6Fh5etktSFbatVh14u8iEUDbQSD6BUCrnhF9ztBrdphYQtuDXa6rdpQBh",
  "key11": "3upiQ45GwEbmamk847EW3mE83pDkGCwxphMm5zBPnjhAY651GxrqfMDbeY9FTYmRoMhGcsx6mDuKZNrsyiGHVJ2E",
  "key12": "KszEiH7htnCmiK7yxXRSMXeXpooUcF1Bn9o74u1zABDcoWtjy6SzMn95EYgBaQGhkUn9PkmHKE18MZDaANaXs9t",
  "key13": "5aJUQRx8vEAVvZJuXCjVMWgXKdKyMmEt6EmFswhp4HcKMAHC7KwMxy8U6W2Nrq38uecVpv2NDp2eiLraBJCtYDb9",
  "key14": "2Scm2EcYzRvdMuJpkJnMP2Z1YBzsJgds9o7ZzZZQQbvVXGYnQfWf7MBjCer7RE5qJ6FGJDnXUQgLH6ZfZRRGAeib",
  "key15": "ms5b8fTwsfE15Fft8s6syRWQS2MDSewhtQFSKrZST7V7XPJ1HZ5Bpy7HRTj3cPfwmQ2ey2k2p7yANBMPWRkmdTs",
  "key16": "a2scVDXywudJfbNCQSqseZawYcCMjfQKtZWEvuxkW2ivsNqgz1TLAawhMnz8gQTung5XqynuFQ8QbEuzNkEZRSJ",
  "key17": "2XNRKBJwf8yqxfWqqaKJMD4QsibHsJvRMi7r5BDGJYjonWuxixBTnrMSrJ1PjKPBJvGEN9qzFjA37Ma7FdgpsiNL",
  "key18": "4MBtBgnc31iEHybJeRrwHCwCFVCGDahP3XcAQ8rqwxnoee3HAbTCgbRyfaD9hUUvU3HGnRwJTiCpMWyiz9MCDNZR",
  "key19": "4gMcVtceRtPEkqMakqBokwDJm8Cao9Sgrgi6iCcY8tnQZYESNxxczmHmCmdtPxpN9VJ4JWYrTNb7gNWJtJ4wHz8u",
  "key20": "3AeQgxXku3mvR97yfUhmUmu71zyvQudTJYCjNemgdZZNsErFBPsSY36ydVpEwVycBKEe1snCAjr3bZAitwguRJpo",
  "key21": "34DePJbVnE77Z2t3TMGYGKXW2cP7SHUeLhDJDaxM6gK2zRzoAphYDy9VWi78kLnKPQ9DbXiKWARKMns9H3iA4jFy",
  "key22": "24K2smr2VRrQGy1CUf26nyDRjuf37tSiXv2qpfnMcgQ91jKhTenG2AHnL5CyNu1wakeNdp9tC9c4yaozrCKFqN35",
  "key23": "2gVeTkxceXaHrTNQcJTqGX63euAyrx283X2zYvPSFZGn5ez7Sazg1dfXzXzusiD4GTpStr3zseBmmP46FCyTFbjS",
  "key24": "abwaF48HJVHRJVxPpNXSf7p9UroUFLhpCNeHsxrVS3Wtjp52xgyhab1pcAWMq2vm1L4JmzAFxo3GBH9vKaZi71x",
  "key25": "4eK49G6MrhfGo2EZKxCnSjuwm2xGVHQyxdMmPXg5qfsswer1TZ7j9q4rCwrxXDVfvrFEX54dU2RgHvr49JSB4XbL",
  "key26": "3DDdozBpwAT4jTTNWyYEc3Ysr2A8qtJU7EwuxCS2YM6Z3Fb66hZmBzG8DANt619zjtbFsHEzd1UpoA345YPCXKDq",
  "key27": "3ugyf95pS3xqtrYBcwpZzgdcnb54Ut7mL7rwmRyuAaFrNoMx38VAJ2A6fpuxY4AG6ydxwiNt2DLs5SQ5kRiXk2kM",
  "key28": "Ndkr8a36HpPXRboKjWKHEKpr63M6bmwC9p1fwbYcoDkVZPjLLWgWSQ3j2zWeMQSyhPJ9xqaM8huLGCBXaDNJsJh",
  "key29": "27n6ZH6fYBGY2GVhsUGcms2fFspFGCdTUwqq5JmQqJ4TVNEAgTfJLDhjkNqUw8Kotr1QYdE32mAecHXJQQB5EzJD",
  "key30": "EgEH5Kvhd1spEqZVpyBTEzF3eX8aMhC3YMYCCaM9zebCxpGuQQTSYogUa3thM2iNwvwLBp4bmCuBwYwNCpfbZND",
  "key31": "3dMypnsAhg9AiYRFfC6MngyzeUe4SdFPckbd9ai32YP2rAN81m5JgnFCGN4h8RPxeZPrT4MURTvbMJdum9edKgs6",
  "key32": "2J1zmVSPXfGGVD7G1D979UYw7F3qLLLWLN49e1MhcNwTTTEUX6trLyiSo7BC5PAwg32MUYBpBhpY9rosZqqQfRof",
  "key33": "2at8YxMqqpJh2aDL2n7yF7ShZ8JdDq5rsn2V5fmyN2Gbjh1mf6hFL3BMiimKDnDnvEsDmfXuLtcGQWSD8tGKJbou",
  "key34": "NdmuHM3jBvJ7R5z3iz3k7Eh6vL2J3FJhaETEEy6KcMhrNbhHw7xtkUhZTTsPwLFGY4JGzRumNFoMLjHKCdHBsP2"
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
