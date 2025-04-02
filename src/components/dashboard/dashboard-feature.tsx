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
    "28QMRwkBHR4BNf2W44kwPVoBmswWmN3HyXYLVonJkNMWbzcSEQeb1D6sx6U9G3jXHoDUd4Y8ec2WfAc2CTe9g3Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xE2qLDrW184VHikfK1TinhqvLML1v4uGLVzTaczdZBf5HnyWHT2PFZNHm2tmTiw8mfJ8vjMMK4dEjyZxHCFqmsy",
  "key1": "4JT2st5XSqj62JuPHMpAmknRAqYVzi84zLV8ywbSAVwKenwX53bBBEyvAcanCTcb7r9Ct6zR4XbCSfxtAydamfDA",
  "key2": "2y6Sm7mDgK8Wjs6je4fYoWzwrpv5GRJi8ntH1Rw7dZxDFDmBJt9rKbs3bx6zr6JbiZb1uytta1kd8TD8oNpPG9Ec",
  "key3": "3R1tjKzvd3xaKQRKhsuViZ9M958P99LyhdX2MxrmD5VPMhwkxu9N4sRrwPywCKQB82Cb5tfH2hQqngrck5urh5Ge",
  "key4": "4YZuicFT8kK5HzQEDs4mN2ez3jUbmzFrUpQ1o3dYpMsd4SUteWUxwo8hmdLuU12qJeniqLkgXa5HojBBCMdW5RgA",
  "key5": "5C3x9YGiA96fb4muNQmAgWfWf5466DR6rQ5YL3QbyuSwhHvWmFfS9h1VEwQRwm6NMy2TYqBB2gKnQMCUyuG3kM9o",
  "key6": "28Y9ZgfsV18zPqXXofdAiodes6vLpa15gf1hsHnC9dp9jhZDVAby9N3bmjcbRMDJuLiDk2vQXCXQx9mHNXE2t6xm",
  "key7": "2sWdTcSKTJWFmgaJy7VNPKmGdoRfgHVqbVwBKo4ewVUsk7y5WPuFj6suNuytJZPEJqrzzu27vNV8UaqdxfqXxdyw",
  "key8": "4nnhLtKdZwp1vwF4ioJV9Qz1j6fEHUzKdHG4ydKpEebEWBAwqC18B7qvhFqy5FubFnniYA3TxAQSiBbrFADH6gyJ",
  "key9": "2MB7nhgZcpEG9DfGWZeFuWFwHoMtBCJcicC8X6k7betTp95A1dAPrU8NbEKkogD3fe2VVKud35pooWtSfwa9EyaS",
  "key10": "5s1HvbKSRKXeG2a2VuVEZy28efqBqPTuE77oh7rxzCNy4kZuUnd3HGHaH6RNgRoxYHK7Xe3TckoQ31GVU9dAhej9",
  "key11": "2nhJgwh7daNFuCCwWdSwZVmRSxBmztLGv7KpD4shPBreNBdcreRLnzbaXWaevSXNxxLkHUNimFqxQvd2mZgbJeyX",
  "key12": "4iJ9WfVu4Le8vpwLwHDoHhR7kE1u67SMKmhS54a9Vcb9xp6EqEQBYmDkwM2oa716gdeq3PUHVKNW9t59vqcjsiMK",
  "key13": "7MZa87fnEr3pC5eXfRvad4tSn1WeAXDCVu8ZCwcwCw2DCFDvVKsZzGEN8gaMB9owX6s4yF9AXikYJgDiZvwZ5SG",
  "key14": "CWoomUAiTjZhntboWu3Kjq5wC2atXnDkXoKgDY5y2vCVTSbgrz66hAR3vGJdNX12RoJ53p62gd3kp4SM7y7axnk",
  "key15": "3XiADnc3j7vMEfV61gpPxgHLT3panaBfPvBrYsnmYQhvAZbE9uQqWaq1GYqUy7YQ2BzCCWnZY47zoDZpUg3pP4u4",
  "key16": "qtqggJuTUv99o7VkcowtR5ocEHMS3FW5Mq3xerkckQ9mBj7yEs7PbNP29vX7Ufm1KLJBDfvgUoyNE5HEN1itm5M",
  "key17": "3Rq9KRdVjCv2XyAPNbr3gymPE2HUtmXjnmULHTJgNUkB5ykEDfKQg2YPRrkJ41TQpsTJ7hRmDqhZQio6mv4V2Lov",
  "key18": "xeBGf9VqRirfMD51UyM5Cj8BkEPzX7aCBYBjzXacYsjDteRXDhbP15HaaH16zrZnKg25K15tuimq3FN1CETHUEN",
  "key19": "45yohwS2HLLFxi7dT1bpkB5JwFPxwxinKsRtnLWeecXABBdKbvB4LiyhyRcjNaM9vr2St7seHJE5WuontEcmgGrj",
  "key20": "2Mdia5NXLPPeLyjMP9kVtjnmYeLk5oTsxBFAMu2AsKTVLMHVLGThvn8Bsffi46zNhFc7t6rY6Mok67TnHqE6S9ft",
  "key21": "4p9yZRwFFFHo47dUzUvdWySCiJf25JCCBvigbpj2bLRxCwRYDUT941WbFrgRx7i3uKYuAsHfKzMWU1Ak6UVSvK9P",
  "key22": "4hrufxow2VsoccLscP9j2uVZ4JZquKcCwTtET4ES1ZuzXXtNwMAGkH11DrCLQtaFG937A249StMCpLyWwbCW11EF",
  "key23": "2nxKscs17s7PL429fSDj5JRJGZW3C24rmebGQ9QXSMnGrF4XrTYSipHDN8RjAhj1znMg2x4xDuwtG8QV2nFwKCyw",
  "key24": "61NAbZ7cTUshoZaHExsmCLCn2DMumhiZuxRcxNx8ZAFGgZK8Ygf1nPPGGmRiBeKeaFuauDMtUZxxPy3GSSg554ah",
  "key25": "4b3iS9wg3dTVG6ts7N7pA5nTv4aZehgm96RsHVwSJ4hFQhdL74HnE584Sdzn7bfsQkeYTQMwvZEZ7wugYK7EiiWy",
  "key26": "4G6JPss6Qse1NGH4hWBadFE8YmVbaWa3SJYG1sY5NLcmCc2ZiHPf3VGr7JtyY1QTzntwqrEHmhiq9YJfz1THY8Wr",
  "key27": "615aVLPkAwvUD789sAKKiYVNAidB6vzbqujjU8f4Bzis6Uhdc7aQbKCEdmGfZgnVBBKcmJQeoQ6s8v93cuj8DcFh",
  "key28": "NQfAXpwC9yhb6YpxmyfKs9iRsgUTbcCGCghEV67JkhVup6CSJ39wforWJHWvPFr1hBVFtLV2Q1Jm4Agos4Uacox",
  "key29": "3V8vRtK7amrWRE4PvYJycXWamqUz9Wt5oWmfkrUaEoT7uvFiNb3Mo98Nvb67f4Jnvbrk1UTekwW8N2EygViK2DZC",
  "key30": "32xVTjhhzsxETVQSLvufby7QzthF32hSAFqTveKv1YhDNQLuH5obxVECHScAMxYjNreqyTvFWw7cBj9NrRv8egiR",
  "key31": "ckkUiscCtNKwmwvBD6Eq5MA1yUZ3fBdBTgAuXpZWkBPdDa3SzDyy22T1KZREDqJRD2QhVuQ4afucWpztZwzZy6s"
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
