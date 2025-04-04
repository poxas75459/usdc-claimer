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
    "4QXNNhdkemg5HqY8ZafEp4z5RTDPZMv6SGXKrS4MC1NQ574nGaY6Lwkh6VQfjTZ51MTLu9rwxEF2kuYxgmkJR1fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NrZfX61oFzBLEYo4swfmXWN2ymkAsUDYSZdv5K6wYemkZqYfKYtYjfHtbMn7rwiCNfGPAHiVLJb2LbJneiBb2k",
  "key1": "43PXhR2rZCDw4c3GZ9cpt4mAtg9ajQ1jBM5mLNC67D9WZvbfn6wZdxW9PNKqmsibK5SyF6DDNAXUUmyXd3mePQyQ",
  "key2": "2G7svEmWv25iCDiHQSV4jdgBS5FHsBP1WWNyzRBNm7MC4PYX8AarMd9njvcR2ufwPoTKmwCk7QmKw3ykdE4sY9kS",
  "key3": "3gu5pgVJCLsjVbPhJKS8DC19pBSgdgqjjp2dSjCGbtshiSuzi17pwKo6PbuQt8bZ1QDs7huySSTcSEQvym1QbYE3",
  "key4": "5B52vTz4FBpDfnmuZYMwZ1cirfc2z7HC6SPYBoWPLVbPvqhdLnnGrjSoG3HQ4aaVaxpzGWy4MAbX2YZUQuhtcXkp",
  "key5": "H4FkVCRfJ9Apm8uJzTtZVSLuMPzcnRN8mDPWbSTU4HRTJhBbbLS48Z6wkvQcgA3FChcJtcME9RgXipQtYAHW6so",
  "key6": "33HKUy4D7AGxMtHcSuXM7xhYkzzGe4VjiF83soyPQs92JrobGnm8ZiRedMCYioVyYbDnoPiVT468PeA2buAM7McS",
  "key7": "3Zm48s5KjUheEnpRzNnPdbxSMmcMrLzwhzF8ooNN4gESvsDthSiyEJDPkR5qwnn3EJdFzqQy9ApGheTwQkvw3nDh",
  "key8": "4sY3jyR34Rrmx7nyNkVfbZj9951Znjzx9bE5tzjsDAXU8WaykBG4D68vrGiPSqnYL7Ro1zHU21dWgdazymkSfXVb",
  "key9": "6bEqQMKN7haXwiqzNLRUEffm9SSzUAPRyxQqjzqysS7uj94yYPya1cLBG5hoK7wiGf9pN6EETAW6HZTVjUQBPj7",
  "key10": "4Tv7BrRUvqYMLXLJh14mQT9qsZ2dYcUGmcV6FSv3JUaUBQbBboaCQy5b9RjnJ91wNqJBPvS4vretnGTWLDjSjbes",
  "key11": "2cRCK58WXKuDVtU6dR3eDmBYNCBUGVFhh1sCXvH4TNKH3UbuM8TYB5xsMRZ4LLcTS6ZCPTB5sGHB9iVqwwuUhe4A",
  "key12": "4vbDpmUS3zFEhkdgmzb7TZxffuRUjHMgyBq5vdCgoNNNNngDZGYKK4DL6ZAH5xkznAW1DCUmmegEPXGGnTSf3giK",
  "key13": "5ycXnL9smS76kAGHZQx5D9ez3v87rGkn97QqeZgpNW8D7L9yRDHMRb5uUwnCxPhb15VKZkEE4qb1VuKt8BH2vWSW",
  "key14": "4S3oSan5nVQzVbhAZmHH22GZi87RAsoU4vCCBwBmzoVLscJGwb4sHp11aohgS4iJwQpziMcaoXyvBHrrPbtacdxg",
  "key15": "4xrMVwjrGecyQDSJvnjgZv1rGkVjqtvhpsVwPZ5s1VNuEZGNQLhNcmQGAjbqNdYs3Pwoeasb8hyCYNbh5cHQY4hy",
  "key16": "pyYJckNmSE2iLpfr7NE16DSUzYFKwJGJkFGAQrpFs1fCGpYgD67RWR359ZiwWsHjZVLvV89wLqAhEEqKdwGgCcf",
  "key17": "2QraLUdztUdZVSYvsL7grkRUFXR59ZS8TuSdjJUyiUUaj2yQPZQ5hdoA6WwJWEYEze59UFzFZJx3Bx6wpUZkAbCj",
  "key18": "42reKY5F3Lw2ssvWQVNE2NoNGrnL9AkwsNAfNSiApz4j1ALXtCBw2Vabqfb7aRfnSEUCSSX25nqC9JM6gKBSaUw7",
  "key19": "3ZKRsEvcV9X9qyhajBavyTA5q4r6jMr5ZGhgPGzQnoZuivcq3Vgvpdf7ppjj51HC27JUpx2Q1jgZtBh8b5NUZYo4",
  "key20": "26nSMjqQtbbTNzGoLDRi4yRWRw9hWpeuaHNrBp3wCSvxMskEx6CVfDzkTuW1icYnsDHnzMY48R4JWNb4h7AD26kn",
  "key21": "25GTd69wN8HkpwHMKbmRZSgcZSdiotJbpoBG35q4b3Xp1Wr5rHXw7KRtPABs7vxjCbrgiK1SG1UBe6B3qFdLWJ8F",
  "key22": "2B1S55jK2kGL3Y2RJLbZrj3kbnEuSVHyL7jSy11sqwycCoDcCDPje4Dh4pf1Wz7aYyu4uwL7pdZnoFfUBW1EDkBL",
  "key23": "5fozbbT9BW3S1Y4ppADqhBpbtNUuCdj6tLHZi2B1u6mMp27ppBpLiozjkrJwpQGJ6vGwhBwXmxbLCTNEWN9mjmSu",
  "key24": "21HKeri4nDnPhWBu31rpk58byX6ZkAHG5KrzcTk9buH2S8UsGxyKmxeGeRDuzq1WJzWpsadgCuy3wHDM8vf58eXt",
  "key25": "52gKUPH6JkuT2ALvdzNzQxADDuqeWTXnLHKygAJLhQ7FmPJWPe5jDSrDJL1m2fu7YzaMHTe2NfX4zbr6zBv9ysXY",
  "key26": "2KNGPPTq35QDD8gyLqLiTTktjA1cJBdK19SUoQyZDmAGy3xKRwsyYSWCc9GwUZTBvC63Y8nmrBdyi6vA2q5AwNPe",
  "key27": "4hPCSbMyut4qrVuLEW13aaujqw6yApTbuJN3tUuMdkZQQ6nBFqLM7vXm5WXAr8MuWuu3GdT2kuPT1YEgKTCk5w6o",
  "key28": "2qFgebFeUtGmnjRmY9hWDZgR4zBTwA1L56kH7P6QynRjFZRYNVgJN1NxKygiWvLm5Ft2VGBLyGXDSUzeQAD3oRFj",
  "key29": "4qko46pMWL2hbUFiDSN4Xk6MP5dLpN6jR1g2dmRkYAabe9xxAv1sWmu2K8sDEzbfLHCd3zxNJTnT9A8pLfNzf8dy",
  "key30": "3eeDnpap7QsqdwU51i4964uu4BQkPrWAwF2VvRUyM3jJN1tEG4de9c2reoGLzNjhbkxZRxk83nfdCsXzNVMEvs3K",
  "key31": "4qXCMwHwDhQxDKK51D8aDq9BnGr8oWvkew9yyrXdZSGoRsEJ69VZ47GZo5o4g89B2GHmL5nt95JsZK7QUzGdVxjL",
  "key32": "3CskLLKXwnsxPGUYRDviTXXanqZuULVdTt5THYY29NU4SFve3xMWXKkYZ8y8nFwYHyP3wpUxNNp3F9k3mGubxm8v",
  "key33": "4v1cdRhZTtBoaqUup4mF39gYC7JwgLEZ8dWKypaQq3FHUJUpprGbdyRnmeBntwnEhVXuK7qqGNxvFCQ6Re8ech5J"
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
