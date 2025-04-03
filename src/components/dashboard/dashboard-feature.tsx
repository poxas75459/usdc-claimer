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
    "2Uxq18ZwZgwFLMXrj5Pbt6TY9Lsoxr2ySb83u9e74EyZ1pn9JFDoH51PAmMyssFUkJn8dP6BuwxUWtXdHQ5fXXV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WicHXsmWHxwy9adnroDAxKGiHSEf8X4JdngZo2JrCeDnWxgARcLG2W76emPxWzKqo2C3Virtjz5Y5u37ErRPHTM",
  "key1": "4r2y7x1LRspjiHZPrQPNx7GdGB2JvH78oVwjfB9wPZNDEbeuttZBvPppXnKw32p9KQyvPgJvccbFK8YNoD1eYQzP",
  "key2": "monQMDS9NNHHGbUcYkXUnb4m4aYjpKtFFBKYYLbemJJUr3jffj18jF3RCmpvNWAw2mqUQLVupt7dDEhpqUJRN9B",
  "key3": "FKpJN4kbZQx4FwqNcspMLmcyjfqcbjJ5hiJajaqsVsCNYsVdJ72Jsi97vVySrvWuDmK6Y2DnhpmsP9qqAo5SGH8",
  "key4": "3bsXwJjn9r6hpKcvqLUW7AVrqXeDLZjwd7D83qfPy3t4MQkKdAokXA8si4nLcd84kpNa9KV6LGJH42YfKKjFD7ge",
  "key5": "5zLGBFYaJ7xPB3bbJuGK5UTxyjnyKbmce9WCoAvUQ8wT4kjSY8JP4xQ7CFSuniVnq8yKMLhtJAPm1Z11xSKzN6hx",
  "key6": "4kXRGsrujPouKrrLxmiqyRFF9LXkF7TixJ9yR6bkyBh3E9A1GdKdKTeJWVypnRjYqiChrdoGoE1RkZj8j1gWHMUk",
  "key7": "3Ust1F4eQZi8HgUwRjCTYTtrFVBJiyjuE9WwodK62v7L9skaA3ZKZADf4qm7WwE1nZNmqB8te38stAvApwxWZWEi",
  "key8": "62LeXzpdgjsiV4uigTzDG2RPVda1tE93y3K5VCm8tYbdPXV23YoTH5Bgd579PMMtFrsML26aRgAKrzL7fotQMNTC",
  "key9": "nGVfiCCgyR4naFgKuGiBB66ZwmXiPN6YxsQgQu3jvkTXy9g8zhK5hjFLowRN6xG12RHn4uFRj5qgU9aF3HqEXBL",
  "key10": "3kpv6VcZBTG3cFXEdHuUTQ8MXy92z4fL5KghMAUDyWjCgqbH64CeopZ6s39MQ3xJni9z1B2wA29YTdCfAPVQhb2n",
  "key11": "3syTUXeTQZmhDYQgBBsbroEt3p86w7YpTwaaTEp6FAUb7Z8m6rKKQoxxpg9MeuJcbLguBRczFsu8yN79gmk5bUof",
  "key12": "3eEaQsWBjy75pi6W3QU3phtzQgYEsbbphAdjFe7J784SaMJ2pdQJ4ZdEQbXZLGcxWHWzbdbJF2WW5GPQPAsVdSvX",
  "key13": "614KzsmFfiULECKGREg4wdRNGEL481yv5WBJJiJJ1cxQ5E43YbC255ANkRTejPyC9qwxdPnmUyxeNw5VoDGSSqy6",
  "key14": "38Af9LeZRoNKn4M5xduG1FjnPeT2xCddwYp4ZXCejCMmnhi3oaDKjP4srNsTuEHstFVp6ESTcJUenrnNVcu5LxHj",
  "key15": "G2fs3QofBnwZSwMriqAb53CB19anyJ1DjXwgmcrQBXmWS6rkTGmt27JwrZjgpMTPJWSPqieZdZzfZgDFxUFJjZQ",
  "key16": "3cUsEBBR5YXectYMwhVTo2WLm3JyJzpre2dqamSK7frSFooToG17dQrHT78tBiAmKqZ7bt4C51wjsiiyyqj89XF3",
  "key17": "5mhd4B79wyhtdass41b9L3KzaS4ceBf66qniHovE7qf29axcLZcyrwr9JGhmyqsFnDB5Jij7oEL64SpxEqRhXrQD",
  "key18": "exJkCe58kCp8LpewES5MWWQhHYHdF96MFtBCRGawt7eVcPTndENVJRV3Hk6GkuaaEKpem68ijoYeyov2LTsCdbY",
  "key19": "4zFQpSe9AtCuoaju7yGWbYxeSWCwYYjzQ6yuFaTvz4LcTL6D5d4Qwv8veiNUWQEUMaPd9bjLUghLzeGrzFuLH6Xa",
  "key20": "4r4B6orZUdttkbkZoKR6pAGFQrUKqKAFka6vZ7GLzwWVjUHsfJTYknSvHAAk3bFLLaQVVrWN76FMnXVe7Qx4C1ej",
  "key21": "Tra5YWK6KFoePrcFSBax245khLasCHU1aCk9AAmaD1RbiUvw8YWhQxCcdaac1rL5WCFhDsrppWaryPdiCth845N",
  "key22": "2HVYPVj5uV4RZqJmDjWx23VNcSU1kpXoVdRvR3d5dL9BbnQdpGKvtBsv2643hGJVHTTuLtuodJD19eRksRgJxeMo",
  "key23": "39e99tc2nbjDCYAC8iisani6zdFPEfQ3P8nvbssUz1fRNLwcj9p8PcBLBy9py5RpzJ7VnuANNU8YADPqRrmA8FGS",
  "key24": "5D2Lzsfatnd8AhQAjRgKTCmDvqW9jdYkMPWyxJQiNCeh9aU6MJnSurqwU9sq6SRXBDtucxaPTVW8HUxTwZ1BTApM",
  "key25": "3XctDuzksjCUwuu77HZJpJALWkW7FBXiVXyGUmcdhqEHmW3vPy4AbXsUF1pYuV4t8UmdcztVJ7bnXm83bTbdrvmq",
  "key26": "Edebw3jVWknYRg6MLJugBmoFqkhDYHp2fZkxtwTSVQA2dEGQX7jajwJBoLkqcjxRP1YHXL5qRZra2GjzQkBj5fJ",
  "key27": "64rgZjtA7SY5sxfgSzhpXexAjxDXHeGvGerz6MLMEdh2wZo6V9E1wCmSfhfmJ5XzqdTC9jDJKwZmcLZrcUkTtFvv",
  "key28": "38QESnKY35dnegs7hDG7G1Nn4AsXfq51SNtdaAqNrMaktUzGBhn3QdpZGZMFGoVDamSYXGHtVz633XdMLWRr5bpH",
  "key29": "2KRqx4QQqbq6VcNNLsygSkdLprNQKrAWm8G936Hd2eQ2uajy4m9887gQNnRBSVLbvNaKRTT2r7GMeRnVuX93by4V",
  "key30": "JYFdagr8PXEe4VqjcUKtvvRsNtTn1XWmpog9DuN8c2aP1qxmWhnpy8DRJ9JJoHa1XnCxfhud9h9a5Pwfnixo41m",
  "key31": "3DFgheeF5znKg3BETkabftga1Jm6z5VLeBP3VVoeKLiz3mj7g8gp7eXSRgYD9io64iH6Bq85HskNBPtNcq7D5PRt",
  "key32": "4tpbNj5zwxFBDwPZ7JJZisKvNJKe36aX2X9ebHDrCgP8bK6briDfNfYDBAh5AXYRVSxtU7W6ntqiGstjTVftpAxF",
  "key33": "4AVu5MpL8GghBQuUn76o6gLpgcLix1kQPvq89zDoFiLCcxYVAn8H3EdLa1snuv7ADNWVfkfrZPBoVDpYaDrxFgrc",
  "key34": "5nuLBSC43fTuYDwSPRUgqfrYDoLQt2ADpN2yYkLb6s36ntCAuJvDuGousV4ATGDkawV8uutpxezEZxEimSVgyd53",
  "key35": "3py9jU1bptLHcLseHjzFGUwXNHHsP5f4MLLVcPjs5QFEiaVzfoMmEehRnL3ffniTcA1D8TuJSHyjUKtZLeBpvAaP",
  "key36": "S9sGHcfN9QPJpG4xvrwrt13f3yJkXU8PYKwLG5qefW83z8NZka2FJ9asrpJX8SJn3tPRDGDWrBir5NYVuS3twbs"
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
