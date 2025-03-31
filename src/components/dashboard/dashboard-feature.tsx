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
    "2aCNkLR9dupn3wsFMaRWBr5vgzRtTkc6Y6ZdqJrLUoXoqDkgZcKdDRaMMtqYSQtcFThWKtxxTixdhrC1Y2Dk7EzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXBizW742HiB9tfXw7HD15zwHpSXr3yxuSbx8MKiFGG8nEQn7ZoU3SvoNCtrLzBT71p4usngg4kzEeLWahJn1bG",
  "key1": "4a9tn7i377ApkrUXtKf22ue4mPkXP3ZKwXyqgw5aeB6Ydt6tzcyFDbPgYj62PKsRtDmQkZX4fqDd2Mpg2nWjCGbB",
  "key2": "2zmEaP616nL5mvqtwJmwtsY9nkHPWLd8SZKr9375LSL4kskoybQDLEgnHqWL63LnrSxJGd1P4BUi1KNijpHW6Uvr",
  "key3": "5LYn7624HrmzAw3Kk3cQVdmEW6y6K7vxepkBGeFvi1PdFXbqkNR4X5ejTY4QNHi1y8sopXxSCVW3QZSmf4Urt9HU",
  "key4": "5rf8uzeqCW6rgSxXN1kqftnSprFMMNJYCnuVapTvGQJ4wLdbYV8jfiviwPq4LruMDxwJPYogFj2onXBAdGdJk8uj",
  "key5": "2JZhz6apqWMywLp29rt1FgMV1ajHw9MP6xucFox81GuS6MU576wjoR5aogKpL4AqwJXx2bgrEtXnbh35fHDjeV4G",
  "key6": "39eXByApYNAudEiYo9HFv2XvtrDC8ejyt33z5CqKxyNptj3yfx6nGvCX7D2DwnsoMLDirQsmesqtjVDyQdavLFwP",
  "key7": "5LTyN1kHyyz1zDFMk98fbeTc6RpC19yDH1a2yoDNTLCAXHzF2wimaTosTCxjx634MR3TRTnmELEP8ePqB2cepfWx",
  "key8": "2qfkZs4X989SSH3NGsud7f9oEh3jrGGvNsZZGQ2AsMePHgK3ghXxcC9pu3Sm13XMADXbkkzkrHqtkwvbqaEKNMuU",
  "key9": "3FoNb7Rr4HAsa47g5BHsgq69v6RidfNrSArQc58YQya1WSpEgZfoLdBNE3btVgn5Sbhu3rfzKLYy2xRguxeAMWHb",
  "key10": "5LaUCv4f711BAhjDDJvPSTMELFEgR6AoXHnrK8uZj5ZXwiLiCV5BkYK4LooALgePmzcVJE1SgqcHhFNNWzoctSEW",
  "key11": "4jU9j2p2sQPJfsJ2mKqxGZkMJ8c47rqANyzek3R5wgxRA37KpvoAhRtcMEHSPzk1eYcacUamFmV2Fzqupa29fYyz",
  "key12": "53qQvfDSX2XQbYraaisfCi9oRRosPWcLQ4rq5uBmG2NHJmSxjRWaX2imeasE4sWa595qbmZGtoQnvM3pb9tqz81B",
  "key13": "54xjyhNPNzccx9gM5H4zu1d9YwnoMqFtwwP21e7Dogf8bTFs9qVgqXDQxrhpcYyXkvHgSQZnKfc66n4YtCqP29Rx",
  "key14": "41Hf2o8yvGmP3s2cHeNFUv7EjgEqPq84SCUEjgnQnsx1FVdzqLZ6MwtFuQ4kttx3pE5qLdHMi6Latjw5AU8DEdDJ",
  "key15": "36u3sgdMYaWidHoCjnWQ7B1VLUtuLQeD1piJVmGJ6QtDTqfkKDVWP91riDrcorVbq4x18QFVkXQ5exDcozxnprWi",
  "key16": "42Kz2gdh1FYEAX3caZ7wJokY9CGumDkLDJgRiEgqAA6r5fReQdKJY5jSs4f9pBrNFV65dHbvThkBvKVs2eBM2BrZ",
  "key17": "4bxAcgz7dTRt4tjyT5TTDuZCuLhi6Yn42Wy6Za35Hxs5P2JPM88tF6uq79xoCfEPMtk93UuEQjp8kpBe5zGzpT9m",
  "key18": "5kaaz7qswinB4sDGiZc7dQmMdY8ksUSpufD4qE9jeVixJjUEegq8cNLisXjKGJkXRFE19HuojjW8pkUd1wWENePG",
  "key19": "4w6wjw8bB1bzujMWw9XDAsMjm37AgPLDxCWFjhaaLXJeisTvpa3jEYJmwshDXWkUevB5CdUMz5WiWn1vZUH9zhRq",
  "key20": "dGjGfhe51jfNSvDhJ1DWmJdc2tKJvTGbEasKzwuw1aWXQYJNtZYpTbLk5A8rEAiKjGydwXqxrC8hzTe36W2GgRb",
  "key21": "5zVjSPcNbAbmSQ68Hx1pCUnx5uh8PqW2ovqm2Hf4xugqdEX3vcBLKTEQUypSmzxi1C7KvetAMJuSrxnsKjvx5L3v",
  "key22": "4ckU4aGdCiPT9TFFR7ZqCQYKnJ7XsTZCC6K6ujVheqKCWtPPSuK3R93YMB7uyH5zHVykCV5kuga3HuLwcFzEqYTt",
  "key23": "2A5Bg6J82MLw2aBVaBMkK1MbDPCE5H3qDxSeMqCD41qupT7v2pmJNc8PMGRDjzLLQRDVZx5XVU13cYHyVQpVu5Mh",
  "key24": "2E4Gt3bVztWmbUTMXaSpGCDqwdwiThXLRU5ofcm92XCXDthbNmHBw3Xy4Bgj8vtupNeMpyxvnK835VZ9zsbv1P94",
  "key25": "2YWwevzGZxHQiHqe922aXvUztUQtLDGnrvHrr5ySEM95xJPaSdsTNfHrVj2TwT7MVkKGg3zu7LgdBXcsPcwKHpDh",
  "key26": "5YvRtBajv7HQh37e8R3vY7pY2UVa6FGbPWU9hAqE84j9WPK3BDKN6wUMUBC1vsVwZ2nJZ6zH8cZHfJLANmx2CcJp",
  "key27": "4mYwKgeyNxybEy75mnCHhQw3C4rMDQGAwJRQAG2jpkTykaXh1xxnDWnT1BXVYVnnxfyG79fht7UWaNnc2ysLY8Xs",
  "key28": "2LATdsb9xnSScSxQd4KL3DKhox2SaQUvuX3GbEWQXZgQ3px6Vwr9c1Jo6Vkz5Xfv66L8U6wBzJfZCBXxAYqLjRdb",
  "key29": "2nBAfagZdDipJBDnJLUvFgzBrV7AxkPGLStAnK7dWCjAaViZVAJi6CcZmSpQSwzSmvCDvz56TgS5cGovSnJsanyi"
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
