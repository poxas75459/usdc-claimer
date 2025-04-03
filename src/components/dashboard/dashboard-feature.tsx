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
    "3JUMxi6s6KV6z9p16AVcbSPUsb6hwhNfjt5y8PeCgfNp5VsGmgVTA3XK8ANPQZnqmpXPVBEbCYpMQ8rt59jpn1Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FH268hnt1Wx6LzuhbCa5JhQ91Z3ssAHVAQi6F19Ka3KF5SzbftpKYGofjoMafd4MMgNTzFUYbi49VFb3ffCQuw",
  "key1": "5m8VAquTn16rBVuMt6kVm4JCwDBCEVSzLAx5cSzfcSzf5ahV7aQjihMUvR2uueiatqBC6Jyr48PzWVdPoBXhhT1S",
  "key2": "44AwArqaF2BDN6SPSzZgqHisTPzaca67TNvMRsLby7MeoDRVmCaX4hTqogUDYrgC5PeFgkCdmVWBuDQoq9FG8fU8",
  "key3": "5CrbYj9q1xHVcAG9k6jybE255UM9cMr9t5DdF8LUH3G37pXiJriSE1ePEuTCHQyxhAYiQNCkF377aAjJZLtRNH8e",
  "key4": "2vyg176xa6cXqrBAWPtMG5hJYR4PtGueWPL7ygoZDAhcPCBUPkhYsLoomsp5vXDvNHh1fPKw4xWFhT4PnvQMfjoQ",
  "key5": "4tgoH2ip6gF4HJX43vxcEUdrihX2xJ2vo8SjDfsLNpDbHakXey4UkDEg9qxUbDZnifzHKWn4zSmoSPP1HY93KLfR",
  "key6": "2tQxtod8TMeBLbAAJ4fKAqxQbLRuUb7ZCm6fbLc4AsZZTHPDpvxq9F6cd8Vxwe3NpnPhDtv3XYpjtdWDURfhFgPx",
  "key7": "3qiMNt3ThggjZ4B4jqU9JYDaCNMghLxwBddmedstUgyPd2S5VN2THkZmzFoDgNVjk6LucUR5SgqeL68sejKrSe4P",
  "key8": "4NsJru7SWPg3XTYnChAsNKgGg5semRHejAXpPaq9nryLoCJX93Y6wVzKZRamxCxeNyj5Z23dG8XuP3EMHHD2tCTR",
  "key9": "3fpuAeeGEeET66hjTKSYhSyC7pee37DAE5KcDJqESMU3x8thjw2iTMvF2fkEAJbZpw7QgYJytNpj6qiYN5cN4hRk",
  "key10": "ixddHF5bXhCxdYkSp55K2CUqPz6fkTWmcm2h12X3iqfPUcZapYfCseiHj5fyRmHn2apXn2CHM9LLtdgsSnC3C6o",
  "key11": "2c7GVnRNfN2bzTi5C7e3ph6V4WxfT74DGvdAAqiGhmid2nhfE9wYq1RAuJLpxqeLrNAJoBRc7bvX5CFjCh2cbnA4",
  "key12": "5HtuzoBfCeA8eB5yiggNQZbr4uqapYXEHWXuo1nnutRGyuRDqd1kTcPHsB2dtj3QivYcTc7mCDj9FRJ8XJmk7Zcv",
  "key13": "4LeektmWecnDiNsHyaMvks1XcD8YP5EBZZVEtSgULa5DzVzB4p75mE3TrnAG2LcvHs38QmMvCd1gPvicHMMp6sMR",
  "key14": "4LjmzSzJ1RJspB6DQpby157ZfTcGPa13Z5EUjLK6DNVC7d9LNau7AWEN9T2guazfKqs3rdFvAdhyJJ8ozbRDRjSS",
  "key15": "51NF7r5eZpey7qj9P1tVZtK4K5f4mbroCHR1EdU2Gbh3C8Z1SNXG4cLjzwNhQq449FLHqhfGpgPBr9zoRX2SYS1m",
  "key16": "2DotqjhWmWmmanztdt1qC22QAwLPHnzsBsrSRWS3xqsVFLsUd5oYTUvr4Jum2CaAqK6yUkrhnwViUzhsgkup754k",
  "key17": "5JjDEdG8rRgbFUYc3t5Eo1NWmjUgNR19JgqUQTw93PwJvSpVBF4XzVbG1F9SFwdjVgUztbYoKKWHZzcsZEaPnaiw",
  "key18": "3CWcarcYhyPCZqdK2Ny7qXsAibaCh3Aw7FprygC8S7FJuiXndEeZ3ujABikc4uW1pgjjkfdGMg3QPMv7USbqmZPH",
  "key19": "3LuXxCdgczzs9kvikLwJsXuLgXuRofEixFfhxNpVfnEBRqii8x7rdkwa9yhDxVqkj4YgsWvciKWqDw9CPWiAadFz",
  "key20": "5RoG9kmsNDcZyqVx4eiazvJxsvmYjGE7WaS4pJ81izW9BEU7BKB2f43upJomAzNu6Q9esEGGwLwsCUUHZPJhdDkS",
  "key21": "2ybJTzL4FteUMihUydfcoxq1gSQG2pQ6o5mTmidAThAqFKgsaQH62NVscioTeonYm2zYN5ebuRnpT2JzvFqxkH2E",
  "key22": "4fNMgdKgo56VqMFHGfxuJyWWUkkP4sSMUpSwHmTW4QS8D3LTe2JMCuG2SrGuwzks7fcbooEjxaGN156Dj2TptM71",
  "key23": "4jZNwphNSDpy54TDgcgLc9uThS1yNPYSCwoQBYjR3DZyRa9Gc2Gnx7QWWHnu1W8CYDoNLd9Y1SWCx6kmD6Q3YWh8",
  "key24": "LcYqx4HwhNw2W5Ng2iW5agDNq7R49kuyTDPRTyopAb1juJbgQho5HNNfwpACsDTHLtHU7uBo2Kv54TmU5N2KRGv"
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
