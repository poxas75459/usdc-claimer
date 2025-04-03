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
    "3Eh8b61ZvuQ39HxeR7o5cjpGKe1TYyxUMCVz5iNob2GEvDzQEhEF5fMUsdzNddfXK56dU8J1fGqET1UZDVXDM114"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfc2dkc46ceVu23gfrqLE6Y872VeGQLWGggcCpstHMb6ZJM1LQfuxYivarmjJVn3wLPLsbvKBcFf3AJ5tKsb9ua",
  "key1": "5JfGNAJE7zbUssM4DqyEaDcnrhexkWrNkRDYGTbXp35WYDn2y6Pr97wLHEkGvKgRmhC1F2AVcs2dH1t6XBxdkMUw",
  "key2": "5MYWn8q7o6kiwGp5GvN9xmczgD5pGoYCsWVae5sMiVKDCLoXg6g3NtMgAyimVpbbfWqZk6LXcw6Qs819okpq26su",
  "key3": "3hW2i2s5opsAqBaP362nS2YKRscpHzbD1iBuk1WeqKpg3mdzvVSEebyLUzcPRvnT2aUD9BwH96V9TH9yNtWkT9aA",
  "key4": "3WAVnEEym3VqdagfiNi5P5KD4eFX7K63KKPrd5NQ7qLSk75N17N5QhbbDuXuyP6hGfhjN8TpqgmY9CQMQKrpQ8k3",
  "key5": "FJVtXL55rm1BLzvhZJiUzD3KpvA3BEb77eRx8YT5LxGv5hQYkwcyK9jrs5G3Y31ksrjMb8e6hP1JifHqBdTqWku",
  "key6": "5PthyY6xd6ZFzjYTggVpTZ2EfwjpaXFtRHF8toC9aM4f1EYUP759EHRp5YMyubwcWCPvCfActS4moztvLQA148Px",
  "key7": "3vmC7SQnx2j5jeZi9B2LYfknybWRsy67qPHgVHxV69dArK6s5xg9n3MxRJ3qutHjjoBb5fEnqey6Vq4AoF7VDGPd",
  "key8": "3qLnjXYJ17Ct417iYR5wcuf3V6mDxgS2RaDYrgzSCNFBY5PH2E31bfzK2L4zdSfH62FQhnT4zHz4Twni3bMtnRRd",
  "key9": "4HHCmVys8FDDND7FpQ2dsPy2ynXW3LmuDmxadxa6PBK7rBN9nr1SoqNS2RA1t4kEh3NVV2S5G3hFBiUrJwhRLW6a",
  "key10": "2MwzP33HqLLiXFcJ9eMYwLkdccfQ5i5vndyL41rTAxP4hXbXkWGMf3e5K8LWqptkE8pJzcDqfzuzRfHqoJmERwrm",
  "key11": "3sa3JpV6tzbBPNxaLrp1baDQ6hFgpTReVGu4WEYtmdL7K1zDx6YhkfGUkqi5GS1ZupyHo188gjf7kuz89wVGe8Bs",
  "key12": "3NCuEg6mXJZFSeFR5XqCHYYnZM6Ask9Hef9ckK2yrcxAB3MfQrVMrhu43VatK6HckZ2y9ChAz1Jwq32xvVc3LBJD",
  "key13": "2nigt75HGLPan2g8DmVKNV6oWns9B2oETaJ2a8RkQ6i8RGvYctGPR5BEUC69i5nnLvgU85CxnTSBwnfqU8ih646A",
  "key14": "2anHiKNs5CkutaJQuRi7UYS2iTBWozXVfNjp8YjMPi3XqDN1qv4fFaWyfdu5tN1eWjucz74a9Y964qCQk6Q6dXx9",
  "key15": "5VSyjJbwBUQ2ETNTCYewUqB7o8LBkRtTrn45hFJCAzqCLgjV8KU9AmPDonx78zNKEXNV6XHxnCHUmsa3gsCAc7bg",
  "key16": "45a1LvMWrbjhjfnE1cznaE354rGDdU9zaubYyEmMLLmVkLBdfyRTbDzSxRDmB3N1qSAqNjctECGmunco2X2u39jg",
  "key17": "634NMM4EQqJ9avE4Fisk7DQozJuc5m7MyXdZf5UfeArHiTSisdKBzR3oE9xPvevoX9Y6q3LjTTzcUVXt2B8KEBWy",
  "key18": "2rGRiSYRHupyETvirXwwKRU1uS3LP6RXopDLhY5Y1LZaZjnhCNDrUGh5cP5DEMhgaM4SYGA9ff5eTWS75Fyx4565",
  "key19": "3sRXWZHirfCeSMksceCL46pc6yqwAzUTXSLjaseVmqUoACffUytn6PTbHPHBFcw62cEtpBHboFMCqy5Xa5b397NH",
  "key20": "3FebsDX2qsWsUQSJ1KLw4o3kV4TTCAVtfqAbwEkd97FABfaYcV1966VpJ4YSoF9SU9M6ixmJVPUwgxcjCiRudKAA",
  "key21": "bK6JdnhHei4AgMASSufyXsggFbAGkbpdV2TtfSeyjrcNdYRH8K6QoYmghYL3NQcxHSbcFhCFihr1RDcyUXWqNpw",
  "key22": "5reRECFKaB3hrBqa62Tr4GmM846Q9hXeMNjQ6t62bhs6YovdpQxBnHkwQ4Dp28JWMDvy9sfniD7uDV1wURR8vYQv",
  "key23": "21K9aqfwYwbVq9Sj8MHmjMyRVjh2myvzMc2ybHTEcKK82ekgzDHdKuaDoGfECnfWFRfitmffAhD5EWXLgRMYTQiE",
  "key24": "672hB7HE59EJDDkaWXo8q1j9oLcPsMPqfuekGMMFsPBA5qxZ4UexXb2xFQaKvTV1ahSnE6GPAT3aLfArKZhJbtAw",
  "key25": "2Nm6JgVRV9427wo7BFQZfB6JqZdLjhBaTtz8XKqf2AQrApnKDHEdr6CgknCzJ9Y6vzkGnfkiZRL2VkxkFoeDW8eN",
  "key26": "3T1FFq2gARwbDNGHBQp5KWLy3gdvQHtEn8ztGR7uU5MmKpXecsDAR9bRgshrDMJy95Af7zg6KfpSTV6DQZzM8rpV",
  "key27": "4gw9EZihSN3HjhhFppULQrsbR451MkpoQz55M4PiL3mr4M8VAGmBJBGbvQhTesR9RptQvmyn2vbL5bdd9L2w4UAf",
  "key28": "4N5usdUwTkoJ5AnJEbjApjgHHJfUeU1nY8pdGnSwf2tZxJMoKW4j5gyLxFKSsC7nZqv77suwQkvskkdf9h1Nh4bk",
  "key29": "5rcnuVRwbdwaB5SV3kmUac8Z3oZh7mxogpWPZLzPaGM9nL2oMoxcERYL2a2dey74iqqSGSTKkRMTFTsQGFDx4Jax",
  "key30": "3VXfTUd9pnA7BnCtvcVmAriC6nNdhi6FZmq5zmf2quXQS5v5ZeqiUF17ZyCc3FAwGvGkXGMeWYCDUUHYcFmCzCaA",
  "key31": "3fN7UdKg85vyTfESNkWxAME8S2i5HCBAeTUwEkdvfaXUGFrgDpxCEF4eYUv87kxbLXVUuFwnDaDtrHFh4vLLhSwp",
  "key32": "3NuFkpn5Qdf83hWW6XpwQMs3XXJpR3etqEgJXfRHrckDGfMeaiCoGrqNHrNEVAD5dck4ovWM211bgDvxCeWVQbCz",
  "key33": "61trrX7Ba5jPtnxU6QGPqFujMewAvDRzGbGLdN8Gya8fJ5GMzzfa7Cd5ubHNedMZTKxaUXAZXuRGdBCjgxxnabvM",
  "key34": "2Cpk5wHznqnBKdtDbAJcqWV56uBRZhsi1LciNENx1M1QuQhuWe3ifGyRvx7SoBKP1eX157gnNwiqWjRpGwLDkxWc",
  "key35": "3vqJuXTdt3Excn2y3iaqnKVgAbrpsXjQu5triS3HEo3mxYgHvwes1bh23RS7ze6aoWbNAztnfCzpu4eokcHozK5U",
  "key36": "2W24g6kW5FeYpywhWbiJuUAhWRpDcvLjpFEjMCfm2ordcsfegeb7cDbVM5ZDzfXNiRxjstw7ZbvCeHCrAqHQ4QoJ",
  "key37": "38oJVqnbHPEtzHbqHEPaGZg7Y792Fe6YeEeSQXxtwBKpjYL1AZkgUuYVSvgRqnRWTVpR5SmRefKvJw4zi81a7c2H",
  "key38": "37TX2Soeetut8GaKG6ivTts2Z2dhCY1NhhqLJmC32NW1EpuqJGubMXKkwK4YCiEM7M2EhdBgU7KkFe4K7TpRRUJJ",
  "key39": "5dYCM3B8qMfHoqSRLf6KKDnDerXGi7AURE4XYYs5d9fiDjpP3uR6VT9CFBMZ4pTUW5NxsVtXsezX8uD67EmkCGc1",
  "key40": "Guq4zRXSjMSrcYEHvbevEKeKooYJdR83X29k8VjLjsjjCHPTbXnVHUmcMHyX4qaJAGjjfq6xesBZYoC5UYAsNcF",
  "key41": "2WsgHcjgpqUDptiuXQdWR1g8SQe53LpFm7JWkcdBgUFAfHQ7G96DhaFiPkWcN6pYYd3Ajs5uQM6EpDBbCCRUGeFB",
  "key42": "3cGk6sULdZ1X3ioZCKmq8vt5KukUwhGcdYGGJnR7dohzFa2Y2uRqt1kM1zWDXvHxLRKDmKa9P7ZBJYzNUmZzHe8C",
  "key43": "GSdwFRuS4ND7oqC9VbQNSVxDmc3GbDDMseUsyyZxkQJEmE93uMQYDUKUz6hDv5UBHtuj4w1m2YeNjALkbkAnLkn",
  "key44": "w6fZrmHQUFnMC5zkU5jJDTyyuXWwPxBk8urNP1Z7AAvLtynaKjeCnYo5V1RMMb158yvKkrynb6Y4nFDup72fLsW"
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
