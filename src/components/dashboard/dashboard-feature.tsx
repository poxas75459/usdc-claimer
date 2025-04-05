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
    "gknjEsMVTfhfGjwE5HKoWJBSsskJtpRHhndBDvkzuVGH1B41gXHeQRQ16is6eD2yjtpX8mNRqcTzic8GwYiNSei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBQuizQaP3UW671SBuQcdZZZL1Lda1vU9YwmxbKwuQDX69cdMhKJFsudfEdm6yvoNmXe7LatmL31iUtBQnDCbXB",
  "key1": "3kGX1E4hSkgPghAyEFdtUwsrcBNMAz4kmWCq1KYa2NJVsbXTL1xtary3Vcck4rSLZdFGhATLGnWppYQRh9PAViNq",
  "key2": "3TKXdGRTuibmkVQB3rBemAhNaJsSU5vFWeoMDSAeLWGdGFvjzMvfvhFtiyvga2HuY7jzMi5Ad6sU8zKExgRh1Mys",
  "key3": "5xRFMm5sPV6t2nUn4KMjsSNKDEtfXRsgovxG9bemCLGzt8FYZePzQwCNq79qYZQto1KFTfqtBuAjvC48oBRToSSp",
  "key4": "2VnaX9QDV6zf9v4BoRC1fSBC2zNFv3hb786765HKwLY7c5m8uEv9tXPKKHyvkLP4sQZd4ii2jGV29cjtKQcQG1bf",
  "key5": "4J2tj9FdU7GnD4cCeeV6tMyeufC4UpjeGWrfX77JiK7SXVvdN4CoCJGSLhX7Ta64PdQC4tkiNL4uzDA7gMhW21dw",
  "key6": "38QKCRvyiyAgnz3QQqYb7mZgHGG822nygFsGA7VPMpvhfFu3ZGUy48nEp9eP54NTBd2iyxzomxevppFav2iMNMRz",
  "key7": "4ZMYAeUSh3QshKy3ZL92DtPuo5ee17wpgc8Xn9rXQChjetZEiQ7vvJVRtmfgMPiVMwKMsirRYMm9XjXgc2Dd1ncV",
  "key8": "HffErp51T49W4uUFQSa7ewxKbX27eXNYmh2iZ8vnqAV8rS2vD1RZFcjQPsEcwtiu3eEP4BCV1NueSWXLXKiLJ1T",
  "key9": "4MMAecwxdmBVM7gingbpBGQ47HEPMeEcZk4aNMrnTZZjsDLe62TTWD28q5YYiiJb9KKPUnLpsbcdBouf2kdhyNh6",
  "key10": "37w1LbiU75ybXNsM7EpZSHs3qQjJknxatKcsnQwd9e2ZcgYZ6AMVKxSUfxdi9R7oFVZMmd5XSphcFjgmy1v8dRyC",
  "key11": "mJs2C3g5USdebG2CA4TofL3pQUJ5Fjmr3q8FKSSMSq2ZVDCuUz2okNKHq8a1czWhgSKf8b2nUTJbLNC1g32M48E",
  "key12": "4sMuEkGH9Zj9TaPKfCDjDkpapxoLj71MkZBehaGQQSnUqBtZdFZbBLjHVeaT1hHGZKUHf8Q6WV986qfgHGyxcJa9",
  "key13": "3dbds5FLzhmyKjD3mrG9ezEbFeTenjCoNRznVCG7Vixs1kq8WCPgZXBKn4p3QfvHrhrVoqAVvXUzFd9otQe42UwB",
  "key14": "4YY1fgDKCQTGQGtwxeaLf1mniv3CQz2McVsn7AbSDYAg9p6MWmZiLqgJCq3nJt9kdTaw5Pn85Rb8Z9aUmnUiAz8t",
  "key15": "43p9vJiE5zjDVYscKewTx6c15TJW8W867HnLU86RBBnmGsT3oPhvzg8ZKgrw8ARRf8MxM9jXSZhRwBTRhFS2ppfZ",
  "key16": "61pmfkP2zMCqok9XecAYSz4BzznbHSc76tQNxA1WkUe1VxGunEkHmze6AJgVPj3xDbjTWTQRibzbTrTtkVwxtgd5",
  "key17": "41e7KKgYUoLXig5g2aGJbBhe26RCGq1eSVuCzxCPRrainhzawSR2N2DVSt1RTnNJHWNCzfQmYGJtsa1qYw8WQW8k",
  "key18": "56qiKdwgvKokcYVRFkq4MGPeaKaRN3JcszEowfBn5ithTS75RUhv2E56V8tPoj9fgZREek92CzTgdm21Y84QqjMC",
  "key19": "k41dgBkVFSBwidakRDPQxHz42pif7anY9GfXFrCdAQKMjJaMwJSCWwopBJgopUMdJqiNbALM5JnF5FSSPRAvRqi",
  "key20": "2GZAdLi6C4r24WHjJ5ULHAwzZQtuybmRYnCCk6pQegta4tcmyureLqFTXMN8DoXNcDrCrW6JVwZJfpvPukmEUxzZ",
  "key21": "AdFjCjcSbRujWFvqXf5Y4cKo2u7bvXvQ9PfeR5MniASzmjBHtw7LmQihsEKSKGFpv2UZhJNW4LEcTWyLDbT5dc6",
  "key22": "iBqvjo5YHFpE4btDG1VJB2cyrkhrYe8cpdHVJ7MymX4WTRqK48xzStYhN1spPjjoFdJYCPDuHHDF4vGoGa7LNSv",
  "key23": "3vfTCFkZoLmjbm9UnSgfcZPumEKotSRmA4br2xFbeXnVrDkkNhzfqzGP1YokfbXbPw1FRMdoAGzGFipnPFpBcmpr",
  "key24": "5euF3AZPfQuC5L3FVqGQXKQiiEv6tfynhci9QvNAukxNyoEc8Uyxq3g61eiEqdoG7hk4J9QymediVWbPtWu336Gs",
  "key25": "5mSJyyPWAg922kCfSxdZfbZmAbiHbz6KrUhmfWoirgXRkCDHaPt8pX5HDybeHqvh3kUxdFuUZmw1QuV9QSCEcEm8",
  "key26": "34eiwLREUfTAEwoj3zaSuzT4bFyEVuDgq3VQzJFrAFFWSKkyF3JC5VHtAyxSTKfkcs5sA6s1BjGZ1yJgrYW6vtrp",
  "key27": "2nTJoZkr5JBuwRyHp7hfj8YCgSTP5FnRbC7fniuJVJWpXnz4hMdoYmxtwYB9NY2cyJV2eRA1Nrdy35Fm1nzK91sE",
  "key28": "4TQuZa7Cruo48wQnQzzFSjDqPMBnVYuoX1gZVVMCv8zx6LkwZFqHg4911VvAVkT9c3Km8KJzbrVFQoVFhEn5cPdg",
  "key29": "22xRjFV3mm7RRA8adqpAGVfHjQmmtuDmAp2ttr47euCtvNUp23aMFT6mbRy3mfUX4KmugkG9m28QvazhmRjFWhyy",
  "key30": "468kbtCE3jaLTeupb6CHbHzxVrx1ZefbdjkPkhpPKxt3SyJ6TYYNLa4K9vuvRaMf9GWmbnW7dfKP4S32ZgBBsaqE",
  "key31": "eaqL9x2ghCfvtYMLKci5DRa8dF4km11x8RcvjioqtNzPSmxi4GypagkKsPtH81k2rzxcPpYEiffYm7HQz65Q3rp",
  "key32": "5MnuKajQJ1X6vM14hZwiRkWetb9axwgcvg7k33wFLLkqt8wceEaU8dGynTmCWdmM6zBmTgNhR7EfyDRPjLVjMzqn",
  "key33": "4ARAbkxgYUUmuAJzsk8YJt3juifpx2pMGTFJHRB9pZFYK3nbUWx7xhHjfmEsLaipUSYXs4d4g51hfVqJ63UuWfSX",
  "key34": "3Agg3Bs6K1JiwEdAK8L7k15TedZoq2TSNng9FC35etGqVLabKRX7nUCrSg7K2TJ3AQE1sUnG2g3CCxhyPZ6HwVo4",
  "key35": "3r93YtF61S5jEtawnZb88tZFa7R8ixw56aKTiMscPjfoBMWqqo8QCEaFQdvML9ueFMiizCZb2SqZQyxJSF9UWK8n",
  "key36": "3Dfh66hdJN1BLtTf7mP79DgUCKueiVmPQNPPS1G8rBxhEcpA89jY54yNxnT55yUjmSDV8Ff7aUsGmS8xiFSqVoba",
  "key37": "5SMR4ESMfySmbH8xEjf4qTvAhj3XKhuQnZRaPSChx3UwK5Q5FNthNXprsLbosPa9hPNQwkeBdvp4inow3XL9W4i2",
  "key38": "4j6MDjukDDAkTHYW9yY4kB3MGVUcndz2EFmJrTktuUD7F3B7NixBeA7TFcskWRJ3uKL1as4Ac4kBrhqkhwGCiuQ7",
  "key39": "61L4M7c3n4GW2uJ8CvcRUdu3H7YApeKtSovjTtdgkZro6GKSwPboxZkuvgroGoBztHTFnzGKBiUtHGZDLm3uXoC9",
  "key40": "4fcVGvmFXJFw5ZhdnAqe7B1F8U84rjChWu2UKAT9tYVF7CFDvfwbzNubwFk6FkFv4oc1QNucwbQR2Ai654Mv5rPd",
  "key41": "4RQXDMhMoXke4jzPbhVRwwGdmPwVgmoxwfMqqRWQQ1m3D7H6TmyY3W9Fg5ZcK5GedoVXHeLfaXyk8Wk5NX88zd35",
  "key42": "2LD3C5BscEpaonDNK5o463NpxTLxcdWB7R9ucAPbBXKoovBVNS8sPrRXtcPAx6zQubEHYPViVSDetnEW8EMbNnrA",
  "key43": "4LPwgY315CijiWQcF7RAPinJQx27CD5mowaj2ZLSf6S4LMHXetcdsJbmZss9Hcv5W2P7FxWb3CVD29aRGFibBZ65",
  "key44": "4F5vEsrEwonZjy9mNV3yNNTBDrQkDZFEhgW9QyHQcb92BM3GaV5LKwBiSGTBHFb939oJiv7bpJ7snzoPD5C6W59C",
  "key45": "q8BZUbXupcpSkM8LggEjX3s7ZAHvs5X3wpznbhy8wGQR83cmH2iGsywhtsxAvLeHfC7X2x1GjLA3AdUNdKpCKSn",
  "key46": "PssTb7mjVYB4hXNLreJ8WfPdQk2Fd42BMEbUA5XcAuFWyb69417o79MxmUmADYon6mixNaG2PnrXgjdw95JAkSV",
  "key47": "vS2CUyK1oTds3rBtSNNokWJUqC3XKmbQaDnbxWe1LaQZMCz68szN1DaETCRuYUouNA9xuC3KjxvPsatBGXUjrVP"
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
