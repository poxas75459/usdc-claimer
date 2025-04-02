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
    "vpyzfWez6QM5tSDHyEP7zXLyE4LEzeBJZBuf1j18sSxzMWiYWS7RouYrCjySqoCzhjnFNkEJdSGQx1zso2TfcGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izUCEXAYDRLY4BR5iMCHTjiF7Wb4R4kMpbLEgaxFEusQuy287AxopPnBkS7TUfNdzzemTF9uqvkrp3Zur3n274a",
  "key1": "5XqVeA5GfragqSkVi5S1Hz4VLG4XZzskiZTEZ1cgSuPVQfj1ksNNsyKk9K1K4dF2826oQ5oBFdUBBZG4YiUtsabb",
  "key2": "49HPBGZiie61eWdnSqKWXNzpU8STH2EAVuascapHKUTv1rXM4ZakKHo4TqGd2oSEFi5yK2i5AcHLgNuyPJfeEuFP",
  "key3": "5xA9hiWKVaHx4i114PcxCGkrwRMBYvUcXcqBXS1t8nTkisP2TyTDzRkcooR38TDpG7iyi5FPWgRGyiMGB3VzoCvW",
  "key4": "5oKChyGpMQdqMx2mKVRiYmP3iZDxhrCmFCZCWCnHarf6a4Y65R216Yh4AZr2XFiEp6MCaG5Ze2uAiF3KyC9Cmmzo",
  "key5": "4ruyyf4xorb6C2dQ675HJdiyTprTU5W2WLFxwQvZGLLxurPsRUFYt4PjkBbMkZMGFB8MBNEJh9RkUk2qVk1B2s1c",
  "key6": "5ygdVPatsH9NRkRmC7N5DSenC4qSYErK4t2aaUYDWfojMAKKQnWgELTmRkQnE1ujsJvFdNbnxiBu9nNiDqBf9DKQ",
  "key7": "5pnjcf8BzyqTm5rvVQNw7C9sKppgheB71dUSZrUeXXhg7PBZSmxtV8ctVozm6G3zYGeRjR9ahzYPu6QYkSTRFmvd",
  "key8": "eZ31k4deZ2mayj5uvQDa2tMBpk4LWKzTe9FFTm7VUd6ki6VMnrURh3J7DporbbPVvtbZthQrRWhhQGsZHf4pqXs",
  "key9": "5h5cdTBbie1gJxhoyXTkmqHNHzoAMBVd5XFeQkKfJsBtrxKRnW1h8tbcQoPoQqApcNTDDmv4hnFFtH9HUnAJ4TMG",
  "key10": "5gaYPG9u45mLa6fbfxYXLXCGb4qCnmickjdh9n7dzs7d1xtg85Fqx9rWVFV7DhNzLoD1xS64jDdFeViFfXgZdPYa",
  "key11": "mUfaTWsYZTwb1tzcB7NsNpneigqdKZSrkWcbyMxRpoCXoYP4upscho8M5DMx4FuWhPbyXpcHQWUcz17x2pztdXj",
  "key12": "5YQukscCxbVAm3ymRP8VEGtC2kpi2VV7agjyLZPU8YPbG9T364P32o3F5k4wYhuL9wqG3hwe64TcHHLdvdyNDFjL",
  "key13": "2uBqYTLeiX8QLM87eks626S59JynouFfYFphff6waGLkpuqZteF2ZRPsmuWW35zJ64EQNhTSe5jmDWHVV68nsNUv",
  "key14": "566hrd791rH7YU6Gyuz1sJsz7wuMoNJMcJk4kBiPGHLn71FpaHPuobY9MruwMWdUVh2L9xFTgfbzSmohKudcgXvR",
  "key15": "3VceeQnaqRdMe7QgRfb6G72GFn3SuzWvwpj7m1JR6JaLNFGinxXJeMDceJEwah9zu4SwkTUMdSo3EN8f5LWoTrW2",
  "key16": "5bRdbfbcx1iLqrgakLuKwgVPBSMJDVD96mGNDg84zxGkBzXoMzUEGeaen2cbjggy18tEbQBMFAKcNQXbMT2bhxFd",
  "key17": "5UDF1k2mbUbpDCHWwHP3GWh4zXeqyRFbccvzRT5Y6HzkUnUcRZ5ok6XoQBiU9nBsqqZdnGdi5FjPoD5Q4CaxuJwM",
  "key18": "4c2o781nLGKWDB1e3oDvaPf5ie7feFYBfA6dP8CUw2J3seww8BN4EGfQVwVR73YeBhtMSqAdyuUDpgzkLva1eiAJ",
  "key19": "63vygjgJEXYZbBV7yUdJ68TjKU9PBZP8H6RKsnRiT5KhoZ49WP4os5fKD4DnL6am3VULFHKoeR2PJPFVteEyQJwz",
  "key20": "4jKTxGC4iaN87UkQe7UGSryAidrASxsDE5KXHjK7x3EFkSVQ6AkCYpgyFS3VRQaSx8NF6ywGkkcukBUhe2JHe6m5",
  "key21": "2d62t6kWvNQiW43EKRMybBPjcpVWbZSQVke8xsUFg4zjJF7RKVTmRtYqxVdMDWhz37Rhbe4ciKZQRu7DiGZnfpUh",
  "key22": "2umBUncc6u7abvtHvDTbs2XCPMTecRb6q9TSwPvkP1v1Uv4kuR5GxmLvkEMaK8nPqtt3egpTvtgPEwgAyFG3Y2Qa",
  "key23": "5nZeHafwFR8miAkf39YQ2UEWqkJWp8qefcY7LHfj3MrkXZ7DeyM8sFuparssev5MwotSCGkkNyYQrYzwUWZ3Dzes",
  "key24": "4vi8DBc2jhSFNGe3etHB8h4n7jQN93ZFdoix97ghyyH5SiFdTvpnkDU8AfiCnTSAw71RGxtTq6PFPJoyt1fBZcm9",
  "key25": "5h4sejECkEnJ9kGjgqf1Cm7B66Wfm7ZzveJDrPffUAoiCwxt2LSKqnKkZUnLqErmqscKPF5zNXQPcYz2ePhXBn9K",
  "key26": "2LYKQUuxE22oaAAFvwhLbtCf6Mfv8VpeNbzRRDxk1cw1npwn4wVtM5XNdkC1VDEn9JB2NSWQwkNspoXR4f29BPGw",
  "key27": "1booHZg4PigjSAh6MHZUNFYoMnkEezdzCrZDLBX15v2nyoMyffQCxKdtEaPbL7JPHqg7LV1fWNTEXaoW93DLwsw",
  "key28": "5mDmKVC95h9ZHbjcpZNNqg4iZzNDxyUMGZ2yxfHP3JpKJMQvtZ4fT5PRfyDVrVcYKY27RGCXPowxs4uEZzr942Q1",
  "key29": "5CfmWs7mAt7ytmGtC1mZAn8YiprhCQ4j2X9fPGgwrsjxgUvauaPJxWVCsCyRJUAnCX1F3u9DFJgodCfpZW54j3DN",
  "key30": "5FHh6HVkhNAFWxz5LHK4rEqKuhCVsJvLBLgiuDdSXMfdig9bJ3rVenR3TQpfMETjbvCHTQARarLHzRa14KAP1Rj5",
  "key31": "45ouHf3z24H8HLasFo756nWr2Q4xSEhxfmpwWQ6UYT8fbNYtKQKhRUHXfCVXCz5dr7A5XrRsNySrvDXaMnNXpAJQ",
  "key32": "5ZFvupW5L8pt6dEzLn1RwvyVjC8FeGRPqxVsFJAeBaQToT9y67z9PY6ikVDFgsLYnCMHaBjobaYUX1vR2ZvMZ1NV",
  "key33": "2JQryUz1xA1t7FNxc8rnurzZ4WvAZ6ujT4Ugb3izHe4Xzvyj7p8HBTypokC1wVMpnttXzB4GkVMPeV3781bNkATT",
  "key34": "4XWVipm8MstuMTMStjjBzXXfXjNCNEWSkwtL85W8wfgh5LWUGwocdkLRC9JdpJzEEBbvYFU6pifwej83vqr3uziX"
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
