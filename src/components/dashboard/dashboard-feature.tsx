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
    "4KYWzyWQMGFZsWBVH7zqRuWWGxC5ZocEokkW3kMXNE3DSSksnsR3sQ7mME8vqdB1Qbjg7ZBDVxYqgsZnZTW4ZaVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1ZXxtV1RmhmpH6AjSKUBnPtMrG5nyJLawpNi2SGkpyEvgCEFvczqpenKqcdeg4vaQzo7Dj7JSasRUBdgiwoV6A",
  "key1": "39kA8SLFJaJNrHmEsThUSQtrj8x6Nc9tTuRtQ8JZgTKS3nhmpujc2JDuKtbKqGuTxVJvLgmRcqATbpzcPTjE6b2t",
  "key2": "3EkrMXDm2P7d8Vu15M97qMr36JpypEfjZ3VwCr6SyBHqV2j3EHDACaJVgCz2dNPvs36cdXvbY3qMx41UhHHzTKpH",
  "key3": "3KYxA8H87Cddwx9Z4fsJQ9nM6LDekkXsNeDAAKoWNoTpfhvfa35275HMUD5chSp1bbJm3BCPFxGN1YtJAjNbVQGg",
  "key4": "4o87PXizLEbnLmc6JBxHPH53ZXFPBHKRp5iH2mwYdVEACMGN3xxyeomJ7gK1XvvkEcbHwE7PL4maVqysjYvP1Z62",
  "key5": "zazuvowNFdXvkvoBRhz8BccJtGG7Mx1Na3FBgxkiPbTH42hgFrywQpwTp2rwZCXSmujbrkkX3Xy6K1eN8DWafsS",
  "key6": "4kuvd6VgieLz4gQ49QtQugiK2iek9B2eHmP3wRTvVMPrXyDbFLaJJ9FHNd4rKHmwtkWr6FMSoeiRu8VFKzKsiVrC",
  "key7": "4zJB2ohduM5rwFgYtUoo7RjbTQcDeK4zjosq6E38jkstXUtWvd6QfAipeqTrag7rTZmSNRmxSqXtk5a5m2eG3eMa",
  "key8": "48ueSV21geVFiHtRXpn7UYDkbEJxdmT8CXWJCZFsV1PMdmhyyRrfdQsL4uJ23EX5erpbRNUjVdiumVtVVv7z2DFM",
  "key9": "21p6rkL8i3vCzpNq1kXbt1tWpyCjTbTaeC6ms93HnHuUb5ajrkj4QSjYqsrYhAPcyQJShMPGGLXQG3MznXpkytyv",
  "key10": "2KEZ4CdMV2xn3tiGqNW2eE3D5CwaVMByH9Wfg9cqbMuKGxXya4VzjC481WdbNs4VraQfYCmxAM7HpJGFxFRWiXr4",
  "key11": "4ghgq95FHY4zdM8BfMHeqHPVH6FL5C9icroB8ehx5aPRWF48gD2p9wFt2NwdWWMBRhsq73gvAUHY3sXWn9CrayPD",
  "key12": "2E8pfsSPmZeUJtuQSmwNjgHGXDqc5P32N35bM575WwusC1cxNb973K4CSB7Nenh6ctwsUJziGZb89DGAub8eNQgM",
  "key13": "2PLQLa9aFxgNDnvmdUfCcoS99ebha6rcGQ832AKBDxfRCWeLgktNZnwfvj88jYJ3EVCHswvj7oz19CT7VpkyaKze",
  "key14": "2uest7ui5SuWVmQwF6eUmtG9gLxB5g4xhBnZenCSzVcmAmD1ANZWsTy5D481JYbASDNMq7iaq1rxrHEjDSie5yCY",
  "key15": "2Qo4hQSkdCaZPF7a4LzHWMKLj6cyywzc7Bx6oCZyUmZpwrAwcZ6Dat1uoTJQrqCwJqPZJ67zhopFpL3a5EQNcJMM",
  "key16": "3D56n7SY2mPozdbj4BFDFcx8Atp8xLsGtCuNGMMx6fFyf9YvfyqWJCgwVLKmp6mfiawfMgovxBaqtcivTRcFtDmQ",
  "key17": "4EtbZLHwXMpwrirW7DGzdZaTJcAL2AJvtMwDY3HYgYjwtsPNpbjFkk7cP5Wk721LKkpbKgyC9sFtTWjHHWRSqFCR",
  "key18": "249zfp9szAMMMg2MHa8FSHG9ZfKmCriW5mCMTcJeN9ZzQ18mQM3Y7hof1svMcLq11WjdJn2XVrYucuDEn34pZy1o",
  "key19": "2Go34ormWsDKeEErXuv6Vus5HiexVXvjYRdacbfjHncEJr5Fc8NdaxukbfwQprrPTfhkbwFsnnErzth1njhgmGHc",
  "key20": "ipZLakvfycgsRDWKhPEkorYiqpS51skxtUYS8fjap3vMjHiBnTLMw4WiJLsDPJnR6AM4jawdkQjZkTsiMERYeHQ",
  "key21": "3QCiq6Tk41NcTAycArH4wC2mfyEUNhiZVMDh9GSSNgVfTYiBEzaT2a8sX6VKcV7AZYHBedB8s9gsii5it2Y7gz8",
  "key22": "9sPK9qyQDr2Xmh36qrVe1R4eMd4dj1y1dkBnor6BFYfNAWcyxg7R2ETUQog5jZkejcgFQGxJcu5f9MSKmERCgPj",
  "key23": "328XKdxkZgv9tBgjwkKsDeyT5rVSa2x43vzrudgmQmmXCpGbW2CzhiZxwf3TQXLdxcRrRiC99ML6NZW9zfHXMe9f",
  "key24": "3BFC3heUUK7TaQUMTj6seMLCaMuxTjromTiEVzu8kRhWgszPwXQBoj4YBD28L4gUH6E7Je8rcXGdbLoDgDAASHGq",
  "key25": "357veLqFNogPYbuxPLKEX1xfAhi4HSv7QaFfmYPNzoAKQCGzdun2sq7Uw9sUjp79aVh2jerZMfB5bjwqEJe7j7QW",
  "key26": "5thr3GebWPN69QBcZWtrKFumgMa2zy2QZ8VDj2n66UQwiSihfjn2fcu5DUe6L5B8EufwSoqyLmKGgMhzdYDa9XpS",
  "key27": "5vjQJnewQS7Pkc9mQ1a7dW648eMLQJZ3a4Hf33fpq7C5LNE5gmrrymgWd29LMP4HmL5nWuwN27CG3axNZuPpChkN",
  "key28": "1jFcMfH9EmLoQR4fLsGjQ4EL1ZvzfzToJrQY9t9fomrCc1pppLykEDGdkSW6mRMEgSnMsybDpK5h6mjmuxhn1GZ",
  "key29": "36hYCaNxpjUUsPUXLNek3KZpRzvhVazMzK5LFLAS6YWu2oH3sdnK7Hmy96aRE8arPxGxbXJZM29dbsdfssHUWfZB",
  "key30": "Nn7P25aP6KYmcgGH6Z2D1Dju2ZDoGuM5KQyowU11XabrtokDcvs7ESfnB9jif6SSD4N16Sq8bmE2w46wq3shoLx",
  "key31": "36cem93zcZPqKMAiiW4KZNzjAf197UA7RfSdz3eB81uTCQy8U8YvprEgbj8ZgLzS5Dbcth5AcMQ6AzYpfyWvwmpg",
  "key32": "4nhCuqe3cfv9LefFCNcH31zdFy8n36tQiUEfZcw48xamasY8mdELE1ZtFPavoPjbGMgDgKx1qT6NSdKXTm6wi2J7",
  "key33": "4JtS8aLJsMZNewDU3Z5kEN8ELhwvto3GSE3jWFMzE5ZM6vHgu4R3KFYtkq2fchStgVEVBzjFXL6tgngrfCG3GZyu",
  "key34": "25bBBmRgn1uPV7sUMQ7hJo2sqAM1YmCy6MAM1MCev9jnQ56iXruXkPdDK1rG5CrwGfva3pix6oA8L5ED7awmvHwz",
  "key35": "3oG4LRoZjbwvr3xfGNZsVViNAUYC8CGekBfnn114dYiKkKGdtw8fNREykyWK19BCJAYLdcv7Tn5puegbNNC8Xz7V",
  "key36": "5ht2jgz7yh2Mudrzi4LX6r23zHSqLMnQyN7aCPDgTgsVDfwwsc5eno26JT31KF5cZRdDqVcGRMBEfruFuthZm3i8",
  "key37": "2L22fQVBhKvYb1yCrckaSUEW4387i3zUQJp6xJ9Kp642nNSJkaEdvrnEdWc6UwXXV7oaUQK4o42Fd9f4EE76nrsZ",
  "key38": "2Cu9VatWjm8GuEG7tatXbU26D5NzF8shxTNPyFSKPp4YWcZZPSmro4tN38F1Hye9gJ5zdYtMVsuGXJ7gt1iPYozs",
  "key39": "2Y22VGtNkMWEV7L6EMFr86mfg4a2KmX7kSy3A19KNvZe5KwMDgXca3eUAYNDU1oZRfWdfbAPyX5S4wrx7UaQ4row"
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
