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
    "34Qvt9rCFdgcf3iZe2RXHhZSKUU2hX19pWEbE1S63cahx6XGyZt9XALiE4vyTWDzJjRmALfNUA6xnmzX1iasQFtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rgCFCbu7g4AUWND3xr2hTXgZ7QyJCidUM4R2Nw1xFDaDxkTWUBv6kzNYA4TpkiGKPGWd819hc9hRtedgmC8kFwJ",
  "key1": "2wtBh4niWETH1S61qtjGSqaLdMRhxMDkfKdHRW9P5vs5h1KK7veavMbqoGv3fo8UVN6j8jYXjNKiw73yC2ZZuxTz",
  "key2": "3LXpzAWr5Euqe45gVzQz6tgiiE2y1LdgV2bHzox7wzxY2LeAUeAomzcjALw9D4M7dcdtEkAZbyoRnAn6c4V5nvwv",
  "key3": "5KXJJFwR7Cq9GXorLvvK21FA9k2QnYYkjXucGs5h8Tk2hLsQ7pPimPht3hXw6shPMvLR6fzdDFe5raKoD1gkYmhT",
  "key4": "514MD5C7wQyGF93ApB1qb2MAk6HW9JPRY2BgTUnccCVhwwyBTJ55mLGaWB27xoZC1VTDAmjQq338id7zctRueanj",
  "key5": "5Htr1HjwStUyrtq4ujKnQznPpzyqrCc4tMeqcU26YrnupqARpTpwqX3PghfDeGJmeD4bMFFXmXVG54Xf48igZ66o",
  "key6": "5QVerbxLmsAgsWXUAosgrBTCgWP76qyeZUdCbWjcnw5MXDxu7WPNN9tYXLfmH5WZBakZ54vYrDQbHj3fNRsV3NaR",
  "key7": "jrXSYn2c3KDmW8BZfw5hXxLv1bQhzVnqD9fteVndSnwSZ28q4sQSF3HeHDVXbW6XwdgXRUWGxxRZ3m3YERQPLgd",
  "key8": "xnfMiVwkhsgN87bNxyUAxECLw1yLo5eYVL13ucjuM1SGWwRXmcQT1G15PMzENeUiwwKTLT9xeBKQFvGB4k9LrmN",
  "key9": "Qs6BCkTwuZ3i4soQCB5TR44t3kX6ZWSfcRYPGrFudC3DB5GEKohVZUYAtKCwKi2BJCKdZfQZQRrjXQSjbyy8cap",
  "key10": "5Tcc5VH83gELCoWATyTtk15hMbpkCyXxUAMR35zFEK5hztEfAQYodjRfdkNyh1m4XhVxf8WV1N6h2eU8sLr48Wu7",
  "key11": "5NQdtJ1AeffZcsdDHY4hM6nAUWnYBXh4y7TdXd7pecaq2MVzCdFWUZzLkrRB6Eu2ux4sEfEa2ZxGFpg1bXyk3Cjn",
  "key12": "zufM76kuhP6sc1CHJEjpCifZE4AfQvHBN8KeWrzXieVwPSkE2sjSjR9ZjFKZMAxeoRgcPZNX43n1raqC57x19pS",
  "key13": "3g4ApCAVcZzV6dCmzFhRLdkx9hEAqENU3xN8JeeG2H4WSds6FDtFRV4dJdcN6QFB3bxTXUEcXCHasfDNe9vQVL6K",
  "key14": "2Uaz9RqdynLmgF7Z8GBcx6cGRARC7WTVbhxHf7VFgdXLpcmEMXG2YLTzUWWPBG8Ncbwfq1z3rVipVuk5YYeWWSAz",
  "key15": "3g4k4pG7BNF32HAqcUbM1ck3XUJcDadZ4GAntcKNRJuyxXKEezgWod3wnwpZsm3sE9bMKRa7RZMdf5dS4hmWSd5m",
  "key16": "5GUwiHUam9QRDFjp7Uq6RckWoWyXY9hJVH6duXLv8FSsujcwJ2vzUiDf5CPSUR3vR4CDPndRi8RPqwcocyDRnYtZ",
  "key17": "498YFWsgmXoMFcNnVoUEomQDHje64YtKfcs7Fm76R1jnxDxHLgYJJwzz1ppsjGeFHnPsuFchAQ71fknCuXNx8G7o",
  "key18": "5o3cj9A4NGniDN36krGpV5JG12dmM7waR7AtTvWhTLnc3GfxVtYs8TD3oND7vjVv9oPmVDgHVj965dxmP5q9yof4",
  "key19": "5L7xEZG7y5atwxd3pUPU276zCZxDbnuivHNsr7t7VgeCvNbLUdCQmWJB5msRpVvdFZBKFZoiVtVXt3Phbn4jZkCw",
  "key20": "26xrWF922cfweAEknRLwjp3zuQGWjvcyDT2e3MfP72fnPnG5J3XTqZjPu4CB8fLQNqGPyZfW3VEV8cT3L7ah7n2Y",
  "key21": "2JBTheFYjKTRUiYmR7hywYYbYbRXtGH4UBFTzRunb8CNyZCM8bC8qCy8n3ULfdvxaHzkmoUcZi1c6wGgwhjXiKwD",
  "key22": "4CE8VHgG2HjsfqYcBXgQthZLeoBCPzEQPNCQSVr7Dyjxvp3iydH4BNL68v5BDsebeGCCdoLwwz4EwNYAkMRU7eY1",
  "key23": "2ckkpLZYzzehgH69NHVx8noB1f4YT8yHaqpgF7vMbMkuBvAX9VTbFTTeEizPbyXgUN6qYuksEQrNq5mga3nh6Y9k",
  "key24": "4Kn9weAspVGYqKppgnFAQYJXTp5ZXYWZmSwMjxAB1DvQxvr6RycqEkGpnYbdexBDHXJRbUL8yBQFyH846cFyW4yw",
  "key25": "4Xvd7m36kAdEXkuYeMQyDhVRRsadW4ko7hcC8PgSaiHAbWnSXy7J6cbQLvyAKEpdMXFd7wJzhFvQijCZCGiMH91Z",
  "key26": "5cGnuARB1hpua2jXYtJvetQMHZTFqC3r9gUAeP4PT65Pi3F2Jz7jkDGpm46DkZXSnaJTySUpsFbZ6TYujupAGGHy",
  "key27": "2TbVsiwerR5k7tq8gVsdKR3SZvbtM5U8DAfsV67oT7C3YoC1icX21DHi6rsYjXyj3mJc6jLJbMxSUwbCBZx3cXum",
  "key28": "5KkoUEoSsef7MmTn44krUsXr2F63KDzCMueTdvbu6Qu4EgU1msnghtPHvUepCNNoT1xgpVyLrxxwuJ9CLsFjUBuT",
  "key29": "5mVFTJr65RtKNkwR3ZPYQ7H2yxc8U5QE2Haw16yMFqaicxFVxAR5n2k5Xny9SN55VfL4SoW1AvoNpn5oyknFMvCy",
  "key30": "2E1Hj1ieGGvdUmRnyZoD5jEYjd57HYeq4LkpKfR1LNxawLuGjahYw2EWiNDDnv2L9rncgGDuR7qPEm1YmAyAHBu6",
  "key31": "3PPYTvttRJ5B9aziThooVmND8avEnhDaqCQ1sbUZhxbCZQPLVWxXhcRnZodgpzF11PeTn3LLC3MsykgzzS2wqLww",
  "key32": "3CmU5WChgjQPxXoce5h7nFLC1oW6P8NMbMveWTzhDrJ9f2pEPPGp4Dd7XfToiE9vnU2rUSk1uZQzPcXWJLCbMkx9",
  "key33": "3EwFCBh4huo8cXUtdS6zT5jHuXFnmGHVGf3t18dELDS6KfWquif4uepbTmqP1GMXUJcHiGgchYQZdoKc6JpZ7tkg",
  "key34": "4QWXeHuh3zdirGJnwtpCtJqiStRaR6FJKwBoAQJ7NHFqdVJqJiUY67gsWZaHrQFuDoY8hXYCUsdhGEJRTQ1Wa47V",
  "key35": "omys6NBKDtWUbyJxi1iZVTjGFduCQ54N5714ic9PKayRDhSDhUp8Zkh9dswx74kL2WKH5n6qARJ2kb7n1fAGa8X",
  "key36": "d8d6pRmCXf3upryekaqKfyHT9PdaWsKowcx4ZMUTifrE2aP56E4ewokoZi7rJewvU7iEZF7D9gigSfcn9mw9cYP"
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
