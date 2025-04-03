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
    "5zfsJ8Wb5xUf72tR9hH1hustknkKeUbfuBVmtNZJonozozLZi1KRqc5qcf1au53xrjM2MW5fDTFHY7YbqtgVPMhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8LSt5gDuZKoZZyzYuRGa1dbai57MzYwS2Z98yuei9wZHY4TQn2RZNUmMhV7UFPXs6P1q7w2NvCyr1pz4HRTi5U",
  "key1": "2HytoRpdB2pddZsPAbSjEoFxPjG3mDtPJVskWNL2vzB4zUAuDjiPKRLc312BfDE7czX82k1z6KdbUX2B5MJ7fxUW",
  "key2": "5qBQBEuvyo88v22VKBrdZbTYYECbVyWHUjn5AVLXT3upqwe12ufbzHVLYEuquB8veBCCphfVNBBYUYeY4XssjneY",
  "key3": "8EooEPf1FF7HMYJAN854aXq7hm3EuMShSYPBPyqLKASJkaCvs9Kk3XJS8P1RbGLExr1EXKjNE8mQK8YNPXe2hwT",
  "key4": "3YDnBTmpin728niPiKaK6a7dQ7YyfbDGzC3R2pUSmWUdw34SyVsLUXYKtGeXhB2NthWr6cY6DYj81nUN1FZwSbGf",
  "key5": "QGDuFHje3Kc52Zrv6sJY6RrPZpbtjY6LCLaNRjF3w7CE6Bg9SoSqNM4dacTtUYLjQUdr7HHQJkDGSLn7pXjwNeF",
  "key6": "3o4AceGGDKoZBYjzyuHLhD8y99cpHRxMpM1p1pb3c3v8sAXQFj9y93JHUcvRaitfFxtVhvy3qDkgAhurfPbNM9hJ",
  "key7": "4iMnCFaozHzaF9jbbi258of2E8n3XHZBgiFx9UsqUHWDNktuCzBMQBpoPaTxpuWEzaaLLjHRj7vWxtAxo2SP7fuy",
  "key8": "2QgBBacrtpuXtPkpMecXxBaHQRVjRqoZ5RXTrrH8ETTPMFmLs7TLktqF6oxe4VNMurWiZUHYPoq5GePZQchfsKpo",
  "key9": "3yP3UUdV3B9PP6purmie81KHTW8hLDkRYJLX91mv8pYfjgddGW282GJKCEu23Fa3PRVd2xGRZBkCBmenqfFdGp4s",
  "key10": "4T9nm1LeZkbW4NRaVgPm8G6hTnQnn7UHjfJKTMK5LfhWSACpGHTcz97YxXVEJQ3DF7ZQ1qVB1zk6RuxK3XWJ1rTx",
  "key11": "3LP4ocFoGeeNrUFP638rB9pmhd3Ybswv82N9suTLJ5cgDf77PXsFUCWsTs5hXWT2rdRXNu15m5uqaYiWxBWBcqvy",
  "key12": "2zVbHBrpyGod82XkewNYdsWavNrhXFBSRuyhYaCZFyonybCEa8Wuuu4rwVso1atYcYTEhQYungHhaotVYszKUAFE",
  "key13": "274ikyinhMp4mqEeont81Pyo7GRdTvtQKkJak7exYN146gCv9YMY7wd7P4gCQeo6hf725Y4wMfZJ4NiY8VeX9t4k",
  "key14": "yHN619c1SfXkxmmbiLbvwhvpHEJ863QbHihbPUb1CgErxm87C4HcKtbnQdXEuwrn1VbHEFd9UqNVYA76XGFzEky",
  "key15": "Eakn7DYWbWcFBfgLJbbGvxbFoYXAD4uZG3erKcdmHbEafR6tQMPCcAtyo6snZKR7UZYAyspCUNMzPoNoUm75zra",
  "key16": "3Vdm5EJoYchr3s8UX4Ua6us4c54Xz9aQGFZ1yswdREBPi5h6xdeoUKBtKngCELzyy79bzQqiog5Z26VLCwjx2WLZ",
  "key17": "GJspi2n9dyjhoqwUbzEPYGHRoZLus3tKtWTWbdw3KuwSZC2p6CKpzzxTdexpSPCga5NKYzBtiyfo6PcT1z8mqGb",
  "key18": "2TjBov6WGgDoqUvzwr3eQrjKxzEatBedWCJwiQqDqF3pufpfFYpk9qVD6hXrMCz398muyH3DZqS6a3XBY7JuE1Lj",
  "key19": "4PTxAD77dhQyUizYZLqq8UQfwiLThbPfBpNYTw9LxatWADMDnVYncWn6SDX1JQYbXTUWF5z53B3yGGcu8vkNavBx",
  "key20": "TyRAPdHiayg3HTgGa2mMmBEhu1mJQi1ZWdSSaMsYRCZdMRRVTqa2UnUkHEBRDhiWvHVwXBnbkRdnqeytXc9pkM5",
  "key21": "2FMqhgsE9FXsJtcTwXkVM7syfiGeJSxAKXUapkgPdTpBZ7KxXinF7KpVred2hXV6SQG41xakwM9mbUJMSbw74vDd",
  "key22": "7DihyJER21K2VPS62Bee35AnS5cBLk51kdpfy3fNwRkBtRMM3VmGNo5UjRo7aENXtvb7YLZWjw8b22mMey54V39",
  "key23": "AQYzuDkJjVY1FhJ87kRdHdph9VnhnUmAb9Pur3eEpYswL3hchAXScj7ccStNSPQSsnVcenkP5ySAj3sQBxsP6He",
  "key24": "2SermDC1RS21Cpi2W6hpMBXCUBpvWxrbtUAETFLf696ELh1Q3GEuxKP5UFtmCf8QJgkZMshaJXVSKtxs7HJwv6jT",
  "key25": "3BnjFiJA3DCy2AHnGygAiZ7xS3Xf1xp2AK5zBRUudEsqVVwgxC83bomxMH5fW9gyihWc7bgS4dqKcXFGUPWuokGY",
  "key26": "5QaaFePkBXHeiUe41HFbQA9PkpoHkW6u6e8XYn9piXfHHcJdx7fkokFn4onjEGuQMDm6g9aKWAfbFgZ9kYYv2xpN",
  "key27": "VpTri9C81Goz4MwGbdekuoijkioVZevKBxi35k1zRj51hywyWK7gry1hLEzm4c6w9e7xz7nFAfjEBT3rGwXq1jB",
  "key28": "34YVftojzZbPNXVkxiiJnNe7NkZ4LxgfkGCxPsVRfp9oGzgs4xjSpn8eEk7NMJGxZ8Eu8rW1dkQiYfqexxFwrPBt",
  "key29": "5dTP7ym6DokLjrVMzjqtHTGaTGoyRGqtgmo9LYQ5kfbbmt35hazCFk6wi4qFewFD2kVwSWpvm8BJ6WsSVFcoy5uS",
  "key30": "qNTJANZgMkU4YNNzJcBZ9uMLigPQeHjsruJLV72jVpS84KsatucQQofKDbTyLEiarP7dYoMsga5NkGRqTwTjfnX",
  "key31": "QcFLHp5sPhpyTT4ujVJ8TYJLjwU1vak8YaYutH9oAm13kBXK2NFK5EE9J7nwmm4PH6Uc7MAqLTu4EraUPECCGpm",
  "key32": "48tJ95c3QXcS7iqsxuB8Sd9A1prmideKGSgsVNzNJDzvUnUU8BzT8EmTdGaFAhoEQxDp2JfZuT1KFuhYW1kVvLNE",
  "key33": "4BT8uKnBU8BeofArWpQgRctkxmCtTKJ78XnsY6zbcMW3zAXBPVgEXDG861borT943VxY5PDYSjtWDkL7PECkYbmo",
  "key34": "3cN8GB4LVKg85pmZQaJeyaqzyaoNVV42tetgsj491GTQ4QaYwF2VTRpmXPs5f3XuUwjNxpuHgBW2qxTYfGJ2hr44",
  "key35": "4Kd7LxCshsUnoJSSRQjvPJ7T3MUp9KXPpwWAyWr98bjjyDRrD88XEHxMKREK4jUAndCjdYxw8dohmW6YTZsLXU1b",
  "key36": "3FrUUcsyW82NDVwtAfYVbhk7ZvbQPUUsGjhw2Kp5aMbyLJ6cncCPvZLy4uCzav4DEV4naQjPf9Ubz24KqDTJwmiJ",
  "key37": "2JN1Af5YgYd3ohoJZGEmNbrTitnhHdGXG4VC32YkhPb4zEsN3U1CBwjpgVF45myB6VMLW2EoY54BPLySYn6mum8S",
  "key38": "5dcALyKkFxNWYKwdnqmsSxCDqBKoqpFSevXdgoHFqxjioHZcTLnEe21SzLh51pPuJbGnCTdWKc22YxoGeyfwPsin",
  "key39": "5aX3Ws87fubUHa7DeRTi5QFFaRLoqffyHCaUVxHAnib5TaGtEtPzLwwAXzQuxKWLdQbkfSwH7NuE8pmzNnBSM7Mf",
  "key40": "2gigYTUXnqriMmLBeTfZbvfwGH3cDotcCEpTv9NXZpeZovkGtLxjcNgryZuxnvouLXGdxsL863s3tKuAdjHWXumy",
  "key41": "3KWhMvz8M2N5Ztqst2StPmSHqPLKNGii5Argwzugud41PCjJsQmSuNtCH5nb1W1g41Tqi7b4Tb6LZEkPnc73vQwy",
  "key42": "5n4BVS8893rVBzBKrQY9mjZJcHhw5iVLjd15KWvr12cwmJ76WM6x19nN3NFZH7bbqPdiyAWKQbKdjDSAwNs8LLhC",
  "key43": "2k3ATaX2C45uXQtvbGCP8SnNqKDky7pqXekUCz7JQ1qa4M7KCv14VoB4YNa3tkSLfTFNB5XdUqNpJ16X3Y1HSPkv",
  "key44": "3xecu8TPjkpuT5nJkNJ2Se2kfLHvaYwWBwShsGYKCWtvwSU19CVFvxyjaHUZtWqB63E7gkpDgddwvZ7s1TJtFtqb",
  "key45": "3mnGiAbki4WGAwk3CvCX7D69qV9RjMbrhxJZFtUGkWtzsJ1QKmnim4fUj3CN4VYzgbScZ1wd32yPKMvEFSzRpA1R"
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
