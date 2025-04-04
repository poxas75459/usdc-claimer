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
    "3YBFkyAf3JTsja7ZMZmKSQ2BQz1ip6WFEQmXAQWGv4hPb8FQZfbi89Fdu1bTVyzptu3maAveiPUauGWnt6q5vpiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z6tgaios8sMe8PnAZzU3XXeoCHBzg5TbP87JBacSQJJjrzzbb2jt3RPYhokKSaTijjc7RNdBLveVEJnaadpxBAP",
  "key1": "2cNQ2y7RQpmBFVzw57LbZdSyQab4RV2LBEJALVQvuxaukb2gk3TbNeonsdGyLU7mHhfZt7UYKiQWYY54sigrogde",
  "key2": "3jvHZSLD5HTNcJEQj21wVN9QRoQKjDftM5dqpumxNTrLPuMcr1gpR6arrsneidsspzRQv7P4M2M7DmjeiGe2osqJ",
  "key3": "591k1Wmcv2LjHF7ocnAJaQQT6hPpsDqfvP7h9L3aTGZDSagHFDfZa2Na9xCwsVtq4jNWfF5Tnaqya7J5drgVRFhC",
  "key4": "5KcitjBHmXQ64pgssSDtkzsyHty884qjDDas1CVvbiVEQz3dwfa3sx1jRxge4moV8VCLS8fdeaGk2QsSW16ujh6V",
  "key5": "5Eqx1YsL2mBhYwvvR8EZJqVB3SCWRYqgkRU8DrX5T1ZHzAhh3tLazkQjXXVybyiZREHG6HQh4wJyguYazDTW44u2",
  "key6": "5SYhHq2vpWbxXnw8aRiU3EQP8CX6W8aSAUKGbxBsVzPDZjy8WfgKmR13nh5q4hsZPKmMNUcBbekA1o6dskCC6VkN",
  "key7": "yBPATadpPeAjPvWJwvSLcYU88UzbXtFoasYFXMj2B5w8iw52dVGnsQ6cL3Nq5bqpQWSWZvPFsN3se2bfq73SFrJ",
  "key8": "5NjKX9CRyaTPHe9UxBmVhgT5qfHbti14qrkHeaMbimpRJ3PkVhXjZ1M1JfDiXysghwbzheAAaCHobvUMBajiS6v8",
  "key9": "58yvuotr2599zgJd2ZseMUsr9WJusfDD6JKu8fFbirApanY8nRUKFQRXkhUzuNAQwzvuBNMyx5ZtZYwNGENSSBUJ",
  "key10": "vEwZSTvcsVv38MMnwfbqVSiDyTKqAGuqVCGfakSN4azPTDkKG92Tb3wdBYVb1xbxSrfVoxVxaTfSyQoGUSYJXeZ",
  "key11": "5eRJFRLEUVgonnPRacPPLtGqBgHQUUx1Cc9gKZZvdLcaPz4GkXTmYwf7y1NS3RS4h5RDPUhGywToRYaQwCiJYmL4",
  "key12": "4p7HGzenvzHc1MhbDiiS71mKp3SdkSDLDFep6cqHx39SkhHo56T5sgmRgdiVNqq8286SjuxqXU5SouX5KZgMoDS4",
  "key13": "48DSUCGC6TPr5jaWHxJyrmjC16QDeENCERqFsXdwpWzp6892Cd3i3qjNL3p9xHVTcxZka19BZ1NnHyYHegD7uzUr",
  "key14": "44Va5LCoVgppPWedskF5yME4h6UXrmGmZncdiZvY3knjc1hspjYDaC5Vw7Rv4zwruM9BGUTMiLxE3szBEsWqxmsg",
  "key15": "NajXtL7HhPubo2NkfAAuhusG2aFjr2KC1DnA6VvcCitkUEx7H5wAkmTEGTEFxUqytwzA8B9cUchDkPCva16MkML",
  "key16": "3Mw2Uk7HobcKXh3oB7XZvppjSj2tbLjD894acjJ6Cmranvwbqx3gDYxzfG9oBq4dcntS48dyp181bGRzki7XByX8",
  "key17": "2uAYvBBHpsEqxJMXoySmkAN1bsqVbUWzEXw9v74NmChe1DVtSXEBD12yzBrnkNMirBCV1pyXeXtK9ULdawEHJXXC",
  "key18": "5DypDd3NXYhfqjqV3VAHuhRRu4RGfhsKzWkYda3xuEQJj9s1Mza7v9Wm5yadgVXmBUB71V3myf1PN8d44HZ5Fvs9",
  "key19": "9G2em8YUbGvGstFnBDTf8PsNbj8SC9XdwT6uH2aiyXoBei3bbJUHaLCFK3asCxdRP4Abz9DWs5HKwmnEjdPT8u5",
  "key20": "5N3JtFyXabaP4ixLf7eF1wLUeqvWe7N4ky64RmTFqGeWq5Cd6ddG3A1xnTwXDdAcCjbPa9nHgqjAy2M54h8B3hnn",
  "key21": "1EHZCbfr7MAUeZdyiWx6God1YGHwF6SmDvyhorkpJeoeYm5KYjXLJNEdDLw7U7aca1Tr1BkkCXcKu3BkABYRanv",
  "key22": "8QHjNZ1rm6uxowVKqNYnh7gicsUvxVkv6eeu1BmSogFQejjvntQcXsfKpDMvV6vvoYZUiAgQbEHa7mUdKJ4FXX6",
  "key23": "3y8wyqRmBJRg6behp7rxJ9AnmSLxNpRMN8y6BUTA3eXSfyLc7StJHYxa3aeKqQdxqra3JbTGSTiDy8wkKjwSU5e2",
  "key24": "4om1ZsXk3sbhWopd9TjZGH4EE4JZiPcqyiZXS42JvJyRxmpoUfnJN7pWq8m7imammSrdFpSK5JLDoomSTF8cx97Y",
  "key25": "4vd8EVbSNdsDDDPTeVwZWmu9hJTaRvLW2dR75LTTCrQZv5DMhBFi2gQhaNJ9v9ogk6tyJYtgbA3bQmp9YUgbYn7Y",
  "key26": "4McEafqUVRrkgLPYJsYStveFCeAiJEkegKAMQex7AV7JHtq4swUh7goBKknSQMPhfJP2Zb1UvXtZrERH1NoCCxg3",
  "key27": "um5RRXwdFzkVhgipnhhVyDFHgqF2Ft6oNRYP7C7n398NF6mmBEunCpgDjd1ZYAJFyaMuJk9czZzudh3vqHA5Cah",
  "key28": "3W8eyPLQ9FQk1H7SvRg8t2c3oexMsifQB2z8VDLQwLZ7ou2z1bd6swiNXoNowq5k5R4tALwwgRaSM1DUoWzbzKFm",
  "key29": "3Li78Bia3UhHCwoXkwwumF8UntjASMZqbTSCKnrDpYVLc2fx9VqbJBp5BRBfH2eGgJWNiiHb6bBorBJmuAKyECLb",
  "key30": "2FruPaHqCMjtxt2r4e76rb68Pu7dcvCga1NdsfTii9eBiUS9rmQBMLJdGQ3pXbTKT1ts1qWMS1TT5yGv41QBUaeW",
  "key31": "56YZ7tv2Gc2F8wBZewZsENV5F9jTExTRxTSgq1PpHedo5HRjAqmcXEKbbypNsWm26ZDX7dkUVmnA61A8wrCJ8iaf",
  "key32": "hFc4j3RZBygUZuzW2VHt8wBkitqCMo24PaipobuF2X3oZmB2m6QW3jzSZJiUPzefBr9UwkRc2mGxEcmYj96Cz3q",
  "key33": "rFZfQiPZJEbS36YdeWmNWQgueMj1Gn4B8ojjBBw5CSShS9rZRTgRYufzyCtX1UFA8jryhS1xzigqFtGgeT1fz7Y",
  "key34": "3LPmKbkNwrScfAsyBfae8WwywuNH7ewRx28v46cXWyJKUUUDmWxUeQ3mYMHHjsYGLTECYZnP3Abgp8sW9jeJrQT8",
  "key35": "2Mrso3FYn24aKQ8fyDP6kLsbzj3sVopM5Pzz3NoQ2HBqwmuSQZ7ioj1PwAFuFmfxVqMJRtFZSq4w4NrptLPt1ayp",
  "key36": "3WfkqrifrJnSDGfAq1g66CHYMBMN8iPVJqLvYbNq1PH3JqcekaGbhKFC7QKT1dxnaCXJPZCe6kDmyZzr2rRK6GU6",
  "key37": "5wqgL25DD6vcgHjFrFznnusc8TForzVpU1u7W7nYevV1vfFERm1LaVfBKJYMD1XL3xFTeK4gRwyMTcRfmGw9ixGg",
  "key38": "4DjoQAMtkqKEETGnJugDNCe3LbJyrmGok1T2tUKSksgthKBsMSuTNTC5QUkVJBP5wUay7r4SrAM9tbQEqsgAE2VH",
  "key39": "5guMBvBGPm9GShjrm9p9SScfzAHCJz6pHVe6g4iregZumPz3qaSM21UX4sV3ZxqgeMRQLMTJH8xuPDqtfY9hUhoX",
  "key40": "528J8HZtwcfBbAkFX5844LRR1voq3U4G6X14byzb4X6Ze8bXpZ4vVSAfANYFsyiYUeWktGxq36mzG4dKKtsPFUYU",
  "key41": "uUqCDv7A8CCEuN6mAWitUa35JXbFZVH3gz6eFnNv4kC6c5LbkZLaXrZ62gTpJ9cjEiYuSiBvR5z5hh9N4arJtjx",
  "key42": "37dAuBP832ZAqNP46rcC4SGr8LWcyXzp7YEcUYKf3EWkJ7qvmK4t3syqh1mM444dUHKkeY8qNGK3qhYt6Bb6xF1n",
  "key43": "65aSUomuC74B2Fz4NG1r1LdvekfaSBrBre5QWL7UrwYemZbE4s9oEiUBu6W1mqDFF5MyQxH7WxybPcBvPzUeJ6PM",
  "key44": "42fnRHGB9jPUdyycqJZFcDnvjCHBXz7Rkyk5N2TR4K1w13BXWumdAgbSMkwLkfkYZAVLXm2TYwJs5ow9rXoKXZg1",
  "key45": "4to6UTF6ePL4Rct27KCBvZiuSNtCrvwHDdzjRxJM5dXEN4AFiJoo2SpZQE3t4BoTL1d4Ekk337e7LYWReMtxyL2w",
  "key46": "4Ay6ZVXx7dLtoiQZzo8obFEFYm1r6Jw7zdyqD8p1x7WMLXkrSpEgaVogszpaByLaReiKqS3qGCFkXzhR3CLho1Zg"
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
