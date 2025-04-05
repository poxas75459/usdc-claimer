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
    "8R5eQ2WeXW2ChDswybs3zYfNEPJAmi2eyNAZT89zYRPwi8wXe3oUxXspSr2aP1yRn7GQJWXaK9pvkwrr2NP5M9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATRrwV6Ha6jEThp4KryVdDGyJBKUrmvn9HP8EkvdE74Ne2mHajWXrMqy9NDUCtwmGWrYaB2JnttsR3mz3dL1vQz",
  "key1": "4PbmacWBbbyXcNDocS9NyCVwTmgzvMH3RM1iWF4sXiS83LGNbV2iyrwMWrNVRaSi8iKngLKDtTW2hfSmxraQ9eX7",
  "key2": "2u385jttRziShsFqYaJyicfEN4vPXoYXMGkqGLAkzXnx6TBJzEnEQ4XTNQF1ersD2iqRKNXghQR4axBkRYzKNTbN",
  "key3": "2TA8ozWPfJMRAeXinX3GS3wMHJD2noikz7u97T91wRnrUGncWFoP9KJGe1jgSSbHe47wvqsbvCrp64kBnaiQJnHU",
  "key4": "3bePSm7Sv64tKBhy4MVpUUFMh2RnAvKDsAUURpL8y5vjAhoAQYV1HJy4ysUMGjAicU4S4F3uNVMSeNw3grKeszcb",
  "key5": "2FcTDarmEzm33pLqfiQk7sb9ZLi81muZowMEZkdXAPxaVmLVnJ3hK6N4WYweaWCLSVXZPoPPh9MKnf1urRgJCaq1",
  "key6": "2VpGprBRXpoWsEjxL66zHbqENkXhxSEnLjUo6os8pYFEpaPzoRphFCAspMTrkCeTsk9bznm4ynZDfHg7s2gh22xH",
  "key7": "4spPQFtip7q2JSCm6uCBmqGC7pCsjPiKxpPmxpABSFKveXvRTyFzsuGtstD75XybjvMy63JLzGW7k6pAmPGpDdMw",
  "key8": "1s5b5zbpPX6o8d8raNVBStiENZYwAiAWx3ussvKMutociwZQqW7LAsbSzm28JdPiE1AQvckdj4kccLkYSAaN4Py",
  "key9": "626m6QvgSJZ7FuyPxHTWBNJMFde4fRwxR5TNLubi1yWuXSHitm8Ka5C9C3eBJC2eNt7uG5GLAoU6mFxH1eYjErmf",
  "key10": "2bNEW6R5Kff8TsDeUtscZsL2EU4SByMj1XbKhRuiTYfaZBvqPRLRKZiDJsa3SzAtD6TTMXKPr8KGcDB6A45bh4Gb",
  "key11": "q1r61zT3HzWXezMxp85kT3FMtUmSuj7UAaQi6iP6AbnJb1y5r2a3Kk2cNZitgSGkeqQTCAekWNh517iHQAQJBEi",
  "key12": "5QhNqubUwiS4hoKJ2WjpfmCoiqv7PW98mMW33S3EYmmqf5f28fC2c4KXmupV64xdm4cDAJY3TGMbhcZQQFJDJV6s",
  "key13": "2fhNNkLRkmpscZHCyYKu24YbAcFSZHcW3ruHHLrL6gXwzViLuSnzBYgGa9ezos9gAcaxewnCczVyKoYadb6SDv2A",
  "key14": "3syi7XyxgKYoVDvh7JcM6XPRWXcF27zACvyJqS6buMyBNQXacPY4dSv95UjrkVq6RwDFK6QbtLtbvL3sVw9TdXX2",
  "key15": "n54NxmWaXTSgAMdc5KceGdz2zMn5xTR3PLqUJnRSMny4o1PiYY8eatXvHaDmCSQS5FjDaJVet2N9dABLM7yBoYM",
  "key16": "36SnYBkcCfyLBVcARezSkkGTkrgAFKUsFs5PdZ2AJ7RYjrNY3bAJfYtNwq8tHxJJ5NCeYFCKtkLHM66Lxfv5ZN4Q",
  "key17": "r7h1xaYCRJKE3gmQpcpyaVsfhNj6AUqv38L5VfvBbjMSVrAHd5kVqoEx1juCsZd78TM83N2crasSHFtpvXP9Ptm",
  "key18": "2XMN55mN7DNMb36hJcQuyw33E3jYhZoGsagHtZeBnNjFzGiFNr3No5ohb7pCBCS2WPhzoiJxLVLGCy3e6nyXJJqb",
  "key19": "2a99q1zvZJV5tCCoaj47kiFUmiosjxLRxhg4ga4F4uyK5ZobHKXxRufHSAAgNv9Lbr2jfRX1ResNLdAq6jyfnzgV",
  "key20": "3TMif3d2GmwCFZugYypRTfz4FJx8ioXFgmnHtr1P9PaG9deQ8HBArwgn9DMe364V8kHUtTD7fDxMBPzxLEsL9E4E",
  "key21": "42Ep3T6Cy36RNK9CxDmngu1EvEdZEdFbXGx43ykRL2f3312egrRoTEug1WTtZp1JEDRbb2CfdVnsuCFLmzriPDKy",
  "key22": "441y8MRNuau7MTu3QreixJkL8WpYihdpKY8ekTTToWcKV4SurGdHdqLDwG7K3QumuSbrpFaCBCx2uwGm77xahUa9",
  "key23": "63f4joELeKEDVkSgpuKjPpLmxhY9B2nBgd2RY48q8mKDT69sNJcAGcPv4hYFqABrHmeHBZKxhmxcQCzcpdyTi57r",
  "key24": "dwvs5VZ3b79UNJoBwqpTnkMgLM48EDD4tgZ7edX9HJqDy4W69eCXzBuLdDdQ43du9rBJq4srQa3rU3qPKAdbY1x",
  "key25": "21VCg9nk3zHYusfVMJBK9NQc8vhWmaAyG3UtvmiUWnU71BJ54fRcpjZRLNPuvhNvMVtpDww7JoX6h9nDir83qWrZ",
  "key26": "5BZrhczSAhSiXmPmepaFMPCwCzfWHuh6UAQ5Q58PcugoQDpEETsnm5mcopUdDwxRgB5PDz1L6uxgudctphYgYb2",
  "key27": "4uAGExcE2qn7WkCjP81pMCxjnEUsuYHyLti3VPFhDNEhYfyUewrFaEtF3SJrWM86YCPQ2NsdzdsgiJVCWXoLzYg1",
  "key28": "55xSN38WdEqYoprZFHqgTLNws9szErstFCHpQZ4nNPCrB6pL864s5Fu2wTAwApdvjXEeBwr6ivsBq9mYnvZZ1pbp",
  "key29": "3YwX5QbNuQjx8MaFVPE15U4DT9P7kMHwzMie6pug9ChPHzMtRXQyaTZg9FPbLcs4MyFF8rHoLjtMUA4YkKJEaYbR",
  "key30": "3PM1W4Jgyx5YEFYPEKoX4VVLPW38V5CQx5k7fP6WGpj52dnL8L3Mfwj1BPSXQ6dPyP4mKJyS64Dvck5RXWtJH8yk",
  "key31": "5kzciZBhvmyB7xVP5xLpWnv32bpYMxav4coT68egkQKcx9CvWzPYhrnL9YdMuyhhDccpCWzUC8jfR8PeXeDoAw3s",
  "key32": "5A4KABobGy4vPfa17NRA41zAfRHd2JoEJkPeXF988TYTiVPG8HNcnnKYZbUnfJ1Q4jnq7EJvAR6H471fpf3JHv8c",
  "key33": "2S3PwgqjvEJGhgrrZncyX5fmERkiZPbNMfv4CzBM9ipyNqFgqu9z4ysY3jqRbToyRSj2qnZnzD5SwRyVDkitSewB",
  "key34": "5qmSct6XuWPkwBuFagKCMfNGUENRsKcPxrmHoKwqRfmX4SxGo8MzKzqkPv5Egzm5ud3AvgrjAYerZUpTghsiNGXp",
  "key35": "5LJb9VDE63VxRgYRGCiXf2hHu43CeWxmBJfo4DknuhxFbo1gQSMibf5uAjNDCicjbtQsisTE8KX29aMetzbRiQ78"
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
