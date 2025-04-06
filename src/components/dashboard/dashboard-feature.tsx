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
    "2cCLd4t3YXnqt43BfcngM871iV4Wo414Ez7PDNySqkXjyfnMeaSEJsTVaYSgpsoHpxaKQdWYC9nUnexfYfig6rMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RJzy1Rda3EcDHp8GGSWZdLTYBMpS59pityGPSNyWJSqfNFQGac2EGchaX6q2yatPeu9LKi5vHtnSms8SuS2vj4",
  "key1": "YdNHirr1ThurvN4DZKcVjjsicEB9MhZhaoyHF5AjvHxBZk8m7CcLF1ftKCguEBeXhPwzgE2eG5zTXRemxzWkyJF",
  "key2": "4maRQD2je7L1kSbwVN58dy4ocKGLq8f3rjRBj2wC4dAJxn2q8XqR4oRpwP8vHoGk8cmmg42TSRmsz5yuTQmiNiD7",
  "key3": "5N9MxZ4VtgfX4FhVJxTWrboX4dwnbVpXyaBE8qfjC1vWpv6nwAEhuYRvL1UvTmxcfqG44bhM9UjM8YnqfRk4kyCr",
  "key4": "3KfxzQudwvytQpiJj1LoYebfsvNuUTKLvVL415K9hhYjuSZHABhU7HAc1gjgiat2WnpfVLWoMTwiJ8mzGtuvA6F",
  "key5": "32pXg2dkZLsVgHXYFW86DYT1WbBtEF7ZLTio1MxVy66EJ2nBotU9VM5vDEUiSk4MA4ptdbCi7EvsNcZwaMEZd1Bs",
  "key6": "3htzKLe6kg5QDeaYThe3ks7qvHsB8wRXPTMVXA7oKosHurnL3oEmMhbdnRASyiS6V7ZifGCxAwZSyaFhMpstRYS9",
  "key7": "4ThsBABxMXkvu3Taa8cx1J2SArVt8kMVmggTgT3tzVKFSKgmrBsp5YF38UHof64k9p24k1g8VFkLb4XCyPzeEFzX",
  "key8": "3BSH6paBRm1t1qajPoicLrKeMSr2PijC2Swg6wEDd4XQsdnFfrYMsksctjPiBMoB2d1gjWYXw2WQJEnnJ1Ny4TFQ",
  "key9": "vQr2uTf4prqDuky9rnSCFBH7X59DzAUV7Raq2emwER6qMyx41x5EyXU5ZBz71jfRo4qSRuXqMKZxVNf8n3aoeGW",
  "key10": "5gH9G3YZkayxutLKQJUr3NVTjSq87R8hLt2jBJoscwMidE5LR8meJPyBu6HrD63sKAdMW82jWEkaBeCSELwxZK2n",
  "key11": "65zEEeLPojjPLEERNoJgXkESoj5vC2ZYSRYVrWzBtPS9FcSvFMiGzhZyYNvNRuT15XRGXHf5pshWNeYFDEv7zLKe",
  "key12": "4yHGgi8U79s7oYyqtFCgVnhjxjzYRFZSQiSNTPdoogiUcKT8x98pc89Vc2UAa4ZaVr5kSSx9MRbmomk9pYLVB8iX",
  "key13": "5Y2M4MwdoCBkD1Tazjgsgyr1e9BXXYkBVqamEsnLcgMzk6NuzJgBfCb55kixmFrFtmeZEuYEGkjYVUkrYxZuwd3o",
  "key14": "A32AB2GKJAq6avZkKfSNN3K62bhJf9fS25H4nxWuFGdkPeSB6JuPKfqh1UupE2oEGJ5XSMnb4HoCVAbrunEC4aP",
  "key15": "FVin2vrNTNp4q7WnHdYyXgTwkukvYJYFBH5351QtgDJSvtArKqUhKouWHwaf9zGiTtVwTShRm7CudT7L5tsXzvx",
  "key16": "3Lr2QWrbD5DcSi6QRZfddwUSLGs5ZPSS2sgF1QW5y8gcF5F9NZx58P6cceWWkb64M47fMCw4eYHCPFcEBAjqXntW",
  "key17": "2JhqfCV8VDiMgPTx1FkfefFojyC4HNez6pJoQ5Lsb2CQpDqEFRFMJeZ9Xw3XxD5YYAaT5y6Qu8LcixfoxGRHbeUb",
  "key18": "YJLVNxmipjZf4DS1JDQV5Psmx84za6E6dNz1TC9GUtC7Ty6aQuFfWvmo37e8CRppKxjS9CtiyNnRC1RiGVqcdP7",
  "key19": "4rfbuhVy5XhTNEFoGY7r3vdZFQCiMj2fRs7CvTDTXX6Za8LMNxPti46zFvcLhTvmXioueyiGDP8G2ShQcGcZGHMc",
  "key20": "5SKXXSiciQzs4ML2wv1RL7gjDKf9vLZvTg6QSSdEpHWyjNTpzMjUvok9TLAmQdSDscxjYrG7aRgBUzXuvXxvNScm",
  "key21": "EMiwo697D7h8MmpY2UM8bHYQ3NA2bunNhY5HuokQS3zS27PTpVoUtFqt3TAhrr53B5X34kyyVdv4iBLg6nK54qG",
  "key22": "oE5ZiSmibdbMVc9TsEGx8X1AZjkYMGC3XpHqXm5an7QQQvS3fYm1Gnm9CPwtvHDguACo11L7K2AFhffVGTTcQpN",
  "key23": "4bV3xfEBSFbu8UCDy5kK9fTnQjf3oS4BkBGQBW6v7nZv1sWRgYcmd3ZbPrgvXVUct7SSxuapQPqyNjYksZMk11pd",
  "key24": "4aFHiuqn6AcHjmbF3zJiDvqMVwC1SGNiN9eQK43AMPUCKWFRg1VU8Uv3cs5Rmcauid55esyH2cY9VzhMn8pQ1WyX",
  "key25": "4scHHQjphreTFMFLz3PfZuaqtPhVQzqQ7NBBGWrkMGaVmuhX5b9w28XmfN1Kiiuim2Pt1Pkn4zw5Xad1UxUuUEst",
  "key26": "3EBcLbY5J2pjR8qfwiqNuFiMFwAHkQoMfNsAfc7ymbmScA6PM2XQ1JXijLWcoQNW2HcwAfB84fVXRR4KiPjYHQcb",
  "key27": "3nc1jFQ2JhrikR2YedkDEg4g3TKfzZRemRtDFMRw51DSDh28uLosuLUm9w1s53M4mpKR9aRq9sSXNG28YBXsArnn",
  "key28": "4zBjvKj1sutVhAG6M2gTPVQV3zDxWetFa1pognGSfyGKprAg3aFd8tKhmHSdW4FLEn6hvLuyBuZ3qUD5HAd7Lsop",
  "key29": "5q6Ey5Uav5CqWPMLfBgRHatQhzodomUuPvuNffvncai8Fi5Gg36MteuqNPfME4QUahyq7dcXMBCGNYpr29BeMAMA",
  "key30": "3trcEbGD8fZtzHUvFCPF7DymrwbyieAD4EbHGNbbz3RLkVk312bunq1YaEx5ctoy3w4BK7XEKfczcqrE8EgWUsNG",
  "key31": "52NbF8gtZadQwK53PtMaQErjJTmKBAShEwTiUaHqPp9kgoG5xNfCEtqNycJdSm4zhzmaDkN5Y2MRsXuYvaWFk2nA",
  "key32": "5GDxhfyZPuTsH5ddQDPwEzZneAwLC4akHRWTaKKVSyHjBMxSbm2cB5ZUZTdxr2jLGsDzceF8Sic1KZqmCfRjGxqn",
  "key33": "2cXoUHBWUwkJ1thuTShwrH9KUYZZC1fiQNCTaKdykdckqvzziFGp3p4rdv1ypMPSGpVFa1UTiDZC8nYLG6aHynt1",
  "key34": "mR2u94LZnRgdGJAgs4znMvv8PKCqHv9nyPyAQjRBxRYi8NFP7rKyqquH48doPesZibA9N6oQKmY2HsD62Bz6E6a",
  "key35": "2ktXLPTfao3CZgwVdp7h6T1fMXLdotiURxtmfoXJL5pMd2wZJAFnecexBqfNs7sKiMTFYjzEFePj4pozBmWGUVfm",
  "key36": "P5RmMPXbUNWiDHMKJpT93mENTBPggK5vhjb4FJsgweWcNtDUQQ6vrj5DaXuKqwxsQT65izM476T9HqUtUZZPzA6",
  "key37": "rqqr6ty9kD8zrTLpvT5qffKegM2GJnfDRt9oRVSRk1XGi2uf43JqTg4dYr3xxeu5kQpW8HJp4GT2pzPiEMMLjPi",
  "key38": "cqXBT5qfzu9m8UymDz3LXiVjsWUCChXDycr8pV7c13FM9cNW9nBmLXPojwTaMdXbuzgzRg2zRd8WBkPgySUrprL"
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
