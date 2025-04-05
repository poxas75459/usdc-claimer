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
    "2LqSaHxh9RXrDGFMGipXSMaTzQ72qGPGT8NHZr1pDUevNjfN2TMQKqJxiSA6QmrxZBGgo4mZz9v3Lqz6E9yo57MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NaAU8Xf6Np8qDRwvByYDcHgCd9WMtKWp1n8BPeQ4NFE5vdbF8j8nrf6wDgkLM3nHJpWUHJJWktZrduJfxRozL7",
  "key1": "Gh3vsZ3MeXf55hzEKbhnSWBP7HBDPohXTAvEqsu7BmRKi3Gef1vxUqcyisPjfX9AWo7A4WAvvGiKheUvg3UcsmJ",
  "key2": "DeTojqKsW1WpsqvhEHeQFzn98NJpwoSyQZGyV16tjip9DKyVY34rfUfcD1XGiBT9eWxSwTFUx51deatdibhAADA",
  "key3": "dLAHnUfJXB4D6sf4jSGxg9oShz68emME97tmMS1NonBKNJU1eDqMszsCL5oX51VyrNnNE6VvtU1suKipQeANJfX",
  "key4": "KtgzUfkPf72wNm3Y6QHPbzRGigHR8cayMoHnGaT8nEVKpxJs26Dpu49njdiGaqFTJi4wNBF46FnoC69ym4TC1wY",
  "key5": "4BAh5FhvthGyeba2A1cEkjQbqJoHrUToL7updaoNd6oQiWyDeL9T9dTGi749nZho93f49u7Dhn8tA7Sj4EZ9tUKV",
  "key6": "26qTdnGDr4ZW1xxydngWjXbvzxhoXQn5BmwYRix4MhSwzWtmUqYauzjNCwZ4Ez8XkWSdmh5Fbk9kdeEhuovdJ6Mx",
  "key7": "5uQY6VqbaW2XgTsdnuGYxMYznAdZEFMFbBme9A8Fdpvw77EcCS8FCjsh6ojQ6BWFZBkgcWdReJspFg8mcmJKH4av",
  "key8": "2quEkDXDJHWxwevRPHADm8e1jxfww3FTKVa53uDstnmJ2qZ1RYSQihRas6QsMMHFH8YmT9k6rNpNw5Yi7JSs1A7",
  "key9": "4onsu3hxyFSHQmKxQXxE6taLZsmYNfxKym9piNivGjATE3SXV4xsFqQxzBZ5V3YwXKyxj2HzE7zXsxiMqwS5y5sw",
  "key10": "3kJGRiJqX2i6zvZrUQ67osjiNB4nMF9SV9ngDE5Et38GJjFiaieVXz3Gmpy2GAJ1B1rQXji5QyeWmLZ6aQnNJPqG",
  "key11": "LDCk36XUGinjaUjtUzUKLZsyZoeKu9CKrPExbw1E4k8UsmGUGxuEqPAzE8Bp9vt5GbC4cjUy81f3Qw7Z8cQji3e",
  "key12": "5Z8fp3KxXVDa6ocUQyteNHFsxBdaCy6C8FkS3jMR6PuLFPSHREjx2XsSJvpSPAwXepE1bHUNaM5ZiQYmsA6Pbwid",
  "key13": "5QoJjMdrTWGhn2YhFH82XZuyj5u5dVFuS9Vee5GjwkJL1kRxtrPsWKdB6wXZahwkdy2fUx7NLubWAfj5PrXDc6V5",
  "key14": "3aM8BrfBtaLW5savpJxHHK3qULV2ty2J4qFLjVi7gkX36v8b3iZb3xcw6qD4J7Hobz4h82mdjPhYpaf9H4RuNBhW",
  "key15": "4wEoVUKuM7LahKf9eRWmxutht5WYbhf6R8XsuvYfDNBajEocEbxfXrGKGS8tmz8NnBmV15K9UThJULNRr8TBHAJH",
  "key16": "24khNm3dkHwgHLe6VKFzZT9GJN4YfufK1Av8nNrs1FjUmYCi6GrzrP1oUuctboyQos5zGLGdQape2rQC9rqk1gK4",
  "key17": "4JmH5VD758oid6y94iJPmAGZud7wE4RDhsAdNuZrvigX8AKYFZgJChoWir8zbsuUrcBRnnUnbuw1TVLuBu3ii2wY",
  "key18": "5NCfZV38JqZbouXWJyjKL6twyhPVgndomuc4pZrZ7gnAEXGyhetEtxMWaCPnEXyMBJQ4mdUaBtmmFexVjNstUohm",
  "key19": "5kw4rfHMmEziwwZPtLCCkacTf9hmBg9x6sXjt5aXhPgz7KCqsCKJskhVANrzG6czMTrhvR5ss6XRHkHG7VP996hQ",
  "key20": "4JnnmP6K6geh2VVahmuThfShZkP6bFDCQo8WNiedugrpk9BuBdPnj4xesvdcoXEKWDLiYyETLxPWYka6JHr7McR2",
  "key21": "4p2MBY1YVGVhneHAQPnHdcoGd7x9BY9ajtWxPUmkKTwku7wDRX8igXpNu7a4X7GybEppbzeZChz2KGXeC6jv338q",
  "key22": "xFhXo8iTcF8ATXpVfpTtN5g7eybCyfMLkys3wx3mSLypbpGi42aNwF9yZEsw1wTXH9NHcxFRs5fdAyve99dneC9",
  "key23": "54jNghrnrztF5z96iaVLowutomTtdrp7btA1qzvN6GBSkfkKeLTRgtrGMZagptsBGVETyGBiBpPsDGdxpEcQH9Q7",
  "key24": "2tYjUgLuLAAJkXQMaw7zTu3nUpoNyEcvaoP42GGDjP42T9q3xtAQh1Zt3vWdbWMdSTRUvcG2UHVviAGiaC7ccik3",
  "key25": "3BTtunV93E49meEAr2aZjP6Fcgq4hCikfksaYnvcvuYm3KSnpM1JG8sVcKKpZtX5vcVFacJAAiTPkFRTmqZL9SNM",
  "key26": "5cmbjxuBFWBzhi5awWREUmvbiQGd1arEGAuQXrFU8Kk5DzYDkShfgPk1xEm5nc4V3jpUd3AbFHuiTMGWTHKVHdM5",
  "key27": "2PadfV47kk9vGZQ3qZRGVsUtZwxLX73dF2jd64MrVgXRUpvuu7FRyES85ci7zowDeVhDVmtvDZDTd5qAGfSRBQdL",
  "key28": "5fa2fPuYNb31x7wS69Cacryxo7RDnJg7vgyJ3sGrf4Tv11gL1vDWPdSqX6vRUpUvtZfBxX1eMTXfn2ug2cv3JQEF",
  "key29": "3PvknXhs6gcETUWVgEm3izfC6ViEoYWbPATdfovsh834AsVm1jQDF1uTQqby7AwgWgTtrNLihX9i2zstRp2Enc3J",
  "key30": "3cWiUpxvmv9jeTksXNqKzu3RdijkhRBpjzHY995bAzo12biVNU5xwEEbyitN3zqwsdDTT4hkUDnxJUEHFcCK5eXa",
  "key31": "5yfVm9KTvc9s6drPzUEgDPn4TcW9XKefcGmf6n2QMYSGaBQgNZn97gphuxEW5gkFsSErrDKmKddT8Tb8tMN2YLUK",
  "key32": "ZdRUtwZ6gbbEwJpkLijEJDcbh79C2bSUoG4ceuCua1GK1K8b1HTNhkiWRR8D8PLcMJp6YXWRTrg6w4vMgQtvDgu",
  "key33": "2tBc2Qu4rC6ehUujNbopwL1S6Nu7S6hPRHDZeDSJBBK68peJZpvgwFVPsQHpTi8c7eXY7kw98XoiX7nEAXexypML",
  "key34": "5qF4MxUhxnsQnL3bRMcVYxxiW27khjb8DhHK47jGtoEKKD2tAtEuYE6jM6m84ebqtatg6vqxEy5BFjobr4X13Ddj",
  "key35": "5Lq6x6LYhdU9C4ywvanu2uMfBZbUMkoSPrmASo12yCiaFCoog4X5pbkfe2bNVRRcuwvaY5HKN1azDSr3NDDN65QY",
  "key36": "4dAkfU71pkgUvKj7qDsRqNJKBZnfzEYTbbeRfeNAcWaaS3sT7sQXamjVoqWYnqhi8hqAbZsWf9bFj13DrTQe6yFa",
  "key37": "5ktpj1pZcaPvj2Yh2pbQYjzwhR4muYjUpanKedaiTX9aYmpRrBMdbmfYtnWqdzS2KcUZC7XkkzUyTwfJ34sVXhnX",
  "key38": "55izDfcN7C3UQns7xLrFBagZaM6euY7x4VNr7G2ZjLpbWhZNGY6wzEtnBmpdsL4DbrQSiwrYiV1DPwtcVw9depUt",
  "key39": "5EAtfTorS4f2CL1L79MHFVdGpEjWmRC7TpjeFZm6giFYXjVgsRHvCzP6xjn9zBtuvHRQ5NsCodMhHCr8caDq5dAF",
  "key40": "2Rmfmc64XmqyYkGb2h8bx86GH5fuUmyDu92vW8rULgUF6VUVQcVeScr4zBCXgbBHTrYEz1vReFwjDYA4rPmTC2LQ",
  "key41": "9TybHzNmUWroJHnMtofLkidMtTvRzaLUBArdP8xA1A12b4NxfLLi3vCjzuWjXjRVqufqQ8ECYRXAsWr5VLNGVAk",
  "key42": "2veWZJLbPPDTifWqBrgT6EWPJx1DV274j6t4jqc22TFcRjSyLqp7BqpV6iJwGWBq6BYeDXkbkccY5WUB6PqrXSH1",
  "key43": "5TQrk6M2FQuYDLVAcZHqp77UknWwzXPgF7o4Q3UPxLBrzcEkZf8LxdZQ4pvWBJSogGX8dddetqoLmo3aTgxat1S5",
  "key44": "YynNn45X7uSNfejveu8jEScen9Rxbt4MC4NUsYqfwoVRoKrETGfourkvoY5XFD3HSJ4uaTAgHoaKmfcgTb638VJ",
  "key45": "3sKzvaoCRMwcbxDcbY5CoKf6RD6HiDJFWdZVEXSi964n78aVbZWG8WNfWVbntkUZihNoGox5yiAXthYbDvHXh7yt",
  "key46": "4HAA2jHBpvFXZFN5ABgbba5cNPGTXA3hx9EHTpbZSvwjwTudmfRWqd5RBqQexcYJtgE7ZJvK6Vt8x6FbYA6MrvdA",
  "key47": "2b96pNfpxZ2RSiwwpXEn7vg2w3rUccXKzQkWHEE2oMeojUdiq79PypeJe85hJjaHnEhGBS8tNfKYgLfkJJHzD8Ap"
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
