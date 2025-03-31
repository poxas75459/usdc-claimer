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
    "4W96iLhqSQ23Re9kSfhJ8d9NbGBUmZZGeyvMQPkvo8uMW2q3xTQfB5sgSjCVgQEygH77Vqw28vdjvY9FZpELtSRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BGKxwuAvKzkQwNAw38Dp28sU9nvCMht6ubKXRYZmzYBJNfWBqnxd3w5NhU6saoeuNwvyJM2HRyqS3WhqJQV2ikN",
  "key1": "Qn9abjqgtbQYrt28Tfs46GRHESNn3EER8ijQFbwiCj7utMzMUxpUuieh8BsYmBDvwxNEJAwjLGMpwSNGVWK5GRK",
  "key2": "4GNyTgiGb692mQfQCzfrUKqcBf9EBGGX5hMBMuTFMVotULoNYpchCuWBeG3HTdRcWHsFqpRq2eoMZQVBNP3Dw7BS",
  "key3": "3c3sUzRwvseeHLRh64TgDrUuVddPsAfjArKvGc52h1BzNnqbL6HRY2ifEAHCe8S9uZNraGDDeMvLGzVeZ1ZnDxh9",
  "key4": "3qHAbXTSkMLwG7ZNMH5J8vjvZTSvvVj3ijzDaPUtd4ryRcra4r7qumgWg1dttgrsQ13Vwn7KNTofpwa9ceUnWwoX",
  "key5": "4vDJ5UbRtSdRLoAHsh54QDEERFfDWfiTXEfhUeMTZvwLNFfcksDS4TnDNb5ozsu8gY1cKj5nzunaTkXuhhctQDkp",
  "key6": "4V4GNbRZAsRZ73gyCg3Rb945c1faLhC4L8vxy8Uha5H79ZXGTSYKGbi9A654UznNFfhL8wzR4PHu7ECnEjorY3BF",
  "key7": "5HYdi3ps36maXoc7PfWcWW24Nyo1SSPTcgL5Asc7pLKKxiMFm4eNU4igp3UsZaBKbDFpPmnfqGm34p1hRuioKohJ",
  "key8": "3pbh2XbsKboeL1cWaw6yCBu27nAwRr7pnqRWVeLf5mwnZ4L24YWtmAqJzLahR8s5cpVdd3j5wBpdYq2XhvbP8pwk",
  "key9": "26rfyQWRqAkx6wPrDSfW788ZaM6TzzbowkMo6M9pUZYzM292K4q6E5h3Uq2JahJ3s9GCDEVxxwxo6VQ2kF4mPNbQ",
  "key10": "fjy5QhhZgbw3AX7Mt1iqEdYmBH85ttMg3BSzDkUfb8z1trQHDjiCipU87DXQVbwSX1EUTKu1m3cEzD1txpiowVj",
  "key11": "32m5B5itgqTMFeUTvV12XQgAMHhbESpa7onQwc9MsekRZvBypxMbKTRUPaTAaD54EWmTVf8nc3p3fBCsAX9W7NUQ",
  "key12": "GghMbivV4aM3dAK8zhKcNZdkTJazhqEtD9t1DbepFMRZj5yMGgcmgdv1BqiPJA6yq2jNEdh8vq7hJ8w8hiuFxba",
  "key13": "2c9twVCPTa5aVtoXANUZc1Lh11BJ7MtZ9aNhMn4eXvEVJBKBMxwJkYfG4Cg6Yxo2EMwU6rVz3fz9rfRH8WBUTJMU",
  "key14": "3wDE7eAd9N43LroEabnfpvvNNCEHo3VHPJX7BKS4SLCxUxLtuobxh1ovWLAiwbjwZhdZBfLgncS1h1GTpAjYHKnT",
  "key15": "2eFKtM9GSkEzswpJpskAabMUW4tL6y6o4438Ct9sKHyPSNWyWfhRf4tBxErjRsXodkRx9cEorSzqPQfhPdCLkUej",
  "key16": "59mU2AdBRSJ8QkguXMcXXHXrJEtdaS4Yh5TsEey1Cxk1Pb8UHaBqnM47LdMEWZwiVersruz2kwBA7b13HW3YwLJR",
  "key17": "2WJHL1YTzh9Xfz5AXroQib2PUMMs6hsK8VDsZxqrQfJcFT1FrMkRVUBQ1K6xg4WQYTYPZJoLq8dPgsgSwGACETmn",
  "key18": "4M9aadLeaATvEpX8esL8ronVF5t29Fwe8bLx2qrw6EVGkGe93iGja1Bm1pvNZtdxjHDC9chogJbuAAEfnUFwNgxT",
  "key19": "3r1v4v9PmP73X6Wxb1SGWhabATuX6ZeqER1nTYS2Hwx6U1W4rrpybEgAZmyfNLh3Dxt4WnLWdhjTJFyiKNErirHV",
  "key20": "4h1tQMs6tnCpyiiN3m13s6KunTkxfkPCAxTmLMqw8VfxZc7YNDHot2kLCHjzhYgMH7sSckBPimbmWFXcJdEaiYFL",
  "key21": "WTDEvS4ae4S7aG5qxMoy7PuAyBbjW3LLXuZSFxYPZ4S3JtwMiAneHFW8E5qr7EMD1jada4tEGv9GotszDxxVxGD",
  "key22": "GLjNk8NnLKRasHP3cFtvtJzWTskftnXXsgmjpZsUSBR2VGaLygsCBDteVGPfeMSQ5o712KpHgBKvCbmWZNhoZC4",
  "key23": "386RYmPhLCTtSXMTvzDSGDhPWmfAEbJUSkBoQm6HqZ2JMrH5X7hCA3oXvTQm49cupLsethaB7SFyWTYMr3HtXnLz",
  "key24": "4steGTAsF4PWMqzrc8sMhR9wmCSqM4RcCQtwAXa82jqndtfSxpxHrWj9mNkPs4ZswSBeKrw3dXcScj6VvtDtoiva",
  "key25": "2GrUBDg9PUCb3RPLvYLStQ4hzwmKp3tzTGQL17QheQchU1JdR1AVwKoii2rrbzEX8gRp4qCYBAqc3N1M1pym9J5q",
  "key26": "3yMw8WuVKVaEYL9LGotXjEv8vZ6HXcXa9jHridmqDsxQad8Z48w1eMH9boA6GW34vkYEvpRiGHJ6FpzwZGFZTMx8",
  "key27": "2M6yixHDzAMnYW2DihF5garM2pBrzE8J8SoN1nLKAcKLNXWC6ZgRmgW83frHiTwy5Z9GBTdMzoNp1U1jCoXpMCg",
  "key28": "aoib6usE6RFJjzEwn6QTiXDWHj3iVtediiqbTGyTJvR1AocnE45tTr7PntqxNyixDqD1463Yjmb4EbM3JHRxMXH",
  "key29": "pniRZ9AkRDMjGvzViJuB4bmWwMidJNntSGWuwGRU4aWuM951LKiRfHwWYrjSzUdNrQrbMAMwizkP9j7a2maXv1T",
  "key30": "66AbTNtFS7fT3SXgyuHjCjGtccyKxekCpFXRafYJ5wVwV8sU5MiWoQKx9KLTLBp6akmP3Wehy216d7YohCTyvz6a",
  "key31": "57jd5V5YXpGkXtpmZYNXBkTZQu9zaX9aiVGja1jsXSN7SvYC27dqqTHdXzMEF3aHdqDo13SxMN6duJ9iKJwuzNxt",
  "key32": "2vCL3fJzgE8R4rW3jta31QrH2bc4qLhjzYbXmJmNQGrLrurySq8mrZRVnFWt9oh5J1rXFYp3Jp6p4AKeG4MtTtuL",
  "key33": "5qBuFSXaxggZY8RfhFCJpxrKEaa2LZWYf36QndAZv1VDGyA99UiDdYcMtNibvJ4VRF4xtVmgrfvw5uwoa9TL8mv1",
  "key34": "EWu69kLZN6GvPEPZwmo2fcZfgvPuRAH3wMsgEi6YXqEy46PDtuGk854HTrz8Uav4k3ucF9sz14zXoXBs7xJgppL",
  "key35": "3X2XCVUdBZizmsDE7FzEPDTZhBcrugPYyp3X21FaBRVJ9GSpvY4eH67NgnMnsbTFQ9H3sMRpzf4EdA8ywFERQucC",
  "key36": "5XAdwuSZQKYgFcfJxJb1bko9MTU47wxYYhek85r9rCtMikEkmu3k8RcgGwxptN9CAaQZCy2dJevV4LTi1QDmK7a8",
  "key37": "5NVaXTFz89u1Ayyd1y5WHqnMzv7DvmD7mfVHhijnwVLGoFZeuCotyTEJsiXoq5XSjLYoF4mjwztimaupdAQAm2aH",
  "key38": "65GSThTdBN5vu2UDFoDT1qsZL3G7fTsayGgzRxqC88Hrfx2vF9VtAjD4h9vNuK3UZPirfj7P28pPxYvpBrNjs2a4",
  "key39": "2XU4Qw1DQCCN9nxwBma2VTqsd9JE69KkWy7iog4wQoEdyLuzdw5nxDMM9stgd8Np9q4dNAog1X5TTs9qpJTeKN7u",
  "key40": "3CRthvWfs5WeaxBNoH1rWhiPv6qZQXsp8gKydoutDWpb6bCwFNxL5dYyVuLpsVzLBLrz7ELNtzYe1RjVVv1NLqhM",
  "key41": "5vy1yS6t82FhUE9Qt4RzDyeoy7d14gc3Zp8KNyLs88piy1fnCh8NeeSgzz4jSyQuLYrkHTQgEQuGTWGvtMaiwKAh",
  "key42": "6FLvXGbhmMqBp7SduSGLdg85TjH8mNW8xqEgDkgzFArLCzpsq4R5HVTfQkmaJutWns5mLFH89SDQdLDUXBV2pDF",
  "key43": "kQZAAuazVYMgA6AQ9Bjr6pZBfiHUC8UA24PGYgU9aQZs3fC8wZqLRUCdZbdBXJ9QH5TDN1v3ioF4MFmhAhXnkxq",
  "key44": "3F1ToGgE2F6Uv1432jeTckowCiXw11Gum1h5QJs9tKJjVfkv82tKLSKN1oz2368KD1H3xWxRRpRzYmmBfeRmtaYt",
  "key45": "2fhM1r8XWoVWXzWb7yjjnGYbjrvkE8kYndqm653ReRfcQSh17ZD4g8Ypxn4FLgrEWYXs6Tord1aAnZWRadApNuTt",
  "key46": "5iE6JKGdiKkH8C89axRJzCrH1tQqYSP1HvU7oUnLcuWTg9iQcLDaBSkAB3h42ZCpjJd8zAoop5eb2yPWx7jeRT4E",
  "key47": "3mhhfLvJQpbajrU7mjV2fZ41jWCpTi8GtMXoQuNuCWQRSqSKTt6PuEfNRvaXCza3LAjf24zV4cTeoLP3kWb9sMW2",
  "key48": "4BNmTSKS3Uu3UGRZtAJz6KCcsgf7oR7j2gHd72Hz7hG4s5L9PzhLxRqRwjZV9X3wRdMBLpt6TxRxrdnshC8Pt7nS",
  "key49": "4AAKtBJCMYVohbS4RcMot294TZaGyWrpUkA4uceYFVYDGN4qdaZgbABjRcQrYyzvhUus3c1mAi5XFa69uPWXWSSG"
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
