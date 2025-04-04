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
    "zKLPvmsTb29S88xs4zU1k6ACgnoJ1Fi9f6Z4nEjmGArZ3rJ8ZYAzsopTA2aNETHdk3HqV3a6Srrxb2xqByD3wP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ncSxhPF4sNqGB55MLXANwRnoPLGQ2ZX4z9yEmnYsKWU9C3FZbmdfXEcpr8DGDB5QejTvZJrjdwQvVSfRMC3c5vw",
  "key1": "2Re4S1hdWRzTC54fivFhBJNUSERfFmzewGQ1rrDd2jw3U91i6z5PVokDRqbizuk68XVkzBVsB9zBbutiTgMKtepd",
  "key2": "P9TwMEjRrXpgR1eYExjs551BJpacovczM6DxmsJddCqUy38mR3myY2h19mztysH4SYYxcoY133QBs4JvbP3woYb",
  "key3": "4qMdSpLVHy5UKzbonfUtSuEyEDNiqafPkBSfRuFECHfEhNsykheeztyKbAGjkr9fXhWRDC7XRtVsxnTy5N6ny6Qf",
  "key4": "1JLznNyupaK8DndvV2s2nDQnEPWeNR4D5dh1MbfB7Dak7y3ibL5GAVjTXqieP3qA68CgnQgmo3rSW6daPKYtSVJ",
  "key5": "2d1PePpt4dv1Yd5ThgXRseHWAei5MeBTPsRRZTRfR5s9zewSHDL5Beh5ZN3j2fmVjpzNrr8VuH4nMBywLnuK48mG",
  "key6": "62Q6x4V5VFDLUUTJkpwF4hRYfhd3frLDKntSmruAgpxNfrUnoTn9sD81oGjksgg1UWRiPzWcTjAdsr1uTfez6BXv",
  "key7": "4kBnovtV2WGjGkV1hohppHjDntzJ8564ssuSdmyVa7ANEhqmY35tkNAwAqjoaH6MaqUzdwhsriWtYSX6dBpemb8q",
  "key8": "aVrHPFMJpwNRtGgwiWusLECff3geL6yFu9uttQGNwDsCgRFhQpoR46GPGDbC1nrWobmGAmiphzL1qTvurq2AR21",
  "key9": "1FpK9hf6RcQhH6XAJb9hyJEuH3t2ot7V6Qb2Dqd3tMDPyY7h13gQtgbQH4HneQ8CUEc7ixT3frjov3Xu22sdy71",
  "key10": "4NPgKfc5Wr7sxFLwXqCntn1hwXjkqEzXQHQeUQ7hGaQXjqen83HKfXMDvvL381M2oGEmQTpx7gxF8HXD1bCUohhy",
  "key11": "BgDrfUvtLiJYgERnTvRuvs74PyixNkQc9E9WkMyWBHaD3K81CfgMxNx9JGux1dDLT8VCjXyHyT8gGPiuSpqyfvW",
  "key12": "5QFopegV8nbgYEuv3ysyXGWkq1Dx6FWuzMrnzDFVumtH9bAmg148Bf5ooh39TnHp4GF2rgNnxc7SPFBekNP6P9zD",
  "key13": "4ZNPZZ5sSsYRGG2x6MVFFbuigWvTLVvmp89rSdHu3YbS5fxU9sgkJr2KhD8X5yTYKExHjXUPmJMGLzEopTFGmXLD",
  "key14": "5Wd5FmS7xqefCPBNv5HbAqyesxWzFvMJFTT1suN4kcZjrC7s5vKKA6Q5FKgS4uHEurfwh6dWyHroXntP5C4bPgAH",
  "key15": "5wAtWUHUAT6FdKojZPUuoDwdKAkAQ3qsbk4Qr9pmdCtLfG2cNchQ56yHt48hECUj8p8DEuCkZKk58jktuSQp1Vtu",
  "key16": "4vzh8LcBQWikjUpWtifWsezgT6FrN7fEWgXZmRUvVDQmQHZAf8VxwMbmPK3v1ZxS3BAFeugq6Ng8WpJvemD2Rwtc",
  "key17": "3i9tafFFrk6sxerUCbrhFE4oAhfwum3vNUTmVUmQsh9refwCPjGt8JR79sVsoSYFVTMbPx9crjm111SqUcSEFwq3",
  "key18": "XWnjEpPkwJhBKWPHrt7HYzoEzrJ8JDNguCrSMWmbC9ZoqYQkWur8RzDKAf6MqtfUXcjnsAmk7j2TefK7FJNcRZa",
  "key19": "558yYeDGMUb79UThZuTi42Sn8AsPdj4veKC2z9YXdE25ZHe1yUTr8EvooBZ78yhDj1P9iCHufrw1oR7JfFqMJ5T9",
  "key20": "55CN5eicEcfP95iPSNVRR1hJMT2hFJmvUY3kUgXSCxYqereBAJcPJb4x9HJWxqXFq2awgufVLNLZrQNojzDx1sCX",
  "key21": "375TEZB2i2TZBezeZp72w3XnixhXwabKMz8xXsVFLcY9Tjtgc5bSX8mT5cm7JMrru1yADCpWVAPEUjvg5KT1UtkZ",
  "key22": "AEjLY3gTWPBFSQg3FibyKquVQ9XEFHynotqGrNc23GZD29uughC3ViJ6MDvmjim1fGxTZRjsZrAsqwAPfPHDvxt",
  "key23": "c8VbkC56yKvVXWvsa5kVj95SZuG85Fqe8B5sEW2F42ineCYv2pEr3o18wvE13RnPzW38qx1uvweJxPCQeheNqFB",
  "key24": "52waKzgjj8R9e1kxkvja6qWTss27a5mvn95hFhiHKMk6HKKwrfmLJSZayd1rmAnTZHvKLRCmkvHazx3nCcLoDVrv",
  "key25": "PkJ7ehP3Q4w1hdF7x2QyVLKH34wGV9RV8Pu3sjqZrxYYVQDHzWExFStkDkaTaRyuJmcxe72ESp8AhQhpg5MtBVB",
  "key26": "5jJ7G1cdV4MJFP1npotE88ZSA7UcF1z8uvr1XAXEXMUnPKPUvzidWLrY1XMtYy2ympLDPP5eT1oUmBog1Z1JK3jj",
  "key27": "4CKfGfNe9cxzUdXiibh53fXUL5N4yqjUEM9UNuSGGmqCcXdSpqBXwHzVXd8AMmCmf2EWWRsadAjzn8p4gTUeCtMd",
  "key28": "2xo4sGiHaXpSNEeZQjx6QSr2ZVZLNRNYrwA8qnxTzEa8G73Giq3CeAvB63HGWESdKNgUWYyDyPsKN6CnmjkiygHK",
  "key29": "fsVTCsSNqtUkEv8RJLkHP8Z5uibuZZvNHYUjkm7DQzpNxsWiCvk3BkhWstyQLTtZo16fSAz18X9Ur7mny7G1HWc",
  "key30": "3UsS1xW3MnvYXBj7EPMiPv1eYGNBzDrMKJGo7GbGn1CtDYHdwCTa171MSp4i3Vrm7CbQJaoSJUpx8ujfrqrF45hy",
  "key31": "4cwvWTLSKBd4dp2S3LEAZzUAZdnBTeiVjzEp5z8rQBs1F3za26EHnowFSivYdBK48eZgRnB59SRp4gaxvJ3oHRTE",
  "key32": "63oH7VHGnYhrL5HcMd7sFAvsp9yGJimSGhSVaFSZofwPsfT9DoYkiAWUuUjKgemNfDNmDNoSwWvZ1QGVmFo4W3BN",
  "key33": "3TAohVWaxYxxrcF4phaYRa5NpUDAJMw8DEaaKZjM1UsfY768uKjSXP1iJUwWhAHZo7aQgZaVRPbgxxYPLeiukXaS",
  "key34": "5AnDEjZYUkdSCqj7woRU1RYPvWHifj9HRHnnGENambQWC9sD1QCNwh7hi1tF7Nu2WFeqLy2qS76H9kW7iMxdTZ6Y",
  "key35": "cLYu4gh51CM1pBKxZdfHv3bNaAePDJZ9Jq3ZMW59GAxpygoPv8P9qzqU5fRQc3G6mj6wtpNQSJT2qT6T1VY9Wp4",
  "key36": "GfBrKbqNahmK2wqrmxHL7D95NTGBMP9Kuwe95n4HSjCx4B75d7co27q1uAUsRvDHiAkZjuMMLD7bpqTzGW4zCjN",
  "key37": "fPF7zcvDRZeAbxerhZBabYbmPpaKmpQkMfQoUaM151esb2cyh6Ct2ba9abfSNVTAx1qLoAsSwGpsTc5Y5SRCXYX",
  "key38": "2w5CoBovqHNhf72JbrSQLkfU5n4VVTyfZnR3g3wdtfKWtRviZTYrpttwR6sWQJCub5V5dcZmk6TGd2xtb2QEVzoV",
  "key39": "dnH35rofEW3TVfdcX73MA39XQShJLVFu4xUFdP4pd2HGd3umdEuUQDHdXKPNoUVC6qpNxNNgcEQjwqpgFr9QnvY",
  "key40": "4tqMVFbk2PDd3tgEv5DMCr28s9phmCAhXYbKL27GWQx42c5PUYTjsSA34dqc5e6RqM3WLzNEDB7bEzn26jJqXRfS"
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
