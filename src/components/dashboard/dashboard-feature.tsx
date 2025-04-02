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
    "2ZEo1LJt5kfREkEGxRFWw7QaxPyrf15A5o7Vofpg88wFpwBJ34SoYmdWr6FYw6zrjdoK9N9yn6EPZjFCKALMNqMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbP2RxrDvVu8wxzr4zJHL8wz4VYP62SNSaWyYbYZGP4WXaDYc1wdfDKPaXQA1qwa2hiJ5XxSEx7EdzNbbAyYdgt",
  "key1": "3zZKuL11QMwRmhCdk2fa3yAUBB7xf5NtJqJi8aH7Vyk8DrQpuHpirZcnRkRLs73XFNdTG45oSMoFkDdJy83YSViH",
  "key2": "YdhzqteAE4aYKsAWDwM3Aj3ZHX9aD2HQYeRZ3YaasoEbRd9UPz5ZMYMDvmcfqfQPjVWttEBK5fuarUCKzjDou1S",
  "key3": "5APbXNF3Lt5o56puoQR1qZY6FQjtvaAqgRcppFxdiZrF8JJLWADx9cJFgKDgcdcV4Lq1ePwtfTFQjB7ko17VfUHd",
  "key4": "4fmnx2UXa2S2j959wpD44vxMqy1NhRFyybmm2yMsbZYJ4QV5ECJJZJjUY1azVsXjoPuMVi1haEXhMddHbPHZn7rY",
  "key5": "ya7SiAei714CBpcb7nJtnn9AoRK4wxJcSuMwBXPizbYhhUQPmcziZng8wgsobxXuhtzFKucEUusfGLYbdtVQwpJ",
  "key6": "4FXcu5CzZhWRcT6A863EfDwzui1gDq8fy4C2tM1nnNNbakRnDgz7sD86y5Q2y446X6Wh4hHiHQe33fQ1VWAqesvQ",
  "key7": "3EZRffBxJh7hgv3UQP2VqMeWkDiRXdatvxHB75t2s7R1VJbxLJNcFpAT7b6nkyAszByRv4xC2cVgYbAsfaFwsXkL",
  "key8": "5YGa9rgi35tu6nLRsZghTRVuW149z97j18WtJu88kWCgfVYSrmWHJ8t3iuJJfYw8qghSsggt7iLTxHp8RFgf337L",
  "key9": "4vmcZVbEGtHLAa2nGQg8o8rpeniUeDMa5UZySieedFsPT8e5jxuX5yxNDMY5fd7tYWmWLwb5MJh6su1iyKxaNF9L",
  "key10": "VjD9s2p4YvT8aerQTZLS8wfV31XR853LnnDdQrh6xGm1d226LgLDxVx7fxj1nCA9jaLZHR2a79WhqxJVaTU8hrJ",
  "key11": "4Yt7GC9n4TKqNE53DNhEWghG5vcwakuJgNBsrvun4Gki8sjbL4UD4sYbkQaiyMYgoBMZVTLPhpB5xMqHKpUk9mwB",
  "key12": "48oGVvKV4GgtesR1b8E6tujDd3akJTPs7umWuk9dhxEEGP5jz6Yo9arMieLTLYXfVjs5fXqW39a87fJPZ5mo9nYP",
  "key13": "63GKLJRWNBpwtLeNc3qKrBDx8PPiDT6tQFsE6UBPmP27YEUyhHdHuLbEMKjYQTDbahN2xEimJZ9BJUjeoinT6Xbi",
  "key14": "33vwsDhzuR2Wtzip32G2VfuvP8zqwZghSHwrHvMdwkB19bMYPXwpswzaBbCsDTp6gxymZgabcJ8a2YhjCRrnULaz",
  "key15": "3ubic9iaMVhL5Ss8jjA1vNkRiHJWMemJeFhS69463pAEhqC1dxC7UThui8mBKBizFk8XoBfGZtXPiLjbttTMv3M7",
  "key16": "2ZnFr2PkWpgpuZdpxpoNtS7VPAbbvXnMky7XfXDcXg9rEA9eTSB5bJKrrgmuAhfkghUvWCdKXpYXfGKewcbe8KCL",
  "key17": "3vi612wSKRzGcWkVjJA57LVwTd2Xv2RqscnkN2GauATQEDeiqmLU6LuG4F6tKCsJhBa2RGLABbGjaKUMTGF6zbrk",
  "key18": "61qgbdJguDRyuyizaKQHuUU3JqXakw39HGj6n5oES2KAGgy9HBsPWnY9u9tggMKfQ7c87cNE79xYjvpiNCZ5KQGf",
  "key19": "3HwVsHpno4qU2eawK9Kn6HPGSNQNEaBviKLGJgfBW8xNE7WjZyyimx4oSPkTjdh3kvb54efTgdpPNWF8iqcxpTLR",
  "key20": "2qwms5KxBx69vL9Jzvd4CA1Kyt9dhTsSyMakbo9Tb3Q7HjdLaY6dsMgnuKM9U2FtLqnnPf63uJ2CTtZBST9MJwJA",
  "key21": "NvDas3uAV5Vtjp34xxuSHv78Z25QsBXCuveKXczp9eg9shpx5notzXYBjQjh2LQ4jb3Tb4PEAXfPhu1h5Y81cVf",
  "key22": "2TrJymzDbv3m3XcJrRkE1yYUwvwNqzcourpo6jTSD5JpseyB7XR61bH3tF6ZCaMPQdxyzA85phsrmvJEC5Nj9dLm",
  "key23": "4N4NHwXKxkwRhAJHogq39panMiSdygdL8L6Pox1m4sgr1YbxMf9AjLfjGKEU4n85jMUUVDgUE7eXtEyK7PooSbLq",
  "key24": "sfL3DKn4YSNP2sr4mZFVB5hy6UvdthF6onLwqVJwACxw3bEJ2aUu4X4r6NQmoQtdrSwLQPtSiTxtppfpXYewsXW",
  "key25": "4aG71VTGrv81NspVosfjf2heKefQerSbX5H8q7xMs1ehuxmYspokXMbH2dzrhGLYeMzaneF4SfF9MTF8dNAteLYM",
  "key26": "5BixGkMPaMzb9JPnESFvuSi2gNPrujDvRfjbHeXEvSXv35P1DEMikT8hqnKCt12PLN6Uo5hz4p8eGno3GFUNtQwS",
  "key27": "3giBMs5tZ9Gx8a7abb2dXTWd7EzPJcNKFVgXPhH7K6KeqXDQHumL1g3c1Gs6wbThmZ7NbkXhoRtacxBcPCkd4GGT",
  "key28": "5QyLBypnz6QtqHoE6U4DsB7FAb6RvBNDfqs6jJ3Qy86NXGj1oTtFNFt2dnjY3PZCJLbQ6F8A73JQkMWJJNfqgGX3",
  "key29": "pKH4iowfPvjEePcrbgEGyR61vkQJV8kz6fbTnbmADiAbTCVYWyLLnQsFCexJTmvewQbrzfYgjNRhsG3AbJmrgLz",
  "key30": "2d4JsGhJQGNBR26Nvc27Z4zfNABJgUi7RRoqGhdvFdAP5uvsFd8zmgnteAT6oz6NzboVPPUuB19XVWw5synZbYeb",
  "key31": "2DZzwdAvFmv415P3hAABqNVsaqkozHVyCYpZzUUMmdXxxDtWQRQa4kGciUhxqLSmwo1bFvQp55dfep9Tw4P3q2m4",
  "key32": "4uJxiCafGwCwdMDdxpdsuLUKdTkW5meCoTrnqpMqiHgc7cxkPgWFrMrcaeAS2iuEG3c8XtL1rihbRyNpqCmGDmg",
  "key33": "5j7LafyVFv5evWQX3bog7YgoU68i8WPGVNM8t4CjGksueYC4yVGkvdeYFVNY3BUt2KnAPJH4zMi7HvFZpM1kQFJs",
  "key34": "2FjyXo3jnXaZHEK6o54jmYMYDbj5Jd3cFh2P3cK9TTtMnhkcZshnpXBs6ttuXUp6Ak1fzutyuXV7QG2ok5RmJVmX",
  "key35": "3hyighux1iS9w4Dh2hFz7Vr9HdSTDG71K3dQUoSF96UoRFUqaA69d7Kho42MTkKrSTdMuh8kpYuiE17bhcxiFWaC",
  "key36": "5G8W8yXMTiGBDGufhStiTJVasMQBC65rxKHH4z9UqFJaC4x9BokNr4cmyruov3bQEpsCJK85SZYUpenSvpa3Yjct",
  "key37": "3bDdB3UBvKuMDr8srR9FGSyqZ8a9djawNoY9nWMMfVNcXNGK1nTjV9zVVZRWi1ocBathzHjJMJit9wPhhhJUCBtR",
  "key38": "4CLQDauwhZRmcJ1rNc5TySdJQSw6CPCrFzD6fXhdNMP6f6tug5pybXsK5T4HXToHkjBEF44hGtoBmfdEokyB1Cfy",
  "key39": "5gQEbJy7XZ5ueEvzpJkeyjUUQjiPEom3b8yZb3F5SG8huks87U1j433UJmHPY6JUzfyxDHYHEk6hz5BYPNJVexsf",
  "key40": "Kdku8fC1L5bQDgAUNib1xrk9R5BAdn7xWrdqMWYws1rHntXXTc1aiSsPHavg4ii8dcPZgSbSFwYjVKBpCVrwqm4",
  "key41": "2pEUxtohZDzpQLd1KxcRr6X7iKWsx822bGUk6NQmoyaoyZ4rjaD5YrmkTquTSPmUTTnaUto19GW9tRodhggqh1of",
  "key42": "5EqHsj7nc1xxS6G3GknjZa72S55v8rgHrDJ1HvrmnCqvkHgvs2n5TkskdXnQxH5sjF7C5szp1HpfoBNYCTPFa199",
  "key43": "3zfKMBReEZqDmLkVzsz8V2QgMksm2dBfXihZb92jm4Ci8vbtDSM9mh8jSTp4UCWJjmzigmGejVBZkgDrHZbF5HQ8",
  "key44": "5VXfwn4UakbqCv5sbAs4sUcp5qczS18mefrSE3JPpHAtGQsWyJi7kFNoJ24vvDXNi7pjjiFXChoZMmf5Fa84ud3R"
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
