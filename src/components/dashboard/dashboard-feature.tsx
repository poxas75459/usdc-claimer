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
    "4GfhNsRjui4VbBZT4xxKdVf4ucGrtgLPmMKbSxxWMHvtk3omgfthDb6mhidv2Ak5z9ohmL7fNsc17vDRSg8iStSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1Xh6RoXzZwekQKi5AMHK7XeksBdfVMCWBcmJoNZubBi37sAubirXKB8fLKho6qNviMvfv3ysMA1BgDKUJvYqAN",
  "key1": "22LkBM57vmZfTcBCqDuSqZrJKo6zbPeacoes3WWkquZCXnUe8F8ZF3o98yfuU7nPoFcbbuPLXRJtEjKGCR6yfh4H",
  "key2": "4E1rjWrzxQ1qxEcp4U6afbHG8QpekYTw3qyAoD5kNMdWamDUStQ12VMjB6pHVa4sNjSv3tuXiyEZTGzdspTrLKq",
  "key3": "5ugQayDtvR52Yyz7tYEoxxba5VT63SYyAAiiEBsDHUNwbJTKLFdrPhoDDraMw9GYDYQSiHYaz83kzJGKiV2mqzPK",
  "key4": "4Piw4DyqL9C4wp2vqZQanzKF62NRZduUXeWyqftiLW3BgYoovTiZkBPnYXTP22zT7orrvgne8hARVbUMTSH1Gukx",
  "key5": "5zd1PUvZLxL5mozUegmQ4WS4kkiicG7693DwxTMjda9mCbHjqtsesiWR58wTw7af6mhZfqmq4n7TzgVjQNJDrSdK",
  "key6": "2QcHezPGXgj18dDB9AzdKFtUzsSP2g6HSarJZPWiReJTc8QaosfmRGjhur3XYorhLMaNBxw6vMgzatrVR49HP4pR",
  "key7": "2Vrjj2QXJU1LqRr84hnSj5Yjx2pegP7z3ZySB7aV8RmB3uYZcVF5hr9rBjjAdo2RweDbHddZvzi77QFH1nsU8tEM",
  "key8": "Z5vNRDsqpnnKBHX2WmuYFcxwckuEivcho8wu7JHeKkqTJ1KS68HcZxXGdKvN29TCzAserqyahxKzCfHBae7grhf",
  "key9": "2gb2ct9AfDtpgNnB3XSitrPBXDw7u8AfWNy8q3GxbcgeT13U2UM4xDwjCt3RWz9QKcCfnWZVGcWckPGVgtMJ6H4R",
  "key10": "3kE13JBh2v8YJrV4eXMKQgH7ZQfJNoauhdKH1kZMADWtqb75JYqfXZd5PXjU8MGQen1o3Yz3BYnZ3HC9fQCJyis3",
  "key11": "skiNGiJPYvbbwN3e5hCSmid36jpw4JiMnRvwmLUJBsziZ34Gmo5rG5znheMTfT64QgPQDPRyJFHrLuK3673oBpK",
  "key12": "4k2pLPRs7Yd4267p2vpPdaNV2oJZQpwjWTPySFg8oEbadJkapamUmNJ4bcRFBK9ooDBK8ncdb12gZ25fmUvcaci9",
  "key13": "5UDD4Q5RSMqVW8UpU2j9yQWhmni5RHfDi6U296Z6w7EVd8aXhMZzxvjFgFcstpo9wJvKbLS9UaZEutgaL2j4Uj72",
  "key14": "5C89crae6osFfxAzNb4ajYmbXEF7DBXydfSsqw2r9ghJZ7bEXLJFhtUoK4ZXJAfusmpkgTiHjWXb3CA7AJU5ptR4",
  "key15": "5cUrkttUQw9ykP3jJAxSg81dV3rP6RHcqp6amTmKHrn6sgUiDWoUnbLBL5mxEzERvi98LXJAfZJDQWwczckqfevB",
  "key16": "59eEyBhdy8wUm6vngx8QTxnkx95XaudQ7p1d2B6YdiTxYjxnvY3Jnoue1pHsAvYSKtMZ4Xc4gmLEgcCRzb1r2gok",
  "key17": "2rxuWTTm6L3fWyFJVPqzRfpp3kcKUY7EshfvRdG72vfLitNsUMYFccqcT24F2vLx7VGH27BC4APSV9cviHWzJn3K",
  "key18": "5WiPR7zkCp45H4Xotyc1bmcbbxcmui2PAzXSgLUhqEqu2NpRQScauY9ug5WM2UvoxbcCetXf6Jz2VAQWix5pih4e",
  "key19": "3q63vFD2xqsMd87E4V4aSnWxNLHyEphGLEMy3j6L7iEVMALW1DrkPnbzdaiEdQ3H7JJtn2bkss2b54Coorm64hpc",
  "key20": "QqQnwzH3wC81cSEcQg4wHJ2NyyhoBcagEF3czmAor7fA4wtjCG1bcSxsXJrJzvLMtAuNA2pabni1fw8nnqCSCDf",
  "key21": "3Kh4SHqsiXxJJqvMN7ei1wpaB3naVQ8PajMLj5C92nG9Bku2PEP7Ty3NzUur2qjxFUiQJK8LDtHcNEzCupfTwtUp",
  "key22": "4VMfm1rvTmxLZhf6tp1MtyMAykSaNiaFddBdzD2nwk9coSJwdJmdVW7Ghk3VxEfQPrADwqquf3dbDEmtG3ZMC2Ts",
  "key23": "gcwpALJM1f2iWWr4tn4qbQCUuX1UEZPq3guWUQZkqfZTudGtPBHefGcjv6LdETTssPEHU75q3Qzn453U3pSo3GW",
  "key24": "3WvaNWTxXhC51WihQmwRF3ePCrLv78phcD25eRSuR5TpLv9EakptrWMB4j1Kcy8uQ7mrD9uZDSrzP3XDzRvsuecY",
  "key25": "5iLJrU3vt8YfNxM8RNCGoKCGK4jWs6421kgoGtHSrpxmi3gYwemVtFqdRYhtTiYGkCrcDGNfguSfBWVgiuVqLYp3",
  "key26": "3scu3FaxXBmmyRLc7VQ1DHZne6Bcrzq688ig3Yf4xhsb32f1b6zhT7LmdrieSwWudGepdtzG1MmBmeEfxVG8SBp1",
  "key27": "2HTkV4go35uvu4J4awoS3oPkGNGQvw77an87S4C5mKg6FMTpMn9Rv1yFu2DMmrdnuCoReaJs8zMw6GTRvcSe9GRh",
  "key28": "5QtAaYZevThnzw8jPMyfsCWQcJzpWJgEumPNBC4KakHkuVTbado2f7Usr2nw8KdsyEpNS3UmbXYFwoTjUiEo7xyD",
  "key29": "NYHKb5SUBuV5x76LFWaPtdQMGGDSpF6TSxVBr21wJTn3rJeroAijD9AZ3YL7Y9fLPqJKeHGCiQALSCMHCyvMFQr",
  "key30": "2meCwxmxr7kUoALopfxxwJPpWRxWwwLFjeHpRj46g2c1V9T6bnsCU5SpM6bqtchzQ2YaHHBrsBvYvwX9G6RjWEnR",
  "key31": "4VrsSwJHr7wVmbsmKk2zgCWLRD2NouatTMc4n3wWhUQCKJzATe1aFqNjrq2VXWJW5xrMWunoAW2C3YwbCn5M6KZ",
  "key32": "4xvakQL4y9Uq8FTfBSEq4hxW4xMawqQVSRV4sYEYYMsbJuWpQFHiFeEzXhXAF29e1ksn3XRT8XWK9JENfPGKX4ij",
  "key33": "5LL38uCornhAF9GLmEbnWeq7vw5XdohXN21vRLqj11vi2HccLRgYz7TisABJwSioBEhi89jwSXTuFbkR7PEJRHNs",
  "key34": "2HhCyom3hJEFXrqEDxX7zYiSut9Q2Wx8du2iDsUpzGt1mHNUetw9vkyUc4kSZ5B6ymDfMmcE1D1Cwy6i79SPHgXB",
  "key35": "3N1BNBNx3LTrhNQsf8Smp59kxpkXYrF9Qs9mDaBeDxLLwByf3naQ14hMZ9CiQVbVkzv3EmVQJbVb1YZ2CLshKjHo",
  "key36": "395zT6qRjXJgqawt4A7dkn5FT3kqM3PbArQXYwth7eDrSRrZTaGtDyKAL2AvtPDkrEupBArxSFxhLukqTY36FCoh",
  "key37": "2gMJC6DBVvCG6dPhp7MLhoiFDqG5GyZWeJHzXe3nW1aCEki2EmDcdjApgaPVaeFwRf5zF5vFJ1aJh2uiSDb2GRCU",
  "key38": "ooxTDNao4sRLwGFw66JDK5VwPoWqj4TDdAoEDEm7kP2p6bNRBTxxg83dQoegpMYdV9KjdBT1Gob9uLPeJNev6uq",
  "key39": "511uGu27RvqYsshkuaVhri4CfV9d5BgSZkLPhpEzrm4c3VYgW22VKtCyfszRGjYN5yfPWm6yjfXQ68LbAnhgyCtz",
  "key40": "4MJWt2pfF6J6zfR1ne7KykahFtf9pHH24jLUFcEMtRQ9Zv8dqSi2iwLTCQUinYqmnAoihBoc9bPrGrRsdNUoEhEJ",
  "key41": "rKBGMQ3h7JnAB6vjmAi7hrDvwn6SkQBTLuhcrHvPuHAdRbEkiC2utxvaTMPyQzHUyxeiJ5LVm9Qe6YwK7MBXaur",
  "key42": "m6zKdPnYJeLfgL8khYpuhZojEngYSZqenR73qMaucz6EeD1mF8AD6f5tX6GqpZNWdn5bmn2M3vScuq3ndo32svR"
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
