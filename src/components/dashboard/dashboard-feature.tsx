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
    "3BBv792cTGBeLikU17o2TBcRTPHEytWBC4iGGLvKJ9XBRNBifkmaZJhq9KRqaYK4eY94c31A7Wbewp9fMjH13Xts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49aQC7WhNovd9vRfoZbYtGetm3Bo1SYrPysuAXpeVkxWm8RF1ve8zWqqdjS8YuCpKaygcpf3NqjbXdWux6f4BYJa",
  "key1": "42n1cSe1fGEMxsQMYjAwcyCWheVCYM8Kn2xBP2ZC7RR2SUKP5wQekGUdMtL5JZrn6gfBwy67UWeXXXCrnzvsfCF1",
  "key2": "49YBXbMjATkBKQDeggJGmnh6BG5tYMrPQ19bpGsxNe12DUginaAQS1i3wJjr9Vi7PhgyxqinUvZUftcMGMtpV4U7",
  "key3": "717NWMcSjJU2NnjDaBgxcMF2SiLqS9RWze6V9ZEKzV7XUj9beX4NWJDMh8wkkFXb9Ugxg86tfSg1AdQZdQjdP19",
  "key4": "3nkMcWwRTRG1Hf2nfr3SHFmkmPfWyAcqk3LeFf6ziqZQ5QpnwDvwojTLsXo1VnuhhdZMvw87C7bJKhjyWSKXuU6x",
  "key5": "5hUXdgqk3Sw9mwY7nkxUMtgrKuWjMwuZSnzp1kKtFqV1zeyZ4F3t8jmtH8EhkRuHMPnemzB6wqD1bScrRtSCE7J8",
  "key6": "MLFkKahUUK22C5QcZ7QeU7L5EiauUviwxmSHtwAR6B3dHLe979cbYZbUyjV5cCiRPAWYvngtRBTE4npoo9kRBdJ",
  "key7": "5ThmSSYWS2VKwz6K84yNw66V97eP2pd1DVkFyRctRXr66WTnsvcyRpDKYwS9s3KzzWgqYgick2GpKbh3ijkVEBJf",
  "key8": "52DhWZMAdPkCRmsuyH3FwBjmxmUyiwezDWjc3KSDKC1FsJPFuPsvbxM8uczNzg5H8v52CSmXvH7iMtt8R9CAK2Gq",
  "key9": "5fpQfsFrRmmLW28y3gQEmePdFPQ6XkCdBMJP9UZ5McB1vZbUJjysq9TgZmDYddTwmqmoYgudiFb5aSGRuYifpDFU",
  "key10": "4ZXKpJ7KuHM6PVru29W8oGcLBnbPM8jNJcJYeLDmBZiQWqC8dp831ip3UZD9CLyiA6Md66yyHHeAKuBo1YyrqxN8",
  "key11": "3UFaP6v9TEjKRjidLbUVyVDjtC4YVcPW3nESCDsaMbF9bw8UJk6Y6gEuq5bkhquZmH5om6rJxBTfRWA3i9MBny2a",
  "key12": "gECZN86TzEXaSudYPDyqd2HG2aEsvAvLSUkCSNcUVVH4Mnwmmmz5KDd4dPwSM1RAJ7TXJbAVepJs1ZvKkcjxrWz",
  "key13": "3TcCmSx1gGHGUiPfb8K9HqMqLuFyBD2irhh6gXL8dvQY8GsN19Hgso5kN1Dyvjvb7UXcp7cpd9SDcQxWCStccvKw",
  "key14": "3nAT9iq55HjMqoUM55BzMYWcpViDNwhX1KqatXsWJSwWRoJ2njXHL3JfauiyHCNKxDNBQwxGn6BGFmBFL2Tw9wz6",
  "key15": "54ui4apXhsgb4k7X5f4a2zq1Wkcj2XQ2x2fJfuK99iYcynSDRTVojM4MEZ5WEfzVrripBSQbfSPrhbqhkvHhNPPS",
  "key16": "72LcNHtHpMgMDCbN3WR9qd1HdPqT1qqghHfsjKrdVMm7MWESk6CkLmqHkPs5zT8j18mAQnCYN1kxqZBFJBAHSeQ",
  "key17": "4tMBWZNDj4uLy15SKSzjE4gWKcYVUPyfpznue4VR7GosKbPh5nquZzsHdm2oCZUv21qkDYfiWCqZrQXko9Jad3Vw",
  "key18": "4x2cmBpmCctXvwfgUdrVfWKtcHiaqrtDXEsrXfoVjqVry72Zzy8eniih7v13GPjo9arVP6R8yhDc5zJxAV8hCa7u",
  "key19": "5NC9UrdQCf3aDiHmnLNhDBDtz2aNtWUNgSa2gZKYD4tNJBq6FnJsirffp2g5iUYyt33VVvx3iAQd6DJBUpozvW7N",
  "key20": "2FnMWPo3L2P31C4aomSfvLEcBX1i6z3GFZSuWxgWQB6j3yW42MRvXj21XzoEhVjeY8Jd6h3PJtAN61BNBVDDNtk2",
  "key21": "bYof4XVZwZpTi2JvGRkAuabMttiR5zJ9ByxiC8HRACJr7VdgjD6HoTxXQdmt53jmTfcJ5EvJcgjBDT1U1TZ4ff6",
  "key22": "3U9KLnZi8GpDesTfNAZiJ1TZFd58e3xUrm2v82oP6u8uda6TZWTpRms99RgDUvgJaxmeckY64pRqae63AhyZFFCV",
  "key23": "XTxMCPVc9VPDWSow2LQT2bzUY6jkaS6L7yrAhXmxSYvhAfMFXRWv1dDf8XH4h2VefPt6X3eyUUjxX7AQHzuFu6Q",
  "key24": "48NPnSNwyfEZUYYE5qooV9uDyUJcvLBjNa6NrTrvk22gkqDWY9H3HC4ShQLjPic53Xpdwn4oqiyJyHYrW4bg5wmb",
  "key25": "4YHWLkWxvCGqnLpPKPUq4axaYpQWtiP8oPZTwrVxbbBPjLNpuHDXMzs27nkjXFpsHHP7eyYnogZQB6d4SGs9G2tV",
  "key26": "4ASFSYi9S2vHo33KV25gioFg17Dr4RS7oj53QVhte6c5hDKRsgiUZtyVuPbhMUn4qVfoD74eUGiRFk7MqHXcdhur",
  "key27": "5Bw1AkULdbSiRuwfKygPKyjbgNxPVoMxmBLoqH9wCBrRWBVxMLZafvvRo4kEa9aUg3ADeu5pW3Zz5Bmwfbfv5DRa",
  "key28": "4y9dARqExfmPnQvmLv92T6jxw1xvBqdB7hQSDWuTFLyWFa9QEAMGu2sYK96urtsHw6u6QCYz293RHgw7Q4YmFmvi",
  "key29": "4ED2emahDSjssRKGz6sqzZXoYW1MjrFqVn4gPk5UnM4VMfv7WreLvLd7mh2SHsBoEJMyu21mh2uUNmZog27PQMEY",
  "key30": "3qn2LiDvkC3cmUMGk8dTdc1DA3jP1B9qWiH3VPtq4va3K1TcUQ9AkUCPPxhqr8hmVBogwFS1dzKZ8X8MAZL9LhML",
  "key31": "63xTNPYyNnpb72eonJHzt37SeF3g1qVPUyCTkQ94cESLrhyLMCSexkAQm7q9uM1KUonm3ec6yFHFFstxxq2YspHc",
  "key32": "56korExUMUb4A6byBC61rax2RK7SnSKDcfYz2KEz2CR5fAE6gA3vn9RVjga5BANRdRABxRL5ziqxyGrVpceKWP8L",
  "key33": "6pHrdA1DNGPPTaEGfbt9bT1iSRaGPdtH9pwWXGa6RGv7VhgwaxWymZQAzWyyEZiiFWJLVAd6jjYyN6mKdFiXcMN",
  "key34": "2tHHGhoAtpgcwA2bSTohZ7bwZs8PagxXW4ioi9K6dbmuqwsVjEHztmNJ6r7qUAa1AKvEyVmprDQwWd2u1UmnL2kV",
  "key35": "26n5go3HRNKcWAyKMQ9Yp43ot4NrMewGtPjWnVf27mqNsSULC1m7Fwkai2UyCx6zHZDX75bokb15ucAKXXJZhWbt",
  "key36": "2G8okQFR3ELLEcPh4AeCpCrD2WrExCEBkd47WkYTfcHmyRtfsEVESqfSfz4DvPP1fJGsbE8zXyDA4K9hiJeD7xzp",
  "key37": "3CLvfR6V78nEoA9P7DDmLj2U3pvMfyF3eHv5Fg1fLEmekE35pRWEVyLG29m6asnoP4gznSF7ZdeZgVEs23yj3BGD",
  "key38": "5XFXcgEvmr76QjD4yYoQdHZosyeHSgguDtXmmwDjuicoFVDMS5RMGCQxrCLXPr1sURcjC4DBmQfER3tvRY5VjXWk",
  "key39": "3cp8BiawbAt1D1mHbxVEvZszSVWUdjgMrvkxaagJ9JmFP6hi2cPDHH8FHthrcSWEH1qCvQGK34VgzPuvmm1eKNNc"
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
