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
    "23XhYVDd94Vne81cjbNCE7d8rDwJ4snPt8PQvyAawX3y9ZehfZc7h8Tfie6MwsSQKVK322djFVoKjkYMFduUMgSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJbNW3seUCt3K454qHJJDPmVYrJJTEkHgXKhE6MU5tfjG23y1ZEpNZfDuz6e3rNm4WbPGsoCkpLwAAcUWyj6hLS",
  "key1": "3EP7vSFs1Ychx3AaQ847FhYVo2xxymZZtW5KEuMvuBjnrCesyCCZhHNTqcgdu7QR7MdagUBe7hRfs6CdjKSoLtkk",
  "key2": "59dovb5HpQRH41p3WRXtDY4RBjVYR6FwJGpiYR4PuYJxRdwJEbzcqVJtRymHExisdecHWDDEzc8othNUAwzqCgjc",
  "key3": "5i5PAVnGmKgrFMUDebu1P2PC7TLWHTDodxwhPdWRk3mAC1MKGR7xrLK8neBov1W87gM381hmQjmCgFQQgHrpcn3L",
  "key4": "2mGeyR7raLCWdjTjMRZTwbzdS1Em4KJxSfimKBn1C6dRr6atPDgij1xgMzPkeqgm1SHeXUogmyBMorCDWNhLx6de",
  "key5": "3TFRfVhJW6hu6spfHwsstNjj5uZdnkNf1xPkTRZLjttfmXRNoCPdwpq1h6sHu6ztqaaaE8U13ntxTm4EELb7eVoL",
  "key6": "3qvGXoJQBUHL3iGDwS5Qni5eCKYbN39nEjhcmaUdWsUAuooAt3iownFa11bg2ScVYjfnToBUekEnsgVCfLnupm7H",
  "key7": "u5Wo5f5ju76VrHhyZbBaajLauYGNxCvf7zirH4ARSahLtfcLTbLVX9EyKTT9vT6YMtrByPwCTRSXe7FhwvfvpEt",
  "key8": "Q6mbwc1bMFArrjFUtGF3w9EhCP9eSiTUo3oMf5gEZDqozoBCNPzca48o5eSrECQbpnFxBXUQ1ZAaSpFrviHwy3L",
  "key9": "3pqM3U12FbzLebEMFTmka3kMCp3YrpzYS1bwfCUNr1rPTUyf6Ea8GfDP3MBWeZXf9XRHjGGC5xEADVPB99ZU7swz",
  "key10": "63LMBxiva4RLb6qTS6kssicQy75GyFhyDaF5ztBRNSX3xA8DuUy8YYAbNGcCMRRSUZ1WMS93daHyyJbsqr1XPVGA",
  "key11": "WuLZcdGE59UpwQKXMUjWD2Sg1JQsKEGRUqEfMFApL8FSoKGYX89sv86AeJU4h2sFnHQk5d5oBF5y24GKWAJ96JD",
  "key12": "dNLdgAyikUSr1mik7s6fpGMKRoyHgyQhs3moYRZHUYqMNADtWGMA8oF9TwJij5L2MgwuoFfmaS7z2BR9Tve232D",
  "key13": "3pc8dACDEBBUyrqTgv8MHXbegaVzqjdXCpryJJMHaWNNoCPT3tDbbMhxRTUQQivhxBjmBA1DV65FQ8kebx3qAcxG",
  "key14": "2jfTEhuyTLN9r2DVbCsoTvrcsu3G3toDnkrcFBJaPQZ4Jb1Qw2N47P6odDNgy42gb3TD8MMyRjy11kTfyDQ2Aj2J",
  "key15": "5zYwhwcgkDY2TKd1hWRca54ez8sqTamZGm7NEn1vwe3WjSGhc15KYscv95zvfv9Ex3sMNQtPwM4AWiJ71AsR9oSA",
  "key16": "5j5UoDaQwEinbfDnLBgLEoij2QuQV3ZtjykYVMVCeoZhkW9R7Z6WAGqfXCQsQ5xyuSXFyWG5cNqsxqPETtT6FhXj",
  "key17": "4C5VpAjmyt3gwoTq9hVesxJFExdkoS6RvsnF46qW7XyBDcMryax1yd6emu5ZLhCdHKBVs8G2jtc1bv8zhZ2g3ZUo",
  "key18": "Xodq6tEh52ZoRN1YkWchuR1svTMiMhtkhWtGv9KzCGgZyhmQMB91VKR9tyUGgAPAF1Vz9TSpbHrfmFJaJS6VuWm",
  "key19": "3S7fNRSg9ecj5wR2Q8WGHg2JHf58jxsc9FTVwDmgvSM45GSKK6G9wnJdPWAhvoVuSBYsFuN2U3JEGdryRKNQZbq1",
  "key20": "4W2oHoopJZs28ofWMqVArBDTZYhFFSyqwMn3sehK6WyCpQedYtbkp41ktgGWAzK8KYLv82ndyHND8cbqU1UFXBLH",
  "key21": "5mtDjupgXbbSB9eAMtpm4KbyAR1zYUAUMA1hgXRRz6EZqvhCf7rKcSm4q2Zs2WZZ9JTTwt6dpV6aQHm73p5rJKsz",
  "key22": "3xbTpeZhmZLFpbv23S2xjRWHLDYwVRAb6dkv41okao2VHduiRcoj76gH4wJeFejbNmdd21HRPqn7yUE11wDCsfqj",
  "key23": "xBdXpsRqF9aJBu3tfCKNqhnDTTqYQrJUUg6JZkbXqiuA3wGY6vHpCssctnXmoMpjnNFBzBf5dmEshqtJx2di3jS",
  "key24": "WXRMFXdKFg4u4m1NqUHF3fmntASPqYZZPNcSVh1mZkLdsD5aUgiKRg8E4ZPkmK5moLqDMAedA5gDQzCYXKKMgFw",
  "key25": "5ugXp5CajTZz9KNJDPifh4cidJwjVRnYqdmwmgXekeDqjfCZX3Nn4rxkzYr5M6ycP8d5qDv2EziKCV1DDPA72au7",
  "key26": "4JERz28w6u5uQMQwrUAHE9wfCfrTpDAkkBNBfPnaukrp9XRgjK5ntHAh3ZJ5rWYxEt5A6Lqjz5DPBZqKf9vUjadE"
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
