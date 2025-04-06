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
    "3RtytPsoLvtKVFLoZFbzuLh22q6WY7j2TorKpzLtJ1gJU4JC5wKp4HR1eKDYSAQokJJkW7ytcPTC5QApt2LG1adp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXu5Y9tn4a5kBQzN3RPipL835H9KhnyahzVBPYyEfsHc4HA7frsFTNJh2nFaUKxxWaTUtH5onaRA5GQrbMVGkaJ",
  "key1": "36iCrRqJ11CKrdoDBT8yoG6cw6QFfh5bWPXpP7VFJYEZMmiGviAFSZNPNBWnfhJjRxvNJbXLqL5YQgoE8VyDBLoy",
  "key2": "5ByenVaQ8pTJwYmw9qspZsYYUA5W56VTiRJ9UKaGLLMSbwgNokmdZ2JoN2ksdDeodVthWoGk4sRd5YY4dLXn7R3e",
  "key3": "56yT3wuswr15MzwtStUFEQxESi49NH9pNkWq1oaVo5oVS399UjozNNogMw9xeFFgjk5tVVqa3N6JVczt5WFN4zP4",
  "key4": "rLPq8TnEngjAdsC5ftZ9xo1t48Dp2biCM4AYSm8r9mb8eVdKDWJBLTmoCXr8XofQPwmewLmKydiHNNHV9TMuuVy",
  "key5": "ayiRRRM8JzNUj98cJMt9ZGLFe5ZyRzP6XEVN8SFkPfVF6caC1s4EENNsRAkL7aHhbdpbLS1oJsARu5WAMS3ReTQ",
  "key6": "5yNhdkL3caXeffBhAwEFaJZwhGfmYzbnjzmptCQZjybqnFYkidBhfnrXk8M6PTABtjEBt1uriXWYp3NXFQZNizXk",
  "key7": "2gUnwwVEVEMupn6V6fNicp9UGTyYaViGhrw2q99zbmyUoMByQk5ZkR3QmbRQnQZM3X5cCWUwFM3QE28isJejezWs",
  "key8": "3PmuQFSmCJ12gbGecVPFmqGidVV4ACQXzWmB5S4rR4E3NMDuhU3hY4krTrop1BwF6otPFQrm5W2nXbd5kHgsqabB",
  "key9": "4W9WsKtvMmdSNKLsKRyWuWLS8HcLqDe99HHF7ckoEuJWm6vPSMQhZqXnH15Y6zPfHph4DYRj94jxkp6c6sb5XBg5",
  "key10": "4Fx8mH7jcLV2r7ZNHu6ShC26dmmAXDBkv8S2GXZkrDyZqqbUiHTvsBBmVgzQ4mGwobQeQWM49uQNzhWf7f2dkiHU",
  "key11": "2CyhF9yL8AzdNpJ6oSdvPA5BbRRPAJDBK2enLgMy8eAYyb5EZGZyv7wUkSs9J9FKqoYoBKJUhpVFZpxakU4YzWpt",
  "key12": "4vnbptc4iCARs6bRLcNdcKEw7pgybcqeJFqTkKiVNtk5CZ3UhRrXaePaZ2YQPnAxNvNb7yHSXUC11YFB6fsduoQG",
  "key13": "5njTLHxcEdshVKBoBrZU9obkof9bXphFJAejiQMZpEjewgzjydsExJbZvgKs6DSbcjSpSWE55r3D7ydcZUEDEddK",
  "key14": "2afZwt6kkyEhVEor95dXPRPcnGxtpwcwEvNVceM1HXQvhLCJR19JnbVHGDWNezr6hjAYEGbq9uscvS9QJdPgvJkY",
  "key15": "Q99XrS8NtvsNC6ueC7RxnnXfdDLZQeGm9q6UjCAmEQPtuNTXhW3sVV4QPBMzcXdFRat7XpBVrbvf1jojsG977jC",
  "key16": "GNuAteSUW8YCrYojnJS7MqxBNpsTpxUPvVCvtMhdrbcP7kLVU13XTN2NnoipXxLvDDzSdfVqQo5oDFdcqnW58Y3",
  "key17": "2TcceNJegXiSCjxvuXt4pwPw14ZQrRjpV9zHKx7bLuz2N7KdpA37yXy5uTdQJ4Liup8U2rRnkw4mG3hXnghct5z1",
  "key18": "2EWgE6PLqhep3usTq78GrCXfYddSSYWUniQTLmN8icPftN6g34qr6htPw8qn5XevXgCC4WPKCxGGq1YHXZPL7PH5",
  "key19": "44aGsgmVid7HWMruYB994QsqQ8ztGjfNnEVdKrh7Qh4hMprbaeSHy1qyuDsYkn3rg3BpugiCxtBTg1XxiesDgk1W",
  "key20": "5Ab36tALic5HGNAq7VVsBW26pB9vuSoJ3e3CMbWDrGYePg7p51UbZZgWxCh491rYQ2ArvhgExgW8uPdfbH7VmoAT",
  "key21": "5KA4uMpRjHferFKMUMPTCVQkJK5ZVBUzjorBxsiVGP1ydBm5cBwke1pbNMfnrhWq5dayMe7p7LH6wAsNmAwxH9sZ",
  "key22": "KZBcrMstN8myYgC9KpNoj13uoCdq66JkaPUyQXJa9ZnBQwGhaF1Ke8rqcT4U7wF5u6MZksuq69xtqiat33PPfGA",
  "key23": "4vsisG3w43Xko4AoHTGoHdEeLgXk2X7j2CydDjm2ohZaWyAxxUMtEEM2ifb28mTPk7GPPXSg427TwTDSPqBqidXs",
  "key24": "5PuFxptQJb9rzsUvBdNKV3T9LKikUMLvDAQiteKArhPbWfVYynBXW1SUDHYTTUG2S3QAFKzuc2V5b18UuoTyMyd2",
  "key25": "2J8S2R3RRUH16zPsTDj7DryY8qDL4YN1cMzbWKxsPR2r62MoWHakmkAKPiL4EaX7g3t5AzZPc1Tzde9TW6zCycpJ",
  "key26": "2efLapK8opw7tb3aMbqoj4c9CQVyhQCx2YmPKAnD6DfMndADJWybFxk2JUo4THYAoD71Nj2kCJ2gTKUzJoh97m6r",
  "key27": "q55tvsaUKbyE8r3zshX8m7ovVTTDPzQLJJmE8RLXYRc1GaezcAKKL92AJEcn5aEkhhvKAsrc17XhxXNNRZdtr3j",
  "key28": "5HZGCyx1xxz1em43TXsxYwer1jLUE9wegkuW5L7nTtpUjjfEaEsA4MHGynYFDqkJkvSRd7kTAFg2g6JWwCfUYkJV",
  "key29": "p2rteSjueLV2MNHqbr27cxXZ7wpQqBp3p7NkMNCW6em3sodYCN4vjJ67Hm1RPf5cEeyTzaoEyi3pQRd1YvwMJpE",
  "key30": "sf32PrkHVvRgJVJWsoVnx9g6EduPznDE5FSeTzz94SYoNZThm6NqbxBhLpWaRvRg6CTMyZYb4dJpzrTob69bXBm",
  "key31": "5ZDQTFDwCJENgggkEarz4np3PMbHeJgbZ181W7PpS1RAZRJGjutWevTibC4shETFgmwCitFNtC1YfoZznQb8FrTL",
  "key32": "2KdRYGzVZdDhw2e1eCetS2eHt9SjshmUvTNouD6gpX3f4zMPG7rySUzQMqibwRU93kr1NMrkm9FCYTeJK1k7MpRq",
  "key33": "2zkGWMg4YS5CqxLLBNLb1CSGSyWxSdgKFpSGerudKeTg5cGGPTbu7qNGo6rhzCSa83uqaHJj3eAtWWLYekJbrPWP",
  "key34": "6PTyxYkgXkfbQQyUovfAkyJf1GVF9VvnCRi2kPDCcL1uKFvkE5mPBgdNp6FdP1RL3tYBjnm2qMDEYqW4cVYcfhJ",
  "key35": "3S5a86kM9fXsGmZaQuyD4FLTgQpRr2fErqsXj4v56FtNCavLZUKTc1Y2kQwZGsUbc2mQGvd28S53jUCXBPgNEEvr",
  "key36": "3r3ACGdQPMuoRQbSp47whiUETJ7rHMN5YJoeqFPs6R7UkL3mNZacXMAVFyreqN5xABZctGZDQADWutwNH19X8Lt",
  "key37": "6LYmam6M5spbz3Z9ieapoezZW9xHP9SXH8Q581xLEFWWeyxYjpmhFmGw57PFii4Aa7yNytJ8na5zUtkADVtLTtv",
  "key38": "5CCXvfG1KwqNxUHykoCXcHwYUgYiMSYkqPgd5s1MgZU8ST1MwGLjjDDEMpgJEcLaSVCbFo3TB9JAvTX44ZB8F2DD",
  "key39": "43eDVncccJqJJNKB2k98JJqaCESMiFA2r5XswrNH48rfhFVzieh6QCcTbdboaJNjTzLxsLxDFipprjcxmnmeHsCP",
  "key40": "2ewPLGn9qMeSrVbeFGU6rS92qV9Caprb54MkBY3Y7judPPJE2KXFNKGcMPjQMqzCZZafea8AYebGJyJJonViHmuQ",
  "key41": "ZpVFnbXWiECiaTRVkudZUCb6AyDcRkhNuSspJ5tCUV6PfkLk3gChgk3ztCyecDUAofajiGxBh6ZU6RXTcyG8vGm",
  "key42": "5egFMr7zkwBgKn9gvw6xkYfgX9NWcmcjEhaRJSsyyBAJLZj9BFWu3jDtqQ1JnxfUwoobHAbrh8g9sbsxid3sG1Sx",
  "key43": "3TmWD9yn4gJp5PxgfFKbDjmvPmxg9Ljy9sQrLa6iVbqGvTQTMEXsGtXfLW3nsXm5XZMmiomi64MwRWrBR58je4Lq",
  "key44": "2WVb7AZYVi3feHB1bgUA9e3oejHmg9M57iwTJjp9JbX6hfSaT5cvE9jJPSPVqFJwUziuKS8NcoqfE7DX5ys6JchE",
  "key45": "4csHELYUo4r2wLnCqbi52ozQZzZZdpNQBu5q7TzmhaWB6iZnHbwvL49NXhh9TZ3jSkjN98iNReRMZQTdq6YPpZ5M",
  "key46": "28xoHJ6raFJK4ywdsaNVWS8KuLkrx3UQxEC1478r5Cq4J6duZRjVu4dafue8CxX6br8enNEnEFVcgPL75UZS22wC",
  "key47": "dXczAtFAcdvY9ffihiU21iaq9raUoDH3QNocx8XdiWZKcDJLFo79w62j1YLAMjJNvhczMGwZqUuQ3dzTStETDkG",
  "key48": "2xL4eFFa3sWhm8hYrQkp7vAAc2yXHhyXWGa2cCpdDz8SfVsQ4u9CLiXvHAFBj8priJLjc8FpHxA73VUGvA9KEh8e",
  "key49": "4F7PK9FGCYGr5gQgn4kgmi1gf4gA2vQDVmtvi5DoSHFwwBvrMFvt7uCbqt8rspeHDG35Gb6ti2oV1ZkFewGQxNV6"
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
