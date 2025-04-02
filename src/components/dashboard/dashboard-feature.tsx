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
    "3f2hiJH9yXHjqqEj6fTsMsdFQC4Uo8ddWmp82BF6VodCQH7MHzRgj8XUsdGrdr5XgoPW35LdW2ek2vEsSZGCrU78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273YiTmFpJFKCrMAgG7iaaWCiWz2jvU8EfjWFhV9Yjhkfsz2WodivyuzR8UoYUU3K2YHV1dbcZNpgKv1oft5VQAB",
  "key1": "2fq5QXqJMswC9pWQ4qeow8g6PVToThfr4gs34YH9Kz4BB83YUw4v5oQkMfquDYZvRoiRxUo7HVW47F2QV2d5gGRa",
  "key2": "3JQ3xLkFTmUxSsxJXAWad6ydKhJPjLFkbQSJsLPLorPk6k73NnQjrUr7EKc1FCnjVKri9M6b9sG2B4v28QgDKDKX",
  "key3": "2LREHd7L878gJiwm6mK6YpYerFfBMuDTZjF1HFpRb4HBzfxH5YWVBVGe9ohAKHJbd1eSCFJaK8hP7Bon3DqAwnLf",
  "key4": "3aVD469KFyXouXCAoYhH1UtFQj4oq5fiHTCDdwfQVyWYZ6Ji6dPBivB6a8yu1euYxU5EMdpCeogdfm7XujoYHkVr",
  "key5": "2ysmsNu1BWYm1eGNXVEaBMsE4V99ESd78EnT5TzxkRHMrBsVX8NGKntQjiQi51nRJwdJtc7CPWH6MZ8NXfx2Xo4r",
  "key6": "LDCCvYYC8g49BRrMgriv5NsUzvpF6q1mb9PtVoYKdzz3wKpTVZ127prEcdmWMixbab6SBhPyVqFzve9ZWkPaaAG",
  "key7": "3pcrhKux5k7wnmrwn7c6oAsBGJPNYM6zztgVweqsNbgCq33Rr9JYhFdSdp4nCuU6oza5t3SAej3X2SS7Kvh4UDaM",
  "key8": "3WLxbs9urQi1Nn88SUL6geSpDPVnp3LPE3bzgwawXWzqQHb73DYqekMqj5CsmvTjoByW14sU4juQNn5E3iLu84yC",
  "key9": "rr5BPKho2bEUNnxvS2VxKsJsMbMpdw95bh8mobaKGYoswRNprLck5cCLzoJALBX19P3eCo7AYV4gxACa5B1ZM4m",
  "key10": "39tP6ZbbA8xNX5HRBBjNZfVRUDY7UmJitV5xvgzr6p7f4yRykbpD468PPgD3ovhfnD6qCVrc5dS5kTauQWc37DuQ",
  "key11": "YJTcfNQc8nTMEVLjVQi5Uk8ERzuQgzGqFjgEb5avmVEa2juJokReuTZ8FZKurSNeqM9UoaCGXGHfwLgTWQkX21c",
  "key12": "768fMfqzKavTKJgtnwXKXsJBg8kfAeLZAfUadwpb43sEbKA9HrNfQoPJyGBm3ck8iANpoPt5LZphThS2BJDo6Y6",
  "key13": "4d2VJV4ufvW1UHMmMQCqApYTz5R1tEKvd8buYmo8ZB11RmVZBs96KaJA7cqSyme9DhyZsagrXYNV3CwBpEDdn1BN",
  "key14": "3uZcU5a2tmkqZcPWTsWdq4tZ3WELRbiVPM19jxLXEHWt6fMcwiqAeMgDZDMnxCx7ibWYE3WF3kYoT6p5wWLCrSrf",
  "key15": "61wfjMwFYPic5PNPzyXieUzgRTdnA9wHqKzNxgpC6oUN9G6QL3bo8EjhZUdwD6sH3vDNPEc4UTYscepaZAPj8usa",
  "key16": "R4VR3Zx7h5wLjyvrJZadhHh5eUxar3qFnDdeuEmrDZtuvF1r2Zb4QsTsshWSsGt39KhhwyLCRDuMGXr8iBnMdUw",
  "key17": "XrgZryyoMtdtKRPR6tuCGTTKvGXRRrjPZNfSmHNhY3karkB9r9RG3Vs3S4gtNXXo6HYxvDTuC4NAVSoQSA6e9qG",
  "key18": "3odpgyaxbfraZoU2uyY2cxZacqrsgoM98z2ykSfwffGS8gAJWgiH6BfN1ihRaYn9WupDdtsYPT7MxC8RKTykRqez",
  "key19": "zuRCT29RDaSnhE9S86YfxaYvoG9AMEnP9ETsJun3ZHutxM3ogpju8WSRZQ1D6CPB2Jgm5hCBLWFkGbGzEZHEd8n",
  "key20": "58yKXsiSRK3HxQc4vwm6Y4wWTxcSAtKs41CLstRae1GyhbRTxfM2RxKBMK2MGnSeqHakTA6CTgHyKneRRnYMT3iK",
  "key21": "CNnMm26MwH7v2RUBUZUmSkg8i8SgtGK6imYjUhNpRuEK1HaeTMFss55u68F5aZTJM5YbNwBj1CVy4ieuB9cRTdX",
  "key22": "XcQrD3729PQENbGdvfqMJvAMxW4weJTkoHA4TxcctWyz2mLT2CWwQdaqzNzVqNJwDL5JeGKowutZH8NzaYKCqeE",
  "key23": "tAYvZaErfQ2FZcYsaZamXwnXSSs1uNbwCinMr9t2W3H9yfqKhVXpTTWLjd9V2sFm4NKzCDVdafuEnPGkADBdjzw",
  "key24": "nb52fZHh26sZ2WJStE61iipfPV83DVhVg6ahh2FRPEQgCSHxTgtYGSTBBqSChV5v1Gv4j2ri8qj6MsT7JKRvUbJ",
  "key25": "2jE9bChDb3yQCFPfZWXLwdePXR6AkawJD5qLuV2RVC2RCPUkzu6AbBi9SBaGVyCBcJru2N4WkyAPmP36ba2CHxR4",
  "key26": "65esVivn7GvCYaVGYg8hZ36CWB8GeNkUpypB4dntQ72ScWrVhv9MWs9Cg9t3bEjt3mhuW3V8mv3daXf9FB2KrJs1",
  "key27": "2f82kv9N3Pmy4cgi7trSJXb5FTAbkPePzjmPfoZaVKjh6Ttw2q4ZKtwvHUu4HnMkamjGVijGbRyuwXDzDqjpBE34",
  "key28": "vHifVfiMVWFz2TtAn3noepoxERYwP4zF6DWdhwCRF5enquo3iAR4yFMEUvwJXeZEdLXsSHme8GNZzjsf2EsFYJM",
  "key29": "gJMkjqEcEzYMHhu7SwqriKHJCRNQRwcXJKnycdTDWY1aK1gosKnvbfWcvmQV5FuAEEqpuP7wFgeTx3EJAGf7PrL",
  "key30": "2oJGduYLAVmhtH4VsvCq9em8mxXBwWuS4URZcS513K424tbGjZR8Q4ySpcwyczSUrW8efsNiFszMDfsaYBrCyWJe",
  "key31": "52qrizeEenFF1jKemeBe7ZibXcNPr1XB1TCJDZN9XoWqesATU5tov9mP1EkEmjnrC61v6kj62VZmCuNW6CZpMM4y",
  "key32": "4YC8cPDtwkWBnfYP8sDvmkvAHWeDemxa3eZ6jEEQUvzvzXRxaAuoKQPBgD5KdmVMQc52H84fgLFrgpgacyFjQamY",
  "key33": "2MHVyYPaBtVrKLZLgVT4HYrxuGA42gK3inQhYnZs75XnRNc4XVjWA2CisovT8LmePSdcyC71EarxJ2z45Z9PkJuP",
  "key34": "5fGNuxN2UCQEmQCavDrDqFm1rCUwD5sVpBaMs6tdWqzfJfUJQD1oPGQdkPG1EkNUpkb76GmsspLkYB9e29VxSaAo",
  "key35": "2emDrUpyerLHBwTFpbWQBVB51UCXzpQSzQ51zZXBT4ey5pDWMZJqpJddHVqwwhoW43x96kPD6vadh2RLjLgUHuL2",
  "key36": "2aahvi1sKkfYqBcu1vsik6dCjuBbHhm7MP57YPSRaKjepVDNwgMz4we8PHYS3TX24VfNJXAQ7WimpfXwJ8BTzmpb",
  "key37": "4LfWdUsa9QRKunwbNyyf7JPJHhHM8kby3w1gqurQ4eZhUGbGjtDo35FCjAe1acjnsAvD8MnKfseznwh1LFVEvbNX",
  "key38": "2rgwUcrCArfvAM2BrBFSj5rC3kLs4keTmonXZD2sE3VwxEKCHADgzJrP9BNFfupX6Us5vvAD23epFVZPT5gjkTCC",
  "key39": "2MUTAWQQGMUpctBeY22R8qfizkJdEVboLj4c6fZbko7QVWpummV42vD1suwfdszujwWDTsMHusB2Pcn76f2jbkdG",
  "key40": "38BXiufgKCjt7x1AVSJWKWi4M1eubSUWuRpxVbKebcGGrotwTX32CtmNpUTq2E3Twk8J6DyKoqWU6YK8t2qLETiC",
  "key41": "4vLbECjWnmCWbvWeGBVA21Tv9AFMBu8nsUfBrpVBP7Dwi73anewZir3vVs8L6YLB1pbWMwXhCTbgEgnD81BPthR4",
  "key42": "2Y33SG7FdrZB8Xg1BEDBQiJizxaYYe5ZjkG8dzRgZzsBeBSZxGnsCmMMiQDFaC8eij1955xKQc7B8gjVZbrYKWy6",
  "key43": "5QQDUCgvyqeLd4u1t39CaenJ447R9zAcwfHU24FNDsPAB7rweEuBBccDYbFBqBrYUijfmUGo2SvcZRNTf4aZb84M",
  "key44": "gwA4NmiGGyiWKMHqNpX9TaMReeNvmxz3kQPHYmk14ScHufEzBTzgtQMQoHBJCotY65XADV8gvUUqijmo56YYucv",
  "key45": "4DG5abYAvhKa4nbpHcCgC3dji9pSxDM3MYNDQSNJaWP52Z6tzKQLxbe5d1rRh8yGzev84R6GEpwE9G8KzWBKaaNK",
  "key46": "GtVemB1ttModCJctCTi9B6riiM1JBEsmkWTeK49hsvCdP8ExUdzCtAFnDkdAh92r6UBcwGp7BhtdmqoMRPN9oJu",
  "key47": "4JkGMAR1eZxcDdBd2iqt2Nkk3YxCAFXmbpuDsr95Uiynqx5XpANm9irJ1gRMa4wA5FHvWzJ7aWSRf9zbRqCF5Aqa",
  "key48": "2mxadFR2mbtiaLFLr2Vwxi1kxXLkFHcBvcUMhGvyADg57ziz6pZbKg3ge6QJjxPxkqqZ8zXyp2SC4ZCAjmr8ExoH",
  "key49": "oY1WA4wt76PH4tDbHEWht3jaYSEt43Asohk3wQq91k483hk1oJAaqSVkAxrtKZGUBJdoAkoxZPvuqt5JkdkZgce"
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
