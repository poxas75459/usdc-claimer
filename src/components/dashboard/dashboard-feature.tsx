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
    "2Crh3RDe5dWL27azoJ8f5ZYQXUXWuAGpU7KeVUgimEbhhiJKW2va2k2MjEMqZDdA3Gh6tfVuUjAZhD2iEHPDUaP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgdChZziE1qXGtLf1sBxZF4XcVG3Ysn6ciZwCx5PvxLMW4SoTssxHN3QgUG4vo5FK9WFgu5xLVJK9FGGb1BBWCe",
  "key1": "V5yvNBoDKHP3hit5cgxEghGZHCZ831srsJTxDZsXPFTy7nj7aSsx6ypD3TbX1UNgU7SQnEMqY2Dj84ZUgGNvZtd",
  "key2": "5yURidN7jqaqRTYTWYCLPyGr5SMZ2Lpm185QhrZY53Ls9mpHfHcu7Rq6rUWLnDkdPuj2piP17GCf1AB2vGhU9LTw",
  "key3": "4emaTv6FCjXPrLuBVsh79jUqraratfujGu2KKmrQvpmMiPH7iwSBt9HowgKebtX2cRSbnpiLd1x2Zz7J4ArqKPhQ",
  "key4": "3e8RmpPAGGsfgvZaX4ghSULvrCVmqggQwRKzB2zYQqpG4KzK8QEPNeAyqmk9jsxB6MRfR1PpReHkfbfxGuvQYw6G",
  "key5": "arW6LWSLchmtoW5GABFAveYgeaV3F2oyaYfkcqddoLeV8WNPwXouGFaaYvLJGSNwTcRPQY8zP86ppNUF5etCkAG",
  "key6": "xHwsp6mgYGM2krLC1xRnsJ1civLejvii8KQgUtsFKK1qjAfX4rpyAPAZgM8N4Lbtg69Fj7v62M2oakp4UARAqMT",
  "key7": "25pvpipnvYMnTpiECcVXST5WUeKtCTeGX6Lw2NDASWsNhEtjrghHaEdHgwEMCujYcJzGsCn4AaasYDBWDTX9j1wA",
  "key8": "GwrFbmHVWuYESQWsNf7RfZzdga8q1DL3MCNzmUeXRzcfnUCGNWrjLV1AXbQrZ4zxbiArDHS57mCTwbVDJMSjSut",
  "key9": "4QW2KtiQXZfA21VquYd8DC6Su1KbtZpyjY3igFFCH21jAgdruQ7rTjpm7B1JhqWuyAdGHxqEy2yk9pKpAAxYTypy",
  "key10": "4PFqViNYFcCb7UnQRUPyk69S279ciopJZ7BsY6h7fMqwRjDqErMM9yoBGUtcyT7LwcMw8dYq7M3XxojHHJnPFgSK",
  "key11": "21j6SiTjKUk5aQP5yhxhkaoEde5TqNhfv462TT7he7H8fdPiTpJg4PDj2M4iMLT4X3yHLJxJ7mjj7Cc2Nxw223BS",
  "key12": "2dwtZSyx5S4SgFBvdUyR31Jjzdk9JHWarNGTseKrLNgN9v6GDBGiVS3WFUftdvRiEbfUaX3kbhnBkGDwvtTxTtX6",
  "key13": "2zPrPdXQL9As97WVu4ZJPviccjXXwA1rkRFVmzKWr3xkShXQAv5yUykvnYnHqS1LHubhoFfLKgfJi65YFHCJoydP",
  "key14": "2pRVhEWf36d2Jop5KsXDtJUv3MGUK1KU9r1rLTHkSQeWsbzkQht2T4znQDcTrV4KfkEkRHC9pHSZe19GHFJwVTck",
  "key15": "3dCws2UecGaqkAoeSCwL7TmbBNKJPzBy8gY7K9rfmHxXNg29mYDHVUiZS8w4xP4cDHAbvezjAjjmxHgLPHrUqg5N",
  "key16": "3viwYoKVNz25fR2nDwP1KiWQ51jFN3k2B2nwTu7G7mSjVBk7zuE46bwCwDajb4tNS9F1YrtjMtHBxA1dShrr26eJ",
  "key17": "534xkjpzmV3FVZSP9udU9gxpbkDsFLSPWXV7qFtcX2AiCQMj3FS4Dhu9RUF7G7Vim2piC7FgqqfF5P7rBtqv662v",
  "key18": "2mUPhGihjVeGThDhXr8ctqFSuUKnyizKL4R89yrEizzRecHtAB95kVU5YhgEJophCMHsPDymRjnFkeY9GvSbwxZP",
  "key19": "3X9jm7bLqRJLsAcHWBE7K4GL5hYfuHHgxHEC9nA3RK5LpUExx23PJxiaTG1LBwvcsYSAVfgSNEyZTnmh89Rffq4E",
  "key20": "2WiaMwAaviJH1LtBT5z8KWP74JzqjqdJcRZCdfFpNvuPzkmvke6Nq6Qqy3YKBukxWbuJEMpLtTrtHizjBnsvCAvF",
  "key21": "Fx1SLuqeiDk632Ne2oc8AJMC32tVh4mdgY4EiDoVZ2TJik6v3MFA61PUTe28AGtpcWu4Cw9rGvb73BYAbHubULb",
  "key22": "2PHLCP4DReDsFz5CVHQt9pKvyc8suYH266AAriv1nroC9YLt5fTS7Jo3meE7ewfT4YzYxFXD1452PnRqvDVq6MjJ",
  "key23": "2xip1mVGifP31prbra9Z3RHYoiwUsPQV8nusTmbsssHuxMtHeZF6z3qnYx5juEW5oqqXKd1PGmf9K4vfxznARZgL",
  "key24": "3Ev9p8ghvsGQUKDxoCqjfcezwjgvvkWiPtriSmqB9HZVksCg7ETNVQXC8uQUKbwAHDXuk68PE3WHtvFqCYgHpnvm",
  "key25": "628zrzntoWHH97ETr3vtW78KorCZZBmWDScJ92AjuNWGc1U2p9JSTNa8N5M2JK8cDj5AmDPgqhmeDAAkq8KDZr5L",
  "key26": "2PDHzciBHQzA5TsbwwxLSyGyWF7q2sts8XSefdNEogTCJtxTj4wiMJXtMJcg6EjshjHjRhu5Bk82iANMQzEynPix",
  "key27": "5TM3oiFeYRBq8gKmF1bpegSwHm78jQGoADpby7S57sxxkb5uPVNZv2pKdLELbaC9QDzBDrPJVMwqtNrkU1ffJPJE",
  "key28": "mBkrbV5uAKYuEo9J7692E6pckXeU9ELdAyC4cHn2F9SLL4aH7B1NycMM8Q5VJLuYBVWL8zxVTJKyHhivAry2mzD",
  "key29": "2JFHdVd9Yq4Ejdch2pJ3AGVpBwg6JoQbV1oCCYcgYuF9RsTuitQ1VK9M7W9BEu1mZxtF3dZvu3vreuY8jgpUpRpF",
  "key30": "31nhczUC6oYDjhUw4P6gbFtnbDh3wDKL9qibGBgELEdwr79FF8jifjpqiTE2pTu1cokat6D8bnJToVg4qVUtkpQ8",
  "key31": "4Yy9ZinH82n4PPQ3SPTM8q2x99vbJTuF4UtMPvCLbd6qawrizb7tcGuGAEw7WhbLoUTRsAqmWhkHfC3ckqxLGMak",
  "key32": "5NK8kqPnQFytFUj4agNVBUKAoREgCberpx8ca6vA5cPxbbhK7UVkaNJekbfXG4rpPujVcW8QwNbY1LsGUhMMmPaw",
  "key33": "611dFjVgqEyK5BDJc2eu5ZRxqKpzCdwbHpnWWmb2RaatrMruH4GhdgJrrKPYKbnbpuZAJR6Dj6iXNAfCgbiKj2dm",
  "key34": "Xe2keMStaLpisU4jb1wRNEy5H6xvJPQeQSNpwZ3nDEBNNCtst6xfdyy7RXhcoSftfSF61MnTdTU7cbRXWVX3h62",
  "key35": "4B3iJQ9cywsfzSFD6pWmBS4j5W2zzVAx5yxEbGhLqqVsj96sGdYhahTrZ2DKbUS4gRXTub3yBXRQAHaSwZK5Hhwe",
  "key36": "5K1xDjgwh3kozMeSFyjkTJKVnMFHiFmEneddDVvUPj1yTJbj9RYs1HYzr8qmyiRooYxJnmLcKzBCbkQ1MQMK3ww3",
  "key37": "2G3TkRnvVJA57qjJwpKq3bn7eei1kKvyhPSBmSrCc9AAriQArATWc6vi6HkrcA6wznvZvkuZUjDKXqBGrhJsV6gx",
  "key38": "2JMBxwEwDpiMjESv1i6yheLH465iShQNDYmhpxv3XFcWv2ZmGdzoMi9RyVv9esf9rJP6breUk2KvsXG4vzmpzka2",
  "key39": "CHEFJFHHu2FVED6h489zcG8Lz6fkLEYGZNaFz4ypepWdpWGGLJeqnB3dT5Gf7PjXqNc3WYeynCqDqu7JrQ3v3do",
  "key40": "4STuuG8c5sx8hBR8yyRD9bVecrZhDzoT7UyHXyBy98PCWCj9AnTGaWnkdRMbXhM8JkYT8cTZ92DuJbC9BXZ2docT",
  "key41": "4HfQYQ387w2gTHmK9Z5wpypseikVvX9mWVmxSkYAhDAS8WQPeSrjWPqTuzr9mk4yjSrDkgD846TStCvzVUtFrWrn",
  "key42": "44WD3owDiBbPWLLy1f4w5wtLkY69Lvm5eMG7rz5fMLPpNpWsrsWkXQiZErQjSHYonJX9UiCfWZ7SBvFVVEcf7Edt",
  "key43": "4e1SEgqEV8hAmPLcSYviPuNqhdfo2hr4gUqJ6D42eAGasvpKpGnsfTJt8Q8pjfqBcBBwZEe2yCxEK36J38QXiwoT",
  "key44": "4J2GRcPgLPFDHerXzi3cs8StszSBQiFHWpMBTtRnqafkKBMeeHLq3zUi2ESdvSA1TAXuseNL6Fj1LJhaufQCRXFJ",
  "key45": "4oNgGc6SGEx4kJZwb5dRaHUmq5t5XY7mGRx45Fm52d9d4pLhN2tmxmzUNs3jCA8eLLoAKAXwrC3Fi8XDH17r2NYi",
  "key46": "61uRKBKvyHNNTKgAZjVswksarHkEcdgAJDhwJoG9X3MjKWvXo5GnkQcBU9ggv4E9Z2in5CCUFfZdSVZJgkBm7ojt"
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
