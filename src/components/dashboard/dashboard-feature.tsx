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
    "G62tFEV9QpaUeQJ8kpWBLaw1yME9DBJt68yQVJ7Gt9cTUk812DSKFGMGV1VRKdXDH4v9Z8R1J1KksKa4v4ybpyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysWTFCzbisx8CA1PW3UGtTGkyskRVdWRETJ2aVNgAhN6zubGQVnxjpcjnz3N5y3wc4xnQNP4TfaEhgNznEAGZ4h",
  "key1": "4qRz9pBGFDbKU1sEcV1pBmjmFNJD96HfarDFPPWvMbvXYpErgza7LeZ9upGsHdEX9WUUMm9W8uwsh6SG7kje5aqD",
  "key2": "4jRGhgoA8bVRBupEFozx1QdiEgPDgwp4RR2S4gimAcrRDvKuYiYBze6pK7enJMydJxpxEBop4BY8oozMCepMvMhW",
  "key3": "2CNgpTCXbRWYFUjcGCecYAwRnJqQwQkbNwvHPhWBB4dtbnT1pvZ6H6s4tqmToJwZB8EAnXP1XXGjN5Z5HgiVV85n",
  "key4": "5GLRvzcTvX9gCXuWL36nbBJJpXCywFNeqnN2G5cWMTS7bp7JeP8mTXpkg3eHjgfEDNhGvCTkZVZAjWSsoNDeL9b6",
  "key5": "5xtYbMWubp8boJhCdxUSbEhGESk2T7pBcZxSGLYBCmj8WfyrUU8zmYgVsuf9vqtT7Mgr7WnMXezWjXJ23o6JD7B9",
  "key6": "4BpGtQAZyKs4ksaZamFs75drCj1fwbYvxtHeTiSK2ENW2eKQsHPrgB6u4WYqWvk8djcEga1udUqLQqfNADAWTeEF",
  "key7": "5kPAp8XWhNvWPzKbpDePuuyqz87qLwQA5sMuFFeSPtd7JCxpvAyrtsEFBuZxNc3nGVgqwrriSmpQridbs7SXzwZy",
  "key8": "62r1U23EFeBRw4E9UCMSjRsRjWZstzKHKNfJBKBb39Ku3og2YqP82JEHGbEfLPtUoyLSHjtfF4XJAC2sgqbyqxgR",
  "key9": "2pcYhLV9FdoxhfJZicQhcHvoGEbLobNgcn4oVudB3TuxSsF5ND7fL2fckaikyoeuJdnruyKMjv47mCFdtg12mTCt",
  "key10": "52Txj2VvkH9LY7SGurLEvqc6bWfCGoqcfcNMuLFsMY45ekJze4qAZdzVfCpdShW7DeUajwQRQKufJwpUHHCYLDZP",
  "key11": "65QqAx4WTMdZk59bW2ATK9TURbc6yVZSo3bTeqso973E7FFNidcWUwjUaVmhTo8kih8RLG5VSDMZdKfEXfa53GMA",
  "key12": "2wFjrpiNrQJcaf5XAkzxTvuLyq6g5DTbqakKzU1J4sspR6deatLLSnmg93QmVtvJZcnogUCYBUPZfogbLbzfyFZs",
  "key13": "2SHqBbhx9qHnYQaX1vQWveYBXPHsYPhq4c7svjMX2KJS9AaNtLwvBWv7AJQyMyZZ4n5gwFw3PsoapMxNZ294ctxn",
  "key14": "3iAYhX513CJpQ6utVPnMRTzEfAL8x4v1TdX6gLZiBvqRmQ7q7RP6t2HVqiL4Ych9jqaaradQu5pFcDUkRBgUaynQ",
  "key15": "4sJMe31AYED8HhPxiGKyzQh47fFs8rxD8CbsJhUnoSQBUM2BMCZNaMQ65Nv9iNwpGKvUWWVDXgxpJ3VEg6TK1LAx",
  "key16": "2BMYWyiPMX891TPqybUyQSDh1eFuXVfaEsPQw7UpZmrEHRQsyzxUHwaTZuTSdyxScERqdLRdDfJm2xc4uMo5CQoB",
  "key17": "AMgVJtSR24PcNFnEKP3zndkoWUxatV3RUvW77z4ZJHSqi7EXSuigp1tkzAsyrzYNnctYgcLYRy7UW7rLcvR5iXF",
  "key18": "4zoxRrzyWwEgCaJ64kShmxakLaKtbu86k1d4yXcAgCmak29dvpWTeFkLPGJxYJoLVNTTRtoRhwZwcJb2zBycMqXD",
  "key19": "2gwoXcHVM4143FiwGT4jJqZDot4BxepF19dNaHvDt7Wx5bJFQprom4M3mHhawUpzKUH2L6j7V8goeidz2ACAtcdd",
  "key20": "jvTSFTGHG7ux3mt5gGGbjQj3GHZJf51ha2hH8B8uGBr3X4SEh53MfssF3rMcEKaRsJKm2pTJudHwwFXCvghJQGk",
  "key21": "2gmD8fuKT7v4xCqj2ttpoy4YHdT1odP19SnjSUxZEeu8SVEeEzFmsroipHYqYpiKNLd3JQfToWrUxgpvPRBUKafo",
  "key22": "52mR2HFn6aUS84sMirKMRbT4XhJ3mgSn6isUPWjcnmwfVsmm4zmGqJHSnSRjm55F8fJy8bJugPhjpHc25oro5ynP",
  "key23": "5c9b8MXxebLjSFTy5S3hMkka3VqdtMQUgVZNXMAeDwGn1B4adrRvtZWPqNPnLkdXj8U7BRL1g1joMYobfmo3cY2w",
  "key24": "5xXZvbCnJRSbdaEExwXPKLbVPSkuqGFfiJAkLH7RGJWiLDQKgpXszf6YMf2bhiaWFSUvCoRScSa1H9qPyiNU4t76",
  "key25": "3jbdiMDkDXYM9JKjXAs9dudXhPnUq5V66VmBZjco5T2vKCyHmaQANYSwvPwJ1SE593DKzuXMYJKozRXc6HwmG91p",
  "key26": "44kCR936eYwF8e4s1TVmYDyMAv8btB1vnbUD1QB6QzBCj9g7DSbLKBXEjqw6f9ib47KLdg2fVG8fxNF3MXKPkdqZ",
  "key27": "4VqaKtvrEKqZfePthX7opPPyeFQZMhSpTgzgAArJoN5hDYXaxDPeEuYRbDHQktoQgMK9PBZNWGnt5tNv3XMKtSRC",
  "key28": "5EG3TGtnPPEgNjGPvg4Q9HQ2MXU5tjB1Kh9Q9YnmbmD4NvfRXFj6zL5VcVi3DtQSdeC21n98iwurHAL7ZMwaDLpV",
  "key29": "4g8ru7V8zHskcPCLr3eCYVv2UeNcXq78Lsz6N45yXLjwwF5XPzVZxrjaDadB8fYgXdpDUoeZ5x4Ty6UJo9khhapu",
  "key30": "28RqGF6vSsn2HkwJWSuqW9PZ2ZDi7FxdNJSBZs4W8izSXe4mGVRVv9ZzMY2aATzjg5A2KxrQrkNnyc4Uyph2gVrU",
  "key31": "58Nf12TCSKJWKbL3ZuXujKsj8SrMs9J1oxkhC5uF8Tn1AXH3A5yms3u4MKAfuYpoqHdEuUWLbW43CC352vavwawn",
  "key32": "2GrtFu1y862U5z94vnw6p1gLmqs7yVkYZWzHDpCdcwPUheWaCXLHEV5qTw1kqxtMfa2Sw4gb9G1SHXpFDBALgGdZ",
  "key33": "3V7i3zyGinJFcpD1Pp4GpmmYM5mPsg8XiAz7RBp3SRK6AvDZ7MznkpyKTRERNhZZB6RhpHwgxmE1LYdWpEAuWiev",
  "key34": "3rj33biUkD1QFR5bDtNPHH1UwvBkLHZexAGxmg23kY8qVvKEmbRzdLBrtx7oqDTkTH3ksSSn4GHWEiqmuT1Mg2LK",
  "key35": "3XnZsFVk5NwRwoVXiYAe9sVDNJZhTT8XAyeK98mX8yHxgbbmwnty85JCG5vUNTLsQc8hjm8nkLjhNXaLk6C3P4L8"
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
