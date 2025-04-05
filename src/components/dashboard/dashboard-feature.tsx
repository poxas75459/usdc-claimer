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
    "1GEyNgCD23yJrWrUnZYRrifwkmZbdW2qM1h8bSVNdeRrik7Gbb28E2WU2J1yLkcEnFL5QModta8Hh3eESMeeDQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wf2GtYqy4jbYBn8q9o4VDFEEMLSfcPteECsomgeLrSv9eQa4TUuBP2VohZ44vND885dSpQaRzdLgQfL7zRgDJ2a",
  "key1": "33aSYSLRKGFzTEGwXy6uZPBR8Ka8YwbjcuNHVQn7d6nnX3TcVZWPpeX4Bn7ASaRn3eCDfpr4886PwWGmqHRz4Rqw",
  "key2": "5W5FEqKeNKc5ASiuCrXiV2pWTuwp7joHZq2J6xA3ssVNP8Kr5nZm6R8p4aKSiQdPQMzzCLe7ghGHguCYP3hJB8ai",
  "key3": "2vApTRMUBXTeC1SGRsVNN7QLRQpaie1XxMo2R8gdXEY5NjzCzSCxcX4gzCTYLwvPxysNCMz5JZsPfnEd1T73W2qe",
  "key4": "2d2xN2gLvyoAncKUHiKvDGBZxgoNfGXZJsPRqFv6KXJ5RCR97GwiCkgmM5cnsFQEPiPy9hgTeZGAQuS2x4ywxJGA",
  "key5": "5ZDRQRx1sqKKET84YytuLihSaPiUThcihrMMn9QbnaqR78GfFP9x29gbpuXYH2Hf9Y5rXHNUgvQwX2vwJowCaggM",
  "key6": "2SVf9EYQ89tMn29KX5tB7Sxs47M188xaYXkDzj5jkZ5sTktv94SZUENtPyDS5XdPzibXbz9MMmhxiZrRyX35PYPo",
  "key7": "2JjQLGDTuQAH6XakmUpG95jEHWPqoGK5oJJZwkoVFB2THQceZzAwT5HgTmKHnZbag1AUwAmLSjgbW3MGX92w1kBw",
  "key8": "3HT2r7ZDxxK5Evm5xMA6bH2cbwcrLq4L1dX1zQfP23tQuHjsXo9yftM2dfsNtnj4K8GgpYmWBM82zXPf6n2o5G3M",
  "key9": "4kJ2Q4uG2DxGmBLd41wt3umf6PYyZwLfn2dfgr3sEyH3TNmhZsbXvpVMer15W9nexXqKpxcUEBu18s3s1qgQSPia",
  "key10": "tqSKVY5xNnS3cNfgJwXX76ikeASnRXXswoFwWY47CvKvLD6CHm7gxqoM7rwSTGdywnzH2iZzPtd4YLbeBvxLDNS",
  "key11": "UBetS2xhEjVhRR1EYsBxDhpDq3h8YR1vsJtp5GgHb8DirfKgum9BpPPbj8x2C5MG2twhGp84GCzTQDKdq6o35Pb",
  "key12": "47ywWMPEwHcUxQJQZiiCXAD5kPSgfQFcTyFwBwBoR8Dt7NdxuZp8prFHwsvTFZG9t1uqhxUYwMpvC2buyVUSz2uZ",
  "key13": "6ZLzUGdsZccNRwqN5XzZoPSMyrd4stsjpbPTLF5wGiahaZ4nH4ZZvVTHWKd4qeFThB2AkYDaZHpHgrw74S1DoC1",
  "key14": "2MYsxfTJ67DNezymjNpYYYbkG4aGA5TKx93ooxfjt99Jga9PaM8agayBGuGHvu6ZrbNXXiiTTLftyWJtzNLyrgcS",
  "key15": "27XqVXwijrPADW9pR8TgrYinxbfCz5WppLH1qr52FZm1Cyou5zRyyUJWZKFyCRuhYCNHupZ3iQkABXkn8rzGLEWh",
  "key16": "4beosGxDtb5d8sopD1zw4uf5PJe6okE8CEDPk8cgHbqpEmv2V5KjGAEUpx5wJLCtD597Y53zvVkfUZ49eANUZgbp",
  "key17": "2XGuxEFdvNeC4YH5C4foQCpcbXPtRz716Cf3aAjGzPkRx6DV9ika9otvNsBo5C1Nprdx59Jy8zrPvJ9fqCtw56Re",
  "key18": "2TAcLYTLyk6hfoRzJ5CHsdFfgPBGhzbCJbNBap3kunLZCXJip1GJDfBuDcBMhuwZMG79abCDNtSgq7zNhJcDcvwG",
  "key19": "8BfCueto7F94CjP1ZuEBdvXYzRrgpoheMfUnmctUfZ3nK2kcjEwZn6zbconLRpqC4BUDcLADFyUbLJxdoD1s6WJ",
  "key20": "4MXoQq8rxQP86KBRxNxpfqFSE3KELQfDkjPMGQDsMwuw2aco8Ukx5awC3n3hLwwVS6adsHtrzMG2JdEzukg8avdx",
  "key21": "2aVJv7GypGwZTyjFsFHQFc2JevXnNoN6Y8jX1tK4RjoHwue2nzdeZb7ySEoCspnDKHUiFf8bXn7haP2WTHP39aLs",
  "key22": "24KdujSFSU9UiXr2WrwtMg4Hmj3v6oztJrqZPhoGrM2DwMFctEDZUFcvCnbKhfNhEjPjVWDiH2oCxi3Vwqt2AT9V",
  "key23": "CJ46hYpobUA5W5fT854v1brZtQhoGseyYhQpWnXciqBJRPPEgQKniYr3U3KuYQMG3TVCgPrerzs7cc8C4WjZFEg",
  "key24": "3ubh9ZCTZJjRFZMAtLkJnLE11zpNMaALW9oY8fLcF7SDJsfcLP6xv6vWwXSoMxW5E2gbhuvXh86vR1g3FeRWStHB",
  "key25": "5ZaPnGTcNEJnrEovaNfmhG2J3PkwRaz3hPFXscfLh1JpRJ1Mu6QwebtZxdV7Kdoo4pU3QUtee5zHBn8TiwwR3DTm",
  "key26": "a6vRfwJ9ASrQL7vaqLKTTTeQQZedJkNK5yXYCSYcG97Li3svc4w9bvMWHGEc89Zp92tUb9n9oZwSmC8z8P8HQto",
  "key27": "4RRLNXGjUWrktFDXhQXf33F2hkLB9Rq8Nm85u86sbMaFFHoLVwevP8yJTCWRouucyAMPGemA7j8VJADNkyucRhmC",
  "key28": "5TEsiL2eBi9UMRpomPPApMxguokPRvVXTaeu2uvTmL9f5e6sSipxtcX6zUCQdkccwELHns6ozBomX1yFGppxR5Vi",
  "key29": "5f9u8fEY3nVGYR6xL1SnZDwJAyVCtTdpBjYDZHh68vb8SDHmDBbsRzpwuuQLqqrjaCyyPtj1dFkicuLVLzjhg6wg"
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
