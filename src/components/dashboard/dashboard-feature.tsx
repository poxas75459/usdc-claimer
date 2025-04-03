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
    "5FBxw2aLcHpkLkdxXJENopu3Z8Zz5VpPanFxk1U9YMzRGgw2gji2x58yhTruugs32qW33AnG5ky4sjmKvpyDaQ8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJpL6U5EAi6k3SX6ULNmd7bntybqAebvofPSWyznd9zTXJsyQTE6xeppMM9TeoF2JAocqv4QZa5HfbcNAamRqko",
  "key1": "58PoqTYxtMMZMAbab2cFtHN3Aio9gc1nLvqhrkHENBVJvs81uG8kt8gC226F9JYkYjVamn5fiXyhc9dRX5nBah2p",
  "key2": "2gkjnriAhWhe3FsyvJkDGFHtWAEs5xgrETgxR1o4mrE38Ngi6GSoXt1oUHqL3mHrcXNfbg3vu5T25Yj6BaKqa9uG",
  "key3": "3SrUd1dUnEppiNEJ1juDQJ1qMmvKZHvkzgsZdt7Ai9kxYboew43MSHwPY3fWUTmjJA6T3ekyN7p5v5GEpMi7dPSg",
  "key4": "3UiHqGt4fnzAQ5pjjXmEG6KnQmKt8ebz7526fEtyXrySrDpMN3gfPSMYGpwGfS11bBNrphj7YeqSBrRXhZH4BbuG",
  "key5": "51qeqwEoFbjhP4icGn2smz4Kj3PeE5514cqiuYn53UnfJ71x9B8qojAexeRmw1iJZ7h8dU81QmPn91BAM9hfHAAA",
  "key6": "3htgYnpD7iPLNNtXmjPvMWLri9rTAmry5481ZwV9e4ieGHCWCYtZKTNbPjFPDCrWzVkUJD6oogABshWQzUavJ8ZY",
  "key7": "4K2CooCatnCAVzN15Td8hMkU74nUvrDpxqJJpRSV41cRiaPHAFtrR4bhMaCdjFYPtviwXSt2EWdQW6ajqVsHSwSo",
  "key8": "5kxopU8vXhP5JPY7ckHTkcqJ3ZNh8yGm6arVmBmK34FbofT9csSB8f3r4gY5YUreNTNLJtKfapqRfv9gdKFbB5NB",
  "key9": "3GdaZEB7LVx5sn6oz69pjPaHft56yYsQEKhA5Ao6LjbKWKQAbVo5VHmStPQjs1c5nggsBQfR4EXLzi79nJfX37oX",
  "key10": "3jNMc1uXc1EUM6M2HyUUFGPh9R6Ncx5ozH1tTo62VpM3tSy4K7W7HrwgiVgywvru4p8L8ZuiB1AzpkijwpKfvPNW",
  "key11": "ueDdBcTP3ALnRRWYGzC851eHjNYQB4Bcgc6CZYiLjoudvvriMT94JaUM6sqM5DLBxSKu2LZq3c9AkaERdSdCqhD",
  "key12": "5gi8R4c6VoxxAaPLkfq26c4BXXPGBrUK2GYQwRNtCaiBYDjCKKXYWVQcTyb5biCsHXpAWToCLUX8DKLupoCehZ8e",
  "key13": "386avWZeygKbRq3n3xmEcj865iWXKCpcyCsvKZCCAJMtNBP9KPwrdFgVHm11cY9TdfFHvHBUREeLuzgB4y9h7xah",
  "key14": "2KP7K1ADMfM4eyRKiwRJkD9Fz6vs7sh9ALWnzC7ogUPwbHA3ykFTKg8Sy4e3piatEBBsb2JPwoFgqaviFJiFpj69",
  "key15": "2FVcfwb8jXq4vyM9URXR3Puvxsqsjqk6NUjsq7Qk9rYf3sMhNASdVTHgZjJ2vq5HLHN2EpMn2unfWS99iTeDEQTB",
  "key16": "5jKVVRXW3yTjw4whVsTWcLRag1PEHUpgKoZMWunYpDg2zuepmTxkc8brS4H7g7Zj3t1dBWMpWRWghz7YJrQat7Um",
  "key17": "2brXTpUKm7wo9n4EBUhG7aHFshge9jFERJbFukEfZfc27yYfYJCaBMTnwAGJh9yKbKXwKwUMtLNaPU3MvFhK4728",
  "key18": "5v48BhTwtiQ7xdSkF5G88HqaXqQUV4ucwdBVTT3kg8S5aF6kW44P8BLKXH2NZak7VsP2aqB4gqj1zezEM4PmqUSW",
  "key19": "4bGosKVhqUNGwd3RUYTqfS7CL3C46FMrBk1Q8oXudTP5LvNf6udAvcEsAobEdFD8ey8M7o1ofQwMcSNXhpAYkGWP",
  "key20": "2FU9cG8TNCXDeRd4yVgkP5hjpUQe9e2VPbm9bhvSdEkUpumjfHKifsCTXqmmLvnw8fQwEhBstaNEe9NGv2M95hC6",
  "key21": "551HaMoBjfAXbA7PyS4qY8F1brgyrvSEvitcKfBNAYqgZbUv5nNQbAFXaC7DAiYhVSsNpGKaHganDEBwN8H96miK",
  "key22": "4TfLYemFf1whzKrd5inr8JzCi8vCyz1d2AbvgyGYsgtdADqYpaT8vmYVzbveducWDYtRhbTEmcgPzLyUXLJXJ1yY",
  "key23": "4k5JeUPgDjtJYqq9aYWcpa6onuBJn1vdgbEaYs6rKMPb3pdCbfkvwHpyUZ2Nn8YXm8a61TnTd67ZTHE9bE8Cr4ck",
  "key24": "r2yjn4LFinvSLCsJmJHSwAQ2MpxS1YWtFbffRaZJYzeXagcmmPXFVPq6uiHrjWquzWtReLEN4vqSUBnm8LFiWGZ",
  "key25": "47XtMXroU2tnKvHVjpThT9hUBDfES9nCDHZhEqWsij5RQuZWpSpZFgCC761C1U6cr7DaMn3iidDQzqwA12PYzYrn",
  "key26": "5BPDKvLTjFA79KMYbpxfVkfJD2X7ihL8guWKCZyPd78gDQhMCzZGQ5tQpjRujF4YHoHwgD74CpgBTkQqiUU3KuvA",
  "key27": "33cSvvaiCn4L82wfe7AHQRFoUKN3DVbGGoSmHbvUaE7adaJwvpSi5bfDaaNZSLNbHMUkHuMin9h7xgyUpDxAcdY1",
  "key28": "3KGJ49DPNH1gVCBPigx9bzBeorMfJ1FqQGDL7SYhmRoCjNUhWD3hGbKTNsfQ2L3s5BEw7zeay9cLHHSBZK2ucYbS",
  "key29": "59PirMaTL11cCWFPMaao3NshzK9bBu5EFn3C94MmkcJuKZmrvu4VnceCMLxXx3R1EZR29iLNVvBgEgEh4v6RgGE9",
  "key30": "2QdGrDKVZ1Ghkf3nmzYR6JVcpM6w11PPYR2TpDBJLUEXZ1L2GFc6bjB3jriVDwb3LAHnMKmyWh7wEPduVdHN1wUQ",
  "key31": "4jmHSoBojY5ok5iu1ybqdMJwB5yi8ErLTYkV9VGSUHcQwPsmJUKYZ9gMuyTy533iswk2h5sMBabJ1n4KFjhoMRTK",
  "key32": "2zX3j4DAA8TFBrSk5H6HeF7LXtVNeBNJs1Xqg7xXXPwkRDN2Tj2P1JvN1ARXVycpQkV7wNm8nsWnVUHjyae2cyNv",
  "key33": "65hbgF1mrUSkWykgd17CiMayHyzZmMKVDEvLKSMdFQiNf7iVww3jv8D3XXJVNG1sivTbwtuVg7isgNhR6Xrp2Qar",
  "key34": "337Ve2ZEtceHynANfR9JPakDxbFzrGyK1yQJxr2wDkZzo3NAc7XfyzuM42A23GWLRxNUqZbyp5syaxMSpLUwNQxP",
  "key35": "2tyvLyQky9ZyGfPk82hE2ujpnKQsScQq8VbmUXKZ774RDh9jn8YBSCTLC4R5mMm6mmoPcFwC8Q1tdut7XbRhmKbQ",
  "key36": "67dWyx3C8YKAwvr4X6k8XsJKKdmctweK48iV4B9wQqMgDacjbWoc7b2e5BQWMBRxHBqFrgCdDdzRJ9URTibqzZNJ",
  "key37": "4ZgB7N1qCWC3wpYV3Q9HTpHV7mWJck1Bi339PUDx3dGEhu4Tin1oHoc7MyDWbKG8g12As43u6yokHrvwgi8s84EA"
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
