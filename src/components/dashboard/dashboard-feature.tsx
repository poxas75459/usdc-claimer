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
    "JiPwtNBsLgbm8jCg9DffjZeZ7EfmtTuj7DtPSyPzreKyJTgD1ppBUtVVyRPqo6R2ASoykLLRf3rM2NXdFsTpNdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aH42HrcFFzQtV5Np7aU8zUn5Wwz21kthT2SMUR3YuvuLiHNeFmrT7wDqqkhdrVxf5SXHsaS8ZQDQHNAzgE5oKZ",
  "key1": "2zwVtNdQisVpyR7EwgQ2g8uujC9265eTqJU7Fhvec2sJVVpsMa1vRCpZjsHZF6M5pfyPbM926dDHosVaL3jyxyMv",
  "key2": "5DyMvyJGHsPAyrxpEADBrBUYeiRysqfCeCWw8K7P1Lc61q86244gSKvwnZzidcYRABupwbGzZ5mKcpEwmzdJoqHU",
  "key3": "5H53BuA8FYVN6EYaVzp9DimgKCK21EmUrGKScYqULpoNodFYG73AUdT3wP9Pe7A1XxCi98SUq8f9ADf4P9DP6gUn",
  "key4": "v1ANWsNdmdfGfKgzraFyfqJd6gchcGXAN9usa9NwcbZpBJ89S26BnHeC1ogodTsm5cEnfdGx1Sbhk6EUKqj4BjQ",
  "key5": "5Mw2kzQ81vWJujk3G5Lrs6vQEbCvQoWKPKpRbh88XX9hHwrc8PfMG4E6v4Sfm8BfVkE385RgEBMHPjDAUayDG5WN",
  "key6": "t8aPyaMAaHzHtNUXn5xaZqP73tkPVd8X4otTBfNDusytupgDAku5SZcuVHf84UyGiq1MSQyMpaEtv2fWANKU8hV",
  "key7": "3NdDHGdAv39GGBdi5pTYFW86tHCaawBBRGTSqa8y7rUHPiJojvH6nXt96AuSvKtxgvMrYpUpwr3gB2uMGTK7jJvy",
  "key8": "36awE8ZyQhwSxKVUyyyQGoLNtxcPLqupQA4QEe8sVrWsZAmWwvdVJB2A4yPH7XMVdZHTYnKynv4qTLkTpwGxHDe8",
  "key9": "BbdqXnLmcZ9e713HC89iXzR2PsUN557o5Me8erBAQLgfhDesHiE1b1UvEtRsPXB2VNB3dinRpwcjPGcvkZSB4K8",
  "key10": "2p1EvFVvY7q2bdXgcZ2v9Pzsfs4P7FNFkgoBmjFjA4gYHipzeJsViSjjw16Ux6DzEA4Y66QTqChe34NqBfv8STN7",
  "key11": "63VnP6bDpi2Jx9c5p7w2DCh3S97YBNWpoaoUD1tDdfd3ai4C9EAJv5rMFdg8SsvCcXFocJYdiMB3Fe7rZv2v3wLy",
  "key12": "33yJ1inH2MH7K3ofy6hB4TndrXKoxBpubiQY2uuDXW1k28zSjpnBaLbmKs4WMZBkm1rTVusPhiipQ96tgosnbrGs",
  "key13": "2urCNaJbU3gjsLYLFf29rvyDmcvuMnc8bTmCwhoksi6WwD468DBtXdwTTBaCmzZXHaDycNmiBG8QfEKc38sBh8RP",
  "key14": "4M6obZJkVFbuPCGWNhbCbp8utieTcXGTDx5UpPMPSipFEARbed5RK2tHPjj1LV5TQ13TK8ceTcbDSSdUFx3j9K8S",
  "key15": "2gsqqnHDGhpEdGPFrWHXdmo5EDRKrCagB7zztpQPsGb2gDFtWZg8bwSZ3XninrkSTd6rkCoKjY4yQXnYPNbyHoGx",
  "key16": "4uPoKyqhsVQmtgzaii7RqKv4gWW6HnbJEcjjAWq1X2GdD1t11ft2rV1MUTA315H1pTRGWa2CuLFec5mTHUdZFWL7",
  "key17": "2R12aasM8GLBTW1bHcS5PAMts7W2RGeuDJhkyvmpQ6S44ChjzseHXFMYazekWN2sdDLvAejpJvF3hHtGmB8Ht6Hw",
  "key18": "Pt93x54Hvvcap52qHUZVZiDxvtybZhcDtPEAwDcE9kL9Z69NTd9LApNXvXcADzvxyQsuy3qZpzPM3aqe78YhmKc",
  "key19": "2vu7piHX38htWJrzmATKmWwBus8fMMz5H5J4pZ1LP5W6VfgJDmDXELy1mqumHdTbGubKC28ZCUPDXgyKfoHPMoMz",
  "key20": "5y5sHRnqL7NKFqbR3nW2NeCedMgcG7y9SENanCAsnosb3XWxML6o2mjPu27znR6DfRBzxD9yZb5jpABwP2y8jDdW",
  "key21": "5h2eGsuH2DBXHUjFUgtZREPB5eJNgS8v5AqSYzxwDBZ69gL1FKio78gPUvzzctwQJFPyiXBj7XC8Kqp2bDypsyNL",
  "key22": "nsmRKaHDM6C8QmKJniMpR4uqPcneKM4REFeQnUGX2eCXe91fXQ4AuiXr7AMQRCNKtTuZBP1RK3gZsR8zdDwg1UN",
  "key23": "MVPKToVeSrcwKJnMDAVLRv61tAGSSu6jroiFoJKAAD5YUviRytD6NvoZzgWFfrY2GLN4rgf4Rf5pzpSr22ZkxQN",
  "key24": "2jW5F1bLHgyppx3Cj9Z4fytof8czKtbmDPG1F2psGYfw5pRMaKyzMaps4BomvBb8bjNdKjAo491cNkoytU76r7sb",
  "key25": "2nvA5WPZ5d6A3PiiZgDKYr6iss8rkA18HgtFK2UMGyUUTHxQWxS29vNg5DRC5KcwhDKryFUiNphYNfLJVLwnDJMV",
  "key26": "5BgZTfuw4P1Hq923MwJgJnSTSWR27W6MfVFFhgDrhw1SS9gkfE2DjyRt3KLSFkkATQ7q8EbDWfkKNppjdERevXYz",
  "key27": "55UkmbuFVck2w7UmHzZeRoMykT5JP9Wp9PLshN9W6CSYSM7W1qRsnNAsQ43cJXu7X1XAfYCS6tcRgjaatafJfBfA",
  "key28": "2zzAHpdB8j3M9br2HG4oTrEyuQe5Y5JWdqBbVKhPyk9E8LLMKmTPpzEWfyBtWBbSwm8Q2y4Dr88EivPjDj2nnVmh",
  "key29": "2Qsf538xSrKstRLT5pi2q9c7RPWjbpUKfEdqEBF4NhGkrNMmzfvCnmfRqruVBeFAE7gdsBu2mFmvmXafykoRPDZe",
  "key30": "3i8eo7Tn9MjHb2kGtLwwk2xMCGUsca65sbPDGVhLx5Wu4Xf69dwpHdNKdD4pT6vm2jcsCCNdfbejKu5BoDE4pq8y",
  "key31": "3xnXLQqUiPRSdnEEnM8H9bssj5hth6qTuNYgcv4widkrwtcQTKcHWG92GZUzrd1TsnPqnnp8MyXmGZHusJhigJvx",
  "key32": "9YBPcQPhUXpmxWRZ57RSaSxgcGFqS9KCkvipTgPZprKVBGbuT1BKpJ8awdPTstSz8rqZsCxuhUvnMcpuThTy8he",
  "key33": "EdBRTEHHbvMNkpctk43ydyV3WBjcf5GJpy6uUj4KsMsZRaTa5HtcFhb8gjRTCQPF4PezCUWdrTqAFcan62CPwT3",
  "key34": "xF9fXa8tLstx1zZVWw2VJzCWxv8kvU2sZR8Hd9KYqq9qbRRucED3Z4F5HkxN9hbk1jKaP6n3k9siPMA4v61QpDu",
  "key35": "2tYo91G6Kj95QbBHkaSa8zL5izV9AvnHamYcRDbUocMJBLumTSBmWhveo3yzDyf9WRb2wZx8DPfU2Y5CJmZT2JwW",
  "key36": "67QLjsrsvBiAyinUCYXnjJkBavx8KAsafThGv4cpJZywhgjC5ePcyrG8RU7LdoT78GfYJCp3KYCmWQPnDQbCqTfQ",
  "key37": "C7GXu5t2sV4CzQR6gq26qY9yShQtf4Vu8zZU3QXzYZ6bCBRjjJVUASs5vJP2epy1BA2XfLXynbQyo589HLKKBXX",
  "key38": "2LnmwEd95j8B1eAiqgikcEYMM2115w3JHnetjV9UQC4PxVe7hPWSSY4vUgibk5oha9rUv6PL3Xmc4NkTjx7BDACs",
  "key39": "3ZvzeNRzsQ5LNgWxHFbt5a7YTLQbH8FPL3s8XUcAgqwSkfuy57CBFJJ9F6uiWeZnepyqudbnUuYK3EpZnaScGER4",
  "key40": "4NE8tGemnYhdFjAqiJa43GbQGp5BaDHGQANTEsAJqAqUCPB5ssKSn73fnsL27heg7E83cM7pPBd71sfeveJzTVjK",
  "key41": "3nS6rZvE7LWyHQzp6ZB9jyj388KWBmbBN9gfdvCmTEQMaapkNgZVeLJ5Wn6Mt3nnimou19Pg7Z6vzJudZbWBDLqc",
  "key42": "2kTvir1zyPwKfN6x6Crs7QTXBasHHs9mFAV5P6rhQaq9KvfrMAM12CxSVuofjgxCj8K64uE6mjL5pvdUAsFr9WRR",
  "key43": "426ZRNnX6WVNy4J1R2BcKeod6LbXGbz2Gcr7x3s4QmUZLqoHSbWQFY1dvkGZLXUogkRdmxKZzzqFEhyXhP8Lun1b",
  "key44": "56Q4JZxGucNU4vpvaer5KGsJXTNMx1XbxPwPQYVGJkDYS2Gy4QVtuX1zeAbKNHxbgnetSkLmtx9UNsQm9LWDsLNV"
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
