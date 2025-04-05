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
    "2bK9F24DvLGn8j4FHWdvK6mR43xyWcQHpfvhAiNqfXS7NXgvk5iecNRJi3EAuh2HEx1Ro6eiVQtTPwjVi3aePDHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gdZfCYcsC4E5zKQbwomFVsHpw7h3Gy8r7EtBB6vV8LypJgfdJEAuyitGJYnVCaY6tCHoABghWRCRXh2bBKP8QCW",
  "key1": "2ZLrbFR4AzQtJsr1t7uPjdAgDdxTAP635iW6fAtgH3AeccVkvk5w7hQB6zE5jf3kNkooKC96A41nCsyiNsK1yopS",
  "key2": "2RysgSCHaj7ed7uQcRtWHzBXwdakYnVko3RUEU8oHHMiwp4XD31omNshpRJtDrx6DYLDpQQCmZD85s1apeq46j5i",
  "key3": "3i6dzt58fAW35FKW6nK696qtqzV9Xdbnrv93NPubEaqqqDJm8hTn3fopQpVZKypQvUB43Aa3wpvPaq2nYVfLKSsS",
  "key4": "4JAugMasearyKJC4XEkar3di4HegKgyLFL7UnXAwbTtykTUqVTVjM4ZXBGG5cvUTcwyZZusodHb5oWEUq3rQPxKJ",
  "key5": "4cM8D8TrZf2T8y15DUk4QdM3uDybvi5NAqjaR4nm7phqbsxKm4KTUtmQPzqDyr9nMU9T66xkcb7thCrWe1xkbcUL",
  "key6": "8DAuvW1Cn614Q59DDSS5Pj6i6XGcmSka7LhzRzZHUXT25jPvFBWhKo26jvg51eu3NiYcaY8Gat93GMo23oeQjUd",
  "key7": "4FfNXKXHd2SCJBJtW28BEdqrKWG5HvxNtJydFNRcPCH4woe8r7FdxeroUmKdsnER2CjDqbAqdc8cTMi71q2hKFPo",
  "key8": "e3CtHXQ8HTv9qHp7S5DBx9Fsj9vkhJgfcKpYJ7jtZQCsyQVQUNH493TM5HrtQfzQjvvZsN9hNoJz87KhXBrYjA3",
  "key9": "4eF8W8rVsFEDJ56uoMv652c2qd5n9MfTCkA2PQAyYLEXD1NkUdvyu5kVefViicayA5gvtf18Ri69xsS3jgABC8Ht",
  "key10": "2qErRJ9h3TDfitLj8z9FUAdGnwUQwV8mmKkDZWYc8bGiHQMxiLxtYfDjEthoF5vqTzskbHG5rVPkfd4LKrKpk7Td",
  "key11": "Yi6snutLFd8iXfHTjYfrT3CnpBkDMeLowyFF5s54epzNTq2sGZm5VkdZK1y5mTS9xUndsGtzPTGfvE2PBTk8sVH",
  "key12": "5j51CRYiYs5gtQ1dPaLC1njtfgwemQeYQG8ucmXKihK9X2X3aNysB1YMdXP9Hoffpy9xgek14zQBzJhWvj1Vyu16",
  "key13": "4iSbtS9jTtQ4SgNUrcWuCFHbL68VmwmRbyVU5kT65RK3Q4xFEnFsiho5gnUwgHUZhBFB9Xn8CX99ijNRspSQZJzc",
  "key14": "24HBHWcApjWJ1x3TUgMALn4M8Kuujbrn6bHpfcqQXGSxBqsUA9JvjgTut4Bh2UQ4h3u7LxW8sASakppdaeu8M2wH",
  "key15": "5X8oVkP8WWBdudmBjxR2A7eB3WCZsLEHCZWXybNBHCQUD4yYrPmvAabrmm3LAJ4hRzm3yQB8oKSoM6XnydcZNPzF",
  "key16": "3piSTcbzmt55BnRVuLVCoh4ZYKSYLi8uC3JBKsqoGx3VAuhi6r5nwaVTJ4iYqeTrPqc5gWfbRyASK3QjuztYBQpj",
  "key17": "4gR5uVJ5hgGnXYYCmGLohjA2SzpbKZYPVZynvejFRbCvTcH1FBBH1hEhcDxEWTx61XgthWc3aVKZGChWAeYsqGRH",
  "key18": "mLaNW5bHPMedhXt8vtB7DzCNwj1DFBLkDqxwsneLic4RVgrpJHe3sEK9Xtk4C47ruYAsGjaZwae6iqGTJ6fMRhh",
  "key19": "3jtpNuiTqBHRiYCPbF4aME5VWiRu2gRLCkh78Rh7AXTdkHJ4KJnCdPg8UDVpAtHaCS8kcNKUH81knKzKKpVnxZsb",
  "key20": "4fXpxJs7Lm3JLE8qbimJRHR1TgKhQJuY4STzoLfgbJZJ2BKW3WbrpKkSqUrAeRaaTYGLTUu7tomxvhB5gAzcZbkb",
  "key21": "4LEnYw4px7AmxXRAdyV34SeuaeecteHvP7gg8Bmyo5spx2FnkyBkhosj45dNL1s7iAuernzny1ta9PUJGyGtcwDR",
  "key22": "2vTfk3iFfSe2yv1yurmJpeFWki977CWfKv3qZcowHRQF9hnaopvWL8oJNGw5qUw7BKXpbywGrEohWXVaLryLCygL",
  "key23": "3rv2iLxgi6bZ3cH15ZGZHbjC72oYyfswvX763X6WySrPsBHYYHgEiugEtF1LydNSmLx5fRwF5ToW311SncPWH92o",
  "key24": "4UzymhEC7mtRg3BLDMHx7jsySEwnTVjGwtFdBkqNACaX5ZbZ3JkQZ4Rj3zCBs4YJx7NEYEsi3zC5GGNmjwZvzK97",
  "key25": "5s65ebnguvpop6he4dwJoum36uwSBdw7pxYzuA8SwLGK3TbELnYXR2BXZtEKz8ig2LFLn7mXBeWadV8zNTaRXz8q",
  "key26": "2xfcNEVq2TyzTMkhk8hY4U24xHUs2gszEvKLsXsiJYnu5onz81NVoj4QC7DcgAdkbctvWmMHpz4JMDw7o2XfoqN2",
  "key27": "3vT7pUrMoLoxjFPeLikD8xurbaNtzeqytAmFaSjmt2Xze793p3Yge2r6Ci4LiBRkGofz7aJfasxWpTJ663XkBdrt",
  "key28": "5CZHXoh3AwCrpQHt3uSrSiHtVk1hZyJA6QbfBLczZaUuGHH3vWuaEYgE4sPzz1UhjdQjnWRiecJXoH3pLUJrhmY7",
  "key29": "3jjdTwy1yXugc92Y6JewPDyuJhzehvxNPfHx7AFczbDRmGSuMAAVnhNXT77oHdKU4ip9DwBBTktCbNUxCLmG9imP",
  "key30": "4jz1TT1J1MoYcFfVYyk7wtRAXV4Mztc795kk6ZCoXUo8B21s2iddovT4wZj1948yhi5H1NaZt831NMJd38if1nAF",
  "key31": "4PZvEioZpBxQkCo5iBMqn7P2AXe3Bmf6hLPsbuer79fjBqz8LuH6pzwvchUKL9fj4uXyjNUtU31EfDZM7DXARCqv",
  "key32": "3uuWVdjMhcKzUCVs8FdZYH1Q9qcbhc4stBdLkYDTiykKknYBM5vPSmiydFB8ZbEhvpoRzPmH3945aigrJxSobYLa",
  "key33": "4skQJtq9PieeknfYrb4o18A71k85nrkB927XgyoNqRpbDiXv4dm6HbUSb1GNtzB72qDULpD8Y7w2JU8iCLyN6TEg",
  "key34": "yYX541aZ8jC2ScoB2cZWyFaN2LfyzA9pZMuDVGnxPcaS4NsmAhDpDHx3ckPz9VwEKWwyRg2fAwUMrq678xQ573D",
  "key35": "4GZDYMRBcgiptn1qvMfcZFshDGa8V9ECvjzTTcaA5Z3kvNo2SokzATkJU5HYxqYvCoWNbBjvEzUQugQR9HE8b2Uk"
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
