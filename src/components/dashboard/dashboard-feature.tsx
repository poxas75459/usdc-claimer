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
    "3VsTzZGVxkGBN2aDFZEKf3vF3gJPd2Ro3z5vPvpPm4qr1UYHZ1qeQQPTgprZ5pM4tJ1SsttnS8yp9FchAYvso5LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk1xKcqpdEg8qfuvvMhrEqMYm4SRiBfW3z6iwmzShn8yHk5QaY79KA9GAE1CmQoCv1VFQWvwNdYwFJT618dM1XU",
  "key1": "4tgE3qaa1t1uvGsq7h5aC1EdG5ob7YpfUUScw9spnGvBsNux9nfpL9msyahMR6yWSQYkti6yfZk5Lk2UNJ8yJMh9",
  "key2": "4x7zC9FJYXE9jkPzksrBG8ctMLN3MN9AZyJXpLXzyWQhqTchSDhTxogzqW2wsTDoMhEmnad6owNLA27Z66iZQSVD",
  "key3": "jSJSWCgAaJMQQ5qYJTyDmP2uLQpFDW7WUmobXZHus8fT1FpwEXUi4b8rdoRkZoKR8nwBhEXFd8LQ8odjEuFk1rq",
  "key4": "2PSi8jMzK23ZDRvhMR64SXtTuAJPvSCCLcY8eAqnqqkJM9mYNsWRtxef7Y3QPiuhvrcgzmmmAgFWxswmMEPq3gaQ",
  "key5": "1nkgjvJZX9uQB7mLBEUS4HQcYBi7rNNddeG4enKcgzi4CwBvNQ1nMj8wcx4RLNXFmUsbSENyH1KLPErVZFZEaLR",
  "key6": "3TLJrVZeybStaEMCDWQcCvH6zCTYGFFgPAvcXbnFtQv12WVteEQzgVo8QRVBfU7nm9Z136LdXcru8VZi8c28Mjcn",
  "key7": "5gzPuQ5ePwJoxcKPLPAmSkM558zsEUvKcJ2R9KrVLN1Mmw89GM87B88c4ZKweTGoDWmdpQgKJVUEsbN3VnHQbbhP",
  "key8": "5WeAhteu5g8gdBWhabSmoFFhhm9dLhaf7ukc5vFFASQrWYPFx3E959SHhopFKC4SJA1CHc27kUALaDk1MhXAS53e",
  "key9": "3fwbiKrVdzJrdAJBzop63bnHef5zQ9aJ8htT2uLjowrMcYdBMsTgCvcKdQgjmP7TViKbJaGyWvG4gR4ZVggVGGRz",
  "key10": "3H8RSYDzdvvC26A79aNKAQkmbUjX4V8Xdprv7qfhxFJtpQb3r4Ue9KKqWjQoXHiSBwgSPbNDWZYgDWTeBjpcZgpY",
  "key11": "2UnhnnJGgW8ZSztGfC8mtrQJExJ6D9Scp9n5FsJJJ4zkFmt4mihe3BBaT5nsPgp86jFYyPZ7sAeyxdMPbxGXDbJQ",
  "key12": "5e1Mx1tsjyb94691XpysNyrG8sdJf8htbRsgpLfXoCuM3PtBUkZXhPUCf7Nao7hoEc1aUJrizRGTAVsgs2yxAe1D",
  "key13": "37YX247ULMU8LTHRUHgurweD9kUH4H5tmFqGHJKZGfjtoJRC6zN5ryAycSzCUzg93FjpMuoVcg8Exrv8RqZv2xGj",
  "key14": "4PZVBGMFiSGL5zNLH9s1sXm47xsBMqjmYR66BdrfmxPthDEeAmeRQdEECqHUcg83kF4eD3hicHhdtta7NgRgbMd6",
  "key15": "5fmtx1XkzFnR45vgUgDz5SEA5SjZcfttuacg1qdf2FVTG9fz1jhe9vnu1cv4H7JYPyEZR4eHbTr3PEvRdoSxamsC",
  "key16": "RP19zL1qFr3y5v4TfXLCDexLSjL3EEqqBqF5Zya7CsecanKLsE6bTYRC1g7vThiTmZWVYLFcDqCpauVkLNH6BDx",
  "key17": "mJ4C1iuqvPagmfSowwY1mgigH9c3usj2dHuCKgnaYor8RNM5wDr154WMJgk6qXoBrwuF8cy68XDBpBUa5YBcXtc",
  "key18": "2XYhem13uTwEGWnjozLscVEU8aXtyHT9jJmpvopFwBA634pfGQJE1LrSPhtVMcXuFSzBCX1kUbCWfPGbbG9jbJAY",
  "key19": "61xVczQUGy1EYHBqSowCJTR4f4Eh4oA5Lw3mVFf2bftxHo3Fi1eD5qyqTMxGVhfJ7NDyAHrazt71mVQwH5Djd28K",
  "key20": "4nnFLKiMjtseuovfTLBhBabgHBVetWqhjtxG9imyR3dh43sjyfUQsA2ayV1QHoHU2Dh9wqL31g8sRBc2TJgP85Y3",
  "key21": "5TKjgh11DZMoFh84Ww1Z2Bp237vp2KcaatM8p6gNnMEt3FUJktFC8VSPXXDgrQY95XCNyEAC442EPhKvF85Ggc5",
  "key22": "4gg1Mv1dLqpHXFr1GYssB6mvGsPkk4qHGgfrhn86tNdjKzCn45CnV2cRjkLd61bgLVSmhqUQBycRNnZGkVGJiyKX",
  "key23": "3x6d7c8A2oQhkGhd5TBYh4P2m9j7WJNPm6UGBGLx9haD1SACc3s8qZkQtCoJyCjnDKgkC4zwVksZYgfyjUqsjykY",
  "key24": "4oyfzJ7xCWPEr9GS1UjMK4DuhUo71NZgR9LJqzpjQN9i3PuaW2PzUL9LmbVKgwbB9hYNXJv3gTAJHAtZrohhR4ne",
  "key25": "4nYhUbugZHNXDuis1dEDPPYEgnxS4XSVxg5kZvvj2ydqBNoZ88asoERj8kT5oxKurz2xwMs4D9iqYnE3TDyJ9kqh",
  "key26": "5HNafJPgFqeZSGFRuHb1kZXhzbfGuMvCNLzuZRvREVGZ6sLix3Hzwtc68gYDw2SM1nDzPjjR2D2CTCJh1V4ngUsW",
  "key27": "5xoiYWfa8XXLTNpUJuncVPZETJ3eSk9VrBQEC4TEdRpWnY73TKAJK1y7VDKBmxQnZus429PDzDHgoYPd9NrSDwhd",
  "key28": "4sS5oYivbqrzrAPM9FgyCLJGCLUgTTNZCad6Z3mgzD75r96hJwbSzeoLFMfUiV1oQjjKphUmy8vw5JbtuVLvBKct",
  "key29": "55RbstwJQ49PDAVTrfhKsMcMQCimQ66GZY5yeWFsYDMUCptnfToe2yCvvdM2jB6kwxPA3XWgG9h6gcREKFuQQTN4",
  "key30": "xhKHsMJFJMpm7g7b1x4wZ6ge5eiyvsjFLnGA4gHNhUPpTouw3UGjYEL1JowPaJ7ULS7Nt1JBd59dXzjEarcFd26",
  "key31": "2uiYRzQWNDs55h8jEVhAStzSvYF6Ai5xXB2dT6jZNH3Vf4DXSUaMM9UvurrncoXoE67PiTUJhvJzEC3m677NACdt",
  "key32": "3dx9vicCJdTzTyouxb8kmTaXhacfFpKDy6x31DrDAWi55vRfQHRchpwspVpA3XP9ADBou6c1bVo7zkjd1MHoMnKW",
  "key33": "2n3xjyrBwRCAqEjRsS4KDx6wuoWBcgKi3BXMjK6tXWMBrkeAeNNn58BP4MoWBg6BUtZDHf7dgh39EC1EnUhfMDX3",
  "key34": "5ScZmoeV8DvjAwPq3n8NTsKauTGXdeprExwynGS2EApdaaC3qtPwxpAfry41ocKH5yvFV5vHJqR41tzAWmFXnuRW",
  "key35": "aTCrkn5wdqvw5m2qYUoKTfNfccKcpMuV4Sb9HmwnnTDWPFeLjfG51LeP2QYwMRMazNBYCh7HStkLSgppcbAs9Ny"
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
