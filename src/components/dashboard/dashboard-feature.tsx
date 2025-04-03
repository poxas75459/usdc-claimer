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
    "4sUnShqsp3PxVzLahmf9g6oGN6YKsGkBwJhrcXrxbBvu6bbKownsfScomEtBP422p7VNkQQYh3eyNxXyUUB4WnhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531YVkahn5m7EmtjUqajcta6cXx2kF4X7nByLpxSrc8WEai8YctUx3tVXAFFip7UDdDzVrSpCQRQX6Gb6YudedAt",
  "key1": "zLyaS1Tmy9P9Lyz77T1MYwnp99fnoRKxWJvHW2N6BuaqUfWFyYfHNnagYqa397K62j2QzfaViWNboJ3iMsDftRX",
  "key2": "2W1CEr8tdBnrV51yYjhKcrSSoWNGtKAW6YRcJazGZHGyBycemKboE3UCN2YBJLpNrb8nzTJQCL7ZruVgFMprqHCB",
  "key3": "3DZPZgTh9qoK2iDkAc3zMZcRA6bJmVe1XkGBqoHMtCmZFHrQQ3ALrgymvjR9sNEbPZAbc9JmymaE5Smw7bZuq8Hx",
  "key4": "5ABesreY34wt4gy9pLSMfPtGZFrPFA76tarq3Dx76bE4ZC98xcjRYVeYh1XxyVXNcH9g5S24Lv5YQBop8ryENqrw",
  "key5": "5kJ8vwtwAyRiK8jD5AVhnLYHCspSbwWXA3SFKm3onNA6ZhDX5LjHLMu6qCds5egxNiuhqmiUL8x5DRnDAnPr4Bh",
  "key6": "3RrnYnKNhjWk2GkPWWsCwwtQYZ7CjnJKCm38QyFUfN7ZquHRp6hNpZi2sS12V9Z8CbzxVGRYwGp1EtfbkX1KU7KR",
  "key7": "3f6vQnMAuihJNPGZoebiiw4bqD7G8YhrgxqCjKtDJqmVQZtgSYrLrAS2TEqoVFuGheep2zwBuXCGmqdaVk6qJSLv",
  "key8": "3A2SKHWtYkVGsxZohLg1xDC4K5hBKVGv92z839JGc9DdLpNBP4rPUKxCFeaxywuQK8VXM1pP1W9wBVWphGK5eZci",
  "key9": "59fuK177guMe8UPYCjUo9UF2fwBuvu35GXYga9bLfhHK1TEjX9dvkvnmrmYoxdF8CN8HtdyLGjikrEFNsWoryeTK",
  "key10": "3TX6P53uMEQjwd866GzfYcT3JhhfCBKcB8sqHZfkEa9AiSvch7hZMHcv8Ykn7pQrKXWLurs2HqktUGpr25h6wwv8",
  "key11": "5dTabbxoWvsTK2vTKsLHBXJc7EUMVDXk2KEE7VLDfFA3FxvqJRXph2gfnv5MMmG1eqq6i98JhHknNFj9zGmpuLmn",
  "key12": "5FHV8baCHHeCfk6Wx4KQiMjCPvHpRkqjc4CigxeoPsxtzELYWPiXnLhkYyWy47z5tSRJHLF5tR1BsFmrRDq4ky89",
  "key13": "2JosF4dKUs2ChvJUxKMsDr3hYsTBYgX73NYauAZNffrUQ8mkHD93jAN6h9WtLe1qLSCuLowvYP5rk9b5o5tNWLM9",
  "key14": "dCtQpK9G512RPxCBwEfqzbDGSa7L5sQbj85ctLcNm81XuMqhe34UyEWa6ywBvfepKnw6VdYMudQDY1YGm7y6Urq",
  "key15": "5eDTWEibpM7z39zfZ7h5ojwg88878oodGSkf3bcMpeuHwCEx7nqzYSvQCQkkQMevngsfiAddJGymXDknb6ZMnWzB",
  "key16": "nKbCAFgHViFeyWPoqY3jKdzjXR2NZnfcTSdwNfhkgPHrAhc7zgejnQJVKzFV7JcEckbnSE8Pj2qKXfw6X8wV4Y8",
  "key17": "67HWTBvGhjaeQXYXjYP23kFkS9GAgbNFV4yCwqCVDkUe3FTYxGLmKcfzJyACqpHmuupBizBPtjasvmPGuRFrFdsE",
  "key18": "2KbDsNoWnknPtEjD3mFaJVCXcdX1RWxFgNHU3GXPznEBDZXrnUKzm9nJ78Ak7auARcRfrvJk6u75UmGX1Avk9gbu",
  "key19": "1exMwXU5LaA6m27ocbNC1vewKGLGPKw6txmYDfGLnNxFHrx3gR4qZVcHR9LaoTykqrf4PquYfqYJhMvdW6CrK8T",
  "key20": "2H4yTy2SMB7FG6bvcxtEXVxFeaR1JJYXT7h7qj9v4F5pkBpG8iPiA7iTfFjtG54dkH49otEcjxr7XfAY3DqHyaZP",
  "key21": "5Pt6C7deRNhfZbotC2FUhfsX8hxYiEffNPyT2scXjzgZFvacW3aJDaNvqhQo7rucJWoNwCXvUFqaXBk3VdvQEFFP",
  "key22": "2isM6Kj4z3asMSAyeaJFpNJZMn2XZR5fQJ3M91enpJPZ9YMa9NNrkrGJzxVmWbzkCvbttu6WUtqazXdSRXo5vLmH",
  "key23": "f8Uwczd48hfEnroeiN1QSc9n5mLhijhHQcwmXgiWV1s93Z5jEbLRjw24hc3uC5CcF5LPng6C9RaKJ4eh3Y8FuXv",
  "key24": "ZqgX2WourB7wrvFiHLfPCjV86aNJfAQLRSh2ezVFsuS7dNL9UhCwrkJecSE29kXrsp5GemfZ6ryeu4WuggM8zyk",
  "key25": "94K8Sid8rLfwv9BfRWez6pC2UJQ9T8Y7MLA5oRHwTLaPKaTDmsqyDKoGR1oEaV7Y1ka2YJ2vbEGp34L2mAWSNwF",
  "key26": "4fAL6eSprtSxVX4vWvGiKYyXXai9DMSy1MFSYu9kub1j9qVrB7wC9uueUBdbdaE5EadTMdjtjcQGxjt5oMcifbm3",
  "key27": "2cL2CtGyj1vL5x4KSxW9SmvXw8xEb6GFjzA4dNQQLih9aWkHeBscs3D4HqTw1FooFbsFB74a2ijeBfHfeLycHutz",
  "key28": "3xf23PvtvdjZCMKeSDFpeMGx4xqzyxu3Aicq5NgshYw3auViGJ8VKg1Q2f9b2XBztTTqnLMLZd5KkGXLcazhgP1n",
  "key29": "6v3FdBeZAB9D7cdKG8kuUVnmWj3zPaNpdHWvzEDPhC9DXXgTEGNBLfLRDZk7heHs99VNBDMkyjYUqH5Rq1ShyVs",
  "key30": "3Scarp3h4NrB8R4u9hNVTxoP6AhnDLE9BmeX1xsEeBY7p2dXoLxjB78ZV2SqSf2HrLbvZD5YZ8N2FQi1RFY8uYE",
  "key31": "UZ8vX3F6ftz5QRtAUdvDWR6YguaffH9oHGvrc8bJ5sCa8MGhq1Pk5igWUeHK2izrHuFukXjQHuzDuN6hGwvzHhR",
  "key32": "3vJGvao45v2uyXq7AsgLTgu7NgSQZnub2buhqPhFHvPcWSF2AdqdKCGv2N1chWwsrKtNBy4GiQtbM5A68zJHKsMC",
  "key33": "3svdmfXb7dqZMSaok5vnPt3QJSzDWt5nqSDEdrX8gHx1rit29GnuJ4BiP93edU6fabhMja3Z9BZn8frjBY94NzSf",
  "key34": "5dsDGMYZoxXYRqV8NTaRfXJNqCjRNQhUNvUYuNhzAFeYrSrNFLmeLVRvsspAn2k31Euk7AnfkPRTp1biWx729rZs",
  "key35": "2um3qKTR9ZhxW2J6BiL26riqwpdKAp97HRKxLCpTqAaLcXjcuvuADNFrRrRqVofN2qErVv7KfSsnesUhcoYjmUa5",
  "key36": "2if2mkgdACm3xWHQZAYsY9ApDmeAfNMYmV6NPa8tyREBKRkyn9cQqLm8SSvyghdfi7qoq8b1hW3KxwXrBFeUUSiW",
  "key37": "4Kb7gPHf8Hhj78ukX9VsAV2EHSa4xz8pis8voy1vkdVPeTfsJiwC9qJD8ms5Qfo942zsSD958Edqt72URk41uE4d",
  "key38": "r4kGbofNFPmw1p7uC64sTGKaXue3HaYf5JUubgfzwHdvAXAzfu3ELL6DW6hPdM3h6NXnZJcP69xhrLTkthF794u",
  "key39": "4CJYWvJabiDstgrpg2tFBvm6QvnBtk4NZSNYuVK45Uefkh78nrpxu2pHbHU5jCFQmyFYH9Y8RPjXd5DDJAQCpR6P",
  "key40": "4bAwYDJRcSayJ4cWXFH9xpewSSDoWPDDsAyKzgHqrTXXH9QBuK4zCkDWCYHuz89CAfRwDjpuBfmUD5DmxGSdQxg6",
  "key41": "5hWC3eFfUvUzxacen7grEiFCWn4SdM7aXPbSAbMCNFCPi92DnmCKk939yC5wHkHGsqsLj31ozAb27zrqubtnEYfF",
  "key42": "5EhChGN53DSHPrXWYEmzcY5PkYkaRt6w3WBhs4XwaCw7WSuvgxkrpz78oQYApyx264deetX1Jjhyw5sn9xHPpyYz",
  "key43": "2Ae9VE93hABRNCrFAkuLJxhemqnDhAk3TNjyYgpUHynYACDBRDTSKbCjyK558xAbfTvEFMU9DTNeqiWztnDfBXKU",
  "key44": "3pUweVaFJSfWe7hLf9a6hUXDyTT91YfHgswRwmD5VQaHAWBi74fLQitcXXpiQq1PQz3uuKAgxpSNsVivNZWNwB2e",
  "key45": "2tPczMMyGdvxf8hoJgPwPUUmv1YJfhRQxtyBejYXYqqVSzDp5v6nfGtjEfEPoRzAw63sYGRRqQDWJVjU5ybu89B6",
  "key46": "Rh4PFueqqrN7GAv3MyE8KwzgrHSh4YGJFV9pReDfA3Dgfm4Vo4uebRKcGkeJPCm7hER9ZPDHMZNSR7bqmEB3dQi"
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
