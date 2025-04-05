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
    "a7DRSDj2zmktPM6PX3WEybn55MGt9y8GtNH1wz2Wp4MgiXHwfknf2XFmfon6tnsRySLtaBK3C5R7NdkMZUACsfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7H7PqhbZ87cWE4JEgW1QTqqmYUYYT75TtuAhAAfNM9w1nRN7C6LQBNzDPAdGVpPtPyW4QxcZzNnGe1BwPTVXsc",
  "key1": "5aCc4Mr1cx5GJqR672BqaSxQ1HvLJyHQp645kxy2M9pgRMHJN9nRw5PAEsyagjRpk3kbzAzaLQxHEX8BkAXqRjHe",
  "key2": "37bo2J8aQJjXDEQ19oXKezRJGQFnAz2ErXMpHANqJ2jduwHztfswL9BubenV1pPHF3TZwzeMAQZkNJkJbVdAJ9fn",
  "key3": "3U8eWpcpxodAVb5MVdYy8f4FZYqDCTdJCUiSRTzXUsZydZfvBnfKs6QyUfufrtXBJSW8PRrBiEtwrp7DeseG6jbP",
  "key4": "4NnBmSUcCoWw17uqdf8NyDg2tynxQ5StUm18JthTa93k1k7bUStvqHCimWW9RjgoVVGd7pfbADdMPTRYxgNL3r3k",
  "key5": "jAey6EGAE8QytTjbs2hhZYXsDMeaFawSsPhZggoBx4DzhQciSUGa8PgYKM6MYgqKMaCtnzyqdXSmPD4GPc32Wdu",
  "key6": "4RPfPfXbUrrW5rNUFcNRnktcWJVbLJGjbNAtNccE3GCKoah7HXXyKNxTRje8z7uc6Jgehk5yNavyj4vPFai7oG9N",
  "key7": "4xELDy6xwKAvVS8om6HSkSzyorxDM9rwWCsQCfWoDpKr6Gd8gN7pKeqm9PKGD6F9cTLfhnQpWeNFYZKsnv7Lgjpk",
  "key8": "64Cmno26nVbYF4J9ERysKiLVFTq3bPX6RiALpW8fC15RXHnchoM6qYwoyFwxXL93PKZxLyqvQ9hTv5Ubxbkn4pGN",
  "key9": "31kiWJdvYChFbACXsNHGdkZ46BgBHoQ4jSVpaxVUXMEGiTqYnb71H2joAW3UogMQRwEDWTWjf7QgZYGMppdYwTD",
  "key10": "oNxExZNdVG7SGfCucaFSZguiWyvMdd7H2aSxr4m8ivb42un6t6SLF7jZA6b82VYGMqcBWSDvkBc3kwpjxo65BSK",
  "key11": "5ifJRkLTbk4uKdi8ozUsXBxSW778RkzhCxj194azURxMAXX9ziGPWqD9UHSy2rHy3cPNZ3MqpcGL69cdfQhNS7wJ",
  "key12": "5f38PFLqu3XJ5qcTG6ZqvkG7BLPWw72gMKSviG253Mi8SEC26UxcrqTN9RZZqjH9SFajHjDKiHqcz2NCV7CnEP32",
  "key13": "21W8J7CoiFrjem3LieQjV3gnqLqpRUVbXVjXoTa7Pzp8bxL5jsEGFRvoQvXvJ1gomYkhi6MNskCuK5mXK7oPyvVb",
  "key14": "QYpieseMaEruV7xhXYuRkDfewwMEdnSHiMzs6kACG8vJRCje3DEAnUNVQBcrh1LCK4XJjVy1x5Gfg95Gx8oWukY",
  "key15": "2zMf8sg9KsE7xxaSCbgyna3msC5MfARiRrFVtstzriuuaBb2vmAJt5a4NAWMDYkv2aYAMWqTAyMHHiaHEoZ6QMqK",
  "key16": "5nbXGPPvmZQhotwb7Mo6Cwzi2o6LDdpva884QqWR3ohADyhEiL28e8yAZC3eQKyRurrF3igmhaJjv4E9XyVxiE4j",
  "key17": "2Eg1DupiDtTAy1EUjh9sUtuYKjbVZWrdzwomrVMzkUpU8Z35s1CAk8ZxcHbPETFjKj3SvSnAu17tN1CrGJbP6GsU",
  "key18": "dPgkboYsQRmiQRNJsbnXosu4WdRuAfbXd63xhq3M86xwQdnxm1ebifcGQUThfj4LxhWXSzPR7eSkPFUKKWwucnE",
  "key19": "kyR7VjC7sqJ1rVDdvYbv5WWQCGU6ZaN63cFjnpLCZGdKe8fe88ZAoza51w9opP2EC8mxUCBWmWdk2oCHBjnxnMT",
  "key20": "2JDaf3JXmpm8E1UU1SSAnKQNWuUGhcmfvaELiwgBwKmeiiKwDgyKTCkHkUc7BmvHRQPh93sjkn7FHAHJCJs1MhWB",
  "key21": "2AoX4sJKQAiZVwMHh6QxbdFNQXKQAZrNGSDZ8g1KeNhFeBFeTWXqwii4bu2G2prDseTzMLpdK2KUfgtJhVNDiVhH",
  "key22": "2tNknwwpgAD2t9Age6x1cd9RnbkWbEdBcbkwg6QuPECAJxYfQ8iod4fRdanXVzEpFJUNRpCCNVeaQQ5CpoU77P5W",
  "key23": "3Gom66as9P5pko6EvZpps2bfu3BFtmc4ghCVYwjQn1buj5d8JEDVbFxZjvoF6qgeTZo28hWrtNFDtoEiXLSvkFam",
  "key24": "2DPmC57bG4yZue64LHY8yctvchCxXHetS4qhmeZXT7YvsBigfizk8p5eHuNvptpN6jRNUToK85VBH6j4jcSohpSR",
  "key25": "2F8xiMRUgH3aTFA9ZmUkFtrvz9DKCoU1XxeSE6vcATnNePqk1cWfeqcXJYXjKHDeTubGUPdZ1N9Bvpa3Tm3hUEQ3",
  "key26": "2gYCMwtt1SPrrSzTEqG4KaLC5RBBPp4gTTi13Rwa1c2BpZaYEsiKNZxNNkBbpGWhBXHq5oHzbsVYrr3uWVV7cZxp",
  "key27": "4NNdccGDjs7PTPCgbGAtiJXD6wsrimtN6rDgxQqtrjmVjuB9jnVEj4LidrYT9rYygoQPHks2sHUFmqmjgkV1vYp3",
  "key28": "5wyynvkUuz18bgM6JV4rfZKULLVJjdyeLTPKe1YMADEoMi8kqvUtPpDJDgeHugVfkQDFww96kDYvnQQ8PZv7jFTP",
  "key29": "4e4ULEMxUjTMzDjJqrFwHYHnVjV8vX6vZA6QjPToQgrsKsBJF1RFENviMx3EXgouGLhxxKVC1iLQowLTpkLxtHso",
  "key30": "3ULNdWQVupWdXRKGG3dzd8YizqDcvyiHWAKWYtNjku8R2KfqmD5UQxqikqcEzYSF1HFCJC8DND87XhEJPYRtKxas",
  "key31": "3ETePfGCbXWeyofkGPbCXBZYz8R6rn6S9uZDXtZ6ihX9LLs6omcLTyu4XaGJrsD23TWHEhwLgp1weMSeVqA8c1Vt",
  "key32": "5TMqNpeYmdCD5dE6R2mse2K5xHRagdkEtCRSJUpjbjUc4BasDBgXZf6ZSu2osZiYibh6c2HR9pBPmo8UAdCpRmhL",
  "key33": "5wvS9mEo43oTHfQUBQCZByjCgJE5BeFxpTRuSPMoGV8z9KNQDkyLCF514Heri7L4owQRMgZng4gp1AewJYVbEBN",
  "key34": "3WC6LrmxVSj1edqZa1sSk7cwme6NT2Wg4v6oHYUouuAgwYymhTodwYRkas8tzXBgKt4fdm3dzFDPZi4DnYVkiH7m"
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
