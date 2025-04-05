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
    "56FsXyZaVXh9B43RMCygvMCf6k9ky3GCn9ZWwaS53sJfawfL59tscZc16TRzC41dDr4t4EurJMXjCUSPVV1a18Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVxsyptUEAedtkFxAE7LBfxJTdxEAko5rKpxa2xkn5qVZzY41PMvALTWkgaZcwzsDDFMWxFThkhZoPJR4WbWEPp",
  "key1": "3VHx2167oS596txyCpogPJR4f6hvYhD4gyn2ZMGHSUyAyn45UEwK32dpYVBWhrFRePGv4mU992iHjeGfSdD2uSGA",
  "key2": "5NAkUZr1427ivGkeDpbpDqMvhmnESrD1f37CfwhzuSVouLiADrrFb9o8oHbZwVeHCBu5P31Ca8aUNuMb1kEr6EtK",
  "key3": "4Cujw5XDRSEyXcEg4iCG6My1n76u9WkVzNPX9tGH2Ufa4N62cKheyoThpa4tTEsJnZgWWv3rWEvwnqZQ9Mcfa6Sx",
  "key4": "5Hm74tsME4HJSs4LRQvsstRtcaRQQBVoL9eEviJDWcU39c4ZMhoR4KEwzAX1m3FZHWetcGzZropuya3vq8MqU6UT",
  "key5": "5oRPdeHbuLjwa2S2E1nfYRokXPUxa6Ec98gybhm9C99WHzKzPZ2GWqaPovuUer7knumcP48ambNL2ZM8btVeWWtP",
  "key6": "46LyY45h551SnhebdhSmKFdytSNe7EFnqKEBJVeCYPu8qVJuc2nP6tQ4ErQ9Y5ii3VHhwxJj7iPxaHAnQQbusL7Q",
  "key7": "5qZTW2MQNkkMeUuViTqTyx8tqZf4zuBBJDWYTCi5ea2na3Vbocq6oVWbyhM8YAxMUZUWt13EYJvx2bD7XDYc12GK",
  "key8": "26avguVCGzdiW3ryQBn1tSAiBdXbRALpotpxuEtvE7QgocjoWko95mB5G4zgBxzmXpTAYq5gEudjYw83V3SfwBQW",
  "key9": "2LbCFokX3wiWwd3zh8aZgE1DxEXRy9hK6S41NkZBRrwiiAAWeRNaChZ7TmgekyPj9MPety9kfkr8dHPoLyrXSctX",
  "key10": "5JGtBEs7o3qaQr8pRiTTNhZABV6z3uZMEFY6FkzbUZp6Ez1ZRwrsjDpWyPeaZmjwRAUxgsfkN8EgHPBet29AYnvV",
  "key11": "4RvDusvhAedY9kCfPE2kvUCG1mcjEzAXiYsjKSfVngFSbYNoGc28mMLRqxxYF1sHSf3xjtzTZ7NiYAPjDht72wyw",
  "key12": "4ebgufJauNwzqXs9qTmq6eTnwxH3FEXmPDmdkJaX1tfK8QPthdCkUm7MJtZWrcoWYcnJXYaNfwBsvkjUh4C4NQr9",
  "key13": "4Ky6icreSfQa7CSmWpPvUVnxaMtWwHr2nG5ZYTMrXpW11sd2vP81FH17DeGg9aVPMZvuNzNhVK17e1C9ky8NVkWd",
  "key14": "416trxW6GMV95Djin6dJtB4oHiiMt5f9He485L9snqf2Q5QRkX6cdbsCz6LWEz1iyme7K21SGZAv8Xq9DvYdQTSY",
  "key15": "3PGhQCFLBJRbDJAUdK9hfejBeevnp8tGbuEj2B9vpTfaeKDWzdBYLBjKxWw3H2FNKEzag2nd7T5vZQ7U5fT1PhJq",
  "key16": "w5kRCpaA9z6FPqErhNGWXXjfGnWPjsddHZAwUXFFytoFvEJQryKW6dZftaM4nYUJfWEjYeR4dxEG4oy91FBuUCd",
  "key17": "3PxuQHhSMo8zvMY77DYSxogax1SeshsoayZH2h7FniMFeGbzPZoByrHafSJaqre81jgt13WCjaSzYPKsPa5JpQEb",
  "key18": "4Pe1ENB6kf29S87fmnnkyL5SBUCAb5igSdEozRPifn1WWypU1F4MKFtzfRzeA1QRDzBmMTYhjEvnEdrfQjBscAvp",
  "key19": "5cNZUD6hkPcvcToDYme36PXwGau9nzLfcB6NgCb7khW6SGGg6fYy3Qsk5QmATbx6ZrjUBe1qYWeMNMLbciFVWDaD",
  "key20": "2nafXeX8g5a3mq4jTg66j8zaH2xe3fMJFmoHPGGhe9tuVLL4DgwJtrySYNVy3vYzUp2CA8SNYKnBG5i6uq13U2K7",
  "key21": "5YMdTKeftGk3Z7xB1TWB4NZFcC45QwrJUUexuinf1AAtMe2SKoAFo8zwqPJcM8PDkrvhZjvAzNAmY9jdVSWSofZ4",
  "key22": "267i9Mr9NKWGRB4EPJ7UVkNrpWvRVsgV97NQpYe7iPFDoSrbYtyExfLBWg8GtmBptKW8BnXLMmtTkkxEHmTt7h7q",
  "key23": "5tg8KqJJmSsSGttTAPU9iQmwRk371J4GpGrmggmAK6pii6kwdnkqxzg6iRxvFzctKUv1knCA3ZjQbFLym4VSdzyN",
  "key24": "5aCptpv5zhxj2DaLXkN2xeWWm5dPMFnpemXXGQfe6b3joYDeqM5FxSGwGxUmYvieK7SxGWbVrbZVJnMrB75AKe8F",
  "key25": "A8N8WjpwYvk54Ua7s1MvbjkBWyH2PJroM1896HhjmWwXZz2xJaHy2YXcXZKi1tc3L74j6uZqLuHriDva64pEspW",
  "key26": "3e79rmDimR7xmfLYoUSGKA6CmmXnzRjNNZQiqAKY8EoRSRvbPEhhP6YKR6cc6rKQGcnSGT8nVHrERk8y4aaVhkAW",
  "key27": "37ZYdaH5rA8nBYogNB5pB8UN34BksGqrEn8uHnXRF46bKZoiRxwXAQY45jDadvqtTPVAEQmaAaeafswUQgnFGZVJ",
  "key28": "5EyKNRWtVzaY94YwZD31TWEVjQSjZNx4MSDx2oDBuiVXTj9wFJAMeH65UkHP1c1GqEvrJ4qm7L8aUXHHRfwgHS9b",
  "key29": "5y6ih5UYZXcQyyhkmqeMcJGfTGso9qKbvPRtxELP4iajVLFD38SnhNZ49LmHZ6BCdRbo7Ev1ddioE1mU6D9GGCdS"
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
