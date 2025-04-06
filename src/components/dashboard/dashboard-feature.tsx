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
    "Gk77in3abPCBf6vS65MqNyxy6ymz4DrfMtCBrgquja81LdNugh6hLamNVf79tCc7mdb8CnQSibZYy5P2AGTW6As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uBDjuDGzByGT9F55io83je9TBEp3V6BHw8Wpfc4mswQwxcHEXj2uYnve6ww9CznKPvt6U3PPf6Y3dotPaECFbCD",
  "key1": "LuBCLKZxYK9TFNPXv7CyoviXFr1uEhMUUzn5ojFu8WfipkwjzgJv9jbTgXv6EucghYzcu9KvQkMWzCBR6vwToLk",
  "key2": "1naMyvupvr5vdUpo1W1kz2WeFQrQ4RsPnR5TPPCZNxbjW9PnRJ9QprxRbPrpToQebCDd7WrqJxrKKKR49mL2JE",
  "key3": "4UpW4DQfgeJxeFXw5WmDRTwuWGWPjAmjSurWBJGsCcFo2LqdtPhTAXWSmGN8S2SJeXGbLJXxq1az4rVwwohQCf7x",
  "key4": "5Wb87CunhdDhMm4dEqVCuU5L6YLGM6ZAZV7Qq7CSANm3RXCboM37Kk73LqFEiQ7UP2XKSnBTqdVqEtA178unj8oc",
  "key5": "2tLCTAeBaTKptnj1aEbxzLEWenKe1mtY2gNrwtSHJs3vCT5sK3HjkKgQpxftThMfGQFF377CQaQrkvZnAp7X9Xw8",
  "key6": "3LeY4oF8feqSuxQYFFVgpU4ydQbWH84J6tBW93f6KhPPWhJ3jzk2G87kRdEfpgCnDW6dL99zaaDyQZNHFwXGKKaA",
  "key7": "5QjkLefiGkpw54pRQrAm4HFsaHY1tQsRJvdzXNmpQjmfA5Sd5fTt8Fs88aQhN7tYX6p4gh2aTa5Ffn3jEjudQPep",
  "key8": "7Kjofmzcq4D5dnirENCLRneknYPN584kwWZTvmPQuWTZUDgfpE2f3DdpMdAtT9FHsGwMowDovg3RXA2f9r14HBb",
  "key9": "nT2ZThDqrQNjRw1UjroV4ZovfSjoFL1Z9PeCaKTzAaeJDStys4r2CbauSWu8C4muZbgB5vmYjddbXat4RQzboKi",
  "key10": "5uC2Xpo3Dea1Ba67UWg3q6g8GMkDNqvM62PefkecRM2PeUe5k4dhsnkardGm1JrvCfcUmFG5dVFo129bG7LYFspN",
  "key11": "3zxEfVe4q7SWLkTGgSfCCkg3V2ajeprLY8nCZ23Lny3zv4TGiBRgjPf8JaSrRRbHGk7LHsG2QZuFzspn2ZTZvtdv",
  "key12": "67CNJd3Mh36Q8VheiVaMiQWLWxkbWtHE6pD1TLcFbdexp1T86Dhx9E1SPCBE8UJxYQy9rs5tsNpjckzuwD9BxguB",
  "key13": "4ZEMg3kfvF3tkuSaKLTwsZ77SDuK8Z6YZMo5HqmTpwQZ4MK5QjnCGE9CQJZuVLP1BGSHU9i4FAMuASBAYTavnZjV",
  "key14": "4cpCCrHVui5Xd8UkiuAhDNHKcUxmrNC1y2vDKxNCEtdASSiKjuff4WHWdhtPJDtZ88o2EzZ96hsanNdtEiDDSa5F",
  "key15": "3NNyX6jLAgiAWNmxzFgYRyRZqTuFEA8RAApVBLDs6FKNCxGkHKCY5WDodnC91WboskXLL5igzqAwUasAdhocZVVL",
  "key16": "2in2LFDjA4M6o6iKZyUBYoPZaFitPP1FMYQtrBrutKmWFSZuKnYEmo9ZD6yj9aHhExYbBzvEV2sETUV7PQ3K1vyE",
  "key17": "3oHxAqiKt5aGjmPJcSKycPoV2TVwZe9fNnsnHqXC4mhEWqJxa8qx2f3dfBBUVLgMYgrZV2XcBuepsNz9MwpsqJ7o",
  "key18": "5tVBRJgJuLUkNUS6TyZokriVtbfNZ3UaVK8uh4fVYvY76NoxRKjGHojH65YvXPhSTsZWPVwU91YVpWaEgEUZTimH",
  "key19": "2hW23H4T4F8mUWbkZps5EtfC7r14gpa9NW7m1NwXbui4otoFEoJZPvdXJ2RXqRb4JU2BqdYCsX5wgsykFJZCdSCD",
  "key20": "4c6UQsR6YRzY5tu63Ngfiq5s5NsHRMqBfjonmD3gpujuSXutsUrukk7QbG1UbwQ1TvihLvf3qeAqXy4TWNEpn51s",
  "key21": "5ydbjPqbHWKibxR7TXzdNhgWGi7ufhsh1eGYp7J7uwMKET8udTeKz8qmQ3UX46ZTQCwUh2kPJbQ3FNLBXn3iwBZt",
  "key22": "63FLCCAKHJhkMg9cADFE7EuqVB9AAxxNEYX7BL8ce1mGP5EeDjACUKs4Q26bLt1M5EexQFDKTyrQtrdRwBZC5fX3",
  "key23": "bXmm2WJu8pk7BkdxZC89PiionXrbqkyeFivhk6tNGDGbwaEPgeA6Wu81NPL1DAD5u9mb6jBVT9VD4mZoAJQnMDV",
  "key24": "2uFkF3dBKbBE7Y7tAK1syhPNyG5KfUvReFeyBf8nmup7XtfYtynRvcWn8HqbWBJgKX4vjuJJLkFhc9AJUpPSPPPu"
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
