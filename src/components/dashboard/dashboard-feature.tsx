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
    "29uMZzWy7oktW4B1PorJkfgj15fSZC74Q5Cup5Yt6L8cmHXJPmWK9t4adk7q7XCAc7ajdnPHZChPpf9UEEEwZNXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LVT4tMWgUFkKGU3bqJpk9XRPxZS7BNLcnJmnPgVAWG9KVpTJJFNuiK4CJK9HZxrnX6cMHgKDBN3LEjj4bMhEZfU",
  "key1": "3SBQ4zDJKhuVZS3hwuchbEESLtLf8NiWSLCdxTFwaSV87FJmeEytqX13Lvf1ptZnUz4ApwXkZezjwuAfJsJzhLjP",
  "key2": "FmtXxqgMdkEyx7Ly7h46aacKKfpQBMj2JdjG27r9hTAsdPQABdTATExt5oarxFb4x7qpcCrHPmh6UshAsHwPSq4",
  "key3": "5p9fJESVrp9vyQb2g2DtAedEcWkcxQFy2o2nmJPXdqoj5vJhvthd33W3cSoUSjUM17L4v1UzWmARPEr6qV9C11Bk",
  "key4": "5VbPTiqhoxWqoWcMT1sT131Y6XhcXcT4cb3qpbGvsxEPVGPgMbdVyrrAh1Jj9YZDeBtNbzEYQ5SGeeWFcqHiJvw5",
  "key5": "2SJK8GGP24tKG7W4uB5Pu9C8FYKTANiKk23HSxqCCemu7GWcLpfHjaQXVX59sgmZaFr5dV1LfN4TLmuSTYoJVpXE",
  "key6": "2XwtTgtjCkrBE2cAeEEbyvAvH6u2PqK8Wd6ordXYFLPSiCRkkSpenUDuzoEoCWBegSJsCSJexEPJEjK9azN6PQVA",
  "key7": "4RNLPKZcqFg8R8ehf43TSs8g4E9Episxniet1fXoEfTTBWTUSYjrgdyxv24UrWFeh2f7mUSyeWTKmP4nRaxUyWPb",
  "key8": "3noJC1G9jNxpbVkVWfCWVw2ZFK1CavJinX8tYgxb7qyNEa4x3DGAjsaDpDP1s9yQoyzsb7JJxSMxvvsHoFfhM96w",
  "key9": "5FBhSCt46Pi24b8Wrd6uwGVUnmXranXaqQy4pdGp7entNPgfWvoTpgL9sTe2NdXQEssVHuDY5uYRy5hiXyZZd81i",
  "key10": "2JHdinWuzc1jDrZZyyrToxyfCGyzr6UAw8vHc15V2qbm3B8XQYPHWSgFzEBUeqHzP3GWdps3GiLvWTcgJc1HftiG",
  "key11": "FHfUNYTTsYyc2q1XKeu5GBjCPGudbkrJxbSsmYtEEy4ggasNtJwGM1B1DHpwHMMRJ6EqUGeaQ3GMJx5UpdgkKfM",
  "key12": "5cvwr28TR3Ks74TRK5Mt7jHQFFGBvPpFAsv5aJCQ74MJkTpJyf4yvZvmtmSo6e2G4SfadJYdHynDtQMX8DTTB85C",
  "key13": "4jA82Ep7ijkhVfBwRAeSTq1h45JgH2KEegXZkH3YrZBZFkPGeUJRducDsqvAfLSFtiZCzDqspBmNCaqSVzpxCGpm",
  "key14": "4EGQpvJCFwadaDQY9TtXqCZPjNpRSfX8e3j3upQy2fzjbxkqdB19PZ7EJZRHJhHUsoCCvnQ6uFMHzJDfr5ip2Ahq",
  "key15": "qxZ6TopVcpfbU9m3kKMZL2pP9dwKCmktfU1RVi9jTV1fTHmGenfSvJbK3a7yzSt6hk32u4kemVWTFqTt8VFPcuj",
  "key16": "3TwUtraYJA7Poh4fG3VBF8PZwnw5m3jhpNCVCsTA2sQKSqdRjJttsrJwNrSzLZzLf8m7dbq4u2a247jX3hbEUFGg",
  "key17": "3RnLpcZCW1shDeq52uimca2aTYQAkTkf4BT48i5Hvx71cfQ4LPdLv8kPi66uWbpDHwLFeYM14AazZQ5vUQkyRwdw",
  "key18": "2mSdhTRBrvGgj4vR43SkEEjd6Gtz28bwfa4X9uZBNMS48GAtG75fBvUwhu69ik56SE78A3ffGciocdEoXXVYJfLe",
  "key19": "3279gernUaEatuYviMFfGhdFYNsNSSRzQU7TuFNj2tKighiZ5KddRTkqhkqyWi92TxEymm8jMN3sxq3GVEENFvzV",
  "key20": "xoRoaKdHA3r8df4UTBuMT6Y1r5z96qXWS6QanVWnVkFEixsxa6S5xzqhWKAsPM8exh5hmcujEgNQqtTHZk2Dr7Q",
  "key21": "nUSqTge2GiqPjgmjciWwvMzS3WsADt1SoyQy3SeH8zjjY3eWciSnD4SHYutyQWXaPzKxEKxWgzr18nLJhVFjWuW",
  "key22": "5pR5nzvqcgM7NoCLYKKfAUtZeZgdTFG3dvnRCePZV6hBYNd6rXYpNen65rCRc8RGwqjVyxSRVHGpKqQieYZB5JJ",
  "key23": "3RchieQzeLe7dWxbqaQCohRyeAaeZxAEBDcymQBM4dSXyR1YkjibxL2nP4SqSKWWf6FozePDVD3dgJ6h1zxjXv5m",
  "key24": "4GQGECervoUYjwSthcxoZQwka5ws7pH6GtcMZ6DHe4pqEaqT5Gm1MnEUAaJ8R7GRNJGbvWZkyp2Gwt31XHeFgAvJ",
  "key25": "4sUp2w9xr7MZFkbKn2jYsiaa157YTe5Ec4CESPShd7BCWy5VmKG3yZQdffmA1kCTc8Mw9nsMjMM46Vzh7Prot1Sx",
  "key26": "3Dcbx8zDuTP5n2AgNHQpT8eiZhMSafFVr2URTK2tSyqrxhYBhHrueqzAUHQ6ftow2MvroGb6MiBMhA1L3tJVfQ67",
  "key27": "4PJPt2Pf3Y2vQURUEprqGmQ6UYJgA9PU7SQuAhkNsJzf3FVSFXXJ4V7v8g6ZKtrf9YrXVrreTESsCwnRZZF8bazq",
  "key28": "59Rmb8vGqSBDQb863SSbEWFNPZpxnZciV1Dy7qgZCDCssk1uQ3HKA9jYoZVvtf76XqmvyXzKnwdy1eHJkyNx21x3",
  "key29": "yu6AVzCC9gbtM6mGTErGzwoXuLj86Li3CgC8B8VLEYXVxEmLxcsvE5eXb48SGnejyLiNJexBmzcbge2bo8rt2Yz",
  "key30": "4qJDbcjeVyQyDiNfkuzgddGAXsn7r3d3t81PZL3URExWNhVwXRrWbPraehZSo7SY2mYNa8wYnPzB5f8ZjEuCkUQi",
  "key31": "5hXZVBmGV5K4ihPDPZMHqzhL4Eu1VWqZ2PxRvHv5EALw4Hm4b8nFDNR5EisgnHoqDe1ZTRUFgA5z1aywGRJHDBg8",
  "key32": "3k7Gem6Ki4YAz9eGjF11Ws6tUFxLPscyjjBAdZvm5WaooLFFRnhHZPtzU9tbmHBFZQ4cAM1fyCw8jmG8Y3Yo3jAf",
  "key33": "fSvWLwhvmxH71BJXCVQe5QRYsaGmfpvoXm8zAruYCHMVP4U4mZhjwQ8jYuax83zD1k94qrDYWeBudDoTNuMRMnw",
  "key34": "ne7As5N6mYtfpWS5mi6w7XkcHDK8RT45PAkuKPcKBQETGoNVetkeGGT6BrBAJUrejmdJPmjL5PVFY7jGFwoeiLu",
  "key35": "2mgDr8BBdZwkP5dL6u6PH9jq8WjPpESxd5gGdc1MGTnVAnEQDCZakkwgv4ZPMqK6ozGSNEYhUb6vfp33xbquKo5r",
  "key36": "T5rqG56zikTdK9TcYwtxoE4NFBCU8JZwWA3AKKphDdY4XaXaFrveH8cbsUjrdzyAAZqgkm3BTvj7ZFRytHv5r7B",
  "key37": "2qoWnp78VKALUJcrpieUS79A4NdmCuD1SeJwSZATdY1s8uGnNSxzTjcLfVAEsXrXnECeyHnTbtbU5HfuLNkPK3hr",
  "key38": "3kgAhvx72FHACnFAm17FhgjYDDmaEkcW9oYgLnPVqjjdETnsVzdzqXqzMVCpGXct1KmPxi7sRvRJLdJ9aAmiBHWv",
  "key39": "5bqEZBEzjG1fGUzJ5PwJjHUU9UZMCVFXcHkPB8SVfesjqJegXejtg2V6hkiq76FeZY2uUASgNpzYYoEJy7RjJraa",
  "key40": "4yGXPbdLKVXaBqqJbkfkWccibZsprPh27myJwdp9sxEC2S3eTKVw1Uui1WXf3TUjRiWVuvN5FLy6DXEvXkyiop7Q",
  "key41": "2191AJVzzeyfvMEoqZUcuqLcP7hDjLwBC1uooth6Gsa1uyrGCKFgZErtsjSPQuQ6rLsSmqf5mjFdg48H7jNjd32f"
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
