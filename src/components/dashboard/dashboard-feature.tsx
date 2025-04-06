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
    "5pgYaMM6i3qcDFGb2JzshafLWAFPgWM6sVY25Jpr95eaQ6iAhe7Y7UXQvqcyGtK9NmJJ419D6icqoS4A3UiTNVxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjDDRdNeovbVGLEXe6LvfzkQSEQb1mEw6N2E4gW7QvgRZbCKWjNWfWELWeDxp8YBXfZvmBRj5AcETJAxkxY47u6",
  "key1": "3ggCXsU4ZrmpFQsd51vrmDoLA96x5G2c2ny2Vfa6d7B3wbJ9aEayFZiunyzTT86uGUVXxPTABEhVd8fDwN9fZRvZ",
  "key2": "27nSmj4vAEG4DUoWehDAPWBN6y5qWMPviJMtojZ3KkR4XELog5wX6dFmroCCpqyPFiMdpLHpQHCgzERE5czKCay2",
  "key3": "2euWmDDC1QLP9d66x6vd6Yp4TpF8rpNX1FUkY9gy3EyM4XGgB1XEp3atmQD2mB3LEXuDuntADPV68QhzuHgHTEuD",
  "key4": "5Y1YKHPFwPjpQCVZUxe1pcpXpy7NBN9FZ2RPyD8JFopmnKy3XxkiKXnJdfaJxXnSdWEYyKX61xSPURSnXUnAgGtk",
  "key5": "34WcjD4PeZX4uFZrm4wzAEe8yJbhPm1GF7wKKqnmVg57sNqdov7FvM5G6qrWuiix7VXGrPpumiZ3daMdyTJKLWNT",
  "key6": "3uaR4tcAAcoNVSaNGVLtw11ripoZxKXvgZ7AEbUpTNGMz1aC4LoJuNh3Fukqq8ejxJgNNBKjLWXD9jo2eUwEsWK2",
  "key7": "6qznGFRpQawq8vBJdQvNCvenfMaVBy24Sy4XDmBvucPSdkUWbn7w88yPL6JLzrzwMQq3W4ePRNtSEG5RELn5FSh",
  "key8": "3ue6cnja1Ye8bCfRaghS49TmsTj3L4azFgezYpEamVjnZHAbBuyeWXz7daE45KgGNBkFG4kuJdAD3kvNMXjwx53w",
  "key9": "52DnR7uPHM7sv2dfNwQ8d3xpjBMHT21XJsckPVBDCKgRSWgBnbPSWFy6U2cEtMntguBhk2nPUhu37Bs8wMrtchXP",
  "key10": "5WQonJjLDqAu19YgkpoK3fKvUwvQXwZB18HZjskugF8B43fmw2zbTSHYyszwP9CwHeXZomAV9p5GQfhJcUMVmAvz",
  "key11": "2fZSstNzqyLXd8VY1BKGLBPG7sMWGeHN4rhYL6PQiBYDVDjsSTNJ3reHQ7NvNT4HmFDtxHD1e5SYujVzLBp7X1L5",
  "key12": "3XrpuSnxFZM7uJ7y1MZuUXeNpnenJdCSGtRuEGZ2Qrt8wdy362sJxkBrYUS1w3NtTPgiVSSyyUdWxvVxK1b7JfUs",
  "key13": "4rgBPE586o859HSbxUSFg2fSq2EQZspffaZ8h81ZGiU3ZtNjzhJjwcPV1GcyqvuHSzkhJRGYprSgbjhauySzHaqy",
  "key14": "4uwYPWVh333MmnUoGhiTCTijcG8jxqbgsErStYJFq78KSzstShMzPPzRqMPbYVpJjpkt5AjwT3ZrVQag4BS6Spkp",
  "key15": "4bTmC6ff77GbHJSq9keVLr3xk2Hb6hhs1va8GiqN7uEqqGPHECkBjggaWtiHnmXgLcSpNvnDtvx3EYSPhC8swT7V",
  "key16": "4CBE43JNaSp4nKmE3eMVizMTZyS43m73F9yRpJJUinehvo4RznheuVUFbKwCSKfYegzpRK1BRHR9dqkiUfubnti7",
  "key17": "tDJg3ZvAAwkhWA9PdgPvj6on9EEFA7XNzLNKMij3smYxVrV3TPgPVjhrW7rvfTtsqhsELEmR5bNcmmfBFHu6f8A",
  "key18": "zeZLQExhvSrMhRqzgbEWom68mWExHvwmPPbKg8Bw3oyE5BaTBmCuugy5rbhD9C12T5q4no52VkdKpnCWuXP9U21",
  "key19": "5EUwGTtdS6fUyjpEFeb11Yh2mLnPUTu1BHTpu6voFTQW8cb7ZUoBs8rfGnWZT8mTcBuhpdwqmoRJsw7j1t7N6Kc1",
  "key20": "hYuotZHsHrTyS7RMykSvP9ixSKJX14SaQEQZjmsLkLGcoXeq9TxenciXC79TV2qqQNPUpDoA3qKzs9khBtaiv76",
  "key21": "37w6mXKhiVDgVgVzYeapiHWr8CdnP5NnvV8c7tCvFEWEfJKvRGU3xBN5NFPkFVCfaHqCJtBfHpdVVNdF7AJPkTos",
  "key22": "3nFBGsjNG6jN4iuVThfyNYpvpC5xsjT9fDPQbd8FuriDrS9A3ir1DnPonjkE1aG6oHmmnDqazAXKbtHx1JTLYcao",
  "key23": "5f5Kirtp6p8woofspBE8nCudzaw3FRGVdxzktuWfTtECuykEj37TQu3BF21BptZUZfc8TkCzzf9wvNTb5buryhTV",
  "key24": "2ZQ2W4qyBd3vxgynFgTQYX5h8NAGnNs2W729Rszha1rt9Dy29gCyg8rVSXMkikg24PrQ21ov7PuWpdrtYfWjfqjw",
  "key25": "ByXc613hHAgHnAfNnCRtAzK8hwCCudTKrMAG6XhpKwWswJt3BTZ1VE5DGYGq7HG7gSAAjbWRh5D7Krc5CNyeSj9",
  "key26": "5a9jfZYE2bqnFz4H2uJ4pnCmamf4rcjXy2S8YQHsZBArx1qcvLjMxt4DNmxApgzcjzznZPan3mKQyHM51YsGXzoY",
  "key27": "4dCp9QeErc4hy5dQEPhSR6BtfrxhKLJssVTa7vVcE7pVUH1gzQN5EwN5ciZWXv4LXMpk98UWuGf7baoUZCwMAbA7",
  "key28": "2eK4t8THU1hbzoBKzByP4bh1uBbDzvep7qXNGF4yNQ6seGgQBw4tsj4sYQ8W9grcxQqq6bHqMFwqKZHWzNqQmaZx",
  "key29": "3p6rKUTCzebjomjhnJJhs6zgLQEPBKVgx6JPauSYCfKLVXPZyzWrdyifJiVJF1XJNQYHPfvRxBVxmPcfgaFgXuVE",
  "key30": "5Lc1Rh1HKHLodk6Mo4qnKxkWzJH5wT6TrfL2T2r7MTc18QX9d47QgPqEUpCn1RCkoEmsKeyyh7sPPE4xWbe1jNLh",
  "key31": "4CxtnC6nei6LT5WuD1aMaRWgqdq5upVrWv3MWDUrVDxQyFx8CRL1CFwhgCvwtX5fLj4uTs57g6VBimWnbTgEd2Jz",
  "key32": "4ydfDBmtCCYsxgq5qR3A8s5hXJoha8LfB5N12gddVbx3N2g2cTXhBWRG8J9TA1tbRwxt2Z4cc8EzxAUqcet9hi67",
  "key33": "35b8vhFTVpoA2BZEKWTuZin7yjHaRcuFqVhtWLh8WX1WS6NvH2o5CWUkmEY7HbAxAhESNq2ELJDGkpuPfqwTDWpx",
  "key34": "3E9ygNZJmEjrsN4ypRk65m4p6m6pcVqecP53KXYsBeXn6BCi9JZBYu4Vn9pK99RZpyZU7rD4Pt3LoMxouxHqi1C2",
  "key35": "2QRcfuCH1TYkMEsvr6QVijosFV5Pr2o8pbAQyirLenp93vafBtTxAEJ4bvqrWXjvsCLmwh7yNi51bk6gNjoLaLYH",
  "key36": "4GfUbACajh7DcA4fbHGyBC87CcvStTggS9PMCdK4tyyzrUTYHq8z4rucuRkByrhBMLMzrUUH6h8KyN4m23keUPF4",
  "key37": "2X9F2vJXhnpuSujXJBrPTLDh97f8JiZ3ovvVhzHPAr7jPKXMJwr2EsQJrtrZvv4tU8m9mDCNEWWeHavFXYVerm4q",
  "key38": "38EKBvvnnmA2y7UimFwfUAUG4T3W1NVVJVEewFRqrFcZsmw5nfSeTn12ZSxoJgTzywpq6ax94dW1URkJ8N1LWn6R",
  "key39": "5Rmg3SfhtYtMCt6rB9u96juUKddynnXXXz6ax9Ny3ebHU6DE8FnVfkdx6v981VpkcvxPWuEseuubaTDutNAyAeSh",
  "key40": "2QcoipfXvytcKGR7HfRZb9tqN88K9s9Frr9DcuhpCWk75LSxqLiB2aYg9Rpnjc1P8jHNBu6brGnvnE3MKTBnkszN",
  "key41": "3MdGzoL5U7WydDKN385Ar8zCAsa7SCy1n5rLNmgXuHSewgRJGQhqd2od68jcJiDuhc1g7riB9ZShJqhEnCtQ5nte",
  "key42": "5yFZECidgbYD277Ure9gMkw3fRNbPbaFETiZ7YBD6qtjHmoBNzWSghhtphLkcBRiBEcD4mmxLV5wQikZECxQ1pwV",
  "key43": "Qbkyih1fSe4XbATbi9vfYqsrJSFPrq1r1sGtD6Ycb2CYbj843AABpNKiJxo1M5pM2VbQGLbE92RYreMePg8iWCL"
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
