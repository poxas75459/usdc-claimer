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
    "KQtR6ByoSkSiAwY7tqKTHumFqEhXrrUX6c4FTPg16637JB7a6tnC9n9K7FiNuerHGLji23cYUC4oarRijrwMhXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Pf1QA4DnTppK2yEh1TRaUFWY5hSHp6fmjnVASxaZHz7sJkQPTCjkcoHXDTbH85rvUMg6tTjioM9HGpdMVve1JR",
  "key1": "sE96z5UzTF7Th5sSkCwN5THf3tYjGx6sEty5LywkEYNsMgfZjWh1R7XvTKFGnDMBbtmt9tg7PajQww7FkDv4K47",
  "key2": "45zoohmGch9HpUoGbW2yF8iMVKhxHqASiQ1TwX7gnHeZytQaGJ6TDhjJZgr6AMnKnmx2MRYt7UkJdiyzZNuuBf7i",
  "key3": "5Ety26bG8ukiauisxFkjwtWAUFjwDAHesrbqCVJo3CCYHyRuXsHapH67Gd4tMqG6FbiwiVTTymm4z5byGeTw7ZiR",
  "key4": "5C3yXgGgY8F4Ayhvp87q4uvsUsvQPJ8s9c4aRv9eV8wrSaTiDe4PTGQ17h8VZNExRtr2nC3UwP4MKjR5n98s1XhH",
  "key5": "4rLHZDwQUReVqQ5oJQqyJHkbGwDRkPCV2X6F9zCp1918UyUoaX7tkgYSowwnJgvYnTXAt69rdhqdXwYFcFACR8uR",
  "key6": "4UAkryaKWSPBAQjrviJ3zqp6hwfKUP3LyzTTZfucN5DrGxWNX4rCygacNLfDcBe9YXjzQRdgs5mFpB6MpFhHn9D4",
  "key7": "5cBR7KjfHCbfgrkkJ4A9Vuf18FgA4atAwEmRi8iKPUt9cUdux2DBvFRjoTdkjPFNsb197m8R6BcPwUXpBshqqNjt",
  "key8": "YZt4Bty1edrRDWrga2zqu5Hz9WZPShc3YMkqwKgVLMDWUBMgQphDARcdGYRJebszR6cgepkH79EtmCBV3y9gnxM",
  "key9": "4RJUqF1VvCV5iTknSAWFZmqGs3HdjRgrchtzZUBTaXwd9mZDyu1gpsqePeMnYaT5sphD6f9whCMKS36qEmXJJuup",
  "key10": "2AnmZxJDSty7uKubjpyMCiq9RYUXG1jwFav1JVZmHHrYPFcW4Xa7DkKW8jMSXzeT4LjjUbcS9KYsmvk1FHeUG4eg",
  "key11": "2pdRiM5jZNxEi3gtwLdpjhsE1wQATbqoNMo5AaRespJXwYedMPEkT2JjWYNgjhnMYWbmSRtxEELkVhao3x3JCwaW",
  "key12": "N1Zb3zUNmgcf54vfLCa3329JdtXxuJmAnzWvVNjYTHFDwxgVoPr9Nfonvb9rbkXkgRBuuv6Li3ZGJDcMxWwiKN6",
  "key13": "5LN8gCPAT4Wcd2eXKeQ7UkstV1m2dT7shxb6zwyFGdjDt9s2G1qPp3gjzQjT5hNAgmX6CpXaSxN1H27iW3cAH9Qx",
  "key14": "54MZXSURzhrJTBfFBx5TpWsxCjpvVexEBHFdq5HBNRxqgqjLjkemog4ZvzC41ENMbapohEfqb83pXqBGeoALSMKv",
  "key15": "3JajJwsLEfWEfE1V67NzZK21NCGjERFADe6EmCXyPj8vRSx2NCtqWLxb54DbKqxtd8q9pmD5Vga5VCZDBedvmUkZ",
  "key16": "2rKuJD5NTTjYF4ex4xBVjDYVYxUWZCmZt4geLVUtVRcW1tPrpjxZQh3xBeoi7kdz3d5jPB4Vj28awxhPzhSc3eLV",
  "key17": "2sMtY1KjvQJDCMp16FjHPZVvypYYG1iDEhMdbWcymV6s44tBdg59FwSuhkjGjVPJnYuE31s1FVENy258ywxMYaNe",
  "key18": "3otF5szkrfZXMyq6j36kgxqH7TXoZnJvNHhLMsWfrC8fBG1SSPi2k1EPY469MyBijhUqx29QQnygCQeXWWeaDC6C",
  "key19": "36jbiZcUQ5KX8jvZU2e7xR82jUN4s69YV1ERU52WVUREQmBFkmcGxq1uqJTsFVWBNGkcw7SVLR8aVps8Y72yPusD",
  "key20": "6DuXS7r8XcM6VspRubFWGVEg4RMG1z4D5mW63WbhTRHjj5gYuXgMG3MFow9JbceuWLb2QAaVJkSxdicwdsoWEqb",
  "key21": "3f8NpKDqeYiioWcPmpmuKDt9cgp1Nu3M3RTifHVW1tGVN47gaQgMpRuaYsP715JHCoCZ41YucyF2L7Aj8orCTQLD",
  "key22": "4PhkBN9r6w6gjvcrheuBuZ5erjGQGLWSEvcU7Ur37MKrmxxpUwpSwg1RQZNgcsPBJdArbsBbqhbuZucavT2WWzKB",
  "key23": "2gM11LtFecvt9DS3ZdmPx3mCEATnGLdEJRXBNYAoM73Y6wtDxbtNProfBz9CgbdP4q26SzvF3QtzNMgWMFHg12gG",
  "key24": "37B9bqcJ936fpd9wjHchNEAGFtcTZYy8hx2rgKWAL1WkWGYLsTdixFmhVhPQeJJDJRpBkbRTGhK9nPKfgCpeF7vh",
  "key25": "4vK6bqkREybcuG2qDe5zh98MrteWXz5Wuhb5gp9VqdpDZ1pBGMdjEw9raxchZG8MLk1yuzGrU1nqznEU8ybrijYA",
  "key26": "3jg6PXEUSs1kciNPgEjxp3NdE3JUc3njXiBSpdGS1jwrFnFvtLMtvsLrAhMU1L5smdSShizXv65tBP5C9JTSjk6E",
  "key27": "jHudKN4zt9N7nX2NHF4vvaibVNzbK3Z2cdhUfAkAWGyGodrBabDcKRkFBh3KFNMayqC2wJY5tZ7nFbzWN45zxCA",
  "key28": "4Brf7f15iKxqyY4jN1ryF93D5c2tqGgekDiocdGWUbjFxpuxSwFEd3yFCABfKB1FxgyfD7kUAX9yYdNEz52F9xmC",
  "key29": "2jfrTgbvTN1jcaoLdZT1tPKRwgKAZLPSi9XemqhC4hAGBfY7qKVwxV3s3xyT8AYnFX9dPXXYZY8zW2aQFaFBWjuW",
  "key30": "3jkhTQYpHBhi34zmqWEBz9wVZqCr574oMQBPYHxrGL5Ab4WFnFPypSC8qKgZuFjj4A6V9Cp2MCJ8teDqvJBHTA7Q",
  "key31": "46tzYE4EYipGZHwJGoNAfRDMcANXwAnMwJ2EmpZXbjShY5sNH3NMkTi4uYU7mQMLnSq6QDRth46FyzcBSPDuocMV",
  "key32": "Wu3Jk7VF4awWV263V1qpym4JVRFkmSTnxv7KqPucYz22VyVUj7Gwooc2EbhXvTGvMr82aArF6HDdrSUCoU9ggFN",
  "key33": "389KQD8ydJHG6iQPmVn82QAJq15BB9PKftAUi4jk8KFeLyL6CmSsfixfZa4hWrTnA8xSFUbrwoy7ah3DsaKHEamL",
  "key34": "4Wd3QFyrcGLyyp6qWJPzfayqyw1FeRKzycnEHsqgGDCiA9kEuuYDAJgRnsguzebWis833UwvACQAdupcu3LkRLSu",
  "key35": "66ia6wG9nYQs34awDyG2chrDtux3z2AtfidSPnjwqf8CjhQtgYuNkRavdSi16B4FTiu3SHhE8zN7vu8EpePdmWud",
  "key36": "2jfDtaLJ6dxc1qqkspHFJ7baxpFXjwbFGCUiGomRwDjSrAeEYGfLrFJfNBMdes34hZ5S59E2ZxVSh4mSHJD3BEGG",
  "key37": "2GRFAcAaEExxD9ZJicLyMVE2VL1rdzZ86ppuiRYSxhNirLh3oZffhfbjhNrXQtF8ZbhbRS3dFaWjfkuTHoU1u2bz",
  "key38": "5cv1Ew3PwtPHpPHX9aaJBpE2EGhtoQtWxYW3jRUNMJ7YA94VDn9rN9s95j49EPEhuZcHSL2jNufYvwKifZoFK6Jt",
  "key39": "47hXNAGEe9L9LaQxEPVp8FoYjSYhXb4CZ9mCmxZ3ZQqb6zytrhmDGfzxf6ZZdv9vJjDAQQFNVdmxrxkHmrdn8fpC",
  "key40": "3hiXcKXAQ5B2D8Ln7BHK8TnWxXeUKDYJbjbb3XeNnA5sgTR73mxwzvdGW1Gu6SXGbXnsL6pyVoYM89XZ4YmJHar2"
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
