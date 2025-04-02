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
    "uJpzXWJcyGvGRUd3VcAoi2JXtiSBr4WiqNcsTg9nCHosBj5RPcYNFPRyLU1pb2b9GodTghqMfSDSV1kBnsw4BMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52h2aGKVBdzLkpeFd66C3bsZQER6aqM3yr3yupNrkbvdqbLs7zToutQCv2G46BJe5qWFnY6YZvpevwPvMp6vMAA9",
  "key1": "5UYLrtR4PAUvo8to2z2vxzMXoQWYc9triZfXeD2HXQoXvwzQiLzJS1Xa6GR32L6T8hYGHarb2n6pX9MwzYcW8yHX",
  "key2": "3tysNkQKahQiYhKm7EC1gNdeU69e72qZrCkXGdUUvJQcHgsvFiZQjAXbR8BS8qVuyJMuT8BoQvfvbYmuCpxWjVwV",
  "key3": "V5HHkanUhLrWMWNAvmYtRVM2FqrevGu2jx5mkNsC5aRdhmCMvCV5oM48u2Xr6pPmRt2ZZmtNhoExmbHrZNWe377",
  "key4": "twx3Vm6YGh8arsT1FbCsTf7KR959v25W3rz72ESVK9h8xBwvmwJi9Rdg5gFJ8Vk2CAwwDzNmEDwVXbpDRZWqw18",
  "key5": "4XzBdLmPATqSb2SE7SHaim8virtJ5ZFTkBRGamy89HLFh42zL18Nekhuom3TfPKeCEtisTebuVQj2Lpf7vW5tJo6",
  "key6": "4mjh2MbLwZPkEdPHXqY4LyRJuPtB3RwVH4t5i8ksHQjc4gXBWyMobvR9FPePbJe3wQhb77KZqQxYyKsBYgQhzcHR",
  "key7": "3TGUnrpVQcNfiuPunUEnRk1i8Yb92WQtAMXM784uTqdM4X3GdN3BRjc1ebTNwKivyNeaMCZncTa8MuNBVwNz5p1o",
  "key8": "58oWqGUXmDKhjNdttHc84e57SKgYQQAFGesamxQLaBVeWp2N6urwHuKaJmJcnxmhvbjt12SW9TesQMB1svHUt4Lt",
  "key9": "6xZTjLFfPrcBxHRGbPR54CDiksjXzT23s4Ja9W5A5KHLW2F7qWniKjjkHCxjLHztAkpoNs16rxruPGs6KqC9Qty",
  "key10": "66hj4XEdoQxBcsNzzmKdBLkjqe2NkVSkQZ22BcN4aaDDGEMvADazLdC3SuQEC3hKGh6HwVoGxXeWdpQLJwunxGZb",
  "key11": "4y4zarEraPoXE4PVcbgo2G91jFvc5whHtpjqHPVnPhMLmNAD5D4eEPzX6Wj3Lr7Up9WWGPCXi9nEF52cVq53759U",
  "key12": "5Pio9RNEMcwUL4fCt1v2Dj4uADzUcB1B6AzPAeFF4euLQvGaxDhQAy65uj6JTx1tH7Fvq4YWhQsE2kFs98R3bbJ5",
  "key13": "g2vewMDvx8KU6BthTABSxYix94muDjpQMb34KjX6gKGREzKbAhW3RbgpSckfKc11f6dj21q3b8sFuU11Ef1b8ut",
  "key14": "5Qe74yWWz3yyym8tBZGQw5Ko3rQvpkMmqwgrVnKTEHSrpUBTxGJBHanRozpZkeetmoK6NShRJStiKQFRXacZE3ns",
  "key15": "gDcXkoonGeNQ5Y7EMaEUHnjF7XcV13eU4MEAZzw98G7ZPbBGf6G4s3Z6vy3jgC1AVqpBAW5QKJsnFDFrTcVibRp",
  "key16": "2wAoJVQkVRaeytKA7BfBwNG1fsmu5LYL9t9oGa1C1tPsrkAXrXqEwYqiVm6a5dgbiikZMdxbGFeyvEvJc5957v9s",
  "key17": "aKUYAqumshx8T27mVnnUMDcDLfiXNZL4yTPH2bwRPfngzB29WFZreWf25wDGLWxkDwJzpuSGgkKowXA9A2KkPP5",
  "key18": "SNU74YC9GSefB7eC5M7Z1qcvNjomjEhF65EpqaXCDw11Lb3JE2aRAm2x4BXqhfd74Xywq6XiEyWm1uHDjt2enUk",
  "key19": "GXbJU2zFLn1Ndrk524TwCv4i9VWrRX95PYoVMtWDPGn4ZvcBjch2twmiCkXDVyPm7exDtnPAypfzwbnXP1xKBNJ",
  "key20": "2bvYx7RPUv5BFfftsi1eNP336oUfUKWAmUGb4b1uFeD8Vz775ggepzCJU7qZ6vEX4KMjuxnbuCbzJEcXT3Huwymv",
  "key21": "61o54nLBppyAE8yVfbfPNqa5eGkFfvyyVi45PTo6MjjvYZFWQDb8zDA7G3ZVUSqkFgdsa9mJFELPvuLbz43Kzf1n",
  "key22": "43k1PoP3bXySoPjXQaK1Nd2Ax1NgFSydoFTbcssCj1dd3g6EZXLfFXSTtnqonHUTdze9UgMnfvSy5vgfyLXtD1Eh",
  "key23": "iPmo8xwoEc4QJDeZeVh7swYf6MEH2GSZbpmJLSeDaT55xcTwoWttKiWLqRPPYaAg7xB63L6q3Uwk7JsmjsDfJ3Q",
  "key24": "2hCxbtMxhNy8EocMvtoiqPPZdDrAhGZmZeBiYkvuqssQFfnMEkYfGM4u6GmiN7fBypNWn1AasJwBmmQrUu67Z48b",
  "key25": "sV1fuapQeNWdf1TPzDqExVYs4JwE8AESwChLtAiXSMGz7gfyvR3eGkujrpr9mo3jHoWp6pFvyPCDPW5Eg4xij4d",
  "key26": "5j3ogJ5ESMwDTecxYC8zpf2bey6cSEbmzuBxrz2NbXZG85d1RxGdBTYP8hBxLHdmYJfLcPPuzwEkonbKZnzbTBob",
  "key27": "61Cum9JrMgZMPVvdr68thaWPWjXanSBmpx9QvvZP5x8T3tSnyek36x7CbuhKF7QMwPStPMGouv5YJfgh33FMsQk5",
  "key28": "2mqFF2vdDe6XV1U6GjaVr9BcL6iwKocrX2pfmXjw9A7ehJeNgQJPxh1k8wcx5fy5Ybd9Q2ceB1WQqHvTsDyLWR16",
  "key29": "vgoFRGzSrV871RsmB5wPP4yietXsxstgMrh741qZzoAcBrPCyoiBdSTbDDe4wDo3vfYQiri1Ka8WXVuhMjNy7Pi",
  "key30": "3Yqup8CQ1gffpGsgfCyoz5nbG4oMmoxcBoMoL2tKHPoLYP2RRhXzKPHbJPoaDtE9A1aY3MMXi8kCis9DkMThDLBK",
  "key31": "67LQPvw8FmcjzaCdibJyi6QeAfQnovCTeHMJPowoDEKTVqgb2sNxPqVcUUoj4jCgQi1wBD8q666pRm4h1BphUGi5",
  "key32": "2XraEtahoRwFZbLUA6RU7PcvALdgJqrRWMMeRnvHynSyNzPaVjbWAYmdZP7LQx2uvDKLF1qsxRDedCnN5yMZ2Nw2",
  "key33": "4Y1NDKAX3BUT5tNhhkj6XKEtR4z9ecPgUH8GgnKf76of4MR6xWDXnGnHUWmnkxorCpB4nMBxoGZbkcLfJmYXCpG",
  "key34": "3YABd11wHCVFUWXhtQEfNTLt6a6mmZjnEaF2wb9sMkfzAsjhZQ1UGMpogH5ANJjKfTFSQnfwDqT13DfzTfaUFno2",
  "key35": "2qtV3pdu62c7n2cNJGhcWB98YWsEKHHo2KeJsNhh5yZbJaXSV2ZcVwe3zxXp4TjFEcct2QLso5AEBZtZQxnv5rtL",
  "key36": "52BmMsQudxyMhoSKdmZxWY2L3Ud6S3Hs86tT3ZF3ZNW7R27oea1zbAqBwtXXaEkCP63cd2gj8UFHW8sTm2UzYXm6",
  "key37": "2p2jZgxTqU3qe6iR5fo7chhSPiGdMsMDqoUe83YULo9fiMYTNX9ykAnA6LLtvY7SvkRQ3QVQMxCdvkafqMW6N59V",
  "key38": "5rQPamkhS8n6LJrabZUuJbGDUNFHE79jb6kaxTGTCee4Z3jNPEmSk5aY9n13VDTnpDsEmrUb8EKAAE5VEhyUVryP"
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
