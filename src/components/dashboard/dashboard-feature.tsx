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
    "4gx4BTzhHTWm3ikw66HSJ5SAx2uP9uPZxfvjPFQxSmXrGPBJusmfGvSASqTbuMU9X68yJ8B4s7LLTcPPTpFqWX9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36XtJFwzEdhq1yZoxHk7Yj6C7AZvJCGBLyR6UN4HPenFrZEvx3BTBmSsDxxHGNxjWuyhN5yDEDQXfzgsVi23ZQX4",
  "key1": "43LZNuunChhXCPrkVFwdUuaabtcZBfGr8y4fyD7MeNSHgfUCXBJzeuNLh4NUFpfmNNK5rpfBSG15VjkUop9uG2iS",
  "key2": "X2QEEYFaMH8naWsejJy3zB1SqQsjcyrqTELDNAe7XeoRwcr2YXGgqmnZNaHAkSBiXyZzJexhBp4KGARjmES32Cx",
  "key3": "3kanTNbJsaS8nwnYYFUkGTCr8s46ZSZQMzyKt5Xbko4CAJiNg2AoyQowdZfV5fJQzUsc6LFjRBWTSc3iSjP58E8n",
  "key4": "28qpkKozBGGhFN1sZbig9mRa33z6sSr6RLR6eChx4FEVPVkXqXUaYx1KzohUUbcYUtjwHeNr7mnfnKpHnYNEvGHF",
  "key5": "5zW2oyE4Aj6rd5ttemTiKGUp5eyaCQHg2kbtYVk9Q2jdSJ91mD1KKEmAxBP8mbHJSQspWj1fgNv2RGAy1JgmtF3d",
  "key6": "2f1YYPS6VDaKyCkstgEAFTVPPo8ULvVetCGZG1zVM241gEB7bBB1rGvghENccZbF7ZH8pF1m1hqKvbecvWxfknur",
  "key7": "4uL7EpBMr1ZKtzQ5X4cyGMS39Jk5c21NedhuLZFfzqaBKnKbQNJASouieW7GE4mXh2D5aqXDyjjF22XMFotBHnR5",
  "key8": "qe31UJYvCUVDwGkz5RUNM41hqEfbxo1EXrrQEC9qrrD9HF845WkNtioAJkePChMRM6yTcis4ZJ36r37v2NQXxfu",
  "key9": "4aFRsUrLNNkeXrBXiPhJatUCVpkce3Znn59e68qihpuN2Der2uSrWxzBiC3gQuXe4ZFGwRNxuSFxWxjAhqt3NHKP",
  "key10": "3qdBCEJ7AfKoGG4CbVioUpWeWLeYSWPr2jjuCdhZiwV1S3s4hwUhvt2JUZrxaocng7JE4J7HXffKWGsKi53VZQ4G",
  "key11": "5HDKExRzmWL74KLSVVvfMzbcuaVSdHnzPSAWcpdy5RXkP4RPJebNoVQdVM18xcRvR6q9gvW4Lw5BTc3481vQ5zqv",
  "key12": "2mKi1HDTGNMhx4mjzaqBE1SftfXgwJZJhFREdfZvpzgymoHEynF8iCMELMeesYkHBKX12SYxfG6pF1yZ4cLFbRLe",
  "key13": "243zK785F1cTxdWuMsuFs9hVY89fvEqF8kdFhHZaP4dPbxNdoysoKjpnq8iE3UDLebuJdwhLYX3BzvYV5ZCS4igx",
  "key14": "uhpDwjENiar6rQNg3aYs7kf8UT95fWLhnzhB3kVuxJkANd9ehXZ3EKDTJgJA9J17f2c7HL1ZwL6p4bThiGgBkCG",
  "key15": "QKtGUnqtQXPF1ZeRTYicoKhZ5XJWFiCRXtric2gJtFXccyYw7vGkv4vcthpaYLNA9mGHKTiQCEk2mksCiBHvrZ9",
  "key16": "5dmTqT7iRDWX1ULNEwJk8WehQmN8szENwEMQypeXc6K5mme7DDZzHKTH2XeUsk9iDDYXUVnVnPfPR4LuUiu7PwxG",
  "key17": "21McPWk3bh9CshT29JsCr2wXA6LLwThVEcdGjcifWeKsEFDP35WHA59QMypja8Gs2uMKvymnMdfboZE3hNS36CaA",
  "key18": "2quJV89s8FMrjjUai4PJSi5Z8aL2UqSEnPHgE5htR8FJkv54kkCFmo12F8K25YMhb3UkzmMRMPTQruJGAbaBuKfd",
  "key19": "5SgNZ6mScKGtDcWre43s5kBmc5FzeEcpCtoa14RGn5EBYcNyRsHk1QsoMgRxEzS7QGMufjRJAGx6L4Ew95nWvN9E",
  "key20": "4DKNuYAWvrwC8r4wpac23KE6GDQw3ZKVeFJhzFz8mKQsVDgP7YwymXhHsNQ7kXxJcKgabN5ABZEGiViipuCSF9Cw",
  "key21": "4ychYHDL94EYMnQaXFamXoHnpyAcuqpPFfTVaWYTeUf8P57e72gc6wR1ReSKzrcFEntTr5rPvVe3caUUDgHwTGGD",
  "key22": "2y7RaU1SwtgM6srMW1xtwRiWQDDBXFoD7JBAsKWi2airr4LwYHpSzRzwfeFdQeii76vEVgdfieE9y8fZ4JywnvLt",
  "key23": "3ZFQdvEabPto6CCTZwSBwzH7qsPGbL9JN6vq1cymhQa2tnnFNEoLf2g2wNrxdqQH5cMEsqfNL3NECSPapFdV2wpA",
  "key24": "2poWwjbDuGg4F1xJRWDNVWAPZNCBn4NMk1C4Y3npQVjPQignUPguEbujaXVu4vGDFxf7FAbwgd54ia3jK8124ag6",
  "key25": "GQ7dfL4Vq6y5DzGd2DWbyM7JxoqoYe9DmVUvQ4yrfV5yn64u8ftBRkEuPaPoQwF8ANS8DmnjP2thS1287FaxELb",
  "key26": "2uzG3xtN5erRpMvJdsCqykXERNPnD5E7oudd3CLqS7Vx2C52tYofXJniZ2FGox5Ac1hrzJnPiqGwKiBgKFNSJRGF",
  "key27": "3GUNPM3dDU1qn8i6uTByPFTbaJe5ZqivbSWPz8aT4HcFR8T26CiQ6RMVtwoonRCeJb3Hji9wbsiYWtnFuq8sHZsi",
  "key28": "48fsw63xHKF6swzuag9vUSgytcu9BT7HdSeh2r1qw7KMxKmTgCU3C2dBcje5LShfBc1h3EerK8e7KoLK5hKxNXha",
  "key29": "4heXFWm2gf522Mz6eYsVUJGBPwStyJDgwqYbBFaDMXJkVSnbWpGyWaKpE3jm3CkkmtvUZErHfYWAFnPxHRZV5gNg",
  "key30": "67FDLRrSMWvaRNc9TnfNWfedYNZsQ7UdRWMgeG6unbNSgZ9YshbD1WkmgUpfX4UgfTYsGBioUfpg71HcucsVsmhH",
  "key31": "5SmNmBdVSfC9XMh87T4Zu8kaT23DrT4nBUAxc6Pz6DZKkTBY1ujsxxzcMVWBmDtVDZZWLuQk6HuGP9epMAsGWviZ",
  "key32": "FCmWHY9D32oPievCLZ95MxAyiVUeqBxJTPmbFh7oFnAmfQejqQPAWTstcEcx2Us8oRZM5vLkrpgdM8G3hvE4PdP",
  "key33": "3jAsrSpC4hJxyHme8dNC6rH1uUaELx5oqfpxtnbEwWKFyUvELFGcTKa4R6H5kmhL4DLjxdptTRsg3Ej6k8DD3fYW",
  "key34": "3ug81SUrqLPc8ZvWVFvtuzKrjDqqXXaFR4EFLkCxFThnvyQUfWyShQ6r7FKBoXA8KUtSsUvCcVE5z31ML8c9E2b",
  "key35": "4mv96oSDSbSkEkRArt82TDhwrxcqvvyDyCgeVNn4jRUscYkkSMYJFAW4ZkvZpuHCYGXZdD92qfJo5uUz3SQL2Aff",
  "key36": "3mpzX9JXZZhpD8h1PtxznYW1zAjnrgyYkSN9dvxu7yr6t8zvvfTWfVLrhKWRNnNQVKsbK2c9Ekuf2T6c9XZp5jdv",
  "key37": "ocvkLDSCqahXAbc1gPTapmm8rxewH22mvhAP4nWb631z7RUy5WUGWvxhvnuDb4TfdMfdSRvVKfpgYCAohHaLfBL",
  "key38": "4kF47EpPnxZbVDnRsNvEvDBFcmNKKiwPWrUrwi4TcmEMjbns4VxDo5mxHaNXuw6iPYCMGvQkYLQh1oXCXs92G8uY",
  "key39": "2maM1JQrp3EWTmfvsF1xxbnavFHnmmnZAz3DgpYAF9KzoQUS8mv5CBPcYPVGCww95vwR1AkortRJaAg7LtnemUZP",
  "key40": "3ycudtAz3V5V4gRdZu1B2XswH6WCdjeo36DEJtkR7yMFdvn7Q64bjeLzeYpqZTuDxAAXNCWcfAPeshrPhphMzx26",
  "key41": "2dcFf4vx3yBNoj9eUDfAE9aeyf84wRPEQaDqQHNx7KKdZ4CDdgcz6Uyv5KD6bBeLRfiCcwNE1X2aV13dgAtnwMS4",
  "key42": "3vYsCPHxnLenJrafqgPucYVAotivnbSj77xyxHv6TTpJsrx4z52rEWBACqBymCCdt1HhyAcWeFPjKY5AscwgXRXm",
  "key43": "4t6p1CRBqKAsRBAtBeT3NAEYBNJ6NQH6gPFxhpE1JiU5Q4D3nL7AK8xaFARwTAzdZDdx9g5mzJzNveRPky81bgKD",
  "key44": "6w7wwgyMSWc8UerYGTB6VB2MTKxe8LSu7gXNUL52UW2fXD3U9oMsKKqZVUcVuHCmxxMMiC3Kmuh5XYuEAMMi2eJ",
  "key45": "5HtAWgCXYbyc6Cb8HrHcZaEoA7vFVovxxD2Go4vBZkCW3r7LXcFXXdFyp2qywfJu6isg9wWDFN5N7GPdU6k5P9p3"
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
