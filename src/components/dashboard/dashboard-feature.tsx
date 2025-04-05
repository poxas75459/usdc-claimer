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
    "5BQjG2AQ9iNNyoUQw8o7u1weUexne57r1rhRCKjMtSjtqVJxVtqd1jWS2sn3W7obuDUCUWxC9ZVRtEP6nTsNDzzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hfx61QD3C8P3ScUDFLujTVVKMCSxq2azH7261TNJqSz6n89cydwdZPS7pafgQjA2BKzgPtqs62fXzcHKj8HDAB6",
  "key1": "4FYL97jfHHYeMF79Y6QA5UnabH6UCvxfJJuWL1bqWsEFwW513ZXD9Lxrw78nEEeTPjy7vY7nL7BWkaQfCGGEZvws",
  "key2": "4czGzf8YFCpRedALE7YRbuhnD923xsfq1RNN7AKhtgRNAc5Ar2EkPDdLbEVWo8tQidoXHUpZr38bo3Kt9LWCs1u7",
  "key3": "ihXEHbhALWtnfeQuHTJwvsQdGnDzykvMm7jPfaneQrJVYoYCJaKTpFHU53p4xnTWFEyURKQScDkCGRJdRhteVbo",
  "key4": "4c7Y584ytMxvjx3Brw9VxBQzAgg69nArk7S8UKWMpJGKRCvbmykmsYdUG32jcFhxrZxjzuwEwj5YecG1KGXxAR3j",
  "key5": "2P4eoudrbMC5rQJj8Po81Py3gW1exr8ogjkWUjr2SyJXS4WAH6xA4Fjx797SQdeESL7VbDgjU6WLjZwNWr59cHV4",
  "key6": "2X781vmy7MeqFuEc6UAnYWEE2ruRo33WrGiJVapdgmmeL9xmUCLTzZ8Lc5K8WQuUpThmWwU5Xt3S7iti1SpCkPWQ",
  "key7": "Xa9pKxZqF6Mifugc92QQsWwKJZrrmqCrV3rdHNR1aYuYLp8wBS5dtwJpH9dAk3SjcxEC7FSc4C5h5vVgthkdFoa",
  "key8": "2ib1p6uchbcAVtNdhtuPgkRumyaByUwnEVpkZ6LeAbpsZxr1TNaN5stw7WFiNTZaTFU6t1L6enXoUumeys28SoNr",
  "key9": "5SAPiMtu74FAb5nzUTFGYQFXRaaz3mHxBfjZ1ERW5RvtHeznyVReEQBJ7N9avH85UPZS8GNLyFdBzaDd74VeQ5oK",
  "key10": "5bxK4VBQCQXbGqLfzC5zF8jvUeKjBffsUS7gVE5ywUJBZ2H8AJRVp3HqokBPibF1CgNmd9tAYckXA7PhZMJjhENp",
  "key11": "48igHAy5ZzLLRBJw4tPMjc6quM6Ua8fa34XXTZTBLqZ5QBMaZQ5nUMyNmJuGrF63RoMttYAXy4bv37arNRFBvNLE",
  "key12": "57rp2jV981SX4dgcWmCQ9EPWVjpnRDU3Rj3fYa3ZS765tGbxRnCfSkg6uChF1roeceBFePWv6vFawMr2ugqwpRS7",
  "key13": "2RcZBjCdf6eab3Bkc8cqNvSHh5nbtoG854U21zzeACh7eEv6mEenGoVpGKiAN2NRBA9RJioDwWWYVu2YpZaoRKG5",
  "key14": "3sZ95gdEJSjxaYE7EKDWPeuPSRbzvrMg9R2RjaLTESUGdX82crbEdSsznMXzCAmgw1YtjwgvRC7XpZ9NEuxYRH4D",
  "key15": "hSDuRA7PPnhEmWLyEoPrKdEFsFUjugykHgsMkDULpJaDvBUUC2pC1QaVujsbMP4nwDwnU8CSgb7CXqxEFxP1cW7",
  "key16": "66cDCZNYWhmRsFLFYfeoUSXCozA1bRDmDsrYMsiKsSQGogm6Aib2KEkizjBkStbvzjrRw5i82Syt8xeGAUPbKB3T",
  "key17": "4bcdu7qZS5ig4hvXvCvhTzsm8hEXTtui4yXEBCSZzmbdpUneTd3AMQ79E5VwNP7jjZyf4avXi3bF8vpf7Qh827aq",
  "key18": "2qiivowjfWWZZBRRxvGZt2PKGEK3ZShG9RVwM5gcHxtwd43cX7ZQPar5Va23yAoD4RTtDxccu6L8GsAoRmkXDCsN",
  "key19": "2Puvzur6LCkCJNU2EMp6ZHKLbCvqowKcew8PvyBHsFoCACZPLeivJC19CobS9DnjD793fp6uVU3hXR6uWUziqWTd",
  "key20": "4u9T3SwcafrNkmrNrY5FduipDSPELFVZu6P65vhpRyMupFaLEMCG4P4AaARZuMhDVdMzUCEoZxG9XxmbMqSbQJR8",
  "key21": "29kRyWdBo234qJDkGYWEVxHMwbkNixe5mmVfeL497B8Mm7unb6np82m5zfQJ1n9NmcSzFykkVWrzDJ6x5hWeuEpo",
  "key22": "3pF6aqKhER79nXQK1mixsbCKDYe2RfdzqSetJoPiqzvBhftXXWu6miLPzgvrEzEygpCPi9HA6q2oERh96raupwN9",
  "key23": "5aVcARgywQyv94vE1Wy6ncHVKzMYhGEALUhU6CSoPGLTRh8coFSRhz3yyZancwwyo1UgAfSVpjkxYHXSsUSw8osD",
  "key24": "5CkepboNGbqo9tCTtYr8PuXvFLgJKnwBLUaXuftgnUrVETYKFjjahYRNLY4FdLetkaevAn7VtVK7YEqUgXcqdk2t",
  "key25": "4xGZngBsi23GGUF2HPorB8eeAyE85vyiHVk32nHGdG8Bre6rXgAm5VJC7qKcRajxNmN9757FJj6N3E4JhjuLXKJc",
  "key26": "FpirAs2QSSUpYR4rdoqXR45N2HxgMy8STLqAPeHZjWb4Jpvr1wvHN7r87qMnh9pQ9nm373sm9dhu4yzF5Gc1kfj",
  "key27": "2dDJveS4pT98vCCvugxaibekc2kuciZQEMYuZbGcBRwNj3yfQKGjW7P8VrRCXYHnq4RPkKgLpkHYwzC4Qu5GQNBW",
  "key28": "36W3aSySmWxF6XKbkmE4bRtcqHcTvW3VntTVWVVh8Pn4ktHVjiWUZcMTJMR84Uz3MzM485KCGk5T7US5TECcXgDh",
  "key29": "5GeumMnKoAijSkzqSsUCeXo7jiAADhoq7PDzHS44n4rR6REBw6sm8dTVMyNZYJcond25K3SrvAfCjHxyK7PR5RvX",
  "key30": "3VsfLVYZJoWeVfBfwgxWZoyfSmQuNDU69ULRp2fXvETCeWZbgAxmZNj4NuDNe6gBAZrtfLC6L38wBtvN5WAeiyww",
  "key31": "3VAuGRMWzMDBAcXtUXxPhbK2VRzzsoZuD1EyruYiwSaUViTKgiuStuJVAHuHrY52jJJqb8EV3g1oMnvGh9UXS2UA",
  "key32": "3VfpCcQj1Ekr7KYNxxHG5ZdqaDMmhgsoMWAiKdyi6MxUswdH9aNEgyiHsDGPWy2KpmZPuwvz12upTad8QPstLSCi",
  "key33": "3UDPvizxo9u5RWXnctJmahG36yjL7wmf5HJEuGLt2uvWZHRcBJTnCEZh8LDHF1bhdGBeS6AQrV6i4cnuowa54gn7",
  "key34": "52BVGCytUZdBWa8CtiB6shMGNjBhKzYQS6ZDVQEgR8CwX9KWxGUscsCxfibGmZKo3Ro84RyrB1yPq1s7dC6fnvak",
  "key35": "2boibRtF6AFy6kC6rkd1ndgJaSSSBTEAHwwd9kqPWn44u8oaesfP5H7eN5ukxj42uqRDQvvjfrUqdMj3NThAR5zj",
  "key36": "cUugo4D5cQQYuEquhTxm78UDzkX3THnYKXZrcjU5vJf7CG3wzDcXdx64TLuvGkv8PbTsTDbKhkEgwt5HcpMTxYW",
  "key37": "PnkagYk1NP8RcrQS9sNp2umy5v1wzE3d2CRq5BcCwPaotvFZyzYvg1VU1LS9XNAaLrTg6nBKmeftUoRTu6QQdFx",
  "key38": "5N6BvRgRjQBbmhxja4k9qkzbqYujwm4EKGFBymF9JzoY2mwc4FssswvdD5t6k9yPGabHcCawMcG6u6VBCL7siwK9"
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
