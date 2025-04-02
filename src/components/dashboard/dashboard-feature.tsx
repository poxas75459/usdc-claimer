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
    "5yamrdWFPCHHPULd3YEZac9QCBiYNvEiccPzY6vNbypzwwW2av13fBKKi13fx8BF4BWK6vYki8vLWAk1eAaCstmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WU89iasCjqQybWTNAAhdbX6dqoGpWQSxjU9bZxzGnSLGCw5224N2yyYUWMQ4gegHBVF3YKD49tK5Vw1JjP464MK",
  "key1": "Pm67C1ufLRQtRaK5mif1aVejauuc2EHcwHW1PCzNSkPT9tAywVHEGAzWSUaWxMsEZyXViorKgKH2zCDZkecEnRH",
  "key2": "3MVK1qgb8rXKEG3LSJHve5MsV2N3jg8vkRUMoEnBQc3xAbXx8wV27qE8VRs7pyT6oTztjx6DQLhtsr4ABc4BLZaE",
  "key3": "YDG48XbJjgM8LriwmeMBH5TDohCuiDnU8ekyGNzVtnRcGjoTjto33EKBKtvkHjHJLX7hXCRznpPPHZSthEEpkVY",
  "key4": "7GB66xHqovpvnNXmCTdEjSVhRQsz82RtS9nfsFVSrRcW63fMgJj4Fj5UDTW6w36z5FJ3a1s9cT4LNXppYLLhUfr",
  "key5": "p4G8xpRiqgLYWUPz2hY2XCbvuSFfFcUaSvZJh3WyAo7d6qpXtLREavdSBEVksN7saUkkAGMxKDfDvXMtxANtQKo",
  "key6": "3yuJiwDHhq85abTyYMEsfFXX6n6Gn5MrvZ9QRfTdiuxjdnwHc3zbSaM3H2LoQ8Dzfa3GzzPyr4HYwuxj1jbRsgU1",
  "key7": "4csZZ86WLJvA7JcEBmrgyNUug13H1aMXh3cHtt5Tvx3F9ETLSEPvxDp7hvYzzLaYUfwjxrsQB7Zn1Rmci8EGwCUa",
  "key8": "66oueEJSchxbx9jVuN69pTgNWz7BYYci3iM2HCSSNNzw6FTwJav23bFsv32Yffo5SD9NzQKwRwxenctX9xtkRprs",
  "key9": "62TgvPbrM12G1B2qXKKr4LoHW3BkVASM2k7R3rY6YxSZXYXpN1FhBsmzFvETfXrNHJCnwt36Q6rsYZ33okJ77yTw",
  "key10": "5RKn7QDLFgp7u3wXa59PAXW1fXyN45BETLmBXV26bpKEi268uZo6jv9U6yJT4w792A5DbejdSvwvscxwGjFqaPH7",
  "key11": "41JnwN4jhMmRwkZvPhLQCJ8ADjv1PK2MaPaFZQGS3sf2CpCTxrMjVPzCiK2H8wdMVxAp7VF4oMUSrtHKzRNWFA8u",
  "key12": "44AmAvVVofUJYzzzYr5EsqaAEaDsSJQXVCmGtCLrMbvSGwn89f2ehkF7KiAPsoZxWNPHcAtJo1MEaWDtLMW1tCN4",
  "key13": "368H5ezuH5ruj41ZsbFErXiKiACuhpSA1tP5DRbpRkbDoyBUtE4JsoEdDzVaNqtrKXRMccUAkGZ1ZXWQ1s3DvBaU",
  "key14": "4oHgP1FTMpnisnkDEVAEUqRjZnTGZoUnW61Qhh1DjLvpjo7xMDRFc35ddCsnSYWhqRfVLtMpVK62jEbF1VEcYQVg",
  "key15": "2gtuKrMQvbdaaLJ2eqe2qa8yhFgZjdwFjis4cFexPBvZbTYygyDsYq1jeyWXZdgLAiLsqYo3HuMoGSERiKxcRrNG",
  "key16": "5YyJeyed7jcDDdTKbFVM13rYNz1X4CE4ZS1ChiCV8bWSYTrMEa5BU3Lzmon5zbXSs8RXGwieziT9kLxEYJrX5Y8d",
  "key17": "259ErJFNwWjKUEcEYZxXQuFsYd39nGiPRvsq548QzQdUwMce7hz1np1TzhT7h7DdmS4KWh7F93fdDEyY5eTopVe4",
  "key18": "3UW6das6a6ggtaBaYarigzHb6grtXFmpgUQocRMcaq1EXSyaUixaC7oEttRPxp8CeF7WGSmTLXAsJzpThkWbx3AG",
  "key19": "34sS7JhU3rKwguDgFoYVkU4B4g8SJs2CK1K7UMZLPS1pkUC5j4JGCxsHZfnBU24DrTfaMxmK5vt7bhT3Dd5sUP2o",
  "key20": "4zX25V5bZPpWxiXeLN5x8fPC1ppZnFdCaG6zvZPX1CKTDAVCcroZRcAkgaRBF4KuFay26mpQriWbmaCNwMYDvwoX",
  "key21": "4ETuygNBVyNU6YJZq5Ay8dRHqaaeYYtRVVYnfCdez81K8NJjhEY4Zyq222vLBM3cYp5VQa7d86SJmavdrJFvadfb",
  "key22": "5cjmUcuZPScxcFQzHoc446NPkiv9FKPP4RWujRhmdNZSiuwanjTMekcCCPABcFdyTMZgMKV9D9jCDC3zWyY5gaKh",
  "key23": "4RdQhB8iPQnF5cmFeLkQpU37A14BhGMQMLRy28VxDYXrQTQouyUBMbJWJ2v1ygMnLZJbTEYzviQis7RnQJmbKYdD",
  "key24": "5wX6Ga5eX8wTtMgfVeTS8g6cRY9BXzjJUgZJRSkL9PCVf38ijTxuCvoKLxNJcLC3Ks3QxFQ2nBS75hPJ4dPxqVhx",
  "key25": "VvehHZxmg15PcKhkTW3c78Ywy5sLoP5abNcgekFqqfiUa7cqo4MWVbkwjSfpCFCZjB2ZeFFDuLXKVSdHEKc8ZD7",
  "key26": "56nwbwUrj86HGcNcu2bZtTRmaqxndEh4K3bVYz6QDp5CjB1qL1AYEJdvc6tYncGE3bMa6QFKuK71tC7t16Ccxbi9",
  "key27": "3V2Cr5rGDT3qNTzsHthJdnZedQjKobRu1B5u1Cvxc2S33MJeXwnzJLwesDUAGMUJzBs42Vc3CVFE126eCZvB7bHQ",
  "key28": "4xLtnL4MVtEpuH7AoBVa1izhN28ErYEBj5TxpnXveXrEy2hBeJJG7ureZqUu63K9VGioVkgTb5SefTA6ddh3mLrF",
  "key29": "kZEWdsuaP1KCLUkLKWwyBG2XEGi95q9NJfc8K9NL7ZjebjmF3UUziZUFfvANHMEsgWKdNu3SxA9cMxb1ydoVBE1",
  "key30": "2wr5ZzsCkTnN8ahohyVB35e6Y9HShXz5LYvqNvYisq7794EDT9wgMbE3an4eNZ45vMJaHPToVcSmKnNLoW82hYEh",
  "key31": "2Mb6V6Ww5Yg7oSGFefDJi7xhWSMaFq6JaLQ87DvGVMNEd16M1RNDpWEqQjrfzL36tE1nQibLPyF78Lbp7gYzsjE",
  "key32": "5FHPxEME4fmmyUDAR7ZXCo9jTu6NoSwkTVExN5tvTNxeiXNjaukJBLfLUAhArEPti5HaibdhicQ1v32SW2VtjD4L",
  "key33": "4zict2yF2TgiQfA2zQk8DaEXfRkbUvpxcx27D5t8WrMvkE21vkRfByfzPbed1SCgSxvcyXRdwpXGFcNG51k3p8b8",
  "key34": "42kNaXQjpLfnB6ZXFwcqD7GPGZYJszfFjEPja65JzMynRRBub54s5BsafzsiYkQ3E6bNZbeBgu6M5iv4f674xCTt",
  "key35": "3ssUVNdN5bDFmP7FSvPacBPYzw9ykAq52ihjzxYsQb37kvMVMQTAuzn3NHDMe6aFUxsEVMNc9wcRtmqenb3siKU1",
  "key36": "5gWA367ZYTvra4hkEN4o6dbzzMa2Aj3uUMkMy9FdPEM2TCKziN2yLYbNdq1uD7b2kk3RZrQTkG8XsnqXSf3hjPb7",
  "key37": "3XtYzgppVDdtPnRVna9xxf8bLuE2N6n8Kgi33kHEmXetPs4Sa6m9B45zP7i3HeYKqUoRQ4ago76GXK9irKnNwgd4",
  "key38": "xPu1HznecUpXjo7jSPp5WQ9AGpC3eR3Y1He9M8W4sMB5mocZybcwuRBGomGdZ9L2AVKTfBePTEDBgaQrctJNXDZ",
  "key39": "4gw1F78puJRPo1TBtJBxHE9dZxQhKRguhCvac9nA2jZLabocTuUrT88TFncrA8QZyYSiL8gau9Pi6zyb8k9hrFqx",
  "key40": "A9v4xowhMqWrruB1VzWtz6bi57qPX7KeUvH88pBfNKtKTaV2WQ4nTFQMSqc1UG578yV8nivoLGRpix7r4s87PCf",
  "key41": "652Z6KF5HJxcbiyjCSJkCWqQDFv3LCzYZEiAaVHLxsMD51xEK1H6jPpJBFa3bVDmfaJ3oASUbYvtXJrTAeop8jWm",
  "key42": "3gyXYfNveYHbmWDQoffsqgob7eSfAAdGGUkk68XXqeXfnJLLLJihnaUas7C6ceeq8ST8GpbfZwh6PY2eAg1Cnixs"
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
