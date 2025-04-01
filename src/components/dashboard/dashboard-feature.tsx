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
    "5njxp3NaLAVk648WTo3b5PnhTVDFxSwQL4jDT6ioM8xBo3q9WpGszTNpZUxsLBbhMT8vXveGUoN4F5cWJ8kiPMZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9hPZAwYUSWQhRgbYfkMJV8YuHyr6h2g8L41chA1vXYERFw1iWutRN9pEQ4kYzFTQYZ95C668TUsZ4y7DrGKCKJ",
  "key1": "3uyS7tNUh9P7nXFPBLGvotApHe25QTXrg7twVqQR3awUysr4X885Ja34J9usbZqQHniFxGd4J47LtEj9gxPtZGud",
  "key2": "g8tAodjtvKza3Dt9QfAn5YJqPC3q38ePhCFHRy9ACVULYpyBmZSsHtVrSpPxHjJ9gxL7oKvEjAfArktRwumX4V9",
  "key3": "4xW4SD9x2HpXN6bbvtVTmr6oNzfhAyeFfyGUuAd1anFBGZtjWtw1cseMMbZhsoYX5MPZiL4yntvAWsYdkMa7hFKS",
  "key4": "qxLKKMY1ZGoP7B4KxN11cZjnWoDhABHWn8Xfrnie2pfwTx2FSPNQtmMJC9eFGihSQGK6c9TFQKSF2XYFbant3bL",
  "key5": "4aMUKK4nzVQB5nTyj3VE4YUNisSzeKE4s1M4aUDQ7aYjcXfXhMSTR3edTRUyCdjMNmw9A8gEtrQ3JdQzwucQzcgC",
  "key6": "5KvJKyknP5cDN1sxE4VJYX9JNfowg9BYFey4gCZhsjvNaadZCDxRWnUALvR5KPh1q47STZDzpex8CRqBEfdn2BcL",
  "key7": "2PH74KiBr1mFEJNWxhivTzHpmUA19F7BeEBd5TEdZ3xm94o2QUsJe4Ktre3Q7kCWv36Bve8ZAtLXEEb8stA7mP2Y",
  "key8": "2gwAr6yF5SbjWei6SjPGSma9y7FyxVVb19gRhoFu8D4RCnCWsVnedJKC3QPfrG9ZPGc5MToDgXdYb6jH9RjPdrkP",
  "key9": "4agXB2YSp3PDoD2y8yVDsateYCGyCpMAbPmxe5KiPfPaxzbzz2TGJErc6nFGc2WphwYFzS8q2KbnwGt6wyo5iZhP",
  "key10": "57KedVRDN3Mat6Hpy6Kt7XeXoVoZgnHQu5XC3r8THFexWFddZT3ZUGL5edZNgioDeDmqcFq5ZjbdVYrQqrCztNRs",
  "key11": "3fRouwuLqi15MhazTxXsWspQ1pERWWbXJrfsQUu8e8hiQihJjKzHz3SYLWBMSHkHhC8cEaYvnx5TaCDkU2Lx9gM",
  "key12": "4ucLBahpA99EYe66eofHuAsuCY8kUydsEwEafs9Mp396zsvKX8kRzo7PVJjjV7i52yanFyD8r2idddJpaLhKMcmA",
  "key13": "3X4kSoMHPk35gV5eJZqNdhTXyyUN1AsFf83n9cPZVaEvi9TWogFi3d6p3982WL2NcaxtyTkSKPY7H6di9xS9FZko",
  "key14": "37iFxw4ZmfLCuFhe1PYBkBDdFCsgVSGCgx5nKCcV1TTqLVZgDDBC92swmC5nWAAzXEf4AJNxKvYq7dSC3REwdBLo",
  "key15": "4Q1vkxBNKqip4RLVZBN51c5BwCpP9pru1qUB9nWU9c3YpeXua1STUyrPGhUYyRc8UecqSPsciCLrttoNQpUYpvpQ",
  "key16": "4cYtkVc8Vx3qfAxfPpeVF6arYhUmoqAPUL18nGczhFxAB7H2qyKB5t1phDBZCjDWAc6iRE3tDtt8CP5LRZjSC7hk",
  "key17": "5pDD31no1k29ExnR9E11dHTvwbcZbjErUt6aFGyjLFAUj6YxJQVTRCHdjL1VQmHHAu8EWrFqfRVicBYMuUNh3srh",
  "key18": "4MLQ77RbPd2sfJjkNaKegMhcjVKFmQ6yNEyTb1yMUoN2PfYQG3UM68u5DA64qehgKh2ddsbfcVY8ZizXffYjF6Rd",
  "key19": "4bN92U95JYWLQocAuajyXHcbmZz8BzPAVRn63tdGraUNcpbRNfNxSMbX1V6RnCGDpeuPeq14zPbauZuqfWEwcS2s",
  "key20": "wPKXTpRxrLiRVu61SSMRrUNdD6RTLuR3fKEvHiWGbeGPbfVBPKTFyuspiyREwYWLkg4Xhb4pjfBSiWY7rBR5CQJ",
  "key21": "5ZvG26sZhTHZ7PXxfkBqx7W1Nfhi9JoMJVBTt1PginJxC2ZM7wV3XXDFkC4MiD1sYgYBgj37kb41DkGVfGWvf4g7",
  "key22": "3BFPWXauQ9B5HGgLfhv9smDLCbG6ub7fXo1CKKyh1oq6JqnnbsWaUHV588Crxxr7Yr2YxgzFtXLodUCnZiBsTMY7",
  "key23": "4QRXjJwc1bZEJB5V8pKrnQE8xfb8Jxt4ug9cdDhM8Xp9xAiMh6Df35GwtpLrTUH148pmsmM8LNnbqzwp45xFH667",
  "key24": "4ssoXUgobcVEvVcVnXSfS3dMFvSV2weXi5JaUrwHB1JGWxEdaXmqdc6JNjCZc5nK3XEqSv8TSagZbdFnunMbzrXd",
  "key25": "2z9wXKCbyLwQduoryquXUxFiKEh95zRu7FdxpLtsCrTqrPfc1bwYAuHzQFSjzWR1v5LYRNu9K1SuJikz2d5BVJ4X",
  "key26": "VdCT84pmX3RzNchGd7HXtumhZNEbMCk8xaaGJLQWSfQFbw6BnzodjnEdbkKDyhqBiUB9obM6ZZfsWhBXnjvG8dN",
  "key27": "ZV4WcatRocZ8X6dZ7dN5ADMgbrms2TrHPqx6uq1Lc456KZvaRaAc7mLggW9LtaL6aZpQnLPDkStAxsJg7gaBVpJ",
  "key28": "3Dh6eJotecqREcJFjU4nX49JLNVPqpgM1nUWKyytLE7x1eN8vhmcKUd84xPE9doY11yKt4ap7AkLLXyAu9BWxwks",
  "key29": "4d1WaAi5yC8jAQQ4JqZt71aw8bMraAsfMj22nV95U6Bd1Ay72if2A28yY4gGZBbM5WuGKv56Jmhvaumo3ivdthPa",
  "key30": "4p8voT2cNW9bj9WmsazxUTE3v7TzEU1teqA5XQvVRfwGcNe11R1Gw8oFixwuJue1YmPaByeizvLeij2RXoGGzsX2",
  "key31": "66T1gEsUXJk7bFa1ktnY8LtLW1vz7Xezek41vGM4tGvRsUUc58M4Ez9RLeW4ySdYKBHftcPvz9Bj1d5kLF9AVUdq",
  "key32": "3ctv2NSqxVbyuRehWg7RbGtFhwFfi4pXp2bPt8iapHKhCYvqE4skY7mPrbDEGnRr34AK2Fw3D3YK17oaB2t4ZAyo",
  "key33": "2mTi2wKLVaSFqDAJqyZm14tHAYjfBW5mQBRj7BgLXrpJo12VpnfXTcYkEH5DPgWfz5wYE26PHS8v8gSYDZYDSCCZ",
  "key34": "2pZbNymRAYHMsjv71JZxtmeb2iThYmWqRgdU8tKJm8mUE4QW63qs3aLGSeWhbniJMHpjQpAx5vcKAVht9WeTCHTY",
  "key35": "2p7SAwNcBHjvrk6vZHygbsNfndG6Ry2vucSk48QfxdayJ9Qt3F4rSWPvWdJQbftpRWVFgY2DN1pdfaYeKhcGi1GF",
  "key36": "3WxDhZyAoAtvEQCRZEHtHYENKowgHTPyRA9TmNn32oEU3KY6JY9YSn3aw1wCT2XL1tZcrB6n5Ag3B3Fo9snVPCE6",
  "key37": "5pgLXGAEgbrRiQuWkcVyueeysvkkgFfKnrGVMui6midSuvurx9sTku7fYCxkkS179nszvTwNCmUirJmU7LB3iPf8",
  "key38": "4HTi3wPrPff2bCZUgL2B7apL6fksPNNBrkvvJWugwTKbcVZJbewgv5WYuYmQEQqUuDeqPoMvsydnjw3CQjvutgKP",
  "key39": "2wiinxgKLMYXYLbH8UJWuy9HQwjEZb1v8Hq4YDKeQR111tpVTSthEovanaTYDWhwNcsK5mHJT1RK6o22RhTnNWhv"
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
