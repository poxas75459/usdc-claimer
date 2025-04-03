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
    "tN4CrcqGBTDkBVsySjU3ZVHB63WV6ehqAnrYaCUukAJ4rwR8N69X2RrW9xAAZ9RCTbsZewsowCdmMHybZZW9irF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yYMd1vdfUJ6YVhsqBH7TBJRuzHCpW1iVZ6FQB36iuRRDdcaFbBzDqnvuJyQaj7xt3Uc2w5mMZ1ad5Saso6n5fw",
  "key1": "5Wm858ja1LZAcEnahheXK1GqaBPGXPY95tjrS5HtzBbbiqEWHokJsKXQgqNxiMJGrBLqfMDxiGRwddEujo6ZZLRh",
  "key2": "2CQk6Zt8SeTbXPmJd9SYfViwm65iNdQf5SQ26o1RHJRZZ5exBsyDMnzwNMvBQi3mYT5WDv6qZefqUAemKxon8zP2",
  "key3": "cTNx8Se5wjShiXAknXuHhggwKT7oGzsBroxNMjmNSFy4JQjXzMGz4qvrdjk7RwXYMTH6W4UBr63h7nSFcuSYdti",
  "key4": "4L7jFgnYi47oFfWq64cAFCU7EqStG2EE8deF9wdnsRvByei4vyn9iibgJnab81pEhNttZiTat2KVjZD4vpFWES61",
  "key5": "4NynZDk7crbEjZAi3oSC3NsUYNCu4vLQCY1BTMUbCvQHP4vFZPVCYEnw2oV8TgZM9MPJwAGJMNrtvDXKXowUGPhE",
  "key6": "34Q8oNDRD71cjQ8WYwJaUU5McgRaWpFHcwretk2CnkAo8xZbFDwKzJh8DPZw9gytN1r5iTBhX8EJ9h9XBf69ECvo",
  "key7": "5AahLGJ6eaED3EdPRiBwmTRDsqc7exq61fdP36m5pCBxXCDJGnNDiS1xQmF41ZoEiKfxYqFXjoDYRQGuDzHS7vRo",
  "key8": "4HLYe9prXiYvEbQPiEnUj4zwXrvTxXzNu1PWkyfPZhUtKuB5vAagWTdbAQ5uBHYdjHuynfyZbFSohnunEYYXg5y",
  "key9": "4uYpv4QoTamwwhYbxHTRn2av8vFyurWTkgB4a7Q9JW2v6aKtZ4gmBdCJs8tKN8bGXtyunw6tRKsurA4MxVCgg1Ny",
  "key10": "4gYjG7itQXVMnxr5MKdTy14MkeDpwnwZzz17LLdTHtDt6kAkoDif8uoJcbkbyyStvfA2gwCyyMfy37Ze6fVQky3N",
  "key11": "3iRMuVs6pfSjbXkhRsBRsssUhaZo1XUKVBy2RkNvFDudNey8YVxbsjbdjDY8byDDYMb5jwsZXBMpACJ1M4zmf97R",
  "key12": "5JpRZvtBiHdgGxya87b89zGNcnDBmsccNdvLGwYqq45kCtH5sP63wzU5syqUxwM5CUiaeE9iKgadqLYdyzDt34wY",
  "key13": "41utA3axco5vrAfiE5SnyfznUaGpWAqFQ6gjUGDEaLPdqGUUg4sRanLCwRCzp6VTYdPsKVAPpZayf3HDa99bCiDC",
  "key14": "7vtsChhza2RBra3fsjLbALHnGZo1aWpMN9UjHehjaAASyvFjvq4RB3fYDcGA6X22RqDSNif8HXJdqeN33VRkmD1",
  "key15": "5PXm3YuB5KpsUj4RFBbHERfJRFCzQJeVrnFvCZk6MFq3s4Znr9NjrfvSX6NHDuzLs57YsX5AfsAVdTu2omPARUgY",
  "key16": "5bA8VJ341ntBZiggPan4X7JeUbqgHDm5yunLV5cceVbvXaDEScGTKn5dpNC9RG49TEsL9uq2bg9Kwe1xAXQccHMJ",
  "key17": "5AxxeR41XEJwbnCu6reMXdqqtS8AS2Y7KWwxoUusQme9j7Atv2Epk9fKnYhrAGFE46i51XiWBXhHUG5jxqjUEci9",
  "key18": "4KVjBbNpnKV4BmDriuSb55w77631mydM3PnMhaWSqhcUmi2Up2jZppUZj9KjpuisRzoEaWVEB2MJAnDAhD5m3aCB",
  "key19": "2T9aSeisLHdbNNG5q4XwgP1K3L1sLaVRuTKMZbdw6TQi5zcg7SjYYNxyNWFCVvasXdm7nWor2JiGiD6nhaw5Y3x7",
  "key20": "shokJPG8G4SDNSoKPLkS8CRUEFXkygB84Utaam5aYS4dmgBgik4rH6YCftMy1K6ZnwoqJBkFVeNYe5SnT4XY5WH",
  "key21": "5ikY7nNRCQRFEatSuWkUaiDizVbLobYnYD5eDK29x6u2Qkvim1zUV3VC57me6qBaZuMk5A4JHEZkirmRoWzwufnv",
  "key22": "2LPF76uzg29UgbmsvYEmFvfc1R9dVMBijsx5dqaLPXDcBpzGv59ZabFoUZ6GUjRuSREHjw9Pug93kBSXvszJFKyZ",
  "key23": "n5Amr2VnxJofWKKB7g6Uvj9pqKExA1fVdXxhyBRq64wjvT8sh9tY2sL9GR9gnUCDr2j93eyLXqP1PRCxgKce7jf",
  "key24": "4nXmTzGoPE2uUrgrpxVWjYx6a2UuxWsyj3dRPuJVn38KP1QqXxTaSH2nMbuWrQMLLh4EnvdaJwbtu3AKGGhM3XBR",
  "key25": "4QoFkt7zttPACqUnrBYHkuRdybENKtwtYohLr6mV55f5fukznGqF6JhcNZn8DU47e7JicnJ8TCQLTzwrNdLqNWLB",
  "key26": "uaKadxHnMYC9ANHRP5a59UdPb7UNuJhs8Tkn7Z3D3v21bvxQgv4ZakeNDV9AMFWNiTzd6vUrCW1RVkh3pRzg6vD",
  "key27": "5SjyZ2ubSivdcrB1Zgx3urKqAwDo15KnR551RCH756mYnMq5HZCGLVhtZaUK2m9iQnuLQBheyrrBeRcwkQ8UMCko",
  "key28": "52jZxB3LSX9Qi1evytxaS1sgutLHZmBc2mnzzUVf42XPS9E8kcPksytRdCdAqqos3viWmkt3NsG2R1LuBxu8bkFu",
  "key29": "275vhJyC72tfDKGvAUquwStsntoErwkuCy2KyEXG2wksgjj3LM95K3Nx5FiG6suunTXFzLduqmbizmFWzdnESDnM",
  "key30": "5nVHgCSxtdMvPyTHjK31xq9ZJ7fqkrKJ6MJtkNegYrJZmk8jXp4UMzntbvYxBbsCqgsdVPzcnmh7N1ys5SZxrazG",
  "key31": "3DrhiacmHCC29965rFjs5ebtD7PfyniWVPEAG35Vn6CFnaKGHjhNrFhpqB1UTRxfrHsfQHMfTqpRpaBiTc6sc4X4",
  "key32": "nsGa4fKhQkvaHtAoX1zrkLMctZxJvK2LV2hhGo1tFce82BYrPMT9QU4ff4wruANhHBPayehgfiJZUm9JXtmb3vE",
  "key33": "391NGBYzX84iK7iNocaRHTRFDhSpPpF6kYPHfnFPViNZdDu1zsq3QiHbdz8fQ91dqr42X8y7oZW2TSNN1g6bpnUe",
  "key34": "67k6rQpTWXzfxbNYCwQaDaKJTaW6AFUpyBkxy5Xp36PemoNgpt2ywLEx6pE86XHFoa1ubq6nAarkxLpBET8rNgfR",
  "key35": "3t6Amag5EPbR5Fbx2puns4LdS8fisxXgYWSWB7ymvmxocB1Hi8He2jqrw2qTebGXQK82H1EwDJpWfLmgymd8UF22",
  "key36": "2dawGtqM9p6SaNGEfZE6XyqmaVRPU5YL4r6thhb1egHij9sQVG54ANUkX7UQGeLjJroYgn6rjvwCz4DRuayyQ1pC",
  "key37": "35bHAKyQRnXMZHk7u5VM6cr9vCsfgy4iG5KrLuS1TdeGrEjLtPExL6VikEN7xhj9n9nnUgUuADXmF2nK8KRPGztn"
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
