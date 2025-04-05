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
    "2dE7JEhovh6aT3ZxX3zeSE69HZKh5uNpNBpzUTfk5s2Wd7q1gT5gaqscWKNJjsbKHWJTDo52YsCRohCKEv5etzRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RTd4gL2gmmZ5atD13r4BpywWSzVAiUvoSTsd1vqkrS1PhRCjMQYtJzcUZy4phWF41Un8XKJGXGMdtLPMA1iJuqV",
  "key1": "41ZUbH5CHVFUh9LCaRL9DsJoQUG1pWMT83UpLRhL4qKyL6SjbyysUvEWkYRcwUXLUs9nRj1kBepUH81vVELEreAy",
  "key2": "4L87syZLPbufXV1mKJwXeH3jE17vBcWH1nq616d47xYUEEMbAJAteqrvRv69gTeC3EV1Pqb8vEYZCZLRv3ndmLrA",
  "key3": "4gm98MAmUUBjcryYZ5yXFhRthWP8WbFAgF9QgnbcGCrynsCn2PtE4vRPirbkX1KZQEpE4d4dPGyynqAk39yprtWE",
  "key4": "8vcsVuJCbjUvR8UmCoGDBVcm2Q1WXrgnD299pYYDu6rj2BB7nQVZVXxves79jStJaWcqu6nPQ6zgf9fftTCdEmH",
  "key5": "iKgV87f1YE4aPVfS4G2MaDcSszqDYyxdBiFU3zqtESg3qZhmK3cc5WExLzSEpqHMZ4HwLiD6csNBMas1mw3siQh",
  "key6": "L2QypYnrJHX74gaNAEwMkBUHtwpYejN76wNWi8eziq3Nb4JdXtX5WTidXJ9ZyjYxajMWzTRYAVcQmYchHm3G8Yi",
  "key7": "2X57uvEqCAHvATHwyFHuLcmNhJHu4WfzJTXZEvNtNFB6aR9PwqNKYcT6GFTaAnveWE8gbp1vp3bzAwDkCezk7s7M",
  "key8": "3u26XZ9221rLwP6vdXSYMDVBgfgksrTnEUZFdnyjtcDqroqsVM2w8CDi6ZFuJa7ikwxPKQ5q4RkRtn3SVd6Ry6ut",
  "key9": "3Db247bdGxCieDgEezZ3Hbdvf4no9eNHWnAP5cQykk1q9NNnUBghuWXrTvgEzjA8QH359BwMCBBy4MMSWhuh56MM",
  "key10": "XnpHPVZVWQkFKABBf7cv7JW3bstuHcYr9dbVmTRAKPyBJDgZnHqMaTsS79zZqwxjcETSYUHM2WEHgWgdSvKSxBb",
  "key11": "3wQZWBwhTn6CSuEwedTeaPzySVCdR1SdAjLy2Ly6BowJ3nRTVEG7WBfoQuyfGtMTZemny35cmJHkHHZXrcDWHKr2",
  "key12": "2T7WZHMKKZEdospzsB6axCcr9MXAt8rQbE9Z8rt4ugWarBcaspiXrCUPBaRSmC2LwW3mwZymV12XpFiHmynbBQrh",
  "key13": "3gEnXsBJShj1zsDrwJoYeBKJ9mrmCrXHUWfMAFyijRmxkKYN6myUWrSePLmDr4wXNaG6ijatvFqugAURXhGb8BZr",
  "key14": "4jaaYhtiZsbxYe2mRGZfHqPxC6LGiceaQLQUGbrgCYkefEv2AKHDnGFaTNcB4qLtRzQzqUW5ihmtAscaX5zGRi3q",
  "key15": "3MTLSbR7VvSt1vZiYPLkcjsPJrNGqRkgH1ThzPEqQdUN1eMqq5ARqxhjUsQBeMusDxYZFTMAg49TVkWinBJtFQnF",
  "key16": "5aswWjgf6bghs4EAGBBtaQ6MSDLS2nVLB2nTMXZxPda8MitjRaM4fkbJLAuAFf68HGGScSJJdaCF4ta48uo9jGaX",
  "key17": "35vo7Ygnw9Tsn5FD1a2VmjZ8XNZ92tijMKtCUACy4VdHweuAeuBWJLeeBdP4rnGaCZwrCji6FNaFoYGUrNFnzGe7",
  "key18": "3U88V4aKye1jW9PJHtc2UJdMSrmnWACaFRHLoM8vuKman7xsDc839JrPsZbWgxzsmgAonFR58dm8JR6yZXKmq455",
  "key19": "2DxWFGBMM46j3hXYLstuP388Vjg9B2pSHZW84BJ4m78JF13d3n52fGkNjBkGPdPhPsnd8LywMFR5hDNAMEp51EKS",
  "key20": "592Vtyqf9KesLM1gXgtRycpupdw9GStjrKtrvG2fBGF8Ao2XVYdDL827ssC8LmtR25ojBQLVyz2C2Bw8r2xp8gxZ",
  "key21": "zwzNvRKv5tL1BHmyx71NgYkfh2chipri3GShYzmMiKmr7swApAJBDPL7V7DkCMYjLL3zHMKLdVR8ky2fUarfoRu",
  "key22": "2XxQn9TyujpMrt1GcDXr4wQxz92Zy4Tth2awVGPAiXoSEBkaK8M1Mae69Vp7D2HG9y9iTvXUnToWR6jVPQGdGbNm",
  "key23": "3GyFz3LdLBJGMMAPidhL4R5zUNvWFJfwtb9Yv42s19ASQ8EG5xyEY1iBBZNCVCMEBgRHt8NnBs4ETocBKKEALYM6",
  "key24": "3cmAQZZe12gs7Bo684qRw1YnU7Y6GRHVspuAmqCy9gAeEH1bssbvQXMwZ1nRcb1NJ2t2cUuqrnt6iygnT4FRdBug",
  "key25": "3xX6aWhjKviAPjhaQx1w3yzMhWoCFs6LAVGp2yYpzi1hcD6RaxGg9rY5CAt84qJBhjcXZGAxFL2TBnDccvFihXQF",
  "key26": "7apmdR3RDU3dcKTA3UTdJ4AEtJtraLX899jMQVQ9yQWRiPLp3gnkAwqC6GpDmHi743Gj5efQBv94Q6iv67kCQLa",
  "key27": "64PcbzgWQpBwY9gvj5opFVn1pSsQjNoLhFA9CWomewDXxSvP5eHEwneyU2amYojNUcn96czBoAPrqYfbgLjAQBeu",
  "key28": "58mJCEQV5vxG6xBHfHE9w9ASXFyHbgQYvxeq9Msej2J6J2YDsfDfkEuGBfsEMnReFo3tYJWQ3UWxCaSHh7k6SUX5",
  "key29": "3KDrwhdgcVYgVH884RFxbmKzWN4F8zJUgRHAEKwnUdzwafccWS4P8xxpy3Ga6wNyJGrwEgC8Wz4GbjwyTHWe2hE1",
  "key30": "dsaGau4jSFQ1cv1Zk949oXPbqGXGZxNHP2XM2mQSJtrdMP8aZ4wcvetfXhmvcD7m2LgYJSJGVUe3wqoJo2jNYae",
  "key31": "4ZonnMhPbn9E8xKzdaE9qo8rcW9LPDbu1zBTBU7qtixVtHsCnRQsEzk6UfzM5mJvaeMNUa6tgqGUqrye9Basegqx",
  "key32": "3DcMo3DzkEBnbtktW4Ux4ymTFzRYx5YehN7VuqKW4mx3KW2BK6yRgxa6tj8gprUv9dX5W8R8JAeDEGp8t4CmcCEt",
  "key33": "2zMgNuNgqzw6LYbxukmwj7QsyXbTiRnoQtgKbe3Hk8nnYikUeeQDWEqyZ6VRX6uhRoS1pjcTaFwy2iJgvetLo9Xq",
  "key34": "3ovVcTm7TU9XoUrotxnpW7wRPsKTe7PgQKf4sQh9cFLHrseNARoBKkxtiRoLoiytygxJMYjKrRixq1AP445WcMnn",
  "key35": "2EMgefktJx2PjJuoUBeY7PkcVMTnsFmKyahGpWPpnLwPSDEPRwNxCvoLLGjiTBtjsELAWEKpmEundyo9qMQcDume",
  "key36": "5XnbcY9Zf2jgULbRjdHTh8nu9bqFToRPJutxXePihCM27ti98UH8PhmHe31hnDwcZnGZbfg5qvU5onAeuPkjerye",
  "key37": "rfgnKwgtjFhkzsyW3ajnA4oHYmobbBaHYxN7k56ioLeTfgkx38Kb3DMrtFybQEfQ5FuvFgD8FPr1UkZEQuGWHah",
  "key38": "3C2xRGKLsZgSHxnVWAS18rnsTAo1y3FgQLreAr3J6nhqrdStXhMCFsNWCUwZQ1gKXUGLQ4b52F6cUJpe8XokXjye",
  "key39": "5oGAyGoAa9zYB1RfpFq3nvS77ELhXhDpqZXV31scgRUJLwz4chPVmz9UhctL92ZBFKtZgaUDCSkJY7oLi95cVGjE",
  "key40": "5taud2AvkdHeMFKLsdsT499AVnsN3KAPaBmGJHq95RGo2rQ5cPjcBjWHm8if3RMdLbXFBZWgC78eqrYwsTM6NHGc",
  "key41": "64Lue9YYd3gPBxGtP8wQRSrVTJ1xc496CL9m5V8o7TC6Xwr6ZEWcazRYMX3sauDxndQ5Sw6uso4nouZzBDPaYxuo"
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
