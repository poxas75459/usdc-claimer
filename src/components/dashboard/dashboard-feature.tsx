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
    "4uXxyz5dpZNK3FbWKpiFBjWrLos3iiLumzPib9v8k1exiQdWQR3tbucev6dLt1ywNsdtBRtKzF5VAG2dfANGdVQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PX2yVmvWc2r8fVcBHFa2EjgFZZQQ3ieR8JJSaKcqRZ3iLnj9vXMiLFcmtnfs5g5Fb7c6qxCPBpCX9iCBBYYSXT",
  "key1": "3RTJTQdiVDp66v4hPc3j86AZVQk1ixDnnzxR6zkTSUMnDrXFu48YRyaUMfH7eoe6z9o66w6YFYnvdhgqZweehPVZ",
  "key2": "2KTraemqY9PtLnc9HLvBsUU9YmXkuNkJhVktr7MbTwTysVozH3JAFopDWGjT9SwtXvGU1bj4domoTuhbDRqV8ESg",
  "key3": "66wX8M97UFWjtdhdnN2Ecwv2XU3jExQx3m4ybwXMoofFBzM1XreLR9jNJdnwKJzZ8jGuauQDWekbmczzQX8RHqPP",
  "key4": "2LAZioqY8ZP5ic2p6DoDzRtpqvesRzM5QvSK7RwGpriHtv8vfN89RcMSQ4fMC98LeLvtRBEHUF4YGkvN9jgVqQQW",
  "key5": "eQqmFNGDqq3ZMMacgLFyL6EHAz2k3TvgwunWv1Cgn2QPguthQh96ESEuFKNdxVkQ6bs9Jch9xgouYuXBRTX1aLT",
  "key6": "3mEjdW9fDWCrcTmcuEbxJg4qeTKqRpqagobnxfGsRUhCWAnKkS79VkjLg1F6XRS5ZfnPd1wnSiwuisPyTpkmfFW1",
  "key7": "3wQiD5jYRxj2UtVN5xpWFKn7umfhQaDGTzEDUoNFa1EkAazH9AM3A271ShWk4W7153ZJkhtan9LvjjuJu1gkcEiR",
  "key8": "5gUpoTEPGr81Q64htPEUjanE9MiBiWUKqzCq7NztMJrJsMPAacLREtRF2GSHTu9jqsd42VdSJEJoLtn6x3ngVBH3",
  "key9": "3edNH6rMvjcZtWZMaxcGwHSKVcVCamF9aZKStU6rZWKxQH6x96k1gjCkrL2ZZp5B2hLH2xmDW8ceCYcEt5opgcVq",
  "key10": "5wg9FjHU2VKktAiPRuAxUyRdRquNvHApJystV2pZeEF1kTBhMvGGJyj1FsHCvpGhZgaqnBTzSqM2p8WEvvWqsTFy",
  "key11": "sr6n5w54Dhrsft9SqAPcsMSBmv8T6ADTXGSKua7kooME9A7S8Ldh3Fn9Tsyp8KGkojVtHooge254fo9m7pg6dSy",
  "key12": "5VQYyWBX8HthGj7UzS9kUE1nv81PkPwZHAqWDbsyKFrYGNU273mgzNMnt1PBfvZNMpWwAzWdQxquRJFLnUhFL64m",
  "key13": "5fEGYaB8PHbCGQBNWUDczuhiyWTVR2aGtJL3td1pDF1W8WknT3aaTQRiCsijstvDSCLNq4F2tRC2HiwkJUfZ6Mtc",
  "key14": "5BWATBtpps27BsvYo35kw9Jamwy98syB2gLmtzV55faA52czBVW2HbHi2VtfU2fvSSWxhj16TLWHYdzKVgsvQnBh",
  "key15": "2q3PmTuXMu6uKRp3FTAtuQtzGDGF7fvLNb1BFZiqBexwiyN4cCTQ81HSyLTi7CqCZn8cTgy2mrSAXe814MpxzzPx",
  "key16": "5Z6cNBv1m9DybYmxepkj3F263WjR5qftXQ8cryyWHW2i1Fqc5J7JQqkxyntQc4oBVNfyk56CUxxsFxyApn1tsyB7",
  "key17": "5LggfnZQQCYiVmQFKfsmwHWtpSDSBHj3atFGimmqsMNenGXXTHzNzikFhDarCVhcUvFXctsojeTC4QBnJtF6eZ8F",
  "key18": "2sNQXSsFU6rbF9KxMhPRftc2xntgJ91Smx5U2aqVXU5rXQegbvgdKshzADNe6b6vJJQLJUHZaQwuX5Z15ZqKTtEn",
  "key19": "5r85T6Hzi1D27T5K2qUzoPVCFFBhLXR5xkv8V5f8EcEZwSMmeP4EPJFYdkTdyC7zu7uWqWhUcmJYjnnZ21dARnri",
  "key20": "XikC56wzMboSdvi5ckfWyxHsYC4YsWKdonAwfeLeTy4hhpuU98io2do4Zf8gqcU1MccgLEmXw5Ua2WUgjQ2XiQi",
  "key21": "Kp699G6D89FpubonTGLCyLq9S5kwzWpHspKm5dTYP7k6LM8QqjutkcGbv1QMmpV8RtNGQnFpgurtAhMDY7qGe6k",
  "key22": "4ueoKhH6cFXRqhd7UijzhVF598adrSqxy9bi79cyPzBn1BMzDVTsoBghFQETuHBDAywXNwSJeFyAhveXYMike7ok",
  "key23": "2imrzes8pQHiLPhqGsuuH41tapRcT9ju7UdzkaHLQXckYjtJWAUYmwe9K3wNzYStgyg1bnrLpZ9XFyRwJ3ABGCDy",
  "key24": "534xWQH9NX6aWWrejf7H1HnnWphhfxFph1gbDKqeiK5xuJj7qe8w6VQHtcmBhXHij8SyqN7uH1tydrq2hFYUbJgs",
  "key25": "2WcRghFSmSjdwMrZk4y5SwfiCwuMqC49wj2PVggp9sKuTqUDEPQDGCsE1JGdo7pNTjW1vqrADWuxSbsLWFUnCegb",
  "key26": "5VACNwoDXPNJhCtjGhqpKj5C8R9CVZDGZ1XR1Hc9Dmk42HNP9QeRxVeMXb6yheb8hJH9PLwgDEMDDVxiFpExvQgM",
  "key27": "EwsUMKJb6FYczLRMuRNZSmoddsKxWGe1M1WF22gMxejbd4ZQDbYzSXgcUS2yEjnpabLw8ahqrQq8y3LjSRXKj5y",
  "key28": "5b4PeyH3JfGwW3XrxwTFHzraD2EcT1rdPaJJSs5psyUcd8MpjKEsEr7coqRf5jDUPyZf95Wt2KvPhaVWpiZtSDb5",
  "key29": "4tFUyqJLgBxkY5cKMigXZ7fdzMqXVQe8GVudfQoFcHUAEzzhxwctvchGcxpEog4iuWQfn29VqzgJ9zUhiX1JQRvx",
  "key30": "4PjiXW7cEZpAorbYwjzPRpDGbqXNNgjMuWaRoPZij2nJVzaB8pLmVHv9VmP5Ab1Y1skMgR9CWmqRnovQXSxuSSez",
  "key31": "5e8yB6NTe31LpkLNkkXJ5NF5gzEsP2PzYoVjjg93fxJc2NohetZiq3WSdwHZW8AGQRi47SfYF94m8VxHhLuPqZEz",
  "key32": "4cJoUsV6hufLU6SpygyiB4hTb63jbPDZWNCr5WKTcuGDbrbuMxZcbF9eMbhPJyoH2Wrw1nPkcSc9ei4iRfRFCGH9",
  "key33": "4qKYZ5HgG1Uq7fLpxV8MCtojhsf5jx2fKqZQZn6SzvRUfWoqY16k44JN4v5LAdbnufCSbPus5MBgUqu1RDoh2pXH",
  "key34": "2La2Ej1X3DzcXEpAzgubPUqTKuXHa1PqngWpHEozns1LxQjj2bcFVAeLMcfbNM2Htv1zatHS54LsBfT2QH9Ktc2W",
  "key35": "5Eex6uSMxXa67AGNZ7CMym4Y61JiysZ6qxnSqSbQr9NdSbyZgtf9GeMWBrhiVsVtPfQ7FDKmhEKdJGF99D9LwFyk",
  "key36": "4MZcMvJ9XVE9yP57hJ34Fw7um4qNvQfVfmzvEDQdp4iBn3qrGLcCrMA5kw5bBcDzqeSR8jC2XagUi1SL9pt9xYCE",
  "key37": "2egrBhCFkx5jQRehtEnzPH9U533Xme7A6zSPvnQmu1QsGdGqc78jti6Ync9wf7ptaR7Ts1PQwXbdAoDb7E82mF6f",
  "key38": "APSaCxbyYMyhpaSGdfDKxvrK2uHKPHxZYsZGrZW1WYkVPEdSmJk4wVAHyZ4dzZWXcsaCHPDeKvuv4uG2fMMGqVb",
  "key39": "31XbfLrcq6rEPntWH5Bjph4wcPZnUh54uiBcoSBjNfEs8DSXbH7UB15Qrb1pLU8X5EXnsa1HM5tUNskMdKQrUhyf",
  "key40": "3Vo6Yr3s3fKpXFhJacinj142u3P4Pter29KwuacnNF7n9AYAh3ywWMFPHEtsUV4o2QdbqRT5QWjzjJeTXom3YVtG",
  "key41": "2hmiXuutewUhaDBhV7z3SPiQU8JzcuKnAJVUR7cYcgd19G6LESE3aYmypVpYS7biA9qywimbeTnckgwSqyrX3sNY",
  "key42": "4pLhV3tLdpXZM33RoHd7VoF6MkcL5Dd9KqKQYebeDQfXND3WACznXRRxamrJ7ofMtForrFD9ELCnsZUMpYXmKqU7",
  "key43": "3okrRs8tD2jSMVQCF332jpdigUAEgzcx5e4KUDJB2zEyAkZTCJ59Ftxco66QBQFgDx1ssQTXR2Zyhz5WJtsGaXcy",
  "key44": "46Vn6biYArDhth9jkV3Lb2ruzvgg1AQXtRKHCv9MenYBpKoVdEki1Tmhq2sx4XKqAJGiyQWattDKiKdLajxJD4n7"
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
