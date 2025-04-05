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
    "5keKfbgJ2PQHVyi5rHt81EpR4s1f8cAKtuTjDZKzhnxaTejx49aXRPnZSR5gnxaDA8jNFTckEtFpfHyEXVJdcGj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nckzqd3tdwzd76uv38W8566Pqq19dsPbasdYSsrcifFgpvUPCe9BMpbfzTkvrLXEoCjYTGsMj59mbjygGtKDhD",
  "key1": "5FkJri9K7K9WBmcJUErNzPcLW34CJmJ5irJvnVGRepCotfsP8ukmaRmGm7bb9nyFuyszm1yJBiidFZZ4f3fDJ229",
  "key2": "5QvMkpgYn7TDu3cmAS4xpJSuQYDLRubxAS5UbvFgG3iBkdkHQ2S9pDew7824B3oa4JSf6tciZDCXox1qakMhLhcX",
  "key3": "4THZyxouEUyhkbcxXNAcZkbDFAGMNr8Bgad8ofpK2PrbaYRcpz5QCtQXrX4a6EmWB1oeD2yn4PRBoBRdJHt6cHcJ",
  "key4": "5nUnMP1Kjq3CSgvcV7HdSKGvFae2Uj9xDQcYbz71f6AYmT4mdnw9FGLtMMssZwwXuTysS5izD9td2RNbyHdPQbjq",
  "key5": "3A2UsvXjiwVzUAG7zfnWoDH9NfdYGRdSJQmPHJQ3BzSpCLy9xf1GMrjy7xqWD2Tg6LDJxP74B529YYaUStKgryms",
  "key6": "2WWk3LZQMs6p9pmsYPchs1imrNYj7otWVRmBXFTRiMJhDB5jLS4GBfyXmNGiLsBb3HZ5Bgk1csadQ4UNc9TnTd8V",
  "key7": "dHevfVn1tDgVo7h6iiA2C2M5JrDsbv1xEjQ2YwQ7gvB9ztyBSMdyw7M6TESJsZxQTfwLwbAGmmoWH5MERNkdrgb",
  "key8": "4DoQxzKnRR8ePF5Fzo5cxdHhsHj8awxxFNsnTe6VkjhktQLyK4G7tMYTMBtArbrf31CV27rZJxd3zmJbw87wMnPM",
  "key9": "61AFv2yqTWFNJYn6FYYdirEYCsykdw9g87UtqKQoSkoqg7JYaGL22reh9iLrvAL1C7qRtYyATxoraaYkMHN4CXyQ",
  "key10": "2H7txXJiFAK3tGydBh8434hUNtGyDEJHiBYpSFjhs9Zkt8wzGeASdDGE2Y4PP5dENBZHLE9gRT3ZNTgRrw4bBgfV",
  "key11": "5zJQdeRSLNEaVVVgNu8JJVL1tQbvfRZCrhRHhFVdEATiAuy5xT5YrU2fPZAd3goJac7S8mZ3AMuux7QLixhhRDiZ",
  "key12": "2oV3Tr2F8AsVPEGg5ABRzZT3gTT4Gk8AXivmHFV9HAoxZUisgPqspe8pnBD4UBWFr5z36bXf3Pbfz7raAhFJzDuy",
  "key13": "4JDduYyJZsvbs6U359Jk44cBWwjq1PFssUnjU9ygVqw8q1NwLMxbpmwDeDEfCMLJ8WffK9ZyKSEj5DTTA4mbDZjG",
  "key14": "2NnPYtvRyN6uPjPWxZXZoUX3aQZVHyhvX5hMUX92G3PnB36BjwztKiAHj5NBQJeVfUx1chiyHRS5PfPSr2CGuX35",
  "key15": "3qB4Jmqsmdxvi1Y2JiMrARnP6hhPmahrTe1S6crcwLXSzjsGNqqbYf9nr6LaEoEymq7obxxhkrrXnfqj1YHsjhZE",
  "key16": "4QyXuvqi4BcxN5YpzJjs1HXysWsb8sAhRNtGAajq1MChroQP7xkNjvtypyriC4pGdtrGKdURh2o46MWxJt8W5MDt",
  "key17": "2VidS1uTtXqTDSApJhipCYA21tBVRrhzZLj5eMU1kWK22pEwswPs4LADtpG3HPhaaGevemSCyXPx2hifyd7sAFZq",
  "key18": "5auxAJV2Xhna9BirSNhMxRuxDWMvDE2MQvzyz4mwveekDbQQMugtYkn9UHLzY8bUNZxuaURYZT4MaLgGTLbzyHqz",
  "key19": "2ETwZSTNRKpZpWDoJCJsQWWW1DyxXtE2UiWx5WpziUPVTTo5H7uNmqsK4QXchp6cmLnFeuL5yD6EwSzBmLJUDfoa",
  "key20": "65wkJcVdYhc8cQGBfu6rrcTJZyf9QUYNVEjvNMRBPFmPbJYza3q42vT6fyUp9FeYPWJQkvRrF6eufESCrNQsKKLr",
  "key21": "42q69J4p1yQc6o7Ynt8Pav8fH8262Fep3DHR1XL6oSuMreHJqYa7GiBRJr8Jnp1y545aKVMPNLoQVi28eye3GsP5",
  "key22": "3cSAprddNSAKthn8kk7dmy4iJxbLfjHMnDpeLagL68anvR8mhZfyLKfe1Mes3jppaqQbSdNfedVWh4EgtguoB4Vp",
  "key23": "4sVstwZjMVao2EBYokGnN7KEDycZYCUyzeds5v9uYt7seYsJVt6jqBmHV3WZDTxyuTLVBQuokoUHGfKHAg3cxftV",
  "key24": "4WVP6S2bNfEZMQoGvAd5cZyPuDQUpj3mq5xYviV7qHs7FeyN8yfr1f7Ey4p8u2egbriFCbY3mDGRJs9MCSXinzPP",
  "key25": "a9oieggU5ZNCNaQKhRKGtVkZPwEktBEH5xMwX2VpKwvaP6Jf1QZbEcUeMnvQJxwhnVnp2s1xZM6h2t7fJ1Gq5j8",
  "key26": "5WHF4VZnnuF8SPsFL36qSxFVw7w8WRXvVD7rdSEkBuLhrRovbSP2wwJ6nm34JsbzFgg87BQPmgCc3bj1UHFa9EXf",
  "key27": "5zRWdZZixTe27f22cyGkmX3oxWtWskE9XTUPMN1NmpZteypNvKjXJH6ftGcqu5BoTNYgMHEcHCvaa8fbaFRFWq6Q",
  "key28": "4AUkfGQnZrEwVMLfkoqgS5ZFCm3EpY4nVAQ5mRiqKt6uhQHjYzRYLHZATQCsKP6j9TyD5FXnrUpMWBj69njNLoqf",
  "key29": "41xEqAsBfoYCdHvduKe8S93JHjiqcCstrK64Y7zx5qBxtHt2bgTH2HBFr4ptiEWCHYDG3RYcWvGimqQLgwzrzhjA",
  "key30": "2SbSJ4LY3D5KoN74tFaTxTykLA7LDQy6mE224CsKNMdcC9aDcjZEtsVvYWvaWZaWaNN73KA9vpa5qPh9aqg5WYoB",
  "key31": "3bG7QkQBR8pfeqjnxFKWjK354kmCpAEWj7iRE9xumXf2yPTZtzR92QKhP2iQDKzn7Hz3UcWhiUSTetN32YdenvGC",
  "key32": "3k3dTHhH1XdciknW8sTZojoo8Ue6koGACMZxZm51WxbUUVcStYazt2aBdi4PTn7J4rT9ZrNqATuBxZQLF6brs6W4",
  "key33": "5DqaHkKrohuQGArfmR3TjMDQzrx9RvTX2wJadkRvWyBtdveSxT2sqxzoZDXA1sc6zXnRSeDpYeMSJ2jm1uyRUkxu",
  "key34": "y9fuAhkr6AvrSBfjanUhc82SVTLoudMA1typdq3QWdd6LSwParUv8qB8Sf2JxrBdR3JPdicVGsprxvTNrzGdib7",
  "key35": "CBqyNoySEQsUPUSXxf2LrHeeNYJyDNruJTy8Df7CYWzxutLoFVnamA8Eezey36uWL7vxmytPZbY6Pwha5w8wtv4",
  "key36": "2UkTyQCysTyBwb1RTBr5KqV3LCrKps3geyphX5ErP4Lj6G8E1LL92kGS985egH4M2neGuJfMWYJwuFjNAQwZ6nLN",
  "key37": "3u8eSZTcgetbYezbNYfFdbP5GvMkuhkNHf9rHPRpfLiPSSejXbf71nyk9ERzVnZ1QAu7TUSH5n6bewWzVGw8fY9G",
  "key38": "ZuXT7BBKeSKdTixybeaSJFiR3ySgsveyRdGyJKEDMUSd3ALYxKpggGHTXWNN6CT4uVbu9Htr6ViKBswsLWV4129",
  "key39": "36zPpbhMbMVj8Tyf27LNE51tyk25ynmd3GGGZZJNsnnKzUc2cXN5vgRKTQypuuKnB28de3VMkoAqMxtmwZLh3q55",
  "key40": "2wYyxCCXyz5jrsaMMaC1zD7sXtc9UvSLeP9knohbpBgyExkJecCBbfacjteeSSvhS6LhbbXhyvZc1z7o7sSfjt71",
  "key41": "5HpT95Bums1n8bDGLbP1VEzz4UcazDKXSiUAJxDuXFK4ZTqSSeY4DaCnmNh7Dx5rKNQ7J7iEUaybTRbCcmCarSEp",
  "key42": "4K6iZhvCK6xAD5meGADj4LkMwaUypRPuLkKAYedvEdsgENaAMP66P9sNZESmbZRs5egBFRcuqi4V8DVYDjFGLzmd",
  "key43": "BfuUXcZNrfeFWt5LLLHvSTUe7iPGwUQSQVyg8JhkCDrMjD7FddandAPq2dgdhPEqpDvBXmQpXxsmtsLC3BHMyGj",
  "key44": "6TPkBT34rBZ7YvueBS7PUXgGdBLihC1GTxiQCsFfiFVMqgAvUxNEBD5SmJaiH5bb8driYVZTj4bhDDnVauAu1c2",
  "key45": "4cCLKgZAT9GxM3Ra7bv8VkTqZdoMLkzqTQiXr1edQC2c6awo1TxYEMSFeoSQpLqd25tVGtB9SirF4gXwFnx4VKkH",
  "key46": "2uW9GbDn9p8WU3PCw7kZ463kpEvPAwCiFKeq6Zzt6ufHWXJj9W6vNGm4hsH5s2onzLgwL9nsfuLtUxFZSGnGpgvh",
  "key47": "4Qxo7TPNiGaxJDk5fZEppudtvm2BLEjdvL6PZmmBm5ePKmM7a5Hs4bjzjJFfUr8xuXYXeW4GmgVf8RCySTjjBAws"
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
