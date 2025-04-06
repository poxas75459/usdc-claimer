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
    "pWLX7c4MRtNX3JSzn18F3qhKZbT9kFzm8oHWqGZannFxML2b5nGzsAdPmG9F3UUvnVKq3mfqM6iNsCQ16cRA62m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3KzotrUXrHZkmNCA397GKpkZZb7ddN8mEjjNJ7RAmckwNaPRd47ptHBbSGvXTR8zaTNpaEdscGKwdeK12r2mUC",
  "key1": "WbQ7R81KXKdYnVY3su9VxFPufZBTHbGnFvUQBGCDJjM4iir7b84gGHz79sXBfyoeFAodZRWJw4Cpz35ikrDf8EY",
  "key2": "4G1K8ocJ3tzRQLwJS13GAVUi4ZHGBtVheduNWYFbYwHmGzd4gFc8FJZgjjH6DzX52od6LwN6rdLpVeJMpRJiD5Yr",
  "key3": "Ym1ZAvBSGsZuBhcHyPUr4RcRCVe5wLoVrcVsdGT4UVxirkgoxUxQm1xUnRUUHx65cUaq4FEQf9WT7qswcf8Mdja",
  "key4": "Unjq2pJzkVsDre5o5ZTVXpfGUBMCBAMvoBmF3kuWMCFtXT52pPN4A1G8tKneuF7HPAiX6aUbEVPDLDgcTT6ZQ9g",
  "key5": "5RJBGD42avEzHF7EdUWsTDxNGeE1o7igKCCogAzpg7oXkBBMC14sQaGyhpASY1tPdJ72MBgumqLPsi7cJyb28G3G",
  "key6": "39oq46yaiVgiJnNaJi4cc8uq5a43mJFSCmxC66xe8vhqDh9uTLm86Rj5vsWChUa2UHDKaMmVwkFjFeJSBCKjDgeF",
  "key7": "5uybVvp4ardeCaAEVxpLEBWEZAZZM4FuCVzNrAVKsX3METGu91Uqz78maPQSvTubxinGnDrdASwLDHjtVvwx16MV",
  "key8": "5sW1AHenZpGDWE6cFGNh3DW8ootz2dVipVR6purQy7S2Luhgbe28ueZqGmEQkMaE5qaJYHyZTEzYziJX8nmWHdM5",
  "key9": "63uDmLZQ8NAybjxxW3MGVCJgeXDKVq4FQeoDevvJDVY9X8mqtBH16ejHqd4hrYfkkkchTDGqtUUPqLy8kNP8t9k",
  "key10": "4eUQ9RwTmzQ9RRi6RDUHVPwqNzqwLVAWdD1tZMdQJxbSqYYMrdRrZXUihbNmXgzFoAqJTGu956eQpTFyrev36YSe",
  "key11": "2LasFKFsRXgDK8hS4XgXu2m1rU8kFnd1bpg5hWBduBh7BRopK3FyBLe1KXDhLxEe45w4bfFiXrFtC8923pg2UkKP",
  "key12": "5WtjE8wQGegsyMxNZGSTgn52z5tP7VvhGuND48JM4AT2A95tooG8i4v6yWmNwBXf1558pm9XsPGAjS8oeMz59eLw",
  "key13": "3sogowgMoCuvwX6VDQkyRMk4f5tAkQ7dFYMXiixsuWn4sXXLznnY9KAFnSbaHTSzKmgvhWLiyX13hcjNoXdGZCwz",
  "key14": "MBNanLrKgJT9R9taB1S5HDHmftahjMDZjr5YbmjoAgymCmexsm1vCQhjemcmhryDB1WQbRLE3wca8obSWkrxAdk",
  "key15": "519spMApX2buMEzns3Qw88dgF8QEWU2qzast8iLWYA8tKgj7VFfKK9GnPn96YA5GPhnLMDxREhBW7RNo6bAH66SC",
  "key16": "HYS6rBro3XassVocgwaaZfZPKtNWbFtV6oEiJqMWoW85HmckpRGQAAdRDbRtssog1RrVL5CpvuAfvSWiwri5SH1",
  "key17": "5ETxoa3AV81UNodTvLd1ZNQfaSSSkhygtmM5Fu2wCLhC66m8ACWm51FSKKBnbesL1D3XiYYtJ5fwUJq3epHHqtus",
  "key18": "47kuy8HN6e77MTBprQ4fv3Mtd9qtxo1pfN3sHE2sdqav1jDP2z1T7NwV5ppYHzQVbcx63SeWB649GPnMqiXWBRGq",
  "key19": "5VP6xeinBoCKMpZ7DCGQyaEWwukz8DBQDcv4sriUQTSDMd88RUN73rP6ta9pbJjVQp5k4rfQ5ENeyEoUr8HHHvcg",
  "key20": "27mq66WKRbmeZt5S6DaqYsx8MRe1JaeGqMvtv5xqQ81bHbZw4fuChUmifQDyLmaVc9i85sbeW9bqkJAra2MZP1EK",
  "key21": "2VHPYXeKuKaqU2Amv959G3uVRXiWkn2jQaiW8aRHenRXoJb8KLXUqyhFtCMtC4rFPwhZtYHUMBVApJtR4K9yQEFn",
  "key22": "5o3ZVxicovUk7MgEp5tVArEbwGabci88TX7AdnBkcSjMQGteHSuPNHEQBrEmkDnDahJsbu1Qd47stAYamVZqk4t2",
  "key23": "3vUKRT3BgboDirJPhbQpMfgkw5Yhry6QezoJTEmiZ13us2doocX6M8MNPGemptXyXxzj3NMfoeML3KmDUyxPsgJ7",
  "key24": "ktBmMgWfJjKQpJEtDpXiNQePViWqLydNv19JxEpFnRKLGbnYLQZ9waq89WyuAQjHW8SdtZahcoQNC94XgPMgpCa",
  "key25": "QQmdAAaSNrHWpms5KBHMoWXzND22bXG1ic9ymS8oKssmmFL2wuGKM9o5QmHLtJ3QLG4ewV8MEFG55LPZBXdoC7r",
  "key26": "3H2eiMZmCKUtdqarbYcaR1Zt4UxhLbG4cHnD6hnj8K2ijkwXkq7rqYnqjc6feP4SM6Uj6UBsP6dDxs1MzZupRoy5",
  "key27": "MqXrkjXWuZna3eB8yuQfFWyk7q5CTPXdJLCTx9NCRFTjL4SuRsoPAEoz5sMwXQHRZPBxdZXaV7Ama9yFv7ydu2E",
  "key28": "3EYoEaH9gHHvjAuwc7G6KcM8eLiiE2cTU8qpbk3eTzbZdx6VGHUpMDaiVU6vK85MfPGnNYxuwHGHjV2JdhvsWdKK",
  "key29": "3bJEzu1sPWUARYtfgNgkEBnpJavjXGLhvc37sDs6hZzLAqnRKpHWHu29dFwKh1Mq1H1tb6GsK4i9eyYkRVGMscVs",
  "key30": "4mcuyYjnWPM3NhHpn4iyaNwpB9vCf44GDLusEyRi54EvX7drNQVJaFM66hLfo9oDwg3oEZiwGxgYt9eV5UCHA4F8",
  "key31": "4q9ePHqAz72vwQHAMXSUzBBAix7Yav6Y862ysqTvH7JWHDs7YXJaKmmJJszptxqWquxH7Jt4Pq8QwZQqZ5xdct4F",
  "key32": "2aJTsCny6vyxywmaop3yHUhKprzL2k9FX1ZutZfpcZZCkCkAw2Unv8MACKftaLMV6VRNzhR3ZujsZ8ZczuvHsmAh",
  "key33": "5VBDXQiB6geD2ggTks4zPiZ1for8V9T6xXw2Mvjs2GWKz1NLVb7rU7xEwFTvfVrm4ziR9FLopPKopQpq2onJkzqE",
  "key34": "53x9fsu6drhTbdKhd4VwcFm9UDkQmCSFZkZqeuUrp7Au5Vi2PCcrbGpXht4fpynNF1eU2Q3qUHyRbh3TVuU8Q26B",
  "key35": "utfSDJwS7Hp2gfC4vRA2a7wk7yCy4ZUbSKLGXhsh7DxEc7G7WtEZSy8F5zaigRAmF1Hx5pZhmP1tFmQZvYcXYSY",
  "key36": "2jUSZL5txQfKwV8oVvAeFzketP5UYKvTVPv7JuUHFzjmkPtTxg1nkYNx2gPDwMvFHtQnk4xigzJVkaHFZpp3pFK1",
  "key37": "3NFSwLASNLvDDjdLmqrVS4vUAjqLvRNTK68wTyKC3rU8yfHeWns6RKvxYiuKJwnRayVGPFbHq1JEDBDKM1APhYxW",
  "key38": "29rkC7Xa67cPkFoyUbnMy4NmrYZBCJQuEhXhuawm4G2DiZnhyDa85YsMbUroUeMTChYMXttfujAZwVVs3j8dDx2s"
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
