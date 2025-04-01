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
    "5e9fYzjeKKNxhhtW9zLQ2Z562TyVByQzpRZ5Ji7iSBKirHdqhAmTH78s17CVe9Ld9xHsQZn82BcXBHUysMAsB2iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kaYYLXHnuSPD9VRmabe5SaBWJGrTD4jfLeXJ4LipYoqz6w8FwfCEccj3pgKv5pynLoYnTg9QuMNgeUAHdhwZqZ9",
  "key1": "4qdB4dRD5GMRZ9nDfrorFyvx5Wntom7wpykef7j3RpQxtkP3doPztQXAWXP3Mq2rGFmxZhRenvAwXUnytbSpmfdy",
  "key2": "53uq53ntvhmm2gMv9r4Escq2SopsjaDmGkf9La6vbvCQ1pHWhKTFCpYnZR1eZM4YPdUgxo64QRuY1cAnDidcNVQU",
  "key3": "5RdybEK2Dhagh2XM4KqfmCcUQjVze5xDxn84Z3kupfbhJn63MtbyhWWUnSp4ocbpDR1cRVS9uXD4korMfiDFKUwq",
  "key4": "3K4VLur5Aa2fgxbFDnw2t2TkeyhQBwnsYaNm3dScNbMc7Hq7GYYKAdwrhAAVPsyKXgrjh7t2W7LRa8txosGu9Gjs",
  "key5": "2b7RaNWff7NvLq4orSeFRsmU8guNAtppJ85vCW3rhrT63n2QRbSkJz3GYwdyjR9kbDDHbhKChSjbhX6bRYGYcnuB",
  "key6": "36Z9419mTZRy7ieG5A6XpJJMasqmfyp72b4uAbwKW7gVoKAHiJmLj1EygX54HNY7BJcc6FFQP1utRmjehdFZMo1K",
  "key7": "2WixdQqfonD8FizLWhNZDEJNxNFkhfLnt5hxhQKXR4SJeyc4XptqztWvg2CDgoNu6naFLsBNPEZQQCCjDyRvL5Zb",
  "key8": "5GZaFSxb8jftEo5iHvNG5hoPEBfYEWMBKjZML5jyQMMVZnR6uNFgU2q5aBtxv6yWtf3Q2eFsPmw188eHT3EWFsH9",
  "key9": "2vEHDYPhTSrEceagCME2ajRrH7dZvdM8snNDAz1RAQAL27pVAXwsk8AepToXWPTJCPoY3JuLSdq641xXMZtm6gz7",
  "key10": "9XajgtzFcz2GTxGJfNYGuHKUpGLK4E2hMwRVBUYsxY7x2zTwFk83SAcAYVmUtJ2qFdEnPu9fcc1RG9L8tpbYrYU",
  "key11": "5r5ngEuLDk1ChU1KW7oz6XZH9aVt1RnXiVsmG9o42UcrykYQfQr2pw8UeJe2ep6pBthDUKJArY4bMTZhkCPkJcmL",
  "key12": "3ZKgKZeFsjcGkSCfEXY7oYpeq64AL7i9Q5VNrzyKxGYTLkkmyTBgAsCdi3HJaXMdTwVKYnZSJJjkbqBYzt9seCM7",
  "key13": "oja6HrgwyhZ9cWU6eogbQnXRqw1Ub5CQ4Zdxftc1dFVVCnLkcAG3LTpMpAV7DfezQRN1y3RkooDky8U2bbFAjJP",
  "key14": "3PPq7gMM3mCe5YLYHsvWrcipT6KJrXCW3mZEoubfyTJqDevryjpebg8RWFptf9J8J5o1mG9GAeE1Tzf2J6UbhNpU",
  "key15": "4kCaHeuNVyipoG3rvsQRvnVvwBa3wneiTdn9YgtypVB2PibvgEyE3sse2XGPjQYLExXxK3iRxPjmBVqrNCvafTuJ",
  "key16": "4QeKvDAMaFGxJZFXSenYXcHWhjXHbD9DKHJqY2jToj6PR4P1hL8Zgci9Sazk4i96GYNsagvNWRPT6rHqFCnFTs2",
  "key17": "2e9mafkVATUQTB5kPE9pHpfoN1uH1zLjAggKDutXZM1ctKqDfmUF4i7TJApLDMUYDX3HJkS5cLAZ1m3d98yGj8fm",
  "key18": "5n3vSgxtb2MVw47Lnj5aoCxLnTdHY4ur3M7sqkCqEEXC9ojvUvYYUTZWwr8rbnkEQPgXJx8jPu2Cw7GDftYJjBoh",
  "key19": "5VKoTCCWX6YVH3LuMErjGa8B7PGscgUydpD4QC2g1wx1HJvpyzTiFHLazw5uajXAhGL22stQb5Hu9cHnUkQHe6WT",
  "key20": "67egc4azW8vdbBVmUiZEU5jXwd9dvnesB7efsfBcBEUo8skrGn8XUHmY8SEgKLnQCrnKhLfPshBqM3xYyMsVJUCa",
  "key21": "5tjLs5MDjNM4LkUvLqJ15aXQRiCSR7twuzexM2mACd1hbEF7jo5TzgT8x3jVijKt1UpcPJrviqvc8aonrD1Vz8Ky",
  "key22": "4Tb936XMuH42hinkuuoguRQKCdCNE6rhg4QeVwH9HdDFiMmhj8usGH87daFdaKuYuRBD2gjws24KdhTkdm6jX7H5",
  "key23": "3jM888jnXDpZRiAfMLsEkZExD5foC8Rkrrr91vy3aJwuyECntd9zVjZRiE35uGmR1id24HtJCwsXZLExkGiJiwNj",
  "key24": "Avoend7352o2tUoLMqS5uatgAPw3qdheWzrcRqLHdB3PMUu1XyJFQ7tU6mEQVyXt671vsptbdy3JaxyJKw3WksZ",
  "key25": "3cLiK6FPKiSeetSfiqEHeFBV5F7CmvHc2ugFxdScoznzh6yci1P6D5XAvU9ixFtZEqAEDT69kp4ZuugpGRiEaZ78",
  "key26": "7Q5ubrzJMuVm7F3ytMUMU6u5T92EropNiB5JFFojs8TUYSGPTTz5AVkDjFYKeWa5Kkst4WP5mDLzPtz1eA2W6Kw",
  "key27": "kqnax686aBEhBb2xQjPWnSKGAcSyhFT8TNs65V6YZgrw7VW9Uoe9jReA5ND9Ua4ooTuhBCyAq3BtMfUVb3Hc1Qr",
  "key28": "2xEBu2QrqhHzAcxuJnYyes2k8qi5Mb5E7LVvgjZZVmeiXfdLhqAT7cMi8ShFvmf899zHerR156FsPZWrousD235c",
  "key29": "2WkJVeFaU9JXkB53LhdFQUgV1BP5Tx6S5z4uuoNio5NNumBxRx8AVw3RixkUCQDk42S9YDNYvkkDSp1waWkE5HFL",
  "key30": "5CSfg28zpUeCDgViTuHGPCBbgqW5tn2ojPTzdnKmJf91yjP4LJYH3FHmzHgiDQiP5SvJGWbeHk923X3jgYrUnRMp",
  "key31": "2WL3tXEdgwjv6xmKg5KsoGC1DPLZ5isRD25WEDmeAHTwEtpXjkKvAbfQ4SyMTdZ8DL8TysmXTbVv5sx2EfP5qfQG",
  "key32": "4CMPqaNTRFXzN9h1py3W31pi4DZPkfQtdi2yndA8L8sGhmPkLqwPjN1bHCvvKvYsAzGjATE67MKW3cAb5HMeHxWv",
  "key33": "4aywiN6axo3gvS87uRJ8uftbizj3A9HuTXUfU54HkkQxiMY2LJK145xc55ATDpHqr5tKGs1aWXWo2kMhygWymacN",
  "key34": "4QxNn4SbNQXSTGdkX2oEuRswgn1BpDBsR8izw35VsBVkU6FDbPvG3pgms2E11yH4z2hwJjcKQVMqXbpu3UTFPA91",
  "key35": "3ekmXqF1VzKNA84o9CNfS83w4H44Cv8Chexw4nSftMJrqGhkHwPpQYHKDB6aaH42urVyVzZg1tf4DdbzQtgAT9Fe",
  "key36": "51GMW73MZuyKVabePZCw1hChJcUFystkX9n2jMQB1hB5ZubczkXuR6D1GfVaGweyKHHa3diXd5RtVdVFNWBmnjPV",
  "key37": "2bnQzy8mY6VA2yDjwUjKjkLyzhvGkX9vX99pSpcRrTqs3u3Dr4x8h8jgWPLLRDARaiLVmxyTkABf7AkQHCakEntw",
  "key38": "5bXj9touD2ex4jYTmoLJB2SaCcwemNxJi24HpNPpVi6X5SQ7LoSq3A2PW5KTnjYJ5zGs29nroso9MFxv1wPGitco",
  "key39": "3eLGiH7iegMkfzESfW29f3m6FbFzRTeQu1NnTeRq8XFgYh7XYDJfNQq3fSvTk5xPquyjLAoWgPN3Wacg7da54vPd",
  "key40": "3tHrDHNLzuW1vpJDWZRVKRx8zRJuQ3SbErpM3ycEQbzXHR26bF9vrW7bPAGTVFMuJxVVTxCcuq5ury4NtMFEFVLz",
  "key41": "5rppnSHKEVmQ6maBPijoZEcJQ1uoiPSV8ruSBXJkDDkiDP1k2P3di4SdAewuFVFwcLWtSqPY5k7wVKzmHY8yajHt",
  "key42": "3ExEnu3imi9eir3MnjypSMJwEYzivwAedKpzJxZ8VsfVBRFoFWN7wruRKXWaXeJp7qoceGLzsuqtHbJuH95vX3zp",
  "key43": "2bNFS81jh7MCHXPGHNX3UcfgEmwF4ESgruVGa7uDERaDA8NUSNWsd2YVxRiXZTSCQewBdi1RzTbeofwAzRsQpXQT",
  "key44": "2iWkL6zegg5t5qPk7B6FroFiryCGd3UkRpkCJQb2cauvKSQnscJxYScftEBwBD2pyfnYuXycFJs45S4gCZDpAE9d",
  "key45": "4vLnkvmxbxo1Gg6iX8oNMsnoqSmoXNizL6fUipHSGNwfuo7fLY4JVoHbqkgtFjaQjgWumhrtKTnQDXPMiMvpC1tZ",
  "key46": "5tFPVzdBbo8BiMb9Khpf374DjoKoyAFLQcMn6JxJ2HKpVXeLpc5xxkZsyaP8SPkZXNvD6hvMiBj16Dv2ewXfUfT5",
  "key47": "2h6XC5LpzmG96HsHWdtK8W7q58ffw4LHSRYr8HdmqmPtVihepTdGyBXg1nnnkr7hCDdNa736iruTkRmGtAmc4KQ9"
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
