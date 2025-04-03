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
    "raBb66KVMCwtZQMFpm2bEeMXMcrhnVet86FcYUaDG5neYCWwqZTfH4G6EUKuu2VNDHYPosERHXZrqMv7AVcngGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6LoRS4ojuakV9GTtC7SqCVCV6cWdCFosxXbZYWqXC9cmLrpW16vtKEre2HJc2bepMSxEMgzLEaJb7293BqD2KE",
  "key1": "2EjCjrcmfL3rtyXhzXERDFYZBqGbRWhpRe33X2NSET8Ahb2K6TYnyjg79Vv27wurbQofvZHZbw9ip7mcqjJ2jEje",
  "key2": "2YHE65rGCSUwZqNbUFUdJPEm7b7vpc9GR7TPhNuemCrKdJHnJr6A4hJ3kxagbn7cgvV6UEwxRTxwXqWKToAznjn1",
  "key3": "4p5S8Qgb2bR5y2eh6ELeDxzYpnR2rbJZD7wAV9aHfQ7qD8atf3yP5jEXYTxTF2rSrUJBi6UTd5ze71CTyeHZUyWY",
  "key4": "AGRCeHoMvNdhjTFLRMdF8xrB4a8uxaoWDe9JKRnA65s6HeqvGUNcCuHntP4mQqCzrcxxP2862bkCdGErNwv7wji",
  "key5": "4zwWfyz4pcBLKhKmW2a4ycw1tQ1m8t349kTzv6KZbqzxfWJ9wbHpu7dm7uroB2wn2BFbAXkVcgtfUh1UL9xVALfU",
  "key6": "4U89Jb7cPY2f6CsZDmkkH5wAJk1Ej1LUXNokYwGaSiFrNSjUo8ztYbbMXBbDdwVgVwJ3YzNrHqWJrJ27QGSP3QfS",
  "key7": "3HcPLNKdz56brccsWVWbAQJz5yUBfPHyxeZy9kHgYLMMp3bxEK2W148pRjhbvpHtKCQaivQCzMZG1ku28wqYH3Rz",
  "key8": "41y2oyjJxj43wHtKTzMSYkR4GCv8N2nsbnRcPGG776DE5A8DQjFrsVZj566efBAaU7x7oncWBoMdeRiRyFJCKHhd",
  "key9": "4KWsD37JeUQSmrT8FBbtzdHjgFKkyyoMwDbooBQ6td2uBWRb8T5NGWim6bLrcageddMR7NVuirZUoicaGNRodgWx",
  "key10": "34FKtm5pb7hpffPgHG6VvLg9uEBAHdp1UmEtTRMbgoRiHLU783VsD8duVvweKcWHBskNRo7GAtYaXm1cVEhSv4pS",
  "key11": "5PG2Kp3AwWjxtZPz8jYw2eb5XcHXB72Z11PtgiRRNSM1Srkz2Q4SpDRoftsnEYEPDg3Nqz6PaRfzVDAnQYU3WRbP",
  "key12": "MQxtVMF3QpDwQ9kK9oh7byM17sL7kpx2jmc35ncFB26q63eFfssQnAdRoCufeWrr5QtQtnKSAUBiTTBCFkTdaHt",
  "key13": "5rG7yiEfHQpssCgANewLfikWCrDVRPBMLedTQxurAzAxmxN64yBTo8WwxWWUcRaaRDNSbFToweAtKyh48rCW1YBJ",
  "key14": "4SN2HYPaGwwLQtHb9hR8jys3ZiiT9HmtKoGGu7u8FUm2QuuAPJpnh2xaYzFvPLQFcwgJyWpPcTj56y2aST5U69Pk",
  "key15": "4xwtNxLJzm6mZXFbwYwJpjMjJHhre67M5exAANJt5GiddTJCmDQotEbRn7gZQQjnJrowmLeLd1Ahbjfr7PEVmPfo",
  "key16": "3aFdEfUodxEoQ7z9d2qY3oKTH4FUBJWHT1op9WKRhmjeDFFDyKYoHQjp4p6Ep8KUfMnFz3y5XodQxfdwjBhpd6fj",
  "key17": "26FKVmpxWF2akqdq1hTFwMQznV9o6gFK2G84cL9bhrdwKAFVhEDWvymX2CkRV9zESdf8BNWBfRVjZPPsUjmdb5AH",
  "key18": "JDn7fteM9j9scJ8BMkeXzTQgshRGTBNU9cvN8cQW16u9ho1GTjKde9wxisoWxMLb2D51yWhwWP1USJ2uePzxXns",
  "key19": "3sx5UcWn7ZM9z5STX4vA1xkmP5kB4gB87K1x7zxoQEiiWNGf6CDb5FEnjYZu4hayYh6SfgD8i5ANMWYgEVodAzqr",
  "key20": "wp1TB6avURGAGFWB5QHn2hk8dymbRSnHMb5YEhy26rUTwSEca1dWZUf3RbQaCY6WtopjdAnLbVGucw9q1bAFd5z",
  "key21": "2NZovhZanTJTCuR3H7nETkx8k6Bw6kRU1s55mbxRhF1XEMBN1Z6cWnCQM6Knvsw1r5bTMQcnBBz3EFgaGw2Rey1F",
  "key22": "hKLQKwNNA2nKX4KnfjZqavECFVR9P9iEzxywtDJfLer7ntz7bSb7uZkqfjZN9pEuMFTG7HTuyywVjwSyFHF94AV",
  "key23": "3gNHwciw9KmsZubZGPR2ixwLcXJLiAb47dVYLqPsuxdDDENgsMtx6BMuKvfTC59vnbf71Gb7HvEgbTEYGrKdwUZC",
  "key24": "5krp1ekNGoPq8gca81jSHypDEwf4Ay9QsKt4VEMbuN2h4nYdYATD5q7vskbY6pYMoZRbE1jBbVcfoocFvavxWra",
  "key25": "2UwXWjE4Qs7Ac8RUogSYZzEWNnnaSH6FwZJGXbD2iYsoScRjYBtYATZvQT8HQsFKAa4Viq17phhibZbJipTSdyDc",
  "key26": "4btcwU3yjyABi5GMT7GoQTCKX7BFLc2nRv2jfE3YA82c1CsA3NBLccRWJpQp5ApX36JZ1w4kKZgpMRrJ1Pkv9qwu",
  "key27": "3fyL2WEmjWeQA3csGbNMjyW4X1rLW9HJJWFWSHEmEYcocqysohRWUdiPmfAgEcXCkTss2x2GpYzGroM6QEeXtkYA",
  "key28": "2q3yNptN2HVUPrVUen5eWzthW6XbNniuhJYAePCK9gZQLuzzk936X3eZWWA9izz6fNRhoUQG7JsCLjhEfNZNa4wH"
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
