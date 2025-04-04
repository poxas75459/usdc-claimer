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
    "2U8Nh7zEcnK76Hp71WJGGr1CYPJaePKTbhD8t2p5SfNmHEvbCT1gmQj7PEHhfbUFhDuGhAVhTw1VFKnjaQwsER1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4noCCFLDoumPB7BdN1Z9Fe1cVaQdYF3fVbURcu2h2vnRjeeyx4ZyAxTkoG3F1cb62aZgDFsrjPFF74gfo3ekrLGg",
  "key1": "5sVxLSQv4PrHi5kxR632WQWdwbTusKBTdB1ZWWumYCmwSReiw4NVdTUnyKCYN6XLCdMn8Fmv8FK7JpgRDxu76mTM",
  "key2": "5DcPsj8erbzszku7NLxt9aVggXk46C7EGXkX7QkWRM5qjwsHnxuxu3WQ2k6ZV9btXuVprprGQAPAa9ozUbjdkMSS",
  "key3": "3GiMLQWjCNHgNmRKriK3GKWztb5A3g4oVayaU5ZoUDrYmC25P9Xypw5tVv3oDWe6MvTVwf7boFmKeoTdJJmgHtFg",
  "key4": "4UbBgeerD1QGgd9iM9KD8Yuvtp81wVXJVqSt7njL3qzSgxiwJ65xFHaS5VPH249w6dhQc4tZFNp3dpAdyMDyJVK9",
  "key5": "2ndeK2qZqNNgg2s2xtuGf7S8cDxDNAtgrUxDwG5vhfbym13gBFo1Pb7HhY2F6gdYZurowmyJfVqB46ENDTYksAgz",
  "key6": "5btBEM6WZeBtSN7UBdesiUs2khqgrHH7sFEk3f2s1FBQyCyZ1zSf1oTzYiHif3GcN1QHwAwixdQnLVR95UtMELnC",
  "key7": "4z3HTtxhGiXJsfj5ZtNkXyJ8kgCeCyVA5nE6qT5PBpspNZvAiyUNjcdDjDMzn7uR8D2S64mi5ceQr6rqdmZAEcWN",
  "key8": "2jzdjFR8HCFjsMeFDLUJ1CHUSYDqeSXRU4gX8cqzFxz3P8xeySsB9bVysdodDmny1tpbHKGmUUQLtfv7dNL97Vfd",
  "key9": "4FUCSxcPnenV7H81Z1HozeyrmZSqebMTzvgRz43qe2LStdqsGgjXcctpBctFbP6BzcuhWYXhmB91o941R4CTiM3y",
  "key10": "5Dp3USkjx7xZtJcdCKh2NixpYqWToRzhivkdXf1jjzXyVv7bHnKvnSri1QpsComAGXuxTQU1YrsDwXrgvcehx9vB",
  "key11": "32Zkq6KzvtXiVSMvc9Y3kxqwEafT4WNn9YjWutDVrpZHrT13w2mDEPuZtaV9Xmh1JLqAP7WnxRnCN4SMT9FM7nRb",
  "key12": "3PcAxkEhVeuumNgWwQmTtjifESDXt3FcTJ22THTfHAvW1oYQJTj5Lqewxk9sb456iVo6w5aP8ihJNZnvc82Bd8VY",
  "key13": "4aSpekmSES4DUQoqF9yME1D3n7M1637JTwVoQEhp64tefQQrMt5MGaV4rXBo2B5E6BKRLxcvFEpDHs7tVvfA9Eum",
  "key14": "3ZB2j3b5b2KXGSGjF3v2iBTE5rGkegojMworwGCiFFCWK6XEddRyAQkZR4LdTd2SWm6in5tJj8ULdRkrJBY27mb9",
  "key15": "2PYnVKHUVNJp8TmGVN5Sj2gY2sLRvvzrnZm4vxAXAgByW52Larfw8oBaVT6ynbDNChihed4aVvHmMEasUELGeNn8",
  "key16": "5Kb2Px6YpomVZRTDBVYVdaNAnKKEknw5qGpPNhQWY2n4N5oo3zoHRDDGqdNLM2AtVwcvcb1KZj3Cdp7w9gQ2fAao",
  "key17": "4LtQge1Tcxeqz4TZrURtHxsdQd9B1J4E6vBqCNxbbBH2nQYmvR9LdqwYurNJKbWVDDvp41iuEVb5yng4K7v5vyzF",
  "key18": "3XkWMYLMkzJdKVLKcpH5JDEKeDBCGVoM8oB3RSXsNetpZ9hXsCud6bYyvp9EChY6nJTXHR7UQj8D3sxjjNDwZ1ze",
  "key19": "4hVVCwibdmJDgWqnXAHHeocPCLbxdSgaDMYs6WP1YQHk2rQg7jodTYEcLSRx6zoxh96KxZBjz6amNkaRrGdLTn7J",
  "key20": "5yRsiJZ2z91vLnzZkS1P5npDuKAxCpZHLteGymXx3PMwutQ34kNvyUzGEtpmD6k5bawpCX6avx8P9XogFW4fbr5E",
  "key21": "4rjK1vLPuUGq2arGwyLw1YgMTM8TpGs9dUYRGf411YnzqNaozb9x1LVRWUX2BytdAUVUjvNZSGoQHy21f3pTpCiT",
  "key22": "2hBzwxJJ7WYGZWUAFmjesqtL6HfJpFo8EHyDo5yhEHoQ3NmaSe82HRvVT2SDNbkV4H1uBd2gKnyBbBdXxNW14F3y",
  "key23": "Tx9GSkpUssBPEXenkCMSBEZE4Z6crvGfwEZw3A5fGqmaDuY53hMHZJ1dMabZYXQ1yxYGGYQNQhDJEhRAF9UMc5H",
  "key24": "4gsUrPgNhh5UxBDh5qksHbDfSNid4TDqBhYjDAfq4754t7RPZYwNfiZvSip55pdBT6q4too8zUhFeR7gKT5v1Jvv",
  "key25": "5ZSkhNtbAeqHtZDhQsHUzvf1FWK6LzFWWLLu6saSqbZD7ZY1B5b7GLcSp4eTX4P63oBB6C1ccski8z7cwukaCQ9g",
  "key26": "HVarHKPCy6NY3x363QA9FDfttP5qRG5XKZVmKC21zrNTAqy9241vBbuJyDisuL8Rfzy7StJVg9ShoHCN8AqNier",
  "key27": "7w8e2p67XGApVrwha4F6DWMYFh11VntrhHrZ3p6ZdXkVppWDLbcykYeygqCDraUZU2kBXYDHMsNcyYwfqPAUTxH"
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
