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
    "4jtzqiQbF8DjpAU9rgjZ1Lv1g75Bar6k595GXdWGFazeVFrUrdifcXfDLgfxivsqFa2rYaCRCMjHPk7sjAdqf9n4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBHgmGAYas7gTK3ib8dhi1WsTY93icFhbT9cy1Fa2UJ7btLZcHkLjEbqqV37iE9imCwM6ihrbmB37h1DV4jkZ2r",
  "key1": "4hcb9DF55FjAkEbbU1qR29vdK7twH95VYkXJ7j7RSXBNwAjm2HpN96guxxNkrEtRAPEt1dTzzWz47GWadXeUuviG",
  "key2": "3pSTPzpow4H3pMQcBrw8s4tVqFzJiDFrJDWb8PvWx1LCNAwbaKM8cccQLB6Y3z6gAy8EbU3sTQTWSDAhYBSkGgJk",
  "key3": "XGJoDh3ihGSSbnkrxYxUqjtdiiAe4wWJiRGLs1MVnYx8XxzGf9fTnQtMfhyQKKAASFkUR52iCWMPonMH57Kxfm5",
  "key4": "5Aobs2MtS5cEzgCMZfHWZbyXQTfA7afXUmpzTDDSVmH62D8XWhGxLc3Tj1ESTuDbwfUoWUiqCWfRrEwSwXca61wv",
  "key5": "5J5ZymC5SxdtboE2BSfMzjiSUoAqNqRLHPTSn6WCgzFPWRzfTHkLuUYjP1pzqSQdo2vq1wyn2qFE2ep9ssovEMs5",
  "key6": "4SgdHNg3XSjDKoSYbNMooqzRyALMGKTXUqfycpRBD7J8R8y6opb6E24TJgCmCTrzPbQzPvZZuqsTtXATNCko5oKZ",
  "key7": "SiTE8dHxR834JdN3EjTbaD8dfLk8DDpgzsv66gXdLsCKoKjR74XsdBWhpEC8FPEyu1GZhMGQKaNxJewGv7pW91j",
  "key8": "3wzdZW8pHjU3a69oWm9L3uNqAJCYoisyfTVSwK78twfPws1VXEza47FNiEAfedYQdBoQFJWedBWb4WTJMpuEEdmr",
  "key9": "2N5gbe4gj8oDwMviUvR9JyWwDfUsNWYVDHTXd2Fkd336oDVHhR6DEcRqzGPBsQAEATrkrGMuzWDMf2wSX7pvyRDP",
  "key10": "42Nx8QacV7BvHVt3SWPh3Gcf6SiLZ9vHNWoNMprFsRVjELtixbUrWqA7syNSDDkC728wMmr8vowraMBtf9MGsehT",
  "key11": "2wjeUg6NKNNJvh4tDY8HhhhuuV4RD5EjQp9fsrDDv6FP9vVfwLfQ12uTo7xgUo3u1aTLS1HTwsr4XXGJCADV1d4L",
  "key12": "27H1NvtYpfR44b6HQHsF5rSc2SE8MoVp16m1yE1w1XFoVCUj7uGh2trFoBvw1RXXysGk5W31U29cZQ4CjwgrogzF",
  "key13": "48C4746xT8y2cGD4Giyyq8qA93sL8dhQ8eFY1iMnpMMbQZXiUQZpSnNMiZ8hvYpr2YUYwHLmoHCfAw2qsbbS4Whs",
  "key14": "2QQWknaEDp2C5gU9gXqFnRKQeu95zjDuVJxaZzRUkMouTaA8jTgiX7MKCqGt9wyssYaash6kSC59xM7GjHUx9wTA",
  "key15": "3tjpATqgrnXLqis4eyxnBjGhaUWT7gafSGNokXakzJADNRQNNXPnsfesiEQhdBh5CR7pv4cApRKpkfVUNRMryaUw",
  "key16": "3hp7UGer7wJjQz7NCs5gMJ44UMQzcEwr92NDVqVtZP5VUXUTokpJCwCiz8YR1DnVvoTT7xiVYyBAMWqSJKuR27wH",
  "key17": "124VwiKdkGxhAdUsNqhFWSg4K8TAhxRB1BEqBbygNNyVyabFSUE2fLe71XDMm37yrVFbScLPrJoK6LFgNWDb2AtV",
  "key18": "27jcXiWEDtpKjJNBNzFZEZxpv5yHC2GUKqwWng5To5SpqfUUGbyXrY5TbUseLrMBkEJVEeRwz1vYeyBrDwtsweXr",
  "key19": "5RNyxgXMksNutadMmEgaZ3X3Q98kHZtMe4yNejhw3yotUaDiW43j1CgzbrxtD1WYgrt5u6UtVj6t9ahXsDEF2YSD",
  "key20": "35Us1g16D2LLxWc7u5WdEjoUoPzC86tMLeAECBBE2SfdoQfe9W78Mqv4RY1suHuQC7zKfRMbaR51pWrHFwhBZSwf",
  "key21": "2zVPFh9eADxrS5kbdf7RLZmcJvEuXBADeYY7qQCTto9y6PNyeeN9XvadC3h6XMNSn62zc1v38v4mt1KpXdLrZBtV",
  "key22": "4UkxaGbfpbZDLgNDWkW9835GiZPhspSo2ZGaEHwTzQjRbaVLUmfgJmsgxwYWQS2Sm7UsACNbW93WzM7UediYKuCC",
  "key23": "5psnJVFsr34twCASm6LrbUFT4y68AgfWQNCCqLrP7RWB7yepARRqwZfyihZUFUTRMNgunPQdGn1QgevQeF6om8Q9",
  "key24": "GMSmbhPCNgdB4km3rUeFiFdTsFqBACsUtKVS1vTnfR9hVHkRi2EMBAkdaFYUx3BnBxho8798AAHeYGUVGdRd69G",
  "key25": "32J66ib7BFsAECVUFgwfap7JE1bGp4CfdBnLVF3LkgxujZGQ58sSfgTm7zoRqPovc2vBKQYEWkJnqgnCiqnR9WFn",
  "key26": "5WN5XaaCN2b4axC6o9dvLaJCASc8YCVHnbiyXvVPBcBxvskxz6jTCeUVmnE4vHzDb4Eqt8F3hdn6c1Y8CQedUwGR",
  "key27": "3AAp4ukgAokrjFtrq34pSTfcSgkDUsmok8Q5hdUTTrZ5PjFwdQ28iCY8JrFfqJWCii4B2jKhwUTdnxFFghazoo3R",
  "key28": "5JRvnrVsRcCwear8yDRJcDvJoJsKYBHoWA4BBkhBJ4cWtKHKh4vieW4HoisasqxUzj7DvQSq5xT6sZ6QkXtRvoum",
  "key29": "3aUNzqf8NcEdZWYVuaNBPQQWyH8ajhvvoJW1inZ1wEbQhuLwxLh98Aciw254dh9k6CJbFWiegLMndLjT6Zz4gfP1",
  "key30": "3xsorjmibLiLkdYHvDMuLQBi8PSNaMvVGALFoqypLKJ9erb4MqmBpqM3EHx6aK7fARuuWWvNoczy7Z1LDnkvdB5d",
  "key31": "3S4HD1hoDj1yWdckuJhAR9dtr4CJAQ64ZADgL19ZzLbcX8xPUjoLef58WouA3xLRcqs3Yy1TMsbumFv2FXexSZdw",
  "key32": "2b8WWaMHbKebJou4fwW1Sojn87pYHKE6R5nMAttPwCDt5MAZkdoV8ipXy6JrUaKpRid6kYsYYe9ixdVGFhU4Rj8R",
  "key33": "AFq4REFmCJ2B163P9pxcGY9493RGtGGLDkoCf9ymtfN5pD53C9Sfyymc5XUw53YoumYwi6L77hiGWsp1HNUM7Pv",
  "key34": "3SRENiZ1rSmxm5xGejychtSogKAy4wHa4D7t7N4mgN6gs8fj6UrPMQprzgyai85caQuZzA37fBPMuLFNcwSmh8jJ",
  "key35": "4tPFK6cA8uLDPsWtKuvTbbus8thE1JY9kjr6F9A76LqPJEYSYr9hT9LY47TTMSHsQi7rASdaKuyd4znjvM1Yb1y6"
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
