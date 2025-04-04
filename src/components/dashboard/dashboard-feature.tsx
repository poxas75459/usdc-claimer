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
    "33w5DDMCW5YGQ1BhDH9Lg6bxHT7mH3vPeupMDVYfDUyafvCDfsJCDpY4EuBXsUttxoo6YkdNpiXropAw6JByeya2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QquCfPgu7bb1B3qBm9tBNothnxMG6sPwoaNn3T6szvhuWdofvshXCbTpcoEm7CamaX7YJErj89sQhqkx4fmKjTV",
  "key1": "2yWMn8EF5sRkjGpP6C7GCX9ehMmt8z2HMUMPAs8bVcQmictJX64Nbw9SECWZuvsP8DzSKKKKWQNnrRcQkQ5hvfaD",
  "key2": "269Diw9H5zAhR5gxsFyLE4H291E5NuaWkY4ZRhMyqRM8izVY6WP1MTdBGByT8p72sYLq5aPvaZDos6y11fq9mto6",
  "key3": "2mfPyTqfCCB3WksvsSXarh5mAQGK65F7TRCrbYHot4tnZfx2Js9a7vSRFehQAEwtmpCii8ZnxenHtHhFFU9JSYm7",
  "key4": "4esTEeTtfX7nqhe9B28kzeikEZVCZmN3Qu2FfwdinVZPn4jZRLBnGy765PTAbZLVoR7cMRMkifEozZYaprN8EmCb",
  "key5": "oqEf1HXiBkV7yx9LXNfSS7fJyQohn1iavaDnwYRuurbTHtUaKHYkj7WC2JJgw99Ur5DYEMzrQoQid94nEaTyyoS",
  "key6": "m7rh7H7MUzxYmpkyHCfknkCQaSYSv55G3MSACPtUSFzKcPD2wnd7wfDwRFWsVVXpkTyJh9sBayrGuQTwoF2jd29",
  "key7": "37YWWs6btbPhxmsaTcM1xfZrut7BNafo3VuTk6ARRwtr5ycSzFgs95HscQDa3zfHxYjCZwNqLUHwvc2DePu3eLs6",
  "key8": "5B6hKo6VrZDDbkB9gXzoQEtLRYagshQjkMVgihoymp3GjxDrG6UuCqTLjEnGtHcUZ8GHgaUUERGUCx9H9GddmyTn",
  "key9": "3rqH7GSRTb7x227wCMDwUhSoqYdsSbPwrqYmFfTgkicGk2KNnpwoozi5MMDKhkaHczYHKaRbk6WTk6rxZHCxyKB1",
  "key10": "2u4y1SXHud7W36ufzvVHaURSunryNtyPSdN9RLkh5qTXSabLuTDzNJPd84eWtWsgzHwidPPWJtYyB5E9PSpttvEs",
  "key11": "3iy9vHyLy4wM9N1ystGMX2Tej1rwb2ZhYy6MninyDpcN25ZiVmJLToTcTXhi2UYxEnr4TYBfSY1uMXA3L6rxCiCb",
  "key12": "3sgrGuEoFQYQqEGMkpTimQPJbA6hPRhJXGtBHxviYqaWDi6CrMU83uhKNJVmt9hLDvNBX8DvB9ch46S5p4MuBJxg",
  "key13": "3PDqq62bowusM31RrCioWtoivi7k1RZMxJf92AeyxeA6oFT3kDFeaqsHxuMRkcgdE5fCGfqQi4xEdMpAcTaVcGcz",
  "key14": "59V3GPSgzp3tvhXQx8BVJ6LSDH6Tbu6a4JF1KAp5eGHBSmFPGJRkm7iv8WMbg1GDRok73rxni5oSUQ1HHRrzpVHX",
  "key15": "3YBWJsNSZcpR3XBMeYAgZkU7a4v17Z4kqYYmrNmxEiZw8QZRTzskcNMvWrKxojaQAgKSuEnDKwGmSx61jUgqWwEG",
  "key16": "2vcbq3qg6HaFmXgiw3o1HCAuCy48WPqB553y4jTRNx6yUZm1AbZY7SkXah3kQKP7u35e7q8FSSUajtaksaAViEYa",
  "key17": "4YoSwze4n6ccKYRcVk8UcyccajwMhhxbh8HyPMwdsPxjyw1XdyXFcuJ9JfCaA22gfiuRC7PapTc4qtYxyidvoMpz",
  "key18": "4GHTbXgsCmXv2qLvaySEfRDgqvDo2Vnrcefjoe37iVBo55QDJocPcRFAk24cBwPgdQA7UNwyVokFeasUMDKWossN",
  "key19": "3EeQrVWPtFncZQxvs67c1vdgW2VPmyiqFkwzTbLsvirnNrgm8DTMcnsWG6SJUer9EANcZhgU7QHqPdcQxmRyaiXZ",
  "key20": "5d8Qx1pnd2o3nJ8RT98xiEKBxGe6PtStXiHECKUJYNJE4fRkbffhLTXXR7hxP7NsGwCE4WhfpuYMRHE6pyiwrZkN",
  "key21": "544F9A3kZUajGWRpUDhopwszXDbu1nWC8MvAmXaT67nLWELg64jKtn6xmd5CcRvcu5uVjxawv1H5FXKjH2CCeWPK",
  "key22": "5E2fimmxts6BLD4kxkkisUbz7RKxw9X5eY4CQLNNXgJ1kig1kJHeX4xNTqfDLzR6BxsUJ4C8vyKM9ZfpiKkpEoDz",
  "key23": "4ajwNQ2MaWeL5NwY8jEXkFMfTXQwWrt9HtNquUmcpiWkdEjnz1iSJSvYbHP2hkwYqu1V9Z2FHQiEwiRdPMqHXgc2",
  "key24": "3B7uSvQHd6rJxFQw8wXS5VF3DWEDbQL8ru3Jr1S5aLuKXT7CsFnarnjSgrosP5TYW2F1RRQpCSn2X6fPHEjWZ7NT",
  "key25": "2oCNRNSV1ioQkWAHgTaJyuYcGgbPjVgrSHirVixbv462w7AAYDCMfBgW7gXPKAom1WtcV5k6MqDsbuWemaLXV8sd",
  "key26": "5Rxx1SwfRyuydKfjW24m4dpekoRs9UEdAQNq2VLYj7Aoa41EfWsqrRDYVhkmApAyk3ezTnEFjDBxmJSj8jJESVEb",
  "key27": "49DELPT26G27EDvbS5FUqdan1ELC5YvuhpBHu1oeeTPg4CGChc89vhuULKi2fH1MXbZWpSr9XM89H4nYdf3vWTjC",
  "key28": "chH617Aso3KzRZkEYeEA3k518CSJjZpZrcvnA8PnL4qMCHK9MuJpmKXte921iFMCLEMS2FWb2znpdi36BUrxJkf",
  "key29": "3MvmRyWocsY24pbkMXRVuXFvy1AUYL34Nsp9vzkqRDjEvCV5MGBDaJ2D1rg3neWdMYj3Tm7ktohkvVwKqTL1t8kw",
  "key30": "2bdvY2cHFffBCpkspipCLeYCjTqiuLRopfGY4h2qZf9kGeWJLN4WHcyszjx9jHa2FavZxQ9SdsK3QVkbHXjVJYLR",
  "key31": "5FCgVDksDEZ5bfvVYs9kFo6uEyeKbS98XfWAGik638ytmLuXAfRf6d4B5Vn7D3u2QTGAPgVM2L1Y2KGSGeRv8kTJ",
  "key32": "4QHqvKACv5iBj5jbFeAK5aub5fJqyKsXK7fUkVuAujkyhFpPXKMXzZusW8YdgeCz8et8jPWwG5YqdrAHK5ufpwP9",
  "key33": "61gEmPftzWbJssMRLcbr28yrzkaKavqo7KP8uGJq7aTYgN1j6tNWhQJomrWcXB28MHGLbkhtUfkFdrZFMgFWhxyx",
  "key34": "4rKvMmdH25PjT76rghEUcPkMi9TSmnKxHC7Ay678U61bN5L9yxiAQ8DBJ25cCvrKVdHKQgGSzDFnhopnTSNG9r8z"
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
