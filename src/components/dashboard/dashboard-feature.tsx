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
    "GVmvMLCZ7RHmzoRaCLQP72Myuy38HbJFoPPFwXaHQuT7WhUE8H598AZpm19GSsn8sEoHZsL7VHpMAM2AG8AjdHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJmomVaD4DnqXpjpDaqCEBxmJMTf5jv3gxxDFkANszwgiydFyBrEYiHsWUe3NegaDiH8g4owjgGH5Aed2MAMtkY",
  "key1": "4WKxavTFG11LJvYWURbB2REGPAb944AZTZrSr5YsCiVke3d1tZY3yW5UAxSmcNpM2xEYeg6ghk3ZHaSU5RgEDAfN",
  "key2": "H5S7chwGFzweHwfF7Tuv7Kv3j4egaJr1NCnnoN1od3xx1g4YVXXZT3QhbZK5AF9XH34qMvY4z2rHJadreUYaogB",
  "key3": "63VHAF3X6VTeTZsZdRb6sgSv8oFRxsLSGfELJZ7761sgtZBv3r4qq3Yf26t7HJ2FSnn2mcCeer5PQsKDNqGBszLQ",
  "key4": "4qv6fki18zGAkAzE2rXZfipybvVaKDTn9iR9Y6LvX88n1THZUexm5g2ovU7rKMQpE8UjAmnaQeTrJBDKyuHfu8J5",
  "key5": "4iJ7gFYF2E3rCA2WmazZSRjKaUgGr2dsnDx3S8fsXur6nbRKXFd3DXRBTDh8xMETtrzhXBcb677hwapZRW4ezXbd",
  "key6": "Gd7mFPFHm4GxwiKYkoaNyWnBV5w2PiyF3xRDxB3fHbcHX2wfiXQnJVTajXKiqGNX4HsykrAESohoDkaaPXhP3wb",
  "key7": "2ZRqimKKmmbZdth5Tjzcfk9dYNDKuR1zunTfxTXnPwT5GBUbh4iNosR69zQ4dUMbMuKcdwaCjHhSSFMc1vnoPJsd",
  "key8": "5sCv4c8zn9ZL2cdKsRSDpQ3YbefhsczJhXZpXCD6wJ8TUikyx3pXDyU2LWdpD5yTD1KJGVWW4YzvfrVddhfa9KsC",
  "key9": "4kCb8fBTg3ZmkNQQUhQyfyXREovkqGQLy3puBk63Sspm9VeEEqjipw7zVAUSZAEzbreKaG4Wsr3uGhgyYCHeTF81",
  "key10": "39sjfWRNHrtXmFLeoNE4ijWbZEEzJTTnpunVsu9y3q8EKkngjcdY4fS1NWmvmfTzDV6HQEXigVXtbNEZYGctcfZ3",
  "key11": "2CcqPu7PE3cE3UPQe7pRTRxJ47TqgVQimx5YLtHnVdE7Busjk8pdr39P3K16LaPLMPLv3oFqYwvyyD3fmYC12DZN",
  "key12": "eipSc4tA1ooTJsKELxckjFH1rkaMBRyVYZP41afsoUE3dSnWCwMedy7Qd27iVjHvLWRxkJ3w7phx1ZgTUJK11fe",
  "key13": "5kUu5xAsmUbjUs6p8GfKNug2em5gYGvN3jx8DQcAMoNrPMf5r2Szo51eF5dxuEGSDcwBMKP6fZfAFxa554cazxmN",
  "key14": "37FqkPgGAZzEz7Hj5UwKaxiTdmNyzWURJwe81XeBRrJRutLZuNqxVm789RnLNYK481wYmHKsGpAHH3V7EEJXsNZw",
  "key15": "59Dwxi1SkBPD8vMXmziGR9MeXH2xMdfKsBy12v4SrQiegE5oudReQ4RLcDUqcmR5RDNGGJp9XbHRWxfxh2fm35CF",
  "key16": "5EKDXL8zATLZmm7mxZMWs5wv6gC65rWCHGVvastN8CN3UWNoqhg9yTpQsi9rPCDEgP6zQV9eHc9Wy9QHViU58dmd",
  "key17": "4NuUKrqVL6csCosuVZVPBivv1mgtEi6b9FP15WgitCHfvGUxY7WCLYQYKCEwvU4YArQ96s6XDHbvrSy8gCsAKC8o",
  "key18": "2LkysUQ679KQyvMi5B5a7iHXKNeZomYfPYgVB84GaxxhEp4iqB7VnnnMGfSNZT25FSZEPo7ymbqZkKPkidP1sGC9",
  "key19": "2fd7K69PsGrVgQc86qaU6riiaUgovPQ9bp96BtysCDxrLcyCjcCe6ASJxS9yGmbNTCFvjtaYBTM3ZbgnwhxN7uqr",
  "key20": "5v4Sotn53D8rjLthn33focpy5iHF8ozrUqtWhep8BtvSxdqT8YM7kBb3MecXm91zpnhwApyAKKKSkGFKkV2mvZHU",
  "key21": "LHgDUVavtaBfcvceQZA9qh3rdSke6KwurLkK1caKsttNpkrMZ9HQqpFZabVyF43u74yKm4VdVUrVwEcoP6rFLCP",
  "key22": "5G5GDe43KAcSHZpS3eJ9T2NC4ogSuMQbAgCPnjok2rAsdCjafS7ZqPnSZS5dvtfbCstNf4kJ8ec67eNk6BWUbSsg",
  "key23": "3Rx45cz14e8ZnFPJhC7HcFw5wSjgqVNSWp4dazgTB2GC8wEWcaPGk6w8XQfg1Trz4FC8xSBZ6tKeFcDkKtZxpZjC",
  "key24": "iSNZVLtuVnN6EHw2RCfcFiRA7NEWLittbrP5X2KYBEyDWFNsREL5JQmBvgVgGDLtQk4WcfvCDifWBEdmuLy7XeD",
  "key25": "2MexCXRZhGxQjCUivMB8jkaoVXqVSKUxnV5A9bL3FL7g92WfREa7dGS6JRdAskYS5o2hKiPYT4BAbKjTc49ZUWh3",
  "key26": "46fPHHDLVRjwpgnxtbhRE6QT2N2grz2qFYCdF8u2crsuRdn7wcdSwC9cGvRyfK74iDc98mgTHX4RZbe86eicErHV",
  "key27": "3sbofr2GptCT158rjT88yDj61DqriQWqFPXkMvoFEskjgLTrpo4ZiD2VLbFNVDxYn3hKhngBRmyvbhvyHFMieHXG",
  "key28": "3ooJHVAzdVebJv1aSbHMFy1HTEB5Kt1yo6FH5ipi5821hvDNZWehvSm6j3EPUpqQvtuaJ3qCmcHSQygqb9VG5RAf",
  "key29": "2h6SG5mNrreyfpDfz51ykgwcHCS5LABZx1sVVMtmEQSWfk8egCSsipXmrDewK2PeNwWz29649AskHSXmY5xNaYtA",
  "key30": "64pqzcjCSBrPS8PyfEf2mLU4owidySk2ridmaWhtUsEYKynMqSZLvimki9a2ueRv7HxAypXT8Jr8YvbK38ghR1j6",
  "key31": "25bq9eqEciLQeDHv5j9CRfff9YoyPnTYhg5rYNRyvdR1SvUBmBmadu7aimRRnvyaz6MNpCZTgzD6KSCwvpQhw4AG",
  "key32": "42hT27bK8jfnTgWvf1fmxBj8SfU8Gc1E5sSzEnpyzBEvDx6Ggo7nmf9hNiphgGwxZ5vRux3HLtmrwwjpKcc1gmXo",
  "key33": "ijKm1nP5pqthpAj4NLofR8DDhekAAn5AML5iKvf78iB7FLQxxU9XXB84WrJGMAoQVWPAP3cgLp1zKgHWjXCQJMy",
  "key34": "3R4tc1Pi3R4Z3Y3AewWudaj9ive6j2NfiHDKRUozLDUdiiBtRpawyoDMJCfEFokxrfkYej2QBSnD1f8MsvfGSS4H",
  "key35": "4LbVd8JhG5EUxoCDUMGhuegBiMzTmqtr8g271gsFRLgYSPkgjr6hR7hoxVk2ETSLBAg2Xo77sux6uuTGHe5yijhi",
  "key36": "66rZYZ7RcKYjxoavnnXRf2GnKo643iQmyoianHhRyUwYz1qzgoVh6FgzYEucFYDbTsvrEDHydAFSot18zVJVzGj8",
  "key37": "2KuBAAwGFPsWK9UdVYakQZUoRvQWo1ycHaaNuDM3RLfFp14NkWRCRX5kKeCHLh9HY5vhKXX63pVnZGJZ8MKc99aC",
  "key38": "62Xb4W4MrWujqHHaW823xcm9nCGfS593awXw83duNJgAiUCz9ofzrq17dPQAjpFvRUFBAUZjdSgPEoXTxvs4ti6J",
  "key39": "2b6P9EtF3ND6RzUw7tyQxcgDtF8vWaycPnPWGQZpL2JccopH78kB7nHLgv8pojrNWraFSyJqkzt1fgzAuhmrbYEx",
  "key40": "4NdufqdQbhKgrzJwcMLgz3n84MqEQ5qaNEgSMh4KWFuJHxC26vG3PhmsNJgy9Y74GEXDSUpfJoZT899UD2TeJFAK",
  "key41": "32ZN8Gub4jiScd3udGb5xYnKj5HiJwM89YUXQz2TpPA49DHMDzSGLxcnZqBALxPR4PFM7oswtZhxUTs2npaF822A",
  "key42": "28doJ7vbipB4ScBH2kzGUDCE7LrWURXaemuQpmFtKwL8ZRFQVs9aQoMjbdi3RJ9PUJdYvL6g6JSgtH2U4fCK3MrP",
  "key43": "5J7VXmHAjoGRqqzhbUfPMr8tq4ofo1XpDLbtR5kRuMPMDepvqvnsbj2xh11UKNFN5pB6NEnDfd72o6YpgA96tgAZ",
  "key44": "T9U6eWj8MbNiwVKtv9233p8qYqSRjyLrkzuyQKxE661sQmnVYAwvjTf3pWrUYjeyHQxJUUYRnEswTHnTnxS8Vsp"
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
