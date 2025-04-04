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
    "2Rpu5ajFaeZ1SdpFbsh9cU6AnthPy6Cx5LJxuDX216qabmerHU8C6hGEdCdZXiaJ97ydsr6Roh6XSmwexCeCgAbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "srmvrpMi9JghgqVQEcVy9Yqi5D84KVWXXiqdkhFNRjMmx5xEUjm6jvbdZdLUJwf9LsLMJgf9tadF9gV5cWBmW1h",
  "key1": "XaNfXvL29Bq9iiNST5ySaS6cfEgca8mHTXsLwb52TWfir7pc5DFh7e8gwSY6Ve7bTzUmT5ziBGBwpguGNPhzau1",
  "key2": "26z5RHZ1CSR4jFnoysdQgUAMfRxw87ARaFPw5Nfa1aWsSEtcmJJy7gLdABYBpHaHXEQ2P95qFkV6RAEzC5PAoC6T",
  "key3": "4hkvNhAoo1v9DuzFAfrLy8FiYScUnaWa51eyEc4PyBNUCVjwd466FevM1Ax59o8Ly2EkLoNqSVTwu2AnSS8LWmkN",
  "key4": "66T87W7oMj9EU3e87FUZ3eAHg6c7BZSCz4621pj6Cr9ujY3ZQ2FMrJSfuz8vFViXr2BjkZpbKPJL2yYXfnGucoP2",
  "key5": "2TFt5SNFR7q66PmsanUEDT58wBk6WT97NjMxmsQY81q4pxR646JZg1YHZ1NBMWpxQBMfMtQAVoXYKVpSwQG7D5Ep",
  "key6": "213t7jTXLfvGSyJGjCC2CGXZ6YnnFQpWBYWbZGJPnTNcJiyNDpak3VnVxF63vAtdWKcEWhyDcb8dr25KGTE7beaQ",
  "key7": "2KcGmTr3B2vykf3kBrJtEdEt2NHtWRvw4VTQfunbG2crKvAG6BRduHRkbGE6nZgB8xouFPLqa6aUqKYkFJLuygBH",
  "key8": "3C8pc4KTDyeX8LpWUaKFMxHF6yXMiaFEci39SSZ8bT6gZQP19B7aDwnndKMB3vuNvrHaQsFzk636XhW389MA6Fny",
  "key9": "TadF6w6E19CF32pvjPdfV12dArAKVJYKN5Ytx3fHJT4ESnrhw9i1BPJ15P9dqRBzdgKM8GrkzJd4XaEp5PZNQu7",
  "key10": "5ew9Jw6ahr5VMpzYjrJ9kGg7DXjRhaTHdVbCeuGQuY6jCi46mrBjsPH9f7yjbcEhJg9DZBZ9UocSktfT42oXg2e5",
  "key11": "2qq18h8wvR9TDWWZXRUdX5fNfQaA5TT4aihDJDhsCJ68na1duVW3u2jrnb1x6GVfzrhVFx4fNHcg5o8w7e91mi8a",
  "key12": "32Q5HUA8ie1eXggmdqyJUrovYPyApQwn57Ugh8a4eHdxc6hpDKbUzLPMZy1drPdCyRvemCQXBturJnNPSyxb7oxe",
  "key13": "51npnXqbfqEn33tyH539LkKqnJK47hrs7z2aAd4n3zWWeUAxjhsuKpfxJhY58NNaQejZPR8mNTiXLfTKPgRfQY3j",
  "key14": "2LFiFqTxJZyjGpHpUrxgdhBGfbzFaF6mejnzdKvafyZkuzVSXdsL4mhhjwMsPdHYBB1Xd4dcqYByBVMdgAWPDZkL",
  "key15": "3JuVMCeaHkDbGdDupUp4d2TaCaJpn42Kk5s5MJdtNjGSp6UtHNgNTnLpoP7wawmRjfL6Rb3XiJyUg7U9NNjUJVoK",
  "key16": "Nf7E8EAi17y7QavMsfnJpWhkv42fY93Hdaxc8z1xA7GfyBQCiYhq4sRsLKR8f786h5wBDC3FAzjuJBJq4Z2fcSC",
  "key17": "45gQ9GWPcJ3DzaVheKa19prz83M1uHeTEQT1b9Jiui3HyEuuWqTgtTaySmQpqqs6Dk4pweG49HHASkDmDKoCkA2Z",
  "key18": "4i8MRHfLqzuLoWfgzp2zpS5pFuEDBUjPx9yTSMHGfv2xftRJa4XKUoqDNvvPqkhZ85UNML96qWyqXc2zVjLAZnQp",
  "key19": "4atbvCHW9p1cX4yiLCzLjWj24EomCgtEUxo2rMeBvSQUQEYLZio12Yg3zFugE6dwZjVxdGNQcYKxsmGK54j9uyb3",
  "key20": "5YqPcTxpKn5g4VQDvn4Ua11gwocbh1oTQ1VdXLv91XhaTkRTD9yuvwCX1k92DQQXuj2Qsv5pTedYKL7BJvx5ujNx",
  "key21": "53KAfJ2UE3ME1RDQeDWNWGHpeLYqC9yMdX4Schoqu5KmGGgK9D5woLERgMYMTpp2wtp3QLp18YYumdqQqw6ur8B2",
  "key22": "nde1d7bByvUiXzFUEG1FXNq9TNE4CL5jX3MmC3yo24MApREPWGnTSAS1i5DA4LTZDqJvyU2jE2uTTVevTTTTFx7",
  "key23": "4CRqE6QivGM3sq1spvXRJefTp1YPCEwKgxG2Y3HviK4reFQY5xb1bnHvurJi8y8fVGjCJVGauYxHCfvtmLZvs6bJ",
  "key24": "xDGwbLKo6qjgHWAy42o9zCwnP1mp3RT6N9d3yZYaD2Z6y6XT2tWerUSCPA2fE6XkrrHZ6es5qGxpQrZkFm7vADi",
  "key25": "3432bUPsajaM8wMT7Ct97KrH1Atwsom8V6UofxUH8aco5eC2n9mpCr2pvyLvgaVXGa3rUnb9BXXqLycozoR8KEmR",
  "key26": "4Wy8ZCRh13CF1dCNbfL2NDbhRTdEUk87oeqs9wTfrkgqdZ7p9cwYFWG9PRjnf3N45yhhWo14yqEhNQ48FCWcjthz",
  "key27": "2zqBjJvUqY4TKFFQ7bg4TzF231gtR8Gnud1KvzVheouNeCFo3TdrDtFZtasZRoNk8MuDj9rZZfszuMAxWzsZ5amt",
  "key28": "5gt73QZoDWFhvXMja97jpB1G31fYNAKgqBbrBBwozBeqL9YAqFQUHwB9yT72RycY6yXThGK7KHncDsZRoQwYwy6y",
  "key29": "3UvNpVkhuTnh9W2fawJ9CNE3WPzziwMZnpxVbD78wENYu6Bgw1LenVto2W8vBgT3vrYoKpD5GfdnESqGUngRbUQS",
  "key30": "5C9heNhyYW2uGagmZDTMTnrEm2PhMYAyFp457u4KgfMztXfZ681gJkjAwbBWF3iUw6ZZJv9WbVys7dTmiAjvaEuh",
  "key31": "64tVqUuU7475WLcQaEWdcb9ZgSku6Hzi8Xr4eZYpWk9oSDbSDbBtcRHDunwyzAtmsDhStZjKCQoNEKrosS3SEAXg",
  "key32": "38DSvFFfRjSadCRR7LfzvZefGcEkEbKLMfZANH7dmgVwUgyGKxLTyXkG2Cb5qXszJ5w7U7JVAgE3fmSLUMUXWJj7",
  "key33": "2esZnSb9EUmtbQDCCMWdMY7G3fsJPBf3w6D2jmj4aKaKp1xZcGrYjCEYMbvgVoQCFQGwnuZXMeXtSXLq8rHY8Vf6",
  "key34": "51Wer3Dm4miXCcPXM8KQFtuphZpoRbnujvqtHcq2ppBdR8CZg9EvEWgWpgvK94JJz9sfcJPiLddLNizBUUzbfGKb",
  "key35": "4mA8gkXzoqk56wJvq5WLBYihobRSXTsMWiskDo95kh9dQiiWPkYqdrkTYxPHdPQbr48xXZjAs7oL9fEERKhkkCny",
  "key36": "3k64AYSbGm36fht6tZtF2LAnvac9MBBN6iWXy8P4Lug5q2Uxmw5UGYakUbusgEEiohAA4sq4xKbJjdNCUT699VBJ",
  "key37": "2faBXBgzifP33s4EAC2J61gfCbTToppkXaoPoXtLkBFH6BeaGnV44EDWLT7bnPCxMKWhQYYeepsNBasEeeBL2uAz",
  "key38": "2hETardTZdcpdnbQRtwquUmnNyWNr9NfsyHXEWw1zrXJynYR4cZ6cZX37c7uEzVTW8LojP4w37bZznhtxAytvFdT",
  "key39": "3HgcfnrMDZcz5xf2F891QfPUozox6ynck2o9A9kfpxLKchtH7TiGsuTx6nY31zBdcK3c1aKW33oSJMmQMjMjzGaQ",
  "key40": "5KfQSMkd2NvyYCZwBN5B4xrc2fL2s6AspY5h1mwiLT7Dva5tnWT4SrfydPjRjqzXQvCVcVk6j1VyFVAE17CYoAGk",
  "key41": "2G5f2bRPDEB4GAFq4He1iRwUhSaNH8AfdUJKKgbtiDdxtsHHLuWjz7yyrCDrZHBw1WdiEX3jJr5qMJ3ct5TNDxsJ",
  "key42": "FjV5Us6wA5c8REBFLqzzitfKFMt3oWpfwBxXDsPb4i6Wypw9bkQELRFKHcQpgmwXgMyRTJy4oUVhcVXZtweq5WP",
  "key43": "9tnBEPsGyZKNZYgQnW1bjGv12iniZe1ULrx45TwxkB3ffkX8g78Us8YDFocmqTpbYi892chCUCKsds3Xx76gGmj",
  "key44": "DZHsrN5id6n6tVjNU25t8fpaq4C4jKRY8paRnM2GrbDC7Gb6MTvWp8ic8w5VWHe3kkxjCwqvacZHQ6BtWM5Zxfq",
  "key45": "2F6sqAyJRvVqqo9GAUCsZAyinJuhroQZLHyHM71z9gG4tsGiu4etE78cFbWMpUYs5vFXtVcr657uJzwou56Rndbr",
  "key46": "5sbUJmRXcqtWNZJxTPJ51orQ1nyK9AqyyBFK3XHoE2jCnbybGiYBxTLCaXhiH5bVNbEkvA8XHupSnBNDu4wBCt6W"
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
