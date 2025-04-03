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
    "2CV4gwT9RVYZQwAAcHjdtLvxwiDkmbVzc1AJQcgKA5g2rfh7GnfXF1cf5m2zgDLEojf2HWYh7K4Zn7qzZswEpjJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxFAgnPuWgAqJFrStgr4sK6hTb7W2sX17bBZgXFGWZ2NJZma8pjnN9g2WsySdqLEM7yjErr3qMNvXhbnBuWiybW",
  "key1": "KDW4jneQf6Y7CBFKLfHRhmtwizkqVGnAWoPbCqqz3aMSQykhkTXVLxMhhVUjY69DNRe6fMyf24BJi4NcWFeC16y",
  "key2": "xQFCZGZpKJKZfJemwiKKE652PJp5qwf926kQd85MrMkajs3reottMfaBWrwF9pKJzPwcD3qZywgTBjwE6MmKcnc",
  "key3": "FNEdpXDnpRrNbyMwhT6msfdviaT3WNMANnhP9guzEwm9DKSjzVmU5wU79JpnVG9yn7wGzSJMJ6eSQWQ4umw6KsP",
  "key4": "4D5usUnhMoi4fiDggd5NoH7DHu8cjv1z92UKe2EwcSbyqzht63KqiJpKqUEFFX2hzFvPbbeDtuXhxqv7ELq3XjBN",
  "key5": "4mgRdQTxEnapun2n6AS73jhzpskfMqjsqULqBk6RW3tGg1Hic7sLMyg9kom4fvzod7tvjm2WXWoTWBzt79poSVSC",
  "key6": "63SDe9AwLcZaEGemXUAy4hSR7NyfL1YJKoaBkKkAktCDKtEtGW8y23C7W9Uyh3V6Q1pGdiVa1tHupXZF7mcbMXgb",
  "key7": "62LVkQ3arBePM7cxkzL6gQpVJw7nNksb6EruaizfdxiHMpH72e5K5ss6NDZM4CoT7UL7esC3jTdxRNGQbQapfTRm",
  "key8": "2cQ6KST5YZgQ1Dwm8cpVurs7qWuLg2U1FPfRe5XmNymbaqsQSKuRcxnQuWgBqoBDA2r3ySt2HwQ6CSeUH8Wi6hV4",
  "key9": "54SR6op7QSUu5VE6VSVwb28wB7cH4tjhpR1eLJAHBbZdv5brP8aUVPKAGqBgyxfGx23jTChuFXjXSo6ehKKCFhyX",
  "key10": "kciKyV4hb3iCtH4u9BjYCXg5yckqGKfuWX63fDBY82GG9HDTo5zcUg1baNfXgUfvFXHZBb45j8LiHobGzQpYbVE",
  "key11": "ggDbjz3owK422yRKVJ6qpjjTg7bhgnWzgMRASkMXLQcW2nwuJTDCZfFTN1tFntHunD4hPUm3YgaiKkVK4TToo1k",
  "key12": "NkKgvYSbSCbNADHabxbq2DPagTc9ZaRSArtJsLUmbhdG3AdKAAfTtzZNcTgGAjQjoX17tEzmxX5BMxT5vCWgm1x",
  "key13": "4v1KccXfV3P7EnysQduh6kdoouHf4gtR5uTaFWMfouVHeawi761jThhEJtsYnCABr5zkDmynFf99gewyrMHwo9qT",
  "key14": "3UkCaQhEEAQaHiiswTT8UyfKZYQWAUxAhAwMi5BpkpMvguSYtPziNdYQnL7Spmf6dNsoWQgZtdho2S8sCb47rNgt",
  "key15": "2GCixUaRo8m5phVm5dkvtvd83cnMrvKGrXLevDjmCUN1EgnoTapXXZDHUR49WkZfQvG9xjoNcv2pg4Va2CGoaysF",
  "key16": "2396MaDzMm6jH61HMXmosBnSWSF7Bv3f1Xq3FxQHCmtvG4WaeDByEaZLmVxTmZ4WjiXSxzYTNJQf5RJT71MoUvM3",
  "key17": "1SWAkTvZXze4FxEYfe7rK5hPzVEDSzKbJytcpsGWBXWSFsuYn3thWaRaZ6q6aj2YDyumT2FGWZWcmf9TB1wmZZy",
  "key18": "ST8srk36n4X3Q677MLATPsQsK5oFPAZkdV6q1xbMjvuu7d1h4M7Q56ZQQWoVtSFcPXk7EbFQHmKs5R5JNB7Gzp6",
  "key19": "4PwmBfD7xRFuaFNwtcSdz19wME1gb2d1XFG82bj1a6xePyiMsYVPv6kfpPShtLaogoUdABdAjindk78AQo1PWjTN",
  "key20": "2bncBvAAYH2RsqeNaJbSzCEQRKXppHDNDoBTxA4JxSB61LXGGQnqrWMAANfrqgowaE45Wm4LssAbjFPh4hFhQeqr",
  "key21": "V56QaNc5hFsKL9gF8MDrFNmum8MLVzDZRCbzTeFu6HFGiaFeGTY9iE8QpYwYBEMhXPcCoeaiGa8fJY2MBnWRbdL",
  "key22": "4UUjQEsFWRJAYjymbvfjSP2dQmZnGd2zzHrGoHUYsFTvfsFcSAi9Y7WX6A62gDH6TyNEzf4qCFP3TrA84Zt4Mj7s",
  "key23": "311GzoXeQ9BpuQ14cgX3rqmd4oZkfF49N9SofuyQugYUedLSrsYBiNtQys7G3JxG7op7GgpJmgAAqwVz3bS6cxXw",
  "key24": "3sET9e7UBftw7N95iwty2NBdqzTjGVwCr1dfx2CF1WdDLtszHjj9yHAzPptgCHmKNargxRrEC9Fvsi6oCvXJG6kX",
  "key25": "R4eF8tEJHtrAxUnfzF46JxCPL1cAEajbkuFMBN5iFzPUdS4zvoE27Aqzzyc9pwDEs2opnvko23x1NqkhUE3gSTW",
  "key26": "61wWRXcQonRUUzyeq9fa4vdbqrNQjSincstg6iUBuDtM1BkqX9zwZeTWc1mUS6ecNXgeHo8LTuZE8u2xAHy1DQj8",
  "key27": "5R4Zht89Wg79DfUebNFKCjST9WcRqXhoSzetFswXopn4AFTzVYf1YPN9TZ69TCydCAUywUoYR5kZvzUASYkrdoUn",
  "key28": "424cbpFAMtmypBTVd8XEgoMfgYSLXuWASgczqyX4jQA7suSd7guH1AmonN1MKzussekg3tpxSmkNSiCQKgqeC8Zw",
  "key29": "2BxEi1FRxumNG3UTxGMucTAMfDktBYEcioQG3KA797zLMamVsH1nyVtwiw3SGnDJAv3bBqoKN7XzVNuew9pnN1g9",
  "key30": "42eCYLEXqtGb7eZGT8YuMyZbUaxUGumxEvecRVo84wfPAZ3JuF1afY2fV1HwxY51M9CeQ9wmEYf3jBeVHgVugDei",
  "key31": "3DaDS3JCTnid2p3be52xn9wLwMSGyrShqi3dhQRYtsEuV5y6ri7ExDRbkGinRMuqNjsTMrvonuxYiQtQUPbrqaiZ",
  "key32": "3vV4HBFmdJh8RS1dvypt31NsbiPFEXJNdxW7tQg6o6WKRKsGUyXu8gSX7TtwgpxzTiofmpYzvh9HS5iPn3UvgntD",
  "key33": "e2qrAXaes95Fw3x71zpkFDUX7upP1Rki2bXJztUcnqeU4BFZqRrvs8wihBhe69zvT1gD6QSwP6QS9gmdHtdGVsu",
  "key34": "5Sao6ihe7yPW5Ro6nsr5Lkwn3bBvfJWU4q8hKtzpgi5cU9VPzDnENCk4p7PKPHEgtnTPSJAExjHk3oQ6DzYpb6Qm",
  "key35": "1LhJk8AfKrgmQY2UVLa7yetjukBBvNkvRXz7fALmcg8u38FTeXswfrKE2EvjKH9PY1Nw1x827hTXzsPJjtUfDaU",
  "key36": "5aGvgspK3ruxv4oTytQBDUVJsvwnnwZy3ocFhpqnehtLfW3266eCyave11foiKJgxeDpT4e4Eu7ViGdGhHjaZHe3",
  "key37": "5BcdZqwYmj6EpTwcBCF3vTekwdkh2KDahuyHC1hy872huohJpo1xrGp98XzaxT7kn6bppVPZWxWBANPGdmydaexh"
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
