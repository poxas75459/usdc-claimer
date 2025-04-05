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
    "5HFzjxsxFtiHZ5WuLdbPkkrBeYLRxiSiaJPqBGC2DzFyCjGKszVBhpgFwMPzGjfCiGyZ7iSJ8iJ1CrPP3Ui6c9PX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9be4eiUYMPnXTFQaVicSnKKAokHYrsD48a2Z1AgpHGo8JX8EEzEk3NeHXy4BUsLMNm3HCd8NA7hwiKtUKCG83z",
  "key1": "u2dCZRfmRp8EGtstVQ2d2mRWDjZf4u5yVPYyrLAFv8G6ER2R2TSseNrYWZqt3yjnqSzA16gW6VYDWt9fBiHF4vf",
  "key2": "2NVmqKpYcYXqjvcQqx3xoG6JoXpTiaVRW1unaQ5KgbUnwc6bgadFTW8Y4j61S2qjU5WE6hkgN6KHr49o3RBJScqj",
  "key3": "5oZF3g38QptYZUxjEBFEaM19JzD9e8vuv1ScCn4iWUZXV87H1vyLeDQgvCNPN1cw8f7rzqGzBAxkrvJdwfDWEAhM",
  "key4": "36UfC2mBSY2FSe72tpf1kK7KJchUnLVvCib2tqkdY5zet8hEUYsvgSm7Suv4GkzTTDtamZVEpUo87j2ivEHJhnYP",
  "key5": "3dwoos92Q9QcbmEanqQAM7dvrd3HZ45dThCoWwLQrJenxQbxdAz94fWZtaAFfLDX5UhTPKKivyMsyvaoXLmtqV44",
  "key6": "4iEgPXSzmJMMWx9gA8h7ptXLghSTa9Fur9tg5LsbpcP8DRh5tGHKC17bvWqmYzx1zsJsR4esfDdbN2m8o6PsYK45",
  "key7": "7Dh7iAEyEhCqXk6bS74HyMB1cza3sioA6Linez1rVNp6xJkQg6BMswiSbDVGgZE4cUsJiS8R7L3QjFq2ygAjfbL",
  "key8": "3FR4iNprYyF1p1Yr59PaMV7csbJNA5YrZ18RP4vXMmGUjCA7M44NFYAetxMWHPGUzSPMvgMu1SG6xw8dDsYE5e4t",
  "key9": "5DXK8GpZR2MJ6S55NnGezL6b3F7AWyv1J6oLch7f8MbcmikvTGNoCe7MMndJU1LpZCuQ7M1aX9DhmJSwJCuD9ZgE",
  "key10": "3EBnMWDVkSZhq94pFmrZLSR2ukyqg6wnzFiM6xAfkujhF3f5hDrxrwuNyRA3XcFZi8MKmUaaBjk441JLg8GmbtKU",
  "key11": "61SYp2GN1cLHDieQfp9PWjMWrMBK1DfRUQkzXe6HSr7iLqMEKxLmV7DpA9frTNuw3ZT2j9rqMBeM9qYNynRPCtaG",
  "key12": "4zfwGvLmGUAtAPiXYQ7vEgcQdJ1QbjPeT3a9XwWZnT5bMBq4iziLSGVbu3Ho3aYLLyWxUV1TJoeTwPP3pWCyaG22",
  "key13": "2cdhJb3DFHdZDTqXxFbPjk2UtxuhWsSQ653T8FX1bGQhAMQyEwdruTFnnyYd1uGZSJysnJUWox8nHAiHeXXyUeWr",
  "key14": "u51sTq7dXLEhuAzoFgq7zxRekYpscaAmvnXUybZvvNw47qpgbR5qwae7b7vRKq2C6cZcG7KD6MeegG1uWU5CaXX",
  "key15": "3zhXq9sZmPjjb2dbMeFBnMG1B7RcWz1VMJ768cYego9Uxa3k7Xt5Qz22ThQisenY31HAnDDjTujjX1bUAjDHDAqW",
  "key16": "2MjPP625p6W2EP17Z16HXtu9smbjRSyyPgoe3iq1nuzkKCL5LWGzs6t8DfzPuj8mc6hX51n5SqE12A8QYZWKF2ag",
  "key17": "4ec1oukvQFA7ry2wxuUaj418SDgooKRpx9tGmgkVsGuPS7y4uvsSEP4ccwoUMmTMtvhqqYnAW1iV2FW9YQpHVjpU",
  "key18": "4HShtZNjHXzMhzxej178hChaybLpdK5pBNqfrMqiQkL9Sijr4oRcfDJWrxRiEWuCqHm1dEtYTGqM3tFi6QR2P4R4",
  "key19": "QCBJnuxc4rFtPWq15h9wBS8cjSrfwgUqVv7bZaR3R5vEcqg9Q5LzTgejwdozy6zDd6m7LhQkGYcrvYS5Cs7HRmy",
  "key20": "64S4Sb3DbmC48g24DVP9jLuaiRxXpw1BGbdpP4ADxtGhVCVhVNuK3UL5uNxPBMrUibFPwomDVEoBdgCHYckKKyK",
  "key21": "36ETMjMzn8zYanqadqCUY49R9ohmQL1fReFPuF8gJ2At9nPdKp1iRjVesGaTUFEFs9RE3qioTZWPtVuKXi9JuYjb",
  "key22": "3jA8F38SJf5kvDFZJMarc7pUvsEN5EM4tYba9kr7s5CJZ8QQYK9x4xzyWiR11sapPLoj2qpN5ZCKut6NxmPp4s7X",
  "key23": "rt99TyswddgMWMKfKcJuBHyVpyqgoXdpX4rp8eaqiyz95vXq5FrarfeaLLk89DGtDLCcnUu53K29Yh31VGKDT9E",
  "key24": "4uzXbKTXyWD1Xw1Fo1od9LLapsb1pdDHVmgf6Q4tzhf9TsGDbujfEEyFU8L7Jv8yVwHWuV7yYnjPRLwjqGUz91yj",
  "key25": "5AAqXH1GC8SrcegsCWBC2B4FzTW31kXKDXYpZMyr6GvHwwfrBZ4FuPSc9ZaaU274q5TTcKb3wqK2ywv8knbxNGr1",
  "key26": "5AtXJdjXJZ2Scd6RXNbSi2Fi7ytZ7XFqhcGWkptQUco3yhhFGKdvLCo7jbZYgbi2ABT9FcjguKiB6b3AVmF1esQt",
  "key27": "e1Zq9MtDvmpcW6vnxGC4eALVXvhRYfGrN3QD7BSVU4g7Qz6cNiGGXVKjDTsm7sV8c26HiDxSvCtvpUKPPRKAwt5",
  "key28": "pypAjcxRKJCcrbzNrMBgb14VP8EX6eaWVWgrP5Kyrcn6g8xC2mFyt6nGc3qs9qXHkPXrwB9MW5yybxRnom871r9",
  "key29": "44ZTuj3ZsBYdjSbzWgZfNBBUHx3c8KfFFVMcJy4SKvyPFQ9VRNNMEFLUKsg1shXA9g6NtkiW9pbncruLHqbw29kp",
  "key30": "nyXLe6PkR1qJDn1aEMk93pro8vkueQJEj1MqeB42J28N334Fzi6dqqgjFKsNw3YQJyQozoULV7CDkfLTtJgBJeg",
  "key31": "Qt6ixPZYuQkyy8aiRKkKRfY24vEcGvSRo6bXJXHuUjGqNESNFT5Gqa7wpUKTJnGJkB5XUdeBJVohfADYoEGjsXh",
  "key32": "GsTuSAJE1m3xewFfia4mdbokbufKg93PAwb8FAJ8GxzDjyS4fgPK5dVXsjfKYJ2p1Py4qCU1S5MBkn1w9voLPMG",
  "key33": "5ULuoupVeUvP2gnGTLEnSnVrJVddhqdEgiuLY1xMK7vLUZNKSJQC1776MgcTnD7XYKUreAqGPMMgYZxwLzFfAM3X",
  "key34": "3V1cgziy5NPMDMvCjTaDFfvspS4bQ1FDadvAbQoSfbDWo4Np5xYzq5vRUHmtipBUWQaL3LAzYChFX8M8yUTTh2nh",
  "key35": "2wZhrz7Dk7HpRzQGAR5CszJd6jQmQVv2mRMXgbiHJkVyXXwvtcxbk6pkE7Kpv8S7qKmCPofNevRPqyV4Kgf7bnVc",
  "key36": "5V1LqcDrr93pmP8qEqEdM7npFLtAeNFo6RWo6tPGPdY9W2Wdpx3Vczsvj3r2QvAh6uWwBVfKiPnBznf7FpUrVgtG",
  "key37": "2eEtidb4aSSvEqpYDwkyWRqhGozKknLUuyMGhydqeQN86TRivg4Yc8hbwMHgCXcWSyRDbbEnDdvkBPzbyBsh7cjA",
  "key38": "FLkhaKj53zDeBrrCtemHKLAVeLpLtPn6SNGF8Y795WD5mYbkLCBoYd99BWxqL2ntfAkELWaiyTk4WzMnKgbD3E6",
  "key39": "43DFz7LpZuZLre9YDuZ6mX8m9BnZneC2dLh3VVCKRcQ5r1NKEf4fRgbhb4coPPhACcn5hjX4tG4axtU4WGhfsyL2",
  "key40": "VgYZJB8ro8BsWr7jpWZ4NB6p3jPUgPQxFWbQUUMXFtKGM4dPwQbQj8K8tvVQiiYk9YaHsnmhaMShrVb763ZBLkg",
  "key41": "2HgUz1CWyZkQTKNaVEnWgsHntpmbYBT3UmyL6ih9ec73QockosA6gQkpdn2TN5yim8vjd9rLReWBN2qBCb6WW9iE",
  "key42": "VqtRzxp2WdbDUgnmim6KKDvyXFjj4ABRnoKTdFPBucXkc8ytvWPScLjB7Rc688pxyidkbFJGLnaGBNUshfAcyqj",
  "key43": "ewXcfvvf6Pe2AtQmxzKWypZtAB6B5yugDKepQ8J5gYwVenkskzjiixUXaE5NYAFJesVr3uzi6mV9e2H7mjEo3sp",
  "key44": "4DJgi52msoisYLhsSAujxUqsMeFwv2UVPpAoqtdQQF6KgaQELhRLZzjStszwgkhgeB9KNxnKUzNQqZXGLCYu7LWL",
  "key45": "3PJhSBMN9cwSptixEE46n76Fah6inKPi9GbKuWEixmUFoAVWpU3BzXSD8FPH27CKJvzf4Xmpe3NNgHZWfu4TfPDu",
  "key46": "4deR9h3FmEqgN96jjGbNm9aiMBhwKdyzWbEhEYshmk6Kw7zcjWzCPxFzSHyQjHAXDDYzeG9hmVdkamXqbbiEEESt",
  "key47": "5LMTtfgbUShvdFmqMegmfbBmPBAVi5SYu7cQBdbZL1GEAhdNTNA1GmqZrv3DoSyb46CtB37Tm5KWujyRBYtSgLuV",
  "key48": "UTeKyUpv7U12MH7TtCVLDQoJenKEsGZNNnK37bmynVRBcx9r5WMygQm5ZVrD4q3hfU1AccFyj8Ymm28G33v6Fcj"
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
