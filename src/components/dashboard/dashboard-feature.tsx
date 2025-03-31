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
    "31o1fbGgmWXuXAKXuGPutj4YN18vGgcZ5JaBNSoNzPwh9reCTf9wFU6s72QmxKmnbAsAaywofsPzZscukJQ4bcsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41h1ivKXWSvRUN2veAWbqECAnWYTK62pM9uk3w6ogDtakeJRLheTckav2B5WgSgkoY438sBDaSHxdXpg7Efrc14r",
  "key1": "4qb8VM3HP15Fy5ADcYn79mQaKruz9uYj6endwYXJWFoLZCnCCwubMAoFHAvHsYkn7LHxGcJ6DJQocXmF3G3RcxzY",
  "key2": "21yUbZE6JAvxZh5JNg5VXsv9E3ZqhHXrJDaanoooU7U7ZTvDnpz4pfWJ8R7cX3tXMv5qCpct9fn3tNpu4QegcPVP",
  "key3": "4g8sjF74ZReD6dZMuzkPpCg3CK4XipDLiKqPXConHLxBtgUWbc3t7Waq2dyQ9CQM19fqnW1eyXJx8vfVThcFoUoN",
  "key4": "AnRfmvqw6D9rsmpbXSc4K9QbBsjNuPjYTg5ZWWpfFGjH1NtJgWKYLaSiARk26FFgjUJyyEeodTT9hmx1SoPFXEp",
  "key5": "32yfXAoKX84ijHCfEd6MiiNRLekRWGNq7kdatVEsmLi3GKbVZkS1nLirarUmhmjsWv4sSb98EMbMFVWbsCXr34Ho",
  "key6": "4iXg4P6RxZLRHYu5XDQnXeq4vvUWG2UYVnebUEcJoFSHVN7ATMbE3dh51xUbzj7cYjJJaGzCvsv1qfRdnSSj4uJs",
  "key7": "2Lj51g2jUa3rjCkrQcgiTRDo8us2fvE74n7fbFdWsxchaDKqc7bqKcz2YQ4YBHg2hMXEyJLkGuSPB9Zb1h3JcMCT",
  "key8": "4533HaKputWiBsHUzCMk2p2kEZEnmnK9t8VfgyWLGFcoYqa7cQtVSm2SURoJnWSPswxQtzzYpU5ai9sa9h57UuD2",
  "key9": "3TVjovy4xvFQeCgQFD31L2A2maFzKzqg3hpQ8ySTGGRezq8zxx6uwFXZ5wCnCxFUAuR2Cvjxj2u4n6d9VL7icjKo",
  "key10": "2b8sQG3hmRYsp2TLmsVbDkrQLr7KfLo8BPt8DCaHwn8Xfc3k6GbLsxxoM6Tiwij15kVKHS6sxL4XLhqYsDwS33Uo",
  "key11": "4WxEdGDXZvVXrSQTAtCxNzL5q4wYdgeHVehUuQk76vNz1mjBqF6j97x3G5uxo4EqSZqyTeX8nUP9faqBPaDnGa6n",
  "key12": "4qXCDw2gA6W4gncVfW3uhQXzasegxk7SxWcPMibMmyADTYzTdHtUbEenwgCkJptCmoEGVKNALVsTqsGH8XUt7EHm",
  "key13": "5odpzWzxVmgfBkjNd9mbadHhK2QmGsrQUCe4oXoDGjJQsbyWhYWrybD92KojNiHusFMKcRM81cfCpaAxMB8bFpnh",
  "key14": "2M2HWbNiVPFXdYe2Ftak6o5j9umBPVQ9AT9ZVaGt5WwGwh4VQuu9MgUjmgTtDmif6r2EEnoERcTarNfTP7xQ1XtX",
  "key15": "4NuGfiHdKe3wdMq5LLtfupbvva451ZAWuCEQrswys9QdudNN3tUAK5K1ssTG1SZWBzjhGM4BjeGNMQNr24M3enim",
  "key16": "n9UkvXzbAarGLtJtcxodeFPb53GVErpnuhcq3Sm6eJvJLxYcbDy7YoWW8poKHhXFeyiMFEcCG2soFbyJX18kQN8",
  "key17": "2fneVAZRPTfzYaQBPScyjLmN1zcRdaHr9Be3uM9s7tseWvXtmNecDRfAXfuLHzAhF5d7oPqd7cLN4aRxg765upfq",
  "key18": "3Pdcbvi4LQb53oCBEXYo73jXxNba3xsXDcobK73QQhZLioFd7c6Y6cipPS4ZdztZA8WPxTix1MWoEcEwLPEj1Gqo",
  "key19": "ybXEufrUbg2sy3VqtUjhwvpgbDXMCrYVA1AqtJJagpesFyWmkVKMLH8fjzRrR7VznjcYVxZDFRKJcmX35vACSXs",
  "key20": "59MucjjtiYy6UAoHPwuVjR2djB6ybUZ1MLh3RiVdn2MK4hQJ3uJYxzF6B99QjdEeh6uPeAVQocWjpJRFgTUd69Fo",
  "key21": "4K9KhMdUXFDVgyMn4xm7ePB8qfx7cD1m5ytQ5Nc8FuQmEC7zDVZepZo8WtzPLrmZyZ3o5jMx3DdsD4siPfvkDi9f",
  "key22": "fhnz3svHQnDX8p6sMbY7jUuLMzuwVpSyc8ETdzB9fjQPUaeDJAzAwa495UV7WGDBbxJQFzdSJtJ6CT2RjZ6JJKf",
  "key23": "KDSbeXCrBTd5Kh5jXQbbQREh2RtKiEbRQJAMGpHG2aAUm8sB5tPJ9mXDrcz85CkXrcr4fzeJPqtSs9yfHADscBj",
  "key24": "HKq2kuymRTsVmYfvnfesQ8qWYbA8MQCHyEvz5JiMF4j4zJ7zEs49FJVj8n36nNVMy6o8kbLd4JnGN4NNBTqxkac",
  "key25": "2EKAsocw3h3wt4fmCwrgDVnYouLTgBUPFDagGycXRfnZZFxccqXqLDXDpD31qsnJJpxa84CgG2tzVen1By1KzFjQ",
  "key26": "8ytgCq9w8vxDCnEcdgToJwB6qc7y3E53m4REVV2untm43ipiYerKhS8pJHY95prA2wi8FexpFiw8T3eWWyk4edx",
  "key27": "2XiBmtkH5czfzRh2uExCb5uEig9bZCEvXso5SbMfqU8be2mv1qecXP7hKauGfRDqmLVHtfwyujxEVJKheqwiXJMY",
  "key28": "5xvC6GkMfp8SjYbNkco8xxNdwheSPjh6yWnyL9nqDpK9fFxUWaon74VErr1nCmF9ELf37YkYs519uNeVfMgxWkLj",
  "key29": "4sqteL9vp7jc1NayKGLXWNT1twDeFydC2wcyr4TxZ3xsn52MNKbLEn7ATMS8toEsH1TtgRoxeGK4BZqLyZc9fDRi",
  "key30": "5nf8zAo6FquELpQYnHpFQ4zXiDfdjUeDXeMPB89akW66SMiGa3Ep9GVpQLcMzCYCf6UViMQXPb6ZDpyCv2NQvrkz",
  "key31": "vGM33qmJABUzArHHdKmSjAJoSvK8KJ2WZ5Td2XXAjcDpHsu3E6oQJ4PRA2EN2nqy8DJeHv1cqow6VAjwpz5q2Di",
  "key32": "2VJySTYZ2VS1kSVqAUSPDKt78bjVDRAMSajEiNdiLyL76gJTLd1E7PNUWfbCtyGLrwNAmX8VxWkEVgHBLq9CFDp7",
  "key33": "J4UUtsbWqQ5oRfmanxVt5TQyCdxNTPs4UajNUYayprkdBmqAYCdDTTLjbqy7PnHvrZp4S1tsdVLqrGet1fKALdu",
  "key34": "5pSn8CvNiwzU9ZeWFXp5ARqhnkirc5xkeWBHsq5dpxp6YPtwYVbVByaUJb6M2KxydeRTGvgmCqqvvQxwLjCPd9u2",
  "key35": "2f8vgtwyQVgcq9WfPzoeVB124Ei46xoxfmK2Dg62jcTSwp3Vy7JDZizrEyWgUmvtgnR39EvHKGqEizNnXk3331vH",
  "key36": "5yRnDGiWvycaUs4sJmn1JYTc8c9s1qyTFVJnxJdfg3RngkKLzXAgRKNBqGyJHfMCygwj5zYEXQjTP55ByYymJ3KE",
  "key37": "Rj222HX5qpm9zTtsqmqLbgWxf5muZ96XsLPQCJhiXq88ba1ysfGhiLAeyb5g4eFsW2SVR2wffoJkVB75MABQCTa",
  "key38": "UWAYtQ4y9sogQ5azbXjDB5PvCMk1Dv6dCckn6GqgynsubPLHPogHNfqgFXgUP7fgyeETiPyXbcdHLPcmbhaf4ND",
  "key39": "5fSAcELM8Az65g1UDU1fNMbqkqAfsftfoxd6NgbkV7VSrMoVN6K6yLmt53KBUYasDpqUZ5DeoyRtKBzgRZp18Pym",
  "key40": "2KS1FEgubcbU59S2jkxQMs8sAFxahY7MLdem5BAunAUAcZJKBBjw4fSRmoYvZB3b6Uex3yMZv6sBZiBd7QEFEx7r",
  "key41": "4yMCiEDeueor5EGbE6gJ9kNKrykGcmJp28WcTTfA4sMKBCCYWJTEPGS3Pch4U2hTpSFPar68MDX4htVJuoeTGLXH",
  "key42": "2KR2JJ5zm8AYbgtv2nm2u66Vm8nYLmq5qETToKdvXXhH9qkcnm1UhT6BvQgMMMgKaRqNS8Ny9KvwsiABTPvKCMUY",
  "key43": "2JLLdw9Pk3GeyEWqqyFTbnMDuSuh3PRNgp3BcGHTMYm5YbHhBTnRNg3J4SnMoMHAesF3U7EBzVn2Rx6yNWupsAE3",
  "key44": "2j25BaS9dcPo3TzJnaEKZXPj55p2xKsESA4oJMhrc1sk4bfsrgagwHsnhVPjLVfZd98iti9cZAHJa1cRn6xQgHX4",
  "key45": "66p7QQRTmQh84jr8S6LFTbLFnKjy7W4ismeCuJoMFMBLcG61EXHY9fY8XUpwtPyFvyk1sB7uQdZKYHBavwbcdGH4",
  "key46": "49CCok6NWbygAMTjrE24WvRi4ZUfvVZd4Yri5mzJjGyQwbV1S8TX1wkad2AcqidjfedGGeSzG6jwnubVCPtv5wmj",
  "key47": "3J2yXym46tG2cnF9D91dY95wsMphCb7DMuG77mswTjSsnzB3EQHxFFkpMFdcJk5YDtiBXk8tWfnSANrxDMzDEaPP"
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
