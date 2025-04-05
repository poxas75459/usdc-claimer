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
    "2nVUNNyHWXxsz8r6UTraYsLqzYFdrNNEt7nLNZ6KEnJFPFwwqinZ9z4MXzyuP8MstCzxzWvUvmh4hEQVdjjNT48c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVg7EWL5Ejzzck75DB3JocGpS5aAMXipW3XoKP8SSfsxvok8qm6shZPhXS9Cx7LDcVS6QozFjDPkUq1Gffc4Y2B",
  "key1": "5DerxQTWFVWyJ47swCG2C3PkCVvXcESKFNAjSf6m2oDyvXbnojxbpMRVE2jW2zd62G1Q9XMZfew1TyZmb3j1KBrc",
  "key2": "kGSbJHpqHv7bYNaJiG5g56aidTVVeh3JqNveoXKhYPFPPTgYW2YqsHCvPfpuowUjHKY8s5qm9k81yqkskEKtGC1",
  "key3": "39SWWzEv4ndUsLme9DHZkBJqp1s3u1QiL2ZZ3iDmoUfCp4P9K2sPgovGptqxMJzGoCfR2q7pTqxgzmYbYCibHBYj",
  "key4": "63WX99KUekEaPNsDKf7dVzXJd1LYGqjsAFK2mBEcvLa12ENKAnrJhTA93iVqiXkfJrmTQ8JowNWyKHz5HHdE2iyA",
  "key5": "v5akT93kL9fcPerov7TRxxgkv26GFaPQKaavaNcCay8D3bt1tnXv8PRfGuh8Ya7yXHM6jeJr2MeEyjoDhD2T4YT",
  "key6": "5mKSNKG3LNSHHdaswQu2w8c1nQFh6PkMDii6jcZXgC8SWiCPjRvuMNn2daSE3odKrQZrZXkNqwmWMVX6px4U3yTe",
  "key7": "5aWvJqPeHGUWU5cWAYx7diN6Tf46CZLQVxkV8pweSWNECghBEEebebLzwLffrQ4PsjA8cw7GmUVFaL8v9qNYp3vi",
  "key8": "5WpxASyqvG9ks8zU8VJQGfFCCWbQyU3HGPbn1moczc295ACNeiESUTu4HL6ciqHrWw7neyKep8gh3HBqkJrQoeV",
  "key9": "4VhN2uD3RfcUmGkQf9E1bmrUVfaEdWq7noBsVNnwEwF2fy9nUSiJ6qgJ1TBAUjxtkyg8zYiS5WiKzCVMnbBrBdna",
  "key10": "2Kj2bv1W33hhuoA4AwGYZJbSXyiGRkmbM3bRGuG4uv1ktLmCLhDaJXd5u6eFqF2vozMAKuKbQnGvDAuhHC8T11JS",
  "key11": "w1vUfKUCMPhU6k8dQJNqg63A6E7CbgP4qyL6hmDgJ6ansFQRrinfupvLuovkGfzADh2dPSMsWEEYn98X4MMvvHB",
  "key12": "5sMKShh7ja7DEmXM6tGRLauqwYSaQCGLb4i3b52bRzub16uGJN6ASUbEKy3ZvH7AWWzYQbLhzdmAfahtS3hj5pjQ",
  "key13": "4fnKSFgNjug3BM7WSFaU6cAZqH5Q7DLJGGo8nZ9maCUK87V5NjPAeM9tzg5KcMUURaMr2RMwoZBFfCFNew2QUGHD",
  "key14": "5HkpSgUp9KN3MUrwdZ4tFUnXWU4jZsoCUAZRSqTmmb7pT5KceKhzZrkamunkJ1A4JKDsVQvHU8DCZpgTodoXVwf1",
  "key15": "LKojfj825Ra1cHT3kNUrwygF94yCQa7YABvRz51bP4RcmEJi4d8wR7hWCgi2yRiwQ3AoVVCYHbHZEX7iRoqTvNu",
  "key16": "5xwmXvTu9noyYsvwERa4Jn6uyWfF6otZeuvxDmVQsCpieaQDyx7MgsZ2STBBMqQrCEyxLbHdZgPu1LfZrPHm7RSR",
  "key17": "5LPhLDGLq6gnt5hNr1Li38ZGayJApGPjrmjPdLs8FQqDm5wjec7mKvEb2eFvtEUscWTN5LQqWiEBP7JnFUHrFSQY",
  "key18": "5oxniQmC55x7KMnZtoADH7hLLZjynh7qPQjgwvwGSr56SFFXbzS16rmN5caj3CxpnQ3oELmo8WcdKkcAa4Sgd2eV",
  "key19": "2VMRTGaPQurW8EKS58x3FEjoJTtCsP3hCXkmbNdkLcFv12o1KcpBsdN6mHVfbzyqWbPe7id4PmDi5GGZUz98tA1F",
  "key20": "2HQj5kFHEg6Qz2DKkr7di9g4XNzKtZe2fw6PJ6DJ1Wwj9gC7PUYg8YdYx9SmcYPAutejVkNMxmdjrQitiUbefc9M",
  "key21": "4D9dVWsFYUwjaq4ce78hcGhyQfvM6oGm7NeEDPdSwEt8mLK6XCq9CcP8uo8nPetRRaWV6b14tyJ82k3Xkvb6mDh1",
  "key22": "5vuuRLSFePXJbWH9wjzv1crUkpTszrrLHjfz7gDemwmEoLGYxNnCU58hEGc9CC2PoPfVFTKyNeyLkpHf6chaTHRE",
  "key23": "4Y89EZtikHtQCztJ1FWvaEuHTzExVK2pjWcxFSUi9y3sz7upG3vWFPz5f8d9LTxQwx5yM2n4KDfTqV6N1FyoTkWs",
  "key24": "2mzSpnZ3amWyfkTJe7EWvXshABXacu2KWPc45RNo59iwqMS9cXa3YnPbwv5ZXiswACDkWb6MFZv8hyWD6RPaJ6LU",
  "key25": "4WAYrtVskfNmvqdN6iNqYTYFDeZgcCjWQDxw3ucDuV4FKhpQXrQESYvFnnNWG9QQVhUmrwkRpSPmyZGDXM3uChGR",
  "key26": "5XVoGx4kWSAeVMP7okwSvn9fJy6sCt9UYc844HfbDuXsHxR6ak1CyUneBjvVQQQdbK9yR28jg5mWpnvBpXSWLqL3",
  "key27": "g3QCcUzkXeae17HCcHtk6zuzvPSL7fEJF75r2R8TuPPgSQw4HTNTBUDNKMfkHpR1PHht8mf8ptFK8VByqDSgcBL",
  "key28": "SLbF27qCX7ba9vn1MEaiMhfijzSY6cpSz4f2YcmePX7C1CqN7DhQB2jqL5umtp7EZxBDosUtYZT7iJzTGU2SwmA",
  "key29": "UYXkGT3ZSxrGr6ConJpFiw3tDcp33UDewwAAiF4tCgUQq7UqWcgTaDFvQxSxAt9k8oKEjRdbnDcZYrXsaKcnfFp",
  "key30": "3EXqjHjjLwfyRuEGuTEWHonJecL4aU8F5YdepKXo9wmDCsufu9Gx4GZ4PqwYXwGGQWfXjo8UfGiz3zajTz7QaEEz",
  "key31": "2uYEtcKjyDgYRnsxcrSN2pwJghTNZLtT9BURm1VbT1BrGdtAmGxbXiAm8MoveFMreJmnu6Kxd7zJSbNVxawrKCSw",
  "key32": "4t5FZsiPE4BtpBT4Rt7aEdRBvE1bwyxgy2ZjkkoJtSfJwV654Cez1i91XhvZ4ZVEnwQaQ6kfbu8ivdu2UC3P81QE",
  "key33": "D6WAwCEQWoV5BRdstuTUkEntKMRproag92J7W1rZDGhqQgErTh7JbgEjQbXB5SN1RCfpfYzRj6HZcKACCqJoy6s",
  "key34": "3r5Lr48zXiwmurhNKgv6N6UGgy4J9CDRAd1pmquZ9vdKMZef2zgUeLqYcUnfZncQJWEAFp69UG1szH3fQwmK2bMv",
  "key35": "WWPaR2dvCafvBrK87N2RhNDd6xmEyVT19ABoGkeqf3ZiAVqpR79M7zMb4tV4Et1UBDaZakTtHyC6V2Ts1SGL5pq",
  "key36": "23fgmWjiKkrupWcGKchm57zyB4JnJFBUcaN6i5715jxGYE5y2QzMYr1VkEvZJ4rCjzRqFC6yypskDQCb2CTb4UAC"
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
