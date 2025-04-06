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
    "zVYegsLhfwcKcMohwVo14BmZpJCHBHAy6dMREefHUPLSHXxCKwgC4v8D6csuEQxjjpHr9A2WgzeB6QBNJ5q6Hr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWanv9XoaNt4G2H77jkgTfK5jjKa867RH16WBiT1g7xS9FQgcobSWKR5RB5rs6HrBWyfw3A4Z87rPLSt93Xbda3",
  "key1": "66akHmMkH7qUibo3UqSLAXPU1HU6pdMrrztJpxTTwtxfD9Bc442AV4QGdDeaMifDZKe676yky96u5M8furKvZtmJ",
  "key2": "3NQCbbnvgav6iYQ4emLuhxkuK1MoGjG9vYWUhoRf3djNUq7tFGNMMcUSMQMRpvTqC8E3dXqZ5jjrGCXvfrNUrLP2",
  "key3": "65rynY459dFS1kwJhgmHsZam7ZB1ZmSUkJZcdAREQcJ4rGNPRv3xeh8efpQ244bsKZr6Szcu5V4RAXGvFRiyesYK",
  "key4": "2zdY2cqP2h72S27GeEup8uRcSUXvnfcVLoy44yUJVxmQ9dM8cLPKTceKJTPnuuMbfDYvaLkqQgkHCw7V9CVyUB44",
  "key5": "4buGL4ZTaxJMo5zbQ4N9mynq4MUMUdtAqEycqDvHp53MM8MNQhVud2vgFpx99i9BLVUMBNpLb28DbUksTEMkd9FF",
  "key6": "2YA1fZStYCXHVpX5zyJqgzSQ2UpKAqRmoYEJRq6UWP74UCKuANxk12qMQxmZg7cwf5bcrptyHNexAypiis6Qy26J",
  "key7": "2bWQSHgz5ZxRNQYMopyUKmu8hWM2LyKKRX1ThwmwsTbTiE16yj4kttNkLySoyRCJq7sBnCygRtACSKrswhePrhf6",
  "key8": "3Mo1SymmMEX5j6RPQeqvYGUwSNgtZsXW7WQyehVr7yAqQs7nAuC68ApuF2aPzToVXw6rsienZsBiNbYYf8izesVg",
  "key9": "43HBPZsoSUyGh6nyreuhfdWw5Xc3rAMahZQGXJbXxsm46NY4ox6VsAKud17ohBBXaFEJHCmCoyz9xWtdnFgymhVx",
  "key10": "4as9jV1Fz6F2yWv2kYpSezusvSYGgXQHo8zEEqVXhPsxMM2VipJvzs89xJeoeavCxkQa7mNffFGtHmVsQRfPgB6J",
  "key11": "fViLgwsUefaSKx9aoGbW5kkAd1SgoQkkEp6iNxgwka9zHdP28YBqDR3NiNFpsFezR5m6L7FokTyGEsc2CijohGm",
  "key12": "5aK5F1a8c2q8mJKdoYAKjt8va71zqKQdK5MadBHKtoTfcunE9m4vqjBMt8FmeQ9Dp2SKby3dE2uEgmP57LvRrx9D",
  "key13": "2eVLYyGMSxiVEXpkhKrF7SVt2vpHgxqUgGbGuw4nzbkYqwWacoSCr8nVKMsJNvxMV4rXBoc9pfqVKmUSW5HYA1Zw",
  "key14": "4jfvM7a4CYovy6SbxZxexpXrr5zfZiCxKe6Mq6FgaADonFj9TdLZdqybbp2oACVDPtDdrdnqFNCNKHxCeLFZjmvs",
  "key15": "3iqFBvzPP1SqKHaDSHsFQJVAMxRuCXT8GFqzQ5ZJGbuQJ6CY9Lk4JCN5xEFTULRSt3MT6pSBdiZfpzFdNJG7kmYP",
  "key16": "47GNgVBv9T13zWcZgeUSDsJMHnqpZpMQJx2yrFANz1aFmAoPtkv3Db83mETqUx9mhLhewpmbvrpimAVECBoh9tZg",
  "key17": "3eSkUFXsgbfvoZMbgt7ASZ7jk9VKBi48ikhejPxDTntCwv8MsxGGAdGoa1KakJ9N9iyjLUS2sARg9wmPZkhjgAEn",
  "key18": "2rJrtomp5ZCk5EBS1Nv5V1iXHViYjteGnFLzohtccJa9aRa7PabJSykiUMGy7Wq1fLKFAqRpcbZiHmuxqZz3ai1L",
  "key19": "2qKKSPPDMdiMc8TQ1Hn2WqXo3uHhnAe8dBj9waadmfYkhviH3inuWZafgLzDDm72NP65x3LdaYWC39VArrES8smZ",
  "key20": "5qDFuDngHQR8PTTSPtp8dAP4qz2NX6tgD3cwCd1SYar7HZevTgrh9BB1MMaLJBgZtwXfTAx1ZuX5ycuqLLvsk1wW",
  "key21": "4zvXGxSwPdy9w3ekpEgoJApVQ321LWHnHbegnJdPrwEZ7Xfau22ScNGiammMkfrrp2EM6krywokn4miKNRQSPPqk",
  "key22": "4ApeRUiBLyKeMorkPsBsCRoLXMqM4hGUwgzJyysVq4oJv9qWrH69jjFHHQnM3FLjW6jinouyYMhF3swzCRsgGoha",
  "key23": "4AhBhmYhTMaqC9dr5isoCTsRg46iAA3yggsQc9zMthPjtMxsRsnFkTaSLRmAeYNamAZPM5nL3vwoNvSoRUckFJg6",
  "key24": "555Mh1c38hhcEDuwxwLyAWZoLpLTdxTUm47scs2Re6RHKR6Gidhp8MpRKSD2UYyHNrHxSUPrRvjbCWAx7YQf2HzT",
  "key25": "6fXL4yb9uAMTMjpSKB4Sy6qoPdKVEDPht9aNQX3iun9qtjNfWhfhY12wDmnSVBYBudjpWQ4Ydu7YhhH8KMiHhZh",
  "key26": "4NK1daUmiiwv8KYz3ZwZJHpGtBqjde6wHjDiRUDofKRbPJJJJbQ4uDYHur4Eh3hVWHG4Gfsrm8uDKm2nXF7zX7QU",
  "key27": "2yCGD9oqK4d3VjXobLQT5bNYToQVUnaVUcTmq4W3T5qQKp93jvV24hHZ1cxEEaeNdoRKY2QJZh2PxkYD6EU6K6Av",
  "key28": "2cGeUybK83kELcsgfCqJAxadytvjrK8iy2g6Gzzr43E5xzPkCWnrj4CRRSYr9UDqB4AdUqW5UYamqks9M2GMjEux",
  "key29": "5eWjxo3dqVMFxL1LEqBMoNfb6BCRnY9bVPVRKj9nQWMbw8hf4amKdMRd2ry9oz73KNhNjAECuAg66ADMmUu9nvEj",
  "key30": "5wECBE9tkFCHHdSoraApiKNkggkf61dLp79htEArKZpmGZCNLA56poskqibEA81SPZnvm1AqTimSCvwhguMPTmCv",
  "key31": "25SFSNvWZgxXuLBjtL8hctCDHh44wSmAhWv5uxJR9F564xxQ2T9PYCTqQqvkFyUk7Rr8EedEwzQYms6qwuK3CLt5",
  "key32": "2EbmbASbBsTtbNZijjrAYgxa5L4pJNy8tysa13y48huzRUPsJ8v88JSQ7B2XcpZbhjvLnXMin8sP13PpuTEvhoDf",
  "key33": "3rVQP3k8hWDJdkz1Hhp2rUmdVHuRkFztADXtf81qqWs3jZKUjBYdtNxF8jhungc735P7dDwrBeRfRvP5LCSfHeGx",
  "key34": "4iMrJ2tqruhzToBysFEiovMCJCYDste6qZfXah15RxpzZDbDk6GhmNAVmU2kExr2vz5DRfHeZx1VDaYp4Dv721Gd",
  "key35": "3aYysGPETr8XH7TuyKUs4piG4duLttnTKGwZ832Y7612ybPh6qApXtrxpVshBnmWUJEssCG7mnUSDwoNWR64N7MW",
  "key36": "29hicqVjHci4xwnnTUeeANkgR4Mae3SGBXRPvLd3pkrAAnum8LWr8E4T8DCRhgz7V96jnUb6guM4BTtHjgDxHoKY",
  "key37": "z1BZRX86rTywS9Hgqt5vrifvfLBL26fCA1PmiTFwUWTGCdAieXTAy6EAri4qqbR7yefnobxePTireGanPnbpkGM",
  "key38": "5SgEzmXx1RxT2jKkSwnsFuobV3YWkFxPxpcyhsQ3nugTZkjejrDRBZ6sP8K6mkSQhHwnZHrwMARnqQofAwsYrynE",
  "key39": "5Y25Dm648muEsoK7MGikmMKCFNCTDdCqVgGrC5DV4HgW1nC73wpq9n2X6NEQvzHXYxqFSwZMn3XBE5NM87hc7tnD",
  "key40": "24B72CLKytFHCG8phCBtwbmWmM9pioaQLmHqJBdjtva3mhW1q6ABq67m8XrJGr65xWgcReSc6ScU9chUmBDpECCR"
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
