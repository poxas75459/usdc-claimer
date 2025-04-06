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
    "kVY11crnjdY835HKRL8jYRVhAGfhdpx5LqbBuWzXVC54mqVGT7idJo7ycscHrXoc5D1Q9UQU86GQ7k1wfpMpBFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpRs46zztHWiMYrFvXsd6eG4sYvSpB8dJWCPc6QCJg2hc5DgqdEZQ7W2XJQwTVBTvnmHt8LqapWKR5EHQGTvi2G",
  "key1": "3f18hGB14ikf6yws1tmHgDnwKqQgNLEVLfpFjypRPFUjpwJCucwEJFWqWFmfb6zng76QcWCrpE1dLx983HAf98zA",
  "key2": "5D3US9yyssoH5Z9xoQmnekjvtPysrL7UYQ2nqeLX9V5cFMYCXFNJhxUEEB4SvhQcpxkHjXG7pFPRWAxD7FNv776t",
  "key3": "2PPsE8Pjrn8NYK8YjEBYB5Jn2RauwrSmnhHochF3ViDr4jbQ687JURu5sBJnZjQ6dAUUxz2pganu8sts86DmqRF3",
  "key4": "3KGxNFz6F8Cu1Xks6hxkxVZ2fxfERH991HyujdNpjy1DQVvfMdMZxrsaz7UFWZ8VDaj8c1tny4uYZeimJCyH1BA4",
  "key5": "2L3ytntMscWckUL5aXpn5tZZqTSDoCrH84oBrjU59tpyktX5WPR2Ygmujc6AsUhM3fdrUfLLTusGRaRMngX3jxxF",
  "key6": "2UHzMcHrB41DNDwr2VYV7JqzVCNL7HjDtpWUKQugLhB7pXQk1vMSVaWezqc1roKpSmf9QDAjdoeubHYTdnMovH1E",
  "key7": "5qTRrgWmRLsmeyPdwLrMJaJ6LYgvY183dDLfW7YKtkMa49M569CAUR7bYt6Ab9u7TJNuXmQWeCrqezwHBa3SemMw",
  "key8": "yTQNwp1jUML3LAvhZ8kYKSa4PYLrPrPDF4cYq6uCFaRcTKP6cgjTwqr9w3nnMvGAYa2he2GpYixk92QYAWH8NED",
  "key9": "5z15Fi15ucX7rfZxD8WxENMekgWRfq7znRVPjWBMVHWR1DHgPaVokJd82xDLmrYTZM6Qchoi9afpMxsRDaAfYtw8",
  "key10": "3S3sYV6ZBq6v21ybV4bkHJjr9C1ji4YXw4tpWKG5WVWc7x4x28rWsFkrAEpPxoW9xy7eTb69XSHHN5rNH3pyQRZw",
  "key11": "2iJKR5y6bBrmtFweHFvEjJ4CwqDsCGbEyFi3Xv189EbB1tyhr6kvjb4BiMub9KjnvQEQqYx4nQN8CakSAP26ChrR",
  "key12": "hZ3Q1Bhw3SG8KdvcMLaSgf5xi9wGEVKpSGUt3YbVYEs37XRTBi3rBTkffP6sv9Jjq5RL1iTQP5xPbNnQgM1FEpK",
  "key13": "EqzJY89VQUXv1Wdx2HeqxRq5mMEogNsV9mSzCgscZDJTFXC9Ggw77dLoDmTq4hD6jJMPj17uV55xbmy1mkDFC6z",
  "key14": "2xTESLKFWVUC6N9SZKR4uh5DEgNghVLfxKEAshQVNGL1cX4zsWBugATJeQzyydZbSUvjgCKPHCrQtfbQYNpcGmbU",
  "key15": "4GzFh7d7ZCM6BqnSMd943hUEv7xnqWha3hRD7rcPuec5ECAFQzxQSA1tWbjpESABNnT4xuVakpiDw97LP7PEWYgu",
  "key16": "3Ygaadt6omBDV2wJFdp7JWsru2FsCYWp2tybkxb2fBwGfp4otGy8TdbkpBj9DVP8fDVkyqwoRUVGCgPhdQSoYSac",
  "key17": "392Mppaocs2xr2NjJesiXvCFCY4GnVQo8W2VZMNWmXkiGvZEYRxWcRsJu9PcBwus3ptrsPQeeyrqNd73dGXt1ReN",
  "key18": "4g7cDFtSsZM3paUQbStawFf4brsMRjn9KbzWrJuWxkkYcf3Tos8eoovXwC1ov32hQANL5dp3LoyxGFTQzEPpF7uX",
  "key19": "4Dwa1kBvh7z5VsA5te5EHgikDXvbhGdiVLVBCWfSo6XZ95f8pR2cuAxW2YQaRpq7oeuV477otBC19DduTXi88tGV",
  "key20": "5eWPwEjKozmLMXYa2v5AhANttNvgFrEAoSeFb3G7ZLqECdbBZFwv9jfKjdqN79L5BA7WHT8E6r3Bfig9c14VxX1M",
  "key21": "hHa8D4VvEP43nk4v1RWRViGxAGHEi3g9WRaHcSVDMyamnpbAjKZmvihhL9twfdf3WPXteBi26sDrJ8XQaS4wxW4",
  "key22": "4ocZ5i2cyaoAgP8C9N8c7wftg2uNhCHfv6PeKYvVC4mKsTzqVUGXN4N5wm47fCem8qW2etNfT2nF5ynJ6kxaT91q",
  "key23": "3iN9T8TiphHxQkx9RDkHMQi6yoK4QrXwmoQeVgQheQC6QioThpSceFczNiZmxYygoVfdhqwHB3zXCxiTE5aTSsDT",
  "key24": "Vg8pZMkAqhQZTsxrVgowv64j1snfEnC7FE9DfHqR4My7j6ib75k6yyMAFwsnL5mUyuQhaSryZNLqknjvaj6ZSd4",
  "key25": "4xou7wzuWt2kA2CANagyETPcbmbXGc1oDk9ZQRHmiu8zxfw3KZyCiL24m22SEW8Ajzv96anDJJLrmbzWEaLyvV8u",
  "key26": "33megSBtE5RnSKhzTKcfA8XECgbeG4Fd3GbuCuEmf24BwmVryinMWUraqWMRqEef3KJa7jgyAFuqUtk2Enpwo1G5",
  "key27": "4fDNGdQmc12N4jdeehjD4QiAT9yK8mzzQ5L7n2LD7cGCAmKVs5Rp8maqwFDbto74ELVfDemHQYa1dcy11ugm1oMY",
  "key28": "niovFHhkMoPKKpQqHZvKVdjCGdL85oTWJo5kNc3WPTTGNXycADvvn8ApJTArs1ReMpaKz3omEk4sF43VDeCLkPX",
  "key29": "4BdKh6DNCWafWPVdC7KDAb7ewQUTbcetFa6PKTrT1vpfqP7dz7uSnpMzPPbk9PvF7qkozCkSw5L8F6JLBVqZ98AQ",
  "key30": "46AnoQJMNZEnSjNinmAsYkns7GesACkt8XGAV9rBaeGSovQZxNM6srE5DqNVGrzsaMzgQeQANevc1yqpEfd5LYnu",
  "key31": "5CHKh3RFDVywAHcSna29aio5NCXx2DLcC9BLKjgk4k7Uf5h5LPdzjeuTq87fKFZJENjSD9i64CJVojA1cX3gafKS",
  "key32": "UJfseMdNyvE6EiHGVDDdajX5XCAko3mzFKxRq798v6o7YkxXLLuNYbp9toWG5mCvgfhXXdteT8kHxYKwfWjQdpE",
  "key33": "2WzRGcUUgktbjMamvPuUAP83mwV3MNzsNMtteDRiN48rtT7rL5jhx31ZruaVQsoaqqwtLYMT55g7PkBcgEXAizK6",
  "key34": "2ijSTZ7LQd7VcYupArNsBv493PQpHtEKryirfxqEcuwJgKNDJtDbknPteWsb32g45ajg5RPh15cmPAh6eEYpor6w",
  "key35": "3dcwraQ7S1wBiuLNCw1XmzazzgzXdm6oxnw1EWsBC4GVrZ8tiSUFYAoFH9ptj7nCdjgVGd6pRnTSiphEvyCpnkMV",
  "key36": "5yx8B58dUFSbhTzmsWSUovznJiJatH7U5syLjMnQM8Ecmh989d282xWMrW2K3JF3mHTJWjy8gZUGXf6SKh78H61N",
  "key37": "21yJTYrHcGBVUqJeHeprAW9CsR2Md54Zot5FnxJoGuw1ATtFcUiHjuHbG4qfq8xWR2iMtTQDosXRLQRs5BorzixT",
  "key38": "2pydDpNsK5eYUFYA5whwbss4FVabXmKxZXZEJa7RBgQepVZWSd1j9KGxjWJE3bfGyqESkxLNCDNWDEPW8admRzJB"
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
