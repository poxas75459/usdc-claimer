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
    "cBbivid7ho9KVjP7DZYCr4TDm42miEbpTQKJ6smkrTsTMdfjwovNV43H3wZP1LDLaNAXJAfosvuY8R4ieuo2v7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZgFaBMNys6K43wgQbvX1qFQKzHUfSQhiSqnoqRhvachVf88bBaZWxAepM6oytwaE4LG7X6dVCYQw1XUzZ1nQAv",
  "key1": "4t3xEB4VWkRfQ1AfdSxFMhgd3UUtSQTJqYMeCMygLdqLnnUa6tNW4UAvSGjYnCKVJaEp9kk6nCjpTUtkmCWTMhny",
  "key2": "2JzELPGFj3Frp3bxtnrSUxio8GBLU9a9dKhSHC2ULD8ppW5fwJwD5sFGfqyt1tuYt3rVZL6QKev6UsLMgyazW8db",
  "key3": "3hLEwUQt6wbcwCGU8r8fbTNVCYyStTjupVNLrZgsa1b39suzuWWWMCbPkLCK57b3NqSmUP2C1X356ZcjJxcYeDVe",
  "key4": "8E4UqqRewnJkSpQiGbyytthnHmcmtnP3o1sZMAgWvZfhyoEfr8Zyz2dNrDYHmw37un1tVz7eyvYqERrZNTsyqJf",
  "key5": "kRSxBzUZKgKDLMCLoo6f5C6375pi3v7bEEnoc3H3rySuNiVGuMUZP2ooYrP7VR16E3xuNpmZnMLk3VoqZoho1xE",
  "key6": "2zZMretG5UHpvofThCS8TtuK1fMgPT1fTPSLsDwdv2XtcvpggN8keqDV8RDKFyQbnFYnQp5KMeCBDyY3BdSTouAE",
  "key7": "4khbu4BLumxY74BUJ5AKfPCYn4XNRhJwETofN4JAMcEb6GaUuFSxFQC7BmmJA3FN5yZ4hhsgUtPyZA1wbfnnjDbd",
  "key8": "3WoKotnCtmdy2frAHb6H1nW5V1UKHoXpE5ww3Doc3gkpuivVLkyXj2a8rhWu6ryNqaGYBYRz1txZ2upN7ziakvzv",
  "key9": "LJbDLRW3AoTab7Q8GozLFupVUotkLm8w4Z3WGf3NWTq1FSUnLS69PrWFxnrnNaWnWJESimgnrMsRtw2MSkHptYn",
  "key10": "WGp8oiy6MrDHJPsVRKLEH1QE1ZwpiSysPs6zHtiCDZfpsou2PYAKn776ouxPiysbhpJ8BmwEBVApgU34f6QmZg2",
  "key11": "63KioYbJ7vSNvpfPt97HTYBe4Y4qgiVg7WBTU9YMmX1VM8abuNQ2M3WHrCHQXWxMCPjQmp4bMs92bpuYsiWugEnk",
  "key12": "3X48AB3Q6p7qsqo3hP2Y1SfinmguSV6tvmK7d3XrjGXV9MkeuFEuSZz7envjY2sdWN8B43VQkYv7WwEUDFVSQ5kD",
  "key13": "3A9kmGvarcXKgjYt1Bkp1PFGu5fRwAnMHSDabtP4UKWCKwRkpBgvrRDtVYvdQ6gZw8eTqtHapz5wxhKvr1hC6eCw",
  "key14": "22FJmKcY2dCRc9zJqkYvdtz5mb4sMCTLZHiFguaNAac8WattAM4BHBtKgLBhdpwvzTkcjJDdU5hR2SEqkbLYzP3c",
  "key15": "62FzUfbQmCSL8tqVBjwWvtC7nDPpezGf4UNHCd3qLd5GJkWYQC4Wx3WteRVa5uTVrWnRKnT3i1rFzSVgYmb3wJNH",
  "key16": "GcfijavdD9uJZqCriJKNr9vXh1tn3MRx5TpheF8hcHN789gUpMiJzSyph88Ay4qPwpWEDBj9s9ZKhhAzXS6UzV5",
  "key17": "5xnF8iRy2rqG1vWdtcwpahUDoNvBqzgG8Yj5LYxHe56GryrDRqafbK91WbyypTq3ycVsR7WEQy2HazScZk1GW2SY",
  "key18": "2KJ4HvJZG3fBqy9ZxLrc7W7fjudLbC36JPqjrFi9Vy42s5BUfm1phRCbgaQ1HDXZmJMaqax7GiXtYt2YupqAiKTF",
  "key19": "5b6REJrqfcwbPcvhSRRPcpDYHamZRLv2xtqZbyvTaUVYAA2b9ZoLUQ2iEPNDTUQxKjhFkpb3Ag1qYBSVt3U1bVta",
  "key20": "5pe3hRVfrMXyMknFNs88YPwMAnViVZmBPKkpdGqF4n17CjUM8kcY3vss3N8k8qx8tNzAJwWnhz6Z7RgB1sNU3z81",
  "key21": "3qu3wfc4YkbdG4Nc1jd8xvyZV5ojVjeuBBnkdaTXBvyDWhhLBN9NrFhoEx32AK8qtCvbfWDk45t9XKyiY3qANuBL",
  "key22": "5RJ2HRva46hVWP4wu3ZkneP4UdSCnNm5Jdg6xmJzwrqJsGcAjbLZbfi5YttNE2ZFDFwSsykZxPXrV48YtZEFmYLr",
  "key23": "2eMKaQRLzKS5XMAW5P9ecA4hEPfQVJ2ZPmeW8P3dgK4jNX8N1Px2RSQpWusqnaWPpivncc41D7A9iJRGv9rd857c",
  "key24": "2os47aK3DGsG8dySZtGcJDGrJ3fKHjKLpdezyfuYfXQQWCA1mGZ5j5A14hagezVKj3pcPKbzMsfVUjuGMuVLYaWr",
  "key25": "4z9NBS9CBimo3NRt4vDpUyfMMTQJPiqyyZRDQwaJAXqWXZWdwBarFqW38pvrNVEA44XEpDpiR3Bjx1P3sKcyjQBX",
  "key26": "5e3W9fMPA2TMkiuo4ubVtPrupy63yuVPRfz78fjKpxpuLyuuNVWogEja3VQN1xLKFne721omschtbmH6roxe8rtz",
  "key27": "5D8rsUTpmrYjp3HtPpiC3h8idfnsoSfSWjkd2dD1SmVkUchTsdvcbzxYFtqqXsVvFoA76G5aDNNJZs2Znzvoqo3S",
  "key28": "47wrbb7h2WBydeYX2bprH9TY8dCqos7uUFmqxdzQhY97HF7Kc9TYU3raujz7nCGb2PqMNsveED8oY9A6yVPKKBFP",
  "key29": "SNwfQBefAM6rMowNfc8Jfcgr11ChK9EtuzT3XJmHduc3ftSB4sGKXdTJnsVLvP34y4CnrFrWT7NF5Her8TGQYJP",
  "key30": "aGy7Ws3QGek44AmPQ6H1opnmKijNV5tdhEaoT9zChfXCCd93fPNwrrM6DC3HZw7tgRuBgQ6xfqLfa2Ekzbjgc5T",
  "key31": "CUPwFo7hXed5Std71MVwzF6dV9Yk2Gh4hNvALDtSR8w39MKuGVFx6KQwdzMpzcQt3pVvH4AxKDWo6qkgPCJ9NXD",
  "key32": "5gczKvH11oKHdWBs24N68gEyB1VpkmqvDFzkEvRjLegQjpjTEs8vy5t8VnTJTaVeTvAwdfTKZurT4adAK3LzEGDp",
  "key33": "5vsVbPwdKQw6aKtQmK9AW2RQfxFurPnTrTXmA1oqwF8SnibqejVPLBmVrahF6uDGFEw67f6pjF38usveUeeQaaTx",
  "key34": "5DzcC5fvodNiKiLGRs5AXqRrr3jQ1NUrrcNNvbHHhc85v16LWsUAvYWd2hpAnoMPgt9rFR2iiPM1iKcNBsMDBqM8",
  "key35": "2oF8iTpsRcMiprJ9RCq5a4e51WqnMqLRkxBx2ZJkJiPmi2RvBnewQmh3zuUp2LzzmCPr8KJVTdYLE4MG3v7rEyFe",
  "key36": "5EKMa1k3rCMRNpMrw8B7A34b5ED17onR2bSG5tBZo2A8iwituL9hCZNhTrHq1RYpBzfBd7b62eGp1K8DXPg13GLq",
  "key37": "2F4LqmFysk5TP8ApHEcnDdXCyqrJvJSEngDa3LnLTKDan6PqCE8fCpSkNjk2XkNuDvWN3WUDcDDRa26o9pQjBtsJ",
  "key38": "3uqJqV1TA4YtkDZNgYmUdy8GWSHQHFaHkhGdbMrSCBbUj6RqzAg7JcM5npYSpVWEqguberTDTdyK2osXC5aC5x9f",
  "key39": "mnjN1zHnbsQ2f23t7H14hLk2FYAALmUP8vQwLJa5PYUHhd816DzeGEZ6RC3kJkkj4d7oVP4gkUePqB9juofK39T"
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
