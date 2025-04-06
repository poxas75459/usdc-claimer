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
    "3Fu3aRC4aExNuKgp4FJkAzvobuWFwLfxD3cLSWmFQ8TPMGXuBh5YwyuSceWtbKWxPejkX6braieU9ryMzQBY6aXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyFDtaNYm7HvHsXQA4n1yE4yQqiW9RBbjrkakoGfbLjkaRWNha9RiAfYu5p4YqtdR3sRDgib2JyZDQk1NQcuu3",
  "key1": "DopLQVmC4W6n2MRnNKva72CGUDTig6p8WEVi9NtEMQku6bQ18TsPvPUwLEb4VBqQaNmVxrXYHSoCHou8u9QoVRa",
  "key2": "5ybPJVTMDCma9TNVa4wF2boPj2nH7HrREknfsaTFPKQq33dXYwgDK7aDLf8LWjaLiBEZ5kqMMhAWenvX1brngSNt",
  "key3": "3juus3gD1CKjbBxVMrWzsHEd2QPeGRr4295HXp12621CacKtpwRaT5s8UYwVCeXL4446QiHenP6HDvDpU31fu8Jb",
  "key4": "hfxERdtavTRqjiGnB6m5bZuubb643mjbhHdksuCQe49Qj1KmH7m3Vxtm9UoYGSqEUwCdJfSfRPiXrJhFsSKZEBq",
  "key5": "PrV7ynhp8ZeLZCLSM8dQ25XQnRnhHxdtSuoGQjBeJnEJjjK5dH5iBrE95MvZFnbNWMKn4einV9bRNoVwWN1Nn11",
  "key6": "CPpu53PSbZFsCBu9JKJx2j7PxdnXfUXGyKYraJkgYWLFCX4376x5cqHndeaRVGkxxgt4gZs6KPkffHSqgev5YCU",
  "key7": "57kby6bFvYiwkZAMZEyZxNhBBjiJpYito2UmyJpMZc4kAdzf6vp8hxQmX2DgY6b3QgzMtVxkvERqQ4P9uVPQwAT7",
  "key8": "5GB5ZmcSmptHNhM4Q5wMPuhGKURxHtTqS6v3McSwEgsCKk8qooMbgHPmBVcTp234jyo6wh13wS27e8F4qLohAmhi",
  "key9": "3xUCzgSSWzW3W1iSuEt5NW6LTCSvd7m6bk7rZvYzVqWKfm9vcMkw6ZgyYuucRBXjr85XJ1FKsTTAXEh2NgrRmVeC",
  "key10": "5ZkCH5RahLiH4cW35GqDFivRGjq8qvViTUaQj3au7fVWbZLh2h8q2XEWjF34JFPAU9isxb7ehvaZ55594S2ZqRNK",
  "key11": "27XeRPdTpJ1VMS9nfs6DmykJnqezD6AUeKzhtDm2NPgbcZ8F5YGMBdXbjXyidY4RitJhxDikmikRwhaX562UqVqa",
  "key12": "3ZkUgXhBEVqRJAz7RkVUABm6HG7XsnBSqggR9joF1d4nomWQUK957R2SB5iP3NV1wgtEL5ZBV8rvdaxoW1Qu2YXg",
  "key13": "iCAri9vpDoudkZ8TUXUR68y8V47xJ6XBiHR9on3TWw29bfnu3hSLWsuyGECrJwgcBj5geBFB5hAVy2x4iTWzgrk",
  "key14": "5t9TKs1zjVAdCoEB8GiqDbRhFPU72A3ARuC7nPAYsDU8HZBj4stBujv4xktUrjaz9bDazwppfL6NhQU4oaxQmSVq",
  "key15": "3rKu5fonG2ruPvE3GsBWsJ2LdBSZkkC4vYVkK9udVXnjPhRXznycEf8cqbpBWkSUXcYwYP8NWxg69nnYtuMuNLXF",
  "key16": "CrpMsaQsSBWUSTt8UvLvf5JYTB5UVMYyebz6j6aMTiotgH4Wt3kibybX241ePZgeisgfKq2NTLBjJc1uU7qssr9",
  "key17": "45tVx6ixFUddUEGZdq6DCjsCnkuDBFwp8C63D4ZoBouLxQNqaL5xJ88mJiLBw1Hbb5KuAbBWCnMLfwezcbhyU5gF",
  "key18": "5onfsBqVaFo3Xets3R3TSwrZsgMnst3psno1QoWLXjg6T4uG1oWWgSiHnGv3fX5rQHDPmvhXTU3ky3VrMCcZEF6n",
  "key19": "4N4xG29Vxc8bFNx4WXCxRgUFGmZPBwAMZC5mjJVUdMcjoUt9QFhmvatnjnSXuZZkEJV61GmH1XXK3h2uwwjMov5j",
  "key20": "4cbebQ5KKyi3HrrjeYcdPLB9AQpU3jYME4SUTPePXxNcHi6WtRXpyRRMgWPS5wkqnXQZMqKv3whqEvm73QrHbMLk",
  "key21": "5pZpFn4UdwGWwAsRm3TdUfpMRRkM7MERZMYwW5qVTLvuFngLTEog7pBfxk1r4ecQi2DsPiABYBs3FnirnBWhkMzq",
  "key22": "4Bt81SX4y36yLJdMmyGCosP46KDvAKgyrG2F5d7UN6FDb6reo1bSMAb8TbhQ9gJPpyX8BrhB92PBXRVtHewEBo42",
  "key23": "4KbUccjvZnH4n8vhEBh9CE91J6NkMnWj539ebWGdJJSthJvu8Lpko9xufYT8KVJu9eSNagWHv6D4HVMCPHvhqHC",
  "key24": "2YaLZFBXtWguijqQ2k5yVu2Eb5bb5BECDjT3uiUvdxzLrrpAAoDLUcng3JAp5heGy2pXVS3u2G5eTxkJemThmkZE",
  "key25": "2c6zmT8dSxZFC5BosX8SSJHnwBNJc4ckfzx4bV48hfRcDAhN2rbmE1EizmFELi8eSdmHtGKSUhdrg87fChdAzX5v",
  "key26": "3FMW8MLMLV326jeoCAnfCsnAy44qu7EgQ6LTPpE7Cpb4yR596vcYFEjwrK6BqPdQmVueQVYgkNCEZqoEzuUXoPbQ",
  "key27": "3wMVigyHEkaAdMEdLktPfWrA2zefWGduPMTtjTx77pYSd1KeVqgL5XEaA9g9G9KSZutwsAFS4GLB2zfcFzRogHg8",
  "key28": "621Jkg5Dr3aosFt6MAarhfLAxY4wzyJAw4p3VNcycCLJB4CezgL1f9jaNm6CkSPsqtNch6vSgEGQWfvxzGj9xwcw",
  "key29": "3uJ4wXE9xFL7wfe8G7sCrEUoRyeDYjfRje6YzgMowyqmReyzkb5DNWFaQJ3v1kwhoDcvAspUm4zVgrmmYF4FcmDw",
  "key30": "65RW4ruKf4QQbUzf3ByqpQ4Bz5nBMYBhiCCYwj6G96eboYZxt691vQiUXPRwUoPRqbEGYd7CQMDAHW6EFNej6Jxi",
  "key31": "2VxZboSaMzW36UJWSNU6cvbLyTqnMRiy4ghrhx7Q4n2V43Ma6kUHWegfYn6Msbp9NNdN9LtJZ5ARFMZ2sZyJDNc",
  "key32": "4EK72BxBQyEGVr4S2iHs6gLHzScy6MVsqx4djSkyHPKjd566Z4yPBdAsGcbpyz7y1n2WZBJu8PeVUuBMqBWryA2B",
  "key33": "5NdBvXRCaqjZ5BhMTBkaWLyZJVoihDdpwfuEmPoMQ39aXCJYFKHbbKG1Xbuxj76oTSBfh9Xewk1YKCkfe2RYCdna",
  "key34": "61FDcWL7fej6i4ZbsPgiNToPP9sncNdBRDRkjjFHf9k77bZ135UDjqKE4mVJVZeyZ8aFAKZXSCMGS6P1HeMhuSkR",
  "key35": "33jCS42LLj3uq8my1YTZVpnWuW6T6RvsbuV9GX6Gr75wCHhbfP3BqNZWVWMBniYX6H2Jm1Qmm1zfVNJ7CMTHZ1hN",
  "key36": "4rDWwmhCoz2QLJP3mbPhQADsXvAaVMQnz6oryNggDnTnDZs8LvXzrwLVcJ2SKJr8RcL75jUn2FLQ6wbovsKNHYZg",
  "key37": "2qjoBLkVPYzhioZsg6EbWfecd258NvGUnjn8VFjddLo72BZvsM7SooR87iFiP91T2tvhGtz9UojbAyA3AYNv6bus",
  "key38": "3FNAHw7eQQgYBAaFLwg2Kte2T6C9k1PXopsqxfZviyy2fDVnQ9ae5vBFVTWg4MYZyLSb2vHYQiCcMutcUD2EiqE8",
  "key39": "5i6iYB8HgKgTVLY8D8MAV8xDv1qA8NhHgRe1n2VdmNSui3YxDGGVh1P1jcDX4Z4zsvkzZEz7WSqtp67CPvvk6Vjs",
  "key40": "4RBixJqaDSLAT7GK4uujFSjb3hssFFpYXoUdr6SPJKutmEY1ZxvB34dSGvtANLiNWeFB3XYgJPUyReyyCQY5pqzg",
  "key41": "5Cn2x5uJNLEcYHdqpG2LMkjzoBaUDpFmC5VLj6pSgG4AwEDcpbt8KfMeC87gWDoMro2tzzZ7qYgrPzNt7ankPfp7",
  "key42": "5yMDxuKuzXH5Wh9CW1dH9X2ze6Fq9oC7Xo9TgEkpZesjAPcUiAZSk69FesZodzZeHynRGVVojxAi61J9YuXD1J3D",
  "key43": "5knhvWCowmc8TErv1V7Uw4Dy6BpLXZd17YoHmRSz8FirrogbCB7VSdceYVTE6Djj5cFVNdT643uf2FokbJSKFazh",
  "key44": "6RpxUU2faun1EnVm3CgG6RFyUAPZkAykMaghzQNjxfjuh3LGRpTuY8cNUnP85Khob6A5Jx49NqFffxfmf7WmKu9",
  "key45": "5eL6ajtvDeGsKH1h7iTV1Y6qYaDig5NEPp7z4TpwkG9jpLY8m8dPEfs48m86YGbf6UBPCDbdC1bTeJ3yNeauEq7q"
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
