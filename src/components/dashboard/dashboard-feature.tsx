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
    "TGMTLMZwiT1SAnVsu6dMpjVH2qZTUPQYqfu74FL5v2aQyRzqRVVzrEfg5C2LTYN1CPSd6hbYkmTLCwnpReHi59U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zUDzx4wrb8mnBRZTgWXFXavzGK9qqtRDEBxB7UEAMapggaX8v2KjzWdNy8bsQxeMEkEDwntA3vMfCqjzBanXZdw",
  "key1": "2mHt2VZGN88dmXSXKQLgmKqa76YtAXm9ummND6uvHtd5TGbR7xmXdA71CgfAzAm6ZVtNXbwEYMxx6hvB7mbzq7Sc",
  "key2": "3NmZEZYsgimTiocK83bLadEx8u1hqXEPmqpN6uuLmrPCcyfUF2bRyDXgLxijs6YDSwCwTxTMkesM4EUG8Uipiuc1",
  "key3": "41LVUAFzTYa774JE6BJKeV6Xfb6cmSXKjJBgbvXeWqZRLhGruUQthW3sfN2UJ6QRJ55ov8xU4DRtY3bT6SMhNXb3",
  "key4": "59vHfoyQiMSwH8CXSUHJSoMWztWC2jCQMjnMEiU9UieLuVyLX3MwswVkcmXUkzzZqbHtarNP6byhHGHs9gwwXxQZ",
  "key5": "4yVWarMpyKCEujMLemgD9xvKbDW2hHie2zx5dHV7TnhBZxvRkRqqgnMogwjvQNPzyf2WjNgPC7TPLaYpX97SskpW",
  "key6": "vhYsFxG6kMaYWx6Dg947ooZCDWV5PXbKYbuyeyf8KhhnUjDoWPDon9crJ68orKp9yfvRXL3Gtb59jRzgyPRcoCV",
  "key7": "3LLcCLevX1i6bvh1dideeZCtVV78CvKy4TtsRRfwX7sjoyU2u5DG9NvqMrK4LEBYwr1iDv89uw7t8bjnDHyz8L5K",
  "key8": "46JKKCfWNN57L853sKeJGBDCHeqbnwwWPPB4AG5mBrpjFMd2vHf2G3a1r5xA1HNPANEoybhNu3RkY5JTmCMEPE7e",
  "key9": "2FimoJZporTadiEF7zmp3M6uHYfh6LtbSuzDLmtLnbeJDeoyLA4HRdDQYg1zJr1f23GXGe5isTaSu4q5BJx9VbwD",
  "key10": "4AuRLd8h6s5EgZoKFU8cYCrp9Zq7Zgw8BqPWTxc7S3Hn1SpVyvLfTTu1QSExdTFteXotRUFKfAX2Xt6uodt3NgBx",
  "key11": "4BFioapbSkbffy3tdSfbq8iA7fXBmdTP7FjDwmabG2b9oNScME1raRv6iL9PvwvicVFMZ2v3qNKaAZXvWuPZXbjB",
  "key12": "3hr5Z6MSD84QW4Vz24ynufsutKXghoLayL1wFRcgZ7dAuymmw1XiY5BR58uTMCKWE7XueDKmwo2MC6EQCgQ5XqLg",
  "key13": "2LjNKPYw3sQgUzyQft2YfXRQTDkVd6VWBNZwmMHg2xLnB66FkrP8PP3HNVZEwPr5tBH1idFadVRyg4z1uDrnzXZp",
  "key14": "2RaDBJXobYeJTryEoxBmMGvKwMGVgrPgGDJt2KXH1GsoZEvGj5HtfEjZFwHf4higfnk9DRbsgdt54Atngy1Ugh4Q",
  "key15": "5CJww9wadzb97DamVghvM7jRZpui6KECNBBRYGihhHg9tU2MvacwYfJJhkUayk47pbZHsJbEwunQdbJCXCpAHuNm",
  "key16": "2wwYjoB6fcLwMTCT2FK4VUh78qqPbuG3zsbUCpnVECcEBug4M9d8oU6J9WvC6BbBZjGykaZC4v6CwnEvL4ZFfhhz",
  "key17": "2QUEn4vjS8kcdjyz7qEE9p2GutX81he356qLgNJA2BEAurFqE5AHBt8nAJ2KoSTi16b6x6yZV4sx6XJKLQRme9YE",
  "key18": "3ZPE5Mcy4Z9THw2PUMpBkYx5xGksSDywjrHZC9b88YwSsGCLxMSyug2cnMzvaXpoi6XBxnQjgH6frSJjbmfgPvGt",
  "key19": "5y8791cWGNyGXsGKB4rMMuHK9GmAvttrjhRpYgKJ8GrAqLBSrkLNJUPqLRz9zqaaDDprtjNqmhhWpWFmX4YfXE8U",
  "key20": "x9DVzisPvGSaTQ9Pi7BmEWxHxjVQBgcyvfKWrugqkyGaEu3YVtydt9i5JB1mdipExqFhvU74zz7dfcWTvzoX1tr",
  "key21": "pY59suvWmp2vvRUhLqE12Ptfo8rozJTNvj4aAEZmf7tY8QESZVP7pfgg7Zm6V8dD4KphLnf36N4yMaXZNu7NE69",
  "key22": "NuZUmnfdjPakyWNVyQdJKRcuKy2sUrG2YuRdTc24DqScYkgW7DaJYetE7ZFEZzqmHqpHNfWU3t1ZcUvv4vYBKyb",
  "key23": "5czPC7Meb9MpDKicZ8E4pzU3S8XSAGSfSXzQLFGhf6Ca8g7CnDz6dhqitdT51z3hcAY4URihGczfUinpwSmMvP7w",
  "key24": "22DuhFmENhXUcG9KMeHpfeepE131oZKRQXcqrBoCxJGfH7PaMQDeVGDDhwdEAWDSujU8cp91jKTwAb8EmszYXiVJ",
  "key25": "3f4aSPojhtSjGaAHC842H1ghG7DSo9oYoHf2rojSVmydkRadJrXCWuc1Sbs3tU6DU81yLCrydSSXnx6tvW4WbJwQ",
  "key26": "29g9MEv8fMk4HCa5AvNPSoS4vAJVL3KUEqeyYaSnWAW8bb6Qa57SSHrCVhGBsMu5HtkgB5zL93WCm5zVAVTfeGr1",
  "key27": "3uedsb2BWjGpRxsQA6tr54bqyX28JaRj6KQiTXAkvEaFxhqt7EXzUag1j13ztuMEEgB8kBYpqFqMTXChrBrDMZox"
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
