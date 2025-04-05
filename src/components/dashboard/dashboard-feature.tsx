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
    "88UwCNTFSak6T8ZBdp6BrojrUFK2SEqodVGdQivphw1vsQRH4BazQzs6V1zTQkgwzSyK2KChtgxhbWjPvWifFMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CxXBXZaAxKwjrhhxNtuEijNDe7PKxpiVGsHBLZg5AZtHpK25Wy5poPiFEWgaPmmhyWcfUZJT1UiDQ9YvXvAdQgo",
  "key1": "2k5Zvh3eyntWZQZ4eFsram5QjjA4mpwhU7X37q8YdkAjPsSmMAWwXy5BQHUap32QSK3CRgArSTYgJ1GtcTU851tD",
  "key2": "unBTTWj1vkLRDryMsjsZTnJEUVWUBy6YT1ESHXzrrsCXp1K8TD7mfqiM9yhPAoxunXCNNJjxqfVzYzdReV3WUkB",
  "key3": "65VPnEFSfFVPwCb62u86ZHfAJJBBN4VAQfTf94UcbGn2ZczeL8JxvEiaAaCuQiDPcj5h7pNmMUSLWbbR79s7Q8oH",
  "key4": "Wxk9fuK91iQZtMDmv6Z1qS4zBFikxVnrApCFZgc1tqvvFirBp5Dm1mqMUutZazPn2XptDaUk1nJokxxQcEPTDXM",
  "key5": "52eeewn43BGWYaegnHSB8e3wAzYFYsYm3uQuXjdeCksN7tYQwhr2pCg77tAPhjDCm1ys5FRtS1otXFNrEgC5Juk1",
  "key6": "4jfY7gGZb2pXzFNYamdtxTBbrxMh3oznX1GM8vsM1gGgfaswT1vAkwRejfKhHwP7xyRy46apivV3omXbxT6S2Wef",
  "key7": "5m4q9BAs7KiNoDc8Drz7MFgXxLgLjBKXqJZd2mTMqGceEfVcKxPsfZA9WN5fQHkuBi1EAPs8nTgvFfExvwhDTxnK",
  "key8": "324GtjA8nJfG4gt3oz1DDC2Rhoja24vbtMc6kYtmuv2XKfQaD6UgMCcWG3T7JjGKSeYE8a94uv8hZf9KmnJu7BGh",
  "key9": "5FPm7EgPV4AvCWaszFZ4mtWEJTLjrMmnYcYve1CteLRkyLt7QPACmt7jL9RDQUagbGr5i8wX1FCDoTFFrLukxxhN",
  "key10": "2mKxa2wxi5nhBgMeyB3KbK3BrU1UWKeErjPuhjWfG4etwVNonHtz6Ue5tDsZnn4kM1bV6SpDu24trQNVwW8rjXu5",
  "key11": "4QrGS44LFg3iQ7czq6NnFSUjZZM5HdZgo1jfqz4m94rJMjSA1fz8w9tyVZhFKLAbc7SCuBidX1bh1KsQsNXi3Vdg",
  "key12": "2owYRdsrCz7zA5KzYvrFL9n4NYYHiRzHCz3W8roTu41KvyGEeDPUzjaFreVt35qH5uwJpx7nrfRSKE6tTs5NCb4g",
  "key13": "27LAa1skn47Y9ePp7ySV7RJoL9ntoxitbHYnsym8ZsPhur1yKJ9YDxrPFJWrsegq2wupQxwGyMgKZS6d9KY438r1",
  "key14": "ccKd4DMv3vGjyzneKCoNAtYv2zV5xadk7hPEov3LordJBeeuKhThUaaPPRwJeJP42fnyppHi3VL2gwq5ref9i91",
  "key15": "67SQnXXp3nZSMc5eAEs2AEva7QJaKvnnDshUWgAcBxufrVA7xrNBMjGZy8Ta7aWJBZ4ovnmzZCfLSajjECAuWEpU",
  "key16": "5bhLh8oSwVdmFmFJBvZt5mKRk593PqxqhvFobARtx8ob1dKwCFU7qBMetsCDsBr77PNVi13yMC8RvWGwNHvxYt7v",
  "key17": "WqDdUv4EsEgCrY6t9RC6VpEiZUEs7jT2BeYDNxh8TGBoPnZwfDH1dXXae3ioxitAiMiy97Jx7KNxdZErHiFkzCS",
  "key18": "36sAEofcfUc6BtiimYELz22XHAxPgXPxAyJF3dQ2YDmzxvaKW27XmDjgrNnAvH1PbjTgS71Rxb7G1iUr1AAbfmYX",
  "key19": "5Ws3eBctipYjt3a5Y53zeruqzmQQwvvFn6bdj6A5UywB95ysDkd5W6Z7VMa3PZCN5QwDeh1jmtLizRz3FH3NpfEA",
  "key20": "2xSdaqf7mxMnbp45jDRz9AskKf5gjkSLyYSRLT1Z1Ga9o6Yqf6YBmwvgXdrHAP9VpNgTYWHfyRSqj8rV6Dz3e5Ma",
  "key21": "5usPBuxmsdyFQCPkPrL4QwZf4Qod5rbJdjXMNJdUNy8kU9XN6xRvzVr59CW7Sbg5tJL7vrTbjgZTQ5CWoZ425pJn",
  "key22": "4kvQANoEP6HJaYFsMZupWQAeV6XUPgvf72BRHDNBzc3nnd94TkkSLqChJxnAmwgGfYVzXc8ssBgGBnWQutt6ArTU",
  "key23": "3E9SU3px4rHpzsFrjnFRSY6YgP6LWtoEVLfmX7ZPocvnjK1YHYbeZiSE9oFGGqVJRWzdbcqpacGJL9gk3j8ri7sm",
  "key24": "53k2Dk5ipm4GUUNF5KNnVUGLZt1FVwz7XDZCZ9YM8w88TCerDwdH2wWHL98TQ4Ajw82y13gyY59w9sna3kEpMoZu",
  "key25": "65sFc1FjNEimRE26TKMPwQ8jR5t1fN3RwySefsQKG1wYaDcUxVai8x2LYKi4dwHzjtrgErXCfZ17ajzwb1eSzVA",
  "key26": "4s6JPMSRNeKsMYvd5TLdq2439AAm7EwhSDnQksC7hcJtX8D6Pu426QUJBgkA7Brw9bHxW3FaKhHomKNzvrZZjRyZ",
  "key27": "4VtWiQj7AXSvkmCC39faXhwhQnwMdN2oGemBeTpvsy6K9xFG4vbs51vhfYdXsAYVerSKF1hSStoG8AZvF2fFUpts",
  "key28": "2e3EAhpDcePs1HZCc29F7zLSAZ3dq1wViTB6czYNNEwTTLcx4DwxbQmzsMUsyaZMkJfa2vKYs5jSMoHwEc49EwnQ",
  "key29": "3djXtouyBFGVPSaKqhXaB7rrzL3ExgWYSD1EX7C9obgHSmzFbuJy7apYPgGPMv2FqUJsUfykKR8MmKWYxB5XianA",
  "key30": "67BtdmkjbimogCMYC1ywWp2484iWPdyt3su4HaVBTnUwzEADBGh4jvFbuEQrQ1FJTxJZ3WbBuhaBEyEeKQ1UM9AF",
  "key31": "3QUS8GLeDkmqwUxpf1e9tDtkRVLtSqQb1Jrrqp4PBwK89p5Bk6GqfXja6TznWz7Wq8e9Pyh6aDSZ8fxKk7844Rf5",
  "key32": "5JtuLnsaaXAPi7VDNCCBq5JGTuu2XKDiQrDNVMs9hEmcviiyprdbih6NZDriWNUDRcVViExPusNHVtPhGw5waBUN",
  "key33": "53tN7jTgiAVKgdSzjW1kZmQ6nCeptCrn4Av53LtLQ6FwNzZ1pqy5zsNySj3E9Zd5cg5AYLhJUF4D41ioUgt8rHQB",
  "key34": "4frz46rqxyJW9e7nyVSpvv4hozXsbQUXJwScR2o7pBvqFyZthoU7fDjVZ4rDkMgnazdAx3Gmigc52p5NmNH65My5",
  "key35": "4KSLNRbu1TWWDfEpqizjtT6kRtQwhbUxV2m8Zn46sMio7rbJKq5nQndHvnR6r9VnA9mjL1cb5osiqoqb6i5WdqeM"
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
