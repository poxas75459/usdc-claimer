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
    "3m6wF5n6p6kdy4eXVUQMb5SKbio5RDPKatjYJQfRA5jsXoLPWpK55qsJRFy1fEk4Na9DvAJwGnMKcHfekSCqXLvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEosBK2XTsw5W72a2VBKozsonXXgpPn8Doc7koE4MQJ7NMcsGfUM9u1J6x9B1VVwgQznLd6LDPFRHhjAGFcX47P",
  "key1": "3TWY9msXE77YS7bvYBQnJMdu2n3caFXU7PxqqAgiFAfPHWYLbNZ2ZVzUFqUePCzJn363YPLEqhnTof9EAZctg4GG",
  "key2": "46VUSs4zMutY3HRFi9zo1jNmayeqV5FFwMt3C3LDbtbsv1qWxdLw3k5hScKYsF7r8q1SBR8DZMXo2f9mB7BjoHoD",
  "key3": "27ZgHKGan7PVuQqe2Nhqi5Pudvg4QkQuank5cHr7sqL4xTC8jTjmrWZr4rkAAEkQX9FPyqPfJqiFacWRNqKja3fB",
  "key4": "2RdMhcNA6pBiyTDNcDzN7Hwd1LMygi2uth529MyiSMJrNcxuUfmxnLU7jCrULgQ5gNuf2kpKbF6UbdF9z5qkB3Vz",
  "key5": "51HA125k4fuDJLrSGJg9UZzmQAkJthLvK983ZAmERyZpVUsDqKjZkvRGb4LRMYvdbLb77RVp57ex1Ei17zEc2gb1",
  "key6": "5NFRszdAcDZDbNpsg2BDwHCJTeFVL8Ji7cjaNB3vTNUyNneRLGXvM4DLPcRXBnoHK4Rf6GYosDfTGPcPQ5u1rPAW",
  "key7": "RwhTmFUaDuNY33fB6EdS913R7Ht8A5FCH8hPnBEhZR4K67QWyFCJ8gg5zs6psYvG2k4gfovcPFTNBPvDg5S6CwV",
  "key8": "4YXE6TciWZzLYAqLpbk6HMaGiBaPaY9r86d2oLH7rr3CHzfgqqNoDWmeMpAWsBx5H17irP2uauyMfzr6WGVoLCFs",
  "key9": "4MaHXhWizBoVXooWXaWqL2WasxMnQkZUBW3UT4H3fLw3whtaRmFukcVp6bw7XrFLcZ7Ux4nLvasRUweZg1aib48V",
  "key10": "5zx78HnBmTLzmyhwzWHxyimwcFDP5EDqtMmBbawFgzYY8Z4KiExGE2QP4JZmVLySX6t8sEDTBUAj8dFF3WyKmghJ",
  "key11": "48bK8VJjjmykyEoVYKn9nNxxiDxwWcSDmMuoXWiogJHXjfJgaw6V5d1ChyxTonqtAR2rziQFkCfKLUvj57bFxu4L",
  "key12": "2ikkZu54L8Pi12wRoYwdc7WMsndPTCm9UarbxNVsL5K1zYvd6rDKBu4nDJwFeHBueuEKWmKyYJrJMG6DNRMKHjr6",
  "key13": "61RPF5ZQqqmthHxDbguC2YJdJMFoE4kqCFafMdiRFakmt6BHoqSPkeKYWHPiXaUFo2E6AFrmxxE3xwsqUUcKKe2i",
  "key14": "5WYN6z1PWmwNG1BwtLZTWJARcUHanQQkPosD3Vsmo2kjVk7bM5LvdLFFBQogst5Sh6ww3uyZqatxqHqkaanmuAaj",
  "key15": "wvq4GQ1WmLS2Khz6ppcsCaSSBnQc7wnvWpM9gUwotAFx7RNj4UyRMZhEN76ob51G6JzUCYQ7RvXBPhPRNo59pwv",
  "key16": "4Nvcrxa2JQzDLT3EteduANyoVEyfkcMAKpmrdJXovru5xbXKm3dfFyffx48GVwQ7WhiLJZSxLZi47uqriVN839hd",
  "key17": "5RJuajXo9VszceKLA8j3pGPcGh51sFq19C33TiWDAEjucYUwuzx597nn7WoTh2zjHUnjRy5WxDmhXkkYFn125Wao",
  "key18": "46WG9dipMYd4jsDWikRsa6YrGWd76HTEKVJdeRX7vvWpfSRozjaP3BY7R8JooRNwFVHSZbt5KY5f1tFKDzxaX1vJ",
  "key19": "59ECcXaqQfrcCKx8ZBAwwmjaSkUCC5EyC76oXpzm8v7sjZCpk99Hm2syCPH1HteAFmCKn22ADx4emZR2CDq3tDts",
  "key20": "3yG8YBNWoUeo4Q5mKZD1XUsM5bRn7win8mGXRzMogwHZ4a7duH9DrSUWzCd3bR7nzJSxf23WBXLz29ugSXBGp9K9",
  "key21": "5FviB8HmHMP3UQM52jKxHmeQqHCWXTiDuLqofjC7LQ8zi3bDhqNHdU2fgiLvS3d6P4RYBsZ2JJpwdyLMPhgKssQo",
  "key22": "2BLvRuU6pKUmpCB4mgVuKgVQBmLJSD8PVzotbAYXf6oLvC5e5Vvjn4HXe4dMpJ73V6vMPBrx9J5E8wctnL656pXV",
  "key23": "4W2eby4vrMQpEgGdTCVaC1STuo9yP5EGXPbB8kb1FZ32oB34ZnkFYWEAzwHNcPq5pmpkBjas7AvTD619Fm3wsvMS",
  "key24": "2uY1vT5oNRApEZYHbvKvjpMa2ETuZ553Ereer2V3x7LmYXCvLfiGWSuwuaBWv2u1YPrZQyub8CscPVEPVPSuSFMj",
  "key25": "21L6eBfmSPfS9sYbTK72o5AcjUEZTTCWiNk9PE4YZ31MEQvmAYgdEykLBmTExworv47iLwgWyQX9XtjTDduvKgKN",
  "key26": "2Fg43i866fdPbHMy79JKe1sDtXmrAvkq248SvC1SP5hoJu4MMDeAvzKoPAnWrkZ5dQY3aGNEZJXnnk5cxj28XxG3",
  "key27": "UmWwLXBLptPcEb1urgg8UQrv7TL5ts3dzNX7gGCPF9zhJboES8Q25b3SXSWAyXzMT7QphBscxTVqLb7QLhcYvpS",
  "key28": "2E2Y4ULjsRMzc5gUZ8jBNtiL8voJoWm9VBVdivCXtexrnHF8GLqQQWxpLUnK86w3zoF67Ahzz8psEo5bUrxJwvvu",
  "key29": "4Fo7o1Pq2kdLeK1V2r3ZvCXuyvEAEyzY4LfEFH33e3FgbZFYMLvUWkeRwmdZWwiMCKbFMKzGoeqDs72E2swJKAeK",
  "key30": "bWMmq8v1a4Xxe6cCWrmHETwsqLmkNuZJTd9wweWLAYcMSwjNAhSenAs1wjPMfxs9DfVEhsUhqa25194tLui2tRj",
  "key31": "5YFnJiCacbcgfN2CrUFj3JyTFbJ33nGfs2EQWpjXfkBkLSKfEJUPHLDrxPWeNvbhkh5aaMC8sDPap95vEqhuBnhq",
  "key32": "2hzyBkJyFJY89fPdWjEnM1itWotD6Jd1dgEZCUr6cjqopu4WWLsMfJ9svRhGRkK9Z2fNWoAigyfsd1ZNgPtjsar5",
  "key33": "5k3KxwL1D7BeVS3kipdrb9fKgsvYjE168Y2umTxJ3DGpVB78T7qSAY4Pp8FYqGBYVwD7m1Tc3a4o2cFXSvstoRXE",
  "key34": "tAMD64DsdkUt6mSjQ1pSvTwYaJeAWVWqMXGeuMuZ2VWgE5M3gnRVwTEE34Vc4qQ5xjUvpXnsxbEnBt6AUAfYQqL",
  "key35": "5RX2BjdV6W8qqYr69Ath3imU87mCX2h3J2tqDq2GkBaytifmtFoHVvZBt6WRSztwz79vRAv5FgpJi6mSTR315851",
  "key36": "2YkRQbV8aAbvpfRvpnRK6qntqfnNLJdQWFmNYSawfQL9C6e7brsqXxjzFeP3oBKcKVfz2PTs4Rj18uzHu7MGyvs5",
  "key37": "2kFndwQ3nchtUvBrFNPgRypp6cPyDtAPi8DdZFP6FJ28R1eQYYwT6ns6M5P8AqhpcRXtNYRWJ4HThcLAjBcdQtND",
  "key38": "nUZSYxAW9TEM3SrVTsMKpZTYh2iMTanuvBECpbZLpfWzKe9jLzB2SPJ35t8iv5dDBfVtJfzStssPt2uisuYyntE",
  "key39": "5JK8APDmfP6sbbefjP16FGsDHuGEzsP3X33keWfrb3eK914zS4kZ3Gx5GpRQH5uB5y92oQeBM7uGquqTq6duC7Cq",
  "key40": "D5xZ4wVndginVBLfGKZ3o8T1CzfuQxPs2ZsXZ4eJ2a6obqWSPhnZfAJwZSv1NAV19CTcP7x8uXvmdCFqhH3zdqn",
  "key41": "5Wtj8txAE3jrtLox4gNTYXBS3hfihYmuZWsfT9nTzrwHvqEhV4DMbXdPqESmVAub731Rtnu4f6EQg1Z25iakJUeB",
  "key42": "35qdqVdCyVS79kT9XB1Qe1ddnXrPp7ywv1dQ6nKiabveMLbMHLwWgFk6rLAFM21A7k7V58Hqd6ctHivQMBBmBFVw",
  "key43": "4dTVEq19obpXNstgmgiKSTzZt5v5ehUuqxUccv5G19o7F7V5JUnC7z1Z3ToN3db13NvTj3vXPFWcGoFvL8RuT6pZ"
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
