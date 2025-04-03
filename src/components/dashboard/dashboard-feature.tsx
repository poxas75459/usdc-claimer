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
    "3X1efe86XztX6zraYjpuKNKcJxEW6iVCi5gozyYbFE5PqNfSWSipw2vzSeauzntsgQFfCf2YuYzhmJDAwa9V9MYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pxPWHyBLCgByH1CCRfmN3wZebHzLykzkUifDxKt13sUcWy4FvX7xfgia2N1i844PC581Ff18Eyz2aixD2kTKLo",
  "key1": "5FPpJkmsrLGYhmmxaBiaawPojWgAoVE19LSzVxJX76YVCSYJBdvDNAfErbU84WJZzAXS1BgzsQyHNKuSTn1ESuCw",
  "key2": "3HXH8nbbxQRrBBaL4aygKsPKs9uXcQ92LuaR3yN98UHvRzarGpb3NS8Qc6Bp5V6xeF8n5ke8YT87HUzHxv7E4WQM",
  "key3": "5fum2hq6E3QNmLWZqGYQ7cu5eCKiEkVZX4T2pg3PqzkhcJivzSfTPiRZxR8DULC24p3NXBGMnxfrULfu8tfy3zJk",
  "key4": "baBt2eBDuQfoGbMTi4TwjBRHz7XYZe4EddYwzgt4mEhM7rH2vy9d5eQQd7Vf3cwkdY2WEUcfCzYJRhyHs6ACBp5",
  "key5": "5CW6CNEBEL9cFuRbTXqK1UvjP2aj5HcRtQQVk96DYMwEJ2LyuZFghU7LcXjzGtLncAgcpWfDMR8MujWr4PSNeazK",
  "key6": "2C4tP2WktqbXPbgWtgrgd55mrA467FiKNxn1vWxpSx2qQ9MRcN825ZaTYwKUt1f8VuTFxNXWpaDpjhZ2Zk9kjgAE",
  "key7": "5Hz472cALCdJZiuydYNWCwBxwZu8xQUt1d39uPesGT8mLhWEBfpauhwqQ2HGA4ooNkVhNKMx5h7sqHbhLmGSeTWh",
  "key8": "38YUnrkXcBig4We9p4n9ZdYrn9hYWUZFkLHsB7sPo8DFmKWYRezpRg3PYGjktHSwXdpe4rVoFrsDE9isfNWyHuzi",
  "key9": "37tXYVDsWPEKv4QsvnFrtAovLGcfT8nPV7tkgezQn5ZxMLcZ23q1CcYf5j9wwvEUTjxR3q2Bv3JNMreCZpjaPZS1",
  "key10": "3WmrdvNJ6L6berSbnRcPLxHv7u5ynPRdGcN3VoWqMWSymLUXnYdnRrpJQV2f9dMZEtQ1wfYTDZpyDxZiBTFq7Dgz",
  "key11": "4v3Nw2f58PkkKa2vzWKrQeSgqsWPUA13igr3dnT55eiKMQwsxkhHxaHMPoARLe4e5wV2LmoixepN4Psvq6LXGhVF",
  "key12": "5SRW8QcFMRs4YfDs3f4GKqceit5XDSQdkVXPf8AMu8kXZHiRPvGB5Gax3PRgrFNgpf7dzboVHVkCrR3qYqwJyThu",
  "key13": "3dFKinM5TzTwnL5dLUyVRezQERDiYMZUnEJqDxMka8MByytdBtBH5KNoT1Z8EpmvVDrQmtz6EeJa96UhNetk2Ao",
  "key14": "3sYgnwUP1CMtffuuYo5zdtxhqGEGokaXFNJ1rxTsnpw6xr5Q5JF8UVPfKx2c5S8pT7tERbygrBUVF8K75ipqeTs",
  "key15": "o8FmmqwgNceJLp3qicSBjTCFvKHr6Ek56f4tvrQWfo1FWqYJtD1PbN2uaujZHNzPHPUBKnfwChb56FTQ5h9TWmp",
  "key16": "3vJYDYxuqT9rLKnCE2EG4HAw9b8fNkUBgJaCjLsiGidafNwre7a6k3tszCRUiaK8YnftSBBQbBM14tmUpR8nL5QR",
  "key17": "4f2VCDyVn5jKXMc48YXFruGCine4nmqsnaQegb8i1qQgXtTW6GpWL3NLwaKrX1PLiwYZabkzBzQ4Q6weyi8pHkN8",
  "key18": "2fafQC1xWQqoo1BDKz3GtfkPisyzS2UDUamc4dfhVSwab1vSEiFteymqzKf1sErsnbPFvMSfeo3S24v8u8fCXnFH",
  "key19": "2VG4duoxKAhACmn61r8iN1WmATgZ36oxUJu5Q2WkPz8UAWHGTwxctnuJk39zWcahcmZoKu7d9LKDtA459Z5vqYo7",
  "key20": "2F7ub54uJAEjgAay3snCdgMeiouYzsSSHqGGvEB2QM5xLeS5tu3qXcDvvH6Qc1xGqhEgK9m6KWrGyCQbAT938v5F",
  "key21": "2arY8aR2pmXU9MF9411r6E6SEXDFT9Z6SCBQBMULA4gzZzWUiKdqfXa3hcBqdAb8vnnGtvfb4PZrBi46W8etQUw6",
  "key22": "2SnQdGn8wL5Y8D3S3GWtv2iSr7jsyDbysVnoAY4Bi87FWpS5i7rhvbxFMDRB5M51GfkhZsurNu89hjPLUBQjoCdC",
  "key23": "QY7scpMXfXmv3t6AmWkpPC4Kf53MNrGw8hP6TBJfhmU5Ri17JU1deLpVmG6io2QbUBcxtbmTnYdTg59ZNdcWiKB",
  "key24": "eXHvMkQpMeW7bePAuj5T3RMvf3eRCgYLsZh5GwH69EG3nor4NRSFiu1R8GVPSX3VTuYbqfPtKev1XLMfunh1wgM",
  "key25": "zTG4uXC2QSxE4FxWaKMnxWt1kqfx19j7FvxRA2mNdkZ7w5woAgxiduwYdvDasmiP52bMMA3ijkpuCQ3AVaVgTpM",
  "key26": "4JqMiz5tgM865yquFQmkAWArpZejrZn5xskAjvU9GeunwWXE89y5b6dexTgzi7G4FPyAXWX1W6WjQ1A68n1viw3R",
  "key27": "4hKSnvVCz4FDk3papSbF51ZiJptvFtuTnqcowxR13fmq5wLeLDWcYjVDJQwksBLmc1FjBTnjf6Rj3CKi8EiMrk7n",
  "key28": "2EeK9aZMHgLe5ovyH8gpXaHTDCVYGqSPUTMac8SjvcPfHgM8GDTFQP6xdTxBDRjPqkvJqykjnpQaQ8zoJAVigozK",
  "key29": "3WqZ6tjs635wf6F7SeW6jCyradiJmBPNoNZb1HBTHGHwGW21bj7jySUrbfWUhgiEjLjEWAiTQfUvs8NnxtzbvnJV",
  "key30": "48EqosG3YT1zZ7WgoZfZhdKxDjaKidwyBLwd4RhZL421QNJyV3kS6y2d8dPgZyHuyZtmP4YBFQSSid1htBw73DhT",
  "key31": "5b9ShCvwF29CDbbaj5eN3eR3poptB7K5vgGwRAzrkTBkWVzZ8XyZKb6zewCjK8Nw4iY2VbyG81oqzqd3no8RYrkp",
  "key32": "Nq6g8tsReDyzBo3EfLepM81DrV9Dx4WyQ4pnABQh1uQxwqym6LrZdyhmnKEBGaagLuHcX8ZSRf3k7PVZ8a5Ry97",
  "key33": "5vscHkDPNWwrGdoaa5sE5c8NLh2XSD4wjAaEBYRCctM5g9jq9XACwErBG2xBCsp4vqHHvgCFGKUp2iBF8T6VFuEM",
  "key34": "64oUazyHrbqv84o4ZBDMsBKRmDHnpRpvFS4oH2e28zZiy6pXkzcoKQbgUJr9Uhm5dHi97G49X9VrCiDipovv6DHM",
  "key35": "cSTB7CBm3EriZVKCEa5eXcr95kbYodSByTjzynxeQaujhZjYZYkhuqvPusUyiqzdy8bSgPX2ZDMjZX3wdapYpvh",
  "key36": "2mrxKCwakRgFuAdJsseQoGXTEE8mNJFUNbEBHnTu3Uvecb8EGZM5KucfmedHif83bysSDTSj9iMVctssRGKaFp4K"
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
