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
    "4dqptKdTxnR4veHxUtLQk4JxMuBjKZovL2L3bmhv9jtLES29jkMtce4Mdfdwz9MdsTrDTwKZKeinFMgtw8JggEQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ut6AnmMKdFg67o6zvjgnHKiezQjx7Wkivix2kFsVhtnuFBu7dra2iQLkzNc6bBP3WTjhXAcziJ5FonqJjJrmwxq",
  "key1": "2QcQRcCMzWxDr4dFdkbckGGduvhv7EBtTVpCaqZqFashmVhQ8bhpntpyedBxPA62AScmAuUESRFNK4S958YT3TC8",
  "key2": "36EdLS7e42nuVXP2bskYZCbUJNnYmmFahrSUdvKvbQFdCWdv5aFgdoajnbNL82TGKyUhY7WPCqGWTyDxcZ19W3ey",
  "key3": "q34csUyTFWNDiLXr9GCS4h9X4DLPx5gDuP9deY2oGQ3hH2beXAxFS88JnUYVdbvr3yNqbHTQyeyHjv7ut8SsadH",
  "key4": "QBz4SHyVX1TeUn1NmER1BMQp8FrkQAuAFFTqYxJpocCEmMCnyiTAyiut6yzLMdkJ1o3TcL2XK2WMgwizxhmsox4",
  "key5": "9aQroFXDUYWFjy3QVawcr2jDQkW1ufGLwBVReXRmQbBDBxwUph2CwdarWbzkSABqHVAexFDnGV9UejULkgWyEiQ",
  "key6": "2XQKFiqmpUwnJasSi6kwa9U2N3xJxg2KhddiDyApjjfzSo1dhotQEoHGxaXkbNDws3L4mYyGLMpACcJjNVAmyzQG",
  "key7": "362S25NWSL6qAv9DfoKx4mWBvg6t6wdv2NKfypczv96WzktYy8VQHhfi5mSt5oqDx5fxbRhraqMHGgGy8WYxMRm4",
  "key8": "5xN3Jpz6bkW5Zcd5oWqjrTReNPt8VNcjxr9m6eNxGJBZwsBFX8x4uyHzTjWYPr7bE7Q5Qn9jFBrVJu2v6yWqazz1",
  "key9": "bb1EU2sZSJ1kiMkem7gg3YXtiXeMenCXS3XDcBp4L9qisfrJKvPj3GW84Xvqf1787ybJhmLj1EVvc57Pp9RRgzB",
  "key10": "2Lypn45so8BsU6R6QuDwFJx92HmVKkd2rgsi79aNn5LMpyX4NaRGbZe7D8J95f9FDEtpyo49hTPFQDqZ7GvBFs39",
  "key11": "5uuDFZe54LwTwjoxvxiYkz7CDyC4mun4t4P9ggosYHFdcy4hChrrzxk2TBmLxPN8w295b39rbasdzucnDo6JMwsG",
  "key12": "62CSHC2pwPD4vqLnfD61P3VpiRojhfFfBcv49YptDykQTuRq6ipGZTBfwqqWJcSDfohsRrbmHbkvtsrQRegYs5tM",
  "key13": "ZNUFxWnn2g8XoHes4t6DEiapJJmABf5weGrK6M2cfap1EfAmtjGFt3EjuivSjGDdH3wN1t82ymgxxDCjLdLmWng",
  "key14": "BtJxPs8wDUSFjyLaWcdtwWRn1dqKRV2VNb1cJUJcPgzfuRKsGkVGU8r9n8X8h1BwdVziGwpsxFVojzP2SqxMUM6",
  "key15": "5BihpWkdijh2X6UbtrsTBgZErsDm5mVni2HChWNkhGLeg8yXNdihwSu6wmDZeDGduJojzXjqQYhBFQPhT3EdbdCZ",
  "key16": "5XPr6UBgM5smB5zuxKMzZjpBaeCGB2DzJEn3uaMhEhtMo3SPfPNHx8D2CYfi6tX44CyDahE5gsFDk4yGPzXLttQs",
  "key17": "3BgZDkVqKVH4sSH4PZFwwum2wveC56HDEaU2vEaEohbmBQ6fkyJWMmmLLhPE13267UoDYTHk1ohtSiv7RHHDA5n2",
  "key18": "3qSRCj5EfiuYLftnBTcE3vhbq6YkamLiZAvnkUYqTgFgrDg6LbQ3TuYrFZUS69TYEMD6TgbKzGiucyeui9Yx9qQy",
  "key19": "3AYuZpMiPxhzCLgUPM6Z2A4KWJ87DFDBdhjwJUtBB1aZdBLrai52gq1AdbsPtkY6qaoygUpbVTnVofMBNyCz9eny",
  "key20": "3F2LE5cXUS8R2egjFtnMp8xDis3i25L2UXMjVcaxtXoAEBezjWnzZcgCq31ZJkRSJJSpxum3g6eCFC4xgRrFbToe",
  "key21": "233i5PZ9SnUrEuiccQ2EuujqY1HbFzCLh69Q6b7uMtXvSa1JWcV2WAppYQYyt3u7tV8P3XyetWiKYfCZYvCtYDVm",
  "key22": "5agvouzunthg8uRMQ4sKTEaBPzngSziSouj1srVkGMuWg4xCiYnpWV9F2dkFXew7Q1CVux8Su6hBGfUtLoaK1AUs",
  "key23": "3QJCy8EqUc7BTjbJEqRLnVruDhkkVnoQM9Jgquuxy6oBzDp1eUyLNAohpsgTH88eLq3NzvZGPKAzLSeJo58ygrXp",
  "key24": "37mgQoa3uxhoEAayza5S3n4NKkt49YVHSTJJksnDtm99uuAiKYCA6gHgJTqq8EtqavxVtWA9WyoSwyWLBkjP7awG",
  "key25": "5z9XEzMU2GCXUc3BHEx4dPRtxoKBSfsmLNpHuPZBHewkvVQoj98YsXsE7kWwsENDGnMv6oqpdPMTdXLBcSPAbRas",
  "key26": "2MRJWszsbSYmKetEZU7fzNZTZWMJAF5S1abDTUh9i6WjTBQ712Z3XZVaSqSw8t8Um5h4hVoGAQm9mhAXeZBWo1ft",
  "key27": "2faMhxTm3H8tD834d4bYKMZ3KuNd3FkVaJ25g56pCBovLTex45jjhBWzukzCAERchGwsAneAEi3w195g6CE5QjR8",
  "key28": "qVYcW7WHsavJa68SY6HePBddeNyVtyv3Fw238JhfxtH6ERvwTJUG8YMgQzzcngixFeJS6vSM5ZTr2aGKQ6Ta6Sw",
  "key29": "5wmrVRnstR2NFD5SZWyeEi41bB1Eifnkgz8zTrth1XnRkfc5EgAzdnkYrkN2tazS8N2YKHrM3kzimRL8gPaP9LNW",
  "key30": "4fw3NyhBvrXxKUrphq7wpzvPW8tKb9P6o21WuAvrES4ZzRkUppnYJtUMX8ZSkpQDoXTECqDATaVnzaEAcfqaQcgb",
  "key31": "2hjxQiFB2xmrnkEktUirBEYdoh9b7LyVUD7YWbYSZdEYKVZVCF81CmooA79SdQjFEFovXjT2tRrd45JD6SbYmLCd",
  "key32": "4kCDt88uPeQB5Txi8XDEjD1PdzVS22GDBqsJDVVcZ4TSsg3Micb8JwS8VVtuPhoLAHGjimnniAar5fYTLkmGQ1bM",
  "key33": "2hWdf3QyoPAb9961PSr4faAyBfgFRYDsPRoEcDG9TsPzyLertqBiKm2kumLdD3jP2ryJVQHaBioPKwihWvwGYJF5",
  "key34": "5ZX2qzXSJNXv9AATBHr5tiGf1nPm2jHoyomwrbHjcZ85xEYGZ2srggQFgBSsXxiS8DVGWokK2sofBDEhXQyejvMA",
  "key35": "WfqNYZeiMw9scFP4MqHLhX8Wqe16yqHMd1hDgEDB73wnhVKn2H9fHptR8PhBbJbLhz2sXKtSSCeu5DfRthcCGxh",
  "key36": "22ZaZgEguWJ1PUGGb25t5YHo8fVmDpmTqoNPzT8SZksaWrQfr9KuAVWRukSeeAvj1RxhZ69ou4wRf33bpucSSbkK",
  "key37": "4LwZ5WXqfzqqjwuatDaU6zp9HzYAtLRfqYuhD5NX5vnqMhD2i1aoEJawmequQvCpgNiU7eDLxB79sErWcaa4fWBi",
  "key38": "4kqmB7mc5gkkYieK3yfF4Bs13tdhWgM16RSXGDdJs1yRAHDqRS3q15aPP2Ctw7LFskFR2qEJetNTtD8oVo38wS1t",
  "key39": "3uzT9tYbVA9c6i8TsiUNVbPQkJbTJcqGACBmA69Wx8X8fsABjfvMvjUiPzsLC5a7576Q1v8aHgvSbu2ddQB4HV8J",
  "key40": "2tvQZtFXf6usiX7TK6Lw4HDNtFsG3n45jM6FJP2Wo6158Qwm7ZQegWGQ4iJK3R5nkZCG1qGSTK7Fafu8zDJ6qRvo"
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
