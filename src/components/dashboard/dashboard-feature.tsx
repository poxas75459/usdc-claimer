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
    "4Lx5pLYepxuLps8y5RskX1t4q4GGrw25xkz7UMRwHXnWajpL9UZVrmobgmohg8nF8HLfWpqcgZ4AGKyUzacXVMKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33B84CdN7YQN9Tr5VLSo7oa1jxvfJdgLtTRckkx1cF1r21mPgaDNmHWd3T9jhky4KiRFqACgqMhmW2vktxw4Wtqy",
  "key1": "3nyik27KpM5ZANKLTev81ckVnbfjRv6ZNMjqT54nxEC6krh3FBj7sQrCNMFa5X7Q5RNAEWXL5ViJiTFCVVMuCpVk",
  "key2": "26cQekFp3Whsbe7jqoLEfTcWfqDZEBe3f82mncKE8WRgMGSQcbsGHJV88aGk13yYs6uPmsSkMLEkhGvpnxHnpfDG",
  "key3": "5NVXAgzqKrk8wx4hPFhjxmDk1AhHRPjvcLQLw2j4FcoXUoWABdWo9JDHUzetLvJAbto7V7oRhiZie2Qpx57m7g9C",
  "key4": "4EJsE3SKEjmUT7hizSoYtm5qKLrvyCrYdwRjbuTg9KKihBPTanJcCvc9mmnrCwL12KddNkGeE4LTUkmucuBcRK9a",
  "key5": "3AXXDVWzA3LhNNNpankmaWfBpKtLXGY5PMpcKF8exvs7cR4KzzMCJ1R1xGaaMj3qmR3LJiKdfvb3DXmjHMR6siak",
  "key6": "aG4cVdTERk4ut6iun2W7fTPXwkzkisWgaWBuYEBYeJTsQkz3giVNeHHxEwvVFiCE4PwhJTQEGvRhGz1VLAeFYXc",
  "key7": "5rrrcf5cGKBfdopXJWeoAX7gSVyMhr6wzYTZBuXbf2sC87RbXfb1zjARRnz1gNR8m12mkcNRaAzHfgBfet1ccu3N",
  "key8": "2M1YcK4KmqQDb7psA2uCcwAjfMZrw8pWHJnJ2JvYmMK3F6rCHajPyS8u6PEg82j2r3csQqca2LWkwzkUfLCAnvrS",
  "key9": "CecHNwgt1MoEVXSVYabSvtbRqJ1Eoes64GZ8wZPaJhaWF7ASetiYgvuGdoSBzPuAnwGMA57xLYFCvjUJkq1btX6",
  "key10": "47UryYeiJQg5WUPsVnhpDKgSVtExm6SZqZbRQBgoYUCV3bgdjApvsdBziPo9E761yDVxqNHfLFQMdWRrwH6fHiwW",
  "key11": "5VDpbHyxsRBfMt9P3hSmPTabLj31C6JXAVA8wGt7CSgZysa8ZqLH8nBZGbCnEaqJ2CYh7UKikT345BBhwUq2AZT1",
  "key12": "3FjiQWnpKYgojW5atNcSYPVpVqAiPP1MBjydzUJay1WJo7GeD1yDPezbNZJCFmXTqDPAVa7wmnjjGDJWHsrXNAG4",
  "key13": "2mPBoZcTyENY3veysqUSCRNN8uqU6CNFHrMfAFZAej3N2vTkYncTCLD2y16uvXAgb7UnwzPqBdGXJ4Gmyr5U83PX",
  "key14": "gHNfojjcUhZmxMYA8dRaC1BUVgZBXdhJvE23J7JSSUEDVgMd4XiGHnk3jSzjsrXbpqz2NqyRb6Wk5PESx4s64Ak",
  "key15": "4LP75hSkDcon8JZnHcmES9ocq7RZcvzQuzRn5AC9wL3Bvz612BivDi3ZcpZL7gwU2vfA7q9eWSa3wonsvTYoTCMM",
  "key16": "XZdipn2hYsgMxp7Zi97NJCyAiXaQFCw2fosA5cnFWY6NmZychsxtLuzpgmsJSNiLu6zTUC6NJeenrZ7F9tYWhX7",
  "key17": "5ZStYg8LEktYuBEX6jb1XNeghCfLfNbdJfHge6CktWLQgWBhuWZroonoobuuHTNwVhRCVFqcJ3jS8Gc4rXYBx58A",
  "key18": "32z2LgVCYtX1RNCaZuWnrBpKbidG5KVq5wrkKYrf4hHvuTHKgnVdcBi5mytcTTgRaanyfhgpoECiDqis7NmLsJs",
  "key19": "4af3qJKKEzpEEXBF8jJe9SsCuDe4CXs173PxYdnYZ9ncSBt7khqwQwHnsdKT5oYP1WLD9mSNZiV2xAJTozGg9acG",
  "key20": "8amRwqVg1qtFPoRMA6DsgS1RVUwjuihx49Xn2KhtqyL2StyjgWXbG7rPYttJGiS6LCFcb4WoLA1oPQFk4CnDJc5",
  "key21": "3LEV4uCK3vrXVQ8zvZ9MtvaZbTefY7Pm54WYt6NhHGT5mUPQnFCvxoqX18Ro7PkVX2tVyaTpARSVfzvTPp9zd42",
  "key22": "5S8PD3TzACeEERkXcfCGHT3MnTmN3torhfJV2GSXgCiJWCPrjtA6i4AgC65d65x5mjcb6LfCPDrU9MMj6D8vpqkn",
  "key23": "zRqCqBpjz2exAc7UfGMq7ozCoxD1rmVucqzaq8nrA276e7M2eskuJk9Wn7FhienLUhPA6Fhj2NZ48j247f25EWL",
  "key24": "4g7wt9RBm4GJeyk8iDXd1UgrF6AqWRabGuZGZ3oyiR1NdamAdNSzHFxRipgPhHLGjXEBzyDe1KWk8qAafn4dtfVp",
  "key25": "2AQr4PkSaVHaMPi79KoHbs9TXPV62dfEijUE3ppfbZhYbeMgWMmC6aZsatSPdXEPDenjAY8A2vepsLj7kCygHgMV",
  "key26": "4Kopz843KxXXdmguuxedrRTuvNJYntipNMDKeMVte7X1Zbyb1cWrtW7SKd8gX6KkU4UFjjYQz8aR1q1933Wb84Ta",
  "key27": "5iNYW3dPYiVfUkR6pmsDXxfpGr2SNmEnKANK4r91dBB2Zx33jXq8LmUfAcYBy1g5h5UWPtyjWWza1v8ZCawN2KHL",
  "key28": "2yNAktpT4TnUYYWUBac6xKoTQkx7jxpwuK8GpS99oQZBPeA1JaDZxubfYXf2avsCGNiPykSAvHQMZfbTuaofjjht",
  "key29": "L6MkDkgDazz9LRX2UkJcc3URoJJANQ2hfLxVjSMseHiDM4xnhK1EAB2cjAZQuyBJifpwPsns98uwbcmNb8vyr4P",
  "key30": "rAqqgAg5zKhXPAvrDtpQ1e6Ndzhw7ncFzL2DdTJcoZejy2Z6oLtBCTZ8mz2vAePvv9wmpTKdGCcCserymYUhLaP",
  "key31": "62Du6sN2r3odhJLapTKUvTcLvf38S3ki1PCDADMoPjGPVsGyUy6CWKpBHpogidoqiNNWUnMcyJZAVkuU91uvMzxT",
  "key32": "2ZHMAXFSxH5zm2o8PNGtPzPmUWXs4u9x5DVycNnwKL45bC9q57W8LjTkyBX2oPWE4oK5fb7TTamDD9EBRNxgvm8s",
  "key33": "5MnbdhURz7wsAeMg17Vb1eD3BJ7rPzVs8fepuHn3fTVcFPrRWQyitfi3KsjpMkkLw84acAeiiEDVZD74rVfJ43R4"
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
