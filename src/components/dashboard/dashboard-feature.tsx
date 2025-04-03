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
    "4U7yMuMmTgmmFTDs7wG6FpJruPLiLJoJurm8rxEWSmYUhsUg9xjryJ8grZtmQ97LHWAxfwgwFyuvZ6gwDTmoXoQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YE4dUrhUPa3MLpTgojydWv27TE2fLHcX3mvu9biuXdX8fPDknLZpZxUGKPmrNa8BLvicoMzcG6kz16TJZAmEYk5",
  "key1": "47wFuCr7oFJrJpdb7aPo48T4HtrVXia4thTt92KaYxbWCurDSTybk5VRHWoY9uvJ1wJ6VLeUmLqeGAPPtL8RQ1zH",
  "key2": "43vw9ANyvLX9gANMhp8B48BoMGfR6QZ2spajoFRkJNHnzNbnGmFxWvU4aMD1EfsboZZGJs3vsgTajysPu83EZyZN",
  "key3": "2uR3uRGDqun46QDrNkDfeZmENKjr89Lje1b589JG7peAEU6T8WF5py3E4iFsfKzB7cEttUU6QD4wJUU9mNcVxTUc",
  "key4": "3iCymYFk1ssziwga3X3Wy2q4MbXfB23syFgdq9iD2VuXTWbueupnKcjW8rDwV8JbHF4Ue9n9f5oGvfunxugBNYf4",
  "key5": "mj92h5D6Yz8R2ipSgeJRmhEgvtSegGH2NMrba92xcZxW3hHYXMXEayTNzARBPibRSVsvivRbSw5rLVjJS8C79vL",
  "key6": "5DtiY1qAzRhpCQRu5A3bgmwi2hksEqMRactDGCqivx5fUTb2U6tVZDqX2p35f8Un7Lyhb7sfsKLmbZrkbuwpFF3g",
  "key7": "5R7Gvtpjg2R5aswDrztdV1pSf1VE2gccyxSs5tUgn1h4doX1Eg6AQDYDPDw2fPVQtL64ZGyQStshDUNUwGS47oji",
  "key8": "3dWZrWPZi2Tbdyh7WibMWLuhZQGppw8pQbQRfG2RNPUcUxB1Hj82vHsC4okBhbu2Ks5UiTu7HPEK8vwtkJC8VAhu",
  "key9": "48fXPu6bFzNFMe8M84EXtw7BkJj98okFo7rd8wupB6qfwrfUMs78EXwMypTWnb5jWvtRyFYauQjfQy4bmKC2cZas",
  "key10": "5wuk5Ed8aW5yfsVYi2ijRhHrAr3SUVPUrwNq9gTNR5G7CtY5vKMp4kF3Cxpy8VDNFtWKwhm2CLdz2KDsdUzEpbSv",
  "key11": "3nzhuK8H42W8miWgg8jUHQh7bdiGYAJpXh72wLBnbXDHNs6xE1n9tRkBVHEy53YP7P1cBqdX2u8TJKu3wLBfDMd4",
  "key12": "5ZBMbYEwTddGfPenzRC6mLwzfAQijzoQLEWdoX9ihLW7qXubEK4SJDmFmwGKCuvhKEqciKnTwrhEDHoAKVYZ6JwM",
  "key13": "2PeN5Pveto5ui4LWSrArtceCZJMyWVqz3xbk7c1xyRZfvJMiSkrECuB7zqdDJHgN8qQdWVcZunSTRqPnksVq8g9U",
  "key14": "4rLAiou71KydyQwwt9ULNzxEyGYLNfN7Qbu5RqmE9uKrwAM24YJERak7opVBoYjVyA8syjFa9HewLLQf3SSpaW6r",
  "key15": "4Yb2w4KTFNjvGZBhTmCeoYmDeAKBxgW6p1KRwvtQfsiF8ModHQdSsBgPUG4ZGNPzVjAhxCqV7TLD3EcRuQnYzRTL",
  "key16": "4Abg6mNqq4rGc69oHtzXfRVyMZASEFxpdvqpeStBsiVUsvHv7kJksR78hU9tK4N81XxQSWAdjHdRtajB314rjhNV",
  "key17": "3kHcFpgs67zKtfqb1MNTdVmVnfZxSEobZNv2LDSENLFFVAvWyt5nD12PkSKJKbnrdjCoB5MWoH2wcDMsd6zJn7m6",
  "key18": "2FvSjrWrtPfxfDSjV82uxHSitYrSMM91R4pbqzKiARhD3nKkayxr8qz4iHdsRPreS7TLHSoK67HaVXKWeirrEtff",
  "key19": "5mLsV68H8EG3ZvEWNH27iXW1KPHY1D7hmg29TEEW5kqjewnch5aoR7kjFZzg6cwJZCcPoFBVyTRda6Y62vojot7e",
  "key20": "2aP9QV8NSKi4N3pESgEHtvGspBqAmH613Vsyu4c4vJHvuFbmFj2dFV1hiaAoyw1aGrsjjH1yhZpXtukuzJ5R7no6",
  "key21": "W2nseqabWDKT6zYQPPasM8RHd84U4C6syCRi633YMThzt98jTnMLQghHnbUcFp6ZvJeKkuwyU4BjFdLRe9LdRL1",
  "key22": "4BhQeKXcUxf7NHQtBQGJpowDCJdqG1Rhr6AmwWNQU1nH3Vg2aXJWsNFQqHvGn4NAcnVkDxi4sZALdPzS3tSUbRg8",
  "key23": "2benALHLEUhMxikRkxTSBc3sSE3wrFrp6Vbu8Y2CdyFWJCtd3XQsSWwbhmU3b5BVjywAuKncCfn7x9MFPCxKnZpo",
  "key24": "5NrVRSUqNJfkuVbBC4VmZwKKeTEpLYqJkdQxLxyFPJDhkmZsp6Lw9UszzoeJFMum4DHu6mXpRzy1vXHv1HyTWLy6",
  "key25": "3rW8EWfMRTfgRWpArMm4ncL831VDPfkYgKfmjexh54QtdLy8oT8mWtTWWcdnsgUNeUKxCV7hdaa9CVBiBKeDGvGL",
  "key26": "2taPRNT7w2m9unbNNVYt5LtqiCPfAhHkgs6ZDPQHBXn5zAAcykojHFRsK4u1hHCE8UyTd3S3ugPwNFqDYrkzjyRQ",
  "key27": "dE18GZZnsRADtzykgjTfbsJHWLxc4uutvXw58oBZdXjjttpFSZuUtupCLr78rKcJ9Gq6ob9BjP9i3wzZA3q8xig",
  "key28": "5igKAji61sLerbhX9RC56KL9zhpeSQJxPYcrKhqjXAa7VgxuGdwoUitQWfiNTkGEarMKwDJJF628x1wHcfD7DcFE",
  "key29": "JeYrw7goeojSiDhBsMomVEZHKWD6SDxEYQ7Pn2MyG8cZVqeujKscD1B8U4ZjzAmmdBCM6sooFZHtGZrsQSuGmQ7",
  "key30": "43eKNBZijYMkvze1gzFt9Z7Q3sYFunMusjHfSZcYJfrnDwwMporSU8FbUqPeYRSzLusBfx4kSDb9URnyHdEm854h",
  "key31": "vgym7AHmEVMVq6iQLyVNEWJqV7ZoVipanJYSbhtEzoz4w6SR5jwWHgz7YNHK6Nu4ktbBbQ72TZ3dz4tSUfMgbLx",
  "key32": "2P2d91k3YddwTVwnkko2n78pd1WBGYQqfZhM9KkbJxNCwfkNeWEdYZMeiDSS3cPPKAp98CDKafkSk5RThTrVHMCg",
  "key33": "3L32QgmdUzWvV8rRFCai2BZMJLPG37J75JSrPb7HFMcBAqwwMNwbS1q8RAFnxsKp9NQufK9nT6A4zDWCt7wRbuYF",
  "key34": "2kNs8txUtmrFabGkW1Dg81QAievDzjEjCizwNSn4LyXi5gHEZf63gMdTJBsXRhVKFdkz32R5UnP2VLPRGNCTt8YQ",
  "key35": "3nB7nWhU8t9X5GdiqDENu5MQDU9EbjVbHvM3pvGNrpzLxCYm5mo3QQioaRAfYcoSrKDGmKKzaYdQE154JMnFfTHM",
  "key36": "egWuoUpmmDknvRNpDt4XTg9DqHhsw2ARDHF8BXh1y9rthKMUf3SKAbisqozQhhJCKac8TnLRMnh7EvvyAnP1M6L",
  "key37": "4Qc5Ss7mGvgLZCSyMJCAz4o9g9zrxwUThhyhkfd3ZJ3gi1z6bk1w3YXYmJVaNQp3mYg5UazjpHEQNndGygVu8Hi3",
  "key38": "V51Eorv7JdkRu3sC2VeMZhZbCGoSbdxKeVGz67kSxUQhwXm1XS8YLtsFGCeBs6UwC6LM3Lhsi4JF73PVoQQovTB",
  "key39": "4pyHJQQLR8AbcdH8JkgWamm877t983ferUkXSizqjWanTpe9VLkEZ9qGTzkxq7xCZ6EZ3CJ4x8o4J4QfstEqexPv",
  "key40": "RuSqUFkRNfDHQEVdbYiJbTGQnJoy7GaVKo7cNG7TFJB9UDA5HwTqVeNYpQEDctSCVtUDc3c81DkonAVtYfNWoUR",
  "key41": "5tJzDAaDkkDjCt6ijn9dBan3HmfTD2hYtKv8KZytvvBZrYRAwtBu3Uhp35eyxzcXpLaPBiXmZfCvepMV9CDNrqVV",
  "key42": "5rfSPGTmgxAXCry4vVuAuHbuhFCAtoMpAqhkaTqJgYDu2eUyFBzjamM6n4LhYVayo1eG49rcU7Zm4MAPbwoYjZtg",
  "key43": "2sjJrrbjhkLtGV9ykhA2Re7HEmprE7pB7aaRK8rrurcLxs96FBAsus7fgckkRfNXDHWe1zxG4KPcCkkxiwocxWUd",
  "key44": "411P24sHX8vCZ7raUnvN1WHpMuZpARFm8MqyFAKzQU3MoNjrNNVoboncKWKGMx3JDgggxNusqfd4AybdpPhNofpg",
  "key45": "2fmEebxHnozfkr8j9YG6fmuMoaz5XRfdiqMERYjxtvjjtQM2n4JapHSN7vUifjTTTge6SBpRnYV1BDEF2nK5CcxP",
  "key46": "3f571MuptF6nkfLjZ2zLTRpgHCjnds6nLm1dq1NK983LoWq9SVfpQZeyniHmRvvSKaTzo7j9t5B9aEFadjY1VmWR"
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
