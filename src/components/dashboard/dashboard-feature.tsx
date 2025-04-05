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
    "39wtWkcTcigfobvDqCfQ5QWX38dwiGaatsW1MnUGFDYMrie3m9iDmkBXSqjUkyAK7SVX1ohaeXz5BSgTZZdyZq7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wdMRq49yMrxbYJaRZnHeq9njjipgJ7Viq5y338LNcSxRTbmhb3MYDcfvJrjP9BKPNgZw3DnTwL1q9g6TaUHMehj",
  "key1": "3APyRTFDsdETwoNMvzpSek21pu2BFXRAUA65tideDjYyaJEew1xtpB288qAShJo6FUYpbkDVn1YMxue1LCSokupL",
  "key2": "2NLzdaHTLxhu1dhGa4ViB95eKHL1q2jjsDAEZBTitMFQ9BA3CboZ5TjEbBxTegiB3czDFB1PwsHuRzUy6QMQUBe5",
  "key3": "YUZJviPQKPJz5n92fHwx3tEuesoeZX2DWppaw2V27awTacW9LoKv7tfy7qFEF92jmmFBoPjmPHGPTpwriYksRmd",
  "key4": "4M3SGGwd8UvzrGXJwsCbUuvKyX6zFuzxjK9TJ1TScy7HEXK3JdcJboi63yTW6anTJHPk2mVKCb389Y6bGtU2BpVv",
  "key5": "5ykNk2MpmoPthLUPtq9qbf7UroYhNsc6CRAkUFj2rubbhxzZKCDU97qbwkdex6qgTHpbxbzjhRT4kvMc1tnSQEZb",
  "key6": "rAsYMoQwuGWNma5TdCAktFZGnmtxacFiyTWZnJTqYftqPNSgdpcnEz9tnCWvuxnkTdiz9pDcZWptWdE3Bt2SaKQ",
  "key7": "4Ana2TnRRhvwKgDZwcThaYM6LnhGmpa5z1yF5qhqR2nuSdeGkrDKuye4smmst91ukqRBJcM3GZwspVcGwVqrF5bw",
  "key8": "5jrUrGk1muwQknd9zyKACDtEXnqtinuBW1zom3iJjhzA8rmDBSxnEJs6NtuFiKNKa7U3Yjdp3K4MXVgpXmDkpqwm",
  "key9": "2DTx7oazPUtgvkNgH2Rb3Nf5hzvgGb57SG5hUzgyVzF6YuUvGMMuWCtsLDKLB1Zkm6s9bPGXtw1ofxunsnjBn7LR",
  "key10": "cSgtzrMgsBTBSoDasCnFgMHyqi2S6o1bggmf42oTPaL9ym116VxtRBRNP9CJa3QYDGVJbhgGKVbx5ZowaHhzYtt",
  "key11": "2boiyvTTGUWuTTyCgFkCXQizxsQchnPCfczwr4jdVWdBVLS1hL4Fs2syujKNnviAr1Jk1YXdzRMwHrHiCMmMTGgu",
  "key12": "29SeePeE2NgDmDE8iF1GKYMhYeesdqRpF6HkAaHXxrQddxo6YMsdWmQ9JPqkoPBbTjej5jjyt281ncN3RybZs9uB",
  "key13": "4L3LpN7SnfvXYwL5pMBbgtoCBeJKV2kmBWZ1WGzbUnwP5wg3vQ779EeyT6oBcrqpQKkMMWdySCukeQ5FJZyG65LH",
  "key14": "J9Uu1J9sZHPaCQ6J811hwDeGyDz7chd6namqbBL1QSchA5wZwMs9BdBPwyHeUbByMX28WCSJUPGJkdv1N8pWPnR",
  "key15": "AQmQYJTJx9jzsJsf2hdUfupbbggppcXwi9jgfBfpti4jxEYKgYrdmoF5k7R1V1JG1VU7yg99PXPLCQzyNwphN1A",
  "key16": "2d6arVkE35UxczJL3LgF5izxUKr9gS3YkAqDjEkbyYMGbUtLka2jZaynAQa768g1mMuWJweWpH4UenQr9ucKdTJJ",
  "key17": "3q4XLvraDFXiW84oM2hgXBMzXL6fiv66NaX11ezVoeCAKDwvDrqQRDUx8irAFr4VtBUxcsc5KvGpmXDPtrwN9Uex",
  "key18": "3TENXt8aAJ1wTFwLJeDHEFunzLFqBeqy8GJJvjDVtbUurRkaPuAHrFp9F3d7QB7C4kxATKFJ5co77fXkRS8eZNRH",
  "key19": "4GeCdSE9MfsXf8nhoHXpkai5zpu3GAPFpEQhVcG8yWAQWju3YrudjWtnuS8Kb5K5visLB6Gz2PYCDE9n1mokW1mG",
  "key20": "4c4QyVsLsoDYpTk6PHbLqTg8AkDPX2EVyA9hepumqJBGQDZE2if1yvjssFnsxCGzRw1xTCqJ3eXWZfwdMifMG72X",
  "key21": "2JE4dWjxV3SbgZZ5B6jnCFyeUrBCWJ4idothMsoMKLFAFxUStWqNrpMLGtiQ8H7K4zn6FCn8BvjajLtrR9Rn5zL",
  "key22": "3VWv3NPbF66Pgxzei5hteYwWtfQAPQdmRDFduDcJUbUg991Lt6F3rxBYdAFZwoS59UoNrdcB68MTCNpsYZgDwAJ5",
  "key23": "2YLuTWb2WZosKkQgzMmyg9emyqZrchGrv87XM8oPSTmJBL4eEXECY2dtUjGcj4bns5M5QU8v2H7oKUCw1BpSJ6q7",
  "key24": "48ZvWAP62d4hp9otRUsEYPcH58ArZmJgnhczoLJXCu996wFoCX28kkSrX22Hg8ZtDLXuTdAsLMgUQHJXNvP6tWVh",
  "key25": "3K4zNXTowUwtU397A9C1ZU4TU3CrL5uZgjzbCugDD9D87qaVbLQFQditEpE8SNLAkPSGcESjpBSfUF76WNqqF92Z",
  "key26": "nhXQMXM8gXZR6v9Q9faagTWutKuwQzn4jUkBWCVc2yBdShnC7JerLpGLLsGh4XvWZC2tEwquJSnEEimzq3v7rtZ",
  "key27": "49KaZsaxbkfNdCwrGJit8iSfxD4D3i3dTbVegmZMg9KyXFcuwr2oAaZkRUohzwmB93mjqjARaqcAHCEPfspxq1RU",
  "key28": "4hSqP1tKVVRpW4nJYx4P82Vkf6ABXYbTsPCvxA3NCNSxWAGjFBSK9meQBmPB6NSqg97UxmiwYjpfT39k6Jr2vmvC",
  "key29": "5WDonoq2ZQT36nspKFJ8T3m3kKsimYQGvJCWeFmhebvpscaWgpsH5jNeYDme3QMkHtE65pYaognLkqWqvx53BNyn",
  "key30": "4X28je1LQw1u1YG1B7eVALmoLqyqTqiSDgkjUG3vhTF785hoJ4cmL9fYVk2KMDH15jJjPvVkG8KYENBsZnSivdJ7",
  "key31": "3v3kKLAEsCWJ6WxXSc4djnWubQ7pwSJ9kx7e27SbD8X4MQjsLx5qVy3FpoypUA1ajgmzFZQWYu5uKYEdWF4TfWNA",
  "key32": "2KrZsirL2URsd9FtXHzN8mEpKbmt4CPwbGfsbRmvexbqcUqoKK22xFFD3NQnCwdEktpfJzcETmkjvmuWyb523kuC",
  "key33": "GB3ttxZcj4uRLY1xC28oec5QGv2hJugVgvdBtcx3iPLT6KkXjxBXPeSZQ8Q82WKCB2zYws793i83SUDoQmccJLp"
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
