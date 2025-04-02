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
    "4zpbrTWyFkRzuSn6mKYKNPTz7jvWMg5HALNTh2ccdxXMBwHJw4kvhSMSwJe74SJi4R8WHZZ1M55uhotAYr52UMYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtSHz8mErYdhLvDK2ps2BATLgJVAnFjn2Xypw1s8Bk13G2mGKtzfhb89rMLUpagZNAER6fxtP8KKVaHVK9TZEXo",
  "key1": "3Y6XppLr6bv1AV3NhoVwMwT6WpU5dpY2d5bFLqtcshEHNzy9AWAEhz1EmCMKnuxZpMz3ZEGXrnNXoXsBVFGLigHj",
  "key2": "4ar1wexMrqNgLHcm8GWXEZKAShgnxLhwniYmc8Lgk1ctUvivsvzvz2YHXVkWdcYQvjwxLE5M8Fnt9PCw77ADEckX",
  "key3": "yMpwDDVQQne6bvn7j7cYkQ59B3nxUK28KqYZpmX6tPDuhZPwpEUmBz4tHMDYpWEwCZgUzWWSwaeF5dpigrGbYyW",
  "key4": "2m1F8Fm5pF97XRmxUewXUdKdMAFKA7uq9yrHnnokvtuPaiZA2cg1Xebrrv8Ki6GsJ3yAhaAfkza5HuP1X5zGrcPJ",
  "key5": "2Q8vJh5WL5oP64GvinQZhHzw9KHxrztou1HWAFavt2dArgDx6AfJJsB18SikESZXUyREJrK9QRnBWGwz47WK7Gb9",
  "key6": "3FTfsenarq5t53wqyYAGPCBS5tGsHmk46ujukhxDDg9a4QSQL2SvFfB4o5MY8dbeCsAaBqr1vyT1i4vR6HsaApAe",
  "key7": "3Emm49x4VbQZx8m7pSEtkjrXJLhPq7HcqpjVc9Qo4zUA1NcnYkFoeavizyHw8toPQAyHavRSkSA87RHy9RpYQZzx",
  "key8": "5C4Bj41rQoqNd7PLPhEdkwzgD4P5WirxZ5e4rJzPW4U81mrFAoQa2ViH18u9dhyfKV7xsUTzeuPfr3cSxwWBi1R5",
  "key9": "5bJu4NGXGcFJhsHvSXhqappbpkWsKPQ3woNYe8mTXL5UfZ1utBPrtEdi6xGG3GwsrRdYDmFdZX4Y56xZMMcDGSNZ",
  "key10": "RhV5xzxeYmBakxzS2XhGs5wffKggn7crqTUQi1LcPscvLiXS9dgHxSGGXSTv25DTuf52xKSb18DnGGaERexEYjC",
  "key11": "21ZBdr9JCfHaBxXhoQtVgZsVaBtUMZ5dPa7Z7555WKawdJw1QtYymbe2Wu8bJunVje1jVRuAEz3mtim44wJ4N7TG",
  "key12": "5gtu4oseMKLvmbQHBhg7ufzAerKPp3Mnsq67hRoC7iMiRoC5EXNggWzadZ5LtqspqF63LqShFfEURm5y5D3hyQ5Y",
  "key13": "3uEsa4zdUnauXySzeXWe6GVmstDWQDqG4TnyeRCHRuAqdViCfbdA9haFvDAhKXDe2gPDMy51xsaJBQmxgne5d5yQ",
  "key14": "3uGGWbQtZaY6d8zMChNYpqMchTixevFmcECi4p5h3mV8zzcaoPf1bvLMCK1Dh55YpMza4zXDDg6RJG1Mas34u3Kn",
  "key15": "3wEo2oMjPWg6kspzEaVP18ty48wG6AXBvyeCe83V2G183H9F4XDyfUVkXP4GFpqWyPSPJDB3rD8Lf7Yjr5omCr3M",
  "key16": "4iFNMY2tzfpSdgFwgsCjmXfQFbhSmCUtjzQqcNZ6bedsf5UwrNwuJB7tgahsbf3xyaQ7xkVUerPs5CxvfFq9GbTv",
  "key17": "455mPyvvAkkCySyJ7Pw2HwaziMyhkEN1m1wK6KzG9BKTZVcdj3Ah85gz3qiL8n2C3a715NVmoVnsJyY5kgZbpfdm",
  "key18": "5mB7mjdQUDS8nLEWoEw3t3XeHhSpjLLh5yBBT8ui2K5RCK68YaMZ5i2oLXgKBsQUWgc4jtpWbUtfMGa2KyQZjWyD",
  "key19": "4Tn1aZLirLfJV8KvhkWUvFXepSK9PMv8UavMYheN69bCLfCfpAYozUhjYJo5MHQ47GhRd7N4Y8paWJACGGbzdyq4",
  "key20": "4PMykdmXAoS1AeL6wqEd4949649YP9Si3SVpyhZVgnXpvrxPgjrVGDeiUcvMh4U5mtWUwdbXFFiwRTpRQywxR55P",
  "key21": "4NKbV7q1Q5oafQo8SkbUB5AC6bekXad79sf1shjNowFwWHLrENTcFVDPMz8WaxuJynLRXSBygWahYty7sHAATWL6",
  "key22": "4C2XGFLDc9wcSb8MbWN9rTo7Dnhziv6MwUBiBLBxvgjeETsDrhNwTDypZsM9rGqeA5t16k2XWpccj9UqQ6h5638K",
  "key23": "5EcdnpbzyM6Vnc8fDqsJoCZN7L2LM8z2ysvpqo18uVmvUrEk73j9WsKZYxNTiE7rPrgbu9uD84hqCzYcKM5GP1x1",
  "key24": "4N2RdkEQs22hF3SahC2q2he6yjh2U6LGEZbEdvC7LfKXTd5WHJDZfgXQSp7diBYwBmv775vFgDDP3dkp585tCpQv",
  "key25": "32hTkM7zvi8UjVXh2Z4GgqHCF6o7Q82MQSzJASfcEhhLq2v96xbjrpRZNT2U8RKmARuEbromrGQQwsEDkQ7uk83x",
  "key26": "2L7GgPPmUbdt3tr7iSHh1JupnfZSAUiEXMVa6JVg5CG5k4KjjCpJwjHMTogpsKaDLukX1qTp6BDoKoeDfR1VC88C",
  "key27": "5MfYQ7u7eHDmWyHv7cGa53Ev4fEgQPx5C44r32vADsGNh7N3rDyuUocLDmAJb7gsz7k3FfrdATxdRMJYrr3gqZei",
  "key28": "2n6Fdi6pkfRNuUK51TT3xcPprdQYA2ejGT7z7nV9RDbm8WwsjYkdSgqSuV3NVfyAR4CE49AN5yGwfnV6rkBKfdcF",
  "key29": "2ZT2AXYQKpVGkiN8qwKmkjms2dbdMbAv5gK35p83ZiR2MxtngFPHj3u4usQE3e5ABYyLMAuAU1KMuGEtnEx7q4Mr",
  "key30": "cAVS3FY4pYDNgFSXqgo3jCRY7B659pSRWtG2hBZgDHpSQigCbc6nQU798y6EcnjnETuvsK7TAx1wJNZMqtHvu5J",
  "key31": "47diEs9tTpAXFmbpVQSg2LwaoaTHaKn9akuPwBE9AMPeepP6FgGG1dNTyNxEWM1wAnXTMUX1kGqJyLJwBzSLobDM",
  "key32": "41hR7QZfZjBSPsshAvm8xEm6ffVF393qcKWoaK2Gf7hx1aN1aWFkzWAFVyofXa32RSPL18rAikM2HMFcjmu98LV4",
  "key33": "51yuErHPjoWiDufPRvTRbvAyZTXsqNuRxcFXpcDn7gJisLqMpWxeMJEbqCHgeqSUzktJm3Az9cHSyNYvPfum3rzt",
  "key34": "2KX68Gk8mhDRRo5SLX9kRg48JobruAsmyNxGMRDmukPYUkC3rMR9n5tVRvJbSTesUSYncFxGP1BrsLWcS5AfyQS3",
  "key35": "4uZSjqUVuXcZxAjEKUxerADQb9B7nvNXmtbxntforwUG265CUdpLegWMKHastVHKeVFtcxuKxj6nEp3grcHzR9S8",
  "key36": "5AvugV6P3UF64kXZpZmohmfQsZcCjaAyPC4U9yicmvALqdoBXCApspCs7yjJimG9ZR2nyjmsLKkZJKJzR6xvocUn",
  "key37": "4DNpoNc9Ffz2MK5pcBF7FCsggkgeJPaG596fCZJgmBvsWkysw7RB1HgoAHLpgTxXGGjfkNVbfKniYN9xxTth9ppT",
  "key38": "XR8tqZDTBerL1mzsZnH7cvE8M6NjuwhAzHGxXR7PxnFst9AHkuR3Ns8MwE3YDCu52WCLnUeZiHmVfaSbQ7xhqhC",
  "key39": "4djafsndEWr6QDQBU25ZY8sYLoMtAx8iFL9BT7yXK86vgBmG7DXWj1A2feiBnn6HxAbpSHhhkmBCGTzadJSSoEZ6",
  "key40": "5RqMvp1aUHgkvHyKsvB9EVC1ycyMdePdxnz4LXBqMzg3F1Vzu3LdKHyVH4iYr3ygeZqGd5B6XEbRTZDTTJcGpzdq",
  "key41": "4MqiT5jTqSDCjCwVrwRP8CktLjiMqjJuko26D3TMxdHJgE2xT3E5aufkiZrc52AmPXe3eLEjEuCywFkvM1xbHwJz",
  "key42": "5dsGv6c9WB2s7685ZGgEDem7Nt7ismCs5ocPyZKDVxmP9dDEJhgKiDfStFeHRKNUAdEspTZjhRH18DxsQhhuYkyy",
  "key43": "2kEcXTEEyaKvouuJiFCrozf44gpS9Q7WKxUTQUwSg8bB6NzHPGqz3vty3yLSA8cMnue66szb9WGRR33SzjTUXC4V"
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
