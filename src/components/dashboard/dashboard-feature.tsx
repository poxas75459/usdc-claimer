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
    "VpRN6vAF6LNKWUZXEYk9r6JGPLyGSZbchBK3Lyfsq4h6rpkePnWFEUvQte7oiEo6m129UcfzkCitRmmdXG2R2Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fFeSgLSpf4VBqLdkNcv7bXeYjEuSqPLwc8Xnr9CJq24zgwZJ3bbRpNqgDQ39PfuwMYAwgdsd2dqPv3D5kkPNvk5",
  "key1": "3UREjCW2ZnkadinQE6GatwBKDoUWyJSzTpx9byLwnyXZGYiWpoASYtwNdVaSd5Az8SRfdyzKFdSgwE229k7JAcgD",
  "key2": "26MVvxFpzcWCKQJq6D96FJSBFBZ8aBpWnA5CxRj4usNaTvB6rLudTiykYTcPno8ukhDp5q62ojxcYXMUsQz2bzFC",
  "key3": "SJp4cHVvapFJ2do6RL6mFkoxQvzD2KUYAqQVUBA2zEj9iwXntHcDHt6oeoPzQGa67a3G9c1eE1PcU2V7igco4q1",
  "key4": "5FhKA6S4padvgxScRY5oPFaMMbsfpHbyXDkGZkKGwTZ7zfK5S5jdwXGFaWwtu92fuhupAKXGwSXn8ofjwZ2JdDm2",
  "key5": "gEjgwhFbmGB8AtsJs8NNDi8Y6jYga8Vgpkkza2d3fefuMjWuwoiLMF95nuT2UR5BBr7igK62hKhAPyzUq2kde7e",
  "key6": "42s5UASWaAQ9AWpkvc1toG45RYuSpGZksNq3juZyNpWnXRvSiw52wCPTgXWU6S88j5TqxADJjNRx2ZzJnibieu5v",
  "key7": "3sBF89SHLUNsri4FYTBEqRWAmmXnKGjoeDLa17spdzKiUA2KN6o8EzKqSewmzDaoa4SF95RjBnRLd6cAaRetf7Z2",
  "key8": "42vboYJSFMk5afuipn7g2u8DvZVAKPiRtzxyoK58fNiQSceGp8GNUSHQbtoqFVxwmGGpLupUMW8fjFTXhDRNQ2k9",
  "key9": "5VJcS5r86R1wpBMxpaZDNPRnnMssQo6UvXpTVwMjEMCekChH4PDWr5Bmtx3hm7uRFY6mRCERX8LP4B8y9jMdRkXW",
  "key10": "2z2ng56aS8x6M4FfHoKwfqpQYDaA8DhkYZ8PfVkJ83EcwiH9vPKnZQyam8od1dMgFJ2JacMicj9y1Eqq7eTYY1UB",
  "key11": "2f82NrhEWdzGxNqK2qSTF24Yi865EYFpQ1k2nf2GLDWwaFXBoddwQu5gZmucxnGbXdbGLpkRxEbnNntf8cqGgq1J",
  "key12": "5t8Pet624MuAre3PKYHUo6GrnkvPVngKe3WXr5Ruybytm41ot3hydmrM7WyGaQQW9jMHrwDwgDcc1cyqJS94UTAu",
  "key13": "HGysvr3Zf3aANwBWvN5hsVQ9p9zANzsjz2sFnNxboPddpFnUcBCWHgPBfc4N6e7Sm1fkFYdtcQ9FjUUMAVrd5MR",
  "key14": "53JrxS6kncqEECWLzRnz9WAEycnJeJCoona7WKAM1GwupLp987FdVA2RFYm7SxedTKQ74LC1esVdVA5iGrJMVzc2",
  "key15": "47uAcU7iMN19gZYNzfQRzk45DBP6Jdwc93NGjQwt3415FZurSPyurazyS8fQWdD2XTQUxFva4NJoWzoQmqn1Cvtq",
  "key16": "3uYaZx3ZWeQFZrcmaozNiqZvywnotkEdrFbm6oi6Qi3Wma6BpeFUs1fqRRCgpkQzhq7FJyQrEetjZpfNgjBFUbJy",
  "key17": "2GVcg599jPXzzCd9nQGsjJyMzomrR5dJVBz7a7anYJp8n8D1V2QGUD9J3EHfT2cWLHd3iDFDH2zRCRLXLLT8Fh9H",
  "key18": "3RJtVxFauTP9iPWaJydDYWsuqBdGEAp47YWorocwgV4tfRrSm18z8L3r8vRNuE97y127miFF3PGNFHxRr5zTzBVQ",
  "key19": "4YtkTzWuH9XPrMRKb551WRZPCcjvZWnTtgqp4fRfYPEoDNHCrLmMqf8gJrdj8Pf3cCBRAonZeZoXadcimJuA4GQn",
  "key20": "3fqNkagSBuRGbRBeRyssvdtSwfQvn78LwCMAudnwkx38dqp7azfxVazMB5Co1QnxQ7YRWC25rrKWcLuh79dihyXy",
  "key21": "38oh8oc2htGKBpq5V3bhrreehXuZ631EtSTSFha9q493qCR96TSr51tF8cZusvVdr994c1dUT2GQeFG1vogKMS8F",
  "key22": "5bxB5ZhwRBXAAx4CJ2pmCczrNo4hBwPm1diRMygmZ7byFcfRGwt7q7de7VKF6NSXFjohyRCGqL62qGof2fHNZHrN",
  "key23": "2iAtRn5wxkwQXnr3tHY43ZCADvry9GaQLqUWtAXUzBQULfYpnS9oxVG6GwjMi9daJDg4145Tex7AHpJSrc4uUaFJ",
  "key24": "4TFgCrxR5zEc5mDn6LmH4eR33N6UrZa6qeyJNaMjNFc326bENLzy2EZxR6NkNGhjRQt8Zv3qpAUoQnyXWHnJD3zm",
  "key25": "6nTEwqQZnkE7fZomQ3s4FSEXYgvo9hr8ktt56kW392nZ3T23tKn9ZpSDMrD9UXJp59tCtPjkoXTPcns9zzGtp8z",
  "key26": "C6haxLkxpWCjUKD9YiNVpqCFjNLk1G7e4hyYt7v7qnMLiobqWutT7Js2TAtF6CXZHYu6dcGkvX8AwbJV6UJqYFu",
  "key27": "2vYr59ADuKEPCCPyysc1GsPCYEZMGpj7Ur74hWjik1dfNsw6JjJ1f9e5VSdRveEpmQ7zyRq41L49aHPjgxZAr2Fe",
  "key28": "Q437zuBVeud9WS9EBFNggxeLXPFx3v2N4s4NFrvnokTX6mesQJdWnkt462Qzjyt7QbsRYNcuHAKmRbbYUUJVexw",
  "key29": "5tkFo7fTwRmDnw8jY4mEQAhx91qYkc4HXvFkMQs16Zkf6wKtAnBLuSCQbLYFEC47T8VvBhJyrqdwviMSxRS3cKXi",
  "key30": "5XbLDR8RDkSpKoCkqQ41FLsk7bnYet5rVc6eC1ccgJjFtTqbsUvV9dNn7KuHRg7ZKSgtq2VKq1nL1VRZPFXHR3qP",
  "key31": "5cqpTdRCeJKeDKQjcnS9nWYFkxLVWcYFyfada5BNeoFStN3eCC5c3HT3eYD1GVVFoTkVW3X3T1KyFx58hAm5VKFe",
  "key32": "3ybHeEQa9MB399CLoXXcghvXPBa1ska7FjJxNPzDdaZcdnDKPa213WTUXgosauUDKd3tfpTq45YLQjfuFBYm2vpi",
  "key33": "5GBEFYjiXY5ziPpYb3rnKA52vBRxFDr9sPJeGMys2RxZXFUZpEUGBF2u52eJMLM9iByYTSeUMgsvDFv9E7Hzowfe",
  "key34": "5PqC8hLS7vYnHS56qoJ93gckvjGvL6hTsNnM5X6Q1YCDnj3PfQJud3vf1g3S4Tnsv4ePrpSDUboR8UaUJWHjZ3tS"
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
