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
    "5BTpQyCUkd6dq19VqWd7weicqGAQ8N9MdHTcF8ypBt9MJJ7aCFZosgACiQyrtDnp7dh3Pm8jTTVxBweL1VDGc74K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkFg6QtN2rQaYfK7EG7inup9jjYn5oQSn5hNTzQnpbEDE2KuSwTqLDxTZSZ3YRRkby6HLagdnRM1WAD6FK4FFqT",
  "key1": "5NfgKARUVUnvro6XVU7wjxJPwi6BcrBitzk1U4jHTXxpDtruMzBBXnWd4jxNVzTQtDpXCAnQ7tdzc9pHG4YHxPBj",
  "key2": "46GXDQHXEWJHj4BPc2fzha9cSUFtBxBECZZJ2zwCb7FB2F1hr94jivxtFJVzF8eGcEddZkNSMMVQtixQXW46Cm6c",
  "key3": "dnDktahBFryoHFFLJUvV8WxMKCsHVNDjqbWFZPNcBr8KorQCPXuuUBTQye1ZByMigRX18s3E5wR1cXPGLPotZTh",
  "key4": "qzsUduA2zf44qFD5HbFGRF3GT9221vxJpykmJvGpLndqRbEMdr4gp67sxyBsej7D6fPh8JwnD9mLKPGNjuSWRe3",
  "key5": "5YspC9F5pS2c6gTaupKTbmLFY1DQMZR37UWH5wGy9MGxPX6NSPy1gU6cw25mGpWSAYPhp7zAWMWM6bMuw6hFyFii",
  "key6": "2VZveRRGRoFzH9fbW9Tf5KQmxFHjV1J6Kvm7zwnv13nHkJWZQkCjNYbrWMhq5pAdJ5nrU3a41xMqr9rqeQzamAFD",
  "key7": "56CW9j9EsPDxD9CJw6Hcv5D1KjNRe68acTfjsm5AEMrVPNpMktvuTy6NX3qbcFjbrwXaNdu6tUXBDroZbYGVpKNC",
  "key8": "2y6kYj9GCqbr1MH1HqSkhEGQG5pSg6wkzYUTd2sQc6EtfUW31cbKCFm6tUcKmRyfpDe3ojjRQcmR5voWhiNkoxr1",
  "key9": "3HehBhD65di8oa3Di3hBf1Bzm8c7uiuYJdtcCAvEqyK4yLc3Vz6v4TcYJAuW3ELdG7bKPaFpeyJHXuFCHrf2pzwh",
  "key10": "Ysch5eRjWmwHXYHk7cAR17RMn9nm7JpjEVX6Np89AUZvkorQJ82wFouLBJbiwvapGfvwqRbdmGFia2PYSoqjbzy",
  "key11": "3gw3659DLcrz1iW6nt5XPzRjbKQy76hjv2mArJA8sudnGo7Uhc2W28ZruMwKUfVJk5igbf1khFvBVJr43576paz5",
  "key12": "i27x3o6w7aSi4tZ4bP7nj8cEbFVggA7P7uL5vf3r2oBJAbGX64Ph9tGxKxuExQfGe625dsbSQ6aC11zNYVxfQCo",
  "key13": "PLoTXveW17CyVdWRLdyc3ETPvaEkSkFAzbAwyafCBPUeBQWceaJeVjo52W4kZcr1Au7yFGmZ4AQ2r2UZR1brvJ8",
  "key14": "4PGjzQjwkAfMBrGcVr8nC6stTxa3qckikckMrqrb19ip5r4U57S6VFPMEnFN7omZi8bewqHLAe7n9SP7ArLoGBZC",
  "key15": "122sAVowXNQRZnRDhHw4QWrmBdeUbRfNy2yLqCg3kd8JkJEei6y7XjQgSEb7xwvdkA1ZTHBJVQMhkxXrUQtLieRa",
  "key16": "5MoKf3m2jFS456kTgUocyLp45Xyiodrr5zpgn2Q4WV6p1kR6qxi6iNt4WNzy1z4U1Tpcdgd1dNS3kLbLPhPa6CCm",
  "key17": "mRHft8UhcbS9s8JzWboewM2peuBLzpgfWNZm9cdzMakvnBaaBUHry85DnFWwb1Z6b7Uz1qvZMJHR9ZA2tyjpUfm",
  "key18": "irWfP47pzobrAe7GBvae21PYszVZB7GbSYPREn4cA75Zr2G6PLJ6CD29Y6gg46e42ED9NGZpCkuq5VL9QzQEyR1",
  "key19": "5PxcZGUiBUtyViPKMkT42xj6GRX34tTnU8vcA8KbRFTY33BobfgmnxUvK97BCCDSzUrnyiTna5aEFvK1wE5vATu1",
  "key20": "2Tf7UbuStNL94ZAzXWx2taHqEdnGct47pBDFd63MTJaLDUYPqiZ3uHfNqL2aug8Jhm7busg29Ty5qUUBiMN6Bkxv",
  "key21": "3ExwpbdAArtrgujWyhgFjvmo7eLyKR7VagWE4tdHicRMKt9Mcqj8wJ5eRh4UdqoEYdXp2jX8q4uBurvLL6YaQ26r",
  "key22": "RQV4PgEpBvYT43va7u5F7F1PTxuRhR3mLeSCoCKpg64ZviZvMrHV2cSoRFLeMFPhSigCqRnu3veeUXCsAtPoKdw",
  "key23": "K2YVuB1AP6NGNejSGbyd2FD2Ya4qUdEBURX9t3KsAEPpRL4mgAxL5Thhbi2VCityQKygJqKBszJDiyHyUsygTiV",
  "key24": "41KmXYUJ7fUsazRp8o1gUH5o2Mwb2b6bRPBboHrErf7qEASEpzbpNSXnEPUXMQL18anM8WinMaSoy5u1gxoqfwxR",
  "key25": "tk4jHXTeSpP7jRmSd7A4SvjR1EkQueyxXWDvJJNc12fL5GA69HEWxGL8cWZKZtyQFVPMt3dzixp2x4QQfn5X9ZM",
  "key26": "5qkemE5BmbycSmBPg9MASSYV9ByugXTdNfK2pA1PEadHhDLPN1ibjiZPTQ59hkU2njurGSNwmknJE6krbsj653Gx",
  "key27": "2eyQTNLg6q7C8ihxxPEPidjazTTwGUcYqKx5pckEuaNAVS3YZwgBjpVh4A1eizi5HsDedivhGpaK3pf43a2WUF4a",
  "key28": "26avdA869tzF5PG4zsn6t6FZQJr5NC2jBB3j4wUPr84wPTGxb43tRVBWFbmKUMWxGAFojC1N8DirJYifEinsvCxK",
  "key29": "4WrjDey7LtrLBNNX8gNBhRSh2jYrAjaj9fQo43uzWGxGMnrkepGrK9UMHRcZb78RR4giuQ3vtyCKLaMPPQ58MLCM",
  "key30": "4FoXqZMesFbTXM2q8KN3ZiJM536314e5Xvk9Hzw5F9YbzUDvXcgniDjbYpKzbcx4ZA6pnskFidDumEceUegSP1ai",
  "key31": "VPc1dxgtydDQP8TCHeRAyeAYY5pmUtbg8yNKswndZ3xFKbAUDvEgrGkqtYM9DYJDXYMqh97te6kzY9gCuCziaSe",
  "key32": "4mnfJ4LNhXdzoY4j6yKfm7hBWuozVVTKf4aSCJWV39BaZe7y3KPWTQdMjycH8H7Rng4spiAGiYxzfHMz128JAHGK",
  "key33": "WgsmRG8t54co85Ta2VQrNXJxP49RmmtTX93Sf3Z7EcCjh1sPbAi7Vo7cfGF7hbAB8nj6Xakb4eBtFtDrp692XSR",
  "key34": "5TAY91VcuzvpMjTVXdRhpS5somF6CWNgEn3RxDpdnBny3WffMxLqDBNo7sqq18RP8diVf7KViSajZJ4695hZ5CGN",
  "key35": "4GJtvySjrYK8ggGZAx3bXVpSrBLSkKw7ZdabayqDzrscidtsAeSBnYj5CJKni6Zett3xmTwhmA5itUYRh59vTQba",
  "key36": "Nh1AGfaUoqZXVBs5ewmZKs7eAgyHYa8xs5csrvoPH3pzwSn81qQwqnARcQergi3Qri5hFwWoevwtxuq6QWDJ6zz",
  "key37": "3EjE3Nk8byCnLh5ScQNp4con8rTEu57n7KnhUSoUsdVffnGFtdixED8yrLoy1YPnQMdDcw7M6B5qbKrrGTxnXMgL",
  "key38": "3j7bHkzGsbPaLG9KzJo4QmNBW3n4jRrwqp9xkFRJeJ7eSFaZ18LX5PTQRW8GiFoZLPf7CyJZkxaFu71LzbhqJzhq"
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
