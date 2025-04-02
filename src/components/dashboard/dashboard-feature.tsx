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
    "2wqxPED9XSbsByoHhZS59eJtNH15E9gbAM5wC9BNyj2afLPLSKXtgnzWdYU5gLZKtYf6bmJ5ELqKAN7qu5awaBwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWMYFbocXmiDhhe4j8JDY4Sr3BT7hyPQ5MnahVUEAoAUm6auTdXn62JPyd1qpa3YqVg68g5hfFokTedDWJxLbCJ",
  "key1": "K9zPPutYbUrcvDoUJ5aqMrj1PYMVVSadUxMLopLM6fbg3NoGpzStQdMxCeFEMS77Nw9skBoQVfa1GcTDd5zTwgk",
  "key2": "2xwYZDbfUcCdEKJvtjfM9T8aGHPtSxzHrHs4Jw1jqCQJPugztEdYdYNnqKQ1fJKdbHqC9FyxKFm9ZiXuRXuMeysP",
  "key3": "415kCU5PUXLzTcPfRebyH6VN2djaS4hfBEeJbDT9CFqtk2VaYJdnxV7tonrwHX86FXqzJuSLrpVh99wrJi4w6upc",
  "key4": "2mwzSsay2EZexRdoN9ZZNygfAiPbhAe9D2tsLGsSN2Kb7yQGcdfoXBfho4dzzNdzdyZp41TQ28wUAB1FiGToXS35",
  "key5": "Kt1qXdczLZ8rtG5i1Y18AYdh3c1GwWuaV411k5Linzixvvsfzwn7G4fJFBNsK6qajWrd6ZNnQsdRwLe7ZcPgAxU",
  "key6": "jJRnANn6ozyZbnF6PTVmBbJoAkuEwQb9JzPBnzDyD1BpVvkD5Ln7jtBju61Sizjp12ZRab4mfeg7WLhYeCJwsMg",
  "key7": "2XLuomT5xdnoCUEHRtovazyB8MazdhAGFRAbTYcAYHhsoVFJHaqDKzykfwpjKVE26w7pnRWEceHLB5nfe1f48EWx",
  "key8": "3SidHVNj5xDLmQmJBCB54GsBHG1vStHQiwqLqp2kXEQhnZmFKpiQ8vT5Qk4b5YfUdoa7tTuNffXwg4LvWNKMucf9",
  "key9": "2ajk1i5fPHDPezZrcgbaMA5EWfCDZjPTS6F7yqmoYbprV5uqPxzTFJQDJgnPTSrGed81j5NY9zwM62kfTJi7z7nT",
  "key10": "5H7w8X9cruVwHXRUru4qMnYeKAH5RK2icUYHZfpVGofhMgGnfccAtQBVNspTbneCr9uyHXZvPnPjyEiQbF5G8vQg",
  "key11": "33hsf6dZjxn75m9H3deLRcimBPuF2QVNtvBkwLoSejWuuQQDq9nZVMjtTnpZcPpnofqYBqAUJ3V7ys7CZ93awQ2h",
  "key12": "5LQWVV8GZTZrkeV6goyi9iNvy7No7rckx3oZLzC5ca3ZsnLNNSnUPGzUDvuQT7wQ2XWLdV27srmjtaU7j1AP34TA",
  "key13": "4z7u2ttPxkezYqzznaCafFXETaBMkMwZrSVgmBapqaANUFYANSJ9yP684JPHU5M7YRVxzhne9gfGcNah2pEmqpad",
  "key14": "z91aa2poiwSoPPy8rhNv9D6yano7eDDbrME6yX8hhbj4KkxnmUUdv3Bz2JzBYPgpLAHNeGNcKJBzAVvLbZW9EyA",
  "key15": "tMfCNUxAzeDTHxXnGGWRijepoet6JCvdbzUJhvxXDqxantqm7e2ksdd9Wmv8KLVBxEC3X3f1dZoA7hjEGU6qU7G",
  "key16": "3DGw6yKKZs7uhFv3FEJRVnp8yE1zB6o4zHmfkSyZ6zqTk26srxzoPwZVrEzvZ1Xmpogb4G9uY5Zy1KSx1ySFtk2w",
  "key17": "wt3kmtnbusQZxnS7GwK87McR5jCAaxWbYAHMXR6uM9JJA4iYbBmS36tUzYvRn6nRXJmMHVkWZ6MhpeHaiwaNJEj",
  "key18": "56kCKxZs5fordE3LnCN3eL4B8n5q8KJNP31ZesqeVRzRdzE47gmyLBtqdARmArsr1XQqJNErhpKePqQhfy8w4GBS",
  "key19": "3f6ZomewKDemTJ8YxA2Bnzy9jxxL2J49yYHvRCLTxdk3miQJmZsLfDv9dh9vTR4YCjqig3GZEG96e378yHYQZYZf",
  "key20": "5Sy5LcJhjn64qyCfkiPWcTVJLFkLMJB5GAv5PJC4XJz6rt9JCUdxcuW3sDfNR5aVfinSBsF9kSYdNqSuM6DM3aHu",
  "key21": "4mvmXChwRvuKryRTM7ZAWSmcYz9KRXHj7KnY3rpwsK9Nx8EfqYD73X457QjHfBsjpiU3DbjUo1twi18UaCEwRnWD",
  "key22": "Q2EYko5oyyEShn27S66uKramDskXudQYDujQn7hMx8jTf4RZAFU4NFabpmjjZvJXWYM56cqtFX24xPD6PXPfroc",
  "key23": "3RXJAjxbbFGrMjBA4Db9StPu2Vrpn4FMQkH7ESfC6FCEXdF7jChL7UcLCxusycsbgyzfL816ewidBMoPuwLJmDN5",
  "key24": "pVcAfH92MzonuvvmAyFCbrUy12LDeRes2VhkWzkQLShumFfhFiGvQPW4hUfLdPcBqxb2tHahZXAc1jtDw457Fdz",
  "key25": "2AuVW26r772ZBSjf2CS7gJ2aSeD8bDeAjcckwfgbLimHwX1eBQmE4Da9gV15H1JLBuGUZNH9ddz3kFTDd8ArumxF",
  "key26": "47hBQ2cosvVbeVNaygjHabb1S65xsRmMm9Wth2Z7JueKaidxbm2rM48UaYQWauARBqufNx3F9WMcHdXehiHfhaF2",
  "key27": "3wtVCFGbJuyyHc6CBHhxWep5UyhP63bnGmvt2srfhkgzfTEx9hZwjVk5v5E7UDJY6caZi5dKkaPyAG2iWNi4aUmP",
  "key28": "62ViZkDryssMwLqvEaWBNdPHSywuT8QDSWRPApCemtUL6kA13GrZVDW6buCgMvZT5JcEiVX8UGDnqB5BhvZ36VBi",
  "key29": "3AS39mun19VDLyJR2nAcbZzmxNi938nR78FR6aFWMuWvrvYPJKnYQCubunD5Peax3Xsyv5atKso1pjtdLbriooeq",
  "key30": "3dxEXcuj5XDnhfPjQjR7SFiWymRcSJJC4LH2uoWJjd7RK4zBJf1QsVmuMWVCH8moRqYTMX4Coh1ZfyqPDEpcANas",
  "key31": "2fr8TjN2wdUM7tJF24bn917hxVrQSBFzJQrDkdMkePBdwGdKAwgy8rqzqyTSP2d2AR8Rnf8pYfwdFw6atXtRzzBz",
  "key32": "42UnNB6AHCrBgHwcEQVPhiokf9PdYficv9rrBprSgxjeHQdJmRhC7QXAD2zJXU1vHTDJQgqoB54GPdBVkmw58n5X",
  "key33": "4GDJ68evWAqP2u5srMBVKSJEBxd9aZsSML2Xh3tHy5vw94Tfux5m2oVdDMLgYNEX8aJZr9nm3v5oxyowvfsXYqCh",
  "key34": "54JdFLbAsW6iMkMdBAiKvSZYpPCZB8NcRspWemZHD1eUE1hHYwyp29GXrsWrRXCPgFWfYouDuWKMsGfS81zAZKo4",
  "key35": "239ucfLwzCBiTcP7m9mRduaPvAyCKxqgj3WNt4nYMQyVUPjssQks3TdraLVLmqpKfKbcJEDaJBQS9bZPyDSWjBTa",
  "key36": "9hcrfyFxXfvbobmyQxQWZGGXFjdgrbPw2gawkp6wBHZAtDCUcKciHD7CZA1PVjs6SmP8dbjDrxsAvtQ26hMhqJd",
  "key37": "2SDNZoTj3NkHg2W5QqFGDe4F2kvqvgk4myrnrjts1fjRDxpXwT6qKWJQT6Dkp5cdNjkjhtPTgKwbgMgN4H9JSog6"
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
