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
    "2fpcTJMvbPU7CPM66vSjCwghWLn4u4U2cSf2SNVtLuQzpRZrLjv9ZnPQWRhR3X6kF6QT4UzXFjmSw39fgy4GZFkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDj3GodKwaZ862GpsY8uwV6Rkk2baBv5t31zJV6docxhBwx6tFQPSUwfABjjoQUMU6DBqTJD46B41sD67aJ4e3T",
  "key1": "K2Wcb3GLhq8zmrjeYqWaf33QQWjEkKW9y5PShmtyYJ8r3mc7vebAyNU4q5FHSWd7bbj9yjmySWaU1NSUQYbNiG5",
  "key2": "3nSqLrKMTpdonq6ubf6JDoAcosXvHWPiRRvXbnrS26Lxa2qUg5s4kpzBEQ6QiXGJcyMKbiqQ6RKRY3RChN7X4JYJ",
  "key3": "3vNNFx1pJvHXqqe1tkCGRnTcMUoUVRKf8tZhjknAdCvVePAC12yxg3aJEHYf5pXiwkj3NS6FiDFwoc1Sz5fLByfv",
  "key4": "5mJSH2jAZc4PvHMvxVX5gqSiY28K5tAJigyUekTDuN8Fyny8HFJgN5c7PR6ALfCFLQZFMF5tuQNSZ4ucAs1uqXvx",
  "key5": "huoX1H51mnaCsSBDtbyunwbsZjkzmXoEPRBwKTK2zzVzYyTWoWiUm3rZxURw7PstEaRpZQNGZUqxqQNfo4kQKT3",
  "key6": "21Xb6dGRAL8KyEjvyCzZnRqonKemT6ErB4xWhQYqFq3mKH6XXkYEvWTchLSzpL5vkt8tZizPH4zY3Vu64UUddmTu",
  "key7": "5UGFjedNGr2P8cDp7mPpUHk6mrpMhDPcFBsd3nEMSyG3k9FQXV7uHtXwk63fjDVACJrQdAHgrazsGoVMkV3KCT1R",
  "key8": "2uPVztM7ygEraewB6UveuWRG8GMPHDDEmRNdBvVagyx5MfkfY9bygG5iVKHJE7gGPaR6RyDD7Ti4TUbJtHp8Y2s",
  "key9": "5prszuA8tbBuUDkrtLsBeSdv4GSVHRUCHeDPqoBkQoAmBcLBejrzFX8FHLamEtewDG78NVkuY8Mt4YvBvHxqodcR",
  "key10": "5Nibxgs9QkzHtUEdajW7QnScpyVbTBqyEHbN5XgFuW6wbk7gKyvFg1enoeJht1f51MyLprLiFnEtm85bXPCQxY7s",
  "key11": "eu73QNzW6s61PztpU9avBa5qCVqHNwzbvjYiwvu17ztEFqrUJWKq1113Nu5aBurpbDeHehfg5Hc1m74TWDK42mw",
  "key12": "35JJtMxnpPf3rNhWnu1Ya8o84pEdAuhMnEyvZBS1egzVw5MyhyNTu9opVZNCobFCVpPHfP6eDqFngBNef321HF9i",
  "key13": "3KSvs4jsFKTzkzudZvnXSX8bR3SijqJJFiRBQurdshvyqdRJXQxCs4SHb5duUbPS9pJajBbRwra91Qq2Abu4KqW7",
  "key14": "5jkK9gQsc7U7gnzhsnEgvygJuW4pRgdUxuHcFYrzwS8tKREL9BeGtBqq5TG4oQMiJLPsyaQ29MPHXJ7LRB9jT28X",
  "key15": "5wiVs2iY4e27LLPjq4qhYV9WTPNWULYcNMWwRTDkUZgZUyU9v3sT3sorxGymqAARoiUD4rTSgneuCakvTZLYVQX4",
  "key16": "38dTTGanJpgSnGyXez5ytJ27WNnePDBg9L1YDAnGK8vae2pxpp4mwVXExk66n2g2MdVdvCT7FBdw8rBwPHAR5MqH",
  "key17": "24UTvCCUL3jJJtfNKu3Ctxq1DL6BCpRe8EjnqgA222n1hPs36JPciLyG5K3YJxKtmpCpKNgBGRmEWbgtb4MvWDc1",
  "key18": "4eSKG7Yi6J3f1aPXqSfEmFCygMD3Qsh32FymMd5EsCTZvLd51nd1JetyxGhQVpmpgs1WSdMbhrDevCvgpCX6X3kY",
  "key19": "NpwYjYT7PxTLr1nfTuJJB54gWb9GJYyyfzoVDgw7oiFsdF9mtSAufpMLCQQr1thVPKQG36MTQu4jcrkixgxzWeT",
  "key20": "Q5bjuYRzunXoMDTx4fpmT1RnAxv7qc67ihvNCT9aqM6K9HvP2UQrQbat4sU3fJLX6T1ovqYmPqPzDFu4tHFbP9u",
  "key21": "H736mxUjq3b7FA279s3KFzjxc3AnqLSnFy4CKiEuVg8kgbKm6uv64VNUZbP8QBgufA3Z8U1MsvWmhDZJn2yd1BU",
  "key22": "2SGxGPkuh9MRHLyAX1p982Ty3yKHLsswsSkS4EX2uhz8Y3j4m1tLW2MpjwyHgVNghPpDitGbiAX6ni1E249vPaNh",
  "key23": "5JVMbm58JpLHHCxLehjLnafMFx8SJ1wbC4MiBLxEBGbePhQrGHV3YXUdKiCJsXVr4Yy4FtdqQ6BYHbeZiY8U6n6M",
  "key24": "5VP2uLKapwZsYfiimKgozhBZKFYjpkZQpVMMoNbQkrYxVaabeEELcFhANEWzPTyvWhYF5t3hANYm5ZtMPV5Qcyi",
  "key25": "5mbfcsbiZq4Eqj2ueyrtHMKgMNEEemmuieQFzo7FoRLbx7zdbS1KqcNQiEfaRUFnay43VUneJ95e4pn6bVM2ETVT",
  "key26": "2cXzMDbTgntDGrcVtoGmJaP2NmpKyzKe4ZJvn6YxbxmuKHqj4tqsHVn2tcvTGeGe3yFJXYe5JPA39ncmWzJ7m7Du",
  "key27": "62g86GeR8TV4C4soiwhxsEJ2YiWtWqiHgMc1Ca5cUJuVGZ96N3ke9r4n5i1jQhjdoqBqZH7HUV4LjEsbjaBrFBa1",
  "key28": "2dCKc7xXZWLayQyXLn99eD5iz1fXZaXgUaVeGXUKVDQZAN4P2d7qEpyhAyzS1qZ1bLwFe19xYBuEcp7kSQssrqAo",
  "key29": "3JGKP2XZAuXzBovZwzHtkgu77m5bgczKULjmq1M94ScFqDHvjufpV7aJ2uXnq937uUMLE7CJ8yDacTZBp96dGFMZ",
  "key30": "5WiadWM381NAkEK5jmZkweL1LQwWso7WqtpbHby2cunH2ohGnN1zj9qGqoxJRAuMpmafdMGpZ6mFbZRu75PdusfN",
  "key31": "2HqCU695GL64diz7Fa2WERTfpiRMePq3aGoHtd2Vk8pmGXsBXVomX5p49NKvXjixhraZkoYf1ooDpRV9KwZ9K4ZB",
  "key32": "5oHUp38hiPQvmdXdEM5U5LHP6Fj1R12GrtHKhnkf528zzBEKebqkKJkMFmNFYTkf5xG8b36dUTNHMXtnReWCuDfK",
  "key33": "3YWHuv7X3dAE58bzmjrAngbhbbG2m9CMpqXisNeanNoKbMBbkRWyL8TwApu8HHqMejfYYJMyD2k8UbUdsgyNwAmu",
  "key34": "5DaGr7KX79XQqUqpF91nFKkAvG7JR4gsBF1SQHkkSC3hkcvFexzpNyQqW4HSUQcxZAn9n5P5ebWXPRVTeCi8iGeE",
  "key35": "nRnBdERz2k87KyCqKEf6KadZZZyqK5ZHaeiWodoTVSAJ3HPP8xtwbm3WFfgaQ3r9jwzjrPrZjGUueNyPTf1jHrY",
  "key36": "mB5jftSJshYkS2wJiu4NAKAW7fcbDABYAkbisaF3rvGqViCpSNwP3veRLr6AxzwXp2n8qszg6ZkeTFptR9vT1Je",
  "key37": "3RF3QppuQZJRpq9jArKen9bKQ7T2q8hESJd9LQQ3jTujgVG18Nt5xiYvFYA2MVeSQQsQ4cUmrHh7HbVVkLCRLhe3",
  "key38": "2XUJR1soZQUfxKA1rmoCe2wvjSWidkDRMgxJFXUV1fQ1FnPtSkJ3o9QiptkCPStCLKPmPuzz9tPXcC7CmkUP38kA",
  "key39": "3dJuSxqiXJ6hsNXFEt85WGGNg4NJfmQwfTRtt81Ufk7BKY5XtjFGPuYfCeHGyTFkAf8ZRHAQMerheAwqBySp73a9",
  "key40": "5AySv9CgybJafuiJ3iDP5f7ndK4zK87djeE8u9wgQWsBHqgeXe93jAe44okHg7BSZw9DELvMzsJ6TzVaaqAqytK4",
  "key41": "3gg5CtcPfjTaMH2hDAUg7X3KoEYgGb2THgaFbQ1wHz5714vx5NKsTtibE6vqk5WQ7mzJ3co62XBxrM4Ktege9pgg",
  "key42": "2fecyMZ8z3Kasa3fUpbNWXpAWXPHaDGJ1LYxyX9ywkE7pe9uYXTtxC4PHrXBhxYxygRA187QbGHWzu4YiYSxb4H",
  "key43": "3LnYT8mUY2mETxJey16ccxDnmYqrkEYVn3H3MKL6msCmVZCSJyH5DqvYDFni23o1x9k73d7ncAZU8vba2mVE1QdN"
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
