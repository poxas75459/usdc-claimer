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
    "3yW64BPPDXXbKomRSME5vFoKy6HPQDJHnKTVgue7nRAyUmfNrckMkCkCwGXkYY8DpvuGVBJxw42StizqACetK79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21gaA1AFsHpACcwuaXs2Xjo8VrDAVS9LWUNnVjLNkc1n4EZHZLEWKJXizW2huKF6P5gm6RkN8U79zR5oHfYfxKaM",
  "key1": "4vNrDD7b1nTd74VSW8jkcU9apWR2ZcLGMBH9NAKKpSsUmCn6xqBgaGUKVSAa2V6A2ay27QHV5nwAGnb82x6kBucq",
  "key2": "4nmbsM2HpX2bkjgj3FBvPYWiRxETXF787vKvtTwxh4LWrrEsBTJ6G1sEEMeH5w3Nisis4bgYGqB3EHmiUPvmQpMw",
  "key3": "4oV4SGTsVU25ad6Yrf3LC5KdWmFFrKzeck7d3KSaaR9gPfg8wHowjMyKqV6bVwaLMfajbgtdWrRm1JtWQREoNJ2K",
  "key4": "5HaDti3Prtcrok8bzFK7PwV8VYgvygsx3jmB4YTbePPuTMjx6xa5osWvugebsGDvz6hWNndybkFE3qvTyt9ZymJ5",
  "key5": "WByz1y9PxEbecfCbAeucFTLPnCvYgSriqa2q29oiH7QkCEaXGjUSx6jPEKFFoaV3D3zQbj539qUfq9RdBRUvaym",
  "key6": "5QeVoN8mAofkSPzDitANpifVkx8m2vPVSrJJxMXFshA7PFGjomzfKkrtPqX8PKQES7jkGE1qva84NyY28NpBVkjD",
  "key7": "4aUtvNoLYq8VeAoySRN1RRSR9qtoihazi8gRgBaAg4iChpZBeyPkhHXAFAZdbNptg6yArpZgMNqAC9PxHgzptj9i",
  "key8": "3FPH79jK5rwRHBJeLPS7fv8VCKUkLyTCZhsFn7ig9aCEPjMDdZ5MTPqdk5beVyRQi2MdTZwtSUrEa5wjobCk9wTB",
  "key9": "65fVm6g6YHL2yo2d2hDSfTUBNHLskstAK16Q7CaP5KFogUvvEvT53UaU8VA9oWpMaPTcS1SmmN1VshrsAhkzNtPs",
  "key10": "38xxTiSf194Zug9tc13Neu9F7QGihfB5ieDBwSLRepjPKQ2awTmdCaR9P1tBYCLbQR5zLDkmabpr6iVUi92SKNwV",
  "key11": "552U3MHfmkFBjgPi3hVeNXXY7Z1gmMGcZ9EgjNEu4L8gf3hcLBwtFPuGVYktVMJ7Je7ihD6M6sGUJktHo7JQhskX",
  "key12": "2nu6xaDES7YfZb4qSw8NserwjRPs5vMQUvRziXPMTLe9WLX64FgoTYiT8tzxh89U7qeJF54opyRfByuPryBGqY7R",
  "key13": "5DAxUEtGQyAdZyotyF5bYwJBZFUirnAW5Gj4wbbHxWicU2QEZ6Ro7Q1Sn3a8KgZzDcmfgPR6gvYLCV3NVyDN41y5",
  "key14": "2XfRKisGdrnhu1CVvVGY1iZGdQ1r8D7zREMDT5FEugXL5H9pViGfNC5pbDMRU1ggcn2a1e43Nt3aBhg5XiG7ci8P",
  "key15": "2HUKK9JQvCvFQBaUTxyGWj3XScPraGKUZYo81nUgamBHxuK2wYHwnuP45Vg1FL3dhTD6Boc7Z9F4teHJrPsvLhMP",
  "key16": "5LGkNJZdQvoDaHb58pH76jDZiUi2M8p3HTgse5SDtj2gyDbYSVSLBoboLC6PLJFv51TbfWcckdTTEfmQsmSWDqfn",
  "key17": "VjGSgkCzGnKoRNmkQnpodBobXUY4mxaUjucDFUb6WuE3c4QYY9Hvm5dXzgNAmFqpWdBu2MHge9LmB264BSGwd9K",
  "key18": "5wwg1ixxMwgQvj1vF5nBSb5qNyYrJkgNn48LwymhWtJgb7nuhq4PSBnL2L53QNEjL4wJV2NNZbNX7EMhU3JwtPuU",
  "key19": "3FtmEUh6VBF9g1ChRcjoNwFMQJfBom9YJPWcVSvC6wvtd1AV8TRAzt1rfYBETV9oKLSFLvsuLXYfcnHaBT2XkS9y",
  "key20": "cw1APUXtkC554snpyzAuWUHpTr61Kge1kVimh9P2WjeB6NXLk34aQbZRbCJBHk3KaZ2hAebeCnd8DSNADPBzBPU",
  "key21": "31rNoiBwtsKg1GTkW1n8gHkSvUbxWRZhk3pJm6yZZkVEEmuNi6sMRAvGAXNxuNNDbt94BPXCXa7ZZ7dD5ooBbRX9",
  "key22": "22vi8rPVutkVaSkQfJJUmGy1dNeA5qoqHVjhnzEJGD2XuzGFmEB8uQSVfSKDtUU52qrmpP7CzpFDs8u4ABCrjE69",
  "key23": "uBq3fdFQCcTPDE8xzcbGaiyaM1LxJRTbvhRxqF9oeqFZgYFd2mEKChNGjkMzumEKJonJQKRoKYEnspSuF5uswj8",
  "key24": "3RqsFYNiD1cfmY4tF3rNbm3SHCxn8z1kEbS3K1bZwwmqfpPA9y5tn7CqqsRrqDxhFRx6eU7BR6Pdre1dftLPhEzB",
  "key25": "5mZn4PBC3WWEXjb4jLQ8tfkqCkS6df3VZYpGLjzJQZdwmTTUtM8qZCwjSrfSuXFyQ7FK3PVzJtxyzq7fbxePbZD7",
  "key26": "2TRSaJfDCRPLP7nnqXEddvtgbzpuHnAFZxsL56uWPQsUzvQmyzEZUheaX6sbFGQeJ9atD4VEfUE4PPqpmc1wMFh3",
  "key27": "5ydCnqVmShBfdBgc1YCK7G4pUnF8f2GYTM9BnMMj3PETEkTTQ4pSinDdtKRFbYdCWjHbZ8mbPaZZ26im6PVhogP9",
  "key28": "3CKApwopxQeCPSmb82smRxbZt9b3TUiixxVRFfoX7CApAMY42wyx4HrmS8usMfYkhEgoRF562yD4qj3gdVDC1umb",
  "key29": "JytvbdtyENubfFkSp3jkqcAQZ5F43rMns8Fct9xkh8CMC5tHwF4AgjmQXWiTF8yk2WduqFg5uMvoUePPQNP83Qi",
  "key30": "3iZBWCoMYsGyjwzLGczh7iMnXx3VoH5vSVaDXqubcNDRRfqQCFeofKYKxSaoRSzEZ2i7QjRYWiENV1Uzizv4D3JF",
  "key31": "2M8GLJ7kpvLE91kv7HptgaoNHhQLWabfvXLEXLoBaain8E1MjEA1TuNeLiNdRMa623imjVFPwy4R5yyNNZuX5amJ",
  "key32": "ti3AxJgg1yByWqDGiBCWFnKuRvFaQyUQLGi2gyEa3Qyk9PzS2Hf2VjzhMtNYEzVLvhcJgwJemqqydAg5mZJufhg",
  "key33": "5GPEnmEwztrtNhpM12HoRXWb9JPATbRXPmm3x2vCiYXSLoscjA1AmWc5bwi6KPRVsGnDRZD3DYjdzerwkeLtgwmZ",
  "key34": "2w392zKTKpsYfrC5pA24reRYNu2MbJkFVAumfGRts97QfrycgyKHrpLsXYTfH7KvCetPZRjokGbR7DjhoTLRJXGH",
  "key35": "66EW3RAHbr8a1edZUJ8uDhUNqLhUguQbNYqE4t6GmcRPELpeRE9tdbKzMuowVBFh6WDrDGZDKU6cy5duV7Njibqu",
  "key36": "4SaGUE2kerPAKzdyN7cwkHyodKMMxhD7JWYsYzzVMaYpFgeTAvPZ36uaA9dtLzuWET3UYqAe7q7wxLxkmdPj2MVV",
  "key37": "5aD3C7rcqeefKB55u5wAsD338CmJHeMVSK4jFVquMX71tH8yzJzopHnbfUsMnajVZMBMr2h9W4oV6CX8Rjt3CTPr",
  "key38": "4xoMuU8viCdkPCz4whiKJWCpjL2GuygjcUozrfYPyDcP5gQ9xFoCDyp8iDpfD7NN5dSkky4WWQEJyGTujXQJM7dY",
  "key39": "2wPU1o621WojcTbeYE8Mb7nzR1m6wt1HZaEZUoniUdsBmiHGh8DF9ywEYGCnyoLbPVGYd5d83NJh3xFehrSBMu6h",
  "key40": "47y6Pw4XeeQFek7dAxNvfaG5fTbwMTmuMqKzg4SVnS4HYikVfeNmgvugnJmFzYhDknT3PwsgAfT5vDBLyAU62yCT",
  "key41": "5AiTsV3T2pWB1TKCqwpzhMgGccAG4JsLQR61qXLpZZXGCvwFR44JbUZhBifQp7ioXScjvzoqGCBAEw9HLnzATUQj",
  "key42": "4xbDwUsCC9uaNkweTUNrY1sytVbPHaF8zs6WpkeZ2AT6vzpFDSeoJNBmhhtuezErzjgaoEgoHfQs4ZFPjjf4g3AB",
  "key43": "5Mg3dSpxxg96egPFBVVBFtv38Qj4TSoBQQJELbQ9HXoonYj1h7zoMCa317te8FfjvChKfn9zQQ2gJyD6DG1WiPjZ"
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
