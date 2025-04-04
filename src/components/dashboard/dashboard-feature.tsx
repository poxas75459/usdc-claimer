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
    "7ufTG4QSLReKfNTiWnj1F5ef2c3t4QJoP49sjzmWnLN1vFeWHpBLz2oroUJz9Gya87nc7CtJVQehyGUknzUrTdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZbhhGw36cF3LnhRwaYWuM4NjjYS3GgSLxJQy8g1GwBkebNmbhsSiSrtvDAC56PYBQtk6BjYy2joykRybEnjM9d",
  "key1": "2dkbLoYtxiyroTSKsJrSwPENz5THnRxAafMubt9ujyv66NhSaAL8yvBqnWyn2nZSenNExnmpT1XsqrbbVovhK43r",
  "key2": "33agbQ4Wb8DtVpnSWe6jhu4eRSvo5yxUXbrjG891ECjoz2CXfuQxitEmg1Zu6AU3ZHPRnK4JktwirQBEYdhgXGdr",
  "key3": "2E1MC7VZCUyfr3PRHcztjLr7gMRP5bghrd9E2RVFizK5krjkLkG88ozgXFiAYrssxKskxX11ErRJWXDppywN21Dx",
  "key4": "527xbdyrfjtKKwxVPPSeoXYHjC1BF1siyYpKadcxLcigiUqeo9s5YWAKcKCr7pdx2NhHjRxHZk8ixTpq7Qekw4Au",
  "key5": "4TCh3P2JqwzocMBFYcSxbbQqd9BEFcimgZLbkFMzwakE6nuvo8m3cyG1fAaEG2FQTELQ9Ttk3yFj13pkec3RU1zD",
  "key6": "4XGzemqKvAfKKTHtxUBwBW8Zv1V3ygcfNdWNtMTdGubc6g11G8xxt6JHUzPK4ADmxX3pCrBAfFdw9mQa8QewffZR",
  "key7": "5Hck39pWePXiYiXLcJtk2x97wGHHNwos2EZMsyG8SskJodG61f6RDXFUdgjFQusLBWkjK4ESMRt3DPC6fkHNathP",
  "key8": "FDsMVJzgH7yMJjdjjz3G1FwzSVqoE7j1KxZ9fAD7nuECmHsDXLnAsfJTDcKG6DYEwa6eLsmUS3X79V8GVXQwAjM",
  "key9": "3H7B64FeZipj44BxP59ngXtJ2HvjR3wrXV3e4rQkVR94PmT6dPiFPdwwmXLSXt5YAAW66j6sR6UAQBbpSEmZAojU",
  "key10": "4qGh2RaHStymAqFMRHhqsZ9rajmPWZ8mRugnho8vk3Z9M7idHMgDoT3mk19NfEMyaurjaKEZqrhhGTyWX1FViBsg",
  "key11": "2JXowMrZyWqfzB16pt92iHTC1gMdGxfB7yGvzLnfBtFCC74hh5jRsmZLXzEjHaTqkmc8tH4NjoKXcNZqFLUqRnMC",
  "key12": "3hNY1kitkL3qJV3a86PX7qsw4nazfxPPVnfNkNVLkL4mVvn3idgyGw1aiJ8TpH7KWaUyJ5LMYgHzHLpakBQTRNMG",
  "key13": "3YeNMnF5V1tfwfizgMzCio67X15g5XSX4UeXFNMcCtJT7AyzDJZxB464jD8JsUaDnQg5G3RmLKyBmtZo8xZsBY5V",
  "key14": "3eSvCp7NDbDP3s7gztxSNZodiH84c6Pf88jmmy9kRtKLGXtZ371F8R1nfRzsXEFWXfSNLRRk7QY4WgJeoycUAoZK",
  "key15": "5bdpjDUkFj4XpdM9tjRnSYkVmYRCMZxVSQGAt97swymcQZpcSm5mhsWKMVfdSuZeyKBkn49H5PUYHB3tA65GHDzT",
  "key16": "LvTf7ZUWoBbEFb9iYNxUTwhFh4f9HsPC6EWB9AfwdZBWhahUR8mdZX9Z3UXh51fbKV9Bz5dhpnrVy1MLJ4qVq9d",
  "key17": "2GEpLWSDZnBpfnwQm1xS6oNDnGRsX5P3S4Ty3qD2nk4SVna3LRanqk6eVFAR7k8yPXCdsXXHvYx6VDeoxUnzc5th",
  "key18": "31TyZGJK5S3bNTaTofhKLDa4M8Hu3bftkwKh1U8sJPwGFA5863qMuLzpvZkeizwvvQSrSS5NvuKinvo6NcZsRvtf",
  "key19": "4J3GVhxKV1JJbbGf32b4WVKSWjE4bpH7x4agYxRuwsPM3VQuhKGZ6kNWK4VVKhhGKjZ5KDXJ2R7iKmoz6P8Rkw3r",
  "key20": "4Zefj4hpyhuZqBqBvFCfvMr3TBSWETgH7DD5a332VH8tCVd3nKx37bw6rDYeo44feZzaVuaa6qzFc2PG32UuPTeW",
  "key21": "268wXm3xL74bHVhiDj4NuZ1mqi2UmCRDsn1wwBxyWfAXR271emYqyFT2q46xu7uqa9Men77s3jaaCXF1DTKk7vLq",
  "key22": "2PZ4QzxTk964BqCvTD9Zoviji98YF1s6oRPBW8znpzav5RZti6BkTioWYtDzyNQbtx9zvGYeR1xnjcZBGUpPTMZD",
  "key23": "4k8zxWV2bRfNPZ8dRa6eDA16hvgFE7W3tPSkqvr6rNU6mE2efY4pSAkr58tK47QAscJ7jE6eAD5RzhF3tb5G4EZL",
  "key24": "SZZ1jcwWyDucPaZsNrhscnjmPX2GcwfxXvQ7uA7pp9XF2qkmnYb5PBjakoonoes1VDCxCBMw5R22zBuwPZ4cjn9",
  "key25": "52rRwrADaE4YNMuiDbFixc2H5E2CrE1tWnomG8GxVm2cRTM1q2dHU771xnJCXmAA6VBQUax54H2X5GAmLxsdDYCv",
  "key26": "2ZWSzPnxyPQEDr1f3PmtxzCX4z2whQYaRjVB9WAuzn1KzZ7sycMEntHSRMJSWD6Fajz8xrkiRdTTjvGroMXjJZMJ",
  "key27": "22fuex5qbhtqKKoAc8u5Q19gmRBBHXEmi8d2fQYeBpgrR8ekg4yF2Lavde9Q6Cn76RpYz4UhkbR57enDYuK2uRC7",
  "key28": "S633JDDtfYt5MS36ULGbM6UmQ2o4boK4pwemfRadQCrhRdmH6QVHVARBVaV28D9deaJweKswcGWUczYxEgFA26H",
  "key29": "4zM5yZtx4VH8wNhSDXXt7x5ps6zDg6E6SHs99qoNrd4DiphqyYpJoTqgYeQo5p2tSHSJWJTPfgKdrpS3wpW3DTRU",
  "key30": "4xiWPir7m8NAL3Qjbt7BL76qXfRDHg2p7JDiWEjyQ4MQRyXAsUxZG6EBNTo4RqppUVKiWby1BU8aYuAb6khPp9F2",
  "key31": "28AJKcZd9Xmf3XamZ52ZAJkXFkfivKzBHRxvmJPQ7qbMYPH5ptYp8rvewavg34KSA2eRV8iGyf227m14aZwzmSyV",
  "key32": "45qkkAJu9H3EHkMPgNMH1TeNA8KJAegeLarCJiysiSr6UDXaRgsur6nVcbgdBB1se95USQs5M7ABf5u7zY5VrC8a",
  "key33": "QdtZdfjcz2F1BHE6EL76j5Z6voYawW4HYhrJhBLenJXwPnbf9nSUH1YYr5BJf892wq8o3TpaYyjc81grQAzqzZ3",
  "key34": "KQYAA6ZsYmwnWebWrzLoZPenT4zMZd4XyjpBMZ8agWxzSQ71RBk4DsY7FRdrkndUhYVcdhvDf8HuFLywe7r9UhD",
  "key35": "J7ERbmUcpGm9nwmCiVRTkaeYLZreU6UiipGT1i1LGz4nhcmq8Gapw6KFHiozNYPCao4ACpqsfBEcXsCV39boN1e",
  "key36": "6584auhwqEPJ4NNKrXwMnJnWgLxMWnmVsGpHGGvhwv3uKsiFyFwatT5GRtGFDn35pNHM4qevmPbAK9AAyy6r63S"
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
