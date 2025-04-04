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
    "L4DQ3myUaPNUMAVF2W5pfAiaQ297tTc3jWM7sJqLjZPaK7wt5bsQSfrzpHvwiyxszQhujXvxcnaNRa8SXmSjpjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VZUSCfrydXFtKn6VCPziWuSRAJZymshXMZJXQgt2PtpiUF9s2PYiSNjoVkQJwBV821Dcz8h1554EBfdRPFFggm",
  "key1": "5VR3YtBQm5ULtdB499x1tRj9mevJv5qtk2gHJw5PNN2PuaAb39WNFFZaZPgxzyU2EUUWxMHEpNqcfHq9eAaGcHv7",
  "key2": "YrGWLZw6L2UA5z3NLjLiPcpVjHKa448F4cKwzAYMqmfeMU3MDXAUcwGx9K52idshj5fFMTrxG4NbvoNnnMNr4jj",
  "key3": "N3fgE2S2w6j72QzqqpmPB95BRvg9Kc6PGy1DHcaeMYZwHpG7rBMiGQbgMV7nW62aFeQthu3QeSFWZRmyP32MMCY",
  "key4": "4NxhQHy6BVeEwos4FLrD9qnNsQk5vYdQMFi7iHjA54ktUtzCGfcR3RybMAvwJmAFU6JHwhK15dE8kNuxuCTRy2qT",
  "key5": "4qTc9WuKoQHPk6cmXpZxAPgV6XGBJp8Q9N6Fj6RmFZS1MqQWRD7XVkmtxB7GsLayhpw1B2RERHC6w7iHqaoEaiK1",
  "key6": "4snaDEdbJv5TuQdoC4UQMcgUGiD1zabkbEPTJSLMFx7jXM8xN4i1zdXNUdvnWGRZFjT6hXhgGsRdRD3UxiLfxDKV",
  "key7": "CWvFwpFj5ctFHBxYY28rBPaV4ALtkbzqaifv7aBQcQymNKf63uLqvWSuegdm7HshJSLNn6wPb1a6h6uTXJFKMrj",
  "key8": "2EheDJZpWEjaMsjf8EhdnpDkU8nX73Fx3Jar2niRZ9paJLXwTuBn2TRdLi9LBec3PFtAwfhkWLxgJpn9w5cA3P93",
  "key9": "2aiaxZuHWGZc8vBj2mUtDnBYWskmvKwBQM3hdhb58coT32uvKx9wmV81xxu2q1UQkYDWesCaeRRWyguXzZfa3Kx4",
  "key10": "4ue2dDKex9jg4U49QJtGrtKHgzH3FP2kiFXqukHqhy5QuxisEBAAWgoRyCtZcVu75D1mVNMMorSndk3fkpoF3KMr",
  "key11": "K9REe3k6LaDrHy14a4MQJovDFPNViN8uN1hJU1iP5Cc9S7xHJZ9p5uzxBNZGwWeFe9QGZD9DQDykcaG3VdbEdVh",
  "key12": "2DxRgwtgRWaMr3JzQSsjKwCCHTQzq6RDPPUb9YteW3GDiTooNRUnF8CuLfoZNvJSFNgcPCxKjqCqmotWyCdWAzTf",
  "key13": "2ukqsxz5V3DEseK2y1qkmqM1vdnU8pyiDTgXbE7qxWWo8vRhKXppHyUy3Qtrz3bn2oRXoCQr9pU1W2CEm4ueLTrn",
  "key14": "2H4m32b9qhTKvPhBRrYuSVnGYgPfeMDpcH1SkDQLpzFW186q4zZvuc3X9udG1U3L85ENLPf7er6jwU96JpyvAKte",
  "key15": "4VL44bUfqrvy1L5KWCytaM4FWyhq6L3DdxCuUogFADQWXkA5eAUxiSULQCQuepJef3Xc5vXmWYsj1ntRsEgR5T6y",
  "key16": "41MvY3EE6hTHHvvCfGY8EHkFZy3SFrbGFSFuqBHrMU9aSZvsrhJJzHWTdWefyLvu6jFLttGUMGTAEgfvsizbg3m5",
  "key17": "32C6MpJi2yPJckWz3GeeudSHG1vr4frRKEDnozASp3W63LFs6RkJ1pUR5BH3W3WBcgYf7s1LtsQHHUyZwEnRd2se",
  "key18": "4NRX1Z6TDJJp7noeTrDWUF7QNCDCjdJzzapCip9sHkDPLxcxHCJsv2hEfVYzBRtguD16JRxy9rdY1g1eHVZE1L4p",
  "key19": "4V1LLBRL8c8GodBPirT2j7j7M2N452YLQJTMcn1q9LufdJKHXmYMmYUBuwShR7A97vuS3ojWR5gzgSCv7FAFHUcS",
  "key20": "mazoWGaLYGnrUVXUUxk6VpXcmmvHLC2uRofriY8vcsF84V2XvfpdDLpX62FpWihCBwhaJpUFZtnE9U17Xpmj21Y",
  "key21": "mLzFN8vbUFXX1fi3FGGbieKBLvECGB32rcacq1GhAHm6d1MKPkCn2E6AGhVAGvrcCh6YuDd5QUZZPRNRcrCpMtF",
  "key22": "eXuH4p4aHRkCNqf8hCVHmnojN1udxmYpFbVhS98y1jE1mZ3fxRdJRsENHnjQT3GSbPegirgPCBLcnnbqfufVpc6",
  "key23": "5xENf3tGgunxJBaju8wpjMxXGHaS86BejMaGXAbp7jqkbm6sfGjVS99Yahow7YR23CAFDo8Nmh3RjDPYGFwRG8Z5",
  "key24": "4ZE3seYwDYXKyVniYGEa9YxEmTpyCzNic2vsPzitWpG1cz3zPuBKhCnUMxK6aepepaevxvTvDmMbrqqix1iT4z9k",
  "key25": "kv2xNcNGCKVm1vf5MiBJaPKP1a1bk7SmW6XjWcfcGvULeCmSU2BHnxW8YiCx6oKazog3YiJMBNX8tSYU8edq3t1",
  "key26": "4hTCPKrFGkeAtZipGea93ZPoPyXNzSR1VQLuss9fscwVVVekqGftavMsMm88JGnV6FaNLCqcG7EGXEXwt4b2i7U5",
  "key27": "4kjLSswWwyMxvEnTd15e1LyDifVzjZW77T3dkqCauEniiuhKbvZFmqq98Eh2qbPX1af4ezAF74F5Ls2QegwFGz7T",
  "key28": "2CwWqQqHEFwN6qPSg6ezGe6JtA5zD6udmvEG7y99nhWqkjA9yEXFBskus93UzkzpwdCfLtF8xrEMLymQ85vDPUC4",
  "key29": "2qphUyRDkGAszjfasQSb7CZJV6xpdqbsXL1HGkC7iJSh6GM7bpEUgaL6z95EcsX48gLZ1LwWb343L5d6VEMsh5nr",
  "key30": "5t6B6kmgrPfMHqF3C2qReFKyPie45erioKgM2XXfdLCaqSqQTD5EvuHF7U5RNJZdWiDwFUyST3454ARH5XSAM6Dy",
  "key31": "5kGonrWTU2i6jephV1B8gNb6kdSn238Sf8WzRRtUcpCpHtSbrTTF7NAQQJjcWPQXiUB1U4AY6zPbaAUaztFnRWmV",
  "key32": "5yDui4Rs3MUkXQGo1KDjCEbeLtKpHFvR5Xcnv5k2vi7aHBc44yG6xV5JfcEi4tvi4xyyBWZ6R35iPzazsZ3k8ANV",
  "key33": "gVwpKTDkZ6rwcTo8xWb7UgP28QEfVekGmLipL7vuzdTNyqf1b3tP5rnfXaFimJz2SWPKXetKeyxMHFaeDTk7bxU",
  "key34": "5suPF2BNSngiD2YcdDb5VCptUZ4vi3svE5gViWnfpwckD22S67wsyT473krN14uUaE4jyG5asziWwsZPX35YHK9N",
  "key35": "2UpQbaFkShwRdXMdy12kg9iwHEC29mJq5q67z479sqjhUun8GXqaW2EJwqSaG2w6vbxTiVRq15GVHwn6oUP5QBeg",
  "key36": "5TDFz2kUuEN1pQdQnsechu6nciiGC1ddLgjoHyGLpJmSmwNG7P2M2GkHFAVz3wBSa6RhNEzBopwz4iiY2PWkRkEX",
  "key37": "Eva5999oW1erpgq54bdF3wX4gkdhSNreNSPSmWNMEibnqbFfLSfaw5uzfJpgFJhUywa37G1Cvf7kvMXfqqtK7X4",
  "key38": "31gyG8JXVyJrB1xDneT3986tZdK4XuhwAg5suvoieSD6LNCS6zZ5UR3ivNvfzirm7jc2iNWDVzwTgAMfV8T6qTRi",
  "key39": "2NnvSfu9wefxigURxgnUJP6ZAzy1j8nby3CscMhibsvaL9cKxyj2w45u4NirxK4tiNpPq5uPKVNSaKVj2sSF9WM2",
  "key40": "2fQGZpSbYoz8EjpoKg9d7WJKjpGKW1XediU6Ww49y9CDmr189CkLv8jxfyS8xG8FSJgh289aTAR6fAWiLxnoqg7P"
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
