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
    "4nqK4KxMHuSBKwQr4UF527ftA7siJ5qK1K3jMhyc7vLASJ9to6NK6Tqhkq2nnMPeFr7qbWDdNaVTaCqh7wA8bnhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfWgtLtwhg5FCvnxjP7rDDPX9v4fDYiaHUfUtunHBy4PfDU9dLsk7cvDZen2ccQRMWixoxHgnndWfUMp6H7goaV",
  "key1": "2HUjGjVBXcQVH42wFUfj3pVhiRabuhdLQwJ78Nj6EtvHLCpFXC9e94jQXsa2UyBymtTV1oEH5ZCifdjfZ84D2nsv",
  "key2": "x9iQkd3qhXNJiEkLia6U45URYxUKV9nDuqavNjRceHUG9XbooRSTxKK5PcWgWSCSbVnpPDDToYPkTbuncwdHHB6",
  "key3": "GiM1PkXKLdJk2biHA11wrt2qfA39gpoHcrugiambSMreBiiaSCZwSvUn4m1hxkXTxJeYWCMGEDWusC5wQuUdhXv",
  "key4": "2rtb9eXhgdYcFS2771t37d5qMJ36QkpJPp8oEu1THa5gXakkDyFmyDS9qcoEBMSnnDXLWvb4Qudfikz796SCNhqF",
  "key5": "3nWMDLbWgmRVHzg9rvRthoNGDr2gUwAoDhZU7TTdQsDs7XhMckreT193JMzjVQRLYhZuXHHJs3cUcRUtumrvCzJa",
  "key6": "2qXjUqYBfoTLeA5gYGm5Yn3nY1nQcadJsRB9HyiqKQyL9eGYyfoGfP2MA34bUKnRECaWSen4x2DmfL9FG6qjX3X8",
  "key7": "2pnUJfS7pMLAK6kBjdHc5wogYBux93qXj93L7x2Ho8K1MtU93K7SBrcsEqwXXvneaooueQGEgNHxqU1i8DyZ24dj",
  "key8": "2xPGvScV4CF9F95QSgDTpaMPpSHWUmStjKX5oo1sBr1g3xvhJF6eBg31BWpMWwNwbszHBty2tR9nRMkKiJ8zfwAG",
  "key9": "3i9i5G4wTaA37Lmdyx9JucyEKCoe5CbMqsSzwEqNFCgBVSzs2Ccm5AovEf696JtpzugSj8SAEQyxzECB7ZwJMjEa",
  "key10": "4NkRJfpXCdK9JCNYXR7Qt2yKjv11n7KrUczQ2jX3GLH7XJu2V1NpD6wejKTPdYKdwECKUbEhjQLPiTfv6gwvpCKC",
  "key11": "4gRokCx5DkzCJ68Kdwigy7qoWhGuiYH9u8JgDPmqT56gdvm9Y6WJc2iYdSbuiPqzDMUscrNsc7VxNrqYNZod37az",
  "key12": "4yRqkLUX8A6e27HMRywczN3bsWjBLvPy667GojEZ6DXESPSssWCZ8faPHF1y9c2TEAXPyuw33qkbzc51QeKKc3xC",
  "key13": "53VaLkYopm6zCyvh3h1frQZF19sDyEy9p7sfmswZnAU41n7ojHrcWkVTv3vp9d6x96wnhWC6QqNjSYE4TKnzmRV",
  "key14": "24BjZXDFrJ26Ryn3SgjNud46zXH63NvSVV26jUeCKyunCcguEKdVCXwUoYMRTZMBSmt5SAxeSfWyk6HU2WisCJwi",
  "key15": "48xw4WPm6CsiUoszNnyM1AbxZnZWRc17SEE9rEkXm2nyLpJbfHQsXBqtdrvofWfqGvZggqAxY8ogrR2M5X8N8zsh",
  "key16": "4rLHH7SbFgTQNrkPNaAy2RvLYYZyryGYj85ZKiwbaKzq9cc3o2bSr6piDsb2G6eE1NwaoVgGN5EtzBwgA5p7RX2u",
  "key17": "2CXJ1sYwQTwsxULcXZgKGLyUdboRfa3VWF7rrqVnAxfh3ESA5eF17PXbinwkTDr7TGN49wDjsYTMyuxdpV4NsCaw",
  "key18": "34osKWBTfhz1PRnCfd7NfHeB8a6aLkFQ7MPphqboevXSJbAWYcm2H9bnGBEHBMNSH3beQgGkqpHwj7nQU7BuQR16",
  "key19": "3kTDvCJvAucwqpipgsn1QUGqVwRqa5afQgef8JyvUc1LUCVJuc9cvbr5j9is9FvWSEPbYsqv1rG1mGF3WQcin2u8",
  "key20": "pVHGodubuJFnLBzApbiHeEukQRtBS8KiiGAWp9vSx8QEZtMtyoMh8LS5Hi6TwxxD1jqfCGuZfNP6PHpwJ6ZLDFH",
  "key21": "5Pudbz9WxP4TgAom18mumnpgdUYCJJ3i5DjNvr8faW5SdNNn2uawujU2MJciVySedjDv35AnfqjmKfBH24NfjJnJ",
  "key22": "4uPXR5v5PxRhsY3wkFYgYXaAdT15g9GkG5EJAXSEtpnTJcCeK98fhtZa8xFM2hs1EhAYzJJDXnMoJrS6SjNF9Psd",
  "key23": "hT16WywJXMsqJn1ibBiHFNNtnu874JeWVjH73K71A43GZxKBqcSeXDtk3PCAr4BupQCz1AETMxTJRwv5XtnoVCZ",
  "key24": "5JuvmUVUzyAWh3PUWnFFeABNKYW6qaMYRQVyBi1qbvrbzQrU2L5uDtmiChWEkHYY5DcA6Un9mcyMFsyDL2fbaB12",
  "key25": "Yz8MKUYPLFzdZ2bFrr6zX1HXzq72NHKVuMbAUS3pXnsnncCeJ8MUmzLuVus7CAe3awCbemE11ctgRP2Dx8Vv7Ne",
  "key26": "3ih46SRU1Awyk4EJZuZmp5gzoyDXUs7z8pbxuuUXBgbJgeyRybx4v4iVVkphiej7wcxSBYdLWKATUZsWJsUPK8NL",
  "key27": "4xUYdntqHb884Aph55pfRgE2Hey6VWjZ9uCAK2EBeJu4bxppTPMWRsyjX1RQ8iP6c8bpWpfm5PYqmhPB8BRBqjvL",
  "key28": "2gewxuK35R3RHYZcaybexDbbxbDg8eN2JgWYdJVJqn4Mnu5Gzf9i29rKUbnjbvKKoVoZ2B8EcL8SEnLDtsVc9HHW",
  "key29": "2MurC4MJwjJ3qCfLP8vHwHUQRVEQGQsjVjDLY6ZxAAzsiqzcGafmEN3zB6abb28qfUf8SpMpXJdGyjTqPMTQBN9Y",
  "key30": "2quKTJ9tUfqBZj3koLzZ8e8QoKgKhuBqVKgdXWoMifPvKvfjKndKe9fDcMjir3fa9xD29fdJoiKqNjpnCyjDRyKf",
  "key31": "5DGVKw1ZXMFMgxPUPrZutpfB5CSq15RB4RUZwL322AEGs9CANEY645kPAMxXuq8t2hg91py2ZPbuQkKZestgTUWX",
  "key32": "2pzKESgc4tJZDA9jwqei1p29B7zkZJYJsNyWh2iCtYyyVHpRfQoxx9begLbkThpkaRxuTH9UgiXGf5uNRPzVkoHX",
  "key33": "4pPFxdJYU2kiyczxRAwMq17qStvdJT3EpSddYAKLUBmiE2U2vj9CamhSP5xTW8BZpR31SNMLqLubTiJbmcD9Ns16",
  "key34": "WLfjhDXrNFAShDV13u8dTdYrT8dbfJrDknnQZ7wiQfb6ZBkTbuz2cFmrXAy8cGpW4j2aShovBuiLmNNDzv5Y3Hj",
  "key35": "3bvFbfZM5ftWDDC7aaYScdcH3DwRGB13kqRoHtnGughxX8yMnAyywzvwfncJw9dBDvowA2n7xE7bqDSmckjEN75i",
  "key36": "nNyzK3TbcUvn8K8vQpcaBMVu7njnBEAABHocnoqAQHTi7g47gEbiw1PJ6oQB7xwq3yZsYCcjVQzssxSXcMpez7L",
  "key37": "483cg9uwPtYhRh28ggigvVMzLpJHTWKs8z4T7xebBtBH6DZebbctH84cSv4xsxGpGv7yNaezErMSu4V1mw5Q9cte",
  "key38": "4PBccsNGTzZJsw9ji6WVN6YdV9UFTCxaBYpBh7TmoypFmoNJLdKvTWkbefXdi2PVzaMWiYoADcASH1XaDTc73okK",
  "key39": "3rX1Apx1CqaHox8VUP5bSYwN6Pyqq1yFASrJADfQDBBCg1PUst3tm4zjncrLzohRS2QNMz991GJu6pLz3zmdshaJ",
  "key40": "DyfmRi1u9vDYkGXebY223xy339eytEr3WqayPxQJ9u5kvq3q8U9myKq4Uz6VMtZLePeAqRrjZwHXz91XoeZaXF8",
  "key41": "17GL4knuBHzyKSQqPc8wrJrhVcdKLkUDR6uC4y63Ckd5K3qJ7agCosGyAuSJqih28kyEKXvtDjpEsw3aPXb2CWE",
  "key42": "MuCakdg7kVNKqezN8QMFvatZLVmrEFjUKNsNjkQek5Jzk5S6vyReKimxTSr7dTZ56fh2YVFkYLU3yCz4CmM2QzM",
  "key43": "2d9b37X1Jzo7jP7YRw9Q4r6phGmP79Dp7zZWgNnc4q812jgdSuoqSd6V1wbmq8bAW5xS2sHepvBJdHQUZUdyzLYY"
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
