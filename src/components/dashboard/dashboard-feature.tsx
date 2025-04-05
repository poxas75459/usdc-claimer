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
    "5r4c94cW7DK4SksjjRYGj8pW3oMXfgKMc87YgiAHtBtWQhqRzY2A9Ga1yCtPnrb2sHXqRLRmmnpqayT2y9GdkMMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipMwypRWi2zKtJdJNdoKu5PXHbAV3JwNXNqWhw3qGTXaWEzVXu4yPpQTTWdeCRwh1983k9xkwEnU3nqCZe8xYXb",
  "key1": "2EFC1F7nQNSCVwL4jjiZC7GJt38QV6PD5FKu2zVWzQLHgNYiqcU1VHGhDNupkh3mmUaHTn5ibxEwuo1VcmbafPpB",
  "key2": "3xcjfQ3kBuQAdxQuLyuMTZGyjqv6ejUkv52uUfHty77stt9J3WA45bRNCbPq4di1ioJJKcvWZWbVMRZBRrcsd8kb",
  "key3": "5pGmX7nabLNmrzwqft7nKpPS8iDv3GAVWMEkbvjY4HKkbJPP9P6ZKC7eoKmm4isqNAL4MbnK8hrRSJkWnTR2w7Qy",
  "key4": "2KocJYV8mJKaoxufSX7pyJdoKDT1f7EBeQyWkC16jsuS5BjmrmuHpdM51vHWwqQ7VVccd9UCuNLwpwbWAQxDa9Wv",
  "key5": "UKtFoqvSLtL9PsdkvQfGL5SyEAbZowsd5gYh3mxWTmHG1AwdYA1EfnJbrEf8huufdaeAifAxHoGkpafgMehwXP5",
  "key6": "cajH9Zy4Tkn12GoEk6zGHZYrg57iUZrezhPNcfNwZF9XRRhdhGDNsBN8mtDAbY59YLNkvTeSqXc7nBAsvWEWYuo",
  "key7": "3ctYFzMc1WFr4jWvzwPd8cL78kvABhEuYVLyy5iAXZVruLRWrJFQnZE91vb6wbkmpdL1qRgBWED8quSZ4efejDQX",
  "key8": "26uHd2E3RXmbcCW8f525MgLGxdcSdvTdvj2TwRmLSSBxxtQsSf3Su3Lyp5QoAop3HPL3GXCR76fPpUVeQUNaWB4c",
  "key9": "43nMidqofcPri6UAgnhEDojgC2Dm7w56LWfnaLnEqN4icZMqrg3Z4Ve5ay4Cxp1Q9fa3esQ1uzXfy5UA3tj2ZMz",
  "key10": "265sEDTJYUK2P9t9FziBAjSo238LEUdvCWQvuB2E3nSijxcLVbve7w1f871WHGeWwD26aPX5BK9ZW2W1DsgnjtSy",
  "key11": "3CnVdfYu3A91VXCcHbJi3mKej5aMjjpXMzgUUqkFEx5CJSexTo3euAvWsgbsKFzqkatfjovuyAR2SFdjsTvehfsu",
  "key12": "5tP3f7g3RnmZpzemmQEiUJ7PahdqbCoixyTENHjePwUqgfFLMLPr1FGnrTHHh3tJonTJ9xAMvFSBLzEUpHuzUi5b",
  "key13": "4F6NDvrX5wUFCCk33kfrhpzUtSPGrYxorw2zTmPDbi7RvjiDvi8FK5sfHJ8V8bYBmGCPqphFSXs1xPsj6yVpJPGd",
  "key14": "4bfnEfKz5GrESfuxsS7qhW2WiUn3icyU2FwqqkWpBrwwubYVbqKZmSfFp7vjJb6NEwXxFuGaqEqp5qJuKXr62C48",
  "key15": "3jHQqYqLViFK2FuBkKPGhyopF8vH2wm7GZLcZPGGJc4i6eXv251P34uvUYLJ7ZTXNkfrbRE2W9MbrYYSZ1Ho5wRJ",
  "key16": "uWYokZV2jz6FqNz2RHkMKaXz2CUtUTH29r1WJKR7VXAH8VwJ1fnkrDtrFVKnYAqqmoaTDVLAMd3YT8e4uPm9Pwb",
  "key17": "3JwfSKgwAfSWe1FPPzNFoGmDgyV51wKiEDMUSV2iN4AYypt3vvvRMKM8xvbBMLDuCcGP1SXVyvtw4j9JUEADtm1j",
  "key18": "22kGSK9V2WtAg9ExHHUdtXzcU5e6B59YxjoeGoW3rq1q6e32XvAptQU3wFQ5gpudHWAqVt19gJBn5AgxLEpYofRS",
  "key19": "kyFcXtjBtw3uzRcKeV4a1gu8JaUTeatEuKsK7y8K4Sio8FsjT1cQtceNCyW6fNrFqgk3pKG8rcgr8bbW1CbMerU",
  "key20": "i995m5r6LwoFK4rL3yAYZNZogD2117esR2YRpHzgeAEpma7dCEDvxFi2Km8GQANaBcMA1sDDDqBZX3V5GYNReEr",
  "key21": "2aWPiLGA3XdwGL5PJCMx3Jueb3oU4cUKirgo6BQPXGrm1sTrxS4UCFiUMdJuNffR8WKdytqWSq5MQBVgwbUaYWu4",
  "key22": "2KxR4Jts6jkm9BPTtifLS7nWgfcgiVqj4KsGcVXWCE7XpDBYvDigZ5ktrRULFREEAuJ7i94owrUu3V8DohRpLjUQ",
  "key23": "65HvBsuCqwid6eQrka2S5KGmaDJs3xgYuFZB1u1WkXHvGBrWyGLjiwS17NNWAdkFVy5wp6ENNd9puhNMvqw2ChEd",
  "key24": "2kTjUrPzZ8z6TJmNexiJ9Fi27cgtsLN31CiWCR7UZJTaGRVNmuNYtrBn6AQyJwCrPvLxigoELuXDMEJ6oFbk9yp",
  "key25": "2335eXKZifFU3sYaH9KbnXcnXwPahpUpa5wMsUPwCmhUt8oAKHPSX5rcV2pCNtQrzy73XxThzyCKqy73k58uwXo6",
  "key26": "2kEtg6mM3ZpnkuLgw3hJkTquh8n8T3WZVUVbgnBzZAgw7fSPLUuYXTKpk5xStUGSHUezhQLYbFP5Bwt1jZqBUQzV",
  "key27": "p7A4vsagznugBc8ELuz3t99H6ZNKNAQPZPPXMKAXBrSJEgq4UoegjRuC3LGEu5dkCLwo2bL7kg9NkTzUcjpQxxt",
  "key28": "3gaajDuiFuELXLewjtkhQUW23kBE2oPGaxjQJwCZaKCjt94i9bYabQi426pVurgseQgnZsRhjjzpJfqhuoYD8mkt",
  "key29": "4ria5wK7jiKked9dFtheCCEKYm8CULX3YcxP8Ug6RtsSEXUp8GoSfMc4DHzb7Z8LtTruj1G85QP5uQz6Anij8VW6",
  "key30": "2dLWnQtHe3GtZViExMRdA4ipsVR3SiWAFyRvwZRhQz1QK1biA1JDyUxe5sKKkpHaYyuHErrDK1mNqdFGpDCa6ySS",
  "key31": "3LuZ4fPwknaf2V1fRPURgezVcgu7MEUxJYpNqWe9m3VeWJN8XBx45h7NkaxzEo3T8D96vHNAuzspqNT84wviNr6y",
  "key32": "33WfJ97dNhDLanTZ51KukoNr27pFLVwMiH7NH3CLKsapqDaU9WGbBvmDg2m2unegcn4uBVZyNYNfETuk21dyLC3S",
  "key33": "2wQM2tM9K5SUipkvunfiitjQrBmc3drRERtPJ7nLrfgaq4NNyRGwvqNXzpoKxdYuhkdYWy8NDNyTBA3WDfBhitgS",
  "key34": "2PMv3YVgFaDKiNgdBvBgszhMua2P7YqFgBBbKv3WC1RXTx6G4QDpTJD2nCRK3jDoNZYSgspgHT7wkMDvwdLHPYYt",
  "key35": "gNVzqCuy82TUML2TNJRVRSqncCR1D1qzUwmU9yBUVrHgtiGuy3cZN7dJKxwreigm6CSbkFDCjqrcCzanCgWNvXn",
  "key36": "5MjfedukrtWVM1vtCZJUMTh2xbFrNKRzzvHwtZV1wrikJ5m1rbwwsjcUEZpgMb97jePStRPfeYhYVMSija7E2JeU",
  "key37": "4aRyYbC4iPqAcSosGyZpGHz4NuTFNkKJbYfa259KYUosLk7J8FibtcvKboKdTDUeXsmmbwzjS59xUMHnkPBMbyKf",
  "key38": "WhJm2QkKVvcU2gXRs3nuNSQjdvTv4JgYwKEjNFoQrRoRPDc5Bn9q82Kf6GJ7DSTn31FNnoYaBd5fxt4vBx41MXo",
  "key39": "3xtSigzrTocuLxLvsBWYr7RoBNQxwnRQDoHYem21LGRvbwSPTFZj7ngGX4ArBeXGvWLSAsHcqnaxnBhk6LWaCJAT",
  "key40": "3JYGYHto3rWDgGMAFHf3wm7zrAhE9xNPxA7tNy4SvSTqzJ8UPcjRudxw2V9RzhERZTMHkf5jXUmZ9QBGLQF1kJ7X",
  "key41": "21PimHtY9LHJp3guPPpqz8G9vktmWEX22xn1kRHCwsAUgWZ2piid5qBaVHgZPJRrhDFNdqg6qAxnN2zhX7Fe8N9Q",
  "key42": "EchynJMA2srdSfXEvpaCjimgaZ1BQNSdh8KNt1swdDmq2eungUsq7375RM8yseAAXhiQCg4AwSqbTeYpteVAWim",
  "key43": "3rL1CEcc8wd6vfmYq4knRmvQDHcQXfquGfHJt7C2F5xWpsqz9sZgraSYGDoKzi9evT213EFRLjkTwfT448AbtQpS",
  "key44": "3J1EXC5k18aexriuYAusCwj4QTqAvYqLm5nh5662RkkrrjRWbih8Y7CNDgDqwcQRQMurM7vj41guiwKSNCVX8RMQ",
  "key45": "3SUWW3Q9AztnuAjgW6kRxSvNmpv2voz29AJeM6o6fDKSxLyZpy32VYRHdKfztpCj6xgoS8pPNvYm76D9gUtx7eey"
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
