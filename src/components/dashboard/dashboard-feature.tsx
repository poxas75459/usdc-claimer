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
    "2AgZTm3RuFPW19FkL6EHQRbpRCfcp3mm1HtnV4veoH4dUXBrTZutWhh5AEQf78CHSLWP157RE8HaVaw5a7c3EKGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxfibmjkgyknM2zufsHRUzvwbZJSyhFeayYcDXz5ZEKMwodg6XYokT2uNRG2wEsdEjfmsbcMoPfeJQPGFeQy9kf",
  "key1": "3Rxtu9MuETrvduCaVq2CUMy8MmQtKJKgBmwWKcFp5tNx43D1TrGJ8Deuii5znb4ZzyBdW8pciYfmjkC7AzJQH1cm",
  "key2": "2deHuWtnw41B81ztXQ9qagBjefrH1vB9RsJS5HLFyV5w9HrAe8rt15uhCjp7YJ1ZG8aEs6gmxqKur66DMSxzLQbg",
  "key3": "2GTe4PAM3BvvLLKiBcEzzJCk6jaDxKnDs6AwzVWmGfJ8HGruYX5T3rTpT9221rJ5HaZr3jM95Ui29URt4FvzQXKQ",
  "key4": "3Zr7BkXZ3pNQzwt1sNvCDjz2k1m4SMoeqc7Psqhst2KiqtRvdzFwgHtgtfdxne5h1qVc2QE8AHPqZaknbfM6kyaM",
  "key5": "2TgzxJ6svk6ecfd2F8Wc9hYST8KDhrwwfxcj8Q4EGbbAHj9apMMvoLkXnzTkPbx3UJLx9QdYw85PVK6mv8P1i5XM",
  "key6": "665aRLVozk2jVxVMN5vDbQctqFBVEEdT9fKcfwkUeDKA1EQ64QnusWbYWLWjELNnvWwXhPivCkAe9jjXtaowLwCy",
  "key7": "46boFeHLCBTUAYMZ4HZdLjrSFGUpGuECRbKx244JsQqeKvx3r3R6FFpAXvvmM4TP4pzYRLizPzy4Q9hvZboJbeec",
  "key8": "5Kfi9d9uU8BKbUYvt5HYTk8u9LFTuWc2SmTgjhT3coC6ZUvk5Qrv3n2MsiFSbjT4jeYbqhMDwNdxjXjqgeaZ4LrR",
  "key9": "4wBZJR4P47qe1pSHaDJ5TRh361EubWYkWsekyVKkh6vmVeVSyy1P3D8gW2DLrjPhnUWHbWrVKbtPY1akCsEqTci1",
  "key10": "3o6vQ2FDcdpeUCHNwRH7jwij2BWwHMyikjaGWStG8LNo8CL8yVvswSjdB4GUHtazNG7BTsznWAPLDZ8aX2ZqyYEi",
  "key11": "2dSrH7YhTg5Nj4H9ui46xnZdFQ5u8WNCAqyq3cDs3uhEAtQtjPiLGNAji1XL9qhZ2hpMacYF134fHaJJynHyYhXu",
  "key12": "49JN96JWZYbDdw5PVsxsEc5k3jaMHEyD4zgdZbTfX1NSLqah6ET6x92NVt3hFJD9Rz6yHpww689PQZEmWqCYWeF8",
  "key13": "4YMcLnY4MGswgt71JJ4HqJp8FX757aBtMENdpK6LckanqvDBm6FPnq3qZQ5CSgWP1KM8ZFF44eeer65B6PVuQkW3",
  "key14": "4gyptsBt7oxvNyddEpEgVL5qpqq3Hev1n23wq6zHywkepkLpSrfdev4Z8He2k3E1feH9g8gCcoAfvqFYtLn6ebxo",
  "key15": "54zhdNLcZypXaVetenGvySniDamfD3BRUFqFM8c6DMhSbvPi76KuSAkbEQvptz4p3bGjQ8uM3CtMY1M9VJKFtGKf",
  "key16": "47SRZv3HVCNjz9nLpjpbzywkFA8taxQ7Yg2Px7JwoY91PS1kdyTmuvspBdpnivQ1KfP5rWELkRmXd5HSPoakfoZ2",
  "key17": "3xk7igLQ7334kGsctEexNd9uZ3bVtArdBELYRWE6SpHwa2AVmS3wFBqDyu7bFVmfiteFXszj1m4sYKwsZP7Q8uoN",
  "key18": "49DZ7HEAtfQY4nrXA3BbLUPZVRnmmKYGWSjxABJazLYHZ5ANEWgGAjbGt6FcEFxYZRgGXULNpdenZCs96jLibCRL",
  "key19": "2n6AHLzFeYGwcMzDDTe89445YSHijUFEBz2cGT6gMwy2UHLDSkXaA2Sg2QVV3CtpVH82nfiPQskZxhiE8tvBcQFo",
  "key20": "3NsfyvB7McfJ4WSTjAKbPg5wzpffCmZJM8VjSJ4NECMQpiduhqZLBQb5Vur3UmnWcZDRDeA4yymsYD63tKrSKvLP",
  "key21": "2b5WHojMctfQLdAheJBSbdEuhEE2LHZe4sAceFgaKspqYs1iPE15U9bTTcL7R7T5Td4aX6KyMXFuTxzmxxE7q1zA",
  "key22": "3V8i2feQ1Fepzs7XTYYb82XeyXwfHN3M5p8xofHZKnjWC6RTC4Ypgkgfym7PuDunKyRrSCYk9JV5x4jaC2V8TvMu",
  "key23": "XTDuZhox32LwyXJoEhsuvbQ4SNcjoLjKn2qYtx3QoqK9KiwJdZBS2cG1zzuLFE1mUmoKsWG5sge19AyHKgR1iYw",
  "key24": "5QL6cA26uwpqr7tyyZEspKzAqJFRMGvUyhQBysbyctK6pL4BX26UiWg6kzqhaQk3Uso14tePDTCx8QmqnNyEyfZ8",
  "key25": "3ZzLgbarWdXGfDZ7L8463RkJQeSbpoQ5m29CJTW1qRE6BPR8xyn1tSpHA34hD3vMfHiKDV8oGLAe3jxpiZMaSu9F",
  "key26": "4j1RXDfQpgL9QCExavjYX1Xp3ss4U8rRZ7BQfd5uxvD8GwBH9TA1Uzg3bdbr8k7QLxW58UgshRnqUMfHnJup9wGK",
  "key27": "4vWm3ig8xZ9zVpUjCHptFuqkMeEnX5qKHauQaunnTcEwjFJ56N17CnERMD9oQpL1VwgUdJQnPsBc7mJzPCF5z8Tp",
  "key28": "4QZZKQWBqNrPhCUVFdKgjzhCV5uo3kAqTYsHR4WVPMancQNqUxfq3T6xKnwaYiaTSRTzcYT2JWCyypz4xcghiAZt",
  "key29": "57DHHMAXK5hfDVL6G63AnK6JWe9Fs7BCA9BfVpcPkPEoD9VknyGFEi1qCD3MNXM1YZF3pSnKmXdgQevXzW9V1wP4",
  "key30": "5Dkwp1w2xvz2EpMGPjLXyGu27NumVjmDwaXbcuH38RkeDtzFypJfhC3obVn5wu9T7obiK26Hk9BxT9ZM92PfhtH",
  "key31": "2svafoD76PD7gYqYBVap11PNGvzcKRrQNzMfiWkqdUV7oMtu9xsUC1DWhuwfSEK1MdU34LKv5u72VYNdhP3bxA7S",
  "key32": "28SacMGcv4MCRhpXhjmSBE2Jd2FAXAkN6hc6ykGvprSkaGsPkjTHs3jhvtroRcraCvg3Aq7M1ZyHYyRF86gCkuc6",
  "key33": "5gygbUzXXSavLV6NASYG6XaHsDnDkppLC6k6wK4jULe5CSHzTGZuTaUz7y8GRQamjYLZzYta1eGsUeUqyjUxZfUV",
  "key34": "fQiQmwNFkCAMPUnJemPm8SkmFFD14XvY7BqaSepp6rAHn5V1xA7PkFzoE6L16LPYh2hLjc6Hh7FaTh85j6W7US5",
  "key35": "3p7EiMVbiX3dHFjwxZfKL33FWUdv2wCtkzu9KYDTopfnzyPFV4dDVeEijCN1qw11vjGQK1VCGucGcP7mtbfQzCDV",
  "key36": "4CyfXT43rarCdeQWwvQdanv4wTtcnMmeLx8Jmoj24xW5GJdrUv2i5oc78YtdnAYQX5hNdsHfae8ookfAjw1ESHoJ",
  "key37": "4pidYiaMiE6LLooC9P5AjBjFVqAv11suxeW3hZf1sN4m6UcM5CfRnVPE5F95ocf8XDVoGyenbDrMf1Yd7kLqvcxh",
  "key38": "48prkyBjYmNf5J6sMMfuMAq4NdEwsf1exXadevYbb4vagDVJhcZoV1TVdLhvb2Nkt7psGErnnKarbEveKLk6pd43",
  "key39": "5WLwHmGUWHvGrNW8XE8DJBWC3L2eyJiYFCjP3gfR6vcwP9PXMjBvSSepajNnN6wLSrvAhR4RCpZsgKd2KbcgrpSz",
  "key40": "5oLVYub27obM61CZpi2DXqP6otYRqTAz2Nj8L7aWSTY7uXoihR72gG1vVsgEVYqLVmFB5YsgEMWMRuHUvdniz4wo"
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
