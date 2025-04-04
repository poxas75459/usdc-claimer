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
    "5eWvXnBMpENqJf4wg2TH42UkUM4wvAktWs4w64WeQYg4vjwsUpWmVcEwm32WJg7Kkfvcf83fZe18shtjptZGh2of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yh3sij8KeP4EiHJ6ccLq1SMDsShzjmK3kjE6t7aRofX27SnXRKikZvR8PxkLjK6FHzvjA75pFG5YhZnsvoZCZse",
  "key1": "3NRaREsNtP7uFVk6iNoYxNVYJXMrEXyJ1hVt7Wezg6CawzrAzTyR7h9nnGkJaHi9GYmRM9dwB8RBUkGdPQL7z3WG",
  "key2": "4vG9EuKy5ALJTXpYoFYfPFxafkjHXcXe7RjEwnoktPxw41zsCCuUcFro6Jwg8EocN1rshAPFWZRJbyL6VEgtEXAC",
  "key3": "2PRnHEi7pxh3qRfQ1LjBQns71WTEDJybuWDkxDQ4nGJt6KCdd8XuzyCUqQcMEP7GGdf33qQXg1kNvaiUpZhU3Yom",
  "key4": "amiY1H2ucg34YyhDY5EokKknxhUtATFVtaJevK5ib93VDkDonFPL5VR11HoMnxoABVZ4aWhw77jvRPejHNBE4Lc",
  "key5": "2HTV1gSWmnNztCifxHYyj6keScXCzmPUrTE1S7EPYFDKTisKfxVmzx7LaXwy89crFckCjnPZuez41URL3ngpt7ZP",
  "key6": "3UtmKMcf9S7yngXRAjya2YaQGk8aKWQo9PqVqn5VV1MQu8womxY8LC5B3Mhcv4xorYP48n4ZzN2eKWruJ3aD4vK5",
  "key7": "4UrytiLuYcoW6nsKwSfVn34e1o4q2ezvo331jccZYBn27fmA1LVHVSEfxKzScNQfBV5m5tQrpb2Cr2KwxKobzJsB",
  "key8": "5whQnPAGgBWpWkZj3QYkCV2vQ1cNky2NsqZ9w7o5EicBKiy2oX3Zrsj1DANZJzMguJfkqTbUYYauCkXqx2wXrzYF",
  "key9": "1Et5SAbzJNyRc3q7xuLDngYkxSQFmMYtQZtgJXnxMB15bkZD2m8EeNu9ex5ZTvyCaAi8n7YswXA7LXwn6vK4Xn3",
  "key10": "5fvsiybHqfBFjAdLDhcDAVumTXZ24Nc6CZMzUEWdvxtBnYdpNYq2H7iguXX1GHkpByGReLq73n1fYKrHjNhVnHCV",
  "key11": "KhiJWKaLaAFjEukJGBbu8XxECjsBwasza2SCxTE61wD8HYvJayR1cdX8XrBx4XNZMmb4cwGNtsquseNieTKH6QH",
  "key12": "5vUbBVeM3tY47D6LxXJ3HVck7JpG7xZLttx7fzAFU1QYDvtgWM1jrQnzvp98sAAGZFtJCDyCiwhBEVgSyQpZRejL",
  "key13": "27oPdqGQM9dzVgEKVaqSJVkaZGsrhhBJKwe6RP49iCaEKYxA9V4j2iPfQu2BXHQrp7xHuJD9fPbNiVevg5QpBTKj",
  "key14": "3U79H3QdKSdaV9FdPytbpWxdDGLp8uWVexU1Lfoti5wUSYuEmTLFqvES2GHb3rmMUuvLaoRCFxN7RwTWqYehbHx2",
  "key15": "65zundVo3s9XSvVi8HzvmDAe7WvM1ECP6ccrGPyaExbM9CPTsuN3ZGpc3bBvyJ1reSsN2GFfREPjAZcTAyjQfGi1",
  "key16": "3mcvkpdXLMWmjKMFMyFRHEC3geMn6E2awxrdBLedZ2G11HcNpwFCFuGcf7eFxdL8NRr7Y46kchRWp8CkwXc6y9Sz",
  "key17": "4eodAo1oBvfdSLWh1GRTyXkKfXnAuDBGM3SoqWMqJ6xkbNGvT3gjcJYhkS2vnzLMRm8Vfg99T1ehWC5yW32nAsiL",
  "key18": "3k8a8DRi1FbX7rWcqoF1pJv56tWHdBRCLqym5GPePpfE7yUCuhAAkMKCS3oUZXakb1xEhZziVXSockQr1K6nWjTS",
  "key19": "5JJvT1Y2mxMjvbZexC9Qoo2DKNzHDFyH3VRhUC6Pow5xqajnNLcowS29U5UkwmMkyF2oducLWomShwrCtEpQo1Hb",
  "key20": "3wYoxqyZeouEY4uKpJfmLQwCWU13E7sDin8rWfxXR4BgwSUfvFtyvykuiV6ZxDmM5Swj5FdVSJt49SSDSNDX5PzN",
  "key21": "5gFm5zRbSunnjnzWPRJbRCmdCYeMVFudH1cTNNt2c6A5QBo9TAcALLicR3sRLwcsx4BVYq5Y9JTpg3HXSoSR6osJ",
  "key22": "Bj8f495B3urRn4c9uCDjmfZC4HJEhn4bTUckSR5yiJpHwrN3k58tXdxCcMKjDhMKCv2ZhUL1rzYzVvkL2LCZcM6",
  "key23": "a4ww1NPFVfpcVJStj4wtusYoTgrigGvQYT4NeSpQfh115iFBJchvDMgKxR1fm4paRcgqHEnt7EyyQsKw5heG1SK",
  "key24": "LLHXSb7eqrT3y4thSHDwiag2mYT9umPZTWwgzb5aexxV97eWWj3hhndSiCSwVbQH4MCzDLKRVwKidjCurRQoJhA",
  "key25": "sASwdQNcQEDRjWQYk9NXFqJGCZi5d2qi5dhvKT5egwvXaE7w3tYepwe93DrKG5Q5gh4Yfs4MLJko8UdX9vSvRG7",
  "key26": "4dXWbb2URMcxyiXJKu2W1rSMiaq1xWhDYRa6G83u57EJDTQftgrrRJ9tfk1GE6ew2Fvic1gL9RLakS4tnspvg5V2",
  "key27": "4XqNus3D2wwNNjrSLDQDUGJLQwucEdtwQbyVvhhhA6ATQe2pdceZm7rSNUxiAsKPU8KKQyV1ZdUZPLfGkLAa8T2R",
  "key28": "59LizmYvLqwvHnrbUqwRBBunq2fd8ShRsizcipbp26Buy6P3QiAs9c6YbMeJr1D6KcVidHiP71WVSiQvK6WfEMSP",
  "key29": "5X39W7FRSHBBNZkQPUxsEDaw8YXud8jhq96oadSzJjAG8RSwZqfDJHDVEwVgwqzdw3Zi1iedXEnDoxnFsvUnKUne",
  "key30": "3jFAxLqtHstVXCHj1JLJUc5JMrAL3qsqvDMZbz3VunHatMeUSSecxVkhnS2YCGbefT22ekEwB8VSF5FC34hGfuL",
  "key31": "2XJcUe4WyuzKcPkRWY78zAbva9thXvz1SY8RnX9kZm2ENa3z4NkTGiuKoXjA7arwEkMZDY44i2JGvmEGCHfvZCRX",
  "key32": "3difatYsRx3Y1XreGC6DVAcFWpwDP2u3uzpZu9Tt31jFGVsDYUkvWqXJUvhVqWxQfc2oDXFXN1dTKAauu43Lci8g",
  "key33": "jRAty6GEsy3VWqc5CNVW1RPA9PoEHVjSMwadpsgkZqLnZyDWpyj5K3UQSivLE541zP1F6i28KmUghgTmstWnreo",
  "key34": "4WV7H7TvzfsNy3Vr6Rc57qU8z747mieCYRwKc6UqJeNxEdEkBMuYqtM8wBz8qr6FF5Sik88sUcffBbNanuMkuiBP",
  "key35": "3cfB2rYC1NNCGbBxyBHmEGXY1PjeuvdbDFoJEZtrZaoAcamQgi7ngBuYphFg33W5ccZseFgfuq83bFLAu5h7wW4",
  "key36": "kCM3B2GqjVKqMHe7c7XjQP3LYw8Jbc1WukmfpC4uxPn1oSJvs5YPp2AmWGRoPCoaCFCwLuxvKsVXzX9SBNTURC2",
  "key37": "3bjDd3u5N5rdehq94XPLEbWU7Fwmkg93rKEfW3xhFYKCyn7DAHJoWF7jHz28EKkJFNvBW3cPYsBwPU88TarukCcf",
  "key38": "5t755XLgdGVcsY69xet8MWMH9Z6X5F9xNiyFkzUYMbhYEsQjf4BFcthydibXakg6Fn6QtnessmxPjaZv99X1x5mF",
  "key39": "25XayBE2ybdbSCYSZtw9wyzuM442kCeGoWg1CewYcLnRvQMv1BspyiD1ALskkmJeZxcUxDePRCsP535ZQEyB9szw"
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
