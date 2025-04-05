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
    "5q8YL5wR2B9Z43bmw8FYCJQo5apZAJBT2c7bxA7f3S8Fp4MbKWcDX4uMczAtKVZcRfywhLbTQW5jRuXxRAEtrSNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ND3C9nLWf5Lx4QrnxqDeE4c4PhjkfWMDPatjHr32f3ao8XjapSCXNw5xbwkkEFuK7aq2LWkF37xp2HNm5YnbPAh",
  "key1": "5qGnVqG3496jVuP2G91bDNWkzwJxuf83tkxgQYbhEEnQY8cHHV6jmdHEG5sMmxKqvwfRYNotZqCycGwwEqHMPNLA",
  "key2": "rpCjFsJSTY8MfSHGnFYm17rrGW5JjikqRbKDio8QXq3wADqSS2SM6epUzcvoydUEcLXBAKTX55jVQo2dTuXuABo",
  "key3": "58je5vJQ3qkSKs6pGHSr8jneL4fBfX6SV3EJLUrboqJsTRBjEGY1geomFm5FirKnhP1MDGSU4EbtgC6rmKqoFwAC",
  "key4": "5rDJJwJxz8QV8iGTwdpoE9aK8hxK5ATgGXqgV3xMgmaZv3zswHepTNaQcbvzG2EgxvbgFrK48a3snxF8NCfExSA9",
  "key5": "2DN59jGHqxYcCUkbNWLLypMS8cUUoKnaMnMcXvuugdBukSKpZyBf1Cc9ymhoGpEWfJ9cwjPLdEmGuUZ2AXefn9ye",
  "key6": "42yXz91VLi6dnZGDJx2XyYbP6DRrzKMpW6Vw89ZKsijMwkpnTKDokwuZKa7tmqKFt9zRm4XfNrirWNchtzHxrpja",
  "key7": "4S4cct72onVBUKrG9vXfNiUJnbnqYGkrdRbsDxg6bSZGohqGXpBivcKAb7T1KCTQ5ciRkbAavTVdqkwQLidAypAD",
  "key8": "2XqRLjquuox3uFaeU1MF6ED2B6cUcdkbDZWCexN9DaB7XjMtQ33g728RRcU7RqXWH1DHPoX5LBrdQ52it8bU7iPs",
  "key9": "UPVtWktvBdiNpBxfHSHuKfiKV5Zjw3TKiQhv8VUANgNwbggCFEqfGDubPozjkgPk5KzJ2UrPrZVUkKAPGoTVkjH",
  "key10": "2Gerknfg9sEbbkg8nnfHuiBEiNg1cu9eRng83PSLZc6VRid5wtMfc8GJwDfAnQptCATqX6EqSjgmeNx3vjPraDmQ",
  "key11": "3qi98HzxdofYHXMTMj4KdLLxsccg7SFBG3821cBNkoqXq2ZgngabWY1C92LZVDiaAD4NUmye4Na7gvXQUDF3idUu",
  "key12": "5dK4hZC4rFuxeBp9auze41RUdft2NbQK8MmyK2Z3uafSAuCcuQWszKojkcSZwfxWY2TYeJkTXyUgaPBnEbowAaWq",
  "key13": "NuVaNVLf3d9LNLBCHR5yNFSsjMghZunuXNYo3qzhg4UA3dwJhmDf8TJRsH7rejLpviZPZN3vt4DNU5L4YaHMWHg",
  "key14": "2iF6U7eYMyvbr8gbKtLy2d9UHviGFiQiJG6f3QyynAuxswLiJXDTTzgimhJEtGW3ykDCYcFJ94L2uT5Lf9kEfkxP",
  "key15": "4C14ncCSWTP8H25cU8xjAK8JDwFXALB4yNaa7gJ9axcmmF8wKwR51zwyxUjYcCdGo3TkjAm5UPJZ7PpW4vREzUUC",
  "key16": "46zS2rQaBQtSuZnAdQLzG7uTsiMqdmWPVjwF4SfH1ZTYfCc96rPe1s2QCNUyYcqWz8xkBSCwPMiXXBmkHdEsuGfa",
  "key17": "5o3XzGXhnyYS57fLyuNcSfq9ianBVyZyusLLMSKs7y7twf4Eahjms3JaCN5zTX2U21y7Mp7ASfh67n5BcyCafWAG",
  "key18": "3BFr9kd3xTASPCjZCCJ2MAgtH4LmtPLbkwjezYkp8bATH2qTpC8QjJFRbjfcrYj5uzwL17TRAu4Kr4hqLRt11sWd",
  "key19": "57ixUp5yTbMxCPTh2B2XoKmt1gjSCvXLodK4wTdQMXEaSxjtfeukKbrU2i55UebyZuTRVERC3dX9e4R2PthPt4nA",
  "key20": "4RF9JBNeDFfTwe5nH5U8kPhnTqP9fhbshzFBnuB7j833TLRYizMb8d28zCQgBnwub2KJF4RcJmAsfBrv1rGsnvbD",
  "key21": "5SfWZqNxgsUAPzm9cAXv1e13dxuoLbRVkBYWyfEMr4p49b9SuEYTWP1Dutc2a78tLboc9GEoy1T5zziBsSDibvTy",
  "key22": "26i98zgB9NyskNDKNHywzCE3Jhic3483JfcxMnsbGXtnoHJYytHYyCCBbpEwTg4hHK625AsEthTuArD5wGmyG9qm",
  "key23": "3ne1UDgdhssgwBWx4qve85xreH8AniurLUxV7swjBLzjJktzxV5BoScKP4EvW3sdah6t8DTPn6JthREdEe55oKbE",
  "key24": "4GBcJv7unvqh8HGzBdEA9UhV9eFdMP5eqpQbcv2riPPZ9NjkbtBDNDqTNaGPjvWce3re3VscpZepbaaVoYCGhQN8",
  "key25": "52QStupvKSxx3DzrTdhoS2mkf2QH62SHUQCojruJvrJcP93bPwt7iugVST6FtAPNG32Rq6pWkLXxq1qTzm93bjgA",
  "key26": "4YZLR1jUDw32RTXjjVEBKxPUdpS6WnBJ3FvtYRUY1KWnQZjtSWZPH66CC7dqk335nGdjhjprsNcoP68MsAAmdcbE",
  "key27": "5UU4wz6h1TSyire86LHQQ2dNtJvLBuFf7zvLvZbyuFcbhvQdJWfqV6u33MsNDQXT85pFvwTMpLZNViTK9uHzfd3D",
  "key28": "2N3goHKYD8mjhAxjQorRugbu3cK5HgpbTuc1E8jrhumtyiWfsm4N8g3EbSAr9JzhG5XjW11QhwibzszKnLTrNsY7",
  "key29": "2MKKtB3kPiJsZkJ652zj93yYJ1qmBSCRB83dC2yijRU3d2iprz87Rwyq5SU7b2ojci6J6ge5Z6entFZxva2q29fT",
  "key30": "3dPuB7H1cDWpSmvpkVkV6PiaB9xSg7Rc1MG3QGHuYezrm68NrK4RV7c57mybRbjBuBRBjLWJz4J5MffWNjpkLdJR",
  "key31": "8hzBEgpUVtpEAcqHa6VeJurS6EqA1MoP9ZhaMAV7Qucbc8TGdwRWQYgrWciw2hKbEyAMixsR7TPphgo5Xf55bzb",
  "key32": "2J8j363BVFq27N4HraButB6jUhH9exRH8Yh9tQrLwA18URp72NmHFjFuUcXuSbQRk1u3jBXABfDKFg7SifUBRDeN",
  "key33": "3mHQG4jCiqvYQqhjbDqheNN2bxm7pgEVPfsHD2A2S7kGvaZV5Zs5vpJ58c7fiJFGgxNVeyZNKeTgNwikDKsJQVdP"
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
