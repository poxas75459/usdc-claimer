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
    "2Gp7LYWxqA3twAwtE3ESo1dwPVEDiYjEzo2BZCPy6qCUKQbAnUJVNcyp3YQRi79ApgLbsb9MLNSh7F7qkLyyCpLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAvYLELTQUG9kNVzqtuJL42UmghEGHzSXJQJVnEQDnrLc34twYhGrBDZExtmT8ybxhcK43WLsHVwYrnr8gWb9cu",
  "key1": "3cGVDGnopryaodPJseVy2YMtk7qPYFeoLx3yBnYi4F8MaUDnFidZkiPZCPpnVqW5UZCkE9xuqHiSrEVEpXF6erh7",
  "key2": "3G55b854REayeJdZge5KHBiRdsfkqFthpy6umpak7Y7MUGt1Fk5eDGhzpvkR77PHooxsgYp9QKabgaGQ6RHxWpgj",
  "key3": "4MmTS6PPfPFp1GCkoHNTLV1RSpijf9NywxJqS7p5q9FDqfNbfmN6j46rfpU5HQDgxxsHj3f3JX3vYUHPYYH26cf7",
  "key4": "3eBBzPUBe8giS5Z8C3iyUWTXWzymWzb1CkMPBGz2Qm4C9s2Y9QJ8LtfECi5Hczk7fRpw9ssZxdVpsnpBcMQQrJ9g",
  "key5": "2iVVaHNKKvhcvj5JzTo4gfS92yC9WjUy2Doei5W5XSxjneoSamWWWVPhTfBwHyqf5msy7hGEqRXRxSfzmyN7hAXL",
  "key6": "4ym1AfA7AxMLi7nxatKcV1ZtdecNzKzcq4fmCHimPSWnZKg9wUwLy5BAsG72rqz3ERAvVpcGVhEriVhsHZ4QkoJr",
  "key7": "4nAExUCZcoRTjMXiDeAqkzX6scP7qEnoeSr4GX5euVSSGnTHQGoBss3Q88ARM6QcK3UJmgvwYEnxgzqVGq45Yoiv",
  "key8": "5UuUJWTxVQo2oddzZdkZbDLkKBKd382vFT1btkQ2rWDd6QmGbtPPPr6G9cEgFZ2c2UmW74HDRbHfUTD1zsWutHqV",
  "key9": "3oErcF81Ls4Mn5s3BiTvqBeGzAc38RyUWNyGnXFFECQuqUVJaxnebyYeV4BEF5EAGUEXxfduSyyvvG86xyi735qR",
  "key10": "5H2YDR3RWorGYJ2bCWb1zzZGaFhUS4PsxS67mcj18hBHZmxunecz9c2Z7eRBUsyNNgXrsR5zL6dqCHedks6rmSat",
  "key11": "5p8VJ8LxhQ3EXvikkpzH9nLuNAE83sAs7Ar2uF2oFqSJM96aTQaazJxWuXXVdYedntCPYvB1TBaqjdC4J64xyugH",
  "key12": "4PJ9szR8Wb9p6qFtbxjB3dHKzgA6QjRKAKTdkqYt8KyyV6za5Kp2ZSNeGhoqXyuxATb6QWtMyhzupJBPSk88spb3",
  "key13": "2mD9AknYiSWiT1U6zB9ETytr5GVySvMWYT3M59bnV3cCs3EA9ZHxs9jftLisp2YqYAqmF33mWhomtX7RbPa1ofWi",
  "key14": "4RzY4AUxWqqRuRfEjvWPXtTsfQMH1UPBBbsWohh3tTPEzdMqd2UY8jHBdoBuPHRhckq5yRFJo5tieUKsXm9WZAA1",
  "key15": "5njKixNpYB8DMDXRsCkEiS17N1sVbfuSrQndPhsnRBPoL7hiDqkySN9LmYgokTARKdayy4m8EYz2m97bCLLsG2gY",
  "key16": "2B4Tw7R2R9oNj8xpVt3BUx9f7bZmskBmHteuvP7UGRrWrvTUNbqWB73xHyTkY7fkpRxUqSzfkngkNbYimkJMEtww",
  "key17": "zFXD7jWXb7GdjcYhVxPk9Vy77eg3fm6H24SKoSmkEKiJTGvFasDwndpGifkbua2CCGwp8R64yx5k8MApAdEyWGp",
  "key18": "TewF1nC84KFLqhWaoPpGzrKFp17waJJzJLopkS2by67Uxp3egK9eqAC9JpjFwtubKVzoBcnTqUe4LwcLzdnB7YY",
  "key19": "22fw7w1gMXZh6HS8h9B7C4uBVG6DE9jw8YHEhkGAUAExTng1cLTm7Z1Q1YtomWmuC9hkAS9d2WPAZqAkSkL7tuzk",
  "key20": "CtdpRvStMGxuswZBFxXwkdu4Mquns57Sw2cnukX7Nb5bU3v2BexympEE5YmviafbwzJA68Mmn3ceVozeVENXNYQ",
  "key21": "29Z3PuwgJ12u84xPRYmMHqcxBqbLk8ukJBDqyGDDbNeAb8mHPSuLJy8xW4XYX9TCcBoS4MNegk2M92W4E8eje2mZ",
  "key22": "5ziu4yRhiqcNuvsGWj696gevZtFiDCFVrg23b1S16kDLpoHDRuNe77MUsbTQ8azrPzuuimbtcWVKSCZhXPFK9dxq",
  "key23": "2bsp8cvzFN658xQghQZnfTxeos1rjAb8maDnbpq1NWZfdcHXS5Ff7grXphJYCANVGVNk2APni1ZdYMMnjdhPBfGH",
  "key24": "3eDQUuv66C7WSWkpaM5wmqtfAkSt3aVDX2H3Ex63ePAwREzo1ZHBSComTJsjvmPv9VTm3g2ah1CFaxgoj8c3enLz",
  "key25": "4Koyxat1J89QLgG9S4vzLtzUdsWMCagfAdHhQC29U4x6BZQANbJEx8hsGQhmYjTgsmAQVRshmsnv4TA4AuUy7Am7",
  "key26": "3aGmDFZrrK19hqBYGPpANfqv2PEeUYkeuG5Y6VLnvht9n8G2KkERapqbwdjm8La8ursy2uBPyYrUeTi3w4NRBZSW",
  "key27": "22pfHTEg1iLGe7y5pZuCtWmhpkNU6y3iXNk9zsZQ5xFpNtmSWXtBUvCjJBSAZPr5b2RbnTYweJmHeUuVEicFeDoM",
  "key28": "2CTcXXLxTk9qUVyvNRk8x7cCyZ4Fg2Wnc1ZmwMfyXJA8LSAjgFRkt9YXc9HfTKxmGykq9U2GXDU658tSgstEHGVm",
  "key29": "4aR3uBp2qNSQ2m3FU5MFNH4Aa6KLqHecL9SdJbCA5mafFxjpc68K9P4bPy99oeouw71yydjhvcnM75RkRopKyHYs",
  "key30": "2AKFpV2jzueSF1PMkgTpCNzNdUejAqexJtn92WrXt3WtSgFmAtpRsJTv4EHU931o1EGYK1RtJvc2rofv6wSWaJMi",
  "key31": "MCtwnhnUxhpkcodKVmhq4uswRK84TsRU74LfzexiGrL3rXvfGG9vsAYsiN54bkEj8cs1XT49Pk6DzE9RhJpbbyU",
  "key32": "3XqjnySrS6Q7tkCQGXWEr7N5gEJDps2ELDzyLsALXBk5feQN48vMuPXhAmuzm5C7ivppexWWM2tqZgiv8AeH7owq",
  "key33": "3YNk7bfBUu5npCy17ovha82abHpDr9G5r7ACC9w1cBGqRU6XRJiaZJ9vMwMLqc9Z6SUx2Hbp2GQb9quZBLX5RMQA",
  "key34": "46ofzTUmc98h3d15gc9xiS6yqCw2HqsxY666sjLDvnyuYniZPM1fAkeQasrmkH4iV8skaybs7LoyxThQBvLioWQh",
  "key35": "4QbosWyCGBqavM1x6yPxZEVgyGPvjcj95U5vXu4mDDV1J4BWsnARxwkJaFZakrYKWzRBgqkq82LUpvNj2nXYJNwf",
  "key36": "3zaJHnHmNTPYduN3yGL154sGrdKChuc52pQ4xfPhkyAsbvYZNtdZcYazAcgLSPiyzyMhwcBNeestcd4Ri5x84DC",
  "key37": "2cgDgr6tdyvoLvvmsK1kyU4eGbnE8GnYiHRcHGck8rHYYLeFmCFphDDSqLB1FGNmy1A3hDtHxtwiadwVC7FVENYf"
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
