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
    "3H7fzHb4WcEvVvgAqYcDQWQXuAbD7hEKQJ6ubqj9cFRusf673EAMdXVfmNwWsMvfm7JJUcvRvEKJcyUAV3WGdUBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UWyjPQTcmzBPkgfZLuKcNka5UGY5u9dQcB3CdmqNsBcaVzLfhW8aiAZraXbZghQUfruw3p9umN69PDLPzZxEAv",
  "key1": "2TsnytqNdRZBxf4stC4xJaqz6pap3EuhthX8ZLyStxZzMSEk1jMWTLvwGUe2ecD6nD9SJKqo9Jqumo5L1vu7U1vB",
  "key2": "2VyZUxdw2SsngN6dDcVQvUtHdQ243QaV3qi5k9RGxZmxcLztgXCxa9pN1v8sXy3pBKkWpfQvzUfWBNvs4q84aXLc",
  "key3": "h4HSkqF3hvreSbYSGjNChqe2HqKoz8c9kkpRLkYzKHkc9FM3uMCRNwhN5tKhcCmPHoDzJJT43q2oAuqfZriEqFj",
  "key4": "Pvs8noHXHuP2aB1ZaMv78LvcBpdjL5Qy5m4FzZmNZ9nNSPxc4dzQ96gkDeYSFoURLLh8zKyPSQeSP8mQSxg326o",
  "key5": "2BA8rEcdGCCTr1rgsKRDu7uhNZbuK7b4stua8nE9XwGGwPeVwRnaCMX9N734mWhkDBejjA3dk3jtnBw84rJa2tEC",
  "key6": "N1LqCueqLJPM7t5hQyCHFkzAAKVpFyodVugzi7ns6CT3wFTaJ59tFS4DqXFUMF3bjUhqUM5ug5XBCgZCfGw7BjW",
  "key7": "3U2h7ksbAiAdSJR2ZzXUBAp8gFyDo5zhbE1QX6aXwkkiJJXMdwdbfyof3JDvcrDEiwwuS2eBEZjQyTCmTknARzHV",
  "key8": "HR18bZ4wYmnp5BszJbpcCFZLhpA4GLfgYfvMvq7kiFx7Su4YHWh7wyykcTH6misKBtXyGnNXcqTtTx12GXoJ1No",
  "key9": "5zrwJNx5yAMf8h5qdkfKmB3CS5Bx6maFMtHr4HgzXA5YdeqFG8xAKj2dDwDXdmYjXZELk1JbntqAAXoVuedScccr",
  "key10": "4ymFzzRv5apFGLyEKYvenzt2katRUM7Emzw5PW9NGPCW5q5nQ9WS7B6tM4zFEyw97ox7GsiGEjiF8HABE5kVSfei",
  "key11": "3fL5p3WCKr4hwyqAZCWeY7YMUhP5wCyXEriGxSri7p6ERAtpAQbWi9bK2WcAUq8HxQE46WaHy15YtQ3y1afdzwFW",
  "key12": "5CCzu222ryYWJ64GkqxfMrY3rRwDcs5AJPzGZbLAY1FsUhSaCAknsNHz7qYcCSdaRBatfKWgvUT83r3HSQd3mpZb",
  "key13": "5pdzi1ZX2XXC3a2zwMmZvhAyzMAd4eN19ojiDe7p3jY6puwTK38gWh8DZayMVg9tdSp2E52cC4ryXSmu4iaRKdW9",
  "key14": "34GdSBhKMFVXrHNLgHtBQRAbVUfX4Wksb2GwDT3HvweMbgTr1143VX9Jze93TsWZrxDzPExd3dhaoxFXmL1614sb",
  "key15": "FZoaCTV2cawtnymtRzeHpDeMYkJwxGbS7fiWdeQsjJ7FLP2LqovuR2J8biR4eRgrWfRxTGkHDEAD4xwnCYkXEbJ",
  "key16": "25fUuJ2N8Bg5YVHHXChFJPWGwjC1ce8qnez1efe1tZV7jAPSLbg8WVtdZFwJZ5D9AFohFA19x9cvw1iPp4Stm3uQ",
  "key17": "4T4pAGWCi5wsNawDiYKRPuiHt6uisBK8TPYrSZgCB4m6QbJf5eq4wNf9nx966BhNbQTwTvaZmx1RQKnLahVzUMb6",
  "key18": "3w5CR7ZZi7sydB8i9VNftTuxJUXxRfabXhngUxMxKiNQiGXQsw6wxsttPzd2RFfoxfWZPGQqmgShDUCaPGv47EaK",
  "key19": "56LhQymzTrm2NW1JRvYrLUVMexpUGQ6QQa7vvntmFBRrsWC41pVxkAjMtQquKPd3g86w1WGFP9erhh7xf3Ws2fgi",
  "key20": "3i3GQx6229vfWSLr6WGBg28qsS2d7tQgHc9i5vsK3BTuYZEDxdn7QJbfduAJKLuGejAdR5rpRhgixqckw96SxbgU",
  "key21": "4JoWxVzvukWwmNCGvBe6uqyfzvWsHUTAauG2xmF9sw5ApwiKrhz5aYf8JTxEVT6BB2VMYzyAGMPqiz8VRGZ4jjr1",
  "key22": "5USugZTup63qmeQ2XBY9ifQohKva5nrUuQAuStXGWm2ZDPuFqBKMGMvvH6G8nupbuiLTyDuZofUiw7JWfaYn34nY",
  "key23": "5SuKVCf2fzieTXwkuKgFCKKJ5xSiNeme9pyTerPr9bkj6XHqk8EchVcFoXw6WiJgrnBrrm63ifWZgNC2B9oEft4",
  "key24": "4RPKFJfbvfSTMKvzdM9cL9x9ZG6kQW3kihBGGa96Hy3yuWv6CNiWAwKt8x9sZ9ow5hDRrPF1Z6gEU2hrDbBLK2aH",
  "key25": "4uEdGqrvdMPQ2nqhXANCber5NMxAhwmS2bc4CEHgD1X6aFjcNV4jhZKteuQVrkDid3DRwjpyT3P8yThTcQa4yHdo",
  "key26": "vGDfjJ5Eq1mRJpS5X7AQrLQGSEpLXvAwS2kkgfx7ZiwiNLchC8FUWsjaYe3eTHEaPrFGf3zqGWvNQakDeuxaRDe",
  "key27": "3WcbqtajUpKeyjsAqYHsyRDFgk5ScjLiy6Tjam83HEViWGJfkkKUN2L2hAWUN9xQAerx5u8R9WQZZQzop3yVckBF",
  "key28": "367LpSUE7cQyqq8YA4F84GJsgE5sYR8Fs3wbHaBXAxcv4hLPTQbGKTNDyJj2bijLXCsmom4WDV3m4sYVvvEVHGAN",
  "key29": "4WVw2bjtAS29GbusJesTZeoimQtaCBC2SNjiKpoBZ2gLvNs4SjiKMeBPLZ3VK6BRaYbEj3aUxoMcF46d171CVfxR",
  "key30": "2u2EQNvgFU7pEeYZ79khxM4a2g7414y7yxfXMunNsbsz8bhRecWXgPPPdmGRhGMfNmxabB8wfzBZdVqUNN8vjKme",
  "key31": "5VHN46wHpU5Kbqk6YbQpnsDjvBXXfQyTvT8kMvRgxM8RCQHQeQCQRFgUEfSXRFNdq8JLD915GqDmS5d4htPKvgsK",
  "key32": "3pEYyKJAjjaxskLywF5Lmt118KeQr4KgZPJ1xEhbeB1GvQy4j3hHaBjzMT2EKnKWwWWJAVF7UxRPq8GDwkCjcdXG",
  "key33": "ZxX5xx3oDyaBwKcKCjYRbBBGozqkExbCsikb8arAxXbuMqa1Bi24iKbxNbLGX2NnuHTjoDxJ3oXcXKjpZZdGeow",
  "key34": "5Xg4ipzRJNW2hKcu5a72WDeNJE1EfgHQbdw5zn8Ng56MDWaNca7SHz8BUw5HxCdwLCdfaq7GtFu7S3xy3oenQhL2",
  "key35": "7s6DjAkMhupSANaahQi4G5BRKSJRoZXEY9PXWhjcuLoCzTVzGGnPAohELSASFEFfQEX4XURVbMCto7HTgajLHRA",
  "key36": "1aeHrfyt5iWrvygtbPTkPWuwKjHYHNSwSeeW3A9VGZDHffBzqGC2qKw8X9koV9ShqeuxcmyC9WkMqXpbDTwcf6D",
  "key37": "32UcXssi3PfvLkHSneWBnk7ZzxhPb4t9TKf2m9T74BVQrRKKPBddVY7q5MVyLw4tXMakJgLziufqYrzzpBWCKA8g",
  "key38": "3GrwCiDYZAPowsegnBcbTYNiZWeXqo5MP3d2dZ1z6WMbN3zFmniE2UxXHqQTCneU3HKdnqtCbdjWndNaNnbkMoAS"
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
