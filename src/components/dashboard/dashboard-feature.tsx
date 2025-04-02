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
    "3tPMkhS7Z278RprmsKbm8ReqtRCNY4y2yTGjG8GCUsU33F3duqGKuXJxELicACTXuRZ1d2tvAweB19wgFV3DfhPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31R5tqgwf4gkzMCDYzVSuESkCJXj9VPGb8jex1r4X7z4iKpKRKDHsojrNdjm4TfJGUFhbP4gBsb2mHsb7UWRyrFT",
  "key1": "5MBwXURa6KZsSqnoXCs6xnmfW7GyJxdys2ny9TjXLWiRe3qgwBF8zBuD332Y6J6N1ozUqYWfqHJKbzjWT8HEwsEG",
  "key2": "2jTU7wbH6AyvYs4tgaVqQKZLDn3rdUow9CrWEcph6UV2LRDpNDPEyccwRw3xZ1VDcCj2NeNvctLPK9f5VFoyWU8Y",
  "key3": "36XJoEWSC3e5un1yf7SgrFriurzYpBbysZpuMTs46AcoTVpYp8x6VvK9wnKr4E1HPbmfygRgtwzGTn21MsMC6iJp",
  "key4": "4bot8kTHs7p56eBQHoQzxiQto8ovqrxdHAyDsf2D2d7BjKAqFVz43x2Ygh7r8JpYjTj618imDnujLbvHcV4T5rNa",
  "key5": "PjE4WwsMujCbsp6GeqQGafUGLnjXtbAMcSdQomBUAjPeT4zm5pSnqJEteEt2Z15Q8pFnkTCqPvdngiRfZyj1jAw",
  "key6": "bLHfnNfubRwnLhMEpdGxqc3R366a7BVS88pQoC35p6oJ7ekbvxP3UKu1XHirgSovPS9TDviCYcD9hSgSUkXHAXP",
  "key7": "2RBRcJLJdWFFyHShHLuKJMzcVttG3nVhBnY8448u25smdCEWdzjfiYVADdyuNNppeYtg7gPCyau2NDrrLDWHiaRb",
  "key8": "2z2Q2TJihy31hdDsKRdN7ccJhpFGu1ZU6fscUAcMTipuNiCG3areFYB6Ua9GkphJ13skuY1VSkYXzTmZeGJ75Mdk",
  "key9": "mWGfVjwVuXaY3mh8M3aQo3Ts13BDEVaXaRN5wcaEsfnTZmki6PkfCo6KSwothyMJCasY6sspXMZec5v1Zo2mnBN",
  "key10": "2LzQGCyX4oZXFT1q3ZiJNCyvaEsDxMsG3ssLks8QbzmsoTPjWdMkNA9Nr5xrLMW5UcD3rENn51Whzow6mfizjjFW",
  "key11": "3dB4C6yqXMCfhUzR7bnc4s8L5Kax5tJn1hH8pb4TaKGYFqNN4bWz5JFd89j1gv87WtNfS9XDBhUy1opaSxKHkEy3",
  "key12": "2nU5QCLfujb94775RQdipWPJrDhiGkcgBxVj8TzHLuLXDpuRxYuznR6eticBSkWNZVnQsJi2DEAB8qaqn1FPJMDu",
  "key13": "4wvhvixeXm8YUCPMmP9FPLrYPQvzQeoJ6Proh4i4fMnCeDJgesxHDQBnMfgJeLCgcBeeW6GY5XznsQLaQPHHam3W",
  "key14": "5ieuyoRQU3nYMNRQ4tUKC7eBTY7XnaRubbySiuFHT29DZP4YHowqphrYTd27aWoX6rzEKBeZE9aHS6tMXrSLJM4r",
  "key15": "4pZrqRrJHPPYTrQ7r9w3bJzk7qQfkgRBbNWUxFHaVfs9EnMoKpNBmu3t6Bi1ki6wXNzMzvPqEdpws7uoLWeGkXRy",
  "key16": "5h9UigBH8YYhimQ4ty6qhR2VA8CK6zsi7seuXft44yuDxkA9oaaZx3rQZvqSn52w2fZvRrWeGtprfSgDYvd5M1pN",
  "key17": "51dT4bz5UUK3dVPyTbKsUnuA9wqZ6tXperQ2c1R7XN8xYLore1vdhe3wzNEewHw3LkG3VuJCgibCXVBNP83YGKMz",
  "key18": "2NQucDp8esUjyygWthjCeuufznKtDsPFvhNc6jRNxCmrM8im9og9GASDBXnyPNXuamg5KVJL5m47Xp8eakjaHZc4",
  "key19": "3LkZx7HYP7XfzpLq52hypaa3zGYHApuowsfUz3AH3V3Bc5MrnvqQjTsXp3GMiAqf98eWBvHxXN14FpomRHXUTHJV",
  "key20": "2gjALdo2Xes1qAV4vhaBPZjzvXTXhXhfNkNdjMMP2TESULTm8A3kRzCCiXJxwaCihYWHCnwtbHBueWESmHKrdPPz",
  "key21": "3CXkYPiLxKozhkvagYsWBLY979ZArv8fMzm1Hgt2g3udVV86hoB1sq9ozKwCMCi9EkFkSYjeHwwmk5VULgSsLBDq",
  "key22": "R8Q2XmWC1tUA3nXEs58u1hJBdLt8AGzsDzY9Jkq31CzojMie6JaAznogfaU9HpnJZWDfZhJjjALQXn63VxjdXBw",
  "key23": "2DAaEMuTnBW7GkaHMhCfghjWQ4vQv1ksaBLfLJbXkDRJtq6x7WHrTrm8jtSRvQRUVemzLd5Ut6hrvYY7RMT31VDm",
  "key24": "4d9QE93ggLvm3Fno5t7gj3FXrsMxE68sojmoR8eHUgfmBCyHenmpbK51BqQm563rRyf35TXXhLhzFJwCa3awe672",
  "key25": "4PVwgWUUp1uWZpCvQDUYdTcVXosHD6Byeqfuv12t2H7iH3bksVB3PdPapmDf4MXqh1u34VdjjYvGbQaPUB8wEzoE",
  "key26": "M9ChjXqFqSbGoApUZR9f88riGVM7vrTj49TErYx8EeqHThz2S4N3DQ3m3NV68oBNf3J11shD4efJJ4FUhVwP4f3",
  "key27": "5NqP44gWykufekfAzc3GQm2PBVn3aryZZqzhScaWDNkndWSsqhSbaoxe6KBRsMD14TGwB4Aa6fMKrrwnPM1EkU1x",
  "key28": "3qZviV9QUGRbSb5AMZyXa2BhSRvP9p7XhGXmdadSaNptspukHzHas59xQCydHDNbWdHZxCfk5WbmYJZ824oyekH2",
  "key29": "t4tHePvzyBAeL8k4nhfmsSP9TFhqPksA8cQu9Hd9dNz5mecsTpb3aVkVLqEhAT6XfJixYXqtMjDVenXhSDEjvFZ",
  "key30": "2D96G6HUKamjdwAfZFChxBxnwL2i1GgtSsQkSZ58Q2WQjV6ZQopUHvhY7DwBRGW5p7qxYT6RmT36oYixK9zWUU3s",
  "key31": "4bjWo3crcJUyZ3nasjLfYmNTwAvuNsdGadms5aioQAkjQ2xogUsMQDmLmQfFvJ1dmpYwmZs6wGwstasnk9GSmUSC",
  "key32": "2GkUyw9Z2cLctLBhQrMooeQ1CkXexed6gn6YLGA4EX9CP7RYzxoma15H1vNHzewGzkrp81nCN2NGtFAmbXhW7fss",
  "key33": "5xXPUDcAbw7xFr3hWAkRncAtfH2gHFccxrBMqP3ZQBaH35gSkwGSS4FJxnLChLh1ezkvJpxCRuaiMKD4jioZBPSK"
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
