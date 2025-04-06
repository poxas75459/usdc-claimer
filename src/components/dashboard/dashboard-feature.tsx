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
    "3o5hehgjxbKZTi1aoE6gq8kGc3uz9C5MJ23phmSwQdo6tjT21bk52jZ4vjn7iUbDq3r24LKcyCicVHe154zXnbCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkDV9RS6Dpt3E8AoKEnESipDtBeBCmE7ary94S7M3cZveeMu53o5QpXKv51ACbfyguva78vA56qDLk6KjT3fDXb",
  "key1": "4j1r2eMKG69aN8tVnmMqCrgo9EHFeUvDMUTRNppzhovX32Nt7CPAYP2diJMM79Dfm7pEkFCvNqMjNDyXf6CDxM35",
  "key2": "54R864VAAQphwXbFCWZuKyGjS9XKsrtsYaZLPB527hP7k71VKoL8PRhqgh83rD1UgBScmEzyFhyxu41ZqaNMpHDQ",
  "key3": "4ZHiXpjzav3UjT2mgSeP9qxDio8Zq3d3nrkGG1SyyjkPYAxSaXagxEWVpxvnbV1rLvXNQG9YZQm9cPLhm1N9hMTV",
  "key4": "kjuKMeKUg5ZWW9TxXxx77J9WXnpUxKt2q6irhDxSadzxZoxiKFKxsEdzUEjxfZN4MfNSjFAxDmrxkbRBkXiUnhN",
  "key5": "cC7GVR5HN1SBXttjw7KKVaAsRspgTTT5Ckqb1KFGeAaeRjpnYF8GUQ25yULBuWQjCvRasoEFyS2BpDrwGAeYzb7",
  "key6": "3nySs5pB4DL46UZVXeTCdzANm4ThuZDas9PsgkN97zMu1faC28gRNHEBGCJ5oXSr2xS6mfHvQmWXEjSim6NZmoav",
  "key7": "4eD5G19GkvibZvTF4y6gcpDmitrZUL8MSroCBr4GbZJU1WnarDHYcC6B4vQaPMrY7LsrozQWLCbRf7Joz512LAHg",
  "key8": "3oz1Q6qjAY7tn3Le3KgFDD4QaoqUZZJ5q5Yh9BXkJhnzV7YDb8vW9GN7hmbogvcjZzpPFW4NysNK65McSEsHynTv",
  "key9": "3aRAUsDoZKPwXhG4HNpG8vSvLoJ9znEFjpqhvMgThoGyaFSnWPYsmXYKg5vEqkVLgbcLD6YeQbz4r9fQ7GRfjUeH",
  "key10": "3u2TncfYR85rsvy8kNEYDt1TMo2rbJa7ANizQ6uHi8ouK4FXQAjKWMi8qYVzqTWNF1ZWpM12nUMBprEgLNaEZbBS",
  "key11": "2UDHKmY4CZKfBwfqjen28RYyyq4VjrFnKJRN9WP82yLYSEadxYU24JgEp6LmVWFfF4BLUMMVTBCmJDPuC4jCDLBS",
  "key12": "4f4f8efLRyzB3skf5a4Vb1kWSB1TRW1ktRe98FWk8kwmbi56UrQZKVy2TuxeoVEwat7ibBR2ZZczeh5xtjrNND6c",
  "key13": "4qrChme5PM2RWews99sWyYhSodeBuJqtNPLqfjV54G5fkWj7Hz48jWA22HMVk3G1DaiYCbcn3tsn7PS688vmMPck",
  "key14": "2hdM9chevKZsvertJKa952nSZrz1GDoBpjdJKAUNjPv1jxgjCWt66oNfuaSGe9ZfgNBNFLoeWXymYR6wY8wcmzm9",
  "key15": "UBJSmSJ7gnmgrYVswKJjfZQPad6byV4n38ifpeT1AwyCEmMsVMnQZB3iyeSptwmRa8QoHocWdXkYhQATwQv7XEm",
  "key16": "V4mdqq71ket7hS2PN7EVD7o7hikRTExwqtEXhtaQzAQfWBWxdFpJ5Zd9wPegaAnnrCVWQXG6Xm6u4oa3zZkhdAt",
  "key17": "3kTwtFLHhY2sZJ1mbSrsPJFgUVvqJ7YK3Dsso7MmQb6E98oohYjNicTQ5wJPiwF8NtKhf4icEftm4Yj96qM3VZT5",
  "key18": "2VfjHyKe1r9Bas2yok2SZuAQDYEbPUfZqK6WdgEdZPLUKLdScBf5fMntLsYVwAg8eRXoUBjwqJxdfnKMXvbF3VDJ",
  "key19": "4Sof5LbNZVLDM7c1TDpuzGsnuNA9dmxD3R6DGFan42EQqaX3CXxShckCDREVhFAySgitKu2usbLatSAKgLYR5BSz",
  "key20": "2SBtbYrfuCEynMRb1NhWWHAYCEn4udBXapPf9JPkXEZqaeqUQ5YYxAfiT412H91CdMcxQ3TFSKLFEZpv1js7ECYq",
  "key21": "5Gp3Rc65yzQm3Lhg5X6Xo9LAbr5R3Su6yX6RTUDoud4ViaDMRAr3vwNopqid2dgGRDf8fdLCrfx4hrB8vzjz4zyJ",
  "key22": "25JAciLZzmhJxWN2TV96JbQPf5sF6XZxHS1SSd4SD8GVJMVXEUvBg93iwhigdPJXAJLjAm6sRtYXYdwH2cc34Zbq",
  "key23": "3oCkpqdMaDb4hKms615Xsgh9gpMiSqw9MLWn5bLAocZS5nohT6aQQcAvz6dz1PsQRrf3MPFRUwMsyJcRxeizb6cM",
  "key24": "2JS4XHkf1g2jkVCXbSHUma4veN2kxj8gx3R9KTYSFUDhRvXLHGQP2rQ92xVQb67zvT8yJ87w7uG9QSFM81xYtGZ6",
  "key25": "5LbRoa2VPWjr3JZkMB7wQokVZnDueRLo3wLSPkhyXbdZaJQrLDWw1rU19HoSH7VnkDqpomHLNxp5KB5NvhU1sGmJ",
  "key26": "4mHDvC2E1ijKkgsq5pjiNsPRTpNcTkoSvpqh9w46Wic6uAB11WBKLX7njCo5Z5NXUhKvujYT2HhdzPdgFsYYhpTJ",
  "key27": "3ffXjsePUWSDQ2AhYYMpVk7fEkSxthh2Qf4i8fDqBm2baRxzwy5MQLS8DxJBm56BQt7huTxcNKR1R3Rfn6x12siU",
  "key28": "4wKa8DGQwnoHL4iGLuTLzHUpZqeTY3tmuzp5huToNFms88vjNagVbHkX7PQqUvnmUvfaAqFYeFKFrynCmi7meVsX",
  "key29": "TYcz8umj7LkriEEMK5RLmCBgWPdEWDN2WWtNAM826V25cRx3YCYCkXsU6x1TpfpNoZr7a1nu18jHfcsaAWz28Ly",
  "key30": "4SeGJ1zfCCHZwjT2jPkNX8NCYg9gZCazNXhMfAS3x8ZuMuTEq59j8o3t3GugN68ywEq2s2KXvuys3GPgNBfjvYxz",
  "key31": "3NYNZYnSTuYS7uqbpzbvQ6NiREPwvnXPmkvXnv2wUJsyNW4ZEonVUU1LgNo2nCKmy1G3NmmE9nsCYG6jzH5fHPeF",
  "key32": "2bZydVEEt9WsGxDmo1inpwQgvoPeUo2CM8hR9dXo5k1WAhhJrrmGpRUKH2qLcexNhRMwsHCpjpA1dPTN79UTkdYa",
  "key33": "4wtFJeYmkVVqQpio3tsMT5BEtLyJk4Gfn4L7AcBmVKP9SyNwrwAVMnwJ2kjn57SEDXFzNx3eHyYujHJGLi8BLnoW",
  "key34": "5igTu5M4doEqkTrvoqxMSY9bF4mUFnCnqLLfPmBSm9nr8GTUP25q6jEAedqziCtqX9eAwspyQwzeVjbYi13Rr5Bj",
  "key35": "58jGfLUdknMm6icHKgQFFyDLfotg5SUPVHZX6tvUFG828sMmJaWJNCSun4YHE8TSJcQRKWF5r6PaycwkGs7JjhCj"
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
