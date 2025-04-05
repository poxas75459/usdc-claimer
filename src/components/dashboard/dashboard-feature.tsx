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
    "5wurzW9naRRZbrcUTnA6nbiD46jq2DUwbsgpqEtc5fZitA1WU2yAzQqsqz1y1gxFDFEyzANRNWT84HwuGMv1kG4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FxyrcnX5VAyVb8vTvHCzZnExYEPg2K15qRJordD81bwU34J6rF2ozkoTwZM36FuWXmUn65PQnN6nDC8uaYNeKjm",
  "key1": "BsCgQTRJbTdiZ59s5ZHmEqhjKWWK7xxTagA9eMwVfsiCYto6dyvvmnp6uotDuCRFZcD1EgzrF7ZH55CYmQFZqxc",
  "key2": "BKNw4Cwods4z8iWxHQwXvVivv2hjQq6YDw3fnY7uaKWgzTw5Z1GP1DrgMrVpCe4VD7VV8CicJRQ3kGD2tDxCjs9",
  "key3": "2Pc7aVJLQRQkcc3HtJetVo3Z2wn7wihMCdNCs2m9jBrhRNAKj3GhjqJQyn3z4LkUzR4j4ZqK2JRbbK1KrMtLDCYL",
  "key4": "4bADiCVQc1A5vGzKAHrNd2QAGVtmPGRHKRkiv11JAroNnLt5vTe8uc1wDPuXjtdq3BYRzcKQ7Rnqe5TWPSKwvE9o",
  "key5": "46KN8Xu7VUW7GKZkhAkHVGNsY2UmLo8Ewytav2PnDrStK1ooFkEyCrusrBiqXBvu5LsANHtN7JNkAe6WxE1NxbwZ",
  "key6": "gHiLnutjeEevPVRike2fvuEnDVWF17a7NJZY2S19j6HjjKH6yntuENbCVcjgFGFkGwJTvLiVNkw33uD3QMMpFaa",
  "key7": "4NTTfWYaKHBqqTtWmNyXNzpviQiZ4SjowXvVqZcsrn1YYs4VCBQNHk8RPhNpFz1CgWdmWiw1P1cXRYDoAhZ9CqPt",
  "key8": "46CKqd1vhCDkfHVVnq3MUFNcds4uv1oF8nQEeCqMFYoRkeEedMkgsf1DZHAbsugbdYmX3zY97CGbwjtk7Gp1rcHR",
  "key9": "5LNDGzp4EHW9NjYZbV16ffqNoH4s3eFs3zfkPAFrtuFVvT9MbEnpaD1TjrskG9xL4msjKXQUMmspmn2kT6usFVkD",
  "key10": "4jx3MmNnYqcGrmnid4paSztAfR6E8ReYE12S5XrbYD7S9PgyNfkndKM9CqB6XHHLaZy9Hq6Ge7P4j4GS2j1dusaE",
  "key11": "2FAzbaqjDHcJdiKhYf28ge2MePsW5fbJaGXFWnvm6C7Gur6dmNoEt1ti2z8rapmohqvkVnXYM1M6wq2mkRcSxxKt",
  "key12": "4BsTRZPA5aXz5V2EKCf9bzu1TjGdGbgE1UDSD896Znz4RyPj4Cy5mTn8tNGGgRALszj9gCXTh2hyCbTmzPdqvZk3",
  "key13": "3Cw3uvQt93XnBN1oRNNSLMyU9EmxVEhYzrcEjq69npncEBpauyd9e7HHB9uPZi366sFpopY8ZaLCEhcNiYJizhir",
  "key14": "2dwF5QEUUHhhPTd3cwME5Hkwm9vZFBBssYawNMLom4eqVszYuHvM3bc13zB6cZ9zLCEv4VartTfjKPDH2ENq7VgU",
  "key15": "5HVBVCdEJFt2bi91xxCmH4Dqsv9seipS2YK7qBjP47upkwSCZQ3RrZ7U6M12ciENX25eetzBVbzak6HVs91DVshf",
  "key16": "3Fd7y5GBWBEV9ubyVs6Wt3NugSqN5PGq8MsHgH7j2PK9vQPjsoSbv5XacFByyt7gUNXR84NFKyqtX7pPr18AyM7h",
  "key17": "5LTnH4Sb2SVrkT1V8EapuQr5rfiuXnG6TheDf32unP2axSzGMaNmKogogZaKuj8L7St2V3A95pQc5weaffdKHcgZ",
  "key18": "57FPBzq62zR55zXtsHXhuYkh7p7KskAN4zv9PVRFGYSxiBdc6S1Rp7HG3VWJbhHaq8r8JxgZC7UfJL9gZh7S7HRN",
  "key19": "5V9bGD5YM61GfjpeeYCqixXPizCH8jx5sG64DdmixqUPbVAmPaHj26N6ihjmaK1VgiKeikWTzefNcUgKcb4fUD6E",
  "key20": "5wmYmoejhJLtna41bXbE5chYa5UuCMfnYL6MbcjPZDKKHN91gGZvTd5hS4pL2j19PT396V3wHH8rSxSZ4KjqZCjn",
  "key21": "5ByuRvzbZwMbMDd11iheXnC435DMzcGoe87tfsNyBMQjBx4HMkJ9zVYuYHYvWMfaRckV4vE9uMVKX5ziFBqBxjNP",
  "key22": "5qxgT7gFixHyFCu54vNbUJxTKA7p4rdmufJF8LV1D6m4ADzNrWRFX1KxA4S46wQa4EHKDxsK38C8u6bJV86vtNEV",
  "key23": "5p4dLd9quMhPUJgfotyLAoEZXPzKtQo2un1XrstYYGBYrwvNbmWFPAL6ePeTekSS25mLjwrgPagYivo47eifYAjS",
  "key24": "26XenmKxqEQjxf9uGCqMkkyynPuM7j8oiyMVyVKkSwwWWPiodUVesqovo1YE7armhkEJzeXfTqvzpcDczXQtEZU3",
  "key25": "3D9h7YiDxt8TWpEs2ZBeSXi3rFmXfkdSwEg7M5PMsMpfdbPT3RSfcPifJGY1rUyY6hF6grK8GfWsvfFTe6WyRd5Z",
  "key26": "VgdzFNZrgUYvWtPUX8XU2RYXV7jP7BuPhoJA4G8pd7xgGTJwpwf1emaxSUE9iaMg12taWYKBDodj2ebGNgef8rj",
  "key27": "55bg7sonSRYNFZmsqHt7Xvi6WYYQ8CqPKGtrsA55TLtuPyRf7p1JwYCE9A6pV7ibS1kXDHFdtSjXrNkRyPUiNA1y",
  "key28": "4HjA3oV24y5kzZ8qnf2rg9MPppSdbFytVoojhzXWidSWdfafDQjmvHe75zELz5xnsrdLuVXciXerybPTYoNBrru6",
  "key29": "4j1Ng89k2iBtHKzoYrGcA2ADhtBa94RhmQ9RCeCX4bU7tx49t4ryd6KeVVtdtmKb6xfW5NNzH4oFzPDpVtkzDyTb",
  "key30": "2ryW9cpNpYfvhYZBgBUpbPRWqrT61mCXhcFxPemQ87zP5nt2WuPPXjkaUwnvSS1TtUYaFTnFFRVPU4oNn5Ek2CyH",
  "key31": "3V6aLPpaHZ5wLjCWLKXEBS31ay72oNrDQbwbr7i3xVFhoYqDy7wTXWLBbXgzeLRfzbfnkegAKSYdExKyZysXjLe6",
  "key32": "27xnWsqTBwdB4jXBAoPaqhZzhnwtWjfmo4sbzD2rJkd3wWmvuCgFN18PuHLjKdX9EHz1wFDPTMhfosKkuQa2C8xG",
  "key33": "34WxxUSFnYDMQT6Fjn4fhMayU6uK2ZiRpd3xxTULMYajSpA2t38xtqbHGmhNYPfC72WZkpR8WgAWp36LUnzPA4rv",
  "key34": "49yBB19y4KkySZfWxLbV7VyWCxMgcSnUmzuc24DeR4xwd3j8SZW2Xus8WErtP5vQj3oz2J12eNYvC7sY5WWQWymF",
  "key35": "VRMUL2fVJLX185EuSxgQaE3rp4Xt9vKMy8gxz1FJoJCpgGne1Pjgn5cir7xKYoCUH6A3oRk9gj4tNkDng6h3sju",
  "key36": "4ajFxoXxSvKJjeH5wg8KbnVYqNyq5dqwnSYfK7TvML18337CFRame1bdTTdyDHCpkpEinERRQH6qxrAzyuZsRDaC",
  "key37": "5YRZ5t2f3SMkpDp326KE1cQti3znpEgmEYkmzeG6JAdHsvDc1du1fZoMF2iRttHcvvYPJYuJL5QtNuvoHvFaNMfs"
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
