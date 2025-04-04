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
    "chLHrTWPD71Gkz4v5FGfm6SJApXUuADQeymAEsUyMdKqpervgnFiZ51PeHtDPG5CwE4TJ3bR5jbznVwnYtpGVVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqwT777STYsZ4Y4bBDayrFgBhczUmM6taDAzw1HTtWGicsrhkc1NLjfgn9uUe7GwcD6pvnwaeecwihsHNSXKK6h",
  "key1": "589jEfcFZEaZw1ZNkCbqQnefD22yahGz6J5mVwfTErjJ1RAKc4PcBABHRonzdXq6RByd2Pp4vhBfSN2UkDw7vZ4G",
  "key2": "2vxnGz3G9B6sw9PyqAUFe5k7r1vup5R4bpvquaZFA7gdrQYErHFaKYAMfj2KTmbhvyxmJuF8RTDL5ZESK8ZKvtdp",
  "key3": "4wiPCAW4w7aAP33KEGbCLSBkvAUrcpaVFRxLX8ngtHvYREcAuaEVL1jiRnL4eKvKjvRHiy7Xc2CuaRqyF4HJZDFr",
  "key4": "3c7jff49P7XMSVDbziZAeynnhTPJfbFy4At9NXiMGhaFcmFwVnHStN9UUibqkvYcR8UJkqnfY1mz3hm9zM7HVwPn",
  "key5": "2euN2tkk1viWi33mDsYp7MTBinZLZs5Mcyd1eg7fS3eQpQAiQn1T5MAXQZNXv9cLnRsA3D6SyrzNscUCzerybJR1",
  "key6": "2pYLZRhFYXvbUcyoUtySm1LtQXs2wmEu7145wufcaaEDwG14ER2LWrW8tgeZpHxfzcJYZdvBfahiFm3gSfqYQoHX",
  "key7": "5DmDtrK6A7aq8RxVucRqfHkoGVycbghxwZjKz16cm1VqyQtMs6kwtFPk4ANUtuZgNDVEWyfv6kzmLVets1RxdD1e",
  "key8": "4XcES9zxMmLSrgTR15ecMbAJhG9LRJUtw73Nq1ZWMHdQSkCewMLcZoadMb43yxK4nxz863kUB4o3NZG9Gqm79U85",
  "key9": "2v1hVjuCerCEdFLkKfLdUAb8yVfm7C37PiALfWmvDPhZ6Xt1rspm8KAxXaVRdr1pD3hTfCV41FwmuKAE1TmVkZsL",
  "key10": "Fk6z45QXFaTBYNXNsjvzQ2ZgsqxBKxdGp7cSz68DxvEgVM5daASS1iSCynvhD5e8g5oe18t9UDGfmaZkWGJZCQV",
  "key11": "55AMFxuud7WT2Xrr4nkhsZ5e8QoSCkBgQQxxm9uf82g77QK236bpMEPzdyfS9wB47DhyyawqXNYqhvnPrMhfsCRQ",
  "key12": "5Nh1AVAjdmrwJoNca2XZaLwd8DTStnkhRyMySnRqLDU2BV6Uo3qjgVmrerTbP9sa5Gvbb2pGvEaA57desdqaU2BJ",
  "key13": "5TaYGTa7baiLqXJp6Y3TN1baXYFGTfQvknoWj8LJx2FqQsCLH8n75CWWKeMXAf7CtjDDRZhDp6ZpRvaxAWzDRRMn",
  "key14": "4fs6bHzKivDn9ZL5z8WXXwcjF66izqgKqatG6QFcPcaHihDBhibK7kCpKpDtEbp3LEFMdnuSttKvZPCzdcbbTRkK",
  "key15": "2N395Q4eWpfuxm1HBampt7G8n6m7ziqd7G7ssRJQKQcMQ4TMmwvQgQa2Levmjd1h6mm1wPgXsGC9UmDw7hAB1mX3",
  "key16": "3CpTTjFjHde2ama9B8i2AvX7dscrb6u6M4nj4sd8JJewvCQs7NBEo6reR13GfTjRGoqzGjKqx5Y6iFH9C7GjnKGG",
  "key17": "537PgCwEMoa5DcA37BufiQsNKsJic5Xv3xjLLcEsmurqRwjtn7PiQGr3ZscQr7LWg1wrp1NHi78C5dSoAzvhzTS6",
  "key18": "4zprt15H3Lg9omJNaDe9f4MFPKPspCKEJDqMfEu8xnAy4ttLSB8U1mTMV1v9p831NtntcenqjBE4DLESADBouZMq",
  "key19": "FFrpFsfTiSKdxkU4aQp7txwaC7Htdj8a86jgx5jUNKtz1KueFaiHGmnY5sCnaKhNmzqqaZnGogsgY9AbGBjDt8J",
  "key20": "5iaQbw4agSFWDbjESFd33AjybqFYCoj6y29vzS3hr3t5ZGShGAbzk591XtTFwt2eLM6bKkp14GNTfHPg4T2YFBMD",
  "key21": "5zWXAEPnz7DJmy6zUg2Wjmvm8XK21YxiGx2fbpj4dwQuUbDMwyXP1U47evY9ojefzN6P5zwsh1jGaJnYrcM9GXb7",
  "key22": "3mKpbQtgmRppVZ28XEaQeQuy2AFujBhhNE28m8o4b4taPPwMXBT26gXS2njaZGiZjQW7y3LUHrAswJ6cyw5qEQx2",
  "key23": "3wsagRtSPUZAAbPzDuG37F2Xhn22VyQo783CXhvTkVhPY8v7nmvh6mehto2ZsdmvNPMiXJ2Ur8DpSZNWnFeRBciM",
  "key24": "2DTgfqksWuhCBZ7u9agCfCzcTUUe4vEuX4Zw62k17uTCPfrYHizZVDhqg9h3g3vZ6U4yiZ2bWQwkf9zC53g87WqL",
  "key25": "oGRTHJ6BebaYSUYFYB7imECsMEYNpwcmrN5MdqNSdKrHhZ3sMP4J54r9z4PeNiyNzuqmvjQdDMmoNKgjmdF43o4"
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
