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
    "EKm1cCSWKUcUL7jb7CcjmwgSKJoqwTmTpzMpwhXrTxhaEeJo8jQ1EyssyQW2rxfPyoksfCVkg7rD9yYGuTNCaCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omNHTSLxjLsXxrwSZ7uh9E7rdxjNMJ4KBCVLKZXpE4vRxab1ZhDAeBDXuYSryLWJ5MuKbduCuJ8Nkk2E8m8G7ZU",
  "key1": "BLRo5JbBZVodVnbKnLynTv4wxMmeE9nA1PLjMgxXzX5886tJeVYNwbxSaUtwjbuRPj5dBjf712v618yiDcvAQdr",
  "key2": "5rKewSJu32njfuNVeL3xQD1jim9W5fRy11HgF23bWpo3iC1RTnvWUeUfoPTbYwWvG9h4boass5ZyrLEbmDdY85Tg",
  "key3": "GMstkfC2UCXBDPiYbtCMy8uzjAUpsYtQB2vEBVAdSHHkkG82vC4aWDWHCsLvrcH91xuJSxpzMT13gLE66BeVDS6",
  "key4": "4744KFAX5AmwZtAgviwJJ5SNU1yeSokCYkqMTgRKanf1bNgfYGYfsAJMjABYycRKB9HTQuy22y84324k9twaXait",
  "key5": "4XnhB1umuBNVDGunwnM7dmQ7yTBp3XmsA8HnbgZgAKr1HqMzDsKShmvznUGpZsTGcHM8ZQk4QtAnsMCy7wXeTufj",
  "key6": "D7hKzoxdAAMG5MauimBo1aZjBJRtRzFo4WcCRjU2VLzSZSgs414SBg7GuRPK8uVS91kKT8RVtctsBiZEk1uofhu",
  "key7": "3kudM7R8bzbq5JXhYd2VfLeXFWVLSvgpJXJpvnyM2NcmdJPfFyfAJnitTXhZ4WfAXvKZ6iHQobCZ98LEcu5e5CQC",
  "key8": "3YqSj7bWYoKjne9ya1wRthLv5HBmmiqaZanmQ4fexXkoeAfp9zqmyq3oBmQRP3bbShYbqaiAVNMEXsdBQNnmfg21",
  "key9": "3Uis9iSh6CNkWmZbh5QnnzqLnveU1wspyuryMpbX99EAK922bD22CpQyjN59oXyqMFPg2S3AyKyaX6c8X1Sdud92",
  "key10": "432dPMVf1L3gdXTC8SwJAQfEYReMPB44VvdnG2V3DpZ9xw2ELsLhKjonoX54qsYGRSHDmEUEFokJ8gbm5UiekxNf",
  "key11": "4UaWP72rgAarsp14pAtL9Re69LgfjnDUqdS19sNfQwbJa4yuoqBnaic2crMVRWjuNaYPx8Y4SgCYrB1ZkSmUNhF9",
  "key12": "T6xWJjxkQ6i1upjGo5T59GaoZLznVosiLJMbxNQWXHGUrGrL8XHSvCefMa2Dn47uCafHGsJVnrKE5g7pemTbzWv",
  "key13": "p8DjXtaTeCntoAZXG4c8k6c6HEfmf6a4yKCsPHf5pJkCXBzEtjWn4MSawoFBRhvb7Umgc7YdsLqtZUkuvvjfrFc",
  "key14": "3DM4j7V2mHdqAcvoKZSyouMpfnLsE1T6oD17L3NBzDXMrcm9QrgkRfuSZjnyB4EShANyS9NXsdm8yyGHbxXe2Zrp",
  "key15": "5r2kmSMwhq4W9RRegBCP2Xvrno6S5Ekmc52RMuL9iQ7mWjL6XsbNT1PjEzhia4L8PcWANn3z2YvhpZNvNqRWeCPU",
  "key16": "2Dhfzey6jvj4UwCAD5zrGkURWggPbpBmbD5hzRCvP8MxRKMZtN35ip7M9tECN9ypjwZg3jXfViyTgosKP2UhM6hW",
  "key17": "5HtvpUuX9qoo1toicag2ebBuz3n8V152qRwcHmB39tTMEJ54tiGtroLLX9MhHzxg1QadyXCSHjg1eo9TKru2dTYP",
  "key18": "4pTV8PC6D6md3cd1NoEYMVoJT54qLa4FtYLp5gsR9Se2HKBEi7QSVmWGrgNcnSEPFYZk628gANR6UZrHoN38CR1Q",
  "key19": "5WYK4KPnT11TbfYeg9GPt2Ph2SZJcB3L8un23CGvKMoAQdAdvZgMjACKbHyUYYQJFpHqMzVuqBrHcVy2TBFVDnGe",
  "key20": "y7qYCFsKkLZvcLjo4B1PeMNsPVpDkzCANQmivoXW2NKpZysDRSGwUpR3u6tnCsi8SosQgFNYqT4gmqNMu2Sq5mA",
  "key21": "yxG1F3vCDWh37jRpgUiN4vRmbBCuoyAUqJftqW5BQ1PpqEf1v9EFzUu6khvUbn31QSeoASqabAfj62A66cDxTh2",
  "key22": "31mE7Sz8dLhtuJUVjMZULdcxoThLWcZdFs2DPPcHcR2FnJR1DPzUhjyUY4c2ezWAvUDeyGbjmhxjEWDVA6DZtueX",
  "key23": "phSHPm1zE4dhGoXHoCn6YL1rnms5oRFcg516jPLy8GawAgNi3L4NaxN9Cmsvo3f5HRDvzmGS3ZHSrhZcxarZqGG",
  "key24": "4ANcpVtWP4jzPoS4rtKrHSGQG5zAchVN8oRgy2tFqkidNbGcVA1u8SS1qTGLWqoQyvvFBnEHgj4Z99VoGUnSxeW9",
  "key25": "3YdUh3VabkmrbvvY3qKiAh9GL6vEEPRUKUo1B5YUhZL62tV6Uv5aw8KhdXbTk68WVnuUepAa27pSv6zKTw1WRKxA",
  "key26": "5S8wL6CL9Zp5HRfBWaMEdHKJPScdtUespcR6MPZs11weZYGzd6UhxLjwzEgEbghXPYtmy9WZiZ9fAJ48fJbubERc",
  "key27": "5yte2bRPhbGbLxBJjpth5prwmMhVNwBDkbzFuHgawajZc886wCrgX8NthAnyeTe8HEwVqeYcZwZ6Cv3Z1SBridAa",
  "key28": "xNgHMPsXTZoNYfA4ZD2xQrsaogMtG4n4tPyoMkxmAJAymu1DDgxFxnrUkgYTFoGLXjBjW7DxXqfcs2poRmaTrEA",
  "key29": "3MwHzkpD4BqTuBwTRmQAv7tNpAZDM7bS9HcrJ2xzHuYPH5YDKrn69cCHYytV42fUrtLSKFgtQ4bkexiW8JR6YWvv"
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
