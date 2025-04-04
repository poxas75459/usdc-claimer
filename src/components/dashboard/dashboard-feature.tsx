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
    "3GmLw9fV4n3eF4xTRJMTP9Ezy3GZEhRokqfeeUgJFSJj51DKTeVeniN4NiMXtJNtMt834V6Hn9L2VNyFmSLTfP8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abRrm5DCGebouBjkK1uVPCioofzb76gVLFjFL8bYnptYvBHLHGRVBUrumc5ouphQ7LnQjy7e63KHSZSrwZdX3T9",
  "key1": "4qaXmPjUeqetsCKcEDz7ijr3LMuLNtSQaiwLfHgwfWBwnKbozRRTsWNjh3ouCQVMwXqRhs4VfU7DSG9fgsnSvepw",
  "key2": "2AZVvLFCUazSgfKYkVBzTC4uw9DSGgkqsgAeCrRtGSvKXwtydffBYPS4jHRJ3ryfRmVxLQcE646Rn6eXuwNfP768",
  "key3": "5uHJiPbxbLBhGcWCJroJiCMJd54nmP87nKPFQws6i9Mn1rsjxLZk44RGMQV756uW2ykCzuvH54pYt9WJiG9JAnJ",
  "key4": "46ZfuwRE7tfJJfKGUpyEWBU5Zx7cUDCXBePRKugTQW6mUxr4iF2XQu8ycPfdDNrDkYfbAtdS4TRLXFTGMqfwj7L5",
  "key5": "49vxa3a8EvjnkxGeh8Z26aSFhGrZcgBJ8gDtxExN5WrBh85kFxTFC3YSQmNNYehphHgHyMsxxs3eGjv42tqq24Y8",
  "key6": "4SPkYEJsSCYhbtovmZ5Z5MgyLY27xurb2zGNMEbp6jokuodA38rftDm6fYKqY7Nod6naryF3qUuXsqphrum1RwGS",
  "key7": "4krooHjNnLZwxQjx7ko4ug4uQoX28rmMRA7SuNTyd49iNdyzUcYKXa3vug57XtM1ujdH5nXKqLettbHNLVQ5UgcL",
  "key8": "4VLLHohwToPqYVsL6YPmzUP3p9sPPiSBmW1eenq4Umy2Lj6aKT26YQMCjYoquqmu8gyuYe13P9s4u536LsJYMzck",
  "key9": "3JEP54SRs5noTnMwHM7MiZo5yxHhPRb1QyJy629sbuPvFTL4jpBPF2pTd9RchukUasCjvcejQgtQX2dthmzuvKsV",
  "key10": "rNNsWhoGsh7eyzhWjsFpXhVWum3etbSoyohuB9DX4K9c2xzfGBzKSb4hfahiTVctvMMFFk5nGgAKRe7UMMUKDK3",
  "key11": "5XK9Etrf46dAs8A1986evu6uxKHAcg8vqJJwjEzmSJUVxrRYmnETYMqgLDkGdEfEisEVEG7YwMV78uPDY5mnFjDY",
  "key12": "5JSf4L4Xe6hCAXpjUE3RSbnpFegRVgRFgyruy9GypoGEm8LPhTG876ncq4qPsA1MaXwL7fD4ivBYY6cd8LJDSbNg",
  "key13": "cQZ51jUtQW8DLWoUzaigzfwgzZCJwzLaVd6yJfWzqfu7dnsXjxWh56xid4M1jS8JcxZDpgwPcCPqqHBv7tkhdCD",
  "key14": "TRK46E8UuPFdz8GRhKzuewfzdZmPCARkiNJhL5JYgSQJT2whGLiY48N171BHNYCS3jZoFN6g4vDWzE47yVfotpu",
  "key15": "4pHkS47v62GPQ3HkHmdDkSEQSmf2LDunugYsh49tCB9R1T3kgBLzMUBJmcrAy1Eb6mYK9TzKeFXU38ueFWVM3JZU",
  "key16": "5rDQ8BhatLTtsQ63TaALNQEkgcKmqMePyLquFuLghZ6mDtBSpofyz1Mm31yQ2Kq8KoH4wE2hPovhP7T4MbnT5nNC",
  "key17": "eYsU8ZPZprcJNaxwvGULfYL8qhsFn7NqBW9gs6QBrkpLrytGLtK3NnsszvgL11NY81ZbhNP292qDEMqt89TSD2o",
  "key18": "67EghTQmxo5mLktJk6gT7AhoqMkRepSY5zmPQJV94LmYiK52LeQmWJgrTRmzWdkLUYs8qA5RzzCg4R4hrS4hC84j",
  "key19": "2RTFTxRPAR7YvjiLfj7Q1iRk7cWfQxoRxednuXpMaQCCfXPvv9NVnkmUugvkdqeDb86ZS9VmhxiAVEu7mavoucgW",
  "key20": "2M9YGEMKeKNqkJxVbpRQx2H8ZwqUKvXZaEJdRdiwHjSXViAxQ2fnp8MEQC3vK8XxTG4fX5ixHQqCKmjyMnydLhrs",
  "key21": "4mC9a9nT6YgUENaLtQjijeoUGfYS4PuP5GVuP5FGkxrN3zxdDusajCQVscxNntyYYv2yPKr3riM62FmDuZHbqigv",
  "key22": "4MGxAm6NYJD3zTUNjf3ec3fcrHjtD2wa3qAF9j91xAX6V549mUvp9jquFDysvA1ZJSK7DoudU2b3cPF94HECSbhG",
  "key23": "5Xbn9kiiH22d6viTJAc4FUJvqKVJddixGbBgNfvoXaHL2uT1ckfoTkmqjjXVb5pARLXSc5L7nAJpQFNJ7GckMHik",
  "key24": "54mULh7cooBzgyB9PrrNPVJGx8RFU7Q4BuiUPd7pccZWosfqxM8HLj7QxTbYSoxrP3kbYbJykMCw3c4kT9cmN1N1",
  "key25": "WJcDMongrFNjN4D8o1NBfP5n97QHfqhYL3yCkGL21krzQEBp49uDFvLWcXh7riqdg12gNQxYyTLntNRMpC7NFsb",
  "key26": "5HxFmdpJsLsRVrUsfeNpFxXUskfMyJiddUco7JXdznRXcS7VmLQVAdypZRmw1sm4v3Et7nbFeFELJYFi9uRgvgxX",
  "key27": "44nacNdvE4Pc2GvLokqmYq47SXbFvSuqBpjyaKkQdv3uUokMDcWZdE3uuEgavBr7P4cALsbVPWuGkMSQXjRxQjkF",
  "key28": "2JqtZjEadN8PHEm6GtKoxedH97kqAZUAs8nZ4m6GBkd8t15GYZNKyxbZBQrzFVSa8d1tER3XefyYje5ZUFH1XeVJ",
  "key29": "23v24KQrGbLZCMCkT1rRmjmMei34fyHqv9K49EnyUaasgGtz7WZzwjWr2T7oYULcym5TYw5MsstjjXMFqq2CwEmM",
  "key30": "3NHegQ2fP7QqDTxL3EbZ418dE6HvTNJ1nKDuyzUiApBHCRUCVTcMAd4XytNk9SQaRhwLsSfPTfSHLwsaZEJxrsaz",
  "key31": "5bmy3s8m23r312kuBvjvbif7btQvXucYVzUT5pH3bubf3ptyAauuUucoLXPmeZ9hQBDswA8gwKsrAay9eYKakTMW",
  "key32": "t8TDNJizKzuUrfbmoi1qcgp1ixgy1EEiSK18YPTaQvLMKACduZGvX8NU1qTqfNz4JUArUMSX9zceQtMYsmaezou",
  "key33": "4sEdnQBZzHmibJKvEVxT6FLNn9enipHj6oLYZvpPZ71KJTY5EEF5Q3jPennM5KZTThQcgM29UmX5q5sGnqqtUZDJ",
  "key34": "29dtu4e3aGK36G1DFkmnWLgBxVdEYBqPeARqJNULiKoifjfVv6tN4Mn9sBsDQt7XNqVxKuaHBsNEHXW46P5eXETX",
  "key35": "48R5QaCaL8ej9dFWZD4fVsWX1DDNK9QHbKMAEGBbzWLREMZEGsQRUDbR4tGEw8mveywA7Zn2bbtQFS2WeGBmd6zJ"
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
