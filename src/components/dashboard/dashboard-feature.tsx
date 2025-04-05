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
    "2W6c2fywTw9W2wrByTk26t2iHHMyCWrTL17QbVHRv88DH3cfhsDZEPSJQXFgDA6dzXE3tcsqo4FBM3ifvTW3TUA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avNsfiTaknqfB7VLnj5MkLzsmK9nTaNwUaw7CheWUCiVE6sc9Qst2g2XjUs5nomMzudhs88526aUEH32ayRsgcq",
  "key1": "JRYu2HTMqDozzVL2ubTRbKgXpF16VAxZDuY9k89i4cZam9xg5YT4jVE7uBEsqHKpp4GegkFuUvSdGrMs54bpt7w",
  "key2": "2jELYR6MVp1oUJFu45LBS2dG3ai1rAxETuPD5MGUQSMcfW4iVP3CV9ATLZfteX3f3TFDXqrgFLkfSLsDhWS91nPA",
  "key3": "4tTrEFDJUgNyKUwYgZf8SxDdZCpAj6GWwhkrQVSVUGVXdewptw8WZYdNHLcuC8A3V4pYdwmgvvxwWoA8QHzKtyJh",
  "key4": "5HfxywMYb6ZKXbeqmJ4toip6ZrRLpHt7W3iDaS7SAsFw3fJVhEU4V19QNC7NypRjyVTsxwJhnCJ1WujAqKEo4MPN",
  "key5": "59Vt5GSMxCw5oSFK8s1aK4JNFXiG5GdkUdugV9sgkowui8fu37Z2RfzfoyBpeoZbkxcUUx4PnkAdbGQqrD2BY9sx",
  "key6": "5CKLwUFZDqjxC3fEfQGRXoxpc7b5JC7dn4VJ6km8FXMvUi8AAiiSJHdfhFPZeGo17QgH7fzdLY3UY85eCPCKs1bp",
  "key7": "2sYcAyTenThsnRsfLCofzdkAvADWRpc8LptmEMbWfBM82jAjuvUAt8wqdj688L2iHB1ybrEuCfpJcp7rTMbGs2rn",
  "key8": "4WXA5A3rukbFwTytC6YV6RRL8oFxHpSDM3X74rFVtudCzB3y1WKDuZQ2C94HVriXD8XNMKe4GWF5vFZxdFC6kR7v",
  "key9": "26hQSZxtoCSNK9jQukrdAerrHPFtZ59sPxUab3VLMeKTbffQKFZaJ3BK6u3Lt4YXfgSr9WWeFwLKaXqGdSYgQ9wG",
  "key10": "57FAqRVPB82B3SLtqGgHnA24ttJgxqifGUA4zK6mZesixD775gyzN2XHAwjUTXCQecnG2c55hB7dHHGPz4YV9snw",
  "key11": "4PhhSDWGiEiPoHnFGZaBqtFSDdgUU517r7f1EVsdJq1r9SxhWja9p3kq8V9KRX8oVG5cJKzDZap6cch2NPXk9X8A",
  "key12": "3Ak8XvE67dScPDVFzRYNatmGwfresXpZ2z9Cd76DjH5MyhjKNyLRpHrMjS4w4j3U9Uby1DgdbxFFQpEe57DpbTaB",
  "key13": "3xd6wSgvHEvUvDia8zzkCNhBARiNXaFJ4n1mBErq9vTdS49AiguxXoFsS5qNFxfx3eCBWYrRbL9hbWttdrk7kET7",
  "key14": "3tbVngN73uxwXBMs9E4MdUZnMG38VXgtUnuZ4SofvT4JPxf5fYKY2hiywoTcVuURPHoFdK3cpnyqQAk8m7p5EWe3",
  "key15": "4hBueFSZ5CFxR7cLHomCTyYUttsDtJSkghk8t2cQjZyD2T6cogaBX4uvNREeZgyGHZV4B2vUkrHwpwinDAEFFBEe",
  "key16": "2QX4NZrKJ4qR94bsfB4j1xkiZTp939JScF78TNA2nNMfTQoJzyFkQkcSkGsRJyxEzTTTy49tHw2aEADcqzUva1e2",
  "key17": "37veHzLfSZU1Vma1byMcYFyxc2kmxMYZqn7Dpm64bNFXhyEfFq9zimb5MLeRvSFFANowAiZcgr441wfG4PXc3nKV",
  "key18": "6658PZ1MvPAqd5t84tu7Au4gKVXn8XvXCvhbvxz1zxENWTPfbKKMjHWj53fN48fTE4pYyTgmtHBcKW5MFJPVeYrj",
  "key19": "Z2qraoCeD6zqaGZxUSRRkgaxs7HxEtpE48UK8kDX8MN2BotwuDWMFe2TpE5D2GD6gbehxZt323bd8dWsqqCKt9k",
  "key20": "4Gj1bjmgdyiReRvdUCexFZHkWhXLzzJNG5cVwpRxMKPnM2m5mVExDy9E4oXdPouM4M3A1UnY8dybavu88dQaccoB",
  "key21": "T7YycBrfZ9ELzDk6uAGCetKD5TkD7FAGt5tWdMzAwM78nQKzcDMW9f1Vty6pYjHqwFS9SJELLipZNqcmyfERGr7",
  "key22": "2fMzK736qC6vy8d9V9sd4ZbVZQLr3nkwTN9uoij2ZmScQcAhQKbutp2VMRmxSSVLE6y2bnfBKaK8ooa6MaUJFr8R",
  "key23": "3GDS4tyUVMZBKT3enRNxGKQkfULPCicUq7bWLgV1WvgpXcFb1CYyws3uUiTbTMm9grYiEU6r1aVyrdBnTpojnUYv",
  "key24": "pbEjUbewUEgBJDNrA9P5QSFnSaCCR7FrLpR4N1MaD63DG6mMHDQf4Wbs3CbQxdpoDXBz83xXoyDDZ4fbWb6tBVC",
  "key25": "55EZ6G7EXyXcUjrgpdFAfaiWDUaqDLkZsmzRTqfbew7rHq1RHUe2g2T9ttB5tGCXvJWXu48y8RUCnfdwXyApa4Rc",
  "key26": "4EmXzMT4baXUM4GF1cwNJnYuvqq7yMajr73FnmSYE727ArA73y4aLg2AqxdktLEPcRWDuaRonbUpAxd831fuZ1GS",
  "key27": "41Q59pZpX3WmuGSkCMyuLp7cuuQcuWWq5xRK5y8LJEFfZCYesULJFakaA2RFCWzhSA6ekVEgcTLEdzmN9e2j46WW",
  "key28": "znGv1KFxSDWDwCq9tDAQb1PsnhR8bWhSBSBUnxrvG9L1gp7MxZh2nHcVFBJV4dh5KM6hLtAEtunF9wHtzKKZttB"
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
