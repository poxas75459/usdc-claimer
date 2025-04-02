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
    "4FHJbRwEZ7ce8xxbi7jCt2ieSLccSBUoNihr4VSoiLe983LXh6C3LxYGDedujGEmPwhDYXVtkM3BVTt2zJb5QK96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vf1VuZ9F5LPiwtAm5AxDqb7D6zHjhcuSYFCComx4818G1Q7Rdf9CoP1rrZtn8iJrP2tB3xJMieChTTZuxzmaxTJ",
  "key1": "39uhNooYnHghkRpnSHJmab8MPkxByN2bPy7fX5kw3y79E5SSRaL4FCKzUU9MksTXw5arLZJmJ5UxccwYkSez4zCu",
  "key2": "2TvLZnAT7sGPG9xKVPCZDruYTC3ZZxG77FGDahaSiZDhDWfJhuhp8ir4SJSRG56oUjv3HazP4K73PWueV2iMiUWT",
  "key3": "4zF2LkVdw5YTfqGAi9B8XhaRGaJ7mDtPvBtKqh2yUCadNHkVrgxQvjfyuHsSymXzrU1qWtVmtYkB9JzuWsyncpxr",
  "key4": "5ByUVK8mJq4CybKHY7YAoY5qUMdD98xKubz7owJagLs7EaDFf8vedNgiaWRN4ubD9g4X8G1NvkEnGidvDWssq1b",
  "key5": "TjiZR9sdy56Lrdy587gfzGwJ3GYJov8AMBSMfB2qJNJzoFAHaaoFj8JX7gJbgvjaRbr8NoxzwdjexjkNMrsL5Gx",
  "key6": "3trfXuWMAq8q2qs579J8JfwrTwLypCJf9bAsWD2WyJA8knBqarG31QaU7SvUHzbdavd1PYZjxvrEgdiVjhUP4ruj",
  "key7": "3kvAoH9jp8DkhtXQbnWUPNRDwtsghoZoajh61U9GcGgnkeoKQPvwPjqodVkxUDcZAAMxB4CZRFcYnPA5f2ttPmjr",
  "key8": "27cEEX2nEfwgwPgu1GbyNcv96Y9UwLgSWc6f7kVC85zXYJobzrj4hx3HGF8oGsVh9yPdd1zLpnrBSaKcq6FHsv1g",
  "key9": "4TsJyXCLgDzsXARRBSmnciEBFjV2heJ9THiRC9E4DfQHG1Qg9uMv1TMRA7oCoHk5roVtQX2NGHHrjNYnpyFHpxHi",
  "key10": "2X7BZtpdBkjbmHrst4d1gUT62T8mRJmwveh8AeGmxtxiJ536DbU9XKKk5FTj3LbMuiB5VEvCy9ppgPWVSCbe6PJP",
  "key11": "9EtfUTNR1Ze1rwdLziaj7idk4j35gareLRi3NvWxJ4R7ttrRcL6i7XVMwSxZ15YAWTrxXdM5KVg2abv4CAykFqa",
  "key12": "4E5UhDPm5DyiuNC6hRQKJNxUhC7gMKeQSx68yjBcbSfvnHg8Rr24kzuU1phRdSc15KHLfaPQnogJMZ4J8x2bAtA",
  "key13": "42stmwXu2jJZC2gNbhEZkdgTfc7H6DbWJZCD51WAoXHAs8Y4LfUZQ6feu9i41PJBK9GzuHh1rfyTeAL8n1ZetDvo",
  "key14": "3ZirWZC6D6Qw6rYhCuW5iHkVZBDwaSnRv29oD92zykzb1TMHPKmyAM4XoL9fKcbzEPuWa6DS9Buk3psKRZFfpRLi",
  "key15": "3XhZdpd7bxoAtZu9ZrBHoK7T7eHzRNGX3zvft18rEnLMvp4ixnZvkqt8YztWdi5seyhKQcgJXJ4qXpr8PkfCERdH",
  "key16": "Pwvqk3ciuLZYTHhtABpaa4eLLm8LLJzBKUTNXSGBEsRK29oHZjvxxdVKUypVsMTAnjNBvbc4jddXNKhbPFo9RVN",
  "key17": "232Si67RRc9Yfi7sQBibpM6BPTnMXkt1hUiHeWGNu7behiXSj89xEQ7Fe4i35468j8CnTa5WkjnKx8mZSioKNAV7",
  "key18": "dMdD8CXsBdc2ecT51pvswusKJsMACfcX8qvqPddzoSHsiUr4VfdHfMaNfkwMoatAb9FjGsa3ic9Y5nq1wUtiizC",
  "key19": "5HGpLyJhujNLLJERLU119tAUN8hjsifDfPZYpCDstr9NWhZYZkDdT8HjjmUpSNQxPU3CJeF6aksfbKePRJBCVoUF",
  "key20": "dhHPJnsvvPzuEp2sRt1pGGchByDkH4shc3PUBHUJheG3Gvc5T1u1aGcpNYuLxr2zVDnrXfTu5p6dmStkZVm9HJa",
  "key21": "4Q1Fi8HMz4KFADWZjS4PTE3EPGt9rtV4DAsVpac3yCMg8c7fRqKnQ4qNVDnQqPKfCHJ8Vnbzb6kFZLgCYoJthz4i",
  "key22": "3LPexsKM9zzZHeEPhJKZANGg8c5vhN3GEPZwu7qz2tUvVn3daUavCmEhRkNdmfr48nHSshyi6Pk5jxmZWE57GKBF",
  "key23": "cGx3s9mivwTUHc9PGgU2fuCKzNTN69qmUDFcj6eEsoymRsehVKzVx7jfJJMV9Yp3mTciNmgGNgCAhE9mMJcjoxD",
  "key24": "3RjGKQYSweAd6gVHWZEVCvNcoUasjRuXMDzghn4MJAeow8xFHMNBYiXbW2VPc9rJXPrgmk83YcX5dMZ7LeCrC3ZM",
  "key25": "vHiGiCaDd381GoGFgAqKfU3EhJhePcTugp1HUF41HiajkimgzgdbvdK5ntznBZRDTBaU2yc3Z22YXE9KDNYJEY7",
  "key26": "5vrsizSG7B8x95kgPj3VonRQ6yvam9gtZmPXGpvZzw1KsYmfPp7JLtCDeooaBKdA7ejzdC9gebvNWQU2qiAxQtSv"
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
