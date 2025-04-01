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
    "2xX9e469BZwghFheetny75qA5C6VemS5gPYM8JyMutghrZgkRZqtzSQvtK2e8k8t9VM3v2tNu9oexxLqTC8riMJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MfuBqB1iRQ1MTMXEeVdyT9bQUuZTK4cujD5rgrbQYavqwAgDpXABPqqaiMmiZe3DuvJ45MJhDSnvs7auKDrb1DY",
  "key1": "4fU6GmrxmFQBm31TPURqjC8vf9TPTDqHbPvruxKDygcjMZkkeME8pmcmXfMrUbFTzwwfzUjE5bqH4oWoy9fAEXf8",
  "key2": "4DSaiPKbcJTiopJtjyfbgKk27Tr85E1gUr4CVhPDnxyJ6AwWdkDSdbwuSoyJTjcwsJKZh8oXy8tWSctAPCYcWBHA",
  "key3": "2vWF8iWYggDbe39omj9wkrC4B3TAibZzJzM5PppkgsdsT74vGd6HSVzHBCiPy2UhWZnbH5v7djJS2Z4HcZPwyxHK",
  "key4": "X3G4eJ8WzchJkfozKeC9sevBvd4Xa9JHPPBkdTvafdfDSzT1wpz3JjecCdTZyNdkQ547Zcp1bWuqoLAEMHgR8uG",
  "key5": "3Ppoi4xrqUxKi1PuWcK4ff4LBjrDX1fnGQr95anGCUzXejmVUT7SxwE1T9xo77SL62FDg75GqBvEtyU69RrM8SkV",
  "key6": "BHrJMJ9KmHgriJbJ274o66iQNwTeveMW6igBVKvjuo7fQgt7W4wGbZMFNBmLQ94nzS9JcAYUMh3w8PZZbQbAcWH",
  "key7": "3f9ZoKigyGFntuetMEWZdTxjRzHwd9RXsjrRBF5pf6qH9kC943aZxvzzVA1ce9K1msEdTUTjQTTPZKuMuKyYUkNQ",
  "key8": "5pdy3PDT5SAUxg21Z8okVEdRivo3dNf9hpgq9pMb5N9GMeaqn1rGQjMNDEf7kZdan5eAmaVX4wAMGpWvMdGP4E5U",
  "key9": "2r8cumDjpGPRpFUUdvqbXXsyLwVxTdXvQ2inm2K2cDnEezVFKc6jFVhvRuAaXjwkU2UpFNTHEuVPbqqw2FX7XGxx",
  "key10": "48BGAGiZyDQFM8tsjsKQUiherFXEtZvB9pHDSMh6RL49tZ4zCin7iMsLtfHkG1GdvC4BnALfLKoZVb1nrLbRN3JM",
  "key11": "2DkhqMofGC6SB6JiXX8gYnhL6dj3S3NGy2CSaSyiQGnHd3mRWKEhiP3uzwy48jVgrw1My328mgYvYqGWhqA7gYmZ",
  "key12": "TuqvgKGKBMYj7WsmSYeM6LCaRSNamsfpmvhTzMD5KXCKiXn3zRdRDHXLaBGYKfVw3gMCd7DS3DgiCmVV9uxh535",
  "key13": "39fJ79jBeujVQcsa5wKX7YD22DHWCaGNQwehAVKG4CpPhAR3D9erWgSFhbeebBGdWwzX5j7Bpiha4R32BSnEQB2w",
  "key14": "e7Gi9SondGEeWCMiSDEgJHiPy1yVqXZhNnasbK265h2Kma64inH7YyCwMXrWH1Dt6hcPpbSaNi88SAZDViiogoC",
  "key15": "5HJhzJNmKnktFZ1kd73Q1raNhjarbqeAe4KVS2VMPfW5HaVkgvHrDmi9AAZdfxuR1gGJnEr45FgV9Aoq2ENQEpUM",
  "key16": "4s4M5Bak7whaaPqjQ8zNNcf3VcDmS7iTACR6aFKYcNa9iSkX7HFzTvZGn1uSnGcza5FsHp4XJoi8raRszENHnaer",
  "key17": "44yCtLZXD1eKEiDgnkFxs9tTJV4ntkznnWu8ZeyzfgXh8qSZiExU7pcY3M62xYJ154twxfSs1qZMxbmwffcPfQ1P",
  "key18": "47qNNkYdn5JpsxNBsuMeUCBukeYu7qYFDvKDjNisd13GoRP5piLDKfHQBgTr8Abgd9pYoGkUAG91jt5ocFEAjzj8",
  "key19": "4pQJtr6n5q8Zk3aohRFxJNsWQ24qP75KuNBveHqN49vbUVRC8ccKsfXcsR8pxgGNLbeeEYjdFDWbyoeSsradmmZH",
  "key20": "5UJBozKaFHz1TzZQCKynYh5UW1KEyrwYfv3LyUjBpbxb3W4UDRL7aqU5boWZGUvDtwVnbKbjayCYBPzkAiiDwnQx",
  "key21": "3FceDTi1RWqR6C73ix1rMQc5zx1U96Mb8Jzy5i3qdK9MXPfTvVNcfJUnCzg2bb11ho4BnFtMRVL9TGjYK3Bqzv2j",
  "key22": "4yWscBBnuZQRWPoknVwFkVpkQhXXbBY33iKGAAoFJvjM8PwLE3fuEP8RA9TwB4NDVDiRxRrZvuMKhkCsWZg5tUSQ",
  "key23": "3uP5D5fcQurU2iHt2CYxqs6t8uweZVjr4HsyYu9BWTaQEKNpXFfTfHqhDDLh7dGC1HjjJuTY1VydAb9rTBbDBzSd",
  "key24": "4CUGy1cT3fmMNidNE3GrNnCkZ5ApShembtNSdECb1KnpXeFCKR3xuaUvAP4GqMDqtG79oZZJsTudmL1PGn21rfwm",
  "key25": "4sb3fE1gaPbukWPA4yrvSGpXkHxH23fRKiNTsYus2rN3HPNQdggMZYnZ3fdsKV7JVhLLNPcmLJkQDM98x8rZDhph",
  "key26": "2TgKRmsrhfMRHJ9EJUyxNuf46UURDSAMgAHVo6Yp361DKDxUeqKnNqQJP3i9mPWzCrAgRa1r5JsGCKigccckkV3m",
  "key27": "4hA1dQVbmQmA6o9fQYHKDsvuQRU2auScNZwEvWtdsv82cLstb3CRZaEyzHFY13oPAT82a6rbtdHkYaaqL1LFN94N",
  "key28": "9PRxBPFnxoufg5iyUTpf4VHQr3TeBDB4AMtvujsvktPVqSfHzqCqpk4g4dintx99ySV8txCzbw1zWKc1q1khaHs",
  "key29": "4gypYzD42Jhb2uy9gAQkhXAfKUQ2b7oWLqj9PVLGgTyVKWgMzrS8CPzBRSiyoao8En8TG8wnFxBrSAQrgorEDaQV",
  "key30": "iVKLrNd252E7ZUQK32BxHXQcLBR8F2Kwa3HQ5sue1bHSC48ZcqAT9RyegiGxzWZj6isnBb4aJKWKHPH1HMGUNMz",
  "key31": "2qD8YMu2toJTBFc9pFkCguPG4e9wEQgi4BkhVVQDVT4Bp51M1rhd9W6t3hsWGgep2znAMSseyYg7hnygXxiZnW4W",
  "key32": "52SEggKSZzmGw97PKB5YgkQxoCr2Mvnhp3Eh5SN8jd4YMhqXmKXsX1Urf23SwD7AuRVzuQgfougArXDUsPR5HVfp",
  "key33": "4TTK7gMGgnAZZPmtScoK1ziKbejGwjaPYdtjkxubbiL2Zh6cjsmQGnT9VSvgmtBV7DyWz2XK8sjW63bJ9fxAKzTB",
  "key34": "474uMEQ5G5Dr4in2mwYUB8XLg9tXESCSAJQ3ZGzQAQqsb6jcbpjdPncEp4D1RTonwcbGsUgXE8r3mV3rPCF9XFVn",
  "key35": "55tyPgDr3C1XWjVKZYEx8Ke5cWQxPLsvAXDJe7wadKhZmFgNztM6rM5sG6H2GwFBFw4QejkuuZZMMXYkR86GXx17",
  "key36": "5QxVDi2CkRikcnEsfYcupoLWzrA8Zfs2ZesycgZFviFjWS9Lkw3FNW4QJJPL62JLVaPij1g25ZwjYYVRfnZSAj9o",
  "key37": "2UHmQJ7HFb7qWvSutbR8rdiyzDZ5tcw4QRhS56MuruopPo5fMxVg2Aw2e1dJKm9zoizj8QHbS7EWMcZny5oNoJ2",
  "key38": "5FppiJEKKqekVVwjia58v69k197wXqnTpFRzbWcPDJHBLMoNPZrfMVrVY1KyxPqLttk7Rp3hGc4ZDgX2cWxEaNaZ",
  "key39": "5ErTysnnwtCjY5XzxbfNGGY9iJxBRWbxs8o5burqpVK6yJA369DBiAqwELwKhQVD2bdg2xyAPrfubNXhpn5tnHta",
  "key40": "4PUk4k6XkfrhfhHer3ZKAv9pwbiKPFY5ZB7gi7MxrBTJ6vnmF9EV3YGrafdTMTRnj7dhwfPYSHrvqW7KjCXTPfXf",
  "key41": "61wuvHmS9EorTctKrXUhoc7LPa6AeDNrPhxNT37vjzbFa5Kc9hxEjVWEfwd39pdXmZH5gW6xDXP3N5uqHZvAQvS6",
  "key42": "3d6Exq6MWSen5UasqszKpv71LTmGd98ey8byERa3QhVJ4q8mTC6fzUVFK1EGeFqH5Ss9YAbQP7NsMKdTreg9Cm8s"
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
