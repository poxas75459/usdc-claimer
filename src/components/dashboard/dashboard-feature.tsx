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
    "41RKw4ECzDdzDSab82cW6Rf21zaADxmEJBpQRraiidW1d9ZX5wKRUrddZ3YJpBkHRxg18w7BWZ43NwRQwvsZRGjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFNTGTQZazrxZkBpkcnzqejRkBHYq5AKRWFJUqes2TyY7mjayhHQfKNbty4vBhvNutg2sLYC46M84K7dj9Ae2jb",
  "key1": "N7WZUrPbEbQuTJfSiJovn6YKs95U8oEJLG1hV6dJpRsYy26RueCxiSqPHEMSbsLUdrjZ7X6kMu17SmYDp8TCAFA",
  "key2": "3JMRXA2coGcnfwuvE35N6hRe1yFEHJT5QDSEXqGHnke3WsBTWsRvCs8St2MRPkbGdwLMR2QFRPy47GwZm5cb53Wg",
  "key3": "2VpC7nV7pwyMW5cqtjgBEocp64yGpSs3qr3gSGaMM8SHB9m7vz82pSHgHw1R2DHtSXcQRjRsWJwJ3U1jqJ4QMkeJ",
  "key4": "27hHWfo7WkZnoJY38qvDasNz3j6ctAvkGqHxTmCgSSV3TZFikPWhESuZp7MatgT2RjbCXnndkZiEwFSrxroVT359",
  "key5": "2x7t43iFpefQniZfXnMvdTu1ZEKNwTiM9KbdJVBzKFzKEE7fbjK7sR9gDz4cieC1S2k9r9mkyHJHhWEobYfuzfBG",
  "key6": "2UhsoXML618qeXVjMpvFGQ6ZnNwbuhHTiPpeGAuaT4jqiE1Qrp5LdAVR37S8LuhLfieCk73VV8s4uGMrD58SXxPq",
  "key7": "2sPEBh5P7NHYdTfn22eikUoPJwobX7FsAy7pg3rcrvaPT2PobgWaygSavDfjiQdhpUsRkoLqU1J2SjMQGvXCzVxL",
  "key8": "4oCJ8huPy3vqkDtG2FHUUZTKpnqKK3cYkUGjvvGMwHCGNygQF4wbUZkR28bxaE5Ns28CxvQ6Jdx5irX4BrRUoQcq",
  "key9": "LWgRtfLrabux1VD9tMks1QWu8WYUwhpBMmKc5MnACpj6zStS3ExhJEhmvU4k6eB8n7N3Z9pf43UUdTZ37piXMSQ",
  "key10": "3j3PXJbN6wpXPfqeeFQEumisqcGLWwcYdau8BUeGgyHmmpDoC6Bg3vsnCvpiUdbbZ6fRMcmTJi1UUcgiM6L4jmgv",
  "key11": "W72U9AXCwDGqDZ98F6hVudcprwbDbbea6Sw5tteCu6ay8g146FXJDzcp2qpXgxN4rAfob5LwHHQ3QsX67HQr92o",
  "key12": "YB8F3hRFpkbqzKnyZ1jMMHHS7uwLwfsGVjdhan7vFGcAYMzWH3NU73Ve2it5itxxoYL8KJGb2sXTa7B6PpNbKTQ",
  "key13": "3smQ31m6TYoWgDFjsbaxt24kU6u5trD42xhTHcsZ6GrUAAh7MEnYgBxfxD7bAFkCTnijqgwajugsmXKLVCc7QgH3",
  "key14": "395KnmpzKGE8ot1K34RYGSbqJPgM6VysjXSdxLFaZeAab8c138AFqyLTe9m5cErX9vwxHuqy3G4v3wayt1ni2X6K",
  "key15": "4ZEWUR8oGB9CYaCZ6Fu5UPWWiYLgRCF9h289S2gvmMPS8xKzF9ecaRLZkmBTm8aCh85AbAp2X9cRTvc85dtBkECh",
  "key16": "28B4jL82cLFjnUMemUJnUPcSpWx65P1pfb3zbueYipBifnqbdgNHauxSZwarELBqBUNSqUtMA8L2CpRYbcsVcMB5",
  "key17": "4TDnboAXKmb4RUnprA9c6AeLTa3UBWViGXQ96BNAWW536QtocfTbdZzbsQnJcbv9M4F6S4UPRMEa8nXZNimRkDQu",
  "key18": "3zbRjuYVxpewDAGtGVpks65TNBAU1p2nRR2cccgh3MqFmPH3oegozdKYGmPiXr1ysf6KKhgyAZPXTYKTqWQXt3aQ",
  "key19": "5UYeVzhyNZcNxbDbERqxensoVrmcrashssTcduaDEJB6kx1hWjiAf81XCsgem6djpCnYnWHjKSA13NEq9thqfVTf",
  "key20": "4SWRsvBGR4bKQKNwwXRvyuqktoC54L2avkyS5Bd2owJ1HX7bLBFRvUiQ384RPpzbG1ezSwJa8HdMR8nZNNK6S3YH",
  "key21": "4z8Lb2oBirqtcJLzF8QxL4gknaHu51BAd7mZrxSQn2W16R3Jn2RR5r2pHvQsmmfgKgNFqc165FXsmihsj4wUBhCa",
  "key22": "3JLQoUwDPimZCALTbeRGBbmYseteHnMHUAX2rPxUuRTGJWbJ8tSSyoXJcvjU89S6eWb5asHmmgNuFrMae8Lu5jmv",
  "key23": "5Pd7bC9PLsPWG79XdCwytcDD6Pk9g4LxVJ8xQj5mdqgxmLWR6a9WjQVV3mTz2qtsZW6hydikScnZKBB133ZcXH3x",
  "key24": "4VxXmHywuJ7rhwbTsuSZPtGqsNkKw9P6p1ev4kaXCxUqSP1wkB4XQHmFrqkDchMcRnbCkMc8vmrFgTbgmdMpLJFo",
  "key25": "4c4WPNqeD6gj9VSeb7otnJBNEmHDXjNY7UVotkmhXKAoiJkDqBiQbzHWepAChKk5J7uWpW5df7BM7bCrW6HT5aaF",
  "key26": "43LNt2NfNeLRnRzxPpaZGxgc9Dhm32wk1BDDGA1Z2YbWN5E3NsJ6TV7xPkTcyBJxQ4qVR9m4ftWmiDkNjkMMh6Yk"
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
