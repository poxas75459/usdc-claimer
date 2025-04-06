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
    "QHZ5L9khu5G9g1RoKQA2j8wjtosgneQqg6T9dJzUBKejykwdfApXEsi8P64NtgqCjzvW23zhtRJ86UZhCwudNY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ynr1ArBLabE2mUnaAjREJaevxJDfgv7izwFuTV9ihcuu3j9A7S5nwA6U3NPK8mXZMvVzczaVUFg8Bs9rNaA4xf6",
  "key1": "3CJQQDH7BK48jsMNoRz4JH6VmrFsrjQifXbu9qBtY4fhUv7E55FsXYfXArkxazHo7ysSNNzng1eizMee4iW1aum3",
  "key2": "5Y935aicjHbc2PUwwac38KmrthkTH9FSvufdCmoVYpbxWqHgj7dcKTTkEwCPLDzAh1TndXaTMSZbKmsjUi9sGtEG",
  "key3": "3e96BrCGGNLxcYJ4YhFqLipqcFjfr6ppDAuZBmqtVBTDXSM9VGBkHrHxPHihzR56tQZCncjj8Ky5SYabhj1gD6ti",
  "key4": "D2VUiSEiYpdNcSkiS71uYJKNp9j8fakW6GqcDH7s4fA9TrXKKw4BwqvgEqYohZVGaGWYHqumfYGRCVmEsmyU5Aa",
  "key5": "mZdViPCGE2HzraE2EdmZpeuh9C8jU6ZwxCQ8ij5xEwGoY2q6u31X95THqMc3xEWPQn4K8Dp1cBrcyEM93GVQyPu",
  "key6": "34DiSYSjVJMvayFudgsJpYGfh1Yqpq5XTWYe21SSyFykBXvtUx9MBD13yfau3WLfyBDEhoPNRTs4wpeF9kWNKfG3",
  "key7": "5VfTc4L32CsAW97F9A4AtE78dXgCtp5TuPdKXFt7VZ2JoJDEjBE1mW9NiQyrFgg1K8BeyDsShDRJYPf6weoXh6Cp",
  "key8": "5upYVXewo6EzV371ZfdSvmDrUVV1ERSrQ8uSgwmWAt6tqpJp8TqB6uZn7Tsu6nqjYAgWxhfRCiBznf32sgVnYZ8G",
  "key9": "4k9Mqc5iz6s97K6ooLioHfhySqfZmikRcSpTQ87MqTcXZH5skHeaS9kLrJN2ZiD8SQB9Y5gnMFgNntiGxRE9JVAP",
  "key10": "CF6b4LT4NiPT8pnWVRKryjkkLmsWDaq4JZFXkQyrnQ28c4hDJdFpX3WHi4PXpw29XwFW9oBN6zavTozcHVqMVzq",
  "key11": "2Z2qSChkmPcqtMDmYQj64q9D6L3Y4ZA52KmxuCkWnJNrAqWp3WtyMknwPLTyKDope2MXRfeaWVYezxvb1VSKNeZH",
  "key12": "35JhMpGDF784YrCy6SKAp7TWx1sPseR96fqgFEzovs8Pma92AHF84uUjojFbeNMnyfR5PDi34dc1Z2V4QSCGiLtu",
  "key13": "4muCUhdakQ1JokmiZCG6fEedPCqjWiuuT9nEtB2VUwDBM9HBUwur9ny9E35JrcEzqor1KKjdAyUFake4ZYaWeuBZ",
  "key14": "5djhTWy84sgYNZaxFme7p929amdB6k5twHb1uCasZhUgANtY1aEvS9AqskxP1FCfEmPWZLvLo1pVQ1tPnNkmoNp6",
  "key15": "CnkZHA35Uc896XpWeNpvMZWRJqFwfi6hk4jXQVB8GEsnrfqVVa7rDsMGwJ79grvSsX3AvyPVJdMSmwehE9MyAmr",
  "key16": "5wx6YDqXVStvu1veUeYJ67khkANuY7XB5isNgZot1MxeWhctSow2TJ5i4ny96KcfFcLNbCTYNuKdxVXsjLRA8ZAD",
  "key17": "3WaWJ1JWqnHa6ftYv2FocL8TE6b2pSxFV8BxTtQ5KM6Dvrnj8SXd1zx693UN6gDfow8QX8MfG3q6fKpcZ8KtjEoj",
  "key18": "28Bgbdyd54py4WjcugUs2o3x3eYhE3VUqKFNcevDHq5Gpu5ajcpXBVFs7q5oELKumagSysLKQ84WbvNE2XugtHFt",
  "key19": "4A9bCcHVHWeH4XKcadwHh3Q7uZPVknn5NHTdESb2VCGAsHUeyv348akNBmLsNiFuqfCxeMH8A5VEpGwDGz5BwwKv",
  "key20": "3yzRCtwnrkSxj2RzEYMm7yAGp5AZpZkZbnKPokYcBrWMTyi65XAugGfLVTKPnmqX1xzFtfyJKfMmbACpFk62K8aF",
  "key21": "33YkZLUwHcfJQVoM849CjjakrgAYgyDqCnbv1rGZ53FQc1fNbZwfRAzJP3evuQzsammNNMzUuP1bx4TLNRNxKKcC",
  "key22": "5LHqgCLoTvtwFHqnx2Vs63wqWaJXAVhph5FCFGiFbb4cffSFDSfYW7Ffwr9w3mTQn41BWCURNoHJMXWGni9ShPBN",
  "key23": "2d4cbNq3Sm2ddxBXKoVqMKVPvTKu76vjSGHknDFLbkXsXvPr3BaajycS2GAyDnkTTeeKZ1TupfJDXtvC7Qfb4KQ6",
  "key24": "36zRtZJK7stAsjoxogfH4HnNL929a2Qj8nhxNbgW9bTghtmmstAL4FAjPed1chYUTZK5wF5u9BJPAyVHgLhb5sE3",
  "key25": "2cZjN9wJ7YUZDFEFXror6axV8Xovxo4ZTdTK3GR2dQ3c5meAGEoxParKAWqmWic2qVqyavGZFqpseg4AT1LsvL6a",
  "key26": "2B1QS53KHp2zpo5YdZeTDxpMf36yU9MtpLMmZ8W9Rjrn7kQHiCVeiHuNBEkVYhcbkdca4dw5oD4TBbpxFX2cJTMK",
  "key27": "5WGHLD23SYdvWemPESwJGfdHBuFPEBKUZi1P9w6hLoYf62q9yezqHrgUartypiUGDbe4cfwFC7i3SB5RvL8dm8bU",
  "key28": "2t7vqyEQmq2utEPgT8UepC3q7JDZ5kbm9iTdyCwb7q9V1EMwDNk1DBViVXpsF2N5cmJ78388P9Fp168VL6Km1U4o",
  "key29": "5TLh6ja3TYJ7K5jhACXDU8fTphnp2ti9i9rFU8GRbeDMHVhSnn5moLKA2AUNsDEjyWQqo5CGExH5n2MdH9ekWNjJ",
  "key30": "pbHgUYejTDTTvnTAdgyXCf6cf7vrxVi1QSisxTxLSR6JQdrtbHEPA8Fhx9vC2dVn3EaxyErH4dHQ1DRvdXAWpMA",
  "key31": "5x5L2Kf5QfKa8asTq7W5etdttLYpfyWEqiNe5VoqJLYvsLuH38UY5cyqXPGwjsL9saNqSJ2q1kxF6yJHHWA9f2cZ",
  "key32": "62tPpaQCP153jGB31v6k6qBcBs42NUwvTLcSxr7GWZaNX7DonUCF1AXjfWcHQfYotgJfg21yYFkBZ49At6VYjkW3",
  "key33": "dx3y4qoHr39bP8N1nhtpACYTqRWgkiCynKKFJaxCpYqVPhed4Dvpg411MZbZeDut2fLHFp3pkdiqwsBLLk8nc3B",
  "key34": "4GSM3uBj3NdesSMJWT5SVguwthB4mDBB1WSmJzsCxk1U9uBm94KQ2aRUkQmKFV2LAgSDf1D6XUnBCwsz7mmtemb3"
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
