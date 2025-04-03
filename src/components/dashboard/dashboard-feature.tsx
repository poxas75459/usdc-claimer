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
    "3k215QsKJwiFkF4ovvKwrywwRXoHjWQeWA4bqghq9AyU8iSE97y59rex6YjphCrPUMM5xQssZjbSVTP2mtiXjqBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqQYkeHzK25cA4ZLg8h9u4Eh2FWryhL2pGmMi1bQ1J6AQPgzLHjTVvSBUN29i2xJmXt5oLR9EpfxofWU6hJrpEf",
  "key1": "3gs7wc65e5CBQ5xXen7rCCXnx77NQqttNwEEBRSQmmaTY8nJWzNSGxmHVKfsHypgtcHgXo3otztZ4TCzUXif3nyd",
  "key2": "4J1ut4DyAXSnt6cYruNRfrSf3svYYVd4othdnvEs8GUCd4VyD5Zmh3uBD2Ros5i98udEFQ4NL2XUKbuvk4kxoFTm",
  "key3": "5sGe8eMWnevAUeeXfMN5ZsUxPEZ4UCcRmgDDDyuJUxFfy86y2y1ZHoH8iuLGNNDpLnfhiGM1DPCpun1mmLfKfesx",
  "key4": "4sD4mKyHRZKncQUiV6EMwhUxLiHkaBABtNoCekbC7usjQmSgtgZGaougMDeZ4X2C3HynrLSaHcd6B2vNN1uu3ZXj",
  "key5": "4mU2bSGHfn8L899tSNQ5HwraJE5h4DQcNjxGSU9FWyMD57d72cPs78TLRFfnRiZeu8XgFvWE8Jy61GNwhYkFZSJH",
  "key6": "3RbV8HeQ9WfjfLT18jHbpNBVsd5u88buhwjGKGP9K4esx1UMjc7iHkEsqmQady8a5sxQZ31byRpZfrL57CNtWfNY",
  "key7": "2Li1HrvLe9kdoyJzycWcHgdvy4Gc4f6xryNUJwr6FW4spFnxXNW8tdAwcZz3xxMVX43PF5eu684caqeDJDMh4r58",
  "key8": "eZCdgKAYsi42aUKSxGcwRFgrRNWuNBKMiZ3igQakiHJiTHEJ8WXqorRbXqeN5MgfXJfwQuDGc5muKej2kWxBqbR",
  "key9": "3CTTXi2yPZfhvo3ETAeSRELFebRQY5QNP4fogF2Uw8Jx8S2Y4muQvLSiAternpTc38ev2jVrx2GrRQhiMoXcFSg7",
  "key10": "5tKpiCAEtkvsgcjxJFoxaTB5jwvvqHN8GuCk7SnYg1dPEZTPr8wZs16ZxDq8sBYdT12vLM4zzVmktC8aKtXaz8DC",
  "key11": "5xMJTgZiXyvKamGBV3bQYdtxbc8fvtFyPbtPpeJPmWUkoy9aPTnvgs6ESrEo4DHJfMa4AUEujKRuMCsVxa1Hwqym",
  "key12": "5jXCKVPCjNQnhJbLHPLUA45tRmWdBccedCF6459e52CTgFTz4zDSnQbtkn3dJ1ZnEifVS7isBaBruF8BKpmUm1C4",
  "key13": "5Cw3o3bCF2HHx3nSk3rUJyq7aUjQThzJTzXrW71iiMeqkDp3paTARq9Cgv2riKWU9ELY3V9PfWe7dTZY2Kn8vCgy",
  "key14": "64mKgGPvUBvdrwHvWqWFqSShW1pfyfrqTfE86xwu1b2Vc1AipJjZeo5LbsMa2858NTP5pj3cA6GxVUqjkDpbmHQ9",
  "key15": "2opmpEm63i7mejcwTcj1WSyityr93LnivM3BTMdSdspPcYwN1F9WcXyoXfsYuLzhAXxwXisRfJBsas7k3GLFTAmc",
  "key16": "37MXq2W9UZ4pDRx7hsycowcbN5RyteM18kTcTHUPSCNh3dchnYz3gBPSQ7KA8k9gbrgHuYnrwPXuS5SfshZ2DTmv",
  "key17": "4MHDuDqtcLE94sNPVmgUfyLkTvS2ht8w2LUGyVMenNDfVkqSFiWU2dJV23efrc24ErJHxYEZfAYqG8rN5yuBiJrD",
  "key18": "BMv3BmxhPXTQP6vJTCLvH431c1dj5D3AQBLuALaFdA9ZNwTL4kYVfiXFTnRoZQ1haHx2YdmRmfp9wvoMGR9gZjp",
  "key19": "47nkzJp3EBCx6cguGEYsj4tYnNmSoE7g9vPZQSNfM3r5xTBtu3qU7MFALAJy3qaiKdGU4fUVCanidJ7mrP5i7z2r",
  "key20": "Eh34GZUD5gcgrdSGJc9dA2qwy1jxtdgyMCEe8kgydycwFcrmuDMjXwarhBYDHFT9GReqQGNaXRbpQFmp3uLEF9x",
  "key21": "3eUi17RqBMu5pQbxZJD86jhYV7AguDQ2AHaVm57uLLP2TeGs1ZCht3KWZYYCKUU8MdSxpTC1XXxgqcS4ktzEyaiJ",
  "key22": "2Kh2fytv4GHJvA4HLPiq3aZiVCHptmYBXPwYH2G5GfqwVHmswpMnCeib5abDuo8bX7ALP72j3tpFkXrPTHvqr8XS",
  "key23": "G1wZJqy5MWbiVxGTvK5KB1pca2bVNWWUqqosVRHJjAaxwfEr8zp37ghcxncxFCrX3heZnu3UU8z9oHgkNan1Txq",
  "key24": "vXBGWPBMQ9KwkZwZhzUo7i3tuCwJ7PqFWdCPjzCX2iZ11bMokdU99NG9HrLJJmGuNqrRgvnWv6Go1xAeK9ychVP",
  "key25": "4vF5jvgFuroniQuQzmJt8AYY2TAmE7VwYHLRUVcesn7RvA3DgzEBTYpHt5sHu9Ny8xCwEVwBqPaJvQa4GYj9n6qp",
  "key26": "4QBLmiPigLo7eQPsLoJUt6vyredfMJqJdJo8GTxqFB12i1qQVf9WMPrHv7RtXaFSi7D8KYt6RXbF8TrAa68hky7Y",
  "key27": "35a6NBaSq1XD4Andj81gTHTXVFCdsGQRzCQeadwM3VmcBgqhQki73DwR6Ey5dhZ5AFGD7rn2jii8spebBQeShxGr",
  "key28": "66Gn7N81jgXbtUSzKsMxyALKeykz7hSJSsX9pwSRt3ribkUnKEnvrNChyfk7Uej22MUnFG6ZQzR5CCnSMu5HiyvT",
  "key29": "2xYCLbVsHy6pZmR2cbTv9N5hF8MqTd5Vkwy9rw5beyGsgHTAw2zUNo5quXNgRLPCsGMScnKpWWre73qvqWtrUCEe",
  "key30": "tixsyWPwcRCNkPJnqzxSghNpiSTKmPP8uLEpDnCS8hDLGKnGqrKHA5hp7RDybJEefgC8FX1c7nkWeyapSMZWQz1",
  "key31": "5Yw64xsrTeav4TSSJK7F7kEYMDZV4oBFKywSZTH9mDfh85CEZqR15hWrveaoDMTCAWfQFfTweT7NfuocgBVx8LSd",
  "key32": "62kAow4qPR4dFXjiuApq58Crui4ohMDcBagYH2Nr245D6kK1SYL8sRaEkUZkqTzQnCTxAt5ztutaXot2VmsDKwZH",
  "key33": "2XCeqx5rFFhvV1G5EKUBdc2HXjweH6pwVgo5vy1zw9eRtFKPCCJgmAK3XAHZkKMxyqMPkndYqs6VtU4j6HgbHKsW",
  "key34": "2ZC2i9rppNN1ZKLQtjVUJ44LRf5QRhHYfvYuQJ9ZqusB51yV47j4G1yBYtxy9AwbYCi5gLhuXYT6WCawEoncS13m",
  "key35": "4g2ag5BnhiFT1uqqUeCL3Zg3FnBG4Z2TC2GabHQMkFSufGnVSkBCYLZmsnMugT5ATrBfpGwi8T7umWzBGjMirrLv",
  "key36": "4PkQEfk1LHfGD9MKyyAQ2R8gjryq1GEuHw8tt5YgGWwYA4JdTQuy3CCXxLx9N5rw772prgpSC4Zm8BuzuyWJbGHb",
  "key37": "35ufRgmo6uhTxXcbcjd4mo7kj42chT7rDXC21P4qxD1oSqMN9VDhhgCYu8SKw3MyPeTQb82zehpzPugABTyXd6W4",
  "key38": "4RWFiJEByUh6uiajE1UKQpRMTQtV1WN6hnPf8AaPwaxLdNrqkSASVHq79RdLFCpSdNMVP8n4idXgyGWQm4MkXp2u",
  "key39": "3QPyZc2evS88vra4HKiJty7FhajvqZLU7MMyauqqxYQuGyvqL4GLTMcyhaF54iEfzqEHww2u3bGQuFY6nxmoAm6T",
  "key40": "CvNJ76o7nSJHWDqBzBHgsc2VM6n71jRUsYnNKsp8QbyLHns8WtHPimKcJvXzWouFJRrH9dCu6AaFgFQvgxPmaZK",
  "key41": "4AN3TvaxS84tyNqPtuRXkJG6M3JRaoMtuJnoGU6XmFM4DCYuHFwEZT2Ntq3yDU8wDh3KPF2BSySgdo1LwXGLkyCn",
  "key42": "3Yty6XbKfLFM9kZWY6hhBgkrKo7vEk8PfhyZaNPc1dBejGCt4Pdsio8dBuqwee8UbBD1FueeWdkGy5fohQAAPprf",
  "key43": "3wV5sHzWGJFGZqg6q26MjT4dT8TLvMTj4c14RC3xmmyiixBJPpPvowsKcaScE81RxHCVCM8TR9McESEFEceuYAhK",
  "key44": "2hM8h7tYMtqKAHooVAxdybuJEp536RSVwxbsYTnEDe9TzfFbwJr9wsDbbLZT4p6An5UvoutE6JqYQvsTMQ5JNi3r",
  "key45": "6HGDTkc5P1YKKawGBYq1bP7s34t6w2RMqNXyhHquCrU49YNHcYh85VgGexgncwytgDLGZSfWcfREusNZLRUnbwf",
  "key46": "3Lo1ne57SWkiAQJxkHyCu1VfMYmFxKWGbEdNzARYDB8GJANnqUTe5D1bKrXomr6w1WfQj8GYSq1ACYYjY7ohMuM5"
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
