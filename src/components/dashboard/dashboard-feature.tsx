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
    "vKEuQupWgdZDzs5J4mYTJrPtPTdAr5Q2ay9kJQUh3Cb221VbwzS174fXtyMGZTssN81EmHztU7KfTZKMVAfwGAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521aKiRggNfYhR6hHJAty6fncGLrhtsbh9AoZM3WEh1NwDRjdgn7zwSfBMcjiHsCJdPdvdtsziw95fcjS2pK6F5a",
  "key1": "2SbvnCaKoyvgfE5uRD9uiu1DXcR3wUDGbeffN9RXXwW5vxTR88WmBvvwCz8JgcV3hQkKNY87DRrYjQREkYxbXkkg",
  "key2": "3yeYZty16vRE4qHbqgTwofFKpgd1JwatvCwPaUA4bCoixXEwye8JKBkM4MRoyw4JpFBfYqhhogCudCt4BBnBj61E",
  "key3": "49XJ3mgSTQZaRZEgPLL1hLMcsH28HrM5tTyCu3sUCego99rTRDSJHdeoXUvWT2hj4V5DbBfqxN24E1BTMrjXnMxC",
  "key4": "3B5bQTgWfCAychRXjQyyXHUK26GmdwkWejhYR1KXtbNyCvc1MSYEfZmYpD5NUJRw7wTLXiBHjsFqSjS4pPBQ6i2w",
  "key5": "2YbnzTsHDKjvizjnhgzPfsuCdXrCaxG1h7LP5AsoSqRg2HF2X1GvWafhG2y8miUMNoZpH59H3yo33YsCRHs24XFJ",
  "key6": "9hEJ6GPdkHWfwP2po486Ns9dxRBeLJb9VPKLmjUkp6eWv4JH1Sy7d7LAhGRZsrcETH25GjunUUfVrjhGf42Lpr2",
  "key7": "3MZp1rYbVeraHo1Ag4F9M9zZQ5cubzVTDw8SGFV9QmSbxUob7ijqrnzsda1hi2NQxxi8mGNKGahp6r52M8HVVvYH",
  "key8": "4sbuJQDPMvMZwL37yE5CSunMiGqDCNNAbvUwy1RL4gw6WcHG3EpPzxbmvDDX92vRTXw7GfjF3AhrXQ1e3H1aUNfp",
  "key9": "575NuatSHMXvR9ELZ3SNExAGcfriBMzXKeQ2ozkaBjuLRkT2fBBzDcP4XbkpJbWszeh4iMsFNK9QWYKWyHSBg5cS",
  "key10": "3LyNYR7pbaWDnj2FPJtR3nzSkjwma63NiM7NaDhadPJvi5dMAS4azc7QwRwBbDNvgfQmvRAZQux4DkEJ2aCZyq1U",
  "key11": "4TThr4QBXqTk15rG3qjuWNmjLydK5H8MKtejaigZUn6aC925pmRJY1LNPoDQso28GsXjKH9J7udyt79WTqAHa1ZT",
  "key12": "4ZLRXobYjJJGKSeaf5JkWMZqZRfm2MoFZBVVyAx5dDaf88ZyWdqLZ7Bc9MG9WTUS4qqf5xyRQrEENjpAo4y6KVgM",
  "key13": "3RdvKx1Wv5ocAuQxEe56ab4HPEPMAEgeE7P9gamsMGLxfc6iFK7t2fiwDQ3DCxxU21R8DoXBkjNDYuCZ9GwdmQGa",
  "key14": "nfZumafQNsc5bUH9pzUTgZ9HaJD84nKDLwPtGnf3K6ZtHkZqfV1MpkVC5syt3PaCpmWv9kpq2Z5X4Ri2P1FhEL4",
  "key15": "3gL7Dr36xccyQzh7mbatNEDyo4Vs6ks6GFMUuuXRjYooEjMB2YA1otY5wuAV6UXsU2fwV5QbgTFEfYGWPapqyebD",
  "key16": "4Cj2ZdyPnu61W1c6sQaNV53ePdCCe88EJonnWKpkvqiuP1uRUYAdqi6dqF8Bgwrvf4NUpSm1M3TLBK5z7zFSKAfF",
  "key17": "2TqsZzANaHkjGnPMH1hHGrr7MjqETvFJAW9aY5wDQavRiThh5cKiAebmsTLiTubTMyK3sGycvdDDx2ymnf3Dkn8U",
  "key18": "5QBj82L9nUWsjawDWJo4LwjRY7wPYUQWjCV87Y8A98bZhmTarkahE1jB5mfdPGKpsYTv8tQ5zPAQVErUBmP3nN9K",
  "key19": "4L224eimz9ERDgzaJga33SgFmyugREmdmiv6rKYqUEkLdZtBrkejv7ouZiHoL1hKS4z3SUGFa6AC3uKXm7NtqAKX",
  "key20": "394ZdYxSFJ6FvMob6QzV32KLCczGgopFAruwGDbR4ASXtRgWqzqLaa99Ttcer2DmrT3Hxi6Jcn7yFSi8fwb8nLJH",
  "key21": "2hAkGpG9aawpAoHmiqxjBSoqUbv2L2QA9Di37AnHSWAf4kWQPi1PbeafbGsBxw6ocWbDmgjHkyMxuNf5H2BwSr77",
  "key22": "3NDmbEc3VkgHEp7Tweh4CDfu3ZJjmCDgkytyxYvyrEc1jrvR9YAsu1C492t98jCq4BYxEPCeq4yrkF3myztmZ4H",
  "key23": "3SuDCZgovVmsXCiu1smYaK5bLVLrNHb7kUZznZvGr7i2aSK5KAYn9bCHrXMYLYWx4VVQ1mSktiWqLtKuEsbktqGt",
  "key24": "4B8MR6r97CfY3NjQDFTa32hf8DqyXxADRf2dJRyADtUZJtmNWxPfM37FjsvqWHfk3hEjeLJVQpHs9bFKWsVjCS5Z"
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
