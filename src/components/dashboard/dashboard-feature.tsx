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
    "wN6acjniFb8rznz135tUjigpW7w5bL2KWKWNgPG8NckWCxCkNNt9Nt9dmB9GqWhHtuzj2JqyDPmr7K6e2uBWBo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhW6WTNEgJQBcgZyYLAQKLnPApDm5Ac3Njfq4KKnnmYiZ2Em7x2zLTk4RByv5ndt85fMLqBRfJtX3KooqMJFaCg",
  "key1": "4nxFNWE1U7W7CPgh6zzUPTCqD8mmAZNtt6ji3H5VmhLjRhYfEdRafhLrCnnM5xnz8ruWUb8UPe25uNahqHxGdUfT",
  "key2": "2T4457WBY9CkRqmExNPGZc9rBrNRWtRMcaHy3TGzXtcrvsahYNkPP5PPMLLSR9tdznTjXskDa5sg1pRDccMNM1Uw",
  "key3": "2E2oceR6xsnSC3KNPtVs29RnsYxgRSv6HaVz4WL1NBqeds1MyHk2GZvDghR7jggX5MZx1vkoMa58QPU64PNhYJGL",
  "key4": "44iBQZ3Tv8LFRf9Z5yp73mBAaYvDspanRj8W4cNeFH67a3zqoQ1fpeEc4xMZZc1jqhYocUKdTxDJdhkfPRgkMmNH",
  "key5": "3qKd3uxU3hiZbew9DsW1PvxTTgQWMRPYKRrt2JG5TEncx9SgrWrf49dxCrauDn67XhXRPEqXoSybk8XYHmCcuP5G",
  "key6": "5d3673xBJjJG53xsvi2R6gEuTCHWqStCHVh6xciogmwMuqYQonbiLswheGtEb6mMLjVeCMRguvCaJWMM7vug2Bce",
  "key7": "5CGayFZ9onXMQezeGexUrB2EkRj4k4VvLesPPxeeo88MKaKvwtfgfnPoRoisqQdnsRAsRJB7ocUjaSFYjSyhTH6p",
  "key8": "5DrCaFdBQNvVNpGcZ8ca5JrM16xqztTPQL64QPjmd6jbASVixToAzhy2gzbdWEngoEBWWT9Y2sfBuGjq6cJbKpQb",
  "key9": "4Hdtp7w2DHHCSvS6KA4opycyhrzFNN96TeNRQgJR9h7Mcre7vkXFdJHEgm4yHatMJsxtPAXURKCzxYKh5DZDQoy",
  "key10": "4Hkc1v4R8sqkV1q2ZhG9xnFmz2XxZRiZ8PjrabmhJGC67CNy1vsKtqRmLZPGqwFN6EYnJ1XLTdvuiNpcJQQ42Mww",
  "key11": "2sucHvYoWjpHqDh9KaQptybJ3kULoYrXj2jUcQ9hrUSEAkCruZ6VAwR9uCsBWZ35VR3ZW3bmhjQpBYK2UgpbdFdc",
  "key12": "3Kf5w8RkzoH4hPVJutZweCQSs5pTVZDdyaoEAMrb89CQg85VZ7gHgL8vP2XqPttGh61eSHpfVKjg9sEAHvpdgWYo",
  "key13": "5D79MMpuf6WmicEZU8WqdLeVyLTNPtvLHDnTSNZr6DiAKfbU6cK7JPMRiviNUwUuv9Q8r2LvawKPqZpyLPAgrhLN",
  "key14": "27uXAFgwBQWntXjfqouBG4Ps7dTpoM6p6i8p5EBM2sUJQun4i9Wna3d88DYr7CAA7oqJNjcJjPhYvMwJpxsSpXS8",
  "key15": "4ET4D95GwCtDNTAQkP7Nv2XvCGHsogho75Dt2hrY7FoEafTQ8idGYKUKnvDJF2TKH6X7fNA2QFQJwSfUTGdQPpf6",
  "key16": "4sGnf3SmjmgzpBmN1jPxhx2JX4KWFy8aJCg1N4oV17dCEJ2eGL434tjuXtGPLj4i8cRJrCCtPoiuE9Hf8kSWmLcR",
  "key17": "5WT9bwwTncrYRBAim2p8zdBd8aeWALZLKVKu3arnBHBx7vFd69f537PXAXsUHNcY6CuD26d8yqprgzXTGT8izceU",
  "key18": "4A3KxkupB7w7QDSDoeyYp3NfoC5mttDCtPyAHdYnKt1BtsDMiJYtALSSSBvGVEgRH91KJgz1sjb186YeFAn6RCBe",
  "key19": "3qCdUkktFJdseqcbs7nDFqiUTdwCcWRyiZbFiK1kowYuuh5D7owTQZVvbjUU9zAYrSANtaLbbiBR33Ezf4zV89Ud",
  "key20": "5FV1rB99ES9k1v8n91Y9xudJ75Motqvv46WSr7BkmqPHLRGAL4EoRD6PLneSzxGiMmwotu8pRUbEjzaBawJCBmSc",
  "key21": "2srPgnCCEmkzo5vxwE1pFQiNfQJSTJk357ki4YZ1d4LXZaRq8EumVFc2NSv8vAmaer8F9iw5Aq89kxLEkB4J52Qk",
  "key22": "3zwvnb4q4oNc1DbgSZPpPEq1KtNwji1AM2nMswY1bMkZXtisQUsbYnBaodP899hCfj7MfSg218LQ1vvZZmhJZehw",
  "key23": "5dihYhEBUgLNMtzQWmANq3iAahXrwJXGPdXyq3gZe2j5vw1m82xj9VXqrBx7AG3UEEV96KG5mbQAgMckYLFQTwP4",
  "key24": "3YcBng7oUUbqamHUNirRH8VMcyy9uJLhPzc4P7B34sZxWQgAqJm22gSdozU2czXmmYPMtBcEkiGGPkR9U3Q1ej9G",
  "key25": "31yHpMQYUuBQkmv5J3DbPgZzEFcpEQvKTDixvG9dSUxu99SmY7nT2XbVXknApUy6xgmXCtwFmwrLVk9ezBabbjyW",
  "key26": "2r6rVZi9T1JaUUZp6AfZxPpqv51GN26CXmMCamebKFAwrv98oq6TgZx9YAAD17FtgMRsGCNu5bzmSkPQgrP4KYEn",
  "key27": "3s5LvY7ZswJNQdHDtvx8XRjpKzrokcATTeeZJ5dsByjkSwFr9hh4tQM1C1tBAm4E9HwSUEg72qbQwapFkGrh9Agr"
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
