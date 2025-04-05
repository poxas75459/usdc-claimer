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
    "CsN1xTiU6NymtdH1PU65qQhVBzSEcUyu5nqmF7HENJRm3cZV6uKicjFxSC4NUT6g6U1mAUn3w6xXCEDmJCK9m3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5koQ74Ns5wWJj7rB2nviEwjpvBMPbdANoacqzbEj6cLGnKJG7xDPj7uq2jGwXiSx3fzwwn6MuLHVCT5Xeu4S596c",
  "key1": "4LhzoW8SHbboX4ubHQFXQ4GMZFqsT1G8kamAiVCKQX2jKLAS17FQfd1hFr67nDdy9WARzPGSz4zwKWasMDoFDcFD",
  "key2": "4cBn5hwYq8A8kT5vdTgHAH7gvSPk8qy7sFenC5c5ZJacmTkYB5ZUeEHjrpTUQHiQxCM2ketBZFvZ8UcvvTcUVi1U",
  "key3": "3Timz5opHhXQTEtSa3DTnySGWQGtKdfsxwC2Q7SxEFxR4HKGJMQqcsSxvMWYsc9eZpnjjs7Emx7stJ2ffHVKWNvk",
  "key4": "5LpNhFvw3uTDbWtNJgQ9TW2rzgoRh71gRWhTztd5mZmYt2WyBBRyPtdLGpcGEiZvhSHqyYkTGGzhwDmhArHr1aaR",
  "key5": "4GRyDYA9gdEnNf9A4WYUuqYJvhQeJUf7YAuLUjbkW8yTzPnJDeyEg7C1Gj8WvRgBTrdwUyDQU8GspvNSF7PXTiom",
  "key6": "3Xf2HwT9wKcgTXTQjRLfRT9EU5LLESBjQZoungo32tYyWPmFQrMom8x1znY8QVM7iqmitPzQPmyYXSvToE3wEBMk",
  "key7": "4cdWyYTJTcsrgW7BPc5cEShDBo1L9HGh4a3kxmjdZbudbVVCK9epd21e28qiWJqxXdRh7u99NTrRptqmUaYgBzha",
  "key8": "2RMUb43y6yuvm7JyBARQ1Qygymb58gVS6zZ6Yxbp5rGRDNxkFQLB4r7nuZTzcMG9Huko2ePyTpHJcr8Wc4t77EJT",
  "key9": "3CLb2sj3CZYhshapDke6SMzGa8AFcRo2EBbTFV24ezAaiokuaqduiM3bt3aUHbSiuFWs6xweijigKunmrscVavau",
  "key10": "2EVbRLJNm8sJsBHjmr1FfHgrvkmQVTeXb5wDyRGDiCHQKg3osRkCyVfwboxNd4uMRFcUHqLjfRpKz4e4AEr7HRa7",
  "key11": "5pC7Yd6P8rSdWAUom8PtZDMBCzv4ftKQFba47hi7ArkpHamJpRZm5sXdEDPFWMV76owX9JX5XJG1RYEQ4tZeBATn",
  "key12": "5TL3FtWT51Q3Q1RGYepbBjEbxBZP6MkLnZ4iVc38xcpjBGaCkhv7ARFfn2ibyJMXuLSLo7TFVv4PZRT1REbv8Tfh",
  "key13": "aMXP8heS7Qf2kexbxrcxFud13Mi6oXtL23QFaLTxJt3YoKUrdnkNkL6PtEaCru6XJmJZDsqtBNTLN5ocnJeFAbX",
  "key14": "5SBpZQKxAiDD8zK1kZdJYqE9ZDQu5tKhNu6m3xCxQAMtcyYg58bJpVdBG6eqX22D65j8qR747oCsYHoomfcuHb4K",
  "key15": "3Jn3B2BtxCm7AW5S4eXt4eVMe2Dz8gLj5qayoLWnAJn99ujhvToUVh1FEM4nAuDPAyK5BRp1n5HgmayHmJ6WqyN3",
  "key16": "3VtAkDnZeCiDfD7ZHhhFLEZC5G1Rto81sbyikVo1Fzebrmc7whwjfySiSk59ioaELs1TP6YoEBfQqdVxKeBHHNoc",
  "key17": "5LzfD7aFWnt8cKoJYYimXmE2TSnHsyCsHp6vLAwQXBQSy9rAHq5uuRKDK2Z83d4pdk8QxaM1rPHVJbpjTSrMsMSe",
  "key18": "4o5gqZbrx5CbXQDSE7Y7pLATwdjoSxgxiuBAGRZc3amgRQ4ayPHD9R6H5g8GT2nSYEJ6Z3S1k1iuy6ZMtpf3uMTf",
  "key19": "2e435nUkwXmbhygWAbyWueQ1Qd8FSo5t7TwpYUSS4bLxX32cPtidUtGVBfoz8ywJngVsWKm6WwwYhzeqPT1Q6qTP",
  "key20": "3i2XwfnPbMAjWLsAD2bEtgcnEawFSoi8J3ydANdXNbQiAo7zDNdpjzu1tniRzWWsPz4ea7LuygpkyYFw6bh87waH",
  "key21": "2ECA8tMMBRXJn4pxu5gKgNs2EiqQSpEDvTD66fvi2P5ESZisPyBfsCifGc2ejSVUBVFmASUMbgfrBSP7E3Qzpy2Y",
  "key22": "5Y8ifRmRV7ErQKQ79Ptbn39Hv3QioiTqgKX77CQ9xARPBuaaDWkNcYHJx7apiSzN9JjGTBdPpFHdWXHkZYVWdWTC",
  "key23": "BwrHkfJFkKYwPSwChk9wJQ1TZAb6ej3bVQFxNfSphVaa9vF4Vvk2NoBfhwfXMkyfdSMKtTpxsTsD3Rs28bGKhmW",
  "key24": "3ou2qw2hadMDeS4WkBQEgZv85g7ZJtuW7q2QbAHof8ddXZuvfVKEXHtY2NEjMXhgktTqYib5MZku4AiDS1z9Zp74",
  "key25": "3ACW7c2E3rCxJWD1JL2aATV2RJV7ikxjR7Zq9pgtfVT5Mi22Ga4MzZRawyntNTN3cj7eC8dfz7FDWh1ttbPZYrEa",
  "key26": "RQuGFNEygb8gGrnuNVtG6KMpvyBkDTN876Fm91sKWgXqLYfp2C5Hbn4BRpprDLxp26GKAxLTbQdL3B5vfegWCzP",
  "key27": "3gRifoSeErDcv1yMNmjQJF1E8PQe7cHrPzuKbgR236GEK7xXLfJvgAJXKKvN4ZDKfsVHQLDRcnsuacsg1YQxkAxT",
  "key28": "4aTSVDpo4XMirgsm6qTJ88V5BRPeSga2Q111Mpa5znFmaCG62rwZvQxb8awwftkLixVSZfWuNyhWsVHhwAW8JEv3",
  "key29": "2tGo2T9iAtLzoNmZtZb3v1TEyr393ystHE9qbcq4u2u8rPa4XjGM5fsx2WPDouZbEdYqWHmUVwV46iNGS1qzkiik",
  "key30": "4eHbEMaw7uLYCKdh2oUtZNLYCKAsiTACc3RFj1TmZUwCnstNe5eJ3x8AujvQ71kZ4Eeg7ecJniY4PVFnqcBhLVei",
  "key31": "2iy4fJjJ3jzro4iMtGMZ3Be8AKp6NZGRdN1SPhyPqUuwZU34TLmsX76LeiwwEADSxaX7jks91BXLxaxmqouwrfCM",
  "key32": "3Y6eh2GTEuTRowepTV7rAm76RhXUB2bQNfBx61PPFZN2QYMMyM8TDksHwxV5HzwxK5rMSM2ZvZGtfGdRbYpKK3vD",
  "key33": "2EJYw7sveippH7zqxPo5Rq3Skn8taVPSCWNh2bnEyTL8L7gdT1G7d9fpqw7uvoagBD7gbUaUP4VL7s49FZUZ5Wyh",
  "key34": "64oYKKfsC8UuMVC7Zxe4VQZvQAD2UMm6JRGcDiEqsiK5rWEG4K7AZTtmGm8RDd9gA4ygr89kywTZfJNeGDbrTvfM",
  "key35": "5wn9E8BiFvkDcLkiRHNf9TKHmLBcYss6iDUZSDxfMnK61scue2e86V1F7zjVTYBFJ156y57FaNKTiNTxc1amaUz3",
  "key36": "274HBuvikL8Eh1Kvnor5k85EaUkWmE9KrmjSkzbqxGRJ69ekH5eWoZw27nCd9BBFaa3B3kp4X87AurbTML6PGevu",
  "key37": "5PQ2yV6SFiD3Vm1hmFRbNcFZifEDt1JkyFRq99Xvub9AbrXiKDXeEKwj5jzwVVNUnkmSQhmDyQYM2hMkvdtarCrV",
  "key38": "5ETiJ8V9WLB5G2XzKDTtBWEcgeFfajtkvan94Xcwr1rvahRpUMEd24uVaFBqVNUhd9cmqJLVbCcqwjhJRdjN2jVr",
  "key39": "225ZEEe2FBxoxSkrEX621bANpqj4KM9pStvsDa6PztmznDhacELaqzNLoFFEGwxQwrU4FHN28DYpSrYak8xku8hF"
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
