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
    "4sVRyQzjnXGXFWzEZNqkQXBrwCHJwMgiufPPrufvhv2qhp2J5nBdsitmgCfNqP93xTEfd6BzpkDTHdLCUcn8QHT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUji8iQ533BSDyBjPqcazX83MPspLS5igfZW5AhBqi7DB5cwyCswjiWBN6iVHe6E9vY3hFmNrcjnsWkSYW9c61Z",
  "key1": "43zyfHX23qCPvtXLbNm5QkACyCfeBUuvPHChWjiZWrzwEy3z63ZHYEraCdXPfDJVjs9aoMa5UDcUcWapYaGSK9ZQ",
  "key2": "6EfMHTpFhefNWzzeiTi74RctaV5mbqBCL7ZrmZ4xrndEQJPiqPgkRPJZa4ycbQtiYEUmpjy4F1iYB321tHJ4dQk",
  "key3": "53Ma1vkVQU6yYoUuo6PkdWq66WkQUAGhoPXL5ERuPuyMorFNJRspaaFbDiDfccSEUBqCqB2kTviU2Wfx4HzqVL23",
  "key4": "4rTk1XRLNaUajzwfgbP8nX4NtH1WsZDrYA8nkgxB413dd9KfKTtMVvwnCbUAWCnTNkdWaznPX5ZCbqhoHYhPmrQg",
  "key5": "3rNYKR9xh51VsbZHJ14Ub16QSY8eBnxmGV96bMNkpgwjPJRbRGBqPtkhYs5yTWvrZxTgfyZNheUgJYhrqiGtMuTM",
  "key6": "5yznnKtvrDgA6qK8kWCDXAXwcXdXg1ESTCRWJXSXHW7jTkf1pwvKDtZKk1oWQEpSERAiGArJ7BX9fPnXtgaC9hq3",
  "key7": "4rFUBeWF2MBumCnsutMjxdABnwXFsSEPyEwuQBQ2PjRBkcS8f7cnzLp8Lg5LXFufuKnqkxhmKvEj9nEHPPBPzFkD",
  "key8": "2hqQMLdG16NJ1X7JtPXho3TuSCDeVYfLmgwEVV4UbaWC45QGrEQzQ73fW1fS2Jfk9UoCfZisqaDAtv1ar7sUW2Y2",
  "key9": "2KwKyr69TjdTJejADehwCUAhJ1FRq68Qjt9GWjcNU7R1V4FDCak79ZM6sQRvqoh6qXNySDqBMPk1W36X17ukQsRm",
  "key10": "3A41ejow39cxyW9Q3N3gBnA9viy3DHir3P4PyCy9dJp7skMVGBHYyZZyF1raNTCoudxYmpuLxUTD9vcK3dHk7iZm",
  "key11": "3WMX1dek2pVjBKNjENJFMvjmjqgtw5btzuf2Rd5LPXtXeQnVynAcEK9umLf2xkWgcBcU7yP8K3WN4snFirppRBmy",
  "key12": "2HV8GQeuoPmEhNBuVwrEeMH7BTBh6oVfkh2fXCKhcFeuTRVPD8EvGc6r7TB6ht9eun1d4ifVqow8JErsR1NTYtsa",
  "key13": "jgqX4ZMEhNGRBhb2hwSD3An4tSUZxGSyQcnL6sV9RA1bNsPchLgYKdy9hhwABkbaWJHyn1xCgF8QBfVZ4NQQ23o",
  "key14": "2prHEoRTy2TMWRHP6aMg8dZ64vGotwZVB775vgQ92YmhHA2oF3eCzPHWPBH5riv8smxMTENKDjR4htuyrUqkmchJ",
  "key15": "4y8mQYNzvijzpttyUXXJAjGDUncP1XFxgMdy35vSprhiu9CPGnai4EC61W6MvL3pNDKEoGDLp2TSabDKXPdgJcFA",
  "key16": "Pkxu2USbwq1FAdVVHopP6zTPAHjqNVji2bKejrkW42pKjwxyMKNKZrRr3vHrr2drfeAy8oJiYccikqLajeQsoEi",
  "key17": "4HmtJDg52Vx2uB7Bu998Ts4EGCnGBsY1ZzyafQmuu7xufNg2U7gTMdVTfgocEJBd7h9MDhCSU9aQ7XmhMzYFeT38",
  "key18": "4DN6n6uCsQtfoDMa6jQNdHzk5Ts64NmgqjTuAtWBNGdtem6pkDQU8e4vr3y5Em3BuprANbKU4rsug9dBdzAPTds7",
  "key19": "3YxZsC5fyqDVk2EHjdg7vbHSCVMnnmv5ZZyEUFeRexdWjb3jtn25gsRddM2ah3sVqnHVg2yjLxcTAXd3ZPjd52SZ",
  "key20": "zn3fsSQmUy7XsmqGdnpZjFJLbVSGJTTVz2m3cceuNWKWSuLyjptwUEBucUWiyj3if4KdmN7yZE7CGqoY2zoNEeV",
  "key21": "4mzX6mmM1h6QPRLEcHtcL2mMfsB3mENjrA35evTTcb3SfxQSUj4PD1eGzMU72HsmiJeA6PSRH27Hdf2aS5JfCtoM",
  "key22": "bXyJmhJH3KyjExP3bSZCMJeo1NgEWz3Lg7QnmMh9GhDsPeC9U2TYdXcbPExD1TUbsadk36x1MUhsNFyabGM2Mbw",
  "key23": "8Ws4PQp6ejeDeuMGNkre7ckXwmtpK3TbbJ7NToz34r2N39T878V9qKkkYw3bxvXgHfVdybsRXmncMCMxRorexr9",
  "key24": "45KyMTvewJU3SvfXUn1ujj7AXYEhkYGoar5VThe8nvwhQeWyjTejKVnDR6b6nQ1fXiJAYjpx5FE51XuorU1sQ2zv",
  "key25": "pu7skocx2k9k9f2q9EE4yokyRdDo15zgnEFbK45jA3SS2oSrEt2Nw4hKNyZZWpB1CqJZA7fUorqHwcWYrZ4FbF3",
  "key26": "3KdqD5Asa5UXospW46tSJcMHwgocFPB5sKpfazM4cBuhHJkbA411Ht5hgRC6MSuM7EdTgVeH2VZapsuCem8wQbLq",
  "key27": "5UtM6fVCUDtYoHW6t9SksvwoWUzThEb6ZHi34FbdxpuCM8h1iwkNHo2jaPBWGDqQBaJVWj1LskviEcRNi17NrucB",
  "key28": "3XNzziRCDpsM3W9KFnUH6RYt31s7krkK4T6sViLbatzFwuacwYuNxecQu6ZBYWDaTJtiw37nZL8X5Y4rwojUwTkX"
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
