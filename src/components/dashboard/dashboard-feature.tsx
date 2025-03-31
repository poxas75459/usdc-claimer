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
    "4KSySn9HYE89G2tWwP3i1jvv32o4d7dRn59AJFhb8Gmt4GaNycPVa6hsxt8n755SQqfpCf5wmTdrJH8AnAX9MaxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcNRCooyaK8cWkDUYDxFpccsEnwjqsai1RufLP4xuKtox6yuGFHjf2cKZrPwxgCJQu3EyvYy1ZdBUTuNq5GQqMt",
  "key1": "2XAcV3QtiU3tYppM3ZM5vhfpFyvvnkXhmJ8pxZjWSf9NEVBtop7AZuWCLZURbaoWbHbXnZRvpAu5eeKjbV4gFdNA",
  "key2": "3r5H1gVRdYZfdkTaQQN6embHpwqg6tqkinsaULDn4Cx7g3wt3QCtWDwZKP68qpJU3SZYBMELV1LJR7eV9AmrvcZz",
  "key3": "53FgrkZmKyTSZsvQhFU4JARt2cLeT2u7Xp13B9pCEwqXUJ6WNEE4TmE27jcrbfX88WHMP2Mdzk9dBp1Apn3UVri2",
  "key4": "3GuWgiu5Ru9MFmAbTB4EYbURKWTGXZJrAKqxrmg6d5Y7VbpbM4QdiQEusiG4Hhe6FC9EQHG7RXqhVBgKXSMEqFST",
  "key5": "2ZYNDbq4Vx2qTLykkVFvTkoPBjgfefAnpgnnUmrz25g93RPr2ephSMLQKTcyHZ38kwPbvribvFiBinTWCGd6RWDm",
  "key6": "5TBdXF38dBXPALzPQyMBEsCR6AEEimZmrHuAnbHeLRNgVdRepsdkHmG1s26L8KyfKMnBaYTWpaPujB7yNqUJYWTb",
  "key7": "28gkr5bXDwihPXAjT88VBDU4VCWpREVDdncssKQotyPQwUTaqfGwSRtBJ9bjhRdSQ4agD7YYoqdGgRe2nkeNZLkC",
  "key8": "2mxySqRL8VbzNtLcNCVTkqVVAHH2vErD8XqDofJe5qYVTcLNEF3yCa7etQ5qRZhRztrz6BaavBdLwght5j6ZwW8h",
  "key9": "67N4LAFtUhAChC51uV9wAjxrYx9UHxcYRhQY54NjL2Ke6SbeZYxjA4GgRw5yvrkqmKXwcFyWhQt5VVF1Vuo7y3qV",
  "key10": "5Z2FZXutWGTSEbyZba4BwjewSCTYD32euFZNHrGvxEyqEktsWba45EJKRXeha6rD6Rtr1sf3D1NTuKqRBAUbv1B",
  "key11": "3jtw3TisrdvsnuZTDx2WUeUpoKY145HbPcp9MvLewzjV9MK9nt9kJGUL4ekNPo3BhPxYWuJW6F11pVDFVxrqjK51",
  "key12": "2Wszk4qqeTAwMKckyUr4NwJ5NqP5Tv96F5muJDV6Xuyhj7bvEfeyW8ukwACRQLPjebaMHnL9wyAU3hfcuvEzPoYw",
  "key13": "3E8b14e8bYMjYqUq9CAcMZEpjbG7VEHgTXSDcaFQYSrJWqKyNp9wEmRybABnM3gLTyheP5uAQ6baoGuhFxwiVbKo",
  "key14": "4yH4VJJ3ASJ5jjipL2gGTucUZJxF4B2WH14ZRoZWeVDp2aqcMtmhqkcyLUQg2371dujbNKCPVGmZXEXesLwtRmYM",
  "key15": "5MYxofPvqvdTTg7sdyPvW1v5ybbPqDvB6LqyE7gYR5ckHzNLK1PttTXd134GFQNUeocjfvF2Jth1vbkJYnS5qRM5",
  "key16": "3pFbmKHtf3rfamCJURakHdEoiGNGu73g1CndnwzQcky3c5brxLf8JcnoGAppeWwYEbgbWQpzncsdfcxYRhERBCcf",
  "key17": "67qCRhzcaWPaMXKV5crc6uP9bAqFFXVu57sGVpDm7VhFMqxihEbqdogbHenp1Y7vTwG7huTeBXofV2L9hfGRF8tc",
  "key18": "2ub8aWhwoUFaxoYkGFWVt4W1osa917RN1LQk4FV3LsjERp4cxUdYrmWQBatMqWjXk3uoK6RT1yJhPyXkSqsS7fQp",
  "key19": "5Fd4paZZU3cxMNofnYCYDcJmGNhecyz3N43fwZYzjvYmwmkMSuK9qbAFYuY1PfuxvJMMU4MsGZyznyFqYTuCLn1h",
  "key20": "3voxanW9uco5cJFCyqLxDhcyefcNCSdmTKg6JDtELkHFJGz9fGL9VFxhos99sxMrcvKZFwfBa2UjJ7Xwq7PnnrdL",
  "key21": "3fxNQAewftnH3SWFRaT4WGZudLNqtwdfF5Twxd4ahVQLYmpJ76b3UqyjC2TD7MbVdQZYC2eL4k8DYMkfNVT2AKsz",
  "key22": "5FM93mm5zMesfFdNC2U7sijB448zQmL9Zve1xBxM6qsRWLnaKUS4BoE7Adrj3pU5xdPZ2Jr9zU5eZ5NrR7Guj7a3",
  "key23": "5Tei8wSnWHgJdpYoywAFw2jKdQ2yihAEtqVACoCMCrqbudEUXNK1x1HoBuMwihCvr5c6opnNDRKenCVZgje58v5o",
  "key24": "3DegkAfb2Z2TnMonzymDsphBhJUz495mtfnaPaEAfrH7RyYxVhEUJ63xULpPUDcs4mPNXYN2BtxDxvh9WNgLzfWv",
  "key25": "4kvxmoNKQjTszSyGXTr18MNhuqx4wFDovkVZxcreeUd39rkse33Tv1sNcNkFPD8iBtfZoEeMJtRaHcoK71FZg2vh",
  "key26": "3HP8kud7FMtaRUDhRPHRkmk6Y2Y6nhzExvB21cvA8D8DdtsrNPbcNPpPie7kCeGf6WpEjpLTw7fVV3dJQJVqFcga",
  "key27": "4JtGyBqMoD3xyB2c9KyUZCyQZXqZ1c5qUwWztykb5nZY1wXDRQCDurQ4yTWr1toQKdoypDN9xwCN5bcn9epoSpFK",
  "key28": "2jmcck7wq6kyvSfN4WeqUzsNTEtQMJZthZxabcNSHRDbdmK8H6qRBfUpxi3N7FC8Spe4xoHnuU13bU4ZBfBbUYVi",
  "key29": "5jU6xjoVpYyB4dh8KTYLDoSthVJRLz7EJvRNHWoqqCRTHZ5nxW5N7u74PKVko72x4ecPynMRAP5tm4ANqQnxMN9j",
  "key30": "3yDoWwCj2XA9xS6W5Cw4qmjtuysSG4FXmVSKxQvjhLpBXRzsTNwdiSFSukX8acFgGfXNyPRUbcKuyrQZjtMx4Cf",
  "key31": "5xsunN2NBYuEEJ4JgXiwcncXJmt1MLCPvPU2Yx2kgtyDqAXbFz11eFRhUqHJ1FJQr9TGkCxsc29e3Vhjh8bJx1wS",
  "key32": "67MUh8R7pR9f2xcijhyqAQsWRopUZ6TupwEMcNG6Q5bxNFNctUgAms7NUgWdb7UzvBPynXaB9yPJ2vJBgN5whcsD",
  "key33": "2WLruTeePAr7WKmFfzrGPFxKKX34mguSs4yS21oVjfZyLB2jjjeNSbTvzrkApPf5G4jQoHxQafs5iHJdc5b7CvS",
  "key34": "4qnYoeAbz6fmcG9zvSMQEvQX3GZ7yCbLrvSZf7w6LTZrRNtuVoAE8DGArcPLycsHpP9E5wP5CzaCog3LxZmSuM87",
  "key35": "43dwAQWVtVNYk9TmmAKrimVKFfyyWgYHjKwBzDqvrra4dvt8qP5ZmXGi6nrs6bRAWBDrFE5WSFmP4wgSKHKRfwqe",
  "key36": "3ZHANFhaLu7hvtFjYPcigHKBphsz6mLQFcDK5KsNJoqy68tHj8rBbCf91CiVuzvS1ZperBYTC1Rwcqpz6h5MGyMK",
  "key37": "2Q9QaswJBkQkqJBYei2BpdB3Q7c1iajS3cwJZ1iuHyMMaqc5nwuNHG4ZnPXv1M3w8FcLPhKjvBMxVfUKZkEYcjcV",
  "key38": "KE1gtwPrCVFVyCnUPD3YvhWrTaGuaxvE6erqaYK5w9CQPCNzdpbzV66FsiPuc3HnDfVEL1SevMJ48sit31QW9GM",
  "key39": "3mNN5fg98KTkR3hcvzimsFMJAEVVpWQgHmdm95vsi75mwiSURjtDZW7GsmFtStDRMVxEr34kWU9XJrLw6AGMoLAf",
  "key40": "4MitLhKYCEgrbjFNkWLiKAL6FjENzBQijfEvhzzujDmX1vNGnxSrE8HRDJ2tVbq3mpoAQTGyowMhAkv3oP4wu2UC",
  "key41": "3k5nSKgvVEhia49X9VfszFBpQ3Mq34rLffmJrqtsVnjSTUr7wzaQgpSEJiRqut8D36TLkyytJ6W9RidGNjRCyGDt",
  "key42": "2GcpdxmBBQ5JNe9gamvRXzTYE6cfb2HFKV97u8AqKh5QSE7sWWrBsX87aNqZXKWX983bgEesLsRkGTpaeS3Su4oq",
  "key43": "4KvMdjcTnk4Gix51GkHdfiQz9XAKV5iAqSjugmfE2gtPSC7w5gZsXwGLYRakwDEHBskGmpdn3gzqTm2hccrdjcP4",
  "key44": "3K2dBeteiYRFVFoRiEKAkhyDA55NiEHYnjHJzhy6tup4xbk9u46wvHf1AskbBm4iY3qpzLLpFfeXkMVV6XeuhxGN",
  "key45": "2seo8srCyfqnGhtpFGWiDkLtXMeccz8EpxQ7eyFd8b7G7Ti4mMRZRve9wD3w73gUT9So7eXvC9ncpxR73ETQTQtX",
  "key46": "2KqFjjZqq2Kp1mLVNeG4ds4ZzrZozpZR37jDrTZn1wzgYTbz559wHhoooVCD8pVm2qaBNcM9bjJrifYKUn34gSay"
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
