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
    "33jmwR77DkCHfa7Fo9eXoguHL5wFhBMVNA4fNAUfR1a6UJKUbi18UUfcHT6aCrhSAsieb12SEj99yxVQDVAKPW6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ks6qserYuKtmWsz7CqM5ZqZSCiVUprrcrrRpFvcZhy1hjjCHmrtntxZ6YALXCUrw8oGdBapMFArSHcfNNKxNNS",
  "key1": "5tvRfG5XRNK34uWY3iDvTi3pC1xqCq9Ety2obrJRmm2Tv4p3hMHJqaUpuVH97UUXAMA4qgxeWwU45hZmXzqA37T6",
  "key2": "2g8scayeoAtBGBaENTiVNvioiJUgjAXrTJm9a6i3AHy1JY26XHcryVj3qGyA89NPXjqBWJ67mrKe7k9CMHkxWZN1",
  "key3": "4yrTiVZN8VGy2sXXWEVodxSeq1RsfDFs7ad3qqJvm6pzm2nvQ9i2VN5pJByKjmYWhE7vXSvzncVkcnykwSqQpdH3",
  "key4": "qzd7WHMPMqCUnr8Kn3W4aotM65VUvNBcLKk2aVHsVozVKL4cSL1duoZPmtQ2PTvB6xQCHLi67ZR691YmTGYMb1i",
  "key5": "54YsYwKx4VckWA5whsEZwctGKu3kjpwSTgakv4GdDfNJHiBAjiifjomFGPVdZRzxaGXsfmMwcUSQ7upMwBWjvqHG",
  "key6": "2xgmpSsgkb3m1GC6u8DxSU2LkE9BJrvfHyuzhdx9VSxs31it5uRbAy3rdbnMKAQZiEm3KRSVDCpfaHETnACxnCSA",
  "key7": "4fW5nXdQPEkJrHXBHf3o7rycv4CpB325kH5Do2de2a3YuedpNx91YipaPkYcZBxqkTaJQ2w1PUPYmS8xJvW8znod",
  "key8": "LgbhSHSDcdxRRpDybHyGGiWWFfnUcHpFCXN1AcujQG22GAYpYyBumN1rcz7zSNdBmkE135pBzHswbrmGJMzq1br",
  "key9": "3sBbgzqJCzvyHarVpPuX8GR6jnn8sPjJ4wS8gyrYSRp2KUWLLcsVo285bLotkod2mBVXb4MR6PzAPu1TbwPp6Lno",
  "key10": "kBfcnLbTDTXpDdcmfZwnLLKWBHf9u8gny7V3Z4FPKUi3n3wTNMPMYHejRqtZ9Mtn3ScrbrQXsu26ytrq56JNwsk",
  "key11": "ZbVPSyreG12jpoMWhyB8rNCcgLmTyDhHExv5wHzpVgozP6WnwHh1jRTYV1ggXhNZfG4LaHkQXiHDAr8TfAiZeBV",
  "key12": "4LJS2xsvokxRUBMb9TmxiJBNLZM212MuMQYTWvJr7U1y3xeLpzgd915qS2Jf1t5YAbCAG7oReWgPvwyaDzaUzkLT",
  "key13": "3aXZZvgyN55hemcpjYLxxZhSMuRPV9xCuzDNetwgrvYVTiZzDf6U4zBAqRbSSkqKzDaUqYUkFcUVgrEYFCSLayJG",
  "key14": "5WNv5yyLVnPzjJfNccbE6J8BYDAbxNV6sSVkEhH2xeA35VQ3JnQfppsskCm2jJid6HE9ZzsDdzobh5XGAuWmWHh6",
  "key15": "4KfE9xLgpEpk8AKGjjpdX9UxNsiCFWJaB3GehEiuyCmnor2eW89eRs61b73J5ySCB7Q5DpjKDJ4KTdM3UXQAFUAE",
  "key16": "2QMT82vQNdtzTzDU4npg9PMKYbExhjwyaii4kXNPRYvsgxiMomJScYXF7BxrjfgsJFGKNM253sSqnAkLuuhz9ABs",
  "key17": "3Ft1rriTLHqmaviNzTQ6g8Rjvv8fCAMEP9s9D3NcUYWZygadQwAmFRdytWB9pVGx2YkFRU5nuaBZUR4xdAgnhAZg",
  "key18": "3VtqatPAigynJaMTCqjj648uabrkMdSgjJ97nfSdwBeJNLX9SJPRNmqXXEDFBKUFrcr9mEuCQprTqjnVsP3fyomU",
  "key19": "4Bc2pamC7kWFWTW85NP4ocdiJ1RPMfh7qvwmeQaCMyCVyXn5GqbR236rNq4vDWGgVDZ9xGoSpWPMbmRZT4fvTA7X",
  "key20": "5h8YmYbVWYhwWvshz5hK6himWZJuRnbDLmwX7mXYKXKopRoQRiSkUdmaZPg9GLqZ5jKN5GDTm2fmZnuPSyLbHwLv",
  "key21": "2moAyNcqyGrW2FhAERB6nHnAXBzKv1KZDyeKHKSSc3k9JprLfn4apTh1M3bCjZytM4QHJ8vugN5c1tthPXkCz4YB",
  "key22": "5EwRBG7WjwsEEyzPZwmxSb55po82niWGLfRwcg2xgZyfEKn59RqULQ9V34uvQHopFyvamgf2HoNvXnGT6KrFpdBr",
  "key23": "3WiARGRjWqh2vkKQdLBi43QgAufTsvDZs9SALiHSCrjbF66vPaw4NocgVkBF6crHfrXJGb2Uwo7A2xYGP1KQPb5A",
  "key24": "2ertZuLutbLd3r448eZge2AEiTXTHwwvEtiJjRhsePFVvr7enhqfdPxK5uajku6WKrQZQGVQAd9Z2pwX3KhmwF1G",
  "key25": "3jphihBfvJLznVFDcKNhc2NLG4AaH8jRUP32qXNMEYg1NajmAmwEdLbdV8PzNh1Y5ybtS4zgygTz3EMWC2C5Z9ux",
  "key26": "3DVoWpTsDcS7CAizixCRzgMrTdtRXvRZTeAe4eLo8Jz54wpi5RdNk21Ba3jnfAQdb8VBv94AJ1q1HQBADKdsm9sA",
  "key27": "3Qr9wdMScsNNfzEqzhCfcgT7odGum5v9Z4o2vjSd7i5AW2TctAKJXQaWyPhL7BUEkAYc6tCJF6o8Lz4iAt4MQCeo",
  "key28": "GMuVgcAeoVwvknNKJKxAUGBLh8z1odYMap1GJWaB8su2wmbBpPiVn8u8VJLMMK2RffbXm31nXygzWneZsFpp5Lp",
  "key29": "5J1Su7boMZ3BQyjc4b1HUiMxqRzKiXXbBwveG6TtDBMzg1EuYnvoKF5vQ4M15MBqvcTfHbWhe5zVXyLdZmgMRQKE",
  "key30": "3wSuFvzNSj8P6yNNv1Qs3Ae4Z7XD2MR5gBAs8LqPtqqVVDc3dadQGsGgDhqyapg2jVpm6ZNV6VFVQELP2xUq5jZs",
  "key31": "4jDuRgxWybmkfdys7FPdyvVLtJPTuNRPZ8ev7qyuDkJXHWz9wpjMe7WGj1kyjgckusfxk5B7m3c4TCyUiLQcAAv7",
  "key32": "3Dbipn1mnDNfPk9bNsWnNpx1uESHqwuuC2MSe1rXcdEYvPQAgenxLFRVpC3ixqFJajWnXbjDyEh4bgM3X95dgCrU",
  "key33": "2qsuxJa8CPBfKaHF59pWn7XC9UpjSnhkKjap6C5xnn5JNP43byifJ919uqSFZ4Gaqyf5nZeK5JBAsGGbwDmaWZCn",
  "key34": "2apZZd75kper7nmfNts4y9oiPfXhrPmprwCRjk3cLyRQHgiyWUnAtPSQUCWXBAtiVs4Zzwf7627ti4TV7cmMEWGi",
  "key35": "4E1xiZMeam6pF5RnAJ4rEYCDX6RgurcvJcg7h9NKi3xrwWyNhGXvADAmeGJbHKs7UZGLSS519GicSmAxK2GhWYWF",
  "key36": "65hpC8n76vutNDbiFMUtAR7ySs3huE4sKabnKDUGZGxa8jW2pSYHD3LhLFbXadRA45Ge9MmoWLYgbcrvB6vYwTs8",
  "key37": "4cDV64Qup89yrqGboq1xTJrD5k3yS38YGqTLovAzTYWWibVNH7ZknmbQWBwJNq6heX5MMdTeww2VSz2bVS9z3KS",
  "key38": "2qBrHDcxuSmCKvH8oKJ3YvmXFLiCGdaHCNPKfkdjVQ2wRVnrn6EokNarsrRedUAtLo2PT9wfMLG68ZjkjUW5npch",
  "key39": "5L54GAhfsA3sTX7QiEZinr3DuvggKfG6hxaEKJxi1L4xajoM4NYy8i1qSyAD8FRqUvSKYk4N1h8i8UztzWydrxJj",
  "key40": "4rpPuPQU59hi3GXYmhxRDUYXQxJMkU5Yytjmrn2RVE7FUCZcznrB4GRYYg8wSnhFLkEY7iM2kxbfz1BfmqQsG3at",
  "key41": "2vvZU9stFDSh5SuRkMREjft1Lm3DVrbGutY5oSbBC7zc6E39xY4kW18aY51f6V659Dw54BwdrnxpP1REqYFe39T3",
  "key42": "5dwJwZzSX5SvZsYoAJFwv7tiCiYJWU1Ss6zdeY8W9W59azAp838HYdfUCtmxQU33NjsvuV5Nfgfe8Ludw4cnxQNf",
  "key43": "5LBSHxnRY4pKpfNdBftEC15SHqefG7xBBzXqYdauRpoRCoR3SiHWPKhzN2HsaS45otXdUiyGWjiHxE5Tq5iFsbjt",
  "key44": "3Z3YPD2edmNGoUd81CxRVxn51fYFxEdXLHGhSiQjcCipRfmi9BgCn2R782f429K9Cv1MWpY3tfWTU3cXvP9J2xdU",
  "key45": "3Ut9gRqeqg9qMKCAkc7t5BRfAiGgjptY7PKYFXiZqABXWFCiJZpzuNEWmx4v1HNmNNDMudeHqL47nFtxNrMQwD9w",
  "key46": "21vYYXtuffh8HLU19KS5TnowkbgpdHcSNfNbNM5JjkR4AgQeynxpjTxBeZzU3QMwi1D7giEKXYYezdQ6MQNrctgQ"
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
