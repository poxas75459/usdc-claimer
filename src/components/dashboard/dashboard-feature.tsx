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
    "61KauvED3vrScBdzAqGRBu6sJp1Z2AaBg87RHHdPZHUQZpgmjysPVes3eMQP97631bp7P91aay86QfrYDieNWoEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VHJ1i4NT2eWtoLrbGLD9CpaHfS7VxqXk7QLMG8eskY7yZgxEebejKQ3FC7AKycdHsz4vbDi3iox627ApyjwQ4r",
  "key1": "XpgzB37TitisuLrYx4fokhfjPfdwxrr65QEfR9R59PAHV6yQjWUqnEnR3xt9xcYeQspY2dFoYUqVJySD58ttP4u",
  "key2": "2r9XFVkGV4cZ8aJXYKv9fEWVEe25HyGJhjreSDgdH4iTV6uB3JM7uzrFkY7EdN1NpnQqLRbcvJYRbmL4dBxLQ4fo",
  "key3": "9CJGcTgBdAXQ8XuZ5FCU7uMyMv6Q7BrbudDg495RZ8Z3gabPd81mXPPpbPcUHDgCDoVEGucN71saQsJioWLS2xf",
  "key4": "4nCQe4FdH6FTpCsTUfFiabppJ57N1j6NsoHMSw14QQ1SagmeDi5fczuQ5gZfgqUU1jUCjK7ebXHUqHRyyvfa6z6S",
  "key5": "5HfGnZmmfHVQQu9RgC1SkeScGMuBZ5QJPRzkxet5uKbvVpkWmEUfArTiGwfk2bYtK7qkGykGxphseT7JKfWSpFbH",
  "key6": "vWLFkNWpX2TrKoSJMKKJvtaMNHq6HPPda9GNMB3SJfxfX1eed8XaEHuGhaSo1r3hoUduQhGKqCjhxXcqYQ7NsyK",
  "key7": "3dWsfhwrbqkuhvHH95RHcq4JUKrYvoaE4ZooXZERRhGZgLpQfxS6z7N53dTE8fV8j11UCUi7Ad7wbjAsqccgRL6p",
  "key8": "2H9B687wfuEJyc5X9qtJuCWxoEMReFGT7pAszwyQ21QRdrzCasewoHkKTjAtmHF3H6q86nA7JB6iDo37vBCfzVWk",
  "key9": "5jSmYPrWA6K68PP1XVss3aQfy5tffuuBfPYwVN2Z6Vj1CKAATGHZLV1XuGhBFangZ61nYCSHZV3v5t8iay4ZRBTe",
  "key10": "4k5kX5q7FzZarZ11xoK2TUkyd4giwp5oKZMq44Tat1M7TVV28Aq1Dohohd2G2go6SctyssTeQbt2cWC9gyrM9aKD",
  "key11": "2Kbkg6wuHaM2Hh4BVpMNPzKL8NWb5AQrtzUFC3gBFmXAtktj7qbR8pe7A76m6FybwG7FFA4yH7SuYCejoj5APhuN",
  "key12": "3dRiyLGUAz57oNdo4ftFim2FJgWgXjTH4NhwdHPR561FHxQ8mmz6XtTGC7txWmC4uCqhcXjjAbZMRb8PHMd74aXh",
  "key13": "3F9FDWhLAV1d3R7gC4KNssJpBEjfytUhFUcdunYXLV2Xe4ZoX1URnkonHA6vFEZwsf2nwVEjsnjdjmya5ngTJtWb",
  "key14": "2AvHo6zzn55edRHyXHwHHWC4EqqieHxr5MwKZGvrkw9S8fKw5JtzKcPHc4HHERanFJrZgMeWQVgCCnR5BVms5wCC",
  "key15": "4egAFDZpmnLAaXX5aHE9etT63J6K6XMM7nVZJYQbaRzuZ6EqZQWKzLB5X1mEBfNak3nx9H8dJruWFbSXK93VTYXh",
  "key16": "FanQBVX64efwVXmivXGRt86ZH5t5VsSrKdRzpGd8A1o6K8MnG91ZAqv6swyQUccQQumCcNoHEGAh5m5pSSfZKaw",
  "key17": "367SfNGdftcWZxWnt2QJj44oWWMHVnZFyESTEfJqHeh92rUgwMHgBZFreZK6nQgsU8aq7qDKaEQXnTyFtYHW4oa4",
  "key18": "3sW1QDyKqb199f7p2NkuSNEXUKz3eNhV7uZNKPr9wm6VDhA5p1Aj1kafcGbrVztrrtaayLmH7cy56EBUZVzDw8iu",
  "key19": "5PHEKiqRoTLzv5F9DV5BQUyTKX3d2rR1iBeZjJjASSKuYU7NoE3dzDMgW7XwmeQrfDdRGZFdiJ9Thy3ofyBFemdc",
  "key20": "5o3ud5o2cytsy5SXL1ALSj8KRBPxjSx6rqWw4DzAn5DYefhP5fvNryQ9u5mPE8ZwsEmyY5TspAD6DeiGT4f8GZhS",
  "key21": "FCCqUjGAo9KSKVRWWXsAUxyM3rsdL1W1SvoPBwiZDauemLamcn6UWhT7W9NDB86DPZSEezPin5KZGTL7cr2P6YN",
  "key22": "3vjH7ExgRSaaW89j4RHMgDSe6uKUXDwnnEaaj28GCFKxrp5yb5m9h2jZQGqyEL6PWbJtKeqgWW9c86sv6C9QtpVm",
  "key23": "41z8BMMkb7iTyamU5yWZkeq6RFkMgoU7urvcxH5qEXPzb7KKMphCmmiFpMLahN8oCLf7KX2oGh6KauXJVoexEeLL",
  "key24": "2J2NkAbM3djusSMKqkHpxXEi4DGYfbkwMGQp1f6gCU6CmuE64Rr3CJNcS4amjdTVscBfLWLVm5meEcfyaJZo9riD",
  "key25": "42qMGzm8kLJh6teVKFER3xLRuzSXmg81BepeNgBuL6Sz8SSoySLMGYrsGqXRQQK1yExZSDXh62FV9Tmx3kKT1Ycg",
  "key26": "55pMBEqarVUEtJ2wHCH7C7JiwTmDjkcf93o7AajAvfBvUftQAxm1JtRq4wioTFzFLuba1EkSQcdNUbQc1XzRBV46",
  "key27": "27N7RhnM6TdnajZMNGEEdLXotmiGWLZhsVXZp9JimhwYuEk9viZviCXuzw3e5taKkAt1LpjgvB4gCoYkxEik2o2J",
  "key28": "4PspCy6CWbSAQhzB4zAeU33zAfURVv7Xu5jgzXSkB9v9XpbcCvuEe2bR37zbnihJLsqmBQaBGggVixNYN49fk6bW",
  "key29": "3845dTG2u3p9ZUQ9oFAvMFazAXA1pk2cSuF3csrukeE9XVzomw8qCG33tP8SDQiAZfgib77LQRkjiWszRqqm1auw",
  "key30": "7spKpiNPAC4YhfU3hs1ww6pbfcWRztWhYoAjeSGtRqAHDeHSJ83zdAfxtEZoXwFgyq2M7NPKX7P2wm7q3swWVts",
  "key31": "4zYj8RKzpkNmt4J9nhTYM5qgmbGHw5NYDGewDxacqj5d1qVeSWsDoUoRs7Y7iD4mu4wQMv1v59gGXebFo2ctJEyv",
  "key32": "2yd1NKxjn12ecETAo2ZqySXXvF1rwy3iBKzYQ3EP2Hzp3uTenHEYfH75gNbjwfaQCGAX9mpfe5N1f2wucdGm2pYz",
  "key33": "2LkLUFBtaD3DzzB8GWxsgBmKBaLgtgCREjJrpCFXUC5XAy4a7PsaYnu5JraP7DDTVRXKz2pqmFn8wEXHdUfHCx9R",
  "key34": "2TnMyAZEc9GWaDACHCPCLjV42CqzAtpse6rmQyL55JnGHW2Jg6sQ1WPVpE5h9hnHKWLM88Awbpy9xiVU4Bi4RGgs"
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
