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
    "svJmqCxhaPA4kb4iCE5vHDWhi4WzJ4XFufHvdZjTBEWRYpGhKUeYo6nxX2UzoenBej7VVHQJd1DYvdqaHrn8fdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CqfGh6WHfvjjTw1BEr7YhQv1oS2mVz3j8wUsxFhchT6K2ny4ctqkdTG75wJPw2bL5jsSiazmVLEtH8DxLuDg9f",
  "key1": "5ZV6RNBqfeWVUdagQbSenZAyxiA3saWgxDaQdL3QWgoA3AiF7GggkWd61UaYbh4VUxf2uhsN9qDgVAKp4MaiVpeS",
  "key2": "5fn8NPd6ubpKyAbKPAGGRYLS2TvQxNc45SABkYSjumKfdomUvgBCjkSLdz2QCxUf3vDhWVGehiTrgDbid8e3cLWN",
  "key3": "2upmfCKjbhpkjQa4A2r7eAxfeYVs549ZTjPSwqCKcApErpPzmWmUC6WfukGCAmMfv5w34VBC2YdSTSunBRa8jZ9Q",
  "key4": "4bPDnBwNaDRR6fC9PxZZALMate1ToHjPghXtkqfXbsdUKuLYtyXxFvhuKxxTdgPZKsRRkRqcTk9tQqPo5CvW7kAR",
  "key5": "5FSgFLLE78r3jivJL9W1gv9uLKWfR1WBtvaiCknZ7p61EbNLS836Ff766XdF3KrMugL2nhxkq6wJ1upFv7f7oCAh",
  "key6": "2ZwoKXWD2ec5Y5gAnWDjnWLNvGLhZ4wL5kubyHyRRxZbBWPoYQDnoNKESZ2ULP5LXkmydsUDhbjHP3HSkGSKeXf2",
  "key7": "2DqVnHgZBEpvN2zR473HhzacXdGG9mFZ6uWaSRsokSZe7Ckhjxe4dtE6GfDXZM7S2df9qfCFHdHvy4up5XXhCCMY",
  "key8": "4iRZdacDv6nsJb1tgonMEjBh9Tnt8wt2BQ8EgaP6JoFgMTdD1HbeJrPvCfAgDQBgsCuDBuuDKDMNsXRoDbCAMpCc",
  "key9": "5ztWWW4tYZAJBvtAkLrDZKzk8NcgtucjC1HgL2dzNA2TsqWTnfNAbcnoA3e9Go42NzdM4sebZzU4AQkGbcDjipsz",
  "key10": "5U6qL52FZeJ51rDCgAtUS98KAGH7wnrMbPaSPuoXVy9mFS2hJkwiXN66aSwnoiBw9nrD5QZtzURWd9QAX1uqoncV",
  "key11": "4BGXk9eA1GczUKyNN8cbjtuRV54jAwxeRdjKm5uH4TxcvWGMNrGT9egNNvtwkhp3avQbue7Fpz3uaKf9zB5Zpxzs",
  "key12": "4Nzv5CSAMm7Kc5US6ZC7xv1rjPUCmPLg8Wf38vU7dBBcUUmG4fpSihXDPpWdRqDcCPDV6Q4SMrUdh6HkJqhimHtd",
  "key13": "4MuyMyK3LL8FbCNcRfPhSqwokaqTauZfWfPMedqKkByN8YAkDySdXteFfGfL58oQbdfygvo9skwMJVvcYCKt76UA",
  "key14": "D2XzLFKcXpDimHnpHvRPQfoJifBUfhHnALrtHd7NPtJUsPchZBJuu95e4ULGTrsC697ERkYh3bMQA8dJb3jBu4S",
  "key15": "5umyWDGuyqZAjZnPCnDEV7bcF3oBkwrx71wvau3wAfifymfwNAhw7TE9tejhmYStprfPjRdGkT1kayGAxHzgtQTM",
  "key16": "51jmWzEwFHCjSZMmkvnsP5vApNWSoq2h2hyZW7RgpJrTZvuqkJN87pFAKjY3oQEHcDXT9KVSQ9e844tbAJHJhiZb",
  "key17": "51HCqtK9K3biwAQaqNS6hTvemPJ7GSKobxAtyA4U5Rr6ByrMndWHMFJ1eMncqei8mPCL2arsjYm6z4vVuzuyoAxi",
  "key18": "3AyeBme7DSkjMNHs4MYoWTJduTXph7DKwvkbnwwZh4XoBsSh8BSST8m1sNndHYvfJ3cy9meBYAWZAfV7PuMz8n8W",
  "key19": "3AcdcLCpnRceApKRvihFUZ9bBFnD97zbQE6V7QPpKoVYPCt2D5gg7a33g5U5EJkqfT5LHTNmwQJMAUKThsm72njn",
  "key20": "54kDu6yrEumLh9xHtyGoP3s7icLJD4HEWSqi9MagNGQCLjtzZ3PZwnfEec31GEUyxsV35VfGivGFWnzn9y48hY19",
  "key21": "2Poty6YksHSnFBDWDYy5TVh1mhk51Ynbd8bpxBuiK48Tzhsn5pDD7PCV6U8iDEM5Qwoo5yR85jpuet94x3zf7S9e",
  "key22": "5ppf4LQo6jsxeasPEkNVq9m8kXzADLDXtaeA4E9N67v14VbuHt4i4gpsuENo8p1UnACivobf19p31Qpo8ezn49Yw",
  "key23": "5BuRMHxXGj2dQU7y3iH1HM6JJv6S6rht5HERzCzNikA3BegRb6hRVGRZN8tnQgGwBzbYZYNBiJ78RQezKvujEMq4",
  "key24": "htF23gPSUQCN3ArsuUQANfy324g5Q6fJNc4DUbayToYU3fHLEPzck1E36EnPrD98LD3wsHQSmV4YbDcBks8UE3z",
  "key25": "PsdWEDqAwvaZmHfn85YN3hwmeUwhFAqCj28ig34WnKqATe3fRVEptL8VUXAqTVWgfWacZ1e28eQvtHM7WmhvLCy",
  "key26": "4HbG5wsUX8dEC8N2VjPfwQv6dWek7ub9ATWJdPC8yHyxQCh77YNPdtMoWjjB3iFSBrmgsDWcs7YMrnsVPJHys2D2",
  "key27": "hx1Euc8wVZrLY59dnuCqdh4wZdaxxTzfqMy2n5dknKEbHQaRVGXmKYetXq9EvoKD7MYbrrf53H3AVKhpg7Rr9jL",
  "key28": "62PX3aPFhz1zFehH8F6j1oKEotES2W4qsqVd1tjQzefiLW1JiWsyNquKaKpkGF9fC5iX9ow2LCUrE83r8LWud2TP",
  "key29": "3KveyxbvUUveXHBLxXcmECMKU2xeciJNiNRmPHkwWiGnR82CiFYCj1Lwbh3FFgrV2LqQen9aD23mnH9aVrsEpvG4",
  "key30": "5Md46UqQqjDkUWSmTE8xkkKnS4ezMW57CxksxRo6jwGsfTGnFRxf2J23rLq9JtipDgj7vLorjhVyv5XR2Fi8Praz",
  "key31": "5Mp1V9ES5Q2wQaKYtNQd7KModfU4HTu32qNH7Tr8QqVjmD7Rw6xvCmc7v3WgaLEQ7whk5Tupdb5Mn46WLrfPLq5n",
  "key32": "4uFGE5KveeUsSueRrT7tg47atzxJMHAWtbHRGoWfFTJQ6u9MU7HC9iDFzptjt2NmUMuBJ4LB3dZRtCwcY8TXLnx3",
  "key33": "cXtVLUH6ZEWo8hoBBXEsaeLTXeQF6PrpHPqguVTpw9FKbGpJkaxRGLDDA9qwqX8EqsxMLwENH9mXU5692SRtfSy",
  "key34": "WDtS4xZZcLsbAZG9ae9pRFPbL3QTREiZcpr52aoH2iWktak4vM2BiSjaEZuVbBN5EW4JykMia34u6pXvMgi3iYg",
  "key35": "2hQryjk9hJEZJEAV8Qemb4uayKHwvVDdhQxnjZuvGU7cjfBo2khbTwPr4ksKJUDuRDZ8Pu7s6T5DcSVfJx2esL7q",
  "key36": "HCd5zLu2H3zBZrZyj7sdkMGLYMjc1wwgWutPS2uTiWfoxhGFvJ2widjj8JJq3crZEupxhX1ZqNpyor7dtw8rnKZ",
  "key37": "2djjqihjxpWWDjymzMSiGTJvg27DQu6zndUwBp7h1vgZnE9dFWcm6NDY37mBaBuceJbKCiob6yUEcnqYqnH7NMYZ",
  "key38": "ygVuYaVZMYQ3uMZJCHGnD3uz5EgXJQfz4CrUuj885xNzLfFYQ3wRyHDR4G1hUJ8phnNsiZHjmzCqBUBcJExtvYM",
  "key39": "55EViWzSCP1o7ugqubvjwXaY3CWp7SqryQ9M3sgiJuCMh9Fhe99w72c85sHkBifqYL7DVw22ia9dB2fFD53czmGw",
  "key40": "7AnMk3TjTgBKtTj8hDG8xqDiFGHzZTEd1L2wLZi52ok7XpVm7e1amEubiLvEgs8TXHVmbqDTzLLwFidx3WAUH2R",
  "key41": "3q5uoHciEBjqXB9G2wqdSL1emgwrtzBMY8ajhVRkR87UmEMsyogBh9kESPeFwB3TT1KdBeb8xf9KtkHrYw7bovTf",
  "key42": "UkxT7JCznrGhP4T287bSwoucmisntPUD9rv4mGbpeEXuHD1McxTGL2xUEra8TJdNbH7BZxZU2nAgaQWtmNwBePj",
  "key43": "2uPpphSdav4daheDaM4ebMYKgCynTz8FM9pYhYbsZ7d4frjqpb4dyL7z3MGHfjA2w93wCkoFaL1NWRsTJWCYEvzg",
  "key44": "5cq56V2PJU2V6FEcARh97WztoJF4YdyXM4GpZa2oyjrGDiPW8Jec3hKgHmpSscJq2vYf81j8KPRgaMEQkUMivZ9N",
  "key45": "fHNHjybYpmHZLrBJ9v3wayAnNMDAFUxvDiwf3cBDmG5D5kBp7dh5EoigN5mMjrthncUZvooqS9fkhE8zZ8ow4NS",
  "key46": "3snAADYhPtHfTjQBRoLTP4rqSMiowYqw7C6qvLNzgoRYrqeu4xcLdiKipPwRLDDqTHECaMdrEA6LcZzns4Hb5Y2D"
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
