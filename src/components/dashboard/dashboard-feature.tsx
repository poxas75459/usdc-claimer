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
    "2DJCiwRVm68Jvjy4F8b8Y628Ca7WhwC9yzUMjkuGTC5BinaLd218H21BNuabFscpvKN9Th6HtQVzb1NeabvWvyax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3NanF9o3gHqZd1uc9MwT7fQrCAy5QK2iPgXEL4iaUNEGNP49YMZu8vzuTu6f7AhPjb6TJd1mr3NBhqXJ9yYVeq",
  "key1": "2moV71MXFre5cQtZ4HRtEv9bCrTTM7FJuQgYCoVznUpecUympqbmAKt47bEfNJScTicsDenbABiAN6d8ugASUN9o",
  "key2": "5iBvQtxscxXHSbnrW7Mhy9kyMMQE9pUETH2KqNF9vJt45LrCBF5tsv5ufGCuR6TTcF129G2XXY7pduo9eCwveMab",
  "key3": "3ipPGQacYYWHMEfftPtNfNoNJY2wrD34D7KnEedF4C3Ur2V23cDKfbbrzE2ySMyVTyiTZTTs9h5tbMWbD3Uggkqy",
  "key4": "3PHymuuXSnYNWxcZg4B4F2ViJiBzfkEjugNbTUSUN2QH5truRtTB3KDxQTSpv5zqrE993hDztXSo2M6TgmE5BXyc",
  "key5": "3XRiWdJsiRTjqtrd2DCt5RNdVsPqVwA7bgC5DuHgv4jpNZQqxzYF3x7or3sKD4pTTWT1hR8pT8xCi5UA8DXRTWqE",
  "key6": "5vywLYPCKPVcLyMk68hSyy8QkXB3YrdxYmGgbNqDq3zfSYoGJDssdxCVqAmU7UP5cgfQxC5STFdihkAyey7ruH3z",
  "key7": "3gsvS7Wt2g9vZtP1Yxr72v53J3VXHi2D5yk4UaSF4w8tGmdtSwd9DPBdUzrJ2dvxym1ddyvmbYHwbJJgws4MmPk8",
  "key8": "PVgiHF2LEvc9C1bxw5bumrH9FSJoMe8xGzRVTuWtUZyiLj6V4AyV262Hs3pxYvzTPPtsFLAeSKoN1szLAbHW82M",
  "key9": "4457zwjnhZBDSAijLuw2ykJU5aPVoVbRn2zZgX7bu8mhLWxcMre2RktrAxWnxBKXmshmeXR64KEaTVTh8FWNBfiL",
  "key10": "KQsMB44tqxxzL3Qn4qftZf5HgoogHtUS5cXDPrUcYyd4X5f5GiKtmETHLr6b1F9nvMfBPxkHVCFnUudUwd5GSER",
  "key11": "3VhZNLoMhtUtzoY12g4vwdKmzUzq4Me4yX77go8qKHAUJfZTWg1yrECKokRdoWJ4wTt9Eiqg48Xo6yUMCfx81Yq4",
  "key12": "4gTgMspRfFMV33MMEPAAxQmy5NVQgE9Zhfx4Er8vihHyhstNcrcYgWjNB3zUAEzGxaqiebDgWy5yYx6xxBs44w84",
  "key13": "5E52bd6yUxdDfgPtbjbCZYKEfLqoZg3akzZyzqHqbDCk3V1W8d8bvUHA7VEC4cZTLAecAUy85roYjfbqKYt2gDtT",
  "key14": "2cYLbZGVLMukWCr2o1s6hpwWzrnt3sQsXmwRMGz4cCgfcYFpUBuac3LdKpwUDxChKF4d759gb2qqCwzBPEULTu3Z",
  "key15": "4Fx627YjCpWEzjNXfjvBTte3bpa87jgPK1Q5TviqA3wvBzxEyZjfPjHA9yeV2SYDRH5rEVra3sjMdeJXujKsTLLf",
  "key16": "4HDdTWHfDL5YcsTL6kht35fRbuJyvSRNwBYqDEezHfxYCZvD5N1ntkpDJugVzDWANLN3FkKUx4ZGAQmV4CFTqK89",
  "key17": "2LFZUdpVFDYMAojCHvb84BnrGFubo9SpfN7A1tRN9SzP9yFw8rwGH2ao6Kt9f8XYuodFyxxjC5D1xC45EVtkwm9P",
  "key18": "4jgr9TupFzjPxpYtH1zpHtX1jLg1RremLXr76iJhC77MCygxBEVHnRNB5J1tnSXMmy3H2UkfwU3Eij6jhzHiDjvs",
  "key19": "2DoZYiYbCibEowXQ8VvNxeddp26DQXQ3cSbEjjW3cAJEiKGthMzvY4hedgASV1yTpvbLU4PfSF9MqeGb6DToZsNn",
  "key20": "5p4DrGuoyhyyhTrsqMbgHPVNPchTBhNFma2CYeRha1We3eH9gGNmMs19e5GKVctGZhK88jbkdMZ6BHWEUh1ezg24",
  "key21": "D2ZYrqabEcQ6GKV3N1S9T785jtPBYhoVQiSkxPJN6TxBVK71FkQ4UKsUE1bTMuq1YuQMEadNdQutRT7DMBgBK4Y",
  "key22": "34QXhktneEtS6D5TMVPKJ1vfjSzQUJXofBUN1VgqEiwMi6ghZcTyJBR9uSB6BYaK9Yuy7R1gHKHexuvQu3scc7oN",
  "key23": "5oo9oRaMnNq7ceroxcymqF63WNjFWmcy14EnyFFBK7BEtM7Uv7fBaLzt9CH9fhSEVSQgC1WBfJHYhvfaBy6YxRPZ",
  "key24": "4sxUSBuVyDvGdaRPYaQ1VYfmgqRfZFrphszF7T1NywaNgHdmHqBaa7s5HRYdsdxMmzEj8BDXxadxeJ4c1rfKkqFr",
  "key25": "3H337oek58Y4iobTcApKdBVyQVVVhuruBTvJ9UkVAXFu1NdctTde5KznHT29c9T7A6RAcsveTW176vqHxQM1o42m",
  "key26": "4yhdTHntLyJ9oABTcnp7abDfehrdBHKC2WE2qkxwoxUTBP9fnSZjZPPYmPMC6bBLLKse8hXtA2qn3ZFvR9MCa6kr",
  "key27": "4W1x4njQrFgGgqC8hKJqZaiT5SvopNxFB2yBdMzag863pbwSorusmA5pEHhTrfgthCESNyaQ4g6WR9vSk3ksWBvk",
  "key28": "cee9L5cvKLGkBEWghdh7SArpvfJmwhE7uNe11SyCwgSYttGmBe85dyHovyfxYhqJm2oszhgqvq7KG9Xg1qk2rkC",
  "key29": "4PQE7P7mwEScYdPUW1yjyUHjFF9riWQ4A5t9mb9w56ZtXjxkP1kGwsWqAny61aztxYUG7cWKPXJU83kYF6RBW68M",
  "key30": "3kjhVgRSdXXc4zSMmcb6A3Vkgd9xL98ZNbZT8MXjkWHVUJpp6S8MDYiFrkZogfuxuLUHEA6nR12DEjotYYAqKAG7",
  "key31": "57GuKtucDBAvphGEP7Gpgj4g37eAoPQ5sB8dnonSM8hmd4wtLxRycGiuWf7SpVj32XL5xifTpktHrRazEwkkeZRr",
  "key32": "3u3g9W3EizMsU58roYTTmdTMuBQp3qCzCFBoZ2QMiHqPdDE4dEba6RHxivn26siGsvTWhsZkJPQxmuAmNXVA7r4n",
  "key33": "3FjTCWYDj3zqnuoDdisWETj74RsuFW1utDBmFXKPaUBf8sfLVRBvSD4CFVYjRJBTjVAKxpsqPkUPpk4V444DbGwY",
  "key34": "29sXezJ4g1ECjq3NNyWxfP7Xh3z6CemYvNJFmVuG43Rto4mfwtmmhYhA8Ajs3AFVt7GUkU2JNbifSAETVs8qYCm4",
  "key35": "4QVvc9nsbq8p4tTS7XnLaxwtQ4r7gvPbgkbDYgrQX2yxVfbeGG3M2fGbNvvUSMLsgsZMQFZfnWNHPRRjq8vhrJJt",
  "key36": "3s2QjH4nqoDfuwBwHXn7CxBf9Wsm2P2mN9z2wrFpjvQS4ar2XBcLZwPGVym2QPTpr5QUdF4CeMXwEmPKx1dS77Hx",
  "key37": "2GUJBW6rHzagzkCZCafThu1k8qmrcmSm6bis8WqP8t5rS9s5QEHUehm2PwSzkzjnwXutwgjUVi7ytkpnHv3V6B6f",
  "key38": "389prmDdnUrQKaueQ74YTk6pJFhk5SAVJiCv3DoLztwqk3YwKKfmNU9JsbUrpTEjksjCMaXgQwijvJq43pAwac6V",
  "key39": "4rynyUeLYJ9sEqpPzXYX2Drd63NiWqdSRUJZ3MwMQz8txURUFcTKQ6wxryQrhCYabRSajJAWdBAowz8CxuB82vA1",
  "key40": "3swwCqn2ujwECaCWhxEfkJMCTULYKR3QgGC8TNszzuVoo2PFEdqJCQrNCv3x5agUq3ML9TVpkAvyy5vFQnXZojoW",
  "key41": "gjM9VS4aFhyeUscnVWyfnBcjc15DEK2NxMxBpvqtgL5NBX2b36iQ8cH29x9uso1US5VEStRK2arprk9Rv8gN9tJ"
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
