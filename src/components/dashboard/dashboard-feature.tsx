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
    "33KdaN9k6sKpjRXdUi7jttojmpnbPeWANnbwVebX67jkEWdxjVM53vPB1aU79BLSPsAarcqp4riwdojFc9SEPEfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KKNZ3GhDFb48UqP1NHwvJeyreMhQiam33QF3T82x83RGqhNWaCaV5gEPWrhpxTbDewAaMR4bD2DPLEiVDkhbAUL",
  "key1": "2cB9taakQHMVoPf47M2dPPvArXWv9bpas24YmZb2whMHkQiR9addxWGig8a8BxDjGmPUbYhwyBcd7hVr6UFBYgai",
  "key2": "4DPgqohXUuRVDL5HhaKFucEwphnDxEfHmYLd98MuUubBDdPA33cFyLF7ZRL6qucpgtwcV6tSVkKuJGAj3m7Fcfo3",
  "key3": "3UDYZjdEToz65mKECb6hjhY7ehxQRNYoAbXz7ksuCP14rdrVLRLju1WaJ6tKoHrgwKYteCk2A2yfTdzQdKM8idxz",
  "key4": "2fkJ4EHbZrff2mn6BkUjowFMcqkKNhb3FNgP9achpeKXtTbjsyjLYhJPwJCzKcFguSyBSz2yCnbU4wA67cPZ3JE",
  "key5": "3y1ENdnzm2E4qjULdEybVURj7nLDWsRU9nhPNCZizNpaGY7bZCk9zNkeaHdGCKdyvskGvgP1URRdoKn97juM94KE",
  "key6": "5DnDE38hSDYDkLbTztYYmZ2Z5TGgYXg5bfpcTuyQAAMpV3wh3u8EF9yJiBnEqFx14vimccb189yRUGrao6zsBWvz",
  "key7": "4Vj4QYtNiCvvakq7fVpLbQeLzdQ7uqzTB6VXwUS14xKGG6UJKZKVvzRw4TfsfjDmFVdwLPaSjvLhNNbWiLZ37mgX",
  "key8": "5rKVTnkgzerMh3qk9B5zS6SFz98W6ap2R2CmespsiHKoZZG1qaS21n5q8uwyLqMwgKjAjaWXeufX7hzm82bFENuQ",
  "key9": "3dWXB3aFntZuaBUXip9ai911PVqHWhv9tBUxcQm6oTkT2RbJsQb9VVDVhFU5mP9Rfh9Ea47hTb7Efym3kf6pEsUp",
  "key10": "d39ACgEwPZ28TTMk9zDX6uc4HTtkzWTrxMkaqtzwdtvDr4p53NXHu86MiYqQMMTC9eE9nTqGVBZhvWuG8AmVvNE",
  "key11": "4QrugP5jZpc1cdkkLTjoUe69pwbAvbKiASySqwbK24e2bg1ZoRLco8yRdVqW8W8vrPvzZ9gE1kKoy3jTaKvo63wD",
  "key12": "2FSAYnVCg5RKyNFT3jD8CBQMN1ENWURXwv7CCbNX6xdKqiZ7t79Q6RQEJzNt4vaXaAGZoddZdpSf75d6EceQy8nD",
  "key13": "4bYJzFC9Tf6UDe7RdNQaKHJTUXQ2KJHeCJs9GAfypC4pe5GH24NAo6N7CD5CRDDnpya8HwoGSAfzP4YFi8ztPf5e",
  "key14": "534PRy9k4ZSkjHFW1GjCcyft2tPNZDrxb2GytzjvokxTdiU7df2EAM3cpYKeb1g3fLJSXQdtJS87ckQAu4MDKHZa",
  "key15": "55GF6nrfxcsz7erCLRHXkbJDwAn52sNK89p7qP8kp9hu7RyvaBXgM7GPJMkn315UPR2HwtkSLyjYdZXbqtjBXyba",
  "key16": "5cWJqEQ2GbQTepTm9ftby8R5zJ5PXBkbPtaLNFLiVH9ARshZWZCLcAv3spTHeRmyeZ9x5Z1hKxGakegCk326Lv8n",
  "key17": "3vtnU247gSgtuqcod59XdGKKxTMuJ5Wr5ArDqi9i2XZERMXLBnWX2So9uzap26EKXQ4DR6tGWwv8fmYfspCuVEmn",
  "key18": "2Sp4RQFwTjqiiSz8fVu9Js5t49w3gK8ZAf2nx5Wzrk2YrWGg8UxYvniQFS7NDr152BTeLRtwF5zEEh4YAago4G6M",
  "key19": "35rCPjx4c5fwyWzhQa7mHHPU6iMo3w2kJdTjRzjgUnH18RU3KbySpXLoXAP2hQssTbbECsU9kfV4Zpu4URigeWzK",
  "key20": "4cb6h7KwU7ksBPmDMbL9qr11DCE2UWoyoGU4o73dMHdCFCAKwBrWxUv9ZdaupaXF7TmvWFQ2U54J1WDH855ADJhw",
  "key21": "2BbQ7NqwuzcWfRQ759sv9wv5BCpvfdc3D3F6ppDn7ssfbtLewV71M3uNpEnXiHc2CMyCaVC35NyQA6SFTmARvcL5",
  "key22": "5dtdYNMwG3VjSwrmyxkHB8tbcV7ex7LSLn4sqKsNrpj6gzmizZFNjJPMnr4u89Pzf4uQoQdpPfia7DMynvJp45ed",
  "key23": "42CC9fGR6twBWBsUDVMHF8cB6jFAf5Z7sKZ7j8F1ZCDVUKTyxnNkDdfMtVFfk9p8epBBCVBYzfTUVjyBifsohZ7u",
  "key24": "KcgUn4tNoTNg545NfBR65Tcgq1a5f4hSyZ8Pb3GVrEJyAhEdjo11XKusxSdvy7Gbscg9ZHo1EGRQuS6Pb16gLeC",
  "key25": "5E5YTVCxXD8zApCR5xZXy9msMX5ZCPfGKQJs4SwJDCZEYK5kbJWzamn4XxfNLQaCQDQk2LYVfDQFK3HxLdCtqp25",
  "key26": "5ZqsX1s7hQK7uySVJQ4CS9imNPGcBvD6YFk4EN2cBm1qzMTHkAxq5fjYTysgLoigZya3Xe8DiQjEa3911avGBb7H",
  "key27": "Qb4PELLiy1ozdQfSK4Ug8yNK2fg8RYLfxiHWVufgCkUzeZbs2mkf6qpdCANeEqkgcrNtcrziQ8UcnmmJJENEAxN",
  "key28": "4k2mX5Kq95rRX5TBYPtT86AbbPze6U4BkA22R9SRg7LyGSj3vLRicMgSWMESytR3m2Nv1jrpRUR5fGGfWfL4PqJZ",
  "key29": "3XcTP4FptTe8W1ZD4mAgMANTm3UVFkwHqZcK36vtnVtYszHUDJR3ieg9VhghNbpxx6E1x18MoJ3anNaAQEGh1Zfc",
  "key30": "61xSB6eyT12NyKo5YCN2ihijuUkevDrH8XZbN6ZggFU71SWFV7GFtWVz7B21ZuVe54XTSr56N5Uct186Q6Tfu6i7",
  "key31": "2QdaZTGnMYU1tTZMuNbYYtZCfa5Qi5nGio6CqiqyVXBen6uJi1nad9aE89QcSEBVAK7q7acUQ4duaq6JJn3BEcAo",
  "key32": "286DC6UKoaasVnP1LKPmpdkPmcBW8T1ETgdZTpGei4h4ZpRM9nqFE9JLx7AjXUuuUEQbX8fTbhRxGHCq1W6CTQfE",
  "key33": "4R9pzKH8gAo3XDMvTEG9Hy5cTQRQDpttCsA81jdjhWt3pfdjDRsBKMC12JGVNB677yu2Vzy33HcmPPXQmkaUjdKK",
  "key34": "io7sqytM79UV2V2Ee2Tv8x4ayXPEQPC2ra2RdPkGE7WSco6zj3fJ69n8tkYHXAtjtEL7mQkMT224TTNiXN4MnnM",
  "key35": "2MqZXA1QJPhAMFYhfxRG352hJLMENycoxZFRxGzBV7UFX4dEGgnR2yhjhi4RuqbAaHR4CvgVxuWzrXsbjba5aDaS",
  "key36": "2SFARKhXKWqV3tKXJVXGoToWMqX1qMEv8b8hc3DYNUmECgLJwcckJtHJDuAXwPzasx1c3EvAovDnooyecSiUQtiv",
  "key37": "CXTUYXV4t5svCcNF1ewMoGgsNgXRsp8kscDAUjciB5asLnMfhAheEMz66259zUrMXbxC9eyJ42nmiC7gWdkpcN1",
  "key38": "2Eoj7Hmg7QXGeY1C2epm1Dex7TNe8V5H2bG8XBqaUVRrdjmoXPAUiDGxK44wFgiAVaBuv1TMrFZLUgfbjiKs26S8",
  "key39": "2YJHTMmBwVbT41nvkyCTdgxd2VCfiJLXg7mRhvaah4gAbiCLziTNevDSopNwwXfTBbB3gv5YotUJvfPVoU8UhoBa",
  "key40": "3C3QNmWDiQJhH6ZruBxFZwvJuueTMcaFSN5Gn7LFjkGZsPmh5jXhbe2tcLEoES6eJm9RntkkiaojQGx2rc3iUQk1",
  "key41": "5fYB5WKoj2F9uzKUTu9KcyHo8ki3NJRY7ZqaN45vj7LGDWfi5he3Sg4c7MC85CrxjGC6Ah4TNESaorjGaM5Uo1tK",
  "key42": "4yCmrf3DpP5KpprTqd7dHU9dEcmFvv6WFroX9JNmqSXqimPA1hcnbV5w7q2uAzjipBobybfLN6bGVYZP754fnigP",
  "key43": "2QDdpch4iNs8tsQEYxEKTKaaTrUEB4uo1WUVPWyEr88hukWUW8sB2SuBGP1yRwfZsqxGuV8qo3EA6xidWLuzzvWc",
  "key44": "5BYAf3N8aA1JkeqnxhFp8tA48iBAafo3TcTYSbX5EUdYPrR2cNpzbQKDcCvwkbKjeaTDyRxDrt3amjShwmZA8bYA",
  "key45": "5UvR3Sw3Lcz7t3Z7i6XMLvrpaSRjzXecKN8oCZVeRGM4GpEtqGa7oE9koPkcsMJFz92J1hHq9X92UtiLb7PP5xAL"
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
