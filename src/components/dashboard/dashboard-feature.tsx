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
    "39S8Nr6KKpX9v8VKAFt28CbUAEdRAfo8B87hD9v58i1apgJ9sLjqV379FzrtgF692Ux69R19PsJo6Puptcmnp76f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZYmR7ubigoVU9bdkqPv8U9iV7gHNYaoKKCAJhyXX7kMKxSJ4ZNXwhUoEXp2ncYpHEdJ6B5UEWKScVcuEGQTobt",
  "key1": "4Sk3qJuJqq5FfRnFuz29VEuim2piCLykL9u2vgv8qHX4siuvAmtfutHN3aHcAdcGa6sv55LFiVE5DiXpieVDNVJU",
  "key2": "gftjhmFH7f7hCp9jon8UNvCA2iJzytGSgkKa59jxRGSiXaSPF54booiDHv5KJFRbv1j7qCEorx8YrAqsxE9T98y",
  "key3": "2NtQGogfbJwWtwRkrU9dTGJN5Aw9uBYf9JA88ZXRtW2eZK3vaSfKiL9kDgzaKLHzueEcvarteJ9tnYiCPie8J3Z4",
  "key4": "3NcoCRak2BDrKuYKdej4kPbn36JB29KRz2tUNhetWbfbW3DPNcMBKgrWNNqVU1RMKiMg3UhzL9iBGp3QDzdXgmeP",
  "key5": "413E6wxgFnq6cAwzLQKnpsKzq9VZEA5zJzwGVNtQYYVtibifa4MmxzoczrWLYUQuBEFRSBBRRBsHfuS6g9n5Atf6",
  "key6": "AnrfXie7VhipQJ385CjB1NfK1E3zPbL3zD4QgiGSDujyMH6FiyjyA6YdWuR8nkdeyD7EevEG9oLr7AeHMJn7pMn",
  "key7": "5qEw4JYVyP3RzMLu8qHPPPTrxZSp7jq1MjKEy8MiD8ago2ZBU4mgbdPCJVbTd4hMW59P1bwnRspcYes9psrtP4em",
  "key8": "2qLsYLak14GDrnYrUK7WJfXufU7LN8dDphGSXjhf5Mn3tqbKHGhSURwoACvWweXvsKkQpckWaECtQcr9ntUPrQPw",
  "key9": "3GrqMavALq9uomUyw5ABWCfJg51oFeC89Ztu6yV3XjzQ5cFSjLeyWhboPReGZH49ZLVnS8crxk7C7rt7xAmxiVnD",
  "key10": "4SadT5JEQP2uxuEHxowUPmJ6zJKMuoFqLykRtfm9m5y6T6mr4nD9odQD6nFY5aBphxoQgBGwdheDuJTPyos1gKGu",
  "key11": "C2mYEq7VBrBSH1nCAfYwE4jV2JhTZtaYMzPdQtjKPptCjHhYSTsyGJJgRLDefBQQPCdAXXP6LGs7BgyWwxqfUnb",
  "key12": "2aNAtbCtC8NigNeHWgBmmbJcev9UiKGNV421B9BmtAoJTBcoCo2W3DCiTNBDeJNbjCSR7uawPbBSCtsJyuB5Mvmb",
  "key13": "5PEaeLbXXxA7tkTzuyCMMrKMG4Y2f3nMRYWHEY7XxY8QUPD78wbR8RLYy6ubRQTkF3P1dhX65h6NK31iDV6d7VLK",
  "key14": "5gH1erRjCePpyUVqiz9srHE5sM6a4oxPuNfA9mWhA5EZzoSzRgExsqU8EgEdSUaTb8RMHZrPieQ6yirutAe8wd9j",
  "key15": "4aTHkQMoVC9CMFheMGS6nm4in3WPkSvkE2KzqkpWWz6HKZ4X8rM4aRBRREjvDcjwMu88edHorPY3VrER1T1BMWi4",
  "key16": "3Pt383WzshDhLgFVoPA4KUWFJhqtLXYfgdmUQ5dZ68wHqt3Juu3NGbUEEGACmUWQanupzSBvA5881jRCtPWtNJ5A",
  "key17": "4EPL4FomoiQx44GRbPDYudTJbAbmwwPVdQccknLCkcGfuNwBZW1jxPfeNEFyD7mG1Jh78u11TbyQLgMqyqrvGtjx",
  "key18": "2cAyWN4XcBExjF2MP3apwUWSH6RmxVxUNQJbQyaiLU2qVUtq5xCRaopAY5dGfdu2JrH2YFd5ZaQvB2MmRwWqXqRZ",
  "key19": "38kr79dL21qPMav8b7u3c2thUi6N7NqAhacGsLN8mcrVvMscGpyz3GDnykDVNfR9eXmcU6qXYBeMirvP76zCABBX",
  "key20": "5Qz6VxbnH1bEnvX8iBAYsGthohanfLFAAWJYftpCi9R6VahmG8Vown5MABgLRFWyZWudgorfybUgHBW7UqjgEWFz",
  "key21": "3R3nNcwKXWyF6HUS8eL75zrCBgCQQitZdtcnhtHot8Gp958L5DrCRkLzm1uqg4asxD9S1aMikzuoDsfwAv1HLQyp",
  "key22": "2iHYRK197gmUJvSaVPhY6Nz8NHbwpu4TrxA9SaCBUj96t2FTy1bJWHQTGxwLzdtYFyQcXeVZVPCuBqCdmptbppLm",
  "key23": "2gspjT7fviaThNr8Yx9VangR7dK6tSQhT2kTGmpQuYVnwtNykoxnB8TxgU52YUUTEoAL9nVPghBJDtDesKNf6jeR",
  "key24": "YNtWAdTEgSDHHQoGR8F5M7j5u6bVybUeKYjFBntSe315EACRim4VScUtYW4ghxfT3xYgZBHAqBCNXdTEXM2igjj",
  "key25": "2m6EUdBMY7wtKA9qskkMdaXyRzEpG3sh2hwCbE6aPvSiNexZntjMsBh6nv3i7MDs7QrebygZas9ADJ5c6AG7McGD",
  "key26": "FnkCjMhi64AFwtndM3KmNWtrnesxYihM47TJ3xd6f1davCkSSMx1ZFuPWdwayAPXKSMnfBQ9Nb7LvxR7Kp3oiGF",
  "key27": "3ATNYZvQs4UJZQJ7gnVAWf9DBRVWJ7oCmM5S3SCaDaFozqoeLd6Zi5uSEmuaY2vZGx5V3hmAhdL3ancLPVVeD6yL",
  "key28": "4eYVC5TcCMeHjWNY1wFBvU3RLsRzmk5h877ZFJdgUGmiJzj6FYBFRwPqjEiGu34awoq5zt3BA8ghFEH3JBpXBVjr",
  "key29": "26BTKnWGoNrybSokRUYSvBPDsfEDVzMgCeKxxqTfG8XYANVZs9MbYm22VnVSJ2t6jFK4zvkHGfdDgRG9fmCWTwf9",
  "key30": "4nt3aH2b3jZP2UM44UB3docj1PYCQxKcTaCYymLNuPwHjdwenFSxf7RjuZkRZGi1FSyDeoP7WZ19V4feUFqQfYgW",
  "key31": "2rcPyA52ut7EhDp7tQoSQzDvp4ZUzAhiFz8SUYSgD5iiTPqLaD4dMfpnACnLk1sV5WVKL9bXxgwoo39czFLvwY5m",
  "key32": "2Yt63MUX3r6UQ9h15ccpczVN6JTV8L4CVApQk4ecnn7vvShUadZxwuv2ELVdpwDMSyNBPdzjaqakRYGjpNRGv8LG",
  "key33": "2Uw29iavLsc2gWZobnDD17AcxafrDvA7cSwijS7iASagf8tqsa73xx69jjxUtcjXdUUwrBWNdQgyxmyVRURNvaMc",
  "key34": "4zhzcfxoanCnXqVbk2eogzbadhdx3iTkBYt4Bx6sdT6hwGCR9BDELVsjaEKC5E3F1VMmGdJwPMCDnJR13HVUUukb",
  "key35": "3bMriMebiUpkL8r9CQd4UdUBjwteqfnxEzzYWJY9ypGAZZb94RA85BUm6ZjccHVsLehnoM86hD1MCvLdDYwv6LDJ",
  "key36": "4TNdfX6uGZhKE1w4PFYSXZuXfWVvhoTytavAQHWxAEhXqtfr48F8zR5EAFVzBAzBZtTAeM5idKkq1LU6m8q4kaxd",
  "key37": "3buAoidC8WYfBYnuvWVt6xNKwLasHsjTfeuhpyHpbS1UCqQaUMwasWvWNDq2zQeokVizD58MspAFcjMDL66obBiW",
  "key38": "2hJtCY4eL9MqHy7XSmLWPuS395rWU7oz3BNyn2ih8dS2wEFfyv5amie1d8h5rsoQEa6QnsLtbRXyzi6LF7rBJDdi",
  "key39": "5fW8RwiFxNHdMvZJnzqYbbfmcKB2NFmM35hoGyui8YnnmjaPNDTHTkmDaoffuHNLrVwyJJimPaPff1jK8uUJiGQq",
  "key40": "anEBAQiorZDsHx7nE48moSCW1TpiFoQFjAW1eUJHdGPbBmAEEahokMycMX88ZznaQC9w5vUBBi3KgqgTJVg7RvV",
  "key41": "38d5fTWb2YWnbGbgu3WaSKWTjFtzXewYT25ZJLVgQkSquxB747Rzzgu3ubWNoJYev2tmRbRYZ6xY7adH61iGfxhP",
  "key42": "4tBAEnC7dyeSbBrufGGmbG7msHqM51WgPzX4CGMKEBX52tA8sPUBRqQxforx7oEo1bMhNfcd35fzwBxmxejLwqQi",
  "key43": "2daDiBmH4sLPiCQNMQJy3JXD2Xe6JXdfkGYH1pNhBHjDmFxyZYGtDAaxwPpz1RUTmLBUEgySzEY1kgW77o4rEFwt",
  "key44": "skxKq2f4quSxVtyzWMqPt9rn52NVvRCT8na4w51k9yDoRQXhjggRcRxFRLGyZg4kNt3ZMwf79hTJdUU6aKfnAtG",
  "key45": "4gDNmSqwrKiCrz4PRwtZgtHX8P42KnpCJoW27x2smKGQ97k6WiKTsFnLQq6UPRMzFFc9J6iatUCRYiiTaaaJw2KZ",
  "key46": "53NpAF7rQ8kpDwrTwmwGZVUYBWiWbKEHjR7qBfZ4MBMY8Gyy6nMxsKbj5ftxrdeu8pQ1CfjoTC9SiAWNnaVoTroj",
  "key47": "23ChH2Ard8CSxxA9fPrwJ1pX8iswQDt8b6FcUDLrd5dWXRDkCvjHfjdfDZZ823dNxQE1EV2fWjnfAV819dXfwP1E",
  "key48": "zHfvvi1a46nYRtsPJJjsLRSZNiT2dFUKVZJcUrEg6XbxeGVMrupjcymYtqYN1rEpCqJ8rrHDaaju9SiGTR1CP2a",
  "key49": "2b9RW9o6QrvQBDbTwb19UekKWTXsx3UywgjSHVunFmdC5fzpjVsJy2uSSYqddxpRqVYNsZtZ137ZPFUVeKGRnTn6"
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
