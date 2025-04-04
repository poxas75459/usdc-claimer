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
    "3F7aoebLi4kZyiJ1iFs4GhCmKPAQHoXaoXsjYKkuDH9wJasyex1nkqrgbJPQvAvvTPfJA4CmbvVvoVrNeg1nrLKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WENehpyzvfrPXn3LLkUXNEnM2z7z6c1BSfw9VrPVPGc5u1hhvJLLndxJQ1gknj4LB3AD5XZaTySgjpUyTeJeUXi",
  "key1": "9n2rx4L2e8MwmLzm8fU2sTH8zRnLT1JDdPYtsLbiW433siTtWPT8wrbhvWtzFVomPD3RBtR2ih4zF6U3FxeiV5Q",
  "key2": "2i7WujEvZrcTxP8z6DyXJ3ugpTjc9uo5x8rLJdBhQKSc2Jbv3gAKv6yhNTb5Np695TZEejM5XWv4EACQne63b54h",
  "key3": "bRhnAeTVtngNnjiquXPrGQ2KRwZJ9tUkLV2HsxAKifQBLLrtw3EwyXUiScinZ34LCKem68ngVp6MexATYquhkCq",
  "key4": "48XYdrwrwoErpz26xDQX9ZpL3MpLYSkJUcf1VR5njM247ZvznxLLHwUu1JzzWeGNwfnB36J1YHwguKuY7xxM6MBm",
  "key5": "3btxGwfVDjWxKZRzqDeopTxfFvi47FpG69p3Pbn9KJEn2vm3qjWhrCXzJ66ZSRBpA4E85SwCSMvnkxA2QidW4Gke",
  "key6": "25c7DEibvTi84wZ36HSv4iXTBK1c9QwNuwuEgXBg89VpZqg3vMkbgtdFaKKqh6VMcd4zoWaKtqZQxGGUWUcb7RGE",
  "key7": "2okX1VgGXiSbVn8G5SYrj9fKW2koLvoz5nU7cGDmqYYXfdKkihUAdLuqCAau4q7RPeZPZXq1b7VcKQom4xsyLpcP",
  "key8": "66Z2VfzcqJGQkM8Aod1vY3CquQ1FD7BkZP1g4X1jxPJkVCDLBSP1Cewwm1mqMkbkcPcZy6Mm6WRDGp6858gxdnGc",
  "key9": "HXWqf16isKwV4SnbmYo3onPPBdVZeA89t2F1TKmtkYTvi2ikjKjMXnmT7KbpSprFZU3bW4GyUZYchzBrxPYCamr",
  "key10": "2pccV9YnfoUpZXA2LBpLQck3fgJBgzwd26f5Tu42Kz1AFsYKcGP4GzxgqWKT8soB3taA2BDjqmZKESGjTun2vaUM",
  "key11": "4XgdLbPaRuxvNvXF1FwewfgHDdCo5KnuAcqifQUnFRm9bDHFpzmSVJ414jXp49REW5GtC6XUNFz5FrM6wiGN9N2M",
  "key12": "21Hba9p293eaEJmZwVVsPw5KpPEpqHhYtd9XFvEvqMYo9EaNu29PGe85kJQc6xvjSXc4PvCfgAjr9rviP6QvFUjp",
  "key13": "5dvwB7kp1cpSGGp1E1ZyNHhYtRSpfBnzUFNVP7NEatdAXxJCXWM96PpWaLh9fBEsN9dhFWyDXPwdRE7AgT68y3QJ",
  "key14": "5TPKcDcD35oAVQ2j7LvpiGSG2zohqqgFFSJFkiFHoAQ2yWvYL2XQBcWiLXYZUvw75i7S3xgHhufMcY8d3tgrmfts",
  "key15": "3RXuoMc4zvcvNeMnku6d7pjRHkWXhs5zvnyMwwAihdL4ruGuYMmJYPC62dE9gRGaPmzHFnEhoEZ4b5ejStfsQVHj",
  "key16": "29wtThDNaiYfZjx2wMULkfRXQj8Aoz2DrkgqAcgdhGa8yFBpEzXE1g1jArzjCW4xAn5RABMcrM7zXF1ZHi4kt8YB",
  "key17": "3BRdyrAFV1GEMN4LdWo7Nqxr32ogRVvfJCSQXjDkFKuCUy5aXQt3FJLQDGQCkMY9tjTJTxFiMn6RtDUX5MGPhoUS",
  "key18": "mL1V9mJH3fJPxa64eVcPiyqht7YF2GtZGwtWPNHpmEB3vm1puYzxpScu63znhpM6NTsrAAWT6FLs9YoGin7ZCL8",
  "key19": "3su5yjn4P7Kcevfz2Dhsjqiejwm3vFttVaCeYgtjcKETbvWSVqybnN5GtPsr4rq21AzBv9H9L1Y5RfByAxZdoDGP",
  "key20": "yNPbyvkzHFvPqMNwKhbQmYhf3tbHmPokPoymDq8YZoX5gYTanzLTKtM3oVatx1qNGW5yJpGiWHm1JfczwtdB1dm",
  "key21": "3UUJNvWabaC8AaNTx7Q5fqHeMvP9TzgS3Z6n8eYbqHfUmxD4LKvPKfwHFRmBVUSgmqtfJsDTrRXgXvtx1uvN2pXe",
  "key22": "5mpJu5jDELzEkqjPuByKYqBVsscbwyPFHTqDsJamGL1uhCWSrCA4uNkApuRWPpeNVBUNYMuoXQ48eVQHqKF9EgAS",
  "key23": "5BAXDn2hShxV8nxaHD5rsRS9wo43ed9rCJ6NawvvnEhZKUy7pvoXCjzCmxNK74fNAjM6eYPUpAhDmTcwRDtjhzTB",
  "key24": "5ou8Hu24rjXQ8cC8MwMsaRRFw2Hm8B3LSA3EenU3ZM9HzyDomeFf9RKPXYzxLvKNkaLY61pGUPsGktf6TwuY6dcf",
  "key25": "3ExYwJPDjAbDhMfuje8K3f9msyHJF2tLZmYmYyjDntB6efs7YZtdGXKY8wuqYnuQLLhiF2Hk3hKce2uFkBvQUao",
  "key26": "5rcsrSTBkyPCRuhXpcRXMe6CWeELfyCp55h3rgbnMoPYnP9Rc9sMN6XRZywNDNJN2kuLtRTKc3KfZk3f8RLGVre1",
  "key27": "3LUCcDdAYk1AZVc9XY3c5uFD8dNC8uEpB9HnsZwPMA6kC73ALMiHyiZdffNLYv51iV9JyGt1aqZ8baDpYFwh7ovj",
  "key28": "4zkLP7gWRM8YEXBHnYyNp4LHvMxBMB45zWn2t8iTwqeR6EyUex2ai4D4bYfZc6EA7JmdDc8r7tVjfVogomW1EnAK",
  "key29": "2CBoDZ4XY51fDuPoaB9aNh3i1ZmiHmrNMSUXbZQ6VaT87bvTxVHBfQUraFsx2ngdaNrRPr88pYAYKSurtjLkEZEU",
  "key30": "64anndvVMgwXRerXyybKUEq3bj9zKhum6fRJ9U83grgffncpJVKVCk4M6QVqxHQVE6kJA6S191XwAypmry8B1z3z",
  "key31": "2rwGw4i5EAAtmYxz6i8F17F4Vy3DrEHkBxSbW32zcvuDSYRaiCvELgVWWieoPF1DwBRJN1ung2EGADb1XP8CWZqU",
  "key32": "5YnWPgYnuHR5K1GYpDbBJqBTrQ3mRkpvLVYkMnE3punywxKadkSaRAxan4BL9oUrTVZcGMu2YwvK2TJ8SRG5RXZj"
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
