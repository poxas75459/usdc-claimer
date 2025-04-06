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
    "2o9LXwKZofCQimDWy5fegVW3rX2fyTZ9nrhwFgD1K2M748mcATh1kJzD9j9cedMm5MK53TGHyKRd5eANVPyri8eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8RL6Z6THoNjXfBLb2mfg54gLEPTkatFHsap6eaPcm6KBsZRMRx5ABK1ro2ohUtr15vksqoi3JzgvFp3vPVsv4m",
  "key1": "44KSPeLJemE4o6DVw7jAV33cP7Q2HfFaaRWMH9fRa8oAgpPAcLCPccobTA3SwLHJ3CZK1fsqwCCjRedAAttLbmRB",
  "key2": "T4v5urbkZRa9L8kc9XVCDXqxFP73hhhVxUUyqzJokV62MvZe2BDFNfofetDZqxi2pWjBmPMwd936BvqLZg46EjU",
  "key3": "4SQeL7AP8CwbW8u6HzdDhPr4PGFyRWjH6yMnoN5S8T2azZ8X4gSMfU7hEuQPvfZxw5fqrjkGN71pFGBmV8qpFe1X",
  "key4": "c2DijhLEX1QbmRtxzQNeK5eYbD9AoH75URBKBJ5kxbcaS3qZwzcHgLtZsW6wNhqz8Z8WxNpP6M75UeGA5m1Y5x5",
  "key5": "2kZ5rf1bcAUted8hbrhjwf5xMWdhub1apAhaf1wD1bPZgcpxKHEVsv8M3oz7Z64f7Tz9ky5M4HRmnhF3DcdfLkfy",
  "key6": "5mUBVVfa36hwKLqsm4W8KTQmCQrHDqjRiq31ATFzQe4qszHDucVrbcd5Vw5zfm4B4eAWdW44cgZiZ9GHoC5eHMQd",
  "key7": "4aXohK7wREf6pT7pnPK22MFYxui9TqbtcU4FgA9pWqm9K2EjEF1ZV3LNmMoRmDcHpbtNS3PunYJXzVHvbqS8kb1A",
  "key8": "3LgDHyac2zBARy9Vemnug7zLMAfv2Rc5b1wRxdpCaSNCnEd4GaLJAgh3SnSCQRz4NoVgKr1QNUtsCnsWey7KdM24",
  "key9": "C1EkbLfpiMKWG5SozHSuRW672U37LHXjzfLn5t8pLpBfP6U3nRT23Zou9eexUhfN1v8HgNofeawimPH7NzpTQsU",
  "key10": "2Vb9onRBYyNyeWfLusTCjj6HJc1sb31L7weABkeWFod7fVYue3ZkRj2jBhnUAgNwW5WaW6vSDJCWpR5y7jeaycK3",
  "key11": "4w6v3uTakzfN3EXpuT4nUV6xbwGT79uW8C1G1mAQc3R44tgSgezoHmaEXUbjxpSrSanN9eXLgQdHJHfSaWUx5z4a",
  "key12": "5di7b9Ph26q2A1zHKwuhe3bdWqjab42fdRvizH3NuXBcwH5yfaNvt6TkcE39cXtnSpZ5mDL5bJng6YjK95TdJMU6",
  "key13": "4tqX8MuuByEjqok1xNFvfJzgLdDiKnKMcg2gnbGtySEFSBJQarBBMUd1RgCCCsM8yWfoqeWrU18s8KeA5K1dk1KL",
  "key14": "2WAfpiVyNp5uubgt2TnvUjS4rpds4SjgPY9FR8v179DcnE1tx4rdQQbao7xYLnxYkgo7um3fWXybs3oYDHVQAKAz",
  "key15": "2cE4MupDYxqGjcDQfJ619c8v3EMALSATVQaVvEa1rpRGh6toHEWMuHdSowi98Z4veiPJYXLoLeUmZ1yQnkXkkkxC",
  "key16": "w1R2ZpscbPJH6EcnwydfKsRS9LucTa3PfnvzFwpduqriAiFEdUA5e8tPyjUQnmQGHnDrfgwoDcUCjhSCvNXoWwU",
  "key17": "2NgZiJffxDM5tnv15mbhwwMXUEhJqcUifaYEqE21eY2jfKFskh6nMYY4vV7CxepdPeFE764qLRiAnrz1bkQe3rXP",
  "key18": "5jyQtZur9qnYaxmdEFTph8dB3k5aLWR6ATexh12r2UyWxrbYKMbsBVUAeuUKTndTm3cyymPJmeHxbEq4wLktsbf1",
  "key19": "3T2chzDR2Z7orCdNYnV1ivbcKeH5J7Eo6yKFmWbBbqVjj1yjNMTmXPFTaGFC46s1Wi1CdFQe5PDFqhdeHpWVFEy8",
  "key20": "29uQYuXbQ9X74uPaV9nMoAYEsvH2vNfs88tUqVkh2EydMXvsVCNVL6FEsErebmffbKqFnmdBg8A4GZ72rnBe91zn",
  "key21": "u5NKJp1hP15tiW1raHWwB8z5ptKKncoZeBo47VEWELorbSLtWreWdSBXTreWtNnBUg5JbAnB83AVgKSWut6vW9p",
  "key22": "26RQDxFyVES1V26MahTUcQy6Svtw5WNatovUga88L2h644qhP6pZ6xsKnMHyBTJhF3dQqeyo6xwRizqre8wzEAUx",
  "key23": "4YVuSHA9yz8yxhtqHsKwrG89dXagvZm4ahiyMp3wu5xBxeWxna1VC2dmhToypJ6zirZtTtXYbJjD975f8MAZ9Jvd",
  "key24": "5KaTFZ3VwEfmjD1ANAhGwcSqY77kACS7iumRDHNfiP5rUqgHb3ikUQFHj45tPm2atWdfEJ9oFzPTvGpduddVDXi7",
  "key25": "Z2chZanawDto7AbKfkwhRBvxcKYEzSGVFCc5Ey9F46Hb8u7x7EhJvvmR8KK4EMUv4trri6h37qdhdjRYUXmkDjt",
  "key26": "5JGVrPujUagNunPRjAVJ8cq9b5nukG8EGBm5tK34Xsui9Dzdt6ieXrUezZosy5PErL8F636L37AMfQYpi8FNkaaF",
  "key27": "283nBHBtaqvjLpXeDz2hmCxF4z9FnvAyfHJoHp9odgzYijQ864V7M9KFNsa1wNKkd6xrXw3A3a1m84a8F5AjszuA",
  "key28": "4ndPpiqQy5gPHTD9qREY9k8iHqLLb4SpP4dFTd3NvJ8rXeyMQEo48cYHNbD2twf48y8icHPQUHBLhAZX5Qt6th2B",
  "key29": "5hkBdewCAGWy7vTzq4oANh2YXkrUfQyYiojgcFkzhZZ49aKRm5zD14K2hW76F1bahsDFogPD4EeYRNJ44dXvGBGR",
  "key30": "3uz56LUREY5aWxzDBBgB7B57kSZjWQ9jeQPFwSPe5NqwMvnGwi3oakNWARsuMtjNKQRUCZ923vZT3SKw1kG9n4zj",
  "key31": "t1KnAi9EvMyUwmD6izv9ctSRUo49BY1NDreLxpALJ6EcbZHGZThLgXgWdDTx9qLvaGsR4FaetDZduQD3LGHzm4k",
  "key32": "3gofpLGQtVBpYQ6Sg5QXMrdG3ZbPsfbWqQBMaWMnes9eYyvqKBrpBwFpFkTFQJ8hw7ZmtgBVN34aEtfAFMbQwrcR",
  "key33": "5bEHE2jJtyRXCSbMFMNSNDjjgaAzGbFGyDHQVigtCZUAEnnDE1woXw9EdmRVFmQVDMWy1Yj1CcRE8AjGeSsijZ1e",
  "key34": "4KtYKA8YNSJ9SeLUcLv3guEURaty1Pe6aeM9aUfjhZLiDbwRrWRC1JZPvc71bbLszZmhUdqNvoe9HLbyyzqiodKG",
  "key35": "3vgMAzVYoYKzQPJzEoeM2jnPSZaqWsYBMRtXcKmYbnKPdaxWZvN5q5AXJNLri8ACisPxa9VS2mPM2VQoPgcZ4RE5",
  "key36": "beyDnQtpD8BVonBGvTQv8KVZJLUpvCqPDiXBTqHvPuPuNu1Z3vyCdzPoVL2W6AGhtPwSwWY4Ybfe2VsZYvBGyYx",
  "key37": "2fjCkTgya3Ru3jdviWbbwXGgktFVAfosF8SYryXynKGmm2rJvnhfNyJVqgtTi8JrG3tTss7KL5EXS4ge6P6jcYom",
  "key38": "wGXVXHcYiaw5hN8KgEb1zW8xgrP8GriqFsLhGqGDRYQv3eGPoLq5kqNvZNDKBneifcLrffKdZGFXHV1BW9QdsJp",
  "key39": "S7MAszRyaTBubUhvxRaaBUZJVjskLULQKeCMk8q3HDCYdzKmXTiw5HX7CfaCovnodVeF4kuw1AgkPUcw2cPtBxF",
  "key40": "mHGBa8FHb8cbUtsXb4xtAv4g3wEoC34eMGK34y5jxowtaqgWTtGRQAEtpcJpGrjtwQx1vhSbJ2xuU28DhHdvftz",
  "key41": "ic8m5s6DSKhcNXmcNRWZTTmHnJZzPGj94KUPpUERvaSK13rxXPXZuvkcQJZ8ioRtUSqxpnTo6tynMTrWjSMGvSB",
  "key42": "5uSUxub4WJDbeqxs6qSz8kYZjHYVP8dgRkmjdAj1ddB9S6xupoMSPSUvfjxvj7FTX7FJxEQrd4wGHDPwsiLWWvez",
  "key43": "4osN2EMYLT81ifrFnA36D4pbH1zSzTiovBKBmxLAuv3MY9B2eZoUEN84AMfVXdmHkBcPPCXxqbGyF3Vc87qM96ma",
  "key44": "2KRetd9cuj8THcufKQ4F1rxVWAjHpd46fsFbo3D3zY6LCq8xa9ajRdUrNDpJPudTe4QqT8Y85eczJqJJkUXZUwTj",
  "key45": "2ahbqPKLwtKXxKEjJLZCMEDJF7UU4p1tN8eTXFDsQBKHFgttq3xJeM1yoihkpJTwo5kLBFhKdkBc2s8v6xT4zX2v",
  "key46": "5a2D6o5KDKzUtcyPcp9NFuQVnW9r5u3oT1QvpwD5MKhuEDRRRFQvnPJFDkr2SRjmDGWGGUqmWMGe3TboyBwT4rnN",
  "key47": "3KHGEJePNoTCFGZ7ewKEr8gncM6kHHES2qJDjJvKi8UJPs16oLqLA5QVP8HTAi83a1fU6uJkos2cgEdQTTThNFie",
  "key48": "2xL4Z1HkewKNt6oYxvYFj2buuwWXGT4UPAJiPT5UovScdd7vwYNWdhHWUCmhkdKgffxrZDA4pKvjb2wsVSeCkCpm"
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
