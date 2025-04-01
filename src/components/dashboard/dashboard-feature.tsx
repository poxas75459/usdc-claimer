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
    "4YcYQseVpmVe4SHCVAiWGV1F8o7oyW6BtoMa5AXpLFfv9wmLYbkPMDtcWqNecx4WbtBC33uB3xdhDNYRseLsSuzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjMRMiogcs86ask4D65fYu7PoFydPU3Vfdn7k5x8peQ7U5zTSJ48so1KGScqSjXQnUqskEpjgDmfeNhPvGVXCS2",
  "key1": "4zkn9iXwDYXHn9idbWGGuPpe5iGzo6yHvdqVCyH37S2jUUQoyESSJjRoafSbcEN2HwvHx3tn3dy99F2ZxTSFc4Ku",
  "key2": "3Z5mu1Qobci87hqsCUTevUJZ42wrrg1srrvTbLQbAphWk2yvGPJfrrq3uRDZPNgrmq8ep8EScbNzxM9cFzobMP4u",
  "key3": "3hemhCQ5FZLrQaWyYvZ9TMueqZoy92vLsbZH9vUrt7v3zmfgQ9D1dEFL2rohPZoMVMTPUXVtdyfyv3sbmgT9oSox",
  "key4": "odtNG6r6RTHhusMLKC44CqGQ5uuHpZeaF5nBa57ukV6k1QAUKu6EB5uDVUACefwczMVDGsiP5MANkMP9dk23oN9",
  "key5": "41eMGzxxKiRB2PRL9LxKkxfqtyVjSDmdwJ9DMpSuhWGhvBUpkmLFtati2YDsTEK2koxk9KEHkoqw3evj4gewCLon",
  "key6": "4oQBeMTu7hu9GE91XzSTBxtnvV67u9H5ja3V2qrUajQpWQ9PEekoKkA8mapTg48FX4t8zskeXUKw6sQbJbDf5b3u",
  "key7": "2QMbP5QjNBEs62zf8VUfZxR5AedsCKXgdiweBjGoF7PbwsrCjJUgXojjBcwA5G4vFMcgJSK9fuUdpvroVYmjHpSp",
  "key8": "62qb9tQ1ZqUHgpJbwo9jg9KCNvYTxHbZreJhxR4hCcdckjEBcuiWqf2S4UjW4nXmDwy46DozzGWkHuf83RrVpZ8v",
  "key9": "V3JoPVRFkWZKsKcM1h5jMYhJZAQVbNbXLQKPeQcqu6981ZaT61CdggxoRDMCHuEEjVm8mLMRWK3bmXMWUy2GBHg",
  "key10": "5cvxsmHy2iMFeZwHxyr1EAwCb8rFTCBdoF5hAK8PLReoP2JfeG9V8PJqkDDf2b295jNKdZ1JJhxNHys5gzdgHuoE",
  "key11": "2kQW3oXsiGt8RUHJ7cdZ1ETTSoTPHP98kikGFxaSVHkBaKdUWC7VjSu6LxcyWHZmmTdnQuxqQHzkzsHGHiuKPqGD",
  "key12": "492MWaJNcW77PMW9TxQHofjYE5qAjMnfKNArXs6PtmsKeuAmco1QkpThXajg9AF321tS9Wpc5G2bXwS2jaDYs3J6",
  "key13": "3dh6DwVHX56MZ8EppWrqw682fip5B64vwy3XajK6LGrP3HnV6E3iUaiZerPq8T4udHvq2bwVoZwD7qo4o22U66BV",
  "key14": "2q35D2Y2xDSrFHiwZSThFyqmeMffczUovjY4E6zyXAxusRhyNJF3UqypiUKGHhxUv3eC5YYyc32JFKqrEebPTzTn",
  "key15": "2BNo5d64iseZ15vPDF2k2sGoWvxt9Tqj4NEPBvBPGy75jHQ1RZFtYuGhnPHxpm3X7H2AD1uzi5Yvhdx13vesuNPJ",
  "key16": "2hUk6H5JksAq4C3KhjMiYUdFBUMSa4WGc4rknE3qT7zezuSFcQazrcHZK9kE1r1sPtBxsYZUrreiX1112htBhz5f",
  "key17": "W2KEvAwq2EGw32M6HTVKbiewUBNJTxgu3x1ahFhxGEuNkhB31sdPwCvPQZ3Nk5gwoM34aeU44NANyPshLPQF9yS",
  "key18": "2kmBzmGShsayfEmvX6uWQuBCTj6RuDyzoxt14Jbxe7r5KTQtU8dPDxb7eSFE4Dsa9kBZVGk4zAXQdSU8JM7rwmPX",
  "key19": "YQQBRZyMu9Lf3B8YJAr3bo8M6DMSEpvwcZ4ZWWhkwcg5gcKRu1r4Axzkxk4bUtqMRU4YDxed86keH5JC7PRrt85",
  "key20": "LhdiXVVgjJgGaRmFgWWDie3FqmSvnyU9B7JxhtrtvVDSvWqVch8BAa96e6AYrVj31Ghbvec6dbpfmD1sLmem7ms",
  "key21": "2nstTfietNNqx4tSxcnos9qoY6dPE5ive683iWbtwG6RfPtSYSMZhoy59kL3xbRq4eohCNQwDomMDhbQK2niSPFq",
  "key22": "yYGXS4kLZYLPb9PPTjPe4989sdhafivX89QWXuHCsKZpa21K9PkY1PKwtA3s9h56FUkWZo76tRgajxwqUkRnhvF",
  "key23": "24Ghdk92knKdZ8SkghHcDEVgwZKcS26uSJGi1c1yfyG3AaHUVU4vV7T6goyNnNDNdY4r9zMiayBZA2GXhT6dpN42",
  "key24": "rR2EGTjvWDZnddb67WbvpAZfBMJwLS5zXkTamE1FWjQpemtwxspvtue3dFEgUus7X7Y7gmyDxARYxcrgr6dFyat",
  "key25": "2fcHwGCNFtxVHUD9gqotKwVBYdEb6r3a8E5nzD4HzjSmtPgbU8Nhrd7rt3zmEejkvUz8i4hGwr7yQJvzPKuERJra",
  "key26": "5C9KvmZaXFdqS6APAG7qYDsSJYeMiybeTTyCbU4ycQzUC9oJy8JYrS9xVm5H9iLMyDRhEMkHtyuvZ59tz3fMSmSy",
  "key27": "5LEDkUWjvxMC9jopEokvSLvzWvj3DgauFmrbCfpn6e7MjZ8TwCSfy4eWAvY2FQwjsZEgfh6LN47jhxjTB4ih3EkT",
  "key28": "5pduCBbrL2hE538LQu2fc35qLNae51birMyd5J2avFDd27MdeQ8NuJ8Y31a9fD4CUJkLGdHVKbpuCKL1Ty1ttX58",
  "key29": "4811wnK1K3167Zt5ScMTcfTvYFmPTZRoyvikaK7D1B77be1i23of5EXaxr3oxjJ7QYxJShMdzfKAZTnZYDt3rQVy",
  "key30": "2j9cP9RwhgUUf1vMEJ5KF1EuCEav5vTLvyh2JQyEJAXkjVDgSGc7NBrBF5Jxou4LASvNFZGd7FMp6eSdBmM3qZ5n",
  "key31": "2xyjWsS7BGSx54Y2wgoL58r4gyXARvTGd7CUrpWzgcFetmCZdEv48JYWwZBdj8QFgJRh9c8Cbo99tVnaSZeqpPNs",
  "key32": "55SCrZjWiiKHvxtH26Q3CdNEeDpKzVpPE2hhP9tjHJPKEYZ8sXMDraiASqWoy7pUPcijCvi5FN1TLy1VcA1ng28p",
  "key33": "2awMC55gNCxZcDPv3X1N23cN8i3owDqaNwxN1stGDSDRRJoqCFcbF51oC2cNGhYnpiV2pVPeXYzvfApXYMcpWzui",
  "key34": "2sxrcgPsFB2kkzULEdydEggwxVsD63YrrEnXppiUkFBBCXmu9XwjoLP2x5HvBwYgxCRSnEc62sVPA8fna3uyemHV",
  "key35": "DciWyH1jShuD1Qbx1d1w7zGcg2hnHvsZhtTQ8zb5XNg2bWDBkezWG1XexLTyJsra7xm4mgLrkorU7M15oVuJM2A",
  "key36": "3nQsTYSPGcoGhDJs5EwQNAuPn293mPtXkVsjB8AASGiMyw57NHQ2K7MpVPX6soj861Q4uM8Z8MtpSZVr5tv1uem5",
  "key37": "2JtnXixukaJHU4Jcd3q8HaqEhPUaWc9j7fiv3xuqBF9n8Gkgw2s6dBy9dQiE9D2f2bgRjhzTEe6oVHxdCUy2kBbu",
  "key38": "61YDeEBG6Q6kw85c2tYha1KbqnaULNm5ZVA8MLFwSxG9k3DPhm8PRyHvCrJdf6wXQXZnKqEs2FKg1fWrjs6QyU5v",
  "key39": "3ZLLGgXUSpyCA3MHGMKXiyDUACPTZ1gkRnaLJNcSwnibj4vbZiubhVWNo8Nagj89PWEs9Un5MKyLKBqqSj8kJjP4",
  "key40": "2ZfYr85uWJVLhHaVHY9aA9WVhtAbZ34aVHn4nvjuMSVDNdjpp4KMipNqdXE5uJJYjixQbtcjatuFxr8GquQFC3nV",
  "key41": "5hDZB8YtreqY2JTwdo3XuL8j2DvtJg7272i78pUss6p5zuhUz7oyHGxQLBaVdEhoBeqzTCnxhdpSy8crgUAAcjHE",
  "key42": "3EcuV5eQoiKH4qDi3En5N19LfDxKdMeBudtxfS6Bz4Ve44BN3g6kyGq4q72VLRdsZhqRPdevgS5FuMoDfeLwkxLt",
  "key43": "WgDtXVorERx3cath9oQrFdoreFBQmdSZGZQdLhrLeT1Mz6PW1sLocKNFwMM4cekv8bVRmvVuG7jtrMRuRvcTGhc",
  "key44": "4eefr66mx6ogSFT3WnzKPzr9votxVw6sAvmizEPJ3gXBaqNPNj1HhQMwRbreX2gA3f1g4So7otazWazdncU27WWR"
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
