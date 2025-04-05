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
    "5RKQJ1nYqteWXkxMmTPiGErAS38A2Csi6WUD6xhw8h6wp4eZoB3Ah7YY4LhQd5NAupGm2WUQGbgS64ujQGm1EbKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoPVXUkqiHmeL5f33F4BAP7gkhMkMUZxHJZ7L3dSL137HZfGPny6wpupPQ1xfr9866a2wc66zX5YerAhf6Km79Z",
  "key1": "5d7X4WRk5XNH7rVmUAiE1z3GnMuCFqiX1Wua79KkciASXGPfSCXheidRcHVKgHsYJHhowW7ayndf3skeCZgTRCed",
  "key2": "3p2sFRgE9C1W3xE1gNkeFwBd1KqJR5oeqFMqJK1rE2xPDq5LyyStUUSxDNrm7J8hmCtSo1rPQJuv2thu3ZMzZJoA",
  "key3": "3GW2NGpbMGgGHnPVkimToaFQk8Jmh4sSgVXwYv5NECoWTMAWxaXSVjNumHDGTAinNV5MiYEhjTXX1Y4XEWJHDNsA",
  "key4": "4zf9bxH3rJBhJqpeUEb1Jw98uKgmFxKRr7X8iddaSTGQQjqZJ8KXmt3B8q2M2LfsvaTm3B4jRZAWwec8PTRQBv1b",
  "key5": "2TQsMhZXJKyzFQvLmZcyYAfnPS7xHbPjTeCDHtDAeqFhQ6MyWQgrcauto41JD6kmTgWafNkzM3P4fLPSFUBErGc9",
  "key6": "3Rq9kfHd6iMoNs7bmQhHbQqD615SWaYL6ou8xvCfvLJifXgKVy44CLgnNeUbhLacngpcs9doatgtgxphqsdfBUrC",
  "key7": "CszjQMgSXCm3yVw6FrwYaUc83o6B1vq5GEFN26LAVfAKvN7PzLvmxEFz2eEiVZ9NEa99xhFKQ2QvzPiv6FjoP75",
  "key8": "3kzzVVJBmqsiotvqKo6KxwZuEbpfY1wEa69VpyEkNyt9HkaRguWbzSfgbhhNRooFbVoS5Q8efVkF1K9nfBVaADjt",
  "key9": "653ctqGNwx3VmSST2XV8gDyMbBB5s54bEY3NbrMsweX39DCJMKTaMmVoNQoBcDptJudLn2u8waTAc215fdbmHxEW",
  "key10": "4C1cJwzUqKqbQX5FfXobnb2QLMq1gVWc7USpbE6NeKcjdzeW8gZdgL9hGb3o2EmKXKDUZr215ovFn6xJN9UbFEgJ",
  "key11": "56ZMaSK48TgUTsy11HxDw3tVhvhJZP9tK75WVmSXtGRJixhs8D2VyYjNpzDC1yYRtYxz6RAxgsqi1XmLHnbNhRBk",
  "key12": "6BvskBgyb2f2TX8xXzF3BbqsXsdWsLTy18SYUSJwHRCp86dtx8QzvCR7sqoKuqmm4uFiwNjL1azCyMpmxSWG3Pz",
  "key13": "2FdRFigkxoi5SHpLpLGK7aT2KavhutJrgs5xTpMwdgRntB5DNwKSYmzRR1E6xzSUo3ZAw1iL5Jb4deNW1Nyr5wYT",
  "key14": "5dzupE5cVudYDNYST23jABa8Kh8syLT4rGcXkgFHFXRDJREppXxBmqqhAzJGFoxsh7tiXBAebzE2QL6yG4W8rHzx",
  "key15": "jvQe7YZ5ApZQdHAvA2hAGoumjx3gwKiSvyJoXcZ3vuLd8EyBc3bspeWJhDkc6tCqWgmzf8U4cyujJC3mPwVzGPX",
  "key16": "3HtfzRpjKsCNBNdsrV1e9jWyidRLGjehgQULspghEgQFug6gTAgwAdjG4bX7HXwrVZw6pQDxW98t4dkCpKPdccaQ",
  "key17": "58UwbCPzC5mmbjzLSupSzTDV4TXCV9crfAyVZXctRjUcdGmNTEJEyLdgdk3PpoNnfQbZ4sq5njNHN8SYvSy2fTYw",
  "key18": "5tgUcTGPDd5pZQHB9VGcHcgwMQsPGZofTxJ28Pj8fN4o1Ny1BtScEAEbo5K6tNtVqdq6e8FjFDE2V4FixS1JmTxr",
  "key19": "23aW2pXjy4KqL272AFzp25Be6R4vbYPLhZs2aLF8JVGE1UeyRiFEhJXo7UvH8YTbjd8cEZcukQnMBx2UUffiZNdL",
  "key20": "55MLNzLN3GiXGzWfbQVQqJboxADjVfHEcUPfJTduPK36Mo3SeApCcr6Hpd4PC1vs6JHkm1h33iGR6NMxbxrHwn9T",
  "key21": "qgxvNjvdHQQ3UWPoZXQ5uAdnZenCighb9dRruXdVSC1LyUptaWYybrR4noMdoPptcEL31UmwKwN76z4pp9kPmoo",
  "key22": "28JyYNscQBdJgJbrzs4MavkX9zxbuYmNg5rGZup9144MyrYZ93LCfc8UYZuej36wgKroiJhDorgYME5zkg3WauEG",
  "key23": "2rMxuGgxiqpo9gPWMGzVCV8hSwN6XujCq4VXUKAU8ZhfAcqRguZNr3ZJBhojKFybyZjKnc9JPdYADXVoKtieGqAV",
  "key24": "2Wh7ctxbLuFWrh9r4AvKRs7LHeyGA7CShQE1cVKSkEFh3PnkbrUiLrqtpnbEtxVMJqNyzNyLjXAzKVWqNHSpxqR8",
  "key25": "rBvxYjwKncKDD6DEjJczNE5P7k5Hnjv4LGgtfUeBLPYGcC2UK3k9Zsgx2dYDSsnZXkax3CR3ZsGNuAwbFbathr2",
  "key26": "2FyQ7sdiZob6ZjZMnGZtHLRyRGKtDNfXUrpDZ3KMyK1KFbTCjfz5RsWH2nTPuZ2Rn3fYSc2QmsPVqsS5YbmuMFQc",
  "key27": "4aUJhHRM2w1FSXB7CmmqA7ZC3AnZ2rHTEf4qWxXaJ6ChaFAFQ11C5DVr1F74oy5q9VPACXCYKuhf9wfAj6Bhkrx7",
  "key28": "wWWEBQmLobr1BhwiB1gbEAaUC5S2LBYQ1kKGb9kb2hr3ahREMLBqSFGMrogcLhKXcXKP4cDX4t1db4nBGn3cZ2W",
  "key29": "5bySR3cmGW66qXCnYqfth4KLruqwDX924BaS6Dzz6fZdbHrofxHiDghcisXxpP3ardv8YAR8gFbpk72qfVevgjYM",
  "key30": "2PWGvmR4UoedktFxzXhpWhgt9Yur5xYyxgxQozfEwr4QumFkEXXW5DNBbsEauXa5jBseWc9DCzjDyPUew2vn7zvY",
  "key31": "4uVuiQXy3DN3UqcW62wXtR1rUZiMLLg4G4Lzz4YCYsnRxhqRPdeCXNwtqbUHdmAAF6RyX5gXxCYF7FmxRvCbUNJZ",
  "key32": "sasT83GUMDThee87b4dca55PiNCCKqLHPMNEokKbz2MayFWbZZoBZnspAsZK1kB3AgRdYGuVEVtNpLUaW2FFwjS",
  "key33": "4iEKkP9qmZ5nP78eMM5CEUzxuyhqNKdThKju9ZA6x6VcKvi44fc5Xb6NeYe6K9nZBxXsieuaHagd6SFj339dUbbn",
  "key34": "5j7Yb2oHg4ZZbDCYGbz7GwsrzA6Vj9W3Z1fXprUBfCjgcUrKZmWcMWSVdyzkn3GRsFg6kvocagfCLqF6ibcY9SmD",
  "key35": "4A7yUd1GeqJNXRBtrMWHt1E7sHp1qjvAcBsxnHzCQGxoPsHwZH1r5K7YX8mq3GYBYrQtGMMdHL5LiFyuMBr1tB3B",
  "key36": "NpndCiNkuyQYzw5DoCyouaCoVX3a2hB56VMcN6gf75nwaMwuyAVS66VPaeXnJJvhUiNrK5T2HetuHztCu1LGzGp"
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
