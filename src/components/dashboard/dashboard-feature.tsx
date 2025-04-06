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
    "4db4SqRgaLhBaDPw6qpYerfd3W4Yhcbxcd5reTU7Q5FcKj2oKQqUdctLhLaXHWqhhidR6TJnWnqkCpjZbsT5FMd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACkEayg17FxcqVtjkyNpux2mnoxFUHkWRz6uEaBQKgJCeX54PdBbfrpp9oGYn8jpaPEDNcTEToszGwTdxrYx1v3",
  "key1": "2Sw6kKScoavnSP4ifr4S8zJtN2tNzWYqJpucBJfk6RHuyugv3NwkWy6Eq2vMFJxWjkngpkNAofD9MpjkJHamGqSa",
  "key2": "3znhwLRCsoCGYGcAbWCwBMk93JE65TqaSUtNDa2Eq9vsrXYECUZE4S6uWBRSM2bzWyyfoeZxc6NT5jG5w1EDWioG",
  "key3": "wyvdbA8B3yngRiFG81zLePqcjBuwxXh8oZUaHNP7YEWuWK1vUTqvwEVAfNkbuRrTdxpfexEqHo55eRdF3JTe9gP",
  "key4": "RUMvvFjAox2TqZ5TYDqykUB4JRpn1tyTcgtTUbwUWziYYUiE2zufLdaLU9dxDp79goH1mgKLNTr1Zf4nK7Hgb9P",
  "key5": "34EFQmiBgK68e55ZoJ1XRMt3VqK1YMmvPA6KAtc4NX1xghKDZpEd2SbZVKydrXApJTy5BgJtzaePUSoQBANJBWhh",
  "key6": "28KJciEeUnZ1yeHt28Xubpk4UCTvNNJLbnade46P3TJW3xmC5qFYAn87soKdUbXz885ghkuPA1PzDVGHW1fcAK3c",
  "key7": "4ZdgKK5Rv37cF2mR5vHJ5G3fuKo2MUoxvDn4znJCzGwkdjDRSrLZsEpwV9MLJwgQCFbYUYrnZ4j8rQq7Zp2UMMQE",
  "key8": "oFfEWFAUNWC61JFvBVAfFRLPXQ6nWCceDsEz4bE7AAACC79PD6SD8K2818xyriRV4iRgwwijwsYhaeaTXm9Vfdk",
  "key9": "52Xbpkc63PgB3YpyaC7mDujXyqiPBDnEKmG9gjdXtkFQ1g56Fz86DeBTj2MtG4b8buENofsHs9UiZVXn7SUDkiMi",
  "key10": "5TTYRNfhs2APH41MQih27y1rxPzCE2JycbezcaZzQubddrGG6jmzpofJwMtKL8XkcR65WmaoQ98vU3EnUAY78M4o",
  "key11": "2aVJJ4NwvFURSB4vnitwXpZup6TiC9t3Ku6HnKxiXfbs43Nhd7o3HxhPyeyEvYK4DAiYHvuNrj1prAm3i3ZHpRWG",
  "key12": "NiuoEsa1EsKSwcBsi9xt5nZz8KqQuXpvMeAkV3jZH1VeSP6h8H7gVXrbX9VxgrUXddjd27ZRSA516Equby3BRjB",
  "key13": "3UNgNAob6vZRpvW98N2VhcbrJySvFL4B5wv9CqDMXFK9C8vpVCSATLiuR1CzR51caYxTQLEfe4QzsitvX6WqSTaG",
  "key14": "2FrDxqULnp9HY5dqpmbLUk6BM8gKW8ux4yfX6b24JXkVccHNejz5AhoEp8bMJ21wTVu6xSguaPvsyuvZQ8bEf8qT",
  "key15": "4yWccKWVRpS4icWLXzFH3xBB34bScNC1vQVfhqDtrkBU7UexdGEughfoZ23PYv8S7f9B8q29UsPEy7s7TaDWhEzR",
  "key16": "4mpaQwKy3SNgssGE17aCxpWrU1K6ZB5g7jZ4rfvsr3drLWYK5WPKMtm2X1XNiiPUr1yzmzEkdDnwPazcKPtWeq8W",
  "key17": "4Me4J9dhE8kh6tV7wrvRVMxM8w618qGBUnFUR97kikWAMvs5uLfG7wRiSHMGzdwtLEZ961PSKysz9qtLmMPD3LZL",
  "key18": "3ofN8zSoA6qYJXhhi8cSV2AjvMKFfJk1D4VtRNgpZKcnaRciND4F4dAvLckV2EdFg3ChVa2tn8eZThvHWgkuPwSs",
  "key19": "3dNGuVh9vLVZ63gzjyFscD1e8Pn7NtGmbZGFQqZDHrkbhJoMuL1aRhDLjZf79kMx7WgRF8parCLh6dGrtqttFEbc",
  "key20": "26ynx7q63C91kRkF6yiH6ofm9fz3GqzP5S8ZqKf64cpnhXscDuCbFW9TfbYEJUTVjMoCPWz6zvT98eL4XboyqMQg",
  "key21": "5PnNwQrhpiWFWHoQsVk7rSEbViTYzANw15mxJGHNAiQNxV7zPLL46HNGPbnciVPGmovjHADCrYoSDRvcrGVFNrMb",
  "key22": "62U71RRQZnXZUwrzd4y24N3DgHrsejUErnjJ5bjKBnrnQFN4CNvNhUiKtZbs1VEPVYfDt6ynATHkoUJxJ8QAPLKb",
  "key23": "57SxJCuWXiVCTARy5Sbctpt9Vw47oGE1fHMba4gg3S61ZHg6USQxgMJHPzuVLiMq1DKBM68mtM4KBWDXbsTo52GH",
  "key24": "4gDvvQFHXRnpHiMoBAguoDDVuscwCdwsgC5jyB6bscUq65oDfbXixLajjbS2PSVtBLZ9pA6u3ox1iKWbGUD28QGb",
  "key25": "5CywpmuXEUy6jKu6Jn2ad9RmcsRYa4DKMP2VHw3pwgMKBfdZnuwPfgkbAnAyeR7m2EqDKCWuiBMUzTK8WiRzKGkr",
  "key26": "L9fxbAx4NAJfLqgGGKGwSwfRHqXoyJWyifqUKyY7xkHcPznQMNLYuqzoUSVnn6pRhLvqMGTMAAeGQba6xTipQ8v",
  "key27": "49R2pcKP3nF8y2YJd3mcNQLeCHrknZuNH7aRHYFwEHKmSxfyRL3ZB2zfAxKTD3gox8LWHqZHRjjSymfMQg4VCArZ",
  "key28": "7FUctBoR789BhxAL2PH5pLKJqQgjTi9oWvTkytyo1W6AyyDNNTsNq4coLcvbtfH9xkBDv21EAC57qn7kucffm8E",
  "key29": "64oNyLpdN4BUZj5rXK6WP3mbq2cNK7HkqvrHnyNDxm3z6cB7u3MNJeUm9bDz9dqcdceesd8PvPZQ1Lk7iK5FUQbc",
  "key30": "42qnQjN4PL11toyourETzPjtX5Bi8SL6yfbZmAjd88whfpeSDJVpteJpJVeBQDVKoRNXCZFSYRdDUwEETcY2i5GJ",
  "key31": "5jzTzoQj1ksDA3hxp8bbADrDRYoEr5nPiYNznc6AQ4GPTGf9VVG6R3YQqPet5XMX1xvoxMsLFA8RNJbCSb3HuqTW",
  "key32": "3yDbUY4MaMXUSJUnNZ3Q764RTtuAocGjrp2nxoQ3pXKaLUwMYiYL9xGCx3hwcRCEzzx2MXViMozwif72Qx7iQt8C",
  "key33": "2g1nsfFXbdtWFNLjWdxQGy2cbuaypRbrTjhQvQrtN8uXkBv1g8Wmifg6UG5VzSSG6Xa3EWRDoTDti6ZJZ17QSNWV",
  "key34": "3zf7HxP7uencuhXpUjucH68u2Tni4VsF2Cng7u5Jcd9sRDsgPQzEBhA6VxJj3wHth5MjahmBGgFoJLTg5qrLbEh6",
  "key35": "2aTZG1aomrhJxmNpGYvtMHz6Mi126xYChGETEZ6CypoNRmtNJmZJKuFTaw163iTvC4GtPdEPBrC8i2aXos9Chwir",
  "key36": "3ga7SkxQoNm9jD8y8wi7SPATfAsXJHAGELfxQnT7fDyTk49UZTaLRNmPEzPo8BJVWnspr7RJ626i3iwPY5mcwfRr",
  "key37": "14CDXJb5Yz95bohQJXnppKj7Yg9XTNdQmnB2yJ7bdT4xWyvUWumQaxRLH7wJumYm7yEB2LmjoXxhre9pxS7G2Zs",
  "key38": "d7mW8eDfid1iSStk9RjEPFeNhmDxcPQfR5skAEqpW7i2o2HNyyQVF8zeYmkm2hnPByKe7Ei2tJJ58UPRFNBCTxi",
  "key39": "5yewAaxiX5snJ2m2HufGKS9QFnM59cSzjWTV3H83GLCaKcX2WG1g1wW6KbUzmBwP9xFAd843PfzVnMacndar1Tam",
  "key40": "5q4tDiHzTwPZAkFstjX7y49r2cSuSSveK3GkpobwVFDejXkQSgu12ACG1EpXW8G5pdYwn68jSRBvnHQPrvNDjUw",
  "key41": "56g1YrYAi4HUdAUK6XGyjHtSYxK2PnS74ERQY4h1GwNLmTdbc7dG6ZfNkAQFgRMbaSHfLLoJkZuFy8FGHpiqkRo9",
  "key42": "5uXu9bkbobavdtHob7tCUnFoonJzUsHHm8BQsNESGaNpA9qD7S4FiXKAroDe35xuxWxQhpLrLKDxTf7ATXKzPbAS"
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
