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
    "43qQpK2z9NKRLT2nPcZBekF8Fa4d2oAWc8v6DfLdFGpKeevzrwdUrWshQosoGt9CtSamC9rUz3joFsKYoRHN5P96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bu1DpahPFnjxt9Gr46anxEaGNT65UamkauLhCLJHaPFXB3HtFR6oMxQzK1ze6EJYnBCa5CxYHxefobp3B93aF8n",
  "key1": "fzH8bifw1bfSM8kmAVV2gTPiNbkRFE5UDA8na4ppuxhGRLpkqwob6Qk173suLKTWa6TQCyYBGC1YdRJ88o1rjVZ",
  "key2": "2WCM2w3AdMQEmNo6x1pmwE1xGdyjcdauiZwhW4SsuTUfeRfxU6nmb16bJ4eDiR6PU5Ur1KLYDPJYJPHP5FK8qoTm",
  "key3": "3xo5oVZAqRJDWZrrJ4eks1R8F3ZdoWdBp17M6LWKa77mwraNEmXHZppqfG9dQq7FgGLwdjty32wm5xERGQHEL2By",
  "key4": "2iJYELuhDXLFT3SaBz6FTmYiH5fXAyQ4UZJLr7NsQYgCoiXF5uvfwW4p5zRqm8f9dhW4JLAwoLvEaSCoi7oTiLPg",
  "key5": "3Vy1uBo4A3RRMhiQeHpDiw2EyDvSgXFuNXessrJu3uzqX3NZbLVMn81Qdrad6x8TWAyx321Q2chVpd8HCvVATxep",
  "key6": "33WMUHTviKSM8ocgNTpxkAJ2HVkQ4pVW6SEV4MmfrQvGp1HjLzAZWxDSPJeVpr98YSiussoqEPXHCqtRniLVUG9V",
  "key7": "xbV4dTCSHf96FYgdZta3M6cqrAfGBh8NAY9YMjvRhWdhLL2otjrdwcqFfNGLehq669RDrEvbmB23XKpgbLZjBF8",
  "key8": "2b4siL9xLdSrHGA8U7BsVyy8QfX41nfBHTBwyJzgQBcSUjHabdYFLXYsDFmqo2vsyUCAx3iJ852eUnxxTSS6Q9mK",
  "key9": "22RKsgq3S2NkTtpHruvVsQXjSiiMp4tigRN6cu2pb1XF3xZtCiYXvw5q5LaaRKnn2mcHkXGegecmCaD1n25Hrga1",
  "key10": "xdPJzg5o6cFGYNdeYieJKtUrjCsfMgKmhAbrDCaMcRpr8D4EHetHqd9hY7LezDHamtaKY1LpKfikXvfXEmDwspj",
  "key11": "619nwW5RDGN1vkMfZayCaR6HvrmrrDY5CjjdJTxU49B89zW1JK7LWrakusfiKFr9B5bBzSe2Df1CWfAfuCJUdtyu",
  "key12": "4S8wA3p5V9VzYxntnfhdYTBRsHGnTPn956eJs5guAh4Rt5JtiJoGm4t7DVn3zCqsaTinGGQoCmZscqobaXe3KWXZ",
  "key13": "2HMA4MMa8TkMvqgAyjoyE8Fig1cU97mi5iie3XgXLdP4Eobxy7A1AYPSF9iNxabBcAXipYS7Gxwz1NDo6tgM6486",
  "key14": "4rA48Gsi96XG2fAsM1G6uN6F32EkP41m3vhR1mUNqvvjBW329a2YgxCsxXYanz1rv1h2MeW7SVojF5YEDALoB5qP",
  "key15": "3AH98KTDq4zvPKVsNztVrYrpouTHmwV4sja1PcVYRSYYmH7u44t8TkMeQPHwpfdFx9tTWFDNUvKgXxTPkasA2VYF",
  "key16": "P9nkuWgUZWUThWwMJgdbPW8YfPmQGvHwvk2ciSiRw1SbgE8VFgvY2BNsm9vysVGWXLbyqkvFYKTCtorqHLHbq9o",
  "key17": "5MkaqYMAqPcAjiGYqB6MKVE8BsPrXfLMnS7ahjYzwKxKaKHiojGVRhYidMzruqyuuRRTTvXsjYfnvDjm6zAaaE6L",
  "key18": "35uaK4i9Rt1Muzs5ydhQrV9pV1g1DQwtuX1eJerD2z9bdsMWj4wk4X1XvQRYe5K235WpVYSwTm4HfuhtU93PmQCj",
  "key19": "XhspirNMy4yJqXCnnq4gCuQQP5FhjykxJYEyyY1a3QY3DAphmzsEE8qGX6fhCAshScx9U3sxwdsMoCw38S6YmCv",
  "key20": "2EoYnHfjn1vXd3ZNiPMv9SHRh8g83FACXy7yMFQHtusdLmpppRsDAN67Qd3Xktgbgf9gi6HVKHrTBsWnLWFDHbaw",
  "key21": "5HFQx6UszBgWEsxJZndNaBavWBW5HYnEdZoFTh7ZwX8yvAJBCKJBn2z7NzEMQzGAo8pmhC5Z6SPqZ3MS8Gi77PBx",
  "key22": "2ihMeWdoVV3BKEjanVrMAULUYDjczHyuFuhykH6tCKHpRfLnEW3GrUXMBnaRtiAR5Kt8p4dyUnLMujp6wvnB5QMa",
  "key23": "4ce7RrGQgmh79CZ49fUgGkg9xeeHC1cee445tqz1cB4CMGHvJrR2Dzn5Ts7DTTrRmDjzhqstBt3GLJW6i57HmFyS",
  "key24": "5g8aQzhjnowqnHRAtcsZtV7qWhby5jYUpVkEJria2dfqPGyDnFYW1WWaTBRkvQvXBwqJA9PLShwpXhqyMpzTnCay",
  "key25": "2T8KdSyZhnWomR8BqpJJ27DVMHoWk1uzxFsjwPQ9USWc36uMfY9YHakZmdo3SCcgQQP36VwuTpEddWu8YSV4vZAe",
  "key26": "3EUXSUDRT62WZN5opQ2pqJTELxTUUaebdLT2FmWwkqDWKsTnYhN8GDwNHemb6FcpDfQkUPeK2Tmwx53pwf7Zigbw",
  "key27": "44RwrGz8bSDXc8tg11Zf6iYpUdgBEMe8egZmjRhDEUQW7iAvQ4fpAtejLnDfqCZfst5VAm47n9srRXrKFn2dW9g9",
  "key28": "pr5e8ZBMNLB1bRZDFMhPirUoXijA2o7W6SUyrb3tLiMMYEKrjYa2V6XC73io7KTq5SQcezGPVQ8cZKbfonyT4N4",
  "key29": "46ijtbkYjjFKcHhF19ZmTUCLuuVVC1SygkMjX4wzmi6D1JP7y8HgP8BrgR2mAguWroHcWiDArkc3D482WahX29rj",
  "key30": "4KtrxeRKifLhQ9rybQDLpCVW1bsBscaHjB9FKetnW8TJ8GWwRQpWGpnb2dRTSWZaR94pDUC2tBrRj7Gg4X8RqkxL",
  "key31": "3A3Np8oeiHChve1rdogs3zhpMw5otNeQ2c9w16nUeZrmX9n6RKm73sx1knQEfrG5JqGHeQYu6M3uCnpqGtmhbWpF",
  "key32": "3g9bMs3SXAoURE27kvictBtHcfLggeD5pYjtEpX872VuDui8EAvq51qmUMwV6MdrUdEZyyJhQCZQYkSoEuDcUPWd",
  "key33": "6517Qno19stpo8nvPwFSnQ1twMfnp4NFPoJHNj69xZ3JVA8LLAKQXxPYH7TcCfTG3tTwztaXGj3K317558NoMwT5",
  "key34": "3P6qocif7Wyxo4sVZuqcSp57mwYjnP4naMoTsHvAhrpaEzCrExnzxiskDdfLJkt7A9YG5VJ5Py7VL7KK9zuE4u2A",
  "key35": "66P12JcHLpd29SMjGpFdF8f4FhD7ow2RjfnC6KDQX6qSYS9GHXyewrLgiK5wZm8phkPTwacjiZ32qh9mjimEEXYA",
  "key36": "5JMWMcRMMwp6Sm8WaFdGNDs85fozpH6ZaViXgGw7xkXDzxRymjzGkEabW6kmT8B381G4QA4Tzdf5dL96uhPKwC5C",
  "key37": "21eJdbB1Utw11LGYK9KkatwmFURQp9Bqjh8bsAZDhQuTmgLExSz6ibCsb77focsRa3mf7jcaMCXHg4gmwUEKEbFu",
  "key38": "5SsHeVxyqLYbfwn8Kbo8dwkcVJVjtQj93UG1dN2H2ffGbuRFuFAVZX4WSzJNj1EGXjN2bzsg2RKhYGMFEYhqvNZh",
  "key39": "3AAJUw8hX4CW5u8gVqbmedaxvXZ6QhEFy5GvRsTWSHHtjuY2ic7kVRLnJw6e1PigFC81J7h8JWyJKNNWh11zemU3",
  "key40": "2YaUehcXDg9SYyKkDE7SFreMricfNPCjvBPRvQtdHWs99bEgmKPjYw2X2D45j3dojUb4SrN6QXWRrgy9feNRoQiX",
  "key41": "5YUq4D5TicnqheimCJLkBVgUtbQu6Vof9mmAky3J3UH1X8RHkm6mmJS3TeEdK94HvfCnSQNyXEPviLVXgeqvUiWr",
  "key42": "4waJYKLftGXxcXLCTC3jDVTgMkCadR6c5gZbhB5UQthkbsLBL1E9u7WdGkvMosn9xebRVJjMPx6nvs9638QRmfe3",
  "key43": "2p2c4tJHfDfSArLMVKWMsfYzceqSb3qcpzt2hSKdGfWViTD3zg2ybf5pyueMoVseQfiwkwoQnVSm3kumjRXWp8Qj",
  "key44": "42AiSeh6rsbdTbJwn8HLyAj8SH66UA2B9HxhKo3afcEPX6jo7UsvtQEgorfA9urKMn2fSuZsTj2HfhgFooddPXND"
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
