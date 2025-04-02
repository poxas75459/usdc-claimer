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
    "4FbCSZwZahGCwyiQaoifgmgjmgz6pSeHA8zt3s37SATAJvLuHNba99VTWLN5ThbuABpX3u2mmkoCfPNHDR8CfXHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvzJV8bnQGs2hupqPuQ1edazDP5z5ecDPuFDL7bnG7yyfyDxnVP2nvk4waTdJg8pN5PDdjWaTwSck2avLdq5cuH",
  "key1": "5pfQK2K7BKBEH6XGnAxUYFnwZJGttkP3b2wr4c5H9GoYmoXtGJrwXDjfnM2JmDjm3XQqP8Paj9RnQhP7am5GgSfa",
  "key2": "4w7ZQuRrqvzrKW3iZZErLLETJgQkvqMCAQfpEBjJYWqjbxh7NWdezL5pkKSDLzmXTpxALDiQYrDD6qEjiY7oSoUs",
  "key3": "2Uffgj3CNrpzRVLpP2MEigpAZu5c5SvSFYwb1oET8defQ3wB7tzSGj1NzpSa9hPWxnD5m41hhT7DfdKfDUCj6yxF",
  "key4": "55JdDu3f4SWxtpyV2aTL91YXZZTXkpGkp2mDfmVQ2sJevMbgmnG86Ug4Em5vTKpsCApbL8y6btUEoxEhLP9QRLZE",
  "key5": "GGf8Vh3Laz9TBbZbyfEK5PnoKFZ2YbHkz2svEyqHbFmGjk66FJTDXhFPZGbRQQnfRysghzs1fvPJ92jQUu4iRjo",
  "key6": "5VQRpENvxtCJs8TvVsVam6spSBe7SWDhwJPJauZPzMSBXbqCQJ8DEDRc81P9ueyNA6hD16ahRnvLjpKvs56K9ou6",
  "key7": "4NBsHiHwdS5422tLs7ZLdN8uH2LBVMXeN8e4wqu4TWkPBmo8s8ciMFcXg2PH3kxkVkq2uVpPcBLQ5t4wSYhzgdZT",
  "key8": "38TkMcy3pMGxWX65JgVs5D7KkdSoiZG1UQmzYa5Bo7WZvyqNNYSFCMjKkUh7MzTT1Q1MNeWmVTbAD1o5cx5Akrc4",
  "key9": "59ZT7bDLkTFy9ce9zWS4Zcn1v46SmpJa9umFUAY6RsKVmPhLzmkkfme6QPegkw3V8tdti3vdbpQAJbsQ2fJXkTpk",
  "key10": "EnJ6fozAyh7JB5EVcd7RggYLCAJ9JQEnTvaAGZscTSXLtK4AhWtsTAJaBj42PfiQCNeA24r5LmuSQBvnucG7nJv",
  "key11": "hJVNWAPQGTuGAyf2GQZyE2pRggqd4f6wGk39awR7ujNP8onF4G7g6NB3CSr9Mfe658vBc9p2JGxG3HSf4tQRDAk",
  "key12": "RQrPjUMWctuG5G2sPgTNCvSyxRWL9ASfH1gJghJUsw5pHQdgdckTsESxTnfUYPH1VTtbqPJcXom2D5GXYkxkj1a",
  "key13": "4FkEQgKRxPAW52Ldx8HaTWAXKgjRpg1qhSstvCPSzYs7pWUNpZStuDrp1dGvCZ93TZxWnzaaAGpxFgFCGjVNhKoi",
  "key14": "2VkPyNM6WNZuMm7XcC9UhawZWAZMtexs92zURZQqcwRkfyEJef9tNV7FyZgy5rh7FtZEofCnk5nfRzuBUasUgGRq",
  "key15": "BFMvFFpmmchMRm5C9G8159qQ7zzBWjfKMVeE6Tua4vVNffYxgKurjzqLGLmrBQfBStrShnY2bBUTYgyfhyVuDVT",
  "key16": "4smGZztk9CkTLZTJ7kgK5Zo7aLFoJt8uUrHtnZpFCFXHatzn9vC4Q6nu2oJpoXeGGFJEeQRh1iKjspPJCp9uRzB8",
  "key17": "2pEcVdSnJfQmmRaPJZpPjtyCSpMxdpDh2ELH3qapaRQFnkT5ViD1z82oeSw56GqCXJcKhmQiqNyJvmF9RctndSx6",
  "key18": "2nAjVBRG3kpuz48hn5tjm9hSDqATXqyEFSSTaBrJa2tWhKR25GieyNM3u2ToZqmMhfrKRee4v3f95JGyNWZGKZJX",
  "key19": "ensgywKmqTatYHpVpwqCJFTEdkzgh8w4Z5wj28FZGJw8pJF9vBMyrHFTFWAaTSbyGtW9qCqT1nNp8FgFgy3ci5L",
  "key20": "33QMoCcKndvygwWwCYuWtyb9V3H8fcS999D4YFPX3DfLcQaWNomUeJPiemqvDWWSWvJ2kLtLHZ5JyJczmNRfvtdU",
  "key21": "5DKF44pkPvgYc5sKW4msP55hbyEFRQs3JhybhakbnUNLqLTLwe2Z7behL4nsiu4rx6mgFJgJ5SLG31BBBXp7JL7o",
  "key22": "4VmWVLdmKpAac4dBi7qWKe4rXfYyivjFoYuvNQZqGcptfzcZwxvxgZuxAx7zgyTAzwm9BtCQHfk2HrEAwmgQFCm1",
  "key23": "2S3ziHkerdz6z4QjjCtS1x9qbkRuEDEiXmqv7v1gjd1YbYmjQr2sUA8nHGXs6Av6HurQgUynAwSKqinNwycTpteR",
  "key24": "rTj3BjAGJuVq86NXFwVbmNvuz5g9fFSrYQmk1FZWD6wGdgGUwDavZhNU8k2ao3oDN1Y9C4T3vcRs7Aw13bAXLmc",
  "key25": "jViuMuCzKP52FKrTnPtq9BVeKFSvWccq5h9HJ8UXX7romQWwwznU6Wj1m1izcP5SkUUsGwnPoQqdjGHKxg72u8F",
  "key26": "5K8yqpcyGQdSY6sRo2uxbE4cJ13nbeHA83GtLDK78ogDpMhdoceBs2692oZz8KtovsgzduKwLdRMrNJCnukRV9Ab",
  "key27": "5edgxysCEhjZY3XgERYoov7Xo4pmzb31EzcFVXQY7EXikviHn7BALfL74oKeaQZjraLsga7duBEXHU68xdVzCCMh",
  "key28": "3Z9W7LXcZtGRTjLLR6LV67jhZLfTMS37Zixmmf4a57CM9f6vz3LaEUWKqRCWbuZE6D69MYKALf3EftorKNVH1vj7",
  "key29": "4jk7w369AgLjnodADJVFLYkQ5E4yqFUCaTzzMFQYKgmctmuWDtCGw2TAhph7a9BExnYE8WSbDLEDmXUS74fsSnDZ",
  "key30": "2makMLEGxHbQ5FbWfe7bm416R2yRLwU6JmuukWqszwAnRsAjXKXk168yD7YGJVrXAGsn64YrMdzoT9kmiHb5xSZ2",
  "key31": "5Nmb9N75sUbs5uA6wXN31rsT4Ad9QHzd83kHsoDMEowHSVhaAPtjCVqZoc6BFAp1h9xUB57QF4yGfgNuw63M7YAf",
  "key32": "2vWi2h7DeH9GbJbhDNqQVFUCiqYG25bS7gWvgPSSqARy8bXQL7ZXTYrBBgCe3Kb6cWrFpkQ5CauJFfHbu4KMn7G1",
  "key33": "28ucBUvjPoG2HvG8Yg4KX9f3FVh3wvcK4ppzjbN79F56SgG6yB9gaAUnrydPqA4HMZ2H74qmW2sCEFa3KjMZRhqu",
  "key34": "5M931ZUKR7gYgqriLhGSqByPNhuFadtXKE3e1FdJaKdmN6ajZLgxxarRK2wj7REq5bUGhQN3rPWZLNPCZzh7NkJB",
  "key35": "4rtEmg1FMkV4EGn4xobGPR2KacUmhbc2rom2eiGFvUSTpYtforZotKxy6qnUqBsu3zsJ5gByfk711k7hUtLB3KXG"
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
