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
    "3oQGjewDejoNVoGHJSwFA6SVsxJmfT3BffKXWPEhcLWSR8Q6EdFLAVYbcqXBWs4eMLa82FvRJn43XGCYQy85c44m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEdFqLTnG3WLZYfKwScwGuwbLDemTvm5eivXCaoeKPC7hbHxksBPk1i2s3xefzmh4HVBDZGSKpC33SQRGo7P3da",
  "key1": "2AY7E1d5jYc9hvNh6avLaW83ZdMn5MojXhhbB4boFjwrhfHnY6gLh4Kw7s82gwKfKDapbopokBWVz3pNnCPDscWT",
  "key2": "kd1vaYM5tQW59RGu7qqiSzgrAUk3ZRDcqu1PiquvoatRk457jDNvEHDrW6bu7u91ER4iqj4LqcmGi76kqudU4Ye",
  "key3": "G9izyoxAjNtoENVR7Jj3XhHXwNCdeuo2iFLxYik3JWk1JkMg64wwfwfszEpKphbiYzajyU7r8BEo36WLRZfM9wo",
  "key4": "3ffukkPZZdppSpRwBNvc228oaeh17KyzW2DHGzgBa7sW2vo6ewtCq6keUuQommvwoJpb8Pk8fENELYzXDgXJku5D",
  "key5": "4fVhrrfggjxEJRVN8z7vr1sNNaa3QTrMfApo1cYQHDcLfpKWZRTD3VdxT8PnZvjtLqZWvfNy7mA6gB3nh1763w4M",
  "key6": "5NBa9PaEQWyBo35QMV1MjieR9uyq8GGvMCobC2fyrM8ZKrz5gcuc1bXbzn98Ev3emKe4nDMYR22aC1TDhp843ZMV",
  "key7": "3yYE64W73ZTQgVRK2PNVXgLJZMCVM2aeymgDn3fhhnNtKAu5MYW4ASQLj1R8pCW7kvWtSR9zSKRPoozoa8iWomZ7",
  "key8": "3tRiy6VxNWiNgeuubzgBNQrhuCw9Lgx51iZt22chHtJnwYiPRTrwYVWdXsskaFEHx7BqcPYp6B1h7xkzzmSKRXWq",
  "key9": "5Awzb56bQc1act1KCRrCW57P5fj995K7PJ9eY4MwB2RVwgzXb51km2vkctaZw2X8siujFV7QWALfQDh64eMMsDcb",
  "key10": "4kbXfdXxywyn6jSUY9QBhT15yoRbV1jHEd24Zhnqu1reKEb6BEJVfRvEfmeoxQZHrLxrXkL1nryThRBGZeaoTp72",
  "key11": "4m1t8eTAVQ9bsaa6ocqcAUfTbvmh89chtNPYXqyB4qZz56T4TatRR1AheLV1TArrtJA4HJeP8hDsUaReqWoku5gv",
  "key12": "4ZjUSHSz1aaUAEdb4xHrsJvHrk7AT2PTJZ3WfEkvg1mwEAaBuNVYJjziYnubGvynBqs5Rr4kVeCkymCXQfvMD3k7",
  "key13": "5f8AYj2Psj8YmhuoCbpWda6a2AsaceFAM6hA3wcKZPuSeK8svPCZyu7gs3cTxvtVnJxSRTicCRwnVj5xMYNWizEq",
  "key14": "5NEVPfDqnJV4Xz282ue4nJL6buwmy5aBc6DY6tuBeWcvjpusYmxrs7n4h5V8oZfYWAdyUhGCpQegWsr5yGnHiZgX",
  "key15": "5UY89JoCHyKKj51F2ak1dsLmwp8fS5DnerzpJHNBSKrHf2Q4nSFq3WweAuywZzotUFMyUPCyZkdLQiPWJoUNbMww",
  "key16": "LTa9U1Wz1Ae88qcHAWqkowa9TDbKNokXbdjhyGSJ3CQzJKnMei3T7Jmy9EJZNompELPKpEPQkDnkcU8TW1Q6Mjj",
  "key17": "5myd6d9R8mT3q6oyt9dxwidyWQ6XAeXZY3rZQJMpKUzo44xTgxvZ6rNoq5hD2PwbFJs76dHXiyBCdDfK3EdDDQNa",
  "key18": "4HXzRdHxp5zT2MofARMvfJ3W5t11u84kNix9nYG9Pp5B54FuXCwXdg36eRbAVEAhoxoAnTLjpXF4VrE8uMvTfs3M",
  "key19": "Zk7pBZQf1Tggzb6ML2pQHVWtUKbPV6f5HKpgQzam6EoDbrTTAFqe6S9PnkfzDqq7nFB2hqvwahntif5e19XCsUT",
  "key20": "5KXs5bP3MHFm3g4P3ZLogruRgiG7QZgvGjzMisuxFYvi2AKc4CZ1yjKLysiMz4ECMPicBer7eUnkhBaksc5UhWBb",
  "key21": "oS7T1wTXqmPbZc4ufwzmKKB5bWv9AGQHz2MjVPCbnxNZAX4Rck1UYPYZrewuJfJ9BcRcwrLk5MfLFrgqfT1ZXYP",
  "key22": "4TFHiPMD8CPp8B7ndCgpqtsdAy83NqGAezyjFQ9TeY4eJAPYnQLecRFRM66VNGL9tHit9b1Zvs2brhiM2mwKVqKD",
  "key23": "3UETKocbh65kxhKPyURe3XcV3jsV4vjZUWJ5epgqKBU81dbt3QXcaAw6tn49BsiET9rPLdEbNTyAeg3TuUXeXsPX",
  "key24": "86waF4gQ7zpwBnVGgNAPPbaAn4DKVVvrnHUAMfLK3fc5UGFw7XssPrn98bRBF5bkTaMvgzaTd5G6nHLWTHVqn3s",
  "key25": "2eLJCWWVfq9D8WnAVqrMuHM55aH4og1NtWsMkfbAWPAT5rqnzrzYiLCCFXtsgQ3MeUbtDN5e2D1kZBVEi4XWfPic",
  "key26": "5zLQASvqRDoFLvLMynjhCqCds3mKQVPSDEQRHNPescD1ZdTgxi9zTNqkJQziSiXDvjmPE77nYQ8DYrsYfTNqys5B",
  "key27": "4F2z4T3Pm2FcaiXS2YqkrvcYzfJu6qD9QDMvxw84EFuTiXq4HwdSgq9Mw8KjsHdMNjXbkeKBJ1aaZTsNxnH9JNCz",
  "key28": "2sopGwq2HM6JjpuYQNovGf6o7Su7sm3DvYKChXnCqouFQgdyKCr4dxs3ncuB1h2sDoqxHTjxam1SyWszjoje9ezu",
  "key29": "5WzGKdeso3CbpF6t3pJHawmJkVfpEk1Hsmi17SKqPX6ANUFUzsTFKH4A7v5xpPtQzga9JypwrumUyubWGnzhA7Qj"
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
