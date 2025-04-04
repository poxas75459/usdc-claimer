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
    "4DwnjL25nkFXjPUA41rTfhs8AsK4mpKcCRTC4sDVkuenBwkQxk9RNPoydnGqMLhGsuTEHttU3AKg9YP3EZ2t97o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRpWaftawAg2wPeDGhrpMqCiA9vjfKEuZ9hgKqC13fKKB72YkbpE8UENpVUapVg3S53gXW6q997HfaXcK5wMb9L",
  "key1": "51Ldd8jhk1uK8Yvtw9YeWcPFTjEQV1QvjyCKMJ4mXA4VhzhiJTt3mzentLP5jETA3TxF8GSjaHRj8sngk9vKEziz",
  "key2": "5t5kBYnKrPCtiNjZS1fU6rQTTqpuZa5HqH7rgSDChCk8rijrMYGnuhQHDwP74UbgihYgq2qBPJ3wDX6JJgbJjFPS",
  "key3": "4NgUWCjuSYspfwHpooeDhaBUmBPdDKATRKWhjjgrq6SJkzrrJsgjugwcD9jg4vG6gEFd4brED4tbqQyRF19pyCZ",
  "key4": "4t16uesyEaPTro99E1EDSBBcCEJR5sgudpAqnf3bpwoKkGgrAoS1d2VRXqkYs3w41owZMTP56kxrmPJ9S8ZvxRkc",
  "key5": "2q6awYMeB9fKoBjDt6cc6sTZGX4bPnRkTY93upJiyCdjkmwZ1H7VyfBH3ajpa24rxJDpYt4j6k1QPCosZwdvSRzD",
  "key6": "3Dvx3sDTGjVncpx4b1aLcKjY4QhMGptAYpBsUoPcaZxCXXdbia6ifqDyGkkMz6uGYKYLHTRDUmJqAh2M9YUA8P2J",
  "key7": "tb67cCkKNehYNF8rDrwdxC6HEhRH3KtfXwRGfEoy743DewsUeMSPjnxaTYkqKGVB6L7moyTvsoCwV5xzmnwpu8T",
  "key8": "kGzh5t5iLK4LvF24jgFEmJNeqX4uuGW3cKbdFwnUDa9qZJtJGjUXqJK63e9ZWrG4Kbsng7YxYTnd1gWrF9328p9",
  "key9": "4TcacTTrS2h63pUSquvb7d76syfz7ZcmVP6TxyjAwrNhM8kFhQkGapUpmPirpKPSokTqcJ4sQBuVuzRgqFNSWP65",
  "key10": "4yaL33bkkPev8tp7SfeAYiaMg6u63C1e78uV4Rd6wxat5Kxgpt4MBwcQ3if3XZH5dDc25Ysa8FkMCfDtnwToBq41",
  "key11": "49F3rNUkNCxu9mRRjLjCx3gbdxiatS5VcV583ugiu7fdQXFKHCprCWmcPZPHALk8e3rxWghRD9S6KbTY6N3xHTrc",
  "key12": "4995y8AGsyWGkRJXr64gBUusQ9XKFuHNNdbp5J4XPVqB8a8rWyGSkHKJeeWJozpw4VQ9YT3h5T1qY1NgZVARQNRi",
  "key13": "3bXC9jLkDHdHPSAhtSQh2TeSGJpLAXQV8D2JdLuXEtV3XPmUwuVh3252xjiHcKf1Qo5dgimQtWwnRFVNrfvGV2QG",
  "key14": "2nbfk9rd3fJSvtsgGvYW61gUnWWYAPAiJApfB5YNx3n78Vp7oVbw5Tcn32N2vsLzHMj3HfStHo7VFHPrWVu5nVKs",
  "key15": "27zQKK3nExJQ1Z5qrEftpfUww5QTCTcEvSxgCRi8K1TD2MQExfXLtcLUZTie8dU1VSofqnqMfYBNtmcH2VDoBjis",
  "key16": "3MZ9DL1qzsP2Br2uqE6oEhsUALCC4oZZXarogqdQfKuVFc3BuaRZ59SeEqST1QHiyHtBKog6WSv4ZJxcM34dVbkS",
  "key17": "2qpTKBh2ZoWPjRfFw5xXrc843e8E6hCcqG7zSkQpjQym2BzHPvsxWDzyiFEQwXzVhAjQ7Kz5SJwasx7qXpjhmos9",
  "key18": "2rnineEqtevnnVSQuYExLNJv145VHQ3mq8eZzgHwa9LwhboWU8mfWC6zRR2CUQfR1vFa6ESjK3PQG2jqRDfo7emd",
  "key19": "25bDuNMGVrPVjxwj3dqWGkwZ1STD6wDyJ4w4i6Yd3YfaEDxem8T8DC8rJX9noVebwJrNSBTYxSfaopwxXeYbAfty",
  "key20": "2j9iD1Gy52ArmdJb3pzCDkz7DgPeZy3cGDudu8sWWdZcsnBkhSFsRJPnM5japrqm7jBrTPdn1up3mTW3TsxVMaj7",
  "key21": "5S8WHcAfRCUTy2S79DWJATVwwwzEaW7xMPUH4Kzb8xXrzv8FKbf9UGicnDLGFRWsHaRqcgWmapzqEAN44hdWTcEt",
  "key22": "3v8nEPVM4ih1Fjy9tfocQWod9MvZvf9scg1Nfuhjn5MBpJPkyhbvTtWr1reTj5QYhxPoFACpLcspWYWJy7xkHnbU",
  "key23": "4bfmqoz4iiPKvYMzgVrPavSBQzb5ZiWPYsUsAcimiSU9W1wrMqv93XxMS35d4n9W7TCzqYm2FNuQZWn6z4HqeYZW",
  "key24": "gE9CboHNMivxvBAVkUqPYsa1n6v7g9gskKosSntgLAxS24JE2ThA88Z33WqRSQmjCPng4SVQ7jqQMN1bLSc9RwY",
  "key25": "g4ECKUptaCm4aeAMY3NqcsLM9PBp2tQR3HjV5Hs3hZupCsFuLytqiYDcTgxLY9wxikGogdEBMHZVwM6WxmYxm39",
  "key26": "21xxLLfG51ZcZkqRSbk2wQdpHjFA9NEcctF49shCgz9JNaTRyNpb9NjBeJSS6RKrF1PdUgeYwAESzbJDjS9CbGNX"
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
