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
    "57g3rXwt5qbSDti44VAHza3HT94V5DRodDewWcoy277cXBNYyBAcw4gNmuFQUWNV98p2s8gM5u3yjd7efMwb3gki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjqBrMsXE4vPkkC6RgdSqqjkbLpiK5PwqXXqhe7givE4oUKBgkiQyE4XwP5LxK2Yok7aU5cFo8dm9GNDACqpPva",
  "key1": "4CquCx3eEo5JFAmopqQvhAReu2BN5u8Uj5386iViY7ecMq4ezQimMMWK6wWir6ybe2YCLBmXgaTN6zoEG1gF6ke9",
  "key2": "4Yis9LJjQ111QgoVpNFVFr1Ma2vjyhhKQgT4LM3yDwTnccCZ9RoeNrcakHguaDDEVbHM5xZi3kgKCNmsxKn4hp1W",
  "key3": "6348FNXM9yyXoGikh5ATRjE8JgXG8h6CWdu5b2C4ttnFEYnrabQR8SetGc3Fsh2NgkDaho4BGGiefbzbYVm4Kwfd",
  "key4": "535jv7whZQ6HEt18DdV1BJJmcngXtuiaQEPVnwsnoN78oZY8dLC4JVMNJfy2FF3uaACoHSpDFYxXMVptBueXNKaq",
  "key5": "4SgfkQnKkNi7d5FT85PifYxZjJMM6XLZFFERhXaCHMgHzZyRCNNun2AXiWo78vBsyCvmp3P8U7W2BujwiWKSMPEP",
  "key6": "GykBo19ShL8QQ6vX1MWubnVFdy91eFV7RUPJcchYxNY3GoTYDjAfpJwPGzVgFx5aCUxeT9VWTTYEqZn5JqvPA2f",
  "key7": "5NNaSoQvLVsy7y7pBD6oatWhC4N4REyKkbkUJrvmdNXrfnVHMZ5SG2MvFAbju9bkZ1SiBBDXoj3dUP6RTnvxmzkA",
  "key8": "4NQCKnB74VCqq9D13pfmg3xxqSYZWx6cYTuf5CtHqrQNUWxMSXqpTuNLjiQmzzybYQuFDt8UMM2QMLW2ycXEhB9K",
  "key9": "Xor5chqCrGMb9ZBiM1czJxdzYagGbbzC3v7WCCKzED7WBkcX5xWZYNPouF7T55h5RZSLWcihZWgzc1i5nXZeG7G",
  "key10": "4gXiZgrsb4nAwpckJ8an2S9XKhAdNv9r6DyBq4ort6XcEqSgxwpzT1Uxv1qjD5yZ2Zt9GqcbMuTtsGZHQT4CPe9J",
  "key11": "5hizsThStTD7atK6R47h82tfRoNUUgzVK6KPg4H7jZsHW9yDBP9yx7Pyyn6gEWe6TJ1CXWJPNypaQXDDiXJFahjp",
  "key12": "5mqNZdhZdkchgpAiWmqarE4HJhJQnKUrK4aoWU5UkadbmFUriJx9yYqCVYgS9CE7kxH1xEmtFdfJW83mRgqQCdZQ",
  "key13": "55Q8gbQ37rFXLtKpPqaK4hfeqLQDqvvzyKo4PJJNHc2ZTm6nz5S2Ea2HVrobkig1twRNmwY8SqMXdycQzzZy92ou",
  "key14": "95P6xmi96cYusV5aXpbdhHaDh3gca5gV7cX7AtRyo32o5yUAERgKb3mVBXY9k3yK3LLGxLhZY8Z5phnHD4acYHs",
  "key15": "353q2wTPmg2Uq1jEvCJbk5e5QFYBxJ2QqJs4q7qRG6wrknHLLzxbKY4RTamXi8HQT7TLSfqZXkuz6jz73GeBxSeE",
  "key16": "rzHA8u2SAw3UMuFU1C3HocfnMLjk4gAtrPquaPhvbxqyY4RNyjKyJMTwwanMavBD6NquSduGqGgMSFc5saTPH4v",
  "key17": "5dFaCCkwgad3u9zpT6MgNwoL7yaroiZ5HxGRSvduDgqLiCL1YLBhwMbVpGw1x8XxBZynGNcVvr4vsz42xGwMdVyj",
  "key18": "pydRF5DL444jFqQgtFq9gP1FygCR6uyD6wZJUw3q5oG6xL7bn7wNtb5BXZjetmh2jfNLcM52ruF5iWdicJ9AeCN",
  "key19": "5ZLWdiwtHyzqHZt1B6pcXuhfric67w4DXa9RjFxHMbYNBjobk8uAw7eXvHu7HC5g4uqG8HD4RLRWEUMYi3Jx6CZH",
  "key20": "4WHQsUeEfj2fQ1EVA4p4LgBDBKEbNNtnXUaRMQVxVaK3Vb9DEA5GC2hZ14x5Q7QCenGRzEkkUrSVaTJdHo4f54Ny",
  "key21": "5EWBFAjivMM3Jf15jxjNcqrwWWF3Tbo5cy18fFmQ3rsDbA9Aiuv5Uew3xR9vKqn14JpK2rfHcsAeryDzzeVmMvFy",
  "key22": "5VFncDHh1dy19yhFLXVtaFdkt5unMdyrycNDBQU6RgyYdYYcSeomL4CyC3rT9tg5LzKV4Gf6b2wxh3rvby7YNaLN",
  "key23": "vhMKPaj3DgPLdrRNCbQSXbxmUAWu23qMkR68Sii2Fi3W2zoDHRN6DFJbfYPHhj2jESzQMBcCgDFAsKQAtu2LFbF",
  "key24": "Sifxop4H5dXWd3W16xhsSdocfqg4d6YWLVG3zCrJ6bD8AqHazpZ3MmLMAodBQVZoVF7C5dqe1NDKJiR789jZduu",
  "key25": "5zJ95wRtJNk7uf1M7F12BxiZP8X5WbZfwhWRrWg7A2jvBv5G93KxtLY8WFNqbDJvW6vSjgike1AMTBf8ibGt3Lox",
  "key26": "5eLxUd51bT4285HMxHSeHjBX3ueF3QvBUv4aBU22YEjdRrJmpAu1gHqxAr66VWzD3pUaE7rxd3bDhn8skuQ26ZFU",
  "key27": "61iA3AAsxzkab72QxM7yFZVqbqxnmhUeucqGS1QAmhvo5REnVPBg5mjH5aK5nxkPy6bakuJixcYN9PGzYoT8m4Xo",
  "key28": "3bthtzEja87X2a3WqY6NHUAFivJpvMb6iSCdUmipVGjRyFMNfDR3szruPNSBzYS7BM8hQf6KQK5ywgR3wVa8KtuA",
  "key29": "aRLpTbcFf6in1ZgFfgSuTCh2JwQokvpZzuSam2NR5zGv8MqkiGEAjuoTtnHXcUzZkNa8s8Pw2FM3VRVmpZqoT2F",
  "key30": "2xnLzNpbv7fhvMjsA3muaFTPivLkj7JpdC2AUG79oyxpCaBRKfRoWYXUKqyUZ7HgccvqSmh4cByevAKaDx2jFgsx"
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
