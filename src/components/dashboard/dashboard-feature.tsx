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
    "edNjihhadaLsHVpJgKtQxwsmhNk3PUaV69m1bmwSpfqaszyfn1McSu6ceZEmaqzyg8Gm3UHsHJQTMSAzGHwdd1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HoRQZPrNN1emXk8xRTB6HcQYuhrLgfsBsus4PovCjrPBAsYCJwfkrjrKazRy3jmBs8Got67zVfA94KH6G6uanCE",
  "key1": "2Zpuq2JxjPFEKNDM7TVzu76pVDdjjFXg2u1Qq8J92iJuQvJnXY3UyoMsx8N5XTgNcY9jwBUUSxiqFnpHTYJU2VZS",
  "key2": "5kYN5iHbuk81oj8gVWwjogzaH4U34gsWvfZSasy2cns8owYg5ZxuMQ1WsFYP5KhJNgWmQrBYmtQDoVdEbymn1j6d",
  "key3": "5UgiAPbDoa4jiJhSCpwv3MQLNKhoAPWR1vcPjTUKHMNMXqdP82cPxrpCWCHpqSb1TbwNsp5QQuRWmgPSWNMhu9Q9",
  "key4": "4QNdy8XU3W2dCZkcxsHVdfpZfyos9mEmNdBtq3MpoW7u9UtgYZkL82s25cm5Y6zRR4CoFFoDX2G33zG7n2nJoTSG",
  "key5": "3n3KTB96sdbJ6XFfUSuqgRiGve76dd2TjK3mKMHHeEcCveWkFjkwj7gmNqLRbw17xoQN77pshoVGNLyWvVtYRqTV",
  "key6": "2JMM18J6fDkJauL8WViCeVmYsAZVPRXae6KvjB9MA2odzHpFEBXAGvLcp5s2zphkHQnyPpWeV2Vo4LD57je778kb",
  "key7": "5uVJHVPBV7wgU5hceh8G2boHrmzatDsEQz5e9aHGqis61fBDb35QMf1j3kq96QMHyrZbeLeWj6GFbxw83JtAGrXG",
  "key8": "4jjcaE7LucRAMfdvwqv657w5g7wuVemmoqPa4AKLM6n746qEZmrD8E8ec3xy4iTToDzsf29VMdTjpQtepksTDDp3",
  "key9": "3ZjZuYZ8MT6QioXXquTtfJZEKdYy6w1otjZU7pSkQPxrr9BE6CfDSiB86V2DHFRDBWey7zBo2uGhwYS8pJw661sb",
  "key10": "3oAGujxpoM4JHSpKf8UubpE3LppdjDzqhw9t6Vw7VwLJNe4vYyFK8Q4bS1RnLDJrETE1XKKgLY5R3JCnma4W6D5i",
  "key11": "55qc1bNH4W2kqfiQ1EBrJznPUVCBL2EhyiC2bfL47Uuh4FJCVxS7RLkDTNyuw12wBn4KRoeFpvVQGUnGZcGfYWkM",
  "key12": "5KmV93cej9P15XUzgN6kHtZpcufjeitV9qMA9CQXM4GeRFepoZAFRj8JatrKZ9GjgTbr3BCKYgU7MFpqUqD8e2pe",
  "key13": "5L2ojDJkN8z4USwoaJxd6xK2Bj9QkSoeJGygpheLTKjhFS7TcSjkxS5UiE1WDV8xfuhDHnAynHcsKtTAp1LoLtdF",
  "key14": "2pbsaUf9TDKjZV7Gt5MSMYPf7ujXXNphvKZCziao14i5NB9ciNa6ReNWk8GmSTRZY7aFquTVwcEpef2t4Wzo8phh",
  "key15": "2dGGYDyjEeauRibHc7UeuSgynhvamvzcTaCksDezG2AUEb2B9kitWceyDNvNxPwmTDCizK2QVwgWDAyK2v1u8ywQ",
  "key16": "22r1LKAmFZH6SzR3evn22zmvPmzAQxakzkuhW8VXxbQujzVNczeDWzZBFR1DMn16NkM9RXC2jELe18qHWsqumBeA",
  "key17": "6LtJhFhMzm8FqRj3AYrq74btLizW7fq3hDEL3Y76hwYeLRjRgnsANYCiPhdSdUiNnPa6T1789FAmYyBxmYwoJwN",
  "key18": "2Nu6hSCBKAL33mwFUnqyUe7HyquxZVDHQyhGskdNWPtzhLGtEtrzQwJDdQ25jPs83oHGo4BqcAjuYZq8dLqagKdX",
  "key19": "54TawWs4mqkfo5hh6nGjtuJeGYNZGU597eBRobbMcVH8GQCt1odFaQGzwrBNcg1Ha9n74GTBkw9JLGE2f7P6y88C",
  "key20": "54VyrswLWrkjGEuEkBokRea9cAU3VNMssVetquj3MH6wEToArYNiwHrfNLFbo4R8SLMCjtXk63Z5FvUbZvVos96d",
  "key21": "4sAceqmWqrBEp9K4QZH2E4yWPwLSQnrDS515CMTSNBaS9PUbD3x3WPg3xQNEcuKUWgrKCjzrJZLjpLh52zz3dT3D",
  "key22": "51h53Xf4eyVSnATbCAcHqk69KpzPWKav9GjGHTpUHxrZBe2RjaTjswxeJYz6ubRBougfRweqYsyfLdahNnqaLTBd",
  "key23": "4VNM8up17XTDoNtMEgJLi6ypVjKz8atQ9iQumWq1bV2srMRvRwjjXtUxqMkV5fpsFS8MkLUpMjrsbeWfEhCq7Kha",
  "key24": "37Wu2Es433cGhXiQed43hNZ8kQZpMZKX7LC5yNtjYSkJ7UE6SG1kYtsikNPfKKFqKamGQ2npkkkNkomQeCY3VUBo",
  "key25": "3aLoZxDomc5dr17WzX1Wrmk9Qrpu4EJcRYKXdQCyMJms5Qco5A5iQAvWrQJ9PEHEqv2YijgVGQ5paamZ2GA7gk8i",
  "key26": "3PUuZUato9kw8hssW79if8eyrTZAHSvTe3D7RNQ2zG2cshpdimgrTYiuDNzDWv4E2yQhZUQ6KhyiNGXsiXejLafT",
  "key27": "64J9RDn1TAxL4aQJStWLPRFsyJNukfcgPZu1GugntBJAtvH7Pmp1sjrVYZgF58WYe8R73oCghmSW6LGmFoqnrYer",
  "key28": "2zmzjvR5XAxghuyJg4NpLMAachVeNZwsZe4kzuebfhZLAbztZqp4Mg7JoCKkDUhTuL5oeWLd92WDNPnH9HGoA6YY",
  "key29": "2epiFXvC2zoRLtgfYff78WH8w1E9ALWhkMRkkyfARoczYoGQNQwTepRTaySu5yuPChV7ngSh82UWVqFmcqtjoJoF",
  "key30": "4GcXu9BPCBGerE8n7syZCVKJkWTjEfvRFzhduXCqxXKCAgcaXGVqeHWGmsoxqZtf32TuLAUfbn9AjJ7NbU5M38Hf",
  "key31": "2WJWuSFvwZDFb3vboSfhuNzB1NYFDWyELxgnnAf524pEtwLMpYus8KkHvfoZ26xQ9qVgq3p32MNMJYZF33ZLs262",
  "key32": "CL47N7uBHn5UApDQuGNbh8BnEo5SMsSjR5WZBdw4Ptgv6XfJ2aGwm5MvQyZP6eqDfLJkPpLK1JEKQXgi7zuorUH",
  "key33": "25sUtwLFxeMiMpn7PUMS6w4HBkUmKmRu7VpisXM6HvfejT8J6D6srztGkE2ieW7gQh5RaeZLfLskE7HLhDmhfnUJ",
  "key34": "5Ro8jgM78dq15nPWjw6ANRAU2Gy6LxnRjPauTxUzaF5ZNmhk378usXsVFsDbtvTpymTNrxXH7X34iYsrj3AsUxXF",
  "key35": "48qaa5DM3h37K9UYffNytKHn8PN96BKLu1uYrLJArYiLgD4C7HXmueUYhYp6T7WNVT3jTgtvrs1PYRy57nVm1BVb",
  "key36": "HXALUNSdY9PMZSZXfXT6bQNaGsc89ETa8hpWVm7mrUQvpYjBbq2K7BAtUb3vgnz5AtKSgy146CvRS4gYnAaK8ng",
  "key37": "2CrUGR5QdLrD2NA8hePFU6RWKFHEnMK9toMgk7Wc3B7vvRZdR2P3V2dC4aY1LbfthyFZC8Z3MuJYMXMazvsKLyTd",
  "key38": "5vsYssNq3fLwNBUt3k6oy8PgSMdDo33ap9twZABg2BT4NUWtDnTYwJUdN2cX9Cz9Q619kHiK7bD9rjosabPEE4Ko"
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
