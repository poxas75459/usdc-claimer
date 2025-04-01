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
    "3NVt7nLtn8Pyw5HVv4EaaMdyuyTP3B5TbsyJhMEZJ4NMqhgPH7Y9Urwc4WWLKwEveRpMkRGenZHEzZH5aJ9uBjkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMdLX9pSHec4JcWeNr9mqPZaARByLCtkqai1wvtX4qiJZE4RwLLDcXyqZQNNpPaoVqrWa9Lw2hw3CvqNRorMYR",
  "key1": "4V5ZXKuHi7BPfoCBhy2AQ1fDHXmA64b9X79371HuTrt8Cgx7b5Kfca7SjWFQVRdA1z858tZQ4mZfCnz1Xd7VSAtk",
  "key2": "2d4X4DFzkNqefvpsBrUUx1dzd19ipPEfg8GoDHrzDk4sCNgAwGwfsX1ThReHQRwLbQGGZweVJZP7P3TMJH3RQjyc",
  "key3": "5mKuN8NSueKd9qtZ6kA9Z8DvbtqJ8VyEpGvk2fFFFFjTfASLpRTrjYC4SY9PwpPkxgEhrhX2QaZWiLryDbPfzmWN",
  "key4": "5k49BEf1dhMPTZ9Exau8E8FRLeFT3i6FFv9tRDqDhA3iiz94GpC6eCTD4ZjRfWnfVg5EbGJ4cMA9EoWoRK8TsuDF",
  "key5": "fqjjusWrUvGQkisVneK2URK3xKZiNceTtjf9cPQvsQptjtothhWw9J2En2z74bXABjMoF8QbQGStBkkYn9NsXX7",
  "key6": "wFJ486wBwkekuFnZeYwqVCwiFNAvK56iqPeiEnmf4nY1xDCkAvJ3dXH9C88vG4kUkm7heKNtBV1UcUm4QpjWoyY",
  "key7": "5AEUZCrHAxBsbD4d8mTqCdEHaBRmxuGs6BXwGdHckAfpsgbJEKRfizpXd48wEBJr8vLpHTDPUZZePbu9C4RDC3sM",
  "key8": "3vcs7mn1oq2tJVyTZcc8ud1nu8o7Dp9iEFZSA4rZtrqvzzRKnvEcLAE4SiGY3SYDELxC5mWKiMX3GjzFGAJGNNxt",
  "key9": "p9NmrMnULw64v8eAQaN8X45k7uLSnrPrLNvZcT9Hw1GFSBB85rnxuvCa6dW3WgdbNXzkDwpEo7Ztrs3dEnrThXf",
  "key10": "5ENn78wfBkPzkcs8eemqhj48VVYvuwLC1jAn8QvQqoLNgv4o7YVxYJTRwfq7b6HpdKznD9koevE3DkcnDsH8NZoR",
  "key11": "5ZfWQH28YKvBvxGky3zJ3fzMALp3BNFC6yTcdwnwm2hWSeUKttFM1NgGPVMFzouiRdiaPnoXUShuMvBZTxMxHZnn",
  "key12": "22hE354mfiGRZt23rTzphx95UQGPqeLG1KvW7BDE7amLyycHNz9ZmARF7BXos4KVzBPjAsRo53NvANxz75dypMfd",
  "key13": "5CrWHVHnEfJiAzVNyP1MtVbaGpwR3bdaFZFg3Cw41jexwaEZPehqxtFG6xqVKqsCYpNJyBxRGHTgweEUrphAwV5H",
  "key14": "2pUkSNaGzV6bqSdEvnDUjs3XjDmntHcSJBxPDPWsc1oFy9Y3cPkV6iRkbkjD2BCrJFBmAGM4UQ2feCXLRnyP2anC",
  "key15": "2Sisk5zZ27D78QVWkvB4y2iJ3QKugtxiS8B7QYSjWrrLrXkdeTZ2hkh4PMem33zdeCyhC8x9F2muEJjTceVAo2pw",
  "key16": "5VhQ1DLeD9WzK5x3FbSgA9pxgav48LttSHFDZtyH5LJ4H8xFUzLG8tyzeqiDHfG32QoeY9tZiZFStWfrCczucHz",
  "key17": "5V59pfi8gzFwbrejGp3w5Xsj3GbA3mHo7Mckj8k4me39vCt4N7GuwvoSzEPw8hQKfsrHGWbMWt5TmmiDRcP6BwMx",
  "key18": "45zcqSciqG1eJrBjav5Sq6TsSwoJFVy8C1xUr8hHaoPT7xr6n2YfsDX8anrmKQEHHWG6wfzy4gBK8YtvdtBWG11r",
  "key19": "2K4vgausX9QoQNu98etxkn9jcDrCDdx279NRSQgFQwaW2k5hykfQAhjkRasHzbjVeoBEavqDghzxWkbnP1SnzrNp",
  "key20": "4ibvgB8pjPtsneMQUdTi1mDiLTYWvij8msE4YPUHD1JXNi92dG2uauMZr3ixNGGke1voZbVAe61DKK5H46SuZzU2",
  "key21": "4vBiQ47xvXestyCmpWqPjEEx2yPdcEwJob7E7tq1FsgVdUYFH7vYYwNqZXrMPMQkMJNNtsBe4fmWGXiwWhBkBgtP",
  "key22": "fnyxq7wi8migSesRvJWXZqu6sAkUt2HXfWqy75NQCSrzdRoVqFNMa9BMKJQ4YTZRN6uKb5yKYHrvy6ejDMu9Spc",
  "key23": "4sqYpdYRsMcNTrSFQcXXeEKFTuZJB9tr9r45WmUq4NrgDWAxUXAJ9vRLb5R224mAPxrMsihmJU6ZmqQqrUTzjxRH",
  "key24": "7pozX34YQ2PfiHzGo8S3bK3Y9CLyPFgvnk2wGNBiGtXGFUrZtfqwXYANQaXTDTKxHAUE69YuY85NaD9poDdpom3",
  "key25": "5bxnDkSDWzVxZwB2P1x8L9XYpXFyNCqyiEE5zuopBAS6AxqMkFtzcyaEEkNEZF4YkU5SFdCUnsYukXyFks2jJ9b6",
  "key26": "GWNbD1AaSuvoEpijLjMx2zXRoazBkGWG1tfFzV8J4riLHHDgWDSTFJz7MvZHWwNYVcYsPTYQWGCFBBDPUP1nqrk",
  "key27": "3k3hLLHpaXJwSUMGKamTU6uoK7TPjQXnv1goVsNw5Zecw9aSn16QTRWbiAkLp7rfaSopzhQMief74yDepiz3197R",
  "key28": "k6UGWEA6A82QHniyumerExFWwqiCYKCxKUjL2RqRNdnuLUp1ufDuLfonkjVfKU84gVSJqGf9eSe3SiqmE77amgy",
  "key29": "38UThDKQP4RrHhT6tXQq7vScBVmm1qNFmyPPtbXDcDv57TnufuKTmTw1VSvir7inxTzu9XjbrnXt4SwJMbv1Mdkv",
  "key30": "3rAMHPtReETKaqygMov3tDURFsoBeuhj8JQ7D5Z94BYSJmSndC2kWdQbZuQLNnSC5VozVW7WrndFbP5cQizxnirv",
  "key31": "cHWkXErwki5QB6dTycFGQukx8rtCqqKQebyg8zh2qzkpxVgS2X1fQfCsQNCYTqTa58MSmL97tbJbH1Drier64zb",
  "key32": "4wuvLb4Vg2PJGNQcU51hSoaomSBg4FmW5C6VqJ52XgUB1jKxVu678LrRrdfxkXSmhjbekWZSWrC39oBPjcrWXeEo",
  "key33": "4uGCE7duw57S5K7dg2f3NR9vfpgYiFnbvhQ9NWhhD9VFTqhQ7jBzdgHBKDsdbWeNfH8qhNGd6h9cutPyJB8ddd8R",
  "key34": "59nYMB9g5soRCHsES23Y4gdWe3MBXUN4LVXQzZLsU7h6sfoH47JBw1YF4icZzi69Vf7sRxH3W6NGG1hqgtM86jrj",
  "key35": "5NtcMSUCtjgeYkn2C9yrgj16L71YU4izuXUDkaf5FC4vKSMxaTtQgYiTC3WZrKuq3mLhzRsuYW6fK3NnpB4Kb8K4",
  "key36": "3BmyeJZzhDw6mgoASLLBbLFkm5eAgE28MZ45SW56eJ6G6TZv6qSewpsub3UTuxe7WGPzqPBPyzUSJ7uQW7mXMfpe",
  "key37": "4b8uZbt9eufduZovWkJdKtuNNu2kgdhtpkwLSdSFvhWpLNq9tSZLbaAkzqetaZUH5ypauHDAfyZ2KeHJrXVQjoEo",
  "key38": "23EXWb6kTr7uEv8ZMRjvMRssTi2pjATmmWtoc1M4aFx8jqE1rfVVMxE74DvPQQopbj6osdZiB7AKsWVduPg2o8Rj",
  "key39": "2VTMK1pbYcNc8rfLBmNyswohdNZ4zGNcQ5EZCHNCGGzCScCaKsgooUNg2bTB2ArdFnVe23WGiUrvCv6uL4rSsBwA",
  "key40": "fKJ8nzAq2qHkXwFx9jhgtCTK1rm7QTj1ev2bReiZwfkr7mrmZCEmdHdhCj9Jxz427TnzPhbiBNgi5sDZLFeQJg4",
  "key41": "3jD6qinS7EbsNkstqHtNcnZnb9zQA27gJ5LuW6HuyBQT2RwEiHcZVj4PvcfG8SLumkDmGN3jKf2V2neUPd6zoDQ8",
  "key42": "3x3zdPkXphj5dnfZbBPsSXPdT1LJRhREeg2wkT54xiw1tmQSQB2HyBRsZKB6Sxoz4f4tP1vHsPDtzkFfyLBTp1NK",
  "key43": "rJqBwPVk6T1iuGgJ2ABaXyhP7wgq8KghJ3wv7rV2bbX21PKvBFJdvk6MWNY3Hp7mcgQVtgneygk5AK1aLxepWq6",
  "key44": "FJaEpLEKNBh2vkmdUfdzhKuL1kPmw3zoTqQu1sDcDztuZrV2ASot4LCG8igfW81cshCJzLR4km1or4BFNQCiqSA",
  "key45": "3DKVcPKndowZVX2SXLLp3S9i8R28UPs74Wym6GL8pYe7FRAXXgkoFriWYsE8RKUWJhPrnhKUbN39M6nwMkkLuUnG",
  "key46": "2reZtnDbCtoWVy8MUjPtpf9FRKERpTnrdMh2QhPFJirFWi88Lj21PqQMheuMpAdFWecTGuhcVNjfNvYdMghLGUt3"
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
