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
    "4oaHJmprNm2RhJrEscLt5cHHoWDzVkWBBz7pgPTVuwfyDKtXJwZvDhSC8vfrBFvw74y38RqYuLQmiYBkAYY6Rr6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ugvtM7CkeZbaExHz8uT4qsrXeWzSKHwL1825L52GxRBoepDA16dVJDUkMsGEHD1VJqexZos94iKtRscf1CjuX1",
  "key1": "hNbJoBVkkDMXMtSYDXJ1rNBN4sAXm1mqiek71T93qwgbknGaQHvrpC34nzVkKTBKe4cdJWzdqpVKfA8rovWV7cC",
  "key2": "3X1ZwYzvno4xSVKp11VgcYF7Tn7KaAS24Qi2o31kLbMaUw45mZ8rDfBwHM8i7QNouhiBDxtQyArXyVzZsSVSNuDA",
  "key3": "2r4QEzkWSyEwdywsXZiTBiDnLZT6BT4a9qE3CfB2JbXtZSccxePSsTH2m3GQrpZf7aCbgbZLzS9EzYrJBvXuJdsJ",
  "key4": "4KNwyn5Kvg2Gz1YRRD5zY1TfGySZa2xJqBGvQyyN8HLpw6RpuJoAN1Lr3HwnxPZrTYa6c7yHzTVLURF3WoWAdgjc",
  "key5": "LpvH4kbJbZCtJYLuH6XdFGFYmHtApF8WzcRPCrZnSEiokqaydbKXgtZHygEycTjvw1cYBV1puZZpqdiR27KHz7F",
  "key6": "23wD2KcG94ou6Uuu1nzpJwLXRhiijHEvyAnBSpkmzHzmBwxvx5siLcQbw4V3qtFngS359bmMDPKUd7PDpuWBbAmf",
  "key7": "2ZcHULfsgLpKnAiNh34jcP3yK1t1fsJQYWBnvcGhyhCFQT8qc3WapZ63nNNrd1r3itnBFMPpQinhQtaG3VsVmAx5",
  "key8": "5LYcg3qeKbJdwLgRUA26RmYSQLFMUhxzXd7qzWrXAkdEc6FrYMAGqakMh3nfucqKbnJG1pZqxonK8gRyznNgrTb4",
  "key9": "EPDKowmzjx8AhmNvoGbBz8KHBJFVKSaVxHqm38hPWf5pP1L5YbfakJssfJzKWua8MDbyT71QazbAMCB9uCHK6US",
  "key10": "5afWEcGkRxPeodUahD6AmgHy8bp46tsocB37tF5kCTyXxEVmQsQNyozPTuCDEffWmFi7mssHdXD3ExoiNSw8LVfw",
  "key11": "2UK3w4kFb8Ur97ukBdfjx48aCZQKxtm5vN1JcX4KE1TnrK6cdpDTpE4L4oDaQMQYBEQkXiB4wgwCYRGA8G75tfCL",
  "key12": "5vHX1AJC6544vNuGr6jembUB2TxdUfG9EjyG2oYPWWvLLMZH3tAyusU5ThH3QkFLeVCUrhPZToQXNBFRQv1ZmTCn",
  "key13": "5M7cm9V6AP2A5YJWx29vFX8tD7LQaubrLPSEqcDQBdWknc7UFsLEaRen7CBuPExx9r5SuiKbgTGGefFmNbHBfnb3",
  "key14": "4icJ1ZeyzLFaDbiEUHwWiE4v4ybW7m8mwV6mqKjVYkcwGujHzDibuzNCfxCWYXXPverHftf2FF3m49bY3r3W45PW",
  "key15": "2N2BpxUz614Mj3oNsPA6sReQqZtG6zJq9E1BAeUruhW19MG3LoUWM4shv6KBn95T3E5mrw7qscRufeLApwfaaPzd",
  "key16": "3cUudEcVkGRbx1HkMfhzj89PWxQjXDKCUDjoajtrbX5k1n7weyLYDTUz5ugJMjgCyTTm4XvSRVvQgPi5a51yBbqE",
  "key17": "4pg8p1m2CF2RNEAZZ21uRyzjcnuKcBwP33ceGtcPQ1fymE59CdzH6xrkgat3Mao7cBPJVrYHMZm3R9T99Wmx38e6",
  "key18": "63NAkLgBTduAaogKmD6tbT3PT5gy6cDerSUNBpipwDdZxhi5oUtBT9mkirK8H7ncyS9LDEiSYGniWdASX7WrPV43",
  "key19": "3anyjqTzGsQ143VwF6mMXYy2msofyQsw3Lvg5bH3HBubJhyb9vxkKhemrvdJbnpwn6mVMnNxtoGSMCPvWhKqjf9L",
  "key20": "5D9A6r7xGmgsoAboB5taLXtxoaEWucm1iNDCJRHQsKTii6g5Ns2ZG14ujbgYVNguxYTH23Z3gQ8BPAQx4cMgjU2G",
  "key21": "3yuuc2aJuykobw4PnFbiJkGQuxhWGTHwUcor3qw5ceaVLVhjFSSvobm5tHwa6iT51pNfTHomTiAg4nQJsVXn5dZk",
  "key22": "4xEQo36sJoXbxLzWe7vrwKe7JTXiVSD1bDifTpENPEyHDgCUqZwZkUT9tcoksbD8WJJpE8wo5PPKBFtjanuyLb9F",
  "key23": "QNKnQ1kM1boKjt8URugaTCqBohLzxbdVzg6WNcM5zz7MBH5kLKwtcRkgKaW7DTVUk3hXNkGUAd7TSgHdG62kQAw",
  "key24": "5YkRt7sKJWVAffxFdkPPB91H7G9Xt5PegbHTBxfEhbQYzWX319kkJuQE1mJp4kPr37w2fmDozR35UqZamYSeGh46",
  "key25": "3xUAeCnUf7WXvRQXhLaFECddq7o9JpVDXLHVhDb1SKkNNSuz1i1r1Vtw8USpDHpuxpyrfijG1vM1vC7NE6hsba3y",
  "key26": "a3ZYE868gzFnBUTVQQFqVTbxzEBbW9wF1RG2KQYxmXveJdz4QHMhXkxgiyrKp4oLbUDVxXm4L8LBmvCrviut8xU",
  "key27": "3ZKJqtkDHndYV2ugttGcJwJbGqR9aC25zEZbqX9Fjazi2S4UnenLMcnbprxqDSCqQSm5NLjykaRN9CHxa3CRLSCu"
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
