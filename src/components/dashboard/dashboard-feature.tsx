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
    "UdZ2M1qcLoCbEYr23Bin5Q63Aetu9PrmNcCZZKc1mkvaXBdHHF4e29wJBekj5RJbUh6VNudjudX78ZpZwGPQK5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tgWPvXgi2jVccw3vHmXpRTFe27ifECR58qKZEz1Kb6WMLxTr6FuBbAUFCEvBheUw4ugcXuDx4YAjHN1vqzDUw5",
  "key1": "26gFqv2VaT8wDRuUNTPyERiWZQ8veVqyo6xP5XjGHpa1VidHYXRnBvmFZssAbnBT4WAhSoXGzp8MQuZKTmbUzDRe",
  "key2": "3Grv8sTxY3EoAHxvo27vC9JB6HQJUPPpkmm9n9HLRzKew4NxNo3jStc6QbmmqY1eEMhvBbuRxtWWSh77j5pwjMSr",
  "key3": "pAj5G8iCVBYthh3qLW5fKuXvfPqc5ZJdT8qwMdjugTg41jy294knHqbH8HrAs8Riietf3K16i34MiFreiRjuwup",
  "key4": "5iGL5PVsgw5dWUF67vEcgnEC9zS2DMky1u8PhqxjwgeF9nmXSzLFpwzr1DdnYkrLga8rHtSX38CydsTsY6H9Xih6",
  "key5": "41Hmmg7xTEVBSyt6nXU2cydLiL5KWn9bJMitDaKYBkaTerXFZBXi9KgwMnCsYsuKFVPZXX1syV1KjKRPigHbubng",
  "key6": "5ZtfAec5NDrrX7YZG82JgRKjzhHhNsVKqvnk3Wt4K2ih98MkfrUeToVLe6Y5AuUurCmzfVfBrYQHuwtNwH4qUuWt",
  "key7": "5sFb1ciSfnhcuryuKrapASEAYwcpo8ma2PyqRip9mEFambGSirPMUafEa5Y1TcbdjSmTGFjWDfsozxSyonJy3VWf",
  "key8": "5iTDHmBdPCHtr9E5jKKi2VmNmvZFsZhYHLsGdXLvKnVxTSziNspe5Z7mWLy2XfaeQwUWPqCRWHfd392kLwCp9nHw",
  "key9": "5PZaX1hfGBGbhrbVX6aXg7h9qyLo3qWW8md5AcTKPdwwxuLE8ADw7PoF3ryc2hq72mxJt39GRLu6L5v3Nz8yiAqw",
  "key10": "2TJaoDpCUvtUGctVwhtQNeeG6GptaL5pDVSVJzVK9wFeN8njeLkdekMNJeQ8T6XHwSHjJivEejJMJwvMpRRHwk4H",
  "key11": "4vREykcw4WhWpiokDyzDCcATn5KQY9p2XpoKZeBTe3eQt2b8W7ibEKuoKC7TCLPat3M2ZgwM8PhCHaPT77bd5mbZ",
  "key12": "3GE4NH1PJssiDLq4C6vLcYyVd5awWWj7yrM1RSsMBCyXS59XdDH9MbdcvdqZMSwyX9FM8pXjR9J23cSKDT9rh4pL",
  "key13": "4oPGfiutWu6KwYp8BVq8tsnoFyDHe9iYKcmK9ESSgUaY2tVHMmFeAHTXDUaN8wCNnWtEAsVVQEoaNGvYqfdakHd5",
  "key14": "A7BPkjoCoikEVy5PAW8pfpKNFAytA9pbRiiJF92NWrpzfkpJ5cF22MmPPGgyGToQcWa9voxwemjgvG1UsMGvHzS",
  "key15": "3u4Y9ceg1qrVKZ5YT5uSUh13m5aBxMmmCnGYCxLhuq9WGEEszLMtkxhKQAbz6JBnCGBE1evvTAXUioYdS2obZY5b",
  "key16": "5D6fVbp83b3X8BjpkF1S9Sbd7nD8gy6HzN1xL7kaFi4KUgrVxvp7wiRML8RjCfQMt75q2iqrB8kBJfbTqB3FvTLc",
  "key17": "2WxfJ6YZfS8C2CrX86Phs448QdAKXme9UdoXHvncFZqBTtr1gGPJYGzpkEJ7MgNivRQKx5uLfybpUH4ESaEu4gGe",
  "key18": "4rC91aKWnWZm55xsTowtY6Bkik3AwdJUtQ4b9a91Mfqay2VYMxgozFZMtpCvWxCb5DzsgRosorQeCeWkSGW4YKPH",
  "key19": "2LeBRRb7EuEdwrWRQVtg2sjNMz76sbMrvGbyBfY9oAjAcyDjQbDiPhCwHusi1uVFER8BrcfMqut5ZNqvVQHP5xjr",
  "key20": "5J6DmvVs9eVhbmA5S3xch2dShaQ7cd6BiitawSM45T3nnk5gZfndn2x6HcPvByaPZL1q4ndRbyVM7x9XBCBoX7fb",
  "key21": "51oH6nAXMCbToUm3e48RRFzXNfCzMUEgpxLYndRbRX1NBm6HFku9KeAELvMMBccuU8bYKbmYbkXANiUDyzp7ttJy",
  "key22": "5KATMuqk2Ltmd9qnX1UWJxzpiRKnczq6nPHwUZx919ANjyNJtHgZcnnwaeustXaPKCQ71Wf8dPRaAULpJzB42pPm",
  "key23": "EJ7f7JazQgas7nWBzFEuKB5CXU74ZY892rSkvWUjS3oTZXKzcF2XUXCobYcYiWtYCuWZwyPQJVzTkkUG41KyQ84",
  "key24": "4MvjQNKpZtfZRtwC4Fka1JcbH7wWqKBkiVPHGcJEvt65686xbBtKTq8YYtQxh57qTnRFkDSPBYRxSYfbV1NL7mQx",
  "key25": "5qvtrBBEBiCuuniCR22uYNewPrVxWdjVoW5t1JR8zX1i7k7NbBj3s8suHc22diuLKUx3tSRB3KMKbUQ1kvHRm2Er",
  "key26": "3e3aj6SHBdBAUavk47erPiunX3Zbu1Yy7ewkVwXY8gbrLUa2KqNNavGJa6mZsGLWrEu2ugaYKLeBorCZNHxbW4n7",
  "key27": "2kz2e2TEX5eEHizzTuQmRHxyHYWoRboicBmSPhwShL734y5vurGWHUgxEkz5jbdpYMpFFvo5Ct4S5tseGTsGYHcE",
  "key28": "5oWt55L8FcEp1LHu4XedNruLRu8kheAn3m5EiB9CSkhkL3VqXnh9wta1PQ39Hm1rBCrr4F9M88Lj41iXej9eqZ1A",
  "key29": "5qzkihcznjVtfdGMeZNdGR1KRsFbBshu43ygX4eMwd7ka9BGTLJXuowZTZCvs1Tyxf9AHhk8wNEzmDFdJaocGFGE",
  "key30": "kNDr9izq7FEXWGiJxh1esSfKifxsCuEDSBtCN9EHWwAbZ6zpfTBFoJq9Tpnr49Ao7SQyuEaDH2nHtJzJhPkb4f4",
  "key31": "3HPo957mSioFbFBRnNPUCWpjfEEGpbxSgmzJ9DXJMxA5xZ8eXEvCfvgQJC6BnjU4xKwFeecnuQit3H19hB5bKgF4",
  "key32": "Q5DcSLiw9TqmCrX3dpUkusZzkb7N8F5grS3WKD3pFJygiLLNqz3wa5jjEUgfiCAi18dKyKgHKdiNhrvf3L5f7Js",
  "key33": "3tW5iCkFfpfj8JQ6Lu7j8Wzus7PSN6fjptujjhqzZgxz7yjpgnerWAWtb5fjy3eMXfEorwenbwStfs2pAiNPoXUf",
  "key34": "4trpxK7RCHBeY4AzxtMxMVLcwdXeywsTxEVhgYYW7pBDMeFDQg8CvKyGcbTBhG9kvzBy9oPF8XQ5Y69WupUdvKKH",
  "key35": "2BBeJ9WTnynab7pxnXuYyQj5aXVimJodFY8RFAXv2oT4ZtXhS6Ka29P5P5VFJXrJ59YqznvCKYa2ZB1HGYRXm7yZ",
  "key36": "5HRZJ5f9mC2WKYH9yfizUJ9z3evZH5aSozVk9UWQ2rjfpPMGkfyxMKaB3aB7UztYxwk8srVkD9UBM5GB6xaytcyY",
  "key37": "3UxtePBSy9HZFDP4g6bofFWyADycW5RGTTnLNsqD5topLsjiSgMwuknTPuzpx6sr3fbwSYJZf2r81YCjNjQbwJ6M",
  "key38": "2qixhHgTWGH11UJwGjt7VjJoot4pbaoURxRFc7eccCCzFziZHjHk9m1KMA6XBLxcTkxGsarKVLwPv9ewMesqA9NW",
  "key39": "2q6eqFTtuDmcoNbEyeCC1bqv9o8RnzmcGxehQenhByiMJujMk4bCAxXDAWEQnDPyHRaZUPedGTteBNLGyinHxm5E",
  "key40": "5zWrg3tatA3SDQJCKdv8W8fbi1GVBazRek2JP35x6pd57kwu6L87XhcCURaipa7VFtBF4ThAjD6NeZrHtZAS5R9F",
  "key41": "3UE5kH4Zq5GmJyd7gp1igL9Ao9BLSFkwHD5DUCdRoTbxDYvjHuMVqtpiqivGE5b1dHZuFjWRkuYuy1f1K6vQGoBs",
  "key42": "5LQhTUMWg5hiBvm2pmoBzgecqPwrHeCJTkWfBLsnc2otLVnQibXkA83qDhmgmHZMw5oJfE3HHuEpwUhdps7e7ykt",
  "key43": "676YGe8FdrMw4pyZ5C4JzPiq4YPYmQPd6QcjrTXK8MetGD3TQCTrJ7ztS4zo7TEiveyEgBSdKsnFWYpt5FahsY8m",
  "key44": "YpYv4ALoABgDEgVmupfM9SiyuAvXh8mfsyoS6isyy5EiWmUVh2DxYE6LzRJjccwxgvxQvM5jPVPK2j4EgCvxWxV",
  "key45": "4UqBvsJVApoLQZMt9GoxHez9Rgg1YxKMRdW4yktcvcy1s2pgBuDYMXF2nQeoVJVHBXnTxYDkCNr7if6kQjmcAMeS",
  "key46": "4Lv537qB2SNNJwAsowpe892ZXuH6TVVDTHxqJWcq6SD8PcRmCRFS65aojcQ7BVf4m3NksZ8fzqwgm2sAqDN9LSaT"
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
