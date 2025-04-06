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
    "NuckNc8viFMzYm9FTrHdp2vcuVZsSz717N1dGNhm6maSix4niXrBJRGFMZgtrkGqHWXq9nWTTCNgBLqM2cU8LEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cXPqbGrmZTVADD5sLDJhKHevZH7B5PJ82MCRpFfwb2r1Ssv4Ja8U17rGLL1oyr7VNjqffs9TaxEvisAADbmeRd",
  "key1": "3bh1y2sw9yQUf1RDSCqNrsfgSg6WBVtvJdLTaVJ7sLcQJqob7fVZ8mQAYbsiv9qz7NN3SMV3QVmudH1TQKnYoH3A",
  "key2": "22pwWMiocvRpZXfuGu7HYHXKTX3VLDdYbDKYk18H64k9KdJUJpGhXQLZ1bmr8ReWPtq3fBfZgPKhFJwPSqt2Wzyn",
  "key3": "2cWxujdmxGSmYrWS3PRVVuDpGWLHZhNnvvpmxe6ksP3Uz9i43W8cJZ91MyYYDXFaiJ82akeERuN35CexGwruJRtB",
  "key4": "25dXaN2qH11LM8hxBfJREQCmRQ86iaZ9QvXYsakKsRYMdr1g4VNrj4sF287BL7f7FKosz5XwmTwRgc743i4MKSEK",
  "key5": "2bEpf3qESfe4LVBk93KmNwdazhbk6hCSgAt7JQ3p48HHdeugjursP9E87TE3UYpo7Xoaam4M22ztbWAmwMPw5vxU",
  "key6": "57R1zxdsudyX5GnZXYH1ER97Mpj6puH696f5rnrs9cEXSaf7iWfGdxRYLViRW7f9FkDGkjA6zf1rdtfVmVX3t47h",
  "key7": "5BjCQVWVe4qLNnmk619qsXSW7XXmU4JuwdmaegyGztrzY9VAjbf99CqAMBjNqGsijhdBEEL3AKn7QPzrneDHFbsG",
  "key8": "2eCfnzR4x7ZBgzg49grsp1Dkm8NueaJxbynKdUEPJtFvbmk9t7pVphayZ5P9WDVv4dkU9vMGRuMyMe9bsaAXg6W7",
  "key9": "CoqWxdzJHVwp1uZ9njJe3kPeSrkyd3Vpum1SLzBXP8MnFpjaAjZceo9Tg2Q2v6HqLCKjNdBWM1jWsMHgBAa5VrM",
  "key10": "55Tu2frSEZtFn9Wn1yvaWhbQw3LvQzXvmuCCpY3JiY2uohud6aK3khoEBKuLRXPe7zmvzksT4fnmDQjnx22RiBYD",
  "key11": "5Pd8vq7es6C2BPN2dzVuJKbUbaFBcdN9qGPmCAd5Hsyr2xLN8gJo2sDZYUssGcMiu2sxtuQrerfjRSMVXSc5gHAx",
  "key12": "5Au9QCNWZcpre7Nub4v9QHqkrQA3UR9FtYjPueTxcadrFmwQ9LRdoFNV58N1ue3wyjmrcRYisJ6gVGmjqtYzPzhk",
  "key13": "4sP6UYjqgvUCcCHLeLjaGXwwvZonTMHCJ56Fx6gTopuCsA8pESUxxw4itHZqBbMHZPiM4Kg7TskV4SRD4i5CkTyh",
  "key14": "tkVN9pBm1PgEQxkWueyur9t8gYANx2rKfaSc8sMNcCNQ6MVXZBAvbgQZBT3wwADcw5acoqn7MVzjinqS3vio6nu",
  "key15": "2fGREjGJBNjQXu88iVKxma3MYCAPErpWVdAHw48MN1KnrireRYVx8dByfKYo9BmAerh8i7UunGhAkv87pNL1AdDu",
  "key16": "4hZtJgAscCXfac6DrbGPENLVmyGfbSiNZDNamWtpsGYVVrujotM88iqzm74xZPMiY1gS7qe2Sxr82z7WVQe2Ljmo",
  "key17": "2hdGeGFWwre4Qf938rESViCSJgJc1v6D2sSubUamEycsNNrXrnyy9GCd8SF4ac7uRSXfaVqRzcSDus6RAfeZQ8NN",
  "key18": "D7fGuo7PUm8jP6iHv956CpoTe9NKXBmLUKhwpcywo58CV3QqucAdPDgxbuA8CoiP59aDZY4zc1ttqa9GwCy3zgQ",
  "key19": "5mv4FkjD3R4E6bQFVtcutDjQ3zUzPkCWDa9yn1SASvbNA6rG6pSH2gRHdjzps3Ap72CTzUo1ABxYEPERqNo8CAtK",
  "key20": "4oUgUQZMgWaDL5cXm7ST2yi6caPCHH3pipFYVWu3vPACsd3Wim9hkQQHEX4eKVuk2kuT27q54a6SK8yghhUwbqbP",
  "key21": "53pRnPXD8NZ1FQ5o2kU9Nf5mp4JtNqoecZuX57LRxrEzb2VGoZHVXXxJ97nFNKaVgYffWG3GWdhYkdBp7rVhXWer",
  "key22": "2h8wmJ3ePs67BpKve2VZrS4iyAUkedgLX2M4xcHuyFA3QoBpoDP7Qm6gx1Py9Jr1bWrBHc4LqKNyp3JV8r6tvXN1",
  "key23": "4G562JtHsTvdErBb6oAfVuMrqNdBeMgWnBWc9DRdALF8WDeXhC58X8yZtfC9TiLdt9ut4sLKPufmrA26rWLDHJ33",
  "key24": "YPep2syGM8XwoAMVDP2SA5W76RdDtfEV1whveUktn7nqBSi2Piby15yfYtDJg6QJ88FKWjt76tLKDvwntpWX5fF",
  "key25": "5cHGphWmrFyYJAzjxwSi2q9MmQaLqLmEMXBhXpY6hGx4s1N9pknhCHcvqtWqBCSQN1isAxtfsAouE54WDb75NZ4J"
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
