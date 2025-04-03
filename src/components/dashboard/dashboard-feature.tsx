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
    "2Csg36HzggFzMMMDSD18G5hGEyabUrAdZSzGrJTEXSyo7viSxgRFzGCSJtgHCtqLuDdwhjqN6sFYFxXPRMAo9GiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJkSbF8e8iVu24zB9xQC2xUsi1RqV7cJZtxP7XmHHHA1otqpxqh18Tg2pG9kXRbdrrHZSUiBWsWG47qSfn82McF",
  "key1": "3e5Xaf1vBuYyVBLsrNPnrqLZTuYngKXymPTnJBBdRricUoCt3FbMyeHoFqRYc28J2Nn4ubyd26cM9uYGxPpjen96",
  "key2": "5TohzGiJf1ksmZJpVWVPekP5BNwGaZSv8Q95GwCNPxB5zLe3YE7BHd1BwmDwRoeietZ9d7qiERdYAmT1D7NnMwbN",
  "key3": "5jYZBAodHzjpu2kboHGGTnpZg2LV8sXDAvkud8oYtg76K3L57zM67TcHHsP2mqyhRTDMLPqE7RUgY9Vw19qqaosc",
  "key4": "5so8PB68jqyoMADoZsqwFxvyU9eRXSGgbJdRw2QjKGpuS4y2rd6rjvtK4rjLSbn4789QBRSTYha1jhVDYV8C6dJy",
  "key5": "4deUV6G4Pmde4SQ8UJsdJoRwJdmtjqrbgFQcZzYXamJg6A4xfvKbqRpngheZTNS8QAVJhUphP28Rwh83novgbtso",
  "key6": "RgmaJg4tRJRSSyTB6ctHZTxTYNqhPP75g4s8pY7L78F7tV87zHyX47R5vUt1eUvd3F8a7LajVW2y2sfaHt1ksg5",
  "key7": "yhi7TreH7VeFtdq9ZytwmNTa4XzHjgZZ79kyRZ8yzxs4GqdjRhVEFp8mntWgMb6CZ5qGwK6L8ZgTvLXESBbNo71",
  "key8": "3eb7nxJtc8FTDzsX42StAmCBNQXwzsfncGs34ZYcjbFMZ7sxm6Q4JzvekuGAuqf752EjpzmsEEd5vwF7tBv2bJ9h",
  "key9": "2SRTS7PhD7gwYG9AnjXqJmcb1wTCXivvvPSiGNjrSowjdt8zzCEqzEU5R8WsMCbh2swidPDXHdrHRq1Zc9GtYso8",
  "key10": "46WhjCXwSEBt58zVL5us7CHgvkwCtc5V9DZ89tzi53zU1Soh6hxA5B9Q1HYsoP4p7JUatS8DD4CxnZxSmXLkuFF8",
  "key11": "4LR2kwo25zLPJjtsWjn9ZSMbUCFhNJUmCu1NgdDvf26dryGQsERpFGJHoCePvs94AL6bCpx3Y7ZFhr2i35rhm8sM",
  "key12": "kjVbbhLqE2h7oSsa3T5oG78k7xxmij1ict6ueFRHZg6qU4ANsoKEAScsHViUPLLtEWiB5EKNybr5jGK3iW6REyW",
  "key13": "5TfUMStpW4rw31oFEM3Bf4cC1DtV6t4V3uNnyZGQkfj3hbGcapK1oLTd8TWLCvja5x2XrHMxX33ppAURQAmJXUR7",
  "key14": "3GPurH2wTJQw3JjdEDpu6HhneBLDMCh21PMqKuCNdQafUFEHdQJVxtEcX6LJykq9wS2T7z6fd1c9xkgKs694ZgMV",
  "key15": "4UTz32CoNfzejdrtks3C1uuHYk5f19KhYwSiJrQHmCqxKPRUK211X4YC81ce5b8UmrZEyWYqhSDN4FB6VhaVL9K2",
  "key16": "og5wiE327GwyHvRenZdmk62iz6e77RYL5rvBrRwB2gVgYVYFoEykXQHvfqM5BJmcCL7i5o4LZyaAqSJaDvvAj6P",
  "key17": "5U1Laf35nT2aar5x5XDuZGDAxjLUumrFjKnyReHoLNmGuEvs9nhXTiydwSPT4VtNnJhwFN5DbPaNr7ap2srUbqcr",
  "key18": "2Zc6SJ32NLTMLsXgLvtB5cSuCHs9yhkpqb7BNmuQXWzw2KYUSguAb1sNSjinsNDb6NhoeSrbGgoj7xPYjFneVmxr",
  "key19": "5aZybUHzvxLubwJa1zmHE5h1Fb2cxaiti6iWYoucbxj9MDUnqPd1sXYhDaM4bzQJ1sipp7w6S1BWHxGFgUFdEMCC",
  "key20": "3LpVbjTwzoSyDzHjCGRG57Z4Q7RdTzfjAh7TFsmqQvbAxtnnEtMpiuz7JadR5JRsxfpfgkzFxkwFNz4qz2fRKi3A",
  "key21": "4y25LQSp6nvrrrpJoWrndWAnxLXNr3VN3wcWCHpxJmgFFWqtCQYiGS6eRsa1a1udp6rYvt8UG5dxRRVb3ReK7wEx",
  "key22": "5DHfGTA3grTfDTCoUXfKxsokjvxiEhaL92daoFSpjNFvngmU5vChRQt2jmG2ku9RARLufcQvpX7TTSiDzutYHu4F",
  "key23": "uBRdoMt8F9rPtMb458V7D1xVrZXZRMRH3Lxi7i6QE2tvAiGZPF26mzsBAKUjH6HSghC6Ct3tKNYFRTmnrAMz9Zp",
  "key24": "41CH1pGnP3A5HRLer1QR1CoCt5irprcwp5JF87vVUz1U4gyrMPiRx4wCv84dR4vSpej4LRP9naVzt8fjegL9rZSF",
  "key25": "4JnPuEsVEVvFg7M7yYY6nE435bLnJMx97gNSb527XtpRDvRrTgja4sqFxtaRYr5eG6xJENAm65qn8b3BPjFD287b",
  "key26": "2iqMCvbX2qvf9wS8aqKeFgjHju2iS1fuLYs7nASvBkjeDNkVRLEPqyWxHfayStPEtJFVCm6CoYJEKQhFhb1gJqzD",
  "key27": "5HyMuJvr6WkVb1Qw6LYWteiYRtpr2nmfHwmB3tibKyq7iuAXd7xCgeWDKM7t8qpDeEWY98quSBj3matTxNQyffDz",
  "key28": "3gxh9ttB51dMd7it3nV325tYBtrvficVMK7CWxnWtAKi8uYQdBc3Fxz7ePpBReGqKuxtKAT19ft96ubwtBT6zR21",
  "key29": "4befrezpPr7XVPqQsPEYXJw96kaMkpDJNUhawqXMAwpQGmXTBmKuAbDuiQiqP8faNPqpH7UzkL4zn2cY42sJmRnM",
  "key30": "75unVdjZPnkLhpmKEPmti97hhvJ7CwALM7ygv4urhEqd8hzPqpgrhy9AZDww44A1pFzK3xadSuVCxnHe8Y7bS5Q",
  "key31": "3zw686VAar6LXv3P7ctkpsEp1sX2diG6GdvQJ8LHYKGgm8KmDGh9L1oDb1q34wsuYZrUNZBbchF38kYKGJWLk9yM",
  "key32": "qppGXU8eYZExdZP4QWFygrXntx8GeMubooSr11joaRigxZwP8bEApDrsswEw2e2uHzWGyhPu1vfd1tKBJ2Bb9MU",
  "key33": "3YNrquxx2LjSYU2EUkHYGWsXc748LAQdknCatcjcdr3ZmsbnAu7hsbiy81Y8wbv7JACNHnbvNLdEXy3nq1Qsqmmz",
  "key34": "5A7MZwXPhyBPxsKFWQphfhapyoRYpAN1BfPdbLY9UQsuNiuMAaTuE5RwvpKwNiYbWX2DF26TsbYeSxD9KwXGmRsa",
  "key35": "2gfZFKFPp1fURWAG2jkVNSxvQQheXW9PUdmgrvXcAWx2z1PD7joiQzo73pdb1XJNviVGQ6T3NvPKpXJxLemD48ax",
  "key36": "4ydhWcT9wuBkjLvS2KQUiB1HWd1L1m6mwPNTpARwe6eXUxKPtzMtMLPuYhEzVcXXT29o9dPYU8zX3jBs5MzT1uzp",
  "key37": "5bNPYnSpWfjn9Yp951bTxCdK2XRCUtiuPfuYWvw4ARr7o9vXfjDhm8ThcWgQPPpZxrh9vVkPMhMEiLwjo7jMPpHG",
  "key38": "3NjnzeQSxsvLqJ9Hjh1aPwmh9uTDGZYBL7PmhfsqEKMWH4sWqyytxYyincUfdhe9LL88iATyN8dhghGadFrKL1sF"
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
