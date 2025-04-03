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
    "3T4PKxoPnmUQSyAFoExbLiBitE25s6BptBoxg1qm9UZ4yAqdAfCC4vSaMuR6UBP7A6ehkYaQB5QGGhp4jnXtQc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lyc9ap354tRGMm1uUCRL6mKcU7DPxTd1qTPuQVAwEKhFqnPRhhSXGTLS8gHdQGTZqoR22axdmZFrpa8ykCDX1Mt",
  "key1": "3UvwovXn9YxLt2p4Vpsa6RS4bYXWoswbyjJhRWLNrXWBAbBxWGAF8kZ7AtWw7v3mBjQp6idD4HfLL3hKTqNQsyfe",
  "key2": "2cSQs4BYdZBRrk37Y5E8pTRk2pVCz2eY185MAUquNNKTjGkWvsuC8LcskQ1gSpxSCkmbMV416CiUwQnpZEUCamqh",
  "key3": "2HrpNgoTWRTbEG2UxVxJZ5PcJA6wXTXMyMNRszmydGebY3WrPMzAwj372xrgsKw7eMxtMKDFhg72wmswrP1WKhNa",
  "key4": "5mVDWo9Fbs8F1L97wCPwdnU9zCHkSTkcApEDqqUghqgSPv92dNm4kozcHds7LYhhqpEit8q14f83us2pv8yXuXiy",
  "key5": "o5eFBj7MVzunA6vDoyCNei5hyrggbpCxRjGEq9nXPJtR8DSWGbWuZ5t99sg85rcTqjRtEznPyffZsyDa1WronRD",
  "key6": "3A8te7qM6BnU212SaHzgc6gJMuSA3TozFfLm34hTuGN1mZ7L1jczA61ehaDAYjgripZen5zkdbNw515cKDSpwA5b",
  "key7": "Xme2rt8od915nvrgMSqa8itBXSneAVvFhmU9w6HQbtoP2Ete71c4C4gveBspdB1D2BA9KQzY2E9ixKBs3hmJZ17",
  "key8": "3XxmMAGtHHxAoxgwnpjhsdCrXNWtrJzrF5TPVWDYP2oRzsNr4c4DdwpuuCMFKHZZBLZmpaKSiBMqG5QqYcGgG1Rn",
  "key9": "34gAhmBpHqBiU1ye8gorpCYgmFjzw4wyiieHwm2RPjAryTrU9pfqCXdeA8SELsf71XXYEjaSm4ZSbASeSuz9mo7w",
  "key10": "4vXps6SVERpoyPiQ1i7NrdvKRRaarJxSgAadH8Kb2RmejEuoNBF4AxYPqY5xuwgj45A9p5QcJadaRVFD9hyWrSeb",
  "key11": "3uCTrpa6UebhNAXSXeDzhCfNRMYc9Mafaemp76efUu6u26T84MY2sJbzztfRsmZpxGnwNxJ6MWf1FxXuvbq2CkgD",
  "key12": "4KiQX6JbdcekNseLFcFL5dcP4NmJacRtb5sj198jZNpa7uC189xpvpyqYRb6Kfa46RVTqTFBZCTKkerGb8hPxr64",
  "key13": "5ddQ3Ry4XHMfkkr9DTekYJBVjFyuyCmtTitDShnHBr3wKKjL179mkY9kxqzYUqDDL2ajpPQW5XhajKo8WZj6kWsL",
  "key14": "2qbPzMKuGDYLzqdf6ZAxZaxevRJvngW9ro3U2k8jZepVTNfZ1iSa1cS64B9U2TZQAm4o7L3Z2TGA1mtsc9C8ycpg",
  "key15": "XXdxAmgzXrRBy2weu7cRf9ME6ZYFZsQMUonwMcoz7xsnzKpS1av27auWdZQjjzQMKCChf31HF1sVg5mKzk2mTtp",
  "key16": "4pRZPB25USn7n62aKn9h8pMZzB6GZYynjBfrBGqp9UKLaViPDBaufvgaZTCRj7CAwK17rrLsiMBEH51zmz7D2nTa",
  "key17": "7z5gHDPmSW8wFkVArEydDsYfpnnKKNyaaspHbBmNmkfTkfdjHmhe93fpKKfrgL8SaZ6N46h2XpVNati1CgnYVy6",
  "key18": "244FykhqBPzD3CxrrGhS54kuE2c5FidaxNGBuGBSkbneoyJYF3PRcf5EfTdG8arc5xnEPD3w8qXkiZkoUK66dbw9",
  "key19": "3hVKYLXjYV3rf4NAMSxWokHMruE4FqsoAW9wk8ZaUBrFmV7dpCCjqRTYPbchsHVnWuFtRLLD2eERhaRoJqYjXjG6",
  "key20": "oYvKXMzjnmJPuYcj5PFGA2FLNEvNKcT3UiA7Cdjz34wJmL8qM88m8REJN7jrLPXfkRfZiih97Eb6YnscJke5oZ9",
  "key21": "46FipF3gpeBygs6YEDtHUK9NeemYiTqzK4XP341onyzgFyxgkS76pcZ7VoX19aEr7DKrLpdxeXiy2ajB8xcfMrFs",
  "key22": "2qy4UwZaoPab7Adwi9SrP2KNxamrFAJh6jKWdjhQUTqRYZ3tAhaTdM1C7QJSv96njHPmC5KBwvFphepaif9cRZjp",
  "key23": "59eE6ZNuYfsRqKNTSffyGS19Monw7JiGNmuaXuLRTsnhXrC4XJjDoMU3GRMnPEMZa4t8JP6bkvuPnhN9UZzuomeA",
  "key24": "51b4EFiXummCGwEhWcHprtPCw54MkVbmFaL5zNuqs59t7QNaq526ndbQRobm4TKYPVAafQ76jQQLdz1xSAGW5hWS",
  "key25": "4pPbjonnRNAfkmLMzHLye53XnjDcDGkCNFycUq768KsK3KcyA3sHD5WBFjKpznwrY3vTqQT8rPjRqZi9cBXaPezp",
  "key26": "RNKeoSAANUfdmXpHMX9ENwR2PHEfkXwS1pef2Sc8zBUDmUKPPpnF2cic1fZL3HkLgPst4Stg7fVSRHoXun5vwwp",
  "key27": "3DLkpdfaXetTbSbdZgFAT9h45JLwzq3Lv8VzER3tCEMsNsYTmS2HkP8ppdCRkghudAgR12wPdTqzcg4Lf4R6MW1Y",
  "key28": "2pF9cS2o3D3ruBtp6Ndf93fwJQwrz49QoJZFf518HpxoAQiBdgksBbB3sUuNpWbasdUFYUaRzwrU8sR6yFTzaNuA",
  "key29": "4GUzs2EwuUH1kukyayqqYjdMWtUi6awyzeVBwf8PJiiGgm8vadq9kAKr5qkubd8AcEwkoQ3H6ud6TvD6Stu7PkyR",
  "key30": "4kH9iQk4EksjhMjHaU98uycA3vgoAwmy59uLyyrsr9ggjKvbmHkXLfodg9QbiLzkoLzSzjW3vfXH48qvV7EajfaH",
  "key31": "5YnwDD91pXKyiEW56jFbUdFN3YvozxAQMcev4tcRK6wNRxaCKF9JeChWKkJNNihV2ew7DmiyAgmiNnv2cSASnh1P",
  "key32": "3uosdL3DgFqhZBMymjVpYauHQBn71VEsXq62Hpq9Fr9i3ESGggR3rbeRYwvDVUWd1sNJzhXeWoardQxrwgqzgGQp",
  "key33": "UwfiTjJjAtkorPjKqNX1DyuPWuYdKQ651q2z7X2vYqPK4dxdG1MYduYnRmQMAmSUUoV1zrh5CJVEEFyrdJHxuUB",
  "key34": "3ofW9pxEFA35vJnKFo1Nv9peVnmuftc11X9qULQeXRfBVuLp1aJLzKHptupwdpiEz9qqkG9L2qZni6mTMzCAwTPQ",
  "key35": "3pL9weAwMSU6eWBojdEDSAD32zPmmCzaTMkZU2bnvkwjpMFtDxVxCsgGuxz5XJJFrWWoCfEGnTqJmifPVYRSkoVg",
  "key36": "5pEfaC72ZMGt999itBpCQF5QcWWyTLjzTT24RghKzszEqMJPUCetazsACgt1eojZQ5vAD5LzRcyqusq81HWo7EfC",
  "key37": "3pJVrUtjoK9fHVJzgMdyXa6pQtC99NGrCXFTdLoTWKBpXFotGHb6FpffoJyPrK3wxF1xsFjkZtbp4pxLRDJ4RNgc",
  "key38": "523cbJTqyw65wwihQsxgfbUPMsFnoxjSksT4kyYafTtSFhv8TKwe44tJRpBA4Ry9pkLUvZm9gniLWcxSqDbj4Fd",
  "key39": "5gNwBEjvu2cRgDrXu6dtgj2wLXRc9uichHUhbgJ7Ax3qmDGzT84HYyYWNDuyE31LsY4wKL5JcRboA4tUeQf97pjm",
  "key40": "4yprere1uCS589izjbkQzpY1esyJSfkbHrejJqbEVsJDVLpe72pyKER7fTVXz7yssF6FsbFbgjyYrwLQYooZXRYd",
  "key41": "4muGa94r9rucDZaAXgj66bNmKbdNjyfpd6J4bvCRyD1MCHnMoZdk7NMqByAiYb2aWAxwhv3WSNGgjc93bkNbyyCD",
  "key42": "3eUUCHtua3oWF9gEFNQxK3V8ViWpgirNjPYKBRp8hzcN1pvMtRBzh5WswJhNcDqrvoS8GQMipGejZxwPCHnfvH4V",
  "key43": "4ToEhRUNBu12n3MxK9CVaJDfvHP8iibwFnNADmBtThJyLf6qA91VS9idct5RLnn8NFVXysjxmYV2DMAZEaGUJYnD",
  "key44": "5TBVJQYdb3zbzEg2vD9rCPjmKHHQgkSsZ6sb8LmwweYgmf8Qs7QHrzAgW6oztF1UxFAVn6L5GG4PX8bqaFhYomf2",
  "key45": "3rz5JmQRUYMx2dLxuzoX8AyV7EQW2RRZaFFLsVgmnN7LPFXajzihGuToVtWNTLhK1nyoEU5yyKZH75yveJ3WFuPg",
  "key46": "4VuF5tMx5tJ8m53PZYpNxVLnb553kKsKMEL9qHihjk7XEcnnbpvertyXXvmp5Nr296KTFBdfaGNHmfi1emMEeHP9"
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
