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
    "64EaPJ81pSBCP4DBSMrBWBEs3EpChwaZf5hoxXdrtqDS86HDUs4b4iy6mV9Qw81VLH6zmCTKKdpn9LJsGXKPMR1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7iMWhcdsKHP6X1fRmQwcVsJwwBD9bXp41vDH3MFGkydCkXrTHHv2EwQgP2dzn5WuuN5SHMNA82c2caVfWsu5iv",
  "key1": "5krgez3858PF6PtMQsNtadquc6PP9RRjneTpQqyqcjdMFxF8knb8NdhuSnBcepvK7YRsfBED59GZnXVzv3G7PLrV",
  "key2": "4XLCzaSkuvtURrbzwj1vYTgFaSMxLh34aW93xUUNWzintp4qBmFPBatFZLTfsm9H8AtQ6Ec8ahoTTKDYj5yQyyke",
  "key3": "5Xa3ngX6iVTBk5sENFr9xCLj2WutFJZwuHuojsZH6zWqesYMNfE5WwsRxxeL8n9LrdrFYSWpNdRgejvKBw1whQFE",
  "key4": "2zL9hyfyiGtLTBvb5uat81vW3z7DaWZix8DjNcoyk3PhWhyaMCgTLkuGSzUPLc3R5aiz3BNoiYLc1wHR5ip64Hgc",
  "key5": "41eg4JRYNPSn9G3BmCXCHFT6MU4GWtXzJtqqUr5mhK7UbJYXSFG7dyshxPyX2oYkpnXw2joa6KRnRYouP2Pm3pY8",
  "key6": "5Tn9533SPJF8e1N7vatxZSXW4P7Yf4XTEAx5Vz4ZGfPgQWAnkC5UpK8SyK3vk39zcK982DnbFoohk9cQUa24TFpj",
  "key7": "aSbs7A4sUtvmxr1iLaQ7cBdEMm2sB2PPCodykLEoHch5ya6FidBnyBknn1ygpQUJk5aK9KUYFHkGuWj5a8ebrRY",
  "key8": "4SR9vqRLC549wHRtReLYZcyTmb75Qw9ayfn1Nc4atrR7fBLKZ3kGaB91Sfhvt1sYn5vsGfQW5uH1W3uWpYuQi8Ws",
  "key9": "29ztLzRzPRipyjp2WyfhDpRzxnEHWjzSx7p8T4s8fAyu6kNTz5mUvHVZJj6UwjjDnz6KuA8dhQZapHXwZwhgXqqQ",
  "key10": "5XETbBVTz15eNCw2GN2wz3af7zXZY5dgoMtj5ox4xH76u7qLx1JQd4W2sc8xMCkHzM6DFbJRpdRvVXd99aGWzYYD",
  "key11": "3Wj9CcCyCLL88BMVp74MBGUokosMorpKoG8NX1z1xnmeFKQ28GmYuJq3y3X6VC1kUCos5Chr8PP1aJyiTeW8Pd1i",
  "key12": "4rnkRyifCtMQxQrG8ca3bZhvwjdpq8HhnubzkJSBv8DLyNguUDdNcLneL5AVKyaUzYujPsSa1GEUa4hgxTKhvN2M",
  "key13": "4n8HXDnchtsz9Z7FmxyU8xzPNbtRZgkvcz5DYVvEemELrY7WJopvfrGKq1j4KfBSWs4KP9VQqKxhu376K6nvwTLp",
  "key14": "4QYE5YLWsxcv6Adm2FErwnApnPemPJ4bsdhKurpZc29UJRXsSCSvH9Bp3aC9N9TyNa5vJJLFam6cMNxdvyN4JRL4",
  "key15": "4WRyWYFSSmAkcxqxBojZ54Xhb1t9HSFBa4vGWrc8xmbwZQfs5ngWjiFGUbmd5Jukmc1EQuFMEmr9P2xBcos5Qkc7",
  "key16": "2o1DGcQXiWDCPJCCBJ1dbGtH9j713UAJ4PhkTWpMdpQm7H1ZBiH2EtanPHfMBSoTmthtcNXR2vrDYn3HiaGPTHAA",
  "key17": "49thrJFxAU7LcSzNCSLGdYDXoMPXiHcz8omEAcAW3uUHPaHHxyuKsedfQ2r6uQFaJXTMDJdWyE4znBgE3jKFFgU7",
  "key18": "2TvkVJkjiyrxNcGCUien7kDA3mSd4k4A8jJsNrvb1ekrP2EEwXnJB7ukuzdo2St6YHZasxafDchhFAqFwfnL7Yo3",
  "key19": "63Cu3NCiJJEwBNZRnRSGr2dZ33rCRUuvfHvRwjXoc9wRBDxEK7ikfdGAJ3iAEdY7bHumpnoipdrYmQfhofXr86iV",
  "key20": "3JXfCrjz6tVx9QiF573gSYbpoMEsWu3i992fShM3XMuVfEiLQDJYLvN7n61ydvocf6Wn6LDH2cov37WAb1kemJZa",
  "key21": "3ifSoTS37SdKtVChH9ERrTTuJZGsfDaKUTmG6z5CqCq5vUVMeXvbihTjYnhzCzhc1JrsMXHpwpBcpNNprAegwfvu",
  "key22": "N7QTGCV5t176qxFS2k8PH1Wk1U5PSz7EFUbsb5wKHkBupTpXJSmzGsMn6GnZmtsz3tUDWyHQPEGJAkdQE3kDkyP",
  "key23": "2WnDesqsetXuJT6nUYyHw9i6HVjou33nY4DP6Ueme9zzR1bTR37i6fBmvZy3PaboNnw6r78yJYj8WXBj96u6wB7f",
  "key24": "5W45eUheJ7UzKeddGf3H7Se65HbAKY29qbRKj2AoeKbQhuNDZops1PcA4syuWGyALFfb7S93YSSPhjXjDrDicEnJ",
  "key25": "3aCKR4ogx2tnfycFKFHJD3yKvHn156NaMAmTZhXMHWrTnZPFSLKvzskT7tAdUh3M4GLoQe4YSowemZed6a7n9c4o",
  "key26": "NGSqaFGNn4CoyZFFRscmL97P6t1CftSinNu3Uez99UZQJycPgUco3iXyEqeWZfSDoGyGVfXQbiaA4USWaE9Q2Pm",
  "key27": "4g3KEAQnFGpjwP5xHe9XgoQgFun29VxC55cPFqGuEqXDEsgtKcpBzKp7tNwdGDwjFavFYQNqZXZY6mZHVaaTRTSB",
  "key28": "5cK3DzLk3PdS7RMz2sw17G8obH6ZUQK8vaQrT5yFSKzSg7CLuEF5M1JRiJkuGx66zAAXH6TqUVuAxQH8wQ6GgSgR",
  "key29": "2qqKWGunusLz6Fsw98PwkwyVgBNtU8m7C9BxTmnYKjCApoz5wWAni6ApuehMKaySjPyb42TEYicH5RwmzBj7yBar",
  "key30": "4aZE6d6zoXjxh25zZuZnSsnUKFJPWShRDHKcimQG5SWjW2ri6erXLG4R51yDuHaQfjki6M4e44zHGNTXfwJRGP3K",
  "key31": "5teccboCYfV82DUTMfeGLUMbNjfcgrv6eeRWTRUjAPJJQAvczavEKcowuCSoFAHQzSPRzwHVamSpEd1agTYp4Tjr",
  "key32": "3WqJhakxpx9kw35miFZ4KFioAAfEgR7XenxuTENbmK17kS5dBG45wNXhs9njcjv8xadxf9QMBg2RTimAVu5H3PNt",
  "key33": "ypshvVEgVnqXcoXH4yXqaby7ULWs3nSAQjSy11UAnxr3mU4qCxFXkEXsj2hXrLirShGUCPUhJhSpHnc2SHdcMHr",
  "key34": "2rx9Yye1FgdXsd9Udzgb2MZvRhNZPNVkwVWZkfHVjWV9nQp4JcmV2z469tghZ11Q5w8RPHYAGNqKi2ocH1V7M9oM",
  "key35": "2CR3jLKzAxmd5JzwHY9ihrt96XT3igWtW6AdKc54rVLJmz2xAhN6Dn4kpB1MtVDcB65BtaqvJjB7nCrWnit24f25",
  "key36": "4vF7BCCpdEPzUEo2cHViSt4bwczqaYq9jXrrJtRtGUS6V2xb9JVeeQdaXtymywKAbFYhpnm3L1NKpwSR7cJzM5wL",
  "key37": "5XfhdrMUP4fabHKcAugSQ7cWvpniee4Hf52aCmCS8CQP1sYQpeuLb2yA61V3UgzdNW79zrgbXG6Z1eKMReA8mDbD",
  "key38": "5kmY7kkzfUFfUNh1Fc83sMtQMw6TXpEYRyKhfNLAmTyJLVZCGc5D5xermtt1uiV4mmhQwT26kNLKXgZnJ7iM6Ars"
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
