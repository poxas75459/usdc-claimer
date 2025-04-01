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
    "WddkYhnky9ibjSasztxgeyThtTHfHAyZn826drPpBCRxahCtTzxKtcmAmp7EFRqa23GidF8WTCYyPt7wntRh9bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WXjhLHatw1DSVCQTEV3gKRdtJhpQx2h2mHJwbo7xg1BgKpe2HBLXkDnaxRk6mE7URDukaKy5u1tEAWkeb72tD",
  "key1": "4PQ1j788NGoUGf3qzZeThJUCoTYz8oQPmNxorEahMY5evrSBrRP9HvuCxLKk8f1wP2eu3oTqLmFqZbnQT9hnwZ3d",
  "key2": "U9PwEHajNknrBGqGkbTg2KSdBUjv8c2kw4AJNn2gGuAncDMeHTbrYJr5VPhEB2RuSaVdBD1KnSL1Gr1cB8eYDG5",
  "key3": "431kpumu1YFAkPZTjQmEH23aSJRXAeCjB254Wr7mDoYzF8H3FwDG1qF1nB3GzjNScnmDgZyHPBmDkhs7ksEaWbhF",
  "key4": "5R93Ya8eFKv5tUir233CvPjCkaa1N243wo2HdiPXC9gjGTo6yyPh1kNZwYEZRqwZRXnLiPbd4EXy2V5WY19z89fT",
  "key5": "3B34Gs5QQ9VG8Y8FAq5hvbpNZ6PQNS3AytzzgbFxeNQSFihkNK67Tdnu5CcdU73qXnF35PbY6xX5c2JcUQN7jKhk",
  "key6": "22bdkSaGw2Fdij6w3xAf2mgC1jYP5yUAibMwuz89b8Jrziqu6JJu9BNHjv4ZyqkbD9FT8WRtkz5NCJr5pTNn5s9w",
  "key7": "g4eg6TLgkAndcyKYaRnBQJC9tjgiKTh2NLwwBv17NAb4N5e5zKht6cNMqjYja4157kaTpoeoQYgN3HzPmPS4FjU",
  "key8": "4EnAt1jdiq4G9SiftqrzByEQJMm4uWse3FiMw8ZknTZP1qevFsagTJZfh2f2NviUWr4mSoUkXUairhUoQ8dvgF22",
  "key9": "3u7BQdeFuPsVCpEnQfnqqAMeryrfhVx8QcCDEWJgUfFsKaGHTcsoUTeWAREBjc7bsDGi1qGTKxhXYo5YKLYRfdPo",
  "key10": "2p1ytbN8EnDdT4suqfwWWhzoPLmzEv6rzmEPnpGXvkApehdQAjEDZfVDoaZXL8Bw3onoEGgaeKcxvogSi887j8N6",
  "key11": "3py489hwuQF3TwuB2nwCf2dhEJwtqxXTiaSp8WP3XaYHXygGzi7jB5SFtfVcYtvvPeAdmVzjiwf6D9vjJgZVwfZd",
  "key12": "LDB3XqqsFUEEiDasY72LDZPor1YDsYdaXwgjXqaCK15C7oSz34cDG1iaxWS76MT1GDnseYCtjJsaBNjaTMKEKEj",
  "key13": "2KKifGzdQ6Ffwmghs2E6naUpvbtUufSU1ypUYWf3sUE5qupcyjsN8MrrpLy7nMC2nLbWYykX24UbMbiZ5WBnnbam",
  "key14": "5oamFAw2uUL6Qx27omga27SDXfgsr4cBpvyiFyCv1okAznK5U35aHYY5h4oA22ZJ757d5Xsq9RVALP7KXyVVjFz8",
  "key15": "5NHHYEcotQMmAMmerxEtGzhS5FkfnC4XJZ4JmSfHsf9a2c2p2JkXopyX9j76zdv7YEmEbgXMqrkrM5jjXkRDEcoR",
  "key16": "kLsbybASJNqNPZAWmky7mufprSPKeGUd39UZPKTCrd5nujkzfDXENW5C17nxE5hPhfYGdCfqVwWZpjoF4Rig5yg",
  "key17": "4PP4BKjfzcyYm5YJoKSmTLtHxGMkvn7zVnHyUSSakByUY5RLBJLv851oJQMeczDtBtR6d8hCDqQadVmMp2sZyCMU",
  "key18": "3Z6LT1vFWzYe6JSWQph6Foi9o4CxvS69tUJcwXTevfRm529j22T5zGekz3oEnQPvF2Hq4tRaXWDJQD1krJ6EnUUx",
  "key19": "2JD7gBPYLg8z8Heisn96EhAyy9az5SqZzEvSMSNC85gVh4bw4F5jTEwxqPwFAKwu57PsjRYJ23RiBfz2JB1eGRQU",
  "key20": "4YhZdGTWkfja3nsvijdMAMKyVuhAXtZSU3QXnRdQFX94rpRx32Qswm9sy3f3cvoyjko3gctFwRYaZNBkDGEAS5LQ",
  "key21": "5WAVthk9RB5KXoJd5RKW6hsCGaXkXp9ss9CitigKpcwM2L4preB68DjDdxETyH4RiUcvhBzrXmSG8yHhJdfTf32j",
  "key22": "Gikojtn2CLFgjV25FJXEVLhLinWpWTXoF4m8FRUyaLQwR9V76kpEmuj7u7HwQ54wy8yyQagiLBCa1PfCUxCQQ3e",
  "key23": "31C2s2iyfp87KvcmKeLgEccqoReq2HkpxfpAmoJiBAcfe9Sy3TLD7fZzF4Z1b4bZE6fr38oNKECZcrjTDwRjiCpA",
  "key24": "LWgGssnUukv99sfXoMApMYVm7pyJyffrVVqrfTP95bSCuc4bu6XicFkwGRdDGTmsZCpV2yjAsRWJbXDEsCX5Qwe",
  "key25": "4Vy5x1GtHM7GowFvrBsjfCAQ1ThEu3XYSP9DnvWXVVrq8tz4z1ikE5ukLNVnSLPQyt4SSBoQRU6P1iB1WKaakdxm",
  "key26": "fdXLiCc5P8dKPGiSRetCQFYkdaAgwPsWXjibKsrDZ4qL5E7NNZHJBBbTXt4msZvE5XhDEhRprjBXVTSAW4HVVZz",
  "key27": "5ferQV4QYW4aGumc4rwr4Adeq8KWU27YJgLCiQirhGChYpobK1xFjq535RTpEwCkF6fEdn4VKv7D5XVJwH5RWrvc",
  "key28": "rLC8P7DiMeWr6SwadgJjJSZUE1QweyrQecJiXotLJCbXynbVuVSBFeEvKhDKY6oLT2dSXGEiMP2g5SrYFcu9X4P",
  "key29": "49aNDmkpf15JwtM9mGCDhLWgYfvqxsFF41d7h8ajPTYs6AEB1YoNrgFEpvYQbh4ZSJqAVemYswQ3cefeZVHWDjAB",
  "key30": "5CJJsZLwp9DcDo5i7yWX8HTF1wBkE4a3K4wQp55UykHGa8iqhSw89qMozMrqzWE4MN4Un7zuxrkHUhhV28PQxz5T",
  "key31": "2coUocw4TqNYpZEqhYg7mgQCxKga18aJFLuQqejiPTTaBUWMpWW2Aw23ygU5qtCeh6Dh5BgJbxLMPyc3hwfganie",
  "key32": "2BHqgVzLbqXAUdLUxsGsuFHwvBGfT1YrwvbH8NXNwZgyAPTQnJpbYy6rQuanHPaP4mvThcMBz8VaCtNXCLLwrQEr",
  "key33": "2MshaSZicmpiXuFiNWDLoGzS57YBZTR3yrJctFKZx8324MGQGiY1zLgCTe54Z5tGfptGSYZmdpG8a8F3FD92y9zd",
  "key34": "3BgBm5KC13pREG3J5rKUxLRxzdq45e9NjgaexAcZPcoGd1TkbbaNQhMz7yTfUrNvVrJcktX6LhcwrDxYC3wu1TJa",
  "key35": "56kQYCAwg8eoZgHvAHyn9XbjUmBtpwXzoUZp9bzDJW7xVwSLZ38Uq2NKvBaMmkaHwUZboV75yoW7v2jmwePRv2Kg",
  "key36": "gDqczXp2cwiSHL5fUkkJztneUn6WrhucVHCD21J685KNtBiPTa3wSCXXFMLRjGwd28ivZvyAA6BVGGistdnhhbb",
  "key37": "VU6b93iPbBad5kU8wWBcCqausxVk2hJpMhdo7dvdEPVzpA6TSHnZriuFAf1N2oDpdD8vw1Gtx8pUAbXepvr9EuK",
  "key38": "4haJ1SYwmGi6gJNrCQLs12ePDqSgXpsHvdJuyL1yimDMrLDHfZWKDgmiS7JxkXNVaeq74zKTbYDa9fJUywrxcU8c"
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
