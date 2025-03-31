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
    "5nCxuM25VdPXJv53X6HBtjVZoviPtYSHhKdAYBWYPTyZtHau9njZGVKZaEPhWZDYkKALDjrjm1PqKSgyqgT4cQyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJsKEybRtcs8ozcEDhFn7UQkoMq9vMH6kVrxHHNDvquWjvAmtqy4JDsoCDCbuZJSZZn6zeiZiAPXn1g1oZVqJ9v",
  "key1": "2QqB6wYVcSBUg7KHqgyn1YRYdrPSQwK1kmC9jLeqiRA6MqdCMNiQ6M3aRb43YBzzJ2PaQnBRLRbPiUF8xUYgcDLc",
  "key2": "1Lcv6e32V1CTxTxZ5pJDk4azDTZx84EP5h3uW5iBFuf3Cfgy5F34565VTjYqNyscAQz8Aeg2T91ehNxUcXHPyhm",
  "key3": "mtQZ3SPb6ptGHxwhgs2QYbqe8jSLE18o2xEJTmM8GYVGRyoEnP58e2KVZiVatYVTmXimMp9HfSzRaAZFyEtyNWp",
  "key4": "61Z8zfKMrevPGuiiw6CMifMt3n97A1whqfR26P2z86j84CeqxJ5oCDNZ8R6iq3SL7KD5jCHTaAQsNebc57mPeVy8",
  "key5": "4acxQy5TTDG1Ww89hCG5MBUXzrwjL56hMeE2dNquhioSs1cvPiv28oGeBs1Noi8FboM5F6qV4bUc1h7AvhciFx5Y",
  "key6": "3Lqudmcps1MgC1BuwcnPSCLgjei49mpkznD6FTsFSJrjDu7ShkSvu1sNU6Nont7oovJud9qg5vnUVCgzpFqogkt5",
  "key7": "3tZfzfvDWYUYnZv4AksjdQyD22F1uEqaAp5a9YxcEfnDxNw5GbwxpAkyv9Chd8w2rpLfh2Uk8U1cFGVzVpQcLaUe",
  "key8": "5fW7VwpdduRF1zcrYnept7bRLA68RNV1a9eFzHAQ5J7QN57YR7wNTaDDcfaCFCyBjFrLuyHuKzBdoBx5GnKEgnEt",
  "key9": "4ty9G1MSfDB4gzcXPHuvqHpRVMpfSFmCenPEFRqB2s9JDpBJoKxDMGtn9r5FfD39Hr7ZCH5DVh8bzsE8KWRWJ13e",
  "key10": "bNd8ctvg6b1dd4rReEYVcDZTo6wnKWFJhhhsPngj5Us6Akw969n99WN3bAZCxYtPUghwd94waG1fbj211Bhksjo",
  "key11": "5xSKkt2CxYQxnnRzqVpAj9m2MdQgqCj7sMUxF3tV7WTCQzjGK6ztZD2YFwHHsiXJJuXuPowudi6nqKZ9WmAwq46g",
  "key12": "2zZxuH5ALXWosVvBGBokHDxYDSXeuP7h2D7Ydf22MuPVpoKTD6uzUhgZuqzxQkLUhBTQWPzEPGaX8j7eKANTgrAn",
  "key13": "5g9hEcbMCSjCbRkmv2UiAGFDSSwMPMttJ8MZVq6FTd8z2fTApsrkXdgkv7zn6s6FuPbSPAoxX94nUStkrYBDtGXe",
  "key14": "5sSQR16spMTiXcfUzBEkuZDfmsnVoUtQ2KMJtfhdiVw1qGr3RPUbaHhrRwCkoST2BpsKqZKuxoXCgsddthzGKbBP",
  "key15": "4xrKrgVosposkkGzuNFUBSZA7QJwFxnDLbuDoFTp1eXsz7EroSEkxfHEZDXdnwDQSJ22NP4AXbLAm3s68GFfJqsm",
  "key16": "kZ52hiXTf7DfhYhfwknKzdmz4NtoADkfmLCmY9Zr9oQMhDeYYX45ePS6gVDZAzukJR1EW8TNDyNucnCfdZaX5SX",
  "key17": "2vnCshuwRjYF4Rp178dvoRkNawtGvoBQtqcYgpPsGZfZyx272S8hVDLSx9x4P5ftQwPbjBwcDcYhPuLaNkySncEp",
  "key18": "5YXSWdgArkfAXxwRibbssDfLBQoQFvjyxRkehrTg9tAjB3uw7ffqPtosRd3q7Cg1iVcqiCn3nY6kem5anrifUBmm",
  "key19": "64uaxgxCvh4hc1pJ8GHSuvcDhg2Lp1BaoPu99NrpoTeKqzECVHPVoQzaN3za8BUn1U4rjvr5DfzWtnPfkKfN7YJL",
  "key20": "5qVb2fBKAg261vuZHysqxJB7oxgqMZdpDUQojQjMkrvKLg9aEjbSuJ3x8mFZE5Ct2wMqA3B9Lr8dvAqEJKfuKwXL",
  "key21": "3KjCvRB7TZPHDNUThkoczhcfjsE6CxpuBWoqz7heoU4skByByAYESsk5FeqK6tAYCpdEmV9qogswwtKHEYUGsTer",
  "key22": "59gKfJ2GWWEfUbf99nU5ghkhLvEMkvXwQAZ8aHsrQ4jCTCWyhozURA4y5JbasdZLuwziQ1syjqeUVzZa275Bd8wb",
  "key23": "3ttcYiCEm6UJLfztTmnxv3kmqAxd7r5X1XTJdHHF6W9HTZFfQM6JXx4oLu4vBJWzpEVuob7GdHKAkZ9ru662KceP",
  "key24": "5NiRPBYaGq7gZy1AhFLeoJ2fEqcMcpx9Vn5CQmawrrTR176PXt68qseWTw513mWQs3xBzLfLsDUs6bh8jdU4SwMh"
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
