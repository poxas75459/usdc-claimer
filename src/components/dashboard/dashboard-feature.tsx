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
    "4GcL4x3xqvXH7py9SVHABnoDCwAofcWhSUpWiawBMVQK5u7u2YvBckEaCXs7A3y458a36ReYmhYJkeWWkrQMw6wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iycKvtYWE6BdySpEoCmRADfYJYtoXiPKVpT1uVtsQKV2yXrpfvxJ4eJmgL2gxygttohQZxTWx41V29yau9KdWFm",
  "key1": "5EN9AhxDQhS8quu2te4YgdGhCfcWVXjri3egiiiYhPs3JYMPYeb9NnoUWtRgyvaXonGhzYspwhZGwqv53KqX9Bg5",
  "key2": "2Y3jBqshzNtz2Wz7w5tUmsDDL7Fm5SMDGcQEyhAQmm9qwu7Xu2EtGJ4Ke7o5M7EWVErCBkvtbFXPHXQoCkenGPpY",
  "key3": "3KJqY38b1FJtAHwQFeBLKFbZ2yKLEwxzgViC6CojrDuXK49hjWhyZN6nLS1i37TrRbdm38eiUFz3DTDLbNsTLuBn",
  "key4": "3n9F99v2iFoNZmCfxvMUMhJfiz1sFyY4VTb56UWNoHVvAhpZGM3uCoU2nWbF5uPpvXkwiTb3RQxAvgHkhChbxUQZ",
  "key5": "AEvcwq3BJ9iG9KuJ2P637LNRCP9PmtcDAnNUb7LFG7JnvdyTUcdZZAHmjMvWXg1vGX46SwxwSmCVsyiv99Pm2ix",
  "key6": "2Nyi3HGRhtpznysF2fC512GYfUvWJBX51mq7X4UxTG8dVysczqbXxQyDEVLr4UP6LxVWyD9y3kp7orFPCL64mP5p",
  "key7": "2vBdVXDwMzSUzR9jpCXYihKv7QNuU8dQDhMMWZbPtRKErMJw6Sb2S881Ugd4kU6tQAwHgKkjzdfMbwUSU3nkFFAz",
  "key8": "2XXmuAvJjGdnYN23LzzAmMgRQ4RD47LBkjGn6qxRZRGKk98hpsdYpcGfdmvquKghQVHb9yh3jH4wW7nrg6ySPvtJ",
  "key9": "ga5DTxxuszRgoDmGXXFfVEzVL3h69LVMcS2QojNhoQdy98CJrwm5sqysfP1way3M71d2SvfeiR9xzmKKAYKKf3T",
  "key10": "3AcoifFXsz4djcbi9ES2kdtjMUnyBYk3TjGRKuwYZ4wbJtCsiFnPacPm8Ei8Dy2TEZiKCxaSZKoCiSQevG86NFxj",
  "key11": "24ziTGeGD4Bs6UcJRHuVXAf29UGmfEteCpsDm9SYcxfuRKxgd8uLoXQaTBiL1uEY2hty5NpMGf1wbSQJ7KK4A5k2",
  "key12": "3CaFn4zMt8XpxqeoGxdU9EsrCvnVzHdd5313VdkubeLo6qiPX8X6X9AyM4yYwn7Juyu8xzXAm2byRjYMtFNeEqRy",
  "key13": "2mx3BZ4d1onY2dWsw8XnXxqasw6gejYVnThJ4ZmboqQyYG4u7ywJYhqcVEhj1yZ1GgF8fLADaz4U9KG8oayAvakS",
  "key14": "5DKUKao2DXq6puxe7adbj57h58umYotp3h4mnSmhatkK6XED1dCypbiM2CKrq48AF8aLxip5ukqa7gxTMYT6s5iX",
  "key15": "zTHzNMiSzk3NHf3K7vun7C18LwUb7zwLqiqQCUfcqVEAwQsc8Q8bViezaJ1FSV9HtRkxdZsqqnyqJHDHmTFNnSr",
  "key16": "3yCCP3VqcEU3doaGZH671bmnFv62d5kHjxYTqzNtLfvTTjgCxEFcqJExwRMUgXokvpK3A7oaVQEaLqcYMe2ogSUf",
  "key17": "3pPNr9Rr4k4Z2r2gLPx2Ff2rD6nVeSGv6NRXhmofzM1Q3oU8ic3Z6qZNaEYYg8hy4i6rU6Bzo9cuocaGcYriA7v8",
  "key18": "2KvvbzDReh1hqtF3m6PZuKkWizeBCaQPqsGXSPJfR7MPvZ5rexjiD6EEe8bXqTabuYLMVSwPoBVDSWCv2KCtZYVz",
  "key19": "3n7T5NJH71c85zyes76fwTBW15mgcgA9wq6XtNvtF4P6s69PNijcyJ7T44h6CWu324gn9RyjQPdwDoDgR5eutP1V",
  "key20": "56tMnmAQVFY1oErvTXuLyDkSSHddAixGuL8Yz5E1YwUR1nwZcbv46EKuqG4hyyo9gq6DWC3oQunoodfaWh3SBKhG",
  "key21": "aTRYhrq3j2F4NPgSjqmCJwdoGroiDgofTxN4hWfusyaFPdLDrrdMGDqX3fBL6ouqPYPgQ9frwee3rpbitYWrXzz",
  "key22": "4UDHnGKi3J7CY1T4tCiwScBMzF9Zv7MYyG2HxapooQ3QUq2qQZCVAFs6mQk1Y1mH4n8udsRQt8spG6jrFTkMH8m",
  "key23": "5Jy7zRS1C1gxvYYWdkygjtWnQsEj4CZGj3BhqAkVZXskiQx3kCQXaKUpfnG5yPSqZetVRr4WUEqqpSKPUNzqKJEr",
  "key24": "4tqvWVpwgWLy77cfQjLsqJqmuA26KkhDRc2mSfsdJtqiUEPzVAB4Ludt7GthkNWZN3N9EajQnoAYRAHGMdRSznaG",
  "key25": "32hiRvX2Xou7fitG1RG6mNcbbMUAyFPWV6wvswQ93E7gzWYWeEadeUZavKGxCT43VCvAr7hJaxPGpo7cCfraCYdy",
  "key26": "5YAf4pgW4kgwQLWsRNmMWKRcr8cMmkTuBBeydsUNuZESskuFkybDMteAg5MRgDAJdQYUvB6fMEyauBezBaEbbRYt",
  "key27": "5ynTqKgaLkT5iBGFF2TtfBdifACXKcwkpY54XJt1aFCx7YQHff2GTPKP26ZCr6B23ewyVa6xJnridE1TMJR5yj91",
  "key28": "kL2UrfLVPbd9yLkEGmMirr7FrgS6e73eSLk96ENvurQSDHpXf2ZL1rPw7aPGTkVPTkuvD4KH4dMFKRGFsWcuGmw",
  "key29": "3RXN3ULJ9kvXsZY97TKtBUcUKGmos4ypUGeR5NVYZbpNxupg2dvKjYiumD7nsyaN1YmwECkTzTDR8aGJ7xCjEn1T",
  "key30": "2r5GgW6pebHeYLEhknPxynArks2gGk3C3Q7qeNkDt2LWtVV9fvnLDoJBjw62s1D6WizLWLJQMJF5UfPdwbmJHRJa",
  "key31": "4JV3CzBBMezJWBpvAsrGwTWGKpFF4G9fmU8dBNWsVUMAmXZwHVhEeDPscxFXZtUE3iRDGRek59qXUbLvpW4kbJ6F",
  "key32": "NQQKcuXFX7coWUZNrYSzFgc2tZouwvdCFujHpnyYrLzqPvKNEFsY9iyk1GpetfC8tzr2p1MCJ1245EMgC5C3C33",
  "key33": "37qBD9PbRKdqg1kvZ6VgdB4ZuLN7ocPeDoYkUcCh2zLdoavxfrGTbhxpoZ6BybhA2RnFouFqyL55NiGiWgmvdVks",
  "key34": "5cfnibgEn8USDrNaAr8K7mMijqjnY6PGJ3eLfQ3D9pHojvYfgsyFvTtuwZ4ntTvj6vu9obxtF6ZeHvFvmM53ERwQ",
  "key35": "CuyefxDpvRVB4Ze8uDMWjTApu5yGBzfaSfNfR8Jpom9hTSwNHf7EeAc1aKxqWzG1i8cWYVids29va9YBdvrRyfB",
  "key36": "FVhXqhbWFPaJ8PKAt6fZKQ8NwjwHJkqqW3c8bZeyykfjoSnSs75ZMYX4TtXJkXVdP5aiRYLENkPF3xF69K8ZKYj",
  "key37": "3BPJosQ7Mvj7jSuoCeQCh2pspMsPQwNQCNDa3d4pWMQ35HYc9p24xDYLJ3jeetFMTtNcZE8ADDJaXkgkmbx8uhVF",
  "key38": "yxfyCaEVCM7MyF5b3reDcqV2a8pxo2dNBRXS4yYjBVQ4xGQof3HTP11pdD9cPjGdLa9Q6SG6ch3jQKhdTBtzqvv",
  "key39": "Bo3f1Hgpbj3D9Ee4b83dvoWXjN8hb7Y4pbrAGGSdY7dMD7Xi9smv4ukD6RUQh4e23VBcim1sLfjfVQ2MnpDAZah",
  "key40": "2hvaN4RJ5422ykSjsbgVafmW7CsAX8QbTn9LHTsYY5BWbKHVzRso3Wxmgitvo82fiaDAX7dHuV7nSbn4QDsBddDL",
  "key41": "4nHa97qEGrKwSmkRXt3qxoJN26ShjsKuMDG1okrG6UVJXaULSavyEV16t3Y1kqb9byEAYji3XdH7KXmwRUit4bMD",
  "key42": "4rXiyxQy3C6mj2PcvJhz2XXAeoFTuB7Jy9StX27hUKoHkTy7K6VFjGFM64CqLvBXcVavwnSiz81Jzmcxps2FH636",
  "key43": "31kfHPAUKTmg96WaCotxbouKdLkDLQ7TLfNGhtqJp8iAPTYZg8muP9iKp1kSpYhKDVYQwYU2faurKhmHq1WZMLzt",
  "key44": "4mR7eN4L2symhRYhsX3hmKVa1zT2GQGD4rhSDZ1hktY33Yyf4nyZYSWufHafpvh7WkfCLrPBu9FVFs7RcT48wbsv",
  "key45": "3mRmX8j22ocQZqWeRYAWC9MB9aseVugbWsqz5iiCsq6ih3gu4tZqAMwJthvidzoNsPpPfLYxfxAEevWPS2A5tbu9",
  "key46": "2WTtL4pirnwc2JRsGSty5Hm2UBbGTDitKczokGxCmpgioy5CMaAxyyjLNRcML9sqb7EukBbGR1Zma8Q9xcWaUGmk",
  "key47": "4c9fM9Yqgs957JxVzCxpupbNqQgY9fk71Rb7DNq8hsm7xRWrpUx6K1F2s4Jv6oePkjPSV4x5EpL5cyZbBiscKiDP",
  "key48": "5DHJP3HxYW5nHKr8n6zx4bguxhvbCT28y1b1cKTX8WUBWmpKPd66iAhXi2cLkWbRrbsU1W4W4SG9E5sYzwGMNRg9",
  "key49": "48uJPSYG62vFy3P6qMrGciyYKvsJAkK31KGZoGE8sQejjCunqBDHqzGCDEUQZ88xpqmmVDdJ7KLDDW7KGteonwVw"
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
