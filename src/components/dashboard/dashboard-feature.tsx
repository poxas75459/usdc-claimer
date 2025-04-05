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
    "5JmTNysaqR2BdLQbb1kBBAPEfmeK7RJyB1hnnGwHrc9E1cfZzDoHU6L7eUfabWh8qwwMcUVBFezswFvWAf9FcCnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56HCMPK51iRmb26tTUYmfeMJDPt4z56ZtMTzu37V6p4NGM3HB4UqauqxbCPiQtuEiTaJA3zcXNGwZCv41hsBgREV",
  "key1": "gbY6CNiHg8voovT8mVu7oWBKjJC5jnS1nEuX6CfwLucyVvRZ8gqCGk8wxW5pbB9AbHp4c3tikCei2um9P74z2Pw",
  "key2": "5Tbx3wVDjnF8wJDx8bPTxt6ipPNjKzKtad551fWnBbzUYUpVn4ytkdpHF6RCJEpgSsfdh4LHzWCuaLcjFycr9eSv",
  "key3": "2evtjpUCTW6wLaPNyTtHPTcwUBvpugwkrAcSd424FYanh1Hk4Wxu9TqVRM9JouHftJRY2hjSCr9PMeYmNw9RZiRs",
  "key4": "ZcVZreyhZsg6FvcEn9zZdsGmdubx45T5afoMRrYc5Hg39qxnwAjfGszEKcXZZyQgZLukinmeshcDqg9pV1CfUBm",
  "key5": "4cqoSUGig2sjsrngmt1vm4v15Aua1dgpm4Q7H3dCBJjTmJvmkb9LMuZBtRunjCV7LSnx5VaY3t7V6tsgeACcV8zF",
  "key6": "4ifo516Z3cz9uC9AkU28FXH3xDizP96uG213VgiXHEq6FcAESG3BPJuEhrsTSUqVgVPQXrENs8ySFrfwvwLNH7Uh",
  "key7": "64MainWTjWNXEH81s2RA9bBgT6JgFy6AECiZvJm4a83sjDz7CASQFxrGdrZriNaxAzHmiFM1T8Bkmb7TnB88MN91",
  "key8": "5Hr2RSj4zcPVKh1GGzJRgCtVyRCo77CbLso7vLhBagLahnNEfrgYF7ufA2fPVgv8SWWbJEYBReibcSAu33xjyDFF",
  "key9": "43oMSiCdqVLDJFpNpzYNabz6BHiq3jFWvzmW8WPtZTCgtx1VKh5DGeRpF6MF9Uhs6QrJ1JpQ6pSQN6FLJZJxUDag",
  "key10": "5K5tVa4Amn6D9jNY4fb8KdwAvcaRBcHtAVcmCftKVaqvq631u62TXbtTaH28T43qxLkygMuReVfWx5E98wJnNWFe",
  "key11": "t2gefTuqMPKmCB4GHAsXjpFXju93YGZxcJZdYFoxMvsQ5GuabfFjitDCCu3qwYXTU374w6A158eUJrhGb5UE9Me",
  "key12": "3fJECxErCdfbEaLMn27n2YgLTVPj3UUtDxTzMumZHs6vwgfeWGNHhyAnoRGqzBZjVsq6nhG3SJJ2thpnieRn1ZWC",
  "key13": "3m8CUDZhZu8DsNw4bfKrx1cktChp5Szgeyn7t6eadJVCPythrQJ3iPuLbJZ7conseujDnpLm3CaUKw6DeYzMc9y9",
  "key14": "2uTFSZjuJJcZCAuch8LkTm75zLqqKNYgDGZvtq5AboYsRb3mMiQu8XUki8VyxQruhcVYbZGfXrFJLurpLs8qmgyv",
  "key15": "2fmGw2JLzdS23vd974EWqSdsVd7f87Ug8hQW2swwv1kbWFEYTrq5H7vWC2YP677Luhn5sx7GEXn4st3tyLsqBYe5",
  "key16": "55X9UB7qiJNN9HPAZW17XaBn9QY7boMB3PHXyJynnNbVBbJ6p3TQNN27iR8QdzT7vV8j1gXCKr9B6CWe8aKtftn3",
  "key17": "5wxv1ioZS3CT6T7SuxZuZE7hBYZBVMr1rN1RpJgWzSnxmYESnS6cVXU8za4vKJXcJekG11XZU4FhRY5Ph4Xin7M7",
  "key18": "4q3kowDfjwJJuhUTNcX4Gv6G5jkQGvkARGBHh6N2EJNGMRxwEgfDttBzrzpEUWFC4FcXvRU3R9LG6YX3vcDoCtW7",
  "key19": "35aPR99vayJY8DeJSndQPq3AMrbdebo4hgBdqRLF9roQr6Yvc8sBbuTJmu5vSc6uqUZfCNRtj6BgC6RwGAZWHFyT",
  "key20": "47FeuDyo55xTEvQQrRszBpvKQ62M7DWwcRcrdzxJvsVGuqjYhN3JKejaMh56gzshJcB7UvXiN6kRUbSuYZaqxvVN",
  "key21": "2t7US6RSAJwyjFn3i12PjgpNzLoaUda8qTjbdusZF4jDfvP79dvZGmbDvWg1rByA6bQWsV3dDK1zsKyRy73aoJCN",
  "key22": "9YNbQjpT5QN4LiUPdPciEWJeNEwXmDuD1fwNDJoP3Z3tcrni4bothvP3QhDwQkwhmjT96L78NwG9xRpGtxxzfcN",
  "key23": "4Wxv7UpVUwoJtA6MouZKSmkrBzGBzf1Z7hUoLxLRTgjcR7y2wMbvFUeS16pQmo6c3ARJjYfGZbD1X3G9mEY8vjAE",
  "key24": "49XB1MxALz4A2Aepx36CK5Q7FkNgZeyNHwx5pFP1NELQQkRXxhuAB7rH2xoWtGRn6BqzmLtd8VZ9v24GFbNmg4L9",
  "key25": "5u6HyB83AWg2Tjd66vt6zWu56LBsiCyiKtHeXu3jWDhkMZZA3ZNbwBbJ8VYNF6GNbkWPHyTvUv4sNs4JftxomG54",
  "key26": "24FqiAiBMrLA9pmeTuVLeGwNAFeXwYaeDAAz1edaM2j84Q4Y9FkqosP8EUbzDZVR2bpDjMXLZepNBSw4iKccCaNv",
  "key27": "65UQpcn6BQHkoTPDK9FwtdiyCtNaY2S3peUw8H6MQg1vwfdY27GVwjwmWNzJMG5uQihxbmVnhZYQKHzpBvw7wrAD",
  "key28": "2E14arM7EadnnBVAYYwrTaGAWazzxbYYE7dvQDxzdzoxbbkLpQ9VtQDWfvYUzRQpRLevd9fUH8aXkzPRHm4uGzCu",
  "key29": "cxLjUXoUf51HFiDVCADqnykZevZPiPsuJNDo5xcABhmDBRU4CAWjoKzyzcW1CaYcDE2HKoFfRTZRskqZVATuvDs",
  "key30": "2xKjqeBjchgonmo2xzcCK5TKtM6TXevkM5AR3FB9YxHMvTtgJDVeswhJeNAPhfyfn62fdEyt9j77UUNuWn4atmLg",
  "key31": "57w5k4ZPNkGJhFE5TXvwydSqBZwwwAGbTrDWCDq6mD687Z4vfu1YKy6bLSVG4wVgo3jWutmHq4U28gZaHsmSe724",
  "key32": "673LWAm9RYZLcxQdLqNzd3Yz6g5YKukjmo9eD447US87GaoPrmbFGjkCNBde7xTkyZQeWafhuq8eUmdDTd3vp4g",
  "key33": "3wNDo9GUmtmNAuQFPkTLKKFAagZ6od6aAZXNKr2hRAjqxJKgDRos1d4SDcZyVsmQNKin261nyfE2GyKREDAQmKgS",
  "key34": "5TumUh8fM9w8vDgjGkrndCdC4A4dbfzqCHkAQe3JcpmGHVzxr761bevAwTzK9TSgPudakn6MG6nrgb6mJiDxFhDa",
  "key35": "1bTz4C95Ubez8UL9AKUdeUcfjmhBZzTnAa3MgFrdBv9Hkv4u3pZAQprXisG5QsCBPvTyjWnYMa8UsyAYyRhPoNj",
  "key36": "3o8wDJic7SNGhC9TNC47HZh6zmAxbtTHrQ1jVEVyFoyXCUboLoXVZ3oG1dfbqPcUv6GTXc1s9vRrKrFAbTatjoFg",
  "key37": "5wtJ569BBcwjsvgKeXWubJPLYbrHJPEpZaUWJWB3bPVpNGegLpgDmetDKmaHzFJoRSFPVbge25gcyK5WRDFaKrEZ",
  "key38": "5fAxkp8AdVQpxZ36CHWeiEnDimLVu5ymyttfXhujunNJ55VxYdPStrJ5Ze8Jc4i6yVQ5mNUWCzgcbNourgnJ9PM7",
  "key39": "2fs41FxAFp7StbWD7wAZYkmwUifT7YmUCwwp4wVYBr9PvpC5Fr7tkFpzXoWfx8HcuqjbRR5tfbJ1wyhPsWAL2ze5",
  "key40": "5gjwry2e4EtGFSzHX6Rg5UcnH3iWEF4cH8H4DsZeYEwQYz3CGkvPtYwo7aVWsdAhicvoi43EFvadeVfxo7HkjrtA",
  "key41": "FX5hEFZFJkD52FQeszLkn3e35jEAEBbHybc48uwMnqjJiA9owQAajab1pk642yZpE159KMNC19YKkg1LoVc6S9t",
  "key42": "3YxskSTfbqoXL6LETKa82GRr7oBczu3GGNsuUFnSt7DCekAqetYGufYnj4ufu8FzyKgPsMx1hjm2V6YeisFfWJiX"
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
