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
    "3eDmjBDcDmMmMcLsHTxNAT5ogPrdhs2AgSSwjizLS5YioPKuYUjZ6x6ggnikfNc45sgq26F7tFSTu7Zx8yR9uXsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGiPaeiqqnToxh6ccfib4fU6CJ3T7KP2CapsfJrTPnLSU4U3WKyWkVyUuRkna8Ysy1goLzAJ85oo7tkhMuqH7A1",
  "key1": "3BgdBXUfCp5NaR1ojGhEk3Xso4UT6QPCESnCMZBktsGUbEwZfWBeoA5WFr5L4eCz5jp6UFJ4W67MtLbT5nRHDJ99",
  "key2": "4MjVRUfwt7mXLnwtf4Jq9QmuWkwt1tXLCGd8P5UwjwURpL7bQfnnesnA8LvKfTLDUXJahLaGTWSALk1Um4jud1Tk",
  "key3": "1owFEn4hZGwx47JovvQ5FAb4zEstUDDRcCDNgedifW4Ma2efkvBAoUziLU4PGdHs64KkfCScxAm2FTparJs37YC",
  "key4": "3VvXZ5MTqbz75cxrFsYD77KFY3aVhCyamni516tgJrjpt1v24nAzW5RutgpRhiV6NqoUyCabaNaeWXWjV7R1wVKS",
  "key5": "5bVRAEngLJ7SvfeR7LBnXRhUYt7WU9wye21Sz1sQ3BQHLqfQ3uvYUFLJiuBaZDSdghawZ24eMtzLyg6z16vsnAaB",
  "key6": "4U8ySbe6rN7F68PDyHLA5WEk8f4AT98gbVGfqarVuJd272QDRNwSfH8BKqnM4Uj64AtLS8r73rah2EcjeGve1F6Q",
  "key7": "5D6YEom5dE13rHNBuvMQcX7wWQZ7biCQmbPvxSTr5RjAo7KmJw7hNcdYtGRcCRHFyp3Z592caxG63uJ1poG5SMZX",
  "key8": "4SNzESNk91n54gRRcmzmqDvxMedeG3ZLedryQ1h69Lg9y8EErsyjMKXdGEVEzEQAeGCiiMNaKG8chnVfSVGLaHNR",
  "key9": "WtmkHfXAEnaNa43vUFdkujQNf8qEYvnGuKstxPAd3WDoQSX3ps6Vj9xRBhPiJvJNmBaCfMPs1BRiLjPKvQyus9x",
  "key10": "NxGpykwzoWuq5kkw5izNysWuLdTjKPYC4HW1Ex6YksqFc53jdPnGbTbf7QGhjMEHqu8YVnUmo7hSFYBGVHhUvGN",
  "key11": "2X15yhChEnyFTouxUckhFhZaKZsvdqV7NKyfYwK8v9VLKhFgYeV9LMZz3YHSkp9UbrLFfEN7vPB24B3ah1Qkbug7",
  "key12": "a7mtKawQa9G8aabxrLtuF4MyybmmPj94KxdLkWWuPi86KjsRCMkWhEEukNSUxvH7WNCsr6AxKkJWuUmP4XfhCEv",
  "key13": "2U2KQhAWkqfVpGXKTMZ5sLP6W1WU2NTWVPuxAvdYEMZfV3Cx4XEiVUPFoYTcYpWjQw7sP51rwhDA55PKkRcE3ed9",
  "key14": "3HPkiMaHEjGkHeEq9V5sPANMUsQK8h11QYhyFL9YU7vjxmtP75Vq4UfEKjTd4MzHY7YpdrNUafv4co5vcGTijhZx",
  "key15": "49856M2QT6yYedo7civifWdwR1QjPYoeFkP9NTLiEWiPuADuq6BuGRfe6bZmYQjFvn4sgwN1w542s8xQmVvaSXGp",
  "key16": "4nKWYdVLZWZwoyDZuP3DGDsp22pxUsCE9duaZnxAEQrmZC58bLjmVnzheTq46jvSRSZDJ5SUszH3wBrScjQ4wsaR",
  "key17": "K2j69T3CYBCXXzU8EVJ9WZgkaGnA11bczbVPDKHFp2vRcYuJgBM7tzHxvAHESt92apZoVcHCyexLv2AHxXapToV",
  "key18": "5qXYYe8UhqUox3Uj5zjKmA7oqA1s4kBSuyj315DtQNffXq73thUHsuMLtc1NCcGFLg9h218vtdoSMkRFiyJ7ySxh",
  "key19": "KG2wL9YbyzxHDJtbv9vuYVkpTepi6wtkxNevSRaa55ZAXyy7BtDLHk44pJcJSbhJGjFzVxvwktUuN1JmRsibpuh",
  "key20": "o7U46arhfT2PCLfq9U3cn2jvyYshW2Z8eeP9vzqSqwmJEsj5nDCwwryCbtmAXWAo9Dv6uRfdaAPmPhLMGveVVtb",
  "key21": "pLCbHMg6R4AzR9hJcSjhYhUFMfNrrN5pKEaApspR1cQrULCoQQPsBjzFnZNBeh6ZmMmRiDUJCcJmiUsdsLkHPDp",
  "key22": "5HyNiyobsUV1ryFerSUN9XXoMcLBfaga5cUyfDfmdeg51mR6BrUn8YWey4fV99xJZAcwNK4e4GwRTMTCGNB5yDM7",
  "key23": "229Z6or8W9p1bYDr6o3GzMchPCCteBAaSSeDEgoJHb58oZxNGugRgEzaXk35zw6c8DDoVFt29HMwYHDRzhq4HwT7",
  "key24": "Hv5Y1XwRRJZf46hRFDoeNREavsX4rGV9kaYQwxwR69QA686cTQP9zg5asLUY7WHcoVFtBJ8jtcmEMMmHi9dtfeH"
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
