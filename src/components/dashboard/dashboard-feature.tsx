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
    "5NXfCQcqgJhonB5dsF4XKg9RmPaAXtWynFjAg6jbGw2REXqBiGZTZtvWyrobFWDkuMyu2Pnom2K4JrAxpQSejpmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVmSy2ZWL79fYkGThDdMU5WipDnB8Tsz5nYmgQQN9y5LDeY7kSAjm72RBM3AcuK1isa58SnGstcJHu1PZJ5o1bp",
  "key1": "5Rxmdiq9mwdpNjvsCwjrkAK2NuahAY4T7Za55j2TxBA9n9jqKmGSUpVHDY1MED45zMQ8FrwaDSSxQp2kd2RKohu3",
  "key2": "3JfwTqFRY44ApwQWfLhieAHKnQzYq5VZqdbsQTZZFZAtpkB6xgnD6YU63jsBwsu69sSMTip39nowfjzw8E65ksof",
  "key3": "3KRZvD5X8UoogjQ8YfpsXBJ8C68pp9BykHWMCDrFHwFc8S1ibgrKEfZVfb2VT36jrSzxfHTVL2iqrhvixu4cmxPC",
  "key4": "2C5aS9MuDHT2k9F4DdiFu6FkB2eCknvZAMcPktyTjj9nKq4ttLSweFGAvEZCB39F9cSExrTTpQz7kDVUC9Fri9Bu",
  "key5": "3sdhPuxVoevPnURzosfpTtn2is9kseaiS9dwqRddZT1yxN6qWMY9zW8bYrsgBvSrR3AVMfiaC1hN3CPEBsavmbYb",
  "key6": "CfRj34yLoGfqYeifgQSdGzfgQ6Hkc7qrZFGc5MmY2x8d7YR4JfjTREY6UMeK4tUcxcctb3zxgttg1MyL56owsLG",
  "key7": "5WTPTS51vcpLxs1mJsPzusPQktih1qCC2FB1goSq5tUrJGeDFoKxapqYeARtJo4uGi4JEyGMC1V12Ae9n6qZhzZ6",
  "key8": "oKme1kpEz2ZLorDD7JNEEvq3gZZQEDzHhH2keijQ5a7J9HdiSPcZygT6FYLt69cxCNNEc5KES9UL4basbNyaN9S",
  "key9": "2VodjhxFgbh2T6MPdtd3Yvv2XVki4T6FoC5UnrvCRCc35Lm9AD9Mrj4pfX1PrfTTMNeYMBVoC12Tpa3yZqRMYiTG",
  "key10": "4FPnJU7gy25MY8qVcRbivmyAfe7SzsdLHoDBpJDA55MDsSfVZxA7YJgqJ4my2yW8qdodrfgh4d6H9Cn5o8pD6L92",
  "key11": "7BT916Ak5ZJNwvgZAyyKwUv4sDHP1bUVFgX8oPeFAFZUmGpzS9RmhftL9cGbAzV5RtU8RV7z9VAo2RKf14svkjD",
  "key12": "5tzJFfgKXifq1K7iQhCU7FFUYgvQJZmyuw2VvRxmAN4hqyTHodZHmp8PB9burh6nsUr31ajxYYTM1nqe7PuhKqjv",
  "key13": "7osGNDdgh9tSd2ZvzJSibzrweLgPiwCqnNKbPcimeLWXkXtWabieqMtxWCBWzw9EN7Qmin571dDncEynM7J8J7B",
  "key14": "3rrW5hR3JAUrcrDZQVPGz2aDhY5SG1CgKt6PYwn2V2bgydVpQ46g4AE8NvfeRBeKUoruAs6wg8ayN2veaWSp7xTi",
  "key15": "5UBYUPaCy7T8ixqhKJy6qtRzLrsL3yLuhbpbxdVAp6F1PDYZQ1LeutKrxYQfTfbDXLsyAbFhNiWNQQrsc7xCMFuy",
  "key16": "3Fa8qsrtjtgfjxdBZPAYM27K4K1gNBtgBzoRp8oqSsGns1anGTdiLBrpYKYgTunDFkcA4gELviMoWk1VXvMBLRtG",
  "key17": "2dv9BgdbFaAFL4UwXoGieJZpziPnozBv9GcWQjHoQNB9f7gvChYb6huQJZPmkFMXgjp5YGjF5YKjWY67cWwLM95S",
  "key18": "3iHrBpkU2ixn8sH343GR5245AzHtobBmuT4dE2Xr6zQWCbZrHT7Eju1jQe1iGj65G8JwxX6gRyAPbi3r5ne3XJXu",
  "key19": "2HFgJ38bvrkumEnRxArLCgGtcNN2oHQLbjYQPP8rTWfdxXgj2Bifw1ZxEgZth9W6j5PRFHtHiUFijBsxBE3srRAo",
  "key20": "2UEbJ1HCy8djPy8ysdqdMLakK3Ek69kdxLEvneUEZc7ZHwWfJ35xJuYfBHCzfybmckzJ8MpwMn9sjfvPx6WFHcvo",
  "key21": "5nA8ex1pB2kmxm4hMWD1oCz65voQNcV86fC37PLPViQ7ZKEJH5aHbhGH9tY2XCn58SHkp25yhogCsomFK6y2MNug",
  "key22": "1v1B3A7QuiMTDa5btE2kgR3ymhWvHsHqpgX3GRRTSq8EGkFNfi16dJ4wuyGXXof3gpW1RdW7bqb9kro9N47nRei",
  "key23": "3QGDDDEGNfSJcEZTdNeHbGYfbjMyHQfRvStudi8BC8t3yFSmq6C2TgmER8U64kVU6M2AcjgUVfCnynvjvZGryEeW",
  "key24": "2PJ3NYu6fgEUCWxqWoxj4drpyVyNwEAmq7RQ2d2CkZau3QNgo5n8U7YQ5ZxBPD6Xww4kx8ay5RQ4Uhsg3uR8AspR",
  "key25": "2J2eVEivvKrmQCM4i7fy7kEe5GFnUu9zBNxmFC4GgeBeb2oMfDkLzJRfp1znQU9w7mM7xRqxRiW64N7mdtv3YTUL",
  "key26": "4mXrdEK25QdA2nn2oPEgquVTHfmLLXDDegA7YkenBUrdq2QAmnLbpqn1FC5T2VWswSbfWbza8A5sW1nLKQwm6krF",
  "key27": "23VmX2r93QUEUvq9eZq1hUZtr6HS6oLFEQ1s8KZ3zVw47hszjxEf6jFgCQqc2ZbFWXYD85S8XApZ3webmpUBgZ4y",
  "key28": "2CyAAdTGfXbvvL4zhXquTvg4YujxVdeVxQEBq14WdADqh1RgVACLovPdAJbv9xokaMYD4kUkojz7yyzvCxortqAd",
  "key29": "Ph8fJUenKeKhJjAEcN7eJ3hkNLLpGSZHMZeK6AMhwzmPWzBj3TBPEJG2Pzinc2PfwfF4bUdpiYD9dzbmjFdik71",
  "key30": "65uhcRyrb5PY6Z7XLTnyYFQW8jAndF3CAoczkKLCDMCYeGZVRfau2N31akJt2zoeLgAwzT8JjKWJcDPj6M24DRbB",
  "key31": "58ejJYk4vuqYmqeoTsPubYG8Bn7YxdpraYas3uovnHrkptueQ8JQkV483WWtbsKYkSXBpkNC2hUAb51RHcN8oacC",
  "key32": "5hdbkhZsFAYutHjuKjSJSpaGVpMZQArdEeirKqAUUoq61ZQE41pBgu6joSAo2UFWBjANc4Gm468Rpz7MwhvMCpg8"
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
