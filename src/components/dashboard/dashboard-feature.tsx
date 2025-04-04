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
    "666GNp3RgvGH8EqF5Q8MmTz1ZFrBu2pbp6kuSRXqE4VtqZTjKnJJg6JFjLxgANucqCRGQxTsaKenUwCZXxZrs1vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkpEDzRwSxZnQpjfhosK5U3f7huedPUAs4RnpFHxDoS3MTRgqh8znzvhXTgMiXaDCMuf9jMx3KB2qteoa68KKEX",
  "key1": "nDFQNsEEYqpA83y87WPdQqVb77d8YvYALs5fF3cC479ggiGEW8kQizS3WzDLkorh12oHeDBJQjLfytgXUBpQJTg",
  "key2": "2skyNTUyGVFNc7w2Br48X69wjKXs9V2j9XUo2ggGnxGX7gHkRbkv6TNXnegShHTsr1LPC2sSt2w9EzjcUsqQU67z",
  "key3": "3s87nusG3ae9rhbHk9MsParmMwm9roffnKW5hj8nm8gfzzxvK8HMYXJ6XprSqUMxBxDh475g8R5KdMgp6eyQXcmL",
  "key4": "fbFg3YMNxQqi7zjeDavQfWgDrUFPzsufRLfCcPaf4f79JJdNDhzzSd1WJFaqrgEZfJQ3YELrpYUR3Mt51n7Ns1b",
  "key5": "4zPcraqutxxcJR7jqgg2X7iqZVvBRXJcakSqsQiw29GvKSHBQHvcRKKdLVCsuHQF8FP22n9mHeWBj1EVaNNqso9t",
  "key6": "5b2jmJgKM6r9obSYy7puTQx1LTG91cpnVHCFiqYUhxzTZGF3DKuVHC1R9hka2WurHu7n8m557hCia4nAQPa4CZqj",
  "key7": "3Wy7Av2LHW1PNZnUQJRty4UmYeBoXxc3jprenNSGbQB8hLaY2XBU8wANQzQSMnbqYdiyEAPuzJQ4XGpNyGunxLcL",
  "key8": "4P8x28pEyTXMxB57zB9Zf2UoRpjYGgRi6Zxip74y7iV1Kg3Ngn6aoax9WJczb5BnZrm2qxNaf4JnJFXtT2M2HwJe",
  "key9": "2iAQXekxqk2ZWw6Y81tXumvhEAmqu3uqDHnsEv6UJ1y8LZkq8yDuNUK3rSFsYpGWrUPNQ1L6p3LNovy9NaNTXzKU",
  "key10": "w2vsVs5mtjXF9DqJNXnpw5jEr8dhJvzQCkrdacyj2dDbkj8rJM21JhRcow9cShRvLzgyCR2PDmHM3V74foXUy8A",
  "key11": "2xAURTtz1pok73PcRgD3ki2ZgvHU2qJrpkgo8iR7GMeG762nBtXUeSCy7svodYVHJu1iCqAXyzi391QLr9Fkk9ke",
  "key12": "FwWP95APg32mSeu3DUNPcJxGEiUEZh5D9Z5vVQwFTouZN65BRM3MuXe7BmTuHTznJ2sZJhg9e59cqxgrWtTm6RD",
  "key13": "2W11VE5qwpFmfRPkfRF2PBMHJuiZfGGbYJjAcgvtsFyUMBc4zDWZjm4z326JAh5er5iR6Ac72L7QKwRDQnCXVPh",
  "key14": "26YkUtWvkYB3o86QaWNpeVSeNjUta7NKhKcU1afGWscfdLsnnUXbwasitiQVPCMu1au42YdMW9ysavbYJqMoekkZ",
  "key15": "5xH8Sf5z7rkBzUjkdde8H4VtWFyC6E4bx8SdRAsSrrGps48X9zUXL6cnA3WZUrNxa9NJXPBNG54oeZ3XbFmrUwTd",
  "key16": "5EoUjZqcmohRwPhvw8RryCj4SH8Stw1Kw4Jg5KVy2LVhVz8Acc6HYmvaCHX8u2yXFx7F5aUsmfTA5VZRysWwjU92",
  "key17": "yzJHYkQJA4PVhvzKWPn1rmWXFquqJJyCuiuoz6aXSbxyTr9gKTsk9Rf3JfjexpwMGLXu8gvQbWrRvZaWC9gcMZA",
  "key18": "5Z5wGHvmjwQ4NG7A7RH3wYcKuAkQAgf7EJjViGjbnx8C52Bg9aoM4YhjhnAFSC27JSY5bgQnTW71XLuMaMv5wNiZ",
  "key19": "2vQfkHDvQVXHoijypGJjuw5iwtyrN4mmvdRdQNTJK1KbWR3u5Vzxr6HxSdbL62n5zfVYnJY39CtdSx4SAjqNTopB",
  "key20": "2gDzR3jiLyYuvirMdNkZfHY17iKjuHfQj1pFdwqiJS1KAWkXBPrN38SC2DrTQViJ1NFYnZWeGiF7d97wZPZzbGb1",
  "key21": "nz3AJSYr5uzZqzA77Ux6DubJwGaj1rJ1y88uizR5Wba37dCwWWtAK9P3r7gWqAauESoZPdJnjkAV9zi2fPZf92s",
  "key22": "5uy1CwwyuBRbk6F8SUtqA65tSM4mi3NJqGKJXhba5y88uMFqcUqzm6jz9UrQWy7Cvj6ALFUHcXHqYsB4izg8LnD6",
  "key23": "AwwApSU3bUppmC3Lx3SbXTmGzMNuRxCrHshsuoYwXJehatEnpPzJBZjWmvBFyo326UhuxigYWyyM73uiPHLaqFm",
  "key24": "3MNmqvUNoZe4Wfhg1WsMNUtsMnWj2EQgkRLxiS1mC7JiUmnvBQ1uXSQdUAGNdE9313yUScfMKbs6QqLWumS5LeJy",
  "key25": "4p8TXMdtB1Sh4Lx2b1sgQRGHUCzcMC6sREZs4jc6PJgPRkSjdJjMhciyknm6HcRLwki3xvEzYmSK164HUgwcCPqb",
  "key26": "21pJj6gXiZ8yYx4WiLqZw96e5YUB1cZLcTdWj9Ksm26ManPSgcRN2ZNhCCFPMGGvUYLA3i9shdNwdbe4x9wHV8eU",
  "key27": "ANC9Bfi91w9Fh7KW6vtcvvJU39dJNRFJu6spF4rgqj2cWaRiRaqTxc8LovLEahMy4ntX7yx56HQdGu3rnk6ze7d",
  "key28": "2rW8bmME1tDtL11JARfvkYSB4MsPPSrynoxcKWfE9cXwzdc8teW9GPr1S6Zy42yzS1Y3sbE9q6HaVfyncXV8RxSH",
  "key29": "D7ddRrd4bKXXnfQ69tcT8Pf333bjN4Hyw7zpESunWYonhvBrZTi1ZGvGsniXbXuRauHMkB6B4Uuf5YXxyqryrY7",
  "key30": "3UDcXZqTxVxTiQM7xWsntws9tf6Cmvw5ZUTZ44dbd6BbDr5weWPtFi2kKXm9g3EQMwNz4gJXbAE5Ufe5d8ZLRRD",
  "key31": "5r4cjiRv5duLad1isQQSmZKmvEWT6h7LmCXSuSt6J5YF9iAokckT8Ch6VZbvtRxZQzuRYnqu8nFbozrwCsCza9k8",
  "key32": "foJb2v4oECeZKmuzUTFZWRZHH388qfCW6hdysTR2Zvr8NKTm2pxCqDRVRit34vVaZvLUxBJzXm2jgQDPjoPYNxL",
  "key33": "5aJM8LVowbfWcESzD21Ee3KiVHgGpgE4Y6J9UqsLponWkuLCR8VJmTgSBoexdt5vaGX96VLnAmXXU7vWhMzZPAnq",
  "key34": "2bKzAXHHp7GHSXPNENwu31gxDgzdWXD6CGCtVmzh3AX6uF1B69fsRxmtyyUaFpmAfLFE9iGaozCCRZ4VLzijU5sS",
  "key35": "3udeGxrenkpAQHSbGfnZngWAwEcS5Z6Fey3vhg6i6USLLLnerzN69fd9LCMA7iHLjEgRrvFD4NdouXnGxQekAPKi",
  "key36": "4iemvQxc2es4LaBbawAmNo2SHHWGvfpvGK48hsSvvxXQDM5uJAucDvvZ5QQPaYY4gJXV75FB8kVdVirJWJQCnv6k",
  "key37": "2UzniqiYamhW7gJFv4Azp5pLC1VHAsCeYVuHtSJFji98ZvE12VJAxrb53QGhyFy7M5vgsEf3TFejgERcoq4CnRej",
  "key38": "4tmKMPnyQNF6AibVoxfA52JFq5cnrVW7vHgALeGAGeuN5ocGynkFgo3DoNDNMaf9j6H1warMJkEUHXbtmY3YfQso",
  "key39": "2dpPSSEdQF5ZTCHSGTxcHnrBqJkGJyx6yS3KUZEroDHuWVq7N6WBTho4u8wqfFW2YBDhGkYoqxqK3t4pfxvhyy6r",
  "key40": "3U6jsNrxDLUkQju3Vx9RP9raEmipvRAEsTfUjhXRkfc47GNFAziSECr67QjQ22G4pxBWaLmteDaFuNbWNWMeXtbg",
  "key41": "5Hi2nQNdSPSEnKokEQpEf7aYWAwno1cRGLybmGFRiXS8vvweYVe6CQGHjSSN1YJKxsTdFA6td2BmVuboUU9bVUr",
  "key42": "3qiSJMoESw6tjcvQnQts6a5brkAoBHjn2ELnMwCdJbpP4hGuNJKt5WyFGn3bFdrvcH9hMcSM3St1HofbNrE8NKKx",
  "key43": "57AzcRmqc1Np5VAuMJdT6fnGcqjCN3eWgdPSTPFLto5BEw2Q3dYsMfLUZWXWJC5cVdxmScnR86Ei6DHgKCjwifQ3",
  "key44": "2rnNe2JXwvGrQWeH8Hz4hj9Mix8kzTMuHiTUBmQjvE93K9SNNaS69oJdcB38CJnSykkaMfv4zsHnU7Xuo365CVqn",
  "key45": "X1MM3sYEWWq4wrh46b87Z73HiDuF6tWUAEcndzmjTEPfiqbxwv9awrHaYiJXmQwdcHQy9BoDmS7K6Foozv9JMyn"
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
