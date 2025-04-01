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
    "5K6tsrj771KmFnxdXndeFgFexqCvDGGgwYrjm2RK64sd7WsZxjtDqNUPQAUUEftpKCy1XRQHEakNC1k2AMtrbH8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6by6SNLdzYZ94ZKBR2QEyxpYPa5Xmx2wEbCmwJGkXDkdFkcZj8fo3RfDK7bpqRVWwG6pWYMrUjfAz2REK6nKTS",
  "key1": "C7QwhTWBiocsLHHHYhcvoqEyXm9adkDuincMvrnjFFJqpdzM8yNRR3hmyURFXmNW2aCUKuUUYi6nGFtonoKakiS",
  "key2": "qSZJUvH2cwaU3dYmHvL5NCtqSpyuoJANYxJZTxWN53LuuU6nbHUJ1HBZ3MaFH716v56BTy92tKtx6JCJqCha6pK",
  "key3": "5QHBa3JrXtcrPDCyfUHzGFtavuK3RXQcz1ioLtsfRux9eMJGxfR47unURxtrMAGPborhLp69cLktmR5JEqwQMWaP",
  "key4": "3SkrwhG7MAgZxmEvTrBaddncDhCcQTfnihdH8m3YPZDZBXraYxkh2oeT8MrAsfokhsDyp4gFLaUuXWtyKZK1W9jh",
  "key5": "484DKXxQE5xDCj8TwR1zVuwN7Ju8HgUmGX7s25YrHBEG1dceZnYbNZvhq9NFL6Jb6QkqjB1sratS3Li21pevU99A",
  "key6": "4sBbPS2Lih1Ce8uAaoY8uA9BxEgRZUfQSULg6havHwg37QCHMuHQrzzsTsaMdTzSpCf1fLoeET4GGFKcJZYz4FLj",
  "key7": "4yYeQfhWh1jCcYWt6FpTh4kvRM3p915zRPbK8TL2SEJk8fuv3cnYpaoJkVuuSbEnKQMW3bHVxmk94yozVnu3cbMJ",
  "key8": "5mgrwdkWe8L4ohKvcTmNEfDD8jykWzze7f3bSpqFWZKF9JVM7rEc1n7yuxuVeVrtMp72ZpL61wWPJvzd6NYsYtiU",
  "key9": "3kTEvJXt762xciSXmUvRwSjugoLciSHsQY9S4EKrzjN5uKMBXfD3M2G1dT6hbvJFDzLd2tN3ghTKLwzv4KPbAmnx",
  "key10": "3LZVzBYyXJsDCZYkBdYSTLqKWdw5tyZWrmzWayP9fYweCpvDzj6WJgCizAziUqaCr8p8b91dWuGeX9HznVxmPwQ6",
  "key11": "5fAhrnRKTaNDKYns6tYaMdZLrtKP3MboP3E4TfpbEdTE3YJvnD15Krt7FyuEyAongKk87ckAGy6C1jWpXfs3zyZB",
  "key12": "66vSivQyMBTZfkMq3SQkJbDggwhFssUv6mRYpvMH58V3uA9ZXVneM2kVvcFrGVeLmMg4CvNo6oCnmGD5hr1WaQFg",
  "key13": "MFqAskNjQvAvNkQjLr11K8iZFhQoiSDczZpZ6esFJ2NvKvtcB2vfBQsS5npWWduDzLPcGJqg8YpimY1YYgpQtE7",
  "key14": "3RrWjqrKH8vCzKei88YK5mD2tqbdf3xA1wKLeCvrov49dXqHohtY4aoE8o5BnVAAMGkpgaVMv4FufexovrtCUp3r",
  "key15": "5v2HWxqgj45KeeVVWpSZRKd7CezQZRFuc5kMSwY3cb4oAL9nkMKoCMAMFZDK5Hg6pZrJicP7qJ7gNUazdeWAoJyK",
  "key16": "4LRmhiSQzkcwVGRGSvuDKoGtYPNBQRxTXEzGtuFHiohtU685rPzABykyKR3yusrSt3ejonCHPHc8ga9nJCEV8DyT",
  "key17": "NNoV8hv6Gy17D8k6iq9K7GLxzVN9sGzmLvMajahyNWUnbHp45srZuAqVFjyCA8WXvXmDYgFEC8zP2s9AebhyYjo",
  "key18": "mVbRVSpL7ouhbaywMWdm32m5WTBhcLwLUtZct52raVCihPvKdbjzWtiSxPEqP2HYysuo6a8jHVvpqsPwq8n34Ci",
  "key19": "5hshMYKT27aUWyUr6Jhrqy9nsr3edg7E1fW5NUAvw4qo6wajS6TUPFuQPHQdZpnDcQotg8nF7rMcmsdVGLUAZe31",
  "key20": "MsQPevC4mjv7tUyFrdcPA3PT171hUoLdvtS8P8VrnGyh7cw5BE51E2o8brwTPuG92XtqUAH1GCJKwfLA2htAues",
  "key21": "2kBg6gbuvHiVasswiMvsKeVGLN95zX3oRSJEByL7GBWmfxS94aqJWTVDZDvYNZ5j1NNPUTCJqbjMbd251LTngucC",
  "key22": "5uMqYyBKG3Za224yHpAHnhrv4NdbzZwoGMGHymDvf7t73u6k6G4tfzwtvvAjpXQkfiEoBeQn6CnEqkRPnjX5fNeJ",
  "key23": "65BkD61VVCyZz68NpmcZXmkJbuXBKvN51LeRBucJZpK1QvYEXV75xaYC9oxaaWxbHbcLJUkKUnKzVNuUMKsN3bRf",
  "key24": "43WeW6k8ke5cjtQ2vxnZrGHazBwbtFSA5Kn8o7mgSK4Ec9QVywCLHug7BocDQR3ro4mu45aH4t14G7hecpRgaaVg",
  "key25": "4eCg4x82kr3REA4CtQcxezs9JdPPdeWMc765unGyb6QdJhC6H89wZLZQhgjUPkmfm7szr5V59WN2bf3XbYhEfMG5",
  "key26": "4DJruhY2jzv3yR546BtMitxsRN97ftouCNHYZL7HFpig8HbNxZsBiBJqu7HF2rHp1GW1T1eTKgtpKDCPmTkpH8S8",
  "key27": "HGJXaBTJkxQWyP2K1TeGFcvmMZ6FmRBoLbFFe7erDQNEUPr1oEjx9Z23f4WioQFABjfAaAff6UDiZhtSTt9LfFE",
  "key28": "5G6yZR8A3HR8eeT8HNnLqYZ3sK2qLXQceSSZKQ94zjTvs1ucme2gBDZBkxUCLnKBjNbPvNChUokU3nKjarqaxKQN",
  "key29": "3bXKhvxC2QQNGAeRdtUaS9mLCLvyzkiuoradjGth4s5pJyVfnvbD8SVAGuBUMf2BMymQnitYUj7bL1NMQ5NQai5H",
  "key30": "2XLqqUj9WvTu6F7ZP9gp7rExKEfVhoJafnoJT95aTtfWxKQm2neZvNfhrrYroKG4vR55UUehAGfKHdfSwigDciks",
  "key31": "3qPEnvWVEiKJHy3stgbknhAjtKX5YUZTe7vTm6gK5TgY2CfnLGnpxdiSXegPBTinZokBr3DHmJDtsAVU3r7VzSJx",
  "key32": "4zsVHp9yDdY5RBp4P7cwX841hg8tEbyrS2rpVtQVb74fQMqEHkY5fWNGgRc1LLcB3x7aqSaK2N1Rm8KJy8qUKoeR"
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
