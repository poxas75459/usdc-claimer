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
    "3pHDaYFA4Zr5inHWUivsao2yVpbkKBm8BhA6fQP11s6wHe9EeBr3F6AHUHef2DpoL8bAypkWJTNDGkm57AaaJDP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6YPLPE3YanuYopKDFX2dUCVDnwz93HtBqXifJt98FBz7D9HF8EwHshRWB1dPmq8bEVQjK2VZE3bPaeXeoKBAfe",
  "key1": "4QFf2gYyqpc8WkRjfvQ8DgcfvfV9CcFkkfxFJ9fb5ztCzySTXgqKmp4CFBNBFwZKneByaWxjM8GweW5hRHTMSznZ",
  "key2": "2iTXhcEgD93tsmma5U1GC1r7hg1i777NjS2ZH8KKnz17gD8UfrEECEXRMtS5seCA3kStHKhFAoxsJX4V5JDsbczi",
  "key3": "3U3ZKkHVUoiDKH6btHNWk1SAxTQC7hEKaXh3MJynsv9zZh8iVZvaqbV3NSHnsPntHjBeCTRGf9giPkLn6XESW5M7",
  "key4": "4ckaC3tzNKJMsaGYT9YvAMhp3KgQkbELvuHHVsFoyLvG2aV9j6bgFUsvFLuXKVpYh8GRgdkKcXvahNgSgfLeGEuC",
  "key5": "3CtG2ecM48UqKoZ3ArxwsFcmcA1P4EFVBETyX6Xdn1qdzXNWpaBpnLyvAXKVyiadVD23kNGMNB2B4kEBiPsA98Yj",
  "key6": "3r8ESBf528gqPo8vxCQTGqN1rTSsrnWTW6DDmTLXdCv7GT1ii7dJ9CVwRwo9FP3zvKcP3MydPexjofVpcpk9K6Kd",
  "key7": "2WWzwVX5FK2i1iK9zAiaTsptFNmiCqaPAc8aNs2nctf1Gzr5sg27gF3sYLe7rJUHtqtixMyHVzCMkZ7XKqPouS7i",
  "key8": "4d3KAiw3dgCw9hJZohZ46WPaVD4Q64JtBSZguf7YQ8g8QmSDwLPi1tiC9E2m3hsynmDL8UdshTPMMS5xGNvHr36Q",
  "key9": "27h2vZxMCJz1ghFaPFXaWb3s9aPetCTzDCnfaAhwPfavzWgQ4FRyYmC8Hnf7UxMqyVx12VAAZgZeMGoqbkXUUwgJ",
  "key10": "5Etx7nmGzKyu6J6LV5xkjVBdaiBA9EqtMRhqe22ANBEUewfNbpcYskm2GLGdnuzSpVvxm8T7ZzveBKZJ8A6ZEVy7",
  "key11": "2M727HxFcgjuoy3eJrD5whT3Reywa7YQnWkmuQe1WvtM4vxrK6Ujsf9n6Xp8zEjCgjYSn1z5bJYGYqStMtLgkcZD",
  "key12": "4JM2qsCM1uAonNT35RgwxXbLCyyh6R5coNhtczADJp3ErFeMzSCKY8QvXmvyu88DvC1tLatPFvjSXcEPietipMsD",
  "key13": "4aQFHvCgCJe5hHEek9bPzeiXegKXsGKpyE6oUzjAqCs2Ed6i3s3aC5Zz3EEFCpXySjnKxdRukgQqnE5B7hLjWgKz",
  "key14": "3gHSQi4fASyS2P89yCbXbW3hBanBAN57kimV69CJPHhJg9ps3vZSgrevpeZLhwvWVJNm2P8UvPXay3v8wzqXG22s",
  "key15": "4rCfjKBEp1qQQ1eLHHaRh2g7MoMfo31bZ7doSxqBznnR6XJwcsYBDMNF2t2h9275vkfGmcbvjQoM9iXVNGvF7cDF",
  "key16": "51C59rYVhmCZ9ERt1DjdXhwycgcs2Y3SgN8YfZFJarMoUcXnUenAVw6WQmxYCAhnymWuebHZZcfJTjC9nEhv8Zvc",
  "key17": "3ArfbRQXGC9PfSd557miBshP69rejuSz3DoEzqAeCFNJUenG5QyeyJu9xdJZjEGxFmo41P5sXgqyrC9xUKTHdJ1X",
  "key18": "48PhsA4P9jGNfy3tNscZvVKXUPy4BYUHswWYBHDAssTcZct9veq7wisMRfJ77u5LQQ7PSsbkCAaPnfxv3Woxa3NL",
  "key19": "3Cvt2zXvZ37MBmCUVvC4NDgFazP1PieEN4E6xVr6jDwBmvuPJt9g4udEhbGn7TMfQkyNoqeM6cvqRiGejQAfbC3A",
  "key20": "3LLL5ji25wbkMDW7s3UpEnh1xqGaRyvdoWdBVDiL6jeaddcb2mdk6UMwcBRFszXMyagyxz7E4mGKrErNKiyzp1Y1",
  "key21": "3ZmzDNWdJz1iJQ5JsM22xp9aGzWkJnpSZSJnXAuJTA34UJdi5g6qNop522xSm25z4sQorJf5roXNgy4fg99Wc2yh",
  "key22": "59xtQUU6bRusdc7yNfgrpXm4484W5CuHYBRymKAJoNwvTsUArWP2jfzFEx8wumQ71mf7MboXu8diHuGWaDwjCz7Y",
  "key23": "5wSfJE2Fjw4bckuiDvkPBdsBgVtjBDaqRVwEW4nRRD6kXjBB3y4nJgWabC8staqhFzUrXrUqbzyB7HQpTtJRc4dz",
  "key24": "qCdNwiqnDzdNAdyRafv9LqMnUSd6C2E5h4zyRqkRf17WcS5nrEcjUikbLJgrCNJQM2Yf2Ukmj52yvkDZgnG3bcq",
  "key25": "5iFbPHAf7FA2y1y3LR9VoMXAnbvTvv4z1p9TQV4akbSrqUzhrZeMTMTJabuM7EhroFquEbJ5TFBQbomgwmps9AcP",
  "key26": "3iL7sAwwbL4Nf6Z3vFVXtVc3zKPt2VNM57NEtaGEeYGbiTXamELVeMcH41gxqQvpdDcoZLZsDCSPcSKZ7czh6Mm8",
  "key27": "4dLCLmFnZTHM6wHuzYqCnrNxa5KkkuQFTNkzNz1scQc7nXUaFEsPdKyLeBBkXPChkqweA5GMzJQaX3Fiieo7Z7Sq",
  "key28": "24kXp3b7TLB7q7z99U4zP2LBpXdDEDLKN6fE8YSbR9ivowdd2uLZtuHfx4zHnLf4CCakoaUBfJ2ZXTfJF7saQS1M",
  "key29": "4vNNN4jJFD9LX6SSKfm5ydRTPMWUbBguo21q9f8G6Kn9joeToxsBpDWFaHjxucSQQVzh7z5Ug5PNEbQKXzXKK7gx",
  "key30": "B3aGFQHDZX4wP6WMcUwSKyzD63JLoJifqQ4kz1HjhM3f9zfts9soR2h5b1eNeeocFUTyNucnYGkL4KcUG3X67D8",
  "key31": "2RdRtzmGNdxqypMMe92tRQLF6yNibJcBXkiSChTGQ2sYRkPLdEa1unhySCmzruDVpRZSaF4nsxPVa8MjeLcqMh5z",
  "key32": "2pS2So4u1Ni9Limsh8hHNfNfzt2TBvRYxmeP5HouPyw9V6AVU3enhQ7BTwWxdHkEKx5o94ZyjxvPwUnaLgxZHF9A",
  "key33": "2G7b25D5JUR8Eth7g9fGous1RNz5wY1bhfMCm553xvmYCotN4dU4QuHDc9h81vyn7pStZjyGAnR9hKZyAooVknDa",
  "key34": "nEakfeBxNDMHYhTyJu93vygG15Nhqt9d4NhCQR4Nh7uEAMb3Yjtm1D9XFMdAudUf3o7ZGGTGgsxMefXRSNvaKGL",
  "key35": "Pqu9UXyAz86JMEmVMdNsoKvMQ9F1y7sMsCJU9m2WJhGrUcwE5eRKDc8Pd8TTWuV7zAAUECvP8gLGeog647XuGH7"
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
