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
    "82dLTqd1cHjyEMEikhs45nb4iLH77uKLwx1RcjSg4iS77cyZjSTKAUohu3ST92zY9JSWrsBYd3LyW2wgVZbJMbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EKUbuHBMhkGRNLxxhcJoSMGbnCndrixwsVuyUUvAEKER7CdNkat7FkJvcaLqJniQmKHaJCUpSYRj1pxfHkeing",
  "key1": "bND545ACUysRokpBcGwk2N4wMQZVF6FB37E4Rf69HgomkEz8uE8kT2D9koviL2jdwm7PJZZzYVuu5YmRCWquMfK",
  "key2": "5CtwULtCPrnFNMfntyjKmuWXtPTzMhTdHDVe56udoebWbT48ufjCd3kBmz33LdW1Rjv8iycdF4a39FNi5Jsi2LQi",
  "key3": "2V3Ff3ehWvaavV7QdQiWJn3J1zQDWGAJiQXG4q1cAFNaiHY7ZXqzNSSmUqTBo2e4PyW354UTRnXYMTBJyq6c9amN",
  "key4": "4dG41KjB52VR6RXbCMPuXc9QaZujENF7SPP7KKAB94CtvM6kkvxmwbrxWGZz7PZEHtcvV5FaTTUbTmpVyAq7Wr8N",
  "key5": "5LEdyPKszqPo1PinVpKX2we9SZpuaZMdhzLZ2xq7AgHvGwisedBd2N5e38u4LBQhKS4TUXiY42wZSfZyWBN2933H",
  "key6": "djQdH33Nu7AhaKNTMev4ezf2ggV2hwfTi6PMazJB72zpf7K4EBFzj2s1LQpaPN2UCatjEWsCNn1grutWkqa5i8s",
  "key7": "235x4NLVntjZ57kv29wxajZQ6QPVFmiu1oU1DczC5qwjJ9D7wTFCELXUi5MryANSBNhZZ8wvNctvBAZNLJo3kWsp",
  "key8": "4SQG3eDVkUmxs9UNqZkYWWNYEJtJMfkMK1TEqg3BUWK81TCL4REFyqXm4MPKNoXwmBkJRMH6s5gGAQ7Bk8NqSLa",
  "key9": "YF3nzQtrcDnyiCVfSBXBqeQ111XW7VGsK2paTNxcG1RvS3EKQUKvcmZ2vvoNNb3jduBvrPasxyzNb1UXh8EUvQJ",
  "key10": "3daLLgUvJ2Y3LaoPZJCHk4nYn9cHPbk9H1eS2LFmRqKzc29QHqnmByrvfZ48zXMYvQupVmbDvZCw24p8mLhursAf",
  "key11": "2ZcQroS5a5eogkLR4HfsKULDcgbhwe4TReyShQMdgtVyvJssWGXoP3xXeaikHgS1kbwJjET7Y6u3rZfXpKZa4Aih",
  "key12": "5qN5xigtVwaXi9LkWN4e3Lrr8g1C2ePAKA8nMg8r4URpncGA9vu54XJmjEPdAojDE2Q3F1LUJ24DoXHg5saYpqQ",
  "key13": "5ebg7SL7J9hb8YGhLY4L5Eh4EVLtR5UWVZsh84E95c2YLuytLsjYSv1Q8U1TAhFsgN9qtX9jT5Pjm3LSR1LCHKLQ",
  "key14": "2sStJx2SxaVw2rse6PD1JTw4NK3cdxDboWc7f7wSBYkfJBRhocjNfJtvcAiC13hEBpahKnsEDHpMtbHKbUcinZwr",
  "key15": "3V8LSYm3UFLYaYxnWHt2M2quxms2G4dENVGbda8X8WbyZsy8biHaity811M3gXQSNNyVdERXDqnsvz8XQFGjnnVK",
  "key16": "3SUMZ3b7cz9oH5TdFfCpEAJz2A7eKhpzw8cBWSYaexEgSmVZiXug3uYxeBfq6uQGHayhNxz3bgSZwNcL6WNKYVxo",
  "key17": "3KfBws7irrtbLw4t7aC3QUkZvYJzVJeduY7YidkBsaaUAZEz4RCujQ1YkdhYYMEDf1Vt3Tm2nWPpFcwz3xZbnM4L",
  "key18": "2XNAuTuFEa2KrYQQhctKLmwRqjRsWRJeQcWxBMvwRQhwNBPwsLngj9gg6jGZZQG8121mtX4EJDA4GXveSvxo3SUc",
  "key19": "2LoC8RSZDJvysewnfeZx4xUKt76JARisse4HriZy3xbhm2ByJA2uUfiNYgQSN41vtRcL3PPJT1DVLEwjbS8EDGbF",
  "key20": "5PNaKtseVycexvSfzbs3X7UzD18N9XE48WKBxuWN4ZmvW7At5ZPKNDQDopZjX2DUqSjp3JnKXSDDFkiovamhw9b7",
  "key21": "65vGq73TJdfSG24XNMPN8DEtQqvYxKtr9h6EtuXYBe3oeuRYmRfz2zURKmr7pyxVFcnZcCu9iVSebqmGpPHK8SqF",
  "key22": "3evcjKawx2w3k3q4NCWf2dDry5FKD93TAkCH7Uk6afBERwdkTUN3EZtzSNQuZdhmhnNiBgFDYDTWxJXQbuTAJFV8",
  "key23": "2PEsktTJXPhn9MebX9Cv4VptUKh5GYn72n8dHgKTeL17MN9ggt94vdVYnVLW7BQFcPT5BvYKe5mzYqCRGBXTnxNm",
  "key24": "sq1yzxtMfnJYSo7ugdoX5T738mV9b7mkSLkahSFN5dx6M4yqnCgemWNjnMyKEX3RMyT2tBdfx1gEVFe2EXikCdV",
  "key25": "3ayDpQibmfzYr7gbXvq2qq5T9vqNpUdGquM9DjRVK97naRUbpoK9DDA8wtWXKEVHKTgPN4kmGqqPB7eNiNinr4so",
  "key26": "3oijgwTKnW3tnEZLzxdeNBiPN89U7TLEsQmvaaNovZHBZ4XMuTFrzat2WYTNBVeHNuxzskDpKAoxG3GcnZKHXnzt",
  "key27": "532ckn9624anycpy4SS6vPhq3TAWGDWRNWxCFxGcqxJy2YgQu1A1zze9gKNLCp5uyMTHtH8mt7NHGYsfuBoxvM9X",
  "key28": "4MRXrvASfP12vZPdE8N4jWoJnvWgZKGGr9ZVzfUZADd5ebfmKZihQFLJ7kGaqAgCn8hBTAYzzdJyNrnSWpZp1pEB",
  "key29": "4dqBEQLsP7JXeqKBenTj3LP6HjhtUEaazHRfqokJULKxDq81M5KQfMWzkbvD9NeR3wX8U8oDdHJ8FXo5zYePjPiX",
  "key30": "2FXfwHGUC6TJigqFRnstetbgnYTmQdT3KvqppUQQ5yv66yNMPPGi7ByVwsAdGywkdEhMi2SCpFMJL9wvsAgpsX2s",
  "key31": "637rMUXHbHyXcHtn9Q6T8abiyQj3WU5YAsna7We7yGwM4kmFwFkdy8VSUj94Q2nUiS5v5biybavZfzmTjEuKChH3",
  "key32": "2D1GoZQJv3Yd5EdNZp9tdiKXkY6r8eiauFdYSmp8rBYCD88JMpQru9retKXaYbjiLhyaZssp2NcY3fWEcaKDgbV9"
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
