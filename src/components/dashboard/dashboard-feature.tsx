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
    "5S21vpcBcaXABwEDPiKmw6Pqy94BR5wmK4uDL1UtWjkEoAUVW24t53UuHD3sdyrmq3yaDUfXajZbjYybpPeUfvnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5WbvBbAKYE5JVJGTWdfgWhWrsMHfSZeJQ4kBVEJvfwp7ccryXLpCzSFPVG1xdqfBPck4GEFi9D6ahmMyaBUHXg",
  "key1": "zTvRK6aDdTBw6mbuzNJB1wzJEBzVEQXD1YsCMCVjHBYFtrVqVc7howVNCujYTmY2x3WXiXwNP6T4smHs2y4hGUY",
  "key2": "2C7B3pfbcwH5KnXEdN2kgGnKKWBU8e1tJRyNA7dbPjdQscEDerEujHncaAJWLReEPDaGQLsA9xdLBb6Hh2sYXVxh",
  "key3": "4SivFVeBSqpBrEnhQyM1DMYZ9Xb7BZQ6XZdjWFMjheSQcvQq1WTzddCXt5zi6Fdu14WNWrinjukrMrnBUybutu47",
  "key4": "3xRLJoe7ooYY9de3NMz7GMEPUMqPZ6kPLtwsjFTk7iPD2Huj8vXtrX7o5ywZXqz27QfWe4UMHWjBsWEwAupyJE1k",
  "key5": "4o3dHR33deKXZkiZEyCz4U2CR8wmS7q1rfpMiC8a4JmTByfcRF2UKtT6N7UNnqyfGbDXQFTyTJGfGbrLgX5exK8M",
  "key6": "UpdXWiPwr95C3p7nnoTrGkvPXtZTRDaTdQ4fHqU7HUyUy9VUipBEguoztvBGE1Bkk7oVSK9zSRXDCAHkNp62JFY",
  "key7": "471HzCnPmsFjVt3ajxCrAuX2B1aQ5rQn8R3VJ6kpZ2MRDtTvqjCcytokLZaN3Sm7ZuJwj3t1A225mAbpm8paSk51",
  "key8": "62W6H1AA2B9CtvqhB8ZLdVjbvap5CPXbCPvmFR1DW9iN7K6qkahYJ3kcrFcQv4R41abz5AuNnvYN4kCrzmd4GR1M",
  "key9": "35xE7zAF5hvfrDHbmhX6Ft3M8vTj1Lwgmbv5jQLG4ELtVaX2XV1kWa7K9kjBJ2nguykNfjt1w7bckKWmGp1c4Psk",
  "key10": "3nYgX9ZMamN4KCYmGCL4QzKZLpdkhzQDwRSFRLms4SBnsJXG3AYmoUtZFUv1v4mtRpa2Usb34UzNFhq6iViKwcHR",
  "key11": "HJu36dokdef5jxSoWjopQp2QZXfYJjzCYLubH1FNRLpb3p39Ni4PiCFG6AhmmsmtgEyfMQA3EqGkPfPDqQZDoVE",
  "key12": "48tpJ1wqGFyt8D35EnsrK3F6zqmhrmxqbyKhWXc9YqMWtnMpiSGkrmb47X4EbWy3o8iJ2z5GzEkEwS2CpmTFn5Ho",
  "key13": "2jcXEPjjXHgzyTUocKjSCA9CRyLgJiKW8JmiqsBbqKDUbwUsbYCqhPFrugcQVbysmT5GRNo9fhBVCxvdXEXPo8EP",
  "key14": "GKdU8rDBUMQCbC7LNiR3MxUkry3ngXswjpZCyM2DcVsQVf3Ht8F8RDavgif6ae5mxHkU5vp49hKHyepuFdDR7uB",
  "key15": "4796oJo5r8BUXCHE42udKwSUtP6CoTkb1pBLu5jCvjEcPoRZKECjqqPJULZ7uLHjDpwRzyZduqYUAnvUQTvnWxV5",
  "key16": "3kVh7vyL6t8zF8Y95sMpcBUvEompT9ETQRuP6btcsP5riESGtsvYJprXJL3HWgbyq5uC38KANXiPmr77T6ge83V1",
  "key17": "37hqyGvwYeEdqBB4ACkDMvqnTUB4iAdkjQwzKve3TycMFXymiSBrNWda9odejHD3h7X9WzFCYuFCvXKsxgVoPfWd",
  "key18": "38dpGKvfXp6BUeJJ1wrmLUXmThVzGfvYrvkL5qzwZ4iXyqeFuKM215kpzStMuBDJ5S3BsGGVBN2rTD8wGd7zTMhv",
  "key19": "4nKje83khGcWRDuQEGZAVk1mfEGLCwS6SYNxu8nKAS4t55wPMoVTnpSu2E4uFKaeeKda3jGu5awtmBpv3KvqVWTD",
  "key20": "5QkjVib9tz41Cv2v3HcC34Q3TY8XHTjSL6M9gxVsSADMMzi8KYmWoVUjWFZQZUuCdvaQwrbiE8g9XqUnww2ZLKbe",
  "key21": "2FvqxSjXvD1rND4Yz4J7ni43fKFjjQ1DjRkPo5rifKqiNiPfDg9XZe4WqgHLDy7LJZzfFJYGw7qRaSA7D7TSxTyZ",
  "key22": "5oiv5rSQ1ba29LLDPo7cdUp5Ex2XFtGL9aUgmDPQhpoTE9Vd4UaJDtabYZGLWUbnD5TAF7qX5iytdSfoATNkJsXP",
  "key23": "32MP4XvLGio4DPtKAyEXqqqQLu1BWxEWbCZVwCzFCr6oUFVrkXzN9fbkyjcxDAXfAg6fyD7hWWsEe5Zm5z3y2aBi",
  "key24": "zwtxpCdWaa853cjYCDJegfdSepCs4c1QbRRmkUZothUsiT8PRt8QRVWdf1D6wRcTwnZHF2vvc4bUwPfsmveMJAZ",
  "key25": "3CNUY525DjDw8C6TbCyt7KxkKBmip27BCtH6hMniqpJX2pCwaUXdPNCSCXXk3YM1zL9ptXLbjCDsjJFA5prKmbNp",
  "key26": "51oWAMKfr37Vya1m5gRUvEXy1dcfkz21DxX1TvugW7UjHEi7mc4DrgM1yKUZ3TfJQ9XW8PKM98G61zSErNWZyEdQ",
  "key27": "2ERADnVSBmgasovMPaNNnExXAfvni8xFRhsgMWoVAp7dEf36uS1zTbCHCksNpUoe1qdAbBGs2kqDViujVHbVHH1R",
  "key28": "5pS72ogfVTP1QYRAeVVduJfZknjRwkE6YCBgM9RMT6it6x7eZpDRQBpWYf3UX7vaCNPbTikmjfH53GAyvXXLfuZm",
  "key29": "aCFPXmP7n4xUid36kCZmuQzy69Eae6HmdxJ21W28HNobeaSBg5TsUgtkMfUW6yoLjaAC5wCeJZbeTJKt6rYnD2p",
  "key30": "3AnVBgcdRzSU6U3hUZ1CAmNCvFnSSZyrmVpxECngLkMbXc8om6cLgkLbz67qshdvA9HJUEWwiLV1EghF3BAiPVs4",
  "key31": "2CDJygQqEm9JsvF9anXak2yRyNv35y5bPHHdaZsFitq5hQ7xY5fiDumbRhAkCogEgDhopaqNJ4hpXUccmrNKBYE3",
  "key32": "4JtaBFxVZk5NJ7RPrZw9r1FmKhbJR9BLTN4xbZkYUMbBnkHMdCnio46vzkYTjVRJKVgux1ekSsowFoMB713y59qh",
  "key33": "31irQjZDwTdXTU4TJLsBWDfsK7iWttPyfD8wkrhM15JYZuhXwcDyV995Pczv7LJG2L17KNoSNVbQ8qG5yZLZ2ZJG"
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
