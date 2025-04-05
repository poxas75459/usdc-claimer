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
    "2GyjjLQTYWU22vBgwPrP6LXaNsHvmtY7BbDiioxnWzFwcPpF8xM87Df4YJFJbvjkWKqYpsVzUTVMz8DbLvWgBrA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RcV2ZzpgVyDLkGwoVQSkRnBuzN2uy8wtEkF2wyNcouvQ5Qo4y5WxrtxcqkVWmHeNS9XA2LV5hWfSB59rVvHHWgc",
  "key1": "3eBu1AacT64U8xrmLZssZxA96dH9u2W62UdpAdGmXvKRdrmWvvciKsS8KXTRCYuQJ8cnCfCHXg4ui2VMZEWNTZo9",
  "key2": "4rf9CNtKQQrZJwbK3FysEzZXnDdeAB2XgJpcrTUdY6Mo33ZiQ3YaPuhUcbNHrgXabuwBURKvdF9Nyu49ZzeQdXtX",
  "key3": "H9spbcYzVDLXsgi3NGL7xvgJunJuybwrQe6bMFb5ajKwCbCJFMAAmdinpQSkVM8TfLhZ7Zf9rXGoLRsi8aVN4g7",
  "key4": "2n1aj5U1kGcLdkqUiZgMEDWmUF3NTZHthMGiHYr7hu1sS9FQmjdFinNyvw3qDpM35yKMdkVHpgSrNifydkdYabHd",
  "key5": "3svBrrECWCAdrGHGhCno4KQg8BxmF7Ys7jVqei7yjjJ7mQrU6eXqMxAS8kj2Rho6MjRUyXwWAnP953PZTpyUyRqx",
  "key6": "gBtL98eTyH6T1CXGUwVTvFFmYEmaYom2xekA5f7YZvC2v9wQTfzdMQufuzGMxvZnNVgKshp4S7Wnjg8rwtfWjeY",
  "key7": "21mmHC48MZZnkot6L8Medw4yjMAX7G33zKHmx9rCHau7CPSfMShTzWvUYjyLHM34VNhCD9U5zy4bNfWEZWLfP3L4",
  "key8": "3oPxM3K7EieqagwAVH3SXUegRk4ZpvVrdcCBSg1pai42draNEmLFDDrry5nJxpVW2pDmGNn8rphkDKgsCjFJHDki",
  "key9": "2GNWEwvJKYAmBFMvSTb7Yff6Lc43i7rWs3NNiYLMnYHLzxvo425PRTtdxA4PDwRPsk5cTwRarQ7N9JY8N6ZZinfy",
  "key10": "263zK23yV5Pj4gwGHRUHTnJK9V7eS1YhqnHpEhrknYmXjt7MYepaXNevnW4yfJuoWmyYdCSEtKXoiSbbKjnBjj97",
  "key11": "2ia3FX6HfKkMp4qPC7bQ9ThzBCXWNztiSpykN2fyT1RpDnyJj8xeYYHpJHvo6pAetDhUGKcZ6Hz7FHwAmMp6ZaRZ",
  "key12": "wAjvAk16pGzgah73CXWqUFKStw65AoVSLLgCkBKE5Hjnf8n4cLEtG1yK4pPYaJzqyHeMGiAgyzQSjb6mxxi5N9T",
  "key13": "5UwM4iKz5i2EqVSJkEvgWv9FJtrbbTRnz8mFRZ861yPLekmYwzdDHqWnobGsMwPr2MnpVN1S5TpjyEdjDtYuigLu",
  "key14": "4HjLysuH8RGHTxoZ2BqHobCFeHbFcxdUo3CFhqyr3ivXt5Bt8cdKqJoJwHXXYhzHsrfhvpEWsstRNJYyQQDqGNAo",
  "key15": "5cVKySyuAnJrJcmYHe5bBHNniBqH6tjog2sXy81UiS2np4PAUDcJBYQCvAZ87VDjZ6c694mLmzPzkm7VmU2wQXXe",
  "key16": "38v25x6HEXxmRpyUhXWuSRagTDiqVNoycbpe4fZAyrM4cvKqXFA9Uhcfu8eH7GSSoA34EG8LFHPpS5A4MJ7X521T",
  "key17": "xuriZYEsTmhRAiYFed8ebHJ5MdZnw9dJXUZQn6f16ygwt44Z1GNyvZwcdDjQmkGSwstMbMV6W1rE63nr6HBHVuS",
  "key18": "3zLXPLDeQ3zHcpD3GmFbY2DxdHXyNq3DrneidRqWcSND5VADKjJ5HSkHwueZeuecLPsEvp6QVB1Gj1iSgjM9UZvH",
  "key19": "3unQTeTPULoYw8DaSQXVz8wJZFN4sTiJGFwahMzsxPxdYurTNHd7TDYn9w1Ni2oRb5BobtBbBrvprwJdtym4YPzd",
  "key20": "pUM773KGNqvn62NR84TZy9WC9DCnbXRmfR8k6zDDcjW6phH7SHPb4Ed6vdB15KMNRVZo4FxQkM9zs3weTfEPZ4D",
  "key21": "55cDbCHnSSucemBhEuAgBwzTVKJkYxJoMCERA7Anmnauj4GJNQhLeqrwcd9hxLfX28PvpqhuAmRxr2du1KFSddq8",
  "key22": "2h7ywmT55PSnbV6aaPriP9KQ1LJ1TF7YJLq2FZAthbZoVCFyEEaXyPsUzQnPRqEFK8TKoGqy6Yb6V7nQyPesbJqd",
  "key23": "2ZDVSoRbijBpL7mFcp9CbqYTXL6hXKj4bbm6UcGUcFfxGcQoA3T1ibE2LcsjG49jQaD5nkZZqdyMoTLXVmbUJGnH",
  "key24": "5LLKGGmo8P14tHb2sS9f3ugASrq6ii1ZY5tnbWEXLEArqEyY4nK9VwhbsXN9zmtHVHj75qNRWuFCEZXgTdehLY9k",
  "key25": "2iLW1ku2MQuJ1hDCZRYCr1fT5qtMmuCHJqcP8nrV5iR4FB3dFyp4hzojdzvBnGGZo8qUF6zo9iDcazpxkvMWgK6v",
  "key26": "3eWAYVy3HQirhMGauGDhYegzH7xz5F5TZVRPTi1B65QvWnqHVz966HdGLG2skQQj9Tdmgh7eKdCycyWR1KAViS5D",
  "key27": "JsSWnsCCGor1bC8RK7wPwJDLwrzi6AKv99kv6HSq7EJWmd67g6D6XSJaRAXDL4ueXroYW6eg8JRnQRqt33EbYE5",
  "key28": "44sBrhL9bxx3h2YxWfDgRjiCT28MbdpzA27j8ooCJGYcDpoFnUBeUi9PoAHHWqnDixDW87HHB3ARcwzEkrXBtTAY",
  "key29": "2NUwu8EdtxKMwcPJjiqB6xFQBS8oNyWEBQC2oJ87CgHZNggX85kA17bYPB2ZFwkqvdGzxPrixERESjSuULq3G32K",
  "key30": "4w6ds36rjxQYL5ysDczCpbDfUgTz5L2ubKhJ8X85QX5xMDM5qLMFPaKiBA6n8aMhVPCdjrrnVa5htPBS16iFBSPW",
  "key31": "oMS6Uv4UxDCWDmXEig2SSbjc6B6A8WgckcaxUuZrWmDFKQDFowNgE591vHkCwyHDSFDVKMSknj8tJkf5Sz125jV",
  "key32": "4c8k82o7PcKn4yQvoBnSNKkkNiB7GYHniuDwbos4QxeLZDHPJjLq3JeaSPKzErGRS8mk62d1m8836yM9m7LRnMWf",
  "key33": "W9DsYb69bDj6dqWUdj1B7SomoGte9vvTBLAxdbVVFoAxwueiaG73qMYVj1xPkjAws1bZkWFwsth6XQ188WGsgeX",
  "key34": "3BiKykoiFEV9AKbStjXzVFAVwBgmnUV1pmMGa3NZ2XqHCmjSWYp9ZcPmRMWr6A32EVW4A2kYjpnyLBRrwNNukVPU",
  "key35": "58aSS8MMf41KQfBiUrrv7GwPFN8WyGh1XVEWKP5WQApkg1e977jZa6TbNwDkNGHYgfxHCAjWKRohbSrZcbHtmqjt",
  "key36": "NKpphNHL3ucDUNYsGkWEp4zZ2BR4gK8KbYF9S3JbZ3wRfkb3a8Xk68xYgmfmf96qCvqdUQrJH5SMVYZU8Z3nWvm",
  "key37": "fLfs4Er9bHoweueayF7QPZGFwomsqNZnQQ61Y7WGPj82XXoSrbBE3paaW9YEkw4KoF9CoW4PiieuHcriXHWMebx",
  "key38": "4cWTf3tR9SNDAMBuDQUM6gRUjrocmPmUTqCVB7nNdUK7VvzTLxfrjDY5BTeMJpu6kYqcH1a1yNCHa92ye2P3s23D",
  "key39": "2VnTgJXJ9mQSFm5vNvb2ViagCmx5ec1bANz7Ws75dhWh4vRqXmQdq87rX2xzyhTRmFgLz7Yk7CmDbJXP75L81DBY",
  "key40": "21FMeofwYWm3AtUsT8zpZthTCiYYXK4wb6TATxZS26VMsgwf8WJL1QumE5cyYAqRpYiyadrRvZv4apP4fFV7u2yz",
  "key41": "5Jy9CkMPkc4kJN37VmpgtXqGUfey2LNgRKhLVNSstQQFz5jFDiSRMVXTtFY4LxVzFZm1MAAbjSwcSvMkfJbzdsuf",
  "key42": "2qgbnRUC7R46JZsWE1ZXUwd2RS9Jy89HZJXv81hgf6E7mUrMkMNjMECS1TGgacvEghhGnGMXPLWhSEYqzGyzopVP",
  "key43": "4DhCYzrSTfY5JSDnSBb3qQyQSgh8MpKd9u49MUaZzFPebg6VaUpHmfEdEJXh66S6vGc46L6F3ZwwNd5Bnb2xNBoU",
  "key44": "4GPR6n6a5yjpqeaecc9vWdsV9rPQsF6QJ5oVzdx2qAuAdBRo2DyHhkKcWrTifFABT6u5nxSBAbG6z8b46C4Nf1xn",
  "key45": "5n277nnVoYZeyZUFkeNN9633uJV5oWV9tNGQkYHLZfn4im5cAJCcKomkrWV6gZxX1b3CqtYEcgYFnq652z1Tqp6X"
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
