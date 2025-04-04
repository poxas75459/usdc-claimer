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
    "3NNBweA6jFcTHSuf3nqYfdXANzASTV3cvvbeLUppTaahKAQgv5tMKD8NirQ5yYActe4nFTzPVBcERGU4ynuCBZ7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPWTwkE7NDhLGir5EkgbEziUY1sF5jkFgtskkGv1HHg3We6MqLy1SXjnC8Qeaaq838FQC781pZTxVMr1Vp4v8HU",
  "key1": "3Kfr2h8iQXpiSYygmKnmCSCdQFLR7UcyHM4Pe8oFRegau15xLnAf9fWFvW6AQzMAkRQZQCR54ZoyykoKV7q7JArD",
  "key2": "2HYE4EKLK6i35nfamb8WR5iP1sDWM16VmhmtULWSrKSVyWqys4x7kQbS2Vpue3DR94ZBBhYCAaBAJvpNK6yACnLo",
  "key3": "2dsCEM4JjCS9GHcpxvqSFSzXZXCdMSYJhuoVYX317tBdNWJCiQSrAB32FayGTkH9A5hHsjWrr4xnPgUk92HyUfwo",
  "key4": "5MToV59ScfbgmFoBm3s6JwRmeZz1r72jD1J9QM2kR3QTcUFvcz31fSqpSNULr4DqyW8GJuYoMdZWkBeRH3AnZs2w",
  "key5": "5ptg57kpZoA9ZW7HLaSrfKjECG5cn557PEpQeQkBJQHZtrBxCGHzefVUV6otHCQ3FkE7zeaBTLeENxaEpebiFVnJ",
  "key6": "4dVbpqbYJ2EzPDNXBAHmmFDEdTyu5XCksdHxc9AWxN6FthGpNfAfJNdPxAy5paTsjDYcYqpTqUJQY5AoqoawoLfr",
  "key7": "4uMLqxRxwHn65QrgGBMrTEheGzGdDP6mrAAh1oiyPW1qaoBQ7HPK2zfLAJKtib9nziHQrE2eehmVoeWWtNjZfqou",
  "key8": "2PFy4ayVkhmiXmS9vqGpc24DNh9L6bpSPYe9v7RpWRJw1ZcD8BRbFe6e2vWgRyXScgMdwNgMu1K6Vk55METCscTT",
  "key9": "5mJmFb3eBb9Ehi5QjiK7dCQAhz9Yv8hWJRDB2RYU7GYpetwtN6PkiyTo1ofoMcS5WAPLvQDF6U4NdZq8gTTCmDcu",
  "key10": "3NbF7rc37EPyBbn8jN5k6GqjYNHYzVrpzaeTFmmi2eoDs9tKDj2uvPAxQuBtpNFBEvKaSwPyj8LK3bjH3vcLNDoQ",
  "key11": "4YeqRrvNqbUfXfFzSM61vRKhBViWbfyKXu45hQsMnyuABCJFBYz8XT8zz9oYmBRtvrvaFYShabTyrbd51YXwxsXH",
  "key12": "gg9DLD1GYnHF4zZhodn4gFJ9pNu21k13jEtV41FxmZSufibEVXNKyEaNnhpwximhtq6KzsnWEZjJHsD41GvHApz",
  "key13": "sq3QCBgmMgBa6juztKPgZ2sKviicTFSUYSqABp1DDLEWtS9rUZdzxayB9zhnjCyppPkk5g5YBBzLK385WumWtQg",
  "key14": "4Gzaizn4hdumLM4capoWy6M8hvRaGHhRTSiduRe3f4ytWvtr8CJjv9pxU1MFBtbMEd73SJHsuUexZa6inw3CKZn5",
  "key15": "3bmn8yQFYiLPnLb8JTmsHKhvECe5qF9qVaZkNo7BS4mob7ifa2DjvAZnqDqnBAqbAHs2ThVHjn7DqgbZ2W2bbYQi",
  "key16": "61ThmRtEEUZzkKKYm7cEt4noCEumRDASNjduJC9a8pTweX465ZvXUmbYjTwrykCVnwB9w841dX52H7LPiSvp8U7n",
  "key17": "5xFbKjG6B5CWZ7qrrDtJHYRuxPZdZ6QJoMnYFcxrWXTocEVJv3GrTZ9pkHq9wcFCq9vfq7ayUdfTZ4wPh7955ge3",
  "key18": "5u6dHvue6sqS6BzMEKu6YKXceoG4iUhRXa6J77toBkqSM35MKMacaKDmvmFCbrTuR9J36MtDCpKtK8KsCW1igrcH",
  "key19": "2x6ndwmJFjxyRqipmBYXYQRpoYzJTXPRQLgAq7ZJnvWf51dZxfH8Dopw5vyr3gqfQ7B1riG2t77VpUXSQu7oKUfo",
  "key20": "4S881ZojzitftCUrQFXxHP3C8XmtCT2eViWzta2veZZwpHzhFM7eGx6iXW6LADGGp4oqCNXeGVkvJi9hc9LsBJzm",
  "key21": "4pPf6BCxH62h61jvpdGwKAzR6kaZwiX6bnziNS7t3droC6sfLBF2dDtkBpQZUPTGSV9d8ezSZbaREbhb7QcYmF5g",
  "key22": "46Q6ptPoYN3ebWvJXwHUpobwzZmPkm3zZy1NFEPYFxcTWqLTcvqTUpW2bBidCxtKbqoNYYEEV4e9FaBavwmKFre8",
  "key23": "MWGVU1VrjdfFrarLJY3DhuwzQ2y5e7A5k3ej3p2duCQKzTtCHLf9tnfmEoEBhXnWHHhzrCfgvNFDx9G3PhjTTX8",
  "key24": "2VBHh6nHxwLG4vGtC7ARWNDQEu7hopgUmdnqYqwvqQyKujJbt8RzLuJhMrn8yrAbN9ZrMDKreNtLowYUcjKi27N9",
  "key25": "63fhmKJJwS67LdMAbbQgqJeFxutoniV8bnvZDNb6io5reKvfcce1E65Kmj6Nb3FRByNBBwUusYukLDAbNKeTqGbF",
  "key26": "39nZqY779WLfR2tqir4vHTZ4tHapQyNt7SZYMCPBMZv8wmKvTUo9rYH34NrjnKBoniKZG9e52KyUAREH5rCr5Xjb",
  "key27": "3D4Pyokh4yikLLPgPDxF9VKGL7gcaxoyzFTRiB6YWdxhLQ7H4eTRZDZBtwWf8q5kAU5bYvuc7eZJo2QB4UdEeYdS",
  "key28": "4Qj5x8nxmYLARSAgDoXKF4DFYAR6X5XueNz7YbG8FoEBQzcwXk8ThDHUTPudZBc1TKpMzhnHefKM6sP73XnXQksS",
  "key29": "3iYkpZcz9TwtGwYunpfzi1ZDbby5T6AJ3is6imadpRdDJRrcoQAKsR9zd4nCMcx1bT7EUeCbPpWLDJ85HjDSoQe6",
  "key30": "4icJr81pqDuiWd5hsafdvyZm4tY1cQDk4ciHNUKgHw3S7ArjfMeTfSSppXpSSRQKrVXuy5WPWc4KDzKfUu96XbFy",
  "key31": "3vUez4KvXuKxsVcWS6eg25fzMvPnBe7qDVxMhnwvLY8jpgr42bDQtmXMbxCBwPfEa5BQEZ6EvkxUSx9nh5bqZwuq",
  "key32": "62vobWqhKQyqcn54yumYys82rc1retjKSvQtW6ifK7N2P3EKjkaWUyeEj8VBgAymrC12dvyQthYTksCo7Rc25sNK",
  "key33": "imm1E9dfEDLuQNE6AH4VJEq62orU1pJXeXG1hJeL3dYS7KKFA9ah7hMjXzPqU4dyg4S338hwF32q3Pgp97DXhFz",
  "key34": "5oCEAhfbAw4ZHBtRTfaM96XxiS5mdS3STAJoiuZqC3zHLTuEGB7rwhpfbV51XK5CYmdnr4ndD6it4LZKoqhX388i",
  "key35": "5P4crAvCiEv4NpGtE4HTwJmGug4C9JUWBganfiyDJFqwySVVQhe9RonVuFzvgTC1zttSY8mnyCn5puEK7Bmig9jE",
  "key36": "56b27qJK2VK8ckgTVX4aSUMb1wnzrPAV7JiCnqXLYW6qegiziQdG5XX85JZqFJcRiL6nBtzJX9X6wseDpsSWxJBi",
  "key37": "35gf1pVBkSbR2GMEGm55FaVCqQoidUXc1ACVxCsxUQrjEYkYBByKBVa6JcdSgrAaj4Eecvz82FibRDk76gfodBwX",
  "key38": "4prdYfmAU8aH3JeoEDYFiLzgtt5vckBhiXP9uSwvsvA6Xv8NE4QRwnN7CELMc1jGqjjsmr6eHbLW11odrfv1UY4e",
  "key39": "5pZm3EvfDHcrasmbSWDQvMurKhNc8Kb3qcoDFUho5NA7oeGRAqQYEnmnhV8dkuD4tuf4Yui2ofdAAqT5oWP1Y2rN",
  "key40": "3mnjuSzTJisER4iTnJxWuewWGQBYdpZvHevrctYw1SyVdAJu215cifhgehZc9dh24iGpYTCnJH2mxUq9dR3QYSMy",
  "key41": "4y6SFnMpTbWfxzSFLjHy3TTTSadz4WUugcDed1GcjPCTw3JoZzFNGFSbM4Z2DojdtGYvMkvbyjgphjwcNqW7idP2",
  "key42": "3vkRPvjRgSn2dQ2Z7iChyDUV8ygXGRZUoHhvHn9Fzoix2ALV78GQEyfv7uFSqWD6UPRgorDtNJ7nCtHisqyFCygz",
  "key43": "4zhji7UtViZV5nHzDVvQCcfCFHtPrUeTSPGddZW3n7pZkt6ze3bCid7VTfjZsTjtSWq3t8hS8pB1m1kTCUrk4hqW",
  "key44": "4AQ96QHZw1vnmjED7KmWgupLt3sktmytLhYMMcMEZCTARRZVBRAbEgC6rkWAKJ8nrmnpfUiRYQFGfjQ2LTrrEPbn",
  "key45": "2izWz9SSCZPDuEpZU3z6joh4aLvQyZMmLciUu5E8VU4BBdjrMyzmjt6PU4a85PTbsPGxtGWULdRZ1buChXETgGG4",
  "key46": "2oEaZAebX9YW4tzu7MoVeGD1uwAL5qUp1qr2Xn6cq7e7F814X7mnSgdSYmZxvKm6azRLyAHhG26bKKu9SNuG9npj",
  "key47": "3MfmxjgjcvZym2V6C3qhzihT656sKNesV5KoUqprcFPGqogB8jDqpjcubNdieYpfQj8FHQ5HPRi6gXLuaQCEWDnK",
  "key48": "2dDkPUZcQrj5hiqGwpgGoYgFfk4zhwpaB35sWEfKpvdQdUeDfAjc3zyNVJu7uvL7dSDFgzyYtcHEshr5HGL5uKF1"
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
