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
    "5d1wN61GayfuSWbS31g6ETSNVzicrundGPAPxLCkrQMJijioEXQ4VtQFghVGgmi3PkERrGbKa8BBB94RtyafNfoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhz4kKBtZMkywP5R1Yu5wwNFjeTzuNkvw9RPzvuyfJ4x7HDA6VeZXWaG864JE3cKpabyLQLveiBUFJj8TtaomPC",
  "key1": "4YPykD3UwtSmfUQK9SbBMD5LDse2U9hVtWFgfriF59PndwzPcq41vDXKHYbeRpcLvHejNPXf1QdXJM84hYyeKKwx",
  "key2": "3WSbEWLeDiqbBey1pn5q9tfqbWLKorFj5G8rSXxXshyWZEdjcryN21pkmHSrfxZRXtr2CTi4odgqvi9tezCuYkBe",
  "key3": "35vRWiW2AqkBtZ1myVSXFGYoveWabR98qL1zxKmXndL6p9LiCkA6hQmtdSXAj6ZjpQAJa4kmWVsfhAXraYJSpYh5",
  "key4": "2yPyBgdBokFWt5TVR2W5kYpGM762pV1SnopSh4semxDrRobsRmg9eWUbWRiyop2CYBKikLAk2jxJyJWkCQpDq6bW",
  "key5": "qV1wbeWSvwrg6eo6orjSxpxuiqE3txhiNnA9G9EnGeXb6z824vUjzEiF4yJyzrxWz4VMCLKJjiJxTvGUdJN5Toh",
  "key6": "2rjXjXNiAPBXwHMzRnmYUbrzhfvaAfZTaUDhjsc5CBzjnYfumECZ92QPmetaXQy4tzmkECdRrLdVahrL2114Seyk",
  "key7": "4uKyiDQ64fYDMo9TTSsdxoNP84LvSHxq3LQBYstf3tUmquNcSdzUj7zLF1zeTMyJaj9YquCnrddFv87cK2H5Yn6",
  "key8": "3ar9F5oz7YmBz6SXGPSnRMWWjZFdSnSc7QwTJw2npK3d81dhn6v4WKiKtkVP4KUAP5XodaavCjXukLmuvx1Qoviq",
  "key9": "2UMp3h3hL3urE4CFX6zTmcqiuCaT2iRUAVTt1erx2PKuUjP7UAsWGMmYmUqUbBAiKD9Kfw1HKs8N4zgC14nQDPAh",
  "key10": "2hYpATJ8B7AW3gEnNmgvSq1o75oEXX19YGAMRQcQ6dYsWhH6sMvKt2vK1XkySb4JERUBXPj6gUVERUJyyaa87vuN",
  "key11": "YRyRQZwD35WRE8fb49eJzxhCvmbzJ5Jx37hz14wtam32v5AWni8v2G8xtdrghAvBYjgQA5AX38UJ6FsboRo8yyP",
  "key12": "5EdswZwWbFPHodswUnaUjDH8STZwV8ae7hkcjbCb9CnAbkjYrvPBvFK7yJKn9CXQBVwukzE92mL48EeKWWnFdx44",
  "key13": "4kbPj6RHX8JpNvaQnoQx4KUjbTDogC6QAzRxNmTyoik3yjk88dqvduQPMzdSuhm99UbKUpAMdmXV75ewfAx5uD3k",
  "key14": "4FN2FAXpp5bbqhCANGTFeDserrcHijFaZoDPjS4XfRgSXTSStMpkQZXoFbu8D2V7SnTgDd95wapDgdyqeYA5aPsC",
  "key15": "2FJ1MXeaFit5mtJv5LcS2dWKXCZ4vXro27zGECgZBqCZc9tDamCiigb55eXKdQb94PJLjZpMQW8MkW8ophjFg8AB",
  "key16": "4zMgYqjpVqq3QyGefKczxTDfaCCuqb6cQDyGeDALMBQVQnWyLdr7D9Mas2iwEjcwQExs9XjG4auK5DZttqpyeSHZ",
  "key17": "5aBD7XDSxThwrarHD7p4j4991DDC214b4XSyiUzD39Kzz36ywqeiyBVezMic1tcPdYkLaTAUjfM3NcZ2qF6SRua2",
  "key18": "2iCQEjeWkDcf3VmS1awvboXgP55PQRCbgqdEsonz64uUiehoaUD8i5YdqnFqhwPSpQRMi3B6KCZNuzz2zTagpmRE",
  "key19": "4NYRYDpQmhb4dvXadK47DXZPdeenaKCGj394pzKDH6NtG3zXDRgkmdAoFuHQQEa24p2qMink5kn2fo2zHkp4M3oG",
  "key20": "4KcmvFUeZ9jbmyR3rxTYJf7ND51wYqDdG8ttUAMEK4NQBhFiMmeSGJm6rfdrhGFKBm7ohPNMuqNstSC7JrnHqvxo",
  "key21": "4sd2AHYpS2p5uxKWEYJC3bPDqewdsq3pKpSfEmSGpnStruHyWazPxC6a6Pg6RqDd3yJyso15Hr2mgq5nhvSKSN1s",
  "key22": "4g2fmfVRokEetbWKWjgHxTEepVapCyRT94mdQakX2XD2Uby7pr1bRBc5vg7Di4kVYWw2SqcwtAX1HhseZk1DCZVa",
  "key23": "2vUA8Vt5teqK6Ne6fe9Nec2mGCVR9he4iUUQiJUAmSy9okingCPgXUEH2g29pYKiiVYFHqBicrzLS8NH7xHgk8s",
  "key24": "3c9MWzAxX6Bq7UutmYfobWP6e9TbVJxi1UnEqprdjGdM2kvno8XgW61tTZLMBGDguT5bVCqBApYnYhbANeRUUP98",
  "key25": "GjN2oF8VuBiYQeP72C886yv2QJFPDQ2uJcbMNjfY4c1JhKnZgwZwkPATwvhe9hzWDDoduvMT5rv7gK1KwrfN2xj",
  "key26": "4jvTNumagvUqgNfD4WjkcXfn43yejm2fk4u12VeuUt6teUodPvyjBqzAhdHG8MVddTXcUnx2wxw7GgTN9abdC4a8",
  "key27": "2tdjmNMEu4sFbfMjKvQtAkHB6ffzp2jLkKvTsi4yayejJ3YJVxes6yXimmr5NoNWc4fLLwRXVrrtbywULcNuhoER",
  "key28": "AQnK9sVQ3k1dwdTvthPDsYcy6mf2TFH5iUuCqYfoG1sawygHPXXsALQWHzY8QYUhBxBTUS5XMhoWuvA1nhHpkB7",
  "key29": "4qR7Ku2GsxLpmQVZxwZSzCR1PUMUdZXTfm7YDFVN78dcZCHhfA388vY5VPfXfELwDng17AbrSba5fSFNjJ9Ut7w3",
  "key30": "3V1pobF3jHdW1ptYANmdkj5PwcvVETBCVk5udVziPPX5GZLi7jPG25AhZD6afqEupbqG725Xc1JCtWQ2nQqFjmQN",
  "key31": "4jkzSv4QM6onTUg2Te3XYdi3bRKxKnH6mGT4DRoWNbhkJ6Px9aYp97xmux7zHUiZotZkrV2qR3pRuP1R8Ss6KQLb",
  "key32": "4ZXt3CfuTBdZqYd97D2iGDD4nodfXn89Gr8d8iLpfZFpf8YuxEjLRL8mTLW2c8rra2S4onHJ2sSeptvsxahB7Y9j",
  "key33": "3fqvvb6Bg22CuLW4muNmqEUwkvBWXSroreZjtoZ15TqUVHUYWLzTgXq41ZSy1jLj8MF47aAJ9eXnxaMCNA7UHCtN",
  "key34": "4XDxzAKN1qHsy5EQ6HfXbHARdDJ4DPspU3ZdY3hXrQAf5ePr17ZUK7adYHa3NWakWPc2qEd8kuAJaLnHnjzkmQc1",
  "key35": "2vtePjh7cvv9R1tpk7LbxQDrgSLdr97FV1UxYZ9NTaj11Dq8kzRzo8Mk95yEqr7VSbqy4RSbNjYmcZoFyzVKpJRr",
  "key36": "q7uyAuifLPYiYkBQfKvhJTyZXMYTd3beiGjRamvQBDkEMHHA7HPjyxUVaqD27D5uEpV3Ccq3KRneQjK3bv8hDY4",
  "key37": "3Gj8XkXNJYwATceLGPxLxYzovr3Ja2UKXQrXhRetVL41aKykLKTZdvvWrg8HcXZk7FRxbUfUcSpVC7gLbRJKRxpD",
  "key38": "PdcY3vv4d1bhBvzFNhKbWgJToG8B3Wrda2Wekk1m7uCxe4NFkddxcGPLK8PoETHzWbXSeZNXAoB862L9hGH6Lor",
  "key39": "3WF3CGxpzBqHgJtosq1cnLbzy8TXcUmxF87emgDR8v6LuSMjqvworTtvtrsYL1k9PT3HGGXE7hgWepby3B6qo8iV",
  "key40": "2Bq4SmuAPZt772wBEHk7kj39eR4mBivzrjgAo94ib17R983EWhcnFRK6pgsEkr7ksJaXqyU8J3JgoHK7QywRFZkF",
  "key41": "2jXn4Mw2bVZ34HCKUeu3PeGW9JJy5fGpHsR1uPVuBCtfHDUj7JimvPphuVfnJzPqzqLb6pYY3QgsV4yiZsPrp6ai",
  "key42": "4hyogGUJ9RAAMdmSukCspPftkctht5wwuGUL7YQryVUboq5CmRKnE4hLur2xMK4gtp88JZLuMXwmWqneCTm2wAci",
  "key43": "Gc6Z4Q24gy1Ycf1ccpYZLrbwGfvHN6PNn9yD1FVoREyHpctCPLS4KWbJFUV99UV2b82duYymXZMtQM4AL5b8Gb7"
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
