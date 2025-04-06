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
    "QPSAqywJB2fqsEJ94iDbArxKukNMvHGptZcwvi35EVLH2byYSndXBz4pL1JNTQk7dKwJ1BJ8SxMYPwgyhmPXijw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iumWqsXk4PDCZmcen1NpLSAM1RwUTgg9SAnpRNwxzLh13u3bzejQ9upa6xCEBgHzgYTx2xx4qDNKLq3agxNbAn7",
  "key1": "btGkUEmPvNhxnbai11YuZLU6LVM5XgsD94H9aEdSBxkikTP6C3GLgRFjpdR7QMY2USa1VWfjpBDYLvyzYxCkevi",
  "key2": "5Dg8QMupjm2ThjAJTN3Y4UX9imLVWTQzyrZUZrffnAXEqrULo9v7mZfvPWt6YaMHnav6TUDpozTssX28fENp7vf6",
  "key3": "4yT6XTHcT2eGFwZPNEYK9W6ruVmZyufsF49QAyfiru2Qi3TrBvXE17swX1pWM66qD1eXNe3hdg7kTKh8GmJMNduB",
  "key4": "5jiKtrTay41tQojrCGiLamJc48xNZ33cGs2BPmV1gyzcoKNFpdx4MaxNMiETR1eixqQ8aA7fKNeXAQJXk8tddNBM",
  "key5": "4JMpiNfEvw8CBqErCjjt9RJ7LznKzdqgeXptLnuvkG8P16uD59dHcSS4X68rpPNznRrv5JptExLTF8KsvUxz6msd",
  "key6": "4wGFRbsTivo81toaBQAWi3QkkiXNtTwQzmaJNGJ25LjNK7GaxwU3NmYKKDTkBNLyz3cBH9PEQWb282RwYrLsSZoJ",
  "key7": "5Qppj9t9TmM6MgxGhkUYdvZ8hZXiz8xEQYS827KMCpMqpUXoPHy67VmnPi6gVYo5PYGCVRpUGo7t35WySsozWsx6",
  "key8": "5TQdZi8BSj8p2Lpf1ngqKYkjXSovVFgCqpneqBgHK5ah7Jh1462b38BuruteDRYwP55RfYWPpGuTGaMmgamJBUG1",
  "key9": "2i31CAF8XEvJgv9xXmPohdX9wRmok8zm2meY8wc34xEo1rUQmFR8tdwFFM28beDJDjEWLqZSY13d6pNSrop18sYp",
  "key10": "3pFEvXvJozQ4vQvf3tRqodbyHEtv5r7YbquQF2EcUqbd482xFbYqvniV26yMQh4FcAYh5nxjApscuqB3Rfd7C3TY",
  "key11": "3ZLdsPqkMBovyQcZZVS4x2xpW4E4NWhQFYL88vsRbPBidaDFbHehjLjMzzgsGmcRXi3YdMhCh8GbgS3X8TvRnJYz",
  "key12": "5UwNnkMuuZJUSKbL1sVrmwowvo93sTf4m2H5fjfZmL1vgQdUm1syaBwUTkX6iPrnD2cfSaTEkSGfQ2AtDh3kwirJ",
  "key13": "5bJbcCJ46vMoK7zarhMfsFj9Mej4RpV9U2cRqBGYPdP8Bg4seuCQ7fDc1BrAjraeJUHvudfDm6n71r5rkfFHzGC9",
  "key14": "3HqKkbRTxpDTLxByQDuNBs9bf9oAJsXDxyXUYtJz5KW424LNup2MWT1LLoGP3AcZNKnjetmbPiu8nk1K84jea9vX",
  "key15": "UL9hWzaryUiTCXuEuY2J2veCFiBWRzFvhAbYEu8wiPSdBvy4q5GRk8tNtak3AYcGSt21oRB2kX95M9x2GV9HMAr",
  "key16": "3gKCdBXuHDrNp8PFhgjnqq1og5x9ETWMTgxFDJr2Mp8ZDqtjjXT4c9JV5M4SN2GbmR6AETud7QJ8cp7XGt9CKBYS",
  "key17": "LPXLuRCNoPvBx7HL4fT1Kd4pKpSxRJBCHVvyj5jeEYxrmv6WZaG9x5pPNTviM3KbX7Pus5g79dm672ydrHodsU9",
  "key18": "45MKAdcMnSzG3rbsAB5rU1Tv6SdZd71MaYTk4VL4BMi1Hu79CFjMYP3sBhZTwfspARJH6MwBoF8KC8BpNNEKktm3",
  "key19": "3VFxLnBnaNoUYNjiAWqXCsomY2pUCw5iLRbHtPij79ShWpVFTrBRS7aLh3ApwjwQsSHRZhp6J4zCHEg8ATjGSPgL",
  "key20": "4sTWBiCamKaTji3YkUEPgvcmcPLgtvU2s3GBDHkhuftPFr3gk8j5EFtqyEKnriWzkV2hhVfdCSUK5w7sLXFM5AU4",
  "key21": "5u7KDVWPGLz1U2ySaz1HQicbfrEEkZs56uFgt31aMSoKn4KhJgcMJ3Qk5mUcCYb2mqmmcNMZnBAzALjFNNB2yN3A",
  "key22": "43qgZK6wQD4VrtEvzaYpaoNbUTtoTqzeuPwXQJeKiQoscMywoGtQnJPdUCu8en1fXiLo1siYB7io58zvfg21X8GN",
  "key23": "2eSpTae6MPmHzSdjWNu3y4UsB5a2gNNjdn9MvBHw12jNLZ6nFtX3QsE3N11AJuurEiUpoULuiqj38pZf3x1s8bxj",
  "key24": "2aB7tq3SMvC3fciLwnyRjnGmT61SEReTFccZvgbSDdqC4xbVArog73wBoxb1Arj1XbVonEaCaKGAaESAuWEu6TDn",
  "key25": "gfVwZFq9wdf3L749Tmzv3i7WqjWESRrrZSWsDpRJvGv7vTgoscYSQsLPtQmqcpyCLiBbTLWwpqNmfKtjjRakRCK",
  "key26": "5NtX2T2Jzoq2mNDRG9q1wC4AZut3f6afnH6Vk7qRtxAdkVaTQdcx9e27ioZLQCnj6HYBcKEXmin8HnvQRoLEKzZR",
  "key27": "B1QdXY2ZN81n8ie5UcZ2b3EMBA131A5fKBvx6gACe3gBZ7RAZykWdY3qfEbtq9FBunk7RTB9ju6epDgDZbkYaHX",
  "key28": "sRmQJnQxvFVyEryB9aMMfSfYsxU56Ew7U96KvtkBtPjEdBCBeWR6o7qFM4YQpwKnboDHmQEFhPhpZeWXwweFigb",
  "key29": "4ex9RYTcBB1MNv3dzQpDDsgsw6tw75pSoZNh3x1c1LTRPVLirMN4GX2ZZatULHZ6pkE1Ln5gGcUeihZYwcNur7j1",
  "key30": "YUsCBhk6bktXHETEKb9bZ3eT4iPfooR2kNhQoE4TiMaMbLttZuSQ3gGAjRWDet5PhyXZQoWWV3i1DpMso53R4bn",
  "key31": "4jxVjZmCPq8xbNUNZ6GU3EwfrivBPPqZExLWPjhZPiDPcckpYjEv5qsJnarmVPHEFdd6Yjhd8dPhvB38QhqKgFWF",
  "key32": "2fwSVvykEguADFSfCcMxGrSAH1vNhDfmjqk946iXcVR79jstSFS7U13arZ38p4CmoF8xFJKqLtxt3Rb3KgyBdxy1",
  "key33": "4PsANZ1gsri23YTcZRUg2s4TSn3DhSigQqjx2kQsw8v3JHMYfrbh2uZcqrsQc9QwWq4a5TjK2XR1Yxn9peF2sMkW",
  "key34": "4VcePp5tbQRHCkMjFYLYZPyQNeqSCPDtVQfRBFmpFzVcF8nZkd4GPQktuqJAJcY8HBnAB5rS5QcLuoiDouRnJBu5",
  "key35": "3ozewVBgtLwhk8yXeWTR7pr715gLB49Z9i7H2asyz1pxKe6sJEyyW9TG5nHhq9FiUzMnKRcK1XhdztD64cAKJjSU",
  "key36": "5v5cFJ9m7NhUinSwEtgsbkBhNYM3w6rSqFukHRnXsFNxeivm7P7wZiKDFB3QEZQvsmJRRZ9FWGX2MX6bcNYHevNB",
  "key37": "3e2RVGN9h5SKdCUukF65NM75dFd8h18Xi9S1TFcEFBhKrvngHqTKKmULxB8Q975cKxmFjQgcDJ41mmtrHUHZaV2U",
  "key38": "5hTnC79bqvpCrHfjEvjMqh9iK8wDYnNJfJoxHcwbu48HNrtaByho4CS6xgPQEED6nFNwcZn92GKcZ1gPs8CyDKxG",
  "key39": "4HCv5zBNbgeGUvArRPE9tT1sn4mna6xgwbGXRctnffuuCUpBtJtEn5uq5rvmSQ7eHybt1AokaCK9jbVKPUhjfY6Q",
  "key40": "4pxKHRJZYGYAHaeMLKGhAfTekw3nVGePpFcBfJFqFzqBYpfrin6hk4UAeJwBVfQmUC7MvsTskiGMbG1qp7Dxe6te"
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
