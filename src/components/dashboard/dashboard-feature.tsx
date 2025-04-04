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
    "46nsVBAFXSUgZvrLMLCVgJaA3kJVA9x126ouMxDKYuz8VaMSDZsMvaT3hyzirLfwwd8EKoSoSP2xqmyqvEA6haMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xg3d6XQ4EC4YS2XAHwaQmncNYtid3raNKQzpNXq458mLDEmFLdjhxdoj2Md2nVMMtBMgPBSCFXwvLmNGXuiYXCW",
  "key1": "4bCLY4rHbXN9of646yxyaGGMkDAjqD3iWhuz3mx1JcZbe2YpahMe9F9ab8FFeqtGr1PwDfQcwp5cW2mUUABuVfBe",
  "key2": "2gUpPP62JvuzmdLwzVRudTEcHjMVzmqfFPiwVLEfiozhAtmVaofrUpSrCErfpVq1m67RdBRi75gjdHss9EVaXjWd",
  "key3": "W2qwWQTZPreeFqqi58urWLdfWKHhAf6tXPHgB4U1VHQpj4BGGkZt9JM7EQYwFvhyQQbyY6eWKaZd678vAvhT2oa",
  "key4": "2MNbtxKTURpe5EQo5tveYWVtctebRZ32dJiNu25uKxYMTYxxDkmUkhkb4je6JyLzi4zSz5vdWS43LrraJ3tgVQdv",
  "key5": "YRLvQTbogfDXeZTYDk6YkeFxcARQBiBVvdwm2rwKJM1rD2TroqjHXu3N9RjVVo6hkQSNDRgGyduLkwcTEKSqBsS",
  "key6": "4iSCpM4g2NRCUn1fKibyhoLZsussB5yerFHfUGP3xuPwDFNdoA3uRa9QjpSwD2FobSVdiVkohBHo2dN4d6Z7PspY",
  "key7": "5gYC2ZHFYt6Ugeb64M4JM6R1WJGVGDdQxbwtJzVf5GynmnZw6jztnK8FtVymx6t4d2HNzcunnFaCLmpDzEimLh8P",
  "key8": "oDgXX2YFkXSYomDBGjF1k7zbw4Q58FBNFt5a38t38YrMhoyREFhenQw6dM9oakPNGrPzP8JonL4iXiWFLTCv7MZ",
  "key9": "64LbdB282Kodowd51oncaC4x9bCUsxmv1M3JDDbjdtyPijZMwX7YKXNT3ypP7ZjerAJzSgsjUVdjb1DXs7v1vRD7",
  "key10": "4WUnvGsmuScovb42brgdcPEft6ABHHLDoRpFda7coviRwVFkFLJtTp3zwBg3baf2pD7uYkSviB7TnjDWaBgyrszB",
  "key11": "zPTh97eVw9PLvVX6FM9zRTLMMqqQYhsP1waUwthQc31Ap78Gg2eimd4eyQmnTN4GfGVGX3ijbvUYXwuVMedLGst",
  "key12": "3xhfNdbuTVQEKarfq2eUvmwZPec7fysw3PMDHAtSPaFy9PoXYfcYiceyX5rvXaH6DapXmaMnULnpvowoW8bi72qB",
  "key13": "2pYj8Qx83qZGPuLPkfTqfHm7hUeumGbM78vKgb48zaenXexWkxFnXheVc5BhSg4boabj5jRLfwis6nifp7eY9Nh9",
  "key14": "4SUAQCfYHGdT852KabtPnVzGPDq8BPoaDmuwy1hzBJn13fFaaTFg3rC1KFx278UnojtPkB6ufhWZmmuoYYQ9uu3D",
  "key15": "615hxmVGh3yWg9YvuEdoLJv41kZzKsCqjQ1N2dXJNArDUy8WVQc2iqkhSPkP3DDgxN2m6skmaQ74NuwaQXsML1vT",
  "key16": "2KicMFSZbdXqD71cAoFzdk7EMu43Lg5evL5kDJG5Z5ak5ozv2AsgZBpzGdQXs485GLQbVDJb6LAqEQamQQUjyeFu",
  "key17": "67T2r6xorjpzVJfun8N2LJnMoxpLkNSpXcbBpshQJWdVeZZMRLUCtJqPJYxJuUq9yWZR9aaU3LctsfC3cAB29yTd",
  "key18": "5atAfEshZ15Sr2dweADNrZPhoLb2bqT9LxyqjP1DwLKWVGUiEstaUAR4brYFJ1RPX9YafbMpLLjTSK4LsEhqLxjC",
  "key19": "51gfTZnKpv5tSTktDkKAYBV1g97RMnA341YPajZhAcSzHpBffzg8yEczY64bhsHq1GwX32MH2XUhLhwQm5criQ5R",
  "key20": "2dgfjxTyubZMNLz43EsQXmFLkpy2uYdqoNohMH5ZdEnCFjVTKgaTsFKUMQgtZGzqR48EouWYs1NAXrfpDsPcF8Gf",
  "key21": "S6EMHZPTm1SbHANFaJqqknMas5Vpqt3tcJK4nHpL4nz4c19iqFESae469AgQUifvattjBMp7JfMfMCdW4wshpqp",
  "key22": "5WMramnN5YjyVi7Q9yWtj72KBxVJhtGizY2rojcLU8wB3kefuL94cXxKA7tuCSDhrChqeLqqatQ2LVxvL7hVtoro",
  "key23": "35A2hShCXpQhoju6had1ZfDQCSxXo1nrg9KbCZ9AG6ExxTn2NQUzNufNmVshbEwaFvgFkdL2m8rGrH2WK2eKo6i4",
  "key24": "2947S1KmgrqpLAVDoKQpwuK2z8NHBwRBnPfLd7LLft7pnVH7BiNmY8JHWNHtXxikkWJCpXFQRWSqicUG5sL5BPqw",
  "key25": "3a41Dzg9t7TAhKvTVgKbANTzqxe82MLC79dJha7gjYdRBxW3wEFzbZVKM7CcjWBdRxunXZYdfeCir5xXaDkc3xcL",
  "key26": "S8Bq2amHdH3NMdqT4g8RhYCGb45zSbRFTc4HEVUQ6takRvDZD7Mhfyv3tHZhaZd9dXjGCmYJnHYfDAGoS3ZzR4B",
  "key27": "4JJnwFdBCVHcdnjwQBzvx9joLKq6wskZsU4baZqbcsQwmhsR6eFxTy2eTbVwKzYiBQXsFRTPQwAxRD38qdiBfAwA",
  "key28": "3KbVRvv7E42TSmMxsnZA5Qhoj4apioQC35MYeDKPoZRQSFPyX59KVgmUv1vxr4RqqsjNPy3cQ8rL1Bc7sZgk6C9y",
  "key29": "3QhGtX7HqwEoFoUBD4todzRSfeZu2EcKCEgXghYARWvxTgmnRKSSrJnMQufr171YXWU1xAdp3wqmyHQg7jFqxUky",
  "key30": "LxMecWmmeZG62ZzFHp2CBKi3skaq1sPL9UFiDzHTJgH2r3XWWF5e4vvwNaS8g276XqbdwdnBwEZV7BMvSmh7xzS",
  "key31": "5FJRGdteba1QUdT5ZkifgmnMxBJ8Pv3Qkb8qgxghD1ZNFVvB9xX4JNDCrHz7pPWTyLkDA8o5dmbx3PvzRwybbPrY",
  "key32": "2Hzbto4BZrLpGygnv7JYPV1BBbFTqcDfGcy9STWyH9iFYkXqkUFecDmqy2eA3CyQeTqWpQUe6o29eYuERPDxSWVK"
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
