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
    "3Aeo7Pmv1A1txkncKCKqT5na11md9bQXc1rGXyRSzQAz1paFyDPgajdXsr7yVxzY69Po7EtBzFyvUpTQ8CdfX2b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d969B8fKYWJe2CZXYy6b468DEx7bvuEHfiHz37J5tRogF65TU4U4XfHBEvMSnoQH6fpsydN1cpRCtDxChAVkngP",
  "key1": "5cJVPb4f9Rmfa6Gi9jJ9Vfc4ekY6Fa8BJwEaKJ1E8VYMkFMHoLruTd2szmGY49TRN6hKhYAS7yu27GHVMzVRJKCX",
  "key2": "qx6jz6xyBBuvaEd5AXNRQquyUAccgpJzcgDGh5kteCZB111my5TJxSZx8ghhinSZB3F6UNtaqWFnjGiuLC62jEB",
  "key3": "3pWnpKwtW7Ax6jfk68ak3BZ937tJzeqBxbhGhKrckDqnjo14Ao7DQ3Dyz1WqjDrLHixRGGLNYYeFe4U1MBmCFRDh",
  "key4": "2dSaqtX5nCP7LKCs6VDNHATryUavsQGCa8CUjNfzErvwaKBMXrvwGQfo2FGwhmqRuJj8Rbgwmc4DtgpB4L9zd4Er",
  "key5": "3rbp4oE4DKDj36MpEAGQjbcpw4WxU2F7eNjuwHe2yuQqcDme2seBhKK1V3qgeQWVuZWUHrTPc4L6YBggs51pCx5X",
  "key6": "fWgeWPAt7yzJ3aGu6acNfb4vbw5KtxcEnAZgu4Hy7BsGRbho4peXtGyYeXWDKFjHatitwMyZVgUxTgN2joU6UPj",
  "key7": "5N6XqrPaEZC3EF3sU9T5iXikvNrQYw4ptVY8PUKhxrA4PNK5SC45AoKCoPBksKL6uUR28crWNcnqTGvS5Mn6wqyA",
  "key8": "4xLUEz8MGXAECBxJfJqBzShPpXjSrQo6Do5s8HycRoiJxGzLDVGsTZfXZerWNU1wRRHfuKLZeyHp42VY3DikXnDp",
  "key9": "27y7mpsb9VXeVSoNAM3WbAEp1jrgv93satCJLvug1F77WAqLVCR956FewWvcKr75c24RwiQTSfKazXgoBu49y4J2",
  "key10": "2STdQrRAGdRSpoPyJSRTHum69o6AXbVFeg5yeUN7vTRqeeaSiN3RLvPMZPUh7zG4W2F8bdkqAhVdzKUUF2mRJ4bZ",
  "key11": "yta9bhHpgxqfMwVRNdaxr41QvMadP2HJijzXxe2d7SY85EP1Sv4c9TiQseaBvGTxHucKKJ6FziWr67WEhH6Lm1o",
  "key12": "58rHa9TJn4Zdkdzf9ZWMuyFrKKjgto9B7neegAuq5MxvHxSH18FKDENQScCShRSmvHrJZt33G4wudaVnir6x4HYB",
  "key13": "4yuuYoF48sc1vW9HJ7iTPWSqfuLCyY6oEw4mkXYEQqHAjG6zZMFfzyxZjTk1n5ufgf52n991zFx7X4Lbg1nq4rG7",
  "key14": "3vJVyMTHHFKbWyByu1oYfgN2WfqBgvRwP7gXVs1sXeHCMsmCBN7KY8amTDYxzCZUh11oxUaW4AAYEc4t3ENXAHtv",
  "key15": "4QpPZ9Cx67TTcEFiFbnFMjQxZ1cejy9mSzqU8Krcb5iHUS5QXi4C6JXYp7g652H9G7JVN7g75k4fZyuAWL8kYpzt",
  "key16": "3NbmfVHEvS3ZhGPz2pbqsYvTitH2mXpEow8sKrjq3fW2QCLReiiLpEnwYvnfRYgqV22A7j563up2i9rWrfrcyuy8",
  "key17": "4BJu3r7pWapRE1Kt8NtzjspsaCVDbTeeZjbsEPGyUQTd4LUAgUkGv31V7Gf7S7MQqgCCR48kqmpfvDScmLW4LwK3",
  "key18": "2B6WH1BWdzVbTTkm2Ge66yJpFbmvvQpUWXTgUiM6Eo1wfgz22w6zALeUQnEuMzEQ6srNdNYPV3v6Zayb9ibnTiqZ",
  "key19": "4YqRsjwoFcVsnB4faBhB8o27pL1pVUNt4bBPyzphK6jK1dQPqdGDfWaarrGBAWERaTy6YvehEbWwoyJEPtPCkGoC",
  "key20": "uzcY8QmPLpSNNQe37NMmbZZKJTC1GoefpNHUaBMv765XknospUDiHiZP1r9A4mkdRRho6DEE7XGyRSUodUugsCH",
  "key21": "o42xn9CnE45QeMcYwACcT3GutrvuQ4TQi1Y4rfmzHU2Tk6Cnm8y3ZDXeqvXisV2ZHvyGkNRNVau2fZtkdyGSoKS",
  "key22": "4EG9J4j7suhtJEr32xgDgDCYnRsDbKECWY6coezot739QHiNYoZGo16vosWUfq8NDyN7cr7ZRYdfqiCJphfUkaKx",
  "key23": "3M9d5uuYMaMwexbFHGPxwBkFHgiwNwMnmCUTTDtqY16nsNPHkFLkY3VrKAHBjMvJfePc9UK2GsaZKNtpFfYD5eer",
  "key24": "ntPRBt7iUJvim2eYTBxfrFBh3n9TtjaAKdUB7TxLsRqvpfQS8FEJJzESjhUcqhGWpU5Pq12ZGeMXdYdDLg44ZKh",
  "key25": "446J9midQaqsyUSR2zgajM9eEi6axhtrmvQezo5XsBBZpdDPqC6UaVrtAQYEgXyKCUbm27mJ15shzWEYPzgJngxK",
  "key26": "3yFBhPBVks6vGR6SegtnSHr5RUZq9YrfXZf5mFUXL5n5GAV1ycFCqtAuaVT5ULSgfU7BYyRK26jE6HThrvN4F43E",
  "key27": "542WvJoVZLJTfZ3pm67ev9fgtKY4rFnZwRG3sdsbhSswkRpjUskS9CtbUm6VtqM1h9AZLdXiEp1yRcGfUs5Su93d",
  "key28": "48vrEG4mjqBS4zS23zwZftR5oJmFqnbGEjTwnpZhkD4UYDgyhiHRx4M3GJPKsntrepjZTnJnpnxotKESJmY5uKA6",
  "key29": "36LCFRQ9HBLUbUEU76psHtM9wUuczU4kLF4PCqxBCHbsLp9pjhVjyDDbT3gEzcFremEgnwAcgNMChhsNvc8CruBN",
  "key30": "4iP3q6p9xAsNmKggjZ5aJdgqE8rAQo11xW8JWRGWHUuhoWBUQHyTT2JDdJETdtysnrdqnSoZMoAKoFfJyTrcTFKV"
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
