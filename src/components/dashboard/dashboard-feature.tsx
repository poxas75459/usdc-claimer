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
    "4VwK3wtBGyaoyS5oV66wHuiHMQxvbuTsAsAsjgyJNULrzHhEz8qN7a3kSn5sksC21XbwXH1z3AM9Ei9ibf36YhSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PoVXCBssWCSEgAYndPxsaKBVNmwtQDCTLRx5kchcky7TTHPXFrD9e4doSwEu8F9iqRKEsKQR2m7Dym2ZFwW8cYo",
  "key1": "2HHAr2J6D8N4LA7hVxUME5vvp9YZUKeUsPCwiAVSYDDLxVB8ySaxupRUZVAx1R1UZiYh8smJ9WBAChFW5CKpYwtK",
  "key2": "56NFD3kTHmfpQDiyKYS3W1ug9YdELh56jeA2iWj3YLngsvzkuSrpH5mZLmMi49rbgh888Gz2pDv1ELjTaC9jePWB",
  "key3": "4w4s7M5R5L1x43K9QgYrAVi9ouMJvCGwqgQdJHKoki7CkP8SKLeRxbDNb23TAVg5HFF5d2J9FwJie1FqSwyzLbDW",
  "key4": "4NrtfjNNzU5qwTQXTBzPG1KsCZNyX4tckhFsgQX3kbbxQLaADUeuPevsmFefcebYSP6K7FMVbfDXEHS8RBSC5NfZ",
  "key5": "26yUaq2iiV9JBtuWXZkMkpKKQVDFa7UeByk9LvwofQUfns6aj3phBEgLyWmSakLiYXweSYHe5ofVCDszviTJidkK",
  "key6": "5BLqVRqT6srTxKbMjKPBmToHuTbsG3CXZCUxZ8SSw3GJLeHqVjD9jqmVYzR3n3jfRCJeBSNFtSHczawiJEGHoxuT",
  "key7": "4jFvh9pMG3eFo25Gs89gzm2memcFhmRWXf3anHhYhwX3U4UPe3DTewJpiFrCBFpvH7h5mp8yP5VKd3jEu6zjPdMP",
  "key8": "5N36wy4d7Q546Ktq1jSfxvwnGbVMTNu4eXiHyuKdocGvhaVGuJJyZdCJZeZ3Y1urX1peXU2SxqiqDiKJSNsUvrV",
  "key9": "65CkJgbFZeDNRAodmWYa42kxupssbAFscjJKYWt1zAzPinPb2UTCuA6zzA5Wsu7R6sVdJHy7ntxYfLQcmTnL2R4q",
  "key10": "6J8uhf8f4zNkSc9SciXQ7c2Sr2mTfEL86pByP7goQWZR5YkX5kNbzrNEEMKBEboxruTq1B7XuGhQ2MVbNMvgVeh",
  "key11": "3vvUpauA2r2Jp87R4QPhuob9DtXA1nU72wPpHwsVp5MDi588XALb5reeyoH3iXKsPe6M1dwjJpRPb4vHHCgEzg4k",
  "key12": "2wBKzxwzr2sbtq1wZpBSX3qT3jZDcGVxpwN7PdxKBESdiERMmmQ32xDAuXmqyofNxec6mm3HJgsHHhnGU8TpKHzZ",
  "key13": "SZA5Kxyur8KKHeB6T6JPkY84DSZjuN3BAv1Pnd5jwyDxaEqpxkU32Es24eZXg6GsKALfLgSumjjvAZHUQCuXonD",
  "key14": "5c9eDfQUUPNEnPt29NUsxNnn1AsjxSC1vRzZ59zX3AxKmgTr8dKr64joxr1SU537KdWHTzq4VW9u3TeNGRtChN9U",
  "key15": "3evUrfYJwVMtiLMVrLcJxwxX1VmoPcUderbqSDrZ96fUpNmUMBudKDWTnTUusskqeXt77tFgPgK2iJX1HmXsEXmi",
  "key16": "44B9XiUjJFgNd6UjNziXQeZAgP84qmxGoLez5udmuGFmeT99MTtv1DukJydMvP5ge2HKiZuNi9TmgNuYM39prE9t",
  "key17": "3ot7MnjNJ6T5i8hYkLTHr2rzBRRHhmND9Dt83BCzwYrEHKpgdZLTDesasVwo7BaWJUThZdhfYA3xe3e2zgtkBZSB",
  "key18": "2pJvhjRxtmdgrStAMfwZY51YWvxCTWc2uB5QwFjnMQt4txq6EwWvwZrRVzhRzhBA8vYKq3aLdvnJQhmZAhEuhdAn",
  "key19": "5QG2YrcBZENwWx1Z6Gw8d2KK8xLrHApVoPcHqaShRb1cej9hGvGpwHiHzjFvjvr8EJfuNPf1RF6RzKyCHkjFk5RQ",
  "key20": "53qJfb8AygL9iAQRyTtpHv68a4MiHmE3Do9uHUdpDeTMoJnScLt5npnKEXM7vHJednLWGKrS2ScNBKejrEzAMdAr",
  "key21": "52mps6cxacLUJ4Gyo97SRkd6eCQNDBs3Q7a9niSQ7YFktDNEEibeNrfuR418D2Zgq4vZzmdkaz6bKchAF2AmzhDX",
  "key22": "4xS2NiHqz5eUa1kDSjCGnneT7Uqm5XPufVk9QERpErDLQGNFxMMwqY8dNQzRtc1onkiHpyiGhE7hZBmiFL4MERH7",
  "key23": "JiurFmDcjVzhC85GEHYbAioQjiQJroiVNUFgisdST2MT48Q6wx7qG5MmXh3jrFJLDD6fh6JsV95Xtq34BoKaTca",
  "key24": "5hYe5LCQE1KTVBwVKtZ4LT84qtscSUJdY51BYUoXExf9NiPDDuHzAwXpZC3Rvth8LqaiooHt1tVw7FZsWkwuv7tw",
  "key25": "4Y2qiDZoaUqNp7p3G7eGxfdLzjt4PzKZBhQW9irQ2bdDWrkSM242v3dNqDxwKm6DHAcsVrdrRB7wXceHBjRf9vsX",
  "key26": "2NfXpVgM2uPcfmh16GCBvqSZdpH9EMLKeLi3dctCvGouJr8AgHnm1vT7Poxd7mc3gahd8c2G5ZE1qwp3UPk56rNu",
  "key27": "3LSWZc9oYPLwmqHgpdi6tC3U6AaUy5oVin5fexZR6j6iLzuMMVcqB9eUL2uFgTABDLwBtLt15M1PUcbePQBku7E3",
  "key28": "559BHqZJo5b42bui3CvXf2YF7PCTCUWEmcgN8op3GJGWRdXmHPa1sJMbHNzKuuassSwLDuB7RhRBxZeSmcYJVTWy",
  "key29": "3xWam2Kf1sS5c2Pb2rjPe3RvjK98V9fijkq3997v4ZCFBL47TTfDMLysb8HkqkbQ3dGPGT9gJ7xifAEqu6LLKm2J",
  "key30": "3ZSKBokfWEuWuC1A3YA2yMcvYbFR8Ju3FnN25MSNMFDC7wf6mRv7jZY7wZ8Tw136GRdoeWmJREXyUqNDxYS8gTnt",
  "key31": "65SheTF3VLU3wG1KdneLtYUSCHy8UbxzbjdgFQR2Nc4ihzKSWzSeMXhYZhJzxrdUF39sF6Rq9rDubCacwGzC519o",
  "key32": "3UmuHLY4c9wfAQYF9bJejDmKTAh7aPvJZAN9ojx8orKtksKKxs3QmhDjZPWxTwzhfEfCqW8RLEhbdk1s1qrJnnMP",
  "key33": "4UGfQ3UmNAqxNW7FbpD2QQydR8f1bsyi26Wawo9CLHxUSkd5UVtk5oAVqVj2c1zhn2dexkcDsL1zkd4FQX5BNYnP",
  "key34": "3MTxJW5iZkUodjb2uFSutphDN6jf4P9Nn7HETqKz76ziLH1FB1nd9josgooDPSmH8zhHGYHGT48nyjZDt6EvQRS4",
  "key35": "4E4vPJR6zoHzKmWC2Wq3tq4z6PmxZ8Domoq56qvFjer8iQLwy5YPjXqnsHu1TXMKDbL7tT494tsHm2NvZMJCCd7X",
  "key36": "3ZsP7DFKWPBBUtyYoiTJ8oGHcoorH5QXxnt8KdmjpUT8vdB8yW2w97E74WySfVrv5kuKzbr56VqjbSnBCFkwdonq",
  "key37": "4MPY5WeXvSo894awsPpoA2PrfeokQcK5ZaA2SLbx9SD5ibLXLNVgPqB9MTYxxfyCKZDEi7CzjLuoFFw4jwqYoX5E",
  "key38": "2qXiPMuB1f4pRExgpnNHr6QS4dMCT653fk8KeGhVcVoWegcmcbHGpaLpJdtY8QMBvdXa8X9F4X84SvFjmGB8BW69",
  "key39": "3NujMwR2A7oHRfFFY527qYrev9VPSeRJB7eAWvuH4s7d8Kr1W15sedZBqHwJ9cXUMLGPtJXf9rMvDi1v2BC3Bj1k",
  "key40": "yQwatw7zj5YGfskR2aJXXTC5cNygLP1x7VZS4yjJHAkvNygL73QF8TtZ8e2yy2MMX9uzM9hXBhqbjsg7t9U4AQp",
  "key41": "3F64N7dDuV9zAtZTUg3Xhy3gByF2YcGoa2fY5JWpVGKsK19pTKpEknyeikMSSQqzi1LTkxpddZqrpGVWvFPri42Y",
  "key42": "3pQrrdLNvSKa3qFxDiGH2AzwEAV5piWXJejUyBH3XAuGdkzA2uggjMVgVAKTLfXmsGKprZrH2hGk5NxGwZUhciK1",
  "key43": "FNnXXq37J2he4Kbk47ZuM8ZRhSWdhSZ69K2WuDpjB1yFLMJe9A4a7eodhP2Coi7E4wynxXdGZyf6eg9X8r4SkG2",
  "key44": "5Q6aQNWHac3hcF5Ht9V3D4iAa58NqArgNxvhEGuYTGjispeg5BzJcSdun9Cu7sHrTXNqsvZ3v8NCPXV9Y4TPNbCT",
  "key45": "4kojDZjKrH8GWVFmpqbtBUSse5wjDYbABsEN3672hRtnLxD9rNwG9P4JXjHhKMDjUavTrsyBhm3pzmaDzxdNWNhg"
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
