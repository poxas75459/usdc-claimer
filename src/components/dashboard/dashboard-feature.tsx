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
    "56qN7qDdGhgxK1c3eRWZn7gzEmDEb95gks2wnphVdEAJARF6EhNn2k32mEyBgTmNMqLUd44DwveqfGVB9Nag62qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTY8pjDJMZm5dzWEAYJXGxMyLaCAJjqVuTKdWZaFztZtrm7b6cDfnpQhY6krjv19BNGe41d2tdTwC7EDYvTugBv",
  "key1": "5TJE8riRKWqZ9JKZtsGBPSqq3votYw3g4FfzQbtsQEMq6qEHHWzM6zUJGkbwmvMBS3UfSfjTwtbhcjoACpLFoLGN",
  "key2": "2rV5HSASedQwUJwG3V72GMQLJBuqBStStxGR4FF58MyVCCPUxTNVyxjtpWusKH7MBdWKJkMisPpvEVZKRPsV6tCd",
  "key3": "ma2BzzVB9Bc2xnRg5iPnJUwbmnZfAKMT7CiK9bmrRKr52KTB1x1P3MDHyMnRaxMDU8vBZx9Xxe3mSUgTnzKpk2K",
  "key4": "YLGtPZ5MQMcwZmghQ19teZvNqUyyBEWvpjnQ4DUrCVpU8TdxnwwUC3GYhZ39ewuK1Qi2xpjHyPMSMbazBAbyjoT",
  "key5": "ZBdcj4eHE1ZVpKtS2sJR2Hvy13o5Gfc1eSQRb7zE6wskdVHMy1dhoAJ9Tbfw1Ni1LUeSvMKtXzdx7uaFXJ5kS45",
  "key6": "27KJiePJcsD8DSsAqMKx6pMyfxPBwwRTUJaFUx6cteLbBQTep89UfFHSbXecUYgUYUJ9W2PXgWCnWts6Lw4W8s7Y",
  "key7": "ErwNMFyPpdL1zSUTWZaearv5noG2prSw8wccQyL3cyEjW9nMEC41TuvB6sqXaFMAiNQqUcDRGDPwhNH2ow52uAf",
  "key8": "LtC175V42Y4VRtU85jU2eRFSvhdLiMNiA35VeBStinj7dhRprKYmWWMYmhsRZ8ftcqj8umVeG7ayWivBXCWeHjk",
  "key9": "3C8DjMr1rEYmAcXLMAVuvHRj8AaChhXHq1QtJ4BznH8kRPny4RLjXRsAUi75Tc7gD3RY64Ln48bWT3aPFwixFCrc",
  "key10": "2nSPA9yc9CCvDKF5Wuya4HaNC3YXjhDxrzCia5E9h9KKojZVmmTRGpEnfkLas4cjSTe9pjxDwKTkMcPN3NkeujYD",
  "key11": "4rZgqWX6ULVdsA8UuTytkDsPbtV2QXpGPrwgqgbfuf8igTQ99QWj3jX4qs2ZQ4m4ki9kfr3td7bhPmHaDhmShDUK",
  "key12": "2xn5VLvDMck2hG7tvHoAnFsnfGCtePGMYkKr9kQWY9AeP8NzF7Nna3F8gMW7zD2ioEyVmKBmMdwrG8Hz3nnp5XRn",
  "key13": "2GY4bUYsKgmfQ8hF86L4bZi5rKPLp7VWXursRxsCKotgSVdo3iMrQpe3Gmkv2BRR1qUZUXAK7YnUkKXkVX2BTm9u",
  "key14": "2frYqmQH6bSTYJBf9FTXPS9AK5hG8AGj5eVBwPiqXV137ZPoKj7SYcCfWeivHMkzP7ULRA4ru3MMJG9AsHf7XYyR",
  "key15": "2ZhBuZFXRn6Fq32uudRNCBRaB8in9ArSkmF4BvSCgzuGFNYdptc1FRMQMeRb1XURFD9k8BG4HiF5eH88eEZSFWwL",
  "key16": "2AMt2om9Pv8TUxGnuAZhDJ3GbjuuQtdiXtufhhFXquyxj6nabEdP7yec4HXQwnrDUPycEGrTCF68ABSSv19GnNFa",
  "key17": "mbiP9ayvuygzAurzmwD52A63YLoPJRbS1Fz1SJFymPbYcY11aJ7k19sMyzSM5Uik1qSjS4qpWqGMLfeS1b5TzzD",
  "key18": "2FgZSPZ8oDTqigSDVnLUbf9FYP1xTqRJMsfMPGeUkm2y7x3xAod1dMQssXh4crgBQwU3zankvApsVDqVeKtneWth",
  "key19": "2mH2hzQtMHgyYNKdrAJvjyZJvrJbxxQnL9MCy25C1ixAWNSymv5TVCaXAUj3UZacYN3a8UAEpwtSpVxx9TC7EBnV",
  "key20": "5orkeRioLvm2NsmkENxgR8LrCTAigUvckekhAGGqAsc6UmYqB3wAp3dRU3QDWARekCV3MAB6z7R82CDDJ4o6j77M",
  "key21": "5f3vyoDhH2jHW9aDe6qfuMoAzw43w38YKxbYnmZb2zMCpSGBKK2LtWwour6Gp5pfn2viKoarHXXgDxusT69pemkp",
  "key22": "36tmcUQNAw9WPGL1rXy6uFjugycWDYeBp1b6pYNjxBvHJwXPNPuq7DNZWvd2Ps8p2D2n6D4rzzGmF8wDtNFccSmZ",
  "key23": "2hz3b7PJbFSgnBNJVazTsGvnmxZcY7D1TEgihteDd4w6MkWDxawLb1DaVdT11rK5awLNFPL1gb53fvjGQJv7Q7qd",
  "key24": "5T1x75QymyLfKWNDLZepBWN49HdouRvr68MmfmMWhJvK92hAYRyvCnD4B1Zn5vk1eo8HMq87fekYGj7mEG1BuDtb",
  "key25": "4HWr1xCqL7NkkKFpzm7R7G1HBU3KQLmPdDFMtCo69dB9NtazEVr3eLxFRnvda3tJsuSKDna7kso6K2ZAdXqUd7Qg",
  "key26": "24XQFT3JNhmYp7CEEdYU7GDsUVz1C7LgiLm3UT1HXeakUMZ7QMZoY1DQBFK14S98xiCMKBuB1K8VHqXdTSfSaiJN",
  "key27": "5CCcwQbZmaabF5jZUr22ygag9ccBQEBoHyuwgDYkvDky7xpLCBz2TbS5KwbQgFrw8gnHzJCLL6phdTQJM2LNFzym",
  "key28": "2ZwxhDp4uZQYhHG8mJ3WeQJxcJCShMLdE2sTNVZDTkq8jfrS9fnJG6wzcpYREZbQ7mcdQJfUmZrEFo1jaEEqHqVZ",
  "key29": "59uuzrWDSMvjywYxT7AyZj1J7w6avifBSJCYSNv69zZbwAH4KrpreVuDKkJBTjGxUa9RVRHqcKxBR4ciPDYYgLJ1",
  "key30": "3UZ3dq5zkotVWibWDa9GdTAGuLmmPcSPGLxPfH8phcgp6hHqjJuwZ78cMFsMMcqkKAdzfaNw8J9cv6Kk4Pevws3p",
  "key31": "2Ju2taNwTCYVweWa9HFbyai16LuNrdBa22B74wJubJDsHBHRRmAgJpHo9cApJh9NLuJoHhzE6F8sHsLk6S1LLwi",
  "key32": "3jMHUeAiTqmo1VhYHZmj23cFJz2EiqCriPq8xrWYTiCAMPTN7VhdYZZeC1BGKQAxZrKg1WGJWSApqdtce67yDafL",
  "key33": "3FVka8egJ7pafVzLprZue51gjwnJmXmxVDZu7aEnAF1tM1CwMcdg78xgqcc68VxaKkaJmcJrPUfcRkrjQapguLKJ",
  "key34": "5TWXpfP7MXGZ1KGRs8Rdu9fs6NcPChPmUpLkPhCNLNrmtgAMogz6DwPL2NaHYGTS9fE3JwLgyZdbNkpsh3cHJgux",
  "key35": "2jtAYi1QYxXFgaLdFTvmwsVAT9Mb7xTDZNMnHWu992uTJHHqMWK3eqcTg71Q17uKVNNvoPvAEgPBE9VMuR5ucQmg",
  "key36": "27ErLt49wABeHAjUTVPvHMEsESXLqQDAd8uETftg7oqiAjm1UG9QGCF5uxNn1u9R9UYwf6ZmUp1VGWDVjMAhVEsR",
  "key37": "4ptoMvG4e6FonDUNoN7aVwsKGahV23GiVHVWAKd96Fvv8FZAQCzpCmJrz7avAqPYPwpQMWC4uMfVXQYRmbLnsptv",
  "key38": "2vb3UX75vhEynrFddpkPR4gmxMcuw92AuGvU7z1T2NpWt3sM66qyB8RNd37srk3wzYEdFPwMh9jdHRcLwuscYhEw",
  "key39": "5FF9TQd1WSyS2Qdw4GUy7BUrx5WTFrYTMvDCwFcWzh4QYhGP7zpDdzr881XLev2NfbrZmdmPHzjfBUePu6RfUG46"
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
