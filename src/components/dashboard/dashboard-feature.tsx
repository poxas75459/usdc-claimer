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
    "BapvvmWE355e6CRcNdBofLzXMpHUee34UVyv2bHNggFqSkHLkCXMtpgppfGUxB6JpYu38yGk9zR5J7eYUvBwhAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ss4KCNVDT3yYNTdVCXTHRpSueLk9sfYqQwD3fkRMDDmfP2h3fofRqjwNVe7V7EyZQw87eQvDojg6Gu9fNEyX1Aw",
  "key1": "3MVYqsGWuRxDYxpea2PajoEDB11xrF8c61g43R71Zm7qkPdJaoGnoyVP6ECh2PWY2HLfTKLMUnFTPrANLHdY4M6R",
  "key2": "TMZgcJWeNekdYf2EtVFErrhHjeUDCBvZ33dbzZnvj3eDtUT8otikHzyWWTSW2rSU5Dyt8jHHTihLzV52nevCE94",
  "key3": "2TGX5kywCXDMsivJnshXSCk5pkivehEVg7qahSiL7h4Dy12f6hGhvnY5Ax5D5AfXWCsnStFcyD5GJDfDEwJG3s7a",
  "key4": "4rGPbBkD24RExqYjoZX8R1aLM6xJ4Wmuu3MkTy1nai51dfXsmq8SSBYwCTFtmDavZ7RqSH9KYqa5MCW5vmjUmp5y",
  "key5": "5iUtEtHfNBgrxLzLsnZe6gLWvWmFsGj9YbY735nMei4eV8wKJ7jiLRFpbs9qm1pLpVCq9ypTpfgYygADpXRkHqJV",
  "key6": "vNa7VGkSJYfjUyYuevABy1hke9MmCmpniJJMBEW4HPr75by2BDMAg4KDkWbn7y5xhtx9S4owmUzW1VxJ2FazUw8",
  "key7": "4ePxYnLHRcJ58ziJxpTpNyzyCsgu4vXBoUmgW1FFmsZzYDKvDkJXoCSxMp1AP2ttCwrr8DeEpe5XzUXDaVnhYcjh",
  "key8": "3eHboovsAeP4XQkMWTLxsLVbUJXYj3UyZvxgNXCz5ARVCb5Ghzwm5pEeupZKY8Wt9FHgSuDrqtoyQ7oM97nb4d1j",
  "key9": "5f21JBMgbRsauJBHS4QK9NFS4fWWzWYzoku3cBZ7zQJGgCySi4jKnsfpFGoA7k7Je6dz7rM9GeMYgZ2KKsr2DDd2",
  "key10": "49HTm5ws4H6ec6ZxCPRFQxyDMcvo99zNDF9Aa7A92PN8mJuEFmhMMAeSahvKZ15SzDfRn2mAWCjoDYtnfegiCAe8",
  "key11": "8r8dtkM7fVVVL6zNDSifGD3pwuS1Lb3rsMzYVbHJPEEAVLYCiumZPTdNRCUSikVaFgo4NTq1Ua8YhygrCvbob5x",
  "key12": "m9LrC24fzxuUZPjAzDTCWydbRQVmtFVLM4m558YuZYALdopkrqUrH28EeTXCkyV4hi3LS7CtsoBeTx1pGDobtPj",
  "key13": "4B15oRF4F1FBA4m5eAZmtoFxvU9VMkcA2ny16VWsg73Qu1RsoZFuF2RundXZMhLuHy7FgNhE6y63jTJHw3wyDTi8",
  "key14": "33cQMnjF4ReffDaBMY6diyGADexazwmCSSmpYqeNmRVu9gP2LEFpNVLk8Y8eWFh2qxwEeSPJUMJVYZddsMJ5viNT",
  "key15": "2Gib6hu713dXj2ngxiE5gqVwUEJT5dtoBGkgDrXQYnyF6YYrUPy4HehR5vjMwPRLECHqNKEFyvocD7akW6vsd9DV",
  "key16": "hxQBhUGZdAszDzLrRd51NphEgVBxdm4atGduboRtq5KryRnLG6Kwunc8bLQz2QVDYP9zYm7DwFrRFECtCQQMjcu",
  "key17": "2ts2tm752PKzAjbj44BtpWvUPqNpbTcPZ32KGBaabGKB7cmBZC5PH7mgpce5jUrKhFbNpuPGfbfG4yXkfYoYFn2k",
  "key18": "3gAq7VkEFrmQ3uK22Vu7vM6Vu5jzJsMCgLx5NLjZiXEKYmnB38y7agz9DbfhPrBotLuonaBco67zyc1n5GzAm6P7",
  "key19": "5qQtscrNMVyPJdrNdT5TNPLfUQZRhbfudhT5Tvvi8wU2vhzXRj6vpnT4aEfwWa45jmTvLQSvtWrJFCbwnRP56H9k",
  "key20": "38QAJqtuvL83Tv7NXNuKbpZfwKJg2o6PPmp5YDzSzjqAyjaH794xPB8QxvaD9F7FZAcFKnSHmdsxvpHYzoxm3p4z",
  "key21": "3u11wjWZV7UumjvyJW6pBsJMRFMnDe3Kqd2E2EchVAVPnKiR9826rhMRoTAdau4VdZnhkwbApJNEiLx25rNBQ4zt",
  "key22": "2qt3WtgfwWv2q3B7iiymAHtCh2ADWfjG56eVrwPHckxgFBoBcvCXxVEej34EcMukDEissZoogpotptb3Ekzoxage",
  "key23": "37pHHCwTXc3WVo8SjRmtTMoSazAHKEWFNjLWpGX51dMmtTZkrvnrAvTLYJSKpD6rZtJodGj9CebRiQGQMW1ho1fz",
  "key24": "3vTB23JoENdnUvMVELS8WqrPwFvSFuMiCBLh5PhhNhJNex83BweXT6txYHbS2wy9GmkqHSaJdPxtc7KUfd4TFRUv",
  "key25": "5CZGD8Md6zesX2ekSwkb4cAFy8z82KX7aRQoyKdhyZ4xFTYPvHMNhYr8fJgKu1CxKWeG9TY2HpEJM36YcfKteNsC",
  "key26": "WSX2nNU4sYUb19xvKKcmEywh8VThKQVmmxYbsPY2qcW6K2uCa4yRr4q9XLs7WqBUU7gGTx6N8QMTsC1US5fxQdo",
  "key27": "3SBhUevfsgBDzZs16fpX6YtzL9o7LQg9BW1pJjq9SY6vU7MDAL5vzUj7PUzbe9raaKeXqETpi88L3gRjjV8rprQX",
  "key28": "329upUdwPFd2BWjJdq3TXTtFaoo9QqE5gZ4obGW6x5rTfFTPZSt4nHpkavH42v3mMoNxpqNdRNxLwAPrsM6w624F",
  "key29": "2V6dwZQwPCAU1TLdjxobf877XH3rTgnHd8BhDT2KA9axBdGhVfzRnK9z3dBML6tBjb3RYo5n5uCgvkJjxkE45AvV",
  "key30": "wV2AKy176Rqkkm61Gf5NJjKMscAyBqBC4Ymm4Js6g8FCQc9rFLa64VREkyTCsgYr5vwL8zoz1jLeRcWdPrMttKa",
  "key31": "55yZYHY4Uu4ioMtXuvYDqcrRsezHG3WKR9KZ7WjgJiBqzR7XFySXLXNR2YLCp8KgWFLWCMuNFVL6mzBxuz5YyLSj",
  "key32": "4JQSYUD1ThaVsVHJCkp9wx5NK9DAfFFTZBicyrVmYMCFqvLBXFx8L1w8Pf6Vzqba9yjKf9cmMGdSiYUQUqhrqNJ3",
  "key33": "2A1EYcbQRD8oUardKGzAEbbQWEURQT5AoTudDu74FxpwguneNofCDYXKaeqRExhk2Mfw63FpnARsgg9U7b8PwaaB",
  "key34": "3BnyamgKZVVnsMQgL2G4kG8VKNQUnEuQGBNrQ5syF3uuR4JuJNuy1X41ZsWnaVtV5PkrRjjWk4fNn9KCZ1fdkK8R",
  "key35": "7cp5Z1qqwxVaZ5dFobiFQTFgHwDyvSR7QVaUQmVB7c1VwTqjBshfS3QtNk9o2ZcmDNPSPUxkg6DNDv6Xd2ukSGM",
  "key36": "4v1T5DYVVqkmDsTaJTE2gV3Qba7dRmLN245VUh6EKgmjPAjeh41QCQKtgui1DAehibvDZbz3yRuT4c81XL9PdX9n",
  "key37": "2hVSbb8No26VQZU7WCXWTp2nLUPWUXS9Jw46g1Y4MEvGBpWZC7KdXWQNFq3JZCdGpkzNYJxjAGi5BKgBLEZdGpm5",
  "key38": "3fRPAVWxqVCxuoFsV2eMV2YYp8nSFC1usfhrbnUn7wLEKLiXfFiMYQwXRHNcAEsWxqxKY3YbyNDdEyjtk8MGAtJf",
  "key39": "4E1GUTPWuu9zsxvwGgxmevC5itMfr18nDoSXX4YsHQRKJFwhtX9oNR2egj5AgxhS6UjbKxY8HyTwX8heBJGWriwK"
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
