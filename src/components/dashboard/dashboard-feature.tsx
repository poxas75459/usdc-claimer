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
    "2LkUMHRunAG8GZ4aHN8vsKDzaZSWXBYUzRWCztGyvbr1fpSzxXNqW5ZmDYzdyhPxtt4UNujqUzp5VfNuMfFchffQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xwBiT9sqahQLruKV7SZQRcoE7ni4CMmkv9Xp48bP5a9urPkyY5bsNJmE5DvvqMGWaBuWSao8JpVBZwMpPqqRpZ",
  "key1": "53thGLpZaM1CwJ731kevwLYdg2GojieKdemZBYuE2515Y9Kz2ZCEaf1hVttGa68A41wg27A5T5YAcMsXr48QE4Wj",
  "key2": "3QscLnEwMrBV3QZm55sqyWSGn6e5iUHQeaG7jfaBqzS4bEN9w9MoyaJDyCjPiEMDykCPd7PbPRohsL1d3k9P5aZ8",
  "key3": "2bqTP8V5anYuuyKo2ZME1Z9WS3qY8tBpGzKoEKa9JQvJvnS259wNgdGnJ1reem6zDg1eSdzy2dukE9KDMDavB1bZ",
  "key4": "5AbwHiRboHbro3s6BtBzY1umgKhWSz3WyJezE4jQ5ChMR32oqtxK19XDSwtg6VMeGLyJpcZpdZGyLBiLabUj6ZhF",
  "key5": "5a6yvx6bvsh4464WauiQ1VpU5Xyu74LJQ45CFJCZWQRwjR12jLkjrt87Ja5dLdqSzRRaLV6dfNPzpSoeeNuM6pKQ",
  "key6": "521xZW12GEcjBW7pzDtbwwCXFzXqceiAA5pXbfgiihCf4K6s8tMvgQPrZjqVZ48EYCT2TjbqSjZjkEA6oFHPmeRN",
  "key7": "RUduqhdZU49oxpkx8phC5kibgrgTTtyadPZ7tB1JbGhx3mGdCEpACJrbULJxS61ZfY6A6W5ehgFsapdkQmjXq7j",
  "key8": "5ynMivvvR2am8tHUkoqtTZhQsJG7UJa1a18JUqcHLEFVBzdKNZx2z68U7QEGzwXRjycpwLoE3Wwe2ij3nAWBPnww",
  "key9": "651e2rKgebRX8yVBxCJ8WwZsMayCArhpQMKoG9npvNGqpu76dgJSsyBxEnfcgr7U5CzVvEGHAcGZbaTT4t6TuXhY",
  "key10": "3TzGi66q4mwL1cebrHyRkKuN9nRmRAJ77Y59TTdGVFCpzpdZdUo5DbendDGE9PTsrS3uDEcfKbMX8xEAuGNXhZwk",
  "key11": "3cJrbr953KFjn71keTzZj6rbB6yoEX1CorHoyWRWKeE7kz7VXaevSc78DSmC7iWnw4fZCZ85JJauqbqZQYizNx63",
  "key12": "3Aumtw161CHoCMNg1pUKyHR9CkT7LU4C55sSufR1WHfKDCGFQ1Cq4fVefjSj2jkwKyzXM59DTBnrzMUexvjcB8Uw",
  "key13": "4XRAbGLXnSA4e5sA7nTJq8eKT4D4VnssfUVYiCjLscC6wSJBM3EKc3fuwBt33JPJRBfQvXf8epZMvP4tjxfNuech",
  "key14": "4mvBJfRZTYuo4nZtVz6o1TvzQsZGN3rhZrsNK4F99UJmpEPDmfzTtRaK9uUpjswkJoSoV6EZ9NjwS44HKsf6CtpF",
  "key15": "2CgWifAN9opLtQErs8WsNvNJPhDLAwbZsHmsMHLXFTHfKf86C7yHPDKkGPrPG27iXxoPmXy6RV9xcHT5QuTmYkto",
  "key16": "xVCjiRPSAuSnvcBfdU8WiJCPDgYUjM7Gb7A5PAfJPWoTwLdREskP9MjB8RmqBmZ6ev7QEvtfMrUGVw1UxqXdEmw",
  "key17": "5bxUwnsrDww6jUF4hcsoqu54JPdxR5tfjKKXkLgn9kxGew9Y1MEa15G7tyFq8yFKXB46gKkZvjVhwMHtreDx8PkK",
  "key18": "3dYAaXyCUmskP6zsA52tRT5rbqr45se2ddCH44PFQ78bp9Su2myBgrz7NiGWTiN4f7FQgK8BmHPXDFnGsNou1HYj",
  "key19": "5Hot5kRMDfm6DdTwiD4eLG9azx6hcxVAL3mhietsMGUVDuELEB4yw2uarAtgwq7epJAmAKpvUQzy2ChKjx6uePHq",
  "key20": "664zgqyYchWMUWLrXGa8fhV9Z9KS2ZRqmexFdpJUWJEHHCnzp2vUASPdWn5J5GFGaDasMhifWMrYsDoiMhor1V5h",
  "key21": "MaJ345s8VNagyh8GkY61VEiQG8h9NU4TjCoMB8hVWJxFKz47aErUwVZ5DeyxgNzCLVz5BdzZrJACmQHr5ZbWKYi",
  "key22": "2EP52mFpbPSq6ySrzvUejz2CPTxsvRDTiGQa51H9wfi89KaGgjrtsZ5oB48U8iKCAwaBddNutDRLyLx6UQ9ui8Kc",
  "key23": "2XLQbkRPBW2hjYxikkmQGp6KSgmSYwhW1jS6ziReqxykJscLgq5d3SdTiV1vVopBXshJii8eKLpMzNCoaeRQC6tU",
  "key24": "4ZgYGPuvSZC2uNY9gecT7DML753egsLeKKuxD8mSNsWiCkSV3qH3PaRaNyCVLnEyHGRcpUfPPY7hfWoEsz9GYUfw",
  "key25": "3cJSTALwYBViUhcGKbNydv3ThB1a3K23siAWZMeYbniQmbi8Se4J2yid8MfnQ241w39x3nraPi2CPVqWnHJtv6Vx",
  "key26": "5KxuXsLQ7ptZT7LuKCRXLJ2AHGjsDFYpJg6TSdmzbjNHPPSdxSXypV3J6t4EKSjtQLBSTkEaqjxYw4cs4WMipnfa",
  "key27": "4SADnJzRUxAFAUyBYFCxZknqE59nR13xvXJuvMLNx6Pj2YnYq7QAeiiMwcmu2pZktyegKnjvZo8Aqocen73AGqKx",
  "key28": "2gk5mLcR8DVXNtR3LiCRpE4T9VN7tqWGtSmcRj6sy81QPphy5bHEQJxbYYHc3wRqizUsmkqRCRLjv3VYG8eBGSGy",
  "key29": "2vyqM1HbSQC7bXCYrrppgxCh66B9RMbYufmKVBe3ZbvFr7BhQm9CsspWDbE8W7F16xmJj8wpEhtDxHYBaeeSEWQY"
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
