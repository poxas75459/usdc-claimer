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
    "5BqC8SZhWRCthbA3DdSw7sTw5LfSeoaiqKnEyzb2x8svwtmj7NDdUTQkHPrLiXZM9mVNdHyErBdZnKAzVcDCDPCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjMowJipMJdyEX2ynUvvQgA54UsrcLS1WUckpAWhfH9r89AuWrm33pVzWPjey2XwhbXji5LxX1t8x7LyEbwz8YA",
  "key1": "2jPgRhgrfKfYqBduoTVm7qacNRQKYw3PgZckodTb8wERF8txf8ykscgEroTMWSHKwvMHC5ZkN3ZMiQxMFdQu295p",
  "key2": "3stcnCNuRqNQ6G47uGNP4ngJSRt4Yk8wU3mz4R8Veh4nPcet1vVg52pqSGpwsRLQW9rbhD7TSpCTdKy61AFLTh1f",
  "key3": "5gAaj1XPGCJ69YrR4jeSLj5atXJ1Nj6MNy4TXyq5MXpckjjAsVYXoEKxcgCv8PRseUzx6xMVQzhQKyBi32WBSKq2",
  "key4": "4PkGXr7Bazu313MmcYakx3X2SBhuQLLAA5NspNqtyox8jkVSxS4AX44FzE6mYoMtFuPxzwuKTfa4RJf2qA7vPuk6",
  "key5": "62oRp5iogp6Kuq2ns5tikaZFvVtKYyEVk1kwHXhSbmtaargeNwtknsh3J1Jpsx49sELz6fHshJXFVWUoX5bPtmfv",
  "key6": "5yY9C5wWhJMzEukxypBgZLeypZmEeK1R3YrZgwmhSDo5BkMzzKmuz6gM11dxGCnAMq3q4w9qVJKkKqe9jkyDVN9W",
  "key7": "2NCJqwcFqzA2KWgAKCu78WrxdPonrE4u84MU6YnsGck8Xx1mvcYkVbogWd7p9oBUngwMhWhdEQzjHcy5Khk1PVrN",
  "key8": "51ptLvx19Xtbm7eKS551HQFQ33BpmnuAH55w4jH8CwxXLhcGUQ8mw3XaMa3jVcR4RxV1y2Zy9YY69qSR9knaWwng",
  "key9": "3fuEux9ozGkCuHbGeQwUPjfjXzELKUiHADS5MKikWMMKepMk695bVmMJJ2orFmR7SdjdS7jbaqJRMmibkjskb3E3",
  "key10": "28jnp6VAmYnyruMEW2nPW92x2eWqQvcBTk3zKZQ8jGF69tJP2CGrmutL8SqMPWpKw9Sic2S2QrZcGTKG8vH2TJ55",
  "key11": "2RnCGUQLZ4u6ghLpgjR7uykEg11eXcxPxHMDuLMo6kfPXWSFpfkdmCLRExzqbxbfVBb5gKWE4Mj6HqxroS4GRTwE",
  "key12": "4BGAMrhXmEucVwWd162pR6nyHEG2xCJDAyxWZUx1XpHbQCZuK9aKHtrv8Ub74GVwgPyXHtM2XvPCs3pYGEf1yz37",
  "key13": "5tAgbTr2S37JxLr8iyhiKeM7PJEFQjHbjUekLF4XgrzAJphwMp5Baaus8sgTd3GQSRa2hVeqLeogZpmuH3Q2E7G8",
  "key14": "5poUR1AJ8WXPGmAX1nPVHcmNt2yPyu2ZA3TqpKLsye6R6iKH4HDjWzcAmxn92tp5z44umD5vQfX21GmCndYn3v5s",
  "key15": "2sLjHzj4uX6c4Y4t4KKwvD8EiDr75vP7NtFX814MXSw4i6DJgnnrBjfN6Ze45aBoSNdwRpMshbBH68jWuzitDxDF",
  "key16": "2itAVr2Dk7W5CfNiUukLrpSaXzySJ1ZoUxGLgfzHrSTWKk4mTSre4ReoRMSD8mBKaYeUJPE9he2ER8qaP8T8ASpF",
  "key17": "32SYwtZxVivS4qfgviN748ZcLFa4boauQG7ZA4X8GDiQM4MkyT8hUmWpGzSHKu4XV4CFJp4AJLqsJtSPDEiWTT6M",
  "key18": "4iz9KFZVqqJT6nk86Rj8P3enRvMySs3vnbexkxbxmpAnsnWQBUPSianeYNBmCv9w4gS5gJAiHLJyceihQpBNJAwu",
  "key19": "2h3EeB1BYxJMfHVF3TL4BD8XBYFdZ5TgbBUx4z1hP1gkJ34XVxUTV6VQF3NRZAUPww9qBFchgSubtUQEHByUZ6do",
  "key20": "3KRos3JWB9DobT7ssNQ8womogU5iL41YRoQZ3UXipiQzJLajesHspUjkJng9h436qYZv3q8xDY4aNkUR6VfETQno",
  "key21": "33cjvo1NqKGR9YP8oBnFy9BR9vC8YDdvkKAtKM1D7TPBRQnuhLomSQXGEoXVdLGtrdt5RAsHdcjsZSVu5i4h11xZ",
  "key22": "54YaQaCGNTcfYJ2EcumQVRkunkzbK4RbH2xYQr3kJfpFZWWURt1mBxJNNEXybxW7b4uABLvBija9TzirNwpYQgRu",
  "key23": "45cJyGACq4c3hGsHXRsJT4M2Ew7sBKExu5KgkznKp4MkxQ1gSBSiwqwMj2eEtoXq5n5DHVY2K14GGRbaqUVhiYeb",
  "key24": "6KceufbK2aHSknaJtKdKREfkcAQ6EtjvA4XfD4wbUxgCF2bjmRz1KXdtGqRrF3kiAG9v7mupfEiHChT2uyE3zw7",
  "key25": "3VFvMpL6biiv6bvciKMsFuLEEx6eEFJ8Phs3GVUJGqvMpd4ehWRqBbp34TNT4hZ4CWrQ8iEvs58crnTe5znhtKzz",
  "key26": "ZjWCo3567rZD15iRqJdxJTeQkRQ5fCRa7eCR79jJ6ivWLT1Rfx5jiRc9tLrL2Zm21qbLSWDKwtUvGXZ8RLGsDib",
  "key27": "3CQsf68QafGYFWYv1DajmkXnE9BtkeLGiV5uqnKev3qpH1Mv7NmY42dPWcPCXPDFXJkRYDfKM8BB6LK5QvMAq44j",
  "key28": "2yiKEuWbgjFjbLvtaimZyBrbTwbu5RAMM6CPpMMDXAH6Liok5YxaAHFTfvUVQm8yPd917FnrtM3DPQR5uvaqW6p9",
  "key29": "5sQ5RMVrZLWbEjtvNF2nj2tJisikRpRkL2iGUkabHQmc1peNCZAWYqeM7E6W2M1NopGmwi7nYj7CdMsJmr1u9qJN",
  "key30": "4664LaMz1gCf3cjmyK3EuUq9f79Kx5MT25zKLNDFAjMNSoaWZPq8BpDY5JQ7xz3e2QD2vDL95Xxjm6eFmy9fsxon",
  "key31": "2oPvEWyGsmfxEmogvUY3HicZ586Pe9xetq57G1jwJQKxic6GLmLrog67hE396kCLzkXD6gUiUakN8pzE6USrA8ND",
  "key32": "2vkVRAcqUYXVvMpLMLZFDX8S3C3LwyqiytJVjYV6MtNu2oEcjTiwZFnn5ajVzMcoqrwmji1W8gFL8fpwSi89sgEB",
  "key33": "5xMNzUVxvwCmyyQ3PybPrnxMoForoLk4BU8iErqyowFmQ4rzysEHeXii7SbGKieX6JCzUzUHoxPdjo9kSjBcYzWF",
  "key34": "5RT6rusMhphx33y5HrQC5ZeKQqbTKDFDQfFSN14HRLxwTiFV74gkFV7RAWQxGhE9Wm3dZWsCTxUwvfv5v4fEpvG8",
  "key35": "2HrNQMTaJUyBPMhq6pFtVnFX7Z8zHJWsY2D8sEAKhzCPzxXryt369X1G8r9tnbWzotsa3GRd192HsPJZCK58Eip2",
  "key36": "3Sn3Tcn4WXQWwbo3vv1uotz45zdvt6nDAyNUQDj1kKCVmxvHwKyiEhhUJEXqz2H8hC4iy51f5BCeRnqE5ioPCxL6",
  "key37": "4SxUCdMVktgm25ooWZowPw9tueamgXTByohiKPBozwiw8fxeYeCC9jrnDwNyBmsHp8gJd7UhifoviR7c8x8jAoFY",
  "key38": "5FDy1bTKHSUN3gtSLsC5XR3ZL291L4VEEPY1xmn4LNMBhUoCahw1NEJe4hZQGb8HAQ4uYF2DYwey8XycLDgeiDcW"
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
