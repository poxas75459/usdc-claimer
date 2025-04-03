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
    "4dk3uihGMTAxCx9QCkXkWtxJiXbmybS1YmfuzjxWfcTTq188xe1Xik6jU2U34knvcsx74PQAPiAHE9RHNSTtUxZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3ag6knTGCv3k7yS1xexzoN1fKkKnppEafcwqZzy1wULcJAyaVmgRptfsGZJzXyCLEgq4xWAc2kE6hyGhVhBABh",
  "key1": "2KkFyw9TEXPwhvVF77Swb23aGtrofKcYaFU1exiWH8vFLJWDq1d9P3vAVWSzpPZ9sR5zgP8uZ8Lcu1LxFBo1NAtw",
  "key2": "3LNeLRUWBcpBy3FmL32xe5JNqSFkccF5RwNBN6Q3ZqLiuuYMY4dEr4ctAnAUjydDUQyCjCxWWdqMhci2yPo7eiC7",
  "key3": "2G3DHzKfHq1kgLkpgDFjrXMqtw3KX7QeL79C19fW15ftDhAvwaMAPPRp7KiqC1vbmHZGrXby34KZWhUekWx6ymnb",
  "key4": "3ePiTfu8Vq53o3VCP5tp75c4U6N6Kq4pHr54HjFyB2w46vdQRF6VTXnu76xLfA9seuZaKsFgBSq1WeJygKhJF9NF",
  "key5": "2tAQJ5VCgi5UXkjgciYSjzHzeF4dAwaE9R663uNFLSgZs3M7RXKs374mzQ9jjqG1sLTyNYAk65bsdBff3jCmBmBf",
  "key6": "4jPf7tPB7Lme7WuvEk9PNEC15rzV5v8WiXqC1XyDw3irPhWsKq1GJf8bMPKyNGcwCPiBsknmp7FZEzVekG925jvq",
  "key7": "5UcoJbHwvTmTn2wm1CtTGHXRqK8A3QSMsgoKE4ac6tzVb4LcNcx3XGqznx4C4EC5mpiBLEXkLmYHPbdjEBVSK9Vm",
  "key8": "4LQkNcyN5mjaywuL9VZDaSLxXrNsoXnXbLFPJAR6D3ZBJBUpKRdL6jdj3Ru5pnP7zBRJEhUASrjLRqMd1UhV8ara",
  "key9": "5F5G4afnTAZXx7AaHy6HbrcrKZJL2w69aaAtJc14Ug26yfuZMBcqUVVFcTjKHtRDwSFL7c4bNTrhjfRiXenmGwWn",
  "key10": "2aosKAjpmd6QtDM5pHQ14UaeLwK689Tyz871PGYPnBNxqA3FkimNFyqpGfbB62Qm1F5dmbXp84p3TysPaacbbKBW",
  "key11": "4CvayPcijVFLZ52r1L9Ve3SquR6ZoNeoCWzhazFkVReKTT9K2MqDL1WJDpiZQfAL9J5mkCYKXjtetNzw3RLFefwq",
  "key12": "3KGoLYmQDKBNT9fKScQa2g73HsYDJHVBCUt4YHCjKBWeybAhdcPaB6s2ED1Uac48sYG94cNbSNxicmwsHXv5idcQ",
  "key13": "48Y7ExKAqmBGF6M2QuS7V74knQ3eSMVWGKbgAficVRJEzbBZUejyRTNQChc5mKSPcA5yfndniN4vPEiTnAkZnexK",
  "key14": "3fb9WMf695M5YSTomo2k4GaFoLzWa6gDNmjPqjy4rvBGtFbhxXsk2H2eudJGDGbz2U5Ntshcetc315o2SUEm8xhD",
  "key15": "4WJ7BadxdGh3EhQbT9hBVwfkPYAra4qhxvrnSxTMMP4ZJimgxKnQUnPmfdBJucF35fzBBV8HaXatk2mauFYyACAn",
  "key16": "3gBsp7w6YCtwEJqWxRMdFr1hECrRiP8ey2psapvaiesGpUS2TM4UwcHcWbFPBiCbKgZimbTAGrR4WKsJx8tk5hvD",
  "key17": "61pi14qAJu44gPKvcGdvF3qPf1KgTd3krZyuxhK6YeArzr4TEGXUFYmzgfKNwVaDfAKxsYJP8UdFWHKLVaZTtFfu",
  "key18": "59r4BUhyk3kwdSbrnAAVj2PWW3fkfP1cw1trnjvBS2BaW3PTy2Aa6a76Pu4SQbN5S2YyStFn9uSkKkcULNuNeU1o",
  "key19": "4jMK56ChyBhKrD9ujY8t56csAx2wciTppj6c91uSnP5KUptGvXkkUnbdgxHu7J6UrtPaw6kvvxhTFyyQm2Nv6SeV",
  "key20": "6aJQJpLSZncBMD2EZJUs5HciokSZCeKtNVQ2Au5g5JUjGAzatE6yJgJvaNT4VRAq19bmWvoRNk3C22ptGdgCqLL",
  "key21": "4C6jh4svoeeVMzUrSFT5yNo9mgXh5as5paadyCvHKsEUC7ycnCPhyb8aecMazSR6tPqvxpD3ZucXMQtvRY7oGC1d",
  "key22": "2Bv2rgmSo7bRvXZiLPKcdbH9u6nPVqwqQBb9vp9huUPySQFHumq6uqfH3PwNWokwDuSRu6yVSevSJsRDvohXqH5x",
  "key23": "4cSRfQe5L6pgBpP1a3uwHTuPWagL2tTZUW845hVx4NqjvnwkyCMRaSnwN7rKmAz5DHRaFBFxErPFvFntvFSHLA67",
  "key24": "54DkNeXVUHisg4qcZEpUur8sdM4gRmJ3hNGagHRSZG91B5YmaMMrQaiiP9ZfKqLfixGqykcuegpLuhywroyoWwui",
  "key25": "WyKGXFYYkpQmyg66hD2QRfFzfxWgUFc4yFumX9hBp8jnuRPNgj2Uh1UifmVR6T1Cz4WrzEFEXYVVUjrAKhKBTBf",
  "key26": "EkiZL17EZrUFFCCRPFFUMBLMWVEKxtDEtv4g4vPZ2HQPNYEJv7Brmd9afwWs9GwHTdHwBKeUjFGKJ7qVxpXJkCn",
  "key27": "oeJvgFzVcF4wUk9TDQofUAZ3QbWoUZ7ZrfFaMV6JR5ucU9ztdHAfBzGWzc3fiae3dVgpQF1HCdGnPqUcQgd3SkB",
  "key28": "3e2JncWciNqGPqHvqPQVqLFEYhskrgUNPBCUao9dQKzKQJzopkfkaZyjPGRTJ31qY84zK3qNXSHqvei3Vc88WVM1",
  "key29": "4b5pdzDxjtQ8vUsHpmm3RSVSw4tSsGV9YyBnTQmzzEjEHLGphXvfM2qV3txDt7BU4PwdQxQAxjyzudQ7ovR5hiPQ",
  "key30": "352R43sM6bLWwqySVBjASc9frkrNjezbgvYFoX2NFtAAH3gurJABRNvbit6E5AZxdeh4f9Wo3yL9GoexNicburxp",
  "key31": "655moUbhgU8KZbgk5kUovqyrgjKCi4YDU9jtqUwjriGU1z6nWMKJBLcRLFX8azuavTiE5p6S9Qe624N6TLGwWuEm",
  "key32": "3zQfCvd3YgRDeAHDoM5y6jKhoYhSmULVHhE6YsCWgHuCFiCwkpsSATw3q6eastxmTYAY7n9SYx6VqGn2bhZWiXxt",
  "key33": "5F2whSTipMkLu8JSxTKkLEYeFwU2mYju8aEy6kVVfj48NnrnSvSDe9WEeThsHw5FggbtvxtfmZtKGTa4DShfRhhx",
  "key34": "4oe4vLJsdp4NUaAtDebFw373qTJFjcXRp9Ys9yFw2mhcTLAtZQnWPCWiFVrsy1Wtadnso19d4uQ5ntC5H2HmRr87",
  "key35": "2DutvqcMDuKxs72HXQEfxqTkCtWaYHk41nxLkcux4kDHbTapq4GJbyhSHKy3J4wmYMWwp9BLf8GT1FfQWeFoKJFZ",
  "key36": "31qfPsf8kVbBscSyKa3PZx9yGgr9KksRBvj1TYk1bfCocJpgJPaBccDkbXXi8CoXB45zY23iDsLttsiaKcCkcFh3",
  "key37": "27oACXdDBeFw78Uwzg8jmx8AVritTZZTn8pTRdAcnGSQDN7BdmgCsv3zhEjqYewMpjsfRJ7PErC3iMwkmBFJNrra",
  "key38": "t45Why77Gfdz2PwDBAFxkMgFN8nH4KbLSp7MNP9hXsX4geHEcVg4u2caQHsXhJWDjMmWVFRFdTRA1uwHt8BoV3e",
  "key39": "2VTwe86QAiF5UdxWqAsqP2fBPxP5PaYGnEdfRT3YV2QS7dcwkv6S6CSB9jHbRWJwLxnv4fqDBvsSNLjE1B4NjTmx",
  "key40": "DMdNSGdwGugB2oKoTxw9cYtCahUREytzYAqxPpZyg1SJd7X5QVUp5T3vumf7PSWLZJ5avfv4cQVGNpmUxRcKn8t",
  "key41": "coKNjmfh8AoN4amK6z26sRuv4EyNEZuQbsFN6K7wBe1qRG4TeDJpsUssbe7QrS1JGtc7Z5V3RjU8aAhFXn8bEGE",
  "key42": "4QrRzHixsG7pCMLHRfseRJmPoynk8tpkpHdnpvAF4eNgHYdVtavUmoMJ71eyUdEaruL3zJ5tYXrKRjDMkVc15yDA",
  "key43": "4PWmeUD1XMUwPQrxoYnQme6KDtATQsErqZutmrjZbs4jfzfRiLPAS7TjvApr4HCM3C8LQmUxB941EyXnGeGrQiXU"
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
