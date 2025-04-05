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
    "4fMAvZQN7sLPkKB6oF86JRQVeopdMM1e1TppWv4MnNCgxqG86EAu3NY7b8yHQeRwrp8gHqyQXUMaAX4Z8t2w8Nni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZNrVhZxUxqWaDGGxZofZxP7TRLxU8PCFb3M2dCi5Qiw3u1owrofdJP2iHzy2pCoSztQCRkkEu7ewgvesHmCPV9",
  "key1": "3m3cBXv7quHbjQy1njVKxwbPPDAostUWXNLh4EXTXNNELHW7JAu5n7HqJEzghq4BFKWRzuGURV1WwsGs68NdA63x",
  "key2": "CpJ9yQffKEtQHivSkaXv9LSAQc4giitFRh8XNsrwSYyAac1Bt79Vo29RszpKgUAVd32HrEUWD5DSQKHqwyBSTcG",
  "key3": "mUNC8dzQsbeKJap9UtiMP38WbHW1v6GqTr1rojTQHzpz78QVDBvuMVcyZxuXWB9MUFgWiC9YiQTbEUm6Uh1pM8L",
  "key4": "33DfMSMsPjCNMeN48qeFNVehDVCXr9JpootBBBUMZuVnuobTyYHYQeZyB8TbQHsAhHFFAvq4M3SX4pY5ttSLPvyx",
  "key5": "3MtEfWXQBzeJ1KgqtfXsH67Y8dddM3nchJo9N41K2vjNcGoYCVsaGjQtKpaazuYL6GHEGinFzr2pUamB4ajJjtLS",
  "key6": "55CsvBrDs6oxJYoEFpC5nnX3MuvnucErebex4mrhJioQDyg2UAd6x2XqedncFNreAfMkL4WEyjhvnPSiZPWky4rY",
  "key7": "3VbAR4mrHcZRpArBhR2KnJacM4RSqoSEnHiL3C7kmw7WBxHTUPedQ4QXBFJonSwPhxiF9GC1YEFidkcub72DXvW9",
  "key8": "3Prd5HXUnCEy8AgaRDyidbL7ieSHks6YP1StcmcgstxD9Mp3hcjk1RwtAWjUP319HubwHox1vYn7fphxRm9BeKE1",
  "key9": "5qJ3V3bsVaCnjL1wUUhdwTQPw2f5oaF1SqUwuHC84kAdc34TDDaQwk2nRzAnzitx5mB74DRBACnAJJg3ZXigCNWf",
  "key10": "5tJao5bUnn7dS8VtjZesiqZYZfwjB6Gykhi3RKYS3ELwg8GMLYn3iSEd1RkHKtcd3yNBchT36uVKMC9c5c8v12BA",
  "key11": "ixRux1dKkCzH7xSnfV16jaEV95uaxMvwUD9GoR8x3oQuckQnNywGKJ8ShQuDS6aMteT4JUNgEgECjzckPsZJWGc",
  "key12": "5Q3Yws3d8yYzf2hag9EdoJp4HQmuEaB58UHd1VMEZHwvsef9jSpF9sXmPeGUZDaxanKFV3LnPx9UM85g5hJBKji6",
  "key13": "2dTxnUL362bWDqs5NZE2RKsPy6rxm3iPuTqsxboPsaCdmxkZyRQzQjAdFJprRVEimzzWMmjq1HQvJBWTvyi6NC3j",
  "key14": "2fSL2NjMR8t9gWByXu3ktKNH2NB9kpnbG7frWahrTnPEP8ikXrAn5L1uMFCsZZyj6uAQ3pvA4b2SqhE3icwR9dbN",
  "key15": "4orGBdhnUNxHk6UhBBgwFPK9fctXV4Reh7spSzEzF7mBkjeASGmbRSN1REeT8bnoTdKWyGwYonaNdy5rH9k58fM4",
  "key16": "3V5W3zNYsbXPpThS1zTrA427ZuXWo9bRCoCpbkcWA47RnB7t4s2aHXNGzP7PWjLBpLqj7YeK4dQJjLgmuFDsWYnt",
  "key17": "5ak1gSufZr164zKjM7G5A3mJd3ZGm9JaHmJas71UVQ62DdqwzPtbRDzcqZ9FRFHqnaFYU7ks3nxHGpvx7KK5Kn4Y",
  "key18": "4Pko8yB3XFSDFaw8jfzWtqiUJABBZLSReLD7rwr9z553iLs1zoWqLSc4r9JHEvPoqDtRjHr86Ep6dAJZNb1JJt4x",
  "key19": "ikYTiprmTZi1xMZy3gPw3qHpfKGzPdJ8QjSxq4oaPdUNhyENvsMsv87yKdvjYzquhFHq1F5P5M2kMut8CwkHJi8",
  "key20": "5Bw7N82PdcrYFprcT4ZP6FUVmr6v6iDQmuTyJ4Cah319noyc8kGYpbY598EzwWetz853ppGrbKcrAv7mC2wPoQ3m",
  "key21": "5EtFVeWppg6xkJFHJYGGsjJEPatM2KDGrB7cktjzGnp7nTuSNwEbAw7cpGHH99cmR5AnGHw3Ke34RucVb3LJQv8J",
  "key22": "317LLTqcUWqb7auZnf81qB9pNtvw3Pbcbk64PQeszDmU4Dikwt3qtvHHLtqRqqE4gMEXfbKbUDrYgcezRwcikmEt",
  "key23": "397YcSXsqch6N2CK9gRk5zjhefGR9VA1gW5Pp6UB5Cz542Bj5boa2fXcAL9otexrWi9fitZr4eAVxncVF7fBU6xc",
  "key24": "3fmVZp66mcbDRoeuPnfGmWyBorNc4wsAisHvUgM7CYbVwHJa96uo4McA52ZafFMMPEsvmJpYULGryqGtamfdb5FW",
  "key25": "4DtYP1oVAzp3Zstfbow6hM5zHeFRZmPQXr7K4sGFJbwc35YNL4QfYLH9iSkUvBdRCXDwYPFw8w9npt4WHPC6ss2q",
  "key26": "GegidfK5xwa232CAGjY3hdENMSZkaYrFeLp6BUYgAcueHsgBWLYTgNpb2Jcy6rDsgNaTaBKFvTAyAmq2grGAN7C",
  "key27": "5T1q4XgbKZwVLBXHGavK8Wn9jmYcJysmZQDfrckjTUD9eM21uNiK6AkzbD1YvcAhFvGDYC6M6V5s3RQz4yB5oNjd",
  "key28": "4uQYxPihLURi5SDajFDGpmTqwFDxPKUsj2AoSAapdKWyg98fhxWtPwabY1dwqumfXnpMGbnkP6TLQextVhtLNK2w",
  "key29": "HHdRqACaUtqU8Dm53JBh6XKdrdChTpWiekwkQ7MDX4G66tMSj2w1s1Gg2jaMhXZfstRtvPvK4E3XWuVRMPmeh7W",
  "key30": "yHKsSTYkQAfr5TvvDoW8dZJSs7ZgUT8KEifQmfjTYbypJpMu4pTD8YHEEJ5jqyXDeFYH45JpJ4HZvtySteTS5o9",
  "key31": "2MceZPzqwRDLn56pZGbsJbo84KVVZ4vMVS9SSVKo9Js7oQTTZHSdyn5TCLzhxm5GKgvkNTrZyGjNZDKaGNXJNByd",
  "key32": "F3z5rVjm4vkSBNKsRSraubp4Sz6SNFrbyRhX9mfzkXC2g7Ly3qYjsSLx8xD8mVfeouZEkSW55Gz3nuf4H6dv2Lu",
  "key33": "5x5Q3MDMFjFwrGEc3mvxW7FueRSjW6VHvZkmGhsrpHY8fEMp5iFC8dycsfHbCkqc7kUzMjaqc7F72vLtk3LUinnA",
  "key34": "2YstYbJuvdTg6unyEtgoZwWAtpfxUaNHG7DKPyVRRFZ8GRq1gjun8SPTjvTjndyVRzFexPH6zSTEEEHLnf51WLtg",
  "key35": "5BhqEVZYxbUrPsciBkBtmckBxgi5vHChLHEfBijxULkpcseZKfBeQjXkL3xxoCPpFe5J2EYZRVDkZJ72cM33pXY4",
  "key36": "4xQVXX4NYq8RXSYFZ3im9NFo5VD92ropFJR9n651RWRB5xFDqw557h8MvJqzrzNWv1VCcjoEBJ6WknB3KTMWVuoM",
  "key37": "3QycwrmzJYDYXRcDhHnkG1FEnNHgStzPVUMzT6FjT9eAC8x7LVvuwkqFpazQhPXNWpatVFCE7XpPG9tqLv82EpA8",
  "key38": "UEvMSjZ5eYWu99jvcX1MnX2zuaoNRGZuZCEyYUvnD2c9EVXKCaa78dNBR57ahh1xvQUtqz6vKQ5dmLfeq79jLoc",
  "key39": "5p7mEg9knd6iWj5Qk2LMyjWV9iGCxvjQFsRhCG7F83Bxq5EYcGPxGG7N3mDjL9CcVWWc6v3G5Lw8DFiWBFr5wzEy",
  "key40": "2RV8WJAgeJ6HEjJQYFCbszfdQiDJPbEbwXDPZnJyXfS8p6eR9asrbRqiF94rmGEMmFcjB7V1FaPV6YC5unywJTLb",
  "key41": "4cAK8KRw4vU8hahv7vjzuHSJ3FyfAwQCqSnTVQv6QicZGcTeuPLNnWFapbqDaFvhaEWrkUx8r2XmDEfinWnFPdmL",
  "key42": "62nDqZvCJHGaJDPJtK3LZJn4N3jsfWeztLnecKNxobKVk5GXdR9SeBbPzCJg8VG58DSiD38qDK6XV9yLBDtHKa7",
  "key43": "3rnQWK97o7VZtdR9B6FQCjWZeBNBfEr5FNwL2SvcJCRjcqcpma6yNtTgS4Aao7s8fzpyDq2koUyaSTV1oqeQDNoa",
  "key44": "44Q3mTAvScNGs13v69rmxQasTF5pKQB56zEH62nr7sHCWpHVxT2bWbAKFTM5AbxL88PF2agG8Zaxtbxzqs2LnNVU",
  "key45": "7tNb7f1r7p8xdFGAbJqYS5nkBkivaaVqFpY84XtmHCAWjKBkyU8vaAwkcNX9uKKZfr1Ut5bkazb61RsDWgPdJmZ"
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
