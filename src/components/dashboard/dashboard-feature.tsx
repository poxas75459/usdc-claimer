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
    "59xvEotgKZtFxn6cGGbrpMcfTh44GL2E1h9oUhWi5BZ7EWf2PT3famiVTXi4VCy5Q15ueUAHLNpDMtdXu1DzYbr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZksuH8N7uSu978dyfzdVj9BzqxQiZYibGsuR9KBot5WeacpYVeEGo3D25H1JNbFuZZ1MELgCSB1KWACrsFzJ9Q9",
  "key1": "2Fny6PPwHxHhLNQzcfbDnneTSXMR7WWPiP4D7YZQ9Nbq6g1mPCbygEeiFeJKAukKni2MFZTgPA319RFRRLhGeSCn",
  "key2": "296WCGCPWjcDvYxVgAF8n5zJnZazqYCsijogvHZ3oUYpPeCVGgc5PLg9x9qXNzr56buJo22dpcCEauzmgHpfCWQF",
  "key3": "5tjZknvJp7et9RnkZnYkyn9CTtHBjwyVfuzQ7mHML6W49o6qxKcJBJEYWjLWVRcdhQMUWkNfJQyvsvCqXrReeAS8",
  "key4": "4En5jZatrZGeJ2yxAAaptqUFqk5hnXXjUqMq1tqYCtWpL1WACGBthyhrH1MUUJVGuuVnUSykgGUGi4fF1RQNBGZt",
  "key5": "3nighET3zKFbDH4QzPmE4UKwec29ZAkAvdZXo32FKSZYykXTP7CLKsKxSL4UZdohq1J2y3qQKfZdrnpzvLfnjp24",
  "key6": "3XVjN12UeqbuRGfEACmMVsLEXVg2Y3pc8Xn22xSJWNfngveia8TURG1XFVLfv17pV8LfTyidtybqVhM56tZ1Z6jo",
  "key7": "2fqgGxEGuARPnDcvpZp27n9PwcEPMaYkJ6aNqB9fLLYf5efV1R7TEjpm2jnzEtEnxvgTpRfs2BGqizfEoXoZrGVu",
  "key8": "363dBosPw6ddkdN3ps4NGcKJHCMX6q6aoN3ZqKxdGVA455wyxYVYRq14D84eFHxzMCeogpLUR6HKnDNrsQtarZG4",
  "key9": "2zX5E7n3NiMEeCQwsZkKHhPFKVH5RvWaurJzqWDgBK57aPgeKj5m6shLxNJ4fN4EkeASMsSnrzo3N8khV9tuYT2x",
  "key10": "saC5rP2bwYRvp88dzvKD3TK2ETGYeFNfigSWH471t1HA4KByHiwkDc9tkRJTrNTPTUxRtiQy3AMjszpMrVPd17q",
  "key11": "65q3ynGT4kMe7CsJDPAADx3Y9PLNUN4apqfV3Sy4yNCrtj8Nx7rwhtJiMPJwZQBiMjgFaj9dXFbYtms8X2jDaw68",
  "key12": "56E6kvmZT4uFvUXKNbNXoYQ3Rsfncx5fFXywGwk7QDXk47Mo8LWM8ZXYjp6evCZgPJWeDz6eZmsURdc2k5NVStvj",
  "key13": "54M9B5Np7KdGzqLYzLrsDUbbtHdbRk54kYQi5tWxYij1Bwzn7qm3tNm1a1gdVYcdKvDDHvu2FNpTqKFQTUNupSQp",
  "key14": "4umDUmpYtkfTYH5xUiMXCugtJXd5rpSUWGAsK5TzycA74arhZejoDH7s9H9npkt3PVrm4qBfea9QTxd3j4iJWBy9",
  "key15": "4WKfDCM8XeoBkczF4wsJkxS5qyg6oFqwZJsELKE29mvQ8h2bZGzW5d7tH4jpFZmSuekuSFzkYiXYumn4dgjRb99J",
  "key16": "3U3cPnWknAg53PDvNs2rAim1JqtTHxeUP8XrWBhdvCuSjXSp7HSLyQ4ivSDjGq1b7FnNmAq6GrF5PmVfkTUS3Rih",
  "key17": "3wHYgHcbWeL8zUNL1MTiRk5wCscLvaRURS6dR3m5DyKX6JVxTf7eNxB6dJSK3qhKzmBxAuLi7HdaXk8XVMTo5PdE",
  "key18": "3nW1mzcD4GnsYEh1fCpy2JiJuYBq2Wdu81SvPiMhT7wtnwqt1DgyQ2CBt4Hz9ZyTnXNrbVNs9HrVQzEfC2jmW6zF",
  "key19": "3BrSYMw19Ai6pefphvf88Gcb6FgVAFF2n2iYp1cXYbbAcc9GnFzP8XFvPJgYXpMEyNFjuphgkgYGpkae4UbLPXk3",
  "key20": "62W55kb7f9MWtGvZjAMzqpjRYZpwdJBrmPuJqTFftqcfCPe5adMnH8cwksf39FrW5hJavV3pqR64jZqbukPDpfRJ",
  "key21": "4eYkzzx9xoDGRYnffdNYrLDTf7SpTwTCq8odG8LxdNYqLHZzXe247UweT5fHPXnPNw2E4WU83DmDie9SoGfD4cyc",
  "key22": "644bPqRnX9peFzFEwxC9U1vsK1Tm6VDkhCDDeVW7RT87LxLGA7cGqoPsGyJADyQVgfwd8htXy8QKNKG7wUMKfxQJ",
  "key23": "VkL49tD4x1eZYVXMq6dRfL7utaLmLMcAt9hYyFztBZS9bacXhk7eNwMVMJeeqf98uwrRAK71P1SmLJCGtEWDrJL",
  "key24": "3uhhZtepgvEyxaN6Qr3ecEDo2nDpm3fEhYAdG6emURFTqu2Vd3Bsb3CciDePmD1fYqXsvgtmPzHstDENUUJoa8ir",
  "key25": "86EhmbhRssRNTvUYYyk144nuLSC2mwbQvjinqNxuXtvtPpUAriaGSJ9Foms5wMqqKvdFBgovnqEkS9Fm7JoTS2E",
  "key26": "2v5EBGh6kxERfaSeEx1khhicPiRRUA7zoF4rrRiqViMr6H11kEsPRPjFZERdzHVaARiyGY3RiEcJaAyxTFWLNf3X",
  "key27": "624U3Fz1gXeQrFaJEnayfcddkNsDqubYk6jRnVFb1x6DBHE2Kt4KpPBRWvCw5z3zysqxrZMcQbWvh1X46oc8njpc",
  "key28": "59ePFZjV8hnyiq5T16WYD8oyXvzuAo2KTp8AfzB8UbNKppW7TvZJkHxE3txHWPnKvDMx2ej3GZKfBJ7CCuhuan7u",
  "key29": "4q3tD1amkK2GfKjNkRBxwd5oxYDtea1m8s6Yx5w2w7nJeWM891kRSzw6pXXCKuPHV19uxk41DjoNtkCapbCAiboj",
  "key30": "3nMV4PGBJFXGt7B8AJJ3sqSwDRkfYj3F6D2K3H9puvFzisHZjopMrPJDgmY3ukzaNmzfPS22tJ24LJV1DiH35QeR",
  "key31": "hBd261A1kBav8KfVCnx78fxGbAvzNY5GnZga6mUZae6wzHvJiDX2oTQCBJ3KARDp5517Q9s27mKu2RLqGMVqgdG",
  "key32": "3jMiC1jZ3CkxHz2H33Qsk5z3uQd3hBw9W6PBJBJMsnt6hvYgU5N9UZNAGN38vvztY6xe1p4EtewdUt9CXUFqRq5k",
  "key33": "3NfQDGM39uG45x2Lra9ZN8zZ4JS12Ej9KtZPfedGDq6uTCZXfiBSdCxJBMfsd4fBhiKLe4SLUY4n1sWPbgitwnMJ",
  "key34": "4GZmcbQimUqu16fdarWafEi8RtsGxrHTzALgFUv22nwPUSQi939wQTDGoNpQin4pxht2gMHmCPdMUBWi5EghdMsc",
  "key35": "2dT42Mn5uyz4SyfwvrHwrvzU4PEWhuURonsL8x7nUVVVL3qvymvqpCfTJywVy8DZ975pp7mySXaUZSKdGkVbdhpr",
  "key36": "VJnSeoDtRdsoZKgFxJaJ43LvrL8zVJHXwurF2UEPhGy17PpovByYjAb387FF6TACt97A5CiNe8LnnHahTcb1o2u",
  "key37": "66Ht2gfMixYCUunZAzWnC7aa6dSibW2KvjGQMggfEUd16T8QSpksCfZGRe4sjcmYLAwZqpY9udJWSJkyPp2BDzz6",
  "key38": "Tn65m9DxF3z7mFRUFWqoNy9yHP9meSHQ1mPNN8zEMHFd88paKNwJh1TFe3tpyEZfWVq4XfV4ByVhupk2mvxFG1H",
  "key39": "54ko1hKwewdAP815ijRVfxreFiNZEtNSp8XG63iXhGVNLuASUKMPVPUpkot2WzLuVeHFN166ERGmJ8yJRK4WuZ9e",
  "key40": "vU9EjSp7FgLSiFaEmhnMy19MPBYixgqnKCknBXmBPuzkD7oZLJjnpRq4RQmRd7h1iGznaVq8ay53yqPjQqjpmHn",
  "key41": "2ZCzFwjvHXbZwKKH7xkXUxqftaAt94jgYn2vq9WEMZydaKym86WyLjKRABwzohDJoZf9RzHLcc5JS1bi9KeC7u2w",
  "key42": "2kBtvJbt9pmX5Dub9R84xRz5TqdX23wQ6sXLUcrTrz2k1QE7vrUz8pApdmZs1PBxaZFsdS4x8weKvHEdrTYULrgJ",
  "key43": "2gaWSdYhb3C1S3yhzvmFwXp2BePfomL4MzGgsoboSf47FSs6bktHFJw5dmavxQaSegPFoeMTAjqRTTDvT5high2i",
  "key44": "5q6qqwiTCEakTvP7v6Xo9acK6dTVkUZheavMYHyy6JzxjC1Qh4enG1bQe8RUnMB2tQzjkRTAp4ZENizVQkD4gGkC"
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
