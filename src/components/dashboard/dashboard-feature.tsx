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
    "8iDRuW3T8TS6xEyAoiPRbvwbM3EkjwW2ihe9PQfiC5iqervm58k8FYCXfCJt2Z66c6GdSvriTwCP8mKDMoNbPFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tBxkQJxJBJ7EdtbXfbTXzmHbCcXnydvU6hnqRJVtSdCGoFQjYgzpnasf8QAx2Sj8PMP4RZysNZbwszFq6bvA4K",
  "key1": "4Wpf1HzKZV6Z2b4or7jWQcHKf44ngsQiksdTHNnKyWRxRNUyRA9jZCBvhmCGy3XAMQnJcvgkpj2iordRQiFmymLn",
  "key2": "p4F22cm3FHQPCfJ1W1BBQQAPkvnL7aKT9fUd6doGyRGHWkkarcAZWNhtuAXpPDNsv4tNGBqWv15Pi4iL1ns6tit",
  "key3": "5hJB3BY4bTNz57zTnEPhmFFx3qexnGhFEkreZb72nFnmK8J7JYvjqAQLi4gqSdLYzjAP5yFcnxME8WYsMDPkLgJs",
  "key4": "3jX3u5nCLhVuiNLKLKUnaNgoyC6tYbz8SsQoPkgf9gnyS8dn3uDeuFeSh1YoMW74bsUkqfQXha425twk86oUjPgw",
  "key5": "65pMHc5hy4HUTU3PH8YFYt3bbwhxZsyjzo9xbTMr2QZkdfLR36Qh7CAb73bPdJThGqcsvX8AEhQhMUAR5NMVEJU4",
  "key6": "3bVqFMViMM2majSEFNrDxg7EqxJmMPaFDT1dVgUXHeZGnUdLZw8BKbB7oUSz64PTvArEDLAQT7ED4G5EmYE2UeWf",
  "key7": "29kxDZWb1Lp7zygq4wTjMNf83ptYA9UpPjPtKVGiafLpfn51ZyiWbeZNX3PqMSQuEBKSJcQjGhudmLM11Dmq87XR",
  "key8": "558Wke1yj3YG7PyMJYksjN87AsQz4F6Psj1ChrV5mQqwFAxpr6H9ypr9JX1iLYEhsZbFvzRpAB4PBM6GLH6d7QHr",
  "key9": "bKsYZ3EcsgBWXFgKQJEXdHpXXctNdz6ziARSwbjcNTkSeGzVqagk7SGrUn8DuE2y3BmvtJ7UKSwzEvibU9k31jP",
  "key10": "2N8mBT2SxLzdYWMSmCYgH6bkwfhSypjd2VyTUyNKRwDpm1UnJa7WmF8cv81P6fvKFjAipVrrrWyA4SCjf9cFDZgR",
  "key11": "5eQCgAFrV4beaKxmhaKrM42uZBvXcUBEX3CZ1Y9udgxeFvNzJ6uxfvemiDswFgzm9pNKYqdfbckRmmdAMvHhNXED",
  "key12": "3a9JUDQF54uJDGK29VoaqhsYM7F3aMeYx6p3M3rCWjwgj24GrDy7w4vkkjcAb1nQRMowHCWiYNXpLdUXm8gtRsiM",
  "key13": "23uNcH9AC3zH1TzW2UssPVdVKbJwPJTRfaWK4r1kcqdzg4BzkvuG5eAHAiG4MnwmzTyDPjchL6ECiS62LDJki8BQ",
  "key14": "5ngssMauLGStoNi64HAxcJFGqgyumHVWMYMKx8RUjVJm2YV8QbNxsAZeSK2Lk1wzWu1p4TdQZJfBEMSpJJJyDkJS",
  "key15": "2xJhLVTpzmUWE9cMCFD3mCm9JPoJL5QbBN1saTo2DhNiLhsQpFkGrGwEu5MzHEyHePn6bPabRD1onkyjnuxbJUkx",
  "key16": "2Atgc9eVHhCuw8DNqdrh31ZhQKkF5KLjWR7zc2eR1MxCDPgjfRkcvKi7r12Y2nSyRBR3mF7W96UCmRPwd54wciFR",
  "key17": "4ZjVNQMaJ85tebdhfr8hXPkfwuLzf6WYCacCwTsYtqrQZxYu3Ak5GfiuCgSwPKLf887qsuCWn2R17qy6yYjksZmk",
  "key18": "VMGzKizg98kDN3Vh9Qt6gjTgRzzu4Lbc24aDxCMBhACURkcdpssLv1LJW38bhTGhV87hm69zzteSZiafNNdnZvK",
  "key19": "2Lb4qJ6X79V4kmcqtDBsWyu1UCot2v1vhFD2D7NDTvmwPU7vfQ6mngZDkvWxADqaRCz59jCjoz3ijEpH8V3KUVED",
  "key20": "2PcwDykFcGBBtH7Pu4zedCoAvYSqnmPvyTfMegN5VwpnGubLAtvK12iW4JQeP8Yr2oALYJCCKnuVDB7BQDtGEKYQ",
  "key21": "5K4VVLiZVE9N44Np5ZvBtXP35y12xJdrR5XGAXziq2XGMXBW4E6ptxwf92oZ6WTkRHJ1YqHJDLMuQZDLpqNMfRuH",
  "key22": "2hrW4HTsMooHXVcmzYBBtoAgQf7thUDtQo19YN6k25zmwcyuw1t543gU9d5AnwhRJyrRJmzHDvHrAkTzjKSuD2Sd",
  "key23": "ujLfhMZCZx5xBKiShREo9WGDsUfx41bbDqgkdEbfKppG7qjRJQpJULxfSU6SD9VkCUrCTjjhJh3bfGuLmcxg78W",
  "key24": "yes8J7KFsRHk4pPHLzrbmU6scFPwiz6XGXGuapbWJ9gE9iawKdv7REinrmRWso2L449oMFNBDBJJntFzru7j32x",
  "key25": "2nXTD4hnpaw9GLK8F3VgoypPhDcunWehQ4772oVZNdcaDNRmkFvDszpGf8AfZr5RHH6Ex72DpzWEKRyj3bqEaa1o",
  "key26": "3PbvzvLDJdUZRenL9bUB3YFw8254hHF5ZqdmVdTmcoC3gWFZ1jLkDxF3d3pY5WBs3dmLmsT5yifRK7wZ5H24mYgC",
  "key27": "HGSJvJ4aKt9pKBNGGaj4Ee8fpSLomRUgYpSHhRXz8FSDMoguoZPA1CPMnCJNBE2HJPHJ2wShjcms7xcHGW3gYts",
  "key28": "3PEN5BJvVdFq8WsBGTxHfdrYoThG63gyodW1wSJK36NPYj9dr3tuvK4xT7dc6VP1KuBAxmRHuE3jyaWtventJ2di",
  "key29": "2YqUfsaKgdC6cukw52Kb5mx7VMEppbtwCmSHdMsEdzVtekVLC4kGLELBRRvL6xr5pLWGQzPi41kBSeRRwu8NiutK",
  "key30": "5ufDWjvqqTXPF6gwCr8mymHACKf3L8ohyzqb94Ttgtom6PvpmDDxJK3d6vqDzw2yxRkqXLyJojdFHGp1xhb9tPJ4",
  "key31": "2xVsw7dADcuZjLvAic1mk9x5AJ4V8fH87QYnnTZvELgCG3hjTN4jENk7uHquvoN8HKcRA98yRgfhUYqNSQpHmQPT",
  "key32": "4RncJWA9YhvLcgJC68qHrFW1wCya9ZzYjaFbcY5yp59AUdhuooRUQ79UYofnLx4ad2Jm3svjFQqp2LG6EJz8Y1iV",
  "key33": "4dPQmkBoXiwaLEwCjsH7zsJPwhFfoJvxLJzy59uxJ3F5g7PBUVkNhxumFQtR28zU3MXzadnQrStTTh6FkRxYHBio",
  "key34": "5ag4Wna2LFXZVHrMvMDgMEWMJR9Y7wv2rPCfBbRBggK5WTUiiNfteRjewdoGUKFJuKPrppEHayPt74vt5XWHPLtW",
  "key35": "3ViRHQ9McPghqtdUzunU2bQ7qArT45DYSa3tjz5imowtkwkE8xX65JK3TcTboMHfQJFwzqBmT4f3pPZMv5vEqd3D",
  "key36": "3RdfSt4CHd2atzf94QX3LFqfPs9CBuSzxUPczx7DmKESfBx5HegT62LKduWpjojCbwgCUnYjAJNzQdo6zfNuxQhi",
  "key37": "31rjNoKoVoGXUj1jfy49rhhRfvjXj4S3JK3TbtvMjxno61sxMUxJdjhhMu4CrM6CznrTtnc426ipmvkSvejGm9ih",
  "key38": "4SSQ7twdjn1Yx7TRqLgHfP76THeapdnmQuWLcFqFGjTbhe5jharjTQVcCywBmQXsokyqCXM65dP4wnZXciFkDa56",
  "key39": "4fqdadX3EvnTaYKamCm4uEqdPuY1gKd6yh2uQZ8P4GbrihBh7zhRQcQbHLz3Vp8jnMSGzmMZ3ew3W8E8Yy85bUeh",
  "key40": "5dn2w1SzbANSn7dnqrzgtx8yMcnpH2F9HcY2bXus9XbgMQ4RkB5SQFyvgec5YCsyKpXr8U67KUJzHBZNR4u5MMQH"
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
