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
    "3bG7BZhc4JjjSTCeLvyurwXkARn5WhbGdz2Msu9y84EDbNahHXyG7acmMfueJGYn21vewD1tRZRTaDkKE9jWKuUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aj4Sw7y4NN5uVYDYuYitsJvtjFpr52jpU9edSU5k5HEEpNqaCAFictNo4pknuJzEEMT7Ng6wfftPDYZMmkiTq2H",
  "key1": "3aA5PdsdPezdiYuiX8djDQVX2EcHReBq684VajQE37SLLbDSUGk9F9zvUWDLEukfr6WkYt36dUASSuBqUvEMDtrt",
  "key2": "4ibCWKnxKRsu5HYsGKdHq1xTXXGfHvfcUhAv6JuAJwcbK6S91RtECz6JyGCC9s6Xdh3XqSBa38TWruuppSY3UbQp",
  "key3": "hPgPMnF86Gr1fDRSAHLtNvUimGKPe5C7nakciL3yEyLtfUKmPtZKFnzwqd8ouJUEbyxHdPSQxvc3CGEdxykinRa",
  "key4": "4VMDSZfdBCVqPEwR9Gr5VbEpsNWnEGTQAdjrVgTyXNprEBE2tgbqxYKPJcqf8eoAse2c6d2gErVuoyA1CXCGKt9S",
  "key5": "KK2v4z4ENAQMDicZCGaJ6UaHVN7GBattox4gdzNVtfUJ6CTseccNAfJDM22Z3GNP9y7QvWRAD7Ff8VkPhSNKTnr",
  "key6": "4dKfrTeGtaMSQjnthD1Sd6yxc8PZkxUvJhK52wddyCNquH2vgkT1kHYvfnQokpLXz9eLUSt6eCS1SBFc3BFkHWuR",
  "key7": "2sEK2mMo2DbMFirEcUqVXZ2KkayMUiGYEewVS296m1u7XFX44KhhHsMzNFK98dPz8fLi8SCJRcF2WdvThWxoZ91N",
  "key8": "2xS1r1KNH3wKfUz8Uc7f31BkVqyES5tq1DiiLKxjqM5W7aqbRe7ATha2btrBrY9wCQbQ7vA6jBwjnibM1HTgxwX3",
  "key9": "41S7E9o2SBpDceym1m9xy3QvMXRyQ8fKTvuwmLZZzbRSVGNqHqWJxcAACfGSzsQpGjiJKxUxMEGYAnWntnWzsczJ",
  "key10": "2Q2PLsmRXNmoRqfMvocA4cJX9miNWJefBetQ7z7w8bKpaSA1tw3uxdRRSBxzDgLifj4ZKbAkASFjocfFvf3nvUD9",
  "key11": "J2eFa6QcYvEdPDV5MgEMy6bWFehEWmypRyoqjwsLxULDpYgw8vuM4pVLk4c7B1GeVUT3wngvuMsKUngQGcUJXQA",
  "key12": "mezxW83xsShQNqFFz4yruMhwLngSnKWVeveDJN4Y6z5C4PiEe4gHUMkdUJj44S39wz9tgdqS2SL7x12o9amzRtQ",
  "key13": "4Am74pmpmn7XMiDyUP96BdSM1aGe6KwTPAuWXz9ErTMxWH9EsAAvmyUYGRus2AXkK6xWAZUMuTCTH8AiH9buHrf2",
  "key14": "4iedCq6cPobDDTnrzoBTupkbKNK9tUeh7cFkExFJEJYuWtVBe7qb6o28VQgD4Hyg1pj696NUDLAYmNvmFPAVXok",
  "key15": "4qsD8zfMCPfZ1N8uYshVy5J5uKkvAN24Z8iCrkMr8b9ecQWrdbM85qR4FrybTAmjPXs6pkUCkSASUNkcgU9o8CG3",
  "key16": "4yNm5NZeHTXvNrR4HzK4sLwToRX8gehTLSkzpenHiXaiZYQkdgwiwaYXZrMeouCTKw3V9Z3jsxB49BZV4HPLmJkJ",
  "key17": "mUdggTYC4EKxm8TT7UHFEBzHPb4KYcsr6Ekm456qnEoBZzHSwW3tHP2m3aJ2P4AUs2q74gjZvQQNnqvJgSn7ZAp",
  "key18": "YLRSRMpdafucLVnTs3Ck1QCeducCpvUPPxmV8RKz2MqSk89SseM5tNPiWveTmSohm99WAS29NLajhTqfM728F7i",
  "key19": "tWUJrCkXmvwwLhN9QLhQ8kGkc1fvbVN5s2NZreXvjESjtrCff7XjpXZC9GMG9phCHPf8HaoGfsHVaG2wDonSrg3",
  "key20": "2q9z5VHk5P7A73L6N6qzXycQhRVehopfhfrQFWfDzCbAxwHTaViHZziULCCHE3tGJ89EPuUjT2AqFYbTdZymTdch",
  "key21": "9ZSKvovAhzCgfrVx7oKx3CptL99safbJ84xdqwkS3Bu1MYkwS5xsWSDrBxeTgx5zVXVnFZvZFNqrNkvw5RzcKCB",
  "key22": "4CnFFZMWDa8qFq7PuxYJVNGJhs5dCeiqZQ5CQukZtdRpam1xtrVpq31xwXAdFUd18YyLW3hBs9h9GirVEPPiGgNd",
  "key23": "3bW9j3vH9P5XsJ3PUJfFRmQsCtXnkDoj5oMXbfzoSygWk4ado7ByQWQHvx37TfqCcwtcVtTSnq3KjsJ9wNj2HRAW",
  "key24": "66Tki35z1gkrx5cm6YpEUVkPAigzEkKqSNmsRzzGzsV6QVDmWKStYh6GqyaWHZdhGehFhJaJUvg7ZnR6W4sugn9r",
  "key25": "3k7Z2oaH2cBVLkUg4uRvCgavE4eTdAou3QKjXY8C9FnFt9yq1xB8xujNpWMgc2mHVmcRhWmq28TdLuUxrySpRmtR",
  "key26": "4VQF4puj253hmqARxvrq36gGYvnmT2gnFsZ5nqv85X4FxLfLfgV6uYArxdKP3Nf1bRYbcABgBPhPTu25gTZauAKL"
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
