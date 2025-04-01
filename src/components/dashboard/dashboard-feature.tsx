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
    "Xh1QLUjSzjPb1VSJDniAk2gpFBDQKLQW2Z9K1Mo111PsRnv7XKUHiAmckUv9stjx7PzR67487iBQJ7v9eHnCeKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsQP1bXWCW4SXDDSgTtRT38wGGcXazUnNhoTqUADtavkffow2ttejsKEnWYyMDJbQZ99eDhEqQFEGxzMUohZQhV",
  "key1": "5ZS5oLH32cm26G5Ln3aEokTCf5xzradqbxrcJ25qALWreu7tgjbcDZLEnhsBg7Mi69d9kCQhAKJa7J6H8y1ZtKp8",
  "key2": "3Q9qWdoz9Zgr9Mb4yFjKJ5Kmaw4f44jgLPhbcN31CdQKrjXnT86TzwKaxMfUexDZsM2ibKxRaLWwkYo6b8XPtj4V",
  "key3": "4Dbsn1vpDC1CbwoVV3cNQKhtDFi4FbkRWTLb7n99MDnXhp1y6xD5HVV5CGRw74TkrZFUdDUYb8LDEhbBwdoLJJoE",
  "key4": "4361vKd1vZShBXJQkwFdsBU6jdentBFKF9bzHSVdC3JQHEZ2KYSm1vGhMTiMZSXCbjfV8cMCrQ68S8kcgFMkR1Xz",
  "key5": "P3qTv1vmKyU8RdQBpWr7jNQbJcpjMLpiCcjJU4qpCM39KosjRT3YHGaWMXq9tCPKCaxmBQGxYhijsGQFTQouAZN",
  "key6": "Y8GvBDdqZyKMZM2u8Fz6YDDzK69UYCq8VpnaTGrAdqXdn6Wif48UCoSKzUqRoD4QESecit6ctU6VtdZzqCfA5Gj",
  "key7": "3Zxituur62stBKuUiGsdCpQrzamy8AxXHybNTf2iirPtNhFcBDNcNiSQ3RyNj9PzFi73128MTPhb6tjWLkAhAB31",
  "key8": "5wHrfMdY66oP7N7QeVfobpsQHS5bmAXMmZk2bhPHmjeboKSYwj2BLJPdEvfLb2ciowdRPP2BSzKUDbfhcj6A4m6D",
  "key9": "YvWNT3o3xQqVNAqsRY1i5FwjPWmVYf6WN6hVVTTjHLbBs75HDCQjfQ512evxqEBrV4rSkWcr9afk7UKK6UqShiW",
  "key10": "2FzCj9wUutGpwu23CMvsr3A276TMP1j5FxnxfJr3QhknLPx7hSpmHZvRDiGNguD9ny6F6PHHd9fCmbVSzTbgKVfV",
  "key11": "4ffegmMrCPDZXtjLLWekZ5ve5oXz49QDu1RsntQkfs9q3mZjXaNjUXjK2qdDSRWWRVUZUxRjNcWhDryZNsYgURV1",
  "key12": "4VCQQdoLaDnGp2KAwcZFeFm1j1ibELm7Mjt5xoyrUouqBTUAFPi2h3351SYw4uBihSi7eQyRNVKqvAdurMFFaWBi",
  "key13": "2vLaMth376UHdMFFBoEJo5y51NbHCj4RKD7qnf4mLL2TxDwHji61Q4NqzfRiVtvnCbHmt47Xe29GV74kAYENFyTH",
  "key14": "5qEtzDJpXGPgmEqPXHja3DnuSvvVGtPmwXyrArPGwEUmTMBRR17NfWce2w7yaoxyNPNjRqYEbuDhx4U7Qrae3Qo1",
  "key15": "4M9yDaqaVqG7XWUGT8hmXc6ibg8XJ1ZaAqFLpUbU8weV5Tvc2VDEbxd1PjG6gJKJ2FtAd6Hx9QqKFejLDAaro7kv",
  "key16": "3yxht2abWrjcYb5JXJBCU8JtfCvT8EyY4NZJkqjbYVjLvPtZ7kpNj6uZsAuQVsqenmD5bABjsp47bT2rGmZ3iNhq",
  "key17": "hpSfXuRGQgY8o46yZ5W3QcTVmmVgELpN8FVoJmgLmdnfjRaHXk6QVWmzUXYejfyDUNPGsizDsiJaF92xkuwjPSB",
  "key18": "2kgzBbt2Cj7TR2GA3fDyYrR23CnDySdk36EzwEUhkQqX3SNJzAwEVi2k3hpS8AJhwJ6S6rSLbB32xuD5jYDVR2jx",
  "key19": "3y2GqZn6koJMcW7jPuMLSTAJCyw9NVyXbaUtuQEWhpSuH6dNK4EPWo2y2Utbi5ew3w85kHFrXxYZy1YSdqpkNz5x",
  "key20": "4F8kfE7Xo1XgppzKTRRUPGXXoXPVKUhBoztXKH7fHpiUvZ6Hu12TdV1HSEoFqp6awk4eRouyzaeox7sTuh3DrXz9",
  "key21": "2pBhjkRK9Ai1g84obTmukkRptPJfGAZbcso5nMhybhct8V4mGS4hHAm2zJiRN962V9i6brMNc76Sx5h14FDmdSwe",
  "key22": "2rryQ5T5JsjQCkxCE4z4ukCJ6j37pvB3koErVmjAQUswM9go3rXFeQxZMvsSKwFcz4qdCa3du2njDG23Veg9ocpe",
  "key23": "2Qb1Mf5YevnhhGyBJ6qDCZzM2W9o9ngxvfyvsyqhetYLcMvDhtJxSVGGpo42bZEQVa2Wist2sY7hYBFddJ8jiioL",
  "key24": "4XyMPWoKw1tDfxUmuDZL3TtAqEqY8UM81rp1Fy1TGDutsKXyX3Hsic6vwN5CSxNFpqgqPhYFqnowR8EV2kvDtatD",
  "key25": "2YomKtB96zr3WEjyT9iSPdQ1niso7LTb1dy7A3mBGZRh5TDQUUZ8Gi8hyPDFDNYRHSzvqRJNZxqipHD7TKdhBc4j",
  "key26": "UE1PTRWBTCVCVZj2syiDTE4titwjFPNMLYwmtPpVAbLZjFZuEBidKiuyUMa42wCY6ZRKagGuAEBFKUt1YQNnzmC",
  "key27": "RPVjf8NeCgKz3Ti7SVmHDaiZ8YyiEkUKdhj6CV1rCGF1PeFwskxojjx97DkeNnyuEbf175A6s1h8U9z53oB2qyb",
  "key28": "4orJNbYfkwZdcUdrBK2p8zdpF6oapq8bqknpcHnuzPyTpLgCTHZ1D8RAb8VnAX1pDXsXyEDPT8KuUhyJ3H3vk3Vi",
  "key29": "TcHLJXhzd7nVHyBhnCzCHWV3ezVoaLfHzoJQRqhz2d3BanyTBojVRHV77cSXKxUcK871YQAzTdVUeytxdHB5vXe",
  "key30": "3LQBB8wLNUojApbmDkXHu8y6nNVnAjKEaQMU8Y5c8bhUBuHRA62HCCmj7zX5Fg2ZeEnugaCHTL9UFk45aDMG9rvp",
  "key31": "2TS7EweyUtN848uQdrMoMigKvCq8fXwwx5hhGkDLNjUgtdaiHMK6tnRVWS3BWUrLKGpSgLGgLjVMK12D5pB1NDsf",
  "key32": "642SDmZUd14nkQdZV3L3i2S7TbzgFJ3DT3NDuEw2SohGQc5Pt6yBovYJqR1qbRtFKGJcxQwkRrQZz42QhUTVBvJn",
  "key33": "2M42213YMLgndFPELMhwHNj21C7iL1td4tdrpcoa9RSAtJpPMjf3Y64d3q9ao4XtCggCizTMFwaCV5cmW6r4yFoo",
  "key34": "2mWDPBQGttLeiat3AJEVztmRe7vPpubFMSWYC4N3sdREy8BoL3Fzz8NVV6YpxVMB6A5Lj2guGQLqEC8yrniV8FJy",
  "key35": "2fY2mh6togkDyWxTXh7kcEFUgTpjUhJPfMNvmEFqvCwjEa1h7BxXKsa3nA8h98kW21JzYUQjKqUGXPoCegGE18Sb",
  "key36": "93rVbc33qm96kmgUCfG5WdXzDh9W3QNMs2UPpEH9sSWe2C51eZsrr7UCrVihD711U2h3tF8aF13jrLi6tEP9CLX",
  "key37": "XFo8gcMt7YK7hUkw7GfdmRCu6WBk2gxiHD5KM3R4LBaS6zhPryHLSLNr51DXZ1qUQKjTcu9dkG1e7ZRkfQwi5He",
  "key38": "5cRyNGBbtsEL2VNAm4YwMtSKmm1cJuC7yu6BV9NPct2Jn8cQDSHKpYCPViYuKWaqogwR7ghhhoCGhxEvBFhQQkbQ",
  "key39": "3QrvJBynQZpbui2NQA69f4RjbWKTYYNFRTmo2t4BB97CTmwBGr42ckmnbAxs6zeKntFz8pYKdhyg6nm8cvL5UYAs",
  "key40": "4vqHGqjs5M5k6gameubmGwvV3mfvf5yuSXroxAMPGGKxujhmJCUKDagfUoLeMvwN4GvF6eBBNB2gfJ4fttQoAcHc",
  "key41": "4iQDVH6jMMdL9iibajJmLkM7isSmeRFrgLuturNVxKibL9sqAfsJHPKVJyBwJ3GM6u4ip8erpR6qhr1NtM2U2AEE",
  "key42": "59bVVxKUpMpA9hihbw57T2pUGxvQs8GXLStensabMMvFiRSBUp7jupuPCk1Fqzd4TQcvu5mD6fWAsaPJzkSTCY8k",
  "key43": "58WkYDhc6LhreVHT9YPaEF3Ecoawzj8uxU2QrkPZ3CHSHXvrdGH3C4jRtiXJZCWrx96PMjv4mYn8voby9S2fHr1d"
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
