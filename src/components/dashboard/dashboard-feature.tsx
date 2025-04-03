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
    "5i1EhGUbQccejHAmnwAwRJmkd5ais8F6N6qgG9DYjXAdRuEQ8xVTe6VYwRtZ6CCTuZCodC74cR46Kms9CfutaJ7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AgChM2UfBm1uw8pP1kNQU1jXbBBu2j8K4FGXAwRKXGsZmaG9ML19bCH5Q8XwSRYZAwnvUg8L3HijskC5sbzUog4",
  "key1": "53VLuqucE7oyc4M81bbrP8YndUPgcp9fsnebEvzofhY6Vr1TNxgQpNdUSBYsZex6WD1oiRHpbmeK5NPgd92yXdiY",
  "key2": "3J9DFeS78Ei3KR4iTid8CViRG9wEHHbZSVBnccPmRSR754nm1Mmi6jpgHKnYSKJg4638rVis6NzsnExLvfuQRAGk",
  "key3": "5xjJuJnDvkcVzAT6MzSBrhL1wq9AXr6E1Zock12nfRRAYNHZxgE12ThjnFZSxhEWLEDFFPJhgDR41BYfnte2goZe",
  "key4": "LoRmtP8S4Z3jJ9xm8p78c2ytjHTrUthn8meY3WVSoXxsTCfXwAvAfXqxkS9ko6kahYvqoTtPLUeqwkynzNGVfoG",
  "key5": "3A77V9uDw2jySFqfx6nwVrBLMtJbh7eZPdWRYAtPK5cw3z1vTNBRhiPUaTPNL2fdShkhsLuHuVQ1B7gVie12UMZH",
  "key6": "3UKWM9hEbA2kaPB4WaKGSDxac34zsfhgSDaGBJbAp3kY5H2KRLA3v9L8PTq7dj7BegR6F27L7f5fg3shi7JouCJ9",
  "key7": "4etZoV4EqzdooAuwCfLE3bp4SWDi3yM6wTvCZmvLZJdMFB9rg35J9NWrTZibRW9m39413dwLYmHNZzHgSUwyoYXp",
  "key8": "4cA9mrz28a4qxjHwv3y7KqSZarB4GjYAiLrxZ6ht3272DsZf3DENszKKmDVDL9m6AxBjaoenHye6A7WyBkmGp24E",
  "key9": "4AVQuF3pBkxTjDDqQLFXCXbH7vJYo7REBFvSrxk42ZMFRCKMWULvoCzqWfeEMaMdU4WF7K6p85g2Qp6RmhPxa9Qv",
  "key10": "4Wp4G6BgxV3wXSHftuKJSQTxTvAeViLGd4jquSeRKFhHhywyuMsU9WUh7b2ZUepq845ycVapk3hjhhAg5wwM8Uf8",
  "key11": "3Bf75KgvJc7dBNTr96R1iqf8A1xGaMq9kRfLgbVvChRLqVKDRshWtvFG1TkTcLHsENQ8pLiZiZcwvZzQxkDkqmes",
  "key12": "3Tg6WLXtrQ9T79cJaqGWjDxvsfsc8tDQ49f4qTyx1KxgwtceDPM8WjGoJcYAixx9864W41JbWJERhJ1XahvxUdpy",
  "key13": "5P8u9t8LBHLD5GJEhN2edhc1b2yXLTsKfoKbwjcprrUSerWty9rUPfCnAvah5nL1x91bT5NzhLpgnvqQcHj5hqbP",
  "key14": "rGdzCtbyTZ3ws37GSfdiptp3JdCF4kb21mZu45nAhEvCTh8GNqiStxeNzZorMWdwRczQdRkehDFwihsXk6zhXBz",
  "key15": "46UWEwmmUH9nsRiNEFFm9xWc7rb69LcYCZpXDf7zs8aKQqZeGYphJW3QhCJpMCfvGhcerVKxYccRpEMUqY8AHTdz",
  "key16": "5aCuNS7ok8WrXU3UbwdxxUqfxLUWaGbyS7SHwzPMc2rLJXkSgf99zHuZ46X32Cpthy8dNqQivfKJ5zLUjhcRJc8Q",
  "key17": "2gL99uNhk3h5VHxoYschfQNfD2xpk1cqfaSZCXqX7zsfvGav6p6dfTNumEr5QvRN1cVnYPEWEBLmybn7Z9cuQQF7",
  "key18": "vsSxnDau1NSiXpcn6iuuTBBTVMfDnWCCAgLYSr17WoRbZpXcFzhSdKt8jqsDQKbbmzfax3Jh6u6J31e3cDmRuDe",
  "key19": "4yabnYVyqTdP8jjig8Pcg3B31QsgTt22ctVDZExteSpnoGmTWMkziUfgPq5dAFbzhdn3UsT34yiZNxbVEG4iTvVb",
  "key20": "3f3ZYVpPHPhZGre1jzNm9QnD1KDjAbUyEdmUssUR7XKeogBnUMBCpbu4yPa7eFhr2Fv15pS3pu25x9dzCELfjfrw",
  "key21": "56WduqNhvgHN3CP1pMCabX2fwfQt38zaCiVhPL68HqDERzi6t3F2X2neRqNSkfDwwZwMM8wQvNtorRY9MRcKZEoq",
  "key22": "3AevyvRaZ4dZ24svaGZBFFD8wJcVBFPuRAxGYRKQpLHm1QxBbquV2kjcVSCvZSmB2UvNcSCzFU5KwRbEpAeqX9Ws",
  "key23": "61jRV9Z6FnmxwLN1AyvPABjvzWxBRGCRn4LgbDw8arvexdFmCwJnQLVyB9AWS1pMorQE91s6XNRGmTxESkEBL8oY",
  "key24": "TDhAdJ7fbJndtd3kYkZw4ytXHUzDnMs9eS9GURQMDzwmw6zMLvBxQ4rRYrGpZe4i5occTfDpi191H4B2gKoUpy1",
  "key25": "5e92eie33ZgFMokpYLJiuCkXb9RRz4NGT5KKrYeLSqfDWBRyrPr2UbQCBikt9YWkTbiAe3rs5yYiX6qYSGFFPbiK",
  "key26": "5DpUyPun1ML5sfrc3HTpsi72ENSYQYLNyGoiRZPT41RUbiHFBpEa4cZPLAHenVvRRPmZqBKT1ngBcPxMxhkC9HmV"
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
