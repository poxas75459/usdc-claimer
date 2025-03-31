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
    "yfCeZbpPRqnYfmWmd7CCDHVYuWxSWhfgipX8SGA61thyQCEZ6zbqDpBa43n2ZX9aLUyb35XU5mr6e6rq4bbiKy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arg6SzW7P8Lf1hBUyYJrwaUVjtT7sUaknRV4mqBw4Uhap1hpnu5Guy3idQFUHweZn18JeLF5cGMLSV8gvckoPrc",
  "key1": "47b33De6wUaW9XZNqnHZMA7jeqZpGrykBREN8eD6LXxLtpKAT1FeaQusMXzYmiga31FZg7WCmJWQjJ8wH2EtUAKj",
  "key2": "2fZ1ZTuXTGKLPzkiYosbZ93FeL2i9hBYr4F8UjW5iP7xm1xoRveJG3X5tFkw8fYAsrqy7G23CabAceiJ5bL3ctXg",
  "key3": "49YMJUbbQyKHrW3gau4Y4VKz9GV3iteNaiJ46SV5eVfWJn3SjTUHTgMiJk5FcsECs9ZL3cmMrPeNg4eFJhRdkb7q",
  "key4": "5zooxpyQ5ixJ1RyrGt1mXBk2mheGPLU4ZbqooKzJkPBBz5tBAhT7rdidvYam21brmmPMUBRDBcztHW4cpcqqSPZa",
  "key5": "5SX2AksnZX9X3fuA6qwy3TMi87M2wCt2PVBAiWiEKWTSgq8R1k3ZRzLdAwHGZ7SaCAhVH4ZP5Lfs2thbUYL2QjvJ",
  "key6": "2KvjeqjUfarD7b53jMMLEhSJafzFfRY4SZcFM9ZHkvgcEf7GnBihT5EFf3Myk2axwAMib5SWvHscdTrj4SrmLX7a",
  "key7": "3zpe7MZSQbUuXBQMeM8ShKWYWXVSEJj1N32ffTMKh8GG3Vb7q1QrEjMVpAEowZmy8XAS4EwdDq95xCma5nqZyNUs",
  "key8": "25DAB9mUXU8c5ZbtyTTJQSQFvVVdGTWX8H1ihvVQ4QUkDBrZiAf8pn32qZByQ7JRtfsNWesbWSNK6quQ6Mkevd2m",
  "key9": "5GZXGmEnQ2tDBRknUdK2M5DWVPzZkhTw3pmHdu5qF14L9FHSGrzVKefTJetpsneELr2ULRkbmhM53NVxAc4fuUfb",
  "key10": "46AmcjsV9zQLgqFvsTiqwSVJvBvpcDbA1qKVCRvet2vyB2peiTy8Wt9bpJY3DA3dkSSbZzjSPCTkiXhRFecTba7h",
  "key11": "4WM4oNTnvxHdEnCiWawbWVJWTepKzvTz4fwJqsxiSaT1gFd8X1L7c2KuXTeUTEh68orJYP6PmQW3HVUhHaRkezH9",
  "key12": "22SfxmKyhG211h4oZQqfmkiY71tTFSUJsiEBTRJA7gAQDFC2w9yPYGVCNLFgafVvkvp39XoWYTftQhan2HrvJbtP",
  "key13": "5SkCfQ8zJqwsjW6GGcUuR6c7Yn2hvjt1vcaFQ7VRZgj4EabW4948gRxcpjzgcMSYTupxAD5jvSsgioYEbbi1t73F",
  "key14": "3BecnwVJxGRTu6VCNQmcyqssDmavA3sHUe9wtEKLJCF21WNjsLteVE2dmGRaVofgKutjr3QBY5oyLdtaBMS1vsTS",
  "key15": "3b9DV4BDZ4gbntNiYDJV5VG9HRAkBUAxMXcAv8t4WvhJkRpinRU9HjjevvyBNdZHCeorcQVXQMVbLhQdmydaqDxo",
  "key16": "ZrkBtpZSaxPHpo3vr3a7DjJtoPtBbKatKydGfNoWV3Z9PqfrHQJc2DHy2fcNEBY3syh1bzEcSNu9Xc41hXoFXa8",
  "key17": "3GFhkxiYCU8K7wCD4gZAAs1NNaeuaqC2m2iy9uWfD3dFyJ8LrYg4LnMk4y5JVg8BmRoijP2WT1ouSDJd8jerYphy",
  "key18": "3mHFXRb1Hw2pz6VtG6mqN9iWhkGVuXm9rjFBZX6xyZGL2pqc9rA98x8ip1F7LkCpp1obXJXepMyJ59PQrQePjUDe",
  "key19": "2R6DYSuoQeo3xXjyqXfw4eSCF7cE1uEZ9cdG3AWmw9PBonFAC7bAGeZLjmTtFRFxGRgk6FARjL3iNDFmHeCNcXzn",
  "key20": "4263KJivmYv6F1NJ3cmb8WQecQpvMUGZJdQAKyFycjuVkjEaaS4kZj1zutZxUdqtUBz4uSf3GXGDCKQgi77yHgCp",
  "key21": "3u7rNLjrafqAtXfExLZbMVXXNCWSzZAFciM16okrXQfPo2Lkiv3TdLd8E9Dn1NwZZk6AH9EfmRs5ixrS8tun15PL",
  "key22": "5DCb9vWVRpkrhnsHEvEHBFeJxEuDgX1wNdxp3fUF1DgqwbAhuaKkk9ivoDV1nG6xrhHGy9NyFF1BQ33ffgNfwNkc",
  "key23": "1Hpqa4Q7FG3ade1o4cQKGKnf2FFR64RaTVmaLWbCx7uMwt2cryHiJpn2y86buYCFw8gRiRteYu6Ae36QLpdS4D2",
  "key24": "5ZP3Y9J7eHP5WydAxZ3CGJ3qCjowg2eZ6ird2JYEND6vu7Y4Auf3WgQUzyu6gmNnoBrbMhwdkYsMkvmoVVcuTdn2",
  "key25": "dyNsDKcszSLVaVLchCXFs7SaFNEfWrm7HE2m7bDGrdN5iKb11tnRPMdJ612mvsJTgL2FJo681z22ncSgR5JHGD3",
  "key26": "5jxig1f4RpmePJaEXs6ETyp9qaX9fZArgGQkBmeVyoXmD9UXrPmhkV2dTisiGhYAwbyBwiNdMZcp4y4teuf7LX4o"
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
