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
    "3x7S62J1qxJ18mr3861a8A24NGe7d3NwsZRzujHUWBNGoQjgDvZrmMGYqgz8ziEsZ7ptswkwGWQwA7mycBdTRrCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCWQJW2mwgzc3bEGxdifgUV6PitKunM8eYwr7x5i9Kzfvme545Yhtd6YmxoWywKAN25zsEAm34LKceJ2Supm5y1",
  "key1": "qLM47KB2QfeZBKH6REexS8kh9hQ24KmjyKcxzeb2TvB9pQtbouAqyyVeSyrmizxDaQWeosSGyhWarBnw2TXkhiG",
  "key2": "5pW1Au9Q1RsWzbhWZDCogi1gvoHPv3X93m8ZuL392RD7qhXqBkaRGRo5NGdSQbEr4eGKTicrsnosp6XPmCVDeStB",
  "key3": "Cn76ug6kwmCyKAhVbqpy8gDV7fwWUDuadvg3KDqXyhmRm3BTi4cx1YVcBGUhB2Pf3EvoTvfZAtTP5FtJeJHdDFN",
  "key4": "5M6LMauF7gMcViuy3H7uNjuYPZ3bK5EQj6stpwVq71LkZoGsEhjuTj58RLoADYgPXRQR9HHEzhWzCjFYwcs4z8ic",
  "key5": "3BqHgpYPRY9ffeCTYEtp9Kwh2mAXycaooUehrVbj3hUyEnv63jfh3A97xPGVVn4JsQFt81pAdFgN8MLad7iaU9ao",
  "key6": "28cGR3Zu5nd9Mf2dmHHGSGFVd41yRnPcaCJWPxXGnnrFC31XZRaohJW6yfCrKKS8muPa4RjPoEYsap7U1XasZufj",
  "key7": "XLY7sVw96jRJWRdB2tUpttyyHdxZpcz4HL9H3Wq3dgUUQtuYcC54dW1CNf65r3ze8YP5bZRnycwg976FFvC5EAX",
  "key8": "2rFwGfCtdD49MQasDeABYNeZf9hVr8fP7164rBvgiW1b6wmnan4PfvJWoKSmYy8iu9MoD5zJptTZtoqhopPMC8Si",
  "key9": "5uf5tWBaP7wshpK6gus1saKB8tKUk6omDD2fjNT9CQNMAipLcRRw5Pib7GQWiw3Bma1PkYo7QsgZpVtv6JPQsZWa",
  "key10": "3aDbX57DEiwupsdXmgo4wknxPWivYT6LvCfvQwQnrJxTYoNLh93QP6S7hGu2p6nDKtPuVxcBPFk7SoVhDoH9msms",
  "key11": "5stp4cithMysJ1XTryaFUYSur6SqSqtG3jsdYoCZpfdr8F439eq1UNRXohR8eJPeT6XPqpT1Nq2cck24mypgjwAz",
  "key12": "p94FjiLDT2ApribGP4NcXFiGytVaQzAEuiHrqiyp4EMCx9ktKuQjpkc2daaAMxzaPXmBEFeGcaCXx3ZcoqLX7Bd",
  "key13": "55QdQcwycXRvgQJ76BRpmh6Lydg8yckqBiDLtT6UF3BQ1r8N6pVG3nVrs2cbszhGnvGxLBb6Xrx8heBMcu9PgjfZ",
  "key14": "2LJz8r9mr2a1RjxsEu9VAu3BAzbWSSV82nMjMvLDoNAmdDqdU35Airjdiwy6RHSZgQuGffPMdcCQS331DzvFnY3L",
  "key15": "4xWRZpAZEEv2g16dyZQshVhsKkv2Y3AwBkF6f8w5ShNC41qGymuvmUcumEn2k7mLM2oCbTvdhdQ7b6fuxXgMDHPd",
  "key16": "5qhGT3yjuoTSJTj4XTSjFbhtTwsQRzr9Gn1N6K1mxdGeyTEqrdfM8wNHRFStG9nUZmXz3UNVkvpzPTXuoNb4cHuV",
  "key17": "4VCiDDttQGUPuW51x7raPMtG4tkZKDJEXy9ELYEymxwotGjvzexrHpJ4EEKcjyKsZJdttvyyhFbxgCgPfG7jVFzA",
  "key18": "4yZZqub5EkSVQXVNYUAsK1PCFrSWRVfm4Cbjf1MXGQ8NuX9VG3QH5TmANVQY57rQAxuG2i9GgybbDwJqfiHrqzQ4",
  "key19": "G81USMmc4Ned2WRJXRgDF9arVcZ3czQpSMR8am3KyrycuqsS6wsBCtdze6pwHAejcgdrT7UEfaToBQzahA9hghJ",
  "key20": "QkRAMMYR21Yt3JzCcDkekp5wpdX573kLKcvFH4WzTYbJphL4As2n7iPKsMpNcm4JhyPQbburXSUeeZi3m49Z7zg",
  "key21": "3bD3XDsFpnhayGwSt8VHAhuPEHoUExq9jKMEGBDaoJTCLzY5oKpU8gTnRy8HDKtso5qVfUitb1LNdXophpEHhcBN",
  "key22": "2ub4YbvCDC9q4a9qYyYLUnJuP5Pro2f21ziYRsz5TTwVRkJQ8P8MMLU9AYUWQCNyn7UpS3offEHc4UXPcCiQ83Gu",
  "key23": "37kDkvxvEhBxeXLqeYdDTKLJmgAgY95VTpBxc15vKZ6GWnecp9MsuhoSKfwFueS7Sd2uc1JADPmtCvGuyTb42rUY",
  "key24": "3FabhYYQRxypJTG634yB6LyazkgVcDG9D2yJsy5pdXxjjpZzJXoogRM1jUdgcFtyMqeAE1dKe3V3PPUMuqufq3qz",
  "key25": "vz7jWXon4K1Vz5BgC3BEqnAvzmaoNFv8t886wpesjwwJHczUyNRD1UQWm4fKTKcTHAyByTkvfG9696zu56srV7S",
  "key26": "4mHtCJKaRSWLWbbH6Ko7jK7mTdhhMsbF29xr74vp77bkZKm7Pg1trFDGVQg15mvFBiYLB7cNxCJrzEUYjzGRHqTP",
  "key27": "5ipNGuFQ4qyszQ2ikDnh8BUvHjyX3qSxfczz35FVRTCNh1prdU9YzmS38Cgsoda9Uf7q6VSTxko5eSWVW5Pci9S2",
  "key28": "27fD5uaEAgCQd3WkdTkNCzX7Ahd47WLYbJFGb2cRu1TgVSpLoaorUpAoJasVZ7rm86WBB5hsCkLtG6v1sdsH2SHW",
  "key29": "2JgFR3ahx5BySgBRqH7bGAcmmfmHLBcqkMK1mrTTAo7BWDjPPfCfsEDPreEiM49xm89TWv1B6GqUxKRNEPbPpqaA",
  "key30": "4hTfKgwfauAMNZ8Qxj84onpWRmP9Dmp5TEHt9jSAo47gvWm8qdphnSbeD22TrYsdDfSdGqudSLTX7G5QnkR4P3Aq",
  "key31": "5rzHG3RLaM8E4rCRPb1UUfSHW6VJiNHgaqNP6nN8hMhCqYyV8VL3uSifnk49dMqftZMXTsqGVVtaQntyE2T81mYm",
  "key32": "gFwLxvJ3W2rXGJnmTxudBFm8yDDUv7Q1wduFjncXuiECvs2VqGuy8DdkDF4LgakXPna6gDhR3LWy4BFGLHbqwqe",
  "key33": "4cG6dU5Ten4NigT1N3MyFRbrAm9dXhUkUmPQWdkeYEknmbsVtZKigMBv9E4chuMbvw3f1tpaHySe6RQtwcUfzhJ",
  "key34": "3K2C3NhCQ1mL8PqdKs1mvRspietXAm1QaZu7RXwpA8sBrqX6m5XmL39fveUG6cQoUuQCS8ZsAv5Rm56VqHofDUMu",
  "key35": "2Lp95kR5hHyrL44KLunpqYJf6AHWsrnVSMQUP21GLkXNkMWx1zjasLKq4DNsUoZx7xqevi8TJs3azBSKFmdVUZgt",
  "key36": "2SrE2cuXLN1AZ8rG1FjMF3qjxLvukdR1CQqqp1xCZv89pr6gagyKsqk8TBTAiJtzBpJvuhHSB74UB6Nnykc7Zka4",
  "key37": "4EViRNwWWra432YjXyXJs1TDRmvTW63XqA8Dx7LtboYjYgPYPxPEG8im78YfC317PwJ7KmnCze18Nps5puHFSFFZ",
  "key38": "ebPUQXstovxJv7kEj9kHVVTfyVXXwmCpd8VYHQndeMzpx7nsdjkbQwdMo2Whb8ae8xWCFNLWHeghK2P9hN4PR5n",
  "key39": "2LeCFFL716vm8xxhBVrpuNo3aowpvZebseqZMEDZBUmwZoitkbYeAj2KtDJFDU7Kx8AGe2ZgqZHMVeG727zD1GDi",
  "key40": "2PMWWv1yAna4FF9bKwvFfZdX49wKyBSyQT2GeSzbSrEJNZNY8NRv6s7c8NwEc8jj8y47hjaJmbAn8wiJTY6QfTFz",
  "key41": "afyjhvZSUTQ2PBT51hYWuXuPju3za68rEPmBPPVsYyN2eYn2cATytjsdxkZhKbkpmJTRcHWX2WT21hzvjxRyDav",
  "key42": "5npnhunHATH3WWNVqybS2ZhYq3abCjsfTzmB1GKgmKEWGJaHn5aYRRGHxLYpopHoJyh5Qr8ijt2kR7xCzMLU11qG",
  "key43": "xPhpmqrPFKT2Lng12ufVT6e2hBCAbCyALm4RkL6u48hxHvcSn85TyvRimnM5g77s87QTi3ZHbWF1fRhsjXKwW33",
  "key44": "4QRLNfCmLV44Mxp1BY4aboyAJxCg85yyRTrcvwwXiZ1pjDSqhULYywYw4LfkjUztSCEayEvxufotMDny6yX3guS8",
  "key45": "52Fzt1gauGg4SvKZmrwaQ7mvGA1d3XY9XPuzKUZMow5aQKX7LqGgFGpShWiZEmLSF37ZwbhuMrapKrNiuUCRwe7K",
  "key46": "5GioEkdQHEtjxCJGAXipvTaRNVgPA3t6N6AqUM3W5jMoF5P2iYsqwJ9wZj2oVhV78pnPCuyuZiWbaepCALN415cP",
  "key47": "NAC57YmzoTtskMoBph6CZsvwgB1dkyAUGNWT32pZVbUSwTvtWCcMBeXX9DaL1fsC6Gmv6FK8qyR2dMRk29AuqBV"
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
