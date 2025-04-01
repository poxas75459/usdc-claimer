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
    "3Euh1gVLf1zzNKWQRmTGhFtbgqbPd3hGs8JN13v4JJXQzzwJntGveNY7QdJYAxv5BitWWd8pcL1nvpGGr2RnAuGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7gN3nLEcrBNsqz5ZJA5CXr5bhWv42H7o8EfTNmXkn14ty81hjrwL3rjWmiLhvFLFdMWi2W2K5X5pfeD2CTgRE7",
  "key1": "62qnR58qwbvFr7Wja2JdSNZFA7Lqq5Dt2c7b6Q88upg6JCqj3PTrXQZvddf7bTsPFJiucMaqknAnhCjDrG39STMV",
  "key2": "5C1CTvj9s6Ltv4BnVWqxtjwzHqNTpkL5SWHCjMRMttMoCSgEH1EMnUkqpB1soVmZwLByb3oohEWerCSLCuPi15HQ",
  "key3": "2T5uNU2LAqMvd2CE3QQqEfHP9r8ejW7wijNETCMoKvxanbmXfoHLswog2qLaSNAz9nLrwC9NxmUDEP4mmSwVhqAA",
  "key4": "cFvz6uTVYsyWeMkZPf43A3LeVCMNZZZPqFuSdMKo8zuHx96WrUjHTSowHY1WKvowT1TmMBTvgwqGJrgssYiuNfe",
  "key5": "588AowpPQkamPXZbzzTv2HeygQJAFvZafVHsFhQX3iSRP9wm3t8tSx14jHyATkew7xNBLKZeKqAnCDw7VCsC9pLX",
  "key6": "2cBZ5kAahXfbFvH36graaFcKceEomz9SfnsyWp4rxyz1V1edpTJ8npibmq9AYhmQdg6feiAcFJMyDKD4cfYAYKVt",
  "key7": "5zS8nixU9x9osLtVXoxJZc3Ntow649ahywDq6UMnjpjuGU4SjZx52mq5PrVZ48WxZu2a2sEjb2Nwa8KsJVjkW29o",
  "key8": "4Y16LK2P77ZuLi29xPk4CX7U2b6K3y34aYqigc3TZ8hsdRLEFofq9AvXcpuBy7Ut8ExRszY1WN3tATVF9EL5onfQ",
  "key9": "3TRXuSgb7YdWJozkTFpx3p2mgBfiuRwQwFGwdUEfEdPwqwEb2zU1kqiyrx9nKsYUcyP8dfv1ZrAwvrFZUVjPrZMB",
  "key10": "2BoXDFA5SyDpGLfqXK9je7EfCeLU8uC9j3mRdypwgzg7L3GxvzJuUejrY7Qeap7JYBLm1bBGBYYh93P1BywNpMSS",
  "key11": "5KHPXwjMFw5W9tcC8BaXy9EuzkRjE5n5Dp5wiyAt69ECXpZ7fDC2YMXP1fNL4HsjiWCBLccZbzYMiqiwEvZsTSJj",
  "key12": "4ivYLj9E3CdSNGuJiCGG2gHcRVyv2EYCuXFHGzoQMEMCqmjEo5ZaB7aJiA1ffP6ahzazzWFqkMyh7TL7CGsWw84X",
  "key13": "2VBTznEZhSBZqc8Veb2dCztjLG4qFT7RR9gTJ1RkyPP5meSDWrRUY3yCdyX24UqGxJ839CCAjdvbe5v5KXsjhSYc",
  "key14": "4BouWJGTqjTiMtTGwhbP3PKvyWWrj8YX8CbD4ry1V6jshTcCESTK5Ustsa2DEDivAeX8tBdLcHwCMqoTCcpqPsFA",
  "key15": "3oWNpmCGyLprgSeb6GE17eT1aSjBp25coA8nEZW2GWj462BWXX1M4TY1qZDdJDRAwLrZqB3PABt7jHKVHLDjCSpo",
  "key16": "2hFEqBHNMx3b79pfx9z4pDRQ88VuZdM3kXqTsS47RTmKVNkziGSAwJWwMUV8yuhJGMyizzjRaAMzMYp5jJAoXxiD",
  "key17": "fUFmF2LXspiMHtZTq4z4TYET1d5drPpzAtmuoYxoVYbEUCQbNxsYgB4fdWPe1GsekTm5L9UAeziFHRqdQxPwg9j",
  "key18": "4AATmqQbNPpUwq8TZ3aTYVPXjCRyRcTPry1MeoaVa1CqxaRTXewKdRL5odEtT37jx6FqiAHF4adWPN98Y6by1RXc",
  "key19": "4fUSm9gb4iwDpMGcfxC5zpD5gnvJLY5wkaWXQp9ehCVjF7WEDLisZhQmfeNBBNHHegmoNgti5FVQNmkHUxRgU91u",
  "key20": "4pBp7KDu9zkL6dzAsXLYWoCtKuvir9iB7BVB2CrQkaMUfgP7cf8g3mGhg62oN9jih3ovwbMnmXaZyzF1BRXfKZHC",
  "key21": "vDKwQ8TJbUGkNSCedo5SuXBr4zcvi35KTTyv1hjotEuFo9ULs8U5MWWFtu9cWsJj2SReF1riFL1MsNkRgeR9XLE",
  "key22": "2YmeVEM8jeiNzZJjY2TeAn1mhVv7dv46zgVBC3kbLc8hqe6udptPygGd5rWYtzzoKXczjds7RXbPquyVzNHGPDA7",
  "key23": "39byPptLJ517k4sJhTRkonvdjrabUngdT4rYmcssghKz3mVyFecPCUhiGCdeyfvzW1Mq61ymv5xTkK3Z3V4rti92",
  "key24": "uMe4LUQrqCAoMaK7aF1jm1iBVMd1xeMMbdJCaxVQHzhvf5gnhsWAyxk7c9h6GGHb12cwGC1PQayP3tD8JAySWem",
  "key25": "3fV41hWE1pUjfLs5LE11hKM2QZFyNUcKWmcJdsdgpr9RehyLGAmM36Mu1RrAjq5L1y3f6GTuFBLfBGys2TeUzaAK",
  "key26": "576V2CBZeFqZENkCNmoDx2ZCG5KiwdRFe5F1eF5NuXWXSHHmobXvjxqbfhUkVMZxZCds6MZQQ6uJC8dBxm1cvNMb"
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
