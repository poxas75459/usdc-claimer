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
    "4z8mBzF6FRz6WJRmSCjwkPEHXq9xBi4GZcgWdRp6qxx7VhdGnjmX3mjLd4QpcLJs4b1nUW3KDuDLf8ymBo3PTB8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rS1kG7k1DF5gRYrcMj7HRsjUUihpuxS21oKszCuSRf5cYWBoK9AspiKsFh5eZ4dgX57u46mfiPyDLU7iJpDRQvy",
  "key1": "65V3m6hbEbXHpJU2s3cBV65TdfwQ2R34WJiCQLRZG3q9bsUes5kXmDNBVdviJeCWXBZzkEM8fcPdsPV834DrsbWd",
  "key2": "5M3YoRyHSAWK4T6PLFioE7mrgdBPLRFkNLDnrtBfDJKxJN2tJLHP8h8JLdd8vpf72Eda7MiVfgajQ6epupbUc3fo",
  "key3": "4EdvwwurtdPzmWexdiq19GfLC9DPWjYnCiRaaSes8VqpRsmjmASSPPCGPSL4uAXemGcbTnF7dvQXd4iUCfGSdmga",
  "key4": "ibKThafYn7gVooiq2xVNHQXnUqmLBKpWFr6rhv8TqbfXs5mUju4gieuWR5JNES872bYXGsDw2hfL9F3xn1N2Tfz",
  "key5": "NEGQimr1TPNs7gKtrAxeVL8cRE55QTrDfc4D7Mcf6bnJtVuAAjEM1ZX1BgXnYC9wNCDA9Sz6ymLcuq3jZKeciFY",
  "key6": "5fmcmRVUn6h2CubjBuGMeKpLvTbAWArCuacLLA7HekJkqdDzuFRrvuH9X87wddFJuPXyzZPz5roUC4jfyhfVeym6",
  "key7": "4UEHtrHoiUxiL9hYEf4CPLR7ASHB2XbJK42Y9EZxhrm9Ms4FEtK4MaRVyyrv5XPVX2hsT4vHabFf4etkEpHHA7qR",
  "key8": "PbEQowVMCBPLy3GhLpLYL76Bh3zzMqEwh7xUAE9wrS8icDEaJP512G1Rv1NQ5ToTzcRi4iwhrcDSEdVEQCV7p3o",
  "key9": "2LeCLD6WQ1wgWcFNtgT5smJwDsaaRSGWECEvfGh57JbsEPSQj4ukmS7NiiEQLgPjp6eocRSkM7mwcxPxq4b6p2pW",
  "key10": "4Vdwv5s1LF9CPPhHayJkcmhwKahDXNf2fqGbFchKQnkMEiT4eKFdz3bPk3jpshRQ8QrtnCz8upE9Rvw6T7ZR6FaR",
  "key11": "4vJVEJUi8EGC6BfVZ6TCxNc3pdv4V2K8pyGzCeqretXbykBPBFDr7Y9FhcqMT8bisoc7MUky3mBtFWejGmZdfgLi",
  "key12": "4HBaaESzBPnh9WjbuT7ZSa4BJsKyZY5d7vrdtQAuj8jBqQKysjFMk3T6V9qbYyKMjjvqusrN3KozVVZWzZryqJSR",
  "key13": "4x1Yh8Rwn2qAgXJaFyuWyRGR2cY1mFAvLProSpvyk9DvVBpPtUAuj2G9AUER8qWKHuTP5oiK439DQFU2WovbwaQK",
  "key14": "26bFzsKh3jXTX2zCFvSYquRFKQJADVBpJJV3unzv6UynoGGcURFDXyfpujCf2C1LbhsibtRu7rdtYJh5BNtRTQEK",
  "key15": "32NVyYMc8ozoBW6GZkVAYFDTV577rkQPw37Wa1XCzbxCGXQ1xM6SNeUb2SHF12fffCEa9hESBDbVRjgfMYaH7qBN",
  "key16": "tMAqybNu4n85h95bhmtjQHk8TJkLUfmwmCmk2bDQ8H8nX2u1miRrt9zwT2KzSRZHSoVSHFrDNyDuGBQEAdYCd1f",
  "key17": "3kbYF9gBb1g62zREXv7qHNJUifxA8Y8GNiHgX5WE6jPp8KzCmWLusie4dA8gXy3SnoTobqC5C2hvSUKkR91ZETaw",
  "key18": "5jmv7TRZ9C8sL9FYiRaUjonwAZVKZFchTYyGrPSXz8ZtyU6CC18BJvYBApxLFSSnQMxcbd7m7XFHeSzQKnjo9iin",
  "key19": "xJBdU8bxk9mTEVkXH9oqjpAG8cktzK9rmUgWGSKouhegFgeXq3tqS2YWYFBFC3HzZV6r1kyouQMyytrHqrZ3PLv",
  "key20": "3dbQksziR7A2pg1bTsiEEYwDK7qsasjgiCuZH2MzTDy63Fufi3vrrgjcCUwjheALBcCpcU7sNy1h7EacZFtfbwKA",
  "key21": "4ZsXuEekQV1qZbNdmFZZQWKHJQUHx6UKvf5B1pB11E9G9JYo5k5TpHqaqqQcwXAYQHxHksKSjvWFkLG4fwRP445Y",
  "key22": "4ss4FhjhuXzs1CXY5EksDZrTFawJyj7gssytu3xQ65iij6c4WGBi7KtzW9ZA6LGpHRoNPahuvj7VzG72Qem3how6",
  "key23": "5ZHxkziAq4HXwsEyZVVfb8kDZ6eMdiyhjcesKweVMLfJSbD1NWUf2ybLUw7JXTjUSKY322i94pw3HHe78e4natGn",
  "key24": "3LZV4L6rCeGVjxCjdsvZ8yUCUmbPoCZkYebp5P7hxxWQKMtRAEkFgdwiFWZrAyeJdAvCo7aX2zstACNfFGDqtg9A",
  "key25": "4cvhiKnpNSZ2swSdDhbAEc7pg3CJYkEhYW8YAd1h2sTxpbkPEGJ7ZoYvFXhRbphiWxk54k6ThNoQkvQ3pjQuT3Ap",
  "key26": "5o1xpQse2xzYpQLEjx8mytPzydjeTwkw3JhkvSNri1rxRyJcvEFSNHptde9spaFHm8FkW1EzdTmTe3u9M24q4PED",
  "key27": "3extw8qUL9JNuG6vJbHLcEb2n8Nes8vKHNmUf9iR57bSrvHxcSD7PoRJ6SezWb9454WG3XiwH58qdj5mZKc15zk1",
  "key28": "2eTEv41E2r5ukYJYhTszttaWDJc6FKrQCFAHaUUJpbFcnWA39zP9ejHcKZtEdDNPqXdSq6Lr6pPqXhdgjJRs4UuT",
  "key29": "5UcLTakmEW3wpLNASjZs2CNAoCmGV17G1MtZVhk1c9s1NanzNC7gE9SHtT8FXt4vy19rBL5DepfMfVCvFzhzyFe1",
  "key30": "2GZyg6WkPSqfoCttodEFXkDtkh9zLmJQ5skGVCTEQdJcmV4GjjQ25tbnXyz5eEtzYMiTat74CheFZcLzpjVDpHYj",
  "key31": "5wUL1siQPeKfWPwaoSU43JBmFD8xjQhBBhuTnN1WQYgYC824ktwu9uWtu5cMv8KCo2uiUDTVgfMBBWTeNtoDtqt4",
  "key32": "BxopXw7FHTfLSjV8wT6vv39j8awvN3GPqu7fn4wRLNnS1H8oLsidhu31foSSXcFtiYjGzErmkcxaBjK17dJgMRA",
  "key33": "suSUfguQt4JBXEBgUVkZvTx4XHRzeNZQ7Di8uDPT1b9EhxL8dwrAJU5wsM8x6vqK1E39afRtivG59VALcvf5Nxs",
  "key34": "5sx69i4JEJsoU1K73w9epKVMehXRuGVVPdPBgoVq2SAzd2wA5xE5NFujGRAihXE9RjvjtwPWkGPZYfKSEosYyDKt",
  "key35": "3tJmKtbTbxgpJPTqQGrWNiyruVTZwekB63w9HVMenjhiZ2oSMnLgpHZfgDFeiLaZ1C6AL8S8EyFXVtui63a3gCim",
  "key36": "3pkdhWE7ffiq1PG5uQdrGk6djzu79tExL7Ra7rrDXUyoxo63AJjTEFnxACZD3h2QinPL1pauj4jJKHbt2sbY1RC2",
  "key37": "2PqyQDPNp6FwjaQ2LXHBdoXjAuoDETVZD5bzQzBnMwTiCmwhjPCT5t4oXhFvPtR4MhwidUQW24WE7oMtbebgcUPK",
  "key38": "2DJ553q6iry1jDMShjQCGHHHKCzKcb2D2n4p4TGUzNNvKn2GsLrDJvQca2nkRHiAUMdJvTuzGcVdAA5fEkH8FeBD",
  "key39": "4VLSB5fzTaNPc6TvHNBhZtaNaLRsw66eh9XJtiDApr8Bvi6sn22oqEE7sH4RMayBbh6q5nwTEJnKEVZBGnvyE9WY",
  "key40": "4rQ2CCtAV6wEZCdVj2ycZwKjc6Mi4AZKv3uMCorHQSXxQ4QpwJbyb5m61wrdghBwgKz5YHpwoZiDQrK6ywYVfsGB",
  "key41": "fuxQrmRBAF8CN8VFnqgTz5rAYkq3gWbT7zzVHEuv8HPp9ViStdt7pMUKF7pvDU2BNXwMR3pLSuDuZU7LqSDbAfR",
  "key42": "5hMnyQ2Dvevf4XPBgcXEgszh63MNsGinYgxGLmk4YRZKaLaQyvhoJHZ6EMirEuBEtaKnT9Dnn274wwUAokLkHeo9",
  "key43": "GQGDQtA3jYMx3q7nEjmtR5mcRyBUe3HbQJM6ixcT8LhRdgTF8dcf87nQN1rj7ziz4YwNpy7CWeL8REaoC1MfG7w",
  "key44": "4shtiWukkE4zUScjSRBWTvA4uoQ5LMQQZhH4bhujmQzdUzqk7R9ZtpajYq3rkXkuXezSGLFfSywV2u8ZEgrm2yDz",
  "key45": "5AyLuEkdB7FZQK8DDzMHgw5cBz97EuuHo2vx3msGxR2s5dZhNdj5iVGkd4qdrUpQG7RTpErcvRsbTzpwJ5z6hxJr"
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
