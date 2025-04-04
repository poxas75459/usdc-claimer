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
    "3uEoxw1pSSmfodGBsmp4uEychTVw4koE7YUoFeBisM5GztAMuo9Y7TbvKaifEX1Asd6xD5KjkU9HWAKUPe4oApyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWdxnaNWGXcNSVqDA8Zd2zgyv3VVL7JcJZeq4q5AU77EeeYi2WgfS8A6AH7yRgwEx1L2qELJBt6QfmCXVU24pBc",
  "key1": "2tudQJSqAGnNJZ2JXkqcq8ZB8BDWZhXBMjaaKNCWD6jckyPjnsvfPpynS2hhCpQBSPt1QnqHUX5UqwQXYSbrLP1m",
  "key2": "1s5DrXtnnniTQU2fYKSDFBs1pkt3cB9PuHtMDYbbLKgV6ZYqSxpSHjGnDyFiPHZi1NDJHTMt2CdR9ECSWzXP2CE",
  "key3": "VVVbboytDCWqCg51zZDogxgZ8pthZUgyWT3Y6dDd4UuNyqTZgLvxzVCgecWe4g6zxW6sNsC4SoaWe9uZ4WiP6dJ",
  "key4": "5MyBLBoS7v8zq4zo6Mzu8zpXCd8ShD7VWMJPATTJHkAawmFCGu2jfSzswNCcpM5pjgyz4HhmxSyZ7UYnBJhniF3V",
  "key5": "51R2Sg1FKE8LVYWnPjVZwMny1kUarMnopfcynA1s1SSQE86aNLHbsp7Y3n4TmpKT6F78Ve5xCt1qDxEvALgUQp8o",
  "key6": "3hMbe3ZoL2m4vPdioH7QQ72Qvz7f426vSfLcgPQ2gUS6ijcoQRcBLZ4P8WZn13DA28VHzrJYHii7YTMzTr28LZfW",
  "key7": "2cwPjpDyeke7DktQr4wVjQp45Q5qXj7RJaD9AqJMAs3oMw2TfQNpncfRtzc8BY7eB6GPPoTaxcxRs8W1tGuz8Yis",
  "key8": "3WS7M9nv6YztzXCdUkmTPEuVH4pwZ74s9kttwA1nraSeXtwtytRrpdQP8vutHQq1exZyaK8rZCyVoTyPjCA5MZTC",
  "key9": "WYikTkmJvdmJ1wquFcLHN4ANv7ChoMuTenVwuSAKnU14oBRX2nZqKsDxkHawkQC3Nc22pXxgqgLRmYq6LnwSVZo",
  "key10": "393GEwgYxHd918GiB9b95XvNsmec11ZLsutJfh73RvL8zXNjqmmek7yCSBgBJrgGMAGyHQHtzF9dtXPwJD8EQdv2",
  "key11": "3qMg9wT8EKHRGkST7GGSbJcn5s7hkAthRDLTudGy5m3ELMrxt2awT2VHVjECFZMrY9cG1MQesNESCCWvSmygkSix",
  "key12": "61sJJ8xdhXyx4BN8HCwhKtRAB5cnzhHnCTi5cd9jzu5821RpU5NTmRWTyiT8bHuDicYM15S23NnFQUzazHJK2jjR",
  "key13": "5SZo73cC5sycbtKT6kjvVL3PnTnJ3XM4qpr9kzLwn9GyjCh49SS31wd1aAwVF1WDraW8mYmRPaB38zw1zMxkvmDU",
  "key14": "67QuZ523y5tp69rPhFuRSnAk8pNJa87Lr1Cj2SzSDCxorHNZwEQ52Fam3fe2pzyz8vCnaoQnWR9cLkYJ9pCGntBf",
  "key15": "46U8YGyLCcj1YA21VPbBJ5XLcqH7QyXcZ4xx2SjkAMgUAK28F5QbKFyUnAQV9B42JANyAqhnpvWfJSctHHrCdGMy",
  "key16": "425Jw1Rt4fnquXT2BvPMUYg3R3bKBAuXBbbMxv3ma9PQ2wXxExADJ7MkQdMrKqfkW1inFo76ckQMHPvNPtF4bULi",
  "key17": "zYZ9jpwCeRymHP4MKkx5crWy8KnWeoGC5hzQCxBR5qAroL8vfhuA9PtYfFKCzhE3eQKDdxTyd5QnpNxq6mznnNH",
  "key18": "NWZHdjThtoGpG5aLnnV4bXohKjvNTK36MtQ1T5mZh4Fix5auMzHS3g86u7Ri2n6K7A5v78xF5g3p8uhD4oCraJw",
  "key19": "3WAWAqyJWADuUkrPFf2nA6MGqABmryw4KxqX5MHuB4c2kg5pe6x5UzZqJHmhcBQwo6PwaoQwJTsZTJA4gNtTX2qd",
  "key20": "At1F5uRmaMqySmWzYgFutfKobfKMkA2F7twD14eEG7k481Sw3missq7vF6ABjZb5mbiCr6zCY3x1qyUjCnzAJTB",
  "key21": "4SttMpiGKmgJmYrHuB3FJzZcCuSc3SmhcUUGswNf4TQ3PXMRhdkg5LbsCiGGykeuoUNrZYM45vKqTgHuJEFE2Wj3",
  "key22": "59d5Dh8VJEaa2bGSA12qUqsQp1yRDyWmnDJDCpAnqA31TBM6S5nTUjht4fjv7ZHsy47krjh2jL2UuPzg8u5txM8o",
  "key23": "YacvF8XqUvtXRYPoVP9gQMxtHNrzjVApMhJT7xaw1fVr9PEhYwsgCye3y8E79H9DsdiaiLgWH727BnUKLGHsPhu",
  "key24": "nCThC2f48he2ZiQeEc3tRb7UaoWTAg9gusPg82PAanNQvTH9CdFuUhCK7T7sZ1g3nRUobJWx8MumbbdcdWiwoUy",
  "key25": "4iw6Vjfu5zporWWMGHvdukXMU5716g1kvXbDYe1DpjZadhN9UFY1VayvffFyprYVgTyzCz4VynUgpBnfJQLDXTXJ"
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
