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
    "4tPaog2sR9zsyMEYs9Q1bgTXJpLwb1texF1qb7rHZJbTgVht1v5JU8NwApDyxkTNRCfUdSY5rBtkP9vLePoMNSrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uc49HTERDEV3qhGRuwV6w41RMAhVvNkyu2VFeJ9DbdF7x69jUp8fxeKCJ5cpJN5bw8e71icHqpZLXgVAPSpsxj4",
  "key1": "4UgZSYNHtEFX1Gb8uSydUnR6oLj2SKZXCmo5qpfgcmYtJx63mCSoC5oYvERnHQfTcfdyrKmo55HxxDdeAJUSFsH7",
  "key2": "3kGrk3EignF4AvRdgNh98fZwEoKKXfy4G4orug7zFimAznHtau4JVscfA2mHFvpF1PbZw1KgHX1KdZhphz6AdBbR",
  "key3": "24um3tit7yAKaZooFzDt55X3jGXtU2HQh4LC37uDsWBHKybttT4Z3dCKuuogi29GjiQ21k1S1ECS88fPhWE6hUsk",
  "key4": "5Quc5RYYnjk8KcZTzyW7wsrrfbkuJb9p4cDya8qL7nNXroSeYn5EnnAoiYE4rB9v4GriyvSbG6gYpBBtscNN2ywZ",
  "key5": "VJGSwo9ZkZLAECDcLcfcmsAeUgwPoePZx9qk6Y7zNpZKA1iMSea7AA9UxZA789rFvzbUhsUVU7AmX3KQ79XsG25",
  "key6": "K1bWXKRRDmYyfSLenTL3LCyfqiV74dW5wFHFFzXtjRyixwtU5zP5VukCw3Uv7T6Rq6cUc6rGSMPpTi8RRb8qzgc",
  "key7": "3vCBUuLAUgdTb5MQcSQXXDrzzzWAvA5PBv24tUs29Fd2pR87uooyp5RdptUxc9pNCTg1uPb3DSPoS571tqsU2zYb",
  "key8": "31t4E2Gn7FdNugXMhsTWgSt9ZGkZ1nGRwXTiVrXLEUvpv8LiJQXomR4PSHAcF7FWjxSYykyKheeE84yMCScF1g4z",
  "key9": "5zsGptgQGhpNG5b9ipayYVcYdipCu3H1P5gXp62TkoWMvK4yk2eYGrWGn9oeUEcufG2URxKdiQXQAeP1uhFVbBpa",
  "key10": "4QeLrLevcnV1o4jGH7Pzjdswqc8y7q8XuxqBnYiuJat8EoUPdzedMFRihvS7HoAXSpfQyUkpoQEBUBaLoHw3S9RH",
  "key11": "2STA3BWLkJtSxhZhXVkYHqdjQ74w4XahagvtqZngY4Y2NjFJ2XMfCnUeLvgwgwyqWtMn3y5Ai2UkVxwKYteKE517",
  "key12": "2q7zmYyhgN66kVJxeGvaPhuVpDmhfPuAuWUazrFLXdyzME7nvJ7NvMmoXuL8eqrVHFHSefm9h8eE8jBTYBUgfo4s",
  "key13": "1Fi3Jjd7pUWWZQfbQHsjqj2Tu7CyGham5iDELqdbN3rv968TrT74VX4FL2ZSuS9b5NCDajeceqPYiuXrk7mjrAi",
  "key14": "fe8n6cspsvPu1dCdybeoBdSc3wmhRqD4YxnyLo3grAeYd9aB55qTxgS79FbRnnisgxNmbdTVo4LVyQKC8dEiita",
  "key15": "mQDLyCU5NyboqaSZCBJp92BVqeNa98P6rvo3GmzNSJgwcqMvo884MUvNKuFEoo2iWHsw53FU8JSxc7pZRT9prVv",
  "key16": "4Dii6Dzcj7QxaV1NGHhnfpGv3KjHSbTMV6e91g3ZNChbDvc8uddgYtkoiETymtaWcMKxLA4ySwVJASoeKWpZkVNe",
  "key17": "3rPGb2AUKsZwNZ4yMcniY2iNST3S5WWWLfsyjBPX7HdKvuRYFnVq32dhheictCVrw4ErwNBWEfGis1ymHHe4DWWU",
  "key18": "29yXnG6NiLjQVmJXXW2UBHmgARbFWNuG7xTgk9eyCcNfiqQDYWYHyo9XYF1h2ecC1wZorExR6KnK2MbMJZyzc3LY",
  "key19": "iaM3BQtPid2E7AgkBccs9jDgEtVJUnv8Ymsg6TUruSKTWb1WQJc9ZMvjQyhQJw5jwGVNy5GjsYxVR22DS8osuNN",
  "key20": "2v9j1txb4cnnrEtf2agbXjH7ozWYm7tWoQfrqYvMtjd1SE8jGBKQpSvj52XQwSr9GQFYFF7osjinr37SGuY5uqVM",
  "key21": "48JQQprWakxiEZNfNUvGfcoNj4R1s7xa4a1AcCobi4yspiQoFKHqADcfj2ZLjQ47XTQteMpZWbMQQPuWMi9NhENA",
  "key22": "eLfEBCsKF8yP3ug2LhrpMUcjyhcqtB7HvCbH4imfAYES44HrpzwFc8JkkY8m6d9MgZQeYV96YcuoHgAfs5tnZ19",
  "key23": "5x35UoGWhtqeY8SxGGhX3XYCpEzY5QvmLBxK8kRqUmK5q95RuV7Hjj6As7vkEzTRQSAvrqRgJK7bRD9sSPbTHTtm",
  "key24": "DXtTKrSuJMFAvA8ZsEmfxpEPEmhaL9UNhTk4QspEzMaHkhcLPznWjRQLpPHg69WjRv14ZJTFyznZGSmvYM4rYRg",
  "key25": "4zM3CBE657gh14AQTiJ1atFHUVvAZEnxS8tDESEYAxAcSmheqq4p9xzgHH9ecCdnUihbZemVPA4fiu614BuHaom1",
  "key26": "47yB9FQboW7ZfkeaKKtkRTfG5ezkxmeSaWuix63ziKgyjYHHozZYedLi8QfnMXBDTyUSXEePhGpwntULFzSSSCh7",
  "key27": "3BkcC9RJeCAZAXbQrG9KdS71rjtGKrDHV8MbBbFgURxz6UNtjTxBBRgJCUKycWzFoGCE36Ds1a4WQ668YhpSwn9",
  "key28": "5KwsCGmF625QkBxypnDcqz3pn8FjJtJo7wq3oKcfCCM5Wn6TAKVCRisyY6KNAGQu1nDD9eamsVX2Cx9LkTBhSoAS",
  "key29": "2yxhd4fBgxYTQrzWjZabaTz3Nh142kZ3ryUcdn4vjPixhYsNGmByPn299DSRvvPUigJVNUCZTFajJkncLYrT43i5",
  "key30": "5EFYn9srv3M99LKMmT3se6F5oXzq3Bht9yXrETWcp9ibHzpjMRMoxuQt1omWT1NYJPkFjtSAtJb1P36rWT5dJCAJ",
  "key31": "2eQqFniGs7vf1QGXuC1xUG1Cid8w9SBMgLGxt5Uk3EPzU6MVixcs8wUttmrQZSXPFLvWrerrZhACdhogZNa7q4uc",
  "key32": "4aLUbg3jUKT9aiRMAE2pUXwxEh8ao39ht5sXUn59sEVyVvx1ophw1duFfumBFF9rCJHwvAA75e84nX5FyYq2xsR2",
  "key33": "5H5ba5pDkzzYNLaE2n9YcodiqYp4cscePrfBvYdQ7NgN8CEE36kRJvU6y3DkhGHnsH82LRa15SAu5qCVT3Ya1yYp",
  "key34": "5bvj2rV8rARotN4qrawwaApPi8LsAREJTxDKFJhEVTPf3desLkT9tCv1vxrkwjBnZHvJjYL3a19dAJdkP1dJPYP1",
  "key35": "4xz9PM6TcYeSHDhXEHoCKfq6gAdA4piypihCEZa9YwQfNZ9HvhAAAs5VZXj5oMpfgz1Fv2DiTJxusVnBxc8ShmaF",
  "key36": "2PwySxP6uDBpZnQpPXgoVeX9yX4Fwuq6XkCWNu9SKqRt9ahCX2JNpmyhz1gMADra8MgntJebc1jFL1v5CD6zoS1t",
  "key37": "5oK7n3Sr36kyCndzWbkCJK7NpsfAD9QAQ78b6Q2HXgzkvBEqpdeHjwDYKSFk99KmEDN2USCYvSeNTuUqLiAizun4",
  "key38": "2NMgsruP5aqcjiH6JsvYo95tUE7eMvUsRCJy7DMGJ9LkrWpwvqGWmKE6BY4fq2Hpvq972jUTGjV4fJpTrmEEq55Z",
  "key39": "Z4gKxYsgJSoLHjjsBF6xwoZZswjpFtNshbGDNHi2sEszMCwtWMrQejgAoAggba34VdbbfUsJSPsDEVsfJz19E7J",
  "key40": "3ThcAdHTZ5QBVN5zCQhJr2HfwwEkHDdPsPMrkGy2V6Dmg9aKbAyyECi28zbmTpJ1kSPJQZNpfeqRjSCQqaQDrfmc",
  "key41": "WqugFH11rwKYYngSXT8eWE1NdM3tGJHXo9uZG82Xbg5J7HszFUEidhJQbfC4VaWtTHWGxHRBFF2Kiu26KDaTGi3",
  "key42": "48sno4yScWifarTeRfjHZm4TceX3VBdpAzZ9ZNF2xK6pGV97DJfDV1WYFEH2bmkVafbi4DuNFh57FEGCN1fb3zBk",
  "key43": "2FcwTiCW9QFPCVcfFYmDrWL3E48FnnayK83ZdUqERkjdikkphV3MVmX8f4EWMqRK74k6XFo5c4PzTjTAMoEQDNkQ"
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
