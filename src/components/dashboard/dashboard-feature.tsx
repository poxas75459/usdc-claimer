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
    "5nQnd5eJahKgbY3WaVLJLG8ErEpVw6b38x46hYwQB8uqanSqoFU65jW5cygWjHSX9hP3D5vGpL4AzX4ucZRBBLR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iA9KQg274ywnHx32GgVeQrKaKuDRrNKfVD54tvneDKfvWsCe6uF1zowRp2hXgsqWx3LQvjYQ8TMSR2fQx5tgYdC",
  "key1": "2BeuK1ghSwoWXi2Je7E2Qei8DQi3PPZVkhxZrF3ySp4uLpBivxNxyAGB26vKLQXewJxRPmMfmET8T7hyMHjgSR6G",
  "key2": "4ELU5AnTFfdMQxgiWM6hH7x5KpTVxKPDmE8AjnCH4yP9g6i4EEMKymZU2cFGkQkpDroJLEzcDYB6HCSreMi7Ti7E",
  "key3": "4FBu8eGpYMyD7aDkNCerwiAikmcQJr1m5gARQMeK45eZ31MuWueSufmh4uTUqwKE9NCPWrTcgjpPTKhkusv4vB4N",
  "key4": "5zdknEaP5LJePLh4DKJup13WaZw2fAG3YVo4KiWfhn3hKJeSUA9q5bQMLdRi9ArRZXedZbpF6deuBSQFps8braNm",
  "key5": "m1j9g3B6AvwgQ4vibGKffHxE1oKBUz1eAoWZMEBbLALvB23axidyWt2gApNBo3SvMCkY8Rt8b7FBy4UojCbWywp",
  "key6": "363gCQyVfaZqDZp3AzcPsShxCCecKixyeZirc9vHSozw8px5VuyEqUBiLvvCCocQUf7EQAKQz1ueM3wGWwyKKh81",
  "key7": "59HDxnNBTugyEETHYvtNXGEgWBvMupSVr6wf7J3KoyfkW6dahLaHYDNNtsfxrfZCDRCV3hPhCNLdQL6Y5cpg1Zxs",
  "key8": "5wp1ez16QVSEmeagbeJQd7v1cSyarBNEKZaGdsXiNejLYK6XW4bpvRCVTuJgBj6rNFWRhQCevTSvz4TjsFGmWYic",
  "key9": "2cvPZAMJJD2k6iBKbYGierHE98DRScmjSABxemR7RxwAxmZjfxMnVAhoNkLhGeRg8QXmxyPHVzVBKsLuEwjZq2tJ",
  "key10": "5FHJLA6zACdKY5uQoP2PwhB7pVeYozRFuc5yzztkuRPGAswU6zVwT9j7oBQt7NBQdh6zEj46JJKgzA47fMqPYyo",
  "key11": "3kRLsJhk5yRycGrtx9fNQKqx292Xfp85sNJubBD5juKbgR6tKVMuEwd6sJaTKj4yu5AwN5pVRYv9RAhoFRsqVexg",
  "key12": "2bNetuGAawqG5rPbEahmhqmM11TZARPCkCHxb2ShPjTbuGn4gcSf8pjW4KNGZnJHACV2jtTNHNK1mDkcp12RVX8W",
  "key13": "4tEDetXVQj75RUW1gqFX9MBZtMNxHjjUQxaJMRFn2Yfztx1hrMbXvqFYHJJVADjRRp1e1ijmrZTV2sEZ4VNh5LnJ",
  "key14": "9nVnweNxZ6uPdzBsgcnZXfNWWydYCrrDjs2rWbxZ9FvKzuKyTgqRumepKeTQjqEmjLaT8PqHhGDkJ1De6D3Yo6t",
  "key15": "3LYMx51cw6FVxDtiQ2KurbSrKP66v1Vfj4Evg8Q4QgGYSYDqt2rUUv7R7kgRvbCDjm3xLjFfG1fXQnk4Vh8Jt5y9",
  "key16": "4ufMMbfkpYLHkTZhHe33D2MhumYrStwaZehdPqgbN6Zn3UwZ7AprXj7mjb4By6SgpfdpaCRYpQMP7k4spKihdN6a",
  "key17": "4JVkWGpbeqZoY16217L2QFRzPnWPv59ygoGV4mUiZGKKRmwAHAoGLRQGWoYVKXEcC38qVTmZqovS1KdNbphzCMGo",
  "key18": "3QCrJ7Vyq8mi5Y5Rpr6pUSj3o71sW9gqjSSRXzEqqPkEtrrAXP4i37sSbskEnuWMStgKo9UQ7jF3aRWLHhWUUu28",
  "key19": "4fkwb5ZGQjkzR3gMe9ftxfBJavJARNWPyhkJnkMVXMtGze35rYbUxSda7aGiNNWVM1hsnKkDk95EGnGyY9dftVD5",
  "key20": "4h2rRFDSUTmAht2fDiVP1dYH4fxwfaJKR95XKngj6z1SnCjpi74JN4KfwB6wdmbwAXPYBQnoVjhkabuiBjHK1S5h",
  "key21": "5LtojFhfME9JE5LJCkE7srRk9xH2VUbNQfooHcDzd22meoMqmbUsZUCc7aFw5idjYLHviMmjmXKFyWMLehLz3WWD",
  "key22": "4W4S4hv97RxLRZiYrHy8TWAfFKbiji4LhtJaoq5vc8wYFCjGGPdCZnde1tg8qaAELjMChs3LoEYmGD2NCsxJBa13",
  "key23": "4oUqYdr4nnvMDkbbNBv3SeWhEsirrNErvhWPQvjmdA347dFkmVjynzU6fvjgJxLeb5iktgGk3JGV1EzMh9gmbhCn",
  "key24": "ePjvQfLcHYRQRFrSYa1BSovvK5CqKESCNXNpD68tZaswGNUyGg6pEL9aCQoTAYGYEURsPKqCND8BS9y3UNBz8PA",
  "key25": "GdMGNdFUaCiTDVBFYTM6xWK2j4KrY3gzCtX22Soohm75wSa9WrLbm2pJ9Ug5P4QpwYuypV96MCGdLmmxMKbSNeW",
  "key26": "bhNYABM19jnkPWg4Bsmeym8tmfPMf3FAfCctJPmCLiaYF71uEcdJNwFujsLS32n2JCGDm4F5uX4T7mLMpXQbJ2g",
  "key27": "4ok7fMu5ZtfYC7MNQQGZnBrXdYqYJjpLWYQaz9rYY1NSbhkSB9iUiBFY5PRPPfKsWV97Hvupsir7XHhpE4JoecFe",
  "key28": "2RFyciWyq6anDgnHtB6AhsWMym5VZsgvF5g4Fi6Wdymzc17P9dZDuagbSh93NfX15dX6bjTdxsZNrvhEov3Qupm3",
  "key29": "5oXeKZYC6fGRJXb5JcUXE7norvXyFn1CdcQm8FWK1wpyF7hQ77ewcQRsZUZk1XHXkHLza1fNTGsQDsqxDFUMCwgY",
  "key30": "5Qa1hM2qQ44SZo62xTsTgLetvwgNGsEYwGBn5Q5Vi9GMhPUivPwZg2xQEbxbQiLd4CzLKUT8ju1P175viyo2Tu5N",
  "key31": "3Cooha9SJVogqarzx9KYaak9W5AC24RvAeoUo45Fq2TmRogEUReGWkaVFacUb8zFmuSaGaH9vGrk9i9WdndidrUB",
  "key32": "4MbSQD27Wud5KwJSgRQQjH2uAhrQYACDGCQFKQRQ9Jdf7nDMfwZ4EhWDaicNfJmRAVvV94cTNzKcno11jVog5LVF",
  "key33": "5t95QWYWGRwMVG6zgLoAKzMgArVL6D5qCAPBuJMZuAkBMrMUzAUx7WVLVXSu6df3SXsRavGDUK6FZNpH2yfmwhPC",
  "key34": "3GqTRSLBhdnYNQbiPPZiCaZLXR6Rx9Dikh39uHhhNr5RWaSonPA5MGLdMBBoFejsYWSBm9cMF7LzcYsmpnZFFLuP",
  "key35": "63hzW2E3SFeZAW866fEXuTgWh1bNRsZhGd35ansyt2GeYLwk73ZmsAJZujiX9VdSdLaMXGsoYkRbojSKmfDR9ygR",
  "key36": "3egrbnq8mKNAeksM9K9hFFvoHkQb3DaojTErSU79d1rRa6fntjK657tSztF1CTZKAB9kGjiPf6hTqqE268jRHzUP",
  "key37": "XVpTJigejckVeSdBhpe4WyTTSAAYEk8aZkoQY8qQSTPjUp5mHqvQNHwjKXqYCwMrfuJf48ge1VWqPjo7Fjm5HAn",
  "key38": "5rgwh9dvB5r8qhxdH9EDva3kKEuGk8Tk3gx4h4d9SKn3JJXsMDgBELyYpb5LyrwheNJaB2GKLj5SA8akBiygFhuK",
  "key39": "555zfW9aTVA2nQdPBFGD6NnYRLhXhQP144k953jZxwnQAahPj4z7sVmrhY1Ni4B7XwCnvbCgJhMVSao9bbHyntLq",
  "key40": "T5yhDiyj9ZTtD9uFJQVs6j1ADw8r4tBMbtMfqG1B5mMCoje8Q1nPSXRm4yF5x6QmkakQyndNkNHnjuo22poqo9C",
  "key41": "3YTKMCzyTfHn3pqRzwm1DonjBuNxQhzkRE8RE4zxm45oiGdmHhC35Y4G8NZPH7AvwGDqPYKnbD53cmHJLFD2LKLi",
  "key42": "5AvNnZApGgDuEieUbxvcnxYWohnze23nvPzifubkw6fdkJxkvsREYbd1F7bh694a6Rjr6W5nM2WzsEUvjKtocNJL",
  "key43": "5meneQfxfyrD2mYGn2PPuSfquqNGYN4H2qoa8ancMBxLn3WzB6f2ffud25F1GDhybHUbZ7icSHQ3csrnwt3JWWBG",
  "key44": "2yn7S7UVgDtyLuxGXhQUH4pb4WZyRznVDVAoFU9K1tYQWSfhwCKrpWEdw2g1RGsDQU2cN8pP2sMjKUEjZyGtzg5D",
  "key45": "3dEvMrL4dXosfNC1282NSut3V4VeCcpZfwAPpmPgUEhQMwGZQRucb8yzG8f9ZFuTvbmW2jtxwDpjP3U3zMFy1joH",
  "key46": "3sWKGj1trSX2aQLQzstYiuEv6AK1n6fUvDAsjBjrXJq3hENAtfS8E8aFTKxuoMrX8UfsaeVgVqDkVbKZ7tYECXHp"
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
