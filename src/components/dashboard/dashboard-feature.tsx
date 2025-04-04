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
    "2ChTgJyQAm4ED7f1ZrNDJehSgmtiyTuEdpnXhgD8wbAbsEVW2GvPG9UcDZgXHBorUTjEFhQEAu2KmK1M9gCHKdaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tytFg5x5sc9g4ZRbFrehjT69oUBUdXYcHwnd4dAidof1E9z6V98HbyVCiBwstSnoYeTgtZDSkoWNe1VM1rmihXP",
  "key1": "3G1KK9rJuLtMTJbLMNMLuegQ3Zi5oSZY6Z52BZLxybDSZM2Nr1JocMfVRFotTNX2rcCJBByT9ff8NUe8E2zwYA6",
  "key2": "Tu5SCWRzPPfHn9XoW3dFD7HbGMTgJFdSxk18cgGeq1oYZEWmgAfyJDryXXLwEs3MHqVQnMzr4aRzVqXt4dcdap8",
  "key3": "5XyuknySm5RZRevj2tMmr8UkarhGcq9gAuTEUeDrtH5Hjv3yQxAqi4xxNiFcQ7z6mQCehgu6BRDANH4qN3ENKRbr",
  "key4": "5gkYPjfwQRSEvmF4uaY6kFbYFt9T7k45tDbdrC4QPUrwkRzvK3itpALNTMVwpvw48BvCxwBFVjvJi2aQ4HGHYRKx",
  "key5": "36oDuutnvzaABd9nmFDaLBvoPkxqBLMighbcjDLcvEqBVkaxufibffxybNXbhxtVc6avwwz4cdjm2prWE6fkgWfg",
  "key6": "2AKybVHG8APz6haLrpucswqJJ3yoBs4dMo77DRKSQXqsG6dChuHYf4vpi478hPsXFpnaqVD7NWWfEAdCyVr8HZmY",
  "key7": "2tA2iKp6gJhTKAA68qDYNPwFbpMXrgqhC1VazXf38mV8mW2gTpKTmeogZFsizFc25CrBPg1JvQT3W3BoZNpUzWU8",
  "key8": "52RyUyWSkQwEbCBdCRkey2ETNampZ7zWBEMYhwC7it2JzatTAH4gZvsuN2K9iieBvhEgXjFeaXGRXwjq3GYcwZzN",
  "key9": "2c8KoaVdLiWCmx4ZuQvA5J5C5f3kWYxweyn5xGSaHSzANXLx4puTAYHupNmxethYATDetnYHjY8xoxbPb1roBDXQ",
  "key10": "53ymkyEGLrEm9PqnFg5FBauUm5LSg16xUSK9qvY4VhwNXBrRucn2x35xSB4ax7MsVaD4U3d9BUAQEMshcgN1ZcJq",
  "key11": "5VDnf3ifLRnGWtfQb8P8dEeBgn8TgUbWhA5sSPLCBi6HXgqkzPum5FrCQEK3CZUnJVnaiVALtyLwVCARQVU6n6Fv",
  "key12": "2sLotNm1qWWP6mbHpJCmeNwmCEY7UezFNrKQD19cSBGH7RPpmYgcKzTuyCqd85c8P2SKdk8NUgGhiZNfZipDMhQa",
  "key13": "3hudyEKsKArrYU6Xc6xK3ikzS3niA5DqUnx6JkGEUVhHuwmP1jErTJqMUqNTJSTQnrchFmUwBVg9ZeMjSa8aDt1",
  "key14": "5gM88PCSj1n4Ds5jf9vTKeHrQv9ofUAm6ujBHrcjDWaT99eoYwQUUE6GzvZnkJUaksKie7qpydncYGxR4W5Gt7je",
  "key15": "vWLbhPqiuFM6nTVhG7KjZ5z6ioHA2HQNxbjZ6yGKFMiLPTz83ui7R4NMXA8bqkfgWfB6WGtectytNBwSDNLyvhK",
  "key16": "5DnmPxUfLWfRNtTK3sv3DaqDgbHC9fo9dGZQswvGRYmE3uK55gHz1qpAp4LRGSGEWDw2RXxEr3BSfr4YN6kseCsH",
  "key17": "47gggD3qekj49eoSzUcBggTJcmUwQzgRrXju9fxZWi9sMD4trzEF49Mg7CULBwvrzccx5SvAXSXdN6YNG9whhvfm",
  "key18": "5vuNfPaJ8fgUU2j2YJGppWB3JetcsmkpYa2xYFLSe9BHEEaNEpJPqEzDon7gxe8eA4QSSkVtWViQQzhsLBY37fSt",
  "key19": "4aRRU481UMaSouFci5yXsW1ad9GV1VCKCnoWM1U4e4MNb5gPjRVZb4ZKrWTvecAbZ55tJnLY8dMQtQnXt6fAaNpz",
  "key20": "TjMkV9wMUay6kd5NL5ahM1BfhqgCt3eMdx1YXxwv3TDB19ttHESsurrRWw3BfrSzP814gGz64KRu4fXykNttWfX",
  "key21": "1gGqV3WRCt1qwRJYL7bdaqRHGN4ZC73srQ8czt3gwzJ7PqhDi2EJ1x7Nb6TgaGiQi2BWZyM32PVo8ujSHu4sfDP",
  "key22": "35eSKBw6zQ3f7JUJZvBEcsQzVG9ZYcjX5D3UgbwkbcqFuDtyggXuVYB1GW7KgbEKGahbTufxrJzFKx7F7rc2JUas",
  "key23": "2E1ZvypLgrXCT9N7kzDdPXqNM54fpcEubPAiaW5KFuNMkAyEXyy5eWGT3cjrqPx3titcfSdcX2mLxppeLiV1QyZZ",
  "key24": "3CanFPVfbTPVtNcj1A1eE2GjTP4mK4Vj5LoytkmVNzqMH69YPuGkKSm4FHC1Wa786mW49WR5bPod2s7ZNjgYf83P",
  "key25": "5ghPqv86nkHd9xZaSrTHxN9XyvZQ8vV7yRX2h7Pe5PHve13uqnf3SU89hed4K6gwLsuWs1E59e5fQdCT3hQqyQjX"
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
