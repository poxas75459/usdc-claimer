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
    "5qK1eaR7UKM7LRwuEKnjM4rVfgxktiGgWTEoUHEQC7AXujvg9uT3gRqFW9mNkNPwMedVd26ZxRHJrpigVos8C6GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnx1DQWeRs9Ls47bYM5xjLmVS6DKMwHpxp4AWAodztHP52sfuBQJwfjffYVDDhxy2rQcY2tunyi9dS9pzc1gu69",
  "key1": "5RCyy7i6zg8Ji22nNFnSGuc1iAWPoqDWamFL5uRMaxMVp2HXtv64nod6Sr1nQpt5th2zDAf21o5kBkJcAK5rhiZX",
  "key2": "2geeEkhG4TVTfEfSsBToU52DvQp2iRgtuSqoQAdNEAaNbAfvBfpU6H6CDfn6zh56SomVYwE359d4PVfBBXAYhSPi",
  "key3": "5HLsCDNrwToPTagSMCwaDvtBQ71Cxoxq1jQDH99wEkr5vzSwfNxb6if4KHibgyvz56zPZCPFSzN3n1TQtwXXMYqC",
  "key4": "5e2mxwk4mySBbC7BeZ2EhEGVBszwfhP4RCHpYUwx78Lvd6QiefXhhF3UBJ4tqE813irijx6v26EJ49LgdMZA1NVT",
  "key5": "NEQQb8HqX4UNvfaxyd3f69faoBU5LG6Vv8rHrETkXyxqFZsQjPy2CGDkfULBTHu2BfbHP3NMoziyezAdV1W66D6",
  "key6": "4ach4BAtw73CLtBS5CJb6Cb6QuLFgZvMpKTooP3ReUXRZL1iS3eDx16dxfX8typ3HEGXN2Woe812MBs726UcmKNc",
  "key7": "39vQSn3RxmAHvonymYY7NR52PoeCgRBGAnJYyyAKt8Dbsx2TaumUYtfUCcza98NLEjFHrGVZVa7yCTQPE7JYR5CC",
  "key8": "3AHDSaRF6NiJk2TCRG6nPk4jjZiVcywdN4Uuja2rUu3YcpdkHP3N7Vf3jABf79t7Pxm5WJQ2oeyxrRxN4o3MXQf6",
  "key9": "54P3EyQp6xqwDFUWkd1kqsoxJ9GnZLHeSRZMLhvijUHqQBAV3oXQ6pGqvnFWSHRSb6KbYXpuqs84PUJczC295zCV",
  "key10": "3VZas1uHT26Q8Boniv1JMWJ2wLPH3v5pn74zay7uKzdK2nXoAAHjQR7DFgnbFguxVzNaUyEeBWf44b89nu6Y7vuq",
  "key11": "2Gq2fH6WuTiqKqea7kXMoXDLXhsQntXLxgB3pWZtYUvvb3Tn7uwk6j2FwWxqXbFwW7QDfFd8YD6NS5a3S3c7pvJc",
  "key12": "cxLabydL5MZwgo4YEyv1precHenkvjHQDFQVfGaWjNTj2muoP6krr56TFxtA6NKALQ5yiehk8SMLSKZEfMQRdQD",
  "key13": "2Tz7PL1TZseHPQdhM37ShUYJLFBrg9PZWkpew3A52SNKeh3NT9h2TL1Qh6Sy3TnV3MpZBVvFSEnT5tfTQXeu9qx5",
  "key14": "225JJDF49ruoAR4LGjxXZZBCEftPmaTRQGiN7LMGGEHeCdLBefN6Ci3K3S9AAPxPD87pJXwsR2xhHxKcnmuvzkcL",
  "key15": "25jgEn52B3nimesRmaiEiQVcjTSRQ47CLDPTsWjEUy5gJfv1fC9aXGpEjZAi1nj4XUJUt6DDxKcWmzmr7bwrtskN",
  "key16": "2Fvop13yFJHfodYE5jm9MikJLto3ehrs2otJS3u95qh2frGgD3VL5rK5z9xuBGGkfBQSVWXrTWdQUXBkgvyEy2rV",
  "key17": "4AdEMH39y3duaaLwXEUHVQ4GFm28RtThnYYAxfLR9UGmqxkBeYA3JaLZCzmuTTE7LMXDegufvDZWpYNxKtLPyQx",
  "key18": "wYLKjP7Vy3Zpw3bLeYpFyxHb8HL9kaJfzLGyRaEsFfDGMgJzCX5chayE5o1KCRkKGHS4ZCDed7T7PvZg3MwPSyE",
  "key19": "2CNeRdtVmrmsWv1S97JNivzerbnKXV3UCZPTLYQv4JxWvJy5HZN9DcGaYhaRZwY1BMQTLJfMLh3pWgQTADPJYrLb",
  "key20": "4ksz4EM5vCyGjoViH6bfUL8ykTPEu3XVwqtk7FSeC9YiDejsttPK7JEqDaD9wMCAME2PFQQh4xS3mEd1RJGFNk8T",
  "key21": "4vDHBDr7PSuskPF1XNsF137tuUAhR1dLaYpoS2uphygWaPCxHqDe2PwUWeiyfXRvAPFzeQmdatVfbpSgPFm9sQYy",
  "key22": "4b3qNR9xavpU7gA3QS9okc68vtkZygYqgc3Q2RVrpCCkm2ES98Ed6SQnVmnKPu4oaqdvc9Q18jdz724qjeTsT91m",
  "key23": "BAmn2RUkAcpFhJJJEktFtUanNiuyftH2fp4aMdSu8qbVTQpedmakJf3AMdKXL4RGwMprSBZSrQE4ABowLUb54TH",
  "key24": "21G3ZRg2WPzQjHyJcfq7RW6thzdH2HgZKD1ZkFKTm9CJ6RU3N2yiLqfsX7RzCsLC49FxqHJwgFJUY5H5H5baV9kQ",
  "key25": "3cLyVgYW9xK7qjM14rpkx5gMm8cTkX4GxNJsW5Tqor6vM7vherKmh7ikh2V657MhH9ULTMsh3tN9cqiqnzfZctPZ",
  "key26": "3mnxf9G4UiMKTSXioX5eHczpP9sLVWFN5fqF8y6NkTofcjE1gEqQd5pmGoJkGJAuacq7NMYS8WksEh9Hu75xXxNs",
  "key27": "2UX6X15pB9wDq7fgWAu8RWTEaepmHYzZycVcfPZz25fvrp34QK4ah7LPsh21g7HtzR6KB97DmtppcHUTCatxVurN",
  "key28": "5hVWitozKJYCcfEweq2N3ee4YFCESZoyDAo6UGtivDQ1SjcuYD7yEiuH19p4sCkJnakubvS3dQznkZ1AQcLfKcqE",
  "key29": "5d5JhJQrFAZX2Bfpx4mQjCfA2CnCDJvVD1abxBxsuw2GKVdeJ7gvuEP4gHGy78Az3sdYri8shTSiUnws21ULcDx1"
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
