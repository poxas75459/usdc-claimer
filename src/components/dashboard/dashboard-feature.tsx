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
    "4jM69X6TWLNaMVEiXaMmZvAi8ZdGJK68Umqf9JqkQgdQxnzgmxzdLc5d6MFfcTfE3ZG7kwiZJGYAkLEKkApbQdXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yV17qHcwbUhdU2rZiivddWLuKpCANwGnRLdrs5iq3pvXEXEC8x8cQ9jh9v1X7arQaNJWYnAGaDg3jJNAQybjfDC",
  "key1": "2txdyHPrCo8jKyXmhS1eULLfmG38WpRn4SKDVPHPEPDPj9V4kHr25uKDw8tEYmqzHc6ybCFCgkw1s16h4MphutPH",
  "key2": "2Nf8KKa7hghy4gx3DxnxL9msqEExrudcmwRjDE3S7bd9ff6YWbCFEJ49gyWaQgDipqMrVj4jJ7jKMF3EbZFuwJAF",
  "key3": "3RNv1Lm6sjdjmUhTzB6QBR2Fei6CUwpd82VwtzK4uoMc9JTxnLg63mdshXqU4S99Z45X4N4Zm4ewVNnQNTH2AX7s",
  "key4": "3jM5apR7fm5wSWDZkCAztsuGL14QckSRco2nRnbFDsQhQ5Q9syzmbAxWkQex6UBySv3p8ZwF5Y8GaQPEJj2vDETr",
  "key5": "3PsVTCH4fPRhwXYYJ9XdN12LbCEMEv7gcaNKLasCNV3qW9k5T7sYAqquDjRac1na6ovVQvWNEoEigJf5P9wBvDof",
  "key6": "5N3yUk2QLBkTZ5vBRG12QVjHj8ATt39FzgpHdGgvcHs7iTQDHvVz5QB6dZrLG2apAUMAk3wJT5ppibubfdHmjkop",
  "key7": "zEjrrZama7ttecQ4bmJWQLSFE2DLQty94KRpoWkhqb3EPnAwFxavbJWoGbAihsfvXudRW5AF7emFWC7dVYKU8wA",
  "key8": "2j4yTBgtfgUJmFhYjDT621vLctuHTSsJYx8pGWcpqBaptc8BU31s72wmbctNgQi63Bfjgo9R84HppCSSpUhznk8i",
  "key9": "2d4f4Qo3MZMoghM6LVEC4FLswpvfQGqvuKuoCGZvhnFdwViJ8UrkXwm76bJQU84QtGJtfsMMWCpgnVSbCafmqTaq",
  "key10": "31t8qM5gM58k6tZ9SzU2R2XoWnPibV7TLYbFhUUHfZdcB4NftpDo9cpAh9vXJCwRgZ7cfQAczP6Dk2GZWdYM78Lp",
  "key11": "2dNXG1eiJR56u8SYyDgQeptbF6cFBJzJNvp7TjZ5CWjoaF6P2HHrkXvi4QGryfzUkiaKiR8tkRxD6qBNhYK17NNC",
  "key12": "4oxgn8PrjUMsDm1aJCb1PxUJnYwBW3q8ZDcp7qoZStiiyppnjiMHp7u5xYX8fqmf3PGuQS1BXYb33T8LsZZRqtP6",
  "key13": "5vPQ4m52VCPpv5ddJWzRa9UtCVa3koMmKXZqzhuTFYgiNKsgc9sbx9oPdvc2tqeGu7k8Up8M4gnjTDdYTD7qt4oq",
  "key14": "45CCpXNt8UqMoBB3T4zA4cWU9gj4tYbmHFQXEbknb3rDgopmxkySq2YaGA3GmkDbr3x9Z5GkR6cJUBsqhQsqmfYE",
  "key15": "mXBVWwmBkNHytWdLeS6jb4j8Yfi4sD1G8qC8adzDxGm7qjwM3TBk3eGqDecQC83RuLfZeUkxNCNEutYYZXKwsok",
  "key16": "hjwZvWLeKRtBw2FDFpsMugWrZWom6y1wD7pe1YnVRD3mmk7KmDpu8gPFp5puuTwGz7Y9a7RkJWrBBbk1webS3QZ",
  "key17": "3oW8Qn33kmgrjnBw5PNqBYEUN1AkL4tS98vc9MGarJrv7xedEYWWzVazM3knBJPpGy6p7qMpwaUsqTfPKvpFPQTJ",
  "key18": "ChnMDHxUfL3DyM6sSQ2kuA18AuaZjRxLNKe8AjB8pYsCQw9embsXv3SqMjwKwhqXrwwJWdgPNsmu5fSvriNbotD",
  "key19": "2WjkgFXbnovSFyxFvKfSsEqu9Mpkgnjs31RZRwNXdqUQU4QURH4qJMiTkKoYy3pcT3U5XzntXC8yvwPjk8yinvHD",
  "key20": "2bJsn48VEQWS35idiFKMRxMfGeEYjbiZbbaMhtfpgsRfhgKE4c6LSKrBtd3zWMPdr29nEWzz3GvWpvnWGJqNvSZ3",
  "key21": "66vKJgsMfEscwTCD1uCjR5ryWpVmLTX7Pbv2fvAoSztnfgZaESeUopuZmEkypK6HHscZJSbvxbMM9insUm2ToUZ9",
  "key22": "2HTePAdqRbHGBGr3C5yjsrVUVAm8DEZRgG68siyWRH3fFGqTLMefMYR6VbjDs7ZUxaTJ2A7FBUqiN9mMJYBjg68T",
  "key23": "3YSahmUpFZukuVtZLtFstPMUkV84MMArzNX3ubZQfuLbg33GFNaYhBqCWWSiAsiz6RPYHvV3yanRN7VA8d3tJJJ5",
  "key24": "5R87gFX2PH4PC3V4qK59o1YM9f3Rei93nCr1tZ13gvGvRpKaJc1Lii6XCY1Vxdf2B7kCgCDv4Azgqqc3n4cSY7ye",
  "key25": "4XVL3M2nxefVqvbBT47XY88xxTUQ6HA5akCd2yva8iQKxYw1jNiK2HjokWZgetc9Ri2ptsUVizqVVwLMM45ATtL9",
  "key26": "3yVjDtz1gdYkUA9cBAMsh35LTAoPuNUY9AD6mX9Ddmwjup5X4Y5kPQNmJV91c5aDwau9DZ91BimKPvWaqeAuRM3Z",
  "key27": "5oampDKQeP6tznLHHMSHpB7e13DCfxx48x3prRNEjipNH5uViaEsgPaBDtoTpyt2ckyZ78KwAqgbJC7W9SEsSKVY",
  "key28": "262RQQ5MaZqrqUMkBUjHnEYTHNWDmFQqBms1dK8ndu6U2yTe6sjTwoYrBUsnx1d5eYGZrGzCyj1bmoqbhuyLxaJP",
  "key29": "5SpaRnSELLmdsCXHNGVpq2o6ic3GsmGiLWg9B677drFGReKhG71at5ibCJGwKaz6GhhkcGSf8y8BdGKQ7YKRk69J",
  "key30": "4k3MD9ZMhxaniuJVaAZsd7J47zbvLdZzZ7QhK7qh2jnre1xiRWKK4HnmyY8SMFz9mC68ZDA53WhEwLNvEDdajwmj",
  "key31": "22ENQC7TKrtRJAfoyMoWz38Fz3X8mzu18RA2DomGQm5UBWrhkQaoz6JvgdiKBiiTBmWfVf784QDB7kr1DpAbwt2F",
  "key32": "4Sc4PCLxCsLRNXBUS8qvcEELh8LJMNMwKEsK2H1VXaRFMyvXbjJekDmU6ShbQZ5ptboezmRi1FXftBk9mEVkKTRb",
  "key33": "5nz72wFQRB3bi6gwHkcQsugosmzyTMxbZxSzH32F2XPRdFJsQPq4hoYfSm5xJfZAFUfUZt7YbZdghu1E9G29dp3U",
  "key34": "5pABm1gdhTdrZLiKtVckVC2rHBxbG5dz9xyMN31TA1bhQjFU7A3nMsq5Q4gcxx9gYru4vPXzQ1qXuAYn97oMysz5",
  "key35": "1xATYA3qz8pHYQijMt2Ze6apcNLLoiKMGdZvXKMwySdTuA6TDRikbqG5aB8oFh485VcYRd3UuGkmG9pzMeMAmgd",
  "key36": "vR5KmF1f4Zb2xPxhdDGa5JNYFEAqntZM4Q853AE4L3LES3B4keeRHFyNBWGBSuWwK7DryqY3dhTPYWqwBQswwNE",
  "key37": "486xRWG4JCNuCXTgTusaRdNC7sbt8dLNr1wnecKkxaEay5fQuhj5x2h6VfokNopeDAN6NHNAnFLsFYcC9MjPnDNV",
  "key38": "vWUmq3LqPagUzrx6pPSszp8vtcDq7itwevMzdN3FnvYCo53F9uQxharHKTdudsXVRmjstopMGz9mVxjiVm7WCTE",
  "key39": "5auL2FiYMtTbU7qgL2EBNaQn5i9FyG8379TJMFS1hKH4ZHU9LfCf4y91tQwJCEvhompijPSKpPbqtFeYtQFaj6zR",
  "key40": "54nWhxbiymdkCT1J1zR1yWNAko62duJZQRWz5q6tp26nFTFWTWNjf7jhWxx439PDvr9Jzvq7wGpS5XMEjwP4yZCh",
  "key41": "2qDZU4euitcbA9e9wKxVc5LeSuZxu4uBfBb2HeCRXMPkny4LP55esqTy8tU43cq7NjnriqiV4vSiYESuXeGTBGf3",
  "key42": "2WSjDXEc8d2NfCG592arh7Dx9gxKxQsfxFP9urZE2zdX4DEJgUCD6GbdKisdN7FxrhFvEY7EhwTqayLK9omnkQxy",
  "key43": "31ph5qwfhaVYnaN3m22hBVUhnYPPWkgxPjJMGuXRJKAaC4JVbaoHMMX9ip5vg9F8LBZnbLCwQFcXdbYqbG8AFfQy",
  "key44": "4iScRrN41ENJvAQJ4ruNZgotocsQbECfR6USg2xexRiEs23RyGXJ3oTqA6dQTf8cixp7Bs7KcGLbTMyU3ETTDVZ7"
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
