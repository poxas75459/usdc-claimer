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
    "4vbPWfWbQLF9NqZpgkWKfW9QtLWNLomt3JeXgSaC7KsVuqp1FePhfVmLYPxFcFYC9vsYC2DbSmnWsBQ4uBNAeaJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kLVsS2FuiCKJLk18iWMaLfCye1z1BR8PbS9DwJG8HjwkcEBwH8jBssM5mnwmAeTMXY8sPthCp4bRwbpwtU2Vkbr",
  "key1": "67Ja5hrjE4V4LVPkYaDGRTprXDJJwT65hanjaprys26BMy5ozQj4p4hLXSMcyFYfZwsQjWT5J5DeQ2L94KnN6BJL",
  "key2": "4UAPmJNKydQfAtHX1MYagMxhaxPXEMkXfY9K2vMSQGKFk9eeSSnwD6zb7vXVZpZyN2G2W3Jj9rXWAtXExq3FPMgh",
  "key3": "mnKiTrVim8EsirEs7v3wxMGadSHkMR2HRFLT2Yp4UAgewUcY1iQ8nfNLG78Yg2te5pGQ9vDjgL2aqJAo7ZWuX3N",
  "key4": "5nTLqWHJ1wJ78yvig42jHGLopUzLZjz544WV5R4HKejwLyvVbwZWVPQzEVAq8bimDEzvFyYB548129bvkEhZ67b",
  "key5": "jewihD9y9k5PzMoHbELzJtgVy38AND1ZFgDiKq7tKzkjZ66W5w5uyozroBBKoaUKfbJVaAKga5thdb6351sFo9m",
  "key6": "dmpfWsAXgYybydC45eo9d3q5RsELrkJEaVmiVm1FAPd4Q38DPtoZmLTWNcN4HmmMVbXAqWenhbtjmiEHsu514Qt",
  "key7": "62KvtHL9vZdbZAPv7mfxRaYotMX9ntXMmb1C6XLsaqxViURm1ReVEQnnXDBryn69JViFREHuMQUHtSmhPcVXVLZ8",
  "key8": "2pYUTaksBCPfMUnZa75ZCnaUTnTGKKAUSJXkxbRQHSwYGzzvB8onX4ZxrS7oEfK3vjpyL9P3VSNnTPBKU1Uqyyud",
  "key9": "2XtAovd1pcz8buvRh6Uig4wVRKmZpYEd5C54SQLk7Ye6v5GmvhyNanjRvyaMfsd3y4hyR1RWR4JfMGQxALYRedKv",
  "key10": "63yKFG2Lu8ygSABLAgmz6u3NqZ27uRYvb9fT6ZnUdbnDh6Go19RhLtFiZUwAviHnHoCjQHrrUsNhx776RNfu2aQs",
  "key11": "3fS1eMYHsePyWktiVGsPtw6qDNmJgY3DjG89K7NPU4qZp3mFwmcVLV258rfqyora7hNrCGQRtdiyz7XmonQRx8Kq",
  "key12": "4VUqMqr1wJ5kVVyayUKZUSPHaUeV2hftT9qpo3UrwZV2uypFq89eAUZxcw2ShkBZ9Zo3Y5MrhPUbquR7aukhgnb7",
  "key13": "5dtQkCxqFApiHXJxQPdc22wPoVpRk5Zc7rbL1kyRCnLaFQYSjKhoqTpz9cxhkf7ACTCY2hyQ4uREEnzKKcRM7KUW",
  "key14": "3w9NiXPHGkAbDBjDo2hfV6AsoDeRs5g9bYjmTp6UQsAnBQMzNM8apDMVQ5aCv5ee6ox56E18hnnBb5sfL2zVGGtz",
  "key15": "2Jcf8as4rejqZ8YmbY1gTmmeM8vYQ2nDdMXsnWCMo1bKNbhExgQ89HaHahYPApYFRh1axtmdH4TNAiy7uLmDVz3S",
  "key16": "3kfc4gFbEo2213RmTFdxjJju7WGj5vHdhfspEqaviDELU4eB4U8pTKASFw5mme1EK4eCAiirhH3swhDq9USPt9Q3",
  "key17": "2Puu19tzeaX3wRHvFdCyYtY7nvpg5HWSPtnNTVh2AG8rpbcszxq51mMwcyEMB4AnrcLCXZoTyF5x92k7susaQfki",
  "key18": "4mtdAUdci3TqZu7pkByLR23KrTkbrDz3mQYEQiwUjtAwEvfJ7nWwiXXzw9rC9n836UFrB6wmsP8Py8voknLFijCE",
  "key19": "E1MUw83u47cNDuwtvinTm27jRMjFs8VVeiaaennHyLFUnrFKWjfgethKjF5cvMxDyU4kCydYsfrRQZUBRstvbVr",
  "key20": "5XvqwUbQvxJctqNXESovbRu8t4KditgUYUzNHxVmXryKShXhYxYs5XGNq9X4bh1RQLhjA4yTgoMvuNTTU9iu1S1x",
  "key21": "5oV3vRmEn2XmNVwS8Lo1dbSGTrqcgeti77fQgH3GQHP9UGJjg2tmtQLedLg6X4J93hMtFQhnhhZMendzAVgumwxc",
  "key22": "RRELvdUsxkYyaETMJzHPLNkhKy22CJZLvDz8QddTfqyXKF4pa6sT92jyAHDuqpNoQ8RHxNesPi6LT7gCtsyJR7h",
  "key23": "4E96KaoEwqvbLK3Rz8zBncNXm4MZDNTQPjvPpzQbrUmXG5erc4j5tqe6BsgRTG45DpWWYeiXcUztZchtKrgrBrUY",
  "key24": "58dygixmJ4LFmHArHu44Djiz17bMSccQ4kFfBXGZuR3fAB7rWjH3nH6ELpuUr1pgmFuRQ2TskEvaudgy1Mub11Eg",
  "key25": "3tq31hvr5AdZJrVVZhsa9J3uCmfkkF6JYvFzrpKqty8VpDHWnLhRHNaawDxdBPEESbnpYKpJ83Q1f3xjGiEyAVLG",
  "key26": "4H1btnYQUruBCiXmnd2JT7ySssdbpC8Tm7kJJpKiUXDyBi3qo246Jh9q3yHujtHKmkgn1KDmLyQ2rvSA8NMb3z7k",
  "key27": "5Rd2PMoRfCBCBhXv7mdJUh2Nfc8yNQHVvzeWsKJQSqRv2wXu7ty6nm4UPQLYvjZkzZsg2JGi6BHFnqrCiaQBAAPB",
  "key28": "2h8vdXcygmtJuc8hQW1GQLbf8gzPBquB8KxyrT5r5jbcvkay7ze8n4paiLeKdP31RkMu2XV7qxk5pcE65bWkeZdt",
  "key29": "4UvmG4ETuxVvCxSNimg9znZDfjKQnTHLdk5zpbshpHEW7j6QzDGLEGMD5fwGaZZ29qj1aJWNpHghrCiJ6HLo1H3v",
  "key30": "8bqdRqRdPTyowDJLYrPPEPZVTtP5sCRZ2VrQ9KTTBac7xuLNK7pr51tWPVW9DAibjfXktuSaAh6LSQDLUGbr9gD",
  "key31": "5oSVuXdzHN3PmMy86xkQf75XAp5imCdr73euYEZPqEATXj6kWYuWrjgYehWYySbfhFTivTbkL8GHvJap8w7v8UWn",
  "key32": "51dYa43xc4RNh6oBtZrfGJBgzac8ZoRTjo2zcr7x8b6wUhcwtTZL3oJh7ZhfET8ZKGU4WjaRUif4KviFvjAKmw9Z",
  "key33": "21sUKRxBkQ4EoHNgy2K59d3hWJFWMsMk1NRusBFi818y3BJDWx1f1YTXKiTXafFGxtnaKRYFuCQq3EAx6nW7hxxH",
  "key34": "555nfFT1nu2cLso96q28dMQ2EK42ND6tASHftPKdyxWTk5cCGm1QNxPzfPTaBjjYrz7nV34akttaG1hVeod2yzU9",
  "key35": "4nM2nZj9T3KQ4h19SQPChvkV2Wm8vEQcWLAnmW5RS5NfxM678mKYCxVWEHTmJ4udztQsk4bTGf6dspg1mBxPNzMz",
  "key36": "2Bt4ApuNxmXfcZdb1UyciNunHiQM4T2bcPtEqGF5svt6pwKGJMN82ihwdyfrwW1pbfzR1NvebDyxZU2CdcDR3ptp",
  "key37": "2r9xXnY5bCnpbsjhgTmzgNnmufPkiE9VAwYdtYNCmtWJj7sfiaufD3MTPpo2wwe7uHDWSr4DWb9VZGhZ77mbJXxs"
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
