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
    "egr24dFx8rWMD3m7UbfGqrLML8cTLVhUuaxhcTY6sU6nDXrqYK55XWpdaD6z4nfwtX8YqFyjAcwjNwbaX5M2f9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJPHQi3f3VpbUHbb2StYhP4DNf784dyRXdy898xPkZa3vqDAqRZ4CV7KansveNLmT7k5742YwHeYNMQuxJRfnta",
  "key1": "vNcFJBDysRPj8DePvqTSxXFQiZwDLABTsNhgUTHTTN3wms3jLedPgTqFr58eV6T6bcZupNo1tBND778vC5GRmeb",
  "key2": "ae4JAZcNuTB1ETxgN9LUpiTVZcwhnsZWDFtKdnGZqEYBaw2RAixVmqwZkmTU7L5J6116FdxNf591yA5yoK8zXHn",
  "key3": "Mnjei2hh4UKLHmbsFPEcT1p6GZpNLkrSyor2AvLyugTUZUPX72nTsh63oUpdDXuTxxqiCSSgmiMpA2fnqZxWfTj",
  "key4": "tdmdt8FNsNut14vd6h2DphhDAvXBYXFpq8kusW2cUaXDiFdLBF3RwztJVprNL16akRWQFeUaKvEBTpuXQ6uYzFL",
  "key5": "3SAKcr7FfAxRCQ1iuVBpRCvaUW67GXE8EFF9NMoYoQ6zA7Lm8JUFobLoqSLZR2TtEZNoYYA2x6at9s3ukBEbNUv",
  "key6": "3bxjBdo6rs9s9xPRj3WvDuXQid1PfxrXW4y6BJQm1jgN5FuGhzghit1CZkSv9trhChmq116ZJ9TLa7azAw5r6dKX",
  "key7": "3rXJXR4kpkFS5Z66hyEmF9q8y6yWCKkjwK8QRL7GUVBoKahnuBToMXAnNfR54WzkD7sbRJcfnApDYEc1eDs9cJp3",
  "key8": "5H7pSKiNr4LfRdPASTHB6TGWa8G7mQ2RkqVxCGU4rdPSTYHix9JpABNkMPBgqoB6NijjGgUvvVMDiuaQEft6tdDm",
  "key9": "5UQatR9qQkaP5XfJEcbY2RtXg1acChnPbbN1wYsMiiU27EBLQQMGXWj3r5ePGmP3aPi2uiXj23bQP2HKa8oaAv7e",
  "key10": "2b4qgJF7ZhZxHqCmqoYwSdQkdQABtyxj1wMmK51tVkF6js91K2rGAJ21Kx5WwWFzXdQwCiUBMmNC2Umo3yxvHNHK",
  "key11": "2pCcykS5rSLwazmGBJHHeRybEuxrgyX27qT88rRqAvtSZzB6bDLDP8KjicXyXGbLrnPkQTgaa4N5tLaJ2eAe7eBZ",
  "key12": "48gQFf3NybLLdn6bs1ZgqV3wuGxcGSF1exwrLjMqEqJRLK2PhuHDEEKKCiQpd9NH5v42BkQWkDzh2rFAS7fv4aGf",
  "key13": "4wpREhzaFEQj9ZNu4R3JBv1DSj1kcoExvdd9FcSJ3GgzFNfyX68LV9of1tAceVjkHjQVLUkgNKMBEPZWHMaw8QXL",
  "key14": "4xH8zt29nkj9LBQX8QoZAe9YMB6oGBJ3xrBwuZpgKbpQi8PLo9GNgEnxtsNSY9qfBwCZFQE7g2sH2L5eaVMQTrsn",
  "key15": "4wp3W7QtbWKYC9yX68cafL88Agf3wVhaWRMwkQg1ZXPDhu5ZD8uRfZ9JoeCqvJbsK9BwDqFS5KtmaAgiGB6gQkz5",
  "key16": "x7QbkHnzggg3X3iYsYuM7ZJ5XNyxbhimsa7LhEAMDDwF4WTe386xkNYVmBghZxBMKWbrBD1DiVuteepihhtMNYp",
  "key17": "5N777VQ41YQjh45Wabp8ByUNAHRUhctBqPEfmn8YyQvmPZDawqdDZfnSQYpwxBh1knnsEMJLoTJEDj68stWRrLrF",
  "key18": "4GNzpQpPbFwPEHFQkh7hW7RZHSoqHDNd6tHg2mboJh7nwW2tiS37p1b3Hnb2SpANNmxfMpnkBa7kXkLp4T6uCAsp",
  "key19": "iAFMokhc43oPTtTYFsi18UucPZWw9WzKRfZqTHkttJnk7hd5wV8MXKw8MRPYoMPwF73XAJGPdYDMD4ikXJFdPTb",
  "key20": "3EcSVGaLkgG9Wdpxs8duQuF7PNj7e2Uz4gLAVfASMB13ya5teroKQz9464FWPUrPaXYYjo4rVYaJwhtqJY9wTVct",
  "key21": "5PNaH8FHGSbuZC6ybVM4JEo5fy2UbqzUQqk8x3mR4WuoPoSQvSFEFzeyn3HdAU56RC4vRwBvmq9X6ooXARpPTKzK",
  "key22": "3bk5qVW8qEXQBpjTUk1DM128EkHgCay4zcTR2RmSpmsaPsy2n8vD5voGeB5GJJaGvom3n5Pk4TBBNYScJAZwCsmC",
  "key23": "3jchwUQqrGhSxBAYnQmoHBm3HFGnrT2qz6BskyMkgNWng5T4yCJH7Fe7xxCjaVykhtqniU4xedpa8h8VXBzB1RGu",
  "key24": "2Etnbbn5cHpXn9kqPtC2mecegMgJdmkkoULrmhWw2W52VWFo8EeTJQM3SFk8xCVmuQcEtV58KMwdL4ZARVkFihr1",
  "key25": "3qumNecw3DoVJQg6L8fJzzUfTKfBfj3Nu5yox7wNsYQubopPhqjLu46vdAScNjgcDpjiyaySAeaNyrFUZ7s44bSW",
  "key26": "4wzFUkQ1Vb15FCirbaBGCAZ8PL15nK863j6FNL7uqBdxVf82UA2aGhyXMpginEfRF13B9K9NiskfHiCzRiDDAaJG"
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
