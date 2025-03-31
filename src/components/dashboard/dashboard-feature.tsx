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
    "2CUdhdAgb612mSfVVwmWipubWwoaS8nwjEnNBsNd5imSXekFwPedNnzxwgnk1rqovhh5xALTUJ92a9VZzT2iXps8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLMnaQrj6r3ctFRrmt3eSfJtx48e22eDcbc1iEpoiiWWpDfzx7PapGYBRA3E9vUM6inGevEF3LKJEXv9ufe5t7P",
  "key1": "iEgnxKfNWgYnH1ZMVdjck453FiaGpJsSuDzUWqqCKSxxeA5ccLkf1mSHiZUhxBS1hPS4Jor32s9wiQGYCfZ6buZ",
  "key2": "2upsD1Gy53J5sgkocuttv3DhaQixc86mUJCCBNk5ukBgTSALvBJCRkjWFhseaWp1WCdhPZMiyJZs9vHhRcUNGqdk",
  "key3": "2D27z5UV3SYA7YZC8C3Yo1kwYwRXBEyKKiAz6YH4qp1Pe1Yxn8mfaLyqATYtiVV1Q1MHinGC4s6UihBSjZjbguyH",
  "key4": "25aDQAMeP1ey21sSPi6DofKDeUQaJVviuAoNH2ztmrLXJMR4cViWBL6hVZY8evNFYauoJAyuzFi1GicPeGU9temx",
  "key5": "4UJJNVGu6beuncj71MuJMBUeusAFVBp23G5uvueR6AuNsZSdtxEQMB2mfeWcxLpJtRPJGe5jtwwCeNJxzza9rFqG",
  "key6": "5UxSfJ2ghv3WRGgN3dxuSmpEcRPqszjCVDURju2goEaopCbDVtpbeF7g8VsCVuRYewdb7hfiPtFcLQPNX4AZZ8FK",
  "key7": "5ocgozpa8wNG4M6magRfpzEfuBr7AVifs2zECYeLzcFMjShsbDxC1nKnhKdyhFUv48jHzdJEV21PYkedFWFRnu4h",
  "key8": "2TeGmxFHtjXUuVXE4wWX63BuudGFeZkuLuoaqRxTZRWmVaScZ2soEznqzMi5o7nmtcsEYC4G2fqtHL2sHDisSMfJ",
  "key9": "5JWrDj5pXxQNEmjacnhBHG5KW371F9w1nYQPeSnjmoXwSdAMGDevxY5G6kem3kaptDdqEfPS54BV5pT7YBMpf2tz",
  "key10": "3m2GahzJqQaZnvKE1ofBHMJP3mXS9W1Yb8uqTUTnjiPBYfnYqwQAZhdPyUEJ8Hy5ybCLHhnaKXoCg2NdjC7HeMXs",
  "key11": "5dpQumKktADxENnrYDGRm1iajyUcHSYnf3ck9pLhFkgFpSxVdz6qJhX2yNVKuJXZDhxiXkUsxB2qcWMrW6CG7cun",
  "key12": "39ci81waATY1yF9LWSZrAyF9vMnRLg9YkRz27NR7ffg8PxnpaaQpDGU8UC9XGpWQSxXZZ9HNUkUH1frRyKgPBDP1",
  "key13": "2XsumiMi9kPAfGiVMVtzpc4ULVWmTZ3Bc4GgKCpYY6xRZiefn38jkaDreGfVDnkbFSLGNKsbNWBiJZSAGQqse8tQ",
  "key14": "2RcmtSTzgAHVXHf2Atd7NrcfBd9Qy8v7eYr73ZKXbpYV9v34t3ChxJFmsBkBV92C7PSg7cZaA3aMJ9PvCakJBqi4",
  "key15": "pjuW26fLhrvKfhYHdSyBzVY42WBno4wk2T2wP2buHZVAyMUi57XBnnm2qE5d1e2rCSNyFC44GT3gYTP4KqqNmrm",
  "key16": "BSgJhCHeqbgvPGucd1Zo6BVzoAwuQeUQCM3MrDfW5d7f5mVZHzwsBVR497pqxQMcEquTdynRbWVxJd468tKQeGA",
  "key17": "3FjqFLXUAB8rVzM2LFmtmR9CADQbjjmaMr9We96rAL4JQpufkGunBPL7sHx5VYkPECxZhB2ewxahrS7tb7ihm2G",
  "key18": "3YhL452ymGmhXay57CVE2PyN57yJo32aj1YyfmiGk2Um6xR4mx16hHfs3PQ39ek5P9sHeHLn75g9hBnEuQx1eDZn",
  "key19": "3EgwL9bi5iNKDHaAXRgX6WYBr4KgbaAHjhbhyH1S8evkq6yuqjLpcq3XCib5nZ4K3Qxdga2Q636SZUKrYWEvsk6z",
  "key20": "UuyxehaeweUjEPR6HnQdVh2pEVfYYx1eyEfXrndK6R4TyEss9qXhWsN6wX8HxdpwfbFarjfnM1yQhCywaJsRWR8",
  "key21": "2Ea6eNVjaAcXtRCsBya7oAxRxAaygiU2Lmk89zReqFQhx9Q3vVDWD67yFuSjcptA91s2V7LzHBRrZvcb3mctVkpr",
  "key22": "2DLFEXyszx5EsTAEXALFYdebKo7opEZ3LexWEVTuvrXyaPhDAFTGYHsZBe34aQmLn4pxh13gpngxTpYPw5m1BDny",
  "key23": "3van2cTLCztrsXu6H7iBLS4bDXC33yZQ9wD4qBsxfbVELbtbUNNvxWUrUxTQ9uVN62diMwB1bPcYVTA8CYx4waBZ",
  "key24": "2AeErXSu6bXYj52rerL1vwHGnmJAgA2cgsoGRrMYT84Kk33d5HGnynkHJo97aCM1JQYxZKtco14JPyQAKeWEhVET"
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
