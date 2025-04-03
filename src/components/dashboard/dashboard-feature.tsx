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
    "4Q5UAiPoPqMkLedpZUpKBTtHs386kDxxphkYCXD47xMXX8zDAaBrJvHmbhQdJsSYX9J13cGazTZrtWH9QmMENzFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwejfaVhr3q6bZ6F8debcxBE6t3jWP6MLbNvtWV92eQimKt7J8ssUtubKX2gasWFb1Ncizgxpi887RyJk5w6VUH",
  "key1": "36n7pM7tqg1NqEUk5JiFEv25VkEoA8FtXXhqFPVfoDyZ7b4pv36DMPbJBqxQWLR2xhZCiTkqyqXhNa8RCFaiVTDU",
  "key2": "2ZTVP9RWuXtgHP88TKGRB5rECBo7banmV5Z58zNUcSN7YgciiCFmiy9uExuEXyWXPpgstAKoUqVLWLu2FJ2m3jf9",
  "key3": "4D82g4ikLx4TxtUQbFZTDnyWzWAy3XHaEoWyjMto5RvaQgw2vQmYoFo8JTZrfjp3yLHCjoUTiRDmtC6AZ1b8z3kz",
  "key4": "4ehZ3M9MbaiRqisqcWuoqrQpvUhDSNyr7Ye6ybEYUEGcTsjNYKPBVrN649fPmrqnvew57J5Hh3mkQ6NDw1UcrmVp",
  "key5": "58SBp7w4xt93BLRNytmHBHwdxX8UE1X46YDRbDAMtxJpmwtcUy9BnuqGpEAu9XjPGBDdi66fCogXs3xGCWMThvoM",
  "key6": "3A2ZrrYChFrKUUWZ5Z46K1294rbvCttcrPYpELPgqXvYz88F6iQpaFFup6r6mtJZ1vp3vhsPdXQoKcNZUdKkCnJa",
  "key7": "aDbSsN5sMdPf1GfcMXRKjyud27aYyHNHVVryNhzruaBFDr1A7J2c2CK3GFVpwbirYZwFYSjYZYAJ54L6uSvMcMv",
  "key8": "imWJH8cCyhBEht9u3Gp1DhXsBvzcbguqgfdAfDA4Tk1syc1dR6TmNybgT9GwoE68DF6yJmmDVCwqTy67VahN1ys",
  "key9": "66SHihNdW7wY5ZQNzLEDvEsiLB6AEXQisCtbbo8HM9h2xQWRkGJHNnm2j6ZKf59Z1hUrbkCbqyAEWHZEBT8RGTYu",
  "key10": "5p4PY2kRSPsvRsWVmhKZMFV48EdvMNZMFfDdSEP3X4huWC3py8MiW9VeKosxC4NVv69y6jbtWZnuriXDHdqwtKwu",
  "key11": "4MhbEWCKYHi2orKMDjdpEEXRnSSx6424erF4wNst3UR2huNZ6fBgWVruYg8n13YjHcxXSDQAu3DNH1nJE4UmgQhT",
  "key12": "WZstuB4dMCLHtz8YM9iQjJBpXy4CaTn3keyCTMGJKypLofAexrwGRPaUjtTHJmuJXTuUV3CT42fmDSCpdc7KXmd",
  "key13": "BS4sqyEEedofcGsh3EhEeksqZrdmYf5tTsF5KcB414o5J4o1nNschDVpwBn5F1SzjCsg7DvsvLKLLQFrxt4zvz4",
  "key14": "5Pzai6UfQwb86dQdFzfcd2xuxFsAGhtV7CF4NtVUEF8DRAWYxZNg4MnEizongmYUYAHncy3v8asiRr3pET548qPe",
  "key15": "5dzwCUEUodEqniwW1ohnH87pD9MbburTpAAPz6AjvjoW9Ak49fk7B7HMu94x9KHvKFfLevX8jzwwjFMvJYNiLbva",
  "key16": "krx4CMkwb7M8VQPfQewCN5RPN97VACsLHjH3NMJF2WGQvKMC9eFKWyxWEJkVTFVE3NK9stFsguSQyhnCQUArM1c",
  "key17": "2SLibrFSCGKpM321buX2h7MtFKjxyNCbsxFpft4y6ygDDoZmhcDLkmC6Rbkt3VuT6cephWPL3ac3LK1ZXiBZMixj",
  "key18": "DmVsL5PJtJAJx1Gn91mX2EkUMfAy1a2qhmNKMQzamPkZvXvVkriw3wryuTV1Dqafo8imFWGMDQTcKvfShHKLx4H",
  "key19": "5CJPnovRYVBigoXNJDLgcoPVe7reoDP61dGshMrQp9npp9o1wVrmcD4Kejb6UppFGTuzi24EVDupPxDnabwXs8yi",
  "key20": "fNHoeJP4tn9rCgxZyc1y3Pu79KSmrB1NfkHs5HrKp95BFauLNDJdyZe3dVv7R3fs3cz69YGfxWKM9ZrqReEbaSd",
  "key21": "589i1UEu9qfW3Kt2ayfKgVNvwevmJvgXbFeSSY5AXBnBeMGiEJq3zPsCGigxbAFmijFhUQURsyuQrstDpJKc6hD7",
  "key22": "2gTpGo6wQDbK418i1h2BxT39CbJwoszn2HV6PcD2EbhMdZarLizvT5HM8bEuo2bDKDb5jH3ukh61N9qHtQfCC5cz",
  "key23": "27Mv5qPYB1iMgAfqm5x6wQLHnxBMpSJdR6wzx9XPf3BKUrUrTbPS2W8fjJVJQNjSLoYVoYoD6Br9niC9ir1sKu3R",
  "key24": "4rQ3bhZcVTy3RgSeBrDQ8TRJccmfqTwqSZVFVj55VLxGFSXYPZ5XwETqDuqW4b7kFTtxdbfPF7BAdg7ubawzWYcY",
  "key25": "3wM6zHtkmqcV7cdshY9vXHLdZ6y4uo9wesrzKmFaWkgW9FbBpNBDcrYLEqVGj2BnB3QzuDosXz1yjMfWpAw2gfXV",
  "key26": "5z8zrAPgrRF7DdAZg83oykSnuHhTLrRho4ozuAhSN3N2EAVFYFRRa4rybvXTwVPEquMk7TS4pB8GGNbo4yo76CBF",
  "key27": "5wdDZ8bBxVofhE92jYGeF6CEgSm8r73LZjLcHintb78xUNzgKuntTvRd5bSrQaQT6yy2egnAyaE4b13A6t684DQK",
  "key28": "ojQtEVV3fZYL5YDzUN2yvfdjs1KMjHr9cHQcPZTA4DXtvpWGFY4CZ7SZPFeemTk9t7KHCn5vBh4ak2SGQwqhWd5"
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
