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
    "3jR4n2Jq4B2xGkxHdi5G137u6TwiaSsehJxceVKTjEN7M8ZP9UvTH1X7JL4TWxk4iwYUQR1Q8purCA3xzsDFuGAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZQxucrA5aEHth41RbCeKfW38JXjux8gRWY38hNwYeRkU3BXu3awibH9KarVoyZxYmn9nj7xTosiBZf7RTBnNGK",
  "key1": "54iyLx7j8aVwJyWJ7q51BXfe9niQKWuicq9xc1sPUfppip6jwWShYShyjoEU84cFexoWYzkm3CkKNJ88qBesmNVH",
  "key2": "4DZL4UfUqSUah237iEHj6XgY3Tt66LyYbw88FzXiMV6K7H3vaTJffSdWjVtcjy9DgbwSeMGW2UC9JbLmutB7wABW",
  "key3": "4ojnMH1Mf7VEZEaL5HoUuFUthN41KApqMCoFphzQMXzf5cywBLYHaxrT37x3Hx3DVxN6fcBCv84bZSxJmsWfjSxK",
  "key4": "3pXCDdT8SRgT7FNZLtPBFYXE4rqoREq9NRVTyjY9CE3W7uvXvXsft2qqpy6qGdFTCQfEE8xfXiHDzhJ56Ug9khj",
  "key5": "5c6ZRzSK5baExnbPQeJjZVdcE3EAjvfrengF6DxtmUDKG8U65ChyS2Gq77nJ7kHo1bjX2eVMpdy54ez3N1Bp8AdS",
  "key6": "oz5uYA6GyLqpgBhgF6yzpAd8z6PfrVfpAr8ywvQDVUX3xzJ6tea4NxNQERGYGgpLgfWJw6145jDbjXPhopFQ8tk",
  "key7": "zLNvpA2CEuM6XPCKZb6atysXftQ9Bb1fb9SQ5X14vkTnJcJ2rQND8qrVzzvjey6S9H99Hb92MPLUBWCn1Z9EyPu",
  "key8": "53BhJUExDfKrrSG1ojnP4op14edsta6HVAq4iLMmK5VuEeY3QHkmKfUedjUqnL5hmTRm8WGvJBi1UNxTCazUq3mR",
  "key9": "3jQwaMyEksLhcoeMC61xMWC3uuztURAmu7m27Y7pgBiYCndCp2KZhxSCTPmrDrjVNAAy76NvfDed6cBnAh6STmbd",
  "key10": "5fQD2NAx1ZpStvL7zM3dAMPxJP5R1PXoVS6sfytDNJazLWkHpduermsbXXpcnBzTDYR9dgZcwHqq1VwHoe5sK1Pd",
  "key11": "3SwY3y9FY6d1u5fX3uo4TTBA5CWKtv2kcQ13bfY1T2Y86fSbVzHZQ3p9FW8BK9in4b7dS9qu2XYEFzVdfSfUqMX5",
  "key12": "4LKoq9oLAbxezabQL8ktxQ9GRsQg3Xidc6NauCnqzSJwepoiLNeC1AYkXxvqvbsuo7y7jfpKzYzaA6Vb8w5hWpjd",
  "key13": "5Y7Fj5gWEp9YTvAQLwFpK6nW6pygUpr4QZUY3gQfAmVKThpx75SwboiaYFa7FbkpqLxCr2w2hSvwCSSZ7wiqZKhy",
  "key14": "5ZZDgYGCD3g6LuCvWi5zwdw5J9TsrGa2TW5PrLU4JNioWMtKvPrfvRvJF2VfAtA7GtDwTL6sm8LpbeTwdovSBZXM",
  "key15": "4ceHpQw3JnMoXFwJpJK7G4rw9NVeLeHraesoDBA5CeQEW9qVmfeqgRY5NrEneioWVzXi1iqxac5a8MHnjik2Boop",
  "key16": "24EkugHy1J8fat54y4gL3v781kmtKtzp3fqqnjKjgkc88pQqu3hXvqXkHMH2cmhnimUo97DC5c8MSixn8ezerwfW",
  "key17": "QWyj6SDWH8qWbSaBA8amoEuBhwbL43kHMpshSe5UMmQ1vJ9wzijpXKforwJTsDATpMuqzpNoPDqwBNgGGqFNAMV",
  "key18": "5dQtnaozrs8AoT2WiFNzWL3xF3ypjDeKCTCYPQdZG9wAm9919ynyqwvn7xRGqQjrngPdYiBS1wpWzsJwMwmEndrU",
  "key19": "2LjFUE84bkZJYNKy5SW3TuUBr6on1o61dngxySG8YDuNNavkaZjwod7NPpGNnpYpsgBDcbHbpEC2yY3M8RbGecqZ",
  "key20": "4CyfXngDJsJGntf64L4YXYJBzaXXrJDqkZoPaFG2Fimh9wJfHjf8pWUwdJjCAk36CGFyxJoa85KR6LTkZw6J2F52",
  "key21": "4esbB2K4L3eY3CFhouT59KR9W4vwbyWmQqocCjVWS2s45x3otsrBxsJb35z31qyth5eppeBcSZw42T6YXevYKrxr",
  "key22": "4LKdwxvHL9XUNKa67x56y7SA6vfspVHTc3Kg6pUd1LNkaq5sftCSyTm7k9ELfstGceLt3ZtuEqLVFvmPnzm4T3Pf",
  "key23": "2YeXyQ829KXyG9nvAtJpqpKUoWnfMLEdG1W199m4TqGQUUcG7A42stYJ7hk2ojNiA4aJ2iPL9Zbkm931UcV92qcC",
  "key24": "38JS3hqzCiWaEEFh9TpH5tMqC2igfAWBKYY7K2Gm1VXM7ct9n2x4JQff1EhF7JtDnV47armCoRoq8dgcBA3MX18Q",
  "key25": "4XCQVn2AEwEuH8QH52er7t22WEdCGkCaadRKvoXxE4MqqduGx3L5pxgLhHTjXK1rv5sYwMguSGAnfmmqKsUq5TJ5",
  "key26": "4JtXXJXKoytjmyLXhw1MZ6HhMr7XCAKdA9Za26cuHwDof1HJNZF9suf6pGa5c2jeXvTJeM7ct5VtrN4K22yMdri2",
  "key27": "3GZubf4v21DBy7n7KPVFnVP8jC1SKr2jvKM2JEcs7LyckAG9kWBaQzx7gH78eBbDhrTpw93iRf1btawdZntufS5Y",
  "key28": "51eTmGPpr5ueqKHLCcdDX8YCMzsDpss8EWG833cuuxfS6JhpWyKFYiAvzwxzAVJVo5qTQMvW29zzTkC9bDH9VmeT",
  "key29": "2YESoNLYvRR4FyUXknNdHCsiQfQNGQuYCh4sSpckpaKJRhtfbDmJCiteYbVhgzwBu4eNfPTEt8igBxwvYCGYCeNJ",
  "key30": "3wgcgR7gYREDPKbacKxWDFLRHKvRvKe9mui1JYJLhtdpttYVoZwDaYSQnmMfzdEpx2opX63un5R5FJVPm82mW6Ze",
  "key31": "127gHphemnNNxbL9mGC9fG62yGboqRkLBeJY2JA2gegKPcgyVWKS2YqZNoWomsfVneVbu31NopVpRQKzA8knpLiM",
  "key32": "43x82U4pR6M3dqRsJhn4hifijB61i6PhFr3asVmmjU7nE1NmovqFFFLXTnGAJ4VpcSmLfmMCwexTjCixCYiNj65V",
  "key33": "5tAhzs9ADuMf2tTMne8VLJiGahncqke2Hby5e5yTYUsMHAf33hcHn7EssJouhzSGVYUp6enTDEQ2xkmfF2LdPJtM"
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
