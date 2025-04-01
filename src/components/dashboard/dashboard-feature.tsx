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
    "4ML4D93geutyceUFjrGmxRrX4EYetJ1Qu72Aft95j67H3BBFmoGCzgvPGTg2LPniW2hZz96MfuHesRTnFxbgxJep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkUsh4tESWq26nJv4D2c7VtFn88SaR8S9vksWinMKGue4obyodFZZZ9f38ntaMaVDRjkupGUEJpG7v4Hugw2WpU",
  "key1": "4PFjzHbXnSmTNd5HKRtG1h3MXDHRi9vuFsisD1GpVq7jRhq758SqA1GrLhehHs299AZ9QCca4JSLJFkKtDUsj36",
  "key2": "3mKfr5BmtXUrzpPycrmr4Z5zuWkH4STj2R8Mko5sKtJaMFy86oprXbjZMdvKcj28xD3zwjutL3qkXsgCzCyfwNXx",
  "key3": "4VEFp4bh1yzdpRVqAMJGE3VrjAMsLeZaXKGDt382wvC55tESVXWAtsFJYYZwMZtZESufEGTotoWb6kuDvyhQBTx6",
  "key4": "4tNG748Ci2yiwRCUfS9cjWTkYuE32iL6kuWR9eihKKLfGVig9ReNeUA2TJGHY9LEV3d9EzB1xSDJMZzskoFGfso9",
  "key5": "4Xz31yXUTm7ucGHp5X7Hp5f9aEWtMw4euXXgBi1vH9tdy9dbcWC3bcCGeNhiUazA4BpKdwqkMyZ6A7SSd4xpSvio",
  "key6": "3BeaBij2ugxFCEQqHPWLWrSthT1wGFesGnCmwxa3mvLPRJJoSnDhBBkRNeY3d2qowsipSHCChXEJKboyjVtDQbuT",
  "key7": "vXEyKLKSoUXFi59pUH85t4AMWRWHYs2xNrsbR8NJLRHuRTEoXEZza8FfaXd2mWxJkqLqXT8mSgk1uqCN27FwoKb",
  "key8": "3YXVu7EtDzhgXLo2MMjhq9pxpH6JBpZHCHRE2a3xYujGMvEPZ7Q7eSemmQjHoVz9nmriVMHXFtE4BeDA8vAvcWNr",
  "key9": "XLcP6pMiJKPXKmioEHA3cokewqeBHDXxD1WgwPQU4M4h631zt6v6WMH4eTHRrTpsprr2jvHJLR3Wuvb4jeo6xTG",
  "key10": "2yvZsxCsq21rqxNPds4abcNNC3knHdhXvdkwEbvu1o3qshTAeM3dnBTja4uqt352VCz5ws9AehGBRozRWhWVj2br",
  "key11": "4FWEDXKz2R7wSzmUdcxaoo6RdpQLs8Nr2SdN3AK1Sa69LAsRmAqa7HfL8GJW62H46nyGYLjsEUjyyqH7mZBNBBaN",
  "key12": "4sivWG4q5vyWnAVQ4tT84QG2VM3PimNfCdYyYRZVT5AyJmfKYSRPVAqBpsTWK3NQknCE3vDofVrY2bCZ9yGGLZkM",
  "key13": "3QcoTCjRZz68WGYKmLKi6KE6hn8KcpuQ8pqK6LE7279XZTRg1DfcYiQwkDKzsyqVdYWZtS5EQXQZ4PgVR4kFbSxQ",
  "key14": "5zYs1D1BUxqvtV3eiUfVpWV3KMgFUfQeBHeKASw6ELADZ3EUvnWfTTcRr7yqBHkvxRyUKdT5NZoeuyPpra5URjyt",
  "key15": "2XnZnhWtJh4RMs2vKuGXNoy9SRLhp41pKaFViuHfXoJzw66XZfBnmcKEY25miXXW3kVUxBiAPrk6MF8WE4h7bkb7",
  "key16": "5RXGbnyQfCNPNuDJc8ELd7BZ8Q9DSis5nj4p262NHjJouTRPV7o4ZEjVdhmx39Nn6Miw3JeMjsRTuokuL3A7pNWr",
  "key17": "3LdFYD9ASXcNx1Rsf5noMUQBtSBvuLPLm6c8dNTuQJHNaCT8Y6RStkFYUZBWihgSovB3398vaqCfsiDWhhFbVzQm",
  "key18": "5NUJJzCYwR2sVb1D5BuSaKmNdiegdL6LJMcthqZLMf7Ajqes1bQ9u2yzJmdrrX1VkatoQC9ycXYQ8MY5ovxW36KR",
  "key19": "5DitFLUeNegditRFMDKo7dshKPb26MyaUUmKsgniA5Cjrbw8SJvnpaS1ybGwWoTkDsTZRQucTzinv17n4ZbcEMoK",
  "key20": "mz6VN2yNBTRFYoRQTTqX2i5xzGC1gUKsAwDUMwGhW2FrrJQyxpP2CZZJEHztVaygA5j3zBm7yB4qJS3qfpwYmSR",
  "key21": "567b4wnM1ktbuP9X4Xu9x7wwk3XYnGMi7tgR8xTHS8tgPJVLMhcfDZbnyWEydGxoaybEaGPMTUJbQiRcoMk8mWLX",
  "key22": "3GHVxm4u31oNAs9UzXaZbZhVVweqrAUzKcNdrDkuiw2kLNxtZTYdVZUwih9Cum4cZFU7VH1KqZRwKRDAmCymgch",
  "key23": "YDS3kuqicFJ8TumsaRC2BxM76TFLPCEMb9b67oLETQv1JB4azK8Vii4FTG4jJVRMLSRnr97Rh1nMMXQFCyU5g8G",
  "key24": "4yuHELGd66a5oTCUpXfZexVjRmCBeVerp7ZeZcRtiSr4Ka4epJMHMzFzQRuhmTqcJc11BVP8DFZwESn5sFuFYCsC",
  "key25": "pJE2eNEG5Qk5HvVrTvuHE83wPK3Vx9ZaeQ3sSFmaN1j74z4vRKiUdRGDRjgVxw4FvurrzYBJBxxWimkLkPfvRMp",
  "key26": "2XzLoBbfhMgcSjWo3y3Z4ayRZ2smmHpgXfhKMjB8PTrVvYHgCRoBsysJC2i2cdjYQaMDWTGGURiyxj8VbkcALH25",
  "key27": "5whD3DHxRDGpQSrANkdqSeqHpmwHqjr9xHFkNtHcwHQhW7s8GbTbiPY6NHZeNAa9qDwxhm5x6AxZ6xbXWug6LDaU",
  "key28": "4uXjrmuvLG59SnbjNAHVsNCezLXbp9beYd45sE59MiALfz5TtTLWxxjNCV9RAdNBuC6vnetvuM3ufXyQ6rsfDF5k"
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
