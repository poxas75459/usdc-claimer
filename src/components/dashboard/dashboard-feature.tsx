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
    "286z7WacBfdWEpTrjCGWk4bSRnpkgaMaRmGvbYj6gGgB6WwpAbYZw5ehrCsd47PETbNTPKvn3dnYToTw6HSdRw7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwzFU7rWn5AiCQAboG9ev4xwzVuBbsQ6r2ZMV19DpzM9TBCtjmxBbNC33pK9hBPQEdVuVvmqd5BcaiL9BtFfi6D",
  "key1": "tCA9kmpxCM7iF9q2MwrPjWueG5ry23w4u5SjXhziGqK8dBhCnGACthfmu7inSpbsRBd8R6Wv8B9uzUzktmcJYEk",
  "key2": "5Tt65k2rweTmGfj3QWspXP21euvgLtW2A6BtCpWhxhB6TzJxbgKLh8v428DpgN7QhXndixov2QbHtS1EaTfoUM3k",
  "key3": "3oHSMdnEKtFbJnUUHTUz2qwYxCU1ToqVDWb2Z9tq3QrrtrhdD3oW52fhBA9NiLtJiyqSSE1gBQD9j8wKhKXhkatH",
  "key4": "3rTW4QFteMojd61U7ztDH8HVZngQjnYPoDRDMHrnchBEMyX4kxaAJCd979a6iRi8SsPrTToSkY5uvXMYi55UQGQ1",
  "key5": "39mrDM2xHJsEp3NdtPCGii7jHznVvXPkLHUN5MAdpDrgsWxTu9uiVWK7Qk3dw2icRUf3pAXjGVchbQtErYXVUoJ4",
  "key6": "4DZoWLMMvtZYDQURCVoFmwJXWqqdpcFZMpRnebeQGNp372DFkaH3uCfhEdW3BBMZgpXRvAFsTJJAzDVtTofiJeso",
  "key7": "3AaCUJVLDWo6dfr6vzSNRMQJfmJ6MiSDWvietnNjb7qmLGNFnwBuzu5zfPSVxhJ5uYrEwCTtSQrbJa5PcU83tHJ2",
  "key8": "3k82amay78tP7HhsWS3xAVUUyvfrZKXMD2o41anw3onKNu6nEWcu3cvrss29WkzKpBJMiscicMs2cniH3Tckh4ZQ",
  "key9": "3Pjk9579V2hMmbkBfajCVQGPescrBZHxt8zakqhrXTSy7icjBKdn8k9KmyALfHXmdxSNwyo1Bu8pqbRVGW8nj5ma",
  "key10": "3B3oRsdNVkCW4iFpEn8JszTEk6YugrrfgV83Wdb18sb2t65pDbMoi6QxQapAV65jx6aekQrUcAQEySB82Y9Aad1R",
  "key11": "5NUtkeNaGRFkTzeNbwrEPRcPeMHdeQ9wynDyovi93UjEYUeZQsW71aFCabFMx6S3zvmCDJB9YVJzrXkA6XDqVU45",
  "key12": "4hq8YQge6rfA1Vbv2LcyPb2rAj6UkCdsYTqS6JTkyF3hkDymAL3ZA6FpnACttz2dgg2pQQ7wtfihnUtprUtAFrU1",
  "key13": "4A9wjXSbrCGi2heeqwAFvGEtM7rfofHd9p3G6tH7kwtSBRQswWvk17UqcGo2jCJUFsLjapUrrGHHa68xe2ecVwK3",
  "key14": "3rgQBmSmUmwRVJGoiwiVZhSbs118L6bSDr8dH2USa8WtiZE2F3MRtLMxHqmWEK3SGgkHPT8oQRMPvSk17xz1NsRt",
  "key15": "xz1Hvrmbt5iop4soPjjopn8qUii3xP2v3dKfMNaLe7hMKQVo8j8NxcftZVdXckSiA2ahySyL7Jd9xg3dmQDJ7sG",
  "key16": "3LYSLbMaUN7r4f1MJFjK1DRCwMg4kHiZ9iBfAE7rHstT29kUjZiWhR4uphKsiReH2AG9WQpkzEPcsPi1Z7nAPqgz",
  "key17": "4QM7W3kXMSNq3cF3xBQCqk88ZtrwK8sL39rgfguyoicKj3zD1scyPCBDurs8N8N1hP1xCg5s7cYEZSA56Phs65yr",
  "key18": "EHJQTEXM26fN5TzHj5wqPa58V1ZAUWogTKwt9AowBDByqsGArqZLGoSCDuvLM2n8MzXKyXMNw86ejoDb1Ca3rUE",
  "key19": "2R4icZMZnrwsrAd25ZVvrE816Ag9f5VZDDSqDboEi5oydv9VCs46yYEJ3QNdBhC9hE3FmNHsdGiJ47DhHJxRfVXp",
  "key20": "3Z2zKnVHaV1w3tqUqYDjDxUvTsVQLtjcYyTSimZG3eLFzvdNmZTDHqGvripYhWJApqqK7fvWY85bpRhDs6TJhdBQ",
  "key21": "39rA2uXBpmMF2DQRTbJ9d3hzGg6KX8efgJCfoA15X37iu3DDMYLEa26aNTWvrWMEbLKVLfXNEEgbnYwRJvwBkAnw",
  "key22": "MLAVu6cKChs6kT19EULJreoqgnZpDHkc4fKy4M4rTy1h5RqPjnJSviNS9zSkThgBqpXqAQRmEP8fGrhxWaSnVZC",
  "key23": "LkCL4wQoyfZQZ1aKsRkcJKkpKknMW1iKhbQ1fgyuqdu1YdXc3gcLJFUuEsHBWftgr98ZiQqm2iv7pvQ6ega3MER",
  "key24": "5LVp1g2PmocuKhewDT5QyH6XG4rXkR9YsgVDhbGT2Be3gCPQQupFbyhkUanX1eF4aMKf5mGpu5auF1YdXt2qhamu",
  "key25": "26U4bNP94SmdsrshaGKWNfScYyazNYCFJxS9mXwRnwtXrbt6NuXf55upoGi9wyKWqXY2i5FCnsc5wK6kLEb2gqqA",
  "key26": "P9EnTwtzAqng3GV9qQS12KTpntqv2ZoR5Mx11zr6yCm6DRAcLvhHnXiUGjfAJgeX9LFpPECs2okcXucRLWFQDj6",
  "key27": "4AyC4wZexQm9s17QiWTp6GNRyX8ED4DLhBdsMhEkaUGRXmYv2QHGREU8EDyH7Z8QwKCxEmJB5oG79c3eUuwYYSox",
  "key28": "4Z7TzrhKrEnU1KG1KMaQ4uNrTnGnY3gHp3wcW4hdaaBVuYF79sspWQTtiLMSURubGVU7DiZy2j6h1DR3XseK8Hof",
  "key29": "5RKwUf4nc8LecRQM6EqPNUbDSPPn8A8zuGrmDD5oHYXUfd2Sb4NcFG6ZvAvtD5fBigiukcwZK5CubLTNsNKDYjRg",
  "key30": "4pVacjntRnxjANPbVMy6y8dn3JBawD3zgKPj9FZGSQ3GgAwWF99vsGbhZHQGEQhJFcdgk74bgTyyh7WrtA3Ax7ig",
  "key31": "3sBW788m1LpxkpzFD9ALNwHDfRyGWUTKHSG7zMVcQntn8d2wqpkbnbADrovjcSv3mozpg9sSAV19Jd77aF6YtyaU",
  "key32": "3A7W7hqv4rEr64jyxDczbw6Wo8bu9CgsTxLup8umQkpu8bDpjeWrzQ5cDEvrnL1eK83p2vMQHrZWXEkhGQMUpvYG",
  "key33": "52nNBngwvXoL83qRLWVuFe3ypqvXKTmwEGVgXp6ytEYcat2ZABQF2snswtgTwbdYcPrB92b1Yf5w3AUKefPFjjLw",
  "key34": "4hLaMQpnTPCB2ZFY9R9FF6B5sAxdtgQP4sDNexg926mvhvWtJr2LcSfNovZjcQLkUWvU3YWDcw9avKnzsZXLx88D",
  "key35": "59y6kqjMALS5g9Kn97b15dBQXLYB19KsXVti4bpcqPe978RdsuQ28kuWZd1hPBbhjKGz8qd5WVtaxixAZDZRaAhm",
  "key36": "3khhwJbsgdjnFjrh6GhGiiAWUaMgwvyQirVk9Kg6FVcThtaUdUr6BozdZQ6GGkhtQzVhTGAjbcVbRMGc5Ehq39SN",
  "key37": "37gaiV7XpRjyDk32VDasLnhRoupUBJ58U69LPeY1LsFW5BNCeSrF7higRhkyYWouMRbUn7bbGpWavNyq6JCFUd83",
  "key38": "5jbUoZ75szCcZTvPFVGs9ccBm7xQMZ1kawAd8nCG7Nj8YSvABmCmF97Ux5PJB1BjhRRymHYnQbZwpUEcqrzAfXMP",
  "key39": "3C6fY4DHoSPQ4tKehcpU7r442y1DbVahWBH7KdPFBE9ftSVZKfVHbzLc3cMeSp5VN3xgfVhSagJEy86rUfyd6CnY"
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
