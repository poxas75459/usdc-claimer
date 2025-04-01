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
    "3KWmQL3NdjwQZEmPYYjavM15wQ1Cwi4BxurD9vW1MmMikp6dER6JoDe2o7RY9oPxHyRuSQMCfm9VAKHcWW9uLFcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Qs5ijMXDBS8MzaTrwyX83euibcfrJXw1YKuJJVfS4D8yG2WMLCpHWDoHwVX6cXAXoEBjxicok8EzteaMmZcmpa",
  "key1": "5cQEWHmqraFK2m3wwVK5iTTrc6tsj4TdSV8yTGyazS65TAZ3CKowBEwMzw7voE98fBdX5CAREFPEMZ9QfCR1uYXk",
  "key2": "8d1tX7aDyUUoy5dNVgt9t4MnHtAoBVfBvG3cApEKo7SKZTgxLo8kha7pG5CMajvBqqbbeokneiQobdqpcGmq7Xj",
  "key3": "QyuF35DMbgkp1UbgYSJ9sxfP2Z8qX9PtKmULBU5Xn8GuBBWTezPWMCdmpAMEgHF2yNjRQFUWMxZvPKnTVxGSsUm",
  "key4": "3HqcxjAbLYgyDiwgfG214Cox17cYCwMmWsrLCPT5kLA6wS1bivX8KaPr3aaMM4nUY7W4VNkc1HB35WVcz1CWtjBC",
  "key5": "34qeavKPhr3ugrFBw9khqwZMEDN12gNPw29SDaiNQc8i8BNubXmuhuDjD2npjQen2gwdMrRhNNDWQCApb9hh5AgB",
  "key6": "39VpySPP2jdm75adu1fRdrn11WJo2seB67P8WgvBvp5n3Kyxj7ppE1U9NLzKxXDeDc1QVawMQThQrYg4bPNNJUpL",
  "key7": "pexav6W3wM4qe4SV4LjYKHu2QPaWYGpS7xh1cWwYMd86jm99QGJSxRaDeyHS8DQjzKuCKxk5Ynxb9iQXKocM9Bw",
  "key8": "2n42N2Yk3xNMhFJK9fG1vzs6uZu3XCkQJUsRTNrznjpK42S5HenE1Ry72HbXQ1871wptKfBTwerwQbcbW7caBp7n",
  "key9": "2NiQ2BYz3awpXQNwMz3R6FNr3HLudhVLMKjk149Yr1RLWNHdKoMJFcVJ55K715cGrvmxZ4Uj1PBRiSSkX7pHR2hr",
  "key10": "47AKdsgRhiEd6HRjNPTt7HNm3xozBpYWUyZydnweBKw5uYZHDMEwqvicBv5ravREwMic4kU6oxmCXEQhx6FvFgBD",
  "key11": "2uRkMhE7arUikWr7PCPXhcSpatrsEcbznuf4UwSTVBZ9d2A333CiAZFazdqZsnpTjzoDQ1evreWym9cerGPkCTdJ",
  "key12": "3YffW31ieemQzbjDFua4C3TQB6XJH1iP3jd9URTU8UvnDeqnNM6XY4yr5JgHpBPB1Eja43PJoESeM1h76mKQBYYV",
  "key13": "EgPqtXfuFVVzVCq9FWGLi1HcNbJU7JpKzxWFcfzMJjthXDyxY9ksZKMkmEzfsriVurMxzkEdkzZi2LrJ4xDxSdH",
  "key14": "66DRQaQxYq7sRBDKBdi7QFbcKZ2m3hTMCjSRf9iNpFxu1S1S9PhEWqctSdHYcSce3CB5g9WbjAFh5G3RGFSTFv2M",
  "key15": "4uHH5MQQq2fcKNRHkxumNAoqtxKbra5vani4U5yC5gWW6cRvRy6fpv7dSaUKCnqaafYSb4V88JM6uw7Q6VnfHaPY",
  "key16": "46j68kU5bbx1E7uBE7fe4fzp1gpG5FvRu52mVi6c733Urz1kXS1ouFTs7rCxwnW3Fh4TbyfPZQS7oP4p6LLKvV6w",
  "key17": "34mavJ7UTZSGPc1FtRH2XgAaT2gZA7mqoKBHxhcogcgde71x9eW7nbUBKoSjhtrcVvATd13KeZe5Guo5Ny6tdAu5",
  "key18": "3btcGtHsg8XMa7TumXDM6VyAG191A4HgtoqYJfY1CpxaEiph1F2DkxmAnmyzjTEfe4yu7M5GbFc2kZJqLGg8qMCn",
  "key19": "s5dTDJCwW9LJWmSJ5PxQmR2NsinYzVgjY4fZ1N9dUPh97TC9bGSmQrdkCRsVwJSWthQHhXHvF9jfjhb83BQFvFG",
  "key20": "2d7ptJPDEwL5E7rTwaWSVKT7WwkaCpx1a4H9zcaLcwDCS1zQGwVv1mHqVZMUxA6huoVdWSPwbAPSsYXfR3QcV67D",
  "key21": "45B9cLnN3GsFKBh6SYzYy1iUkEAvXqc64xXyU327xEkQY8u9mYSA5KBDtpBuP8MxPRzVY7GaAf7ZWXUmgxhXfFfk",
  "key22": "4vgMQjSiAivMDFNDKZ4hxRFTdGuRcZRXzKAefBZZwN61Abs4DraxJY8zxVfjErdR8aRNKwTSDPjp4gMRh3DcSKRo",
  "key23": "3yX5Wq1xRXW6WyQzdtwikUgS2FJN9G6CkMxjfjmaVgF2GvqWnaQzs52yaLJUpGXPiR7xd9wYzLN6c4qJrUVXFuGe",
  "key24": "44NpvDcisrZbQNrMjZDsZhah2PkF35bNAVwJBGVAJWQm7dd5NJDTDvFTaknPUtqr4Ky4Ak49NvdBiEGVhDofPQaP",
  "key25": "34a986CL26kp2guNRoJpSzwvohM2XkBTdVjkAVg57pB9Jcq7ELzK78XB4JiFy8Py4Q7DxxKcDXdZcN5NhruqWav5",
  "key26": "4qDu1fbqYt9HGzjjCvpGpurqwne2B9U1MZTBGvrF8Ltkxk24DgSnPis286HJZH8KJUbEDdPAHks2EQy4eibWy251",
  "key27": "3GRiWf7WeBkFYDJ4jRhPLdeqBmVrzvgaoRJUdiCGJS4Qg6Rn76ck3Dj3j9TsE7jZ4qXkw7jtbjt5a5BJfkgM7tMu",
  "key28": "2f6khB9zY1y3dBVQkm7TFxQtAUX25H7bUvQ5gbptrEqQWXm2W18ciZEM8nhGb1PvY4vzZTsQ4qzf4Wp2ysFbfa75",
  "key29": "2uubgTGWgxZwkepLBeGoUngUngB26VgprY9zyMLcs1EQrCoeVD63gXnHptTXYbkctgK43ECgtpPNCMGHU82xEgMc",
  "key30": "5Ta6j5NmmXbpYa9SxzEsAV8p4gVAi9Rkr8xaKte7Dt1pKHUZLA1SnoS3BQ7gK3Uk2ktrfWdLFrBr7epuaUcJ3wt7",
  "key31": "4riKbWq6bWK7aF777P5Mz3LGt9iJs7szo4HHrLBShnWWrfgEJnKis4XVJbyYbrnAow2RS3aJNhqi7TWE3zurZvTe",
  "key32": "37jPqyR5s8jX5cL3no345XV56LsR3MT2t7eS1VnFxF5GQu6WPAodyKgigM7UxtPZ2TiYwBW22ogV9WqDxTVuwCDo",
  "key33": "5FLhQjQDrdpgkCJW9qBbL74nNPeEgm6uCfv1qwVi4WEv6Qwfkf8eZ3RCi9y3TFQMuFZZPQdHGkovXhyvKbbqyLt8",
  "key34": "2oxac1CRK98CEuQyHmXJxy5iQyV1isMVXgD1XfZBKvmuVWUKH9RNza4v6i4w2aYzKrrkjVd1Fqrgqk9vpUv49Yaz",
  "key35": "4a7bFtXhfSJe5gbx9BTQuhHXAAbhhjWXyVWUBQzvCXuEvc13SSoXApV6sXznvZuUZ3rbjvr6jss6thAMTBAh8Bxu",
  "key36": "VPMRq4x6Urb3Z7hbLRcFWoN8XYYpZYetM2hDWxKoJ3uLyzTuyjKceTkdySxSv7HHHUkpFu6Bcx656SbWu6KvWwj",
  "key37": "5TXspcSVGckA9xeeLxgovYTchw1vFKJQYXCNeCzSBP382n8caEgdWhTLPtLJqu7KggTSRfhchdCyDJFJgbfUa8sq",
  "key38": "2DBate5SFu8ontx394d7tNbAJJtoUM9tSkJav6JQ5QdhJ6Akdk1h4kV56qu675Rp5AswTAGxKsFJ5Wxa4turhnmB",
  "key39": "61sbXweUhki453YzaRKheASfAaFaaXMrFZHY67XWaFSeH8dWAHWqqG9oe1Ag2p59GxGBvWbsRDad6DmCAuXVi49W",
  "key40": "67BxFo6A6q8xRhsa1uAT1qqii3T3gScgQSzDkNCHa6L1ckFjFcSeKUpVxhciBdrKm2JHphqJzSiSwqg24ixCBcP3",
  "key41": "38CyoZGbCLgvvaTkeX3bA44zkQnpHebkbQFfNwzCmUWdEFuXpYt66GFp1XAak86VXBSFatgBcAFGyPBLatyNnJAs",
  "key42": "2Y5VUTsEAe3sZY87aQyzJjCh94BoSJAJL4CEtqmJb8Lb62ELTEfVYnMNnHHm5Yp2teaww21yzAiNFkAS3tMAUJkk",
  "key43": "2CFTxdJJUYKbsHx9HTLdHEc5Kz25F17csAGi9R4oWLSQxKw7DiPjEay8SbQYUkCdhPVJkfLdxDUwbs6XFMdEV1Tn",
  "key44": "2KBgfeaEMbijNTTfoK32t3xZiQJ3Z3uyCPJW6YubVZ3UsupWnAsRTpCKesBVdukVF9HjjY2fH8mavrL7wGeYLZZX",
  "key45": "3r3PheAXejQmMmeYyDZQLzZ8SUqw22b6Qb7cYP7unGAgzm5ehoDMwzve6RycSsvSGR4xxEhBVr79JAm2wunCj6QY",
  "key46": "JRvwU38UpStKC6JFJGYX36HjCQ3Nnc8MsdfTe4j2VDwMPmYNxLAznuCMVDhZzsiuofWwQ2k1kwVJw8uPPgSyyjX",
  "key47": "4gUFdgWKdgLr9VQSQcMGAJjTQth1eKhZtLnxnq9QaNaX2ntEBkhc7XTRYfXMmZrLohkUNwG27XmajCYCoUTTFHuc",
  "key48": "2PPr5aQ4Vdse9ENtrC2wpAshv2hPeSCzcgUwHYwQthq36vgcsN8iFkGXXYHSYLaZNVqKuLZbQH5x3Ld4FQWktp7d"
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
