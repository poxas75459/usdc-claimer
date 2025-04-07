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
    "GgNjdfndGrmGT1TiAviYJMzHGCFpbZqaGi4jmZA124UjiQRzSK5LvvjNfqd2fofeHzsFuhUpXW1eXij8N9kihJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rL8KsTFSv6inKdsQZrFpeyr5hDFGB8kokFh26tKqwps2R2Qfu428gk3Jq7JexF6Jd9tiXPW4m3hpGeBCMGJ58Cf",
  "key1": "2UXVA77GZCnG8YmLCw3oNp2iLk72T3JMQP8rrMzYKJgZehuNLYQzCSq5fEHN6dUdxNCNxdv7hNwWyQXuEpheHCog",
  "key2": "2tQsHYqmBbSpsKYwWzjktbkkdZbRbSkdMkVG3abVeUTND7g4hiyMpPRzob7cQgAtUKoW9DAvnV8p75LGRDiPhMkk",
  "key3": "4VRYvnNwRoV1vuoo5Mmo5np2hzLGTodWHp5w6PWBgrp111fLPY2uQeQWkitP5UmCvj4N16BCAFxY16GFybA4zqeW",
  "key4": "1nBqrAqXqtuTtHjuNMQtdsrAe3KwRZeW17vX1xb7qLoXKYqc3bEmZ7NQVND1M1SyagokDF6aiNqjfgrKBBGh1mm",
  "key5": "5SZ2WxSTN6mH3DE2aoHhdEpz9EtiqV5Me4ZcYjK2mzJZZacurUpkLrXEKsYuod4eRZVt1ysDmiVaxLARyFYMkYdq",
  "key6": "4jRjNagqTKQwmqeG3DBxV6Fecpx4xBYc4TKZoZ92nZH6ex7ywfVS383EAyGajEBo9NqCrrQCrQKdAAXckWHUtYBH",
  "key7": "4oMoKrsUCUsp2jeAbKgHjk5rs6Dv4VDw4BJ7uisrcFUB7E8P33Rh1cF7FqTgBTHRQBCh9sCpckuxgGKCm1JUeE53",
  "key8": "2ke462T4VBWaQu5K2LZPJfJPTwedEjnj9xt52T3TmoEu2cBHAfgHQgbW4HPLm9gWP2CjXyKjZ1BYbfdwSzU5eksM",
  "key9": "4VCAkJFyWBTbzk3ekC7PCVkxosmFKn5CKmUCy1kESrMznHCK4yJ8rmHPHGiRbfXv4ouPkgZ83Y8w2nqqFvZG3taV",
  "key10": "5jqBC1TR7FcNFdfDZ3kHVaTTffe9cvkCE4T9zXRvsbdrJE6ebdHc9FJc9wNgkthfMXgjJdcU4LXEEENZhQGf1sJ7",
  "key11": "47QiBtuRcFTGReFZgfkPQBv7oqZsF6fgPWdAPWN53aGGKaXz7SxUtbtNSfxK28aKkMTzkxCAmvDh6NyACeSsyDUw",
  "key12": "4JjYLa54YwWMm2iZQq1atsrPVnXbfQ6HbEwrrc2m4VXch5JYBc3K9FXpB9YJkBXYT542LVEkkG6MJyhPj7dbRbM3",
  "key13": "44kQjTqevxohhQH1FN8fUznuR3UdkYyV1mp2r8sSTiAA4zRkfTfWKoFvsvqmGULXVpqRWvyvaHXBqBDci4owmYv8",
  "key14": "3n5ugAi5D5weQPbkoQND8jvLYs51a5RDtZVyZKpirAkzbnNx7vkwT6R7g4ZqfVhpcJ8U37vn2T9qhKG4dtMB82aj",
  "key15": "54u8yK479uxv3dCimeX9xx8DnVpdt8sRjkgrYr9kJjEGfM5nz8CF2aU1ELhXf5rEJXJDB8yPXcbxHedH87JeMVy3",
  "key16": "2RTrdyvhsxfSCSJJF3dr24CRRdkex8pkpib9MmgeZZV9DiUM7B58vEEGTq4o86cy5RRX5EhFJpdxHEZWhEsBmfap",
  "key17": "49WmqNZ4PgW7Qh1okedSFe1MaTUDAH5g27vJzdit1CyXFHU7PH4po4MaYxKJw6SJtrZRHqTU5VArRQ1KbkvShA8m",
  "key18": "4acBAFktEkQtp1DmYXB9nKE1ZQYAeoNFYPRhfBHf4q5ZayEtjbbwKUgYtWxomp4TygRMSfHWJKbMCwsZyiCpvRoo",
  "key19": "2iRodArifcDxJszLwjSWWirfGyJPghM6yeBW1kHhJfknPJr8YaKDiAKqMkFDUn7vAXfHsVHhVf5FkQdM9QPjhvpW",
  "key20": "2MRC3Y5QpryEWGxFbXedvW8WKzxinsUHPzHmVNnprwu9Vdj64wDjhRqp5NiAf1QvuqEcgF7A6WHECiJ6vwK9FS4k",
  "key21": "4HHLPzCv6WeNed3apT5zPop6GTCSGH1FgxbTvzgXHGm5HFgS9DoWdtqhQFeuwE3hGTHf9SfLe1LSxBQeEbXuZmKE",
  "key22": "5fGeHLcYLJW8RZTUaViyAJbZ87eJaa8FoTorpMp2nrGfs6Sp5j8CZbrtDcPNWGzhEZR7HHWP3am4EJ1eRbGto1JQ",
  "key23": "2sDWdTJdxLPVmPmJDujEPWU1WCS3LrPcMo31GuVKh1QpJYFDbqzUrfsiUGLg6QQu6m7P5xFHRpxZcB3nsSfmPEYn",
  "key24": "5vS88zAAeUBCfGGizA9CdrZmkuRD6iLZBoYgGYkaV9aZQfVhPp5vVEKAbTFtSz1VpQbqm2VezDWbfgbNLLiqZD4Y",
  "key25": "122jZXZyWTdy7Hb34WN7jafbWjRZXWS8epdmjSHqPjjnWBCShicFuEdsKp9rTNDoAsgr1gVKYp3Rer9DRVNDdpsi",
  "key26": "5seG5rGxfwFBx37SdYgTV3GW3MYaZSQwD23We9RxbuqsA4Lj7fysqj5H5n6UyxAVyVrDAmEJJ42ZooeiLmNfMRNk",
  "key27": "3hvLsfJYYQbu6NtZM3CByFxAnfQLpFHioVsmJb6jDzDymHmPiQjm87YRPUyqENUUKc5rnPo2yk8RTHTxozq33Hg4",
  "key28": "3s1T5JjJBkewVqkY6GrWWiGMzyfhfVdM7daFkMYbLFxv9vSepJYyMEJ7wzcqi5aSgLBhfmMNZHgyJ1Ajdxhv3rE2",
  "key29": "4UHeq5sEpuXNZ3pf2xLUMbdLsuh4Pt3xaXmMmHM6tSKLMXwHyo12bAt6h4ksfPyn9owdJ6NEiERi53aNBSED6fy2",
  "key30": "2AxEbFX2HybHSEXpscDiPmf31UqtpCWaN5csdF6nwGLrS6ztPAuenWzMWh22UVWCK5kyFjsbkPfejzh2pRt5M8BW",
  "key31": "LSfz4MPo8BZVMuNmqG62qeRuN86amfW4YB9QvzVnpgPMqpgZfC7jKnDyFiQX89AcyTZQWetSi2Lsk4ukQTvifrY",
  "key32": "4dCSRN7ehWQSGZgJKb79CVz7y9MRMfrVocYzuCtdtsiR5TKtoawbfvWo1uq962SuBf3n5L53QbmanSJc3SJszfHM",
  "key33": "37mFovFuES2r1w8HHRk9D7upEuD4kbZd5iPVbE61anMU6kxzo24tpRUosbiTLoEi3oNy3qdT5FW3kSTzJsJkVqAP",
  "key34": "2uKo2h8VtsA1YnecmPHADNfkdxhqqvY2kofaGg2ixVZjNKw8qieSouRVunqpcMMzZ31GSG9zj6whoJnR1rkkVGh2",
  "key35": "vXc4pDp6V9mKkPekTJj9gjCW5cDXVjJvLoKtYs4B3BKKzDkjnj7R95wYEd4sQkmm2A6mrRsresoNkemwXHpz779"
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
