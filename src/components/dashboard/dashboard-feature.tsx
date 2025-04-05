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
    "5jeKkCtXeSeJVVy4a7MMtTFGk16FW9osVyk2mki51Xp4f5n2Qkk5HUKMHS9TD6XKvfdUZLVQEAuchPgfneJ7yYS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReaJeUQYf2EvoH1wJk3okJ5SCyUn2GrafQLXxfR6C57tNhiqX3VFTWVC2Ct2QGNGwR5TghEgo5C1eWQXJJ1xR72",
  "key1": "3MWNiFZXYuySrrLcZmiXzyuQ7kRLXTAaqkdoEHzGY3MKa8PSYV1JDDAZhBXyd5vZ3FLrHCTiBamaM2yoo4aoAZzU",
  "key2": "2ePesTuEaaeZMrLobxVHaM1v61pZMQgGd5Y3Nby3wLXvvh4VNXFEtZBW8ppD2wH5QhKsE9mHFb9tfb6amGyC2Qax",
  "key3": "2zh7oEANSxHGhrTnj6Mo9F9Xj31Mxn11etBxxj9XWf69WL7zNCu3vc9qHUaaL3yn2GRfvwy9KUNzmLjWTLXUtcSY",
  "key4": "3YgLdR7bCH2HR6wP9o8qSYEZHsorp1Z5NJWNTXEr8eBgY72hb3bCn7MW6f8HjJGwTfE5ZgRHZNGaukRWDZgbPioQ",
  "key5": "33b6VxGqnQu6AnaFvryJYokan6NX9RtCD2GgH9umUSzwA3MWBx3T77EuLbofHBvhFBvZkPRvQ7W9r4TmTQqkYwFv",
  "key6": "3dQBw48XZ3o2VDu8uuL2KPScWpVGNnVTG3TuDkhDRYB5W6MPgSFMRyvUU1L1vqZ1JXJGifKVdphUQGByh79WupXX",
  "key7": "46m8H6p7sMxA1v841ZYGtZrv2BTMnRg8uKi4CQXcvVCyBMHDzggT5ghHJaeCAyFyyLv2vTyi85vtSQdu5SHdAjLR",
  "key8": "3PtGB42PRTHgs8kbNeMj1YjVXy1uZqr83ibYQuHDMJVMMKnf2iXfv5Ejpt7zpHfWiapniFL8aVBWK2D7kc8SU1rA",
  "key9": "2E9DvZRXgV71pEeW7GzGxaxCgo4gh6knStFazHEYEJgU8KiUBFRi2AXBLXZUwGh2PLR8AJi8Zbmr25XfcQPGGwep",
  "key10": "5qJhauponJmvHv4N2oav13V83rkvZtQLJQrxRqKX1R6fHSwUm3U3bzBySGKNGLXZQ1ydYoBdawHthUoPKk3NZsrg",
  "key11": "2uGsKKS74XCZwdeK3oSVEnZxfXEHRTUCwzhHM3k9HNjBzpk3Hg9UCdieM13Ry7aHPyyA3tYhw9w4LgCWpA24ZKGg",
  "key12": "2QcdJWgVmvZm5YUXwNBuqW59JYCxGxhV1YM1N6DL5Qb4Lb7wsKonC6PWpYxdQosheFWXvagmUYJZYoWxfX7qzSng",
  "key13": "3LApLXPKJNFf8QKQHnJh98kvGoDgd7wt42aby2ersQ13UcdfhemndSmQBYbawya2c6WUxjcurkRkZrkYVaM7FMxj",
  "key14": "5KGZkv7cGQgb5EKvPvym1JuTeqKieUSBCDdhAbVFUpG2TdhRKB8cGdsXtaZWTY5A9gXqV2qhW51QzzVWBNmbi1rf",
  "key15": "o9mHKAT5qm7NyQ63tPTp89FuvwQ6mSAsiUNyhog8qoEzu5FoQk3Bnta3dq7kKgvAgWb9AaVm2MtoHNsTTamRjNM",
  "key16": "afr43V4zSxnxr14LKDd3JnDpz5Pqo2iaNKT86MFdQFiNKafSAj5TnzA5fFhHJnHGrskPw5evvfCXGcaXSXQRYz4",
  "key17": "QywDTxMa65vqH9tBcdnrZ9zRvcxng7yhME6PaBH6puQqgxZysURDauMHpiE843nRMSNPpXY8UxJPK7LwTgz3B1L",
  "key18": "61SZ3WiFt2feQFa18nVsKZficY3u1Fo1fGaZcHCTvCJNFmyRowiaGspajc3bCLYXKhE5aLqLUsAC5nCdSy7CdPoj",
  "key19": "2jfe1PScgxWr7Ea5nzBnKuy2i2kRQEjCQL1iQrqUHju78vnVjRvNtZdwAqprXSQHH3tXZT26iASozdAAwLKs5xoM",
  "key20": "3bABAznCU9q3YQRiUWJN4F8YLV3QmWxSgCVAD6rhxrMHpemk3xFx8fBcfyvGLXR23SarGKMCixSbT3XNrd7uvfsK",
  "key21": "2MsxRmMXkkq8FwXCUd1runykfuKsoH3csupG3pUrUGizt18komQ7nJfnREdD9DcCmzv1YSxPg5uwZEHzmnX4uvhN",
  "key22": "5TaAGeLLitDUzEK5fGKJwGuyX8XnVbm9p6iZKbK2gStSuxr55UqykVnR9u4NTo3ws9nqgs9mv35BCBykSykoHU7C",
  "key23": "3GhJEVgURRLZxCJDfBULTBAu4JrvR7fksrzUpMCZTg1pkofz4B7sFpFcAeBA7DHoCimzSju1w21TjBDmjwiwaMLA",
  "key24": "5XkmqEuXoj3rC7q33XtTmLC4KEKzL3sXWuspAyxeTfsXdqSpb6Qq3jv9QTKgSf4mE6xyYWTWkojE1ZyTh5LBCFen"
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
