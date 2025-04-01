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
    "2mB1G2bSB7Mi18UsU35R8rujgmWgAtvfwPxWxhufXJebVbzq8caK4PmGC1ARDtwqQcM2TvkHfvuidvSWv2LMVXqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVGVxogJ5oycX9FwyAqAqkr57ttM156f4iWLtPBDhGG8kJawTNJMLJD6rqFW5JtE6csR4AWi1C99Xy5TC4fvAAY",
  "key1": "4bpKGo7qBK2cAdzTrZX4zj1g88RJXd7GJv9EwQYFn3XaGoDf8bEBEuRAzAy6CkNf8a7iUakzBKRm21wMMjUcP5bf",
  "key2": "3mq1KCmUv2TSscALJE2vsKbdzzbNMeFRYhtSybbqZwXh75CCCRfw3rxD21wLdXZ5F8iKMdzBFhR7ZLeL5mitCb9h",
  "key3": "3YtwW8piuAueEdrJoYj19gvCttsvL3f2cYyPSntsJ991GqXr1QZFpQyeVAMbgas2S3oCN1qMhBwZ5Y1Qbi83g35z",
  "key4": "5fZ37gh8ezC4STuSShsFeMxn4qDtjcoXsuukFcSRqTAJZQs2erLEgmLUDVnF8TVV4kBxGnyNWkCFxo4RF3gsWJ96",
  "key5": "3UyA2dcQXrTHgUqBETDqphAHU5ckTXmaYfd6yqKUWKDYahbKzNPzpKsNeULqZnfLgNiwv4ZCwwoW2jriy7KsioVz",
  "key6": "5wYU2vw83k58kYwa3WrJkofoMKunvwV717WtBQ3UartDaqVSchf65qx6szGDYWnSdVRVFUYpPEcgFMgFyCQaqKaK",
  "key7": "4kiDXtM53y9DYLcyr2LTPwDMKY4Ejwq8BehN3Ty32eAEdPZpXNCd9ZZeWVzQxycQ7T9RuF9Xbo3buQAwJVqmydw6",
  "key8": "2rSTcVeGwMFhaGBzymyMPrnt2iEgLnuYfZYdYyuzZwHtsAh9fomF5TbBgQY5uqX8ciSx1oTyyLK3pjt9KBaRY2H1",
  "key9": "67nZwK7ACgeTxwRNxzvhbnVrFsUzJsH88dfk8fzK2EPjhDyPmykL5RZYwjyC1xNBq5DkLFYJKtEuHUQWbXa3qdaD",
  "key10": "3R88nt5evC9A5VcVT4KSc57oFM7txGJcJCpDr1S39geujaM4FhTuLYmBJvWDTWpF9NcrKzmEmcR8upa8nou1Sj4Z",
  "key11": "5No7tzURi29d8Xmkwvzkd23iacemHz3hwduBMdqZiuKMhtbjZWXx12JDtZJ9VZkXjK3ch8nZ2kzKCyz8xJicZJmi",
  "key12": "5hLxAgXcAds9m2XANu1Vnm5PjF41wqn63VRnBz5o3JLfLZMrb74PDCXFikQSA7q3QLKWaC6PvG5GGRGA1mjxR6U4",
  "key13": "24sq6RpwzdbXx6hmksQqPDH5oeYDJHu3S3Aro4XN9jeAzFQN9iBVE4B5Cm6TE9ApN7X3273o63XwxQNDZRgXa1Xk",
  "key14": "kohvNjq5WmL14ojrR3XG2C244KCEFbQhNg8KchNsD8SFrhvtt4HA7K3FVoNqYxAZfkhrDGdJQMQ2pUiQYf9nCk4",
  "key15": "2Ay3LiniyotDaGbbcfXRVRYKn5hrAfpMpCLZ2XyH1MNpswo3b6LPDiSJveBg13vcznect3jvwoRUm8ukkpQhuBLJ",
  "key16": "3ToU2YLRZobZa9DtscPpa7WTqQc2EzX4JbQqSGxGTZcY1bSHyNs5HQ1NojGJN46MbNnhLb3TuMYdjs3ZCFk5FTrw",
  "key17": "4epaCnQ1ygGWW4faFkHwE9YECJMy66ysY77hPmDE7hrJHvfzGow4qoxKotDwJRYVGuvXCiqrsXTNRG4wJfTJqgLR",
  "key18": "2kvDgyfsTMVBkaQ993kN8hWRRKfhHDcrfEKcwFkissXGWabcZoFjwJzJ33nFDnAQygkQv6X6m7i3ZpPhuBnupcHM",
  "key19": "2sFDk6PgyX3VLKp8iqgSzX19dw3WxDXwzkjGpwkKenXcDN37AEa5XuiaAZiJHDF5uELhNRqivqcfoD6YoZCXXd3t",
  "key20": "3jJmP87iX6eqLzZpVn7josTJB9cr7rVJbbweq4UV64Zqm7cvdPZeNqX2qwjEboQQrKNio1A6RFZLFyjuAzyZj5m1",
  "key21": "2mv5pdy7s5LAghfBomyXtghHrmppXkRAvKMQgzkWpBpCQtGAPjPSLvxZF1wooAgMNYwAc888d3Fj5n7gLZW9p9yB",
  "key22": "3mtVN9yfGW1jQs4hTrKGJUjTsRNzckoqDRRPjoXUA2uW9WzkHqfUqneG6FUuaPryTT1rKqRH1MGF1CuDnmq4AzyL",
  "key23": "3dS3Dq9wtq1v23DS6zPCgHkYUf5E31rTMMZTPdEtemDjYhYJ5rR4UXMXnprC3pibbfVqsqCMnr9hW6xxH9WAttvM",
  "key24": "3wPtS6MVKt8r2a9LB7CbHRqfgAj26SxyC7UceARw4VUkoBjnhYCRjNCfntkhPAJxmCtKgGPed77wPfxmhsirf1YW",
  "key25": "3peRpHxCs6J4nUnZKepnKJTxfkWUeF7LnPwxcNw94F9s5DCjNrPkxRLZsyhJQjH4uyUmPVHfBjggMdqATDsXSPxz",
  "key26": "3V4v78zk4Uxcg4tbiwHh6PSih8EiQvP91BTt3H2e6UwdUe3FcYBed2XJ6o1pe4NDQFheidTaLmd4smk3HJPGHJgy",
  "key27": "32jXs1nrLEbHgyRgJB8thYkDHi1TqUNvRJLiWEjt8v8egjhUegfGqYCgJXEMWSysMnw1szTU1u4nbMvfQmgsY56v",
  "key28": "5cF6ofycJ3AA1u9YxqBGukgwKWq7vxg78rwSF7jMVxQz6WgBsvCmbeE7bgmE7yoQ3mFurVo94LZJL6tY74pJZd9x",
  "key29": "udweSzdFe3gYt3kjWwREkxoC1KbNZcSsFhyV8JJZDgPR2nWACMSHZb8zE7Z7dBgiKq12BWuunHRSS7xXEaKudxd",
  "key30": "3XEpJw7RR4vHTtHXq4CfDVUmXxkazpWNroSDLN6qewQSvJuroe7dxH3rWRsWMEKs4SzPFjVdYLFvB4tNwrjYUgb9",
  "key31": "2tfHP5d8MeWsMH9gcDUvUR3G9AXNTEvaijLUGR8uEaiEEkzCjpXdF1XSL6WjEmBZdzzT8pRQnu8mPzPe67SzFEbu",
  "key32": "5WErkK4q9p5LLW3YwTaB9Udc2pwcxWfdpnieSzyNg7qRUSXTJM5RgfvfHvbTcj1SvWxi15qtYQBGxxeAPJCbDnM5",
  "key33": "3NjTscFLdV6oG4tmsAB8qn445zck9RhJwDHDap1SacMhHTbX4Yti6KGNomgE3PyRqg9XK8AX73eZyV5iwfKbYh9T",
  "key34": "5366Ym3XZPcFiWNWXX2V3cF3ZxXWizw6iXobJfAzk2NYGXNywWr6aviATsi5ZzjKP1ZqZBE52WfU6yCZg4e3Jz3U",
  "key35": "3qVQPsPmm5PPZMDmqXKbs8TxDeCpVKPsF1zhsUGnYfiA6VTqqTsyRTpvDuxGThqddpXBgMeXYQinHBEKWqtvVmgZ",
  "key36": "2aGuRTsg6CuCteLPR8hpRketDMhpvB4N8rhsiJrAPciGKa8p7JaYrMJBN1yqaqycRGSr2sSLA93i7ZxTiyTkh4HX",
  "key37": "2P7bTs2JcDmcvXgX37XvbNe8tR87vRCGaLETPzn89V5B4bKaT1AuGyNrqr75Uj9S6Bku9tZzdrr5xop8cAJ9NRmk",
  "key38": "3AC4CooPN52UPB8MAJghZxXE5dhbkZko5aUEpGcfqSBD44uwZ5XdydhWNu5uFFZHQZgTPrPppoa3FTFNA5t8L6gk",
  "key39": "yW51qtCPGqPpkZZhjJGSkKvXTj7isoX1G5RGywrasEFcNiCKpFYFgHjdrP1urrLtuRiaN73TmTxDkyQ7qrR5AR3",
  "key40": "4mstYFeCuZoW8dGU3LX3oDQBicGRp7tubbcyTAkn2waY8a92hAsVYaJ47vHCwZ59M8FxRQiJpXjwP4qXpG6KSUDu",
  "key41": "5nXWY6fVvXLbNJy59FR4zbuhoBiRoTjXqgFcniQUz34j7NosbpusDBNCcstWWBayLLQzeyC4Qb5g4voXDf3rYCaz",
  "key42": "4VEVSoX7bB53i82abhbo5wQFfcechzuDrxcpbdA38zKPLbjuxce5pNBgvxeVbcbAGABcqBcEMuih5n6dSgRjVyjs",
  "key43": "5BSTxt6ZGezZCVqnnPqohVNUt1WiUnyexSyHHEMujhnnwFfgq6jnTewtcpqPEekLyum23A81SvW1nwkW7RFKEhjU"
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
