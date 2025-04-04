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
    "2QoYcq6jU9SyR8jqDAhMNqExX3NxX7rfmXYE8ffDRPoQCxVzyS3b6qvLsu7gew4X2b9sCG8oXiSUqgGsTRfJzUCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpMxZEzNNYFnMyg2qeepw6TzfvP5KTTzUCbSo31fJXLXswX3UEzmCJPZaQQG3JMPm24ux1TeiyL3vZteFEaqMYJ",
  "key1": "4Dy8Q3dveaHP5bs74YbWGey9cmCuTbivPrLmz2nuia3zsSU66NjqFyQXZWsFs8xBVKpm1aXkgr9DHP2iKb5rMym1",
  "key2": "2kDgHLCGXc7NCLnA3L35LwJKLXtEb9KRshSc9QFUudLCQSCSoxd9ykUtRY3miq34WxYwn1mDeAMxZJGN38haiC6b",
  "key3": "2hEFNMYpREh4Ur9SA2FdfXVhdjhMp9vAwDhkjmNuaz5HxFYofLayLQLmQrUamoMVfGrxHSuVZFcjXFyp1iw4d9Eq",
  "key4": "3RKJwEnGCeiRzz196RcfzuGK8vfVen9zJLWyU2aJyQgYhoHM48PQP3yNybB72jhw3pQvCkmpUGjvy3WTxRFHVWcX",
  "key5": "5m49KEEg3bERKRJwTe7ECT64WCDypfzf3FEnaMurhER7qN1DRaULRKTUVmW9fTv4A6aDrw9eZkcx6uSwC1MGfsbE",
  "key6": "5JrE1NP5ao968vGs3xdymQdjHJYKrnaEEa69G3bka9znvNLDWM3QJW3exGYSpLMBATrvKW9pgEh6Hh3SbgvRiu33",
  "key7": "5oBUXbsyjB3g33DCGNARWfHbAm4QqkJjyzHvpdb1DD2QmsUcFa8WMmkoN8LrFZ5rCzq9AyKFFW4JZUfGAWiY5AFa",
  "key8": "5QVfWHJtCdgmm5f9iyn4umtCfaHpzx4M7HB722V4zcDrBTuFdUMbpNRpXo5T4v8t634wR5zGPfJ69x7V3Xokj4o1",
  "key9": "5b1w5n1NHHXV4hbGQfYDK664Ja9SnA4pAohgXC2BgNW58iq338gSdLga34s4RzLuvcoifnZeg5DtFcEv7JFPkucr",
  "key10": "57Sjtd2qWmZcctKgX6sh2Q1Y9jwyL6GiFEAHnYtnWbJxLWXEKnKcYgQ2LRXGNDbM3SLvUTj8he7yYUhW4rARZMVi",
  "key11": "5TZLpSpDS7WVXYrD7VhDocMjCNJhdeYySLHRc5XPXZ6CDQp2wkSURgihLcynLHXqAKJbHarX57vTWL8Z6LCgiJVf",
  "key12": "PjQroHA5kRNoegWcJvQGprfZ5T6CQ5NMupTvCbe4kQ4FWSG6AjxrL6umQfFtaKKRWYszojCvMjqzVrcd9hdCXzW",
  "key13": "gd6hPhMWTPTJCKxG7LvL1mDiin6nfoSZuSBMn5cSaHLfJqa5DbshwCthu2rHAt5EAb1RAg97Fxtby5kdd9ECKBT",
  "key14": "5N2CJCKdgjqTWCtaZHcTWwn9KFcVkAPNMppWWVows5PzErDP1fiiA7VzzZbjGU6umQ7xZ5dnNUf4z2dY5x3MmwHq",
  "key15": "qCAgN82uDQNrdn4hxXSwcHJt3CpTpfVdpRiz32XBeWMuGYFiiTHQ8sCcQ1mh3JBq2JRtAharAt9WqrR6MjTGgKc",
  "key16": "PcFM1pWFwDQrjpCFva2TQw9jmNEwjqHqTf5kEQD5NZGiyJk6h72an4Wr2jfBncbouX93E4THJjUfnkVmSVbhccH",
  "key17": "3d1Pa3KiwQaM1vHzpgf2GTDTqoGzCtLacumfLAFpVyyvqRyzYhkRPnT8HdFZCEQYJDbyxETZ8MNMbZMWHsagHyAd",
  "key18": "5QQYyPcdfaFNSjGMtuh9AYDDGEWD64y4pzUsDPs8BGAPyspkuub4DME5qsbCi5QA3SWWJmi2ffzjkmkvozSc3tg3",
  "key19": "VUvtKJ12DWM15nPc74wiot9gdNfydyxXLcErWU7R8M9EXwmEDEbK6WmY7eSiWdsuCDMja1Ckkqy6t6qb5RqZzsE",
  "key20": "2GSwroM4acMkDu5JrQUjAr4wyVQK4vcurPYVqmLrkYSvvVbKTGMgnUUYgJXjuiNQ8vQ68RmhTUsBe1MPKW4V3Fa4",
  "key21": "4xzmhdAN7KQnogukDu2kEnwRzu6srHp8RgSHDa6oDRgRrXPBYeMMyxHEzzazYzDVQ8G5mCj4aUCDP4YH1ks6L3Ma",
  "key22": "UN9wfUKdP2i8EHePgMq5SQkBWx89DUx32woFcDZDnJhW64FZX8AZEHv9A2mbfudLyn66CFQxiLyngnP3xQyVoFV",
  "key23": "XwWnGcgDzEojCMRQBnH5bkaj6vm7sTsoEnMK9bQsiAnWe5wqDna8bwfujde7DSv2kTmRTDaiWn8VeibB9h5abFH",
  "key24": "2MLG4rKvqDcSay6o8YukguEDx1jyMu6ppDCYpn3L29jFwrHMXrfMNwmGmGRL3fJA1itMe6fx1mYzaGUA7r2buTQp",
  "key25": "4Qu2PonoiUBYo5zVLU9WtCr1FnGMztVRD9Bie516qnCbs3a7fS1sdFSdqd1viEbRL9ZLtfLcJ2gb7A9KxGRmid9y",
  "key26": "5gDFGZeCnJs9royWz8rPGD5ULaBiQgYqnWtbsDVUrQBhepdX3Q92rLPAmEqydq8mWT3oSftscAoWxu1j4JsgbmuV",
  "key27": "3waQyqV5t5opBnCfuip9SEU644C37ok3txWvr9EiyTY5oCfE5RgrTAhUxc4stEjYk1otr7D6U4GnEf3GDhxvC6Ec",
  "key28": "2HWSpJD5JnumybNqrvfhoM6vYmxXzxdvmcjtx2smHY4fUSeJkgtgASdpuEH3CwnNM3NuC2pZfUFcfw1GEPrQxGbe",
  "key29": "4JyW4FE8pCBXgoaK5awhKiye8MEUgH3ihkLN9xPj78UktJJRSMDQXBQx4JLHiVyATcmo6S5DLBivDigBdkaEQ8GE",
  "key30": "2QPbGyehaJsWkbHgF3vqbuZgtkz9kQW5n9cxYLpS4XRcMGo8LrgmbDwns9NAg4zGwZwKXENe2t6uV4ZHJguSfYz8",
  "key31": "6taetmTuFU3whryrovUv75uE83ABLraq3X8K7Ae3mrbscW5LkBGjPBPLbZszdQDNwBVMxBZmAX7rSPTpznuoT5h",
  "key32": "2PaJ92zSS4gVUtSadt8bZYkC3AnDyMSWrr7tKEJv8YFn1xTtRgiBTiLcbpumJeMCGdGqbHGdF7E4dFWYKqHwee96",
  "key33": "4QSsV4oYaABefsHSW45BnyrxeF5rH48La2U392SddvX2jofxQ8Z7WPVwBkLSMxK2V3qNHD7btEfAammr6YtsDKQV",
  "key34": "3QdfKL73V2fYC6rEeSCDkXgLTxXbbZByPhb25KjaKEE2WgySFBg7P6tvR6nhCtVPWCWWUuPVRXyNUB2hs7PmdqNm",
  "key35": "3jZH9upeENzUBmiTjz5aKSkZMhwNo9d4KKZK47xSCj2ciZN1knGAUcbsSZzN3UN1eRdtL9G3cVZ8esWNDN6LUa3c",
  "key36": "25GyQSXBECxV3f2St9m2LUrwK1JZ9QSvKtbGLTFXHrNBwyiiLmyd8PMAhKDKdpQEURQAiWsoRvtyjRtoc4DJYsF8",
  "key37": "5Xb1cxiieMiVKyZj3nXmBffup43h1AAaoWAS6eP5mz23XU967LBSuUnX93b1VAHT6NdMqUSbL6VzyRXnughDKU1r",
  "key38": "5gJrKz7gEiT1ME6PewXk6h2CSxCWEK7wYTR3vDvpD2E2QL62L6UiQoRKLrD1RzCcYheyDpjhAYbih4wHrhh9TZGY",
  "key39": "42vQG7oe1couiFiCz3PTKG39KUZe6fb5xvoSADqCs77mxCWDJEsEy9Xq55ApaLdj6LT1GY3J1rMBbAtiyAfTaeZ8",
  "key40": "2SuimGo8dFB27vt8hBB3SwQM5zQBFyHbc5V7hERVBYu3qyK6NCuFr8fABxwSy6a1MxANRsjiKmpbhqPH7FnhhEEq",
  "key41": "3jtANUA8wJknaPCVJT2d7enxKVoco8aoxYnSxTGWXwGPXuW54RL4fx3M4KpK2MzkociQhqjXDNmiUgPz2whPYA5",
  "key42": "XFfbwu4D9HKrDd4eUdWmTFKHataX8D2yMJpRWM8JLhYJFM6Qt3smpaPJb6dVTAfF7ZfnzdVxayv8ukNigtMrfpk",
  "key43": "2nccBbhrPoxScmUG2F8rUHr7uvqSXEJLgkj5G6NA1j5FisYsnp62LYvYWD64LQFcTX4uYCszzpuaWS1AC9EnofU9"
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
