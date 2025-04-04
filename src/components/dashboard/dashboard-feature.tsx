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
    "4CDndene7idahLTLnT8WEiWkYaHiyJntj5Shz5GPwVRFufmqqmy4ZhWPLYa3WtJkDhyM5LvbnZXGdnYj3yLEKwRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znEWHuJ2pwZFBTCv2oQQFT9246KfVNWBh5cCjuuUa1bwnD5w74GBmLzzpVXkBfVhCe9VUiUcNDx9X7TVd1BxkAy",
  "key1": "2d8iWYxALo5kyskQx6rTGTW85LC1ksJGcn4oEoM2c2wGgDhdzf94DpnDTE1mkn3XfHNQRjWYqwyPyNk5Z5jt59x6",
  "key2": "3sySGFMr9stsiDpTe83fbmdbzTJM9m6mf8cCqB1yWL16CUcb94czYsXgsQRm45fz3uFmQ2TbYqhCWKXu93mu7sDB",
  "key3": "4H8sWsYYBXJqoWhkEN6ZfRMUutydNvihkPk9j148v5LtmVDhxAHEqaPVvVs9esZWDgLpA4DLBAua4USAaBLuSQar",
  "key4": "37xYaTj4CC6UEn5LiayawW3SsSSf1gBge789fQUsQVgwAZLucHEsgRkumfb6tUGxCsG3TiJg2Z6xn7kxfXSzp1Es",
  "key5": "5xouDS18ToZdFA9u9PgFBCeVEqvW1eHoBxmUmYvLU1N8bZVZHheYxbkvxmFNmXFjotut6NwDfF3HXuFkzvXTQqGv",
  "key6": "kJ2beQSszyP7eJnaheSsfVtrA4iPauDkemyfo2t8acqTSQV1VMhDNAb7XoQBBLf599csWzgmyAUWmdD4bkTQSjq",
  "key7": "5Yz5SK15vasoRe3XeDRssQbbxob5hApZbWR9Rw6Npc9C6oh6XXsSkANSY7GM1ytEVwLA6M41w4o8CU6gNcvwCdrK",
  "key8": "3on6uwe5eyozb3n8CMdG1pvKpC2hW3GrYWVQamky1yjFTRzmAhMJ6UockvAQ4NgbhPHoh1CPS3CgsXnyC8jMM9ZY",
  "key9": "2m4RB6it2qADmH5cMNHLdNhY5nBGANgcBuajseDdzffkrJM9KRxhUS2fTrP9t5ky3CuTVUFmK4svbSNfLVEteuai",
  "key10": "4aaV4BbZQYNW9zH98UKm6PzHzTCS1598BaJ1Zkh1JSvhBffGCYXXzNauSXecUcgCE6wMiVMZzNvo5eiQvfoBFSWb",
  "key11": "2oPD7b9DPDpexRnkfQBTNjQB6B1xQXS8JaeiybPNpeAPX7pAo59V1k8ssg5ZkEEVPVwp2rCXqPNMFU6RAAQa3AkE",
  "key12": "2AxKVEDAPxPnXohLt5YkY48XHwfswk2aWr2eZfi9LharhUsKLq1mgctuYbuq69Pr2XP8MuqYqHxW814ToqQPHYqM",
  "key13": "64PUetXxju2Njka1BupshQ6cQRQnLCQGwVCqNjGitjSuyJq5ypcCJruHUbxrjUkAMPtfyp5soNe98umxzcQ1JRim",
  "key14": "3wdoNe6xWXJLwLBXLVxqrjET4KPViWWNv9aNKEt7utueo8tQh9MDfnWMPqtiejAEmDXojc53YVLARtTmqxtmq3Pv",
  "key15": "2QV9zYEisqUNtVJQzKCCPLp4X61YW1WDzFnXc6GQTTT57khio5nWSDZvmcxJFvc4GQYiJ4yxDbViSdgJvtu9f5A8",
  "key16": "2FZjh3GnLvJhPX8dXMDQM3F3YSW7xp9oKZLzqCHVzBXPvRZ4JLHXYUNEicK6UZmZ1GVmtLWpxCaz7rf6zeoWLPr9",
  "key17": "5HQVwCUunPZJPpzeXBNjRTVZ6EdHkiHrNiKcuw6BXNNdtpdDn3w7KuynHoqUBTsY2FbEbMyqpaQ15S5ZJaRTwrAU",
  "key18": "63vBcqUGXzJoTcnjAAf6qZb1d15qtbPCyTpacLJXAE1vuN9DjBp7mZnz46e2byLYPqJS5dZbE8TF43H3jMgaenxK",
  "key19": "2NaHsMpLxoQN2zodSjVixLeAmWQ3uRw799PW9bvotWUWs7mJBYgp1jn63sbQ7B98HpwvuSgMMMdCrLKpQ8NuyEwZ",
  "key20": "vycvRCKn1RdUvfBkpUSm6tnM4Q9DRm7qGLz6KHkwTJXaSXjXuk4dEiK4yrntRXkGyxKgw9Mo4p8j4WCKBwfD78y",
  "key21": "4A7AkXuuCn4Fj4CVhyNWnFds6DWXdUnum8zPDBXdHUQAjKijxR4kVnZb9KGHHvUmJ4FUMSQNgYtM9Si4GiqDgCMM",
  "key22": "2dcfHzS5oqFpk83qUH9onN73ehxUqBRkyGENhUWdQ6ZmztQBQz6FUbCGafTTSWzmustpSS7nB3MtJfVzHjYTzj45",
  "key23": "35YUAGFoBzYkuq7ZuB4HfEKbKdutbwCWW4CVCCQQyRNgmBsBNY6vd6WayvgbRiNK6PJSQkeTY4DnpHnGfB9JnuTJ",
  "key24": "2PF6TQqUxVnNmmkJvHTqwa1pNbDaVvSeyxNu1ku95rDr7BKZNsLGnLau8JnjoH7zgDJyvYiyBy1HKaLFHV5qDMa2",
  "key25": "5JxnoRS1BA7NBjUVj5ebfpWYYEKRrwF85aEZbR8XBYh4avVpLNByrtcY45DNrorzZ4gYYGW8sQ8T9xg3CPc4Udo3",
  "key26": "Y2CqjFtmVTCabwpsgNS8Fyf4WCsDbUr9FrXDhpCU6mp23jnLPqtP2Zy3zZSBiF8kHXroeH8sGjFwCZHvBMgongm",
  "key27": "EK82LfZqgakWr2xhrfHPuj6oJC8ifCTMa7wYN7Xh3ujjHVzHsw2RWPvdUsZokivvfm2YgAxq7FVo2wn4UGiG4Cp",
  "key28": "2Ass1CM3fcuJXTM6h2yaEc3LSYQdgPdoxs75w7jbCvSLxL2zKKhHcfDaNGm3HHTqWTkNMFUyLJs6TKKPojZPRMbz",
  "key29": "3B8u6AXTPe8M5tkYsMjLrR5BBLbHvbRFPXB5trWq7Z8pSM2MQzC91N6vM9or5LdccDuWVgkRxicTfCJfEfbrqkrf",
  "key30": "rDgtu6MmArp8gSEkRhqvURPy3dYb76grs2raEUYG8DYFbBJQx9NfDmvEiaFbeCdTbUo2QLxoNaCEtHT4uo5Nm23",
  "key31": "2ok3UtxQgikT5t8nGkSLAzBw4q6YH8P2N3cU6nj3QuVVcxVE18DoeMn2rnKLkaWWWQHAcsiFRDhekbLyaSqNVmtn",
  "key32": "4xKX427xxHAMPpr6ZrHVhWJ4TFAicdJCuYZ6pGsKPReprazPbputpj9qd8nSoAWR5zZuxxRr1eKzWFMnhSpbCkKc",
  "key33": "5gbjKVBqm2H5ePGdDLLrozf2zF7B58z94H47MVGi1drJFv3eZoa2giXynoJ32r2vv9FNpgWpB7knHv26BJDqLQqL",
  "key34": "3Rm6u9jGqTBe6NgKN9fvDmpHZ9fjwNHGEARMDqkJnrashwGrW5xJCbsPj7uM6A4XVrCih9iaQP7y4izX6Ks8xRqd",
  "key35": "3eYU1Bhh2cAwxLLQZXrFrY3C9yFKhDbKRHik72KcqoCSwUqdmVVWChwpvs3LEwWfUjCE6nvN8itgPiBWGN5nANGq"
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
