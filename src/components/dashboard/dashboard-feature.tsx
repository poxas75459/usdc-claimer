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
    "4GR9RULHGzmABk7WS5J9rwTGheS6Td8YmFesmLi6iaJfGiF8h7ncB5aCUiwjKAcht2aXtHu2wFx47xj6eZrcSG1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiRR3n62c4HdJe1hw3pWSkAu4c6tfQcoLVqnCzcrTknZAXF2uJxkf2WfyV54A8tbZFFCngV52puCiHpnZcSvh4X",
  "key1": "4s4daESnsv2eDL17SPyaacZUj3SiN8cUzXdicGJoKDhXKpEjKL2SpU4NMEtkDJHJt43tXYsQ3bz3ZVZQZvhzcuCd",
  "key2": "5aVzThe27PzY12Mq3aRd8C11nuhqXjLCwtzYsNSg83cZeyyW6YwW1m9at51kJunQBh1j9PCZLaQvELRcHoZUyv8J",
  "key3": "52V1ERJRFXhSmybVXhWy5vK17HUM4dqcXJa3HHyhYe82fFoqZBcbDbAjMV2GAruu2Ct5EMU3cyuc9QTcGBJAhg3i",
  "key4": "2o7P862X1hKnmEoy8qRPkvcownktoMnqsLtnLVgu12jaCnGdqAWX9KPUcSnbUcytpajtJ5QXXQCStrx3qSr11Rbe",
  "key5": "2sQzynvBij7zDyZYrzyv8hJMNDUStk9MMPV8hfNKpHKWTSn3MVdytyn8rEhu7CSuQvpqEYYCeZrtJq9xJ6JbgF3X",
  "key6": "2x7s7WLs9wRHuu5dZ9xbMC88kBM54qbBSY2m1BAgBaFPafAbhZLSh6K9N5hDDEDhpJrzTsBqSt3aT4dzmwbUKHGb",
  "key7": "txiEJQwB4gv9uWbzXGxZcJkix6hrA3wpGPo42viuhGXMtep2iB6Jg5hXafozxvovFbEJJEetvGp1rfZyCzaBAuM",
  "key8": "2q3nbHxaoUzjzda9rwrjrmFJE8RoRpCstDR9uC83MbihJokxHxCQ5yuSzreQaxQbRg7WYoJjw7nKnvUimFmrRP1v",
  "key9": "5F35jWwXyEvt64v5pSktp4cFeeJk9oUK9uBkKEDqd4vXVLTMcxuyeV79aBKGPXxAMC7yuCzEvSE3oLKJHprRQzbp",
  "key10": "2FDmdNEanCFyDbtTZe6bN6Dqu51SN7FU9o8NZar5oRgZ8QN5gUZsfCkSYpDs9tEqakymYsouCKZwenNZQ1XkqxKu",
  "key11": "4ESXGSJiJri742p258dVzitXsBn2ySMtugEeqhUGe4mm2E5qJ3XNToGUYmgmzTF2Y1bgVxL6mYn88uAE4CYSFhaT",
  "key12": "vqz55udK22GCiG771ENQ6qewaXg6iD7KH6AXdutVCaMy4XqV6ZGGMxVgWeNpUu9cvbYamtgd1FENSPAoPfhjwpH",
  "key13": "2owU82yAPFMWgsMxAPUMP2pYi8krhwbPQKGRPvk6xu7BNS49PBwkUtPqMcetvpvnv1QvwKrr6hngR4XDrWsS4Sxy",
  "key14": "4jiUgtgQwtyCBHmjb3h62eqerwxT9iGz7gUzZEpCVxkFA1qU7UyTmzMm3qZWmWCK6UkRbtxnX144r6GoRbtHiduk",
  "key15": "231NnHRw7SqVxRTiFrT25gASHcGGfQeH7SJ2gHGprxiKUbVCM9gteYdUxnGCpYacb1rvtL5v3Y8NH7QV5ni5ML1i",
  "key16": "C7QvQQkHmq7UgdQXb3cZm2U1UvUSpBnjkMffH9Dke8dBGPoAsJyc5NuUDgeGjjbToQbmm7F1kWxHkvmd7n5LivL",
  "key17": "38WQAQ8EPCj5Rjk6bz9UWUmhUq4JMet6TDBeDJMxGnLd21p8YM5vANsH2G3M9pAEXhek5ZXvLJ7EvDKstQ6atrno",
  "key18": "3ACmZcjN7j6K6MtrwnJ1J8FpVByRT4FHoZ3KQ2Px2a8ffpqepyMQf7QY5BfobPa6JNQF1qjBbNBVCvVzk6qdFkDy",
  "key19": "L3K72uQknGk2Z1nxoa47Lb5JaH2ApZ9zJAoU34EthFqAPctvmxFk7MzDP9tvgStQsxsvWc27CmZaW7ynzwq6ted",
  "key20": "mBfaWek5ZqMrq9EwdoPES7LsM6zMKDfjNhRBbPRazXfFbxEpvuRYboRvGAP1Jsd17UErkPWb1ZxYSDDnE7aLeAP",
  "key21": "3RxBjgYx92q1YDyWiXZqLHmS3FN2Vnmp2gcpzo3siWPPPXAXnDrfJTL47Q7SP36m3YtNSmm3g1xdtHwpAsQRmcHL",
  "key22": "5McJxS8ZXjbRbmutqKadHoVud9QCHyX7i5ijZUz9YkxkJoFdRR9dB9aiCzgM78G21YsGaTpH7ghw7HTQxYXzgPzc",
  "key23": "3GFSvHLyfqNMb2oMaWRjQ4e4EHfG6RdPkBjTs1hjorDPbwzp6QYsGeBQhbrnUbpAGYtRXmnEk669oFRGL9kRuQrB",
  "key24": "3rag7HRPYBcdy1dedFBdpc5ksYxSbjRUN9ZuS9S22yAw8Drn5DNpdjusMMm3kWFxmyXJvk3oUnSX4JizZJWSv82G",
  "key25": "2xeJDUN9aXcufrd2biqYwpBmmkqxeGwZkURn1pN5odHcxwsRZQpsbgrhEAv654EVAjBLsYGtUVu2sDFFbjYHHV1C",
  "key26": "21az24jkv77sjykHL1zHztQEmcMYwgCaQtHLbaEM132xZKrQ5rcoKG5wqTEqiexTiRVXguRj6s6TNfyM7wKrLL2W",
  "key27": "2Si636xgadQonEhrtnXBSzE8szDfiKr2ojFTms4FknBeAfA4nC9VqJaXXFCzjyH2Fqxj2B5f96dhcD2WBxQzKhia",
  "key28": "3vyund51QwfBMMSivxxNXKWUD79FWcRbePPL9bP8gx745yfD8qjTUDA5YBLkFuNdkwXAVTqdF3UY3d9PqZMKGcrV",
  "key29": "2uR9kSa6CavfAQX5E5dscv1t1RUFg6w5pdrPXMkMFiS3FQ6nPH5LUM2P1Fxy1WKiexMpB62mJKkoYLyFSPE9q6dS",
  "key30": "4htL1brY17jhbS9HKcYj6pP8EuJWYUUCJwAmM3af4jdT2TmLSt7yahFTXohnBLAMCErYemyEPcPWEjsSNC6XaxMS",
  "key31": "5X6omxJ9Jnyk2te7ETa8gQhEbJgyFS6A9cL2mSXXNtDtAWhRER9QJAbmfnBp3eh765oz3iB1Q37mdc8U2JDzASCG",
  "key32": "2odVsZecDjpgo4u6EG3Ftxjrbziy9Ymp8iNaPx7DrbCqkAbKKYpUBQezSSs5xE2DZ3xn646n1km9Q86pxmAvDhze",
  "key33": "5AmP5pFp7Sm6cJPgup42tCbdq2gUwzc21CNpBufTb9e2UABETzyveTAv4rw6tfLRRSBcim1E5p39iMnPiVoDqT5w",
  "key34": "QyceHFZ2aoUe4dWyKyyRuMpgp1hwo7JjfBMeixmJVmqTk3dN5nhZ5Q69DXsQEznCC9j8XNcxrh77SFVs2v11fTK",
  "key35": "3DevxjEajKTR8EptJUezyaBZD8F8trMqufUbVKaUpJKFyzQM57U9LNsxQkxwpw3csUVNwq3oaXALSMFrHLmaChuU"
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
