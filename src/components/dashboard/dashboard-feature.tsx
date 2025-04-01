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
    "Ro4ghQVxW6qwT7uZ3Mbb28KGEiURPniz2MtAqrcHoZogEpf5h2833PPwzUGad34rskv3qcPWwEDHaFNdcj6F9DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpoYDzo9oE45qq9aVtUwy46k9vVwb6FuLf38tUUvGbxA3RjhscBqeg4FvYcAaP459iC8rc7A15SL8QPg5pH6Xmk",
  "key1": "2GubYXFwqxSChTeYFyu5dnHcEeP9kriWaYfx8FgT9iGbTTUfGyskbUbqjtTPDinYHh1K5Xr79D4iiW8muadsg27D",
  "key2": "5ncoFH9p6LLtnqizt67fkiVXi84mu9YBfeVTDPah7AptnR35DciFux83GYm3HiTSMwv3ojBhZZEf168LcS2rxuBL",
  "key3": "2LzHZiv4QhHWKpESp2xZLo62dbmSBXHyxPo749PCEx5DKv8ptDd8MrkQJ6CmkxuGD18sqYW8ye8n5xisqBPmaqES",
  "key4": "2xTRpPoebqhFdsTskvWbD2NrehENTbnCSXtHdzpFfwnuTRYsWc7HCBKaeZj6zo5cajSmpANei4LMPRdk17UfZmML",
  "key5": "ji3M3KtgngAFXMJrDduWzzAtTEywV8VSVUe6sUVXvAcrJG9Z9YPkbyTa3FG26ngyM3BDHNk6sXUbcz4U99CaZv2",
  "key6": "nwANMsJZx7FtHnUuMKBk8mhiTs8FMmuh8MHQCLS4LvywYjqXCBP3v7h5oKagaULrX3cBd8CJ9rTruRsV2JDEUQ4",
  "key7": "2G5eJTSu6dwbRNvyyZPp1wpFSmjrp8UiVJcQoMc3NWanc77Lw3dGs7tvwmDMKm729WYM4F4Vs2pyUqtXyRJEkStt",
  "key8": "4PyN3VCWT4qwgc3KJa6Ew6t2ZRtSnPwcaytqruKDDf6MXwUET7tYax33QCQHuqoWDNZSKC8ytGbxVYkhZdkamt74",
  "key9": "MxLMkmTZ3t6eWifhmxRpydNQcLuzFis7dte6NEvdZ8XdfE7puJGB6hFrKSPQPepnesq26ozTySrvsamYa2YpsgU",
  "key10": "56Fsfx2XLMV5hrBj17fHRD2zBsZApi4snVZFCU2rGqWQ58V6nfaTgHDTDK2HaorPWNXiMaXz7B4WSPM3SEYrFhx5",
  "key11": "2gpMyUNoXCuenMPZ3wm8ZAUUL7K7jrNcxHRENo4Gzxzw4qPGQ8ipChpdbaVjbpkQr85oe3z6pScsxadbAhG8wagU",
  "key12": "4wmuEVzNgHJGhq49hWCkHbWn2wtK9oNzUu63pL3Yu22D91EawomNdQy6PZMtjABDsjgN7c7HkjPdQupNBt4RcFhX",
  "key13": "3tLvf193E1pMbVtzFwWS5mUFuGRrWnF6iqk1456wu7kEpM5RXUTgoaLLQJU37sCnwzcS16NymAu42jHqmsU7gMtE",
  "key14": "5Yodj8KBG4kQ9CrKoWZL1uSq4xfqztMtY1fx3LaMQYyYTXKej7BAVW8jpxnaMpNX3ThTnso38DtkjMHVsge3f9XZ",
  "key15": "5zApotA1UPpdUd9xLjQYi27i8hW2BWFvPq1jSAwy2YT46Z8ASCkJhDWPB3Px95ys8HLKE6b5hvU4Ju4us2i4JagN",
  "key16": "4sQZsSS1oMUm9R1hJkYsKt9zVbH4voyGeRB7hK3Fu9ZFRg1eLR4XBaDpKmGBzy1AqcKCujj4gGRA5so1NBqMtoPM",
  "key17": "WoxesgJFafXLdxC6d1KDax3mp7VZQqvjEsTZPLHvQkHPHmmuGkfr1Cju4C1UhFtqRHUTBUaCaNFCNoCWgkGyCc5",
  "key18": "2vQpPaTwxwuZ45aZrTj2syCdFo33XvB4G83kZpD7TGRiuHXLF18PGYHHsBq5LV5BaeTddC2jFhqneMHfUojKwjxz",
  "key19": "3wqc7hbZdzdsabKTRedtpRH2Ty4SLfaR3DcqdbjEWiQrWrG9StvZArFtVQuiKXr9LWqnPAbMVZjSnhHZtgMEx6qy",
  "key20": "4Cx1iYpAyEGJM1wzMHpsY26sba9t7SmFbve32Vntze3n7uBEyocShWoYyo2MUg1czpBUiNJu5D5avvo85wdfS7JW",
  "key21": "4AW5dtdDZmHb1dKTBqRFmsUMhytULmadUwemMSicnxrynq5cEKqSwgmRftaB7dcXeY5CmYBrnETB4VZShzLbte4x",
  "key22": "4zJzyNLF8b2WP4DL63yRiqrPWphLeMYxEAgMXfX94tQehbf6fmD1xy9bM583LKk7zNoUKCWW2MNE9CYPwN8qeyMG",
  "key23": "26Jo9D6uBpytWkcxWSoE7DdNpdSVotTGXdLT57nZURti34sd7i4c6Tdvt97EU5pXHvLW6Zf5Ez8GBmNdKxBhswW7",
  "key24": "5i3TJwuTWFeVamxygQN37LETg1UMuJ6S6KaASfdgWx5iAnSG2CS7ncgDhsGGN9mrbuVCcEFHR6BJgn6Z2i8JTxoC",
  "key25": "2gH4k3aD6DJfrKrwF4wAXxJMsMi1vsch13HF7h5zGQzrDZoW7qsf9cJTtSiZ2cvPUKqziaNYFQM1H41A2H3BLygo",
  "key26": "4ZV7tmF8Upr8AYZyuwgz5oogFg3o9avHgjn1MYUomLCBBBgyWBVyfL2ymps22DJf3KVNejKr1SbgyKwLJ9GioPVe",
  "key27": "LJWAZLB72e7m1oJ1TzsdvzwMNapF4nQav9tTNeYtk3FuS9biu7oWgTGXtLfdfKABWUtxYiLYRMv4nNmLcg6rgNp",
  "key28": "35oBSiH91HydphvsVey3SSpDBnQRtNjmfpoJkveGvj8AazPSiJHRU6yYLnrdpmQnT5srWB97j42mFXjcdR1u3A76",
  "key29": "QAhmTbk5t9xUrkZ8pLLxTRzgdneVXYvxc1Qh71qxmhom92ac1H3Upd3yVCKVDPhQHJbEB3NsjqorCCWXoVX1WEG",
  "key30": "5ckCP46tXQNg43ieCEcpCUkK63hqPp2Qs6BwHeGaEPD8rYeE5pv1otiy2ArWfRWT3NQtkU6nqUxDXUyfFE5XQZCF",
  "key31": "2ZutevSzwaX76W384jzqpsp8disG9Rp1QECGVYUyHNyPE8XMYJPLzgwCXyogL6RbXzF8GDwa175Eery67ngMnuhH",
  "key32": "31WeVDTbT57mVVePyV8ADgSz6Wz8YUbjPEtDwhRmMwuPB3Ptmdark258S3iJqf7pXipTC3MK1pNSDAwks4X1Cmdi",
  "key33": "27NFKnX8sy1zzJz3YvJn2YP1v349S5T3PTtMaud5kp7s2au7oKQnnocrwJTNRsArrpFDNd3V4iWUfrdHpuKUGDPb",
  "key34": "4r6RytS5HkwVLNjf6RA4jXmhSwYjcyD2uf6v9kSYVyxcqQcfgEKRQGMutGcLuM8DZGYZS5W2d2UNrccvXmdVtYqj",
  "key35": "4WbsHfVGyge5ctb21NCE7qSPKE1Dz51WsqjasvxAqKktW8Y4EH8cBKXbdUq8dnRoTjiu2zpzuXLtmQ3q5fZR1Up7",
  "key36": "64KFmCrvNuiqCP4dtYoMXDUTTLTxB8Y3nPVp3MoZJqTPCQSJ8Zq58QxRoX9A637ANbFpj71ZKa9mfCskP1KPxzXi",
  "key37": "2L8ZjkbXrESCTMxn2RV3i48CSNkYTcUsMEUgWtEz9zaaGPnFBgJ6mWeQfN3XqBbLbXRAEuFRpk3nwMpeWB2Yj65J",
  "key38": "4tCpLnBmrjH6J1pLv5myt1KLNyPr8RVDTrGQZPt1XKosX5ns9cufche9HdBtKFpsPWnjvwcp5j5X9gCTmgFFVrMu"
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
