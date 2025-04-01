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
    "2J26TRwQrfZVG27qPCbXRy9DVHEoFssJGAxnccvxp1nCGMTVn18JShNDNENtxv4pKwY9KNnPjeBctG5gpaQwYDjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3giVSt1caPwh2DsN7kQ7vzQGVvciTXoWYR4dHtWKgnrjM5sgtRLGfzBBoZcsDS6rnEsG2TAj1VCHdZWp2Y2qxn7a",
  "key1": "2zRsiLhZTLCxDw4nD5N8jS1Li35fEmwUdx7NtTiTJ5xh8qrvjtg6jV22zWuF8QdjVVGqmf4c8fSwJcmLQW9i1cdM",
  "key2": "53C9Gk4x29BqoiXXHpyNpamAmHr6Bw9LeZt2YAczZV37S86h7pMN5QgBxB2VP6svRX7U64STCWRtGrUMrYWShMSQ",
  "key3": "2HWhAJh3s31kU7cTcpn23YoHzzsrXheiX2h44sbdGAgETQvbFV7FnUyHuWreMAJEkaXpe15yeoBZd8EBeCGhEtaD",
  "key4": "VynRkHhCK1ppotGQZhNF8J5jRA5NgifMSV4R3jFooU1PuJZsoSAdqwEWr2cHGW7WMgid9V4xSc4a4wAVKwKcZA1",
  "key5": "5MmRXA9EnJ4x1Bu3ALfe58jwAiy9owFUcLukbQ9Kixb2W38peai6zdoRNvL89ySbHKJtfbqeGGBmYKuH2wmYfc9c",
  "key6": "5PhQgHB4Z3jCnYaveVbhsS4DwSjcuxjKvZ1kMfLBYgz11AwdtKkcPVfgPSgcpKmnoQRRPAC36DEsCBEnf1ornCNb",
  "key7": "4PiK6QSybGEvXAFQBYSRxYrHufEiburJR5qMLaCozCV8gnWCNiHtS8KmkGnqoxoDUoSj6JpN2kZi1tGNtWGr9b6T",
  "key8": "4TBxaZMtNe4YxaZA2b1o64hC69TcyD652JKHN21o3RMS2NLXQtQyJEyJV5U3bpy86YJeMpiG3EmLkEdqdZD7drRp",
  "key9": "63NbAAHUXVrAW5T7Qu3mRvxH62dPCvg4qYah5sMpSDJrngCo1wz3Dbg1yWenQE79LSbBZ9vz2aLLtBEYWTRpRh7F",
  "key10": "3t8xNoRUjnJJecdLUhwtW9wTmjbinuGkNRrviaYRA485tUVRMohNxB29hfhh4fKkRWoNMHx7DjYBmxdco9D4HJqt",
  "key11": "4UxZfdm3GPnfeZx1bcBZFDXPf8n26vNziEHFQLFp2aFcsv8prqvvmmbHYnpj6wTWwjCruTcBUQty35cEnMVbv9QD",
  "key12": "3pdVkssQ14KFoY2jsh2RC6S2wBGGAFBSw4zH99vrkc4bjrCRB3W54akfcHJpTwJDkFfJwPK8PmjmD1f5S5UXKCLR",
  "key13": "2oNc5rPK7bLFHcttiBzMU5LuBruqvRAV8uC5VqDBGAL94KQfYDi9yDqocoJy5oQFL196zRAg89vNQHLiMnGjcp3s",
  "key14": "5vwRiogcCmA46DCpbZNCJzjbJPCzMexuigvU1x9b6Ma1hkR8ayJbdkfDwLSJuEWkDZWdrnbhhKfCGNvgr9EbZRAJ",
  "key15": "3tDDp6W1rXfeGBUxB63nLsBi82swTAjYwsU1QzoXPssrddQJW94ioZuGcVQoZsja4nRKk1wGb3761MMcMCF6hNNV",
  "key16": "ogq2DYR7U3tuX9sXUmDa1mHPDDUemCBHbPvuyBE29XvsaC1XASGTYPZuJj3tv1AszNYPc2dEctwyCDXnPApYk7E",
  "key17": "4CEqqdNAakTLmDV4dRCXpjF6pMPSddY6pqGmVYZU2E9yCWn3v6PPFjq1isBPso8P2GRqbncAmoFe3YxCozeuhxV4",
  "key18": "4TJicGXcWFF6dQzugshA4UgZH7hPbRZxwuvTWiWUrEi6ZXD26QccpHA7zaiHj5MSq3AW22Df7HD7XXNFL5X3wW9c",
  "key19": "3cZB2vkjvbGWN3zAHjzNvKayxNg5FC1SQtNyXRXtMKzAvfsUzJNUCUwff8M2EnTSHUAAkia3UXWmFcBsaNGCyin4",
  "key20": "JhLhyMUqk1qhixQFm2XhoVH6s3fyYkHq2rw6CWwgLfCdv5BjT6K24Asvix5PAEyfVCuRKyggwyj9ZUj522KEdBC",
  "key21": "3KkTr6EYaR8bc2a97AMWuswWJu7y8xdueqoZYiYFLGX1sc2C5bHKLjLqV5i7gYHwHdoJzesFuBuTW32jKMbndjRw",
  "key22": "5BhSctGPJ1qDHEZB3Nd15CNJ6RwR3B3GhJmQGS3UxRXFocgbi1etmLF3yzRifaB8Lf6cmvxzbC8H9nqCpdUuh69g",
  "key23": "n4w8Rd4o54hvLHkkHx3zskEbxmVzCouyjUphpk3B7r3U2UTJaRbzdRcqS6W1qyYfqP6XrAvs8ZvW3DczKfbXrKe",
  "key24": "5UtaY2P6u4b8Gz5BNEnAZhxrgUQVR2BkKnrm7aK9tTmsWEt8YJmSo3qnXqDtYavWW2Mc2md9z747HuRD9eG9Bbia",
  "key25": "2KPRSLZD6Jf7T14Au3eZD51bSXiGrMcB6ic6apXvJnCkSWnbXFpHu4rwtSQRAE4t1B8MeWWNaLT3KY6Mc7AfSSqj",
  "key26": "51rCKSfVPBSwD5N1qAjjNrGsGFrTXLFRh44PzNNKRzG3LYiRApnKbkKzqYhRepjaxZsiK35fAM8LzVNpbbjrdRwv",
  "key27": "jSnqZua4gUSXKohfHGVWkdUyPnHJC9ULoeUvNhDXDr5tJtJyeCGGwi7EadMEwQn5AwhU1QtXiyvmJHdYuVtSrBY"
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
