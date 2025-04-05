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
    "4LiurpohvzPe139ugtmGnGX6tB7vuWzW1PQCfyoZ76KfRGLPv3Hh1s7dUvfYGD3NAk2n81nSwHqB73GRXvB5L1W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5CBj8UogH5ceoUspMUCpSaV2Tk4wJYRJtfoPW2rDfSMpBRfbPCDu7saYgoTL9GKqZfWUzTitrqvtN7mEeBRBoc",
  "key1": "w3hsYzu4qShpfczzHznsoWdFiqWFi9yAYRNU4ENh5okghsxTek1jWkyuvGxtKzSmWN35xw7CXsHWRXmgXdkHUKL",
  "key2": "STP6YXWBPFnYjSyufTGKGfovbBkp1xib8LgouzQxKboaPMMuxJSaq6hRar9RcziZR2sRyu3wrDpC9Fi1fWncuHh",
  "key3": "3gGWN97H59JVwMz9PTNLc6s4y2oiDVcJRYnruNN65bUfbrqNaeMGHamkZGrQ84a8UtsDZqPQ64eJh9T8wEFiWL4b",
  "key4": "3nTi6GW59Hfif9d6AeXg7ghKcNFY3vDA3C298vZhaBa4agAr7u1vYXDAVUwz2yVEKYNEnsBkodRQ3d4jvavb9Zfq",
  "key5": "3Gqha5S5nZ9qyQ7HTs8vnTE9VMJry8mreQHVCaMXRn53mN3myzBYntVsNVrgJDbgpjXrftWoUV1HUioBK8E2A9z1",
  "key6": "5TwbEG1wZQK7ZGihPNNLPJiBut2ozUxiQEcApyi56RS2ZyemjrjsJP2WASXUs35HPCqdtuBKUVKjVYVTZqBVBRBY",
  "key7": "2xDKjQ2yuLmprYehDHMZ449zd88QPPEnndjXQVjwbwdv1EWY6eh2j5rCf9pzzVTMLLqyfJzTSegmyuDV2a8yScqe",
  "key8": "3cmYTdbfzwWkCuGSCx5iQpcm5qDzwQ1r7734PEvK9H18pcGcSjDjrfzyzGovKUrgcRTkdq8u4ZL9wNRMbydLjyyp",
  "key9": "3Kk1gBquSp3DdKyxG9yWRACeBJAcPxNGMYxA7kmQpgVhSUyo9SN3my3Qks6Hz7Vt1hyyJxf2yxM2QtAp8upJYJns",
  "key10": "3hwMPnuHgE2G35rsjThwGWkeJgAeoBMPENmXPT6NJ87fr381fPXg8PziZvNtNvM9BTwoALL1ZP9ej6qWAqCJpCWj",
  "key11": "2LL4UQD7Df9uhuYHJfjBKRRNtFGdMLuFRSSj8gNVsL9q4qMkZfgug8dPw7NP7wtXucdhjFtGcszYHAD2itQLNqii",
  "key12": "4cFN39ApTMEr674CopmcgKTdqZCSNBNZBy9Xhszm8LoVWs8avLr6oogLgcagCJoetwav64mnjYzmE6oZA7HYRtQp",
  "key13": "4WazZzHwsKhNfKKvsmhESVkCb6EAEdYS5jjHbD3pRsWNFLjhR9YRb3w3v4k6mummWCAzfLmw5F9jiWmf6jhE9BzZ",
  "key14": "2cN6K7C8TUqy5YgLrh69MKCrt2hpVRSqwiRGh5Hpwu7hb9zY3be4Co76zYQDF3H7ubKdJ9WuGsDZUMqMeanTrpry",
  "key15": "2bYgywTB9DPnTpEWDqZLS4ZNKym22uPUaaYpUWVxpgCqwk9vfxK3Y3qcxEZMAGwZ2muVsjaQtAQBw32ZEkrnCksx",
  "key16": "2XZQ9849B19SBVPpa6nUpppSZg6hG5wZFTTSTFfo8q5hBVDeggPydp2AszXPgtsNtVmGwWhgjbBr8UzuAVB1BB8B",
  "key17": "4LzHr9VeW23G6fXTxAfRsmsRhqw2pWNjyK9ongQQhZ4dq8tmxWqAzbmwdSA18UTn88zP7jejvNSW4MVErgcx4vBh",
  "key18": "4TRk2dJ5xJDjiyXxgKvERjQWtCmiHqxCNeYZEEXpY9RnpqKZiwoRK6UAmAEjiTeE15BugubScXUZznpFMY9NpWew",
  "key19": "Gf1PQa5dsSZTqGErKKQXcqw3ZCsLzQ1uHM1td8dS2x4kRkZQQJUqtRMRzezBijg4WBSNB3PsV2LX5NM7gUDkNfZ",
  "key20": "2dAm84nNRUA3BfhC7zQ4Bh6sATNY6VU5JHrAskx73pg8szqdepCBtdizwUFARh8CQYc5nh6HriCL2yKiZ3g284Dc",
  "key21": "3BngVEkHhXD3UrV2iU5d1EtCrozELA9oR4tj9ZcJwhcdUivjfTMUyhmobLUUAEa8nPiEYKqUQhFEkQhFwMZGoLbH",
  "key22": "LX4ptsB44vhaJ13zHC4RYNjQpaEEA2r9SRqYKjmudPNDrYZEpnae2BMByZq4QF4kxRmohCQyFx6nh17ivsuyYaZ",
  "key23": "64Ky9RDHxxSMRtvKAMeb89j1HFeoYVq5D1b9gWVKHjGyvCwBG6FXGzWywKzZVqLf1XKGortS6f3Es7u3FPiwM3eX",
  "key24": "3vStBTDoo5hVGAntoqzXPRSd4q4dEWzGmHTC97G2cNH495R1KVdUpQ2g7d6yJ4p4N1J2Cwjj63gBsiCBJQbEZaS4",
  "key25": "VjAScciAe4ksuoSqbgeeNekaswb6n5eqHGctsA7hewuEzXpKVa1XeP98kVdk81f7AiRKDXEGpzU5vUBWLwyy9fQ",
  "key26": "5hKLMrKpc18RfEtBrHa9m4S4iBRgkSu71apmaFZA5TSGzPfpye6s77MhePPrfq2EMFA8tnmKxzZLP4mEqt1EMtjs",
  "key27": "GoLooz2enJpcj91emCoBqC8jXZBqyaydNZR7VSB9Z48fCakNei6CGf6CnzgfRXzUkRqSnX3NjuubNeJqnamDdYV",
  "key28": "ZpbYay4SNDtkND5JRHKRW1ezVXT3z3acvcRAfn2edUWU5AUMAuETMhG4SdXoF8gXu3EBRRqXG53rddBwf8FRSLj",
  "key29": "2KXXjgUZ4ue5yEhosHAS7yQKNQqpkEDg83yp4Y7uPmYqYMgUBXvgKSC3zicKwTPzteuHmZqA3xNJ3jhRKojL2Uzi",
  "key30": "etAZfXfWncPxJUqy3wrBgUBofMBUBzYmmNtMKJ3ciz67npy1pmX1DzZCq9GjtU9oeUeyk5kXNSgLQtQu2fXoYPx",
  "key31": "3AvaCNTbjyj443QCBARRZBRZqNDJzeDQb4jrX2ACZ8daGNhw6YqpABMuo4vDmpmSENXzDtJEcwg7dsQgd4QPQUWG",
  "key32": "5r8bbLRzKucsi5rz1dwJvmodToqFkrxx7BSLKvFFxGNwZpc3d7Wz1CtSxaZsfH4o4RPkmdkeLCGNSKDauWDfk769",
  "key33": "44UZQBrD2X7JSFyik2aTUjLBPpb3og2ehL1dLWoK1SS9cvvvUunx7YZNhzozS8xFwpwcy1qAXSfW6TzejjW8kab2",
  "key34": "QRD2L7WYGF1P8YwHtfkrNnMvzsaeFPkADdASkxRZrNfSowYC9avVbq846P5VL1CMqhCZMpLaFT7giHx4U55R2sT",
  "key35": "2bsT4jZtnhRkVJ2aeD6UWWNukaSDWh8kWKYABewA6hWce3hQp1VdZQsCZfg8ouZha41VcccckwNkjmsibWRmuGYW",
  "key36": "2qdPMv1jmH5gjp4X1MsoxyX7HJkLSof2BeBijwXCo3RHNzzjmukXqEL6aSP5CLUsSWdt4zNf3XK16Lg8mp5r9Vcp",
  "key37": "3NZyqQBB1A7cUbgHMLqFxvBY819HKZQRF2xXy43t9QhMrVkDsBXy8AT3uYWvoeuf7wNoG8k7CYKt9ZNd6SUyPq8L"
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
