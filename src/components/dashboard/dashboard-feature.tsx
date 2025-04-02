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
    "2vvJ1ojtEq9ZpUEPeVxJurhEddJzVh5LKVzgtzATBjSjmJGJP5UjpzN7Hc2MtbpjGAtGtngX39cT5YmDk747KpYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDvfBy5jXVvRW6CBrDBByfcSErZ15emBaRNfDvHMuo1p1UNyBwG7LfoH5kZXKascEY6rUCkxbweazSSciQT14a3",
  "key1": "5r34MeXn4iwzPsE9PY9GebxJtjhzfaduecaw4JNFVhi3S7ghCcjpQSgftkzhFJ89NnLJkowD3gYafNjW38C6X3yR",
  "key2": "57vCRKggQr8pnQEKWb7YABPuhhAa41mWVggf5FzSJ9mkRLoPHQNmvQzRMfQcpPKdwdQDz4aWNwYzwRV6Mq2Rk8Pu",
  "key3": "3nNhpua3JGYDYLMqKrDAKjobqHzTx53srBv3KFoAnZ63SpirBxn6vW2jwK3CYJbtLTkXYcV2p2dsX6tXmVMqk657",
  "key4": "2n65joLBKQowKrYb2jdDUDrk8AFxM5VCHS6Snb2udFYE2qmTkrHoaTx5tyhhtRNNdK3qpco9VnG94nSWovCrvyiP",
  "key5": "3fLF9Be2z5mVBZqBLJ5q8SgMemo6ZKySVsGNyPcCp4UBC1kjdSG3XSBU9y3oKeWs4LgnXg2sGgEz67zpg3fGCbCC",
  "key6": "5DgkKF8ZNddKpKK4nYTneFBSkLWmexGHuXeT2Cqf7bRcxxHmW2zacuqtgk7LPKA4RYdxAt45CQgKTUntKG6vWPyG",
  "key7": "3VFTHZ8aEbZoT5bcdkdPvFBih5muEZoHLKksn3Bwks6Hvwd6x6TqfSVSs83vWYB9fRJDu96fpdYmKuL9CywdANN8",
  "key8": "5GNm5Hn8BVo6yTSRhHNG7s2cEBDm5UM82kb2BQqpDU2JX5AgkdeN3NKbQLx7Bkr6P3vkrcfCouTV4zJPagC3JyHM",
  "key9": "5itKGfyScD6UfdehuXZzcnEcD5FrkKpCG2CjSGcs8XTXRwyve5URVQbcCkpgKZiFAWWj4Uxu4tkDR45QE3BSgnum",
  "key10": "2azJG45w8pqK4Hp4xAVVQNvbH5GJ5VmAKMMA7HBmCUrYek6wL41AsJEqKouTHoWxCsVTykRgTmkLeuieXkThU19G",
  "key11": "3FrWg7UiLPwGagcYYUQ3PqtzqJmYCmRbTTTJdwDoqFxc9Bkqoshv9p98iXwxBSu4Z2FouJ5V6UUZpLna86V8rMLR",
  "key12": "2MmeeoPyyKTJb8Uurp932yeMkJxCK7vvXav43t8qsmjW5N1LKaVHrUj4UWPnYaU3MKaEK7avWuySBekmTmXuosgx",
  "key13": "2qJkHHG9XTUnQ6A8o8g74vsZoztVRhCMNTX6WKw4DgsDCiwQSYerQ68Cwyh82RrqoP7ZbapGXPaCS8ZMSVXbKL2U",
  "key14": "3G6hutmZRtkyNDdwY6jgRfaNVfKDYFtZVpPVwqugXBDKTFLBdvE9zWGvfMrJD7MSWHk1paJtjbujKvijmhqvsrZi",
  "key15": "2i4KiVkZeuG8hWyBXZZMBQ9dszPTaJvz3HvWQnsD1NASMcMpNQCrGG5p72DLvN1HKsgJXK2fQuKR2PuDmVaWAa39",
  "key16": "5B4sqcS9bCNwQHKrgh6MEdguC239AP9LU1sJbRf35bMah9onVqZGGM6sYqLqGWemETcfkChnRtRrBPp5xSNdYLtu",
  "key17": "3brNXW6beTFwPedQ9aSWeB42Mxk8VLB4VhumGeTyxoxZK5WsWMNUAzkqHQxWzDsBhUZFGM6QFqXGtN7SaCowb9n8",
  "key18": "3R2EW1DUDiLpgp7dRSQStBadKH84c398Q9XtYB7UjNcx966iHKQqigpw2xnpnnapyxja6GuGGTTYCERV2STSXvAD",
  "key19": "rXcap6nW5ZY4wCNuumJkgGYA7XM3fJaTsU3PWQQj2DjrfR6GqGUVZLyQnoTvK8aDTxNh5874YijDF8w4AqGLg27",
  "key20": "2aJADhhKADMuLfVnDNPqVEdBpr52oF9u73NJ4fuMddE4cMybdFMSYBJRv25HUnYktzzmNYWHM89DzqtJPh2Xm42q",
  "key21": "xhTtdwHA9VngEGUKoPGFTnmkP5XcXWBQJb5s1vEkAdoH6uLTGydo8E4MEUttpMxK8qXqEFpsfXWqiLnnTQmHrkb",
  "key22": "5DmyyFGdCdFPDGssifYY19iDEtEgkjJRrtepyLDFnTBmgKRLFdfUEroKiLGS1F4ehi7ck9UwwokthqQtTz2K5dPu",
  "key23": "2SU1rekn1aDKJdQCH8c6jBdZVWecLVkhMeYTBVqYbUZWYUV6YkVwuaTof7pnRjqV5nLfKecfmzhBiBcRQhZY6LSM",
  "key24": "2m5B1a1oPKmbTkAE4kcoSERje26xfPNpQ2bbisXBngjdGDNWu79H8MDcUbXySKm391mGtmv8gL7Sd2Tektap5Tfn",
  "key25": "5VLUbhqaJYL4m9GSLQw2YNKWXACpiB2wBxpkF1UUDebwrvssmUk8qcXcPbx2kGYVSK8Cz4veg8oV9FrUrJEUxxuk",
  "key26": "2TsvYhW84ZG71WobKrhSF7YxNfPpi5PEqaYqrcPa89ppe52977ki4nkzphxitJTRVxyu87b8r2WMNjUeCGQpvaME",
  "key27": "94QMSCsaQJjgYjHHpbJw9u5M4rWnmqBze4a1xqQ33yVFjp4QWRekAp6BZDr7aCa9uu72Pe3z9QChGeS5WzHuYsC"
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
