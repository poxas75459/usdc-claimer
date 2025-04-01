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
    "3c2Assi3j29wQNWvZFdR8drQJEkWqP4zfZrKdH7VCDZev6irxLrCYb7V9FH5TEx2doxoMWEux7Z7zuRuUvPEgHa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAssvHSstErJVUWcbmXgqp9kb7ksc4Mnn5Bk17pvo6E9DurfTEtrPNpTSZiUyNnuCNZxdzkHTo3qH9K5kvo7YM5",
  "key1": "4fAPEcM9KiLUXDjM5KhkL2cz8YoNSqpddgHXacaAJQwEXiaszKyhWeMgu8WjhNfiQkCaD13gFjaav1hEYxontSPh",
  "key2": "2wFUZ914ZuMjeSpSARBCyrALGbyTVfPTy1rzVMJesjxPb58R66wZxt1DjnzKMHUhq1xsdjCP2aSGdoXHm4eEgpDN",
  "key3": "5GZjEGFjpnyQZugCAUH76tL2QvV6igVmXT45Wn2dTCj8GDpaBh1t2PJVgEYp3fcYxkiPbmnh8Vqdfv5WpBkEiW3X",
  "key4": "55sBw7N2FusNg2q4j8bWsdDev4shmbu2Fe6L5goQLbSwHJo2bZ7Pht1sPzaKTZ2f2FzEpDbDSXXLBqyPCo9CEhFx",
  "key5": "48MG5fuLCoFMigv6PJmCg4T67FTJiyDQdMLTbj8hcUwRqxFJbHPCHFzQngtqdZX9GsmeVXkDw9Qja8T7naMXWB1p",
  "key6": "mhjZZfSM6mJSqmnUALhHoaL8tQWAi9P72YHgtCKgGwa9sm6kNmwr48gPmL1A8PXE6MnnDGaL6a5oQZ88C4S5Ura",
  "key7": "2kGdGeTwDzk9jpg4F7E42UZaR8sAzXyzhWrP44MseiSjhs799RV17nuqbFqMAkVzAReXx82iL2w7R3g7kPL2iRkq",
  "key8": "aKjax2935bM8sD8LopTubKPk6b5SxXCyiTHBs5kpeUjj2AaeAj5zSHVV718PcoQwsNvU8aKNtCDUgecxjbvfDdA",
  "key9": "4nXKm2EfRgTDPBANVDbed6VvV3kbrd9C1oNJVWN7H8UD9k545Bh2Z5zbb7nEtNonwhKjNvG6iwhcy1PKS1vsVNEL",
  "key10": "5B6eX71CnsZnjPd3EqW2k4qJx8ayb12qE5nLnCZcZ1q7spz4dQeex77FQ8TV8BSd2NaB1d1vXP5QT7SZANNzakKo",
  "key11": "4jdj5qnnfbGEByum8dGFvccaqQQrtBpQnETWgQvafhpb2Xp2NCFFJrL3KXbPEnNVxsyisDn5dfwfwbAThMfnz2P4",
  "key12": "4BiYikNv7JPEB6jHtK9mRxzhTYSE8B2Ji8mGGLzAqvegE9G7RLN2EzffRcK7W7YoCDmBsjiW1WH3fxwsgXXFV3BA",
  "key13": "4QLwq93uyzVwqiAHVHAyyXHzKTkT9urWtkNA4bFhsrbvkX5pr7Tx6XDBuj4BoBhVV7RFDjjmMyZhJzzWfpCjmZ4Y",
  "key14": "528FMTrADD8tC8g5BKcZE9WC6f7sgcd21EUY5zzhPHsMwkEFpwXBJKYbpv6cZQbY8m6SPacddeXcGjTtiya1qave",
  "key15": "zfvCUkEuqpGgFUhT283zHqYeAQWELqVqjKz6PscYzoXneWTgDrNVG5xw7gqu8nkeHqaukyVnde6NpcMXVdW5wHD",
  "key16": "3Ld3UctTW8hxMJuzt4BrgorL3s8LFCtFsys7oiAzp2ivJPxrLxXr9T68tHQBAQNfsSryAnDTkugXXCzLJkm2eEfA",
  "key17": "583u63g9QtWjhDZMPXpzkX9xxy7kcU3YERMxTXQE9Aee1mqJLFdMZdW2DiHFWmhaYUtQBRYbrQuXnvBuTVRsAzsg",
  "key18": "53JenqwVxwyw6ovFVtf1kcWoeexoaUxyjKGpRxWU51q4sP4Dvp1ZfX51bMTJWUuZZHK7mUC43jJ8NtLHimeMR2v1",
  "key19": "2qE28ruirjC3b2Cqn8Vy4gQxtbp4PG4y3mMF71twTJrkkf4fU49Ypcnd3VvgzfzCUnQbVbJSfoVfKscUbESuhKV",
  "key20": "UPEo7h5Sr3wa2vCvzqdGyKmYoMGk6sByDjHPyLmt9Q2U4vMDEHbZP8AahRSjUYpy3C5Dwy3FQhky6uoVgK9s9bk",
  "key21": "2xjt7gicwUZr1bBMTk3kVBXTrmrgza4QQKznAVTvAJYCDUrmNGGDZ9oJrmdNhiyGvDUdfyQzQ6hYSrC7qLXbJ3Ua",
  "key22": "4guxjR1rJQ4Jc5TRoQ4dKUAyUBDSwNTNRpRwZjvnjK83H5wWdT9R2JaGiLGFGdwvarFqXz69tz6BxxyvCay8e6r9",
  "key23": "5rRPWAw4tmxxVT1tD73RUhtJgfVVZwHo4v43X4hnbETnj9b6qKX8Vyq6qQeRZdaHx9EcwWe6CBTQfkJvvJS3UCab",
  "key24": "WehJwPq6uGSDiw3AKBWbJpNmzThWqftX8EfFKLdaMPp9uxjEXC1DziDinxY9KdxbaQiLUBdhSJQCfXxrUgobGZb",
  "key25": "4VAF2pgusxwEaUxiqq2EQM8CDv51aX2jd7Fn7Dh53tVx8i5ZGgoZukTj4XdMDv3M2Fs4PjT4s6nkL8nBivAH1gnF",
  "key26": "5fbkjNUttPBqv2ozGwgKoeM8zBEdyNGXiCTykQMqFfYEZWvFhB2TxBWDsqAt4rntFkxgJLXp5GF9A8KKo8okYHgD",
  "key27": "5RFjCA5iT32vBDvV4v8H5pZih54WVQExSzxeM5ryMSdwYtBAbBF3s5gb9qdRopTcYxZLhRytt4BSRCnsfEv3eFXf",
  "key28": "2dE7UAjjGniynt2mWYQAf3UfbkHs34xi9d4jfe8TX9ss59pqF4cdLgoSGToC78eD4QhRGrQAUwnzFn7ZgewcVQTF",
  "key29": "qgJnobzHnjWJHYf6TjHaonuLq1LDzBbgAThQgcVUD3fprGawGfRFZBR1RtJ1MHykqVc7JU3aB7o9S1ktsRNHd8u",
  "key30": "5JZF2xFQrGjwoByhjC4eXP8FW1gz1dnwjrUrRVo24MSyAQiAZHJMKxzwrCT1v68rJ3NqbQg6TNdaRK2H1ND82b51",
  "key31": "4JcuL8WQYSJVQT49x47NdK144KsppLDQsRzXi81Wa2hySREHN1AMrN5nWm1kXNnEJ1vRGqNp2dxoydQNRJn7RC51",
  "key32": "5nGg7vRiV9fz2ZpgBagDXzKY5KKhQ4EMYMTtYJb8QMUWnYgGkYpEdvnD5mGbaBTaQGzAEKzyQJMXWticQ8gQUAHZ",
  "key33": "2yuVFQQhxV2RuWu3aLxGie6qXN3fB2xRFqyYQXK6kXLqCDxLH7ifbRA22D4FyEfCA8kjVsWCPrNivdrdszzaJXa8",
  "key34": "25LAoVvJH1BD7AHFQ6cEEdK7nsV7bgWKu53iWD8Q2C4afA9PfA3PRf1Th2EJvzcHbdjQhptX9y9zXNxMqDosqTDb",
  "key35": "5GTWiQaa5EWjnLZsJAS7WKJtQX8VmP1CUYDBGmeDkHdZygXiTyLGhooVdocEphSKxZmiVkae2A2uJegtPsFiQi6W",
  "key36": "565ZrPk42bhvpK8zTwoszpJ4FtaqEwTV9cMYomwQFeCkR2RvVaaHZUVVRoiNZBbpHyknrGgDmJVzpNtg4Ywb2ikJ",
  "key37": "3WWUBv9uxcKR3VcquapGuWxsoMuEBPeFbTozJVk2hcR2PWY2MgHZYVgHChZJ5wAgJFqRr5sB1SMsTo5hPbcYFc3A",
  "key38": "4cY9wQRvoVFgf9AC87trQPaGaw34VbhHhzp44qU7PP5fPHFgFqayG2b9nmHsY3m1rfA4pxkuT6r7uRryBeVyRG6J",
  "key39": "5dDyxij4KLbMuYWYifHCj52gDuVX9kfBPQphvsbGBB4PgHFvA9Qp1vi5pAjAp1FHnuTjUjMoPQ7wVyL66RJr7mc8",
  "key40": "48LTUS924SdLtJAPWME8uWVTBRKoSLo84nbaDPFAcnrmFkn6H8eZ6CZDY8cctgMKzncwVKf4kQYag5jhfzmeCHeM",
  "key41": "4rPYsipytLw5dNPxzi9oFZikhPfNsuDEYMSwzpLqLCVosNebsHSNQzNr32PfT2i26DLz6rzr8yMcsbMvVZMGWstR",
  "key42": "3eRXieBdFeWzcoRTMswVbHPLXQsUuSFAQADU1aCMWD4WimZFpn8JWrpyn3DGZXB3CL4uWU6BcoCP6djpLjLksVoV",
  "key43": "4MaLGw5FH6BonmtVNbcG2NUStkTHv8UKroWZGvpwtRtXzsEzJTsSgykVTFAXjFE9Wydy6RHxBKWAK7WRUnH9x9va",
  "key44": "4Af6mDKqdCF5AsRhwH7QQ1KWMaP2yXQB7TyB9Ww7yhTnxb9x2DcaPDaHsnYgHqiB3B4bxHbSYticMo797bHdd9U8",
  "key45": "2r7LKgrgoMcmUd2uiqNG2TbsuFxHFNPmGjKUmSCnSeWRCKncDBZGXXEGfrexZib7qk4uKAkcYFuCeGh54WyyJMLa",
  "key46": "PSU7f5nQGbUPJdxNTdUc2rJSjogV37UjfcyciRkMVmdPMULNcd5ALUbs1coRNc8ttumJZGqW7UAQTxTaWdC4p39"
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
