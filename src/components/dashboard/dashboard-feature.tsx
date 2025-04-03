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
    "Jz1FSBKpYa9Wgq3bVhvxWZ9zHEqvVgS96oJFhTXknYkzFcB4XdiEo3q8ghEVRWz7Sk4QvnKCJAiFY5SEN9mfMfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wv6Dr4qtCXh7wxLRbHS8AtLUVujczoQiXziN4ab6vSbc9dnkJyN4ueTcpkkVeJrtzZTvqAnNh8ETYTxB1Dnxmgi",
  "key1": "4cm3XG8ihv7Sv5h6DxLmwFLBJmdxswfW57mr4uCwi2ZUN1e2vpsLbFHQcwGsVLMaXddGBoqzNKVzQ1vSNGsMXgVr",
  "key2": "37bUzttczzvWVwjUG8K7uWPvY2rwyDKuwDKZQKoQCi1DsZbgaL29dzapBKZzJzAiUdvWfwXGAC6xntnmA5GhrJ9Z",
  "key3": "txR8pAFSXa3pw8BL1pbhvBNVatc4XuBfG3JdmLo1dDqbyAmJDNm9866uqgf5DkZ45xmcQuRSPobc23zYGQzTQy5",
  "key4": "5F8Q7nUyVspmaDNDSjk8UuxmSR4iunWYj7oMcXBMeZHy3AyrQsUWmLjvfs9DcHXtEsxKyKQfV9GBhxtUtY94Qyfj",
  "key5": "5gU8GWQYCexqFTCsUjvhrdBJ4rjFwjQ3SF9GmAXjeA9SCn5zB738Zf1hyXqmdtYUgnPrprW2ewTNbcw7YTM7Gs1Q",
  "key6": "657q5sefQzvwMeGAiAwk9aULbRJj6K779AcQFDqBKbTP4riPxBn5ZTCyWoRro42gtp9bRVFsc3kQ1tFUhLGj9C2o",
  "key7": "62JcDRnnUaWJoTH2bHeu292jqueWGDgkJt7Bo8gNTP89Q7b6coYYEVJ98kYgnynUBC9v8GRwNTSzTAGeG6aRMcVg",
  "key8": "2finFZLoTvXoZ6YQwotsKztMvN4qCx41ie5kovv2K1KW6JcpjG6tP9sJ2PwsYJ15dWmpYidQXLfwEchgk3WzGkBr",
  "key9": "4qbV5hftWpdC5DyGNwfuyW9E7GKRc6zymkpcDjQgzJLzmKFcQd33tTuMg2JVKLKMGCNahRwsEy6UfAQkNoVf1Qyz",
  "key10": "2ZDa56Pxny4SYhoiWgzK9iUNEgZVMBnH2KuxpVQwBw6i5cDq9BvkaAYhpVMAsAgE49R56qTzHieuUoD7JQZ1Dysp",
  "key11": "48F7T1RzC1EB4qzJGkA8aHx6R2tVtJZsG2NhFRLUp97T8n1RsTJ4gPPhkc8HhC7aF87LkWJHk1wYT8CoZ111d4vh",
  "key12": "3CR7BnT52JevvNUT8erDGXY17fQSuHn2HDR5e83mtGdzu4m1unWDYWeNSnGML8kUuxHfhT2L4gWuXmx4XyP8VhwM",
  "key13": "2G2P4ZjKJcva1xaDkohW55qHdbXYDuRWdnVFw9VmVDffvr3aR4gzA7emCkrjo4iMGbXksdMW4pzr2Js6nrQMqq98",
  "key14": "53u4CsYg5VyAKMrZS7R6bdzvXbJp87p9EfWsQp6nRLPdx831fsHoPQ3iDFvBshKjEjLXSahwrU7ob4LHuVp2vAoe",
  "key15": "3n2YipoAEkYvop7sUqVziGuvNK6f5sVSbsZ6PGybN1o75qHcxcReuRFZqmrBo91nSnLQ4DPandLUuQjnaSSPdFvm",
  "key16": "38dds3qwe4KZhLDJguZrWZTFfKJKetuiAtK5BZcSdxbGHrru9Eds6JoyN1MWvnwiWzwGDkytYhtxRpW1MpLxbJMR",
  "key17": "yr8fzjavn9Bs6mJJmu68VqhtmezWeJuQCCkCRKbbfhCt5QYf7Tcxew4erhcyXePXfKVT22dwzcjmTZp7ZCBopLA",
  "key18": "2iA5KV2NDJ8pQwzhigLqxQfmqsfyQNiCXGjLnsJkdrHyny9mCEWHc4xEYtKHNpuRNnrsRUs4GyyXrxSVNS2wREyW",
  "key19": "24m76uCRgPdAS66ssrxrSCr1dfkdfFEj13a5fTFB7BQVkJpU6PZL5xdTDnEV6ZQ9JqbqqUStZWmzuUb8jNJjr7MN",
  "key20": "FftS7oxvELtKuvW4Zqf6eXkF8Z9YHerxdmaLH5Q6vAKxkM9RLvXRMYD1B8oSvyVtmwFGMkFAaC8pkZBHgbKWr1k",
  "key21": "4JkTKEum2DKmEGSWWUm5CCn4UZYQ7z99AwPt2j2oFCe9yAwgCrva9kBZ1UvjE3uboHe84HVEaefBcwUE1imHyyn4",
  "key22": "3dGLL13VRNUFtJGTA8osVCV73SaSnrCU4E96kNDhF1E6QZcC2CzB3vAAmLQmpBD7A9yiThDqfT1j77dj35rLSBLB",
  "key23": "3UiA5dKCfxDk6PKHmRr67sapABx1VNq5eRBJBdxWxmuL7r3BnkAYh8uXD5LeDz5NRgetH1ZLivubrgoTBPRVjphN",
  "key24": "P1cW1Uzre2EebGx4RvvKTW74NtSQreJmkxWyvp1hhTpBU6mA5gHjBJoLHfBV6CAJ8G7tYUQ38cfsbu25V7fLhwJ",
  "key25": "2MEuKgkFhtVHqBc3XVysUukunhVr5NV9oMX9C3EopLAXSm2abRxCtsBETUmh4eqbjsQ1zFk34sHjqT2k1wSHr6jz",
  "key26": "3CxFLeK6sRK1X3evkXkeR1Eesb2EjbMPRL1GoZZwakCofs47eKerviGKfYdb6W4LDCcPFU7vP9grEwgbdkhfNhWd",
  "key27": "63zwgBh6FYe1uJG73vNiMJAr5Tr1Z5U7Hf1jUTiYLQ4SPRCfpGLKVwx754D6qHSFchP11ksRdQ4i4L3M4SLGXC2x",
  "key28": "3UimG9KRWUFrdw3fsQFPsHEroX9gfWVQkbaeXk3pTxPrLg2r76qwJ7ZzmxwJiK8LGE1G9o6RaXtLEm43HRJzNEf4",
  "key29": "ywbTPBzo54GasvLd2V72pQ7Mo1VDBGLT8R5atbvXXvtJp7XZDTwL8E9gE5wqTZs6fsxPVQJAgbsPDzjvffNZpwc",
  "key30": "67k7XVD5q7AHWMP6t4ArDnfM1JwqFZDSkVwf7MUiFPuFLiJGSeJkMogggLfpksmWKtYBGECxmGTPWjyrk1hwDKnu",
  "key31": "5jN2Feub6iU48GvXoQzKLVEAxqzSH5w1b6DGUXCiZA1BQmAJ56GNDNMmw67VhvQt1RP3mxfoU6tzP6GpbPu3zGmj",
  "key32": "vRu5jrCt86wJT8kYR7pPYvpHMA9JZq7qTn29rEKsFh9Wnm9cYx3BJswEuxH7ynhdRwneNeP7PYY4LY5tgNJaQmB",
  "key33": "5CAVRHanyQbQum4YKK3GSbd3iXt1v7njYiFWYNiPxb2Vhuhn34N95BeCo2M9Uf9pJ69ZGAKqcZapUXica3rK69c6",
  "key34": "3Ey5vEHcLcLthvqikwHQ6mq4uTzZzkdUUcpMD6VRHs97QhBVEo4jM4AKLgAi4gzPp41tLJHmbcpWxvFRin2FUUXV",
  "key35": "3by7Sb8poTGXoRRheRzhWhC2mJw3L4cYx2kMjJMeYoEUS7SgUxyJwM9ZwtQYYew671C3ZQYv6Mgfb56HCqiqGTrf",
  "key36": "5hjG8ECa8SnLnaKxE9p5DMYKbMgsRitJbz8gLMkNt44NRhWddKV1x7eZaX7RM5vZaQHZBK2CW8rvBg6Y8x3wpRxk",
  "key37": "67qvrprkheGbK4Enr8nKxR6D5xa7zt5ZK5TjxkYxcJuuos1BYQerNfYtrhFfdJSkLSV3irXjCu8cZK4B2th6T9XX",
  "key38": "25pSKKz5AncBE6umtijtZYJdG31FNeyYMuv2NJAQW8pnWnp3MMxi6otvgyhkAbTJAX2DvuxHe7HhZy5SReU2ghpA",
  "key39": "16NUgFQFYX2JzK2vETLHXAR66JUDSYTuhAbbvRgnGuTqe6vWvGqFMxpNbjxNfHcyYRvkq3tYJw85oBKTTStpF4G",
  "key40": "3xSR6ecKBnukE8x2D533jV4u7H7p7Deww9VhU4KRqY6c4hmZr8xPHNjLou1NA452KoGDuMubfuP1Qn1zVwnPY5iM",
  "key41": "b6Q3wfLmCCgJxYaoSkdvQVHs8Xkjq6VGkYPkcj8axU1vkf6sQBAjVvKxgBPQaGtmgjWm3ahzLXEucT7qh8851cG"
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
