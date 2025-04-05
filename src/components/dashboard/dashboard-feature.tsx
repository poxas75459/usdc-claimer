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
    "4LQq97obXBw8X7CkoxicivoDa8kMef9rEXpE6VEetZWDHExjCcB3iMC5oJNERRMT9iP37p1v4XVpe9uVdvTM8MMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJPynosAYJv3EuLuc5Cv6BU59kpgwtz995ghAtqoe8b6dEZ25oDAiDDKztu1Uk9nzqTDbSEWSnaAcfwd4WR78v4",
  "key1": "JNFnH3AFKHr7rjxuBYo69UAtypTKsL9NJvqMCgbT8q8AtSZu4PLV39fRHnonNCz2GiXVGkNwav89jK8mquseBEb",
  "key2": "ZAVpZc263kvsGjC1miA1jo771FnovNBCRZaJGwuSxq3Tg63Eqp9Ys851smEDjHsuP5NbDSmKmthvP4GLKWMDePx",
  "key3": "NQT1ddESbA16eScUwUCfvfikKWsqkhCgp3963Yi4aa4Zs51tyeWegqC9JbSAcAQydMiwFaw3oExPTehmoQEqbaB",
  "key4": "2BZCuVyaacZbqFfzxNYs9r2ppxofunsaT1Z7TzgT9BzJXMA9G9Ppp5SVCqVoYQAZJFfwWutvZQGCZ3Th5xBcekc1",
  "key5": "ohDQT7Mabjkra2YuiF1UQXCz9cHsDUxF2nE3Xm2UMeUiw3z2CfTMmVSYMXNsomkguKzxSr3STGGX7yGXgTo9KHQ",
  "key6": "57cqTQ57PNRqeiKY3QeXy1UDDzo4ZZ8V7oBKMj6KHyHGrfjyrqPjL3cngruFJ2Y1prczGAdWDQJny5ZP1vzqM15N",
  "key7": "5CuRTLckrb5nWLMKiM4Rujdjy4PgGmEqEKm7zERBCFq8JxHFAtXTPU5Q1eZGYjLjF8WSwBSdrnSifF4qJ5vwusfA",
  "key8": "5bsHSMwuHp5eYRoEfLB366VKKFu2CzrnMLw9i1cuC8X1wsd17gVwe5csEQQPBeVk7V1vq9nWXgndDSbitwehzEBn",
  "key9": "2Wa6GVZw8T6MWrZ4HzjFQuhi7QtGo4N4wmCB7fmk9eP9EdWEKRUW9qo8fGBWDv7PG5mSsX1kiXXS93Errgu8omYe",
  "key10": "2ZeFof7P3HKpGwAKUv3CbWe7HniJJBvAY4J257xmxgk42AXCBK2oiu4GunHvHPBwK7CG6H12VNPCLKZLPuNQvast",
  "key11": "5jkXdz9xZozcVJqLXtHf79Y2P5iu3cS739ivMzkmwUS3qLzPDqz6pPnAdW4rLnBLuVoErd16mi7FinD243SZn4XT",
  "key12": "5ManX9BfPDcCZ9S55bbEpkmdWfBGuMhwd1DxYKUzHrMBfLSPLT2MEUwEpEnLpSSPZS2gppuMGLudCsszkwURyruP",
  "key13": "4Xo9LZF5qUZQnoKvLYRUSbjJb7svs4YuBXHJbJd2z5ogVv1f2rQvNSUbFNWMwmL92NhbcdnXyqSgqHJ5zEqFGeUX",
  "key14": "3E8pSi7rLKpCqZ1QggtRRvu5n6qADE1U1PAUxqvhRPXXhiSheBFnMTKp3KXBnzqRiKmXDi6tFBQpJE5eP5biPA6z",
  "key15": "3c1tYCjJau6WLMRRxyXpqN9tF5AUsLBBoxEQD2fhxNo3vhyegrBvFSNNWjf4pn6LNfTCZ4Y7JtV2jusfNQBBgv9s",
  "key16": "39F1777CAc3fTr8a9uXe9UkkBiGta7CSTRjhdaAuiVyqNYbBPdvzxUv87GQoJu4Pk7GicDsd6RiKg18GWWo42kv9",
  "key17": "3f3H6k6P4C6ELCC3gwj3oEKzup5q8p5gYcUqSH3XwY6u2cB7DydJU4giaCLhHgTPjTBfZTGH6QMN21aW5qgymNT3",
  "key18": "bAF36s7jqBWu853Cmt43mU13VenYgN9XZqBvXvapSrHcB31eYxiMdJUv3DAnV8jD28oSNa9mg5VGg3Ru9GLjtmM",
  "key19": "2PCMabYSn7SN4WqCGxCrxsRznEqHBzgeEpxedYLKunJDq91QGdKUoJirXNCiX16Bjt3gnrUUBB2j1oF6s2ZToNZe",
  "key20": "AFdDoDJCubjLs9wNiwAhAZ6duE1UmnWJEJmAGz3T2E9XXTz6hcjXwztSXgKt6Le3uKrQe9EPWDiUQZ2ZvNziAPT",
  "key21": "3jG6DDByT7jmeqP4cAwhntTmarRGBosQhfDusrV2piRMsfZjqHUb4Wf8wp3oG5DyW5MWAEe3SegMpjF5pGQGnaBp",
  "key22": "2tGpHy4wAo4GAp45YcdSgyAKZgwrrHZ54s4Hwzxs59rpqkctbSJgcPJbRupTZFWZGEzBsSrvNJXL5bC5K7V9zxj2",
  "key23": "3KJHYZ5cYtwbvoqjmvFWqjs47CJHLpmhN8qDvvC2pypReR3pAUXZHrCu8Ys3Ti3w7y2yghCHK1kRiCi3fpGa2inP",
  "key24": "2xzqMJhZDRTfd2hizXm57cnFSFpatftoT3b9LNQPGSCuogRRY9jnnbY9zXJpxymJ69nC9eZP8G3eLM5rcnr9KUCT",
  "key25": "5gqVc9iM4DcRbYBZiVw2rM2TyiMCNfVH4Cu7ydScx7NaGoAqePJYkzmfo1oPLLsgrgPv36sCzxybazjHMazp9HZq"
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
