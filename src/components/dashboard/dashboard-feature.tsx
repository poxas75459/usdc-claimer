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
    "2Q3hvm4X3P7RDUwdSKTzrg68qC6Nhdbsh941q44bYWnkBQyXcj8mDdA47KSjqEgWTR5rGPHauK2ncbRnJKLtdvu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KH1dJnj9GV2nH4u5DVfANXNQxNh5H5FJye171HTVQ7f7SeoHVeQ6GcMiKeMEqh7ScvveiwCTM6eNviK6vcq7X2",
  "key1": "5ewPrR65uZx5TuNbJvjsE6d1RNKP8GjQWXGwMBroRCzQfSSkQKNoPq9ReEH9wNuagpnT9J2bGTPLdt9HukBHK6h4",
  "key2": "4pffgiHhPCSRX3GNLcRaDVWZgHoPTLqkA2ePjZe2umyAdHiEQQnd88ai9eMoEDez1JGcXZoNum2qQGzPbJTrGrLd",
  "key3": "GEGDu8nstN8GxaEfVqdkbqT8PPUNwqdijbSJvmjRwqt7UZHMLqqFuLbt15MbY6gpF8CaBSWcGrEZEr821BT6eRg",
  "key4": "489PemAXtwxmwisFDCm3rcUP1ZXAPfMojA5mdTzX7h5JX9477m5SV3ewb6RwucoY3omtTKQREPCMqizdVqecgZLH",
  "key5": "4heqQnHwXryfxQXDVLnUFNYAVTwuQsVfAw7m9spc3oKBT967an9NY2X17bjTk3xtJhLxchR627r6AiBwB9mygjo7",
  "key6": "2NHiydbNyeNFHV5hdCxE2ZmaSwavVpV8HqUvesMUUomoCEPA16wEvVFs6EThnFrrSFz42YFossFNPMUKYCBVCdK",
  "key7": "2hD4wCvWYp2oy6vK3DFGVkUFS6y7uqYB9BFPVAfTtxWcmGmaz4s6QV2NCPiZpX7fhF86HwjP4jaLNBpoio913mfA",
  "key8": "VrBdPfPzp1LWBGyWm6i2xWu12J5XC154neu46HMp2iD3LwkZRoDLQ493KCCWV44LQYP5TmjPApw8odfmyJnsJfe",
  "key9": "4ucxVwZVvEEuzfDQ8CPHeS3gdPQaJAkrUEoQxR5ejFRBA5FptVUUjS5t8o1icHQYduYkxcBUeToAnDMfsvtYKTou",
  "key10": "J5cKFvKeStTfaRv1NwFcUrv5kDL1hHpXHE1XpfLggW89Gv22yukRUfuTeG8WD1vuXWbgBcqkUGgwtdT2ugw9RHV",
  "key11": "46j4vxAMmbCGnzGXmZXBmHJH4x4q4SgJtymaUFrX6C1cpXBPtgbt5Y8qaGwK3G1fUP2tq5UajfzQJse5YYuukEdZ",
  "key12": "46G1ySZuka5tbkVhmzX83Amn3UP4FK64beSDDFVCe5Uhx5qHbtuvNJvATdYLB8hNDhAmMHAvTrTCiYTcHLXEdWLP",
  "key13": "gaAo1MTa6NTnEN3b7jySVuKdDDJAXm4VRbLVPvanDxSdPgmyrLfpq69h1bzVhNetPDEf7PSKR69zqsEqetkpUsc",
  "key14": "2eBKuJ1NQZfAPNjdX5q6Ky9b7zNZudQ97QA7Qxc7JpVWtm25Dbf2Yai15vhjRTECCfjofsiSo6Phi8XM6WqEkKRq",
  "key15": "2WBw9TMcxNvF4uGaAveUecQdQyYUZaqS5RqrvY5nQ2U6Yodh4a4KQEY8Gg3AbF9hUMb5PE7dc8kubyVnJPozUNj7",
  "key16": "3LaAxvJv2nRCRqP6rP32Nisj9Hiss8bZT4zLktof3PYLKWn6LXj9Sk2wgdtqwZU2QpUrArj9EA25updYw6ciCMCd",
  "key17": "4X46Av3rczXZBHzopWgmfhzKcqXtVVJZUnDbGxKWYqcGDmKEts7D2ZQLpAyrr4yKvgdVWAAqhu7J9tLJYijRP4Li",
  "key18": "5PtBzEsLwKiox6tnNa4ZMDBZWzuTMtKVE8dfwDm5pEMwr6nKJ6baHrosrYdXtfo5jJAvZ2Euw7hysbhS4xTGCGYg",
  "key19": "2fpY9m44BCdL4aQ1CJh4VeG4T5VejcjHVhjcJRvNkmvuCL7QRHy4zvMtVoePXT61J6xEgBZdK5gFAMGgbtBjXx98",
  "key20": "3VFiLenWQtsXZEWexY3t2erKfMSVW7Yrpaqc2KagB18p29XGgzpqLpbdJu2Ej4yrmuf6fGYxgyZXu9tpBNbtCcAX",
  "key21": "4PqBx5Q2LHxxhm3Pqvspr9K8DKCaPtYU4hQXW9nEcem17zLC9aEZwDr5buMCUS8AELM4odRhZUqhRDX6wU5RNaru",
  "key22": "gmcN3uYtkjHpS5sgamgVU7zSzt9t21LamHahJgy5Lb9Lm8oUy82vjLK6wovMkQmS8raRKD2P8FXbdiCTm4AP4gi",
  "key23": "3vXBAuYNz6SLgzV91oRK37AkKDyoCqfppJizmF2FyDSdTwfhwnFCReDNLBu2iFKgyZp8uk381ouDjYge4ShH2YcD",
  "key24": "5T3VYycQwafi7Crr1a6JgZTbhRMGHPAvoduxEcYiv6zQgeU258NDh2TBVoUWKV9R1ekbN1vhq7k1jeA73eDByNNM",
  "key25": "5nVvS5rv5PRbogeGx9oF4bEwWsSimHAFJGPK27xBQvZ2Bsjm9qcfgvskKf5scqrDFjAPU9uAKpvar48KZdDNophU",
  "key26": "4vSBUs2VaVGoTecgkbbfBdBhXKXXLF1ZDGFSb5nKZJF8ktPfoHhh2ZAtUVmNa5H62QJi5SrwMNJVmmnpdiiz6nUs"
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
