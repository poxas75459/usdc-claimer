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
    "5abLJn8uNtfHi3QrWu2TmvqjTs3arTdF7rbdqD7FTKR7QbkxWhWAxy8qNRDLAXdRAofZ14ww3z5ii8rYRpSwbym5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33tjeidGzuLkus7gUC759xYc5goEfvHF6jJw4AZ556HkmpWYsz1whnCSb42EhWdwuP5YcXb1gepnhLvWsMfdRJT9",
  "key1": "tEn3Q8MdBfcfGMV5An5yD6KXD8Trj6TpP6PvQr3i7SCwymbxN5iCujFxmmtQAm6KKYqCzgk7U9GXYNoqfRttiJd",
  "key2": "2PDy847fZQin9joqZNtAyow3fvPv2dMDDYXFnHr8aeWrpUVqxiR3C2YX1ZJ5wGywuk6mEedzjJFiZnZMG5UpdE6r",
  "key3": "46UfdCzEDJLbi4ZapE7KJtScj5L6aGKXnCoRYeaSxkUknVMNDJtNVcAC4su5FMdvXRHi9Jk82VUYd86vY9iJWbtp",
  "key4": "4BYmdzXngpegz7LtoVnen34gpD2NxVTabcnNo5HrGNpokXfFko6awTzjHRSD9BjfsJAL37YPMcLMNBwTMxfHcQpQ",
  "key5": "4Tzd837SLscXcBc2YtZTWN2NtFwAiEcvZEFhERp9SqozAyzrXhA1jkffZznvQqo2zPVemqmqFP1UJPLe2rAfeHJn",
  "key6": "5UYBYTRGnGSkhoizS1wVG3Lnc3Tg3Z29v73wnGA8j1S5KjQndQCJ2mXBLsWFxyJN6WcRo3gmZw73hwkEjshmWoYB",
  "key7": "3B9A9LrvfXs1VWzPxGu7k8W1GQ2CXLF6jySGdTqBGnnj4ntE5KV7T5TYS2Ec6JCnGDqkQ5LZ17BxrXY8LmHU3kL5",
  "key8": "48kt3ibfcemUdi7ZLsGv9RAXDmTPvBVJMyR8SfeirxLjFVphEHxsB7UaRdeb5HEGnAhBfyY7GBAUp2UZHq4HbaXS",
  "key9": "NLMELgojKpWAEAS9TS6oTzvpdqCcqpJbi6e7rZv8i4SEkos7X6s5Q6vDvnHsHdBnsGdPCkZQkoWBLnKv4bvdPJn",
  "key10": "56WwtnyDpGaMHt1puRd8sJ9CQYKBKiThw9MpisQhfdewkfFBsDRq7yRfc2MgrxRW5kwe5WsY4xR5GqmKBh5eDRVf",
  "key11": "7RymkAZwazapEQA27gaVgERSd6mbtTzeyNrnvsM2HVYNumUkVSsHuGN4x8Jj1f4VJw6HQfcD2FGD9yAqt5tRhAG",
  "key12": "qodkaj1aPRr6J32rYEiPH3CtzmDSgUmNUs7832gagFU7mZUWpUGsSUTiY2dxaJ93g6KuMziLjJ3zmUFkipybahf",
  "key13": "4gbPdDentCqQqXkbqWsk4jZpc2M5sPg7RnEHstP7TAte5qN7RqStBRiVHWaZ34b6irgnQxCxBgVhVHPdrerwBN14",
  "key14": "1mpvMiZigXLhhZLwdNHmCWCDQ4VF9sxhHpb7sunxxTG3F9mAsesFf6amDj2Tb4CTsMTXA52CQt8e6WBgwRXqom1",
  "key15": "3gFPeDwX8mMTiHJBQU8doTvTzhPRJUmTyhTWGHaGWrC7ADfrg5CYwFcE6qMgbuqGRsNAc8dapYaAtULMEC6HtWYE",
  "key16": "2aD3xxp3G2zEJ3eRb9W2ioR61gKQaKv48mbDn5i3eV6FekZ8mRQjDGbrYz8zjtpLVq9MLPx27B5oHTYR7bL5TKSf",
  "key17": "t1mzvu64mef1qaQaWdroLQr6usbNixFZhuyq3EKimfKJMYgj3hF8sdydpcJYTWNWRoZ5JUcM5emPtGKxPqfVKtM",
  "key18": "2bZtFNmSM7vVrwaCos8wBTERu2AJwnBWPBHpSfCogKZVmnwREFLK7yMwKdh9Z4PNrJ2SRYqcsBEUDqrcKe11enk4",
  "key19": "31CXXpzKV7UcZpCuck5no2trZMkewVNUTQw1kFBPEMjezjMATgEkDHqC9TnJ7VDknQLgikhP98eMM3EFnzrQ4ueb",
  "key20": "5hMtFyEWgfcn4wgYCFTDFNroeStYiFWNgKAdpwc98xxBzAmmUtPAH8cvgtme7p1E6nEX4fw7ThJatAxU8msBybb7",
  "key21": "4PFFWkF2nBr9udt1DjDUVmJFKAASxxo3ZgZMZ77w6Po75Jq9x8P3hDSRNmHbQLMp1V14bHRDqUY2ViWEc8VUrPhf",
  "key22": "UQhEyLp7qMTJnMb2hYxfLG2oAEkVbe1juTgSiR5ivfxPGWpgAK4HyN14opd1KjHzARhKa9qnCCw1rhtZPiJRhoH",
  "key23": "3dM6d7GctQ7sVv5Wv3QxMxezbWB6BVNSZXaF6YWWTGzCYnxUgCUN25kt7mNeQ1CEj2w4mg7iSsDi8bxFCnj9knop",
  "key24": "3SRNdSx9vX9dZetq2oaA2PcHUqXDNXoAvX7ddmYutPTYtGvaVWQ5DDEZbyf6YNMyHsJBBX6VJdnXedmU96Jvtk8g",
  "key25": "2dPtejYayFriJEnMXawrY1veJV4uMppCw4kvvQPD1YaS4ywcqncvVg2Wy54ptJtjBKvcyv7aqgzA49YMrud3fQcP",
  "key26": "4WufAhjhw9YmpfQgKfzQAm1314Y2mmXionvWrLkP74v32SzcxtetH8toxaDjAqoHdpthsH9gDia2oyStmNRVqvHs",
  "key27": "2cNGrV4PnZcKYUmG9GFucc95cYGjmSLxoagKAa1MRznoY4nAPaHMhnYMBYTja7DuzZHk2JRDJFHR8KPtypvEH1DX",
  "key28": "4hf9ouZNy2RoaSVZUZAy1d5JoYsFuXcopjkoZMKwEn4HYHtdze8o482xRcyhvMhyMfGFS8FX7M8kVBZFVmD1ed5k",
  "key29": "3vd3famhCmig97SG2DE28r25efEHW77f53xqz71t6kGYcPnE3vGTKG8iMfNzpVM5HEwcPwCzYytryGie9rGFBWZB",
  "key30": "whvuFgz185qhsKgbhdWps4Rz7KhnAp5uSFTVTrpEmacEGefGvKwgdz2YxKQ4Uwr9PGQoWJbzgrUZSokdfJayX3f",
  "key31": "2U5G3xbusGdnnqsZvwqjBSUFfMDdkiemQ84VCRzXJsH1ZDbCT2NchZ8tvnAqKD7QYzQb1cna7WViw4zouukuWFW4",
  "key32": "34U6KZt2JXzyCrQBUDvWVrUZxwL4vMhDrv3sKWECEqCTAgsBf1w4DmUHWx8UkqGS9MJyEygTwSJrMSiTjk5UaUF7",
  "key33": "2zHwKmMEFjHuDarfYTYK49ka7ESqqRTc5ZVMm15g3SJSjuLhX1aoyPdWGqNwLs1we3jxFhzJgNZoNASPEfGWBX6K",
  "key34": "2oaCx4eTt1FpjDG5bqKscuT81xAWuB2XjdWniiDqMHfs5v9o72abN1o2CCPP9DiQR4Udwtx7cs5hUjXgKqDup69Z",
  "key35": "3isJyKAGWJASnjkPTetN5eRxbhC1gnEAiR4nBhCw5dhQ6zGoKWvi5LZFjtUVh4Mz2KKmC59xzerD3Xm7TWu3HfG8",
  "key36": "3CP11Q6YN1UDEbxwzbWxPeMe7NdtYED46xFJdREBJ1MEVJWPEPpkmDEnXNR4DP6PQy5P9Uo4yPHXytts3EBhJpXg",
  "key37": "5Dm5ygYMGr1DLgKjdQt3xiCkb6SrbawcoDiMquc6pPznQ5eRxis6hL4NpG6M69gk12rm3uyj6iJN2TkTJV9WGYV8",
  "key38": "4RHGMiPH82C9YGqbHtxBa1Xkyswjwo3L7KsxgtoSYgsii9Gka9dssjmDVWhNGte3tieszFVEcJoDBmPY71AvmbCH",
  "key39": "3Pse8GzwczhXq7S3vidnPHzqTDF5euBdASvn5jg93y7yZ6qoGsFM9vgCSUB6oUbY2KRrTGeDvinCkJeNPL8te5yv",
  "key40": "5HCRD3KfV2HyLYepnydjj56FJyMThoMVEaDvzuzWbqQsdav2k9HBNNLkKx6iHwmWGeTmAQNrZXbVA26ng1xF8J4t",
  "key41": "d3X4XWe1DhaFe8mgHSRpfYDMxnFbauRnKnAuaReNur9fCKJMLMS8kEy4vC5pyuhrQay4CYajtXTiKzin4FUUJhZ"
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
