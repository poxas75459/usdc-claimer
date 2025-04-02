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
    "4GWFe7ty43gRCmvAfNJd8Porjbu7xXFHGPapyEbuvzDYkGvttLWSXRTezY4TxGYqkkUDchvLiEvNspwsnC1BNd75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REbW2sB1xXHJU9URbPP75YCRXaVQ5Fvgys1dsHRkrFddL1G6VuPPx7QWXTjbfZ5sfkR9CHRxyZqWZHFJkB16WtY",
  "key1": "GEea8mXvx3HdFNbtPUktpk3SgB5zZmEyfGVGGGUW48Qt6sdN3anMC1qaB4ft9jMu4XGFaVbhZpQM5hJcZB7DuQp",
  "key2": "4Ki7UDkRyzx5uTXEgMgaYZT5ydiKZUuaTzJhyw4Lo3fNASyEZWVxJMsk1wxXRp3BWoMDLaZbRhWgHgKUV9p1CKYM",
  "key3": "5moRrhHCwZnJkzMVTxjHiLMbYk9ovX3yQTeJBpNkLyTswFf41gDpKr23Y8BNCTQvnLLhhpNMXL8kUdbCn8YrxEAU",
  "key4": "5kBxU4UruvGvzhEM2dsWfSD2fURNGmhrdVj3hjSCpz6Nxjuw5pjKFs2gwqnZqTQxEenHiuDVFQmqXjAptb5L9mi",
  "key5": "4Db2KzkGRy6UrsDusHVVi5iqEf28A7s3dynhFYHqnZMDFzCqrpEbeAhuXaLXVipkD7bZGyAz8QsMskCgAgUao2Ak",
  "key6": "4F5sjCZxhBCjGB21Jy5GpgFm2Qe8QK1GrVY7JRiuxCMveogevoDhXJNNdxAQf9SLDrv9Y45gEkF7Pxu1EdUPZtxY",
  "key7": "oS9VjFmjo8pJgxGAuyDgUFqhEBYvu7YUaqJq45BM2ip3yzZuRoxBthuzwdSGBNNB8RE2mFYcbvCXFJDpw3LDp6F",
  "key8": "5FUnY5Xcej4q8pXf1HE6KchjqPQQEYysdnrGYYSiHN9oKhmKqVtjZCLRNT4jLiL2CqJpKNZA2NxdFDtsCLbDSRs7",
  "key9": "2JzrS9bNw9sL8o9GFnpTrHcXKstmQiRHt4ZTkDhj7dp6k8M7KUtfjZMGkujwBNcqQM5xWNqK8EFC91Rwgq7Utm2B",
  "key10": "255FVjtFgvNoFztBP4hCsPs9Kw8JaTwFfGT68DYpcFE6vZ2HXtx5U1i93b2PgLwNYstwU7z445TRxqr6rocx2AXL",
  "key11": "2sqVN1c3GUF6h2N97g4pP247t82ea1LY6d8BLvJZfmW3gJJ58NQcePuACTaNbdnD3383dJtpSEqBWxqW58X76bjz",
  "key12": "ye1u93VfKvLk6PnjqyjS9fZdVk4CQehJrL21EPZvRpGDgkF8aAebZMyiSu1d6mrYEZuFrsmuReUFfgGrta12M98",
  "key13": "2DjTjPPZV2vjpbnGHoCLwcv5Mn72rcS4yCPtuaX7PYUXD3wF2hBbbCkcGqSTgVyyLZM2Dh6GkkyCGeDvMnTBi1nZ",
  "key14": "5WpwF7PcmWQzG3j95mLAEyPX5sBcStJ4ZQ9Vha2JXVKJqk52fx6eSXbeiKvuoHcP3XN14pvZ1AE63iv7e2ng6H6W",
  "key15": "5EcUyxFP2DGurMdYtHnXhhRDEEVnCfiXzj2AWa3y47d5WXLgkYZ4RGzSzjKD1umH9dFmf2wRrtiNFeQg6gV2nLaZ",
  "key16": "49TJj6PwPoicMbNUkA8KrhHBRNDTjpFwNCG6sZgSigvBp8sRNGjVC9ZhMxviadNNSqXMsmFVYbyvKRZpFx1uH6Kv",
  "key17": "u52Mjpqj3VyyDeteHfq1h51vTtqp8RXMhHB5QFXcsEvxwZyNECxve4WjLSYLaqcXGmMQ2CXkPrBJRVx4gJKWshK",
  "key18": "4ummmy8weBCZ3q7QLycrqLzCcNyp3u7mRWLwYpMh7PF1e4v8AHt5krUNvg8vMMtXYgimX1TtpuwDmtUjPxcDgCL",
  "key19": "4idgMqTn6aqxoN4i27W12hhALUiLGygafeidD4PPi2deJQH54b8msWBsJ5Hz5WVvCYSBmhwDbS6b7cVDn24PGLV9",
  "key20": "2HnoiGqkeAmEDmz1tx9c6ivYaKEkWQ1dhMHZ1FaUJxCuRPeBuByhA2yDNMSJpDqX6j8UF9qa5BNcGwnqHz7wHVdm",
  "key21": "58wDPdMQp8iWDWbnNadL8TZPM1RhbikUF8h5eX7sjMsPDyFfSamx5wgPf6XYTZH1ZR6dobgn4KpnNEYKjWuFB14q",
  "key22": "aZoNQD5UAKSL5UzjSiKeeAKCaEMaJuQgjuZADA1VbrQ2HzebogdMmpTd1wjrkkdJYj4oEmueKoJYZgkQBLN6aKK",
  "key23": "2p8hieRP2SGYGLiPBz7kZTfWff8WhooF4uJPz524gmpvq631DhFoQxGuUZnpYXWKxhJtPd4HL11nC62QbXFT6hpf",
  "key24": "2Z9iia5vgbqjvVcuiscsVJa6uSDwGUtBBsH3aitANoj7HBZdjPCnFjzaDY5fkHdMSJWWj1FEZJieEQiYZNCWEXrt",
  "key25": "2kEQHEkX31TDtE7m6vyNyNRRsigohwPWYpVR5vmcv38o26LvQ93KksFiUiZJnGtP5Le8TTaQ7RVboqrPdrjTZaQj",
  "key26": "53S4Fgbq1FpKZdmFwnw18SE9VQPiATzc4Nj8ug3Ex6oyze22AVCR7UokS2qhT4PKXtDe5DbPBPPrMbxyqaWKhV1r",
  "key27": "4kqb8AW1ruuGUN2K3FZKccrgqxiFCUyBff1JbCm84YV1hYUYGizNjxBowJfaXdu7ngiVg6v6L8NBgbqqJ685YQPW",
  "key28": "5qdLfz49W38GX8jn7Lpr2jWZAjXoJbrA8xxakGacEZenofhrWvJod1vQHDQXaAJdboy8CZVQziArcLAuseHFYNAq",
  "key29": "2CTca2TRK8SPEGq7coXiYZEg7xYKteuWnsf36y9Y1eBkmxWkt4M2oHBtVgZBN5sCFx4bFhGHLsMfHLh9gEBQL8VT",
  "key30": "5oCBupR74AfVFMzadP7qFrtLE5e8c21Q3vmMVW3v47qHxg8PJwoA3Rtoz4gv8ssZPQxTPXcGmxZ67qaThN1GmChz",
  "key31": "2VLpoDD8KPFbcAzDDTagw6Kh5ScuoNfgN2ptBH9wNq4aUimAmdNewmibVeDWaicrDXJPen2MBDm11RjyXwmprRZD",
  "key32": "3jMwLpwYwaiyqxmaS2fBxEZ9txwJMAugtChoMRTwECXPZo553tYENr8BqSK11PCVn7FpkRYUFEubhLPzUoTYr8GV",
  "key33": "AACBxqDPEVMqtUVKK4q4ZPugHHAV34P8y2A8ZNSKbggFZQUJWAf8p2PqfTDPzQoVEGjyGUjW6Hqo7f4AUvHoFk5",
  "key34": "3R2397R5JKYXf7cbqGg5hcnc4Ge9f3T3iV5Nn9ptg8gHsWqe7vXc91TtYhbKnkUqbUpDXkGBGyX81L9c3dyQjzz5",
  "key35": "yQY9iKHEdQZ4ZG784cVwB9LcVKf2atjmGuGLo5r83Kkc4NszTui9vEZNMS9oEyzwohvuDfopgbTA6Y7z3P9AEnu",
  "key36": "5MR9VBbGvUZ6xiJrmTANBBN82PpwSzTJPGQ5nE5c6yZwrMiQeGUCJ66HZq1qiF7j3gmc6YysGxVwiya9SDH7BDR2",
  "key37": "3Z92WvadUKpFV15VXSFAJoWDUazu9gR6dkhY1SZMTDaP3Sze3knDdJFnQTdNtbseoieT1CyjAPD2kxa3VoR1zT9o",
  "key38": "HzXQRQJBnH2HmggUCv9192GkjSDPWrC9papyufHDeSxv7cUshjrNL9DqP5sH6a17G9MAQWa7DNgvySQerJfUG4A",
  "key39": "4p4AiaV1Qh9vfYmvAmykKgdm7jPSbhY4b98SwDi2J8TiBar2F2dXhaiNTVmqhAoqtrxQo7w7NaEq8Mt2rgLp4TyC",
  "key40": "5bVmc74pdaRa7Z6dojoCg77dTmUHxH7Ufi6vZfJEFeFtBgZYVKR8NJikm7cBHZyLBMWYwnqjnMbLCWg7NnGPipwv",
  "key41": "4SQgx98B3FjU9VG5bUbnBb2LxeXJ5biDi6Muc9emxgx6Pr2EteMnkMa3crMyQTkJS42t5xfM8NPAXv2cUfeZGpdi",
  "key42": "2LDX6qZtWiEzCfZvAZg1iPyYk48LaacZe9gPL5zP2vh2LZu59eCtB6voCw2NtE1G4okqpULcefaXrQRpMRDo8jwj",
  "key43": "2znde2AWUM82s9J31dQDEqjAJXtyYb7MD7zKnFvFxFA7nJgPoENNzqiW94wxSWXQQkCexDNFMJsugzhN2vnneWnK",
  "key44": "2xTaFmKSUh93t8onSU9DjxRjcbdikXF6pywnus1rF6HaeP6j7iCwjQt46pVr8tS4Sn33XQiC3dNhgrHWGU6iX5vo",
  "key45": "4e6swP5ToE54Yzb9j6iEdjMmvyH6r34BFCgZc3vJGJ3PFXfW5GTccHJBjYwkFjWcG73aV7MmYRytFUePudaoWqBA",
  "key46": "VyCwyLwxG24EzGgC23PfGnYW9oWShKmkfZp8Th8eQU8nSQd9MjxxtP5gver7robSDqEwVsfnFfKakUZNMNg3xXo",
  "key47": "5N2QJgQ9m4DcEyZ4vJEKux1ryzHCP5BLPFTTjNdJyC4Fp8h3eGdSvpp4RDTMabnzRN6t7tVY5gkNPx4398LtKfZb",
  "key48": "3jqNmcE1tyt54JetMQWQpuutqmPYfD2AH9fJ12bDMchS2rCBsFRJuyM9YcAZvM2BRSGLpV43QZfurFsDjcKqKLqx",
  "key49": "2tN5KuzWsY2cVzazcYNPn1VwkmaAHYn7p1nLJXJQyc2kQasfULVuSkNaGNvGpXGZ9bZRtkFLBwp4jSA9tyrH9Ecp"
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
