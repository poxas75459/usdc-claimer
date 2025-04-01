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
    "2vJjsNHNdvhF8dLVfeWsokMZ8KtP7TCoeAToqo5MdfumE6s8TX9eHbqfwe5ogsMZxrQRmLY31CwiXaFV6Ek6gCsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKxfHK9ehSTbKa8XQw3VW5cJRsbaMrHjevU8DLTFRkh3qjimvLCEcLeNKbQaDGuwwVxwDAdPETudZUqR1H2b2La",
  "key1": "KLf9GrCdu4Uu5jY2mZ7XWmNfrXnrjDauxjpHKbpzBiw5MTazaCvWvp28gBPCvTZCAf5FDAz9QmJCQvFpG5oQ6qo",
  "key2": "2WTaJ9ijzDdis3x38jVxTSTjaecvVDL2yf6rUTFrNYd3SpAW4K4wtE61eb3TzCWZrSHk1TD1rc3zE5BXwk22PWFs",
  "key3": "36GX71eVn2qAqRGj9u1hmtv823wX9GBBNk2Tub9ZbanhgKEgCJfp315gXEbAukrnX7dNp6jUohPGbiSu7cV3Eg8B",
  "key4": "4rTrkDyyGTYD2Xn8KmakMymsPP2LaHJ5ShcbgNfZGUGiJ7zDoNggyAhZjd2TGevgfBwaqZKyvzK8RbDhbwcKeTpb",
  "key5": "5qK97dVqdunHrx6NtmoPEsdo36Ye1r2SFnN4jYof9eXaZC82L4udmEZ4XGnr8Zf1Nak3nnXeZRtdntqbt4GAKcgj",
  "key6": "SddH5rkcT729aSMiFd3JWi4QGEkAujMfYtssNQigTt46Cy8CeMV2gmdpK1xHiDEZYCExhhj6Kco8LCLti9181v7",
  "key7": "4nGdHvV9DrquNhzkZDkUFUuZr44TCV33UqQnQM7udcABg64522NYJRa2sruKaJfy6esgxVs4tFVxtgGRCtLtTShh",
  "key8": "2hAqh4rDmo71mbBQpdfpV5nF9qD8MRwM3Se5UpeePrACyoAqdRw76YbCJtyEW7DSnLHRtAPuF6ha89EnsoWUeWX4",
  "key9": "3oWxY4qjjiQxthc2p9NHQHRACJDNsDRFwM4NuhGjktsR6REQgazKRp7vTGv73oUGPqY8DxxR7zPtUWq5kDmbLHsx",
  "key10": "4wQiE7bFCwvT3nz7GLke66MeUUWfv7gu5YHN9As2aiW9KpX3hi4guA7BF52C8haprA6LuqoKvuoHLswvxZbg8owa",
  "key11": "4rSYaGkBdJTNUCv3AvMUJScv6w53sg964x8FUUp6a6C51brxTQkH5vAQ8suffmBcy4FcRSWyYEBAQiQyfzV3nzSy",
  "key12": "5GADQX1518fr53zcm5gvr4Aou4sudsKB4ftM6VaCZgQzQMhXyxK4xDtUWSTVXa5drofWMvJY7MuJeeReQQNzNNdS",
  "key13": "2LvMnCCho6N7M9JmEP6kXTJzrhVnP36LhGbA6L9pspXdr6JEAm1fNJEvuFjkELkYfq3artMTuefDtPMq2bYXJoSa",
  "key14": "3j7U3FVWFCGJ3P8JBfpAZ5MDNzWti3CnjvnfDYt2aECmNdfk1s8eaxb8YT6mtwdgCfKAyMfJFJr41c1qX4yqMnuo",
  "key15": "5AmaH6nCLUaxGqsUUL1ff6PG9td1zF5juoVtgekP7HRY4M2Gjj9zjoadHq7WVLi5gpLF2ZKGV5sgb1SssTjXV9AP",
  "key16": "7GxwQiz8mgXFL1Zn1WJPb27oLtxqVKq81WoHtM9P6Tdmwsm5ufFPhfw34FHjYSmTyE1tBHNBpgmsSsbnjqQtKRD",
  "key17": "2HnJtjqUbqo1XgcNTsTMNMyV6WS1WGfoDgQ592pRBzcTxRcnXaspr6am5PZL8bVo9F5F7TDF6vxL1xj7otg5cMzM",
  "key18": "2EtzYb4MkRhebWej94MLVjJeer6rZa5QfMroWEf8aB7v1wCDpT195qS16Nxdk8nbLySocRJBtgVtrw1csdCcWopj",
  "key19": "tvYSNeYiobHwJ53pAjPWnqdcAQmtVDXTEmMfBMB6awSxJN2HpuVHsYMfQoZtsh7VCTUFvb1o28bUa7HyzGzfsxv",
  "key20": "3RajS44GBNZRf9u1VpRHVc4szMvWR69BHdJwCrytTsBQcYTsBmkXgGRigrzEomap6h5mkqYiHww3GKTULfnAQhoq",
  "key21": "5eZvrvwP7XGEKreqH8zEeeDTmk7paGU8dBnK484EGfgivJu4UJ5hBCAE5DCm9agTJEKVsvQkKQVvVcMgLHLke6d6",
  "key22": "25bGbY997hNKSAGVoi88iH19tzV3dMpQCZEM3ermUpgqe1HJF3sMwgGk9oLa82gwVSPh6pqDqsMevuFxGGfnp5Kv",
  "key23": "2nsaRCcfrspu71rnfhRRcZ5HAVy4bT2wxn8rTPojPZAP3S72ceuUizrFtKQP6yxsLHcYHKaKGhBGwRhWjhMXCMh",
  "key24": "4E262T4sDHP6naLWm5U5vTxAzTeQ9e3Usw4yCfn1xW4ajDst2Eu5Uri3n3tNd82WLNoQ4AYRKtvJVPp2cWh8rtaE",
  "key25": "8DE6tNAwHSRMqM2uCcynrwth12hoDFdjuRrhUqnBpP2hkwiRYj6HPu96bGkWafZUwRrMH3PaHgEiMoQtWvuNG2s",
  "key26": "DBowMwm983BAMXTFVAFthgoJpeD7RSjWAG9jL8bRafDNWkyNTfwThunUmeFJELZhvBeZuF5MsdNMZPwtYpSD7JN",
  "key27": "57oi2dbuWbYmvd3Cx3yeQhNHDkhfE5KY19wYVZskN53No6RNvSZc8JigAfWJNmpS2jRs5MMNxTR4eRdyeajP1VAp",
  "key28": "3E1pZNJ7EjQaPpiowTFd9VMKaJfNDGoJtwgWEUw4H81LgFWqfdwPjdBsuzs6RAn1wubmKb8PUsdsb8vG5M1B2w75",
  "key29": "63mtHB9sqZJKQx8RJtu5TyDwDr6XhnQR1HkJBsuSV4FGYs36wGHunHxeqMeGaXPRJH5R54X6YSWHEMB6g5icmr49",
  "key30": "5PbcqkF6JXkkuyN52SkeCTkACWwpwqAZEMR8SvYVrFvcX5VS8Rug8zzMcg1rNWTJqsFR1Nxq3HBkuxZUfA3yA2eW",
  "key31": "3Q9zNXNCdicWJyziBX5kFFgYLpyLaD3L5ZHdL5fhhixawzCJU7GU7bMvRdhXMsn9LpdRWPhr46rvTmV5g3TcLLKA",
  "key32": "3KPDMSehNEiFQwuZX5asmj2hnSDC2wsP6cc6FXJut7g5AKMRdy5yijqrY4ZgvPNB9R1G76F59HZProNkRQxaMD2B",
  "key33": "3AdUgP8urU4Q1Qu2bJdaY5SPJk7CxHuxzAsSnpDHWXmoR6HTL76oFGr77V68M2Vtw8L9UNq64d1dBKbx9v3v3ufL",
  "key34": "4x1d2tPjFCmejMguAVSMYqNHWefXAtGDWHBp7ZfK1qRVAcVpwwVWTDmXvDKLE9CSejxi6RZA4DGaz9hMgxaKXSTe",
  "key35": "2UGnhQDPydp6fZicmGS7dwUuEmkvLs12s1xMcQc42LaQwxMr2BGrgr5NxpSFfbkgUUB7NMHF65W6z7mqc4qtimMS"
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
