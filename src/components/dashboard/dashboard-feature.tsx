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
    "4xsPDrkZ9KhpTzb8cLiQR3nYbrAMdDJV4z3WxzrfWzzgVgbKeosvwZ9z9r3JJcjJuDGiftRvHycZbS1tvRDT4rXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43SZ5Ssepmhvi2RRiLFWFZBiQ39GJCfJwvk7kFk6BTWvdpPcgmLoSQjC7qroMeZStZWXd3mw6JaTAXNdeUttJgy5",
  "key1": "5Vg5gXfDhbmFnfUkMwYdwqAEfUnK31Fpqn4CRpXJ4eQb9sfoyTUUsG7bZCdmG8s3nVGURtGibi17H8gEp9ypFeWe",
  "key2": "2DZU24AmYX2nBp3t4FcWDHHBJKC1AEwbtAB6yBuJUW8XbPCNZfky7aSfmrs8TdZNaxfKF2Rtpo8eT48eSeDPqu3Z",
  "key3": "42nHDoeodTwV2R8gw6FA5Ux7hVobt9wF9FQY5S2CjFtCpt4PgohkJR85SwZ2ra9ZL59BRJrCzCarSkCgebeAcPgb",
  "key4": "2Hb6vDwYaUcummLexDA4g7aRCRGVUEj7rySWeotE674rTckeZyU8GAydCRqENQAi1331r2nnraEkjPFppip8ajdU",
  "key5": "5mBnKEsaCYA1KZhfL7FjANiBifhVg3tHjNVWGBTpegfchMRBuYfm2VfuijKAAyqn13j68VxJ5XFevax7zD6ZDegR",
  "key6": "2vGr98XXmRpjDQVmYwJNqRa5E5aKx2AwXadHe88Z8gZ5FTK9Dc1ZzF7gtknf74TXzXsDXB8KpBTP5KKN3YoqztnQ",
  "key7": "5qwyE8iNmQJniRYXMioKPThkyh8eYYTjYiumNvjNHyxgyckY23BAW7VneEvKM82eTgoDDiEhSZjLpAyqeAoZD3Jq",
  "key8": "27uu9L9GrLJHmjNTEjZqRePUjkvj34z2mbt3Uu5W6nKSnUaTGfoq8S6f8a1PpE5w1EzeNuZmA7TU7FqRhJ1YyrCK",
  "key9": "3yGdaUoKNM5tq2zeesVnE4LcrkXgYUdQJ7B4MbEiwci4tZzNmnzXs2DBAvkn2CkNfnCQvhWAP8zVeVBQ1BmjQkBt",
  "key10": "3t8gjA8nKRCfSZxbKPEqiig58YChXAFaiEQscQ8yqFwBEfpkNt5bYULocgPVoB514WLqw3WCmisxH5GcMrpjsaa4",
  "key11": "4rq84uo1HJGsZMbvHTSQ962sFeELNMNbtCG9BcJ2YtNGuznJsJNcGJMFSziUrcBKhE3NzwCm2i8qRzLbxR2iac4J",
  "key12": "4yKb3vgGNHdzbzmiwQeXnxFJHUGq93XPFrBkc3dQKvDHto5Cyk9Jof3HQyk3qkgvZkjqRsSQvx2Fpcxy9up15XJZ",
  "key13": "2zGEtUnMWwaJFgoHkiVzCxpUNTQfWHcS7BTGwacdo1mLoqQ5LoyaUEc7YwCNhbU2F3zWQP4emG3QbES96k9woJQ6",
  "key14": "2au7VFwB6YnbxAuQvTKPUbUMdgUVgmyaA4WwVsG35CnVnqRfBue8MRDZWMrUVYEmC4AE8LVDPbiFEBgwKNxTqdcp",
  "key15": "5YJVpkHbwUBf6vwcUmhy37FNNkdnsWz8usTq5ewMmstTbLm9fxMayz8XfGE8Aa9muDMdGjGzah5ZMARECFjDMZWv",
  "key16": "3ys9iFom5in5swmRhu7ReCtLyFA93oA86MZzFq9ZZV9Yz13K269fzEjf8xmZo8C6huHX2qfn38Hn8qAGtwthm5Eg",
  "key17": "2i4yUKD4cdQNeqBiKyC6LRnEcJ92179X2CqmQ6RJP4N9ckdFaVHNPdzrWU2oAZeQQwdRkLFpMtBBrmbgtoY49vfq",
  "key18": "3oG5BGyb2t5E9E4pJiXLXGGprmNxQ7pwfGer33EddKXF42zfPPH23Zs2CEjtcBN42WkUhjYpYGmS5H4AUKGu6t1h",
  "key19": "5kWhiwWsmMZDNQFrNvHPu5YYs5jnsmSBHBtjP9CfcedeyxY4q2MjKLpTFtTamMVAzpy6a2MfV5MLcdx3zsPv7oTm",
  "key20": "4n4iqBtkwnZoxxqxR287dm4wUaT42wUNyKJu5bVYLc2Vv9Lqz5y43qPFE2n7Jp51incrugCenr9FK8kE6ABV7bGR",
  "key21": "NZ8gTsTC8HyXjV3n8o9xdwDmYkyPAFhjRHh4VBWTGY2Mf7W324cLYChfexUz2bhhhucausWPP7nVe1YMz8sEMR3",
  "key22": "3zC3xB6DETZqy8cH9LbWqZpQUm328XRWb95v9cqv2xJ9rD85rJLJmJa3mwg2ndKeBuiJaNeLTYtiSsyF69jQbnRh",
  "key23": "3FcPcvCkLMziAAKo7MjDSAc7ADiKq8uPm2t5p43ihhWyk54BzqX3stvyvhPcKRMufKd7gisR6jeqpvb8AvLKJ8Y9",
  "key24": "2cW9WZRr5cB3G4SqRr27XP4p1RRY57VQo6EedwU6K9pQUHxSziRMHusi2aSgpb9Cg9hkD9XrDc3XWE9ybY6mCP7n",
  "key25": "3sjXF2JLFKTPMwRrSnWXFYbd5R12v7FYKyffw4aeKf8CMae3Zfmmt9WskpxDyM5xyN6D7e4YCfy8HCf8Y5AZdhP5",
  "key26": "2U1mBua989moNc1bXijJ3cJRVX7MdKzmnuFRHJwp3cBuyKEVvvhrbQnFbeBEPjfuSQoWSfE4yhavbkjviP1WVv1X",
  "key27": "5aMBVubb2NHsZcjgyn2B31YLK2Nntx87rSaA928cAp651HMZNHoyB8YRR5Dou5gfAewBZQeqSsSU9AqTDwndgtYG",
  "key28": "26QjXrFrHEGKz98SwoQXDYhgUx1hGwjKoRpugJowrmdrA37Wut9ZG57yNguYcmZD44eru6FzhdifPKyn9P8Uky5M",
  "key29": "2ZNQo2GYtoEe7ZR5EQuPqMJs8NRDG3TcUHob9tLiBTV8bVTKRb5qWJoWRnQaecZhtQEc3kQNGb6is1vsnimg4mJ3",
  "key30": "hSHHYWDDL39qi7avCUP8kT4R6oxtxEwNYM5vuicgyX3Ep3UYLG6yNsDsAKjAayrZb9voB8butmQ7VUTfpJXJhVV",
  "key31": "4N1aNgtToMe537ctJVgQSTpHS7JaKvGDW2Az2TqwiAg7YpY1Vjs8f1F3WcuGT3bhAccw22L9fd43oUuZMwTpXgjP",
  "key32": "24paUS439JUZWLS7TxAmzhUwaqn5k68wQxrAjbxxnwpJdWb7SNkys5nHSyELSL6p8nqJFbEF7EWobgqLXfhW2Agc",
  "key33": "5vRwJHAwQjfziz9A2pV91q6LsAuw6qnw5B1qjpULzvKwFuajgWVH7jDBGoQfgbugRSFhJQNyF1vnu7smQczqiQXt",
  "key34": "4vQVHbtQiD85TEuqUT8sqNNDUNDrdr3tuLwaUm8SA7GzzTB5CQpT49QL861yze2JwvQPb13AnxJGPf69AGbmc73g",
  "key35": "4azfGhX1oCF4DtxdPHyfck19V3rcTxy4YVXsy3eZF575k9JA5h8FwcsB5xna7DDqPyZbzfbeuFByRYdFaJFFd3cT",
  "key36": "2nJpvJ4K3YLumE2S7FhdNd3w44Uhkr8QdqvoL9YnZ7geJJF5VacoG1D8P3zQ2E5FUFHFgazPej8uuQ285bUxFeqV",
  "key37": "5CeiKqbMY8BWaqkoWUKnk68z6mHMCLzrXedRYe3AL5SswirikZxPFc1YEbHzQgBNwrasJQu3B8bKRtBfWp2Y6TVt",
  "key38": "3HjfJA7gcJW3iHR9CkyaBv6aDw9EYEhDhShh6B9GDhuYwfS2RQtRw6Q2jFaCv3D7tF5VnXUKd1kkor53kzCLiseS",
  "key39": "4GGGDYaYtK5vQF4QqtHJewLu8NeGGo4KnVTxdTE1y6medtYyHp7SAwShNRRXZVk5vqYfWcU4q8euDmgwDYAVqHhe",
  "key40": "5z3cohfBLphpFdKmRWtSZtNBmBQwQBtSTELFCA2C1ue1BLEuRRZWf2PDML67nsxuz3SMmyxfcB6WNhRHkKQLRj4S",
  "key41": "4MBv4mDLewfnWJvas2gxiCMx4aisVnhqNayTkS9h1BaXgxtwPDPZobhnW7ydNy27otcHayaXTUBiD8WaTxcSHF6L",
  "key42": "5G4Psg8H6tuvdPS5SRpWrAVck58irihVM2A3Xf5gXhVzA4DTHZrxMwzd4LbCzhbiX3Bu4H8gC7prft5Qoq29FoL8",
  "key43": "28gL6fq2GuPKYgTDuiUhqmk9EnhcuLs91ERQW5y85xB897cR8G6y5RJbQPMx1VJcZDPGRiSJPjRmKiyMHYXBhAtA",
  "key44": "3K4ZJrUdXJM6uCot6k59LTYgPRhyB3Y5AdDzwBQ4B6SFfhbwZhKrvLiZkZqRx6WgZfzsrWbSXQvqk74XTduQebN9",
  "key45": "22SpKSrNerM8ay4DPNWqsKfSi1xQe6kaxzvVW85c4PRGGdzwHZM5HXiM6vkTKmH1R2gCcyVhK3MZnvz9nwhWvTgj",
  "key46": "29RqZWVkQFww4adMPSVqBUg29iY75198A4PnNAAMbtbWCxyTqZh343xhqtwqZbYXhEUsgpyaPLm5g2Pv2qjxuGeV",
  "key47": "3ENxiGS53aas219Ga5N9EJDYk17HT6GNfJsnLfSEXYxeRsQM2rLixdJxkeDDD35fi8Up23YCMwqF6MTegcQerrhD",
  "key48": "5BJ1vgrv5dJNct6nP4Z87YpacohqXkjodbk4ce3sVaYN58HigzH4xXeWejUutftMakpoNvuojrkBeBFcs83YckoW",
  "key49": "5Vq3avdcqwQnq6Sxn5ogNqvC5Wqa3Dd1Jnvuyj7zcHsPyd1bLiAKnfHfftzeT5ac3aS9Ui3SZmNPTn7BkRf7Si1V"
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
