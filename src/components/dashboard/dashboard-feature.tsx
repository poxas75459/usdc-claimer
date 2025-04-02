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
    "2VZFR5CX71HEkKEor2E4TS1JCtxKHf643horXyQfPJDbHy3jphS3JRFDGAfHK5z7rX9mGfKRUdo8YMGW9qnLiraL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrDw9Mg9324wjjBGQcLs4oepw5yw3WYi1avdUmth1jvzTHq2RTYqBCY4GJt1xG7Kaxp3zMkuwmR1HdTXtnDbPxh",
  "key1": "4cRNENuHxp2NzxwgtpAXju5pVndaomgJuM7tpN3D5TGm1tbTU9nc2SbqyGe4hVNVpgaxtPYbTyAM9jVbyRMe1JwW",
  "key2": "5NUWTeU8ZqAkeMNhVyzfTNVGjaKEfYf5i1FC2f8NxfC57rthcFFHv9QdvcL14bi66KGALiC7Dwzr8KbEvF6snF4H",
  "key3": "5V32EixootAUWm6MTEZ64MHttF9UsnuBs7KGd2wGJqdspJEaiQD8jmzMBpTETgMxknvdMEFRLnCvknbGnBfaBdjL",
  "key4": "EcbnHAX5EsxesYEdUR7R5EptLGcu9yi4MPm6fUNgA6UDwghpqi3j6CxrRoTUuRQzGHLMf5Uij2R8JNLU4Kgm4wU",
  "key5": "aMSxpiNi88gEJDAW9nWuHKKDvqBBDQjAsXUQcCTQj6EkDXydfCpiJtxmmiLX4RTFZQQYAfQGBdu3ww5p311kPBd",
  "key6": "cYePjyB8AMKD7xXPdPoh7KXkhaQJxu3kgghzE18VZiNKAz3NA8AWoKdNG3sQiPpGimNXWqsisDpQNeoG5pyhhEZ",
  "key7": "5rX5cQXZ8pZZinrdRtfFygvCzUQMj5gfjes3k4AQRSj4tToG7SwLY2siiQreUKzcupvKv9eV5Hh5JuqCNiqkgE5b",
  "key8": "5d6V2qpqxAPS7RRdoThCDuExi9YwsRg1xPkTs9AsHxozEdaDnycsrZcN8HqL3MASo2Qtk95PLKLrCJFfvBBgBNTU",
  "key9": "3K8WUyP1shC34EYJigBCzT3iSbzpr8AChEr6RCJ44pZcTLjZ41FS7wk3Ke2aweh84PZU2Curqb7LBgTzxby5JVhU",
  "key10": "3UC2pPK4kJTe95cdspCHqHVx3rBvKmxmwZyFf7LnAG5i1muYesz3Jpxuc4XD4gtTuLNKasYyj9m5imPVyJHCwx4z",
  "key11": "4enPDiSUZzhoFtS6vuCz23LesDh84dKcmcJJHuKG5AtD86PvoAJ3i2SWway1hW9i1Lf67E3ZtjAiJ1xbnPxFi4oR",
  "key12": "4P1NuvvaVbz6G2BPM18xs5xmtmEkUMaHHpscKXhPqyvzZZPmNLxrza5a29M1DcVAKv2D7yzZ2EXZidXmTvc4RNZc",
  "key13": "5QZNptAFungkBi8FSQqHHCzox9uX7gCkmmrjPASQSr6SaQ571vVVqYggQehN51FdK9kZHAYfa6rjZ2om78YYs5Sx",
  "key14": "4nfn7YaeTDobHQVAqDS3ijqcv1jqdygAwouLcKpy8R3YCxyywdLKqaXKSZufBDGCJsz1uRtvz6QbpZ79tfMWTe4B",
  "key15": "4wQEUQvbEqDbDehJDpLVWZwUypzEFyssjrgxQHBTqW8r8eYU5juxdVmkBwmzNpaJ5BYQfti2DQynP4WExF9K988w",
  "key16": "3WZLD4hzrbaSKEDd5Ezho4t98SyrK8WBFUJRE43uiTXVrCf5xwWnFsLXLFsGXEweke3gMV1ZJgFMBVFeam4aqS98",
  "key17": "55Qou8gPBpg3mdHVQGddpR3j2CH7yg7hRKLMPiWVXdw9dkvfpMCkk1cFY5Ff8d8ZeZSgnJohKkxqExLzzX3V9Db",
  "key18": "56hnMzE3o5giVGGUMsd2rb8FqgiuYf2SBS3CTtZfei11ViXxSEXDdFPkaTZE6GyDKfjAaXumgHn6dqMJySpL6ZWk",
  "key19": "5ktPHMXST6t1Qts6TTSYZW9z3Udkyxm6TMVkg2mVQrqC1eW4GNh7aZevSCVtTUrUJXcXJyNmXi7zXbaBqRudkNmg",
  "key20": "66cXv2hYFXxzG7Wmhx1UD6i1xreeTgChvp5P1dfnGCez8uBfZGpS68f6sT5HAveiFkUaToXaXXiHxXW8pDTkXp3Q",
  "key21": "3pzbMcroXsvALAHaKRA4Piov4kgW8e23MTfSJWDRNdww78gD4N1CKBUJyG5CiHdMnKNwCU43qgyFaStSN84fhqTP",
  "key22": "63UGv6dJHn3oo5GGxDW3JeRkNW39uiuw7QJvnN17r1TSeETQuJ8jcycL3Tqof1yPojeer728VVu9VYXASDscFJc",
  "key23": "5ymaZq32p4kqJuBHxKLffG3yNUQnH24A3Py3kVGogLVYjDX9yGqKuz1oJDJNxiLudKnC9Urneph8msNJBbF5qjt9",
  "key24": "39gYeYCyARUwbbu18ZLTt4AoB3ZKBU7J56LD1YxfjGxdV4Zk7tedKG6qHLxftNWWn7D6xn8S44dNqTSBu1WsCiUH",
  "key25": "2qkmMwepfqcn4AbESSELFb1NJXL9S4DL4gmfj9NeDqhWtUZBEndzJzxjvko7MuK5DCdvESD65o1DLsHPTwz61kgZ",
  "key26": "8TBk6MjaPgbTiyLrUHecR2XLyr3Lgmtns5PqezfY9AGyv6d28aLCQmqqThn3Fon3WioKw7g2rxwyesdv9PN8gay",
  "key27": "2EkiA51zgaUdT8cgi3T78hUGeshBJWdk6j25c96MUo9WZzn32ffJ7APszMLepME8h9ABKKqter7B4jRgJLzttLGQ",
  "key28": "5oeSQZShNMrweFjnPCaUR8eXm5zP3MSKRH7b7awXHrzfuENVemCrj3KBzBJvShcdwtZ5gZ8vD9GBrLMUfj8fmkGg",
  "key29": "3zJZF78RjtgJAVpoz1BQaNAwBqzUGkghjNUBaFPZ7yDu86Eq3WKz4V8K3UKyZvq7saHZjXqV7tFzD921GfzDSTbR",
  "key30": "3xHYPLdD24FthgpYq1RqserfE9AAn6rLJtnr2XZTJX8utFrmVHx2Rb8XnstSgFodmvqcaDDNYiSTkt72GnuFwbeA",
  "key31": "2k3tXmXjDHMjMo46XBah7sJePZpLdoKUjpBVMZ3GnBhFp2f5EeaxoTVTLT58m2cjYgsWyPmYV92CtKBXU5ZvcAAj",
  "key32": "62fNj8vx4mmDELWN9niRuCHqag6MqnTJ9WePvVwwo2jKnShYT8PpN1ZvoRe4QytG3NYcFLNrxnYfDwcSW2jypwFx",
  "key33": "4GFmyY2VYUNhnzLFtNbQEqNjjAmGMccxTGygkupFFkY9sx93hFb21xKmzja6dEXzjAP3anFUBt2vmef2y8qi5YHQ",
  "key34": "3fz1xsz92H6Qo1Z7uGSXfbukfnGcgEzL8pkfU76o1nDQ2nWzTzF33ZTCp7SCqZjfqr3SceswtsykchMkzFg4TTHD",
  "key35": "5RKSfgoAx9jgaPWrTF5bwV1eG1qqkFjHmCjqzf88FgoirbvRJdCguzmyUpihecnFCnyMdpgeED5fn8wZ6aCKKw2P",
  "key36": "4pkm7ntavzRGTyDXPhSjJTLjX34Kkcd4qHRto7K9SdHLiRkT72QxdconsiGfcWNAuhHWqHievcAzLX87Es2aRZNg",
  "key37": "BCPg8zoWNsB4gpgm1cFQad9zchFY5Tqm1v9LE6SZtsFWdjZpDqB57sr1REhs8jdNoKs4EDZJMvPoTkevyr2DoGQ",
  "key38": "4mkuTxkzG6qQh33457TjQz56miMfsdjfZNscnqxSWUbCNiy8sGNESBEpzQAm4HYnDMD24Q2tH7HckUgNLpb9hVvD",
  "key39": "2XLHNzKZoBmiNyknmC7pwpXqdwyb2wFygerDAhfwuuawcedHj4gNDXE1EU8in2boDRFguCqMgvPMfuBmkBN648cz",
  "key40": "2EKdqY9ucnu169TXuQqeMNd425ZQJaJB8Km8Yf4a66iQd37gibU2qUdCVnHK7RwTrQVCkE8HcpbefEhQWyAGsZFX"
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
