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
    "3cjyscK3Lg9tU4RwbQYBkJWtHTPCUrLg7rmMq5JBxqtkznNfpBK4kDFLHDTUFU61PQRypeECxVeSmXofF8LHZmUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ysi2xaJoaMqCD1vBYyWSzY6xeooe7ptGdCeJKRLz8FNK9BvXrFy9tavpQdc1Zc8H1wVyYaJ3SpV1A3fdhv8qsws",
  "key1": "33UbNqXmWf9YTkbDWAijqhJpfbAw7gUi2Vzr1au5Y33JKGNkxB9BAq7b65dCwBBvkzZT1owFcF666cHXUEGFSiXn",
  "key2": "kFgJ1ezpgJM7EnQtfZAMQZj82ueonQ2e3Mi2ieDTz8FgDMSkoSfRJ1N8oAWAXujRQHfJ6Y6jardps5roaXMMSWo",
  "key3": "2D9NL87vbsKGRcMvxQd7GZypb1HvMt18u9K44rQ6juZ5KGArrUEffZjXS3bhheSnag68b1kUrH3k3SKvuTqL9E1C",
  "key4": "4t3oy5ufiGiNdTwsyiRNeDrhfD3Y2djTFZvT63zWh8cdVcbKmy6ZwEhA8mPkVQgy538RFseWKptL7y6568ThWTNG",
  "key5": "5hNeLGMf8B9zPL9DJFBLF2ZAwWALcvLLM7iJB6xQy9XMK29ARNAXFhSzsL83G5ubh4rWj8V1kswQVJBWMu1rS6iU",
  "key6": "b7wPbTTYAnKF5RnFwoCcPjKbKin9XubFDG3VaHnYG1qw3mexqVtSfJhg1ofoD3L5kftK2MPVRFQsw82ZQMK3hGD",
  "key7": "3w76r8HEo826myPvPuKf7oi9FmqX5QamJ3pHeefMiY4RPCC2VggMKxsTjCTYmcuoAB6xPZvFwVV7mqV5ooWd4yZ5",
  "key8": "5NJgQUjR3CFKfhxm9gqhUq6ELg7ymt1PvFokn5abcGbvVnFSi1YNtjxuJ6fa3DTS8LMN3qW4FxpRrwCLtsiXMc56",
  "key9": "gJi65RqxUQy6tE5VoYtMcGLnXmZHv4wimLBBMWtvVV5k7AezzVUyoNePviibA1qtpArgYXqzGCaCtHKNdJPtzcK",
  "key10": "54ThZXHtrh6HKwPVzkvFyUXyRCm24ri6Tmt8rNwjtQE22YHVKJHZsSbx9uG1SJZ8Q9KWVD8fna2NE5JUoBZJCayL",
  "key11": "23Q1CsscNtMLGovjRFwSDXbEpqLJjqW1jtbvPDhGEhsKyFHqogchZL71s7zgs16EoUjKpH3Qosvp58K7DXBVgJV1",
  "key12": "3VapiFSdTyyKn75yabG8ds1Wu89AAk1V5cFpdDT4gScQX8hAbpy4jcCJCokqCauKrhB34dKbpkxrPNC395HhtsHC",
  "key13": "2o3v5J43m1MG96r8R1vHUKWyCEPhsgfsT3zsWMEy1QHyssDDASb2Root4fS5Uzvc1HMovCVQ8jVKWbSjubUJ6WrY",
  "key14": "3qLo6Nhd6dN2bdAeTKug8PmcwhfLrhjai1fpQWANSy94qQQcXqytvfamQZU22a5AZWZw3AQXY2DVpZFZMrLVq4TX",
  "key15": "2WZVFBd3SoceifQM8wLqLGnMjyfqaFVtXveyLmsFeRFf1trX5WNM9qcNSDNmP1Bu3WN2xsjDdscAiGvvaRidqnEB",
  "key16": "4NnPDtKPJGxQYbSKBmt5xFfozJZJRH2XYEeMYuJhu5qZXrvjc4wnQDnNfEQNqzxdQ4BnvcZu9LconvibsUNjiS7e",
  "key17": "2EDYgQc7aw6AeFe49YxQ4jFkpzTidTD7T1NqCStXwo8VWvsDiAqFws9PGG79FwyevDTE5VxTj1LnE9mvsEDieiA8",
  "key18": "2dpyu1iBqALiN2k7YZwv6iD8bXHynT8oRA6YMJQwwg2WwkWQ4MmzC23GiyJkNfKJsggbCtpHxsa6ybTvk2u8GoDc",
  "key19": "3gsLfkVcLoJKwhn3arRTZcSuE5pHfX46iMg31tE51xXhZV9rFgxgwkziEW5fyvNdDgxMPbRHpEUTxMadB7pMQWEK",
  "key20": "44GDkH2L77Ls9KpP7pe9HFztwmxdCkxtBUejhMfktfn5VPveeYZFRqP2gToiM8C18GyHmGjSeLLQGMiY7xVq66HD",
  "key21": "39PjkJASjUWJk5xPBsfpzpzHge4hKs1vzms2Liq4HBcQTqyS9pof7Yi6Xj4RqHZXyDsvMrvsLUxTWSvrFTDyhCPM",
  "key22": "NU6Ras7EsUc3LtcmXDWgbtB4HXmQXzquqGgj7D2VwM6suBxWFnkD4mmDoh1sLJ4PQD3oZXPsD2LA6c2cVmyMNsE",
  "key23": "3RJTjkSHB88JGPmja91LWH5Y9pq8X1agtpk6ZveeKaQpUHEphuN8MUZMYZAixat7MLAqi2YFgHQn2B2oKpoWXEUs",
  "key24": "21Q4ktFBWq4dHx6bukVKHddaVaaZDKjWVQyePhtEbTVYRDutgwbExK7Ks1i9CBPRYqLyvry3zDLymDAsqc4yJt6G",
  "key25": "3VFkjUNTDeujdW6p48KhYQSaWSCvBQ2ZpyraKnsPH411VbZMWEobeVMQCn7igehFqP6G1ESAeEVn1ekGcTnmvWEp",
  "key26": "7FSU6fgVby6nR4282SFDba373upaQYv4DoxsY5xuEw5qGeJEEPpqDHXSKtzbQMqfJP9t4CC55qJVYakzn3xkcQ3",
  "key27": "3byVCZaJkoP1S21BGw2f5YxkxbeAu1EvXFSXTdXDmGZuzx8cbjY4KdGafgduHDXuZ1N4DTwYyqMvLi5dprCq2FUt",
  "key28": "Y5ZSDomCcox87y64hKdtiwpg5H4D4qfQkctrKcmbis2k2YjvNZKmCDTrBMKpJnu881WLwCEBotvCtEMd8eoPUTM",
  "key29": "2DdW2P2U8NiivAironpcj551whZBmfGSM2ihUc1bHbbpxyUeBXb9tjGAadEyFrTeyjjHvF6bppjPTRnX8quibqVp",
  "key30": "4ViZdg8wBAojV78dChXH7NkSRsRjoM7s6u2KK47aMXMfpUrnwgyghUiUsWVSPpRMcSj4HdyP9EHs6c6nTev72HJL",
  "key31": "3gtkQV86a7u5QpS1KueYSXHk6Mq17BVjamgjZXSWjE94BCe9kTxw1PYj5Lo97NhHzTj8ZoPnaVk11V2heXr14wAk",
  "key32": "43nvPEXWxP7MqANbckLk3DqRfzskTES9fEa89NgVtYkW9XCaqwHKAokS5ANySDykjwC6Qy667qCi8LvwgC6hFAnG",
  "key33": "wWBaZ2SakavdGrLh52WjG58J5iCJ2HdiruKa5Fpi191WonhHmZotgK1RoKBhB2tMzeJqoFsMaRM5Uo3yMtRtgqY",
  "key34": "3orobjNSJGxip19oWiQVbDvcFQ7vxL119LVqCNQm9SwMUtop3EaMQhyexb9V3ii7LL2nDFWVjPcHkYby7Tr6wc9Q",
  "key35": "2hBp9MNbxqXmtfSNFTPspbiSSPBwrBwoBLrf2xmxRSDJen3W87BFNYxtqY3r2sNA4mHDz4CwDejDMr5U5xckNWRc",
  "key36": "5NT1Ta614QwxTEXKzyGiRsecXp75aG1bGgCpoCLc9Jgx28tBg3QH7dG8gYHPK27sgZAzoeZhjq7yNqCt7fqk2qX8",
  "key37": "58oxfdobgasmXHLfVgMtTXqXX8dfVVMsAk3wYTrhC1dQN12K4eieEKXgRSBiJmgujKw17NhonvvUQEZrR3tZNM9G",
  "key38": "6D2m3i48Ux4dsKqUn5YfNQW846fzi6L5pRTRZdAd7zU6fbUf6Hauczs7PK6Jx4fZxxfhiMoyatMt37jqA9sp7uE",
  "key39": "31jaPba5YYYCQf7YLvb1R7A4w2c2RDRY4coWUNVWDjg1PxRW9dzGjSWDZfSnfX3ZpwBGTm1Rn2i3BH1p3RC7jW37",
  "key40": "vNYF4BCvG1oNKFFKibJhDMrMJGd8YRNnXwD2gyeA3TEHb6RAFsoWF35DAXBm1upDVf3HnaSKcpSh2WHQ44juC1f",
  "key41": "5sYRy13qu2NyF5QzMHkBTkn6nxcDsGhKN3toZ2Yq7gyVk8SKUSdY9aDMdkv88YDXJKm96upuWPCYMvYLJFhsaoki",
  "key42": "4UojUaL27U36kGNUAc2kjqsj1LfvmLtird7SxsE3pwnJB1Zqr3Lewvwc2ZHFUS1rS6Nko64b3BQKx2VnVjDaKBPv",
  "key43": "4aj1rKhuSfMgdb6AZ9svZJRWaEjuou1f4PUJ8UA3foRzXcVgJjbSRck8zdGmb8YWDcGb9EycJSVkYzq2ca9x1YE4",
  "key44": "2hpWETw4zBux2ZM5yyof4k14erZ6KH5sbenqw3ZXsLh1M8hWjfUj3jZyzsmGn4ZijCCqyXghyvL4XhaXWGD5rkDo",
  "key45": "3iJcVvN3xLfjoU368o5Jqqyt734weygHQzDTKU5muGL5rTVdRKQUvrjtAEKsXUnk2f1PJSPe5snBCaHwoUuRce9D",
  "key46": "2VSDQyyMTJoGsspeygSGHWWoWEHRANbzx2iZy7KgmcGCYKMQPSbfUBGjgHjwBgJSdr6eufwjPaPGE5LG1Aqg49XW",
  "key47": "RY3K2Sw1Ddjgzv4tMQTbxKvCuofTkVm7oXa9NB1KAhU6GKEAn2RRPgvbb2dSawgcatfjTzj5EQ2V7wstw7yJC2D"
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
