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
    "WzSXhaj96M72Bb6HXagAfXVXmm8z7UYd4Dnza4KoiQEYsW1FHUz9y9XBeDZE3YubptP6apGA2XHCJsAngRJct6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dYGZr4P25ZJTT4KfEWQipdXDKh4p4W12ruvBYUHAjpfXjMAwZcKAqxHw6WAdUoppP6AHzsKH2adxRWJDaX27Wa3",
  "key1": "2qcVvwoiJM2gbBvbNHFd8BsdGx2E3gAAXUVh59nKzrv6DJaMcR3zFfYgfZQ3FyLYsLHFAJuLBRQDuFUqHBpydyK5",
  "key2": "2Z54h62mUcwnSnr1A4woveV26wRw36kFUe9xYTxqYqKfDB8MQhSTvjPfwtbFF5MnEAikkKdcFdDEerTfRBPUbtGt",
  "key3": "5vxTv4ad7GVHSY8Z1KZjDehewbzv2ELxhUXY4Kh2HqwGvrp4e3k4ZMtsgDYHLoJqHprLxj2eGdmHKUSp3VN5pAVU",
  "key4": "51ZwX8rWx6eBnu7Lsj6sFPzCF4ejtB3Za3FZbP1KfnMCi4wppFfnP1NntC98uTfk2txrsp5FYBWqm1FHSmPuZLgn",
  "key5": "Cv9zdFY6t3nauHgsDV1hBqbKPDpM8vy9mMzpk6yuuZeRiMCZ2F3V5Tp3hCCGL9Ut3UCNZbUXHwZYbhwfn1tKVgj",
  "key6": "5vUg1EjPduRBp5uoyZFEFbFDpyBCbggLh7YhnUF73dW49x9LTEg9ntHHq5rmcnYUHNPFdpATQJYM5tqucFqwPEsA",
  "key7": "4aEQYvxuJkA2kNVfo6JNvy3JV73YxrGK988AJWavvLkFWHdD65rskMMp1fF74DEd434Eysmx8Bd15sdRLsqeZm15",
  "key8": "kMggzaykp762KpufKoggp7EcPGKwBwPcZoCgSt31GGNU8UiMDuzBzojfWRrb7oBuit9YWCbAgX91LdvVRu6qsXP",
  "key9": "3kQvWswXxpuPqsJ6JBC2B6T3bhe3WUnYjYroLEVUVKnzXPTE27Uirv9Unzqsq4zcTjTBGkCNMmD7Tc5mRrvT83CN",
  "key10": "49qAE5qfaMbkRRZWwNti66SxV7YEAhWxEX5uvKiNw55ZxhhqHBS7cA54B2cFkmmL5uN2Czh5NVzTMZhPuRJzeFox",
  "key11": "4t9dhGJ3dYke8VVLB5LiN3J3EpacoXzy3CKVQhr8BguKEjUWWsaymVUutDUQzmDZdStmHxr1fiA8cpW88iUnMTy4",
  "key12": "eyT5GJ6TjfK9wte4aV3ZWaChBwHhyy7W7V34sDK9wTnWZ6huD5FFJmAuxLtvMG4cCzWBSMcnGaZGUXX9Qzk1c22",
  "key13": "5HddaPAXzvdJrtBU27MPSCEhEydQomSPPYD3vHxUamj1uMKNs6J1XvkpoqfauKT9UXV4j3N7YW5FXHKcoWEFfPRF",
  "key14": "5bQCLc8qc2vpCfNHcs5jNMPus3eCneoYNSCMmRvvvt4yp4Gk3yR9evoGBbkzvoHtiAbNwxeRkpf6ZztsHhAQfkh9",
  "key15": "4NkBKxTaZfHE8mv1fKxuo6Svo8Q74QxTGTb5h8BgCFEkuJXSX4R2WQQxASMu7QVpNMgTd1giF1rvZGKYSGdodMRN",
  "key16": "5ByUcm5i5ZGybbD7Yf7CEpghZSCT9XbxX2rLFFuNQKfXTaGqKcPrnLpowRY2DpkMMX3EUQhKySo4tUWwABFuNZ5Q",
  "key17": "4QXKAReQsqYrbM3KhYNTW1UqQavuZ846EL7v966fA1zHWJAvKNEU7kgF4mpkhifQ38tgqHfAJrq4sJKDeV4JumSY",
  "key18": "VT5vjkWbrE4SLkmWvXAYuFbvzWtVNc3xPMY8SjvWuex3iYS64Dspdyzq2z7BqYhZvUw7NLzcGwnRQn5md4x4w1c",
  "key19": "3qxFdrbud3Ja1VoCsEvpPBbNvQhT3aPc9gbiH4CfjxTWPM4ukeubV5EHoWHWVCxiiEarbecnF5zKR5LuHtVAVxcA",
  "key20": "99wQ7uEdZAraqJWVV5Apf3BBY4NUbPye8F2QjcQbapmfnKtPU8cqqrmQ4zFT6hGwBZD8agJYt1xyake2HxBs9HH",
  "key21": "38z1s99oBmuMKu4qyU3Q4eMQv1VKojEKuK9ov3aWXmjtW4PPh2Acrdv3gUSsfpWDhtcEFp1aq6QvYJm2ncby25JP",
  "key22": "2jCKa8oP8KuFZejtdWRSPnUwJbASrpGKwGL84Ymg144it9GQc83ePG4F3wULvAUaUBCCgCm75Xosn6bzcfBo14C4",
  "key23": "p34SJKcuuwdNWdPDXVVypqnFgYkktmfMpD6zhNAdowP27nDycYL1kcRAth9jXTwVo4ohX8iodT4Vua6GVap2Pbk",
  "key24": "24Nuug19Lzti2rmc5Rt27pSccz4GjNhAg13WhiJQ4bbExoX3ZViX5i1DtBH9yBPtHEaW7UHdN3UWTr2eyJEoPpUS"
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
