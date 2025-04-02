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
    "nJWUTHnpuK5R9agKTubLhBnQUZ9WpdNzANTKRrYKvf4TRDEHpA3ndFy5fK3MXARQDHhdkNhXzAnrN6pbvMkKjfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNvVs21vY3F6EEbxPVwgXLumqcWeMC9DoG9vAzR6Cn6knuiRApFghBULHSrPeTVudm4vodJBhEFjx6oqKyeEnYb",
  "key1": "9vJDAEpmXZ39L1iJd12mgQ3Wk3aji7zqx5ZPrbusVq6H3SVpB9JGmTGrk3MKKYZxpZ2Xqns5kD6GepjaPUymGeD",
  "key2": "4QtwamFhNWq8H7AwaieZEQGCXwYPJBe8Togaz3jWJEuK7sYrX13C8TBNMPMXcDNXo4ry3i9iZcFoUJ2bpUwjyn2x",
  "key3": "2C2aJEpAT5yeL3bjdDNwc8qTjZq9CiWMnwqAUoex4T6G5RXWJhfrFLhrURGLS63BhhS69hmoCczugpGXenMnffZp",
  "key4": "2HtqaAT8D4rKX14EBxfkZPwrh2xaERQM7E2xBkGtYWgPoyPA2Sx2YYfA2hwMbtKJnhLHJsMxUAQQfAd2gjXHACpE",
  "key5": "2t6MBEui7ne8Rw2FDafAuhgwJmmdxnbcS2FGWMpaGarHjcDVR1x8dWsr8HUCUS319owtUjcpL3sUXcWtJYo2R4R8",
  "key6": "4btcgHGNCbEQWXP8RH8p3i6fVkH28zsKFMPqAyqmMbUuThX6qhNNVqaMzmFLJ56RNtBt15xRSXVoa7cFihENDkx3",
  "key7": "JUfrdXuw6UizJ6RdFHXgSvJRcxkjEARfqTfyZNk64CKddwqMKHbdMR4u1ywEkqtptr4jeuyJkG95FwUSJz1qin3",
  "key8": "3nmTMhvvQsdKCCVM5oQULz4PLJVJan9aRjKvHsTi1y8Q3Wbgs1c4gA1mm9s9GT7KU5zqS9yxYJxrEm3336JVxp1J",
  "key9": "opYReS8B314v5F9Ko8oBTLomgD73zbtYCFDRprgdScaxutQ8LByFmrkiRAvuG8oeGLpLh4cQZwjJmTRL4Eay5ud",
  "key10": "61Wa2JDR6adGiaYkVptvtz7YE75Dna56EvqLmDUYQVvWVhteKtJ7ycnDQFnvacN4jMxF9f2kB1zc8jzC8ykXRf4R",
  "key11": "4VbCtMXXumbX2R3HkwxPhbvW6SP85dB16yMjGAdfW6QXJmss5jrrvajzgA4i73enSvhnhveiLQ5jqSQgiJPdKYVj",
  "key12": "55zWMbobfpzahioxKm3dHKCwWo1Bk4f8n49Qb8ruZ2xvaqfcpwu2FQUWv6omFkmCV3pp8QTQ7zq7RwuHX1BLqLNs",
  "key13": "2u3FZB25fgit5hHYZJFPQDuhetUtCiGWcPFMtCmqYVPpSJdCT4iq2aeV5pXnnn4GGEteTDcxUD9CkXHospdrTjx9",
  "key14": "3Pbd9KCiGUqQu8YRYkW6y7iR8puboU8qdP6URE3x2UMKCjSDMcQy8thhrwSoYkTCycGjzLXGpcVQrTgmKDiievz2",
  "key15": "4aVPUAFvrqowqoF4ywFbBVTfpvXAiG9uFpuPZKeV2XzgyezHk9MWPRdYGPMKuV3nJKpDKgaSJmyvgS7UdtwwPRjW",
  "key16": "4MGBEymrqwfidMPQf9FobtW1fyeGdrvx5UwgaKPurWCqTYvBttFfnBKG9yRFd6bpVjB7RvBYschycBJAanqPcdKR",
  "key17": "6KA1jxi8ZXDqLrzYFMwNmF33zhTr3dc4XZyHwEDiejbnecfSLhbrFubTZ7dfKro7DdKS5mqQvoyezkDa7CDGd9r",
  "key18": "MWyBP5KAf8EHuGKoqR1Zk9Da1gLUYbtJ6j61nAn7qUFGRkmDJgehGuzLncqoq5jTQJTqFJ87bxzLv2s4FTiLavx",
  "key19": "WjndjwJfJe225Saxv35RLTzrfMM63U32xzZENDHFKf8TtVwc99Fav8dkzQjnPmeQMxQCtDoUYGpMwWdGh6m8Mk8",
  "key20": "3tGC1xez4KiHjgYVoKCFoC9SpcQWLBgkR3v3LvrL3SERHHxHQM11Hzbn9LMhLtL9baTfAd5gz82x3bUVEF77ggma",
  "key21": "5BpTHsyTsUhvicEyEhQZgFqZQqHNegLFkYqHJp9Pm5MoTEzxCxZvTgh8veyw5kGn7BgiXUNhdLWZ4tNMMi55jHgm",
  "key22": "3NZdWGQHkRvg77ahmsQM3c6zN2GAU32sDko3nCFpTJFTqapaxxP1oPiA1gcWR752EC2UbeGhCYamb967VHfUdVvX",
  "key23": "iEK7sVphVc3qQRtEP5YKywHGutBGp7rrtpBs9gV5RLbVQnMxtmfPLV9TZ1CndYLAeWoDKcFY9mCNZkGuuK7jxgv",
  "key24": "1263yzSGPFmZaBiLoNebesGpz1th7SdfnL8YAvfpwjWjdaJq3gEfAMWQ4bM9nZa4yQKmC4iJbL6sEbgB6ZXZrGHv",
  "key25": "5rnZ2kFoBNDgumGFJv6wY3EY3U3Yk3RYhJzZFDqKdFjzYkm4u3CgvDtHYMSQ2wg7c2gbw6pBBKbSvY9Hz32fLLRc",
  "key26": "5faynunEbj2u9WaeB2ioBQJTTyhVeYq7akbxqdde54XPBwWvwAtinJArigRmULpbcH6abaZKEUhjkUjFkv7nr91h",
  "key27": "3KgMtfnFJtZv14VoJWZzx8drkCSrmk3nxBCZvcA6pNPsYVLf7keC3ScrX31AmuYsZnJS4vgRgprnHysXehS8XgxK",
  "key28": "4XVaRKUQsSbPUdvvTus9VxyDnWAqnNVzjcvgx1hzRBFUdiEL4tvWF1yUF5eMEQNxo7g7jz2vTeDA6VJjZhecpgMu",
  "key29": "3q2mFK8fenJmayUGdRe6iHewKsXaRsHfKjR6C3dbXH5snd3TrNFehViZidhgmbrBFRFNfan1L6LTQdsJzKVTdQB1",
  "key30": "4QuUyLGUXbFDnEVc5nLQJQzCArg4GALkXSex6ubNCTor2RDBCdwLHBdh7s7X4WyAgpiUfW336CwvVwRvUWdrjno6",
  "key31": "29JshocGcXHFoEV7zRZ3WB5EkCc3iSdtQTBZPMZyJXjCFYdm39oS24rHmJ1KptP4cAP1PhBcCSvoEPgaxZQ6RHZx",
  "key32": "3jsxQGV281qQayncby4dgNX6XnsZRux7sUBhd2TNeLgbH6jUVrUQNUVXyY1NYzmzvn4ccH2ZjpCnk8niTQ8pNtmV",
  "key33": "YXzx5hgHFh9V7genF2R6gc5MYepAukXTHB2BNZsX7sF5sWkwfMrsBnvCHULvpJ8Ay8nan8pDTtzZEzhELcFZxAA",
  "key34": "536MgDmeMfAZdw4w49ndVzKCLHZULK53MwJToPfb5bYmpt4dRx1tAV8xgz84Ac2cg5kfC4xHdFcWSxZNEe48gJQ6",
  "key35": "4gx9tD5KViH2CHVoxw5zsMf91JMUY7Kcf9try6tdDpQLMR1uzgRdzgGhrmo3m4YQ3SRjmx5p5dzxRChZRxVL1qDw",
  "key36": "3DZRS7Ksawm77L6ZfbmkgEJUYEbvHJpJrkLgQMFVj9QknbkfTRWXpSsGREv9GbrJB8tvzkFST3U3ZnMYAspJArps",
  "key37": "2XB44LLdxkwngLvkeVjFS5nqw9EmKsxyDaHuoZkoTGqQDHJRRFxMU7MksQZWLeTVjNQvHPgo8THWHhzZtX4JkkZZ",
  "key38": "3SPuFnKN9ZRGAsCRK5MReYdU1NpkBZWcSAH2gswUktgq4ZTkgWy32XDdzJn5Cuxd9kbs3ChACDPNQAD4Lyj7JU46",
  "key39": "4HKbjN1J1Rbdkdkv9EQV9cBd9pTKPb3618D68Qg3jXafAu4PMZrq8FiB4bekBtzSkWWhu1SUy6hRaSf7RBqFYEeC",
  "key40": "53iPtZ69m3EZkhJUR1GGExWFCGYxgo8WCyow8NS8zxNM5XLmcwQ94LjAsyeBYhiGwpqtxvNvP1SAdEwfnNRKtSXC",
  "key41": "2ediYb7BqYuSznMMbQRmf6rQf7CopDgz8uZLYt4Eo6EzyB5mXDkF4bFxjmVfGWNzAcs1scFFTCy3tiPvwiJXkAqD",
  "key42": "5CYqBe7KTaeiCwDjm76K788nnxT2Etbu9gq4G9YJ41efik4fMUwj1dD4Rr3cc7aqd3769FGpeAFDyXDKMGSUj3Ja",
  "key43": "6Bk9LXwnBfx8tytChNfXmHjWh9xxyaVhom8DrQRzSnQHYY56xF8cSTw8WF3WK6CwSWynFLUkn1DScxUS7wMUZBm",
  "key44": "3wnnUAwbGLVinqrfgmYdh2FRSvB8oMmWV2V12h1QkdPgBhVi3P1mkjeidtGkEiZqxBBH92jsS2XMGCUrJWc5y8US"
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
