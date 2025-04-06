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
    "5HZMNAA2FRneCrG8E6S5Dy5vEuzbGRmdVm65exWd2RZptYdn93s7tegEwV7rUfVrvvoWCBmD5ZUPfnNH5gpmC8ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caM3s8Ynend8WadF52Qxoyars9oqWNHJcbiXYuBazgtrtgqZLjnz8aHvdGWQTaTB9XrnAocSiwvxTGxiUNP5jfU",
  "key1": "5E7CBEE9tACPuKr4ozMJfrCFSkC2fkmzmovNXBnMbRbct2kvSeNRNF9ToYRrLNfj5DnNr1b9GfGkudHJ9CXD2RTy",
  "key2": "3PuVsSpTMk9s6hqzS9Rdfj8UhZAvxXy2FY7inRZwcWXitQ6rDRQH62jWdXxdymvzCvZR16dyjNc5TjGkRpAMZQTw",
  "key3": "3qXmTjYN5stBNLiVyY8WMSzxRLZMXfZhpszKgNrCYFxwpK5kHTkpS7eAzhkS1rVd3VGnxW6xVD6VSX3XneFhLXey",
  "key4": "2jLVYkqXw7FhJx3YcDviuehAR5jKaK47DB98r18r2sStLn62FfeEfkcdRqHUZscfPdBh86Rhof2rxoHJJu8py4py",
  "key5": "49YNjCbwKqW3bswY7hKvjCBcyVHAvkBdJ7VyztedT2JMgfsZ79UzU5AaxMW4QP19UjerJxBaqGovNh8UGyQfDvwG",
  "key6": "5Kkhfd6LoLrE43s2isKTEdR5vN28y2SHkxZJkTYDy7aEqco7c4eN6pQY7Nxn5u96koZPNDVeaRRJTeYZdPSCmnLN",
  "key7": "41Mbd75yLLvK3GKuVnSwE9ik838X9TjkFR8a63KomDA8sjgMRKZkXCMkNF9WWg2rfLBZWUv45VJXWWF6sEe8nZpj",
  "key8": "3DiNJdSUNUpVmdavpSBjQpaRLrk9j8nGpb8kYttoMcDtYbECMUNZQ5e8ZeRvRmUgvcunVnutx2h28JDtCau8LX47",
  "key9": "4z1DiB4MB4TGahPmeUbfk7HGjmXXgBpeDw2G4FHVmRBAUZJAD6A3FR5GkQcSsmVTf2LpyGZKAN7AqQZxezpsuCgP",
  "key10": "oH9fn8etRBhPG6WH6cCjUR7kvcur5jbBX7AyHFh7Es5XXuE9Xa7RmJiKwqT1P1NEwbG2mZkvv5ZMxSzq7KVvrkC",
  "key11": "4CtrBi44v1XHTiW6mG76B9hHsz2imSsbXUGQJQMamFyQuQFebsXLNcNtZ59KB5ed48Nf5zBEY4z9Ncy8sN6911Kn",
  "key12": "474v6Wk2mr9xu1KwgedbkfGuZR2qYSDMJNJMHzgX5MkAWTyQsmShk9tipY3eo8ZpgsHyTsdUXTkrnZH2jEEKZNX5",
  "key13": "Tj6Thd3G75grhB78xk1pTfTzSwe8TTAhRLmWRXGhUMtwdbauoH6NSs4ZgyxuEbmdBRCTfDZAN8b7WPJx33YfhR6",
  "key14": "2QByweRpZk3Q15YNxKHYhR7WFYQaGHnFKmkPH8oEcLc9nJbNfcVMRVY2mFgvhkaujUrGLR4iMVoZpWwcSPaE2ZHw",
  "key15": "51GdYBZU6fbdXbdEzVq3D6c8krLE2v2dfHSvYXHkWGm7Q7WD3XjjKgzcj8JsNRnZQYeFyFyWXUis4KvqMnS3vJXD",
  "key16": "61EiTBJqogaSTKufkpYNEY82gVs42enFQjTBqdd9tUDDxvaPzzVH3Vor4fVXDqisrQTdg3RzhAQA1oa3oQmf1oey",
  "key17": "3TTBrLB5mLd5gy3LsvkKdtdx5Wuk11gYHZpXRaAar8YLEDRj3HeraB6fS6xHgfD8Md8ecZAodKdn83DAU5LbFswk",
  "key18": "5j42obPGQo8uzbwAw6ccuMV2CtCMG9hjUTtcy4RaSYMF8zUs9vHH5H6iP8xiXLGLzuyvaaSp5Gqcx9XEQSfadozp",
  "key19": "41wgqorr7hx9SaGCt3VYMuAQUgdnBQ58PNvMcNQYc624SH5UViT5gD7orkA8otN7Gfn8PAWJTwG4X7wqEEa3zjfy",
  "key20": "38jGWafmNgK465a4zrkPDdVoWYukxSqKwfS4ibyNRi8SvGT4SZmZPq16WrUhWWP5iDxuLyb2GuERQeDuGs6KyWgm",
  "key21": "5Cwp1DDLjhtFifn7ZZw9B7ADJPtX5cierqy8hzUXjUJWM6bugkMqgfAWqZ4UVUqwKaUmzhcws6roG1CQ9hDsgdFJ",
  "key22": "3VW9bASQoAJYyK5TCxFe8PsVNM1GFnnHMBR4Swo1dxCp23JGGf3Uo7t8RYkoi85Uf9zQS7qByH9bAfR1AvFSMJZu",
  "key23": "31H18qQ7FPgPj5bgp7X77bmEGgBeKyPhSNr5QqRZD1YqqF3RR7sZKakxGfQGrYwpK6q6xp7iznkVTTh7ni4NwrjT",
  "key24": "PeRdWQh2gTnVjAUkFwMSQ1Gv2XR2kyK8y46kycRxATAvhZeNYhhQJhHcoHQFNHwkJ85VSYWiZmiKKGaD2tnTorf",
  "key25": "5TPvqu6kvXA7Ghyv7VySRFnayJ65XTdTYF2imWaZiDdjqKT7fY9MDihHJWV8ZV1QmofKay5saw6nXDMw73KthqCh",
  "key26": "3hV4FfSUGQG5jBH4sHxvKsdfLsfKurKqBqYE262tvyvSpwnpzziUb7iNPZkHHEnQkWmbEq5D4rn92DudCJmeu8TB",
  "key27": "3DU5S3syoSkjvAPdewr25tzMa5eFKQ9mFjJYVzCRFqZ5XKWowBqPAF8HJ8YjwR9L5VTYwqXTKsjZfKz1CN8qeNsC",
  "key28": "4EQvJHk7mgS39weuh18mRxJFrnvSnyXi8v1wQJgZmCEvtbVwJPyP825dwZXi46jNkJm9Bgw5mvf87fHaZeunTA8v",
  "key29": "KJZHmo2rA7viYWeX6DfgK5kmdEJ8nso1uTJXZ4durjvBHJyvGXj1B7rJ6etPiNqWzXL2XYMt9HXheXor8PCEnDE",
  "key30": "2FFAs7SnGWTVJiaZCMzBUo2zD7tTzmttBDecssD9ZK26NTmGyk91y3xSeJJCQzXQrszVkJtFnpaVAdSH8Kvq2yoG"
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
