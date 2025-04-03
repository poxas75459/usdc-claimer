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
    "bz14yBYZVJFs4KFjZK1EgPMMzSEbbhewFPsmfa3NfnmeRDoZ84318yFsdvPShGjaLHQoayttF9sERaQnXpNWnGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4To27rJ2wdaKpS1oVL5aDnNGAZwsdkBWXQ1z3vvfhKFLgzsVYDdxUkRmQiv1txyrCEAsi9F2eHgtkn67MyzH9vYA",
  "key1": "5jRDCpCvqqL9aEnaWM5osSZnXYuxmUo2YQ1vqjcuSrPWGZ8SQKMjryixFJxGMGyJicqFFuxFDj1Yi8RJcRZBsHN6",
  "key2": "sXvcRpdA35fZJd7UHk9AqnbanUkoPe4dbjJuBfaexcZa6CWvUi86dbUwCjKt7NbwMshy843ZBUVVj3id8ENhgGu",
  "key3": "2G9GSTe6bRyXuQKaEtSUwPU1hGHGrAV31ogq1uZ7yZuzDqkUFqYyehkzwiG4BQHBHQyYKJShzZJA8K4xwN8ygBEW",
  "key4": "5R47YYgEtxbPpnVcyB3SPJXqbbL4aujqu5ya22pTvsaS3utoKQT8KKcLBxyGjQRj9jugnsmCnt6cktQHptetVQWx",
  "key5": "yCRAW9H9j4bkp7Qvc1fEz9neUWLaq9JkrrbdQeThd3ZxYwqaRdX9tvYNti1KFmd5LxkYchqhEDFX1vDsARi8BXU",
  "key6": "3psGdTSwnGHx5A4a4rgJprMK14NBZ3m6CqZFfL931M7XXmvC8uCpddsMP9SDYwq5R2gSJf5C8t47xB27JKtosRFi",
  "key7": "3G6e3Fd54CpWYRbTgZqomqBeSXbBRZUArV7bh161dkB1S9UiYmi8rUbd8BvwWoNgrFwz1h4pdB7icx7ZUBnZPAvX",
  "key8": "35LLSa14sdjfMZaPuDS4VboDjmmFosZLbwDyskgnMm41utH1cKzP29eLReGjHdA9ssVUpoot61c2S7qzkftF6dH6",
  "key9": "4paWi7QPpvmJKr3fQV3tGEFHKa4JMQtfGZupPY2F9jFjLBFpXGecy7rEK933mFHEkxByHLf9WCsATS1PDrefhNH9",
  "key10": "3YrE8XTuMDbt62j128hKkkrqMPsvgWRhY5ERb7EbYrEkYALUKU8o6f5UWkSz8FbN7X1dts6NGzj95AN1w9DKEaqn",
  "key11": "3JcVkaQz33yPr4xxQNvxPpinzWpWfTnFtSinQxgNp4e4m2w38eQgMwiKAXBSJuoHg9UW2i95u1hRTNkNrNBcxj2R",
  "key12": "4DbAJxFZem8nd6tMYDZgWMjjG6e2zdyfLwzhuSqfaBPgKW5QxVYvQQF7v293NRKSUeLb6pHgx47cHbBRSpvV75o7",
  "key13": "2sE58YLwJooagAccBV8ZvLvwSrFUoo6TTGq1Mar79TqLNftsNdvCNCxJbGC6wJAT5mru2YyLsbJ4rJedKFgXZmf8",
  "key14": "YMEBaQ9i8EuXZr4Pcq7GhzFq4JuRhV1ZoAfeLZvetjLrGHoCvSqKFdanrxBVWTCnHPQyL3r6gv5Qa4hKWF2dfCS",
  "key15": "2wL2bHYGHwgMS2fcXzuigkDqpyM9i6yNN6LSiWqjBZf373dLScYD2rWuN9mWfn6HcubxiqbGLzEYhwPDCGktMvjc",
  "key16": "3vmsYFzZxbazsKJ9KhrMcAe126sf1wPKxVMS2GLej4evyiTmZXeUSXvGY3ZXxwdyVCqK5MofNeRHkJNNRcMeBxfD",
  "key17": "2vKsw4JLwQNzFTgui7SwLB5K9xnqYMeyMXL69Rsrj76FggnHA6n3XVijFnh1JBBdLcsfFfYTEFsuZFvQQQxorBxA",
  "key18": "2K67wxeA73xdwgBegC2qXNa79XXrmfPqGqueLsgxgDVoZFF4rkTgkF36hSTz9sY7SSsf9xuJir1nZHRZ8J9woMNE",
  "key19": "4gwXxmL2ptmJ66iw4iFahd6n8Eayza7JDnqQ4PdTZygi3EUGHsSrmvfjhpmUshFqYzbFbfcEqVbSYDDsyaSVjHdm",
  "key20": "2d9nBrZkCAw25GWaR4hLCJSZ2FgvyLhXuiapj5F1cUp2xMPZoobo8YHGUAtBRfoJBvc85854AdAHELKj2qUKHrrT",
  "key21": "3a3LKNYoKW7AM1rocY5ej9ojPWedpdJUP16d7T9e5Nn7HFELcKJyv4mT5jVaEJedtDzAX3wGzz2wEQFzttrVzTEx",
  "key22": "2Bry2SG1eLpd58jKdT5xR51GSfCVa6Y49NkjjGAaaiUwzQmqfXJbggkxDzfeWzoVRnWt4meatY49PvQubcqTWsr4",
  "key23": "2eovvKBj5R3T3XJpYkNUAFECAa4ft23rp4A2oTr6VenukscpLAVHimZGhm2jB6wbTmkxiW8S9exxoWaDmPwunM4Z",
  "key24": "9kKthnM9VeENu6TZt7MpVbgwGCcKx17pfMZ3MB3DK1fbayDwvGxHX6ZMDeS3kxCWDfkBmBACFo9soiA7RLjcCMF",
  "key25": "1qGwzguTBXGAYGEYhSXjMt1aaeixzekQGKbjJcj9ZZ7GGgSFzqLELXYxVBvnvZbxUH58NPsqqTQke5GkLyn5Vtw",
  "key26": "HbG9RMfp7ktCRntqQtzLYjUgzJysYDtxN5M8jja86TcAtr7aTMdawn2Vf1BdHDiWAugDs5fBFS5Ye6yhaZQp4X6",
  "key27": "62wxorUXbvMPPaauwRYN3bDubK6gVwSKerzAWe76eCD2F2jwKe16ufTYFQsyDpdyfyyq6ps8R66xY9azMUphxk9j",
  "key28": "2AJP3Rg75Yz5Kqq2akQx9kaDERLCAbKKs8YT1A44eP26AQJf2sebbvAk3idHA5QTVCPZaNc3A8HLvLfYVW7jVK1d"
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
