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
    "GwbXAjwQEe1b12GJ3N6WcgbmdR6VaWXMpcoYGvqPtPtuqug8i4WUU5s3VBE8oqsBE4yH6cz8ZcMrxTVwbrS9F1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEL4ZsiGDtpStH2G2xSRkQdbuF85WDqTHd2Wivesn1BppXncygUW7XubXxArznYPaadsLX6cgz3eyZmnWGdzrhx",
  "key1": "3XXbiHWy4B6WqKxDgd6rZH7YQNrn46DPfLhXZkYLfc6rQoTHCEpbk1bqoaksa2DsZp28gimVZhTBZdcpXNiKw7H3",
  "key2": "5YEPF1FP3S1agcmMbP8bZJgW4Df4XwSoZs5F4QefXh8YH1ZtYRcg4gP3dHQqdBChpDhFri14PJ8ghjfr6jgSHoP6",
  "key3": "rYcaS2WX6P4wzjXeyyVDdb7w3MsKGA2gFwD6s73FCGCfeohLU6wLXGu38f3R6u3ihyekSVzmBnmtDXGD6Ksdo9k",
  "key4": "4qacJ4Ck8Sz13qa21FnS2q8FXEZT4VQLrGpNCZWD1vaVjEDNd83AqKFL3d3akzR65crkGNFTWnyumGKh6qd2giu",
  "key5": "5SGDQHfJEEcV7y3VbeqJd2GNckvmXDrkZawKsM8hHv7XhRAxxEPtXvVtXCKGCwjF774u4BMUXMfoKb9E8hdZpRQ3",
  "key6": "25X4pnXP2nGZ6Tw5QiAv1CW2JK9mBKw2HoiuswBEW3KktzkLakW788ufa1u1h6Rx8qJUCMP6vdBhrTCwK6nbHyky",
  "key7": "rQsmdcY6JyrJMxZMYs4Hekq9xg3wtRrjQknpqMtnbX1cQe2CfgDJyMUU3Gx46ohUbh72eJTu4koVgoc7yAVa3kZ",
  "key8": "2tBnrVQqMbw8rV42EM7tUdgSQ3VXYwW5PeeJry4HWLWS5VVxnBfQBUguPYLFGQCgUWRGBTonoAKKPvSQWciasE8o",
  "key9": "JVyzMKg4rEMHc7KPwqSsS82YLrScQgtDuKQ8ZKkqyycTPtFdAfoT7fVJRHp7CYmDBxYsG85DkyNZsj9RUzWvZrz",
  "key10": "23zYGr4x7LYXCu8nCZcSuPS45225LAbBnPeYV56DY7e2durwcUjLqn9bMsuk6cwYyY2qUACacuY4izZeFAhqbSjF",
  "key11": "ZuSDdcu6Tga9NzCnew7YN26BNp8eMgzA83KznRL4H2AacEPFKC9nnxdmPbGbqai1HhPdhzjf9AyaidcciLnR9ee",
  "key12": "nz15EUyP3JtkKxQp3WjmGNXz5TabJdiWLnq3VsDKadzG7n2eyRUR9dB7HS6BHKquUDH7TNG2miJBdeEBytpRcaE",
  "key13": "5osJctnANqUh2NiSMsARGwrAq5tojeVStbUWEY8b1YhSysDxsn7bHM76koBA5e8FeU5LczzBtWgyccp2c3q2p1WW",
  "key14": "4vnCPX2i5XYdaK8A5B78VoUXxZkkRe2smVCPsQBbwVs5xZ7Ef8GKVFXdvS3xtqPdPwjtZoZZZd2PWZt9ARuHGx3k",
  "key15": "3oMd1Wz3WdyWcRtRLMES7ywmunsKZbzhm6EQuw4RDmx2zyud8Bg6TcBsp9pXdq1nMK1xyKqVpNAo3oX2Aza7j4i",
  "key16": "4GDR7vMoAWzX9cmSEMKCNZfnnduR2Qq52oy5R67u79nwzc24QJMkJ9ApTn8hQXBnC9rcnRLXVDGLDdXMrLVK4bgs",
  "key17": "3ftv5ZzVb1LUEQFYMpe9XKeeZQWm1hjQ3Dnvbs4WjtMok5MVm6gz5FVePY6xTa13XTkxSSAKC83gcsWR3kYnCU6C",
  "key18": "4S6f3fcEGN7uJakFk7NxaWoUk4YfXVH8gYMfDeLcQ5WjB6UssYMtgLjhhsiBPTBc9kfLG9BXJSdAmDhb8Yqze2pM",
  "key19": "4ziuCoiDHkqHnJtAXNpEQ1zSNvMErEoZW13Hh1NEg9MBrGczUae698dP27JqAjaDK713kpCD21SUCm6YG68M36zs",
  "key20": "3Errq6XScBbvsqRRRqL5DYjCRcBAmJWUyLhQcHPDSQ2F8G75U998KqZuPEXsjAD3R2SUnkc4LT3AvHuBUUqyThGU",
  "key21": "4jHEhB7TpEQEfaTe6NK4ps19Yap24TFAXsiZMfhDmgv3VqaeVKxnfivE1eg4DpDEGnKaRi4BRmfRkt36jpPsdjhE",
  "key22": "5Nw3N6mn7eutbF49akQe67ov31duUwg2RYGpnEvBy4eusrUPwAB1bZ2NZQJSdHuu9tvsXMRE43ATubRqspnEHbBE",
  "key23": "55Vp8gpVbMoxATLMqCPsdMgDqvhYjMLT72GxuuD6NpZ2f8iDd6bQyeA3qcw1Vi4hgeyAQfWdEgS6yM26sdsZdM2t",
  "key24": "JwEs7Ai7Bmt3X1w79BJsTmFikm46eKnHWrWvjBmPuoCX8n7pNm3BR6sT6L7Ffe7k2V4whzkRfESqZEcJne3Lb9E",
  "key25": "48J5Cy2uR6wa8qtrg4FLqH7eWbtRrq4xkQ4D7KCMCPARFec4reshwuGyCvBYXNHAmASRBg1fLg4LvUge1yzNZLom",
  "key26": "4ryCUuS4Nnx1YGmZX4VFCbtApwEExZsj4h2QhSMGJ3eE6yXKFWXiCKWVLskbBmnBTtBEtfPDTVdDQ4n5dmaLCTqw",
  "key27": "35suHhHnJCf86PFUgLJFFcg5bjMShvY61m1WTSSwsX99cFbt7er3cZPxSGRw9WUmchkd2N4XAHYyk6EuC8M1vrqm",
  "key28": "34aXW4BMp5TYkmi7a552hYkhCMNBV5ocJFD8eNcxSEPcpHbPaTbcgJDGMBWWSN7zAvniQ4sr21omAmePA6pFguZ9",
  "key29": "3nhmFQbkeo2DLfnE6E5iqakDd8tdchB3nuH1ahj8pZE3yBXK5dWCmBZyucohiskukBHzHpmFW5RWmZwD5BbqfByC",
  "key30": "3dyvX8pFVGTsgUZL1QNxhwixwzYJgo1AoSJgdvQfhF7ed83dNtxowPF6qYLbaZJhgR6utVXffhvWqdR426p8PxsA",
  "key31": "2yt5GFauVQVq9T9XRrWQKPWkUAMgYPjtoi16m3YBJ2GHchQVCMewwTXfUBnnFR1uXug7JqXxreurLSTURU7Vi4oA",
  "key32": "4EnziMFMgRdNVZA75jN8GVHiWwsra7eGY2DAVnG7GeJex2J87p7YkiCd3g2bVfKSaXpb7XcYx36USjqvYVEbXFkM",
  "key33": "3CTvHDJz5gigqrmVTX3br6jKA2UcBovXsk1xKfydULNm4cTDhTii4eGWuS6mNme4mjoUoxp7psGd7xQ6nPKUoopE",
  "key34": "4zJnWEuuYChi9MJd6DHCVWz6fT89mZpaNWX5C3REh5VCqmZY5vAsKFXsV5ZTDZtJSG5wMb5K7LUTWgR7TPjEyExj",
  "key35": "5C8YP23JNPieoeqozqxarCqZS1fErSwNRtS2U8YDYkHkbvX5aYWYFddziRXuZXXeoiSr4TiBVFJherF5pTDswxMm",
  "key36": "VY9tgeeNtqbdWrxUnxrhUye9FSWQETY8kMhmUe33X89fT3kqQEgnDdiGrV5k8QgKcW9pNmLwgeUYDHG524yQPnh",
  "key37": "2Eb8rsWAbAnwbi8MXvpAx3zyfWME9CZesvbscTn1o5BhyMa9uEpZV3sL1vQJN2HGXY9jczitwcpnbd2RHsYrcQJJ",
  "key38": "5ReyDNZsjHBSC94KFgZXprDapimD9g8NmSGHKY6zxCRoYUt7YPT4kf8kBjQdsGAZa9vPSm4oQvwHVPHDrhKVTE9L"
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
