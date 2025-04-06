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
    "3hqKb1bzNU9toc5cBMg2dZwcq2E6hc1SuaowZW4JEos3nRAruz7xQvfFCSBvpZ9CjCZ9a3rBTqp2FhZ6oBt8bQvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kyeXqgGoTT5RpoqUmx864SSTCoP7sZUNFNRbLspwqxDvF9ysMCMiX6odAUDwt2DqVHPqoAVNZFqdDKKQuKo7TK5",
  "key1": "2ysACBFPiKwjVNUNyS9ubUaQo6qwgRVdnbMTt6ffpt8w6aXiQU88vz4YzdtFwVQzrrdcoiFgaQXUmAtMx6FFgvWd",
  "key2": "3QzHdHthu8eah22GA5Ds4g8migS23s1jQxUgEuxN2LySgJnAbR6s5mw9wwsZYpSyDdAPrkUUkm2xUbFWefYYkG7R",
  "key3": "426fuFVqyAobUQFw3K9vyNyAcrcxm9GrTDP9z65ankq6ACCj2LcSibBg3St4r79mBGzoWMaZBQxYvMoVuB7RC4eL",
  "key4": "4f2t9nhyk3GZZQDySwDjsac9bpVLXf1AKvHtvYgDYfGtWSdELVrJvYVYYz7eYZxoS7zWLdLZ2h4RhmK8vQ7nYN8P",
  "key5": "5cEmJBASWELVNZUJWWAf7ajAartuXQUiocr9gFvhuNKgcSYpg3ScaiYoCBeaYzLqz7tFMpM6REfn4CYbmhFqLT1p",
  "key6": "3gaUE3ypiXsAUUVEV51SWTGFUztPRxz5x1gnwZa3viVTd4A1nKjxPEjWkgy36c4T21CsHTgT2YVj8ojz3JmpbJC8",
  "key7": "4VgFF5N3m1a7YUANb4w1sM23vJ7ePjn9UZXEzVTQNfDCzoVCtwoXiADssapP98RRUJeaowQDxhfMbndDndwaaq1a",
  "key8": "K3Kf2Vv36Ca1fE6KwdBjM2YwmtxySRJ5aGgBuSfuKVVhYk3MyExXiewT5wAMaVEq7pnAvBBt7BUpaQyGmmHnueS",
  "key9": "3q2Jow3EsamQsj4P76rkefv3Vbgbm8rtVHK2KeeaLYdRwiRHSHsVHK19uFNuUNGBBjAPNyuAhoJgMoQFsAjMWhQy",
  "key10": "2A3LMbpPNgq9berzJF6v2MLyfaa9SG6nh2E3rFZLiB7uhu2arZcLM5JPVxamQvobV7WqzxVdyKqyC6EHjDBY111C",
  "key11": "qmDxgc3js6a6iPsZmZcmmqsFFxEr3SJcnyqTzaUqg76XpLNugbK2Yjwa2kAYFKQMCrXrBQdzvnbAbGG9vVSTcYb",
  "key12": "47sorMZP66xXZ9y2kRiR4q1pPsCPTN4vFaTANgEuzCsJFHJr8BB5A34V8S1QQpVMqc9XrfBsFZVR3hqz9tZwe2Yd",
  "key13": "3hxwrYynVKmxL3UtEv4wG2JFP2eVurXWmnq9xbTg8YUaMiByyEq6EyY29rGk8RDerKT2tNsyMCEVdu6jLuEuNFs8",
  "key14": "2hjpBFYWs4v5Sbtm1TGJDpCcrtzqahdwRR63KRA2vyRrD78sTkvhSqnFGLPVSJ6UxvAq4Sjp17F4TC6dz4sNYM5o",
  "key15": "3AfZCPbpM83FhgVjBG1YPi9akcE9yuWgJ6pGwf8uZrrdFKB99ZqsedsjEJtprcShrBV25JbuLaz6kDzxja44Fvhf",
  "key16": "41Eu3gt3pRCZaMk4W6x8BGxxgYPgrNeuQ3FXny3Nyy2JmUgtcjyPcdc16QqgEkEvgNnZeMQDDCK8iMpTyGDELKPd",
  "key17": "2qu344XnMsDb7SbcpRmVVwGVrFWJtjJwg962haTMRpcws9Zd9fwWX4PniffNTqjMWFooXqjGKpLnCZLnbrmL54c3",
  "key18": "5d6j8TkpXvhdNvy8vZ97YusKLdz1NMiuKnn2KvSvpzVzciQHCVhi9NtS2SDeqNrDRFpeobB9ADg3WB22JDHXRXrY",
  "key19": "XFvsqXd1NmWm2embvcCNWwNDv52v8uP5ZwsUBNSX51qPpvp7ek6KwHv83FMC6JShpWSo1bDuJW5GLKpm1NMBLyP",
  "key20": "4uAhnNB6nzrcanTFZxn1d9Sv3iu4MuKPHdP4x6HuPZVoWwALZUvwUNg7kBamc7Wtpyww9ACqkBPn17aheTjbPCPv",
  "key21": "5cojcdKUFxgTdaJHnu4z67rmXjUgALyEa2bLVWg7xKc1Awx8AxxcDxk68GkcMqec2gUWAUqfsLaR5hge3KtL8f3T",
  "key22": "35zRum3Drh1fGHshhSdBvWrZy2aEZgamLMLN3XbP9JwXAiYS7nfz8FWN8dz9CgWXSFTU5aZ6xHiAkNC9gzS5EMUs",
  "key23": "4PYAPENqaXRHdw6BdASYMyFUhiNFMc8u9PzkebDUyxroipHaa9KyXrUpscHKEKkxAsN4fBJffTxUhxAn3Rg2SMni",
  "key24": "h6mHyb2acc7wWFZiyzd1yQu8DDBDCS4gHTosdzCizJr6mK2C6MZFnAMmt2jdnvDN7d4H1aectEPZvoP8y25dZx8",
  "key25": "5j7dQxEGLei2vnv3V1X8XFeL8WhJdvUfkKMUvm2hRJvJQzsjz49d2BSCjogRoRSmTzeN5mWq8J4EejwZTTfLDtEL",
  "key26": "5p7gghfoNDdZaoXA5GUdPm1i6m3YUsbawLkfHFRrPhwDReHFRmWWFGZW29jWF8ayxZq4xpGkgoc9zH3uTBoKixhP",
  "key27": "4ZwAiDZ3BAiq1roqinEaWzQYhEMd5v4BSNPup2pNr97ko91sKxLhp9yt858t1p5XTis9k9SJQEWy6JgxtF1pHaXe",
  "key28": "34LeRo9ziq5xVDTipipm3HwxAHRE6PcEL8ode6WFQ4j3bXMJkM5GEedqGyFmjzMNJCuMYETFn7LnxZ1RvdQ6h2ru",
  "key29": "559JnLwPk3Noio2g6FeERmsqu7WKMTVjSwyUqWebY2MXkw9Uy77hDESpgv9XqNqhW1em3u9BQn9nYp4ASZMAFAaw",
  "key30": "58WQAbk9C2EU7DZ9JgvasNHTqznU7R94ASV4A3bsWYmaCwHG3dJ6Lh4V5EsrNccboP771aar4cxGwAxPGy5AMADz",
  "key31": "5kGhDnRpdKWau7bELeujq96SbGbDm7c1f72aNmB1QkimF8M5Vmic5JrRQuubsrE5CRq8TRetY4z4GRbcvvHKEpDz",
  "key32": "3opkSZWTNj4PrVmccLneHotb97j27nBeVC266NeCNbPPwP9GqvucmXvgYtojB193bTminb6Jx45PxBuNALKwSNxB",
  "key33": "5pW6vkQFvCXAHFLgkXgwNj3rThkyN9EqzGiEi5MuLx82Lwyt3wnW3akPgxsk3GeWgx577Rr55k383NL9JeTXPskD",
  "key34": "vPFyEoaJjQUeNLEaKWn7VHRaNSkr4iHgveXz5edxmuttd4GEGWJ4a44MRPq1hPwhKX4BwgusSUmipMrHb2Cyiqm",
  "key35": "61CxsdPgM4jgvxefU9B2gn6NGoZEqbwqYPnW4jVBdRaYFkR47PWXdbq6QbDE1NgAvy5ih6iGvZcoL2BoJkh5ieC9",
  "key36": "2uXc6ijzwLkQD5k7woj4a4wDgR7aBi2iJ1GQJ4ZBEpaBMHkGV5Umk5dDjySw8SmGMegWGMeJMDgyHborZzLYbJMU",
  "key37": "2xDkwC2WbZsjYn5EyPiSpbtRTyctyYPAKmNsfUxnyF5q63KWRi17wmKBRE7KuhDqjqf4HgQVAbqaWM19hnqD6ZLU",
  "key38": "3TNYKSCLyenHi8mQi4vD1tYk7kFnKJ23u4hpZATJC4nKAkEMs63PrmX7PXTHkXuVyQ8oP2KdA8tQhKYwV2SkfBcd",
  "key39": "5QJHnwcTtQytgAKU2Z9tBSTySFxKM6in7SzBpRu3wEcCMFB8KoQvjvAHBZtQ2jFfdNryPMAhaURQ6SXggTr3fCPW",
  "key40": "5gi4cW3endzUP92J21GURZtfK5iiAgJajLqWAKmVwQeBtangBxXecQcCyq14bU82CU5zSztaqvprkPZb3W1LeqeY",
  "key41": "2ctJdM8djYdW37936AEUWRRb7Vg6HqE1xhtGZcjxUaHVnrhJA4MTDL87BF48QzTVUXVuMiaEFKtz4dU3MMeycHLk"
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
