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
    "22b2BGKBgPYs5GshtEvqAQ1Ew9ASh8orFCQ42wSHVyq6RoQzA4cRZWLsHenvoNodSmjzvyUFfAiCjogKXp22sEP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSF6UvJwxbrToakgbho4oSp2Y58JzY1ryXYuqRRY6meJVDqA9Yeq1vKXWugHwDbgvzF21HiFJtdLKnw9QbDdEra",
  "key1": "F8pZSEo6a2Rp1VRThusYHSauHhRair6XgUjNdm8Qvdv6Qj5uHpBzxYehCWZZB2WJg8vmNx9yGRPhvuuSRwvEHss",
  "key2": "2DWxCzTHYvogpStSybEgKMB5fPqGjS9QxTaC5To2S5BwJctqiXu6QATfTXzRfKMMwQCRMLMdPD5meTi8JgGhKaw1",
  "key3": "41szVUW9g1uNAjhaZywqNKkkSGC4RnTBrMUwasy2jTtatUcbbkcu3yQSiA93M16pURVefADWzBBdd6TPHNTnUqFJ",
  "key4": "4HZ48NTmfsQw6M4Kg4JM42d1sATNx9rYyfkdVuyjwYmoBgN5B8fkMx8A2bCkbAtTPxhiJHrfi45oanxnRgoSE6qv",
  "key5": "4UsLNYQzdj9LgLnfhfuxXKVbTpbr8skQKBdtfKPCr1LjKqnTEPg3a6gevWzBRRfUeW7UfczdnQrMbv5rko76sUEy",
  "key6": "3AFS3SgiaK4tLsQVPsXVXMAk5w1kQ9CaLwvtHUaY2fDEbbrFdS5Ec1hzhG4hfSAKXAj1zXjw7kixVzsLyAcHPewW",
  "key7": "RU42WRWzb2G5fGB9HD1ENVpPnAJDnhq5o44PzhG34odPF6M4B6aVfGscx42aFuX75JVEBbwLKoTWu4wJK6P5uZV",
  "key8": "2Ut3azp2fxJgnBmUWeZjAweS9f4FD5gMUDynmcnMQqpLQwysXTR9Ef3CthaLn7vMZ9YyfVovqR3mdHE9Lha6wrv2",
  "key9": "2Rui5dZZBRcx3fpLpTmfX8nTbCMQ6gxnLiFAZHENHfzj41qSrmpa5Nqk1kf8Cxfy8xYUehyyD7nST7H4X4RxKbDb",
  "key10": "2YXvwk62MvibsedBuC8RpNJXwJtqthzkw23wySjuocojpDY24XSrgLR25jDZMSjpTGGfo1NmaKJqePWJqQZFb6C9",
  "key11": "215x81VbBzLrC3Tg4XaFtgJUCbh21d5CUj1HnjJG5Qx7Uk18f77N1grjTskmyoGum4Wmz6qbXa4k5ywRKwdVVNDV",
  "key12": "afFihfA9GSXDGah6cFXUWvnwTojvkUwuzfdHrZegrMs2bGTg7WZPEcoV88ooycbfLp1pzUfVTsxWYgDbqZumxKN",
  "key13": "xNAxnfQ1r2ri9QzJfhjoR1WieK7zwJhGUXTDx3mDF87z36AqP4ugHhRPW2c9gQX4eFv4YwBQYWo3bEknudkjRz1",
  "key14": "39sBmyXEut3RjoTZoNkZzZ8vDCtdvefJtePNvdaPVjwSdvq1ZQBaKhxZKZDYP8qeZfC4n5u85pLMqdm1QukGixGn",
  "key15": "2M7r9DUsEHqq821K5iVstMsWtj4miVYU5KxBJw9uwaZVMSxkQfZgK39Quaf6tyy8TNeDbD4ujBVNEbB2PyKXQX8p",
  "key16": "5uYiStHUh134tj6idNnFrRDqyDZ8nCozzHE2oQoAtUQwEtDvuuR1uY38mE2ZhYPmy96D854efurdnEGtA4yjy3uf",
  "key17": "5G8NGubiMhnhrcota1q177A25bWfcJnZRMS6v38uFBH6uYb7WQkJiYDzRt5HiWbArnhtnoNCBKgJTPQvohT6TArH",
  "key18": "5f6pKJbUmiNzwPPMLgNFeuVpWeAD3XZvstZAqDuqpfVpdXdrumHRLWZBUyhJPn1aPwV4t41KiNTSnGxqNhMaX5Eo",
  "key19": "2bAwcrXfL2ALcZQmFoGhdTA9jVeQv2bbbz6cHE5rF1QpateaFJ4VCwr3K5EbqRijKgaokyy8J4kaAjBrH97mGCYD",
  "key20": "5JpZeBh3aBgySNpW8geK47EiqzP4uG4E7KF3XmuxJQF8KUXe8syUVtcRRyxTLQthmbShjqW35TgzhUB6ib9AHaQo",
  "key21": "2oLPf2xAZvSxMUqaojvhzt3NmEjdNYpoDwBwbiZ47sB2oGV4YUgCK3ZCHydVYfPCnFRTHn1JBBHAwKiLZdrRPNnt",
  "key22": "579fvKGXmSp3sTdx4TjbXdbPt8S4WWYYbM5SPN6muNjNqRo3nQiGjNLBJQKHiHxjdPCuR7WPMTTjVztB2k3x1Urg",
  "key23": "4pPembvdnEnW7VGtF2f2BDaAJVDowm9FsB7XGWkdYkHtQxAN2ypuR7m91HwmwkmHVxQGPLqwwntJ6dnnYjYG9EnJ",
  "key24": "3BpbZBYfzHyhVyj3DiD8WpU2VVsJXk72qSJM47ExGjs9bHhV3VTQoZp2KmCsbAr2VNLUzGVQmW6AazNLjjLt1Nfd",
  "key25": "5VbkHy4qjTrsfhBAUzuSzazGAzUPtywf8hHRu82NCpNM51RCC4dk3gqhXzcwNCEGZu66SFP2yJcwkXWrcDgKSx84",
  "key26": "3nGPCDQL3GRkeCT5RLUUQUwf7WyrgeLmFTAzkHxaXRwgqBokPEkVGtAusoAD2QhiL82BBeFTyW7XtVQLJPtB83vW",
  "key27": "4uP1adP7uvF3MSxHcBts3RWQCzodMk394UpNW7SUJ3xspyRn8Aa3HVkFLqR4BBSDmUY1SU4ZAszPYMPSZs6tum9G",
  "key28": "eSi2kAVEtiRS6s3HMzBDseDJg1gdaeHfz7F1N4Vca7A1aoG1MY9jyPPSv6no4jafyrHrfVtrvERewTyam4Y2fXt",
  "key29": "4b8dZ2WtvLmGz7bnuSeiMsNmBD8BH1dDaCZfCGB1e3mD2YwrbkSsJ3QeTi1tBf29i6FwzGGNty1jpztaKZYR97Xp",
  "key30": "2Nc1jRMuHcWbsEdbMi1btDV9KJe68t2Gx5Ls4oHXC2mgGzuJjTnQZKqjn8DUoeELDoZt45RkwX1G62KijzePQp6n",
  "key31": "5CunSPGwGZze6vhSb7fkkakxGzNeTmneaMyXpwc6QWv1bDm5wJgqfKXVS9g2tzrFfXVh5Z8aeevXq3e6XQUvF9Xy",
  "key32": "3SUvnkpgCJiSq6uUvaNy8ofFsjpqBt1FZt8uW8ypxtTMxemQqhzRhyJDHzmJju6EeKhd6B6q5o1KCijMAHaNSPMS",
  "key33": "3gJuDeL946Xn1Jxgq9Wn5pJcZFbKXtnKTDKZDKbt2A35qcAYwNEHJ89dWkcZGKVDWpTm9tHSCTq7wEnobi2NVFFW"
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
