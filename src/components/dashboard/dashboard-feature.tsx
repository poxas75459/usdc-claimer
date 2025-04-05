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
    "2gQHkPH7nyDy25tHM83j5MYNA8cScCt3mV3FQGZdBALGUT2gjV2EnKMzS9cDmbvQetkGTsKvCRoTff3aAvUoyXaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XarsarDVnAuk3BArC2ZPBYxRuswW8UN1ZM1ZDWYhagRMrnt99igszAueUx6DbaFSYnPSncBhLiQYNBEybsS9UEE",
  "key1": "szfySDjkwGEYk7nxQ7FMv97TupwJ8ruCvA9dMMmmP4pKWDAYxMpDbX4jXsqH5nWkcr73Xus1beXfuDWgUpL8MUo",
  "key2": "5qrodDZvKJ6bU4EFZfJF6sffXL68MuMaVCxeE3n582q1ergjDscwLxcMNHBn7QaW8jHX9NKaFHC5y1MKZpoiS6Fz",
  "key3": "3Vc9PDhnDmN3265KEGZHoHeXwdyDgr2RGZQq3djLs8JNAw3uWB9bT9pfRsVs2DekhEkkTcmKwXjyqwvxQSPoFiP7",
  "key4": "4rrpE3ipbvYU1m5p65n9LaBiZ2YsxmRXDhNpbgKhDiY2zqT12FGYRoqe9VFe1yn9RL8xfK74bX7dwpFq2ybcGpEN",
  "key5": "3tNXzmMCLN9P6UMvLVTwHy1tE6Pm3rEa21WHEurGas6nRVaxfiyKc1jNLQTEsuRY4yK84jHspaAH9KVW8kuQvMXz",
  "key6": "3bFfMpgamEXzDj4iM1BdAwGJ4Cevgu1j2bfbBdQAp8jrqc4mMSfQn2X1jB3PDyiWHuiLBNB8vT5Dr6KvbNdLjoji",
  "key7": "4ozMLc4tEMiugSapn34ddaZJuHoZRzomfhRiQ1zJy8vV1uu6XdA1JFoPqNGShi9HFtg2aTQXpqxE3sCqqvUDQg9d",
  "key8": "3W2VqwyUuwrZHPdPACNtjuFMSjsBSj9fi6J9eXMVabN4qEaJnq2KiRSGydqj5AF7wtQBjEjEeJAevDGbZw5wVyTm",
  "key9": "5DcNCJFSW6hMTVKPJVUWSXZkoPfv5dGZNyZUe2Zoy1jkXvEMLbAfVcxJtxPX9E4k3u1Ya9SJDbEhAaDG9p2S9C45",
  "key10": "4BsBRc2dYGhdSX1kAFMYCe1G6ENkkzmAbZwZtV3d46NpH5twvi5WoxuwnJUxZHzaptTQQyTkifbPoYFJXht9LoaQ",
  "key11": "2cnmKaWxBqvTrbcX9cDoR2b4fpK6V41ipWVWps4AqQ93kqwZVUk6q2zAnPWm2Nt16uGqS8Reodiy4AVBJiHgrZuT",
  "key12": "6FafzzzoTm8p4D9FCDzLwG2MnFkL4yAFSpHrxFLpWTuYSWr7J54Naac241gswDYQgzzhKGj15DojvHin843C8tY",
  "key13": "5aeVgZFvqEudeGxYPXHps4scnFhnDsKXrE5M3Xv2m9hyKjSCqq3Qd3Q59DZTGjnn748Wmka2yJW8SLXUtzoaaj3s",
  "key14": "4oDsNNdGe6vhu6RLe5FX2xd7uW7ZYXPi8oRPyWjFduvdUAo5UKz2GNc92N2Ccw1Azobvg9sjExZGxS4BNxw9k7fB",
  "key15": "3UKodGDd6gTUBGxSPwJ2JcJp3AmyzR6HWswPJBQnLVMG6WofdujnQbSPDcVJLWfcuEmKxNYgcnnH3hAZpCpJiALU",
  "key16": "3KamEk5ZwDUrguMRaTwbcXu24EYD6pVQDdH7tnxBe1jeTu2rd4o6Bg8ug86t3qjAAG8y3bsq6SaLgCBzAQfddNP1",
  "key17": "2VdyPuWjBRvJiVofUy55eBwAjrY2qET967qC5YUy6jnZU3aKNkk1gZaJrLQ5c3E9LFJDQgYDbgYK3JNkCse1Faxq",
  "key18": "3DmCTQ3h343wAMCKcwuLfrZVJnuiWHEpDLsLcbmKG13n5B2zF9CvyThv2HLWaaZomouN9XWjJ8x8WaTRA9J26dVr",
  "key19": "2EdxGECpPmpPAZDyKFApCEUk9eiuAebAT7FFcFwEpDdZjRD8iAm4JxtmtdmEGe4zRFShSA82oN6CWaCfHa2u4s2V",
  "key20": "NnJhjXzxWDaTCbNyFRxTGFBvbNNCtQCYKR1saU2wqdfvwVFX3wwoRf1FHCGUQC1JF5Nf12wpXspFjuW2rZS5h5q",
  "key21": "2xpzKNabkCNoCouKvwCqj9YE3ATCCWeTkJEsyfag7VGHfG1hTdsg8mBJdQXhz7H23kj2iaSSu5S4xKLsu6YDQ6fq",
  "key22": "txYGi63kQpw3Us5qWnUNDvJ1gzHbjmG1s2qyiJc2FfLiV34BgthCJxoJeUbeh1TUU7gqec1Z6q8AXM737QbMxbt",
  "key23": "53Uq1HRJwio9miUwYc8WWxLD3FeB3hjjLavXDTTBkB9Vtc98o7DZSsG3FutmZQ3KBYRxtg32N3vunXpY4faq1sD7",
  "key24": "2nTTA1jV3tRatnKucDB5bHxxBiEhgfgyJpDXtojvxQSeT8C2yC8gAZFhNtRXR6e6MtMbfGqZJDoKWq3fZNSZnDbr",
  "key25": "smpdZwXvKmxpbbbthLqJWDBuBMsAFrBCSG9BJQ4w56KqdUrLunu3wqbG2ksh2kcKnphpV9MWnPnqZawUhn26K88",
  "key26": "52URD94JrtrgE2pE32reaev2DizWvMDCWDrRZgSrEcpVj7FDRdPXoMLwEPP5p6QAxn4k15dDoTauUsLruoh8Bgms",
  "key27": "4JtutyAAgzCzPFHCfDPK4mm87ciQW3KZNmxhApSF91QfJcA4z1sNaCy8eSTGtpXoLFGoGVKfSs4TkpMTiRxEHcEK",
  "key28": "4YTXkwgb5uKJWs84JmaZRB1bHH9n579CDka6mpMcSxW16qpXpBwd8r3sofaQgAmU2R2iRUQuJLzqXCyPa3HAz4gs",
  "key29": "VE9n7soNcW7sztom36ywzsfthYrqGTBmDbhxrVGKnZ9A7zHwEvYd22tECjx2ziJazEFoEo9nLU5UV637V34EPD2",
  "key30": "4yEZjiB69H53Y54NkKDvcVtxuDTLZ5TpFUtUVsm6RHi81aSa97NSQwTzznkWvm8ducsvKCiqxeFFTsHurhy9JVSV",
  "key31": "3gcu6z4jG4d2cuuzKY9hcTrzeB1DUNwgeSAVJqLQpg6eSrPZ5CJpb7ao7D7Pp7rd1G2ieQJxAdjaDM6hPQCsjM2n",
  "key32": "4s7t1NG1TEknhkhEcfdb5w9Mw7e4Tr28gLSXmBFdbqWJbzAD9rk6W7NNpac7ekAyV6NmV3XT95o2nZkBq8nhDx8L",
  "key33": "45ZTNhPZv4euHaw7y4K4kHSxarAhkstAkUJLhAK8riu6AsfoGfAZGUW3pEXNkWsdEjrJ79cz6q1rL5xqzCvsGiVt",
  "key34": "3Wp4gsNXDhqZFykhmUmnPeUFYbdcoauxAo7YtEnz4BTQhwmCkSypN64ZyGCd7Hfqmw18hZ26hmer6FZ1N3tGLc8r",
  "key35": "j6h332S9c6u6nRcP4ZbDy9vPdXHCgSxS2MdmCw9PJd1xftmo6CKynSL6fb35UDy9NdRkn31ovqiKQM6R2Yb7UXC",
  "key36": "4Vnr4XehZJeAiKZHPgia4CUd4nX8Gpgqx3ujZPDkjuBCYgjvbjyjj3sMvh85KkXxXpnuRfZ3iSefS6uXF1H97p4t"
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
