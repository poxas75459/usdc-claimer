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
    "625hhGaBP7u2G5MbsJuv4sG9bRAFwGazCcAPJZjsxHq59rjA8LBunz4aDQcaBDWZCHsYLbAAn7sTe371SLQeS34f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXVyEV1FXBWhGGt4wyCorhgy7XmVggxSrPRVA6abi3E2wMgCrwphciMXFaex5Aj1qFWky9ZptW84ZD8qWEdV8zu",
  "key1": "bx4vB7Fd1Qe8toGudj9DaYframxiQ2xzcdW8Jr85b2i5EwGTTJDchVaj67vrVPX948nFPGZXEQRh1rEDj7EU1AE",
  "key2": "3XWtZrg3AQeUHLv8SrQkzLb2RTcqCUUKpFyZV7wStnnY8L2GfBGAUNN5KKV2JNmC7D3pKzbNqTS5PrYv1m6NV1r4",
  "key3": "McwGMQ8arQj2sUsjwWz5YYPehnw4E3srx89vrtV8PeCGKNzcmRQ2pt6bsATGNnjhCuwgT9usiWMZVXtCNwVbTwn",
  "key4": "4x2qUoakj4JMizrcDnf2ZyfZFSYsnHajqPyx8o8RJ9WzbeGrW849bD3kqidSzqmuNEdheXjS11QapuGnYKMEwJG3",
  "key5": "2MBS6QrUfq8AB1tuT9imc9jt5crzQVxhETWK8uBEGMTvQ4QQ7MNndxnrAjDEbqWyZJAkLYKVAd5sZLBGy8LZEQTo",
  "key6": "5nCYoHgPE9FUHzzapqNsBMsy4aN579MF94F3Gb7nGNuJwLA6v24PWg83F6tXMfHYMK23RRusnesjghNkiCdW1YkN",
  "key7": "2Ps7XP2h763XtnGEpFB6gPKzm2ER9o8wCXwWicc4ZmoS12N5hD5mMxv6AEsf6pzroHB2C5aX2fHhxxS5c9Li8VJC",
  "key8": "4EjMGDL6ZmSDmtcKm1fSNh1waFeT542bBgErfRC8ahggeNrm5ULLgDSbDcMnmdy8huYEdTnytL2Y9e2vkEhtnYdr",
  "key9": "DTooRC3bjnpyBKsRhDD5atEtf8ttwZY1UgDoPKjafNRvKbsQrVnToWNcZi8AUB2EpcHLhk1mPkCeoQaMa1WFSyQ",
  "key10": "4MzocLn7F7qPtPCXJWZBsZNHsdxvNnuqXNsqjS7GaeVyPodRhcWZ3rnfNzvWczQ2gfJd7efugX64K4PoiCYazsuE",
  "key11": "5tBYXH6ztJKAMesBQ98G99XwzzuYSJYAReaAwdyqMzkcyunGPoP3hrxeDEFxJ15xSBtBVKrcdKiJpSL8A8VyZZAf",
  "key12": "5RrDu3nRPRftx2UpdCBgAwwkgPhiFYTdaRn9jkSnCAxTE76fHWKgrrLWoysHNbTTbtJ4cDK4wic9NVLE2BrbA5z4",
  "key13": "483YA7Nvd2GkQDWWPzzKTfpaWzLSaTVVqQLUppkSQnoryaUnhZYCBx7hR7HCy2Q4C9WzR89AKbvyPUH4xJfHXD6h",
  "key14": "4YMFDNJ9U7Q7xQWWFMJpm73aHGDfjLrcFKqaXU6JgUzZ3PCenLFw1ryXNNP2HZ8DohUaM7uUD4AJ2nfKwUqdpxTZ",
  "key15": "4KZ9eUA3iVzRsHFhKU7ENEKrquNZvG1Nmy3vUBT8cQPEAU1kX1wuWknBt1rL6B1nVENyXv2dXyQQGWjg6od1TjZs",
  "key16": "43FbisNCityG6K4uX9jYFyG2aaUWPQ5Wjn6eunF6mgWS5LEFGbK16AYPe1bzAJJTBqzA92d7nUY3oj8v2ayyCYXt",
  "key17": "4SZtSeHRup1KuC27VPFJqhkGWBNWecSxZ1h6Rw5TokYbnteJdaGPuLPoyxq5rxwZA8bEVF5okxBYzBrJnYtwYZ8q",
  "key18": "44QbcmhaC5fA4zPf6EsXWFsvLxfPLXKGmDyVtUhyD2TXQd3qfB5YVLBKo2tSNnCLLqvX34Nny4o3zvGrYxnktxAN",
  "key19": "6616UmJdFtBbaE4Nd3DUj5Wt2jUCwcoE1AvkDR7XjQPgLXVTNiRaKJpKjoAjAqvszGcBeTSfh5dFKsJZN6Q5ui8Y",
  "key20": "3AnDh6AGYQPUD9Bu84Exyxvu6g4FbphgF5uSfhJDQ52ALPdmvt5FKUr7hdBqMma534vSKxTTimMCZL4TyzPDsJPm",
  "key21": "5GUq2VYY8M7ZybsZWKvYBWKuE3BUWyknxU6mQYML2b34Np8o2brauw4aV3X7jCxiM1Q7hQPJ82T9S7DfMVVkHY8v",
  "key22": "4aksFaZti5NNeSGv8dyJEfirEW45E7Z3771ioiho2sZYDPPheyKZf52fSs4QmocVwHcK37Hf4sMuQg7pQx9RiFLR",
  "key23": "3EVCcznSXhtRYtnA5NgqUK5rn5wL9Nxgn1TqrccKfE96DKr1WVAJ4wYkESCxm5uoYzsV7kR1PhaFEbaqmT1KW86",
  "key24": "4BUy584jLhfUVZhusfqFAKP6gMhc8U9KdfYGADc11TZsSHe85toZiwGZ3Fn6PxXixcBWGi8gWcm7BtpNS8e1mF1B",
  "key25": "52sGgiJCfweAa8n6P7zEPT7ZSfNuSvBVtfCU9pTKN6wV2AeKPx5qrPvbpvcv5TJTUYriH2A45xSAX4gkJF3trjHP",
  "key26": "36TdVNzWRJxzVoCqgfzfF1aGUQBdLCrVEkHKRSc2qr3K8D1ezcsjwpp9T9TppxmQsgZStpeESgKSf198FxkkBrrY",
  "key27": "2BZ2iqGm74r6S6XZK5DSeo1nzR4UvFtH7ueJ7PxwJHVs3RQYpeDQ6e8kot1q4cuXr86KUsJuETCduuLaywWu3NR5",
  "key28": "4aK34jXSnEbbk772d5AQ2TC7mhWMuzDErv8NpoKFatBbx4hxLa38QEBKoZXpwrqDhrE69mpHUecBSecKcETLNXKT",
  "key29": "5MsExp5CfpprdRXy9XnSGbGCB28p3fs2Miug3osYswv6iceAkB3g7rFMtFtNWbSGiVDCA7Q9CykDn8Csxf9LFo3F",
  "key30": "3DaipDYMkkBAAbaKLAKh2iybRa2e6Gzk8xG83PgTg4xqpXxNmzqDwJna6DdpLY7c8yaeRuPBra3x4ii8x6gt7yY8",
  "key31": "5vbgp54TM71kLP5ZJJcz8SojYKp36fjCD9g8E9KvswDuwH7CXwUhWTCJb2ehdhn4EpjDcgXbUd7hMiYQb27NUn6a",
  "key32": "2opJtPXws3x2FK3M2jTdwumcY7guJ2m9xC2tLehEDw7QcbrTdeG8RJVuWB5DroWTfamgw87Jy6R2mnjKEMMZMKUZ",
  "key33": "3ppFK9qFFENGzRULdAEMBqe4Rkd9ET5UArvsLsWML8vkMxkPUAK7EEawetFRfJojGsKGpTkhqs2AsVsz1bFiF7gu",
  "key34": "3j7CjYSjUTn4hw3h9LGWeQKFMVL473Byy6Y98vEmoiEU3DeRpjENyznC97r7vkjwBj1T5GpnKEG4cAETfrFYJ4NY",
  "key35": "4ZjfStQsWPU5wZsq43f8qcgWHQmvo5SESs27s3jor6hg4p97kFuZfBmnWmTGbKa8Loy8rgSEFZVkCzE2a528tNvE",
  "key36": "2ffarm6EgxvSjyaTkToPRnyRQL56MKJMBja1eRghcjAs7ajh5SUoBQuxLgpLpegDrxW7pxyJBVxa1iXv3o1iq9Kt",
  "key37": "3ns8S2UMDTbpUzXaxcQnTpGg2BrH6mRQhmQC1hSH9NQDjnWksu2kKYAySXEmmGyx4E7Rxkssj5qiTqh4gKoDLTV8"
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
