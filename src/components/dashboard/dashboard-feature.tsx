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
    "5eEejfER31JCZmWe2zbLK4vJdJKT3tXjNibskTzEp6NYXKPy9pYkCa6cfT78A7DcAbJWqZp8kdB2Xu91RVGZCqnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmCjwyca37e7MiQ73jBqAqcceBSichrB4hggd6RGcoCMYUvZppF32rv1MLbYLQWQUKH5nk2pJb4tv2mj4nPyixu",
  "key1": "2kMk2QHoMyQCzU6eRwnHN4eVE7GJPLx5rQKg8Ksvt24KM9Q7qKAvEWmRjzhC5WnHGaA1A6aBjFewSKVMkue9FHyb",
  "key2": "47QTySzqogkxfiEtwgA3H8KPG9sH745cQY6q7W31M8ZvdhwotsDRgBpAPUYLQ6mGsanpqFs5UuZJYMXXz6WVNcit",
  "key3": "38CsysgHTB2bSFhkiqiUzPB9FvmXeemChZQ8F7zn7zp634PFM5QqSbfSNjiZY6CQeFACBgrYGtoE7xMCwKJtu7q9",
  "key4": "3qHrFPY1tbhSnRTuiJnVusojamT6jLD2Kjj3iBYuPcRNf4sR96qc3R8PeKnYAWMcrc9CiKMYd9n1WaTHkaH1YF1H",
  "key5": "2V62DnHGHMWomUDp4WAy6TrpKyrkswQWwePWTw4rNGWWPsQvnGAk28GbCtfzTSnQS2YeUz8ocFgvceSsks7sVakj",
  "key6": "66AsEedJL6gQKN5y3eoRb4m35XW6DwRYjy74a1azA9hjjgGbAc6SKanRVR3gYAftQAJnqzHcPk6i5jt1bCbsTmUN",
  "key7": "5cpKwYzuuRkGsyrfUL4SMHV3wkPUa5omjk2aqRVnJZ6uVSc9hwqQeZDdt7nnzrbWoiispWvTJVZoYa3TPn8eGSDd",
  "key8": "214CYeB9LVC3dB9h6mGqV4RwxnFPePsfy6FC1azuGEBbUrrw4SRFFHMHG9RdN3w2vFfTJKzif7sXEGLfhcoG7KYi",
  "key9": "jZZnNoA6pfkXnsXx2Gskvxgg5YdvJAYvyzU1kkgE5tBwZEppT6BVNTuVko9wCmeVzxcYmVduvjX4bEvh6edGEA5",
  "key10": "3njYzzWCPmeHtZx1eouv5rmkwqfKR9vXSGwGFKRCexnvmM3E5V4WVV7MEuReJZmSVgsyfuTLowDtNxmb7NpFbQux",
  "key11": "5shNSHPMbczWZddcpduxZ5xppjihoZgD8qkwPnVJohdnCHn6icBjwkosxHu6C12bf1jZVJcLWhE8ujbBi8Fp9R2b",
  "key12": "64tNJcNanot5KhQDp8Kqma7qnrwd9QrfFrPe6NXADKTc1m4uh6Xa6wr1vmXeRMajFrYVYqS7ev9KutsZKs1mWLvF",
  "key13": "2EfY1zJausM7APnbeSsuProqX4u55seGrQzSVGccAuZRhyByVWYB5niZnzA7kyKPgFDZQQUTz1GN1pq2imXviS4",
  "key14": "5r6X6rdE8CR9LP9EfscJZMvpDEXsAYUijAmmyQUrxo8mE7DG2o1Tdgi2qMddUgU4Ni1JntxzyHghinmQXDL1FLFn",
  "key15": "YMobKxTQ4u77bqUUBkRRKGdeZszMHPPZs233L6qXfpg6Ek3FdrGCmoyEwvEZrhW8nJ9Km86JN3rpyLPRXTiXtZp",
  "key16": "2cpsrdqjT37W9zh845rRLFoVaHbGq4KvwDp5rdskUSk2zaqz9cp4xZRCVJLqawruofG26mPWCefmYzzP8bKmZteS",
  "key17": "5eghiacaaqUXcLwmQjr3b7PSbLjFfnLcdy5fvGquPctDHWC7wRZs4MYdCm1vNSZqyE2uGW52ZQR4PP7J3UG3Sh6t",
  "key18": "5ZQzsy322B75wzmBByCzbtzDKs35QT8DKoV3NyTBerUhPGHCErbUYFg4cmmEG916phNan4Yz4pMtwLD6hz6oMMv4",
  "key19": "3S2g4F3AGJnA1DR35xZwQ4uYoDDEkBmmKAb1c63gUEx7ykppwG6BNpbavj9qVbe6VoesxVYGkc3JBs6AZDKRkjMV",
  "key20": "37PCAseX3LrmEwKewSA4UWzFB5ZtBBwwbBQFTr5Kz2StjuYrKkNTaGYeTjvnhXhtTyhF3t1WmFxpDVW954zvm7fz",
  "key21": "mzJ1RQ1SBgZ4KVdpK3GXfTEFtbE2SF5dx2pS4EuZgpmVEDZ9WWnWaHqb1cX6ck7jDQeEBkynXd2ozwqik8CYdys",
  "key22": "5gS5P6nvarASYRkn2yLw7ypvxYUgaEtGYSv3n1P8y7UAWQYqfa6Ubht6BWG8Sf1utg6W7uFY7jE7cpo8koix2DGa",
  "key23": "QaEFy5GsrssVzsFvvwUT8UhHXQ1wBaZT6XPp1aFkdX66mrdiMWX7GMiz4kzmCdfv37aj6R2Zqkrx385v9V2oFQP",
  "key24": "3YXtbFCHL17YgJcdZfuJyzkWA4Hy1b9Y1AJmSrw7UZ8maTHzjb7vThD9QvfhzBRjbEQVh8Q4sHoEEujavwi9Hooa",
  "key25": "56gJKmHAjM7A6n17xH2Ed9an8ECPg13tHGysx52Um1qMEM4aRjam5eZBEUwiq2UknvKb1Uxw6Zry2vp63HcVKn1X",
  "key26": "SeLbRY5GT9VXUa9nCFSjWSKpxuUgyRH8dWdcq3WePt3spou2D3GPPEN8LuRK6ECWfw4vwFqXkUDNzb1jzh4aHqv",
  "key27": "5LBY2ABwu3G6YFsbM7nwoETyYBo8dwpw2p81gWwPQ5XMdtw3UJomhh2KXqSKnVH5ah2Rdm1uqtA22wWwSag8daVN",
  "key28": "4pcTKreQGw21aD88TAy7bjogp5AgHpDpGPniw7hLbcWN1Ei37VbDD92PoaRHQ3FrHZatEfLDH5sos5bahGGywcyX",
  "key29": "uJSHmVEhc91yTnKUzViyDmQDSKhyo15vsNf7f2EDAyY7JqXokoNwZnyDVhhxa3RmHfChsDBFgRrd9pP2SXXteHw",
  "key30": "Uvyo8NXZgF8aoj8DBJnPEpk3rKw3cxUizB7YYMoTxLhoov9iqB27A8jnHGhBpqjPkP58HDdGm7wigDxCXTWArQA",
  "key31": "3qSPzwgqaSQ3tYoconGQfNcRVBPj45kiCqp5BrtVkeQkv14JpeF38WZvwYXouQ1hyqZsxdgrcQYXzzNaFcDBXCz1",
  "key32": "2L2pHwvdAqwR7d4s69cuLhEmWYxpydNodijTA4Wh3PjBVvYArV4oLVcNmoctDpgUy9JyH5ssLDqm2Wkqx7MrWy6L",
  "key33": "2i2WQ9emxo46UCjVvNZdRK81q7zV9HFELPwfV7BavSPcK3FsMDjB5yVcU7ej3ap4nAGF6ywzD527TJxEBW7q8yXP",
  "key34": "3VSXj8tB8oGU6jqCLt2LM1syyDLuz5KTNkKyo8MrC6BVbKC96pcYR42SNQADSFakBpk2ZUtbNt6aqUHW5vTR1m7M"
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
