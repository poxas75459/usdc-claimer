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
    "28EH4YDGbH5V6PBFWtJPbpNFJZ64AiPruBNg8dPYmGhz4wbG9kviywrvb7Fho1VoZQtGg4iUnz9ZQDv8gyPC73Ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Y49ZGB72LS1rTGtss6qgVfjMjRcTiveigk9SG5gf1SBFv6tiP8M1M7mVQHBYz3iWPwd2RZNz92hjAwGEZ4Vk4L",
  "key1": "Cn9bujSzK4VJdY1ogWHwNwoASWo7eR3X4SFpMPPh6e9zEUkKYou73S4w3H4SAg8RJsaaZzEa4Q3SAzMMhQmDyFb",
  "key2": "5FxqTWZ2fZTyBv8GHu91F7HpPdApuZMuc1pV2VWj5S8e85XG73JMA6rXutKU2pB9Yyq3wadEJiUuRyZDbxUEdpY3",
  "key3": "5epMGC8ikMzw9XaXDb7b7ffDhHeRsF5W9Xi76MjZ1K4KaveVSYJnAuZgxUXTBmcbEjBhXsTBjfTxncrjkANKm951",
  "key4": "4B2B4FLpsM3gYV3tkD2hQ9bA4NABo22J85TSX35cA56rZTYhg7Bp31ovpV7GHfCBJuQuEvf8CeqU48HH1uVWZFVC",
  "key5": "oTamTcWT4wZccqKTtc7sSxPw6qtFUJcLxBaocr7TCLNFBj5JpZuU7YuDHviPyjMjVUWbmKjYUp1rDUrr82DMRzv",
  "key6": "3AfHteFbQFUXJZe1WULNCppfXBg6oWfp9GphVwkKDykBNK5vtQF7GJhSfCy7TLVieejcBN5ZAKgkJKCBaNjeHpkj",
  "key7": "3LHgi2GS6fpYzzQnV9Etay5UGPc6GpH38WQqQjdu1n3hW6KZfgH24Aq31LsZMJFyxuQdX7joEo2e7f3CHeGLMryH",
  "key8": "3E9CkWp6Ldo3VJnvkuG9ouZ17GxkqMuUh9UHxdfvtFsHMVeSwuhhy4SyvY7M6F3UzqkZ2FD6kb13SJVGWRsyTTxt",
  "key9": "4H6wWjBuizgX7U3Vu543qsFbvLfH38SZ31qKfVBna2eVbwTyC5F7ArHqEboyfXqKYfos5ajX9VDH8bkCcdyySxMV",
  "key10": "26kR6EbbqayzyTKRaV34MBqQqDz5YtrhLb5xaLEDn5mENvJowKR8WQrJADY2WjPCBjRXuVCv49XvmgZifXrLKact",
  "key11": "49MCWw4eVmwV3qBHyG9jW7UyDiK5aWGxrpd5Ft7rURgAzMfBxUbXPu7EfJN4eCndickbxr21uKHzjc5YcTyjgJrZ",
  "key12": "vSCbLkf1gMnRnZNZSVkvj8zgLev2qvi27xhDhG9MB3TGDSQVcesJEFdBskiLBfFm1ZSp98XnDarzNm8Rm2BUR5d",
  "key13": "5tjFFXXsa3MeudF2uFDm6HsnDpj7FRDkgzpS5L72sGyooKWW5D8RSMGknVWXUMT4P2kb2V1Socc5autN1kwDHFHQ",
  "key14": "hjcKWRd6ishroAHperbBbd5BzaJ671JXZawUJihHWWMxNkNXJtrnMg263JHVqHvq7j66NL6gvhGtZ585DvcY4qA",
  "key15": "2DgqwZXcyRi3aQ7inXJeHeNSGRwEW8u9yNYWEihAeoynEdcJu5ecwRyrUSsPDx2nGT6kQhYyBEZNdApSEnfhunm7",
  "key16": "oGYbZEP4jL1YkC4fwVkUPqPoD5dWmZ6i1YCm1Ez4WugPJtDqDB7ruM7pEAVHj1ujmwgDTzhudXANjb7XxA4zKg9",
  "key17": "36J13jKar9jeG8stZ6sBSM2wa5Sa4t5QVbKPrL1wndDkiv56ZHYswZExHdTvuBaD3Eg34jJ9JDceEB5Tf2nUkk36",
  "key18": "2E1GRpgumUcKW7UuN5tfHe9XD6M5bPkqGbduvzihWhxxt42LPqrWGmtdfLVESemEb45JSctLG3orUSwkbif8KoRJ",
  "key19": "2SeDsRmA6ZZH7TBnojxHqhHTiTYabJ67YRgfGAPTkT1pgioec9KdkhvS9zPzmK7AAkv9rSce5cuK8kqLasp42XFk",
  "key20": "5rqy7ZrwCmP8emGXnDu7V2fgZcLAA9SFvQv2E4p3J5RXyLdj7x77oY76PVDcNzDYxXDzT3uDuFjUKUGpW25Dkcjd",
  "key21": "5aUoHmEMuqGDm8MMSvntjZ3JhUdKVCF4Ph83uvRttwif8nqy7cACMwaE4CzgdkzWDvcCZ68CKw6SKUFBHhXprevK",
  "key22": "sE4da6Snn2pCfk6PuuBLWpbaDuNEXEsUZnmkxVwSa2MqAxMYd7TQ1pvWWHHig4xM3QktBXCbAVxccqeNVEBcU9B",
  "key23": "61dvjwMteKaP29cRECXPTwZn6PZRuHvNmMEcf4Z6sFq9Vf2QkvdDE6QFFA1wBaHVfH6eTqfx4ZcbLEo1Fgtkq5UF",
  "key24": "2ryBkxD2yv2QHeq1EKLUWaDfxbVnKmWkrVzM6mPa5fxneX1WwQSoeVWXJaFGmFW8VENQnUdD2G8fzJ8o1xhx2PQi",
  "key25": "4tFwWmKxPFTr5gQJjA7ZXDnuWoMbLfWYr3Jqa46HrakSR6Q5e9b8W8Mo4PZGhNYetfEQnga1cD1RUciQKaAXEhCd",
  "key26": "BYpDFR51iTGTBzKzST5BbfV9W8J1db4F28GrAmDUWvGjkSaancWojBQ1mmhiYLToNhCVVPqXgS1GUyJJNrBpCE8",
  "key27": "3DW33c1VMcnyPruTVE6Q4vgSBPsKxQxM5Bi2BfwJWgs7JsRguNPejAS1ZaFnAG5bWvHiZLGWdBcC74UWmyM4ef36",
  "key28": "2of3m9CcTygNnodhK6tTzHXa22fH3HeNir4Va5SS5zwFAxebK316YFuD3tThVHw9jqUYmQpgDBwXf5VtzMaMDzQd",
  "key29": "BS1bNy6GausgxhVcGJt7ojmFehS4cFM2zKfxu612WoznbsVsLEba18ueSpAeZq52ph7PBdUzLKDkAgrbkFFuBPP",
  "key30": "2wJ1Fgvu9vSnrEPB88t2wEtQxn32CJQAXCKHcb38VfuP7xGWg3HiryLF1FfQpnEYCTWfGFw5sPCxFiCnE9ngEKHS"
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
