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
    "5fcd4b6g3EmX7mLLu7Sg9jG2L5xz5jW21KE6GJpM6bZw4FujwCq6yfwgt3i4GhjFzKBMEpaYUzb8NmK8EzocH6B4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpLi5dTQcVY45Wyw9DZuGTqE35YwJ3e4dTnZJgQ2pGUNXjPcadz8fPRWwr7q615qnqZf6tYxSRfWtt5KdQJGAZg",
  "key1": "2QDyrjD3ioGgYGciMpTSWWYYoX3LKMrUUqbugqZJvQjdBE7jae2ARpdSpucgfrF6BBafRKKQEKP9bBoM32KvhJRS",
  "key2": "3WBsBCN3meM9VQqsAZea8Hvoky6RDEUbRDDDr1AP3UNHQBA8PC5vQ7yXS6XMneAPcwPQ92MjGf9BvFDxiZB1Pmf",
  "key3": "4irAjwG7CUQHrf19EVqeFnWMQu6LXUBg37cSEc7o4374UejT7PdtvusP7iBW3h5XxyNYz7k9gcF47aDSoQDB6bt7",
  "key4": "3bFmRmXs6TwK73mrcyz29FFsqJRrM64jmJKTHHXGLgE1CnAjEvzE9M1mH5SeaWKByfiMMrgDSq7iKjSdkc6MBnEg",
  "key5": "3NuzLdjm6QccUtoqh1xhT7JbmGuV7Bw8QnVZpMi24XaNAX8PayhstEpsfsYVWyRQngLQPhjnMqnmUUXDG5cEgPEa",
  "key6": "3E1KYxKCvFXjyeMTsraZHzznptnJFwspgRPUWa1BFAQKYCnySvaD9iiJGGFPbfVUa4UPyKCmRod3K3382BVcnhFz",
  "key7": "2Unq5SAmRKP4cdGKJamGfRZyL7z2cdNFXG3rvkRNRYiN6kKtssTcc8F1eKn2xK9mpzY7GVZ4mEXTHgAZDtS9XN7j",
  "key8": "65vXB1LinDjiJcZwkYLNPjSmuY7eAr9LUvnY7a8e6sozzQiLYNuwcEMZB1wBJTtfdb8VjPRg8t6yxgvaw7QgBjAU",
  "key9": "5LSGq8daRwpnuHdoVWauSNZ1Xaw2fcnWw68Cp3xs2phjMZ8HCfs6yG3p4nqmnCb1DLfVMGPCwRth51eMiPe7cAs8",
  "key10": "3Vo4SiD4gKf4k5LvywB1kNu8fxHH1oPiirwm48Kep7x9UReZV35grYcAYT1VEach2j7SWxmUq9MceuJP2xnvdsuC",
  "key11": "5hrNFwTYB6Xzf6gnu6dvQXdxSLWD3pv84oURqVfnwHHsbKbWGgbAV6SnVWujesrtXjZ9zVrdaQ4kqEPtdRgVhQnJ",
  "key12": "4bC87gRYKtPGT26ffubAM21BSLSpkPbsvYsq9va1koEd1gDrkPgWfYWshCLRJc1idpJkaEUynQfKZ97ytELYjodm",
  "key13": "4F4gUaQcUCkr5C4TLmzrBeMYRMtzSSkSLV4ZH1p36Zg3Ch36JHNBAM5ETL4UUHRZWYmn4mU3NUAKyuaHY8uGrsuD",
  "key14": "5gf4YX8CMZ7zKZ29Kii7JjLem2TXKa1XdR6A9WeBBLEYcRWxaaqG7Ld2m73Fzve4TjNAU3aGeVmUfTGr8jJVd1zt",
  "key15": "L6LEDc7EhMkxPtE2MQRit3AVjFjJDEZHQyqTWVFFP9BPCjUo2P9nYTVqw9vbobrEgoMSJRDZrfAwfSvDgAWCNo4",
  "key16": "tkZfxSq7tK4VBXU1gMVK5SooFSoBj2TGtbK763A1P9kB9QWYpWPsrL2B9EopsjKup8AGNa8VdA8PMz8g2iLMsVb",
  "key17": "3sbgiKqdRJkJGxF2WttaCQs2RxbrA9EUGJzmjPZTiwYHd8pXNEdssRGRo6nxhMKnfbEPJbXi291MdtC1Fp3nat8e",
  "key18": "X6FRX4tvitGS7WExLuSk9RQbE9sNLHJXvE3h8YVgUySJh1v1pwxevUMcg2ySGDZAeF1kHbPAeEGAt4aqpB68jmC",
  "key19": "3W4g8R89aLc9FHNZkB3g91NuQSwKwptGAp3cF3GgcqC6iogop3eUrvjRACzjdkSSKVX7VaHAdnYmxuQAARup9uJX",
  "key20": "BZxrGUgSHXEiBeUDxLGjm1AurRmvfkrPxDmFdf69yTvQxHw3ujAzvJMjQtyYz4ZuofKZ6Kni8dW8s7Bv3hnbaqJ",
  "key21": "4rYeRQ9inHkJWT7rWiBjtd61s1nhGqRxD3exGL6E5ZArHSESxoUcHTeg63AgMy6bLeTRpLU7Saqm8JqPMSBpU9KZ",
  "key22": "3SUATtyhSaE6Qd9Ue4VSbGQQWmFKYca5DYEZrvwbw5EsNjgYpB3j3pN4ExrNsJNMmcGhsWsn5TLusCvcEzsZ1Tfq",
  "key23": "3qBX4sVX7oQqpCunai5ESCSLsacfC7HEPcmxHxZE67WGsrNVkYWxfrmtWN6ookz4jsc88g2kV7BPSw9LYBxUDRS9",
  "key24": "471NyoGg3ThkpCARtiUfhkj1bgFRXksvfeasE1WTVMr7SyiHDyaXA27X3CoDy7pTGKUtaPtB4CparZaDvakEFJR7",
  "key25": "3em3YHgjT35CAGKSm3aWrkMMjg7gkr9CBcgtBAXVZSR5WMt71g1yXMv36w74rgS48Rb7PzzHKsb2ViH74JHbpbfQ",
  "key26": "P1KX2AirAcZNNy7FRYtLkfXwkHwHPRgcuGAZT5J3nfgVjhd5uvhxWQFvqH3G5WEV8FG9kDoLNn25NFZCuRXMAcX",
  "key27": "2vNenEoppK8QmsiLdGegh7hsQdbcKuWdf7oJr1PAHoBaCjwWRrmyESMimRUy7xvS2JrWFEHzyXVXj7hoZ55VX7bd",
  "key28": "3fmP2zXge5V25hQybCNCTQ7iGkr5Up43m9J7QmwP77M8JPyrzdA62nNanfRWoumgZezHG5CqCUpCveCypnnwWS9v",
  "key29": "28h9gS3BaE42sFZGzisuzRetaeD4u7Ro6Je2oRkTHoa8vcEG84XnNehEmCdv7APSDH43qkGVKVCsa17Q6GFPzQyW",
  "key30": "2ieLQTB5LXUEUkkmHhgKQocbMKBSRH7SXfuA15nseDTxBgeYArwSMVourBC61fZiSfduFZdLGuYfVywQWqGdMsAZ",
  "key31": "38gof3yBi5YQwmsV96kE4XsV7qEh84wXo5rnSBP4EzbGpB7B939WczaTTGuheLQSDhfmHDx6zbpJUaycvfzN5CmN",
  "key32": "ee6KCBH3VcvEHRaiqU4KDKW9oA264ecHbfLwCNpQQVQ3xynbrmBKYxV8qXKNXipMio4RBNP2S9Crj2zBHdpy3Wq",
  "key33": "61JQQMB2Q5THkRxBEdEvxfJ9u1XoMNqCBucRXSQXHfmWrefFJge63s28UZGaQcNevmBRqrZnsqk7eMGNxokhoVBG",
  "key34": "3YdfXFPE7DcQi6Ux7cVYeBTUZnzMHgp5FoKXv38uMmtDnhou7uYPpQ75sMqbXM8uXV3xwE6pmeKmAUERbuuEfnoU",
  "key35": "2aWfmTuD4fGgdAHbiqeTyAnbrovN2YEfQmj8Hq1ZmKCY336fL6Zg2agQABH1VNU9QxWK8CPCW7risV5ZvCuLdaTw",
  "key36": "4B6Y9dT8y68SduZjT8XmM5HTtXyidnQd8VSEQ6m5HVGHYbCED8uw8tvr1dxspme9rAkgP7esvqTUxym44mQQGCRn",
  "key37": "5zjcVdR77d7KCG31E1m6rxDmzrH6nXMYTmq9ssFmDLBM5HKWQiabnM35gEXxMZyPwUuXujwYmHpQwhABses3SMzV",
  "key38": "Q1Sec272G41zYRCWqWP5vcq9TYB45ExTAbVnPbosQn4wPEkiWfRaQ67pxHqMshAyvM75hvNspsmtrwr1P2D965W",
  "key39": "vZdPFqGJBRsR878Pgtx6PupMNXdidMxRoHze9WipaEekK7x2C1EwePDb4SZP9aFTpaXWmoeuDLwzrsNr1HtuK1v",
  "key40": "5q3VNqrP9mwoNBgENSdzXdibshmcSbenaZKRX91Vat7srPHEe8sYEKJdAAy3BMxdqavSMLwq79oB2rUnorBaGH3i",
  "key41": "2wBEt4HP7gzi8RUVKpwoCykwz8LYVDEB2idXjpGmWUKaTapbFv7MiaSmPY9mAXyGsqb9nz58Z9dmzgTW1aYSZRc3",
  "key42": "3Djbc3WCgNNTYGmBQttyRmcL4LSxwLdd9JrWduW8gfEVdpxH5qRf7HqpYSUnENBmz8DqDsDHKQzJj3GFM6gPRc7N"
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
