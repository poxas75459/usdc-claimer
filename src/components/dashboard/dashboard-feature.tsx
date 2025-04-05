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
    "5eed6yDyJzM5fC8z9m2zKhXTTukxAfTeg1iYAV6AXgH2k9JtQdpNNz4Tx4ce4QofWRhmhiwGdYWGYVww7Uui3D5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGxQkNhqcQtTzzNkE7fvDSgwqmJAVgRUsVcjSbtZsj2iNk6cKVJPcPsViBEx1ci8NMjnRS2ibQtu9eCuzer7TPt",
  "key1": "3uL3LU2xjWbpUA1po1fzRQFXJWqvLDnW9TPsPY5AZrTjPqByNsi5r5eCRXBZd4XANDs5MfujHakmzHqqUsG9Xxoo",
  "key2": "4CLvGs5s83zVvAqm7VGARGiGbFFrEths4ZzR7GGuqfDLJfK4gKDwYpw73SzcxUKJTNbi3Wz7aCdL6cNvyQaZb7Ln",
  "key3": "imgVXbtLoPoW2FZjZmVdVmJkYZd9Cv3tqMKaEYmP5aZBC3y88TaakWjMdgAk9TMsY8y8buRKnVTZ8yDVivCCLgj",
  "key4": "48nEgBtETGyYMbFUkLpjCXJHSebD1Kv5HSYsgFSNeHs6q5zxPtpAgxPbNHrRsD7FuXZYdFwrE16Bjg6UTSBQDvFu",
  "key5": "351PbMJ1H6r9AYnZyuuojwKYsNrQjCGNGZkSWGRpxu22NfF1DSWzSWVq6j2BzxvinKJm7c3AVVTpqMwMLcntJ7BK",
  "key6": "5uXVHkBSDPenaADfYJciatZHbNof3Li5PaP4VNWH6zEJLhXtADqvfWCKLHPvMCzSvbGGktwAn19cXzVCnnn2ugr1",
  "key7": "2k89to1dbQAkhKdnAh3Di47iavMzcSgA5tM9VdeptbxfLZGcXGzygBuEbzBjgHrhjyaCVzfhjPfJrD73UQRfzere",
  "key8": "4fRD1SgF71K83d6s9dEwP95BrUmFGmruaHnoJF6wrgRcd1CT7HRjHPURCNeykmseAJtkCMB6VrmAgPqmxi62ry8w",
  "key9": "4jya2gGWhbYwTCPR9cWkJMUEd5e1kmCVhgAeTa9c3iPC8hzehaG9S55NzDo2ctBP9Sd6VgVCL9CrrGwbVK8orwM9",
  "key10": "4JgT2jtqDYvcYUDroJq4XtT2EFfgneDbVhxTauLL7XKs88PZTkHX1jtthjVoxbfTvS3RVkmVCLTBvTFB9MbzYmki",
  "key11": "5anLKdG5KSYBye4BRtoGQwUY3GPEzPS9GuskU24PCTDDqSNaoDG7CjnpFxoU3zF5jG4CNTv2DrCggcGSz2zBcTpY",
  "key12": "29m83ep5AgRM7VGe1RbyJba8581HtxG1uaSjPyWPraZgRkWHtGeVvfC78Kyekt1EVwpMYwS958AC6GYkKjeBpti2",
  "key13": "4NBkkGtvUVNU1jkgyh5vqxhXJKYq1fvo6S2p6x82j2W68euNiL9MR4UTnTfMyjLzqXRunuVvjVbB3gwMy8Ehs53C",
  "key14": "5gtBrqw2Hgqgy4wZ5eVpKi7PbYtCFBhpcjYEuV6uQCWJZVY64EqKxeZwSi6ZniSGn6GyGFYZRXwa1x9vwh8gTCxb",
  "key15": "4n1JxNjU1EU1sqCmi7QAv2BgSVPp8VvisSrEYYuyshyG9F1nMvzsK9zd6Bz4VPimDHSgZuMGtdhWGtZeBVBYcK77",
  "key16": "3vsHoSFAVeLtM1BGFXrwwqm2XoszqTXvBMWLcD91NUZHssoMVvvzvPJ8Xds5NBHn1uBg6VLHbiS1KGTdi1iJWnno",
  "key17": "4HYSXRdPtGsHKeFRtLVDyUtHdRs3BtxrDCsssthnqzLWfbCy8m8qma2963HipvcEPAELDfnmbCuLUcQuoNUKLMgu",
  "key18": "fr6yMwEjTxgSFAxiimF73PLDtHSSaqBR7SHjEx4T3snruuJJ5uxpR21ZnNAyJqDNqXfEjNCJuwWaV7aJoVjrvGv",
  "key19": "2FRtcRu4yFU6gBJEGzV9yBiXzyitGofqVy8u8dprX2f1RYLBdHfcgFPDhYPEzrJLwVvNCEw4mfUkwQEytqAY3rmn",
  "key20": "5wq7WUuuu11RQEnqM8nU4kvcifsKRM4fcAWoc7Ljqf17z2F5DD2a6pWhZLZXiTe2PyoY6h2LdpYJ3tJ4XAUVCfZc",
  "key21": "35w1B6oSEyuojtaU5aCfR7j734JccJhc8c1hjHsTNR4k36GcAQY8vgvcUeGpPMzRMdaFHUyFvjJNzzvnGroQwgz9",
  "key22": "1XQTdxXw7R1jSzLwfHCxyRgQwt7KJ3FXHwfMQX8Uz965r4567LQS2AE98JjxrSeswSrN5CaCForkgKBmwHxQZnD",
  "key23": "59QHWgAu5sGsprododEZvZxZPSJ2ELjyoGrYtwwQnpu6dV6aufuK6bJqChV7mbV64dpjx8kYyYYmjbSWuM9fCmHm",
  "key24": "mavrqx4fQnYJTyF7iBBPUXcHB4EFxrWQm4b7mWPBBJQmWih5AssVKMiHRy2mXAkjmjFRWUo8JrNuVmzEjHwho3P",
  "key25": "4ufGGWMoF1CkoGgWsLL32eWAi8tpdw3ucdsELhtTx1qQs8PhmwPe8tmVLeoqsALzCfKuqgJWYRchapKQE5cjdj2t"
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
