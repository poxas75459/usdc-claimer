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
    "3vmV23vDHVFhTy8d5HYakt31JnvYtJnceh9bm3yRQ3FbhZpJDD5ByU72edTvZsuZfnonH8ZcesqsiHj4EYajn2RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NRVsTfGfLzZ9Z63M2hMHyLT6qLWRxLEd3LAw9aAK73GeVgQJgVi1ab4Xku46aUno5zXa3owCv93zhYiAMmcn1PV",
  "key1": "26BuyZNvP7KJnnrfKzRSN7snG638oH8vvCWUBsugt6anUbxwEJKLTVz7MsKTUz9ejgyyYeRGCcu1EXYz3sVSuFY7",
  "key2": "nNfB69sMCtUmEryeVvYauuQjMntpyAZKyB72qdVpgCVJqx6RHw1dPvjqxSFJ7ZSrK6iYdG5uvRuuyMpdKcysEVz",
  "key3": "dtudTHMUN4Gv6tZrudRXLbUdPi9bfzKkGraCDp5LDhKWNiqFE6XWLtHyVqiPsQcZHB1qFaSD1MUpCnVftppvCak",
  "key4": "3qpCvqqJ2iQxnMSM8YGSAD2x9pUcbhh9JeUZVq4YpspRHZGeTHBdNEHr17xqjFXjWeYKkCsvvk6BCWg85ba6qW3T",
  "key5": "3RDUxEgXfYBBh7wHTGgBQxb3wSGcUdSGwDa6CJDRZwNes6XTXHFqEudTPTP94RQn3tC6v4aicNmfrfid6boUomVp",
  "key6": "5Wen58tnBxdgzsmJU4Ktmv97Fx64vYcHCHyooCvDoq1hDxSyY8thd2pFJqGkQo1rTLokg4DYhZ419aNqS1m268Pp",
  "key7": "F6kZoBcfpqvj1foTFiWZGufHBKyEJXbvioMj9zsJKKwTezLtB9iWKVVswjdPSkTmWxwvJXE9hP4SesVxfj2kUPL",
  "key8": "4DoUWpXCrF8dvCFGnoeBSorjohyiFdhnm1p8Bs9GsL6ohrpKVDG3doizuYuL12CHYpSWcv6T2RqDw9cd2bLKgcSL",
  "key9": "3jT23xTDz2pxAikfea5GyacnmRv5S1vNtBFMXFScGYBHEmWWBV8gzg1upVggND8jQzLwoAr8jX61XjgZ3D3G1E5o",
  "key10": "3x1Ne44tTkniGjFoPehpT2XuUSZcxhVnDSw3HyRzbPBY7Jdywu1Pd35Eaa9F7v5YnQkfDK5Rb5e4zFgjKnSMT3BD",
  "key11": "2Yy4WSP9krkLwNy47YpE2dXef734bsnPg2nAPGzYhLLMKvP5BBVN8megoxtZ5Kx9nYvbzi1ipUroeJV2Fd8J82KS",
  "key12": "56HbREPuPvxU32BEUuoS1XdLHaqmZpCbr3zdNGyxZvNA3ADCmgTtn3TWAMQ6TX5Fyf31n2pAV4UPpQFFL1LUo7Vw",
  "key13": "2AZCrBcRcCyknxn6147v3SCbpU43vsTKeWMVp6knePHntYh49G36pUTxxBT8hQt93mLhgmA3bkRy8gCYrg9ajqNk",
  "key14": "4GqyHzzdfzViTpJHw5h4bQYbEKsjLnbm4jHL5f1564DsuYSpbCcEZ4RBhJjrr758DaPqiZpZYbrUP51Jb2gR6qs4",
  "key15": "4NWWc2DL6jtHSye3Ucd6ZgkApyxi3RX9wPoJGhGFZ5jmEm4c7we5wMuZq8vCUdckpEUgrVCsuNP4jWzdXbcHJDxr",
  "key16": "4VDkiv3cMWrWTeqriZsyB2x2Bohe3r3qnRWZ4zjMHrNVXWdtQt5nQnZHPJqEa3nQAEy8w1tGaBC2nk25A6MsVxt7",
  "key17": "3CtPRDoLwCnpn4kvzC22Y9onPxkMbQHk2cKkqVDyPtuSzurRzK69dQb2XXV34LRy1kEeCELDNv9qcjhSCiv6TvNm",
  "key18": "4YitszsstfQkNzRHnZLBK97smJivTFo5tfseygTzivQwGHKhvXJ1Ktwpq164sgy7T8KoYuxrvYgGjkXRK9Le82PL",
  "key19": "N7BXytiaj4NF4ofocu65CZaZifQrye3qswfNB31sWhfAibQMWQ56LKvvPmzpD1KfkzY9dbnDXje71pegWuoX6q7",
  "key20": "Dwir9Xo7QAYb5yHko6aGwHRSFtSjwZoeBpxGKNbVEnpPAMW7X8TGdaFGfPmakr9rT5a7tj7QxVUT4zZ9VRHmcV2",
  "key21": "5HWacofHW1L6kUZzuYBtoke3XoYkWsix8Pe6AKeBjxAnemGNqRGAaVvcfvKr5CEbWpYFutzfPqkfLrifbymf8Fnj",
  "key22": "4t96ZYEUZfQ5rM3mPQ5DjWktaTEbcmGnwwaj4Ru3CemTM3sYgiTgj8pk1NZvyRGHK2LexBwudrP9PnvT31RwAvnW",
  "key23": "2HpeH4Bx1tya3A5pqesKmXHEnyLNc7FfmZYkpki8N7miM7rqRS7ma34GTHRJU9rxz3RnDrw8XT3kcZei7zyogk1D",
  "key24": "2Pi1pKMA6Rzv5NTrAMmUjShB8M5LHprhHEzdLedkvZXa9jfubo6ikZDxtdMWVFFdkH7CYavqWdLHokoUcBexRsJH",
  "key25": "EhBqRdg7y7AS9fKthzHRmgdmA9H28TY2sc88VhqMjNMi5Gdg6SpkW4hSHD846cYnNfVoZUa4NwSDvL17YgkEerJ",
  "key26": "4vpBLMEG5MYGTzH54KzNU6ahcSazjw6kj4xhfNxaKtszPXqZdnXDYsbCJ3CrVpMkQMMViMhccxVyTTjXrDWgcCqB",
  "key27": "3snvzqwjSqT1stMqodjXZUfbXZ3U8V3UzKVgjrEo9RXgoyfsiA5iudqY55GfeTSLRaYiqb4WQKHMp9ZCVCT2G8vN",
  "key28": "3qeTiyR4cnT6Wq9DrdJxb4C8bDukbWDu9JTHeDF3ETm7rJFpMgJhGm9RfPwSFEwtL2N5WMukjSrBxyHqDgqEB8wG",
  "key29": "4UTfnceTh6KZKTgLy86PY5Far6ncemcqtW5RxwceGvn559QoNYzVTPKnEZrJGghTJpcyDYb8ou8Jr2Y9kxvebMao"
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
