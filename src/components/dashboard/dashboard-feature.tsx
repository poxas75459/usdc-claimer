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
    "3tUhp6wGna51WiSwqPyW3gBvbzBUpnhDKtLPu3cwni3AXLjqy9W2NxVtCpLPTdueZWep29eHx83FTwXWBH3oi4p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tN3Rzhn7rBS1oyUBf1ZoSPfQcDf4fucM3XZnCzXEMkWN1oDFsZhKUjMpChfthRBoJaM6KKJriPXaGGn8sAHqdn9",
  "key1": "2X2wGW47TxqdtQTGXGHebbutAeFesnv3JaQAT68cZ93go2u78dgc1hjiXAMDVyeH2B45kqxqGeSMinbBp35n7SkU",
  "key2": "nyQP4HBx9fQngyi6jkZtMyVvm7tAexkWBBBy5KpiinPjcMA2iBGDjBjWFK5FA5kcYzoAzCosEnsUBVBNaHA6Md8",
  "key3": "3Kda3aa4MhAqkBrKmUU7sPFAVfGgdg2CHch589miLHhqTMRuUTtQ3zW7CXc3LnzWtJ6rf3mqtf5Aou1oSytRYVsn",
  "key4": "3h4hzsgmbmT4PDQ3Y3b1vCjZB7YdR5pVCLmLXNkpTXBJK3MziqsqK3o2UhMHrKYtMofYXsPcH2MfGNfRaqN16vXT",
  "key5": "4YzF6eTEEEKCqpo5W5f4w7drQwoKE6pH2wWNXwF9rxjvrjThhZokRtpD52btSjm3ythk1kYkMV7mrnRoHebxpU5z",
  "key6": "graR6ZFT1G3zbF61483GAKa8cizFMad1qw7JgSYqbZU6FCyp8oB3fPH5pW9kimFTCLZTMYHbxi5WnR1JAfCKtkN",
  "key7": "2tQDQLDAWtSp38W8pC2vpxkoTvyfqAXgmRRHGHcfpR9JZk9q5UrebcN4C8VDhwkhovxDw8d39H1z9auGzKE6YCk6",
  "key8": "jfVrVgMh5cY4Uk6oiLXPzCDLdnQm9vkcA1xtBJa4pKjxARsA2vJXHztZHMJmMiDr6FqtMqjzdY8Qf8cXkhH97od",
  "key9": "3jAeVjfB336wWydgbRQByQbqKXiDe8ijfUC3yVpVzL1yoZ9ZDoNE9PvDdZrJjaqwA3kA83SuveJgXZLfFJtZJM8r",
  "key10": "4r6kbaZvaNYBXMjkLbw9UWM1dhgCT68ip9LtrsLQPKByk6gLN7wen295qRHYX4H6XXjfkYmGmd5e6RnaoyvsyQTK",
  "key11": "2fTLoF8UAYnS75VpEVbM7EkMmpKVh34dTaTakTtkkHx7xbS5jcqVLhfxVeR3d2PRH9fhK19oVXwV1B4yPsyktVS8",
  "key12": "2yW38qrqU3FF97p2w3J86PRmMi3WFz6rKwEh6j2G8ibG77de8LQFLqchcPKVHGi7FcBRA5cw9sCDEht75kGt8SBA",
  "key13": "2p4zR7g2uCKyKnMq9VnGBWz6BB2nYMiTqNha3enPDW5fTTxagzk5yTEhqyjrf7wx7nb3h4E3u1E6AYDhRZH3cnFX",
  "key14": "tJDtdp1BCdRRMdvueTocmTnpjdKxq4EKkm19DcpgQi3ni2jHcdA5SnqP5T3PYVRg3CAecKGEV7P9Xcv6sgNVs8M",
  "key15": "3VAErraVZN2rSB4EbLWMEsuqzRg9v59Ku74j7Gumu4AK5oCGLmsK2kXvdWHAu2wLGwaZ8gEFH8wyEHUehAZKYxmC",
  "key16": "5D2zctXihBQ9c4P8Lh1THApCxPrDjLyMstrGDHvbJYXzxSZymTwgAKHJqpYmWzdBUWCVjU8c2JD3Aez9B8d5k8Te",
  "key17": "VFC6v7LRELypg9bHhDoo46Au8tLjtHL5eY7AAsZNqweSg4rQwwiVHTP7tjY5cDze12rFDATLTNhLT5FX5ciQNNw",
  "key18": "4pajLzHTnYainstx9jTpVzeKuysdNn94otuQyyJMrkvf9Zi5CWsSne2LxdH5E8PrtXRQ4zgUXZhVaobV4nUYNrZY",
  "key19": "uvFcmU1Uih7FMf5WwPK1XgFeT1BcyxPJ5W5ziJ6EFF56Mo9otinRz9kVh9SWcm1558BeRn5sCD3nSEHd3VvGG5y",
  "key20": "4fUiU5ejqA8xnjKhgZ5Dpfw6SCXRf69wkMUMkBsXMBZJe3iHbqujQUfhYrhHDHSNuNAgtkBqKU3UcKUqzno1dyAS",
  "key21": "38521UsJNMSPdoerUT3S9yPAbQ24S5eKM2UQpJySCV6d3qKyNwi8rXBPv43kKSWV5vy97PBkhEJCAhZJYEc3KVe2",
  "key22": "3nYfMk4wZYLeM6dGPHUfp1unCsk3VqY1oFnRZnDC9NmRSUkrBydJKW5jvTLond8KYXfeGNW4ehbJYZmPhf4xCNrP",
  "key23": "4Dm4ZTkg7mijD79tvo5jqv6EqDFbsodfL84u32GeXPprnwzC63hjQmgV2c5t1NNhw2B4WBKJXVjRaLQTQEZzBxLK",
  "key24": "5iE7mQsvz65UhCb7X1RXQ4CCJW2CndfYymibar9MTDmCZHcQkGC9cUCARkHY5H7xTciUhvsuC2BmsRbPS1Skbxcn",
  "key25": "4PyuxXS9AnqUqv9G86EwCAQ1KDX5nFXYaQdP5QYBLbAozAZBMddG661ixQjUzvNvoFReeNgsJE5ejThzXCNLA71f",
  "key26": "4vHFevVwJLrXKLgsKFTQtzTfU61WkmYi7Gg1G5ahf4eBdhRKKpgaBUqG1ooLzskmPTsoFhbZyVACZ3XJMYckzYCj",
  "key27": "32QFg31Rnc4XUY2CDSn9jZrJxsD8vmgiUns1dak1dJsc2h4P44fMqqxXf3NXdn7jbseREWx8hKTscDMMoq2oz6j9",
  "key28": "4uf3XeSVFE1csiKvwh8f7RAmxBdLkj2jjoq2VDi27pio6npJFvJZXBPSm2g5XTVhFcpW817Kh3Gdwe2k84nF8KBj",
  "key29": "CT8hBJG2Yf2KkghuUqv3Ns6yUPrtCdjE4VEfmQnFusjVf7i3McZaiZg6BZAtiZH4WzgoyCz6KA9RSoAEgCEWL62",
  "key30": "2yg6PGmRAmPP7aBDzPGhc22BQhd3warGrBqbkhXNpJhq8b5JYyDM91qxvpsdbdhswzxZqkDPRLoNKUXaiK5gXuKD",
  "key31": "5RTbdscn3FA5kwMerjK8f4UFmZsTeJGZbUrXcfiy5stdsG4RJXSRfxXPXKCuXdqW71WhaNQy5PwV4WvPm1bgMv2X",
  "key32": "3Z19AZEimxEwNzaAJr5mNHLWWo8MbAxBo6M5kwKAKVMvnhzcGNrRY8qpu6JVVVXhfmaKy7Ytk9d8S5Ct6RB9kLjL",
  "key33": "n9XHcDQTUUWFfvkSb875Ed4hEjJvZevXZMZr15aLr4LFZyq2GFJQknS7gZVEDjtyfif3nZG24KUAaPj9zahSKgH",
  "key34": "425DBR5fg4Qz8bPKWdiinURdMF7PEg7yWfbv9V3c8wCKw1DUfTSpRyVziAEzZiM6G7tg1zG7VbKPARWJ11HHWDDk",
  "key35": "2aZHz76npxjLgsz6vmA5xnTuhRAmzJnqfAyLVcUCpcDkU5uMSk1h6sJg5bJr8ezPavVD5psqqPPmnmF2yZS7Juc7",
  "key36": "CJFSbiHmH4ibLsqSaT6exfXTkF2EATjt7AFGXxJ9MVkzPPvKfyrjvnqZmMRrdQmkvgXwMWEJMd1mAkuPFK3JriB",
  "key37": "5CJeQwcwUiJ8QDJMyeAqWb6feRJ7UPVbrCshAZHemcXwCRAbrBLBVBrDv8MbNxW7aVtU7e2RLCZHeAEDczBfLXKD",
  "key38": "5cGF8kAktuPSMgKmnutwqjKPdBvwggqLgUJzKeuwnhmi5Aht5PbmK6spPGXiCJQmgZPXDxbLFNRR7eEx1RGo7dTx",
  "key39": "34bYbbXP8eGgoNN6yb27CJE7B6Bo4T1aoMhEKj1K7HTnTzgFfCoEFBptjTvHZWZDY1duAhTt4gi7jzyiShpmsLfq",
  "key40": "64hW2SWdG5scFQoL2oNuwJxumF3C6bzUQadjSdV72HLaTq5Whdp1THbP9CJpwNNPdMV1e3HXjf1XYANKE9iwCaj4",
  "key41": "brASNa4yKmHR95NLY4R3W9XSwFvDfTk4ckq6eN8JD33SUTpnZRY2g1ZpfPGEXUEFNwD1pPFVTqD2PRfeLR3QhWf",
  "key42": "4nqi58pTSp5ZSLXLCxsUn5i6C9o1B6TYGmNMGCj2UVQELFsyyZ9uVRQUgM14UmfB3JW2fq92Xg3aZD7zrE7ktUQY",
  "key43": "4T3Bqe5Ghr4tdgg2ttxEiXPr2rLJUveLza9DdEePMJY9VwSkYmUPhTbGrZCY5ewFP6DZgEt7PpVxwCPv5SeKZkUm",
  "key44": "5bwbvM4TJ7gGUgqyVEN2SGLBkNwJHfq91sX3pWvKtq2NEpU992Q6Xp2b1Yrt9wtbdrKx4s3aBLKNshDyxnj9DQ9p",
  "key45": "4PBuQUJ9e4wXe2Uqp7wuSpDiJkTjfajdowucuJ75hcfzfKJeqbfJRqS2P64zBFUFPMCYQgzhYoscgik64JzDsBvP"
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
