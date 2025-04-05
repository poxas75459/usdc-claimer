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
    "5kYZuSUYdYwH2VihZYCmY6YAWW8Yoeu9p1WL97d6ZQTSJHR1BEhi8dFvTzRb7DPZopP4kaWm9jLffjjJGdHioy1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4MT5MiNRVGfNy63FrLpnAp48L2vHWfG5xwhzNCKJGbp9HdK7su8sbijSs8PvDt2D5zGTfEeANAp9FJRB7mwN1",
  "key1": "5hLpKw6bvBQbtbHEJbYQ8N3DbKhWc1GYKDH3DYczxLXLCeQ4etFWjk65NC3Gs8mBCnvrgYgKeayF9zvFguZvL7ij",
  "key2": "3VpA96tiyU1RWmEg61Pa9Z4gnK8zYs94mygvrTPdzgjAf574LazyzhmhERfFZSAEcp4XCLdAp4wakwvvSryFxSVT",
  "key3": "5SWoS4KX2od7kSLMnoTtQ9P6U7xrdUFzdRf5EVvq2Qx9Hr2gmuvUDSd7piRiKf2bypCBEB9cXZE6VhwAFL8dvLjk",
  "key4": "2G7XBbujnE4VUcVGTVjh5wYYANdJM9K9HbqqPSxarewSiZ6uFNxhdq2xjPD4Fx5tsANoDZuteKB6RgtcrJ2qNrYK",
  "key5": "aTFAHYijUo5UepWCQANHh3VndcpxZ1gQAFaAz7gAv6Er3B8m9u1W5LWRen87RW3dNQ15iEAckagUrA2zAT6KsWe",
  "key6": "51xcoFvRLFTBxVFySopH7qCZKwmNVGUzfLijyPg1AuW8fLMjQ6u7RaXErMdm9ky5CmREEtuHp9X8SzJS7GzTBGcN",
  "key7": "hxgg4HrzkbjQ2iqErdK52KbnGvHzwppBVocv8EmX7jtKqooyjm9ivMQBexXaE4VvE6BD4ZX58PunLhkr9ENvwr3",
  "key8": "5URki8Jxcs7SnkbwbBtBEggKr3ogjma2teE6DzfxW3F8CX2n5QM7b2Da9DkVzvsaQdsLPf3o6tt1FAx8jj9himfc",
  "key9": "57FsvJHyxd9qxj6GehHDQtmP5KGCET7doPFc1kBdWWZx5mCnxmyTzhkDdx7XxgEuajPzJgEpYBvt7eW5hPNc8UY7",
  "key10": "5Fc7ZiTECPdLXZCUFA5A3bZ5R5W11LbTTDHn1ortuZHVgDHMaGCGQs4opHHLYzwNnE5U6nKqhnGMahsihUrAsUaW",
  "key11": "2EMMr9F1hRjY3RVzb5eoSw3NsUUvSQRJAqxAPGR7Lb6yewfAxdtua9jvSVvdM1zJsDxsY7HLNv1dnzwP9tbFeUQL",
  "key12": "1wCv4YvPpg3pmwPW2ZwYc3u2N92SR3DYhJBiLPdrtgDQond7A2kihYyUzqtb5MJmdrveFxX4yBummiPUrrnFnRU",
  "key13": "4xzxBBPgMghaz3Q7p4HwPCrBmSMZhsZAzd3ancTB9yU7DMd7FPE3Vfio9KuAJFbWrT6b9NmZh8xnukHS1C4ayua",
  "key14": "51ZwEZyV3fHUZJLBLQ2uyQPKE1RFyiSzboQ44KEeKr5J9VsCYRnNuoAFRyQ3AqBnWcH486KrDJVXzBYQNVZusUtP",
  "key15": "4n962NHAvW5rP2iBSQoVCymie4wmPzSawyVgByXqdR1qvQ8ot1TYXwS8eUkB8NitxgHAN1xqPiULFdDxxGrswrLa",
  "key16": "4FucJj3khDuYSZJCu9jKecbWazC9LK3Xw9StwpZbhoPcA2MnW96mef8YCFShSUeVLwh5KJMWFEs4r47eJW3ycHK1",
  "key17": "4qkUFgM6w6kn8EcuBiRFo4hHSdR5c8foTMvXvmh6Zx3PHPd2WsGwXWzyYjWXA4RFPERF9MZs99G7nEEoTQueza9H",
  "key18": "54hTMbzjjSkfykXvCppoENEY9j6grFrfFCowkNfWp35Js4cQyFhvJconM4X62h87kUXhYBDbcrNRLvsdxh5zGMdX",
  "key19": "2uDH92XXMqu6CN4uFNKoVJZoihFufkJUu82cb7uHbnNe3UWPuozYN2obTiGeqECiS9qXcdcq9R3XXVEocSvb7SG2",
  "key20": "2XkjyWKdFSg6VC9Kes3hDjyhXhZg5D7KkykZh93FC3HnRfRBLpuMu5cX9iXmoEnEdS941m1fztrmqQxq8VGhoWS7",
  "key21": "21ZpxGzpnbWRbfyiSr1Jk9Rvi3fabLuGqfD84CXmwwfUKEGrYJo2qvfyjqoBSujiwpsi34ZwEtajxhyzy3SCoCws",
  "key22": "3hggXodYoUSP1cGGjyGRFiQVqqRm3eJeqtyDsUN2icG23gbg1RWN8n5zstGKyidNfaX64taKqHChUZMFvTAG7fDT",
  "key23": "32hz9pnr3x97rERe4tYcftuqxCCvywSGeW3AHvK1oxye9A4epUqJTGorqPkVs3zPs4VGBSJyfthcN2LzofufZnrq",
  "key24": "e7CFTQu5yoxAeriTB82qdKe4vR7Uom7gyQFnRZoWVm44jnbtDyAT6H2j1242c4oaNgrTwqPzxWSbHNSjxjLjYKa",
  "key25": "5s93dmUjnAHppHKeMUyjuWgLSqb2dPe2cYeEqLfb8dLycDfEEpQociwec5s1LeUFsUu1WjVMAnMMySj5LREhT4aa",
  "key26": "4McuTdxrjcZGCbadvU2icMQgpZ41MLUf3MVfvEPJCrjQtWWrL8Cbt2E5yhP46gyrM9QBkGoYJ9vQdvwGZgnjrBia",
  "key27": "3VvxpJVeq7ccahFPE2ER2QsVrGHr4cA5NzbKUCrh8c2pZYCZAyuYFAd6UGJXUZNZAFq2v4dxwYxdK4ALHadPifjW",
  "key28": "5BXJqRjkUJRNSetJACVkJ7BR5E5HxdZHBUMjtm5aYMY1pGUwAhqjN93sPJt1q25UEEzmb2Y1FjY3ELXQ4pXivfcq",
  "key29": "4LtKUrgQQDM5qSuxMpy5ujs7Fg3bmN4JDXNrJ2Dz9FG4jLA4nUWAdsnKnoBnkCd6gToJFurTvpzj8giekAKLuGbe",
  "key30": "3KFeVoykf782jomCJXfFpTTqhaMcdQHven1e5WaL42kVkAFYpjEXnNfenepGrTy3hU7rBKmq4Z7z3NEQx2DocsxC",
  "key31": "5PzbWVtVbmxCu2fR5bb9wHJktgPaNHXihH3AoQkyBxabGM6yYarMKVHjvLgPiqxB5w3KgE5PGa9dyeeLrrZZWFzV"
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
