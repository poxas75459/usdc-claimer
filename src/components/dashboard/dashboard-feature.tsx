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
    "3Bc4bKucZGV3SST2KCh1CDRrRaeXpLqupmYZBg91Juu3xvDT7TqyCbiQQYakTuhGzfrKWbQ5HgtudUbpoUfwpR6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3paqGHT1St5oNqpfRmwxsW9ux5nXAc48Z9FdQxJd72BGji44ZyA7K8kmV9ER2veuRxATkBrJs1P22FM5yazhiWsn",
  "key1": "fSp2qVh7SJTDVu3HS79pFNiZDRmpEYyZd48qF7zuK1Wtu1YdkAJidxPWc5hQtM4auMposfYBLsCkT2JN8w6P4yq",
  "key2": "4Pe42ct4zQ99nLXHpAQT14fh29pAHMWSHrpWkQMM7foxpAoEAg6dRiqq2p24Sw3cUxrnQyMi8h7Z7XYfC4SFYTek",
  "key3": "5HehtYX9V4Q4iDGyXiSGMvsp2AP1T1DmNqyMnLtki3xTpCsKZzHR3RyfAgvzvMfTgG2PpEpshHgWm33rPNXmCVLK",
  "key4": "48odUzo84724mguERa4EYsnFDafgmWiQKf1Zr2MoCtvHhruUt81uroiPkrcjbeGdDnYmAPhp4jrP9SazUS6KzeFZ",
  "key5": "2cjvxHfMaggXFfLWAqQSkeKSxXBaMpXz7W4bM4B8cFXs6NCuHuX2NRD6CqEjyBxc7KNPu1NvfjVR6aKg5gxuyL3s",
  "key6": "2mZkamwYp3DQF1XeYgHdyR8fjVXzXk9EktpYkyeF3iF4jd9izd3g7nviiAHCod19ujTgQKrqZLpuwv5x9b8BQS8w",
  "key7": "2rSdKNkX7SLaEwvDrWev1s45XPiNEz9EkMSDdmydNTEqAcsEPPYiJ6VbNYorwoBroJVrdNHqErGhF6Q42aTLi7hp",
  "key8": "5GmvXYYedKpZoLjhceBNQAAERSRnBK8n7eF7Dpi1gfGPeUuy2HYU1osX5hf35Vq883smu7Cj5FHydaxzA4XnDyeF",
  "key9": "3nbUBWLgUXw6GJVfVQqCuo4E8eFZWoCQC7pGwYRdk5B2t8QxHJFCaehhSp88FHNLbCCm8J4xuWzPNSevgPFfjU5C",
  "key10": "5TruGG9bmjVECsM9uoVUre3p44gXBk5nWS6t85L8Nhm6eJd4XKz6RNhSDTWeNo9AUuucV3wbLzZ6vhrVFi2XLcfJ",
  "key11": "56NDFGueyRR5rrXcNrpz5A1omFYfxr674mFT9eU27B5eVzRHuHyn6EsTXXYcxPEKAwRqJXSD9d2yXgoCjvEkGWVL",
  "key12": "4R1Lj5ZBg3SGoVhPv6upvxnX4ayV13aQfwAF4kEY6eQTFcjQNcpHXcYrH7A3rYepagagjSdtS8w3CMCaCgzWpJgt",
  "key13": "5EAZwcjd1rYvydCZnDogsffAeDAHJxPM9H5KrsZdPehykLHtCCWuCVg8P2StFUCdP9wmHacQMEk1JpepEnkYWHoM",
  "key14": "3EnPoipBNM2V5FVJJTEWgTc2iAr1o39u2zoJhR4zS9RvM84ufFme9aQXnt2NKTwFHwKqJjZquMkAbkS9XdavGgAw",
  "key15": "3TcNaWWRe4qwv1hzuppWMsgbejvs1sfWzDoGPTQtRtyEkvHUY6o1mgBQp7WJjhaqZhmKC6iw4jf51o3m1u8tMG5X",
  "key16": "581gdCtbp3YbDJLvsRL9cMRn3ebs4C13ieD5v7p9dNcqtyFFokcsTDtBtphrVbRzneMJAiUzVJoAJ1vMtBBD4zUb",
  "key17": "2McSvxBGKVppSYJghw58yBc5TunTAUrj5Evr7S5cDn4dmndByoUaSFo45Aq5MMCQCYvbVjwSkJxgVk3mLFv1n2GZ",
  "key18": "4BS7v2BB1j7XNcK32F7XSWK9Eq3VsgCAZSiBZ5BvD3DgLUZsJwqxF8VhCTGe2YveDK3PY5DRicrj875ZAb7d6VoA",
  "key19": "2APrmQCkKr8kpDRSLC8VpRg3sT6KkaocqSm1Nz1RY3NVyGsxup3odmXjrAEbBBgokkPiWucH7BvuvSgpmhzR6JCM",
  "key20": "5d1wWeeCzrTF5D4ChqMHF9BjkzQEmKc9vuLQpFfqzToXw2hMdGEz9GJ4oisFH74gFjamMAYVvcKJK8bTMpHfqY9t",
  "key21": "3dSC4ShG8BCfZPrcub4kSMf2C1nWYVQNjV6xkvC1q9nBjW9EQN5vHJFVkqvbGmCyXmUCoiGRerbpEnBR68FtbnpA",
  "key22": "5cnMrob7QcRxFWMu6p842x3z5tfANVP3NWvfuoZjrEVP15vzBpLQjCCyYkcjcfUaZKwzJ1mpcL5Zzs5TeMpCBEk2",
  "key23": "JwqRxHrs5TMptKDpmPdFwxvrdnqkV55eyubjFhRGRTvmR5EajSN3DmUCdpyVks1bBTTg7e99vDDNvuDdetfnCDE",
  "key24": "5ZxHYzuebMY7eZysXPaJhaciHeeyqWT9PFrEaWLYvuQ1a87KtwgD16wisRYAJF3Tf7yTUdyZY72PRdeEoAvaawrg",
  "key25": "5DX2BBBpG48eJv7a3NJJefL9M6CiqTyHAjmBxLZX6mga9DoGS2dRF3FZxfdBjZNSxqrhUZgmuJrzofHrYK3DKUGV",
  "key26": "67mPKZG88SMSQwX7oVoxU4NTJm52M5seqDJSv6XgwueErg7TZjuBLYwCSMw44kX96Hg4HgQkFibJUTZeA9EMLLkH",
  "key27": "BzCT6HJ2jUwcsVxCLHzw2wbxaKsF7YDbC6Rrf6t5f5bUy7TyjikPMSxpGEdfTE752NpJFwvjxnbXSck4vAJzK33",
  "key28": "5fp1KrsaxZp7xG8opf15K5DtNX9AqaEDT2X1BUpA2CG9N4uzkzZM8kvdcV8XCHmWbUKTvLDAWZgW8cCQAS4d4vLY",
  "key29": "rhsKU6VgHZopEKTV7YjjuhBw4VpQpVm2voc1TSAn773jeTBFhvLDGL4BzM5sfLPcaFpqe6PJjMbgWNcfHRTJENA",
  "key30": "3XrgN8KkxC8C8tvbNgZQJ8PRjXNqSr6wF4rKEReLfCfeYAAVGQGG1WaUf4AEuMShm2X1xxq9UoUacthSYsXJL5cZ",
  "key31": "3zVHDXuJZRyyGYdroPdUZ3WivfJh3xypYxAasv8AxfDvZdQxJGqVYJorGbH71xpn5JSkDSNeEQ611U7rTXosjrQi",
  "key32": "2exv1s5RcoJjKiMVRhaH37cauuuL96QNoSNpwi2kSK3Ses2JbAe6NjmTxnFk9QY5PLPaoXZHUUESsT4nxxaM7Q1p",
  "key33": "3Ap15CmXPePaUiydcffkHfnCeeiWHB9EzopidjLTVLZgUk6L3txPPi3dZGjXaxxGPeKmXf5JpDhitBJw8a1S7EEH",
  "key34": "34BvY9K5B5VHrQ4PNknXX6ChBTucL4UGPiJMLXyk6jJuM45MYycHBXZktcTNB4eYM9BMMoL3Ee37Zk9BtNUtxynE",
  "key35": "4LR8iXP24K8rY4GD7Qg8HMVaPByRWmwMuQFHkRSkGay3WjhwgUoR2yZFZmfZTHknNwjiSecdSc7XvrtMiqdDJv59"
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
