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
    "3Mh5UW8kpecUGZWAHK9Ejw73yUCEgowYUU45kbBJg7idZcFureSk4hW3xSGbYW6f6uFbNpWYBM1qu5YwcAwAPo7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXb4ii4cLHkvRveSKSqZECPGjCszQxxCJT4kVSp3r6cp5DLUVdiRvLFfGGLDF37RzXeJK5NcS4NyS442AnUfjGS",
  "key1": "4DP6tcKxwgqPB3vHSmpcKB5KD5KMx9wz5kvcP66zTurVxismq9MaEYE5fGkBxZ6D5MVKZFYhQo9s27KZNg6SuH8p",
  "key2": "nFD9bUJYacTo8VrQSQC4UmEACxRsqcgqFC3ywyUJEjrrpAqTuKXLaUhA6fxkLopmZizxkmQBmw3szciWsg9rii7",
  "key3": "2Tw5KyyqHojompHB9f4Azodw2w8cT4cU5itzKe4EqE9Z4vVhteJeaeo5Gy5z3YfupVqYccmu5XHrXQV3teNFKGPV",
  "key4": "4sJR8bw1PBTCy92NE34qe89cxFSJKupQK26EwdW3ecohSLPC5m2A5vBqmfVxw64LPsb4RGXZvH5Ns2RrcDGm3ugC",
  "key5": "3KVu63fSbyHCP71hPWmTdt8SEb2YiP4g8EdtqVePqxMF3n9P9GLLN3ELgd8WmaoRYZpLiXSqAJ3fDbpnsyd8EZ7s",
  "key6": "4onzsCkW89kz78jbn7bDzuuzqa1UsEbrrVo3fxbNdNN6CyJsm9WbsjYndqF7qxQnnXFx2uZzEPeahSQKvPTM4ChR",
  "key7": "35X1237D49B7gQMqkYNfa5Cs1DtA7PjonWP1HJw4ga8XZPssvXaNqQMS7yC1g8WmBk6F7JVaRQmdfx6abyXG341F",
  "key8": "zkbdek9n2a6UTxK9UMPzKj27itdhTNCSjpj5HSfBFUXguFeyKJSPB64pnsPY9yQjm549XWAP5skapqTUe5o1aKM",
  "key9": "657bw9dvEn34SJ6mbnvQEYVZ3cBJuMMKDu17VsP1RAbSqNLNdLHaRMkorV58AzzvHDYHnDqM99oQc7kUh87UFe5M",
  "key10": "5oGodvyNTTS5T2Jjf92gPZdBLTKywoaL2DaurcTfJRDYE958ZBgGkM3MEphrZesX3Q63YHRBogi973BaHPjBQAB4",
  "key11": "CQicZznMaxFQTWb7yYXJNThdnadHDikcD8ES8xyvCepfkCm8SofsPyokw6CeHKUyjDLHKgGHRfSCikfBzq7pyPh",
  "key12": "sbwUhyDzJfFQrFvptMbc9bsBBrgDkMoMEjTVfKu2BAgWwNXQv4841iGHvEELjHZRjmvKAviTHwmbYvQXxUMYEW5",
  "key13": "Rjjht7yhnDFdcXwRS1rJsQhcoGmR32HS4M3w8tnvV4gUobg6aUfxX9WBg4GGSu9x6rXuCJEgrfxRnC2i9gRevXz",
  "key14": "3CEHK3ykibsRdiYrNARUpNCgwZVUrbBo6oVwitsTT3z7dbTdqgkztMgJqxwq9ustq2gM7gacKxMJvfHRQB434t8t",
  "key15": "2csdpygVMvxjbZoHaK7sefAg8Ezb9BkVWfD72T8Lco2A3zLEcbhh3f4NWeCJmK7UTF4tNbtgSE4tVjekpR3mhu6R",
  "key16": "tWznEj3YStBNxcwWrY5PmoBgp1dvmF6E5rPCNqW9mkomqFmH1CE85Y42keLwuPKYJdpf4X2YdTubAfxAP5vgMGf",
  "key17": "4yifQxEoiEfLPf6DVaLAH4YZnbTX3Gd2Am4WSnBpmdqRkPrS9DDbXGevnb9FG2SnovDpA95Dmvujsi4pijzHBVMU",
  "key18": "5A4tTqDna36q7zuDU7JaBPmtQMV1CcTp8Ci3ue61NnYxzhnNxXqCHk6C46e6aAL3J72htbvhXXL5CshyxwJ3TBLG",
  "key19": "yWwD33aJQ14F26bBUrXDZnvFq4Bb7EufFfqxuUZShNqnKzeEzATG8tQwLbTFznpzx2QCdxaCaFZbUjCaEphZ2Uc",
  "key20": "2LrAsAvnrxXXL2Ec9ZZ1ZQ74RwAUxtMEFY1KNyt8NP317sFafYETdekadoaUCRAxfjwD3Gna4obwqTcPNQWpxusQ",
  "key21": "5SGQDaQUas9sWEgkgfPAJnn9jBrj12vQpcYNU8CLUVozr7dRZrUWwAMU38DcJW5vDRaVNoLZ8emZP6ymtdzzQcdQ",
  "key22": "5gC7pbWhW7hzLrNsAf7fvv9x1TRfA659jbWyak3TdyRQgBoBCmvqMyK5nqv9Nbktgv2y2QAJopjPbxm5jtNnynMw",
  "key23": "4jJksedqPhA5wC9QY41CG8gaNrAADfizx1SVxxJYfrMzUwcpjzMYmXsynH2qz96L6WLG3KNmk4L3gpSHnJDZQG2R",
  "key24": "2cT2sfbiDNcTyqbzEGn4PGtkGiLLKkvixTYJk5psk2Z2zDk9D3qm3BovhiRwff2YMt8m7UbQHRcBCVHsg9M9VaVF",
  "key25": "tdpmdwZ1TTQUmnR4BDGB4bMqXwJKC16jnkRBVfXDJpV3tfLDyUT5c91ukfdNXokPwVrkKtLZxPQuhhNARUSSUMh",
  "key26": "4pBTxjty2YREDGWPQut9DvhkTV85dNMeNhjiQodZgZhCqmspqWX6sErWW8gkhxXUuhwdSRGcjWXQzNeg5FLKkAQq",
  "key27": "5g1UQR82Chv5yh3RjEX5H4UNjz9bC1ZoMAqA8sfuVkuvQNdBU72aaeyJ9fFsKAtW8UmMpYMxCNnpfTPjYSs2XYBM",
  "key28": "4p8AbqL2s4EX71qXCYnsjMJMpi6DNMaFiQbzdd7TTWQR53Tams9Rc7iVLaWQPPaqemYFXuRHPaPmew71KnnW3ZX7",
  "key29": "4Jtxv9NnS4mKuQZqo8nT6KihWc76nraiXSCNp9Up5WKo6G9GyEGkUrD9AhwCnQtNfpRHgnpotkR3UsaoPJ3ni84C",
  "key30": "Ab7hDMExKGTsEmcBgnqVE3U9PeawtbwwgcAA9Vcqs27y1zSaEsGYEysJ3VWzKG9Cyv7RUAebTtg3Ldpq3M3gTpf",
  "key31": "25obMKssqYMtDE9SBoHYahPSq1fuGjabLuBhC6ajjCpsYrAHUfV6j6b2jaQLkVSjDvVfxB7PRGPp557wGFPzUymd",
  "key32": "4LrRCSiBVf4hg9hM3dYC7tYFGReUm1i1FzwiXUBexWRBcNAXg5Kg5rDXKP5NiGL8iYbJxshFJUXp91SnaQcRPnti",
  "key33": "5jQaTeiqUCRMG8jqM2oPkKE7rZerewFE4DnP2MgqLd3CdF3fC35cfVELfGoDX4j7cyCondwmwioErFc52x9cYRRp",
  "key34": "5wgQKZbRjAmUhAYBF7V5LMCBZPA9SSUuPgh7xsSDAPYgcH98ymBdHAsCPoZoQzYSK9UCV5N6N33ovBzafrLkFf5s",
  "key35": "3CJEJ7tip5wbcLNo31bDbyfYC2xf8bVMGVUsF2igPCKMnBAKQomY5txJsfGo5HMtbrPi1qGhgbYkHdd6ANYa68wn",
  "key36": "3FuVUzYd8KDSZZF4PWL9ZtdeJRtEvcxjuPYMN5EKQJU7waAubwx3M1kzfaXzdcTiAuEtoYXxhpD7mAYXQd2Qdz6F",
  "key37": "45qbtC5CudEibPiRVy73kVEhipUqGa1JGHqAWaocLR7UfpyADrXP1QMqgF6GQ4q1BoQjkHBQyaRvAMnrmDdTsBFM",
  "key38": "5LdgMwh8LbiC5eeQVJY9hkSMqFZMbLZ5jefeH1AMHRBYiv4FJXjZHoudgAPMNzmFDcbUWk2U1U6BJeHciGR19gvR"
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
