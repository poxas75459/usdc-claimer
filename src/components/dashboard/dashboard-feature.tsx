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
    "fp3KS5AVog6kmQSssrNsSiJhZpRKLSrpMeMsR2abN96GDF2m6UXFUuqgg9MDxLAsNFd9rhSdeSDHCQwfyB4uYjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241W7f9ZzJ1SR6cnN6uR88hfPu7y4JuqpPWqbi36UnFMeAsmGpNCkDiLc2MjvRjg5AGMwYoTDphEz1HBUbCeAvpn",
  "key1": "d2S3594zWnKsY8FaPYJTNoU9911gTxzaYf9P7aFC2JtFLA5qcjZrtGBk1jfkqyfpv8PSWz2avZvNgKp1m1Utttb",
  "key2": "3T7g6pjsbi8drrNuDbeWZU58Jy6UsVNfzQ2gLttgg13tnzQJPZdj22heLgLbB5T92QkxLF2sL9ryreYK4GZuRR8a",
  "key3": "57tv88dxf6EP78eHhAcBG6MDy3LgkPLEC5g2thYVB7cHuYTdAzHP87Cen6U57QXQV9oZEzCpc3rFhjKv48RaPRwa",
  "key4": "4BcXPRWwKRR88bA2CmcienmXJ7cKTtXYJuRuFGL7WBYZJvdNxReq1Db2FLSsEJubjp7nmbELiD6Tgs4ggzyfX8NE",
  "key5": "2BjAC3ENFc6PsLhm5rwmrUbuMhz5ALhEsZv9342DwB3cRLoNMHT1k8BnyWJtoNG24DWY6SWJZSzpXoPVnjKjLg8r",
  "key6": "45Si6dda7iMgwwetddh8mZYds51eDMkbhaE4mBLnmi1TVCXryzboUMVepJtY1Bq12C7CGFPfGtPY3EuojvSR6HUD",
  "key7": "sTm4vgSAyyyc9XLAAWhXk1yziSMrnk6N1tDk1heAjmoFdfZctExBAUt1QAkkSXtGiTcPiUiMcY9wPhq5WkjSjUD",
  "key8": "3yzCXnWUMNFiDtUvTrhfF4KN9Ddo9dJtntoypGoYPZ8XnG3hiZ6Lxf7WzpFGQHnpFz83rp4UWDjsZrreYzYs1Znv",
  "key9": "KmfHEbcfWPzo2NYErGs7Hj55kpxrseMonBxNMS3BnQiDFT3UYubxwHMZ1Hp4bw1NG2iUvdgaiWyCnt9NMQQsyEn",
  "key10": "a6A88yZwEVzpLN72aQVRbU43Wq7avC1tVe6RyHsnJft6G7RZLwMRf3UQo4YYtZpJkBavYM3wDVjVsKagWENdMRg",
  "key11": "4W3pPa23gZVhUkWXhHNBg55KjuNJ8XW6RegdGYY38YeeTp1PyX6ZefmUSyP27U4REDMWNkZTpSbyoXuvRgiEccUU",
  "key12": "5XCMgAc8xjBBCtGH86DE7Kpw37YPNwuc6Whm2WBhAnycq8GQs6Vubsr4LEZLcuK5kWFYGTquTRnhAunm6kCywZn3",
  "key13": "eBJkFwas7iydAjtXp5CpgesEJpzTo44hZfxeRK9PQzAnEipu7iCqNr7gr35ABmbQ1a9cAHyoLYC4aGM12fWeQPT",
  "key14": "5zV4ZfExzUSTUW4qi1kPBA8nmPHWHHtGBDVxWKS2SZHUcD7UZjkb6uxr7mWeQkdcAQSTZKGcGiiSSSES1mTGWXXv",
  "key15": "rnBA7htUaUPq4TTYkkQVCVL9d47KbXmaSrNkC8fkj4jPhg7CzfjbsY4U4k4A4Lhxy6sB93WSgzXkcZn2KG6iDdo",
  "key16": "2KmZ1DyVqFbzDxJ5cX1NQKjT6CgAqLJeg6QPSfGvznamsT1cecp4Q5LYPeaSW4hBSKz1NbXdstX9c1jgVWL9cQVb",
  "key17": "3jxn4bWsFvcdr4CoEA53EHcnmtdhZEsLK4grqxQawk4VX4JYwUsw2A3kR2UDRiyJQwJRHBSbn5DEMMskhJALA89j",
  "key18": "3oNdMcoDvcL8Z4ch3W2Ekx7PYZZEgUhm7CXveu63tefaQhr8EeaBaxPk4wbKDTMmYpCftHMqwF7zadqjxvQr3tzK",
  "key19": "Qss57SLBjgTGBqY89Sac6Ez27aBJCqMjo73FgTiaEtnJHc5mAHQjaCGhxtR8y51Hk9UjGxNoPR6LkF2B2Mxwf69",
  "key20": "4sdhh1Hf1xpwLG3dUHF4WoN7sahJsL1g1wwwatfiN97yVpjQzEEEigBUrCszTc4QkcMD2SE9X8N1A3n186AdvqMg",
  "key21": "27XeTBbbqjvsxyyJmM5Nbmd1iaYeCKmFQdPVecPDQqf8dR73jdQ8CEwuEm7waBioGs5UbQVfET18xFgPRWUdgVQe",
  "key22": "J1QiZ1HSSYHxYt1aFjpGj5ePx3ifhjjyWgLPHuSbMGUVndL8SScqPYQ2L8CY7zQzcrr2fz19rrxgzEZVnyX7VfP",
  "key23": "3rrNWA2GA6aY6oWLrbHGQTv8bbcPNZBEk8VUMiXf9wRQrXHwDU4aKHoyfT7a1J41HrvUDGYdv9MkfdV8BXJcaCWf",
  "key24": "5yhZjSh2yS2gy6KHLJoDMJJzoya4L78Ye6RiiWBHkosfoMyX9fzm6PRYSuqKreAcst5FHpm6QdP8tygTutN59fL",
  "key25": "66f4d6x8TVzQDSBXcSXDU3RcbkjpDkQc3oB7m4y3iDNLrnbm3c6Fm3sjzEknKKQBFgKmRL1swRND5uvHcVpLV56J",
  "key26": "59zrRqDaP4YBd3VgNSsp8taH6UBp6skooJ9To19nUbLT5ZskcqMFHC7mQzsEpNcdnScdscnKj4mWU57HW3vWwJuF",
  "key27": "3ZsNFhF2Zdueh1uq2PrRcwy4tSnH9sqFgcnbzs9azDGrrCqTwjm4niucrcr93mVVtP9EsFkLnpu6WqPYs4V7xSo1",
  "key28": "5HotCzMoYLWpwzVPyzPrDbRWRyQGqohHRKMXNaTHwEiwiAJuaePbchsTdH1ML45m74bGcRcZu71M2yE4irHWQrjd",
  "key29": "4TUNws5nPPVvF1VytSpgKTc2dTZALSobMP3HemucqGqmP9rvw4v2TWsh4PQTqixsmE7oodzTpB8gT7Yp9CH9cfEc",
  "key30": "3VVw8Tx6kBWTWTd5UmQ5WUNiRgX5jyarvG6MQnQ32xiV1t7vnggjP748mqTkWyhpEoMWu3yvAnhf2Ajmh9Vbz8K7",
  "key31": "LUgAbvtR5TmmtdzTtLcRHqzaQkZ5KvmPbKKQ4giPxeWVYzHFKzb3KCzzHygGzmGqxHx5RpZ2qyGu9umTT9iADLu",
  "key32": "5hu6RcYBVEKxMAw5mawLLfFiXVS17paGtX1ct6cAa5QueoVSdMYAhmkSRUieKxHXgCyaoNsVxdoEpG127d6XeUZ4"
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
