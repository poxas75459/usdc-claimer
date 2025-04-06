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
    "3U1igpeyA8sVrTLMz7qxEfNF6TtAVny3dAGDJyyQmyShi4wFY6Bv6RtZDz8eoUTS7nupKjpEmrHMEY82PJEuJ5Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xrf497L2sB9rzyUhhGXESVTyKjzgyCn2BFrZddiPePGjui6GP6pp6TFekFbMGYq82yvTeU53UwygPpxjJpuQo5G",
  "key1": "T39Wx8DsaSn9RcMumW75mws1VDJ67vJErJ3Vs1mhut76H748uQdGd4KGX4c8u1KgF69r6YBVBvpgrBgurnJ3MRh",
  "key2": "5GAtrMRKc9i8Yy4XbhCa3SAU67ZJ7AN1NBwFMbKF8o1VzeuAwozL1cL4NDmc2eDHcUfHs4QLYJpae6TdqFPGxfsY",
  "key3": "5TbcQpHTzLh3XLzUbVrEZAfrSFx6QjNqEDH9zpz6eV5pCBYNaCyPH18Ph9puf6xyBwEJJW73qmk3876dZ24N3fYV",
  "key4": "3sNvys8mQhd5WpeW6eV7mGrugVoDi5wyTwCjca1UK4KN3kzUoto2nL2nzDLKnPxMRYTZMFdc2bkbhCnEXsikUvHW",
  "key5": "2tYZRN1cLZ62JtMXSYTcffFECv1r7CJxLsgntBBvTEcBsN1bHbw4W38V6d8W5hnbXG5aG6sTmyjjPgfsigVCoKKF",
  "key6": "Yg7ZGJj2o8rmDT6Gj1bCCKfRMZ6UuyYH47oyBdTvQW2tjKMwWwPjqfvA78bzNTrNS3rTXMc9M2968xLEaoc8SiG",
  "key7": "3Sa6vqp4Y9qTtMgG5ahHTa4ebZrU2VPu5RXnC8xVyekHjTnYcP8FRVJTgGAuj9w1H867LyAzAxJLQ24MHQekm5CH",
  "key8": "2Uk21DGkxnbhEAeg1MJCYDwecwnwQ5EmsGqbhQ1o6cChA2tRN8s79A898tyqyuqkVE2wUY5JTfMdUN17NbxgczAU",
  "key9": "wSEcwDCW9rh1nao8cc2AM8edbBFXU9DhHvd1qPVQiF8xenqWtBXchvFy699vuULQL3EhNYjXZeiFPNHA3hWmcP9",
  "key10": "4RWMeEmuV1bKJU4477r75TKiFsEzUJR9mrP82UTUKNfJ2ymfhiJxbnj2jgL6ieY6RhfrmzvovNdi4xEjURa3XGhh",
  "key11": "5zkuwpDA4YLXopdKkrhYKeTvJE9FsPMqtvHXTM4bLLVzghk89KU9eoFp6mgXEnvRmfKbpnwJV4rnFicv1jYekXZr",
  "key12": "47CQ4xrDFRSAaRmHfrXLFQDBWiwqD64K1ZChq86Lau4LvxMMGdWahUXT174evwax5fKzx6civsFWNkQuwGMzAxBk",
  "key13": "AbmWdupfpJuL4s9J8m2Crk2kHdtVgUE5fNgNPbRbv8WTHyo55kbTrh1taR72EENaKC1kbDU2qF3DDEbkwR9RrnV",
  "key14": "2X2k3meXcgq8ffPSbY7W31BZt2rzH6iRGyxw6nLTDcTjsTeGcu2gkvnZU6899P6rkJXQNfj5vZasEMoX37d8kPth",
  "key15": "52uodGkZDEdgkFxoW23bij9PZC8Lqpys1wJUwHWSPZ4yGH9RNj2ySgnfAswhKJXZCtCTRrUa6QtfhdzSXLEypdSo",
  "key16": "JPe5H6xcmdjp5jAmqSodh1TBiY2fK2u3WKAnk37oC2uhVtt5hyruQidJ8dh2wQapbAdxkCAUVfGtMaBopQPQSxW",
  "key17": "5UNTzqDVswo3bg5sanxfi9NpP7s18QT1bdB9J8bqoQmaKrtqVN71Rhm9edqWGvnKPBMgDGZCGdUprZ1U5ttVWZe6",
  "key18": "5sjyMAwd2rdjPKL6x6rHh4TCMC6SyJ9ubmSE9j871DqBVmySp9eEZvSiSDeszweG7HJuE2fQVCNTVJctcxbjNUC4",
  "key19": "27tVWbja1g9xFf173GZr19zJTEvX4WRQF2yuZQP8A1nkgiGhJYVBHuD6f8gKoWuL2QkM51WXcMa7sCJj39Awr9nG",
  "key20": "3Z3gEpjbpjJUw95rvN4Fztx1b4tmtiXncbW8phoVoGNKVZJLVpJcVLhfchs1xx2VwCevgLDuiRsNteSJaMjQxK6c",
  "key21": "Pd9hcY8tD6Te5fx6jPT2tv6LtFMRmQ5TZdqfixkc5QmcUsJTbuKnaLQWWFJDfjvxRcwdkYteYDaYMP1yE7LodUt",
  "key22": "5eaQ9r243mzU1W9P7XHV93U8JRuaE3797FUNEyphU55WhesVVPiYcsT4Jmky2wVjzQBgzXQx7M7Bi7QvMbrjbbzJ",
  "key23": "53DbXPY1Pxkf3ab9eiG1ZnegaMNgaCB7BUa7rteQTRE22SxUGAB3nZhrWJmDD6ZMBnb6jVYSk4DJq8XRMLHYV1Ad",
  "key24": "3a1QN8rXMe7s1uX63pU6ijJ8zoUzpCA4NPf7WP8nmebNB2ssm5uHVUED7Eth6kKFMp5o9gyL27WBySyCXU2KubbW",
  "key25": "aHmHsHnq1FW5hAspcp8zGWYX4ucvGAVTnxVXciXc3Mm4DybT1N8MtWadL55SyPUmc2B2EzpWiMAjTkuNLQeKXfn",
  "key26": "3jPaFr4ZUFEWUxvCcYsC8cWpuy6m81xvLp2mUsZFC65AsKTtxQZW3heTMLTQtZPKu8MP8fBtGbF4U8VAD5UKJFvj",
  "key27": "3RGdf1VbJuFjBShKZtYkgctzTvpNNu1dn5mJaD3jywdZBvWYjt57VH6TxkSNaezv1xdVfyCyi6H8QSGXJ1UtryG3"
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
