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
    "5cB44x25XS4oATRBhSPc1urGavz8A8tbuC9fiEgXetaVso6nQRYJ8SpY9R8LMgXtT3th192zbRrvezZRiavNxaDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EMWriirQgiFSH6rroeRDCs6BPWFyjUk5MnP3u9RBGmf5Lf31gfVCviEFGVaCLiuWJB1GpebYyEZfhNUTnF5KjdH",
  "key1": "4WeAXrCXzsydrGKZvEBwTB2bt3CfkjYfMB4FAPneYWH67khFeWMqmHFAx95MrUzAs39rMn4h2tN4yaTcmxuvPd26",
  "key2": "3YhdE4XHzokouZeqRrWk245GtUyZDmRrnL8ugozgdgCprYzGskG1G8ZmGxBMajhtTXTAEDmb2ehvfwK1Ca6moonk",
  "key3": "3T525QqTFyGyhAPfKxTs2g5aAMYoDeY4wug2w9EKjJzcHEGTGnDNmsAaZSfcuMcsmgmQrUs9aw5wRuZFbC119yDk",
  "key4": "2XDr5rcTKuzvVRsXdsaBUWVFs8dAC8YQ3FvBjTjRrvY1weheSRDbBswoNtbF7FuqrVe1oF9mMgBVueBNkRefTq98",
  "key5": "5erF9CGUexDEP63S2Xa54kTa3UQ3WFKS67yZgiYuHcTnkQidCzLNFemGit7JvBQoT86RthTLmmKC5kiLi4yimBfW",
  "key6": "ppZjQTSadZA5vHeBZDEavFgwWgTz7sb3QyjGYzPfnMcutUD17QMupAkbEweHJNZZV2X7zRzRQp7aR2YJGg5cSx5",
  "key7": "5PFEVrWSdaAdQ3GGtNz1coJaYVAJzkv5cb1jzfyfvaKVbJ69sKbN8w1uw8f5YtScU4mJ2s8z6TAVGMPLKEN3mQA5",
  "key8": "5dJBsxXM72WYewth2BWtCPt2fYZgLV2YkgcNCprszBGZKMdyf9k6QMEAg9akfi77N9GiJNmhVH6JV4maGfBmiawi",
  "key9": "43JTiVEo2o5tKNcJWWpndcGLcDTfmT2eQYTAox6xRWJtGGkTrLLWEGc2Rxytjxcnm6SfjyADrS3Aquj28yf4T53G",
  "key10": "4ztJrm8YZswm8nLNnWb99DXCpnh7QHPQ3s8f3rm5qjkj56CTF1yAeAJtdevH4JjLh4oL7BFSLzH5i5gyr1xiQPTU",
  "key11": "F2cG256WvDKkuwGYMHqgSRPe3MbQV6FUeaDk45tqRx8mvsVPvsmahaYQSvnFY25Pph7VPHACnkPjF7682dpPTif",
  "key12": "62H6Nej7rZWe8CvGqkaFFqqoK2TKD6GkjZy3ruSkkmB2sEPg98x7HbvjVQ94fjXHMWpo6CdikaqHZcNeH9nhsjqg",
  "key13": "3NR8ks6sJ3kqfWMEcdEhRXemVz1nzimRMzYZXKnLWCNAZCyZBw3bKX56CfraQSjsprnyYxwwP7m39CgTtPPVibdn",
  "key14": "2XAjjQZ2v37PBQqYPkWUZMbHcaGZRdQundFp46BKiuMLsuvvULbjN7mAHiCa62sZugWMtKxSYtRt7VpuJ6LZpyCZ",
  "key15": "2J25JfajFkresS8tbfVQM9hqDPkBTaQ1P26RozXttNkPrb3tBfjetNoGavF5fjVj5toU4Bnx78GLBqoSzqcbZwbs",
  "key16": "3qnuuWupgeYphav9rLjDQMAKpHFNpCGkUhiQkiYp4uRUgu4zuuWhRZ5eQCpRgGBW7uGaCaWUrjXB2R3Fpu2iDfsR",
  "key17": "VZUtkH3cizqzWciX2ZFKHeME6PPqHYG2h7bGbygwey1guVipqQqM2JS23nfXjpoozFMyUekaNthyByqSds181FE",
  "key18": "5MT5T1dNPpd7fGzey9KJT6wWfmSwc6QqboCpKFV76ceuBpqUwdMJwxnvXKgyySYvwmjoG1X8wgUaARajwpCLSr5",
  "key19": "2Djv1WvV7pqEBB68Ey1pfmVU2EvvgWiJ7bjydjqC3HLLHokv6hE4wJybe84qBgZEDjnhN9iW4vBQDr5GZbk4dXSe",
  "key20": "3CDQEGwWNL7Cdbjp9dhPo7nfAi8XUH6299RR2oSWB2qBAMpggCaCG9dSxG3V7DakZ8ptwMhD7xnPLyHqk9miWGfN",
  "key21": "2su3SrBu5xE29WVzEJfLnLdAHX1u36d5dSGVQK31o2pC6PKcMWmGbUFvQnkJPwp7C8V263cpKV8cKSTVBasQDcqe",
  "key22": "5ARYShAAYrs9VQaFP8eLEvdpRFBjfHzueLF9Uu99awU3aRQXCcTBc3bhv1DKcqBwdjLhUmzJbiAcSmk5zmyBTGd3",
  "key23": "2YQcBmrWhPoqJxHxtqKav3LrqXaDwfdF11JfmwqnH6tyM626hbCDXyLADYiBHz2AjsJLqT5gHpXb8T5tjCBkcePe",
  "key24": "2MBGRkxAjD8oad6VQRLCgCa5PU4zGDAtoTPBPGAZo8RJW9jRrZ7HxbG2HgkEvMEjCsz6HQqbafTUY3xQ8gHvd7JM",
  "key25": "BY4zbZgip41qR8S8Hqe6friuZdh9Lu3SFNUwji6GqCgvjm3kw8yhRTUYUgGmMgQoENUVcHxyHukoeu4tnkBqhTn",
  "key26": "Sfze85M9JpgiuJrcVg8W4ebDN1xZWnqgKUbStFin8hVJqUKSqjmuMLMBi8Emqps1NxxCpJjv9p3kyXCRBdtQ8cq",
  "key27": "3KCH1QcTWyPrquhQTkPHMkLahAW5sKHfDc9uZpcmRXz7amMmvkZ42KWz2x1UtCyrSTHvJMnFr7qkB2Jpz78NZ1QT",
  "key28": "2pVELzni3HGupKJtdvvaD75SoGPzZHWVfgiNsu4d4hYuL2UvGXCZUirRFn87ZFN1jjp4ukowUqMHJ9sVeLhTtqcv",
  "key29": "2uvMXtL8EhdvvvgYpjFKDFTVxLrJbS7VB6kAZvwKTqYEkb3KHUNPZteSTPJJuZrm9iV5RZNS4hUHBrch39vL4qT7",
  "key30": "38CFQbwNrTwLUhGM5wQViRnWAsQ1HgAF4cp4Jg31cMVGZjqvo4WHFVjWScfLvHkE4Fg3wvcJPMEKB2VouBmxqEXD",
  "key31": "2aoc7ZUiCnipNHT2Yjx7mpxLXxq4FCecCwj149Gyh9bre8U25BnLfZf7hgTQNY7dcvZsmMQ9QfGBcfhfvjsisRHk",
  "key32": "5ApcjXGEQen9kwrHrN5JRGApELCZp5idhQEwU9XkpNXa3EmTiUoX998G2gyKZxPMxcjDCv2tWTQRJvT4nyELMybM",
  "key33": "3P9jTVqQBwzRZ3mh8VF1Cb7GN7guZbEJfTukeSGLnrsaNgM4TpMsUgbWSNNFkUJCBPxE5N7eikg6P8DgHDpmRGDq",
  "key34": "4pTUoZikyi1ABHvDmAsa15yRNP7Vyq8J1PJziGcwTYEFNCKEteRJG6gHxQ1MdMGXCawRQ2AKbT4dpbDRvUaHmfae",
  "key35": "4JtCbKiW3iMBHiDTFFg1bXvpzX5mAchfvc61bNGMJFWz8HPxtFzMAH87154bkzWAz9igeCsYjQC8t3K4haFyGKA4",
  "key36": "3iGraQLV6PdHXszrCMZL5kYFUtRPtT72qdMLCcjw5kqr9ZU7JKk3V79r83ozZzrW1UdBh1zhNG8CR7zv6mp5v8CC",
  "key37": "2zFW5T3wyfPsZWUYATw2M7wqhfddajhBqpUTznygBcYsQsPZM6jLrErwNeaNp7QLULbYaxJWEtQBriJVx8S3tUbx",
  "key38": "3x2ngUkMu85PVb2f92SLWj7dRhsujun9dw4JPswQa1yEJcje1e9V9xZrzhYkbcQ6ovn993tWh9oAPzsVh42k1z4A",
  "key39": "2KMRtehbxsEvxXhnAhgxGdMbxB5yAhuobESXweM664UiFe5BVBWPEH4ydH2fCf55QyJH9NbaxeTfraB1ezdUmphy",
  "key40": "yZnWXwL4Bg9vv6YpvDceVcjeZzoieZ9RoQccHmsLJ87iUx8B6t51ctqe7imXe8N8znqxfAtxVuwWTW3qAvMQYa1",
  "key41": "2CtboqpntvTdVXCjdFmcZS9NdYdMaorYbjrbbQTrA5FMd7HARBRwpHiyVWURWzVGzUFMtag2GWhUWDrnCtffNknd",
  "key42": "2CzRLTE23RBr8oA65pcKMei9zyjV3D6RFAQLoxdy5rfK1Z4JkFm4bjrw3USndyAZJxuPEUpPy2yzkwibT1PGaduM",
  "key43": "g5prpxKk9Y3Df3A9NSV94jhPd9TRP5jLECYswBr99W89xis3sZi8PyQcJkZ5NTUbZYQ5Ceug6g1uV86q82dhmc5"
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
