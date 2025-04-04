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
    "2dvkJvdF4vUVW8uidNiNETPVR5EYytQyf85t6Dk11Uda3pcianhsiYyny7U9o9vyw4FaeYJV6SxVRb5z96hBuv7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoQKCxcbnUXnbbzgLUzX5BuZGMUQmSiaVtMhhcKS6osanVYpDKGezzUsFNwZAZmCXKqaZBAJdr6rcpcpw5FuAhJ",
  "key1": "32A3vsMZ9YrFHLgUJWBTCMYM7KmW3epqvPiUbYpuVgPfdwuvU28tZoxTzcuojhB6pSFgJBSLDaxTgJup6xzYkHQ5",
  "key2": "5Q4h9B82AYuPZfMyqsobcbXpHD5xa9XtVXwV7oQnuCMcyMvXAdjb3ydYjf8x98ipEbN5yakVwdETPthp4vu5giKZ",
  "key3": "9XQzauQtELPt5JZbP8bPoVwsVynetBrGaTBwQT7xidvJEZy2TQLhpKEvsiFgfCrqYmi1kjHaoAH5BRKxkcxEWTa",
  "key4": "2Q637m5hSgAULG1cvYU5fDLaPxphCfCybUG9Kxm4cbdY271tZeFvcxnVtmi4KELmFfjp6kRngexugRtWdjCccnTE",
  "key5": "4iN7M6oeMdvf1f2gY9FE9kGqZnNyxpzbGw6t3NPSNanz1BbKCgUDnv45SMEUsaLp6H5tawYKA54SB2ibdjJHS4hM",
  "key6": "wc4rKFrogiEZpKwPtxQQ9ok78m8oQgEuMyxiBhqucHMrMJXFFBpUyenjnQ3vFGKYnz49ZyfYPWqXp58GUM1o9wh",
  "key7": "3cV53gjhtttNsvZyFoFNenc1Rr36UDk4VhHPFEcmYrxqJKpgAv3Fxc2JqyFKFADh2xX2NQPHuA3uXzxZJCPK5zCK",
  "key8": "2rn1uh2qvxEvxLpXnSbfWnQCTtUZtzcvWE9gzGAwjH7PjahUNJhDjzZuKkKoGScxV6JXK9eFjWudJotpa8um91Da",
  "key9": "5aSF9gF8FeiPUqeHUJnb9NgbfFJh6A2U5oUVeFgLKRL26qqfTTUHQ4WbYVk1CLKz2agnBY887jSCzCRBnecwd2g1",
  "key10": "3pD22E8WvjqMRvV7Lv4d6CU2rHbp7uJKXstetorNuRsj58YU4a1XLXmpN5qgBHdZaADLcfg7iy9EnCVhXrnuXfuy",
  "key11": "3T7Uw8DM7BmQt1JEt37PfUSnAhtJ73KEhLQ7NNwiRAzK2aqD55jqLHiB1gyJNGYF6HuUQH8zeXGVcxqXaYEkXUuD",
  "key12": "4ayvakKK1WreiavjsUdRnParnLeYRgcvz5Du9yNcifkywXemLe3KLXD46idNSsUocFJrxLUNGDPCbk46oRWibqr6",
  "key13": "5hB9c1o51wg18KTgAZ23PZ41L4ajuvq5K9e1RqGZ6tMgAeXSoyfga4ksosfJZY74RrREuZTW91o8y5xxGhPE49fa",
  "key14": "Zz1rReHSS65GciQwGEq2x6D3qNXygrYWZRfbFBTU1t1oZSPborWaphuVj4R9wd2V5Kqzi6787pDwRysYMNqsM93",
  "key15": "12AFUFPE1RhfjmxbYq48U4hAZenQEEDjW52hiAZ1iqSs7ATDkZB82Qm8DjhEYuJsmDg4dhUM2LdTeHqdwAcS6SnP",
  "key16": "4swdGjHLFFkNCR2eFwKuuqiLfGD9LfMbkEJxa38i2yzUZYbRVT9oqK11zkbHWFFLX3cbQK5BS2UGVue9z42YrfET",
  "key17": "2CsmYDXZMFYFccfN1babnx8kjT8KojzzRZ8YRvrnW3Ds464q8MZXVbXWo9RWCZHescsVphdo2zuw557dTTT8tcwS",
  "key18": "223GBLgE6j4rov3Fn2dDW1XeJBh1ZxKSTbqa2DC2n4fH8ENPrTCVztjvShNVYuYD41TJpEqnhszHTsc5yAB7nnCz",
  "key19": "3x4vCZ8MoP2dPToy6rC95siYFEJouaYhszhvEzQ3P3UxiNtLj56rYkqMn3TALV8zPgY2fK5WeqiJncuqv6uwA22N",
  "key20": "4GALpRGEgzGxWEaWSNbgkiW3KVSsqjRFxsBNLYiq6nJ7CvmhKKVmZQdviRomaQX8tQ8NhgfLtsURt6Pgy7Liu8YW",
  "key21": "5arNdhnTQf9AwLxXmAbXfB9X7S8zhtoGkkk6KWCzMQuXH6qQDA6xnmddaGk3snNJRBmLntiTva3aNFsBBXxTnVaA",
  "key22": "4vE1hbxTZbdqWQXucryG1fCCgatDgt15vmJRZfefpoU5zwFZueQ9xmGe9rrPNaeSpU191pwCt47Yroqa7QSbieuJ",
  "key23": "4kbrvHfFEHMEQorBNjtJkUbafCdjrowVSQdSyRoht9nMCNFmhrR1ZSHwJasog69imQqUWWQFD2KQ3a4wXUL4sbCT",
  "key24": "2x7tDnULKumUVJx2tobWirSdEBAKnLaehCTKqTx9JjCB3C3aGCdkpkxNPkSg4ksWWycVCSy1iiYxgH3h7T29HDPk",
  "key25": "27bStwdcHJjGyDvUR5GaG2jemK17BWKXytGtbcxmobZdRCqJjayj1GkenqxJCCk8o32wN9K74V6SmbM1ggVoCCb2",
  "key26": "f6sCyrsF9C2jHKaHfmxCfeTEhEDfXCUj2CX1443Kmpa7wQqCbQ6D7S59iinBfSSfsriHzRjGGuYZU2JTfc3rV5k"
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
