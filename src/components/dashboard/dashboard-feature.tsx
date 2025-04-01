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
    "5YWJetLWD4hC8x9LW2bQxyfbTcDBabcxP79pcbyYqyU9ZBhtnZjXZohpg787bjJifEEXS878xH6zcVYR9ikS1G6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTmZ7GGacXCeVaDeXu5WgB1hvvaWULNHqDAfWrBNyBKYfhxyAuQuJy5We2KSp3NrroRw8zqanTQBRdgLGJmB9DY",
  "key1": "3JgMhLoHZyDy4eUVD3EYrfAW2aSARx8P8ixkajcDPeSFvG8ckX65voqffrzDkkhvpZsmhbmDmLm2RWYZridRBUae",
  "key2": "5ozXA6p5Wwn7CSxEvPNomumBViE2XGUrnij9nGf7EB2y8yLf3ppMdE1REkR385rP7VXsmKgxUeXuy9gyHMrEBgCG",
  "key3": "5WWnQLK3XwXb1BwkY5FMUTE9PggS28QjghzJfJxursnfe2dM8ULNtyNqjqnnHnoBqSvqkruGrtZm8b1ivBF4vRif",
  "key4": "4swXy2Q5S1EsV7Se9byMZRJhLEXqxwJSBpGGWHRdoQWu2R7nhwKLkZy5GrmcyEpS7QcPH9s5r5PC54Gf5KQ3Td3q",
  "key5": "3QV4sRo8q15wCfddASrRW8LpGfyDcdNwHTsdXh4VjPEWruAF7y5eRJQLUd3tLYrzQS498iHyndHEj6kpZSmDmArW",
  "key6": "2mZdkvc1kRSJ1ZmRkCuBCYwHmWkZ2pj5N9kmDs2fiaDAxCoT6CntGVNfvhPZF6DBUDynWadcAECFKS39u7U3tm4V",
  "key7": "2fau6afwaNimhQJfodg3GCkwrmekLVLbwJB1VwaABpAtKd6HGmCQkRLsjkWoXjLgRNSSu96CGZzWENxodihUYfK",
  "key8": "4iUmQRqAFSgth7SYUmGi7FGLpXsmCmbr55hgtYT6mmrKimA5Eq7MCRzWg3NgNFQgKR2RjysTTV4xidKSjBThjnLQ",
  "key9": "5F8UFy5CnvKagpr8bPvGEcMQXQHAZtMs6qtgWtaj2k4iUhQ2LUsG92sgz6rfrbSK51TiEmRYRs6btFqjgtL6iTJw",
  "key10": "3ko8Bn4bhUoG7vrvu9SahbLkdbmV18zv75X2jWpXV2kLQu8g4q6gpU2MrKocrQVqAppCnN9khkFkcDqGHg7xCC8j",
  "key11": "2m6inzwU6XEDrzZJ6b4zTdX2pt84JmRa81xZSgF6MqG9eYtqwXfJyouU3rNJxbkKe37Wao3utv3iRyLRu5rYFBbR",
  "key12": "58VUq3Lh1XWU2zqFwjhDN3Udcaevi1ME6ABwqwYYjdQvbobLEaVZ6DUAnZJAKBE4AThgyN6jmQ1xpzKo8dravvaU",
  "key13": "531sFVSzmr7yHRzdTCYRt5NfBqBqvy5cfG9tyd757Gnwffxx2ga47f2icAMTC5J5knqL2TC7ba2EMPSszxGhtReV",
  "key14": "4eApyaNbQRUtv5CZpw6MjPRc71mQ94DZ4AryBtrAcRDLJ54rnTWhbVTHvCRHUjcXWmaTiHi1e2AqVrpJQheooa19",
  "key15": "5rC8PDxd5XrQQA9hSyD4VE81o245ytLL1YaPAAVbDLaQkUN2AS6WH6J4RY7ndvgVdJtAukDdBtUL9HYjrMr9BoB3",
  "key16": "3nWbihY9jXWBsKGhqkMi9hHhddQCpUB3EVyBDDLYtFcEbHDMqpBBzmqiTKsEsAxxjLQJESwgYTrbdFk2gK6huUb2",
  "key17": "29PiSW3Q7bnsDyyPrDub6g2HJNJtmpQdeUod3CGxe7QZhoFB5ph8kUCnj9NfKpkYrfYQSDHWMAEfAkNBno54BpKT",
  "key18": "SX3zZqzE5Sh1TBo737BatXePJgiw5cnwKCL1hnY5dnbwmMZYBFatFG5A4iweXBReGc5SdpEVhe9coLJxXufTtGo",
  "key19": "51qk6neU5Ntb9Dn5AnvsiUDwwrd7hTVFZNpEbJHvQAKaahKTCH24mpFNFnKudLZ4wx9s1ahd1tcN5ArK9vANMN2c",
  "key20": "rtPNbgtfKZkt2Y3eYnZ2hmCn55z1oW9cDQnVrszZuKnmtAwipubXiZ9i47561Q365wfUPdzDrcRD6k9YxDh5hto",
  "key21": "4yETBfEMu8Cy7LnFVrgE1ZBkCGJLtxbgeMkFmNN8dS1xmCxnsNu2xUx4ZgbYdgSaJDorRUW3s1F9s7NQ7AybQbYc",
  "key22": "2EeY6sWVcoRTXayt8FmunoQbJtL9JXnNddvsAMrzBRvatebqwbDGNQ1MpHx23qXdpTjF2fKPzntTnSoXipaEdvy5",
  "key23": "5xRx8jGovx3nq3cV5zhDBRFZYdcDepRhq4ggfSJMc646WivK5QjkGXpXnKZbSSSPJ9sUKhQgmtMALQn26qsfj8Lh",
  "key24": "28z5WmZ8MMr52xkMZcKKEqsWnh2bENZtRJV48feUXtz95G1PskquE744EsPoVMhtbvAnjRmb9tJ5iFah4T88qM78",
  "key25": "UVC5TbpGY9TvXCHg8eh35nVLi2fhPJ3za8swa4wsags9XwsrePJjiVV7FYoNqA6q2ndqLdQWCspiunQMkZYMu35",
  "key26": "5dxwHKkMtL1pGTV39he7raEdVxfVPRMgm2jD2cTaSRbr54GgAcuBd83STN4ScEcS7bbJRCPUb3bVT7QxiEuhnXoP",
  "key27": "4MQxdVrq6bHmUTnisw93NY7BuT1LALstBGo8HehbfFZcZhH3dcWMGDYsgja5zK2btwk7wQKFMG2sHegrf3tnBi1z",
  "key28": "53UPiwh3jxDfYKb5wPSvMexGD4ca6t6EuGPTA1LvWRfhi94nvuEYjMWtmyzACeHPj2LEVyAezFa3v2Z4ZU8zbjSm",
  "key29": "39oXiV6FRaf91f6CiHJkaoQ6oqGX4xzWeDvwKozaX9JMzu6b2J31CGzesua1ZHjSVW4r7fXeWHEhDfoNSXMqwAHk",
  "key30": "6575pK4TgZWm2ZtrE3HEamAXub3R1zgcwfDgygXFjVne5XLQvXzsEZujp57MmXKacR82qHVZnnKxdbdVjmD9s47c",
  "key31": "2sWKF2pmKc2MfhZjjtd841n1ejbppZrAcGB3Gs6s7rJRxsZXhvmXPCEwh4nMicWruupyyNWzTMWAXhTmkotGjf4Q",
  "key32": "3jZcNvcwx4Gx9k6G3xqbf7u93JS6g9nzQvMUAcYFVXTAuoyXTsNL8awTKHtyVQY9N7g9HaRdbJUi8rbbQAVR9FbC",
  "key33": "2NvG4kp9Kuae4Bp6p8MnvQGVq9YyVpZMrCL7zaZnPrkWYimtyGKzyafBudzKL7SHE2BM8BXQXHArhy1RPN8RjN6g",
  "key34": "4AbXGrVU4ELP6S2RTTDxTWiihwthHpJ5TMLgxXRc3L1ctGWmkEJ7bvDn7MC9QBWKVi7mxiMEcNTZApar8Jp9afKd",
  "key35": "5nfhuryqnSFqdC62uck9Jq5tccmPenz4mpgT8dYLHbTio5Jopq565wjHgD2Y6T4USBrYY9jRJ7JsRs49pwKZpLNQ",
  "key36": "2Ti4dAcEU3xA6Urgmi2nsxzhoB27U8iDJ8tgVmGcKah5zHDMCrRM188wfXAULXJLr6W6HsAtP6WhFnhWcyku3WoA"
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
