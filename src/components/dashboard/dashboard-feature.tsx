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
    "4FR6wQGwfPMurHr7JqVnq1ZmFVpiGeyBTmWcciP5PGNjSJMxqQgUxK4ATRuNd9HY6KhY76tQXxfm2DMGar3udQ3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJJTuoiLffimb9Zb6zr9fgKH28vkmGbWmozyZFxwYLBuEDuXKiQnyyYUKrV1ehRGmFpszt2ZEvJa2mZvaTNYs6i",
  "key1": "35kYx8gGmWUVZpEJFH1aFCCKaR3xayLkhr2whN2PSpa4tHAkkZW3vEKot9cmBECwtefaTPfw1MoeEv5gh33iTUmy",
  "key2": "26LPFErYhnEGJw2g4fFt7B5pRvC4CA21F9cVd1FCa6H8x99rqvDJkAkaStMq3HWxLKtM9j2FcaCuGdZ7D91BAuyH",
  "key3": "5WC5wDaEr2jxMU2peVkiF7h7AwvZK4xzBS7SRSNdAzgzC1Xk4iXbZHzrSMS1ZWvLbHLZyq4VtwFxA4cfG3Pjg8QE",
  "key4": "5HZTXANRwLht4GyTfsc51uF8KHuvehrPGpFrkeQogBLqfYHSvsdBfoG3zfVioQsBV4iag5pJ9tMomhHhCqXNtW5Z",
  "key5": "2KQAwXhA8iET8ZGi8pxcJMNREreRULmbx25y8p9Qi3AfjRpAX3ApkKCxz6An11555eqV9T2NQC78adUJG5aXYtHh",
  "key6": "wEv6u9hr8WEQCFooVkuqRYpmwsUV1w1nm5Sb8A66aPLsJ1o9U9Ed1pWU2MGC7id5RkFiNm7DCHZetDXwicYWHdo",
  "key7": "2Rczv5ub6L7rU9BFtvqz1i5MLeAUYZ9pYv3WgbYYeBHu8NdYq1xQFKXRPfnEFUAocyLMNS3exUpwEj4UfpwhNYgi",
  "key8": "4tmnDTjvDJV6Tie6uoszxvajxFxKKhmv5LqCBKAzQSSi2EMGijgVsQPcYum6ViqPivbgsWne11WbZ4Bg4Q5PSkaZ",
  "key9": "4mwkZ33RVkn22NNN8hBKUof4mJZFZp9eH1BSvgdrrwBr8TCBNaQJWLVfEcYhfMz4qSkpUsQqChsSMY7Z9LJeUMW4",
  "key10": "4qdLKQCzh963xpbaqVeVUK8eUe1JPMhqkvrMo2D82sCH6YBBgegv2wtuaaL17QfUFe3RzQ1vjd41zhqTBJ1133qw",
  "key11": "3wtzVgVQGitsJNa56FF1EWoZoDiV6RbCBsPBKqEkwJiP2fb772aKNYCTo9axBkxWtjqrhzowepvRrLWqPZtM7Ud1",
  "key12": "3uyA9PKTrkZi8eS8eyi4MTp6wNPmJe2pyemNrUQbebLbvZymiLw6FNSUwMtSas6g7biEBvRT6TptjsDgbHjLAaQh",
  "key13": "2kTZD7SLFBiAqo9sJKYM47jHk3v7GPtoYJ2uSYY5PrPqbZgGPhsDiprhYtZ2pNrTJp4YVTXQ58dfsuqsmRkYk7n6",
  "key14": "4JiZwawkhwkzYioMCZdMKCNYTpQMQivZaX7RXpbhoKqrMpNUBpGXiFVeqAhEcuGsfcC45LhjuxZkJRJ3sfVjah3v",
  "key15": "9fm72sg27RuuNgcxxozQupQStme4zfdTJFVufyZEwaQqgPHFgzukuyEwEyYGkdfSuEDmPaJGC9gDD3Xo5ykQ5Mx",
  "key16": "4nEH48GeABE2B9PDLQDAMiDyURRexp3P7nDgvGskhsqdHSCNUEwSa5Qyn7aJ2UPNvYhwVnStoj6SbEB4nqfQ8ru3",
  "key17": "3QX6AAMurAHBMhkU2spJgRsRSzGeijUwEVV5EzbHvsSSmLjbguoqcKUeJjzqw4fQo4ygYjNEgyqVqaipz7Zv8TpR",
  "key18": "3xJw4uZmtyDwsDWUohcWmQoGMPfccZLeNSMgAfLGjFp1Y3ny2fzg9qYtUtENnFoD7gdoEV1FS32FBHDBWqdHYPv8",
  "key19": "oFCqrFNp9zctMxLxxMCf7wH2gGiUpiF6Uo28sHP9EQv4uPpH1ifQH8y4Yn5QrGc1McBPJ1A7wudEapRVYVET83H",
  "key20": "b6Mia8dLgLyNAaRrSWFjFkopBfiFyfCjzviYQMz1NesT6ib4o9EkF4Z8E2CxhtRCCVEbGbDVaip1x9LqNrwe2gc",
  "key21": "4GXbkzNc1CZeyhPA19hsjng2BaHyyCbFxYWCRoVwGKN8SzgePKXK5oBe7REn96wMdLBC8pZGjnTpPvyVvSBZz6KE",
  "key22": "AyrCG3q4tXAraGJPm2psTMwBEF9eKLHh8r1cUaZ5ZywQQZBc2nhKqjDZLG6U4S8DG9jaB9BQnST3861K8EPHhda",
  "key23": "5kEZLmrBujyjWREEoWLcSJe84rbeMbiyLPQfgcSnPRKJmcxD8iNYqizyfjP2iKztx2pCC1U7JNH2oyT1TF8pEgrC",
  "key24": "3ScRFemmFZjMVHaNRoPSipgjMKRRzTnsiFeFkSj5AxQjTRAD4BMBS7ft3TztFqDWWhX32vm693aiqefgh5mBf3mD",
  "key25": "5Gx96S9B2ipBnRDEyZf38ha8n6xPwLJW9yiw31y7P86az3k8Ws7Jhr8NxViFh63ZH59GCkeUANXgWhj3JWk15bqt",
  "key26": "4BkTWLPA3iHviQ8pW6K7LrmM12nGAYoVeDR7wykEhtVXPxemDgqkgqVKc4TBe9kH1p6HdaBHUhLPuXthjMREs84B",
  "key27": "SuCvhE75gQ5o1MyCpVgvTFYaea5Q6LCkAHhNma441DgpoTrRSab2BQ2JgSMJXaHyKf1CVHwuCBYzNQGaY4DbaAK",
  "key28": "5yr9zALrHbTy9Uym7Autj7iHnJgKJG7bBKZTKHCFVppgBhUkX2h77N6sdmV85tdEGHKK7osdzwvWbX63m6J7yVdP",
  "key29": "4idhtryd1ELTVx3LA4U7QUt9nJGecWRuhCWyf9fSumPAAEMY7HKxutmAPXZ8efUjuvGqjQ38XW3XZjRi7CVcLDBV",
  "key30": "3gMd6e5ic3qQHSSAK5vQYookdcAwkkvKN8G3zBpm4EzV73dHMXVxryHHUt9WJ6pCAqQMVr5mx6m2BWAMKMb4kKiR",
  "key31": "tHdCXBwfUkBaRi2SdygGvBwevB9X7CVDjZYiur4fk7RGD3bjYQBoKhgi1onDnyCgeQEYKER2nitXvkxTcunpEyV",
  "key32": "5983vd91TzwtHhCup19ykard7RMDKf6eP8pdLEUNdDe57CDabwevxFurF68mEFP3QSPBRAeTCwXo5DeFHdLPxAin",
  "key33": "2d5DnvGpommfUHrZpKHMChw6mQpNZdnWnjHjDRrKL95vyTE9abK3dhEDqkoFiPrwqUeEajaJTuxpUFBcZMZdFE5q"
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
