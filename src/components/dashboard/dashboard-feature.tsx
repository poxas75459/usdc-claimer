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
    "5gbCPATKKfKLz8BEjfvM4vZk8e91hXnnLZJTqpFLDjfm5zvPit9VPrBFJA8Qh3FtPS57vYwGMBKVBZY7RsFj4xQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bw647LfBzJHn5mD8pPxdqjYtpu1N7zBWqPNzGh7k3Zg6fq8dy5GfRwvNoAFCd3HeYyc5cQcDJKJBTmb6nTA57PR",
  "key1": "2XYNjkVB3yC3pTHjoHFe5wncbt9UELQ9dHkm9c4Fh5HiBwamR2YVypTufqJNhsy5rQhmsd1WgWXEgKtR5Z3JaRZf",
  "key2": "e9EHxkLNXx1zqvyGxn1SY8CUsUkGf6xoZvybG5HkYqYHusqLNJTTE9g1GJYM7EFXLpdRZwyZLWdCoxgJ9LFARdE",
  "key3": "2GESUBquAxFZM2ZwZXE1kKGVmiXoaG57BTfJ2wMcVty1HjJrQDpBRx56fzXQaLybZXGs5YZZDp8unCRgjZwVve8c",
  "key4": "32t7FhWPdm5UcofKh18TUWUqx5nRXYg4BYAtRW8779sF8bVWsvmQjr9XNXHG4ifWpiXj1bKgpfFzxx4po7QtPndu",
  "key5": "CWCFrz1eX32JmEJCbGUf2whJ5GFBouFXKzYgVbH82itXGGdpbKcJmtwPzfzicQmuKZ1RvsXyvGYuecE1Hkr2q89",
  "key6": "3uFZ5CNyMoRYU1WFNTCvs6Wfce6gt9KTRztBfzkN6gD2WTFYQ3e5ou6ctTbjZe6uKUphWnKXFq5v8yqrfvRgq15N",
  "key7": "2Tecua6gnFHzxnNgiSuSZ5KQ78hwKVNsmzRLnzMLw7BboExDhiM2SrNkABG73aBNxkf1LV1B8ABkiXNY973Q7Swg",
  "key8": "285Tib9JMj4LifbUpxioBbhhXVcjY69eSdn3soeza6W3M7vZPxFX6Rf6qmrEuuew1x18ZGu8Vzu9perqz6eR8XXj",
  "key9": "5V26hqDi7mEaGG6wVjPQmcgMshnqwcoyA4fQr3qfFBZNseE6d6NK3H5k8rgmqUK5WvDoFacgQQU4DyjNnDT1wPdx",
  "key10": "5jYRrE8V5Cn6T9RM4SJAq6Na5fLynhVM67wh4KpjeoqtrAMmNmTE14HijKUN5yXYkuzjMpmBsU9FcDiZs5PqPaHY",
  "key11": "5t6GAtpnsgPuUULGhSB3DKyBYY5GJKtNZ8aXjygDGw3Fua2tr3kucueFNaqLVzP5v9oj7WkUh4v9fiJAFU2FozjD",
  "key12": "4eyBpnPVLy6zKyd6JNN58fkb1mGs5JwM5gcK7pKvTEE8eAKzQm3Ah1wfJMng5eSPhiXXn5e1jzZQWEEyGmCqG4zs",
  "key13": "XjErSgawDifijtzh1aQpqYiEGkQR63uvavZtiktzNCPStiyVqzLJFtr1dJ2Ac5xJ4s8jdWpLgnFQ3k3fR7y5AwP",
  "key14": "4K64Ypa7DhhcywTDVdqmzMHfoDTm5afYtNFo1sWnWfeChuUV5WmJTDNuJRHdtYGWyBrpBurixLLvoD9do7DWvhjz",
  "key15": "2FDmFP9CpZCLTm8Y8Pa94HqpnBcC2N9kZ7geSDD1ZrjtyDDAyvoxpbhUB9v1MRgA41fMZ2KXgiukvgcDSWPW2E5i",
  "key16": "5n5Y9iY6GVoKqJJ9pr5HjHLSjd3mVACDmJshgU1aDd4ApwxBgyBwE8nZGGya1rN659SguXpD2bfa7VDR2PKBjtxe",
  "key17": "3GzpU4niaaXD6a6zeR49uzJt5XgA4DDY65oFw54q2H75AhLH5vEQev7ZinDGr5xNn6bXERBqwYW6zgT9EKAsucbp",
  "key18": "558wH2rpqF7YwEj7FUbJLjuKcH9WJ47a2oFrEni53tVLvUtZgrAcvPiBFk4JKVsyUTPX7An331NHK1iE4eBUscfQ",
  "key19": "2hq2XNAR3uc3ZdDEqEksXf9hfvpUvonMk7z28wEDv3NEGcNrKUgQiuGHJUFk2C5MWxQZmp69rLCF9iheDsBHrzyK",
  "key20": "5iajYQPEuh2NXmP6BVDSuohYVw7d6tvtEbKXuW4wbhS5CS4KznCmPGmhZQroH7LHTjcnGkd4h9TJshzwsFjNJgfT",
  "key21": "4rrKCJnQRUSTqm2qcFw9x2XUaQhWN2Mh1JMGuFehB9krGbo1iQPmriW4RjnsUpwyKWuPaHGT9x2KTNRe3VTksQk8",
  "key22": "4eY5Vw12Q1ipdb21D2U5NNc78Q2cjFy8GzBbaWW9jAUXazkChd4YJrXaFr4nEoP26B1ByEbXfSqZGKAXrP3vNijp",
  "key23": "4Umx5NaQEQRFH4XqGGPKUd3KXWY2K8j98yxFZcNBQGkU9HyzNotnsNBLCr2M3Z1ikqTKQb9Zt8Pqz1J5vdtsTVM1",
  "key24": "59ziEhULj9CmzXaXp8FoJrRLPK9tJeA4Lpqa8gRghUtG13rkR1Mz9w3ng1MuqbUS5MN3NcA6EBeEoENadQUCheXf",
  "key25": "3iNaduuQd4c3JtRiQBD9D9mwUt4mz92HyRLECgCmZBzCcxnh3VuUqYkbTQzc8GToMyQpkari2Wk9fArCAfWr2faE",
  "key26": "4UU2ebF7fYVNoPCQxX2B6JzC42NVumXNxzPW4cmC589VuPfsakiZ5VmEpNd28YT2rCtUrdpsHFeT6PHFganJ5CrH",
  "key27": "3KSiz8wcbmTfAyew71rJF8cYabVxCKAk2yVHx7mxQogbzeC33hhpQHhVj7AiFxNojzTJE6f9pRXZNCjM2GrMxLnK",
  "key28": "3iuEDVE3LKufivNim1ZXRfm4sNBdtWBEYaShN4Dg4Q9myGThkra37HdnjnPh8mTRcAgbwUbQTAxuV1wFFb5xrcEP",
  "key29": "2ru1BD4sEpqYrNUGpz9kuyBcWPwanCNEr75G9uo4bjqqwypfHKwWVzB9H24w8fGvYGYeDMvHz2Skc9rYkB7Ku5P7",
  "key30": "4AxmQ3RQaTLwi9NeVU9H9ubogQYVCDC9FUQxZU7piDY38tGx8tXsv8bYevfDNNRQkDGyi5ofVEt1HTBJJ98dH5Tm",
  "key31": "5fZn2pkcJxJsHr7E32vzshDrttHdaaME4KAJy8gn5T1bVXfSVhNSqbMH21zid1CEtUsjSxe2FqjnpB8xZXYeZLrP",
  "key32": "VaqytNaj43vJxDA9UXsGRAmKYvktBViBNSy4WEKoZ2LQEquLuZxFeGFcDjbF9Ui7SGnXaC3kKucMcE2W1VaQh8p",
  "key33": "5iiJ8P1rpUTfMke44jnTTSBFF17mzLdTAdiXwkp5xj7sNqZwzVvzTPxxbEiiLJmMvquqfJU54jRUPf4V7Lk7V5aA"
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
