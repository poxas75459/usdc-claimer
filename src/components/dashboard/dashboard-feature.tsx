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
    "2kG1iaGqz4bREQJgibHQXbxbLDwQvDd8fk4sRuRJqGZFX837TKFiukq9TBuV12DXUFZsLuF71Jb5tFKwj9d1YDKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2ytjJjgTDmMJjYteX1vQuJWoLud54JhxFCKj9tKhwBDtSK8DWfho4ScegJ7mUUxG7jZ23mLeWax1TXEhYNsnt1",
  "key1": "4gPCa4hrgDpyunQcHstE1mhr3BF3aLVTABJVctzXNwBvwuJgqnZk6q8woCYnX4x6UmJZjLz63mWwNTqcUm1osCh7",
  "key2": "4LqHv7HQ8KnKwVvfKYrJqAufLskYpLkWaeCPyCzNiUWHG6ptdZwLNZHX9ESe84g7aaRkgqCfYrinRQkT8sgUpAqs",
  "key3": "2gshEgtCZ17zbLteUgR7afAomJzpqDewW6y8eBZCwLyxr7A1Fk9b2LaSkTWfj4gAmJAtusrN2Xcef1hjzvrx4S1v",
  "key4": "C4zHMMWDx2xX7JomYQsmC6VP6BXdB4AESgSr4bZCfPPS2WFN9LUsoTyCbCQm5h3kZjVV1dEzZrC9gGdhBbGzhtE",
  "key5": "61dChoQcNqArxWoHnJYnQ3Z9sExWy4ArYwMuZp4vBJi9aoYQT6n34F6F8hHMXzrXzMRhzX9x4rRGVeUmYKf7Khm",
  "key6": "4nb3ifgEc2JGriACJG7XSFvupNW1vBaRLYVzH3aAcdEjiCqpeVUy5A4pbHdEL5dsx7SApwGD3fs9Zfmzoqbq12T4",
  "key7": "3SQws8qtNtuC9gnbLThU5tGjVgfdoQKsVbH96ShfmxyczVDym96YpDqZcd9BpiA2FJoPXK2ZMvAV3kQcB3jCStbB",
  "key8": "5W5PQHf6Z3mmjJXBvTQPFi71rZmwnWmC6Gccm11zFCN6YktaVgFW8SwUpvfuKAm8SXnX5fsR5jNFfk3VyJmTZsbu",
  "key9": "5kpCeBmM5YS37mynoFTqXYixW8qagaRWzLMoqrzMbi6x6SPd4YqVNZMomR1sfwrV36BboiRijKVBmeWco1SUygZL",
  "key10": "2txq8c6j51iJYg488w64Twqw9iqhPLHd8obpjAh6tEgB1N7S5hrzCht2Dyynor5XiDaxZ5mfNK8ZDKxvwthvAkrG",
  "key11": "38kZyqMWT5rM8x56mfFTjXuEmDv24y8rrSZAXBAeD4NiZ3dhvhhq5ZTmHzG4ahpZrjkCnbhkTmKYsrhWc8H7Gbxq",
  "key12": "bYL9UyDa5d4AyjtrYbcD4vwmdNQSC7pihqr28hJFX2m9p7hYhzSs2WiPaaEq9aRMfQCcF2iwSa82p9Nc5VQeMef",
  "key13": "5z5QPS1Poa6roztA5PEnoMFsQeAH81sV9AMoqVCpTXKLrwgP7aRDc9RfzeNWNFVcVKqa2ke1xZg2BHKbxUoS3AAi",
  "key14": "5qHTzr3dNjNPLyk7P7GcvY7G61SY4FzVga65jKprYv81vnDHEFEaWx1uswd1koB1dGYyu2Eq2jVKx6qYjVqxQ894",
  "key15": "5nWN3PCar14jcV6HHvTZmrxkHuA9pTP3hSiEgujqpqHArMiBRURe4EmT4Y8yGYrkic6ttru67qP4Uu6eNuoh2hJh",
  "key16": "4rLpmtcRBFDFqxpXhMr62no2EfNf7roVMf9JaMz4pX6s4c8NHENqGB1JvxKMeXC1KAwWHJ5cQatXWyVcH4fwshsD",
  "key17": "244c4QDYckMDJQ7bZkjE9u1Mv9Z8d2iNbwwUxYq2WzYY9qVKD8QPGjdBvnw1JfKKPmkBNqEcwDizv17k8Em2vr4b",
  "key18": "2RVLx8kWbsw9nrbHoChB2VvkWtXCN5mwJxQHAqXx56dWZeHK2kxPaDUbZZT3Xmqho91Y8YNkkiRQCYyTPKkmLbqm",
  "key19": "g3miModNTccBi4MxaTKdL6EjwYRbtesKyPgGfsfmrdHT31aXSKh24Z5WhdevWUuh7mSYUxcRz3hMa2Ewn7equQ8",
  "key20": "5z2xbne2iq69ZtgmSJNg9BvAJDevA3XecLawLWrbSSK3BJaciNwEYfxEtU21y9eQkj9XgmFUu7jAKXE24XYqK4Nh",
  "key21": "2uPzndGqGuPFEULw691QFuhhaSCiit57h6mAh5vGwYtp8dGVgPwCPDW5FitwmzMhFLZVAC2cW2zrJxFoRfoDWHhg",
  "key22": "35gBs5PKrAoJUYj3xbGS7P5LRkB3tggM24xcnUcT8XQTjoqikCZspVzbX5npNwZpykxEj2pRB18BPExtqHJvgiwf",
  "key23": "3hMCnniEvDKLttpfJKEpcDRVpQCPdPen3Ec6g6UHkqbh65YkrCojt9ceQeSCu5bj8jyHZcRwbiaFNim1Yt8qADVN",
  "key24": "23iNSE6JmhneuhyGQiyXkCvJioFMeeFm51HBib4W1nvCgvJNavUJ5HxViKnBBpjCdWTrMk2z8T99FDkptaaf2XF4",
  "key25": "26LFafWZUYsbTS5ZCwBke8HTaAaRfJjpNc2myXJSMRvG8spAn24DCbioA4gGkjzPrU4BuHUe5TdCHFY3baR4EVqy"
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
