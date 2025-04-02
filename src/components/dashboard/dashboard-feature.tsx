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
    "3MPYNTW62UcpVi6umVVouH6daUmsrxnstBihuqZSXr2fAD8KjJG4TmF97j5BRpKEF5UCr2SQFHgPpCAxiqGyrZTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsAQx8rV5oqviAyJ6WSXV6yrYoGJJ8S23BLkqagyjgTd2pPDzLH6cb9oWxs6EeeUFy3GRNPabySbsq4KbjofTw1",
  "key1": "5FQKo4GKRt2CYhmo16FresvaDw5hEVRZW9ybzke3RoB9JooDdrrzVTvoQSg7axP8Drr1DND3tGvMo7Y15C3VXqz5",
  "key2": "21nkqGMjktjwbDMKYysEaKF3EBt9y8bX34uKpszDGGeVE13qzn67JqKo74jEEMLFFyww9mcym7UNNShUPKWXz2xc",
  "key3": "27zVqR815sgsGrtg3vUXyWjGVMnue8FPY4iJAY6WgJY39hYtHuWrWwwvnUWBf4YJ4BT1bnmTZ5oFopdQEkfMukSJ",
  "key4": "5pLCySDmWwPuXtKwiJzXJHWNooQmCo53NbMXHZJkUBbEkEjH4iey8aMyciEyX3cvuj1HKVsmVkTuD39ucxbY18LS",
  "key5": "458NgpcJkoLvGnN2hCjmACn5ELhqRyMTBZAt1FeQ29Y9o6FBtdfJBdKCf8sRMVZFcEyyHtUnJf3YjE5MBXoLCsbH",
  "key6": "piXukipDELGTTJwtjo9GCnbosoLzE9hs7hQBVZrdRf6Xwb9pCMxHHHNT872HLyovR2uhCmj9oUTwS7CfV1TA7UE",
  "key7": "4hwBkEbo7HpCAT8kojB63mc8UEeBH2Sc5pEZQoad8WB8ccLREGE8nE4w8yjfjRb1ufzz5DEgm7QhFp5Y76WPd2nV",
  "key8": "2sA37ZzhUYdtmDsdT12fL2mZF8oGGUYRqznfxz4bgwZ3xY9yp6AT4J5iZ7XAq7KyeiJj8DMDVbcYZGqduYo2TxRA",
  "key9": "5vpFaugS4dUq112m3V2yQaLbJqd8fJm6cVPYSSwRmRVCmYGknv8wduTEknCkjY8VXfbWhFrmLdR3XN72xDd8FvF",
  "key10": "64uxifVHaY8BDiHvtdgpmaQmUJ3qo4uLQRhxgtPrW53CPne1eyTyq6a3ivT2mnW5YRJqP6HWskjGaNy5NcK1cpix",
  "key11": "2MbPdhmEUSiLiUnb8NNoxXTTa4YZTHhxiwfJRYTNhADfomZqSzncmYCoa74ppudmQzi8xdaH6spmwHLCpQuvVn4C",
  "key12": "5jxxKKToA6gt5wGi68anBgWDXrLuvZcZsa1XF8e97Vxcx5wLcfXprhNrLUgxgkEsofH3jUCCHBXYqn71fYySHn86",
  "key13": "45d44FVk6CoopGkEfPm1bT1gC2QGLqAMEA9YnCRUcNYMYNayjXvCjKJjon5jog5A5qAKG2mpUsS1JFNhMv5padE6",
  "key14": "F21iRyhCoYZRyBsywYx3AFnYMT8kc3uMLoFiqpYWuzNAN9yScxDTMKdtR6PZiYBbuF5bgmzrS88YuCFASc8uBy3",
  "key15": "351P2sCfHjxgpLhakjdLoFozhq7jDQwX2utGHj7cYjk6jvbDUpzStbpNYRgAuGeduaSHXDsMWsQK6ye14CEMk26W",
  "key16": "5XqVfaSu52hvXQzpuhdzUduTcyBUFgkPThAqxau89t1cXWV67MFyNP5mGgB3VpKp1GMnQTcRRpeMpv5poQxqUAir",
  "key17": "4eZnDMz1Goa71PTmj11dP9drxDaDAUB557q8J2FhYMYi7wiXKJyuQQuM8twQvnPPZdVZNjTV5KFRvAravYumXcv4",
  "key18": "2bNP37g347j8omQHPk5vn94ZQ5mBr5TFtQ8V97mttXoQ9reVNhxaSLoV7T4JZtvDqgkHjvL4f4JoHtL3JnmRwCyz",
  "key19": "4WCGtyh2wMCEamjQyLTgx2xsFbj3FnhzDmUgLWLdxTMWLBGPNqSyR3YrJEUbdfxJMTDaVFCQS8Hc42pimFeruKYK",
  "key20": "5iqDdE8rUpoM4w6agJmiU4uFzMoZobAYVCuDT7XTuxjKCdvBzSEyeRwqYVkggU8yDktC7EEayr6Am7XDETGEbN97",
  "key21": "3Nhnkpfdg9QWqbGWo9gfjLkSg9uTWGZHvSB2Qpmw8b17ghm9iqMJEABKijoBaZzQWcSKAikcjmonFo8857qkmuAq",
  "key22": "2Daws77HKMu2ZcYbVRb6fnagR9jsFwVHmkaW2gvWj949v5z5h3YUkd7N2cEK3wDCofnrGu2otLsiGuiHwD6RsM48",
  "key23": "2KwYEgeQ8pn7V2CVoYR4i76YZL4Fh9bPrwtPcwVzcgv7Dvp6kuXJSrdavoRVYstuVdi21pggJgR2n7khj7VmSXyp",
  "key24": "5NSEvTtNrFoYza1c9491Sk9aeAvZeNFghgURPvrFm7QU7X9eSK5qKxCJ8q8P3yqnaeuK5bAgb4LwtGrzcHSMNpk5",
  "key25": "ojb1HPqXRqFgsN3qnDa9bFqHL4H1tHtYGDHHuF6ARNBKeP6AGdVdtwdVPgnU92mPdR6b1wusxaa1bUsxow8SVVs",
  "key26": "5R9j1dUzPQb79m1cazEEiSuB4CpVZADhn7TmwnezWpdEdmd3vcJC2cWbVTayg8zijSDd13sKSDB8AnNgXiEbqwJ3",
  "key27": "33AxDQEC1vDVWUWe5UVE6eWGFfiMtZCs5eGXt4tRp1fbjx7ecP4m9BfzKraJN7Jc2SXNcfvxbqwMTYheovzzTtuq",
  "key28": "2ajULjRwouXCEP5NNE1FM7RYaVWrwEhVnepETgGiUnewPYCt7YZTaoAm8nRKtCNkJe83h12HqHWRuomXRZUHzVjy",
  "key29": "63uQtfyYL9jDnvKA5dUYT5quLR6Sx9RDE1jve14Y7CcrJjhL4rPym1z1YR1iqhqCbr7Nfr8tyH9QW4Hb6tupuVfx",
  "key30": "38kmvDUGCjJBpGPaP1cPvYkAaJ6X9ZwhVRBn6m3nNzgmZtNtKiofsrWUrtxLX9RyFW1fxck7gpgSQvTPfPQs7kV7",
  "key31": "4aqpKT8pQE8ptMNztFdmFff75UbVcbWtAB82JWRGsWGiSPr8az6yZhHVK38zaLaUZkk5JESRW8WnhUsWz1Tgx7hM",
  "key32": "3YLb4zanoCgyytan5zwcp5M68thSfh9SXTKb5Pubrt3ed5ZTo9de2bX51pGsVt9y4uqGCuTkgHk9otzW5wWXoRUW",
  "key33": "5Yqd5LrN3hNbdFBQQmDY8hWqU6mWrrwwSQLvJRKqSjP2odzGG7f6QX1sP32fdy1MXfywohs58Jg94mCXbw5NxnfU",
  "key34": "5drasMLD2ZPD3ULMR9qMJT8Q4Sm64j8DYKiGwPtDQbM5RwdVwo9LFfWvfCP9Cg5sxeFHHc4JnURyJzcsbfYAXXC6",
  "key35": "54H8uK21sfcc1X1Q7DkA7PDoLzyukq5ieohzongMuoUdv9gALVgyaT5WiY4BMYaM6CWVDjeUVpbzg6Axy6Nfo6as",
  "key36": "3RrhrDgofEyivQBdpJC5ap1y14i7Xk6BSWr3FGhE5tf3DoyQm55hsYyeupqmFxEA16S3qxcmFbpGej1j6AGHn733",
  "key37": "4axaSVWKpzz9PeWpwSDRqYhJ1P5QejiawSdpt5cPj237tXQkpSPLastXt1rB2Ys642jiaFMZLRkqScJKa7r8HPa7",
  "key38": "3XDUBcBqNLh2yeM7oFvBaPfyaFw8cebkwe8yZJPjueD6PrdiBnnefHNieKNdTndcS1cfvf1bKAvkDxABGJH2DvZe",
  "key39": "3aquoafkAWButzRxHFHVnYP8o7WXEcmGQ59L4zVVD7zBMus4u5oEGBRFEhKXfDytv65YKxyd6ujNSRyzeSiLBYML"
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
