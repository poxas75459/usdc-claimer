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
    "5bkMRmLX7iZcMk2MBo2hyZGWZc5MySTf9Bs68PKTvK5VbypPiuYi7zMWMJLRvBHxFBykPHBp1qYKaPK9WJ9jtWg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Qg7vc7Eo4gXwNh3ZqQtgsAK6rsoeCUPDf7y2boXCEHdSGdysWH8i1UTHGtw9Dzv9FG6L3x64DYgYAhnZRk9KKX",
  "key1": "ALsKynAxgvUULwvX6cTxngFxTVfxRKimLqEXqk8kujYLsWCUGnshTmEW725uWd7h8JnZAcLDhcAuQbAneKPsYS4",
  "key2": "3pV9yGSvFDW8XNxoLy9N9UDLwiABoqTh62NdDQ5b5Beb7kbkYBb8UWiLdgRV6dW5FQpPq13h8dmbmmgNxw7Eaxu1",
  "key3": "5VQd4CzV3UH1YQsNZuAzM4UxMazQRo9y2jeCPuujakVC2Ekg1fQkLqUqoEWdWnW5XusiR9AuscussMwSDGq1Hm5Q",
  "key4": "4RDK6Xey1na2T1ojFzy22825kHu7CQsqsN8yQYkLEDTi7Bp5tYB7NNHAXF6vxQW3CkyspVCsrJUiJxnJqc7BBwtE",
  "key5": "5SDooUvzyMH6Cz3M74kY4JY8ftJWndCYzPSyzAnkm8q4UJfwZcRymDCCKwRH2KfWZiUhxzZuF8t33Bp7krVkcU3c",
  "key6": "38cv74nV9CRrbAgZ9MWZ4R3pEekDAEMJjftmFz4UaPkdDw3TDAMuTHnPtDFbPZoHKW9CxofwcK9ypG7R9Trw1BHW",
  "key7": "4E517Trf8sjwGEryQydkCC94HywJpW55hZzKAeLLwnz8DnfffF4XL3dqPbVSNRDCgqKNSZNV3rTmDbAN1UaGkdmH",
  "key8": "4cjGib6rxoH6NCYP2LoCKSZmHaZV13jTXNXympY6ZCxXBRTsV5xEBR1iA3AeugcfFccNuLbrfjrriMFhExBPn8W2",
  "key9": "5wQmWC8BnUHa3vEH8QJyCEJSc4fRbJzoWTDq6pnyTBmmTQ335E9YZX4jNtmUrZnyVZ5KJ83yUyqeoqVyhRTAKexG",
  "key10": "3j81R6gL2BkEixs6KTZXihSLTgSGv9yHtSXNSGdtDu9NNUeeUt2zyP4p9X6q2edNCcy3veotZ3uTh4JdjuXzjWDJ",
  "key11": "54Z44FpyGQoZsyWVeUY9QURxccoAWFR572qnUPrrs6J4rPEpGrxyahV3hh2fHLuig5gMzD2534vidA4y2R8i9P14",
  "key12": "2kSms35SjaTvFS9My7nTiFq1tHM7iUC3yXLvWL1PK5S652ceSEPido92bZHQCW2arVKeMeuH3wsXn2ogE9ubX5oF",
  "key13": "3pGY5pmwCyaasbLTWzHDK5Lf4ut92h1N4jSxnnxUvuiBWPtiBnjmHLXE9VrcrbKuGT7fEMbYzvBZy3ME7Yg5V43v",
  "key14": "48eHt3DgmiEwNtMSbTRtQ9oUxb35asWifBpDa1pEYmgEiDXzhFYjUt4ppd96UQAukWXmHhPQKxMY8XWcpXVfTrAe",
  "key15": "2zfGubGGrLhCHWod2MBWAATAVhYan3Q9Jvf7LZ2seymoiT4oXrNYcFzFim6bxZQeRAACJ1wEGPwdFxeZE9e79YsJ",
  "key16": "5bnuKLbQzVq8N8aFowrcHrDUYS9ptTktAXvwtsvGKoDJKmt6yiXd8NBZk8Bo1nLbjxFYNAsW85MyXcH4Z7raDihP",
  "key17": "4yZG39fWgozAZsoFDZ4XgfGB98deRkHXWbBEL3Q7MizMzWpU1PZbWKJY2TyJixeQP39QZKtC7wUvgDXJopCZh9yP",
  "key18": "5SJEPdzU3LwttoqbAyeAMYDGMf5gtTEMdhDQ984LJoNDShbYqvTGTwknV89VQZxTeXSoCmJJgcyoKqDWsaECyNnZ",
  "key19": "2XL31w8cnDfxmT6bEX4MCDqLKuak1gdYuCj4YJAEgnLaWqRAqjnNpVAjFaX7AJvXwajEup3rfQkr1sXqQXcfi6LF",
  "key20": "4QVVXCfNFo8oAeV6Nd11Dmq9wjTL8VUqraguCvkC25NjWsrVXJycL4TYEVvYDoH7uHjx4Qie4DcvA28PXtt7v7NZ",
  "key21": "5xvsuLDLJNpkobw7nXUN2hyEUa5e4Snc5eCyXRExLzLRw4RbsURgjENPXmi5MGUP41vpzmBCxqUs8F9SJohjmdqX",
  "key22": "5LaUdZkVAJfmvuBKP6WT4FKLH45jt1jLg9my8jq9HRGG2fFXTGuS7ZNgh8ZCFLXPCQAuXS5VxgcysZ9m22hH5ZeL",
  "key23": "JTMMR4axW5GRHdMZdFvjvQ9pDbpHuAV1eXcjsk5r7KJ3Fuak9hBsCD4HmSp8LehE3Y1YUx8xDu4iSCdBL5SWKze",
  "key24": "2BS8QTVEHA6abEB16xJzkoBnxbWHeqmpvszdt1a7qQYJYV6mbVZ9yhosrsCUWEhatksvuRU3f4zuLnXQgtgDXVVU",
  "key25": "2sw7AqMkUGCdt18RSYrAQJU4g34x6EM7w4TzhhTB5TGwNLxfbi1QKnAsMHsGeyMPBon96UtN5hNuJ66JSDFsH34W",
  "key26": "4zvKveKEmsNQW7JecjVfxBPFQrqykH8SsNh4mfVUXKeSWDhwcRt6XGh52s2T8P2jd3F51QWWQ8XTCHd2cNjBfNGM",
  "key27": "Uk97fHCWJ5MTbUEUn63N8Zh2yQ7ghnQWB6WZEhTs2P4NweVwnu1YHVqogvH9yLMEnPoKkr8B6DgAp83wfKSZ2sY",
  "key28": "65Rgo43kMwdRBcUP3dnrmJ44rUsKDjThKRzAtxotz51HBYYy4X4LZo9gRE6qR6q47qDbCC6nvcqnf2XvrJsjVZXk",
  "key29": "2GKueAmUkAeYRxYqorVDtd3kgrr1NQ6h7aY6wgxcwNxnCpjgNqvLRz9NYBDevvWtP5b59ZzoCwLR9TcpSH1LeKAR",
  "key30": "67aTc5ycMgybHzoMp2xPq72k8Fe9ZGki22C35C9rCzbpsZGLYyYurZbGrvuf7eYcqosBpywDDwiNCrcRN8gnYuSs",
  "key31": "58dpCoefXa1jz2GnTDmCYL3js1fLtuLabRyvL9siQQGyqibqu78ok6VW5dxnWdbe4Tq6g62T6KKJTWmzN17uCPMq",
  "key32": "56xEJRgqCTHwhdmXcDhvZFC1ovvhZkyQbYNXBmufK6MwSYZ9f6xy4wWXXqTStuXp949bvyCLJ7JAD8Vw37AKq2VN",
  "key33": "5i7YhXiPEptpBhVubhoxBHUdEMKHPXGHgVg57F4kNuGzdqZ2dfXiiqLDyNa2WyAzAJshY9xvTS9ALApVQc2K7S1T",
  "key34": "nJcGW8gth9zPfTeaaiyEgRntMTUWCPmXVfwuLLuni9bcuNqHXAjp6Dw4QfMuJC7hQUJ4zVx1yr37cYauvUoF3mD",
  "key35": "H8LhPb8oeoB3LyXuVaHqkFRxjNbQEGhNRz895e7M7GbcbRo4Qrxu9ZemTjkLhFQbRyrCnVeRkyNUtaEPCZ9JbXn",
  "key36": "4t2TGPJ7ygEDM133vuRhmTvM249mYHgY1q4g7G3SXcXXGzBncppFiVV37LWdVyD7owGKeUgQ6y5qjSkLtTXdNX2z",
  "key37": "2WRkCYBPsKK5rr6ZaXF7KbVAMcVKeELVrCZJsToVZ6NhxMxiQBJSm8xi6JAVbKnPyWdB8geJdrZn2qSKsPd8pM8n",
  "key38": "4ukAmpSDXbSFxRoRCJ3ht2Ub7YG5sjKQrcXgqoAckokGELLq7NaUCMia2PeEWAYsNnRZiaohSN5ohGhDwrZMTutA",
  "key39": "4Qtv7SjQPfTdVpErRRD1QEKDvDV1wRNoQCZ6DzYhSeR26ucej3tmLUkwx8Gw2cR2C5RBxDAjLC4zdXE9uPe9PCES",
  "key40": "3i2R1ihuRCLvhatEiXb64pYxQo4JrG3zAZ5bGJbhxCdaM1d4RdvrsGP5Q5DxHLnAsCW9BJXqK2x9DfKkz2JaXQRE",
  "key41": "zmYEmKeg3GmShMXKqn1QkDPASm79zgYvvKYHUgYqQu3eoqrMxmU8cnC2qFNH4QnRRxEi5mtkyQJ6ryqCZfZ9dXb",
  "key42": "26WtrjuZwKQwiTBQD7LUVXY3PfXgSv9BFSHZQrXMcBRvt86QrpMLKZnDAnjUVyeCJYzpPtELeZdB3F2a1RKBJwVS",
  "key43": "2sGsBrFa9si2VdxoPu17hnaYS8LPLgTrhzX91R6MJ7pdYL4NSgjaiZcNsE8aV8w3P2nadCZVHSFJxcdeTkX9r7yR",
  "key44": "3xyykZznoMhJLSWNi7yR8mgz5qvY3g7bzbQMDpAW5sGbTyCwTGb5WSP9DTGibyJGXGYMWGF2uohZJGrnYFKh4BLQ"
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
