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
    "4WCbJCrR71mRerKs6QxsdbZ4rdcMKLbA3nWciR8danJrK47nFCZ5Aw4Vfb4Cx4MihEntJmWShkS9BJwBguDM5MbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Yo1qevbMc69gJy3xoZtJp4HhBvsVLf3SF7a3gXL8zXP5Vqrt5nEqr2tiUkeiqjKeNbqF9bBX7WUNJJHTdDYfEo",
  "key1": "4uJzzadKJgt5itmJMi5Jhj3HuqqPgzXayjcZQrBxmG4CZWenDJuaCMkjuvyGzoeTJs2YHvLGz7SB3F9hVoqZgX6C",
  "key2": "2ArkG5VEwi4LiyMf7NErvGfEwz7zKKwsWKBcwrfUxHZUUBBdd9XVk1EMAd2sQVeYC8ze66ad5Nz7Ef7yAmAFGkjW",
  "key3": "UppYGppmue7nvBUdQwGiVvKgQJVnTaNYk9VqzHwMz29eKVsuLEQ9TFJidCzAjgCtRHUaWwf2bc6sNk23jApho9H",
  "key4": "3dDoPDN6sfcNF2ATEyGRMHtms7rzQdvT2NVCUbWxArnxgMNnb2kMb9i2gFaZheSPXqJht55XAdbXQPzYigaUoiS4",
  "key5": "VtdGrhacobEytfDHX1YANRTCaMtf5k7XzqqYoetQdH1KLmwSxHZ6YVedE7axBwXm2f1nBveJVJuEzNG5jo3DZKs",
  "key6": "2b9wQfxddyHDxC2KokVVJTGkzZFvrmuEeXGesuHE3xgFw6pfHN6kSKQFVRf3TA7PyobonEteQDhViPUyxhvU4FKj",
  "key7": "2EM2oUFqwcmmB9LAhx1UsJ2LBApr3njXuqXw118MSaHn9Q4TsGbLb6N5LNtJLCC8h7x9K3xogVTAvyKLmuHhD5wA",
  "key8": "3oFjtn5s529Rz7bPYi3RMrW3UZefQeBSkcBaWPKHf91DnH3n2ST7XaHGQeMM1jAT3hKbAyKcDukzjmq2g6sw9pYK",
  "key9": "4oL5rEDwbJLkw8on6G7PBHfoKR5TQ52e3w7Skzsf7k5hRbVN3S2i1BBmdM3zCzCdnv6vyUYBrznb6Dg1jDUjphJt",
  "key10": "aeGN15D6c2sFgCDoN4z3yJVPSRof6SRehV3Da9yXmVJBCsLvn2TY16uSasG8nreyEvF2pAnHgkq2t3HW7ET49sg",
  "key11": "B69ncPwU87QEgRQDb4MRov3g8Xd6zQPXffnWbDCwhyntRg5zVDkcoCmNAEbtfsHZGc2jzAb1xQWnqGuuQNitViL",
  "key12": "4zKD2mo4gJh7yJbwdTYBhkGJ3Q5mhVLppNx1h1XVbxuv87SomcjYsbjA2fxGZ1ZTbwDDFnBM28bGmoG1P8XnyqyG",
  "key13": "33AHw3wxsGfbFDjT9HkQU3GoCLDbmzw4FeBkZgjQYjG98k6wUx1KtVmzLPJwnr5yhn3rsgM4bQWELEjNWRfsUMT9",
  "key14": "2puELTXFuFhjt15PJJP2wdS8y37dhnXiZzoXcwH6wnqjPgXjjPgBLjrHrKkAPiTCWV5sHrCqckxVjiKbh32FtKgv",
  "key15": "63t1zwbZdJaKU3SN8wVDQzQrLRSnbiVPNDMYfH9W6kmspVy88oYkdcfbB46TRaYuqiBsvdzDMudqKSUeqMYnCFFG",
  "key16": "3q7gpg5c2UoiRDqLEHocKYPNRf4rs2qDa1vF52YmBT3uxfiU9yRaAefwnCNKakVNsCt4MaESWvJUNrNciNzBbbqK",
  "key17": "3YpwSxwfpsbApBmX9Eemth7EJtZf1QsFrwNbcvadEySRwp1J6QjneLc2ZpzJDWwDrfQBxGDdKKUxTeZFNyuwCc5K",
  "key18": "4j6oZnBCXhzFdoQCEJCMVddWmnyRsCouLNEQMMbhjMnXMiRaNKTYXevH2HRZfjkrBm4n2McU9Y8FTDr5GdfmQY35",
  "key19": "5oH3muqq1fccfyJfScb5QVfKRCLLVA4QSys8uJi5n2XjZUDkyKGG2HQEPArWHSjTiST4KVSjakiCcW9t9hwoZmHH",
  "key20": "58ywXpGL2FyfqVaz8NtVQxcE7oXQCyy6R389a7TsmzKQkBuWTEWANkEASSLFW9d8G3UJBM5DnbUHAqwGHxNPZWhp",
  "key21": "2UvSVNnXYJztmEgqjxgVVMWtHEZxJeKwLTeQn5GmJgUD7M8TbRraVBHxeSYdLBmoedKVspAjHf1wi3xjFwRVLPo2",
  "key22": "62Mho9PunfUWaWerrw3ASkx9UzuezVmApmo5vwHpnMDYQy6jxWt6cKsQ4Z3PKc4FELSuSgFFuYn76XEGLUngNBm8",
  "key23": "34CDy8P7RV89WhinjciAyWGjEiEnAKeDHr8cxUQXbwhTpjGsA7gdJHQdYYMTxUHasft8K9EHuiiiyww3cwAYHZR1",
  "key24": "2uCyMT9XRbTx39ubGR7ScrHFwBbA4soCXKrYXLEatSWhDiEUDqqPCZeL7RETRfffFK5Ntm8TRHnoc9569oLPwA4F",
  "key25": "5J69Eqs4UJtS1tyamjPTENnF43jP6QyDXqVrNuEzXWtKF1zPcBnj1TJWpas13C9E7KU6jzjbeRxrCXRynpGav3Fd",
  "key26": "5s5Adef2JWjYEdEmGRKk9aXqysS2higCPCvY6WJUDXCCDo14VHvKz2RaYQdPxQnRo3VcfYaFfmY8fHTEfj2tSPxH",
  "key27": "5oFmdnr5HMhW2uP8x3oWkZksuyJmhNteoQWEdEvo6xGm4RvgU3oqTsyQTYyvtjBtg1r95d23jHJ3ZkdrGbqYKcaa",
  "key28": "CBrp7J97FcQWmcWvTAUCy1YzeGUDPBtYeWWH8DqVXQw9RFtENZcyyg2XgrGmmij9TajD5Bosy7jJcjgHdeVQBCN",
  "key29": "SyFjBuD5km1cQKgFo2KYLB2E1M2bK9uRcpz8iDaebf9Mh6YyGq2gH2Ey1d94uTGN46BefKAuVKbAhBLnLC2zVUY",
  "key30": "5mwathS1GzHM5V6woWDKM3JmXEGZ9dDmAcWAibrYz9R3XGsajdcQZqVNgC8mFKfA8YCFdVorgExjQHijHALPmntJ",
  "key31": "4JPHeN3EUHt5EkiNn2RMoV1UqSxEwxQb57zmzUwdykXq6Z1U9zvrQaZqtxL9WH3E9ruozkm94BPd8cjmnvzEVoTc",
  "key32": "WZVsTr3Pr3h3RKeSpvhpnTuHQtr3AryRcc5JrJn3ytF1zwjXhvYdtRYQbYg95QUgc1ykATs5pRm9cuB3QwuyB4w",
  "key33": "3x64MLzFou3kHjJ7g2FXNe2tCGqSYeWz6foem1gy16nkqBAeEKgzjyaas8y8ePwRbPTrWFWZXseNqkM4QaYe1vPP",
  "key34": "2AMfmPTmFkeni7nbazqP3qACpY83oSPJR7JAmLco2tXiAaqZNiDUf9m7yGBaKtb8di3V4AshF8J4sT62md8GnW1R",
  "key35": "5KbmsT7RMsy6VXyHmEqmcoSXGZPrVCx5zAiP2QWVgaobE4SNKVBcJQcHN1axKD3NnEzq8FaDKXbXV3XFgJEPRCwe",
  "key36": "2w1PxeMJvE3h7uZaNLBZbkq6qhxA1hhKjAKLzwUdgxg5nTkL6g3Fsk1UfkmWik6ToCHDh4tt16Ka5mk1eBuVVio4",
  "key37": "2K4krDp7HbUYEiiQiEKRzNyiRi4zbM6kyXWeWCmL1e2aZuDHy8ax2eiVfTJESbY6pUiLqAQW2XmqmnmhADMTVaWn",
  "key38": "3dUR4CtrTPMPbheU4PseBJBhuWpNnjo4qggSSJaKEuvA8gSCSK7ZdPHjwPispnxEMm65JRkQ52tvDA1nJJ6Nah2K",
  "key39": "4nUDfR5XV4vMykY8ewDFz68Ay9SgHUp7MYFJGhCkxJMxqwtqM4Ts8m2hYX7fvi4x4r8cSdZGBT6kHwYRUAs3pGZU",
  "key40": "5rRgD322EhYD3vQmn4Dod4TNPAZax1Wb4YJGMp8TdwXKrHATLoxmb8CbYLyygL38FEKorARHBvoNZnKTMM6qh9FX",
  "key41": "8dD2U9Ed5cdkFZ2qacqQTwu39gqDXFUYgYHkqfq4s12Vxecd5hfXfuvYDTkydPEzi3waX2ixqwW1FhkiGFNmXAQ"
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
