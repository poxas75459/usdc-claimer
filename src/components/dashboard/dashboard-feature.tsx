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
    "2R32kPKNmYnRF5XcbLjPhoqkY43Kp7XrZiKBpqgzgKLZWfNBNBTBBbNBWtqTaj3idtw4eJWjzzWdAm7jbnMy859Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jbJqKXdEo9uAQgE7SRY5V6LCXwJojHWEd9xg6zr54dLNamkqdY2i5Nw9M2pC7bFpJkKA4ejbCRfqVGrdZzhFy1P",
  "key1": "4xYiyBox44EiMbaKesWhDLDFVt2XG3insrjoDGgzX4pyKJD9n2agC25L8ZLRfuPnTqWXVKpLbgu4dCcvL85E677A",
  "key2": "XNe5W6CShoKvqMjQGXpzx6nU16TydL28ueZpXhPHTrdSfvUAMKQyFNfmeQTDRK3Zgvqf3fMfYXwErojjULrGLvd",
  "key3": "526q6CFKJXzP7LTzXJriiBSenziWWWSTjzk9kSJqWgDFRQ42UPML6RCgmzVcrrc9rqSioAr8ZLRxkmN95BGtUAtA",
  "key4": "4U4jbtX6sJKmtTSqrBrZ2WyPiawNKb4KcpKXcJWVXUnsu5WfLGfqnGbiFwKyHQn3YuZACn8UQX3ncgnrBf5ZCN8k",
  "key5": "2x47vwq4HGbw6F3AJemft6hZa8WESieZJrQqchPYqhgzxgL3o2veppgcNofngw7H1EfDGTg4SvRrxsp7uxLTv1Pi",
  "key6": "62eTZhVZKzfBv9XALY3dtLkMXe1Lfw2kiuG1JzbonnHLfFJbCn5Xq6FiDDUhy3YcRnDqih3ExWvzva8WqQvfRDh",
  "key7": "3mK6HdJEN6Uxv5tjaxKxxjyKSVbcKjKwtsecKarJhzRJdYVu5uZ3sXUmzXijR6C6Zo9KuwyPMQcwYTsRCV1Nth8A",
  "key8": "2Qrjj6Wq4BhB28eyuocURyirQnhMHoX5JYL6VbL5JCKWxh2zmK3nH4VbAesE5X6NvSjgKodNACAwuZaP9esNFKB3",
  "key9": "5EoEPkHHgU26CdQ9d2fn1vWJPpKEZ1qXgSV8vJPHfY3FwioE1SDA2P8VkX3SZDsQJdDxaHpe5VnsjmGr2mNNWm1j",
  "key10": "381pTLyryg2gWQys7yHGDP6ZiZvYtLCCXhbuzqR8oV5mc8yf3s2WKUFV62Cgxwq51zE3chobGLrmMBGqYB6ypDZh",
  "key11": "3DpJu8Jzq1pvVuo2HA9bK1V3mbknpRbHdPkTJxy4noRp7eMnGaxNDh348EwL6h24SUaNBBKGkUEqqnACNUPpjvR",
  "key12": "SWFVTdknvsLuZgT8Axc6BRrd3xr4rFjLDp7LY263St2mQfzbrenCmBqSaQhXQL5auYyGnjJYugP6vrecZbX2BAg",
  "key13": "2esTCuGNbscmyVwxc6grugTSfUSnSrRrdh9JxeBD3B45KNVLiqdreDN2HYnASnCkL4qiZSf41oPaNGpqVUpSnrHG",
  "key14": "4tJW5XuZJiQea7dhr5C7VrECJ4ftmfGBPVK9vhjL7jcc3mXNnarMnGpCT3Vjqhu2YZhTA5anjrpRWQ2ZVFjDHPcq",
  "key15": "37Vusei9EgWPu6Q9k2z26NtjEk35NCdgVK7aCp7twTv21uYHAXdz49NGmwiP6MXhkoAEUKd625YDEbigmZwGN3xb",
  "key16": "63wqAqpRjjHFvxKwguC9SLhmbW6t1QdUYtjMggsqmv5e9Zq6sRkJHGwL93pykDy9PepoQCYsn1hLH9Y71HdNKiC1",
  "key17": "5KhA7Qa6wCMH5Ft8swMaYZs6Hym9zxq9jyqKQugbWQ1YwHR8uvqBXSqPP1drNYYe6qTxa4ma8W38x55sMWXcRKQu",
  "key18": "3JesUa76jvXHYREwPWZV7zBcKzjaq6h7NzuCmXgcF3dGzCqmw5AazkWki8jbZQWEqved9WeqthoggbDDDBtYKqVW",
  "key19": "xWveoMp2gM53V1D9ush1BRfUMKMLpCLn5kUbvsTY7P68od6px3rfFvXRT3YnSp5GH6PPwGLA5vCSN9wMCXRuDFA",
  "key20": "48JL24vL7VyjgPyhzJpxdtHJ3sfEFk3kung7e53gnyM14J4FjkXC4FnVKXMRHQCKyiFUrEXPZFCwGAEFdohbGMXJ",
  "key21": "4nxtDikJfFJQfnBYmUAvNHGuVKcyod5Gg7CfLxuFiFrqQ1FGtimR2yrNW5j4AcCdSXdtdQJHGEKT42vLtaUMeSLB",
  "key22": "3eaR6UGyFG8YrjUJi3Zt1aBFzm5YDTG4zLAR6MCsvGAEkFv6VfkSqxh8XsUjKoAuGUsZGmuQzUbVVFLTZ4qEJ4JQ",
  "key23": "KLZmvrxZvRU7McYvGvhs4RFeXPea8V9LfCzCexUMxeQGcQx7adqDT92gPSZRghorerbCSXkQJw7R4MnLLrV3fue",
  "key24": "4e5R227Fqj8fNr57cmGAo9tZ248bDvwKww3Ak2v87HFSgWRjoE7VukMdPmCEk5JLVdbtpLCYszt2pGfR3WBAKiJp",
  "key25": "5DdEAhmS1Xt6NiGKVVJz2v3DhG4MUDzuc8vrrCsXemW6eL4gu2aizhX372oFwqm47kYLNmfMvumCeEp8HqPQCJZe",
  "key26": "665fb6SfkFUGV9Ng4Zue84o5jr7yb1zLCqdMWgGCwrWovNXM2rTwdDVh2PFPP6F1aaBy4ygsARsXDNEy1H2g2QQx",
  "key27": "3JwZpR1UCqJnSHaBZbDFKiYZ2hxoWRLgnWwY8Twwd9d1zbd5oUgweybp2pQMoC6MyCeFLwNjWqBrT9asWPBPtbHT",
  "key28": "48pAtyh1qtkHtSEz8ekUsh4HxiRZWsb3YTajmiyUSwjXig8zqRaKLza6xfJEra4LmShXAa2V6txhMzfzEkiSwtdk",
  "key29": "pVBABy57fp6P6Beu8Af3s8G2yFvKx8nRSFaoVbCznHUcB4YhSgNu9boJP4FaZfE5neQTFESsrVFKG2A8CeSDmow",
  "key30": "5NQBmJvofVMUBiWck4SUNHUsNsiSiQnr9ZUSpPS8WY8K4GFmBXgKoq4JSPVUmr53wtB9mLBUgdvcXzGJKqortDy3",
  "key31": "WFeDJVWJq2f2kWyNfk7XU8QdARHaUGasXSHymyENa2EJMn89XGg9Kk7sdohBNV3QZHGgj3SbuX4qKkZvYSLCxwk",
  "key32": "EWeS8bakz9TCWqKhSB4f2dRfyC5WQL9rrk8bqZqtbF9qHq6w4vViB9ifPGh5XRUPunhu78YvAkDFgpdQY6UFADc",
  "key33": "3v2xhUES967eqAXav5FoPAqwH22GNbUtBghWSy8Bnrq85C2hwx7mCu76CedVZGtKJnGnCViDRwEE4VbdywyejNN1",
  "key34": "2fXKuneUMbDKFbzP84kR5b8ZYjyKSAe6z1aCESvV1o1YTkDRdNfb1QU7FDHkyHZ1CJdXeWjezcKmrCsgj25QAnqP",
  "key35": "4F8FvLvzjHk7Dy1WzPNX4pb2KXHSx1HUnGVUfD7tfae4VjNxGBcXi3RFTy2kctQEMbGEJgSQb5J1U6BfZeHg1HFn"
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
