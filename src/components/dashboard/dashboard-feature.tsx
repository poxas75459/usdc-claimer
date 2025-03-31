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
    "5M3LyxtQY9NikQGAP4wLEY6SxD97fQrCNV6MCvrvK5srPb2WVyCQtKn65bdVBPjsoLapetJXcLx4U3PasjwQSuz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KamS2yzvE6c75CRfwTxd5L5fXaPcysPJWmsbzBN3W1cPH6L54FzLtNJrmuJx5WvBsESVh7CcZKgHZXmTujU3CQx",
  "key1": "3no4QGL3d8TUbp6mwEQAmDWkGe4WvGwv1pTWNUiJiwaCJjjRRxCEBEj4W5my9XLehHLboVjkEH8haAryjS8UaUgF",
  "key2": "54Vn3dHEHsYufYwKYk33c1Wco34kbNy6XMXs6dLL6HUAWPcVTbiZmRwwdtR89R2QA1QUozRD4toYjxgs8ThnohDq",
  "key3": "3pcw1LKDdqmT5ZuLah4ad9VvM1J7PvR7f5gGJKQcDka16hHygxUrrcEcx2kX6hbs3XWoZ9vMSrv4FVBkMSazKi4A",
  "key4": "34QsXA516hXz9w5JTjNSSnUPxvZD2XrqamtLbGT38TqpNf41KwGRTap1ATq87DRFSgXCfCLMnYmKrBEfH6NKEoxf",
  "key5": "4mvURRTLsGvi3EkAT3tptzsvBdJ6kwt2oJSk7ocJ2vjS92XzSWnuazQV5VQup9UZuPDUVNaMFJtDfewS4YBd6nm",
  "key6": "2ZbA6hi74a4TUMx3MKJDLayrnTMJDqcgeD3CYQundWfkaJ1mfXkyLfmQXna6rx9m6upcxui7J2mcTYiPJSp8LVaZ",
  "key7": "3mYp5bMSM21kCSzs8pL4MuoPA1wqTxgxU4pE5p9M1rmR3NNtZfxBg9i1PbiPp6Bk9UeiwpPktrnoy5sVFw6GdD1Z",
  "key8": "4m1y4hSNbnUKU91VGcvdcemmU9sj7CkkAHkoasMNQ4ve233rLk1TAQk849fyK9kBYV9ZYKXix3z84Qv6a7x6mf8Y",
  "key9": "3nQU6bs4eqW7kcQE59ZY159AUYq7kVbiPHcxtpezuzsVioroKeiLKmPLHei9kpmrEgVFWYseFsA6fRo6Q4uEaqcA",
  "key10": "2eZwdAYX5apZ9cz9UKxG54GvJwzSFRJwzowcCM7NpvBKDQ3WJvCbrU5NRkm2Eh2yiERS9mZv1WjSD7PZ5YnCHFRL",
  "key11": "3AbURet5miuQmaSKdMWjW33vWrqNtxSS5zyAqYW6idn5h4QFzpzjhr3kvhHtrhQ56toYuiKMteS73iSLrS23mR2A",
  "key12": "3vi4NWqCmUYDvUzy7vnM5zP1sM5jiZnzhW2sB75vm5m6RpVkaRGBe4mJsj4PJpGZ1x36qLJNeZt9v8aB5eUZs8sW",
  "key13": "ZxJeDWDnn337gnLhDMzAXeFVZzwjqmbjVwqoBJLPV6JU7U38eBjapJVHkuPGFrrevfeah6uyabJFu1mHCzWU8pQ",
  "key14": "3B7kRC5mZRCzc3gF5vWYfHSEsnoruHEM6vv4gausDvgR9UWnmXDWG7f1qGLCzXVWVdQxL61c7Sj9N6wU1JnimNYX",
  "key15": "5A4AhrP9UC61mdPm75dr4wBnujbXTQAJVXLiTC61kZRmtGfzXSRiQ7YPHrSFuvU3DvpCFTgQBq3Aqf6vkJbHar2d",
  "key16": "4KCggr7gHojkU7qqcPnKRbLM8jJ4MakeK841qpHL6VFY2BEsnt7dDuxQuetrwqed223UUPZSMyMxUopjbFPjPe1J",
  "key17": "2xY1ucHLMTKPp8SYnWjmJsKutFopphhyb7D2gEAr3TBMQqRe26T3Gs9XhvimYee8DJBUMPvXkywKekHYjZCHXnkG",
  "key18": "4un551TNKfBmrND4RuHBVQdVLNdauazKYBdXKeiiRBxbF8jpihjXXXjsNzqnwgnsk3ZQ45b3MsSLdYeTo2DpwH5T",
  "key19": "m4wawjSXy8RasZvnZgAH4UucrjWrbX1hxwpFrDfuWoLrmvKHFjs8JGoAHWTf4E4ZZhQChp4tcp9hJYubGghY1C3",
  "key20": "4hzGekmg4HQXuKA6jHKuaTmTvtJS5XgiCPRAtxxs8HGRdsQZUEM33rz2GKCSrkEiTz7S4CunK7ptaP1kYkQNTvrK",
  "key21": "4Fa4tko5mhiqYV9it5EtzG4jsVLVgB2te46XAFHoHeNnuBFdR1Lxo6SvLT8D7bNQCCvez33rsrk5d9QmRMdE8GoU",
  "key22": "2XDUrFMPj9nxouCJEb7zYS6h9wkUjuk7ouiGFNc8HUgdJSMUV7ZFWFNkWCfSGjuo83GFWb2vvrttynsEVm3jSQDc",
  "key23": "3LraKohfHJcj622toa3NBddJdtJhxmopdXPtVbuWQVifUJMgzdfeGLAGEqrzYeHbPDexApdgQQ32v56XNAuKuWL4",
  "key24": "CrqQR7zLaZMb3hECMAoXzEwZvteQMxd4dcfsb93c5p1RwRZYoo8ucAYcsNVFa7YdiFh2NagNySRKkn7GruqTnKV",
  "key25": "4pvQPgieE1MPoGBpDEq19TVCxy3mBvpHfGP3HZBrGmg7s4GYavSNATL5FZa6ouHqsGxU5KXYiBf82AzYkBumWSeh",
  "key26": "5s6t8gKSmBx4sFdWZ2GidadiucZpokoyBz2txr7kZYkon5u1dPQW4ovth3zCAYxtDFWYHfXvip1Hat3F3wcCDnpJ",
  "key27": "3YXbemfMii795h4ZwgxPrqQh3wC8ANPdraSas98Lb9TAfzUTNKAPXTadVcXdGGedsRDHWsvgAtCH9AgCpnaFKxVc",
  "key28": "4po8ihCXjfirM2juEAyQCVzFRCkgcwfzoi8UzT67kqZwYMLXZRqnzJnejnk1CxtbnEyUwaRiYVQxCj6TPAwWURVU",
  "key29": "46MqDUjdSfPoYoMHyQZXNbmc89A5AXMiqMSEXRYYm79pX4dk6B3MC8m6MeFbeiuEXPQX1vuMETep6XVL5PYvaBgg",
  "key30": "5HmBfUqGcfKSLdzHvpJLTMnv6fmQzpS6nkjkrQwMa8DCVzzVQPYC94in6eJFKCP58yNWy6vxdUbY4FGPD1HusMxx",
  "key31": "3C5XDQLH8EdeaGeMY5dHWigU533uYB4mqDsa14mVpPaAzBxzj2dkVBmTX1FSoH8TcEKnvdJbLKGGVSfwTucgqebf",
  "key32": "5GqLJtkQ4P8eFWSC9jSKBCUXrkoMY1jtLZxqXkD4NQNohoEiUak9bTyMfCSTkepeAzcB6L6vycigFCpjdtBK8v2K",
  "key33": "3M7txcdjkgzuAsfvtT7FteaPf4x3kUXhPMnjiVqn3T2o3tYyVuprWTtrQjhcMfr2AEM1J1u2rUX3JrRBKXPmDwpo",
  "key34": "3Fws7pFBMtoXXvACnh6YSP8WsQBA2GftCMiBMkujyk8dt7tTvUhE6N2hxVy8E8vV8USR2JAsTETTZ1QCPpqqveUq",
  "key35": "4GQCtZdQUqjJxdh8c8NWHmQm4ZR4GSLB9tZZ9uXVvaSA2bzsEsygH6spBcphKo9eGhpLU5PQRStd33UVkznRVGBV",
  "key36": "32noT5Q17GBa7Qwce1JXfEZnEbJt5RR6F1vo8qpPnV2YiWcAdJPJMcNAVhPmmdVgKdbSuzoEjb9pFG7t4vM13oLd",
  "key37": "4axN1465SURbGQRG55ps15Tqdn1dLY5dFHYxwaAtQ9vkFE9qhZFCLmTXXsJdyTGPK25LCXt6kpXtqv1RjxdkFFp2",
  "key38": "38wmp468HAEo1XWju3U3qVRiDH1Zdi3BkvFhgfCaFH6g5sPVw49dRMtEeLkMtRP5rNegmVR2nPWJjydFTsAGDHJ1",
  "key39": "rAHJUWzgGTdmaXvjDqaJeeJESvqFL6LbrP1vraU5nDjbyAJfJnFrULEmS15exgokPgxKkceT9b11paXcaU2sfFU",
  "key40": "2To3i8fPH2iHPxSEzVgW5FdB4qh8cq9UgLLLnNKvk2JP8FHxyBMyZBCK2dV3wFKL7RpPbZyALMFLAPV7dri5LVfH",
  "key41": "356GhCeKu3KRdBS7QjC8Axsei1wbcDQqXiD6Bgy6cBkK1LzxqHQoToN9HHGNoqUCLjTv9YLkV8JGvvrSjA4CZLjC",
  "key42": "4VAaW8j7kAqFHEQFDKDmZydqdmvejg4DJ5kXm1j33YoAEWZ7ZZ2dn9SiLt61Exigu8YL2mxp3PKqAa5ogWuDJPV"
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
