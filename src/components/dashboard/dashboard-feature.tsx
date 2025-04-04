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
    "59kpX3GBoYDQGfc4LTQFqE6XTVVfnj4jYqLGTPqPk73WnE5sPuUi1Ut5kuk3cwpVAm1bET8h28v6kcxUnnUUdQn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pKPyVgJs5115uGrYXMbUyJDLaAnWNGdCM9H5Jkz6vh375Vy79syJqkDRioiMZitb2cP5zBs4xD4Sfm6oGS3gZN",
  "key1": "4tdG2aB1sNszU1E6pwGhWYtBw3sZW6KRWtBzxFD3LYJrThDqsD1aDNeQxsehHpvtHeBXDHrn2vGhk9BiH6XX744Z",
  "key2": "vjvHPF76mD15Pg4AtnCgjS5pBx24BcU5SQmd56mFVk3EYxq9vYqAdaFZWvDd1dy2wjVrMR1qeyRXkXwBDiDuwjg",
  "key3": "z94Hsab9SYX6yis6AsaNEVv2zA1HJhYWct6tWQvygWzUcvfiBWd3GEqHkZYcdXeBcopaEVRB3PVhWvvB17g9qFk",
  "key4": "3CkHUdW3URashiUF4QKwbjdsSw2GTxxGDEpvGgUhygNJoUWMTRPZDbXc3B8FzS87MoAeM7iXgpzA6Hpm7FTXK3gG",
  "key5": "3tw5LtgCiqVxchWyKcEemJYL5X9iYqdud3JCZBzMjYF5sBGUNKJTaEF9NsmyxTnF59xCg9Hoyz4oziT3rvKWdP38",
  "key6": "BooPoucGS7uY7vko5CXtcKimKS8hD1w2LtPAcT89iEvxkHxpUbvja5vzENpyirThGYJpvAUZsotReL4YFnnrasB",
  "key7": "NMvEV8L8y75A9NWxaXZbf4Ni835qYivXv6LgaPVMkQQDHKfGq7bWsCEhMU7Kxrys3tSfXAQ6ysSkdy2drq3hK2K",
  "key8": "5g7rCc37jLbhZVSqbf865cN8MKTF3xSqAcsPtwYZxbnYSc9rMrm9NyqDPXTxhy15f8Y7jKexV25FAzkE2VnArwzG",
  "key9": "5VbdWLc7vD2v16wEV3hRPvX6WE5JnLCN7h53kiHNtAx6woA3MHpKdjqi4xQSw6MgganwDE8jJVtVeQNto3kbLVXV",
  "key10": "3o7fvKeqrixfz7epRRude4BXQbthGfix4gNk3mMzNCjkKRQabNEGnLFYZCSiRqtmehvZZaw12UFRqL58EsuAc3ti",
  "key11": "4QXKKfC7BHgDt4TJATvbWv1Cb4CaQGRuGkhtfFqY44jb48SHe67LvuLTpHpwtNoGoXHKjhCRFHyRx2Po525FWC63",
  "key12": "2GrTCV5XHFGP6VyCowH1KJGPVoD7sPGwGJzJCq4mdvMxHVMum1fBKJTLTGtQu2DGo8Je5jbVa4KGKWVzLgBAygov",
  "key13": "3fnn4KH4qyUCxSGZBumNxS6gNpf2GvQ3BjB756xuRv1pZiuUMtk2hd1wgUXz7jDzuPX5thyf77n5fkvtjWqRKkxp",
  "key14": "L45tcR6RyuY4FLf9kyyHQJ6YPXU94zUttYs9AHvwz3ET6d1GFXSFQs1rXnbynmmPFkSKqWgyirnp544Snh2HZLy",
  "key15": "4tkQ8NS7ozjBspr1fAhtZunEshXPzzRKavwQEpa2vJF3vD3bwBCEx6BWpigaxo8q4zK2JDYqPZ1baJCzUpHPeSwP",
  "key16": "2tCsbgGxBTHuLtCpNABp8rY4A4coThRhmSfMMQJtDBjvhuWMVbNNnGpPdWAQWwimc9DKNP9fpcxgxmLJGbybAeWx",
  "key17": "4TestySyL5XfBgTX6cfuxaMNcNc3X2PWrXayjsRCuJaQwmoknkKbYpWVnFa9LuLxtNJsQAqAinYnopmiaeUx3ykT",
  "key18": "2xDr9XZJaxvsoSbaZnHifM3KJvkTWgqDamCFYr43rVvDApJXFq2bALWM3X4ZjkBA8hfTwt1gQ9aZ9qhD13GEtu6a",
  "key19": "3LCTNJh4fbmF7ivTsosQwVSsheJ3UQbVou8tHxiNjvkqJ9HomWAbsi5KVZiftHn2npy9K9k4EDNPGQJoaKf1QwEz",
  "key20": "4TcaCd69Rcc3ELGBiZSAJTso6ySck2noy7whiJUvfCEzAaukX5zy6h6bT2AbA9d9HkATzHnqW3KFJNWifKHkhF4K",
  "key21": "5LkVoT6epcxrc2Gx5jj68Tpr1uApjTuxvm27Pe6jWLcK7Zv3FAXxwh9LLqQcrqutcTN8jmQu6zPnvQbVzNVgaXms",
  "key22": "3vYRdTGMgUVZLShp14Tdq8J2EjoCT9MZEmaAhfLV5836FEUh2ah46QjqcEPSScfeWAxt57TZnPwky5WX4Z9Ag1oC",
  "key23": "2kZb7Rw4oYrEvkXJAtsVSsByTA8zkAwpNxqeaLXmmJWyMjuEJXpsJP2XKcPgnCTXYnUBkybToNnqmahh7sJ9zCD4",
  "key24": "3yX2eoDc8CgEp7i3xAC7kguTjmGByYKbBoUefFtgkVATJZL1Vk2GmhgsyrNwdMgDUugUnjcsExrHreD6C5qESx68",
  "key25": "4r8ghz85ZQNd6K6zqdqMJ1wGLTG9d7ShnfZkzRcSLRv4RkemjpaZVNTHc2bTkSyuFw28XDKVUxjmhofrqUmLepLF",
  "key26": "46CX8XyRLnCe9zCVejrNoicMMgZYzAL7kgUjmWGuAAg2t1G4tp9UeGqwVKnVQQGhyTX2hacZ4mF1xCFhAJeJDssX",
  "key27": "37XCjBWuDJs9BVPHnAoFhTVVf98e6HLtbHApemvQXNKCDnuKFvWD357PNsVh1BCw7WkCoe2q8GaF2ivGT91pcSLg",
  "key28": "4BuNUEg4HmwghJx2D4ATME77Rz8pELxHLzxsS6Z5pzL1kPW8nxAGEqr1XptubF7i28Gq5WwZh83zsJMDwmvw2yFb",
  "key29": "2w1AZihNTWk9GnDSJ5krygtPVc9wdYrq4YM2HiKXschwanF7U2LzLUSVk2aT8FuMVtibW7sChS3fJNtRDrQ5YREX",
  "key30": "5DtoPY3Ch8qXh77o4Vi673JQUkUYLbh3wTkW6CJgNwY8JX56U6GoqR523WteKFApxjaC7MWeosX4cvvXGMGnmZ7f",
  "key31": "5JQx3fmjb6Fzn1z6jyHxRBLihwm3H8EsryGg5dTZiA7dtRFNmFDyDoUmeTboF6hSCGXhvNEXXcWg21BiLL36tGCm",
  "key32": "3n6n9Fa2jBcqex5fVLhAVxfcxfCqScxJjPC6N16zDKXie2M1Dek74PHTJBAUmnRrVUhkx8L9CLjAJW18Nfe4yedX",
  "key33": "4kFN1CykaetJYWfdxnMrFi9V2HwvZ4yrrxEXS8k6JfxwK3BgWwHQNmNC3mdiL5PDnLCTuGRADA3Y888Cr7jEXAPz",
  "key34": "d8ZyDKnDtLS71GBpeEwjmAtkajsURMg2phcHe4QkoRokXzhYQXp4VetgTjJtfGRTsczwCxmZPD5S8FRBh6yXwCP",
  "key35": "2MvTM4JjXofZaDNRaDDVX6Lf4nwr8gGcUY8F7CAikqrM7JLiN6h4xemc7GyqwKB4WgK5Jk46CGGKz5ndLjAFokUz",
  "key36": "2cWkTRTdpRuTerpxzCkmxokqbZRrPods7MysoMHZfUZBdKxx3fE1WGayePp3dfzGeGiWKiyk1u5dUeuH2WErykHT",
  "key37": "Kq2dL3U82Q5vU7MtMnDgg5QcDzQEAnhMA1bdzFgcXhbFX3vNYtSGKmJ8HVwkKBNudky93aoUt4EYgdFedLVtSmc",
  "key38": "2LkzfYZtbY8z1ExD2QoRP1VDPmikGnNHgcSNF7KeQwJWJBEETagqrsoLnD8N4xwatP2cuVRZangUQZTu9NouroKy",
  "key39": "3DjSs4iaccPcmkWba3baxHgciENaorGD6NUe5WFswxYa6aQjRh7v7bKM7Nb94585X9diX1V17Z1BiDQqB8AHkwN9"
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
