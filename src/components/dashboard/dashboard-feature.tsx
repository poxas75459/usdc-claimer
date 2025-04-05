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
    "4H1tDriGpytzi7gP4T2YWZCxKstinmuNskh1eronsaD5SGjd3EucAiidRJvyLpzehN3ijkoQLMU174EcguFWTz42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJ591aFi3E6BLU7dkDKay853w67cyxbfVBf7cQt3HutdAMPcNy6vVeWrCT7QLYSmxxNVps8xD6e7anmSe7o6jug",
  "key1": "354LcVVokYeZ9B1MfUmFBFGgcaKwVHBPVxtANztJLcu85zRZpvZjJsyoRGS8peAzfaPiUZxdFY5vdEB9G9pT4P5y",
  "key2": "3aPs3UcushY6DkJPxkmA7P4MWD2DA8Mjzq54C2hrhxxYPjbVtiCtmEB6XbWyEmSznU9MqBydCiTxQPfRrUWxnJDb",
  "key3": "4zrLuNEY9MhA4BeqvSruYAx6JaFGZNegHWacRK4r87a6E9N2QjcVvVtK5Zi2hFzrfFBjNHGfj1bcs93esJSNCoZ1",
  "key4": "5BEiHji47ijePTsLg2ADYfQdpFn86pmZtZs4zvfnyXG7x6j69A82H6TTibtsv6nJc3kTc7WT1UWVHYRdRmUJ9oco",
  "key5": "3VPggPih18JVkBJorkk2riUxiiU1GBu5TDV4moML8GrgVXPanay9F4CdnfuXFKi1FFcsaMqTPnGxRjMzM2dRNBMy",
  "key6": "Jrq745a18Hy4rqzMbJ5vkhbZSnNnz8qiQhvAsCcdfGW5muNFkffPvzw4Gj2VV7dKkux8U4oeA7C4LBSSxGjrHiB",
  "key7": "RV2pj39qBZDuurVtPCeA9DJpVUetgFNi74dDqfLgxJ2ECJ8XVYxYeTnQi7e1n5aaUYfa4r6FPCnbZedQGvBswGH",
  "key8": "L4YAuX5Q61Yjz1VURZrd8hjMpVquEQfzgm27MojCFhwjxEqTPUgAJj3BExxXUSqLHeegSWi9E4MZssDpUoiotZq",
  "key9": "2f9hzP8V7dGhVpGrUhp3gY27MudgnrP4XARMhfjWutonw3p1q7R3t4UvCMAnCipPZwW9EJpsH1sNzRskqrXnq8bi",
  "key10": "49iVYBwD7XtSP6CX9UXCKkaimRbKnMvRuTXZoCNRTisqUnJEZ6F9NLGqNaxMQEme7FYU7QDxP43bxCSa6WVorCPo",
  "key11": "2RJu6aLoYoRgyso8eBfV7SCjL3FWj2rpLNw2DzWCWnHhv94NZ2D6xipnJ89C3H8MvioPMyfUULJVHGJYvU1u7zzT",
  "key12": "FNcggjzmfTS2QE5xnMshpnm8p8jpwh9VzkiputxNvtNcv1eWezGPZ7geUQmN5BCcuAGqcSt6Yq3XsmMbetFBz43",
  "key13": "3Nuq2Xj1qoLpMYHVhpEDtfQmP6frwArELSZBNzmNb3NvFmAXExQiEeRQaseuZ9uE4gevooAhq1WQQSofLFqQvcFa",
  "key14": "3V9QUf2qA74VFxhRiyMXiHCHbkr1sBW5ETkXJwWVirxqqf35L35ou2eaH1Z8DmNyTy1DDtUKqe3ko93BSRt5T7Zj",
  "key15": "5JVFD1qYkVym3DkM5qHr9qh8Ld3DoJMMW2wkxrax7rPySkGSMA9TSNTujJGEtKQvMkakiMzsswsFsZk7oFEEKYXk",
  "key16": "5RhWJz8y4AbsABMuR5hEAMDnKBGoj66xhuoAfZnw1P532WbhpS9JWE5gt2gLQwW5qx1qnTTf2MsM3TZsKq4W3VDA",
  "key17": "tWoBAjL2TN3QtdVh4LcNcNqu1odoPQ4qoXyJShzJNNjHgb77iS7rSjS7P63LiNotBcJFZmSUa2ce98qVg6TsZgb",
  "key18": "3QDRof3uHjABUxkWU2tqpwyQKw4Pb4xPvMLYktiRDMXTdAkW4iMX5hgTwto1EHfyQ4tsMsPJMFh4VLKPnRcK9SzS",
  "key19": "4scVGnd1rdpWuiJGQB54honTfmEk2rB31ZwN71ErhFVkD22v4cWbopmnsEiS6kexL8MfDJAozrP1Ts2MYzL3y4zo",
  "key20": "4fA7G7s8xDqoaUeEJRZ3gjKsG2toFeq6yvqUrSAq8fwHDa15XeMXE8rD2t14kuLwd9dqk9eiu7g7N12SzRnHstA9",
  "key21": "2ikR6Bhmanpx1AGscKZF7kvZ68ro8oRBzEKGu8mThHi2UtYKtPW6SncKafjTCbHC1oJWdBKSigdJF1JtciGznue7",
  "key22": "2YfEu2e5ZTz1H1pE3g8KWF9qJpvQx62hcvmPqjMHfM7TNGK5rYVYErNkX966pCKTeNL6fyHkWmCJ981m2UoukjX3",
  "key23": "2K3fZeBT3TCR8NGPa79GBM3wd5uyFMcjcwWKE1myQau8meNRxGC1WBHsHaoszN5K5pH2gire8cAxVFGQgNmjf3pr",
  "key24": "kUPdLzz3Xzx6WnzUfx2Aht1TNc36iTffpYtUqb6tdkVtCYbfapgY4GGs2mAJx1Fv2isFEMW9E6kYaekwpmgQ466",
  "key25": "2Kz5TmxSfaQtTMFLmdSUijJ7oQfhkSt5sqSAC1oRRZSmnm6x6qr5pavyEdCG5Ye1jzGPhQDBPdavzt2dkxwt9p5c",
  "key26": "FnSot26LnsRzYy2Cxza5pWbwxu63UVVFfnebEL3UAkFUtoghwKRXP6b6NFvHLUGq2M5XXF4TNLFqJmWPuZ3aQPj",
  "key27": "2GfEzxY5mWacvKTC5FmQfyAzGwqNEnsdX2dMNYxUjrozRt1PsgJwagKo3bfSnXGnwFKhSYhQEnjA2jtSYNfeU6L1",
  "key28": "tXSR278JFjprAvs6uRoRNiVgyzVxDdyUqtBhGczswTMiHet917wG8bk6QYGo8TNgCaye9bTsAVjP7zdSJuUmd6s",
  "key29": "SLnPdU4QJVqD4myYDm32x8mos3MfBCn23XXNkL2Tz8v8uPayhgEF6mLh1xdKbaAnLX1LWPEa7FBayeY9GFQaYvk",
  "key30": "5cstxMUti4rzHVYf5LcLMhnRJFNLB52mPdbKPci7e7AjJLSBzszT6eourYsTcLNcFBwCfc9pQA77Ye3QuZW6zu9X",
  "key31": "5DJd57VUCwLxw3idqfHZJPKWcgiZb51JD144CFvTiXCmWoGTY2EN7fGjgpjzMRkhQPc4TKRDWDqvaFiUARhZNwWQ",
  "key32": "2Z4VaRTKkDcMkYiHm7FWcCfbaaffn9vpDoADwPLr6BFESgznKtDvny6Z5Ys7UNRsRvWCYDmrmkofJWvRdJNGXFQA",
  "key33": "67Ek8UiNLRpfx56rcq7bsBw1zKQkYJay2QqH3U27wnEzAWRjNdcZhk21CZDNUeondLPsBTrXRMzuWknvweD52ru7",
  "key34": "3tC4CKXCNkQwy4xhyTPSaFN96NHTq83qX9twDErpNZkDvqcYQcS7EGE2ZW55veDk7gdsjwKxdKAQnswaiyqG14Sb",
  "key35": "674yjQsgsmKjjLFgjmm63Sxnb5iV1cPmLnjcsitELqmraaKDSVXgMfNjT9HZTy8Vq4LU9CsQjkkY3wF2Vzxr9akv",
  "key36": "9wUjkFsqynGNiZLjTd2FcwDUNnKquEviHdok43EWYRnnroNEyUUHy485zs3dRdJxh3sxiZJQgdLrmSxMqQNrUhc"
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
