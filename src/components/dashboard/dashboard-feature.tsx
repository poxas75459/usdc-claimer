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
    "5TJnhrCq6jzQboGxFLqTZUw1ubaJWeuaudaoVr7LYcg4x9dLgjgSELxodWqngUjpCjmkyMjjD78NqKfkkTdAFSUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUXRj4fj3Q2R7P4RERpu9JyW47h98tHkGGyYqqF1NgUbJ3j5FGoHFPjrGrAujqqZ8sRrWTkTVPALXjvnDEHoyNm",
  "key1": "4mBgRMg8zcQYX63U7FznyKKuvDF65vdzkbavbjzWzQMsB4RhjJnCR7DDNk4pUR6pPrxvgpyhiRA9YJAU7f9PBwhd",
  "key2": "5RufCdfQXiu533bBVHvsiVvdZ7Rfh92AAkDzFLp6H3oYnGputE2SS2GdNCm52HS82ShtG55UWj5n3ffLeSX7WX5u",
  "key3": "2NoofXMaxaXenZ5Zk9ewNyGQg7WbY7XiG47dsvP6bQWJgnew1EDn1dohg3mNQU2FP41cxASRLkahubFYMtLX1T2q",
  "key4": "o67HFeHxMagbrkadixhPQf8ez7jGPWswhrt3qtp7n6nAT595U1Qj3hZzuCSxbTsujzhsRyMkgFXvifaRUqWYvNP",
  "key5": "2bEcpHUsQ1JPWRExV8a3rFug8jR665Xs6hazetUM6JdbcQeqnDCT6CjCUnrbDZ8kJ8JkRSagd6w6dEMhDTvK8qvA",
  "key6": "2mNwbBbYQYkdZRKpm7egSnS8gKPVn5a6V3jRqjY3LDdx7KcgVu9tvZAiUQZnochp3VAETXjcvuLpV2HhYn3bfmqp",
  "key7": "cUaRHxq3MUtd8UNErnVpE5ZBFBMHWGnbPXCKy6BnU6S4iwQQvjtU6GDaZWR1wnNfuxRieTjnrWqu3qagmypqVAJ",
  "key8": "4pU2KCBSGXmBGXEBcTKnhx2SGAmEMbtdxgLbD856v1dVjjkAq4nemTww6Uj2TCfFZSGeK1iBRYxhNLammEaXi5dX",
  "key9": "5pZFSEZrGgFi6Jz6T6KfeD2HZvoVPRmQfqsEUx3Toajfr1xdW641JXZXjksh8puPNggtWdBw9H5RfjRHd57JLk2Z",
  "key10": "2SAZ1zspq2hc1WfTcghweHPsKDwTY6kNZghTzSMR3vz1kfPV4cphiV1dE4CnDEEqgSENB3UxQEq4JXqoBr6B2W1m",
  "key11": "67pAJqbqCJbZH5AVpgBsTMWAZwdNe3NRLUfiSU6Q8bzLy5zcRbJqAykw7HUM6BxeFYFgNhU9C3xZT87K9Z65GfX5",
  "key12": "2Gxmj8gMAYdzHcydUdQei5wkXBVPL47QfbZbzivKxUVzK5xpWQBoEkZtcVugggyxr6erZQ5nw4KS5Lg9YJeZsrrv",
  "key13": "o2Gpfjj8ZCsQCJ8rQfnrnZZ7gxkzNd9Ge7CBdUhRJbZszzsVDmMz6WY9d1qw5vEFY69TeBZM9aq7SVaM417wSX7",
  "key14": "5kGHNqYg4qR8u1YTB2wBresYxwH77RaRzBeGqoP8j52W9TxLfdNHQ5GcWbKe9ckrtWhG9yBasbV4DzRxehfmwrPT",
  "key15": "2HRe8KkcCksm7vboHKXu18e8HtVG4L9fanxp6n1wxyt2XNwt2oJFxXwyK7ygpjTCHh4iMYaqoNo5JxfWr1uvdz1Z",
  "key16": "495kP2CFQN7kHrfQwhfLdbFL38Ggm3Dwyw5J3T2JezeARn8MMmiJEgAjkXjURVg7V9C7y2j25qNv9hWkQTUWwpkm",
  "key17": "2rmaGjgzNM1Gc3BLX6p4shjypZusaL87NUVuFgEC7eQEoYhmUCHtSkEZgJUYRmXoVuBCDAnasdne6VxnJpQxaYBy",
  "key18": "4LpEqQNxweLYzKfGN5vQwmDjEcpU6VhzagUviaFFJ44s1CjzoMMuh3d317fQaLW4bpQA57hi73KAZRHskLYRfK1L",
  "key19": "4v8ZyFfRHtVYmNGcSd8J78XpAQcjH7QdM5ChiJQ8bdbCvaQxGJ9gxv8TbMpVQwVLNePuHr5Aa6WSeex6v1dS8mSv",
  "key20": "59EwSkBoXuL5SMc8CHMwkg1198JivtocHZyQZpgCPxHJ6hZaacA6RYjMRSBTg9FrJYsMAmrBF7rJXL9xjes6ttmr",
  "key21": "3ypVQLTsuxciGdgFt1UWhiejGno3grXzDm2YnUV4FwzvzDQQKnxKKijq95tCnkcmjAXk8mGAwuixSanTT8yvyMsN",
  "key22": "58zZuSYkz2cctsoo5RAfHRmUdapVwiN6Kjv6Zi1aoc1onTd7bTAMnp9dnKngwcC9HNbxUjNAhnorzFhsrt7HS9TG",
  "key23": "Sfdr4ujsxVTvzKTDjT8QjUPdpGMahEXTcFDqQKP86BJrjnwLUBDnejRDckpcsYnKpbG4oFJBfALMUsZ2DnryuVL",
  "key24": "2no9oA5mCUyUhKus3GJ6SE65igyHKfetu5BGMBe3DZaX66gBjLrt5RxzjWjw7s48qqFc68QkuemcHUbjvUFyNsgZ",
  "key25": "5RWSJeH5VefJbwkS3AhePvnkcEvQroSiPTcwcBoeUQAtdXE2ANousD51LewG3dAZDuL2rNgBVvtptHLJFj5e6hUA",
  "key26": "df3euzHbCeoSQqwYeZ3oKaHetzGunMJxBbooqhMQKMrru83CbhEKShjHdhR6ZUHdzM4Fz5tHczCDNcVi9ypS8Rn",
  "key27": "5mqcjXeFiGJbgc7YxCJNKEJGgECM23ZEnRE5dJuLdijn21mwUH2DHWLWwySeKXyYcgwvLEXZtLvwv22G82Bb8iaE",
  "key28": "5fNRoHPFKwnNG4zJjoC1S2roRYG8rcYKfz8akoparQnAaPugRbK1wKBnW4YCJ4zks8RKFJBAhj68MQ94x8RXEUso",
  "key29": "3R5tTQXM8JxJjuVo8tt48W2t8d7KaCjQ2ryzGCHVKgDLUiHx83JXGJrYJHbeV82rM2ox1rpJUE8Ap9sQLUnDbre1",
  "key30": "3c3HTEviYwXPNMs5Bch2QGhiZoEBLzG8bshmUZ6yZEMFK1HTdBZtiD8p8XKd9J43B9jQvozMZoUDGynmViDEm5br",
  "key31": "zh8PgHAVpJrMMQ7Tz1cDtBVkgivL7TgMcDVcgHkmBFyHBUzaGGdKuudqba1s8hy8TQHuDeRfB37uY6avrGfFzUX",
  "key32": "4NEYEZssyQNFwcVJfT79BaSAreLCFoRZ4Qh5g6xbZoudHsuj651Cm1dY9uvawdkWuyNLnB842erUVkgsTHS3Ckwy",
  "key33": "4KBWgh4WeDo4Nwttq8BC6bU8VXnzP7mQQ8XuUGPU8QR8xjRvELJySkYfm4msUhk94ZVbsEr4WECv1rZuYKBc14R1",
  "key34": "zUDP6wzYCFqFxLcMA5pATABRJCLR567viNzVMbhpmPAJqKo4BNk4jzAGTdV7uEWSapVTWDKXBssQCMoiApKNxyv",
  "key35": "cZ6d6tkfs3pGraxdP389aYZ9M3FTEserTDJBenvaVAa673hPZq643zdtkVyJCZaPTTDZPPLUrXtXtS6gG1hCTAb",
  "key36": "2ephnUbGG94fMxreNXchYy5XraRUR4hqatyq6K4Ze7348UCkLfgr5LBK4nDofYpNDTwj3dTLYJWrHNhK3UeRdPow",
  "key37": "3fJp9PmwzdRKYZcrvnubEq9mhM9YVgzkvtTDzKb1PnQtt3Vhv9SxNePUsii56yJVaHTJ5dxYJTkFFznqkNfjYF7k",
  "key38": "5VQDJxP7QTGB7ieczXztuULY1hyUvmGyccLzKN59a6EmFPeVYnuqycSkDDAMjJiR1rLJt55dq9KuEDoo8kxmaWNy",
  "key39": "3wprQDjuz1SsgUwqSde5eyw7VrTRhjFpmozEktRxz2rmMV4xd1CzdxD7oTp7Vqc42MMBCyDDLZD3BJv2QiJHSMnj",
  "key40": "5gCG2yACkqkpTLVZHkwGyQmKNwb4FmsKfaKNqycf9YRF5Ge2eNuNqNRC8zC167j6Ucxhsw9rYn2kMjwPk1fsYreC",
  "key41": "5to8jF1z5PSZeapoLrAJmeaonYbMKS22dZDgywfL4qxXEKA2SDtqXojmsfddbwNwWSfvssphEZ42k45AAfmsizuX",
  "key42": "53tHWCGCogPMbdFxHYkFCgaYupxFYbj9WPPbieegn6LfoChLwzeTPmP3n7Kc9eRfFLvyMRkZYKgudJbsNH2zV912",
  "key43": "4aTiuZvxP1n3HxdYUp9571hA2A6CqkjXDaJ6StQgpBECnfXNPWhRht9Z1UDWS4yCwUBvT1VYRoQohN37qZgNxPFi",
  "key44": "iHw6r1ewtRfdUcj76WNYBVU3xPuWtNanCeLp8nsd6Gb6wcybDCzKTW3qqfLABD474mwm9QyaFXXN9n9Sjc17FUm",
  "key45": "jUX8KnB8fWnczCDJ1Q9AkmSsD8guMXh38evpXqfXDZnajXa5GJzHHGQ85YUU1xaRujBpVLSRjigTjbiL8kEwNd1"
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
