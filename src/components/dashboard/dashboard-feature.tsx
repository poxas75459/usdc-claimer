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
    "4kJpThMefc2DULUjUoVPNCBSX9yfgcQjVT4PBKWazsj5qNNtd7AU92Zg8oztVqE5bStz1Gj53zQqnXwCVK7UA8mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2pxLhRPdnG4QRCHfviaqtYWY996yKarkPXe4edFaQAd5haMggfvzCrEqeggakcKGzHZoCPwnDz1PxtpKAWmyw5",
  "key1": "66fTjh27siWxtuwuCPA1xLna8tLU6MboBEX8962PovWjstyziW7gxYSxjeAgrdgWTP2CViZH27g33TmHfiv8dH7R",
  "key2": "P5UvkBZoQMpLiVzVdVFCz5aymkvvPkyeH46u1X6wbgyDG1EQmCaU9MHqJCBb9tnWtC7BRwBMP6uK3Rbpf74owiz",
  "key3": "335Gg7sVTjEWF96WMpKDeBAXfpwweLDMgLaSRaLcwrLPqmjmV1rFZQXbj1RiAMuwJmbf5jH2PG1hBTqH81Mcz27Y",
  "key4": "67nRUn7KMb9JAEuyQGC65tQjgQRqeo8r8dpQxj12DACJnRdmcNrEbP14UAVBaBBPYj5zNBV9Vs5bs2vWGJ3ZtdrV",
  "key5": "mirFLk5YLFLgs9WuWRyW3JTwPdA1YPoEern6HPj4QszKvbp36zL9XhV5YGVGEv4jeyqHmSjSLsaeMjpgXfd1cju",
  "key6": "62oLo2fi6VqbkSdjFp72jqxgghd8G7TWds6z2T9qiBg5TJefQkn3YWvmyA8iYKg9DeyKS6HoMC6ZYCp2KqespePx",
  "key7": "3XERDFbcFsnffYF9UoV7UYb6ZwZGer66hYQcbX3x7CvjPn4V8djca3gpmgAExr8axy1nDi2nia2bYaMfqCdpYTV2",
  "key8": "jM83zYwP3bMpjEJNgFJcrUA6ArCSukfRNMDioEvLuJs5BpmBW27ASVFgDj7APPSaGThJQ2o9yZT8zjFPnmZfmt7",
  "key9": "2kLAKAzXANXktxwdEqbVUnSgvXihRmuPT1VDgyua3HTYkRkcbHw1esVJKWeCesn6ppdwd6x1tnuSe5MNRyd54n55",
  "key10": "GAeEKtud5Fd94GuVSaNxjpUsF7uApRBN8CjV5w1up14Rxx5V3Y561oykbC6VZPS7onvFmh4iAPWmjxbtoA2Z8MQ",
  "key11": "uZvHk8QncE72LjQEbYxLo23m8jupPswk6vrP4Mqcosa3dyrkWbpPckECtHjoW6eDuZvGFYvtgGq9zKzN8t4SQvY",
  "key12": "37j74aUQDkcUvjrYGDZCdRsx3ocvBSAv6PpU6Ey1Tn4E3ZsbPZX66aSgmjn79LsvKquLyjRW4uFLmGYdNBhRxnF3",
  "key13": "3N4dkCNKXhoxxgUZYPwodsMD3goSahpW8yEieUTTeC9aXJk3HnBiGRrtisjeXLbAtwMtwWD8EC44Gk8LhxN8Lewt",
  "key14": "5aHcj7p6hKfNa7CBA77zu7rBRzwvEiBBMiyiNywpsmgCHT5d557yMi2zviAWT7xHhoZysiN7ZTf4o1y2AXpxFeXC",
  "key15": "5PeCQGVkLZiPFgU2hmAiJ8qC5YbPh52YHp3rHUr2Jie2XRed15zQFRQTdeZWyD2wM2WEcuqJc8EiG89ErhR9wZZn",
  "key16": "ivWwHZEGs8mb8bLSeMHDfny8mdSekHwKb3W2MgeaRnv1uFnNM5Ut666Kd2fgDjhXwqYgYHxGBzfYne9HVzthxMt",
  "key17": "3u5vDjD2uw2zQwQVUNDtXM7zorGpMm5gjeUXsQb6cxr1qWs8iXSKodZRybQafgCiEVrJFfbdU2Hc3nZp99XKaxQZ",
  "key18": "6HtxQtzBhEXNgxP6qLZ2ZVMt1eSWqQQjaqUJYetSSG8RACNDFunQ5878kByzia5SxTZ7ujxPuevy5HWrAkrwWsG",
  "key19": "3kGyFsekpCBe8RfMXw4v71YvVXc9XMXqoRwVHg5jB3wMVJewPEMpaCCcWs7Z3xcKfLDLh5EUQD3UMSx2kExwvw5y",
  "key20": "5p3dWUbFRafbmJazZvVNyBVUp7Yc9kmMPThaM6mJGdSUMPRLn46YLMYBzSye2SdY63qCEXhbzqggsCTxUFfWSxuS",
  "key21": "Qp4SMXwqiVEPaKEBe5MRQYgnPtYjFs6MizkxKCNpkio1SNDQjXL25sDvSXNxTcBZBeuWzeiMAj1hDEEg2k8bein",
  "key22": "9JqBQvQ1xw3Eqvr2EQAQBZLtM6rp84nxdhiGhiJKZMGFkRusB8YwmAam4LQdJNCsC9xnwDiHLHBEJgKasbBP7LP",
  "key23": "3F6utZpBj4qPUh7oPYbnpS2xFzmdVemP4UmK1Ho24RbjH4orjGQPi9wa4DQw1r8nps3v6ZVCS2phSKmGuWQzkjfT",
  "key24": "62cVw7BzGSYPfFwapELreqjDstxfMxBwV8JWy3pDf8Hrk7T26Z7zNRYoA6PX4Bj5j5s6UJhNZ8zt6nB2mc97gYv7",
  "key25": "4S33qrxvFcXwTUwLpKs4tn8dqSCfU3JrtYaoTqVNcaptxixHUfeBhXTpTxNeFaKenYEv9HvEVnMELPcV4Bz7dY7q",
  "key26": "4ToGjh3UENXAwi7iBpXBDEHLg7uDU7z56gmAiRRafQcponSw9UM2YCTqDPx8Ezn1UYybdY1F7hb5iL6hBM6pZgFd",
  "key27": "48yEbV3MhemjorZpdrJTNbS968FBAHfXJUi5JgufJbczF7CQJN9zqYCuZHKX9LUs6C7Y3GDet7cLkA8cxATh6eAJ",
  "key28": "5b8xX2sjwJgrTnweihbFxrgZtFsp3BxgbW1BSj3kaxenxeKWgFYrpiPJWKDi97L7QZm2j5D3g8oFrCrtfRN6krY3",
  "key29": "4JF7hhh38awCEGL7kT6Svh11N6Br2o2sy16YKpR4K5eVuz5Sf5L6eBYwPT8zuCQi2FHy81n3wQAAxN97814Adt7S",
  "key30": "3hVxS4W3M2WDV9UX7c24CXj8Ck24it8f8ezBKdTSTVq7xPxLmFZmEjgmHtnCqLhWSGYLbHddEZ8UaCPkKZFfiuyv",
  "key31": "2covrEQNcJNm5pJNHxYrDRysekWzRTePtmVPaQaPbPyTsnYpGBUJVHaXr7HXPcXvmPFX3TF76hgSuDQi5m7CeYuq",
  "key32": "37E3eaRftJTbCEtMXgAsg4MmrZpk1hkK2bDh38CSM6ktoUzHfCEfxYzsVaEqC7jNXAEYmTN397GWFhkob71VhGSV",
  "key33": "4ydoiDFUhooZLAF2BgZTBw4zZ65iM5n6zDWxFXByZ9qBjyPpk5UUeLGT1MAgrBneSicZdtKp3bkpiokRTzDLrF8V",
  "key34": "3ePA1b2H1b9RtiZTKRKibXU2q8nD75cJdGKnyodByyx8HjncVtGEgP93oL6ThnjYoJm8aCigRpuJcDD1FYAtUwMZ",
  "key35": "3ZBEKtQEwBQ5rg66YWq3LSsq86iudRojdqHSBUM9Mwm6UMYFXYGak9QNzzaESeMJHSJaiyHb2CF4674fjZJqiQZj",
  "key36": "25W7LMsf269JqWPY4UxNF4u4qLsVKirnXv1eEDX5tqhDYS5hdcgewmjFnJDTbyftxRT3rjLJ7SQsLRtbfp625NCh",
  "key37": "3Wt4ojKLVaY8kLk4EiLDWv37zd8gRkrSwYFuSsmvRJdE4cbrWUhpxE6tPVw2mvkd8y5VNbYZkQmuwq1tTZmdxUnh",
  "key38": "7de838Ynkgw1ygcVR9ey1j1jfDxbqyTcx4f1DkLmefx8ZznibXnhSqYUA35AtYdDaLVZ6ANyGeSimn3bq9UUSyK",
  "key39": "624asVdo2yGGPiHptXcLmTqBnPvUVqyNQT3p9f9p6bpGsifocop3WCHt5mu23MdrLgfGXybweS9HFg7up77UXo9w",
  "key40": "koXtDdyFntNr4qAmxefEpznxX1bxnA8W6fZhMKSqkfxGA61a6qYhdf7Wqs7WaDWZqzXDsfMjZXvoZYHKh5AFqJV",
  "key41": "5pEkcVZEL3ts8TpRkziB2FmGBgW4toVJJgTrCsAoa4kQY6jrao7VkAfpcrzvjeDbHQTrs5BRtwp8Pq8Un6aU2X9N",
  "key42": "35Dfnd5PQb1FnCbSWVVc9YNWwdNqQ7jeTc5v6qmirDV6PhsFDxoKcrayoMRzTkXHP5UTE79Z2VatWUDK5ChRRamy",
  "key43": "4YRjEwAbzj8pcfbTKwxaJvtbWTi2JrDaTJEodDirvzsKEk5GnaptqPSjZiJefrYWobJHiYkaJVvJYqEN2VxwkZyu",
  "key44": "2zNv7CgxYRhQrZxV2ARVLgUwK95fcm628vcAk3QdMhSCR27gB97owQMFTDMw1hrd4fR79iXFutqkZAue4BArsdNK",
  "key45": "2Vrq9HbMYX2Wzgy2CUCrNnWGtcr3feLs9QgTr27FVNvBozzHmC5cLtFPUtSVUaTvXN2xtCbcpdz5sN5yEBapFG49",
  "key46": "4zYinKSngAUqf5XLDqiNs6djguXv6a6CSRWonL7ofGNHxSKJFEcmewqu3omMe8WhQUnw4fmUkwKje2hGFV4Wf73Q",
  "key47": "3Ey4zdU6G2i87q5yq2fucfk4FNh6Z2srYv7fCky6TSmkgt5s1qpeTBrL12CMkHUdYps5NSx97tQxsujRjscijYZt",
  "key48": "4EeEHjx8Vkg5hrg9ms1bHNpc2RQkUBz5rw7V2fK54qZcGvF5bjpxAfqz6fMrgXgwS5y5nVMxCzonrFX7pRCSiELY",
  "key49": "53dsHSoiwWRiJBqnmm8tyDG2gX8Pp957Sbjnu3jEkMzVyS5jQ14GNN9ty8aGvnqwH2hec681F5yyYjvdbT9X651R"
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
