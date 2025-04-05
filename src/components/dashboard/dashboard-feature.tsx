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
    "4FeXp2HzCgeeutWe2ebKYBRFBHcZYqX8PTtCAskLAqTcewvmPeD5d4XDwV8646ZJ9qz6nXNTVLXXZcVAUi9gwVru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sf9rtL958TuV8TusjEFGzW7zSv5zBvAprvGQgNFKkMhCi16Y2npzhkm4YBrLfVLjXBVMGhM3xdvxtYG7MPgaK4V",
  "key1": "5xhN3v6evfjPvVR9HaF81wQhjyFHnki3ULAZjg4UBqxvBacuMVb8Gusf5i7KTZgi53dHQww3TvVxPWSuukCoNusx",
  "key2": "3aoNEnayikhujB1PrdyY6R4nPBFYLEXoa1D6h72fSqucXZ3m3J8c9CRTzUEoZUwKarvtPtn7SqjwQtmYPfnWmpRW",
  "key3": "2jdwxcM3mHzDPjdVDxqY6KwYRXaVKSmjxYkjbaZTW4qHMBh4f4vsvZSQK7yiW2zE4t3bAFNFRoSFta1rmdpmQCLT",
  "key4": "7RxvE8wL7za28M3JKpLeEqp8JaBp9obZkq6kGCtN2KctUzqxjcbrRpiAZvTNsT5Lv5x3Km1hCMJRKVViaz8sKz7",
  "key5": "4qo7Zq6mhBAYibtiUibN9Nhqc99d6V8sG2qTbM6bQZ4TZPfxFvbLViyNrQcutgxoDdKmxxqGzwqB7U3Tsntynv9h",
  "key6": "4pFxqXCVicTveRPWFNjZUA9MSz9WBn2j6yWmtsfNZ4LTGYrSJ7RmPcx3UnCr4m4LQd44nP51k2XGKhVdoFbCojtu",
  "key7": "4WebNWaSSVm2TZ9LeTycSKGeX356zux56Qr3FchveBAxT4kpttLQnM7KHwWtxuYwRNxvbHejYhnGbyG4EGTxet1L",
  "key8": "JiuJTr22rp3i7CuJpAiCGW8jXwq5UMMQKqjqbyCP7QZa3oj7HxX8U3zw1NPYSKYKF1TxGSGMmbBwrcDyxEUFUC3",
  "key9": "3vDBLU1AoSSc6xpF9cRgYhXTaPcYtXczpqw3gYC9shoxoF4ucEcaoBDHTykVqhAGRQq6ZwPcomHtC8osk7vKZ3Tp",
  "key10": "42NhJAopaKSFMHwYcY6vgN5DqftvQssZnK3q23tpPtBX9vbYatigCek2uxVRiB6vjLs84yEQvrcKsiHAjMvikTUq",
  "key11": "54xJEHh4A2oSUkhHQHPmNDgNH6HeS2bL2tLmCTQAzsaxMvU4aadXcuJAguMS9Fs9EUAPGyw9iBZUR3GTUDKH1Q1D",
  "key12": "2GMtPYuk2BtskyC4xeiCqPiHm2hbkWtnJLr1wipzNRE2FRK1NNSSEiBsYnMAT1zkHhkQgAxpjVSAWapan4ak9fix",
  "key13": "3T361SGUFXAWYSDD2iXjoChHw8viLRhjKi5C9B1iFXiWLZHkXxmuFbQASiLCPbRY24iHUFRAuG2433BvUCv4gGZ3",
  "key14": "2T4Ks9dbMPmDBwNyuca9Cnrq2PbpjjTQkTSVZrqNFmaWwpbxEQWCFFnBLEJFR8P77ueP2HvzLYxKLWackqywhy9H",
  "key15": "UHmVpL6Xwi1BoNmPPUotUVdAGMuMcC5zfz9RpcDyzKLC3vUtR8Ao5Y3RX1bdEkX1w6L6RoLMMoqJJ9L9ZD8AWkj",
  "key16": "4HLjtX4seKpGC2XAX6b6T6msuJU6MA4tep1sv3oGozky1MQPz1UB3YkMzuaYeBke1trCY23Rvmh8dE2re2CCJrEB",
  "key17": "4S6cmEugcsq7h76W9ogSnFpLE9z7BG6ZcEEvxrQcjoJQXGWG46GrRE4qBHuyBu7SxXD55av7vHFodkmekZgJ12YS",
  "key18": "2TFTky4CdE2stYDbeWk14srB1qShcaeg7QEyPbLNGCqgRVpwGdMQLtLA4S2wxFkyRXZaUFfS8L6mJTufof2PhpXY",
  "key19": "CSGAy12c65xprqh6kM1VZphmFXRCk52QpvXjdSEQgRQLDRSPDhwcpXWzpogTrfPVz2ZVpUkMmzbw2JagWSDneFp",
  "key20": "5CoXwaoVsggHEigno42KcxmPBgG8Wuc9ycDxsYRQW48rH9d8HBhxRQqmPRrkAUVxa9qquzfxct2irsm1MBFWeWZ6",
  "key21": "3u5wTBrfCyu2etqZmxYdTLJ9pfbErR7FAUbmNUvFzdbcn8MW3sQEeRT1UVQUDnGj9JeUqZdgWhRYnS92451aNjb5",
  "key22": "diqbtjVL9kP5zJV2YupmhQ4m4H1vPErRzD7qXzempzPUu4jvJibKNLZd7fTWvwU69mRTdcx82bFfo8AxGFJumMW",
  "key23": "2SDKYHaSez8n2YchYKLY76M945rzuddVH8aa3fDfXpMPtZ8R7xh8ybCKrApoefUmLysS3tF2qD3bmLHL1TJioMx1",
  "key24": "2CcCA9nWexFmTqY5Xb6zX2Tix722ve3shneSW3PG3FDy33CZfJnr7bhhT1HA5rpD87eBsfS3xYhwr1ZxrLYwSwr3",
  "key25": "WXXJcnbCzdsEsW34pKh9oToXdmKSeTEsu8ruDHMf9CG132kA1t8DKEqvEbCE6Azi21yUEyB6EZTvHg4HUQWX9rU",
  "key26": "j4cH8Hq6D3H3pJwrq7pU6aAkxgAb3QjcJLsdgsCwQCEEiGcePcSpwAGssqzG6fTprXapiBKxM4LMeFmebo4f6vq",
  "key27": "Xtizwm89KUjrLSzHZwvag4he7JQwKtnmfZxeerADv87JhsA9sNrruP8YhQCRuiawzfFs7WNwzhXfMzQyM4LiZTk",
  "key28": "2WN34cKAXQpCCVMLqqq9EKJmby2XvNLdm3XkLPPgDcHRK6AsVMruSU8ke3TWwwnxXTaHMTE2H9MWg2hQc6aM5hpf"
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
