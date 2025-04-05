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
    "2bnAjpGStscAR7vBmKR6qrUZHLj38m8xLnNoxs4EFkt2m6SohNbusjjeQMgNpD5UF7BfsYsuZ73Td9BTZRLnyUEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7Sdb8u4Q17UzxTDJM8XSoC6ru2Q3WV6CiYmBknLmddRXesjVVEgGWc9Bo39zhvhKFALYio5XNWdC44Kpjbwgrz",
  "key1": "iDsyN7cLxXdmFSA2frPweYAQbiJLPsULS12ift9i6ABnAK9Bqnpjhehg8gE3wvCecfQvHeV5ELBhd8hj5VGtzCM",
  "key2": "Ri6LXHqHBJnLhXQQ6A7F32DoqAEwWLh3nuSWdsFgaoEA7vSXBzm1QgbG29yqsvycogP3qpkpqPSwZNH43KD5zbT",
  "key3": "4ixwFBJr9C8sTv2Yx1kb4PwZbcYU7qBpeTRYLf7i1MhjxLwGtdZA9Dm9CwkUEpn5wQ5GNrPCH1GFeXrctHtWSzzU",
  "key4": "K3dXKNMktem98mHH5gqjmbQ11eqxsNjrHfN8MjJpo1QjUq9TSVnmENGZiQcGXvrBPwgUF1p5tbo4SGB6huninsD",
  "key5": "t2QepVLosFj3pNyEEdivebLENSfvnN6GbDYEPbg2Z31g5AutFLAMtDgH9FNgYQJNiUL67kwQkyQsTX2vrSYZUER",
  "key6": "2FQeWZXHcnzv64RY9Nj3XP2CbAYFqJK2qmVfahK7fcCugerGoCyvAvuV897Lr4U24CWbWVwRspq9TJHiphQwZRy1",
  "key7": "66S4ANnsncxLJbRcN8gSe8JwMkjKX7zLnspMxtjwadYNMXo9MaL5FZRyjusxzRgEa9EXPBtsmxLyapZbWFnvtGs3",
  "key8": "3vcRygqZ1kQ6wGkc9tLZpotUhFW7HrkfSsGLYqdVvChPoPa1rYcBQNTaifyErwUugq6qAgPxPQe8azqRH5JMZYgw",
  "key9": "2wbQfcbL9Fqy2aTyWMkvtbT4BFRZbAjqoHXh9AQnLA9K2J1R1qLJ61qwJQpaRWHBBJP23fW8i5GaUM6ydmJbBnex",
  "key10": "3wr7PJDM3kNNX2gJqYMXGW9rbeu69UTSJWGqHCkW8uES2WN4P3h6f5LX9e642F27e9QGT98Gar7b9BaNmVtEfUdj",
  "key11": "4SEjvjWNBX3pfMTgegyGaWtQ2T4zSvXvihAqCFzwanjLtCjCbNCnBFVF8e6fkvBZ6McXfCfdRaZAZa4ZeD1UcrrB",
  "key12": "319mVtE4Z5E6YCMzz5BwnrM1dD7g6g1oTuvZrYKWJiSaHqqMoHVxWjwy6EApXbYmAhewJwjyrtgEx6u8XeFpowU4",
  "key13": "WWDSTyjo68xvjWv26fzW1cUV8TF81r4G3JUHQF7J8MRp7FLub3Uw1mvcVj7UdKdRhtptZz2BveriySyvngRerQu",
  "key14": "5kmp5gptC2wewjiSXGoFXRQxdj92eGpUjbFL1FiY36nNYSBiSjNPQLfoUG51K9vmK8Mef7qrxyNjybyiNuhSaxpR",
  "key15": "55KuCLuYL86yoKnM8JCYnrSwuMkvzVA81NGW3GLrjQHpmn3imbpPeMYVS8H2Nrcok7VwQUana9zWfwNeZvnwbzsN",
  "key16": "wnQo28Knt1wqQq9ksi9NKs1V6XvVPCCL1tiHUikW8BJCc4w8nPKMTE4cefh3Kwo6PaD8ADRe1cFtwFjtFgKypre",
  "key17": "42py98m39bFZPzgWBUrEFqDwEUA3SC1HVneiaF3tdgc8mJ9YoVS7zeTdGSsqThJ8GKQYpyBmT95X2vwkCJW7WA4z",
  "key18": "2mnBPKYyCp8CyyyttM8WfkefzXLtjCTgy4eRzhBDpWS5Zu6KRFAUspF3RagFxwMEjWtyFd8AVt3FVS5H2UiBXRG1",
  "key19": "5XTXsgxvZCej4iif66vHd1hJXAqqgSYmEN4tDoV79FDNsEhjBE6D7gYpMZZm3YXiruTQa5RzMs66KbQ1ChEvg8CU",
  "key20": "3tRaHCcdt9z6DggCg653jtEHyWzN3ftc237jmqPM3FBQp7jWCn7i6zBGo6B1Gtm7ZQ96v5ob4hUSvttT9L63F9ce",
  "key21": "2gHrm53rtAp3JiFQiXihXy9edefKBdyYqoCCjxqvtV45w9s1eJW6nPcsFxfYS3hjfUbYT6r7yarZKY2iseDLqoai",
  "key22": "5soLLTmg9vwdP9919VzNBcUkMgGuhVLMCDLdfoPV2uJ9cCMzhg8YgNd34ntzx6aQ3ixNzNvLWpdj4ytG9hDyS2jx",
  "key23": "5ndweXekotUEfyXxc5n5w9Qd2C2AeMPnCMZaxC9SXN2W8RqCynyqE8Lj5qi81whD1ERYiFyvrLAwSKZ476TrRam3",
  "key24": "yJ2yjUx354V8ZUcZ1oyM3VmHpS9r4PdHumjtD4R2ByG8T4tH7kwHUvCqmbNVPmdaNZAt37xceMGcaWEPcD9Kg3z",
  "key25": "62XPsskDs97tqZBT8D63szvtjaAbgMQP93Z5o6osR7wFFLfgkaSavrcZDt9MrV5WTHD7YGXNHq72t4BeTqYr1JK7",
  "key26": "jw2NpiNVmovscD1guc61jvm19JhtPX6wF1F2f2FwBjk9vVMuGdanx2agPeszwxTnLVry4k2osMPyeJwXscturiZ",
  "key27": "5e52S4XaiVwAmGWbuCsaU5S7Amwin5FYUBLeBLVBCp4dr67kCYcjJEzdanCbpge126y9ftHDcA3jj36LLjPEiG4q",
  "key28": "2zVqJ9xkcGuNT2JXVSuyY3fKebssiMV7Ajson5nPmKBqjfgZqnRNxzF1v4swVq6WasvwHpCpxu8Cvqmi1b7w2J7o",
  "key29": "5bmPjbMaW2T9gpnZBCZVYWzCdy1cMQqpQhCsFg81L5aYeFQvnG2KWcMWdYGDYQBXBMvuGAwZFwPi8hpSmYywdbFf",
  "key30": "645kV2CPiyQqNDSthPeYbYbtADWKXgA4EiAqZHSTSHz54R2nYBEBFUuyLXXGjmJt162RurvPDrDrYa4esitNjdXs",
  "key31": "4rkmChQuAMvFfPUvPSJ36d7s5T867JoybYdsCipwuohsC5qsRxVSEZ7hWLHtGUBVCu7GTiNgPzPUyYYXGsskehuD",
  "key32": "5yJo2LrHNuuwwaottGLrceWGEiYrmnLmHFXi8j4v6s7EkBQdSxMr65bxGPdQyo3agh6iLrturptBr3RsQBp9RdpX",
  "key33": "4Tk41u1njbKqQuhsmihsQw7HeutD8QpEEzn5ufReQKywdJxufPnRJH4r8Lmb3U2zgKqemgm5NmtJkaGQozHchCbv",
  "key34": "2fjMpTjYcFZqKJBsDxXJ71BHDitDNT3e8W46EdHme3ouv4iT2enmBuTAk3TJoUSD3AuTAny8vH9b6VCtMG8xfAVj",
  "key35": "i8mUuE3AwoWfuhatpk4KuQ7cp3g9cNLNRLJtkKY5FhLGxuCfYA4St89RdCyLF5K54wjZXf1fLWDmusoVqLkFQ1S",
  "key36": "2Pr6TKCsasBTD3SpyuZp7gJRuWLx4TomGQ2iRad2DpvSZhUorM4ZiwQ83Lpxf34RjaEpVWrYzUPosXUXNXsxdpJD",
  "key37": "4QoDEUQCgVHnqNaETFrdD9LBEz4Q4wQtwARB8Vbnh4WYcq6QKYdoppV53WdssQyRdTpT8WvGqsb2mQ2NByYcdz3f",
  "key38": "4Z3HTayPt5ofYXppePcbKgbnw8zG6SgxqTJpC13r1DqUcZu7dZtzABzg1ggBPyj4rq2XN3Ui751b14dtH4qRcKWH",
  "key39": "3hJ4Ymg1FSBpvVei39esZ1SxASwXbuZM9VFfatQyjGiWLrYXDkCBSqTmUK27nx8hWzV1aDsqMu4NDeF96xCfAj4z",
  "key40": "voLZtsHLCBHQfy5ULZxibG3WVYLmPF6Bzbafs3ZQPg4sE9tzW2Di8N4jbKec5Ys6zdbffUTynsnvGA7ioZy7EpE",
  "key41": "KLh8xaajevhDxqcuqQER5TrZq1kqC9gmThvNU7nymdXRWT263tgg3ZagXvnPpxiaze3nHJf5h2aEQCN2G8mQa5x",
  "key42": "ktbSwxhzkLGnWukqHwgNDLBho8Ma4WuVRUimCiZHNmAkfLfUX2idpySjj7FF8uaGoH9qYH273Z17tsik6NGBpgN",
  "key43": "5Fv9KNfyUzqDj4VryqzJyqpErEaJMWR2j1X7nbBfkzssKvvHbH7tjMiVoEKsEfMZ1Y5dWNRbauD6up3KQfqYQX7M",
  "key44": "34rYLokEuexn5RhPno3VzHBvEtLQ2s5C4wHBeBrNcBrvpLAZYEqoafbC5SJJhTaGmerL7tqv78Eoyy6b8ZmJFNPi",
  "key45": "5dvCGu7mNJaFjJij9p7QKyDqdjmeGViPNfMxGsymTxopWnvVnvoitextjH4Uwao12Ug49ryUTY8yqMALLeBeALju"
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
