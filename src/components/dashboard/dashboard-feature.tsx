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
    "mY2Uhy9Hk74yfA7UScX6GK9wSSJme8saCmVDag5sfn8szG9zT4TGffHuJM2dEYUrGBug21vXFXAkyxGtPZwceX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCBmDssQHvZ51FUzhZrNhYAQK1FGUqDUo1wAJ5h9LWAG2XMEQS4ad7w7QWBQTN12HmBrWyCrV21ai9KHfv5WkjT",
  "key1": "JxK3fU88Ad73btp4YiaeArGHU4izF1gATfpw9NF49ovpymPf2LXrZ8wwPMMVfZLq82s4A4SR5GG1jWy3NrgLud4",
  "key2": "4UDoHDeJV9PCM3PFC81KE12LeQveoUcMdcAeFjyMMHDjDfm15xu5kW6CSaQu7bYEjs2hE2LNDuR8xgc2Xmeo8gW1",
  "key3": "5Hgex9BVndfTadZDFR5KNRbv1GroEpZXhowNuhrNmfNxGaaDFhFmWM7mHjXufMh6ngLeLByDuxRVv7xseCQqcP1v",
  "key4": "4QqvLqaBiXLYFR2yQirgTbYZd5GvHgPCWcPqdzkj6NQAa2dicoV9Xb866KVJinDu8q2DTmmnZm7TnmpQmSLdY4hs",
  "key5": "27tEDq7L1D6TCJVLcAe77ivd8bHXiexQHmfWePvx5vjmB29V6sWe36fpumDbz6Hu4Nirqof9EjDtceuPBP4L2c8E",
  "key6": "47S3ZGm7cDLQmSxTt7SRQCHJfnchv9ccFGNoXv3DksbSED6mKGuXU4x7sm497f7GmekeJ2mtkgcqm8Nqeyrx8L9j",
  "key7": "2vfEFvUxHc3k1gkitR2wtbCnNaVFbNnCMFEfxEzy7BsURZ24upbufBEPmHFpwnzPUuEvFRpCVUdgmTZwCKjCZi4Y",
  "key8": "4nHh9C1bzqx8yGtufrrEGomwEATexzwjW1nstoRBExsEEUJoDkodD3kz8jfwNt1rfGBJ4G8bkq9Xjth5C9ekcq2L",
  "key9": "3wjs4QtsAAemzQndvPkFAsrTjiffXdXm99Tkkhz4x5q3zcJJCZxdwXY9CBZAhmAEey522cs6Bop2mNZifBEVVUXS",
  "key10": "5b8gcwByYrhLtXvyFJS9f3fTZt1CM1nbmKQgiiZRgRf62wvFyz7dNf85GgptWx6aX8EDac9932V5hnBcnnzaakT2",
  "key11": "3T4gvKRqdZnAesNCEUBj7bvcaRKwDW3mGp5PuzjMro96y8yfW7ZmGWqJG4vmS1MwWPdEw28iBnxNjGzgUYW9W3A3",
  "key12": "4JaFqfSrFHGaAd3nLqiuPRShDeArqZ8eCacPZxPfjZpcBDA5QrTiVjDEKncDbFfeqkpGwyGM2b7Sqs4roLXuREG",
  "key13": "4xvc444dAqrJs1qkV7s2CgCXDAntu3i4pRmeg1SxbfMBSXBc9LWhUioo8RKQfNC5JmBEFXrFaz7gtFGsu5waTTws",
  "key14": "CZ5EPbHHr5mgxvprtDw86p66WD3918o2A2JAABpLiUXnK5SeDC43hanLYAuqMLocfqxDULHsbgMX14WgmiM3pxa",
  "key15": "3nkxqzktXNmNc6Va9U29yNyoZnynqT7Cz8MYmFJhXGygrbRTHzVgDKkf1qyueBbrHEa86fKGmhjbpNRxCHevaMqs",
  "key16": "3kcoXw6SHx5kwnQAjqbiEbLbLzKm7RaFycGxSpwV1AtNAvBAnc8a5KyJKMY6aoabcm1AwRQ3nurj4tQaVCkv49i8",
  "key17": "3VUJbXmeXa1Q3uaVfJukcKr1SvnqhFsZgXZGg9WRwfp3XfvQsZnd9EXmJwA22nXujGYVCq8eiH5qhCSGiTczdLBe",
  "key18": "32STAUrNZhjCZkKTEFLixJAob11wMHRkKyrqrLgT5iKk1JpSikqfoMPEKUokve3bmmjUzDQPLBWUEYPiTAshongN",
  "key19": "4B72hTitNfhjDcL71c9ttGgbwtE9oUKc1a9kwWg8Dwkm8a45oue1vB2GtXLqzZzRoquk3pwpqxwwTmDxf3BtNpUo",
  "key20": "LjU8JZ83vEtzkPx44VKDAhPAGApXTig7hxkqWPy6bsLVfxPf6KAJrAt3WxdX5wU8JZzUfJXDpARQRg5BLSzfesM",
  "key21": "5yY28zcm1Y9VjK9rjUo4j5ZwCgEdHv8FFun7WtphEQ6KXe1Kqm4ewgNzmKJzzRu9aVdJozH7yN6QG5z8X5L3PFkC",
  "key22": "2u4t2h64fvasFMCiHNKhYSeAorjq9VjdTyFUFAmHZYdKnM47fdbGhWPCMQqCsE9bEjscrJhQ32DZRu2LPAdmJkNc",
  "key23": "5joTnbT2uwpcST7p3zDjADUa1KYvqcFUHrFr7UzFVcwPv5uhXbEMaSWPKbu9h3Garp6xUhBWV1cTR4MgDFHumGsj",
  "key24": "67FKtF9QnDsMGeDaKyk4s4rAMgQm4UdSZDnG4TFPyVEQv3gSGupPxrt8NYFaL8X8iy3jrfm7feS3jCGuoG3R9H4y",
  "key25": "wwtYtPPqsc2ZirwCgeoSTHYt9kWgTozh1cW9WTxQ5o77uXFvtYH25V5HaPn4VDZDFz9Cs5vtoyN84L9EjzFogtR",
  "key26": "5jt4Fe6fg6XCQ6HBxHvRSPCDoWmwbQFpK1kASTu8dHYWNLZCgogB2cB4h55DApTs64QvZyeERQFR6mWbdD1ewDJk",
  "key27": "4ZsEWmW9NfeBoj1TVBT9WwZLQbg5xGZX8E81D6URki8Mka1nWKQUmBeT6YjJf9DNdmfqfJUPKfyKaqRQcor6kPLu",
  "key28": "rJtrWkhjVWJMi7eEb1txxh5NHGNhTDRtfZbXhwT4rNSjJfsuqopXE46jLE9wZM11uAoBuhWxk7V6rsRHsKhppzj",
  "key29": "3bjfB3Y1WcsaRUZQuJrrfcke5JMXSXAkTboV4aGqKuFsLmZeaFQNWPVs7y2kcqz5wf4YrGguZ5m3BzfMi49aWfCR",
  "key30": "G8wn2261pQeoWuMUPXTKib7GiSaGvyFFJBQ1eGWQWgFzwpuhGFo3AvaFUJhHMzQTPZrbhwN8PozgyQ4w7fgP9Wt",
  "key31": "5EAq5R1WX9V7BWmahVHCuGhRqoX3NQxD49w9WmJRAr5w16czKzdY74JA6xvoUR2eiHiEtaPi5g9qKrvJHejAgrLj",
  "key32": "64QYjHDRtFfSvZZBs5f5WJgayHm5bZtLSePQtu8qnpznCcXBagqJWd3HtkWbN6ZVGVMGjwCi51sopCXmELZfERQX",
  "key33": "5RGLHNTFE8BdZ9hwrKGi4tawvXrBmM2XgLNUVBzP7irHgwBdsub5aakYTG2uAJhhgGSRe4N2FswywpymieDSBmo4",
  "key34": "3z3CzCjrGyHAmgNSAxE9ccenTNFxLpR6YjjHHy5SJiPuKD3d7uiYPGCna6UMENxond4fBDVWTbRiYMm9G9QfGXut",
  "key35": "2YtBEdHZqoqdS1TViUAnJRdWuQWgkJibP9qRHG1kZeA3ZX19kkHrzFAEuHbj3xnxKQ9RtjNwQ5CwVa9YbaxQ1d1t",
  "key36": "5HQ7oUH4T2ckq4qZdugQpMYbtso6QvWh2LHP7Y1UrK78vFQVnp8BKY9B7oqDjXVsYwkr9imF34YrcAs9uLQCCjYX",
  "key37": "5x7L3X8F9dyW6VHra2Qwc35KBNGAavaP7Hi9Dxz4fsENSiwpn2greNhdDsJ8FmfG1F1JhnwN4A3PhBZHJLQX4Uc8",
  "key38": "4w4gpEWoVhDhZs34qduqXVrDkLf4ZfJhrBT2paD5nqDfKKrXYhpnWZ2FeG1Prs6L9KBWANK8cZa7RqPHJrbkBrns",
  "key39": "AtA1ctRKjsGbYwd5KbEmA7bGw3Gt6aWoiPE1jH9kSJ3ENE8rEhfdTeqPsjp7FpkzHcKJMzyFC8BQDGw29zGRiGM",
  "key40": "4rSVqxfHih19uWXGRs7eSnCG4GDfGCkYHjumDtByxkovMfr5ZVLLf97nEESmZcSRsa9RyEFc4N7pjAA1XPPumgB8",
  "key41": "YbKw3reNwJr6wShsXyeS9k1dB7M8Zi5ZFWGcuxujZmWPa8ANmHPNhCec3jLVzU7iKwGsDkFT1bcMZDaUKcWNb1t",
  "key42": "2YqGehiKehZ92GgWT41bHTyeZGBw2HEvdYrviN5DFwoM8djFn3MJdyrucA7bFrQAh8QTz1dCqonLSLt3tn6oaNzy",
  "key43": "51kv7o5JYZ44hbrMe2hx7a9cDsaxBef8U51X8aXcYKJ7hGPsC4T569YmB86NEMwQZ74sMHZ2GBBGatVZrNJUx9xF",
  "key44": "Ay2eqHZrLxwvPBwXqoVeJSZEaCVmTipFVKSjRnwqoMgoovAWdDM7rS4WrBXjp44bu4FZ2zQAQyLF8b7L7he14Xw",
  "key45": "2XTMxjsa9syseHSf5vssPA668vQX55YW7RCU2BYBKCiXGfty9zLo7gkDjnsBTLzDBmstjzUjjm6aC9PXxFG3Cvgp",
  "key46": "2FL3V9f1YJg9XyrycEZfnTU4c7QLCUeVRgkaCzbM7Zv7EC5nLxXbCiCQk34FwRNRRj9JB1rBezcCutMi2fiqLaeg"
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
