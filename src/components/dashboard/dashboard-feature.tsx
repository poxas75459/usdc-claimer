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
    "2kiLQdbxWgFYupfgit3PtbFNnAX2jujPmwPHPCz8wMnsRLPNsVE7vTT4UsNBYDrGZRFTSX7ZBQg6LnwnpdE1ZGD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4witW9s4kkS4Nv1hFwdxzedEs9Vn4WM65UVXHjNWSzhSvzDzqAqgqA8nDm8dBBuhAfDcEoDaAzeu54GfUbj8n43c",
  "key1": "3N4HNcRYJR214A32oEXgoXSvx1zdH5xE5xbBDmP318aedmubLM8q5vfb6VbyFUBafj14n2TXfT5r4tQ3AgDNd1DT",
  "key2": "4oL3U4R1DD1SR9h4WeRbRrH29bRe3EnwNecbVx5SiaGj27ZvSGpbp4rLefGndj4WdVeUSEC5XXnervVDv6mVs1RD",
  "key3": "28VuhuNQ1BzmThnaxuBaoA8PFR6W6yBYBscarP5GjUDm5AXxtH5hZZhp3AJXa14dinyQpqk3Srt3chXbS1hyk6Lw",
  "key4": "4hB3zk4LYjJComV4DDJ97fssEitZtGJdnmdfdubJaX6wdgiFnVyM3R9rsKuZnTAaPbTBdJx6TsUkQxwP3iUMoWAp",
  "key5": "2Jp81cuWbu8SxT97JyVKwVxPvxpPwsd2QrdkHEQXGDE7hsGkLkaLKPKewFaEVn59moqUPnRkcGd2NDXXQuGoRZUQ",
  "key6": "3oGKhFKoqG78X5tcJKNqZztG5S3t8WYWAv2FifXRkYsqb7wD2vGRY3x3zfoaNV8EvdWmwtmgss9qXxC8BSQ74gZt",
  "key7": "2N3QLBdD9U3KRSQdSPMe1RzKtntyX9PDQbyK88Xph3ZB2UWxv9Dz7u8YMWXv6hys6EQVCWaEWZqRoWEWdsefPZfZ",
  "key8": "3TGzNhYaDLFMWg9cZ4rJap4AdRR86uWbf3mRrsxFNzg34f7d1T6bpr9XyFuGNtrfqFUX4eAX6ZQYJ8FEdQZcqi1S",
  "key9": "4Td76f42uSudTXGmNW5bgmX35B9qeHzav72sR1mDin5bmyHYy1BGnfuN2S68PMHeSXZf7SezP6apecBpjiXjTXAW",
  "key10": "3v7QV3BwJ29jy2hYoF9eismCLt8T1vhn9RnPTozteAYmuXkXsw1m3RkcdKLuVrY2pFhauEwNy62ABvHyiKE6N1PN",
  "key11": "VUxSycXjGDF1b51rKa2HY3p8QwrUY9UFyyBjE6cmpDnEMYQdQ8qDYyu444sN1HT6Csovzjtd5cKvbK38A1j798f",
  "key12": "F7HNRNgukehn4E5wbhQ6nmWw84bK3DMy7gVZPRYgmY1dotVwUU6rQHWuGetNVHgmNQStENdzY9FdRy7WeB6VE6P",
  "key13": "3WH57pZ8Dpv1YjHd6UQe4i8qVTjbW5iBB787L6C8TRPuxRmjyF5sB7zhqJf4gAbYLbBpy3rU22TMyGdexcAWnG8E",
  "key14": "5af6txkXFP7beBQBbvSxmrC5Ma4X6dWaye9tcAtLRrUgpAQvKAT42ih2zZnhHo95HYgLgfP5gxJ8uJ9RsukrWpnt",
  "key15": "3u6ULYHvg69uFnkxJvtniLz4zwf7UY4ZWapksrSZQyo3CDtwvPRsQcsHJySwQ13M9xkguQNtGyzoTUaKgorkwRzg",
  "key16": "4a5MpJpjkGVu1o1hwxjGZxzSqXUGphQRe4U3MeZyoMTFpica1u95rAo2emuTVNvhF3n5ad341jrARxUqXh49asmx",
  "key17": "2np8REfMEC5kmmHpamDzH2LHb9WQGcGNbj4T6YgoGocG6xVYgvrqXizvM38siKsiDKUFn9uGDXQ53gDoDwcTfiGJ",
  "key18": "5X2e1JLi7TkQosG81XA4SR5bpMd9a4esci8cPNCQFdR6wgwVBf5K3ARy2aLY3Cpx39xZvipPaBccWzSj7E9eoWMy",
  "key19": "3BoiNjPVUKbSrfsybPw9VUA6ivRu9viqYhAVUZWkpVWaWvDLtxpNrJRy7upz9NDRHPz8EjfeEwdxGM4vBLAX1K4M",
  "key20": "4CLusosQRazF6eyadDhySTFRsbLRap4T2ki2rckiPPzfUGQGouM7TuV4i1qSQ2zi5gc23i82LyBnD3NZT1BjGLJu",
  "key21": "5XwYkYDr35K99riXgtULJUkwVLZqZ7H89Pc4QxXk3WywYJdSrA7z3sAStatz9vFZTvfEk1t3joRuo3hR9AkF8T6C",
  "key22": "FEztAXwXLL1N8uY947MekvNk1AZ9eRuKBidrvfPLqrdPmdaHoCjkVdoKEqHJKMfZT8mQcV39bE5o1nzocTv6e7E",
  "key23": "4NHfR3HskXEmURjzApPPAEDaQnipKUr9QuuXXxuc9wPLQ4eAztgi27iwNNmHL65Sw4s8Nb4Qe9gqBfs4a6ktwMX4",
  "key24": "2oLH6Ku4neJzmnyZbHPbEsCyt3BkFGv94w2yfhBA3D81fXSAf2h31c4pBPBJdwcPEvAu414J6GF9wSWnNJDhzs8j",
  "key25": "2ouDcuMCtfvfEZtrapaxGDqb5VqfuV5W8FUvAnC6jTBYUYCMcJVPgctTzaFPsWz6eemrK2cDY7p6FxVjC1TPEyei"
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
