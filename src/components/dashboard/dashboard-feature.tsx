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
    "4WjLMRai4EEKkBMFtT5r9e4LquYZEd6DuHuZhGFLgqkRj4Cobe9Kh6zJmLK5THewmoSCvtK3AMmSC8ShZY9sBGDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9GwHTTwPeXHtPesCu4QVZgmaa6xZDXDhiarfMtk2DohsLH7YmMinvzA3fe53kBywha6itA6xm6UKgvypf2e4Ev",
  "key1": "tnkFpTbWh2qjc4nrmVA26G4VqrfCTKo5gXKB2se32bpF4U6qnB89MdDADQJLifyZhod53NDFT1onXQDdKaAMsob",
  "key2": "2iNS7FYSLwBuvFWXc88RdX2AiPmsATEYZyk7DXy7h1RwM4FQjMGjwBtLQNe8qdPLt6wiuTXZuNShw8n6gzvzdG6j",
  "key3": "2uWzQRKH4FPyy4VkraKoWMDuPfgbcBb4z9UQa1yoewRqPTtZisjTjFAaUKoqSZwLfkPV27zEBLzXW1jhzPmNNjDH",
  "key4": "2YCciEqW9D1mUfzkWRTQ1boaaCQAcNTPagCPPW8uUiSj1uekzFAxVdDMwzCECKkdFEWF3yQiqWA5Njsa9Yf5NHUL",
  "key5": "5XfetmDyJ2U3aECDg3qHCsztjgCSVqYffCdCBdsrs5p1y7MAGm9apnv5PCqUZap3dSefRjFHrmCbBgYEN3Zdzesc",
  "key6": "5jBw99n8hiMFosSRo3wEgraDctJXvyLkoo9UDeAPfuj2bCvx6PVaZQAe53a4kCkZspfy12evm8UZbesvVmnxs23P",
  "key7": "3SiMcXxbmErkGFeN2t1UDdUyHaMxxKVCDK2yKsLH6B9jEnLkpAFY8D6A2LxtXXMvFNT4zKGxNQkovYznyRgYqjvT",
  "key8": "4cXbtj8QPH5FjLEeSMJ3xj5Votqt89gBNtc2D4ZrD82hnX6c6xPvobKCAsUZbmAiCyutArmGNtNcwua4my19wrki",
  "key9": "42hka2mKEVKGvTVKqd8gughsaEvLxgL1mtLbyVehd3EYc3ufBQemoKYhGRuFvoN9zxkMGQCkX4mKVG65oWc6Pjqr",
  "key10": "hD1u3MAuzW6L739ZTrur645iibBnWUpexx7VoWKiQjwTtWWDGw6SaKWTbfZVjvrz8iDtgmuc7m4mFyBM4MQ4No9",
  "key11": "EJuHi3bAsfMcNNini6kXSqmBTssD6iUkbp2shq3USzGB7BsKAwjYJiSEEDjVAK5dpN2rnNGtDjdBTRDfwM1HKcS",
  "key12": "621dCjMHiAzY7h6J8a4MsNP4xdxdMJoWjMRNi4bSSFBjkig9J6zUAAUw4cjTQMQZqzmTrDZS5fNji8RqFi6KLckL",
  "key13": "hBPnicjZnmZPuERqhC7Ask51rrcBHsT2oKfiUP7SC2Ayhmo4wkna4TyQkzY7gKVc6ARrXKbZriodzMyU8L2Ace7",
  "key14": "672MTjtq96b4H8yrALGpyQexXnE2NomstsLm63gEXqwBj1JpUBUxsvWDGdtJeu8LmESZhDbEda94sFYhbZXGZ5cC",
  "key15": "5zsk9KaBPYytkLTEEUFdUv3izoQZeBPLrAGNhxiaJRpz5KU2zMcWg4RFqCFvcSSFnGMh7EQXuoHK9MPjB7sJaprL",
  "key16": "349wM4B3uhVp8s8RXE6x2GzSLjEhn924ie79xXePmddkxHSqQHPFNYateJxRAcQHqciVHcHDw47sQab7MLvowzx8",
  "key17": "4t7ou1SAeZ7AZDjfCoxgj4MmSSrRypKvnFkTrkjwtQTkTQoxaZPnuxBS5QMVkyc3L2kT5QmvHBNkcrVxhDxNWmy2",
  "key18": "gqmqEHPu9KsAsdqsUUAD9Gzaj3WykZg4rzFiY6X92bdu6gThuksNGpas8kBDzXwNerjwMVire8E8EJhQDteVHAj",
  "key19": "3nn9L6shUbmDSfUBHAkd4qmVJJBkPwtUEMngDTgZUhyHjX6jhX5ADVRfCNnFGH5vAYJBKaNmgUgMdGcxjkGEQumi",
  "key20": "5BvyxecXD31214rjdbypgrY6kRwrxkdhtTm1rbvCLfFZGDHZRmLzAnFeVTxrud2ooLV6x8RRVGfwQaj2G7oH8JHf",
  "key21": "66X3ivkpJMbJ7mgWt6sEEgsj57sSAfznARWKk3tdXKi2zP8ndwuQFLpYAUkvVePS8aCn4Q1ygYjrmb3uLhea4dkr",
  "key22": "zj14FniGieVHijvek8NszrJtohgQrKw63hEN1nCCCcH1h2zrnUbTz1NAEEsEgDQNetSttih3eKX1jnSnZBf3FR8",
  "key23": "vaJAc82SeZLb8KP3k9FtjSM2L123LRqNtpwsJFvTU4Vqr3wdnbVace1VzbFL8hDq6HDcFbZ8Bdns6RajCkjno8K",
  "key24": "2tPe3SULXZDibhFb9xNSM5BJ3itENYnVRy8t3o1erkL7Si3ro47zHM2k1Bs4UtD4QqWs22Js9hpQPEXB2iwURNax",
  "key25": "3pRsnQiqBHCZsK55SzQDrnTZvKSQoLXA6Tt1n385ZSM7iKB6622Bss7B1ioyruwvYDUhZ7qs3AdEsmNM9NbfNpG4",
  "key26": "4hTEAiZAdffPG45XFc3Yn9x8Ts7WunqyzbFKNZXysUBQWP54yTUB99vrtmggybWmVtn6VeDmC3fNF1mQ8UXAcUhN",
  "key27": "4ZuMY4z3bSrsqSZ1koHRmmZU62ah8mRtdVne7TJex5dCiNrcV4dgs8NmpEhtz8jeeWtuNTXyCMYvyiX11yKk346Q",
  "key28": "3wpXBzxW9JEBq28YFxNVTPio6DTot77cBCxSDoL39tybcta6TPsBESSRUKUhTh4Emmfj4jAGaGcEWZoggAohWdJy",
  "key29": "3yfJ7T1RsHbfUc28JSxgoeUEst4ZGTYKSAkv2mrF1ALEw8H5WKmSAqf2L4DAddrBNyLKEmiMmDdbnBmgZhQmYTeu",
  "key30": "4Pes8hKhC7HUPAt5HjThD6cYNKSVDdBphAnCNBpm5myZ33G2zQFPKGquDaobidGYevmvdfEuvvHwLaLDTfW9Ctbx",
  "key31": "4wiH77CP8jmgCN6pCK1EM7ShREgG5HHCTnLU47f6U7WUiK4dLz37YmiSjTSVTTao6s3g3Ap2fLV3HzGGAXuJNjpZ",
  "key32": "yy1RwBEVS2HMmZLeeF9W6rmcezFUJVsNjovzYAQuDURVxB53L2NWKxSHvB6a2soiGPCF5F4FEK7zjoZ9qdFcczG",
  "key33": "5nb7DKTirqrs46GapZY3KGAo7bTKnNrFuCv1pQXcKjqwA5BCwFsdgtzQNaGRCtfZTZAmF43jWokx17aGMxGFZtsd",
  "key34": "4RrN3sbeePadv3EJk12i39v3zemiAGHDjCwhup9HxQUPuefZEs1BaSUUcG5F9mGcTjGM4Ss8CWm7E5MQy76MjpBR",
  "key35": "4aqvx6o4ugfn92N3S25VigdVLeQWstYBmMpU4oBSbdwaYcw2ezd2UJ3PbYYjbi68fMJhiZSvToPxPJ74YizzRibe",
  "key36": "49ipPcJw6UBeZ3HznSGB1jU8LaWvJf36naAqj4hLns9Bf2QbEJo1uLLW9ZwthE9jbVkPfnwQgyP67nGykw1ZnbDJ",
  "key37": "4KFPxGK2d9zppGS2T7gKq9TFMkNm4ahdvp9Ys9BuHMb5Ki9zb9GJpVN7N9HhW3q29M3MA2yunCksYWAd66r9NCG2",
  "key38": "2dC7wQA6VmGKz3LYKzJU9TECNq7CZuAfMcFu6S3YZeskW32m4ExL1WzjihmHfbynGcdXpfrvv3rjo7bLgHqLoJAJ",
  "key39": "2mdCk4hWfVsRdCpij2NZKkmcnbi5gdUAgx9cHNyWwvKW8zvTxbh5jm3VLWfWGknGFfYVawtKoX1HhdYnmezMhYtQ",
  "key40": "4Rhs5urLXoavzyMZXyqSh6FsUpkQSmURoanB3R6HgVPf2SWzMP7J91NBwh3ADENwJhLcLGrVfrMu18kEJBg1oqMJ",
  "key41": "5Ahx9m4LgXJnW8bc3CfiRFjvXiqzy5jH4VLoXiFuEinArZUkkbEGK91jXkAqcXJzf9tf3uSH4WGy9sT4UamTPzga",
  "key42": "5eXd1qEp4PFP5JTyPTMckEyE3w5W8gfdoooAQSVe9i55AtfzM39vupC737i3V8yWqYWbhZmZqMZKRFGGwTR6MisT",
  "key43": "hiUfQwko9vogmiN92fcQ1G355Hxjd1PgkAC3X78LGNnNhFWDaDVS1EU3ycMuWciEzC8KRUqpcUQbou5BC6YSCpJ",
  "key44": "5yA4xtiQ4HCASEiLUyU9XhYvNcoKn1WXqxmJPn3fPJVP7qRJ7idTmRSMVt7k7P5aJNDeo2SNfNpxs8DV7BgEZG87",
  "key45": "F9d2VqV5e4rQUkwz3KAhQpByTo5xvEwgWtkwYPi7Txd7yiqAukrkQ86JYHtvbaY64AzY6mZtDWwTBTPQwN3DvSc",
  "key46": "63gh7vfuAAAJfjdv3JpPhfUkFxd6rxz5TNEhwdXuTE4Sjoq145XWJRrXfEDcx6pjCGoo1P7nowQLgpTWQ89u2D5Q",
  "key47": "2fYVkR65257j3pTjj2c7gAuhZfeWw9QyyXUjxxoAYu4P5bf4giMRCwHtSqf1SrMASeqVd1zBkpPRJxYiSiha8BqC",
  "key48": "2sXRsEo7mLrtwK8LnsQqPKJbwkJ88GvVA4V9UK8k6PtJLhEhTUxXfDYqmMqUrBbp3XGQ4JUsCrDYi4oKE9LdmNY7"
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
