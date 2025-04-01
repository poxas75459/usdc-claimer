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
    "C1kJgjssxKMcaiYazdWz19rpTPcfbwCJwNPPW2wZvTAY1wDjUVMu6HYCoxGpnNJdpyjn5SYJCqewBrpcjriR6Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kvwjfzT4WGj88yo3eCg9EbZG2v68wC5tjfUc96pfHAR9kWdf5vP8NjpKMQgLHigk75hqFHHo9JdT9RLSCySG9Do",
  "key1": "2NUaBkxzYxK6oAYnh5ZqnqG1UgQXmkRuaUN5z9QvNbk2pDYebdhAcDsVYCDba2Gt4pXbpLC2X8SqZxpi8Ms4Em8f",
  "key2": "2wFvbQp4hjo9YTVzpyh3SRe5npiD2j3duzqwTXG7VBrWcxhQ9vb9C618QtgcpCpNJg1qUCSsP4zb5KwEe37woC6e",
  "key3": "4xd977GGubEVaXVyv9nocKNdSTmYPtcUZnMEz8gC3AvwskudmarPkok9zhEgv5GKjLc2u8jcMZrx49qnfR55Vy8c",
  "key4": "4Grg1CAg5uov2vymB1C7zBhtwsP7fnab2JvE7LJGB6MVJsYj234dRghMtL4oVDJ4HvVbqY3UcmmmsMaozYgCD9Ev",
  "key5": "2SEvB2yrFQiLTwhF849Kw1erZupyykv8vt5B3HyVsNUzZ73hXQRCDaehmpmLqxxMeHzXhdd5RcNYM5G9FPecUrWu",
  "key6": "3feBb7Gk3rdZRNfQyMDHeT5NFMnT6AeBLVqcjg3J6qcio7rNBxxYDK9VL3VYkeAMsSHHiGWNoMV5VaKd2hHLdocE",
  "key7": "2Vu1h8o7PkDVF6x4WfzswqB6Nmt2rv2yp5KsPnGJweTVHR3AopSrfStAta35pXyG94bTvjEFrbcJgH8yWs5S4NqH",
  "key8": "4xMf6ZjPCHWjBbH7sTY4F6bmBVLrc4LAcFFc1TV1rSsHiqJKDWt7HKj52NDyuknPhvzPMEwXw4GVAiGVBBv3F4GK",
  "key9": "NxVXe7tzavaQB7NFi6JrDL6Yx85YAJKQDM1BYJcJWY6wQHEPEWwrhcn2DFV1W9XyzTuQa1SuRMy8FbRDicPJAM6",
  "key10": "jDqWwdtUWbBJnHA53GELv4vijxKc4rH3gm34Yk8MJjB5MAXggZGRVPnwgsQW9y7tiPefscFN8SXWt2Qp69HEhZM",
  "key11": "5LSEM6CGedGQiqxFXqC73npc7MPAa1GUbyEj6naTiSKusZCqqjGcRpyek2NY2GuAMtaaEjRjg2gME8WhABwGVZX3",
  "key12": "s7fZ16qhk48fqKZwyHJe2tj8Qt41KdD9QKCfHFWCYDKiHBXRZoaXKJqutAh4LjcjwwTGCXFFV7SfLifYLpuSjX8",
  "key13": "59P7qxSzW4fQEKBoWEoaq4jno9cfq9U438Lg6mdmcGvR4Hqf8PBfRs27EY77tjXfcarUxVzPYAJbo5KwbcQ74guB",
  "key14": "5QZqDikpNXq5kNPNEnQdXbYoHdCRa8NySVeJ8FhT53JD74jQi9ZvVyh8jiXVwScLYgq6KS9iHLQ94EKkFAFAqYor",
  "key15": "3GaCTRYuz2UzvXjjtUd4u4RSLCnZSrARsY5fBxrmfCj2fAELxmRVzqu8VAHzW4rQgSkfBpmUkyoNKFyntay2bfg4",
  "key16": "59FWnwYV1ek7n616u3koGW7hp4vL4xtmwBXiyByTyWWU7AP4qUQY7MWG4E3q5VCy7PegbdrdCNbRd8SoGXy3BPfA",
  "key17": "3sEDFwSnWoKtoyztujRAR8MtS6bkrHbsDZaitAaDoqUmL8ra4zYCjU23KCNadyk54pLgkvSyZeVNhBX82fSV3JJF",
  "key18": "b6PTokeRnY4ELF837xyN2ZCxkmjhxtGtQN3X4TuMdzYKa56qH3iaZaepBhdVeecCupJkUTLZj84NfLzwdfPpdWX",
  "key19": "39yXpR6nLndza6gkKu63QmzMYSgRGoyBEfJ2PEFzoywF3dTDYNS7kHXvz4Dd5qRwEuveU8p83RNquF9aDkizh99L",
  "key20": "5o7sFSKvQMMxJUXn9xgvvvVEHDvPMwUCjq5K8WaxDbjYjUPcfQBrc8tqZ6awvpmNiJamiqy4t1Jgd6d7VpoTsmXP",
  "key21": "47G4bCxP6yBcUTcpSi4B3WE2ubBfKroYZEMd3VUAD4KPufkKUDFCVjmY4rjZyb1H55o46StZocfYPy4BzAjFy5pA",
  "key22": "2wxDx8ZHxP95p928YrLxXZsEmMMZp2pfAE3KtLibgWC8aURDhfuDHapqqnM64LxbqqKHo7E1htjZDdSwxdt3gNPH",
  "key23": "5wgzFurRNxen8TEwdDkV59yfdpGofkMg85CNYga1gaMdvu9P3tvdSbywq2m9dknXNApQkdi8gNrhDGUzhTBxav3E",
  "key24": "NYT5JwJ9JS6P8m5m2uMSLA6GYWnLnsJ7WtyMSeUJzZECnxtZ63idq5588FBd9Y8QioXq1J6VZHabhM44zA1U19v",
  "key25": "5T4EZRAvTMqwM285ecGSDxAJt7HXp7x4vCUyr9NdndzBD78P7T3bffSshqf5R2seTwDP13ESSQFgiKD9EwDGQLbS",
  "key26": "HFcPV8WUwpJT245Bb6yfnGehApUvgWN5j4RoJHTX9Fpu54QzBeR1ysXtvSZ5N1APX5dURZFZhUk5vVsaWxMZjFk",
  "key27": "os8x2Bvc9TS4DjLWkN5211XWjzSa2gwu27qMJo1ppEfdSanP4byWPCWgt5m5ffgnV9D69Uz8Fe2MzS9VMXhndii",
  "key28": "5ZNLtieGMahakmNsNdDMRL5ND49SGRFUKPQW1gW31t3UTKKKM1nwRe152oeTd2MfNEtZYakw7oLKZDGvztuy4CQy",
  "key29": "3Ht1QYySTWA54QwQEFkedN4bsJrL87rBnvpWZLwswNrZu1nfZAu8HLnz5mK6jMz4szWaRMhtXcpFbg55fwua778a",
  "key30": "2sxHnUyA7hcpiodhgzEP57P32sQUGL7GXR95naSuDKLphgaKgkFDPDREeRdcyAcJhxsmo15r3XZPe8LDxNY34jnL",
  "key31": "2sCS1ZMKu8FXATuQhC9SoqDms4LtdpoG5ZQutwR4wCM7sjM1jBGe4v8M3Rp46rg4dXB137fFqc7evofTWXjp4RyC",
  "key32": "4GN5yVKPCdvmEWpUgnuPpmAX89Di3xXfCreNrL8QisXfmcC61F4nVEx91sKQeJegmCKxKTgfFwrZNeyuPnNpum3E",
  "key33": "49nLVpz97Gb6jKuZpybPtc2MPQhwYsLaRq3ysorNZkPJyd6imL6CjAXPFYaBghdGxvR6Vt4HuDgqg2Bks65N6PSE",
  "key34": "2rZhjWp1Cz2hwk8rv1RXVZrbxhzzaEqn1P8VWgebZ9xb9Epopo6wWN8VLNy68UgNaB5hjm8oV2izSMqpRzdSQmbC",
  "key35": "26EJH3LFZJfGrchCrnob5n617Yt1MQkixogHoc7udemd1r8mDmajMUpq8XPsFsTuTTUDLHDyyvgsgeDkBMJJZtSh",
  "key36": "4j8t7RBy3Wysxfz1LGbPeK55Kw6KzDozQoxG3amMeRVCFgpvR3yd2Jrg1bakyn7aN7vWFe6piKMFY4ZoNV2jSmhi"
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
