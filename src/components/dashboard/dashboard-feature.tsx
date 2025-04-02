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
    "WXdVY5iVseZK4utKfdKgDYj8ZEotV4GE8GDKgCqSuN39KvY7j7ZUFCZv6LA22vprgn4co8jqwzhNwhbHtqPBe7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QS1cQ8qz7ksuM1ezMLa9tgEe5eMS6qcwQbtPfxmFdy3ebdo6Paq3jSyL9GmTnPCgyR6X5BtNELLg92aTxuB6Ddp",
  "key1": "jRnybjHNXH2RVhxGmbWmTSTMT8tJcb4hUccuBvcoFCbGRfBpbvjgBCc1in1oi5hiPRJL6TLLwLVvEjUZkjGEDs5",
  "key2": "bE9kNyCa39BqNPwExT3NE4VrtQbCnrKnGrbSg8faL1pSyPz8Hw9GG2E5rbECVuCm1695aAqe7nmkGsV9oFRqSis",
  "key3": "4tcWwY94643xDpykoCZusVPAtm7Gxqiqd8PtnfkKxEiLGunCYiuSPXu6g5XWospA5B9d4hQa1AHF5ExrY29irDsb",
  "key4": "36Bip91RVtgpTpQXDk43UpPwacM5p2p2fRWX2QniScSkCkqf37xCZFLtbgNrNyxafhJ3rbV56GoNJZarFBRzNQhg",
  "key5": "5zkWvQobgs8UwuFAtpSBiYhJEhdaKxaboqmkp8MTC5NDjXeB2wYiFRLGy6q4aPYXN3hKRftwC8A3hmF8yA4Yn3hc",
  "key6": "4gzoXNWi2spDeq4T14crkXpzs9QrM2oHtydL8niLbbeBCbrZZ9XEpDQvhNY8itw7oUUK3Upy2tCvD5TxkyuHD1CM",
  "key7": "5RnrAcqf7SG46aeKL2ohYQuoWmh41FYpnFMdteYPBfkgVfVKr6Dt3YD4th5iNDeRdrDqDvFjo8qjYzVcnp8V2nyf",
  "key8": "51ym4ppPqvt7FWkhJfske3ndaqi3YP3Ey9vjg37tmzrKtSqdSai9f34kMzRBtsMfkwxMtUCbLy5YEt11xqHDp3R2",
  "key9": "4VTGvFw1gKZga1yifXXwZJzfiVeLADK5Ww7NV3Nv15hWeHZ97qHhYj2JSAwj3uiB5YMHjfWCataXdGtC2RMf4n2Y",
  "key10": "4BhCG5v8rHopbv1LocG4qpYM56bw73AmDnGoUg1erPjM8VfEGnGFiaLewHirzNqb9U5szHen6wEnKrrb6uFsgAmg",
  "key11": "4Xrzmdfu3xW5iBKm132zcXZVRutDLevy964AfxZM3GmzZK17exHrVaTKUsQAzaCjwWAXgC5N2i5Q2eC6W5ixzRY3",
  "key12": "4XUNTTr2KbAVzkmNDWzGajPnaDcKFLA3R1Adkdpqou4gJoVoNZ3hWfJPniDmU6zbN6VjLgTvQf4zHyG9kFnwJvJj",
  "key13": "3yQbWRD34FepBwesLJmsf9yF5m5qVNF7Hu5KR4jsUcrM5dGcGWVPLn1DrpmfUHBafGkhqAp389ENpR8G4R6ahC1W",
  "key14": "5n9AUpS6J7QNCJZNWhfUCH8GWwN6Fxte2mcGmmVWTSpJisRUhx7xBbWviXsvafEKn2HqAnVmA4p1dQJTqCR3Z7u9",
  "key15": "3knLawZDLUE2UwzLFb1J66j2yBsb7LKc5jNq3FSF8ksiYbNjobog8RYJEWR4C6p7yCpAGgdukpP1ZdMRYyF4AydF",
  "key16": "MRuuaqaxqrSst7qdhcz28zmUs9JwaEhWK6b29ZpBDzghhKse2nMPJ3YZt8EZ5DU6Kzu5Kjb6wiSUWtsfa33s2Cs",
  "key17": "5vBixL3aWZJ64H348ZecMb4Cr2XRcUxbYLXKDqnLprkoL6TVAXkmg4n8F82js5DdeCCsRNnLcs7jGPp3gmneohGw",
  "key18": "2xzVsTnZ72RLx3ScsjKmXNXBYwhywm2KHizTSLxn9hRqUC93EobJDpo4o5uBGMcZGR53hCWgaXoiFzy6oMxG4JAh",
  "key19": "5SKRBw3booXCCji6W5yrT2guzG4JpUkBDRBHLqc84Ayun28kttmmYDNQBCT6rcceHcZoa9pquYXyFZaRcxexrFej",
  "key20": "2zZKcQByFKnsZHCS1FqQePrhtbGJd8DVB5tk8c2NEGfDSRDACJpac4Z3vwQLHQrAXZtK538FNC1D3BpXwHEnJo86",
  "key21": "4h5dqYCqiUSeBVFuyZGYGBYttLG4fuY2yBproJfDHrB1xMt8fjz8kZm6zqKsbhwExnBqqKCRYVM8Y2RNtZ5uV4iC",
  "key22": "3ZHjxnQzhhU3VEZ2yY1vZKZnZCWfa9zQqFwooQS4ZqHigKxg5thPAWfBXtT1qdFLhG9htavMtouk14fL7HLCteJ2",
  "key23": "5HWM8yzTwVrTDXf8aVZFYcVZZj5FUGGG2vfwztZ6SijnKyc6bALvMnJTT22NpnPC1yMcsPzNRRrq8vWPq3Cpu5xk",
  "key24": "Hn9sLqCZ3WU2oP67GoJRRhNgcQQKHGVyTTt1N8KKm5jEK7FADpkFmSPTH25TP7vseAestwQmjGPR5LGCfhkvpkX",
  "key25": "2qQA6m8NUnkrsqbRGPSGUoVMqPLcisCqb8Wa55Fx5qQmJocLgiv9Qa8Bbr8uD8iJRiUWrr1us3X7PN66oKLy7vTn",
  "key26": "4TXf73SuCagfAT4UbrszRris4ph7A4e2tERVpFrvfFrGcdZ7tuzmDiwEZadGFoyitAxv5ePUfPPUqpzq82M7iFnm",
  "key27": "5Kq2TGvooY9hHnMXgFoDGYCBGe6X1mLjuCMSurAwCnFhjHnoiKEN3WzE5H6qbYpDthuZJCVzcEJRouueRgFbjEv3",
  "key28": "5N9F5z1uzKcBu8N2VvL1933UgMm8S1f3WPMhUZ5gAWGh9Hf9CpLri2vcDmtqPHN3c1cYNSPRtpvGeWxpwVYEEKR2",
  "key29": "2qRWC97VrpkdJa1aJeNF37FAMYb4EC8RWtwKGtNUMNV1hwGD29kCjHPW19Drcm7SijtQidPYq3DoyuxJsXB9MR31",
  "key30": "2NA2HHMXPYJwq3S66FEHNSxnintsfAHc1N6RxDWkxrUrDdVap5FfuztPySbUQiQ1dYP1S6AvLLt7Zd48XFn45h2U",
  "key31": "466wpeGsJvzXggoBWLqkZtx7rJxEeqbwdRWjfm2F7cQqJt4J8e9gdQS1QDem3FoDyKMBZzTuBwxYCphER3vU2Sx4",
  "key32": "3A2iHHPvD6rX1m8Bu2Pdq7Myat8P22L2yGGmXTjBpYtfLG113uwGCyFgugikBAjcqUuvBM5SGehBQzPGwNJbbnuS",
  "key33": "2FjQZXDGKiNWNizDHAHjq4jvF4c8UTspJdY7Q8H7qH196U6hUffh5B9PC4hbxH6K4ecJzWbbx9teJUya1AHfT33U",
  "key34": "3VRKB8mYjBdNPsDTzHUhwHe3YgLsK6rmedY3eXenn4x6joM371X9pJDMU7TftmCtdTg1pMKu14zwna1FfTBcGQSC",
  "key35": "2Vd5SP8XEpWicHrsD3NRNggC5qyZoTcpU6agXPiz7DV8eMTpBX8mynBy1YUbWEGnCLnJ46MnEX6kCMfAyAywXDfY",
  "key36": "yh5WQcwzapqQXCHLwPe6Nw7f5HycT9K32Z2xbkYqbbEx2tfzM3J1A3AC196pVtAvUe9wTiBowXGm252NM1HtUFP",
  "key37": "4KjRQYWaHxpePzWiXBNsg3wYX51iD5znxFPjW6LR7cySMtiqxcjYb5uVVGWKi5mysqg7yotxM7hoArBrZqPSSuSm",
  "key38": "3ZXeZccs21EmL8t5gqwSkhtDx7F2jvGccWQFWy3ZZBVu3svi6i6oZDgG7ws3BLqgJb92CBZ7orp5U6D99MbVFgz3"
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
