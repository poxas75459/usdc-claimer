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
    "5Px7yov9Pt51SRsMytQMFB5kfGSQ9EbL2gLeyNdAgQnr5PwXFYoDsMchHKcgftm5eZX6Z6zLXsV3skZqMhVBgCWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ujNuVR8WTgbkYSyLur2gjcjy9eG4n6oUmDiHskn6cMSMyyGQ7iQqCyu48GPD2XBMmUd8s2sX5FZ9MjYZvBqzeB",
  "key1": "6JGX3c6uVfDLfCd4rWUtq4jcKAbPyrzChZhwXEkjpL5qg6Fi862ffCzqEx5RZmWNKS7U78KwW1iPDK3ekcEB1Q6",
  "key2": "3hTfifyvisWfp6RtH3JmFmXJcq9ar3fgAgtysmPedGWCMxtMgQT2k9RQKMhC1PmZiWFXAxPS7xCbU3Un3NEyQJ7q",
  "key3": "WYs1KrynyUn3VUTRdbuByL6CPyPMnunme3b29dtwUhbon2pbXiie14ymbPdKHBLFebBWk81Pbhfx25XxkCeKcva",
  "key4": "2NGTcTbnJJobKQGnb2E4hstwGy6Pj21HdefNwdbAsQbRHuYJH3bjpC8S7a69hmVwLBSJ9KEuERdCFP8FFjzsbAi7",
  "key5": "QERJthnFLkgqRetwfGuCaoQdnTrZSqC3nTG6Zr4kVc4rt9AJbje4Atkb8QxZNSKQoSLYWJFRYrnjuPbWNzMcbJT",
  "key6": "66NRrHFpkXY2gfFWhRtrPvXuniZGvqLfjLU2YHUnReYCunj3ra64eYvrKf632kPEMjTPqRB3h9vDjPByL3tPFpVC",
  "key7": "2SYPkU4mFtJ19q7mmDjT8n2fetjKbzb4Q2cvvnEkhvSjzMPWeYo4YvpPucf59gi3ZQoJGkgsvzZFpQWN51gy72X1",
  "key8": "53wSz36Q3URKPEsrJFEQ1iuUhiwrsM9w6VsLRTj4uisVAjEZpkXb7o8N8hLten4R486To4rpT6P1d5zVUGiR9rrV",
  "key9": "4Tw1vL1RZL9gj9AJ3rfEQDoJLctaoT8EzSoo97Jck1xazFzSdvMiJY31P2v6hoK5bCvWVwcqwABeXnNbeHGqxoDb",
  "key10": "qVB3GN7Mn99S52hDSUp6bpYFjT3PR31gB3btfyFim5dhBA6MHBkQJGw7Dwxo9LTbzcfaJEgYReawfJVFzkrCuuD",
  "key11": "3JdoNJm2Y6LHcCjicsJ3wmgmBDDwVUqv2Wak4SopafdFYMs9crwKBPWpt8QasSc9bc43cQMvC1FqJ2cWoUh14kgp",
  "key12": "26WPYZj66yM5Kjm6vZxRYgK95B1mcqsiGsiozYULmKb1pHY1NvE9Nf65593c5aBprKEWSpm95UCq4J87DUVAFtNj",
  "key13": "2L6XFNjnApVhT9jqRRVNjFgbZNndH18Hqwr9rw75Zb3zBLFMVPHMYHa5iBmCUJttJK39U5NMugPhnkD42EPtY8St",
  "key14": "5VKghdDvcKN8oSoY2mm74tQeZx5uETiqRG9uEF3k4ECgFwCm1sC2Hr7iiBJFbPYRw7Sk6yz9jZLp3Cw3bgTjKaGM",
  "key15": "4nMERwshLeDF1M2mNhopoMpSidR2UzU1G34z9iw3WTx5mrS7SL1giHwcTASW53PjUV1XrhhSsYnsHdkaLSDzcr64",
  "key16": "37qxHrF2CE8k1GNXw7GLJL9dzXfnQ5TcTxoaBw2QQRiFoBmnoKkyZxq5KJc3xL4XCuZ1a7TxayUo9cvKZK2tgG2H",
  "key17": "3NKDXPCigvuvcs2LadyjyBsGXrmeSEbhDk5V9k25okbNMHEY8NJeaFsQU4e9HP2bq35ZaahBEH6JjNWkAJ3y3ExC",
  "key18": "2TwGxCRe2VyYhiDXVDD3NfzrrHUEy9i2d3HueWLSPPjUmNXFeeSb9rzf9pkVUaXmmLxHyZ5xkDXGXsKo3sbYDne5",
  "key19": "5coir81ZC4vXiAcNeeWrjKf4rvXeM2KroSjtDzpHeLCokJs1ghXc6S1HYGddRVzXq9tDZZh6th4wwPXT6p4XTMbW",
  "key20": "2j43r8iGUR7no24uNqtZu5isJenxbaCtEgCzuNoNHwhjCd2UMAd2JB1SJj1tLz7eL1zy2SGR7H5L1diAQRG5BsWx",
  "key21": "5ovSm4XU4ogVJBhdfPtw4mJMAXVCovbp44pnhxtQYkfJGN7uGyWMXxibe6wAy4PwSkzFLHcMuvVg55UUiXdppCLX",
  "key22": "gywM8dfGsx6x5TRxcfdN8XHhTZnZZj4uBGTxyKEKQgECSLCRjEAb1RRqL5hvSncGybuVEqXuwmetXRSgYLCFkLM",
  "key23": "4MeVzpNXXJVkfpARmg7fsX1rc4zq4TtZaT5H3akNhpFiWgNLEcPXmNXfYACkHANmHHTvtMizS8dosj7Rb5tdGm8G",
  "key24": "2LysQyqxaFkg6ioT9Aw9zxtPNHFhQkvPFUULvJT4SPpWSmHYwLibS1HvFXMd3Qti2itG2ALUF76BgZ7NsnS3c6pm",
  "key25": "2jz3GeXmQBufFfVQzJh3GRMohwHJRoagi3UKo8w7MEaU322SJpGU8iSDtGwLq7bHWfCLtywUppydNtwrcn1i3wVH",
  "key26": "4ypjgnYFieBHvnEdbsfxxRmw5PCi1n8mtZwuUduHs4hdN19GSDcCQd4NTHBsnyBZnMmqsrDhND2V6pSXRqq7uaiX",
  "key27": "3hhoV9PYABhxgiNkHSdnbvxiWEmzpQ2fCN9bCuP2RYNNFqTAPAQtmbt74moGKEaScr8oZDCuMkcUNZPZos4XgKwu",
  "key28": "BZMerjuHq4PDB4zbpQXG8U7ftHrcfepuK5AsjtawTbaM9KDPqoyxinyZ1RXoYnA3BQzLz9hvn7BejTSMoMD26UM",
  "key29": "2sLDbQvWshuXL69EEPKhZLa8tj5GFgdWJjagUEvSaWLRHt2RLRzdPPMQ9q2j1s1599HwZn8UZhjGUK7NgK1eS5ga",
  "key30": "bHgXxSqkQLdBhq3JA97pJNn6jx4qNAjn8FmtRJhTQyajPwQp3aVg3Rbz2iSFgpJNBhFoPT9RweqHZhBj6PuGfGH",
  "key31": "2gvKT4CDTQtnpej9WUhJA9aitWSTUX1VCoAWx9PCvhDwKhvq24NbwWjxMVaj48fT9NG4Kp41hji2fDpjxtNKbtPE",
  "key32": "BPci317hLoN4CwzmhHosv2bujisFA4q5BtowexWPgehU3h5qhjiHLmSbCTZfw2KUSPsZgEXN2oePJ5DFpVLdDZM",
  "key33": "3mLXycwyc8MPLouh7ptAiLeSFCN6jM9myWWx9ykLuuUxPgBWQ6fShVASbpnDEwSdFepuTcwvV3VS6YWwBUHhy4f3",
  "key34": "EctiNknBkV1XYzCkt1D3bWkBqrxG2BwcrG6eVdt217i7jRDacTEQm3fxwTYkJnAk1YQ2bC6gestNZBTaqhJnvNC",
  "key35": "43dtWaGNp5XaBTmGzmXR6yMk2Hvp9r8rA3fkcEwK2anX7Yzr9uHSYLM4qpBPMpasa3sWqGNMjX1h3qdv5ksaA5xh",
  "key36": "3U7QiC2syh4VaS1DCREkghhvynYCgwvTbpvmtpxUxDV9YYNHfhVu6QQgTmPDKKwNJU1RFHM6YRfSgpp1vCNwiQH9",
  "key37": "2GMY6qK4umsq3bhKyMLL43zK3dFV9qvZFGC64WfdEDgCeqVPqLtkwis5SuMGq9qjCG6GkquqC5Qz5tu5Ze6DXg6q",
  "key38": "4oeTrFReFpXdWqKXpCFzoDrJtuCu5f8dKSzm7539R63zAbYhm8tfmxKXK4J54YfyiEtyG2mRK3ahS446EyE4jkD4",
  "key39": "3CxUycdgybaATWUsfHHJzvBQhRoNjFKNTU8Q6yYaU7dfaUEyhm7F6WuGqVT8fKyajUU9nUb6J55jT7qwdPmMUi1p",
  "key40": "3DmYZTFXUJCjXTycWsdPMr6ZR6b2VGppm1eh7msXDPoXN91mQzxxoBSCJSL2NopfY87EzmFuowKtJ5z5NHa3TY5w",
  "key41": "3hWtXDB3JFEQQ5DbELM99N9PNyd4QQ7fq8honY6TLg5LoRnGETWaUVWy7xywqb7oZn12K4rXmFPkZw6r77sUCQUM",
  "key42": "5HXSR27zaqTWqXgVpErtFwU3uyWbhhdgUh9PrZCMa6erHPsfquwyR8DAcnW52TAQkGePi7ZiaiBRNjD9qVrrgfkT",
  "key43": "5sWCX2BfPGxnd8Qod5VJNGq2w5t54QoyKWXLSjfNrCXofd2kdqNPnR8whZKMqVbGC1miB3VEqmwKBuDgj3qGyU5N",
  "key44": "3qCXT2V4gyX4HUNwviRypAJY5LHTMyuAk44AH2YqeNgJN5AG8Y7J59Jhr98ZRmc7Paoh7e6awhWhV6nR8mcipyY8",
  "key45": "48BXq8DkWKTu9r8ex819mjZtydpksQhUp9vdJnZYNacyM9SSeUMVhxbFSEz6g6bFNrTeDWdkRMpwpNdERq1gNpt7",
  "key46": "WwYeScJAmkfCrp1AwewdWZU38oHWn3XeAZmZavMXuztZdCQysxfaMeY6tAqnQKjrB9ukNcrvknWMD4RLUY8ywBZ",
  "key47": "2cSYSPxWhXZ9TgcUx8AaRTkAXz6u5WvoCuCC1WiEawydpHUsUn3kgvjsi5gVU2rjeZu9HxCYA9Vwuk4WDzucrqVW",
  "key48": "62o4XGgNt5kJVTnNRK3VS4hCQMv2X6LWf2dKNGByX9qkfBuDHh7td1to15jfcR24jB3ufYsRsRZVYdzKuNPc9BcR",
  "key49": "3kH8xWTp8vGNt8rCFmZsj2G5Udz4GVsq7MHHsDSh7y5RtAx3Uuw5XD9uhjCX2USeR3LsBozTTmoAY81WzxAwutGT"
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
