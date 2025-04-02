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
    "3pcfBp4r7eZLoB9yqiERxu8fEppBK6ZcQmJXhujqeiUsy26dorbR9ees7x8VoyZ7bxppeE27tycJLX8f7GuNg7xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uVXwG5e71PG8qRjtrv9nrSf9Tetr5fci2c9JEyCEdk9Mw8jdLkAPgVd8Li9XXComYuNjgQp2Zk6BxwE2Z7T3JHK",
  "key1": "5bWQ9XaWx4RgRgHojQqCsht9G1D7G9o6W1FJhSfTLuSRQics5TG441C8MiVGyX5uySo8YL91qKfDcsbARyJCKF4n",
  "key2": "5mRbLZNsxM4eLdyYxmn8jg66gHCDXv4dUkRNmsU7pqbGt2Y2Gq18iXkJCZUQreKv6qgJa5jWtiQzKbfkaUaKMFf2",
  "key3": "58SAt46SmmGCUhbv8PJkPuWBjBvFCxDpvN5wCD7Ad7yMMp2jX9bA22mXaLEwmaFfsFS5h9DajNU9xHjpaQrA6mwJ",
  "key4": "3CLX4AVUGBkESgbAGpGJ96neGfemqTN7in2nKmZVUF5SCJEr4EbyxEm1vvTtpjEaa14UATNMjVgpsLZ6oEnE5UJb",
  "key5": "4NgVrjWMTDQYmhsSUrcCdsbXcU8MeGNdxKkLth6sgQXnyqmFB2bsC38UispE5Fa2gExYJ12jVjETaBNGtTvKmwQY",
  "key6": "2Y7RUe5j8UyK2q7tgJL3B8wufb179ApCPNF9RSRn5f1AyyuwXD94RJ7cSarvRrPw2Lznh3K3agtzdCMhByA5oe5s",
  "key7": "5RsME1Qs6UCkSLXi74PrMCyHZBVHVD44GtKzXaxLPz6xwcxV2egcLKXe6YwvtDyoFP4TiGKi2NwpZFJCzaFditD2",
  "key8": "SgfbhYcqREUUFg2T1oqwd362DDjSZuSW8bacqyXmdfLPDWta2Wq5jvtkM2u9crvJwxoQ7pfETWLgvSWnoPehJcA",
  "key9": "4VMPWCzW8FBMhTkH1smkh5W3mZGyhVd4YFX4tPk91r1VE6ib4odJPRhZd9ygrb8xvr3mzxv6qvJFLAYKUiBtzBL8",
  "key10": "5b33wEmoefTAyNkPcyKfzxp9ztJqrmAhwMCUfeFB69HVQwde77Pjfs6uTR7SNVvsdk68bzwp9M6kgp4z8WKwW7sP",
  "key11": "4oZeDfTG5T6JDzzSzQ46k7kUW8wWzig8yPMWgv8MZvs7P7iQ2tbXqVfkZ6orj9jmvMvMDmT9qQCr1ipjYaCKUFLb",
  "key12": "3tNxaHimYLFr1Rd9pKScX7kesxTiEMhF3Zj77YpViVZJJSqqtVbicrhT2BQKyY9uXo4UnwjPEU9XCSoug9sQiSYv",
  "key13": "5CbSygWMZ5DVek2qS8aEdgWAFKkbgUftHSSeVALoPBaqHB3Wj6UzqfSHiWNiy9g5TpL6T646Q1a4gBXEnR5qr9sm",
  "key14": "5xAaTYdKdNvQFxosWFK1qNFvE8vYqaLFvLhsTTf8qjAqk9niobxDgRmWXveQMoDYGp53GjZ9kBenweyo6Hde2s68",
  "key15": "65hYLvza2vkoz1JBo7HyHJ8ztAKVDxVgrfLm5p1DBdPWXJ8PP2uaC76B9eeS2FC23NNjywa2oDG4akVWQeSnGHex",
  "key16": "2rwxT4fWysYaEytQzdfHtcdYxdczgsaxggBLnXRxakeasQey1F3Y7U4HPciTnitMjBjiVWCNfnp3V1CwLshYXHCf",
  "key17": "u6E6JUL7NSZhRFjRBVG6bmZyH9jgpLA8YWT1XpZpghFCZnibkB3fyHJu8AKnkAGQWYoqLRmP4QB3xxG2b2mmcHy",
  "key18": "5FVKZwTuRp87iSDo3fQAfA8ADWA95RKCr97xCDjKruNwmeQYdrzQdBSw1sYXrJxaYMNwXPtQhcAYrD3NZD1p6C4A",
  "key19": "oiQjiUHPVDe24Ufs1b3PBcefEtPrDs4oWsZHf7vdXo3X9EBb2yTUNt6eHi33mz2f5dRYgdxUZANbZPx6ZFz4c58",
  "key20": "3pEXR3uHQg4n2gxwsJ3sintfovdiQci1Za2n8uWMfyEjLuHhsn2zaeMjdZPJJHdUefStTJhnc8N39oMBWNox9ZqX",
  "key21": "39gRqornzgxWaZHfMPYGvna59z9gtFidvWVHFCywgX9PQ3HLKhBhXuQAheGELmYMumJk4QoAT52aQpxNy45vAQTE",
  "key22": "5sxmngpK2DqJvjxLfcGaruvx2HMHYR6cqpGiR3hcw8tyzY9PdWcNCFfBB8MFaBjuMXXxddbLtPFRuB14H8EbRPbc",
  "key23": "4h68CkMLkvC4xavvRHa8FoKEWGXAriK2gDcbVhUTuPQDYNB2nbEBPrANzRzzUTN8TE9M8Qiz2nVGUFD3GWT9S8s2",
  "key24": "4PuvRupcBrQWaw4qafzmk6T92DT44JCdVRBfAYZE54FUQivxLUAzDPd6iG64G3ybZ8nbDGG7jr2v6rYwqFkUs8HZ",
  "key25": "3vXC3kAP42sZE9btDr2t9S5tuKNrfu9ct5t6LnhoHJkMXfycWGCLRpN4N7veCoDuviAAdqhpkYrHAZ9mVvJx81hi",
  "key26": "4iyL8pXmuzoPJiHEUPSds1pMqHhNGsWvBkDZ4kdtAQ5ai1o3yCPBPCaMXMNrZ339KUf7r4auxG412zG8ETFF1dTX",
  "key27": "39LdoBtCy7MCxFVopYcsPVFeSdAUcSUyn6WyNHKWyFX3N7yguSR8Bga3WGXdFGuxdHNbztvdEfkTktiWXSE2GqF9",
  "key28": "4NFzCbfKQAxNQk7apATP44JYs3pex2Y13tGQGrj2MD1NCYk8rBfHaePh5iPoobbRgb4ozHRSVYJ8qmCX8uE2bARn",
  "key29": "2NgU6Z7bUg6oizF3pVH8Qg4Gmhumqyzt8VBmAwfw188CdT7DtvdKXUHQheiAKRWfJg6FKGT7xRRY5E6gtDFDEFd3",
  "key30": "5SFVmHs1vmpuzz9g56cVqnR2pmHDKe1k1J4aLbhMZEBRYHKo3tXsAuMWAKc8hogXD9RGzCedfkFZUYST2K1CvLrM",
  "key31": "4Qr5vG4CNVSTkTBseAdqKajfkfBhVbZ4Vjp3gM5LMxFAfu2y4Q7tLG6rGgx74n2tV5yY7913pqb7mXsAcXjXZkj5",
  "key32": "2FQj7A9Z9Mu3oQqz3jNDahNjwtUWN5nx4wD8sR6N5erYzD3Ks4ptaHCa1kZeiNAtsphgurH49xtDNGfN3FytUBzu",
  "key33": "5XytYx1EEdGKRTZTicknJX5RVdnDkVxdibVagPwMmXdotHBRfTDGo337AfFXUgcP2okKtMu5ZRpPa1TMqtbdSN3t",
  "key34": "57n2ebkpFM1nPsrM1nD14o5vX1kJiozSbjmpp89QRtfWbmHasVfq4Ke4W4sHjr25g9S4NU3wseAWoixFFdE5cjRZ",
  "key35": "3hD9jnhdeRYxyBX4oJDkFKHsb6JthsHhcGSkZQX4bUJCp5ex8iEy9fTuZDuHwPMR8UzZuxbzTKjVhA7ixp92bsMs",
  "key36": "rYeLgR2qHcMnwRd9fz3wjhyvKovgUy4pwMS5sLzXkueTn6adfYGM8K6jo1N9baCtzAKeGdSjrGPNwFxQcsyRZb8"
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
