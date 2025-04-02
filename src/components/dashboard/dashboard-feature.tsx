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
    "UUk9Mq69qCrWir7oMLk26zTdRXbr8gGrp2M9cYLHni5NmHYBpYUXfwtrTKr8sUE9iCPxLrxgYcGELnvfZwYgM7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363sE8vsSB65qU7cJZFrxPZ5fx8TvpoHBajv5ezuF9yLqWJC2TQhBMiHAQF3hF4owav8k3pv7QRGQGpMSn53Fcc",
  "key1": "4fQGWeMcHw3iif1TSxwSjhPeHF3s9G1DjB8mW8NjDQeCbochrHpV8DjHZeUubub5Tfbdupzx3KEkQqbix5BHFKTX",
  "key2": "2tYhDoceBKYxanHD9YEtkaGq6AHpj7Yt7TRAbDFu8fXawL47gtKqe7ftkK4PCr9jy6sGHGgVYaZyLUcU1gHdg8gi",
  "key3": "2eTSdBqbAtRKeUstPdMucsz3tnZxym3qy6WLBZLt4ghHYubb53F1xR1Rrjhe1JQkwCjWyx5UyedvngTpVhiGM5vy",
  "key4": "3Dpc17cfMYZom55N4yt1pYu97hZADgnfrz1Whk6bpUYo95krR19DtdDfWpPbKAVCcD47CZYyN5QVp54MfYzxTaGE",
  "key5": "62RtoLPq8StxA7bbWpDvvR5sYs5fLgxZisdxsVQ7bQhuPU6V9LfNWpRb3ESs43tHGWY49Mh2LX8bPFfqHkgYuA9",
  "key6": "3t7FkXEsWj5jGiPgvryhBBaqkNyKvci9YFoPVvJHagqW4NPczUeDX6RG4oSUqbnsJzMDQKCUMqDwoFubVp3vZ9u4",
  "key7": "5BVpxhSSe4TVpoE2gULWEvkpVf8M5J6NBBTprZpDd1cjEUmgvktFL4vr9UBorjTRKvuP3ktHNdE9D6TooKh2QGMy",
  "key8": "2SUhmvxzHmPHt54wYWP8c1w6MDguC7bxu6Xmv6kB4mdU3gzVYXQyXpaZtmtTFaqw3F1HSZzQffvpaptPoiGS2NY4",
  "key9": "v2nD6m7KHj9ZQ4Lv1yUZatxKgcSvRqqAKQGkdrbXcPnvuw6HRp675uuFkE5QmkhAhVr5mS5UY1WXnqzXbdAgHsR",
  "key10": "VeAEScgQqggDVGH7d8fEEp67H1bFheunAUWr6jcdeDRpL6myFGCcsL1FCJYFMEKDdczS5CDQKwNgNrfuUqMx1UD",
  "key11": "39gkkz5YZ2qTzjph6jqx3R2GrAJSGRz9k1anCkkZk2tfcasSdSBoF5tVRu3nEBpBeTvr3hKsEAZkxHjvNkTWKXft",
  "key12": "2URUdDjq6R8x19vogTYBDYrxhK6oMEBd25f3Ld71Dsx7zTwJtPq1dXGa5JYxAcDyPwtockkdsEYnEQNE1XnGppKX",
  "key13": "579kZ71thceumAAjecGVLQQfSXbE2nZ1PsYpDRnH2W2cZsaFcgTQp4SxpZ9t6v4LTi5cYf6bKvSHBDf2yPAfSWFf",
  "key14": "n7svZf6KX8WiWRMMfz1aVtUKeixKDM7VmcU2nDkKkQ5CdzKyacs1hV7bHANQTALkF8s78Jm73ge1whNuAXfWnfc",
  "key15": "4PfqNHHXfV8AfMb74SWiEArHAdUVj6yHLmUdSH4tff1WrfbyTNz7tmQhA4NhpP1CHpKGtao4Dhd4ELYiuK64tph2",
  "key16": "2WwZkTFXq83QUtA2DoG9p7F9Mrgce3CGuv75H1YbQrjkPFP4XozcqzRKZa4tJq1QQxEJ66xNPrSzwraw9VMfwFdT",
  "key17": "zvCpA4enGbpvcQ6nCfX7JPsQLZsgBNh1k49SepF11y1kweZVLNyugCfPyvVAFeps1GV48GaHQD74poGV3EpwPUp",
  "key18": "2mJcf6FiZR4Ne3w9BCPrbSrn6iS1MHyDXD3CLfF6uRN4cASJePtFwXCaxsTPjBFEu7qGkTkDJiemy5RZX98QNr6W",
  "key19": "5gAATGXXpqYH38nUFxRzZ7Lw53XHGnhEXxxV6UQNuC6R8EqmyR73a8K56T9APaEzERbi6M26Ly6QiYDeHAAWVzQC",
  "key20": "EDPHnWtYqLkSP48YGogDGsaWXAP1GsCQTMAftw2qZbt2vd5zKxHAJfptFnWu15NbkYx7U2UssUZEG21m4QTTybn",
  "key21": "5oTkLioE2q2RTrShgWR5QFjvzJ4iErUzvgWtBjF2rEfUgvPpV3USHc8G2GeJwGXEqY78yHxktuMQu2KTjiukWyjq",
  "key22": "5VcgeC8brVhFRo4UP8SCNVBSHKrFdkT8bhaFdFcPnSHeL2Duze8MHVs79bwdSBXkFYRNVy4r9pN2MvVyk1hCpRvs",
  "key23": "2sLXsaDJkkp8m4F6NrrbXXZTGSWjXJDPXRaGsUvSDSSGpsQeZ911nR1XKEZkyWp75udnkdY8DdwvU4LPwLbqumA4",
  "key24": "3dysAdSeH7npfoqeEqg5McwUZuX8wHPTG9WkGjvXYgSFqJQ2ha23s1oFazWcPQBgpomozHnVfTFXhdNZW2UBH3uh",
  "key25": "24yXpzxxwuEjAHF8mi6pF8TMrwBhokSgvK5GCTLtW91eKPZXBDH6G4AnsyWPTSryQo9NwjtuZWCa1fuRL7E1Djte",
  "key26": "gxYPA18iCSgpoVNMgepxNMagSwZStS1sBmywCfCokybWcsSTcsgFb1BAKHwj9uNhqQNYXNHR8omA8DSbkssqH9n",
  "key27": "dSayL9AmBW2Pte2nC6ifpBGoPJyMwqE8HXc6WDJQWWsCZUN5bnRKJoWZNRZMarNT3t2i3m7MrWzXEkk2R23Eb3k",
  "key28": "59wZc1CrJGJe8tDWSn1pMRJ2BaXnFhRonBHmyEekcCjejoJxg8cEe3WbMajfLRANT6WwaSkg6SHBs5jKegPVgeQQ",
  "key29": "3fj6CeCMfqswixYqTah9V1idDDvKJhmqrnpqQMdq6Sk14SQ4QGVwYN1vjFcsR1n49Ruq2VzG7TU5cTXUtiNpCKHE",
  "key30": "4B7xysMxPRML3pUwrfNXV2q8f3guPmNPuTBo3o8Hw9XVhTP73YK1xhPxfo887tuNELsrfN9HfuyehY8zR31BM7Sy",
  "key31": "71wgQKmFLpncHQqXaMX1E6DyxRiSA9HyXzeeWUMVQqAYxekbjGddyNfFVjcD4okTQ3hNu26MZYwi34WKYarxxvm",
  "key32": "5G2zYG7yWFF69ajEf7oLo7nfg4LtCMTquAnRKvLGgmohNELSLmFTy2oUUEEJVLno1W8HPC3WzKZdK9hGQhXBbp3K",
  "key33": "4RzN7AfLnzAzzDRhXiXG6i9XaT4ahXpmx5bpeKbfHyuTCcM8YryaDceGRQBV2YfKzAyoovteKGE5JrvtgqDgsSDP",
  "key34": "27sErJEgsv4uKHR4xRmU1DD6k36HiZpeGQWjdLPbnewWpU5NgHjKCKtXNqMz5L5EMjagduoQx1jkffTE1JuQ8ruS",
  "key35": "4r8MdtdwATeWhAyMmF4227mzbETF8MvXgyfrKvQoqsj2pGuubh4hjHRYZXMptu5DAqQ3ka7RKq1WNwTFQVmfBUuv",
  "key36": "4i6u7xK4mkfZZtEVDS5xKZFEdiaBnfEbrBL94QrudfiZHqg8PjVYFBJ9wAUuPoV62x7Xy9ZEGmwFdTsBCwpkoT6A",
  "key37": "3V4DMz8fkfeUzqxPTGawCihAeuxMtM9EzqtoKHorgbhnAZSWKriqz8CJrg5AU14Ye6ZXGbtgABiFdVXdTKKYM49V",
  "key38": "5UBtAVJSKEkjwFR46PvCwjHRDnzKiojvitWUVJUZZdpVREbZKCM9AuMcwGfw2Dr1SJ4iM4RwAkpS61qHFQadE4nR",
  "key39": "3UmwSDpDT4WgaCoRYeXotNF3WvNPxitnvF8z1apMBhfWcfnBx22Vkik2WqWwpP9wz5PpW5oGpFwRr39pjyRT7JQL",
  "key40": "fpnr7p5xpMKED13bLtqWGbf1f3VZ6tpmpGGzb7JPmdnqyqZsinTHDcjc5qR2ZssWHKsAY4YrPDLPzqP9VsYwygz",
  "key41": "2vTx6j7fVzQLbJM24nLSjPRZ7AF3NupUTKrx81E88yQFsn9k6JVUVXcoC8Y5LZQFeUdPssB5XoyFG11T4ca7s527",
  "key42": "4nwGcZVFaad5GsnQvipv3XJzFt6r3iaVkqVnFEuBCUYMoNWTC8s5NB33AqWJfemLmr6izRoi3QYJUzpksRRJ7JTn",
  "key43": "2VnNxDhvKSraVFiLxvzRBcsqUPX4c7PPFzUDZUcm4rWNnXz1FfjZ4mGHaaTbbKz1rzVsXR7wnRM55Au76VqWY74c",
  "key44": "25ztiTGbnyGFcU1ZeGr1S7SV9bxyh2gwPSwZ53S4FNPFKz9Z2gU6Vd3UUHWKMPjCbTMW17spv2J8QSgojKxpYgwy"
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
