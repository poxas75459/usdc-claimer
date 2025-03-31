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
    "5JrcTDuz6jyhN4oE9abjGXkxDV1jF5SnBmkSiXX1ZyFJzZ8TRHEsZ4kdePixjBqib8UzQjAEqEUgQcj9fZaXY3iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K7pmNuSQ5qh7pxgrNUMyd6MVpb4mtPtcu5nMiQ9Y1zXGLN7isAWBKt43qvWH1FX2KyaCKR9cRfoav3aEYZrrXuK",
  "key1": "ZkERtsTtHuzaDtphtEzF5FDho2DSeHCKHsCRChdjqU9aNhc9w2zqjwCvKrbqSPyCUzj9joCiBdjeqEyv6U6fPyn",
  "key2": "4eRze7gtEn7HzLCo2oa2yw4wWE3QYYFpTxh3rmLNYiziofxCvBxKAcMiWpwfqhskXF2dtRFNhJPqr5ZEDnhPppwS",
  "key3": "4mxxMNdkbsDJr4CvYguGcZmX7zQLNqQi8AbeJ5CbVmfXWzG83H6HUBMtKZMEPkk5CLAm5V8GVXBBzESu5c6xatEA",
  "key4": "5PLmqj3hqr9TW3nUksYjPjrQwW5pjzFARrNi5DWdLuVPhqgu3oh33p1KjkkzLdDaP4RgsZVcEfkQG3EAva3zW2MY",
  "key5": "3Ak1bm3fQJvNTABXcPbFB2VoY4irgDYsrgB4zV6U8ADpsahg4peANTiue3H9Hkk39mAF9CJ3o56gGirzZMXtR19R",
  "key6": "8sYWaUcGsmjLz3gRCmAUQRYQLZjBT3S45nZi6eAD5xHFXKgcXpkeuhM29U1oTxRg63P7jopqeWXQY6RKrFcezs5",
  "key7": "RFQxF1MWq8t5XYf8a46ppXs7qWRbKrahL9Fz1oecWrddYPE1tQ9TXNTswuvYU7tCLzLNoyf1Bx8ZV7HAw83guu2",
  "key8": "yTyjmL8rzfh929MrrXuQrPQ8kmxbPLW5A9wW3ajpXndy8gq71Ew7kt9G8wQ85exWfZ1Fw1rSwsj5Uvxykk8koUp",
  "key9": "2Yi7hEHKZj7Hfz1GHum5Upar6RRdpVcGom7pCwhaiZLEGbM7FQu9YiwnDWAFYA32r9m9jes9Y9LH2Ritpm9NPc73",
  "key10": "vayb7bcS6wxSPX7zpNdbST6c1WHwKhsta4Sq5thqdrKq7kZ2sbHQN5HzhX1xdj7RPdMmC73sKidEXD3ZhTUxfh2",
  "key11": "42hjUAKGc3WHzSL2nEDNUstzcsgE2Ax1ywTeM9ypLnsK5vKBfxBRTEvD5XmmM7HHMriyDvW52LS8Cyyo7Ab8BncG",
  "key12": "5fJC5qsUZvPLSMV2H2DubMcF8XjoJjBmWD3We7rQCBBHnF25LaT36vkofPPKjeCRshRWJTHVWPgrLcHaHARJYDcv",
  "key13": "3Q36jRM3Pfk6Kp9LghiSQfvASkgPuBJikz17hNTnj23zabQuV1Ge88Ro1p1ow96ceJt7gkrhPMzYxHq659eHxpUe",
  "key14": "3bu6QruVTYkuRrFBtcRz9CpTkxfNv1csGLynbuhZ9UCNUJcxB5GiWKWFgRetquNA6BcefPawhTy2RMzQJF6xeSyZ",
  "key15": "3LgHk9F3Ekr1tpLy1TxoPfjmTqaKU8gJExbNT4JG4GYJynuzFbfounHFtyHpbxkgi3pSVb2F8H6ofg2iLQm6uV7E",
  "key16": "2DoctfmC4qMCGnpcYnyG2ofm1V4ayD4z7uBzRFMqUgxq12J24sgLHqaLFQWWQ5hxcUP7e4L3MDthcFSrJBTmckPj",
  "key17": "3pa2eSkE27gMaNw5xrNWrSL7gx6GXwNTZdzyrJ8Lv4zgk3mcX33kTLFAKCzWHwZcW3hyePvx1KvB8VqaTe4z5U8W",
  "key18": "4us1E4cPTM5Dj4ebDhP8WLihy44afyW9TeCLfQWSGp1dizV5Dbrze4P2M6kcKANhz3ZosVxkvpDt8iVpGe22jqPd",
  "key19": "2FEycjrvxxmynjdBFGePqBuUWnV7UDm2BWdpC32MfGhTcX3Mq86R32i1XaBnmip9cLfMQpDSZd8ihGE6nG6wQN2x",
  "key20": "5KUiPqQFftqVEBFSdpiZbhrMzSV94ZNCS6vXyJ4upB2b2L3iiUPWrkxPGyBMTAjzFEGHAf6iS31eHrxEYgXBTvHJ",
  "key21": "4fF937YWg5PZRVU9o673q4qjPFkYjgFCLgnYobuB575FahgrpvdzECTPsiuC3gvENxNjnM6QG7ZZ3CL3QYLeQCQG",
  "key22": "PurwKH4ssDnUucwoHSADc8uqkhwwmBRhp3KwKAEmcgycAVfCnpG3KHy7WxKY2jprChoqyNEK57aqEhJpvBhPw3k",
  "key23": "3LqFdFLWbUtyqC1RbMoWfK68CjYcjLPNPf9jC5p43oq7CnDW1yqajsUYyceiKP5h3V9Rt4F5qP4EwQ5HFjFv7BzJ",
  "key24": "5nodYcyWuUq9wYa8qMXgioZFbRxnTpMyhyHPM2dgaqCNHHEDnyNniHrkhzuiKtoeVWpY6ksjbwsYhJH3ab9NN2pC",
  "key25": "AM9vc6YmZNNyMX2JEmGfBXRJ7EXBjnGyoHtTjm2azVagDRC2yY143RwWixmWy7L3AhbWDHPKQjBytpsJV6Vh6jj",
  "key26": "5XKFb5MLSgdkpgJU7HKCtx51XjMJnCfYmV3usnepFvtouuw5LvYAMBHJpfXpB1gMmW8iYoYWUwF5bgc6XXhjEYD2"
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
