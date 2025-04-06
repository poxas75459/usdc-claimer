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
    "2VeB9Q1Sz5iY5pkfoKiVWH51cFEtZNVgFt2894NNmxV7LxJjDo81McrNn88Y9J9baU22Khg3uGTR1uAXtuXcESdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJFDBwU1cLnihBdP5z7AL9HLPnSqURiJX83yc5ZtVemQwNQuQJ6V3Vq3BSPduqYB6WYc7ZekDarsZiVGVGhyZQm",
  "key1": "3GeDSCd83iP1EPXi7B1htJuxiZdtTbyt2wRBZ8QbnLNoJJvdjF3jhjS87qipHxfdKj53ShFp8FaCujcYth3kKPAp",
  "key2": "b2Ygc9sav3QYHrtSCcvFpCXgDpSG9y7e2gZMC6bFTHrLLoG2n4dAa984SEpumHufabdbo73FHPVgq9nsS31LS3y",
  "key3": "4Zv7c1MrbMCFjWjS9UbMQnVNdneSmd5LhW9eTbuzJSr48Gpecn7EXfNW1hwHYDnzcuFRasTjYACkLdsiW26XCMwv",
  "key4": "3v2neNagivi1fprKNho2rCdZjugcLNKCi2WPKHUDx7yPk4uMTr6MeLmHEnmfxouGAaL6pzoBT4KAZZPd63UUamcq",
  "key5": "4u3aJofjj6sudNXyzYDGZYZgWx5eK6NN2SJmFPZRGhZsTXGjf5zG26zZ9KDDXSzxv14drW6LUCnexc87q1Vtk5aV",
  "key6": "2uyGZwLyCAJVejSeqRfqfNnQMgzc1exrHU5L7DHUz87ACAGZaWMpNPAdZYnc9JXfoojtenjNiugJmWwWFH847yCr",
  "key7": "3XMScChJcvpPGpW66uG1cJKxEdScFUvMVrBWUHXNKPB1fLg8rCGyDbyLmM17dv1ZAwx3fx8odAiNjLzcT4bniQsP",
  "key8": "4h1XckVZKXTZAs3NE73wwUMTJas37QNg3UxcC9eBZVnxDZWsKwQQkFCVr8pEcbaqoDT4RcYaBsgpzmMw4q3iz7op",
  "key9": "WyEBrewWR53hi3ZcJWtxPFgqGE7SveHS6Zm97Xs4hkHsNnnbFht8EwDFiRG1APBAJotnywp2AfMNNksDvQ6WCXr",
  "key10": "5pauyFfmRiZpuzn1fkgUUhXq6LxHABrUspYcwJjkuFtoYpmg936uw8bTbhgStiMBgGR4DTa8W9xuoSW1neHXf9pJ",
  "key11": "4BHSiARYgBPa1dz7KxUJJHdYLkQ2Mwh8HYnw3rBpAz4dAoGL1HVMbtvrUb75FjdWqTXfn3V7BAWu3khbnPkYoCoc",
  "key12": "7FbhLAdFfwQyc3jd7uRy3VXDcenJAXewirrojJ3dsRWjtxTFctSJ7JyDmRfDwKfi1djDyfv7yyQXhZafAZJgBNe",
  "key13": "67gH9eSpEJ1Jh6HUFAhsJxRtQkBXJrKdqtmWEoyDedEkzD4xSyjAGgibBAGFR5MyMzT6WfztVu5SgPgtHzCxcyo6",
  "key14": "55PCdhz56nT7DeaqYyhNmLjUrx3TDonac5p5jy2KMrHvxBe7vdpxYrXuwRpon6KCjPmyPyg2aPRgNmecYPToo5qW",
  "key15": "3pFuEkiVGW2ZWzpVm4CLfuLJyYZZ9CXx2SpWZFNiCqRbQNYmexRfpZSewYp1WjNjaRFGQjzfjtv6gXkgmzoPn9xd",
  "key16": "fNtJTBgmPmudjJVjLbYsRvnQdi5YrdpYytsJ4Y4jHVU1sG9qiovXuKTMgxu6zTj28LVvBTKnJtnby6M7bPQ6rCi",
  "key17": "63b6G1TF8AhbyTp78mXBBdUXFmvmM14YL6ySKyL7bUNLcCsB4uzuTwMa9ADQk7WfKqhycK4f7Roz93UEofFX8s8m",
  "key18": "3DvBnF4LcGtJFjFVG1BVHcs9CA8XfjD53mWLUueAAnJRkG6spusQbfN47wHEvi9bDF5fV3jVMizV1kcwBAC3xRuE",
  "key19": "5tTFVYmP6M2frArthKhPzEF3EqG6mVtkjt9H2xPnqvUVMugdSpgSP97HqEJjUk3sDdmVpLYszwJK7cdSEWEsKKWe",
  "key20": "2X6g3QTPxoNfJBtZpmgwhTgCLtbjiRPXEHFNSgYPsC2BSzS59ngJTSog5BKhmLssKz94jNaDAkNCUi9xNYpkkJ5g",
  "key21": "64qB8niQB2UU1RRAZVfzYLBwQkJFdmtK4QRomZvF6k9CChsWfX5HWnkL5wm3Rj1Pmw9tQv2Kzbx4QQWyCXiq4ReL",
  "key22": "3iQfqHFM9pDNAwNBMuGqAWi6kdM73Ac1b2xQmDeN64zDigvJvSoqpqBX8yuszuH78ahWUJbWsrzXd7Xr4yaUXML4",
  "key23": "4pzgeDKGDTAtdKU48yLNLBQ8SdFUFxk6CZRpuzN2BLxCkpHavS2hK6oipRkm9KFEVF7wySSiZU6A5nHnmpzVCBih",
  "key24": "uBVBRoisKJ1XyrrwKTRB1bWk67pXwBS51jpdWcRwyg6zMRsecDdjpa5z6FfoNvNDsVko7RW5WXwKchMbtsQUBNd",
  "key25": "EyZsHt6XAHQHjR5RAF7HSo88Mh4kMgGjfTzqdDEti7SPd2yea7zntwaosh26FQeJiYdBPaChRVag7iSgENAybZ5",
  "key26": "8HtSvKo1tXQKL6JEeikFo2GTfGdzy6zZXyieP9pD2TbAnYmxK8Ao49BjYqm4ZAi1tXVYvmFptdCUuDqLEhmwFv4",
  "key27": "4ne4mrvAc24DbgwbuV8WkAiYEdTY7FAE8Majotb1Rqu894pMVZFv58Yp9XhqyEbRRwuev2D2b9oXyS8a73a24ZPX",
  "key28": "3ftVH1nHJAe4smSR1CCUZtuq7vx5RQ2vNqas8jN3pjwfcudTZELExPLEqQFZbVUc8Ye3oGQduUaVqmrqmEcJYogh",
  "key29": "2vsyuX15at7qwg1rr9Xe2bipKuG1ya62Y77hLHjmPs3qeynzH7s9Qiywx4swnZYWhbwCQ5SQbXKduHLfee1EEfRk"
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
