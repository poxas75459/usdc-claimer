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
    "4CpKHVQPCcDBjsLGrt7cNkFvoLggUGZ7DCN6x2AkcNcAYaJsG25oWgAGP7m9Tba6GeDQyogWswVy7GurHdP3ta9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iABT1dyWBq11qf8WQ3Q2Gpj6yVNRC4xNhaYshX1iEDnvebEfqT5C4UUf3HsYS5AybQFgHpGrkMx3uxpMjddrhZM",
  "key1": "b95knuyxBJC42AnXSHatRsyLoYF6ok5rUJNxD2CeUUnjH2KyXPaLcwo1djtVygKULWZGcPtrEFZ3eXi8dvhy7ei",
  "key2": "2rqSi7fRiSwuECWp6MLarMj4VMPvNDh9beFz9EYkYweA1y6hDpnD68VNC4GcmND8FiRZ6GahCBjQwPZ5RqxGHS3i",
  "key3": "4ABHXr9ufJUf4ZN7wk8UW11GFENJwMcLBd2kt3Uq5nAhBQtm8grMRDahawnGaXCs1b4MyGMNJzzTgR9itGV5ogD",
  "key4": "hvDjxGjuT9WJgdoVHG9HPss8JmQyVzCpybDWn5mP1ZxxPkvh7ef72pUsbpoV9vnZ2JNvvdSkhG4W1w92cMnmMKk",
  "key5": "3YZLXziKXZdcfkWrLunfqgWuwsSKweTHDcWMxEUgri7yV5nJ9mmMRwwnqG4US4K2LZrJiZ3N7XrKvA5ksy5ZMqDK",
  "key6": "62398HZNBmkvCkhnahz8cZcpfQnF8Ceh4oEFdQf6rkLBTg8hQ1yGoAndzPLVUNazHmcoNepSxy49LqXoY6g4SkVg",
  "key7": "29hc4TyBan8CMNcksWzEcHJsHn2sNXMR5yncvWByyWZgJutAH11mXZeaa4Fs7k8cs6nCDQusGozSVZwnkwyZSa5T",
  "key8": "3fsLwasZQFXWBY7knKU1vBY6zuvEeCqf2Zk5fD3DCVh6ePdfvH3Xx6EtQGj25GNTvKk7bc25eKPJmw2AcPq6nu6E",
  "key9": "4KZJFQ13GkykHC82cEuETtwBmBBfhAKL4ZstGV4dFuUbHvodbmCHDoiVNTTnfrgjbS94JXJRoNTiacpNB5eXeUkC",
  "key10": "56UWWMTqjFVDKDb8XAK7P99CZ6Q7VjeenkPVdMfdxpphbEtR5ZRX8NBpm7Twp8gAbScvG1U66sfJbdnRmePfbrdb",
  "key11": "5rnES95ovfLqz5WrW75bUf2r5gWfhytD9DvR6SwVkni8iGhzkj9uiF3S1N5zvHXaSpBeTfSdseKVmiLKD2ECfeGg",
  "key12": "457tHFTiDm6JfbVbDdkJrbomGMhZGsb1gYmVQETqfL2nXPSsDtQgFsEPZzJovPoeMWL86idiXa6oyiG2GNcAEhZ4",
  "key13": "5nggSiVrqjBk4hMfwwqJfoa7sUYMsBKy9wn3smoeKno85JHcsXMrPBxW42zxs5aWdVw5zpJcrV3MXStAimoSLYDi",
  "key14": "28jvAkZNEDRn1T1nAK9q6MXs2XAXEEoZ5NFHyxHXv29YHqBj5BreZbgQwhj7Kh57EvuTq5F7dTJDTnmYuqy7vDYM",
  "key15": "3TMDJk9iGV4BswyreZxDwkfsyUSt7NRu8RftvBEi2UBEjpZ6ZdujUDNS83xPAADsDvBy7JvoLP16cDxpLv77FDft",
  "key16": "2ZdtwPv1fA9LVn1v973mRmKU7Xe9vLqVjkQAHN1Jw9EBcKbJCGvqY617wdAYsrsP47qNsPxUCbNeuumGRtYCLnC9",
  "key17": "4ESrTe4X86kovf6dxETochavXZDE6BDGKzoU7LZNxXkhu2QnDDQCUbrgKcAchzWiifyjqecF2Z6fwea4zsU2hvT1",
  "key18": "Cezjycyy4Cgiy7n8vh4P7KGgVaiRFtFSQrtjBKhBvHQxQrEL3d8K5xb4iZD1hZLzucUGm6ExK2KuWEpstxBv8KW",
  "key19": "b6pohWhAJrwhUppSKNWqmAaF5HeskoQaJ6dUUzRStcBqSPkviXfM4nZuKU4wnZ6nhqoHwKnUDiZ5CH1riAUQfE3",
  "key20": "46o4sJFYMccpQ9QmcSTiEfwmxMGTueWDujdG2SEC6BpzoH19gom3dug11rcGHhxdisDmSUdXrt4DcoMGqRuPt81N",
  "key21": "284VSyf4oLZfKuWAiJMjGya3GGc1J3mnpBvibui4fYvTzpZisQLQciWBYRkZpkt3HRkopWKbepi7rNsCjgg5jAc5",
  "key22": "4QADbHXBu9hURSz5956naj7R6ZkksupQ5TNFNnQuv26CKVsCsV9j5RAjvhN3W4YuKEyotTtugK26baphRTftAM5V",
  "key23": "5dX45uJ2bHRkmSsmuKC8vcfMpdsNc7prMb4NrbTsFRNvPQK5gp2kdqAgkMvytfbL1TcHWYu3XxtBYCnaxxLx9CUV",
  "key24": "4hU5Wrh5jqS2mL31YTZWwstJDdV2qYAykvh3SvUSx5meRZGDu2LLFs2a4Y8rMqav9qPdWZcCitp19wFf7uVUdwDq",
  "key25": "3SYFk31Rs5Nt9w8r6DLWMu2boiJmUPKMmyHLvJqcYs5R9WF5szoA1mYZ4TFevwC4pXQAVkE2zgZHkuZnZZnvS1nV",
  "key26": "4GVoueNijJgdo3kPSAkhRAMKaw55BouRMkTAkpWYMvCMeemxxNtkapUsqLQJaubCjtamgbxQJfFv9pQ6ZxUYqh9V",
  "key27": "3HxifXj7ZAnoXdq8VWLVfgADJvvciEUoGJvMMi2ehn1hZEbmZnGZ2F6UABbZdxionffGZGXLzPUUpobjiZWnUj5y",
  "key28": "2njBrqXKa4C4Uj9Abx6NmvA62Uqi1pjYPcnQHHsCaWebi1d6GrqW3Pu5qwmp2gECaQdsCKCgYG7Ut6oqvLAdoZAX",
  "key29": "2f1UtbM2gZBWS51UhKnyAxTfjh9J1Y6y9hMNBrqYsijzKHjSwPFXCQ42NAaL6TUiqxqjC4ibo7idq8VA5VdJEsMG",
  "key30": "3vgHCvw8dRUJiXrM9cjVs1GEUYDefRivsF6LTPqnbYjQ3s4j3tL2aS8fr52fk2VXo8ZUf4zTodGG5ETmNqdTJjb9",
  "key31": "2KMzxaMgnqF8R4hMrJeB4zuprqztBJhL4yyp6e2cAYbnb62vB4rpFtwMxx4ChYH3sW1UywtDdVmkXc2VUVcP7XEo",
  "key32": "5rHLceM7nCQFHHwPE7Nyy52pbBQQLS2TLrLcP3aAD8Aa7qNuSnMLpsRQ4MC8bF63bxnCpQgpWwrSPiDgdGGfcVF4",
  "key33": "5h1txcSaFEAeeRQMDXsSmEoPRF3EpMC7TdBhjkJx7JkHRv7JkmpK1PmXkedkrQAk2A5chbeLFQ3iuXqPrcupn1bj",
  "key34": "44HywPSLkMJ5woTwhhPzERUGe2KfDEQUZQ1ZsA2JVURSfX35PkkX8PvEDkW1s2ggNevUEPcAz1N21MrTZwPyqEjv"
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
