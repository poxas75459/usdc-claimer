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
    "cexwbG5HJ3hrbsyQJTRQGMryq7knjVaqKjVnX2jwvUJsRwJ1LFvNbn9M8SdAqFMnyQvQQzu4WDAdyoGUYjZ8MzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BmKSUcj1fCxMbY8so6skwQnTuH4HozfeumqQ6t1HZjsd4qfvnnAyDh5DQTyFZLq7EDBJ2X3gCx8YPkqh6imJHc9",
  "key1": "tw8ztiXBym8MJjiVnoVvTNG5DHHXKwERyMb9UJi2m5gwyoSwb3GEvxUBBNMHdA8cScEaY1iLKWU82no9coXCdkh",
  "key2": "WAR6fRacG3Hz9Y8pXHKM6HiC5PKogkBRv37vasXqaCFqPVUKtua9NRF5AWMdhPno6Bf8VYffaMz5JTFwaHU22kt",
  "key3": "2w2QrK5acxxJfwSY3k71EsaBp3smqTySPMyDkxtCtVftuAt2vaVqagHNsPyE9YKKFAL2JQK48sbcpBKb9LGgvhf4",
  "key4": "5KoJgTsYqfku8MvWkdHx8S6Qa4kGhgd5eYeyhHUkT2Ar2mmLWf8gfn179t48njEcyQYeixX9gdj28LGxnHcyrdvU",
  "key5": "3WQ4tFta4TKjtt7XqPeBfd8bLGcPQYvx6KWiQXzbwempGcbGWpKcyBmQTc63TxHcqEQpi2nJsCrud2bi1K8HgS2g",
  "key6": "PswEwgumDy74eEVs2tHqJypoktzHqEAwpwQYkgmz2M8YN2NZ2Vpm2GxV3Q1LYCbwpZVs1HrEQqsps26vN7iHbvV",
  "key7": "5siHeqXqACnby4k5JLj8s5wf3QoWiRAdMmsJ8pdzjvRV3o3nwh21nVWy7KtCFSKiDocop732tggHtgxHJP7Q5UUs",
  "key8": "58zoWDMEwn6ock2RowTbPwBsexqBogJRZqZyhGgMdnKPWfa5ZhQBMYvAnb2uXY1U8VNnqYjjQpvUG32Jj11oRrxJ",
  "key9": "4HErciLT3m2e62EyejMkQHF58XaeMj6o2CA9LCcxsy7YFdbNTJvVd5jfHcis1wHLQbmzVcYY2N4R1cGqVVBRnpy6",
  "key10": "3Mqa6aF7rYoi4wn5HYZDH72FA3xvP6MshsU1jebjUi1iiazqaLTHv7ZajfcYjWzGQxdmFPo2LkYtFGbhWutfGy3j",
  "key11": "43ev6jjMLvANwJsF1N28w1qyPGs6BGcWRJ5TbK6t6ZjXy8Tr7FCxyTc1US9rpNckMzfb6cWevxGw4fyH2m2AZTVE",
  "key12": "2E3mLeazuT8gHDe9VcBMcT8o3MYwVjDwpSd6Bpet26kojkALA366iRNoJHp5EG6UsfSfCDNXPSE5KAYY6dpunW6z",
  "key13": "33u1vnaLruecXKgt2VxkHFP6Gu8nj6pBUv9PbNf53oRCMnCLbvk8pyDCHNqQfLDo27MujCMHiZK6EKbeSBWfr3tL",
  "key14": "4KRUJjv8ztLRLfWF8QLUfE7gMhrwxuYgQvRC31B2nGZJEF1wMVsTpJfGfhTrYohqwTLoWkYtR2JgANRLDewQL2hc",
  "key15": "27tKgmdrSRt4VASrw1XR9LVdDN6rEfQpz8hvbuXFAV1S793LGGSqfQwjp8Ps6eqCpdNbAawKRXFPEPZAUMZyZqxp",
  "key16": "3TzGurrreguL8jLymLtoxskwGEpbeMn9rtPQK8fc2amxWxxvaExgpvzsnSiBfqxMfGmjHU75yuUh8PY7YNcbtjvL",
  "key17": "4VfN8vkiPLjwJdiuXVhv6G6hn5ByaEtecxMARmy9M13oStHsC33n5RsyHGYLYrZG45N93sJEHQvZupiSov1RvncN",
  "key18": "5eAUNs1nFR4hQtXjHnk9AxDqc98SKm7mhHRfYsNMY8mvSM58NkWvXS6ARi4g8TwRvpntfZBvoowDPpTz8hBwuTWL",
  "key19": "3QJjGfJXpP6oibnBGrxE2dcKVNGKGmLWDZRAu81hW2Xhi6e8qwvqPMFTpZZbmjNJvUJF49r4dEwXbEqbwFsDJoQ1",
  "key20": "FFfELs51ppLtrpthen8MBd84n1BDxb5FAw7LPW2tMABd1xXF2tWwQhLbs35Lw8dyov2ipfEYmgyehqD1MPHQzVd",
  "key21": "24ehqaLAzagCY9rk9LZagPdHKm8Y38DypptYXZTuPs2zroizAGAyaFAjRzMeFiWwzRM5vmSnajW6NQqfVRJs2aAs",
  "key22": "5h1qKbqy2abtkw5gSk9S49WDsveF385nPyPzaYVejtpEycZp1Jvj9AjjHaYuuvhQmSu88knCoC62U6xNYQXXuDuA",
  "key23": "GHT5DrTjqTRm1kHHWJy3a1qXrj9j8FRJHzakBiGsjnQzkTzjfe87vU3mpPPKB7t6dQDz6LFPHEgiMZsbgXCTsDv",
  "key24": "48JgYcR16HjfH8ygSfpkFe6e3nsKU1GG6EJMWqAJXzyxwZXG18QgjfpJiNEvfGgEVxhuuEM8TWWoRDkXEUAG1QaM",
  "key25": "bX644muDxyaBz8gEhrJu9AS3JSrT9WZELq68DwCscmRY5kQ6FgseJY1MDXuyt4zbsGKFcHen9QqQYhG4S9iPUE4",
  "key26": "5ZYCJbDh2bWW7CRNj4EnvV79vcn86QeqG3oXQu1bE1cRsosYHDqssHXppZe3zmNYrdJfLKdqauAEoDT9PxpELBrP",
  "key27": "4TrL3gWYouLsCi984hhqCzpznCB8eRr4554bEuswX2QqYBCDZZXZay6DGytkZsakPYiYxjaGWFCVbiHxACbWVhfv",
  "key28": "43CxgYs2Vm51L6brQYDrhxZe48RscabZGwjtfGh37RkKYFpbuWyVAFP4iS6xsAvNfC9t2t7r7qRnUEShEL5PZZ5B",
  "key29": "2wv2yft1zJadFqw55RHKn9aiZgBKFJBz6EqNBU6bQFFoS1sCZCQhreTcQ6jNM5tofVcQNEM82RD2jKsirkJosAc6",
  "key30": "TzskWNH8JTai7xQdgcstsUSHqPBKAhgAMrwVawjwegPF7V9BPi4kRZUnGkw7ZJo56HxXcL1ALkhJNu5ksCxK13Q",
  "key31": "5z6Gx6aEva4ojk4PUo9Bux9UEv3YT4412Uh3Gk2QKzvXmxFwE6eiFBKek8Bhg6dJSRUgLnyrQ7VWA6orgDRb6dbe",
  "key32": "QQHtkSrWsRoJNyDoFo3BVLEbqGNP17HWvT24RRS94QKffoyeR7ud3YgoDSyo3BZAuMioMkqAdYbJGCaydbtLD5m",
  "key33": "j81a3FRafunRHJQJ6Sg3ntViFC2zKYa5fCtpGytSFi1Nge2aCTwfPbnWHz74Tk83KdtEgguh6z5n2mgGPLVr4ax",
  "key34": "5VGQcT3LDivz3BNF9vABF1UrpH8yvwdF3w5WcL4vZYFuPqLyS8B1aqJxG52kgt6bPMtnXy92zyxHQRNDE6YefuNt",
  "key35": "3oGhA93fJ5JmaxCQpaBA9CWBZjY189gK75MBxssUjh3cSzmQmG45njsaRhxAmdWEAdJPjai55cXLnd5UrpSEqjj5",
  "key36": "3z93M1XFNryjQ8UNVJNwt8PYyEW3YvURhmDrZZQri5AyxkNpjzy7DX4PM8pxBGMY7oTfErcbjUwkPibv3YW47V5Y",
  "key37": "46Eg6crKzaduoqQ8Ho92KGqUpoA2syUUuKptaBAtAAzW9YNwsB2kRY6QK4oNkVwSMRen9sdLTW6q65UzCkAJgonN",
  "key38": "3NTnfDyDtamVz2j3j8M1RZjZddQbsjNtKjfQiezu9diVcJwJW64fpMnRt8mmDjnkipzdA6vz4aYK8YavB1hDhTLQ"
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
