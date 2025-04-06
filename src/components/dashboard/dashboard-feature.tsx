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
    "5zdGuvLSnU7d2b3LbhWmtgKmbcDRrkpni6DbhjRsbyKhUaizfX93fvLpeXyL5XrafZ9yu7jP76WroQZgurr73Wr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnpTsXMhjBmV1uHLoYncofNSVEDu8hYJzacJjEet47o5ra4cJb8RKCFRo59qkAHujdi2fwMsnH6Ecabm1wDUVtX",
  "key1": "DDWTzRjbf9y9aC2Fvfq66rhPjrvPnhTxp7UXrZk7czZJKVrzY2cfPkoLkeWWTdV4Li12iJ9MiaC3ezHHuKW3BCv",
  "key2": "4nfFvvWC3yi9annr4qKGfkzGg47bPyG3dKJUHCWirKiw86aarsi41XJAhn9VqSqv84qpAspx5nZfMXacbCHLn7cE",
  "key3": "WuUDYCroyR8pAAePWQ7o9fTkLo3jU6FfscafPso7Jp3PtMoY5MQkbmocNd9WDh7UWa3JuCWW2hrEoT9wdh6QVsM",
  "key4": "1GKWwQvmaLPnptRoXUSLrTf6XC5BhSnd1xeTYKN9buqAaKaJQEUsdutrFEb8QagKAkZ2bXdqSRtcSKUkmQWsDCJ",
  "key5": "5kJi9yxDFwfeMygKLqH3cGENG9Ysf3Rhfi8jJqZrXZRGGpEvB2DAPNmohULvxVtJH6aNR96A7nGT4BZna2WzXndC",
  "key6": "3pALUMr2rAdV8AyiFQ6hdjRRH9uqgHgKmqkyXgub6qFFAisntvHFs1rduCFyT1nYFWC72Hoy4QTKmBs9FZuL33ue",
  "key7": "22rjMgiqPkkGZ6bbriTVTi5BszfR8ntGykjkKy1UDDeqV6mXPcQtwYFsNJCWdJ6yt69fS7oMCt9nfmbCqUfJe7Bx",
  "key8": "3L4Z8J7yTiEvF6XjZNAaR4skNkFoPenzhrfK5dGK5gDzGza95xhXeaNukNUBJewTp5wagARpW9GRhqakX1SvrtSw",
  "key9": "5verhAWz6KqtFcjb1cjud6g6PmgHxbpXe3tJm2PWV94DWVDx9UpQ141LvNDmPN532KFCuFvnKnEeq9LU7dsH5y19",
  "key10": "5sfq8fnfA4XXEZFt6wuPM9ZGA5jwB8BanBTLofE7KQC9g9zwafACYUpMVJCPidkppcmWdDZRDDvJpCeUPvmSRCkh",
  "key11": "5GqiXN2z4EY7ekUd2efmPFqAAEsSiyNbjYuYX4RfLHXemaMXB2Lyr3s9Yn1GEAjiBND2PPZpb85D3za9bdscoZGd",
  "key12": "26hP47VyaMus5QLEqG2UgDK1PR44jZP1MUzuf59e1uAZYe6PfD7k3xqsfMgWvaaP24K9WrefqHfBLG194YWoFeoY",
  "key13": "2FCj5FyH6CsbAmze3ecEMCmDCuMRWGTpw1iPoaLGGwLnbjZc1HXqyPWK3hV9zyXBDddVyGUAV7GNqrxJfpHxrQr1",
  "key14": "46hfZTi1RgKoapPa8D4B43iUpGuTKTceZGafNtG5Guv7NbfLNCfmyWTcDmYKgVkxAQWM4cpAYpU77vEgaC2Sxbci",
  "key15": "5aa4XmQJD5AGtcodfZe9Zg8neNSTBZCq3M3fAz4SWx6Yrd5eDutEuvUe9dv6upLsxvepngkRmFsFvG4A4FLrPha2",
  "key16": "2HPkrRZ4UP2yLQG2XwmaFPz8bh1F54Wj587a9uxR8pS1BExgip62LncTredoSfUmCiEXY2iKhvMLfTrc9k7yqU1U",
  "key17": "5G9FFHUbKSbP4wcj4xB37nJKuGar1Kix29PM7DDqUKCThDW57vDWt12xb1MzHDmi94e9BxX6TxeDVekPTxjVqRDA",
  "key18": "4YkYqPNqGwZEqgVJcHZLcNs45V9iAqk3sn45soVXNozYfnsMknmTUc3iMq1CVTw3sgRHoTpj6bkhxKv15BcdSavE",
  "key19": "28yzeCkCegCufEprMJtWTHrnpvKqUkZWvbPrNHcXSTDQBgVuzhHV9iV9wvzDpzvd2R9LLt8QQQKDRjdFTHWYpdyP",
  "key20": "3nrp51WQpSDVbJoQuYFPBpbDCjai8df5MY9GzPrh6oUDfAjHAWaKDnGgeY41sddtez6P6tpg6EahNL4EPis5uhiX",
  "key21": "2okA45cBRMDdKtPRM4CfZfBkLCv8oSxzHDko16CSLNeV9mfFD6ywed8KNvpLUFpN65AxZmucaQrQRfFd3EgjDcxD",
  "key22": "32gpLcQdcDap41ZBpGLg6ST1ULWZQW23wurbA211oXTgTjMzsJiiPkcRSs2VN6GZw8VwbafcPuZpzeFVx7YDewec",
  "key23": "2QmjwYrkpEepT4H4mdGwXfr45bw1iBCCosuaVssLiJMPxovycWnEXKDsP64sCmz6FziD4qfTJVWFXDYkKRJfj4Rq",
  "key24": "3LgoYa8LWmmjL5Nrfv3q1vGieVeBChRMxHa3NzQdkEHBK5g7j58r6ATqHAKkKVFjQKEHWDgRKDdvD9oqf4wkZXWW",
  "key25": "4dJN3VKxt3LBgnRr7biJmsYgXkVukziPjUCQBD9hk872mCWHDmFfwZHCLvuXpdZmnut2jLft48zYtPeYPWhoLWAy",
  "key26": "4EPFcFRnyqWuy9nWZ9Xxv2DjfCrCgD3tJgxrnqb7sP4M1B1AGpxtnNEQHpynUnE9XurGUQEYNPo2RTVqSAYssV6t",
  "key27": "4wFGN9F6MpSzoeKovERSdtjFiy76uVKfFngvFDtPg5GptTvv96w3Rpza16Ji2ELm26r3e2gp9UL3DauqzuMYGSgv",
  "key28": "4u6gCxosp3jSGCEto3UiodwjkGdEqqV9xuCAWbtujdAzmQ8DvXQNq2ob8DQxGoTwYL8CpuTutBk8MvucvdwP5QhZ",
  "key29": "MQTEjz85rpyTm9gSiwUc86C7MPd8o9W6g3wfCEetNEe5ohRqWzrSDvZgp2xtDrYz3Ehx5QXr6yzEpKS6aphVi9B",
  "key30": "KUConvydy3kWZPmLpsqRi4Kg5iJje2YVn4SPV8cs2rrBYFu6nX12JsfwRQMAp1FufHdCCdABPCtW65N8RDnqZQB",
  "key31": "3CJ91fYVnpb9KgJESYHKNA7skdKEYQuwuBDDKytSb3n5ezkLDwdRNbPSKfbMgX7JE8rBfpEHMjqVkk6p4GCYVekL",
  "key32": "43Qt5o9cazKTQNs1bxsVnbALH2rQANYgapdpDrgqmcHusZFax1prCGEHiDZF94nHWd44EQm1fnSGY7opNmA9hFuN",
  "key33": "2SKK34o38wfzQ3UfSk2ReRaRWREp72Tuq6ZPwq7GJU8gT3zzShVXHMmbtB4uvVb3LVah5PsxvNdfRZKMNTWvgddy",
  "key34": "4ZEF6AczVfP3mhujbW5yA4UrnRWVbqbsi49XAiVCnDxbkxS4FzfvHaGWp5hk5d4KB2E5ZS1jGbuQvt44QQucuTQk",
  "key35": "4SFmRra34Lf1gLdN7jq4c1CQhz7BYt6vdtGn6f9JXEuSMrtuANMDyr8XVL9hT78ZcToeR9BxirQncWFyqozRTVKm",
  "key36": "4vBm9q7GM3Vv4SyxcHMgbxvjLL6aZHeQnz7DxU47jNxox2U9enDJRvYpqSr2qr4b3AMd2uY8xsHHkRKMztXvUwgS",
  "key37": "5GMRuE3qnv1GLpedUrc8hNEmEgYxLQTaZGh2mA5smgXLyzuSFFZfFgssiKuVAMyjLfip74mdtkvKxJgsMe8bTs8u",
  "key38": "2EP8y9xzVY7KzQTEDQmF942gCQ6CeC3B1yavWXHu1FXpdJCH2n5h9bvuWPbtjayUAokqSo34PEJKebRyMtzmchRF",
  "key39": "44DSL3nzzSpuK9UYgw7hfHFPZFLSsgNNeApe3Cj1hoDKtTFmNWeqmmF8MbGg9JSYDdSAzbxi5BFaGqazZsgVbZZ"
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
