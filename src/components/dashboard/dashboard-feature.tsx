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
    "wZuWzsg36VLym2b6UaQVEXe3WZ4CzgDxzywvj91MeCrB3nsn5tMPoncZD5CoNnDEJj7AYBbarebjw8PkLTtjf7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PF9iC6HnyE4sbpR7yPeC2MrvNRE9LFrwABfXo62eupZUpBmzzzQn4EPvWTPCGNXftxFzaASMkZHFGVEaATszsFM",
  "key1": "3Wo9YNHjZywEgb9XUSY6unt2nC2ihDJogAD8MFNFv7NyPYgfYbj45wiznovS4hE8Vo3hcZDPcUjnQtYZDctRAiEb",
  "key2": "2tyuqk4nEz69YAr2jF74VpaSfghTpyUdQKX3CtQEhsTe4GmcSPSXMt3f2N3NzuDArfJ3YUiFJmrvpZRFwsWfg6Zo",
  "key3": "4XTMbpEtJcpUkfYxhYvdDCL26ywdDtQsmijrjQuRF9wbkC5zP6aeFZ9bXX5amz4vQYdvkvHVA3Hph8TGyfVdfTkR",
  "key4": "4sa9xEw4DSR9UsGKYtyXo5XKzFAX2TZo6dRUK2JxHemFnTTZy7QmHo8yqttxSZPtdQpg8BZxKFgjSEncP5kGVfhr",
  "key5": "2YLqCHNvPPEnByhRYiCdApzHzfo79eoC1kf8hag8qsJYgrZ9oMadhTjPdx3QToegmM5BgNzAnGA4jEki5mpzMr9D",
  "key6": "5MwAqqx4vwHFZVmgdW7AfoWF6Ms7tyvGQmiFjwUKypuQRsxoYzzcbgmZ5VYBTywczmTVxjcMvwyok16QZbNSoS9H",
  "key7": "3vFNQnCd3XbQ8mkqSWs89CRx6oNA3jwzbCk97mt24sjDPsQHCGbjYjbnKfAUfRQ8V93nLLa8FNHFyorwVXVgrQYp",
  "key8": "9Tp4xBqU6S1EvcFru1Sa6eDJQyqNzTyMMbfQjAUva2tWfXLs43jQfAzJvJnKKenjxEYDAtyqmJL4FNWMghPGfNn",
  "key9": "DRkissPeNa4wv8EH3D8gDi8RY135XDcGWYpCbsn1PeGSaszZ7w5YR4uQ2zvHhtS9DRaeqnursFzNkh6fjJpD4w5",
  "key10": "4YLh5ySMqPYsfwZKk792LHqH7z43ixhaEetmZRqN8CotVF4kCX1H3SjnxEUM9EtbuM1q8gXUM91vBfXCRWkbKvSK",
  "key11": "3mwf5bovPNHSSetcZfDDkFmmmsatQAhBDGjRDnZmAueECeCoit2ndW6AiuhHYTE7C8qndXvJ4xrupLEjtzMCe8Cx",
  "key12": "2P5PadgcPcwGgjPr2KJzJVwV5TTM3X5MNqbAgi2GAg5rxEBTbXNKK7w8XGxiwMq9LiieVSY6WVJauMLXkM811pve",
  "key13": "4Z4wiHCp2xYmA9jxS4rPdVfdr6GnucsnF21jBm8cz9Z4wDa4yTSRTyxQLENwiSF54KBuEg22sUSef3E2Mu9aXpAe",
  "key14": "4YruQNVLddDSgcKZ2ghLpFwm4bnoNAgY2TUT9H8vRbPe2HrDfRVT8gQYuw2WsSVy9XXhsDwDzbVr6nP9LST6Qj3Q",
  "key15": "5rsKbGrYMBhvtsPQNL2kM3fsrWbUhFeM4AXimazRNi6bPJ68QDGoWxJXHTJrqpy5xDM6saow9rG1dVsMcRqhvk7Z",
  "key16": "3H7GH8vKWTui2jdRk9XZGpakWJmCtK3dFq28hyESRkLD2esiuiJNkK7Y6aLmyX66LvoEo7RXSbESeKFjqAg3Q9uC",
  "key17": "5mtsEFhd2EpuW2ADYRpo2xnwRAC8RQBtj9SdFLwGQXsTWn3Za36VyFwMZLBf3nN6y8bR6KRLzvzsnbivYexErxVs",
  "key18": "5sz1WVevPkHdXUdGMF7pF6fmdnF6VvzFFcyixp5G2R2B4FWY3c1TdtWVbYL3nZg7GVoYMGBmg7TEeTGy2HJNGtTP",
  "key19": "5YSgPHSbNDeMqDyU67F12XBSRs9FsCmuf12Qkw7zYAC6WAVReMb9cooUJekwhxmR7aQZE1dvhzKabT9WmpVxTcdf",
  "key20": "RwKwi7X5QZu1FiGTBGv995QGLDyKk5JukdvUvZFcjcGX4eatjT8bFgKbxCwpFzwRJT7nnGmLTNxKQ3V8K1yg3y3",
  "key21": "5zGauEUPht6KWYMKCyVTSa1EpqSDS6Y6jxw5Sw6c3HeghJHYpmzj7ufgLSvqNUynBMhqqctnRDsjdcRywPe1MkaT",
  "key22": "21FbtFcMxGT5FwTczMGLbC7eM69yupATQE2U4Kq65k1AK2j5C77erCvgfg2H7FxRQw5sufYSyGgmgCNaPv2jDzKi",
  "key23": "2RjmfEVmoh8FTM77hJ3udYYNw5ueH9RFV5SqgBw6sww3yyWqQ6z3KrSkhbizzAk87nvaVoJ8jVwMgDN8DuVuar7C",
  "key24": "4oK9t38w7gYPG2axFxuCbjxHmNixEgwaZDw7W7nqmVbYywUkDTJKHgSQHuBqxnmxp5yyuWNNjjK3nCLPwbrLnXKo",
  "key25": "5MVUmytfqBrHGYRnCSaab5fBpz1vVbYxDxhuqm63eXKHTF6zEffuLmpwt1QAwzjcZczdU2dLmu9NSrDovzB2SsXR"
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
