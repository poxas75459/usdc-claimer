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
    "222cguFJdQWJPPuS9FnXeT76agL6PTUUfNBKbFrdMWk8mcQYXMkggP2c9R2iubaqCJfUKCp2dDU67NZ8KRTZdBpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33v8pBBwjmoAN19vEmSY8CyGHydjmPMyQD4mDVgZgnwvHQJpaYCAQRMgV8P5ozyNCwjH6Tm1DzchvRPMt6xrJNuL",
  "key1": "2CZhUeNF9MicDZ6GfxSZEH8f7ooH1vkkwVJs5ianU8zt3RUSadjk5J6VckJTAXJnv4LjmraHsRFNuPGzs9Rq6aVc",
  "key2": "3FAR2nUkVnpaFs4Z4oRW51pa1XiqeTfP9Dy5zybnTpHZt9sxGcuZxbnyMsfp8UCnGaY6X1PPjEf7V2GZfXM6a1oX",
  "key3": "4gjTnnezeqq9Ecx4vgbjKPJUbfmNfJtsEMU4idc93PnMS75edminLFLWzQs8GYEJDrjBkiiFwSJ3mNo2dXS7gtsm",
  "key4": "QJSqkJXjPqAoai9crbtd9HqywsaqKEepqUsvHZf9Cb9vLPNFMkWi5VcK7f91Qc7BHFs2hjG42CcD7bvKajHqGXY",
  "key5": "2oVNdLbXr8X6qGhAJXLzE5CSbjfgWp3stW5j2JDWcaEoKaUVGXpLh8Uibv9spRsRB5PYGAQAZ57LyjFKFyQAhYbx",
  "key6": "5c4Ruk5tdq18MeEycCW34MK9npb9MZ9V4iPcFpkQwWYdRKhjNexrn2hu2kt1MBoCFrzw63YteKpfRWkD89feM8Dn",
  "key7": "2HJrgVfRAgUxJEmTqCZ8i315tUpr3zmtsUQb1qk3rJkUnnq898aLN6nkxK5nCCoWMszHCy9pkbfztHcAQRz5HyES",
  "key8": "49DziQ4yeoHrSdq6bha3rB7im5QvUtorZ5Adf4hdqckpzL3wGFA8per6My1jELZ2QrY4tbJCe9dbuhZYjUep83Yj",
  "key9": "3om1kvxqgh8GhNa43S9dYsTtzyNpDVb3R1nePhZAkeUq3ZcEkYy24dKcY5Db15ZqQevwXGmzGEvdCeicBG1vjNR3",
  "key10": "2phjBNDxZCkVgng5vLxJkJXpkSYEww4EojfRuERSAUnsZ5YvPgFHL2sYPHhPtbK4xP7b5KDH4fdAYMy8j3z8rqvV",
  "key11": "55Aijw94LkjKZC3bAoJUpGYDWqd2edBDyJ4Cf2h5Porcop3qC1vH9o538dWjzbRXsCo6LC4Bs5Ht86ghmEDWWcuP",
  "key12": "2b69Y6CCztx5YzFxqp4LBmska83BewArR8b1aUgmv9V8G3muKv3pVLarTUBAxGPFxaUhSuwZuBWzGfbVUFF7PcCq",
  "key13": "38wejYSaSV7fp8HFe8YjFr3Yaps62A7YkPYFtqs2uPTZjaK9wX1BbY3CtNwYgPutsEHmHBXA54N3r5xqzJd5LVVp",
  "key14": "BANr1bxxd1sYafbHct4QtUGTcLRq8DjCwGV1311m9qvtybezFbrdPJt2m9W9NkXyfFLr3hBPLZFUCaLk86funZ5",
  "key15": "4UCfBE6AJGFQQh1bgqw9UcUrgQrwJXJU4TzfGxSbzpVAVyW8PoP1nd9AYBKDhKNztDAzn33B3fX3QyZhjorMppva",
  "key16": "3LFuBTfpvra4zycwpTb89Mhohzgp7NEAq7QxXNyWyeQw6oY2y12S4SuQYdr9exk8fqC4awwDZzLPWCxyfK7KTiPc",
  "key17": "4LCJsjP7tHYayRwrjHyxBPyXzmjAQBCeU83oGQz9DCVe3XVr9QRUm9mztDoUDitVatVCi5k1NZ9N3RUU9dojR2j8",
  "key18": "3qPm5oxdUxdzg3QFGGdLvgdSx5uDHEQhN9w2D4ttG4pQY6smaK6jb5CN6iddxbh2rjNCyYy9dGbN7fvM5MqQKfxr",
  "key19": "2tVbB6SJbtg8z58o2dqCr9HktMKQQfhEjcdPfKfBfAgHb81sTP648XaET1CXHr7vkgAL19YVyiU7LcngmzjU274L",
  "key20": "ach3Pbkh926RQzMBZJonwaTH8yrd4tzxWqtGeDQBXPP9apQeab1gUmPR8SMgRM1tn7seYQPaFsBmGBRhaHxdRy1",
  "key21": "6xwamhXLGX8fcVyTzHcBQP3ZaYPWbTfQYpKbpf8Pigi2isEjEoxN9B2pojA7xnffAvdQahNP3cbBBENw4Rn8Khf",
  "key22": "2s3NUVdkLFoDPEU7wvtZFkkcM4HyPiDAevG6cAfBNWtcW12tBGy1v3qGu7kebZy1tP2LaZxvVyFrgDXfywthXyRr",
  "key23": "5nFvKmK9bRyuM28wXsLiL9MkF6dVPQbR4u92B5PnTraKQniFQdXHvBMD4gshVaqu36fcwa8PG6W8xuiLjTQMJJ4N",
  "key24": "4aQkptqao63G2b3QEJMZcZztrsHXcyGHTHaHTB4KQ2YJD8qztduusgUc1DmPiNBfm1GeBeoFip2LXZpxqiftMmtg",
  "key25": "XsyUWLnENNGHAzRsmchWNhizVZPEjz8V7zRHfZU4vsL3dpLyUPzubE966x7BBft5VaqdTkGxCvshfiBHyvFQ5qk",
  "key26": "43h6XZ4Xin9ZrKB7Wqm7JnjTz4vdjHoxf65HPKbJYxCPW3R26eezB5EcN7myGAeRxNLhTicGZpMiBTEyuBsChYHL",
  "key27": "5bYpvVAxx4QdSmnJfFZJbyNJdwYy7Jozq6ETPEobu7brorN2DqCt1rLJRWLKH1ymY7zu5MBxJmJzSfminEd19vC3",
  "key28": "4r9LLzHyXw5A9WEP8dKUwgSScGa22grjZmsWJ5HzwMwLvj8zyYF2MJoMLHmRSSUVkkvh8YUbw7bzUuu9cMux9VvP",
  "key29": "5sZKdQTNUo35uWto4F2kATLiq387uu9KF2dkXxk2F9VvwsvJPRswbYksYcYQ5yrC1JCnMqbFDYW4wjMonegeE9MQ",
  "key30": "7CFGVcLr55CRi5bzoKF7a9Vt5Cqtmh4LgjhyTJrJnAAoJb2HcJTwK9rv1stLMJRwXi7YbejjnrxU82H1GCkxXpo",
  "key31": "2yqp5a4tWNMFMrbYyiyHgU2QJit52Nsb2AaBaA1N9cEQr1HetPhY2BeZR3neMSmZzvog3pERAuoyKMxvgaDmmhog",
  "key32": "5VhAwX47vkndnyY9fdiXeJfeXK1ePDzVyrhdW2dWGr3ykygNCRaQucMyzdjcz1jrfnUszMzg3T7MX54djaZqhrvv",
  "key33": "56SKLiwcQ59Gg8qf7NBKcg6dZydxatTP7YhdKMtRcf7e9apHPiBKegHKW29vxm4UF7nDExwF5pqkSvbdxeZfJArG",
  "key34": "47U7M61b4FSzPnhdJywcnx9VeHmU19dcdv7rgdVtb5UM3zMrkdvVJg34f3dhXuciyK4eCS6oDjac4FYJeprio1yk",
  "key35": "4uvXyZSGC7bBEraHrBMeyGy9nv3mEr3ba8jN3NNwCkgBURnwWLyJzg4gqcKoGtXUYBzsyordh1UhKJaDutGvhCd1",
  "key36": "YMofUYYXGyFe4aqkuotb7s9fZ6sjoeMfknoUr1uxVanCqfZsup5cQQTMtQNMNX8tExVtqLGHr7bXVwczfAFUett",
  "key37": "z3vq7hV9XAwEonwaghASM7hGWSxXLJ5kKdLPPBbG6AfRmjT17vgh2nrVcBzn9DaUHvodaoL3u83Z1Dy8fX16FTt",
  "key38": "4qM7vvuFGTzs9cknaiVzJt1KCqspi4nGF4cHszNQfF4KgkQp6DyuFRYEFLmva6vVn3SFaQ9zM7NtMqKtNVAGKLVX",
  "key39": "hiSxe1thwXps2x3zeqQN6hYa4mtQcqB1N1VMSrtEjbB7B6nT3GTUABWmoQBiQHpfrropm3k1stGZMXRxNYcrZP1",
  "key40": "44YXEAtYpWmX2MPPzFVsMEQZitCD1VU7g43dAiW6RXWgbMh5FJoKm5Q9CWJjo6bfBnW1MXnYdJ1acRcoPnucM6iy",
  "key41": "3stJUyxh1Nxq8VTKRSP7bnTztSaWSwB2iZkoKSnPUmH9zPL4e9n4EqhG93WC2LVpACFa4XKrZPsm17DPZUgqbcMy",
  "key42": "iPRRxXzJgMpEZEvSnW64xQNxnZz21p23JixCnKADRdeJw6x44Z1waN4qXMPWGA6fVkA3Fu422dy2haVvgpPwKnc",
  "key43": "CvJCSq1iKZXrjrM4U5yw7Pg52NwneRdpJqR1s9p6sdY5LtxNGJLRaJtzofDrw2qg7tum3W5reKDaubBkozgVNdi",
  "key44": "tqfm7TuHzwDkhEuVTLUHuyee9Adq5WYN3SXX6WGnhcKAAeaKEt5nUJ4KFZyZVoLKaFA39HJ83iZjZrDNXjA7V97",
  "key45": "31QqJwxjteWjgG5UGBiB4QwaFCeaJwyxiCGZhYDcxwD5PHfx5TUQDVxukzcUXyAoF7P8LuVAStnrzunjviTHppJM",
  "key46": "668pMbCQ3EyGvcjrpjvs8snmZxBYvBfoe9SpdBRa7dLeKmRFVByBkfadadCQCgPpYEMDh5Jkv3Zt4VXVqqCLr5Ar",
  "key47": "2W6UuYvy8XVK1Gwuhrpe4LmAZFuzRquvmrJBpL43SVAqWbeLQvifUs1jhxT9kNLg8wmgRLfe8LdmZLixuvVq2ycn",
  "key48": "4ffbxb8rLqshobHtMJhmBgJ2JLXMH8K7u4ttBfa3n8bPrw1Mu7Z56SG3GLMDj1S9DitvnFmePXnpRsPqghU5bmVW"
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
