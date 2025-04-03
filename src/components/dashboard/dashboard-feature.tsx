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
    "5C7byTPEofxyrxo8pqirpZ1U7qnxtoY2YRaBARZWjAXXWzbvDuD9TiiECXXhCM816WkcHu2sqNeHQoFRuoYs33k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xh61ZTLSkLvJ4EiV9YifzNTrEznZYcw9kuFJTpt23ZRX92JYQ7xpuRks8wqYhAc2r3W9oPREH86SyW4UEZGQkUz",
  "key1": "5SFKVeqmw7vgWwhwMZSBmMRjpkS7ALWoukPRqgY5qAswrmAsPM6vaF3wtqSmkBCKhMrSKRn5uqyGXx4w5oiMxmoD",
  "key2": "4eNY1mZ5EF5gMXVngViLVXgktnrsWSNGwjT84tyq11q7DbZNe4pLsCqmQtdRLnFv68a3DNSFaQi1YFrB4wxiTVin",
  "key3": "23S2h6csfRRcFsXKSLrJYgZGkevGCh4zVyjnHHV49XrgkjAM1irKR8vS5DMUJNDFnmpXctNK7RDpnbe51XzZNWxq",
  "key4": "KbH6Eze8Ab4NeXF5VnQ4so2RsHMPApDMJug7ACPDctytdb23At3MdmwwoEJ3H2tiYZGii7wip1K6593XUxBJQ2n",
  "key5": "3KoYcWR8NC1ZztZsoiJS3yLz3MsHESHQvrZ4gMhXdudMKP8fARNUJQtfzcZd9QahSjTU6joFEn6FnW7q7wzFVzza",
  "key6": "3aqBV6iZe7CSN7jhWLprvZVmgMpFcn8dEhxHXa3pCJ1YxbJrx3GCgQHZs8Wedu7UFEAxVeftgvHtdFa6LPJf2Ew7",
  "key7": "29cX7m2ENnvyEgoKPCmkzNmDd1UQ3sxujr57ULV3iQHi2FLWoQReikoTSxKjQMfMfmDqgGHcCvxDBaiDNUQ8w6tF",
  "key8": "5QDXXs5AiQAyMKyA2CeSrSWVBK7xrhw585Fk2reUeGpCV7FRBL3T6DFZGTEvaGN2k34kHrRspqv5h9HEBtZKPBGY",
  "key9": "2PonbCMHj1kFRwYvdsoJiA9Usyk6fwyyNN8LQ2mE5xUhWNG8TyGoe9yPj1Nr6WryismDP2zEXEwF5guePar93JqJ",
  "key10": "4Y8k8GJY3TmwBcEgiWwoNEm4U4YSU2Wwi6gSnfsqcSWxPxZTQZYuy3TL6rzczkCGm8B1min8Awew7vP9ZmEAaRMt",
  "key11": "42qtXkZwWURx2H22qy9r2ystBXyvpJG5nsBnwVYBb4cPFnPSnPp2TXpePvVCiC72Eyry4xLTARjBGMHyDBPTmyNA",
  "key12": "45Ai2HzU68HqYJMKex7CD6aeCHnc4VHHbyxd3sUstyWWZJYqzs2f3tkAXWQJZWbMVD3J8v9tcgS7tomXKyskgoyn",
  "key13": "4MdGgnK6XbdgBu9DhvUWNGu7VFXbi6W55TMAMCxQCGghkpEZ6ZWu5WEj9sTJCoUQrHEoRA7KjsgqMiktoaJzC7Bf",
  "key14": "55mEy16F3mMYBjpRb2k2GCGUpbwqq9JiQx6o3EmDV8dpqFyaMWPhdPzSeUTELLNT6DDzB8EvdDJeKh9wHAw1PUmh",
  "key15": "4SdSSkhMyFPgRgdcz1DiFfQZDEEr51fccz16pLFXSeeTduZvtKMbVyVRUP2JYYVebDPJdCK4GsZ14JJDsFFctx7J",
  "key16": "2QDhHogg5mTTo4NKYSmbLsLaKEaY6CWfANqhwA2UJJb1oL7hxDfkgMYsrrcskLEcG1uCsaKeDsyVWB2Kc9PkNvnz",
  "key17": "6Pmhvqbic6Ps1u9q5EPpzMQRPwYL5XZyYAoB36sy8UEEyKiQqYyQBqz4T8zTxD8jTifhuvq1p6WUGJhXoa6fqfa",
  "key18": "57zGTqfXZAKj6tYhPo9qKF2siak8q4FxDcWF28ezha6LLHZvFHjCdJK1YXLstDQ55mFuG7PbhmFy3y1harJ5THLZ",
  "key19": "4U8sfN4sdPs4BSSKJRYTQMrtnzhCoxTEZyDne5rem9ExkQFinfC8FGwnbkssWKeT5QS1yQb3Bkc6g53CTGiBwdgt",
  "key20": "5GuS1uvdM76ts7dwaNXL1CVfYvqdNiVnFnAiTQNjwgFWHqehoHHsnSo9MYjmW8E1oyAxqSZhQuZ8WtmFZ5LkMcAy",
  "key21": "5r2qx9KnBFNtFvR2dB61VtdPmjarTvpTwuZD17RiS4hPAx42bPb8tbCxrwQ2mXhTVUzMsgnEpMet5XEvqN72n728",
  "key22": "5wgmdyeUAueyQiwRsriJZeRDNmqHHpa8uMEmfw7ui5eE2fEtX4MHtju5wbutQSN9TYGTLGnU1k9adr2y2Ra3cR6A",
  "key23": "2w66jF24CGFyBGT9AMp9j1hAkQE5U4oRZVoTcBNJJdWAQuEkT3PkbUxX15PCBk2W3ShwKtw6WbodqyuVBYYShoVW",
  "key24": "4sNkyJBHPc5buVE11W83g19a6VzphxL9FHfJCNBhgZMvcEBghLAbZ6CkgvevK6G6UvyYLZuEZ4FEUTSqQBj7rEN5",
  "key25": "2jn4dGqKFYpN4YTcY21smCJCJtxMWahTDtZT92T3HgLfk61ntwTq9NDbfNxHcvpiEN1brj3zWQNKZ5oMCHq5Y544",
  "key26": "3tY8E8M2cnQYG5ALtbm1cVD5iAHo9oyy9frpUPNwujs6g2j7w7JK8HEPtQYuQ1GK4YXm7totNJLyNwda53bQU5bF",
  "key27": "2j5xCt3fXd6pVb6zhMBbJsEP7Gc4BaCS2SeUvfoGh3XETAGrZUF3RvLeESJHE2XfoNqzChCaJRDe62eRaCGqvQSL",
  "key28": "3nzJ6QVqDTyCbGhP9YmvaX44zeRrRdhBwHQ38LnKRNAvsFsRQkJDpB3cy86K4dRy26gHiuhZD63iu25ecosc5J7c",
  "key29": "5JFZsAw4sLonsXRrsciyKT5FAC4EdHUjDfhUwR1gK4uAMNVWNRoQ6HxUwMt9itvXRMbnPpthbsRP5warnZfViwgu",
  "key30": "57JPgY7j1KddTVYZZBumzLHB2TPEdWBEX4Aa8fDSrKxVC3U78skzwKA8x9w3Cn8imfEmP9eyi7a192gcH8WYUdYC",
  "key31": "QkS42f6aynRVhqp6XJQMoThGtyiqh6C5kSe4GFdhgwQzwL6xw7Fcw5MurDyk2UBTuSje5ec2xpxXaQG7dpAez1R",
  "key32": "2RWvKbkJbZTRP54PGWtdYbfbmyPUmGzMsRjHz36zB3v4FkFdrJtSpc6joTiYfY1Av2bpTanAJzg2rmNnbQBmStnd",
  "key33": "zaqsmR71GgscsGpXwuZ8FdrR2jp25U1qTvbcaoDeyr5uu8TQZPYE4xGgxLkc5AFygAejdm37zo5NhWxewStohKE",
  "key34": "2JCxcZBHwHpRwnTPURGSaPAxB1UtQxWv4SW3NAoxea8nvowJ87huUgxd3AU6J5jyc3GhEyRrAB6bGghnV4G2c5pd",
  "key35": "pC39bDHiw3DMZULy2CGS3jNuLXmcvBVMCgsTkhMSompm8udHp6Ze9GEgC4i796fSptZGbtH4GGd4mEWo6dJSpcD",
  "key36": "x2hAmXC8kregiCpsJEoeTMYGcynEUNjM36Nuoj2Xy22MG3zTNDKnTxpX7bk2HS1dks7XRab1jgRffAC4uhgCg2E",
  "key37": "2g9w6gTjURdi2T92NkHtmtRz4Pme7Mgev3h971RVosxkyNYjzffZiB3VPgfW3MAHjCsPJSXaZJuG7C7p27mrxW7F",
  "key38": "LC2pU826nyCJoQAMxeTZVXJw1aUFd9NT736UHuSLz9xbneGD747eMg5XzZHKsrwWd9XUH17oMVUx7j7geW3pCL8",
  "key39": "2fjuMhmFiTyoVEfKK4rZbq5KsHoQ9DJb6GeGuna8DqjpRJfNUpvpSgNqsF43yiAX3X4wX9FBocHAQ79qTwGk2t5k",
  "key40": "4fGVK2tq1riMy7uKAkd6oydMxwPpHmwT34thGLoGAk3oDHsn1jR53rVsyRWKVm11L2VcuBA5fSubULSpfzfxatBZ"
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
