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
    "4frp1t5LFQFt22BDukafEkZVpxKauSb7xMrCiLg3ska3P5xnKy756VTaGeSbHDKobu6wLJoq9LRdG3n41qWezztr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhXoFpDSy9Uf1i6HV8HdkVNRWXbUtdZQRu9WB3B1dNVwtJ4L4qibBGUtkd8pmKA2XApVv86xW3r52Hd1cpDSYUh",
  "key1": "4pi8ci7h6qbBnthbE8KrPRmvxA6J8BqFUCL6VY4TuJTVE93W1Vzdi5LcaMo56azbjziSQPH1mYCQP1u5sRaXwB7F",
  "key2": "2pGxmjL1oAUv4GnRVr1eRCk5EdnmeqR1zooW73wChCaBFnvu2P9YaP7Vc7Z9EqksG9acc8Di1PCn8W8aWLVvuXvY",
  "key3": "533v9UTTdCkNk7ZU533J1s3wMeaSbR5LaA3HC9UJjv8tbZ57sVg8aFJRsUAxrntvgT9EbA8oExmfCVfQ8uvkAQPz",
  "key4": "qgtc7zSqFJqLJU5Dp57MJJrt7FMXHrLTMb8tHtH5Pi3irYx4bgCCBw6Qj9QpXPmMYpYJU1koYTmwLYThDiL7MgF",
  "key5": "3esZPcVidzSpKGEQLY7xAEmn6FYV15V92NaC3tUB4FrMfL814NVVGFVSz1G6KLfA6LBx6pdF5kQdNhBmcp2sd5T7",
  "key6": "kDdHAiric9ZzJGXkeey6YBjD6WE5U17vMkWWF863htDYNgBZrEj8EWJtzPnyKH4UwTxDTfTfKAEmQ6SrPzrZcTQ",
  "key7": "4Q6wtCc2nZSpNdrcWTjFo6GqQKiPsLrVPzvFgq1ziirtyPMpcYf1yLY7tCSKTZTa1spygStobxnhSRgvX5jghk9",
  "key8": "1i8vfvFQYn7N6UZFKYcMeTsFKtCjdhb3e96umrPX886zL5aZMKAVTEa5W7fnG6NfXxWSbos6hfYutaQXebWgCYR",
  "key9": "2uwfRnVFbKq3AmhfVsoRWXCVt3p2rhsvZU3HzgE9VEZmPKEbKDYkuz9TT42sveuch4CwXyYKFEHFZTt564uNBzB2",
  "key10": "2xjG4PQe3iNn1D2vjQuRaKi741RQ9SReo217w3VPstZ6G4Jo9z23AmgDnCFZf2j2fyQM4EC1z6d85TnJ8oJSqQqV",
  "key11": "3yPWCVBGhNpGio3jXQMMSFthpWu3TUQKX4Q8D4aq29rJJW2TxMGeZS79K5D29fbpWg3XLJujtQRj23ZjY1XJnpXD",
  "key12": "59XP85TD9659BaxttjFa2B5RFBWNy7wmWYJVy2euSnuW7mTKAzPuaJyNnAqnLvWWv1fK35FEUBQ72vaVzkM9Dbr6",
  "key13": "5vZ7ekNmuCfYLQFiwKF5ZDhNjs5oQDnNZrE4b57JTq9NhNdcjvQYvhp8KZ2NoewAao6e8bLNpcyBirSc39zMU7BY",
  "key14": "4cPoF4S6V91oFgJ7nXA3kthzZkY6MCUPp3bK5YnwzcruBoym8DuaAZgrANB8mBTZejNWvq7yynDZA2rLj6RN2Lce",
  "key15": "5DBtqUkNYMrri5VTWtWmzdj22UJoq4hXtgGAr1YJ27e5NNNY1ACpP46SqUHuJHY2He6yTJjtcrTtvk1SztbcKgSP",
  "key16": "3oDsgrRGc8QzLuSmKimVEGyng27VBS3kf4wKHW3snwnRRbXNWCdXrK1UeGs7quSJrEpRzMLPkru3Uiz8AEgqKHGQ",
  "key17": "4iwEAXXPWy53BZj44QaZvYLyq59vrn1tswAUyeJ1YdGA7WHMFjjakvbpC7bUJx7EjM8szZybcP5RZ9CQKf9MVPcc",
  "key18": "2TjFq7ybhDDoj5DCdGPgKd6H1boE1spbWwZUsYMoaYj6RsMg13FcF5SbRV9XDD3yFiZg8WLhSJHh4TjNUqQXRpsN",
  "key19": "eYLnhu4ma7WJk5UVkf4UYKqfhGuCJ7jS4mhwr7mZbevSU7bXc6dR9VCe63d9aCz4eznhNMEzBPMS722TxVsJByd",
  "key20": "5yYyejpZYmZD1Bb61hbrnrG2azbdA4pCMJX8gqA8N5Sjw8oJaxNPzbijjnZ1NjBeJZ1VpAreWYs2QP15jF678dUG",
  "key21": "Wf1uWf8aMwdroyJoxWA2my591EaCMrSFZh3UGY2zAKihFf3WczDb7z4LjhpTfXkoEYZStWEKnSmmpzyHpmZ95VS",
  "key22": "Bnud5qfErMCTUuvQQecMUTpMLeKxrRrtinv7V6MDoLaFGdtyRj9ih8vi4NEJUHAP1dbfioLr495oEC8EKKS5S3i",
  "key23": "673mS3ahdp5kW3fwMe7HaJCkMzHDqheEDSeSWGyqLEL2xnvtm35ZGN3XEfnsioe2RiqGBJUzKZqVcdqk3ejniHSJ",
  "key24": "2apSYSAfYSZiauVFbV87kVUrYzjfGrMz7xXvp67XiykCga5VuW9ppcdJFdBLf3vxv1DYNEATeCv1CZKgnwidRsEK",
  "key25": "38DFhtNCGVxQpxuEeCC8StkkBJXiRipZyNXmd7Z5Y1ViGFNeAcyQG1VpEfCdsp19iqsS3Q8TrUzfwNxbAiAjbt5o",
  "key26": "4vSxhcbbVfBPXCtv9S8VqBqaxChR4Nc1sQJQnnH5rCndBdURHMWxdUnQmBLa9iTYWqAVZDjxsNNLLW1LSEyAm8ab",
  "key27": "5UdFLzivivtkh9xS3xcG2F1CDzN1KneWY7LRBq1tiPkQ9tzTzAgAos7KtBrPhWhX4R76PXgRhKzjfTmqkyqKNJGo",
  "key28": "3Y72v1CX5G49o8UrXYtSvGfEuLEin3e99BCi84mCKx4noveD4KtfPCavnv6yLtMjobcQjTd4V4ZXUa4PbNtW3Zsg",
  "key29": "2bshCZ6kUXsBfMSU6BQCL3Bu3a3QhCXpaty2dd3gbB5HqebHXTXq2A9S6p1MKBTuW3kQwPVmbsrdzPS8JGXL5awB",
  "key30": "1dSLvCp1eY2gMe68tLcEvsM3F3JmHXSgakEPmbjve35B2vf6LHp2sxJst6ZDWUwBdXzwNvENZ56ZuP58sj2V57T"
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
