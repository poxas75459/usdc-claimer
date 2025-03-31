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
    "5JHa5JJhqGEs9KWAUaQcZWQ1bDK3dnwwqEaHPo6ctnEvDQDzveSbmsNfA7Kc9rc3ZCANaZKURvMVwZJZFZpcBSHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfU5iVXafvJMbtMN7S8SAXSdCVfTJaEAKsAvWhmrBrNaVfHJkHJBMY28F8FuaziTCf9QCUzPNZWxfcgozbJPKUq",
  "key1": "4L7aaKweWorpLAn3bwEwYL8SEYKB2E6K37wyas55LhBXaVDaieojbZHpRyr6Cuxjtfs67uhZS38YDobZhbE3E6rg",
  "key2": "3bbMTMvKyprk5cbMomra3CN32h1HqcJ3fK7sz5qgBeyK5nozeLzm1KzkipUc2FM82F9x2xrua9vYW38heqWPzLNi",
  "key3": "3MYNgC2wy4jDkVg95wt71Kx2bMsViUoyr2ECdeoZyDg8Unuq18FRd8HTXH2tPw9tVvEqzErVgc7qVvjdLuz7spv",
  "key4": "3AL7KA5CnxRknZyjfXmvcHWik3Siufe4mfMhTX2SPmnu1DjsMmtH87YRp8HQ9bkbQ1ZcJ814zPbopdYjFtgAvZk9",
  "key5": "4D8GY2X4dAEn93Wax3UYPaEwtfGLBV6XATNwSv8LwpYrNnPGk9wfvohoGKVsWiQrfY1PB1eVkQM39iBibpqEzPVh",
  "key6": "3tAEFGPufjpgesqHGaTqSscksfTCB9toty3a2Rhg3vtMkNXPh27e4BN1YJRpqTmEzSAZD8UVqxTDUczyGPg8ygPE",
  "key7": "2SRx6XKcnxuCHE3SobVBtkmWxG99JcPxc7xsKNNTDiZSjKyQojoXzLmDF8AUhicgKNdJ1YXoi3mtvunaWSLX2RHX",
  "key8": "bWZ9V42T7bXTcfsavdjiXbXGybgFjDKAJUAr3R1Pc4nTMzoCA1Y8vF1XRg6sx2x7BCPiDCx7tJ2XbFDCPEASHEo",
  "key9": "24Kxk5U1Uh3B2pam49mDp8je9wCANgMSPSCqYDZQXNaxgt1XbQzRHKS1H1boqVR3QAk68zVmgWrspmRiXBtW2hLL",
  "key10": "UvDvkTjEh8NQR51EuSrT7jJ3DjuvASvDsUyhLxtLQYpqSPMVtHZfdJQnA5BaTKNobRVXLDB2EhkGqwbvTSAALUQ",
  "key11": "24rmc4aHbacgYjs6Lo86538KrYrGoxLrPau428UrkjD4WcYa38oSCXEBZduhvUL2JN2rDQL1XJ4aC7iyeJQgxmKP",
  "key12": "fGX7DbKWjCD3M6MYL8qRmChGvJoBGzVn99MAGsV2k27ktSXmauAdSiKFCG8XvbbqNhdVLeLZZK21dHWgddV2B6S",
  "key13": "2SbZCwMtzLkqNhCnMFs1vUx5JPxVMPWcj9Aa3wnh8TGY4znqBoumiqz4VRxfFA585m2Rz9KYpfavihqLmpeC4YGv",
  "key14": "37kYCncfMz4rbQNG4nD4YEtXAHxcqmH4MCyiiJ584mfNhAGfWgDqvaARo8V36F9mdSrUWA2MaNjMYRc1A9LrjAvD",
  "key15": "3QLLEqMCqWT9b9idUV591371i9pTuTJ9jD1CStXafWunGbhJVyUWtWChnCgGA6xNYS3vvDpMHfsEP2AgF5qHAPK1",
  "key16": "5dAfRR3tm89A46opE1KokNnCakJxAjpiAwHViCmSwnnruUUTpujVDcDi97xodsYsWiZ89odAZAvE6uKC7jQ55rXk",
  "key17": "5VJtj6uB4vdW9P9dfinV3vq3ByC3YuEa9btH2rhXZb1813L491EmwaPrV6Jz2dGzdekAfVATzXekS4z9QPkrJDpR",
  "key18": "2azFmDtqH5ALbwJ7hWRYpxzemaLjFTMUxLzXC7Q7xxzgezUU3vC1GanxFpY7FuEXD18kcFZEJiNLbSBoxVwpdZzz",
  "key19": "4bDtba2gKbk561kh1ioGC3iihCLJY8BsuDyVYfi8qpHm2rAXQKa1J86Jd3ho84g7zqTNbYJ88DRjmKtZ5hZUCvgk",
  "key20": "4SVkNsQGhpjUambV5S6tpBw2AnyTyyXGmDzRqEKXuZMsawJMoB5LTPdCXp4pzjWFyQtWWYqeW3FNfyRFBUSXxQBp",
  "key21": "486dU2zcBwfajJqBc2KaZNfqERCm5RauJDjjYz1SALWnnTuSyPaTbq24K9bb8GmdG5EEvEsnaRULyuUMCJr1hzPK",
  "key22": "4XYPDCk6fNvovmu5Px2DCPmK6s5cRTU6M45rKsdzs7eqFUiJcTwnUTEaDtFqcJZM6PU3vvRYgAWEtG6uZSUVD4iB",
  "key23": "5MWXr1D2koXyPCaS2m5zFSFDEPv4zx15YKbHZs1DUQ9faGeEPqTtwjojN7rSqpMu1t6AjNZct2EQKiVUzkNXsepE",
  "key24": "2SAFzdhjb2eaQXUUa7oUoc3QTSgzzM6c77ULS7fYDor9FPsM7m6JDmPM5hANyidpCbs356AehRCKygeuTBe1MAoj",
  "key25": "43bRow8HhtKe6MkeCyioPsaahBPnaZnpVREvj9KigNT4YPNbV7Z73qenY64vV77vkC5o19AJ7sMtR1JCXCSjtxo1",
  "key26": "imyVMWeVqD1Cd2GRmsgieytLcbdc8xaS8yXXQNYjodpowyRMyxB5786q3ktm4QKiYiAwRvoLUU3hdK5ksGBWBqE",
  "key27": "2QnjQ9TjTm2xQ8Nm9N8GVMotFcUVoqrW4viqNdQqP8Q2vSRyf4wBF9jwj3hEPRnWgXN9pytTitH7hfo9n75hZJVd",
  "key28": "V3gwHXNb3G8Pz8ZWZ5naEj97UAtdNEEa62Yit1jDJAtV8MMoZ8hphDVFg3rtn1rFe1pESciLkYawiufdgJJi9ty",
  "key29": "5ucVVBUU1bpajzz65hsCKcV25SyYRr5xxWRJugEghzmWnZQFs6YsQRXwaWLEPVAtvpJEkYGbPW3AvNupYheuumar",
  "key30": "3QbRbWgVtpmsjBQSskxK3ncKZxJtSFNw5KtP5ov9nS3kKEc97ycXx5wCXcEr3RgAarfgrSyH19cdjprdjifagY6q",
  "key31": "TVLcyQW5r2YMQ6pQcswpNxj4SuzAhW4PZbVZutAA8UxHiSteDDsZBtXeYnpS56zqQ528xv4sw8qWk6zJbgyi7kf",
  "key32": "243XMrvBy93WKmEB6tWaVqyqBvHv9UPGutfBNvUxjk1hRmmonaLMPBGATkpRgviiVxASBWYSvMPvMMfbrSRHWZr5",
  "key33": "3AqUKx4okgQUbrWqhNDh3nButFHuwPxwkCN6xQDYm8BY5DSYmBhRJJ1TVdmkGiPwwyvugUcZaufWjc2Cmzz7Jyuj",
  "key34": "3xbW8q5NGa1cAQeFwxpmPfFvCGroisFBz28yRCiFmRi3oouo5fLhG2VyL99YbehoTZ37hF26qPga2ys9bp5m3PPG",
  "key35": "5F387pUVVyvF6XiMTFLYQkqvNxzQqXYkpyQTWCJkbgZDuQj9FAJdvssP5iYq2B9Td9TbhzsAmXPD1egbXar67rbE",
  "key36": "49FzdvdEQ4mi74LwEgqmMFdtnoZMDTXd4zhPWK5kieRa7DYaiF1aDJeB44W4J3V8yCNfs7WaGm9Jy8fVwx1oDjuV"
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
