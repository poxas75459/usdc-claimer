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
    "5vQN8sNBT5mcfB3SUj9s6LToTFiJPHhtZFNKFsFbcXVFnbfefJvrF3MMa5ZmPpkx6RChsPEZDxUKSxZyuzdge18W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61sA3UpvxFXWsRXRsMwCfsdk6o556pztaRGUdUPRbRm9SnQ3MbRvKxht4vvcYgYRoF9v5xM7HM1gfbq5N6uFHxkS",
  "key1": "32ijMMjP1kZXdk4aQr3XzuJbWkLRSigKPHLnPyauWq4BXNaRYAakcvgvUf9nrjkqtP7oDYHnnJ4ekKgwXXniSY54",
  "key2": "2v5toJztgU25qXRUpVu7idi7jopSf4ZGbsWMfK9z56bc1a2Fa47h7VUXqtu6FbdoaZyG5meZxA33dohhNgTp1imX",
  "key3": "5ohoSK9VMeyhbGvT9f7sYNAY6jSdzi51VsbhSLwZqu1TeHwHmM8cbHLDxdvtgzibi4pWsdpstP2KLqdAWnLex65u",
  "key4": "2gntwKR8diYNXM16vmDVNgWFZ5u155D2cXBiFGQEbc8R1dYLvpm8vd4v1n4NdXdaDhaiCZZX7cYtTyTaTFivyb85",
  "key5": "4p7Y3h8cr8QP8hC3MjDg5DnxWEeUNZze1bpw9mTbdBn3JEFq6B1jpcQUzBaWP1UXgUPPrjp9AaTvEjUqaSdYxcHT",
  "key6": "5xP5kyc5WNgMM5Pfcg5NN9cDU9SUvNGzitERANZtKo1BXq5AaHSXqffaT6yKY6aVxji3GVPWeP2apBGVFXGFzTad",
  "key7": "45We5MwcoPecdy72pRemWKy5eoQ2oBayGGmhUYs6t3m9PuvtPg2rAfJz6M7Yns5G4fzNq5oJqgrWzMfAgUZUeqmJ",
  "key8": "5S5D2aKTBwL4iQ1wSZpidedPjEwsUs2C1ZWoYTsxopHry6fjqM7vcvmt4KcnRX6UfdM5xM5FFksjirNmUWnkrqwu",
  "key9": "3fiaQZB8LKBCJSc1c23tZBuaXoGAnK7Rk3YQkTkrRXqCYMMK9MSNTYS7dcCMsqTCAAsQR4tTjrxts4WYopV3jt44",
  "key10": "4vN6jFJV63Dd2cam9je9NsdENzFLZYJFt3jnchxGvaGAXxeBBAztKj9Geem8jBD4VYvKFnNxNm4AmHx43r1Uno5C",
  "key11": "49UBLwC1neKWZU4riHe7c34FrP6EPFCTH6bdYZMkeJjRZUegiRHVqexySYExnfd7KPPnawJJZJRKELSAUKqckW3E",
  "key12": "3a6nJ99jq5N1tGfZQXfnqnPUxbqLz2MAGhwp3w6V33yeKnoEoeE4VM9PgZtUry3o212B6ezketScccYbvGgSFTBw",
  "key13": "3hrzJxLnR9k3L3Hs1cDsDQFWw49Fbma6ciRazfFvif7pcZR6wuEtcoAKE9k8moq5UD5pFJyZtSSzMr4FK2ZRttWF",
  "key14": "4gTopqdYXU5dDoGU81QR5WjQtKasuVRhRtC1swjcazXMgfSs8MwutGqt2QMsgspLrSGiYJapeE7rdcPvUFoGZfTF",
  "key15": "4FoLsiZ8mzNZxq37ma2mdr3z168n6Ne1hDyYTX2HK6ohweyuLwZ26y9ccygH6hQMhjtq9DXuYcUzq5EZZdSwYZM4",
  "key16": "k6AXuvZnzXYX8GTFGyoF2xT3b5UUhyYycFvoDt6WYxYMscoGBMuy1bNPa7h5rc9F2F4B6QxXsLm36H2RNVupAxL",
  "key17": "4RcKxKBAPa2ECg4nyx2393519VpxtAbrouVxE1HvTn9ixMDJvn5Ccc2H14dTLpZJ7GqqwjKD12LpTPjEq2UBctMX",
  "key18": "32r9ciTw1tnpgBWKWKHzC1XQuUHfL369oiNPfvA1HTRThEtHfX4bjnySCyBSRuwQFNerRcn9MKsFgtaatk9qccoy",
  "key19": "RFgFE99iQnuakyDtymRS3sz6sxRpm3y5TdPpVTfezueu716ActdnRXDZidHBszGJyUnaNDanyjZaE2m4FKRDSBB",
  "key20": "468JjzdCZVe6GYeLDY9ZBBKeCW1KDfqgyKHwoJR26ArWgLK2sWr65sJCZGXvFA1Tr18NbMeG6AGNrNM2gPhANzod",
  "key21": "34DRECchuVSkkTH3NFymju4dhcEtKU2nVj1esB7EQege5r5wPpYKSihw33z5AhTLg7HHTtjTKSU2vbJ6xcoi5wZp",
  "key22": "5qXnwgoYoqNZizUAWj6UipGhe8JaCCAmzpjjzWbcr4uVwT8RNU8HUiVUfD2qYYtzsVstYQvqo6w9jCJrh1F1t81W",
  "key23": "25rvavBtepd3p4kWfRaxwMYezfCpQKYnCqzwy6kdBTW7jRWm6twzitU1rjAyqq1LGFk8YBjokBLuMSCs35Si9uqL",
  "key24": "4b1h3HZN4WfqMqz9a2mZQZDcDfQH9UKfaVoxtwexaDUFH5nRPjzQ7y9JJjEzn79BW9pzQtGHHffEvkdNcgrFWqcB",
  "key25": "PwRG3SyxLXGF2K5MfPZuAxgRrfCPyirSPtdptdJR5iFCpv3AW4EpkESjUcQuRu9xrr2ehZu9bv3YobXes2wzgFQ",
  "key26": "r4FXZdMcmu49jCEzh7PJdgL2qBgAe4MRuLkmKt1LLZ7wxvFPi5aU1TsWGtr65UV85ECue5Jz4wgUAmUSFjKp1ij",
  "key27": "6AuE5s3jRrAwH5Tj6UVLKwg5PywwN1YBEJcCQSXJkX6ybB8wYFK1Uyu7Ge1DvLTBXb2MGeH48uuiD3soJAwydWT",
  "key28": "3XxVf8ZztpvupdPHrprZQNwD6SVQ6MkFNyQ9Ads98x9c9qdyMvCy3pnMs2YoU5DSVz7WFSJBBcNw5mPAUo51Pr8V",
  "key29": "2SjMek8fMRS3phkqMJSrfze6gzUmom4CCyYiHvXzFyUvDeSs5WkjLFQ7GTEpevtTaZp8p2DbXJekFrRK94USpgoC",
  "key30": "4ZdvwXuEvXsymHg9HJgJ7xCiQN4vDWfnRezNzPhQT7kCoLKk8Fu6GX6Xbobgwo8Z8f9WjBvXCMCfe42mwgGHfKeN",
  "key31": "5ABUQt7eB3VhRruboTwB4pqn1iFGDMGs8VShAz8KJ2DGiidBBcJJkbKEL77chRCByMMd7t8No3v5jJ8dTLJMmZWx",
  "key32": "4YfN94JsRMzjrxaAAtQTUijrodNb4L7Y4DcfZ6WbsdxzSQDMq4cBXphLL6pmXwPH4xKhXfLF8iH1GQdkqhjhU46",
  "key33": "2JGSbi3ZWTWqN2moG5Q8kJ9BmpLbPSSDWEGL4B5M62PFiR1CmmbSsWEnT18iTNp9oiGyR4JXb42skCoSurb77qmk",
  "key34": "2WKD12pKj2h83bAQSPpB74ufzDQkLpAqfGagN7hno15n5dVa3v6pgpb34Q7Sf6kSdh1Bow8HG19PYKKChcvCJc9d",
  "key35": "429GyZhz8DCCeaGSAmPt2SXRGUmpoqVY8VkxixUTAyMQiCmL9wkkrgRrBp8XdX7YR4kY2pknnW7cEANkfGg7UxmH",
  "key36": "3a7SsdYLsvW9eL7mS6bzxykYGJm9GDeSvnyPMgHHXsNnKbS3mTLcz6gweLKuykiUqq2c1TG8A1uDJCXzbSwoUuSq",
  "key37": "4CyBgKV1fCEuYt3t8QsdRtEA7CQ7TGg5JPFnjc6ywfdb2eCtNi8PfU3yp4VndgUJitLkqZNFzMc3fzXpjVyL2RDf",
  "key38": "5apCmwS8E6PPjByjbsLV9xSCgXyJMe9WLwC2xv48bPdfAW4NxTceZ7EUKvoSvvrp2okKDKdjyC1V2Mey6BM9KfTp",
  "key39": "2g31iTFEepq3jQMjJLYhLxcxd88H2geKCa2345CV7tbMhJhb2yxuJVg2WcWTPCvq51goDZ43xk9mqr7bqn9DAQLj",
  "key40": "u6tSuh6UWbs3MN53MavEsPEzcn4aF77LQudMKde6udv7S4oZMgnXKvDeWWieZbTyuJjZ9DhjXhRAdfDL1nU1ec4",
  "key41": "5WvmWouw8GqAVoFMukEDh3yHSGYBwvKx6atnJP6Uvw7WEhHrsR5kvuTViZiNCAFVSWc8nqm7oKhCEBwSui8T4DnT",
  "key42": "2oiBLnL4BSqv1XWYR3o6tuwnGhJXkxT4DmJEqCe5u1wRwYQKiL1FpWY8zS7wXBeHoUzNiu4VJZ3yE7vbaq133NsB",
  "key43": "5CAXcx4sASGduhQmWFW2gBJL4YEaqowPPLu3sviMx3v6KVtJsNkyWFangRygZdVyWoL6yAiHv3L2psjdWQCxEbgT"
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
