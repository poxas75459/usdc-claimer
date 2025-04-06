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
    "3wvRxn1wbY1S2iVBZcoM6VH8GHXTKk7RDTZkEKZjKMVbM9mfhKBWCkaxxBKFYmMfpYvqDpN5uZ64zq1aUANd5RdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bd2rhVXnAV2cjkoFxz3dhUuCuHo9NaSSUqQZ9oQ6q5ir9E5jqT5iRP2AGHnoDjQ3VJzP55wLQCWG1sKqeeFctCJ",
  "key1": "5Qy71dS1RtZupTsFEZSG4gWZ7NUZYNY3o6RSZ2JWwHjjW2939jauSRsxYD4wo39dqDR2QhG3VQDpmn9GjzriGyGE",
  "key2": "3UFmRFHc3iuJWVHr8vGdxWfU6Qps7y82QQLDVGS65ghii2QUR3gqtmRUazkgHVqR89bVumMguj2yHJ7By9PVvgu9",
  "key3": "2JkHoJAwqaPfpjgw8yhNU1hT4jn3btdGzUFD8SEnCEwi17QWTVR5jVm3zTWj5D4YcRRNFotVX9o6ch6sB3L5gcxC",
  "key4": "2jSp4bHPf3eJcdBKpHZFokzwAg2iVB4Nosvaqxz8NHxsp4De5mskctcuYg1dawXr634wnwtcwH5pKDUbCYMG5Qdq",
  "key5": "5FnbyfHABasLViB4n1bqfPuTxYdyK7JYp6jYiuB3ctENVX6vmJdE7CD7hYwot5F4Js1UYMDAAcJ3qNM5NTeLqEtL",
  "key6": "5MabsFgmdeEAhmVa6BenCW8V7e4KYR71GC9ytBK7hyCLVQqTzAjQ13F1QHy3xm7bg8rvhNbJdj6Uq5fahKpbdqpo",
  "key7": "1ihn1r2NCuk1CmhuD49nvMnM51ZRJZA2kTFwyQ2DowmYnAQgAvRfSvUpYeaq87aX1tpkQ9FzTt1oBaiDgC2tp6N",
  "key8": "67TYELWHeC5kVr2yQiv67zSWRG984ULLXwzQzUDo1b8SZhNhd6NiC781RY6faPc3GAGEJXtkm4FQvL13MQ8pGD9D",
  "key9": "2NfN83zrjNgs4PknqnBzxL4ynCp8uzqE9yT8e5f1dvhZvgNnRCYFh9Wivx6h5kUjLiishEavuLUN7R3ARfT6yBQL",
  "key10": "3KNUu75SeH4ppkLCaSuQDWLeJg5fgktHneHppiQFFTwrweZXXeJLETtABThsMccMmbUcLjPVhv1df7o1gh8nwVta",
  "key11": "5eFf3WYQa7apMNh9Bu8HhNKsAcGt7YEDFVY4AfUy1JaSRT9hVw2d6j9iAqbJVuZfKntrNVW33b1PBvLHQ6GcLCW7",
  "key12": "2XBNPr9Yp3RZvAPTjq9LSdjYrNx7KTLrrzjX76nT25kKXLKox7BcPhrskcotoRq37RPLWuR9JAGdMLpgywazAmiN",
  "key13": "3ipNknCZu6j8b7zcLThTYpdEF13Q4pyrKrrDMU4zdWq5Aaozmwv61JCHL32zrow3exNp82yHH3XBF7rqTTn9EC5K",
  "key14": "3eyjMmStnx361GGQcf3oJPj4CWeTeWDzn2zhVWwNA4hJE4R6YnYnsAASKvJ3zDZhXZd5hyLnMCkykg2iB3Ngugcc",
  "key15": "3FGiUyzBQ7S6nJvyfYdcuxCWUU7dUC3rM81cj7aVW5cnRTaKzWy6fDNEAVXctAGf4jQtsqMiWRgQxvqAEMKDavgq",
  "key16": "VybEDvvngtrXS2uwiXnu5Vrab7rRwsSyGRqnSRWpWhg5iKW3A1B478kTUyPb6ZWvwm6PRmrYCFtUpscJQ1PcM2N",
  "key17": "64EdD6KoWicrgu4MBxKvXthswgsJSsUSyc2eQE1Xg47Rvh1QLRDnt5mUbbr4YXxytJeetkBbC6GdvStzaJKsD7zY",
  "key18": "3PaviQkPyhHAjbNxGYUaCNckY1UDWNwaGa1AbDPsWyoXgD5iUEeAFT5vUHoqFTHcnS6vECw3pMZguDYRCPbM5Ejw",
  "key19": "KjJArSzSdpDYD1w28dvTkHUrAQhcHPs7uHsisafQksQ1Jc3SGRhbLX4BzqBiGASQdmBh1y7A29FSGvDeTVCpD39",
  "key20": "3CECDioKvQowQgDvZU8YjajqsTNEPKPg8kjxkeUUYUMXBTcJejuha8wDwcUYjtsYTPwFBckVFBwvDMR1fEibAiQy",
  "key21": "64dEatnobcjpwe93dV1CktwCTg4D4F7ov2fqybsF3zzqjWLzsbQBjEcKSuLH6ew9VzAG5eRhjJGdqayunz8VrQYT",
  "key22": "4Y6ZYs3PFRcUZqUz4cYE61BgLccbA7523KwZbG4tCukSdwAr14YLqD6ti23UZmrLLqLPQHwcCYYWREMYrcbdhzx1",
  "key23": "5N43K9GyGhHRZZz5CbGfGyzLkjcJuZUkN9AxmdhUTsarHNwQYmzuBpsfi4gQfZuqfcLKm25n3zD1XpQnDFGgWcEt",
  "key24": "2btPGDJn8uqxLtJymBCgLvd6CyPcZ9JYqVZdsMNWm18yPHgAi8wxHZedRBe16MgpufSxudfSJyuCkrcRDYwPshB6",
  "key25": "4VyUDfd5cMFxwrjFiPVETycc4NeHmNiyP97MvQScdfX8qF2jEWehTf2Kp4vKbR3QBx84ZzuwK66F1x1JKU9Tuhp1",
  "key26": "vXzRXJUy7RsySNfjrkhUNhmxUQzuchweYz6hwgotHsVdeiq4s5f3nCmo799R7UJUUbyBNQ8BndPYx4ijQzjvZN9",
  "key27": "35BZ7yMEd7Q88ZbawJU4XcNY6eS2TeJ5meLc7ctAfSCWgV2NhGJRSEzjhbcVAHJY7KNz8KVcsezg5Nbbqow2bNJt",
  "key28": "3CRDUFhgddZWKydfyMELfnCvVBZsfVNxcVqSrgUMxAdCAxi7ZiqWFkgH6nuFcGyAc3JQpaz6hjaeNbSUGTcqj2DG",
  "key29": "5VmxEMbiDHkDZZ657Sjrizv1sa8Ktt53D63QJ5Hj3LMWL31nZN1YQqQUMJSfMt6n9y4oV4U5fMBBGigNkvj7a4yb",
  "key30": "xL66AMPBppd83zzx2avH898j4213kAXNTVHgCyqiA7oje4Nhi1nt5EU8jDvk4rW1YgSA5QtJpAKrrBdLMREdngU"
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
