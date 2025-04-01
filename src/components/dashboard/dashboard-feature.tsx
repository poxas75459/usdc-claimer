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
    "3PytoJghCqwoHUmb4PVcMJtDexKL4oKuUQZTrUaLAqoENCGPZRwb68uVmEjy1Bohm59xR5XDhfsXCKoQL4VFGrFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mg3kAjfYvbYjsnXpdnqvYsHhW4FR4DbHANYfubPUYQHf7bCfxFAvgNMdonAqsQYqsRQhEJnik27jvtSb8NuVhjL",
  "key1": "595EihjQ4krNtFTAwPTstNwwFX57BgEPSCRPBAoBPtR2G2UZLCKF7mCEV3Wyr2FxogoZmMBQbGQyWYAXBYTR6HZG",
  "key2": "3MkAfVBmJ44PsXfMdCMAsp8puo3WAyTcEUigBeHvg1SjcWV8mohvyjxni4918PGr8Zrcy9yPmbaqpNe5t4ythqkB",
  "key3": "4SevetXVkrx5Gjx468BAnbktyQGrMh3YiQTUPvvgKWzVApxLarjTH1Zkx4ue8StaYBb8ufGcfwsKRcsfpWcSZU5t",
  "key4": "4z9hE38HDHL8u9FRBV6cS5k7wPiioDB7LdNVD9p9xG3FQqVz2aG6NxYYE7UCBdC3sgonumiMNR63t7WKwupjiqaC",
  "key5": "49DJ48XkJHMdnR3RWLrB8oPsm7rA6vjkK2sgz134p1q9Qf9iQFHDPLm6suWtyy4AXWsPRgdHourGYJqNUDjgaB1U",
  "key6": "34G9Ze5QNppPXjNMc3wbxqZTbWAcFwZXJKas4aPKrNqrX1PWEih7EMG9nk589LfX3Lqy8yXUxfSxbyZ2hCDGH9t",
  "key7": "ReYHhjhFMbjknFp6Gzoq6CCyQvw9rnS7bEEJJy1qLc7RGnB2bfYkEBQiPFXzsSJ5cZ7JyYrTfsWd8iktS95QwG7",
  "key8": "gkoPybHZm8Q4gwcFrWsNE4qExEEQt4VfEjXTPHWRDS1MPd6d8peWedqSAY2LgDYikHUY531Nqy5Ky5s49nawnxr",
  "key9": "2mGvzjmbN8gKNguJsrvrPuMFBqHTpQcstGRUFAqn3pS2q2PNQTTSU56dDiyZqATbFmd8SAjaDeXB2i7XBKmrrNUN",
  "key10": "HVPRamULcxQWYXWRSyLWTbD3Eq7i8H3Rx5VG1YixfybpceoMbY3MDBvrBQw74zW6HfVuo96iUpXUirwQhfR3TYV",
  "key11": "5aR5ymj2C8VYPXmTbT9iSHSeJoZJL2PZ1fQFrtKh1o9NZb7y7nDJPH2984LikEddUA3CkK9oiYtcdyWkLTZmcMqN",
  "key12": "3TmHjfiFpxw1Jhwj7PAZRe6nf7fy8VpKBpcUoASM8qYwLcS2xYYNgypuyjFnVw9aPL1dWisTkciCg3gDdzEyifRm",
  "key13": "2gUK6gWvNm1UnMbPvDkrpM1koovmsuj2sadX2Se4QqaB2kqXAsHrnXigZfKEyCmnj46ob8hgDP7J2upJ4uG4CMpn",
  "key14": "ejVbUEkVPiUvCU7gN65VkFQbX7gQHPoGdg3DbAozcifHg5wDfPnTknbqBqoMHFReXH7qG5D8C1KTRwibKD2eBLz",
  "key15": "3gXnFczdYSXAdE1eMBxm74qB7z7SaHcQNBibkczBJ3jM6szGNuE8pvH9ZaFDmkRwQMtTjciypUpMdfVouuG5xDot",
  "key16": "5rjDVx5EEKfiK4fRE9R7X1fHJSeLTKj6VA9c6mq9GLWym6TDuJPQp34CBUnRsNkJ9TkMskKaLWQHhMBCZGzXzMg7",
  "key17": "5avgmJy9jiJqnwVY1jhzGLpk5RPXgb1TAyk6rGkpeDBV53brKpSfzFL5Ffaacgk3C8sbEhuJqWTjMYs7CephXNde",
  "key18": "bAm6d8NVoW693wHkt3qJ1feU7Kp3n6Luc2esVkeytvX32jTCv35Eh3FimUoWohjkuRLbxtjiDBYjXkmPf5Tpq4X",
  "key19": "5TDbZW28DG9qsrURM1z3PzZPixBbJHvj7gNp9QunRcfsyWAcq2weHaQGgQGduQNkiGMhaWXg77YGPZs3ivmUEwuN",
  "key20": "3H8NrqmQuWyzQR9X5BAoweYDfttPhd5fgikNsYVUTHzJdD6KheZCTuYJErMyu5TSHsDtFXLzCdprRgHZHURjZ6Qt",
  "key21": "5nE7FJbv8P9eFUazeryxCPnFfAWQRzs2dhWw7iXkjAR2iyrsRVugdp9X55V7wfL7BhhtpUdR7gWrNKEgCQAR9G4r",
  "key22": "4JY6RbxCoihxK8X34rrdwsTDmHGXStd3U46i5E1uFHaGuF1cD5P4vvECbDPfbBwBNoyPAVgtKX3LKFnyR7mgTqXc",
  "key23": "4qcwme5VugNfVkJMZFjrKam7RHqUZneki6o35aCYztSjU85AjrTTyQh9DN69VhwLg6iGUxVnZxrwsNXPerffpYSQ",
  "key24": "3xDsFpWd8qzFd2aCXQhEB1PEGakzXTfWeNRHwednJWpQqBXKsxrUy9cdcT6E7Uhr2ihUreScj8KnB8rXWvEs5uTC",
  "key25": "5DqwDDte95C4DLtcbkZf94gmzZQzZwgg5GxWka2Ur1X2ZKR5By69fm3j6Fn2EXNj4QAr5GwyX3VddQqcyowCaGmx",
  "key26": "33kLiiaWb4ZT4kMT3yizQGNYuxFiu9A2ZsFgLA7paJ1RHygmgU3sf6kuyoyc6rcTGBvnz8qgmvRE9NPUysFYD1xB",
  "key27": "38uVBsKgbkD79au4UzUfdmnfNTHzhgEN8qrWbKkkXModmizMnx7jspQLKqo8wsTvFUM6GubNC6eVpaWbJ5qnFWP4",
  "key28": "3NPaLoccyfoMwyPSbg8tR9Yo5M6omRfPdF3qo85Es3XVrTvg7iTGfEPrnQQtWWBNC7355Thkmpjo8MwP5RNjrJRV",
  "key29": "3K1Xrs4XiRmy4ywTjUv7vb4zKYRAhiCw36kb3quaXUS6QJvVj5yFDf3w5iwNACfo5Zk6s1vZgHHZbRtTSMrGiVQs",
  "key30": "3KGkUgJ51yWFaEEwAbZGfvoz24cnfDjVPRLycc9FW7f2gDohe8ie9PMcVxcLFVFmnddWiKN9TkDADq9Mr896NYdm",
  "key31": "5RrQA58SJ3NqFksT4sLCoYXckWn1pSpP7A8MiwPSMcfdCVFAPtYqP1YZoMhRS3LuZd1LcKoXKYCkgitCPBzgy4aS",
  "key32": "4oao4YYt1CKcVAUAVNNz8bd4J7XU8EaaRUCxNRnaufWhuducGEoZhunsSX3AQEmTyrA4QCSkhw93TXEhBj7XZAQf",
  "key33": "QnoN3o3YDcVYFXigcWARygBRRhvETKn6vB8sQ3FdxVa642CW7zkgP2NhcCykWPCvYD26exYwizuJWZe4V6LN3Pq",
  "key34": "5fgUYjuxX7rQvAhPcSmJ1ewCaj7W9EsRGfWxYDkCeZeNxf641LQjPiRC82hPXkXWzXA951i672BgKJuqzp92SPMt"
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
