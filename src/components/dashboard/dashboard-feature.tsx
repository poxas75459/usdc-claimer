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
    "xNftMYyywkRvMFDbQEyTTqeTRx1D9CfXqhUzCDjMzq1XBvdAvgTKzTmHj6nsr9oBhW3EdWW9npb9R3RSxtQhehu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRF5ngYbVSikybPEScNrMUC76Lo9uGecR917CrxVnNLp2fkoJ2mPmVt7jNyX1TwLhtqn1NsU9gkP1uaXCZc4or8",
  "key1": "44vpxuxSvcKJ7JsgRsCJPN3uijGTjxvPWDsdkrtDokw9D6Bdya43R7VSKmVxf2BmJMRrwKnZFmsfanJDzA9rRcvb",
  "key2": "QhetNY5ApVS5K27oNEZsJR2nPNCZJ2m4oCUi1efK8Xm83aidEkCjBb3sSs5LU33fSod8iJCqS4JwL2fEVEKUKNM",
  "key3": "2vufXkkiyHkEppSpEUMpqYRC8zRQ4iYyyQuc3hQJ3kq1YTar82VjG8n57ZGQDqtiQhaasMhC7DrYizrcjtFnCv4k",
  "key4": "2gJR1RQKGVSGyFY32kUHTT52wGs9wvfkzNjjL3vHHPvcGa61hmYdzpnMSwGWCUM1vNqZYTXp6ydepgZ4gxYg7Nju",
  "key5": "21fKjjrw8MH9z7Y6LThfjNj1Lhajf7tDsmTKqoud71FAAj9JKwAkrQEmxP8MtRX3Ub3UNXWALK9nFaMUvLKgKTZC",
  "key6": "S9NcSp39kEb3W7gEjbx475HJ19GfDtSfAPXKnfVvaWTffxieeMbvWNk2P8AMEUnszbEBQJmvE7aY516RokzKa5G",
  "key7": "fTi1oVEUbAwv7U5QGigrx7K7ezpR6CXjkEgZQZvFFwJcN9T5Kwewgm5kU7nGz3okNHgn5uURLxqpzdKVQJ26Dce",
  "key8": "3cpnu5joLc9UgMFWNn4qp5s7gFfjoobbcUXYWL1NtAEyabB45M5yh69gF59XaMPL62WBJ12bD6Lb3nDnhJxr2GEz",
  "key9": "N9ENo3DneT475amjgbsFqJqsJoEE5UPoe8UywZdtwvnRWXjJp318JDnsjhYjwsAD4sYGMiMT5eWMA9WCgkHaaFi",
  "key10": "61b942b84EZDz2NBf9i6mM6V2ZTEZjB68NFFpPfugL8YazjPsXjTdEGFEm8D4jkA3AH4SwTGe1AFLdxoieATyAqR",
  "key11": "55hUgYHeWxgC8w9ZYnuksFkvK1xv71EsKeAHAvsLgWmCUcz3QTEGjPfmFC29guBwPjXFj8YU1DnNWpZDih8xBPyi",
  "key12": "4XSKTC5uC1UKxg8KnEHL4N3GQmU2Ynq89pGEDpCVM7LMvLzy2dvQ3iKAYNeLdL7wpziGk4RySnyt5vBtmqD82QKo",
  "key13": "2hoAi8P9wnaTwE8T2KJ5rU6wBNcY6dKU1esZD4BexikimAHMSsgR4m25ppQtSzE84kpdeDGsxRhrjcsoDdEEsdw5",
  "key14": "3ygMSsFPT7wrMtWKWNtosXMvUs5t5461aFW6zJ3ZTreznQa7GDAhoJquHv4Ayigxapc4VBzUxqUCgDdrouptY8ev",
  "key15": "3vY9fRfWiM6xBWma8RkDZstxpy3ZyLguXC8x85EYDdbKHnLnienBmUfMcAkyAUWBY3zf5HgxX7gkRVh1W4FucWy3",
  "key16": "5aPZJ21Jg3FtYNUpeEastrhv5Hjbz7FmTDutnAs4sDQyYSDEbTrTw9b93XsSYHe1Gkp5hEuN6J2A1fum9DHBA6G9",
  "key17": "65u352Pi4sg4Yj7wvv9kUfoNj9TSDbT3hfnAqiQpYqmDZhjyeHZajVYtFZr5X8xyYRV47kHZYc1J11zfPEyiFHh2",
  "key18": "5ge9B43YmfPXD3ajPheU7ezjYKpASq4zvZMmvheb1TTxTvWsCA1notQoqbRtmCSV35WccXq4cCJCs9mHMXwSPo5E",
  "key19": "4bBP9Wxj4N1FN9ZJN6cBX65sU9BLaFhqMJunR6LjZh1KEvKL8EMLYgmujkcFij9aPcmcKyVd2x3oDAYkTe39AARC",
  "key20": "5KQU9wWhWvzE8LKXfedgzXcvGrAsG6QDjbNNXf5eCvPaxBmBTToQSoRcDKBUo3UVmoNPTs1fcfm1tGedJyXm8sR9",
  "key21": "4cfFFu23zYqTNwujZfmEa7RBYw9NtWdinzjd15JRjzKNS2cAWWFZdYPC5rdN4k6VkSgzEeq7fXpzoW59Kg53emM4",
  "key22": "3hguewmirZvDPudTt1Jkq2LQFAL2woQQXfku915r7mMrMgRgqBH1WphU3Yv5QN85o5zDdMzPkoLUUYFRFfB4VDaM",
  "key23": "4PLNHLnEYdQAmsfB8BdM3mTwwbuyjvhpVZPNtX5j1AmYWvQQCDszvxdkuXy1XFzUtgcR5CWoNtwnKX9ZgBwRbxQv",
  "key24": "3mgvjQXFk25UBLxoES5sM7EW3mXUM911s6xAydP49BJzwJdCLVR6RgxbiG9bnbjqvUVBWAkbdLAdTzXrHqTrEq7u",
  "key25": "44pUXoq9LxxXtfyRY3gKSxpSyjnr1jsoNny3P5grUz3JVJ4FRnY9i4Q8tMX8yXaM1M4VsTnkcFWTioKyyBL3wkPJ",
  "key26": "2VqK9AdnodvSgAazhDp8uTsbgB7XW9oX5UwpDVW3AgEsTSxdzYjo7sz8jRUFU9VGgnjgfYGoKqLJRYPbjeTgYo4s",
  "key27": "3LmFhVJDsE1LB2VW5gs1EniS4AVT6DJA6gPyY7cgauxBakhBteGp2hMQWaG2HctT3Z5cmGQ3rQppNrvX1PNA5JXP",
  "key28": "4PGbeU7DKjTz8TPA44az8rwNPb9cUM595hBr2H9U54ia3bUwvq7szwoJVkYmhWM6JMJ825SehujbD1PK9JYRXuvX",
  "key29": "5TWYYRCDwwN7Dd8Mmzi9xquFmeJ9es5YXwNzH6oefDJKvBoNA8HYB51CnfPxNu99t7Qr8svaeJG93WwpQtFmdDFu",
  "key30": "3q4dJPNw4reu7wbut5iLvBPC3UteEaS3DwtSdv23P3Z7BtmqxFPikKGZg8S5p41PdpLwGC8pbQ76FaPSEhuHzmzq",
  "key31": "3D42WcWywGdZmZMT3B8Qox6sGioWHssN7i2eVtQMXbzFqh7zAmj1BKRvYKqQzd1yd83mcfBsHL9KcMDixveqL8X9",
  "key32": "4quEbpkxX5KaNcngh9uA7rEUPk7o4cHTJWdK8RPtpLZUfEA5hdkB1nMUiMf71T3igMnTYD1GkdocUY9zucvPCz1a",
  "key33": "2WwGUAJFh9UUBnLoxq993YCseDnqmi751HXnH5eqx36RfNPvnHK68LDVMtYsAxSaiTcBNsXwRS7rJ5FgtzvRKDba",
  "key34": "51fcETX7GxVTUc2RN3fGNERfrUT4h8tTuUNo5F9qg8STRCmimcwBthXSGf4B5866k8RpoRH1P1Uume8fpDZdN1j1",
  "key35": "qaNyjo12yx6rV35zxbs54FkBoFroNJAnAjRAipYQnboYcKXJ3spzzfZ1r4aKc2EpkfM3ibdDwG8t8MVNQuproyW",
  "key36": "4KMj4LMdtTYhcW8NJM5a9ECpLogbwebbF9dCjbsoXAz2feRYoXN7CMXJDffV9GA4wFuTtbC6gPNmACZiD33GUzdP",
  "key37": "2b94PXBhAct6ugCotiBotcY7MBDNCBYpSLfJuTDghLaqutGHD4NPTSoWMWfSHZpP6uRC7uh6ZRuRyG8NEvCx4vA6",
  "key38": "5dJdxE9QvxrDWVHGofHHuvpKxpTBsP1tdRzF7p3v95aF5bpWNf57zENe5SAcPbg4SAXLNP2nB1CTCXb6WR6yWDtT"
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
