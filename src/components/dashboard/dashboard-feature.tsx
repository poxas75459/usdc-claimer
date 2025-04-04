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
    "n14QP7cmBc4sp4gZzhUUJXNAyAw422rG6GJNVtRZpY4sVXogT6mqF2bTpWX1qxLugB2F2ACppBTK4XpGSCs9AQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xMBAGaCvTm2eM7XNkUapCbrq5dnQowSwQefuUzsFQgRaUMU4RYDpyLP4J67FJyT4EkkrqmA5EWTujGCDZQCtC5",
  "key1": "4HoUWMJVKDA29dp8pABcscYCHtm64aMDdUTHggBBwHEWX9iAXVhgf6kjaxsSBvcN2JsBY1LhMDn5WaB1vuuZpwL5",
  "key2": "5rkrDy6jpFLDE7H39nPcJyTJ5V4Z3ckYnZDbmnZRzHy7fsetQLLuFQNim9EEUP5mLeawAijrhwhC4cGg8ThMgmbu",
  "key3": "BHEL9nXoLgqMftShJqfuYJymLxcopCUqJ7PYY1QR6rZtFigo8LMUtDbd2SYJ8myT3vGCQ5eBpZ2os3q4D7YaA9X",
  "key4": "2Mi68bRrhPcfnTMc6e8YL15iqxMjKqyJhAuZfU9X46NV8qQvYv2QGKMQjnLE35GgSisrhQwe5DN4nWe4T2UY1cFJ",
  "key5": "2FSxgKKPqu9c2y1R3tK48psa5oe4QJSB8Ph9JLmTgmq1UaHfktGUokytvktGNNC1mbMHNNYDkg85AdfotiU4CSsf",
  "key6": "32jXVo9hRehGnLLpWBb3TDz8snbzm5yEfRqEFCEw8WGmfEYa9XBn5SpSwFPXQkJqX2aN31b8gByXa6eqixw3Zd4b",
  "key7": "trwBvnC6zCrX2tceGKiqfDCt6DvAuXBULPG2BrREnuueMXpgYVkmNMTNPSeVrQgSANqdqpviZFBsxyQGuf2ARhi",
  "key8": "4QXBztn6cmAxkpTvGkotPrN8EFPC3NQgZPr67tmhG3ofVVeXYgprPDUqcYSbLhcRWu3euVXxtLoY96iNTTCFE9mo",
  "key9": "5beHyZZxkzehB5qboZkxG5UCTqU3vFaHxzXb4BhSKGuPK7w111dM5m9qy8VetjrVCbUy2onfxSS46regRg2en7n7",
  "key10": "4NJVzJF89sSEEHor7oCusgpFtPQTz59unLLEoykRqV1Y2Sbs7ziQiTmR11v2En4kXqLuMto3ZjYbCvgBDLhuYeHu",
  "key11": "2EDvYsEQ7sb2pptAVCf1PkWBUgDfCArMGQ9vifbdMS7pBz1ucRRKh5Q3bmg9hNCUFgrrV1dai3aLCxNekzwTormp",
  "key12": "3eECj96KcrmVXMGYRg77qyc2KbWnYhXb9BCFFfZ3Rv1AQ4jLPiWydGUZwRBvnxmd2sJFQpea6ePQFDMUPYRw96Gw",
  "key13": "VFUTz7Z7NTc6DjgzEi8qA7ThSnByijp4589XRRV3oQmntxskqCex3K4uhspQbsWtLQJx4o5eMq4padJk7gYzYhz",
  "key14": "cZKjcRryhJev3wNaGxwUjvj9YVytXnw3SjJmF5VqdJYpyxq6y4KYv2fLvDDqZuzpMES4Ha8wRuGZsWZmkkRmCfA",
  "key15": "2EJGRsPuHfjfHdzKYPYcD2ckR5LaMs8xWbfiRtyJmcnJdBDEw3aKVWRBuVwJz2BTj2GwfYrkoVg4Thxms7FKF2Dv",
  "key16": "AJpbJpeB2ozShPNYoCCRea1tohvdhskXbKKN3nYux5DuGEY1epwzd6VmLWSaCrLpvsYyc3dMt89SA1G6Q5PHT8j",
  "key17": "41u446WMdrTumueZduDEmgQxmQquLuNhYyJRNxii2uT4uvxBVTg8FVVHDyENiSek7ToFcm6yNWQUUkPtiEEypMwL",
  "key18": "4HjYQzLHG4xqMhDMvWPQAcwjsvNVCCCNEba9BtW5rotuGsLta6MKRgUZRdftyyZurZfspEPGS97KyBS5nNYpzgpN",
  "key19": "kaWjqqp9ojfr5EK5E4BVLPgVARW1skNZMspNQZ13Loo3FS3RRzTo4eLfq24s2EGbxgFUDMeNKZMBHK6sdLvMZ5y",
  "key20": "5fuVDMuaPky7FFqfTuRb7yBJN4XANFosnD12tPwKRisnKiZnhwcTULipCednvP3hFReErdey4YGFEboqgERiXAs3",
  "key21": "2cBPj85HgEJNcPKyCjzcmABZBWqERrJMXKjRnn12n9efMZ1zzSBv3R86gsR32wmVhkz8NThi9fTpRi41dbzS87Mv",
  "key22": "4dQSSKmF4Uv36ScspgXQofi8bhAgPqzu6ByYNmKWy8WLbQJhrW6KBier6k7MWqdWH1Bhom3vMToBsaaftd7L2rax",
  "key23": "4YmYEADVQNzZky2FXSYiJ7RwfhZjqGG5375Pf9ve1PdoLvDVxwNQzbAHs3BsUjpFCocDM6GRzh7f2MQCbLnhqiTK",
  "key24": "41UqKUozZeEw171DJEs6QJ3NrbCkUX1nLdsyEyNXDwLKV2KjvqPk5atkSCffzc2WWYrWjtPVTWz2SYiQqdMovY7J",
  "key25": "4n62ff6SjCjxeyD5ctpH33aupbEv3HeUoY6CZTVX3HjNo2Wp8YyMcUdZ3NHMsFKBnmRsKy7HXQwHwN84tKAwxyh1",
  "key26": "5Jzx4yQpw6VfpZnZyCqcxCG8mPp3vBpG5EinwH6GX16n5qP8yCN5KjE2mgFWamCMgvRRSXAXnkhaypnwfX3qcw98",
  "key27": "5hTTYbbH4U7SbMFg7gseSe2FZSSUyGJ9D3gdDT5pt28XB4A5PX7YLX8jxzL8h8wu7pqVWTfBeUZhYskw82J4aEgV",
  "key28": "5VgjH7XVWXPpt4LxsxQ1dtMKY6jL7JiRA8apbCDXo9FMTdGhYJWi3Xmqze5GFsxAF6VrXUgtDbdxqrwrMh8qBEm2",
  "key29": "5erhboXpJurt1r9Cdx7umWx6ctqoEJnmb1CZHdemUJKobhjdK5Qrpwap748pigX7pLrSvVUFC6jJZeBhNhadzJ6v",
  "key30": "2ULML9BtTCD3DsCXhkmwsv9mXp6SJQFeh5QZXshxir2sA21fWGbosoKPny5s2kK2TRLSfLBJa5uvBRY9NWqYesmZ",
  "key31": "4LXag4YWKnZejJeDLpzSphSEZd5ASTRSrqUkk11MjFPHsj6SWEbPpM3eEtr7mrGCuGXbX5R9PyjK3KtifebLkPPJ",
  "key32": "3pto8QkCw8n3UKhHsdSQSAabGCQNvz3W4cEqQYWeb7ucK1WEkvgskmWi129YWmrHfi7HTjXftp9JW9HwcN3rJ68m",
  "key33": "651TB3hvhj4ZQq9v2DGvLZVm3NWcVYbKiHZkt34rBi2esz8AVzHJvfvirF1u1qyWY1cUco5Q3mURZEnHN7j7aBe5",
  "key34": "5mGP1oQoKggYwyMWjQtETgsnP4Kfv15V76p2B9yNAoaUjBvLb6NyRAWMbWBACoSvKKpHHLv23qo66Di1o5sVuA2g",
  "key35": "343FnynxX5ZEdeEwqiJ7oaSSmpawnCqywTWbnQhsBvz496rxRhkqbfg25kXhxD3oDBXypL23JJo3k6dNsStoBEjr",
  "key36": "2NaYGjmKKnW7MbTw7RyAZk5KuBCW6upm1gU5xdRp9HVFwtxxazg65zK8j7oyJM6NHSHpyoKd6D3zmTtS1CmeXzEq",
  "key37": "49wUnR2ZSYMyfkhxdneh3xZd3A82sB8C6gLPSBVyexWqKQ1E8KnSVQWSV5FMv5vAhmnaWPDQdECfhLQFMSWVVdzT",
  "key38": "QbK8Qy11ZsqMrygJLtXQwsUWmywRykKnYMmhj4kA2HLhUyzzsN3dTa6ZwmyJxDTGgUnmj8nxEhviBKNS4hJ8Jon"
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
