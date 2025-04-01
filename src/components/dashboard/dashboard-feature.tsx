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
    "VbVpMrQLqHb1ymTVQWnvygvPQKtY6ZTK18WR6eLAduqS3iEbcU4j7kP4XfxtfmZxDCVPCfw8N45gXdRVDWXLY7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRfqNHm9vnAFZNDv2kHaQMeRCKKZqvJrDaEVEMCW922QrdvcK4BR7F1iihmBMQzEZVjf7CJ7Wrou1sWuwCKmpap",
  "key1": "5FjLShE7f41CyjQofBoW5KXhBFTaMqKJDTk8JxQ94tzqoiZURcPEKMyZaEEQ95ZJ5Z42x3Cim9mhtvndUDKRSRvp",
  "key2": "NRixgWephaHoWWcHQUCwBNUBAq7cYzzWNJg9dasHAHPr8pffsDSXgPug2idHnTbpGivUoUrnz1xN9XpMPcshQR7",
  "key3": "tHKGuZwcs2LKy3G3b4mfdcHRniMoJWYuxJdENkTxGfBHFVH2wtqcTuKnKnrWJWR2QsVKFUonb3E71if8fWHZZjP",
  "key4": "2bu9JQRJeKACCkcjwuKY3SYTqXYFscLqXFoKEjb2ubmenCCPS8AruCu6Q7zHWNiAEEWWqtHBkrmHKRgnk45GMHt9",
  "key5": "4xcVeR3BfrjZLM3tFtrgRyHToar5KFc6sAEh5wRx7Uzxy5Kz76KB58UjpJSnsEnXsMJ7nYXMDfFcvpXmVMrtcHr6",
  "key6": "45MPMb25P429BTiuyYUYPiy634W4KJKv5UGQDLy8J6CaLLn2VX3jBcL5vV6QvB3NKXWkdSSvyPJ4HtbCmykYwGQW",
  "key7": "4BktDbX4CT9rpDxTxwNKP3AXxFEWUHJ8E2SVZ6VXeEvSwUHmiBU4vxHDsbUzrLpLKab7DvM49cJ6mYQCEHX72nWV",
  "key8": "2uopMd9k9TSg1FyrogPwEuvk2BJFCiFSFrV2U5bhGu2gvVCSqY3PnVc8MCUiSHfTvdUjVJmTjGXJH1am2mKYFdby",
  "key9": "55AGeFCxk8AbioZtF7z2Db1m2j37U34ZbH5U4cn1dj7xTQdKbqhegvmDhk2WRPx1fc5nV4LpyWhpKBzhz9uySSWK",
  "key10": "3kyuzzouMRHDsaWtofWazEuYqUBJBmzuh5VwWupMMZZus188YoYEgcVUDM3W5hXgSeRTxBRHUs2AJw6NCDvmqQuK",
  "key11": "4iMi5nxG26hmNnqY9b2XNexsnrntrDBZVkXZA7fJnRzZHzEuMJ2iUdQ1DU8NEPoT3nnR7XrYLo3ifvtUfWdWR28S",
  "key12": "2osa7MGb5vm1TRsa8TcCcspZpqLfjk6qQTgtSExBYXuTvXWshFxoAFgnoKGQLC9gakJ9mQQbUwHhCBARSg8TpK3V",
  "key13": "5H3pp83b1fj8spAMvBtHU7YBnqa2Xt1u8vAa6jVVqFCGpqXUGL9WqUXjDXthysVjf3tTGZTcxnUQJZA72CB8cTQ6",
  "key14": "2Xas2zQpGJkzzR81uQJe9pofLPiztTYUD3U8TNXdk7c174cDe8t8CfWKxkKSHQbCPYxXXSYY1WAXq9zfTKkxofS",
  "key15": "4aTawzV1dpaqtjEhCjoBVhyDVAd9BSGHWWSNyk9agAdza2ReLqgSNPZ9Gw29gEWdwQ25dstFFxoPgka5GMLWEc6",
  "key16": "44QLjGKsK57aiU58ehewc6ZkLtpPHnBA4dDUAzDK3iMw3VF9j3doCKJygVSkkwxp59YECmzEqCy2xrc3UkKdApaN",
  "key17": "4wDbzbtVi9acBkdhJT5GhWrEpRkzYJZkqfPMVJE4GYNP4ncyb8QDUYRJFTTe9o5wZtTMRVy6x6FKzbZAncyU8RE4",
  "key18": "55Pd9AoK6XU7785K6FmD99fmwPwE3nVcRVt5XoH12ZjpwAxE7kGqoF8HBjcytMv2guq44722DFqVMJVtF4E5nQ5E",
  "key19": "JyuHpenWDrusLMPCMqsxWSkjnfBSq8qf1hn73KtJLenLbNHexv2c1a8gAJmBC1Keo3hUD8wNi8TaMgbPdvK6Nvp",
  "key20": "3Yvh2PZtgTDkX4sXkdoJagJzgyfNjJSHMEzWjTb2sFxJAL7RfUJ9BozwiUSZssJoYuDVWxD69VPaeLeTM7rbsq3Q",
  "key21": "66HK1hxPxabkSh8FxxCmB67TgJZXvEzj8Xwgr8X5CPfjQfS3FqQDVDAXaTTZRXnJY1XssXgs8emjRJgjPDcJBNUm",
  "key22": "33biUMS2QdS5LVR6dt8645sEqFa7vsZhCRwnfhxy2vz46W9egY78X6ZcFvjRtJNLqWnnhzP2f7PKrEaL3NEabZo2",
  "key23": "5mSFiiGaVySFMYpZzAb73qkpuxfX6DZDAs2tuymn3ScCSRtkc1UMga42d6eRzWDNsTKjckkKuEokS5WiHQUnJ2GK",
  "key24": "4ZyjUDUt61hitUWbMbfWN6z3mF91V381FvrZ3AKse3wLGRiDhAnLFjXC25W3QtkUyik6gw8ARatDgh2seJ1NFa8B",
  "key25": "2me35JG44sEUbCEnFjEHzWoh2xoUjBiBf9rZeEhWETwCJKBQMdkQgmEsLWxdckhSrrp66FiEc3TVJt5q27Yae2aH",
  "key26": "29dJJG3gBaNfGc8QKGt3sivUWGuqQNVvj6F9paVHZMUKrFdWQXrjF5JvfbLZ5hhfmSzyjnFmqQTZQT8SCF8ie5f6",
  "key27": "2dLBmShGdEVLwXDXut9csgDq4idHf5y64CDUT6u3uCnTL4RN43f7HXwUJd8QnPywgZXDK2PBFKrqAhmAw9ZymRF4",
  "key28": "XEYqejs6Kzb4v8muarmVd2bWF4Lr2jGA8HjPHEvGDaUSNtDzBc15mkmgE9N6GKRxszSXwxufwVXJVZas4PMdLTf",
  "key29": "5mQDbvxPpoft3LLhmv9YDUfGtbnXNbhFRZ799TNP8FDx78qfM8LP3Xi5GGxcbivSobQDwRost2czzvUDHXifQt9h",
  "key30": "4pkb6zMB8N98QYraPQnvoYzLG5mqT9cQmZiA8mtA72Z495ZvvqbpdHGfYG5wDsNaqrfMZe3cqw583Gv8wMAwp3ve",
  "key31": "5MQRnBfE5XXXrgr3YBdn9c48iV7gYe44SmMAHv6Rmy4GcAgJyfBpzJuGfz9fJPH7VLVEZR2kHFMztZMDEHQXtMCc",
  "key32": "HKj97JThBRoFaWiFLX3L1RmXoFi5fRvwmEvT4pu7wV3BHdf4ZHdTSqPpr2G3RhMxJB569PKcvuBnzjiYtAvW8WU",
  "key33": "4zwVkTsVfgXxi2DrxMFwhNZiy43cnZ9Gxk4jVCyDBT8NjdfKXmSRH47Kckhg4iFJqQvFHSyKHgreGuZngzbixkbr",
  "key34": "3dXdz4yRNBgu2F4kz1U9v7k4ZaRucxNuEUKKk1L1Jn88HgKyMWo3b6Tjh44FXmg4gRqmwF3ZSQzJzmZwSGZpe5nv",
  "key35": "5mhvqrefdYoRc6WQhz5waKaRCku1zdEach4g6YbxeLMChymPydpnc8wXEaGudnRxRxni3NfC49JsQT5maPhp9FDn",
  "key36": "32Hd9Cu9LTbgVpTduiQjWFXrfWwceJ1Qy4r5r1iom1kL5Nn8Fcg7LrZ2BR7uD3wGMcaXKc6qPEcbkrYKD4JcE138",
  "key37": "2vRk9h9Wu5CQziKiyedFdLEn9rHW75N48xrZsf84KCcT1ySU4oRMK8Bm19j1KnWryKQR62nykDa5LpBEe2hop7Fh",
  "key38": "4yiREikJR1v8SBs6QaZfSSoCUR4pRZyY6L8o1Yo2iRiiBuTofmxtP36i6xkCHoAxJQMitSjNFX6tMe7Hzrqc9kjc",
  "key39": "3k5uNiLNgxArEmyP8K11vuvgLYHL61Bx9qFJXmkZuCboJa7JCF8BdRZSzjDiovznCMVReu3sj6kUZDScsvczcXfv",
  "key40": "4HUsoAnC7qZ3TcSXnkzzdGhM2w878yrR7Zgf339JBFYVJp8EVgWAGNYsfcP7SsmSCrAkBy8Dn3WoTxGPEF282Pe3",
  "key41": "KTX7qxE2DS4YmNoqTek2bNZ7xPycQUq5ZGC9wiCU7jmHDQkTsJ5FFDheWVSAkWBHGcxkuNywkk9D2P5Tm1QLzHn",
  "key42": "4TrDUySouQ9hLL5k8c6N3S6oAthHkxKaLy7eTUPQ7fCvvSzFGqCxCdpJP2GUgCtvEFKw64W6xbk8KReJE4dzJ2gh",
  "key43": "kifz64nXgYkghEimHsx59xW727xuFbEL5BUaGGWvuzocSgYPtofma2byAxjDoQHGnSNhKvxoXAgrFCAoigyi1wr",
  "key44": "44BuWxBQRXcNzqHh9zaKrMecjGwK2zfGXkz8oYp11KD8fqrFyxJpwMFtaaHs86WRz6bW9Jr5hkJBY85oxq4Ym7MN",
  "key45": "4QqRUSVHTU2VDdfTs5AW5mj2629XSahpdHmVs4aJYFRRT2ybpzsNAQXDSQJRi9Qmt9qPpBjvnxYsjMPeGsiqTDz5",
  "key46": "mZUWmFXoFx2oaj6DQY8k4nF4NKFLAwmVQTnyQ9L2JY2QbtL9rL1XJMKJinNAYAH3qDiqtHPLs1kii1ZLQMABHuG"
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
