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
    "FBkhMwwK8yrQnBGxnbu8G3eTs6RCmr9sj9iRH1ErEQwcWSUCLTKN9RdLtaGJWSCwMPAowTrkfhhogQ9CVzAbuEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWgLLp8XecPun6xyvUvSW1mzHAxxbwVakfMU9RQsbUBWv1BirMwuaNSe2vFnpCHVPh1QNkFkreHtUExuuznEz8M",
  "key1": "5cRT3dfy4pwHRbqFo7ghtEWzfG8S4rApFqWnQm5xyFAyQcDXigAdc2oJB5zjPkAVtHa5hGhkoNuFPm9748CcJv5d",
  "key2": "VY5KywUB5aKVB2fytBxEbz8szs46m2xZVdE1FTw1XbbiuN8QQWaXUwFzvvk3TDzEgfkdijxNN1jDywh1VQAc3z3",
  "key3": "2EC3iRh2bUoNKwWYZkLG6ak3stZwyKpWDzHd4bBVcAL56PFu9v2T4vRjmbvtuTkbQw3bUzThboPF8XLvHnnTDfYZ",
  "key4": "3KUwxr2eopErvj5mooRhbNwBQv1mb3Z9efM4Q7sU7TGhed1TyKJCkME3hHuSuLetrJKaQhUqbqHJAEjHJnicsYLz",
  "key5": "4afCRr6NFnRNSyAroUrsvd5DjKx8d5rTfjnhpdoBLq9m1Qg4zroNk11QFZ5kWHkXNHMz5MjWDvHgTQdUdaQJYuRt",
  "key6": "5DB8F8VtQpWZXy2NA62nbJPBLBRBFPfrpHU5BnVLZAy9NHosv8M9pswabJYZXxs65abRfMAv5cpKSoCwEpPqErEH",
  "key7": "3eH5NGmqVtFwGWn8NGQfpJkpewd2dGts5DAgT4wLeP2A4Jdi1oj31TNqSY13TEZR5veS2cdzp1hjDoswaJY2Gc7a",
  "key8": "42PggyyfHrqpC71HUYbn5Fu5mDfHovepQ86pCC489KG5AxWKUWxf82toSfpq3x8DXMfztxfWXMQryZ7ycVrC4Fy5",
  "key9": "2qoCXfzwjFyqrmD7ZzbDAvWDV3bbz4VfKZfHBhKz6emYKP8aFvA4UU5eptC96rz8G69NhGJT4vaeAykeEGK1U2YH",
  "key10": "ZpXU131pPNGFBKRML5h6hG4zWb74EFdxSxtZkTriq4yqfM14TppLCdjY69pRyjA2An9TbrcxUjQUD6QmAD6Akhh",
  "key11": "2CtKFxyDzfWmDU8GvbN91FVnvMyGrFQDgK4BNGKeA3z9fe7utySuLDofd2N1Et4diZHz2LNVcQgkCTHkKV4QCwmJ",
  "key12": "5iPJXiBmYMHchARoe6BAbpF24ZTMksFhensCCpivuNqhCDq45gq61fSyB79HiPYd3cjR5Z856sw4d2hcoyDpiyGz",
  "key13": "5kXAzP9E9cvkx7ozkZ2RZPCjhFmGNV6CL9vUwUcywJjg5u3Zrz6fE4gsYgU2ieoYW51PMxJfMxF4i8emDyJmPbLq",
  "key14": "2xiFVTq3DUmsxtmTTVFfDq7UADsuGpdvLKToT5mDTFZ1UuboZCSZpezY2byYiJdfTayXferDUjXSAqeY2aEePkXc",
  "key15": "3L9mpospeJ7LtQummfAKYHoLsHEr12Kj1yY6mx2RjK3ekPzb5ouFGMUsvipaB75vB4SqDwiJVA5tQbWPscDzg8PV",
  "key16": "5fm2DZe91SHQD9oF8SLPb9vFqiyDg7211rNhjcaijwGnmaewfho4N9HUCrMz8B6u9gq72DaQyWgVNQHXiFQ3s2MR",
  "key17": "3YvSNRsrTTZc46QQLxqvyd6xhwYup9YUM3BnHPd4jzkFbSeamycPXYw8bY3bWsnUUe9VZvbRj9eyCpwtEKZ8jCVp",
  "key18": "5tUNBXBVXfjT38rNgFKitTiDS1LfiGaVKPkXDkEdQ1su7vwf5i5dCqo9uGZaRzLbMpEEVrvmkGc3NjpRfkWURitQ",
  "key19": "2Nde7bKYQV2SkLyXvUxr4dpPjYshysWE4NxZDzePT54mFMt38KNQx8V4aUkri8bNXHAKRaYMj5Xdvc3xMnADTUBp",
  "key20": "5VEAW9pFhf5bdUBcgMfZAwD3Hjs5WQVWqYJyHKeZ5QPrbyoHDGVCZdvMgCcBjEE93m4r671knPGNdJAHe1feLFgw",
  "key21": "63fYdNWcmbvXERSjJd9pb2M9wZsMn9VeFaSab55sR4oC78Ujv7AFY3jmjoQxQpQxw8sfXE9XbCnrgoYTqBxrHa18",
  "key22": "VAfok5DDoKHNcwrcrMBkiXRkTEEW6Txrm3jqBsRt85zARMfHEuPSwfkGoAZpUQtsw626UA3F6Z811wGkcewewbn",
  "key23": "3CnuPVoSs1MJXv3obmE5Jkx8er6TRskW1Rp2oBMJ3Hu25UsujWkiwQ8zTnxVo7HVyNzeVhgRF8vMVRpPreaZ6Gnx",
  "key24": "3DGHRNHqT1NEQkoCkzVcAQupGzuHgGWgPgdjyo8gu2shKyxNnHi15Jdk1PoUDbXDa1ervufeE2CfnRRp47cJaeV3",
  "key25": "4FMRYLdzj9RQi4ENt21u9T4m6jN5txpun9FzCKt9E8Zb1EBVrMrSaq25KTFQRp5X66VVfWL3K3UvoH6R8yV8VE2i",
  "key26": "3bLhTrjs3jaNC4o2MT7UCsoHYxApcfM52kEEY5roxBxD4i2eFTqRzLPC6G4ffLymbs3KZasv5Fu7n3qDL5RqB2Ka",
  "key27": "3hU935SfB2ouh6AGb7U9c1Fo23WpmqBXSXGAx4qc8Gymcc5Fw3qvgSBpH3Y2tXtkYfmNEa9Q2NnULjwVr7MFSbs5",
  "key28": "4GwAi7cGQmqpcUiWoakBS3qi7Mtjs2EQ7nkq21eaMqZoAfejYcd4PdUciA235t9LC5tmDCXiaat2xKzPomYvvLSK",
  "key29": "276mxoyp1DoqimS7VUQoGEvH26YdHtqpbNWrjBJsDkSVhfLUF35cMbktgqfN3kF2JnpsqdvGqJPXd14KxKwzRk7j",
  "key30": "zqzTVh4TbYTmF5vLV9Zc8S3Xn5BmtQ42w8zRq8VEoNvc9aMXHv8egW6qbuvPJnWRi7XjWffL2VjeNDpSHE1SHtG",
  "key31": "4QBzKV1rrqJXTXaLvRReS5x8J1bgqyK5vGWvZnpfkSjdastedCNLgQCgVafTY5SitfDAF4cmvj9EaMMxADsmbaE1",
  "key32": "5eFFyvM42VsntpAas219tE7j7rgwpKz7Svrtx8E3u9gNvu6tAGJNoL8nSKMoE8YjfBaEEr2JApcoHHgaTDV9bFLG",
  "key33": "AMkwAe9bHtLcXbTxV62KHAsFbuuaKwg25yiP2fXo2AF6NXjapQ8Cnm7BiXugCTpri3zdVNBuGT5hPXEw6v73xsJ",
  "key34": "4Bz2MMtq1w5dYjxGbeNBpNjjs5NjBS5tbY2VaZjQAQ58gDFQAokaztCKRDYD59rvaAPqsFoHakAF8TkVBi7pxzbq"
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
