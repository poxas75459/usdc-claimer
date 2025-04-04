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
    "xjwEAxASJwhfyAe6cKkeYXSSKwGcxNrs4BazygMooi75ECUQtoES3spvo7GiiseC5D8X94NhRBGgqWYSYy7Lr7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnMAaP62FHszheLq5HsAWEEbKTmkunbtDc7svEw2uPi9QACkTH2Gt9AAhdgJpGFxpaSf1Bq3qmvF35hgHiSRcqc",
  "key1": "3NfqkAtBc4Xp2oV14Bj17axK1UB9WHfh4i8PME9DUWJoo9wwuViApxqD45NuUePjgXNq5gWeBKpWgCGB5mKXj7wf",
  "key2": "5tv5R1C6Q2Lg57k57S5XgzE4iTZmm5pSwLNH3743PDSGo8U2gGSocnGkQhF6kWgt9MvVW4AJKBv3AffFMiDJRP79",
  "key3": "5zJjnfyjFoqgYTnUkK36NG9ucsZrJMHBUJJ8RBytYPCQm6j3NuhSgViJtXJRbth2ZiPTj7jhtVgTRh5mu6qNek5p",
  "key4": "3QgqoruRh9tkiEznB3McyW7yFBAuUrBDf9cUXEqiov959nrBT69P9kL2J5uTUThi2pwVKTSAhwXhDJinr9LCYFmw",
  "key5": "4kgvjcJtgkNfokAXVBXLUgWoA5VhBEMgwZbNAgZei2TZEu5KseaWaXy7RrwGuJVKUyDWyDFNYsdXvCbaemyg5G1A",
  "key6": "GNvnaqVDVcsmqKg6ZTiBjsRfzfUCSUY5VCvxFfuH68iyiyJycg79jBMX6FyGNd6PT1DknuLJrtNpyho76B8PfHR",
  "key7": "5gt99FQSdvfgbNLEeq4BaA7B6n6aWqtAbRQnnCm1sPtmR5TZm4yZhxp4jV9r7XQw3Q5hwYbzjR1hSvXYjekg45Kn",
  "key8": "26gWa2aGcX7tT2muLcjYmpz1tV9ntnyy1VkEcWQqm4sKGjQDAXsNMk7bdjpXhhZCCxLYstu6bxHqgRDrLqoCTzpk",
  "key9": "34PJ9yquWRZRrvDvenGMQP3QEkkEb13WMxN4MSQmoK8BSXBngxNnVVF1LVXjLsybD3XrAJaWLBfzdiQDSQhKRH5y",
  "key10": "3JP6roUyb6iuG3SZpeTXqowSopFsGkZApVxFm4tKbCPBHkS1yZ1mwuavS8Tw2DgeaRU9o1Ryz9VSA1mFXry3uWyp",
  "key11": "2WqgKSTzQMb5LFqbteDRFQvx2kFVTLHJbwkzeevT5qcZTU8LJEh2in5BLdm2Vspkftq6YjNoz5dn684x4is2VcRL",
  "key12": "28NddEGJzEur1gppxV6SWjc3dqn7HR2H4v2joKSLyR2Rd9DfW1nfmBPiuBABkXM4s8DhfRhWWoRgdZLAbc212bhx",
  "key13": "3qLCQXqvr9sPdLBdDYPEMkGsxXWt9ZGYZDkuyFcMsfhPvMGKQKHmU4o2Hn8YLSUbkZUkgQ1Sf3MBbzxjmwM3aubd",
  "key14": "5D7f46MTo2qpHfe7k6F7tJyHqeGcJr9ru3h9aq5HWFJBDzZiAdhu6hbpFaJ2YremB6ZbCSbKHqGEd51gHhQw1KMT",
  "key15": "2mKVRKDo8VSavvDnsSYaBahoUFAMxiMg22uVyeNtZrywnMVa5iKJaLFFo4m8VYZhUtmgU5ezhGEmn5gb5oo4upXX",
  "key16": "4b3y16i1vfWPe6DDXwyTvq5iZDfzCoRpyAjdBJdTX2o2Dk7AdKiJXyebbDK3T3SC1KKoWYxEDhbEFdYKih9PQvGG",
  "key17": "5A91Fny1nLSFxuJJpgjhHB9tWheN4ZjGSnTgPHMhZbsJgKPQUnT8LGnTCWhr5JhV4sJe9fyE8Z1gQCbdfoFFAdmT",
  "key18": "SD7iUq3Eo8ZDcqZUgr9LzsLWyBaJ4aPbK1WJjB42Yj6SmrnqB9AzYh6THXfUx3iRozB2ZKwrEChkF5czNm2BX9W",
  "key19": "4Z6FoV47njUZyuCF4z6PxNY7bzB72udnrkL3PMShyvsxtiPpmWF5sCZCyyV2V3DYu7NaHLAeoYyoAfbAtu6tvgyo",
  "key20": "3hWjnW3qcuatMBzXJ8hwjFory9WhEAQ4QAMA6vRWsBJMdhLi21kWZ9ZtMfVsYLcaytMbQn5f3rmtbEQ7Z2kmVuJD",
  "key21": "2wG6sYPR4QSCoixpBQrVvp48YXuoLcnmQb3epHXfjqQWmFWgMd5T8NVKuTAQnYXdcWAZpWNCnfUZ75UygvYZ27Nz",
  "key22": "vY37zKmfRigAghX4hk9C8xefpqLm7y2Bbc7o8fuzPDSUDYaj1nSJWtALEkXFzrEqTehaAnrrinTgZNDVkBTc5C4",
  "key23": "5qC37DFq9tSGgfwyVzQ2V3ED6Eo7jS6FAHTJLPLc5Fp2CwaJFJcWg9yWKsYjKiKXTSnbqD34FxdraWY9xvpzCdEk",
  "key24": "3pZzqjpCX7BWfB93rx3WwxdSamqFBkZ4HJGjitGXDLBSwfdESt8z2HM8X88kkmi1j4zEkqq9J9BSdzJfKV2jLcnp",
  "key25": "3nh3Wj9GwnntVS5J1MCpbgcB8WTtg67LEj77XBngwQHoZ7WxWj6NhtFeCzCcjp66nvqnEJ6VBam3PFe3SLzhQwsL",
  "key26": "427jQ7xusKtwxxzjPq2axL5sgdKrNBRRSzpAD9uJX7kYZuGVBGT4e4912rjJL7scupVJQ4i8wxV3tJqN2qYt37y7",
  "key27": "3jPFy8wQMzjs8Fdr5ASmSDHm1TkUDjQAxZAjfZrQymp1XpL6529LdxiYv6h6SVwA9nApG4Fj7wJ2QLNdqHAQ5RAk",
  "key28": "37dmdzX1HPGCC96oP3cVrj2rkaujB2NoxsFtbUviiwsW3tqZcvSa3RDUPTn9bap3uTs93JvukHDp2ZUujXVnk8ya",
  "key29": "5q1KtDn7YRzNAxoBiuVcvWHNmSoqZGSC37pNbD2WqdM224BzmAu3Qsn7Uv8QBMwNqy4mx1Y6k7cXFcP5BGVnT5s1",
  "key30": "2hbw8fVHGPiBuw86ezb3jaxp7h2GaCmvUTZWmEsrUnCRpzBG1cL2vrEGfUTeMRETJ5kybtjvwzrS4N9RiAB3wBur",
  "key31": "2jkeHunBPHu1Bkx2AjVwRWM8yqzmvdy15W4jjqSLdQLYrvBgzCvhc4EJDMWjKMpUykkVnpVgGcr1o3tXKRoF6i57"
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
