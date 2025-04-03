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
    "5kYtdL6qqpaqTYgi6L2EXPxCNGzBcfT45jSf7FZboCAFWYMRwZghcMD8NFZ3aidKQuqgkzPbfZ4pwrWx5HSQ6f62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCZM4KubyKAz8f5TnZbNPUWMpzZGEhekFf9DGX8fjc9vJoChsKJVDZQvWfyvHVd87Z1VvWrNo1UhdzsNtgDLaCr",
  "key1": "45UgGqVAocucXHkonhw9pb2x9HvzBZEAe72oj9kEB8TTBozVTakTQcuLJwucv874WsmxBhhkUqzNp3QtKL3PiWAK",
  "key2": "55dakGRBTqEZhnEH8Mu4Zc93gueLNFEFCz83AoK1Pm3tDkt6uZuTbzfmuP8piQuqThu9Pvp1g4EM8svLU81fVtVC",
  "key3": "XuP4ffSqSPVB38oS432vhF5HbvhdBRjHHMXZh7cwSR4moN4LLXJdXnzfSteY8x359XtHX8oKJF2mxhiFd6tsx1B",
  "key4": "2nAYbDNBcyc2zAcqMLz8Fj9jLa23DnU5tuEqkWJKfM5Wj562yDPa5B3bsRWcbRd1Ggt9yFXM5KUYF5EEAGN9a78d",
  "key5": "62TiUzmYPA857GJx3x25v6DGGqSDP6ozyefUWANk7ceRj62wyno5nfCgQZefepQzgZnFbftm3pKoxdjPbRMTTLua",
  "key6": "QEP69o9Jtk7Z6Mqvozv6Ag8Ema1U3heSSndJkB26JhBijtvPPoLedwML973iivPzKPw82xuqXET5qEovoGiUJGH",
  "key7": "3wenKBFCy9rbEXKLKYF9GpTKbEQVh8QBmAx8qq1Nv8kdnh19XXQwpPCxVNXCHhJWEkPqbz5ME8yLJhTdnrzCdPsm",
  "key8": "5zTB9SwUVX2j4FuwgDrK9zFEZ7Tbfgc8ma3bQPKDFK6ce4gvfwPJvmyvnhMFBm62MYEAS7KpABeJiFbPUTe4obsJ",
  "key9": "aUcK8mTNGGZ6ZnmK2KFhYTDdhyJMAKfLSGbwxedtTL8tg5fP5nWH6D1U8NoWYiSmG3L5EfR5QeDWPHpG51HFw4m",
  "key10": "4J5SL37m7qNc9N49uLNX2BKGmBKLr3GHvvWV3Z7mMsAHp2jYLbyBqUTtxTywisz2HgGtASnFitQ6Y6jjh7X1dowT",
  "key11": "2GTsV3ysqxNnGMMmbDeQ28W1jNdUYFKpMehocWEyBAAPMSb7ZcAzvT5GdxLAyPv3L6A22aEe2t5xd3o5ctw72uTw",
  "key12": "4o4h7ZDWz3xkyyznKB6WFF3yCMexYxp54sDA8rpYfPX8wrsgpXms6x4zczbvmu1ubR8n8RMmzaip54Q8tsLspJC2",
  "key13": "2SN8tDhyao3yxKjPHFtJ5nVppTu2bA8kd1iaKnrv3grQAcJgXyFeqeKqDwnfXPcSv5Myqi4oBRFaQ3KCpoiyaEaF",
  "key14": "5g2aZpjMjCt7gYpjYKoYykGpemmoWBYvJRmBVv6TUwP3ZLV8XwxsYCV75JaJodPZGsfkH8tqG5sViLPPYhnuj5rc",
  "key15": "5axVP6NK8fmuqAH3eMgaowTPvXhJMxdvYF1J3sSrj9cMb5ghWRKFbAd8vwoLufK334g6bWbRitz7Bb2nXz3Pav16",
  "key16": "P2z2p4MUyUx3XZBcc5mZqn58VmvvLGeB3TPjtyQdHMrncTMTKV637gha9ABPoGm2PEmZewCvpvHgMDxPwxbB51m",
  "key17": "5SV8DwvUcRsNmZpFEasvKugTip61Rtjk6kPnv1pSw8J2PVCrimfax6Y3qMwpuSbBf5Gaj6xasADAPfsLatoCnbgS",
  "key18": "3cMQcdRwAn5NTeTjhvrgvDxyBQTrLgztEW6otpV4mKwMx3fMoHVSXc61dKQZXMhmvbDpFiRZ5egP19ynJroDuLhf",
  "key19": "sJUv9uqu3BpwV5DqdGexStN1vDUnbbDePZspE69EFnz7PEoze67ucjasnosxA9ACKHw1dGVLfSq79kU9h4wMjZq",
  "key20": "bnfusCPh15kCzySdCK7PJcm8vJdPgits5yza3eMu4UxSqZKVUfVVa6KxMzdoi7EHvpMQRd8T8Gp6Ngy4zqGGs7v",
  "key21": "37VD6FGm3ooDwyYbNZoHB68zczwoFXsi6NPHFa2KmUmkJqdur1xknk2yTjH4aXz9EfEVCuJgBFQ6haUL1wwNJvS8",
  "key22": "5qQJ8m7w2amtTy8FSg3jMDW7nBHRRZF1XAhcYuGYovDDLcVnCES8y45MEN2dy3tU9CN7ce2nzzvZ3GzGFRDiQo8m",
  "key23": "2WHfoK9C8bVuEWq2w71tAyjAQhUNu8VcNEGkaseNHFC6aGKB7mpsHpC8p1jkqH6GQjJb1BKboBmEwcMtTMUfHpsC",
  "key24": "qC793u8nSzgcDA7JerUrdKt3QF6rotbsF3HdYNJwn12rhxY6WWdv7D6ZEjnJXKkoz5SJBkNRYpRXFq1wi4qQef4",
  "key25": "5Ks71GZs8Ed3v9afhm7zRd56ty6KMGgjJ6TfwndaQeMwaadT4fNm4xHyZVPu5DMe1DBr59Wth5LR8Lt6FmTNpydG",
  "key26": "2bBa8road8eJ5GG1pHJHPit1H81kmeezAu4Gyo61vufXSBanCuQKWA1qs5nNQ8PTXybZTkSLhZrEdVMBrjGaKeDH"
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
