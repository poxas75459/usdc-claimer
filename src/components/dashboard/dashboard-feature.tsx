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
    "3dxFggPGhk2vYe6TPnKAdjKpr1GA6rBhE6wHNyng8ZEJXrufWq29EqUVtwmZAs5Yczpqi2yTh8MeXciyD4QcvQgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzYaRy2WRfNkkfP82Bnt2Mp2hpZGQmjYMTMWUVCva179tWUfKb4xwaSjUKqp1waKW9KTAvrB6EsansUhj8h85Ph",
  "key1": "3mY8tFJrUoKsN6rSqmaNF2851PKkLaVY6k8kwhsZUK46pEFDM4dW9mESbuJWiEx6byh9s9bAPCaFcReyTBf1QBdB",
  "key2": "4pxRkrnVDZzQf6B98nr8MtZxUpb6GQrh75PvasbjZ63CF3xr3jSkHLxWhYBhFRtqeYRRwqeBv4AEJqpXrseuA8k2",
  "key3": "2N3rSxGjAdsYLxKtm3YfcxfmWNCaZEaQZrTEoDzCvxUNhZ2KmmDheAYWWfzqfJnZZZmqNG4Fw6NqiWU5WPXeHbg4",
  "key4": "4zX4t9oGEoiSYJZ87meJd2nkz9863iPBno3sR1rirwXFqvb1pFe2omPRaRxXhbmz67wDHPmaSo9RfxV59hvRDsEp",
  "key5": "2N888PbuDhMqrMVVfAJRtPY93NBFgr4zPpMVT6RwwZwAdUxu5kXHMzhkR3TUpUux9ip6u19Q42mj2h74RsvqQFLr",
  "key6": "5L2GUU1dPgtgPDZapJ5q7PZaXbHTnkxTwrG4C3MA8Xu4Z7TLUPp5EMegCZa9xzd3yBjW3HFqE73pEiNpm5Q4Zkxw",
  "key7": "3WwBm1pko6kDwxb1fcuBr1S9dhXUQcLtxQW3BgBvgFu97gTm6Q65jtHKVeLVog22FQPfEXHbXdHoUvvMQanSyicf",
  "key8": "4av4rX1bJXt94iQ7UuEAauXoKaLC7dyTY5YzkDpbTUzZP3SnCGQ8dodJT859BLFePS559GSwcahsJJGaaJkC5eFZ",
  "key9": "2kUKqQkXQVA9pTwYduFPiiqM1EVRZV5oRPgqyykc2FjBUESvoSrpwQP9wJW6KSwSrGbugDPu8392H5aUYMnYmWNp",
  "key10": "4oXxnUFT5edyQMcRXSD4mYykBrxyuH3nsc6SWwQvc9RJ82W1i7vDDyDBR43sU3rMA8pTi73y2brR6qvVzaUvS3ci",
  "key11": "47b1GNTaAyWkt8KWQTadiWeH9ogfDrx5TEZGfDKmsJ5czwPhfxBBsMC74yeJry7AryQSsLeyPV5EizHnq1z8eGjb",
  "key12": "5WMwByUyCCN6S5Tx8xFc4WnAdHw8AQjBSSi4vawisgoK3zPXJo9PQ7kM9jkpF4FmJv2VZydBv754jgg9Q6HjuGLf",
  "key13": "5kpYEQG4AwZXS7WfvKvwEktxkFksLbpUvo2WD9QkNY31AWWmrRpCiTJRJePcQmZTyXHwes1i6VU7oQDGWsWfnEBz",
  "key14": "3QMVpM6tUGyoSQUcobUSkH9nbzo85Yac5HHZpyGLEWgLNioDv3xwREDLCN128BL1Rm6Ko3ZtJiNWNWuFJjKPv4Ao",
  "key15": "3wBjPEebiQvmcaizVahMBmcDfqqWhdgUiHyRGzRUSYhuRv5sKLSVGcdzKK4bWYstZa5SyerQXkDkz5keNt7QoWdi",
  "key16": "42oyg1woYBce7uSivVwPMr9jwZjEifewY3X4Su2treVXBVAFfHVeRCVPJRJVmoR4tZMcSZis2ABEZNwb5UJdjJvw",
  "key17": "2WTYRndfHGJiBWS6RhsnECZLppDz2zRNnPvajiKTAXVUFvDE6goVJfnhVJWnr5p9NLXaJcm1pZR73dTHMExVVe3v",
  "key18": "EGnjiCnZG1TnJfbCcbCv2aMMLbrwVvxXWwgeDfzJxxGrFUmL2HPkMyr49t38KEzCAuGriASm75NHmKP4T9CWhTJ",
  "key19": "4R9QTC9BKhqGvWa4nzLT7S94fs1CxzJPTJHZ4UBY1d5cHgjzwW82UgGtim6bxWGAjYj1ct8nJBMAnxw2LYAMeJYG",
  "key20": "5bjrYAuR1WUe9NGS8QS4T4GrabkgcMsifA2a25ULQsDxGi2pzsDdYFGp9yUAvk4FmxyZd1fYExaVqXvyMQqMnxjG",
  "key21": "4YvF6BcvmKnek3wnS2TYpvYS2UVojsimwWJhzxTmmFd1YKV65obiHCC9nKUS9TMkWoTJ7hsH7VXsZMiZnT3j5gZJ",
  "key22": "2iDdeCHYYwqkPJ7NkYh9CBxzxtdbiXuooYEev2wYwMLk9h2W9mxWKUZBCgbRvTqqUJ55Fjrkf5kPHQX69i35rjCJ",
  "key23": "4vxLCsC7xgCDVStwvKusj1FF4ww6N7tAA8EzeJuAocXEc5M1bWAy2Q9BENHpUfDtFXkweAkm1qtGVLqNLPY6UnzB",
  "key24": "3uLAj75G9htnSwVxcvCc5RVtyP1STzWv5CXbmNg1oUTLpF3w4c2a4ED1ebYzD7Z6ZvqhTUMLrr9ecPry6mwa9dfb",
  "key25": "5o4arAARK6zgDRgRLiTioan4XsLvJiHr2cEvEkjg1zzGEr9Ydk8FgCCLnx9Fy3nYdY1UAePLEnS81LkBSJTLMBrZ",
  "key26": "ouDkBypCsb2N55TM7aF5y9TLJ7BfpN9XEWCTZzSA9sjmaSWdG5Cv5jsL9PxttazLPp53L4FqpXa56rhhzQ9P98P",
  "key27": "333LNGWchCU9dcWnz2JmuYSfuxoqMLynHad1rLnNBVmrUWe1BFHPA3XZqBKK4ChphPV8Khpymm98wRCrSqNWN5zu",
  "key28": "3v1eswDUfde1ovkSZvRaew9gRQ4aLnxSeqxcrf7HyhYeAodVYDWyJTS4DBXdL99vaku14smzBsc3KCExzibNDxA4",
  "key29": "28BEgGeFsuUjgNgScJ9jCTv1ZoAiE4gEQGbq7HpjeGPesZ5QacWVSnrQiwj9GpTrooJ2WZpHuLadxzs5r7P9Q2oa",
  "key30": "2DL9EdCaBYNw9FmL4Qo3meLrRLc8yTMAfC4ewjYUT6AHkTRPNCHWs9Z6WetRFYszSPTGfmsrHPDgbszVoSkGAgaR",
  "key31": "5NtguApbL8YW5LYUAqYaqEifytqdiyG2MVr5qfYpYcxg5s4H9tdHyGz7gLFDxHc1fUSyKmJVHXwva686dqi4xgBK",
  "key32": "EHEiXNKHhDBuyXCqTYpC6n5TMK3SwVDKuNuzamLAvmGix6BfAJEzaJB5hA68zaYRSf4i9mimZsXFK1c7npXWWPT",
  "key33": "ZnqEAv2mTU56HJp5f4AGJpNjHpGM62NJ4LaoMGBgVDDATeG6H9mNHTTEoPoe8JUFzwswSzw9RFxECtTZymMkivX",
  "key34": "5LLPk6zv7ezeM4qzZA2chr3wsMPy4EsmM9kPra7wy4eEuGdXSwPLX8d2VnMuXZkmY8UCzdYuAxxKQKXLAeMwyh1n",
  "key35": "2UGTLTpd6S1Q46DCrqc8KtNb1KqViRw1iqwREGRQQtsZ4gK6wmM5V68wExN5ALNiS5ZFQDkZUNLsZDUTVevdX2j5",
  "key36": "nmMdpwoq41R4Lh3jjoYMsqNP9mXLR5rMsrHXSrYqoJP5w2DQNkwmX1f7zoi4hJxGrtPBjqSM8QJmzk9Ew5AT8yv",
  "key37": "4Sp2mtBZr3XVSDseoFfEScchmtPoXHZT9uv48VNfGFNBLusCMHeALjDpdeia188XJBYpsUwUzLQSwDmLTbRSb6FJ",
  "key38": "57VCwbgStHPFke6uzjsj6yEY2VrHraP2aqt8WAZWJKFfR6vU2GGdczUYyMm72wJ4r6br6YRY4XVNitd6atuuYJSe",
  "key39": "v2AhDypqZsjzH1u42ExVbWfnvQVmJhRv6PQt5ioe9EbVybDsiCKYpcivp4e6QKa9QwCHmpMcXvScVsR7dBsGEyW",
  "key40": "3F7kH2vvKrPmFoSFfUxqhe2YqVgixNqFeG2PbqGkP8nghsNBmKfpQxZK3uEvUgoFWo7YFpeUMY8c3fhxY2FPWjeQ",
  "key41": "3EHGBZiK8X2aqEhEbJeZ4wcvRrgbUurMEmrs9fnJVWqnRfE8eakbdiUFC5DNbqTgDcZaPKZFdr7ohD98J4K79525"
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
