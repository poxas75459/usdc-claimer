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
    "3RiZYZqDgDiiVYK9bwgNEvwouy7usAD8AbHX8Lf2P42TWLprG4bFy2qCYymFqSgDFSH2jAj4iPAufbeX2BCRHhWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxf7sA9yLWHxsdZ8qMpr265AUXCd8NNhjAKfqosQLWNpBMuH6pja7Nym8i7vUtgCkVDmSJm29phR5fyxoArfGky",
  "key1": "5uTDicT1ZUrJtkDuc8vthvMp6nq5FtFhmfGLzMZiRMrRgkKHSNJeUYPjQAXuC95GB4QQyZrCwYZEZSLT2X9P9LjW",
  "key2": "4ciSrBC9qr7q6tcR3f2ZB4nxBDopaksSxUS2SJmbDogA5d9waFSDFX5dbRmxXUep6jRAE4NkLTmUkkUi8vKboi1x",
  "key3": "4m97EqEdWnSvoM3xwCvcsyyNJXWLqMhk7oSUA6k1jsQdvEMMTxpy7mUbA9omayfoP7z37H2rAP3yTHkLkEaF8nSc",
  "key4": "3fDtfjmiW449gXJRF2H6ivpcyzsUnhAox41BUMSiU69wBdDQdzc4W1pCTEQNeW5ySqcJRmt5LLM54emLYz3pQsSP",
  "key5": "4CvS5DJW3YWRy1MzJiG1m7BNDwyjf8wk8XW4xRTzMtw2PhM9xSAv5XER3taMpNGX28Pc6dufcDwAaKA2iWurk3pH",
  "key6": "3uUAv3AtLrS1wAws2AeAGzrUN9kM5s2G3TnxU2rk6qeyho1xRFPveGJqCqbqKuHmzS2apsw2uVn4TLx1pDW72C1g",
  "key7": "EtDZAZYRKMu8WfA1hhaR4JRonN836HT1mRqLtZYcQD3TPJvFWEXTJSUUuEHJorgA5Wn2YKxgxPutdj63h9mf2Ty",
  "key8": "2u8CXm3s679gvQjuJKvA2j7GNG63sZvkGBJqW3LmHuutBwkf1VKW1MLn8Rd44KZFtz9EsVogMwR63cBY1VhnR4BE",
  "key9": "2FdSASXFyChTAbxc7DEjWZqhfAXQRggpSE9ibvjZNqZdFm7mYjinwjiwgoxGWFKJqaDx76Ua3z8Zh7173FcnjeWG",
  "key10": "3WaRksBXV8JsQACA2D9XhjngMFKH6FcMSfZx6Tj7XRyDegwmgqugjW88mdaarWGQzXF3iHDxFPJxdQCTYV5v2ZSf",
  "key11": "4Qsx317yZrYoiojAv9dRGFYkeatQBwR139ATKLQka2Qsm3hvxquun7WhvoeW7qRPSEiStmzMjRnGFkRU3uYqmWeo",
  "key12": "sygyvgoE5inmFN9rNBXSuYUtFcJhcL51aGGoiCRS2jyJ62gnMoypeSvA8KaaxaU7nvZfREZcw2zLiQ6uLNPA9Tr",
  "key13": "3CZX3yZ1Am6yeDRCodqHBEhWqG236RvznSWp68HRSRvbNqrRW33ugXpoL9QPaHssUmyaX4qSfwgBtym5WmLDgWDC",
  "key14": "29th2u6VwvQDGLWG4mxt52cKuMXuGcogHeTbcbiLd4RVhPwq8wijtoJgns8jL5Xkj1oMRi2xbQS8Wfd1Zeb1re8g",
  "key15": "4cSJa4N2gG8raxrMFbu3MWdgXKxvnuak5feC6xUdM2R8atgPX7dvYjSBEDtPaE1i6NXJCihwxk6CA6Uob3ZUsUw8",
  "key16": "5NZUXTVMG7zEwX94f7AKJ2pVZiVXN9CTihk6Yde4VAJgbH1j7N8T19pqA2rH53goM35r6zURMNVDuas1xwL4RD2J",
  "key17": "2cGEZDBexXZV1YiJCtprmj9Xc3MJ6qfVMU9zMoeAMPkcjYsB87ozLcZXWhuoFHdhSMRwz2eea6EP9nVnikNy3ddV",
  "key18": "kpejzDTkdihVmB6uGN5mJNLpVySt4cL56xHeL7tdWzsgievHAHyfaTSRbVMGvCugAGZucj5TnjCFodNLLguGSgz",
  "key19": "4DkR71fbfAkyuPmYnv1AR7JfMn7F4Z4X1ZQbssKRmzbRuBV7p7hHiztCKg1gr7Gbr1bfULcs4xV6exWWX39DpzGj",
  "key20": "3TTvZbQH26hwBWBvQ5eyrqanTUJhqRTLeeFbSknhyzVR9F61GWAnemJNvYL1VTRYBj6wTAXoPgpST6vuYZXWPaJ8",
  "key21": "3MJVse8ijFgeGBqDjpWU1CmujQqVptiRG6DVdZVYoBXVMPm39ZKQfqXtNRiPhn59CvtbE9wCRd3AqqN7AF6RFLmT",
  "key22": "2KDCKAUbL5pvQZW8nXUtALLbqXBGaPR4jbrvzDKyH5pzsoaJRnETTeWe1RjXE34TMPAB6ZBih3J3JUJp51DbbYMr",
  "key23": "NFSeuLj18WUnAzPuhQiLVuSvgv8VnNsheu1abpQDUQLG24Gv6e9weVsKDw2vHJHZejGWoi4VwEFAhAJgUgHQZ8a",
  "key24": "542rvVtK4Fhpm1fZNrjAan6cPc6fGsB74b7Zib3LsXYJg6SXdWoHRv8WPDMLqJVCG3YwHizL76No7YSaUYj961KD",
  "key25": "xB36WL8zDhh28jzeXRBavbuC6KDMzSUZDM2dJZPNSdGByS5np8mirdo79JMcJtcRKaifD9tGd4mgqniTBsX3JUy",
  "key26": "4VzgDsgWnZvGm1ca9nvgRcNiaE9391XgBU73Arc1SLd4AX84BGfJZ1AEm1eeG9yh5BtzNEBMCoCx2QdJ6jbujrqw",
  "key27": "Ds5Wq1AXjmcggNqccJMPGwTby9DAPkocMm9mwxGJhuGrdUxh2R1PxDGSqu9ADsVCTjc9RcLwcCg6BJn7kSTEZvu",
  "key28": "51mmpBiK9dHfuDYNnyJWjfkQcgQnLVjDLwuKMzukLNzbgT8UvMCE4rCHUPteZddsxS5sM6ZobTahmnghURoqd7ho",
  "key29": "2UqAXTC9v9L1S25bFrZ5szXFCduQV7hL1WiWxMKw3GYE4swTPRyC6XbW9EfWDRH9feFKuCuGaupF69R4fRN1zY4d",
  "key30": "2XZ4HrDeL4bxChZeM1cn26WMcXxrwmnY7pAGjmUdKkxeyBmR7LSGQYjsV5dJ8kv9MXntMxkJChGKXVTFtTqCUT6J",
  "key31": "47RFhRmymjfVZyoQ51QSdSB9GrLXKDi4jDMYZ6XYSh5sjzUGuwxwy6UGwL3mvNdyYWhTXm9WdyYhpuYxzCACi1um",
  "key32": "3eEaCFkVxZMgDcuY3pEJSqvd9kNthLsKshMsLDU1gjBs7cnSSk8ysbUtFrVjsykHt6VhVwefKJDfL4Zp6xnrMH9T",
  "key33": "2dcWLZEu2uxGpZbxMjG25tpXjkVADCnqdBjwt2dvipsMSUjY8GTCFssn8gbpVjbEsL4o3r7Eo76Q4sPLwFkwBczK",
  "key34": "34yAXGUuaLpLhVSXLCZNZ8h7XthZVjc3V6mwPVWH67bf4gCQG89DhJQk62xo8T6Yg5wmoq9XB6Ao81G8Ho2hbc17",
  "key35": "3gBm69JdnYtJsUB1SwVw3ok8A9XiaR3VpZJ5Nt5cGuGAf1iy2LajYDvoxiHjwVbuNfEeSxJo2dhebZMNpSztbpUr"
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
