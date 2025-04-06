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
    "uh75o2GbN6iZJt9FsaHmL2Qo5kmN2LP3YB4kb27Vz3zwnHgWEmFD8FW1weanzt1zVt3oPBKjjv5BqQP8GLFN7FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNNMQw4LdspB6As9NREmKLoAmFw2XL5RHxU8jTkftJMAAGwg58dcSkDiBgjBBZKijeyd3XZtGvDc5cENckHYiXY",
  "key1": "xhwzoCmqphzEG5A7YmsirEAQQuGEUeXoqArsfP5535XecCZ5attxzLBX7EQDSHbtp15QLYHdMj1bJ132PQ4yKfq",
  "key2": "ESpvVhpVCyDdhB5i5aj6E3FuMYJhLb21tq3B1yhqDRG4hNN1mdM9jNr3ZNY6E8bWPu49vHxytipBsXZRx9dnHaP",
  "key3": "3BcWE8FfSuS2p7sT2e4tzkc4z1RfyeBUa46hUqxq7kwUrc5MrjJorTdE7CEqnrmrmLZn5YufhM1HRaFC6pU26ztE",
  "key4": "4MfTRHAaM4MHreF3YcECQuc5r52YP9PMwTJeEmW4NikgonbP2sdQEbe96RbwTGekeGbxxoZuoTNCpie3hsk3h5nc",
  "key5": "21Xc3rfcbmgH9XPvUvMYmUXemDK5WsU7HTDFJjWKXC6wbuw82VqKwJjy3t7CuaNG5uVYWabsMmmYyj2aY8B38oNY",
  "key6": "4yjs2qnSACQLpCcgNJjcCQQS3Ud31KZQ7e5kEUfZuVS17emKdJMoHf8SYf7pxHkmbXKGsfkYHA8M42cAvuZZe2ah",
  "key7": "3RFiejzpjjdvtZutULd8fJMWBvnQPDRmze1ZjdtYoqzpqmBqUu8dZtXgqQWW54wAphoVV2RMGZpArEcpc7HJ3uKU",
  "key8": "37Rrz3hSiHK4ttKrNCs7J7s6ST4AzomKrEgLgHjUuLFF7GZHxBqXZ6pszkJ6CGr6txv6BPuJqASzQLHQfQU78fSE",
  "key9": "aD6GafQT9NNKhCaE6FnjQiQBgqrw65BAWHCqayitzkgh3kKYFGxtEkWC668RgigHV3YV9f41v8ykxtiXEs2jvwz",
  "key10": "3wSwQVspUgUq3coPoCL37hn5ZiuyH5rw2To86hfd8Zp8Y12yzV1tRTgUWouH1j1eZPdtZgnmoXrWQ5EzfTnv9CpU",
  "key11": "2RXqkK9naLUEkBGZjULz8HZj4YCRjcS2xMVvDpxebsLvA42isRqrQfrw3p1hFas1uSYYJYFeMoGfa7QmyMFaacLW",
  "key12": "35wkchD8HDnzhifVskpAV2kBdMcUvjBVzfgpurz88KVYw6UBXhVfBebo1N3YoCtvFAKGRhYfKW3NvfeLMDzaLNdT",
  "key13": "3mNrmJf3P8RCZETNSTDiFB2LpsiQMnZfaFXoRvnqHUK45JxqUiHWjyefgNwJ41btmLg58uE6WMN8QzjVCoGVin9z",
  "key14": "25UthhSwyqbAYK22yVLrxtt7oTu8rRLYhR1zmyozzScabVYDbutdFoXXUgQ2MrFUxH9hVqRNLMczjYnc11hZLQmE",
  "key15": "3dBNy8FZD8j3gNTzHwriBB3SY1QBkJr4rzpuHZi71bq4k8u53Xxv99fBoV8hDpiFA28oiRVPg4qUQLUh2Bqu1qaY",
  "key16": "33AgiiB27uTVWXE1aRB8w7DoHydgC1yZpu4Mj55rsn9UTDe7iLxna6NzgR7ccLWWFns6uXoBUrx19wJ8HdRExJ9K",
  "key17": "5tQEpKfHoWoNGnhzpB5zUjoC5Lof9RGnnturVxjZ2cMRHFLrL5GyNwwpXdTfKeMt2AsU45vgoAd1ncJwybM8WBdk",
  "key18": "22Drwrev8WVRpz2kTYa1Svu6d2vz76YLcQBn5rXzChL8WCfnQT2fv9Q9N96N8n22ZucB64Zx7dMyeyu1TUDfjz3C",
  "key19": "3N889zqhmYgHcLhSqkQRjk8vDJhVFEFKkPET7zWZ4xAg32Z4zv2ix7CknTQmMPUqPnMcL5v5X3k91UzinqQwzXix",
  "key20": "WSWSuDpQAwZ4ot4gyPY3Kpr3o3XMiCVQK76xguj9xRLFbhZJ2KSMP8pyRUgJop2qucBJkxjvstoXkZx4u1WKMSu",
  "key21": "3ivN8BSj5pKDay24WyFvYAVLr2b6grXd6jo3mdBR7U6aoUSbX7QdvG3Hp9E6tH61iv9frHQHsyJVrZ4GZ6M5gnJ3",
  "key22": "4pHALrFSiw7JK62ya9iVCCufa3x7HPDy9APFY1nzCTKZ9Xo57C5jJnZ9Lvnne3gAsKDkXRa6zmtZPGfQkGXhm7fo",
  "key23": "4ngRDJ781kj17vqgU7ECfe6RwX39zEWFsykkBGcrYggJ1HqhjNpep58Bf1KvA9UVFjwhbnoZygY7mLZAZFMJGXMG",
  "key24": "PTxsUmwp1qE7ZEtRv45jRce1P6jBsLyNyai87MXmbxb4xW15VBzLZPGGSJMx71wsbx7jZTqsLZtLqdz5NzDYQHU",
  "key25": "2HHWkfqsJEkYZV6vaD1yjCXj5nRvtRya5zRstgbKpkqrerPAXWecRXBgVBSipEDfZYqLMZ6RKFcbCQXkPhcuvm4A",
  "key26": "2MKBtUK3pZNDNasre781Dskm4JmEFPRvBryvRcELnb7aDgzf7iTTuJ9Z7C2NgafiPyH95MJqBF6yE9wAERSyJ4JT",
  "key27": "5p965paqTBvr3p5BkHgThBCv7QvJxRzjm6tENXxnht8J9dak4h3iCVkCduRqPfKeUHFLZpi5QrDGC7rivHjszo4J"
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
