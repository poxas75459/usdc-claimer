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
    "5i48yhZMqFA9En9nqy2KevRqHrVhfN8g4CYo2AVaL4xKdreuF5p2T3cNAiuoPPE6hGyUQWdTQUsByyTpw5kseRpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58NawjDxUgMqwt74cuGL7Di8KCh5F9vvGDDK3h1uQ3GzMf1sjYxyoyBJD31vpT8RRHzXw2TNLixkT9FvxtB7TpCz",
  "key1": "44vjuxXB2XBHzv7WADKaRg5ZLvmVEWDhm8vQH9k6U91UXA16FLeoqjxZtJ2t1eDkZ7vWQtVZt4vGKWWc3xJNeTrt",
  "key2": "59EFxLch9zPXqUE8sSEmAdpFzuFKkZZsHJuL2gKkkXpD57gRhCDJoyEMpjGA2mskhXcxG7GuT5Bo3xjRaan8ZDFz",
  "key3": "3i6htbtGBsgUL95X5TALpVFfm2uHn1KmJUnZTDMSXktvRPKwUhLm6bQ5jzdaZkgDikvv2wYvS9zDVDDTmavRqq4h",
  "key4": "5xDk6jQnQHrhNhkbNtUwaCib65jcckYAcjJoTQ6LLxfjb1oz5Uan3zoeLNXVfAukEK2BwSbQArPqnEbx7wkLAWyk",
  "key5": "3EJQMNuWG2R6Fo2z4vdWqVhdu3C1Y7LyBMtJytbSTRFiERcNhSPLa93iz2F346b9qAaFDen7qL8Ujg5mTxr6Cqg4",
  "key6": "5EJsTRf14x6FJndCCrPtGad3GmekBfbbz8hoVK5rkbbP18uyUypxVzwTrZXtyQvx73DTb19F2Z6iXnz2o9ysPWaD",
  "key7": "57ukj4GDbYWYbCjd33hUTc8Km2WFvBV4djEgeYhnyueEeuR9ZWTUXmLV7RWPqPoXcCr5gBL7LZm9ysAgbFpoHsLi",
  "key8": "4NYQjFtmeXeLbBDa2XbMaYwQ3RGKDd7uMuxmXhueNwWyXxBJjxuSmP3wMz28Ms2Lp6qAZWhjnkL4SVwhL83zHQrd",
  "key9": "cUgHNZYWzRNcFfVLSBaK8bdBnyQUrrVKi4Tj1UxkmfV5KCm8ZqXfnqTW2LU6vHr3BE9YTGdRmJNzAi9mQ8z6vrV",
  "key10": "5Ac4AqnF8DaVh47EvETCDbrwieJCno2if1oikgmhNsskkjKmEo2ZZnFck7WJ4BHVM2GEjMZcbC4MMbZXsgFsJb19",
  "key11": "2B8XXPpS1iZsJ5wAQRKjXkAd91J2nK3mt3kh8YG7tRCftDw7JHY9nGRLMC5tWageWGpy1jd1PPw6F6ZQKK1kj8m1",
  "key12": "U2V9B1D6GsX62kXkyxRmKhvmWvEASYK9wZogW3piVve2gi9F54V2xdENVLQyufHUHVjUPZGR1orvtao3WLjbjhz",
  "key13": "4qDDKeqYwxf55rRvcQHLQx7oJQSSRMRE6mh4q7yCkiBk8iq8rmTEaESFhq8frSssKabDGsokW6XnpVeTQbJAnCKb",
  "key14": "34J9rRprSjbTUWEb2wdo2nmPiukjpu1HKL8ZLVU6RtbR4CsYbTH3pypYLuVKUiMtwmyjwcvbWmSb2wg46xQMjxYJ",
  "key15": "5w424h5XYfgWsD4Pxi3g6p7aUKDdTepTvC4L2NEBDg7zNXpgPC2AxnbjgDFZ3guzrrfz9hmZZH6mYTvuzopz6Pjn",
  "key16": "3SJj2AEAM5kXBL4H5ifn8MRA1ExCykdKVTzinuKbcPfYvTtewwN2S3G4hiKR4xrDn5maaBFfuzqqkRetuVnmXkjA",
  "key17": "UPwmZ6Z2e2ZPKZhRqeJfzerb5XfStywCUKaLgfdX7c65rjSWmJvpWPiGTxBvQ6Y9aKfsYzFS7kZ6Cd1uPRo3WFu",
  "key18": "3vS4amHtEdqkNgk8LjqCuv3WDXEz9YwGMhQtuv6cA3DzSGbF1fkUXwFnfCyjaE7pCQt7Hr2grdgfLRvQoDnK31r5",
  "key19": "59BaR7Mcep1BSYEoFb1BX9qcd5wcr1CryFfd4W3QEkzjsCzy8GpG1RpnLf6ScQVYSd7Wjytkrp23BFMRZGrKy534",
  "key20": "MEYS6QJdzt3K2umhoamX7kiUvYeRQrxh4TnvEFuEw76rhN9196yM8REKtHu3yDsVio525NE9purBv6VVeJe5wr8",
  "key21": "4D5JF7zK9LSfTNNYK3mcrBiB4E1FPPNddyTGQeAqhxfDCDZik2Goj5563Q2MfNsYdsykyURe4NzeAVMJmcsK4qEu",
  "key22": "2DAPz6MraUdvctrPgUmknmEXB3AkBJAfMHxDpwdDUCbqWcz64BQokKE3YmsNy5miWudAdbknk9TybQJ3yB29T73Q",
  "key23": "3H866Fy1SL11W3ojQa8S1ZezMDeqbXEpoM1JCosn3GNQEEXUPoaGWvp9t8QEANdWS9721hDFD5eTwRqdimo6j7eD",
  "key24": "5EKzdCTxcf6iTbFYK9SdFXu57woa3Nik5KoaFBU2mhJbtPTNiCNn2KZbHnTMJtLj6ara6qcvAMBTqG1cxteT697g",
  "key25": "2ZyAdCLbC4bnCsghph33fxYCzuXeRCPGLb4oBtfe56UteGrSavw5KWyNibmgfc9kpZFP5PfpXTw75WwYJMqE6SRE",
  "key26": "58tPVC6zyLQzv3CXk7pyfJbmuSex6kQ5hzTgqeww76cQHm1ALrXQHe6HJixrutfKaaPgLe4DqTczphDpVYhoZCFt"
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
