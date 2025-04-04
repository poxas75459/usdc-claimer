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
    "46kr2eq1NbVZAgpKCVoV1G7hT8FBxZLtCaHYusbrzstH8bnoL1mW86PEoiSBxgen5qAke8WDzzS4pBVjogPkmVtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mY6kwRvXh8ur9cKxi5fxToqnrVjXYCzRL771duk24vpF2gpYg6tbXUgCyvfUKAqjmhiVcXWnR5c48PpFqR3ZpwC",
  "key1": "4Qn4cD5vy8uChoQwUSgK8THC49MDrJiAcmXMaZ4XqnR4e9AdZ5sFFAspJrZXjh9BevhgiYrLfcRA8azh43PddCon",
  "key2": "k1DGfLyxgpAtRcXLvcbTo1wVxYRGQKVNMTzP46t41eACKUK5rP385bSfNVSVctb2miYDoJwMUP1P5uQQPD2Tqik",
  "key3": "54GgbTJKLCugsSTK4Bg7xUZtaoCcLNLgD7fHeMW6tRqDqnLFRvRCsitcg3yJs6UJqzpUR1A3jm8dLTExkg1xu2Qg",
  "key4": "5FMFfBccmdNgie7G1aUhP7pBMpFoNQ9XqZ6LiorNfnz6bBkN1KGNVLhSWeWbLaKdZWu6Aiih5bXjbJzm69zpTWYp",
  "key5": "agY2RL9MihrUcaPjawiD5pTve8Q7546zb1BJ9zC8dNo7VBFXRYvjKkapXCLbspPirvwoADmJFjVGdmUbph95oab",
  "key6": "2fBXmLDVS5jdieKsFMbS4fWPwuzEDoELUdbd3wnVbGinD3oSLFEthK41czTpKJJVGm58YXcVmaCgxve7wMs1YsRA",
  "key7": "2KvBp4wMtvvwpVQbhszVvKrUmDvakHfDpjJZAbnJzhUz6w8nbURAGEmuoSmMQcN6XDgtUfAPNs8BpmiTp73oaJB",
  "key8": "1gEakvtKCYYp521W65FtmdGfzawnDVxCXsnPuFUG4K2ma3RGv96VXpbd55VZhyna5eS26UtqawWT951fwbzbWBj",
  "key9": "2L4DXapYtmcDTUpfyPswtaAYtDkqDJ6pUBXmbdG3yYoSZAfhAvMkezKt3WCVAkB2nn22Rs1cjebyC4NM5ciyMzod",
  "key10": "3btYSaVkQfR3QEhxtBPLRzPPD4DTJ3DM8r8w3tDJyGL5Q39Z8z7Pbxb57jijLKE2v3Qa9ccPcPuWGwF6R5RofCHG",
  "key11": "3n9kt6oBDBmrvHB2pEF1WcSrQ3wNW7TmYoNeHz2boeoosE68V7JRpp1kpSkEut8dmCufar2z3bfiPaT9PZb1y93W",
  "key12": "4z7Rz76uGvk9fsVqZJhnvy2DWVHga9xBhbtBK1ip5QH8U41prvrVy99TNYrFfiadBqfG45LWzs6BapvW79krPS7K",
  "key13": "5LZSZvnTvCn2VdPpkeEHWf3cnHCg5eitsdeTyk8pyqx3a35RoHS5coq1R7HoSkyMpzrfHgtGJerxdzxgNzFzJSXW",
  "key14": "8yZ9KJw8bee8Pm12iH816U6dTxnrxskk3yXEDN4xNXJ6RiqjTw85Z2osAH6qED43S3MrvG61AcH4xQTpLnowD5w",
  "key15": "qh1vtYKQv2hGHxToKxop5Xm3TVewZb6A2uSS8p8oheXyN2YzsdtGMPhvFXLbiSUJEz5uj3LDrEpa4NiCfbySjd2",
  "key16": "4H8ii1FP2ozPiZM69o3Y2TMV6KeNPAMU1QRKtuC7tohNEVepwxuxmggqhcH9aWCuRYyDyx3WbckWtyhAxnJoPyTZ",
  "key17": "2HzeH5AiEisCCPsDtzPzKcPCYoJkjLTrFdn7dkVHcA893hjXjoY9nQegZn7kFAMeKCtjY4SMXb7B3CjxWzDNyFMB",
  "key18": "35nMWgeN4Lz1NoGLqNcPfYLsyp81raKEpqM91u8D3Gw4NEtdYvgVeAarL9AY3FRgPJ1vFVQZDb27X7McppqXVvaT",
  "key19": "Qk4JTAYxtM8ktavTmADXvpe5FL1mfP5eTRYR1UYdrkZq5FXHAbgnPToBqmYVKVzo8fPz7PWfRwNHdVbNiAg9he6",
  "key20": "3cM43LSiLQRUaZtauxttGxqDk46idTqMTuCymcbfwW47kGKPHToVcj2ewpd22GkTKtYQC5oG7X4g3bh6hXrZEJEs",
  "key21": "4jUx4LfunAzf8h2LBm9WeszMp7CUs52aqJowk4a7gRerycbRgB1gCtCvy6v8yWh7EN4L7suaLnHS4RzLsyLzEsQx",
  "key22": "4PmtHxKazLNB6jZYUyianTcgogChk5YBr7Yadf8DLKPQuV6HEAVw4bL23KVCwegG3thVnxxB5cmhMAcECSDevKMV",
  "key23": "3YLMzN1XjBrGtVRe7TZnU63B1kuAUUEEbGt2D5T8Un7LxmWrY7ms7rZwwiduSgngLQbjFQS4rZ8pwmh2xBDLSGqR",
  "key24": "5x6aMpQQEXiJJAbE9qUEQtPdZ2GFc3ei9MaDVgb9ryii2d69Tpajm5Y8eVUmed8i7XmHs1ibBgChxAnxAAhfd2Zo",
  "key25": "NY36XBmg7NsoAAUjVkCA9kRffjcrWRmePWkgayt9ia3WWX8kSHRB8gcM1tTgWQyDv6KyGFXycZMdtC4x6usehs9",
  "key26": "YNzaC2ePvQFA15TPBvs9B7XJTyUCuuZs63jmKQvsqE3t1UrNtPsakEn7pq2Ju9bw6yM9mrgsdMZoeZsSyf4haUk",
  "key27": "5o1AoDc6R8KyiX3MDbbgBtDb83ET725GbuFpJxAsttxCfBKYwLkh3X1GJqbN6EumEbHk4HaZskC2AYbifw3xLsGo",
  "key28": "5MoXkuupaCi18Dd5BA2rdLVAFddagACyx1VQAcyzqDNre6yX5BEoBDG7RwkSfF2YTj86KNMQTNHXcNXzT2vkLo3W",
  "key29": "2kLVk6cBbmGqR2eCAbJjpFyujmiSgjXsynbg3yMzT75QG4kLzz1WTxn61vK2JP7VisfSfEVca7tayUWtbpncHRkd",
  "key30": "3LwahCyeqEdSV2oop5cJYGhMv1sGFHSqRAVLiYpyRh2S3WsPXrPneBTZPV5CkDp8ExedZLW8D2Rg9PduL4zHhsQg",
  "key31": "V94ctfWV2Ven6Xx47P3u8bXNuMpk11pHWC7qdVcPZ9zRhZxcL4iV7zH8WJnqsBA1iaQd17rMW8fSiVReY7BPXy8",
  "key32": "2PWVXSR8x2GKScXb4kAonf27vwhUoeYWWE3ZUUo2nz4ZyrUiiqALjVWWvQ13MZcs56eUJp7MA3qoVcd2fqTWa9U1",
  "key33": "2UwY9FdYQaXeftUgb2Mifwq4dSqtHKbs7LbNfJeE51VPdqrVZUQZ81qYmymPJa6grfDMfJyXQAHosNQgtK7cfmuK",
  "key34": "3NiohKvDTDF2ktrPvEYBwbha2AKgDNae7adZMnnGqr7RZZTFv6dchKawKYiNs8gT8z1ACEmg1Q8Yo1h8m2ooZBEX",
  "key35": "279VyvScndMrDpjj4V17WEoWa4cAwRWm7deNptu1JfFjFjVnPzpVsT1ckbJZWcP1mHSbKro5KQ3a5uyVQf6NgJcR",
  "key36": "2PjGxch2sfTGuaC5JMXeQf5gTFhXrhiZENMrhvdsd52Uu5cT2SZReckc4TW8wZjhZ4mfV5268sMcEY13VUrd5sVv",
  "key37": "DZjfXJq6d7uQ2ae3tmqB1Dq6fLZai9Tzpxoos89cNtUirg42tBXgwtsfwufQpS2BCE3DBnNZp2JTr2SdqS6Z5H6",
  "key38": "5i672zSHYQVFQR6aWAnoJP5UhN7YwmqmYeJvhx1do2BVsoVKX3bu6CiGiEcMJ7X3VCoW3jb5EnD3bVCYe72BHVsv",
  "key39": "4ZALWbcVw6xHWUx8wF8AzXK9ZVof7FSho9K6TzMAVYbwtWqZDwvfvGy1iBbYt9MhAfXBe6Xyzyu6mWT79YFk4o9C",
  "key40": "5u3LSWPUEKBpvXV66n1f6z3CN63SnHyk4WWmrLL9eMwE8WyLgD9QAZgiGMrEdoezX8FwgnKr4QKB9E6iAiEMcW43",
  "key41": "122rBwzAC5tVEufVgesSpC5bY4bkjgnmQzFmqadEqgA9wiejVXG6w7ngkbZCrEgmEptUt2dW5Udm4RXg3pGheFSb"
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
