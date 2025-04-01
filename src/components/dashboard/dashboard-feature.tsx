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
    "2qpeFdV9qJty6rLeHjX63mvSrgNuVugGAVBRUZzqCnXF3AcaBjaJ1u73juY2NMLk5LuTdiMnZfHu7z3hA9snaxtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FK9gXbrehk1wcfwU8LzcvwaWMY7G4SxRB9nkKoZfKBK2V85dqrjxvWmLcTkydmZRBeE2we4K17x7UfP3LqcGS8H",
  "key1": "3K88Jg1MhdN9AvsNssU7oJfgETNXgFKmLNYr1S5dq2umNUjr4EzgJCz9KaeWnU3BmsCT5kgiGwHB75Buq7215TMT",
  "key2": "RvdJF7fu4QT4Wvyynqjn6vDfENvktr9cSgoKnQLT4pYdpMFFx4syb9RWHsK8vPwRTaayKzwUN4DQvwvvZc9q89K",
  "key3": "3BpiuX41tLZDHvoR8WR44v2BXiseA9p4oUMJWEMENkJ4KkaZ7R8UHNY71Jqx1JbhphQthHv7b6V1BGQmjRWGtC6E",
  "key4": "2i8cKzchuhonSeGDfY8jgjRG4u96gbKUMeVkfNvareZv33ye6QFxNYZaYZ8See3c7RppShpo1T2DzahnYWCDHREY",
  "key5": "c6w9XnDsAveAuHe35aqGsqYwTBkKEaoXTCADAfFPFm2Q9auAFUGSWzJrCXvXfKVYHtav4FjBuBWwYupEY5jmYTx",
  "key6": "2jLvmQfJCTF2uZGjFq1FVcmwqMixugiU1NRUu71U2VniV3j1r3ULiHhX8MfeUYyxuQB86JyfqGapHzbpAFHyUyX2",
  "key7": "4suA17spviB4tKKRNvmDAAS6qYPJY2nMP37AA83kLQSDQbDPutWX3wr37C9Enut9FsF8aZXRcCtkTnUvNyPUkvP",
  "key8": "4wPB5nxh6uXmRUQcPUFaFakWnZg7FUozoj8wBCP28hq19wbGUyALU5M81KbAxr9ezgB86xmHP1rB5ofF7zezodmu",
  "key9": "2rRvLBbfruzLjVkP2Y93oDH818hfQwWYmUAtg7EBdFecPHhbAZLa8iyUzfP5Xf9fRSEqqVhMgdYFtbo3rRJvvpPA",
  "key10": "3vmz53mR2GyKAYyudLq16F4okyfAraxh18EzmVYLaTdnhK2VvSbkMdDYcqNF3GzkmEk8phi8W8QEmowdH2ynChkV",
  "key11": "58RGv6uqsQcT6MZxf7cPW8B3XyY7cKAEKhMHr5EMN5cimzcLDtdNwEJGzWFgfSLRcxLq95JpqSgR9mDyq3Gx8pLT",
  "key12": "5oqV4DnEQQeSntpDbBRraWcbsC7xhh6gv23zUJFih6ZntsZydj2tM8cEsgSeuoiPq9exe18BWYGWjgfbm8jD59vC",
  "key13": "4E7wW2aUtYK2pppt4PqszzBgAHrUqxN9EFdtL9VCpRxUjNMKHMhKQzketQ2XQDWqKJitucq6Kvm8HJkyy73maU7",
  "key14": "DKyeHEtMAzEoCbwjuBjFD3xJhH7zpxKhij8X7Vug3HfD94a31egrpRUCFDRhY4GkynLXuPqr11DYPCwReK3Lfar",
  "key15": "qoMqshJmU3bKT8hBd4Aa87MktqKdjZxWZLceEZZncDxkvhUheFU7GCme2Dffj9qkSHD273HsBtKsMPoh2JEn6ob",
  "key16": "5Wu7cR8gsqkbBJ377zuGfKoiSXamAabk1DrbdvdJHMVHqQANXnqGJnWwy8n2YYZktNBepBTNagjMRC5LoU3xXRbY",
  "key17": "4QjWMYTuwEwK3tRjQiBXmE7rNzBBEqkgWiD3BLEjhJxYbyvXgaM95TYdnxHMkg3YvW7A74JqBrG8N7jS3EZdB8d3",
  "key18": "5sVyyoaNmqhY1KN57Y1FMVr58HyxakBcSLaAGYqU5irts1GJCTK3aKuPtXYQCibSVfoSFe8EdBv7zQa7PiPTied4",
  "key19": "2oGXEkskQ8z9B46Yhfo33b9nzCXudeXkz5hj1fxRQKJD99hr3z53meGvq5iNAu7kVWy2Mf1yJfQiXNxdkb9T7Mge",
  "key20": "F6owJ3byUK2QBdcH2YPdV7kCQgYEnJH5Y9sW6UoKrJpZdGgdsbE5FvRZ5ZE55Bxr3FkAdD3a6eWLtdEHMBWqE1D",
  "key21": "5URz9ajZhXcLanFSbQTsYVasisSRy89jaaVYDZ6ms6oWsZfyiLbgZB26efG8hV3u3XcyYJ4H7gqzVc3zjCZ3Qocw",
  "key22": "2HjTrKcLHd5T97nVNkEjeiQR9QQLWm2xjjihaTNY9EK5Ua9HFLvfF9hPps2ckspwvjnswrVMmaA5J62SqvVbsUfr",
  "key23": "264cUviccYsRcCBvDYnGNMADPpkyfEgUv4dZdBK9DuF4evMvN3TvSLhQxchChstvRNJYVNjTEHDQch89krbz25Q4",
  "key24": "3rJcJrjWHovjbs2j5mUMXanKaW3NR7FhRvf6u4Dw1MAQxS3J2GMsJ4pdKeXyqQMNZHnQ425nECnV1gTpXis9RAjN",
  "key25": "21jKjVvLxrgbnuTfB7YjiD27c8Xqh1e7ooDdmozpUQr2GyZJGHCz68Sfncggv7zSSJnC3hWww9NoBpfCbdiaKs5w",
  "key26": "2wCFc8evniXLYtGk7NoRt6DijqdEfGjX9MWzCJnyScpZhsZriyEaLztbhnsij1Z2o8m4fkEYHjYxxChWfiyQtNyn",
  "key27": "2RKLekTqNezzVYeHqpMubfx7ngRjnZdzqhb5oBq6Tvyir1JnopDC3xFrLMyJmzbh4nwC5DYpJAYx8fPL2RB4Xhrr",
  "key28": "3RoeYdDhz4VdSBNs74kK7KWpCUNs42oJW21sCsATUwKz6pN7uRHyeqR96ifTEg8FTJgSRfbZ3tJLWmjte8jfXmCa",
  "key29": "3hntHhPrd3cFyExDhRt3iuTQPFzPJYhCXUnF4k1MWB1KHJg47jDBjc5rGioPffzjsLNX2gLu4jyCRjkgLo9HEnQH",
  "key30": "487yG4HUiVAViWE83P6pW1LZYDsDLh4zqe1tNBq5nc8Hahn77eUtUG6azriDgWxSuZD7FVbWvtDWoz9t6TASEh6F",
  "key31": "3WutiezA5wfnahx8CBMam3QtCxYAU9CMnmteJ5fPdqP3ndP1cHTWVTmr2GYEWwqsrwUA8E6gu2ianSFAGq5TE3Z",
  "key32": "XZ2R3N8dfTtd9EBx25pJR7KerfLYHzf7sGHZR5m7zp1V4EoLewccAM33nhXjXEUDb5rt7Qd6eSkdG5iULCfBBGH",
  "key33": "2UHNEgngA4eATDJGiRvVcKUuGMrTkXtZFqgJbQydbYHzZnhZ72iV1NTPt3ryqhEQ676roU5w1mrDZ9Cy7pxxRxFy",
  "key34": "4UiSkQxb6ZytuN6NW5bZ15tyKtee4H1VsAvHkFaadEypZcympWCbe2bgAv4pyBQrUZLqA1L2hcVNTitgiFh3HBGP",
  "key35": "3ABriFPUUdvnyBnd2qvaC1NH7wNHriTzhFXZf74RumZhCwrYd79zRFLfBjVcKtAv26gzCjmo4JdtxhbtDsD7Cmr9",
  "key36": "2hX6cCPccrKRazaMweJ7pbvJXoFRMgthrp7aRyR15e7LxutYc7yMqSEGdrV2BizGou21gdRLFMrgpsQiQVt3qtGZ",
  "key37": "2J33NtjvHgVCfPGcmEP614yZS91NXhEfWKvS5Wd9WN5YdrFQcncYWfQHo2TCUHwkKniHkdxfesjvXkEQRd7wfqhf",
  "key38": "uEMM8GCJkbFDz3CfM44CH5kE4z7buDW3jePDXEUjP2vbyZamFTdrV5ASKq6ZKD9rF4xpfhgTKtqZe5VdJiBka5p",
  "key39": "4AWsA62aefPnAj1M9FVxLNewnHSDCHb7sfH8zxP5wPRKnAeQLGHFEqttG7h3rgZR9tb5QtT5CRTGzo67VtVg7jsM",
  "key40": "btHNu1sZqfYbjiGS11571zKxKc6hUD8wwwLMgXeGRGCYov3wscSNMPk7L9yqh8Jegekne6JsWLyrza9dHnR85Xf",
  "key41": "3SaisKzGKpQD16ucPDa5CPCzvBTEBE5HdtyW7dGPj1PzukRW3f1DwMTT2pJyqPw8mDWg9STbcNcox9JJhicabQiD",
  "key42": "f1xuiS7xSqxMvHF3ea32gZDPbfhAz5rkD7o6WG5va9CBZ1Nzpi776PiUStSHJgNJNtxqTxssmc9Hxzjznp2ejmy"
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
