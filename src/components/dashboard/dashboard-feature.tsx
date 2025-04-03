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
    "2S7J2BK2p35d5UsuKuLDXnR7gNBLh2NQxJdWsXvW7nuCD9E79PSg8eTRrYA4xPzU3uYxUJShNGYPPEPsDVAWYbo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWicJWQLxUTCFT2NK4Z8FvjjquTyYvnsrGCAqQofqCux9JR11As5MSkgU6g6uJRGMCF9yizWZvbrVdYKXzjdVGN",
  "key1": "3UkxVPkV91ZuZibS715Coi9jyKvbSB9HhrAoua1wbxR29Sxce64xtXr9Tt5nFyvC1Uo1dJkUG2Lo56JPTfkurj3d",
  "key2": "5ASs6tLn66sYB5Nfz2dkQtE27nAbQeKAXMDWy1F5rS7sipDBDXe4php26KRDy872dMzYSqdjbExotAWBd3bUprcz",
  "key3": "4T2b2cezFxu6fVMxGKfX9ycuJETHroA69xsf9dWLZhgKoH5guxRiBMeFnuH4hYRC11yCfitNxG3MpGAvxwq2vES2",
  "key4": "4fysqDkVD43D9uxGB36n75PV2RK6HvgWcgMbqHpUjpVDEf6jXedoxpPsHKb9Z4N5R5LwzUxYimT38Rz8XiyPFctJ",
  "key5": "4VQ9PWcsjNK9RMQqPcUPtuo4K3JVrPDY8Fozu85BuoiUPEDbX4t6dwNkWj8ohZhaN68kEfWgYMeyUC2BMXXNbrMh",
  "key6": "4RMQbv2N5gvxYstEFBNwBs1XxPJA4WfAoCYP7UqwKrJgQRc3J7cnEtEXHA2beeGgMRFZJSNNnB8oSa7oH9tN9QPJ",
  "key7": "2tRxjZqWgDaKwrFeuoccupwGUDE12KcwNPm4bucR8LqbZcTte72exVbu9cTQtB83dwvaNhJVzVCtUoVGqqhJQFJS",
  "key8": "MJgn6Wipy34v7ZRMryXaRnSyNLQfwVcU61DNyEej3c5sibodUHvHzzDogAV4PoMT5be7HTCwmNdfxBd96M3ZZTY",
  "key9": "2wKiEjWrYG2S2VSJWZhGRpDMAq1d83bBT3ED7Tuuk28kqtqTHrVMjGYusNWrbeC8zokRenv5aLJvgKWRvEsaL8cV",
  "key10": "449qMST6nXbEwdAuCrnexYDPJQG2dd3gGKJaHXakszpvKy7j2ZLiHLv3sbZfTcNMWEo7tVeH1diQ1CmXMmGJhnTL",
  "key11": "5RKMMHQmRi2bfda2gQooivehihfPFEJUjUMv5HNVyk8Fpk4AnHqMHts8ee5JC2TEEXgerLiEx7MAwhX6FLvhK2BA",
  "key12": "3Go927Gr33VZdm3evu99AphXp3sBgJoHyQfW1TmTEgFMRLViW2j3KUpmnhRugKi3eh2HPWbxtiKmHyYPqA2WLDHS",
  "key13": "5EqB69367A8A3vNgy7q6M5T475y3Kyx97pwgDT7FJbp2farAfFX7a2CPaYjL4QSdrbKctdG9X6dLvtqH8JRgcFTR",
  "key14": "7cRm6aUMdKkHC7Qf3nmSM2jpb9aMZXLwyggxbEkS1cTNQmi1HYCppCjG7Pa6npiha5utiZZZrBs6qRB23dmfs7E",
  "key15": "52ybVQhj4PkjQrDpyUxHqKDq7NkTEAPmPeTCGTiUKakDga2E4yL4jMT54wfcDvXcqqWzGRZqJCrnCXfc951TsQ6A",
  "key16": "5KPBhzCBQiY76KCPoiQVTe4PX43FVge4bSS3FSDYntwqmknShe8MBT4MJvihqR6NCGpY7cCAV4HZbeEDm9dX5hwf",
  "key17": "55dycu7TxZFbFQ7HGfEp2CoPshgvVPdUm82R8f9WumXBFWBqS2sFqKEyJ86WVXDQFi8WB5hWJd6SbTRcwqf6VehD",
  "key18": "5EdwHupMJNPZ4BAHWr1CWq3jxauX3vX4Nkyedh6BeAxFgHz44Qj6PigNHBK4ZErLkbVaL6vZZH5i1uuGVUeG631W",
  "key19": "4cu6nbWGBjN6AivziS64evVqTKdxAk8EcSho3F9axYbhbpFzm1TeNZ25bhv8sjcQr58SN6oSp3haRz19YEsn7kQr",
  "key20": "38nrD1AMwdgFT2XwFR4LPoDSc92MDhffTnGHQF7XZQ7ymZuP38xqbtoYLs86sFd2CVz6Br2fZFuwvNKMn1BHckyo",
  "key21": "46NpxfrwuA3N41vUjHXpWFsC7wkewmhgxhEggD5ZLYW2AcDJLBmN3z6KKzuYFiSBbnd9AweKsPq2hx5dyj1qhDMp",
  "key22": "2b71heWq3FT83eQnXAuJ66m1x9mp6wpWBkMiwzpUhnUGJvRW8rFF2wNWAePiPxhDvXzTKbZLqJMegXDypQq3MNKQ",
  "key23": "2cz5eD27gnfCHXviyWfsbTet5rpvHUXGS2CqUgqwso7uFpWfiv7s9cASyY6nTHdqGrkCbm6ZdJSQEyBDqxKaTszW",
  "key24": "2Mrg7TeKNnfTgFMMijcaXWvKNsujduKcw4F32KXB52VZN5dKLnoxQFi2oVvpmbQMhtM4sKdavAHUj13q2Q7RZQo8",
  "key25": "uJQk91TNDifU7LB49Kpmy8yL9weXWLftrjMepbvGvdYXg2EAmo1RdYoopkAzpxXv7Dz8K4pWYGpWx3D6LaZpvSw",
  "key26": "4mUTjxgKfZTMtHmWKzpm6A9apqwYYZzR78D2AeA6AtxtzWZgPjLjbAKUHBseTt8ztz7VtGC68R2pk4LmNoocJSBE",
  "key27": "5KmD9GaqjmUFp1UESveM3KpEXmCjZKWQX2CYtH7n2At7ikrtb4nUprvjienbvT2AkarX9tS1oix3mSVNpEsgwWcw",
  "key28": "3FZYVqNCQpwhZKFukpVgBpHoc34QDaFkJdipuRkmZLcHZh4xFbuqkEoy9BSpZWtsZGT8kBFJ4B47S6v2afbTBJoK",
  "key29": "KtxxDmy3AjeuJ6f9iUDgNyVeuKmZykHx4dhSuhrRs5P6Vd2zEZMFRrohJ7CKKPZc161hXKuxN3hGnUn8QZ7kEvR",
  "key30": "Wj878fv59fmDMjp7r1gM9hJPa56UKq8UvnsPTyRY1HUyj1KDDXGbxWM8Ks4bMGptyQwzkbJWsK5DzDAMFLyaiup",
  "key31": "4TCCQ82z11PuQQN2afyxxYr4MpQpz8K8EgQQfttVcSaJqVefpw2hJHT7P4WgeKGR2bCpm4tLhwLFkvF6QdVDCti3",
  "key32": "4ogoYrhy9mtmZHkXwhWTNHRCiADVYCAfNzGMt7xwfhfxcKEccWQDHe1c5wsx8KDgtgSrj6okj7SMz5KaazRcuaTR",
  "key33": "5No8eD4Fi8x6NudcYbcMCghdpUH9ws6kE55aaQ5obyHNHBrJwhQcTDJ7k1Q58zerCCPqr7m6n4i2MASU5J6FXKip",
  "key34": "5ZBkoB3ot1sHKgGQRp5GwUjp5BbxsrNSUBU6JC6ySTtgTkL6Hp5m3PpVJj2wpH2qLd23s7aXoAmoJrjwCavRDjA1",
  "key35": "34mtGKFGA4k57yiS6Jr1XFZyeGjWhuxJCJkBbCasCV27m8afpDHgQ9kKkvVMDcFre2jgfS9P8Hdy1ZzeyYAtybg7",
  "key36": "ufthfo61Djbj5jaFtipmAcop5UWrpEDKA5iDJXKMhgVa6PDW9qfN62RoxjAmpXDxvaAGFwyqikPTVkT7GTy2svy",
  "key37": "2mQoXZjbkLbtcbo8dpB2hLxFkgXz2M2Hk8rfj3Y6mMmdDV14f4c68K8BZvMcK9WcEMXuTp1fxtsdLk3xwgEFzyKM",
  "key38": "5MxrSwZFrhJRTkcJTAYKQePB2nkWQuCnazRcAr7gqLezqhj1WcKxH91LHLKgMd6LACMGKh4YJ15hPKdzXC138e5K",
  "key39": "4UCjZ9Fj5W6sJx3EtMyCiEm8kuYGzHdPU4JxrZ16Avaus6T2xVzpgUURA9oaoCuLEyfZbHL5tuZzZZ9NLK8i9vTr",
  "key40": "2h8XXXDMqposXMP1QEuNNU9chvvvSypwcawgVB69JGdcTuyFskQM1ZC5MGTuKVRKLor6AvrU54LW7pGtggpZr5JS",
  "key41": "5sPWUNNjy8GCuN8GAvBbsDhru3qHbJb62y42v6NLuK9j42Uo81NDb6zZDetdcfk4HuS8tW6dzWBLXvsb7GKKCQpZ",
  "key42": "8u5mqozBS9DbAbnDZqT13pfEsGprbTN989VXnMQX9eDdw1vpT1EoWkh5iPLLb7CdSqMuSPJmXh1JMqaCCufxMGc",
  "key43": "4HDZ1kcbzqKSVLWUo8iZm8c4cWbxqndHM97Pq8FCHNZwwfsegzjPU2Z8xMqFuBNF1oiw7UGGMAr6haAVNmvYQQbY",
  "key44": "3M9tpqKoo34zwV2647gPa4QQL1PXnRk2vdbwsQV2MJzDRLL9d1xZLfCWASXZZEDuhByG3afXuhrTWh8oQV9fKfJ3",
  "key45": "58Z1cLxrPLRMmACv6BwA6BdCCCHshBWzxxascWcfEBzfMV8kxFXb84XsgM3987FDao7Fcn7h5HRBpTDHaFCSdTeH",
  "key46": "2DuxpYXuSjWkNgf1ARbSoCtPJcc5jDAJzEn5CTEujHJoMqPpWLPR2VstpFUsQAQsPHCKGh9Cs7gmR6CXRg37GfNd"
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
