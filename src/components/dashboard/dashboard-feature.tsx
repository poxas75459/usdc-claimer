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
    "55NzYqQsGcm5JcaddHwowzgdtrzpDgoGfjRpV1g3TAosFGRZoZaR4KkM19d1gfjccJFiFpTX9ycWEjRGfHqdLmof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5osSFAcmxjDgHrMXMNeyPhpVfJrayonEHSB569YLt9qGQTFHoRtgKKJWGv7VAi9AddAZj34WRoqETYgk5PFqBuDF",
  "key1": "4uZzy9Mtu8nFgmYWpPNFqJPdjwD8z76zoBNgX3trh3BismXukM3w5qWQbeVj6WQXy3mh8LwrUjVKYKRKFb8tyzCv",
  "key2": "2KDxdkZdUAtgHwWuczcVU8HHw8GTXapDyxjvEwkQ8VyPbpRci8XXyE85R39EUQBUhryvguPap7q5L4UXNZ5HgCQc",
  "key3": "4En9fvSYUFu4QFxAjZTtPbTs291k8MTMKR6DLbWEtRDgGyYcvkhEjXQtV9mfaaPqF7JBYyG8my5bUEadfvbmV7Xy",
  "key4": "3hH3jx4RzEjjAepPD6rzpVYuYWZvi1PZ5yWLbMckXiGzEjYj8MEu9GTLo6ZSUNZ57uQxj3RiQqyL5FqUfqtqPwWP",
  "key5": "3bdqYjyZmYeo49TmdBzMF37wBe9LmsVjpRyk2FJcHbfk9exzbQ79zxZ8FMP36XNC1oeos1qWmngg4LSkkGdoAxN6",
  "key6": "5TD6VaSYhdgEMpkdfhvu5RWWLn1LqqtFrE4gZrL3nVVqqVFsLVjcDqYva8iDLHWvybhFHkuenL9uADmrR5eHKK7c",
  "key7": "5ibES5naYgqz3e5FcWCVAN9HuXfTjqahamdLhCk9GwhkC99gmoJfmuk6JXEvUoKyHQsspkfaCPBfodNrfa3cff36",
  "key8": "2QwFTcoiZ7hp8968sv4VLCuufqCyg6RxvozjdpiLX59MxVAw2EKok9jp6UWuJ8L5wsbcCPGDroSidRJwjUSPZQfM",
  "key9": "evf8zg1PTZUBxdSp5A17WVbYw4jpkgjv5tyxb2GNJbDufvXeGzsdPiGEnc8Ya3CKszkz7SZvhtPbpnZdgqnk7q3",
  "key10": "5gVBAH5BPGifijfEHZGkovVyhoX8SfxNfKhKfY9b3tqryx7MDvL4VQAxFJ6f8AebVygyNGqbULMXHNsLDuHsqwyK",
  "key11": "2W9azBVYdVGC1Spx2M3R4yfdc1vacQnM5cswB1x4BnoTPA3ycvtnPqrfDfd8P6MbCEGyuRkYmejqVyxxLUiY18m2",
  "key12": "3YPBTuLJf1qBogGDrBjxzRM9BtLwgC8pENNF6YKoLK8LnxZzdmB2ywqyuSgNq4UMvd7hjyyeAjPELUPcUoNT96M3",
  "key13": "3R1SXUYFPRBx3o76DXQ4aK44YKVkDvhYMZXVzaLoWVbRzxrEorLJt6QciimHYpAtvWFnkBXDBAUbD9bEmLC9SBZ7",
  "key14": "2wJQP5rEab8ANWNUyHXKVqCCy9zXvAb4NPLGf3Km3vs8pYWw8JStYwy4GanoZsEP7kQVn3bqzzEgugvexRsx8AYp",
  "key15": "SWgFrsCga3EV6i8PFfiRmJnUaMFSHVwdQMHLFAHWv6opBEv5Hahrpf85AtVCkWnvkb9mdZftuRtFfBb9TuL2EEd",
  "key16": "62xxd4fAhcy5gBC7FPQfKedqFuUdw6d23b6xXQ56Ma6pYscTKRybKxf9QppdiBKtV9n4qTYd1nvUVHAcKfatSVKr",
  "key17": "5KRdujgGt2BW3J6CbrHk9nrboJFq7SGWimFvBfsEfx5eQ1Dpt6B8WkC5zgMFMAt8KMpMdNmtkUddz7NbBYkrpSwN",
  "key18": "4EmyYG8y2VsHF15FQFAjX2udSvhGJyC6xs495uFPoVQgoLZMjdteEu4WYwjSoR1a65J9DLNQZfdVv9UMMibFHf8n",
  "key19": "2Y35DLo72Bqn2YYEdCFqiq9ozbwNicp2c3AhVaLiYFyhrmviJ9WfSmuZs8ZaBWhvcQRvjiS9XRivXFNW1BytYTvT",
  "key20": "3u7UZ8VPAKSxcS5LXZSc4HeRFhYoUQTYD1gy99RPr2EihmK1S1qDfpdxBbWhDGSa5QqRGe8Nty742Rz9ndftoyYP",
  "key21": "jEndEtzCS9jBboTcDvEsBzSjCJ5EeKWTYWraqKcjfuJuyHF2urfeeXU9GVLEkormayDxSPB2e37bJciPTRZiMsD",
  "key22": "4QZo32Bq3h72PZTyA4TTjfKq1xCKPTYrWoXMX6WDtWhr99X29Lg7CMsHpV9PoAocXGyetSh5t4hcx1fMWZKdDsHq",
  "key23": "3sWiDEJ8R3wNqjW4sKbsPG7xnUwh3NHSnkbKYP5hGdnBVVd5GiAjFBiS7gaXqUc7CP9cJaHNtigpC5g1WaWxtYm4",
  "key24": "5A2mmMzHzas84fjybpsdrkep5hYdwQChoGc4ny4b3cLG9EvdgExGpcFRkxLq8sF4ojjHEQkHVUJK2RbGrwFLfi6w",
  "key25": "2spqu4Qq4CuwyUGqqgQTsCkjTpNcT3qxp13cZTxc8R6FNBxz4cf6LLSc3Kn1tWup8n2UMQFgCpqNyWChqocudTUc",
  "key26": "3ZxA3SJuMb7DZDBVrBchgeqPZxJ1TPSgcj4X6BNuW3dfPSELKa8s5G6vMWi5awdGeEwGKG4HgG3n7kiwsvyBJLWG",
  "key27": "23Uu9N8ChbQRpNCjej7CSgyaBv4HcmyYSLocjZFStH82GxuF4VFZ3yXefBvobeq2YcwLYcnykdNNpGS92FqS9rhh"
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
