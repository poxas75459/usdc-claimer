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
    "2yPvK1SpKnBJvuF9zLbhs73baxkU6FxbVhN3icAR39ies3yTMirxne3WVnfdjr7VmLfvUfoFohSS7SMvWujvNC5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CFLbB4K7ExMXM3zWhDs2crgvC8knytc4n2txBF5kqsQ6k1Zj1XtUhNCApsgAhcmtjXtiNs1KAnRVwyMPRGS2L9",
  "key1": "5u5hKWueiR3QqUp3hKvEgFiZ6vquJBCjYpGyqNsQkGHZTheq2Br97JiJ7rS5RjcbNYc6UmFZWZf6jagTQvYxzuDW",
  "key2": "3asjmg3P3t3cRFNRagLC9u4gDdgzCjPTEL82tnTCN864D2rs6o1bagLH5Abe1LecEoo41TWfuzoT3CTy8UFirGto",
  "key3": "5DRrYhWnqzrcdbWrVs29whWsGMLZAWCvKZZXMqCWiGGHPo39ub82ggetAgrqGWtveN29L7MT9LnPxJmJ2FhoePDV",
  "key4": "2D3H3ZxbooTHpPHXUuQEjAnwbGZQput4q5ux4GDLDAo5qtFa8sSkYtkPeM1xaJuGJb6QnwxvA5NG6LS8qCmrbqG",
  "key5": "5ohzpSv6ULRTehuy8K54RcdBKrMavp5hSbJSguYRjmBfjdaoy13XBrmnX1fNoPHNWiX8eUVeENZkqRsR4EDtwVjz",
  "key6": "2QGn9HhK2jGNzZFxpZsfagcA7fPSTfs96j8SGzJocjw8GjJPyL3ajcxe17b6sb35puw7XSV6nFf9P5zMescbZJNV",
  "key7": "mdYLN5Kn7wRv4tuXDKRwYzDUiPg1mXmRzvLe6dVdNvh5wEz6J5FP9fp3BeZRtW2WkSwL6gjN4CBa8qULbav7qwX",
  "key8": "4Ma1MyDRkBEQMvD7oKZ8Nnb1AUA2maZN6CnMnC1kCyn2qNZEyyeqjTFvfCgN4mYqWgvHdSeaESPb7r9TsKzaQyW8",
  "key9": "pN6ELDg2EsH9MgFhRV2Do6guAfBX2ZdmmNmFnxXkLRoowr4dWSZQXBPNQkMcm4ozj9HKku9FnJeNoG5GtURWqkK",
  "key10": "5NMquSbhdgGqrzaLJwPt2zAkkK3EY2fp94BN2hV9T4HVkeNW4k4Fhxe2bNND7SkwWKbdNesVRuzmnDQYKBmtUJHH",
  "key11": "3JumDyM62NBrV8vd1m34XjLXxfkAoYhobawtxurYN5mP3ATLzahgRMZ4VvW71xpBEJsnVksqzXQtdWKH1EiyyiLh",
  "key12": "51JN5yWxsgiMD7dW6Q95oPVaURZagFKbYUXVrfDWcXFNcVHDj5LQv17Chtdqc6wfky3S3iqcKTg1WSUQVYzyH4ps",
  "key13": "2SsrqBkvwAcPcCHZBLXTFNvE82rxvCvz9zXftwaNWZB7Cye273g6HxwE9G1t8kksBrDQimNhLsUgyQ1d9eQjY1FM",
  "key14": "49dJQ7tjxDNNStUEsaCmEkSChRKFxr4knrRHNmADRZuhofjivaKbud7P8FzJcYxdjy3fA8tmeeEiLg8SrfRoNJfA",
  "key15": "2AAiztLEn1bzG7px29TD4D9Htfqi1C87LtiXk1MoHs9g9Spec1qLAVXGvnnCr65CBFzHZj8j1ixHEtfxjtUWeKam",
  "key16": "4sr86ZumHD5KMQcDuPxH4ywZvhSpMhdEZVdzoRFvf858zMjQXdKv7Nu32NNa8Gyo43psJFuu11FJeZWbdYzR7iKi",
  "key17": "4368hTHsxgDuqpuJDLycNbW535JYjcvozyCSgtggAi4GFyRUvug5VAr5PmaFjLarUzA2rEymYuQSJLZig89fW2UT",
  "key18": "2Nd5D3fCKGGDNfYAAzPDxSdmMamX2QpE6RUNiZyRie6FFYMe2V9onXJQyvVxkv9EMwEQzYFS2uiPJWTsS3ReZJWL",
  "key19": "4dtRKFHiMvx3nxUMtJHqn4L8Cu1FDoYeJKUDFxQkUDGUeHbrwUvsRcHkqde18bY8EsSASkcCj1HUh1s3UMgF8AgT",
  "key20": "3YBtZViq8Dz3mvuRynvjGzRqjvNQCxKUBjYuJRaiezBT1e3fngtzZcuZiGE9iGFSL9QuouP6ptdsjiwpMyk2iQzR",
  "key21": "2CCm1Gc42wgSFf3fx1xbSyNLB314E7Y6T3VzQqihQSLQ6nKMEiNAimf1FXN8ttmuu4YLDLBnyCz97X2tnKZseur1",
  "key22": "5nsedxng7L3yJ6XBD9yaGPQ4z8EfgQf2uuhUUd6H471Hrndraw8477Hxb4SRHUmv49pLjsuC1ywfACDR5Eb8UUpt",
  "key23": "2MQujx5zskXonsqqr9gN8GddGUJtab7LLMPBXJonfoHFCwBb6tM4UsamHEFZieHwfRPcK7J87NeGMCJQaq1g9qGE",
  "key24": "42h4n3ky1djGJHTCkCjtDYUFamJ27up9aG6QA8xkCZ8izqQeM61otk5ccA4q74RYo37FRB4zvanewNvuGVe6SgvD",
  "key25": "5mcGaToAdhr5854EWGXzaDpjRSv8bqzrqsgDYxqGzKhbqcubG1ZGEdyqSbfrYdtx6Ap6pXgJtj7kDTkbTXbbLRC9",
  "key26": "48i4XNcYYhr7qzB1dspNQSYGQ23Z9e8zJy7ixTziDftdSuCjzVD73qDNx43APmqN9DC5HrG3y4wdJqS3qB6z8Gxb",
  "key27": "4QhwVguAtzkfCF3QEft9RiDsHVNAHERT1Mz4XQFFj6e9Z9WDLLmeDnyUeeReeMKds9kx1yxASMKW77KRhcCT24iA",
  "key28": "XP2vD8eExd6pFtvDcK4S3q28FRbSFGii4XQx13QnmpGmSvaxvr1YLXEt6DPvm4myx8QbAXtk8QAWJwxnZfqvdDX",
  "key29": "2783LDQ2WvTt1h4caEd9o8jvcAYNYSaco1ZP67W1LS6UqymQEVoiVGb6Lwa7tjyyfcRZUSSLrgpxQyH7frqrbFHC",
  "key30": "4w7BW857Y5TzdroB6kyGWrVVqMrCwTwbSf6CSUFcW9zU5uW2fmRYuBrw5VD4tEYZhtiN18heP7tXEahVfVQ78HBP",
  "key31": "46ifJ5qjBSihqrcK3pYFtyAY3ibCWmryYQe7HoLkA9UPiubsLcqo9LGUrft5vyYdAf2rtQk2FPsRr8utX4xS6oCc",
  "key32": "3bBWJLxPEd166VnYN6XYQMjDJVsbzfx2tcwBgF64Z4CwRaUdEAG3g8NHRVa24EGR6Ft3yBZBcqiyd8FLKRGnDft3",
  "key33": "28wQz3LUPS7fFffbwPXYXNi1EmccTpKRPiQbXUL9FKyu6voPjt31zXEvFEfx3BwqjoaVwKPTihggr55qQYEna2Lr",
  "key34": "4Tg23h7VYsLsuL2DL9GQYb2EprUzYbYmZvHanufqUD3qXhiJZyAQw4A3zZfHk9hC2zNDq6yXBudhhwJ3PMZepDLH",
  "key35": "4uEsVxcfLrgTqpACLNJd7E6MkApkhgZq7oEydkNXM1ojb2kBd5gKPqstYroj558BaLmkFS3BSPzxvRowzMp727e8",
  "key36": "3AZqBHHkaE3hggmYq8ZPHvnFjmoV7zuPxyrc1A5T1qAvXm4txufFaWSEEM7YmRsKvFGqX7i3reb1vC45vVcnuH9x"
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
