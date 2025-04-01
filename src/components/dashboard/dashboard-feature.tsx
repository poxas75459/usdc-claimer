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
    "5iGY17Z8tqwY8KYPSJVZm2P17Mwm2LVakSFP1Q73ug4ZhZkn9XzrK1ZPiqTL8dC9vd8m6tcPZ1KFxsRapw3LetX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDizm6JkVEoY1mCLbawrGqLVEPwRJuGCSkuoE48xbyijeo6u4rqZ62Laww5RjD18E49fnFFKHLgAQ4cK5AAfqw4",
  "key1": "rz2ppXm5KUveAfbPCNo6z4VYdedu78pvqjA2YppFLnQoQaQuaQHBckHoK7EPJPi6mXo82UJPJJDbmnB7LjnKGk9",
  "key2": "SqzNNnsuWAu9yjDNpVKxgEm1aKYf9ftJJgfHBghEYvoW8R8WmUKsSPK7Q5JYZqy27TtE5gXvZ5cSzA4WPsJazGe",
  "key3": "5u4fM7XFyPQEJdnBpL3TU6CNP5KsrLgqBqDNso9M8bF6bMw6UXkzD4pDa8Zuxb2Hr1K32BECT6Vap79Qb4c3UVxj",
  "key4": "5owsPYdcAKZ5QwsCZ2DkhgjGMAF92e2Hqp9Y1CNJ3Qgp8j6ihXmyp173bE9fSzXsN2JZpweYEnrDtcw3CjmjxngE",
  "key5": "5fF4gMab9HseAMxUjG1ydhhcvZdA5BZnySuYkPxsrSP1rc8wWdpKuRuvBuE3gS2hpsoVvJPZGShvt5ZXsA8P1Rab",
  "key6": "29BsK2YjpNFJwY4BNKi6SMgsqk7ngZZDGukuPuaMqXSK3ggqyyxUw6tLxxFspikY7QAuSJcNuDEJvEPpezoTQQkw",
  "key7": "JWHqK6Mw31cQ3uDRWUb5x1eNgxzsHmbEtLTfUDaDwwnYe3T8Px8aySwmk5yf256jRcj7wmj6xZacJ4aTSQAjms3",
  "key8": "A9dLzknbNyeAnfBfVnFSpSnYkLreov6B9V17zeGm9pdDS7auxuZJmW5NeGzsAmkaCatcuaobTaa3wZxx2DKQvKL",
  "key9": "4ftCAtMgvXdd79Y2zJELqD6EsGrqTtHdDSa3qEUhJd7o7pbrGnD19nfJe1XQkLfTrtgcVHBsRQzLdSHD5CgKgiLE",
  "key10": "sK93MeihXjpozzqsbYAdBJw7c3h4g4BH13Uh8AtRfRfrPXgvpCgqXitLFpBxTU3g8zSiDNiuK7ZifaHiNkcmAqT",
  "key11": "4wvLyhsdkqUPRruwcWL7EQrWyZKFxw1h1pYxL5DMcVVoGF6xn1QgSQ3LsM8jzA1HGL2ouCeCUyKvcxRc4Z5JNLUG",
  "key12": "2q6CTAxtZ6pKwWtTwuV5M2JBriyn1obbCZ6iWAUQ2bT9C25ej8duB7nDqoWATiAqrptpRuytR6rrvUH39zwdBBZ5",
  "key13": "5aTDtTXUi1YMEdqASfSnHhqqq2J1GJmNiGeEcbpWfAgZsifrA3pxr5PPgrmPcHVCtft1b1rGXHWehskmJ13PCWgY",
  "key14": "4XpVZyQFpVNrxfnYvcXbdM4BUW8XQ1zWSJLLenco6HtY1qdkcyC3pz3ojX2Msc5CqzMvJY6j7KeJMZyfMxrLWWsa",
  "key15": "1ydn1B8TthAsyaURqnjnvW49bDuYp1YftAGBqym9XZw9f7tJ2dbXJf8mrijeP5c9WPaupsnJ3dFqoamcDW75Gnm",
  "key16": "5e2giHLF1ZfyiqmLMJvoDpoTVfJKB4SKN7SLC5vwA8fH3rmgJVy3pCaNA271vwZeKyxTz76SAX8FcFHXWF6hGqUL",
  "key17": "4XfbsKtyaEFeWFACLWN46F2UpfYxhgb4S7L67EXPGETTeoT2wrt5rWcj9XvNKmufxbBYpHaoaK8LXuzYPH4GQQqY",
  "key18": "5ehEDY4FKocGN68M3v1ZBUkdENmARBqq9TrtsePtwBwDhc7BSKrYaanUdA5Qf1L5fnsNoSfBGLaHH8upzfCiG8hL",
  "key19": "28qu3DdC1WxqRkcMoqyy9VG1un4WBwgbYgVWsWrhcissARJjWmWFok3VrnazmH2zaVpSgdjfPUGXZRdjV1nsEJRe",
  "key20": "2TRQNaLzNn3NU7W8VJC4d2eRWmi2zn8qVq5U5vDjTXsY9fvBZjjjb9hp32ixB3zgEhVDNyvvNyzk1YPKcZ8hPUGr",
  "key21": "57T8M8V5jKZJBAXLLpSeADamH4V59SGZedvijZ8YrvT8gKx25gcMVmxqTWoxe6mjxQ5C3E24f6rcN2BSg8ZEeY7i",
  "key22": "5qhwcnnW3sJ7PKpm1RKUQHSp2PGpMxkLR6wjCExYXXA9r3bLHUZEyFvYyABHmnHKdoS8GB18wwqqT1iXVLa4QnEq",
  "key23": "3b8TRnwbEYoSxhh4X8UNc1zFE8TL4f8RwsURDbjGFUU4mUHzNwMoNGuPFnHd39pZ5hX14rmQQjSJwox8z9kySb7S",
  "key24": "5trQp6LJZaw7h34BFfzgBFVD2Ydq3Kd6fhVnSVsShXWTYnH288Sg37WGWSEwzXNCgks19QKcdSjjqSDN2avm7C1L",
  "key25": "xjFUWiv8onpw2eWS41CNXo55TEkvZYBwt7GTk4CsbR2WgtLS3EfU6iyuBcy7REyxLxf3DyXAvgMck77GZuuQfjk",
  "key26": "34FJg18sMCgYcoj9ppPU2WCVTSvcb2WpEAW6rrW7z3ZbQwWKWyvfcYkhnDySFv5A4nskNw6h6MsvuAdEHMsTS1pc",
  "key27": "2kZ43WWvP5nGJyPSMGFCYDwd2n2rcQ8ACiBnLKN7zG9TVh7L8675L6r11P8RNAWr1rXtyBuKsb5B3N8aQ4RFCEcB",
  "key28": "4AiPXVJvz8fnQqgt6kHLVSB6seLb5smp9hBB1ivQLnaR1nLx9KbxJ7mEAL8525AMCRLtKJ77A9BEarsyqJUorxmL",
  "key29": "4pXPxFf35gxdtEBTE2wj2iph1XAHDShPuSfE2jm8uF7ZrnMKjXQGXDRqCxwEeap9J1mK8ibVYgddHCjFsh6Y4ahU",
  "key30": "4d661fL28kJWN52z1aYoZ7oz7u9PoH4tHNALob9CKg21tiRLSa4RhmudTZzaoBVTMz5Wya1v72JuxrPFNw8fZi2p",
  "key31": "4bjAAqAbQyT98uRcPmS24rxKk4FzKUN9kgonshjN6SfnJrzEJCHEtDQWHPhsVoUDnmMopT6L2FrCabFYGLtEbLS2",
  "key32": "5JtZ9VPHEMkHbDomk8uJjVzDF88sePfu6Esj7Rc5TXJpZ6xWiFQbaiqgKfW6ffWAjmQ8fGbYke3PKAUxMzbUqRnw",
  "key33": "61ZFYaanLqvw7BoUPaiANXTZosSFzxiXsb2jVrVnKAWvZMXF8Mb2gpHNrdqP5twYACUL64GHQjSDrHPyBqN4B6p1",
  "key34": "nYxuTc9fVMNuLCErwxHS6Ey2QSqmENRXuz2UL9hYQggruz7ENaTExPWBPCfeKpixREdwJABtkVFxK96TGgShwAK",
  "key35": "4ecRqfh5TGVjcmUW5j3KhQ3osDwv6Vpqd7i4cyrB4QyzrHJh3nctxJsunMV3yna7ijRC79xVifTeGwY8KQmG8J6L",
  "key36": "AVbbWr1r8ez7cNZUaf4BUea4bwf9UGZjrVKutDRqmnW26Dz5nKw1SxsgbWGr7deSDFFis9pXT7sgrPakJ6qbrA1",
  "key37": "4HR4wQQCdy6PtNUzuYAzLTffKBb5yTrCgPwNtKSBAudiDXSaHubaMTypinvPd3j9EwY5J7ExuYcs9obBug851Cg5",
  "key38": "4uErufpwwRPbDJv3TaHKCBzYTt5ePd8fgEuPDq5Bj1PQsQrTbQZEDhubhtksp3pEz81BAds3yfe4DYcqzTpXjMaR",
  "key39": "3PccdCBmVdG7QfiCZKo1QKSPQBki8TizhK5DjJYB45e65KVqiEgodyUdwLPfaU7P7QwHGe6mFkB4rKmH46jHqbzn",
  "key40": "2LzTsT3TqZV935GtQdHmMjGpVgFvTi1kwTsynK9zpNRADnbG9MPLzZgTb3h95arkq5yPkRt3Pq2DWHDb8pDntAQ2",
  "key41": "4iJ2zV1ot5DtVSq2uDuSLKmNhKiM4syx8NExyEZgvCPY1kizSdv7HsRbevpZfAxNzvQNLnj5xLLhBwf1eGQb6aSA",
  "key42": "3Ynt38MW7rpT5W54MS1UYooumpsQyBM5ZemKr1NoNMm5ir4du6YyTbGCLj3cUeKg5waVu91HajCvZ9PYDKMK5Xwt"
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
