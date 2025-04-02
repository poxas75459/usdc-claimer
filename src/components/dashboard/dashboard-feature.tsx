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
    "5hLEy4AJB4ejZiSUgpXYVBpf3KRoT85hLgPfSsk93fHk5EWYgxGbFuYo8xieCn4JyUgyihNnGurUMCoVZgrAfQuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkpDv2WUem3XfCX2z6quf6g2jkGWipNy7dfbdVCNCeCHUxTqaZxSLu1aTexrrLPebzT8PNet9Fmm2J8DZEsREh8",
  "key1": "tzgcGzAE2imREqcdgSWGiZEwRUBG57RDUAmSLo2Rs4Py473wLmL7Z12YBdLBRBqRuR62444CgCtiwRvevwGJYGw",
  "key2": "2Gk9D1PyaQDBYVfUhGtyv3LyKAdC3zzPQYBvQS8ZbJb9eJWRtN9YhJqsAzRi472FVV8D93ecPrtPCqho8iKKaPXs",
  "key3": "2swyeCHpr4FBZTN72kMzCBDQLq3w7hjseg4dmJkBnTyfTgbBsw7ymyMpWNSwQk5XLvreETB2dBgRqoqZNZTKB93r",
  "key4": "2aesh2w6GkzAc6d56rEUwjmrKCSGVDGxh6193PaJkguUfcar4Um8YaRoUJ6xQJKPJgfgnGNruD2fRG8VUa2ktNqQ",
  "key5": "4acKk6nMQMmvAdhe7JeSxN8bLVf6orp4U6odJJsMxa3WJHcq8HmV4YZeyVvNx1a7hggmPHQ3nkwsyHrBh5bbB3jF",
  "key6": "3EJaUgxCko8G6VmJQo3mfkH2h9xhbCAt1pd2fPgZRsbNzJJKCo6XTtuy7kcXY2BphmHUtoKyFSBxBW528JnNpz7x",
  "key7": "3ZCuxKVupY9yvapizdqKKo16hygXdgPPiBupg5BL76yjACBWq475jhMbMQQGtVKmGT6u51qbyUNMZb4uSbWdxxLS",
  "key8": "4bdEjn8eSSGmyZkPevagW2urs7vcKZhsh2zvy4HAShYEGK9usWxCiWDVCBq3JvyPpz6Q6gMKEiPi4U72exkTKncd",
  "key9": "4oPDShSpLXRSD7BQ6oztRdEccRPVHT7ChdQT9zo9Pt888XFY1XAQanCSDnAwBupggRBXYnwj5QP4nmnXVsRu43Ty",
  "key10": "5dmZnxLVW9CXVK7hzQYf94vuxkCDBbzHwrNr7YThE8DJ8oJCc5BfhuTYjoqCthsowKegHFYAgx853Jbz98kNjprX",
  "key11": "2xefjuZzXSrwuHb5SSUVDhiwUPVgxWUy7jtJzHkGC1Q5XeWUK8XRHrrGDBwA6nrkQPMBHS8WT31hoRJAffXa2zGx",
  "key12": "nrC4sTJ4NdYT5sUGLatp6oJYMLVVnxkPHbWS1bXDiKry2CMqsCdcTfMCParhgvYHGXN5SoGwRQFztMFYoEcWZAf",
  "key13": "2N7eot4cYCmHrtshc2ABFaPnvjGFDkkNH6KJheV2yomwf5DLedzy7SaMCTvJdJA1yuLWAh8MBh18Fd7e1jLrcbNz",
  "key14": "5ttm7UhorfKE334K1cnts6oLWashZzki6SiTugBtfs8qAF2zvzETJPKugCtNg67h6vLLhiwg6eU8WxnekNP9Wyik",
  "key15": "63XSmZeEHD688uMRwKyD5XsfyDzZv4z1295D8npwpU3aMQHcQKky1aSXZ421ZRN6b5hFqHDuuyivxeb4VWdeiJ88",
  "key16": "2eW1xw8Nq95FSgimbU9nc4mSCujPQbMrVzak45CnNbzYhkdJtvHzoHa5Zpw7ddDMhW7mNUG5w3wk4dTQ2qHKcm1H",
  "key17": "5X1bSdxT8RRUXRrxdSzrtjuYDxMVuFvohEz5FxspyQRZCnhMw2wTRaaD5AvCo2oj4C6MibXFpdSXpzJZDBnxuAgP",
  "key18": "3SHptZjUQCBNe7z7NvUAUZE87znmZ49eMnCv4kecfRMy7sSC1beczwm8zzzJgAKzJPNxPgLw2uRCWeWLPGLjYZ2A",
  "key19": "WpPqueQFzULgR91C36e8HeYsdy7gayWXA774ederCt7sgqkBkqURnFWGGnhNJpZBKAFbMNfgDdL5HXN51VBuhE6",
  "key20": "32i7y8kKC8MPJ7zBeR8E9EN6EtNCcPcawbseKeEMTwzmwbhWfoLGeaYAfhAhUsKSfBXGsxs3pGU5zJJjDHsBC6ai",
  "key21": "4XTQQfgqvF22icKYjA1bpFSatdMjSsJGLyGNMYEbgVxqwzzYXDPviTgdq232Y21RnF5NXHUtovGycbgWAfjrfocH",
  "key22": "2KU6McTqHB7XBixzfsT6nTiz4ephxTyrpwssoR75kgVGSAKaW1py1VAVNBFkMY28mAyT5DBeJVUSHxS26j5cXxGM",
  "key23": "5RY8WfYnMzLYiJHU2jt4rC2qxmhyot5YCaqTuEb9agpP61euxgEd2pF6nLZiKk2vycx6Ur7HukZ9Zs5V6cYaEXwS",
  "key24": "NUxS4WzRuyC8T13oVkw4LQCWGk3KLFPa4Zqcaqrcx7vCFogPdarDuTtWjTm5DGet8477xZrQCEuqt2kjTKPWmN6",
  "key25": "2WGyKEn9BsSXvWmEBbLF3HtUXKXESj1nVXZ9pBbWvG8AQgqG6VMRfXxWoN29bDuaKUJvZGLQRdWpMksDABubnPwE",
  "key26": "2SQ5XX2wnsxi243STbnTXxATcJVQjAtf3geeC6K7xZ3fJwTEU5ksAfkNxHubCUTnMwnvXHgr7kdifFQCN3YfPjXP",
  "key27": "3EfbZMiqTbjjCMmSv7gKFsCHbHH1AST3giFeEZ6Tr4yJry1CJa2LpmeWViA7xDcHg3DMbMyXTz9pdPLdz55Hwiz6",
  "key28": "2Pee3yDcz5ATKNyfQa8Pzc5MNsJCEWnBUY7cSikBhcgtiNXFrFd6aiyFm1Wi8y7F2tPZJpK6yZjwFEneLk9AJ234",
  "key29": "5xTQ8yCbangBZNwZURxoeRnWvQuwZ7xxRyBU89uaRi2TD9iZDnSAQ3xQfdiT4z3uQZVbHC6NYq7gJx4RwVna5HFn",
  "key30": "5TnCXJgpoAURk4w6ufY4FFH15uBK2sESRRjijwEgBYMu3ZFL8dwJZDa6pmNNnTtihWyhrpqBTJc4X5v392RsyRe4",
  "key31": "3MUc7J4sF1eYcwcwSN74qHaMf5vyJDWFGj1M4s1omGM6FMMra8Kr6vkiKi4AVUFPzEZMgphXgEwKjYgyrW5EPmYP",
  "key32": "4vikfcUhtEGLgssB72EPKaQSrSBh5PDkbhKyo9Rwu3gFPxQoDxdZZridBdW3VvEY847traV3SvUxgDTo25KfB8hP",
  "key33": "3kKwA538REcLwXtLfL8GiGJvS9qRjXhtzHvAiE4e3TS6S4gdtCYTG1V5KyQu5QtXexVg2h3Vz6Vw65NhmTGDQ6vd",
  "key34": "57LLgKiX2EdmAJLQFr5XStrn1Hxfi4PzN8SqwHonCt8baBbu88CbZjXPb3zoahSegy8dmLu9uFkoLJgQEYTu6mhu",
  "key35": "3uRyQNN2BKKbtZj7EcuF442rgkuceRCU9q3wkJsxUorWYX4pmmqUXAGGS7pZDUaWSSYnwV7oWy1jx9MZmgwZLiUV",
  "key36": "26PJ8238giysxAijtW9CF1TrAVGjpxZpqNTfSDNcuruuQkmkk6oPKTStY1SHK561L9TS7soQhSJCycR1jnETtWm5",
  "key37": "27expQKZVqvPP7HkBBb1S2rZbekTgxNU2Dq5yJitxni6ZFDaZNXdVNhgjCuYhM2bS6km4bA61yLEYBRRkm4j4Jjk",
  "key38": "2W5Upi8zT3KsWJpdZRVeGmcYAHXu5RgGzd7iH2Dibnqp1fgK4bNxmSodFB1Yhjyg4Jsfrw2EXgiY9NC4b6qa8hBV",
  "key39": "47vZ4aASTPEaVxnCMMq6rr7v5exoT5ydycxJ8MreuKQns1EYeDq2pFyL6S8i4PRRDDt42dQaLGCNkr2WesTsbZv1",
  "key40": "5rPmjA4uWQXp3pQsJCDztNr82VrxkLWgC5sRFPg8AZsmvepTqJkEYEAM9HmEJo93GEK4VqKW4uMAAhVZcYoKoPFN",
  "key41": "3D2YEC9YQwFNnHapx5uuDKSVo3iwHm6RoeQK3kEJUdbZrfU5oqbiBigbpRquVQgLRNRFu14q6HnPuftpNt4nv4F4"
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
