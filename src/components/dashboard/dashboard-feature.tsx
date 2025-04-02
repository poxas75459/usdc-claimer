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
    "4MrdpwusbVs1DFVqMEh4NaxDhfQHrBdoD6aa2zXf8qLtPBb6uYTZHUadu7fUF2b3nCYyV2rVW6To6ujUchdTqN4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7WYAmKcZ9oZxQX5pBrgev9VNG4xUsYqBFcppDh57bhMWmb2NhQE1jxevKdTfSdWUYDASZhwzqgnQmUTqTtCUqe",
  "key1": "61Uwx6L8qQ3BThbmJwGFiyEfvBhNXrLr9ZnKiHkZBLHYabr9Uh4Jm51YhyB91Wuesbcg72kBcvAYGjz2pug2FQ4u",
  "key2": "5hvfDqUyFWQui88eFg5tjL4xoR4dD83WKvMRaaLAywYbFbQnmg8KiJdWMqbEnJCbQvmPFKvMtbbgBLrnvfLhqC95",
  "key3": "3gbfenEXQaBzHEBbvmn3otxSUBNXiY56mWSytqrHQQrZfSutjFehPhdWSvkenhMRYiunUoZPypKFLUJYKT8HiFpa",
  "key4": "5TgXXa7k1YfKhmZ5brWVtfBQfyUywPGFCd2Gu2MN2ci6XtE3tw3xEqBTRtuR8N7gKmmceRhvFA4kZzRwHP5EJmpE",
  "key5": "4X7bhn4MtJfgGS4FP6EPSDFxAEZAKfwF4Kdvnth7AAoRQKWfaztWYgM1mxj1uWXTsnDcHPsdYTvi6BcV1exUcQx8",
  "key6": "49su6XkZj55FJvtwrUkfG3xFqthGrbw4TGpSadvctVb5b2u7PwNkPY4PNCjduxJp8JPsWNByejunRWwPjzGJpgrF",
  "key7": "42sTnob8ieUSJ371GdsuUQzz14cm7zAE5r2oMA1hiTHNoq66DxPVzcdNgKS1JEtsLgTppafbS7RLY8C7tMgPQkX",
  "key8": "3Vrh22vQuTAibTYrWMZn1PYnFiQgim17pUun4VARM7RfxAjQDrJWbvAV7ozBUA8JJ9pPMdnofHPcYmMQmhAnyUVw",
  "key9": "4hzpdVvBcjP18AN5PaKkYzv6Q8pR8gH5GwcYsz6eLb8xwxvopWW2tThWWhUJGqcNitvSxEX6UjBQg9YxjUmTQzDs",
  "key10": "4iAUbiqGAutGbsQ96muCkhDuXQ5mZz6DbJqiz9iAf4PejA1GeH5BKsSnoNwCrhzgeNdjGp6nrtyzmriiwXWMUeBP",
  "key11": "4pqmKmoDacUUC5XxfaioVxx85hoFM5fSjdW5X6sC9CwDsZxgQF3UdydaMomLQyiF5vcGU3Ydn46MxeJpiEsi9Xqc",
  "key12": "5FYCW9qHsnQ17EnDLhpqGSvCU3Ppw2HqBVbBY7gEjgtgj2bB2uVkfgbXM9Dk9St2akQGzDkn9rnkDEV17bUTMg9V",
  "key13": "5TBtVBf2HTdmiwEWtkqDHjwBQmYUHdFYoGEZzjr3Qn755mkg23VoChL4qbAhDtm3R83WtepJScoZp6QdiV5DQKLd",
  "key14": "2ij4HMSsn8EUPD5fse6peyH4CEquMSzSw4qNt2im2LwLQVumJeU4MqdWZRYbgZaYYTQZbnxS2zy4hFmAUURwfrVH",
  "key15": "Ydgt2aKUE8rFZo1DFWsuRSMWA7uyw4aW7gjk5PxmHXmSm8N7sFtKMsDdNgjwqJGSoedneM2FXvJBDzLEiwvczuq",
  "key16": "2QGkEWApJQ8EjuofTeJddty54CyWKWhuuXAszZhZpXSbmHRhwiLDNJevMZBJWbDy75Dv2V8j8nBRiCGtY5wKFgBa",
  "key17": "5NDtSin1AC4aYzJNoCCK9zQTm9KRALwfTaBbKghJWvw5m3SLdSrLJqLYJnJabmhQjksdh9BApa1rz5ZYU6Hju2cs",
  "key18": "2ZcsghrYcjwL6wEnFmCbrgeg4dLGsFMo4U2JouibudVsb2KKDQvs6gmBx9YC68afwVk7dscYr3ZnrxxjXmnx8BDd",
  "key19": "3iv5bHYaZSFVvT2awMymesxB59VfwRLLatt547oFU5hMYNErhnyUJ1mV3s2kuZ99LV2mpQdtQegYEgg6ou9SR865",
  "key20": "t2qkWxH2cQ1npeYZVuV6RvWYW3mPpaHSH7hDX51o3w4Q3aqXZaFvPXwzMPKktdRFy8y3fipz5RH7XXkjmnhoW8z",
  "key21": "3utGHv45FcdqcVC4egZwq1SUyRikZ3ANVRycCvmCfeSPYrYhdPLk9zCEPBQ5D4neMxq8LA5U8tVNyfsZpTCKrdtn",
  "key22": "53AwS6BvAZKedBt1M6vCKeZwsGkTRrHDnnY5J8uVoMmKoRZzmggR6cw5NQEuZVUiSQCds2XxAMMgP4bBks8Q4p4K",
  "key23": "4P1sPbHFUod2LfXmrvxwtJxvSVuSyoWrsdkqMhcS3obiJpRsZrsuNQGNJb2872Bp5dsE1sxvXDnx3bPkufVgKmKf",
  "key24": "EsYKLNr4MMsqPMo4qws6jdMeRq4JwaDw7cWshXzU4htPjjYVFPbYENZ6ew2fqAwcDxUDEnc7fWTrDNRytWPJC7Z",
  "key25": "3aCEuDhrqUZQU6JXvBubau7mywH7MTkuuKRswEA3tKTT9R4CS1c1wGB9HVFD8h8tktG2MPYXNypDrXptNJFdE5LC",
  "key26": "34ncRQzah2BWR5TEHkZ98jsMWn9TtxwAmmRZJZEWJLHYzp11q8pnP2deW9ay9Byonr6R6RQgVTTK4MfrMY1xkmZM",
  "key27": "57aJckrjHZwFAVTEc89vAg87Y7EVCy5RMyiXNYvZ1t9EyY7AdteF3fDrNHmhM21PD9WvgQ83ZDqAwEqSjQsGLL9c",
  "key28": "2MBHKEW6K3SEQMJD7WCFEHjKPeYN3G56MdAnv71ASW93K2XzofbVAcNLWe6nW7RAwdLmifxB4qVJDUVUbqBoxqB",
  "key29": "3Kk22YyCBYWDoDhpjs2qBpx7isunoAiLrSb5N2MDHLyKDATT8VB2WDz7G3R61yy86ySktuSgUSXrcM6px7VfgQj6",
  "key30": "2gZXqR8wK3vRQGbcvsWYWJ76ufQ9C9bndvzPyGnizBvJ93FxPwNwSfgrVuVU4NxMNgb4Tfzt49SkFcUz6EyguFdr",
  "key31": "3JCihFcn7ij74snWfpi7hPxpSYLF5ktXyTs3SYosMpGenPtMwJ23RfGX9UmKUxyDwwfvqaTWTfoMCfKQdz3bPkbi",
  "key32": "4727S16hE3r9ZtXXxmyX52DKoaLva4G2exkQtxjmNfSKjq2e9wrpfWbmdz1kbFdVSmuwhU8i3oNWkJcmY4huzeKv"
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
