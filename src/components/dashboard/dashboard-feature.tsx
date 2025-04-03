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
    "VD1JsDc8GdxHsMGM5kHgBqceQ2M2iamwxoStZ8JoLwz4WQX7dpd3WDqRXTgRL2V6Vb5FG8e8C1j3HybvnnTkYV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fs324EMKgMUd3A4sQyQQpohFQ1vCJE2xJqGpB1jMZJ4AuuGrHS4pQ7aKZMRb73TYk9wWv7H9Q9KuMUUVfw4MUvA",
  "key1": "RhdCawP57J3BkdqQFufnuPyBKc4gGMNuDBLDcKHSTLDX5j1r9bVrRak963LMU5s6Q8vRWXSoy3xRs9xajKWWLV8",
  "key2": "A2TBaKDQ2awFHBb4jwBiDVHXhpSoiT2KXh57CughkUTze3VkQB62Vj7zpCj7rkhxmCPuSnECbmdDpfhBFvHyf69",
  "key3": "44kMdGFBcrp1sLkCAkW2C7mtn61CGYjRXh6qgU6vbrzsftb5NdRCvKRgDzJPxhNYffVFUTCEfEgZTLeWVUZPaZFf",
  "key4": "5W2GLq6kGbBNLRpqVhCuT7PSZafGkLdeGjNe6oa89veCqvZPCCCS7pNF4QK2S4ktXzEaBh6FY9hc4jrRdGoW4zeH",
  "key5": "3oviUx89XWqA9PGZhn2xbqPhji93gChqvZUUH6VbbMiPA4XfEhd5GeGgE5DuMCq7Hs4CjqHFpWuEQCBG3tqg8Bqd",
  "key6": "TiimjuyY3AXX6Q29smKvwuHC2Y9aUsqXz8T2JU8FRMxkSKwnsig6WeQhoT1ymrpMRKeB7x9WHGQTo74FLD6SCBk",
  "key7": "5qM8jYr6fwYkDaQGUxghGCjDCTsHbYkm1ouuYwRfpJTDNn7M3oWrzy8SYdzjTh9k7SiLYp85P94hZBnAvXLsBZLi",
  "key8": "2Lg31PkkrhiqZhbcHFtYnGXa9JS33GbeyKbkyLqgg3mtenZTgDbtHkQkygt9B9jvtA7FtRp8i3Fp23GvwWdiixWb",
  "key9": "Y3PoT74J1f7GJdUpjJYyDwuEyc7NbELan2cJdnPaGSridtkAkyKCiB7AiNdZQp9QRcA8oSQXYnv79NsVqm395wL",
  "key10": "4eckXDX3pTZuuZrNJHxur4foTiQShmoE3aeBoiUK8vWQKS2BnccqMA7eu2n4HbdYzyce5icu1R1fbnotbNi5HaSs",
  "key11": "23N6E4Pu2prRqX1UCd6ykAQWvDAS16UfW4Fj5HQZoHz1D7YrdhoFiYH9WajzjFageZTfi3X1LT9bjXr1Skx9tiUX",
  "key12": "5LWjYjAboNUU71R1garr8YN2iGomMUgU9RGDT3kvqfopzNyzJQus1oYgFsikyAKr51FAaWTy9neLm1gMUXf55kam",
  "key13": "fJBFtvBhyAbXP73gqsjBkk6hXNUgVnrV6zkwLTwS8QdP5QWHKoetsfoFqfQEiZthSH3R4gH5bDcAg8WFeajd66T",
  "key14": "42PUp4fEGGLqtuUHK326S4zcT7wDoAMof59k8Zi1MQPCv4VTerSH2UjQR3zRT9hhTvNJb7t5FwD1SfAvGzkPZ3KX",
  "key15": "ry8ERmApsNSDyTeApQxwUDeeDcfy4YfdgTjdSsb4PvcyizipipgkoCjo2uwm1dFyZ7bEsikGngZpfoFpN5bDrDm",
  "key16": "RverRhiaBWr7iYsrZWSxgBKtKSwaJqoDDH6cPuCzRRQDgNkrAMk3VSTK4D5qb3BWGBgZ9mmUK3RPx6MBsJ97NnK",
  "key17": "4PyRYDZBYdmCCwMzck5CwAnDbfGEtJLsnD7zQVvnJ1vnD11Ab2wV4oTdYkd6avJsjpfa9cpKx27aNZRqZ42EdRMq",
  "key18": "4jsJe8QssNwEMRZzH3jYM9jDDwHYcJ4SaE4ujJHiVGxvo3QstMLb8JhM9qEgnBDUx8QFSL9wMk1Ka1uTNaf466ed",
  "key19": "3gk71TJvM5jSVTczyfwdN47ppsqyyJRPjRQpJgbQhHBFUrSJJg5Y5JufbYV2qjrmV1ncN3C4D2DtvoK3Tw7TDcbM",
  "key20": "4SFgKPLPvz5YVqMz7zuZG57yUB1hLp55rbb5bEF6GyWJKJMUfeAm9EmDfQJEyyWeePVPXZvKcc33BErJ1Er2qRMZ",
  "key21": "3JYzswBD2sZakJGCgofyxZ3bSi6dcJG5SUFBGXdTkjCdwfbsTrgJ6YsEjBR9gDgDA9QLXGDHCbX4tVWyQuau9KhW",
  "key22": "kieCPFt9n8uoXre9kqCGbkPvAnr5FSxDtG4UFZ3oR115EyVNWu4fVsCDzpw6538Nrvyjv3Z5mN5wSRqNv2WAhoZ",
  "key23": "55sPTrDm7sqW6cFcGgGDAYJnTcCEJGfiLLjfLoKHoBEu3NnQYtaCfaxuJCrsstBBVtPwA9ooTcb1cr4mhEJCa8H9",
  "key24": "3zBsrF49hkdBzY6YMwrgS8485XcKW5HNG7rqTajzgoQhCTVfiRP9KQac64PDhM59dg4ZxhMp8CNiARoRmkH1bZMc",
  "key25": "eHxCuhHaHovvhSUPC7b9LfQGu3LA8McDA2HFewkTrNAhrEqKMiRAMBvoMFCPB9555QFiJrqxDJQDbwLHCp3JRsQ",
  "key26": "d1uSXcG9XEGyHfpUSsYTjMttGGY52pD6K83HgwAN27CBi9wBAnxHKT3ceQbEdouEPhkaF85U2JH7xZKBsiyaPUH",
  "key27": "5UFUqUfqEFZbao2z1riwvhRTBeavSAj8XBjdqeRwygMSr2BbPWnsc2tscvfBntz6KYiy6HzUGUkWFBWGT8UxsqfW",
  "key28": "25oUdkEMUcVYrUYYzRAqLPC8g4wsZmjncm6DZhZNAB1gvG3bpZ2s9Zn1pbZeFB7q4nHec1Yfby5pKNQEPd9xFT5H",
  "key29": "2dRkJYWeoVFrXYCijihUzSfhyc5FvDJVxPT4o8qkz3o9spJYdfjkfKnenSQJQSzSFBA4xXzyfdRjFdj5hcS45xx5",
  "key30": "2SRE3gKKAtSSkvcFFoq9fshqVXLUT3mV667JSZNUptxDi49buyatkTo8KtZcM486LrrTRCYbBgjeNW65gYyenQZT",
  "key31": "48Le3u8j9fLCnrCg7tvDXaZ7NTqfyYpjevnywo5K4tHD5W8vcaQpUNXKR6mNpmkzWrNBMxtyRE6oEUeht9EaFhj1",
  "key32": "2HDaXDYHs5onddE1WggrtVXMGUwYJhZoET52KiSiuka1e3Adrvpinre1WSwPsRqupfSKiuFMDcFM2Se1AsKceM7X"
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
