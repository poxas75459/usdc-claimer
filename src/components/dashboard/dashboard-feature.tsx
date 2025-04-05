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
    "5ZpfXBVRwjsfG7Qzwykzj5SLEM8e4ksUgs2LdveCHXnFQvowfTKMfjnD2eArebLMCLRrkEerjTR6dMmfZqcX9H4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KaiMozwbKS8sKwwrJXFraGa153rJDCx7HvUxas9Lk7YokYHCeL9uPDA1GKkcJL3uHd5XXuvRc1gr55pArWK4AzA",
  "key1": "3k2Ek8dkfvcDLvAgvy7kaTWprnwcZvitNDe38AyzFkiMH3SHSDqen6zTB35JReDNsaKxzn2jozBqvdDRtX2mU8tu",
  "key2": "3GUuW2PE7LXx6swfuwGn92tjtR5iHsHH8qAjxfzGvvCudzkDYa258imSwFbMYSwo66iiiyNzZewCVKSqpwCjDx3R",
  "key3": "2kX9afzguaCXvd1Eky5pyNAYh8YN1fwbjLwVn2nJNfyW1HKbJEt11d2SV2hPAbdTF42GEJAhsSfXZRtWU6ivsG28",
  "key4": "Cy35ZvJY5u6tDQPAukvtFr1ExQpYsgr6PG3KYuLXre56RWCDCE7Z2CXNjCiuiaQqE8LZsy9ibLQdBH7AdTkPrhW",
  "key5": "T84yCBWL7kY7a1Fto6p73rVWRnuAwgXnksJNqbc85s2ff6PvLFiWhFiM8imR9Edsqajt4evcHu6214zY69mtrZB",
  "key6": "4e5xFcsfymbk5YsZYtdPjWWUNA6H8p9UkEb8Gm8bFU5gKagxgb3QvprKbyMEQcRbqSoxy6VMmdtQMqf2hvziP4PA",
  "key7": "8W26L92iasgj89JGnkpi3XdvpcDSJUVRjfHhKihATmWXnSt9Fyr16wLqgNjLt7G6cPUwQUYLkF5kucZFpVNR2DR",
  "key8": "2MsXF8btnzBkfRE8s3nsZnRizxf1hJ7WvEanEk2dQACLKQFEFRurPEY3G45a3sUzSHQJUjuNF9BbboDfSmMvbGW1",
  "key9": "63yhn19hBRuJitpeCGrx8KBNfSAtfzd6DiydU9RXZhnqN1ZN1KLTQXQPhAvuJ89BR9BaZYFz1qggXxyg4Zs44Fwa",
  "key10": "3vADc44rEksPpZPMCSUQEB7SFnq8YhdEYhif5ZAHNERo5cBrNqmNLfVSDNjWaHv6XvWnKL8gdQcc7VTks1bhJwTM",
  "key11": "4ACRKa2DyFj722rviZ2GR4NNDU1ZvbErjHErR1do7vGPDpWyJhhpmQy4UFeD371eCLPtaoBUfiErp1r5kntbk6Po",
  "key12": "3ip47qTfk13QnwocFAnPsHhZwPkVWo5btHxV6kP3oCSsCpJn1zE9Wzaj24c2yEK1j9CnbV3zwCAFbaBtfxXkFrN8",
  "key13": "4jEUX3zkeUH5uS87kNFjM2emB7V7DY9JTySW4cevD1P2EjBKU5fTvNPhtaB6SsZKPk54x8UkNABc7XwyBMfi2GMM",
  "key14": "PLnVh3WLsUdRbUtXWGtqgoqaz76ztRv8wFP491bkMYjh5ST95g6J2hzXHLALQGs6Te2NgasXe3DE78tjmpnq97K",
  "key15": "3mw9rTCyw6G5J2FmEjmAy1vtKqgvyiwJ7mWCsQKMs3Uof7eav9yziZoFsa3ZVgmu7AqbKDFPVBcCmh5wQq1tfKP5",
  "key16": "2oHa9zDwL4CSAtnCXatr5bDNDA29C9foVK2f5LQW2wCDdDE6en7PceEiXzq6ZLxmkCiXwjGrVgP3qvneprYgjAmS",
  "key17": "CpbUa7bMS6Ag5xLQ5nV93HsbxyLFSRvZvHy8GevVQHjsjunK8jYd8oNcFbXpaJK1sy9Ge7a2WVWwxWZnzP8sSqF",
  "key18": "8YWmwUQYEyHpzWPVBCBk4zjGE9no4z3UhMLrSXzjg9QRXnZ4BBk2wDjSkUdAhZLcUbQQ5DLNQNAmngxbdRKP122",
  "key19": "4q91xcgfRbFJuGoGuDEbJJRCqXHFyvAmHzofgyqkHrQxBhPQ6xVA9kRBKe5XgMQBwmLnGG4dXat5RZVtbCp5fvzq",
  "key20": "3tXyhvH5hKdHSoEWumbMp2pe26Tv1A3ZXemrVD4siof2FKWP4bt9k624Kjy9hfAKGhmjAMMdXxDfd9M6P8J68m7S",
  "key21": "R9F7j5snBhzpLjX3ki1oUiBkkMwKeqFNAxUdgeV7tUsGeNZwvs64pu2Q3Z9kAnoHbreR3kDscza8QLyNeYG3Aio",
  "key22": "3Z6842Txf6FjAFDq4RmejuVpmBDc8vL813VyB7qUViTfsJzJcwARCvdo5sFuXaQgNSvkt4J5N2V6orFtku5cXTb3",
  "key23": "512kdZPrZUAV4iSAEXLv5R7rvEhPHJ8NgDC3BVw5gyRkuwQoXn6xYi6ppZXiMt59vf2dWmn7woWV8hSvmeeBeHbZ",
  "key24": "5mC71hwnw2xpayMonhdSNGgJk3wT6syAHhUUpjgujaS5Jq3N23EZYrShWyB8EfN8MLVTBxc8d24hBng5rZ4NxRdk",
  "key25": "21KCFYvEy6nk8i8ZAsgHNDc3X5QH7jbRJuHytwKy7EZDYC1GKasFe9Myno4qtCtFPixiKTiXqgrnUW8DwbrDisdS",
  "key26": "44pmYfePyYNy3CQbghn37PGxr9FEZ97qysgx3PPQXBUwH1C9BwNdh9wn1Nj2rRhccY7cepHticwx8c1MPUh345eY",
  "key27": "5kv8ZHgbPSzaHSkUBLkU9zLpQ6nybTuoGzuTZaQw6nr4hLG8UEFJdJiSVgEyRW7a8r7Fiu7UTqFmBowhHsxg9UL",
  "key28": "4Uy3h2e2zt1vLbcEvhxax5b4pE8ridj7pFfCkbFQXx5XfLL8R9Yc9sQGaX9QxBoVmkdrpcACwUWxfyrJCY1xEEZE",
  "key29": "2w2Q98rZ3chGJqGCYx7D6XNkNbeNw18otdwEKDKrqrxqDLtrFk1xfZpDufEsp84WjU8VKrW3zMWdWPyvKdFuoJ2p",
  "key30": "29iqdcwpMBFChFJE39TvcChyQzmpLLx8bvMQqj7jHayUpLBf2VsQG8PMBHvsb8rCU33vqYire7wjnhc4mCpPN9sp",
  "key31": "2yXhAUkxfarXxkHvcixssHXxg3bCKa3AD5CKRqKZuQUtqj42SzemiL4qNweB33yuAJLhe34gmsntZFpsViTDjevE",
  "key32": "5quGdNuMZ6Ls6oQdSiMXinoUvfcJijTxqsz5F1qLZ2qCT7GkDrErz4V2WJSQT6QaC6yjHXufDBbxEHnFHWLFfCVX",
  "key33": "3EAV1vBG6nzE1oHkFN92PwQjZQjkendmnvYoSzcx5CKbEkFpE2YPNi3v6vyEoHezkq7kixRXG2VBcjt8MEb2XkdP",
  "key34": "2mhbrVAfN3hTa7MciDFRvSAoA4Gd4PVTh24WUEVxMCP7ntwbH5NAH6zkTgAZzpBvA1W2bmnDgNUuPgrcSZvUoy3D",
  "key35": "4DJvdhRw92h4pjsyoEj3Tp6iZuTdmKpBxLFDBY7eYVpxGhcqV5yvQQudzzPF5DhfTqZ8GFhSZ42MxhhnNe26mfu5",
  "key36": "kwMXbQ7Xm6x1zFew6PHhSVF81UppQL5NFoJ3cjBC2UcAebfMa9uZiPsrU6ZAR6rFDrt9d7GEp1UksmaKM2SUAGo",
  "key37": "4fhsn4gda2n9BmhDPYWdEsh9QVdEb5d5iKxgMbSoPGHGmHXfjufuSo65ZZ8xSK2zhhtttmmnmnhTbAubGq8WANv2",
  "key38": "EZerhVV4CYckBJQVLMovcjGWuwxXETK5hF7nuGtmgihHFGyH2BWi3fbMfvE9yoeot9L2H8J78BkUSkZ3VB9TsyY",
  "key39": "4NdfhtNUeYmCsmnRRSaWCtT7XhVFknyUN7LR25vknihHS4XL823gRckJA5Lr5WxxikhNrtMsaDikWVbT3TtEGbhT",
  "key40": "3LGUKewkMXJC7wjVUJ59ZFZAPE26Ra3rN8CGTXvB1kuDfcMTdw9rHCYwBtohryHaD53RjwjyTNg8Ga9vyH6JpeSx",
  "key41": "58XqX29sjWsWrsJwoAndgWivvrYWUS9kYkws2EaPk3hdVAMpoy4RSMP154zQHQQG1tRempnaNtdbHWk7Z4gWqMoE",
  "key42": "4AtxmxTrFJC82tYZHy2g6tTDfzQtDihikMRrfaGFkP2yTFtMLYQfqrVWDf5eyxqtvEVgz2tQcwkSsUJaTCAfLxDY",
  "key43": "sPWU5xsofu4nfphfgLi3CDWKMATKAvhztZfuajDSFAb35RZTbSA9FTck1V3aqfLEXuDqPa7aoFwjUPCFuT6t8jW",
  "key44": "35UJUXTjF8pWWmUic9ygksuWeTPFPQhyHBPNuxGDbD9baZ119qrJzJ2Zok6gTqpW6c2W4Zum4fbvtvvtNVXYMaTP",
  "key45": "2iGqoYjvjZLxAa38LdRdSvh4M2yt3ruUD4TnUqE4Tad5ngkj9CRqkFf1gDf5SGWug6jwej35uu5p6kA2GQE6mxuB",
  "key46": "5fhe3Acuq7D8p1GAUc2choQNtstRw16bYxiPsSeYaCGJRgHHJryWKD7CyiRi6H8wz4TNKzYtSq1xGqKHmt7W5oBh",
  "key47": "csydEaKQeuogvVe7tBi1ejuJTzgJpFrcfb8Gv42U3jDzP4ugUWJAJdviBiGrYD32UsEkwRGXSnXs1WM2CcRM5x9"
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
