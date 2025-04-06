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
    "4pYXVvjWNccMGno7eeMfMu8YpyP5Zqaw2QwwiMTABpjL36dA7UiBtqHtUvSAHDnykzjZzGHm7ATF3onrMaoQBGri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiPATVZjnNwb3K34UmAY1ujDSKGA8AqdEtXTDajNn1ruz57S1DMUTkJsgDNmZ6mbribRRFEAZduhuf2rgXTvy8P",
  "key1": "GJY3Vs5h7cLuNu8fhwGmXbrhdqh8troMk9f43Je7pxEY2t5tBf5Zj2aTB1eiqViQCyjnEAm7jCUuKR71Tuf7dLZ",
  "key2": "3AEcL7NVqCZ9pfWUXk72AdDZ7jbVH4DGF5m2agGRWhLJGpeT5kAhMQzo8eFydVHuPm3befodwqSk1DPikMEs4NK5",
  "key3": "5C2QLDvXDWX6erkRKyWwF1gxT8TYCPM4iMAYniZuTiHCxN9wvxd83yzcv8ZDNqYaC585Gw3hij3RCMsRJkWdnT36",
  "key4": "uhKQbuW6ua2htjGojPECpGsrgXrrGnqAPZH1dLG6QpG8RW5GKy7EXMUzXuCeiVMchMZG9nRb3Vy4Zf8ow7F44jv",
  "key5": "23j6TxgdTzRtVMBzTQnhwa67jT8S4MpmTGJGRHzJFQRC1vQNXoEaa3EcHzbcjkrknN8r8RgmHCmqC1ZwJ6cNjDb4",
  "key6": "nazDfqPk4BEAPqvuu838H8cya2v1cncnRCC3x4j41UKYBxomAdjumLqYanjtBamhG46J6nYMsNGun8YKTEdFLSY",
  "key7": "33ojYwavfJbdCCRdZgLL7YWhrLSx6tQiGbJBTRrsfagwqbNWmurJ5kE57wzp763L1P722cK2B8uW2URjruMwW6Eh",
  "key8": "2jjHxddBX8tggacxhmqr6878ATVaFipaaDEw7rgaibo3dPSPE1xtG8imbRURpxFrEsHWTjZN1QTPVQs7ritopGp8",
  "key9": "cYE56DvHX7S2sQ1bWmUeH8WjLBGxRZ1kf1rsEq7nB12ZUENhAzY4bQDuLfFj7KLRvk31yYMBgMWE1D7cAe1kL1z",
  "key10": "21dqJgNuqBVmyjBoiDCAeeJHY2monksKX6gBtJgQCMY3rS8Z9bE5SKoKadA892heN8aa1EBwnR4MLXoafUDesdUU",
  "key11": "2sU3NrFF1s8WPRe4GA3rCiM6z496eUo7s9DXkhoH2sfLXBfyy86R6UTuf3Sj6SYZA8QRrJokEghEmh62jwDYBDvE",
  "key12": "4BCfENwLS4uGDPXAQWr2zA9xCcLwyZTmCSCQLiTgPzXJvTRivQZS4Y3sChVUBjZ4PyxbJ7nacRNKYM38aBGCmgm8",
  "key13": "2dYyw7nG2hAhmuHaJwcJag5AuEPTTWWUL27f5eab9iysRkynqeyL2VWg1eU8ZKN7P5D1ry5E1zKQ19D4GPfKw2im",
  "key14": "2wwCXyDqLQqwhndMW6VjSq4QeftaS4cRjLtEppogjGWaesVw3F7rYi5ktL9ua1yvryNNKNXe7QAxrRZR1XyGBieF",
  "key15": "56wmpRg3Eqky5d2E3T7YPurfiBd1jUVknoQ3bknwxXmK6T9XVVzahw5W5fHenPiTs97io5wtEN8bHJtXPShLW4EH",
  "key16": "6HPew4pi73V1pc2z8ibT31YirrNRFd8UHdY8PhJMyocD7iHeyYzttXqDmdryFsjPdUQpsKZWXb3fp87EQqyGYvC",
  "key17": "4DeL3HHLxKt2aP3XnLcY3uJs3wD4wo7UXsdg5g2uwVERW1KxnjiRPfXKyGKKTVPKN87X1mrstrgzyQpJ95TSGnNB",
  "key18": "5cxxk2NaF33dAaBsar8UPDf3JrjyLVSXpxVh9my9xckGyryhhwUeQyvPAvvWXeV3wx15QyQBBqfq2xtqvLFHNeMc",
  "key19": "4eEk95SVEGhDUQL6RYjyeQcvm2KZcLEWmvg5G5T64usvL6tM5QobcVA8idyCWNyUGpVHupdys2vSTj1QPV5aGn3V",
  "key20": "2eFVe9jbEZtvuSbTMvGHsn662J5utVjKug4hjJEW6oZpoXeHTVwnQSQ5rWkz2dxK6Cii4CFxF3EYWtzmGgANaseJ",
  "key21": "5TF6AUU4YfckbCxn2b96YddWcj6baJre8kzp2QK8J8gUdzb3QCc1uhoDxV3eGjpKHZ2Gy7bboPcsB6xTSWY1sxDr",
  "key22": "C1C1W6pppDry9K2VHEYFgnifPC35Xjy9emVkVpZoeXM1sQhqNDKLRE4RwKnr6FvwSJUB4LwkjP7TZf61jgUKxDJ",
  "key23": "3f8tDSBztPCkNNpbhm2g3tJW4WwWp4hKVaoVkkUPre9Z5Crt8qEEcMfewamg5HF1YWzZxh8zMUqiKBu2FDzQQ7Ru",
  "key24": "FupXNc4iWeTyR7KTb39JH7eBcYgCFYNUbjxqc422M2rvBePxCAFEqoFwDkxV6fisjKxY5ouZ5cRzu6uaLbQv7FY",
  "key25": "67gPkZzkaEJctGpFvZAFAL6hfhgv6D4z7ie3qfzo2C2Y5kgir3SJAg22KJJ1Wrw67Dvanr5t1U4N9CMr79Aua4Jf",
  "key26": "FTbwtveMYaDYUyUKhVx5d43GQzS7WSgCJe42UbF8YLiXwQkDoQ8Db1sk7y8kQjrbKe4HM5K7Hcke9yMSQLhovGz",
  "key27": "5TZjiK36ozD1uD6X8bMLYcBPBF2X4tUvoURuLVLUr1xZfTQxepGxKRthf9EZDi1wfXQnvoAxgU4Bj927DumWZbXo",
  "key28": "4gifFuYyv7fP2tMXApi6H711aPvqn7vHBhJwVk8hhq3k6H7NaENwN556P1s5Y3AiqjYkyD6URrSU8SMtFQUSyQrP",
  "key29": "3f9uMn1JUEN8f2MjMBwtSkyMbbRYrkk5J5uh3vioTBtfoS35Rr9tXxijecNGcsUfAsF9dVJiAbacDMstJUGUorj7",
  "key30": "5GnHyphjM97gLhJceaK5aFwVoCFEtQCgRhiiMRCAFKiD1Rvuj4QYhtmQEJDFFpbiXnepmauwaJ4bnHe5befp6mSc",
  "key31": "356MqEtJQFUkWAbCvqaM6C8hkyQqcgR3F1pUpLp8t4K1t6trsoMzbmHfwSm4ZAjdc3Q6tpbpE9pVjweKV6iMv7hh",
  "key32": "3GxN3EGDELqYPNU1jbUWoz3bmTyqYmeXan9nHZPpuwykfwGjWyquBNmXQMDU2XYekWfhJVjymoMTqthk7kk2oCRC",
  "key33": "2sWNgHxvrCzSp47Mc33EAEAqr5DxKUpkELhhYZeWmLTKoxetLBVSaugDVbStZhPSRNCy76FHq3nnWjnEKyc2WLeL",
  "key34": "5sdYEfSLfhtZ79k3npHgdvbFnuTubM9rSo6vuW9aKvbxgcP1SfMKuwCgkqMEn5PY1aaV9W6x3ZZx7mU8Ps19e1qX",
  "key35": "rSy4WnT636xaH6U5BPNbgEgS4fwg7dwz9kHWgcgJTT5bPMZvQFPD4P2EHC73EVGdnzQAMD91nKhS3NjhmK65ypa",
  "key36": "3h8nCQSC1BhzVvJ8gG8UoSdxCormU9mQd7YPANro2rdLe54yS9VrcpinxEw2QWTFFLQpEGW8XJ9yjU5iqTqboTCx",
  "key37": "3zthoujVpW4XupozJsDBfTSMxPXgHZE4fQitYeuyDAY2fib56hwsBBVrnuQJddQd8vSekR6dQUwUsmkUsaa2brrh",
  "key38": "3Phqh7ApdQEGwDKpz9K1A7aUqLG8JyCsf2q8e9HRoxkBiHGuymusCSUy9saRiw4sFognKMAbxKNXy9b871BANfP6",
  "key39": "a5etiCiP47PZWvCvLjhzNrcxUtor6q9YEHPr1wbQGcD4xDszD5bv5ck7HoKxAHiCRWfWpAb627kG9JNkyVicgfL",
  "key40": "3XpPCBtreTPuSpTZuX5LvhxNNErV8tgqTEgBfCrSu4TLVT7ZuXcVtb4wJvVdP2MRuP1fh2A4oj4gTLiByNTLBmne",
  "key41": "24JoQsmoqHer8A5fZzfYNHLZiym4PFAcNFpDgQgKBoPBYkvsWMkba9wd58Q6bSGAkLPmD1J5vvDcD4a5NvUVSAKB",
  "key42": "2Wr68DQh4WjZfcuYQdY3REnHnpdhcxeVqNW4EwfGQ2ZUgdChyj4DVZMkpvrHPHVTGNXxj3W1DtT2tqBJSi4ZHAGC",
  "key43": "66F3WP4iGVKBUT5oKZBckgt2SbwwfAWn7acoknTrP2Fzu1Ltbu4XkAKdAwepdUUDUcQ36iqdDyWGZPMERrXpecgz",
  "key44": "2iR3u4UmWcCUxTs2VEHz6QhCekkonYADWDr9Z7gZCAiKstXS4awF9vvU7rLbMndGWSneEzniWLGXYr9YingU1zj9",
  "key45": "5vRQ5vix8q12QfCxfzUiEFKqFQvzLyQnH8r1PGKwcpxWk6kR2rVqtV5Nv8WGJaXgz9tKSBLdggG7LeUqKs3iMUF6"
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
