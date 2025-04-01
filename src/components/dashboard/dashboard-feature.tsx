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
    "4MnKoV9yA9GKbdwjQ5jBXTKCzpvTxMNTawdeDnRNiT4B4RER4Y9cwxpDtHEafG8DoyGZ2ipcuDCqurG6pRev8o73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EW6ePLgrtmQzz3QpdAbEWtuXiZdee86vX84Uoncs5g9nteWuuSX8N35uobi9wfuUMcRpzsfrdwkeaFqRAuCkbLq",
  "key1": "475UyxbUejatN5MRexsbXwizcuUmyD7T6MUts5NAwBqkgTrodJt5MHLeXeDS5J1ECqou3qQ1VES7GXkjJTBapXBJ",
  "key2": "3msh3VeT842mFCkFPnEhq9xm2jg9Y2ViedycB9hNgscwdJ3YyzNtdzZLqpcGaSvRqQhsR64L5UdRDKDX8bTkAqv5",
  "key3": "4AFGhf944GXdVYWMxKYiiRNQbc6PbTk6Q2LaziEdjX6cciharq8YnrqY9HGnMRkTWhjY8v1uoeVjEPUDdh9WrWia",
  "key4": "5pAQpPrLz9c7X4KFGtS8yQZbN9tSdYMtZbdAuSabdZTpULSQ8yHYDc6D4TMpwSqBYMKqk8ELfTq2knj6cXknANEt",
  "key5": "53m7PXEFq6RqGX3ufhSndfdojXdaRy3N6CVoay6nNAGqNz13CszASiHH42wCpe4TgYR8EoLwoz9ZFsQEsVy91fPr",
  "key6": "4dYp83KrB6HvDjgrdPrZMXMdG8YbLG5e9tZ6dnWiKEra18TmhFFKuLHpSSQo36TjC6R2acFgAHKYvoLC4hszFCKC",
  "key7": "39kGNj8uCJ3A7ysW4Cswr4cPLsDpuex8CS6jHKzprV6rcsnmQuCFH44GYzhLcfXy6dwks2uPdJKeZAD4svrerG9M",
  "key8": "YeTcddFbbNm6whAbrHoPLtJbMzLgMGqRgreAgae5d5MGEZ3EbN7Seg18Rj4XR6vQ6fKsjH9dBdM8tASHQrXUGYm",
  "key9": "2NvyRxquNi7VYhYDHvwsNisycx3TFkhqTqE2LwQixpmcmrz5TGnu5yPePqpksjKvUGRLBrb4nkYQNuvs8DKvyNvs",
  "key10": "5sUGow4PT7DxRSDThcdTbJJP8nun3EpvDMRAed3kSvSd9kiURCUeijkFkicEkfGg7Cc1q1U2UwMMumeYkXaobCyi",
  "key11": "5XEfTJJaekpNvDPsYFcjA1FJ2jNzu7c1GgpeJv8QgyXv91ESHgDouG5RccrKBxiBvYMpw2jxrYtFAvePEFcBCxuW",
  "key12": "3A9jv9rUS8ir49oxscUnDRnY5qPPhGSQEQoNk4pwhJwEFgguJoAGaNVRrDYa6WPUWxHBrmt1i1kPWnkCFuFSTzQh",
  "key13": "KvneMhzToD9vnsdWKUPnUS8gfy6DDY5rT91yPqzeE6vQzxW9vzuLHvTGD2Eb7L5PL5cm3FJnPd84nH1h2v74Zf3",
  "key14": "5Qc6bkustej1MvJyj1nmrG9cYTCBKTwJn1RnRgXPx23qJyAthM1JEsKsQv41uL8kf6LCxDnQyF9T2uvj5FpHokvD",
  "key15": "2KEiN56BYSsaq3F84d2JUB4C5rRJjJae1NZnuedmhiyU1eHZS8CkzLS4iAMxYTPWdbFd7hd2o4gtczt96viiGf7j",
  "key16": "22PoAKNnGEEXQTBphZt4a3p6Fp8mFCBcoHoDnQ4xm33pFPjfoxX8yH9CPvLTj86bQH8YfzMTuygU85qtCR4B7eVz",
  "key17": "4fKV2HMLmyw9DjSET1VEwwpm92dYLPVzqnUuQ7gAQYDDwmqBftT4PGP9fbhd6XtKF8sc4Y6JtTmQfm6VNj8SsDAT",
  "key18": "37Pfoc7PkrqsZrZxt5WhjGSYgWky8WuxUVuDCSc8wskaHmwXHvAYS7dkGN2L4e2Sym89PeZiUqsQ5hAeDYKcDbAU",
  "key19": "d2VpCmzPcncGpTNKLF9DeyVFjyo7MHV7ivySLWQ4DYq2YUATfLaaQnJHNsbcerNWi849X2hqvmLxBysFdLqqqKk",
  "key20": "496JpPyhwd6Wo6Yz1Qc1PTz1iA4eEsDXegKYoXLK9ShTNFgmEfbYZfaEYbHPWix2WjNtwTuA9v3Us12uSaCmdVzT",
  "key21": "34AeERcnTfGjs3tWL9D1cDc219Sd63zPA7e1BgYYFMz1p46QtaZvuhjXxTUXXvnsZMYKuKujdoF47nJUPwNryAYG",
  "key22": "58K59PpuJJEJvYPsEd3TfhAqXCiTj2WAxqdH3ZQ5UUisNNSoNPscKkJnyXJJj2qbjowjByUMScbFSUsaq3yXbf5A",
  "key23": "333gttQcWn9cS5qDqYWq9pVMEHxBfVYWtboFNP77MTQ2qp1VwCETBuAaPV2Z1DmtnSuERRYE3L35Zmrr4SBnh59F",
  "key24": "UBb3FXP94VyGDgSYttWFwhWpuv3FsMwP56QWLCjScU8gS5GRjoSfK1FK37dXuwZLK4gySuF97Twzg5Fw8nCJcXQ",
  "key25": "62fUPDyQrPSJMrahxYCtvkhmSbKLBjAXUrdCykuLNn75LvHYqAani1KaUo6ijx2iB58PXWZ3T552sWjBngSNPiYA",
  "key26": "4VPeT6t8jpNwjcSKV83MLUFbUtB4JsWx3cXjNHbtiJQDeNS6STSL9mgkotqQh5Yf6SsV9mxhnM4kM7FyjFzUgSU",
  "key27": "3bVh8ZKA2JuGDGQ9ZBtMb1Ap876edSvu4XAFAnoBqQnXkoKv2qwm9nsbH6MDgoq8BAafcVJJP2UPxsNLApfq68tm",
  "key28": "ZRdmSiDtK28A9yqVXUaJudm6WqvEbLFo8uZ5sgbK6F7mqnEFnrpQzuj9GwVfamygiP6LnKz83Urj9yRiCVUdUL4",
  "key29": "5HxkYzLGHfiJ3M4ovCviJwc2MacG4W2tFaCvR8yhY8J7fLSvyzWgPvEMKtBSjxNYbJs6kwp7fDVChywVayNNDiEJ",
  "key30": "5oGVrdQu2HAS9rY49Cvpj7gkYHyVnrNmY5pxj1tyFDGZoCca1VCAXNJ3TyaMTjJfe7NSr7U9hp2Zeycc7YpJ3vkq",
  "key31": "AC942LrHPLW6nqAJGdrXDimsDmwawZrqY3d8N59pibuceiw3GGwjGx5uhGAXQuSnrjYNhm2D2q1E4yLkDCogzc6",
  "key32": "2xkwJvxbYuay1hgZhbvMtcDxSAUL79PQaeiDzGSk6a1EchQd38SUL31EhYtda179UUMr1Fb7HothLShcSPZVpw1b",
  "key33": "45WTEbJstMJYeeyYfGwFDhna7Tg6qbLbKQeW52CxKybNDzcYRRZCRZhrYQoYEfAxuHyk3pFLiSYyC5LSKkZyk3Fm",
  "key34": "4nVY2LkWE3Bxpg144VbXhi1ASR8W1ncnAh5o622GJtfoZkZGwFADtV6rK1d55Z473MeJdxBr4vrdCJj6MDVvp46F",
  "key35": "5cyhRD433dwurA1Z6P1h9DUCuN3tKCr3vi1Zz4eo1vY4Qhxeb9Utp8oFSGJmgPXFWu3qV78Q4Yos2Vtiofcanhg7",
  "key36": "62iTnFTvwN4mu4KevwuXvKq12SpDdoJAX3PdeuBCktUHmPqwUhMYtPyTRZDRQ5qLJiQpRnrhDeyiUQka8AG5kWZq",
  "key37": "3X3SsrALGYCnWZCppVdN4LJuW9hZE23H9NYdHXHKBaSide23xuZ7PsVf3UqS6XMyVZmq5L65LAN4b9JtZCdRinwy",
  "key38": "21qHdqFbnMQbwZ4G9Hsr6Y8qR5QaiJBPgaQ3K11QrQD9e4jwN7UY6wkPTu2WmjL8JLnT9rMqGbYmLyB4CTfPAof1",
  "key39": "3Kcgfh9vtod8CHg1SKeVsX8HrfHJV5e2kBtXgjLMymNtCozTukJWtNfnX5p2BuqwzrM5wny9WAaW6MXoTLMpjQ9e",
  "key40": "3pkm4pb6MgJVg1nMVzeNE9vjvJT5sQEBkTZvKWZAW6uBEJvBH3e26Thyk1usRdGtxdFDZbGvyFV78hcJMXDPbGPz",
  "key41": "33kYRgNuWaui63rM92YrEYkyABsSVX4qKZHUaxdywW1s1r8qVufA7Wug3WykQGUF2EtKByoqu3rUTs9CJP71uMPz",
  "key42": "4ECbrmp9UeS9ZydHeSvMndcXoYMvVqxAVynEWZN6bbyUdZP3PSVR87oV1P5yvv7EmFrkNXosbfkMSE8GWPQYg2pD",
  "key43": "2Lzu8QPmxGzYrKZMmj8cUn6D5fw4i9FMuiNehc6WrunrL9TZCwnFFsiC28JuNyB2CJWLNdT1vDGSEpRGe5hbjC6i",
  "key44": "sPqNmG41w5qttvg5NgTXfMRXiMR2cr48L8roDBAd27U3xNw4T3XBuY74RVaXkXug9qRHJxfRX3ndavMH24WzGHn",
  "key45": "22JWHUEaAung5nf5QeQ3CxM26TVL3DyYoTVB2hEp1dMwQ9fphWBD9zJvSmPzptE3cjYwYEh9EJwd3ksbsJ9pmpZf"
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
