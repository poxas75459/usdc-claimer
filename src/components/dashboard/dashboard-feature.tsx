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
    "4dUbX8hyja1tq8kGqLXVnDHPK3LNDdbRqmwKGjYiMQK1dM9z4RoPHtXqwo4YVTBEXRqxf5LWAdLGZFXd2CHjs7r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwC47iDd3kDxweMUMwxPbizyRRadFcEFHnLnb5EJjAVLq9d1PLooQSUfaikW2AXvqpKpgT9UERLfjBFyg7Uy9eD",
  "key1": "4xSyiBSAwGMhauAi5egMXwYmyBciTkhTzXpmRLESnRqoXBboW4e8BVX29nToQUsNT6q5M1y6htWCmRCFZbkDxsRx",
  "key2": "4RjW7SiRZRsGHPDQdQ5d2q5jBgew1HuxRyJuf9NSDkM9neq18ZeiikyyGUbjtSnKd89sCmALsavwXE65NLwDkHAP",
  "key3": "3bGSuQLBaVRAKyYkLJQqGz6JdMCF4tYoNat5LaXX1Ro7KQKP8AnDsvzVBMPT4RgFSQeF6gg8kT68TVtr1yxAzfQ8",
  "key4": "3bGvHqLG6MqyHxdCMs1qKmN6bsUHfZYWRzfBeeYyx7d2mBapECKZoZKS5etrratn4JCQuqUY919jdDMxZjxiRDY7",
  "key5": "4tKmwuXCh34W3mcHG5C9mPTdEeKMYbexHWQQgJqvcjZcbHM2sLjuT6gV8MP4i24yGQZUewcabQwdSghn6BDtkna9",
  "key6": "5D6jsW1teijhCtMshJp2mzge4wH8Xw4W6jaDrqBYk7i7vsXYRkfjcF9k932bDBRWSHQChN4VtDhsjgPL8CZaiyGZ",
  "key7": "3JwR3JL2cbpS9yirp8cDp5GLPrYe9TPCu1TXpLkcapeUom18ffJDjH22UgBAbnvDyKEju9FvRoQ9wFhVVaLqKcDc",
  "key8": "3sV8tqFw8sY4efxJkNdxzC7MsX5WW33QCeckbmRbUp2TuUhZGzgNmC4ozUn1QQwBgKosNKm8i4yTA73JEQLyAcRd",
  "key9": "5oNBjgxNHz2r2JVPVxrfFMyZRFZhmBp2SWsx2saXLp3PNrQsGJwyABpeVb1smdTWmFp6Y2Wi5jCDo2AskrQ1jNjV",
  "key10": "3vkcvM3wL4xZ5NXmpwBfBoj7gqddvsNv6ZHoaHEKuBuPHf7ahG2X1Vy4PYPZkCy34g8tQHheJMZ3iXicsbLkFDFp",
  "key11": "4aHU1EqYiVxbf2uNuHFLZVnkEVLJYodKrdyk3eDiJdqeMppeQLWejFQpRfnoBKsDSYCMVRNtJ1hu5GUx8xUz7Bo3",
  "key12": "346NHfugsuFAkrbUZfxMA3sGfr5r9fHqtikjXR9NwcoeadRD8T8eg9xCX4KmJ2EM3aM5LVuRtMC21W5QVBS8gAev",
  "key13": "4Gu1gfRM6x7QWNTDZ7yeYpboUGp6jZ8kMmPK3uRcVDD4Zs6rGu5NRiWiuwricrRCZDGCecPMb7RH8NzDsThnJ394",
  "key14": "3CDM3UBgn9j97MixoEsrxujXoyPt3R3KzpJwrSmxzHzt6tE9Y5TN7YbYSvFpYWPdq1MrPcjX62rycGHnuhXsmrSy",
  "key15": "38jJBgBEXuhSEpPfxDetRfDWVMLyNRvjXRzJKf5CCqBegZW8BGVFWBcNSgx6P8qhmTDU9k6wuaFFFkJEx5sBaeVe",
  "key16": "2dWmf3LmG56TLKgLyd9rxiLAjjVJEVh9XfqxpVVu52TrixLvaFiX5z2XmSoqArwkr8nuMLzAnWbvVdnEch9uHQTF",
  "key17": "5t9vd9DbMEVK7aKEwsumGJZ9UcsgoBdh5kzeZSH2y6dKeCsTwioUMio8tSmYPKivR4PYXj8HmG6q3HE1JZVSQS1R",
  "key18": "2s1ConYYG42nic6ejEcd9GqxUBFWKoP5TdKUwGv2svX2h2qoSzXNPWTTH7UN1HKE475EDDbEG2NEio2qD63jPvUk",
  "key19": "2TDKw1Ko6jXhhvNoTCGNDkmoEmY8WY2CU8ks79ocTK2XaZLTu7BswZvxRhLEQghc7phZ4WP75yoyE5aeqexrjwUc",
  "key20": "3rPfjLapWPZFdZy8XLDahHowpSZVwj2B7Ytwfwgp5d1BRS5ZQiYtGHchwdrhGSgdQEMYDjvKoctFKJPsLfdTYT1q",
  "key21": "3dcdLfw7dfYCE7Rf8K2ddnk5rYBY3a1yYnNeYVeRyQA5SiwtUf5bx8SH96TA3tSjsms7mwz9QNSxdVBNDEkiFjsD",
  "key22": "4nCsHQYR7RVw2iENuHHv2A9W7NhqYsmGmg1bchfdFL2FYjWxv1mJX56nWqty7Kdu7wa88ywW5sLU6aPHnWXWUiAr",
  "key23": "2T8yCkEkMaEHpg7S8fHtgCnsmu99mKzd7pYYvtqH8pNyddsbyuDaw3CVa7NC3mBRGk4Rp4PmritXHpgUNFNPZKdb",
  "key24": "4GPhsk8toY2LbkUy1H3SpQYqxaxV8JDwW7FjhHarv5fju5jUzSr2REnKc4tMmSLD8as41SFPG2s3Do85x32tq2uf",
  "key25": "3tqGxLdJTjT1Y1tm2mMTnnUwkrmShXL29QpEo15Eimkob57zkux9GjQBChu3xsGwAJxHA8G6NGVoZXMaPqhyLFHM",
  "key26": "66u7QzCoUyRahiDE4E78UN5fvp5tpCNS7YGU1oibL7epCGc56wCimqttvrH2tx2jCN43fWWXzfLL89H4ECFa3Kim",
  "key27": "zNY3qjZnDDzGt6cxaMhYe6F5zc1tuV6gsFdXLUo1vRKeuUAYFpai6NtPj7dzpfpd9q7omyTovDC2v12KGEngJJm",
  "key28": "61m6LZSKiUf45JarYs8pYptAehHUn9ZrVXjwyg3Axu7q3XbkRFvtz5w1juFYwuegiwbNyqnTLhjAPpjNYTYyq5iv",
  "key29": "CsUJuaXvGvTShpKJKPmWxnCaF9C4BAs38831D4Mm6qoDdpeMyCGZNtzwm72NsfpdE3niTxL85pQbzHr3FRG4rak",
  "key30": "5PW11s46qNuwquCMyZbP48h8vvqc95dWfPxz3WtvBB8JYkbQvWdxvo2qEWXMjZeXg4CiWeskDHA3pLh2JVotyy7R",
  "key31": "TJZZDmBUBUyb6WqXnVKRP6zdbeK8UXLR97Zi7jFciY77sWwKYGCGJgzm66K5k6spTACCssay2LcFX5AFwvW2mjG",
  "key32": "438wbEEv5qWsvPMiwj3cefxYTZmtmZF5Aq9vGiYy3rRLguwTB4qQKxaHAWrmqyEZSq4XUnBPQHJ7jae6efiEdk6G",
  "key33": "3p5FwPhVwpdj4m4KEBuscaF6rUZXD4cY2ccpp4L75DiagBhG3LwHKSL3TbQAFQi8SVKYXLJonaReQFC3aYpwYPen",
  "key34": "okc9i1EP1zJXW7haVAi8Ms3h2jUT9sE95xNYRkTyUtoKW6fUktzQzteEksQkbd9w1ota3bR4us5eHcaEagRZgYa",
  "key35": "56zkQYG8C9HMbdMsGReb6UnD6foAmLihufE8Bnf8oUoRWD2J4XCr1FgbngWVwdWoRtd7uVm9Xth1U6h89zUA7hJV",
  "key36": "EiPLrw6k6ump7FEdSgM3veR14JS53QcSFsnYTDxwJwkdSwT1CNGo32nhhCaEvwUkaovdYz3vFjmQhsTKZxbYAMQ",
  "key37": "67A5bQvVmk1XzjgufqraFeoViCViJ2Z6uc66eaqpe6npqS2qXo8ArZi2HaEVQxKx6oiwSvTat7XYyNz9sxeCc4xH",
  "key38": "4WsDgYuwze6jzZXSZyLXuVVj3je4Jy6is9fcnExJuVWAD9mCC4ik5gTrrA18xAKYvFHR71EuVVER71MUzXQ2jejY"
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
