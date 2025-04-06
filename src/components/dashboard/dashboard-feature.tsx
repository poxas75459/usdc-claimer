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
    "2NEiK3kqoCNgAYYaE8vFXywz8ucMUQfosupfyBVHHPpxCQ8enXs1Jh5ru1qBWgaaZraQrm5K1g7FLms5BrVH1ch3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUqy1dPqqLuLUnPkQRuvpu1rf7ze9VxenThB8JHvEsJAovsCTEs8edeP72hqjrPoMCucfV5hDceKwi2Yxv15DpS",
  "key1": "2JxT5jAe16DhW6SabJ9cxCBkUL9TUyBEq7kQbn1Bm12c6Xz2JbWPF45zZKvV7CMx2VnN3a1VyTBePJcKwqxX6zHn",
  "key2": "4ChmkBW5EiVGtTomsxQqbqfsSZzHY1JbsdKk2v2Giqk1xgArvWj7tL1ZBx6diHjMaatLYRxdq4dUoD1eikfU3pBq",
  "key3": "5TSg9uXfaFHdSprNDH77Cwi1KqPuHfC8ohu5Sg9KYMxPVVMv5J4CLteagnUunjcsvNFK6NPEA6A5ZEPcKYLoA3bJ",
  "key4": "QWJc8uLZfQn2TUDZthSBTWdHoqrPfVY8MTpYhEhTgBp25RkoqcKGZ7nrvbmXkGn4Ca6kvTi6R5WkAkiPf1ztU6d",
  "key5": "HzMXQLRFNPg9A6pjQpGKvszYgEWFq4waM484qTMi1VQxhv1B1LJQPUd7yuzeX6r8uGtz3PaHEKgtBzcCo1THZTr",
  "key6": "noUFgF2tmzcuqpCC31zoskMymr5xrynUNFHZykLWMUzq9Q42Nc9UBABMmkm59MdTbuwo44FYy9TMeP9ytTnT4qM",
  "key7": "KeDFXazKP2Mwt9TJwzKB4uknJTHgzXMkfEW1FEv6EBBWFDQhxkqUy8Hgz4QLWT4J4JbQCvbGjGFsBYKrHd3YER2",
  "key8": "216vfUy6LFM2kwKGe98Vb8i8WdibBcChAnRg1564YdUyQMgzoyoznoSLtYArc89uGkgn1K6HknzNrSsDEP4Uq21C",
  "key9": "3uXeEGXsVnhjmVbjYGGBTKhwBGFbDfSFBLbfNu69GATfuEjheokY3f4Vo8NPP29sMTw6w1JGCCTqHajZpBXQKRCB",
  "key10": "4xXJ8uXW9aW9MagEmnZG526SmQE4V2woxYbvHrjAnrrWtvBQV5ZA9zKfqedAUHVePkg6ZhDPvdSrEva3xwhXtLYg",
  "key11": "2hpbchZ3Utr9kPG7nmdwHHKngkBDBWFqa7R7YEJNedoP4xtPt1A2jnEG3jqHAcVrg6rvgtVr3oebFyGWJbNGMGcA",
  "key12": "2ByqiwSDQNEG1veqAErUbcEHrEoL6xgoaWYgEoiHzdyFbzM2uKJgxmZF5WZgn5DnuHvX1EzsMLcuYNPZM77Xf61Z",
  "key13": "3c1VC2MWS5TrmmMNFoFQXdTD8wt1ZP378S418b272ikVU4K5uo4R2m416spHatXCfF499H4AFtDpHsfUoSr115Z6",
  "key14": "4wGcYSjyCnRWAGZ2WAZTdeDhCjY82xNYWa9geoCSFTjkdM182KmV9wrX775DuJUFurBkDrb8mMu5u3FJtN7nvCdC",
  "key15": "4uHyikCfKZx7HwLJHbzk16GUQ3pp8Jj49EmTd4gfzFoYvbeCsrAmXe8rp6wqwZRTN5HeYm1BmDPVk6hpAwr3Tcp7",
  "key16": "3Chriw7Qqb1xUyNKDQrLxn4vMi8F1uYWEEaLePPxoyLRFgXB71UPcx3WymxW4MGA9LpL5gfDvtZU6JUGXYJxWfPq",
  "key17": "3iyjBFXwkKeLtgtM8HoHhDF1Hz3574pCsZqbDVxtgBskcj4WzppqofoszrH42GewBXUyK4eX3HbbigASSUTmJ4aW",
  "key18": "bHEsx9S9hhrQJnMVtcHCioxGcHJzjhxWWPSt18A7jpyX3gmmNM7SJBVCZc2ntjL5zcvjHyM7fqGn1engygQf7Md",
  "key19": "2nY1dcsQpYYsMx6GAYUSjVHcbVHLBmw3Lmqoq1MT2XuZbuSnyTqLjXCrbYKE5PSWxdDn8cqu61S27TDPem8yyDhD",
  "key20": "3CYuwZEEGatSFGYmDKW8M1Xn5PBGhoEmT93q8WzbQQJu8TJktMnWQK1ydspFtw6mTABx5gcDGXcyirTnakVFQtva",
  "key21": "3mLwJJCu4pgaEESRTZV9RgUQFCCBGgYJ9hKenvbxeubzvfzSWx8y2qapBr3PXmnigUQCZhMnKj7MHrtm8FYfDFEa",
  "key22": "2GeyM2pji5pE2HJgUXCBtWAnJBV6QLsK8mVyB93SZasZRQqAyVSQ7hnd5PNucoTr6oQdTAykRodMSQf1i7Q77dFP",
  "key23": "ri1fZhZUxeQy3hUSavG3K1RZTSvHSBrQTAqDjVTmdhLZnrvN2c4A7wBpaBg373vtqnrYXYnXYtnHmAxxB5vFJ1w",
  "key24": "26v8PNUyLeRV2rjafCyBmmVniJXnwxdrJDXkJXauSvok28o2FzDbhZdFmWDaz9e2Yy7EncTjJeQn6qGpmfSKaEmD",
  "key25": "Mr32V9Th5shmCEGB9bcRn2FwbEuA7oDubF12fgGLpsotG1R7spbHQctLMyDSW8Q4ni4P5FJJZPZD9yDjhf6irKa",
  "key26": "2y8ivL4Wrq7wWYMBKcHkeF5aBrdpYEt16muHLBkUdJfc9ongoS96A6WvVbrDmeVxFjwoiM6KXCjidfQe7Lrb233Q",
  "key27": "5HdCEzGDbgpjfk9Tdu1uiXXvQ3gdSRTisvC8UNTf531q4sMnu2pgaGLwdX2s3zoWM5hgnYh5JQN2VgwPs1Q5bh9m",
  "key28": "2jdCVGyALVr9AqQQdw1CNyHYn53QcArvtamju8XaDwEHi16PkAjX8X8A3qHRQTs7WCTTr4tQJZibmqa7V2s5ifx4",
  "key29": "4xphJV46ZVuZdzyccfqvuZfD5HMceV85rChKiKge2xhzWfMJ1FEQStr6THRs8iC8BpeEdZZk2cMMsxeTgipXsJLY",
  "key30": "u38addBGszcz5A2bVYXJLeRcjBqkdyUxoEtZGqQUaprzcqsdEfmkGK538e2JewAwRvjbtyXGPnCf5tMqL8XryFE",
  "key31": "5hRQWLqCUvJ8ck3jgdjpqzga6m69aFF1Ze6tcaNr5W1skpBvnCUrkjE4pNySto2FykFYiiNRCFE5sw63N7coasUi",
  "key32": "38Shkr9Pf8Bjf5YNeugaWXwJfSDTceeB1T9uFCbJ8wubZMAyKWkkxB3QthSLxQEVSnaZDTQTPkXoJLLKr2r6fnok",
  "key33": "3jDEpA18kRnk9dGi291E8jY64NA7UzoQg7cy6K9UBtmJwdwbhufqjeJS1ZKVaEZ83Rd5kkRe656Ge2uuyvnassTn",
  "key34": "4BqbWMKcZPwaarh32M1L6F7nv24u7Pdq9vCVRHHBqGMLNgncvRmo51y5ikKekmtAzJLED9x1DsGwCefrqRi1oBGm",
  "key35": "3LYFH1nDTn3CKCBU1ERRQLKYVmwezJnTJzhXt1JnsxgGyRLJAs3JBFynBd7e4EeXutBoMD2czLsiTma1EYGfN7Pb",
  "key36": "5oR34WasDtBJteP1BVGdDvB43omh9oaxDS9D6B1LCvRVms28h3EL6u4vVLxBRn7LSteQymmud5WGhex3ffdYjfXg",
  "key37": "63rEpPM1EYWGkUN2KxckM59rtSnEHiThz3vpzpFNvB8bjxNsB7wVSmSHjZnauk6sW85ofK3JWtykpAL6wd7aWquQ",
  "key38": "ZNvC8bRBd3kMJ5HfzpGq5umYdesGxPoMMkMSxZ7qVys9eh2voQ61KoGSiXmFkFcDLg59MyEFw41VqCsuxWVfzK5",
  "key39": "UeViqxBmFZ7XY5wVCPdeuiyGDu8fJBKcZMBMCahTJsQZSNUcQNsgNEEvoqANXiuJx52sTirm7g2D93MUgzjDMzC"
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
