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
    "4nVRRhnTcQWF2xCiS7XwHw3PNizGpRvtpEgCEHQdgjbbxk484WKJquvCX2o9fP9M5wSF2SCDaUGEYwCKrB13C51B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wyFF6TN2dBx8Zrav8W5t1Y9GMKWkVXzAPS1k3gnhX1B8RYcuVksjti1vsJbhkVZ9w85pLetxBMUWHUzaeFjcjW",
  "key1": "5H6G64otmcJemT9aL4RwQedf6j7ZXU8kkqvMCwXujjLQpfC84wGbsUn8FeboG4xsaAMQNdu4FVjCtWpPHXirHjbo",
  "key2": "1VHX8XBRkg7v2xPCNuntBUfeSGbtRXrPBVzBWfMR3mC2uHyCo1rfcwGbWWZkHwh6fyFZRRpXH1GRzpTqVFXL3Mf",
  "key3": "SPS2kADvsBkFKkNKJitavrBmpDgu3gnmgNejb17UJWNGvTdQXbcDYkyVyhU8sNLeUGWAqg8wsJcGbs5aDKmt6wC",
  "key4": "4FebWYdhKMS7YN9oWnM6xZwa3UMnapWrMnLxtVbSBVzArnGFXKPDPj1aXa5B4AFnUXL4PkdGMiopAYsAS743AJZb",
  "key5": "wC5Dk7dT8ZzpZMaSCVTDWAp8tnyht4eudvwEESZHXH5fXobDYymAFTP195VVRjC8wSRqTbZosnEL6xay5kr9ejq",
  "key6": "2r9MmQZTwVSujH2MehQ8aG2QLhmh7yQSPXdX7abknQkE86tmx8UWLNPvBo7WVWjpHsSmJToTFdwKjSijEYu6V5jL",
  "key7": "5fnqA2DLeEFgJ897k1WLBu6eSvmrDoCmVHvAES4A29BQQrFo7BGnNJdT4Xco5gYrKbNwYf8Dv3uJRniQkdEs45ZS",
  "key8": "5aEgLCk1rpQAUvBtwMjA3brTmZCWcMbK9CupfWbhFbGK8NYmckWJ2sxQf23p1zh7fVbfe1WPSCfoNfWm9vHNDtrU",
  "key9": "3LptfBGh7WiAgPEM31cWcddXycoSTcCxqLTR5ms5tWLujw43DmKPK7eGoqLqZTLLLNmh4QgbGTfNDZPaK93eQo4j",
  "key10": "54VFh4VA6bxC1h3fMfVaHLc3vea2pADkWcv6zTfco5gNMoCtn95xJBJCAHd4bJ1zUhopX3kXc84jaL59DpvWDBeY",
  "key11": "LyqJUQdEniAEBGCwcA4tkBiiaisWMfX2n8xgstrnn6AgormRrFQyow2gxLySNNJysMh929nPhSmiBUXaHRy2Dd6",
  "key12": "RAz7Yr4FiutiofWwrV4cseLUN3BfKMtpVFNnJCJ6uQmXvEHvgMBguxt3Bn86v5idwLqNmCjhkxNn94bHAdf2kGp",
  "key13": "4wz5cooeMz1dSrZKounHugyFN64Ly4d1VJXa5gRtm5pvuSxjmCwpD45vK3sLo8o6soZLw8Bk4YAmjjCHCKtG2mZq",
  "key14": "uZWywfUFcA4V9t7SKyW37aChJ6p1uecG4zziNwkNdQEr5dD7Xjj8kdFRQuU7xoYaGLnJYAvqZVb24ojt3B62rAZ",
  "key15": "5JkNk5WNtVxv53ATvaMZ863BnNbuDGEBMBTkrVrduXLeKRao97gdVptVMkgn5byq6HYCNsijysXFsTmkebTCkKzq",
  "key16": "4SH9xk3HYh9agAnb72xkNCN2r3PntdukEkNv6o1gWtAqkimTcRP7s6BJW2sf3Wpr2iLGhzckWTPr9QajRsogz4qj",
  "key17": "5YZafUUANs8eYsttw3Z84TGBRHHEtr392958yK1h1kaNrQYvEByhD2UFZ6DA6sVJUDpHdrrLdL598i8TDDdkBuYw",
  "key18": "Wa99UdtNhR1PNKNVAU1TYqruWzK2i3xNv3RCtfs8SNEJQQTZYMAtiuRM2cCXHoqWEywRMQfruGfGcuMFVb7CQVe",
  "key19": "5EqF6b6h8Gp4QfinCssuVQEtv6H97vJEzjSk25NB6GVYwiVxS45uKGBSUC9ofZ2JQn6THATQS5T9rGFNxCq3iks8",
  "key20": "5bt7z7PWmd7BxJjrCMmoU9o4PFJa3uj3ki6TeuBTJ6AqYuZ8M3YooDAhY2hbNE9B1YsXRGzRTwK9jwdT1VBAE25u",
  "key21": "5w4jBCYJs6RCnYxnkQBpgUATspQ3LUfQDPfXKUG5uYmaiTyW1PaP4fJDRkzcGRW6YnAMjyS7uXXsq9RL3SUNp7Fe",
  "key22": "3xtJnxaHHiRBdQFasGP9MdEcTrG4Q3ziZ9RoiTy6uiXpWPHdC5comG3UqdBAg2R4oRoaygYRyQ6pwsvejDMc9N9o",
  "key23": "sz6ZTCjdCzUo8oVE31FXcdiyFkrV8SGRTsY98WdtRZQr9uA7N2xWqXdH5RhngHX69R72eBNpVGKsZjMnECWsKqe",
  "key24": "wgNMCB8eY8QEDEFCqMqrcQTzohJhkS7LwbDkVwz3gNV4n1n6bFruFoWUsnwbaGjYvuNiHtgHHxxgaVCtnKdtaRr",
  "key25": "2NAUke6nEp12xMbcez5JizMSJR4LkxAzqThHa8S5NcSZhdFhdU9cQex6n6XPH9t2YbAUjcA2no6QykpTWWJopURW",
  "key26": "2BU5JgrwDFshrNWEaaKRfkUN7gi7m9nkMto4s89asfZKJBJooa6BDbtWmQRRvstmLfi4kwjio59kDovSrzqDebhD",
  "key27": "36N2E3REC59fN5QS4sW5XuT9Yt7tfT7sh4vH1WnX65orK4sqJS95A46VE2aJT3HZYc9xDJ39yUYiTtHxriiGfyYE",
  "key28": "5GZf42TwcsrmPzrwFzsJS3WkbCH1Adb7ExXnkCtuF4Q4hUvargj1DGuQXWUaSFvE32rJ9WKjBMgUYrJAN6cCK5WZ",
  "key29": "22KgfjnnwAbdTyJFyLRSV5dfLy7o5NyXdQVcit6sYx689esPAzVAGX6qFTJn5vhCMuraeNYR1CpHPGjHKAmA4WKa",
  "key30": "2vvfzSGctWmVA9G3Hr7sd6hxPg6i3Ygbbhiexf6EbdDMFn2Qb4s9Qg5ZM4TtjFXzpJ6KVPf4cQrdN2A7XNheEgpx",
  "key31": "2p71SkjqupFfn67ucfraHisvS5qeiiRsgotqLfxVHy1xoyBsk5C7rVvnWRN6qLz73cw5n8rQRni8z7AJcfyH271L",
  "key32": "5Ce12QkTnMariBRSfsz6GpKqyFjpufi6kkjfP7KnYjSdhCLxsDVapY9QQHTMr3paH8NECNbvUXMc2XkCwvvCGErX"
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
