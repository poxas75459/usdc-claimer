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
    "5FBhLFwzDvaHWwa5K9iAxVXstyNNiEzGDuvZU9U9FAb4ESLL2e787bxsXkegKj1jVuf3LVUTcSvB9qNLTNe3m7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXcbTvPgwrzkexFqwgDqYy9777U62ZMELLwpKW2R2fg5EzR1ByHQnDdis2E8tD3xDjaH5PpEaBmgQu5t1ovz3dV",
  "key1": "4xgjaJkiDYbqfq4wNLB18iGX3239S4jrDDukHLFfihs17nv5jqTLynSquEh6nQLrN9dW8dq4RAmof8tbfdBePAyr",
  "key2": "wMaSPt1Y5om6YKyG8d5QcCf5ygEUevWZuuiNbWHP1ecbVgswzE4WDc3GT3cP4b5EpvXs7hc5BJFp1TfWvSfiDC2",
  "key3": "2fSWPQY1AmY7aqicDvpAw8kgNXcyoUE5W2cTUNXvyoRyKw7WWt8eRQQhxKV1yWrhZ1EvV7snSwWC49hF1VmPaHsg",
  "key4": "3rnwZttBZ6ySR4xJpqEcTmn3QJceNy2nWy4dYNT8bM1FgLewFPU3aUpG2t7446WGeMMz8gSVhXNUvi1EYsshnJLM",
  "key5": "4t91wn7yKoVFxTEbt8A5wzKbLQEoNAqL489shWiQCVMQnUm2b4KdKR7SYKGATw2zcgv9i1amJxL93inpp6FiA9bK",
  "key6": "3iZj6YLEFPXxS3VozBwZRaUAbaqzJ1sn6q6eBgZvbDYpBYxweRcKSoz6Vdrp86wYg46bpkqggqJvdExFi6YkZzXn",
  "key7": "UHxne59h93dqusbPivYuEhHNnakG4PCYPbD9HiPyYzZkRGYeNUQwLkivfoYEik7m2GEHnCTLXhBmNUSuWjSNrTG",
  "key8": "5FEztbEaFKY9kCS4mdcbEarD8FLMbbv4tzLWMdR9DdryAdKH8eLWzd6Qyfinjodn4GzCLwRtpN6PXqyMU8UkUafo",
  "key9": "3d7M5mVjz3iJo4xDpp395Lf8hdLSxc5Tr87iUEpJoduFLVd2gxyfw38QhSpSS8RBX9va6yJG3cvtQApi4ZZgFMNL",
  "key10": "v9PwfCoq4SxawvoHXRS3UfJ6pmhcQBZ8nmUj2tRy6dy7E47AxFv4YJH32xrktA9ojSTFk2BfBLLFzTGEnkEca5S",
  "key11": "5NkhCVVQXa1aEynNnfYUuGQwPJX7YK9iBS4u7Mj2UNkPuFzAjYsEM2Gg8JC9rd3LJbRj5LwNraJyD5Xz8r5EWWRU",
  "key12": "2T5XNZwT3WjWsMns1ytGr4zK2Y8kcgFsZ3Pdza1ouW7Z6gNBbiGyVYNTVKEe4L8S8UTyD6vm4xH64ASUnwweRsEM",
  "key13": "kJETCfKzeSUcE9ZwUMHLhoJPwTbtDGw3NMrqJYvT5urhAfNoqAeUHgSEKkJBshvoGVEL4fUjrPRWWhpJ9T5HA2v",
  "key14": "TAPVPn9yNitrELVXbvaTqEcAaqW1ffrJnvAjtxJgk4zzmmjefki3dU5Ep1SSJeTzrPs3RjCYTLeQFiMwSbAmsjU",
  "key15": "4PR7k95dt297zEc7RA1NgaE9fUyNHgretqYmoMNKC5UhdPi2nUHoAjvrs7JbEnb2shvPvYTRidaBb6dFVn2uNXDV",
  "key16": "2DUuANpMj3rUQ81YQkFtNimEfPtwF2SCdFBC5SCPEyAjikNVwCdDSWVy5qDyFeTCQ23W3SiQJGQz1CMVaFRTfmhS",
  "key17": "5mHnSaY2bxDAX2uAbnGqiKGcM6F81kJSZnUiXGDJ5o41mKBS3UFHiL1V5uBo2sydYfhfbBdqyKZsTkPimHyfoBc9",
  "key18": "5B3suSyozyLPxXupxFuU6f6wRzW2F8cAk8WkrX32tXWjE2v7K89jj1NvcBG9wdvLsrt3ET1b31p4mwTVXHUGoagN",
  "key19": "2LtPKiW1qHETSviyZBEtfBBhTQ9G1yHSyg8uamUyAb6vRH5yukgnzKWeM4pjVNSD89UsbDkjbDrA459WM665gSPs",
  "key20": "3VRDrfgswfTPP6bMzR9MvT67VKJoaHnrfdbALE9kyGyyngXe38dUC8Y2daGHN5MopMsCUL7ZKkxHCxfYkLM2Ct4Z",
  "key21": "uYwZPLGLKShr6QbaejDicFHvyayX5KAYxQ4jNWwjRMcCqWP9wxeasxKmXmPkAn66LJGZ35oDaQMGHrz6Yx7T79r",
  "key22": "2yJV6fgiodFDmGMG963nYja2zSPhHMc5DkdycTGNTFVc2aDw8wfL4pWeKVUqA47LTsP6DX3quuDUirnWxEQfHztS",
  "key23": "2hKKZyjfYB2tXN99aoVoGUwjaW3ZVm6xmMrTVHdcJT5y78v5svASmDKQHs3MAbhNhFzTHFpewe3HgCXVk4CV7m5S",
  "key24": "2G8u3aohAsWCgmjC3VKk57suS3xgeTirnGBE8QF6eeHfun3aEzARVAT1DPmVgL3BTXb24CrQy92Whp1ptkJb29J3",
  "key25": "59nebe6sGoc5WXM7w5kKZrEyUNpKfn9SB2qTHiygiFLbh8pTtxEG6pJAkPMopZx5hNUdKkECFjsyTXkvSXmcM3rP",
  "key26": "5J9JmLxKnH17fAEeRGmwYYvxxFvfn2JjjFwLQpfpY89iFQDEbWFSnezVrbPzhdRJ6NLfUvQA5WMM1d7KeNSnpQbk",
  "key27": "592KamyuaRQJDHHEnSKuri9VgjXL23LxQyfxo5KaAfAFYqcgi6kLNB5Vtm7SxRABntvhV9WG8AackfZXP56oGq4j",
  "key28": "3PTvBHiiHJjWBZAFjV5dZJF2UNxxYWm4v1JDVZmZffMEow66R3w7H6awrQ6Fh3WgGLStNQBVNmcEFk7cV2MiQBBE",
  "key29": "4fckZsBwFyjcP2TGkRm21ArCj193CDwKcpAtZ8yPkaXGKjdzdH74Hn8a5nQZgHbhfbmFXN6GHHArQibV8nGFiYaW",
  "key30": "4UFhoYt8vyGiPbQPgUtMhSoZpYyAwY8gfqY6sHTjh42dBWrzwpVBdfMD1jqf1TFjniMu4uW8SqM2ax3aALaGaBFU"
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
