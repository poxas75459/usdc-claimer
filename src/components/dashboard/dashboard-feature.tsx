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
    "5MpoL7RMEX92JwewHhYJqWAGBEytWDVHvvcJ83pPm62K7vezRxQ7e5kiQnSaeU1oPSJstfitRQGd7fym2RzereYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVztQngz5moaYFLMYHKtKBrEDFRgfrcYxaXooCjzv8FXRtDH5KwpWyKxdYUbBtaBgjgttut4UoS1mrRQj24DZNo",
  "key1": "3YdW5YvyoictCGmPa1hZDP12EDHR6Ub3m3B9AHvsr57ZXjkPfbvEzZcPuBrUY29ACLyweyXAELYypW9SRMm3XKEP",
  "key2": "tpwo5JEb57ZzoR9UX7SGvaLEqgaQBJ7ceY9LSERtQEYUq8u9VgdSJgZU6D7mh3XiDqutxtoDsVQNUWrA55Aovrh",
  "key3": "2eUPrEHp9xVPvgfdjSD1RFnamrWeDdCx1qEBWKWzEhgQdtj1Mf8CvfdHBtXNm4hpoPMo1NrwmCSomPsTYRcpsNaD",
  "key4": "5YRCnH998BGrNpzEEPx2S7AxmMrChunYy68dz4Lbc31ifvxxw74rAR8pQwk955CrVueLQzk7zhYNGEQDyQkYXmLE",
  "key5": "3e8dtizJRCdxUqFhiNsSTYNFYtymgdrHnRujETxZMRy3zLmqPC2sFirsHPksLkhynJKrrsThaK9mnXeKrBadVD3d",
  "key6": "AnHAqb55STcc4yKGJQduFWuLJAzEydahSRHWeewQD4327BVPcaMNuSGSRT4z5f9dUNxAsCBBPAD7hvDExKHdFos",
  "key7": "66Gj5FbkcaRjGGRE7PaTDdkJqgkaqYyi58Mqr8FYdDqc4rw1u1dfwcj67jcHaVi9Y91ixwo66sTYvyrdkjR9Mkoj",
  "key8": "5Axui6ddwPrz3oQ7a8hNFFxStKVaCHqPdLuDYk8j95S58NPNUjhPtTyiJhSAUXgYy94e5WQQDNtshdgS95d1j3Vo",
  "key9": "4HkQ9p6tLAdDumYtL4FTqZx4u7Pn1RzUhTwG7ghfjpHgWXR8XVupaW8gkH9bnauVWTQoxmu8uSBhvCsv9dnpCZ3e",
  "key10": "52U2YNb48jpKf7cHij9ogAEUbaQmwTbtYLQPef2uq1WaRsQRbs3bjaJsK1hinrAQ864g5XBhtT7fx4d6zkj5iJEo",
  "key11": "51HEZxNQ1RA2StBF1VbzYqeGVugChRErZEY2rZTzW7rXzPVnwVJn15CZT5sbq1rcgbNHdZxZFynWe6RXZT7DYuPG",
  "key12": "3AqscdnPDYHK9eg9KoZXq7zzigXc7D8v7x5To7rjiVG3Xbj37mhvcULMg26zRcnALsWfQ1X9mLYvaAAz8G9yuEN4",
  "key13": "47zA53szm9Ez5RT99nEQmMKZUZ61VRkAHGLnwEb9PRfLJJtH7jrJv4GZgsx5UsFXsvszyWuqR6Mmm9RiyfiYUxzV",
  "key14": "3qvpDdVvGCjHXwrYkrqxpyoycUar93J7GgCmbNXCsMarJbwcDJHXkWfi6TW4VtLVnGdX1JxtHJARpLmg9SVSQL1L",
  "key15": "4BGvWSYBYqsrkJrNSgQpdA1DqcaZSmT935PX4zb1GCPa4EuP6RG9iVDmVALhUvsLQ28dHwyuh4dZhQiTQ551NZx1",
  "key16": "iQPfcCSKa6Dk6ctkqeARRxwvkrEKwByvjWCJaA9Pg8N5ESidu9MxbgLHbEkiA8ceJWki62RWc4BjM7BeUrd7EQs",
  "key17": "23x3ci9WcDxH47kB1xSYPmFVCT6XG3Zgz6gAQFvsSSfSMDJsMsDV4n8rft1ctGcCw4yhM9KPmwmkYh8B6pi3a6nC",
  "key18": "o4jgK5V5jDQMoahjCof68m4xPuqeTgxGZ5B1GMPCjHJEW4DEpVzW7yuXkzxw7iaEAWD2MzsEZMqm22VXdtQ7fjD",
  "key19": "3xTiSkkadVUe5SjNkkjtVeH7KbdojNhAwbXpSDA1pZYjnstsgDKM9YqvHK7LcUoP2Bam473vyoGD6WvcLwBA3vyF",
  "key20": "3EcuCzZuzwMizAzdwk1ZnfkJDSQpjLC99EHA1HLEodVTtzf5C4UxRDUUovnAZ7vQsMAVjgbcRS9Q1H5Tdyhe6vjj",
  "key21": "3iLnENZi7yJEa6oGYw3xMaJKBP9Gv7xdrysCuttrgCWexwxH8TWUf3LJJVEfdxrMDvZ9rsR2NLuejj1yYDrSbTTw",
  "key22": "39jroAHAcKb25vWK6RyvRkYvhYTBiPmCoNQdcwQkR4riUpdUcht3vDdCzTSvHN5HBpzwe6SK9wfF2ndAouE34BEP",
  "key23": "u9p6DL7XWfp9uaVF1G9BVYNfafFHbhid4P3TeyVbAA78sor63E726yV57MQoXy4MhmpZpJ6hReCUBaWbpQD7QHf",
  "key24": "2292sap5B68Vu8vuYegjiDoipcUjMNdxFM9JANGB5hUNcw7V98BqhpxSx5vhNGDUjDx5HC4YbgtswHa8fgBdJDUZ",
  "key25": "3AKyxUhuQJSFJhyQ7xFAaPCcaZrN2asosZ8FrBHwjqUhjxAiZNcjCbbpATTGFCj4nzC1ocf7cCVAJVqAtVP5vrna",
  "key26": "2uW6AtpHVnTTRXHbpwCcF5j14DP6tgRGQ6QxprbyGUGtXw9vfMsqfg21tch9f2dqJo4PJhPLJwBzK1gZ5uCHmKMP",
  "key27": "5N5isW1K41kuhpDB8XjNyuRdsLinm5KAsrqZbsmAsaJ54eCQEnb6Hnawge6QEj75ndMAYomt23QZD58ith7mHcmb",
  "key28": "3metneqdBdpdXuqP4S7uvkcuSzBpdJx9LPZu4VN26zujRKrebcRccwXwyzqCNLxNqy5GUYTqt4YbxETPius7G1X6",
  "key29": "4ZQYbszFMK39MtV31y52xJuiLmz2KC2NzwzEUFHc4yNMey8wMdJ43r1N2Q5E1CNEfsh8iaJCpQhcEQRX4CVjMNZh",
  "key30": "NT1gfSbpNDtuLQ6SZWd4YDhCd4Jqh8pCqQGFzUJLz15WzuTejGLrB2NhNRAnNdr98ZUDy5bLN2HkX8tK4ghP6LS",
  "key31": "3zRAzeEsrt1nuKAFdCSRV6dbwjMNCKsdoKGfhquTQyiWEqMhVn9ttcoESjgLo5mtFHLF8AcNjv4X3TRAXp4anQcN",
  "key32": "5XM6GTnhiXibsm57Hit1BuxH5zw18tnHXmuQF5CqWefe5QSkKiTgrR6a9CKDYvK5bk7v1636YoSBYUavpkq2tRuN",
  "key33": "4UTk2vz2Q1RHcgkLUhjuGGw8zm6zVcECRvdVF1WiuokmTyNzsFCKsyddN6GoDq3mMmMcwEEpMyVDeYzQVsEXkxrV",
  "key34": "2Z1hFC1QoBcZXa95LTZhmPvC4myzwy2ssLZxqCa3ozVHJf8pNMXX4XRmzjtF1uN6bAdfu9hA1qdUEfE2fmmGY7i1"
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
