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
    "3MpvYN1A3ZkS9zEwSVcGA9UMSRitq4Hh9buKwxEeJdJkfJkDrxCmg9fwcbtQVzWSi79L3AkrHhZTT4SpvokFvLu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cq6agZCCfYXNmmB8fMXHhcfZYN8VNHaMWZKJTNhsVQURcPNfHWPADGibpuSnBQkH79hAtfRLmPzre1LkyYs7wy1",
  "key1": "494Qak6uuGwQcSr5mfcch6dNSqn1QJThJosmW3LgUggkf8XDWZqYKBzc7KnzA9mZoPBMvQcZ3AopZYrYfZbHQXFN",
  "key2": "paAGK3rzJKYiiwNFepSr21qJkee6f16VjqGCRJQDhdFizThLLscFbQH1HaYsA3y2i7tFq5Cz7KsXPnTWWaQARCb",
  "key3": "3KrSTe8k3zJ2Rvn1Ny9eHkp6xYpPbsAyE9LjKhVKBKEHPXwd8BZuxXGtorbuzMfYKqBx9a7qfTXWMxd646SKR1eA",
  "key4": "RF8281Z3czeczU8uu4gMbkDPBq1MbyPfEsyH1o95RCHSjvjUXTE5fPRjRbqr9Zdfan8g5ntfUvU36ZJokhVL4Xj",
  "key5": "3rue2PzW1P1KbPRpczgxdcUoyzajwesq22zdBT1DxmTnJMywX1EnfJwXN7kN7QgeA1Mrs6GCgGPbgxzjL7J8Q64S",
  "key6": "3mtUTUYPzXfFStmmLaCqVcCw8RVBcpni74ehUpjyUCmUgYu4ReiNrnHXWMbqSFSpQtRbhjrBpQjPmZNUYEfeh9RF",
  "key7": "5TCfjYZY3YEpcCWup8Khj2WzwU5hqijkhLesvmWGwNVRx8AVX1MwQ51TRwRiBPkzXqWpfzXe2Vh3zxbx9GipNHAT",
  "key8": "2VbcDCgLRwdfFqRztrDuRoihWUT2b1Hrj9ekrgw8YBj6n2YfsTKLb9bJvmeBRuQ85c1Xs5oDoUuSJRoT9iGrc6uy",
  "key9": "3KSMsTbMhdFd9gpniRx4QUjpTDx6gmrHNgDCyYTHic9ePNUXuXMnRSnD22DcgGZRiqLghH8zYSE2YihEaqGqQUQd",
  "key10": "Hpgphf48NAk735B8cCUHv3WN1aZWezD7H1PXsozYxznsEwudG8b9K5raF9YDLcbqDS7ba6nEAaioNU8jiuEkpJo",
  "key11": "3sioqcTzoYy5RiUUPTLDp93z4ogVUZewUfxcoTEq1KsZfzDY9Ci3txfnXa37jvmyC8GLJRQbwKeYVb5q6M6JTHwB",
  "key12": "NWswAbePsvJH56nTf95FM7aLRYAG4a4b6h1wDvRT4zUtJ68qXFNmMmPg8gzcoheWTLxodU3vMbVsfwm94vHwKUt",
  "key13": "3MDPSRDkYyZsNF9jCC6AXHs3XRb84CkwVrmuLtaTeT3iJzdg1wffttUnE11cytU7Fb7QCkMmtEFo3piuHXMpT8uj",
  "key14": "4F3JVzr7yTUikjGGGbNYxzcJ3jSmSLYcgwPM7r7kMCfLrZxCAmzdAjs4xSk8BQxV811QMoPUj2v5MB8ctCyAEBsi",
  "key15": "NzS42sk7zvrRXK775BEPETCWQxz8tCS82uXG59wUeiT2kEUnS3ttmD8Jng2uAAuj46FGwki3Bquj28BhhgS9gAg",
  "key16": "5d7gpQqQk9QGhSCrBqH1WLRAaS7nJDNztSfLBiaBe4Vu82fVuZirCGmxBtFUuh81qwbphmj63i7FvErX97d5zyR9",
  "key17": "z9N5yWWFYotbstTnhVFQk5aq779hGW6paEEfQmp2i3WGGSs2pZAsUd5EfEDySkULhuYko7bQZnDi6v5PSY45vXe",
  "key18": "5S11LHcbEphrSe53g3mByNWxbdea3ftxCg57LD7YAjmtDyoQvxSTiiBM529B1dfEFwGBnJgiRtRLbn8ATJCUSw3Y",
  "key19": "5Km6GMu824NtpUpUdDovaj7EkNfsxgCA42PMetKnE5WzXfKdfuBRRDAab119VZp2C28fe31YbeRwPUvrWYuoTAg6",
  "key20": "23NrsXCgeBLMAjevw3xbBcQuBCykVtdTAtyNrRRLRDN7Q4GS5n8N6xubLvynK5HqjxMQp37Ler8qQNsDgc4CMQVb",
  "key21": "2eAxx81ogcGbo6gs5sTAkkF4EVQ8VF1TMfGFzycWNjxoFbVaCJGsPg274nXUmNYMbnnfWdNPi3rcmZ9UbizWmwM5",
  "key22": "3cmEDAus1FioaGEG7uMFsLbmwtHmV3EL2qQYEfnRvvJqxYoGXoF4bNBbh3QAYua6YaCSzJnJMUTcVh95uZhoezPS",
  "key23": "2EhUoSP4fuUjdx5NAZd5ZR12pkUkXHGyMrB67okaX9cN4FgET9zg4M1jnFSjc1YFrxKEZUUvfyggWvF8ekTZgeAd",
  "key24": "cL5P3x3Boh1gCFKsCPGHxkdcbzt746Gy8a2HDy2TMAvvdsbG2XomUDboNGJeTamMfWSB8u5JJmoZ7a8G9Q2iUvP",
  "key25": "3eKkM1493Njhc3eWPnnMRcpFdPjVPBJgduvpZbW8NU2Je6684RtKSTtfK7M1tU84ZaTpDmTnPpLobGQK3u3E8QkW",
  "key26": "3ESZWAJKSz9AK7tdDdmCAfcRKXtqkt2yCLLdg41N7ngQCuKmUNjrXZjL5BDJpqjt5RPJFqLGrZbqC8S9EDZGbVHm",
  "key27": "623pSVsNRW88cG9nR6w4MV2aDYYvsgZqtc6pYzmT3vydmLd1xV3ZMSZLAVFQA9YAbrTU8ZRKGediFYs7k6aTpWaf",
  "key28": "5K5cR7oW4RoN8LgpE1HbvCF5SUpiKGLr6yG5krJDGYUXiG9TnQgAKQFjwS2sgcz6MLt9c9ANnqBp1EQ2z6r4DLAC",
  "key29": "2MMxg3YXjrJ2TQ28u8yyBrRg4f7LYvRe2R3eLphG97BuGtexd7x27PJ49da7HvAvFhTGA6pThFMzu847S6s8CtxQ",
  "key30": "5ftLp3pZMxZmc5UP6AwEQnQx2yzMdV3hcZdFqCXXCgirTvpZ4zRbSynP5yrowzhnVLv1rtQXL6SxyyB32a4YkfeM",
  "key31": "476nvd2NJrxkeNTVtGTafwgXd8EU4ozceDJQVnF5QKtGqBJvSuyUU5NC2vUhQYtVT2wHTqjk4Jm1FaFhBFZTTuas",
  "key32": "3SHu4tFMXuUWnjXRxqMR4mzhZe1TzzHcGmNk7y2MnUaCJxbeCVuodKJLZEbyuYkYVTPp5XPcgE76jqJ7HhTgCzk4",
  "key33": "2V8Um5rRa3dJicquiy8PESWdBFLFxi9UuwVWaKVub3KpB4pupqn6f4jjqD58vhJ6PD5Fqru2M47fHFWLnhSA8qm5",
  "key34": "3JKkNuBrgfeGNhDFnLjKafNbCQqB89V53yi9GASBntLjhSTBdmLASsyCziVmntFZXuhttbnWxZVZZZToAVuL9vDQ",
  "key35": "21FzNS87LLmx3hwsx8XbhZJUe2ZLTLdZQiQS9hzeRqoyx76YJWJ3JnkTSwiHaPcjFtNoDbWG1NWDnc6aWbXCEX9z",
  "key36": "4T6gGXUu2ZKvxBBSZHsZVbL5ToPQVXWFmxvMfXwLHB5vVLTjSUNe4UCDVSsdQCTuy4YgWZuAiV3MKcv9EzCBaTYq",
  "key37": "63AR9d6j6vFFVL7DcTCeyXjgtxPTfiPbsVwLZwdXmiArBfyNykMBEPVy1HsxHEfs3XtRayM6zHHZuRKaZK8CqTGQ",
  "key38": "3ji3kTQQ8F2BPGKzDVeCAnoVJNx2ffZxWr8vLaUhohjG9TaRW3vqBP7t3kW8Erb7LnfHGuCHanQmEgRrm5DqftC",
  "key39": "2sZh9CXr2VS2CpWN6rCXJrdmFYcpuJYfjhqthJ8RpTxZt4dP8juj2umw8yHuPq3bzDHQBFyrrp7x5kRvjqf6nV5G",
  "key40": "26A2rfbdv1y8bHiQNh478wL3UR4tDRX1e7kDxKFzqnSDmCMbLwr1LoXBceAaK7PBtFJWfvxH7WxRo1nFawK9NUyh",
  "key41": "4aW1sDwiamSbWZG9iKSTDRqYvJ6rvx2eehVXqZBFFmcF3F8D3wyTSaw2mrSGbw41nvQJmQ4Mgayj7ij8jKJpZR85",
  "key42": "3MhneybvfEDRZ87xZRnkVnLvzVbQ4kKq8CWLfDrRmU1bhTy74qKBX4BWHh4a6AfbUR1WA8sg9JkkE6kRMwAtEZYn"
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
