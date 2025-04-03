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
    "39zAJKfPtJA53Y3LLvbKzm8cGYm6pKPpKXeLxYwrPaHmDRmcdPSt7C3K8h4PjgPNQHmmQd2ffuUyc5eg3JJW5j2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUK3tjmW5SnPZ7r9JTq779dSrdJERGWmBfYTCH1eLRLFq2HHaS28Ez7ZYqeFQeWBDnwCLjEVqpmWvyvz4WE6Psw",
  "key1": "rPrWxkuCy5FQ1bmUP2WHpgnmW4fjBwD4PRcveqq5GGxNniMVvcUurw9uwLw5azjvC98gYFJq5da7BwhFpYaNvR4",
  "key2": "YosCKkQSz74XTFDksr5PcPUsd8yebEaxSSXStT54xB3cBtSd6Z1zasgudYnvCCpHKvEsPce31FKf8sRX4Wu2DXG",
  "key3": "RkzEMijvYkEFAfWCGz5ZcZgtDMQcspimiGXevpqtnaJVWv27pV18voEPStVfBJQcsJcjr9dkkGK3uGogu198a5g",
  "key4": "4UvEThV7ViBvokMmQG5gDNVdysf1ancDXE73kuHAwoRZxZWRFQToo82pvbEWvJvyjUbw8PcwuAfSFE6Fq4btfabd",
  "key5": "4Lwq1QuY22fyv2KA1QUVsNiDgWQt57gPotC6CCVVJhyaEyr6Vqc7MgscShi4NN9aZxZb76L3kHfsJRYT1WSmr5pq",
  "key6": "4Ap2x4oKG8EruKrnkMDvB4jRes9BUzEkuk3FnAMaFuyJjaEiQFgTjbm5tedMPTLUvjHzkyKvN8a9EFnV865GjKto",
  "key7": "345k2qgviD6kUY8gtXJS8tqSgaLyAkDmhWp1RG1CemrWQcN7vPM7Mctsuw35NNnA6CCrrv42psjQrPbvxVi28gnB",
  "key8": "5japzY7ASk8EMpSm8xHEd86xBSmvhHRf1seyaPD6dh5faKQpP5WZfFg2uZ4aFRViK3hWzDohztcPqJkYnobGRTkr",
  "key9": "3RvJR1MYYqaTzEcBFLoh9VwEXemKdSehkKnTQUVHK24WSPaJkiGfvsH9ycxiXTVjJBExLf4sU3WVD5kwHcE8RU7b",
  "key10": "5JT13Lq5cQBLp1xyU7xwfrr6rg5pFPZ4dptm7UnrXcDTrEF6YeykDU79VRhuEZCKqckZoNJqCVK3tgYUnhJnuNkg",
  "key11": "3gxxmBLbDDUcR5CyHmcWqUZRUpxbxuhxEUSJoAQ8LypW6UgDUC6uVNMChXsWdgFgFrbEzxtuMfuayfqmCbJ9Gmrz",
  "key12": "3fpsu3FAS6VRzbw3wujnvuwDq7ro62QP6QB36XfJzMrEKQwzfisnzjGSoPjJVNc6T2JwrwMwdAhP3Bem7Vxi8ZFP",
  "key13": "4TDLvJQfuMsnMjRSy77gptp1gHeeq4fjPf7pKcSYPsvqsCZau7aQHb51pvbym7peYGKf4iqeeNTbuGMiSfSXwQSK",
  "key14": "TXA5ymavZQdBjASpQkAJ49eZYgLZkd8A4XeQPEU51UiVkixSFrs5R2D4x3cgdkmUjMq4XAGWsuHGesPriCbXMZL",
  "key15": "omhwQKNvt4zYsVjqKn8YvYvfXA5XpKp7XajSbaz44is4T1GTA8igNwR8UWxXLLFtYn8k7wWSwaboNsxcViFevgC",
  "key16": "4mosG9yqGkpj1VZa5Witns5oHnnzCm7YjLdNi5K8YLaCsxPLukKN6q6P6f9dEjheJ2RoRv7FCNjZVzNsM2tUdUf1",
  "key17": "2W8PVuo63BYZe4491Unv3UxZRMi1Eesx15ayXpFWm5Hm2ma3eBicjVt5zuQ19zPVjWYYxYY1eBYigVinX4tUy7Hb",
  "key18": "UdmZdtHfRkkUcYMPJc6tzQj9t4MohZkDdh1APM3261otjRvb6sboAinioqDRePG1MtAhzS99t7FEMB9f5UyaGEd",
  "key19": "5enSnWUbjezkjkYqCtY9hhw7a5SPBSMFoUbtJNbwRwi891ttv1tUE7pDntciXN7ss53idjPWhmukR96gBBdZPm6N",
  "key20": "2rn2o9ihRnsaV715X5S4nYjya7xqVYTLMtbwKGsi427aEdFR3yxp19wkBLVAJw5KKVr9Z3Pdre5Gfp91Uj6jt1QP",
  "key21": "2WUw6C4GW1iHfivTjFxv3wa43geLhcGwxj1tTscNj6KRDFNAsadfQVh6kojXhKzgQWtN8jr1WiZuDhNEofDXocnT",
  "key22": "2tXgq4q64MVvbs76g4uCZ5RArgj65vYBuD32Zm6vnZ4KsBqK3pH2MdUU5kM15hk3vLYd2D4gYE3dAmkFW1XnVzRq",
  "key23": "45tAVpva1fAEczBqsv1ev1YdFcRNzKagTuEhTobJzaaRFbZ8L13vpHvVfFHwk44pJ73XFHfSRJ7ufvVDyLafZy3q",
  "key24": "4Rx2i58L3FvFnwJJ6Ko6zVudLy2LSE9v9zyuDRMmi3NRDzM7EX7PZu7mS77ktXCPaYnaZiFstJnPzkPqZbXyFSY1",
  "key25": "3ZttRi9thMfikcwNYHQtdbHf8Zt4iVKBSbjLdTVRuSTLkTmcY16vgUaGXAaP4H1cYknpYcFjrsCyHDayn379ZZwm",
  "key26": "64nwCKSPDq4VbtQH8U1zAoQSHmVpdTcubuW47AT3Vc1wtEQEbprpynUDXtjmtvLVKev2hMwQg2TLw2PHk4kmQ3yM",
  "key27": "4GjDGqrj59ZysbEYmwxUEq1wjCxGvPuHTmGD9LLYDxAtMqzHdCqLTRc7hnoXMeJTFPcvGL5eXc5JbdVXaA2BNCPi",
  "key28": "2u6w8M4KVq86GYgpttHUC7WNV2yaeAn5nL94sxAamdbTu2ELjkHaaGBeebTRwxmXoHj6vXPDdMYwDUqLiMeSTBMU",
  "key29": "5mKuJbaoPs2qR8yConpLEf7THA4vjTdac8btwSj72sJbNvdvm291DNbR1aZaKmyJ5zjGi8maS3rLYC6LUpYwe8L2",
  "key30": "56J8vigtKsBYYiVvSKd9mwmd9376LjPrVHjkxAaPRE3RLNskZJiAax5PvCeYsRAoVws8deDKi2vmD17LnK3RnDkv",
  "key31": "KRFWd6uVtNXguaorgy758XqQ3VZdH5GYHZp3kKGXNrXTgoD1SpegPoEf8kDkiWNMVB7JCF2fMyvSMyySKSwzeAo",
  "key32": "29b7YYBLdcKN99P6DSd35CbJDRNoAi8h5NYjqcMaMLqKhN27kZG4mYUw4yhjmF6W7fMW2VJvbRm2tLzVKbp4Czbu",
  "key33": "2DnNfAMYX28hQFdDrYbQsG27AtfsHU3L6CJfW2iRYN24U7NtD6hzRnEKXsEuzg9aQg92vAaX8cBpSeFnzZxxQ1Ge",
  "key34": "ehSULC7QvCRtKBj8fg8CG6NoLkVe4qhJ3iLp3e5kwQtS3Mp8JaBdTRtnxqR13GT9hTnpTuGyPdFXTfibw1sRuJa",
  "key35": "3TF9fTG7ZwsSnVUek47Gmowj5T7wiMtsPYt5Xo2ooG9Ujuq8Ywof6SV7jCjcU2EcULXTsaNTCU3okBPFx9Ss5WnC",
  "key36": "32cfhAm1cnCHJPLo8s7jg7KduuVZEDr9yjjcdwQepu6vSa8qC44kr4PQkXdVictmNiTkzvsWWKf9whnZRF9RiSCe",
  "key37": "5eadLLZw2a45Y2a4HPrZ45mm4JMmGAvTKmL5gRGStmtPMRLT2bf75BHUnPMuVgrmKLetWrKFC3M6RG1noVTjoFGN",
  "key38": "22UySYgtmoTxm8rC3Xhq1GF2jCBczFWxkkri4FQ5mjFQTi1a7PoytfqheEcGeGQ6SWNQM7RpKbqSahV98VhMPe1V",
  "key39": "3Eskqvp6xZFQ2Sy1Vh32rambdHLjWgW3NmJXHgFPBNBSRf2Ti53GrSojKKjQHSXhRjqjLUGDZQJtu77fpgjCXAUY",
  "key40": "2QHcxGdB5KzzPE1nsm5cFib5LbPQLnFXn84GMREMUhnPUdfQy41FoEavhby4DNrruoAyCUZgUP3qwCwUjrtCfhpn",
  "key41": "LRwLQ3Nvus1zctHbLZrTaTA93TrVN9P1LiTLx8dHmiTKbQQm9pXMEL6ZhgekAip9WJw22Gp5WSi9jg8r1K35e5u",
  "key42": "65UZEwGVn83kWy6RnH2SN2NbyfEvWs6k93ybzQUdKa6AVbQqbJJU59U47ZasyvkVKuFbybCaWZy51WqmigVL6zGz"
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
