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
    "4ko1zuYVQh8NLnwPWadizJHnWGofsmVJzkD2HsBEiGAX5ANrmj5CrM4AGXqrcvjVu1BJPXZwjH3Kh7NFq1HUTiNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJ3gnQMn8Brapypa1ZPdmtSpnun4pKf9F8m1eEjZHceiaKnUYDeHb1TtXcuXKZABhb77mAqV4NTM5D2bNEUsW4Z",
  "key1": "3Ppu3XrBsHu5iuguS59Armx4mqMHUCDZB4raw8hSKKXYbxmNZzePD8AJ49DzcJixfrLvoMoqn66XjS2t9mRvZyCi",
  "key2": "25NsuQ4vGPwchjDBDsa9UEsSxd67BCaFC4KGaMqbjewwXX7BmbfxTDiTGjzHsb3otzAzHXaTFSBb6FDutZZvmahS",
  "key3": "U1EwJ8C9ewfAsDQ9Fc2WbBfXie6zx7hGAqR8H9tD3A25wVqfHifvvmPNN1A5CZjXUJDc8vRvGDGCNeNcW6HWr78",
  "key4": "9MvL7zbRgc7iqHBWJgp6DMG7ucZEypjNwHz1Dqik8ZQN2AfcgAPbw5J8NAjGLro7FCRVENbLXxj7bFfZqaahhaG",
  "key5": "iZGUzWTkEphWywopeLUE6iGBpbEVinfdoxoeEaPChxdzaKRyDsN429Gmip6nDZvDz4NKTN3T5aZ7gBcXFRPHecr",
  "key6": "d6ztVcZoUNwHqBSaqsGjz57WbnaHtE6HrSkVYCkqsqZUJ9cFkhW5zvkxrgCzbHQSVezYFhEACwimUmhH4Ay6Ppx",
  "key7": "4G4cUFMD4UV9iaZ8HqQQ7peqWwUJBxrzRnQ1gj6K9eDN6KhpqSv6mNHfnkdSiAQ7eDW6HR1WXSy2hQGbxwSdfBqF",
  "key8": "5H8mdLb5KxSnX5B9WmLnKXazUx1Xk7nfTV3YkXiG87xsGWxsyT3nqsXRYJQsjPmRW9fhzy6B5QALhDsqr8FCaeq6",
  "key9": "2NNZVYYsUU51RSQAtgGnvRaupF123XG9UcNDcZmcabHaSr18vAdLptBncM3c51uAuQz5S8oghn4fJcS496qPSxXt",
  "key10": "3aAFywu6hs68XTKDp8d4cdHvfsjE5kv3znhDDZzYmekun1opxK8ZiA7A135ztjK7N7XRGyuvdRCMKxQ9RQnQqSsd",
  "key11": "456ReUScmyB63MwP3swMSuuBG8HHtDMbyHA369K1g2AZTF6hbBgTxV3mpsFXbw7mrCWWqd3uCeGpw7KR3vkSSWQc",
  "key12": "DroeE11HVrv8GRzfWqeYNFnFJcF4CrPuhteQEykXEbuayhYuMNjUkLxxU8YZVqNZ9yTF45uB8wSnCaPGAH4kfcD",
  "key13": "2CP4paPxfiZVt6wZYobmozD4WWmWgo3wqn41ToJraqsNZhrZitdVLpkHoY9uwbAF66AvDMqGeYuj7V1a8vKMxZTa",
  "key14": "5fhztejP8UXUJev2TuiZ3pVtu2HqFgpKMG9DTNnrCTNAsZGUaXQEqRyKeD7cwEL32VZ47at1HVrjA8TJFvS4Z5RG",
  "key15": "5f4NWUMggFJVLxtuf5Fw6GwCfsEesQHT87K3xakUDRoqwcX5o5PeCZmkEfctSm6vnzbfd25BaW1jB6pJQ34s2jFE",
  "key16": "C19e5r7rCYc8Cpz8zsDDrhiPH6pbLvsiAUMKanZtdmN8PvwEuRvWCJenBdTzBnzx5dQn1g5Dv3ygguggq7EPhG2",
  "key17": "6S2ir9dVLm2RQK74aibL67zjBHF2w8HhQzZJ7Gp17CoLUHhigW5Nq2zMtZXnoruuzMnbY43wh5FdCQRNqdNGivV",
  "key18": "49WMvBN8hD2xb7JnQHNGKuE1QbAVWUsoYuUVLWi3tmHfHw6KZeGBAq8i5yULnjVPU2p8Bqc1Uvb66RyNtAEp7AY8",
  "key19": "3ztmAs6q1mWAttJ3GsjyBodU116nBETgX7WKgv76LRzjbZ75CimKr8tQSBXEBtygewdXLhm7NURz5kVGyRLrGzwq",
  "key20": "3DUJE2nTQngLaK3pLu3j252wmrSmh2r9DMcgURrezMuFzt4csvVeB5aw9nPCrd1wkeCRLnm6uuY6yUX7jNWW6fYM",
  "key21": "52EjghX45VXHGg4ZP1haGWSi7kCUBKPugQkmQzExHVob869zicULJnekXA5TjCahpNtzeUTXwGqzGbJ5N45swFv2",
  "key22": "3kfny79caGR21JXG5fEGuKafzVc53rRwArThcVoEPX5VgwFnoUgWtZHisYWPdt4sD9rtgHNzx3squzoL51C2ApxK",
  "key23": "66togb4WWTEHBmH5SFUDfzFp2aQd4A8VX38HzMRKatAuaHiZSfHsa9RVzeZeF13cbPAiGJpnaSpe6HgnNnFqJPm8",
  "key24": "38QUuTM5aut4yRaaoJKEDQnfMnXnwPWwVAEu4GHRvRWEvQde33FjVBDJsMNew69y47JTqB21J9hvhUFbAvye5uAM",
  "key25": "5q9T3r6YeMaYuoqqXnpvnJJNAvHJ3nLj9RqRgT1nYUxZ9z9LVViTimEJ9ydE76B2HaaCx2kKs8AJXeNmQneYh6Dv",
  "key26": "PucZYHdh6RbFu8sbeX2ADoSxkY7319GJK3DBMeLPG2s93HTkjrhFLjunee9Z6pn75VA7FwN3sBQ1eHULJyBG8Hu",
  "key27": "57ZcLsKkYTQjvSDSwiXGzkpXM6XXkef7ShRG1xtY5NUx9fznxDp7hG262MgLxNZ1eetdGQfaVSQ12T76cM6dkFV5",
  "key28": "5TYfpedZgzEp9PEimRu3GC1cnmWJybUV1WX7TcfY6VziQqL3WborUanV6cwCDJbfaaZdq7htCem6Y3BhgwhdMhg4",
  "key29": "57VocYBN9EX5eADcc5mtHpnKKeF4zCFVDqYNuxtAwCRYZBXpRSMEb5bbfFk4mrVTkN7WcLTQm4H2DL7CCmrSYHtF"
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
