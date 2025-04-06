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
    "51pnfD6Us6dv8rCDJDAjaeXQWh5adttdksVsKbUWFtWDaFhYHhpLyEEttvxsP5XSvcApNr44xNdQRjo3uQrigPmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFj59TELgSMTM825QcHiAhV86UzdxTrjj5QeVyXEx4rKm5BnZTJrBdqt1y59kj6CAdPZQXnoKLBbcf7yTnDZaMn",
  "key1": "2xksTQP6qjrVv9AeSnDZ3ZnVFP58RppWeaBpHYBH9H7DBBWaYiJHov14z5soe9EkHye9VvtyN5wBuMWd4snnm7Fg",
  "key2": "5UZtZCFKtnXgKnPC6C2KUrhQeF29MwjoFT9eJ5812jdkDodpyiPf6oP269T58ggSrBdaFsyQJT84h1r1BYWksBZ2",
  "key3": "3Cw6dHoLWfdZ8Ju3Kuggs1Twkvj16fg4taenBSPMTgoqQVPhP6WWVhDR4Nvc7hnbfztfVZMjgwbeaAFhreEW2e9M",
  "key4": "48MmK9nEajixtmUDeLnSHXdPbnzABsiaLrK2WEXhHmYcWYpvNCbhNwvJ3BKJbsbbzmwCRYZzGrQYJUGe1ESbLqyC",
  "key5": "2HAPfzcyS32pZqzgRiH4TvecPmoJFQHgDW9w4oEkpJipNff1oB8EVf5YWNjW9byFknAJNJ8hGztnv58zw6ZYf5Nv",
  "key6": "o6PpuTrPsaymzu9mgXxgUpQTX93JPMB6uCWHDvR4rsqCXAA5PNqxmofWAyQciunZ4kCAWeVPsnpJgb8mpTmc5vV",
  "key7": "ecsdgWeGc4xwd5NQs8JRBdAPXbMkhdVX6SK3hR7HQAM226H4Zb8cVXFm1UDuLY1JRnSP9gcDpMsfo23HWLzcYmq",
  "key8": "4Q2FvxCZwdVSA7mbY41XmkCWm5AiGL11douAe5oej2RoUVeyHbM1WSuz3Sc6Rrf3vUbpRG1GjLKi66Pf12MGbx1S",
  "key9": "56PJMwRb1FhKV6BFeyyPqqcfVARMguFugeuFc1coEdjiQRjar8JyP6ZgcK1DJxaW2sAGVvhXSoHkWspfodrLeTZT",
  "key10": "3QFpP6oi86DQ44owEhnPngpTNFYiv7ULZjzW88kVXEs9QKJw9qzcp2E3YbXVkmccVZc8Qopp3Kj3FBvXdDVNwss9",
  "key11": "4r88qPGSkx4tbAmqNLDbkWPm4dnRyaFRxVKgxveM8gHxvayKSJjNhcCm6rw7ekuFzFN28aU31PtGYgkYw4yqQhvw",
  "key12": "54uaznLHxNP8P9xkRyroEccEZdW8XABRP2ivQu2dX2NuLy8mEtR1eh6g332zb86Ez9XPoVkSZgQcihJfayqLRtz6",
  "key13": "46pubtAxnH82hUJYam8jaCfZ7qm1gjbCqm78Wxwih6bzxKdvuHEkHiKXc14NtTRw9CVACxU8mbJrjXPDDWvBRcWz",
  "key14": "4CDUQQNghEQsgVD8G7S523mNNrhq4gXMAWsnzZZDvATXTPYqtjS6Q8ZLBoLFNXKYrr9n9F8akVC1LDFZnQ8raLbr",
  "key15": "4tyZky4EmLoxS8bSXeotkJey5eUaSbwS5QwTFuqs7YtbHUpyLEHraUdSZ67GBFK4DYLG9oQUabtk2FsZ9P2EmU4S",
  "key16": "4MD6bXQKmd6XkgoN211pytscx4fLikGC13pMkkw7MELiMeUjo3Yh1Pr4WvsMQxnJhkC9EuoLhf16GZf8drQkNB6V",
  "key17": "221G4qtMPktjsAY4Ee1k9u7YWUuxCsS4VAjBjhXHmzko2LdgVY3MMtZjVni9Rz9sY8j4fmspebecRVKH3FwFUjNV",
  "key18": "4mLrPhQYS6RR2DTSxrFRFpRPSzzjH8jsrfknPg1WKQUP8iEvNRzeg1QgkQAYs7hJjMAf7xxAULf5pteVWy7Q73HX",
  "key19": "dntHcQbaA4tMvBCndhxLEG5n6bQM5HKpsZz34ktcLfm3CKKomb5x6KjuhT2oYfxcfDD8LpvyYhGqniT2qHxvfxh",
  "key20": "45XJ4Hni7jiyrjcMjW9toE7vU1RS2PCcByPJP4pXSRFDU4yPMuY6YKRm1Yyg2rj6agHs9Xg1H3gi1HfyidtQpk7f",
  "key21": "2xKerjiTY4MG2Fmxoc6uLsa8X6M4ZskkauzTWc73XZMoy6TusukZHpsWfPsj5ss5BEAwRabW8n3v6XsXjy7nGjLS",
  "key22": "2QgUj1uhKkeLALbeiGU21tajuWnvJrhJXNK28yKCjnB4iC28rJm1wjKk2eTqtUeAESvit6cEib57CMMRrENSjgvD",
  "key23": "5rLNPzkBLGeusdHJEHqZ3kvQ8BuABiJvhtWJhnPycLuwu2gvYJY8hSaJbZXAzb5gsQjSaF6SMyTwPfjfmNKsDUq3",
  "key24": "594TwKE8tDY4gt8Mr8FozPMC9NTEegb5N1kDzkNy63PPuyA8q7LWTnw7V5a5StvPiXJjx2Ym13HpdnP5qPMjF516",
  "key25": "4axtuYY8W3SZqV9x1dRKwJtvLu4RpWp327j53hur5dNqtw9gKE3yYauR8RYxSEcZiJUQpXKhy4K1dt6buHPn1oMA",
  "key26": "3cfasKCjXsDBpN5i3eJPrJ6bbVPK7z5oiwyCjeLPvGwRAymaxNmaUNREFa6JEdcX5MByjrEp8gha1jmYQu8Zbi6e",
  "key27": "vcTZEH5aP6Jv5mUHYuDYJaMiMyYkisB7EUB8Ddn7kpBeBTiiWZYHVdzjyphc7dxJcoLgXbw8eNA3JRZcK48by5b",
  "key28": "dECZ38EMqMf4cViNFxuFKAd3hHjpZ9tKcshgRTpH36a8S8hD7Atg4KS2SSYh9LnVdkjAygmVKbiZVyfz38YmTkJ",
  "key29": "2JLiJLDdDcccgHopPENz59PQjXCsfUH9dMLcR8R7YwaY1Poz4gBCFFwXEd3bt2LXPWtiyYQLrhajsQSU5Ps6K1bA",
  "key30": "JxtcebZaF3uxAFSHoodieUFP95tEcLTMFEQuZUAifD5mHePqnPUiMw3GMRCnF77omMXCWPmmPjoRppiB7uagSty",
  "key31": "2bKDU4vFvVtVSwNsvydYMwpfZhLuRUV6cM8F2XXy95GviFocJQHZUfPspVYc2davkmxUY1NydTggctDwdLudYXa1",
  "key32": "432vSfXmsuCAJHx8N4pC9UnagNfeXNbKM524U3kJqEx5NSXbEaSZHa5Y6kwxb1dfVyMiiueXxbMYufdFYo52aPSQ",
  "key33": "4whijUJabPy9f5MW9KWRcmQUZ3za9GjFEHGivWMmNgMRU9PvFPNWPV1oEwNn3eTG3B2Tdy1rBLpckqih2kBzCfWF",
  "key34": "sHCdt1gotVsRAHpKWj1JvM5WkXU6cQ4VDQseBtPr3258wR7y1pCvW3ESQSuXEW2ArTbJvhqYjnGcjcKPVihxL82",
  "key35": "5Le5NagXd7PMWKmALB9Sn3fm8WYRrW65dy7LLb8GaLq1h2spGTLC6jSHUvNJ46ckvxabiJZ7Y1X1spVE8kvJQMxK",
  "key36": "4zfbtYTfetzdWSbXCvETymrHaaRHvY26TWkVR9MGquUbCua6kYVPKZ9ByDoWKXK3GNeGJQPMmUKHQKyG565Y6eFn",
  "key37": "34VCY1QYAfFcGBKh7iLmPrZE71ch5FzKiF9N8FyCu976tbPac1vVmVovwt4323YYw45QFDKVtAK2SVmzGWtSDz4v",
  "key38": "4bTFeCNfB17TPsN4NgEt7inSad8axzSiZuao7Gt9CPV8pTvP5C2MJ1ywMz3rb8xaqUAQgKhx2XRZ6rwzta5WLU9H"
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
