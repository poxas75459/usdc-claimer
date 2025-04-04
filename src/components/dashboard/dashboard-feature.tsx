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
    "2n79PkC8QQ3R6YoMPsDY6hcDGo1aBD4n8ypADtwGiUs3ffCWtbdHFvYYkCRuJ5fiSmBG2vSbNH4fCL3R8f8MGzTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g94EeESDUXGbG7QKXoDsomvjRHW5mP5MQ92QFhK32pTzpbSbFSh6FvSu9upaZy9cq2P7nm9gieVCb3amWzPLzkU",
  "key1": "4GvRXu16D2nLcgbEC3GGSUsfvGJBkKYTLZh7AeFtNTy99n817WtQFkd77bsLYzf4DNctAJcTxsLm78PQgC81Rcj3",
  "key2": "3Kz1Ht3xPiZX7JsmBKZ2pZbw5HkUHjgDDQXh47PYKg47TNvtaKvCzfs7XRLNLxvdrF8ht7QumBZZW45EniETigRd",
  "key3": "48TARrmpHBB2AnvWMQ6TJGtp19w1Hjyfbu6tGarrMteoS6bZjqPopwM48RBFehaC6FF8AWBepHMGqiN4BicP84RP",
  "key4": "TD5M4jKzwUd5kXMrqncAUGaWy2qCAEMiWuBTakp6y1A68CcqAdoVdgzj4o98PgTvwsFS98Z43vsNsddJ4QieqmZ",
  "key5": "TUHNaBcVHRwzzh1recEidVGPEYiouVRohKUxKvnWhtigYPbdMnzzAnZANBvuoQpqrpkZJ1JpsbvBqBNQRj1sas3",
  "key6": "5MkokE7YBjAcDbnN8CtebyXTMfB46uKw4fTU18SrBWeHvqnXsQkhj8vHCgiGi5ouXbgXvXGsXSQFhSwBiDy9PAKP",
  "key7": "5QRaWKewkA4XTr2EeGPhGn2Tu6x4ejmukmfR47u6bGNctR918VA42gMaLGAZtpcUXjakpLpHvskKb59raQBnX2BG",
  "key8": "3mvMh1FdBCFo5tbPQk2zTUWU3T8aTmyg9rAMp9Z3JQKTsRcvPKaaLPC1H1aB3goP3KM9GVRgMqFWvRhwtRrG3iZr",
  "key9": "271dCY3VAwNrrbNGeKeDFLiRjMweMfdgQ62rYPzciVZvDPx9VBc3Z1i8zvp8fk24dvdNE65o7ZYtGfWbTPCr5Mwz",
  "key10": "663fgo1wUBbH6j6iHJrTNEHLjSdMqRL1MEYUKtQzGuuZSuZMvjX933Tdk2NqgqMEcgBWV28E7ow6pJv31A1fBubq",
  "key11": "5VuUo6KBzGPvgBBoLCCQWg3MpTpjoct38wu9TA4jsLyiVAyhwWViw384TbN9RJkNcVFL6vy9RcsY5guiQ5ajEQov",
  "key12": "5UUJLfxKaC9Ko4YUvn6jVK98YLRjd1fFdNaWwLYFTEC4cEZJyssdApKYFnvwA6muCY2u8cm8JvzbAQQ5zq1g9Uo8",
  "key13": "ghn7K9raJQUdDMenL3VrJ3hNBxpfFXWyBP2dG7kDerYhyNTHG5QsiK5Y6HrckY9nspr5f3yuSwLFjazEYtKpRF3",
  "key14": "5SF2YcqSkRozADD82z4Hskcah6fwKKGWDHeRYCKmy8ybAkbjxunijBE4EDaiUYyRNzZBEtfiPofYBQLrxfBo8beQ",
  "key15": "3KDcdiMe5dnx3N7o3V4MRdFtAQvZankyay6QRYHBeBJbAn7GHMrnbf5CD6gm7mSH6Q1kkahtcQv4PHUFakbZ6bpA",
  "key16": "5LK8DYTiGTYuhUx5e1AmpAA9ajLqaJwnCHu1ybQyU1NAKg8jdqnbYfmsPmf54DgagJsApkU41EhhYn1ZeeCHVh5E",
  "key17": "2zJnNMUwjuBLLD9DieUA4koVpi46vPANFgThgTsrzRBtDAwBRDJxdALVxKzN1tiutSNLWyJwttSwU8gbYYHA3jD6",
  "key18": "5dv5cKW4dBBgY3ziCKrfqxpyqfn3WxKHcSZnqiZtfeHKHcP6wVVnyYDgfkXTLNRSLWSMCxgyRS23bowN2UF5q9NE",
  "key19": "5PKSwbHiFQcL3vac66QGTVeeLS5LJ6Zo1evD11wh6dqDA4Je6xxnyRFChW55zBtkuH9ZdHSqsjg1j9vzzFcts5fg",
  "key20": "2v15Bjk5V5uV2Ybn1k8K1cUVAfjdXoYbM5XUJNQqLPbRVTy1zTH8PwfeRxkJ2EzaKWWNdMAfyh98oXndJ2jYKbuk",
  "key21": "4tny4PgSGUTSEJhSzcFFsndXonGemHcpmEUQRtY5QNiCP6VUg5ygWfG5h3VvxXM4xDxf6LW7a3ptuh8xwiZD8QMo",
  "key22": "5zpPzuDiCy8v6PdJbV29VTGWEpjDccFMufpLBkrs7qiBZN8stB1ghwnV27sFG8Rjqy4vGVDZxFSLzbnHfYwvLE92",
  "key23": "52gy7u3BStiJZyKpGAPH3puCZx7cEbsmrHtB2kuaFSsXge56pLTzqdvMbzhenkXnLjV8UZRBuKhsvT1Ab9ctB6X1",
  "key24": "2o23AqWfKYDNVEUbdvDH9Wq5MVDoCFTXswtJMcKhTxjpsYs7ee1C6PJcRqK7GM2UNgffHcRoFkzB6oiJtQGsGdKf",
  "key25": "2X6vgoywx4UJSCGuB74DWmWodTcdxiSguJJNSfekyEXCsRxVbfE3yvuznWzmLgaZBpdNqJLcdn5t7YsHFiJXAw2B",
  "key26": "5hX9FYGz7UK3nbMGZ2dGPjZS9p4dVQ1BpvgP2Z9nYdgRUPRZqSEChS5WQTtnCutBehrXertzi69m9QZ1ePBsaGcj",
  "key27": "UcVVGDYZPq5UgjH2RCKzw4GrYszHiGPEsdxNXDLpwoakznGZgPwpbWXke36KN6q6sg5prwUwRD46rGWy4EYLMPS",
  "key28": "3cYkFzrR2YvsAjvVELeQM4Jc6TFy8X6oopzWFX15dbmmTT31kJtDuBpwFcazc3e3hMPnKtkEcgBahgkXqJDoiZQQ",
  "key29": "4eGAnD7CdNHxMS8rYDWrZvaMpTE3tq379BoYUR218pgwRWaB6whfixdnY1cMHdJPEQYArvCDesAUNpjez1DKbnW5"
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
