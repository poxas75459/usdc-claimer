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
    "26vFaUmkWmYo34mhoGkdiGWQSH57cWm8kB6Gxed6DXaNbbWiQQugXiHokBejvKtmaNiQqEiyNRefSMkJC8cVbCEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XaLT2EKVHsrTESRC7RCYQwwNcycGroudijsM5JrNiMsHrHgGHMCF6cFQbZSM2W91LHhXe3JJAsmRUozyJwuLTv",
  "key1": "59iUTZ13b7eXGikRV29teewoasdwyorJrQLrLBLd4sTgqQZ7sR6xtdDb1KcRhviVZeVPnRzsCG7oSTNvHoQmcpih",
  "key2": "2iJKjoxvqwMPyZbMVHGdtZCdc7prropGTTQ4niwX9P8vNztfgDYpb55oS4QdJtFrspcN9wQUDCVUaofL5qw9kEGx",
  "key3": "3PXKpDgY6326vyYBaAbWCqWiZYzyeaHBcG1eDAQygTxHD66fZvk6BrcDi518V98p7SYBYTCFmgh1HiqnhD1vGHvU",
  "key4": "2mjzxuNqdVkCMaHPkqVKS6qsx2LS5NMSp92y6d1RqZV1KXmnLbYsYwEfVoYNjW5xwnC2GEA3bAtV8sYiw4yw45vM",
  "key5": "54s9UaqYirKEUcf7JofB2mF7sm5S6W7BpZMYBEYEHRsEqhahGECmK3uoQ9G9hvMoCUAbE6uEwKbRN8VknRA1y7gZ",
  "key6": "3pU6iPeUP4v3ZHpjppGT9WwvbNR7QntSAEtyfmeEvRU6s27b3aqzb4Zr5Qof4ypSNAzQkEWgAKnxZ16CezXBdnU6",
  "key7": "2y3WyTVKVDxXLTnFsi73EQFWbQFNjHfcKDqAHR3CZEg8mu2TXAXS8mZksHZr84CRcSeySYn8wjBmeyvJs33Dkah9",
  "key8": "Ap9Jw7ShFFEiHWZScPUYggB67Vm7UnrLuNmdQRa9TE2BERf7tYcF3hDxPaXgXytBhryH8uh74URmaEx5EtSRdsH",
  "key9": "rUS4URzEJFn5SQBeD8WAKABi29dGNLqUCNKGHv3in5bj14pRyyoahN8r9sBCWePaoAFXY26Y79cAGhaDqh95uXg",
  "key10": "3yk2KRQJ8rA2V2iWRuQZuz5iyCvSJg3qhB81zHKKJ38trEhjwgpYhstoooyTw3N8SvuhhpSd2NSFvRzWDJThgmtb",
  "key11": "ESP2axpYUow6aa5ntg9d2r9E4nEJrJQXhtUDjZKR8cJaD7nEGFzN2AVBmNQvMT7SsyGkviJcpKbdrYqw1jBLPrX",
  "key12": "VUbiwekXFUN9HdtWiJ9dw3aHyy9bJHuo4kcEkVqhNAxtTeDGh8RtdxjZU24MgUUeRz5gjYcZ8c15MvPnKTJe55R",
  "key13": "3zTih4L7efo5fbMJo4tU7H1m1VC1HgpWTCkvhN5V3ku8dhVEkBcUV7Sma6EaFJqgSR4au7bfRcZAm2Vzr1PwTk28",
  "key14": "dj6RaxEbS3SB8BkMDioKRxHZV7rUi4duJSKARkFenTyYFcdxjqjmz9XQGxcYysi78MqLd69ZN9PHqJBT8sqidxZ",
  "key15": "3AxLYc8DpXTfkfH7jsg7qbyTBmpZcfLkPtAU3ZKWn5aYktiEz1C4fDJDyizjhf2y4fTQWt52awUESjfVYE8aV5fZ",
  "key16": "5FRuaRbAaT7AUvWYjxbMZSPpa3CqcdXdqQK2qy1RA39fLQ5kizZjdmJuRjnEFRmNDDU68YUAE9jbWSYkzWax9TX4",
  "key17": "26pRn9niqYfgwjKQWD7gU4TkbqFZnfHmo92uUZonE2Fo5pZ2tbgwMyX2BToapcp4jtWVxDiRPAoTU965ift8AwFb",
  "key18": "4ZdTxH7qs2rTUvC9Cg5KbjpnT45MwsAKacPkLrL3zWSYASFD6vhZWR2sTdECAa4g1WzcMbf7aAWJvfRsMZgTdqay",
  "key19": "mkxWsnJdUtDy3xXJwcbBjfpnY78mdb8zp8KCfMYqVNNa3F68H1yjZ5DaNbBQ89rh4TdpDs9hK2zdSDszhwvctr3",
  "key20": "4NWsPJbYG4vhDio38zLCPa7k6ZtN17jLff15oKbn5NxxpgoQf3rFQL4ukhW3U6E7BApFCX9QzvLh75bE6icWfTNP",
  "key21": "2pFjw36s51f2bK8tWfBjDs1acC3Zpt7w6LvFJb2V6SRZJzj3o2ZLfRy6ohaBMBjfTQF1QnBe4F1Erk2RMGywLaQU",
  "key22": "4ZKgV4cUjruWLFSUwu1uDFYsnYZwwzDvdQBBhbWLqajoW2Y7wWUaARYJrfF4Zuo3wG3MseqpjkxfBfvw8ZG8HvU3",
  "key23": "5iGnBi15x7Ea47e7vgdt5wEEt6xvjchqkstPC1trYmLe2WkCaYpwe21wFh2Lv3K6cstWvZteGMnGVQPbZ8h453Hc",
  "key24": "4PTSvSYiQz3PyNFHZgDjArP9UmbPi8TNi4VoqJ7QGDMzXV52vy6uSDV6y6qy6KquWgVfvQcELNaapXQSSpWUaiSt",
  "key25": "33X3Ka8Lo5dn7d4DuDAtMkNCKVzVnXDUzwNLCDsPQoGDT5MzhrAHH88SqiGHVTH2p9q23kgCvS8m9PAfdg4sQ4GR",
  "key26": "odxPe96b8Mw6xgYPxrWytzGauWQd6QWixmZYJxRjUfYSED9uozazoK6yHmkLC7bZrmZaZxEo16sVTAJKyPDmcez",
  "key27": "3m235kP1UvXcCRfc8fPfEYa2xcFW2DYN5PAhUFh8Z9MXU3iTenTM9pSz6wHcuiTSFvQC8jrwdnzmdzGmQMth5zxX",
  "key28": "278d8E3Ymu34DKc5t6YC3x2iWBBXmNTzZt8CKRYwBxX9f8sF4vytA5g9Nu6UJSGJ9CfX6U4oH7METbd5YvqyLxrz",
  "key29": "mzVtWdeskTe6gXgktCmqJ9zDCer9u8hwkwLkd21o2Rk5o91GDvmJy9ZQhjFgbkMUwdGExxvh9E8zq4j8QxCULDQ",
  "key30": "2HtEDY8UqdS7wab1FnFPZrC8QAaKjgK33Wjvg4dzCKMjtn8cjP2o6D6d4fQWkYCNeRPTdNz7NpZnCT4rruEBif4N",
  "key31": "CtW22Gdr8Wt82Nv4byTbT8WEcQU2xqRez98CdXA5y54AZfD86KouaQGJsX8BQY1NbgXfX9BvKNhd45xxck4LfM1",
  "key32": "3hJFVFtJxwDcm31NgRZEQxJgpdyyc3CQRqA5pecAoFB6QwzUSNDAspBUycEmGbXkB51uU1usp5FLGzNXByqaU3Cf",
  "key33": "3Xg8YCtS6vj4Mo7BjPEU4UDqHPKe2RhDjszML9Z37vF9aJTj7zZy99f4BxsdBswpWT2mAfqUs2wkcufX1jqoZWDN",
  "key34": "394wcWkdfX9N5NG1rjecuFCvDjy8QFVHVZbpKPSnSnarZDuriAcTm58D2hH3ovB4hJDuHf1EDVxWqax78ffLYosP",
  "key35": "p2W67TFbyp8bySA3GmcAmDb6kFyhNNn9Ep9yLsMCqzc5GTLwHxzXzzh88f8uFZbeqG3Hrv1amyEsa9svCNZ6gLG",
  "key36": "2dvxmGCrzB3D57JJrHoQDHpYAGj2VAhHuTatsrRQuPgF8cwRgudvFqttzZ1VjCf7NHX4pe7jeH8npbYkhge5AmnT",
  "key37": "2snti1ePCNi7cTdsC82NuhSiSaoF2eDFeSECAGyt2X6eAFcTCqaGfswyzwTUg5LDc235KoqgLSgy5LPYVLyEDJDr",
  "key38": "47m28ZAffoYw3VusSqj5gPqkbx5tsLBMd2VXbVWVLjHK4Cng3g7A6WDSznLZ4hNn4LCvg6LgcUN7FZwDoMaPK6rQ",
  "key39": "4D4WcBabPQzMTs6AEYu1AK5qS9dtAj9gH5YC8iQ5XyvSpgQE2Zd53KAEph757SKbBnTPRJphrzceNieYDqbeFfJ3",
  "key40": "QcLPRAsxFkYk5h6HkDnrgAYB7tbjvgxzzNSP1XZrYkdEyXHCWGCDuQEmBy6ywh5WCVrgtYLK1jWPxkg23mSe9ET",
  "key41": "a94M8GsYZZHmSyVGCS4RxEFaEry9M66QEueaEKdU4aT4gdaoB9rttqcKtfKxtg9GMAAm8AtbJApra5Mxjyp3hjC",
  "key42": "3jKjLs7PiffxjacDt2te5XzBhES5ph1RD5z3Xzds6nX74kC7fRde2jvZ7LiHvYhKR7UsWG2XoNfUFovEUBd6fsBK",
  "key43": "5qd8c2wM7ATLLfyxbY71keMHjcsd3L27cxuyXK96naAxm56pBiBTTaZvgAm2SzdJsrmhF3aazKTywXgPZkSHL2jC",
  "key44": "3vMxHAqh5g6djFvJPjkpGzVxG2qPaBXDzzp23k11z4VHGndFjbJ3k7inpKTet1z1Wc5phzfcfHNFJB4qpE5K95BC",
  "key45": "3B1JiTbVXPvReeXQSgxUNpad8QSZYEqGeAHNoU6KH7ViWXL93uNMnuZ1vKrKYsv8wfFQsa8Df5JQuueXf5D62JVP"
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
