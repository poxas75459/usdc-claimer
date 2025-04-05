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
    "5TEv49e9p7KRcTzRaSvZAeRxDoFEtHYCAdeEZo1KkFFpNb86MqjFrU7Q8o4aJM8wwCBi1viszrckoqz7RoPYHUjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDrurKhkvCLAdjnWaVELqna26f7jgg8bE4dDe7HB5yegP9JXmnuVyYARJaWmJ6A67SbaHBmdBME7opfmQATfFUe",
  "key1": "64yPjjQrg46XYQiw8nMwDpqegenraaS7bKNmqQLsCok83ffCy6KbP7eiitmmc2UnzeLEGS6NZ6LQWZhpD2AKe9x8",
  "key2": "5x2956KkM8ca9qtSD2SfNTjbqmMVNr8FjCFWWRE8cTyWXXAyQDxAibMD66LQEdYG1pvJUHJuLUqEBZ9VubeemxZq",
  "key3": "oN8ZcgxYzZ9HYYRNF3heR6jn3GDX7AawhkVG4W2Sj2cr8BDKPQvvrpzMpTsaWYEPThfhWyEFuxjdap7ErVha2xd",
  "key4": "441vos4AGAf6zX2p22mrixWiw8KovJy4DW7evMTLL3q97LhQ8vwNUFYPaEsbMznk3PfhQ11cwiUCozeX9idg35wB",
  "key5": "35qbkTkin7tzmoVPLmnKbEqdDXbF1LdbjEnHuFostvyPaf6taKkvujy2kd4BNGkHwFkyqkwNKko9UEubHtk3Tv9c",
  "key6": "5tcVAcnscjmNKPt3GLLtHHEfjAocJvoz9HYhcDygcKbG1nyiphK5MiUu52erJ68q9rgpNTAaF27mxBCgBhVWop3n",
  "key7": "565QUXQQXggfGQxQZuME7Nj4YPE113KCBe8qD2hnMv2QuYwGCNUB97u89a1BbkKf6EjhewDHKGCL26Bu1GMW1ZKY",
  "key8": "3naa6mPxNF3hnw5rB51X7nGdYxFg8KSz2rMgnsvQJSjnJE5hfMmceUKqTquNT33xcbEnGND5ZjBjZPhBgdDeHH32",
  "key9": "4nqJ6pAhCGMar36dM3oxKjgyW7iJ1isj4de4WaMdSvaXPzHJEa9Q7hkDuRggqKKC39YZeb8ti1xJZN2HuAKNrraG",
  "key10": "YrbiR6aMQe2DK4sWR1ZVKKqWLemgJfCPe9ZSJqpymJKjLsrKMCkdzU3NXPpqdypkmqQjDMjYnRqeUY1pZdBcB4r",
  "key11": "2VQjXFeJwAopUuJnrJ5teg5CEJ7KD1ke73AVL9ZnLJ49aZUFCmY1KZNdunZPJzGR8X3WpiegWA6vDLtpbzfd5gEf",
  "key12": "2rJgJXyVWtJXcjqT2ZYWPTJUoJSjqoMimHo2rPJSMEwiAdsXhn2pi3rJnvoac6oQATEXwC8iZmbMoh55JqdJPcSv",
  "key13": "3GLf9Zt5UiAKpMFR9p46L2xkGDEZyGsFbh6ochZbJn55QvsGxonhzMCbwBim3fr5SDbBrjTGs7DaFUSnp29nUFja",
  "key14": "4xHoi3EAESGR4pmNhwG691DtK19EnSPeSp4c6UUCcKHJ6gubNcGjeMGt5DyXkcfhEVU9rBf8UobQ21wkFAWopKk5",
  "key15": "2RuQhy3L6Tq9BX7TAs4YHAnEZDwqesxAJMrhom4XGZRX5JBAFN8ZsBc8cDZgufQcWB73U4JfrYsydzPU2onqcW2r",
  "key16": "32qKbA5yJB9FFeZz1edbCktrKm2T8g6YYvE86TWKkfVNcDWZMNXSr8pf69DzbecxyvUmWCtFgFDndWa4ZsGYmQks",
  "key17": "2sCm4mZpHrwFsreU5NqLU3X9jBga6xLJkg9Vv82X9VCDzpgaTAKEW12DRFEF3kvQtViXjJLJucM81uB7TMmZwMFU",
  "key18": "5NX8REoNcWxXoeVvzFKSqsGw6bjvRjviM7G6gnCB1DXhCcu1RVsPLmh4UpZopDaf8r2ogYa4ZXThBKcvEu2XAfks",
  "key19": "5qNh3HT29TCRqqygLegYnKvhh4EieoamYuBB6vSjeb6cc3DkYtzkKG8tTeAA4hJWuoHwqyamSDZnuJdbm6DpjzUk",
  "key20": "54Ug6sVDTFZYL4MTmkMPEeummMyauHPbzB77vMeDRoEjyL6YEpDbSyie1Dk2sbpFySiVqLwhdG2apvYeCzHWKuz",
  "key21": "5BQHrb9gUCBSboiddkZBEku4kLjBr2doXaU8f6uSm8V7Go35jB6tExCsj2Pm3MU1wTwpKgbXhofybvwycF7Uexyb",
  "key22": "2FSZKexv2aod7CRYZ2RdvQ5Cm5DcWocGNdZJyDfsxu82jPe1AVFqy8q9QFqJrdzbD8tNckvzMbEcidPYyMcPZtq8",
  "key23": "22DXy8sDL6HN9ekeeZhcJc7NMpqq3711u5AzUy7s4YrAZ3WCJU33Yi6p8sHQiFggnH7QhL3rTZJPNwyMKti7NDMe",
  "key24": "2KLnnXeCjGSGnGNEkBfvAPFY1UnUKxCwLBHUUkCNURvPVEAMPKvLKzd9Dfrk5zM5tFZ59i7jhHosjCPbHHSriK9Y",
  "key25": "2q7r5tVmVU9drj6evz6CpQ5ccPi3rCt9AZXhEddKHiz9RpKDLFUpAsZizYkJEyk8yoDugrWeg9SyGDpQNuomaDKA",
  "key26": "4ZFnxrrWN6v38MqPhXWSHvHp71NpQfYVtX2QzY5J5STnreo8UdzQgVXsJkE8SHUx2V2U1MHWLuMw4QmpDGofEDhz",
  "key27": "3Ynr2s8cB3A7h62iq9D6eSAjYLkmp1MzmfpypV9wMdgxUaBZsa7F5TRjPkYyWKWUwXrxwdfEoDt8cdVgUoeR8icF",
  "key28": "2v4cysTnk4BAYgk1vULLAnSaSSZpfibyFYJvfv5JgVZDW4bSP8zf1subVcwpZ3Ljns6NKd8ocGibuqxuD9KVhLBY"
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
