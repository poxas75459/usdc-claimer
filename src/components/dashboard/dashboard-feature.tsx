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
    "61TGqbECQdxBgJe1SrmKJ7QT7Nbmr5odA9Pc8cZ1MW6KJYheSWVhHZ1hoqfuWKyFfViZakYp9URCqF4NwHihujcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WPpsNQbSyfq5UmQRG649bB7jnU6y7Witc1j2tWUUaMEpbcEk9obMYaxQzKahbo3Eeb4cuNxLZmGSd9HtFQoYUM",
  "key1": "JmkrdVpjK1xvkzyyR26hNU1r6KGGXQhwfHnXyk4z26Kf5e23skreUaVpZjTntUEsUU5zkg5oLabHBz5NnSQQdwQ",
  "key2": "4dMHpfayZbot8kegtXLwBBvMdfyDfDH9oEqRW1PZiLni5UnV3QbD7EJXcGMkAomPk7zS1NwR1FpYEaQLNPz87zDs",
  "key3": "4YEpbWccusypiQZfaodu5QjqQp2PyoZw6NyAZ2hmYsFV91VM1etx9szyNC93QXq5gZDLN6TcAP6NphPrAP8pBHX7",
  "key4": "3KpxwhdHwmGEd2X529EtZjsGkbq9GXFnBbmoybbdF8akebDbK1wDNLkxuJYs3xB2mS2hpxLft6i2ypRowB9GGPRW",
  "key5": "67A8viP4Dhe5kEsmSN8cNRxHCJGHdkhxgGXdCo6ep2ycTuK7vcdRB6GsmvKvFgnFeApH5VUksj6boVc8p7RTrrTy",
  "key6": "2LKnMUEmTiKTWv8e5g3hCk3HkQGtTnrzz7KNjbSxMHQzcrtZKMa7bGKT3HzY7cHpZw7Psqv1GZ32drUfTPQdhUeH",
  "key7": "4eTC8BbYMoG258oUhssXphkpr7JGCeeEsRRAYTrHVFN7Vy1FePxr1kQttzmpn1iWwn8bQkAyrD9prridpqiSt8f2",
  "key8": "3z1HCLxhKoMhZNtRvRyhNyB5yZhWPLJantCNq7bcighMBfbBmMPhNXLc7NrAZuAFVeeW72nS6qQqChCUZQhZbjQV",
  "key9": "5Qx8ixadkWSEqvgkQ7NWntyRkmXD4y74aNU1RXtmtiBsvpZHFEcHyCZGAiZaTGEE9ord2H1cAKZH5KvPBsaPZogv",
  "key10": "4JZthUTDbYebodWDnVTh8nWPCuCDYBUeXAEfuuXXQnDv5tcLT3H5APfmMEKRK4CRCYdW4quBAeLACAD8RurfEEpP",
  "key11": "3eA1uAVGbcRCqLfSxjVnjiXT2QNus8VaGNVwZvA8zxtsiWJKz2aLnYuDQin5oEhTUamwkuGv68cPAYVdkxD8aecq",
  "key12": "eovVcux8gFUdZNpDD5ieHxWnpAtPSQ7vDz3UWkBCgTnWQhYbmh3dRRXHeaD14DmddBJnmMAN2JgeXy3GZcGudxm",
  "key13": "31Gr3skYTJ2puRbzJrYC2F7ibGSWghHvj5mWmrbXtA9dGvrR8ZxChk2CeJ3zLC6NTSKrHXhhxdFwy7DMud1oPAVy",
  "key14": "2g5PrVvyvMREPLZYJztWWsjoL2qASLCLh9vxoRUVejhQu2U6EnGurXuGZ7dyaggwn1mKbomkqxUt2caBWU5iKJcG",
  "key15": "2rBvw5c85rxwg6i9RHh29wPt6hVqSHT3GZUvzkB4C5652h7rTJC1YSzwU1i1inPs6v8amLfBcEBeaMek2aJzEGNv",
  "key16": "hG8KAeLN5ztypkdsdfLUNmgHaFGSckEzwRZvaLwogaSJWxwVk7bnjM1Fr3KcgpgYqhUGtf2uZZnJNbd3MfQTvQ7",
  "key17": "5aN44BadnfWQpP4nkJJG5goAQAF7SRviMELLQmcNNUhqdV24AxnqZr55HQY9x2d1XSkZG1HCC2YsBjrmA7UbnFJc",
  "key18": "3955f4A9XHQ2kY7a9oLVwZP6RsnC3xPmgnDcauA8wN9MY9wDTt45sY34CAV2Gqz5PASkLcFwipmYLt29DqbaEAF9",
  "key19": "4ak9rihRYuvGvyvwT7QkvoFRmUAKTJRabQp9BamTNeuxqH5ngb4dvWuRGYGKt3RTG54nAFdZmjznZhkdpTFTgM6T",
  "key20": "5Pvsj4reMBWMKGezZx53TRaWdjxKHHbEPuwLaMaFpyNSUsk727L8ew1hx8gvjuGgTcVgBnNS5KUscYiMKb9SrwfS",
  "key21": "5qKB8mtB1bEhUvksRP7nrPCCJ5gJiDsLaMpkDjo6r9hPhd6xgQzFc6Wp37xSp3o8L5ESDdTQi4T9BmXQUswFEJPW",
  "key22": "5uXrH1iQd6dktDSmuMMqBMp9jGgcC5dWvwPv3cmFQjPmbQvbVHkTRjtViz1SjsNkDYr9zKLJjZEdXRz4QaQ6S6sW",
  "key23": "2Kf6N4JGpRawJYSMtpEksDXZ8v51JGKp8Rr9FjR2ufxcxeP5NzPgSuEaH4HWdfUr9ENCCg1bxPjnaKbFZpTTtEzj",
  "key24": "5H8MFvfgzkR6LLpmJkdodMmcCSWfMWmG93u7HES56UCTz2w6kG9pGN9b5MRyECc4jPr6CyRsoaDLF3ffHWarGogo",
  "key25": "w7232rBsDVbxVXusNp9pLi2LjcS5o6by23T17HGsX7YTfMLuoYhWvAL37W9VdXsvMiCaFbFBzpVVuCjZmNzhfeZ",
  "key26": "527pCW45uRUTtmojMksQZtbMySPfrdF1o8FWmyn9DrSnwHNGMsLBr2dcgPtUsqeUZUdepvRMiTMPBBDXSBXKGNAu",
  "key27": "3YDweU4H7uDukG9LDaz4jyQeTgD2qMQrwoBRRgDJXUJ3wHNLt7NhaHnXEJwQDbEFuv42Kuo6CQ674FQFEer5r57H",
  "key28": "4GL89ukw952cPGZTQoXjENm8shyjDXUuNufAwpGtBAUhLrhdJxs2k2GBp9gDHH1mgN49Ck1TJpVBaxd7sUV4nST3",
  "key29": "64KMjf5wzn3Yym4nWWQd9WDgPRFFLAJCoJt582U7pyZ72jpNHPe19aZdXyPDGqhec4a1sq78GoRsbHquqCPKv7kS",
  "key30": "3ip4enqR2tmu8okzkdXgCEHUNJjhNJgTV6HrRzP8q4tVKM1dMRsdarL57kdgXGzgHgaRUraHE2Exa7R1P46ynwry",
  "key31": "57VYGEp1aEnWU5z5TUr5AhcLAyLDYpGhxY2Mi8hugZAkS7ncMCtJWUZaMy9Cit6uLKwcEU7uD4vJsY1B81DNVg6W",
  "key32": "42jcJDujGAEiGVtubNeNGT45VsF3ydykioMPuj2kRXCi3y4JYz5rvA2bNGoGx9JUyYJhHHTjWpcLpQ3MmvUudi7h",
  "key33": "3ZjfBwnEQGwGZkrGdBM9CaNpdJJ6BuxsBrQUSd6FFyA1oSiSVsD4SdnTgh7fwDpvUHmpYaAjt2WPXZSbtJi1LbA7",
  "key34": "2tcuSwsiJ8QaKBdST6yKpg52k6Muapzddrk26Cwxp5FYzvWGNWnWriNAp7uGuXuWZvgKJX8fL5zFGkLpvcYg6G87",
  "key35": "8rLfb8ZDCQ457sxbDRDLKPVvfzJonbn6NkM9kc17howBNu9EuAqzpCquEVraCsLAmbJEM2TGNHaBhdXMimJJxoG",
  "key36": "2Ws1tBoUM6CoM3XBfbsUBf4CiDLzExnFfFwcqnuNjcEVoBK6tYZc7z8Y5SbYKBsEPqHKbzQKZ2Zc4NMEBdcbL7UU",
  "key37": "52LF2zzjNa1YbGnDmE6tBeipDFRuf4zHRgmBJRaBjhaVR6SpTvdUr8Rurf7Sf9sk7MTEp4b7AC61znPLFshSFiwZ",
  "key38": "5Sie5AY9WPKmCLAH2KzqgjZrH3Adt8Xdp4kZkQLaqHUrndwec1FcqirrQt2bz8sgZKN28vSVoPhxd9pagmr92D6F",
  "key39": "5Ce12s6od8xhai9yDDgfPFjRKXiRo7wGN3bMt62NPocigSUEDquYiCVPbKwBqL8df8MX2uqiSqrvbmkCQRPgY7gt",
  "key40": "xhAysxUrfN5cjCSsaYw5y4vZticfrzcX3m2kJTdBhcQFMF9fzwJFf4zWQumJYocSTSG2iQ3qCoCon3rY62SV5r4",
  "key41": "3bGQZChqrqttkaCgmuBC5CqFsJruGGHj3QwCXdLs3UeBRv1GAPuLGniALi5TSz2LhnC1eBXGP8S5FPeGCsdorbTe",
  "key42": "8DyDq2AbXtniwK28Djk2K73May78WVpKuUAYJsvu2bpXoShuWW8vay45r3Y2bjoacnCr4C2gsxT4hxGM8Db57F5",
  "key43": "2maJoUfkoaYrCAo9b5J3tpxFsViD6Pu8BcJQspmYZi3kcqwotcrCV57QVChCdpK2TVhcZ24QAKZDztrbpcQabsBo",
  "key44": "4hcvtfBKNSwbUvWENJpCi1xA6ESFF5jWHwhwF62zJXNprBqEetEZEm6yBf4Mrq7EdjYT1BCyZEcPRtnbSwsab8tc",
  "key45": "5yWcoxkwGXTjE8tYkBP1EbNrBCLnje5qqCJMRe8K4mTemLD4BR2v9MDPVeLMzk6GMyH6xyXmg3dirdRxVcfxEiaB",
  "key46": "2T7rAZB8nMDMNnq9NrpBnLA7EGsS8upgLQBvsDpmqCAuSfGXhAwkzvfuu4DaKH81Lhw5HpFDvLAYw3s4Ct5jCUhB"
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
