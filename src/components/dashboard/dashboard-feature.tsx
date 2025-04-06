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
    "2ydbnYaM8B5TtabYkFfVRMQXyZ37zKouZjQNH7fwqNQ9gx6j4Wm1fBVjLxV8jiZuWhNTCPHkDgVsbWr7zaEw6oZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhU8vAKbx8if4B3YyLjkZKWfZ5tYRbGafELzExtwcCgFZmzDRuMuPA3yxzojsPXipuW6Tr8BR2X5ZqU7jCgDAdD",
  "key1": "wLD4sNzLgvr4wbJSd5V1vhneV6CiZgoSXdhkcDzAtoDr5vxmYkHDvyRkEKraprGnAKwrv2sUJLeZt9neZ5vAQi5",
  "key2": "x7tvTvrPuiMSBeX91F3PZLMX8WejjvAMq8VbEosm2NfpkqBrLexFzcKAFc2Qb3awvRK3ev3GEqea4y9zBgnVAqp",
  "key3": "35jMLx3up15zaPqhiRSvmVymKGuPhWAgZLsnBbwNg9n5SbHrEedJyzgh3T8SaaKrhHWNgaD12XXtGbGqpppqxLCi",
  "key4": "RvMe4rLbU4dpTKoRg6HtkdfcgihRHMGCZfZe2bJcsAxCKtDQNE9Vaev4iWH4ZTy34a55oKbQ3QDUzop1ki7zJ6L",
  "key5": "4iki8J8mwEa7Z5TzBzT5vWKUqpuERUqhH2KxYGpeNAYoBksvjsXJRa54Sy2RdETXdNaTJQrL8EdZ2VSyAJjDirfk",
  "key6": "2gixPfgajLT1XGa1AqLWL9Yz6coFGBrPP58qQ5U91tD5QbehmsZA7wcAuuywNeqxyK5cY6jrmpLzzuHd3eNaVac6",
  "key7": "5kYGNM26rtuF2TzSGm7xzZXN2yZh6RzhKjiPrS6kyjfm6GvkVUgQ1Y72xswTXKyGxGSSVyDEY2DHiFDiw8J6Wuye",
  "key8": "3qtmAZXsnTAWinGxZ2nBN8a3u9PSQkJNL2RFJADyWGDAP2c1GHZrN11Ew9Likr3yfbw8c1TknAS52ECtgte3jn6a",
  "key9": "2JCvJgijjJ966TGtUBJqk5aRxpJRanLE9wtk6j81NZDpSQS1AVBhefAfnK7QbsJJKo4j4KTETLRwmFJ6nRtcfL6N",
  "key10": "5MY26y51bjK96wdsp6HyWkLvjLnJbVUWppSezJdCG7MjzuZSVqzjbAsaLj48jpoR7bkf4HZWZnszEgpNtjkePygP",
  "key11": "2sQ3yJegvfR2yfKVc7Pg4PJUVj8pSPXCt7YPiwL34nkPz7zHJvqr1Zpe5EriT3GygJecqXiAZLGhi8jceYD2WsyW",
  "key12": "mS7tPYt2TjAscs6rEixqNf3GTok66i4DkEWPkVzTa1Ai8RRjBqcC2Uss952p2BQWw87WsLQfXL5HHXBMai4UWXM",
  "key13": "5KWQHVwjojqHYxJU33BcTcfQufobNzjvbT6b2rbxhqYgXWAnKvcJBXeneKZxQKUqNoJV9TRsLr3pvASxD3SeYHpk",
  "key14": "3JxywPb69TozJfyY365N5fFM6rX3pxwaiAq4eL5k77CZVL3iuHUjZxff3z1jJ2fESujqWASo6xz3jdCBwra7ctju",
  "key15": "3nUuo9cxfCznTrBdTb3vtUTLLWWE5RtEP4ps8bS3TjvKX6ES1fTKRyJJGarDqNU1YepqebH1c6sTLBYtNjdNCjtQ",
  "key16": "3cmrHjebwe85d31Zi7PKxU7t5gakTqsMDFTFdRigfN52XgHjShVJJzNR2enRJZ7kH5koVv81MDisd48Tz7L7cq4d",
  "key17": "5jxvYcPjsp3ZdyujjJ7cZpd9vLPQGV5VNBK3qvHup2Bk3ytAcLxrvvyx2jzN6rMQwtqndhj3NuFRbAknD2n13zXh",
  "key18": "3K6UzwP94mzYbgP4MUJVSL3T7XyQ3AZM7CN7rFsaWVLMbafADjw7YkWyMA4nwTTSGhWRkLRQ4gttPZ9BrFDPXDoU",
  "key19": "2Le8fTGycWLQ88vJG87roviioyespQB4HXHncZeozFptqddUfwZJ23c4jB9uZN61DTmf6jLBiZd1xFuhhCHgcJuM",
  "key20": "5H9DpvtoPpJxsFnJ6wJEvRFUAwp6QPSsTe896zAgk28sUfKncG4ie7j56txyRiow7YvoMfVEdPhitxiVZbJjkJW",
  "key21": "AgMZmMDyz4CtERH24TM7o5neha2BKo8nSk9ahWF4GJySp3To5BLi9onDFyZjbayPfDYLa7QkgEf1dire17HxQmV",
  "key22": "Fe4R91X5fTJvaaTKMW2JiXZW1DXW7Ftmesu59jFfRNvYk1zKG1Qx8h5NPFHHex3jWwF8JLFA5it7ehSsYiANf6s",
  "key23": "KDZqnMXgXjtGuA99gtCGbHtNLWfQ7vRnrtCRmwtSx2QE8d8cJ3q9oKuJfNkLPykVAi6ADjn9JD5BAxsA6U6ibFM",
  "key24": "uAHZNnwee9LorDBE47PwH6u52LJEuwVpjA4wCRpNcaTFXF15tuyQKqiT2V2ENT9ePStgBAD3b4HfjWfzEjgrzCL",
  "key25": "4pZ8a6HFyme8DcKBssR5w7cMnt9oHS5dteuv8XLcwVzW3iRM9JL5MxiEhr4DtDQwYyiEAohghMszkhYFTZF6TduM",
  "key26": "4HvTso3WqLt8WgK5iQpXgzhJP6V9zcncLnkm3tHgbCJoZQhsUUtx9eBGfsfApBABDuSyw6E1xBMvET94grLGjF5f",
  "key27": "4vZc9ofLVXcPnDbpf6uC4SFom72UZkWqFqim7DY6tsZM7VGPo1H1sNoeZ7EFYR9invWbkE1yQZNcGhNMAAwvfrib",
  "key28": "3jMmrFe366x2wr7WFDEZGjxZTazcaDVCG9p7BkgHo1ujuqM5ESvyQq5NLXxq3keGT1spXNdZnJf3z4geaxMEBXKx",
  "key29": "24SEmWS7JVePEVey5Zqrj6UDgTXwsnVsfckL9GPLGseRSTAB8tTp6vJEfZcAyASMxMdsRaUS4d5YADAziXpPmiVZ"
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
