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
    "422ziyMzWAiBKC6fCosKxVruqpiTjvpRBfxsfmxEMGC3A6WnNAGWJ7Ch3kgSb26TQbR1HRWvzsYibsZ66SQDJ3Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1y3QeQxLv2Lh2ncFBuNFGSojHeMxobdF31uXyJ9DesnuwtggF1HWxtSNsKJvPq8WanzbxqH4s7UyKWUyar6yZK",
  "key1": "359aGfEFWkNygzcNr1RUBKxmtiyY16utJiZVKGX5ZVWduMjpxJUGqY7LgqheiPiApHJSdp9gtHpijs2TB8T8eEdC",
  "key2": "21z4N45FWDrMnfd5s664Tbyo9H81mEhiqBoEQKG8ejTntnQo9oEaieHyyDncqtgdEopWMX7jfMUpRX1LSYFNi19M",
  "key3": "4ukWgoakVcJAPm7ijcjRsxFrNdjGc9rLvzGY9h31rtkHBEFr3yzJXfnSCXxX5an2qVA82DTyWEhHyZVSfAa8mGuH",
  "key4": "3AqTmLLiEdEHS25aLApKWG6Qqg9wqQu8RvH7o5WmCvnvgRGhnXpv8D22NDYBGqCGsHxo2P4UfCrBinYxSzSnYGBj",
  "key5": "5J7jByb5VCJqBmkkfbZ4gFWgkTgGzEajyE6LSaddFCy1EbFisJtfm1ZM1CUgdDuVc7htz3caDpgqv3oa6Yu87QwX",
  "key6": "41r4XQjTsksgqD41r7FvCovKFxWLHEFpatWZbPoe2yn9kcrKXWYhQLLcsqUcfC3yUPC5ogwyuB4PPY11B8FSwLMy",
  "key7": "4m8DGuvzeDKi8xmvjPWMuEnQAVBu1tmSgJqS6pR2dEzdEiPawqJQVQ8Vn64onaXEPSDD84w36GFDQ4La5TMcaBsM",
  "key8": "3sSo63V7s6A3YmTJfs8ZtkpkZo1t1C5eYWKjd9a1LLcT6AZqWaVrUDGL3CdUEmqk1V8RnLvVKJMGZCLNGDFu3ZSz",
  "key9": "4ziYDE9zZH3ymgqJj6bX514yeqyBd5waDCYheB66tfFGn8htYFmX6DzdSYNsjZCBExWsadgscm5vBPDH3rcG8BLc",
  "key10": "5NRSp2JSHQG5dTa8NKBKuQtwpegPV69ce3QtSbehcbno85XTqoBTHLUP9ZuVRxHbSCFgJn22JXnW4GhuiBFrLqHr",
  "key11": "4ja7PWAgccmTyognKJFCafq5g4qdmAdnUu6AFmmFTEjFqPQ4u3y8amNBNH93FFd6jS5vYukFx9AsfgUssyJLEYWm",
  "key12": "4NHL1QZ7UU2N5UdaEGoPRwnrbbDgz556NxhxxAXgcwbL5nBSgD1VjxrSxz7gaNRrJEqWfnYFKdyvXxMqaUDZvequ",
  "key13": "3VBZ2w9vp47fCdYDxEYkhDjeaKecjYTWWbp2URA6FhMZneu9b2szwQGps8iZS3tFdPXui7AdB77q12UmiyW2dTT1",
  "key14": "2tkxrBjdTffyrsaPxfN71i54KpwSWWmamWsDZRCWpHHXad1xyYdN2CAhNvvoFZaBe6F4Xay8fDXdFvb4CuGdGWhu",
  "key15": "3ciYLBthgpAB2MrQRCEFAno1FKL5CQxsdcUFaweRdyG7PpbZs4PZ5e9HeNHGXD9AoBXUH9BBpNzA4sFuuEWjtkxV",
  "key16": "3YsroeoPzZzEBDg8ZJgx66YV4qY5MwehALoc1n9JhzC5Q1wdNPyeSzrcBENYadV1KBaVUjyGL6gPHbU7WsahDxvK",
  "key17": "2tPgn38B7imjNP8Da6uBJia4TmKFQYRAU44vs12fcAfBHPn3sG2LEESTBFqQKfTUNE16ND5TqEpP63t4U3DU6MaR",
  "key18": "4GgUN3QHKeK3Acf7gsHkfDHRqKoVmsHAYto9TMDuArqmJ1f9BvUmyeQny3mBCiPAPCDTRVyXadpGNAoUVchpxxxA",
  "key19": "41AqhjzuBsMKg448mgMqrjCi8y4ikN8mNDAVE7EHaJZ67iSgCL6dDkG1pcuSHvfCwfwGC4rpjvY6ptYzegH96Teh",
  "key20": "4sz4HL17Hix4x5QHFQJiWjiLno69dfaqS8qdq1aLM3CY1oEfwKpE8fb4XwnAn5FLJPL5n6LvPcNeB3ERKpdk6AV2",
  "key21": "56SfAaNnDFi77G89U7zkFsKdcNz7EKK67Qt8Lx9XdfGmAipYjbiuhzVaf8PkMmY8KRVoXGGz4bxNkAqByF1CHzbC",
  "key22": "5KEKfsS2c2axUS25niv5jVP8PKP3R2cC7Qvr3tbU1jswBuUP1hkegsygSzvDEmxqz78BacKABq1vFfrLYVbX9mwg",
  "key23": "3gWVMZaCFrUPYtw5RuZ3zMz1xXhzaiwKMLAiB1dZZjPnjUYmc8HaoBVyhDSv2FhDpf245bQNCGwR2Mx7nZtAc42e",
  "key24": "2F1S99Mjss3oKR5iirSF3xN7MHqBi75FUzLXG2NvrcARLNpUnJwy3pi6HdsWeCL88ASCev6rNJWZpodSLtBfSbEB",
  "key25": "3eHRswX8oRrfBdpNL9RfHiBxzS46iropnSypzUnJAbRMU2QSmBj5UwVY3NKKhsRktqEnbdpZKyRgbrtywMyWL7qf",
  "key26": "jvkzyYgVfmQX6jHSoCw7j2V37F6jJvNuXhZsRkjyzhcv86iVyGtvL1YJKJFJjdFpyue375proGg1FAg5xnSwPBh",
  "key27": "2sEWjkoBS7axsAhGV8rcWfsfnjGdsgseGxAexzBC7W9VshXhxABr6qH989E3Rj9A2FXiez25A2u9kZnKKdUhPcBZ"
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
