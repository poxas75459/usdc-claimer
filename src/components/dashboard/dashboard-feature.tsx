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
    "44XYYVVBGjSyQ2UjdFWixeP9yjd6bPsmRdUjmKUoRF3ZSCoiFjw4eSJjZvdcT14eJZJ1evpjYE2EHMNcgKH8SZiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDbAs2LGc1hwizNN2PkXjhX6pPh7pCHAkRxDDY4jLjGL5urgZ9TJ6c1eqaSygtRPYxYq7HbL1MrFU5z6Vh9ygJA",
  "key1": "4j3GQpLEF1qrMtVhjnKjgqwg4pv6yezSkYepyVsAiercEXrVt7nXYPzG9KZbU7PC9GXAjLNBXSh6mfbEgxjnkDgc",
  "key2": "49Cpx98yTvq6sLaQfiTMEs8uPdZYCydU7ArSkMsgZir5cLABgy2WVY9ds6GEUT6R9J2gbw9f5YWn32YHDkqnTXP9",
  "key3": "5EEuGZPevZkQLWZ83XpQKkPgYvUoKoJFkDquJgPRWLZpcyG3gBy7fD5fEPMduupK2wGvSL8iRy9iG1TWVSwbzTyB",
  "key4": "voaiudqhkKnfx1buQvqsgb8Uk6aEhAoKkWaZcxJrGJRRJYfULbV37t6uqJGXZDdiQnqRYYCV8JnuZ82jmjWwfHF",
  "key5": "3jT7TJ6eufKTLJVxpwGPAB2Nf2Vgs4y8iVbBVkBDPbB8LjUU7SXspJZx5bjUZWPV4zgem21EEbzKd3DDq1pmd6Yq",
  "key6": "4wk6i5RZetEr3A3jtCzt1oYnScMtkwyPQZVQk3qpCQB71f7yXPMBgqqRtZEdNhsdLUcwLb8wkfZg1NHVoK63r8FQ",
  "key7": "2QYbvHCPDsm2SMh5HeyKxYANBeYGyKKVcXBUbDAZPQ71m1f1s6F4Ub4Yw5AQzmTjtV6rGKLEc8xfvtnfcVJDJxfF",
  "key8": "5H1GqdH3VdTBMbJenQ9knxy9DQ38BjFSryUbhhqW86DBbJ7vPGoNNCEKvLG1SvWnALnKynW8EkBzwNzeJ4NtmYpA",
  "key9": "5QbyQsqBdnovUfgG7fRrAzDuHEjqKh1L9tKPvC8KWsnJTnJam4oeKdN4Z5B22sYr3S8yRQWXxhVSJ8Ro9fbp51EY",
  "key10": "MRGBHzSahiFFiRxNwoN71vuxmGXxQsprqGmMhn1HBdfFHJKJZGxd6LzV2dBJMDJeSkZbLcJBERGXGjwXdB5BLVa",
  "key11": "3Gn5zW2VRJmoySM9gxwr2GP7kFj8oX2YtuXE4SwzxjpEyDDHkjEX29FHpteQXJeo1zjXmFjHy9Wms6zq7f71AMo7",
  "key12": "2jauN6NuLEe93oLFzFhyETUo8q2auZPndfTcRM4SbwwhNNTH7aUjUBJxrvpWahjKzjMUQvt5G9SgUUXzJp9suUcN",
  "key13": "42pR14hHZvZP5zvrUuboY2V3wzH43EMxUUhPaef8TNZ3qvD61wVA3HsKVu5Eb1NNJWaPZWr1JvsDxTQUPdyQHPoi",
  "key14": "3cmx2WfUgV6BKMEm25tiTRPJ3uxsWhTpk3TxptQSa5jpMnbpeeEiuBofS6gMPJq6ZjRVmZcEQuRxb5MhpdEaaH8e",
  "key15": "veUWfQCxB51XQNccz46jC2YXxngXVbj98NWPh7aVm9TdT7EgR4D6nqwePVo8wM63A4VqEKka8hQJPvHz39HpVvX",
  "key16": "4p6Jtf5j1u7FoLabBxKcA1eimb6jKNiEJXMVHEmwBfMZs52NQoEtoBYxZ6CbPa3qJYkxKE3JTSCLUTG8fqNxNHVp",
  "key17": "4tiTzgcfvRypwVZEPjEsk4SC1kUh63YEqWbp8oaWnXv8bg5bMoM5UStzh1BKFre39qF3FQJZzautDPmULK6eWnkh",
  "key18": "5qNBSU3gq5xxr6be52DJQ69Cn9cxeMPTv1uRXn4zAsRjHrPYJePC5EGtpS85cwiUoGTuLF7mmyK8iRWU4mKZQnTY",
  "key19": "2qMzeBpKp8j7gcigmfLrey7HsZjC6msuVifLf9TuJZ6YQinA3V828kBUaqxzwG5KVue2iMBXVAHM79Xcb4V87oJn",
  "key20": "4Csj2n619zfNHuBp9cESsHtx9W2UgqKcUvM2RUmYB9omLE1cvwHPkoUrc3bvf7LBjqkUeRtPg1VZwsnS2N91JTV3",
  "key21": "2EUnf6NaKpnupzSdGXoQmBCyNC9sQ5q9p9q6W6tcyRN8LbXgbqa2UinGZh6QMmjrmMAQyWVav8rGdCunfjH6mPTR",
  "key22": "2zkoLwkAKnkmFwZDPznypLmeUUfRuNcoKW4osWGgERAXEEYrWuSQFn1Ls6qEBAoFiAX2kkJyoY27PxRoVasEq9Gp",
  "key23": "28fsqRw8Ts9ohBvo3eSUm8aagfBjWS5ZEGBBN9kUeCdj8L13kwoz5qjJgjUxLX5xW6PCKsyyFYMMPbGaxFiUSEBt",
  "key24": "5dcEsgK6UuaoS7PXXZkHPForcxDB8E6tiH16BmDUVSnVKRnk2Y5LwSpkYntSi7k2V7cmfBQ7P7HiX9ySBFpS7FV8",
  "key25": "cs9vf7RiTJEBFEmHYJzNQ1pftPq9sXgsGgkEfe41HDPfkpzwzCq1ZbsjN1feUo2NwMQxrprR3kMRsi6ntQbEoDi",
  "key26": "3DBhLkkwFUkFXJxjtUiGm4njDLhGvMc4AytD3Wf4LqFPrGf8KyA1EdsvqcRLQAfUCVDjVa8mvoZh6LXvLh3E38o2",
  "key27": "4E9HX9iR1j3LFGH1JeTYueL2WTfGNA9HoNSSVVAjVZ9xsGLwWrnZcE5hHCRD92oTCLuv1QGZRnDeMADRdJj7Nhes"
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
