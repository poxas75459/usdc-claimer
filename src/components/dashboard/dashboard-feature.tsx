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
    "2pmPUZj8miFoGhKEDoCY2yMX6uDJ46w9fpuZjWhPs5vf4jeKeg82zWQEfkSdytxi4otqbv3Ytq29y1r87BtWcesT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64a4Ce8egjB3MF7hAP3WrKjaVTUfQ2uf4LCogTzNuqwfobUw95wTF6SDxUawZCRxbtkAjzG4eE8yHv1sjF64CFV7",
  "key1": "4MUzZkCztsAS5tEmvkZCx5ZV5AfpMjit1xYTaYdyfiYPpecUGYogtnCjEhrVi6jX6suyyHufZVR6pFBa49KTKDGE",
  "key2": "64vw8P8M765rw98RhSCSnKkTHemjEpmkLgS2oH9qNbTKBkr7SaWEUaGyaTrsntXnMp8NJM3iCkS2ZGBRhtJiqgMd",
  "key3": "55433atxVoh8BAqfZXtgpaZbjHydKNSeUHu8zrpZAMK5vekScTSxHqPQYGNNVMJCEP2xDmxYvYLQA6cAeSwGhF3m",
  "key4": "C6PLZNKYgHsWwuJ17gbpWSGL6TYS4qbCuzkXxSZgGTApxhDWY8BKLu3cL3r5ibQnzNsLpBQKHp6wk12u7drj1oJ",
  "key5": "5M6S5vn6o8XRjf3AoNL6WbFxCDLwfxVWXgqsGj9yDj6XJbkJNanM9LjYf3whNNYWtzE34mhFrjKFFAfY3cERSqdL",
  "key6": "HRQExJsZapHrzrPTf67JyA5fH6WJ5yd9jGcHmbWhPocSLTESqus6cr3K9Pb7kBU3BHNPBxAMzejJWvxtJwbsHx7",
  "key7": "569F1XrbQe5pCiogSkQSBsqFAd1jNZHYnS6kMV2usy7qesUhr4i65PzndEX1RS2zNoMgU6kYKhvQAPb8ks7PQajq",
  "key8": "4BAMJ78h8dGvkQJpmUa4UePdBCQTNVSPzR675brrSx9ew3HVo3anME2XkoqM5fAXVtMiXwhABrfqYUtC2xtPruZv",
  "key9": "5Jz2PkkzUv4P6g4GiF4sKdBBiKxXJGVFuUZxDrWR4NRTXcZoWrvQbj9hxBGaQCXqUJ1tCfRQeqGtQGMnsVG9dgwh",
  "key10": "65vi4AtswdirEfFGQfz3tcEEuS1GmqFCNV4hXiZ6seuFNcWtNZaaL7PJKNXzHHZg7bwSFguziCDbtSWcVKsAUjtA",
  "key11": "fBBQPVroMrWMRoRQ4smEPTdzibDWjPSnpzatWyaeifvxTT2FhSndkuV4Lq4JgdP5PsJnPrsANgadR9WzCHnfw9g",
  "key12": "43dQPZCNY8DGspBR6WiVU3idpfDb7w4CerkP5r9M4xv3AQYVDwBFoXwMJAEWSBA5apfkJcceYKT8WbWsfpcpDjyh",
  "key13": "3okFNsfMviAzqPG6eztyWFXV9eZxQu1FhAir32kWqQmF6584BgAy6aJ26WNfX9SbQNU68nH7psRsXFgvf5BskCFM",
  "key14": "2HM1HPojcg9nM683y2jbNw31yQm5mYuLVQ9JedV2XP3V2Y894TXZhx3Dh4nfmSDxqrVtsPg7QrcvNc3YuswD6irB",
  "key15": "3YSbQmSUfqFZmdnGax8oUsr619QwMinRgFDA4sWKMnQmnPQSSUe8n9NCDZRqLgmVYVCuH1i5u7kmCrBHAReUMomc",
  "key16": "8VV167JrBrrmas9ZyarVoXB6VZikDeBugrkQsKMTQKadJFdmtbufVBnVBPxb22iP7PwQuEeoMWQxFYaPjAEf3Pi",
  "key17": "5buzC3wxwtbpizSB4mgQSwvkuGBR4ivVrCLVW89kWsK2ja9HYXtJj6yEoVttQSfN8JPucYmifGKqPRvEbxQW7eaZ",
  "key18": "53a6t2yJk1GW4NUfb9gJDHpZmsqRzccidE6rp2qWXj6HWSq9jEGReM9fB3Kukpzgqnm6k31RaWmjdPmz64ARngdy",
  "key19": "4qb5gPoC57QZWZ7j7u4uCeBiFZVjRi5V22LkrnCBkuzPp5hm2aPBYn7D3ppfPmzsXPkcvYrMfzUVeEGrcPHgqMeQ",
  "key20": "26vf8SGT5HCicHq5RUPWSHy4nkiaMQ92Wgd4qJVME2EF9YPpqjJjNCDSY2xtP3zhhUpNSkKSh3hGbE1QvM2gDi4y",
  "key21": "35asktkYY4bKqim1vrG31LsvTYnFGiMJgvQHVgeM4xVeHRPKywLvuo15bBGJweaHZV5G65D382XHcyCJsdDpAswe",
  "key22": "3PMgnSNqd68k5ACLYSj9vSEDpu2Lk5kPwudFvbpLbBXJQ9n8ize9m1YHZ2oE2DQeZgz3ARcRdoPsxEYaBXnG4zBd",
  "key23": "65UTsS8i7HkNLTNDNs22kLBUjEAyGAwdKsh2y712Y4f8rWm18teM2BcqXKdQuFu22As7gbf3UyTziAioLAxyxRze",
  "key24": "41d8q4S9E5rg2JnvmATaBoqob8fg92svBErGMK5fSSFEFtCGHMqWcT15j89xN2TEyjWx5o5bQJEz46DN2aTDDYXS",
  "key25": "3xVSfuGKbtBpJGMXd4iqQ3SZJc22D7B2SRF8vs5YVk3ZqUpyMjpqyxMXuoFThQvHbrn5hq1QvrZES62MkrhEHMjY",
  "key26": "5eFpRdd2c2bed1QtXZA81PVMtxnmApFpU5JZ8zpY8uLXqa1qkVHYyrwEX5TLkPZPG3UbnSgxDwwKwGiHaQ5B3yyZ",
  "key27": "5QPabGk8pwrevUnDdfUc2WpYXFmEwRKb17ysJcCLsDXgFgAPqx6EUgHr2yXLTHiz5xaAeH5UwgtWLgNiT5AMoETn",
  "key28": "4qDiiTmoZ5ctRsNUZDDvZNZdqn33jtQKP7DHzedthuegktktyGfkNWatFatnpsVp3TXzZctZxK1EP6kTMaWJLPY2",
  "key29": "Fr3vvuetcwsb9grqiRRojmuTxJ1D3H3NzPEespP4uhsRMj2Vk6ebgQ3rPJ7FoZd5Z7wLsuUTeXA4GGqX3W7Joqn",
  "key30": "4nr7ALTM8vW6fskf35vKNVesXtCVDKNfoBE7FQDWaGhByrZSMGhgP9qZ4ZHnjT243ECh49ug2z23DQNKK5a9dSyM",
  "key31": "Y4MakwfNvxaYjmHZkxNdfFbT9ZL8EAK1V5xdksQouQA4jAnuQYnGZ9itBvDSRMoUFTabjYtGMBC966WFT6DvBgi",
  "key32": "651Mz2NnnpCyYPnEZ4n5ZL5DxaX8H4A8McspF6xoLADd54RzeHtWEKn6ewVLfv97ePUMg2VsaRDyc8eDyEm3ednb",
  "key33": "2vdNLGQMAMt8hVmHs8YHdUHAeR7PXY2WsekvytWDGft5jExT3Tka6jQxq16grAi5MGH8D6J26Tr2G3GtitQPU8a8",
  "key34": "5KCiP5Kz8ckUARXhhw3sM8REkHxrgB1C1WQa565wpVnGjYbTCVdrHK1GsWF9qmdgjdDV22aMnZ4Mx5tnHjePiFvi",
  "key35": "5n1tLWL5pSbjjTtRsGfAQzwii5FhVdNhypWbYPBa2TPAmhiaSVHZfEN12yoYGfePbvnfi5crAvoN3ce4Zdi4sRyu",
  "key36": "5JT5GFhywsuadNaSHaDBmXPNr9Q9pH8s2aEYiptzHsJsMffYcZeSFKoXA5XENWsVRguzVcjRKkLnvitmnn6Xa3RV",
  "key37": "VCWUsvsfYTDurqji8iNSth29KLgTZsdhFNzAroeowF7ybkYP4tSXXG3aK3rQArFgkuEZRzRmvbH1CNgbGuvFgrf",
  "key38": "3uJs3EtW2iHgsfYqiusSu3sTMjkFWEGv5quf36FxWTTKMnGwqTkfzbbwwbwqQrg9Ci6r1hCJ1GDeZzovGMQ196mz",
  "key39": "2virGdnE8kQwgCxz8Jvm3TeDUov1NgYbHQ7Ar8Q617QrRdhkJkhzHbGvm7rQeinQJayAdxYs6pLbjVpAeJ5CDDzR",
  "key40": "D8sJkciw1gtoHPBkBbT9rp695GiMpcMrzpGM3YKzS6gWq9ZdaVGwRFMpSRzyBuzUQJ5xfdhPRZqXLP3GEG4fkR8",
  "key41": "5eJQ4uiHUhzK9SxK8zEVKCb5bj1KYyN8TCj7xdqojLXCo2JXseAo7mwFoy1YoRUn7yxx7psby44pXpfMeBFHfet3",
  "key42": "g7NToNg7PK7HGotq3qfEiPkAdaCEyyh9AP6KmDXWbP7TRj9ezGajVBbuCS2dVzvRchrCxDtt5owSkBea4oAJX13",
  "key43": "2LMdqnZquMYUKL7FkKv7dhMZMHqdY7i2sHfouXvfGA2pzEPBc1aKwtsYTGx2KTBEF3SqySbnHHBUhbnsaSyk7yWf",
  "key44": "44DaVW1Hc6AyjHc3z2XVe4dLLpKoF3gbnCowJmGCaYS5nsMDrhJNLSNg5H9HoCrps6vTc39wp39XGgPQ4XsDtLP6"
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
