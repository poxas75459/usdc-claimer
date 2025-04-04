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
    "3BgRF6Lc3ksaEsnk8pvBh4YGhVEVQDESqSWPm7Mrfn2FkRkbByX7mhg24dGF2Gj81MEvmAoVDQWDV1yniGpYTZm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKQAmqY5RNarrcEo82oQ3ifweHSVC1jjuCM1hY7vRXCYStKBiDrrNPfmYZt22upiKgPo1ZFowMueJDnGozc7kqP",
  "key1": "58KgZGGzNJnFRXi4t71XWniGv55PVGGnmcwwRKZJy1JqeYDcswtyvFWLBaARiRDeQMyEHCxqoJz4R74HQz53v1Po",
  "key2": "2T8Rc2nrXHURrqZaER1vgRNmnxbqzBuSuAvz6W5NLqkatZonQ4DXgszc45nFGEPRLnueaZmziEGpUKaXdsQigV8j",
  "key3": "2KogEw9hF3firPAwv3aUbK2jLFC7QHht7tx2kZGDyWg4uFyoQ2VV3VaeZkfEShVaFNckJGTStq5aAQ5WsUc1z9V4",
  "key4": "4EdueXywiJRcvjuAG5eigoEtcRJhx7XHV7UJVQ76dAxoRwPjUyLQjXgU8W96X23g7rDf92DNJ8bGRFmS7cxEdagN",
  "key5": "XMfhJqkrvavoyHH9PBSbHKBKexSFrmWti2ZodyHPpkEzeXXBxtBNQ7dZSEGfwDEiHWAukVL3yUkgtbL4uQ1RcWg",
  "key6": "e9Df7LK5kNHaQKHEf73BZ1torhdRpAZ2pZiDMzKNnk4NnQiJXAe6kWHNEvRgvSDZbDYS6kRxBjSw85SYa921RFZ",
  "key7": "5HF8ijvPSdt3yQtffLL1QQgTVupfVwbcSGkzQ1N8DknqCYfyYxkPqXsdBBTfuWvnSo6dAn4QKppA88awNCrchru2",
  "key8": "4j6GUwJULdZ1Gv5EniWLtChFpkWfSeuMdf7HSLHsg4GwMyQDF8EzqqiWybK8uvkZoNXKkupf5qYxNZwgCuMQtWaw",
  "key9": "5juFNCwk9QhF6B5qS9MCnpodfca14SpaqSoA9SgHAyNn3LS6zpP9E2noFTRBAUwDsnMsWyynrpTSDUHSpHHWNZsJ",
  "key10": "TYio6XtmvZ2izKWDhpNwJ2UfjbgEJ9KkcWNnRf57SJQdPmP7vosp7ge3gog71gR5uDpGvbmLf8dmtsJqtBrQuYi",
  "key11": "2bUReDrk3Nrj3oJ5oHSLVhWfSzcDgKabYpRHzrqcUR5n1ejHb8GuonKzxJWFNH4sH8mkenAn12VrnFFSrpCcSedm",
  "key12": "2geuUUWS2weyq9akEq5Ti5KtRkLuwMbwpNgebFuFksD1HpGzfcce9ZaNhEcTaVyVcBCQDb6Vnnc4LrLxtSgDkA2D",
  "key13": "21MSUBj16U82jc5ZUgpS3m92xzSXWfJr6MZVepTZkHV8YrJsPPjXDiAnfmSKuJfz8bqfbGTVy6YNRkCQdmwvwC6h",
  "key14": "25an8ZAikh5C8QoRHLbTXNwkwx23RpEHM4QpQLHkbBLLdpQffCarrywzbAzxmrTvBNda8CrfJsfW1e39DLf9oxYt",
  "key15": "5fETLqqFGMz9EhRPHrsdfDGDr9k7LuiGYiur1QtUN2yurTBRCDNtsAdmU9QeGWmU4dU5nsAzQeV3JYgFwiQjELYB",
  "key16": "XDiLFWAjHScEQh74snQvQHr9tAzkTFhosvDwqPHziBMBStzQkENJf3YFGu2BUWFBhcv7NRRyJYPVqNHraSz7iEF",
  "key17": "2DBm58yHMVX3yKdNdeeXkbZkFGeJNBBYMeDZERQwueXSeFLEFxD9HfF7HxmRZsKMeH42UeFMugRDdLKWCXmMy65P",
  "key18": "jfb8tpYCUh4CRdar7txfSQvpUSgHQ6rjYW1M5cJPTwYFTa37WCGcj8o2uPNaJrqpgF2gpPBppF6HM4TFG3PonfB",
  "key19": "4kutdZ5aqH5UNFMEeTweAhvncJP4ZozEVD6MRpJCgxPUERYHBhM6BjixoUZJFAbkdndjoVyRtB54K84GPyZHoGqy",
  "key20": "5AisAKHh65yUJc6U3D3qH1Vd47QAMTj4M2SgmcyvVh1eAbzn3KxoaPzq3EXzw5KvgyrmQFJ1skQ3LpijjyTRzHww",
  "key21": "3nLrUx3tdWfgTAqhCZijyaA11ry4vpXM5mniwx21vT6UozSGDJr4WwMvXZrMXgvay9pWtuT1kYAgwwRUK3d5RnxZ",
  "key22": "5E44zc9EfTREKmFhCSLhHWBNyfYqiJnxhCuwn62UEytnyddtdWBXigawhWHFN9J2pETFSbf8CBuHC5C5SvSxEmw",
  "key23": "5bqe4M9mSqnXh9iwHoLNdcK7J2j2CmZot7EytkmW5tu1e4KwsT4Us2NzHRR7yRsegqwdYYqxsRUeqMJtzzoX19MY",
  "key24": "3Y41zRMREKw6bu6F4ky1QukXoCbEZArfyf7Ek2GgH3ZNipxB6nAiD6JoshY3ZX8uauZbFssknh1m1hQTTcSwb4c8",
  "key25": "4wGyGjhofMEEJW75dfbfXs9HTHUPZHWVHGkDRb8ES2EDWV2Y278S5GzGn6jX3qUk1VgYTAkWFDVyUpixyT71CS1w",
  "key26": "MTMBV9bi8aSvYcT2YLKYmt4Spm1QzX25nzDzJRLda2xCp3K4uk3Lovdby1jdHBAWhy9wMwwfDrG9HebdFjJgLn2",
  "key27": "523QzXbSvT129KME9BpRPF3kP47UvceLDwWfsPhop8wu4DC9fYddaNeVaNVo7KT72H1u9KZNqgmTEJom5BvJMXEQ",
  "key28": "2d6Bg7MecucYaMgXpdC8JiZCVrHWJSHAk1gCdyt8JTJE7tzQxqzjTaXNiMTZJ9puyjVQTMCiAUnpVTUft8v6u2dg"
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
