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
    "4hAoF62veuLFbCcPzZ4QJcZD7CinFisMZcE4nh68bT4yxajHyxACZg4wMkY7dpnJoU8KfzDtVtaorUA3aYJhgm9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAZp2BJpPYUnLkmDdDXhvrowhCs622t8APAz9pU7UgeGurd6UEGahRDcD31UWKrGcPV2A79KGRr1Nzvatkfh5Wv",
  "key1": "4Vn8j8GKzXjPgqYcNu3Xg28wfHndrUbPxA4rx7hsxGwPWyZ5k7xurkLvPNktS9r24v35oXD8jSp2Ja8c96GafDqv",
  "key2": "y2wDu6meckJy1Eve1SMziBSLyoiKGp4zoNgxiFy9o2NAt9HFiyGNRA5mRSSLzDKagYcRpHMNvBhwt81KSQJepuj",
  "key3": "28dUH7E5HADhcoBgnLPadZgmqpVp7JPzTzVBVtWvCds2Ex9uB9mZdmK57uRuQashN7oFnhtRVFybPgRbg8G9tnAd",
  "key4": "4zLMVS4Yda3RmSVA9syw9enFjCsrnFqH8PyrQqSnWkdX5ikaecMdiCTL1K1vbLdxRSFjVAPbShAumSVMQ7peRsqM",
  "key5": "4mmpQj1PSy2nMqmeGgHjh4uAS5JmXmYEy6HNCVdryUpf92APaVisKjE38TMzQeFhDXEt4w9i4cjLkWir3Gx2bn71",
  "key6": "E5MTqU8mtSxSrLgF3amhR58ZaKXGQLrqoVxV6p9XKA5iso2tC2yVeKDj144hB496zaXj1aMabu24gk2pKDRX7wE",
  "key7": "2reRqvy3RWxdE2WvDjmR6G3UpzNUNVMFZkxpyLwdWqCmkuZsxbVBYK4t1u5ssRmwUyJhW9gFbapmjLNaid1REYkE",
  "key8": "49nMv1xaD1UPNKB2fYMXM6naZ6UThh1btHNsPudK2tLA2UPRg55XVF7VEtyUryEa94m2kcqzZhL4NVQ8SUCPtY2L",
  "key9": "4HdhVBarLpEfiykW6GnodwbMuSmQ6EwZYpcmeXGPcwrQ1aS2JQVzNTd1b4dfX5Wkcy4fHw6LJuZnsiwnzLy5BrWr",
  "key10": "2prGFFvYj677mdLW9qb2Y93kyTX8gjXGhYvxKN8oePYiZrWDwPVxbq8bAe3KbprG19cMJYAyFzM6JgwmudRmovRu",
  "key11": "5xWuF7DYArNWm4qiiFxQGnaPjSX7CD2y3aseLhajxZZ4xyoJrcX3p8PjpCgQaazi6niK3zcUqHfYiVq5qzj2sWsi",
  "key12": "2WPcDGjcBgJSfGwYYnuYub1jh7azLbDXjN5F8dXYbYxfnPNhp3EJ2mBGhgGWhqkysnoSNTioRQCkxYo9H7qpviZ4",
  "key13": "64iWk1swXX4CeLnQ6PcgbBGhGmbJDUq2mU9UENtdQ4bPaWomWcEJSCXTwf4wqECNoDRtda8SwZaMpwaQw9SbQzkQ",
  "key14": "5bmGtYkgKMpAVyGFxZMy9JXP8tATFsrbXqERMMgVqbmJVU2zC4HJw6VnyWptaWJ6oAf6xCbzyfQN2zFPvYaEK7e2",
  "key15": "2CtZcqHjXYKVjYHDM3Ew6WBaQThFXpQbBPaPgz2uWN8szAEq9bLDQJ3cochndJK3LML55bdJE2xgsYuyjfdnN6Mi",
  "key16": "3FY6UH7mgjgPypz45vQm8yVQcmwPqrV1b5ERLUj14ySCzQ14posK14wCeBeq5896m1exXwqtTvUDDT66pagtrqqB",
  "key17": "2QvYwqhYhb2Jt73cGktFxtQGgbTXatkQTeFVa6jL85UN9thhvYAXEHQSxfxDsm6VMisfDUWWHFTS9fPRNKvjNeGg",
  "key18": "3Bps2eWyznH3eGt5updgVdtfsQ1K9tWhopH3MQRez8EWu6sk5ycLh7Bpxd993RQoyVrgi294gPuTEG55WgqGuNB7",
  "key19": "4Z7hAqLxoqizBmQYKFZq9mj45enF2jeNstjVH5xHr5wvo1YiMHiap5MN7Edb9uP2Jn21itGjAmNrHntjBH7ewbRC",
  "key20": "3VTRiMKp5wNXiWjERAvzLCtNUMtpRqo1wmDFneN8NpwaM6gP99cAtbTv52MrZv1A28omNYDwK1sKVKKmWV4qmgnm",
  "key21": "5RLSu8jtSUxqShWhdVe2TDxQUMZuzeX3Fb2xpJBnsvJpSuu3rBTq4kW44Wb9tt1R9CQ8nqzBYgXA5NZNJAmj7nRk",
  "key22": "5KaHQ2SB7TM2U9uZ8QJ2zTVXaCTFUc8YUDmVV59dibdmM5T7TeDnQH3N5GcYCaeLX4dk2d7skx8wrqLwvAMnwDrp",
  "key23": "4V1bAgTUT34EWgu3g8NvKzHWozhNKeSFxhXgiM9BtrWvXu5HzT9dA3eKMqPoKDpY9gvNpv6WiJkimHf52znxv7b2",
  "key24": "5rsjBJChhuAD64srLoYwVda741e8CuDPoe5hgdGYS1e5J2PA1Tjb7oUdDqz5WYjCZBznQd1ypzcTxErqxNgrLe4R",
  "key25": "wG7xWcEfYDAnkeHhATMkDgKDHPBi9FpLVUgxF9FXdrSLjf3LQ98fLeUVHE13TbQfoRgKKy5Y9t2sZxyWpE9r3e3",
  "key26": "5JUFG19vm23bdgE3zBXgPx7sQyNhf46kVzQvAYcEqPbNyey8fzsijfKXjiuEBvyZsCNwhFkeNLyRqLfjk2FxNRng",
  "key27": "5mmw2XAu9m99LR1FEiJzF5KmG6RvydwXha8178pBJwmPP3kcqMFjbncoTb8FPNvmtM5qQGfZ9agoiHigdGJtaExQ",
  "key28": "23aJSWgssim1W4yFg7SbGaj7bTuTtGRHDhiSqDsnm4cfT9hMiwqQrNdt67NCtkcAKsbeQ3LVAy7FdHLJtPJCqP3X",
  "key29": "zPc25AuMtkxTjrd4wqQwaovnRi6NdZW6yPpsmaoK2iWE5Xn9SNH8EWATromj1NyvSMvoCE4ii1cU9bzdUEz8mPr",
  "key30": "5Rh71CGMt9oFMbRgUYGeYqp3ejeG2bWE9stEihnq8D1KYX62tYfPAEKPrRZu5AR9Ek8xV2bUidzYdHYYebtD29FJ",
  "key31": "5bbb6Sh9k18UmaYnJjaBeXHoiS8HzB7TaFFxJHDoAVCfEaMtDEMo7mVTLRn16riNjzDA1pRUezNqRx2b4hGFXPQT",
  "key32": "2gESPaXeiR5Qu9a5xMfsoBDXd7DhvoBUVvWf699RgPQ4fRGFumZFEhMvvD9sDcxphPXorH9pu2LmDu24CxNLrmpq",
  "key33": "28vZSFRY714HT3yEUZc7P5F5DExg61fvpyS823FgmyEQuSGmjzw5P3fF3M76Lw1G9LGQRkgPTYE4JPP1wL4eNJSk",
  "key34": "5PmP4FvqtSfhVMJXBaNacUZjrahvKAizNsFUrJPFUdbxKz5WhexUqagJh3RVRZDPsP6wR5dZAjNW1EA7S1kq59Kk",
  "key35": "2wrpWLtUJEoRCkuUbK5Sfk51ntYXcQcKpSGixX6xoz6Q6D3Yv1NVgcWDiVnU232J9gq12bNKiJkdFMckPNn1thZU",
  "key36": "4dTzJSWPZ8HJ1HrneT8QAYgr8Qndju4c59CdvYGaeVhNL4d8qFzvkJNPahhXv5Q14Wx58Us9nTVeZzwayer5WbaR",
  "key37": "2rwkUK7T8toeGAEmWwX7AHabiyT4kFdhgsKoTeAg74JfsMU21AyS6V5C5PJVB1Rf8QTHVmH7dVG8SrJsrvfeYXh9",
  "key38": "51wkujQKRNXPbjrNYzxDYtspLMCAGCeDJmWKSTMJWP4TtWtvXYzp5U9D4xyQsMvAikFKCEZT7EASi1sZjdDugxGn",
  "key39": "3YeAG1cYNhWxvKfDfUja6LGxCgbbhoQiQ81nbS4rjPw8gAzGxLq8HqbewVS7u4ZFF96FPnfkSkGTGXRRYUmjFYc4",
  "key40": "66cF3kSUnxg8E2MBs9LeDmx3iTsMEGscEbEieF3pKAV2pEfCS6RYwKKzKFX5z5dh2GVMfrByvcHdzpZQA4tgRLPh",
  "key41": "4XjPLQWRV5kayMLfZZj4h57gniJ6CbaDWigETBb6wc8VpzHftmdtxCo3TuccnWf1fU5QE1jrFBZQ21nkgwCjqXbP",
  "key42": "5dT8oFPm4cYAjxCxvTDekwgdAiQKD2VYdznpufukdwrjwXeGtk82fDwA2Zc7kZvczowXkeiLt2eAFqqPLbeaUhM8",
  "key43": "3VA1Yud67dMbtFYNtiDA4782KMPnncJJjQQaarXvudYVPuTtfiS8dSTAWPDfidTLc7CZfAXMurABwdqxiNS84Dni",
  "key44": "5R4RqevfEnfcnqBc1A6qrVyXYJjkxdYdo5wvaqmtMeTPrcWgsQ4fhfmrnMGVkp46iYeZeRukQdszSoZcV7QUKfgT",
  "key45": "2yoEG94jMVVwyfN5EhL4wd3dzmtyeZGsPbodbksqBWcpox86Tnfo7Qt4mNvqtypnAE9VoxicsXfo4hCcsru2gQtL",
  "key46": "Wgu68bVN2Ku9kHXixgbtDokfvKLhgfEoiCEJeeU8vvfqkT66Vn85U43AJXQ9F1T7XQzCpssEeViww11dfdXXw3q",
  "key47": "YbyxB5qN8djgNA8fRF8rL4BmEAesJNVHNRoT8hqh2EznJ6Y4iijuioJKJd8pv578osRQAuqjm4E6idX7WpEp49Y",
  "key48": "3KG5oSZFq6jNacd8kuMs6hdTKkq7zJmVwG22UwWWrbYHcttWFHhJikqefs35j5cPnMqQHruJfLW7yYeiReYyYth8",
  "key49": "2MfVkuo22WZURtwgRqqiQjSpzrqFkbqA6bkXXoy2JASbj6Gr8Bzirp2oxuNHgQCHCxfiYY3Fan1d5D3mBW9xn3rA"
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
