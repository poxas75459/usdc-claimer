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
    "2Da93sGn8KSyFjRhtVaC4ZffJn4zYDJyZz6a85szHaR6agc6o4F6QhmkKCyQp5Hefzq18yzi3gy9NifPrAiJgkze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8PxVP3v4jdXikzj5h1zsv8sPEBYDmX8XNxnMYftfuN1NFXNMkgQESmQzrVX2hk63GF2can7T1gs6F8ZjUUu4GA",
  "key1": "3Gzctz8HgFYaoR8XxcnwWBpnQZB4h9MYA945hBBvwJtkuqv8K6RCUYa1a3jJ54wdPGBfcCvpyRibqqcpTcGsskyZ",
  "key2": "Ja8ESbMERoif5UVzv6GnfCX3ZMJ9o6KUSSXHJmJkZoPc27ifEAs6kVWpfi6iqdzirmUGj9xQYkCpZ9ZmWAexjmL",
  "key3": "5EHd2izX7cZX251JT9cHQSVagrbkmCPyE8PrGWQtnjmDSESEXrXfnbrm8v9EkRRJxoz6DcwQJhhCnsdyUjvkT1Rn",
  "key4": "2WtuM6vuBDKGwrHpKWhgtWVssLmbMBGCipnyj4CL1i5oPuX3UWTcmrgekVTWT33mLWzrB4BjnPGXtSDZVMxXDkPe",
  "key5": "41ZkeQ72nFiXHX94tb6poyxmTqsSzyacRxB9LUGrzCPZGwhRK2qs26xkmy8cUF1T5gqoEvs7zDZepD5JV2EriDem",
  "key6": "2Zo4dryocRv3PnCAxEngSNKtwmv8TayHpKvkY2xruLUMJ51FbcmUz6rpVPJKN7VzayGgLuY9HPVMCDoedU8cBLMX",
  "key7": "3Trb1uPwVP7JUsYR8B4mJeAcCSxwYsvsEzgMocRWEY9FGvFTpibNuR89ecXr7GrKAUR2nsLgq5NxhEWwXPVqBoXy",
  "key8": "2D5oKWXBA7aNkNwCixHPbXSXgJX35qhSkShvvwh6NE53rNsu2MmnLAqrYd2V5YkiEBTD4RMCKadV3Cpn7B5E8mCS",
  "key9": "41kPquepqXB9RWLx2FVUyi6iXjCk1d4HjgFrN82BsQJ5RZAnDU3JAazVpCcyNrDxEuh7rvEFSrVtf6N5imapEekz",
  "key10": "26jjQJMGkBL1LzWsXfLb7HCokb2wb6Eg7EibFYAefQmTWBocR84C8dWXa96Rb9o7hN8L2wzxZovpfNv58wrRCfYv",
  "key11": "5mWh3Jg1rknoKmCJEg3LLeTgd58jYdgLALRtjK2Nuufer3o5GK6GmDx3u2v35Y4cJKkwPXGm38QqsBo8Humdrrvz",
  "key12": "4pQP1gUwpiMprTRcYQYDCaLrMuzFH28uvaJ5fKMvgfFtNYXjVCTm6cEqKopsqJKgxSriwzoU1Gy3L7vzUmtJ453q",
  "key13": "MYdzQSB3eH5g7kifXr2FbgGurnLJzGMib12zeARZo7zXV4pyZWCkRSqH929YGPWPTL5rLDnHNm5XfMpKF2ogwYE",
  "key14": "5j4HD3Bhx95H11FE7SiBgjx8dWhYyR33tUVaNRwsBMEasZ86qUkmg1reK6darCFR2ZvcWGr8Ch7Dkm99r5prW4sn",
  "key15": "35fzMDvaqckr1R2n5dRKvFUVZJgKHqcFXBroRmtqoRmF2YbCy3q3xFgsSGMGam2iyARo3QGofQxRTXFi45zGKSpZ",
  "key16": "225kDdpAfkgTAPDFQzbiymzmVeB66jRmo2oU3mhxPA43XCnQ8P2d5TpZF9tR4jejFWCnzXFMsWeSpe8q1cm85UCD",
  "key17": "5uijjSiDemcpv1UgQBCy6dMdV8tFmg12rCJdevMHT3Mk9wK7i5HgKhrGibi3MeKGYZkDLbGwszbCoizHDrycoeBj",
  "key18": "37Rz6uPrH3RW3Ya8H9iBuzuaPmMYZGDNudCNLDhbNZ3kUSNnT5ShiREFPaQecq4GFysyjg3nFGPGzS9M68iU4uQJ",
  "key19": "2yn81C4v7gKPkWNiw9BM5BKU57dCRMTgkUkeP8fETtuxmCHwwzPgGUBv4m6nzhao7HuEsQ5DCUVU3bzkQcnuXpDb",
  "key20": "LhjawnLqiXdB5hwRnRGCDNaRcM2RB85oKUqMvh2Spjw78JicMPkYpbrWDsTBTUmVtyDhATp1bpTpVwMKRnT4ksR",
  "key21": "BfyPAd88GJ1qmBJDWbZbe5uyfz41NNasWDUZgnekUniC6WswicbVLRUjGf3zF6ns6z8SaAzjFRAGBMnfhdaGbLD",
  "key22": "w52vK8Ns5PqGCKawZ8kfjDwctk1BCWAcuRrqNcWNN2SS8Gmf9aqbrZuPkNXcwXgRvdCQMHgP96JsUUXND1YgesT",
  "key23": "5Rur237i8vGsE6WeB3uCbMoYk6QtEmYjwHEyR51zkt3B5epBRa1BmQpU8aqywdkwUNdknmcxZGrT8ik5hLZLNmMM",
  "key24": "2UPSgXfAWEprTFJeFqmSBB9brDy7ABJvABJs85pLfZF89eg6gRvyVVsrhLExPQsszq11tYpZTNWiKdegw1i4F5YU",
  "key25": "2gHZbyvtAhkZc4mvTHQBSx7W7aCA5rU5N3HzWppMQ7GTHRpS8Z82W5bsuFDQc2CXHVfMefKxwJC4R1CUt92urgkK",
  "key26": "4KHsC9GhqzsGerjzR4RtszS6hYMi6dzaGFAqYPhfLUzUBcmjBohhNWXh7m2dV6zgjMTmPh5KdkjHjCPpUw7u9jFj",
  "key27": "2CXzzSx5Az2MmAafoxPgxAZU8c4LBcPbvSxqKQQpwyYoB7k9YuXXBayMQdMfDN8NgAouF2KSYfcjrYqjj3TBiYdy",
  "key28": "4Ejjfu6sP76zBMEErw4QkjKZa6mBJxv1fKAahEL6ESTSURojLVL8iW5ZtMDZefkcmEmrwtPwYuKzCWQhJyrkMV3T",
  "key29": "nku4rHAHcUBEwB5ULiPELoc9rJATRh9Ec12upttnugbgKXLZhX6wqtcns2bArnNAFKKteJA8Wk6Ms8NEKCFMEGD",
  "key30": "5mKHFuKV7Go1Ag67wXt4WxQut9QQ8KrAZAUKXX4p3pgdWWsGpVcAMYpfuHRS9nJ2GhVijSogeM91DGC7yBPCED3B",
  "key31": "qUbGRiuwdmXayRtACfTAXGKR6tVbE6FvJV77i4pd6mM8YLKt3X3NPFuZ5RrRFDkdFbuMqXGrLymoTSNBiJJSW5L",
  "key32": "4g7WJL2V2wKEYeqgTi2E1Qo69U5p756Z9Bf8VU8qCHymGZUhWYJ7Q7jrGfmFyYJEqq8FfdoAT6XXw9384AsQd8To",
  "key33": "5o98BsVQX5d2XSLt7C2cmkxk2xfASaKroT92gm7k6Bee85qx8QBb9dqwXsNgT7y8wssCaNXm9XNMDH7UCfRLqQu5",
  "key34": "5pGTSWQkC9TuW8vPkeWtbM62Yn6hvhe3NQ7gwcgb9A1YwpeVvE3dPmCYJ5oz6VTmb597EHkt5kwEsBQa5F5z3m2D",
  "key35": "34V1a4tTAXNn91vSBxYtXojQ6VsPFL4dQpK4E4jKmTTpq53jWT6G5rXKN97Xu5LNu1RhFo3u4u1PoDdoZShq552A",
  "key36": "3aHzpiNsBhqMpTbAXCZXAoZ1ukEpcpvL2y2Mi4QNqFHr11ijWg788PDGszK7anUSG11itPxruipaNimp15L771QG",
  "key37": "2oGrfqURgnSRfpqc7ozsknaYXwyABBP3kXPAgXsrfqUqKXkFnvp5qEyRHEvzmbvFP8eFEXVDFAC5JSFEZAjX8Uk7",
  "key38": "5hUAr8MvFs3eHdSnENXmFi9SsckxwHV3jGJyEUd9dsNviM7Z1LgiuPuomkFwgzqYvMuD9LfsBp7BdcZqhnsdekEB"
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
