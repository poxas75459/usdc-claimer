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
    "4sL1YKUDuGwfnqaHLRUAFJDVXm1mGCZdNzJr4NLQ6FjprnniQzZ3jRtFDgRG8En4P7aTRvU241o3GybK7jjkEF3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZfkBLqMBygQXfjHgN4DPdRfgfDkgDBphu4yFvTFCQ1Ypz5vZkHWxuUNRGL8TMXiRJkASvZbnmhGqFRcNtoaKUH",
  "key1": "5YdiePAKGSpB1fDZCVjngvtrfNdPU2DqjgT8Uk3pBcdwBihkvWJk2fMqdxMGoHToKgYjXgHLdXwpf8xHEsPPpaHm",
  "key2": "2eYXUmWp2ge1Kce9fyyiEvqGGGnHyyBx87xF2W96qi78yNKw7CUxx8geBbZbrE9TcyN9PZF185p5pDLfQbFqwfjD",
  "key3": "4QcSnYZfa794FPUVj1wT7ZernMB8TkY3cCekqw2V2oJaFDC7sajxW9R5d8ZukFw83PJCt8aVigTzPFQg6YwpADCB",
  "key4": "4P8WZo3gd6KbisUnUi1erxb8HNDdTYUwusX9eoQG66zQ2ttKHKHDSjyRArMDhALmQLMeENgT8CNQR51j7ER6bBPd",
  "key5": "38Zt4SPyd3UeDwUS36dTT6ByzsBKVvwka4WpkMRv91eAyJRqTp7Gq8AR4A4hyTrPYMG6UvwTtASb43yNu5S15a6K",
  "key6": "54A9UoELyvoaQ1kfaT1ed6Yy1vweKWSjqTXLHrfJxpgeUYhY89mGXYgFCuHF9kTFNcJnBXDLkEsJBbtpDY9EaRbg",
  "key7": "3mHrqzDbkL1qtNECQG8uVEhrj1tW2bnZS3Hw1TuGJEQroc6Ae8VYYKYv4o7ouAuWFZjU32wwfBd3hP8MYzPhMpU1",
  "key8": "3VEL8MmRCGRHmWf2QBGRAqiZijNF5S9cv8ZeBN7E39MpQrqRLtvFADfvJCyFw64WcqNENdpapKdH9SzwwqpacEMJ",
  "key9": "4f7U6oE7WntUEXecf5j8pNnqwmonwepAa9Y3URZuhAESnbo6U4DC3REpLd8vK3ft4nNxe7DiokMH6ZB67K5nrEks",
  "key10": "et2LhDq8W3gqJcxyEPrvxPtN9TWoduMSCBRoYVcK7saE8jqMWvXCtxCNBT9KG8rDS92q6mYXnRvbV9eY99uhaxh",
  "key11": "2bwHQRKTCKDq2Ww3aPydZr1D4MacgZ5iDjrjFLa8qSghZEYhAxRRxBfKmw9XhDc5Vi2ckT4d7B2nTP9aNW8chi2b",
  "key12": "4oqNPtkQgCv8PbDLmSHNaPwyj5ASzUXo7DvfiA9sPyvb6yEeQ5N26WYMrdULn92qDBGb7HdtMS6whEJrCxGHWUs7",
  "key13": "5ndNZVoSSpm2G6mg1cG2ijnvUnWDDRJz7ieHaNYkcxkmFUifLvTLrtGWfuajkwSCY7eUWA9Y6zYHKbA2PqnTjLtt",
  "key14": "2LVZyK5ziefkLZxinNK1kbuhqE3i6pTxKKVovRQPEXsHCgt9G8uRFuMTF7t6xniEYUHowStW14ntYfCgFcAy5L5S",
  "key15": "5Jmd41sx6U1D7P1UhDndSB84NfW1wZtN1hU7oHg19HWGMuN5PJTSrsh1w2KB9sZYh78hu8NYkYbwWZYrKFC3wmhD",
  "key16": "2jb3BYQd1PwhmELiH2CkG7kpLVi9dNRTt8e5mjCEUzqLJvRnCCnfVAHJb16EERki7TSPk95AtY13zHkKme7mQVJH",
  "key17": "gskwXmncWqtbEjRBQyJnDT8baKphhecEBVMjUzhj8PwTvwWqAf79y8m91BPbJ382ARD2mhjHgruELnrxy67v85W",
  "key18": "5d3Cu17tpP1qw2UnCGdV7kb5jbkZpYKmDzxbTUKzfcPbvTSnaxkHYZf6dq3J6nUS5UNpnd8D4mmfjwMeatXHRyEg",
  "key19": "3MfE5eDmF9JwsRecjA5PsTZ8UBs6ynhJXDjtdGkFsVyvznv2PYPGsLersHC544CZu9yZDiVrMdasEQV9Qt6QeY7s",
  "key20": "2wX6nMXLm7UNzGP4KgBBWHKnwRRJre6LGshFFVVn3d4s1RWPxgxTmBUGJ4qv2wbYQqp52HYzKEvWY6YXNFEaxt6t",
  "key21": "5AodEGQqEcM8eCyECqULdwwZPRKayXLWNERmisfPwWSLcCu42v1cBfrUbm2CVcTfoKtghb2fhczAhexwgRtQqN1K",
  "key22": "251ag6uRJwaQdP6M1UAN2QJ8cFaYKQY8MZzifQvqQ59BcEEhzgbQDFktEmHvLRkfNnXaQevgfLm1ArVdi43vERg1",
  "key23": "RphoZpU2wKTgR7UDod9PjJvgPFaDBVEB7TLRZYm89AbtcrYmAstoX9iD3UzZ2u6DJLz7YTbmL9NAE15Ku1BUwG3",
  "key24": "4QSy4HtLqi1N6WuWbcVmNu7Quq1vcYv8nDEC35fREFmeDSwN4dRkBmw6HxVx4ab6NsnqHHaHUZ64Cy5bFCoh6KMF",
  "key25": "2FJP79ei8KEKBPaQnREKyaLwTXEHFUgqSFDBHgCuaqa85a38JzAjhaXJQtMAYoqYRWozyLGYH9PuYeJPd6eiJ9dU",
  "key26": "65fgEBWFjzvyqPqAbcwjwP7CQLpncCtE99uCvHJ2DDLnyQ5ikNJWBAP97krpTKcHsT4MBZNp96qESobwNDSBTcUJ",
  "key27": "4CoSLEi9niXTg1Cs589aVp89BSkoDzNMzoQi6wpSGPyZRcQZ7KSHBCJiggHkiQUGFb9iYrSUBphkEV8rvVgPjEsb",
  "key28": "5Q1oSe7JsgmrrJH7Ku6qcGrQfyjCUVpLfoxpbPLYDF8fK58NwhMRMAk1j5nzq5bzLiADzY8v6pe9ixxUSR5ZTTcN",
  "key29": "5pTZEFVyYNRtbcGVFXRJbUUJ6E6fYrShwTrCvssL3Seds6K127YgcpaXKx26JXtGJvFtvsQL9nSsqZiwmTTc7H5N",
  "key30": "3yCXUBSP2MJE3AsjYq9bMdmKpAmQRETYLxLC7TQNYR9yVmUKS1Jazq56bAf4rZw1mfoyU94vd8sjNat57xo7pwy7",
  "key31": "w7WspNi4A2Se3kaMoDR26kyL2qTdXfSx2xmJ2eS2iTEfa6ux7rC4QTQAXPAJQWU7hzCm3k4rHpQLPC4iQMnJuoE",
  "key32": "3nyg7V6cDPStE2pKCBLpbci6qMYxFtMnm7zxqfHAjGnXU99AaGKJpLVmutb9r1rzai9JcLvWWeqQW5xG82xG16iP",
  "key33": "41wp1H6MMpqvWQ83RLPhxfvN15pgTJ4RnpCRWgVAc6xKnVVWCZVjgGAhTbFYo2Fh72D9PhxdEZXxjGLhfzxHLR4F",
  "key34": "29yTY74ayfvY8BfjW4BYcdnptwpyTxkzyBeL9SfE7cLpVgSnXs6tRMtDYwF3HdLn9UZUUMopALHArisDFkBvNewd",
  "key35": "fkRfN3PrUBiMiukigsPreAW7rcTvWt2kThM4TTBPnbp44iQm3AN2XWqUvzrdS3AgyU2tguA5wiW63jFJDxpv4Fp",
  "key36": "3Nh4psaH24sw6FMxJbMDT2k15yvmw3R2QrJRtRquMUETM5jvgH98AJiCHd2jt23mKuxWNksJECQafSMLt38f9jVm",
  "key37": "52MQXr9XFgD8Q9MmkyFDUQzCC1Y5pnnv3rdVxHvsxQvpPJcqY5io25hdheSEPYuM5NHZ7UZmUDbGHB35zJfnqYTe",
  "key38": "61rLwdRJhfrjoTNnSn6FPdKjqACvw2NVUnbr1jGeGWzaRMwjx9v1LcMVeoq6w2xDRJrx7Rbu7RLGMSpd2T7tKNNA",
  "key39": "2sDTUvRXTardMyqDW2Chqmdtc7HCXautL8VoC3PRw3egr8HKSzTK8Lvtt6zG4vpQ2hLEhToG5uq2jCBR9Xzq1K22"
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
