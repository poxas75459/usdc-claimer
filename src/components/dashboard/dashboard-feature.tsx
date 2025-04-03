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
    "51DZ5XMeZj3wmLHMAJUgjbDBLVguowmYvXakQ5CoJQYoqgnZDmD8xvNShGnAZFJuUC63MRg5wTf4AZUKceJkSn9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zvamgA19dzVdzYR1dHfyhVJbT3CdG6uWnhL95aRMHNPkRYEwbwvG658JkStdPB1pPn41nwz6882Fh72LL8RxQZ",
  "key1": "NmHmsYRPwYowVZjfDDbrsntkW6pQiRnifeg8tfv537Wz6mGGzhBf8LX9DZYdz9isVtWEqk8R7aPNHVpFMZtH5Mh",
  "key2": "T1s6PYTvifsTSJsqB3pmipR2i7sLTbSzcUSjGEy9xwyunhU6oRcPJErRkFBiH1vx45hkhxqtvQP4ZsMCvpA84ZS",
  "key3": "2YUTXmn72uhYn2PpUYt5jLxFBZqatzhKqevzpzNomc7J6nnsyifWPrbn523PaHqq7TbhiyWvR48tEH97bxJpRe92",
  "key4": "4X9z8DmaYU7A5gwQLu2pstq1Y3rq5PunH1gGFxzoK1WkYfjFRfhhRumtxcMbrnHwEb4f1TWUkipy4fRjjox4p3yG",
  "key5": "TSgwC3Y9aBqhDzRmnPKV2YDVF8H29FkhTego3CnUfwZp27816o87Z6LhfucBiWQXLZubthimZYeYCuAGW2CU53W",
  "key6": "5LRAvTSEfma3xgQGwRQWgzKNTG2osTzwo9mwgVpSuECsA7TQ9vczwYcuWRbeLMaeqJyvWcjnV5wZbdTENV8p1Wmk",
  "key7": "4gpeUi1zDR1om7XABXB44hY4Zi3sgUNuoficRmcbXUg5RVHvbo1ak789JVY75Dic3cjKZBfoKE9yRqEYc75jrv1b",
  "key8": "2FVwNTHEvu4gCcdmfk8KovsFjfwT6kb1zsfVUrNbbrrDfNXPQSrvcoxXiWPp8M5hoZzr63BxKbNd6DfSArV1mikp",
  "key9": "2dzZdxtYvjM3LBDgdztuSvcxHMk9xLFXAMUTC4mWNRKVyRdqQuXAaGRpL4GH9DJW89RYeZY58M1gNJzpZ9MBqeWB",
  "key10": "3Zf7bB91gCd9eECaq5CRHJFhGKjuTfiZDahcWDitQDxGzLwmUa6eeDy3t4aHLJqDX8rKTTFXn4eKpsxRUE46jBrE",
  "key11": "5KDYoo6Dh2q5h7yZWX6LHqv6LLobfnjf9Z4xTDJy9WUCMgvDSEMAHLrNsLQZqF1L6WW4tAZpyqqedoemTGCoRmNc",
  "key12": "2Vkb5mEvoTdaAuQwASWEZJU5yMPah4pqUyYg2qHfKbLocrH4hrr9durM91RnujhSyLjqQjmX1XRYbUQbCKSKnw9o",
  "key13": "S11cyShXfUNyft1aYsaesWtDKPzqMJWfQ7aNFcU1qSkNewc8m5qajE6fsKYqPUPMd2qG4Pcc3AH5tdcTBfBaWtv",
  "key14": "3ttGbFcXUdw9dkvZ3aDDwShb7Qp4N8Q1oDCkGDnLRvKtuFW4XNowJZnAysfkpcogBZBkS2VZymLXtDnYhRxMFmUk",
  "key15": "1vob3Rc8kJMwEaugE8oofhASXN1FuSkmanPyyzFvEoffaxRk7wc4MnBE98yVTkgSy5JzGAL67XH7B2dNs5Hjwhw",
  "key16": "kYpgkDm9WXQYxwv1YYS3P3z67QoRirqB8sjyvfd9LqmhdCc7qejMJcKpDouKeuhxvDzRe3hUSBGBrpRyxn82EFG",
  "key17": "5oRpTvPU4faJE97wLAAKE1ZYL6ih9eUxfnXvdBD7vYT29TRbpCAU3U7M3Zo674zco3TMmf6itESp4NGaSmL8EVqP",
  "key18": "42WsU8enPYVUKpLUCvcoTeg5rgLgnSdtaQxSBYNmaC4pWvneT5Zei1egtite3t6UBNQN4eaJfhyp1f5y5nUYv9Jw",
  "key19": "5sWDkmnSvRcKG62pjouCnXYH3CiLm6EeXP2rZ8swkHe3zKadR7m624abJwkJDyVLkpsDecz95ZhAEVAN5SuCBpvt",
  "key20": "3hjDeXTA4LYBbJcgxBTffH8GL7PK5gUkNVVPKmtVzDNhaysQaDcVgZUkKcdBFWKZpbCGJkri9iWrows6k3CfDDSG",
  "key21": "3HAq7Rry62osYETP4ryJV8D5n6FUPZKjBXEiDSb9LzCnjZUAt1LvK82hjZwUtNNtT9CwDTfpCWP2hrVE9z5HoBv",
  "key22": "5QeHsxddb9gYMWwYBgPzbAQ79mJsQMJyFNkVZ6F3gMxkvYY6eryAaQVo4NjPWfqfmJLN3hD5ifaie39CzX9sh4vd",
  "key23": "2zg3wbD29s26DtXUi4YMzpuBG14tcFreKSYXhFgLaWNpZLQWcy5czCgURdDd3TDeHGjrftWZhiUhm1wVrUHwG78K",
  "key24": "3yzfwFewNmGQAxmdeYZWG1REoYvy3vpbGfMRZxaeAhMDLgKsR8te1gwqC5qwUTmt3EhsPFzksEXjfBbRFVoqNMCp",
  "key25": "3JoShj1K1H9VVHUzwkhWwUBEC1QhWe3yDJQdXC4nM1qJsqVfEzZNcCVtfohf1bb2u53pTp5wbEpgN711W1sEbUbs",
  "key26": "4pox4si8WDu1Lpp62vXCpxRgjqBKwKoKDa8S8nakUMTm5U2ZocgL2rMArZMJoW3XivawMYC5PKJELMN8vLYYwgtD",
  "key27": "3pG36JJsvJH7e4exKZoq1UmPo6aLXpUMzww3mhi8vZDQxaYRmTYYCzQrw1c9KvpTA9sUbRQ9g8S6qpdpNCxXQVFj",
  "key28": "4TxyqBaU8X7p9TjNEkaF89pE214cPuwGEyjS72GZ9zgLf2qkLECG3KNcV8N8fTvhJmfxFwtAL8RW7VwJA6usKTtc",
  "key29": "4V986D2JVqGm8eov4uBt2DxkmdtMhAf5Yco8wwDL8Ki6r8RJnjFhU7o4yLJGRohNwE4n1LKEk4Bkk9WQZ6AVWYZE",
  "key30": "623PMWVqEt5jtgVH1qeQTej5yDYFzogTT8LGeUv74S2gprkJy7J5tWSY5gsK3WbCmVgZh1tMT7KZXbFtX64xto47",
  "key31": "4KqGGbxh2aato2h6PjkammpdEARDyJBcwZ6tqufSf6cLKsxnDiogej1b2PqbDDjAGNaYmPZ1HxZ2Fid2pBWssJSg",
  "key32": "d2CxbPaYRc6iuzerzFcoxsxUrzVX76o64BmhbhAVYi77ogu6mrTvcCoKj4twXmhuoHKXN8F4mbuCBNLdNovAtWo",
  "key33": "U73DKx7kPqEkF5h5MEgAU56tzRRArNZJQF4Fb7MrwAfqBw3QVgEtiDPc3dBURjhYnN37hLQuAQKpChKg7RQpjZB"
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
