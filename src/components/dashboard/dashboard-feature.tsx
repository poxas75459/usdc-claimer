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
    "3hjV9FoeHw9EUEFbRHU3yWJXoAxtPybbECDAnTqrZUPc2LiTJq7w69dnVTkauwn6SJDaEZmDPnmKJCw5qBLw3iMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1bFve9rETApJBBQBeFuu6DCjtXaxHmppQ87hee3ctN1YfKZz6zNL4w5N2nkUjWHYaffYTiTKYCtoHeRLYib1rf",
  "key1": "3HbquT8ri6eMKRj7KyFVntc2Nhe6hMu4KPrXywZYR13y9mKpXrnWMBFANWvwd5BzGowuPSiunc7cTq5M5b2HuxR3",
  "key2": "2KwcB5iyQV16mTxEWz6TZ5eTWC5x7qxdRtueFoeGuXs4yBa3EweAYbsxZgba4A9zvYS7KcNV7NSZTjRZmwZsbWRM",
  "key3": "5hpzBTJNFukzZ3BEVQjRm5cyDjhjhEhQ9mm1ymTEAiU85zbizdx21sUDSTWP2b5iDc8hdgjvqugfVEB9DfV6GUwR",
  "key4": "5xTMbQEGfE6XyMky669WYYosEm8UYmSDkybmxhBkzjVf39tbxESKJpEJKPy7j2R4WNuUkCyRK9eM3SdwaCAZLZKN",
  "key5": "kpbqFgLbUi1zLMWhDDvykwpsVRR7Dv6TMVsCaPdpLihuBaqbqkkTCEdFn7JnCPE2XndqfMCebwocwbcGrKThW11",
  "key6": "578TkGVEqUHsHi68gkVFncBns1ZseNb625jHrf15DYDYaSAhpbicy2MZ5vTPX9oqbyJmaLAMUjkPQwB8vbmkERuJ",
  "key7": "3ULYur2WJT9eRowPjKhThR9S7JoXDdPaXRQnhGh1twwXYxDoQhF8TfgeFUfES1pcZvRB9gfDS9mEuytwQSkHthRE",
  "key8": "5XSDWw5M9fTaotidPqqjMuYty6zScJhWmwgtuJxfPhEz1WkApgepjLuLspZoapXHFrWu6mFhQUY5oRu4JoJCckDM",
  "key9": "3dJHaRBQnacTDjqjMsJAXVnATopwd9sNxGYoKTV48ix4nUHNohKXXV2pZYBRNem8RKPCecrGwW23XsXuS5zTHqck",
  "key10": "3QWuDCt4AsX9ZXWvmLXGRuPVUzbZ6DLNHmrFZZLPx28wDtzGNGUTMdcmbfeNi9wMaEkgXmxpokzooCH2MHK7rQJN",
  "key11": "4Ydovstc6h244bj9y7Sm4fniZ8i6xHqozURzZeAjTE6o87p5QWdYY12PX3EsnHfwmkF7trQdhv3DhTcR7sz6dF9e",
  "key12": "5JgspK5e14k4P5Nu3YycrZgkwvtSYvNkFYodREA8qkhj6yV3iYgT14U1A7zcftQAPQFPk8MgpW7xihAB1mQrok5",
  "key13": "38jSVEd3q7BCi9awG4asAXZwgCtH3XEgfFdMimbbZNERDZMb4kEFq8NEiS9uPjd1KSm6LNNUkQDtp716bM6nxeiW",
  "key14": "4JfcwP8DL9hhCwukhkYFqeCHepFC1kZAN5bYewn5c41Pr7CD4y9b2kAb9fgsewozzjENCBirVAAE8raHbgqx4ohG",
  "key15": "5ot4vrns9qmoxGtzUawmsPVo8fXcogGxBmFC7rzhJDVmkwFzRJdSqVJ4d99QSVwbxXdEJbEbHyAjx4ygZ7hkoS5A",
  "key16": "5VDXryS6taQaqU38z6AAvqQyewqMwKuXQFBHLdjWcxWQaj3AfMF7GrWBurkW2Rv8KnLUc9HTVdgfnUWmQBvZscYs",
  "key17": "3Cqz5CJAVpksD4hCgZzaqyKjUmZbisgd5ounqDosez7YghNu7qEGMVuygm43DPuBBzne7Er3DtBB1aiHjKSWHmXs",
  "key18": "4wriHNfPEYJQB7u2B4HfK7tqgtY7k2siWtkDjLXbayFH712nfepTbiDTQYAHypEe3pSF8tqDVw4F7duZFxyXstA2",
  "key19": "4S4NcAY66zcn662zrNDZVRgVzPfqGxcZATtpxxnarsJpicxrHvBjjwNC5es7WyUNBRuJwg5jySPyKoAv9UcG8DVV",
  "key20": "5dKhRM2gkhC3V7JBNxbzcoigP7tcbqmfJUobE1scj3zqBGjJAAgyBN62MRoC9Fum4NRXAE2rJsyJdBis7EkrJuN",
  "key21": "9BydeuNibDLGkDPjXiAgUy1gdivoEVKqFwg6G8RaFjyPhq9xrJ7GZgTPbY2jXFwPmUmC2cVAGPB2itYTifURsck",
  "key22": "5RKffuRyqNiNrr9GaTWgnwqfwa1NqPw6n3pRXqhjCjCkVtLXcg3t6MgkueWr7RM2xMBXoRZryeEUTCda4ga4NLQr",
  "key23": "46FLDTfM8SGHFVHoNpVikaYuWg1qkagM8ujbGsSkstQNxQ99vm3hcAY2Mrsyb1kriZBf7ubwx88NgoDmCMS63Abo",
  "key24": "5Mox4b3k61yxbdMKuQCxeTbS6JmnVa2ZTLemajfx1XtMaa8xmCoe3xXZhNMYuQEAiXbnS9dJWceCjaZ4FDkDN7q2",
  "key25": "2h48aHhfjj9JgkYjw16gFzSPMUiyJU8xNd1GGPLWoadmZVDZTvMzKdY42tVTkhBwtnHKedJBywgGQnnLvvoe1zse",
  "key26": "4RtByqoS9C7a9fivHqGtArK5k22C7CMH4v8FSG6X8druopgenkCnP9j31E72wTMfeH7zDst3RnXSRdo7EzEom4To"
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
