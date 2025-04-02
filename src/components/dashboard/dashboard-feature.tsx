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
    "2WWCPDWznB2ZSZNcKVvybTDWiJjRAQZcBifrwtbNBrmj9WZ2FJu2hbuVm3Tu7xwRzgFvjP2dvUT8mBi85PoAip9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rjae5aqpdr9Zvvds8KcJiAHTu1CkEN8gMcTtbJ7jQJqvHxTjjGfDpxPipZnjGQSP2RHigppfbj5eK6xbsGFLsp9",
  "key1": "1y1V3sBejzAicJEvTcmsK8YWQmZsGkxUa24PPR43GzM12xVXevAfw4NZwMm58NQMPqvV9LQ63K2gtqbmDXiPMMb",
  "key2": "2fDJf7ohiMkRTf4hzZ5iCiy2in9gsfezyZaLcf7oursu344HCX1iJZYr78Fjk8gd9N7ahvQ7esnh4rjaX4SXQMWH",
  "key3": "FriCpX5G2CD7YiTaBPcmZuCGPgbgyYcpj7hxxxikQM1ttaBbVZUkaWAQzABzDKidgVQGCZnuCvD9tDu5FAd1yf5",
  "key4": "2buHuNmTRg5pr6A95JpZwv2WeHQd1gwh289zAyRoTATJTbARC28qa81qLyUcREc98EetKyAukB4RAYfrQaSxuAT7",
  "key5": "5AmrTnBBvLkcBr18gz1PmxL4YNCecHGpPdEw6YTPy3zTvKvob1Kqn7CzPY82GwpMUozuJrqfR1w9Nah4BRsm7yoj",
  "key6": "FgTQwVvPPVAfbFXw9aRLpwdBDr9tyA6GJQ5yGdB6pETT9YGhXenqiHvFscjqi2rfLfj1pApCDSbLm9aA2J9CTKg",
  "key7": "2zQSF6q4iE8SumaYPeJBrYeMqgNxGcmeb2LFKn4qkJsU3BrFCf66YqBR2jeX2wQybTd9o5Pb6axKmQb2P9Lz6ZAt",
  "key8": "DAZB8ZCU786RMFofsXk4r7yVeH66fLz7TmRVXYV74zH8TUy4tskV4JAeuqZ5wq6BNgR52dDd6pjjDYUVB3JtZnz",
  "key9": "3xQW4rkAsHARwc2urS1oHMkETQfXhNYCdaGhj5ppp7vyqbfdCNeteMo2zMcxeQA12QTiaJVAQs2HUvpV5vzpMgfp",
  "key10": "4zgoKbREuYCvXnrNoSUnxupt4FeG3hAUFhimRsy3EMCZNTeoRWJdxHeyuJiHbeS6UMfGqybCoko9Pqr4Gp7SXrzn",
  "key11": "2RBchdbpmf9VDqbChxWmprH8jFCneGA9rMV6nfxHccU2zvKqZi74w3cnrNWZKVQMxMzgBZu7DCDMxrsZxrLrqUyh",
  "key12": "5PaeeUfyfjqftkQ9154D2nWjvtXwp24LbRQfGusR1Prcj9mtTCJjfkoSV3dkoh4ArTBi4sHeXVCdFbvT4fLAEo7n",
  "key13": "TNpUq8unBbmomfjn5Qg4Fbub9SrRaCy9HEvBLtahUJNoU964RRRyGk7Ag64TfZMGDhWPk86Fvo2ux2o3WWmEm81",
  "key14": "3v6a2DpcwG1h5Uu4Nng6Czzb1yA9QMsGLUjCCZwywBGUvKadVnuFdJP6p2AwCRdfwnUWkBgKETgbxcfU8KvWkxxq",
  "key15": "4q8A5GFNKBD2MDM8wizcFj9yzCoD7JStF6XnpbCbHmjRjh1HAuZ5FH4G3g5uAYUG6BV2Zr2YDYpzNfoYwHF6mhVJ",
  "key16": "5nnfQUjozNGhfQ5JEGiZ6AvkfUT4XULatP6o3fXA6anm3dgT1Voewj4S1bnJNLbZWujyJS35awnvXPK3sXhLL213",
  "key17": "4UEU1rqSnXdve3F83aLshEkinD9wrFeFbYnEJNdbFaTKY2RPBhJwYWxneviAdaWTSxyqr1g2KqsdNJeMThWgT7Y6",
  "key18": "2D4QkzzasqQv7YAyMiEtRC9RZ13d7m9x4Vo7P4PQPyQNZAewVQjeUvZSJNUtPUqcKNSqz3QDMfSXyTvU2s8LuqQB",
  "key19": "5upxZ7G3jM7hbvHanJZsYvNDgXWPcjnFmzhDGvSca4gMQn72iPhtcrtYzhdyFLVnJfyPG1DukNaZg1PREWgGFWQj",
  "key20": "2rgWxPk3kbMURodyDHTdXMzZcmEURqxpNKie7w95ceWCceLjWHbpLVaraDxnDHazdUQfVp2HAhbxZjhcQzyGExJ6",
  "key21": "21oXpoexJDQg1RAwCQVorb1CVL3okJeCoZz6c3vmcqFPdfcfiCz1wuyoEheDsXQGui6ryXUjG3FgtaEkvUoD5L64",
  "key22": "2RYgDCixgMFS73ECscdFGRrRvRCuJYhXekxhA1vKFb9qFFQa2uDKh7PgSUbo7eEy2k3aVqfAwSMsZcgkuH7B6xES",
  "key23": "3z4zSyBS4nBoc1xi2dAZNcmRojJcFBaiAxqicar6hBVjLxq3h1D1nZXXptN7BFcekJsoXMibNePoNhea9AXcY6Ki",
  "key24": "4djYje5kogkYojhuUAQ5QfDhoVxQyPaUfoh8vhKvFvuv7RqC4HTzN862xMAkKhrveFaRmrZKCQNWfTxrFdgnGPft",
  "key25": "56aYm6AcJuFy1ig6t7huQR4Kdp1kwdE9DqhUw8mVp4EiRhuPRt184UsJkKSi8VWDtUYayrEDWTL82nD2Ko9tiZHS",
  "key26": "4Tj6xTMs7JRFpUPo612h7MoCKNrjKaadFKiNu7nvChiTpGtK63i6FGSjdgDRNRyerYBHB5w1u3eaS3w7tZCZxdn",
  "key27": "VX2n2PL24uHQDDNyn8tCXeXfdb6UeNFD22SFZCtccpN62A8UjP5awfoJhZLC1eoyPhP1iV6oHhTJHSu1LMsJoXj",
  "key28": "L4vnwTB3a4chQjYTwoLYfygvThvFKD7NJ6UZLU39B9tVXY7iiUw9hpLZwm7SkkHjnuK2aCr8HxKGDLqehE3GeCv"
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
