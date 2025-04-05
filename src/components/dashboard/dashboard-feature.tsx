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
    "5VahJsoLVZArFRntjkdV8nwdG5gZV11SoEPD5nsbcbcfG4q7d6TMqsmczK3EdWnJYNt239yJjmZwUhU1wpNV1p1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4qFDAYxbahTCrNB298XN2YezMaqbPYJ9NMeFXBy3gszZHjFUYVpwsf1XkpiJib6v3hjBYN93vxtHgSfHz8gDGx",
  "key1": "4mJMNPFRaPPwRkN3Ped4o7Fs2yARF5PvNrnfBeVWKP5FDQfC6s4npomuyULYGdNWVmRBNXkDnrF46eWiHWKnxoaP",
  "key2": "2pDE8mt4Ef8owqSBnS9DCxao2MxheKAst1BwfapnwaATFP6LPGqfK7AJgZYyj1dtPKVYTWZ7oD4vwf9V7XsjZuzj",
  "key3": "QTizzpgAhUdFCAAEED5hJ55VUnfEo3Jcwj6rFAUeCx3XwYD7zJzczZByRQPNL3HRWMWJWM82H58Q7DaMxM2ybD7",
  "key4": "3VdCyswEuvdB7NFjUjAkj8hwiiDbuwwXapJPyUrCUMrYzty9gJEcHKnQPLZyMUKG24RrnDZVu8EYLzba47SsDMUT",
  "key5": "2wbTm2TNz6zn7twgqdtNnJMej18XN88pYpLA8TuymL8rBvBtEFoZ7WWRhSYcFZDQCcSN4nRphgEiiekmxqyXHYCT",
  "key6": "3M72eTPBaUESyTK1eUUZJ1WnNhbjNKh5pToAddABy4NqnBW5B7kBQLSLHYUQ8mMtrmFmvm6jZZwmZVqg39c3H6MV",
  "key7": "35AiU8j2y4yHuS5oJb3p5cvwMe599exzBhMZvDRM7psVaqAprFiWthZiY9abv27q2hvfFpyTpx55CmUTex4fgwqp",
  "key8": "3CSAugoXnvGvdGBJ87jY1bfWhpJan2PPw25up9awdxBw5YoKk5mGdurNykjX1vpAoKNz24EBrzx3DrkWSK9Adsse",
  "key9": "4PvZ4nXxTg5eHxjCm2WmLcBK7Me32YycMpjmNbh9zDc5oydaCD4umRr9XGtSBnDhKcdhrQL6xD5Xs5t9pPJ7Hd4J",
  "key10": "2a9DuT5x5vaxpCnnAYKZoiNty9gduhy9xArSR98LacoH1QP7iLbmMnXMb2dBgPUXXxZQKo1GcXhoLnwoYdir8qgv",
  "key11": "2RqZA9fRGNLgqoi4Y9YFw1xLQaJLqFwX7Be8ja1yfvBt4eUDNsDknkmhDP4PuBio4SaPpP18iKCsF6VSK8jfREXa",
  "key12": "5nq1YN8QPcZYSy9evkCTu7tPNUaaXwmVM1LUWntL8s18e9kcJXZAvSmiFXdtCF1gEPzGxwTT9bw8BZ7rbNcUu2rW",
  "key13": "4XHFe6dnkAmWcRn6jgEy6ghXBxd4x1ufWMEZ58s276LN9pF4d5kUQzf9DgWYKkiVxvEgqJE1iCh9o6wRycbnabLh",
  "key14": "1JcSPH9P2akKpooeT1tKk9dMxVg6f2BHCy1KDbHjnqPWSxqCe8gZ96mbKjiA9pg795CxKYyktnVjSQxDo6EYg8W",
  "key15": "2GGc87dDTUN3NiRqopVFoYdjvs594wdV98b5XUwUwyq9STmm6QdK8bNisjPEDKfkjBvm1v1U5njLKcsFsWEMP28T",
  "key16": "38u2Vn74cT2PJfGd5UThgakwTchEeNthzKFQG9acaQFa3kbtDkHbBktee7EfwJBWTub7EqFp8Fjh4yCWhhLieqPP",
  "key17": "ea1ri53TCaUCb4EK8giE8FyPLQCfjToQFwuww8dYJf57Vo3ePgTnTRtZ23CbNWYiqDK5oEVcYzp9XNSsSArxq8B",
  "key18": "4UnQ6saaWFAZcqCwocZ1Mngx8iXv6H13t4aRsXKxVmHjYWbvpxRuNKffK8ZQpEGiLbFWtFFbWx71dV1RQtJM9k9Q",
  "key19": "4WFY9LXMD9vk8nWJzoPxNu1DjN23cAAJ22KzHvVZDHC5comBWUv5TkjiQf8NotV2Ao1Bc391wXTwfmQViR5i4R82",
  "key20": "4rooLy8HyDrzC2vu74NxtdyJXnRRe333MxHxdxA2oaEWoregoF5GtbtS44DR6YR1BcproeKVbDasfdH41Wc3EH2",
  "key21": "3bwS7K9jsEaEDThxjwXo4KQ5wPtRBC1DMcjWtD98FgLm5pmCV2aja3GDLkkLKStR3j6NWtzdVf64mrXfdz2jeDEH",
  "key22": "4AecxtXWM898HwUSWDBMEQ4HcyHCW43sVrsjBWMZHMMJArq5fWjWryLA6Rie7FRQEFPBtBFx3zqBQwwLhe2hKyQK",
  "key23": "3RzeoFW5UfXFV3sXuz6ct3Ch2rhhocy91nGy24ynsXf4Wuix264fTEsNqdG669crWA4jgr8Mj9xKuF6byG7DCStX",
  "key24": "56yU7Kfii8geruPuzgyznHsqeETx8FfL3CLqfYRLg5aEgtzArpoVeaAdk7zFZV9XBAr2wGHDG8dB1nXhEBQtk8m1",
  "key25": "pes6N2gK7ur9ggXqjAeNvfBJodopUEAbRiy5Wn8LAcYnENkvCzTY2cjkqm7x7FAw9xzFqaMjXZEkdazM3fXxzXV",
  "key26": "3izz4xvDBJeshFnaMQM75itSLWPTq6DGLsL2LbGgjBjZ48oW4ZiZLPf5DqsKjqJbC5aAMUGY8gJni67QJs1FVJq9",
  "key27": "641EZP7DzdMrhk62XynsiKxkVkgoUHQQUXdWKp2wzzYBSxYawGY4nkXQmFTyLaP9zvRCDgJAiri15vBLyQ2Za53C",
  "key28": "58S2cPdv67J4Kv2p3Swufu8zL6Q6brbQkMQZHjGvnrSfYZtpKfC9nyhvPUxY8NZWc13dFtStvy9fBXRfBZeiNXWZ",
  "key29": "39iR1Yum5acc5TdG6X1x1F4SWngTdcHTQuCmb9dRjCiz8qhyY2NRucyUqrMnDEXCMsCDSkKSHF2PHWjyPiDE8zm1",
  "key30": "47NKPqCQoW1cCNW4LZsVA2BuaamW3i1FwaXT9go3dpk4JXsriycNG3HDyR4kj7qLnFJNLUrTFdpRPXh7b8hzUiT1",
  "key31": "dq8d1G3qH8hw7HbfqL5QHPiRYhZmUwuvzXE3kKMCq12Z4H7ex8X8evnNoTY1v7VhLoa8J3KXSbNHUVXxQrzemfb",
  "key32": "63jaYwYrJuqHrPwDecS3Uu6vKbXWoVWBrDZQKRkG2d95V6vHyMQhwAiHfRbMDMAST4f5oNd9oDyMP5oKhxfVWZj5",
  "key33": "2NewMqjiay2DBtSk9SScJo9EiXPWu35FmN6EZCAeBZvqHNyCYtAJZ3bst4ETUVnwQcjsUXthBYw2E1zp7v67Qjsj",
  "key34": "3qJyTrRRubrpAq4QhV5UfViJs8fuXgfPkgMSqyUqtEDBfyJHXugksQ7QRfvwmA6orM6ENWNYBvQEqc612j6VQtQk",
  "key35": "4LoznJ3qj5EdGKBbKmEuBmNc4mRLat8cRwYGRSAc592QbaLWkekyq2fh93ZX4VUVFpF7wMcHJBbvQxdwm4hj3iC7",
  "key36": "5iS7g35pmvuK1c8PJGrxjEYprNXMJjYL2jzphWbyJzPhF6BAcxuC8KZ7KTiht864a9eGA1ubK5NkNNphKphe2LtC",
  "key37": "47NQx4Gyzkacb2JoumwJoL5AyBtqWpTJcmA4VLpiJ5mS5kUHsAojPb54n1spz6YSe7YHnX7Rt1VcMVjb5FjYVLj2",
  "key38": "4SW3L527DWYYJNrNaj4dN8i6by4UGSkqYfhk6Qs3oiEUTeNRwtv9on54tfUSEbUFsYGh19EbEF2Gyr2p9yqfkNq8"
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
