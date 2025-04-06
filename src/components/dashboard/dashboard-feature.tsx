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
    "4voXejtqFqcQqncJQeUNNUDhVqpn6khSL6N8cVEf16q6jdMt1dvhYZtqp8yUrDnVQ2nY2rpz15YEaBAR5Le97jop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPbnJF46dziGz7KY1D9qgdXcz8v5jjsFMziexwYFfyAXPEHS7sBLV2ZkuSJ8oCVVSc69cL3z84WhGB7fUT1ZmwP",
  "key1": "5PvFLNCCojPCVmAxrT4qEJfDnz42NbguQxH3Eb9SY5AudX9nQJHftMPoGK4xDR599yyj1KSpGgVNDhvkJdDAq9Kg",
  "key2": "KRS5vo9zwGZBK2HKFsSgL8h2BMgy17mYEgPaxmW8YMZPCnej3ChjZqwzyCbzg77zqCguEWojNxz1Y29be1insx8",
  "key3": "qUJpHUaRFSbbLa74zHsz9DrvrfByiQZqzyGnrXcYTTKmpindsvz4LqQcyS9v14ixPgkhY2bqrSq2sRDRMLMvwwH",
  "key4": "ncqZ9xxEVSmk35gvsy5K3VzCdyFo8DduQD73KmvQrq63vcQPkZYw5QtDTqxjFRhy8Uua3j54DNnFoaqW19LDere",
  "key5": "SGo7y6efjyqeTSBGX7D7DFPYYg5C7MNAd9dHuH87sRayyEmiG6BFwX1ujW45GAUb4KqoXmdgWjrmT3K5Dbd45A4",
  "key6": "5QJ3PBWk6SmRC1cosiL6HUDeYYmbTJZXroorsQJSdXboU6c4j7oJ3mdGAnMPLyQ3ksAhRLZgPLQ8s93JH6z1YQB4",
  "key7": "ube5NBRDUf16SpxcWgYSnnrLYndnDSPFfGK8AemWw2vMBvsdvz8oGAHS35JgLgnzGZd5PZ3sQaWHbc1PHTVodUX",
  "key8": "3AgW3EKCkLVQtbNL4zf4F6mKTthRy6QxhP7VKrNiadJheorBea9XAzdPtaRm9Lft2JSHR2KUtmVHbGHBBzN52Kxh",
  "key9": "5t8mTYnXJVnRHELVjH5i24gTQnEDCkTYGPgAQ5FUSkK9CgRg9g3ZXGjUN5DQmzpQ8fGjbGeDuwaHuBacRy8zPqBC",
  "key10": "4vpFm1ghjuN2tNbZkRzeuKqKDHDx6qTgS4YTaKrjKVqBakWXd8wLQrv9FZfJKvSguQjoBJzWdi28Kw8wWdPtyXL3",
  "key11": "4aSD6xJg6kxvK3xVCKCons1NDA2UonyGn7ijsrkaeBMtZY7ro5BhZ1bS7N3jF8u9jbggsUHqzRWqUSnQn5jqHArC",
  "key12": "5aiwdAGfN7uD8Mnb3rZxLVwFbNU9H1FB6rFpnWYdRLVw8xEEVnN2wzWZZGomUPTShYEAZB6rJejCya7rME31SoRz",
  "key13": "2mt7rhkMMzwk1snxjZU7P2bMZqtczZeHSDqr2hYpB4k46PMKkKMEv2cqLYktZGrhCAeK6D5K4S9LfAgrRjD3vzAX",
  "key14": "4pHpr93Y7yUZEFxQsJh7gPUizPbdNYqwcCZ2YBgsm49Tv5PQk9bBFpt94K9jf28aRjFD6gm9aEdTdFNqeMC2Arr2",
  "key15": "JCZUKXjC3Ww3SK67wdAEwfTm85LndkuEyyTNoxcuuQx1U7gLu8c2dowQDv3VaLmYYqZ2YF3ZZmHTLRzXjCCnXXK",
  "key16": "5mPFyy4EPPZwsD5FCnVMMwgjGcUfroMuaAoGiDLUUiM6TTztZmMVpvnZZ9qrbuZUy71ivkvZNzB6LL7pFUxY8yrw",
  "key17": "3r1j25yws63RrrnwLkE4AWLSuRPXaJHP3GvoKqPPRbzEKsqbxBJpijhiKs5CaWV8UkGV6b3XiHkm1iQKovUj834h",
  "key18": "2uPFv3tkWBLwBPXn96oRc5YBBxqtwR65T6VQKJDktpcjmrCy6hs9DUCxdLT2mbYHi7LZfr8DVYArsZF48CAKZx59",
  "key19": "3S8NC7LpqBDrA264qZY3pUM94XM5W744aKTk61kTjuW3DdJSMdv4P8Ti3MxpC3PD6kA1PybxjKBmTFjxtbbVmNRw",
  "key20": "4kabim83okn3w3sXfRVcDPN8VdZJujLwdfXpo5YyDBn7xu6xAwgMxtR8QP72DA8wJBpqzmasF3J9AMmxMknNC7kz",
  "key21": "2Y9DZH7kdEq27if7vSHFtGzaEgZgRVfCJ7WGQZwXcqHtgaxoqYrxtaUy1mwguZkXQj7wmnfPAW5tjkoN2nMriqUu",
  "key22": "KKsMZy3fF9BATkHmU4vGNYmkFa9r2ibmAtPvdktTD7vQwfgvJzdWg9A5kN9Qz6xFcnXX4qc1UqATkYWZ2kLsB8Z",
  "key23": "3ma22vcbmHgwdngm6H1KV273WfoHzNaQE5t2HqTPyi8MYSxG5jDRZ1jP8Ancc9ne9yfVDENoRq34B6rH2gm3DhvS",
  "key24": "4NyVZUDSd7QhVpKgGsrLGYBX42P3W6vCTcLWAKyUe9b89aDPpfoz2ed6CixDhCx3bmLwSb9xG3fiU8rEZmuBYYZd",
  "key25": "3ZkyMm3W66niYjah5Ew9s88GTmrBwYgbxKtNKXvoq5B4XJrPFURw7jzKWYafwqWs81cJnV2KodtrfRzJfth2MpWB",
  "key26": "4t68iJWPNAuVWqgV5sGFiYevgoUc8iuARsTzwdPP31ZU5qPq3TukXMFbZvW44efCpbKH3Gig92naodeuV35TtaDf",
  "key27": "4ohHxrgu8gKZ4kWHKZT7GWqu6UJYDHRfgRCLxqSv3LasYWBsz1tiotwACiu6HFQgV3HkU89N2Z45edT9kWMW24UF",
  "key28": "52c3N4XWeaGDrizHDFjQZfWuzD8SMwtKSXcmHJaeM5uwp7ovzWN1CGJQASAteK5Uh57NXDhiLbbcQ1bAgmQvMyPT"
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
