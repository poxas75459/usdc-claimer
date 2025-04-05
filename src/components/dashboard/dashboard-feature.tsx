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
    "6bsQ2JNxpS13Qm653mqtwup7WnEHVq61jZ1HmALHT91dv84kexK7xe6FNoYQYw6VdWB7uddZBDk6zVCcAne7h29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qY22jxxs75y8Tx5QnRKv9xYTxwrvyRK1pExHC4Nf7xDgzZxeTBQcGbjzqqMVnAeto2eBzvuWr17uUuNMb9NUSuP",
  "key1": "9SP9o9vsotoHw3EAYq4WrP5VcvuXD2Myowv6rD2qW7r8CY85GGegevjmoCDYzKS7GkGKbpfJpaipAGciDcDabMk",
  "key2": "PYRsiuTS2x8tFVCABARqLUymCSfZehDhaukPhFp1CRddEV9Myb8ajmSe2RqzXcFdFbJwaPzsmeEytVkGXqpfVEs",
  "key3": "51zxiDN328jwCWoj2uWxyN2yVNZ9djj8eCu42A3tHbRs5caUSmjRgyV6DFVPr6zjP2btiyN4Dbt7vMUXWYkaZ2t",
  "key4": "4HWFjKXSADsdHY8H8kucsqQnKNS6raRAUfWcne5zMvC1mnWi8D8iNYS9aRodL5QMAJHMF8ZEbkKM4jG5EcDPHuox",
  "key5": "65vBdsxZYXTQCCLEPHNsCQqPUzwCA1NWVjduJqtT5AdeXBVoRmiVsVD5ftbtNFpobbo7uPYm3adwdgJHX8NkSG7o",
  "key6": "5THF76FeN5KaTQ6d2tBFH85meYBFS97X34sjTbAjHgUHgc63MZrcXx1jLUJhcDtyKd3HJSRaXke1CJT7YttYty9P",
  "key7": "SMeykzbiS6jwNS94jYMJEZSQozHBXYQMhey8JYUhrvWDjuQWbSHKvr8vT4wYQ9euca8XuGvJUfPdtVgjvdTWv74",
  "key8": "4cSL6A2QCG6Q6BFqRCwv2SiFhF7FZvYMHrh3Ut4Z8zHb6PRpm4sdvbc9ZBpPzf5y4qtUwWTk6QUyDi4krdQwBTSU",
  "key9": "By6DMmxrqhkn78PU1na7kVGuRp1vYMaTydfdUswckSPAaEDq3JJJfPjtZRTuc5XN9ibT5vfrmGSg9tFruos3CvK",
  "key10": "oP2jr9z6hVp1FLcX5ZrwEw77jdmRrUtjmGnkb6WmiEyocpnekBydWRtsYawtf69sEKai9pZgHmZ1qU2Jy6kNHaZ",
  "key11": "5CcePS2tai6xccLR62ePB43JuXoAkjXfCEKXroPwTRouvw86YSUqaDNef8BvTCjoFds5sBRANkv6kzxYugiCjqRM",
  "key12": "TGqKskhDXwjsqvvY4N6RtPbbnhpArWnNhDDgC53GLCcdjChmJ4KMe5A52LMBuKmA1xunhnTNv5n7Ve2kigtViUB",
  "key13": "39xjsek7gen84u86Q3kNcwwEchn8m3hrWAdT2K7oex27gHk38AgeD1DwFMzAHuqSTJR3tGLZPBy8jppoz5dp59o9",
  "key14": "3SqYReDHD351GCJMktfMz9wRqZGvq56LpBQQNY38wSEvPVf27nZhcPDfVpjeZNhGKAbrqpqaT2RL85gTCmKRrR6R",
  "key15": "2CcSkSz1azy3Bv5ezGYjECbxWUz1hDHn4jV5b8LM9o53RcWUD5hgM33fJ6WLUZpUgF7m5mGfjvwn35kqvXURE9Yi",
  "key16": "jhsByeV6c3tFreqz7kyvAMEswZaEqkFTzSXWyMF9A3r5vpMiUPgZvcK2oMY9DT9eTXkqbDjdNmz8mZs4tNwumUi",
  "key17": "3q9BvJGjxWpvzphoCjyhRoEjRNTYyM1ec5r8WUMPVNxjRrQ9JP1duYHhvNVijMuZyZ7474PYhg3vjE3xd6Vwnyb1",
  "key18": "3BgZgFNwMWBR1FyXuArMZHCDRJ7BFnp9ZnZuDtYEbmRM66gbxmUeC44usbz22gusbS7j6oj95iVgBLf1Twoc65ti",
  "key19": "2hTfcmefTcwyBqEpZe4q6StNkmKafdGQLT7aqYSbeEBrEdkfHnx5ShsShnHZakwnT6otgjKTW6XX6cBUp9uDLXWH",
  "key20": "5phL7LPdjdpc76bECCr52Edo3jkfWj1QiKrCLW3Sf1VX3bxDAuhsGh7Aiomq3US8ePfr3A3BY3tatbpLPEcLCNhR",
  "key21": "5Nj26EWLTvHDeXrB6LBGAwCvtt9sKUtPbRevGJArUe9mGJhvbvJZRyB4ANSWgmuu8kGP4dSPTKJwzu3zRCrXbRaZ",
  "key22": "p73f95jLgEhgF6Yt2Z3d3bXZJSe16QR3c1qtHgJX5fgFCzthnu1UQQzLiCNFmu2nZiunLF89BNGmwCDeFvoFYcz",
  "key23": "4TgiscJFnwSQKDhEB2w5tps9jfRpqpNGzCzpAW6b1JJQ8rduC96j8keVPyEhoMKasZSveUR9i2s5JVZAkGKy7n3Q",
  "key24": "2rxPSgG6SL2edb8Xo1QiwoxXaGEJwJaV9Tm5527GUCu9CUX4eR1oVzY9bL23J1LZ4UJvDmfbGwQgnPoxn6zqgFap",
  "key25": "4vfJNWWFHHGGTAs1WWAxdJVsgj36JcEwm7xiLusztJYCwQPCNAEV8y5DGvvqnJGb7H41efmW7ANs824DifHwx8C5",
  "key26": "3E5SWtMcGpxuQgeydMgFvFbmUfUuFmv5F4zjVvH5zxwWe3YAdXyy22KfhsZW3SNeAxtpv4GhTmFD5htbYKkGrHgh",
  "key27": "5nxaJLELZ64JHbiC3vmwa1MAtuefrLDDZJ2ENskE5yNHnExkUxpgw9k9dP5jVHBXSLqwXFWi4VnC1W1tmsDD9Jdd",
  "key28": "4res1tvDSPwk63ngUfYsxzXeb825y3DiuitEjRR1Hx4c9BffQmFyydzqnKGp18gn6yyp77wtmZprGgpkF79dKyq8",
  "key29": "6JjbHEf7kJENEffNvSCe5GXiRtYdnQUAowQCKvDAL1EANyTCodZUfNkcJtcAshhqt1kryLf5FrnkfYkdzEy2MwV",
  "key30": "3bwneu16wqS8UQA51YttfSs43DmmUk21XrmbQyxsbsCnWXD9zFRrnqajnXJA4eMWuDWkLN8xLVjh19Djs96nNsm8",
  "key31": "2Lk4EU8Q9bPJcHkbz7t5YRZGA9Pw1e53NSyQajthQSfdS9MfL5SZFp7U9eK1Aq9TzspaVmmzVHcRUi9aatnUELtu",
  "key32": "5o6hjaiWsVSA5kw1PEjyfPQuJFmVerdj2MuatsreVFxrBhuTsfkosS7eR12UnhbQiTx3evMMDmGf5YSbxRHLY1nn",
  "key33": "5Ak4zYTjaq6P4S1NuiLVZDgpbD5casmrnyFH6vo4wgo1nBazU2M4Cy7cyfeumvYe3P9S7wXgGC68EMtXNDoM7TwU",
  "key34": "3vvhZ5r6fPPx49D12tcobUogX9pA8h2MxnqdjsWpUgf9oaVmtUjowusM535KoCuj8FjUdLNrG7NnMtih69bkGjP3",
  "key35": "32rpiUAAEaKeKtx5mj7GnaMjRFmDnnk1hXYWGtpa8TKRd7XJAu6ypx8vZJoz2hRckWQeW1ctpnRpGYQrSXkzvW3a",
  "key36": "2V1oHFR1BoAbextszRNqykf6GFUsweHup546pMtiqAAMCeQ1fC92XtNw24oJoMAs72fvXgk1QJwq61s5KxiW3WMC",
  "key37": "3k5qJ8JPFuGitvopz99Tit3mFe6qF18ykq4A3GgxppCbJw9ZEQMSJYucVQYJrvpED5joSMffh3GcPiicqcPeZiC1"
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
