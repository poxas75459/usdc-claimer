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
    "4EdVLKNVBQegW94pZ8ghobjXMFYwDqJeXvYTnYQEhb2xmPgd5E8ftbyXN3pR5Ub51mMyyzkX69ynuzaD1ADPmmgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DQcEoY4sZCroAHQbusm4H1sfZKeDASDrJcENzni1mAzxvT2ge5DYhv2zC3YBCHx3U7A9zB7fL38MgsuyDtaNun",
  "key1": "4mi1x8qMDzWQsWi9nFxdJBGrvZrbabSnhxedK2ijgLzDYzhPk79HxA6M1CB8YcyEVcCceqxS6WHXn9yBupXikXL7",
  "key2": "2FJezjbbegiDznYpUMSF8F4sc3cH2DCpEbY1uKjomZXzcKvcP8mxptXLptQi4YfTHLwPq1SMLc1FugmhiEs2APrf",
  "key3": "KWLv7zwwN8LAXuyBDyLWAypxx6sDGWN2pvNuVCYRktxGiPP4rrTgAvHuG6BaxUbnnnptjcbTW9zMsPNGrvxZXTn",
  "key4": "4udXsB8kTq1dZfQKB3tcXp3KbsojHjuxu1P2Jk9oiH1fk8bYaDtNsh9YHHmsLWYsZjzKmGmtnbVhjRXgo6MKZAGS",
  "key5": "4gX7DonTfs8SwSe6PjuTuVbvcgFugc4u4Zwo8JHCCQtd6gMLGXFECXXxYBM59q65vBxz2LKTkmQanuH2kuojoYeP",
  "key6": "2F1awCYexPtReQ6voEyj3qx2EFyWcqfx9KMKuWtpmxu1uXTYdPKMk9Mkcb1zst7iawwyYEP7cMmMS1xrFd3VNoWR",
  "key7": "3DnVufVxbCaBjTahjUAw5xjZZrs2wJCGswiMdBkfyswvQ3UC6mm9T3pSYpcKfaLnQEfbvaXVrUDwUqL5hwX7eWDv",
  "key8": "XM7HXWpxfWVvZf2NM9CSHt223uAPpyjtbwqxEHu6QpJira698dDYLveM5f4XcNem3gQHtKjvW79VcNBF7Wj6vfF",
  "key9": "x8vAAC7aXu9VqKhfCexWfmJQ2cY1MwWMHQzXzHEkKZ9Bd2Ea5jc5cSR2xGQXgCsVnX4R3fwcWQFdoQvwFqxm4Bf",
  "key10": "wZmuKcCLP2H2kRDhR3vB7jkZ8SWQFCn93sTdPzeHXC4pS7x23FLN4QmBMPb1PDTf5j9Z2WBGXQiZEq5noVHwF6F",
  "key11": "oGS51F9j93izGMnfEVbaHXSiiuZvgSxSG8SeQPeCnQFvJZfcBVqzC4tc8rLX2hSGyFtMDiwtg8AAUpY1ch5Wt8K",
  "key12": "2s1LDz3Vos4Ep9oXJipqjAAbztRASSLdPVTchXC1XHV1s5bJ8uCzpKUN7W1u3MuG4kifsEDrndZuHpQbVQUpnMT2",
  "key13": "29pJ5QBPCN68KSEFSaS9GCdqiUSBHoUbrn6vj7xy44uBsxgfrZZdpzkZB39w54Y5FN5o7BKHXwvUTSDgUWzfjKvD",
  "key14": "3Y7fgShwx3Mw3AA9o2N3eLmKLnbsjrP1ZckUSzYnek57r7FkkV3hkkpZeZiJTT2174PVKZAhqb3Wh8SqWZhbztfb",
  "key15": "bwLZsUnFmr8T2G5gv3Wxsdezn9STxqCgHEBX8AaAfK1Y7H5jzAg65YyKo5Hn4PQ6o7qd5ibc6ioikx95CnhxhJY",
  "key16": "27BsLCs8unfg2Hrsnijp5GdsNetRZrN5BAKMZMNh6SpBweALbMk89qy832e45bZNubeFDCw5rXksY6WhQmEb6UPn",
  "key17": "5p1Y6wLuEMHQ1DG82KKE6wByT31HZNtEVzXNZtjgGQVHg5gz7A7zMd3Jb1DBAo4iZmoobu1WByDUJ98LHJhsUPQi",
  "key18": "4QwJgtyzSMyA1UuK7dMobKmiyCh7SfritqBJpLSvrczwknb2MUVtSaNGRyhspUiYJztKGMVaQpig4Y58bMwyLpN1",
  "key19": "2TujqzgKKtAWTVWXRjydiNekjgwabVEM8Vfr9CjvRroMaVhDVHDYzrKGFXND2oSTLeAnk7oGehgZb2sFreamzPzM",
  "key20": "4CoA6LxHcfqhimNP7fzWMdTPUuoaPwFjEHKo92t5hdcDMmBffyn69yxRg5Y7KJKp2fiem2E8q7SnYHBzHDsh9Abm",
  "key21": "62fj4hpEKkaRxiSWu4i8soqF8HXKo1YNmskUBkowGFLMFRTeRW4d4CoN6hAuXpphYSVQRGLgfaQ8pqu55ME4xZMN",
  "key22": "5zGLJYHHuEZC6Uv8aZwZqkqTm9uQbmqis5kzdLCgWofbrhBTS2GYH1TqPxh9hUiceoDfQ3ygqWecsxwqz6KfzsHS",
  "key23": "5WaMpmrnEL4pHD956qm4KJv7bAPiRzfer8X52J68rnXizpqHp5LM41kwhc6ismYVGVbBpGKsvzNyKt1ByE6hjC3W",
  "key24": "421R9n8eat5dV653QdRhqwUnDohuiX8HCqu9BZzHrezd1ircL77z7eAHwND6YFhryz3rawuDPnjMZM34S1sKDEAW",
  "key25": "53Uz6SJWSHCxJtpBYM5Vve31LaFyvco3jSDPfm7f9Nms5VLRRZ2KgeuwpGs4B1NnvRu4Vd3HHt5u674fWNxbzKap"
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
