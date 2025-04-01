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
    "5dquxXE5epPgAxKGb4E7ee4DSyShdyjJNVn4FWUSuuHSPcB9hgTmHU51kMjLGMfEgonCngapgNGyF1gXhQ86mFp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qL3XidZNjuzEkqjMtDcba1beVnJ32vxVTqxCwYoY3vsnQjLQACRJeLy4s9kW1vTfZUNqSkW3yqmLtDJy31etTA7",
  "key1": "2dMWSBL9VhRAsRDCNJnveqrkrsPowH6ZFLKAyHqffcP3cj1g8i3T5evY9SBdugkJQSDVejvU81zmLo2tKgbxr5n7",
  "key2": "7FtAngpk7bFdiDeVZMZPveQFYETgDfa2giRxgf3owwZSAiMnrqJWJe8VA848PGGNx9aXRWzo6Dchh5H4GZU1yhX",
  "key3": "66r1tSNGZLskqU87d4m8J48sb6vAtMY5Bfd5EErKGFWUmyJWi4dAeYvTgcWtpTTvvmqQZDQdmvoHtu421gX9BnKD",
  "key4": "5PsJy25aAfggbjh8GRRHRSB1sysrxvvGznBF7mimm7H1t651dB7CrzWY7LmMwM2FYWQfTNnwRRvYwFQroVbhkuHx",
  "key5": "2EZFca8nRQzLrMnxAPAaR2xiC6rgppqNvZWoWeWcTtrEhASjARFLjgheandR4CPFrP89SiVaHzTZ2r9dum3JAXoG",
  "key6": "2LqGkT6UohyPceR5QXcPGzgYr9WmqR4MJhKjzyEg3KyNAFM29A6s8ufoNWQT1LdzHmhmSktEMSkWJVKsAZTYRbLK",
  "key7": "3YxcAkjdB4erVFsSZivL3qAobgKoFpRaEwSvqHkx4UnZVeotBhWQcfLhfXW2KZQGZ1REqzy4G9tm2XoH2XzMFE6X",
  "key8": "oiX4zwHcJ11oEa19J3VzW4w7tNZvyxCGiLYW9MT6519w3jwqybR4iKgKBV8fXQeKZJtQkPVQkPGrhW79GQzGRub",
  "key9": "5qShwzinLX3dcpm9AU49XaKtR32YAG9JxNUXhdi5HZ2qXYALUqJ2Fgpyy48JLxHmN53XRawjAAJangj3W6aX4wUV",
  "key10": "vAVxtCgTWva7QFpFdNLyzDP34hRvUQHzKaSJk19kqBSRKy1bHc6Hx2qAqbSohw9xjoNZgkrP1W1uVEw1TRhrSii",
  "key11": "4detDPkqzsF1i6D5sGjTGEu4ZY9bzJcWwrTqWoNqAygAAfvueGZir2DTpi7gd5a5T8mHCqL1xYqY1AmEpPCjN32v",
  "key12": "FXCRyWy28ZYbU47B95fANUeLXbV141AvFxkQeYkmXTY4QdCt1cM8MtgHnxru6YVAeMHGUGSEbJJwKx2tb8MXRPd",
  "key13": "5gGsLpACGnpixUr9tJWmKTiA8JaWjxpJwCxLdPpaA87SeaNwCNuT777Q7x531AoUdX3e4fFb2Q9Fv3Qh7zTRMYg1",
  "key14": "Ki1iUesjUU11UewoukLs7wDkcuq2rmjLnJAqJK7Xy2aM4eRmg9s3ByH698YMXrzyhH9R5doCbKUPBSyVcxAbRjj",
  "key15": "9WwFYTXuhqmfKr5p2tYorXN3bbiR6kumUU6QfT941Uhf4W4CBrqaxqxtjACovgXzzdiL2rbWqhRUbU8V1CTpFtV",
  "key16": "5wszjbpEbJfpoNXbabWCyTcURfKouFUFqEen5dx64NWb5rdPoSaSejpVDrvvFDM9c8brHRjvDsAoo9Eiou2ex9Fp",
  "key17": "FibhuhotUY5jdG9xuTLuzPwGuWMBGbYEwda8Vo8n6hxnMiNAy7G4f2bRXhg14WbnGg2WdzFpDZT3nZf653vJmdj",
  "key18": "4QRKc7HgzpTvis67ByKN1jV1b6gu1Qrqm69tqW6Nj1om86PTcvpCefVeBAzvkDx31oyea2CNY94zW7i8ezLhc7tS",
  "key19": "26nZRGTSTi4Zg2YSVpmVGB7WMaESQkGzAcB4ZAbA9tCAhN9Xx1prEEjgqqEVs5cpt8w11RBsGwySzDkS1t8QaMey",
  "key20": "2NrgbTDhdh9kTSPPZdkQt2uXY2guaJakJMiZ7VmVph4B1dR5FS5tyzb4uoCU1FLke4yjTkt4rfWSM3nv66gGYjFZ",
  "key21": "37q8ZGN7ZdbSPGZ2qfa5CEytfbKM31ayuQCvTT42manCqYqGgiS5E7wqg6bozGaoJJDoyLhptJTp793oJsCuTh8",
  "key22": "zaE6iRxaE6EBPixiXQu4KJqfpEdVbKXR39KJ9fzYVUUcCpWikUxsxW9SoUBep3k8b1m8G5pHqyyXB28iVDi4L7j",
  "key23": "3yScACMfzrCpmcbKCRtK1tMZc5LgeCgkEdRDR3QY8J3UWPdqdynUMQAKx1DYgf4BrS6b7Sz3G3VRM8sNFEa35v39",
  "key24": "3H9Mwz8UZMg1AxY1wwDq3UbEyfRis5htXtJcBStzKWMNQX757ujU23YcNeyXPKPbtGNt1zwxPXWqPZwMyhq4sDbR",
  "key25": "2bbgy522drHcbWhxFFYjM4f1CZhPijLsPtxZTRfureF4b3pFLPbpPXsn1cDHj8siWgsb1N7EXQXbGv2bYpxFRA5q",
  "key26": "2qzaAB9hJzmCeeydmH4fkHKUm1a8JphFZfNZbL8rqcZRozjhnL1CBVR8p8A5WgwYmBQPNh2h2Ri6ZPacnsxh3Kg9",
  "key27": "vwGuQaCi8W2BmHwUcZh6HAUbnZtDCF7UFRu2LNMwKSJirmovqTaTg1DCYcKFgeGDDwxNDt1U5mYZ3SSkdntHzkb",
  "key28": "GvQiBgaM97FWEtrKd5iAPyexHEMkKR55N1fZG6mK4AhVZRudZSi58tP4rezQomC6w6CJr4fHyNg5iEXG8giVbnD",
  "key29": "4LpeZPxAPLAdNuADDHy9es4HUrcXduPqpVfFQXxYN4GU6phe129SBjAXfSYuKZC5fupwpsfbxXW8cZAoVNz5sk9E",
  "key30": "hUZKaKdoeSRir6p8acFVQSTi5CTcP7yAWv4xaWv8eBP81o1H3C48ucd4WwxxYhyGvB15EtgMCaSYCuzYJxh8cRb",
  "key31": "2ntELMAWpuMeGQbC7E5NmV6FR3b6aL9RsbXEXn8tubA2q6YfdMvpfN4zpCgHwigL9Ws58kbv14vo2APpkQTWQZiw",
  "key32": "3KmwLHXhedeSApAvzm6AAqC3j5U56DxoSdgS6BqvLeREbCvBJRvyfu5m75KhG9oUTMLgrz7WQJZVhzfY92fxLpyH",
  "key33": "2eeTMLmm4fgt8LwfvHS937FYBeq4nwrk5M2A4Ys1M3iqSBvBwXCpPDkCkLKiXpz8eCj6uKGbb1icmQEm4y97vqB",
  "key34": "49RpfUiVsnAxhxv2Rki2ybbr6VnXUsY758KTqj6MBmadwkNxDhJQcfWY2NGaBuH8R1HrVM7yx5ojCrrXEooxS7au",
  "key35": "5pJrfbMMP8QNJi7cxERousEgXcBs1FwUtUjv5RerPpcTZjC5Awv7DHWegPpFjpbBKKfdHCiNcdePcW3P4xxYHAua",
  "key36": "2Qgt4yifqpjx672Ywp8usZ8LAkR7GveLKGZxY2pEJsnK5MBGfPYSJxYjsuTXrDNzhiXGFwsCpzY3ifeKkFeVQgZ5",
  "key37": "tzr18tqGnCdYF39qRKXXWRUuMgyCVgyPXTJZvzAotGMZewhoBbgg7vZu2wdURHqrGxJkcoTyQLZVZEtqiLFaSzj",
  "key38": "61yMuc5Uysvrk4arBtk6gDNxv6r9fjTuqvXs8nosTy5ZPHiUbUU9RvMk1afsq8PtAPW5duwJebi2n7WAG17MqmRH",
  "key39": "3eZsWmzkZCuDiSmoK9NigevpAqgcarhKYEj4HwGFBFPTZAF5WaLF7kg7vy7ciBoX5V9FYf9mRorwvfUiXFgvboJ7",
  "key40": "5hAXD9FdbHntiyn4WDBu9kNLkfYpekoHhqsVbnU2DRKRuPTGGBdsEZzJWU9Ncgrr22Nndn9MdaMDPvPhzerv8sEK",
  "key41": "4GTqJUrSvEy4DtrWyzRa2aw7jL94E1v3MaoHNusVYPyXxfVRWpyBKEXo5MKyN6S6QiPoNxGFDjfTGzwiCGQsbXH2",
  "key42": "3ehGjGPSUaKci3gs8yVV681swMHazHChqtzidHuRD2xU1ToGmnFzR9vpKpVMZ2ft2yaLwQfmsC4t8xqpe6xRK3zP",
  "key43": "4n1Xhkmin4XLfR1MTcu66yZdrAnDQmTmzxc22x26ybNkHcWcACkxHqkssWpSRsDrzkHLZoGTFTfwacKq87eNPRxc",
  "key44": "nJ6ign4LGkSuN336KKzEYuxm2V3N1dxd9wNx36PTxVCekwXJPjiXgRtzTN97YcZRHQqrRYjo8CTRKuD8nLmUuNu",
  "key45": "5jo9VZ6Tedjc2oc2eLESeqhvzDsQdGwJnXjK4uiqrsNJWfWkBBisMBArUc3MXm5XXFWWypBrwSUt776uvav74Le1",
  "key46": "62oXon8r9oYjDPdmTzNuadVx65UemNbp8r3P5WuS8BfWBrmPkrUtdHMC9NjmSKZ3sinfMsLVdxznVt4QsZQNshvp"
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
