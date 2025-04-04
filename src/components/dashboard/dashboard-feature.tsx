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
    "3DePcogoHMUDef7zuVYmE6cXESTr4bUXZT49FL3Ns1xcsdNZ4cvj7w7YVHtebY7fbEoEzEYc3Eg4T2iJwZFkJgjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7CpMn1SNQdvQghspgKfdMRFCc6LULvD1vuRtSFbLRnSaUZ4RpUKz6YPwKWnTQV2ZB9r5qGXgWoLwNUeJMgep3p",
  "key1": "2kxH5qG2gEu4A196VqURmYV22tzmG2VDAkTQ1yRLKy1U8FTGN6V1bPVc9VmcnwPdAaTQ9FarHFMFagwYXN5UJGmN",
  "key2": "2rUKGS34mYUCCWQLfnXayzHz4JeCPa1jxZWm7kNA2v9PX4Hxcp47mkoCrRmuEbn18k6CPjTwATtCro49YQFwYdQz",
  "key3": "3vQR3bCFQkCQubN58HM9P6zWJZNBEoowS4X8Brhyi925WPZN4Byrh5aiBPh6hMLtpjK9BAFS7mKGghwVGghSWaAG",
  "key4": "MdkCGfmbpvmRT2ztZJCYAofL9kPn9C3fXFC5Tfc2BGoxWEKjbhZJCxHH6LeDtRhzeax9iNFov8AHao63gZg7wd3",
  "key5": "4kuQyYCQkjWJNqLRjfcC8wRceRSrD5WU3hRuupy5bejY2dddpfUuFC4vKcdYcnLun7n7EShUYyqbbJN9drgwWn9y",
  "key6": "3i3rHWN5H9Q3HLynfomnTNiXy943Rp4CSTVv1KA9yUxCa7TUwMhR3BMQjJTquHRu52F7buHoaTsmEnQYjA9uv5Cs",
  "key7": "4jRryr1KHMuf4RrjWPJint2MHsdfGZJWW3UZnYp1LymKonRFpSNPB2x3hfjYZRPWmpKGCpZjxRiENkiuBtXv5gpD",
  "key8": "5esroGSD71MACSNBf32tiHohCFEKrLKwRVq4ES7TXx6WoB2RNvt9wef4ckE6qS1Ztvrd9CN8BphRGCV4geM8sYG3",
  "key9": "LWRMzC6xMa96ddrEqYjxY9hBS3P8VQPfb6vvVFmwmSML1B4UuCqnRp8ZW4DuLgoJj9PKcA1xqrVQHLX2p5WvhY6",
  "key10": "4kt55S3WMHcqz8fbciPfSuBziTYHJe4Ze7w1xQ9SYTvUWCDWq7xayRKz7JZbh4UDao2qLLFA9BGz7rjCBzxTJbft",
  "key11": "4CZBMF2zTYNNPymtF3XxESCBZjVPirRJ9EKwxTAPv715thzo267sPxb4LUDehMBY4ZHdWYQaxbtrKkpm4T4db39o",
  "key12": "2BYEv72HiQA4XxbGbvJaYG9Fnxbekw5wwfxuqydZuQf1BtwXKLt56gPJvi8zfmoPEqjWCcpeN8y61TvtTp7W3HuM",
  "key13": "D4JHcnDX9Drt6rjXuKzN93tEgtQgRJsGhGVasHnj5yf4MNXkBgeJuHab1j6m2isbNhLpdgRrGFJKomJLQyfW5mp",
  "key14": "3LYRR7pdDLgY2GaiMLMkm9zt3xt8HhchULFQV6zqEx5uyeUXoSLQ3ckZH9M9FTfsxVN6nd4UEtqHDAFm6g9ySbwY",
  "key15": "4VMDWpeCXdqFpK8advwEKSFeoBNgVJxEaqje6HW6KKV4GPAbaJcSEs4pcRqa47nxUkLBxxVbGMaAXYPA3jhCgmXV",
  "key16": "DMzytKknPUzNFrxNgfCGFnRnaugqpwG2EKibeNcwpPVD7b9RCiRsc5nt2PPxkGrxX1a4he9g68SWeVoBYmydoAh",
  "key17": "3GHjY3qhkh38peo7uvUJRsrBYpHn4kzYVh5rXyPnRS9oALjbqNQ1nXk8nGevsDegS4xzjyHK6hUoWM3iNHXkvGx8",
  "key18": "4NYuEDVo7vmoVSafvRRgVTjLzBpX5xxHmgPXTE21wsHb8BxnaKaptWSDbzXGY48SEoiEB2cC7tM8iehQf5qNKYdE",
  "key19": "3oLit96CHNfUwJxHRMhYcB9n3rbMNFt6TGu1EDnPb8wxRB2AQzoGY7VNz8ZpWuf3uRFcnR4cwgWc6SPh9Daj1MSp",
  "key20": "2F2PhkcSxz8zLndu88J7zuF1P75TzeWBT6YdzDoD5sE3ed9bS4Lk962USvWLHopZFLd65FKJUn7sLyTP7ADse4JM",
  "key21": "4afUAdouWymy6wp2nBXGqjCdztzDeFJ1iFKbtw7X6DKn8iBhRbbP9q9G4JjLbqG5E9JA8jtyJbSu1TNwxP6vUL47",
  "key22": "5mC3JnfgDWzg65QSuTpheuZktENjqVfAtxKLVceMwAFLdnanh3bPTRq2M7JhYUXjSpjYzc3CpmoBLFhgALGhbNcK",
  "key23": "2uVHzyBQkz9w7HGzUxebQEQW9FZ3tn3DpNknrS2f4DVTatfPX7HjfKhZBWqoc1JNSv1aNTrT8YtRPGbW35KAme6R",
  "key24": "2iRBxtpcgNCRduSMwTySHAZagZ1U4iB9s7bpXMgaKpHaK6USHQjLZFrDRSrpW7uRVPeP6i5tJXAqKsDEaQmDgUWB",
  "key25": "5An27iK7vy6fBM9Gk9ZShzr8CAQt6abmYJv9phJAYBpqHKhhUFkzRmDFRb9sdUuDMatxqCv4YA8gYWmoptFsvCch",
  "key26": "j1Y87Biap5SxAgvNxyWfQDp93arDCK5yf7WU5KG4dWUQoGhXFEFkA4p9iyxrnS7b155zgLUxPb8j38Q9JYjkmm2",
  "key27": "5wmUHxjJECw8FLkS86agLt77UTcjaTBFHEnwZZVmSqznW6tZ6wpDxi8sa7fcrNNkDnvLKgyWYyC7NteHZGVdKJ2c",
  "key28": "293h4oge8CamBWt47zv2AizQToWCMJpSbEw8RHaqhE86iEabBoBGd8YUxX3tsLDVVFAZnbNB4HugN1tfx77pCWat",
  "key29": "6A9r17rBiVy6pecqeuLdXWQ1WdUYREP12Pnv9EhAxnXZXMsPMvMgQKaqvs5DB4ucXpf3HTpwMfBAVGN7u2PW8so",
  "key30": "5317pBiqLafyypAWC3u2aJF9RThwH3ssvAk7hnxNQoQ32xXh8RksWpff6G4oKV378f89eedow2gATgnRDrkjGxnc",
  "key31": "oex6akeAd7N5nKAKKEiKs1tDwqefFW5mHoPeasUoCsjWqsgWgnSQ7e7begp1GXV1swDhyzFRXdLD3pQ5ip8oMZ8",
  "key32": "58DNDD7Ute5Czt78NgRe2FP3Ds1APG5JfPYyZ27XRQKbf9316Lb15VVQUuTDdTfySoyKN8fWvyCbbLN1mV3kdaCu",
  "key33": "2UKvwV12K19mFhrZWWPuCESAdGeV7H1PdA9WW5Z39vyj8Zu4oPkVdwvaNFtTEwxL6tkjzW6edVmhCPkCd6HX7RKC",
  "key34": "5Gaqag7Sjqn12aG1nFQ5hihCcknMQr2nHqHBQFjLP9Jb8MXTJVjULPkRNQqAH3dg6nGasEr13AeRjrTu3U7MbZeK",
  "key35": "53vVFhX13Pp7qQqa653N5hv9jxoVRdN6E339ondz934wjdhGJguC2aw9b9gXfe6q29nfoNRPofcSo5evPEp8G6aS",
  "key36": "3vBnaYxkFxYHRLeT2dt7FkrVhNVZQ625JeJ11455JqCSkmr5AdT2n5QfTx4xGeD3HEixa5zua3wRCFjzrdmUA85C",
  "key37": "55rsX2SbJPfWUH1iS2x9qJdkU9ttk8dZyiu6MRwLa9La94hEXaEGeRDtUMW5i5TRcZXZX44PCMYx7NpjAZeVoV5z",
  "key38": "EtEcd288n8JzKo9qvFmZdNnJMXLjMVJMiibNjJogZGU9QyRetPEey2J13uAd4FaSDT15aUYm4ygVoQ5E2e6pSqL",
  "key39": "5JwTPvrSLmF9rwCnqKbrzHbvf432KM4H8gU7TnomoUP9ugRzaX7N6JkaDS1JD4eCuuAWz7FKBZUEWA87sNzyAN7x",
  "key40": "4HzsCum69NuVSaq6jjeB4LRwGQQxtDYVQBhfhF5JhpQGEVJTmmPFsiEreeoKmoY35BaCzGHp3cW5n8TBssrSPfTY",
  "key41": "ZLPAGUve5W7PgGg3WfAyo7nbBpGmW7nRtiTfqqFcCPUq9JcCvKLQRdRqmagZuFyDvevP1pZRkNTgdpZLoofVHPi",
  "key42": "2uvCqF1Ndmo6WyBEKzGpoGWfg5WEGY7mmAXMjLarmH3BkSfJx9JSbRnhGwLcoEJBqtrBuEximqVYF59Ynqxc8sxo",
  "key43": "hma5as4MEaWwrY9aMiAaX9auEYE3cQdK35z4EcScajhHYgU2gH8V3Go8Qe9kavqYJEbjYHsgsHDoDTdSs9KFVD4",
  "key44": "5JkQfXsRhcyLiSZCz3BsSGR7Dx2ddWksr1ifsLxFq5qa6HGgHRMs97WrqdQ4avLZRBuggpdZtq9TaVKsctBF6uwG",
  "key45": "3j7vrGJcyxNbmHbrGWuyDfe63x5yN9vB8FKPWNcucdmj612n4Swe5XMnUfEhXYEbCAoJHzVPBAtSq8d7CwrvQYpX",
  "key46": "5NP5AhyKHY7Vys4tJK7Jk7F43KGSGkyq9kzyijd2xoDpcgZDrmeMP55ewr7kxEPd77yyk2G8YiyS5aPt6t6djQYH",
  "key47": "1JZ395WDLidhoVApGYtZsnzxEJmgwtTCUCRtsYP3NwX7Vgty6yReTGtTwCfSRo7LgKWFbiQDcQWBmCnyqgeDPXy",
  "key48": "2rEd9x4ujbj1dNpzPR2xVaLtpYajt2YqRsXjgF4gsHvovhD74PUvtyVJJ9wHkGC7468AcNiKLaNuvQ6MTuaCQpPu"
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
