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
    "2NJySsn62whvRn6S3MrknkQadoygG5mW7unG5d8KYybnZnssJBcgcfMmWhGmPS9sWjYBYU2eMaygtNCTXLYKvb3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T84qWHXfGJwtkApf7Jfi4eJQEZ6naGZcYxPqJviJ2RVGutcMBVGzTiP4ygGYPcaLDgQrztRhcfvS3nJT1uGxzhh",
  "key1": "Mqa6CQhk3Wry3cJGPPLHS5VRHLPP6mBvkGhEsAqetmk3P3frjXTL3mQaFhq9DVoJ7qogvhSaQvThHv4TeyJC9tF",
  "key2": "569nbf6ZRJT2orVE69HuyYa99sMmqrDaSrvUwa9tJJvW9TbpJyCzMHATgo1HpLnz5TTNRVGgJhvxvwoj2Qobeziv",
  "key3": "gdnaYDSmcZY4PpMyAvJJYvZarrM9nBXxAdREjY2wv8iryk7kGH7sz9PqP8M5Sae51yaWMRNPP12ko6nqhSMhSBG",
  "key4": "412UDkSSAc45EDfrgeaVektyY81KmiDxk9dC8HEJddHj5F7zFsbtrdD4M2apHMPYYsiTBnN6zcHPVLuhvQK9umY5",
  "key5": "3fy8Uyim2nXSQLVoiinTcWJmDi1ZVukArxV2jReRphPscxwLz5EsAsTDpyCz6r1x6V7TcuHXe3JNUmAdH44noFwW",
  "key6": "3hnNxubJ73hKjTSHnTPTzYKsg3WK8c8PA2uCjxbhrGJbHmws7zkgGR396SGDUsvva1otBngi64WtuxmTtsKzSkrk",
  "key7": "9KsXkCPvjt8Yn3pi7q6i8BMcz9iT3sbhp41AiYje4u5m2tBpnSJ1NbwFT6KQFPa2YmXmupB5UG8B8U4Xzcu78AR",
  "key8": "4UbPWnsFWs6s72X7AKZ44fuUfuvJk6e8znRDwiXLVATit3hw3TgspujkpsfkxCBK5GPNwxkeYNGhgwPQVeUwMic7",
  "key9": "45uUjALxVwshox3ggvmmF9QfGpsLaWL2G5QhLdip18pw1dUfohC3oiQwJWxcM5hUSYnAkydSP9FnRQJqWVJRtfHH",
  "key10": "4EMBvLMsoXpDZN9AsoCubqyPUihwbTv6Zk5HCWFUEECpoVEXZC1eqqs3p1pzGzfSiXni48QVTpdptx7hRhrfRmAk",
  "key11": "5MD3BcY4zkfsmw287oM8B4QA3zHLBPyLSMnGrWTNgaWUUft3E46cnFgQ4i73XxDBXfzhjpJZKawSM89k7ASPkgjp",
  "key12": "4kuhaBBmk9FYmgSbRh39YEet81viDdHjfx7fPatxCYgjvdGWHrrj2deCFxSQCGCAhi1UNvvn5L8rWgSAC9xiuC8V",
  "key13": "2GEAwRTiUSoet7W7K1WjqBLT2sWaaSnSSGVqZaoVBydNgEHYY6uC1j6bwbwF13JJSTj9nifc69ipMB1prB4hpEFB",
  "key14": "2cJhLw3ng7dtMBeFJumoFW6Y3A149xPXGVKdXNTM2hL362TvDFUcPdgQ2dpWfSxyJzEF7hKM61a3LhrFPw3MruFk",
  "key15": "3Uu72R8m6uZ9Z6h9seFV9HQ8yRfzrCHihwZcysWhtE4AkCjpweCpoFi9Ztp86Ldn6pw6CjcH7gFSDHducknuSmXT",
  "key16": "4MEy5Lnv6m8VFCmyNUmHSU3BQ7fUbRwxpCR69DsSFMKEFLU2UdPwT5YTNaGduLFRxB523sNF49nQLwx9KY2Q1tvd",
  "key17": "27JjT9XcuCvtModhgkg4nMzQFZsTT3wR4CWQwtbWT1L7nQmWsZpdEUBhSEQEkzf129DkWPZQkVxWqEDeABodrEnm",
  "key18": "kx5ecZMhaZLDkyWoFFvrkz6hwn2fdMQvLdocHonaRGLntKFDcJ1DXk7ZQKVotFZYFcsJ1VFrRqbN4p17ZSjmRjz",
  "key19": "NXAytRAP1eHSNSP9yKhy2fBUTTqgWDu2Zfr7i2QoEwthraUxmY1kiRTqjc4HmvzFuJWAJfSQtAw3Vbux6pk4Kak",
  "key20": "aSRzeZVEQKMUK1h7bvXNxUDxkjadasF9SrYhfiW2jk9tLLEqhWjtALZvGF9eFV3Fvhg1mu9RMnRwGedsiSceo1v",
  "key21": "4nHnhNcYXr8y9R9kknGBcWP4AUR2Msq1jyGtu1ivDzr4yvagHqGvFjNAbyz52s6uusVvqzHng9xFB7ZwaZbsukAB",
  "key22": "5hhUZtMojLDHF4ruYvsfcKFR3SMtnBznuDQkEvhFJG6zJktZTs86wH97nEhUCW2qkSFU1Bt3R9ro67ZYircENiW2",
  "key23": "6YNXbmznFYGReApSsFoAngSDHT7xXYzQ1S49W754yoxtfPx4A2mSxKQwKd1TPphBXnXVxupNeLfo1gp5TwhPWvc",
  "key24": "4KTWH9EMqwCdSVfkKoQgHZ9LAhfKNhiQ3WkAY7bMxzwU1e5XyftpUi3U1EiqRRWu3QPpedUJ9dr3Pnf52YuQJaXF",
  "key25": "rGH1FtfUSnTVfdzkaZfw8mnvKgkcSR59UFoFMtdy2BThyuwKYLhuRKrAqcaZNUqdfhCkQwixzKcoCRttSfYNg1b",
  "key26": "58BfJAZRvE9Ysw6bnzoysJDFAN5nattBnBvxSbNuYLioFKyVezpz4k2t3npGHJmb6hHQAbaDtdZ3hEKUT43pWkdZ",
  "key27": "2f8554y5XBcGW1vbPYFWkR4pfZRKvHgYqqtuhHsaUHaAoijUfwTpMPn1W6yCgSEqtCLoeiG64F2SNWutoU2GQVFE",
  "key28": "2rschmYnDQczn4QVrnDYpXbQMHtkecBp3wT1tCQGDf5Vn7MosNr67W28bHBByWU4CfnqTEsT3JWikZtJLFuhtxN5",
  "key29": "3WnWxQJhtPwotV5MmesVeceaAHRLsj1enFTLp87kYDECukDgBbKjaRv5UHVF8Q9JhDLYrhTcszqwjxmJR6paqPTB",
  "key30": "22NkfskSBPqTRZzkHZSqHbRRBiDn57oanGL9RmKxW93XTCyDqJZRLWGk46XZTMMzj5CTuPek3SAcVN52sUUS918Z",
  "key31": "2DXxweWRNoV7kt6a1VCVDeRHxBt6TmGi2qVKZR83HC54XDiwgn5YDRE3rJonEqiJmWJ5WZmVK8dkheaSfp8JZiRQ",
  "key32": "3XbCrkJSb9R4PR97jPpJaF47B1E4cUp1uCii3ht7Wxx44ik78XWRnpzdNfpAJQmBdagg8fqEbdCNF8JoXa7NmtNW",
  "key33": "2qVm9senkzRhr6uMNtWrwFBsWLAG84yMUEE83bCDpWmJUeWCj2XVb21WDQFPuctdWCn4wAnoY3qNVNNsuMEfK5xe",
  "key34": "2qWZqFhSuphtc9GmLAGhVTwAfZYGwU2uC1UMmBCr2iyXcaqnLxy3F56DWzQZTSE3x94H3dG9o1kym5bSqaPKcpJB",
  "key35": "5B67oPY3TVseqhPSZbLDMSa2gcHcPdy7KVp8JdRYhYBn2xAw7rXxEzd4kBduTKd9qNjhyt8bKoYaMMY64WWhHuff",
  "key36": "2GwGuwUHdUqVur8Ave38RjNT46ZvKixBobUqXVkLzEA9VejAuv3kF5PehMthbazcaxKUfhyAwxAFmjEjwRUi8yQ3",
  "key37": "h5wHwndDsjUDxXK6CMRUY95fcqihZxbDzDbBaPY4JJY3T8u8KhW3mEkW9faKrGTjFwxTRHeMb1ec3RNC4DYkEmB",
  "key38": "dpS5YEM6mM1ggNUyDiqoGBtiQWJNqyNE3LsmHs1xg13Zi1cB3dThQt6ajEK4eSYeMBSVTQrnhKvojUU9HsuNEde",
  "key39": "3dGYSHcCHvVsNLJfHi2H7hWYGzD9h3LUPcRsdKq8cJj3V8KhxXDpaTLMwiDCT94iH6k8A3LY7sm4SuXpEihtXTmg",
  "key40": "5dSrCvfJTZGDojzgXoHxzz8u4THQjHA3XtiYGbxB8gMTGHCYTPRBECeJXcMys1L3nBE4n4Y2WyPy4igGKkYVUxBm",
  "key41": "pQQGNFyy9fZ48vBUzLhDyPiBQnNKZccdjReXN2YF7y6gVk3RvuRxxApsjBAK3r2Gqst1imT564986kpt53LAL4N",
  "key42": "5vCwTDbQ9jjyphaeWR6b3HXMckkfTrDR1VNPYjwDbBda2L7TJDfKbwQr47s6uCd1y9diHh4rNKSNTXKYNh2zwm2"
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
