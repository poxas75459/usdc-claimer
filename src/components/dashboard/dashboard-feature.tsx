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
    "24AFsoE4pddJZaRBmroY6W26wwAy9rWieNjT9a859jXBhAgNJjU43uerZRbm9ht6wtufbD2kX9vdnSR93XjW7Qzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dxxk7fMDQarGFeXcKVphwenXx9tmceL8okQYhnYyHG8c648xDcAptx52ksuFYYpp6RjeLFnet1kYzpVXz2Ziyct",
  "key1": "33duugZKhDQTME8m6rwwKyyHqtmHwLF2ahhpfF9kChnsbyjk2SvSeqxdwwEkUH8XnYYDL3ZZLEP1Wpms2n4mz9YW",
  "key2": "oURRzXVADUnmrtxeX8jGir44KWE9f4vqPaDHzkciYEU926VyuUvfGSBGrnHXLaeppRfW1zmHYdzVAr84yuAQfYM",
  "key3": "5rDvL5LEgGhyMG9VhirsZpeZWbbYj1XcjwsPGShrkxTrPBhtchrwUwHPBLMGkXcQ8f72S1JMuEpxrwRYK21MQ3TV",
  "key4": "2J8WLYXCSQzUC5Lj3ZC7T6riAwv3EDTZWX3xs4B4R4UfAmgWvSusweMZxrYyLnneKJfjee3hguvKi9WtoJF6rbWp",
  "key5": "4sHrNWB4cUmrPWUWd8ox4ZvBnaKvWXT8NvgzCpd9pu45g91Rx1gTd3KFm9z8kLN8xoDRe6oeTS5DDZBvYNJgvYFc",
  "key6": "SVYkyxBHL5WRqda1WJRy8WfiLmPimgKtUM5mbDZdMSVmW3sSEbHWCULeyRSMGUmBZU5pqoZbWNVRDkVDFz5ZNKq",
  "key7": "5jsBKTZT5VjVNzA4n5BxE9xmH3He3Cw2JdDJ7umB9VDpcaRxV5ueBSCuAuupCxjrhuTDAZmPg9ufzMyLj21tDRCj",
  "key8": "3US2JfWUGPRL1996Q3gENcXWSKQSFopVkyDsQrtHpZJvNN7FoFJjDpvQ5ye9RNXNVDDiBKrEaervPYtzgXhPfvTE",
  "key9": "2eJNw6yyye9hP53W59wxpdgqkFECmgy7QksoHVEQEDZQ6Qhxu9weY42i7c36DZmcz6DQUqsatDocVCqpKUr7PEQN",
  "key10": "NeQwRkVNko2drhoDwnapjdfzS5Hk9v1RPDsfemACQUvubMw3f9GbqYrW9zXpfiQEjqZg1p9aBy2E1BbtpRqMzs4",
  "key11": "5unhAsXa4ML7gVaGApEiTCjVhGkGw4Ktje8rdJg3NohteKgmeSnuXv4RUvsUAm2iudZq3trT7ZQRE9f1N4rT5Xu2",
  "key12": "pggr4e7b5h5vAHcdcufGRjutWShsJh31mdKZKXpS4bsKUgGbcZAU4mrmDWWsaAXPAqDVuY2Z4oQ48fscA9kP9xx",
  "key13": "2uYbofoD7o9rAdCi4wwiPy2auDu9yhEo3cnnpNmJ9Rv7Kq4E9V2ynrFhvUQhRjrRtC8h7wggETVsXQBRtZxx42wM",
  "key14": "4CbKZ6p79K1xHtDJPSeMTvoJZgWis2TBiFXVfC9Z51knWCU5o6ryCm3fqGbz4NT8Yn3minGWTgoabNywWvExMMb1",
  "key15": "5nVN3brXXy2iti2vPwuHTmTwxdGEY63GN4xJRKY7Yo3FfKesC9adXyjJkThLTBpmoRoh99tEWJXsmMfnUhev9udY",
  "key16": "5ionpYgUsaT2yukHKqcFcvanuznnnfkqq7QUjMuF2MD4UBdEWTaqAhD47ikRmyinwvqAEugpPHGDMFgAzwYPghoL",
  "key17": "35BqZFwJmgvSZoGEmm7PfaYn1GQystJfru6k5eDe1mSbg1xZYiViPnXNGgc9VXisxxwXjbRD8bKXQSabjfNHcZTM",
  "key18": "3EnyUvhBN5iyo1Z7xYnE46Jhqx6zgdo3mMRHy9HfAJxEydmieZEwTbD8ro8PKYrS6RFsR1xnKWKDgWAZATFj1EWk",
  "key19": "3obkSiVMebfjZu3m7g1DZcV5bV8S79seg74iSBBiX5zHiQpN53amqTNWRFeK4que7iWxuRizzZkiPMbDdZyio11x",
  "key20": "3YVnUsvpjocXhAU5GtQLS2GDN3r1MQ3rhJ2tRpCsNSFEexEanA2AasMXw1v9hobKfb1mGMMP7JewRh7Cx11WZX3f",
  "key21": "5uY38ycway3MEoiiy1LSKMUb6BGKKKrnybR8APiBckBpQawigXC7mRi6vMDJws4xe2iUWp1hjsuHEuRjJD5VvdQi",
  "key22": "3ugzZdARQvkwNZ5j1z7uXEePE3jq93KmaXz5MAg2uvvkWsVCFjnpwcSsAzuNU9D6eNpJv9QRcj6KmifAU6o1wue7",
  "key23": "37aUEs3QZPutSsURABk76FHJdVHizXLjkPGEYLjGic9MFxgmysqX3kQ1zCpmmpTZeB4yEJFTkGtzCTZcyDJrgReA",
  "key24": "2uYSJwRNAJgM1DBpB9FaPkuqEBHE8WwNMSEfKbABrMWRjiahq9CpngP6yM56XgjUfrxfjbxR6koQPnEwPF95iPR7",
  "key25": "W7wz9pPKdnVYuAUyhkxToRxQ97aKqpW6MPf32NzhiAKSb5Fm3d2BjFohJYX8pujVd5GWbGtikeUqfdHQj6Q4LTj",
  "key26": "4y4nubWTomXYwcsVpdNT4aa6cmicc7vwvxtfZ7CFb4gGE1LRpmydvDQ892x9YWVTYdRipvmFLWu3XNuVvf5s5U37",
  "key27": "Me1Cw9hCGXBaphfbGdreUb26QWaGCrvDMMENw5SKBsWfzQNrYwDKRwGyJWCwnR9cCY7ywZMYE3iYyocj5wbum81",
  "key28": "2TMYmnahNUxGdgBKduExXDEMBu9Nz1e77fMoW2rYfYEiQNEW3tEJ13dZJW4SB9GVfFg66jWw6P7etsPxh9bNwcU5",
  "key29": "4biK9NrGbUjK6ddX6rWdLKWczEu3LvWomD1KW2TrPL9Fj1i7AFqQMbh16jPoAtvAR8iH9jukQVuai9D262WThufm",
  "key30": "5Ane37REq8eKNARDzbEiPWdkibzB4ADmcTQpiLNFTCeGMe293uhxQB9oJhvJaitoLkxUBUuhBJE7vfEqoy1uSCXj",
  "key31": "3AdozKB417AuFxjpWdRmKXr3dfeikH251s6KU8rfysUe1gHpt9QpF1QycSBiQNGTQ6x6fpzxom4VE4myG8iNA648",
  "key32": "5mcBkH9zcgapZtF8341PB317xXab18po4pUPi7BGB9EjNqkgsiovSsHKHgMYaM1raQGppxYFnsdjrsnFERDLsHs",
  "key33": "hii3CHD7hks6N1PAo4mfTenJokkwXajUG22WoaaEEskxLqPSLkUc1YsZJ5UQGRbYZGf51GH8MpjaSnV37jGkc4P",
  "key34": "ZHvoxPULePNpfHomc1Lb2F9zFMgXvrnMh4wv9AF8g6bSDGyxJMnz5zNZudtU13WwE5ZYk9gFv4Tqp8YJBZQ1uMm",
  "key35": "3mZRSLLQQpRBNsoBzdMaB9VrUsAMi2Ry2vKfdu5AgzeG8qra31SnHQpBHkzaQ4k14BgbKdCthvncxQdv73zuf4hb",
  "key36": "MeKLVDHxaGnUgV3aMRxSCJWN4pwJbUUqGFAaQPHsobGgwN4DHZYdzKK7HebNHfk4QkeeDkj1CWs7HZUZFqgucPX",
  "key37": "3QrtbKfZVPWwyfPduPRT6gLQbeT1nUWSMkYXnWtQs9JozLbhrSWQjKf3Sxb4J83GLX3gAcZDmBdoPN5HVRCPZsgE",
  "key38": "4aUf9iCmmwEuGrS3QoB8MF6nXWCM4FJPE3q8KoyCbbLH1aiG8qzMkJ3MrAKPoV1Zi9YG5z1Uyay5wye4Gbiia5Mc",
  "key39": "2kaNdFESuU4wWW1GiAoPRutXigGbFeEmL4Jr6ErS5gTokTDNbqXMrxGyfBJiS3teVdG3keT8VwWPNTXfEPAMroPf",
  "key40": "brCCYC2LG4Gp9KF183HNa5E8zy1NGVPSWSTpXdVJPHXA6uL4wNDrUD1JxciPk5QbEyuvCPVYcdR6PiL4UXpxjZa",
  "key41": "48NfAykiRmQAftvaXuZFstwD4DYd237vX4ubbaF42uZCf9URsrd1CNfnoYa1eKQ2cgE6K6x2UvTFUxhsk3LmqCQj",
  "key42": "4NtSccxNnUpw98qBFZVDXd79bDvKyu5scVuFW9NHCGLatAuwWj2rsEfe3XTwUu8gdxHPv63wmLqgD7PaEkfSVoEc",
  "key43": "8HUQzrSVRSuvGJzD9jBpAd2Dx71JXzrauxcxYDS7U3ybutdoVUCrkumLgTkhnVsnD3DK7owkePDDTEA3vEJ4wAx",
  "key44": "DrVDrN7QzPMkcT4emZC11pE95wAoiWrKK1ZZE7KNJG8bScp5pM5FjimqzBAhFpRciZuDCMYu8nwz1BQNSBU7Rp4",
  "key45": "Hp6PoUeGtizFVvJAW122nsAwonEkrDDLXr6GRXq6yfQmFL2muN7AezCVCb3ymcV6mHrrkHzReBjJ3UxiJZ9NUrt",
  "key46": "wbAyCSvfZxH7ZsMnk9kAh9FdVgjFnygJg2GFhhephd5nPK1v3M37fGq92y5x768Cym4cneCuKKnLTzW1ik7HkmZ",
  "key47": "5CBWKokCXdfV4xvVYm2ek2FfnFpAV1giaQ3uUPnJR9nbWjJhNMck7xpNvYJCUhbKmb522LD5HMgcNztVZ7zzqA27",
  "key48": "4q8zaPjNRskevj5czERU5kCg4pCPHLi6LbXZxQXdGBg5ErTVM1tEsGadovMP3w7fGL7M77XWHfUcLzkezUjTc7GT"
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
