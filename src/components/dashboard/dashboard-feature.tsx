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
    "4V3sSXPBY2aovyTjbUtwfU9D4EYYibhS7VXbpzZLb5R7tDiEC5AwAJHDXfrTFc5ozS3dkMSVobDtvSGbu8nCEqzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MwipFCKDx2CZ9tgay6C7tEKaEcVewDgVZEbe5U3ZJi8kmK9fLzd8fJ1NNyXohhUWr7SKN8cHM9aWfsgXFxPSVEK",
  "key1": "34NuXL83FTEBbgF4SkZJCCALWRSUZzKXrAqqYpMB971DVYCvwpmWtW2zfEJJZEHjd9K61bQWouXZFeSPk7Fbqbju",
  "key2": "5R4N1JccgenGYXkES2kTmnktahcmaksLv9cNMu3frWD2mTXeG8U1ktqjdvj3iu45GZ2SyjjNekhTnMCVNMZJKt9C",
  "key3": "3QPW7Q85xMMXU99CCYQuHmTvpooWQTkv9icJeFr3PRK7SibpZFqVfPgjnkabw2mt5BGjd7zjZkCHjwjBcAPi25RH",
  "key4": "4FPFvEUnag125BDuNwWptHsHygAB7EGFPgUqbezCzrnXjcusKHAgXQmCNS7BHKD8HtYZuCGwQHEGv1XC68rFmgWT",
  "key5": "2ehL4YJtJMqA2eKjeVz1Wk7sr9gkEP9QN5M2F6szvShRaYzf248RDsK3FtZ39qPHUwdQsy4CCQxS665ZCE9CKAry",
  "key6": "AbTQZRmMkMTuJZGL5MHFnnGcQPUfnUMse4HQFeiyKQk3oc5ENGtYN74tksGMPyGSozuDPHUy4886X5UgV7YekNP",
  "key7": "3nJdXPdXsGYerUKXkK5gHw7Aj3WN62BDYi5F9ErcndxoUhHM26uFW9s8ME2DLCDxhgt8oMbrGvnnAQZwFAFpmBhz",
  "key8": "2Er94e2u83sdL3yvUTug288v6qnxAbnDUoS2993tcrhvBmV1r3jBG6Fb3sqteERySApS3bAxJwgw3L5tBTYM8kBD",
  "key9": "pjSdbtrxBec36d9CAWo2eLXWRzGy4qrdBf6SnDUgYVMbB7E7QfQFZh56vvrbzBvuVfyg2TmgWk277fMF82k2QDT",
  "key10": "4nBkmHJZvvin2wUz6sE2cFMqe9m2Jvy2xNCaSqpiq5b6s8GdALVe8yKCBYTBxBdCJpeckU21TP1dfmjDjgGBCgxf",
  "key11": "XQkg2zJpe985xX68BF5477C9nKhmxx5JXqBPY532PzrwQrtekAfF6hUrZ2kXGyFbwDZkzmPfib5DT5tcGWTkGsH",
  "key12": "4rVceZoZMk1HBU3RbMTYebQdzBQ1y47HWwbt8tSqtYnoTmfC88UmzRy42PnpNic3SKFLusF82w2ibx8fVtvFQdu1",
  "key13": "3KPYFFvcuer1wCC2jTQhtc2isNsQB5spgtoQ17jvKi21DFtPo7zR4DJFHhxV6juB1cFQEgMuWJ7VwszFR1bbrjZx",
  "key14": "3Zd1DtGM1Rp349ZSmpXhkmbYS4SVae1Xw9HjdMKmKoHYVqVTmDKvPRPNhtqtVm6Vyjmp33TTiXwmugn2YTGNjKF6",
  "key15": "uHiSjoXP7Ao69ZVRbaz2wnFCE734NjYEgvgbYZRXjgRdTrrKvBg8x53nSbG5JEKf4YMUs66ufi7tX9i49H3i3eR",
  "key16": "5J1ygLEDayeRQiXdDzvLZr6EezfLUtM7FeH5qh1xPFUncbVAsoC4s6nfbZXEJ9epuNguXVLQ9k3kJZUacsye5v1Z",
  "key17": "44JwwtfrAbeAzJrmfiTp9VvwgwNRbX3MhrGEvjb1XYUfQ1heduaVMcMkZrJeevRtFwNtA6f6QqZhYM8UWRTfZKTx",
  "key18": "61boLRJMQBc2z5uXWQLsnmeRFbdQbxA71qwZ8FTe7RFakB6v6Yomp2eQgd3EP5s62L4Ktrjw4zw9GLV5fZkoEPjA",
  "key19": "2j1a9fJo9GycRswYRtVRNfXvpsUGN8Y57pmHeRQADu9mkB1GjbwXUT47WJb79SFFCfLTyiAWK28e1EQAnYdU2Um1",
  "key20": "Fydrps6XJa7vWooWgvEFkAxDifsCx2EZEeEkYBWQy6WehdEwxK6Q3b3y6AWNhLXUyHqT6UsNVxgq5MjYy6XzSrP",
  "key21": "4zwuwNQjhyPvAQSMi5HnCNCxL5Ba1r6sKHKHspNEHt3TbpuAWdn5fzFFb5HFzVtuTTTFWei5VpV4UXuZVtWkuVEC",
  "key22": "2m6ficgAXSXdMtfyyco5oNNXzLCtRphGFXaEDPajKAVH15hKSnvzMjdYoGQ1eouU7wAD6smgRtmQf4wkwYbrHVYi",
  "key23": "2zPqUAk9LySPLhdC2br5viPXUKXPYJ4DrFhktG2tuRRApLMsmS2NfYACZ5GzUAtgVN9Kd49XtX2k4B7nWxLP6X34",
  "key24": "62ZeSUQaxGtdZw7K92xiZ1DykMvwf8h5Czw2S2SntxeWzhUKxrLUfGfXSfqMYCkuNhyyenZHKY3BHwAV9PmE9ZCJ",
  "key25": "5ww6LnzUwGqrHCANiBzThTw8sv5cboXoSm4az1c3cQ9FZayxC8spxbr7HPSZLPQ7zr75UPo6JnA36Y7KDk8sMVSY",
  "key26": "5HXYTC6Wj6PHd1CVQFUHd5k1zTXoGBWrpxX93R5k8VSv2cim6Cv8DCH4yRjUHg24evxHdcxouKQeFsRPj9XNhVdM",
  "key27": "4v34rvc6a3B8UstBcLrfGDB99Bv6dVg8FXXrRA62mvGBz5yNyvfWkB7fGcVKWJ73stbc4onL5RS9ghvapuubmHtB",
  "key28": "2HR8fgea173fbR7dD9YbFiotfdQVXM2LeFmDnfsQzYgGxGEuinrTEbPwrvevCqdMgJoyiBZ7TAdroz2rRpyCGKK1",
  "key29": "rbR95FWQtKbJ26Px33LdydC1MX113GCcacxNwpR456AwkHPBWCAkmnjoVWg9GtWtSFaNkHbhx71qZa3EMEvBnNV",
  "key30": "4e1JLaAG7uPn2rUiFdJVYuVFWyWNbUNuufWagEFRYZd6pbhSniQhtxQ9gd3RW8N9r4g4Z1KLuFFn6T7WyhGrVkJN",
  "key31": "5y3fxUDXi94JBgofW1wFi8A99QaP9nXHqrnP367wTpQDCdwwcCotH7gyDm9YpP7GBZN7JBFiAeGYmHjK7isYoanV",
  "key32": "5hdrAAPoUXfJnyLGFULiXvtMX5hQqKFLnKmRF9EHbs9CcySmWVKX2CDfoEhzji4XtpLkAXndLBs7HDfbckHT2ggP",
  "key33": "5hQ2A8JQAiHpCM44pxb1iu78zDYkbLtuL9bWskJfkuPJUeyxEmPBSBsuVDkCTU24tr3KfvBKpxt2BPHiEXoggwPP",
  "key34": "2eGbMaHiAnQJrao319t5D2p8qeUy77Cvg12rMVwTB5U6qWzW7k2TiYWPSsg9dG8wEB9ttEBYpF2tYZAwtFJtoD96",
  "key35": "5VCgafKc7gA1Fz12xZXspxDThZoSv4aYo7LiAJXNkjAswArhGdzVa5eTybiTSZAjkXHF3PAEZ6fNwxAsrPxVezy2",
  "key36": "3RbCUpcCCiw8EiCtVdJGbL71TBpREqEYQN7tKCuY6hxL1Yj8Yge7C5v1fjNjFtwWnX6A2YyQurmv9tZJ579bij9o"
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
