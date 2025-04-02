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
    "3MeZ72XSsesqTrYXj2VHUqthGEDUucWbtnvZ7czJFaZ7GsjwkbxwS6Aam4o46uPhkifFcAjLXhQM9DXWMg5Q2Kst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65z9EC65B85G1w8jzJDwkgV4DduWT4irMboH7e9ZP4rqTPjA3675dnaZzsrU19MAXNRQPVFtJdraL4VLnyegde72",
  "key1": "3bNj7nZSBeGA1Hq3MafLhDohHRWq44WjfY2VF6gkqb6foQq2RQ7crieajL3ixbybZFBcLsG2aj6R4NxrguFuyBWF",
  "key2": "3Kc7XF6bGC6hGuUMLQaTE2mdt6STc91njtw9VrRrUkoFWw6Peqqq5tQPafgKAwGYhy8btG9MS7pysx9jnCsN6aZw",
  "key3": "4JDssGJfLUtrpfSCWpotxhnLyCCXEcFhbPXdwR8NjCoPRjkuyxLtMbCAbuzL9VugDAp4Fa2vTX8FN2DoLewp1oRH",
  "key4": "4erYbysyG6eJG5VXU9SNgvCCsw4UNuaQf83K4Uqj8aqM4VgQgpWpmpcvAFk2ynfn5649PY9akrMpyA3e18cXWAFv",
  "key5": "42oQygcPp7ae3aL6u7jTTbQfxtfumr1SejKeMENj9wxDjYEzPvwa2ThbDhHimLJDuT4JgmkKGxhMc5ohNjAVn7fC",
  "key6": "4e3RtTqcmm59v23xp6WRiqJFQfjmDckVi9bYLuArvn9mnTFsCsb7F25YR8m5AeE1RdnbQQfMMmQ6XfpQ97FAyd5W",
  "key7": "QG4kuLzNHNi6uajLqfnkdsBV8nbvaFhX5GPQavCjrHuWCSL8spNkTzesnkgsaynqd1Es3avhWRFtUvbmCzFmwHg",
  "key8": "zijruTDWcEZBDNyTq8KbSbdc9bnAyGErMpHRV9jnPp35tdWdaHkn3vm53bmRATbBSAbfRUHW6CAeGzhMwJYrnvs",
  "key9": "3ZbZZKC7fSVEq3FpQHjJjmNf6W7FPbmn451rfMXxKJy2fcdaMbiDQf5VA4L7R3c31rjspAgmRaDCPCUX5wiVY3xp",
  "key10": "49LKnsWxFuX6VC3qGEnzGH9wJhegBoacDfiVN5NswViC4RQeKH8qQubFmmUnrvAjZP4d6TZcJfaeXAQ2i6nNdCfN",
  "key11": "4CbgH9FVKY49GRfskBPpG3dUbuqY9UAm7ChEFY7xw3WHwX1JtVzsdSGfshBAxs86xkHhvZunbVdnkujyLow3tiwt",
  "key12": "5An9eYFLKtEfMB5tBam9o4G5KJmjoytLnEn6UJug3T9PEWyQ9W5VqZoKkpaR1ufWohRHrqD4ef6kZ5swFes8wJ44",
  "key13": "5hF8V7Pzqs1Dr8j6qHYyUJBpnfyk95Lqz1LHxQxMGCVPwdr51tmV24SH1m5yWPfZqhbeLG9gyV2EhCSZEqLRWzXt",
  "key14": "VUUdvbZLfeXUcsqsnUfeYUhiwKbVSDcdvyEo8JHkmyciVJuekYZagDe3prZQwthYNuesTE4UTLHd4hMRsVAtJw5",
  "key15": "2V5t6aHj1pNNQWatNvun2nRQHFmHyCfuUpEH4v6bKEQ9czt66MYLS3xn2e3uvrjP2bBsVKk2YV6TwMMwsu2TKSYa",
  "key16": "XpqmGNKVu4ArjJWH9tPiPfPKiHJUUoYB3xgnbGYW2wrqDu1EgUMRpp8QrsSRUbmjrmcZotQSAzxNB1vsVeqiSMV",
  "key17": "46DFoh7fgPeR4xajrXqDCPQjn9YPjVFZmy8chvxxoPothSK4d7Xg51kwNzVc4zBUKYp44ze18NqtzK7TWdT7byJc",
  "key18": "22AqucomsYsKVcgppW8wkoFwrNQDbM4KgTDc5odxJ914bgWvEgbPtHEvoDGt5dhbVhydy27uMRWHBNRuLCfc565D",
  "key19": "3hbwqxJZCePdh71JDhvGTDZJYWBp7UHBjREWCr8xdpRcCpNKgDQsuXbGMU5YqmAKwCv4ucX8NYz7L2Wxma7hJF3A",
  "key20": "4E2cKwR1WWYHMb5FvYDCPhaeF4oFdqKvZWGwv5eJV1m6zyFABF1D4no1W1jhnPmSkBTdK8wnXqRB6N7fLoaBBEUy",
  "key21": "2XyQQJ3jwBxajpygqWMMvZcnwEdpjV6pPxPWndtEiRkhqCMNK8ZEhG5LgSdSy6JhMQR8ZQSa6Zdfb89egiz4Hujy",
  "key22": "3zZHC97q6LJYCrMAvpK9maCPN3J4EFLy9hgp4Ysmq8smj4jTLQerpGvh4b7Gm6FPkyVWHxcT4kgoPxEDUYgsVjDL",
  "key23": "msEKs67rSX5PgvrmbFWzY21DELLRCnjZyigjiXk6vKt5BzHtbMWEgLDo5QGYEonr1LT92hDsgvxtLmXyWDYUaRm",
  "key24": "55T45CDhLQSW4jsE4R1kKh2X8pBM7iz6EfwVCVfGgiG5pm3c8Pgcm5MAG4Gn2CH4978D6iz45hiYLh9m78uGaQ7k",
  "key25": "2M1mcUpcbEkft24Fehd1kKcZVYLaaA6ptGZPBgTtp5XqZwHtoP8AA564762ogpzoeBGCfx3bmSuf3pynyefeZpfq",
  "key26": "3zV6oqkWiwgQrDkioRWYsCHBYrTDpg9r6aAS6EGaD5xuoSSoqvvgmDMVB1QRhiEcVGAJkSJiNVueiFKDxVkia1k2",
  "key27": "2trCDvmsDep3BYfGqojnpwAxuCRUSuzrMjyaoE8qWLrMnieB6YJrjgQB4JSn122Nv2Gfk3VYPSd3VixzBKAwdmsE",
  "key28": "4BJ656DquX4qpgRMGpBEJKDS7aB6YT72WaWcQdxH9gGbszua1cJaXur4VDhRaA21a4oSmcUGYDwpy2wm5oRwQVLb",
  "key29": "T7hMnnWppL7JUbn8iCCtkH5THur5MWNXokdY7ACcWED3Ur9QWNEqBTShdHRcbgSpEWuQFFPS812eCeVKLD32vXb",
  "key30": "2PieQcmYy5wrCeNDifA6TesQJ4XjAsHXBnvJV9bSagqsHYyU8j9Y6URNstTGFdhMpLmY5CGqacT3KQ9aDmgFiMRB",
  "key31": "yxqBcMUxrfMBPPE4HvqEJWUyvfb7MD7sfYuhfRAaRv5fWyonxaKUMUxuUJ69ZwUyXfgQq4zcqk24xbqawPbdhkT",
  "key32": "3s2y6ESTfQQ3Eys7KgRWxaBxrXPfLVAPy6cgxQyEeWwjJeD7waxh8kMVWyYY5aXS2cqzF8jxFfs2iVraRTBbyxYE",
  "key33": "oqTtijVLpPnHXsSXvyd8dmb3kqHwEJd4atemf8PHXUN8Kzi22TwpMTqn7YpRKZMZEzSyJGySvVvbKB7edLZ9o5Q",
  "key34": "AmQLZn5k3MNjdnwctXasBG8GbdshD1F32A53e6dXYTXbvVqhk6b8jvmSczKFhisMFkXLPeubmBaoREfgHk4mut2",
  "key35": "4nkpoDbHaWuW7E9FmxBBMRkP8wJ53i9PxZAesseGaJcKD1B7G6AzYjbWnG7iMpGTwkJi5pxZsx2mxVtN1Q1iund4",
  "key36": "3quHQskJo8WhFLXhPEZTFSHfv37N6juUrQGrFu7aXPfiLsg6rUikzG27xhWYB8sETKTFn1pRbP3fZ9mKdxNULV9s",
  "key37": "4PHdMZAzWaNGLfqNYK7GrXSPoHoFwJp6vK9D3afvbPCDteXPMRfP7E4WU7Sxt1PDm4BXgRk6dDb7W8RLiCvGWmc",
  "key38": "3ypmKLSKey16QJYVta6c7kpaBbUKdt2Mpera6i4fH2YcxAsSFkqXsDCtwVciWaK7GnHdCKg7HsGuVEje75JwVAgB",
  "key39": "D84UUugDUMBA8kL2Do3NRaNPYDJ1LC5c7PKwJidvaa4idqVuCvXjm6mhi2wPhSTEtpbwvmMc4CxYGBUjmAhvhAS"
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
