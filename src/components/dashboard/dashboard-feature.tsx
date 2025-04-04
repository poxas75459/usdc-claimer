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
    "jZCEykUn5fQpXVY8UmFKuKQSrSYCUioBbrq2rAUzGsec2sDS6XgJmhk2izoDP3rSFjKc5i3tMjNjqomtqRmeDBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqmQsdTLSH1xu15LKYAZbrwgE5fjJgMrryns1nYnyCDchBGMiAq72EaSgpExduBSLUQzYvtqqHsTD1pDu7Yv6gx",
  "key1": "3J4i2VN4cVwkC1ncxuzLUYs9929wXamzWJYQqFdtuT6Uy73C3CzashaBRveNeitMXS8fgJH7cbqX6rmx61YyygZ5",
  "key2": "n64WFvajHHZ5s41urdw1fZLAtAiY4ZRyaD9wono43PetdWHQvYzFa6d4FPunpCudNfpEvWuTgkbUHh7zJc8LV3w",
  "key3": "3NKBu6nMk9d9gDPyHUBkYDDX2t8SVLk4psiZnCJEej2uRFZq981kZJxzKy3nCCuihn9eX3S8JLkRRmWWt1zTb15Q",
  "key4": "5rzo9GbB92sVkwPYMPFTCWwrVWMXz9SM7nRMWGqj3z81V8LdFTYzoENbb3HZaRZuRNek9V7eepbxNchqY3ubhecR",
  "key5": "5oNzttK8czhtJgG2Kaxmk5Qo8hHapYjkijgFNQEMq4TomjB1Hc4Tfyyr8Hn2yYBm89NEzGhJGRbnxCiNDVtAhwGf",
  "key6": "2f6ZpqW4dMV7KWiw31wDAbnZ5XSucgYoY6hmwmL3h9T42hfwTz3t17gfcKy4DS8CjEcUENuzThFJZQRDh4qjSJJV",
  "key7": "44rSzcmgJgpKi4VmxJip86Q4WBhRT4AKM5MRDMJbUApqHSjAK48uKKVu1jbi4KHDuu5KaxFKwtcP3RwuG2mXPAVY",
  "key8": "4NrMxiTx1JRWv6izxpk6HNA4jfo6shjHXqVnEP4e8bYu1aRbnbNgXQ1xeCLX48vdrkiP9zsNdrzraRqyGtRVuSDc",
  "key9": "2phv4b83DFuoPpVDXNoiuAV4UAA5ZDJgPa3o1dbKyGumW9yd9dLcWWmuxEAffRiGPAh5B2mGsCtoxRztB4hvSYsP",
  "key10": "5bKQLWCmFCJwXrcVpA3FwaG1WogEMYkLZXraf8C3e7UKG3zVHDCEw7ojxqWgGznUeZSBiyKXhbrF4Qs5NEih8GzL",
  "key11": "4kbmj1zz5EhjK6GpbN9hw7AAF9M6NAWcXFBWij2A9GsNkH7Y8RCuhw7hT5PnarXVtAVDvBQBFvREvsKmY49vRV7g",
  "key12": "3T4fLPyTFG4qsPFnaGoES9TiXi61Pe4YcMcWPs4FYQJd9bKZx35v7r8yprSJhbtp7gwz2Qo1FmESvjxgo6bStL1W",
  "key13": "4yDpkjbA513ecoDRBx51pPvMxvDL41PdubWyWxiNu8KNitYZsi4yiaypQAFCUG37nVWcq2VMoPuynPrB6U6irBB1",
  "key14": "VQ71RXtGiGfLXjLcA6ZkADhJp8XQy4kyqM3dUDiXMNyGQnaUxnAV7WfYEbLvQdDZAzgows9GqFHwggRXRN7What",
  "key15": "2c1HfmDxubFzWjwr87dhptjDwYA1z2XZpCrmMQGggfhcRcQ1gyjqf8xHg2yAWHcLQ1Mtixz2HWyyba3yMCedfQu8",
  "key16": "98HJXbZCZkXYS6TJfW7QDRL4gTGkvzCCmfNtTVzgu61f7vXKEY9VpWbYtQFCHTP1SH2aESj9PdXf7GBzxtwKaxP",
  "key17": "3BjuZjud25Qtb8CsEF3FANZNTenzwZ1Sr1vRYAuCrcnYHVKMr7UvHjSxgJwiQ6rc3DsaVencCWyogxLLoNEKewqM",
  "key18": "3u3AXSgCBCMKDxhxth8DsCwGgCgrnVUmyzzt4n3J3jazAnQLM4HfoAMyZkGAiod75MJEmzmWJ9jJFY6pkSYTrGge",
  "key19": "4APKimStsU5XwpDp5cjrG14UGivQ8ms2Muzq9T6EGGsWs24THKYCWnQKMZdR7EcWtHt32kKbMNNC2TZyia6Gxr4r",
  "key20": "2yAmXg3hMs6iD9WEZ2KDCGs3EkTctYiBstYjw5eXZCLjBbpFhg6VSRUyrhTykQe3uCnfjiE239osv7sgEsQKocG2",
  "key21": "448KHLjS8hA6v8tSB4iemei5e73ErYwN2eS6WqMj1Vt6Q9UYeL7dTV1BQoML89zcdXZaKLm7LddHVhXLsAkj4hvz",
  "key22": "5eUn4BtS3SfZkdgdZDEbAZFzmGYRJcBnN39oiixewXQr7s3GpeirpDouy4xK5wVZJnyN1D8fWtxLDE8qoUUsXiC",
  "key23": "2JBTGajcFVSprmhzEY7TMGDeMg1dKcgaQfXeB5PaoJm55GEENobqQBQxsWxEtU7wkghe8dTTxQU3cvmDQPG94Mua",
  "key24": "3eawufbdihhvCUPb5ixeZqWwwB7iouZNCqmh9sxKS6AM2Uw4cZyBQzgqbxYYQxigki98YgR67LMpCqi1LUDibMvJ",
  "key25": "27j4VgqUuzQFEsQdYJvSvC7YubUvc8cokk8F5ixEQPkr5jSYz6TAcqaGXLSPHp99mDeCUgH3RpTY2h5r4GEjr3Tq",
  "key26": "RDRVDSNQo3QzTXfFyGEYLe8W4DjWrUqzrLDmtQpQzPWHJGzXiCqnS1ETd4QCb2rXVSXcBAaVvUkjzDUKqwqQGGd",
  "key27": "475kzbyDk7zMsvgVnSC6rRbBTdhaUxnw4pCgoWneae8gC85wZXpE6tnyChDZm1Wsht8qf9BFmmx9jiebq5zjAsR4",
  "key28": "4QQWbVAQf9oGtk8adLZwUfgbQmPsnBdRhvZAKFqdiyWMKmg1M36WFGtVzAGKt3F4D1ESLQogC2EyZVkuxSiRXjYp",
  "key29": "4LLVSurat24BfXBx4nBXM7AaWMrLUJdhkRFkxtMhhMPw5x5P1BwH52rDRDybGqseZRYAL2sDKXC1NVh2nYiZz3iv",
  "key30": "4KnVZBHiYspR1r3Q8sVsUV5489KGD6nFMxPv7ZifHFXxo9BiU3KhkvpWoaKTdBZDYeJ7Wk7X3yDyFetkvp4qUZNM"
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
