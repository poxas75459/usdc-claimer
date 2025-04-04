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
    "7Dd1Gc4bZyyBqRee6hpV4KhxbMHFBcxezUjdQeT8ZDco6UhqiXuSVNx8Zd1FpTNwjUcGxqru9i91EXvkVH6h2Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBZovNBmzW1LLPSrWz9JYsMwEc8BVegnwNrmCZJwfHLALdBsgyz5cEncD61W4scLEtAwURh7H9qjd4YpVfj1r6M",
  "key1": "4bCSncRHoPRAZyn5gkeNTrk5qN6C3T8qienaoWCjRpNJ7YUJ7GaTkJBEte4ocZvqQzcbcJTMVthXAzJHLUdbZjKQ",
  "key2": "4rSsw5NapjoJ6GvELDuWzsJQhT5UJoLLyUo9DuMgeYxvYuwvxbHvi7rBqgWtZwTbzRyccmMjY7GX94r5tAfmMqSe",
  "key3": "45auWMQKw3K8nw6eoyv9p6un8tkzHHo3JkYfeLJnv9HiPcfrH4qLatD8EMNAnfS5oKzudRARco4Zt7JFtQrD85VL",
  "key4": "4m8ZegwETeEqNWn4CemmveRcKu2SLXrkE2PCCDZeW7F8HMKC8KM7zksu3igbsJPhACFmfSGnugAND8ametoniSNX",
  "key5": "34X2E9YCVE2JLF93mSsbkdq3RPs4fuFVAaKG1BZtEXfU8QuY4o6RZfi7gdZ1TcJ2vF94yat3EYFY1Ndp2KBamGWz",
  "key6": "4ZhqyWnuz4DRJKHt2sGs7xu1yHfg7Bu3VeQhWc6cw2ViDwfLsaiQ9a87e8hJd75S1gStSSoDuTzC9pmsUxhu1K9i",
  "key7": "wpW53LdkY4YttwmPeZr9JRejPkaYZZEsDQJeqcqwp9G9i7gHrUgbjBYFVaqmRUXqDqfufyoXDHKnvzUnUjiMbeQ",
  "key8": "2UfvGttEJpP5ydx1nyEJcPTnvXFFWBSWTRpd84xQVDjqig6hgQjvZ843uGMs8Q4cDh2rEXjjrwH37YizeuPaZiAm",
  "key9": "3PEWxRsW1hjT1TfL8LEmaFUQXgU772KmaNz1WkiKZymso3kShtJk4YzVmNasuhq74MS5Ft8LejRwRWngnLFh8Fbw",
  "key10": "3iGKeuF3eLj8eaiwELEC87cS8YUHC9vL8t6momnFonoNHHsFkCCsFdcac5Qfybm2mJnxE3N8S3vaXwkw4k4MyfgG",
  "key11": "5LUUXfhAnmDWMgQsnCaAUBDT26xPmAezcLFSLS3KuugVoPWBrWfVN2e9mU2cKhtpSahUYfhtnvLioxKc49Q2amyL",
  "key12": "GNH3fVNoDDMh8LKehEkxg8QbjUftWmzaWFJmGc4qdtRRf7kWjuofxCJNwtSVcwXLm7eBmz4YQtpFfwtxWSYpmu1",
  "key13": "5WjjGfBVLzWJ3dgUVdmfzM3L6r9EM14RjNzNZ6tvfxEvyLrkJAcqg6Y5GPyNtmmTsgYpGtYNB9kVHoWEydifnVuh",
  "key14": "Vtsn7dizAu9VEYu5Dq3PnKsP6PSShBafej6wbKYmmgRqiWx1dZze7MEQycf6Xk1nXSciTRzfVkABn9Ck3PUTNJG",
  "key15": "yqgixeDjbSphMiNcM9GA5smc8YjWExyR7KGtqASBrQZpiGaUptj36k1BhLbuhZSNZQbQwnipcuHamVbQzZDbS5Z",
  "key16": "3M1J65U1krs8GYhUUPKhaGGy7anWgexjtWt7F6HqJKN5TaLAvBsGSi2f2dBLhTGsfmTEftWycufYDUojqZ9Hnm5g",
  "key17": "5FbdwieD6SrizugZmotXVSR5YMZ4RYN5Ha4p5wNxGg3kQQEAbc9ZsheiQ9SthFiU7p7tAD4qwfsh5tRLJKrhFVE4",
  "key18": "3m5FktCP29hDCihxAqLAK3ZjyEkrFcNZ1WVYReHqx7qeaRdzkAP4SarfDzp2NEB3AzvW2QRuaUwciN1YxK5dbMZd",
  "key19": "2MeNw2pKXVwPUtcXvKLg5chL3eZ8w74xawxKd8s5GVJSSs34wLoYjhqZyEWBWejJ8MfjYkcW86AN9AbWqYkdQK7X",
  "key20": "4QaCNWCv81vD9oQJo97XEgFrvFMGWDazQ6WZmQpwanMZgcnPqqGnkvd5ZdhaN9HG6qwLfyEC54HjFxEZCckqCac1",
  "key21": "MFb8zFR7BttJeTovYngy1tdRGT2bDGdhBYfxU39xgZcBFHBoV4xXSesZB8rw67th6wVhiFphGEMKGQqu9jbjjSK",
  "key22": "21Z1n4z6PgHubb8RpBot19opej6AT2bkP3mMooc1CKv1G9gW9scb32p8iQtwxvYfdhimAsscTtKCzP3gq4aoFSPx",
  "key23": "3fz2PLs6sqihuaaPTKBDi3JQXSwqZyPDzhfKbHLeXLUBd6rfWS7JCzRXcBtqRDP32Q16qXjHKsgorqEXXB6wj5aX",
  "key24": "4Ms2iXXyigpS2EVMt3Gm5cTTB3ncLuGUGUVvvFemNhTdAc7WwCi3PGeTPwHfArYaZYDLeLWagUYgpCJttKnxrdTP",
  "key25": "vQWWokDGGmNaagPAhSKu56JhEeqfVge6q42K6R7NRzmrdfPTbV2kFrfdwmKEvivnZRMdGRv3iw8M5pYvv334r8D",
  "key26": "5VwL7xxKn4YazB45YxvMGGUK9icEXds89d9YbL2bsTf1YF3qFBKd7ERCwRBV1Wec7ALNZY1xyZSpEjmjmSL1efKZ",
  "key27": "kmkir8ygfqF2TYHVeDhNbfpiEHLBkDV3BmNVTc1JBxeHd1tf3qqG5EW9bHHtRSknK8Mqc2ofXcbWhzMJqTHDwLw",
  "key28": "3V1wpUyga5e1boLLxNyjYqbGJWeycqTFmJPNVLbtdjRT2F7jufVRMtzMaupzdUxgKdYVVF6amgAufUWyCDtxgEBK",
  "key29": "5hinfjhiQMFKbRNwziG8aCkxjmgoJpKrdUduAjnP56HfWkaS34WvMHR5PP9SSpMVW8BSbbUescyd3pf6DN1YVaMB",
  "key30": "BCoGaFzSVUqi6PzAQJwqh3ZqcEL5wszZdkAcFdfxB2AAeayfSeDhZ2QrnZ2zGPkQHNDVyprXBrq5CiMXsxyWeWj",
  "key31": "ASABU1Cph6q8wHqpNQMpVTXLkJj56HrHvjgRrbd6ANUaMyoL4khNPsmzTKxdYPzay2rPUVBWhgum9u9yn7Tp6Ej",
  "key32": "52Q6fAQnoyhuZByyfsDJzuE43HGDvVfw9NAP3tn5yc7QunLzjVGTUVWybaR1nfz4HDzHTerHpjxLvz6dQHQRZMgc",
  "key33": "3mVU41LmFhmxnbsqJaDwbXf5nN85xB4aksMvHid914NaRDTQJJDH9gPN6oryC4VURfueLuzuV3joc5kAVSZXbAjn",
  "key34": "4EFVr6B2srnZb6HPu4BH9mfKAiRFCwuiNrMjv7KMUjtQP2qdJx2C3Z9a8oNrNWB8iuxNSSCi8DrqWBw3umQGE9Hi",
  "key35": "4oW67B4wQaM7ftmcC2zZaXmGUF4g89g37rRrgDjdBWcRn41x768djDh75GLfyLf4X47bquCY8pRiBAS2K8p1sEKy"
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
