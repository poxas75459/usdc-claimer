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
    "5B4EeeUReQPcYArWgkrJNxJ87SgUGPaWg1cXk8NhyhYzSYinEaGehxXX4LjVaGtgwybrrFGXNFFVBK6zvCDBNxRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADpcU7JH4C7bHcdyfZm2SEmp5Y5Tr1MTstCPdDFYCMqPoWTGV3RXW3ir1tbfg6Zuvdvz83zEWPyUcbkz2LXZd6M",
  "key1": "3cZ4N6waAYadoJoAgoHBZR1hTrfbz6hJvRFrCn5VpWCqqe1Bnx6tQGY1cjbWGGZ8ivL6a2mfZVTHdqaCLYqeswbC",
  "key2": "4X26Naf4s2xJb7Ke2iQYUzShML2S9MBELs9K5vDq8oA7UnsBuQpKpunE5F1E9Z2QBLiWJ2dCqNHW4S7U6sjV8wen",
  "key3": "5HSJjNm34XWsJuJfwmzrdBKhUHj9KL77APANQkofbJk5Wcc99nS5jE9QosvxMywVpXMrfScKYvz7PqNv5hhjTFM2",
  "key4": "3fZY94YZpoCqaiefFJ7Qf1SydRM4fy6bBkDgqErjAKihUVnD7HxY7EP6TUcjEpLvTXP1rMfS3JcZz3Mu3atna6vp",
  "key5": "3xcnxFHyZ4SyL1CQ4LVuwXAZ2oYWSMVhwLJFD4jZ3BVD95fhwbtqnKn1ZRihukGSn27pA1q8Yhp99HNSskukGAaw",
  "key6": "242z7toJJgt4baJMwmAuPikvuPtVsEQ5CGDbeoWrWBaJFcKP7aMmBg4zTB2Z8dftB3EVxfN8aYWxDktXcxUafdw5",
  "key7": "54jfFZ8fHsUUoS5V5uPdPuEMXKw2425UYzD6SAKc6FA1a5n5441U2c3Q7ujkgh225KG7HAaDNe531kFh4FW9RVFu",
  "key8": "3rjLAm32TYmwAkdj5e92CyEzgLpwMgFmhkFfhYY65xDNkuYFcv4ypWURkn8v1hAVoF6VpsknYZRN9Sm5zfGmjPx7",
  "key9": "c3nvvLZpiLjb84z5KadZYmkYNgoZhEP4Kx2oj9u211bcVecrkxYjqDP3f6FC9epTHEsrALauCviT9tQb2JVxuv3",
  "key10": "h4DyQJZdNWHDNLkVBvgBrbNVeoXhzxkFJ3qmBF3U5rjLyY91UFNvyX5dswmvf57JTT9t61K6v8GuVPPtu1o4jJJ",
  "key11": "4VyPaRMvgDnsby8d4v3ZbuGAE1Hm3JL3p6LKwJbg2EGArsn9UUpRtJ41sGY7xnJCxZf5ECuf9vxwwFmBegJG5WBd",
  "key12": "gPHsn8j9rCxVNPFoeaduxDE6zT6nVAFPwA674TgaNWYBrpza5cLacumJgXrx8kbMsLKE7Ax7RLw4hQnv3XRygwV",
  "key13": "UMADUoBTYrUr38mBi1ZYTAZXBsEq5uFsNbL4kNJmTyZz6HGYPsubWf7LdxPNbG7RSKLd1aseCXcwyAHTyTLW8LY",
  "key14": "23DZzojLcEdv1h8RtyQ9nMGSzdVKTWTFgPNcKYPY2CkdhxJgJRY7Bu1nNFhCYDYfDa5ThokQL5JeD8EQEYxTLLpB",
  "key15": "5nY6iShAysLqsVX4sTCDE2fQfdNJhXFkLLqhvd48pZsEtWGM6HXpiP3M21a2RyiPaVdjEBFTfYPEFp1JmPVvvVkz",
  "key16": "2ZPo1cfKiMb7Ss8oVUfMDiUTyjVnvX9QtdQ5gAw4PUvtbEJHDPevqSecATXE1DFzdmXoMg5Cc5cCVqXT47BXsWs8",
  "key17": "3QAUR75dP3VUEmdU64iafyCJsq1w6SnmwfgZdQvTPCxdc1Gmt7KkuumJYPzGpX8ktPwYHyocnpmSKEiYQi6PTbcy",
  "key18": "3Vmwb93a3cQBvQZvZqj79fqw8dHTAfd8sUQLB6QYJYHvmZAFgvdvD9H1Y3geG6mjbt1VWEeyLNvXtBZb5nTBG3Ac",
  "key19": "5KwX7XuFbU29fQ6mRPBvdgftQsQAXCkZbtWzZNh1CgLECFDNWzSfXTSGdz1xUWEs6tJEo4SCrrEEaka1RNn834L3",
  "key20": "2GtBUiZSykeCzpfKKaNJWsphbJ7YiHwEHuv9fx7AJuu1tv1pSoG82R4C4dF3NtRkXfXP82T9CGFfb3eNJSVKYn9L",
  "key21": "5YfKTgFEQvAPZdushtqLXzZ4ejznnxoSp3Ev3vCbRaKXzyXLESoAyqNaKyPkjzSix5uGqGDzxicMgjfsTggLDQat",
  "key22": "5PPbCoQzPEaQCUwCHYRKT5ShMY4HuovZzYw6hLJXqExX4qW3nCGdWtiD7TCU8dk7uaQtsu3D3egFUjuRmDH9cSkz",
  "key23": "ZLrWXAeETMBxG1cqTZTtwqrMf4SKDEo3yA62NneVQYakEKsboZihJpYtRAd6vrfKNRQdq38yT1puWpmpLxnRbwp",
  "key24": "51F8RD4NMqcnuYFziYTTsoBHt3P93Gx8QpcmUQSxxU2xXetGiUC2Dr6L1LzZbedH9cN6Mhwt5i1ksfmfJF4Qeshq",
  "key25": "2W3GgQkrAxzT2ERchWAFYFBpAu13Zcw3v5UMnaB3nxg2yzLLUosf77hEeqJSbEZHq1ATdQLzehPTCibkXbWBjwef",
  "key26": "2sCgy6mhacSExWYfAMpVfAT6nL77C9wWxbKYDpSUt3GyhjpwdfPtsNPeyMSRDSRtWmM9gdKPgUZWhqb6Z1ZXnCmH",
  "key27": "4Q2KBTu8gsURKkhmyA8qkqMmUeXpUu8DnHhk1qyCXkNXUoAkFkAMinbMiCGeiWeciAZbWHL4GVWDNnqtbFgu4zYA",
  "key28": "4QCQjwHxLpMuMtsXhDeHomtvXDHgzoW9bjZRGgpbbJE7M8DsxEnAQTkc2ExfTdCht1CuxKy66sNg62XXpRUwtJGL",
  "key29": "2wzMHuSQrGJKhpeY6LmrMiNZUHQsg4vVMKZxWh9NUvcC2D2rHhVkhvaay6ysddgGThww1y65cfWTQB4FsEtKcdQs",
  "key30": "5ySgt2QU4WdyvuBKNqzmfepxqhejn8d6VEeJVVqrcRp7YbyQKQDLC7ghNxYc4e2jCHK9k3txojhcwCo4X5HYfV2L",
  "key31": "3Ta8DUEFzgP3Rgg398W6h1pyY7jxG8xgwpxLMtS5chwxCsFTM8QvJDAUT4Q5a5nVQ2APDXZRrdgvS61868QuW3m6",
  "key32": "584GkrxBFRJKr59zJXVdR7Yfioi3UqRkBDRnrHWGnj6HG7Tnv2BqyrzWtM1vjzM7kVFJUzXnkJt527VD6Rpmmfb",
  "key33": "3NUnRsPXVyQfLPAaRLXUQaVeBUWh2vG8fnTZWe6iKFBrX2MNbvkrbSH7Lke1opY3TYgot41sffKgCQ7rMiPJh93n",
  "key34": "4hb5frn65M4JBQqUkm6L1dsAKCRCJM8yZruHoU3KPNxcFYP3ayXqhvRRwEVdS16K5cj2Cy3yGyTJY9uSsoUEEih4",
  "key35": "5Hk4QgTeBDpoS3JT3GbrdVH1h8dmMN7JWwqbZis17bjr3Q8KD1Spvam2H1F85jfTmYHWGspyVHfdgNp29eYHPbqz",
  "key36": "3AfeJnFdNRCpftx4SH7jNxdMXub8vkwQP52GsHZcTirR6N1Q8qnGzPaUyKvXnd2AojU6k7csi3XCBNSbYijqzuqA",
  "key37": "2wQsLJ67GVEkThHnzq44C7qtezEnowqrc6mAUcTMkxyJowQhMAKRYUziZDUNQV2wGuruXVuAid2C1jWR9LrE1P9y",
  "key38": "36EMoSLR45bu29Sygkhtk5GfVpkCzdrE1so9q2XFHQWCPCKrN6GmCfkzqJQZkBzqNtmyYkauq8f9MvvCDqLpSerW",
  "key39": "2kXBbQe9kGbFRjUkd6xvM7ijwGtuehHGisUu7SQRkke8uotgj7KBvM2rHxrPsL2xz2QgabSDg5FBgS7k46uVH6Aw",
  "key40": "X9eoukpJ6annhMSBBRah5H3t3QXCYSHEDwZoh2gRm8PNaTUKH2rpG1yj4EnUzRXw6xHnPZ5c7Lyn86Kw2db1YTx",
  "key41": "55V5rBXVhnvBaWRHEStnkJVEPzsZUqhciaRzygDYx7988CANf5rTSH7zLMmG9V676gCmH8UrqqkYgwN4goCNXwjQ",
  "key42": "4Mo4BCaGqM7ELdJLoKxoEbd7KQeoFdV8T3YsauCP8nUSzS6oTyRhgr5nPsjWJ6yyBRZVMhhjNfPmoHRwr1nduHuQ",
  "key43": "3DJmSwLu1RrCcoS69qPU5dJBxJhEA8bwNKDXa7NShJfWeLbxPe1G8oskfUGVLquhMbrZkQxKcZtS5LbHcwZujKXZ",
  "key44": "5BHfAarP5CRWXY3Y3KgkcxF8uBXfRNHxtMMYmPLFHxzTc1WxnVjCP9hsX5L4TxGNZthN6V5dFGRBD4RdWYiA8VBB",
  "key45": "3b2ZfPm34ec3VTGt8KYx2vcd5kep8mWN8nz391xCCmGoda7WL4EmwUj1aTN5QkK2Ua3ULZ7Ecea34dHHf7Ykm1fp",
  "key46": "2s3rPqg2k1E7Qw3B61V73pNxEYphJGfeh1aByjngV5X8CayTBrMGR4L6thg5ysETgzehczUsBfqwm3JSadHVdYCx"
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
