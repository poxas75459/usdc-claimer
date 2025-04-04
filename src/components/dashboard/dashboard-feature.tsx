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
    "446Xn3hx3sRxeeyW38G5kXkZuysa2tVk8om1B4jNh6k4FkTtTE7Q2E3KYk4ToYz7yvjNKkeZN7pGPFx2qUxGRWG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LU3HNoWGFxyqXvqyL6QqHDPCx4RfGpEWmd5Qi4WG3Q8wrsqHMESoh7qZpFkRCTuoHUa9swTVj5qNurQZ1AGt2gD",
  "key1": "4p3ENRYQGfXQvudR44YxECS7MwHVJYiapWmCQMaQwFRLXqjKSQSLWdmAyjEfvX4HZ8ZrNEfQE5USR1ShNKBmNo2M",
  "key2": "5d7RsYYQ2oGV1eoom18UVqKZ8M7Q1NWY5rwBRGmy5mm3aik6VYiAHRreeEXpXzNmgMAvbH5RswNAhmuHQ74feQyX",
  "key3": "ZUaafCupTPJ2uNerBvrDabeHZ4YsgpY3rC2f3yWdLamDoKe1ezLUEBkT3hAkQaBvmwSFP1gSyyoDRvMUyRUvQP6",
  "key4": "4zHqGKeAgufrf77JRGkgZxvRzJTryUC9QuM5Zked5j7L1ScSt8RHzaN2QzYpkNF9hAE8zCSfDK8ZqN9ehjU88vC2",
  "key5": "446ZqZa48ZHSjkmEqfPq3CaM6v5iST5PqWpjNiNuLSZgDzL5oCwzqy4cLBDxMt1Ciif56VoEox1fAbgEbK6M1zeY",
  "key6": "4UmQd6WBeLCPgFHPwhheCLTGpGSBQNBhuZzgSDMu7NAs8775hzo5chWNr2P8Wy78f8VuiBo2bY6kV1NhFh53eJ6j",
  "key7": "3k1yRjjyh5uZZGDMXRndNmKX2thr3MUNfTQjkxVMmTHzrNffmjvnsfKQmS2F46NGsqFhyVhhPhkhK2ymqP8gcKVx",
  "key8": "SS488HMqMzb35wbpfLmSaZM5cAFXiCnGv96aZdimPEGzX8EwZohs9Ej3KxYXVp65Zg38QXkYLEBhaXAoMDUBqHW",
  "key9": "33xUBpfvwwfwW28v7kbMQ1dPoJxuGWXuwsmxQMDEHvygSmbiU8B8bp5tdnCkn3XJU7NGmbwnTdcq6g5BJPz7H3dR",
  "key10": "3DEpvVWokNcK9cgYQc68F2BvtZX48Hbrranz4r3rLWg59czcpSjeidv2EJDn6PN5tjYLuHbSVmn3gqrPPnb1z17X",
  "key11": "3vsiszDh8bacyLdaSLLKS8RCktiA6KWdPQZq2xaHyZdTZDm9ZJZN1kW2g48zeW8fpgk36G94npSq1Mgzfe49Q1di",
  "key12": "tpD2UXRDU9P5dbDxEL6ZReuWxBVNbztETYFUshVCAM2JyA3Gd7BdDhEM4TDo1bj4tE261DmrEJSxCNXkKELFoF7",
  "key13": "2ASwovygqqnDJtfyVgjo8ncQXukBq269mdrsVLyYQuo7EfZekXLZdj87QhubRF3bGgTi4AFNCMBaZaqByG1dYfrG",
  "key14": "5mL1EMhtvYL6nohwsf35UDje5h6ckuMZEpA2feTwpaJsF3jHj8iuqEEp9AsTeuWeSmDuAfdF56yRrTaui7jKf1Xr",
  "key15": "5RQ3hPNr62VyKa7AqqKHJjwZzwwsAUpPihSAEf8EJcthpf9YUWWxRwKDxf23eAuEBeEGcS6ShcAwCJSVBLBDKMLe",
  "key16": "669Wfugi5RLXRY8Xfnhq8X2PrfitgnM4rc9pc1DNyBfa5ePSzAjUpUceGqUPJA1LjtP9q81Z4SP3qbHsrCidvjEQ",
  "key17": "4UN389AewvtxAX9TQsSq96o5YC4epx6ey9BCH4k74qAtejx4sRV8CyoZxfnvw7ZKXs5amn47EehAET1nsVfPJUpc",
  "key18": "2wBGxjpBMeG418VzPoFWNrEkE2aZySghyMa56hQBxaVDksY8PYYFbaqGg2zwKttSvU4gb7hFkCtR3kjejpqmpf8w",
  "key19": "3Hu7Qn3dZBhS4QZBoVpBjx8VD8ZiiB2PH69WXwkyk572C9SJRsKoPKMXke7Knkr56EPShkpFZaVWhSgoQjdZFTqC",
  "key20": "SmEjWkqx15FuNvq7bqihBq9LXS4kJ8TENHB7ieZY3yWHdRka6KVcMqLddErwQEmu11PLqbDJpBgDFRHnC3xfjWV",
  "key21": "S8UGtbK24toTJfNH7M4GLW6xswJJyHsNPogTpbka5sCK79y5gsXSVdqiHNJTepAu2qZ7cbmzEEMJcUrjEQUteeR",
  "key22": "3WHWa9iezuCH58sgVAoFZtsvSL1BGrbv8CcDsE5UjaN1Rmy3my3sSnhSBX6L6B62Na6FkpQuwDQQXu4rdrVbdE66",
  "key23": "5t7bt4ZWa3hy7dVR5nFoj8G621GNVZ7DVD8JjSjMcCafLNJvUB28HTuqJGLYPEENyGPXGfqxUBNWy4AbXiyuStUu",
  "key24": "37nuPEJ6yEeQ6UWhjpesjveBzMPcAY3eWNHTNnyFYCdunehEFH7VzdpRNa5yu9JC4DAsgm4You2XMgQ7oxfcXkVy",
  "key25": "485r8QezEVkVqzKKVDSsFZNsdrYxJs1Lz5g4iaRrVSBjZL6qhvA8gcVcjALjwc9E4i5wNkGpipXJNpgwA5vBBdx3",
  "key26": "2dtXFyD5Fgmv72A3sdcBLCF2AigdLytFAcL1Kkc5fCVU6BWVuibTNiFyj4otctdZ6bS1DT86Gdx2jvWcD6JVgR3G",
  "key27": "3TxLHc6E67t69La8APK9ggF1VeaaBTKST3my3XizRz8TDQFWU9GBZGgbXnfEsKv9pE53Xj22w3m8DGA3qngtA8fW",
  "key28": "5bvDtZb3oGw6eKEVwijHfQzBcKDxtL4PKz1ZgqZiN7NrHyVyxgNJWGxQK8aCegfcRvFezvuB3ee3Bs3DG99xGRR7",
  "key29": "3idTcos6jAj3aPp84WuFBuG3ejB6ZDbbj1y5YT3udwF4GxvxvZywG2HG37MTCCqvCpxEupFUHrQZfkbge6zyeRqR",
  "key30": "4i7DDviACaX4J2qFSBHbRSms9coDV9LeisGhe5efiyc6ptstZ7EbECNehT9vRYAYKqLaUyXr7E5aJuX38X8fFoJv",
  "key31": "5ngsdngZ68k6wRgDKgwCFDKjrg7hhgMFhd6srCiiHVHarm5jYuSavzr1YUqByAbpPtzmaQjDyHCy1DsQ2hnQATjM",
  "key32": "2TghHPYQjRdf9sdKvJJuYBniQPrVFy6w9Mcok1dvMErCcBw21V7sdmZQBcHTemzGcSJHybXL67PnEWybDwpmYBbA",
  "key33": "2AnNraSVFAX6gbtbrafaARdrFGUKQRoZzeiqSP7945XuFE8FkyQT3YX9AMmBqeBybEVZEK3rKbGahRtjmBxeB173",
  "key34": "2oq6CPX7LTCw4XF22EJFeHGmvedhTgAtGGU3QWwTjn96wNxyYctMWpzFrUHffcRwJpv2sGiM81PRqqWgSJWUBZbn",
  "key35": "5YE5KAvANvaSssZqhf2GXZiQDMxhaNw7zV5LwBfHTVqGcS47AmuEng35cLcTZyQBG8D17iy4mEHKQvtARTzreBbw",
  "key36": "kEfUWqwuRNrwATYaKZSpcowCBSvG363SYwMFYzbJmNwgb4HCZk7W7r3crUAMiJVwXTb81Ta5hVrEre9F55wC4Xz",
  "key37": "3CncxyXckMLE7iLuHpvuCPpYQUJv9Fa758qjJdQtkfgoVoEQGNbEQ1NZkwNVWU9rEiSbKPnPHLVtVrPAJfVZu7p1",
  "key38": "5XoMARS9wDkQ9XKkERJepqWyG4RPqxKa5FDiXs6JyQnqUgTk11VYkv8ojHA5SWptc6ZRVxAA3SFWJD8kChA9gFyX",
  "key39": "39NMd6TSbKUytuQFgu2gejY3sRG3bvw4YxAuoENaA5Db5ZcoLgZn6ahjqe56JCxaisr21UoNEydF2eF4NTmfEP9"
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
