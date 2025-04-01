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
    "sVwBsuUVQBCRhpjuFKfF6a2bDgkjJAkhTNG94GSwV6zJTZSi6sPjsGfJbh6pqApZsPYk7Q9z6EREat4f6J8a8Uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEewMcNo26d83fp73NzKjLBZ6fvyxxfqp4v3aAq1QZfz2Qva89dDxV3pfdTVARcXMg53DP49cTEYK61VWkEhosD",
  "key1": "5be68tzYG2G35pAAiFh8M9t3QoErjmFdrNUe4u44MUqMBXYkF6sDNADYnz3NKRKakUQMh6eb1MLvzTxdRySXGKH7",
  "key2": "48p9GPAimsk7RPNEipEYxWN8jvsqRMjUKn3y6Wth6siPNTnqaqoeGuF3w7ceBk3rmTc26sKXMx9XHpbFH6iYwBX",
  "key3": "4JesVLaDdbBVVCwi4zUdANsNyhwtLnzYy9foGgDg4tFyRccYkKEhCqkjtKgS6Uwo3dXvUdvfxx35aPHmSMhaVLmo",
  "key4": "4Ha2UXa3zm39a8YjMvw5joPQr6DFj6TR9TWrXWKjJb2NRBRvJSYR9fwwd9WyTDAidiN5BFLYYHY5wtPFQx1LkZSC",
  "key5": "27e9RsJXGzYbLP24Mt4ZUjFRP1hYJAKZxhHSmzuoyd7g2p2Vo9Z84sWH11u9DRRGNxQKQzZ9cN7V8TKZU6hNc9Bm",
  "key6": "3GSK6sefpXqCztyLvsrYATFgfNM2o4GuWEEkv3xsRmmNtmiW3YR36wcCebYNfAgREfLmAJTaTB2H7rpwHVPpJrDg",
  "key7": "4zAZetgcd1dBhX7pr5NU19egtDSK1vEaFmxUsM79LGgYXvSjNnka1YQucoZ7q7rdVcgnRwtURxNo3aPQazXs8M9p",
  "key8": "2uyuBijRhZqnAseCmXGL6eRApgabHfnGvoDWPn3abFti8UboX7h3842QXGNmGgoAB4aUKGtMrMZ8c6N4TXgu7jLK",
  "key9": "56a9uP76jDBtsuAMbL4xMQxjR37QBZMFmEzYJk6sELVB8FHm9yw7wXBxhPFKRXCBXS3XfeJKhMKorR6BkAxGLYJT",
  "key10": "3axU7BkSPbhZj4yV6mnvV38dUrr22mHA8pCV4Qr15q1ZdrJrhQyzYgwys425eg6aVz6EayzXHbRmRowGjDRDWSQd",
  "key11": "2pdLd2LhsWPudVYghppmXsAAybAB7MqxGWgBAhj2rx22XsNtCaBZHTaEYS2chgDLbNb4RUomuTrVHMozekfbXZwS",
  "key12": "4n8SntEp2H45m3KUyWfseXpJmizLTbNBBmqgEooytyNzSais4jc7caE9s4WErPuTa4WYRNtXYZrcdFETYzv7WqWc",
  "key13": "21MvwhAkfB1eUoS6i6ny83r1sCppm99XiChsQkNc3kGyXrCVv4k9KQpb8meT1At6JptNMFBLVAFJat72dGsjtxKW",
  "key14": "4oC79wYmA6dSHDUvBqz74dj5e7r6Eb638GtDXyaXo4ZZYZE3rSJubJDgRVPe2ibiCKMzPDn4F6nhcUmFSNzpheYB",
  "key15": "4PGaT9dJQSZcdooXaXUbM5T7bzi5CT5BVe2m2HdoCNrFH3d8xU8UgfWH35kuPuAgVs63e3Yj7yK8i4sVSB8xLN3h",
  "key16": "2wP31oHu6ucLHmRqkauEAZSjzaveW8aTcgiusFVuyNAbieT7a8AnLwLDMonRiPVffbk2vc2GybGa2myaAHqnJUQ5",
  "key17": "5knh5a774VdrcnezMw5acbQELWfdwBEFpgyyG9Fnb18FQZXdzTg9GYJYcVXq6x7kZyTujCy1QZNrmb53wKXfkHn",
  "key18": "LH3E6gtZwpFstFmL1GU2FtHdLuXvgvCKsoAfaBdW9BvQoXdYJNktfwVHgKCmD7p6D3c8wgftQr1DMJwpEDfkCZT",
  "key19": "245WqPZridF2nSS9JzQ5TcticUuqFyibeYfvCY1gWdWyCE3EZ5DPnTgxK7ZbdLkdER4DbLYrHewNsuztQBbU9bbV",
  "key20": "4rHv9q1oiqLJ9VGRywVgbdwUMikXDUybJhCk8FhVRsrnsnAfRtds6T7pV6p7DYfnSpp4Tk9NPV8zttrDMoGvguep",
  "key21": "2rNENq8PsAYJ3p82jymHRE2TfwFpURRNEh2AbXzQwD5Cq76QqZUTPCrdh6qPfrRoa2XtJBHL2sjfiyjrgyKhzFm2",
  "key22": "2JjtXsDo2dRtYAxQVsfcbhVGzvHPm8TNdtbGb2q8QijWh1UxMoYMnjnbjHPkwqGKrZaeWW739KVFRXxQcCaRs8Kz",
  "key23": "3dXQ7VB3gNvT15e3EszuDfUMX31gnPoWqH8A5pT5qvjQe1jCaQJ2Pfu75QvAhEYEKVMZ3aAExs4vP2qNM9iH1Row",
  "key24": "34GfVqn3DwyRtKfKFfPwGHoZBaaRrryj7fLKMg8QTbyhD64dom8jcXAppyR7jddRsbhUSbBsSHepMksVcmq1Sa13",
  "key25": "2d1WPz2x6AXBNjvuay8kxb7qKs2VoC9mUHWhXPw9e3vqj43Bu1ovx9fF8xLnuKo965d2xqun7dNGHrPWVR43UWQb",
  "key26": "2o15JWurnJUXEiuEmkW4Srkyj5xY8boo1DszK6A1gxuPJ542knzr92T9nTyLnnuyVgVj9CDehD9Ze5E35kwnWfDL",
  "key27": "59FGsNhFvhWM3UUvt1Se3rMXzv3Lh4dEeyh9wve6Emb5VnbBYRmtMutVSoqRD12BMGdHLyFCsxXzzxjpg1gG4ALH",
  "key28": "5G148m178AvkrxS4vXDcvLoPbkM8ZSS9s5AbpuATVEjquPczKeBkWvtuSB5x73t41nKwNb3dnP2vz5sRBSTxhfoK",
  "key29": "BodZSs1kYcSUJthWfxk2ktRjJEgYU8Gz81iT21pV1rkKcANN5TT9xQik5gvvNjTmW5Dzooyc6B68oXex1YLvqWX",
  "key30": "67GpR62c5Z1sPhWpEy2FQLVcuAofdjAyhH1v2C7gT6EW1pwUf4YtGNsh5oQ5FLGmYMQar2JmTFT1rLtVgHsUp5GJ",
  "key31": "tLBkqmBXj634VnjhNr4eUEnmbjSv5ov7RcvrpJmaZRcoGfWhqpidTNBhr73YNz9eBPndRZPt1bDcQaCYiiNEoKd",
  "key32": "45CAKfPiyKpZmjiW3PCug21g9Esp16WBdcBYcLjyQ2EA4RdqXLmJSyTyJoXwBJ4Pn6EZiBWyF9UKbH2587Y3duVK",
  "key33": "23GzQo2yeDoeeFFFfZqCmUZRapDgyxhbQbzvNVUpqeq8jbhMcRvHBox6iAwKtLe3vJBmuFrrmjHh3hTGSxmgZ5HL",
  "key34": "3eoBqTjFHvQVxdGYBxLHtzFrPsuZxFEzfXkSSfsM8dWkkKsfFTbvfk6T22nmNms13XZkm4J7iLbHSJ8xtLihs48M",
  "key35": "4he7Am9QeceM5g6juRExsiUewFYBgeVbMcaNKWQ3RDXrJcc8UMYwNNbxZv6vLz8oGMSi5wuoE3cRV3SjPm1LH9Ma",
  "key36": "dKPsT9ydDpoKoKYtXMz6Fc2Qiuee5Ry39fonu4PRvpnUp8qeozWnGCTVmcgcsZG1HqfWhzrMc9cPrMiEAnmQLQy",
  "key37": "ZGoZCD1x32gRwCqWRUYiVKEHX4jWKMNGFnPwm6Aw9bRp2BnUYsvMdEYSKWLySe5Vmd4KRpziEnCJLcHucGbQ4Vu",
  "key38": "216VnMkLhAZPLzTNNKsb2NntdQkzANJxYxPKHf68tgBsFV1ZfSrGTz31f6vvTy4CDEajHn456Qkv1N8utgJXMSS6",
  "key39": "2SqsXjWatibW34UwgcWN7bLv3Wsn2v7B8iUZSazi6enB1uk9VEaMhj1aaPb9C4L52UZds8AxZFBwENmtTpYz4g5",
  "key40": "5t6QwxLfGvTEBFf13h9s1YFVLTnr3iX9moRHcJASsLcyqXZVUUGTHTkvpCwAfdAM1MWw4aQVBWGsE1crsBMb43B2",
  "key41": "4YKoYZEZNx9x1yVwiPW1GKBjkaKY81aUTZqZFmzKfuV2evFeLpE9Ecbbx966NUJbAjj2nHK6VbUjDspCNwgtCdum",
  "key42": "yAVqAG3on12oXq3mNgBh5QjXuuybWHBTy4wddhVC4DoFXAVpvsqds5r7HsvcysrRpnmiDEvmWehLuzgejpwaz95",
  "key43": "26Lz2FEHc6JkHveyvyxUdjv1UF8P8FvXySqo3HSLq9f3GMC6vV6PySLRRrh2c2Gd1Bwk5CjM3fFyEDz6DamAVHLX",
  "key44": "32ASL2RF9vd1EVRWWr4fYQNSWkwpxTdtRUXRHdoRN23CW3FrAM6jt6vMrDC5o1F782QuqeYoNFkWiUA3xa1fapv8",
  "key45": "5romNUWUPehqYwXgw2Tqp9EwzYzH8SpgWNpqLKE6XXJpou3CKPkTaGFEqAh6o3eEokeapN9Z9j99UCL3d7ZHFFBo",
  "key46": "ny6eyUbo8bZdarAETJDMaQ49WGkNnYk1nDadi8CzaS4KvVrmkEGeoPpusYZziycqRPvBgbryZbpS3G43JMqL7Ho",
  "key47": "5efW2pyQmotdhTmZxXs2mLm1a3bQfbJMCM4PK8oj892iABUTdq6TZ7eMoV7433KcMkEJ9M3SacPtjK7iUPoRxayz",
  "key48": "3LLCZTPSFfMk6VvVavmuGUboUi8wUQXsEDZ8sVKjCpwJFhBqsGvbeBJGVD52Ppe2wFsoPo2trt7mBUUtH2EB2sS"
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
