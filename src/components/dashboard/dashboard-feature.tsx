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
    "ZY7gs6t51rL25kizuPTWwYi6hSCJ7cs9Zjn3hsL13N28N6wV9TVhJrQ9MMwvqMzWQn1Aw2QF3eXbS9XygwFBZ1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGLVm3ihzbGoH4jo8TqhegK5UdUStwPkut5bSsRbvyCy6SSnGHSRrmtjx4ZueYf9KAR6oABJejnabTgyqMMgM2F",
  "key1": "PYfnUz3m65yT15tWaMHmqwSngrr8rZ7KroiTXpEYnGJrUadE283MVBSk5rLxmQiJUh4kCspL6CQggbcvDGPAckM",
  "key2": "2GNXvKfKgGcSTp3NxzQ46Cr4GkPE4oKMnLuFNjXz7u7eyGyR49vrWNDK1Hkq7auFiSNiDB3iWgFGntvRAbERZFaS",
  "key3": "5zxZbQ7ALgkWuvu7uQ1i7j1k2dcXvjoSZNcJCBGqvSZp8FFz1cpLLxq4bPX5LQcPctymUA5pVCL9635wDjvAByD6",
  "key4": "4Bpnf19bhocsbKtLpicS1XA9rnRqj1aMMyemrTZZ5CKDSNcfvWqewcymRtqA2NEs8JN34QbgxtTKP2eQC51sPe4A",
  "key5": "5XKQhkMyJVuLG8CuYCvDFNTq63AuNMTdmhkKUzvJrjVTvkGmtVome62SQXqYs91kWbacLr76wvQmCMyMZppVSgSM",
  "key6": "21STNGivh7T5SdpD5j6ULz6eqnPt4Rmov8mqPZpQhfVvrw1RbxWDv2bidZe9ceBVa1VruLayqDtv7zxENWRmuYda",
  "key7": "3T2kPSvVKnPHLpsioyUJLd1C1xF3LLkAx1rXFSmSHH4NvozkCT21JbVWDpKcYjkzC35PtfCC3jv2Y4h8K7dBXQHC",
  "key8": "4jFw3cWE7CwewxW43x6Q4p8ezPtLPxSA2NdEZYhdneBPNta1jhuXZ9wFobv1GapnBejyh89yQES53aqAB5F28Egx",
  "key9": "5aLbrHdGUxzzBxcD6ZqMtkWBPkyNCn9Et7Hi9R18YuMHZ42Myq75EEAQF8tHPerdBFpo7LFUSdyW1yTeeqRMaUfQ",
  "key10": "3NFe4vGQ95Tm1dygP7G2mpa8CgWU625MEgttNZPssK9sCPN3zjHoBJScZkcTWf8VE3oqdHzi2suFDQDUe8hZNA39",
  "key11": "2j1dRmHhceJoek3kxpFZQuSc76NvNZb3HCphZsiSDRZV2BiRqjiMYo63MvzK9PuFZ1VasksBioHa616NMvRTAiTE",
  "key12": "1hgfTrWe7Udsa7i3QLEiR8wjZqyhf8UYwmXq5uysxBMunyysye1pCU2GHss5adSMYsBWMEem5oo1RpX6MxVGfhE",
  "key13": "zg9TGUZhq8edtfWy23M2Mrgz4gZ99AcPgfZ5WBuNf6YaQAzfasy5AC73b3pcf41CXpuawidbrqhvoEh37ER7Xpf",
  "key14": "51mycqd4hCWxXbAzYLuA4Qo9XoUgsiJsWemu4czix3o8YyJdatQCJyFtDCHiLhjn6BynRk1rTi7FHCQpmPFgb88B",
  "key15": "3LPbGNRciDN6Q2e4yHG9rVsec9Zerm3Yw3GHGC7EwG72stXp2WaqL5epcccGAMhDHMT51j5hYTMTG1ZUyd417UWo",
  "key16": "3dDcFMjgvE2viT4pKsMCQAQCzYpJH3ZEuDZWdNaNGvGspk6ZeJZ21Fw9FcpKhGUTP1YLJ3pYLtw5uYAmno6tGuGW",
  "key17": "3oehDZbb5DUk23pwW3nX176e6QCuokK77EXdNgQvtASoSeTRgJHpGANSNPwJHARDKo35vK84niFg6pgjL5EbDYod",
  "key18": "5EHwLqPqkW1xQC2TqwoHSHM84PzpEYmnSXmCCBNC8PWzvqb6UaJXnnjRyAwuDZjDWoSjSQ3uD3DJ9VXPEvejNAL5",
  "key19": "Qfvi58gtbcov5SSGkzLqeUFWusvSRQY4b4ESBmopCZjxWC6Apnoe3oq2KYHmsgKL24gaku6TMqKQCszRsHJhstb",
  "key20": "2wBwCf23tyF4WyqryXyyMe177a1yXDA1LkMDeyiEDtqHMP7MjK7JKh9AxureHMykyT67eCjfyT283YVbYmqTPzwL",
  "key21": "44P6wwaww14mKCErxXprmZ3gkgjwAyKaGNWKTK3NNxszxxfvjTFGHYgjZkJPuJLZkmF8Njeewvo2NhfkfqVQAAud",
  "key22": "3tLx4hn3WLUADU7z4SZpFGQADoCxmMAYCUDMBUQ1tMvyhFhePc6HVhrY4ai49Rno5M2YjYDB84RnMx431uiUriCh",
  "key23": "5QH3udnw7KtTkCCyUwy43cuSXLtaDxNEeoRjKNMCctKuWZq7gKzcej7ZhqWjCLi6i8xvrZ5JFtMJqWzSqPEjq592",
  "key24": "GUJzMLekj3CALCERGUtGyALF1P5Z6k8pFkbLFLWZAm24LZgdWhpmVEamqQjGtcZtmgG9DFMY78KDKmsPMpSkTM1",
  "key25": "3qneEY3F6pRyyY9MXPmDZE9fswxZwFiRy4dGqnmggwyhcf3pMC4d1AsQxB7gJZDAvZ7iVQgZehxhvkkvJAMjYmXo",
  "key26": "5RCP9uZEBXMHPJ2P3FD4ropWSYgfg82YbtDwUj3YUkQtPpy4aAxnrCEK7CiWThKQUECZe6YimHs81bM1abzqmnMp",
  "key27": "4FsyvbePYH31Q2DGQ7CCr1KNLLDMXDZd3YQvDLAVyomhCbmJdb1B6HLRHCzWC2a6LJiaV1JXG9o39Xmbg68m7Lk9",
  "key28": "5zdZipuuUyEPY4yfTepGhsek65AFeHwHtzPzqY9og3pbFjVMHb3kUyZrQXpeA5BbrSpQ55WHpSazQWY1XvdzM1h4",
  "key29": "3XdYJxRFdvpaRxudTxozBVkd4FJXS7AXLq1pqNbPVN6YuQSdEwbvU412vKrRXyyBaKSCsyXwrqmE8XsSqzUGbfwr",
  "key30": "2CHMZBE5KopZui1diGjFfXAc4hcZkhgdwxRgLreTHvCPpzctQZme2VSPzULWv7YS1fAAWHcZg5oY9rMX3SmdERMM",
  "key31": "44EBdSzHAKaipE5Gu9V7ibg7o8rvQ6mafFXWniZFZxbTC1S9jHNekKbYrx1a6eBADaVbPwbanv7eYr96c71ZuS94",
  "key32": "4D32L3Niruqw7QKQaJSp234Wi9WPyi5NV2gVatW53ABiSvVccC2Q2qvskgXtM59Xx2n92ACmAqS6dmR1cfY36oG7",
  "key33": "5UE5WcP6oaFHSjiFZCPBX1wzyNKSiur72ACdxD5rgSB5fAte9VL7PQGz9fC6fTsmPwNh9UdH3hnxSK6B8DVPkWiD",
  "key34": "5SSg7b5ZevkdnAw7XHcZex33P9Bi8aJJkfrKh1aRXSLXzzQWjEcupYn1J6odWQQBBmmjBEtKMkHhnj5EtN5fFTEW",
  "key35": "4BoBRiakQ5rrJFwCNZbkttfL9WHbspnyTnqozb217S7pSy7sMnnSa7483AspfqVpZh1b7xgpyDVLY4PhKYr4CDMx",
  "key36": "24wbqGEPbt4XTaj62e4nvc3ewMuTPAgtHFCMi7vgGskAVGh8QXENceJJ5VHd2BRKRc4GYvSzesqZAh2F7hcd1oxh",
  "key37": "YSeVTaTPZwW5TkQHamzvGLSK3dtgNGKaFHxMoXSHA41GTcWNGkCakHaJPzDkRrq9sxHjNPEWW4bBv7PZUwPvZjm",
  "key38": "25R8Sb4yDpJ3H5k9ijukgyzhg8xiyrVU1Akk9JJ5K2EYjxTsp57K6wEFW1FpJbiSdqJaghaoyca7HExCNg9oennw",
  "key39": "2wVKZU7xWT1TFocnZpzTZG9VAraxJjWfr2oYh2VdWKdirn5is35YM1zHcasXtmcxdXMT1eMpTLowLTVZ3J327k6D",
  "key40": "zTwkfvQznGkjwfTeFs16GAqshPvmGxRb3mX9TXHPkSTrWABQ6HUtNuP1PbV1B3761L6zKZfSSgcSa7ywVdT8Es8"
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
