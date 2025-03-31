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
    "vS9neU4Qq972udDcybpNnkeQYx47np6NmgBFn2wnXer75Wejq65FDZ1UPC5KC74ZPWRCD6Bd2SV79VriNoQ2bG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zo5Yc6Uw5zejFCvDdVNypeXFPL2hxXPKAuksa3mZ2QdDEy2CqAtJEGV6VFtvHyac4EPpsiNqnZw4R1TbG1XkNo9",
  "key1": "3Dzyu8cyBMXvoVipVFGpxZNhmHnTeSo2Rc259yjym17UL1dNe92YCQ27KdSCZsGpVrwB72km1KmEqBuWKXLdcUHi",
  "key2": "2DJhS8TPwVyLJpB7JQxChQadKUYhP2oVEEDZvcYiMNcGoFhrYLiXixNwtSQwMXwAdtLUun3oQDtA3QQWBXaq9jvD",
  "key3": "5mKxGn9KbH5KoMmt42pxvSt44urSqV68X1DWYcuQESpfkeLjKdDGWNL4Ft6zsgHj8vsWkg6HrbNBF5DS2bni7Bst",
  "key4": "2QfNzfTAHJMs58tYo9yzABC3tNXXdEErHYH5eaG6Dfs4s3jGWRQgRwBqeyd15YToLhDenL8iimHNiG1ohyCxqJcg",
  "key5": "DJa29KRYfkcR24xR9EAW2S14w52YWie8fq6mximS76K6eRRHKpgEPagwG1HZ8G7SvtdxQg6LwV2eLx41FHW4XGW",
  "key6": "4ALvU1nXVy258ngu1iL6e25NzRrTPtnGQMLLNVneJfjHci5akTpm8s5m3WSntACC952nvgJsdZz5MESZQY22QZc4",
  "key7": "3R7jXXjfEu44gDRXkeMUMPVwG5NRKzc846Q7T2xyMT53f8E6uNHhDK99bmfBuMRQpLtfqJFUAvesE4igaQs7zmzJ",
  "key8": "3Y9HKwhuc5jcnGzwSqAjFzJ5KRiBsPH3qJvFNebG6wWWK7zSxrJ5bZ7ENZSXnnJ1cvXbALnTgWA41xBJdBqSgtsa",
  "key9": "4s9nDfYDaLXvxnqXomDbEk1fkHjUCgHZUSG5bMdo4b72fB53453d3BReJnPAaECqcKWGnGoEWVQdNCV1JEVJF8jQ",
  "key10": "3kFSWyhF5gMHAepC2eVrGTqr9tp1mnee1EvdqBLYJr4HV6kUh2FXY2w36pigJfiXLE7yKt9k6geNSjqgNfX3VVZh",
  "key11": "4KQfWcTA7tJ1p9gdhkimYNe111doV444j5uW3euXURvQedXtebExXbSmxiqrEfKmAZUVSvJGat7q8hxVzkNxVbzs",
  "key12": "4nVFfCaZ5uPe2h3F8FMNbwErmh6ZMuFmhMY4k57y7AwvVR8DBRdJwuLuL7oQHaz7GPVU2uDyxKxkbEq7afDyUEsq",
  "key13": "Uwk49WoDHeAsxWLhqGSBr7yf7hiz3E2iKngv94AmHnoqDq9B32BiBSAsHF4KJZiJZ3xxEXPQG2tKLWDicRszMnF",
  "key14": "5Q35AeZUmy8Xr1Qhb1Fv6Xi1rSntaaaLwLqsT884CaMy575DhtkXLoBSEw2qkXXUPKVTboTWTwt4ioMPvU9HGFfA",
  "key15": "5dyxnFdqRZXMJEFsGpkoooLT6A91pfE3BAhHFxbSdaVsvZgAoubRTTCL3SfhVMS5uQPHkMdnxtmRaGu3UWCEgsto",
  "key16": "4nwse2zn5PNNWZE1GaJzmHE7WQsYw25t3KgEwGqXDK6NBFcr46JDrPDezBhM8qV4NpZP3JCM84vBgpCDXrh7JfQ8",
  "key17": "4ubfCR3AV1siZgdQHdfGYngWHYCRQtmXwwV3JofV4SLp4Mj4c1gMjEacjzLeXDE19C6DxHgmondfKURkogVtCeaJ",
  "key18": "4pSJcrkriqniFUUpQH5vb4VQr9AcVpn4n3XAK9dSxzTJVDb9e3ynFnZ4Sq8geFGp35ARZVbocxqea6RK6K41HokA",
  "key19": "5ua6e4SeT1rRM2kqK6xLkr9h3fU1GsQyJ9QYLoDXomNxWjxUcUDd5scH3LnaQqMrPGkaog69bKMdYQH16x44t9Vi",
  "key20": "bYEAcvASzqrMLd4YbE11iSTr2QUXNm8WgzAUZNes2L8XKc3be52eAAwgXNzYdXjtybh1eUcYkSQW4qxz1oBKe1J",
  "key21": "3cDjYMdgVG4AohXXTEukKybazNR69ck7Y2e2xWp37JAzvBojRSshsXwr1ahEjrEXkopatZRbGRzXFPyxt8rWrsZB",
  "key22": "3rCcVvDVsDoVcq82r6Q8bdKsYxMuPMLrJ9gqL1LgPjQqjYo66a9wTFuJAPA4nSNfGiX2x6rVzXLvfM4yzYfKih6L",
  "key23": "5td3uSNJKzQjRFyBufTDe7VQEWNnCWBd6VQe4AukvMc3RxSqSoVD8DHsnG8rbgCcCwewCrfdcBMxjWVo3FN2jHdM",
  "key24": "5HHLjXQytuS1bexTYV4jSgLe1wyzwipf39nDB36kso4YsUecYC5imMtEpdxJzjkVMfsaa2Tp5L28VoP37vTVpt32",
  "key25": "4JNuc58Zsffi8jHCHJvibuVuh28Fi5BNDxYc4ATAcBK6BZm27CLyCis6krKT2pa5Fb2PRP7gsfssgjmSqi6HhY9A"
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
