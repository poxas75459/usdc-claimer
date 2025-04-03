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
    "5FAxnx6KEpMqnrnaNNz1FnbWM3KVLt6Kdszc81ocHvXjp1XKe7817Z9wKLbtC98ZzR9oTiiJRMoQm8aTYgn6dhp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eyubuafaXbdEYddDk76jsM1ZdDvZ4ETaiu2GzgsbJWdA8Zxx6KbwcUxtUrMYwxURgi8obxvwbARskh8u7CfzAc",
  "key1": "3VZbzmcLwtwTxkXuerR1RUuSfzaENZCeDPXE76k3XWs1obLq8g1vwFtYJDZe5Kzf3GJM6iJVTSHUuM6ByC15n4rp",
  "key2": "JaaZxUmrwwJ4L6qSffDhG2SuqyiPDokwYNiVPaTpWbxw2nKZk7oEgjXMZVUwzEWvc7QAHYgB2KPKnxSQYV2y3uM",
  "key3": "5XpH7ohpspqR9J2d1BoQNr4bjfCwcTS8m8FZfdAh5NtUXYGYSeCVwXHgEefrBixHwCFRkRhonSMKgbfJFaYataC6",
  "key4": "4TYSt6TVfbLtwJbD96Wovp6SgM81fPYHiQPA863U4esaVPfBDrbtDy3TMHwdcu72hZMdjobN8AqUqfjyjDdi1uoK",
  "key5": "2X1T5gKN2pUFRz64982trtnCtxLTDJxKeWbsTsZJiDMNZfREcidnzBjJB9eqSkWZh5HFFMWn2LAmXyKzSMFCnYjM",
  "key6": "V2Eem1U2ePS1ndUHwLTsupdCDErTpneppBw3ejeeqA6Cje46DHenGP5KcW2d2sHNv7EGqVoU5TB7cBMwzttEezQ",
  "key7": "4drbXjLcXfqNPR2t8LeLLuySrizCRPDjAWUfjukCLvcAkR9TvRD1LCYb1qd55X26U6eWgy3zimY9miZiwSJoULub",
  "key8": "yXqsy61ABnebHgXrpNFKStk4U7fghBzjbtJkCjtEXtZFUcoNfqqU2FQFmfxw782XJ7uVkvS4br92FNjJPVT21V8",
  "key9": "tiSi8vz2BvWLA7coZn6BRfPtKCKU49NVWasdSNvp9nYH7YcrKNqqk7Y1sAf5vYq1wqTnuaFN1p3qEHuc37zXtr9",
  "key10": "Vk66J1uapQZjnNjWkXubiCunRSgVZGveouoFff1WpjSoBFWky8NqE5xqBiAsbEYymTNQxnJWQKRz8dS7LB9uVZi",
  "key11": "4RyaoRanRCZP1P77yLW1ZAwA3W33oetTM8h3jdRGKvq1Q6NWWZatChNDLhno9HF3hLEuMRMKJGbYutgsgovtU8F",
  "key12": "5arQRhJe42GJQkiskgd7Ai3A8ZpPnMbQAiVNph3iqe9pcMpbdHvjP9Sxxvf4uVXz4t2Ta6oRhYhBeDzBqfmiUB35",
  "key13": "5hQd7Z1aKAKcB3v2tMNsy3w5xDPoXay2kbF6zxThNnRjniexsGU9vjU7BHTsCwmZotYYcEr5UvXumj4N8yMxm2oH",
  "key14": "3bePTQWRiTj5WrgS6mDwXoXc3jU6WUpKFgaaPT1cbsUVPy1ba38GVNiTi7DXP67qPnMDmgdeVmtLsADCocjow5yk",
  "key15": "2EAidFnMWPg4bJpCUKDBD7MSoTDCijuVZhqmBM5pGfVwVzgTeJu6DPNL4JBHTxBQha3uKWnRhtbPxZq2Yqe1c2VT",
  "key16": "5oLGXTmdcp32xjrFsBq5hEhZLNUpJfVTQUDD6j1YSB8gJCKALPERB2EppyBGs9o9qFqqUq5Tyc9nY9ut2VNH5VvS",
  "key17": "2qH9Ux7wMnD4JTe9dB69YxA6N6k3vbY3iodZp1NoYcZzF4Rc16QRxQr5F5fDDCPA1aE7NMapbaRwDrvix7sU7w5u",
  "key18": "2LdnjmnrduBxyotg765mV7gS9ejstk7eyYdAJnXajPYxgn2szVteDGNRpLNQe1kTRyVvMchXRkEBuR21p4X4D83n",
  "key19": "CVEohs3PL8zapx8qJaKX5nGg6bWUFjvgNC3PhwWeQ39iYUkvXMhWQPPNY2uyRpc8f5MWDy4bJB4zFxpiNH2pUL6",
  "key20": "4gd3ZZb4VD5XEgmRsavY5mEtWz9z3aCTvEt7v78pTvvc6ieR898q4HFWJtrLfzWY2i6NwsQverWqPCfzca43YEJ2",
  "key21": "5djAz3MSCBoiJTfejp8s3bRmGGCMdreUiRtTbr78ZGqgKTNcrj2DbLMjtKMjC9mz8sL2YdJQ2FnCS67H3mESUshc",
  "key22": "5hJqF1Z6dTUcZA6JYwzf5cGNk4pBW9ZMTxv3JCpfefSWH51HG4ZXZLVf1eG7DS7A5VgEnaohBsaCx9mctpVAeqWm",
  "key23": "6Q4QwF36U9CC494KgD7BemquYeNQYsc4CXFaDpcEgHntGaCPMJpk7sbfsYLtW7zCMJTRvL8AebX9nmyrdDDeP95",
  "key24": "5N5tpiAYzgwHUvmtjwf9npbVv84BXhT6TxRJNo95oze9Ui3WVbE3gvAUgGype5uuXq4xDx9ErzBSMFRgLECLaVke",
  "key25": "2ZwKMWhQHwVFG9Qiy5yBBbkqruemMiFX4gmzk5ewNYL8j6FMF2vq63bjGCAqXBNK9r8kh1AURxhqbro3qR5YZpmJ",
  "key26": "4ZvFcqQTsY4khNYBxMweVDcypwM3fdz5Gj1WNRFCt9jAqmoM5syZU8QXn5sih7zHQge3P6zJewc5bUvkREV5Eirr",
  "key27": "2SMxcbsbUKiYvKiAq1LbwMdf5dYBtKbgTtMZKFtsnSR92EtHRpKhErtYUCJr9BGeyRWoTEF1bF96X3Equ37ZXAsq",
  "key28": "2EimtrrGCX3Y7f5EPgRZ58Q3858GMdh4Tibyc925kh2dG7957ewMGz63nrwwSYWN9eCaeSfuifiMghSzYrzgP3Kx",
  "key29": "4Y8b7LCuaRLkdESahLfqkPNhL2HX4gi5GMaqHEVNQB5xFWAJKy1o9EfPKhFodM2u19dudMYuuDYeUzynAckvBre9",
  "key30": "5ynDNYAQxGsHmU5irESH1MJs7FJoZ25oPUfDkBr8oikCvidszX3mViFVT1vRykegRnM3yRbvVwasuFrCmmsS1gvV",
  "key31": "3UP6h3Ty553rgbrUj9ihNiLP5iJkCw2mTHUqNJDvNjMESKkhFSetJv3rQoaWERNwvcDgXox77kkNjTT2Xae7NZze",
  "key32": "ULmkqfon2Ap5gRveeyRfbrmxtSpAP5eQPkF4i6U5HQcGPReuNvYMKRYoKiVXPmzRx6RyQYnRL7fPLpud9vFtgxN",
  "key33": "36BPsAXXPXVZfLz3BUAKa6gy6uydeQVYeLipPg9z6L2N6eX8SNTXPmGE1dX6aX1xPBaXyUHkqGH1Kx2tK1pGuNL8",
  "key34": "4SLMtxfEquVavz8AMRPgANtkRDHXZChcvF5JQSj2aW3VgxUHn4DyV6D2FCwddcLRGCrhTejZUGCUst2oF5H9R847",
  "key35": "3APRyzNpaVdpredK8vUfJRanchbMB5aXHceBVgk3CvP9VYBfhJpBsmSYxoeof1xNYcJphEDF1s4tndxzTdxtb6Vs",
  "key36": "64GNzD5534mdSBgR5tpG4unfZL8qojMB6whs6qzEkAh1sGyGYNTv6P7qXW6P6Gm62MJYCkbEU6Qgx4M39GXiNRoP",
  "key37": "v6tASbafKagBpBn3221Zf5cupavXkfySfKah4RhLLfkNKKntsdycKBvoTe6CU5iypLTDbdtrhCaJh7DiVNctwqD",
  "key38": "3Tg67bQXwa5EbhLwxnytbxYo46ccbwXZfWnzXedV6kSoJoUXozDGtZp7vmwbma1nEQwNjivaQ1zW4uzic2e6SDXi",
  "key39": "2fsHjw73xbxr2Zh1jmfkr3TEq2SvDr24R9qJkfVQAu5CctW8QyQ6oKGLmEp7naKTHuNAnGMMqnvMEm3gT7P6FdKs",
  "key40": "3uvLjnAyAEypnDbgNKrCPc59Lq2NnDAau3D67RaQrobJ1Kjzs556F2MqHD2kfMNmmWCkXHxpAnt2nZ2dK2otb9Nt",
  "key41": "5jP3SwWVb2D2BPpJ7rMF4PQbKjGgwMtSVyK4H6hRvuMeTcgSVdPk44KH6Xd5wjyCgHDvAFzZ4kXGe9a44ZYnszz",
  "key42": "dLvc2vhTUNRpC9LKDzDzvzSJnYcj1RFiw5SfXH9R6yKewTVCkDZwovYFncYvkZSDdnQdMDQJtm4biFXE9QDvXxi",
  "key43": "2CMzktbMnvewy1NH3XUdQQaw5pUaua5MzGNZ11xqFtVrkyQ8oo7Xyas289VqUDa1oFvsPKV2rRWzo4AaFjKRUsww"
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
