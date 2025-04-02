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
    "4vxA1FPLtRWFU6WzN6JZoHH7jScpdkRbjk5wEM65h6QYZUUK29Q3AsnjVGmzhvQuEeQMuPQLSBocu6hQTLzw9hGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jEZu6JnUk8CutX1CqZsd7oHD1L4xTCHorUYaGG1GyMTJbifisNMk9LFhAdo8xpTk3npEYSk2fp33uyRpVTp6aKU",
  "key1": "5L76RJCdpiLVzfgm6VMjUqkAjBayfg58oRgq1memfue9LXDqKfdqb6FLkgvTmWie5Y6y1VGDAcokCdtn81gUYcia",
  "key2": "Mt9oB3Qx2qN6r4CUWx5pqcyxcS7teVyUWhstLJn9E2tBuxf1GVkyZeLwYCfm9DBHz2eSxYjT3AsHqWpLAr65nvc",
  "key3": "5N6x8WZui3XpqdbE1w5zFzaRpuMkVRmF5iF3FpGpf2eiDKZd2jmXqyXEqwvRxzf8ztVgk1NnhfwrA2kT7SZ8D8yY",
  "key4": "5UZCFdi76J4i8vbZou9wTrFxMdw6GKNUvzkfKv35QtWwdqVjFQ1kX4ABnFmqVmT5gcSZkMGcsv1n5Qk7Rsd85NwK",
  "key5": "3BbYe643mJaggAHbMtyz53AYk7dw71uu5yLs2YWcmNvowyRS3ydH5yr9SEjpvFtHtUbgQZZu1AWJtFWbFEwdtzLm",
  "key6": "3gQkwDv2V6Eqopsgh5wpyFFhTYYQzP6QDYev1pSezRxqCeMoe8hLGYfkhaUWaJZAHh5TLA4J7FyxSfhkKQoWVz9y",
  "key7": "3J6bp68jf3kkZXpgBaxvUrNHwdWdpp1qZpAdbisdAqLp5BroBEMjB3Y2AuyoraUPB4wNjwvXLo9YfQ7G2xPCkGjL",
  "key8": "TGSZpGf7e7ZRqmEFCuVXR3kEpmwyfYQWE1TU5BPMJLdbueoP3L6WraPhRS41Qh9ZRysVSdBHzmycXk6FxmZfKN2",
  "key9": "5irRe6PHBYE6icfRtsWc35DPoNjBSXtYkPNmbHSH12EY5Ygv1Kj4SRwN9xFDCjJEqutNk3DnCo1TekF6qyZ6g4aS",
  "key10": "kQk4Aw3qoMoJbZWRN9yNWVvdut6MA5fTzX1RQTacmkzt2HjALFxyXcfcMvqDDkLXhKHRNtG5F89XXqaKEupLMeS",
  "key11": "3mdgYVX4b7y7CTejPEwmErh7xrbjT56kgjUJsMYSijxkPLiRLQAjLHGcKhtZGyEuhuJDY2Kp51bPz5nyd9CVHdL3",
  "key12": "K94gRyadhWu4Exk3wMBtm39hUCjfZyxMYX8PGpdHZsKpd67z5FaBokqRvC3tGrPAYzMGgeph5Yam1Mr8wiAKgCM",
  "key13": "5MRgNh5Ho6Rf1bNf7NbrNhfkaB2EdnNshAyeCAE8rWb9gY1BVVjEEs1amQMSbM9fqSRzBnh1iW9LdfgvSCodjk4X",
  "key14": "5Ed3jXDbokJ7GyEnwLD5CsUfri9d5WGgboS42h5FqUB1Jsc5yoHJH7XmmhmurQ8dhY8VBA7wZSBPpqEsmDqqGPCr",
  "key15": "332Fzapo59WFCi3x1nMzQDSbfbPSHkMF3qDX1EnK2S9KoeigJBatsP7M3PashJuQ3sRFB9MJSpVPoKuLJJ55Kirk",
  "key16": "3neJq9xXE5ocXf3zhWNACmduFbJEQbfxMzUetxR4sVrM3mx5n5tYdEDQuzHVD2Cw2uJcgpb3t66BNFJVLpqtjwo7",
  "key17": "4vrTHjL8YcfonMFLmooaq8U4qGniqQMQhnZxgCTQPNranwe8PaqUTprP3x3XGcEWUjhMgJJQuJB71FCHXmZj2C3s",
  "key18": "499s3enyYpk5Jokk2K1YWwPAaGwpF2SZ92qBFPPw7db3cX4H6FBJ8X6V3Ey3Z44cgLB6kSYTz3T71ZjmifPDGAV3",
  "key19": "Q4XBgrEEqfhMrhUTD3mDj8sMSAHpvm26L8pd5aCXdgJicT4NiXt7PkhNLtovriSQY7NX27TBEdmGGHN8iLo1J7K",
  "key20": "SnfgESDX1Yx48KXpqgXsghp5J5ZJpVRYQBLRzUWSXRK9xJaboCFUndVCiCUfWh9CMtEffVDDBRMtpQ9c4M8AzSp",
  "key21": "3rzBMLmfd5uUtyJuM67KpNjt6vyDedJncJAjkhj7QSbdHj2aaJ1Y8BY5p8zoicvWfCHx8pdgW3yUsJU3Vqo5DyHa",
  "key22": "2rfLdEswZ82Uo8eSN1uNX5CR4qPFXQnuCjcq8M9NkcsJ9r7RRgQu3BuesEzbUjrzhbXjUeU5wVkCi8SemQfeW8hA",
  "key23": "3zZqFa9TcAP3xwsEAtyhxZrfFBmTgkDtnGAAziBrGu8YZUTmeX7fRWNuwNcqn4rEzEc3zmr9mRSG4Jm5Q4XGKdpC",
  "key24": "cvGTmkeXoXD3XYCXDLkByZTbacfdn6tzMVUbjdJenz5KPfBVHnY7J1eWTvbT2g52o8jsv2pYjhc7Bas8seQC9z2",
  "key25": "5nXqCPHjM1RpXhN7xiJKNrXK4JD3NA5ARWbnY8UDsQz6SyDnNt9Pg5VagZSo9LGGwjg6yKEXm4nAR4a4Jdy1FLMz",
  "key26": "5bBMXcJXNMUiqtStTt4aC6pNecW66iXCgwgKxsjYVYVjFkpje1c1Kr2WsKiHfKMChkAiLBDz9AwFFFT7FLHoArHV",
  "key27": "aqjQ2zdL76njzKRaWDSSNvreH9qVohAAJAuQaSPapfY887ku8Qamtt9h5cDFcTry1acf3ahKG2F1PEqPCwb5gYN",
  "key28": "ExbtfsA3zzBUaR1dBBN3Rq1cigrvLv1g9V19pb6MNX7GCV7JRmCdC8uyLkZ38eDo8Fy6d57gfsCzGDUwgc6FVhz",
  "key29": "3L7rhMx6chN2QNdZyg3Pp3kq7v2P67jZf3HY2vJYroLZwkWcBYXj4aKH1oY3UATgbfNr2TzQY7s1CeTUa8EASrgz",
  "key30": "2bTqxCvSKUiREsbscQnZyvquJxa4B1SwrsQcuTdXKaBJzXRHcXZTv4urP68Uvbktnhfes8xCXZP24AgtdWmSysTM",
  "key31": "mtfdW3Pi6ohkFcv8HFTETujJ87uCv77VSN1rzgr4EqjHDEErjCcRxP2fLqRcmpZ1frjycJ3a56JrvmpkippjxXp",
  "key32": "5VaJkXt27eEmSszEmB9EeaCjUxbUBXmqo5hk6ui4npzXWJZt66vswbnWpK5rxECp3YteTdkYdTbLNjtkHRNaXK8r",
  "key33": "Emi2FwZjzvuWm44nBtMCUySfoW4oJydocFHkAaprL61Erb42WU1gjAcHF7mvhovbqemi8gyC5hCJdhLtESnGYiB",
  "key34": "3vmGiznE8toi5QgQRizdckEx9Yu2dA5hPZbWj377pYE2h7zEz2M8B5k3bMuACxYZw9wcoNgFHuDTuL7MMBGajQkZ",
  "key35": "33rY34yp7XxwhD52LLZEKLfqoXuoQWj1LS9DbL9CJcTAGoKr77siuU19xB5G9MdT2YnKe7TB2sUQu5qQQw8t92U9",
  "key36": "42hAdzEqYrQr3aJM84d1FVSHMqpq2TSxSFeGD8oXPAaFvrZdqDwsyjdAwoZPzYk8NMGHdmD7mctJkyVuX1Cgy5cg",
  "key37": "4D9eCsnV9CU4MiNY4MGzE52R8GUTTBi3AugTzrZQNYbCH4vm9HuXkeYNoBKKEsTApJuck6qnknbH2GG7b63xNNze",
  "key38": "4R9VSzF9KTnKSyr8Sfa5U4W5zF3YdTc1gKM6esuezpQ5VnUD4tFSki2eaM5TViAMwvbZuRk5H5S67FuBg7i4VMp"
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
