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
    "5Hd7Had32oe2TeHv8CDopZwTPAa2LbEvhRaVWMjp8yoWZqBXHkLfgSN5x4Wp4y6nZSPJkcDCxEGCviSBZrbyko9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pe9L3WtbrpnCypG21Dy3YctGbBL7H1M3WjXSncBJQqBbttVwofgpzmRNQ1WZN9rZideeCAKuVQbGqRe5D53N7uZ",
  "key1": "29HTwk8zrcdxKSiSVYzH4t1PgHbRanVvpzZDkEAaVEzaFoMFpiJhpqcnEArVHSgp2DqVv8wJj1RmsFN5nAxhu6iN",
  "key2": "66Jo27wh6FHiVCwv2V15ZdYyFW5L8RwQ1zXJbM3T6HxbKDYyCMxqWjgKiTGp8ym6Uxf4CAi3PwskRgLfbcA9R1az",
  "key3": "422vGU5MCACKvTEZZywrCvb8vqfP7sHNeKaHLarucez7TMQUmpr4GSAUj9hfi2ggaS5Pz1bRwtHH2AJjXhfo91ge",
  "key4": "3eJ9zX2CZzFY17uf9nDyrFBAF1SBugEzvwHrDE2NuqUt9bE76XMiUvpJRkWCfCtvAvNqon5FD4F33vKoEcuWoSm6",
  "key5": "2tXpEgr9fWWUy5k4xN9yw2RAokeWqXETfetnsfmdNRCWqHsuS2WbJeYjuxV9pKHu3pbdcQzGWxoRqKoeQySQyZHS",
  "key6": "jjLqw9aEmxRgWmvgWJk3SFPKutsxzPajDoQ8oEsY1ezsN9eyFphXXMLbEjtVzwQzxGmTgpN5PNdxD5YhMe8RdfG",
  "key7": "289a1VXcp2Mc8nd3gEEaaVUcWu5aBfxnDcCMFrdqyrtDd3ktcN29DZBK6KSQcFq1tJ9Ky3sZU319QGR1YHjiCY86",
  "key8": "gRW2JpojNa6DKnpzqVqK8fmWneUSx6e737mDjoj62nrMixwuvvQmi32d6xgexM5BaWeqDSRxg2kXT2NUPNtQJeP",
  "key9": "3g2Nu1MPVLhbqsG8Mr2aUViypdQugDpuuBrpRg3xUHQfiHStfB3SDiBWkx2owpoYb2fnnxKy6SCMWdX9j8eGWZjM",
  "key10": "4LRW2Ac87KAzFAWo9Z3s7C4wfXhC7Dj7199cTRStiT7qj54cvNN4AdpvUgUYkBeNhVAjJWvXhKeNsCzkX2PxooQx",
  "key11": "5o54sEMBgRVy2g6QkDFpx4i9LSjfz7pTGv6bfdkcWFHcfztXVDobeHJ7S11f4X46V8X9TLxTA2m6n9qH5PYWXZsA",
  "key12": "3o8df3Cz2tjn57BbSxXK6tZhz6YU7sqVRswxybaUYbdE19P1gEDc4N15ZgDi5RR4DmubUPE946hQfg3oPEwy9dqb",
  "key13": "3WLA4qJtJfqEMYcwbA16NXxZCWQ3wr4xxKLm18Qr7UkbzuJnA4LFczXk6b9qZUc963qzXa5vU4JE5d3qrajNtaZQ",
  "key14": "2bvXEdZ6sYtbdNYbSCqigMgfCUMr3ThwYVdjLXF3V2wseLyjTKKVCMduF1y22jWa4hnGMu37QJ4Zp4YPyKkNh3p1",
  "key15": "GFDRXtnEbpb1dy6P2pMtiLBdMd1XS1FPqXrVdFAzXh8DayqRC6jKkrpyZULri8RfmgT8WTT4kHKtMUkEf4kYRGP",
  "key16": "1qpak9A8XA84V4eGoDEN8uCn8m19FMd5nyRekFjd5k7mtTJ5hHBWBf4B3AKvv6oYikpHKsvBZyBD7XYJFgfdmy4",
  "key17": "4uadMwybmh8nD3TUhhZBBpH3dXvZ2JviLvgUdAP9p3k7iBHM6XLZfe1CzzeJDRV1rdsTiRxmHa5a7eP2BPmmTPi9",
  "key18": "LjfctLaUeLjrE7h7ERmt136aDWmBkkTL5959aRNVXh6FFhE4Ccv371fgA9x7oTNsYfVNNvJhMkA5jB24gtp5MD3",
  "key19": "5HPBxq5hVZSxSd3LnMp5FeXRLpYa93UYV2hGKtr1UyeYwTt22Nq8VoiYxpVHqmNvMvsxHn1BuG6NT4MN1YjaUyAy",
  "key20": "26LJsg242Fx3x5K8m4AQDFT4nbjScU3wVUs2Da8v2hTkNBTSSMXU1o1hBUCKziPVQuG46z1mMdpdjVy5qrgxeAy5",
  "key21": "w2bMTuwjEgUXSnLuLeRjaEsGwaW8rVdqq54uo4ms6koARuJREz2yNFqqPh4CGVboNuN5JsKJG8ZPjkE5WZosUaC",
  "key22": "2ykNWGJEgQsEEWDnZVPqfLLyL1LfcpEKttxYV63WjPRc5ySVxZTPhWPVwYQYpjxLLyevEKjJorFfRgJeutscTdVR",
  "key23": "5CVe4nkDb55dQtBa4KoGmqvj6YXwkJc3wQqQaYmHV25XxdGE8S1NwRAbkYh3pd6WNY2yQ412EmgBhqiZ5cS1kXgp",
  "key24": "2Zsi7TUKgGomcmMwUdd1GsvqnWKx1YgLhfq3xjvZHwvJg63dC6HbrAV7qHde9ZWLPr5Zky5o8CZwKUf9BWjQvRqk",
  "key25": "4hGsaqoqo7YwyMGGDXQeTYR8MxYD8JiWcCbLFmUA8gitq1kNoBLyLk5fYSRvHKLBzkR3tgjyQkmuLTBRNLs81RZA",
  "key26": "5fLQq1PEVPqWSbqr2f8xQAJGDhUxYjerPNMrfeuznGKuCsrCN4oaynfKkYckCXa7gt34oGg1BVmMdkZ66GPzh1cN"
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
