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
    "M8qoQsSo4PaD1J3S5UfvFQKeR3KjK8mhVECqDAUAXgwoJWuU4WcykdfkgybrFfk6SR28yt2fWaKLBaydufH5wzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fV7hzhPJzAxSCEre8tHB3fV3wPGGWGKHisW28P4Mex38ngk5UpvS5G7TG7uisDB1w48RAXdCodTfBXMiKCGU77K",
  "key1": "MMFuNVVYjK3Vz2uYjKYXZmXU987mMxMrRkE3aYtnsHfASmWZUi3gNoWg5F7stzTM6EEi31qCCMRM271ooRRZjax",
  "key2": "5SaARqjPyRfs1ed8ag3K2GjzzabDLcTJMYVoadJamcRoMmvqUE1iPrsoVujxDuUvW8VTxK4qZhAr4UyE8ogHn5n9",
  "key3": "29Wyn4m8raXGcEnzMqKTeJYbCrADVvCiDpDxL2FHSJRngbUpJtuAVJuPj1z3ZY2WHz3PKPsBr2LVf2Pk3RtPSGYh",
  "key4": "28wWAScV7Cj9aE5aSAEWZ1fxdRUZUjxnsEL6MLTKpAAW2A15EoLxGniGafLxAkduHbjFA5PG6brErvJbkSWmAVmQ",
  "key5": "2sheVSrJPyAgNVgsQHECMMEMDU16xRbKYiFFitsrYigdNMw6opUbHdGLiJmfm4i5CShLsAYZjVvDfULN1SjvcMXK",
  "key6": "3mV8PojgFknmEhUR3J9cWKKEWzJTpVG8ync3KS15ksVdDkNuyDpfiE7Lw6rrhaMW1T39CVL9p1dZm5eqpwd6aRWL",
  "key7": "315BNWDSeTRBw4ZURW6BA9mMSNpXoRhKqC7LqNn81NYu1baUGNjPsYhuLhegwEUKgAx4Hn7GMoYLwAgo6bNyicrg",
  "key8": "jCXQrpk4gx1qckchgJipk5y5C3SC6NiG95RUUPKANgio1jQAotdvwHV5mKf7bnpWtqSPeswUHeiTRw8UX8ENuKX",
  "key9": "zmMPZDwLGzCd9m4reaxvM78LSptNUTRcFJiFi1u1CHB11thygU9ByvszLpti66y6naYpykV6rJKfEzjbB3uMQ3S",
  "key10": "2AGpY7Gy1MdhtouFhCwcmPDrPSo9BNhmD1FovrVQBwRkKKhDj6bpjLHzK5pptmBFmhr9C4DbqL4NjrmJvo89PXe9",
  "key11": "mQiZkMa2Zk7uKuS5HFrE6puNrM6VFtc1HyV5PMWi3n3q8PB6NJEb6kmkfGebuzCXuUXRd6nPPMSvjoZs12CRPMt",
  "key12": "514bAMDixK9dodx8L4GtBFRFMFqhfxgLmwRUfVB2UedXhddFnE2RkgngqdbfMfPtDn3P29uAxbRnPmvoaznfhBRf",
  "key13": "5R1LUYSTyXz5MntbpRNq34v7bFZcAXzUAx6AsNjyhbB28xUCu2ScHGh7txksFqqX7JcGmmh5ZxUJVi7yNAXUAHmb",
  "key14": "USQL3svJt1g55VS3dFgd8S3BmCG6ZkTCD5HHpRzVHxk18bhW6rrUVeRhKqQ8VE4P8k3Q5pY2tXitCeHYD5dgdmd",
  "key15": "5SVaVny44uwPzgdFGWRym221285HTxMD4mut946PoeKA6JPoFeF8tNmdbw9DN1Mikghci4rmiVRtD2aGoRYx48XU",
  "key16": "LEig9jpQreLSjsngP76ViVWU9qkVFyKWtu9ZQy3x7BTcXbp5a9CGgwu62EXRkktToW541eVm983bQkusKqYEkEc",
  "key17": "3j6q7GArRZPiGUcSuDD4ZzKvFDJimYgw6wZMaurcbjUGVp2uzRs1S7wMFJQUAajg7PwhvZTPyV7ot8eKT9PunUAD",
  "key18": "2saq3aQHcjwFfr5kXicBkwK6xWV19jworjEwDWcR62xNnb2iudP6k6yrXCALDfQXUeS6AF176awqzkK4eC29nLDQ",
  "key19": "3avbDfLHb6vZYG3GFcKDoGSTPPEa5kKbg6De8cjHofCwY7MXfKghkt3RQBbLsh3Ndy1yE4oZNM2YmMXoX9mEVgRX",
  "key20": "43jRDh3Eyteokm67sjQCAcAM84LMMZNxwWSPnMuFpbs5XPbhdYhGabsgMh9xNCUmE9FZzprCxiE1vCbbrLizBsuD",
  "key21": "2HszFqQKfFkfg4VX842Cc9JNCkKu6UDWs1ywJc5mQ3APXCV5Gq43CuNPU49sazZUUw91rb8kw1aKpvVfFCM8DRRX",
  "key22": "5KACx9s5Eww4vupZwmi61aSo3wq2pMQJYfgJNj3NX3vJ3qpY8Gt3oKR7VagLTvpTQrgS1ocEb8TNAUMGrDTJweG7",
  "key23": "2JsQMsY3GzDFJcEZe1Ye2eayrT6WGbDQ3uptYxGWvxmDbgohj3HBvLXjN5h2ygDu6jzE2ijnU8inJH6JzFy2NQoD",
  "key24": "3eaGfPv4vvuYSPTYZgWYNqFAtJnxPaLmpr87f85dMkGCVyqLncy73UizSmfdJG3UhsLsK26cGqLc7gpLAPDT3CqS",
  "key25": "2Utmab3uE1CjcWjEdDJ5yJn1NEmkdxgEbsmGKy61CCD9CHqJh7b5J67TsC42F8DuBr2juzJRf7oj3B91bq7vqbe7",
  "key26": "474DUhRsJuJSmftHHszsvsNUWdDC7PZc9Wox2VEQMCsiooGk7GrTzVEJZc44GB6UPPqeTKCmyRSbRNgkbCgPdkBD",
  "key27": "5Yd25Vrx7r3YW85jFTSSHHrBt7TP4W2hueze4PuiMKfTjGxboJWenpsi8vYLjxKc7tGiHjZ9NgY1abTnT3aTshs4",
  "key28": "59kTEakMn8sL8Rtm5G9zmmfPqiC6Tgzar7knRkPsEBkGAVyKbh3wce8c4yC2La3X3ybLLzt8JnWZyBDg2LZc72dg",
  "key29": "3BNwhozxPTmxm3ExjAV59WLrByZmY3YkC43kVKw5cTKoBffarPQGw9veaZ4XjotTVgCqoZTiJ58q1rw9bbGjDhW5",
  "key30": "4qB5rSxQii23UtfpPAkSFeaWE5hqX7UrmNLH5NeKcDZATZjTWSsNtbVcthbY8zJ6kmLZMVQofNu34ezHv5wfbmuq",
  "key31": "3L3JMa6GwtAaeVMgTQ31PN2tbMg91xgDrq8iLzpNmh2Sp15ACkLXvPqNmE6AgQZWezRN9Pz5Yx6KzGfEcHxiAmXQ",
  "key32": "4Np92RZWvYuPfJcEMDwxJemZtfynLRc2MQW8uGgq52XfyzMUCp5AxhWsBjaqUtZbrS6qKZuTjHvAqYFCrP7SHrBQ",
  "key33": "5jx8eEezjdZvTA76XoS2pwdF15yQ7hRSYfyFAWCqu5vQBWHpG8SGNgQCDV7q3NU4WFoe3Waw5BTDRcRUeoNvBGQt",
  "key34": "2GHkzvE5rxaZFRtc83tiJgwwrxtTktoxVicgLyuRH7tjM4bmWy7oj2PzfPPJNUdrsjVA9VftW5vUDo5nu9GKS2eU",
  "key35": "T2sJ7mn1z28vkQ4JXYumMgsNA96W1rZ5AAMrgNQ2GvC5iY8ELjC4htpPE6jpJkkJg4vtxAAg4pRfandLjJpEZ9R",
  "key36": "21yYad2mzsKs68dJ5w2vCAfhEXxhfQaZpnHen4M29obFkmYv2zHEYAKv26gw5L2ZA3L9b8AeeFmynQdGChxHuG3s",
  "key37": "4iNosCH3a7fuCsu49C8DGCkdiWiwwqCRsvoYzfTCPyr3RFZy5kaPta6DRjuwQrdhzNvY4yCCjwbyC6om6D7qUnYA",
  "key38": "4imiLkq82brpFMLH174NJR69UjYCB6mtsV9mt5Myracw8KwNrjYRs91HqJV5H8vQAn2ks5WBytt2ppCgZegWfBd5",
  "key39": "3vKLVBt7CQDwcxAvBVGJCbXdZuVdn4i72LNjM7gPEJCMozbAFJTrFSoeXPxNBkaMKLr6251CPjBMVX3WZJKn9932",
  "key40": "rPvDzyGYrrqmAjvvY1jk2VjNbiC6UvwQSWAHA4RahyLCvqeVUTc2CxZA2Pqj26tdiH8MwLxtMSy2a7pkd9KoH6G",
  "key41": "5TCRx4fMxatQY5uQHfMgW6FbbqXHQhxJMGvd2ugucpF9krNUAQjLm9L7RZN9Kje6trCdvWGL69cH45icniXb32fX",
  "key42": "4GUUzpFR5Lf8k3CV8BQJuMmGuCeZAwsJABzPCuRCmu1V5GLzBc5iM84A1ihUL57zmessLFMHBzY1JmdoAPdxCNNK",
  "key43": "339wJo6CK3exm6Hq8XvXs9R3oHgKNpwBWgbKS8DLASURvVAMqKQD1GQH9qS3Y9ARwbm6vtvqdKM3Msq5sycsvXg5"
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
