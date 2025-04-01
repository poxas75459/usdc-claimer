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
    "pm9DcAQFqBBFZ9oXqam6J22DUgsVDNkoRWSUDpCCVr895UnRmwDTDVQuawntGiNvJhX4TNCyNuGzdwySi4AY1m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N917BjY9xod12KJyLToDeRgRbja2WU4R6ZCVf8DsEU1xAHUkrpcgQC58dAWvPrgCr6y364bfDDscAN3HVQg712Z",
  "key1": "31X4RK8cVtoEcp4LoKYjzBBwHr26GmHJHS9rHxRaUKvJaFE2gC2CZubZnR52xkwRpDcSJQNuwnDW52eW1Qdqj2fh",
  "key2": "22JwuhpLHEwafnbHps7zstnhyxp6HMoGWP3HfLCwKmr3hhHmNvtKALRLMAm5ueo67kvXZdTqjiZbJJtn3TAMPwQX",
  "key3": "2CjJUKesDLr4aedxxLZnTDVzY9Gfy8stBR5v1HNXjYz6uk9posmqeAsnFbjF7sh7CVcupaxmM57epgzh18GSpvgK",
  "key4": "2sx1y2vcqs9cfnSwFoBv87PnyCj1yR7keTCzCGp4TdtdPu45ndn8di2ZvPxYB1CaLZ8n3tLfDDzZg9qmyoZWYzQN",
  "key5": "5HJgJg1Zt46PybdeEZwSk8DWhL8JYXeQK5ibrQQgxQNkV9bCUXmYrwifdjuHdj8qodtRvyw9ui5tag9rXh4Ayrr",
  "key6": "3mNBTk66njmm1wfFsR6PZjoTS2LV1K34DGbY8fDNgXug9WZf8jxXXVdUGjtnqE1BZkahq3xoAwiLqV7mXHpekAC6",
  "key7": "48uK937zxiPcE8w8y36VPgnqb17uwqb8xf7a8nW3NMoV5p6qsx2nLMbNAG57JAZ9sjFWrULbwuU2cQ3YtsuzTMbi",
  "key8": "koPTkZCAA4gL9TMDsVeEiCZM2RcafxPDjjzh3ajaxFST9gQPsAjEVdYdwsmTr3ym4bBtgvzgNEeEM31zgw44JW6",
  "key9": "F7Ypk1jWEFxMKY3D3gwwvsdWaE9f1MyVZwDLeKhTvtrG8raXzzNURhHfxXzu3dWLUEg1zYcNNnPMR4ufGno1BUe",
  "key10": "3QKW8MoLcVV1ZGCb2zxYcRav3u2dXWCPxWgfjio7Ga5qMgkyJNLd6ZCSsa6wHTdpNgYJBkrJq8ZHFEM22GzuTrKE",
  "key11": "4yhnGAjWTpNkRGKrTqGnksiPN93LsRherJkbpkGbphwM7bPJkM28e2yw6R2UQcrWSqPrgiuGAKu1xiZxWFLppELW",
  "key12": "am3urMuK5wxJ4Aia1E7Y4A3MJQJzJmtEmxM6hPFjTabt21UyF2RksAfdw5KPMXnWhwsUU1hJV4rqeWpA4Z7E9f5",
  "key13": "43Bd7ivtBfBvzAFQzeXf5yekqYZSiYnxmvqncnYrW7wDBiYcqokmJewG2M4NTZhPmE2g3YWoFPtrvWE9RiGh42cW",
  "key14": "3vk1yps4b3foF26TMjUpEMKN2YuzKvr9bnbRBybuu8A9poDrzBusk9jE7TAXVQ8RVsQLAW33UPSiqjmpco4LV3iw",
  "key15": "5xGVhx31URBperDZYSWonHEQmoPZq4MZwuuJPPL1Jp1Z3MGVTT1fW799QnmfXXKjWmyUuLMLzKJbUQwtQLCskEXP",
  "key16": "4kq68X1XoVHzLPEYLQcYcp2YULtET6tR6jGaGoB3MMmNVXcLXe1iUCUYau7sFZk9BNVtAUUqKKEnm6kHog5cVC6a",
  "key17": "4CQvE58575PHFC9qthCuUpRDMLtj5dcgHVca47gLrMvHhrwJ45FdZuXrwrgyuE1jZ8d33kEQm3GUKasjYHuyjZcN",
  "key18": "3ExvLt5svKPGSHXkRGVq2jAzutZYfugMmjdjfGmcbXhfwHhj2z7TsYD7om8jL7nPTLVcGKXf7bzdJQBk5bbPJ1FS",
  "key19": "irLjnj4kmSMK1nmx4V5zr6uY7oRdKRfyWS6dyQdsXjBWw291piMBg2G54z2Sh9LUdz5wLV9q8tLbJeq1tUeb5jS",
  "key20": "3tuiYJag6ZjNaETg49NfVEYcys7LJHpKnwUw4wa6RKj6eFVCBqD4vVxTQ8Q225jcGafS6f8AigbiHdENA47JvqJL",
  "key21": "iGkT89thbU27RvmMJ9UbbxMMA2UaEV5CN5rUeR8b8TPhje8Zwog1jjvWoipS8oHvu47NNyp4gQnKo8D6rh8Kaq6",
  "key22": "3G6GcJzVDk8Z6AxWRc4XzNQgz7kro8oZTo5znGQJbE4upZqGjYoXgoUQtYiizyKt3BUanEN6rtYTjSAQWJL8MPwC",
  "key23": "3UdGqwRBTLYBr8KejEmSRp1QRJJG8u2FY3nsdhWuuVqocmtgvEMbUhiDwXaB458e6t2pbfZJ15qwC2LvwQND12Rh",
  "key24": "2NXc7mvYvH2QfLEQQd2jcuySXyX9f7iYnR5M7i7gDnNhuPznKyq29ryqRvhrRLbXuKJ6t2wyFELjZxB8NKcjBYAD",
  "key25": "SVqjLLxiMK4fVNr4mB6gBgy7CQo4vs5NW2ooq7UWLAXuHh9jzGUf4h8m86KPfPfwJEMnmtMZMo1Lx3WDHQ48gqD",
  "key26": "4G7UyZtiAD7dkBcEAhDaPrKK7MCiySdGRMq6BxSe1T9VZ8Tsgj4n9nwd7AQWyhEbDKGn4esd7uFUHtLxjUCMe7bM",
  "key27": "5gtDR6fxWZxGuB8JojLDe33sWUFnBsbfm6ZjiF8Mu6haTuN24k243QjLGSUyT2EG3zFHdsnpXVoiNNbzQUZ7AibB",
  "key28": "3UL6U18MJi9sZnC7LTp5g31UE7kkCNEtUs8mwA9nwXiUZhfjvf2KwXjFJzgu9anEEZPS2cXmfygPdxKofGARuiAU",
  "key29": "4KARgRJtmibSnpkF2d8aY2kPH49Km78ke7iCpSdK6a3Rk9Krv41TgUktWWqZgdyAntZ6sF94P3DXXBEL3Lf18Jh6",
  "key30": "4uQxsrUXeaKxS8RKEJB4ZrgyGnZkb7v1mGDyUe21S5TqzasRyh25oqTyX4qS6EhuDipcPG4NL4Z6vPLk3mLuTUNc",
  "key31": "4qSpPf85CgpcMcoXY3wQMDCTQBjYgG9SqzjU8kpX6GamkTLgkgnisv8fxY7bvyuECoBaiYjPxaTVcQYFnZvESBYo",
  "key32": "SXV9MkHxRAL3bhgHUSCYk6UakPr2KnYKnnUCE6YASSAXrugzGTX9KqLRLUAN3agFSqJjZhtSgYEFyZVJHJXnnjv",
  "key33": "3qkPLPPAv7hDmCgfDXzoNB5LWfDFB2tRkGKV6gwhrUrxTdSNR9NGEPNLFpuNcMtptyhK4kBLFyWG9tUMdnZKpVVK",
  "key34": "5LiXbvbxt7VB1FKG9vaBXFYvGKF76wq2epy2A66Zj5UEgTtuREAcntaqRqoXQvpNYfPrZLFaB5kgEGAwZXphqojX",
  "key35": "4UArKbMkQZSu86PPPDtnv3azieSCCSZ9ZCEa9yEW89gDRtycG2Yo4wE4HDZdUSTaLU8Th7YrvDL8UinL4TQvvH9e",
  "key36": "3NQkyvvZHy31wMizUnFVtPnqyEVkwxpjs3D3tMgV8vbt1xmfnUToyoBe3Rs4RjLaQdrLNHar5ugRsLrU7oEgjLFP",
  "key37": "C1BAc6JYFaXD7jv2y6M6vPQQ8Es4V7iiLM9QayPBa6z7Uzb52pRdvnaZCcihG1v2Q9mSepKbxtaxibGoCAEpvV9",
  "key38": "bkgTLzvLnLaCnxBvhWtGqDYAdfhbuGqLWGfrkAeUPkMVgcBkD9AeAsLrD6Nk2itUUdMJMdCKKCoYsG3MdminB2x"
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
