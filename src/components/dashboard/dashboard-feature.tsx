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
    "345aX9gcx8AasZsqAmjsTHEyDs7xwkXG44K9DWwHGrEpFoPHKmiheTo2pVT6zVLpiPbVrANPkmFSxWU66jSV7y1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bLUhQQhHiJmmszUdpBBszw8tuk5dDLZm1sU6Z8goGjVccnHsRtMsYyCEpv8Q31FBEs7bjULM2yqboyRycJ6HHuR",
  "key1": "4gW4Z5jc52DwAFqy7NQvByrgcozmkjAYAzBbdq3Ey3ETvJmmSngAFuNBMmKn1TXdVd1YP3p2GLer7mngqkdxGbxq",
  "key2": "5bveFNrMcQsbC4Cj5B4kUFGSjQYnpomT2hN9qsztJ7UTfyj4aCpubSZBP4SYx3V1w4Q4WwJyJZXqPuPCJ8WkPNq1",
  "key3": "42bL6eBAnTxBdt6gn3UgcFnAM7Ko9jKJ24W9f3i6txa7Lkcu9WWWswbKcDczhK3FqzJJeTadvkiCVZBEh7o9sFpa",
  "key4": "444M8WLUHcCn6VBUK2AC7XsHCNyswLfhSWfqbFFK8DH915Ta1tWX8sWhbjjMUo9FTKA6j1Gbj8LFzUgJKziC9xBs",
  "key5": "4bq7etHArLZ4fhjXv7nrr615ARwxw5W4hsrViqBW73i8SQ7moS56WqUsftmsDeaCvTd4G8cMH2xcB5BpDw1NrrpA",
  "key6": "3QfGeCREvXdWf7fJRAx9X2mPbNVefpMuk87uRZodbAF43eEU5NipoKLHyA7XwSNYySB9aejSxn6hgX4fso7nFhbo",
  "key7": "4NUmJZMMjfExBEt7GtSFA1LkWCQSvwx2zCB1AVGcgaRC2ZbP8RNBsqyht4htFoNEsdebPUnjDXDMZDbmL53z54M3",
  "key8": "ikd1neJZ82DmeGtMeL2UBjXVzYbygMEoFFKbkMLZun1gymv1oUYzzAApquR1fLVc69nE3yacGNoyb3nT56cZ4hS",
  "key9": "4nSmzt8HQieGuBqKe4BNBzTRNH2Ru9aQ5bgXBXXTJu29E7ntdYY5e9JAMBmqm8uiZXK7QSV353XQLVcSj731dSsA",
  "key10": "UiDYsRLzERCnvKHEf4kUjnKzdpm2FtDzYEBGeazFtUpkCjKkMS1G37TiLckNU3ceM3EG2nA3PAFhU9amCG6QLqZ",
  "key11": "47VQGoKBSqT7AGrpMRxkyv8fk2mKTzzV5x15j3mB5ireEjJymf8A1GeoDRAu4CZAUJqeg8VKGWyHzGj3ZRijtGvb",
  "key12": "4LxRNfMUKRa2quSAPAcdQkhLpUsAPYPRho93ws4ooYrrvExvAKvZT73NrkG7G4xHhzJiKJyvz8hVGW1nUqECzvAY",
  "key13": "2ni8AHrEewMGZQZvtRaENXtWJfZbkgHZwizKpfLfY4qsh6MKivkKyHntmD9k2cFK8AduBYuCq8SeHLBMP5csy1vY",
  "key14": "3kK9gwRYvcbiumXQSfepjvs1zBnHw6S8xGR1R1zQqgknHb7c37wf9cdSx3fjw5xwv4LiS3SDaaUz6EXAyT9S1L4J",
  "key15": "3xEgBjTqSjZkt9CwbUPiknfyzAMEoM49KzP8WtR6cZYPaDwdAgP2qQSjptob5H7bWcJqWEUXHegGYrZSB4goC96X",
  "key16": "4AWUzjdAKMLuiY6L47bBrATPwBgerHpn9StQcdG7GKgkuJKAAEj3axgtnfAjh22zjVkJqPTghpBXvB5gN3wMbe5y",
  "key17": "4agipKRHdrTXdbegB33sNhvu17xr3BUE3DbWMGrvrZoFNfXsHmRJggCRsF2CvoZ1XJybMB96ER9B8emY2b7FPYfC",
  "key18": "4waF99h118qQdPbqdi5mp5y4cJp2LxV5u8ke3W3kqwocrVE5vJ9jUEto9KU3uHtrWsmVN31Jg8SgzxVfB8CLM7rt",
  "key19": "5jzaf7UxA9HXvtgFD1ah4M3brZKcu5SFiTJfYjm6zuZM9hLmeWW7L2JKvLWyxUjA8W2J22bEb6DDcDWUS3XCkDFo",
  "key20": "2hH6YF5vst13BdXHW8HWprE7NzxzQRsHaJWUnCmRQjt2c7BVMWWjvA2KKch8gWBwicEoFHHkuzQ3wCDNxXjqdQ93",
  "key21": "2NGgLqfo6RanTYY3Cp2Nx77KXPA9mkEKbof59m4XqXxuaDYPHpUr872Q6z5NJyZ3GB8D9eFARRgyidCTxYi5Bfvn",
  "key22": "5UpG6CZpznrD5jx6A4AJrR83m2iwzAtsbZ2gccT3NuGRkD3A7tS7cALA1VA22yDDvUqSnf69YiPCL6JSEZpjF8QP",
  "key23": "v767Xj81Z5F3Lo9UBjh2cUd99b8Uu7QMUxkbF6fZGb17g2WJk4kB3b3WuP4wGmKPcEcFnrhq2DxQWQpPmZvnBmL",
  "key24": "9aPHXqiqFKPDxX8sWk8YWujC18MmFEThjmh3A6m4sGpuypt72YcjBLzEtpbC13tQ4e6W2KGZJTfsCWcQoPuqesw",
  "key25": "4yagxut9mghip6bZPTRptN21u3yS9MvTRBF7tDi8pnH9yENParR4BJAMn5vWbLv7D8x9R8VBSJtu4RAkTWf8a7Cy",
  "key26": "5ftDyZT7ignC6aJJKhUiEh5VNAdx6v7vMV9d934pHa9CzamLF3B8uYaC5iDoMNoHJm3yonMhkMWUfNE4p5huVFSq",
  "key27": "2W9LA9h2cf7wN9RjZJZfiRrCaEwwmBy8ozCQJYGvv9QhT5184US1K7EbSLwoErT7xq6k2uXfiTxxRbqgNb9oPJgd",
  "key28": "67DjJQ9Vbk98hSbrHLTEcJsCnq1BjysMZuFbrYRUHwMvMYLzULoPay7bwc2vtBYFtNawaf8QRgpcCYqJvTMMwUid",
  "key29": "5grnJFAzCDhWnuSYfoDCbAX6eFGQVrnLA1GLm2u6Pu77ELmW4UrzjBGqqZhNeL4t2wZjhY8E6KWeb7SFj3vcQ3sC",
  "key30": "ie7RgRqwd6ewPuyvbq52rnUSvrtNHj8gAwmJPqWg3KM9eDhVL186uLrRDEaaJvZmm84KJrQrvcTqrkpWFNA9X2w",
  "key31": "46ETmeT8D5THqw9ZmMACs5nZFm8VEd35GcrLMG9pEGXZKPtA2H4HGGKiAowCvJhK8ugExj2oQ5CAo49mwHDuQ9q6",
  "key32": "5A7LxAjFmrgLhw3mFmjiWq43ejeH3sSDECLnQMGjNgwo9RhXmaBTHyDyE1htH3iBU7rKpiUiTUvi2cPsvwvQznx1",
  "key33": "4SrSWdYwWdG6qRyJhy7eULoGPf7TPoYdA8GYDN65BvW7Uwi5ieAKd5ogkFtwXy1ens3ZPzAFop2vk5en4jZHNwN5",
  "key34": "2vqJ6mVv2tUDFFT8RmAe71dKCmEDescgzxKvxRB47uXdzNfPXnCw3BXLZMPrifZRfsaumTXCuyC22tUechWQEvHm",
  "key35": "2FTMiosj7F7ae5nA3nvB3vVuPgh3qE3H3zLhVN8dpLMxstKCZpYDWaaqChuBGxCXQWiy1171yz8gBVRqqWFfHgUh",
  "key36": "2YWtc53LgYMiXyxghVef4wFxW7qkMX8fLHkP4pLD4BgYwQCHKhBGBbSeVZYx8fkdpPWMtkJRHPRJBRDZRfD81eFJ",
  "key37": "kJiSr77zPMUB25ZEbibHbd3uNdhRsV2Uc7bAcjfDbN53viy7kVd23u4h9oqWsRAT88swmasVVc17drSHotc46yW",
  "key38": "5KpkR25pz1LPqqFBxeoJsZLvaaywfwebuqhs61HTittVbKLR2sNi9S4Qpc1MRjLNRiiZm6DrUYWcB3eUWd5EGnB",
  "key39": "31HA9venezmp8o3gyGofGnovDofzPP4Lwi8n1p2wgwNY9uSD1y4cXNfcJkY8dsWXnTtTQ55aHUdw6uC93LzVznUZ",
  "key40": "57dgn3YAMP3ErvY4e4CcMqEeF4ttzBnZ4NQigxZm6zKUwhNz9f9n3XKCbTu6XZE87y8oSErMWBS9ktsSS2ewJPFx",
  "key41": "6AnTENTJ429Q7vpK9xraB6iZahJVnkVfBtSYLwqoYT9CYWN9fhdws7XXcTbUHFkL96Zac82VRR9r4uRYoQJ6tAZ",
  "key42": "4993TAfy1msxConmEcAco7ETNzF69gsckkMgUzSU3djGt5cbYRyWWs8R6Q5HRJWeF5NCsWo1kB7vXBUjT5Damhaw",
  "key43": "2au5EqeFsRxmeHCTeyQUHbhA8yVr4Rw8DvCgnW3AxCje5HAMH9YBVpyaHVQLFBK65HhZ2wP1dBVKQUxm115QnZCY",
  "key44": "5qGhbeUn7jwiH8PLFnxmVZi8YwLHnyKZzNJsMFtjoFqB8Pmvr2UtTHbBJkdhrPnjxE3bidsbvMthuHRhD2Dz2rSA",
  "key45": "3uhFDxaYqJcNz9A41U9xvCT8zVqFqGEWF2XVFgmbEXniLDS1z9dQDJwGJKTSQs6gJ2EFTS1i34VcNVGwmJrXcTVn"
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
