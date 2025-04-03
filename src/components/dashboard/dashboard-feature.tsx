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
    "2H8Wcz9NsPtWMXSJ1wZV7Sra1pxL4LeCSJagSsVvMD9RahNgyRcs7bkvwrRhxfLJv67ccTQoZjASQg2vSBGuDAdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z6zxzUbcTDWygK1bH7PMPRgRwCv7qGX7DuZawozK3XXDwuRRUv5gfXWz5cjcrteFnMrnRVSJL5BQnPt6haD13E5",
  "key1": "5Q5S16FsxMoXzSKgjT6ZjxjDMzqe1sXZUYhX7xv7b46GF91oaj7EP9iEcmd8TFwC6GaWWigaxHqWpkgnQqmAjkuj",
  "key2": "2MWBW3d6jxbcQTkwHNHfUNTT5zkiwXR3ucu7XRzawUwuE8QRN4pmYXzsuh9jTReVoAySPAuRFfqNj6hTQu4KPQfy",
  "key3": "4fokPSxn3NcB7YWc1wE27kF8E9Asg797LqRXZ1wAB1gZBQqiVkgvYnjVodTp2NNX8DXm9DQNUnW9J3KT1HxHjsjn",
  "key4": "3Lat9z1yb1W1ecK4Bb7oTkCP4hgVGDoxqB7b9iYzQweU3Z1fDFKfy6CSv7N4WZM4GSWMBZYsSLvvrhJVbkm6JVGR",
  "key5": "WhqyxJvhbmHAy92fVz6n6vT21J58upgjssr549ULmKtpjgmEq9YfaZ7km9hxzEc9iaYqSWU4bzjzvrnrmatWFFG",
  "key6": "AHUzwLoPKTX6wKsypVnizUFZwzLahEPPsv3QRjyVty5dFFPkeu6gCwsdsUaCcH6F2FSRYosUqGdttWYpL4Pbqho",
  "key7": "WC9M1AT5P79NQzGszxfGGYzm4jiScckP63CPNPAGMZWBcfb5npYXfBjQFMHLKXwZLjrePpnUCtsDHKiiZqn6CJ1",
  "key8": "2mJ6iw5ECMQjWebPkUgtnDzCZX294XaFNNLCYR7CzxWZ9gG8RMJSgwuiB4X2JaXqrQkFYiXV1fHzy6HW1P5GU2PW",
  "key9": "129xAL1hvcWjRpjb6u7S9xUjGodPybqiGNiF3UyVpBdpKXV36PNLRdvFvCzJ9ixmsesqDGQn8EPF6dsqKonYv4mD",
  "key10": "ovatVNPMpEAuKnQaG4d5ecvp2woDwDPykuQ2RDYxdoM5qUtbTjvMNv5wxAJutr7sRTwkY9cMo8yREuX4gNeDSpt",
  "key11": "3kRt1yGXcTmVAddekq8dJH9A7NUwxSV17E2K2F3zP3i4nGn9ypKYzw7rM1foVGbmqCDTq9wuavLpAd5VhTrgT3Hn",
  "key12": "3PDAxby9hzhLQt5gNpTViS5kAiyxPaA1tyAgVXfKpAfcn9d9BYJK6twoPBNy75oGckQLRkD9bZ5xygC7n3BQsYd4",
  "key13": "2Vng6sZZEc5kt4gzuvD5jPcPRseR284sy3HQPsWVegWdY5XbDxt5TWjnXii72ickaE6MdQNcmozEM4kx5gdPfhrE",
  "key14": "3ibHDYCS7QuHFp9zoeDV1WujxR6xNyqe6NM7RiEnyHgb7e5XxmgEhYKnKh2Xoi5ES639fcq6zaaB68K8o14EC65w",
  "key15": "5yoY6JFqDgm2CX1LyrZPifZzsQt5sSKU9diVyDbsRYGoyARoHZj5dCBhC2Zw16STwHTqvfigyAk2Xyx5vgzcC1bS",
  "key16": "tcFGskuydCF6jEeiEdGreRk8FhyaBSC7yJmX7Lm5qNb3CQoPAU33XF2bJnunfo6bc6YzqfattP6Qq5KR29PqGC4",
  "key17": "3gUwYXgcNv9Wu9txHPkfrFmyfNNUV8wvDtkmiPBj6CcNcJ7r3XUFfDAAv8xkmkbyd6wHZi46grPkfy1oZ7e3nkpb",
  "key18": "56s34w5mLVqDk5tvBbWHofwy5Eovpj4kLpvNoo2AwkyVZaA2jKgyfRgYynC8V4KoWmrWvnuF7omBUSnXaFixCuPW",
  "key19": "23zUPzRtB2QWKAi8P1ayriMyNFT6fnCs7Tk8Dugn84BDyCPESXhMfQjsqPuvjTKAeSQ3zqx7WG6UpARGfJ74jqzD",
  "key20": "qH9R9G7HcUhMRh2jf7cJNkLhV7VF63Nkr31Bp43wVGdCve8XFibP7t8qv6K2rRdczQsZQUcmNU73g2b7c2eSd2q",
  "key21": "2rqNe1XSAokRaDdpBNNCiBH7UP6N4UqzZJaLAaD2dFj5NiBcqSJJ1wvXSXUGcWSqAd3UCipp7EueMrKdPgffRpBz",
  "key22": "3VPV8f7WqVoEAExyUqXaaCpsLXmGBLH5KNLHS9szoLLDkxYxUsuVqUkvnCEkZWAT2yj65Mdg39hje3LreZZXPyxv",
  "key23": "27TwsfAssnDBv9bsx3bWde7Kd6iT9yhC38NyAvK13smU3bRsBtKZVAymi6HGovDmEwmuKjcgg5SLYxbVwPUfDE8X",
  "key24": "5iTJtQMh27dkpqEscJUjcmHpMnYw3uNbR19hgXy7WkdWVNcBpuds2BpUeKc3tH14wRAqfauVJnHD9KSHoF8a2zVW",
  "key25": "5cujyqT6sYADgavNnN1Q2a21xAhvM9QfNzk2jKkLSBpFaAUm3YYWbw8eXZLgnbiqA1F2rBpf1z7VYGo5TciXbvJF",
  "key26": "52Gtg4WWTHqbpUSHyoPkBG42jC1qnGanfYtmCiYSDNZqvfiaoHN5WScKhvAtENNXLUQb8WP1aaBAZQr2en6w9DZe",
  "key27": "37KWefvGbgjvoCVEgNyjUbN9DqVRdeC4bW8MaxwJQAMz9CTRJuZREroqG8vj61debmP57zoVHsDeWXam2USit6BL",
  "key28": "3MznQH1F2SjqWfo6vqnJxcBr9aKYjfKm1TEwhYm1q7akBtpw2CUGWfGYSoAoUN1fVA7mau5BmduQ5xEBJmMpJiCh",
  "key29": "x6aJK48QRxKyEGGhS2hBoDcaax7SBzjaqBN4CjTpCGFsEK2e5n7ngL1uzojcQwdN5SX1y3rr9XL2kb8iA3C1ogJ",
  "key30": "5mD6BVSmsfxZV4VrGEyXpC97W5nAbjEmGanJJrzyNQVVeZC8LEz2mCPzTx53tPASmCDQUhrAERJbPrTzXuqKo39z",
  "key31": "MJJ5s5Q96adAxWiS7voZRcitfNgYQJTWBxraAE8kUN4bySRCUghJBC794u4RMezzCAejb2MfDF2KckuHKJeWpBv",
  "key32": "5Y5F3nNhdYFs3HeGZF8xF1fsU1FKt45iPoaAaABpLFjwXGcwTFsP5p6HcsRf45EUvNjApbCYdt9qyVR4PWPmYv9c",
  "key33": "5qTv9AYWazWxPv7zWv66dpRYwLKKVkiFAL6fEZhcTSz3n3jfEnk1sbiTJKk7MBBe4vXB7jeHGLj6ASvzVBk4okRL",
  "key34": "5VnkYuJbTNKXQN2pivXRJ8MzqWf9Rm2fTxCi4vekQ9xPwowFNQdWQ8j7Rz9LYwSjkExRnLs7LyudQeADi5yJd6wf",
  "key35": "ta6gEzmsC6TqfLoZDK1bPotA4B9pseCUpLT4HXzo5rVyZkM6Q43MEaoQUXVL2CuBZ24maRXZdN5k2eZuuhB9QoP",
  "key36": "4X1FKgksSreD23yQni7GJPDAJHNMuUuynuWmoCgsMwNbT2DN2sJXNr7Xw3PpygxbjiE9FzcuKMgKCmXfKTwH8vtM",
  "key37": "2bGcUipYhMXv2oZ75URkz1iLTVvbBWMh2nDLa74zfpAxay3ZPrbQQcRf1fPbAMAT14cy99NgudrL4hUcfV33hBpA",
  "key38": "4Y5XJa9UG5Ao89SkzAWVoBU8ncsDKEuRC2K7cXcMAUE2GUrSRvcGm2ff6GdbhycV9w3StysHUJSa1kt8Mqn46ndZ",
  "key39": "5r2YMarJp9fzY5QHLLVbPAYcZmH3hhVddujF3bKtcxqLX3Mv7SLM44THhJSF3g8NoHM2eDvxUNJyfoacUYF6zFFX",
  "key40": "iMgqkiaNLCFrhDQoqhNRVXDdkMCuMnvjEmjYXtLVHcS6kNPRFKMbDR7yF3BoS6gjQCSA92S1mxQBvzmGChU38us",
  "key41": "25q8YimJWyaHLX7WTdXUsPbvy2ApHhPom13AfypEZx8kqNPL55bTSgChS55LCWobXtUQEkj5oZvnkAgiHKLxXctz",
  "key42": "3VjYWtLyMtjdyi5SrxVCpvsXSyJw5T8N5DeAUZqS58L2hHr4u5jvb7xvKyjESXfEdA3p5ZKmzvfXbMH35Lz9KduF",
  "key43": "4kw4o62AAxAbPifWTcyrznC4qKYKCV6rZ94JTK8wkgXHi6omUH1caFrMYoPLrHgsQwAkY4xJW6BcCDpnG8B2RqsD"
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
