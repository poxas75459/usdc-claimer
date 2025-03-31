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
    "2EZgDYGkC76te9KD9834gUQQ6rVTvds4mhKTgykEkSdvFt25N1pFMZawJJvPmwmX8yAhK4mBX6RHTmwEisJqDr8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUApWwaivwZaG4GgmBUQUE8Z8wPuPga43kEL42z7ZfebFMPV96YfmvEpt95LAVsGxfKnrX9QyFYwGX9JT8nm8vj",
  "key1": "3zJhPDMcyYG1ojL3pemwpJvuzc39ErdKSG5se3NxcS7eMZ4SH4wvg6sMRBmuLkv3UTRiEG8DqJrPsKpBnnMQLDLU",
  "key2": "4iGPZJTdrnJkrRLbvJgEGvqSrkAUaCEpmA4X8kK3cgKL3nruiGtN34v7GioKmK7w2y73vSVqWY375x9PXzTZufwd",
  "key3": "3oWcUKzggJkqw6tRVJwmaz31DRteT1EcQb7B67GpVanq58ZE2zHXqjjurC15cAk3LcsiBfSsPCYvV6jTeXxBzgpo",
  "key4": "3kmjQfLBwy4tuzx4zsd8Ux3t8D7tCzt5sTUNuWwK7AU2ebrcX4Fssek2MeSJQDLQ5k5wg2Y8hDbYYPZaGdXtrsYV",
  "key5": "5eEtaUVAFPeVxFeTVTgbEvDNpofmtuTCX8mJoFWnXdiWhzZeLDcHHmJHnGFVinVf2D9kT3LUjqio3pukzZ685Z2g",
  "key6": "FAurGdzhY4DZWAq4sGA65kGvnqvNXwEDbzshnzipoR3YGoJVBfzi778XXzYHc8LgUFGZaonCfaJduyWv8rY7YDu",
  "key7": "fvY3TJpZUo2sbmYq5QYGyNhCJiKRX9TyAdwhxfCFkrnuB8UGtQ5xarvkwPudUuxcPHo4mWoLLZdA1Xmp1Fn31rw",
  "key8": "5Ex9qBb887SQRxweT5a2vPTmRrd4StzLfZ2S8EJtk8khcKmUQdaa6L5DMkcr5aPNqXtBYhrReY8iDbTTdEMcK4Er",
  "key9": "4LpqrARA87ZhFvm4mcDi5in9u8hrGe2puqAEcsP9S4uwFwjh9RQLTwtykXU6S9dxSUyZWJX33GZggru2cykCWPg5",
  "key10": "4tQwJRE6RpGoPccKrURwiZ7S7VoBU9koW4XDJa5jyTCyNtFiys9TDhZU4WYAFxPV1DK6fBqhJFEj1P2nZHEXZQhG",
  "key11": "36d2jH4J7GxyfPgrrYREZ7Y82GL37mBeYaFTMkwFXi3wqbx8Pz6oApABM1XZGcWCNi2JXec3tcAtZTNA7LzAsxf6",
  "key12": "28AZRQsdBAZPFiwsYS2hxoSxotWpU79e25MQDFKXZEVMjREXuAxnN3vv3BHugjbbq21eUJKwH93VDrWcLbz421Lm",
  "key13": "4NCdz4Uw4ACheJk1bM7hqSBKVrzUa2RywRN16H8B32NpbgLeqEALAm6dFYy8HxHnwFJLA9i9wwcSJQc7dRkVAStu",
  "key14": "5P4joGP6HsywzcTt59EmRBF1JMP92DfPikFifL7jskSEJxVjmvR9HZaQ4rjdzn7vWQmSmbkK3fsWNhVjZ2bosJ7o",
  "key15": "3pHsjk4Ctkqg3GijaSsC1ktRFwZKFr5mEVpPxM5rELb6BPgKkC51VkduGgTUxz7DCUeMGBz6a7MNSgNU6pANuwiH",
  "key16": "3q48SqZ2Fm3f7QNvkN9rRhSGSjDHz2tGfdXNmnkgTU3JfkF5e3QeqdvJRotWkTmfbbRt5fMLsksLYpWACraPzGnY",
  "key17": "2Bg84qcPsJ3RE6FppoWJsMEbUNKdMczwYaGRYSXyYnoRgo8yS3aMN5Nmncs9Y8xJQs1p4nfYwMZ8fAnLBmKRTTaG",
  "key18": "5EMDzsVe2oJDXfYBRsvDSYL9txKYepYb2thEn57wrpTASieM7bcRuo9NAMQ68mMBvyk6YnG3fuvjPpty6eARvoNZ",
  "key19": "5BiE5o5LXtzveoCjYP4SVosMgDYZ1751Ax86wMGmodYvi5kD8mtbGMRBScR83BVcNWva4pyBq6jZymK45uXQoWwL",
  "key20": "3CdcFU7WUGp6HuRzDuip57ENDYDVK662xQqt185Za1ZuC4ci8tiDuS7KdfwqS2rJKSxk4RVJpaGf8DrnmaCPSwss",
  "key21": "4smJBr88smeYPappiftxWnA7JHve1ppRVd8F9QVw3emRytuyeZP8iKrLPSjKVXvbHe8bjQb7UwDLnVv3XkwV5Em7",
  "key22": "4ZzDt1FJN99LSuqc3tWWkT6nXFGQRupEVLqpDmFrU6t7cBMzCbdqCtiWweh3u3JaVSe6Wjitw6KfTwoJhfxVGtGS",
  "key23": "3Ny8VH2HZzywE4hWc3hFskasj4ZCmjJM7mCkHJtaZbU9GwZGfjTHmNUuCfX89xgYVAvNxyEnMkoopZ1qxL7gDHjZ",
  "key24": "3QCVw9mwiuH5PTGKXoYtvqRyypj6LEJvQNLbsYKQHqv4s7o4GJin8q56GBNJkMws7W1N6G153N93ygY55umiRyVN",
  "key25": "35kxCVG8uazwD3fs19oBp936EXxHD7xKNehK4EB2cm7S793BiQAAof11us5WhBZAF8Y9QNWpKPGCdf6SW45vL1d4",
  "key26": "2VgoBfBrRq4GEzxDWPYXDhPaZryHkKpwUFbrs3qR4rZpSYCjvVy7BosNdjcsVrnA1q7DbY9pBGcuvcusdVoeLeTx",
  "key27": "2qm7sEXXt56mSPJB8q3v2a7Quj5HiS6khBWQzi1SEw6EBVnarJsQouZV3zKhA2K4CV3YFP5xmGGMVebsaQcqXiaJ",
  "key28": "451Z6q4GsTHEkEwwkMsLtK2HqZrDo9gmwikYaaYK1xs4XveBFfZ7SGupqsSg2hkDRw9g64xbtfEMwyWqTsQRJ6nK",
  "key29": "2pEtKwhtKm8fid7yWtmp8Jz4TsFnwoHXne3eeLh4J9dXgG9ztStgqXM92nG8twmCMRsdsVu5otJVVYL1x2jrib4h",
  "key30": "3rxD4fqrUahTUPuZHZBNce2SaVyeBsjg3iewLbgnBUTkjwgEyqM5cNKuXmrPuvZbFWzMENnxki2C5NhbiTvBhDTT",
  "key31": "3osEsFosHAH5Zb8fW3V8i3znmE1yc2xBx7XJdcz4Er8kJonzoipY9iSJJ4oMSqDxmQNAchwzp6q1qwzJ2UZgNAxk",
  "key32": "aRxs7cb3M6eBgLFtH5sT38Gfi5DL6xkt2eNbUVQdPJngn9wtHfVcJxGwy6XTeyCRKYrjdmLsKhv1x2HqiFSfnFm",
  "key33": "5zaYEebzvrU9hZgaqgSWH3C9yNVTzz55UkEwjMFdQrq7z7rnungFc1dManxoLEi1sjL4s5VZ5DVAfQ58nN1SB5RP",
  "key34": "4FrMWkc3Fob8xzszHstftTSUUsrK76RkQKgrmQEcBG4G4fNgWXtnPquxKgeQaFRzJgrn66gZJYbcJss3sUUcYTKZ",
  "key35": "5FZWDCvpYHawzBxTgwm7exFYsApZP4uKUGYLknFEb4hh5MAbCTBeVv35LqsTvWKmURc14Di6vGCcFKLz82dxd6e8",
  "key36": "3WnMFupYcz5q9g8u1EyK4pAasSnr1vMXysqZoZDohcDmNfmJiYQ7ziaxUTiRrkoTdaWTfA3FxGX6Ujbchb6dgfxj",
  "key37": "4cDb19YYMpDUZpnn1Dec1Ya7P5vcBwAu6MjqyTizh6ejoF7tKHLTLjEVp5gFtyttN9WiEdbynxYLNzA9KwMiTPMy",
  "key38": "P9egvFYYgkX3hj7195jrJdUdwzKXidergbsvHVzbxJBnmbThE92MSHJW5TcLQkLvxySx6UqCJotgk71tAacswaD"
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
