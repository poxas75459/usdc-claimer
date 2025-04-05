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
    "5c1TfrDHjA3pG4p3g6Wf8iog85YEUzKonYVJ7WVA9PoqTWwjVqcvdLYynF7NQKUdNNv6RciBDYQ8WH82qhWphM1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3886sU31XmQL9btrTk2iMJmhuZSf7r86BVGQSrxNZnwYVajgGD3ParmKmfnYq7JN81dpeEuq4WRj9oLyDdYpaxmm",
  "key1": "YH1VetHfMFYCrMWY8gnjpe6dLFhbM6FsXDuTDYdiDWuimLzBwbdDvqJV4d8rp3Yb9AdAZRSbZcAwb7e6uxg67u5",
  "key2": "2wrQpVR3WFYazPJqfuee1jFqdD1gZjWnFczTyfSjrih2dZowMZoFRGNbJLq2HKoVDBEVLNrXVDBvkWFfWtSoRrCH",
  "key3": "35dVk1UEJQRXKiLg9yMr85sFXF8oUTFbugWfVBFhE5kg5yT9Mfh4P8bArBeNKA33Fo1qRZAz2n5G9oUjC7cpz3ma",
  "key4": "2VEZdr9Q5idHitN7kVLAnCS7VajiiecPjLL8v3SQLhvPiDb4hi6Hd8kp72pygNtUTdVvYmJGYewiRx42ozV1uEYX",
  "key5": "23hN2Qgq64q88DqLGdWZzgxfrb2mJtke3PEcPbyGCostxAZWkuWnKtdiTL7wYxE9hMc1u8WxwHfMyZgLgoQmYCpn",
  "key6": "98EdW3xpQ8EoJHhe9wjZQe6zUgdVpXmrUGNKWXadXzudZnRZMqVrrEi6r744HQMkNkjtZWQXdnvZX4zjNjfnuF7",
  "key7": "Eb7LJQ1smkUE6RyBqrnp3iA3pGydLaQ8F1FmHisH4kXJMbHfvrnMB8oKepXEDvfC1aDF5wnjMfRfUjmcP4qL2Bh",
  "key8": "fQiqkyd88UCBzvfuegwjzC2bnDhMLRitNEnVfCJG8mAQ3Jment5bCSibS6bW6c8rKpV939qxXCnYFM1TPpBicFX",
  "key9": "33S3LdarDmE4YSiu7HHsx7uFAtx17Ch188q1XJkWEPGvh17M4whxtyCrjSUiFDAFWGrK9UfkCfPQ4TbhGBkMJJAj",
  "key10": "3fgsDFyWXkvSq6svVpWjEmMTiwESHWTY8HHpdp9e6YNuZxt9KrizCMnmPgzLatnvUHp4SiAMuXdHXKyzHx7NSkzX",
  "key11": "5SkbXKUyhTrBM885yR121sd4LgzspvkM4hVyakyGcziAx55q4oAeu67TDXvt9SwiRiNVnJAUbajm6dVuS8mSS1TZ",
  "key12": "5cTSwXst8Y8VdfHGmYKZN4h34nHnkuvUszXVXBrA9qrtEpH7ToktQN77sfCe5z6Tj8xFDaKNK47iVG5XuGn9EnXn",
  "key13": "4HeF17N4DwqFiDNysXNxKcw9QMriaZuvokQcdZBZxCRyE4bFERoqGwDNWpv3LZhr1jMLWwjNfHT3L4ELaUheTjfz",
  "key14": "25P4SeiZp6oEJZgvfv4XsPySUbqg9jsC6GTyKvVmq5Zh9Lo8cxtTAUEky4LLw35PDF8CdEg8255vwMDhqcB4ED68",
  "key15": "3P4uvqAcZQpuJ36XufknHJnRiuH1bn3L3otjNYThDLY6qwdaPYN7aRKWdwH66Dq7uXUnabmtMtvXgHhvyZTvLtnX",
  "key16": "58xCZNZVmL5vwco8E7PUxvuxBURZ5VYkkoFh75EHnJDjETpTo9BxpPaogVyaaQ3bVnfSouG8dSuGsVCKgBsm69DE",
  "key17": "5BLYnx8BDi1yJcDuo6xwf2qgGiNzf7nxq1wj8H6KrUJbgZgu6H2bpPaqz3znagqPk2WC1wmTiMAVzkGKpZ5F1HSp",
  "key18": "4dbUB6ffE5v6Rua9ViBjDpAibMmmsepDYaugA7vRRmJoiU3YMFKZKdMHwg8jV6yiwB3hDDVtAxhUk5f9G3RdNnve",
  "key19": "K9eN3zV7oUT8riK9AwUXpePVvSJFuEwz1swodMwDicBky9Mm7uro7guDiKDZCt1wCcAFvK569nsg92trnXtAvzT",
  "key20": "4hEYx4Y9ML3qWuNJPXUwrJzRNvCYp1PehTuZcfAF1GDuD56v3tCFu3mDRB8b4MCiyk7JXetF1FLaz58Bo2yzs71f",
  "key21": "5c6cVD4dLUtYtZyZn9XpJiwuUhYwZ9DyhaEsXcq1QGrn3AstReWjXfvQpn6JePoyJV9YTqVdzqxAkxA4AAqedpen",
  "key22": "3uLenq5r75K9ZHHguSuK1RJyzQHvcXHqZTKK8DmivbmXsgPMewKe9fTp3jovVAfQYzdmPxNnsYWVgEdNE9xWLEbG",
  "key23": "2AuAmfJhu7Qkt6EHc6t16VaRd8AjDDPf8S737zieat72wVFouferVeD98eidVE78fYujAcxvZS8cmMLQzR8yjfwM",
  "key24": "3Jd5r4AwyUuTqx8oRxriUeo8AKtfHVuePRv1HmRK4kMLsEe4q9SGLQ6MxQum1q3f1CsJYobiqAgTymUZBYVKS3zS",
  "key25": "4Su6Qg8ZitF2iLPph6P6x4tHrBsmV7uS3H7i5tFH7Rdhya1VfwwQToNWK3grRVk94pffHuRnGXa91UJTkDcFjM3h",
  "key26": "VvUZk9f4mtPfh5Vy8aimSCQnbSN5RkNh33Hhxt8hdMe8qNbFmBbLhPSRqsLk7ci5woNn7KZ9jcicUafQZcyibLY",
  "key27": "4FiCGeYEP4BM1QsWffmrgQPpeYcbdGgddUdLtx91SgzzmMcGBN6iekPrQvd1guyWhyng5jzJjwECH68SK1PKQroa",
  "key28": "5Zgzhrk5ZaTm4eVZrKsHb5heShT54viVdcksVTdA6CAuFzQ1a14ft8rBjxdMLaoQCxafcX9Q1LppFP837seoYrKX",
  "key29": "27Pz16r9ugnKoq9id595NjvZErMWqpaFJVcz8sajD7jzbWDho7CZGPMatf3LV1KJbxizLKfxvdRNj2yafSYtRopU",
  "key30": "3ZjjSGoAvpc2uoEJHvqZB2kxJbAXRh8Z36c5QCE8tCLHqLcyJokrYLt4yoNMm6sqCXsNqkAHy1z9MRzNC3dPcyFW",
  "key31": "4Wse1Rp1Nk26ZUSM7G1SQFtUe7GipCF8NgSyGqxs6tRiz8J9GjH9DeGeqCjyc6bPThxnTsEjvtHLNmwYm77YnaPn",
  "key32": "4VmE7MHJE6y1v3zdnTfR6XbA7anAWFh3yimxFTXaaM86uYndCSApvo7gmy9knuo27MsmxQFD7wqQskKBR43at6c1",
  "key33": "5Yj5gkGQ7WkV4R7YNLNLXmye4EErMYzidfVEuQYFkSv3Hd3QVPKqTNFHRa3TM6mFcTwn3mZUW5h4iGuzCPbYxhBC",
  "key34": "46ALhHVNHrPHci6kP2mnpY3GDdDDSGzfwdaKw4XcyphYEyez7NEb9Rd5rMh6HxT1kUpSxxDW6jjHokp3kjLMhhXf",
  "key35": "NfMh9yoaYv6WWGUk3oN5whsXo1XctftFXPpjBCZKKVnBFTTfpG5a4AiVebGQ4m6SQPNV31r2auSogZwBgRCa8Yg",
  "key36": "2j9yQFutNzMMDNJD9yvyuxjEeXX645bdz2rQMqyh5aasYsuhx5ABKd86BrTFhVsdWK3o19QhLPcPbGHGj4jiudfN",
  "key37": "wCExc3qFSUvMVvsX8Lc8FVeKyZreybXTu2fGv1BSpGktCn8GomJgYMVb6xGzQ8jNUsLdtFAbyEAZAudJMMCRQrw",
  "key38": "uNhTLtx9RkreWxE5TF1mfXCbLhNfZtcREx5vqyw9Fj7moBJhQony9jeDw8cRaYecFGJ9dowVyB2hUT8k3zd6ZLG",
  "key39": "2CkSnvQShSTW6rQTWawVcjma6wLbSzCXjyWR4FMqeGLMgDwaf3zk2LeCs9PE7b9shkkfwgTVjhWuRffaUHMK2Lt7",
  "key40": "uvvG8xW7C4puogjmBKq7ZcgYeTUPLEPTAnHoEh74ttqmzZjiLHXWKXUwkYC5epbKNaGPkgwg5muHXoBRd99qy7W",
  "key41": "GN1Sn6TDEXrp8zWMbQKEiex7SmqxPFJJQjcNh7YzjNygNSr2WRL5WHdrtaXZU2JsVmQbHFt1MqPZzn6Bg6VAv9n",
  "key42": "2io12mvo4CTF4bkaogALxau2s3okFohB9MqfJa3smSzBvuzmCmnQXvuvdQ7qubzTvAygkC2DdUDFopnTzWHZw572",
  "key43": "U5LAHGXb9f1wBfTj71UBCTCVrHUYerL9jLkmMrDD1fZpGXKP34qQVqAVso1hix1nQ1L4DHRsjXLerhvfsuVjzCd",
  "key44": "2trtB7DZeJ5cCtPntkXEMxZWENbMLkbzWtMCiFSiSvrmjBy1H9oWQmyv22woBtgAqFAjz25oE6izpNuMZveN3w1Y"
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
