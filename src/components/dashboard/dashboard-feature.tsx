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
    "3oifu8E7jDAtPGPyDYkbJjMjmQsvHFMBiFn3A7iKSTdE3gHjtiqDbKLeykUbPHKqeMstuETMuwQw4Xn6XFjCNDjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nXDy8uLDLRrDb3CLYyCQVuEmvgcQ1uggsd5mf74Bq8JBWwPzDu1oZG87QzsPFkXCAUchp5LQWJPFQc4YvsKKD2S",
  "key1": "4U2A4Z5UCfcZiTNgFLA2de7xF2ADEMyrELSbhakx85GsdtphyenrX6p26Qz2HL4Xc3X1tvKteL4RABqTTDGrZNoz",
  "key2": "3Qu8rveAjkmj93dXuVheqEQABAyvGoJGbj7judzU3JTWfyNJjiisLRGW3QqRzqjsdjBjK1sgtsdjQhmSiWsFkgKF",
  "key3": "3FAfLBwYDWNXtWSujHzGGZWXv8YVsNPT14Pa78z2ra6XnmajT6fhmVKkKPwijQEFmZ9cUxkJ4qSZtSpBMEokbFEY",
  "key4": "2drh4SMKjN9HxTavgzjkPCwJgC24BVYwgNujk2tVCqUgYciApSzSu9u2x93XpqSoQeiC9LRsZ5gf9rrDQkgXSVBy",
  "key5": "3ZxsxMtRaQqK5f5Jx57RFef8VxWbGNMU2XXhPQTqFoiEyRsTgUvN6DBk6tzYTqm8WvvJKgsQ21s2fLqmz7Q7jPjP",
  "key6": "3z4ZqQP7F8tMqpntyBnyFRp2PTf6jfdcYDn6WBzNdSdc19yNfY1qYtW3T4KgCmn8Dob4b3CHFLzRvgL98w8JtNTr",
  "key7": "XWwnPdjKAS3ZdAPSVbrv7a4ZN4yHJUybw7fGjFcnMHs1hCNCZiaCcEZHpsB91nU46W2cKc8xCwHi6tfLbXdrFmz",
  "key8": "63czBx7Q9Drxv4AdTEQNhZsoV23MtyoY1pF8BnZCpeXQirQSguh8oLs4DNePDQsxExc3VCsomj53FKcGBE6hXwHB",
  "key9": "5vhLGFe1xbU7eN3KRpUjNLsCWtHCxPAV3ozQtc147Yjsfyj9KSUzZres1xxpdHtyiweNAQxgoPWVJEb29SrSRtZk",
  "key10": "vGZg2q9XdrvJM1EwuGGW7oVVXTgLJHXMHFrApdJgeVRtK4xXrMpX8NDw5S8roECX67StdNfr7vwV7g4dxBEFuM4",
  "key11": "2Cm2jGtaQ6ccAeEyN3RkKN1rh9KYSJgQPsGcPiQVZxu9wbtTjiqawHHd9vYfhhZzEy9JVrhQShQBF4T5KS2yUx8z",
  "key12": "Xvsjeoer5jsmnsbfEAanQxDyE4hr2VT8pKDLwZ4c9eLk3ddNSHsgYDBpwrWBRGQ7xftam6mKErefa1UtzgUD3UE",
  "key13": "2DkVrRRz9ZmjrCDsi62e36mMva5AjiJxEgGGkwwy4i5e4N2LURduDodeE5p5Fdd8t8oZTUowmiMCvzWCPMHkY4px",
  "key14": "3sNbjKPNyB9WwM3wc4bLg2cjhvdsjuEaXGwzpWDTJicqsRWGF6vcqSzE29yH78LXSyL4rSzyM2hm3zdNrzdMopnX",
  "key15": "4EyWz5PP67vtfqTgBJJFXnkyNRGeKobiVTHPB92sNMWHSvgjH9LRsaHqSoRjxxzeJE32VuzvnqYporxGrbGgrG55",
  "key16": "5cokVyAsRQPvNKzERJjfE8T3BwCDVwwBDq4bK3M7ro8x74BK1BZqwe6xkqmSMMp7Bta4MChCxr65ptut15RAo7RF",
  "key17": "5D6KU98EGVGq1mkZdKPoHh8jv2XcFZfSgf6KhCuzpm8FwQ8VqNQVsDRc89TeWTY5LJUy7aoE8EvoFw1e7xeAzKep",
  "key18": "4MPUuGZmT7gz6JSomqzhH9kUrHNsvaYu8kjyT8RzK2gcs2gA174dnP4p5Hp3tFcdt2VESrq5GQQuAzFvChLf1E43",
  "key19": "2ipEWXfpEMYHih9YgepxfPDc9L4ZEkFvYhRSwFK95QXqsyL1TKpu65vrKVF9VzxqwiozvWAodbHmKmLv14bTdxz9",
  "key20": "uvfQ7RkKjtobKZPkve34Z1L5DaJJufVhaXiRrTtLh4bnduBR9WXKGHNbtojTrjFYfKZkYLdALebzRMhLRWtxkDh",
  "key21": "2BSMnoXmKJs5oc6vC9XTeP51xoNZAn6ho22zQZ2guuBJsJaP4h8js9mQfZuWvkKLa6LhVwHEKEWrgwyYfEYdard9",
  "key22": "22jk5Q9ruTzD2bbeAewc61ncCubBpNkRGLuUzBXn673zVj4Py78HpU8ioJjQGicCKhnjtDvq2azeJyKpHyMeApEG",
  "key23": "57u1RVbHEAkRTYkw1YqBNZb8XjGpKbkiNyxqwtRQSD8qdaB1rcHAgYwnkHa4nhnjJJWe1YpbfGWSEgrdMjyAvyQe",
  "key24": "2LLJTCG5UtPyugjncJ7edKcTZqzfDpQYrnmPRL1bQ9y8Jffkde5uZVsUncXEn4e9GZEVjhQRwwkRD2UV3zMNUbMD",
  "key25": "3NrLY9XpoHVEkA91kmKxeW8dRUohQ72nUQaTe5qAYMkQhcJAJQyQWwGEQVtJb9J3JkwoLGBoD73LrpwWBRB9q16f",
  "key26": "4Nnqn88viHB64pwMbRTqi9ove41hWMirY88V9RRmsncmynx6kV1HspUkgUjMYDME2YD87LwcnkMvDv8ELF46r93x",
  "key27": "55wmy6n3bd7WpAAgomFujbAdKXrsnsQgmJa2nrfXGWHbWpWZaCfEyKzq4Jswq6FrbBcFuR9rbBFcaEgGLpHYdAkZ",
  "key28": "5KduSTHAtsiE7bbAYEWeBXWp7QkoW2XxkBZML7YUMb1GvcBLWq5iJgsFaEYSEPSSqzWmz2qoxAXJ4FhXEEJFY3Cv",
  "key29": "3hdZmeq9NhmzfHN56tMMJDD68QgYR2QgsEAXw4FGRcprPsUY3yaCoFCMcjma7mbDF8jqNu4rz89Q4z7PuNFMXJuG",
  "key30": "4Ri9LRax3BJRg4aar41p6iiVuhsdFTnBX2p43Ev7WqwZ6T8QGuZPdTstwFoXpA8CAx42MD95852CGK1CHS2QSTqN",
  "key31": "2LnpKoAcNwgbc2qgeKyGcuuosGoHUqmQqSXdcvvWWWj1MZRz4LYHCgzy3CBFK4xnwXtmsawZncMCsZHxKkKfgX9s",
  "key32": "4SQZTa9zocVDC9HQPU1H2Y4ibqxB47iEyEVyBQmaXnW5853BF3B3B1YD32ms8PGXZJNA16axWmx31WyhTWTYENS8",
  "key33": "J32GhVWiJMNfcYfQNcFAzG8aU3ms8z1JkvYZKHj2qpM5YPQzVSddbWkqRjawRQmGmsfkBVBXgpPjnPAe5NNZjwT",
  "key34": "42A1Fz3et2QFBTBx2qHb6yfzdnJGoMZUzSGtMuaPcEfAigsm1EVAWghPvQ9z36bnLjRqph44QJogVjwCwuGLqPSm",
  "key35": "26H1D89dYUz2pn7wguGzVMrJZc3UeAD6s12FFYiDgGF4W4KHJXjaCSDUJ6R76keoLbvizQ63D6qpVGWSdJarCEKr",
  "key36": "wEprWe67DfMKZm4fBxzQc9WU7wR7zsW5qMRcrtC8B1CTuYFY3q6q4tVCf122j59bsXZG43bAvLZcvxKYdxxEUBY",
  "key37": "384VokryW3de2QCMNHy6Gx4XUowuF9sw4vKNeFn3o4kEsEhZb3EYfRorkcVpyZsFmGMMjr9Do8C2qYDXs2CQacsF",
  "key38": "5uAgy36S2a73C4pWe6tVpk1Anc2GSgHGgzPPm8TnAwRmuAVJniA6Fy9XpgYhfKJ2221HSw5ymgDxjEkd2DmNArHW",
  "key39": "48iccJ8a9xMc3Hs3Ekxeo1Sz7Jqyk9Myx28f3Ctm2ubx2tMcSsxTCWVNTrUVnhPEm12ka3mgbyTP2z7JzpvKwtxB",
  "key40": "5rLqownAA8NUgyKpb3f7nqkZoebdFf3ZhDNBv5RvtAW3Z8xjyDjTZs2f6gGHYDFE55PykDrGTfMhJAr5tJsrmXrj",
  "key41": "55AyLpuyxUukY8i6WdmtCTmEFd3Tk2VyLsUHe4ArGpLA6bunruyha9DMzX5xh4JvmcvmYmchPP5vCodLzgz1ESQo",
  "key42": "4GAnncc4sHe5uqRPFeeRbgh1YvoQJ2ruambbbPMQSQGKNEJoprcyLrsNFsb4eZU3xZVx2mfQM7p2shvamQwhFY3w",
  "key43": "4jmo3qEZseoqA7S1Gfu4GK3wPPbcwdXFXVuwsv97FR8uNPepQErFY7CwWUgUG4cm6pbQqSxnihBnF5TGwoGoaLcU",
  "key44": "4oMkGD9tTQFNt8Kci4K1Jt1mHUemHk61uZ7XpwdornZ5vYv5LdTwwQRKewkiRk55SnAhkohNTdc9KG5m7Zfi3dKx",
  "key45": "5fqEEFp9kaph5LESejByPVnBgxfwSL88Fe6r6a9nVQvqvN7r1GeyPfNqTmxWWnmBwU7CvVDGZ4kR8u8JM9BkaDqh"
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
