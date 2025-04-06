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
    "5T1h7PLrDeSgvQVQvPFbQsxCzxrFhyVzYiLTEtwPuy1KimdPGrqt6qWDoWNzx4G9x5Q8svHAP6A4fgeoqFmnF8vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDQ4Sz91va7phpBgqhDre7QuRQa3jAoSoK2dNCnr1xcAtQRnmY43WKgr3HB3LXnrenf4uqSsgsqLSfjqsSpEtmz",
  "key1": "5A47nVQ9ZbjysnSEeR4KGAjDJDPUu3vsTXAP2TeK8pJSkqqksTCQLNPKbM8vDTWgvyzKoCMgM3HeAKWagVb7qg8q",
  "key2": "555iUdc9HAirW1snAJyUXzT1Cyt9nm99uhjvAVfyPZpmPPzSb1PirDmw1tUo2JoXCfWbBWy52enCK4DvgYC1sns8",
  "key3": "2yG6uoFNQMeBT9vCvuYAKVpPkEqY4k5t9Fkm4Kom1Lk46QUQr1rgq3C6M8VoK1konE7jchtKNpho29uePkP4jPg9",
  "key4": "2zFk6vSGn3kMfj7fX5xKtGyAMYz283ZrcrdHfYs1ujxL2dDEsUGYbEUfFMosAMTqc8tK4TQqaC1zMXUz37WBdevr",
  "key5": "C2pGRYQjbJFyh6KnPS6wXcGs4Mo4vXt4HsXKomx1dXNDbzBTfaUNAarsQm84Mz3nRABMLDBJmj1kLcap2B2qi9z",
  "key6": "38f6GWk1n8MLSLjehpxxxMGnQa161tJNKLj8s9vGgfn1mKQoRuZTuRVjR8FvFf6gMFRM6u3ciFTuphS9GkAJ37v4",
  "key7": "4YMk6Nn9nAwVtDU53mWx5w6BtgYcsG1jm1gN4pN6oj1gHpj4gkvBQv2NMAUxPCC52iLgrSyYApuLMoDGzCVJVt1o",
  "key8": "2sNi3yKxvkLxBWNtvvUpwE9HSv9cgeCUSpQfZAwcS27gtqyZK3TcmyKo6aBnTbhFoqxX9x5Peeyzci19mKrtPJWP",
  "key9": "3uThX78SM3PaHRcj5kYzDa2U8aNf7sKSBJwsvpLrUeVDAtGvnTUyvuGHAMGMtyuUNw1QR6Sfc6qNxuv9M3W8eWy7",
  "key10": "2JzCxk9V13F36Gm5T5U84KGnmC9u3piunXAFsxRdSuo2TJQPN2Lo3NdNy7iGG2KoiVC4oXaBqwAtnKKY2ctJ4WNK",
  "key11": "21zwdmhS9wZZLN6bRfu1iRL3k11dxubnXNpj1sn9br8r5fiarc1fPN9wm1JdeCdjBihEfVqXM1TJycz2Dhr7LbWb",
  "key12": "2GSUoCfU8JMp5q1HRtUPkvymtACPdW5QF3QTczaWGUTtpuUyxyzogKso1DK4eg6B2gx2UrZXZQqTKuz4p4mnJu4B",
  "key13": "kCR1rM57PW9Jr1artf2v1HyQmFveEX25DrRooHN72f7VpVwEnpewyqrSHYcBa7wWj6rJW6DhyWeKiTZr1SZ3Eez",
  "key14": "58HKEfrwtbsyHwFqx9ZAnw3kzn53tH8ZJWUGHBakeXsiFQDTfY5Q47iqYtATkcPZER4BuAwVEeZ1KwSn1D4bsiNH",
  "key15": "28JuF8GZ5ntkH7PY4j5mXfhVYfiFWrWDfYnsP5KQ1xMk8CYuSKkmf7k1xtn4DoTr3mNiNBEYDxFhHA9qPmanqs3N",
  "key16": "3a8fqHwPA9abBgtpjmL9wNvGSwzkd3BSTmpBZAEpCcPyThqJD6To42ySai7sS86NuooPespioq9rSo33tpWHY1eq",
  "key17": "mswgfvdffJQa7eNgncJbt1xnmAMTTmMHPmaK7N7Tu3BYabRwwmfywDubhau1FtmKUoqUa4fQskdbkwgjaeMC5yS",
  "key18": "5HdLoiiGRrpXih1U9Q8difFLZkDR8Ar3NR83U6ZZAEUMuszA38nwij5YVPmq5b56UFUa4QUUMVp1LYSMbEPk2qwJ",
  "key19": "4DYDg4ZmA6YCD3SLTdQCRUpsRRYwhgotBtBgmgW3RoRXUdZ4hhhGXi6U1abnftbvCN2Ceb39KFyXwFHJ5F4iJsmB",
  "key20": "2dqdYyCn1sjWHrRut3ub27G1GDDSKxvVekLYmUc5VBjUeK3FriiYaEwtutEEZP4AnN2zMZmrZXHKQM2Xeup4rXH2",
  "key21": "529TLxmD4S6VjxtrZtbQa7FTpjromsZ9zA3bLtTwkjaLv4YeNRCM1CqfNgvckvHZPkjAjZHX6oD77TY6BADfkrhb",
  "key22": "4LVh4qvUZ3sKVFiYyAnF1E9DTxNHJpBQ8NJtFbFW2VQYUpAYsJfqB5RfrA3xx7fnXGXdFJavN5aZKNSWi9rBbfuc",
  "key23": "32FwMtEdVDBoTJ8o6x89EbXxgVvFWeqshSKFhjEoNrxKxjfNGV4P2GhCJDyUXL6292vssvjatznfZ99gbZYqBvEa",
  "key24": "5B52W7RDTYpgchJgZ9N6jAwaLqPHBXZodEX8jB5NsNtbHXfVbTAcb3vdb5AB2d8AnyKAwLP5hGFHaDgQxGoi2a8g",
  "key25": "5yMgVRJjGPB8HrKXBraQn4xfQ4SkuBgPhqbmfDdXGH732fz3pPQJ1z81zYvoZG615pjKuciaeY8STJxW9Rb8LhHa",
  "key26": "2b1xVa3eaimfLAXCeHggXUYWuhkwqE5TKWVM9ZVQMdvXUtaNLn1dcyqmaXu2hJyexLXM6s1ELKxDAi6nwZPdmARr",
  "key27": "hwosKNz1KrXQgVGxuxN1wSXvZkApVXGvPZrNjt3cFdnaiQQTn9RWKaScSX3ikxvqUwRfHkdzASHdqQwdYzX2USx",
  "key28": "3VRJhaeKaF8JE4DwDVoLSPUicFEWdcrYn4KeLqPMeWqbvo5bffh2uFaPDpTK2Jpejcpxs3BRB6YXpFiz5HTStEdK",
  "key29": "sZrCNkAqQfGduK2dWE22mn3KHJhYF5xphGimaMk8Ce7hrVqk6XQHTHevnqt1JrAHbXY1nN8WqZdzgfYtnLNGfXf",
  "key30": "4s6i9YZzd88PwxUjqx2MqtZ7SxxxfeuRu66Q5e2VUVBRadgTknoivmff69DWwZtwpcq33E2omLR8PqRTqSfH69D9",
  "key31": "4AWbZsp3eBzDT5JrzizNUnvKeY151UQZ3vHJqaaCkTHuENcuH2qpXDCgPGj74cWHcbmaMRLzXzhRSWgxCKY4NEfo",
  "key32": "5tjdK7omBRK5A3X7anHQL6ojfaV71d8BoECtahGqAWZJUyoUchJYYNgW99HDSbhn4iowYUpBNrXeEUph9x1ekDHW",
  "key33": "4GLucg1cQLNvPNdsN2msCTa9jwe8XF4rH1EiSZqf1EbCBbiHm6NBgMZJg4G9vQrL4imccqD1F1gR38LwAHhSK437"
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
