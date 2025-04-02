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
    "6rhN8n1k1y58YY4kDLLoKkwngHoaa98j3PitQuikmJ1FRvFDdhyzVfcjaCPu28rpxicNxExHKpmgyFnikcw3Qbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCSA7xvGqMVW3mXDwyEgsqMeLaiKPcbStqckM2uRPHCAfQ8BQd1Amk4KnqHnYWK5F4K3FhyH8Ha7j27ejWbDLUg",
  "key1": "2PFAoKCAEfGuEwvZpdUw8sC4i7mYEDiW6PEjiwGKbtJSXi9MBx2JnD7dGQJ5h58N5HSPhaqPoicx9xtpzVgJp6UY",
  "key2": "2uGNfxj2AkjFbSBDy2SzDim9c9T9oz6Yev6g8N3kTjY5TG5Ry96e8VrTceE91j8EJUkFTxXkUuxJafCQwtcgj8Q7",
  "key3": "62FXjdP9qUsM2xJFr29oHqvQBCguhTWYJtU1tLzdk9wPmoRMTqfpUnCJXmk8UbAEGkJvS51LNcPCJxbTyheewTSz",
  "key4": "3NtZHnkzMnvyLnAdmQ5dXhbpM8HxGxJE6wSPFvf1nsR57RfbyiHd7qyA9Nrx98UC942Wvb7jGTvNd8b44VUmJ4Ep",
  "key5": "57mB32tAnF4KraK1LoxE4PiQk75XfPiumsecEF8Smah8PKAPAmHzneFbo18gWE7cjrc8HcWr2tDRj4Lo6aT6rFv7",
  "key6": "5jT7cw4UnmgvZicpWydTh7DAQ1hKkVPGEBV1kHNTSTcqut5aAbuZj6zKztkGSfmEzc32oXismEhKieZoitrbqd2y",
  "key7": "4p5iLawVsuL6kWnZwz3LZnCyeE3eT33xjPR1EuCBZxxUeEkpFfhCyAT4pztLDUHYTkSTppUdJK7NXu5dXRVSaZsW",
  "key8": "fmq96xcpZckvAPfpMcXJchR4XspmH6YF8ud55ZK8hsicqQhmnFmh9Ep9SedM55D87qdrCTZsN5g3LyZvTtAswJC",
  "key9": "2ea7WZY245cYfwY8EuwkS3B3WfB9Ht1sZnuiXEGbfZgTw3kfgY9KAGbm2YJqrEQmS7FaVum81qvH6QWZWwrpPdNJ",
  "key10": "4qppFYpX6tWt8W3oHoPJiCk5B6emCdcBrKgrtoY9UkBDDfnBTb875Ggw79dYPMwJdwhqrnuHt7mgy3wgHYpRznTe",
  "key11": "3iJbb5Kyt6vymdnydZzZsDUEwuYxNi85ZbVismu2iPEUfxETApuHCAiPWikgoNxbXytD381hbCdQgNN3CiWYoR2s",
  "key12": "3kPAeBRWraEU9qrGs6aTVscAdT1pRtAv2914Z2Vce65ke5pShJq6B37vJfCHPXEjtgCdsR9hs3YjdJR7Ti6Z3HDF",
  "key13": "5cYWvBSQwDUxfvGhotg5bovVWMc52E73aXuoNQLtiq6PFyUrZFdERBYoPgz31uBwTgJrNHf7VV6i1S36VyniRBYz",
  "key14": "2iJLqcdZYUXzmdF4nCwoYXsi9PLVHead4ZQzCZPEmLhD2Esf8fueYBrRDQb3ytP33z95fAkYLfAYabEQrPDEUNDr",
  "key15": "36qgphX4itRzQe6Q9mKFoma3YbU12tcejhwC1AWcWDEsN65McQku77KmkS99rkvtYte4EzVurGt7F6Pof7Sa2eNg",
  "key16": "5PWF7g3tnm2eX6euedpX3fDuV1AV3um9xBq6a17tNR9z1Q9WYek5swaWKjVDYqYnQYHyZdELYaXsQyT4g5SxkqFh",
  "key17": "4WifaYkc5hY3nrxKg2UiLspAViBrJfGRTdi46stZEjrEpYrzvrarzyuT1b2XQnMFMuba3Bi6zyF6FS8YF7vxA2GW",
  "key18": "5JgazDxS9c6FEZwxyGadNDgEebYLXQueAwfUDkYMvLPfpztDsyFqjmnGEb44JJrM3AM56CVfG5bXUFZjLQ7XhSoc",
  "key19": "3FGGxTubH2p31X7cwLMmF3sigvo1X4zdcR7GtTUDygqcf3Yb5p4mYH1P8qWhm5iPqRPVB1xCFdiVSN3DawVqVmaf",
  "key20": "wnPv36wSf13JZr7VhB5vZS5RdH39cbpJS1ShoBEBNXtXtRSGyfiWsgfsq6ArwJx7WzMiQmMs26MJBGMarEKEurT",
  "key21": "499d5aCGYCHEX1XY6RSXGafUEGBpVUomeZXKPosW636tUj8WAq9resjUspZXTVR6cuuVp9R8iuvuEtCudNZ9cJdi",
  "key22": "5rpWntowD9LoJpJ9ZhRfoGJ8so97t2HAKWdUNjAX2gUVpXkGxBXTih9jRGqyBARuxgVw6MdQcqq43JCsNmvQBNBN",
  "key23": "3Wy6EfzKZhrwHjuiy3T1JPr5BJt2zvs64drPipvPVKJM64UeAC8MPMZoPqdmEM5pmp1PZKJQQq2xi8MGZKnNQPNg",
  "key24": "4DkNEEiSF3CzdRb6ANpftqcpsj3aEpQLorJMyzQrUU7VxN5LA6fa8xU5rm9tvCdRo5ziKU1mBsgv1FvGiaJQAgZG",
  "key25": "4bWnwddAWZMpcsrdRbYxiTrXkS52wopEiGWEskzNW7aS96C8xghJ6MvmTPrLJx5WsgcKYWwMBSN8iycWBERnjk3h",
  "key26": "5sVQsupHeeYyLyr9FmpCqr7PFB1RP67wff4hkKSLMTpfqEi9Z4BMKCLDpu1fiV7CMqiHNRPm4jZ6jPr63W1x6N4P",
  "key27": "44nioqH3ixKCrxaKTvmbgWXZeqbBwUpDpVeZQzckxEjtMDn5Wi9UVaWpZ57uDTjHYrJULNvp42kDeaEfT5TK2Pug",
  "key28": "4Ywxtn4n4pV1mXFUd95mv8fE3MoQ8v1wEXj8pNnhnP5onmQnxMe6CbaqZZ1HCyPVcMy1raZnKg7xFRD5bBTkKY2o"
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
