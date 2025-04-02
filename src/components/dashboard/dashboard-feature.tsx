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
    "4YQsJaN7CH4ryJJKzhFHKBtAQFkQwFeMGCCNcaXzurXcz4vPD3jXovtwV5VagdY5rwKRe3sbzakAFp5mYaK5ANSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61VwBKN7cqt8gkMjdTsNiQ9zkjpmdswkzJPAfPz8JN11XyBAQHu1RJK1f9ufPmvPNuRqrEFaVmKWr3J6RDnTMtfi",
  "key1": "2t8jM3QF42McC3SehE5kpgKt7YbcL9BxmcqvHDhnWK53APweDS9o9zppRzjVydjwN8NqU3VyahxQyVJAdeULQCxq",
  "key2": "myctuh4rwbjqMqAMHHVT3a7yYqUPQ4yKcmK1N5CRDSyaxUPL8sXMrowDnazut9xk2TWbmJZ4bKoWPwmyc77eNES",
  "key3": "aJcUp5U9FtxM4tLDrxXrhirFfCjZ8HHD5fhpSaWrhzhjh5yTrhM2DnYmm2i4swGeS4p1g3xZ4c7GKyUjLuHbKuH",
  "key4": "JszyXfKMpieEyjcKfuFagRreyodnrykGK7xxei7kfM7sVH1hPrC426pSSGRnbLSk4vo4P5gH5Ctc6UjDNcCYBtx",
  "key5": "BcZGQDyvLfub81EKwWamgbU8hBjEPfLuSgmsoDo6M1P5egsE5DTJWn5kSy47naNZarGXthb56iiid4ZmbHxQAAU",
  "key6": "4tr5NUa8zw2VMSGeo5katVHzaQZTQFB1SeTKMwaS91LH7BwCiduxhsUbjrYUrVg7Pgi9pXhFHsxk2Y4h9hWww66f",
  "key7": "5RyjNavia2yejkrQWDrfwp9smEXPg2Ggei3kLZaAZNG5S3w3zZX3PgD94AqMEnM8VH15VQ7GoQNM784WDaVsK9Bb",
  "key8": "5p9v5823P9q1HBWD1zxdKC1pjXe3zbQdzwU9ZkW1cvabJTr6K7doT6M49r9J7LGD6u9acKMTestCMeJJ1BQ5uvZs",
  "key9": "3sWxZj9r6KTEN7W2STc7mgQkKbKUv8raMEp4wDeQdYQinbYG1xVgLu9c4bQYyqDar5h4RsLthiWCGrDFH1hfhE6W",
  "key10": "2MRenYkeGJxhFLnPCwuxd86xV1EnpaSoboejVrUAvnQz4xxzw5nfZ7Ww3XonLEJGnPgAMpFVE9tFXcePTzTS3ycp",
  "key11": "3aQwe5GYcoX3viQ7T6wnRxrw4DK1eaDYNfT6gGWbrhqBbPPXh5TL5WSjeCpyNcHNt3CSqPZLpwpLhtHxdK7oD7k8",
  "key12": "5HGdaD6Wj3wV9iqzksXQq5XVWeUsogt9faRKrJ94BExqCKo3i9Z6vgW12mkHdBSy92oAWApguMCxffMq3boTVHGt",
  "key13": "2shNRJy1Q5QstxXyF5CRBEyxQmKm3RcRVsnZHkPX7xsaZafKmsTkdgC2DncyeaNPDtwStMQpsfN7ZRWpUEAXK38e",
  "key14": "RTs7F7inr5JyhZBpjVFs9edmTX2MUnK9MuxrAMHMLYDU2xsoRfzusKS5ios3DLaxKpR7dLqyqQdGRVtKbtXDNWK",
  "key15": "2VTaentG38FFZRLANc2Hh2gJAwbGD891WtsCpCTfqnckgR1ZN8GHpabtfWtSSb71mPwiYWNmjHJHfrspScyA8Euz",
  "key16": "TTBsMm4wVFqoiRr5AJwfG81fd9Nbp8E7ejXjSs4Z6fhPz8Bb6D2hgqzJCJMWrAFV6uMSHZiPvgNdjc5hsHYm1u6",
  "key17": "1swc3V3buxPhyxDrnoMA23RBuahWDLDM32HjCbL5twci25mG5TcXdsEJTFbXh1Zf6ThEevWGGfuZSwspg8oXg1D",
  "key18": "4wNQTvRtZj1gVNGRzsidmi7HQP4BbvHz6WnY9KjbHi9N7oUW7hdwvLHcamzPezSzPMEcKS56uUo39ZHBUtotLxwE",
  "key19": "4w5GSKgRCM8DMBXiXRcicrrvHCRw5JfNVX1v3meHUPhs2qMsgEjS67Mpp22Sky1mTpjiDH3q9Ut5eawWohMs21iK",
  "key20": "4UB1ce26ubppkgzMEeegmBAo3vVkZH1JhytLhZKpWAijcadqPS9Cb3UWNEeEwTvTfivTmZNrjk6RB2nNKXd4fq3V",
  "key21": "3nCPSAZa3fMKmFYsmMPGp4AFuu32WnGKY9dTnRUg4XXZMseY59JscSNNwMcQtFnrSxanuZRkVW2HddpWCceWGKQh",
  "key22": "5hCrhabQ1QgSfGnwJZU6pR8Mqp8mHPhgoprQSoR1mAhRezhqg1ZTSfi34squxfvmWkAFdZcnWLjMXkKdAEebUCez",
  "key23": "4ZH8yq1Y6w1YCFpPWUhjw8BpAn3MHn3qCpzNjfZBCUmSEUFnDn5ZkNmPK2CpdoT35PD3djPVkHyqJDivxfKtFi4N",
  "key24": "3LbR6KEY6Pg1Z84SFbyqh3E3bdbEQzTkPAY8gaNo5CY6kpDvrmGUNs45SMeQBF1puEJvq1pRQdakNx5nt3zhaFpT",
  "key25": "2EMSH4dFcvNZjw6JFP96ysD2fUuehUbu3EHp2isahNq3jMuqwWtNGDEHn1vLu6NRScm6bNKHpkxMHy5eHEavos1r",
  "key26": "5wWrAtrBKVQ4y8eNC2B6qCbJMSydwuhDmfrxSGqswvqiRYXVJSr2JW64pvFE7KebEBvdLjz1pYWXt51825k1WZfp",
  "key27": "2ZDpeVgtAmNhuph5pkDWyLyufUEfXbGY8h6cyNKTUG2QRUtjivwaWYMNMymTJnbdyqeDeCx1fM3cbJm7aXBSFMmV",
  "key28": "3aGJTLJfC7PHjr8hvHA41MzGWYCRH6p6dwxVjrd36VLJEwayn1Tu9uUByYL5XYzB8FtgEx2atrxmqWV4bdswXC6X",
  "key29": "8XXJiLJYf1xtxtsCB3V1PdMy5xhEariJGG2o3FYsHwqh3rv3ZjugSdEsGssWGEpMBbhruRiLG4EPVTxmJAVYkpJ",
  "key30": "5F3ckKmXzLqHd4jycXQN17HR2RvutA4NcGQWPqfQY5Gy9jETSogVCQVpe337actrfSzxTkQNH7MdL4RuL6PiUzYz",
  "key31": "47NLMf3pxQLqkCCqcffa98ZiySznifPq1VAyCkX7Va3bus5QXr4gbJYeyj3Qp5JQEGwsBxJv3MMGd3j9Yo77FRo7",
  "key32": "3oBZRCYN8dW9ZsMDzc85LLCi5u5d1NEFxMAWGUtdSZ3KoBtM6wLmfNtSZYQi5HYzY84p2VoGkAEZ2VJPmtxE6B65",
  "key33": "2ayPJfUUzWxNkeZkGNZ3tN1P8Rfwn87fWgnxewnnq1ZpGLjYinvNxKxpML5qgmnJn8whhDMDC3n4zWXaoogBewZQ",
  "key34": "xaSXoomgLdUix9uD9TzxgT5PF6gEuuHLbCnSmBzWYfBYCdSLZPnBa8ufibtzAr7nBJPV8XMpBf6dMgozogjkYbz",
  "key35": "2KSDiysVGvLsx2CqMFTJos5BY7iBT8M8ECVRLu8Yd59udQLD5Y1i4Lb8ZZ2kDE9yJA8rFTZsPxYpQwjc3C9Bc6DC",
  "key36": "3yQ1H8hXgjyPEvJPw8oSpbLZBG64xk2TRPKQW4sHDEqxtjJRfqxQFw7bRphD4dodZAXrnMoVLppFv7w9TjZksT2X",
  "key37": "5J3QNkmDEerdvMLSe7U1ubUWJamiaq9xgw9A34hU7NzfWesqsbwVzUkFfhht5zdcVUGVTvJxvrgAMWbVX235Sg1Z",
  "key38": "4fVHt3agNLfQA3kSwekvLqapYSUbH3xoYUgtqYFwnoU2Yg9WnygCnEpd74nKyEH4moRg8WJmSVjVg52yvxBZrPFR"
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
