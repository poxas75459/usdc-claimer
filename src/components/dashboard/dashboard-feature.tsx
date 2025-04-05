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
    "B4QMRtfmq2Kv8h9FPr9syFfZKVr8wXKNBCrrKcZ8yRiZvmXHngaVWp81oLD5itVU8ziTBZZsq8DgucbKQFCA8f1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zC2uER3C3fYyXWiqY72VSH7gLnrynRFFf4h45fWjYkuJYjwE9c5F4YVJJxGkcRj7bdLHy3De7dbpKGwvfgh6TH",
  "key1": "5vWavWnsGKED2NYujdrmczhMqpqjzBQydpVxXBo3NDoT2HRWwky3eYjjZxEiFhcVcF4Xa3pWTYcxDV5jaGRn3okx",
  "key2": "5Ai7dR7b67W1hp9mZZi51WwhkknYR2redqrJwCNBkc1e1K9SnfMgtsikewP1R8NyrHBaBfkNvUhtuGeXrS1rrhzo",
  "key3": "45z9V5Dcxf1wx5m9ywhKKqYdp5oMWUxpzCtd5f54HVANedTo5jwvy3PmTjf6zrP69gzRQcay9Q3WXu2GL1G1ENG7",
  "key4": "5rHHzbgSw1aw5sgVXzRYxPw9TSBuk95mXheCWS6uUQwRwQB5m7FsgLei1T3zm5Y1hD9V5ftJw9vPmEi4CMqT8WBR",
  "key5": "4dymusMZhCfMQmdEuiMeB1rF5A73kdXCAPNifqFyWg7wM5e1Uhx3gc9AiegZdaUaZZyEa16amWsNpwneGVsWTNHu",
  "key6": "17F981ogssbdNbWJtwyfzxmk9As6bCx95v7wGerJ1NzCpkevqhK3cjhhydv3iduy1YsHepAnxT6DGWaoqatXJLK",
  "key7": "4y2L5yPRgUjLH7vaBNx1GUJrX3BxEciuG3ibcL6iiTG7fMPtL2k3H4TqSRBLZfXges1QuDY51yCM2A9bBMZ59KYZ",
  "key8": "5Rv6T2CWEtgqF3ASNiaoCoJGZJyA3ayhbYoesjmfXtfvrXaHNrBH9Z4mH9YtTF4XuZbqLJbz2QxvNSQ3LAGP5FEJ",
  "key9": "x5JxazUeiBzoUdhQFfSaKebUcYzQCnWvRcfZ3fVXaK6TbPun4BxPJbjaUie682f9L5isvPrt88u3rRt3JPBKVZS",
  "key10": "5jDRCQcQdRJasAoAL7MjX294PVyfWWy5m5v1BR7Vs6kLscuY6tUShBWcgKMYSXbzu2VufUD9N4DAdbNPzoNft9kW",
  "key11": "5du2veUu591MDcpFwPJ2pTwo5rDkBDaqQJ5atRUCtQVpP8s19ZS2L42c9q5Rw7QGoTmrKAu6Lj2cSLt6oUZnuVQr",
  "key12": "Suwkphu2A2UMt3kn6TCNWnMkLz3f28n6CRFbS6Dbhz6NWQRJJyYecJzTq7ucLFt72WBJuCJSU4iEFW9odyS29xk",
  "key13": "46xuF5zqgWvo5eQHLssLpP3FnKrcmRPvMTjqPKERTuLsBQLCFZUrvdQ6tinxb4aGKAkYEKno2nE2Wtt8yHUd9dyK",
  "key14": "2CUk4o5uw2DMCnJNDxrKPnYmjvqhCYiRDnDcu13KM5bASs1af86JbRns8CyeabsdXcTXUn1irjyY9JxtEujS6RuZ",
  "key15": "5Piy9P5J1tTg2Gx122EMJkTQp7zzPGFcExGok1TjrfubvQAHQRhnkCHhyvhPiVpddtNWNCvbC91dyQ8fRELHEnfP",
  "key16": "odzhH6schA9cWPk8DuhA87ACCimacoeNCZnisLm9dxzp7dQhmaTupDD5YWX9Pv4jGJedAEKs7zc8Y1qBisdveMR",
  "key17": "3AWXBL9QXqNRurswZ7upNC4UaCEZmuTVH9rYPmjbwjBvdLms58jHkg9TJ6TKq48UZp1YnntyePdTJMugpTyka4ug",
  "key18": "3r4dKJQXBFTzN6gbTVPfxLPEtp6jL7ijckqXobFaDMW6WAorEo6T7LhxRnWoeopsyXBvYfvTAc24UAhE9WTNKRSo",
  "key19": "3ernoiehaPmBjKrDhwgD7Npj8WriAfWHzv5SSGyj8TTdpdHTGF9tFroNVGaXRPov9ifMs4dJsvYiZTmtyKEPqcx3",
  "key20": "3MdUNduRuSZ5nPyRtvoS9H8NfWhUfQrwV3usKbSwrPY8PAUrmkqjNTCQxZU8mn5d4HKADyHZG23fYB5jxHz3tUuc",
  "key21": "255oc32duZnpe5ngRLHKCs4uFJzuJehUoVvH6pb91codT8CPtkNbuNVPcpNvtubEfXLxVcT5jamKRL2qVbi4tuaF",
  "key22": "4RrLZinEkLoW4nkZRek8jJhwnjUUxtsdrZS3RziCZQfYrVcwr7QmSiJiBKVYYG3i2XUTh272gmPx23QfQd38ZW4E",
  "key23": "QX7ozjZ4hzbELhzPBei1YPP9Z2mxS2yRh8BciE9FA4uPD1k2bXEuoPDVFjGu7JeEpvzSwvFcDCzFW5aWXEwWx55",
  "key24": "3SGsaNEwiHSqvtDw5SWCxbtAFtz9w2LtmEnhNmKRAcekqcFGtBpQnxHF6Kr9ts3y2d9DNpiamfxdY9mWrrvRnJGu",
  "key25": "3V5PVap34AqZ1Civbx6LjRB52N3ZmAWUSbs99XDFja2XdJAM7ZBXKoZVQUgb8SWD6tzkmbGsA5TTc9pkTmwU4tz6",
  "key26": "2W4MFHQRJirDn1FnxFetqpcjRQSzswhrwKhibYyGxt1ft4YFU7Fy9vMwhQ3NWQL5BbSvV4jMzkSN8oM6n8me6Anr",
  "key27": "5faEBw39D7apwY69gpRNyap1T5FqpAwgzKoVJch4i5FbcHW8VG579dd5bRq54LPhadGXYaQTFb2rUjiDmooLDZ9Q",
  "key28": "4LeTq4Xp1RKreHbzSgeHZUpqEGr3VDdjXoWE8QrUto7JWKBDgXhTgguR2FmGLhvSXta3HH7G2VuxCSRVbdySmHyg",
  "key29": "3ULk83uu8D9xbHHED4SqxUfz26gWYcm2Dxsg8DCNRUzcToaGUz5vVDNU7eJPhMZCsPR9UhRQuT97p2Lz37dQG5H6",
  "key30": "f18kK56Q62prFiBv7U5fS3VPVEdHx39TxbYdekJcrQiBK7HVzqm28EAns3o5bS1YmLfLJjnkDXmkQfQzLA4QR1S",
  "key31": "2YDYZbkZvUnYXKD8nww4vWYxH5L236AvbrSrLFAUCuA8sFALdbeo2CQzhzk2s8KTXwz5dZLho8PknMQR9Sox6BiU",
  "key32": "MConNSNi6fxgPpp2EKvcaVQsTRBP2go7vXSaZbssBqwaSVzKeRZZ1Vh3983Kyd4u6bwFAWtP8MUjVs6pcCRnmek",
  "key33": "3RWF38XWMxEXcUNx9H8RkE7tUuV4Vz8NKqNED3MzDEdoC4wfdchzV1nU6YYC5gxawvjiKh1UoPjLnYfw88QascFU",
  "key34": "61xHdcnc133oVUhMFNquAN5meGLGj5oNKKC3AugFUw3e8Wd1BfYsqxGFtae8VaXSiuQwBjvpqhupFRNbehNGhNbF",
  "key35": "2oUnsQQKsvSd42x5Js5eZsRnT9G1Gpf7JUrZiZQEefBxTzDhXzJ3Hx9aQTurw3qx275hrFtVr83D9VtKNRwLkg2S",
  "key36": "4w8hKDc79Xa1z5GLuWBd5PLu3AT4TaiXrVs2r4h597p7Scn8mTNfC95v6c1ft5iGkRoohZZnAfjfxfrLSpDiui9Y",
  "key37": "397cYS2hWHbDHk8vqCVXP1xfsDVYuca5d6dtmZWLZNPYCXUs7D6yQL5iEzdLDJoeHwKQVAUzUBKGpUboVA26YBH8",
  "key38": "4iEvXUDidqQVfSfFNN5HL6mBYSW7sdrmHWHvrUXbH2t2H8bB1f2Sr9kkC87GBX2NxnZ4Me3FLxfdfgHU559bpnXh",
  "key39": "42KXmLaB27nNSvXJLEFqXWgrLwhHk52ycJXg73G1cCTfDp4EuXTqd8sxyj4du68daKRK11pWmb8U9ybAN5oKEumu",
  "key40": "41XCeEYrrF8T7u6JXydaC7s4EyN4VQc3SnbpXtAmuLQFkkt62NNAF6ABfbCbg4xGyVHzftdjiSz7EhKASijJyJAp",
  "key41": "2LnsbN5zgWsWoarJYfxwsTabrZxHjF8uWHeW1rBj2whZFtfFCevmkrtMcHdVX1TirG3S9sw3kR4q542vM2qc6RYh",
  "key42": "2QgX5dq2j8WgSYheJjhqV5Ark7KUoubpzQvrTHAR9C2Du8P6x5sR6YZdDScycnZ4AFnqouCweYh8QHbDzA2bZGwu",
  "key43": "2LFczLmySNsBPAVWmVLxpjGAbVZNRFUXpB2Axm9MnmdzjLGWcFMZURNvoWTJ5UTrv6aYSJ2uMbVJgcUgv7CGDz7F",
  "key44": "3uYPC4tbBVkKQXnsn3jXhJWHvmTNqeKosHm5BzN77qVJWwujmC7fiznzWCkR5Aq6nDqgk6Rn9aKzb6cBNGZUGhcz",
  "key45": "2oHhBQjoRKsjgcEFKykVPhg5i1v7der8ffcHixGekarzv2HzaFvnXkguZ6NKKD2FFzeBLDHoWqjFGJU2aWBdmsCu",
  "key46": "67TGjrBTyndifNSVFtxwAFUmfBk9WiA363JsrczoKgsjSrKw4RbLeZNBsSUSKqjbxksSy34V8peVox8ZfmtpuX7R",
  "key47": "3cfDEoQrjb1RS3CkhLhRrBEFdpYqhG8qUsKE8Hww5FsUJP7ozCr8qhkUJtbLHcfLTcJcoxhAPFkgqN7Fr5XCbGst",
  "key48": "2cSduD68eULXhEz95TNpsqAQgjtkYjLa3bAKzfSDvq9N3KKcMqGqojZ8W95r3xcYtbutDkR5UrmR7Z9EFw2PKASB"
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
