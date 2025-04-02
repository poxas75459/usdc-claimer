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
    "2Z5me82RsrMBHEoDvkQDWLBRMeHSzfBr8fwRpxUgxDa5kGRoTJkLFmRw3yRpivSjwDYDD7Hfqvx8SJuYnMjbs8b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryHhFer5Yv5EQNNSJruBRYvnYWE4NcCrYQqg8UATPQQBxeKDjmvTK1XfZyZrLf3tGBeHXAKoyZiF3vkc8Ltizpu",
  "key1": "2t1CnJH5PdZEByZrKhDMr2Hcy2Tc8VNK8jJenKz3u1AK3JUm7tJCVmw76GX6Ref76w54wmKKysJzMwQvaVE2tPH8",
  "key2": "55z6h8v62SzDCeYJXXJhshSvgWucDdhMQRY8EnYNaeAjC7UeGyFnV8DWGz6z1cYdQLUX2K48RFuc3McGCNRyHgz6",
  "key3": "5QLkkxmUaM1T4rPJM2WNg13PdPJ62MVCt26C6JyXjpRyfrUH8E5nhoK6mGNKjh3PchRc3jLZqv7VmBo4eDGR8tsS",
  "key4": "2CmVuPKsBRfBiDQ6DbQBN1kpeA7gx9pAVYu3guRgGtt5j71k3mBXvspU8DLUE2oQxaqRqGM5X8FCz4XdnbV9SNDt",
  "key5": "RaWD8BYKhGP1zzcU4QqkSUDEiS6Ri4jQrrrrGGhcWpYDDS5wTKt12FZun3g5qX4G6aPdssGaZwW2uaPqXcAa8DS",
  "key6": "3CbxKpEEYo6dbuskcFL1MUp9dXhDy4favHEu2YHpS6mSkL2jKxBVEZfiuXPTtLYdhf2Sjvb95GEWynggxN7QTfgZ",
  "key7": "5d61EdnV4hP7VU13xS365TxpXiDBS3Lb6djRAAJ4BfFtdPtpRYhTsHM2J4QQ87TbMVjf6rnCjpZfePFpb83K3fxC",
  "key8": "4cJeZbXaLh8Ph7skin7A7ZC9JiqZKABaBNf5pg1HtFVGqugJo3eGEnc1oMsZVeU6SvyWuiSawfMMUgn4iFQbiiwT",
  "key9": "4sBoWackhWVG8zM72577US9TXqvgFNp8rjw6S3xLC49Lj7HuMh34XSFcLohfVwV6AS8HPnnhdwh2YrpuxBt4zy5Y",
  "key10": "5riDyU4mQc6JR7Zcj6wFGNM2t37uy8nNwdPos4mGKtqiTxid17tSD88kmJGbJY2TaR6qmfHi4FjddW9jYRiUEhFz",
  "key11": "3hhRYV4tiAktXC1qp4cS4Rub9ctqVUwNhu7EpHJE5WPCLBpYiXRh2w3dTxQB9GXn1oYFXfoiuMEJJnwCZ85fqnN6",
  "key12": "3hLqoQrTkEBE6rgStt2Z4WjgDeYR8PmR1S2ezEaYqUZJfPvSmKDQ4hJzMcWAHAAJG8PyG1wxB8aUt5AgQffYhkq",
  "key13": "3ZtTHbAqvFTWPc8Q4SYTst8VeRnhy3DDsGLLfEkKeWxDMM2xiZjydRaKgz74i5UUFeECDVNuanMwhLJsc8EC3TW2",
  "key14": "65PRX13S8TEtDbCvWsceLfbQ229WT2EgBo4jQwjsTu23zXGnEuvvhZuRCzhsScKeJXgW35NaMJYxQs7Cz9DHVPPG",
  "key15": "3BBRXiKSbs8ky33Uj15vAQj3rhVk4844YB2AcUP5FW1nrioWRFUgQ7n6cf3aDLqGWMvKRtzmcHSFgheXz6E8RhM3",
  "key16": "dnrit8DUT66ED6UgJNP38jENzXZXSVccNLFyL15AdBhX4tF8981AKgod6vH51sNDHEwqYx87kbbzgXqpT7amt6j",
  "key17": "57Rvf9YTJQ8rX78mD7hZ1X6DumgtinJvuhK86S9CGPUtuW8TWgQMEfA1L7nt2GJ3UMbGY6p6uJAKT3GANx67m3WZ",
  "key18": "2x3HvTVQi2BrCdgie3wWRX2UhVXgMk43jg8dPNxbfj6iDDx4DYMmxLH88bgjV6LqoXt3uUJ5cV47xetZtjcpFwcY",
  "key19": "9Y9a8YPkxpKh69gpjVrUdNdkH95wLLQPv5wd67exnJ8isPoc4zk53YHRnWxZtDx7CxiY9Mk4pMDsYeP5r9zQrXt",
  "key20": "4NgvMLJUBf2aXhGwewwmkzwn6WyCBgut42S5PxacjN39mmjY9qeu3uryWKz5tsXTBugEvBnGAQPj2Stbxy2cxoUS",
  "key21": "5RN113cGNqJpmkZzx1oEE4xPjpjoWrDVm9CSYiaqsa5Q1GNDCWCA595jCAR6i9qpYB6hXpov3UFeyaPpf7nW1sTq",
  "key22": "2k7cf9Ak8PZvqubFPCC7E95weoqFwPg6FT7MpDNUBtmtDtNvNWH6V6KX8yFEcepLvDk8PiECuq4tt2EhEREiZNnz",
  "key23": "56y3HD8fwbFqfAFg54HAc8becJyTZptzzeMEKuwEFcLEaN3D1ABBkpt7P2nNemrNMXwTFP3PSC6tXMLrGkyB3Kcz",
  "key24": "5p2no2BdVdcZHGpHXiUbPpkX7xb6NSf7mqhe9vKsQJA3N7PesQ9rbUQZhtQHLDNrSP3LmZo2ynDLpoXhVGBDoxJn",
  "key25": "4UUGPNNuDgkQHyLFt8fbwYpEeEaRL3WPzaWrGQo65xwK9Vhu2MRVtG5TFsn5f93CHxXRwtBN5gwhNMpV3LKkp4mn",
  "key26": "2g3qZLRmVjSYY2iMv79vWQ3LMy4sXAh7KovCqF3e4Q5hYyvovPKCfVvphnKBrWTvrMEUQT7tkjAngZCiqfNDd1g3",
  "key27": "bx4yaBQ2r7zT1egM2RVfJ6cBsxTkEuwRoXEhZtyV3bCUJxT84CkthfUKMaY8kkUN9eu1G25AS7WDgHTKKeF3YdG",
  "key28": "4PZxr8D1SYZbCG2wSZ1xdZ2HsjFDTGjE7bQ9eNpY47aMxgRjr1MxF4q9ZqXHSUeBhcLeaD1kxv1gCiHqVVpQecG",
  "key29": "2cJCQZSfbomNFhqCgi3nxe1LaaMi1w1qhoWXiJEBJK79H6yDgGMnbj3xsAPfCEixnpYG1fUw6yLbCdB4EjJXioV3",
  "key30": "2qCdPFmVkvxUDkqLM1kXM8uypd8xDRmkFmAoebWAakUw1RU1qkkXgHWb3tzTdfFpC2XowdAhKeaq9G3iqXkRW7dF",
  "key31": "4i1vvTn434rEV7xjsuiRZTdUzrDBc5GEtCXqrJqqDaHREPx5bTA4F9PDNETaaYR7WvZfEWDf69juCNj8xLCsS9ZV",
  "key32": "5CdRpYvFZbo6SGKrfcKnd8j3uCshzuud6L7RZbzYSxprFE76EEhME7PHv1aMnBbrcH1ZkswnBnnmxZ18eeJf7ENo",
  "key33": "3BQasGqghbVAVhfQaMCDj829eAUo1pNQP5o5ZcgJwx8mWxbXbxzMqVdfDy2svszuNB5Tu81xtHFVEN3YmzbJPvvc",
  "key34": "Xg217cyZtHWw6H7x4xcZdWERSJ6f7atZ3KkGG1KXdkgBFn2Dr7iBq34v7AuASPV175z5wnGy85pJmFAzbeETXcs",
  "key35": "oiX9agWxchoy7M6szp5kE295GmNowfQ46epUeb6cQaPyrS7eQH68m1s1qPRanXP5sA3NY98XSExgdFgWWwaCaTT",
  "key36": "4jntgResio5Yz3e6y6TwJJt4BvxEjTgjLD92u12BSmtVpGLpuYUTFeiFpEGU1MaRvRQcWx7rHpEj8XCY91s3nGjB",
  "key37": "DkKVYMwb9p3o2SEE8RN321zBQR8hSsFxkZtQ79PFPhe7qE7g3nr8UNjw1gdTQWx3WfFmmz7BJY3dq3HcwYwmLPN",
  "key38": "Wr5eYKJPxAMF1qKrtvY471LGcus8GK2upaCXAAgwHY7nXRRCfXdEHzuoRY5HJa6iyUNbmuMyV46vsby59b83VNP",
  "key39": "3qU4ZkxWZH9HK6AmcMQi5dpWC1meq3FJ3Q1iHemBsjwao5sKkxiApbjiukJFSMepkL3YUpF7GUFn7XwSP9Fq3qHT",
  "key40": "2Vkm5webcJRPZq6h8uomooaE6ajdMHC6pBYxLfVCanuZmXAuVdUHGt9xZbxkzgdYoU3jenX1zRUhtKAY9eWXaKpe",
  "key41": "5WvAKQvBjJU3dt85qHsqiQCWYzR1NmhmtrBtH6yS77QyQW5zGgW7AKNwHGBmXApNnHBSmdG3d67Hknmi6WG2F2qm",
  "key42": "4bn9Dz4KnHnLr3vN5FTU1TEEDHQtSSrDfyFBrJxPZvXyPDXzjxuZQE2PuL2GQCfKzRy5P6bwswRXqCBruAauE5wc",
  "key43": "2Kvs86yFKPT6KYFvp5fJGy3Dt5nNKsixVZt5nL9e4wcxPsung3BasA2agn2MtvSYWWem16od8sKHoNuhJPhMmDKa",
  "key44": "2gTHZjA8kk1vB2kYd4TBe4AJuF1HWkzCpH4mXgf1xaQc84YeZFQDDfNDvMfMeP17yPr5xFinPyVFKNQq3T9ZvDg7",
  "key45": "2N8DwLRjD6rCQj9ThdVc7PecGhfdcmxjXR7NWNRKJHVsbWtCy8ujpx8twFdYCA1euuVZXu3TFQtRvpGW4JxxsQJU"
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
