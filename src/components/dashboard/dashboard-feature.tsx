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
    "5Mx35XAXHp9UdUgxEDKVmDezrUfMLZViAvWxsJGbQkjkRxdCh8XHtoXBThmATaGP7EYuTzfwNah2SDTvgjRrAECY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hW3ktTCFRNk6SVYgdS7ckmx5uvzDmsYhPZpT1LxKfA9rhAjkAx84sjoWdQ4qF9Ez2THXCo33637Ae82KBwN922V",
  "key1": "5pNTq69mwFGsmwWjMeR4LgKLCRVRcFKicAPaMzd1w9szbyz1fZ75mHNrMcmrWwRadfbyYFujfxcjC7XVqqPiEZWw",
  "key2": "5RUpRRAWE3fHMwyrfcaiDV3ek1L3dBBfpR6kCjxT3NgV68DrwwSFCKJYJteW8rAFattUTxFHzU3e68bAoAbAAVg8",
  "key3": "4oi4LheC1eaFVAxggfFoCxGtzZymKSvXLX56gij1i5agcShZ3PuPB1jB6akutYQWji8Fm4CPqpubxxKJfoCf8jMW",
  "key4": "5KPCwQtEyPjmDVLoMrdZkhqHDobmnUcZ5RXy6uKbMNVh329CfdhaHTPzYC7wweqBmXJthcnfit5kU5ckkjE6FXzN",
  "key5": "oWMJBEzzXpbB5xmbVHMPjM6gQpu857PBBWPv6aUAkaxXhsJutBaXXkYuw2tGd7xKDojdmCkG4crw1M4xNKYtvro",
  "key6": "43dT9e4gi7qtKqxk6qmhhpnGp5HMTpMzmEYZciimBDSVqe6S8NFNi7AVYyRfZbMQXmH5GB3DvwXXR3RXcEi4T6zg",
  "key7": "28VoW6JrmHbXiyp97c3Hq124p6v2o9xMuxjQ7xUGNGDMGiKozw9sfJmSjvp25HpRP1eeqpfFziZ9SL6uz8vniwQX",
  "key8": "3ZxLrySTG75QNh1XWFtxnkCcZWBAUgW9nji995TBNMaLQfEFFjFyCE6NHJpNjMJPXtjbvyGneSRjqHf29oyK3tLC",
  "key9": "58awzt2UJaArtnZk4PYYPZxMvXX6Nf1HynAj2DbrhQKSiHRpK9qWbNx8d9bTuq9rKohnxqKgnZJ4TLSS8EXWDc4P",
  "key10": "9yRZnAVb3NiFu751knjbayYK4tDtFt39L5EKXN2Xtw7E3tPXBSKtd9tyzxWPy9dCdyXb1ZvtzySNAqsVs6Y52pE",
  "key11": "3MWSSfM2VroNXVDD9eKKenoHPfNptr253osxe7YsSA3c4AoDgU6wzACaLfHx6pNf89c5vNrBTVezqBzQniibtpNX",
  "key12": "5ZirqcdXc3LxygcvtGKj3uSnRz1cmCimGyxTiLRZXgwebA42Q4maesNvLbJ3M98MH6p7Hr6cK6K4KpbYe3otrXp5",
  "key13": "4fsWJmTFzu9SJaNhphGiaAx9XfGgo1m4oJLYzFU97Pj3GSh3hyGi6HRxPnRnCQY5pSqXwt55V9NgCLkv2mL5rjoa",
  "key14": "5CcvPrWgbybo16hMvdYnGxsLetsLxYab9gL4vVXtZEAkSmxCRCphUxWM5R59yguCojGzQKyzaMRg4yTKdBBdXG3G",
  "key15": "62bSMCdKhVVCNqgNp2F66uSXm9dQwsDynGafQsA3aDRzrCNnSLfmEYxg9rKpZcXBDh5t8NszS9aCd1GAphkbwuv7",
  "key16": "3z3osdkEwYoNQsJktcESm8eLR6CqLbg7XGdyLE5FPVGLfWfR9CJkqVQyiqxKJHDdqZCRCpRf8tMJPR6rEyPY45ii",
  "key17": "ddtnkyc1LTHdwhMwBMQuWj5CM9SWEjXMp2kkhFsHZCuMbxPJ7EkFsG752mKmszisDciyYNaXE3WzAsR7h7W1myk",
  "key18": "66e1HsCNN253egC3TPmhZQG22AcRTmZcWtYp1GP5NbT4YRRmJRq8zghb86Qamu9nknssJR9mjkEQspaS7q84a8sZ",
  "key19": "GkR4F99omn2tySJKv4RdGGv7DvKi4nLpR9zcaAaz3bXQSpsPUyNKygJshEaNEohZES79aiYVgfgjC8STrqYPnFx",
  "key20": "46UFojy5dw81y8PQ8uaLaNAGyrSPYPAij8VuTsQRAyw56V1mQA9oH6qWH126JkxDwuDVXeZxABQ4TP9eFvhLAEjo",
  "key21": "2Tyhz7SSNf23NtDq8KoVhmDNwHQjtyB16bz4JXSLYzAYAg5kKbEhEzQf2v8npAteUW9ZjuVapUGGNZ5ZZoNdJWpU",
  "key22": "2qyMkB755MzezFP54P2WJjWirsKHqo1BaxDtUkoCxcN8quE7pn8Axagnd2NU6WyQZBHq7oJYHSwPGYUSb7PA13P3",
  "key23": "oYY8K5HQdjjFcDznPHKkMHL46mueBrMzcMjDConRo3G47oULre4icNMLqLr49XRWxTsHLhAF7TjV2rvCktJacTR",
  "key24": "25NGWJ444MUUzLuo8h6sxt5j2kPFNyiEvHV8nnqfzwvUAFfrNLbjy4qJzUjDRMnhdKdnQWGkaaA5gRvQqHMgfkyZ",
  "key25": "5S1gvtvZQynwrhd19hitzkNBhMA6RnTJQHf6v1dZk7z1BxLbawVQrur7FZajTZT4V3EzszcDwMssqmz6qWzjyVGb",
  "key26": "4jyVhZpdisevvJBLQtkEEMfCZXzfiiTUtAmQBe7Z2a4hThhm17mGQ5AWmxjfStPpY9xvJpgFcXp6QJw5cnJcA7y3",
  "key27": "4pfEeuwevxohWJPTuVKgePkp7CSDu6MkF5tdLG2oh6FLYwyv22w6LepbU4YBkKVW7Bm2Twm94YFepWVdSD7BzUsR",
  "key28": "38851rsjCdGGwLvGzwuQix9kttmTRWNkDX426poM8cnVVDFMdh7ZPzLfFv6uh5HjMHmPwAvjcWGmbMMNhDwhSCEB",
  "key29": "4KNyi1QxTLHn3mkwrFjpZhthgappFMsq3RooNxdWZujGnPebb355LfQMe9NaFqtnW7eGeM6aBLEb9uzvAtCR1VGG",
  "key30": "3j2dQajeWsUVUP1F11Fe2AZtoSPLsehKzGEpQSiPVJH1mUryA2PJhqZYwJBwg21JgGGmDYzUnPaSwsSvf3ZeF68z",
  "key31": "2D3YSPw5rwT32Kb1EEcSCDA12PUVN451MiBWEErqwuDWDFFXUk9pvqN4QvhhSBxhSTYVf2MyVcet5pbQCiyAf3WP",
  "key32": "QCFqFdwUp3GDjAdYnqV9A2MVKBiHpFdZAYzUnAnaprU7rdn4cQr1otL9TCDRb9u4L3DUq5UFJ2Lr6cP9tBNj3GL",
  "key33": "5N8i9WhwWKuu6oS9B2PpKdgRyZCVd9QmfuvtbA9fAKjJeGKYSEQSJpZVMZnwe9G5Vw22s9JTVNnHaKV1JmcuQdAQ",
  "key34": "5mNDqfSXLT9RgYErrMwheiBvNYr3CcWWPAccpmxKeBLKdkn9ZmsRjJB7eg36Bv6KpEWmnfnfezEEjHAoA6bHauwB",
  "key35": "44hwswz7bGub3yQibtrFFqAEByWzeLUJcuWLyELYxHprLNAWvMLosrxpNRybdMU81XUGPBMeLsSR9JLvzbJw6Rq5",
  "key36": "2ub26J9NDugvUF5SiSu4AisSW9NEdUPUxNFSNCKvnj6BoSPwdLikNQffAmSgJzMfPkRBXc9ozGBUq9MqWr47bBh7",
  "key37": "5perPT33AuvWnTe9ghayLePsaAHgwKkwNXcMBg97T3pwcqHdPQYsbKiBQqYm799wUFwuGjZUfWv9mTN8BhPUBivN",
  "key38": "MhmHuSFw7VwYBf2yPbLWYaZgucyhx7toRPnegB8YJKffttb8uE8ujxUgWvGNaYpfEY7s26UdcE73U99hpcCcHC6",
  "key39": "2XADniahk4nZ22RziExyapF5BCesj1CTWfxZudcm7scZr99fNvHaVdVeof7JArrkH1SbzAr24T8wEpWoEKKUC2Zk",
  "key40": "3LXTry6F5f6jLLtQ7nHabso3ozbkYUvZrxp7duSXwttC3LCJ7u4m8f4k1rYbuWkmnNDtjj6TqgQaFYSVYh7iNKKm",
  "key41": "5nhSeg5giRMFKNsyJZ8UeELvM8NoB1RnwJLSKVB9XZa8bsMrpHzxFXWEZpHJbsUDFH8wWSM2otTU4TX8N88AeVGN",
  "key42": "4jdYRoziGEgYJ58JnjiSjJsFoudGYCWQKeP7Hawa6DqatBRJbLEzKWTa9uEvX2Ptq3Lw2mTtAJEozjSi98RbvQ64",
  "key43": "UkUzhqHAQw3aisuq8Vu3JmmnuKVXifLH6ZTztoaCCzV2Vrbeth9imEnaga5WHoJ2BHpbhYmgwMAKwtgamgy9vwy",
  "key44": "5mnpH1bq75XeDuHmSHKvJ4jC4pcRpxkxe5ZE2BvspineHfCY2hHXn5rju8WLqQuGvrNEWx64JNXQykPkN9R1qEBi"
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
