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
    "5oxSkfhpzwWGFyLDWffQn57D7qtWJ61rU5KxNcZ7PCBbJqG9VzWXUXs9nkCB389yZVmv9xjTjcR65TZmSWhc1a2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4a5DrckGCeEQgJWexMzVcpECHy75fGV8Y7XbQtEKL7QSiSWT2MXDpEjgtideQZ1Qev6A2E8tMjU7u5564UbWzA",
  "key1": "5xV15hVEVGLBvphGNRZDMFybLky8q6gZ8Mq5nopJ7vvmczPrPPrfbRuvoBmgWAHdwGKSAyeZvJkcBsAWJqVdz5rz",
  "key2": "5yEVBhFVA5sS4j37zzkPjcsyvYkogQ7CUV3FVB73YZDPQxF1d3L4ZEKihZT1eSj1uwGx8xWm3kAb5Ad9SkrVqDDH",
  "key3": "4pBJEUjSQqXJ49VnwKjubvUFjwGUacu9LP9pN5DsyLqimUXnnYQNSV7m3DDSQfNASFSA6acTvquDYebUsCnHTBwR",
  "key4": "2WW9P96V9svZ7XHxCNFukYAoVviz7xshfjf3oaa9DB41wAzfdoYUFvePG9xbE5nsmD7fqJLpd6KNVbsDV2BpkghM",
  "key5": "ibnSZR99tJMeDr6ErJoHF4V1mo2aBQSCrsJzMSQAiqqgZwxQsshZ2KYkxCVpV6cbHQY5pk5hZ72gCe266vQy2B8",
  "key6": "5WaRduMHwWR7eKJxoZ6W4mLTDhYvWQPctoBr7owNLDDoXDaMGitvofSDH7eor1Eq47n6XW9r7XgRoU6xh1QYkNAK",
  "key7": "3jiJKNrbjqSePFrkGu1xj2biKCa7LmnB8DNX6fwjJCzgLPRyX7Br2xJpCyqH83SGPdgw9s5jQYZ3jfJYSE1XZdDG",
  "key8": "3rb9cD2z3awRmxkaYPKzfguuA1MQV495Zr2Y8giu4kRtY9vntPTBcASXojy7o81S2sbjsL7JhP7BT3HJh36UrGw7",
  "key9": "2Vc9s7BWo7oQ77WXoPnD7BsdURXqygF2KudHohAmycPJFpH9g1hJWzVcV21Uc9eiHDgPdzxCGa7zw2C3cD5sh6R8",
  "key10": "4RMVvkDYZa67ysupQSQtvZtwd6aqNojFYGqgMLByeBWL437v5WvgM3hr9Wd3qHK8q4T6uKYwDgmgutTEpBUK95a7",
  "key11": "3eav3DJkgdwvoc4RWomQZTBYedRtG6JceH8tyvtNoevbriYkd9VU3JUTTmAbhSTSBD8nZAZiBcAFk7xwqNtwqXLd",
  "key12": "4ey6xXAXNb3f6zEE13LKFjQ5WakGc7zTG1QrXJ2kGSZRSi6J6poPqZ4okTLx2L2yyiZyvUs48p7hSkSGuZ24c9Re",
  "key13": "5CSwXn1oP4tHLeh8HXhHREbPdfaMYavHjo9yA1hDVixFDr47AzaPZ9534d4BC3A7E36qWnXayosJqqSg6uQnhQjZ",
  "key14": "4ip6fcDZRaGPVyye4dXfYZiBG9ntFkhKN9U1BuPB1FtfSfvssVMpA83sH46Cc3UsdoqfE52nvD3MEoVjYQn1UpH6",
  "key15": "2VPfMiLmxmTihbbUucRwUHEFt8Uhyg6WKVsmxqRdKULBfS9w4wYX5E3RdzqCe5YXkgLQyZKHe29wWrRZ9Y4qkeTc",
  "key16": "3GjVMrA1nGedq5BedAgEiRu76HYCMkisaBKyU6B8a6Tb3micEcNXPai7yvvVfkbu2mQEeSXSKdsHD1jsmxVF3qYw",
  "key17": "2zJAsjMuPDoLEifGeR1eQ3R13okvZs3XUqA3Zt9MSAhWB1XfXKyrTyDjAguqYmY8xqGpuosoFLSMEpfKyKaiLJqq",
  "key18": "4MrARGeCH83fp9WSapZxBVp32cekWzEAiQH5pgQxS3efpZatg7HfpvRPLkcKNYxwmBeCnTCxbcDzzrtvKDCYeDNC",
  "key19": "4hYJEUjeysoFjpp34WPvqDg36v83ZDy48g1SDW2bH7sYo6cYKsx4pUHQu9WQVawWMFKCPiRJa51HsyLFYHxAhYi5",
  "key20": "3ZuVrtQZXkRsgb2P159FSnoynQLq3dDgLHomxgzxBboGFBDdhs4Jzowke3QQhXd6MUZEBaWefHksDvRk8FJKpzgY",
  "key21": "54hAYDJzJhfB7jDd5BLRDJmWNyT6eVUTHq1HgorbHYXJtGX82jvaEwcLjt7faPDCvVuMiLBrHpUcHD6MrB28hi9m",
  "key22": "gRCA6gELJUWmr5ydfuXqWcjYKx9xejRe8yHXwynFDrKqMxB8dz9p4bdSvZdSVBb918HQpiLAQNCM8oWhCpBYX5t",
  "key23": "335J22zqLECrm5effMUHq4KiSJdn3sPQcPH7F9kgDpEkYobVxzMRxnQKEWzJiRjEibqzMUFoqQUQt9v3aJeoPQ1p",
  "key24": "4pXg6AN3WHyNSxHMkcNU1iSXr4o39CHDUi1t63v97QYDxd2zqZQbegEHCXy4AFUf3nA2pmPWefZZLA9dPJekZu4E",
  "key25": "TPBzdsAHUEFm5BPcmY7P4xFAQJpvJjoU9FUgemSFt23zKkNQRzex2nzyWGMBTcxW47FfNFEwtk9ebSRaBMtrFe9",
  "key26": "3b4osjmZ4mepH5rAsV6QiQVmMPnv7SfqQe4JLHpqmCCpWXohnE6ujZyyvbQn8LALx9B3o2vstpNHHTmbPGMQcoqS",
  "key27": "5YSABkYhz24xHq3yyhzs2tvfJW29QvQ7Lshi4RvYvqQGoqYXmez8sawW7r6MARDPMQJFnKz22XUDUs6d7Sap78pD",
  "key28": "4Xr7uzZ8qbf3TPtA5gHbwhrM5KWkBvymePmT1QqgUtunqV6Po8GBLoNWcNm4zYGZCH58fRjQGcUa4ei4bArFiJ1d",
  "key29": "3EjWgkGsPbbxcajP8oFXVYq583naNkF9a8MwjN24fuA2ihxa9XLSafmJgE4BS6J9M23WwHHnCj1g72URxX2tcPaF",
  "key30": "4ynmEGeZBoxB5zq4YLVrnBSKdmJPCj4dup4rR3pqc8L4virRBALpQo5sVpRe3cHMgqrM1gToJmmsstffD7apckiS",
  "key31": "2sHJ3nLimtPRiyg4mgrkDiVBxZpTqYgeeZKZRuAV1LaY8QZJUnVAvcUQuVSbXGeAh6VPWDVEUwHFaQmGFfAxiBBG",
  "key32": "3FfGewpLLkxXTcUjw2XVVV64PWtkdC34CWiYoYD9179Z95hfQYT9o1UjtSEUFa7c1djA9YnLjxWVDAZ66KzeVPD",
  "key33": "2gSzRA5w5JR9jvBzAfrxA5w2Su3o1WhidZDi9u4jsyoMa3eoXuAk4Cib6NioPQMpk63PmN9CpRcZiohvpzGpeq22",
  "key34": "45BKV7i1PuHLFkeP2e4YGv6SXRrvpGuANEoiLVk1ZUWdKed9C2i3HT1ue3Sdd91zwkUXvVRJc7j5MfFH8pNoX772",
  "key35": "ZVSWxxxuXqnbFrbzjx3RmWZ4m3mUmuecE9g6u71BiNCdtABjf5MSHJnehtQbb9avwZ8h3DMnUngC8bDDT6MqCbP"
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
