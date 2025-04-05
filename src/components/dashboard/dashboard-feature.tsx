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
    "bfTcda81SYScbGvgQzShEcwUBZu12jxEAp9mGydPYmihLKGhMDPyZzk8xu2PHAg4NHbSPX2sXbwMrV4gfTiGMY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pp5YM2bK8yEfYw5aEwHFWVuAE951TtZMLuew1vjQmT2e1gjXCv1Qm1pMQ729wmbE6R7XyLazADAYQdsFmnrUKbi",
  "key1": "3PbmJP1Y8Vwt6wQDodmXhAb24yuGLtib7UsbubBHQerdFnGddhoMwMqQVs1jkJDddR4kzmrEd5w8g4s7ZFHGrxYw",
  "key2": "42gjGm29fxk2mHNA9LYLe2kwoV9UCQeZg46rEp2tdAQqQr2BxVQb6oetjgJJ1qbCY6KXHuitQf6o7eoCc9bhkNFc",
  "key3": "2WFemTPmz97NSfcZQCoHs8GrRXPtQE4oUBTa4JPgTdbCpdJUyLB3qpqw1KKMas5in882faevByizUaRcvbd4dHkg",
  "key4": "37YryT5Hsgzps9H84mTTTWWBbweYRAmB3K4zUxq4MUf3SnwFiQPMfKVbTLnUmLEj4xMxZVcZxo4qDEqLqhtFFHD5",
  "key5": "592ah9Hst8YGmZZqJCW59xsbLC79YD61BtQSRTjKtyjv4m2XuYBh9AV1q8ugoqixeqE4iUsXY3GVujHS7WgRmqHp",
  "key6": "5L22G7cPFZfEgMKYay4uyrica3VySZwz8rcvnkrBapPCpagrVC1onYUHzdLtqxKDsAKux734jfmW38u9Q9K3QMnS",
  "key7": "3KUMttQd4x7PpW6VZGkQJWYrSapsoU1pszZbqes8S2Zm5sWC7PRNB8Lx3Sn3zCsLqq9jLQUwFAjd5wcjgePH1kr",
  "key8": "5batHNjvHr2nTcokWyB6Chbjr494Gva3mqrPqbP7MWDZXCY2wjvL5idwq8ZHmcLHhyYQkfKeUXvvVM8HYkfSkNqr",
  "key9": "2E7gEaVjFNecid3fFa9NLuq6g4qXvoeQVS2mYUVLWjgmJ95Wr5y5J38MHTCtFpMJ7KtM62gtUnWWQRiQ88SsQGE",
  "key10": "3Qtm4ogL2R16K6pscegqPxW1UWT3hjdaDrwrRY3ePQgLjCvCdEGUHfqfZuytBvYBm5CuzW2qcUKGBHi4VNkuvud2",
  "key11": "3kcyEHPQugqYoPyvutTws1uMXEEJTNBMFfvmHiGZbZfbXoU1Jaagi1jPx67xnHoezsD3jGMyeeyXizXfUHywK6RH",
  "key12": "3gqxDzf929nwqmYZLF4aSyBYPb3R1p4LGywjUHkhXTJAJGA3KZ3eYMR6bMJmUNro8DKgMrcBAoFA5MCgFF6QV522",
  "key13": "2UxhCzbo34Q3hH9RTQ4w5BmyRLvxL8gfzf5ZpKLLVnAzidPqAWsRt5UXEFXbkG85XtRZFTBtshFyBEv51iPDcNcb",
  "key14": "2PgAzGtfaKX7mpCPactFiq7jDH4q4dAzfycKL1BtTpY4D5LTxRcYzp916uEThtRuRQ4diMpaioTNmXiRvkDimxx8",
  "key15": "2b4Ppmhc41XNRqcHvZqQ3MKrMjPyPK18pY21FpTnRDEbZeaqoTsJ5ugPTSQcrAnShRWhj8V18kHSbuYaok3Luotw",
  "key16": "4QrZDi72PiLSMY9SQAsXGTnGsgpYQRe8MxYdKdpihVjGNTPFLLN639amkDy2md3CQWEonYuW93v1eXBBc6TMSFq5",
  "key17": "4vrfkkVjFCymzRiy3MRC49E4pmVLMADDg81SoZuFr3DP29diUYZct6e5jXfkkxvnLS4y8JzQdkXJ8jzoobQh9F8S",
  "key18": "3ZoS449wxw4simrgioRgmfoBqspCZjn6MH5VyChWHhdA7kUBLL16pFAayqZRLfasiBHDG3wdJjNcwi4GuZPt8Qiv",
  "key19": "52J5kf29Z5P9Jce4hZ9HRsUtqaekSV4VzbsBqS1zkuazwnvYjgAMojPYN4EQbnxj3wjW7idqP1TETZpjYBXeBcZQ",
  "key20": "irUoK4T9vibqFAt1Dn9xvvZ1g7jHxAKNAwr2cDQFn3PjZ5A9W6c2himjVxWU4DjBrUHMKhZRcnGMVcheWWuaioJ",
  "key21": "Ffe8XDbr7vhq4KSxcF2WeLsjNLf4qUcW1jdT4vKE8ke8yPaPHmjJhQgbEV2V9jen2Aa3AC4BRvAcncMUjPVvC3N",
  "key22": "5CFB8bxHiU1ducqF8HqApdeQ944FJ6j16iSEUnoAFWpFobgCi7kEkbYwhuWaAfLYPEf9HJgHZU4frDX4Gyf8LQ4R",
  "key23": "5KQh3pUddwZ4sDx39usnb7tyeW7Xf5hNTPKEFYu4jsPDYa7rxyndHYqSDJQevGcoBksnaamRNncxf9vjB1U6Hd9u",
  "key24": "2b5zv7RvtFFhHfbzYqoVjCWzxa9jxpdR6DykXNVzvf6nLqdyHmLhdYpUigxDMeQH4JtcTR1qaSDdfB92cm3jx97A",
  "key25": "3eR54ouUXcsuEU66HHH5Ze6o42GV6vLSxsQLjdNfCKVSCHahom3GeDj1Ntp9zPKAD9Xyw79s8ntgArZ6ZRLhpMeR",
  "key26": "338LExUNBXV8gqcY3DfwdobPs2zyZmCEFXcA4t4nsyPkauKRdtk3PmNhUY3Zb4n9t3yM6JxEWjDVDhJxWziHXiRQ",
  "key27": "HxDzEDFKJQbLKxua5UXu9vTqkg7XRvS1GaRpDtAaTZLprRL9jy4WkrbqjEisHE8WtDEokKmwiBdD4DuU6WpuZZT",
  "key28": "4jfVJkxYVcSEGH4Ly6HuqpwBBNTdyHMvWFQpgUo78mjDcqsNQk6nRAacSpvmrsrjaHc9wyiyWe9YJGLrV78xQN3P",
  "key29": "2Tnnq6eJ1Y6S84AwpvJnbyD2suS7b9WQwTYARykUchZftVJ5mZo45Wz99Le6m6cVYPUHJP68DKBECwJkg472EvvG",
  "key30": "2Np5VecQSoMVqmbs8odhRtFAELR2hGX4Ro9E55VS1iZX1ggBrjnZXvBEdiHE8LKxvgENT5yb43h4sgPGz4yhNvrZ",
  "key31": "ZtmCx6KzFRwDcUoj83keBenyU7THTYqjVmnQLSvtfFU3MkB3XLHNC47RckP9YxDpmtWqWdwNNDuM7mrNcBpH2vw",
  "key32": "54at88gfrRuuAoL15s3mfjfG68raUxWmerTRRQqFeosKQENim93FNZUU7dUrTbuqpVf5dkGj1mBgxgvQ4fpgbz7M",
  "key33": "5KRd5j3nELfmEJwnHK9dRUFJoxGwuVu16KZe1vWGHojeRsDwnPigEdjJnvSWYorwC6jkiGUm7AX7tMwEhj3dbTCV",
  "key34": "2sCoaPBuWrEFz5jqKDVqMLCPxs1tVcKarDAD1WJv7wq29ykd1XvKjtVTRpC6zyakwtc5Tp5XEaqdtTGLpKMRX2Nr",
  "key35": "65quLxH9tbnCLXXFZy7on4qF5BP9r7CPmzoHoig7qedGFg9S1E7D688nPwaszFKGaETuu9PFpiR7qrExkyusrvKE",
  "key36": "5ub7DtbRDQufaeACoA4tv8hancdvL21gTyvi46t4hKgLKLqLv5McafyVm8VokS9Tw96Pw2C52Yi9bQRX8bYZkTvk",
  "key37": "5tmY2h3xDezsjnqQNCJtYcu8joE5RD1MoUZZsu6d49ZcJdSLvVMcE7Sy2eovg2TT7xATWV5gC8tyXcsvjFPcMxRn",
  "key38": "7w5fUFp6ky5r1oj1nt2jMSZk39sFeZEwJBTLdmrdi8Avb92Ajw2TZvkVwMAfHSx9ojAHB3X4UyWkBSUYuGxpeAq"
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
