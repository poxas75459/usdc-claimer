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
    "2797vY3mVCx5FyVebteUYPnYxQmX31UYwSvTbuABeSNvnRp3Jb9mfDSGjXtJ2zA5VFUT2hXWjCnaNnHEc7NMHqzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrS6TX3n11HJryxB5kXWdAdvyEQkzjzTS3osmRXgRAi1p6mWePaS4VnXja17Mjus7VtwKtj2gxJ6zcw2SPyaj7N",
  "key1": "5JDHKrtQYMxoZfTPeArUhkNHKd7g7tf1FCBwgx6vV9aHFE75UPgXohWXkmtSDp4ZQpmXjs3xTFhXeHDCUt3rmktz",
  "key2": "UGhWztNRh4cMNBKFXGn9tQbvVrBLYFciongRC8cLbkbkWnASrDYtE5udfvzjHNsceKop3TqRpn8GjiRL6cPkHJ8",
  "key3": "3n5fW8aaofVqd1bu4aSjN8KUoPPiRC8HeTdCeByuB2wt2wn3kJZyb1tkKV2y6gp2CJM69JAA1FiNHnagVu3QMgUM",
  "key4": "5gFbnoaKHAm94LqrWhJtofAYXHVMNDfxPXUeb5fZ3SueGso5RawytR8UKb4FrkTa9WgEk1fJVbh49AENaYBxnSSZ",
  "key5": "5TjGPReLtYEpQuT3csUfJabYUEJerv7aikNfuonjEoFLimtBS3YjLrCn2vfoB3WUxEvNq8NamzqTiMc2DQhV55DR",
  "key6": "5SZsRDr81MAy57R4mENC1cPcVTukizKsbPRSD91PFkKBhyQjFV9k97aom2eS3nvPTvhWsCdr8EZr64GDJc3FPTcS",
  "key7": "9ZHJXyEEYPy1fHQbB5CMhEGDBeqdUjCdRXZxbpte1shH291iKSYwGnFApKyaMVLVKJJ7pKFjsMyViVJmCbX2RwU",
  "key8": "4kCvAMdN9E7VBWtrkeEEr8RkdVfeXobU5Lf1cyx7mcB3zCu7k3z6nBbwHjKKfALvGSpENiEBFqNBeYnnpV7tyQVk",
  "key9": "4EkUhxL5ezwRUEBwtDrTSBZrKViAFBA5ysRbZbPmpdmJPNhVCq94iwmnJ7W3neJhZqWmLaJzsc9SxGfJGsjmKvnA",
  "key10": "5eqPJu3GTW9JaUjfGTJYDBjoVckrSjWP6FVeWXea4LZvcrhDNWkgjSBob2QoAnv5F1PLm6b6ozSqjSiihbfDgpud",
  "key11": "f5ovSdXLHDnHxXgKxD9RjhCZuiXsioEowpPXexZa5nWLUnJzn6Lt7de9xAhLnNJ8QQYaydF6r8hTzkFhU2iZkEy",
  "key12": "5RX2JPYpCdSoREMvNMFZeyvWBbbG3DVXoN1H8hDth9oCn2iFqK7Yv1AwNuxZm1txFrsUS2WZXEXg8jJYnxWeVzP4",
  "key13": "vcHPiFXBvahR5jM6YYeXZfkxRwVmU1DkVgzqb2b2R2r4S58awDNTFJGAangEVmCYXk5TPMMtx2Xqv5jm7whTAfD",
  "key14": "d3rgavPEQ6wViCkSoh8N5VvynbZNxfasmm9zp1xJbXg5UgoNzxysGfVqEBM7UNE3iQ5VYDe277XKj4tRK6n5Lfu",
  "key15": "66hy9pyQE6LJQT8FZ58Ch1Z6nagu33Y3T9UcPykAbY7mrU4v4jETgxW3w5NFYRXvcq1kiDwcBhKfDrHbWDe43NM8",
  "key16": "Yh1TRqCuUHE6XQZPYq6tidkwgVWP4mMJERmNSZTqbQofxAvDjVoHVbwnPgQoPtbVUW8hUoh2wEz6Kad2PwqPboA",
  "key17": "AWuQXVgGE2PxrSCZr2S8dSQ2PXAnb9S7xUL2oFs1h51L26yt9J2XjkP1JzGHN6V6X2NfFzHhEWDhy1AsVoLi4zu",
  "key18": "3WDz9fNb9aehuCucpDqUa1jTuWoWaVhgS1RbYmvQ71Svt23mYt1qByhpFzyCq19pvkno4juocHNM7DF6bLvacVoW",
  "key19": "TcqR7PczvWPUot9ygjDc2q9NxV55VW2bpmwfeqZoudhsWmvboVRmNWgadSxBX8hM6fcCCkh7WQXpUhyzgjg9ncQ",
  "key20": "2BwSc3gsD6Fehxeuuim4vFYMyPSeYBZmrmNWeoFyDKF38R5irQc8gvASSBru2RaokSdswN8N3aRNDoEv9QFLR4Vp",
  "key21": "9wjAJGSkqGdHEBL3F8XbN8UwpQfisxc5NXHktQ58YexvoFSn4uLCxtDjmD4bKbamTDjk9XUM1nohwaXqsmyv78u",
  "key22": "652L37VHzZrYpMYii7BsEsb3UiyktnvvFwkhHzkLpGpVZJTDzUEvrqVRcHiimEe2X7J2AWXxMxxUfDNhwnFMPZBj",
  "key23": "Jc89ng7KSLy3tMaMGCq1SVomNdCH9S7EufKq4PDV2qzNRuzTEAU65fWdpSKJZeNtFNXLrUobDHB4GwBZbibS7na",
  "key24": "H8JWfC7wcVUmduuxvE8oRyH3fUUwAnLa83bHbnChAhtJNeHE1hd3BczmPTu1sY4bADq51PU69tanXjVmdNbWaRx",
  "key25": "5bTeBPE7vkKPPYvhRozR3eZFSj2xGsAfKyWUUMYE4sLrRn2SSgXdVVwFHjwVZ44ynZ9NhVbqkZDy7b4XqGX45LZ2",
  "key26": "63W43X61EVjzyhf9QUC2wT3XVr1Zov3RVGNjtFMDLm2BUbXh9iX3NZd3HVNFenx2iwJhXtnUd62FcwJjDEuBXqHB",
  "key27": "p7TqKS3NAG14vyRahWS8YZtr7EMBcTeJnUof5v5oqMXFCZXog7MFRmg9nXB9xjZvQJFryf5XpPixRYa9UDufnsB",
  "key28": "2iZ2r6PZWTRGYZMZDsoiMXtVzQcDTDbAcmBSPevTJ9ksdTbQs931qNEcFe8AmMQSC3QXouEqmtAzzVgN4DzzJ9t7",
  "key29": "5Pvvfxp33xuepv8xph1ztkioJiqh2UH6ao2Xh8yxbvRaHC4YsjVpcUtkLN5wWqmruiw4JCCECx8ZwqPUnqVrW4jg",
  "key30": "4z1eouMxhNQ5nMxzctBxd8tGJPtpWbKMG6MMhaeEvCRPovaiwj2hEx4oQAxhPBALchoEJX4N9bdjunqfpQP6ZPEG",
  "key31": "ZTPmEhW3VC2RFRkjNVZdZSMwHGSvBNsm6Wwo6EC4EqJxu8AAw36pKoWwzyZTna98eLYdSF2r4BkeKK367e1STZS",
  "key32": "3bGKujFRBZYjk5StwkgEVUDcHW6f6nKbHBh4oUMedVpkFtN9BjLcX9pFkrai3GnUFVaWR3k7Ya1vVfvynUfEKNnq"
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
