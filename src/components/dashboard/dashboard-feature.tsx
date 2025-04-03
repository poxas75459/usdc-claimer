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
    "42N41gTWfBFsh9K8Yft4jwUpLWmv4iP71XFyDk3GGEcBX6EvoQdW15csVczYcSHTbma3kibKRtb4zS9EadWLZEtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGMGUetSshCMVnM8rYhW7phNv5ESLsDmWW5unaVA7hxqBRvaqwULLTfRet54ySXADgFPgfVAyqu5hJwv9HfKGaq",
  "key1": "Pe2GcbJVBMpXHKLiPiFDUeBWjab8cJodAyKWXwCS1JSTWAgdm7Tz4gPJGTSsgFR75tVRd69uiywXF7L4vwBTwCk",
  "key2": "21DB6yYN4LDBwFjirZDaCfWuJHPDiBhXP6yh5pTqkKbUNVvwg4ThcvG1jVEzQxfAgdnL82DVd26uoADstADkNcKV",
  "key3": "ATMNhmF42AzDtVD7F7jShZMsY9nNtuCswxyiUTeQkcKzVGPUNGLZb6tBVcfj3xSJiTnM91yxRvxA9c9Sk9njMg6",
  "key4": "4XuFSz8Pw7FAp3fkmQUKXKAbnBAqQ291wRkMYM2q273i2GDVSHmug1qyHtMnBMXBMtK7Sgb7FgbLPRqZ8AR17cwD",
  "key5": "5d8zouFVEmavUdXr5HkcVWgN9W9SJg5XFH9gFpwxDTa7NJdFHZ2UMFeS6eA76TTAbxydJp7zDbdXHLKWgWBe6o1K",
  "key6": "2X8pVzduTFBrN6477zT6AfX2S6PBskn1ceg91c5vgNc3TvZQSS7kA2X4StBarSoiHxyugwEZAgj1wKWZpjXsppDx",
  "key7": "51j2dbJE8BgmB6JCMQ6BvKCM6YcyA9QgVjy744sLvBkc3BR3VaxXYGPY3p1ZC361MSagjk2kjfy8MvXMxFmzYvJ7",
  "key8": "n9Tn4DfehngWmauqxkmcLhPxNoLoQsbHpov9cCkrSWDkxEAUvdLgHryt9RaB2djtQw43eRW3SqALYT1Zz4wT1Hv",
  "key9": "5tf5HQ8JijK5cKuGqa4c31CvWMjATZX9y9HFJqw1YavFgBpqJyFcQocDpzpvuCzqEeKqmuN7XnfykWCcxZvG5CG2",
  "key10": "h6wfDtULJYJoNoneuYvxNa6EojbPDgv7MNaeKERz6EgC2YGNtZBvuvj672GR6ZrvraSMPczufXX5bxgbc87RHmC",
  "key11": "2ebr2yav1aSVXYjNZNLKMsP47R1y6hpUSohAZe9M899ZorRuuCdNwSRswyGS95QoL9NygdCNmSnfh5BLPthB94B7",
  "key12": "3R6EUUTq3q7irkhhXCLgckZE4TQLaPTHnyLsboSBjECvZz8WRE8S1Q8gkRAHbvaDGGUddiWiqmLHEYa3164qUGGe",
  "key13": "3g6Z3SqjooMzP2GrN8QqrTzvq5uq7i59mEokm2Xd1z6TYh9KtLg2zibowdo45NzNHqLhG7pdkUpAmnKT7o2Vvoa7",
  "key14": "pHYxhrAcqJ9QaBV6DJ4kzV7J6nP4Jiadm4XK9nxWFty144Gs8SchZaktcArsUJpYPFSH89LEpHQBjVbLAgGviP6",
  "key15": "oZnV2Z5KURLoWEuBcN6ZLDBhM23bytX34BRveV67mV7rKTMLQqF4Rhhu1hHCDpgHiBSEBocTwMjQnUgSKNsx5z4",
  "key16": "46fXJ6tNpZgpaNFUrqLp83WpJw3RgHHpMBCumB2rzjADpG4WFCWg7vFGzigHereNpxc5xsXwstePfqYWXYJpdRAh",
  "key17": "3NiCEmzMsXt8zEbQdNHnCmYoZ7Sa1rdbWRkWvUMutWuUMEXk7hncRbE3Va83DB9KMGjHs1zc7o5KsPzWZQRk3Ng",
  "key18": "CwxqWEHr8RVWJTDi6NrJEjipCGN8udTsbmECRALGwNHJtN4pQX8916ciRhMbYF56wvCMoWxUKj18HqqwTbUPdEv",
  "key19": "3kQRNzJ4RHDJMxXRD2TpfXft6ZrEADeLwUjijEX22UJ5DWGnLXnH5cqBpxpoDhmD7nN3FZmdbLSjRgpUF9XU4uaf",
  "key20": "3vgMvcm6yr7EXwfv5thdck8h7NgW5mLV8rjYF7izdbVutugWBieWovyKeZHrZzKFFewrmKURVoP7atNEg8KtFsJD",
  "key21": "4w2R9PbyY6YswxpdjpELEreagnisXwRQV9cL21bTsj2ivYBuRfF9zCnu7ZoKauDeotbbj7skLCtcXPy5emYRHr69",
  "key22": "4WAfVHgFwPFyXMeMNxC42JtztZxVit1z1qbgqFkFXfkJyuJSdheMEvdhPy4EkJ3x6Bq42aDAfRKfETkTZJLsoSju",
  "key23": "6sZyyKJ2rhJuaqjomH2QdZmyCqjyupq1nMhEYiQVA2gaHaj9y94uxqiee4v5JjcP1B5g3xVvGCXTETu75vFCNdz",
  "key24": "3zXzNtEbb7dHmS1fzakFbLt2c9gKShoi9F1ZpG3WUi944JwJMaC13sEDnzXoCx5KmQuY7feQt2niKwVLPaL5mbeS",
  "key25": "3N1cFXzZDQoupCprmViA7emE9omwwYHqHSAnYLish9gdQLB2EepRPPy33DA5XW4p7gmCDuuCDdJtxrPxtk4gy7fj",
  "key26": "CwGPgj2hBRzr7d8SnB1BMUSuH2T8VuZp8iRR8CykhYHj6eNLGbbxhEAQ722cAVpgZBLEx1khp3eBTjq49MQCUH9",
  "key27": "3KH76WsMx1wdVhzNDjSmoUDreeJtqbETMYKd6GEtNeHwJ5ik8dR3mEB2pnfo78sa26XnpLYxgGjRo7iRZSfXnZNS",
  "key28": "4kFQ7ngtGu6pXnBchb3R4HnXUPoLyHFc9opbnBvtr1q4ZyH2EZqhdMvQTjaGrdgfpbUqY82TzuspbU8FKkfyp1v",
  "key29": "4virLpZEiYkjK7ypj9yGfMUxXpLsQynUVVEzNkadgtm5UkfGacx3WEYvVeBrLHMS4a59QJTqQFEYdfgGEZNVKQEj",
  "key30": "PnYfonDjsH9QefVL7PZQAjvuLmW1fpDsMMbSBLJbwcsq4AHxPcQ5oMoYK1dFvGCF1ruo4mdoD2iV5D8zymgFiVC",
  "key31": "53sohM76ME7FqCWrLHxjQoqh1xLTXnbnAueFNGjGVZsXqnKXXKPFG1V1dftGetzaMFVRkRTcjGthqzUMcjUHwQY4",
  "key32": "4VRaoNCSbHW7RSnz8sh15kz5ZkysPdqp6YFuLZJvS4q1KA6QFyJ353ucMmzoJnuDBWwuGDjxd3dvDp7aoe9AsANJ",
  "key33": "2tvtBhdj2rGvJ27uFPgarAJ8Tgmz5FFgnswPTcEuY1Zpsd9gi2gT2Vp22JLPjg3i9fCAdeC1wA78HYfG57S882ND",
  "key34": "5UMBMP4PxaN4K51wfuH8DP7BiUbRRxbXnPHErezEkbZYQZbKbKZ7BcZxFEShTE6PSrbum4hF1wEiz2MAJTy6B6XQ",
  "key35": "5bjtu2R7wQpNn3USbSHwk9Jn5zCu4nd6vENfVtJ7tFbthVhuB9va6iZqLaCinzAWZp2i6oCeBgrDbX6EJKmQ2uUj",
  "key36": "2W69rErbvKRTrXikBEURhRipj47nRDQn35auk28PNkNWxMna1vFUtAkW8BS8czHxfKVND4SXuPCVavgwGor14LVc",
  "key37": "33BieZFMuqTvoHEuC4pKirafyZ1T68U7PAHqKrFBpRM94dSovWrZnBb3ZveHFXoWj7mswq7srPukY5BHfKHtdxcX",
  "key38": "xSqP3FaEDZVuktGqXjFfJpBcR3DwhMf8UVW1VDdMiCQ6XQJfe6XRAfvzkHQ2GCXEFdqbvr3DRGcFTDA5Qoeavt5"
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
