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
    "3otGqq26tcmv6wXL4VR9dtCGLzSgTHKte5c7Ab8w3rQhDvnXSTAmD4HCgSqncrMktgoQmyGoTrCMtFUNQ357Nu9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HGDq29JtVpLXutsSJahLdXbFTGQaDfMqDPWUnUncc62iWNAuiFK2c9UotjTBix9JaVZ9Ts8Y1orQAp9Yq77PGs",
  "key1": "2wbXSH7mszz3g8vu8WMcRBZCZfeanppz4ponBFP745Kqq3JDhNr8DN2imvJqN3D25CwedNn7JDCyvEVvmxCLU1ht",
  "key2": "268nSRBVpHEi1RiHUQ2EBZvLyiM9VY62qXoEHSCFZNzbJvqor5kA7wmYuHUCQEXMV99YK1M1z288Qz8aBFATCm8z",
  "key3": "4e9J4vW8timosP2FHY1V3Y81xHnT3wPRrXv7YLTTwQzvmGLQp5nQ6StyBjMnHcU8b7ih9Nyeh8KdHVZgq1zUEvVP",
  "key4": "5sX5BvTUsA8nig7RNcV6coXPeQoWGsYmqQTVaS4bzhpVj57FNS5zYmvhUvK1wazcyvzJc9mV4ffq9ePNq3bopMAU",
  "key5": "53h9DSyFQyuhMSxh6oLZsPdm518r3g9P4w4ppy9SxhscTrqJErtBrfoZtDRQaBfjJ6cEFJ1FZoGVRgqDmN69C4oH",
  "key6": "5stLTSKke6ntoqr45TAwJSmVCMK2Lmfi6EECnHvisDB1bAtwc8rYVmDFdcQBGNaJnGSw9zXMafyayxUqd6d39Q3s",
  "key7": "3bVUwKgPkrb2NkSdDYa7CSedpZkv8jeCpePBpL1J4fsbdqdovGiYjTRHms9vSVkcjzvF5FTweNCMRtNbUbaCRC1p",
  "key8": "oSoSPR1PjC5A25WyPdwHyPQ74QHBMFukjXCxDy5jg2jNutjAxceE4EoM9uCLwjWsyFXGtZts8nFcvfZLWigPHfz",
  "key9": "5HMEwKp4Z4aFY6SLNVCGgykCqwWpr22Ffs5L4nzX9m9kDQyN975NTRngoJU8LCttehqMRDcnVboqTru6rbTp6H5m",
  "key10": "ruzanyENqLt2h7ARSLudhwiUkR7qUddZCwKyUYKRLiQC7vT611V9rJxwhuSjLp4TADJV32j13Yw8rRujvEFx1nC",
  "key11": "4h4m5mU4AQvDnnDmQq16je9GLogMop31KN9PyRNRcQUqePzZeu8cv8oVAdgxhSsKkgpghUV1GZeFv68RANZYTgtP",
  "key12": "2HSQJWNZ24exTrPjgWy74zng1ioYHRhph9v3Zao8nRwJpnoNP7yFfTkDLRVS2ynVe4cMGHMebpmm7Ke9t8ydsfMU",
  "key13": "9xsX6B2nnckwBbesBmKSyEzn5c97GopoGh9266ZAgT8Kw2gUm3QKu7k1Ya9BaXJEHw9tQ9nBg7s6dGqRCvK3aMW",
  "key14": "5mjd5NDZQrckLu2CK6cpRyLRnAQ4CU4svNMqCF75ELEG6jjraHUyprphQLvFXdqZAM77NtSpk2wr4Ku9wKhgmm3y",
  "key15": "7KA6f8WJjCWwEsDUevqGDfGLd5XmL2DFfwSuEDNac51k1qYXHECVwuMfew7o4T6NJMCrFSyvj8UsmJT8yKmr85e",
  "key16": "45Pb93VFTjeEkUBM1GLKtQzJkjhUgCuHcS5tNzZ1LhKdbsby3DXV17urdWuVcyVvJ6GRHbJRFZoi4sMdQ2K11PbQ",
  "key17": "Dx2XSVpr2AMCKVNBBm8siT8yTkqxVHGXJmrNVfVjaUxQtbdLPZJ62Ets7kfjVf4ZhHu9WAEBGMVCNokAWjMYa2S",
  "key18": "Df6bJpR8MPTChoGJj5zKvo7QPQmS1rxRrQcjsh9esoX54ouWE9pJiwVVh1fkbqt4KRuD6PdwNAfAzB2KYkKtZs6",
  "key19": "sbq8g1HUQnbU3kzDnFdba76NYoB1jCTANAsekuRkRmmnvidv6dD1cYMdxQ6omF5eHpC7poJMwtDWvh7oMSRDjWZ",
  "key20": "5fWP2r2oZK7P4EwvK2i5EidFz1QthTPxsW5uq6mXJDr7JxXQcMhYX7S8tuAxQcYUMNNQRLGkiadopQtLwsPmesEZ",
  "key21": "2HHSoXQ7nYm2sU4WRbaBzs1Sv486qApPKG4F84mtNb3eroyU6mrzfAAQx4oMWWFef3koKTuSWPAEu6uc7UYdCuTE",
  "key22": "5MDRWjhaaaQRdoyKP37c3LgHP4Ce8NhLwskDWG3Hnky7NrvnqHfHyBXp8vYvmTxR3x1J9gi63E3KZJHSRb3KhXJd",
  "key23": "TWR2FKacTFSva2vi5ypBNZo53AsEWp36Fw15QACZ17P6wm7Mby8d8ZXGPpQfx8xjEcnKCM82DjGVCKmZwPdbSEL",
  "key24": "4QmxN4zWWS2fnajKYCuZXhBEBa5j7igrQaJR7AptEM3WPTKh39gjZ21tc2qDoqfUiNT7JBxJkxS1uFixHDvf3TVc",
  "key25": "3zzoc5JDT8X84TGJCZS93RLw8fLWcwEb1u54sMmTJr54YWLBP9TE2qKhjh9kbP738DUiuWBYAAMbyapzKYeNt2fs",
  "key26": "3XAfeHwA9Xu3rAJYBhoXVQ4mifhbvtwquZzAfTdfPY6tacPcNRdETGoZCeKWRB9LwR4B39SiKBDuQuAqrrtjd2NC",
  "key27": "2W5UMt49qwzkfEz5CSY4eaPdgV2u8pX8vEDDUxz2LSY7p34rg1fTg7bLzZruxf1GP7LrEsGdsR2PGfiosjWQ4RJv",
  "key28": "3fgTT8LfVtkoPbkrfkX1iGL3MTSdZchyDUVrLpRTEV7RHQ4TaNK8S7s53S5i2gFWozH2SSb21bg1k5VSPcW9QEaD",
  "key29": "62RWG9BZcXtG9EZUSB9PmkxPSvsvXkMKUy8qP24tZjDajrogfv6Up6n4Qn9qMYV4qFfVhwXUSx43WSYHzw8QecMv",
  "key30": "5xF64cUixW3oGpUJ4Gfa1a61L3FQkD1yrZHEJV3hKnBcNw59Tx3eRwZiak5FRBdQee8KFsXE5kCwXo1VQkSAMGAY",
  "key31": "2iQST2925KsfXQnQLJkbjoJTTJF218D87JjD63E7oEVjZ7hR8s2hegVMkRDM6ukuVQTg8DsR8Vi6dPXTQTE1hRJh"
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
