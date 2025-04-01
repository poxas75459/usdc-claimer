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
    "37DBGA9US9gL7LQSxBxUV93zUQ73qfNfpj2eDneyryyJAUfy9exUGDyVRoGfXvidjmTFvGh3B2QViEotqoA2Zi9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhaa721Qe2yV8NB3Djek2paZvhjLmjDYWQj7GAnDtJCzonXRRasa1r1DXo77wJfhQZjpvJV38z4AqPHikBMktSX",
  "key1": "3pdgyzF7Mjp9tWQpUWD1eswcefHUQs8EcjYvftv3V48HKanFww2Tq2BkWcT46Fntw7nPyTqHKbYkaMMTFKr2ymjc",
  "key2": "41rjuUUw2vXxJDA7J15B65zX9nssBWscAjmA3BjwsKpcYzL9g1vjMLsmAHciMh65NZPv4KKsZJsbtGduoB5hjSVK",
  "key3": "4Gjn56UypKT63B3pF1UHuaSi1afVoMXL4G4SRnsQzCwqYz6FH22NBrTgk7eQcUk1LLS8EhwQdNhXY8c5wjweWEKm",
  "key4": "6641gg2Ec6AdmWX9i2rruQ4u49eaBjaQ3ooHpDz4TuY6m6JXuZaPs54o6P4hhU6mc6ABKQwKC8H9WPHoRZwNdGDB",
  "key5": "52tm8z99rWSLMvvBCazhQMkJzVvY1M9s6khSTNoHzhUzqeXPEehciPRJNxxXxCm4NVbA9KqwF7tnkvTt2HtWiWWt",
  "key6": "5VaApCUXafr1zhj94hzYfMdgixg2ri5YGxnqsFoBhqYT6rF2WAckPv88ogfQWqL5516pxc31Epwfwm774mieAin9",
  "key7": "t1qVtEF1qUh11xe5huEKQGruKf9wDUB1yWvhAJXF3M69xVdpP1exgEQBGhS6b6YWjDGwH7pbeFb7mPbprCxYYVb",
  "key8": "67SMqXPHZaCR49uEuX3PGqw7bWTwCE5qtWHasQ26NnZhGRb39zffNa6HCoZkMxrLXUsRQ7bowQp3FtbejxFZYkF8",
  "key9": "2WA2UGRAxP151N2m8K1xHaE9YWNBsBzWGLdmZ8PgjkyocWfbxLBxyjvfe7sy3fcMiaJWvNJvXcAFhrrTFtSssFdm",
  "key10": "41Bp1agwhtoeDexZ8BQtLwVpV6GBQV7hZEFZWmLbAXPaF8vgJoAG8tgbwYqqfrsmnVQhuSSwdBNTqhbbCBK6XYTy",
  "key11": "4ENp4EYYKcCbdnfon8WsCEFc2nbRJpUn5fvQZDpJUWCF1Rr6DLqs9XrJeUvHCtwKW4d4S6V8pGwNfQ6jUuVE1FXu",
  "key12": "2E7eKKDDnJMUV6Q9Bdu3CK92QHWJGngfyHGq18WcnWK28gaShvsySS8jWQE8RB6VPX5W48QpWXdZpTVUjAcBjh8h",
  "key13": "5dtnrWgg7nYAzwLjdMrPTNGjRhS6kYdJdbkXMbLNWr979Ahy38iE29z9QVKiGvbkLx6s72AfNK2xHoYwydr69uji",
  "key14": "4q3BEfJYdfof31Knx7e4WB2h5jFE5Scd7c2W8MEFGDjvhsiNpx7qJEobXN7qVzMhF2e4f2kmRwwCFZxzNXEGpmdN",
  "key15": "3sR9mVp9qHrQMup7LLpwrN6v5hcsQHKzDKpmLKxByjGggRKDrd9KSdsqgvawAcrQa2ofuoFEJnEKytdowcWZTtnX",
  "key16": "41uTCm4WoFEnKbfDfKGdq8KAUr85tMeXYU5bozVHaTuLN4kcZYhcz2yvU3u82pY47e1NiUg5FLPXC6qhZZ5ZgcmC",
  "key17": "22K9jj6Yg27ZyYqyFzZYFgbw5w6CzgyySCgYA2fJDkK3k34RXf167NrfqjMqsA6jfmqJhibsmxLaprQiSEX7drGd",
  "key18": "5QJr3DpvC8ti3YnbNWTD56Qa5HmQRCKTGeuFKWkNNh2wCkmYjiTjjCHc1VRnGoenegrPfveFmjLztmnQq4MLw2P9",
  "key19": "2f7WDvsSHBqf9MD2a9vRRPDyZ5fTzA613eJc49nK1sNpfaHmteabMdjNHbesF3H2SWzjxNxakioKxYuShMtM6dsw",
  "key20": "3EkQUZ3jWDcrSbqZwqRYZoBrR5FZhRgNra4c2iFg3SHUbrSQX9ahqMzqTmCw1QhUoAp8peTcfk7SvsED9payiFmq",
  "key21": "535JZE3WsYSZZE1c7H68LyH5caBePZ2D5CB9PYHRh7WuAz1JFYUYStQevSqr3uj5ogGb926NToai3TRoK34hjDS7",
  "key22": "24jqAjP8uFWt4Aq9dg2dihWdaQzzRKrFJ6BX4vuRFMM5Maa2L2XDLBxBrn1NPLEtfgyzthC185BzkshAspLE1GZ3",
  "key23": "gzh533Wo83L68yVVNrGKbLZ71knE1RL83WkRHGqTf4VcGSAoB3HARcr9hZhcqRsPQKZQYWpivsM524PnL3Z63kd",
  "key24": "2Xz3RazvaAoYvuRuc7zqY8PJW85U2R2cggfpdsDkDxbqWtv7AGpnzJp9SYWEm77eS49rsmK1vSn8pWZYV4uphugi",
  "key25": "NBUypCQ5TSkGYg91ufVraDUncMRqTrSPK9LAkpiAsYHsJH4DohC49RaLYkadeCUt4H54WjiLxaegSoBu2yPrSZu",
  "key26": "5difRUoXao4bfjRFpvo8gm2dhwcX9Yttc5oxbHoYDCYtZmcwcDecXUE5kwgDgxvnyyoDHaBpWxxey5tL9YEcGcYb",
  "key27": "uFoZsrg4iBWyzKEXYV5u3GpjKmDjvPQXJThdX2R1W6pSNkPcpgDhQPqyeGnAsKAFnvEJ1pdxoSyzc9NQ4E7ESqN",
  "key28": "4mCc5vtBSJmiAu3gVWLwitV5A7csabaKCxTa9Yd7bSXBqxDaVnLnZFv5iFXpLCaHDcM7b8FxFoJ39q8tfrRAV99S",
  "key29": "2BhpeK3XWji5Z6aZBPMNEV6Ge6NU4KwwNT6K1pdE1VqyQ8Dt3VhjsVAaEbsTHabMJ6mrK1UBTz8cSYEzxhA6eWUh",
  "key30": "5yYXFFn1F69i9KzWKZhWF9N5BdFJFipXVFDFxQvu4fHXmFhhHG34GiDjCYzc35QqMzJCkzGG1gwzeZnTgwgPdUL9",
  "key31": "LHo3zJUXAkWb3MQjPRhUwy7G482Vcqn8M8CG7KgVUvDfGwynhNLaVYhLTn5bRpKpKi6gcZcPi7aXeqVZXu6jMMy"
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
