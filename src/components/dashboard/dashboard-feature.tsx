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
    "2vACQ9XsrkSaKZbjtnBoPybB4SXfzMeaytp7XBAmAupQ4qqtLYmftHMKx7vvjRF1QuBv2wUzMj9xbXmiEFW1KzV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPmCMmuWoVBSR2XvM7jM9QgHrcFic2K6JpdCMSVkTngbPMm4VyUedjg9PFePZ9FyJcv2wtAN7RbNzutHAC5GaGZ",
  "key1": "22LeKQFWpP8PFqLKDkWue2fWjudVi5oXimy1VxyTtyu3wApV5GCyK3gF36dE93c9ozREYsjN3axPte4gpTP6K3jo",
  "key2": "3Vad8YN8nBZnkwzESZfVALDppb5KLPGbAHVBpyCPgvvxG8THiGvXggc2KHnf5t6Xt1byqrHFN5zwnJTW7n8Dpgvc",
  "key3": "3uY69MA4GQ1pVoSppKh3MFqNf21SnMLDts6YkzvgtQXZiSB7k7Ux5gTry2V8UyJH5HnKuRt7QY93K4jx5f5uECVp",
  "key4": "48J1etwVGAT6fAqkLAuuze9fXXNXKSZpp4y2V8VM1pkSHmmr6c7uoKVbjPg1S9MJLDxWbaoCbtZX7rvWTFYjEKdE",
  "key5": "2NY4oJiuyRMSE2tzBE174uSt6JcVWAUp6T3BiYDfdUGDrGwbw3ZzGuicoLsKoLoN1QJAQgWA4YC9WBj36j5Md1ja",
  "key6": "26BHAgx2kQtvt17JhfNSqM13iVMdSLdyWWdVYiPM7aiuxmmhqLgAE2EXXugXzyca2QMoVjvC7mtPZjQ2pD7fxCHK",
  "key7": "WrEJS2CoGfQLBFJiPgaS1XgN9Bv7BsRcs61t253Q2UvW8vL1cmt1rhFEMTTJJCxhx7yXU11V9kw4QQkFpdJQhnF",
  "key8": "aKBwQaHCweaobfGvg6PrWXNEDUvwYsd5ipDYtytFa8TJpi8LW17bJcwWXWAcavNYHpxfbecha71CZ8T7VxKnZdE",
  "key9": "3dhFGsPWcJ5XieJFPT16YyeQ7QpckGwZNCmZi898SJw3wHesz7qvQpsSQEnqxtUNhdiT6geCzeuanNSetWVyRzrK",
  "key10": "5HmSkQWnjKKth2QaB7sxHeib5QppWptjFWtntNYSw4DLGEQ1DbjzqiwmPhJfRZnndKcSW8v6Wgtmns4w44WtdCz9",
  "key11": "4EpqVuY3koCP2NgWyQSi9sHuJEgad2Jwheq2RUrLqDXmTeuu7qbeVHEN18XarteRaAstre6TheWpMzUPkMrL4vYi",
  "key12": "3byd45ugLMisU8rg6Bs8f9PcoTasbefV6FAiUwxWye6WQYsoCAB9rwwxQuXPsapS9B39JxPECcegjchQLLUdognG",
  "key13": "5ytuykaJ21MPtVUTTVJFjpv12d9FHkxRseREW7jYv7eHYg8JoBBkvrmYE4ta3f7wRxPk3gTDV2hHLSWMXVz8tThu",
  "key14": "5nJRQbSGKfkb8HTkFYTJx9ZnTHRG8Bk3XEDRLhRYvEFWEYE2eFcEGiEzsnPzuVxptXGawqBgLSERTccWATn5Pd87",
  "key15": "2Q35SyCZ5qnQorNxJeu5hF9G6X5okV2nD2uVwNaDae8wU9nMt2UFX4CvRjCo9haPkWA4ZnP1cTYKkJiykUHiykKo",
  "key16": "2yRbviSq8RW5U5Pwce1tkejPGwNc5Q36TMvzBPdXV5aupZA5SsJe6esfndHoni6HVyyq1zb7z59Bn5kxUGoCohPX",
  "key17": "5D4ozhxY4WhcDordbhgoiEUMfMuAaHCgCiUj1hX15vhmLVMFEusBWPQQ1uNzFuDP3apNdb3QNHLQk2L4izY1VB8g",
  "key18": "5VqcbJCKYwdYo9AG38rih8jciyQfubVPj7CgPuVRCXAvsP7DbHxxERBCoMoE7CET1p2h41UccSmdJAiKJ4FSMMyF",
  "key19": "63R6gnU84XABuAK47oGfEf5rG1PLdsqo16R7aGGRPEQg9BE4r5F2fuXmNUbXEYFx92eha7zeGwG43GewynERxDTj",
  "key20": "3eDJ9EBMCJR8dFbQKKebi4hM6284LFUEXE1r9cZkCTkdyUU33s2x3VfizvMfcdch767D9iFNPmut935o2mo8sod7",
  "key21": "5EBz4ALBRD4b94n5iSdPBMVGU2EDzMJR51EGdVJvrrpcaKiUKoSqDP7D1uDbj2amr98uXP3vUKKtV4yFyDQeD6Ki",
  "key22": "54FKScnyJZE69XjKdBaCyVbAZFrVoDoa3F24GkxqW8uBSAYhaQZdCefC9zYqqZPakVmyi34yx9nnFNj7Ug3Exk52",
  "key23": "2EtfGPdw8JCGv7csr1kDKfg4WrQemFLXQ9ZLmkUXMH6TUCSPnCN6vqJ1rBcy5AMRpyFir6Ga9RBWTQQtXYKwD71E",
  "key24": "2M6JHr5C5w8KpNRnbcLRjsh4LSNoDc3zN5eQuJrJSQNn57Em9qo68Ld5BQ1oqssLimHVREFkeaysD7H8wMxcukL4",
  "key25": "2gZhzpRDaQEEjwcVFmUWVg6oJ6jZgpaZZVpAMWd82sT7BPA4qPLSwfzW3tSt4vNdHV1xkqQvrJmAVea8bapYpbwe",
  "key26": "2ZSYubLmbuNuPbhABkcD7thWnpZTcMYhJ95qVBdmmKAg2D3GJy79faezojPW34uFzGrAPWJL3bampsFDfdujsiQs",
  "key27": "45tZ3dV8z113edJVWBrMDb61hzcb1fVyhpAtxQAmy9PMY3vtM6rS8yzwSCiNH8TbEwxuuTArWi4cafmi7oE3x6b2",
  "key28": "38PHJDuDfEWvXRy5GJXMpvt2VfLGS3EezRUqiYZWaitKm2EmQzLVuCnknzeqpDZaeWAMffVarGLH6bFnHLcpsNMc"
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
