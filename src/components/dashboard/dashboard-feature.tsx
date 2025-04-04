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
    "2e2xZasyHnBKpxgyv9zEFjeKfd4WxsWP5gb2ooXHU3RjBugK5LT8uBEWFULu7tDgRidPriMMDTdxBZEAH7mHEM2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PX6PQnneBJx8eAPWGmRNMUGT9bGHoXGbo88k6iab9kUSBPgEXaMnJwHD5UBaSi3wv1Fov6MbW8n6nYkKuJAzAGY",
  "key1": "3AtN688TA6M6J112nFFhS4gCjif7p1R8PufsCFBgAH1Wo61wFPT5ST98JjqEAUkgJpgd77zZoRUcfgo4N3yhRhjt",
  "key2": "3daobHaMNUqWB1LMb6GF7Y3rzwhiWqVUMGyd1e1tCoB7PyTjFJPV9oKuNCaFctxXfUrCU4ZGPb1o5udZbev2tzTR",
  "key3": "53srSyEvJ2jHdUYhY4hmet7HuJ4m2YPshgJtMzZb96RT3q98HRmpvEJ5LUqfcdoT9Bzfta6mcNYUAxNEDEhdcmoi",
  "key4": "37dsYmCs21PV3tEa1rqH1oed2G9dbcDZEhZs3DmAGayCgwzDr9bTovJpdiHJeaRdZPfiVVbVkq5Ym6fdvFmuHBNJ",
  "key5": "55MBAKF2uh2QfUirSbALf6vpJfrPEHfM3apV2Zykg1JBiJEScU27P3NPKAGt4gNF54kTyRLmrZjCegFVVJX6nL9t",
  "key6": "4rJXGdYTtzyn4yBjCpT7NiXr2wy1pLdGdU5wpJRP1D7m5X3sfMzd4NTAqXsHAWMvx24Zg1PtZRfV9Xxy8ea6mBzm",
  "key7": "3jpNnVnuWWcaCXqL6yBrDTubUYVkHMxDn7djVoAtUdz1wj3WEJFW58MtooHm9h8mvtSveVzd6RNTAHw8wRJ5x12m",
  "key8": "5NUq5guNKEKmYv5faf24pb2qo625epc589Y3eXEUgu5aWrCfEho4ZzfNGxpAgfSbAK9eEWntesNrnEo7amWyxvgo",
  "key9": "2tjx7PKeqtKtRSDy1HVEY5KzFyDx9CuPWqgbdBBPtkLujA4sTdQFiH8TL9PFNhNAFaJVRej4iFsLgJdc7dpyS2kh",
  "key10": "2CfP8dXcd88STvg8T6JfM8hc9G9eq32EDK8RLxVqvRmQF9BqKnGaiokG9cdBmVswwVkjk3HyMANoT3ZkDcEmVcjk",
  "key11": "1bz2LtVTByZUFQN1PTMKFtFtFrgVLH2fXXxw1yLA4CEVC2qHsJfsxB4JabYExisCKdfhwuE2KJ8Gfg3WWPgEFgW",
  "key12": "5wTNSNhP9RfTdvyHRNmfoETkZUKhXWgANHrzifMn36RdgA49XNmpJjAthNVfnEf2bTFQuyvmw9CyrBVwC8HTqY3e",
  "key13": "nDtDWr2uQsX8CakBEyVNNoFVq6sjYBeP6TVt34nZM3Z4Gs3ouwrbccpdTFhjqHHHYCYFYuYqczzhLk1SPEDcn4g",
  "key14": "3wDTqoN7u3fw4odnQiNJVSeHSmNSVDpuTG728WKySXa1Hp7JnzKNFZqh9zX6oNWaH6Jdiz3gHWJF2MSYTa1XCJzj",
  "key15": "Rqda9iMqGPhNFXb5nTBgLemYxdgdgKvK7ufuwogwRsnabobCRnGEGLp2FjCChtWc9Q1h2sNwvTTNCkDYS96VvSZ",
  "key16": "2w5bhupZQG95SJc51ZjQFo7wacXFhTx2e8AwJZtMHfUHXpExV9e1zixaFBHwdLNKw6qrQPZA9jxSUpEgmDPm661q",
  "key17": "V94PAg2sYs9WRwPXrNcmxd4rX451Z4J1LatQgNbzokYmj7Gn4rXRY6YJCDCoSKnciBb5EUyUJcTjGLtoUAgzZ6k",
  "key18": "3DqDjH6GxxpzNDrxXeMyd4DVpXdhs6jvhHJWxY6CQzLxWsU1ZDNrYfYHLdqcxMzBiejYPjkzxR49wGLDi1dDsVkX",
  "key19": "2FVqQtpgGruLyoGwfZo2uTv8kjGbPGajv3QM8N6CuQhEeojKm3C3v4HqJzmLVV4rFG1ALHTn7AbfQ7NNP81kNoTR",
  "key20": "C4SL6zKzh11i5VEUsqXiCBhyqDBeZt7uVtjGRgPBVvVmFy7p9Runie7Cw58v7vnxd5DuBPz3CWPngg3yme5M5Sx",
  "key21": "5qimPu2GQAcv4vu2bqxE1XjYBTDgwZUr35FWUHBoWiNUTWKA7EbsoQfQqMAEQAYY7EU3WJ6Et72pMFf14ubiscKf",
  "key22": "2ndtmE7N3PYusaiSWaiBi6YebKC2ixQw4ykiz6k7hQ8mvEqV4uZLyHskjz6zTZgsn2PCz2GvrnGk4WJbMKeg7GDq",
  "key23": "4BTafvUGWHuX1dKDZeytuWBGNDZnfGJHYB9Ecii1u4uzMMiGp6GNcgjXFkU7gFzMd2c63TnTvA72qnY2u4XoAa4z",
  "key24": "E1Y4fp3cSo15rSyL7QUpbQwgyV7aTKhkGuhG9YnKvBNKVCeddKWQN3LQXEhCMyw7iKJyR3zagzn8c4ETBAsvD35",
  "key25": "3YdAuTWZRKYgRkiQVD8UeguPbXjpVLpZQ66giHkr8G1crHEjJWsyz1WmDwNZBSfzEez8MgHnmDRbcaqs7HAFNnbf",
  "key26": "6NF1LQxC9WdefsEShC9HnZktJ1khtGdHVXUPp5Wc7cd7rfv1LNC3315Qrf1xZwozBAnxWZAfBZcNRDiDnsrV1Mz",
  "key27": "37TAwTx15a6HzscQQynzcpUuyLxaEau2PPCABErTNky5fuWgft7wchojBdzYMgZT9iphFUEHjoQBbdqHqXBsH1Qo",
  "key28": "4HeC7gq7Jw8WVFEniG8qoBW4a4Sbvquo8QCbJB42qtQH4jBdDmBFHTiAe7mFcZNnjJ8ND8MkdydTX1q2nU5MASRa",
  "key29": "3SpaEg2qcMjzpNL5j9pDdWte41Lpaf76W8DnCgBfMefSJfEZGb7CVc5EhDRXPoeNRhyEv6bxtosGFN1V4E9sBUrk",
  "key30": "DAZQ2XWnfqEmXmisNjgV38EBiQzwFFnkx5gnDFiuuKXscMun4QQFmw2Uj6LDAQ2nrvCW95cAxTfWFaTis1EKtyy",
  "key31": "2UYM7LUGvp7V4GNYv2inkC8VzNaiSJyLtQFihqoJNADPk41cphz4PcbkfDj4AvL1cDgqPv7WRwZnJk3B5QyUd98h",
  "key32": "54F3VtMuiyCh6BMpQKVq78Wh5FnsoSVHaaCRyi3TVBdHXu446aS8Ao8aUrnyRvoysLsuUuMgex1LbWqFs7CEhRXP",
  "key33": "5sdPMLcmBaasEZ1sQMvDnmbveB2VLZvon8YyePwgdD7DMhkfYEftevpbkAL4FrSzdTkm8GowZeJAe4Ptz9yeFdCN",
  "key34": "2HH4xEbE1jL3p5xcT84m8LJDCEern4shgpqQozrBdJVP8k3Tzbum1JzqRv7MwT64RaTG3GwTJpxgps4W7W9iba7a",
  "key35": "2ygFy1N6zzoMHpwrHWTmEZDpUkdTZLBGPxDjHKtv26rsER9pJnKcfPq6SUoK9zJyGyxaratC6H3tfgS26BmKsPx6",
  "key36": "3hT25eT9cbKBiyRJKvKX8V35d1HGsJWy1vEUcEnv4hWPWEYJ6dcwNfyYxU3f4ds1gph2VgSEyA7Ex2he4pkANR9R",
  "key37": "4JmtDZenQKEmaQqnoxh9hmj3HhCzMPcqX43QCZepHgX3ZfnecMPXy9GxSBKANDddcdzVVH3J7XpQgxm2V9zMeHL6",
  "key38": "2nRz1qCg8r6HcJnZEgnvB3uV7xMzZfogETUFyh82uEWiBgU7mh8irgDRB3Hvt1mLUCxTCQfTfqYs34tswhFgZNpX",
  "key39": "2pt6eY5jpqR9pvF1dcjYf4gaJkuZEZTKtrRnxDDvB9bjWkqmyAAkDwwaqXQrbgntT8S1Hh4UvQiCFsMythHowXPF",
  "key40": "3VHxr1isA5NVJQGnKHoqyGqjjsLjAWiKuudvpFjMYkFV1CT4LEe6W1zUzKtuXESV57kK81trymuhZHf8QEch1SPJ",
  "key41": "59VqzBRz8Vk7i1xc2y6BDciCT7ZdZXEiR9NoVcHtz9xDsYyKFtpAfzLRp6bX5RYPv6or8P7XsZXKnVMrvuMLm1Gb",
  "key42": "2VEzaRtVdtR6SPT4h9f9dfQ9BPvTW7UShrYpJZJ5H4yycE8YgCMswnReCjqDevTazTaxsbLQBxLtkxZA2Pt5M3PF",
  "key43": "KPF164us9MiCavcMsnkY4xDcNESdWYnofiHVUZQcVizJGRk3KjmBG4dfmfDa1H7P29qVPvzHqqnH5MrTdv1cKoY",
  "key44": "2V9yMncHvtzGNcXUiQg1efMVLG7361MRLtrHt2gmBV7CgHi7wrrEnhaV9HKq171UPdQGVVK8L2SmDNQhXvM3R3ay",
  "key45": "3RzwqVA95kgBoMTTgCguo8ntJFXjLxKB7ESSrpRqnKvoEto2z5Zhe1YECzqppPvPKKTrwVxvPYRoBiXtvLtGDSaa",
  "key46": "4PBgeUKxZqiuCFVcGQuoVMyz2MiMFtzGxffmW1d4MFGVguK7wsh8KGvF6PW8eVh5peaz8rud9JutU7KpaPyHycxk",
  "key47": "SyDXU9yoDbmZTFg76siuXBKQM53MPWpQLeobGQmGjSdnyGnUhYJp7i788B8YJiyLXby82p3Pz7wnoiNCXQ6vHHC"
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
