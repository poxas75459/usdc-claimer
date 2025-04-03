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
    "UkHodYLNFstPxLJvHEnY67fFjQMHdcSYktE1t5NoTZ4B1pb81qn9zbPfmBhyCbkwJHAr5ucKFondhqLvNvp7ugg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGWVgZnC5Gf8inU7y1Uzc1GSVKg3hwehwPaEz9Dg45VmCYKHAouqU2RTjHPS8VTJcgqEvgLNUmJmArTKMs57tmX",
  "key1": "4jrWqr8aFAWbQg48s5KKQkFSVeHnzkQDxmobHsjRhv1xcjJDkXdaQQ2MKrh9qNunF8LMe1beHxLZPWSkB8oPKsfC",
  "key2": "VwmWYYhv3unYPcUFRDhM2YCUCFaG8PyPW1w3YtsMFEcqJreRNd4bZfkRKxcM9kSFy2LFeY2o8cR7BwLAdFDgHXj",
  "key3": "4qHTrcUWgTEaK78T7bFKPou5JynHVqyU2exYWyPQYWA8iW77HVMqE3MEtP8nZ1zYEN7pUxfoqpTPfnuAtfPmjRnn",
  "key4": "4BfxATPWzd9FdGW8Yu2328Cf7KTwVz6Z4quezUJfsco8znDfio1Fup6erBPb9iTWRJGm5N9mbFYyiJYs3kCgmzQv",
  "key5": "qjvFTuipdhViPUGMXACbiYEZZhvoVuS7i66wreYuc9nQ4tqzxXaDaGfErRnsoJGiZXsmzWttTLeQscoenSPMKkg",
  "key6": "4ioynvWKFD265S7Mrh6DA66grnSCzrdAMafc6DbnoXAyFtLn3nKxzNhBU6UzDoCeZANxDXfciScitU4Kh25WiukA",
  "key7": "f9f5Rcwy5R5qRzJohFXeurap6Kg6dSnW18xPpB6ntGANjtgj81gPqKTaN5rEPm3V8vtvMyPSo7CrjsCcZS9r9t9",
  "key8": "DiEhna1qFnva1uMD1sYYgoFnbD4J8dgJ2pnBiaBTwAKYf5gr1csAcgudrqeFrpD6sEevmsY4HpzAXkM4Gt4SUZW",
  "key9": "rAcfvmCvUoNGAQtR63iwiNKemcLRrKdzwKpx7QpZnw7q7YvLU7U9KaER6HgG4zURZTkUoESg4Y6ZCGoNSG1ya3b",
  "key10": "42BVYyoS5CeFbvpupDeXiPqn3gMkqfZHSohhLXSv2nsWyHr77jyvcKjxje34TfJNFGWiYs5PD83TT4bh1wT5vHUn",
  "key11": "YbTADbaaAjxgSjkYAtCi5aDQY621CGuXXyiRSxJyAWD6HRh5z54X7zSMPEihzxyM69jaykL36ap3MTphwWpZ4Qt",
  "key12": "3SVzBFVP2ueJLyYDsiAapamoidHuu6SpTNBRiATVyhzrgD5Fz2ndBUhuJrnqCcYeYqqPxs4qXXSN52LNNVTFFata",
  "key13": "3uEQZDvqgoKXrqYiqk7AZZw3kMuLkz19oLQ2BiSJR5AYZXDKCtvFiA7rVoG9FnLjLVGQnWsnaMeKMsmasmHoH3cy",
  "key14": "2QVGRGVoK8UHShwXSq93Bro5miRGrLP59JVTTCUpzvdzxpMxQvZ3oRhHfwjgy68PhcGwRZY29QdTcCYtYfWsffyy",
  "key15": "2wwoHQ1iy9gGswqo8t5QpydSZBbc6AHkRKPD7V5YRXUEmUoWsxzVKV5XjGcULgRb4xabYSBXwKwDfVjKXLbuUseB",
  "key16": "5jpkjxGpMbnXpHGyHTKVhJP79a8a9JsyMu61aQrj9fdYc1NyVZ5uY2GPns9DVaS3BYUycVPeJbE4LhY6FwZm7SN3",
  "key17": "4em1HhvtjJifnuT8VmVuBXdguSwQq1fM3Wjgr6Nto1aPE8NMY9oRPybJtTuc8sMSi9AKorRWyDkD4EDEPLCjKckD",
  "key18": "BHF1Ht1t8uJXynBgJYTKgfZ3NxQJovxaRnTvvWhpoLhccr4YiUqABW4N1ra7euR3RXidSrbDkXw5jHYQDomKJAr",
  "key19": "371uNa4Nh1HAmQyL82nevXuPFxo7ZHW15i1VHBv26RLpk31E5XBpBA5TFKBvRypeNQYXnWHeVjb9z9e3CoKeTkLF",
  "key20": "3Ksv5tRkTnwH9SXmL7F4mdjrZWNgtTh7aQMStrmCCWCRaJ3xmjamhMxMH138WqMuJWvDJZd2JK4h9VBn4zFZF5jC",
  "key21": "5GEiivggNRveUAAYLAALgZ95V6iEsPGgDTx6WezFFFh8AXm9gc9pPmSQ4ikYhswa7gGuTZp8ja7UKZhF8ydocUE5",
  "key22": "4Vxkwdn7fu6KH6abKYSKKkVopfXzB3FozgVfdHGNVjhWTkWcBZukdDjyUkuNWF4mCxT6szJcM7TGeQeCXHeqEATz",
  "key23": "MLpyuGBVvadEgiGoNkkoSS4RDw7jwT8pL371dZyEewaXtnrQWfXhPKYLkQQuAYRq7UePdeyrRjRcexNkrzFhz2v",
  "key24": "iqJydLNGwqyFeFvrQ5Lbnrj8okkoLRYBw5jzH2HZuLYKt68sriCnwoW5c6co76QQzN9QrBBoZSAmqoqqXbthEKQ",
  "key25": "5bFZvygwsVwP21EUjJQNQMSScJZuokNaR24fW6coURqqgYngBRANEXhDnFzL5JDMDGqhkrfhBgFVGxwj7zjUZ4QC",
  "key26": "31cW9reX57vpvRopG2N9CTv2ABTUYSxis7YQ19NToFx191Ety26xJRApkUp64KR73tt88AsfXqZoHTWt8KDgbZV6",
  "key27": "3Vquned3p43f8k35j2Z2JCfRb2j18wQb46jSisTyLjbEm4DV7fguXVf6rYiEB9BckZetk4EFjdBYXm3ThyC7tjnb",
  "key28": "3sGvjdNeYUCAXF3YGAXtgiTaq48RVujiB2LbscDapZ8pbppyee6M5FrjtUpcbX5gU1MQJxXbJSSFZyuaeqgXs1Zy"
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
