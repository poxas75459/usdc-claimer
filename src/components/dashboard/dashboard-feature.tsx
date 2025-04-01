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
    "4gHs6DM4Rh9vQkg1phSTwFcVDtM7QE5kSyFN9nDuXqA8Cp1R3AezTBYy44W7zPkvM9bkdGNGbeHUWrJt16NXwn7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUiWkqKr8b42SENSfaPK7Q5vdnDkqhLxCzCUugL9r96vFBeM3zFgYrYrY3iRYL5QXFiVFmbgX8zMFjca1g6dafX",
  "key1": "5K7eRz8VMSJaatDRTGjbmXocftkYpMsNYPRTerUvb1x4ai3uiQc9wuQgcRDzbQ8JwtyHjh82jbCPCVkE4zKe4fwy",
  "key2": "4oxVqUD1Uv4Ad1QdnrCsU1S558rqKytRz327Q5oPdBCHq9TviqZ5qnAngGdrVp9YQXvbB99yfqtD8SKoiDde3pDn",
  "key3": "27LictoND8mbmu2sbjPTDfnCNPwYH2FKgeXp3bJJrB94cRouFZnSgRmJACPxJaEiLSyDirLZnsQtKDKLG26754zp",
  "key4": "5GynQHo73DPYYHDD5PWuNkTV2YcYyv1Wrvknx2rNGY41vppSVZrbam5mRyAkWwLURjKkzKLhZJ1H6gnqt2HgXTZQ",
  "key5": "3BTL2aqD5qRSpZsSjrnzCAfjC3UT9ercXhXCsuyDxYcJt2zyzzTAtBrJ542MwBCHG7ioGucHLiFZJHBSjmdbdYGt",
  "key6": "FRVo35os5wmPySDnWjWCgoqE4rFW7jVgeinTE6XyfSTz4Hug5Uj4ysgUyj32Z3ZRq4nEQ6v9CJmgL5Q5x18Uozg",
  "key7": "61GkhWMFgJjWBL88CDxiyS2BA23h7g2V31YkGzDA4sNCLJm7ZNLrwcFRWb8jRgrsEzHeS7u4YCrNnsmyC1L9z4wK",
  "key8": "3GxXwhf55G1y4afAVUSBFpRFD8tquqgEyfkHVZgCtJYxP4Ar28UrvvyYyAGoujriUUGbBNyfE9gxm5B65FWW1Qak",
  "key9": "3yTzWcXuP9L7KQGCYpNEk8miHB7QjX77MeY682p9K6h7nrbzeKetZQ2oDRLfM7mGfMaBpfbSN7LoMPifXvpKFoVv",
  "key10": "5PLFJfGrLi78F6C69RnTUPkC78vBHatWSnKNJhzU2nuWcPSmC2mrjs6P8Gacsv3drezYKp13FLhVJTbu1stReCjN",
  "key11": "5C57R3iVyEtgC7oXQ4ZySv9ouquhGz56tWH6jFfvkafShRkHJzYzPEfftTbz1gdwJ5oPUE2oHhxoy6zMDimEQEcw",
  "key12": "3AkSnYYLirdAFqLxHv2RGqHxzUF5dM46q6u2D1kXzqAW114JkzKws1MGUsjK9vWcLBidTuCEqB5KoLWoFSFTc629",
  "key13": "5kLJ2GVy1HyKyuoztsCpRwdC2zoCVGpHPKYDDNbtEfSz4yc6AoX4cCaer8ERDjbdrsMqXapACwUPfvTXiHoN3sHq",
  "key14": "2NdEuCHGXBAMRwvxNfBumT6bKeLdkZY44vf1ETFaHyXDdnJ8XYQAxZBgzYWXuHuM736GTeU4rHedUbv4ra91Mfbj",
  "key15": "36cPA3fbgrzRrowvaAodDdGK76ss7VxK3rEXN7g6FivEK5eVJNAxn9N3fKfQsQ2uTAQZ4s75eqaesN8BQpPToJXz",
  "key16": "4F5S89pZ5wWHAq9e6PDrzaYgKNjfZJhkYE5uXyDV1xds2CpDcm5C4V3ZwbJy1r2TVj6oU8FYjMpAtHasPeR94spK",
  "key17": "TSfNSezJemuGX4ygprAsRpgvr9jxxEZMVbvWVCF8gK88QqDhmZktGzsT2GhjbZ4oC1NWRbpdDDtpNBrZaPMccvF",
  "key18": "uyT8VTRhjJPqARvqBA1zMqknY6tHAAKf8A4t1pCHKyzuaAA3f8qchoKMJpA2n1kuhJzddZ39SaVYUapS8m4fMkA",
  "key19": "2i3HDd3AkPvBcmenvFewqoU41JeY7ZHz7rMFsqGKrQXkFFY8Vfmo38Zfyfk3Yso7JPGPgHDBnGUXhWt6Y5VNbrT",
  "key20": "5WEi8AaimjkUb9owPzUYWcV3dbAJsmaYqmuFfsn4HnYr7kSWLJFSf9FHiXT5xQbpXXScCF6SyKb9KE7ByUyX9Kv3",
  "key21": "3Qo8CrDbs2nJRNedVpMkmfSPFLeaVqkhkFhZHWdzDk36fi8jz3bFZD9iELMMSZvgDZEvCtvLoJ7wxcLo1ZzMNgpz",
  "key22": "cXbww2gYL4Xhaxtx7Kc4ZEQDxHTHYzYWoTs8de46bGKCycjaNng1L5s6NtPYFAXXiu9w1dRTmcLj788uG1mRvFP",
  "key23": "jCYoJj8uQT1PmeRb2pu45Pba8WqSTFkrEjmTR82XSnCAMn6TKkfmuMLScG4eoAtCYFoEt1yjcWbEo3A9nv5ny2f",
  "key24": "5QZSkByiBFSLiiFUh38VS7mk1Q8qnPgmhKw3htJtmE3cDd1A7qSHvs4AkiGEzCG7w2jWeVvGRArkcNRpvf7YHaxc",
  "key25": "3wXkwEqPDFtpch5xo6dgcDmLAFEztYLqvpt3rHC738MKCNQKD5mcajXgbeXz84Ss45VnT8P7gsqAZqmVvwCqvtkq",
  "key26": "fMSH3qEUrrbTbYuxNjMZaVkd2omhdU867ktU2fuNnrqn1jjTx6uUg1QLPEvJLgsPx8hJNqzmR3DxGh3b85vAk2r",
  "key27": "3j2Sebiqwmc7sN1bne1t516tZmXbUutxg3hWTctm8jvMbWGM99MmnDQ2W2zKmfkiZgs33btSx4zba5NNr7YVmU88",
  "key28": "NQA1vE5jEK5WYHtFSWgwtE7n7gHjrtTwQVyg94izAeWxHKmsDyYJUqy2PBDB8j2YWyCGUH8GAf1erakGA156am4",
  "key29": "3NxCGWWpGEk7iLrHuqGgHEzagTrS5dimsaYJk4JYngfakcL1eExqxuJy8qBGz2QNQCvuCy69fnAZW8RDvPCxLzgs",
  "key30": "5yoRYbBrr3KQk79sc8pjXa3hXNspZcKWYxjn3SCakHAHFSZm26b15YjGzAgrYwz6Wu1dY2XNoZfyrPu6P4cAbPxm",
  "key31": "3zu3NcrU3E88MX3ksJ2ddEwJwo5tb1XRWbstfJ3jYkWqok19wUr8zq1dqJ1hJLS55Kw4CWEJyhtLJ5jHMBWmXgH5",
  "key32": "5NdTa6T3PdzPMiKWBmHsxv8WwAEQqhTxfvyLjWuym7v3tMZBBcES5Tdwe24V8Swgq4YyGNp75TKBLoCemyDBDfKW",
  "key33": "21PDdWaFgjxGUbbexRRWfzsUP7bE8KtH7i2aYBjt8MkAqzbg3zX1PfYfMohnfXQSNhDePhBc88WaJM7NvLADLSr3",
  "key34": "4SGYFXdm4Scx7cVbFaaW5wn2uHUbncXY2gmSj1QoFHxmPshT2eSgWavWLLEpyazA1TWkkUX8iFfauBiwzmJ5ZZHJ",
  "key35": "gfJt1gCqgAZHtzRriHqLgFinFWLg7BVXdLtkQUD5bJQD754JvCiBTAfL8GmcBX4jfFqZTQStZ2R3j4ZharUBkSi",
  "key36": "3D4WPvWuFgzK7hnmXMgcwWrhBvfKemeU22F5YaRczcDE43LKW1e3PB5GXugGuC7ec73gbccWDvfcZpTNkwLcjj4T",
  "key37": "2SyhiHjBWHikhLoN5VtTLpNXYt2hUJfgHu4kSC8QSLLGoqJbepHmKDTLzpAu6gMsi6DiQVf596pR6DE5hcc3URn",
  "key38": "5uTE98qssboKNMptkkQMH4HTVAMTwTtK7u4zxZp2kRsUkNiVyxr5R4shhsbQAFLS3vEeyBgJur5jJM2tvnWoERXy"
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
