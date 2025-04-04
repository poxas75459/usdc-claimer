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
    "3qFmMQeZdLHzezA2p4GZKwhRcuUX6GCrmAzRfxKGxo27waMXAjA8b44bxqXtuQgd4a4vVK6VtnJtAth1VSyHVxyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mzSGcVJWVrJwAaZDkipfG3xvFGPgLUWRwo7XfNKSVwYg2o2Va6fwzFVFTvL4tGTizrMrgyYzttTpnUR2hje1YiF",
  "key1": "5cibDbyFsUBhUmDbX2vt98kYQmA5zEBSpmhnrxMRtPGxKapXSpJB1PdemnZDFJPc9G7pV6Gmi9ZzmNjTKc8t3oyS",
  "key2": "4RQN39EKNPDgMQNUsENMCMd9iBp3R8RN8ecDEbegZpQwfrYpg5qLGvYuBJfh4SLqp47rvqNTGvRJuGwhWofPEmAD",
  "key3": "2vxWYUTbYFm94VJ8cSNwSNG9yYGczgNGEBtGCeLv2JhjAQjCqfQdfNjiMxQFcg2zQntaBBQmBZpgLikgu9uJbG4k",
  "key4": "2ZHaqgTtqUS3GGNUWLxaBBsZiyxDA5GhzXr1QcWUP4iMMf1CEu5gkUbYa6KtsGuezAmJfjG4sHsVG6f6Ada981Da",
  "key5": "3WphtySZNQjBQQE2Gqau5Fz1cK2uFavvRJ6w7nX2q6GJv5N8mRmkkhxF7f9X4Zqidy2SJR9Ft1pN86rLuW5ovH2d",
  "key6": "2RQ3NExYQK6qwPrTnAyBveCVzS3pQLiAtDF4ecayYs9dvSMboQyE21Ajc7Rvym74hXPg53th2CVwqAp8yh5icdc9",
  "key7": "4KGX9f4QHxrSQWAau4MUCSmWasdu2DYpHnD8eZqoVukesZTHWR4Z3ywabKjtig3aRdsx4aCeM44ouxafeNETS3x5",
  "key8": "4hLE7D4cmwiV6f8cFvMBhCJH8PTFwtFB5AHQkPCiGG1BY8L1z9B1UNkWutqF9eeoXVohEoigJryAuGUA6eLjKLnL",
  "key9": "5pqXW1PR6ikXvoGYJc9MVtq26WDT61g9QvRJizA8NRZ7iFSTFYPVU6bLYvB1Qg2bKBx6VgwUrtNsm6rU4N74d7YE",
  "key10": "2BDwKHDDJU8dkAY4HgDPnPKckc99f3n2BmRHDw8pX3qsXkHafoY4krVaxLUe6tf4N39GUffnPhyiXFYbgWE6RZvr",
  "key11": "4ymnSQdnT7rzrph6D4d3GqnyrYwcotTvGJhidwDmV1q1jtM1xqhWFAT2sgy3MVgudtggvzrUjDDvLWwZdx2CXW1K",
  "key12": "2kGCH3GhcThoYYxCW2gEysyd2yAKTqdnzMnkWddDb7F48JiSxDoefkfja26Bxc4sCNPJaDr7J3hvJq55U5xoYdZU",
  "key13": "3wFCXiRnMhQgrhjHbkraYXrJKdKAG7aEq8z6JjhnUmwrRzwEvYU85Fd111cs2KEo5AcbTiZ5XyEBNjnNm7XW3vtD",
  "key14": "qf7hZhhTheLGQYVCY9y1e6aVmKJus8d2xBfNHS5XMKoKiHWwpu1ZshC2eU9eCvjq3E8cyvswGkZv5y5hBCZMuhx",
  "key15": "49951N1Cp89GPeL2fv3FtE9qBADeguCaeoxX5Hh7aJgFj2ihWW828PyQLsJb27asJj4nP8D35hNgf3LL4cE1HiAL",
  "key16": "2Yw9AKcHE2RyRLNEWTvjCRTzx1tDqKPhNWC4LkfFKQk5ksQt7tBSFzDrFJUMrn2AmJScMgFjTGhXCDRPSSqTqpvB",
  "key17": "3WX6nky5fqratYhBitksgRbCSBEVcW7Eu4B3oL8ezSaLPnidC5SaQ4rZtewyGmmRkXUEh59T3XAQZ3zYzg9RNZxp",
  "key18": "64CLweLyDhLamZiG6KNc9gYdGuLzvqsdauHFSYo7hKDgHJA2DkjLUgVzAmCbgNdW6q6NLGXrkLPa7GjZTmUHXGMP",
  "key19": "3NvmFz29W9QoEWEkMh5fKZXSPKbiEyfmHYJYBAX6j7rSbkVF95cnUqVzUqA3QEUFcjk5tQEeXwMqQhHU7MoFSsKz",
  "key20": "47DQhX18jh9qpLvjmjy5S83hkzMkjAvZEaDv3Zy2Do1rizLn6PwESw5wZBMqouRx7XJyiXvkhvoMDJa2Q2D3cEHa",
  "key21": "47fCmQu4p8cbm26PZLBRoeoeBmH9GxU9SJt38h5nkPFYGcsB4pE7thjKeQavdk98g1vEAmxLUtv5GWNmN7xaDKFz",
  "key22": "3n7EerbPaN4d1EkJgypSdy7LdFsvaz5YRuyxvRx1dtP5Hq9A48XbrCWv9GtQfCPbnMgz33GZUTp2PCU9rRNMkayy",
  "key23": "3trLnp2ZJhBbwq6J7t3dAvjEWT1Q5HPfbEfGTBTEEa9ATeRqUvQDPGb8yzmGdwWn4LysPXdeDsJvQF29h6fCjReM",
  "key24": "2rsiCG5sAHR7aUhzJHc4PYyhueKsbMQR1Akug5oodJbLv3Vf2tWJfwZPi3p8bSBJgJs8bYV74bK5Hcoxg2EqxYjT",
  "key25": "4VchZLQjFP9CHJ52aiNY9zQ5vNYdQFiaWXHaJGaLwFV8NrmNpePGnEs8dQTF1PeMeBXje86nuBS2AyHCjVn7apfk",
  "key26": "2jkxNioM6G1sRCPQtaZZVKMfqCNffC5LrEa4Gr6MjYir6HtNVPMz8QEb3ytK9NDqDRX2sKPsTu76byfwfK4cYMxH",
  "key27": "pd2Xn5LEtG6EobAoEuDEfqkMz8RKJAG4armaZoPbBci7MbVkRY1Q1oYM2jYWZNtPwAVvM2ndJQTQADfQD2vjE8p",
  "key28": "3iTCgAhqm9ymb8U4BdKK8pjjm5irPQHJUUoXoNsG4SZgGe8ddEwRxnE9FMwutt2RT5bkiK8rFszgt6GGwqy25V7w",
  "key29": "5fFYARLHATeCHtMLvRquf1tgPjKAUwDw74pCLq8oCY6Hyz9ccNw4C3FCFUqo4Lkf6LCRa6Ab7YBxQ4V77vUp1cvm",
  "key30": "1Kda4eubJRVvo8JUwFZb94Nsxr2MxYwDZMw4N1Z6JFVr7r4Qp4CQVviqzcNTmUrwmF79ZSaDBGkpou78YuH9tW8",
  "key31": "4SpFNJNaaiuWLfLL3UMMUogkVbYyqugZNMQieE2oBWFgpSUxJziYLSX8mvgzaYL4uBFe8nmaAohPRj7owEipEBa4",
  "key32": "66cBvhLPykWEDEpQJEAR3eZyU6Lv568DC2PCmsKCbmZAY7aMjzjgYbUJPYjh91GgKSFnqPLy5mZfhj8gaSySnuuw",
  "key33": "9rA4PCwRuPdzXTofXzWHQNJ3yixXHKGAWuUZeBkLuURRicsWhMtqdf2zMjAWCZfAPGLNB5R8MC16N5m1G8viEwK",
  "key34": "5FJFFo7krQwgv5J63HNmwcutHATir4afGY8hiJkmPVU7PxLVkVTdVesmLUiMUqgzcmrujQu7UAGh193w4PrR2ChU",
  "key35": "2yw7dhsMV3yZGJnDaReEWKV8gZGthfFHGqJiwoWuLuzcvGYnXJCkJ6HJWfb6Q9pxZNFsQjhawZduijKfkYcDCNpP",
  "key36": "Trd38qJSm1LAqpu2CNyZowjNUmqjwT9nmLgGDXjy3vQJFqoTRftHszLAq6nB3aYY7Fk3wdDtRE5aiznQVu2P4KM",
  "key37": "5cvvbMZRweJGPZTSrNnBVa8B7ULsDf1gNhH6vJ6WwgHcAuJfeJGpcS5sGfLW6PusE6Q9C2uvktzz4g86P64Cz9nU",
  "key38": "2HycWE3tAY1DCHmnL3YcCGJwfessYQv7Rof9kHMkUHN7G4gvi1pQjBvs5hSjPYPz16LD364CoKYeisqqHmxMJ9hy",
  "key39": "5E23g5z6eMp4bDdq6sT6fBCRgn9Fu9Gxm2Yqc7aGWDyiLFAoogqgdADRP9D8hpFHiYSubXQwBR7neg2onNT3EoFS"
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
