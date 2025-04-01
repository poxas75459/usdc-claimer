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
    "67AE94dNpSaRCEZDrvw5uDVCXmG1TFtKTBsacwNufyRpsRZrtJFk8A4z69vYxW6gZu271VLoHDxKCu7qS7uNS3VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tkywMHA4TjsCQG8oAF3A5QLbEYaDwFL4iP9NjUmQEFruLA5SbsFd94yXpdzqJUB6xvf5ER3yBnfTntaDqYVnrsy",
  "key1": "5yCw5oCRs8GjxU38FjqDomeFz9ebvTGwoYYtS77tsNgSWpuHxSGEtyJUZ3ipzCd81Z9VeHXLkeDghXmFXqt3H1Ak",
  "key2": "4dpy98F9R9vsLFHtGiKErhjepzcrfJCC9QNJFymqNDKovh9ZSQpm2z2ufz3xdUkhqtx4Gr5S6guGmePZGxJkLGp1",
  "key3": "3QEVzJ3zagxvxDSnbc2JrvvmFuCWYAWCSRUxD4ZanPZYbmezpt3YJshpFC2G8RMeqm1Stgv8dq6ajAr7FovWCP4F",
  "key4": "NpBdNn8wrqppBZkf4gtsAbAXuefZszo8tk1Lsf3TvsQZdryuQ6s5nNyMYD3eVRdUQVRoHASwEE6MrW5B8YWDhNo",
  "key5": "65GpqD5brxVQ3qFXXWUeaUntjzjFFbokwJUQinDRYjj5aAMUEGmdwT4aoDktwua7yj8pfNNNgktCu9RKuRT2kVwc",
  "key6": "5jx1D1WEqF8Nz46QJ5uvoMGZJoYkSWTcfbXmnjVnonzAB23JcRF4k1WTiuRpnbAJrDS6WEAYkYRXs32uFsV53StL",
  "key7": "5yCXj3ThgDAoy6sehnDYrsUGuZ6YNJvHStG3c1Ge9RTSfcPrVcLnVZUm1oXt1xwjK5bo1FYYaX5J33FV2gNCGzrP",
  "key8": "AN9dyUBGnMPMC7XDVbw7w9VRodTX2De3BCyuyVjSvb81vunaHDm1noY7MtMxunAC4k9divrAJtHcFdkFN2AWV8b",
  "key9": "p9HxFNpUwoitTaqdW8ib1w81xiGQnwJCsAsFoJ95z1dhZvB5r2qGBeLktvM6RXxkf16mXkNZ3epi3KbfJMT8XNP",
  "key10": "9YTd9cWV2E6CVTG5V2ccR9r8Y1ekrJ94qdkdxV3sRBBANo3uV5Rz7PrcnqeCpGfVityW2pk63fEcR9AgTxye6Ac",
  "key11": "5x79Hikcd8LDn78Uzpc9HAxSiepPB1Bv1LmxwCL9LtrqmeFpbhPPiKqRcxxgepeSM5cXRk8eanvrneNxb7ZBzze6",
  "key12": "4WSzGuT3STWeoFbK5Nhg3iBRAURfhYATXepiNWXQjRHwziuwmniVPTc9CJzvQipn5MaebyufE582oK1Cph41eA8z",
  "key13": "449yq7vBLwpj28uTxcstMraSnjMwzTrf7Lbb8ddXqxQQdwEeQmGriiztuL9S5kqQzGgZKecU6Nx3pmHPrE9s5ivk",
  "key14": "4vD5YBDHD3mXMaAC7hpC8HtaiYwgWkWe9QQHsEsLQbKGhuDFvRcFdTdRagiEYQnJiT6jfAYAxTfJHoa76DGbgyjB",
  "key15": "5hDF7sDh96xL5KhXr5b69GaamSmZYa3PE1XdGdMwDWqSJxqmc6n9ukQBCccd9Dsaov4uXj3Y5RxmxKbSVV48cdyd",
  "key16": "2ZDaETG5ubBaEarMTVT94yK4JKgojZ2arPsxThGKGK79cL3PposYr5SgZD8rT1M3Vhya4GeFwwEhsmmTND6KRi38",
  "key17": "Tr37nMwyBgTmUYWduoRwMYE8Jw4aj4e3XxbFKYLNxirXj9wgFRRctRaucd7Ewyarwszaw6N2eTYFWaPL18WCPFD",
  "key18": "4QQNMeVuGRmofk6R87MNDzoumKqkVvw2vmskHVcfCvegaNnbMQ65Vs7dZhdqZigd5bJd5ZwQDb8B16fCCJzbfPfp",
  "key19": "2F6DHBKyTNZgvkXw2k2Sj3YMc9hqYH59ZFiiYiTSvmjSj7nvonwHATuh5b23mdGb2vw1A1zrCaHLhwQLDWyCW2gs",
  "key20": "5DvQnq9RxA3bdUXuFQJpuTpAa6Sjrd36RnLMDZ9P6CeXQXqsRG36jJHteWxUktMiAtSDJ7GsaQd56JfFn5Eex9qy",
  "key21": "3EAyoq1yGdukKBxStJW74XVnLZEA65JCD5rs7Bs4aJ9NH4PXRxE9wifDVPHt3WJcftpi6XpruiPN2zfmhf46u9xq",
  "key22": "5pPm8rfNsj6GJ7dWeMhua2qZ7Q8qgCKS9tA9pQr6TyUzkqkXCq2Mo1DxrYQ2rvBF3TofbkYoKocwavPctnBpztgH",
  "key23": "4LSJv1nFnjBH5hHvXpkAwvtz1rzdcSX2WnoyMWR9zVuj5Atgjqx91qMg3z7Zeo6YENfLsmYUVjwiSmGGhmWx4FJF",
  "key24": "2eQi3PrJF5qgnGN2YeKwvtZabgcYKwcdKK2dQSxrtHdrkb8EqiMCdVub9D5mYTuEPj7k1CT9CVwXpWogcpaDVGJy",
  "key25": "3A1Fgoqr3NEEatFjEeWQVDCjKmtwbpuqS7Ed1QWgN3ap8YPNmCod8pgYJzvBu2ZvF9nhx88JCHSXTbjd6796ezXY",
  "key26": "5g8gEyBq9Q5ghDLmxGpAovFTLWVz2jZi9Nypwhb1PYr7uATJmNx6SaEXSx2eRtBrwgCd3QNTCmHj5yFL3gRQjUhB",
  "key27": "3pPQCyCqz3nZbkow7152dW1mVdeTEvKKsHwYxcZD4zCjF3iqkZUfjHizksTcdN5MvJW8BHu3fvMsneFjrmSUuKWZ",
  "key28": "59EwVk8JYzh73ofZSNrgrsBuLuGychbURpEmtrPhzYzwnc6PBvrayrLd1ESQrKDN44qPqmVzBS2TcmfNrYGTkBfq",
  "key29": "3Gs4wve3gB36pUCM5nkStnimp8oKgFBfKk1TbZxc554ngA5dZoPTjKwx7FBDXFBoXvhUF2edtqh4fKMbXeFbUurm",
  "key30": "4XjW5LynVdpz3HLVhoBbEeduTqR9vpbXicYVJyWdinetQu7KajxjsMRVVoGwphAfqpr78THuZ5jBE7AzTZ7gcaB1",
  "key31": "3FTDMgBuwRmtG2yRRcksrCUFDzczPA3dMKUQFiUfEctgqxtDo8TYdYmRBeaS7iGiBzekvgpYqzoNizrHTCMkF1fv",
  "key32": "62RnK5HGSdhuZMoXtAfCCMpVL4fuS2Nxf3jL1fhQnGSqnbCzyFiGjkgsMpZnPkWKo4xreJ5Ako4pWSKG6tDGwcSQ",
  "key33": "446j4xwTWd5wDV2Yw99G7QdkxXQ8TvLrXbAFaSp7C5EG4RsY6TxpAB5CebLamZmZd9E3oVcjLEUotLNMYE8VHaPh",
  "key34": "5KPKtXQeUhdS46XdF5Xv9VCv4zUnAQF2zncFQehcwbhWdVJAwpYY12ZirkyZnH5WS9g5sCsnJVtbUw1nyxG23ddQ"
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
