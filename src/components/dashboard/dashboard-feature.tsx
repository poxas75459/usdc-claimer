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
    "5CiJVCctXSpzfLRT9waNj5EykcEroiCe9yVwn6F6CKTammTC7VeXoT8ojTkhDRgh1WZRJz3KrNU5ug9FxjAzqefg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ose5rP7TL1797GRRYAFNBdBcxBwa7UgAZFKoGTuzueRZJNre2ibpEVnrvrtGpyyVapcEJ8BgKo4ftU5XEH1JCsM",
  "key1": "3c6X4TsN2xSJJZHpagYhNTjiLu1bR84cAjarE3ioLbFgcxAT1zATTry9Ur1e2wknNs2B4PytUe3MwEYd8fnk4c7i",
  "key2": "4dgb5Z8pvCvpBbZ8iMb7YjS5uS49gcQs9hbF8dR7siDY2wzBUbUrCxVfEyFbypMh9eLbLQwBMEuXUofEE3yCxbJ1",
  "key3": "4v9yXsrHbJZwQXcNvu3fDcWEUBUtK2p2BVFW5FMoyrbWu9JQbNQB5UooGFJfqHiMQQesNos9oNySKri3qPs5iBTB",
  "key4": "2UAEiqTFA3qmddzTFmLUhUEdCiSzwj6Ni7rUHGkzHwifAeLoFB2WnZYcGyPScsVAGj4KfkuUfWVFSsT8csAonsuy",
  "key5": "5UnWokYSP9kXNu9ino8WeJZpTWNRfhNuMooCtMbZKWqDi16p9kA5JdEcDtnXVwrAasQ2b8tQ7X1iitZ7QwijaCZW",
  "key6": "2hihin1Q3mksGo4LRXjE7ndW8gcwgFdy59cmMQ3AkXjad95x13uYozDTi9zeCi1hRSZA8PP5K94WRt2YvxtqTRXr",
  "key7": "5xZxvojPDtFc94kw3AxiyvrU5ap6Maovy6Zv4uJkKTv4rGGL7rRd93KMzffBUiApsLuaKwZuThe4sZLhSnpFWbJo",
  "key8": "3m5uykyUc7C64HVc6hXomL8jLLSqQys4DGnHgg1egSdHFUo9QS1wghXN3VLFMw6VGZfFgFkpgtBmGkP6emuwZ7Yf",
  "key9": "7VKWtrsvhoX3mS8CqSwXabZR2ZXEyy9L9cbFpiUjCgWHQsF46tS4VzgVeeKcSYMPVjDUhVgov6eLkBxrSU6EXtt",
  "key10": "484jWTkdCsPvbrMun4Y5MGcCa9Z54RC16KoogxCiLtatoUx7NrZEpFde6ehNTAoNUQNTVG5mUB9ktTouQBDB8ENU",
  "key11": "5e6nPaUeVzhcGJG2k8qezUN4w9K1jTNGz2jAuW2A8ajSMxGaD5acvAfdLkwr4aZ38EwMVeZ3AoVFSkSzeFVPcnmz",
  "key12": "4Zj63d23kRN1wVG8ipkBHBpWeR876oCe2Gp5ZxEUDBRUAh2qxhGsq24gvF7k3SbgwAizruHG1KoPzfEwGPY2mLtk",
  "key13": "VRPR5gDZbvHHMJQqdt2H2qGEPMstgj6oaRQfKmoHzBJ8jxp16tRSjtq9w2ULVw84PjjEY8qGNDX4sYVnGEEwtpW",
  "key14": "2GxQoXoFZhkYWxnFeozYgTriHm7jZGayhUxv1iyCgBGRqHhaVpaJsGghKGoB8yKBJY96w5yVMW9TDQNqxbkM3nSN",
  "key15": "5KYReRZnZeAECcjm8ubkEdcqnDaWYgq2WVNtsjqw3FxDRbUqCjDuRMJcACcSiYuCkgcgmwhE4FurRnpdfxaDR4Ys",
  "key16": "2zGiP9ECzCDBeXPmkT8z342XdqjhgRx81LGCFWARJzKaLNVEJv2GUMEyL7wTad9wJjEVmY28b4mqanvBUtpuo8uh",
  "key17": "2KT5eQkw1iZpGBoZGti8pDr3hRb7XCWnSRckwnynNsMZzME1Yup649PQo2mGEPGfbLQZ4kC688aUM16JswMBz3DS",
  "key18": "4JVvcz8zBe9L3NYrXkmya1SkkNKtC6ZFr56JepPDoFAwbfLf8d1WpkUNd2VAcK43M76k2Rcdevo3sNkShoomuShk",
  "key19": "53z9NhHAeaCuGsYW41QqjsW4GbnzLuN4tceCMw4biza1iAK6v5S1iBDbC1gmJQhzCKfJrFXjccbWfrtgbNEiiido",
  "key20": "4Q4kbCP1pqnoFv9RDtPBSNTTcRZBF1RqaEwDvbLG3jL7WbgoA1yJXGUXd7AkoN1M5NTLVvdp35CrVfuYaa1rkto6",
  "key21": "39m5UNCSSZ33zcULRGbmEjFph4R5vjSSTjffxEq6E6vsu3EGVLekHPU14GRPvtAj119YoUoJALRaM4Z5kDdzUHWQ",
  "key22": "3Wmi7vixiAh8F2TaCeaoqPmB9YuiTDztJoCM1zQyVfJjous9EADDaUUznm6MTjsp3kwuVp1yiSNnReTwMmoi7sTm",
  "key23": "5eKjbeDqEEuNCCY3ucvo5gKV9UWVg4yRuWSnMWktM64uzmyfNfykqxtDEf4vnZMXJcMpNumkjecGjB3yvqbyZgYD",
  "key24": "4EKr2wLaXyXxyNCUoEhmYo52m66ojBKhVSyJvhGnRjiutoCstKynpHkRM6nvct6VeBy5eFZqWeJ5KcGY5Ps1L3e6",
  "key25": "39myPBvQYWriFMuhexpKNAmnBbxYQDAvNjz2h2HhzzPHKT92FoMY8ZXUA8THtUiEqipf7y781gRzmQW78ZckZuEE"
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
