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
    "2uHNZQmbLRs8jY1Afsrjdtfbn5aaaAaC3YYh1hEYp2PLjnZtNPhkNp4dP67K4BxMvLaAXX39Akf2uwZhGoqmCWYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwYkNxamcZgoo6q96jwXxnmNyH1GRACFA2Y75RSXZvZjmQkiNSFH8tY6DJeLrnDit3PUpYByEh2yvW8AkvjYJCr",
  "key1": "3ytJyGeiBb661G3h3wmCZtb8FDz63axvG7viS31sEyyW9ixEgivah8eWeE5eG6VNoCNGvemcJ1ULZmQ4s1b7iQqM",
  "key2": "SWC7temYvwEidgLNqbNDoTy3ir9bmuUMrv9U24ymWgKtwZbTCuzH3BXJSVxTNGKjErQSB1o8QhjGHhUti88oQuP",
  "key3": "5udeQWfPHhKaLTevQ7RHqsa7Mf2pTYyLBsgrPpib839opg6itTNQaxdvUWNNpbSLLum1S2hfcg4zQnZsSwtcCr78",
  "key4": "2MAFkd49DqjbuGAJ12hKg44e8HrEFjRUBHJ5rmqdnrsDkgVPT2LsUq4H8aTCw8vinbtViRJes4T7yqshALh7KVk1",
  "key5": "2yJZyy1gYGvwFYLrAyCswZjVszap7pBGofq6qN4aQs52T3ZFm4fr2xr2SnyaficT1LuDejDzNrssxxjto2gAxNnx",
  "key6": "66SNUcwCMRXqGEuASnhBYMVzBs1ZSpZZda39Viv2bSqP9nU5YYU8cAQxGuJnYADjTBdEDkxTtN7UtgJYFiTmAtCZ",
  "key7": "KzhfeqbYknwQfvGZev7KCNG36fR9qQcQWTPAuferemZRsSTr5CQC7qoYDNhfdjQsekFamyTjsL77iUpwwqmKUgn",
  "key8": "5ieJPaz4ny9jcSMupKmJ3Rwp6HhrDcYub3XAmAg6Pps6FNzBWHn13GzgxjVdnc97L8PRpZwy8c8nEeHhTrZn26WX",
  "key9": "4PBPG1eD1NUHJtSu86hK9SfZs1eG4CnBLJR8P3SB3A2LZF9DZbuvfa94gLbknf3d2XHr4BSpYgxxfNUuMeuWQRur",
  "key10": "2xXktTYnZDTWViWyQMdTMX6Rq46qqZKcgh2R5EaqaQTCiTUpvkTnhEJFzAjdHtSnrDjxUWPAGYCJBxFg9SsS7RLo",
  "key11": "4g3oDYhKxLG5aiE1p7gg6wKEkJPsgaMkrGwJKxjS3kV27XtFya1YntwCN2qriSfDXzFHR8rAYzRaGLB4JTjWEs42",
  "key12": "2NDBiQK3xmre5tNBoadFPGz8bquhNwFFieJp7hBNTGzhkJeiw5nGcSyk5GBRXKS5j8MmZakXDp6mLwaNXvr3otk6",
  "key13": "3DZwEe1MLJXy72zxURPJL7FsLC5ov6zkgzRydWMGwry2yYMGw6caqRKHbyYf6qBS5D8Ryqe4M95XC8Y2TmcCStmb",
  "key14": "26QHv9RF5suNxiBxz9NyKSLu3HAf3DzA1or3eJD7sFBZXsVF8f68BXCVWbPL5hq8E9datTp6w2ReqUcivkrXdZCj",
  "key15": "66JbHbHBppF8y8uu1zqimMVtBVBz1JEa7hwXhkNnLUtRca7LjnkfYnmb1T1obdnyQL2D3mdCKN3uDL5Gp7ZkTW54",
  "key16": "5gCL9a3sRRn9p5K6YcWF9S6BdzekJv5m51nr1jq1mwNZBoF8aveususdVkBeBz45tJn2zKrAcj6RkJzkZvPw7kuV",
  "key17": "25CjVo5YkGgFKbgvkiAxBHCoM2kpNLWo8GLtvkHbLDjsfCEfrU7urWkVEwAomppy5aZN9SHKXKo46HA4GTbi9hR6",
  "key18": "ruJmLNHo8tLkw8eA3vFkom5vKwaSVom6T2yCpJxQRjTwUvxiGyMcsvmjw3EMCTAY4kecg7Z8Ju4A7pKcuUMryio",
  "key19": "4khYvTVKFio6tCDooQEHtCnXqk8L35dwCDpMVkrb7cMMN2zTjPNjnE7J1MkZPBuVQvnCUXF1kFLqF9UPWLAbLxuL",
  "key20": "4Qf75vdbLDVautufKCGmyykfbPsAgHwyMk2uys75DNpbu9ZJVH7znehHcZiWVujrZTicoBodYcLnjSRxwSZH9Zib",
  "key21": "t1v8YkouKzecsuSj1mbBkxB8KM7g6AnxRicUouZ3WhYEcp94TfaBxj3R6QAV8G3Mb8q6YRGAJapq1CfXCj7evcq",
  "key22": "3ezPfCZcmH9jQy5GqBa7n61y1BAwvP4qmU2V3Buj8b12q7gcBm1hQiGyi245MUrRCfJRiMCZGe9QbPbZArqLtPkB",
  "key23": "2ym5n7grZxZyQ4zRAKnY89y81zGjqN4gxPaGL3fgdacBssdwpJyCWHEoebwg2WEKbvgvjZF6tKo1GdAHMnt1bjhb",
  "key24": "5attryZcitUkL8KL81MoFNGjNNQCdu4YFvF7A3hnfuyxRxPMLX6JH1ZzwXVWMhyfdiuAGxW5eRh6F5cSjvU6Pry9",
  "key25": "3Up3jS9BdFgksZkcbS1hcPcB3XRCZp2gemZcsQ7AVLYgDfj5y1JDdrar7JNXg39EEPz95SmNCEFXYgxsBXBB7zMy",
  "key26": "5Tg6xVkF2p51S69hLSTCmNToCmje1LpQF2kxP1jpQoqSX8AVPCKxT59fRbfaYVEdHn4FsvhPTL8VKbQ5cDKwqegx",
  "key27": "zu4ksc3Eu5nMPXN3cLiJQFeEXFE3g6SaBPTKuW99QKjtSqrxtaJppVeCyeAryWvuuDCmANLJLng29bS3d4SKT1Y",
  "key28": "5iFvQXnjuCpk6LsRxqu313QVu1yt21ZXWiy7u9CkefbUbsK3gYxUm3yZPhe7DmzvYt51huoJbQLBS7YdniySuR59",
  "key29": "52NJ4hbji9ajtCmoWWGTuxP6LnpQ7RwW29HQB2hC3JAgdsVq4VQ6mTTgPcdg2VB4bLUAxLRqXApdkQ4ig4Rzr1V6",
  "key30": "3DtEyVtMkBwcSWSg7HUBoMNakCKYZuCJrQnPqajVyvTbjmMe2X4TQvuxfSwg3x9AJcSPQyM1kT8re5tMfLfGusZU",
  "key31": "63oFSZbzJfUEGKtADRpii2vh5vLVwtBjH9EDc2DXwBiPKpJ6ZJoRL4aUEUMT7PBeRHE8vgDzMUMQhRiL3C1VgzyU",
  "key32": "5izLRuotbQNYXFVTZSDmSxZvr9WJBtBPtQxxddBy7XY35PX2qRgGS6aAiEhbvHziL5sM5VhWD8qNfjRiipryufxk",
  "key33": "2pD4v7aXnB4idmU2quju15y7Dn3n35xp9sLw4z6bSFcNZ33PWM81qwpTieaXEwNbJKxBCJrbzfonPWmdcga1VJ5r",
  "key34": "M4oqtcpf1uxdkGsPjATZ6swyfNyRgs6AcEytqHieQDpd2jBWzyBRpPHkJhzyyL1D1gHSDAgsu6Jxu6zNbAo7oc6",
  "key35": "3DHd8CSHydTL3V8PGvCHv3LjcBponVs9G5TaLZfzx4pTrbZb7oCQVFEaMd4N9CzrDbcNK7JiJc3sQ5sEeRVqyieo",
  "key36": "2anD3P65mcqHjo86Y6ZBmr8PxoPPNdk5fdPfiUE8kMQn7Xe23CJrxfC4aVSXpPRA9D54hrDqeLs6cPk6KgEUeExb",
  "key37": "4J3121Fr1UEqU8i3TrZGJuw4rPPMKy7Gy3rtbsYpkB5fbxpLaw3jM5hUhFVuuMiBu8H1s2MZ6Qv7A11eUvnrJtWt",
  "key38": "4oo4nsB27o9Y3PdqaMSzw4HnMx4fid8v55gRM8ogDGY6rXU8SsMyeB8weXLtk9ue28UZLw2nFu12unPe6PX5wRab"
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
