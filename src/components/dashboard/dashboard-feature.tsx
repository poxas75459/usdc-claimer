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
    "3im9uXJVoMjf6VnGK1mXhUDT5TRB1VBkpSrUFDs2hJ6q7TawJKukWHpbL3oi5Yprqfn3BpeVkk3MV9zr9QrySMSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1fKh73nZ1uaUkzAAf9tV1e8yczQZHFz4VQZU4rTKtzNv4YSJQhuxRrBNfgkDLwTMv8LYct4vghFGqRneeY8dLE",
  "key1": "5bRPrkgWEeeuUd7jsQWSyVYPNXFz8aZBtCPwgu9pw9mNPhLxB6sFymUgodHo5T4qDR5yNEUWTP4b8YB9Fm7Z1TnT",
  "key2": "3aczKGumzxe5hdeD52T1BYeG7GH8HzVtmyXCPZRSWi3UHTEkpk2chWc8SiXtzwtsX46rotESrQwbKBNkm7ZDBB1z",
  "key3": "2QQAuCkywBTKo71DrYGhY334LTf1JXqydYS6kHWw9ajaLMzJ2aTB24frt9YimVWthfTDS6NK39nWugtBsr11m3Eq",
  "key4": "587WGTUqW1QCq8qdt1ENm7idHp5areE5rLF8W937FWtscGakQH7qi4aEHzncbuue3cVjLXai9TbBg5m53uaZTX5c",
  "key5": "4MPyxf7fi7YM8x3xu7hnSjUP2NZpq9XmhJHVBsDsB2dNQk6Xy5cU3UHQK1VKJPGmDWkL4xgGJGAagaqWFvuwr486",
  "key6": "vEkwH8Nq6pn4devpwojsrXk6unQNCbvKKdxd75jkCA5jpykm8P6ZGpC3rJtHvBSm8DcVBgzBC17HSTbSYRPCQBZ",
  "key7": "7skevW6wJCmpnedGGP5qNUWUWS6VGxGPTSpuSV8RscLxhuw9A882JdLcoq4poXd1kMWu1ChHAEjjNTViXRPcAKP",
  "key8": "4pAYZN8Yngnd83sHgVU85FPEKP8cRjLosjDQjRg7pKZYLU2MTmXwGo3MaWWMGqtnckCQFdwihDqUsJkjJ8s8KuQK",
  "key9": "2epF6qqpfdiJim8ebAFPaeukpGd97KSTdvKpuAi2NfgfdZjF4dJBndyeKNtUbZcrQDN3PNzqHavdQtyUzXGHATMD",
  "key10": "js8V676xDcqhDUfVcHj5AT1XuXfKE7nEgNJNmADc5zYcSPQih75uwV2dDsf9J1qZGyGRMXu2B5W37d1aayjWiRs",
  "key11": "5cvz5BG57B9J7sVmjzTAThMbFHJsMFiEM776WNDMea5SnaCNrNSubZgTJKJZBUvRQWB9bSLgC7gTBrPQ9mF5bR1A",
  "key12": "4QJmC8a6oeUftQEfEx6AwMTS4UseWsbeaEEgf2fjXoWnKmSDdNPJyHrvpUrFEgEzc4YJSeRk2DSJYaGZ2SgQJ5N6",
  "key13": "5WMMApvceuubphCciKkUFWR8iog7jowEk7p1pgnxP5kheBWtyk27khbuh6pnpJrvT2XgEvDDcjFFLiRfvcV3vgTT",
  "key14": "3SRCYqL5YvmKEiwKp1bmL3tqR5c4JVrrP9GtekjZnSoq829PDTyLgNgqBXCz9gyM4aqTAebyF5JfUetSyYrdHidW",
  "key15": "fqKHu6kX9yecmLaGfYrRyLK7D5nUYvS3B2xdJK4BTjyYxSqgEjqhyX9UtQUAD11RJ6yqpGMmiBY2p2FWFpZpRyh",
  "key16": "4V9v6ZYNkJvNire5zrChXryVai2qDyyF7YCQXCoiykmy57AUzHPzbWeZCMRcayDvLhiw89fDByykTWPco6BguBvF",
  "key17": "327sxx27vUcL7jMECH4brriQvfz4tRg9rsKKCJp72pQeDqeBxRybENFbVYrMuzZTEVZRgeMLUib858jzFs1yRvpi",
  "key18": "KvwrrhxMkMZXPBExr5Wd4eEtmij3kCbDs7RLmiAiwix1EhL7WeQy9kCjN6VfMYFUFMw7boc2mL5FQpaxzAGjBhx",
  "key19": "29VYvLaFwn6QwveDrGqQpZAewqcvssEwRcB5oCNHLxKJniGo9Z2sNm6hJUxJfaWk26YJW3BkbBr22bHy9Hj9cijX",
  "key20": "4ZvXYhT6rtcYHs5WBGGn41bWuoxxHjNDyBDE5uXbtuCuYo4pmcpX6Fut2f4N447AMgHwLhTSDt6FaEYPzs3jvFt6",
  "key21": "52iViTfKpf62U9cQp8Bd2Wi6SkBJVa2BNseyGXaAFenyFYzr6uvjV2g13N1cgMN8MJoHPUFpmhtm6ZGKBQaGchgF",
  "key22": "3STkr2fCS32c2WSWfPAtzmPCCDHbyj198Fhkyv7zV5NAULS19NcEC8kwLw9ASWe48RZaiLi88pQvYKwT28nznuyt",
  "key23": "3Y1m57aw4GKqPx8J7JDyGVU482SbyeoWJsgyUzx4tQ5jMMGuKcX5cUPDSdFP1wJiPJjUcvihtEB6NfLYQZpYBEQU",
  "key24": "31tnA9TaBBPLoY9QSkjtEAqEUAc3sfainu5uoMrN6NCF7aCfbMcXMQw2Fr1b9tCnE1BXT36Et23XxnQRSMHXeegF",
  "key25": "26vSqEWyGCSxDuC6f5dXWj8LWU69WRMp2V9A57ar4D7rECVy3gvP8etBiVKCfMLUV3gNd5MoGgup7ovBdxrwwKY5",
  "key26": "3EzestTTkutst7zLkZgPKKtH1qUnLdQFNkXnkRWfZrv2ePiigbdgS8X1jw5qZZJpJfGXSXyixPDFj2rEFS4MxMwP",
  "key27": "39p8uMiBY5apQvAZD2bjVr1ibAa7fJrrnWGoCYTQ5t5pLswEziqUbLTJX9uJgznw45NkYdkrJXE5jHBqeCUHb93L",
  "key28": "rnBxAWhX9aVfaKGN1kq4W9XiUPhPYcL1VaB2idbZ1qYuR1JLJfQmUAyawgfDbd4dCE6PyUZAZGgdoMgFZN7tj6T",
  "key29": "2JS6F4NzqyrLn8aTsVNod9QCuio5KZmbUa2GoQagQCb64c7TrCbPpG7Mgy53mnw9A2t1U8Dc3JeCb1gPqcWHNxQs",
  "key30": "4JExbW2yijNesSKPxUxb9At3CP9Y7dZAwHeWLtxWgpgww4dRdt1Yg4WU8QoVUZKZezcZ7DcjCK1mD956JjZHotQJ",
  "key31": "xzo67zRfuYMQmPFFtiBZ5qH4ssgXDFseJDakQs89156uTg175hkFa1pznztA4zMjPTv4oNcZGHBZ1KcdB79gxrX",
  "key32": "2KHxev3xAzF5tYphEjAf371Ba2VUcrNXatessguygYiqJ25wd5j5v8yy27qtgAWiSiSjpUZnm8XHhaVpu86barT",
  "key33": "3QAUMa2JE5PB4ghX7k8SDaj52qKNSrJUdMdd6vVz2Jdvhx1BJizNBRr9jPSDiqmYXskzKWQkNpf5a8gVygMtc7zu",
  "key34": "388yb3EAz8RMoymMzjfkCvyy9ME39bx2nvcCas1E3pKcEs3wf4MXJkXSUiasLZW8AJ9NDJvBMdKqs8R2VLY7BLrb"
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
