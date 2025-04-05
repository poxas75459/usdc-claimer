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
    "5GfYydL73UFYFMi66mexR1GRxrWS69GdbwyYijuKa78v3WjDkucpugskmyx1pqVYafXzk8xefcHYPDeFxcrHfzKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxYLBekq1oj55TQVXrN2HHuoW75NoAccVLGmRhmo4sYB4cfreQntMTScH3tw4MkwVpgwgwvxHJHGepFFnpssgEY",
  "key1": "5SWp12cAEEDMGL1JWMjmcjHjgDL5ym5WSj4NtVASLKZerz3aJafgLrZzicvC5cUUGJASWH5QJBeqF4T22WHLixXT",
  "key2": "35ty5HYoUSVng7FfNkyFeRzpfyjF6jufheq2hQXn2EWNkrudLv3cDq8SH3KHGnvPnj5LGjREJW23kYfjDgVhf11o",
  "key3": "3oc63HEEt5hzBiZNHtprUrDoe4tKvSKMaYH2RPh57YchzL9BujTGTTZ3tQ6yi5NdCRNjdnWmVHbBZFJ53xWiV8Ta",
  "key4": "2doXX6187vcxQwtPp9AfhXBrMgD3KRX4kdxDkFVb26iXP7qr8vrEb9gVefe9B7Q8VG3LauiAALsmYza5LBJT75ok",
  "key5": "4eL3Lu7AJqmujiUWjD3fYECvxf5ud8xGFXffT1YDbDy6GtVak48XUgmSkSNM99Fte7F257QryrjBjJUFwkkNdAQj",
  "key6": "66dXzBLG6BeYUu8XAMoquRMhV66hcEKbRdCu1LgknHviXgMZ4kPk5AjPdmtvMEyqGd9fDjMRiVF1zwqkJ65Jjnvk",
  "key7": "5SWkqLeapDaRrwvWSb9G6G5S5DqcJAzTpQsx19wAeYhkCrgALeFJ2QagXbMw1VaPJp9f7J36oBrKA4vjQcJ858mh",
  "key8": "4CXrG9YKhv3D5UxB6VYAuqzjVyEoGrkkVypiYQNyFJ2CfAicC1NWLyVCoomLKjj4zjKsS8Pjwa7DaHFBspK2Qy7H",
  "key9": "5gkBhB7BUxon2zKJhWd8B3p3tXdBVT86A9zZtTJma9My9RyNWRrJdfNoF3uybwBFZKTQ2KreTzavtVbQC6t4BSVr",
  "key10": "2NWXvySucaZxDXiSzVwSo38j2b1JKkTQYrbb8K5a2cKiVkrtWB9WEMvWEPJQ6GT3LfDKsATTm2WS1Pey1vYGFn8b",
  "key11": "5D5xZ3HjHindB8KngB1F6N2ViEATHE6BECGRihCR2aMY7dfxR8LS3VF3zXkbjrMc1VBVmJ6SAxLDXqkfV5fQvT4t",
  "key12": "2Nbqm3gdxeTTasKSdvh1C5xGgjHyihVkWoGhfjwJbkEuHAPv1g6QZYRRL3juq21m8bsTzzk2Bsb639V9PcCou4cL",
  "key13": "2ZKwdk6DUrRSS8RiRFq3PRyexMxZFrfyFEGzH2L3MF8A2CDrMjPZPTqkcD8wcYp33Um962SvYjyc9gsHFrRhzaRi",
  "key14": "odmUAGrMLwpSLoY8sqeXz9rXzGRUghyou2hY1sm9NzjuBtD8XjTeVB5FUZsnfQ3o5vfBNUw1Nvv1XHUVpLwAXzG",
  "key15": "5QuShcPaUgNBqgbhovrsbRj6uwBKKWyD8XJsipgiZfBkJf4vWiM8qtrhfj4aAupBA5j2vLNKmcBqohthuVuebVoJ",
  "key16": "36k1pZMeP1KfNGyxuXo1AxVBd5nMdXB2tEUEmU6oCTiqkXUbGZWPRwkF36QR7CFECsBvea6ZqV5kc8k9wvkqBUHK",
  "key17": "CzncX3tykxLRD2Cjd21XjixWeS4jDTrhHCcDoFk7HYMqMQcgSzFwxpNwXTMEpB3ZKWSUqwFJUwU3mvwWHjakcVX",
  "key18": "5F4MeVA6koCW9QV3ymedDByU1pjQQydnhpETiSruV3VGSRZTUcsvLx2apgue1Kf1JM5ZmhXcxGR3e8JPD7qQVa9z",
  "key19": "BqYU1xuHMjyUmsvydaoLRY5VWRu9V7PibHW6UpqEezf58H59ub4fVBGqwbR44kYubktxHSsujqUj1xdGrcj8JN1",
  "key20": "3tk5zEykfF2N4v83v2TyNiNV5Ebw7GtjyZV9G7BCuDKdBw2cKt3ofp8tuiX5y8TXBf5NF1gaUfhimc1AeAzET2x2",
  "key21": "5zkVXNFaT6am1vhCkZqJJVbpLK93jF3oUxGKMDjypEEFLdDs4sfsegg9JKx76A1ELh52xtvkTEafn7Y74AZ4QmCF",
  "key22": "xpWSCjk5z7TT9NHjxXBQC7Aowqkgj3eWYvZot5gFedcViQUJ9hpizBZ84HjFW6CzjJAaHeqXwbvg7Rsxm2t6AwX",
  "key23": "FNYhFyryhhH14gEM4yfTZ3NGi6rFV3hbQrHabqNxX9SyKawrJv25ryp1JRoqvmRP988yJGHTQuxmcR3cn85vj8G",
  "key24": "5uwx4tq5RwitnsxfGFU5Yb5emAH3Aa21suDd2FmKukfXz5X9ThqnefExxyeAFCqRxtSjsurvhDFwFMLTKhrRbGus",
  "key25": "5MGz8TZ1QJG68MSoTtwMsVWq3U7eeZXLWv6N19CK3P5Y6eZhLBDYpdeX5hkqdfBAQLxTe226oViyzemTyV3Rtp5o",
  "key26": "4x3oHKBtaDn9orV3wFMMQAwoY5dcXzDBrUeSsyB6Ugehs8Y9WxKAuNHyyAZovnidAndzrqjwyBeT9u5gWHZQfud9",
  "key27": "4WYhVstMpiyKj7wx8Atb5anmnn6Gj5i7GNkcA3eqw1t9FPEWXeFypraxBv7XeDtv6JD3TSpsCABvyA35p2WpswKv",
  "key28": "3krEaniiAB2FXX64a8qCUUzNMRYoKFYNfeJY2MZ5dBj3w7smmAoYNEgxE7J6QazCDbXmNNpcyuHGqAMia97aMwkz",
  "key29": "3AvLuoGzWVD1D8YfSjco5W2DD9yj3sv1N5NP8C36QkGSnVRJq6gYYzkmfBwM8YPeJ2zsLH3wUTb3RKVVh8nf7EDj",
  "key30": "4fqTqA6KihruQZ9hfbYoTNtcA32vhB6VCRb1YVofVM7RbNRMksby19TXjj1Uhj1tePvksE5ur4r94aJbnmeuiMXU",
  "key31": "3kazzSqwCgKa8JCPKtrD8m9wgbtn1xsBHwgjZRovnvkSLozGq1swBfEWpPMo4iRobLqL1j5MXbhb8tMxnR26d5Vh",
  "key32": "2tDxFXSPyFuy6cr92tkU8QAroThqy6TUGDSTcUVTVYGURDmy7iDuV3Vj8z3zFFxBv8t1S5SaxZJCsVQ55hxNkLhR",
  "key33": "56VZxkKrTcL5PVYgqD7PopWG8FCxxKyzMbJZJnK3BSM9x1XZEoFv7rNgECLGpf7LCfJgBM9QjUBiL4Cq5aBEUCVf",
  "key34": "hEsT8hfBKiBJxMNeJP6m62VyXu5zTd3v8xoaWgZMXfcmwtJ1wtCEVXn4h2mQv5mFmYmK7ZWeVz1aVdQDLCMaVri",
  "key35": "4Y6KPyVdsDvnEUWzzDAHGibBbyA2vJJH8YqXfuSQAHDRuBsHnD93mYdzZ4kVBDGuTtzGkASkrsCKsbTuKqwifpjz",
  "key36": "fMfjnLcQLDUA8H9eXHXRoas9pTjr8efQrBnPoeP2JAGd3o6W1q2Tjmsbap2m4eUSXwVix6isr5Ke7UuDCMmKMeb",
  "key37": "3nSJQjjEKMLvbuWUdwFX39Gu2m9x8tZG8sTKLJrXBszB5SMWDBEhwG3RETBMbC2qRkf7vJpNUzobvvz3GNxLNeos",
  "key38": "3zmfM9BwdewD6uQtbcG7kz6vzfhVAKhefbJjtf9w2xmHzuEm2FDEzUbrF5SVagZuWHrV5mV9aUnyA6m9EMJC856o",
  "key39": "2RFeutL6dBCred2TGMdHkFtVvkbzw3AiVFAExrJ1Q3SzrSoL4bYAvUaMRJGUvtfNt4Xe8efzP6sUx9whYtotv3gi",
  "key40": "4EvSEFqMw1bpVyNAsmkJxgV4yan678tmwKqCuCRVQ8syan1P3zYqpua7LdXzVJwzjVvDm2phrwhLNUEjisXzEEu6",
  "key41": "2JjXB1GNypNzsoJy6rttK83oqhbJtxYj1oDMgneEqU1AJU9uMeYRWsxB978FXAFkEcPDrpF5njtdQv6V9D1Ch1vq",
  "key42": "kdKc6LNYUuvnaCpDKfVXo2KALbfmYZHQ4Ggip2RC1ymcM2SDzyQHygFyUd35WVsbk2BsbqDoVrgEunuicjNaNwQ",
  "key43": "BZAjw47ZR4m9mRRutHPjkEvNs4Vuog6vDUBDv1FRvEmJ1m1TU4W2henSqb1Qv6hxzLmBMSrYrx2uATbdUDYzAG4"
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
