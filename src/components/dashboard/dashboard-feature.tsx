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
    "4dERjeFWQesx4r9jNQNvpaRRzeeUcFEWi7aaAGFxSR2oY1HQNLYmfcLnXwc1Cgvyz5eyJFnfoN4HtthZM9hWmjNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SP5uYaeg33XDJZyJuMi9DBFuDzKEzEnup4VSFocm9J9xnQFmv6ErTR7whQ6LmHz26kN43vWG1LtfkqLnieuPuna",
  "key1": "3gaoHDsekBKbwNpFUcXdSTzoxzPsci6gH5EAdQ4uZZDze8EyyHnzo5JERhHLAvcNyaq7KWiv16fytut7QizBNGc2",
  "key2": "3hRBuehqHhpnrvPmnKy9tnnEBQYbm4Vrn97cEYW6qFq5Y1CEjaiU4qbxE8P45zTyAwvACHrytRT9ME2hsYgaiFPo",
  "key3": "4Rdjoszw8NdJzzV3f2sF5osJJ3yJ8csEe6Xyn7xR7FVJGXWYiZahZw9MhwpU4MYAxMT5chRZGayxgiVRg4vvUrdJ",
  "key4": "2FA5DV91xpwXMmbNw4iXto72HupLhYNgus6TBn4VfMyPUhByb9U78GJ5nGRjrMLT8jubrXqAe8NuZBkC3VRmEMcr",
  "key5": "iDJBG55BKE7KyEyZnnkpyXa2jBKcyrAVxmdTWB1nTsmEUR2xuqFASw6MW8BQ9Wn2U7H3mE1eESccqDnRcYWfYdv",
  "key6": "2uPsfwTWjwbeNQH8BdsMumuJYor4u1BnA7dQhAMmnjsyXPdyru4qfPuQcqEDugGQuUcJ1fqVBw1dtUcgSEBfHork",
  "key7": "4ZeGQMqDTajFf4YdGkyD8myPctkPrSM1j6NtqziWXtduL6Q8SMTSL1X2uBCsnekqnvgB6nNbUPcQJLyZFoxj23kL",
  "key8": "4dZpxhayMtoMRjtXNDM6r2i2zQy6kgJpymRjzyvfeQpt9pF7ecnBQDeiW2Rt8edurGpbZiPYp6oawd1sE54yj2Er",
  "key9": "2CYthDkXpeV4VubJhKpPQHfseKjYwsj1eSFpd14PQkdQfsKqgyejWoHwE2Sg8ykbtT2wURV4TXrQiVVvbmWjPvTj",
  "key10": "3uHDijMUgVC9yXfFBZviGasWsTKode7Kh28QNETnLw2csXXk1wnW8esSzW8yHTQDUnYvcW5HzzyFbB2Ca9WKG7rC",
  "key11": "2rY6zs6BTy4R6uHbUircnAbVdq7JxWN416TwicexJxJ84ryB6ApD98N4z22c81nw51kB7stf2XSmWwYTfXtKz2EL",
  "key12": "GVELGB3aL3EhXbe1Es6KrTqVLgARYZJ7X5gkxwSLYsPUjCGmwzT5NUuiWco6cMxMAfgUGvzuQFUbCgxJ3dDHcKs",
  "key13": "gDPBACi51eZo3sjzLXZBNjYvFsbKGEPpXBd1w4nFHQs2PADoyeku7g6xC4X9oBNUP3oCZByn37FUyX64ER7RL4U",
  "key14": "5BWE6sLspjK3i8LaPbGBadf8NejRW5Z1v9rdrbVuC3dKViaF7VoAvS1SYqYLYca9kyxdVWC8oPFT8LvwvAyjjnp1",
  "key15": "3CXbj6bTWg4cumirgDUt8srhxnxVaS2HNKz9NsDup784Umx1q83UzEtvKrTD7MJLUeeNDEzz7AkQhHyTr6beEUto",
  "key16": "28XryXSsz9sXy36vKoyZBBxkNbafRDPeYt1HjbazqRaravFMGBdrtxt4FA5NFNTxjT9BLMyLRqMeYPX2MQEefo1B",
  "key17": "2QRdgyjzgkrQ8ayDaHG24afmoV6JNz4RTRrpWagtaGfxVEJpfcw8rKnQMiQTneT2vu474fDuQ3jnKTKramrPr59B",
  "key18": "3uxvvCUMiMqwd5Eq2mv26eo4JAbS1HoLB73yP2ht43ouBksvWiHZC9WkE6N9W1ZivvPrShTfuP8Z1dgTzf4rZhsc",
  "key19": "5xRmprU9FPh49VAqKt1dgpZx9YwbtonE4hsBMeCDYdXmEYqoUX1r8uMF8po9y8VZnZ2tcVvvpirPSaHKXhv9LC2r",
  "key20": "5y82XLZa89imj2BZbRwGwEY8wuGdksJ8uhn3A8ZYgYWGzEUqFAcjTWtjAw5iy76zYmLy6TZELSj9g33XGUUtJK4E",
  "key21": "3oc4H9v8HzXtMNbUDLHw6TgG2miv9YtBC8jh7kMTRjEAZysP2tnuBDRXtQfdhBGoiPFjmJd6Ff3Jg44R2riC7vEg",
  "key22": "3c1qfW4EXiW2bnaHoVz66WB7R2f4pPyBTWaHkBLBFbTVTM337hcciS2gmzqe5QyTnzkzqHTaEPMBAWbqAaPy5JVM",
  "key23": "EZ5RaZ9o7woETZcjLdXPxyccw2HeCqySJLMKeh1VX6RbgXE3ho8ox8hApbUz1tYD8aeKcGpNaZLx8VHgbvZa5es",
  "key24": "5Zh7RxNwZyHQ18ckFX8RavnkoJ9cNaEVwaJXtTR2FqdjrdTmoLRJk3BkXFvysgLHZ7BVBt3Gr2vEpLLcMNAM7rfB",
  "key25": "4FZZ4v7yqpfmWsuKW8RLnZXaZnjF1anWt45CwwYtB4JNtS4x7pZXuZkoQV99CEWaHjdcQuX6aPeTK33TeqafJe6y",
  "key26": "4YwYN2urugu5psPgFKUDRzXZd4RdDMHoev9TxQLazBmreUQz5WyJaDov5ecBUh1KebNuFHJR6DXUgEmrS6neqKbq",
  "key27": "33FFRdpUqakECcK2bS2MB1PWuferpN39t8bxkNchSS6y8dF5YLCy4g58Bh6AJrnt1JehTLde41QTk61UkXyNdfXB",
  "key28": "2bHoTSWtMBPB5WjkPdRDkrdTuaR7FBEQD61ANWP2H13d1QJo7wnthpmofcXFoPgKRLhLbeVsaJVZgRBQ7SWDjd9f",
  "key29": "61hfhFN5ErGe6msQzHyBD4jTyffLdHJDMuPMZsutTfYQimscpjUbGFqSWfaVa5sbFcHwcscUJttvfBMaqDbL6HHw",
  "key30": "KNM8aze6Z1jfxgiwWpZ54MtLEZ9WHEdD3YVJe7FrjFTcYjiBAmDFWcUe4wSstWahW591yHt9hD8qJRyL2qi2b2e",
  "key31": "2SGzaWtHw2BbsDYVkzt1CYKUyvZajZBGqcDLYF8P4pJykunqeSes4tmTCvzfHndBkdUngepfieSV4jL6jU3Ssq6i",
  "key32": "4UUsPJ7EyzrBnKX8DzyjRERzcKUPpoAdsCuJronmd1wdK7uLFx7rvVMvFASRmdVN2KZQT2ZQYAcyQyS5JMAcf4ZS",
  "key33": "5QWhxpQoAaNcLj9cQXaxmLLwuaGcWD52Uy2uXSfZihWdqM8NAFDm8hjcphrx9VqDEc2Hr7T5AFMcsCLKisfBd2Kd",
  "key34": "sJKHMCNp79xufMct8tzG9ZNYAskEjjCHLdZbPfAxkr92bJhFsrsrCNXDiEDd1JnJhEzvuVmdR1jqaaurmVGAnJ4",
  "key35": "51ZiLq3yrWtoUdagApVRJdutPML8Do1qivV46bM22hQf7Jx3sgtLY7brr6zz7zQji6xuQoZf7HpR7zgtWBcrb9Z5",
  "key36": "2ugcgqjiitdktVvyKJJfXx4ys251hCf7KAEi31Ugzw11ENbLyLBhBzTzeZq7r6AD6mjSshHCzhxK5XwBjRk96CUd",
  "key37": "3sioCaFRTG5bgQGz3ZR357bJDf1aJhzFucRFaaDpk4oPc4CHT3Z1knxYjQTsKTNPS5HUbrng1AHHNCmhmfRVMevz",
  "key38": "3QLiJaFLS5AEByqqpaRV5T4Yd7BPAPdkJAEvyQLtGX5c5c5FTc5TmoEqAC6VcUWM1VdsvANddLyxL4wAxYtMGqWP",
  "key39": "2Cof6uNZjsqYXS1uGQmq56XPskSyN8LK5wg5V3TyBgn5HazVEyhsjNWEw6Z2yunwfQVDbTLWpPdT5NsgkbUYyyqR",
  "key40": "5wYcrj6VoRsjD5pAbco5FNiXQJe5EDXktvF4G9ALkUPoNSXbYNpDHsJRrZZFB1phr1jtmugCvifmTivkApaJroEU",
  "key41": "3FriMzdqrxrGf8gAS5zj8naHAn8VcgiohKc41bzFTt7emUzCM8KvVzm2DgoEcvushAMLsYRWkTMsCjq5ekuHfHHM",
  "key42": "PYnRRsrsB78ScwaD6ouh5eNFFjfmnuNWJWA3BsQUgX6zkzbdiDyyRktdyMb8kTBijQVk42aEZK5GkWGNvupTaJW",
  "key43": "3RzWHMZi32pP121jaBoK4cY5n2mJ7QYkZ1CH4G1nEcRpQEY53mfhyBELWSHzWN6W7hxenfpokwLYRuqp84KKeBhT",
  "key44": "38kmaVbuFpLg9XVB5WZ1wdW74P2WZfCfoGge7weEirCUgGwiKhb1oqxw3eXQ9nDdxec3vym1sEsMqGELrzUwMWjj",
  "key45": "VWP9gUETKWhoVcLgkGpp3diDTtXoJXdXpAkP4aNAayaWcQV4Hu4xUfG9GWp1ZKjMKr9RRsnZP3jTCud1pv5bBr5",
  "key46": "zSLwoi5UEu4wrgRtegNP6tG3PZk5NsuRDf95fBrVK8PExJix9ptUMoz5vzta1yhVQ9wu7X3285ZJ2LM1teuteW7",
  "key47": "4g9ZSGqWoPs4Sep7wxfHGh7giTovcjxx1bzkwBwnYTkPNvm2tar2JXkmUhEtC6ee6G83ZoY95s9HVj9dMC3B6QVe",
  "key48": "jwFASQwKiH2JQLwuh1rSvjigUxRGZ8x3Fc6sGCEuVYU8cVEXr8T32bZVVRx1N6Z8LxVX3LnD7spiAhpZwRbFAEb",
  "key49": "2nW3VyMD2SrkxcaUoChUSPLga42JaPN5hjTjp3rAfCPLDREr27KvuA5tYqqozzDzUmTs8or6HYgFbwSu45P6y47K"
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
