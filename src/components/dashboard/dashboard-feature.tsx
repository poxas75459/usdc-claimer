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
    "57RUJr1SsuoUxBCCnQ9iqcEuxRFnoXfUF9a4N7MkEX4c6JJJ8AnuLKzY4xXab1R6N8Q6BzSMMkz2NCLZKVgGtczP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9VFP7c6hBoUuiP4ajD5kR279PiAZVAu7aBQFbcwLBTFLFPeTpAU7R8iFc1akSdBHVCQfRmoACAh2kG4aB5TBcM",
  "key1": "RAd8a7VB4Z51cKKLAQFxE2XbREucXWForyUMcr3xtxp3r7e6ffoefVn7JZSztX992p1AGktFaBiiEpbpdXgYbF8",
  "key2": "5f9ue9CY5f8GswuK9DfNJCbHs9q1fucHechRLtLGYdwnjEsS5sT87PmyWCwerx3GH6B9b6swXhGFcbmEM8hocSna",
  "key3": "pF7vSp7FKmCo6X89PrftKYNLBAqvMVM1RvZ6bYijZQmXBhAaQxgec4e5QDbHw3ozrXV1BishQXTV7eSmwZan99j",
  "key4": "5qVtynavHRNCvZZzohYDX7t56tWxPH9h9V46AZpJozVKptzzHHkeZ6kCmwBLU9nnMk5KcXtqdHE3T9kyWRLcHp7h",
  "key5": "22qsHCYkLmgwRSpZ4YgSJ166krDJVoVCfy9U8wC1E3Fmb7w7MYRLbvVt4A5md6ZNq7RPT2ujavNiUb6qrBHti7fx",
  "key6": "3RD6sHU5iTcP2Usfj7rejFxFzkRjVKQFgCUnNYH4yFu1TdSWhomE56mSVL7U1dMn7q4YeeLFSFuHy6SDQrcdEkSX",
  "key7": "4L5TA3VTNqaLoJEyZibfagSiuFF8MftRwsXRdshC5mz3MANQ16UwTShCN6irJeJBfqDEMvfgQFJWfRS6tQms9D4Z",
  "key8": "341St2UnUBUumt8UCrHTvaFZpejdC6pxyY2X8BeFcvcuWuViCbWQ3TfiFgwUjH3sR1SQkXNfELAGqbN3oT9GmpaD",
  "key9": "35L6zLGsQCGwfXZB2pcXsTiZ9LF7Sz98qnGgHaQPHRVgS2MEZFkUFb2DGHJn8BW9ApAJqR8UX2pjoaK3JvNTocFT",
  "key10": "gTPQoy3mYPypieR6bpXjpCCczpEFzsz4Hv3yeu23dFefpzy4Hjo8E9MUARP3mLyx1wzxS1A4iG8HrFf3mAqGnQ1",
  "key11": "3hnSrunafrfhNnZfKYcjNh1RJUjJXW4eG9GE8hAEkwD6AsSj6kouTSjWsSHeMGtcvPK6R6rGrSyusuXrp5oTqXX1",
  "key12": "LgmfuJdASoQnQEyfeKPL4NFDPtFVd5uWiRxHj6DMAwje1U7qiz2q568fKSGUdiKAfvkHyeYf6wKdooBzuwWJxYk",
  "key13": "3dj1mCd5GCnTHrYp7uhMAbApQSv9qf9h7s647hz2Y17BXh5eh4QQ9kn2ApqzUAJVkN642eu4gz613XdSvUiKRYW1",
  "key14": "4WF3BtLcC8w1kco6tn3UmNnRn8Wpi1JMrMyNSZ89bJujAAKR5XqLUWrdxLVgMAXGRmM5tYEkBpacNkQFW7WYbTuU",
  "key15": "3kUyfwD5Tf6rLyqo1U9HxUnm82FBfLECp9MSZerFM3QyPCMj8QP1eWeXnJMtmhLmL6fMTpPNkMXDa1Qon7Wys8Yw",
  "key16": "Wnu66xaZ5D6FGgfWK3T9USMNEa6yxqWJJLoNoKpymA6AjUJMzoCp86o8XBepUJLT1xMikJ4uxkQm2W3S9Y4QK5c",
  "key17": "34yjRmSUn2gVCt4dDr6ryeqQVM8s5FBAhramM7BnjeNYHiRf2StqXsnM2pxT222n151434xLyG5Rxc9HUcy3m3hK",
  "key18": "22JmD2pjFsFtgRhwQ2PdFsDtFH3rpD1zJQTyQYQvm3tGRCjrwA8qHRLex6Ae38P1nbonGSfczvNnt1m4pBahCfL7",
  "key19": "ErVfyRcLNNhUnKiDZU2ZLWx68zkBXDLNqoD7s4aiF22M9ti2sVs7fcFj2Wa2KQHivLLyoWNxFPE5huRGRhkUtZ8",
  "key20": "4K987C7j9E7X6GTvd7V9kEufb37nuKjWKjxQV5UMidoEyMJsKjZ1m5MCw5zCVRHgHebNBYSfF7ehgTsWBvoVbMmR",
  "key21": "3uRHR4D9Mnx78rfQkJdS84AUGsVekcZcnQbw7ZzRqVgvXHQAK2ELK5fNKWNgAkA6wQdDDRDgTyAvjSBwqAkLR3hm",
  "key22": "4nzthcZTmvXCamUMsz9EmQiGwdXBeFTMU36S3xM54Z5V7MRfJVR9ayec5gSmFXhps1F1gHG1qWd63dGV6ANbU6w6",
  "key23": "3QKQmLydbjkHZSFcHiHZJ4wqPm3c6u8FEywX45cNvnNPCvgiXNzmxx1ymmyWTTC8e2NEHBCM9X1qf8D1zgxofEqC",
  "key24": "5hjmhSzWLGrgLnTYQMKtGRkHVtxFsr79Ygv6cr6CQyzzkrSTVmo63aXnuDtDbhuQG2SycbC8gzCD7MaUqD6QeHwQ",
  "key25": "4hs81GFUTgDX5Pe4CZnfJuQP7z6cUtrPnTmeZPXfnWTUQGJqyZZKvoxESue5UyGj1YnZQfEqFySZcjGdWqqXCdGy",
  "key26": "4YYPoiMEEeiGjWpXbhvLs9Eyso9FuQewrzwjiRyFkQ4ebCB1nqECkZzdR32JfV8iTFH4oWcUch2VaGGMvmN8J6g7",
  "key27": "5BaRbta6mbGfr2rdeierKhRCdukiR3DhpR5JDvDJ3WUVw3RfH86dcS8ZkWR75UPJqSgvVgLhCWDajZCihp159ZD5",
  "key28": "2Qk3EV6GcHhphjALfHAtxtvEZM5U7Bc95DWcg8mYd6YaEj26nadDxCJdjViUp3v4VF95sVsgiFZv7otd2pBbH8Rg"
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
