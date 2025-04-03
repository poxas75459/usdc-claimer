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
    "4qzCXv3TjZfPskGfpnfdm7BPzv5Crr3RyFyM6vuuYiaSYpwyLm8X2uQTvQtjv4n8AkPJKbs9uvBshAr5HAp5j2tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StP6kbnjSvc8z1GisSfX54kTWJKZfUTiomoz5pAJuq1GZTHz5qdBef3haD73XJQss6ZKDvy4V8Xp8C13P7E4nBw",
  "key1": "AKfjmgYvkTvLbnQNKAFLvSapHyeaoNPQK9C6zbrWCfdLVQ2qC6b7TdEcT6DWyavsEyQrEjd18UQF1DJ2a1jnmPt",
  "key2": "5zCGq2FkSvoi8wABJDeV3Ywnma8LwdN4QhFABpVficduPfzBqVhDGoYvQeFgyij6DKiHCtDzcrGxn8bX5KeFqHw",
  "key3": "61FC8CP7WNi6m7twYVSSWLV5Xgxum7jcRYV13zjV8WwG8c1vHaKmJvintZ6n8RpNjLRozu4MYu4HzjqTtCyb6cc3",
  "key4": "AWvHF6t1CXcBoydhhqscqyGNEkkonzfSdgVQMJeHQVikimA9hg2nJJqE5VxA7kvyR8fvPdnwazXbvvFhtTnKu3X",
  "key5": "3qesrbqaVeiZERSWe3pNgwEBaVFvQH49cnNSMNjK3H6LCYpSJ9JcQXszArQUZhL34KQEQ16Sn6ojHb6uXwt6u8gC",
  "key6": "3bFuKYWEPWir39zzvHhaVsm4Ph5pG77RWkC3oGiERb9jCEcy1sMPPaMVZdsbcBV9iYqmLL4Ke8wSzvoqJ61E4GuK",
  "key7": "4NXtEymPK8HYA1kVwn1LTee1L9T5z63sdqn7ZAmhpz6oWUJk7C8oUowUcgTwFp3wvt5GRoW47XzCLmho6Z53nKVJ",
  "key8": "3H4aiKabiztrnyN1kNff2LhzcLhjFKC2guDC59aoAjZbDmXAzhnc5VNNViP79tckMZUaFqbqSnAMbo8sdS9cq2V2",
  "key9": "31eJhWX5CeLc65yqZpAYrKLBHF4YAQdufbFqR3cxFPmkkeKgQvKMRT8KQeJWeSRnPz1KA5bqHbBv7zw11jmY5eYj",
  "key10": "5Q6zLaU681UnJGyjrHrRRNbnusqaYYyXCp29j1UJU868GzHvktQVbSLe47TSrTTgd8n5whskS8NEoJaPkHKeyYyd",
  "key11": "2KV1jVu46bj3UCNGRW2QFVDNEKbM5TLZ3jj6FacnBfr8cWjdvFfVX7ADHMz4qj21rFSJeZ1FRbvZE1Sfj3mAnGko",
  "key12": "3cBA9B98NLpGa65SCfJqJb6CJRs7UbHQ7Zv9dv77vpW21JbBrEVaJRHhgdYtvK5Wq17LJAJrdEh4i9GYTWoCu4Q2",
  "key13": "3iZk515xBwtdSF7goXbBoppMEoYJxC6edMxTBzjexHreeUP4vf2ZJxeZqmqVExErGMYRzERkmg4EkPTDFajnnDAh",
  "key14": "2k3Jur9DP7cT9mPwz3Bnst1WexoTcpkLt3ojAgkavBQQXYk1n1H6buns29BBfoeNtyKgpxwBogjeyTfJUBpnwui8",
  "key15": "pmpyavY8pew1y1pDbGGmLReVgXr74MonPUPmx2HWpw4sfccxpc1kyfp6RMmiyRDUJL5x874LKXUFC7qzpxPVjva",
  "key16": "2rSWLYmXvXwcNkNnyeEyoAW8vPjAPVnHghEYwB5V5DBM5XabHhmqZxzuy2aZTwk8n5HBVtDbhBAA5uwzGa2gAFD2",
  "key17": "3NyvNzobjWz3DHB6KBapqh1gzQZkY1oqMYZDYtmFHYwqjaTm4ztA9cynmtM8AqNZorMtn5X1XgG8tSn5wyEWLkWK",
  "key18": "5QW6aUttJz9XSoRL4b9dkHL2NPuPrs5GjNk2smaPfovmDK64pbMafZdbtBuoAdZc8jE1M9rEy7p7LEa41o5k6o1d",
  "key19": "5vXLkUAiHVgtZ7Z76mn9dAkfndgYyWhnC8xew12EAMc7fpPx6rE6tZMhmei4JCDwqQxvpV3u9xkQcXgtsRPRoXCL",
  "key20": "5ZK6YmNJrfkLS9RwTqFoNXFFAHfQdGVy3xQogkhcKEZKycgPtocFdBK4WXB6KBMP3fJLbVRG8N36NV9S2Myj2oeR",
  "key21": "2uGBFudHoujmr1B4H28u9pRuZe1UN9L4zycwnSqo7M6GCrLELPN446KRmwPcnHyJSSRvrTfg6mzQQtHmwsLR26V6",
  "key22": "2CmdTLL6zTbT32FwPt1Tpo1Zys2u6fguwUc16dXe8ZeKG26ZLfWCHrh8dQms4Sgk1gGFD4BuzHNbDSJc5QnPznP5",
  "key23": "4SSpUCMASsb5npYEcVizoP97tirknvVLDGfK1NzWv3P3rfdWFGU5RBp97P1iJ2Rgw41KzX7y1BabN6wdvgZarDNV",
  "key24": "5r7sFNDTYAJ2CB3eAovMwRFYwtXy3F3S4h7jbGoDfv9vzGFZiW4avdMXeAXhxmEwM4th4iUQuhQ2Zc4Gr8TmNC4u",
  "key25": "4qRvCNRDXCRZuQ6KTxydvAfj2MpswBJPhh36GqBDbn6D2tVvspznwWUztx2arbZCxZn7qizAjt9JkJ48ePVEXRph",
  "key26": "5cjfmhEw8zyUf8NpWbSwuW6eGhzJgfyJViEKpujfxxeaSCzwJpmeCAnKYJQDdRcsttz2CJe3EW34b5KGkt8x7dL8",
  "key27": "41DjsibA6MLJzvHgbaVor5gNj65dLu7Dt1tdRSGvsJP1yJRJu1nSkkDSVA6PTDRYtb5nnEuXE5X4NiAhcz2qKEjz",
  "key28": "2P7anEP7mtVXfw6Jc3atShYQkpXqH9kvwYvTCgkZ6DfQZqc9oomQQzhjvGWcZcaDUKrhDma59iLiJKdnHE3dvLYQ",
  "key29": "5jFQEswqEniGMZXBMbwHfmrTUqTnZbshC14ZKSdrsGT5j9P7usrPAVXjUqez4Y6HWwrusAMptyBL87ocrJErxzMf",
  "key30": "3cmofotnjQcrZeLFaVPkQjkayYH6KEjzskrnB6bVUDqbr8sfuNEekEDo8ptauJptC7ALFtGqQG9WPArBadMGEesv"
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
