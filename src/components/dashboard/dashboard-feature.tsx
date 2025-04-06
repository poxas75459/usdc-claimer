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
    "4zH6a3eVXqWUC3RqhXbhsakTEKQs9Wd7eckUrv7VzhHRUtpc6smY1U5jFUf9pqa7BEt4UxskFEnDWFSFMthY2asT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmX6PHTizriWpKUsihMBJqFYmPiHBRdrjgCBMMsFm5B5DN3psPs9FESDQAUX545c3cJ5pLPER7ZMh8TU6Fizpvj",
  "key1": "5xC54kuCqkhmEJ9mJxYKbyuX7GMNGV8tgj734VaWXqFNv8B9YfCwxk7Nt2khZyoW1prCr3k3jcNswkybWKWytXoR",
  "key2": "4Qzio8g7DgPFb9PRrmWyBWVE9yx8gA3BqiTwMKivZ7iayYw9RqkJgVYSYUetYspZFCTeTtDSpJAo6HKR1JGQLhgT",
  "key3": "4KxSvWRVLLQxGCVPxQHibwfYz17wjhzMxdeoqmyGyiwDqLznus6mD3yTWvnwa6zRgkPHBmpuUCDFLWVEEGRsYeAb",
  "key4": "4FX8mNaMTpdas5DS74ZJcU7q9S8ryERM2SaF34EqPiRU9eAcVkrtVwuuFpSkm8XuGoSmWnHvm9CrwkSFBe6cMEmu",
  "key5": "3NbSs18ug9U2Z63qBfFuBbTRGNReiNsT5LfHMp2MEa7EB8v6FsSwQiKzfdk8pj3NZLCXKTU9oJFMT7Jk3ge1PR5F",
  "key6": "37EXj9XqB2v5qkTCsdN1wqpazhwzQTyh1CWKaWxJD1DqEwZgAzQbCwHAJt4GAdMXo8YwsmDRX8AXEho1wVyLqtY9",
  "key7": "3icj12WZnejg39Mt5MCTU47QRUgyW1qVC83D7njJXUKVEdgxjPs3gW1wajPCRNWcAmnEwbPRW9oYzYMH2WMwwXys",
  "key8": "31cuPCwdNrXNHPiXjkS2XzAPF6PxAuuWVyuZUrec75msk9Nsyxu9spEyCgoothrEHNzHUYfAnRFivaNALGzN3C1J",
  "key9": "5qy1LUpxsFvbVKwYwQKDyUcRVPU24vYmHsSmvxwKjEvct8tw372tKBeZkUw4ZHMXkjDbz9nnyKw3E2yJoooaJacn",
  "key10": "2GzeNwmpmgWGwjvR9h2ZVsu7sfKzE1n2r5nLEQDhkJiJP1mzSbc13zQDuTKVGQKqnRQNVhXfD61ySQemb2nZb3NR",
  "key11": "WLm5m3fyzpHPsdR6WpLTXKvye5Nm5tw5My3KiHFsECJMyYeN5b7FB7C6eUsujSFLCm8MbbEHV7SQ6ypxCSCf5sw",
  "key12": "QeQWm17wdzjKd1QsBXxBVsjbUMzLbrdJjmodCovTw7FSHia9NUQz9afMoq6mtntos7pAbsbJyUXpzj9rTiLCdob",
  "key13": "4PrRkXFzgDrGz4X1HcK57M5TAqf1XiDPd2D8Eaw1CVaiaQBHuZAT5ycjTWfzjpbn6HmRCs1Gyh4tNAaooRiQHVhG",
  "key14": "412ohFzDMP3cDRYfkUF2DdeoCiWwHDUoCnVTwAu1NG6rmHZLCNgkeNFpqraXRgkhoYx4SxABnypZbQ5HBfuMnTZM",
  "key15": "3Z5gSKUk54DVZJNv3T4qLgcNraY7HzwCsLUEpzokw1DtbHRQd5dWGh991AbTEsV8cPiFj7J5dWLZ9i58sWB7hZFy",
  "key16": "jCGVZUCrTaPA4qFGt5HYmQ3adNGRY91yQP1UuB8G9iT54gEaZ83hGZkj1hwEs25TorC9XUYBH57s3KDzFW4C18t",
  "key17": "4BajgNH7DRh91ij95aTzzGCY1sRdv9grhz4K2XvgGDR1NuyYgq1LfJLEQqFgMn2jGzgitn2pGidPfp6iqbHwnJuU",
  "key18": "8KLVx943M2cNzcHgnhs4jjdGnv5J8efuTZJ3aDLSDRtnW94MRicmWBVu5JNvoksRyv14JXRUdRGZTL848sSrzBU",
  "key19": "3SAzV8kMrycNbgrL6PeeJMLuFLzYf7cxrbVdr6ghi6UTdgJ93rppeRSGJeYfsrbWMr45hx78SsmPDMydhgXqKztf",
  "key20": "3bcYokBczr8eAxhBp8aZU1yUVju5ZPFGddvPu4jCixzeRBnhjY6Jenj5AxVpoRdJRwA6vegcg2whQwp16ACpP4M",
  "key21": "5sCFQFjvh8edEWgWSHdbP2QCz9g2vHRzSyUomPKJ2Z6PGLK8RfzgcdrNes2t93i35jCPGNSPDzrFx4xZPkPGBxQc",
  "key22": "5Wudi7z7ZE8oD46rhE8Gk63YCg2GZ8FPGTapAjvt3aMofRmBSNDG62vra9q8SCthX23hN37aadjbkG92bXgQkkyg",
  "key23": "3vN7NyPA7ysC3bLYCh7vjGEtXL4R8nhgdf3P46dNXCzz13ZHtH6FGR7JukFZzAPRXXYgfkbnkVWha9th6YipwMfz",
  "key24": "2SWrWhSVc1SXycBLqdyvR4EQqKT84BLZgysgHiMf7iTNnVVYHoGijrgA5exrN2oFABrgp7avx8rpUyyQgnL3i6Kt",
  "key25": "Noxy1YofZ3VYrBdoFpMJ5jRsfU3S8qociS597Uvwx5nnx18oGUFRr1yKQji3bbYtLHVHTss6A95AtdijahFKK4f",
  "key26": "64dgbMxbRytcnoBxMJMf9N3nAVxnj9RnivqQAvGALvCZLu6Qx1XJDRstWa4pgEKszJKw7x3Egc6dpwx1NYu5vbvS",
  "key27": "3KfkXCLSp9QLnR3TN6zJuabp2qZqTFxuUwjbuvq91tNuVneGL14zFChSEoowN8Rt2oheFxuaKSu3aGmPtRVbCon7",
  "key28": "4djpoAwptFRHwYhsiG1e7TAf617iLtt6GjuxYN6GaRr8xSJvsrdkboPziUnmzRiRdUXfpqTGZScUqt4FvFV2iy96",
  "key29": "4teQFhfpztBFNqDYu5vnWTuCHrVmEuEAR7kUSoJHs3fMAnwu6rsdhapbBkVtUaSwqrsWE8BKuCrwTzEezJ8bu86c",
  "key30": "2hcQegzF2nJ2jXsrPv2qjHqP7xyzdNMQnEsPLa9AT1A9TCn1baP39u8xiNVvNysub6vwgpMfvRp1nffLezLpQp21",
  "key31": "3QVHMkjSzVUbK7nNYKZqYmH4KhoP7iiKdFSzWxXpjDevhXLNHabG8afg2PquLpczbZbzzij7xzkQHBgR6mhGsHFo",
  "key32": "3JTjTomkV5qoJQarpPmhxwuHtLkCn3GfeBGGRw5idGpPfoWcnnwu2nKjq6uYomDPGUtbseT5chwBmT9a7w4pSVM1",
  "key33": "67Z5gQvAxFG5G8aLUKAbCc4grJnedC3XJy2D6upU9oyMCmt9w2MWwU9rtbLJW8P9oskMdbpNhb8a1kw2V3PKzDs6",
  "key34": "46kGEExF3EUJqwoyCkhDpC8RQoZMKjae965KMyQ9Teood1v5zgDzBKYK4ybHHAXwzS4e76QFiGjKNPXkKUXz42vG",
  "key35": "5QQksJzgq3Bu96USGN4LtvKptx7bosgKwjWjm4Hq8FPxBxUU28kS6Bx4VKb6Nfn9B6CJrZ9sK5jLqtBU2gqyG3Dp",
  "key36": "5siKBDTd5EnaLrGtDFwRXLovTxUuxWvm8hUHydjz5ySdwGkAViGBJsGPDodX81nwVpj62b3GipLRq7TFUd5DecUa",
  "key37": "oM9cMWtuTcbtTKxLH7Q3sP2johsRKjJVf3HEu1BDvMMb9G63NLtNXqAQBxdMEYvqEBw3niQDkyRrBQjmRybiN8N",
  "key38": "5UGQzrhLur2pEG4S6mzuREiSNvZvkdpQDpAZTGKnqX971NYsfhmNGJhqoKC3N8Wa68eQwiN1FayX2kPwgDrErkVJ",
  "key39": "4bXKA7KakxmoxYpiQDkTyqb4wsdoqEQvfjbyJ44NruJQsRKEtgswBzvyMgch7MXtA6mV1We442Ldvaq6vgJWZcSw",
  "key40": "4yuWfRJS1r73o78QF6fNqiFXxpMk3Yx9jUYNC7E9KBr7CArNNPzhGZSEpnFqSZgKLw9qRKEXJo8C2rAwXbAv3qcs",
  "key41": "NiToHt27AekyBjqoNhUGe4pvudvCbMEuAV1sfcUM43B1uaN9fUHg2HPtXM76Z7BinRj9SzNxQNJXJwNkoRQ3en3",
  "key42": "3JbsMJrh7DJf7LYyDkVuMwdMe15Tg4xxKgUt8bRymctHWHcBJRTUWWJY1WN493DuEur21vcR8qKo8LWQ39WNSqeX",
  "key43": "4GxuBsegpNBLz2EnxKBE2QcNBkZwMPDXnPFBdRCovhi8LrerePZ79xZRUEqNbh21RFHoRoYuW2B9ccamGCNzqpJr",
  "key44": "3K2vUZtSLxx7g8m3Vx2GMngF4woN9EKMsxcTZ24Zpgms99hfjLm3rzU3eYwCDSQSu8aQiTbBF7vUt6CUrvqwQb54",
  "key45": "34W12VbcE2wosrkxyQDnwBRd8rYpKG1rMYAwjUwdWoxzov2L3QvkBbVB1aayPMdknQyTJHQCFjvi6wbQgLM2cFHK"
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
