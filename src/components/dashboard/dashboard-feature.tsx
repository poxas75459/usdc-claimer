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
    "2NBa7VjJbFPNfpwVKYczjLTBxMGzCZnBg3Vj8cSWzyrEEy6awurCDRcaVGt5d8gD1ueK8pAAaoNrWQAFgeQqFHiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LaCM8stEfBazQ7wfS9tgDDxhpMHsAM3YS7NQKKxvGXYAQSNRAuQRD93MQ44eUB6pBKNCbRQ497kwpt6waX1mDL",
  "key1": "1fUSJEMYy9pFKVVa2jf2oAehKwa7aA6f7SeAFdA6LzLdEDUw9mmU3CS2AgeaSpQZCroWeRGUMHQThXfXJkmhVej",
  "key2": "5RQX2253uQYmudebMx8ujzSh6hRHqrsTJpEcgvwHzdxax7iszJ6j2VybPztemZKBzex3o96MWaHhSaHwagSaBabL",
  "key3": "5t4TJE9vY9xCCo3wCWj6Jg1Z695LA6qjkwfWfC2HEuFUvawuvc1xUhPmCGHrFmG96icsVQMzJhHi1nL1bq47sPe6",
  "key4": "31XSmq6km9okZuUuHMPqTm9LH9R1WgCbfhUwDtkSrMU7z3RJa1mUWE9ZNHmdmxRtEQR55qotEWSEySg8LxDqE5Jy",
  "key5": "4xY7EyGCzpNCsjuF69LRksd9FLdtHCESbH51BsGTmph7Dcm41mYPHBwmBeXJWjri2gaLvMbN7f4Lmvb9Q1HCvgEi",
  "key6": "4sAy1mdA5sPSh1wVgSuwPZhDDq41YMP6aYdFhK2SmNRuitn3DrzG7GGioHRJvcqCPas5WU3vA1X7DsyCgM9r44zk",
  "key7": "4VcwSABG8aTdcgJtWmF3LSNHxCdXGDocq2TYwbRYUrYhNYRhbCsBG1bS7h18oCfNs5A1ng78RctGaJ7foVyckTSo",
  "key8": "25psYyUrHeyNpazAcsBD4z6NDALoZCudwDQtcHSuSVWEnSiPAebP67nqAuNz7tWs5iQJH99YLfbR2dsBsS4aiejU",
  "key9": "4e5f7jWSCeUrZj8DWLR8RMEC2SvvY2RFu5MRFV4gLXNMXr1YA24RW1mYJpGzCwfGTvHHSz8QfcAeqB9K1Jxa7SZw",
  "key10": "2G4n7nDDasNkK4wHKFWntccZzth2wGTwtKXMGe5AeBHXVPfjq2RmoxKdC1E3VSGmo1aE76TXELEad3KGLfLFzZES",
  "key11": "4SuDhT8bHsMFFBoQwUgigRcesXdPcgjtf4QzRqf5MpxnDkBZqXiUxwYcKPhsq2wH5FKzsRceDVBm3DWUgW8Aw78K",
  "key12": "2GNd9K2A7dKc9X9ru9PgTDC38dPzN8WDLV7mKyMemdDn2enDGvtBcje5Edhcd8agRTXKtyuR6pngCnmo4ePgjZ32",
  "key13": "5689ctynuADNo4LeRz7QDAYLApQTzEWGir3NHKPMz4odHa4GR19JMFfycfyvTt1xibz9EYFkmpoAW7CwiWYrnH7Q",
  "key14": "48Z4cD4XTUpG8j4q5cABKjhmE7HXJ4cFGHH6ErFZM1ok33SB5NuLE9fewA11RdMoF2TjWf9eadZBoXp9GFpkHBw7",
  "key15": "4PgvS9qcgJDmwsETEaLFPfCxRQmBefMRPR1jnUnk57PBcucPkJdfot83HeGrThrYBTr5Z4vWe1AGfZGSWs8jKRLn",
  "key16": "2EtNrSVDSAMmva1oycaoam32jMgNMUrgcoUVu26Fg5DGo1uEQvDZh1ssdx4ECwWMsG6aDVb1PrnWK68HKSzUsQrU",
  "key17": "5xjKMgXYT9NUStDbnUYXqKuuXhEtM35gMufSrnCRGad95iHb2RHL89BCu3M8sXwXp1ozkEVWPQ6XjjaVUygh7gJF",
  "key18": "NdnJ3og336ZSoboTquPFeGdhRvioB3Fo1e9KZQ7AXzAmxhvpaxcz6KWzQBjBrG491RtBqu4qUfZLyBzDNFJsYkd",
  "key19": "53XaFUGz4ncbBjhPRxKZzpRWKo2DgX4ADuKe1MvxG4q3rSiQgcGj8garYfPXyQxmV2dLiqu99Hn68aXGaGN2pd1R",
  "key20": "3eM9kLuqnyPpoA6mcWkkxiGnzWRGCtsja1LtSHdW8sW4Fx41F2vg8N6YSbDwPSsW3wgGD3cjfRwV2BextJ4ZpJq7",
  "key21": "2bN5RbR622ui3UJEzG7XKWd2zYVvnxqs1o4FdUjTEBbrMYpw2cBhqTdh1idGWE46x8PWB46isyKQqcd3jsSXpxPo",
  "key22": "5AgmGjrnxrJmWfPAcreCiP1EnCab1WLbRrDGEBmr3haTq6QqyxMrbEMWsDQG6TeP9vpTSXo3n9c2TJRi6MWZJvn3",
  "key23": "53U5EjVyhkaVzC6gC9cMNKB7rVQtA7hvrmdpKgK7VVKtpg8bfQFUezxhdkABPXD2WJbsoLdcTaYC2vFDAbAotJDW",
  "key24": "5zsmdUXSvVGBgmMveqCh9hSgXSvMmov8xmR1BXgBhiWKJFZJ5J44vaaiJCh4iDd7RXuBmURVQ13yc6ic2nR7Mroo",
  "key25": "3VUNe1e59UoZjDZPSjR5Kp4KPebRs8LZBMmmChLVMKPVueewjjYdLfx6dE1yc2dgWC4UdScbBjtB8YUi6azZsn4B",
  "key26": "2Fh15aFYAQhagcdjuWxQaGjbWuCjcZARgyTBd8M2aY26Mv2TaSeKTfvASsVpxodefDko5w1BXCVXJ8znJHEWkmhi",
  "key27": "TFoy7AesJkUBteo9P4p3xPpr5F1dpezXyJ3DKKFAVD3pgoB7usZA7DUZ4VogCBYobpczh4k2zKa5PebsHtTmzgK",
  "key28": "46AEs4Y2bigMm1t64P3KwSesyTUvda5upFJD9R1PNBB1DVaXMhiM36bWZiz2teLh6ZV8KpBSGhh5g2kDxsN76VUZ",
  "key29": "2TrYfUJs6b9hhiYjVyVVMrSmWhqKmvsoVGQr3qnd3HLno8pwV3PdpZNbHu2mJGRqx4CLzi1omVT7BKiisdSxWNw9",
  "key30": "3tRu3yK6LM2YeKrCpVAitTFJARMEDpcUDAz4feHQPeW2e4pbahXWYkuAg5LKvae9HKQEAXSxrtouWZsetgjfoPud",
  "key31": "98DEwPJ6HAw4NGxZLLESsguG6NaGt6XYfs2kJ1sHx6HRrSXgmKFK84KFmZue7k7cUD18A7EEzVQPQGKkYm88o1d",
  "key32": "26mBmURrbENmFTWBF1sWqEwMYHksZpNBqM8TL6oDPFAmexZLnF2z7QWj4Xv4C1ASX4XbKSFM2WR1iFhGCCnE8Jkk",
  "key33": "4C751st6QUm7KHVnyGWwjSV1WehvkhGgt16LXpkmehE7oTnLffoNCMXDfL7pKU7eH4S3AQM4NLYEX9qzLY3tdyi6",
  "key34": "3iej2b9NBFyhZQubM1jR1HUZ7UBeeKEh9wH4WcMr6g5LLX8fRgFjWmE7Dstqgyp8cPzp3on2yeRtETYtB7BQKbe7",
  "key35": "4uuxXJxTDbuRK2FoAM2RZN5x7iCYPrZbE3NsJCDiZJV6zrkLB1x4QdwPHkamwrq8HzR8N2Ed8iX4PYmpY4HseyeH",
  "key36": "2cV4djA7tdLQjMHjj6vv7V1KiGV1rQhqW5DbCaz2BLCJFpWNjtWMeZY4svP66eK26aBZpsj1VQf2nRRn1S1Q4rSc",
  "key37": "56FVzJR41StHGfBzNf5Bn4CFiAasbNZefYZhTKDguLo4K1gPfaYcXSaq6gWg4GFXThzNb6rdPG1assTRtyFtPQnR",
  "key38": "2ekaxye71dJ3dyLxb1ReQi3zanUip71mpS155DoLMsBj3zGVyRAVpYySjFaZjKvbM8Lwh2fJ5ofBUxe3H5Hji83Y",
  "key39": "4TqvN73vnqPrnp2g1nazvZm98BSHvdw9qDdvbNowLPbYrwhKiZvyPHdhJH8PtfJvNgUBrGRLP3jKbgmh4KwcPu9E",
  "key40": "5f5LqdYFJ5wBVFuAWVe31S5hATMiTKHnq6MvLaN86TdSfwYTGMsVFkXCHbfzneKdgT3gaxxN1VtaCCax74exwo3z",
  "key41": "5TAzdu2y8ZViCJwjriQ7D1mnVWRCEDsQhGcRygfgAUeZ7Mdov3CVUXJjTygzXjX2hqmHW3FFzeoRBWgqEfJ6DAye",
  "key42": "2ypGWToa7Md1Z2reBKjKLZ1oFBSvL13MXGreKrPCu4ranGBJL333QvVHgN3PyDxzJs3W5EHQuaEgiSyynFinieFU",
  "key43": "2pm6KiqCwQFGxjMwNFfSaks1kjpAMEiCciZYkF2QLiMsmJDVeoPA8FiXCGvneQQaxpiZpZQ8FmNywHP9WDpCjgep",
  "key44": "3Jo9n4rtoNKLN7dZ5RR1UsGnJxwnRG7uKtCS6UxGPgdNbEWUGZBLxVULyfsdp44i8fWM5EjgGNcfTcErrFza9jnG",
  "key45": "xEJgpKJFRY54GUV4AW5ZL6JXGXarwRPdzKC7tkssFcbxcTKZDkWV9KDctYn71XDDS2YMYWXWbkbFAMMCUZYXt5q",
  "key46": "5TZVcKJAWUiUbRh96KX7sftLLNR57uiMMhVVaMvu7uWUTQueHix44heL8muahdJh4micP8UcyBNxq6fFBES5XjDq",
  "key47": "o2dxpXEfZ7pVWLqrCbwjNqRKSkKaVZfsjSzNxTRkQpdesFj9BHLgXeiwkG6HTgQLW6FtesGuHyRRiWK1sRJUS7B"
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
