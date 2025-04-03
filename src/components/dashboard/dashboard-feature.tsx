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
    "5vpEc6KJxSLdn9gYt6MoPVvbqusSQDxXNESN8n7onznjCf78Jh4VRCr7qJo6ezMVBopUNy9i1aycRWPsFFmPWUtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AEnqCVWPuKWzYAR6dTE2PGVszrYvCNN86Rsoa9rrrs6kSbBRovQPhxdCuBYL3ArUNDS33ADrwdM5NfsoyvhKgjF",
  "key1": "4wkKTnQPWzWkF8tyT2fWhe3QyQvkRH2PwCZUbhnmCZs5uJntBRs3Gkv1N6Jh8VRp81fY5S5q2MjvyUGAZepnQbCX",
  "key2": "3uc7t8DC4qW7wqJoiW1DFg4vT1gHuWQ9DN6meFbtjBoR83tcY1Y4KgE418aVir7nEBvP7h8yVdTa2wqikDopMVS6",
  "key3": "4N1UiJXiu2bNMkrWx3GcsUQtonscFyt7k1Ly7PG5WgwjRTQMMvZYMJNFyvByPv6s62tLoghL74MBDHK2zMUCvLWX",
  "key4": "49HzK1L4SjuHK84aFJLDtH5EV6FYWybU2oLfu2qZYSLcjtKN1ZFfZvxJYJpbw6SxRwjLEJ52fHip1a8WTMX1Z3ou",
  "key5": "BmavMpRTsYm9PzNfc84oBHFcjxwksHCPeuzqSBC4xTVYiaqZGWdz5CkcHtfJpoAUdfPq2zXsYTqns9qWXA3FVWa",
  "key6": "KyVxewyE2CX2CKUxFPvMTu3xZqMN1Km3wbZuh4g25ETTSgGsLvbgtGpk8zXBDoXrPNZxN6J1vbvjw2iwqhvP7n6",
  "key7": "4te7GbUdyUkd2oFMgrnmrxQnH8j5rmRu6D8s51TSZ4ZzRMrgBRsLTMAYmUEh2Yq5hQuUPnU6oqRRRtsqQyCNwbSw",
  "key8": "3bebSHRGXA4mu9H7GETjq55Di9wVY92quumsbiJo2eeYwGNJpwvTSRGoPN6f7ZtxEsCwvaj66FhjtAhnWgFnTdA5",
  "key9": "5SjYckmnM3DvxLdtSFDBHit74qtoLYgmV4VGnoiUH3BadYR891bcMKgGspoNYpejWCm3rYhV4cbcetT1JTw34tcq",
  "key10": "4PJ7ouwy58VM8rRjoH88cUHQf5bGyTu8Hv1NcesuFsyjnXTvXQZHgRkkJR1EJ5pQrerYfxypc3YJL8ERyvfBVsw8",
  "key11": "zL3bUHDgkj3buLCZ6Fj71kdtaNuY3jwhpSYh53wzKVxs8hnzv8XcRqYRHviXZhRCRR7ZZFJ14U8EPWKf5W4TS3H",
  "key12": "5YyKVcTTdKSdGcLMSonLt4MDPiHZE9aFir5dBtmojb3memoo5qQQcfa9iuq91pqBoSFqJhnG4dmQ1mCdBZw8mAMQ",
  "key13": "63JATXSQfFiun5it2AW24J3AKSUaF5BSCz8E6cxo8iSccK9Bpmu4Ko1ssqH5zXFaQ1tFgz3wzDDHLi4mR8A7XEXy",
  "key14": "37KxEcAfZUFELBpYWMocBDtMMHpWNietntWYixLYpWuHC31Qq76sBsDB9HEVpuXNBV5TR8JtJL35C1ZHCxMVX2jM",
  "key15": "kkaFmsjG6TYPXjZjcqTMfzgLxvKYvb5LfFy36MY1EbNvbvfTiNviVa637U4F6QtjgyC6nK678LQdcQE3ecFWSD9",
  "key16": "yrcPcttxZZVhrJQjmvFiRhgx62SNoAMrgGbrCMsMgiLLsUNWcTBrBHx1tHHAMbqyzq236Nt7LX2MQaeV3BjjE4F",
  "key17": "231xNqfysBHSdSd1JMR4rTVKVwEdsF8L6jxh4B7wuLK7bKncYy8rZk3ZvN6D7VSuyxhBt2RmF3n3GShBcAW4Ehxf",
  "key18": "33SJoizzxgdGQLNjzJqeSK3sJaKTYhE1L422sTxkn28bs3zFptW316YBr7FYKT16t9sjZCxLNNkKsMNf5F45jwrm",
  "key19": "3k2aMywHuExb2D7KQZrGGq1qHoVL5fNYe8vUBSBcLJA9aP2dtcCQyxtX621DPQSZ32F7T5f4GcgQDUXHgbfb3To2",
  "key20": "3eeGN8zjVAEMo3z1HQQvpPiQp8arnUaJVUvtNL61BPqpYquqJGVD63MqU1kAY5EMQMHnT7xuJU2KeHQwTXuKQ3H2",
  "key21": "3CTMbrQ59UmmpYaHYtC5VgwCRVDi3tmHYhrGCZ1pGGtnzPqHv9ssbsUjED8n5t1X247BqtMe8QUZBmk6tiMZ1mXB",
  "key22": "2XQrqSPs36E2BHXV5QvsSEanYePeKLRte19B8NsQW862m4wdRfWs7phXny5uQKL31wteLw5ownqz7VxuxRJnK2vM",
  "key23": "4HUuoGr6fqWYoNDpSL9f9iR8xJhzCvdPukcpePMwEz6WVg328NVgh1CnXd1pWL5UKaFC4KxyCjSYSirwrDgJ342B",
  "key24": "3c8sgXahy87X8eBcrwer5WwhhjPhP4ryZgDQPwgLiCquFwoAMf2LswanWvKyJM3A4zejYCwqDW6Bm6hywZJkdSSy",
  "key25": "4d8T6Th74SomWk2DhqmYYG5WFsZPCHvoeWWyfXpfGo83whHzXzc6LYz4NMCiw1H4Y6YTsvsjpyK5yF7XBanCcAga",
  "key26": "JhRGGzZ1QSrZ9oUBvNYgixj2TSMoDofEpGrbDeTwdAnrQJ4AVVNDrWYSG7P8jpyPYHuAepc18b6irHTmg76UnGh",
  "key27": "5zvRHBT6DgGKY1CsPxjdLCV2SK52HDARmLvB72QPzjZDrJs66rhzXWDMX8xJ1Zs5etdZ9W73cNYkdqywc4gJZXE9",
  "key28": "4SbCpTPiaHoDy86dbriU4Fu7PaLCFMnwYkKPPEzYUAqD6LSRDEUKkopumBoLygk3D3zAihs73BHSEjXHghstAyxo",
  "key29": "4RdEqgxCrim9Aasd9FnCfGve4GmtS3Kpz9Ssymgwreu57wYhfTwGDXVPXTgwe1Nb2CHJgFwZ5LAkqU4tT4tCAQ53",
  "key30": "3Wjr1DdtXxbnbVVLwMCrY7KLDUk4V9LD9V5gfGjMhJHHvtRKqyxgMsFhSEiZieLmRTW1qVjG2u2HkrcEKivdd6Wr",
  "key31": "nRTwmtybDFmQ87Hf6VW1hi2y4AysuN3pyqPNg6s3bM5FwTqWcKmbcVytoHKbhiN9gbi3yz8me5TTBP6LCWU62P2",
  "key32": "2CpULRj2igLkMDzuiNMha3e7pijZnvpV1Hd5TaE7Eb4Jh5mtsaEb4LAqSrNAKPveEpjN9XXCVBpauKdPeazt5Rhq",
  "key33": "33RwGbRLZCCKXKTEHkQCJE15WraWuc2JRPdSRUMW9MTbWKxjdEtE3fBvN7rxFjqcg6h8bFDbbXxDC3ditb9qaALH",
  "key34": "3RdLg2Rd6rWZx9EqGQMXJXfyKFrA5aa66itBDM2FY8hQvdnT2A9LnvZNJNnrnCiVtVLLBQzyQptR79jUUTYd3FDn",
  "key35": "2ASkfNuJUxLMgFmCkuoeyLn7KHzffs5rV8ppvD5Cfe6pEvAM9eevnaEb6Fv3TtDumSRpYtRpETqsmeRuUgR1bV58",
  "key36": "ZTbQxNef1kx1ShoDJdUMtPX9NS1fy37MzAzoP7Ls9mjyX114qc3C3XFVUZiEB4cRwf4bKNbTL9saRpD6LKADY2t",
  "key37": "5CXL79T7BRnacX5HbQ8zEGcL2By45tYowmNTr85ejQ3UZ1S9iz76T154ZztUxbLCpdzofj58VAFjscFVa7wNp1hD",
  "key38": "5gTZYVvSfRDRnFNyLzYhwo8pNoD1teXWYerT7KfAMKptEHWYpTVudMquTs5cdrkCa2tzA5JFXz7K3DJFnMfYvDii",
  "key39": "2fLUgWKNqgcpsox2kAgJe8YC6HgL2wnQ7VAxbRBC4nqie73jD6gyYo27KcFfNZe5y4yYhLv8XioR7Qjtfp4VgP5d",
  "key40": "2dWB9JYHJwMT6zMKpzvrqtp83PY7VJL2przoBjfLUAGDLkSvhnC1RaE8G3BiKPV46gq7UUzRSokkAhEJZJiSQTPf"
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
