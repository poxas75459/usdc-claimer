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
    "RSvrkEbTkZbkCczxtFphscosgydN5Sq4jzbiP7BnHbzg911F2j54ovChbXnnvbo5aGwWD9JjyPKkc7gGZ6kA5ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6pxojsx5t4QUyW8N87dU2e7ZKqHwftRLJ2d5gxdyKfejvbwPp1y99LQSVXSSSTqAysLYsYYVNfUowYeDFYb8bX",
  "key1": "29GQBFpS8ENT9XLh4udsuDWyjXXUcgnScqE4RNAnfd7mHsxQnrhznU4CehMHnorDd2t7qnVkfzrjfomh2146BCK1",
  "key2": "2MF25RRMZqmaU94iy1Fr6K7yNZwhzDwxedW2y1jddjiFhrPY5Ca4byUedx4qtTWVaRvCG3vEXJSYBVKb8M68abGs",
  "key3": "5fBBQhkE8SsyAZwQjGzgoVZuq36Vj6Q7wwqt3TSYdYYCRxPu6Ai42iU3oP8FsCBy6R19VoiFiCLJ1Mq2kQmE2VKh",
  "key4": "3P6XTqnhsHaPeSqmgA1Yzgzz6b421gsYkhrrWgqqoJgwya9qL5UnWPo2sfUX5JgW65AnHnHcAKMmEgNG9wKg7hS1",
  "key5": "2tQUwWyj4rjpUyPQVEQjdA9tpDSrDQfAtx2L5VCjmGPxQtRHpxqmy7hjgK4teRrPBQm7waC8MvvRSz2PhystnhEj",
  "key6": "5aUYogHWgNFD6TnKQXutfLgkjfpyUDuWiqni43czRFGovtSbQ7mwjXNxdhxc7bALaUto3zeErWoQmBDh596BKdMu",
  "key7": "3g47nhxAGT1zcc6pQdThXpaP5TMzzYSgQzkZ1gddgQy44UmWqSe8a2YWpWa6LDhctefYkj8cZFoTTwyw6bZZ4M5z",
  "key8": "C53RZE1KverEM34f1PHBYP1Ri5zx8nztbtVSwu8wkRG7neT2QdrNMnW4YggSimc54UUtodrbdqXL9yG8XZgG1hH",
  "key9": "654PJExV87yah4LvQKuXHRZ3vAS9XFi1KS4iHdQfh2ibpEZCL6H1f3ZoMJUYipGDhjgayuXA3k1iGqiYmYfVgDgN",
  "key10": "4EvixRRTq6iFmAN3j7SzAxnQpWKGuTcFmMxu9afKBHq2WDixVLPSrMUE2igN27hSkjbm9TsKwroa8aJn1j8fjP6q",
  "key11": "53VyC891D9EZwcZCnZXVgZjhb1em65rn1hgN9giSvhBxrdYUxU4kyTNsrvTXnsARK6BiDE8N4nrEXUi85urjFzPz",
  "key12": "XWXowjo1j4ViGoGiuyLpndyS92j535uUooULCRj6qoKvP23st1tvfswwA8G1hLi5pQxX8mANVsKnqBJWqeEumQi",
  "key13": "3Cbc8qbDuwk7vggVyQxJmsssgokibKGvYKTPjoYpBToEmUtymGgU4cfYhRmebNgfLszFEjBPprQLHBEVpdqupPHR",
  "key14": "2nW8H7ZPFcYPw3v3hrYDshJ69cgwkJu2dGTtVoSYXGXeCB8mnc29PRgxNeSuri3V41ViykzoFnfuKFHw77jXuQRS",
  "key15": "39kPDMTDAqMmVqmBAsb1u482G5QX4jdAYhYJ11MwCkpWjZ6zENm5RQmiMctBWcPngSYHTRz9Y1Qg6PkFHWDVHJ3x",
  "key16": "Tn5mffj1aSXH6D6UDxoPKeyFo5hBEXM6D9pywQvZw5MfFEBNW918hvVW6j5FiGXA1wy6ZcjGcXVhWbFM66VBXTh",
  "key17": "2Hrm4tpAJjiwfU9xP48LhBrwsFRiUHF1ZnhpuZEHTfzfv4EJka92aQVLsJK1QJ7ngqeuNWgBoGXoQJ12dCXhguW7",
  "key18": "2ZMFeSjmr99n5VAnEFsy1L4RKM9HUr3tuv6hCbcXVsqegyQEVSna1WoActTB4VJVyWYWGq7Z8gYkEK39AR6ZGURq",
  "key19": "47CUtGDq7F2r1rk3yhyoAAciDVjw8c6FNA15o6ioKZ3ScnxWpJfrBLARdDKM3L8CpXoFbeiQNEnk6LQtuKTAqbn7",
  "key20": "4dzSjdzGXQbiEVdMLjUMRMvVwpcidrKmX6kSrHbxmVMEN4tbKoP4s3ieTnYWx4fewH9s7u6S8MJWEW739eqPjw6Z",
  "key21": "2bz4bvCgzZGAVR9Fuqs8fyyAqzX4PPjfR7aPkwABCXMNhLVesW53zxTd5ty6MUAjZyqELeXtNrU4Tm6NpA4kceRG",
  "key22": "4AdhzDh7rhiYEkht1NyGkynzdZBT4siuAqC6XT3GLgecoJevM9VbYiPJMKZNTyZb7M1QVCy39PuggxLqteqtZaCN",
  "key23": "27cuMMFMAU7dfE3FUNbRQbgm1ErveSCydMJe1WJxFZhdRpy5a9GFjYqQoxAFkf8Zd3u9kZ5NQRojBs9Z749KHXoJ",
  "key24": "4ntHMN8K3QX8MREzbc9BN4bnwNR1LQusDSnGyFH4fMrwmPxmxQX78zwPKpGMMDyLTyMnA3RC6Ach9ZzpXejqSpMT",
  "key25": "5kkYJbttVdAr593RL1Uq5aQ4Vat41LJRteS5racUiypqRg7WNMF8xV9iUU327vMUG16Lubu6Ep6eRFRgBqPHBV7R",
  "key26": "22W5GaZ6s7CFjgXfk5QSQoJ4ZABx2eaCo6ajDncSQdA57LzkPKys3FHZRvRqXnMjWE5MnyzbkMGP3xSkgjCWUwQN",
  "key27": "E3xkYQCgzpxpuMboB8nnoGSHpRp45yLG68QfEUKHHCBZZ4Zu16QnXZ3ghcMtTAvcvb4KgCjdB7RgwxeqhUqhGzA",
  "key28": "5d4ScR4W2nncLuswyvXYroeD37yARBrNbn8Zg8HgVnFjcjarXzaGR9c56couYRphUD8FsjpgCFanepnYKW5ocwz6",
  "key29": "32a9oy3PMniqw7c5xyTLGiwfP5DDG1oTA3XPx8XMQGSHo6gR8jPe5TmVC7qgZMbRhWVRRuFA9AF7Q2GoyCrSUKAQ",
  "key30": "TMvKiwfY3gEGQFjS3ETiAMPFV6hrexJDi5LzxiWnLKRqRev9SQPcbWTW3B4AwcDJd7GzLqeqxtp9DhJCo9q9cAU",
  "key31": "3eefE3hFYmRYsbtQu6qmthpVoeLDEUTJD67ca8efGvQoyHmqQQ1WXb3MZNyaWy5UYnBYj8GZEzegdU3WStg93dKv",
  "key32": "4JH2RnfGL3EBam6qSPWTCSKqGYVSo4NhdFuK15XxuoKzmmkXXmVHouRTjPWVosVronuJRZTFctTnxKA5VrLmZt7o",
  "key33": "5qUBFZmkwn2i7S7w1zhrWNTFUGFon7AmFYmrwVbjCSP1gfCMmEzY3Jkm5H1yBaheeQLAaySVBZwDyTVN8KVoEEM7",
  "key34": "3KGYHN4EXoXhYgnXdLTLJWVqqeJiVge8VKqjTZpQQ7WNSHHyE8BrHiKS55nEmoKcCmX5wAipEfBBFWd3Edijvf3c",
  "key35": "3Wps78rHNCB4E6tkPLLdTB8oupUGNqXpjAE2foTrzn5b1xeu3Pz2ak3aJkLHgEwiNtqvtMYTNMDQzKnhmLpmLYSG",
  "key36": "4NrTgCmM3Y8wXuLnyfWj5iQL3GPEFzbsFUNGt4psysXovRuam7s7zwQg3M1bK8NBEb2aBcVRT4BAatDpScnRDPQq",
  "key37": "27TcvKErxmbwuznAAVhRj7CbUEv2thT9UQKnctZia22yRHyR3BeSSZzNzv2R9r73s48aYWyb25QL1rsxVw9PhzgH",
  "key38": "5MFHZK1TedeG5v7nkRL5SFRG5gAEZKG232tQtX6kNRwxxuwMuFBzMTby1QVAEXLpZM2SpFFvwdWvHzGnKSBHfSXw",
  "key39": "5D3xKpo2yuFZF9BdTAdm4jx1jcSELsDgTF9kw9HHeGyYZkuYrBZtSprW2a3NUbYb6TbMtTqMw8Tz5DNT7A99EJKH",
  "key40": "5JcgSTVDN6G4NwSmvTiDAeLhuUhVPENUGPdUiqoL1HeK4AQfK3AK5t611aXyTemasjbw1TWvdACN1dbzhBRUoEAY",
  "key41": "3goStrBnpXZ93JABCvcVDmVnLLiqtiUfzVvkuk6pVqTT3i4UzmUh4mTi1QawcBguaUc4d7ig4FZA5cSvfUqUVAHP",
  "key42": "4jiWbnCdXrswKu2cSpQTwH48QFbotw23jLeUEiuqUzsLgpFPopM52dRoq8WBtztDtdTy7p6b8sgBAsvHV6iPffWj",
  "key43": "2oQdpkM83xMLX5br7C9pbRrnHTFYJDQpf24xxp2FX8TMMeBLu6JRp2BPoHdS9CCMBx2MbseQMPByicu2iMALCTZV",
  "key44": "3THDNHPut3xHRTfp1H6TYbmB6ncz3sd5dVqtUsNvS7vYyFrsdCJhiRoqeQR3GwnEvh46SB9ownsNQ3DiUaEM6CyZ",
  "key45": "7zvwnJZFFh2HMJL63NkpeHj7ACHes2zy4QwCoQcphNb9g7vLD6tukhokZaFT4fkyu1YFHu8GVsgMcwK8pwmbi5T",
  "key46": "54PTydij8zBN2CkejegL4jkYesVjHCLGCk6g4kTRPbuWZh8ZKtV3HQhjr6Tifysu8kEaTg6Sbwwn8ACzTgLPzFgG"
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
