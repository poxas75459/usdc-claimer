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
    "3YVax8ifU29mC7Sw5cysBCvsp7KnHi747sLzUnsUvYmzemrxC3yo8HTnzFm9cFBZ7MpDCyjdhKzD1od5gq2u4AVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CGCGZSfKxqK9DoHwoi77ubqt9FHZFNuxQ3hZbQiDtAJBprK5yqFBQ63abQJEDHeg6YPFa86X2BvZj7k69XTZmVn",
  "key1": "1yMuvv9SYAAvceFzZQsmfZZvs8inYWivhvJUt5uf2WCr7ozF6h6aJFpxZoR2Q23xn6DU6pHigQUbcoqxVbEHDjS",
  "key2": "2Mj7GsA4j57ytCNyKcuvnGA33UWBBMQzPiobHYgDzRKTQcFbUHC1xRnZUnxoE6zjaZaR7Z1yRA8xdn8fu6m78gXv",
  "key3": "4gYL2jQb9NfXmmrxuPCZDZRMkxr9LbDWfwzsxkS8tGYoJ7ADY78Nc6ZuhqiKgkmFiE3Zn2h6N1sNnqeBb3BHp3iT",
  "key4": "3tNGBRBVbAxWUYgVngq3WZod5pMCymcZ46nURA5ZpoZ9rxpr6aTyUfzS7s162mJHkP39zFcUEqQ8MWmeKA1rrqNV",
  "key5": "2AqJB1MVNpw3Jr9cyrXRo2ALKZyWTACCuiZTVJ4hux6qgZi8GAW2JHVEQ4uCDWXee5AA9AuW6dgiY9DyDgn33JaV",
  "key6": "ghJF59hebb2cdauoTRJ6sionS2LvdC5vTKSgjXq7uLmhDy9FSdFGt7MUtuBa5qSEchq4hzYjsNNk9cjLtXBJSQ9",
  "key7": "2FRVPhf84oimJy4fYeJoRDyTeF2rmQWs2bLbGe8MFGDADrPfTLhyb3WwVVJi23s9uaQuzRuc1WEMVQ1HK4TanxL7",
  "key8": "4uMmrEEMam8twSQeVk56ic8pBfTMufjYGpye5kiuPfn5VniQDdCiXULqnb64okjW5vj2ii8wPtUkHSfvZ9CLhveg",
  "key9": "5G1kW224hZzji9iFm57Z3EfbcuVemhFDUh4sxeJRYmmZR38ZwPjqLcw2Sv14FWpfcEf6JF3odqoSt82kHzocWYrL",
  "key10": "3BEtoEbEfJMecDhCtv6L6BGx5RHpgXeGKu15w3KkjBegxBR6cyjCRm7rqvHVJNVZ2S8cHNea2dSc6DvPCw9cupG7",
  "key11": "5e5LwtDS1A4RXqApWwJf9LU32ufq3n8vwHGMyxqcwtkSdUptwkUivAsEttVE1rmDYcccjaaJU4JMvga4cTefMxk2",
  "key12": "4c2jbHh639dNaPVsXd8r2FaCf2id81mHZSWyonWZLwQXc7sjzaBS8TouXteWMggxCi9TUiGT3HHhuVZL8ZCnECeW",
  "key13": "3Bu7kWHVKgFmmgoUh3shFYnhr3X9SQei4bcUab3dtzmcQSkG1B1MCaW2uA17VnKcSc48Ujdr25JTce3EXLh7soXj",
  "key14": "4xcGiHK4N2AMj4L6TFJFsy8q4iPHU217Rk8jgPjQPvCvqxCTsc9wZvydA66DdTcSwKZR1heszXtwGkPwRKyUSFbK",
  "key15": "2fJe6bXDHJojoEnv8MRVZGjvYGvfMFFGkheZ4Ab5bEQbm2GvsH7YsoLX9a8TobjTLcfsVMCg9RLuo2p9uva6WrJe",
  "key16": "tiRexoWwbZ4qHJvUg2XPwGoNF6SQ44ASfadDDSFQTBkhwMM1xeo6EjQLXR27JZhtd9D3E3gWwBQpxTn1SxAu9RU",
  "key17": "4fRAZcozuETwECDCxtgYhfZtDcFs1X7QDoYbgdUNB6fe79ViE6C9FZrac6ETuvtVJbNkX7wRBgo8RHfXLYHaeS8w",
  "key18": "5xXf2hAbsYBRbvKdXNfsV8eyPyrnves2fNFtiQyYaHQw8GCeHD7dj9CUn1Qpc76ufS1vjbTN7MpiJ1SNRf7YBvXe",
  "key19": "3sBWpau8aGn32bASknJ898bU5go5qSaAGmL5J5z1ZDseHiWjmCXQ27vzMBzP1qejLpJvdkthEvyV2uiejpzU4CXs",
  "key20": "4R8nZRKDqVw34Vgavgb7hCpqY6nyF4kJazhCeoSgRdaamzahWUo85fCBF4nGZmFGuw4sUZmfkJBCu9uRxDiToZx3",
  "key21": "34xS2YJ4jHtpGxdc9KZST9TZmfGNiD5yMvdFJZpmxUTtg7KAzWw6piyt2f78EhvwDraDk1E3QeyLXo3GpbZZ6Hgz",
  "key22": "4omC2Y2561R3xTM3B4AoVpadRc1jt7FFb6HPhS4L9NmyBmr9DQDRz4yZX7m7BsW7pdF2kZxuncuuXdKxhyFmCGDS",
  "key23": "5n5MwkaBsRj11789iRGtLKPQ9cRhZ7apHrKMJWnZTxJFReSUbWthDoX6YDr6KR5ivkzxpyv1G4gX23uj8Jwjndoh",
  "key24": "2ZahZukxq7UE87Qa874FxpdU4dDPgG93xEzjEMcMJ1c761EmjUYcvywssDRhBHjxksm2Sk5QWdsvPu4RBSzHwh7W",
  "key25": "3bAoPU5QnrTzZmQZkPbH9ZofhGVKsxFuqWWFbfi2sZmPwRdMP1QuH3KLakYRwFkvgzTNGe4aqFSGwgSTtFvpTVEz",
  "key26": "5AawiJgbzJnFTDu13aVceVEKtyJigeC3AtaRaqzDUquv3a9uX8L2oPg16SDMoVToEm9WpAgpJa8gLNEhwnSKb2CM",
  "key27": "3X4Y6DDx5LQ6ixcfxA2hmd7EsJiqRnKmz44E3JKhKzoUKePVLWH8RHyqmrDWAcKakVEhkZjc5gKHcybiQgix3ns2",
  "key28": "2uVEkhRM9gwXhkjWR9pVr786SbxbixdMhNszmLFA3rioWdvDRXNgsCieja6MrCnpVLcB43M3zLMRFmshvCiAB3D",
  "key29": "3RBbsYoavDTL39QymHb2rNMJf5DLTNNqNLWqRruNzPrdFZ4GxFaDSDwfzrq3DZ9BbB7o6koy3vbF6GMnQ55VVt5J",
  "key30": "5Mp57bZ7A7S4cEe1Jb1am33W2UenaiNsY5XLNjcdtBAgAN7u9QesQFfGMDgzKH6MkYrYB7LFp2FnbSgJP3Xgnpww",
  "key31": "5MkefZajnsmhwWRmwX2YEt5QNcMcjQrWMK8wP5vkNUSR2vwKhXAfqqEcUiMUXipvevK2FC1UAaZ3iNvdWbCQDjQ5",
  "key32": "2jfzvKqBr2YLL7QZNcJPLKxS8LFcQGXY5gqZ6Ypaga6QKWY1K4s3E3Kbnfq7rSwMiVKmGfkmBPfL5ScpWsWfSz1u",
  "key33": "4m8f3JADMyfebLaoS2HsnEtVKUUptxfrwXNSHyCvakQJQELhTzLSdgkcLrVGMpByvUkqaj3RrDu1p3uiurvovm4H",
  "key34": "5wPdWC4TBvJyxRTCTNkotCMRuaBZhf2uhTSbj24qK7EZsmU659UKZrcm5ey8fk1rav5djgYYpm7o6zQ4sxBxoDQ9",
  "key35": "3fDpbrgs6vwiGvaLwLnuMQxAHc1KVaJzaskQYFdcpSdMb4YZbKEcHM5PB6KuM6ZL1towqb8cgT5cEGBTDjfsqFnp",
  "key36": "3zp6544dKYfT6sqsyvC51gLMACLBm5Zv4TbBMnVzc5SuXRmRQUBPtb2yZ3vqAfFxnmt8RAUJyf8Q3uXaRPmHyoYG"
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
