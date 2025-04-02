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
    "UxLDhjeW8wPZbyBCPn7NzH7ATFd4MGJMXx4XUr1bATB4VhAWUVoUjZmJmdUF6SmjccXiMsHs2EutMTTdt7xhydw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETEP3yP5fBQxdb9F8FMcJidjTEut835MAbRVEKtJPHhcSBbJqUhPHb7yefnTHwrQUB561aX2tWkwQwCXF6235B9",
  "key1": "2d6Gh8TnbzaseNPmT9uuEPitwcUyvB3aoYSveKexk6ZACPsft1SxeRBfkSGLefTJBWan99meWFLbeRzTLAc1KoTT",
  "key2": "49VTZoaWqBTyX6RcnGArG8pfNdZHaHBdDUN3tJ2ULmrg9ZHfWG5K313ptB6ikgNGrzRanStqunfD6dU6ebPHstbV",
  "key3": "67cW7yCQeAub5ZPr1oaZWRgwmtyGRDpuumk9zhvfTNCBP4tDdHWHPSoP2pL4Bc5tkBs8aBKkknBfr48ee2pCxEBE",
  "key4": "2kZWY5DJGNyMEhLfeaw5nzhdHZmax2Qq94mzhKC82sa2hYaL4Gii8PZUCigmFzqhr1uYyrqPx5vBL6CZSzZN4cLi",
  "key5": "GkrsM623tnk72TRXHhs2e1WmdBuVoVebZH3wHixuDjp54CC7hHNs93yts4FQoUWM36iA4d69yszqToBVkxoLMGu",
  "key6": "5zAFRMQiDxYSM5yToTXFgSCF4YhBcxbRGXYYRa42MwAZ5X2wGjnnVzjAb4KioLhRfeePCDAYYJxFTNneUKCPPJAr",
  "key7": "QuuCX6sKU2jqtdWesV1cGrw2Jf8kQitc2gyftXqBVhKQXdBLaneheaXUJxWyWSmpHZhjW1yB8VV2225DZrgGoNd",
  "key8": "2tmJZXWm1wdzM1pUGkzc7sFsz3JmsTHHsYn5KuHaVDqQkJ8aogxGLjpq1CEDdUxJwC9g1VVDgNREUvjSpE3pihZB",
  "key9": "gdEXahj5GQJDzDB4Yu7wz85gmnSH6ARs6PgL733CcBuVzMvBL6Uc488TRKAQu7ibTJV9BGA16CKJicCSvN381Pc",
  "key10": "2R2QNnBAbeh2xj1z2xc9VouAD9QW3ixPVt8jfhk3FyqSCDC3DaG5znzoNAqUCQEh4zv3mQhT7U2oSEg2qMYZieKB",
  "key11": "4AmhaWRhJpUYfMQN1vbDzN5pukPy8ppdvd7ELJ1fHNcvMkF77psCHt9unkihBCdKLjNPLMtipr3ojsNxnEt6oQwM",
  "key12": "AFSEYMWV17pKryXJQFoi819CcYPU4Sg7s7oJAy99uKxKB9TB7bpPjJ7RoC6Nm6DEr8CY62YgFZ5bQV4spGbytoZ",
  "key13": "3Vxa57VUPAT3TCynUZCB3Ykm3uziqeQHGmNdXnzquZfRNouhWSAB9iFbHnC9a36VwDw78nnjUswDo485DUh6Zvem",
  "key14": "tHMF9aLJ8S7RYKZ87Pg8JrnWymjukjWskNYqpzQGVCrXby2depyYNiRoost1aUVUS1FGfbcTxQcFdpFNQzgqzCA",
  "key15": "2xYuDeTZAMkE2dZGaot2votW16H8db5ie6fczckz1jEUN7AtnatKtF4a8EpMdbtm39tcqTiQQTkpP1AAMYGSMSu8",
  "key16": "2vAZB4pgYnL86QkVXz81xN7VwvBcJJfjeooEnv6tTYy6iXg56RMpFyd357NpKLRyaq4Mi6udwAjRkSExt18b38Hj",
  "key17": "3FuXRCtxXMChGmCLKyqLL1fCtTgnHLkmXBzfVBEo74uNxDt7wRPoYF7oa6Bwe8beTNrYMaChfHrvAZCVQjskWkQn",
  "key18": "W2k9YNj7iCzLdEJDaGmd3voftpHWNp1tepsBwNEozXGf4kc42bSnwYbFiLwrqDu6kS2cHnKQGtWcHuuFsNuYdVn",
  "key19": "4yTt7fQa3VUZVihhfSxXR8KLutr35LWB3Hr9cDtVBYQwhZpy8E9vNiW5zQxuAkSpcD1RByL88kHbT7WKnTowmVMV",
  "key20": "5bbvFj79WvH1uKzVUJZQ6c7SL5WC2TZuRFGebRE9NKmFbXbLXoBtb3WYrLGFGwajqmEGQFXb2ycPMa8Dvu7DRTDg",
  "key21": "C2niuXzytWfZLZwuNMdW1pmi4uVzQLZuvzhjXz6PiDAVan51nsGHX2Na4F6MBQ4VHjAiVbMtVShVpTfX66DaDcg",
  "key22": "cr3aG2HYwsFTT8A8E3HNy3zK63YwwfJqX7XJocL6BDTWLsshVfEaGbCqZn9WYCfuCLiHJ6KcqaEvPQd9GH1cUw3",
  "key23": "59aobTjPqxBUmidtKDinywtP5dtfbNopCnbkZgHkbxb2A53xu3UoZqK3V7qAGQnRDSyPqgKajCuMQxBZmUUA2MVM",
  "key24": "4GLyhekFVs7jpQpCuXH1sktb6wcbXQT3BRw3jRnZuMNEfo9wVQPpdT12UwSbsjJh8PLHQWuibjhFVPYeZ2CqWpzA",
  "key25": "tNNCZbrf8qZDJWySt2DsxWwdEsEhhTpJLXuBboEES8Dz1LBmsL9Xi67FfdGTNV6XxgeJ8pahH7rs8dJVJAa1BPq",
  "key26": "VwQ3TqStrQBJmbLBSBBmxvMpBxPHQ6x6yqvda6PCLHtBmJWBP3qKhtMbQp71CEkga4rUP3d2jYhTRzx2Ku8M6aG",
  "key27": "5X9FuyxPzE4MzgQ2rVPeic213DpsV9KD2cehcbBnSA9SLsahzFPhLvgJJYgpYiQ3yj6UXxQtMb4VAYRCPgwrZs4T",
  "key28": "2df9cihYoPiyzZmUJmQ4y2eVY7aoFKqNLGtTeu7LUR16a5ApwZZy81gfMxn4qVorwkKx1ui55CH3wT8dDPPRWGrE",
  "key29": "2JqMckz9jhK9n7nipjCHardSrGeo2d41pTkkPxs8wENb7ExAVifzZNZM9FCD19MJR4RvBnjqkoVcUpbokW9e4obm",
  "key30": "4RAVr2jeRoRj4XZj4GYYtx33kvvNKATbrRPAL3ekNf3oy5LLdTtKkrnzozvsrgEFxn2SMvngM3B31S9mVdQMLJwa",
  "key31": "4vPaqUQmN68V8ngWaMtAY67DjTGbPnNfTxESYQXR9vFJfuo16rC93JfnLqMar5x618mguSUrjrfdSGZisJ1WDQqj",
  "key32": "65R9mru31WMzbdtgHUjTkz7jVvbGvk4osujv9mZocMuqsSr8SL4RabrA6o2YAmzK4EgM3AY1BoMrvxDZRTpTh5Ri",
  "key33": "28vxFE5LCXBbCBCpBiPQAb2iRYKde9P8qnSFPKXgF2vXfVjs1aSsMue6k8g1tVura97WEZTJ2QKL2RxfsQmdTJcG",
  "key34": "4w9oiXAqs63enZeMYdnpDokZRVAvdPqWgMs97rwLPoozNkkguuc4KgB839psP1YojvZGAwPqw9dFMEYxtWZCK1VB",
  "key35": "4SdUoXgXrstr2YdcGYcLpbpvLE7L1AsXsD83VXXJSabTYcbd4ZyjkXnpQGpv65T72AzpPW577KQbjhVRNCNRB52N",
  "key36": "639CtHRgXr7hewQkVoDwPUCBxMLfWhC9oSjWQb5kYCP3cWxo8L9YVddBSJPqWDHTWwUhMp5xxWDSHVAKXjnXvUy7"
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
