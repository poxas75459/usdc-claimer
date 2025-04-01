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
    "2fombtgybTU2KxH3BEEmoH3C3VgQC17KMQrrBWLpPgKcLsUEgbPuvhg4RJqfCAEBcgATDx337mnUhVAiYrLrVWcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUKAABsbWbqoN2rgxUXLppEFCqwrkNTvBD8Px2cKxEtpMkSvnosaHkTMuKHAhQH5uzYo17a15i3Z5qaZfztHJeT",
  "key1": "2gUtxHVLBq3E2vEYFewmkTtLLTefw1bTrJ9RutXVxuNaoHhPGpHJCqfvEQFFG4Eu5TPuhAWWfS8LX9RXu6Wq8zZv",
  "key2": "5VQgNLqqChdwTzAEg9XM4wqBR4bDK5M9gQUf61CrS3mcduX4Q9seKGb7pq7BmEazZhLdwtHQLNshouxf5SrdvmHf",
  "key3": "4Ho5yg8MUdz9Nsbh4WEXJ8DczYsnQzgN1PGbedBPF4Vsveak8tyfouLbbAUWGJ6yT8VGF4oo1cLLDaoadkN6PLoN",
  "key4": "5AES5LDXTkWLTS4wbZZWPUsH16aW9bkozKv81rF4hytiA5Xh1pqV3DGEYno2KzdEXeCti3Q2i6vZXdbqA6rn9RSU",
  "key5": "5qo3yaNxgAWAwBYP9qf7Y7yRjKg6K65iHfyftKM7U1ziv6HzdCpKaTHeYJDynihDV3Wb6SHzYMiaUQ8VtKNgMAMP",
  "key6": "4xii5X953X6UsnbDwCjaFtu5GJZHCc2we6Ej5agJVMrMCQE62t5cKdv2iHXB3ud84hFkaVWuH7M8hcAH3jnZwyE9",
  "key7": "5bePceKMnttPiYhuQJCtTgTcpbcic9yQQaVXyhWuMGi2DZMtGAFJnkaq1QnDiL7VuEppdoSy59cvGoMgdcpHoMPt",
  "key8": "iw2N2R34G5dgLUb7MwCTFgidviaS89k8pzwsMeSivDbDEEbRuaqkLaDPeiJWEGVUuovWuLieLYV1gaMSNDBSaQR",
  "key9": "whFf4cHTmig7fSkWuTtUfaQpxFcufsGNdUC4cF3qeHKhssvZnmozeLeTUHv46AeU4oPafMoSRANtBUy1tVfi4vD",
  "key10": "54oQd33QjtqttzqbvM4drweqkTZkWY6qcP7PHkdyuzdSL2fnsbUDBQFSwG2XJiFc8giWBvEeumBLTKqYokhV9pgh",
  "key11": "5qLBeAfjMpaAR37Uxt6AXv1WkvXpUtka7RH3RCFG2WHHEMPr2UkTBqsJVwowpa5DEEene2vAjXZtfT5kP45fFMSr",
  "key12": "3sDHHnhkEv4JGUj4C4n7wVNFbJjWoRUaNjJs2ALNPTauNB3L257BrKM5NEsHj3aG7zfxB1rj6qJvA9jSM5EJywXg",
  "key13": "5z6Xa9e5GLs5swjatGtyh9w6QzrWkVZ2kXvvC2Ry7o3APHYFyqpZvkqErwzSvDM7LmaHT11GQxeng8W9ipA6mrb8",
  "key14": "81HMe4cLy9ZKtWDTLKpXGNJXau26KxSfoJfMjRC7xnnboc7jpxe5pPhgkWqdkrALUDrAKsTojAwdWuYLkk57rWG",
  "key15": "5gGogpqkVSvjauf4VFER7z7XmQyzKLAkhqwi6yyU5kW4wtmm53WPVgKw8mgbCjxDUcgNgaMwcY4SVfLF1UVDLgTT",
  "key16": "4cjoSNzoGqXKM77SfHtHHiqbJy8eoeg3ne8JKa1DdSpgi5uU3CcBXwKKCKd8c4PZYn4NA54bY9mauQRedA8Nz71r",
  "key17": "5aUnC8AY9h31RLPdC64XVRLnwcM27NUWVPRVoPnjhPBEJWrRH9Dw9xJd4CJRBvs9Jgstvn6VKDk7C72cf4WK653B",
  "key18": "Z4DEHFJsQkxsBS3q2XdFhsnRw3YXVWpowPxYN1wAdnf5ajzRVQDhQcwJWsFQarFPZXGqEoTUM2Vs57ox3i4T6Lv",
  "key19": "ghMovb9MX6Y6RyYUwLTLHtdj4roxwLn6Y3eGhEZAFAnt1RRKGeRwmQQqKvhVs6Kpjeotcvs4sfm4KRmRzhMRHme",
  "key20": "3bDBRpeYw1DEUdQRrq9yY2tS2HXrfFjJ22H7YcpLdhqMg7Bn7CWp8oqQz8dp4qdnrK8CAsMCeY58aAk93NGhy3JD",
  "key21": "2yEQdvxZTBGGeJ5C4dspz5caMdo9HX2Tza8qjia5ao3pq1P3BBnqnKsi5uapW9upPbhUwd9yj9nAN6kMKaGLwSn1",
  "key22": "32ufqKQsCycBV44yb5qa8McCfqziLnFLDHS1Yuk5fpnNfNbduLppRHGXut4KompkoCAj4u18BdwDU5pBYXXF65k2",
  "key23": "3rAEhhioAeJHP8WX7ZZCK4kMsvcJZNtPyxjtaaBvkbx96EM4pErFfRPYhKAQM5CFjWkHAhMUW6nVfXXF2DUW2cRg",
  "key24": "2fXX5YjkpkLXcuFQp8KFLiUm2bz8jWmB84iEDorevXcQyLopbYedZkk9bEA25p4WGzxLR71aSkBYfj8kdx34zUHt",
  "key25": "CRpioLqsTX7ACN6iAX9xYEhvhLfytRwjW4Lr6u9oXVAkwUdy1V1qhBoqMhtAA1nhxnLRwD8AUw9yAKCEo3cGkg3",
  "key26": "4iWRDtShLCMRw4mSEgZ45tLfEbAAYPJY4VExwht44LmgjjmhHzE3ZVdAxBkTd4hdJZRHfjGuHtAETgduvU6CPuUJ",
  "key27": "4UWHMqnRWDtt6S3TvXTrPJUyHMmDZqoFEgUFnrnp8QabS1gHULhNG2tk9Djy7pvEpSDoDHWsWWzkUcaTvF1Zc7X2",
  "key28": "4mfgCcLRnjLzygCEXxjV9evJb4cLE7axFYfXgfGDacKRaD1kwaveLTi68PnK7rM4xMpz4t82mKL7Sj7cX2akVXui",
  "key29": "TdNbCNB7g4Jr8eUpgdYLbcD7RoQME7PF9NTScW422eUN6QvYTNTE6KHSFvNAiHDL51q4Fe4qFBkoaaKKojxW28D",
  "key30": "5Y5VeRBZeQ3Tpb8fiDHM1ixUWM2dy8A4cfFmcpfguhtk8D5Qhbxet4qiC64EKDT6LDYeqNXyqzPXX1oVBg7w8DEt",
  "key31": "5TUr59jNFsDNDQf7AsN2jqazQ3vc4pKdH22Chtww5Mh9BLpwUQh1HmtTfdAUXRVRwcRPVgYx743UYbL5ZgKVwLVM",
  "key32": "3HHhgYocNRH6dHRUVMDJVBqCpFN9HhLrVv77RYFjTb8g4ecS8KA1NQGSgAoRUAgkxdzYyrNRptcBH8a3MPS2eHyd",
  "key33": "EVAmoBfDF9mxGGCqTRgjswdKJHn8gq487reUa9fZDP7ewYgtJJ44xU163yjqYmLER6UntNcN6J1LRqiEYKZAkYK",
  "key34": "25JU5yyVHozRZqiEMatJCwtinDtsk3Jh5PQNNyMMRjRBRftug72nMKyUHz8bdXeS9TfNBkBkdSKwhVyo4dXb71FH",
  "key35": "5vqs5YTVZAEyzC4PMGeqeNvTPUdUQFXBTX57UzqrFiyX3TCU8NfSbT31xnqt38RisNmMqzCTS11P33aNb6FajygR",
  "key36": "2Tp1GcrkQ8mnfjp6QtHW7Ffn8SZQ6B7pkTyBCNpkKJP4oHg5skUvsppGHjkCqgLWchP1sVCmy1XfgDRkWBiKKvb2",
  "key37": "zsZsdjAG4QUgCteBU8Qu4RyM6JaVo9jxsPyDDUE3GMD3yoB8QqbqznDPVMhiWVEV5Ty6sDaohZHNdhkktt5aVTv",
  "key38": "48xjYw2EgRetmPHDXgCw9AGsrfPgajzV13VujRXzETQ7MiHRryibnyr8rM8AA9QAp43P65z75WawY9BYVDnaxTYz",
  "key39": "5EHKmJNCmaWEuAwphKDCGvQLbt7YM9FipKfUQwcfTV85F2V1fbwjgYLjZkhx4u7JNjM3cUAoPyuGaW36Vaptse2r",
  "key40": "21DFbdMx96Eh3sRKJ5ytQHRiDE8iAeJP23yGHKJBKNDRUDGVX8Nz6SKG3vTDXAGLnFSzgM2fh69SLr7Wc8MaMiSG"
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
