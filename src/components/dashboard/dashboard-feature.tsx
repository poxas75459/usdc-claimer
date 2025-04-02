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
    "HbDZKDGrV1LXTrXBB8mgFmyEPRgMYDZTiYpoYX6CMMb4zbmpG3sabd6HdFikK2y23z5M5n4XuP2sCWtoe5sshVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFQNKCt1oJeARZQ81XHUTvUMNnGLeLXo5PwwFRGeeavSA8z1iCLfPbaDRGe9otjLxFHjwGDoFkBfGShDyFQGFds",
  "key1": "BViA6fiEFmG5m4B99p7n8xLtNDiAmwC5bPyuS2ahmUzVgcLuzFB9dcKk1duGJURJSeLBUqopexis7hJDuz23m6b",
  "key2": "38XkqkmwWxxTgCHTP7iho5VgcpXUk8LGzZ4TLBbkUQWbSCqLbZ2HtEsMYzjTxWdRSnDh7ThLhYkC1xTG537k3hXW",
  "key3": "2ioRwx3ohmvkNYCmRCysexdZLa95YSrrK3ZBJyM3mz3xJ7xt4iX7zMR9UrEhAGqSEsWCVDx3G947hpssZS8wkoCk",
  "key4": "5XRcySuHJ1dxb7uEJMwaACwGQF3JfYGmDooJ7AJvJ5ybXCTDicpWnvpfyKqAGXVK1wYXFPhRJgAnjuRhz86XgK6y",
  "key5": "3RCDfbZMj1r5k58VSirjEsps3iBidKr14JuiMuWmEShKZHTsccfbY7DCkgKSFwnpDDWtnhkwfvqq3DQ74WhJSqxE",
  "key6": "4otTtzZsUFnumbPPY2eu3N8mUuazmTcfSdW6Dd91JXYJTaK4rAVBbBwFB1gztQ9HiHCQmf2i9p7ZF7R7n46N5p2m",
  "key7": "93XPV7L1rrceqHJgohShduT2rmH9dYgVDoq1ZYe9oKvgzgDewAiWqWb5jkzSBhuSmen6jXKAXJ8qBg3yM1KPyY5",
  "key8": "5bnrL93nCLqeCHqJQjGysNzC984mwN9W4NB8Cn4dDtHteWVxU7qx9mZq1GUDD9sSenb47BT1NoJ36LpdgbQxcRtB",
  "key9": "kQBg3GA6y4jB3o1hwg5QaQstUGfRMpLG7u3zZ1X8nRRcEG8nhSt1bme9mvt3SpPfvzViFREwsf4XVGJ5ZEsFeaX",
  "key10": "2EfhWMmxdV14Psnde41wMwmkQjCTHQSABsGZ6yKwGABxCYMbYnp2DqDnmaCA5QAkn4aUNhfthzSjDV2mQ1gnvbvh",
  "key11": "58KtDAYwjYdDJMHGsVEdzp8xaxnLgKUfxmS6TXC23PrJhZG6gSb7rNCtKmqe23jJfARj7ZNMQDNiwQGdUdWuxQ22",
  "key12": "4ZgJKxsnxwrPpPCoJSSXdmZTFdWqDtaptm8LFMZ2GzdHDbqoLJBi26uCUaykoEkwqpyXayVHfiRqLkTYUcc53zDY",
  "key13": "3CsRHkS3DMY7zwvPRX8GJgseLqoPqt1zc43gNRMYLY2cjWmx1GUogC6ZzdjyXU5EkvQkQJLLLs8U91YR9QLeJQRd",
  "key14": "3pCw5CK8uLo88q66VGcEwRAUbyMcX84KEuAjGC7GFtCxjFCfMVd1TRA589zdbYetr4r4Pe6V1Q2Rt3eCJ6ypuhxZ",
  "key15": "61FgfCDDtxvKra2uk7ico6Kkt3vfEv8DGxxW5zr3W8YxPwbe6BabeFG3pyJGU7VUFTchrq7gTUne7To9bkL7mycy",
  "key16": "5EQtEoTcKrpJfPWtGrrFA4t95iRY3idjWqMPH7vf8muNdVHcbavUgYo3vxzp2AQdA4cQYY2MLFDSRtmqQFujkk2s",
  "key17": "48soMydkJazX8MPBGhjiEcxkDtGFydU7RZTWKomiDvjSHacNNeA71JBctsLuVtGcWQjG1ps7qq15zTyKotkS1uXe",
  "key18": "44uU18KUL6HRHcZZe2srcB9ZzGSNqdiSd8Bg6kMKLeMMyHRkJv4B5dmGeufBpCvNH5of63QvAaB9CgPd36WfuEHJ",
  "key19": "3VkpqHf9kRPnQ4WQBdSNPJPTG44J8TLW6PHHq7BHkAJ8SsT5Cq2xsePaWiuS52z3UryoUqEuCi7TqkqviJFj3FP9",
  "key20": "Rt2zjjcbyBX6JwxyBZV6hb15nt2JVhm8Y3h5VaESKfw7uPXZ25ieY8CxVNNuvdehnuYcDHf91P7R9NyhhhUd557",
  "key21": "XUoRaN8ZQmqQ1gpbLCwEVCZvGkQb9wgXZ9BQzsibbztUSejLjp7Gt5yhSCs6yrkE5aBT2ZaoVkLDSrXEqS6WSw7",
  "key22": "3tw47yEWhEQPnVxsrvGYm2gE9343az2SNJPFj5AwdZGcvY5nQU91rPQVNtUh8zEUhDsVN6Q7PoCuji4BWc7wyLg4",
  "key23": "3MnE4uq4pDf3M7xNgNAaAa7KkSVrMVd2yFanpqHvR2Wa6jGYpmMTPA92hg6DjoFcAU8BaSAZ5qrVKfaZEr3oHDMY",
  "key24": "4p7Hk9kTP7Ttde8qKj9r5pVEmVPTsmEty893SHuYN1XfTBNTbn2CykUCcXwZ3K6hLjqTo4HRqGfDD5Hc6g22RUXK",
  "key25": "3KXVm6VqxEmjtFMf6ghz83qmKXDrXk5W7K3BFTmfZ2ijfZPhyVSFGCXFGPTESYaCQqeCkSd7ngUokTLW1vypnRed",
  "key26": "4LJfadUnRm5R1wSvtgNKRtNUMBnmBFWULAjYbUijyxiWJgzuYskT5yKQ9mXVKsAyB5J3aSBfpmYXf42iUixrrhqo",
  "key27": "2HXeCh3TxQ2j1jEEHyE5ttkDp31xWBp5A3hX7D5uBmBTtMFpYWWsL4tLBicg5THKu3zvJZHcPtj26cb4Fbv3igP4",
  "key28": "4BabYfZmgWqzqoaa7pgQc9RN245QryZRUdS37jPq5v1TQFFK64HnZK1mcZ1CJYNRphjqf3X5ywPV5kEmDtnCb7x6",
  "key29": "4t6pfySpgmHmLpQFpd495hFZjGWsX6LGE3VyGormea3u8xvHEbSA3bp9aQKmtmvMAfvURQufrYqb8pjd9zPYh8sy",
  "key30": "3hNodniAUKSNaFovVAmEdM34q4y7pytbNuw8yNKEde7FchLEfYCSh1PSwA9SjPhmw6XYwTFB4ug1gAzsMDp8GGmg",
  "key31": "EDUEWoppCiZzd3cgZ6iH2oRNYwBiAupQEvxDBZUx7DTPRLjBe31UkRvWAuFdUKJahMebMrp7m8PnxJuwx5s1JYj",
  "key32": "4x7DkH9cwk1sf3RTe7GmqRzzeVH8ih7NyzM3hXsjheKLmGY5im5qXgkaMkBiGXmJwcH2QzJggn3ETxEJrc7K8T4v",
  "key33": "46UisauvsyDgQ6PiG5STUa7TaasSmULiTRFWST3tyAg7i8WWVnBt6YppWVbj1FG1SpSFSNmmhktP9SDxAJf2dJzw",
  "key34": "5b5SKU1MwsmAsZf2KqxbHpmsxvC1zn1uNS8i3cQPKc4oGiF1mo6prJBw8QonjMMVDLBNM13FXapU7fuJEFBo6Aun"
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
