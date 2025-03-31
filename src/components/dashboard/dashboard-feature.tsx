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
    "2JAsMUcYu785zYSgD7yu6rR2ZGH1teeikVqSqropAHNG9eBdqMPxquW3n5deWek1SgBnmZygbGB8H2QRAmsLmkdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNgzbtBNV6nAcH3V5hoPDnqJass6SaqSyUEW2BVAdBeehzH58knMGwU9NL1bNN2x8hb5QRkrNnkwYXYGbbrrd1C",
  "key1": "3kTvQ2L6L2GDpd8kMnYss6dYSUHzA6KPGKnBbDjvZe8pvYvJtFyypLagxde5791Ps5vVGffWsARxvBDxk1gktbxK",
  "key2": "4eCsh666EAeC6wcKg8LDVETocpwGJ8uYQk9QsusSmnq9gHHew8uCBfyfW5ifj6ky1VXpSC1yPaam7msg7n3McyGw",
  "key3": "2XumjSFRD6uGxohmc6YnXPobXidNfLyHcPdrkC2ToXJajrFKL4utxfPewfPoyzykicWxKBs7pqH5gHyrf8hbiSsA",
  "key4": "5arKnSeGJZQCWiztouSTAL7gXE1ZRZWdAg4NpeqysZCJaaVbmzgursQDmWpikxnZPcMch2AYvPnx4Qvz5eCm2nZE",
  "key5": "4fP2KdDYZaziYuW1xePFb8zW5dkcihs2frbqvxBn63kYM8GSZjdBKmYGoMgKdJdBUvpMaj5JH63bC7VgkLc8tT44",
  "key6": "rZEUystyAaZodHZVQAcMNWveYwQGTCNRgGT55AGT49F5MVYKMysQU3WkFxpKGN7fXrYXTyu1Es2s4s2tP3xKA1i",
  "key7": "URjiGsAMdUrcCaaNXMs4xjaEMLhsMXbvpri4hyVqZ1a1j6rbV9sZhVfWQQFS6faFt1gQKbvRopr7LDMtYWQUk6H",
  "key8": "5T5NwXqPL7mAsPa5QyaYyTyAuY3uDGMkZVNwNw35Y8CAsqeViJWUp8vdugEyG38M67MjuVLz5C7vns3a1wNZFBQR",
  "key9": "2goV1eUBkrN8pyRoTPw72unaXQMPT91USJZ8TFYotEQ98YddWrsbKtrUJQS1DXu5N386QQbTLwzGn8SE6ma6zra6",
  "key10": "4eQT3t5yDH9VPUpFwB75u3yhVDKFjduyz334gEGui1ZYYyyYc1yfvtPp5QTFCTiBSTWRHz5PP4xErhs6eMVcpuhJ",
  "key11": "4TkM6G4bgjxVmbbYh5fuGfevdN4p2FSjMJDoWWJ8hZshE1jhGKUqUYPFwzHFbTDd6WYCPfSFkGP3PUWxhj8eZbRs",
  "key12": "7Xw6Gb2MfKBZir6RBZQLUYFiSaReMJcHeJT5FMHVS79ffTjbLxNNrDzUqMkZe697CZPoQuDghRhEP61Stv2eNt3",
  "key13": "NA5X49Tr3zcsv3L9qrvYVooQMCEMrPYxgdBBrAC16BrgYiQcbR89pPaDVrC8SfX5CxBpK1Hn5TziT5DysPK6nzy",
  "key14": "34FSb37b7eWjMvnRjPo8byPj6m1t2oR2dJ2Gd7WDUUSzyyfUaZtntgDhH3qp9ASXSeyF83q8aErg9gzAKVU5hyTc",
  "key15": "4aHKka1d9kkw7CVqxgbuAE6vdR83vi7XfUxy8jQEAT2K8KcvYqJoMkikfadT6V3mypspxhJxBCHN7UXb7DU9Rp5w",
  "key16": "4PaSEp2NqxMZEDGrN1HchpQgvF4zzFHzz3rVkbc8qYaYYHbVjngkvL4rW5pSbNTy8Q1ML8xtGuqQ9TpbMbU2bH9W",
  "key17": "24QZnwDgtTMmNMriEkW1edVK9Ym8QwnJwfxtruq1LoEkwnXpScdsK9xWqwHgkEdHKNcf7hspRaQhYvSdQQr9mgxG",
  "key18": "2WKWa5BGdJneYpxc4zsBDqKfq1RYrQr9MNJYYnAkxzxUdTv2v9fvJVwQnJMmtbG8djY1EVD47JoZHkKfQ4cEHSyA",
  "key19": "2eaK2sj6Bk6RCAaUoFmfJUZMD61AwZu6TsnJP1FdBkXMJLDMNgjmv5X71gD17wHFr4R46pm1t75fNwUgXRJ16T5f",
  "key20": "3wgdfMs4zYvb8vUZRiWmRciKXeHz3UbH3fcnw5fhcPRa1oq2wtAzmRV26fagcSwTZzMxjCnUT3M43rgdbdr3RFbd",
  "key21": "513NiVn9YxR9ivBcTejtdBHpRkmnELSmzF6i9m8Fc8fSouBt9dyT7ALQ3YKpKFue368eezVgimigrvtXzhxLJZ6Z",
  "key22": "2Fy7ZfnYkwmQkGRt57ksqj1DqDMBbn8xLTMyUmHz7MUfjKLmDPH4AjajGf7xhQxXw8dMazAkh8kB9S8sNd9xmMkF",
  "key23": "4gd1dwoGrMsJfBY3GcgbMQ81wcFRPBKKAg9hCT2goJpUwRbvXo9MHueLtHXMvuDSUCtDM73Bni3TWXPSJU7Qxk7U",
  "key24": "P65qkqRvr4JyMVDiKnw1QnJ41Y4PBnBVnTPqyy8cYRccHeQL2RZ3hLpqM5coxATGG8x9PGE5jAAF9YQbXjUVM66",
  "key25": "gkuRH3rJonRPm5tHvvx4VXVVT5nT3pd9Hovpq1x1hydGyZFwhGjyMDrK7z1L5YPkCfRJ9tG7qnxXSAf6VWcgHej",
  "key26": "8fTvVSbpGyR6odtZRWiD5pYzmPJbbvRBqEj176jHAUFksNxbfyRoEDDQdnFDhnHYE9kz3odGYX57g8zKQM4dgFH",
  "key27": "4AvgH8gaPhDqae9xGDS9vUPaH6FfpTsPDnpjpgLm48232ho99ej6YEjQ6oJQna3Y4Rj3beb6zFj9nBD84tmAazcB",
  "key28": "3esM4ZyDHKhvvexUXhVpSCwShiFgaJixctoCgbkD1KfEMopR9nQgvQcCuARBeN5BMv4cUpcjBDsWEWpM7wpVV7p",
  "key29": "3Nhmd51Pco3tLyZ2wJsmDf6Bn22wmUo3HecveTwFTUqeBfhbVtQprpeL9s7Ny8Ct75EhSycdThaLsm2KXEV3evyX",
  "key30": "66gTWZEt5CbQu9t9hp2aFfC7hfgp5h1iLbAWCP9L7uZwBXWr2vPfNLZ6SmwRYjyQ2gzamKx5z5AVw4BhbE39YsEb",
  "key31": "21QcyeEca8bUbJhU3QykkXFLt2eAfCjKbAE3M3EqRn35ypkD2KYGmpRVuFPgsPi5mBP6kE8C4cLoRgtA8ufPp9V2",
  "key32": "4SGjaBNGwLpP2mmRrDB8NsQbS971gB5dCUCXGgAkDuCwRqvdHCp9iGv7MC8roYhmiq8ZKtukXg5S5fF7thUq9hnH",
  "key33": "5YxyLZ1DbxwgdahjZA2SsuFsv2LCHgLMzUSXkVyEfqcmQ7VS9vdGKmbrnMkFaLWqFiNrsqUFumnzcWihRi3PNSA3",
  "key34": "4VL1GFiKRkoKKExS6JJxVxZJrq3xVsZdaASKAXvEYGH9LwMXTbVUwuFG6zux3hGCsSYt5rejWZ6UVyRgSo9cmen6",
  "key35": "5SsCuCKorj9HDY6xgqpxoJ79VP9ooT3TwS1fsQyVhw5r4ZPELHEd6Uq6pcQTwWqSLoSduXpTSwgNtjDtWVkZPpg9",
  "key36": "36CGbMh8mAC2c12ETnN3qGqCtXY4o3svJSwY2vChMeof9F35KXLVaefFnpBkasuo35aigJjm3BnDhb7Yt9UScPDn",
  "key37": "2q3td5TDwDd2LqncahXy6PKt5UQtKkJZZTxBFZsKUb1MdLH7mQFftomRdqH4r9CoD6A3Y68nHV5hcKWJHyss7qq5",
  "key38": "3QxkpRGNLqvDdzaZJdU5APow7FeBfEt5Q2H5pNRYuy44kzgTwdGMbx9WTkPkM1t6JB4tkDUFVtMk7cFM8Pp81A9X",
  "key39": "22fpVXxZyHCUHyoizziejBqT7H9F2FfUmL7QRq1xSemxXYqLbes151B1YdHTdFKBozgKebCjqza1rR58FeB4vKzG",
  "key40": "uF7YYMfwKzV7vSWAiUYkS3PdDUEyYV2yyZJen7ZJhnPAeybmMbCVDe4Cn2Ti4JDAzEq6jArxnQfc1wp4eRCh4Qf",
  "key41": "5QRhFCvfCjoWdMEEZRvJXXQs4wnpErfXQabsePUq2jPX7PUnsV5WwQ9TPXL5jQjeYygiusCDLCcp4Q6TypQxnwjr",
  "key42": "53LrvUtagU2ufL1XBqLKRrpaX7HcfdWjtYQGR5zZxwT3jfFUqnoNnn7LcdvsKVvaPkptqK6kttTgoFYqBJEfgbq4",
  "key43": "3krvtcULTKkB7SVim9FgToMkXQmDs6L15Q8qdSdhv8CZo9U4TTUGWGNToQAxbj1bDAgKwbF8erJfBrz5375Jpsub"
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
