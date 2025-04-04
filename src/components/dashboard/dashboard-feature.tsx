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
    "tVhXYirvWHnNg9csj4ZRsyAVtq96R1mpGWSyBHfAz2ueiCQAC2onJDE8zaibsu5KsL4iP6GkQhtyEwj6Smtmzkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9HoYJsMrugwTe8w7RULX5AQKr37Mzi75KJofYoMEXbj8UdxhsxB7gNsbW3feTRfeDAAGYHH3bojg1zCKawGs6G",
  "key1": "38RhgvcyUTLxXoF1hWpC9UcXFZzCUiJdVLQVYE7RkCupBVPxBDD56FJw6CQc8xKhGfXARcWDTatHrVLw5kso5UVP",
  "key2": "5cUhNF3WNkqVvfmFA4mkMsEzM8tkNEvN78mbNrjKmc713ob6s25TLTbtwoR1RNGRvfhaptqKwzBGEgrTT67j2sGp",
  "key3": "2rxiH63fTCucY7TeURaeLeT8iemw64At77jpVifhZksb48ziRVntQUsKGX2WhFAQVXYVyAqH2Yyq4sNt393LHkYN",
  "key4": "5uAkCPARwATqDZeVXyJFWwoauXVykdurBZsXujcKe53Tdvybfcy1z8qsxz1mgDbN6xS4jV4XZUwvyw7XMbL1ZWC3",
  "key5": "5akFW4PauRN3sr3dw1YREjFx3PJCqMgf5ceWfb4LwuupWa9LiLxy9hAFfadqHAJHrhGPYpe2D1VJoHqNuNRJC273",
  "key6": "DTUMUQ9xvrnSUfznGpVKUayuhzpnZw3urPxMn58qRUUbMtDnYs9a2S9Bnj477ZdmLCKQKCc4syn53YKfZFgg3kf",
  "key7": "v1d7hzXcSoaM8sALN9syyuabHh5Aj1c4NQ7Z2zdPqZjZfGhQUFoagCuLQqSRi9uva32nUKTwSVjoJiKARfYy5YF",
  "key8": "3HzVTqSk3z4WuYwbouW1cjYbNdZaYxhevCTqi9Xpa2g4hNux92o1GCJ2oNvL5Br9MSz56v2GZm9h1f5ocmTpEF87",
  "key9": "3qLG61xQh9Ctjqaq6AdCmgTr44scHV1CcS8eREEaTkwHbn3My49UHw5kdm1pRXczpnAgmdo2736mYh4gyRHNPmy8",
  "key10": "Z5mtTQQivHiZhsdNF2hVibeJzStzARPBRq3QN3NsFL8qsKRrNEmHCsauAxKuLmLkYNgq4wL57NVppYYJfhdCrpt",
  "key11": "5DjskeTgtTgg5nCbPcaqrNnNixRDThVyTDt4YTXsCzFgMiKJTvkHJPLC8c4CMS5rCvLuL45iJ6ad5GtLSqDohPjt",
  "key12": "3uYp89ot87J5ySjEAzLWZrpti1Cu6p2DsctHsVaVjrv9EbiAqL2B33nA2PGBvXjP6wbfuVfunb1uQZdfRJV3Qa1o",
  "key13": "4LiKpmJwgBpndKxBjMaSbDiuHig3trBGE1DELu62cShFEhRFm7U239QvWVJQm2dSbxhPYrFg1GG2WuEtgjiFTqNj",
  "key14": "28VkasoPTNC3B3SmrhJx9gBF2JxjKWtw75WAJ81HBNmfqknXdSAEwdTegAB6tY5Gk5YmNPofoAb5zQdrCuuZ8o74",
  "key15": "2HpAKCyWDYBhJBm7dorgasU6n91FADjAPRzpu7HjaruTc9vYnkkK58SzHCCnhAdBdPKKfCPsuXxqBbZC9H3rNn7t",
  "key16": "2JDkPVE9DbGMKKzqg3oripSyVshnWQAWdVD47NqjVmWJnq89BSid9dP6Ehi35FiQHc1FKFBe3migMji2oXNgNc2b",
  "key17": "nhdyk3xK7vRPov5bosrLJEKW7nPy37NceFxyD4KGBcvhSFcE1YNJQrQLnJmewgMYyos4k53HYKipqnye2bdDbbK",
  "key18": "3v4eDEjeuhGEDuqe7kASSyUnZmM12BGdSzmNamktDa6WjSDPFkZVWwpQcZDuucJ8sQfG9YD2UqH3WtWNzRQ9ReJS",
  "key19": "5AVH1qSbTsE7hvWVugssBEvTQ45RommYMhkJj96pesM33fXGv1yqPzijkzp7NuJKF1kqzYYDh8xLoWNueMXQnFoR",
  "key20": "3hkjSqzeEeHrooAYNGbYyCreXfZ6JSmwjUm7jCuL3xpGXQwJzxLu4U9pKDHCAtDMQb1WsrPVttmSasc1pQ1maQmo",
  "key21": "448vcJx38Lo3Prxgxs9ZjbhGKx4ucDNDHrwjLKy7Y7Sqa9E1eD2tGcKLisFbQWMuXtunSbZbqyoWULsCkt1qR8pv",
  "key22": "5Xj6G67eJP1Y3LvZSZYRsAQxsQ3Ka1t26ryK6K1hiSUbARsq1ZAQxSNaBihfL2MoAULXGvToHimYRWrctGJrse1w",
  "key23": "2kTx1aM3yxTWWNreeKG1V6RpyxREmfkyQoDEcC3MZckEXd49bXMZmf8Sp5DEQrxrsuyrnjiTQ82asSFm9AvXS42",
  "key24": "3BXkkFA3ahxqSErkBD9Tueyg4PVaHy3dZNB81AJFyUrTxLZy443tZGmeMqn1vTo91wCsGEhjK4A9PAKJF2ZZC7on",
  "key25": "4ijW23wJQV2Wm6eocik8tAW5T1bzEdqFwRqz6CS8z37ZMzCEY8Esw52N7KPVN6hh2HQg5fzYCWRSrRhHwoD8EXYJ",
  "key26": "28egBmrXFfF86YLA5PQDq53tM6d8BAJCLA11F6aWGwuZj6T7SQcGa9FvvRBnaZY2S4RePhS6TTYwbrHcYgBGX5Dh",
  "key27": "4hYjWghjCXm6CZuY3dipRjUShpdJDYmbgF46p2gBzHcibYyQ8tBkbTgmBcsRi7QCysXgpdp8kgeQfyjA8r21YdHf",
  "key28": "ojb7UvFhccpQCMgY8wEEg6sgyPCntv8XbdRN3kBecLKiD9yNtsUbEo34WHJX5EuTzT47mb53ghYzVxxGw6tTDU9",
  "key29": "4mU7wbLzXDgQBCnuRdPfYJVG7MkzW6pFpzZj7J7SF61LPdM9Q8kCTr2oHvx81UVZhFrN6odjUaLqYV4eygBzoLsM",
  "key30": "5fvh14pGeD1d2jDHczTXoonJkKmTVajKi69XwsDe4QG2PYEqNvB1SCeHycXR33LFuGQcMCRmvzpy2mdAhKt6LSJh",
  "key31": "3SPxwzszD7Pewpshh3FgcNp4DMHhTirbqXXGvsF5E159NFS5BcQ11seqTZYGQFvU6j4X1e1bbmagdF7WjkMUeuy1",
  "key32": "3jgdMQiDbxeEL783xtEad4Z8dbLeniCZeyLRR8C4MTAxQPbTVvCEBm315dE4CnSh5Ud217Cpj4xcBF6JFAWPVWDz",
  "key33": "HBSrWfvWjdni1bBUpws9HyU7hLF2kuQU9TX287io5GDayR8wfHcP4wWjETaVUHY3qz8NziD1bgokvGTt73ZJ8uc",
  "key34": "4jDgKuY2U4pvtu5Pn9fJq9Ya9JRxYttKamVEc2JkaWdUdF8b7Rx2Cd6kgiHqSZXjPZdaJC7d7NbZdB4R14CWfZRH",
  "key35": "2k3DmgqDRXf7FyiHgN838offsw5dRSTuT8jfDkPfqMgCGjpAdE46Zsk7TS6BwE7kQMeQ1ZmdKaBZb62DoDtqo26J",
  "key36": "4pVUQtpP7Ay4VxdPK4qiMn63cYtBTEo2gV26pv9fnH88nS4HLdfcC9z9MC5okqVv9EqP7zmxbXMj7RWtExA4z4bL",
  "key37": "342foZSTWgcF9nTTmZBHrkmkbh2KjP7XmSDS85Bwc2dWpg6HCsKvuvVqh4J4fZbKwk15qcHk5xdUEEHtfVprKxXL",
  "key38": "4Xi8DevyHcs7CVAPzW83mfFajZxk713bs2Mac6n8XooTZd5JpfZSipoPJuoHB96kVtnsGeFVDBnXjSKfRgRWBFhx",
  "key39": "4KHaT27165BigqxBgqV7a9oTME1p6ErTRXEcarUqyEREfz4PB4cETsUn7guK7dhWK6YA9xLf4Kf6kwsNQicDDGRA",
  "key40": "DbktSRX5S1QsBasebr8PQfup6weALrW8GzEZCtczJRn1dgyUHJpKP6Q5HewHwxmKbQu4q5VKxeoup56NHo5aMYb",
  "key41": "DahKEg5SXfWUwKxvZskKu1GGB8kEXST1u5MFMus2cCVBQ1uoaBHs1KUrbmff79HdYP1W74NiNRt8Ymw2ueHjt6X",
  "key42": "zEZapv5hB2ezVHHVBfCwWgxCZEJiYsSFABMiUB1mHDWSucGyGcgPUfGSF3UCb5eymEWJ34YtDeKE1AbtSty6hKQ",
  "key43": "3A9CAubTML2yYx1nYP9U5sjSM7HJJZ2K5o8FYxXx6jctXnindTf24wxXyVK2dThLfi9e38nrFkWQdb3Gz7HvtJLz"
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
