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
    "4fMkbd7XuXGKqnkHhfyeAcSFsonoiu4L4uAvRwiG3618RKL11Y2h1dNHzdnhTej5soWwhNGqmUxAvrCBNQKqorgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ujiy8QuxheWjwqj4SxAgbxW5UerntnXkuf8HYqAGJXavFkYr997JH1vz3U1teq3Fov15X4nTygubKSLcdYtNcmv",
  "key1": "3naRG92HAQwJieTfjXndCR7hsGCsZFTYgKu5S3D6NVCBbYYXi6fwNUEYbhRR2grAYybbmEDQPh2bjE1GmyyTRbXL",
  "key2": "RTdNCrPxkCpy1b6CaCQ69Hq57TkpkASMEFs5n78NdEAp9BMX5rwMm6reg5XiwQDM3NESsDQnQTqFqBUTr1qUZLS",
  "key3": "3a6drdc7romxD8rA3zYCfFzMYmkVtyVF5Ei8cbbZbDxSMb4tA3ABzVXqyBBpmk3sy37meqPxYdrZKCyT9dKxq2S7",
  "key4": "5CpX8MyMf9eaUCYzhNWasZLL6srKdfifBMuxu6c5y7DG4Ah4zBpzr5kqU1P92MGb2YiNPbaZ9FgrUaCbxNod27TJ",
  "key5": "5xVjo55JiXdWd6Zf8cn8RS6udMZCxW2SC7moU9nCKEczXuja6A2MnhsnysD2KL4mUteoBqHjaK5kQweSJZkKmMEW",
  "key6": "24buiP7dzY56A6V5WgxvjcC1jpLJcPiw56pW4UBiLvhVY8ijGvHSiVo1QpqF36wahsemEq6ioGDK45hEPsP1QkFV",
  "key7": "2zDJMyXzAJLAtNQ8K5R1QTfBnzbSLRGL81QWnrKtBeqvogG5n2yogqKtmLA5S8kfBicE9WYL8Kz1AAbfDYMEAENN",
  "key8": "5D4Kk6FD7NapfxQSoKVNRzPcJgwkw8LHXZbk28o4FwDadHLRe4u3mT978bqD7JPJGFsPe3ocr4rQ7X8iFkYj7sMy",
  "key9": "5a2XbWtecpQ1cfPkEU9K9XWKUuyXf5JcGbHogbW3apKXiaz949mzURRmq7H4NZeegmsbXizp1B7wQuDzoo6enXRk",
  "key10": "3bqbQpmidJweRQCRL4TYfsqzcHawp1pXxZW56LancDUA9hdiDxSKi6aWsE1CkjCoTg3gqggSs2T6Xc8xVN67QMiW",
  "key11": "3FP8LWGknY9kZcZbdCMLSRENwierRd32SSK6i2LwYLHjo68LW5bpNsBTRH1BXjWZjwkSHn8FLy87A7Y2HP33fq4L",
  "key12": "65wgStLMudN1nG6Wd6U4bKhnn39vuCvpzbQ3GXkUu2xGxzBhQs6MAdvA3UZpwqzzeXqgLK4eF15qR1VQoRUNzpAJ",
  "key13": "hf4nHbp6VHcnGpVQAsMmrDhxYeCkrsRxK2dh7EtgDSi6YSQSA6ENcCcU33VTxKqqUT6x1Sa3WCDcP1oamMU3Wgt",
  "key14": "3Q4Ng8u7wZmc7QjsrAVBde8bnPkYPXnSCco7RrabA5GFPohHEVA5DtWZNErCXCxaKMo7ukEmKU3fydWNsJKF8Dax",
  "key15": "5T4o1UHFFquytwPeM2B2Km79W45ukX4YkwcaNExCaRiTaV7oZ3kcnJpfAAkTkgxruZmM3cao27cYKsNE4h73Sq9w",
  "key16": "2btaUCuM13vVNtr5g2PHQR85whezXaYEZV3ADCNdMdoKHJSNPHSEf19MnwLX7tzXUuU6J6zHSuZZmujPzkFBkDDb",
  "key17": "EtFH57tfx79Mmb9ud3Kzw93uYbmJvrBN8NudELviEZGzoLYYUQWWKq5mTNMQRawVFrYXFbPaxTkvS32YJWFYzUY",
  "key18": "4qc4AoKQ1Jug5XWU7zEPCFeb9T5ukQUqXNCZSixBRcKwGMc8ZDHJP8DaHGEkv9rzRaxi6NzufP1PQRoSak6xGDx",
  "key19": "4PjHPAnJWep4K5SfLU1XWc96AYMPBTX2sXp7yVfUuK6t2xBShVqzuKpLuqYPJLDCcY6i54HtJiFoCakH9XmhCBeb",
  "key20": "2WchhQfbitsCiQ7eZqwrAsvP5YUpSPEL6QrFn3vqJh1xvfKuVJsxs4WsZDWuhhhMV7wM5Ndj5iSZ4hLECSn1jyL2",
  "key21": "4QKN6LHwiwFcZUWP7vEXWzxk9AbysrnJpXrSGsLo5uJ9J6z3RTYdFh2nYrcrmH7u8XiJ5wVRvRDqYjPZpQJDJ9Sd",
  "key22": "4Xe2PdU2Ae1wU1tFedLsbqfvw6GmnS2a4qy7jssvxbpK9UKBvphZg2nxEUXbdEiBkNP55aUb6S5gBjettaoyrrGq",
  "key23": "2tvUFoTpiPJiVoL6iSH8LH8QVPqndkRgQcXmVQEA2DkAwSvuF1Bdihj4SftDt7oCGRxTVfzV83JQd2ffqrVgYbr7",
  "key24": "RgSHDXbR8x29Ynd1ZGTHSYjw2tFENnGT4kDrDe5yVkCotHrJcf6ySDDz5FTJ5kbhnnDhkQBfqAAMTj66W3KreVs",
  "key25": "4yChrsDNBVj9hZASC47xaM87N5haFMR68NhR7ugAVQ8ovCtiyHQR9mji1JVnHXaWhDLAbebnw9co6T2UYgqSV8yR",
  "key26": "2cAPP1KT24bkwFwJKSKcsukqH5gtzFMDKU5x6VpCf8KvvZcTdQRdtSry34MEGh1aXc66ecszMKko89NCxZx34mrw",
  "key27": "5SPuwwwkyxU18CcjNgobnFxRJiTJKaf3pyobsquaDC5rZL2FayGFjY99LvfAGz4zzJRefDBVHfUjm5K8EDFux66q",
  "key28": "2QkHDqcf3zLNm6DVBc1uE9Sw5uyavA45X2icUwJ1aZiBrfcAhce2g3WTB4cJQoxJfrbJaep3sAs4vdBAxACjPnoM",
  "key29": "2VLUJLVNSiukWKUWhCdwrQrSsFgqKd3nmv7EpQ7TcokHKicrJfHq7iV3vgZB8dxDcgy28cqLM3BiWrPRowRiSPK3",
  "key30": "2yuHRQwiQmApWBn9YcAV3ZiBwCfcMb1dmWz2YRv7rg3QTGFMWdq94YVK7hwpb3LMm3nyumToULxhv8SVZDnNLn7G",
  "key31": "4kCeSnZvEMmvEk2rLzMPPe8Ke27LZQ7RKRjjKDN9YhRLNV4VoTSmsrsWBRDrR4waSjbkkopgAZU9BkaXLBqRB7TE",
  "key32": "WQqxawcszsKda5mzmEZeZeHbBTscAGPCiR8v17jbzWM35ihKKmKhyT9dd3xbBEsCqTfcFW6yCwdoYrVanzSqYnv",
  "key33": "4TJiTbYdN5PsU5CxBExrJXfJKsywn99zjtxXyGhxrDw94TzfPhwLuLM6qtteb5rB5thquHvK8q93YKY3KFyUCnmX",
  "key34": "uffWuHCPQD6s2ez1EtaVZC2GdPN5FSTSS7zk9RCKMxTVsKasHnFvsFXPp4AVAFEMoE6etEL64hK9hfZ6UHmmuaH",
  "key35": "53uSY73bSDFYQ3a7maN1pHtC33ZZd9Dj7wnhEnzBSir5WsViArCWgof6bvnX35Pub5QAYNAmJBvXVY9GNMwWLfCm",
  "key36": "5r3RNrKSpt7KpyAQi7WfwqTzTa7A5RAC28oM17yikbNumiPppm1iMXMnr7LgWeSJ4mzHrX4EvrcbukS3bMRcWfwb",
  "key37": "54rW6QgPeVMv89hSvh1sUxCkPS5Wh3rAJjFcJUagGsC5CJMqeNczQxCoGgQstxohbDxpvaRJD5ZvccCuwhNi4qZ7",
  "key38": "4Dta6MNgXZTXEvhBydsKwjpQfK7PVczofksPgSvTvZQzUGanYSeqjmEPCuaYm7PrsMpBPQVQpEbASRXueP5KU1j1",
  "key39": "3oVATwbCZa6owigYapDeyabd2ubxemFX3W6SDMYuv1eeYf8d9gm4zZFf1ikuJp6mtq34kk2zVQ43KhRQBmT3jJgn",
  "key40": "5Qp2qmnvbchq1Vi9ceWdNvHnBwxWrbLkBGbrxQ3YGxrC859N5cMEw4skne137D16smGzqXEiWYBL94UJ6GNgfJtA"
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
