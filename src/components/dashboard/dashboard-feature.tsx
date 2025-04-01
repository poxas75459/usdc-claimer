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
    "376KJup6F3kJA8TG5UJhosHKptX1Z1hKaenB2pGSTwRmkChBRobN3xoqaSNGmt59mztnJgdvxJeCoBxeTGF925Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbw34Jo87FbHrmVENFuwJpen8w9hKSF6KkZoYpwBH4mdwu99wkV9F4QSuXromnhUBGfEGAKGjXXfPzA2nqqjPdX",
  "key1": "2aCAXbAQPa9fL8pfpGHotvYisynXaenGKAuTrwbehFq9JpvcemtuaVC4MpugmQ97JogpRd5j2gBjhgxjQ6qyzNFE",
  "key2": "hR7QJgXkvi7Yd59eFHJRfQ57eFsBTHXqxtSWrW3wJYM2UdFu5k9sBZnF1UrzCZ4iv3fHrdK83F6Gqd2HbEjBGRu",
  "key3": "JHWKRgbBWTeqrd5amMBjhEY9ZHXKRqTNJPtjKeitWjjqjTR2J3bnyiot1Y8RzxdR5V8qnS9q3vYGFi8eKU8jV9e",
  "key4": "3uDbzFAwWsDB74SDHq83TmhEVf7y9s52T2rdnR5a1hHAfDx8tUQHGw9gSqbyVQoAZyPkEaGiyHJ53riRMVt3kAKx",
  "key5": "5ZoCv3aewHQbC62KPekhwUU7nMu47SQ7VRBUogaTHzWk9RCzc4s3sTe8VQ2L4fktT4KLGkiGrGRReCQrf9U42Ln5",
  "key6": "4WnsvYnnrHUVEkdV2JSoGyZRnDBrwDg1KjdnwuPTjHP7uCFzsjxPW5miJhnHHpRBkBbmYgP5VH7vhjRVHZBdk3k8",
  "key7": "3Yik9zYTUu9rJgRsBzfEFi98RjBQSsKX9WweRgK73Wny7goWTyyNFCLjv66phj7Aox7aJD9kLA8nA9wnj6rTHnZS",
  "key8": "4kHBUNurvXGAGxbXBE1tpU2Z3kKkjyTCg4S6hs3mmfqepZFe6Gt1QHnfeZNxCt8Rz9HCUPxRPDUp6iPmuStxZ8c7",
  "key9": "3MYEgbzJVoRXYbK7NwRKgRxpGcM2dgNrLbxpYa1CVsLX6DeNsTwyFAYUHznHpJfMa2FTij1ee3wKHszR1yR8Ezhh",
  "key10": "66qnLsCKmBKrajnGtp2t37HfsRgwh1wae3V9wpgE8rK6Kix3NrBpgrPY253zgyBeSyMsoKkNxjmPdurCUWqZKxvX",
  "key11": "JikD725gHeb4goAbqRSKhNDgk4zHJeSxCPHkE3uAZv88MzhSN9HHWSMgEDhQXQ62TQsQ5gqEjKTFMHyYMJH3umt",
  "key12": "3zm5BN1XVJXXAfSmfyPVxstwpMpbo7vQDjr3eiCMin2nnM7G4XYhegHHb9Bbp4B7jRDEnjqhJwvZ5D8SL6SpCiL8",
  "key13": "28NcWbQ6oFv9dqYG3bZXdAAxPyMBSeVt7C2SMrnbUJpUNpCSwFzDNUkBzrHHxiQQAst9xSmYxtMKsTNE5tRPpy3M",
  "key14": "3t6vtJX6EekZLD6aSYk4wEmfuKnY1vx14zn4Po67ViDC4yvC3nw56f6FSDigNDnybwU8u4vC1MhCugumdnok9FJ7",
  "key15": "46M73pp1gEgFGLWxR9kaMZmWM5D9SrQfDAGSWj64rqfzwkLPT2N34D8Qo8b4XqeaVihdP6W6pi8i7HiKMdrb68Ck",
  "key16": "3r5jm4V2QDDfyXwSaBjce266FnQzENKD2U5ytUMCR2fbT8nGQEMdGnPfRgrV9kMGsxSom4h7efbnJQ2RRDrW7Xiu",
  "key17": "UNwm3eQf3oQtjG5NRtVACA2x9HwyxZYfiAmYjMzyv1Rx4Y24VyZe267xxJXY92PR4dYxkLSvFfnjZ9fBAZeAAT9",
  "key18": "45DrnL2v5TcijXEtDCoeSBdRSqjLKWo53wyGmgDvuRerKFY9QQVs9JtapsBegRfWp4wwqTJqQVx5U7663CPFFiPD",
  "key19": "3JAEi8eUC1QmmMgdc8MaV5LdFu4gZWn5JsAXyb69owXZpE3fwbjv25PdbGoatyqpUThFE4EerALwCVKcZohqEcwv",
  "key20": "2gLC5HTubxHJf49bwQJXhEL5iWHmm5k2G9D1RkEumnz2NyUsqtC571P8JobxxD9g67dySNJdZqmGNLpCyju48xAo",
  "key21": "sADCZEaPv95AQbTv85UFyXbynGnMHBXXwsmBm3pdN1yAD8FwEthGxrhxfMHF775Q8uiUEFdc8iMnWzw2x1BPJZh",
  "key22": "3VLSmWNrz6nRFi2PK26YwxDp73vEbTfPATK29GrPtShfyyRXnNk9cNxvuqJhPyV6SPviBTP6wekbNqYWxVuA8bNW",
  "key23": "2XY6G59CyapNMHUv43bwPLBqsA362sACamtBDMMZKmDB3BZCy9TDWJfwzArcCLQa8UD8pjtaERJWMjXt3ZoRVFVr",
  "key24": "3MpHGpx5f2JkLDEYUar1gA1iLBuYu6SM5V1nGB3pJVKi7Kt4uhABiQcWvrTXwGUcw95UDwDoBn6QVWE56i35fGcp",
  "key25": "2fu2hu11ME4JynvGUNTAQh4z1GGVepqdwbzTERW6D1yyfetWEt66316GqvqLXFL6VZbMkxLLzA7PGQw7dBp2x88c",
  "key26": "44Npg2A3WLoTeW1UYmio6KgeZNwCw9STUkcNHJ7175RUZxsEAFxL3486kqNgw7oXCBXJAfKr5AZ7qNheqarFToYf",
  "key27": "2viBuDVjntUQ2JZKi9GkP4d4oHd5wjYpL2zZTZumeNffEDnzCF2MVmZrXAwE1grtapi6c3YUKWNkJWjp26bGtC6q",
  "key28": "411tfq1jsvtENK7f4KF7iPPhS1wveCNkUEZ6Ku4LrF9ronfSgqZXiPCC1tSo7R1voAT12LdwvtVoPiuHxvRTCgHj",
  "key29": "5MV7fxkDNXxq7pukxYot8bgHXgoQSnaMcgf3nbZFjSqbGanTs9JbJiP2pEicE2sMW54uBQTp5TvGeGkearFpwZUe",
  "key30": "2xV8fcugRR1cgA3dxuLseNw81BDAWVCkvtT37yK36J6MupcgPjRLiaY3qq4xwQQTXj45kGDtHfNUcTrJTvfLy5aU",
  "key31": "3BQkG4Km6Hbn27phwHaSZZngL5PfncosrmnFegyWJvGYRShLST7s89qdgtQZaEkTj6zoKwGXaxABDQoq8NnWF7Yt",
  "key32": "4FwNwkbaNFSxFr8uGdEBEYV7cdjzHoYMm7m58cEoBYLowQ5mLWV2Fm5jnhk5K6NCg2vqQKDW57E9negKycEZpKVP",
  "key33": "37fBaiTemNZzYmW1Wu9zipJyY9qy5ux4yo9dFNQe1kZoUJRgGrELLC3e8az3KL2X1ueDw4bLjSRJHfQv5iiNgrjX",
  "key34": "4PZxD4vsrnogCD2SyPjASUVeLGYRg996TwmdSakaj8bF6ZftQmXtre21852PhSTjHvbjtzkbkxTTUJvPmbGqRVNp",
  "key35": "4xYWJkqqiRRsp58akaXLMgF3R2uktuPiFvxg38RSAW98BLbiQj7gJ4dFypDtSY64wF1hUWBbLr3ddkowWTFYVdX7",
  "key36": "4wV1BB6VKuM4tsMDtsRtPyKrW4iZeT94AKm2WyCmnPHkxNL6hPLrC8YQeaS1rM5i4row4SkAdyN4C3F92BnHepMs",
  "key37": "5AXfjgCgtk3Lgf1RWEB6KxK427PTogdhLukn3sP8Vy3LAYiA8gT8ZvWE644mA2fPZBiRCcRYhcT6EdqRPXFHSdgH",
  "key38": "2BJrUouJbMBp4VBS4KzetG41XbA544YaCabN87rAWxitsLeAriavaW6PNMRVfPHjJy7xWK3gNM43z9D1bYCdeKqN",
  "key39": "3LCTPCXgZaGwt3Wd5TLcvVpto8WQzww85kJWEdc4eL4AvEHJrsbnyY8DM5HtSi6TapDxDi9RdnZrDB5x5tCJQpEk",
  "key40": "F23gmyycRP6bqV4JVDw1BdC8cQKecPsXvzb2pB6qUekPS1sjWbCukb59baZq1wDQas6nfMNej84cXe1pES6HT44"
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
