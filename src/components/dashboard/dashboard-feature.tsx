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
    "5GcjYnfmrx2y2D9Cs2EcQHRFp8znoFEpbgzDGvbtW7xcezhF3oFyJHAPHdnKKoAE6ZEJTiJZDmGFNa9UtMpGHedF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vo79xtdpffEySQmUNMVyM3wiZnx5f8heRtWe2cQT5fw6L7djYis5CNT2y7gTjYAhHk6hVkwVr1XpBCp8THWPaZD",
  "key1": "5ZSKBM4a2RaJGKmqM2GHQyxQ1xuELPWN8hmHSAkBFZtpPiRaBaUrW8rqx1RnWFs6MTHouQ9Jp5b2WZQzt1VqN8Q9",
  "key2": "5tSuha7uptm2BPMetPTG348WrgitxLSq3Dt7wRaXhGuKiofAQ7AyKPpBD2QtSLgYTGEEb4mgmZpUoyZGqjjVhuje",
  "key3": "3616wtJyo9WdeK9YXxmhGrnWxW2AUV1YfvkjBUCr5R25iZ8Fa2a1qzFdQsGYebwrcoXKPAEKnkTvf2KZLMcQYTgu",
  "key4": "2h3BdKz6DefTxaUEvQEWYCv2NGCaoviuLTaAjGct2p7TadRZ9yPXVsKMfVLxA8sY9vP9QfXbFa4XAqYjGq3btP6v",
  "key5": "3jVsCSohVKzi9CV5jPWQ7GTUhbG6L89GMzpKHRcXzyjuPPxdeMnx6DvJ2NdW4qjTu73oWGxi1kXtGmWNyZ9tJKNT",
  "key6": "5JRRhr8SczmC7z4Uoz23K22nYNHKrLz9MGZhhasX8MXMSGCJTzpaMRotqLJ384Wz5VsHVsPgQZ771E6koCL1jzEZ",
  "key7": "42punN3ft3uDZy3p7BujzgrbKGYXgqS34d2qnvQT2GBFTCwh9CFyKHkwMgmzA8pSa2Uf7QH8rhk93J9Q69xJNMFG",
  "key8": "2D2FhBcLCDHAZqgABs77rovVrqjJj67yf71fSMgksweHmMU8qBRUEnWCSt2WkN9inx7zU8f4xbNb3H8hvF3RjwHJ",
  "key9": "gjroCjg5rB33KbUZV45QSgDcbDm9kGR32PAm1Ak77fFM9rXdhmiYc3CeBv7tDpU2zZAakQomN9JXTnQrs9vRa2t",
  "key10": "kvAFUNGV2SL1HaUjNnE5WPYrWuhTVdLEUBA52eTnhfNRrWpuAi3qzTKGgUsq3dH8owmTfbZHQcoochoFepxvoqS",
  "key11": "2CbTn5YpU36PnZ9LUUCCbwGRFWuh6Z35xDRJbcZyPM1reEa1xH963u48YSmVNAd6cpno4sYVxfymMkV5EGDGs8k2",
  "key12": "3ZmsGREDbRCh5UJ3TAdE5GyNFkEMPLFB1WrHJa6xTwpPeA982mesFb4szLvdtTiiVu6qQTB7J9HCTM2zN7FDL8a2",
  "key13": "2EWnDhFmZziQTPNeBiwbLQagEigyNdvVs4Gihi9bRXhvBKRrB5vpujvNHGorMfNjM9Zj6Zk666ndkDJHU2KDb9bf",
  "key14": "3zeNQNun9g3tAzaAesYz8hLmfmYyYcLvRJoKvvwFhPeEAeTmvLe2Nio1rnnbD2sr8GzmG46gBHvPmwGHSh1bkeEr",
  "key15": "2dF5nxPNwQjdSkmab3EKikNZzjoemchg2Cna6jDoap4mksUUKgXHNB8ZdAvqBQNRyNvbUyd64mEZx7w16AiomsqS",
  "key16": "4Y9c6sfPSJvFfEtKcpEDT8PyJp3MfpbLbTrbpXm2D6AjnhvtL8HK6dPXrw6ZeUqfspqL245kH5FfN2P5yo8pJgNw",
  "key17": "ufzEZEWegRRDaVuriBiKUd6deVaTeN5xhd7VCL5jqRyUoi4FfdnChjjwq8j1AXqDszb8cjuKCexR1Hgneq7fnNt",
  "key18": "2vEtat5Jx1Shf15QATAi883F11fg5iLMj9CTtMXMb4p3PqzTEh2o5RtrMfBQfzf1JuKeon5EaJgrJHLB32dvoFz3",
  "key19": "5q4yA2WavEZin2dGij311hzrwj783iUWRdk6GgPvEvKbnv2kqu1Lpjpm9QDC1AhimNxVbKYyM1eJJRcexZmnzcQH",
  "key20": "5GLNJKKy9JUN624ufrpnW13prCzjS8smxoZ5FqNkcyaxVEsehcT5HD86dsj5PGuEqdrQT8LoiRxu6kfESWS8m1aQ",
  "key21": "2nucHeE7RtSWRY19diw4htPdmcyNXvC8B9FtUj8JxsvpP2SWM5J1imHCCXpUb4xaRwWp9eASzXZEkDknpHYGbtyN",
  "key22": "2AD9mDzmuijBSMyqToeGhkuc68FcYhaKrjXxnhFkwwsiiFJBoQ7hNKkUGv1ZbrAcLRKEf1rHCMfhTFRSv4S1jX9g",
  "key23": "21Vm8mXi25n9U7dyzExiJMDs7Ar3xaTXkFsk1GeZcpQcyD3zN9DK3uTdKG9KT5WJnUHyZqzEEYNgCDutwMmKGZvB",
  "key24": "6R4jEdDTar9asK4nZqLEVf9wZkPiaDYpPDXa9tyEJmkud7tTrKywXSfTzahJKYTPKc8No9en97pJHYmX7rG5mmy",
  "key25": "5wv1RNkr9hBxTDkYdgRXa9sAgQLWYS6bawTQ7AiGu33RSSHR77oyhAi8rD51kjoepQQ5EykFHimys5fnobbgo9m9",
  "key26": "4ENEEdCB7R5fRKyPHyuMJQaE6tfoVTir6KDZ6yofPyoj5BUzYmXymb6zw73s1fy6nuerKnK1qsaFbmTLNhLCiBG",
  "key27": "2nYdAEMFYcMtqasVo8XmGQbvEa4Eunxu7EJGqXEwonw1MqXPWA4zAwxHmzj4ZgLJypGDAhrP2UdUcBNHYSQQx33b",
  "key28": "53AJyHx7ni39FkLFYoUiD5QqiU3yqLpwof63RJovDYhFyBw9QskXiAzmo28PBHpY913EFBJ39mwThFeNp5LCPnkZ"
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
