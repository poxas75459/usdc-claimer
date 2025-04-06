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
    "2MUozHFhLZcBaoBgy5661QqgoExtbYAJ61pvjdzukqNmmVDVD9u5DexrQgxfeM3tXE2wC1WoLtSBTCMwxp1Lhogq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSZtY56zMbfVvbfxD3UfxUbRuwAF2mV1wN993HWoogLkoQBwLhZnDzavKXJc6EDommCkeEJmyr9sk3dXXx9jrSf",
  "key1": "2RDQvHYgWd6VfvY4DnbUmBdPRKgrd7XSsWaRx1Fs9QFoLBNRd7wwMqj4uYE3D385VETXznD9YnpuLWuh1eaa8u6u",
  "key2": "jp1hzkwja3AZncp8nYPLq9nG1HRoM3Ak2qcWC75oMovK8Vs3VMufwbwCvfc8fseYiJEKUKwgwgf4g7pe7PGFn8b",
  "key3": "4pci3jU4XPwi13YvT4HpoCdAWbNSrkrRnMQDUzJuPpCozcstGedJojutU8CM2Zy3XPngfRyMXHedc95uwrExYkV8",
  "key4": "3ojd8e4s9GE6nEbMr2qamGg6KKirNquyHTR8VFSnmC17CSKKfAuNN11i6T5YFBTyjkFDGtAvfB1aBmNQWSMYWvLT",
  "key5": "5MyTwFWzRWQnoznV2dec1AQnrsTMQ116SEovAHG1gG7U7GgyLEWcARGWXv7RNzdozfUX1Cv5Ws3kY4J3qU8nqPBE",
  "key6": "5Qeoz78zdmwvnJ4SWMq5r6TLGpywCpz1ciYyZzAyQo4PuMUgSQfpCTxBUGBWSjYAaHAfpZjznzRN5da5AS5rWx85",
  "key7": "4M4erdmRBYzqRafuRAFFnwb3iLH8UwMniLttte8uBeWbMHeuyKMkNw7pDoqfvUn4NuwZYe2VFcASDb8By8TRCATE",
  "key8": "hotWnrLLtnz1HWVnatn7NhUbLtvq4336G9twT5MUMM9Ysc1nYhChvYjyiCADBdKibRuqCbw2c3sxYyX9bTZ5CVz",
  "key9": "2XUWtzMNYdqKu299bY6CWFqna6JDAFP2eZ2B2Rcga8oYi2uvKLy93EyKw8s6so1fuzjDhmWg96FpARXutsSU2VDD",
  "key10": "5AcFMHGYMpCNsb5BzvCisMhAu4Lc3YdVSYxDuRhADw88a3vknaAqGreEraeY1v4aYbFKAsPDSgSAWKLXx19yFiEY",
  "key11": "2eBs34wsdXc5um6GL9PGFMCrBmTEdrAm5wRceCTqnHrywDFT141Uz9AN1sPbRa7FpdAErMY5SXTxGFBBSkeKNiXM",
  "key12": "uYG2wW9Yx7Cs9MqSiUqeU52jQgyAygy2npaxrsyz5RryagvxCzJBvvwFkthgfPMBSWa3FW8JoYkubWDit3znxcx",
  "key13": "3S91VqMzRGz3rMdHxJpDFTeZ6JNLmgT7vmjBKJSp6BMpc1eastbctoxamNQYPDSJvKaTrwVeqgKDi7rjQuqVB3x4",
  "key14": "X4w3P1Nga8qkhi8HEVhqV2Vby2troN2b9NjGgRqkFPg4HtQyuTcBqFRK9ZawWfCesaBWCL9S3nnmjydQWJTZoB1",
  "key15": "2M2yypRtL9Br2iwkgsq8yNsyQYtL1Y8CqxqLYZb3qMpzLcC66C215BfQP6DWPh9JLhWQFRtNYkqFiXTVsMM6QQyQ",
  "key16": "62LsL2iemQHtQrPXo6Hyd1urW5HyXSRvqbYxbn5RVUZ4z5fzZJTJLMKWaNJoWCcJAfbuQDr91RKD7H7J2eKD7GVd",
  "key17": "4x6MpTNbmf9YtEiDkG7vap1t2dCU3RMubaWaKZVx4RdmEQFNsAgNLuBA9Vsyt9gZdoNYB2ExRru5QfhBueiJGBT6",
  "key18": "4urwFV1TRjtPrggerVm7jQnNih8D5KBX9Ciozi9YB1sQbnKuqKCE46pEVfMJVGuUP1YL394cZSEh6BwKHGxhRU23",
  "key19": "29ayq4bHmLRpztio7Nx6QFW9Yoge71B8E4JDsQAwR9NbsxqwzS2h2xWLyN3grsH5VuiumZY9Bn6Erocde36L2Uhv",
  "key20": "9Ku4daw5n7jLTtKcfqhMwisCcFp4A2Mx44ERmVJkJGGDCKhm9Fw2zeth7QWrV9dWnqi8Z1WqYmX2iqU6WXtQDSB",
  "key21": "3b1ad5WUeAEDNCtogH5MhoYNKw3RwrsutXr6ZHgJT1Zn6n2hPP3KCDVGRKx74vi2hvn3UrKBqiDNogR7omXfhg2v",
  "key22": "5dfcXJ4KUhBox7648ngDCX7SqjZA2GxRViBJH1LUq5c1GesyCNPq7QHeKHrtWFsjrFjHhixaJPUeHgm7wHP6cfvV",
  "key23": "4K5RQhfS7KXtzURoTWWLJeH7z4fe3fGKCUFVzC3kb7WbHXwTwkunui7JfsuXknDgeDYw5NUp8ytpQaakDUQEizjE",
  "key24": "4nCEXkurFEPb7dgxKUKtRZNUfaCzmWkG5JWGW7PE2ZmsRCMRAUpTfdePjKTKdqNQToHPxhVUVVRLM4EsLLmDruKT",
  "key25": "Fag7cbY26e8osZk4HCiSFX3vAio1kPfs5sVSGafuN3xHMzzYvUP8Kx1tzyVuP9KN82dQ4qKyqGh177TCV1L3GPK",
  "key26": "2Q5wRbVZuWh95nkpS2i7WTnxfPL8meNJn7yLFtu5TgacEgAxjvSufc4eFQSLUeM6m9vVWf5eePNTaAMe4PD5bkrp",
  "key27": "52LbNoP2ekzUJpWegPgZE8Jpf7hr4w9kVErpCUGyu3EXTaVgrWa6abXycHpmN84UUjB4ZCf17TB8EkfoUD1kG6Qk",
  "key28": "5GvxbxcYj5193Rc14bsn9J3YTt5EC33PbmzJkhsmSAHRa5fcynysuzK2SNi9Fs4xyiWyKMbNVUUkutJBS5hqMBVo",
  "key29": "2WjbzaBWNHFiPso3SceTCsALWY3T2vWN5nq48ouvN5DcsPwbxaZztNyKqcucDL9iATcbMgKg3dPyvhvEPnTjmwGS",
  "key30": "5UASnsBn3PWwMgnV4LrDp3EBQMGgyn4VDBqDBBKpfNUVeLHxxE4EHfQvmu1fK44FHkhQJ69cmt6F2JwKx6q3mptx",
  "key31": "3yrtQqyPRk8shEgyjWaaBfXocWVi7qFvoa3dHJrKk34CzFWGVcz4igVaYRFzXpSvGDHtreLcL6Chq7r5YhwQDgCq",
  "key32": "5ADW5UZySENSZT91NJuxuxHHjShH9C6EpdtEnoHnk3pQcTBQD7SnYvAHGe7cqB4Liqvv1UfKXeHQeeQSxK752UfP"
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
