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
    "nrNDJAX9VCBDnapeSVNwuLNK8f5vbJ26n439kEB1gnBC8gx22xkGkuW8Rn9rMsUmbVYSo7B3Su1xPPS3tDJQe6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S26Hi1TzLmcS4RTfpPnZyxPgto6VXgPdZMFPkKu8kM7f73vXzaqFh49JYUq3RG46x41RGxaFWaQLVVxVv7Q92ed",
  "key1": "3R582GxfzCVyqkvjqTUiKcoLXeNnVBHQFfNpyHHZfnUJio4W4GfaTgMiSqFP3sVEcAircSDiu1Xsk6NRQbqkVWDJ",
  "key2": "471jnnQSnX7hawGuqCrRo15fS7vRpdb5VSfqVFRHG3hKgg24toqmMpE4wJNxp2fj4iuML7WsFKxrvQmgAG3TqX1J",
  "key3": "5E5S1Qj9dpz96XE87TG6rMFGRy3StiCXPnt6bSVqyk8ievjdjs2ariqktP51M5JqgiKZkELAc2pA6gj1kYm5a4KM",
  "key4": "4GEaY5bMxyS1XPt8fqBLYvCxwnciZUexnjE99qFfPWU1HRoVkKTbe3mY4Bkk1H7ey65DjWTZ9KmQKRWQRbK2sPDu",
  "key5": "63NY2V7XNBbF26b63pezcbAfuY1EmHa3Svngm48m1BiDPyBE5HsaUMtgXHhmkiGwNtVpNzbPcZHkGXg4FbvLNZWq",
  "key6": "RqemdxzkoypictpTMTstswG91c8aFxQNrZKyBLnanrDXzHPyQC4SBmssofrfBK5NAwiocTkMcjYtaDZURBLBqM6",
  "key7": "4BgKAYHgnXWQqPQ8aDvjYSP8AHpvDaoxZRjTFeCroUpFsA7Ycrhiag7jsgDbXGZ8ZxVhApRqSsb4u9QDby768zVU",
  "key8": "5QPYiaendBiGFtxerNDouFd8QwWqajVb3yFNVpMz5zfEDcFFBJwRXqpinVhpHzigXK7JBsyVocYNdMt2sqAbz4AT",
  "key9": "5eNAGyrcPkScUofyyRGzPAKvSzhKeBrPN89qUxY8gSnxTcmfVaQ9tyJpD1gUG2JubGic19MzPk9rVUanvJWebbSy",
  "key10": "4cqK26H8G6HAFkgk3Aei3C5ipZNhdDoT8BNeTDNuciA55JzRWfnHL7Czo1Lu41AxDAbFdnGupBMvWWCcrXKupW3v",
  "key11": "4RMjVAyYv7YdNScpVXmJ2RL3MTDxsvVTcMiQqffUJRCSKxuLy4B7VWxWhRi3P8zXkwGhoGzoDqrg9tzJxs4Jegeh",
  "key12": "3GgkWBaFKFX9fUWHBqqzczuC8m8xKwnQeLwoCxs526rWVvCHf5XL4dCEVxeL9jCooDZLXNMsXJyUBCKce1z2bma2",
  "key13": "2SbKCa9MuVvUaXLKsj3jvyGn5nXftHmi4xcnmFADJpeHcgbkbRJA99x12PG6NWw9LS7uJZKavjyEhMtRnLYHpLoi",
  "key14": "3NhdeTyBBfaaspCDhoUmcbuYHv54RrDPHLVNXv2d2poPnF56U5aH34bCJpcacMryUd8GdzdjY6PDZf7oMixc1tSM",
  "key15": "4SZ6znEmvcmFidfBCTGuChJ8CkFmNrm7Fm34kjmKLkBTgaUBamgJW7B2FbNVon2HzwK1sbWTFgoSFMHzWMwfwZ96",
  "key16": "wqFXfdeWcjLFqwmk4MvvZEJ7UFY4jV9tEw2sTqr2PheG5BSsxtEuu6kNC1woucmeAJZNHL5t3hG8qZBc6yVgtxm",
  "key17": "4KncVNEkPftKnXqAmSe8roCk2ndapkNdqN4iZv6nKsN4U2EuKCMa4zXcTu9AxbsJWvVARUjoyZdxZqF7ySSeVRxU",
  "key18": "2j8LMX5ZEjKX9gD67XB8q8W1byTNmRV26P5zoAsNVDVuvDhTBQt6KCCDkUpboE6T5CZ79RhCWi7Fovs66NZd3dXT",
  "key19": "4TszUkvnnyFN4mtZZZbfRrmfxVbYDgZMKEK56UEovhrjcVXBSW6o9ueRoVTg5qffFpDX6yYaL9nNdbeLZC92K8Ez",
  "key20": "2r6EKokrCL6XydZrRgXeDbxLUzjjnNf7wHj32arad5apnfz652Xe65hnPCcQLB7gXztWQFpyhGV1aEGanct3De4b",
  "key21": "4Zxyf1ZQr9LquNfdpsLdForNkrj11Q2iEn1m7MBSWetqVTBLCPr8NdgmC6fS9ZB3egfzzUmAGWb4LPQqZbQAWugr",
  "key22": "EqCgi9191YNVWf3nELvCBhT7rnJN3F8q2kTi4WsZERmv4hHjeck1wdzmcibrDhXyJLWoNoPfYa1U83RMYjHEYUM",
  "key23": "3P8Liiuc9ay4nWysfce8rDPvGhCRxWEBSgmL1HwxTARg761UU9nPCxKFDwd5871saaoukkbLfuYidRXdukj8KB9f",
  "key24": "4wBY4wP6C5JmKBSXANqjMCzGo1b4of4LJizEhYMQUCgNR1VoZ1cwAYs7XSe3Fohy9cEeXf6iCsGqow12d4PqKXpd",
  "key25": "3FJvssDqsCZxHEziAcyLnKdbxhmWV6Az5M4je6niso32ShWHsXZVbtjqZSPPzFNpsHzgXjEXgwryoCcHMGKuH48Q",
  "key26": "4vZU6CgYTn8iDyoXF2Egxa3P2Rn2eKRaH7WoF588F6T5AfdZSMnSjxD2pa77Bygt3LpTsskZHduv22YB3shSvNt6",
  "key27": "2ztaZWSJM9oeh4FRXc16JeoxGg3kU9xouiA5Rkv3xGXuixBzS18u6qDFHBFd7AkGC8A8mVVq1UVtGK23xAMzAHtK",
  "key28": "34N7Hocgb9K4XK3P5ooMAZqKvnhyBPYpdfYLcczazVHbxourLE9dcLFkLZH3BNGYKHBt1bw2UQsfYV5TQErtskdE",
  "key29": "3wis4BDzDhdCpyk7hRRAkJ4Usa2nv44HWdhbbihyyUVwPgRTkW9LgEftTjcP6tevSMNUKaYHXyDvrd7bv7e2EBbD",
  "key30": "29MpnNZrhzaawNZZ8GMwnFhUr4n1ErHTSXnpMgyz4SFiEWWUFPc6pkCsiCEfTeD7ZV9XYeCGfn6aa43iF8Neuvi6",
  "key31": "3ZyH5CyYrrMas4K25rvHi1snJWfFqz9hMQVDpAefagmWFaVn9K6bFf2TmtjoYRCp8GbD6XWg5TZGtDx4Yhe7UUKQ",
  "key32": "VVLRN9dBNTCMbFUdibVGCUyit6CeDqYuBXUbzDPvRiUmuK1qPC6ztaPiJfrXYH1tyHUZzbJdKhsjPyrWR6fbs7i",
  "key33": "6r91Wg5PGSTzZtmLcjguitTu4jnhwDUd1Zw2pBV4Mn7UvrQ8EPa2N883D4PH2nJ4QFBT43bUU6XhDwnw4rLK9i7",
  "key34": "4zycJbZ3gRHaXxX8Dm1dta4jQHf7m84a1bgx9RuMrFg6JQCFwnbcXo3Y7dDeWPS8D3Vw9nMjopV5peb5jGDwnUVT",
  "key35": "4skEsjJ4b2L33v1ApAh8iHPaXnJDG3ZNGDN1hDDQ4TSfuU9TXtNh7iwJwJcHUDWB3GbpPiLn1UkTvUcNTsP85aoz",
  "key36": "2TAsycw3FZoXZ4bqyhUNJqD653u77UgXtvB2M3cagUeFDL5xAFVXvPZ7frm3eTa3VjAAVa518mJVN8z9wXZVBUEA",
  "key37": "5dmwEuXGHWfVu8zMidCHN3YT54vCRwhHNxtXrc8ntQvJAkPM1oRDmhKzHLFcipZMvLKFHerg7w173pY4eZd7Lh4g",
  "key38": "51YwUE7Ro2vLajspwMuMsmc2fwsQAx1GmA3NZu94FhTfpFjfeXuV93Af4LxA272cVqPbcbTRipJ1oWmYsPjQBXXJ",
  "key39": "31wy1xyXkkeCWaqmM26atLQyzyh1oG6n4bYkrVA6HDmLS761KHLTSC8KEgGXk1aZzyjbmwCDRN5UbLrqmtuN4idL",
  "key40": "54n4iu2zuzP7rhw4HXSmskc88RfVH1z3MnyazW68F4maFtdhqZuLwgEFgApt2nTrpQHq87qxx21VFKAKQZSAeqkV",
  "key41": "5Dgh9C1cHTdxKpynMhabmVJbDmaexZaY9iMvx9E6g5c72yX6yH5BUh7aLjbB4taG8tdRWNwz6cq3jP6C9v4z3C2r",
  "key42": "2hYozfYVuNybADSf1ATufV4bpXyXPCNcoWJw2wdbTdmTn5X2wPSQK51WQFi4G4XGqKVjrAZRkHZxRmkFJBQC9eGG",
  "key43": "4zTvkhgQV1PP5aNBhihiZEvzzZc7pj3Np2RNCw3VDpx2t5riVCoBp4DdgzU9yC9uwjJcvD2ghwiZw5hJe3xrJM3t",
  "key44": "424u7tF4nb9uPEdC7DSZcwz8ALQoFtnZ4mvNmexQSUaAViPW1bPeZ3xZHRsb6haePXhrj53qgbgS6Qqo25xNpiQx",
  "key45": "5E3yD7A2JbaDWDnsTsFd75AmZrXZdeF8nJbKR4cMfu9WzftsLw11tbxsq7KBehXBPojKA5ehCssbBReFjBNMSEcB",
  "key46": "UgwWtjhhNuLLh6aW75WUPHTddX5nLxHcaufD8SyRSZ3QiE4N6MdfmFsTmk9nRVQzSipTNSqFtVpWv3VVRcmZH6G",
  "key47": "T3EEKYVEew85cCDUq7DpKQ4RtXpXLiVSoM8pPaGwou2s3ep9HaNxvi1csK4xsgehQFXJC6S85bDd8DXYQpeAXYE",
  "key48": "5Nh54kFFfyTH14QeU2nny5RwuUQX8xK4bNfiLgzjVdVGuCku2yPVgCBexsm7BXdzvkjvaFZcDTuGjWkS2NvAMFHt",
  "key49": "kinzGNJnQ2G7HdgGtHEYQMDFv6jzWjUQSWnzbizXkiESKzHi2qvAC4o8G21VVFER2WhXkn9jTkNAgqknfAV2VQr"
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
