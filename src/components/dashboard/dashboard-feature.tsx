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
    "23VJhcavX3tE89Ky4UsfZUpuKgxYcr7xXNaTWYUgrpZ1jfc1ds2NgFW2bSkH79U4J9zhBvLutCydAb5w7TfVzCfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqqb11BdBJAfuwCJDcfzAkg4gFgr2ohCiG8FvVbpptaNWM71TF7RdMBjL56YhosUqx3KogXyevstctj4aifLX1",
  "key1": "3jGWNzCpifKUNQ81WZBNpV8gmD7NMjqtMaoSKqQN1Nfn8rtTTnwrhJAncoz3UTvq5w4kAES7HKCzi1EpwxzDLKfR",
  "key2": "4q8Z5NgYXgoQVKgRtDCAaubiAcyXagoEL8q81zibsrfGUcjPjMsixkoVj43aHBzLyUZiSCzNSqJw8Z7L1sNcFZmV",
  "key3": "5xCtPXC5FPgWz8T4K6CBT2UiAsFRDrouVeyCNT9vTivdrN4FhS4s7SU89GZbYzM4VKgssuDcqDJjivSFtg3yZNez",
  "key4": "JHL2XD9jwyS2QcanDZTtpRp3X72VGMgg2yiNMsuVvw32hsPGXHJvNCdshsJa1Srqv4oHLbGFWnd5FZoF6tJXB3n",
  "key5": "5ZYVphLomSgJb8yPkwiTNmArLtQ2F5x2R8FStwfXdqLZXrkKcuQsWYJB4NDDCF9bCF5z1KcNnnPRQTaszpGgANDy",
  "key6": "Fmam4WRDk8UMLXUuFmuuVXJWJYNHbCu48oXMdwWHNNEaEcVVuW9WWxY2KgfmKjZ2jiLvLHEGHKAFVPzxh1HS5V7",
  "key7": "FSNmSwmhbjc83NtBbdzMC2HTHFGoYk1eA6G3gH7pEenwa8DEEjBoTQKFv7Bnngh18z3bEq22TaszS8gZtaEjQxj",
  "key8": "2Za1YZeprHJmR89Se4c8KpJdHq3CiJL9GyWGHZXtnJbpKmByqH6x4LenqYCT8PzVQNbfLnUu6p1PRpkPFEPD4yzD",
  "key9": "5ovn9o424D2amC6dniuzaKBGBwR6JqnaSKeS4PcENqbsLSSFditFGxgxfqSJ2R2pG1fDuup9HX65rtFonWjaoYQ8",
  "key10": "3zhJAX4N52xqtapHzHQAGa1w9JwdRAjLdaEncdjGJeNUH6QW1X55udUTPQqx1sNbHykogQWxU1xPmkL651LgUv5Y",
  "key11": "4R9pMF65jrCBFAfuZhPijE95bwyyytBhoB2aekNnXTeCsLpgZ7NxirGegYz2QGn8sCqRfhi9JvMTcK2VJbfvtU1Y",
  "key12": "3CwVWgNrcNhiEXLGkvh8gqEnD3ybzKdM2EZFX3h1F8eGLrXXdzw22gWDwnjNKKvrWgGtnbhBE46EXN4dJijyfD81",
  "key13": "2JK5hNjBYd1An8rWse8QQDoeF2rTru8Wcaqqdp6TS5A8SnfgVHRjDhiyAWonruPdJi7KuYP3fKkexCFe94xVLTQc",
  "key14": "5YXwfnJPE9dz8mArYMfUR5BCkGQsutCsNhLz5dxmvz5Rj5BxcfvLAxH6crEzJgRiHAsSqWxefx4iR6Nf2tPy4ENp",
  "key15": "3fNEMhEfjbFSpFRj3HNy7vKwC7eEQFBRt7AabCy7BM8QqnaC1WMf5kT6neWR3LdngHHcS25JMb6rGwT6LcjGtrzz",
  "key16": "39sE4T7YaUJ7snJmn33DURf1eWFDpBmJkDqemy6JM1w6YNWDnHKQ9nPBq1ZYkNRahr3NV4nGKw23d2u7Eh97eYMN",
  "key17": "4H4HnzqonV9bJTZzkdS45FkWpmd1PtKTjVQt9UZb8dy9HGwcGrqaTd21N5HGVTTEVKc75sGUnRpBYrLkQot4KfvP",
  "key18": "kw6CFRtdhLB6TURmvh8MPM5zRcZKG2htShRCxyXgqg2ucpNigBdyVoSnMzSc7FvnkTSerM3EWAEBLYxB5SfFGox",
  "key19": "5dwenZxwrMPTDxpB9NE6aecdravAyHP88WFrdpJLW9R8CPsYnAMm9ZCP7LaDjW3zWE1iikEZCeNQaBzi3ywknnP9",
  "key20": "ELNBjgXRqFHMxFhdNBX6WbnQ1GgF2fUxiUpiqZCK5AckR3jCYkTfVBurxsR5RXoKWWZsGPS6nZN9WgRgeSjB8UL",
  "key21": "5S3ns3pxHMbc82CmQ22NgGQuZmPenJvLBkkwwpeCRVRFB6AY2Ri5EN92b33VAC1kbkZaytWgzarKM6oveZLfYTYU",
  "key22": "2fXFizYxtHishUXdq52BuA2VftNz9XojN1yBzxsj6T2aDw8KcwmHzi54x4obe8pgGCE5RfkTFvz9VYufH9zrrkni",
  "key23": "3EdAChuAoTV5EK4U2TJipjNcH8Qnh1be3JYkC2KAozNmmE1pBNaQEzRNtT4L3HoQqueHgVgrLLC2Z1VZv5r4bvLM",
  "key24": "ePU3vKxci7UfCqXgM5pWPekvo1zKE4WG1pmCjZqoqxMQ6E6maXfmNuaQLqiWAaBWPBxyaaSQoyN7qErgqdzh4kZ",
  "key25": "GPE13Jqv33zxvY1vmDPSm1iA3vZqBny79F3V6GYyjhsbwv8soEbn2fyQ4e6B3caZSRdm4UmicjrLUAgauTVvmiH",
  "key26": "3WWNX4RDzKd7ZaFYruXVdFkYCvzH3G67yU66tM2AUDzAL3zjzM5UsTGrEy76mJDwyYtRq7eEcKwKjHZYHnWNammr",
  "key27": "4khtokaVJWu7LhtaEmzuwSg3cEuYgnmeJma4S1ugnNLEfsG9ugkLDJahzAEvQpFWHgXKi8bBdEfGr9GSUnkLyxCR",
  "key28": "ks6wJ2tdVMjwrap6RDvbPZdQywsjPZU9RqMMMHVjY8DEEZivf9i1cFghEX3iD9JL93VJkFdACsKBPzRRFXLQEoU",
  "key29": "3yWwzYWM4FVyr9fexncvQ8M43p2EjLekv5j6kbkxEDk51o8obNyA4Pf8gsUKkYizVsfzX2pBYv9AMekRJNxk5p8j"
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
