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
    "A9V97SFwxydA3mwv7juMmT5YmSu8q9S8d7wxfKGdE6wnVqVE262F5zeFjUG5xFEx9anSuJDskhgaNUvxLSQeTer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHXJKYRkkjRFojpXCSLnSfzaBwAaX77gQR9Qu1Txbsa99bJS7TQga9jtHRjam1gzy3Mag5Spm2MoAikrXi3PUSm",
  "key1": "5dF6a9akjmQkh1VrgPY6HSso8pBTGtPhx7o32fy4h7FzkjjJNiFzD7a4JFo4H7PYtpRpmAcurYjqkWscvD4XaE3H",
  "key2": "55riPidM83bpG6dAdB3Fdy92LQLMGSRXYBZnNaQzrANwafCB4dFYQEXAmy5zZnFiUCVxTzcyxJgksYMMDgmSRWs4",
  "key3": "3wqCrFpR1DvZoeM9h77kL4xJpEkNDGS9VDT9Ueyq8aLCb83546FMtkXX1vkCUxhxiDhgRUoSZfvm8U1hP38kv5Ws",
  "key4": "2cz1V3KtSY9othECRrw4T3jHHcp1ryNJdQr9zX51ghHB5EJYfB1rKdnr42LpeerDrNA1iFwQMkBNLDPqHpwRWeyH",
  "key5": "4TQvNvU1eKJ5Fac9kiuoxoiEX25ctK48JJecLigzkbkfdWXddXihKxPSMNsA9qXLVy7fTZiivewBEv8DUq6ahiz5",
  "key6": "4qPXvTbEMVtzt4DG2hMTG21Qb9nNajFKg7xCqejf3MNiJnFNy4YnDXVcEysSqBG59SfQ7gmac3MAWnHLMHqMpuCi",
  "key7": "2MJgoKznzy696ATViEc4UhNExAaoea61ww6mHBX1fDJ3CfEBAvXNvLoEZZcjDj5dTSmbsrMXieiSSMuyiZiGagCK",
  "key8": "7ioiK5uNZDLFGSrx56e8BNLu9kxeVcHjY2VbDyJQbTMQLUTLT5KFi3KtfmwmsnGeRrcWuaVF5GMkZrJsQo9GkRN",
  "key9": "25e95nh8WrrsWmsh93RwD214YGAPbeYKQLpowBxL3Qj6TBSevXDDxDB4LY5dFqA5dK7vst81r96uoZw9EcSV9mXh",
  "key10": "2CYtZmdF5ebcRnvRVAWFVas5xWGBoYm6cwNDceaK8RxvYztGuJk93WrW51LR1smsmuYUvtNPLH4vjJ4w97pqjKAG",
  "key11": "4QBoGZfiTHsNH56vF24mkPzwwCtcNNynJD7gRoAHBvduZGJq5FYgQBbW7j8h4B6qL4oA1aXkNQS3X145XJiw8Pii",
  "key12": "26S1apM2LVJkTNwbunYxVzp5Fpag62PM5vymbfkTbzxCSE4f4Tr5zJMTXvA1v2VvqX2kuFuxJvffHAAp9uGsszSM",
  "key13": "5bjAvtxBN1PdcihLAYPgdeAaTHshSjQrAZYdKo6Qaev5iUG7vTcuWDXcciMv1sBE4T4e1EN15i4FsoHGGCgeCtR2",
  "key14": "57F2Bd759JSj5anih3NpfdED61pMfVrYUeRDvnfsQoY227diTXrd5aufmKZtMyceQ2suiazo4wFvxCMKopYzWvYD",
  "key15": "4CFk8UqKvsohW1grALjkv6v5tmUTMHFPCY8rZxonW5sxfxQRU8URPUct1vmBsEWEuCeyK6BjufSBHCrYwihueP7W",
  "key16": "zyUxc2MxNdShDmVty9ts5NYEsMR7xoV8KqjhR79HmnGUUQ2MADVfyhr8wDwCKLXNnfidT5NVFXNTmBF4ay72bkf",
  "key17": "3UYdD9eR53wqXzyXDNVhESPLkmTW8BP7TDEnLVFdhppokjdXfqqprMzGDUg4rXrfBBxsoy6JxQKZnBdYia5wt54m",
  "key18": "Euvm5uWtk5avkQSXnvU6VaoFtMvienUAUnjpzGvHnAG8SRHfdLhEgbADQnY7srN6vxafyDcPC3x94biJCwRfWGF",
  "key19": "gZH4zVA9y98TqdnfWk35EdCLBLEFqbERjvpFZazscRnGzyZfVQaZB49C99NsG5rVXmvBKoMnPrSpvoRYa4Drawf",
  "key20": "WCmhDDpdXpKBGpu6rueCcfzmSW1DrTr4tQNTb7LXdr1nspaVHogBAxoa9JDp7TQtvWJA7SEZiHKpPoffrMFNDhX",
  "key21": "4trUnamxkHVLF6WrGkPEC19mujpjFnPZgbDFwRAbCZ75kGCBgfc5zRQjheEW2nXE2XuUSE7xUKuDXfsGmrUjbMNZ",
  "key22": "3oAMi374Q3jpxJJnm559D5Q3t3QUfevZrzL9y6JzmWNKWzEwf4zYKP9MbvVKEuQV69jw21SvWkqAUoGhjKKaDwWs",
  "key23": "2XRLNDpTU7y5ekytYtQti8XZE3kNA4XSb6P5uvuu1aDt9jjgTSBDuBMrbf6ckWfWehWaz11WhvzsdwWozD42K8Sd",
  "key24": "4rL4mwsZLKZJGRdSnJfZcx5Z1gfT69GKMu79pgr2YPj68osJsn2ARGoL3YKJ9CSSrouPJonNBrWezQLKGbtMaefn",
  "key25": "PyWVA1RCCDgs9RUyJwGpoSW7aqA8XZQmAyxnCcVG5hDfE5xZbyXas5KHzCwVX5N3wuNGkLbFxDaVuXhPXEC3MQp",
  "key26": "2j91DgJmyzFmdnjnF3FcmCiT6wJSrwuhFq1eR3vCN5p3HqRtRG1Q95f1nCNLjgsLKF8ZEqXo2mUgxvmnCfcoe3o6",
  "key27": "5TrxQgymP7EYDjVAm5g1RmUdfaWSfF19SXpyJcFKPaCUvupM2ArXSa1dfZnEjZoz66YPqBgLWiS3tFMQPUautp71",
  "key28": "3wL8aeGk6qNDrTsMduFp45za2RNcksGD2zzPZ9d5kw5k4zKxAZBvKUwJXTaShXzfDmy7UHGuExHwpbtwzUVaWTfA",
  "key29": "FjrSiDndYvmMfzBAt2vFcXsRWmzNRXu9zu5QCM5D8Q2D7qQqFUhVYczEcQbZWSpyujR7sCcP7Loh8eviA4Grzgd",
  "key30": "5J5LGJC9KB5pA6MijxT2nhuH3YMDK3gv7zeVyR6EeKvtX5AwpawGa5qU7gaPR21Jw3EReKN9nvMPoEraYK8ibDTX",
  "key31": "46KJyH2o7SFgwJNKba4iJUy9jEMRo7mWH8Nzybo4atGCC47J4tufbUH7S2USVhNpTXXKnPX4ou4m1q3TauuW4qH5",
  "key32": "2Y7PZ9ge239S8HqKEq4rxk8e9r7r8CTb5KMp3jcN6vR34sTgMpFq7d8hd3w1dxWHx8rvfEHcYjxuvkzK7pSknkyn",
  "key33": "54iUyCq5krDSehDFyuJwNAtgzFhXu4YrBof8p32USkSiKzgWshzdTW4hf3PFBXxUfoBusp5VY821JNCBTJeVAvRv",
  "key34": "5Z5YFw9rbdwmSywr4VSgyQvCx93cT1CvbhUH8deNMvYv1gM192TT2MuvjoC7qHNF7NwSYDvUBns1pBGphxpAeDr3",
  "key35": "2n8juetSyC3in27ftXen71U5hZV98iTXexqH1AM1aCG5nZbdgAFhkXzp8dd2qz7b3LeMir6hZsuDexPNxBBf3qMN",
  "key36": "3nFpNbSgYFpoB89dvreTFKDxX2qrkKAHqMxdYGeEDaCYvwY9MRzYsNmH7h2mn8Sa2NiDWC7nP72ZrY1DGDrHc4aS",
  "key37": "46hi57kJjEvuXmBC688Cij8GvgkLmhLc1RTTzWWvRMJFwmtJNXwvFnvyTfbxtzmHjuovPWEc4rhYbPtD9pMLV2qC",
  "key38": "5dG3PhLVccKDiDQ2fgM2nsZkWKsxYzRGJ5WnrAkYXdxFy4txrZogYwfvCRKAMgVkmZFaTqinaUFwJXrLQuk2bQL",
  "key39": "vv41L5gpBSNXKWX8go3jyhQNaiaGUtr2ytuAL6xy1emS7jwE3GJVkSKUbs9wc9ZRnMHr1fAZmjYrCrDWCNuLe7G",
  "key40": "5dzuGGsunJqXzSkphXwMRTA6ydFhNZiN6rj6uQPeYbAq6JZY3H6dt3WagdfMmZqsXbpcw7PWznt2Vd3cwQKjMyZB",
  "key41": "2QhgPyuugt3bfdRi3JGrZ49tXpQdU4fRfYmACD5C2L21pSD6n1RHQezkrS28VmMDJ9R5oT711YYbFpxy12nd891M",
  "key42": "3FeiCykfgG26PZdLK7ukbinKGezpE83YT8FVattRK8gx2BwaFd6zwK1xoU16C4R3RyooCX9PqHhnNb9Nx6mP3uow",
  "key43": "5BanKqx1mcXr93eZX1V1rZizbPKN3YDaTMQKeWmutcyqJuWSGAwXAYcP1iXpGFgE9E59eQWnSwkkXGGRddoRkUj1",
  "key44": "4aLxdSEVNcdPDWqiLDpaf2JPtXhyKnLgo8gy1mS8MgQLv7hJcQrApyLkdaMQbDLbhymhfGMcnTFGHWHs2oqH4tQh",
  "key45": "3wjHdXGJtfw5xAikDejQyeS3WdDSekxpz2FDRrxQeSv4BHmSrVhd2tvbq7wYJ2Ydjtn1aC5x3EAGhhJCuKSZQ4mk",
  "key46": "67Gpi7UsQDgDVf8Pq8ziRPLsLfWR4z9GETUUVkSbfGuLCXESV1hghfsbFhKoAL1xAycJM3J3g7ywwsLpMiQhAEvT",
  "key47": "4cBaCv7vmZqQit5oUGA55jNc2zY4mH7vVEwbopHr8qmJzTuP7QipDTRmpyUHuAE2Fw5me1tHiwcLjNW3EABfnJe9",
  "key48": "2nxAaASR4wTY5aVehvb8oxizyRbfQaUG1PJ25eLD2H7C4siE5oSw1fM9qhZjXcNfcYGPBSM8sRrwNBqdkZHk7djZ",
  "key49": "29UNWmGfChip7EjHPNhEhgCYHsDN9dsBhF6o3kF9Csd5MqewWyXSpUqxrusLBfJAyFTr4PkTHrdhpXMuokWMKMVw"
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
