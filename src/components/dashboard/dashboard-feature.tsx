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
    "4ZbTnzX6HnHDZh1eE54JiHx1Qci5YuzgD9F4DxWnwLMpjpNiCGNYG3mB116n7X29C4VeJ56jeQ1uVC3wbjnNxjQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8DqnvnrbVPyBUbdXQgAsW6b9SG6nQD4nfZFrehUjqhebNQ7DPuezGAGbhRMEgPqjGBWKSorUx88BEVrmsrVgr3",
  "key1": "2NUvAtgbo1NpWy7nAAZtSCuJLY4GMwEiaM1Nu9W1jUFZmGVArVJgt7AuxLmozBzqZw4NvMoJyLeEmWrXShetHbXE",
  "key2": "4KiZmhmnJ3QhnLaqEc2bEqewPSYsqsPWEiaZD1SGLGxypPSmkhmwNe1jwUw1qyzbszQYESiUPZNcwt7DL97Uf5XQ",
  "key3": "sTZssmmkUPXnVyUQad5D6URhSyzQQXNePv1PzHiKD686VnynjJw5PuzCVMkQRjw1X3Y7bBEhJvGC3i7MAgqPewL",
  "key4": "2UpXV1HhR6CDi7RwUyHwE5vNCY8o9HxdgpS1qy9vD3EZ4i9XPgtUxR7hbLrSRoEY4WY3eahRjxkEgNrgMkYn1zH4",
  "key5": "52RPZJSdnQ35MZPTJ32rGV7SA8AmouD82zBFKydfinRkYYECN6xu3hDaCbahTqGHmUagravnWEbgLpxzQ8UfCi3a",
  "key6": "2riceYXp6i71EvGN1prSjAPLXHQmMEydjEvgymyerQ6imkndzTCAPZckzxoncdUD7U3VMGGxjT2YQZAmxBrcHWrZ",
  "key7": "4G3sxb6inKBUuuaqfua2x8h6sUxz3UmqsGSPLajMRfXKHWH8Qjfw7eEoRb8ndCoQzrAzyECW5ziQjSUSWYKnAEmq",
  "key8": "uRVQhdwUWhuPFHLEapthnxJNMU2wqp4aosYHhKkrZeiVqEHSJjV5gMAyx1JdTW45TJGjhGGJHx8odrwxyzia3Nq",
  "key9": "5hFMewKWiR9wPp2CxagcVKPzp614rvwTxnrEt9UM4ngtQ1SjZUCmYMbdeuRsrqwiLgVxtEztSK3caXo7pRptbcFN",
  "key10": "2mSTeVQPBY7mYttyCMhzNAZrParxpadpT2YtaTnL92s98aFh648ub76gjDc2V1yKkDHcB1wE2xCkKFroK9x21aDr",
  "key11": "2KKwoG2UXjcCQpx4KH8XcupA1D8Lr3q7XcVpPqaWyyK5DfpB2RjMHkdpEMs4pZao6B7ntecdgTUCjSoRhcTqJT6v",
  "key12": "4fsnzn28XmRoQ4oqCxm2DJBXt6H67G42eDB46Ra1kNP9FUBnmycX4rDtJTTUBWFTNzzzJK3iy5rmG3Y1SJQ9DsxE",
  "key13": "2oerKQYM3kJ4WbnwYgPnTSVba94vyXUSs2wXbNNQMNdNHvkLteEY2uQVQ8HpMjtguTkqUXsD6EGUc7UxYFgUjDsk",
  "key14": "huvaxjT8LuWJjy246C8xmc6pD2jESjLhqHsTDfGoGreXrvWFdfeDcaLNvNchJACiUCkipMNauvQDmqPz23yRY3N",
  "key15": "4x2HXptdGJkwtGwcc46NGa7qhVeSJH55mk6iP5DURizYRpTCxa3JNALEqLqjy7gftvk8bqeoweqpMcXu8wfV1Ssz",
  "key16": "yz7wXcy912ULuFDvEmYfhf4dbLAp4YSVn83utFbMEiHQn1Q4k7G96uJvpH7zu7kcknmn7RabyLdJXM3ksSYN5dE",
  "key17": "4YEjYi9bJFzwrYa74yMeFHtfpn68yoNrdjAETRXr6jvkiZtfMTYFDhBku9pPThF58U4nzhDz3j9djmU3sM36oGxK",
  "key18": "4oymuV5DaUtc7i46bexkRL4iKdP9aJ9EFsSzmbaaRXKTaMfCXaaPau7wtD3VXHSfZofY7BaDcgchkckoT2dn1htR",
  "key19": "43TcXApERzqR3WU6W2iiZL8jme5e36nK8KJdHhF3qFCYJ8L5PN5iGyVgoEYKaDEfrPefBBX84JdSYHUeDiah6GjE",
  "key20": "4woL6TmZJCNsw1gsw9oj9ZSgyYwb6aAGAbWNzpi8ySmzapQwjKcXQhGhx384VndwW83VdHZzujs5e2xjaNDoTxn",
  "key21": "D2exxHis9tZS21DntHmiszXC3qtQas8C6zYxnaY1iEQeDxDn4NVfwNkG8XhDms2FKGrYBiRKsPHTmKq1Cp5MoFM",
  "key22": "3tVzdaV5Ce7hPxrBLcfxEe2TDY1vqruzsTbG3HHZnogA4sXmMgkBRbdUa2UsXm9ev8WwCYpXZstMM6vRWKCPv7et",
  "key23": "3LM5vuWueXNcUBDq2x5s8axR57xbRbdL7qovSLZumDEmhixyAUs5c8SesrS6yzifpiq9QsqotsnnKsGBtBdCknWD",
  "key24": "3o7suoAT8P5ADDHrad6DyQ4uXB8JmkqNHJ4ta5CbjAKyfYS3FUo8TYmdVqEG7X1vMR5VqhKwkQ1pXZWmRVr5HfXd",
  "key25": "3PK62WoADhLenpkYiLXNSEeGiKnCC95VgqeYd6TybJhkZsfQ8MKLauSfrYgf1Nj4KfkBeN7Gc38YyMWCZ8aeYSmF",
  "key26": "W9F7Umw5bTwuwZqknRcrZn8PFPzyHEpC37xhiqYN8tJJotLUumMLJQSuYPmwS3xARXKew4Q2NJdBTfJqoiACXXT",
  "key27": "iLhdMrCfUHrdEysnCYLSwmHcFcNgxAMHUQSDDy5Ee8zAr3LrwWTVFGtscH4QtPsdmTXgR7Zbkhm93fDsvJGfX9Q",
  "key28": "2rYdpVX91D5U9cBy2gWUsHR7P2RGxg5QKfyr6mHrfz5ECuyZXEs8TmvGgRqorzaJkefc2f6CLV3VJU7znnA2Xoz4",
  "key29": "31BugpRB2YE3mnpMG8YxZo9xmLFhHq3zyprnAsb78Pa9SD8eUQr9Qz491uACorbFBUVSoAk9mhyQABv3SMnYBF73",
  "key30": "2EXBsFvXZGWtLxEp7A8wLjr92jQV7eAoJtzt7orgSsg3HMBdeQeT1QQ6tmk7SwHN8KPdogfLUCBYaHCA47KkY3Kn",
  "key31": "3fKjnDTnjuWLsUYf9BH29Wq95M8Gf3Q5TVgcEyG5m3Cc5mjRgEhKSvzHir4bixdLbhzUMsbrJDte37oLLxkpX4gq",
  "key32": "5CbgF7S8XF7gmK59bH6wG2m6MmbCZzutbMe6FajUhcovs7Lq5iir4LnBQCiH9AtNsfXsG12LGzAyirMWJCBMVgLc",
  "key33": "29SByccpmdmvfjuUKLLcPSGgKSd3ABkK2yH2S8LiGxzaHwEfcwk65yUjXoRvEqU3gJ6C8yuA6fLMq8pWBCf21N1S",
  "key34": "5vsk4J2Ky6mz9TACZDtEFfNisDzUYijZ7dhf4THEwHCD2oosd49hza1v1Shmj8KJyRbctGJGmST4WcJSC87szJ4",
  "key35": "4SwEqvPjmpnUYxTWxEiwqmydZfcHtuuqJrS5yGZUoozPmkhG3kmi3bJ6LgcBdmwfssbuZHy4Zjpg2rAh85Sye6Vz",
  "key36": "HchTekcyjuooGjp7xFqXGzrNEKy8s2SzdsXxvQJq3kLT8Bjz6pe3BKhVet18mpNemRfKGJ5MxURgnQ3AQ7MCEqJ",
  "key37": "Ng781dNMLpYvzeU6jHAEYdLeTGeF9YhdjGTYwGpZ6VmDvbLherurjuX1rixmq6csbrccjVZCrXnz3zFabJXNR4A",
  "key38": "5k8mEFdbYrvwX4xdUaCh446icGAkLPqSLfLBg7DuF1Ty3GyiEyUTkjw4nW971rMSdCESnjT3mCQze7U9FDXbDroL"
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
