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
    "5tBish22MqXD4ByjaTdpmEzPgRctQ437LJnJdE1eL65CTjwp4YY4kwTYtxNhUwqXWhgaBPYb26ZB3cKJwFAV3x3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axrRvAx7KmFUVXsPHrs7YiNyhBsA2k8PhaEgXo1bzdPjnY9X93xKpCqkdPSryXZgUpaFN2skhSEGhYzZtKHUJwL",
  "key1": "5jbaF4M2wK8KnaCNaNn5fWz8KQq6mNcdapF6NnddDyBkCs2xaHqxha3fjrakHakAfAPekcAhRuiJFRaMiWMQAczw",
  "key2": "4wwgkAJMRtDgotAAKdzDQY5cD5sNGpLoYhPu5wVPj2XffxhMzngMWyZ5BwNuN6SexGzYycCveA1kyQwrJkfiVGf9",
  "key3": "4j8UkJttinMQjao65xpYkTEvGbgw8sYa7tYSExtVzr9mwDKgtNPXsFB64RPmiKdWmV2RWsoYj9MWcLmjq6JAD2na",
  "key4": "wrUKY5dcJ3ipJv6aExVNqCaVctejvqX6BffJat8jJJNGs8tszuotti6fFtaXioZbTPEZ1WCSNQ4kMRz2SUv2AnE",
  "key5": "4pe3rv9sEJoiSCXZAb4TEbk8zr4ZFaacpGYkg45fGDD1yDEP1cDJ5dFdaXMGpU4iecgCHvKxwzkX2Do6ucUYtx1t",
  "key6": "4W6vbK1sZncvTory456mB8ycq4HxmYjihoWDuEWrwnJ5YM5gBhAgPBRAqnC5tomghQtNafwo9YKZSa9NrUy7GHzt",
  "key7": "2EMKEPDm46yC3tofqotbbJtQpEWBq3LXd5PrRBQa2EyKsCjgoztgtTJHVuL3LXM9c5Z8G4CJzKGCFdQFkCJ316Gf",
  "key8": "43jk7qGFTVVNTvb1eT5SRcY57wmUk8vGm1APF6F1bj25TXTkdetFNvHQrAsxUdhMwG2BXQ25dWmNoPBXjxehMcuw",
  "key9": "3QRHUpXPQzD6tMiyYbego29deh3pY27A6zbW3VdTLHqEC6P6uWv5RhDnBvY6Lc4Rc67iUJFmJWw1xX3rf3SgZEBZ",
  "key10": "5Yy9dMXjYutKwTuqhGxPKe9ULuL6Eo1AbhKzACMEfVwKxbXozxrqLBvzxGwpDmYCM7aZfzN5rcg5D9hCE7eXXUTL",
  "key11": "2Zh22GjmSZ19NPR1MnBiRh9S1V6Vra3vSjidVWC6Rr3UVY5NdfHzywF1jiDybgHQBbvKShXFgZ5qfeDmWAnNHsQ8",
  "key12": "3n7NE8YBdgbRi8rmGP3cDZSt5rEYP3u6C2B7m4gmZhHoiRNToF7UUUdMY9u2jwtYoKCiN79y4BfJwyLsjTzHhiZc",
  "key13": "2SSEHnAskQ618EBS4VPfpkRCxcqdkgGWB7K1sxCVseeds8UidDZAsieetJ1WjjvFhWvfaiCfzDiVrk55Sw4hN8yT",
  "key14": "3dLEt9jgSm1x3C7wxM49fU3oUi58P8Z5iewZHY2stbomDcBQSbehKaQrNENwa1edqKknbYsKwpUoHraKMp7ay6fT",
  "key15": "5BE7WEiLnjjkiqxWs7PxHqKp1abc6gtdtJVLs29kt3iaTLhjw5dkixhYvAKkrBsq2gPEDj3wsC2bSS91QVPUXsfo",
  "key16": "3WLWEqkuyLSboLMWRKrcEU4CYp2fPdJpcu5qbG6L3WADuekqZcTWWcPpjb4tReqGpRySKx2eCSc1PJp1bxijGvzX",
  "key17": "NVgmaT92dw12DUJUTKQoMdUrtHwP7WFrYP7NL9E9pg1ogsCVq5ahJDoW68mS5cDMqBQJVqeF8rxJXNrCx6kzTJy",
  "key18": "35KbhZfsXwXCameBx9Mp6kEzdceA3iv4LeRHYhp3PmGJHcSkL4AScgpJhmZRUnBHvGMhPJgXS6Wc2SXbdps7XaEr",
  "key19": "4r9rZVFe5Fnbi62Y2uBRbE3q5naBa3F6LiYuLFAm8AxraMVHQvNDqJWvwoaZq6xVqaFX7ufkzffqwdpscmu2fyUD",
  "key20": "4Ehciem1rmYZmv1Mb9pt2KquPc6evkEcJL3PdXZxcvpBgB4Tju88X4QTsd5yAX3469mkdbwH1WKvwNaDFnud4jLF",
  "key21": "Kp2izQ3LM7v8tWa9KnNfxb3CzUajHe97FiUknijyGxkHPfMtJH66Mm1BdB1CoDSYNZBwpSHcPDKGpTiVMkHu552",
  "key22": "5MvXmjun3evWtptPqrr8a5y4vVJYq26n2MTLJstTHT5FTsrKXiMCa2kVoi6LJrXHG9kL2saC61LCDb79ZJBHRRYW",
  "key23": "5M2AMXAaki2AhsW48R8XE26Npf4M8f99yszpcFQwu1edqukgT8pUAjNspic2vsMxraWJQxjfUZGT8znH7H9RUxib",
  "key24": "h3EZirUJ2pJd18v9d9GmTDty2551BFoLTVp45fSwuDQwazueUQ5krzC6XRq8mSfw56ZhB2N2pUHXYbZphonPB9Z",
  "key25": "2qrAkvZ2dUMMtaVyyDkBfrEmBAQj9Ls5sNUEJjYSp55fSpntkRMp8Wxw87b8omDSNeMix49tm3vUmqRZV8EyQFDd",
  "key26": "4Zz2Fy6j9Q1wAKHkXVjMi4TSQPxtNmVAqL4jGagq3emN87RiNxbAFvpuH3qWPV3ctcMsBVpCVH8XaqxUXPyArsvf"
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
