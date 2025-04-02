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
    "KNwqWsCVCaSK1zRoeaTHTainyF6akPn32w8PJZdgRqMyuzhBK6SSzYHM3aJePKYRUxd6hnS4gpUesk9z8SGFVt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzBcHycxRCJfNRDraiUDg5pe4avihxEbXwBeYuocK8ResPD1RQQiUyBKG7aZmknmr26w9pwUxNom8Hi1NNq5jJR",
  "key1": "2o7zTVUzc1s5kAM2pH7G4TSfCT7jm96u4eyACEcAMLNpiDihcqdbX5LjCY1wDLPnii2QFNV3TcsGdkkB75rcEGXq",
  "key2": "2M6BMQq93PEB9ycGFM54cdSJyPQr7AXxRTjiptFp49bQNd3o3mjuEvN13r4U3LgZrCBGbNnSq1dAWRu7oTWLdMsV",
  "key3": "5DMghdmoyRK8iej8EjKAPj6d9MKsYzDQbF65Dd692n3TxQCx54E4KWyvQbjwFQtNAFAwecE4wyWSEgg7RcFAzTNa",
  "key4": "3dm8q7tw5yuZSjsZ4uYvuxYsagjDW9mbAXnE5mrtR9GvqXovUGPJ3uG6queX51mePaA6h9nQPwxcMR3Zvus6Sb6S",
  "key5": "zfsatZM7zLuUy3saQ9FNQdjFMnAHAEiQ6VUjWkv8tAdbbbkDqK7yTTxzsw1gKd2Zd6Hk1ML987SqK1x6c52dnwQ",
  "key6": "3HiYh571hNBFnvhBCobSGctzCECJiBCKZXQCmVaspBHyhSATPARGcyCi1mpPUZX7L2CV6TJAgQf6LZqHxjnQKAQa",
  "key7": "27nrDcZJAM26ExL4gtgtBZgKiakbMcbiqzMULDK8MWuR3K7kBUD9ryvMAWfGDQpEpSTddEM6KZt3wkbNUi3mor6S",
  "key8": "2CHE5FoQJHyrMWNc1eHwNoV4bTiYzei54ECk5J5LLyfKy7WH8VeXuNoCdhqejw8WpBapTtnhBXsbn6qgQdjn1xL7",
  "key9": "56vb83qKb67xLggfPstKRQLXrcnwBG2YRDwvX1P2odTFqa7qJjt3EPMzG4dNKJpmVFr93Z4ZCDrr4ScnrqvUegor",
  "key10": "2mz5N6NxSbPpUjsRKBecdH8qFA3m8BUQ1TPBEMA3JdABQ51YbuFsmENneTNkd6JzbFPwmtnfmGxBpsr2NMGe2cLX",
  "key11": "3FdghftoptviBr5teoydk2WA7c1rPL24sE3DSFSGC8zCp6HdfZ1hCbCuqnP6stwAEYR7fhUQjRBoExdLmnDDacna",
  "key12": "4pAjA6bASsN1NT95miQiDtQdq7b8tx364XEkCggd5HhDWd89tQfMjpTWpS8CSQ7ZzM7EJQpDTinqGtMZGJd7GM13",
  "key13": "3uLMQucVLtyd77awAsc5LPdW9gbF8nkaS1nfi5potzc2mSSkfJSGdXsRzio4nZBjnGh6U3FLwg5Zz5wiVuUVGbbe",
  "key14": "57jEgZBXf95hDYvGvvBGcTSBzSyEjSWbb2uYJppeYi8m14t3oXCjboEvinXEfkvUEH1LskXrpYSPkq4jPMEP7J9K",
  "key15": "31rCobamdteFdSG5z9NXtXsF9Hv6GRMJyosWGMskZ99sJcuPCzf56Nbr9jotpnSAkv2WqmzHPjiK27rDeL6cy9MX",
  "key16": "ojrYbxixP45CtZLPZQGdeUPZmPBFvYjjbZ7Xq3wEaPkprwEfEpnUg5ptSq5NJYriNQCuhcLkSwNTCCt6UypPUDF",
  "key17": "557HeZj61mYcprN9NPDyapUbUd8Qrp2cP9VNARUd1ShkzgcNhb9AE8Lf6QhXZxpcPNmXHw1ipip5BrQQ1hDn8orG",
  "key18": "4ByNvGKuqsgT46SiYd2RBWLbFvkhxzMd7Fgdz6RK8s1nTa66g1wTaZhtzrcshj9JPbtpMt4A74XtD4ZC4pLD3c4X",
  "key19": "5qBh1AWHTCttNVw92wDqo9tggmDZzmzZwDukvh384NubhZVPTWCgwE2Tuq4YrpDDg6ewux7RE7XgkgjGQwEsFYu5",
  "key20": "462UkdNfg6AC1XVZwe3wCxBBo9roUK51r9mACdVAWzpNpTJeGfYB6nhWuoN7r8mXPVF29EfatzB3exwhf9FkuANa",
  "key21": "27SqX6nGGpmp8AjRg1si5ZNqz8j8iwR9jFkfXBsay1qobRgZTgueYPBCZD5NtuNBb1cBmsJG7o5hXPMqLQdrD8i7",
  "key22": "4eNMcQ5ao7xpeiWTVif32PuWLDgVrg7YXQheXHre4UgExABAYhoLJCTrSdEjTgGHyEyGk6XL7tuotJ4Wp4u1vkzQ",
  "key23": "bbp3kj4Eyh67MbuJEmntAV9nR6wbnjGPYB3BJwTkcaFN5LoJ32Bg4KXMFNrTr9Wp2RHpTBYWhLxaqzzQDtCsaug",
  "key24": "62Rd1zi88gHt6F6hMTdyHYmR3MVNc7Wi6AUZMAtuPTcgFPz2stYTPNERb2FXFCAfRRG4qPdqs7Gz1nEQtC4AkWk7",
  "key25": "39AbMHHm93NmZyk7jf2ffANo1CvrTXE2dcNStxs4JUHvhvaUUCrr1S3QuH2cn7D2jvNKUwzLv2GMXvKnNBDs1Lsf",
  "key26": "3ETH5YwMEdP8HucwGpCobwDNFXFb9fmj7C4k4rQnYZhXnNKr9VVZc35sw1x3bRBoBXwS9KD4zhX2YkHBjGvsWk8R",
  "key27": "21usRvkfXEqxwThL4gEzdV4LixYARo3RqJRVhFZN53uw4kQQ1xbbSeze8jSxwmMX2kgqVSyobEYSCbEzWN86Zkbz",
  "key28": "4eEA39AjDeMnCAJshYGDg6eUdp2VL2GDuGYTcNZuwfnd3fJ3vSSiJCMSjbCrtCJsy71hb3Kh2bXG3orUFqkjuaNB",
  "key29": "3Rd37bRD2WG4Btu6HBC8PgCguEQiE5UYAKh7eigyHX37GCarx2DMu5fBBdqpM3t2Ga72EqnCAbcZQ1h6YPqX3n1Q",
  "key30": "o4ybAZocCAzRcs5TdBpH9hQKJbPRgcR3q5uQJkR2T8Pg2rKXFR31XfA3YZgMYwM7DBzZrtKgzdss9ZcFY5RHF1C",
  "key31": "5HrjaEaPuWNP6QkXDMGJqKMUM8bEVHS925weXVYWizPBJWtHBad4eU36uAPvFUyL7MGPD9u4TySF3fZ4ApsXHtHZ",
  "key32": "3KPz2528qtX3iDhSX9ANpS7wuDpG71DVbQ4MpW4HtqVuqX82xzK38Y52eag9rHYr6XBnSF8UgTxW4eiMtHU6x3iY",
  "key33": "2K3P5nbutrDeoejnzuZvLSg5Eqn9nKQ1gVMwyt1GcrjvgdSSAcs5TL2y9Y5ecwgSz8QHSy8EBGTLWggf41ZVbikS",
  "key34": "3GMqhsEKWpaGbq666HJ2mdtLQbaYRDJ65uADSfzDtqbAQg78pssuhw2q6UNGDnDCCjj6QRJuvJ2mTF76xzXBfAj2",
  "key35": "29c5Fb98tHrTM3DFapBZsYCJ1uxfr37owKYPebUycHY6CyRzRUDgbTGw7firamBEZkbgRRXtwzQvYaKWCc93oypB",
  "key36": "3ovAUMPd3dDebrrzEKSvA6PDhY6vjYvZSuviUxW4UxXu3DNYjvNm9D4KkXQTH941EMYCT2ZMXK6SuzqMQELDfuDi",
  "key37": "5HXiKWeB8eMFeeADY1AbaH8awmwEKaN51K54aF8fndrVqyEw9SQ4Zri4MShLSPQuQVwBEUjbG8bgNKFKFmAHne3Z"
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
