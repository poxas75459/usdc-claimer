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
    "2A9NuPLLauKGHjDsdi3GyFopbTep7grXq1ph6rvsjfjHqrf7R7PFZrkvVmNYsn8QawNGxaMS5LWgckdJV3q9VHSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PatVFMadTLYoPDpK3EnFVEcm7a9MSDMgB6kjnyj2kgAnjUouELkdtFzbHBbFZtj4rPmeDaoQPw3hsBjpwkr5duK",
  "key1": "3XDumKCNJrMxTtLTWVwqcUpmauaagWtbBuQpHHVmv9otQbVADYQ8K1jG48WNU9vcft2WzgUqBfFSRoEm7CgfNZYy",
  "key2": "3jMGWRJ55Audr6pqiKY11DsrMPDn5UTLffFKRhmXmfWdZVXHmEhHQLxMv7jabCxu9B1E4rkh7yTtQivfvS319hea",
  "key3": "56NDtdMvamon7CrvFRTAzeLUY2rFVHUgU1pBhh3UGFbUbruVnv9Xux6yQMr6qti1nA3wirLcEBSbvLH7Ejq6pv8Y",
  "key4": "2z6hueddKqgSDYuArPLes8V9X7jzM2R81Eyz85zvk7UH1yULdHuioH829FJvn6D5c4jb46rqeKzpkCbaYPXxe2Mf",
  "key5": "39HuzUcEHhhdjJkgopNruUD6x4xPzEh9vRaH3ukduVVqvD6D9Gh4a7mj6h7nHLVKG2HYxP3HYZhfVjbhfY2rCYjU",
  "key6": "37Szx8PqkZwJyEQe4Gnu1JvmXzhrPfLpdBaNSYuQrw5oKGM1CdjSyci26YRBRpJwUNNsxhxopZzjRDq25FCrBQcA",
  "key7": "53tttySQX65EEmgLnNyGU7A6dZZTzeEmRvcfECnsU2JuMnLwqGqg6eSbZjkSuZmEe1G9PXvyULtzADyvN2iidTyD",
  "key8": "31xQzmfEs8mLTBG9aqn1SooyRSN3Nwzz3A8wP4HW6nG6jm5JVHHZ8KyUnKnGUG2Btx2gHvbMbkoQpbwc5ybyNgD5",
  "key9": "3LU5vBLPmv4HrXkMqGf7Y5F4mhGgNd5FWuxqhm15JHPDVtrrpJ7tVG8xrP3icffk1VoiquQM2L8WfZAuW2SDo3r8",
  "key10": "vVV8KUz4BRSW6M1zSBuCy8fhrHWbJtJhADEexnu1r17ys8NVL8HozbGZhFGkZFdDwSfLCx3Zk6ppzy4zrQfEvvD",
  "key11": "62NQazsuzAVm4BAxxwTkHvLkXHZezCqc7uYRMEZG9jPXzzQRPFbRkruuW5dvAGU4Mec6tUcwCNR81RAg3iu3nhx3",
  "key12": "y5MX6CUEPxRJ8yaA65T2v6SDVfWFXYXhRLgwCg2Nz7p463rDk9G95ccYnVFWsUYF1LMDTNWZ2v4Uq7wHwXqsaVt",
  "key13": "19QqPPqaC9juVH2eqJ6H2wcSWP85VcZv72dpQbEC1puxQS6iP6ArBm7pHGJNSa6n2QF8qbwRXuzKFb7vS4Gy8L9",
  "key14": "29RjQNY34v3j8zE78suEzgf9t8Bs3DvMguiZmXobjs9bkWG4LDPCwG9DxGbtnb32hHutpTknuUhAojKo43WocuAf",
  "key15": "5Ru2HnQFyadwJR1jPgxdTkrPDkn1xtCquynjfTJejMzSsiMasWwtc4j476yGvkcSLiqfeebAfmHUKWWCqqhEb8uD",
  "key16": "2yzsniemmrQAAS7b9YrenQmY9vpj4KwqZj6sUjHhxptDXG76665J15LYP6vCiUnZ5RA7j8bBfhvyt6k4VRz1sNkG",
  "key17": "3NiF7CDejRHbojCHw9fwhvcL3srCsVR6YwdVcYS2SbWVCuBZBHiGpA142t82mMqY3pHk5X6q6kXdR1K7GzYqWqLN",
  "key18": "5M8jp3Gcmt8rYtqYLBud4J8yVGHHUzt9Mar6AAaFbeNzc2KFYBtgArRPmQEwV2xmdUsXczpiyZsYgb4JCH9JRnh6",
  "key19": "5LgdUprkbtYqs9dgFkQL86W9L3rp818ZmzKTYW9wUotDndk7YwSSEVhC8ZhW39xSyMzmTUQ81UiuAXizisMzojZj",
  "key20": "3iZiF9FAZx1AHyG9yez7Zo2eVN83YMbP1CCi291SxxVyF6VzKJt48bD7cdUmDaY5TR21zY4pniS2BRpt7wsx3h7U",
  "key21": "3nENSHVSBQmF587AwQuq5bJtXvJNpf3eQiXXGK9FhG8kt46tbJsF4MgnSQYvL5N7nFcjU68jzKX1tmVNCdJQaz6t",
  "key22": "2MEhAD1UQHnoYLs1PAQC5J9kTHRUEnXddUneieFLGpaUUdRFCNSSPGQXDNtG1igdvcrZGZA7JGfedncp1w9r8Vwp",
  "key23": "2RKTq7R12fz9AQdzzgtAmEq3w7j1YWNNCms4dLZPo9ay2SdFfdUNAXyneGMra88FaiRstauJNrEoeMdpJRG8zHUf",
  "key24": "4QXwCd4sFPB2VrYujSUELTzxrf5buXEKdXZtV4vxrvE7b6n6ok5CBTjG4oRxK4prGsRnDiTgSZ1NG8h2dt9wsVty",
  "key25": "4EHVcMa2swJAWiTbqxZY8iR1a3PunUcoCBcjnw3Wo2LwLNtpTD1z6VkEAFjeHBd925BxTjgHnoaBUugB8AeLuLV8",
  "key26": "2t7RKpja9jbrSezgh7pzd36Lb3PwXPaSwnWJFzS81nmBJRMoqKgdFNDDUuUbZHtRcPWkaiPGVB8ZcEooZh9Pg3B8",
  "key27": "CN6WiDijNGTsepwsVwNTkUMnx5um535tfKS8Rc4rUxQQhDVNeJeB2kNvsjuXFZS3Jg9J3gYSPgReu8vh5xYtA94",
  "key28": "pKBAT7GFZB4tpvZX5cqUpSJeEv2jhQuMnk15pFbuD6i8qC4dphNMDtpcRfKj6Fi7wYQdYFxGJtvehu1sSWyo22k",
  "key29": "532hi2Qv8eHKRLm4mq3x9LeZ7rzxR53uRnXnzp67Bk13nfynsQLJetDmE1B5HoViSjxhDxvAPz8c4e48e7z3VCaX",
  "key30": "3je33QmHmksyiZeUPC1fqqFdVmvJTxQy9hA9tBybm64Ry7MC35mF9JVMRoDjSvi7LbpXr3fgNeoLtRyNVPmzp2Ev",
  "key31": "SHusDjfdu4PNmsYDQ5zLQmGhxT6szqr9VWyeybiFqQok45hKxJQb1N2Lp6A3xxXhEMcLwZFs5w9716fW8PqCetE",
  "key32": "4HZPcw5uFJSPBs1UjMU72GnRvEm1pAoVqj3ViVsEVPsvatJbKCr6ZY58uS8sC761wXYTxd93iNAeB6BkcWA3ipNr",
  "key33": "45NjMHVwuGqMXh1RtHMZVGzyq1bdyQQmqb97mfXbrqjpd6KrrNkskkNZNGPG5bsaF1NuPczSjLrf7MBvpEW6yZVh",
  "key34": "5EqbfzZPZoxFckVex12rtnPZZLgwANtcyDhHJM4FQyd3Mx69FB96UM4w3KMCxAoqD6sRiUqeJ3fJuCNP6o52CbUE",
  "key35": "4cwjrFkPPm3BE46tfvepDfm2KmwLCnY5W2xPFvz5ADQkpE2eiejmNhUU6moFBkGr1LJmMaQWcQZamKHf7SD6R2KM",
  "key36": "66MKvxcU8FjpHQpgdwjVHkyYasC4DWCTXB96R6jmiFziKxCohVMYKbz57vP57PbeSUjML4HV3LWG7sFsrbZ3n3RS",
  "key37": "5aJdwPw8vueZhvemuv9RzTPucZ45LXYRBRWHLEcVntSCUxxZR3GL6PpmZmzAHDxm1w5sWUBpoRscV7jEH37WL7Jm",
  "key38": "3LjiLrT5zsxmuUKtqftKczWcTNNN6JYFkTZ6FDot3HxHKT95eQ9Zad4XGU5XnqkHuMm3CyTyyCZnKzrpA6tHdZQY",
  "key39": "49EJkJQo8X6vVJJ8aFQTUAtfHh3jbjNbgjmGrEba6vTjBjBscpsU1jt65nh8nUrDsMz4fbiwR5KdgSXLm9Eav81y",
  "key40": "2kiTJzHvHAg5saCqwegWFfEbmQYAFm51qyBBBYkqpeenjgM7VxhEWMMzAzxLab2NXCcNNU4m5s4PLFpaTX9WN36C",
  "key41": "3njPXUWyJxY6KRu5dm5wqaSxML4NVnmcUeQnt75m1ewk29SVugqwxYKgHBFhQHptKDd6ouZ57pyrMSAMVvHH62oe",
  "key42": "5r9yHz6qELiFptv3CdC2tEjXvoFcRZckR3yvAudZJ7F1UTwt9NFGJxjuJVsVmt7izAYVcjt6P2pS9eKhfjudy7Qg",
  "key43": "hvkKtKhbaA8CpH14hdPaiyuQMCi2JnqqFkLGRHntPSH71mbXDWM3Ljv5FSUeafwvTTH9K3a1oHYYTApRWSVWfkG"
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
