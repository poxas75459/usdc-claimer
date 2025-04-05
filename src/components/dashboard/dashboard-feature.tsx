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
    "3wvk7bRr1PCvLx3xvrSHJ33HGXm564wiDqRYr43q6A4cWqy2wB4DeEccCKuDWG3A9ZHSmSeJBcYeDPYqoEdS6SMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NuYXVUsvVMhZTWwsa6EDYJgAbkisv46L3CHSGsJjYECYUHUqP7ioRgVbZuD6XUiduJzzYtUMjd5M4MLZmFxTPn",
  "key1": "4DawhowKzQPswxLTsLo2YLqhNh4yqF2vmtXPJSM62yLfZjqVKf2M3m1yVDK5Vgrm2hubAAp79aJ51kEyGcByekST",
  "key2": "3hZ6L5khx5R4thsPTrgTo6EnuwgbJ7JV2cFZUSqahWKPUh5yf2TwWNWCYxhjTGmzwymwnb3xuwvPv5HRsK146Wf9",
  "key3": "fFd1AmtY2hwwuS6AaMxkMRiRrQS1d9kzuprxWW4fCvxJVu5xP4rnudd9oHswemuqeMzXsNhzTsvjfwg1RzRUMkJ",
  "key4": "4WS4PQem8UJS1mJkTKWgku8GcyajJUYSta2k7KVG8WcqJgtcmeneC5RXuG6beQDXX4m2kTMtSYdNcVyPZLcL6e6v",
  "key5": "5WXFFSYWbSY6GyV6QBJB1aSRhZLDadDMRUrJwuxjZRrVnou92JMdsBkPGwteoDFMnkrJA6P1xQTzzXpYe23NmsP3",
  "key6": "5U9oKrLsyyMqzcWw8S2ygw4dJExwByNuoniCztmHskSBx6bXZYWRhxhXQGiXZZsSN9fCZ2pgakfd77vwNhh5u6ns",
  "key7": "4vHyjq6WG6QUbtMuRdxszjWA2kiRbASER6VQLqMd7dKsJ4uMa2SFqhLgwfzodjBUpY3kth4AWCY7r8xD4B58vXKe",
  "key8": "2jxsFawhGpFdPjp6YZNv8gudDMTeAD5RYzoMJe6q6uRjvWBaLomTQgo2vxU9TuZa77dHpN68MnGgw6qJw9fYG5KP",
  "key9": "5TT4D4hp1Vs8T4nD1et7PoF34aDygFsBMmxCx5ERiXogEboeFVR4xW45JHPyWCF7YYQWNqVaQ3r3PtM8Q7E2wZWV",
  "key10": "4QtygzFU4idVyneCkM6kLHW3XkXEJZ2tnvWPm6V1DQ58rjSyu9qM2NeB743cfW7PpJjwnKy2MbEXBZt6o8kBnnWU",
  "key11": "2aMiCKYGLgdU1931D3zaTRZwBBCorGCgvu99pT7RtqowAvJwHUi6xGzKYQcj51r4ZWu9usuUUrEutqAiBhEj4Cor",
  "key12": "27U4oxkyg4BToM6ybtUprYYW5VoAiHEkqfNGTVJR9fyXZ9dxRyJJ5wtNk5ZiFrZyNN6Ev4kEEyjvRoX2RViLYirv",
  "key13": "3RJv9ofCCDGRC6w5ZxiLY9hAV7TsWnJQKJdQDM9WacUZ3XkYhXn9E4nUxJ9JX9FP3A19PU7Nr5Lgm3R8PXmrudAS",
  "key14": "34qio9rEhANjtM69ttgAysfuGQM8J9RireT8WzDLZqVe97F9hTJYNpCqZfLcJxwadprQjtcbEuhxiiUcebyuih5Q",
  "key15": "z5D7x3ycaBoFgXqoLeeH2RKeyTfTcgJ8dScSih1skj3vViz7YmRsVTQL5iKdc6yBic1dEpCWKL1AjUydejtN4zz",
  "key16": "3bWsEgtzPTpyFU52FuE6z7gwKWj2PS4hnipKnxDpU3SzMg8btP1xR6g52WFanQ2jVLEQcN8XYmuE9zvaaRGwmdSZ",
  "key17": "3nkNPJnsDmqNSYqbBdHnsEe1LfWE19i7WA7UTYsMG33uZGGotoCcrapjAtPrWGxjJgYTaDKf9k1auUcGNEKHhQME",
  "key18": "4ranQKdXYfUFdWGFAbmFie6TBEAuBsHxZLq6e5kHv2eheUVxCxdXobswJSucdVvy4P9cPBt2oHtjrxqdVFu2DBuQ",
  "key19": "2fdtW4bmKHDqQnHVyWNoj5o1duwKV1vPyWUvjFWVAzqWZykMw2UrNkrGzSZpbeXFfpyhH6Gsv7syfFdfrcRE8fxy",
  "key20": "3sVSFrWFMJr27kDEH4gp3qkowYJNS8bSBZgSpTV6wzdg8AqVjJ6Q9jZQapyyQ528mbjB8UEAg6B648GxfCgKs391",
  "key21": "DbWz3zVEdMXpJkgRge5iKzJyQ3MuvXTRhZGq6T2YEQo9q8fEj6rgNBWc8qaDBXoSTuikWvcgNx8vdRX2v95o34i",
  "key22": "5u7LaicXd6YNupTMAFENRMTcXnpJNpkMaVywADe61er3o88BjtcrQC1fEFM6Bm1cCFKZqwbz5RDv5QA8WpzUscaR",
  "key23": "3qEiC7fGAjTYimEvsWEhiFDXYRkAQ2a16LbafVs8MEJuhddncy2FEEpNx8fSe6vr6sVoCpY6D3HwacAYek7x3VM2",
  "key24": "25eYiWhuDm3NhcmdS1oHpfKBxrsHo8iUTnjaB8PaEwuMCrxsm5LX3mdeirmNrzJ2A4erEsFzHe3c8v2bzTkDdWx4",
  "key25": "4m9QUq9tvnXeF4vNp3JrraiWAY52tREHMJMVh582yiL2tmfkbJPgka4gonfEKWFkaYdZ6fWqGoS74Aoh4o48KLmY",
  "key26": "2TjGKzi7dz9zCmSgazw289DmwHSwXRoH9GkSLLrYKV111ykqdMeVXUG6GxpZJZ244Xv7uAnChWQHvR3bqD9c5ckH",
  "key27": "53oQXCugxKLEzWxhYN6SanggJ5caiGhxRT8QFtP1a5mKFt48WSe2DqyPEfNkUkJ6qU7io9X5SD94UYo52iQ6ccee",
  "key28": "2i1f7R1vApcj9zzMvcz3svnWKPUW81hN4wMgJz2zWcp7QuWt9aDtZVNDyJeKU52DqN7WFQC9rQHXDCQHe6puR294",
  "key29": "3Sh923hwqhGmPZE4RbJ7RkipZNG5vPAvT5LxW8dkV8V2HetQQvowSDxrDVwxaMT2MLpz1MMy6fiBss2Dannya1Ui",
  "key30": "4mdrF4x4VqkZLoZoeEbeVASPKMdHdAMKrJR5DXBbuwwmh3HP9B9KuZm3RjPb7uRrsTr8Av6XZKUH7CZeop5cBPq7",
  "key31": "34285EUvbraHy1fkDjCqTTX2BefzgeXEiFeDtXFCvmcBy82fWnnwpcKHbQokTG6J9sRxS6d6zZ1PXZWKbvWUXQsJ",
  "key32": "5fTKG9grXGyoXkW4gH72hDGMXGpEp8Y76NL9cpPoUa9fBpL3W6eU3zAfjViNJrbL1Suau1iK9RasYU6NKPK26LA7",
  "key33": "3cm4XavCV9XHKHCGunk2GeDMZv6oXBEiwYj5Vpp5erL5FGoUbf8Fq7vc1USnhhsjF5MStcZ3vzQ1osQCcRj8NWP4",
  "key34": "2Vt6FDZCyF6sR7ugWoW3mEqaveEoUdq3fEaf4pozLXoquEsHhw9JbkV8KmNDwMLdT1grpQzFZDXUPqttBRwyqJYj",
  "key35": "dLLi7YZtfF4XKv74WyC8o4MaZSuuNJN26ZHmuA5b7V6Fh8bKxNhFg5LtZX6CLrEFsqo7bcRqhBTRqoLtMtDCBmQ",
  "key36": "2hoyBfZGUvzWoU7XvbhouRmK8yN7JBGuM9PoguDgNceKVGm5KrVYLaRXqtxjp9KugYgtqiNsMKBrr5ANLdFcaJe4",
  "key37": "2pWPQfh1MZPrRG2Af1Hfc2QxZrjyYeXZjVDML2KQjUozNvdnV1VxjrgF25cfgiKTmxUab6HMQuMVsgf7MLQfRmVX",
  "key38": "zBsVuqmNXJhTyzV84xBtVSahDbmRsuo2guD5U3VRCaqc649KUSH4snvoB4CefCCQYYHpPuyjVyRL6hN8Pg1aDJx",
  "key39": "ATnkhEUwnEFuH8jGdykTzrdHbLfBtf8eCumtWVnj5d3HoaGBbzGHUcELZL13XrH66YRYgvZFf3LaTksu8i7nR5s",
  "key40": "4ALAjDdNeeD4aSXWeHC6cuxC4QpnTzb1nhBcrWbxjtxrm1XYq9rEx9NqdG6eeZw5LqpmhZ1i3GknZQn76T3eNtA5",
  "key41": "mQDf6bagKSCpcYoGtHeaymd3JWqSdpo2VvWTvG39EYneB3FcR48sVn2Z8k2YB4YZ3tMAzAsCD7oTzEt3bQSUNWW",
  "key42": "5QHXRCnzMHtSNTxKjVRSb6Fx7wkGpAPCC8jf5tR7z1popKRfQFLKe4E9UnnzgeLsnKfkTtymKDuPuTmNqLzfV7xK",
  "key43": "5iJkRz669Gzb23g6HTwhQXt3YG6PTzn5VWSYgvTLMyk6b3BjBzTC5Hs1e24poA1i9LuYnuyJewXgMwnUL25zc6bU",
  "key44": "4xeh4NjSZvTqzZ19rxWv5mMn5AgsRn9FLf3rpFKufT6tuip6h7HBayz2BiuNSBzBCEXaWVTxxGgUhyzz45fhjWE8",
  "key45": "5xFk7RhwpLiZFfAUnCWKZhDRiM1VqE6mdX6wvPvuvc5feoLUPwXLrWoozTibFMbCjsAm8ujqVqUCmjeo7i3g1j3J"
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
