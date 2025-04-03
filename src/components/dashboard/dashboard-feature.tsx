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
    "2fYf4aSCabdqyZezTDCDcAqwGCNvb2uYG1XqbrzvA2jYayniM5tnqXAmAmAdjP6kem5HCN3zPotynYSynhnMgEqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9oTzHkjszDNSV1qJeevD8XLeRGJjUJVcfvT25MP5r9Avb1Np28jctjHupx7iHRZ8gJaWvEc7U9yVzsSXV3QrNM",
  "key1": "43TrcYYg9C4b4ncsRRUQQikSvNqYFHoibQdJrrDvQnEESBGcDzogNnH6LXAVC3RDyefcdGfovFj9PD2nUS8Qbs2i",
  "key2": "31nz2iySgMAdnDkJG7Tm2Kugq8U5sPjUfqvMP9HsoBVa62mtgVKYoqRUV8Emf3fZ2v6vHCY4sedPzKXsqN4gjQLG",
  "key3": "4EGuhDaAfpGVGZ5PzK81yQNscC3gs6Q4mkCk2muKR72w8oZp6Jtqqt2TrafkBv62AcdooWhaN9DrfnpmjeghJy42",
  "key4": "5TjavopzQA1LAPZL1dwSAeU9CudTCLP192vjyhQHMV2WKUFeKonvV3gU3J3jm9S6cfqQDowTvkHvgbxBXnf9MnAR",
  "key5": "5kMWyRzAkEoaEjS6N86GfdKQSumTHbZyYE2hHf6n7YPN5oskR1hcLzhy53KSC1dPyGhxPjqQu6FeXbMtJCjUSHHb",
  "key6": "5DdMjERn3DiEZMxKyRnN9aFJNM3HqGnU2TtMRgRubEsABGhFSLwtXcFxCTY3oyMPS28EF5FV612EaWGgBBAFujDm",
  "key7": "3Bxmf8QBsjdyfCV9pM8rdU9hwpPWshdAB83huBXZB1ayp6ouvv3kjsVX3V63FuBEDJU3Xz3mvHtgz7onQD2ANUEj",
  "key8": "4DwZvTDZFa636QaU5reN3qRke1FSmTptMJ2Uc2y8b1sLUkuPSJT9FFUYFz52C2sCspSkWUho15dFx4C1cPdCcvuY",
  "key9": "5FgwGeNUbMPVYrV68fdhcXAXP7iLFxCzDMdSPSM8xEXZ9R5ATSPCR31Whjijo3AXh6Vn3ZUbt2wcGLk5brMiUS5h",
  "key10": "37xzz73Nrii18TxLF4jTvKJGuJVwcuk32xcYCcf9EbCkEKfxUcnWRA6CMb3h7dU68qcjHfJNtgndD2ei4vdMAd4k",
  "key11": "3AnuEC42dwbXsWtFrJVraVCcDEBKcNM5Fuwav6y2JpK8xiK4zmoTfYC4axHRBCE6MQRwprQyGdcdUH8R12g56Jhh",
  "key12": "2xHpoc5e4XfXjQJdqh7gstzVYXK22CpaRfaYF1ZkEJbheTc5eRqdaJ4CWGUvw1G9KFZD2Fx4Yc2oV1aYzuPGSkBB",
  "key13": "Euwpy3m6Sd39pFTwpFYQJbDRXFkyi5fofBqwgA6LHNmwM5Eu1YABNkXk7qX3mY2WUVpZikGCGgqJtJci1bgMVRS",
  "key14": "3QLwgcR4PXT62LpWXbMGenmZUHP1sjHq8XmJxCpGH3SJNXpxs4fB8tkbXn4JZdhx3wiZU5ZYcYxH2QPhbe1VbHdR",
  "key15": "sTg3Hwu5gzXy8nwdQmKp57YoFXKXhzTSTpp4xifikvwygqHe3pWyngydPvXJT8gd4uU9QWmpcy3mK1WaNFPjcWX",
  "key16": "3nyAWUwLuNt3UYd4abaEkNsH3MoLeovHS2qBSPppozX5raN8CywfpfsrGqX26ojmVtHBuqF9CX1bSSEjejnACFDk",
  "key17": "2iixNNdot5H7kkHGvTNAtpwxj6ztezmGUpho3GmxEdQuESXoyibeG2F8caeNi3Fgcd8oc2RNt6WrgrGJii6hVhn5",
  "key18": "4hTzQbqbJAQygcdrGpg49Dp9tJSfxLUxGkfwfyCc3qreM7ETKXhtwia4zXBZhTCWo1M7C9QM7cSaNi6bYjqE1iNf",
  "key19": "58ZY2xJyHyQUKKkJVPEYFxznHNVmrJwcsuBwmztsC7rLHvivuJfVDUnXaJxHxq7NqPNyWQrCYZ3SfgcEdp48QmhG",
  "key20": "5BHaqor3kQruGyTbzah4im1SpJKnSosXzD1NfkbdxzykD7kHLPt1XB8R3oyrNkkzJA6X5RxXHFSzdqYZEMoCgpLG",
  "key21": "6qgR7qvVEUbKzXr1bYKYGM9yrS9JY9WwG7ytBhuaFvz3wpMW935muPSV9Jpi2zk9mDgU8fVK11RAEHHCpMmKDD7",
  "key22": "5XPSxhzAD9m89BjAW1ZpQkWxHyXTtbZQ83JQWE5jZSveLDV4g4V6QDoNu2CsebzRce5972RJpjCvo22zyAVV8KG3",
  "key23": "5PhCzu59k4HTVmd5XsLPdTQmDRSouKdonwhaX5XoYcZ7boZMPc4PQHuviefzjiV6phJo43WA4Li1HCG6mN3679FC",
  "key24": "24dndpgcrEw73eQoxirNL5259aWsYBxqnoWABNTjp2R36xUiMdm1tDK3vMxAVhoZex5J5o4XstPaeYPnmDnPNgmJ",
  "key25": "XHmnuFuPyayYg3v6WTiWGYCanb6BuZvCTY3vqnVZQ5ysBY8i5HHyGJU5Uca2NCQ73SpCNzxGFsnAtCFE2CDS7wG",
  "key26": "62WFXW67vkrYGS9vfixPBdEdxUrtpJCHTzNBtMfVQaRL6JNWbsxogocyxPQojYz6uBZ3KiCq7rtdsjbHqfnQKdpH"
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
