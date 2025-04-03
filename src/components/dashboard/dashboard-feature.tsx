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
    "4v5fDNsHdUaBcN3JSZPDnGqJzgPaaUMeysfWpFsvBuW5nPWhNVtDK21Bib728txaXvZdPnK642zysVBW6aaDVp41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PagsLSrxMXWHoF91GsfD2AEtgZ74LiS9sDFBy3AK9EMtNREjKgqgCsLZfnYF6LpYSUc3VnkPWCYnqbG981qAdhY",
  "key1": "5aLMLsvEzMzJfbhSkCXMLRztvrqVwNrePsPNqC9Kv5nhDgW6r98eRuUjxUbRHrLVuR6EKe6NiaDschJgQUJapCky",
  "key2": "5Ri4ykEFYeGcgR1djpg1v4awgmoFkhmuJ75VpZhZCNR5BJJP8VV9CTy7rLeenpToQdPxcB3ccPAeedr3UiDfxT3L",
  "key3": "4Uderb9t8zDAryRnSXh49xrHfSU16YrfLZRJqkx46iDWAkaZHYRFaZztd9RjmRrvTxSHmYesa27g6ZfyzKGfWpAY",
  "key4": "54jKq8BubFWbwnESeE7JnwaBskG7zHMyCBsMjUHhDFaP6BMX69Pt1Em9PYxsTFfoBwYMpu8R86CZGeuqfXY67jy2",
  "key5": "4iwAs6RmQWGSxc3bX7ChWFqRijwMh2fN444LoaHx6rTvvQWmUfZt8y1CyyejLmAcL7buZEHTzbDYvCLHJ3zL78Jd",
  "key6": "46Ewq93Ny13WH7LNsMUY4rxW7TVT2erGR4U1YYjoYHNevDEg4eAUwSb84tsf4kppYovrsipqJB6mujEMBy575jEX",
  "key7": "5T1xPje3SixZy1mfTmp7Vkki2MNF968hiZtxVrQFBRJaFfapPafkxN5aZ7GEb6pxTEFZTB6TtTXY3k8LJ1GXzc1K",
  "key8": "39QXsctyvvidVQhBn2cJjnjMV26sZKCrtQx1NwgDszx2ZN2DevE2DhRiWgTGcNahmCpERLusQTKoJbD3xnEu88oJ",
  "key9": "1hhEQzzZUN1xXNVvmJ4hQx7JGgN5tpZeiBTTN7RAueTQYEF6jJKhKN3hQ5pZKiTRsvBPhYdp9U24v1xvzPP475s",
  "key10": "4gADHck5MQAtQDZZXz7suLbSzRB7L1yELuu5FxWWM8taegMPCcpd8EknfSpkMs28ezvrGW82Xw1pssJtkRKVdiyv",
  "key11": "5raixVeNewqsN5iqg8qtGNY5jfx1mTd69m2YaXxYTmYaUmVdeZnuqjAtpmeXCbC3eLLe6mBW2WRsnGvot8nF5JwS",
  "key12": "ML5GLvpag4L57hRDPxuUvwSTAe74DCM8u5MsA9r2WRC4eX5BrMTk798LLkTCkCiMGqtLviELfWS7vE2mHJ3VRgB",
  "key13": "X8gxgjzvVXAtJMhhBsGjwx6PsayYhTEApMjxeEHXLSDE11vhnwXGwQSo6Nrm7vBLckUXNFr8h5BBmTpsriwV3HF",
  "key14": "4DUg62qERpWRyiWXbrSRhjBULAqdCKRWQorKubBfFyEspPvzqZvbx1dne7k7d7yb368KYTxY1iga6v4cbzoZUoWK",
  "key15": "2PQ91Qouggy7pG71Aji8u6ynxEEHZXVEhcnJYnSSMdMuCXyDqV65dndPHo12gTYvMM4AFK85LGg1cvAKM2mVMmjm",
  "key16": "42isK1tApishbYtCJ1jKwDv92bMhbPRg8dN9b83rnYnXrKwQWig8Fp5X47nqbtp9j9L4HJzKvUCUtvHRREBsrGzV",
  "key17": "Ax1TNGi1Hnu1ox5e3UePj4eeh8oQDwcXbYMkE4bUoa8rxywa9RwUu1pKou9CHZR78b7pmS3ahv3k3xJ2KqiG6Wz",
  "key18": "26LpkTmT2SEFbyVjFWTu1a23nzmbs7NYaWdiEH8fCUWWqszxqAK6P99VWoqeR1rx5tu4SHy2wwD8jBnU4VnSA6S6",
  "key19": "4wGH6LGpy19jRq3hhBWxTWMsZY2M9yLpePkAVaTCLJrn9Fub8viw6QT12cAPcrnSuSoKdmwKVLdjwHpqj6ydySra",
  "key20": "2ZYUKmQ66Bm9q7bWJc7kh9MfztnwT9Pnn2QsRo28dZ6ZyNzs9BQ5KT9Yn7WdewiQjzK9LSw9doHu3cE2NmhNWTQh",
  "key21": "2kgskt7rF7AhRc9tAUL2nTvg5o6k6EFYVgMdwUFBejTGzxBtRYUNzLsf4BwJQs7DQNMeafFwhY25NmHHbzq2UP1g",
  "key22": "46S7cZfbVrCoJN71emVGpUw1qyr5GnroP8RuEiCd6ujgbYJCrpjkkRarYnGXAGS5RzQmR8KJkfcsq6Qc66H3E5y5",
  "key23": "2xfq5io6K9ffKgmWBvvLuYro2CbUvKtp8iNCDdgzqc6ziEGuuLG8AS61xVsYwdShdMUibizgTo8Binmkc8JDevXx",
  "key24": "AbiEjdpfjvMeLopDFeCQaA2kLHeVEUwePB62NzoiPArWk5AacNLvaZYfLaChAVL6EzeCVSAoQQbLJ9xydCevJDJ",
  "key25": "2Bcv4ajD1q3Ldon7aixFN6oLjrcnuK55yBkWAHqoK1xGeUpuuepj7VXPE1A7SouZiMzkw5fC4iPzLbutoBaiPMj4",
  "key26": "2RUn6LfWEFdDrrzUG71Es1hZc51LPdNkb93jD4QsH4ZY9T2cZY81mZTmMPAgEhEyxGP5AGoLND7PWsgrG2isPnDx",
  "key27": "TdvvJ2paAR94cteTaip1r2wZ5151HAjwXpkb5wmuq2vFJJS1Q6YWGjXyAnBFCR9iz2aJLUAhFkwvnBk8ypTuHuj",
  "key28": "5C66ifNmh2y4o4y5moGjYuVewvWm61n7y6ewwqfEye2tDfdE4tEN2wp9L6BgVxFNoGWoikvGbGRFVwv8YqCLe6J4",
  "key29": "2gmYKd5ZpR7iZjnKvXg2Fi4ZJBanWfwCJVRHYFRT5Lg7NS9xbnY8enpxoB6Caf88kPdJfr8uLfzeoE7G8rK9HTFw",
  "key30": "5sRF34u6bjdZx7chvjuwizVuog4TLW6VxEwKQNDMWJyLi8frQmemfi3vqE6a3iqokQh8r9ut9oYfdKVHEurvQw3d",
  "key31": "p7z1n14cCGkQvhtwJfEBJcVRGCjeDqjhoZcVeATpcwwQLkSLFjMFTzALCrFWKr6gkzvyg4WxU1uVmuGnJzo7Vcd",
  "key32": "2rKoAnLBi1Wn6aqdg4FfTrYVxWtcazNXyZoghdwmmtDN4koxNLJuYmLtuEEdetBR4dPDhqGG2Nn4xug8EVLgsmTv",
  "key33": "Jwwvdgzq3HppCLrGPowYkrXTZCduPkvp2S3dGhEeJMh5wifqFLJjEscL2fabZG5q3bgNsB1qdZ1LhXGzscZPFH8",
  "key34": "3vkT3hWoxWRXV38iLhSs6Du3TwznuLz1H4CxuQyFwkbWpCArQZAszdVPDDCajAbvvhv7Qiuz9A7NNBzbdXYz8Pyu",
  "key35": "2JVu5xxHPMGzbcHLbiFLtZfbWgZCpABs8cRY1Xbr8mQmJUZfCd4yWz66nSn8NJMjGVqp1eS8sye4B81kuMdCmwF7",
  "key36": "35DxwHgMZz7AJdei5ECWGgyiZ2o9FMKYoUWSJLxhgGeA6JaxwXrAgQZXQwyviV3edTLxPrsYMkyzwgRsugt6XmjM",
  "key37": "D3JnntdGtc8cZ7kqcduiQsjb9HUBQif1SgA58C5muKfxvR9EQoJcjM57o3nzZhm3Q4A2JPfMcmichcseL7ngePe",
  "key38": "3obtkQXeua3cqHuTfLNfch7ggmidzLHDsnzrgir825o2bs9wUTQBXMfL4D1u7gRLJfLT52XZ25zarcWrLRrnzbW",
  "key39": "shjjWmTAiy8dCk4fMe3fnPHYKLkg2MbmUnTjxbS16RxYVJ5QWjQUMuvXSgjrh28tAo6qLgD8UvgkypojwuQM2Po",
  "key40": "PsttT7sLQc11q7wWabs6qk3ofq3weKEsTyPcfAgtCkyBd8GUvuVJtFzpnHTm4NFpnfruHrwX8NcagsLVKfZ9F4d"
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
