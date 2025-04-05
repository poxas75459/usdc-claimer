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
    "5ChV8tZ7DNY2XKUsj1sU1puY6cjL29sep9MrQ1MwjwZwTKSo6QSSpa3ZSaeyAusLyfuhRSzdyAbepQpdjpHb7L3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXSqHbAr3REgBCt1GMwi7C3iH4fCD4i8kfpNqBFDaAvRUPgt65tC6uDAEtP9xRCJMJCU9ab8k16eBUtcyuf3ihu",
  "key1": "5cVfCM5MpvNQJSQxasw5FiLpwa7XJdcdL7FVCUtCwWVDZPEEX7qyQpnVG9iqNaJRYnmwH4u5VqY4RkvwA9aVKs1R",
  "key2": "2LoN9Y8VYF4qgoFA3AAVvsqmfGhz3MAtdCUhFGhw1z7YWse2sPKqecEQXekzKB3DGTwkSh51h1wEncCeckDNnvZ2",
  "key3": "2FMbVhDNyqUDYTyWHYYuoULh1UosDuZPgzrLMnw2gaUh176i1SPRqrJinQaSL78JaEi58dbkY6ZosowgiMXTNP4o",
  "key4": "5KSp7xtrYHzYNSBxBXxTEcYbcgTphdvfKR8vyuGiXdGWqh2GV44xoT9vrZr58EzTwc3hFkq6gsUbGahSdyWV58MP",
  "key5": "2YhEBu5Xa2Vbi4kiT1AaGFwhSPJesWWpc5JgSQqW8S4na4a25GdsMiUQB8Y1m7eDZnQdSdfAY7AANifNj47V5gpC",
  "key6": "48MxLewcR1wNDLykdsqNi4c1nijR6zaxNBF7BBpG8VzMAaSu9rESWXSBb7QREuBUFN6eCBo8dELXfK1LASYrWfC7",
  "key7": "4ksKzBzihUhhD7rPcfgEPS9MPxnYLf3WSThLX8cUE7HXFMD39wMosvrBtR8rhN4hxGnn8s1UXdBPd7q6TAaKL7sT",
  "key8": "49aQJTYKbKCrsMbm8Fq8YbGgpxTy7oBfXCPX33L4CYUfLkPgZsodRXc9ctyAy1Ut5GxukCzog4LpmSC4DxT3NjUu",
  "key9": "bh4JGbquq8BonorxjzrBQJ6muXNDmrTT4LgzYr5Hnis4Qv3bufS6LwKhzkegWsf31Aa3GcuC3caALEh9oKb1CB7",
  "key10": "2cXfDfy1SL1cMTwCvJkMbL6HRS3SnCighcLdF53n5Df2FLMoNMXAschpoQZDuea1zVGrvuThq2hGkf4UkA2sbygt",
  "key11": "62Cz4vVieQBgJfkBH5kzTMVTLJ8iVpccWMsNSy1tdQcYWueJXvDBV8Pt482auhYScijQNnGkvnejkUEtUAiUUoRC",
  "key12": "5ArkcQjkvnia1YEhWWJGrhnBYqV6SoKmNCqCzTdAheYxrZZuKDpVBDmgxrktoEgmoVwLNjwSYHQhQM49g2DdEjVK",
  "key13": "3jgTWQFCQU4HTvxohF5tA5TzLCVv86G76qTtucei4hzff51fcSSZnsw3m7cZiHZNr5VwyUMKVzUNBiBo4zQdGUyj",
  "key14": "5z14WRcgqA7LnVidUYpPSpFRzPoCdrAVkHQTXZ57YmNAjmuWLmEhhcfX4Jm6Qri8Rvt3v3aob5KMpmZTjema93Wz",
  "key15": "2BkNuFdhwEpznEXL9JUcLZJS1CoQEfbjSHso4Pr2RWHMGM9vXeXcRNv5y85ZFgQ8YFgseKVN2TxyqjWN6V3Td9UH",
  "key16": "2q9NKDDYHwW4SVq9NNgBDqLBKgqZiG7CyUjzK9PojPaqUuRABZpFpFqzf5DvKFUhfKFiCD5HGuYqsuBZe8g63yEr",
  "key17": "xok66nG2agT5h9f5ErCGsUtvt2aTrdtj92p9JxVUeRrF11hADXjdo9oN1rGXcikFecRUzyBVGJjQKe7xsMnb6ZG",
  "key18": "3p4jm9dqifZXZhfEF7VdccLenbcdtXjye7u5NNJsEhXQ9AMWaR4nMnY4oBK393hd6zwTDd5KgrXGi1a9Yi72eUUP",
  "key19": "4RstBmiPe8PtS7fbP9Bh8XjDXDJh8rPvjpRgaXywfiG3v3wtEm4JHbaBiUMXkfZyVB8oJpS8VbuAWWnr6C3hEt9h",
  "key20": "4e2FQecuCsVDnFRMbZgVM5S2UpV28gWX3GqHihv1TmPk9prsSGnuV72NZ8XYXw2jwUHQhfd4GiE1YmGZeCnARd6j",
  "key21": "zkyTsLhbTyiLx1Woe4dYH1Jg4q7J7Su6njNcbKHr95TR3CBDj7xEYjobpTikEa9guL6L2fS7EaNAvewFxQRZQRf",
  "key22": "3PM3zVmjuicNxxYJqGvUJxER5jRPm1JxpC87JjyoFavQaCLtctDSZNSqa7C7Herqv5525NmdYXJyqsBDpdx1Bb35",
  "key23": "4A5C9AvSnZ2fwh8K34HWsTejTkVDe2YBCKFu2UbHiaEHE5uBA3mYGz8CifkxSC6PBwFamsarbyQkcq7Sqq6rZFj7",
  "key24": "3xG3gAz2GP3XVjB2Vzq7rwJbTt1t33M2F9rmX8AtLTN8f1YuW9v5eGERhY26ZQyztPdAEeSvMUYDpy5YoEDmR3dN",
  "key25": "RXcdTEjnKVEmz6M2BA1m9M1BKFKqFpne1ZrV1sM3skABYKCbtbayf4uf5FdVLSTJE6V9XeY6eVfZYQWGLtxhxWC",
  "key26": "5WU8SPbcnr5rk6LSJ1VfB9CaiB85sntVPA9AhVagQDGyRNMmNujrxxtJLBx58xauGS725yzK85giCjBxmdBtYo1X",
  "key27": "52nqh7cdeMsswE2xzZ3YasVM8x6NwqrK1RwDzobZDmgEWHxY3Fvb64EWqDGVNeSBYFGsDeGKgyipjAG1fpTooV3i",
  "key28": "dbt7rTttKjVLyUqArD1CajJJk6b6wJ1P7XWsdCuzcP6eNUWUJRcqK4Ne4gtGdXgk4iFiDBmvF4yJw1SWpeahmbo",
  "key29": "3AgFhPrTTbgnMWjpNoAWr5U7cvPKZZSxLcbFJmixTE8UGZzydGnNKC3RwPz5hyiBhdGubHRtgqUWRDe6XkP3JHq9",
  "key30": "2FnL7sbAH3E3ezYCTuMhLWTxb3WKufGYfgKUdGFXuUawXEXmmT4SPpFYzxWo3wT27Z6cUTUaavsGTzyA4mP7Ypu9",
  "key31": "3arkcTPDqwB2dvSqbX7uaTuAbcF117GpUPtFAdcMb4ojrwW5R81jWWv8ugou6SAv4Y5USmFfQqiqTXL5PMtKL6ZP",
  "key32": "3Sfsvo29L9Ym8uTyjkMkJpopifHXkTaMtup4ZnaokTjWdiTKadFH1eevgn1qnp8zuFb8kaCN127phVKFURFq1XAA",
  "key33": "2K88hzjehjEmpxquHZuef1s1iyKWd1rGfn84JEHrfDU5AJEzvrxqZVBRoxeUsm5kL8qwNiXX5kkVkC9XEWchv7oS",
  "key34": "4Nj8VVLcH2YMWLpq5D3SMkfSfShnoe7mX2fnYZncCETowDQDDe67vRMxstEmQXVu6TtEUK7je83UFF6arB2P3kyJ"
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
