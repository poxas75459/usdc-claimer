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
    "388RpxVjNPKfaayTqwavEwqVwBie5oKhMxZSbB3vVx1ZtohUm2AVxWEvu64PMvVvd4kPNSBDwXawVNygQ69uJzHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3kKG6UhqvscHAxyDmrXpLc7xVco6qFhp8qZx6vmNiy1WHwGfmBfVNdQ2JeJyJqsdBHEyZzxvy8XekTkJkLNUvG",
  "key1": "2BJi4cDD4YteR7SVoCsA5jngHLipNyyv1cqbT3iC8p6zL1CDDbxguh4GewVLiT4rucpm5yUXXfK29VUxJYuMxXde",
  "key2": "3c7UD51hRxm4jNbw3rbrjKfZZpxpD25LGersWxU1DwwMQQyDsJSuDVPKPX6igLWyWhP4hDzw88m7VBhooA3RGxRd",
  "key3": "LQNKR735mtW3Y7tABHk828YjYT6dy6L39XPRte5Pw2ByagphthAVHFZVeBPA1QXFzcB2R4evzdqfjdPAy1ttX3i",
  "key4": "33pheZHxpUFLFECX95Zb5WgtBkwj9Mm8meysyYHibnHX2E1K5DnCvbKmH3GUquAMXDqJ9DUw8LRvkFmLHJpqSeQV",
  "key5": "5LRQU7g54CPHTJUThstYpYyN2DiTTCG6pSX6G2ESDQtrBAh2sw1JhzMQMGopbiKUWzCcpooVgxV8msw2UPjdhjjn",
  "key6": "5cMoYQEyETXbGh9JWHjyMMgHzucXDkdrjNGbvLgMHbEqbHR7hDKx6Ygo2QrX5nvpV5ZdaYSrRCqsLwiN9Pq4gV3M",
  "key7": "gBrAN2YPAjhg39LriyRgC89Pe6Vtq5o66N5zbjKF361pcRWraCFNhbAoLQ39ZHWFmoi6GCj69CN2SSjdVz7JTcr",
  "key8": "2jvqE6nfEj2LfimMKv7cd4Yiuk5SZUgu3Nk5ayrcquiGRABjanmuE6sXrgr5NSCoPyfpWDQiZCW32qWx8zQhVzjS",
  "key9": "62NBTKhhF4Ln8FrmCstYpfRb6CK54yCW1bXRZE5kudkxPWcGbSNCrXHUjZux79Y5crqmy7Nt2ABmmARDyVQochqb",
  "key10": "599TiJ4upcXtD7qXwyyuYt4MRpNccXfem8SvyhdegXnxJqmMRAHuD1S67CYKhXu46X2x2MrWB1M4EaGHfC3LoN2A",
  "key11": "5oT6zNKH7PA98fWHqiGHFc4jLJtg4qc2UEf3YZUjoHUT2Trkc2pSuwhnynk49Tb2Bvz7JkQv8av3UNTgv9L9NDSN",
  "key12": "5NwLjZfurD1wwSNMJy8fBVtLbb6dVYfNcBJ3FL1sCBcLX7r3HTJ2Z5tXwkUPepRsDwGBStHxyKeBW4tYeHXT4FHB",
  "key13": "5CNA9AvrnmQToCDQmsKFFftxvAEaD4JVQJv5dmc7bvhK7Z5VMaY8SeagQkxekYhmu4tbZPbEUaQrCXfN3dHuMgxT",
  "key14": "2aw8pkA6eaRcdzC6xYDTP9kYDcQ3abdTswgysHSwmhdghehPtsXwptEVeoQz8jDmGWSyo9ufpXbDrtofrrKXCLHS",
  "key15": "mVEFTbbgv4ybyZdLLkgT3fvdLNgXjMMhANnqTavJbVSmwcsvJuu2TWV46tiU7cdopCdSN3xZxfAzReR3ED7eRsK",
  "key16": "4J5ACa4ZVsjWdz7fNsHGzJx5VNktDy4spnRXys2JScEmftnpCFR9SRS4WkP8nv6uyhkCSuSuhTjQ8jsSGe5K6bha",
  "key17": "3G8JT4bxw4RjJ99KWG8gUrEeG9BDERf6Gq7EXym5rkjkisZy8VVGrr2X5LiJdhX5y3UPsuMo1yaz2n97meE53EEs",
  "key18": "5q6fgFBXebe9w3dEi6TmocMna3z25zvdkZ4W48grnkgNrffF6cuaHHtNsUTABVRLU95aKELb9tPzALBT4xGBL3Gb",
  "key19": "2ZZYrwQos2AB78E6bq5AX3hr52XG1EJPCMAjKXfw1BRtTLY5EddNuSRGGbH7diBiEpwughMchk8WUnGM6rYYUXSa",
  "key20": "4XoLvAFhrck6Zxfh51TDLyRZ3kNvyKwp2SenTaSR1rmZCtyLAyB7zPW6ktmTu4jkFEgm7D3LNiq1B6C2EY3XYgUL",
  "key21": "5WQfFzGa78KrGXfxNX2bmYanzmJH8icRjV2D2Pycsy3eEzCErWE1QPaveri8VGVAKAsjS61429zG2QwFjtjBV3bB",
  "key22": "3nbx7ABt69Rh3vszgBs8aoNYuiacnZDVebhU1e7J4Qna3WkhbLkAV2Jqq6nfRy4tWRJFPVETvAdvXXa6iiYi132r",
  "key23": "27iybUuohGKJNqdGf3W8G2ctHKBQ8bgfxHSuESTe7TBAPGCZ4R2fknGhk2vcvpQn6TjrZpmNeBGvz5xQj7wzaKX9",
  "key24": "6595sfyQVzMBDSnLVEAyTH5KX2mvt5Bbh4iLyLnAzfihhXP9zSgVMh7LhzoJpkbWof8bEkvPZojbgePQmtrWU2E7",
  "key25": "2r5qarhbugcKR9WjPNyYVuKjTLieioMyEUL7RMiMnN1Aj5WGtyBe9RqmRCarG282kR46Zb4KQdDk4vueHtYErhY1",
  "key26": "4Xoin44mqQQUsV55AMGwx8ddgKNJwA27gnFBjuirsYjpr9v6uRFTn6zsaqJMPw5kp1rtAQ6jwBEQcFqHBHoFYahY",
  "key27": "2jajdqHFtVEhj1N5kuixPip7ophHsTZoxk7t96TARgBH2yRhdapuHqj5BW1DoQ4TdCYFWCeXQZLb8cD3WB3H8nGq"
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
