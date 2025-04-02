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
    "6ZSUo7JBwPFAjt5dhnUXQ5XfHqSA9nCUndMNcnwFR4gybLaw66zNKmizAf4QLX5dn7VPtVEQxA8HMo4cr4vZsrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TYBuJcSNamsYihwPzuArFRP2Eng44627UmJT8u6HTDs7HTwZgbi8K9KSzACQ9HdtDrxYpLMt7PbADNeFKW63E3",
  "key1": "3F7d6Z39akq3dMgWKRkc84EH9twmAZcBFRAdYhimpycACAiJzbzNonUJdM3ANv5uqdeazTn6zeg46DcaA2MVHazU",
  "key2": "5iVkZ8ZfieLTfAdrxk6wKuuoQ8FG3t5hPewWFpKXV31vU4FAUcPrJGWEg7GrUS63mbktFZY5ejjDZZjJUJ7ZQLb6",
  "key3": "3WRgFk6nCzF6awfwWKeaaVeeGLUCeBVPkvT3uMT5C5Jv1RWotNjJZ143MMGHP2gR8AeVGqXxxvVCdrroUSw6AuyQ",
  "key4": "55xB6Kkay72JBUuFmiMfMWJ8vN4ZqZnYNBW6JkJQy5FuwoEQGGMhqsWw2jhT4ijx5CmMYh8uKVA6TEa4s9MYajX9",
  "key5": "4fSmRkJS5Q3A6m26D1MvnH4nYPa5x7KJcEqFgzPrm4FLTcsyPFEtoUchJX2DREfFW6zHTQgiip3SRTT9iRVsdw6T",
  "key6": "58HgG1aR4LpXXqFMuCnfAr1pFQkqbuWcjCDbYVCsXRkQVNaTyx5JU6GYXVKVjSuNric6C8C1GwCLUXuzm7MhqquT",
  "key7": "2FhSfBYVCAJEvB6XfyQDDmzDrsXEXrH4dSL9z6YThFTFaZhkuzrFhb1fcynXtXLt1x5uwXrYuvxDz7Aga27a4yjX",
  "key8": "4DwY7Q5Yag2NrZTmzkL1syU5gyjY3yXMHW7LCaeTaLMyxej5WLMH1wjHB23SNRCEh3JsgsDtduh41MhfCUoPnfBR",
  "key9": "5Ws12ShVGWdenU7fMcLaKKVwxMLENLVfm8cwoJ3gV2sG6nrsCGwPyLPuGwRCbrosT9Dp1ZeFCFAug4b72fYiUbu7",
  "key10": "4NznWHMa3gzf7ieHGTTcrHzKG71AAsiPUY86yp4inEagZXyDQ1mZ69GB2jm8yZfTnvC7JXfFwRiAMpXKNz6eZEuZ",
  "key11": "7n1M2PTsACTKnX4qbuk6UWyTXb1mwFcDSM7wiF215Uc35QkQc6Q4KvcexDPMXpAXTwLiUwwoVPPakhCRd9Q8Ucd",
  "key12": "4thEu9CxyUToPGNgvphqBWkwsyu4zSWBQtBfGYTc8QckL4AqqF8cHKX5dH2GNArh7SLy1sJydSx2zPeAkbh7UJ7E",
  "key13": "uXymEryNof6DEz2GwgHCx2wG5Vv5GcxmrnRnDdY7uHuDWMRQmuxFqTf2ZqXpd7suvyjuM1QfJy4XFVpmyfM3tz8",
  "key14": "2PqjBW1vRoxFdu7dP3p3saA7ivTn4Z6DSYH6VMf592FwKmZLjiDD5YBHZVU1ryumDZjJRGDkN1A5ShYEbDcg6BvZ",
  "key15": "5tkWavFDiwxYLrTPJyTCxtiwreySL3avePSrthNa13f9T4A8wG8kDSVTXZ9gcrFgV9TJBjh32s2PGLJWfRuQm7F1",
  "key16": "2YQCCgkJBQcQ1YwheTy9zoa7g5NA6TEfRXrydrkdQikMMuakvnJFe7iFjtShkcz67zaSZxZULhjcpcXZu86n8gRX",
  "key17": "4abG8gBNjAMV1qS3CK6wL7GnfCzENHw91shzwT5rNEF1E5EtfLpbjkbWhjSruq432TTddU9i5KPJd3T1p1KrYumN",
  "key18": "4bvotHHhsbqj28Sp93YitoNeqAYKb3b2TKwNpn8fcEmALNwrUwJshNb2Vvjvu5idXxDs6esBpEJneCN1enxCMEk6",
  "key19": "3HpPW5RR2cJNgWdw2PKVYuXYNP2e8S3PPzqS4jrtsuT53g6dLeodJqorwQi9gho4gcncGg2UEYC7tKojdVxJzrat",
  "key20": "67GX6NwHCLrrN9o8g2vJexMjpAGZ5xeE1bKLMS8zJXNsbf2P7EC2aBXRSfxWoywfMHDGemxkbjNc5hSSeVY8NZqD",
  "key21": "17JSxUWZZHZMqAcK9VMAG9Bma8MW3u7kQPK6wNVAoUFtuaEkwM8XCYmzTm5UokSjptvo39a6EKVeywwWuREh88w",
  "key22": "ExT4LFnQ6FSjafYK3LeeoxcfnKFWRL9SisoijfQcCh28PnPAH8FnFg6jaFRpYh2SFoBjMpCwc8YSQ18cpzxziPu",
  "key23": "3R1f8GCPBrFzWVzWhv5fxcFhP19j1EBndqGvY1dHUPs21cRHiQXM3Gr5w9hwR2V5dZxJC1JfbVj62yj5KM6nQLoA",
  "key24": "5XG3h4t8uYZHodptDDZmnKhk776eUnSRKDJjSjQXkAMVyb9FHQqGvZDcW9973PMUgcNvcp92Qyipmvv2oUS322Rd",
  "key25": "5XuaSxse64GV6kQPnUPW7sp9N1Qo1pmxUVb41pro1adRu6tQj6fLuPSMpzSccHSx5FrrFUYA3Uki5GVzgknr7reU",
  "key26": "2ZbLbjY8AepkRznoz5Jynqk4BjLZwSpjTKyPTBHKEfS5u8Zw2Y4kbbnxM612UqvoNE4h4up2uPEqSMHCNW7u2vnS",
  "key27": "t9hnpMb6vyM28WoTwRqE6PVU2i8pu7ZnFZCB2kAKA2efNKxGQuaG1pJ8wMNbKhSDCFqHWNWZSLWuerDUDfKQL6f",
  "key28": "5GPea4WjH3HH1i5ChcKgjXNAbEvUA6LDZDhM9tHcesZGRAmy3LjAdX376aesU8PpaA8rtH5qSSaSdgrURFqog4Wm",
  "key29": "3ibv4QHXWBGnHm9C1X1yzT1eQkEwHeBBuFqV54sotc49FP1YgyXVPidKnxoqR6tzYABf2nLEqFEmXZcWayq6xrgB",
  "key30": "5Mz4d9CLW7b75WMwmRFtPs4QfHaTQ3XdseJNRLrQTixA1YGUuHWmFD8Dk8KssJJTuysm69E3UYq2MUujXqK6d9Mu",
  "key31": "5BGGXXB1LAPshdzbyrVsrhJGKX7mK9gYEp8G8fApR2w3fLgXhkiBk4UY8JDJ7Gp4zodnMuuSDybgM4TruCZHZpAj",
  "key32": "4e5pYZYWJPW99f4vmfmLqcehrMkcA49qevrhLqA4fhS1SoZsHGmrCDaeN2muTBRoQKNWk3YRqS7cx3sPoEnsVDS1",
  "key33": "2f7ptfom4g9yytyu9CqNHSkvVkPUHiFiJocqGPsugBHE9ArodHCFNPyddse6NZ7RV5R5o8rf1iv1FcA43CfNCKVM",
  "key34": "3BRednVR6JaVfJdWQSJYKXv3qnCc8kzNKmJov1ZFPrUBfernF2i1RkGbiYv9Jbh7U2uggPwkk27GqNVay8k61CFb",
  "key35": "4wQajqQTi5Tsu4Yg2y5nPAToNRE1JMGL9MBkL3eeX9nwBmYzvaJnUScVv8EfWAtBQ34BoJrJoYLeEZqCfQuHGwNF",
  "key36": "3YRUCrhQfMGTJAR3VaakkRpab6RdoiJD1pPU63mkfGgn1VHeL9ERoKr5mee6LpAMeQczHC995ZC75vgrRTeTrg45",
  "key37": "3q6woHQTJ6sc6cZqMLJbXtsnF5xh9HU2iY49K7YLuouV5zkHiYf7J5wGv51QA9J9CWDEXSHy9YaUaJZKWT8FqLDD",
  "key38": "3VQmnbktJmyCijoE9fFEDNFxEqs5mAtorDa3BVxYJVSDSUydv3Ni3vDzgzXGH8NeAeTr4nH9paidA5NjiNgpi5FH",
  "key39": "3Cp7yM8n4ktdN1BKf8zjTfFXroDWRDrVbA1WmWe1q3zSopYoHx5NXxdtcYBt6t3XtiPefzH61NgDwVaAkZsrAYWt",
  "key40": "2n7enPxRH4GmAaK7K7qRKHvZZeGqvKGs86WG5VgpNw2SSxebFE9aMM4uFw9DsXbNqNkMPUTGqCyE4CAJXVUjheMT"
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
