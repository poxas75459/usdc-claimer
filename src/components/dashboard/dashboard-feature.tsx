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
    "sB5okRwYUE5sEawQXiTrykZFgi6Lk9LDT6N7hPeJNcU7P7aRYDT5VLjHUZtpLJu36zMke2khrs7fUahz6Ad39j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrhCy8eJH7KSocMa5Lub16rJGFjVs8j4BWXaNoN5fvhn4d3eCDBHMsvzm5mca5Xk4SG237Him1A9aca7dKuAxsd",
  "key1": "WQcdUeS35gFPei4diZCBSq9q5vdX8HrSADRa9FsjcFcVjoZLxRX6JW3hcQTfsGdqycfZQ1ynQZYcWsTDZG9yLzy",
  "key2": "4dNYzDmApaGcJpCZzDDNegwxoTfsXwdHMAzEw1C4artuZno7aBH9aFrrokK1nTAosbeV2DzsGwWah4jX1dsn1gEk",
  "key3": "w24D2Cq9NHYf18uyuuAzLoePiZM2aDMg5tKY6dBUEdTjY41XGfzkMoiL7ptjmhFt5fmvvhgTudK3kYJWQsTJsx7",
  "key4": "xt43P7DJkphRogc62bYCSELXzVwWBV9UiaPKydKUYnvbUyA29C7iZo37mZewZwuhRJy8Gz65JBUdvZaxte1hpyy",
  "key5": "4A3NZHeYXWFR8Y2rjzb4HhdaTkvPniBSyNAYqtmCFvo39dMfmimzy1ffFmJRVUayMZwN8wM3tMGT8gyMHeNXA6AG",
  "key6": "3ATwEXLKijWze9ypYfnPiCqAAGYMtXp7dMHDzcNpH4hv9JbbnaSyPZ6eEr4WZPT9iyyzgr1yFihbSW6e9gVm6wN9",
  "key7": "BUvGACmsvvHMNc7NYmXceEFbBWsPdBAizQEpjnBJF9YYwa3syywTrzxS6vyYwCjihccKzZXdDqWUWpDuin8NQRP",
  "key8": "4YvjBQs2CBoE9LTCgMF7bjn717RjP5z96WERXThhitjkUfA23DNYSTWFYbd4uqyGSifFCZHemGZJvf8R9WC4peW6",
  "key9": "Kbq8393Knfa3ZuX1xKin9DfdhvTcTp3WZxGJSd7ff32SzX3ho4QTbxFNSna7XK1sJB6w7Hk9cLcwQDV8pQxHBmJ",
  "key10": "4fJhbyemMFeBy2VGZaDcJPUQcteg8fFavDXa32yTE1cPmtiwX8iZNfKWtC2v4DZgEMjetZaovPZoXT3M27dTGHU4",
  "key11": "dC1QVmkcfX6LYE52VSe5MT6T75oB8zdQktbkLrY7gQjYtX8xDzUapXr4942yVZ9FFXMUfGBLKa1HSDPnasZUbg7",
  "key12": "aRthR7cKzokNKKav3W9hxDCd9icNQtcYuVG63iL5Axfh1ZsNvPeEbQfdAVHu6gBzVfkaKn2c1vXBhrgZgqzrnDo",
  "key13": "4ArzArWpJXTVYLhnsv52YpeM41aozZNVUXCRSygqJ89PyY13HrNxVUeDuAVs5RnZqvtqfRTQqtwSYGWTEADk5AMU",
  "key14": "43FTRzA5spgc4nfrPY24uozCEcfpsVj9qagsvvkT8AdN2VtLQ8iY8jTTgmuMi1WgXmhEewf8QZHQajQdn4w8b2fU",
  "key15": "3BdoyNXbSWXCccYCPCopSavArsHmai6ButvERY4NXueHZ8fcTmF2Q1W7NwyfETBm2nxrcq2npPJ9m8REQUeNh5wn",
  "key16": "SMSaQXAMtDYNFzYtBLDXXDtADpnQUaHeqRyhnzrUXz3UjmSMfzraC9XQrFQp5zaDMqzFaboJQWgyKiChPysFasY",
  "key17": "x9xK12YeHPgbzR6wCidPwgXq56ZLCbj8BXwBGyuSVDovFoiq7Ww6rAqrqV98jW3TcdvyY22QuwYZQQiyacZvUKT",
  "key18": "3sE29oMB7Z3SzHdmvG3Bzn2gQ7mAMWEg7R3JkhqQ4tFjhVDF6cGJcrMat1Nn3m9XvjKykQo2jL1DiuvE47pK1qKP",
  "key19": "4Fq9dUf6c52KUojcSv5oaVMQciMP9Zdds9ZavzS7RqBfLPNYHsaxQBKMzerMs3TCqmw3ERtTBRpKreYwX5DKAUn1",
  "key20": "49eyy845zPZXEBwC8nZ1FbsnwNKVghToYsqukgS37kMzpx1svqJFAwB3gVfudFVfaGA8ADmKf3wpP5fGtrP2GRnp",
  "key21": "4p5iFoPYgqe9ckgiKf214MkDnCQ7D3V6hurs7UPhJTqDBicqskfsN2tvhdKuDJ7zHwY8ztTy92G24ZiMdCJVGi7s",
  "key22": "3ExAdDBr4EmzUTTi1VVA27bxgdjJNmZ2WLzHs7pB3c7yhyzR7db3U4iutReYY58qnjz71okMhK47MpgamULncHui",
  "key23": "iWCP5fgisNxFoyojfiGSQhjfBWP2kyVD1x8nUqSVL2Mxuy9EcEuF8bKtTQ6WjkcAbh1823ZWaFucXysgCnNKnrV",
  "key24": "5o6yJSmDLHwMjWPoVDCwhHhLcpkA1XeE4MXsbsUg7t9HHhsqRsreygXzeJS29GNHMfiXWQFJQJxjW4eosnt5XFSz",
  "key25": "mrDeyVDhfkeAmvXRkA4gYw6q44VBiti54LQLLpEdNyU7BETmpYBnr1ixrQQPwUFEpmtp3uzSzN2fe2LQ4v2XNsv",
  "key26": "4ypaExwVCAfzMCW9PbxFaagkEcgE9PgpV1EwmFVbqD2y3yaqZfSxLudnikA1UV7SZVDkhPR3SADtdpjc59KSmgSG",
  "key27": "4oLnHdWSWkukJjH6WJ2GrRBpv2HRBzaRDdnUwqcTPuKStQ62iGcAR3SkBL4TVrgKEkvwMj43uSwcMdi94s3mRYBX",
  "key28": "52VhqnnZHCXqFHbu2yuXDSewVxd6Xz6Dqhy8WjbB8DcVZL6SdiCt1xVshGDYh9A7vnCRXtJxvhnDJcVfnPAJWZHK",
  "key29": "2uimRg7wi4Gb3kxyu6pLFRVUNJ2maZfeMBmVJpejm43oWPc3rQmHkh41yA8f3mVLgpwNkx9qn6XQtZZzBUCbPYAF",
  "key30": "L6rPPBWLYZ5gJjZ25gHiY15WHdyT5iyLkeTFvzGsgRPyj9qqCkUjhaVKajv4VYEEJ6piLbdszziQy9uBzYFuxAn",
  "key31": "29qBfXYbxtRYaCUkg3vjxzfTvn5vPc1UrZTwZpBxY1Gi5SqhoWNvcShdm1jVRMrD9nf5DNqWPLCMFvMbddLyyiAf",
  "key32": "2GLnxErM6NkvDwQBcWuBUaShSNxTG7rJHGkvzQoCver7ZXPsBgqco7YehfHns1Q1LEG7yqeKjpNoEKjk6qkniSTR",
  "key33": "2sYbu63PsGM1fMK6quzpzzvt116L7P1HNAboSLPtXQkWgYpoRSLmGYLqPzJYDYKAwgJYXB6nzggMghAJgLLyZHKX",
  "key34": "6NHZW63EAJ1Lx6upQ7WEiXXtUPEHk72kXzbfWyiUoNFQ9kxZcm1Am5tzM1FAUDMSmondCUam8ZM9kUtoPdLFTnt",
  "key35": "59HH62NVUDccp8EbvNEDhmkveSKuYZgCgrcv1g4UCvANnrSB2UbLRKL4MY3mtBwxFtczmYXRzc1BjwZvHJCiAycx",
  "key36": "CZ9HzT7yfruo7kBLLKeEfRFmG3dxzhyh3n2iroVSshFWuPn2Lu9RkiG77MStjtN1S2qXjTGbhVsxfP8XZLEU4x8",
  "key37": "4y2fErpYYHVhfTuyFNvoBUAeJvxSyDC264T5kxts3z7yGBwFq6iYcAhtWBcx71A8NjpojzSJDd4iqpDiQ9GqYV3e",
  "key38": "26yuHzrHDSUKKPwdYJyZX1c1cYJbb9msZ4MFjbL65PY3TqAGaoYdCZJwUocicd2EtArkj3PFjYMbxautfZpMipjP",
  "key39": "4KuyYzA8cXEQ9mGhi5cf94WJHrGNwTr8GnZhWVS2Tv1XZD7E4AgFkY75fcNwLLKgMiMVzVK9HU27V3Q1AKiNBMC9",
  "key40": "5MqNewzBDPBysdvpaRbENvHDkMuUKBoMywaUPhFpr5uHfsHTFYpy56gSvHSoLNZp5zDNz6bV3qNTsuhBu36NBRwP",
  "key41": "5amAUksZEqCY9FS15bLnPVEDbmCqpvSz67Fzeu2KUoMoUNcKkNXxuFnR5cWMtAayihvYdyWNv7t9e86rxJk6yZT4",
  "key42": "4JDrXobNUtsjM8mBZZaJ5AyR5u94WRi6avqLubZtXM3XHtJXf1VfLivxFbn6pzssRFnSjGNfGRuWPFEECYNvtZc2",
  "key43": "5XwLVwx4HGRDurF57D1czLkfaWm72ReG3N9DyCk3LtGLCzBDV2jFG4XExNkGk3gev5tBHfPiqkp9SuvydCz3qmGh",
  "key44": "5SExPvzkcbwsEtbW39XYxB5kmrNbhdmZP2EC4UMJ19driCR6ZvF51i5v3MHGmGuvg12UoqrwfqFGXP5QtgsZrQVK",
  "key45": "4DUpFb2Ggep73yH9psari2oD9ca9PzGCu1zMQrkXZKxsHjhWopPyuvbjtoz6dMpYmwVcBqexpxjxsxi2uokV1ZTu"
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
