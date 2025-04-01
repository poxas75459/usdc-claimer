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
    "cXHGSj7ioPiykdntEiQ5f65BQTcLNSK21pJbAEiiqUbTa3SVKtVfiwjiz77KdFT82piK9PqoxjLLJdYmqcA7Twi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niAbujUTLcZNYRk8C5omgqLb3D6pq4omsKh5dzwj9fnA33M1HurAHqrGHrCWCFZNZCkPdVuQf9j1EDCovVBsGxu",
  "key1": "3KtpsEsVFhEnsWcXGeBwcGapmKQ3u9VWrnjs23zAP2yHhWrqFxvnhpR8mRtgTyrubwn3LmDLneS9XMDGM6muF1f8",
  "key2": "3auNZGdGid9aGWyMTpqpejJosgAvSTGKRWWgTwwakxYH2FxxL3WCEcKZwuT7yc4zXLiEzEt2ybNnYwpoNFULCDs7",
  "key3": "3EyCNR7b5M7wikRVAVzGEZAiYAzCqyQAVhzvh5A3YMFwJnKbufzgEDuJMfdmR5Duen5aEfEdA58pZKZ3qsR418df",
  "key4": "4bV5cE7Fto3z2ohNwUsb7nLF57p5d4iU8Ajx96WyPcAEHEKMMMvzsEA5r1GmyasrpKJTdAhLDExqX9KkduSZ7Gkx",
  "key5": "5qtMdQ8xPSLTAmWZzZPJJQWxbubcBU3PMzumH79u56FMENgUYq3EW3At7ns4V5MMWek43FhuWZJPViUM2mdKFcQx",
  "key6": "3V9EgF7Z8872gfHYweeGPEoWiDfrFQDskYz3nS48GPq5viCCMSNWJToKBsautGDS1sF4PBUVsswWVdTkmNg3C451",
  "key7": "5J4iNDE8fesSCbGpo48jMzG2fmMR3haGwouTrg52bGQKS7pjDafjQte856o1xR6ZfULyes9m1okHyyrsy7k6ttxg",
  "key8": "3bjLZkL84aF2ufw8Sp3wc28ihKSBxXT8KV7rDGgYVFm3nweTJfSoL36z4YKA7D1r1KeA9G14bYPm52VC9vfJbNeL",
  "key9": "4eC6M2UE7qfCA5KKsGiMGzn7NX4WVLAvp5iJNiALEdeYdwodgxpV8LCLBeU83scEmHTB64zTaXmr69FQ8QBEji9D",
  "key10": "5b69wE43bvCeKSxHR3M5ZyjmPK41baciiTy2EdEgSMi8KzFaehG1mq7sMkdPecewKouvK3okFCqAAF6zPWaLzbMb",
  "key11": "4riMgcLPyhbNSYLf3Ksf3DhDKuMfGawXrXWfHQYhj3fzcPkfmnZyNgrbjuhinKeQyff6GCRXKXy49pdyzpdoVXjF",
  "key12": "4GgAgnebfYsdfzJ1m8L4aEF2asxhxuceVxSTAFV2smjDDikWG7U7HtAAYgJhod4PDmrGk8WKETQzLJsZnafcLyrd",
  "key13": "5Xv71aj2PXPkoeWpyJuT5KbfzbEUDyk9AGhbEvcQgpWNe6ZR74jAUYWjJfqdnfM2u9RpUqitpKc29Bfpe5nFEGKU",
  "key14": "3hknHW6zRhy21iJDNH1AmPU2pXy56pW3i2rPdgoV1vSySxoFc1xNN8ZLuVNQwk6Vzs5ap6QuWMqJhgNFTLsYDFQf",
  "key15": "5LEezk9EXuBNKtdzpmGyT8cLBXbKJComd34S3uc7YdWzP466ThoFs9oJhBaEyvHUZY7QZ1Wma8Z4LSjFak8oGXvc",
  "key16": "4VoZzwZAEitKBoq7Rf81zBQi7fARbHtYn8NQTjXojXwXhWZ5FwTidaTqFH2PrAc2nkgy1LrXUX7RXn3gKpCwC2nQ",
  "key17": "56ZiNmr8a9z29JrAmPd7xm5jXHqdF8sHzD4eK4u38HAxkQe15PVkQ3YJD3yu9cWhakEfXcN2CeioXHxwoD6kxB8K",
  "key18": "3LJHMgoWNQkBRJ5VtuCHvPZAL4pZqLLZASWG4toQE5fucdt16WWWYCX33MBuaiiJxT1STny7g7BRAGLYkD5ovV4t",
  "key19": "5C8fmZz9fm7v9doeBk2daoCKtFvHG4txzcgafwbiCm5Trnms61ehYM71yVcSKCsE9ms5pTKCysWsC5eFcR4Ai5eH",
  "key20": "2vUzMKkJnQ4ciwDQveKGrPfXtFSJrjXaKCMCK8xNPGjfVBoA72vFmYT1ggfKKBg3FiBK591U21YK2SBsAzRBGpQC",
  "key21": "3YFJmDDa9ftqT7edLBwEJL3LFGvSup42KjkeeUdaTcNbUgLRL8k5D9jea5xWWNLR7qJL6hhiHF7CTPXqeQkAuc87",
  "key22": "5dPxpRQtDkDhCJNcwnSMhdEuZf8XEFNsJBhwG7GHCoyKqxrSjXXNmfJP7cRsZi7VNfzdWsx8YTQwAdnFZePgPuN6",
  "key23": "3ZhUoSH5cDme6y6WF5LS4f7bTkZ4NwVmoMZSuPCBkB9xZSoG7bUuagerCtzr7jXc7LvS8ciueax2oKTDbNNSwrz9",
  "key24": "2C2oUZxrfuqkoLRTHBPavC8u2needRvQ4FX654bGM8UpJpj1tirxDYSkA6RhH7VvLsWTSRhQnuzVds3pTEN1QY3C"
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
