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
    "GoStVgdJqwtTRVaDvaYRkNXqDYD5bZih4PwbB6msi1jTyViQ4TE9hUTY7QFRMc3U7DKv3pkmjcs9VP1jf8qM8DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2X9uuXTd2hdM6QgFr47qeLysaijaVpYFST4B7yYyGhU56Z6A9jQ4idDgBvEdGRXg9DBCHBJ8EkP3Vy7LsJAG9X",
  "key1": "2KmH5Yjucn8PRk5trnpE3t96pyEeuGFXzV6pYRNakERZnvH8cNwAGwXrfNx1oHtbQf2vFThWsPfDYFfz4wGbfwaU",
  "key2": "2285eKvGKCJw5LJiVzAAf6TKETwqzUX5xETvZmi2he6xBnkDSct9rsjCfRhQq9xjgPwBfrasGKxktz5ZPRxKpEPa",
  "key3": "pcH1yP1tNKYEoCfYoz5xSkGET9aMLEGtUALeMp8aqMnGLtzheZb4dnQzqwvUnX8vS1CQuFuASaLxdJpRmBQwrm4",
  "key4": "3C1BzTf2V5wCGWFKZGK6z8AY7m7ymMKaUCdtqzzenQ1x7hNfPSLspGd1bq8mYahr2CV419LfJuXMfetafWiAQaQV",
  "key5": "66YRDpfA2uBkvoSkfKMfug79jkmKDD5FVFijt7yV4313mN26sQdxhQm9ZEgspCjdFXsou42QmLk7HHmR7hkpRb9Y",
  "key6": "2kvkMNtzD7HGZzrva1bvX4iyxA7MTSsUkMLrv3B6Mzq5JgC19vapYHD7ZETmgTnH6Xcvz24juXWAQ6Xeq3a2v7Pc",
  "key7": "5eaDYcXWHaYenDk1i4dwJtQ91fUTwbvr8G6NJUrBYN5nSZSpEsmwArx2XGEMTvCMTK2fWp3Q6xstZaiYBwjQpSNs",
  "key8": "2jpp9oF3HrvbrgKFWubXMdUJxziHz3xtrqVJUa1R52qRXUgHdc5hEssDrvutSf3BPWDUGGhHo9YGU1UnZmggMcj5",
  "key9": "55BH73o2mooSQ6LZ1xAz8r5VJpsQmbyFxcFjdEM8nFGik3V9wpEfKKYe2a496FKBjBkSLeaHc4MGcXaCzhe12Gxq",
  "key10": "5Tgv2HahWWk5ySsvm4EfuuqfQ6nQuGivUwo91hBUSJUhmQic8bsGC25SPtcbVrEY9h85MqeP4SScEskU52Wfhz6W",
  "key11": "4WbAfjFnxy2xTMetqVc38Wqd5ANRbcUBGs2PQ1ip6eCyZ7YnTqDnDyiVjDhcb5K5hfPdhRRDKCVoV27vGfux8imG",
  "key12": "Kr8m9axm3Q5BRXyzMBV8YdRB2wGmNpwXF8WTsP3DGFzpD1zGPSUeT6qA6EgfSLozbPJw1HC2y7uqwZhkMFocPMQ",
  "key13": "pDFvamY7F7JR8dE8oZCZWN6kWfm16okaWKiLirK51T3h3dE484SmCkdRP6QVkhdvNhNocLLowu1nVAVhdDLtVVq",
  "key14": "2ci8rSe2uKffrL2yXY7AE8neyd1EBNGmKrzsSBDhfQDTZ1JKyGU3NgcbUBSn5WBBSoq9zgHLiaByFa3jwtDwfaSV",
  "key15": "3bn5mJMijyzHsd46ydoaUzV8A6rxZEYkMACaLvw8JWeGRQVj5EZ5g7Pmh1sJeuapZKFqynot8UAE4pP8ypJ9V3YS",
  "key16": "5ozWjLrn92EnqvtujfrHkmcLx1mGXAiyENWZKo6A4RQFVRCJSMp45wbB8LWstVvTfo1T1X3tjLnMYqfFRjrnCoz6",
  "key17": "4z2AnnMHLn8oWZH4dSx7JWtdX588bR5DLbWc4RhZzhgtPscrtNr3sC78tJXk3ukyvXqxwp5bpPr3veDDQLg95dt3",
  "key18": "5zD2zp7XhmRRx8kfnoHXCPZJkHSirEw82k4tR5sN3GPeoGdpJ7dCinaoWRvYtV9AriKw2p6vRw75v7mAZw9JNkQS",
  "key19": "295LhBbwrws5etzxMNCp6Kb56qjUZ8F75sGgEFMayeVHHHfrPBPGPZRB4N5TPVYdNsEeiYybKXkbLm2ZCqf4MAGp",
  "key20": "59TQ7L5gQ7WkrHso1KGi8egx91SGxvETuN73b1wkBoSkXC8XQoJP8hmCRFcqMKdetBb5da3pyW478DB1EwFJG65M",
  "key21": "3xuE5AfyNxDqfNR8nJKLG2cdnbg7Z3jLMZcjquGDbjuLGbTCfiqCo5U9Lan7VW1cfvVtG2hsULWRYc91gHj38VsP",
  "key22": "2CVYb6WZSKDcH4MAwvCAmC63h8ZbS7iqkadR7GA53FFQL4SJAdUC6aEoiY5ubFJSF2eeEjbfG837YS4ZrKYnvyH8",
  "key23": "2QfzvsCp5ZmDWXC6jq8jUsdPXbaPysdatSDiTAzWGYM8BxVHPwdnhho9mZQqy6CRdh5bPfPRcWD4Rhc12kAfPgRx",
  "key24": "26LaECEraRESywcq55pwhnCMH23YHsow4X85PdfgzxN5zSUcptuWDXzdNb52kv7811FvWfYtL5rz9EJ1B3iZj9Bh",
  "key25": "mH5RAWBpFiFBrzFrh7U6agRHWmUUEFTSfy2RjgzeAJsXFpsSbqQZhEQ2qU584RAD5SkMCZarAHXVp1stKCkFgsp",
  "key26": "3M99cVj2JtrQ11jTaeGdjykUxA13D5djS55tiha8HJbeHsejvi8yuiZpjzo1ngmUcVBfvPAQ7WoLMuurBvFVsGMn",
  "key27": "2XHbW4gBo5VKwFVHNQqa88pVMTRkrnxQu8A6UVnqAZfAq8Ga7bGSCd1UjoaaqeHJjobZzUi9xaYHx8rhmrnUxNjY",
  "key28": "3FT5T7h1mdbmo6PtAzLpjvaBx4jUYGYujndjrPdLMd1rmeWwP9i9opRN5E3LL8DySMXVmSDHnZq2vRTkRsLrQMvL",
  "key29": "d6erPwFw38mzXSUUwYWZTY1ZyiHa1f7fxeHQzi8UCK6Ef9HbpuKXEknqDZi3WgwbitoW4JGrA58UYVWdKnwYPog",
  "key30": "4GzSh7Z5dQQR6dV2xSXjB3V8CZBfts5RGjGXJbvorDDr386uQUfRrRooQYgaTfMCUQFcYJbK9LF8HYzKJGkhaDxK",
  "key31": "2fZ1YoPjUEeVWAG8vCvxBdthHN9HQY9FK6hViQPzh9dUUVJx2GYTCJun3eu79PYEr6fUFcaarg2TnAGEAj9v2Znh",
  "key32": "HuHx1HtNqNA8zy2cPMY93ryCSodSdvmYas3gmh2Z81X1uaLdHAxqjNnRz7xKrmKXtgtiLTYoU2YKvArx2A9yS7P",
  "key33": "2thggdCsN4ESTxXFuabaRtoPBhaxsevqXS7q6zxVGd6JVmjEQtHGisKPfF62rYFJVUtt2TP8HjefGMcPwCCAvFyo",
  "key34": "65yLxXscFMMceoZgc8wF9rJnZag9honfGzw4vUa4jVT5cz8LfqQaQnjbdBdgzdhvMFmKYaze5ySKTwbN5Qw8brsQ",
  "key35": "4GNJ66ySSVoqDyrdcaRMApPe6ximbUeg5Xhu3G8Bbxme1qsfcN2sWmYumkpeHoJtByoBdSCD8AFaPg6mPjQUG7GR",
  "key36": "65vsj58Hsxw57DUiqsEoB1QsMFNJoD2GLKFA9f1N2xtrY7rvKYYGGyMMUpMWYG3Humkg1S15UdBjaon6YPp67wVB",
  "key37": "47tMr47jVdby2NeJJTAMYCRQnPnqmQ44ywvYR2ub9fTk8yzArkAqzb2yXUTPwXcWhj9q1bzRVmsRVtc8zcEoExVR",
  "key38": "5qyJuHa91LTCWztvkiUK9rWnzKmmsJ5n3etR7dVdaqk9z6rFrrVsWnacLBn93dQqDFg1d9MtBHpbfeYUYSUQdx8E"
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
