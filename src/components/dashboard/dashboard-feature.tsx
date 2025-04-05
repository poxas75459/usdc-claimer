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
    "eVQgYcztdcerA1URPYxS62nbQZTqBHZkSaTBqtA5miUaihP6bhJSSL29pfEQnZr7Dsj1ta53G2QDV1ufq5vc7d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXjzLPRzoeKXDaEfdF6EgfNX7pcuSzxeg1YFoAU3dT7fQzaYUboiiv4DM7wq6fRXNMCv4mmUyhrVWEuCftYtjYk",
  "key1": "3KFBKL7UhFW9zAVMYRpsZrUsL7HozTKDzoueiBRW2qaUcKsBvwsqMV51u41jXS7fzooxVFPhroNWQXQHpAjjEdv9",
  "key2": "4hJb3wGWL5qDwQNWbExjxwoqTKNr11cseTVKXMHej7VvDGFv8cBiAWBs9yvfgsiSgD96jzcG6aTyQi3uSbUixU92",
  "key3": "4XaS8MQepB61Ba52YKWjcdXPzAafKtmD3dSt9GeRpxFf6tsRDTUPvfd7nP8FsEyYxqNWZbywsMxZJTtFMoLf75rn",
  "key4": "3UEN6ToRqvkLTRAN8HFDC1NMYEwrNFYi6UsH6HDLddLpa8SAa9YyN1pd42CwtAWXD42LmV8Jk5qPHUKP22pHgVeF",
  "key5": "2fQNmV9X8pLgSioB1qTid3uH7EqVmhAYWuCpVHFmGYJgzUYu1hungYcs6ShAadZa96RpYktNxBrEzXxnbbSxvsbM",
  "key6": "DqcAf94rq89YjZMKCj3QZT5oVtvCerYcqJJLYGtAtTeWXNc84fm8RKFGrwGeqMHuk38TFfQwdXDHZHZp3DcQui3",
  "key7": "2viBm8YcPHXn615dDWyPk32tb2jBGiU66XYRi2HtRtwuWphW7YpuNtq1NnNttE5TPkx9UJQFCM5wVLkjG6zdqsQm",
  "key8": "4c7yLwWWeS97oj7Jj3enbDZtSXPPknu4RUWdqntBc5iYit1tRNfppm7jQQ7FMunKmKyhXsrEUXKvktAox5Ng9MAV",
  "key9": "2ww6a6RG7hFxQz2LMSE13mmqcxZXqCCGc97joHSbW1Kp5VfB3RBFxkNYJKYg5jMqN3puTZ1mAGgsykfeSHxJx6qx",
  "key10": "1RrPynMeaC34sKbNAZjYjmMzfyHYjicppLnCiCDb3qqFjJofhTvjTjqwXzEsJJyPQPh3Njwbd3SxwoQdMa8hdQD",
  "key11": "3gL33hg6ATfHP2kBg2Px7vgXFtZMzeBYrmZeimpTb3MvX2sGYiyzjrpXCAmXiFxFXDGwgQhFb1S632hXEXDj8oqF",
  "key12": "4n3rtR5MGffsuMyQ8mu38EcT5knfN76A6UxkD2Y9Cm1naykFVHKkjEPuGPFd9o6CYz5B15SyMeUXrc6nheQbPSA4",
  "key13": "4Z56nGvfUEWM7uvxqnUrUnonqx5AosQhDujyA74CynudibQFBdFPVrvxrA6UMygyN5e3tUF4uqAEZsHV4yRVfoap",
  "key14": "Y8wgXosKsWydqiGsRkPhSYjXoTmdyuGNdnCe6xdppsZjWCtpoP2u62Dx411TcRRHJoGFLEv2wcH1pgt5SKkaHST",
  "key15": "3uMBQetJBjBryj62ZqNRxF6YmBXDYb2GmP25BspafmDCnuzCD8Cu9bej7svoiorAo9Dz72FSpCLDpcrhwJbkCe94",
  "key16": "2mS4zDqGqnVQiyNeGVKhRSpJpTZXvL6zD9bo2HMAYD8UPXogTGeuDQixDiBEP26TT51efcn52t4s9LVTQtX3e2H2",
  "key17": "3GV4AUyLyTXHQQGCqhzgBQ9DWafZqAywRBQp8ybufA3Jid3qVsEqzCEUhbP3L4HRF3whb6BgVe6YsTdaUgif86LU",
  "key18": "5xK3AiVQfFXepLropiLykLx78JnmLHwNxZpAE34FoEsmPp3R5u3RJKdymoj3egD341bzb1s8Ndt9JST57WqZ2UNa",
  "key19": "zHb13pXmUbMSasnrbjP51RDQnn8XvezczybMiJNwAQZxwCHVVTq9jTsDg552PjzhxJK8iMERPYmVqyY4i2BemQA",
  "key20": "2UXMRCDEVuCwVHzdzp7mYpxovvQVYs32mgSjfAHg6jVtq9VWfYXJwEF4K6Yt4bFoEhYur3cD8Q2kLLj8jhtf1MUH",
  "key21": "2PHERTzxCgURMNoVS4sgZEG9bDDnuJraFBv2uejDqpBVZjwVG19A6BF4wjaLck2yGL3EgRFnwjDYT9tv9C963BsH",
  "key22": "2xn9x4FzyoKieXn8xAj8vuUE5b5kKWaCxTAe1vvJYVcnCjw6GtVBXi2m1b3uhW3L8RY1GtKHJmhj6Tn564B3v5pD",
  "key23": "hJmwyWjnotojs7nWnKwbwMKcRM3LAjns5LyiPwYCXrMWoBV1TicUoVNmyz4wdt7KQ4miTGEScbuaD9C17K8zH32",
  "key24": "2BZJJ668WZq9b2iRNSg6sWkUWAjBZkFu7pNCZHvW9duxY9CYPxG7P5zu9k5JYxsomkceyic818zfxS2koQX3QpEY",
  "key25": "5G84vS32Zo89M7cUqxNBihjBVM1apzmgEGk8SQozsasgKoXSTF6aCkepJ4VrT3Nh7ErGaaHjh86nWVyUSCZ98EDK",
  "key26": "5R49CKeTEjbJEpZCcWuVmAu9GGuFTMQ7wVK5TEZC2cZt1u9YVHvpbCyqRFKBvXttZVQRkzvbhAtJvZ6hPdvLjKc7",
  "key27": "3xwwb6d51Upy3G2JEJSqdhXq2o63VKznPpDjjUJ6M8KrmUbAD6ASBKECUAXrpPpRnkyjmc9kurnqQGCacm2T2NQZ",
  "key28": "562wwc3hGWiM7AAGDfBaU8vkmrDQgTyH2FR6u1o34STxnCuVFs8Cp24TyyDwdXWej7vJo5Px5QAbpkE1uWLjTRBc",
  "key29": "hfPTLWAXpUpKqz16jr8fRMydFxmpnz38CfmkGJgidknwAYACGCsezrC43xGZVJR8LQZq73Sz8berbBXcSpuhcU9",
  "key30": "pC8FpMKFLTA98Y6V23ihTJLkBaDyB9Si3dpcziTBuCEx7hTeDokF41goRYNhWRtWM1mgae6z8Z7PqaxvKTnwqbW",
  "key31": "SNWnbnYDPh15zJsik5HeENThdpiqRfmHvcuqwcsfBkjjcLUDxrS35xGJi2M35Kfber3bbdeQeQoQoVvbupEkrrF",
  "key32": "65vShLz3jS4EvWTEeF75aaZTHDSq85yuTH23yAQBtT4TyQXxP59ttQUpVYEAFD1pFerjWC6vFMHuHDEtXHFWJtZ2",
  "key33": "2bVEZoprA5K1GRditzf3unsk1e3X1pkPiK1hfrckQPVTqWiPAyKZpzQJDi23ZK91zxCmM24GhcGj3dPPxwv9k4Xj",
  "key34": "vHi6j9Em55tFZoC1gCuMjkPpF9jCPUTmCkVnRrxdcfPmUH5qcxTzisKXuhATwnv9w2EmeoXy4KM66EcicBheyzT",
  "key35": "Me2cnWwnzBs2wnbp8GYmzUSugzs5PcFHd2NCRtj7S1LznWoaUcvg65uHaxN8oXvCVV84Q8o6UrB8rhz61U8Vqnp",
  "key36": "3C4mndPaCivQ7S7Tag7eFqThJnkoahQ9BtVKEjZCC3NHTV2U3NDkq6LMkRNHno9ZQe5SnmoveFXfeaQrrV8Y58UF",
  "key37": "UQZA6Qeth8LTyrYuMwkJgtQ7BeaCGtd7sn8dxHWkeUds6iWsYSPF7mTqdTX3xxmkoV4ZdJ6vJYsjwcr1Xr93Fcy",
  "key38": "4VsxkDhduq4g69K3gRZtwyeEXCRNqtZZxLnfvxUbjTiatxf7ximtTqhhyUtP1D3mW1k7Z4ynrdEgDYXpJ6uc2Yce",
  "key39": "2y7aVCrVigpX1GdRnnYjvM16MMGpj5HdyMYXHHNmZpvYzpfxakaZp6RQX1yNJHedWN1L6kZn1xFJi885s3YhELEV",
  "key40": "2qJhms4hP9kbH2Bir5J8kj56YqGFdyBpMQtb6QmvJG1WDsx3VnVuqEaQW5KNNDXRqXc6Fo4T6bZ6A87F7DpVmfjZ",
  "key41": "3bDbCrD1R1dNucj2s1bkLuS1tq7GBY1WQmxHwEzBGpJ66V6KVtf1gDhaZbZnaPmL4XX5JEbSSy1gGqa5s749aT64",
  "key42": "5bwV7zJvXkUhmcfVg5Qt3qiTqd49hNvq4D4NAzfn5hBjU1JvomoJaM3akBWNgH8k6sU9DGGtgjrPEmQuKWKNS4s5",
  "key43": "4iS11i1RtduZei2ADJAHRJD2dsxixYCPhazr6e6aqotPcb8SJhYRFgRUCM5UEsixAM3Lqf3iMqdonSxMSNsvrTHt",
  "key44": "3QeEGA4QvZe44WWdu9tnGWL2hH6T8fuggDFxngYsQjg6DamzSTBenCavuGbGmjuE1ohmqgdxturkUuqj29Xs8s3b",
  "key45": "4e58oxs8TCbQfNjJf4CSDvS3avvMQ2ud9ceWbWNjabW5WRpBSVizF55cZyyXyCFbBwJR61BdWSbFLMd9z83DmLKb",
  "key46": "427AAP7t3upBXnvbHDtYRqSTSy76AQwAyydsWXC64PCYbDtyLfERwhxvUznQK9oVrsXT5H63QjrgL8rD76hHZBCK",
  "key47": "4CG5rCyowKVXeUVxpZzw4z55KUvcNfw8PMPkNGozsuzjFo3pp7S8MZzAzZNUFmYLVJwS6S79UNuJ8kcdviEx9StF"
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
