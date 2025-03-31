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
    "xtYNtmdKDp7bxkWSUjguGx8dmYkbNkohTKvk66iNc7sGr66YQ3BEE1xFuingeQsB62ApHLKqoKj7smB7QivgbrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7sFhGFN4bqDMxDr3VKwjtoGqGAKSEEngn7qrQNZgYXaA3z5AjZpeA7YiV4vsUQFGK4GWmK95o38J499NsCUN24",
  "key1": "EqspijizciSkc1vXFLQ1LHJrqgZJ4GNuXSNwumJTXnqHbRprWeXJ6NB6c3cBKZXeYrbqpp4nCv41qS87opZzaSi",
  "key2": "4ubbz7a4huKaJWvwYhUwcz6sxurTsUYvdSgMr8kRETedj2giyD754SRJYdFNazKRpsuUV8pDfqpkygbddpmkbgF7",
  "key3": "5qCEsttR4cpujHogKB4hQUDXFgRQP4Kuyx662niCNmZ2efhueULHFJPZCQrwHPXuTVH9NPiUfVz8JjF72MTkwgBz",
  "key4": "5LzmeRJTb13y4Ymg9U48cKDdB7E4ZuWa7EaRoGzUYag8JwKZVD8JvhgcAUb6vPweCA49x3KEXTDrfCqh7jSV1XAx",
  "key5": "3r8bpFo4j3bwufUk47Va4gDkVPQouaJGayh4mLYUi4sGhkMxjPrEk88N3Zie6i3MXtHdgQeRvamSxhsuuyNhs5Ex",
  "key6": "m23PZ7ujCfiRRALt24bkzKQU8r6w3amUC6Mw5kAjupdet8PovRFznsvC77C273jh1XDgAh6jNrdrnsoMpzpWAdQ",
  "key7": "chXrEHkCYA4BYoJqNZkz4XXiLNnoiAeokeczDUp94c1mD7ebJHetHstvxhNaE86sCxJpauatDiDE7v2EBT5WB4N",
  "key8": "2uvJE7L4ysorfGbtf3Y5fEfVfSM4QwY75vjvuc41zTJgSceQXtkxxk3P6uj3957P8nnTmdQnT3aKoRNJS774hBSf",
  "key9": "2vc6NXQyegZDSacA1We7Q2e2jvpLMjWH2fdm2U1nzwK8a4yMDec74spEj8FwGi326C1UYH1nMMGdxiGAYaqfZxHu",
  "key10": "2mebUQQUwnjejZvJJiWPjvcV8nAP2148dBjd39caW52tA5NQYBnLx3TAAGwNYKopMtF9XW9oyC2x9hMh8Ajs5zqW",
  "key11": "2ZUpMYx1BLdhrMBmRjYb7HvrGQzfhQbeGFFd8M3U6RR4Kqcc3XL1sUEKq4bPdbmuCUDqkkNiq1opcmTLxrGa2e3E",
  "key12": "rjH5qg1EHQfnPtFdhYZZYrWbzZ3cfgEcH2o7wppTVex4ybDQKT6Cmkpf8wFZBLDDaZCeM5mbf4HW5CT4wa2h3cr",
  "key13": "4BCwt76ax5iWSst16pJJjjMQusnHJwBqCwCpqKSYt9MBsrVx3KXDGNcRokebNsKdputRehUrtAagk3why3SNgfzf",
  "key14": "5Grz1ndiT8Td3NNYzk1PFo3Gbp2SeisLEjjEFQ9KLo8PkjjWBqpbxaYC6CxHmkPVAHqBVj4My7D6Y4U7Mr5LxiZh",
  "key15": "5qkFHAEebUnrRS9FMuSMjgEihmWNMdtcSods3MofkxQXwWC6RAXXRtR2UfgqLL5TgG6ueGm1Yi27HTnLZPhbWHKR",
  "key16": "sUm7uKprSnJ6kpiD62wUVV8fsVwGgFmkydJT2eqpjsXP59xV5me6ye1eJuB5fYRJyCQUJ2FQ2TdgdSgTjBxQv6q",
  "key17": "5i1EbNwQ7HyJnacY4BZ8Zz43jky4Npz1DVJ3HNKhQvPBEEdKoecQVpnbxPjaLVc8467JC1YztPJJXrFpx11cUSdB",
  "key18": "64ysBvjcBgJt7Kvj5Z85LNRhVhCzqJEHYSgTPGoVoW4JLWPXB4pXKXvLPyUMRxNWXptgaoD5wceKpSBpi58vuTwB",
  "key19": "5QxFhvmLvEXqJLpqgCXS8Uc81WkRj4fkA7oa1rStDb96eMxpzqQBpU1P4MS8qkF7851MjcwmAhb6YVhdrz8w34YA",
  "key20": "2ymc1RgTJJddJK1fHTeYbP4DDfcrwqDxTBPKBMTenmGTXQciAEBSZYArE9NqnArb1yy3Ss1GTjqbexhm8F6CykYk",
  "key21": "3kenjFJ9ukRCSiGNMMvTg9ApMebVdqMRNazWirozda67CAGubv2EAtBd4skH13pzaTDb5AKjKnpuYZn4HaXXASdi",
  "key22": "65BBxLpFhUPg2zdmGL6Qa9bpDBhTL7mvNcxDaPuHPMLAs52iiY5CuYXfM6CWA5zakHTyHo8rcxV9gqLWbCRUYBty",
  "key23": "63uUyFm91BAMQqw6yutCZj7fqQDB3mRAE3wP9Eud7pXwsVMHPP9cNuo7ASMDEKSsaSGhR6Xpiapbnx8TBuPz7wD5",
  "key24": "3nzgenV6sgozTCC1VZwSDfps8yZvhdo1x4MFDtRb9duc549CVtJfE3UyuerouBFMz951mJShrCuc8MGghzMPjKzu",
  "key25": "f6sqMvBuKzbEbe24b13dQsiXdkDkSREdrKev2KErdCujQKHPUchXkmF8skSXyauFZ4pCCyAB35FZ5MvNRN424kX",
  "key26": "3ST68DBgQts5aXZhXb6Wf9VbeRAv3tdc9ZfRPMVg9qRgwc3PhEdSfMMLVGS6hYgS8Tb18UXn4S7DSL85eoynSfx",
  "key27": "4Hv18zZyShbQtmDzwZYDjw3pQ7Q9NVQfNvAgwMd3QUmGPybFy7Mv8hEWF2hsz8tFEpEz9KjLFsKTrRrSYRAMQYo7",
  "key28": "z8vFm3FQ3HxcNnmAR2pqp6SHquP5UGp74RULH3Hc4NFxuYPMtiLZLbrRmHS5dnUK3eDntjcApX4SAD11kxPZzXd",
  "key29": "3gGWw18A8ZYZtHCunwxf5WawLgvFqC6piXfmFQNcivsp6eCd47cUED4pNCEteXS86KfZXA6V9AnWUNyZ1PQhm9t2",
  "key30": "4m77x2YYniF4GrqYHinR6Ec9hYZ9MsuinzjEshwThZAR5bCtureAe6A18vu5M4GW32UnZXUupAsDQGjYG9FTktkN",
  "key31": "2QzDLX7cnkTDtUtP2SKEwTqV17toBotGKt7RNRjKnfjWr8bAefeVU8aXskSwxEmXbr8SsMiCakQ9QfabHUp7e3eu",
  "key32": "464sNM4P8s7qazkRzAwvrHGemRxfafNp6vbh64fgr8RJQr1ZGHxLU2ZP1cdbfcLdmdajcCThRDk7m4ScZ7npiUB2",
  "key33": "4zQf3hya4Sncar4Lc8wHdgNtAyke4cAhAZ6K6WtdSA8YoBApep9WLxN8GtgGunGAfkx9Q8eeQVivRH8Jstncp2a1",
  "key34": "5ooXr3BqYFt1ZYTJdCs98uWSXx9bTWZ7Gt5M2Kzg1Z19eAssk4wTcCvaA8LgWhiuUWednsVVPd2GqBhYx4NHhpR4",
  "key35": "2vwwFJqoL6F3Um1epjYEW6CcabJTaVo7njobi4rjeqv45zBfCxQEAHEgFDe7pZQUHqL9n9411pgtnoJXCUtc5cPb",
  "key36": "4AU6HRwaX8wmXUu3NhKe6dw71M1yGLyrsBZ6bqDoCXi7MSitpYw9StAjvTSra3Nq5YicVA6AmeNKNsPhDzn4d4bX",
  "key37": "4jJZtr9kBo6nmZnSfMdp3wLtD7tTtpr9hK8crbHkp169Bvst8kd5BhhfUTuJXJWUZer8TqG6Me4wqXUqAXKRpJqL",
  "key38": "23R25MH1YZ3LK18Yxio8xUGMNPTVfgHnVCBR5EQyFgwNbQtxwaCDKpdhJsBEVe8J6y8GrbeKxipC7oXzWDAFo1eL",
  "key39": "2QdRRDCjgpmRyStGiXoXrZAjdUYuNq4m12EnWBdyhzBPttdBcoh6QHjZ7xoP8d523JWJwTTgYc4ibdi7EMKaYBzM",
  "key40": "XAHKGR9x8D9ChK3xB3v4cA1a8KV8W9rhY64PirSU4qagGayRRLHN2HGKyKFkARAyxb46kksLFPu4q11Pa93DQT5",
  "key41": "2oLhEa3tQ3Kwrq1BDBNkAAfJJ9TynKDNxcBPESi9YPtvffTwpNUN94ZhB5XMQMjG1z1gTHv4K24Hqt5d8iwzCeSN",
  "key42": "9W3ZvuS9CTFSws1bnNThiePYHqsEP5QCGBsY8a5MuLcjrG4br5sAvczyumj7tGeds2b7QgZTQTo8w3YDAMayCQB",
  "key43": "5SvMujFRtuxSyqLfqxn3o86KCRVnEXD5aLWWhQeNDLmAGLzj6uxSLSZBSnuKpjVwZVkYsmepdsjMpiM183iPXsU5",
  "key44": "4YzypSSAiyAx2M2TP1Pn94Cdbc34PXuPpoT3BmG6GcGTBwcTPLgniBfgUZh7YmqtWwzPBsgwdkyt8fBCaj4VbfNF",
  "key45": "MpHzEzGrun6jNsPNjKJhv2kiY86LMy3gRTmdxYivMct3EqwVEUNsVs3WKYAWhy6FNJ85yv4rMz92sQMk9Ve5jxo"
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
