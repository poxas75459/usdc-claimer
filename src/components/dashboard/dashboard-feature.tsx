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
    "4hTwbbxZ39yvGi9HxsHdnhh8so5vHSm5pAdRx3NnkPdYYqUJJwo3Eweu3SuMmRtd5h9Dfc6c2YzkNPnaNNLKG9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41w31wsRDddvRsGnYzsnREY9WZV5K23wGrKskzkdo6aVkn5TAerBnFrgzx2GGoRmozsT1dme7TwzrrbdYinjCV2E",
  "key1": "uEvpnZcdztbo6BPYNkmKhBr3pcfUzuRRNmK1vjktVkj7tVwAAN3xW9EBddPJe4ABE8BagZ4oKxR4Kg3yBhGPys6",
  "key2": "4nJS7Kxeqn7SuEJZ7thZPn4a7iEp9XTcPuHyhLB8knPixUFHVeet4nUXcVkBqsjEjnHqaYZXESrvxrcYeTpDnpxr",
  "key3": "2Sb4y6EJLY5JdTKEXfL8KGuzEYBQb79wvYrFuh1H6LFbRb5W2WCV3ZsZ5AJSqKQavnGb3EuomA3Xu9vZnF2Pjt7J",
  "key4": "3uSpcwYncdmTW4HEewfFvXAEduZ8YbceqjGDm6S4J1Zr4UgqVfBqNhtjDBW6ktaSrK1oX6iFyXz3TW7eVe7KUqED",
  "key5": "29WkzzF9e8WGbGkUbuxQkJunQxRkTiMUrtCU74pmjHhwAEWbPLXAWWC2RgQ4TA1VumocFBgVALVh1mDB1a4s5TuB",
  "key6": "3sY4XTwA9Q4FX9WCsDuSmAJb7L9J25NnPmWFoXX3v93ZF8TxQ1uGfYQykAaiUAGRCARTb81d7zDTBFt3AqqXp3ME",
  "key7": "uYq6hBaWtTcYqEFNwUddL82YaZa7cUeddDSpwJHez582yD8uuk2hmH9DdmaSiFmxrPrmTWWk49g9hzeSnV6SGe9",
  "key8": "4H83Lyikv8e63up1eg6nW6wH7ZwzKqBFDC3iJwW29AWenfvMK2vjUrS9B1mtVr62YD41pyYVutoirjh2TyxwZpsZ",
  "key9": "5aTZhrmGwpzAjAdQizs6edQgnCVsHEGuTNDLehgxe76bpuTTqeQqw6PCteJAsr1XqxsDXRZjLzyd1GW7KrsZ5UNt",
  "key10": "34r634dpfqf7XARn8oY1CXcaXittyuhuiDsme85DmEKnF4nMCwTjSeFmMjUj59zhfrK48HU2gFgfLtpi9KrHx8xW",
  "key11": "usmiVGydv54WYdpJkWLDtuPg7qqGWtP9HNwa6xtVEVKBEpzd1JpuqTikALMSoXN5aMUYxqTgyuczmAVDFAY61ta",
  "key12": "27vEwFkdV6nZNL6evxwW1LeMCLSqCZygeK6wBgSR4KU2oV1kpPp1psrbCNMgKzpjN7txzf391x8xab75xD5PfzzV",
  "key13": "3RdggUkqtwwaWqDTUtnogcua3Cepdh7BeqRUuYggaMPLmXWZU5uYrinFc4Q9FwrpH3dCkRRbLkpcmdVY5eZ4ynXr",
  "key14": "5G5AydxdGpYLyVo1CRCit9Yaf8j7XnHvBmZqdmqEYZzu5wKduD5iRqzCfgkauhJ1Ceto6LVxamSQEpT7XHXmxQgz",
  "key15": "32dhGf6BoxZDzJwf24e2NXfwtmD1m3vtBbK3DYSBSqyo4aSQd67eb9XK6FgConb3MTEYtnWKHfvvGj3KhPQVByNo",
  "key16": "5KCuRBRfa8DigdqgXfmTcwKkZ4VaVHCwxy5MpQ4ytaNKZ7Us9pteQQ2jWwCfvWKW1KGpsBQD8eoCWyfX32JBTDog",
  "key17": "aaGjPsnoJdZbNogPQEbyJgM9SdzT79uZX9agE9SKzsNq1FrKpc5HhYA4uCL2U2wCaSX7te1DWY7wUM2xHquXxTH",
  "key18": "qzAvhgifBJcj8iErQcMx27BWL83trUR6FUhogJJmmoCjSBZY8SCL9SGMifwHGqWewMhDobDDm2n1BbL6cAvYVMv",
  "key19": "3UiPXWRgcfwKP3Z4BeE4apZFHMXjiPia1Wrb9zEmggeS67nZHAR8FAa4YHfFSomsT2QzsosE9WfFHUqWX3v5Txf3",
  "key20": "5sEErNTwRLegE9dxW6PQ9SxUg56AbNY178wW1oFEgh5fCP1PekHw8hnboCKYMNETMb8UYHi2FsD5rKQ3JpaYgem9",
  "key21": "b4Wqepk52CwmfygTtXJaUmH8r2s8BXJnV8CqC6jty2zSBfDnAV6y5uaQrt3hiSDWGVEyRujje4ZaHY7LjMdRTbJ",
  "key22": "4Dbwz6ocv9PcEyhvTQXrWdNPFyoLZLU9E4N4GtLkKk2uvoyZ2zEQVukQUYeSUyqXxyGzhidKSKGqBN8B5xVQsLXB",
  "key23": "2Suxt3pAa9sSkM83xHjeEWRwCF8A2xyz2LkVrYSyJroXvM926TYp6Z7u5meBgKGPy9x3sNReUgKSeavhFENADYzV",
  "key24": "3vDWf883jppmmnMZpEKU2THBiX94oXXRjKXwgWs5xBcjcTYzbmD4s6p2DDVzjN8S1k2ZMWnXiJmpvGdj6Dxeti5Z",
  "key25": "4v2v5Kdku46vpRaHe99FgF98dwmx94CFytw3QkU5h6YruoMTNBKHQk7hPokzdt9cnfkYpYK541LXev6Fuh6Msh23",
  "key26": "3xb5thjyTVHSyHoKMuDfYk5N9fxwCsiQXp3vihMUpuqfkRyPr4kcABhKkyifH6htFEaQnKjHuJEjTKVwAhgZepYf",
  "key27": "65HPmw1r6HJhcHRrdhHTuFzDnBqrwHSLVJh21Vdvn4MoDLkgnhKykaBh9jMXffe2g9PrPmmkKr8hrgJdG2s9bX6u",
  "key28": "3aAVPvcxetybsjpm6rJ9toFwDexNktm4KT16bEomRu4azCJjRG2J97uevnNZwD4qrkAFdxuHvQB4qCKSG9vpwj1J",
  "key29": "2CTZmVJfZeGdArJtyrtAvnJ7Kvi4Q3DbCHbPREBhNKdQrvuTrGVCHbeLR771J68d1DWkxmRmYn13X8HtMbmWL2hz",
  "key30": "4cBwMuDGrLafGgQunMFcZnwVMbRNsT5vvoNQ8fHLR8apsYf718ppBHVbe6bEuCLZ6z1veJwmcspgbYnjiAFe6nUo",
  "key31": "5c8MNeQQrUZExEy2AuwwvVPCLBU4kMXh4CXuUN6qvDt8aZaKy3T5b7xRWQB262kbHyN3L47sQD66ozJhHpMr74At",
  "key32": "3waiqty3T2w2Wn84xVZsYDe5Vv49MSUP1r1BJyoJKePm3B858Lx6Ei6G7Xx3ymv5Xds67r64TJzKwNZmeY9QzGDH",
  "key33": "54MyioheNbSfziFDK78q4iiYqSnBhthX3u4UzUqnFZarmcDJxt7NicCueVQYjMdTYZtkdq7N54HdRovvTVJTavCk",
  "key34": "2ZcEQVbyggD5SD5PJL54dii73wPtnFgo4DuJJhEvTaDQhCoBEAjphVfvLhmHKqK8va8C16rnAzDPpaZRhbLawbA",
  "key35": "3LnuTKTuukvDcmLTSnEjMGYTA2eXvNMjJ1wXRoTAEuSuP1U2oc2rwxqKYJ48HW5agS8u3ED3jYcw33LMSXFVG3R7",
  "key36": "2jDfvtywf9R61TGUGAA1nNjU5BeRSYYxKTZg9y8eXZH9zPgW4R4ZsgLevxDWugfUSPVERqSXEMePufgfDdAFwLSQ",
  "key37": "52PULfc4e9GUePzvMvdQj5SEnJQhkVrNzTShPsAimGGKWFZzYHENBDDsMuMiWFpSr49sBnat2WTpwb3kQ7NVERe",
  "key38": "HxzoDSqUpBLhddRzqUEkQN7Fto1mf1Jf5pmHD5D2gS2qUTRDtFhL1VVLBcijMQoHYH63EcDacJTLD84eCnunbE7",
  "key39": "6Cf4z7f8mNJes18av5HAL9QUrQfKrRrP7VctpCnBGR3my9jcQkPojsK1USNJRftNZtwGhhcbaX5RuS6yP3wXuUH",
  "key40": "3HzBEAigdp7r6pk1ZN46LZXoqaDKRTLQjez1BWgkYC8TVaznFJE3Mf2CtBbV5n2pR54Bnox68jk4i8VWtAXykRMa",
  "key41": "2DjpAuYwS91jeTkvyNCH7gNGPmzEPysFifSQA6tki9DfHBRYyNiKSCNMBZcPYfesee8W36wiw2u7S8y94cuEPDJp",
  "key42": "2LRDGxQTm73E9w1dS7aKjVm7EuQEXuAn7vtVD1Xy13VdZ7QQj9RAgoQXG3smB6jozNf3abQSqShPX83byfc8msVM",
  "key43": "3ik5Lj9Eoxv6zs96UMPumegP3LLCsoLQotaH9cdc937G3xonRqSHbjeMgmj4WcYYZ8PaA96SroLNKHnqkAfGMuQy",
  "key44": "2ESxxXv7u8MU6oyDCxE74DEGcCAs6XTvYDoPHgKoDX3Zey4jbo2f9gWaXKSTAiQTcZWMDn1MbM5LybhvWRrneGSm",
  "key45": "3MQ4ZWxpVeiReGgPfEvvMKi5LZjiRJM21qvjquAbi1yj2Mxfq1tNuByRaYF7Nr5YBfBWb9oLBuEPjtm5gUudXf2S",
  "key46": "378M7QnngBc5QRPGLrSMP5NCz69Bi6bQqvpE2kD7xR7Qjw9fwjotwCH5fP9DinREJFo4YcnVm8JCa7xHmBqPPEdV"
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
