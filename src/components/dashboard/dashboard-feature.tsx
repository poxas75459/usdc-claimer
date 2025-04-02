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
    "5c21X3zMLfnruQTqiEbKkh7WeukjH65tpsXhw1rrfapwyQjaoDoy1aQUnu9hNCYNZbcjVoWsBcA7rh2zFQdJ7Njs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4TU6aQAHcnFSx9DMNPXQNAxxEBSHM74h7qSPuD3FYt96gdMxVLo1FBk2dHZySALHeTCkVFPALJhzTZBpLyBxRx",
  "key1": "GorXkjDrPkHbvZE7bm3dQJsGzcYrgNkPvDbwWwTUeY3e5AcZ8nJSyH3SwUara2EU6s63baCiArGpTjb2ZM6N7EL",
  "key2": "4kvJrtzLXiPxzwAoDgmMHTn7i76zYNxXvw1oEksfLoahS7DcSYW2KwqQ6h3PoaHtPUKRmdHzaWih9TcXHaRKXzrj",
  "key3": "2m8xPsJti6bG4N6jjcxmQaEtQhjYNtdiwJo1ETTqcdD1HJbsNm6waT1v8e5C8xMc3SiCjrm9LkUkBPfYqFHf58XB",
  "key4": "4Rgk86uxhgJbTMaL59ckSRtnXFfDq2K5hpj7aqL7VCTwpDMiya1LzeNqbwRKfqd2ppDQDWWB1DcAZ3Gt6VztZVvE",
  "key5": "2PUennXbvkdmYhMzbe3CWMiBdKUNENzPuu7aNFK9We4RBYE2VxwdQUhMcybgvsPG3vRJPPeQAueJZbVhNHb71Ubb",
  "key6": "3bzQYsppWtUm8n583djQ7QxmpMrgBEGp3QuNYeyiQVitcrZyuis1ZQsvzi1NGujGi6PRnG5NCQZmqqY3FZYTgjaN",
  "key7": "4EUo7Z4419AeEx9WMY5Tukc1YUree3JqpGjNXh9bSqNjcGxHNJTyhkYNQqyawUzB75wWiiCkXGxpoexYtRC8D4my",
  "key8": "2YPDb11nwqQhVPBTPcaCLEzjnsvUwqTTSFq769PWjWitDGHWFE77ECjQ6y48cbHoKS3Cz6LddHNxxi9w2WSTmg4Y",
  "key9": "mWni3yMKE5t2vmN6gE4qWaACqmsziR6ebxCwKjF6SSk5riqAq7S8mDyuHUL45EamYPicSZnxAYs4Lh2zVJEAbRe",
  "key10": "678yvLEfBJoSE5anVmF2a5RnSrHop43YgsVboYcp2JAqzPpfSAhCTroTveuz8hpAPEZN9uztq5SFu526BNdBhsz3",
  "key11": "2emRmLRia4nNYentaA9UojbaYf7ZTbvvgL3JjDzcCDEaTJcPyPR5LMoU4aPFThDRv9r8APGBBSA9xodFkhv6nB5H",
  "key12": "2c8dQMCzF2PeQtBRzuy5ihXRLukwMM61JmLHZ49sXPJhCjozjGxMjQyYddx5hDr7HhcatGUpWREqfANdaPQgHSnc",
  "key13": "3msufJKVQuGYEJ9KvpnPkF38gr9QDvd7LmByuGoa9ojigHB8bYwjzncBkqLuuWbvf5LweAuxo9jMLsXNeGwhyEiv",
  "key14": "2AvMGsu5zKkEjN9ned8PyHwYXbpAgFtUD8PiHjg72JVLkMgDsdhDzhk9JsmzbyP7hnjLL1WjxSiMSCr8XdocXiJt",
  "key15": "3gxyeTDgBpG8YnhM37zRGM875mc1beiCW7rg8rjCMiM68Vsa3TWhrqX6WLtGwfP9kcr6Bax1J3qv3oqinahKDyUm",
  "key16": "4oJkDQCciRcuBxWzZ3Cdf4xLokdGQzfJCA9LiC86aMhKupV8FjoWQcaG2CKf4M6bk7uWb5y2dzc467EX5v1oB2q5",
  "key17": "fSC6cEF9QsWnVDETRz66KpfXfk8Eg28PVUdk4nvxFwwnantwbcRL7UchcF5pGShrMsRToeEw2wVtpzoLA1Sm1XJ",
  "key18": "37ofc786ikGiJH7Hj5LTufvE2iizS1nnWp7ss76tDCaphhjhMDmYDTBKi9xyRwFwrccRVssZHw34JSMpHJ3c5jgj",
  "key19": "43gNUDx4nf4GfcDEkCcSu3eeQo6qAgZCpsGD6piCfdT4o996YGoGZgkpeMeuTYsMRvQGa3DiTVvqzcuppRYRbKL9",
  "key20": "4QWsCejDq8gFpJZvLzfiMCZCyk7i6vTx9fSP8FMKfXsEX6BsvM4umpg7zTx9hcWyVVqMSaLVkKz1caqSJNgtrVzP",
  "key21": "EQ1Y2c695sH6w88RA99rj3sis4d69xXaT89W3pbPaynsMnrA19LajvUVPhv3nU1nBjZ7QDPAviEop9pjfx8cdFN",
  "key22": "2eTCN6kLFkXWq8EU3SKUssa2xmByubtivg1kpKShNUGGFBWKdAZ2KCo9yatGSmq7JNcsaA2bw6YYFrqkdkuBXpKL",
  "key23": "45ckkqTdLiBXbS3Jj2Sbze8BNKVqprxBHEq1CgqziuMcYnuAR8piHHGsum8Uiffp6aM75ak2dPtqcPAeLN93W52Z",
  "key24": "5HCGrH1oc4Yvgr5wBpvcxFbBobcJcP3o3c1z7cpDhL3VEe5MwUpmqEALVo1bsun4eaiBXSnhsKxuWiy1NACx8bd3",
  "key25": "3BM7ndTutKA4T4r51eTSm941XBNo1g9sHYAX19pbydRzRiPNWU1CveeaFWHRFpeVj2ZRHA49SkTxr7AM8pAdhHhE",
  "key26": "3g7GD2dLBRHb2RGeAhWefKvaVEt4ZiwYuYQSS43ya12ngAFw54kLYjncenqLrSZvDbM8vKVTYq7JiqYBvxWuEzAV",
  "key27": "5jV4XqTtRt9nqhqbcEE4HeG5RkPsvLkixhKuE2FaGrdu3gr8DfwGpNjBHFTHaeGtAtZ4zV7LcjX6GTG3Mjyasfqo",
  "key28": "4GcSCvsMG7cspiLwdmypgQEWctH6evkb44KeyyEGDwfqtmD5pMKGvZxc1GJgueiP3nMHci35dYx7qaXtDPgq4nff",
  "key29": "3ZTB6igRqkA5csRpGGwZMKgDvzeTn53jFS7zbZBkZv5U9prw8GdyZiQnR8at1ACP1itiwXDYrQMRkGVXVa3oc5ek",
  "key30": "48FzqbHW1VHPyZoKNJp1wfYDkWBYSs3u1KFizi6RqEgv4tUMhmTpGgyeVeYZ6yKYH7fY2hezju5YoPjaCGadvw6u",
  "key31": "2CjL4onrfNK4scFCoktLQgmuBXp8sjFSp6KqAooWFbcs7M5VAgZj6NgFjw3UdCQBnGNPCQGpQ4Q8tdxKGozpvTFQ",
  "key32": "4VX9kSc4Bvxh7VXviqTmEf6n2e87UwKbgyM9Kz1NctDkEhXQi3tME8sNjv9AwhHVjePm2F4zHiUAcg4jvi9J2J8B"
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
