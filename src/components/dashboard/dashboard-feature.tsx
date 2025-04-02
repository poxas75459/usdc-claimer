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
    "5k4uDtFYnMZjNDJHV3CDc9Et93ieMxuzKVnPSFtTqtBBgvQbxV7RPUAUjY2Q2XTLZB7TgYdeZEEt4kvg21SRaFfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFuxkzwL8cmuoFKoQcaK8x1QPuL9dtZnV9YSWy4pXPpVS3n3XsxL9Yq43sUNySupCcSgsk8HGwixTJWnFwcYLwm",
  "key1": "Yc5gJSE7NTE9qoFZ3eCoSfF9sYuZ7YvdqNhP5zcxSG1KbKgY8v5QSv6DLMYf2Pzea5FWJKsF8cwxzGYpJ2VzrH7",
  "key2": "spYLSErq4RPwUgWUXjia6CibWvyfhGMH5py4dw7S16p1eEJqc39B4okxymwWLHT8RwtKLYbm5K2mwjFC9WxzZyn",
  "key3": "2v2VXPSykoeNVpRRGnsoPFeXnRwbcyoegyHJZa8NpPyvMN3kzgT4JQk5WNotH6wBa87Ju8XdC7G2dQ4W8d5PTXij",
  "key4": "3F1jChANamA3L3hznycc6f49E3U5kBGGUYUzm3MLATGyDTxyENjKmpcFHKG9BNMWXyTXDq19f4JXJdrisHiWsbKh",
  "key5": "3LDwjDQ411X43MhoB1k95C1pRAZQCKky1pzRgwGo484dbH5FsmBASmCZXZpPYHbkGc6LuRS9pG8z9spR21W5Boob",
  "key6": "4Fuy4obaDDvWB2cUgK2CK6JALfBZwLQ6mX8G4kfcqQzqjpgwehyuSRYtiJKGKSs4mSF2MpdJgqTv8EQafVWRy9C5",
  "key7": "32z4o9RYZMZdzrPggHp1J45Mohkaf8vAoWqGDuggSC9jfutQjZcjDDFUwT5ewGwQmxSYKPQ3XmUDd39S3yT5unnM",
  "key8": "4Ufwgo24KETzdKs93b31iFacDGQ2fywKTeU2AfCP37H53rbUNKt1YHtXhdC91eKr63ETpsp9XXFLAtj5yRCvVsy5",
  "key9": "3ngasrJtquXyhPVDMB9sd9QYmBVAEFmpyK9SiZMBAK2UB7YWWVYGZLs67H8jZtkey3ooJpmWo9HCLP92x6EXGjvY",
  "key10": "2z6XpNhug1yAjH7jmKLHFrqtnSi4XqqFcHzsaBy5mdaACKRLGCLTzfbUqUELYPFcbtEQqvDonnqvooPU16Rm3FvR",
  "key11": "jf9Y8Te9QM8sDfS4Ko1PCU7CAYGFC59kmaZmX6HPDQeMVNGyv5WWCTgt3u6SW3Qt2YPgUoKFgeuf8CCQ2WZT2JV",
  "key12": "2HYXhaDgV6syaFfLn7g64sBGzmXNpBGf4qKi3ieXcEjjPREXfu85dS3SwEGDtUF7v4W99wCC5NuGuqxne7yNYFx5",
  "key13": "5HbRrfD2MDwQwdSvTLmMUn7f9bGbpn2iCSutffUmKbSXD1cFBek5qrRYCe81JCujBHH2yV3H72XEK1LZZzkj3RN1",
  "key14": "5iBpbyBf96nssSZyyJeLRPWtZPgjFfyRmtYFyhZC2CUsPxzg9nYdnS9EUbb8avW9aVJZabxJmGtvq84ykwA8Gjca",
  "key15": "qwupWpYsZiYYibEcxeUiv1BwS9Yr7RyrGCNPg8tjbLdZxdsrEoqDezcwAVm4rnPgQKXHXLwSx5ETuHGMm97ygP9",
  "key16": "YCnWGH4pDtCQwoFGayEHANKfjRL8MLRkWXsqLR2ihtqTwfHJg5UfVmoDuwSxF4TUW4TfUWgiK2CtpVhdptGX3Dy",
  "key17": "2Ed9N2PAVJgecpjYYBYtbyb5hCRdwNbXZVCYftUSPhCc1kMkUSV4b5PwfSscYqrwaE5mA962FTGUVN9Ae5zcwfur",
  "key18": "5sH6LQjRmcajHYDBNffA9NdpPbHmgsVsZhCaFFSXGVVQDF8TmuLo7wemifKiYzKjzWcvAfNaXkQcLbQrSFiMvp3A",
  "key19": "v5oZb1gWaF59txNPy5StZm3Px7r6othwMA1GhjHDAqgcnnyEmUfQFNjkaTp4DYMGsKg4sKLZ16wSnakFTqMjZcU",
  "key20": "53YQjbkwkQT6YhHub6rE3jrBeqeRokP8ZdyY79vW47shc3gREwgp2iWJ4awhLTXMZtS9SVhUxCkcnVf5aaHVWWef",
  "key21": "b9haTW7DJopiz3Ri1Jc2DiDcXJYcodheBSbL6RjRTto2bGwQbMjpCvM7dFzK1Pn2SeHoRjUVsGgVVqyEy8NaGoT",
  "key22": "4xgU1mZrdVfUnqGRsfG5xibypCWkobmpmvZVqh6LTMHShbB9JE9qZLNfofhfYyMLJ5nU4PvRq4wQzQphQ9KT6q3N",
  "key23": "66SXL4SpfLGpNPBxSkRY52fGBT7crAorv562KpeW2YsNriENPp71J4R78uPLqAx82hJX5BjQMkSEK7yui6Aue911",
  "key24": "pvqCkmZC7ewQAcN7cwRo4prbfmSTQHfCZXMgdF5LKVUhExuX7iKF7hop6dRpS9H5eKec1FHKTpGTNTNZmDymvKG",
  "key25": "4ssBDbmY6QiJXgBE46aE3d8u3ja13vfxGJR1B46GLUkAgcwShoPiFedNwb4uegZvFrqKW25N3Rtjb1JS6hKvDPkE",
  "key26": "4ghUL6YScL65BbReNgtQYZipkaThUjU4uXn57S4eduhFtt83U5gap4ZDCtQa736uPug1T7gtumZodpx3NxTsq1zJ",
  "key27": "2kyCovsoM7mRztJJDcyBJH6sDU72Za77CE58p31DbDHkPyc8ZtYq83ZyVkSAtP8aWAEoQqXRrLu9ekUbQhfjL56P",
  "key28": "5k5jiWgCEqihUQZN6NC763rWwLt67pHkXLXdYKKmH8ggdFeZ3JNHcZB9vyxjhnLoWJZufQP93JTuxE7rpVuWCCNa",
  "key29": "5GZsqMUSUKbshZXhfD9XSf8RKNYBCnz1x6zg1sZq33ZMfQoQhq3dyLieS3F45PgGnz1E4qSuoFzXnK2J2HM1qRnj",
  "key30": "58KNHrzZU96N3mcXkRpFj7xjVy7mDFbPAEnEN7fSjJEBPFL35FPXaFgj94os4kfs2eSibAgDz2VvNpNydPn1t7j4",
  "key31": "3b3QSYSyGDBokih3puwpJs6iJC8HmHTDeFbiErBEhfpkS6arjvh1znbLyKbRhxuyjcjQqYffFHfsgKAS8MjLhU2X",
  "key32": "2xP1V9Cyt6fyJ7cxy2rrGM6EKcFipZ3UN2aKnWGYs4R4RLaQeFG8j43iM3vud8ZefbdhXw1ZDW6HsD9qFMGbcTKH",
  "key33": "Y1WCfiC4gpAmZoqn1q99iW42ZHdHe7iwxiCtKY3du5hZKuyjJZuYcRUb71s8eeZW5NSuBrNipshz8nRAqQ6QdHC",
  "key34": "2c3rnRzbiX6ZE7Rr7BLJkUPnVDbRLXiP15WwveKC77zjEjmtcc1P9Kp7hsAdrmrbXD52TD1V9GUJWgTseS8s28Km",
  "key35": "2bwSut7cUsJkdDWud6nXVRwgryRUtPwwirffeXoVpEjc9yDQMfo8Xu5SU5HDDYP96FhY1Y6oS3guAu6J2gCr51PF",
  "key36": "w8BVpeUPtMvWpzXzpe3CRMEnhCEgehczggNg2d8jSfSZ5zMQWVqcFjBhj5HmpF3StqwchiDi4fg9DeYbKNez1ZF",
  "key37": "3KFuZKGKHYk8uop6UGi2rn2CegPRGsGMCm1y4sNA3Pt5qse5UUPNWGS4n1eKNpTywnjWM6raNL1sSdv6Kz1sq2x7",
  "key38": "5Nwz8o2Uvq8YCzrziq3PyYJF2R1nYWdAivf2m9Smk52cPMoHmL1cHAXvnVUBmxnBPkvNcnWf23aG9HoC9AZvSNej",
  "key39": "52d6NFprSa56sKdLqPJkqznanTASoan8xtLstxf2kV9VvJ2NhM2MXtByJhLrSFrMV5WArcFKzJTSCdPVEMxjkuaU",
  "key40": "4wj77QQ4y4LErjGYwdRakjNJHo8Uz98mws3USLng3FUHmzv2m5JZDRW72DyhoSx8CUpdPa8MjEh4t3m8pvWN3Viq",
  "key41": "38fr3NrXF1KX4fbQ5oCZFo92pJF7bGMddJHUv9YfwXAEU2V9QTcRRJ9oTtezmPjen7N2hrEeRzqi82QdeBmmDLrp",
  "key42": "XMPpcLvpLUmZNp8KkxLnPxc6UyGRt4fBoSkn8HrEVeDycomiG143uWeJJc3iNF6SEbHyYJMbKjGkeMfiNqULNtK",
  "key43": "2uRrBs1AJumwbHQHRU7jRPxShocWX3dKRJMfsFdnRDntErLxYau5LGdd1yHFBqNuYSfJQoqg57XrzMiFMXKS65e5",
  "key44": "37PDkavdVft3Ezgaf9vefoxRNBeVgELPPFYwJUbCQeCCb9cj8XEA8uUXBFc552sr2C6bTPckzLoi6sxaSNDuZ9iR"
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
