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
    "2dFAEhKd51jTkE4airfjEcbfgsLumuu4uPLkqXjbBZ9Amrk49M6HNvhsEFTuqghiLsE5JdPgDGrqkyCaXeYmkTkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHsf5e6uGUdHRyojaNoR15oZqoeTAfhs6qeapRumJXLpaTaU3L2NvvUVyukQ8fyDj56jSBPQm9PSrGZPtD7JodQ",
  "key1": "3yF21ZPKAFWwnRXsnBAA8bqY2FoxxK8njrJehWibE6Rui91v5AqZ5CjbRC5Pi3wHX5ZUr6s9fvNm47G2i9d3i5gT",
  "key2": "31WMtcP1z8bjjyhVPiz1Z14g2G8fXAeD6FAFka2qzGDF5Znpi4W27JAVXgfE7fJzHvM9vSsToZZJMrpCtkZFuux4",
  "key3": "5qzoJfayiTqhB7kZiWyiB1jKpGN8fxuz39DEW9GpNLFxSRxCiaN6F7Ch1SyPd7hQ3bUuAhffBmXnuufMwQE2PEn6",
  "key4": "YqujHeCrefJSJaq8kFMUY21YhJtyS23uK7yQTvciLmCayyCKkjSRiG8bCeDbrV74pmi2hG1tRbD8Pa8kmxdwpQK",
  "key5": "5EKbscgjB4a98jGAXdjT92Cyp1bHQGeDfKBwNYhCheiX4Jvgn1bbvgKGFZv7jNFnNqbxpxZiuYCxVLppPwNUq73C",
  "key6": "4EMFe62eGDdmKLvVzd844v2spjL9SSXiZYYNJnrZ7VWKThJjSuhFgYbHCzb8ZdJ55uUX3rCWhmekPm1bzU9JWemd",
  "key7": "gAqSMFJDhmq6a4Zvo1huQ5n8LJ2m2w4B55GhoEBYTtiRwB8us3hD193tSmfpLuzPJPMzHUXCdZskGakejRcrdxg",
  "key8": "EeoqfyyEGuWfs191kucBViQmV9QcmpZ1r8Qx4xnrxgrTFR5vhruwjFcxdBBqifRpSDrEA7uwMkJKYw6qb1bVX29",
  "key9": "4SzadAR5HPkpy2rZqLvoRr78AH5gG7ScdQVjME9fEtCTLGtXPk9mF4RnuXdBDmPoP3xmtEUHfwmjrvV5wFxxwjxh",
  "key10": "4fuzfT44LXNfXT8F6bjvuPrectMUpp3naKRnFht829cfVz11RPuGaSbjktEZdFy1Sz8jLDBuxQKhMh5nJANAdecv",
  "key11": "45KisWaEDTJAmc5ebdCo4K8gBrMG98uy3qur4aj4kphy4EyVbtQjB23Nmt1XKEn9iTuWY9By6K5W1YucVdJrxqJi",
  "key12": "37DVqfvMjpS3xJFAC4ShJDbCqEQ5dSZt2x1fzVhLwetubjjKM1KzrPnQZhtumj5u9vVzNqCwxjS9PU3sSxZ6Qpxb",
  "key13": "4mChWK2Fa4QmReNAWfvtidrw69jWJTVsiCP6kH2c1HnaCvkRH1Xbar5xdEmxjJYDNjjiHf7CrSmQVHYR8ax9HSob",
  "key14": "2J44X82tZFocVDojzVYeNVefuEpDyrfYuSwcChWWi1RaeaLk3vL1VjkzR6271NCfdkptuRSwHAjfY3zQdYz1ybbN",
  "key15": "ttYCTTJvSqoSK1BmYcmANjHfaNT3PBTKZyohhaedZXCXKCs1Rr3eLWosUxKPJvDHT4fDnKymhGiBysKav8wmJcv",
  "key16": "5y8j79XmgeAaMJw89tHaXCUViFrXJNXhdjAwGgVywwNoVFUAsjeFrAs8fRTFKzKgvTv7gQtFjaFT7Y2Do6KWoWPJ",
  "key17": "44LwuZmcJtaZZsBYH4cUStN445P4H91FvgndSrRFYdRnTUqcH2WQoXRTUqbYXucf88bfzNQkcfJnA6QLov4Md4ML",
  "key18": "4BsE7cmHxtSryADkXbX5xBDWwmj1yUpn1c3uix4nentKfR2qxeHMTcvdzD9nV7mLwEpDNTzyhnmhmSmR4945FmYD",
  "key19": "2Ztkyev8z5TcgumcML3Bg3K8pXBabDPZD3wrj735ExGGyBs5MXK7muRnxVJi8iinUcV7NjHhF8th6zbnELby7DB8",
  "key20": "34uEiQzUJZiusfvKYeSotYg1jRbx3XRCz9VESsQaa7mEJmNUdhxrGMbCNjnazKiUhxivUFnfTWpBZpj44fF3rtu2",
  "key21": "2XV88Q7nRjEUbhey4sioCTsCvjmR8knutBxCT9PjjjcqmMx1LWKcXKS9aKmp3DPA48YfNXCw2ap1sd8vTHxhhh5L",
  "key22": "5NYR9XY7cf72hvFZektLByuxgh2ZWfBE7q1K1w9fLvKgp8fdPwaWEpknpTbs4X8C46ft9CNoyq3WzaYHFSJLYdyK",
  "key23": "mVYjJnTEqftYbQmX3YtKJodruGhjqkhunNWC9yfzTMKYcNbjn92TFrfssKDVyLsnXet3DJSRELzRthHDBYUJVi2",
  "key24": "Q9F2ZfpzmBZJQb5HC81RAHNUrQUuaMSFbBW5h1VJUxNk6JePugFS9iKjHFaXYG3VcBqdS9dtKugqsmVEb74DvrV",
  "key25": "3jhi2WCWJx4rr5y8832j1hbgnFJwnyWxTLZVJJHPzx77P6cNmNVbtB42FwHHVJxhEUyBysHStuocjEkrXTHGcxYs",
  "key26": "36osfwDEGLrtfJK6g17n8EQxiCdDFgHo79EspZGmMtzaf1YZAeR2my3wg28iX3673aJ7aizYNEe4sRsRecq4xdyP",
  "key27": "4324F1SZVzDhvghdXJx1jdvUpakiu868967MYPhYAwCmBwj6Uiu5URBB8m8FTW2ZWPxAvHAgsw6yj7aVvjJqaaqf",
  "key28": "5dNKzxAosKskAumPgBU4DBtyPfbzLnSdsrJ2ASuD73AzFJzZ8MwucYSCBnG2UcezhDX3oc6Y9d6vhCi7eVydVfkx",
  "key29": "26nXZSkLT8T72beDCnyXtmu4Uy1y2irYFFRTa1Mhg3rS4e322nPrUaJGnevwjDMYTK5SK6K5GdgB3CCmNCGX53JD",
  "key30": "25YH8YCMQbxvUQCKTGyZGzpQQp31zSaV5vYVnCDipCpvcaRivik9Eb1PwxZMe5dSsDpkDCtN4H7qPh2dk9SHiLtK",
  "key31": "2mM9DTwWmRwPXrEFnBSVhGuDE9ALaGB6pLzsdDoBB4eZHMuHXoWiBDrvydLJKd1x222xvfbKKA6Yf8z4JM4jeH1J",
  "key32": "4Qi356HF9Xwsn6gjdN5qsZ1nJEuADkw5LF2mCK9CVTWCfViXJJBTqEdjH1bALPUuUEdoiJg5CQRZYGHyYxX7hyp7",
  "key33": "2s3EWamvikw7dtoAYU9QNP6Xiiy5hRWMuamkDx3VsdYP62Y3EoB8NwNUerW4dEetn95kAQEsxNyo4q4FYmxvxP5a",
  "key34": "4a8WXBoEHZ9Ec92VeV2QzHsyc3Dkf3xWD4bupynCeKQMZYt8PfF4o9U1Q4oejhdofkbKFn9sdJDqcWubKNkWyTtw",
  "key35": "6sCg4wZz3EomFzVz6My8cMbppLs46jEdVLSbAD4fgGnK9Wan6Pg9kvo8xCXspjwZ62XfpmLVSeVS9hmMQ1398hW",
  "key36": "VEH52WdHVy4SqYt5fAswUHK63nimf7WDZQrB81kv1Bx8pgTHPed6brxXNf32WV9yu9i9gsg8oWUnswNfwREWt1G",
  "key37": "3wfHRKXaZeQLYKcCKoaMcMEiTdMgnSxoGmgsBfcx9q9EZw8sHQhHHB2ah6MJSzi2ykxVi9YFScg2iEQAq2DnmWRb"
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
