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
    "59yqZ6wn7zSf7A44rgtbeG84RT4UktVqFNEgmjPEWUhJz74SQtQ9rXVaSQQk4hxZyhJsK8ninVSduXXV88gsDzNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9cpbuNAPkVcArBwH61UX7ehgDQwF5fxhjAi4F7dogShbTi1YV8xwuxPYyJpVAJytN7WhXTSkBg4D6iYTP6G7rE",
  "key1": "24zhGye8mbfjptwVbnFhraPQpnDvNfugZ7WGVnJjiW6KojHKbDcM5Jfz7Fi6Uk16tNMfyKpxbyg2QQJMnuYMUAHo",
  "key2": "2bAP9V74FJT15QrTeFh4MPwnr4ZYVbgX2rN1RcwcEGiju4GAfyR4tQx4sh26dmF4Xo6ms6kmbZtNdAy9Nbab6fM3",
  "key3": "5Us778ZSVnEeViXmmHDxAfEDsSmHQnnymabDYwhhV9FTxYQm5uAsE6dfrUPsSpnrE8ycCkucwgxg6j2kjfM7Cta4",
  "key4": "4XSxbmxeeTA6MCQief7t3XrL1ZZK2dssgzkdZ3imMNzrGNaxwHDToF63Wv6nEvsuTZ6S1f1C8ai7PLcFkwahZzNd",
  "key5": "42YxTRJXRCZ6G9RRpszw4HKGF8fFStnHvW5HuHFQ3A7utR2oAtfegvHoPErFZaVsC5RJUEcWAYZtB51exo34BjkG",
  "key6": "33xKfCNQoDFFp8nybo58adsemXk1okNLS89kSsmR3rJHYz1b9L6Y7vXCLwY3VnwgoTSFG4f1Wbii894wZNteC9x7",
  "key7": "e6mnAT38GRcqsWnLX5JTCP8ak7VPesgXqyjNwuwtbYTceDAbyq4HoDLyuAxNpdW9peTDTYPvbzg6J3TfzwWsor9",
  "key8": "67ejeHec9whB82WezdYZ7qo6pQDJAzgE7Wozey1CM8bXFJteT2DANswKiYgAqXkUneoyEp6zab5QP11vTrxRqrxb",
  "key9": "4D4Y3Vq5DqVX2Ez9XULjwWwBhDXR2yq4LkwNiSJMjbVdK8qNCyxSWLzT5xRQfwsRfAsCHedbaT8hFRTjoZ9cdqen",
  "key10": "5x7w2frnnw12yxCjkEbv8THAAHcLiSHnFzvhkU1sj2vAL1UMBA5qDqSk6FuqF8hXWG1Nmud35QT1mN4sYaQsMBfc",
  "key11": "2GDuamdFLdvvqikUuKRYebS1T3VPKwopLS5g5BPjNDPzZUuvERrZsNbjdBFY9Bd7Fh4moFmRyUW9tRG2PtjiLDfR",
  "key12": "3qEF6G4h1ymMsSbjG4EhDHoPD6pBTSxWP6QYSqToei3XTE8Qa8knyFsg3BSAY6E64Keks9g4wPVdQpiNMVoDYLZY",
  "key13": "2uZxWCRjpoSdLuNh8FeUyNgvqVuQVh4uPW6bAJzbePmDpWw36iSBqzEFeXLtJrm2VGLYnMbwwHCZxpCxhRSh3Hz",
  "key14": "4YM36avUeEPFyi4qdRTTkwcwxbRi4oPDxKierMFMfBtXnzws6g56GhvK6b1Ns2xd8H3PJ1Nuk1mmXHz4XQYExHDw",
  "key15": "4dQvGVBhbBbhU9zTXnBqQfGdPvZPgg2rsXLEdYykiX2BoU3RAktrnEm4NvV17M9B369MAtjtb5fzz7oMda1FBq8j",
  "key16": "3wCVtPLCyzo98qP63aCCyMD64HmDkdSyeBmoocMnDQyuRZ7GYBGn83Ku92uwjLnLeafsf2fHWhPQ67XMFRho6UhW",
  "key17": "KQazokG8nyLQgbW5aneq1kGvGg4ewLhQw15a4maSzwE8FCx94HptWgjfWMA5dgUArnAiRFpDtwFXQsJvnevRisS",
  "key18": "33Df5TNDadgD8tUeNRBVqdZm9ouZypfA2eAnbbV1ToeDvwJ48i1xxZ99H4ARz46otGe5yshAKHqnrqhcSJKzGT1q",
  "key19": "5HRcFypFfZ83fyUKZDnWE6Kpri8Hvr4kLFac7TWfZBroqe3Z3RPY4E7urR3EMPHjx5F6j5yQnrmvHBdPZNjA9bsY",
  "key20": "5BrhY2SdEkLuSy18Fahco7X27todrQ2W8LWgHQV1mLHhfgXoSYAH1EAXDp7QVmXKnrkjLksHDqTM2LrFWAwxrFfJ",
  "key21": "2xMVryykYVmNwYzX8j3nuHc5eR539xedMXh3BJYvyskE4DH9RaGRYjrDmYnyaSQwWeECnVx4FwP5jVkoG8obX3Di",
  "key22": "4x1s3PXiW3aUUEJsL2Xvd54TmsL6T4kS8w1LtcFgdAMdZcwwxmvXgygQKqm2KaZE6d4TBZr1Up11Tewzi1368pza",
  "key23": "34KaNEzXKqpiit15X1oxrE7hpPXYAE8mcPpuf827LD1noErdewbqzwpNmGUPrmF1yY3TiSJe1Y7dUUQFVgK57JFL",
  "key24": "zJxBGytPExV4wb6RNeGKtw8JWe3FTkZdPx5L729PMbXcBWLBdcv4EBoTsv9mtPKot1jBHxLH3wJwrpnCuBnbtm1",
  "key25": "672eASKhJoKEz4vr9TifToPDzwTxhDpdE5kdULmSNi27UVLnVSFwv6XouQukLhQ9sAm3pd1AfBHhuw5RqPLRFKkc",
  "key26": "4fsUKD26RRwH5QYhutmeqPrmDXo9sbL4x1do3J248JMd5brdVbjiwqQz5PdfDLdNucTxzfUZPyf9zZiYDZoQdiJu",
  "key27": "214Z725JpLh8wNFazU42v1K8tHjMqndCj87U7uhATWQ6RQKMNVX3VhPbVHtKkNxRYtcitXRsKLRDDAka6xcxptT9",
  "key28": "5r1E1q6VatyL6AXWVWEDbSXrf3HLKUb4ZAnhyYKcmrykyMnPPaPtVAgRoqGtGSnQrwr73H46z4TWY2gqKUxWv6Wg",
  "key29": "3vh9rJNFutAmpnEzAHim6D2E5Jp61YhCh2Uy6Gh9WKNwDKAmDPcSMK7gttGTY34fymcBJGGcDVheLtSWTuKZcZqg",
  "key30": "6FCZN9c8TofHt3KSj6PGxD78uphs6zQHQSPnwnrfdV69pHYhvPY942GWx972TJ3ows9X1oUFxtweWDMTCk3XQ32",
  "key31": "5CoVyL4ntTEVDeHkBsGBfkQxRWco1RTZyL4jhbKtfH45C3N6hmmxJ5DRH6PrdxvsN2NBB8MGeDY4bWxQ2VgraYDG",
  "key32": "4RdCm3fWJwNtqwsfG5hDjafJFbJhKiAghaaaNyoVVSdUyDrVETVgeufSk4hQukiJhLGoy38H2ty4CNCGxEhwfa2b",
  "key33": "pQ6QogU2iCeCPaL3gFRYv6ZSmdKj26m1TuAxx1Mwidu2Cd1R5C7Nz28BbKGxCDdqrzxMh9xvdZm8QrQkqa41fWu",
  "key34": "3LTZfYCRq1qCBzFmJJMxmsUHwkFpJACPCS5mYrg5LddAUztndhAaLJDfgxj2eGSTUb5gvLRd9p6AZBLwLLmxRKmu",
  "key35": "4KwjG23NQ92VpqQU9HotZ1WfunwLkjwX2baunFDW936fzVAhrMW2qTWZ2QtdHzLDvwZPH3ik5VbD1nmL2jPifmry",
  "key36": "3YppBuw5ykc7iYjvHvvb1ohis4QkzYdcLAWTZonuaaj6DMHGn1dbzDKB74Xcyq9uzRfYF8QTYnRHbokjc2d5foRd",
  "key37": "ggZ9dxTFpG5BT6d6VmXdQKUzR8iuXkfJwe7f7kJrFC4HuijRqRAWn4w7twHi1XVXCBXuBaw7nXCRHqJ3FmbNbZ6",
  "key38": "F6LSgqjy9hUXtscV6y4dEupAPuJHpnot69ytRpEFwYJTocDKkCKT45oLwTQhqwR2zsj8ASqKK3mWZBQH2EQFR8V",
  "key39": "2fsBWUsHjVmEHD3918CKfTQqVJvnxKcnCuXfYbSsCW8bm7zrsq6gr2DwnGQPEeHyhjomtujhnfEwLtwrFVGEb7Rq"
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
