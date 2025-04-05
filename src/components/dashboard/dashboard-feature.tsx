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
    "2EJjti8xVi6x8W7wzXzyAvk8qMvmPK5u8UNpS14uewhDToQoSPPc4Z6bGSBSjURstfrnaeL36XymP1nmzM9Yzcyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xy929Tc24nXbpzwCThRupBuzM32ndttX7bDqeZsa5h2Sf9Y1kkTGx8dA4ma6G6m4QMmDHYbgtKGGZnjba9QT6GA",
  "key1": "5PEyR3ygFcQXWq81HVRNQJzSiGTbiwLDognHhuN2aLchcF7W8zVj1vxRK4rGVYpEhDdfAuQpiPQ6wQFzkg1Beqk4",
  "key2": "5q5X3SnczQqanaqgrFufn84SKxwReZPgSUuJZMBwTxfpJJkYx2dGNJsT4tSXbRUeyFPRpxVaqnHNHoumhUm13P4R",
  "key3": "5wpcie6qBd1cve9rqjn6YUHfQrwc9TWGmtCVaNMuyS8vmvusHE2FGxMZQWor6jmymMDE7bm6U4tkEJQmwou7ziAi",
  "key4": "3QWZrwjtNpKdQQ96gVvpcZyuintnwEbK2n6DTNBtokbPCQAsrC5Zx4ieUhjdjX6BurcECppAYYh7zKuwCcaaUi8U",
  "key5": "piQxHV8vXnD6uJrYEeifViMRoufJWX8L1Aj4H8y3bLPCGaDLAW8LqNStdK7LsdzZ8deKc2E52uibgHdztwHe35u",
  "key6": "mUF6jcP28RkCL3Szp4MzU8p3ajBrF2YTCzfbMXfZdzELZpW6mi6Dpyg2o6Brz6sqsYjyjkwCWc3TUzWVAFEnAqE",
  "key7": "3AdMaM8czD2bW9HnBVrK7wcBcRVN7nNSbc1ncYptAgKyKKvaDqcCj2peU3T3z585sobRryLteZaZQPPPubqXE56z",
  "key8": "xWEqBgcTyMP8xUrZm5iZ5PKBSjioHgKVtUrRHRNN42hEyHg5r1noDG9tyFh6odKkUNSrFVV6sGoxkr67Ub7e2Ls",
  "key9": "2HLUeT1xCsFmTWwfAxgUj9Aca1zU75DUxcJcADvMjkz9i4gP4N3nyTfx48s1PVzUNbBQkQysUVidWsnV4JNoCPB7",
  "key10": "5v6GfWfbMwm8XmCN3rMjHvBPj37sSPjUJN46WWHLEHKV5zR4w2F2doKi2osWyuWA7M8cVSZ9jeUbLGTyxzi3Zb67",
  "key11": "3bmQ2k25DhYymmx5oBzwvBcYzhN77dXFKvMx36BqMWBSw8NDnQGjUJo6duyn8c93fnjanKzGFe86L55b3jvWyGLK",
  "key12": "45crcMMcQUxLnME5EP6j34G4ESrdPRWUt46LY5DmSiiZnZgYPfgKuqzS2WL4NuBN9KjHYtcj9zgHzEwWSmsYR3AN",
  "key13": "3ZHHuvHrizbNkRWQezfyqDJwjyuV8E8enNp5vKB1mNB9e9PNc7G1KgGam7sLzhfCA1jzt1MfNLc1yGzDtcLRkpYW",
  "key14": "2SP7VuCWxvXmpP45zoZmHm92wVKofmGpMzqUU85T2oYwvr5LjjxXqqvN89gwhmV8n3GgWDiFG2ryMcuQR4Ui44y5",
  "key15": "ZMGKdnq5LqYfxrC5sYwpnRzt6toeAYNKYHi8di3kkeL9D4asRSxH56qDXVkVTaPnQj9Viz5KyVSAKgKYUPpWCRu",
  "key16": "3MvfjRhedeEU6nVfFcQjFf8RUSUvEND59WmHAAhtC7PzkSManWKAt5qBTfea7Cy7vfPvL6CEvzMbUJcuPJRkejtB",
  "key17": "4ZNW3n39JTKoJo5YrU8gJNqbQfc4978Y2c4gve97HCJqhSdD1dAtMfycwHFTkwChJG3d3L3tNx6Hd2ZkUc1JmZ9k",
  "key18": "KzZCfV9fM18RjishPwPLiS2wEChGVsKgJdxQAS9edoLCNgxZK8VdvDnzyxCsezLYNYupfx3pXc3krNZRSpyMNAg",
  "key19": "334MFE3pvjZfQeTbZTRuuN3SQAeaQvnF5Eqeug8hBFYcWuPauAgP2eZgt8C5sxsEmj4ucgNqsiQq5cgBGMvbbus1",
  "key20": "21Sr11fQ3Pzr3o8UABNTLtuLzdWZUUeKcC8DaN9TdnfeS4umv9abajdePTfKUXnRwHWVZs1CvhsE4AVvJ2nMtczB",
  "key21": "56nRRX2ejr9E5fj9dNp6tLvSMMax9PPmKsBM3DBrrN4b8DGzELTdNJorDeA2uY3QKK2NiiBVTCjX1P62EbC8m8XH",
  "key22": "KLDACak7J1EDc16AcKxrcTaZJcwF6qCafnJbRUBLMGTFbjigp4JEx7RdHymFhL2A3PjfQS7X6aoQ6CGGkFspBZg",
  "key23": "52fCewAnDNBAoSXEzwNLvZpKsC9iQZHfDyJ2ZsKxWErpu9XUtmsi1n3R64snsjnCipbBNkEpKP7E1WWw9WpcxzxC",
  "key24": "rF45ZkQEF6eVkvNp1f9TQhAzDihdDH6bvKXNZ6uWxPNGYxAAW32LfWCekqT7Z7WVZm1hY3zmJxuYBK7SBBU3q2H",
  "key25": "5yx3ppcfMo6dej7uxn8gPBwtXgodHUP8XXDQxYwW9VwYZeXenkgoBh3upjr3YTs4dCSosrpT2mGcartgm5uybmjZ",
  "key26": "64ubyAzCngAPpKZ7Xmvq6QfPwNDzkQuFrb4h8TpeNytB1URRxGum3YpBC6VF4FptiyqYfHkMFj5qfFPJcJAqZD3J",
  "key27": "5XVFc22gJ56g5dyZ9fp98D5QgxE7wxEz4UUBL67Kct4vxKmZUufRFCQrKZiZamo5aziwRgRbcFuus32oHdyJEZ95",
  "key28": "3oCFjh5p9VQMTSXZmdgxsoyR8sgDbwe8AVTS2xX8eC5BiM6RuQdEuxAgw7jDDNG1ByRDeKUseEc9GbcUcsTszGHW",
  "key29": "5AjYPxpboQu16v5o8P1K9Yh5FXiDiz3YvUWDdrNurijoW8s8EZ5hRbTPiDqzSqXTPC2qu1oVNSg3m7y32EPwXA4a",
  "key30": "5CuXSEbVwYY1HjWGqs1pmtZMVUs5NN9wpFYr2SKZjvGH5F83BcFQk7Vt9xnma1EUzx3N6edqs827nk5jPi5NkyjE",
  "key31": "Qo2U4qhh65RKTWdD7rJoyWtrjxYTu3SaxRaB6Esb3Z7hjHRERTFJqbTK6JE6kbUPkcvWbFwqEe439kvhjWoMjej",
  "key32": "54eN7L8qycg9U7Gcn1najgS4fWmduQjQjN6eMAHPLhnbAYyv8tbL61S7B2fPnYWc3mCotdbq73sMLCCapNCHGGw5",
  "key33": "4Ats6c68TTcgJcoymdkuvYFWRkmcnz1FcmtvJ7dMWmfbPjVBYWqsTBN4iKo2Pp9sRBVZzd3FVVHj2GxwBiHrgvEs",
  "key34": "4R4RDv2SHYXa75NcDzyEVeYB9etT5JvZEJqBCJz2LHyEWzLyWKMExgYRVm5jVXpdhCHts1DRvqan6kMYS8rkAX49",
  "key35": "FhX6CCaj7TuhPy2aQy713dsJpSWUJEgb9UFCubYW9Z2hf6rHqHBJzXqh5gHBUPnNHdX5dFDRxohNpEC4G6miijw",
  "key36": "3QeePbrUVP3CWmgn23gtszmQwtJyY9HrvexVpPPWTcLYQAVuxKXWCzSJk549AfU9dxXmpRpdVydzR3srhRZXFJNM",
  "key37": "NSLmJsbUVhqPvcuerZZz3JJE3szRYeVGboRBNfYQj79pjiA2LpUdTZbpJrKg8ESP16spsVfGd9uJ5tWMD6LPqgz",
  "key38": "4jKrY6NtSxUfoLJ8p8fc1sbKStfxJwsuKptTydBY24UzRViwy2XH45QGuXeoEGTCimP6EAZFMVSWPWdkJKT4qLcZ",
  "key39": "tpsiPfTueNH4yasGkVNsYXkKxkFVQx8ndtzQFe2QpBP2RXQuESh8FLA7YguHPn6JXCbPNgyZFEkp2U3cHGmY88R",
  "key40": "4j9WZSFRgjUzwxwtUYZKt3yEoAUv6ue9znuZWYzBpKeDVSefy5NAGp5z3rfq2TTwsTnxKE1fUjp5mXMpQzPWWPah",
  "key41": "4pGkB4xWgBw61JNMBEXRnEv34jYNS6wGW4VRLGkPBCg4sU4N6NCtNrhyZzwvvDERtm64bsBrS6CPzUWJUjgcRQed",
  "key42": "rXf4mfWRS3StkPE5Up9o2Mq5S7yG7ft2zgP7FmvhUPvVodVAsXc4SWK5mNuv9jMraYYF2d8JvSxZFwmj8D4u2F2",
  "key43": "4m7hTupJJT3z6sHvXuDNTUmhsXNwdLoLtnEwkx5LXL545ZnUL5XBHWiT7a2a1vWjN28sABmSfyaJFcG25qgG9UKL",
  "key44": "5T8SFecRmqVzaHiGsBh74LJ8izk2Q7pqh5PioW1AZs48XzgqQbbhSdUUVzNYhfLE8JKFB1kZX8jeXJZS4phAGuRx",
  "key45": "sXjiF5SbRBEin7X2J9bUMKZdG5Q7VCUJ1fpMxjnNXaRxJ6cMCGejNanJ1WR4Tew2ghgKHve3Bx9U3ccaawEdsas",
  "key46": "2bFyQQFuFfbLP595bLT4GViXhZ1fn1kENnn8p3kiVvuFxdzUcAfE9fFx3qMkbyUrPbEpSDcnUKHAM12o7bk8E9UA",
  "key47": "3SjfZ4pryPLc2YbJx5aBjWsmepru1iSQFNN1yQadPKsFu2p42p2tonpaxRWDdKWKaiVbwoeH1NUsuASmVsQzowwu",
  "key48": "qRP92ifxGJD4ynwbkfzEMo49AzBuFXFhsAVrVco7k8Pcsro7LXAC77jnyV5zLxMKfXi7KFhV4aEsDW2SaKfWr33",
  "key49": "4vxMjQm8izkrrFjZyTgazS5yTLLXdNGkeXP8kYmkm7LVRQGL52Jgh1ydrUUoxAf6WMo1ZrvRuayuASxZwJgfxNhG"
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
