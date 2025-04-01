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
    "2q5Qzjq2ZT38365h5coATQdeBhzZSyj4y1R8J2sg5Boxz2tJP4k3eyXCPvCuFgq6cAH2SQn5QrC5Z4SKvBEZwW4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ap8pxSPYBR8F5QgcbBvLJpAc8WY7oNBfuci2Gk4qgEhhETNfUA8QoT3NbapxoEe1YAGRsckGXMSWCyeUAx8onrP",
  "key1": "49YUBpn3aAWzLmTHUL2dH1hhPN9CEM1wt5ezSGZFe5Vs6KjEBWfvDDjyjwQ5kREQVA9UYSE3HSJQEqy53ab68FC3",
  "key2": "5sftsLVADK8cqhvX8J6hvMnK5TyRpX5jseo1PpsCYAeaQQkwY8JNcrzb1CRAAjSfrZB93rwiWYFLQuA9sLMJm8L1",
  "key3": "4Q9RqhuiLqXxYDi9DcVHL8CJYgDZhMNNqv7y8vyntXDLDHFReTCnBv3vq51Wip4Quw4emMpjy1rpSytwVt9gEx5E",
  "key4": "4V2weGV1sNYATMd9u6YUXn7k1CMDn2vFM77Jd8QVEpcPVGkgKU6iJuhxYxHNwAUPTUq1L9DHAsiwtTEoPUdKY8en",
  "key5": "3tYwbhZWhxYTXc7gRNSs1whVpaYgXZJdLjvEi72niGvCgGnwtRH2BmthTUvNgetcyjibAzf2qTe1EfK5Y3V18Fat",
  "key6": "3BjEnosnTuhuBt1vTXBunpPkm1rsW2dwNiSs9YGT5QTK5mpeUFFvN8RvpPo4Wvsu6uJMyhbN5N7v912nWLzXAAec",
  "key7": "5wZtDxX7asUSs5jw7YePQ7ymyVxLCoRRQuwo3V7C3LPywiNTAPUMagL1RszskbWhHAfcC1k9QNyt4w6DCeNBzXSk",
  "key8": "4gk3TMEuyVCjh5hnn1ostSMGVv2go69wncAEuAPDZ8KpPutdSBkrrKdLYHYrqLs22NU42V4cK3zVqQmoMR4Nygpz",
  "key9": "3Sd5T7ytkuku7UQcTpTQmZgF3vDUCqXY5qfb7nF2yWsyrjHVQMiXmSoZUF2urt1J6Qd864GJheT3CTfqRKXVwz5Z",
  "key10": "p2GBniHxwxuq2UGTMxh2mZXENqJzHapCvHsiNNz2CrtASiEfUrMyAR78UJCqEckY4RtLSziH9QuMV9ZPsnVkBgA",
  "key11": "43Zffj1iYPBBmHxuT5eid9sqoNcj24wrx6cGaXYqYY2x3karVpzsLmSPb5Bj2VzeLAmofbm6Qhswko4xXNzGDiWj",
  "key12": "4BD9NhgP1QZDesLxYg3SDKfNqhMdANaD45FsuPNX8vaMaYMKXGjymMooCwrreypCdsE2VNEz26zbVY2QrQYjgwRA",
  "key13": "4uvbjvMyUxane4NED5buFMPSmuRGaYAJWxMn71wBCfARHoCcKXcLenrwPfi29Lf6MjPAWHtAQS5qTqV1QqQsXqpG",
  "key14": "5zr6UnwGecu4iGdHqQPXBAg7EFNyW2kASg5cq1k43dKre5RrEP5HSDChwZGLujCy4RfEhTETGfMe64pHaS1VbZvC",
  "key15": "4zB6RgADgkzjqZdCG6Txe2hPBPQudHPnycSv2Ci3JxLwBwZtnFC1x8e1sWMu81HvZajwxWinXBdm6BvzqFdvB1vk",
  "key16": "477ZzCX2U3i4eGFNS97MMTR65BYKnDtrn46HUXMA9XasJkngHUZs74WKEpHpDVkm1B1RDyFTfAKZLF1BakV4MhHR",
  "key17": "5q7VdNwFt6fK5QCAiJFWLjDoBvQ2Z5oYwVmJDzQZmJwsR76EQfT5WbFPqNxcPzAva2G7HtER2kyEUDZqg2EkTX4B",
  "key18": "49juMpfcszaMehKKdL1ukELqaG1TKRYmtcgQ3MRYxnF5tfmsFcgGdyKnfmCdCUBaFW5JAYJy5RtFPTy68K1nuZyX",
  "key19": "5SPxxN6oCrbuPz18eRxPFXTQH6DSDhF8U8LWWGr7tbFstTJNrctUnjuQWy3mhHkzReVN5X9on6PfQw3fJqiVaNVB",
  "key20": "3aDD6gnsT299DJjyzisUiADUsaAGou43Gwg6aB8pTZb4WBwX1pLS7GyxeZUidurxU4aMx9bQv1964LEMSNRLbbXs",
  "key21": "57wbaYZQCzjLDqNiU85X1QTBZSt8WeSWYpr3LqE7aogVZyAwZ4AJhUAA7dRq69i3T8e9Hi8zHf2MKDoi9z1iAkZ2",
  "key22": "2CAFtw8N1VzyAXJJXVhtndEvbBa2V7i3M7vChKLfQUbykQAKu9nGeXuMJpEw2FuoQ6W3BhBXM8ZppwPV1UCSMWy5",
  "key23": "ATD6KkLYGBXvYJFSBG5yGRZy7zdJp9yCYneqxzicbc1joiu7TsMzu91AH2HMwTv5Tt5ETXh6CPNe5SL2CUugnC6",
  "key24": "3WxLmgDqiPELNPsUBLrqA5RiRjAk3KzoaWYjcNNm9V5TVJx5tkbUhFeZh9Fy8N39PaY5AdqnkQ3JcthqVMx3MbPo",
  "key25": "4VDDenfoBPWJEAhbdjURsj5qNvAe2k3zKdF1zur4rhSEyMHNVPaBWFUC7NNhMWKY1sC3EECwDusZLqQHXqy7dVML",
  "key26": "45UDZTqWLFqH2zRNbnPjuYdkxbQzZLierfaajeGD8wzJL28eCRTqprGiDwFgR6hUUZ9UYEVCPhj9vU5Wsi1xoy5",
  "key27": "2VyZ2h3Pt6xiSp8ftWhCSYQpK6EtBEJ4UoP9bxZ5PzCxj2FLJdYrFRXw4v199oW6GZmCY1PiatYPCf4JotnWqaN6",
  "key28": "43XerLw1GacsEzXatYRsJSpirv1y9Btb8nQaBAK4BZFA2cuGxtECiUwKykVR7EjLafSok51C4PEKoGMXq1jZedYA",
  "key29": "3kUYyUoAc9Yki5vHq8bGU6btTbfxb89LU2uPSUgnH7GHHccWBvoyv5C282eB4gCc6CGEjwUf1UQPGK1yaws28mPM",
  "key30": "5yXdyhkrgKg5Mq9B8MUfi5UY9abguARfDmqGZKF3yLnSYvWAowMvAk4zZqafK3PJbTpgySkkxSRdERJFcyG7s52p",
  "key31": "5mWLzxMkewdauWNPk7sttEeaQubsPoFKmbw38gvi8hFGWqpmCXoKMybJ6pk2jQy38gVMLp4t1M7L4AafwnXDCU2c",
  "key32": "61x696RyBwb9oJSYV5KRGsrJ8yKToNJq1RhDHhDoNcUYP18Kc1Kcbwqp5Vgf1TS1a6dbsamfk3zyHup9uqDuxk6Y",
  "key33": "5RocwuWRyBoUYnSN9z1ffLwukiHoQwD7PHA7RjiA5ydBNSH49VrzVbgrc1rKM6bWQZVJe69RRL9b8poHaBtrunSS",
  "key34": "qPJFy2Ls5dH2kR3cvMQ2SwMc2GyL1L97r2bxpCQ5fKTLdH3HvfE18E5UWSxGJQSZEikcdd4GkQWRXtKEj7qAoA9",
  "key35": "4R6VSH46qBcF4UnK5zkX2iCYd6yzmtvFJ7fx1rJPEetaGoyCd9TKE3r4eWf9asYscp11viTHb6FoCrQvz8nwuHx9"
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
