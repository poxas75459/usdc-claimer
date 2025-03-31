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
    "wQ27WduCqekXfkJqdGtgabHRmCf22xcx2ryXmh9UH2w9p3SkJa1YBQaV7wRKa6Utbo1SaxyoKF7YHq3rYPvMNET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkV2qCu4Es75iTNcme8BKiK1DCwrVjJaGujqbXHdME9xdwnNUfBtJEhdP6jz4zwvojMzTsfCCoMQ9r5nzxkXAga",
  "key1": "5BTARAsvZTTRLcvqKto37GrYyAmtKi5C5csC8xkqkkfetTHYuNk8x5wynjY4cNBfePYopGWqSjRaqBzfzRf6yfzu",
  "key2": "2gE7xtjzES2w3EKGmuWdLBdM2V41T5CMtrt1i3PNSqi5xNna1bztQkpYR2MrgVeAiiEGKWrMQj19Bq3zXHfGJ8n8",
  "key3": "zmoqfhxenUYbH2MyfgKeVAvgfvBZo7RZcXX16EtUMzUh2jizd4mgjGmQbjkrX8gEoSaZpHWsm3x4ghwPcHgZPBN",
  "key4": "5fXj6cVNqc5nXuexBBhyeiPghS2odvFBxTs5K3hg8FRik7fqCc3yxVQFujn6LLvEERvNhzQDt5W9eBhLJNwjPPk1",
  "key5": "42f7hdoTWyK3HkjHFhq21khHGu7wrbPpbtiWhy8ueCmprCy22GuxoZKuEeiEHnToJj219d5h9ae2G4RCadGXvQyx",
  "key6": "5xAhsdr6KZSx9Go4VKeLhWNoC7SfwwJJVaQHGm8TJWrnm4hkqni8AU1BNgcehhBSfMRfVeuZ4x8zzjGif4PAHnju",
  "key7": "3vKTzaV8ti19Mkq8iW4wPmaeAnp8i3vqXDCyv8ARwt3CwJr69C3fr9GD2K8Qx4pQPfqyJQCprZCbfaxDSrnSuMGj",
  "key8": "64pttcdxiHvvsrvnjAuUvvedDMHKPRepWNuMB6JecSBipkqci4dJAbFKneN9NUpD1buHHqv1JuJtfMR18kByJVLj",
  "key9": "3DvSR6d2nKb9naKwHqsPwVpjeUTi8nZrF9Ce7CjhKmfxLgFV9xeDmXuxaMBqPN4Q9gkKELqZ1n9RwhfeCP2G2rbJ",
  "key10": "ZypwGXw6hvJx1KMwuK1YVYRtB3jZh6fNUhz9BbnK35KMDc16q23PPyECqvubXVRQx32H1hVU9hRaEt3m8vTnkR1",
  "key11": "xxXn1cNVsZDJTcDARMXD93GnwpRh84DPwMYLZWE1oBuSnnXt8Lou8kJz6yf7QeoiFcprmbjYFpZGPNpyN3GiWHf",
  "key12": "5V3wFyTrNAvLkwQJUeDAm8eqbddnTVZ2e4ZSgKakNhaJ6MEWVyTDd1Mk5vtGQwbG783qqZvP8KBSkrmjvZ2cJ8bk",
  "key13": "RuAUTDatoTbrNZYt9VtLBmk4Y8AqGQUe6CboFRDb5fwv9MDGm9zzUwKX13vNRwXEQAk9i5nrMjP4dMkQhQphVbV",
  "key14": "4u99pEYVsk5x8noWUsqoQZvZeGNMG9Z66xanx98LcgPndVhxoL3KNkkHw1jZWppZYmiR1zrnuQPy1xHYL1XLk7E1",
  "key15": "owNw8cnaJ2YntL573N7CQ9cXucw36smJ5tkwGJCEMcQax5xmG4N9MWrztkcPpXR7oP7V9SrBudEsKCvV6Z5HieV",
  "key16": "4YAJpVr6DRNEsoYApaS2D6YebfYvWRKFeosKrbvjNTdC5C947xB7W9QvvuvajBGLDusUvKSJh8hFVhbKgLNHWbuF",
  "key17": "2mgCgGT4asNvunEDXiJCApBQ4VLjbk9WgV4qQ3NJv1eLTMBSD9qbyVhAHQM6baxxmPXZUzamnbuyG8fAA17hXbbQ",
  "key18": "5HSkGHFjp21KCpzZXpvT2s4amtPE2z5Gzi8m2mSk2ghwuGoBEqZncqM7aKrnM4Lhy6CbXHHdX2WrPjFHF2o2aADp",
  "key19": "3npU478LqrRjsgDptcKqT2REDaE3RnTi7ehNft2FC8qz1SGDpYJjT1qKnMJhaMUbYi7GNN1siLVyXfyXxeb9ZBsf",
  "key20": "37MCssEyjE7JYgDbvbDXNNusdKJQhqwSi2Ft3mSy2ozkorJciPzzsRazmwTds8gZ59L7v8CfPgaLbT6fRYmE738A",
  "key21": "4SM9eieeyeWcC3wd8HeKrahvn33HVSgK5Yopk8nP3HaZuJeeEPsJguioyeQirpZvoxc2QjBjtTQRjt34NTPsQ1Bn",
  "key22": "jtRLhPdSzPqqri8hiiqcWZKGr7btWSWJEdPeaDK6TfEMxx5moRoH46c6VeAqWnjYmGNdAm5zzGjdouM97a8pZr6",
  "key23": "4Pwg6uEFDk4ufsPiiEy6AeYWZP6enUbraZQwMDA4L8mhZYrsVjTHqoatm6w3kNKfKLmPkbUVTg73ZqFmrxwYnHsn",
  "key24": "5rxHyNQCyXARQuZjMPvWe8aJ4hCvGnFmc61UMKa97JYTcfQnYwZq1Tu6YrT5awUJJJh1Wx7exfF6wQ7Lm5fRt1Yi",
  "key25": "4XPFhKnKRUPmchgrE5fdXQZPtYRxPNAcBvhfhSxq3j4zKuaDdJz8u1ZmzeLRnK3vQf5znTBD7eoW5HoCszhBMrsL",
  "key26": "3voNXuKBnXhV9wGbmycdEr22Wj9ED4knKGTBSzk9o31yiin5a6teT9ceYgviNEbkyf8MCrqzpSUpJBHgjFFmi4HV",
  "key27": "46RreNyipK4tbEiWkhC6C88txH87CtQKjwM9oVvKEGMgBfV3rz9AhPmoEc2saRpQzpt7Kin83PWpr9exihdHbS5m",
  "key28": "2Bjhvg5A7Dv1YYrgERftiaEZrDUaW5F5aviHJNFaku3PJimwgmomwq8Jw4uXEwJE47KvGUu3SpQZsChqEkPCaN93",
  "key29": "3ZopZYYaBvx7YncEqsfsdevPAGamEPeb9BcY1K8e3bMadnhy4ewdmCWf8r2DagaYaAcSSn2xaGNsJZK5nnaQs2Xm",
  "key30": "5o2crHcHNHzSVh2RLiT5RMDveyaCnUp1jEwmFsg93HhF93Ho9fTL6jfP1gLNwntEiM4UfXATC9nk473iF7ZDo5vQ",
  "key31": "sXhpzF6XjgRQEMnjCLgeN3QDRpQVY8xnsQf2pHNfBLKMxr8mzH4RF5mJUtA1BiqdRinEvwMXJ58FSfe3ndTWLrd",
  "key32": "36sRy18WPDtf5vxfBajRzKVhTBMarbDfAze4TRXGUwq7FJQg2sxMJPvUJAvdw9CeP7tKsEAR4MMRsfasW1N9a9vs"
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
