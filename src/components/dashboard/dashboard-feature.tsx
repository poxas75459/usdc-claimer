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
    "8i5GDdUk5sgAdCC6je4rkZJjGnfLv5egYiSmc6mW5tepNjaGSer6dMfCB22Guu66pH752WhfxmHj4LQwL6XebC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFzWtgzNig7MpJSYeje1Ss31huuB7BoscJWynmmNkXBG9sNZW91RJiseWoirP96v2ezJYK4YrexvBVXhz1BtSN7",
  "key1": "2iWbCVWipx6kPpUfqEPCFDRDdbhy53asxPTheeBZYzo2gv8puwCcSRWf5Pf5AHTExJtBFAd2iL4bmsMjZ4YvcPvV",
  "key2": "wXdwQnzAVo3T7KzUrBxcxAnXTyUz3ULdzTbu5Yc6xHsweGbPzv2jSi5zQrwEJ6ArW8K4j4FFoc5VhkazjBvjrrD",
  "key3": "4QRDo2K1vNa3tjPqWciNn4xaQHYPjUAdZvWeZ82RaDhC4LrwWsWGdzrr9SGxdXXeSHnTKo87dhrRcjcFpBU77Gkp",
  "key4": "5uV1Eve777aBdufEsJqQc7CaSX7HrY9ifJ1sp8vsax4YDWt8FbyR3WJ232nrqHCuLMnK2zN5GuqND4byuAmHerm",
  "key5": "4AwNsKmc5vu3Wc33jSP5ASFHJiXTxBeXCWvkReiWnfqrFewFDTdnvZXpkj8WqiodHkeqyKSg9ZPFo7pjsoWPcPLE",
  "key6": "5sAHoYsUGGEAmkMqwGxkzaLuJcHAV33T2mf6WKop7s5aLkbrzEGVoaqTRsezu25ZZ1YjnDXbGfR4h34YoXnowwz6",
  "key7": "G59AxrQZhUwt8rUYqbTzzT9NqJd7vuarCV4imi5pHbLA9kpsqEUMPoxwnLGrSycQiPcW4aJcj45ivWBjJurK3bd",
  "key8": "4eijaBTGNC9BnR1wUYDBPWQc8XxHzJuAJrZc7NnoR3g7s4c7W8KwLWywrPXqVGXLDjYnspAZCTSy4sYtJXmVaXXU",
  "key9": "3z5pWbMx1h5frUGHmSdanXx2szPD3AyAaJ37h8pQSQcxUNiY7qmLoyCa7LnG8QGgjj4GG1fwdEYpuRB5AD7oET7",
  "key10": "5BzVLPw7HYpxjFLuUaSPc7dL4U4Hi4yT4QFKt5fyNfkaMfrkcazikoVtKs8NMaDx39txzse7UiH8WS4iyeijtuA3",
  "key11": "pwRrrXbFqh83XUvuEcJQCDpLJ6VsX7oTfPnM2ZEcfn3xgDbfcSijE1m3dbpu4W99szk7YSDQLeMw3bFRTpyqGHk",
  "key12": "49542dqqRMDfZ4XpcGR9TeCkPWYHYbaztAgnzaY1Fzz3ta9sMwh4KYqffQNY618L3h4aHugZM32o4zDxghaSoCjk",
  "key13": "5QNNMEAEPniF3zgAidSkigojD5RTB1e1VLLqYesoVrdGfAeyo54DoyTHjWqigHrwCWWqg8hpG1mJPkve3ZtHk6gq",
  "key14": "3bycZRMSbpiKF3tpJuDi8ELd8FvByDw2JmERd3NSkeh7MDoiC43huGb3SCgLJZVZCBWrFjohwmafasSerrWkeBG6",
  "key15": "2JirWKD3RtHULwUAwkpBKBZnZDspcFpEAA9MhJUNBkKHfM5xTuZjW3manZcrW2ozyPGZNA2YKMHNwCysAvfUWSzJ",
  "key16": "3L8aPHDR7GpYJQR2RqhhUA2NTCkc65gDoq9VdRnUQf8oufjtKMvJjcGTCq4f6gwwYcseUr2TzXjnEhh12ThQstL9",
  "key17": "uXqypRVWoqkdLp5gL8mSMuXKsKCUkjfVcPkmjfGkwgejYyZjmJ9QHUVtLd5KhnoKME1KcXY4RQTYiHiszDVL4EF",
  "key18": "57acr2UmEbV792f4iLimdbyT6N4bLm1BugdFSMdYhWxczLyh4Z19zeDfbouiPmxzNE2rhT3YjQ9kd4RQburc5KUD",
  "key19": "3AiJWpQmx7VVd9Ar1inzcoupB5ttDJ8EXBPJAHXjvYwStqqGd5LSbu9Qw7BKoGLiMG3jx9Cdd3CcogDRD9wDXwba",
  "key20": "2YqxyH6iYdbN2cQgBYp7HE3KzQ1kyES3nUwT2iuM2gbjJjT4qGZ5fuD4Fr1m2zGtdUUJa4m1aUzkrWnpu94tzNiz",
  "key21": "54rfmbjVjtYXy4kDz9KqB9fXKeNDnBqhtDZDkXAD8ezt9mpF1LAzoNLeaSMFK1KVMqbxZkrDo64ZyGcM7wWh9QAt",
  "key22": "4LSCy1gapCs75WGEuGxgPEWy7KPCoNJwyrFTzJUBEXJ4QnDnQ5UGrgKUkJkL8NipLNA8UjSw4gnEGsgzRc6xaR2X",
  "key23": "3dTQGzTxFs5PNPJNDQAJDk3QKAD1PiZ2U2CBxyBQ3bwpaEtc8AY45HPX2f76TzBnVzDBrGUZtkzfc9muyYayHm8f",
  "key24": "25S8rbfNPz5xeugoJGKvFZDt9ZtzGCqvZpdnW4o3gXoysryYVYDcSUtdSAXc9DrPicZvofTCsnLS9tfW88W1KNMp",
  "key25": "3A7i4hbRSa1XkNi9AJ8qSNyo6HhGbJD1obWJpMVb3vpYo6qo8irEFd7rWuRfXgTSeux1z4Qp8ZTmpRWaQ5sA6ct",
  "key26": "2yYHt5xRRHRa65kFNRU9yN23unyEdQucjpqiH1yTnjpY7q3MPcXThwtAFwkJusHvorkJt1EKPrdsgwXQVd3kuET2",
  "key27": "4bW2Eg3WVZbgYbThYcvMPrRjquEVyDFge8aVaJSgu5z2bFHdUp8Dyyezr1yoPCRhLAFxpLFEe984K2enwwxcYZ4G",
  "key28": "3ZW8YMhzXPxyqY5WzEeiSJTfomftW8GqNHEB2Y6wFb8MAEeMRudnFhnKCT9oz2ptJz1NBw7p3LpMQXFjSWgVqZBL",
  "key29": "U6WXxdhCKW93CYU6xkDf2v83zG3FyrAEAidt2bhetEewEF5fsBpbUv8XvPWh3TXxg5V8VG2Gtez6GNRYZmUvN1f",
  "key30": "3PWQjey8yFZWjpj7qFswscaTNrt2iuQZerVBvb4cUjZDmkqaEmQoGUd2ucqLU1qRtpmEuknFxRWQ9AGZQziCan8F",
  "key31": "53ZEtCDcKnZnR56oNLGurgvxF2xsnSF6rs9MAAYsT33biESwXfaVPuNESM9cn2zQLdtgUMsCQ4SNLusLWsakxTJe",
  "key32": "3Ae57QSMcqBFu9eBLgYKNQ1NQkvMa4DsUgZhWgkSVo5SaFsfTu7eSAHCx7T8N3C3ttEuzhFY5kxFwYqFvjkQ4F7d",
  "key33": "3Z78gTCwothfmHB7KdX36e24ti73ZQuJErVX92JqBk81AHnrqgyjEZ2cdi1PKZq1WDpNFjMiKMrSeMFs3h1JSjYs",
  "key34": "31ZfwwqSDWE6b5qjnbsPQiBoPCMBiu1TmYzJCQvXvavsCpsfEHnuiRJjAkR7R93jM8LuJVnBJdYSzTAAp5HTir1",
  "key35": "4Psd4LXq3aG9T26971WseNmwhVeXCn73EzuToc8ZLwe6DjtoiS8tXM3YXzoSXEa75MwQS1P1HpaErSYso2r3BuWq",
  "key36": "47QkuorHfa9tjTwyetFywzMVaBGuegPiFNkCknDQuWDgND2C9xkvDQSXKbuxqnrQv1ZyaKamp4HAVg2yTgAHP7TL",
  "key37": "4QAVYvkA2A26fRELoDKEoPLvfCCAhRAUSHccDTmJnpiSDHfDzPCw8XWeoCHFEN2rHTPDRRTh3h7KjWtDHrz8cVP8",
  "key38": "4CVqybVUHyYfqNqXSYFEApUgxHsrbzB86vXkGEp3mKFtgMM7BVxNXRQRoMfs5CMKUDGEiVo69uz1wiqa4hU337ZA",
  "key39": "57C2uzkFUoT7sUjJhipzBEiWSgjRrsPrRa81C633QzMBySdiRe4p5w9sDt39zwH7UbhSsk44grtVFyDb37WdkXRi",
  "key40": "3yFLQSvm2xdqvfYkwVtJJDHzikWDta3hyLXBxG4r2Rg3PFXamZ9D3mN8xKD4rLvFMzSkdR9Y3yF2QwW2Tpw1QknW",
  "key41": "rSduJ2WKGFp4SLn39P3Dq5Poa3KW6FCcw2rCF28BnDe6Nb4qQk4yWTSX4d7aAbZ6jZnYfB7YZCiz772QWHBCx9i",
  "key42": "5oXWQdGSPSo3bKSrzEJJysE6y6wSwL1DzmCxvtaHyTB3M5on9mjghWueGzdxok3EmexmPTnMuvMT69EGDSG9BQUJ",
  "key43": "2X5Tu4E2tav494BzEg4Lmbus7nCLxR69cRFkarw1WgBrf7gfp2QcZhdG1EKQ5UqKw1q95ZzFqLkodJbGutje6ii5",
  "key44": "5opry56Nxhm7Yrp7KJBDG6dJizGNUrVD27t6LQX5jB4WJUZjezVQVCRWsWWVD3k8ELAy8pCJZF6eBR5YJyjGqw5T",
  "key45": "53uiUz9Ru55WdQ9V9M2pWeVuWhtx92PAWXphg3vH2frGpjgMCbCmLqMn9Dwcs4uwegCc9XU5hyJThp2VRRFJqh3G",
  "key46": "E6NLeu8ULLCxPQeVrQdhpcMjuMoEJtBMuNC9WtfN6q2eDxPULdLDGpGhQpET6PG2fKfFfGwyrukQH1uzE2xKf6s",
  "key47": "3LRS4yyQ3SH9EVNyzr77VCFyXirzKVRbzRtnce4c46xDBxw4386SGk6U39QoRMvasHkN4wDvnhHG3rCVjCzfHPYr"
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
