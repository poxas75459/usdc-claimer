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
    "3TXiwamLYDhQY8611Lecpdr9egs37wEh7eCxtBfhCt6KqTiVm1NHk1bCMGKCA9CQtbBA38Smz7qqCa5YNeiiKZKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e4oX5DdTiAAqVSSzXuXWkfanN4dBCFsFBqTLkCLCf7kbhEaEJ3axLR6ZXnvLuRStk7wwLw621Lyt4655i45CzNu",
  "key1": "4SsCoV8Wr9YJoTfKk1JwtKYcpeVtmeBNadpksdV4QDJuBmEYCg9wrCPWe3xoFkFZg3XPf8qdkahnR8pKaDEviH6S",
  "key2": "4qBWCrjaWiSfbjfdVS6EVVtQDbgXCvuoHhvjXTWo3J6GDkf98PRyGkbhtbsdCv9gnkfZQERvaZh8srGRiGCuN2Rg",
  "key3": "4pmusWsqwdRfuGgkyHk6RwBZQCxguGZygHt7PxH3BhfL1dkXNxsXitG9kdEu56PPFW6yufxiuwAz9ViLUNpeWH24",
  "key4": "43q7ATAsKeDX4hJaBcpFihtp2e11rbZ8VanWPoxVCjAKcGXaqCW4sBtapkCwsij8N7V6iZ4orCd9p6QG56VnPtHG",
  "key5": "57hTnWnZv5teXQAHhDAeaVpUqExLiDPoxeZkKimsAKvGw3qXidHyjVtkLwAmrFVwVnMnYxMUwrcV8aUbXzXX7coN",
  "key6": "5gGxGPF2tvZ4uTYjqNm1KCaC8TbWrL7CzWs9QNQzEnNohNJ7f7wsm6YAfgym3KyGMnGaeDCZh1qydLLNHmjaozWp",
  "key7": "2k1pCqyZ78yjqY35FFeJ8KiePAXhCdPeSYUFsfkXSMsC83Nxn35MX6dH6iXvYR9Z8Ht5Mc7e4nBb1WjdGMXoicyD",
  "key8": "ooJzLB9iNA2NuRTRF87Ee7SZFQ8UAMDfu1NpL16btziHNUfQS67MayWp7ywEBbMf7tAh3ZiXkH4pmg7CeYkeLPb",
  "key9": "4KGFDjrohizy7WgnJpMiEiTtZsNjyDDZUGXufJbJaDWREQpxJPguBXE9x2MaWMi6D8nJceoebdcRckDsKG5tXmbC",
  "key10": "4vSCUK7VK3g7LcdE19J6yoRzTrCRLahLUh4fibJyCExAmwyMGPpcDwwVcYXauhqRR6AJRdTmhvVBghTzxCaj8E3X",
  "key11": "632kkf6TQcRkqRyou2C2RprGumH2yAEADuXkPwVAbGoPVvqGUTjfD6spm8rCxteQZBoEvmuJzC5dfH3d3Zm3wisc",
  "key12": "2XBUbyv4oQD4seNMv94wMzQzrtFLBJR7sLD4FH3wa8jDqaCWN3KF6gAXM8WcGaSHwR63nSb22E69FGW36rwBSnNS",
  "key13": "4Ti69oUh9SNcDTAqFVpqGaN3yH8WjucTBDeqZMsmuGaQzM5is5ChU3eGkzBaiyKvShBRMxoHXrPABrWmmW9MAThe",
  "key14": "3VkARkj5LpuXLi3y1Co7QtpMHBsBRZszpVdFcJXxbMduJXkYWn9RzafthKpp6beGBeeTNiifGJMx41txt6LH8d8a",
  "key15": "5F1jfqN2qVo1MLfGpZAnLRE87NhY2vp35tiJ191Xrwe7FnRKiduHrapX49kXWvV2eZ9ARg9xVBhB4jvm2oY6pqkJ",
  "key16": "qrvS8ottXk3gm95PueCxCaWyp9r7RmD9pT1aziW2eUTswLiQ34d3LHvs4YeNaPhERshh53SZUfPDNqRfFGfKCpX",
  "key17": "4BYjsY63QRYeVUgXbi4zZaP4AZGDUEhhyxN229W5NyFg1zEPdakh842HatEfMuArBg4TuKsxrSFE5ZmcnV4CMLJJ",
  "key18": "V7wV6QX7mBcWAN64d9yZLcZcnBofuJiqFZpmP8qN3R6VhCq22MoHCtqaUzRrVjVmSAypwrEEgRrFELmuMzKN7Vf",
  "key19": "exEs57WBDFhtQvyPWeCBcmPGWAQai9pqrAqii339vNjWSfhUcc7DLWTHJkQRWZs892nqAuU4WaxNQa8DVnwPCEj",
  "key20": "5PifajCZcoaVnQYDGhETCH9vrvTZx2iQ1Uj1j4puPn1KiTPQPaWC2io6YgGaeMzGrGUhXKEEfM9QkwHaxdGGRCLj",
  "key21": "R6FeGsrP8iDP7kLi5Ju8jKyMYvriU6kEFaXVMgTXLeQnkEfAcBC7z9VW9c2jcv7xwEKUWAghxM6i6fcBtdLtd3u",
  "key22": "3DW6Rfj7VuRK5ohuxRDR4E1RZ9jSMFfvNXHr8VJh1dEKpxW3WvdkVQazpL858yRCRTPmp2tYhzTG5KYzre4yqZcs",
  "key23": "JrdbSQib4iVswsZ7ZzTuMLEfb431GxJjj3six7ki2ZfWLSukBaHe3GVjJyZfWjzcy13hQ9XAafjmo6ndiUGLo74",
  "key24": "4AELfEcspXWHjeXxVfKd5Ab8qrUtniK7cySpndXCVvWoGLuSu2R4KSvca7iMVnoNvUpuPrGzubpszuKBMzVGQW1B",
  "key25": "38e8HYCHxYFbvBFuAjBgnEnxhtRgwDBEshMfLKxTF9WLKJjsnFcccnP8iVwaBFiLbGEgtqdJDNPBbxmBPHGgaYb4",
  "key26": "4fhFAujbuz1h7y6utDWga9ErkgTsuy6VNFK4KNWpXPsax53nK45Ymi3L39NMoXLQkpx3dq43AP2P1iawt79EWD66",
  "key27": "5pjs7bF99gmMxk1e8nwXXVeErrnz2M2WUkRdGdKBq5nMFRxuVLB66entnYaFNZcU99eLzWgoy3mJDzvs1GgZEAUx",
  "key28": "4uLeiFS2UGE73HeZiupo8PUrnQZA2dp827yTEK4y1JFWSd2fEkTq8LDsz3bs8paKwpVyN6mPbHC5uGqF8fZbATmY",
  "key29": "58BrSFYoXxMBF92saCUqGbukL48SeCYp3wRDgBKuWXaE9JSmJHU6NoU1TmFNn1fir74ZjbFAXmYwDrRPUGBz8298",
  "key30": "HQwjSieAnBcQdJa9Ue4o9jaU7MN5htSyBBSetVfX48o9k6Zuqez53Cmm6GB2WoWGRUcjbZd6D9gozZbomqC94yK"
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
