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
    "CHLemGnvNCiabv2jVofC3iJPbFj4Gc4iuazCdAAH3WgrmznkoDMYQCHrLKrt4czYsf6TB3oXf7e9GnN3CGpkvag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYT9qpHca51QBm7YV1p6rpcdt957Y7bHztweh4jYjQ3neV7Frj9Fz5sy1acAvFRzY7RC7HFQtd5e9gmvR5z8sVa",
  "key1": "22Ys5MSEidt9nGpnTdJ56JFTMqrsHJwhh1mRPtQNEMtHJ1fbBxPD6JhkWN8vC5zVAufVJxXCc5PB6nRGqarUHbz7",
  "key2": "2D6xuu7QSbHwyZJVX8KtQqnWFsrVs7BMQXLPmUwQwwzBsuXxsJ26iF6G6iiDkeFbeJgURS435amwQWKLntUxakn8",
  "key3": "4zvBffpiEErGAKFDk8yarcieAwbDZdbwGhjqf7knhGGH4u5Skxuy61y4YFD66fEis3kBV8MFqfwvKaSVkPHMcp6f",
  "key4": "2KFSQQ8BeJqZ7bjXsrk1jbEh8UAyjczYfvFdkCRwf73JyiFz63fjUkbs8L77G8foHGyDFq4KGRBv2JYG9Zcozyfr",
  "key5": "4Z2nUjZdncWn4PeDS9jQy4RDBaEpWxbprDf3LcY8X4vpStdYjC7kUprxMqSGTmj5phryZ9DhdfPhvYVYyhPgcDRu",
  "key6": "5D59osocviTGSLYm6DZGEXQobMMk7P9JUCao5PEHEpdQsZk7SLHYsMvvz94wrH83LEoYshJDZqTgSRW6HXNt4Tfe",
  "key7": "3MCYKisn2aLWbGCSf8wRhbutV8m6uLBuvvNXbwbqVYUgBPPrnFAH75doxnNytwVvq7GNXibfSmLgvzHicD9HjivU",
  "key8": "2aRW6ZrkJ24gCSMcaF5DhsynUZruvHZjSFBYib9YgmNxQQwmEhXoZBgMRJ7V1TShpqHXrRfK4fmyJp8x1YDkB2k5",
  "key9": "5TZkAkWWzo6Dy5XGRviPo4GTaue77GhyXor9q7XtxPfN58Mo5rK4KNPjCy47APdtCWhmbB62gC8UC6AKtUhrhH4W",
  "key10": "4Kf6SKmwyEsqq5uqbpkWisoRx6qviH1tLDC6nsBBiQT7bNSvWjtHHstDNhwXBPn1og8Au9DnZmZ36mxZhCg4wo8t",
  "key11": "2My4XazaTVZTnAPy1eQ5mRnDPtQNKhwwutwEJtn8fbj6gC9Xgm1bxcf5MzVHFKwLq8YuopALZKhg3Xq5zDhCV3Jy",
  "key12": "5WWe2h4XpTL2Kb5Jefj288tBwmBdJwSzbVZBto9AuiAycBc7cYgmpWAFq4VowGNdu7QE5CMZD2ASPvwWMZMuxbVh",
  "key13": "4h1ABZPJdhome3ZeNzJzfa7jrUSKCuNikFy1Tv9WDWoEzj4WModEbJe8K6fQ61v6TzJAAtEHUcy1wi92de9LkUe3",
  "key14": "38fvXqaHEiztG4bjJhoYCKUm8UhZsmSbJ8JjbniCgJ5pcG3MLvGqZd4hahrSs4K7Y9WwP5RLw7SbJYnQ7tmWfXeN",
  "key15": "2KWn94NSi72BE3TBos6pyZzbU1MnazXnYggDwi7jPXErXFXMVUaLbnfjkE4NuZgFdWwpTqAwUwhj7t7RmZ8cTZm1",
  "key16": "3pBWbEUhdW3BKEJrntKHrqvpkfhvZLkyf3BscR9hwXQ8Bp64io4vEhWPfXG3dibC6uX6mb1Ry6CsXtggpddwVvZJ",
  "key17": "52h6gPApreJZEF3gYFRZYi9yEcEiHhB2LTAr138S6oQNBPuhrKTtfDAYG38t5xFmz4JAYZbuD673uxBD4tizHmbx",
  "key18": "kABbFetkCn9pGZKwux5962Xd28S1tXZZES6PF3rU1RDkQwrhbW2recuQaSK7V7uzQgb1PMsthrGpvq7wRnbsvj4",
  "key19": "7p3b88gqUyX6gNZMJjGe1CGfvPiyPLeAe47Nebi5kdKSmhSSKdMevpCQsebfbvMSXxGh2nvoHv6zWo4ruDbfHAc",
  "key20": "9wbSkKDYguBY2SViJpPauPo25Z7JDjR29dzPnTuM6WvoJD9WiGiXc4AVL7CjdTMHTL63dFkinvW88a8TXjwVgY5",
  "key21": "kEf1NphhV353PiZzARnkERa79j8wYQkdFoiEXh8sATfy7Y4mXLZtKBUBS6nsWYQsVjQoXdgtQktyHudiDXuJcyR",
  "key22": "hrrz3pwYvUkvMsAi9jJSF36dtTD32zuCJ3shsWaqBwiNjao538mVqE2n53Bg4tb2RPxwdi65tqAERAA9jfbbgTA",
  "key23": "McitgBhR7dzpe9mzUMaHSVRw4Ezv1Vfu798QWmDU9x8kaHWpKQT1MUphp8Tj7bP75G2b3Ex6cWY9nLD8Xe4yDKa",
  "key24": "5jvkEttPhZvSraQiwxEudthEkMnCSZh7gL6zmUMhBi9oeU3Jtb1cV8CyJJuoiZxk5gKDPKWVe2vZTdQrQx1fzC3p",
  "key25": "PDysn4znUSkKWSayNfqZkPRdPRn37SaTsKk4KUVaZsptfFpb8YEHLCrQqe2Q3kYBesqdU571v4Yzfq7gbYsqYBY",
  "key26": "4Tn1rLBFbeueofpNnb7F6QbjvKBcxsLzp6LEhZiKrdms3corhSTsx5BLMZyWVksY7SeqLbfo72d7wZHQrgrKbW9J",
  "key27": "43TLfWSyZSHaXxfF8wBgjxkce5qDV98Vfh57pLp5ZcTLVjkkCaHuMe41Nxx1arAC2WTu2EdUg65FZmpnL1w9Q1Wn",
  "key28": "Wv3Nz1NctvKqkTpkZyz3jqMTz2MoSKgdbL341jgQWRC6EX3zyBo5A2Y2yktd387Pzzkmq4K4sNxGJdBHHKUZjj4",
  "key29": "61ZGcRovic1nTKy5Wa9wQwcRqFwCTUcYn6M9wV1EiSKPKZidZRXzq44Zvh16N1Fp8oHri9Xvf9v4SF1qyA3gKvV7",
  "key30": "294kBQmbntt5oAFE9JgpzMER6n8EGbUWAcTbeoCKcCuV4RRRmsWg1FhFpwJew4oHa46G1giNQwWDHkjcYgf74sb6",
  "key31": "2QjryuQahvDXixU9T8BGp9hQse3aPJ2E71q8ARZfji49ata5V6wcb9wgKLgjHf9dCii4k9C5sqrkB4NxhU3GYocX",
  "key32": "4BKAV9TQnh4NTGJvxud83biMe2mPCHpxehrUzHAvVuPjWm11xuos5ezdzRLroPDqqntEjarSrvNs8E982RttVntM",
  "key33": "2zmKNTNFyCD7icH4WbsHiDkVhM212cBT2QpkYw3nH4gQwgM83Lm8MaCoTzXkTewbRFf7HyzZiUJNjsWGY2bmp8Mm",
  "key34": "LXUnmEpubniJDsPM4TnjTXBzGykNpppm9nJZYH8uNQA2ufn8WJGtkQ6XceefJba3qvX5RZD4pSAgoxfwuWLBVog",
  "key35": "2XZBMJzafh9kp3dhWxYABt1fCKnj3yse2qh6qQHK5xMRa8Wosfn1hJdYQB1oKKsukcv58ddLkgRMQUkTYTfZ7d13"
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
