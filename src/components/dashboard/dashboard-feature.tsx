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
    "e5U3ghqENDxDnk2e5nHmR8qNwL7qJosdtbTxsBrd1G811igECMnui2WJjWgjyDu5Yo7WpmcZzGpoLdxd1NhmX3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5dx5P6U4wwz9xvmzhQAEdX3Grgvc82s8eHZrTDm7vFcpkgS6G82hEZvxf71XUpm7QU7ZrrE317VV1EL2FhJtWF",
  "key1": "gTcQdeXGaYhpNqAtRVhRuEGL9a2VLc4Zzu7VpSuknG2ASJDg2qKiXaTZ7dDmicBzgu2JyZqqyFca9ecvVXn28hU",
  "key2": "4qQaK3NAG7cxV53bg9pLnANGfipV5ioZmEAtp9Z2JQy7dLitdx9PkjTFMEJUZXUsnCGvRxTutmKTK3k7fEAi9hXm",
  "key3": "31e9XptegbLrhtEjo48WLqSN5EP2UW4HELj3LTxyAWd5HNqSXQVBGBUMHH2a95NgJZ4z93TwL8HSZkBfWyPYNsbG",
  "key4": "Kx9HTgmhyvU7wwYi1PQ8wEQrturwAkiYdY1nnt7BtrnksTb8CaeaVJek1kqAZuFxqV16VLX7mqHbUQ93ZJy8JWF",
  "key5": "352VsuCtSdmFeQmQ15jyYtVRRCUVcvVPnZJu1ETyztfC9iEPJK2KVBgx6RJ3v8JgobLg5ZuNApwh17MJsHr6XUqZ",
  "key6": "2ABaLMoPhxkzFYguFtdH8Y5V7QAgK9iYkdxhxCKuyy9jqb99QXAzy8LV3pJqF6Qjjp6GRx2HfCJUY9cEZ8A46j3m",
  "key7": "46EuKWuUpyFaTPV2sRmyNkkngzBkS3c7mkMYNe89xuHnfi5EBehtX3ejiyjcHmYc9cFjvh52WfdWoDNu1Y2xGr8y",
  "key8": "2DvgujeEwRB4EYw6cD7MnYK2EgHRZF9fyJmMUEBEqKa9sftrpbz98mzBzSqosUhjPQezjd9m9VBoMrndnBvJnY4u",
  "key9": "5qhKQ9E5tFiGF1JGLU1kBx7yEwG4AninLXT7v1rJExn68ZcdKEkd37MSJZixj1HduxKJw1dttuwyEMVkj3Ryh7L8",
  "key10": "5gXP6ejuNzksMj2nr1Ab3KrLBpRPmArpza8uzymQabTKdFa3U8SCzmgv4uuFn8PbSqRrU4gD9XxschdwHi7TAApT",
  "key11": "3BC78PbAGnPpPXRi4TGbAnU3hrRs1QnMCs3drV8WwkfBqp6hoFBtT7QmoeCS4ENYDDbke5pSfXLSgSph5qo4zA4j",
  "key12": "3mUj5N6AdPxEsi9HnDeYNd2RyvrKoNhtbauuRwzAeLsnmu5QgM6EaFJ5QYJCfzACwxodVMFSYs1HDSdiiyq7fqwW",
  "key13": "5xDE7QF8saoPzYd3S72eanYwxj3FR3L13m1kmojNwJ2QBwivRKzGPnkjj6naCktyXBnsaZHdvP3Ynt12yDVAVC3C",
  "key14": "2yffQa9RRFCx4oSE6kM7GRHXuHRPeuJEv6Vg8jeGViPFfvwaoP77XtefXF7uGzsxYYaxXLpUtvVk4oybHq2eq5Mg",
  "key15": "2UVnGc7RYpSQsXASdiSoTaCVHKuz34qfD6NScKykX4oocmivAzF25JynZhhUDEapczNjq9QpMfhuNnZEeYVp5QBE",
  "key16": "31SJs99ZNW41rVKuqNNU9HFciPdHeqWCH7eJPMut9xBfWfQomkfGetkRhN4aytuQdTTU2xqVPJWx914HZ6Hoia8c",
  "key17": "fymCbuyYfhJkbraTV4gCmcD9iv1xKWZVLQcnQxoaeddYju1Vzvp56PhXoxMm4TwEdqJF3EfVGZDx6h6CdVMNY5i",
  "key18": "3CX8sva6uKKKs9MyA3UQcqJ5mMf5K2TLJrgQKC5sz6z9mkCmHiDPJ7xEkeDVRDupkRGco4ejGaGn8iZKFuVi2sJb",
  "key19": "Be1ujwkLrUPjDV2VoLbf4437xByh8biBbNY5qMrNWdqjzbdZY5WP9kUsLHhTTwPR47FbHEg1HWAch1yvkP1QN9P",
  "key20": "t54UvTkGoChZWoTJS2LePurcMfiFRqyCKs22rQX593LNNsQ746qosYTVTnpUK9kweA11BNmwz8NvjHPtxBd1Bzh",
  "key21": "3WCuUa4TKuBvToXXsjKBqV6JvRYG3zNecLEnqQxJAvu9W8JbQjrAJWzrLpZCoV45e12bCnvo3MhJ2rhJ1bZw8GZC",
  "key22": "3DhieHbC53nYmKNmyjQqR6a1w5JoqjzfX7hFeUDQNgxPD4DUB4D2daDdda1uFw7gEjrX9B9WmFtv46ou1PJ8XSvp",
  "key23": "2rVSAqytNW9R8miSCsmJALziHtFHpzHFrvT7FNi63desYCuiG2VccTg4GiNMnmxCWnxym3xHxPiqTdjLjP3jAobF",
  "key24": "LptwQaAs9vS5rKSNgEoEhBY17SuHsYGgT56nkuqf3EKQN6az9145T27CjeSMuJ7jiQHU48ffnu3CDcq7EtjMQUm",
  "key25": "2KKjc56wEsz2yjikSAxtxk5opXjH3myUzKoWkqriW3kd2dTPH7Gj4qSz42Mf59gZuhxMENARvx3fhtxjdXsv6q3A",
  "key26": "3HGo3N9UMH1QM3gqp2gf1Lfn7ajPYcZay275zTsQr6YYG5q2SsCm5YpaKa9NB3ayAcFohhwy6pYazvk5xEaKNzyH",
  "key27": "3MBgtSMuZVtiDpc3N1momeoBGB513bSFKcvUyzK6fLS4jjTsbVo89zjxiHfjCqorAoqYfxZWb6eYJZLTrXNTZ2vi",
  "key28": "3BPay6wpcHvG7Kx1DTMexx3XD7AGi4BL2aUKgrogPsAGJJbgVqG3C1V49T1UWtVKVw2FVWnZDaWFofmtVssaCNt4",
  "key29": "U8YsVpuFAbpgCevTaWmHBcbpR5ufN5ex4E5dMFiqCrk22KRSq9Ap3nDM2quSBEJmTdcVyqUcUG94zJDe67zJu2j",
  "key30": "4S3jAyE2yDrj1whHV7VougRzJ3vvkgssyJ3VyU2ubpJwPqtK3PUhfS4TR4yiBaCdg1KrmQYNafkCT4S6XrVYPeGT",
  "key31": "3jF9B5jjnubLvLwkdytVz4DmAyVaBsAVTm7oBgf3PvGPhQTwrhf5hERucfU4FAKi88KvBqQssckubw2FoNiN79r1",
  "key32": "4xHj9CTdm9x2qRzCCbfGeuveCFt66bKHE6M5YM8DWBnH1GmQbewz9rU2iavHnNtGTSA8qn1HDHMKmFGs3RL22XNL",
  "key33": "LvSQgexb66LTyce2cjapM7G5VY3yXQmXMD5TuoQzrpPKchKBczyoMZWaQdXQt3b6G1a1pHFWykAPQmhgF54whTE",
  "key34": "4wSJN85o3XWtqpx43XdpjFEND8ziTkuYgyuUL1ViQQ6xago3fXzVE7AZexFcMBv5n8cDVXR48ujBoVAX9BzXGFYS",
  "key35": "44yckHU4dCY5kH8k66iCNHye7bQzR85gLuLWJ2wihTS7kKPZAkSp2M1PqcaHMNG1Rry2grN6vavHDpE4r7R8FZwC",
  "key36": "5NsCRMJA1AcgqPgPEqGex6YfX1NXEGoUcHjyUJWChfEfeRT9TQuntV74T7yditkZ4v7ZcNbCDTCFh3rFJfk4ZVdM",
  "key37": "2Lj4LhehH1NQ6TL9yN8i34WDXFstyadTMzka1i6f8taTkQbN1FLPnZ6C4qpA5dziB9MuBE7dUCoiHjK3xtnyTbUm",
  "key38": "3SJS3c9Hs5yJgmbMmWeAtbYksUYWg3LK9NaLjxPjMnPUogdyEcaAS7tBEv5hRVwX9xhi68icXyTNQZxMFLLcJi6x",
  "key39": "3jHjop4WTnjhwqS6rAq1bvofgM8YLXj6UYxrguuL8wkyNKGPZENatWiXbgSEzQmdJnv11GfbK3CwjPGNbG2wUxje",
  "key40": "66aZq9xUqHXpNB8vHS2bXiKZLq1EvtiBqhYSps3iguKKzfsGfH7mbG1n9qe8jocKL7FsNCBXqKpS8sY2CRk19PVt",
  "key41": "4uwif6RVtos2VRvwbs5wVAaLekNoHrW7Pgte5oVcHWiabHZzTJkuv8eJnTSj2bmNcHnVPvKHZmJcX3fpcKJYVTgH",
  "key42": "4TxD8SLTfkrtJ1zWHsPn77UDRSf3E2zAhKWHqmmTxQTqoPbnQqsSSsKxUn4uz5DbxDTWdsXQLq6FBSsWuGJUfjqC",
  "key43": "5MuXMUjmgmJow5sJGiQiCnhw6by6JfhCqCDPzGWoaNaVeL3YnSFpeu7Sgx85QxPaSES9y6un9QZk9zS6VHRxKQ8c",
  "key44": "4RrAeMdwT5Mei3gyaY1Qg7EwP6J1P3FVTxD79KpzWrPdY9ow3x4Tvv7XPF26c4dZea6N2C5ukDek1KRS5W4oUMQ8"
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
