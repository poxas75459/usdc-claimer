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
    "2Fm18q5Fx7hYQzxuXFyqVDdBxsYLcF7ohuRiLRAdc1ZKfJX29hoQZkuGiDmzjBLziByhdhqANUbMvNS8a7LUcnWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NK3isGooXEQyreNAe8ijE2yTTCiugGb44x1W2YaN7znnSUkHhaSUDyNJvcAtXr4abzZBFZxQtEjiCQCH53PWENZ",
  "key1": "6fiigNawCCa31yYZK1QsXTthdrEAJeWhdDcZoNjk4GzyKCbMiMHr8DhaTJg9ADRoKnmrz3mpUHbY8DrASxqUUoS",
  "key2": "2fJ5P2TyCvXPbKXuUS48rvRqSye17p3A7CUbCBuvN9Vn65Y9RM7LdNcBdV8yBeNgFEjsAgvAvy87RwQ7rVB8nJ8R",
  "key3": "3gCreRyeeg52y6JmmR6shif316WUiAEM2KbBHnAGVFxcfDajaN85HtWn126EZQ1rUQHUAKjP5qYJhjExeqkMQDz8",
  "key4": "4UL6FWaqHMorXkkP2Rjpn8mqFxppZ5KosZxkd3kc8Lfp79t24nPrSSX35yZn2CDmWAfVTkNBLE25S6K5m4mJaM7F",
  "key5": "3YjYv9DJLemoXThUXb9f8Uwnv6DkF78fMMqrkrusK9S91BXb2zbdqwR6ebRTGAYeimzErfYyDTHXbQ8qdEzR1gfE",
  "key6": "2x6oWMGNrr11ePiBi5quui8GFV8yKXbj8myPfgiwQhK1h2wv6eyoLTMTt5CJWD2BHw8DcLMzRuDsqT7Uvaq61XNm",
  "key7": "2R3AkDUYLuizDcN4M65t5PzNo9YBik9Drvr6wHRYXGLuH6KEJD6FVS7rqoXx2SnuYHt2pSE5FBbq4EHAWUvtyces",
  "key8": "7VzKEpCg9gSDPrvKBZcDS6NGMN3iYT4dvBxVs33GbTGKHjPvtCAbbpQoAsnARVaHoRxphCpHppca1JM3jJEnf1R",
  "key9": "4pjWJ3CfbkNqbtHUQ7PJRB8KeD4rGsVdNsFe8x8Qd5rkB57gEdeeVAD3cMgQYzTNCbpqJq96ckYn4c8wBsKpyKfY",
  "key10": "5hdYzBm8nFQW7isGR6xtu77sphBXRsG4SBjEt7ZVedBd2YYax6GWTJwQo89T3dzMGVHw2kWXkDEokdHnSYtvViRp",
  "key11": "2P5yUT472n6pnE2xwqAP7NGc4pPNpFu37t1RjWwVkue7buVeQFhf9Z9ZjtAcv9S4XX9AzRQ2Dap4WbiKqhUyxwQx",
  "key12": "3AmNucNgSvhxvUH4K686N5TbzY7Ev35rKvbYhfVPMRAEvGtEf8QY6RgZoS1MRcsuMRfSDCSb3Rx2bXMDnTAifvmT",
  "key13": "iXD2a8QagSJXcZS7Qi6A5EAoDVFRRuQwsp9TrbS8zBskZmPUwuFxgzmvNBZ2V77QhgDC4SJHJas5kW9kyF2MM6y",
  "key14": "2792EEbkyAnRFmKSh2zTXdbxck9qWXnmSTqmu7QN33qAkzCdScmrYAquFs8uLyi4BrVHBDUa56FLqZcT52zBF3Ed",
  "key15": "gPDQvQXcwKBXFVS54ZCY9ULhko5Awf87L5BopqQ5pDWam6SGmmBmDxESyH9ic6rebncA6HV6fwfnhiXWutTruJN",
  "key16": "57jcSkmHq3uWFmwZwmL8EzE9E994VHJxvikH7eBT3wjJg8gk4aAjfbNtvXRegBYPWMBT362WiCh3UpsGbHePyMQ2",
  "key17": "2JWhvHFj5z82wPyUZqpP6ddhDEefvP4yF3Z88tSknjGHLjjKgEqeSw49NxfKnuz64qrv6A6gJeCWrePa6Xwpzuy8",
  "key18": "4swf2P4bzdaTc3WdCFAskvRaczoF6jtDwZ7prTP3BcPBj6ENSX5KuNEYR9kynLQKn7mTA494btzGTy3AgcwVVoB9",
  "key19": "5wBnqfs4mn19a4ptvivfsVbeAsHUFjZztFnN1B8MhJ79g7fbGWmdTwgWp6F5Nw2aGSkNmbpBeF6shKSG21aVqvAU",
  "key20": "5AAU4zjDjhWv5itcMVyWhvYrL1f54wVy57xMrqBfPbWuC2q3hKpz4pbitXLUoSC9GpDo66JcGr4ecTQnaukoW5D6",
  "key21": "3ncFhFycXMeKZsLghoMKzZuFo8nc36oEEF127k4Eamx3U1FhFVTZzo3A2UdGrfPYvgmjZKCwxhWHWCx7b66SKF93",
  "key22": "2boAQA5dqS9jfvMxxEPokhn5Kk3W3zRVVrVtGUBY5tKeTtBLc3HEW5W5ruwq6hRT6N7LczupjLjgVgiyxXSVrvB",
  "key23": "5G4iwt6C5M9kk6Hg9a8hhHpHYs5FkjFBD5dkQGk9AjFcj37toFcUo2zLa26q7RmwtCKj4Qr7DWkB3wNtYGgep5rR",
  "key24": "57PLzteR45vx4TyN8dATKrfmbBCVuEENmYmaR9XQHc911wGFdzdnv2bs5Qcfo9MZ534Auq6Ye49aXM3d7m4kWFAv",
  "key25": "4GVrsopRpbmJ8fJq74C8Prh7gPH7ETnY3wfwKwMy21YSCSSnWWk4fDgGc4GQ5JQ3VWzmkFc8rb69nr4wyjrTyXbK",
  "key26": "5Ak3VtuXQUiZCPQCobTuWJQXZn3nJz1AEK8FSP5Dp8zxAYP9yc9RkE4NaaNMovHqFthfbnjB8wmzFJwm9qEKBwGh",
  "key27": "kn48weSptDFcZkVyUm65yMv5tuUmYJqTaEyooNkZfSE8JvRcdoXfueBppKZDHocX9K2fmjRovmFznrAkKzNrwjj",
  "key28": "XQquPNcb1UD8hon58RM6jbcmkPL8a512YsUfsyuDAax2VRrN8JC8TyUAv3NxkTXHHvuij3KdgUWdf87bUyisZCj",
  "key29": "izWetXWCx7PS5z3mrJivXHjSt6pK3KN2WKGzzqErmutBikRHxHJCbGegV34Zh4wwPX1QgZUmvtkUVheqACL7WGv",
  "key30": "JQWAxFTAKoPrMc5zbJL4FrZM9QPJDnVR8hA7mgnMp4GeTnoivHXF7BvnRqSHR5N9uAAbha5wMJfoWmWsWzmXpSb",
  "key31": "4V3mKhyXkf8RdQfMRSkK4EHJurcD2ybe4ecyCnbgKcrLWNDQqmuC2DaMoTDTmEBdFg1LjLW2gSEPZmt7tNxinxqk",
  "key32": "4qyJqX5E1UdiGEeHBix4AWujjfd9oFpzAfErJmK4Dd41uk7QxtTYYFsxG9Nhb1azwYeXkq8vrBBFE5UokKX9HD2s",
  "key33": "NiQr71Eqw4yyvvu3arzg2fT9X6uRkJaDZHFSwmAuWc6JtjvBKqB1nYQc4S76TvcaDEnh3NPFThZNa1LnuJnGUBH",
  "key34": "HENDMPEvZhrnQiUmS85jMEayNU16M3TAo391QeZ6yjUDvAFSDoRWhwUKjEe9iqn1CneSTGjVRf7vwnPEovi2JZW",
  "key35": "5ci1iYh3VYwZh9eFaBvoqACkxPCEEBdaJ7LvhBSXUQHea6nP6jfhY9Ux8Yk4NBDFCb92uP3RJ76k1J3yKJa4JNxQ",
  "key36": "28nQHgGHRdL2doYoTPTsK691pS67GFeMQybbPUQmRSkqPn6kQknLBUFXUkuYLVA25irmwk2W4apFir7STfmJ4z8w",
  "key37": "4Vfud6yJqePDQYQUA6yTr5eP2gzVtesjTBpypTjGUWARS9A7cFtJKDszvZjbncyjCbiVoacJt1615LFz3PwgYYka",
  "key38": "5HbQY2YqbJKs3MJ8KdyEDCmsv9jGFLbUZochHU7vDf1bEhV9xPm1yvU9f7inBCnpX7MT8wSQ5XnsoTcikMNb6qKK",
  "key39": "4Fb9fw5GbD6bL1uYav4bx6TpJKDmsic47CcgdWv4dvHUZ3SDkAK2MLkanqC5KXitNFk3XZS7b5t2sonHRH5Z2q61",
  "key40": "3D6tiuv8WyHjeU2eRohZVwvCeTU4HbrMUfdqt8uh183PzmUbEjXoWY5poWDxt8ombbko3LqUbsjvhGowtMN5thDu",
  "key41": "3VbstG2u4fg3hdjhT3a2ruMesn9T5sjomH93Ef6zCAVFs5oH1hBEFquXTrfBNL241V1KychkRbmGJjPbuJuuRSB5",
  "key42": "dEyUHurfxEfKoG3dMnwe9FwrhfSGyKfwty4ndvizaDSjLaLb5szeXdjm7Pmi6m6qDxPo8M98TAGargxvjLJKhdY",
  "key43": "3M4tUcF3YK49nGvnWazPqJTV5xxE2UjV8DdEJt2jN4RBX5RMgtbCcoYEb2qgkmhTxCJa1kDi5ae2sAbJowNTWXtE",
  "key44": "4dNP1egAMnJ8YgwxAUZ8oFRC1ZLF4zSU4Bku7LqgwpeVi1P2v1hxZkXUvEpgeuQVADwB9myqyDsKtXGpgs2t41aK",
  "key45": "2kf9saaCnDcXUniZc3LXRtuwJFFZeKd1wDZ3JQRYohuFZi3AtDgntbCp93nYFADyERAoJeCBJTEprmSh23YZr8Mf"
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
