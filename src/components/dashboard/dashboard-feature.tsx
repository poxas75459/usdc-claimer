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
    "2njM9qeUV19cAoGE8jx8N7LyqBVBMV5Yi44YfSeo9dhinBQtTVhPqN9qEeLvrUSwn8JPND8irqxPMDjqmbnyzy1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZiShEW7EPya1ZxnbnKhZFrS1HoVUTZZaLEMZDdF4zkuhb6zrinNtL8QSxdfMCfEpeTtMkjitZ1aVWdumGMnmCT",
  "key1": "5FTM6oZsZUJ8U1nv8zSq821UYhrH7WmpBBGuTR3yZH9HY9MgbftGsPySrFGiXV18XEoJQDssM28kBedu7xuS1MXq",
  "key2": "4cyBMqx9wvtJu6kmiGkNjtQYuoxzNiuXvPy2cR6okVMtU3BGSziqis1XbEYXEEAcmjzVpg1x8ZK128GZje2hzViW",
  "key3": "C8wqgyCFoXsXZLuw1E79ThaMQB7EGoxJ665rc3ophVQ79maRsno9GyUDDkzNYpxxRdfHUiZJX6ZKwoLPgBJmcvj",
  "key4": "2xFZTjDJMLyz9R7So9vkFiWxWAnpZo34eoaaSE6xrwAKS6EUeMHa84uHHSYiHg9fVBzjFufkig4FnkA23QyakJnv",
  "key5": "4TmwZw9rz8ow2evYJmSFQvhPdQ2EJZBUnFDRh1qQGnXRXuAUspz3HVnHxn2vUwj7RYQqVUouYZxkBjW38VAPZrbw",
  "key6": "5NCDun6y5wHsfBLZJi1qU2vfxwNtz9C8rMK9kiCHj1wotydZfVqzNsmS3mLcFs8Fr42XvqwnJJ3RLn4f4WXafHkQ",
  "key7": "45gpLwLVUnRXxAR49TztGop11AdDtTJJ8z3stPJoCchoKnbifFk5afTddbaoh29uaT4XPy2U1vfDrZiYbA8x65Fc",
  "key8": "5TFKRKGn1FGh48yxDevjaq9oFR9AfwfkBdM3GgY1buHzx66NuvguLdCGWozbeh15SX3viUEoeseE4LnjoSbJG7EF",
  "key9": "LWLVqVBeruNuMBNzMsPGAfaWeJcYgdkhKZjWadozX3ytd6vWBBN7aVT9JMiUi8BUqM1igN97xupxjxENAtVWQwe",
  "key10": "3MqttCf8hMeFjpK5nn4iPQFurCPLfvUoGd3hFm2Qr6Ft5Tei1eLHBeMtXKFeWj1tNNNy66KojccrT6iqgw6frkVx",
  "key11": "3w8HXguQrqp3aX7dEzbkRyc7hWVUWRBE4r4WQS8rgG4ShGLAkS7FMWCSRKT5WmjHDPTdJEyQ6s9TwN2m7sKwAN4K",
  "key12": "3uyzUKe8sbY3p6HRfMwWRezZ2AvgGCNaxCVDkcmd4Q2iPoYuMt1ykPjTcnE2vHvSvwm5xtyySJf2THkprT7o4B9L",
  "key13": "4VBuaDoSjQAHRtVYymEbpc4ye1KDT8UPW6EaF4wYkWj83vVeMkK4bgEyYRgXd2YgzG7iSnahSKFixyHsSSWdmUi5",
  "key14": "55jBpwyxqpCwpbWPBMRQ3nL4uYkaeBNgLx5PEptth6RjG6iiJkKSvYY4ut6YQa9j9q3a8sCWZF2b9imtjvsnNCRt",
  "key15": "BAZUDRmxR12cDhnuxaUuMboAmKRqnS1VrKUB9gotcRAXqN9CX1EVK9ND11uf7htoTisQpDsf97DsmncG5FFLFLW",
  "key16": "YKfkmYZs1Mn4BdgXn4dMw8me1MD5NnchKsgBzWLhUrmg7FXBQzdLXwGYqDnpsrao8MuLQo3qoq6dQuNjoZvwe8S",
  "key17": "5Rathjg6XeS3GbyMzygPvRJaDmcDfctNgqzofGJqGaghxBjyRxg8C6gCRazY8g6LobJfZ6wRjGyFhQVp6qDaPjPp",
  "key18": "tKdN5CmxRCoQMNdnVijLgtoETGx32FK7o4UwWw67srcEuxjazndY71yX1pdFqnJ3u5TNmyBUDts9D997oXCAS9M",
  "key19": "3Udt4Nb8vm9QssWEDdE127GfDV34jLUVHj3uwq94yuN1eTaPhCXzTb7PidYYiLXZFAR4X5QceNGGF9N5aMyJj8XW",
  "key20": "3vinni9SwM2S25xpoThtp4SnhyebrykpLbykn79uf11LkSCwaWpwatgvN6wBjCVg5i36sGJ2kg6sXk8qEyy9p7hP",
  "key21": "n1nsVHUTTSSTt3FmxKBWCWmfnR15jhddXDcXcPZscf3Nrbgy9YQVwfLukvpThbVGaR3FYVRsr82PCjM4YUdsRDZ",
  "key22": "2FmocyQxwGBQuZSJQPUnw6wceKC1Pnj1VVbAtL1NQs9cKcYz24pNjwHPV7ZGWDSuqw2fbWSq2fQJ4qY7cfvVK1Hr",
  "key23": "AEmrPv94aEiw2k51NL54pSsugDHgArPyE5RJne89gpdeaVYpAkTU4LUp5Xv6GPYDnnS8Hu8fTpCao7AGNPfBW9y",
  "key24": "29p8Y66DRTydZJRVqySi7mfjDqdUB9Nx8NZHQbqhPJbiDcEprrmayRfYrCxDJbChUMWhfL1w9M2uZv6Z8WiQ655d",
  "key25": "3Py31jGXD5m6Ntcbv5io3B98xYaG7CJa1Jq3h1kn5Rn7DhUr28XiSFeyrtR6GzqbPCn1sCwSDHoB5RM79EnvAf3f",
  "key26": "4Sp3XXREFpTnU3Cj2CwB5MEcp65SN4UQPSBR8NgTJeGAnRytLYXKnVqPnNfMphkUVTL4gpwwsXBqog6ZJMdz7wTq",
  "key27": "5c2scxiKQm7QRbRr7sAwZhGGE3eFPzieaVD72yLA5haAHBQA2QD1n3tnzFB2nNFaYLwA8fWiFt1wRY5Wi3aYur2o",
  "key28": "CmfcxYGtoEAeAQZqzY7L61cP8RnjR5MNq9jKbtyRr1upeDRJA1A5fbYrXdpVU8hyeWdKgKGYZdtkJSfirrdQUVR",
  "key29": "3igUYcKUkjmqHRHF7crCTDJaTz9xYAEC4TonKrX1oLtcghZP7G55bpFSb4uzXbj9r514YeqtQzxb81QCa2AmSnmM",
  "key30": "5UcgPJeExqA7wZ2xzTJ2nnhFAtMoCSvanEetdUW9qeUPNjDmPeTXGy9dgL5cbM7vkfvsDj6s2xHr7Z17RuWcBLg8",
  "key31": "QubV6jeDSvzCwk8odjF5dSY9xN6DpphWLU7ZAY9K8fRbjbtaaerNF7BE925ePmagaVxKj4Hs52mFyTwhtPhYrbX",
  "key32": "4rXjm9gevXejrsdYVtEE3xr5xPs9VzfpPatnQouG81jAXFZcs1VTdBJzTSAxLBJXz6yVCMA78ZaNfL5CHe6KNaxD",
  "key33": "3LLSRzu2fnPCyYuDMqa1RCMCwdt8rpX6ykjsYrSEdCTRPx12iknsM3LRqhnzVSxUToQW2DQg1xpm62Zm3qzjWrBi",
  "key34": "mT7TQxHeKrKe8EUnxF81CVByoPsUB4kGyYboAUFrEsDVVWbNVEvAi3rcohWab1gwpiCP1jHWiGvbXEWSsBvGRH8",
  "key35": "TZWT2LRZLfufef5Xict3Eze6NaXYq9GFky1mVpwMiGMTPfmDaRYb4WkmiEf8hPkUwmFDdGJMYLgx7w9jmq2TFxy",
  "key36": "UHjVVbtCLSRk8oWZE84Qg5hTaa8dLRqZDpANsLQMKmEzpG7cfN7awvKRkdvnyztbH45RaeottxGsSfCKXgAxvqj",
  "key37": "vBURC8E7GyfiVseT46kz9keXCoFKufsLzd7VQMuC2vFPFhQH1iURVfsz5dKCJLa4jWkKo3iMKSYiSGJE4kMt5RZ",
  "key38": "27SKq9wRqo3jb2u1D4YsobGfpQgp9rsmdgSANCEiTApp5eX9gECf9hQpEWYaGSnFYgZoq51BWU2p8UpYdMtkTF76",
  "key39": "2KTo2dFG5bgr2b57V2sowu1YJX345hhe2VGS5PWRube96m1nxmhMEsL4ApX4Mar3B8J5PpPWp5nnhZ6vY1eZpWDf",
  "key40": "4P8o76NV1dwZua3yxP2caYRomuF53xo9K5ojt7CQ2AvEnsyAK16e1PxVk8QihcDhiUvwCZtEpAjWLLuJLobwEEzE",
  "key41": "3Ac6zzuLWQUHocJtVJXT8LHR43RHMvMQqpRZ4s3a6HGyeMJQsY9ex6Xc6VFT7nZnJsfxZQXXqYGqdmQE1FwiMTRr",
  "key42": "5MkonruQczB9AEu12sob5s19zou286hB4A9E6s6L2SGaanb6zXGSj4hAJu2z9XkLXpkfyvBjop8mTHyVhxpFxyKw",
  "key43": "31urXyTRnVAHcgbfKgQMuAYqws7MKVaPwmvBus7w1weiYo9cBTceDefJJ6tm5CrQrZmJuWx8d1md1y1XMbDNRbYv",
  "key44": "22PjRQTgs9dWAUsSXQEcQ1hnAjvRmQB3SnwvH7Mz8V3SwaHLkt2r96XFFQePCJQZUBvfbZQ8uEhDwff7CVGwSqz4",
  "key45": "2WdxhfoKJpmGVMxVhusHQpzbNtFXFJzTTBj9hUmWkkXLQ5nBNGXrssjvidY2sXonSkucSuyuUW1HnVYMteydAwT6",
  "key46": "61izd72y86dj2EPKXp9U3DStjbd8TjeQWWp52fNc6gun8LpGufqFyxPrtAnCkH29VTsRgh85DYkXYYcLpgWrYfTd"
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
