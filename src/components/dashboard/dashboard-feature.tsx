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
    "2mTY3PP6jGDuPA5wV4eXWrT6gcnhn46kqej9gnccKMLrwYTR6Em1jYHPQbxG5w1pG5mpdGaBnGqoFzbz5fVpzNPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AZ5NbXPyP4LVTAQ7HhhJJAaebZSjzuV3eX62E7FdqcCG6a6oh5NnyPUr8yVvfTNqx5ufGrSdYvaLyeB5GYemGF",
  "key1": "4Njzi1uZdNsrzfRrkBuWjQqex6jKKA4JceEmtUByR2YcSn3tiekidtwQ5qkwqstm7aRbqiwHBCNrfVyEbcB8PS99",
  "key2": "5wUY2LqTd8TvBLQWoUW6QiB6MNi5fgmMt3Ti1onMn2NxquDup8sk5kELEeBxJURSEzbswkmuZB3hPCFFh3jbmBWa",
  "key3": "5uRsJrhSygqLRyy9vudSmY1Deexi9GuEKNLm2YteSjCZum7YmFv3umGxnUyY6vRZzvMyRdswFy2AukMc3iMamoNr",
  "key4": "3hUzdmhG2EWmXZ3Fhk6DB92HyWAbLPffKnwQWbiTrxETyPHFyqdcjNBoBc757PpihBCwjQRY6xjrBoFrSGqyjURu",
  "key5": "veNQyAJjKUm9oRFvuiWj8jh5KKX2aYVbMUCArWsdgnP7fNCk5ExoVLfH8ya7gNYngwRYGrD44UbsAsXeHThKKMK",
  "key6": "31mZVwc8RnUi9pPeufRVeRMyrVypFTfQcFFTZqcB48FHGrrucfDxEUjmEsm779jk8bkQc9CoRcxDfFh8TtZUifQW",
  "key7": "431YmQtKs5uWcKiUPN7bjSCPSyFpzLqJiC8VcrDzmFQchkBoktVUA5fEptkJo3e6HRpW2oELEiKvRsbweqNiDa6z",
  "key8": "4bBc8DGtctcgS3C6uvpULwgpvE1xENy6BU6szUHKa1eRteoatGqUSzLBz3KvZRSJXkebN6fGYBRPnA1vQJR8brEX",
  "key9": "4CRzBymKHNzY3d1HP5H1o7YwaiHrsPCWJjJcHjNiVCy4uvbD62Jo1GJSNqFAcogcPd62kCZgd32uAsWi4RkRiKJN",
  "key10": "5Hs7wHCsSFV5NsqAkegF11WDu7kzgqE7HfzGvqLquGnSGwJC7wEvN8wSmRBNurZFvgHcYSD5sw2bwzSjRNx2QKQW",
  "key11": "2Sqt2xggoPtS2Y3oUbxPkfKq3raXMiKNqAnjTw7vUJri2Lvfq5c5Lgd5kJscNqW9t1QoVabrH1VwT87BWanLnGEU",
  "key12": "3ezhhieq4xNv31Zsrja116rMWAUQzrK9xLj4QfHkmGnUJ5nrmcmQ3n7KUT8nsEooGLuEhLHCse2Zjik8QEkn1kQv",
  "key13": "25ncmy2ZS1m5p6cCaRNqJdCXMPRVxB1ai5bX57dyFDzB1s4noXzXCmRV2Tcx49FsSNQFLqj7egx5Qmi3YAcTuMh1",
  "key14": "25zXheJUdvQCH6hNS7Vjgn2J99bhJmxCxH2fGGN5SidFM9LziWo2ZQodAD72RHeQkKxmfUPzCJHxrE4WKt4AiQXU",
  "key15": "4NzsUQXsSP8CMNSJeJkrXxwKayDbd9wnnUy2QMDeyyck6LDnZ1EST77gcs27Am5LaqwnsfAF1zfcNCCKQmyNvYFn",
  "key16": "4hiCaZ8Z3cfZpZT1vcaPyHojXyn9cNMHnRY2TEW2fMEyfgZoQNmmz4uH29tEqisVjSMqX7dB4angYS9otpcZUzXK",
  "key17": "4znHqLV9NFfhuWR3vdG9S2intrGeafYy5x1gEMrvpZXghx3HZwJfHqHBb6pDPf1fj6NnFuY9bUHqDuuFiK1o8j8g",
  "key18": "655wToyNYCvVuAmLuEXhfUzbjFLcC6b9D4oCVSRVPLi2jBt3JtGjwe3Zb2sbRteduD7PzhP7BfJdLvMRaE3K7cwA",
  "key19": "2Q9CTmsWiMFBHyH9qLx6egHE52LuBjsbr9zoXbdq2haKuiuNBEYTifFFrnpufvi6j4c8qtGL3ZC7vhyqzTZp19w7",
  "key20": "3xJ8VJBNuMD6CLRiavk8Y8wGr2GPbtSAQAJoVVddPba6cL37vWVq9n6PAHWaVGbrEzzKQYQwUMwq6NPxpNXBNcPn",
  "key21": "3BCNaEWBmhtZ8RiPeXmcJuvo2BpKNKsmqeAtbGx6Jv3962MKNmJmafvVS3JQQj9sbRgcytBY2KUjoJj4Tn3brxkA",
  "key22": "eNvtBz23uZ32kH1SbUBMP1ciSatKa71HsxdbuNhRZZnLT3hVvUkqitz3Su2iocRCCst44rr9b9DcfsBMxuXCcDm",
  "key23": "4c6bLn8wmKY3WxJxbJ3TYn5hG9Uotb94e4owr4JKU7ZWhWgLw2XSq4wPXzP5aFRzjkZANm4B2Bs2oktrWkRKGAiM",
  "key24": "2C22p3GX8xsvwxyJfHvXjSpFT2HB6kKjvKhxBq7tojNbkUvfsHjY63xxz8C1H5on8eGx8FKRxv8HbR14d9USihzQ",
  "key25": "3ByVJGxDVp75xaa3G6to7jeZzaAkyCvDva6YLGF7u5UNYbh3L5ii7F2bax3bXLiYP7HWUWR5BDSVMuUYVSa5oTQN",
  "key26": "3GxcN6GvWUtSzBCvS5zS9xcsevHTd5GWm6fCCKjD1HtabzzZfEeHkgeAGLiPGNDVKwhVHJJyYFwNxBbitxvMuB63",
  "key27": "3z5utzByJ4DZd7D6XpxPY4yGGi737s1PHV8Q5HQxbcYoLTaqUMwQTdj48AuVXJzN6Dn3PMfUtcwNqndvYWc2Tix1",
  "key28": "38PzDDkJ6vEdZzYtUgiaxkWaPfrMTkS9cgi371Yop5K6ZhH4gV1an2mY5EYJZc4tB8ESSTizdao68ArA9Lx6SbAA",
  "key29": "7RZX8J87QyAKPotDd5JR9dCU1UinwtZ5FGs6aHosTQQ627zA2Ni4BXLw2j61GHAtE5hTF6vmXZsWuoUoRc7t8Ys",
  "key30": "4ZYANztQ8yaWy1qtDDviHgpkkRBiUSZfymMMaW3rrkzSitidRuzzkTnjzhMud43UZaDxeEZh2gFjHyf3mc9SjUPL",
  "key31": "5fPxNdovEHnTgJaAbXHTTo3hXQxQD65iZ3xGMG7HYrwuGLfcX8wmm6CxZC4tbJzbwqRUa65egdVtZzCYztLFszh8",
  "key32": "47VUhKRCDALTqMq9mN9eAAnWkmha8jFYuVRZUuJhp3uQ3Ccb1HCbx89PWbmTn14yixxKoe7B1d8fUEt41jrqWJRN",
  "key33": "nYihafBhTXNQHNHcCf5gcrGnaseQhycjwuAP6e1Bvi94fDY8npS1jsTCroUt7r9s4V7rrvHAiBUG2ZtSeCMxrV7",
  "key34": "4fKdNcTibNH8NWEWMFK9cKR6UuVQTW2K3A4XXrAc2vBaS4Ay5TSdBmKrKcMJE6m8J7jE6iwzq6RFV2jc21fgm87a",
  "key35": "5TQ73Z1bJf8JSHX2FAx8qrnDnpwi41ndLBzYsqWP1aaGDSaSZwPa7EjENLUb8dgEcsoJjfkW7T5YDVLvqURqpT3E",
  "key36": "VeYFHRBB31XaQn69JWf4RBwyDM3sTd2ttkuatbezp62fTDnoPGEq8khT4JeQLTR4JEDgZwaPkw4RNBiL4DqtyCf",
  "key37": "2U2oSoTF7fj8avdPDjs3T3tHhakTkF11S3yKQyAuUp7nSBhiwDrytzY9boFPHUuviMxEcpcEKSVTckDHzqUZXkHi",
  "key38": "3Z3SK9KM4zx9Kc9vf2z1yYKNyFiwLqykvNxgU9tdTfTQbVNqC2zQhnYe3CP2nRpGRJpze8ao4qtxds2SKv7Qo2XB",
  "key39": "5kJCQULRYy41fwUXCYKnNXiPX9SDpcLUx4rZ2BosJCLgYf3noFcnGK6ChQjK5meH6dXJy96TWgUo7vnTdKAuDFAR",
  "key40": "2vhs9sB4UYckLoSK27yvvmCxiDa5jNNb2R8KFMN2YeFzc2Rd5uf9Wk3DUGDR62ukPPJ4DGxwMVErGCAycxP9kJGM",
  "key41": "2yydgZkej5HgzgaedPyDjPjQAjkohSjaPJnjtBCSRqZ3kDAWk69SGtSQXf9TJAVth4rUCwB2mw5PDiVjaHDpcLeU",
  "key42": "5WJLvULS4Ld4EjfsdpUyG8GDDwn9Y1xSa2BunVDsuzQd84xTVJHGpZYrPpCSSpv4NVDXDP4b4CkRYioTNprCE57d",
  "key43": "2xy8voYhiZVC8WcLyJ6RLvoD4YovvBV6fJy2uGaHjpbY6HU7qVL81R3ZzF598jccyNQh4mFk73cDPbVQoZ6vWVNB",
  "key44": "4GB7w4hv2Pv99BwjxkRnGUkDCEcaVPtD1gyGvNSXmmUWrsszJGZmQeVd1QptogbWk37dNwNCECMkF2cgne23zdXj",
  "key45": "3KQP5Thexky9Dw32uKqRFjKFUdXr5bSninRUHDwBjV8wuCcuPLW5jpS8ygfCZ82vwxnd7FWiFDXA8cNj6ti3WdkD"
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
