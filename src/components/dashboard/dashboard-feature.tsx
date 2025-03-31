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
    "PQJbwju4rfLLeCZZXBxiQze6eK7hnp6xNxmeCGDnKaxs6efMLmTVPzpmeiPiuUFnWyZPNM82ewCTgYBepWnktVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJDxy3n8DfcVViso8Qc4SdMU7QAyDh5J2FBjWTZ2ugUnxv2i9V3YjsExHhFUpWRMSXbYQxptgiPLe1cuV9JR93B",
  "key1": "3QLMCLxEwQuLG97ryTzH5HFs3A4QYCX52YapjUuEHq4jCHwf8Xdss4vid37gvRuHj71xBaQHHbrsB1pc8RnPTmfQ",
  "key2": "4Sy9KerpeBMEHJPY6wBwKLVJAfzHeJ9YiutVPh7HbBhSFf34oqvAeMRZibNjzKWJwhaJpkBPqC1F8MPLj4eY8XMn",
  "key3": "3Fab4m628SoJV3hRYE7eGoperg9zztE2JK56TZ9WKfgod6tijuo1m91FPZieVwuhqt8eCyMiptR65qNSP6t8T4XZ",
  "key4": "46EAZtPovDtRozBVf5RQEip2y3nH7krKbq4LwrjXLEaApSYtPHcwQNyEg9uqygGb1zQeFh1Jf2xPUJgfXrJ17Csu",
  "key5": "3LeZMorVnBEYTmXQsnPoftnkxzQZMjVCS4t13bknLkCbU3jfhyz6L2oh29SZWwXNGrzpCnz5jLBQG8E6zSxcY4cx",
  "key6": "suPSAGmZrF7962WW4D8qr8hz9mDiViWNbG9KGjJw5KJt4ug3WVVyJHhpqmVpaxocMDhDn5486VY9FwAh6v73BYe",
  "key7": "7czo6pMnc3KzeBisuRyEVgJ1EVQ7ijnrUAXbfjut9q6w1jQjcNvdtpkepHfJ5BUdjWHvVfeeWNyRQpz4k4FvopD",
  "key8": "2eHsvgF39BFSNtAoBvCSXGSVPvieAx13s6aFovrUHXYWem1Y2AGkKkmVZmAF1MeYtEKzhrceQtNkPnDjxcX3ygtG",
  "key9": "4ELamMBP4tYinauyrV2s1ABm8jqGxr7mYcy1c8tove5inPtpbPRD1Dx3d2ChwLF6BagmuskVosnzoM92jpgL2dmY",
  "key10": "2x5fHfETMeYqNtVGq2JpV8v737Vxv4ycgdtBJUq6vbzcUrAJVYiupRU4pMGRMEnjDdQUG4AZM8QBRoBYefhDFu8Y",
  "key11": "2Yw8NAbnGgiDLARNzMcUwbRbKh3GHTigQ4v9fCFbu5HF5JZwmGjJDmK4yopZAd68mfTfaiDxeBo1d1eKz5GRQuo6",
  "key12": "3x1rgViWrvA5mNpiqiqCQyKaqKTPAvrKa66WA2HjyQVLAXMdsVrPJg35a2ECiDcdgs5jgGd44py3RPkDwXsebQd4",
  "key13": "3PC1T8CFZSbpTR8K3chpFbS5DKkj7at7rSgYicDgWMPTUftx2gxJcvwE6Y9n2k5hsZrVffzktqGn8SukukeNmGjz",
  "key14": "5iyMLCAd5Y64Y7VihbKkPWR6ntXyE25WQU1US3vfszqha9HUZUdkzsUAeWWjbw9YuzpkGLUZsdwrY5jF4hkx4m3E",
  "key15": "2KR8yWBQu1hmd1651aDbXtKqnjMtBx1nvszNnMYHBwWfKD2MUuCc2tSkKajaEeAKJ7meg8dccxo57iB9qna2djz1",
  "key16": "51fjsZYuvRpbNhUz7DJQPJR4CNHL75mVaboCo6FannRvfudCeBLMDLrKBgjt4xfSMvWHRRjHoKzZaz7Y1jVNo1JG",
  "key17": "2tMa4fhyqvaFS6T9QJetFwQMQP757n2RMQU1GH8C4Y9gea2NY1z6qFB98nGYDtJNGCqyrNyCgEbYbTkDqRqL2eXZ",
  "key18": "5cfcWeKyfoAqUVJEhTtJj3yoY3X7BrDmAqeCc74VFSoN4AhdV9khSMSLnXs6fVA9vuY6fCLGh2Lqq2yJMAGva5kK",
  "key19": "2RGxYPSNdoYZfVAdstDxk9tQK1nWM9KeVbm3Y8bZCTUpHyw5ysVUDmfBJRQ5YkPUfWvUzWqHNLDngTQijbJRRkhr",
  "key20": "5npQ3mxAJLr2Fd1ATWAsMKmdAEMWJ3dge8SEQXXQSQaWSD3UKa7wCjg1s9X8iFRzsjKiDh3xxoxDKBCQ12UgQZao",
  "key21": "4afg6gdmXYSYQ1y9oJk1NffHgqpZT9bLEsUcPXPER6Le48SHeStXpBRWicuNY62E6Hfu9wwh42EWxcyKKKrD7SE",
  "key22": "5UqTZ764kkUiFgtDpcC83FfwHYr3ui3evn4nZSEAGwS3jqA6PmA43bj8YkQ12KQb4dRPz3T43oe8cWnr5Dh5Ecu3",
  "key23": "t2vEHDUwCSjV1dciCGh5XoT6LXQBNYBaJiFn9iGzbcWFMgLhBkTqotXbLeE26Av6yNBQodEeCfEoQ1wy3s4e4a3",
  "key24": "64hDzn14PxGQaaXr6vTZKyi2F1SvxMCb2APgxJB5dYB35rHLN4hgiUosyNmF6Prk1u2LrKatuwAZsWywAvzWzksD",
  "key25": "uLQuwTurBerniz5dDffKeXejqFEteJVehg8cm35oEjeH3bg7zQSmVhnG7K6bbWCbvUu9KhdXT6D5sB2fNJrjPZA",
  "key26": "Dyadbb2MmzQdGT9Ke9f92wjupAfKdgKK8a9am8vVgqS1V84NmkWBEuLEQcofFt9MEGVd6g6Y9mAuU59LwWHhZgp",
  "key27": "5EjGecrSjMVqndFfFzA1UQ8mRBJkSsPbvhAsoxFrdkMzojS3LYUZnyn2ygPMQibWy8Nz5VS39T4mrPg4PjFQvHL3",
  "key28": "Gyhp41UTJJXk6JdfUkYeyCVG686Wmo7j1Khc9Q5529CimW3Q4H96aKhQr8SnpHdxD4WrnJqJ8smaxxmKkzJsyJh"
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
