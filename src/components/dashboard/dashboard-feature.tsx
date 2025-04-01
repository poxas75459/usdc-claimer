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
    "5KBWDTUxg7CG6rnaZkDSr6c2M2jQJyZiqD8tWZR1jUFhLDBtbt5rDPPyg3bTFZL5eMU2jT5ERtAB6MWnrpNpAV8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYpMss5bHaphQaduSUyHEfx6oxtuMmxPVrjgMeJd8pG8afSkwPzWNc9pTuRwAYbt8j9cUjDQ4YigbCrwQVh5wkw",
  "key1": "EGTVmNV1nCKTkJnPxaeQ7MQHd8RkYxR8MoLVVFTb5A3r96SFVgNb6zbZ2QfYW6RU3qn2qGSij9c1sKjphrnev7D",
  "key2": "nCs7gKNW1wbsUS1AFhmMYZpsWzyedAFs7LBM9tMdbCe4YjpfSD59fCpdVbPVFDnwaFNXD3kPYqWqV2uxaLEMtP2",
  "key3": "2ybsAYHyr5nWmTXaAkyedwTSEVnzg6NTXSCvoqAe3PmtqMYCC3qkJonKB8PkxRQn919hJHWDDEPFq1xFMmSn7gcG",
  "key4": "dhgPuRYU3yNBrJ2HZ2btYWEHSkT4AyrvZ9KQALG35wjw4zAynvitmw1T6YeSZRNrdXpBzfppx4xT8k6FC5DVtjr",
  "key5": "fs8mH4BA4b3eDXAtFksbZtqCk5ne147oYF7FHtY99jWEmdHFLhWrXHrVn8LvnBPPbdEWuzLwQXzmnpiLJqVPrG7",
  "key6": "4Xnm1fpYB6J7HzncBXR48tzcnVQpMXBLSKf5GcvpuzbCnV931ty8YVxR7pEJEa9wdTAmxo3fTmAgX3fpc3sRGKkc",
  "key7": "5PtmMYfh82RHftPxZ29adSUkCoZ9igMhGNSSWd7LG3CQ2Y1QBFTGSWZhreM1Wc8rBuTifK7XcLDq7hktUdXTiUfQ",
  "key8": "kDkDbNqci162gcYH76jby4Cgd3Ya5J6o8kempseBZsy7yixjNrcLZ5nYBJnCaH2TGVdMe6by5ecctmuevFMPNH2",
  "key9": "3FptNdc1BbR2QF9VZZBNtAdPktMoadkDhGbaShsw5CGRpZabeQbtRC5pEMSR99AA1BWHNjcMXngtcWQYwGpbaWBv",
  "key10": "4Jb2XMCnYrTEu5JZiEUCGvZFYmfcNNyaHbqfhqUpgzgHJhYfVvtPE6L5iMkHVNdq13zQ8eLWYBRg3hUnLSbKuJdG",
  "key11": "77PtFkBShGCnwxomw5MhbMTYPqHvk1XQ7zLLLPXKsi9bkwuZCDhjk9DxWQ5rcMZpyHqKpVRdDav541SNtG6tEmb",
  "key12": "TCj2eip5z8abDpBPnF37csBAd8cUkK5pToyAtDctqjpEi3qwekyA5mrE2qF58hbNwVt7YqRbN6NGQ1Z79k9UDov",
  "key13": "35P8KX4scqyHgZEb5YJp6KiqvEuntGEfsJFbnyWx9VzcBufaZkmbaXuiRZXcG1ChT9LTxFrz1ZCYgLSwVntgkDvY",
  "key14": "TFoacs7hu2UZ9ir6XcsphWt7Cbaj5dtXKC7iNhUatxoE9m9iWjiA2J9hdMZzTDMVRDBLU4wtGWSgBzAVwT2Awzk",
  "key15": "4zvUsw5C2g8mRx8xBBLuMcjjVAyQv1SWR6ZSbsZMM4RqNRQKJrGsy6ikYnqL5Z8XGwroDkeZEVqE6rYwX255LuFW",
  "key16": "4i18ym6SW5fondtcbayuPpT8fuuFEEBi6deYBf8hv6ZAsvGZN7Z6zSeXRhxLJHHt2aQHngrhEdWVQbJg6GfJ5J7z",
  "key17": "NQ4owg4oLD9azNTCHtHGrdLuc3fmVunvR5FgEgAGdRMXu864fYUfzyq9kz3qHcrmz12gGA3EsMpdVca1ZjN6gD4",
  "key18": "3phwVn8YHbrMkoWQQU3RoCmDQtr93KQvhRmonNRLRBCtKYH5CyacYninYeomdDkpceTEW2RJF7ivReUXVikVtXM5",
  "key19": "TRKzDDnQ5LMQAxQzUdTMFsDsSyiWMG6xvsuEybtQcAXtW6psxxjAQWJGjWTSReHea25u8kGLNqQkpisf7cbwkkM",
  "key20": "4ixXSMnUSuU4wNd8vxiS3gonsVQgXNjjEzUXSZ2cX7xmmDmwSpxAEjdXPFGKcXm4YSeEBRQoF3yHKD8Wu3QCiM7n",
  "key21": "mdkbS6SMZAVmpmCuST88bkMsuvyWR5BtXic26ne82rebLokSmz8B6T4oxbJyJZqKuQcL7WN7tjmUHmB7xsKW4Jc",
  "key22": "2V45QVWjLKtikRxFSBkRBnWMVX4NrHYwxnrdQkPqCHuVRT6fZ2X4xqKtHQtgVGop2jH1P4y1RciD5mpABZ6pUo2D",
  "key23": "2X5PtKpTutVRdp2Ww4LYbY9x6BoTCPPUTWKwmEtKXq7scVhWWi9fuVQSnPPWvZVbNNYmxr8hPJib4Nn23AAz3Ekw",
  "key24": "67pCwusLf5KmDdnZnwXFdhRU4iiuw2YSkgt8aG7DAneLRakDrH3fFZ7cJ8X4AoJup5MJp9uc5oko12MBexTNexPz",
  "key25": "59i3rcdpFvfEp2JrrL75kZ6y6FtTgTcLvyttC14ixx81Cae8zA4X7sWgS87oAQYQoSzYotGhFqKimVDhHmovYyxD",
  "key26": "BskH9t9vHqyXxutgMmPhzcJRaUAEZcUELf2unvrvd4daGYNsb9Z4WPS5XbpB1JNorhaJ8SWwRSxRzVn9MFur8zB",
  "key27": "2Dx7xX9HpLJ7LadeZrZyNniLDRtkSsG7pfjzJXUvb5oZMAojw6LYV3wFmnhRqXvatJDQNf9EWKhs1jVwaRrLAVLz",
  "key28": "4Ep8KD6NRGs8PyNGZwiEKbBzL3mjX6yPXuw4LDtus5o1Neft7kx1aroNBcR7TuDNhbZJKdnVsy8G5X8V3jQxgG8X",
  "key29": "4sip3Pn7hFTELCtbLmGfVbLmFqE7XeLsvbDKLczGyNKSG4QZFm15c2j3756oYaw3iWp7SXndgj3w6g4u6mwJ1AZ6",
  "key30": "jCpifmhQhBST1bLhFxJaSkHTmPEnFQM6XV9KBVygXABLWRqn8mjhtcJGgpDMvrzomnC2Mqud5fT94bizQb4fjd4",
  "key31": "42MdQGdPfuPQnYMNip7EJZim1gLQpqPM2YeEjfJp7jDMm5uUZE3Qu9MCpme9CDwSpG8oguN2oGEC4ZYMbDkeE6Dw",
  "key32": "58pN9LhmjYZhZz2qoM4J77UoWgV3w4QnMHb54WdGTRmo6UxFvNYcKjgEKRiujceuu55n4aNAy9dKEkEWXLf8WjAR",
  "key33": "5YjSaQxqAwHFYVFEraSCspyL1Lr41bUrBGJdf7NsR3tLovzRD22vsjtA5BFhWkav7PDWh1B9PV9Lp1DK8KeEbXeR",
  "key34": "5eHFWD5hD8BF1w3ScBgCKdLc1Q34R2fJDYJfbgVfz6G3NkrztssFUXMdknYwtjKyYgtG4gpfCjXQhuucA4NcGG9A"
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
