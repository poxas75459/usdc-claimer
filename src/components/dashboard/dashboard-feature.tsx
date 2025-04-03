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
    "2q6eEG8vrnSyrNhcsqCxcs7QZz4ofsgGzVw1UwLJzU5PRMDYhY94Z8bgoxKbMMXGCj3ycJvjrkmSj5ShuNCBJCwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ff7uYAgcscgVLphWLeUfnZ29RcmfBKqzx77h2dy6RrBGrLx25vNHVDmhBp69C1omUiKZHjrrhhtDKFrqv3PeYwq",
  "key1": "4LxUxo1LBMP3UJ6ycjPxBHiLk9v7ZrGxVQ6gaYfG1k81xNFLc2bH9GNeezLkyDaKKSYUtsFwfgB2ZJAw3r5MuuGM",
  "key2": "5XWE8AdbGqE1t4VgZgZCqaeyfcCb4yurZ6yt86JaubHCexnFN5vf3cqqVv5p2YyuMWyhdnByqBbkh1qdkPeBcLGe",
  "key3": "4t4dVDzR2Ni7tWnxuCt3z66HJat39nXr56qwakrDCw8jc45AYxiC9C38UCaAvJZiMCRsqCWAEzA5R4rMVL1BY5UG",
  "key4": "3HqX26nzXepS83XXmEtrFX6iVmaYPSMv8tAHNSKwhKvMcsvq3mDyyzZRp5pB97yuCZKdkPgkCZFU3Ld5TTo51qma",
  "key5": "5K1boWYNCFGcX2B4niQhZq2tbXGMWPV6vnrnokYXXVhaSBpvdGSETmsTWmDwnuzuSEdyB3jHPpWpHfiu3m6wffu3",
  "key6": "2yg7KCUmhZJvdAiYPGDpDwEo3CuZ39HjDsTBtQLcuFmwtVPA8KL1qaeYiYyTMBDpJREX29A2nsQFN21EXoQvvHHX",
  "key7": "3kTwiLTAP13Q5X96Hh6uxzBAoFAwumbZSWfDDdNBN3Y5JBf8CUoDy5bZodMEuEDNS7JXTc3TDLF69ekUSztq2MbY",
  "key8": "4hKzYB58axAUwFeFJoCz9duw3AxR2TM1vwCpbQNhbePv8tPMnS3FPnUQ4vDoEatgwqobnjg1dSmKsYBkTHFwaC4K",
  "key9": "KG3xeeGh87xw9XyQhBoDHseuzxCRyEkmLxybuJUHdqFStBbaL3DUX1TbGCMwYzCKdE9pYa8FzHEsWadJM3Jsivq",
  "key10": "3RH3x2s4TUwYC2NshoFa9XnKBxif7ikwYAL4jADjQxPxT1FPv7tTxYPyejakJ4KA3gHxRA7KwZF8xYsA9MWEeS16",
  "key11": "47BXyitEXxe6uptW3Ep7zFisaDEmWHFKnBFaNzgksWwLN7mkQGhHwwMRLGUrFhKoQiyAcbHpytsrSLdH8A4GUqcF",
  "key12": "22eYw6W4V47ksCngFrWGsTN8krhWX4geKqwXrAVQtvta1X2qZmPRyNhrmdmunXgb5qPbUuNudg76NA2DTD89zm6Y",
  "key13": "1b346pSgjjoyP9aNnBWivLvDsrRn6sdnMcVePjjty6XaD6Koq8epQ1sKkmqD29AuSPjit31VtX24gPFukLqp8HP",
  "key14": "5HRcsPJEfHbi2jBGfDrt8wRpCJLXSxXzyf4T3MBWZKJ9Fd88Psxx6vyWusfXSxp9PLmTtJ2iuwy24c2ivUodTno1",
  "key15": "5a9RRMbXu6U3JztXqghfUAJAEswK7VjWbFajLEDD5ysQ9tHXr33CBtrq6G7xdNCYUyJqPnP7rfrtqCA3AKd5uZxv",
  "key16": "25fVSRYyjtbKb5f3XFruzYGq8MkLow8pzgmXnya2Lixfma7D423ZKDfxXSU3iipGtKRDEctJvJEuyq3Y5y8TAEDt",
  "key17": "2AxUaEXYCdUdoxbXoxjryS8JsSMruChKk1DPj21GwnNKbmAq6bWwkrz4ZfjqHVsiUdp68TDqQdFsEakAx87cAy38",
  "key18": "77JzLzVSMHqCMy3peGgredPNUwgxxFEh88vto4Cg5yYMW78K2wg88ycJtFQuiVEYdi5UwMxeKUxdbzVYNdYtdRz",
  "key19": "56Mza83tep5oZ7DojodL3BuL8HVkUeutJVAtyxkEc866ZcoLKagPoNiGbgFec8tABSKN482c3qanEMER7LzCqXxA",
  "key20": "4nAC4Yq54SEE5Rpnx6but5inGBbmMxRK7pc8U9wMeFzGbHpmDKLURDAt49SENvmKVKAF9AkXGZhNzRyTmBXqr6kS",
  "key21": "67N1LgUgnshjFtMF4PtwGfvEKyCud5S9U2bWNjLNG97A5jmwUk2juyFJTA3HBP8r7d8GJBCNYmGKbep55XCZ1AXj",
  "key22": "2zwKd7PzgQmwgGJK73LDAGqWSqvtb5FS7iKpXM5CmTwka9WZ2QJz7F83pFGKiSJfUsGiyWAmDsjeWdQhSPyf3sVH",
  "key23": "5AofXLgKjjXkyv46cHeLGsqjowAGhfRUoiWhvnhwpKHNM28W8dUnxCujuBnfLTxAXZ58esnp5guWstansJ4fHCJx",
  "key24": "63DxYEP42652zD1ZXdgMkesqN5e9mZaaPKtoyGBJLodnYC6BcJQ6vR84bFdeNP3TkPnS6UJUvBWh21b6N3YH3Gxw",
  "key25": "3txXWz93XjAv4fQB14bJK2LGSgEBXwBfti4hkmYSSJAvfsx1Df1X83TxwPxqEAAk1iFxjfG6HfejnG8fmMuzdE8J",
  "key26": "3CbFmNWhKsLh1tHSjMwmKqrHxH39vtDy1huhRzbkBnmCLg5S8zj5GaYpKYgKNLwhQ2YSMVZFvHVeRysJPt4zGC84",
  "key27": "38uejSsTyoQEVUNd5nqe3MbpkihHc3ty6t1xozvwSHAg6HJBL2pB5CyzXksW2fH2XZE2TS35fHs9QtcEEdcVrVUG",
  "key28": "kX8TvNkznFXWzHSWPqu8jMK6iZbzSvsP37S7rRSHVd5s9zwiLM4CfirWG4dK3Lo9C6fL3MJkPx29fVGU5cFkH8k",
  "key29": "5vCsE5joXPU5GEwdot5LdyMU7d7ueVdyiFCRmX1L76vYhB5PUqnyhPwY8x456NmiMJydWkLgsUGkzonAGrCFqTja",
  "key30": "4YzJUXjs8B3xnab5q7sk6TzvvQYxobTnjpo7DobadmDboQArNkqDciHhtd5m4fwM3DJtZazeqAFBx5ZJv9pefHA6",
  "key31": "4gZMqmjzMNzs3jopM552MHrdi5C2kDn5dZyfH6MWxbw5zKwr9MZpfxfkF3xXXrkHbxBNjJPPiWSHhBqFeSsibZyY",
  "key32": "3ayk4igCJBNFjEHZcEW2eTCdtmtfGLQxeX9VFrEiTng2vkXyAjVUmeKhBYj8Kwrt3U4USLHsyrMsMLAuXFuqbGwv",
  "key33": "2jy2fR2Fzk7cFQbzabgamuP7usHzBuXTedMN4wTdPYWtz5hT5CbvrNV62WnjfCibVAMiygTpKxXSX1mZoX6omBg3",
  "key34": "33vV3nMrshH9fobGMCHpRHCJoHQbmhAoSU3x8ZirvZjk1aeAY8qdsATFzSPytMsxEHDZH8sdKuENfoSTYQspxRAp",
  "key35": "3V6kW6wMw7rRosaXYRC1QeHMgesRJMMDKUcAtdTonU2t1qTwwAxJGSceiQMzWaFBUCUhgRL81cFeG3YdaqoukVG6",
  "key36": "5wpnVcwf57yeAbxqH3znxAT91bq94Q4Krut1zCiCzs8uUCYEYyMzgRMPgDAGjBZqsMSHqR97naC35KwjHi4VTMX5",
  "key37": "4xFzadwSiaqJ6Jyi7UMmiDgGqT8Lcs4Ba1bRdHJZsQhLuaPpQjMzLAtKxfvGDFX3X59tn3Acf7rNHksSCweC4R8C",
  "key38": "31aSXPxvM4uRkJdVNLtbP8p72GYAWGwJSdELBbwXzdT81Yiq9tej5Pbuo3xVjgJyJhYR4m3gvb2fXZbEMY8mWdkj",
  "key39": "5mNvtd6BtvyJwGsUCumDm7KZu1wx48wP76HqvdjozHGNUEGTFV5boGDoGFjkHk5W3KtHcE8TUxcrsKecPz8Vto7F",
  "key40": "3Ww3c7pNjNxxiBmWVV3fZbKxbzx2p51QRkgmBH5Kx8trTRSP7xxRvLcFvtKKqQP2ySTVqLEeULCUYEoMJY9uG5Z6",
  "key41": "2Jdw17AzrwZbAnsEr4B4qcuhFVi3dN3eCStKMYp8TPkspmvN1LDP3UR93YY2eQCr1eLmjMh3ik4EHy3owpZFAXeP",
  "key42": "XxjSWvCcFAtGKmxoETzY45zovQb7wn3HeeQ3RF7JZC44m9azwpawxoxALmnBshupmqV5gwfYrD4M8coepokRc9W",
  "key43": "2DAiRJxVQLR6e4vJUr4wbCYSEpUpBYzHmW3Axd494sBHZN3TMsxHwPT54W3y5pNH9La66J9tV4VYeFxwmg23XuDs",
  "key44": "u3oUzqJYi7gphWnp4FuL2faCunXXyCucBu1p7Acd3DSRwgx5chD7EgknUUpXFAxCM3RSFC9nHu6aiRbWiAe7298",
  "key45": "4kY1NSGpfLBMn1QqGW14s1YTYZQzNm45MWjFB8pqMWzt5tcjXkNVjwi1RocmrZmHNH5zGdvUp9GUTGtTJjwCD3P6",
  "key46": "3jtNKectzwG4UqSziRXAbXfWkFX9ngcVe4prv3Jgy2xiEVZkqbRQP1scq9Y4ZuSLk7DYGWLbgQKRkjdGpxeacTaH"
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
