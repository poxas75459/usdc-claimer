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
    "MFvXVhHYDmuSUCzkY8TSAjPhkiUtLcrdfoVZbDXggX68tsxo6EvVMZMsZ7rkNt3BkhbmsphSH6fCdYxvcuuhanm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jggq1jDpcS4ge9p8e3kJLt3GGomLA7cGgcyQ5cFB7zbMeA7oGKTBU8WvBD4ok7Kx6C1KCRQQEmmgYPdXfeCLxhN",
  "key1": "2cXdiyWvRGyfDnRnyu3VgrbE84NAQeJH6w5fuUDnMsm6a3vACPbWvtmP1R3fud197GQUzVJHzhDs7wFmVEtkC4Yi",
  "key2": "65vaE2rs6tM8TDPFm6ZWKxjK45Y5THHKUoGDJ3pAyXmapMtFoaPdTwmXBKih2URfCakd5RnEMBe3FxNdR8hT5xef",
  "key3": "2L9PeDBfwL8BFRMLFDu1pcmJEejSV6r1B367VSPCb41d6gTKZezbgP4sg5TDajgaJnRsBRxj789cdmtEz2dQUg8y",
  "key4": "3NcnCED1YjuQTwL5fDKDqq74cwQwwMqMYpAwVHjbx4bHHFhTu9CZzbaTxWXAVtvdauCtRSBHFqdcoHMFc78Wrm2k",
  "key5": "3hCbrhD4eRZkMjVMT4Q1N4eDUBNdWBu4C1bfgFQLgCubX2VNNXNbMEp1ogh5mW2vJ88iLpm8zz8KVh97EErHij49",
  "key6": "eu4gYFdjDnphJgWpVVJw7hWyckHzWaMjojXpqwjcqy4yTj3PcWEmDmMGYYYMzWBHDMdAPAAosuy7EdGjB7deGhr",
  "key7": "2eaBZWHSuLu5zpkrv8pgxXSoX1bYeHzRF5tKZWpzHTm8GESmjTbEY14eRch1XtsnABBx25ub15CaVTNqQ1QPMgaR",
  "key8": "cA4AVsx1wDvTBb57EHtfa6VVFm6AQ3CNMeYZ4Qdcon9L5pGaYuyzCrTURUdRsjXaF9mDRGkammgsM1krC393FD6",
  "key9": "2meHF9UdYAR2RVrD21Z22SAD875GNkQyxVVGRGBJU6zUU4foid2vsNMGiTC7C9iwpvLvnB4CBqZFatUN5PPqdZZZ",
  "key10": "o4TN1j7UdND2n46f3ptC3HdMtabck7WVLCwP8DMQ6WUf67zRL2cW7SZPQ9Thr1JBDpwDpak9oMCKmgCK7w579vR",
  "key11": "61hzsGwzssAzjkN4Gdj3raXHka8ND6JggdseMNUMJh8QE83ofUAvLubWzYeRFW2sr78feEPLmbn5iqKDgHY6TA3a",
  "key12": "5ERndapN53NuMvgjHywDac36e9MMJYfX8LfzYUHKJkJ4WtsXgCbTbeMQgdkzRbEMez5DnMd2PhWbRRga7RupkwPZ",
  "key13": "2U7it9aoHyqzHKu7ncJYxxT1Ek5bMBvqGjRPtcdCWVR6rpawUKC2hP73isateLXr6ijPZVhzWpVseEYATvPx3Shq",
  "key14": "4CRXPpVAGfzpuv6AwHjHJjriigq66LoHG8MLx4meA6beT3G68LxuTiNazjnSVDYYhVTNoBcL84WLd6zN5n6EKrmU",
  "key15": "2hc1y3ok3UHn5CCzDEnmvUEX36hS4vEprfqbzY5WgNTXvdiqc8tLF6yPaTLg2qPgCuAbH3mk3JfQmGygDrEH2j7W",
  "key16": "3zMjMp3oP7SAbtRZNBFmaZpHTvDyxcLJJJmaLBsvw9Zx7mLmeTZe8gmUZKM2wykYiF29acWCbRiSdfSwtuE5TtWk",
  "key17": "25itm1b2rBJHxkYK2AF3T6H3r6ph5cfEAQMUfQQUdJ19pof7sgfcxtgf9e2nMYoauGqa3126UzztdSEPGayvgjPy",
  "key18": "4a1qQ5uguUfSEpvu2vNwN82jXkeP8z32yuMd2h3qG6zmsaoSHjoFs945yaykz54unkPutWU1pzBAqGKooR5oP9k6",
  "key19": "hcuhZJtEP9wzR6wRDAghtxY8Y2UskBKkSiVFdZh5hR4kG2XLjq9afjULCKWuVwgDjojVUmdj38BQKJE9njKPPjV",
  "key20": "46uLyNxfChtY2NKaPux4ktHGSTixwJtsZ8bMcdPkrytxaP6y81jR3PhEGHvryGii2N6oXhiBPMyAeFDGqRw1zmRu",
  "key21": "4T2Y75noAJHh1bPkuKZi9Vzuvxi4w5tydiNYAuDgygNqvKa6HVEW1rdkfsXz1SeDUHCwijbyoewNmVbutPde3VPV",
  "key22": "2AWPthfSJ1GnaHQHYDu9PyFmTE7yki2ZUmkn94mAFWmyT761uWpEi3zgpFQJzZ7wgbgpW98FjuM84BZUWPXHxKam",
  "key23": "FJiPVbiVabjKWt1j5Md47Skpe6XrH5A7PE9pLgYf5vgZ6qiVxAC8sHUTiJCVue9NRJL13eeAco8GmLSqWavkLTK",
  "key24": "5qeH5ZEgseu5YHd6HNgngPfHwSe3pZH6UNPt5RG3XsuVgzyTfcCi1srv2uJnhsYpYRDzZxY9kKhjCDtewjBz8yKp",
  "key25": "54uXx9hH2vqkeU1r6GpnZbsCY29f1btBYi8gDV9g8Y7RTuTb5PzCc6h2gJanK7C9njWbPBYJUWkfqwxdunYW3VXB",
  "key26": "3CcAiyGWc96wmvox1an1BtDjSG5wS8Qay5GE9Tdcb4Wbmu1ZPQyNtNbHptuDYCHMvQhv4WAUMBZ77dRYdSFimLh1",
  "key27": "2VL6mxSdQx3J7fDUDrHDtceectMdjLUTkdd8sALjtvvSxLUWMMsHMazfQfgL2u7zb8bD5tJv4X2MNRmUKXxz2scn",
  "key28": "53rwW6CcD64u4somczfZMQpNETYohqYRkLUbrT4GTnJQ5u7yW6fq7TowbSHQKNsREE1vaRwdJ7sfmoksVnfthtUZ",
  "key29": "5gJvdGuvfZyqccPcB75TWXwqE4t7EFyaFpKEt9MrzscabB384E7zwaqvYVbCMgjMG6hRDF4gF8yUQwyknnzxMQ1X",
  "key30": "2vwtBeUJbq7ZQ1AxXtK2ncgjfuEx7syzWAaDEEMEwk2bKmeqVbWefuiHqSpJdY6QHQRhvemca3jUjVkXwebMv9u8",
  "key31": "3JTk2cjzEqBaaf6KdvKMXVxiHeNuaPCQhqkto5J3NnYYXp8aMGdG5eraQoMCPvwQoddFQ3B4VyE2xdkRDaiAsi5L",
  "key32": "4Aq1UhjrzziRgYCwMQ3NP2Zhzk6TunfMdu4qokMPqAVtNJMA5Zaw7xTq2y4pYt4eB7RyUdpo8nSCtrJuQXm1hf4e",
  "key33": "4VrdjcM5MRyZgA88nEFA6ksejroDsVJDvCmsRigRFTFZmNg84VTHyzDqV9h1i2uA9Y8bCDuAGkhjWMpEEyBa3ye",
  "key34": "4YYmp9pD987v19qczi4ceST9XzcfERdSzLTr9EiVgm2t1XdncRnuxTo78R7ecCZrM8Jn9YdAwnQjSfSHK6AXZASM",
  "key35": "3vhuwE6VRc7fFLY1yh5JuvTgNqwetoAcyeFs8DPVMcXffdeLH4BtgPmdNPYhcqD3qUJb3SYg2pGakHi4rwGt6f9j",
  "key36": "2gLF2HBU7MguhdE9xWBkfxRmNPcyv89G6QFsUsZBeaaQN2dh43Y14KhG3q8JeNUnC8wHkCfdfJn4msMFsyukq3F3",
  "key37": "2dTJpFSNeanwCDPpiUasSb6uJm6j5QJo8XDZxAX71Qx7Zcve4RtsXuhaxakXJnhkZQN9jfhjnCSCMyZGKpfdU4wB",
  "key38": "24xDXrJWrViSdD3cPXGPC4T36XQNpiyvMn1H5sDsirSVAFGTU9uPz1eBK5mMsSCWgY4UcVHEd78AQeccjMFDwuoR",
  "key39": "3kxnVtMaei4HuwhXZ478i1WoyL4czV9pYU4rLPd7Gjzr3dDXx8akcU5zyCKPNd7hGPmQWV4a5xESPdp8mj3nbEUh",
  "key40": "4Vc9g7utVCvrC7faaSSJWWrjXG22vxEbV8a3cUqkEtwS77xVi25poQb1WtDnno97o1NigpBqnU8udg5gJU9xPnyD",
  "key41": "zEte8KSEzBNzZzwRcPWEGjk4Mkv7j9UdV7nBQ5ZaWYVmjrgUmMCay5vV5j8pr6Xw1ro8vCNAhDWf6VwkX9L5Ho3",
  "key42": "2rtVTwPabU93iZTvF75ExVwwKMWsU6i1eqvfwf1FNZLqcrd1BCwApEL7ZiDhm9fw6tZp2MCW2ViCJcHBmxUBXiGa",
  "key43": "28XuGxKMp8aNCEfRB1j6Mhoe7guhzP7EAwJFR75C4YPc5wwWhny3AUw5b44gwAkAYZZDtfLBffiRemHeb2Ph9vb3",
  "key44": "5kUJTTwXtxCgx6KrwqLqGC8xqw4NcqWsZ4YQqd72U6JfpnhGm3D9VFaPYcGUPi5XQNPdkE7WzshCRzAnBiuKPdyF"
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
