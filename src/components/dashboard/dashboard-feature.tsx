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
    "vdKfaCCpyoNtgiXScDdqSib6yrKbMWqmHNFo5aJsHVjERHmyPwrfsDBrd2qAXBteyCVvbCtyXsMnw192MP7jxrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUMiSX57vYzEEp9tJR9gz5zUEavZ2XMZ38DSMBNKJES7K6ewc53PVvTAgKcHeUEZH9d5xxGec2fTsiuyNtp28re",
  "key1": "4rBzg5wrr1rWNdqZoFKSHgtwySJmchZeHnCQwCJB3dikmQpRe1Hv4YS51JT7XY8oX1nWTBY2GZpULgL2h3S8Rjyb",
  "key2": "Pf6Rz2pRosYQzmQaD8h9M9fx81qTQcwmm9udVe2mRPioQznh8dzavfbKo4t6uHgiU9HaqM9e8Q458XPP1vLFbaK",
  "key3": "yYKzbzbqbNysybGrjkzfQF76k6hpmHkTguiky1vDcNq3YtBLgLQBe6WLr2kdxUUeApvNuPy55kewyzmsUm5f4Lo",
  "key4": "4LswJvnm2Zdm15Bz9N8jFfqZo2Ccf4es78rTSb7y4xygUiQAtX3p74yrHsver9m3A7wLMLVafEafS54S4K67bHPj",
  "key5": "5WMgrbVqVcMjeAZWraRCms6LA5gyXaekFQQKZV4r9AMKg8cEyK6qmspN166SxpA9eYAoHWHvvuumgVnFT9b6JYWY",
  "key6": "4XBQMJAyMjqSueapC8aNqAh7RtU4WXEMY35Mrjzmjb6AXFDRUvJWemvgUueJZAL1tixQ7riRSayU5xQPJJSgwbLc",
  "key7": "Zva1eDocGxsWK3rZaAd4fqy5ifuEmTLzxrNDRi4BFEApeA2wyoGqw94fj6GEiMBoA2mhkBr5NLbUSj8CgUL2ESj",
  "key8": "2trE2ntZkwpRqfVtitqniVjbSVQeqqQdnSS3ubp1LWscgdQkMuvLw8EezL2THYcBhkR9ugLoAUxXD8vbpdja73Vr",
  "key9": "3gChXhBtQwERsypVvZBFSxJqEhqbmNY2UhmfdH6SVtEkMWQQCH1SQNGAznAU4G8upBNVnehyePrBxuwzRHsbYY8Z",
  "key10": "2irjNyDF7acwjwMMAWpfY5unZRD3ccC5Hz7qVNnvdEQv9ku6WNF6nSRXL6vpTNfxsEU6Herj9f4SQQsPbwrp6K7y",
  "key11": "2RVKX9gy8Th4TfYrkdY2K2Z2co7t84foKqtH2nyf3EFqzETAgRvcCCY4cYU2kEt4GtWvzZUCXV6yDuujktQ9KU5Q",
  "key12": "2usxp9YwxTUYk7xRbmseDNWw5eye9GKopBqFTonmok8BSCruYNXaw1UdUqvN22hiD3oAbTyEUcCovzeUWZao9yPq",
  "key13": "4tLAYD3ar9J9wBwGyjacAeMbUxLh6GDmfsKzNgQ88Tz1KE7THSuxhNUkjqsezDkwciVtvd8yWVdwS21BwCtstoPD",
  "key14": "25ztERSenHfb1YbZonj8C78yDm2JjFoERu8wsAwdnGSR6XirqK1Uo1612mvUdmvEmmEAUVKRxD2hmKbaFAn1RsFa",
  "key15": "5M9p8VtBC12uxkSt4fo6F96EhKN5Jgn17m2T2WARTebY5YPQ1GbCFzH2TmEc3XUCqWHxWyVkWZyuzvt2esmKRPm7",
  "key16": "2BcxYGNpVbWUJGRzcdT8L5ysGdmBUXHQkNeV4MFyBRFKsxNCmXpLn5wpvZ8v2VFFfnKiYzVMScGys2cQCVC7B9k1",
  "key17": "5bb3ZXTUWHJoxj1eYHjCpzdrbo6AJcT2MXwts9eUU43M3t8dDzMXwoU5fYW87YA29Kn1BaM3aMC5QqRwvCwFoN22",
  "key18": "3iU6xX44YVSG6Bj6wg7axsghGnXLMjybpWZmWA6bCwfoNEgwBYiXwm1C1ikSG9v1behiDipVn4cRFwU1SqFyKg8s",
  "key19": "437H3d13WTPsEvWHZ4tdZtpwYonYJypp915YKRPkMnGCrqi1rHW6LXRxyFpG3JDa8P9SAb4UrQdSNj9XHC5o5n45",
  "key20": "58gvbtCSXWxkubHzb8L5i21R5JHgCKJ64havaMAYbVJKEP8GJQqFkwM2HrAme6TihwRLCsWwcsTNFutKWHYrGHYn",
  "key21": "3SVkfoNgwfnPUYQdmNe4JhwAz4ymCSwYE8eVeyL6tw2EkfvSsLKG4XzP8ahFueBLMLk1DLa8cNMwKouct9u4KcRm",
  "key22": "4SxAUJMiira29rgSetndAZQERsz19tdpG3RLfTYre5sdEBcf1dLhyq3wh8PLmvVW2gEJ79TBXUJCx1FfQ6GEJzAC",
  "key23": "3wR5tSCnZuJVegE4xA9zpAgppXJa9dKUZ5yfLsBqraw2hfU9wunAHamnuJPLcaKABBFAyzP1ZFysx8CiZBQTV9cK",
  "key24": "2n77TcX2qii49rtWSmkND9GgEfFSCmCpww14ng48JoG6jWg6t5TddWstwqoxhp6kiwxqWskizG3YhA26Sx1Rjd2c",
  "key25": "283EzwrK36GgTyXqPqZBTqPeAaa978RP4AtnYb1boMWqmJhaM3PTcYgX25UqqJ6CdoT6VL1y1FpiNDy1LqxUhQag",
  "key26": "5zkmdQTSm7eruTfHvL9rCeGsqua4ohhm5NUxnpSLXUSiAF2sgjiKWAGeHXkbsNsZYUw7eyBZdryU5R7QsmjEwetM",
  "key27": "uFMLrbRXG7RwY71wb5ycUT8Px1VDPxvZ41ncgshuHH6g65htK2xs67b2oHFbQR55gNmBnNovAQsYPrxim3tpksp",
  "key28": "3nQqFcAS7xHybc9QL1tCJB5k7r25jxYbmMvdW7eJtqdbDuGEFjLQNaowumbsMbJ11RK6CUp3FRdZgbQ7CgyxhH3K",
  "key29": "424FiDVFW2rsgXtxbr4iqTTyxp5ttQiEoL6RXULw5aFHFAEtvK36qHcNP7tAymzngPhbcSDjq49uYyvSMBiMd7Sv",
  "key30": "5rqiCmHDrM1GzYJjJYR6cmhHwAjNZLuk8dQkV9FyLo33kdhct8pvRBTydL7AsLzbkKwyAjP5hNafSqL9zrkrsESJ",
  "key31": "LrLxocNVdGBg3jcrRTBVBxpS5WxQmG6ZFKZHUpcwDgLu2SnNziHys6Zr5pidTsGa9yhacZSMP5v4AodkJvr3ryV",
  "key32": "sBRdKM9W7hBFRLMGW7GdJCxwEwYqH5w1muRZoTDXDRxCFHewec87mxFSmFkfoBdc9NS7EFi4aiF2HBntTU5D2rR",
  "key33": "5bi9qPrVtKuiuPp5p8Difcz1hjRyGMQo4xYunu5JefcmvvrXzer3kerKXNm9ZusMoHTuPBZiAUw1mZu9FRgBPzZe",
  "key34": "3F6NNX2WeDRXd4CXFcmcXLvUaWHEg4dvYJa7juSz2sD8M2LUE4KqNwFVZ4fRHWsNCspU3NyMQGHAu7SsUAX1j62H",
  "key35": "22xZ3qcXv3XyjJHURFKfh9j2Di8aNoywUzKhkJSmV4vMeW9PzTSnxyNSz1r3EpQgZDq92FWrVU3Kt4b4mRrSjsNw",
  "key36": "dtQepNq2thffyaTDonHu3oRvc8o5byNZVxZuY39HhZDy6AtDZoAUtChpjLCKifxdrUqSRRLyRGbQJ26V99sJfQL",
  "key37": "4wvhHwFZEKJ6MaNWh5JVUS6Rx5as6dQCnu4xJSJ35ppMEMG8roUgZko1Wp6JFKvXWGREde7TZ7dcUVeQemY412Qh",
  "key38": "2ZFuYLJ1Ci6uiGFR3wt65Be8Km4dXetiqXbuQyrV9mygfqcwm62wq2Kakxz49xzPiWNxkQyWqYyVPofQQNk3f6P2",
  "key39": "2YmPGxSP2srDEWswMH1cgfr7egik1gAVQYm6ji1243stCW3AjzXsqacacvWaLk9w5TUY25Qg3gN6AHSKkVJP2u5P",
  "key40": "4n9Hyx4v1jizAEysCnSdfM7uvx7NJDKkMFaqqdPXWx1sPbRCRfj93UFbYHVV7x6rZmW55sU98PwTfVo7jNNwMdg3",
  "key41": "MYQ9LD9EEXeRWmcgU9yJCvcJbLpQRUoZUrboWVK9WFqXVoV1KDKqigFXrWGdK5srmBJ1DkNxctCirk2tERb3Nji",
  "key42": "uaN9FzLWDTPtgWZGi1yNKn8WJ3QN9Md4WFY8erM4EcfMPqaxjKuHoDQgUWwWZ39LHPVLcHRF936x4NKKKnUCbkV",
  "key43": "3pd9jTBzVa2Rwfiy2yqcvg6DcE6HLMtYJLqtDPmGsN81jYV6pzV76Ft15vnopUBQ2avwMiDuFr6Wv9pK8fLRWXf6",
  "key44": "9kwwPh6vmAMcq7yCGdTQWWcJWKD1rF3sccETSjFHiSreKYXQCWLo6MdK69HWCticwW3XTb9htWvrnBUs4d7fLWa",
  "key45": "4Ed4ZgVesX686sT1Aqckdkep9b1HwfGpY8aAc96uTfugJN3iB9VLbjkStaGWvdSmmM6rzoygzXnHcNzbyrysrLuz",
  "key46": "4d7xvuVxQfeP59vNKzcs5MtEGdSHPC2chxXpBZou1ZWfvWiZ3byYt3bnFnjNLu52FCt1uoDVyC2G7XvbpbzybaKg",
  "key47": "GnMRggJevVzi5NW9M5Lay3MTUtks8CbH6otLbMozJqRhJgZ1JMzewA9ZfhtuarADRcasyB4SMHEtpwv32ub1E2Q",
  "key48": "2eVBtExBKrxpdcrRj5pHcRPz7KX1eLEWuSy4fNn2EBzbCTJfQrHs5Yg9kasV9AErsGYXWc7Srmm83VtkVRMrhVj4"
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
