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
    "4TZNdzj9ZE2D3Hdh1f8EMXXPXM6U5bDnqqPz7PB8SLS2bLHZsMwGf4m8X6wrCtbKAT9ea8XTF6dw1hzSYLmEZ5VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAEXAck5Sa4A3UNVh3ygPjqycXobyAKaMQXxSt82Wn7ptBLoj2aP6ePiAPm67eFFgyf2vnUA66JoFGf9yikGmro",
  "key1": "3J37y4sJLmqq2C4BnynQP2jkNNVw1vcHnocnMDLQYLr4Tb116GJQaLwyuFABNNHT8YUNhiFgANrtuT5LobzMM23",
  "key2": "21SDCEouCHMrsGgVzvVXrLhLFmRiope7Ee3C5gFC8P69tYUiPHfiRpDLRzspiTdc6pzF2TGdWT1svKw2FBweqLWp",
  "key3": "3Jffn7S2sq2SjLNtztZv1z6XFVAKYQDG2Vqd8dDxtjkbztHaV3iVUsSTu4oaKfqc3fyhfRttX9GkoMc9JK1sU4mn",
  "key4": "52koH541VxdStXhYDo6msZ9io7PipGXCKUbpKHgxHjJS87xECDcHFrDmBzdcvg3FAkLB7NguqoL6npJaj8sz7wyC",
  "key5": "5R2YrLRojnUzygKVRaj3kicKuhkKi62jNfGsyAFfai1VS9uMLvwvzhQvPUbtsSg96pemN93zTRLv1KKPuR2pHsiX",
  "key6": "65wzyB1ZiMTh64ALGM9eRyA3wzXUizZPKMg9mWJqoMEds6zg7vd2CyAqmNYjqTRgL97mvQsFkmZ6y3nZNi7Uwq1z",
  "key7": "Xb7V67u41aXMFZ2gokQtpXDYRUw1PrWhTsKqeCztpH2SJKeff3SmijuLy7j2uBZdynw5cYA5XRJw7TYntn8zona",
  "key8": "5DYB1M5UjrCD6pDhq1CHcgBj4Ja4ZXShR18KxhLoRcUN6YDqaZDSLFGGeBfoCUSqQonRBbFdBgSFeaH7Ep3X2q9Q",
  "key9": "3zovDY5GWXhPKMBrwDp72QzTXWxDPf8TvANtht2LMRzcgHL7dD6jDtw6iAS974xNoXetbXpfsPE2GkDJ2KAqR7qS",
  "key10": "bqvmMT6pucYPSNGdtMZk5k8PsfajkEdLNKcsR4ToCyoL4eg2CvNu6GK5WfToFkCo5Yr2SwgNhgCeYkcSVeauhwe",
  "key11": "4f4PLRbgcnvURibRHYbRzNyat9612nnx6DZ6JMsUmW8FUzA5LCUwB98368Zu5mvjXArCqiJcBgbRbVBbvgt1oV8J",
  "key12": "5k6NXbgctBgjjnLBRGgfJCag6YCrwDpwDrgrqYdCPNK6jBufwuCVdHDj85EGr7xsRDHA7Y7DBaerx7q4wjRambeF",
  "key13": "3jGfgV8KryjE5UE1rnUxe4p4c2Y5NZL67id5BB7j8E4uDLW3CYirp5AaiTgGRsUCH8JpcBGKJKPbZSsShvkg4Wzu",
  "key14": "EcyEgNeZoyxDwkTKYpYRgzwjwhWHh6W62EEgmm6enB2BLin17nYtWbdZ9ZrPQzyPsArXyWopbnrg4Mu1PZc7jDo",
  "key15": "2pb44mBoaY7AHmQJ2DCVXftLYt8fVwexbgGb8aQ47JckeWuBuJnuUwWx9jhcocHifTdutYKoqpPhgoeyfz5E3Aso",
  "key16": "3k7xH7BmK9SRgi9aHj6vWH4T4mzgiJP2ZUqE4EYLmZzmiadVAoe1gJmtwSo1WiQzrg5ushZtvhPbfqVv48vyVuN7",
  "key17": "2pPB847PD6S8tBY2YimKwqT549qPqRUKNT3bCdSuRiZHtruMsqog7fpAr3qYwk7A3PUT2QsXhnFuQDCpPY9Nt8h6",
  "key18": "WjghmhZjY18sNGE3Y2CpKi1DG4Jqk7pDqixVqtvYXbV9cZVGZwszSHJcjspqJVTbcxdVUbvu5VevSyAkxdaBghX",
  "key19": "4VaN7XJeX6ngqxGwiJ91h7m2pcrNeDUbFgxzq3hmxEkgs8bhZu2r5r3ue6HThLhBVd1xVUY4yx1tEokvGy7rH1Pj",
  "key20": "n9YWtcC7MoWZ58kyCQzTREa145h4LMvrgRinSRsvf31gbMgovASmUvjMREMzzFL77gj3qBoh3S6Gni2YQT7sojq",
  "key21": "2nsmLvYmpiT82yhWcnxtLNB5kzLCNH8EVDLBhEh8TeYojEikFv4kVrpV2xpuGAcz5n2YAXysqgdvUp1VuN2NtXxH",
  "key22": "4n4WB2jPpxGdi4Yi7QL1YUuZAeFsZi1iZ4WkCWC4n7fMNoBrPVkxRfP9nzusGsmabXHiaQCvcNQkhAmF5wbiS92h",
  "key23": "4Z5JNYXn6ABFB264You5amxg49v9NLaya8wSk8nq6xyxYaafDKmDEhhB4QMx8fgoLov8rbrfTCdPf67CgGASEiFw",
  "key24": "KiWcart8P2zTXT4FVhqbJMTUm4iDmiyptoV6vndjc3az9LQTsdDmjWyfov4jgBAtaVB7n6x96ufSfn8yEWbx2ry",
  "key25": "4TnRGJRpFqAnUtZzwYjgry1Mkc4jJMYxncLjHs9w77tvbMf1jpNvHRykufNpz36KeKgesafYsdZhaucF2nzbRnQJ",
  "key26": "2Ti7AAJNbJJDqVArFhhgzDmWFKzh9ozZ4oMXZSXacwXSbS6qD1hGvj3FMg8QXoKriYMbqNqzAZXKfhszzJ7viUQj",
  "key27": "2aevJNx6ZbcbujjJNPWMvuHBKqUZ7mPGXJJuS7hQK14KxXLf2S3j5fhQq4d8AmixKdJaoG2fZAW5Qyfycw4nq5ub",
  "key28": "4Mu8XXMEQQeNaHWNzTCJ9k3yaUDqfkhTnu8u47M4YEjK94zQbieAiaTEMEeshv3wugdXDSxhnmRYq2VYwrYGas83",
  "key29": "39nSEn1jKXp36GiJ4KW5AhzPGsZE4KieNcKm4NsMz9bLZKTWWMNjs2XLuPZuj4eugiyxj1btpmKVkC4TgeLYWGFV",
  "key30": "HbSMLpeDuv4p6pYQsfQrm1tLa1oEL86x9aeGbR2Cksr3f8p6zratJnmjjpXQXZW7wVWbe3KdfwDQAxafy78BPNA",
  "key31": "52qXqZ1FRXQazoK6TD7PMWTRwZxnwbFMiAwjnJm21iiDSp5FhXSQPjqzhrTJSQTvPB4QQTme7xJYRUZ7Htd3eUbz",
  "key32": "2oL2tZhKDHawSh35SSWatbagLECSBzhXCrFMg5i9XtuyrvxBwLBo6N19X52W25XeeUcZdFBX5vwcMxgryzghaFWN",
  "key33": "4heK14rvAyMjozR3RTE83QYDpRH1rFFRVzuJtyPo4hRfmqtTZftdDDAwXPe4uvLWgwiLjRLRE2ntgTfBPuP7FV9H",
  "key34": "2TbfnaExNsRQtEqQGUk7GpqPogYbambghpALaDo9rajC46z2tGJZcA8EQrJLJrYY3gVC6FDKaEnW6VpfDTWodMqg",
  "key35": "3LN3wRj1oKveF9ofvpsMs7tEZnugKZx9PVWEc97qm3mYqeChncFRnHZ5rRRfqrbjbS1FmRDrwyNQEpbjR4VpG6hs",
  "key36": "61Hi6L62GmNZYo6KrDHbunbc1sM5i594J4JKwL4toxRaJP46GnMaCCn9PnxEad8ur2qhKz7bVh1zHENrsiTG1oFi",
  "key37": "2KDBYFNLXKFfLP1juv6Ct5M9sn4Tmrbw7L7QY7CRntByxvX3pRif9qzrZU2wz6oHMkQPaRHvNiT56puDrHhYoE8V",
  "key38": "34qk8FSCjHonJRerWVvaFCSb1u5BDuoH4p92Y8ZWQ6LLbgifxZsoXLvGrP4eFFBF9od924FjJ2ecRx12rqFzx5Ts",
  "key39": "5QwiQi2A35n2cECdWePCkWm2JUXXZvyGXnr7gBjNnBQtFiTEHcPS31JtEdUnA3pGPNFGLc5PE2ruzqWoTnVNRiK4",
  "key40": "3ELbf4DG5Ww4xCwAcDxogJNoZq5or7Nab4FbYXF2GPXc1pDG1zDqnPcc9iYXU49rSfR7Ss9qrz7eAkuR58jMrG4K",
  "key41": "3LzqyYFd3norMj4WRwo2LouUViFepFY5rBU68CiAgBQt2Q2huzpX8hyo7SFVQKVLKYzc1QhENT2SL6hCXPqrSoW3",
  "key42": "5QX5oi8hSDU4cszfHT8TKdK7spAS69GKEdikvPh4FD6qBYp58RpvbHYPJd74Q2eUswCp5J6b7fLawkoDkh55RJwL",
  "key43": "487sG3TD9wZjBC6sjwzj8JCakWDtTAAWBSb3UaJojizDMXy71bi6YFRBCdec78u6YUTn5BDjzpizA2vBYUsJCqAe",
  "key44": "2GKJwK66fLJkRgYAj3bzt9R6iMuDFRC2N9pu3hSkCEqPpXqdvwsqdquGrhsDGDVnMdvs53xE2JwYbnMXUeMbT2qr",
  "key45": "4XT4L1ri7gXwLvpJJMcDCdQaKLf48YPHCKxwtMgVcYp1bRmqf8NkBXFBL5GEVcrzVLRUaef4iJvyC4qQtJxiMNW8",
  "key46": "5hL1Ci61AZ3E4fzmRmiDXgMrArbV1i2ZswgQJ2sYsk8wA8jVdTJJkvzs5v6kbS1qVNMkbrCqb9TWN8MmMN8z1pTL"
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
