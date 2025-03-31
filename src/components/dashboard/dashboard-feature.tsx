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
    "3yqWToUVpMt8aLTCgwLwoAaR2jhiKAuntN4Y71oywyLrd6ZpPyXbWk2KLXJKTK8PvHHfDudggiCbEYAHAdX8VNyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxdfBKMoz5jdbvTVr3SPUj26KQEiES5LjoNAht4pyb1rLwnPoYHiHYMFBWRM8LcH1ZWwiMHXFuHHEAh6Hmkmugf",
  "key1": "4DP4A5kjV8Ry37s6KD5Mhszic6RGJsrcSQCikiS9eej3BA1f8dag1Nds2N1aR9AZi9zQXwdnWAuJFkqUT7ZxfzWA",
  "key2": "2y1pL1bzLdEHaBLvzqYX6rJRop37pEZhr5x3sLm8SpEN5THqEtxmkmbiyBcKUX73wQFVnEcGw5gx6nvSMX7fUuRZ",
  "key3": "2busvffVsFyHULoWSVmBRXihrWuMaQQgEt1G28BPK1rC4fRVP5my4JvCQkQzH1v2bisSsBXjyZ8BKafBd4ZuHbZw",
  "key4": "NP43x9pqp331djEoxVfPmgTHzSi9q8uCqQC8kkb6TuTMNyVBKkJ3DyzupVkJMwg7rKPSk11XjJ6rHdehpvEKjVJ",
  "key5": "2fr5agYMgpWcgueVX95Jyk9iBUBgi9xcnbofnfjEX6VLMASneM6NYgXELVWJG7edxYqRuhUeC7suPPwsJvuKVya5",
  "key6": "3bPP4Zswi2Bt1sWrjfcyWvGzS3gCMiTZxyPhKC228ha9LdSEdkPzmy77easUHx8anAn4HRkqHffrUaaZQHqq9gp1",
  "key7": "5Rz4G8PkmE8xZqKFYXZU1Xht8HNTcnuq5SxD1fkPhZdRF8hMGUXWqpam6fkVAffGr2K9eAqspdKAQWPPR2mNY9n8",
  "key8": "2MFPjPD5jz43bSmqExdzXHzT6zZVgDkz555hBw8Vmezrvx5RnuRZF18zfq7SBxCiqXnF1bxAZa6qJy2zomsMpjHa",
  "key9": "4PmvZCvG95C4JA6XMnVCYgQDZDbPoghYeGTUb5mfLLSts319xKxSe6oDeeN7rXKfczAvbnXtu4EmA6D6jX3yNq4q",
  "key10": "2TKsTMXjGfqDvzF7iZa1C3C8FXqVLiFLKse3Tty8dLb2REy6EEuSLLNw6UDEouRhdTHbJMLA75oMw2nLhoHpWYA9",
  "key11": "4orEqK2P2fgR3nRvVF3Rm6N9pH6QnavyawqWYVrQF44JC4APYKFikrp5AJfMpBkoNTNLkvnjZP82dHpbw2yeXuj8",
  "key12": "647Atuh2bNbNBYNfs1aj7kTX8Xy8Fz7i7b9PNdz4ZqAQbPZH2JeQfueBn9r75UwZTXDcr7UGoLdaNpXrfhvLX8Nq",
  "key13": "gEpcgYA3yqS2kUwXw5HfJ1vTybLqosA6yP8gNXna4pUxpUQpoPU12FBo7cjbziru2igrMGob5J36ZT8dQUozFj8",
  "key14": "3s5b2msEJLuhqgPhg451kwfL5Merm1Ub28ZX36brsMASZLcZrStjXDRTSgS7gUPRSDr3E3tVVXSB6645b7sD9oz6",
  "key15": "4n1Psavq4KQHjJyBh2XkeMszHt7Uf7ejHTHWtMkpFDjPdfAmiMQCzRCS5qGAXSynj9gwwVvVeyL2hLnTm1ZCBJKX",
  "key16": "4FuTnrhRH3F46uovZFo6wA1vjz4MpiMEqpGEJnL2Zy7ZahBv6aa9o4xHm531LTtvkNFpkamu6wp8AV6eDpXCM7n4",
  "key17": "34xgejsEDTMnp8qGUDMbVAga2yQ5HEQzpqtjFWstZPdrorcwx94mYGBiCXnbySAbxHwmX8XqKUGn9wWzZu5hEKP",
  "key18": "i5orT1QZ1b9aiB5NaeVmsPWMvZXZUSrLMQjdQWV5k7vxwwx8GarMUhMxK7Tvdpvta7rU2A7hVDsig1EtE8Ewzsv",
  "key19": "3UJizxhwDeYphgmuo3gPwU8GpoRavq1akr4bewinsu4ySPUikZX6WVniUESY8HzKQ1CnN7T367YSqWQrtbLco5vQ",
  "key20": "5fQtbAGdozRYSMnuYukLdxXXKhiDvEtFNoqhy9xSvaZhsatGmEdK493HG77RHT8g3SQ7Uz16P83EA6eLc1mPjfvk",
  "key21": "2sXQz5M7DDkouabTmJ4ht2WGKVBEg95djpfgkRrFpcDgvxRsAefkGa3FBLLhscX5dKfAEuhPsmZ5TZf767RmGSoT",
  "key22": "5EuV8ewnHEE3a1zoT8GLYps2shSL7zGLA3Zn4UnfLP6p4Morbdq4fQHVquvWEXqtyUtKfxED2TSHPRQjhomapPqn",
  "key23": "3pXvi6eTniUrzXFfyZPeoMqNqyKMN2Y7VctYGtEY8Uj7Der5ALuraAH891agPzfge1AxAusEc2zcd79qsHGbiRAA",
  "key24": "jWJrGCbSCpPmxTJCj1V6fsxphiH9r6TAjvqYV4HELE2yZZMAYAj28HWmVKdQnjexnYb93zTnWKUoSZVmdBn8yrE",
  "key25": "4TcKuyjQN2MVX2YwysjWRS1gkrLM2mBEVKrHNxVzzxg5pHxNh75GF2rbFXoYcgKkKSvvQB9hPfU5jiMfFu85Gm7m",
  "key26": "2W9RWTnQcpjAXvaqawYJwwr2D8EAMHTuuyk57AwuAic7z8hFpuk6LC4j4F5xKcH9MFjZyJ8ED1q39VqGUixFAKY3",
  "key27": "rU3HmybEtZo2guJ4saY1gJhiRZeEP8pnsj8abG96HV94TyzsJf8NosCmeMPZSjjbZjMWCNbq3uSViA7V5v5zbWT",
  "key28": "48w8HE6ZYAaFEmgtsbX5nfVvXeNkn1KDMq4SAHrsxiKgRry1piXuxsTJacbG92b5JpsjTAtmrfrsJgoBYc3JbHeP",
  "key29": "4XeUGAZd2PJt44qxMmi1pcJBBzn44etMknTr5QyiFfTy4F8gwPBNyprA7xQ3UgevwQumgfsyvb8fqFrvYFSm4Pr",
  "key30": "234YEZRdMKprYDpqWvDLkPEhDenDjk6MzTQTfa5qNGUVR7qAks1Lguo1Mai9BurfkLtYX7MYGDtpU4jetFR5mthS",
  "key31": "2eX8hwZgKDyV6EjwnkwPUqYm1FG1sDEpvCcHHsWsS2zAfFC5HkAtsdoxqNCzzKam9Y5La9tnu828bYYaaFR94U4k",
  "key32": "VM6GekKsayH5zEpfnEG3XeNimpr7LhKpxnXaPJMog6gcTZKutBwahirksx8TGVWvAMwEgAu2BTnurYZMhRaAX4Q",
  "key33": "5Cp3FRKkSngHWgEELDqReGRBQEfJDdmJ9nTV6zQXAUJKv8EvgDeUW1sxjnBJxjDh6TUTZzFpNzmh3hSgXsfGtpfj",
  "key34": "2vtFvfygThHwZjmJqstKdFQnKqFLHedXJhJmzhd9FzNLAhEFAfmTaWZr7V6dcfNBFtudNRhMenKFwSVvwxCn4jLW",
  "key35": "Q8KYLUP2W8cv5hDCiqKxkiXVFk3pKLngHD5xtXgvfgkrBQ4HLieCkAENY2h5Hn593YtW6S51kyZ1uT3CZHB1Pqf",
  "key36": "26zbyzzv41o3XJHvuGeG6B55dVwP8KVCdyBiaGgNthVUXpWdpybckD84bfnBDTy7ewX2kEciHcqu26fuuEg3Cb5H",
  "key37": "3NJxPVeVz2h7EHJ8QamjzzuDFz83MPbBrkvNorVSwxSfSPEe2kfLtcKv1GaAtcy2jZCj6KDy8JpBWZzaZs4TZZnA",
  "key38": "47671dipAkkTeV1bNrY2ws1T5NrektP9E8ZGvazZVaoSLWuaTMCCnQpRMuEjt7HFUxi9CChFyPoannF4SU6p3Lda",
  "key39": "3CHqSwhuyv2dp4M3u5U4rKAcxB9CW843ApPHSEaCVx4adLyiubMh5HmTK798rP9jJf9K29k4PPNHVuMkLcXVdwx1",
  "key40": "32gw1tShjmoxCrCJquF7aN8wS5sF1bQLwKg8hfML8YLbdCJrra11k1JWKkfxaVsic8iqYNU5q8wzK5bjHP87PWTz"
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
