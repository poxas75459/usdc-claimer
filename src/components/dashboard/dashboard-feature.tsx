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
    "3s7YozVGWz2pEujEHyuvUpqQpgXH55rMkKbvUQXcijBAiGwScvDaNyXWVy9Gx38mVLtigXYqCNuBqSwidbpJ4tj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4omvgSE1sv87w61xY9kLbKBzCQ1bnYPpTPrfgNhezr1RzdeRRqt2tcQUmr1VUHshAxpdesbimrAowY8ywBpSn3",
  "key1": "4FBxsXtE7XF1ZKbZjvfxK9iXTnjAMsVUs639cygRCYxrDWPRzk3dem1b43WExieWFCcxD2djS4UHijEJXvXhEW4m",
  "key2": "5EzswNZC2VELg15qVeeHv7GeQoM6qbhVw1QxEFGfaFAfgyFHKJP5bRZ1qkZz9axBsSsRRdvZddYGYo2Jicrm64nc",
  "key3": "TJfUCZQP9bnZwZvXX9moPA8bUG1qV4Nkb2fU9Mib6tdMf3D31azfb98yuUXe1LQLBB5CgvDCwbTpjud5hJqa6bC",
  "key4": "3RAmfF5tK5gWFi6DsX3TEc89cm7UnUnV3XHsGQMK2F4LW5w2PwkzPzTp9ffm8Pg9TrQX5BP9S9LywcVkdNRLndju",
  "key5": "21LrMh3uGadTcNwURhAbvPrdZ4RwiHugwkjA2g4CDpzfUB2P2g4sKmepPJE6ezAQueTd3a3tLEmP51HxCMSc3uPY",
  "key6": "5mLcahcgy5HvyVKQbhRDoAtA5vrwkoYoHrBwfGCz5HQCHvwTFdzap35deMpZMgrGqJnqvabFQWxvZZf1WDmw5sKK",
  "key7": "4K4yHhkvHtbHSVWUuycRFsFZbtAQ681moDZTssa8ytA2bcDz3bHzy7jxDZAAWjF1skQ3yqAvbdonyVFv7kV3x3BC",
  "key8": "4HPjMknJv5Aou2k4QrMvj2aAEoGtqiSgPXp1Nro8PskB8xXr8RL8YTYwms6w9HquKjL3BsJ1M7h8LugQjpDU7Wrc",
  "key9": "63w3oeHmoG4V9qHUfRWzL27jsrostNC6fUtzwUkGNbA5iETdM8kGF2nX7rVzXm6r1kSowuACY4qyVFhJDeQuxuFc",
  "key10": "4aUBfRKBzyzYBfw5shSERN3omdT85vDxuWUn2FeEN8ENfB5cSBLeNFhodkKH6xsryzPvgPPyZXAR6MBjYuzYXiVe",
  "key11": "3UynVsJbGPgfChV9jzHgzA8AkWWBWHuMtsSG3u4gQNLX11TfxNq1yBEABaxseF9niWRub9nXiaXYjDkJuLeNAsWT",
  "key12": "3eMETzV5VpZ8Tgkst4rwL9mXGb9dFeLFS9EduqVAyZ5WVs1VHt8imU4SmM3tHob2v57g4DfUpSm9XnpbJF6Q1aJi",
  "key13": "5bNFE4BuNNijMo1umfsg5eihcCYZHVbpZTmN6PBmVdFiuN3tV7KnwVVc8XmtXTbpsnx4GMYaCqHpFx35WUqodyZc",
  "key14": "499G6ZSgncJ5qNCZu8e5tsfbxp5YSLWkS34QzFGbe83ieNYgSFKn8wVPhv9GGhaHEjbJTi431VNF3MFBhXoauWhA",
  "key15": "UeEdNvB1iVTzZhPhpwRU72nupafV3RizhfM2wSsxLVLCf1wtynYVMeo3kCjMF1fvco9wQRn2Wnkif6kMXJbye1m",
  "key16": "2AU142vreYsXEhTm2F14BmXmrGmkKXB9FzLDeqzVgbR8d2mVko6o4d4wim2w6xCJcZGJGb9TzW1qeNj6ooEtzqVq",
  "key17": "Q4rntsaVousdyorkaQKJUCVP4kVBYSLSefuW1Xsw3WiYAmqX1j4RuBzTDLMev391JK83AFggkzEuJHjioC3PLLQ",
  "key18": "2oW9b4H6wcWx5gU2CvvKUmKrUaHxLM1cUjg5KtyLo8Cthep1z2pVvdv4qwqvHAqZ1PF8kDbdnmmXVRFtMw8YWJ81",
  "key19": "3Vu2dcLUsngeroYeRK9FBnNfstxCiZPem7YfHNUWKXgTJreEH4Q5pKBccz6xuj6d6KRwJGHirv6FbnyUxVd1twmA",
  "key20": "2RakZNBZeBUESPz52MKY8MMSZiFF2rJ8axqHpinJVApSaZo6tCvyBqSkihdfEWqMZV32Q9SBUqE3wpnyjxHF5R1Z",
  "key21": "2rVyHWWZbq1RXTndxTfVVACB11tg1HNsVkXeBhtNYoWoLJdnLTBiXoez9FdTanzjrw3ozMEF942EGYsr5iq91Y3m",
  "key22": "RV2FkCRWVQnjDpTtWHar5xuZR2GxTiJH1XzxsT6WiiiFvqqFxAAXhSVCQY97Dez1PZKHL8tx4T1DB3pYfRpHEMb",
  "key23": "CWfRPXPLoJtHu6f2UgASyUrbXjajDPNvVGMmFYD62UkTFwCaNX12hKu6g4CXuJvNZpvSftd6LLpeVhvzut1sUWP",
  "key24": "5nB5vvMA2HhhPfweEwNuGoe3GZwkyFNmEwnVQNEemVZNt61mdftBqFggVrZPGVMGVJw6VNoBFBmWyrb3tuJhWYq",
  "key25": "CYvo56AGrEpgrWu5bb8qSNWon8DzC13Cqw4i8zu3e3H7r1FKMpS8sAX427b9iWyEH57uuUoGu6FCa1shdm6zsht",
  "key26": "5tPZxPobeJqYvH79pWJ1LF97981FRZ9CpDTCP4C228B5r2vDdk6Qe8Eho6cnocjuD4W12RBuDxy7jTzHhZaHuUTM",
  "key27": "4gveXaRmsTcEG6XW2YtWUk4NrBh12hoDTS4A7rrvj3NgzFvp3j5rFxCK25smSS5FPxouvztnDroT2yJvA6MkAyZj",
  "key28": "gwmoDyZGTZxCwsoAKtZxXy56cWgUhm5ZfMjs3rk82Z9nHsdkqxV2QDQFY61hsfHjyyT4J2H1DEniWzyk2a6U6vc",
  "key29": "3kgxFqgzGQptASBY31EgX6SS4SNkWbwo2Wq4fKTTa6La9xegpSxB1BQkxxQPxzFsmQaR98KUu1dG4iwXZ4XdqSvu",
  "key30": "5wXTvqdWBBrJuHuDDS4gT3Athmj3Fud2bbUeNPsxUbyzHBATQhRfo2dZmxaqaossis8Cn43RrAhSC1MvqMnxc4qC",
  "key31": "6oeGgXexfGiu9fRKNuGjkdGb55SX1yMtJqWSuCcHEthkDfRPNDQfVoNrbv2ThCXoAazYz6zn5sBt3U6HDT74ySR",
  "key32": "4VvsAGMDkNAuPa8mxrTGES3TCbPWx2J62XekGWrzr3QLPkUFkKsDPDRnmidkkroSTgToBdy3GT11drABKxn1xxmn",
  "key33": "28yoD37vkgyetqsaz3H7cAmyfHEMsSUjENSp1nzj4fu1QiYnwUUvrEsv3k9o34iMXZ72FPqxHenuPJxy4khkjKdU",
  "key34": "RbYFRJNVjgJKP5LyR2ksYXYhxBH6x17T5Eyf5XxkZX3w92jZwgSX3oPHxVjhEyRWn6hjk3dZ3xepmWJuE2JFvmy",
  "key35": "42yJPyLQmHJXcXbQCtCxNRkWTLqbMy5EUvrzNCwpKH6AdMQZfRCYjFRFKopVc1SFTz5wpSfm1VjDu5fd8xUFTEP"
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
