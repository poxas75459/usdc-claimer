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
    "37heSNHPg2Uwhf7FnhoZJr12JM2qKbSrdkHNZsoDmHjUtYwb6pGGiSeyYGPiGoNvEjK5ffs8oiNdaeGiyJ9KCRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cy8QfyHZjzWJm62TGa1a7bx2XsVRDkTR5dvK2dhLuWaBVBgQQipDHwGQkZRs7hkgZjPf4zQkzn5HiQYypuTa6dU",
  "key1": "36a4AEqBecUYMFdxYBnKcVmRawvtmXqdhRnMaeYqguQgtpc9x1cgr6EW5rEJjbiixX87cGUsrmYPy35ZaQYkKesS",
  "key2": "4osHp7mNKPRV8toKxi29qmYVBwa8g6HwQ5iocZdoybnhsT8Bad5Yc3Nbx1E5BhGFMYxErRdyz3zBmAcfWyXtPCiP",
  "key3": "5uzcWgGQUSkLYCykzyRqoCwXoY9VE3vtzbNjtAoa5bQYsWFywPY7ni2bB7rAHMmWa4LQRBtj6xAA9iHXdBP4fwBe",
  "key4": "37NNJbS9LppwBfsfPXqp4ga8rhHNQVxx6GNNyPuQzyEU3LAFaeVMZprW5YQYN3VJ8XRCxgku3UB9b4JojYG5AyMF",
  "key5": "5myEJptAaKvdngd1eZgyt8VUD3KbvXu7t1jzDLVLTGv5kDDxE6YN3jGE8hs4DVxAPS8QQux48Du16GPmSzxaaXxX",
  "key6": "Gq6vaKKJqHKUqiHMxqrsbimsfdeygGAUn3c4B8Gzi3gsLYBDkJLQBfoCfAssNsyh3mHGTAGV1wXBcJSjpGsmsor",
  "key7": "4nvLF9mH87YSjZn9cNv1TUFw1foe4MLADdQ1oe7B144jzsrYAZYfduoTLyqhmUNG1WyjbUPo5JLtMcNNz9jXJsgX",
  "key8": "2XFZ74R1gYZAeEhDdCkb1nDKKFa1bXZqdSLDzN9oCnwVar1ZwKQKXQ1gZhcqsitpBbnyhmWjf9x17i7arjkZfMmx",
  "key9": "wecpQE7WC2AuC9nCi46Qxdp3FYabvrQkErX1jxYLqyGtkcPB9x1HD6n14WgGz45C3SzkrFUXXX54yTzPRq3XXhC",
  "key10": "555zJYmXSaczNszoDPpHorYvkQX8nBJ4rYvRjCGKHfz3ygVPvUovgcTSYmBYv3JWGS7hawLuXrnFvgHEpPg7gL3u",
  "key11": "Gpj8Ld2Ytz925tS7B2Gv7xc2MHRrfzm9K9s8vbSvseGZLqpuk7YWpTVqPMUGCEM3vsv2Ycq1NHtm78CmFcDZigJ",
  "key12": "8SpNsQJT5XHx5iDVVPSFaMdT1LccoxQU85yhg4hAfcxRAzYZGYVySeh7RwdcEkEHwF96zRRkUGMS4ektckPNt5w",
  "key13": "4iqkwERUC2UaHyLoE7mftLvY39rCCpPVhHBskcHGp951vHnroHfkYpXfa3UesdChTXrsvLerNA1wzSdSr8F78bQp",
  "key14": "5qps5sce1rF5vVCyHmiefaiEJ2u8D8gfNZVB4jbbohMPwjqCYsfpCG41atqFx4XinF9mp2ACJ6LszvXHhhs9wKWv",
  "key15": "X5vJdCNzCFpJpkxXn5i2veGWc2iFVtGWSyGFsuvKGGMk54yRQbkSsNiSxBfVVVsHBy32zhRTxKMAU5aVEZH8FKt",
  "key16": "4EgT6GaUf8AomTwNLQ69ndmZV9DK6Xtn3kpTiLhfap38kVxY6HffpqBXodoro6FQtfNPEMGXSn7xrkiuLvN8WPtu",
  "key17": "XMqcWT1ouTT4Eak4t26bhqL4LpU6a9xy2QrvyS5ue5A6WJvRWtM688BbmoMKEfmtoiSjPW8h38opMZwTmjxkm2f",
  "key18": "4HPnebiwTyB6LnNhE86PHzyAPtdiXi2gNooYK76u9MNdByznoWxQGuM92GNbffBXwU6aEJHZMRFLZTEYfAKaPf63",
  "key19": "4Hw76h7hjTkCeosi7UTGNtks6E9AYd7UvugWnAeKo79syNyhVhiVja2yXjQ9sHfsefW1SoTnL1ej51jnH3b3jh8V",
  "key20": "2Yg5i8VftDt5uBaSsvq3j8z9TYHb1cnWDodvLoE4ScwJsZi5mXoJEz1uHbQyHEptw93xNCjdrzGa82SBvVNQMEJa",
  "key21": "34UqJhwY3R3BNba4wxuGbiUaMX1Jmek7tC7qPgnSw8kQxcxCbXSo7Pm3a2u1XB4LshHEFv8G4bTyfvpi7iJLB4nS",
  "key22": "3T4PXGqsLwqv22MGgvSWoLLWEYt9AuVpqszVZsj5RK98JJNrpSbDUowuDB1YgAugiR3vr85AzGwJVtdXrbDiTjo",
  "key23": "3iZCFzFcTJKe1ELhRus4Va84qBnKXbLrzukC9FA49C1Ts8aS77UAf1GckU7sBt16wG6HfMn1mmNAanTEP9h74Dr4",
  "key24": "2z4Kf8CnpJKhUvKvgPGV3DuXyHC2aXNZCnrfVFXKXgFLaEsn8GTTnGjx8diABcLWLfj5vbdJhjfYQw8EiFrmVL8b",
  "key25": "RNQZvaJhx6hdzLiFZm7m31ZCYZA4bvRQCjyqAydjomJihVerRnSCycHfXZsNeBuQ5cqeCC4kXhXY6mni8bWtnJ8",
  "key26": "3j2f1tcxSenF4ymBzfqDgdR7egsu6uSrd5MUmqK5DeMThuh6NnjzbQY6KSnpDPxTsxc2i41GMBAt6Wuypm6b6CYS",
  "key27": "5wFKfp6Eu2X3KWU9qEePVQcdGhJbvwkhdUu5bSCCJAo1CA4JxvHP4GsH5jwBS3J9bttB1U73SUQCncZYho3aG5Jw",
  "key28": "3Yh5E5WjAs36WTEmbbwNwHCpXCM66CkCbmV4K6BXWwQp5GLMxLnGWpRjsszoE4zSMYMA1QX4gXbsbn4dHLYmVraC",
  "key29": "4PsPLrKJHPs7B2CfXXh2Vhqt7ZynmBpCk1b8tQs5eWXvhqeBNdTRo6yXZUWZDWpMH4FTj92bE4b6V7fTTT7pcRKJ",
  "key30": "52nf5ZoEZ45BoM93khq4URhQR9SBasChX99b2w3fxQoPxy8j5Np86PXtK6xb3w4t1E49JnpRGGVCXvnBkD7wVF2i",
  "key31": "5dWcnCdrPZP6VLwkHhMgjcLckshwgseV9i8WPynery6UDS1t8xQwTYqgJad2QWpshSgQmcECi3BuTxXzzH2qF3Rh",
  "key32": "3jHAqYzCDh3tYGNjy7Zd3AAkfTMjotp1AfL38h2N25Dqpmf1qQQZ3X9UASumm4x2HKFGo7BTiwiBxbPSxtDkio3R",
  "key33": "JQSkBAnJYRPEwdPhaSm3vcof7Us4Zj15wKT9DSWHQWBHdoF2v6jRgYPPpdPGW2CHRCqWgHwNCAMP5L6r6NmqsTn",
  "key34": "5YDMa89F5tWwsbkCCbSxpjzDm84NzvXYe5b7XYaVznjtrtSDGM2CciNDAh8DebT4awtDkZsAWj5XN6Rdzp8eynbs",
  "key35": "jUQfLJ9GqjydMWZhGH1bHnqToU2GHkWXzmHPZqg4ncsPKKNdjxFM9Fh5n4tt4op3SrnxnXoH1kkpTMAugU3FeFV",
  "key36": "5b48e5uimEDXuyZyprqyiY48XutVSGrkQdh12gTw4dv8x8FpF9EynCaivHDiYSShNuYRhPT6S8RfA7RqD6vpLb8p",
  "key37": "5qge8LHfaztTndkWsuEAP1brTMHHZnBNRH89TcFqgPRrfMauscnbyp5ZaWBZ63BMWYcJoYnZget8SFWmQTjmpp56",
  "key38": "2nJYYNHZDLBj4FXujmNHMJUVJzZKCNDYW2PoF5iDLhwJqXNvKgjFX2tJwckGWuj9YLBzhFksAmaucfNupMQVAeUV",
  "key39": "3hEWsmgL8eZT6QHh7LknkRcmh6Wf5RDYZPyZBXBFfiP8yaqXxCdJxnzX7TEUXY8bjt9vbfAzzsRc1Mr24iknj5Hv",
  "key40": "g5gXCUtip9gwdY1NhdxBmXh4yv6QxVEZjaDdSNEbp51Ebf8NWPaZaWAWSwxqQrhJVnocpG3kmPPAUppcZ9yCUY1",
  "key41": "2xs4XqvzTDb1J7TrBCfdjJZoF42AHGBDhrA9WR6tuGJgh9DXCeRjdzrXYYrGD9cBfngdrg8Bp8mpQPvbwGdPE2gb"
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
