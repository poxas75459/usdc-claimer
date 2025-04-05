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
    "421C2ZEVd93grFxJKwhDJxF5zTuHGKo96zzoGDUTBaw6g9n4SCRSd4crhi25vqHvFvn3QKNvcf6mCah5Nxyi2Ucj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DALPsNorZc5nHUssNEfS9rhtUXmTSE9mPAjCswUmM3xfh9ZTjfRwDv3ykH7RDk2GtXVtyQAG8dbhwZmd1ZKScA",
  "key1": "2kyAgXAh1hgQjPBFcjqCwggWYM6sKUvAKcyHXax7NoEU1o8v76soiTiTGrx3TnM6PyxmtCfhi99P9FvrMGuUff6b",
  "key2": "pPzNN6uAAGwNtD7adGCJj3Hc4mFd9swC3jS7C5cBvc73tnZZY6gNkZmPP26mEWLCmXCLodgSF2797tmw3WBSgNP",
  "key3": "4TDVGGgXrLADnuKPunWrC8FZxEn16pHhReBqBDbHQcoEU2w6WPxDdr6YjHTioHUsEDZ6vriBHkuJwcu2ioDhLxxL",
  "key4": "2SGAgGPscw4jH6focDcg86MUjhEzLT9E3TaPDQkYn3fC5Z5xkyjcASChNbm4TEmctMXJx6xuUzPYpCvV995hekW7",
  "key5": "4mhd84F3fqdCZwGezNu7NU1MuMy79ScDLizG1W5FLmBoSt1oWH4Xu2Es3oEZr9suBZPkd2AvGKZoZBnE2ohZ8Zq3",
  "key6": "1FbKMADd6JuyBJrspXes3U7wnsrFFQwv6rz5uH2rMTnZXKz7ZKFuYHfLmEatrXB7AXt3qwjz45eF6AjiZZysUZB",
  "key7": "2nvjQcnjKyw4PDo5gEEzfyJFKRQortBs3aGPpUVNBdkLT7NzyZbYPKj1hnjhjv3QpxBPPzK2hGxt4Smz6HD7GEku",
  "key8": "DiwQT5XXwuPRE7JBjfMxvezY6HpkikrJw9rX5g89TCPp1fYRoDA4JA98gF5irRB3aVFJX6fGC4MSkkqokyg4ifB",
  "key9": "aD35PG8LpET59o5tT74hcyAQdj6FjEY6dFuUwCvP92xBAqY3d1KYxt1Co53RBYLPP9YoFGaJjguB8vxhKpvDSfU",
  "key10": "5dAaXo16nFyAmgJui8y3UsGDqNVdx85stmqPiySixMAZFUDruQp64QVscvBYsEQmWTZVxG4AMCXJezyh7Ep8D7mj",
  "key11": "2Q5R1rwCihzEss4nb1X6behzLSrBHxqVRox5sbnFDNTsxxbG32YEqbUJReXZ4MCgMmpfh6Kfo2jP88cy5H67K6BJ",
  "key12": "56JJyeBBy9uuQtufcTgLvH5CXCpPb7imeiKve7cHncdGxshbFM2P5qD8R2sme5rxRBAS2tMDbHvGp7fQPi2D7bRm",
  "key13": "5iem8FRTrXosdGeupbwTUb5UVwpbdbHqQq44RT3kPcYWF5KLrL6WzkMGGXzwHibPxSgUuPiBv3LUouTXS1SEhyDd",
  "key14": "2Ef99pjDq7V4PwjAjGTmBttdX2F7iCJkKJuz4Tx9o7Hn9jLafPn9qk5KLucU5njQDMddeTJcq4yQwbPZfgzU7sT5",
  "key15": "2GMF1tFpqpy9VryGApHovMNrNQcvJp6Bz6mmgynxJ7bHx8RfZheAJxbRKhWimjgUe42BPt1NigPduLHbTwdeTsUR",
  "key16": "5JL8YD8HVw7mnZf1A8Me9VoNR3x8TKu5VhGfGAkfHJzihRMC1zcGeKpX6QsJZmC1tJTmKbKFCvR53DVveKKLwkgf",
  "key17": "5vVHn3Gmhc8tTqPrcxfY5oKWmkaw5GR6smU9T6nNHZvFe698FDPJBcQPn4ExDbJT425mcRvVi8yvYA3biq8nzwZZ",
  "key18": "5PbK3bXKi48bpjBMm1cV5pwb9h7zpEYg7TTFn1o5GER2fhsjBfmkCfCZsbPrTj14vudyQm53gsWLLVrPk6W5KmAT",
  "key19": "3mydQXs18jd8kNShTh5gWfL4xxGc68Pkh7DUY5G3GZ2BRCu6xNZphtF49BNvv4kS8s7QxK4FsSTADbUyQw8k55TT",
  "key20": "3dUZ1CymDVEtKw82MmRsZGSgaQNe7Wi297LAYebNVcfEaGDQcU1KxSTRNh4TMtC6oX2fcNEEiJ67k7fySEKU8K7U",
  "key21": "5kpp2PX2h1Kj4Ch9vWYvr6TbvFJNkudmGzN3xL5SY7BeW3xXuxaWdLAy5uJZFnA12DmM6WZoAXMnGromBFJqfSs8",
  "key22": "2chX8AVi6F5ZE4mYQUucuHc5qw7WmKKtpUxc3eWq5tg9UqrUa5XLJdthjcmVfLCpUrRpQECP3tDWxhRMjyRLWCfp",
  "key23": "3ezTPkLDyFLTsH1y4CMN4u1KX6idE91qz7n4s9HmrLXamYhNNrb9ZfFQLo9RpLmx3T8u2zUKxue8kVcPYaSY7G3u",
  "key24": "3a7mGq2vVcZc8iQAi3N6bXPGzo1vC6ShQeAJpYZqUogx9qETeX5ZwrzA82adzQeLiH2opqJVsFv1fpwoETNHTWGW",
  "key25": "5F5BziZYQysgGeZfK5viFS5P6LUXmRpxTitKsv4uCkat7AyDkQ78ieSbkRL9jT8K2DSwxdTUTdDPsjTGrNd2cCv5",
  "key26": "pTuhLHiThzNWxzrWRJvR3mqAtjPejSqUYr7CsH7Qq2QApwyuJHhvoWX4FWJFAmLij6xVhGBYcDLyRB2JgYXwUYK",
  "key27": "4zrZCd7CaUMA8XBzNjfnGo4DCVSrCJbFqm4XPiaGgwgMnVoyGkSjTa4SLUfgj79kLv5V5ppuZFtTxLecMRCmF63k",
  "key28": "63TLnAoxwHQcpoB82KrK76GTmWTV5r5hENN17hVoA4iidTp8kB8ZvihrBuL3rB5bhTJAuBpmdDerUzJL7qJyVhRL",
  "key29": "3Jx85yhLJxXv34kJja1FmiTArGqkYqxs7rdrhZGjmpHBhxSqtc3eCTpdozqzJCQGFD9NmtzPVtY1GXkciwSynhxY",
  "key30": "5WfqmEepfpw7pcjzkAMYnj9sm6HrkwabtRRVd9EkrJX6bsgE96FNo3Ph3BP8pPU5wPqyk7qGT5gPHG3Vh2P8X9nL",
  "key31": "23jwto8M2AENbsqhXhLLbJNGnvEd2p2T9AnzV4hxatFGQGoh2kBAocxvDATFfDRsXVriQczhHn8SuMwJJmZqY2AV",
  "key32": "fXVMLrpNFypYnEhDEd47RvRHJ5KXhMvhVYS6Ye9enGWMTPau7Hyja7DhU3J7Tgt8MRCc3AWHEbJWcFnAPY6tKJr",
  "key33": "2yFE9oFDfPHqfvLJZGwVaikBSk13c6QLCm4NABkqDiVe71BbL6YvpPz8b9rPigQVvcKhor1ze9s4Pa1E5Ry3BZKE",
  "key34": "3WewKYQtHhdLs5PYwGZDczfqRWELaPMYunBFMt7Y4MsNJzuWvs3VhEqv7hM2osUKdMvufyWpYLVuyoRB1Q3qXNQY",
  "key35": "3X3dDYdWSFKKsSRLJnMGWgQiSqFQz5rSdqHFESn6eZ9QnPSbMgPqwDaENFsABJsPgyZyuMW2157nCt2sVPZpDV5G",
  "key36": "3hywVVHcHXzyivNKVH6N4W3BqSfELjdumUtq2WBmd1UzwweNfarFhmo2tWf5rrt95PKphjGe2mitr3mMqDoTshNU",
  "key37": "4KaFqk2MFEHGzRJtA6r3KSL7gsQBrrAnX23KAaM5FABtxGxhyqMnGanhfPihpMfpUCstqZxSbp4umN39UuhP3WPd",
  "key38": "61JXAPmKbLvpEwuVH84Cey5GJy4VLAUsTFzmiRX77cuwGmm1NPydYDB8xhFCacqJt8bcFoXExQWiQqmQbhn2aFXa",
  "key39": "2AqC5j2FJL5jLBUaEYN8tJ1kbQHTnUM19jDBrY1u4LYwXWqYNnt1coibWCCrybmUMUAQr9W2ffv8atxm4x8kb7qn",
  "key40": "3ePvMuCPS8sMsK91vLQYwacqFmoCoLaxqEdF5baJqwcxtEpgziqyZNdyN3zktQ21oRySTM6ZBJpbkb3KmiETVJnN"
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
