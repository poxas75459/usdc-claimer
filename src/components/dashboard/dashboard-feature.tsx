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
    "2t7LkWeujTARKyX9zRC8oY2gt1PWSkuVxHmPhezGR3g1DZHQgYtUD2nsGTLMWkoV7tnU2PQEwH8T9gy3zXPTae9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ppep7zs6MSQVfMKFZcK83PcLfCr61JQX3rBhkUnHTiE6Lk5SuDdwtSCopHgFiG5ZEcCggTofGavEJNQnrGJhs9L",
  "key1": "hbQFyzeDNwd6Dv7wYvSgcGG2ZWsrYvYDULKDFCgiaNvh6oqKhC9rdiXofH8amSxrPixmUHr47921PTB5tFQ88xn",
  "key2": "njmqm7ULZ6vXD5Pd4pyBrvi4Tf8ZTKsLf7V4GmFQ6zuLFXxoCpmxZ2BvuAyQiHfwae2SzJszqWnXfX9mPKvQrKz",
  "key3": "64D8UCUx3ZvnZtz89LNNqdUbpRrs1XLAqTakwq4xribBY4GZiXRng7r5jzVhSbsnFoeMzDeucvaFQo6fQ6TJgFkK",
  "key4": "51nJG2ENJFHcG8rmqMi5N9rMLwa1tToQNUQfXWzob1X5mDY6cANXNPiPt4B5DJvy4B8bn4SnFi5FHuYE3dUmEjgx",
  "key5": "4n9gYjA8HzKh7QqSL8Cu7hxMSHKFZdqdjs7fE6QxYmaAZ5a3bStsE8L8GeHvTAeGC3QQosTREMxJyF8nmcjmHUbv",
  "key6": "368QTSWKDoEHPJJMRFKMZJns6yosGM92o23nXcVxVpV8BFzyRxzakzLDSpM2KrXpbvLJYorFqUZmrV6fCZa5gxwr",
  "key7": "4e9fWGEdmnZNVVQQtktyiVVHbiQL7evrjBoJW6nWAufncgWo3zGab5Sexeo6gvKskYZqBLvg5NgUP1taiq8RUuqe",
  "key8": "4xsD9ZkFaCnf1TUg29VsHWYLS4M7UU8JYXrrPMXi3mALDgC9mbyWdQCaaXva4pgnGk6KLNfDqpQbaoAqqh9hNwTQ",
  "key9": "5YaWKpDLTQd9ZWhvdAi3FPbj4BTwt3y5dgbV7C9WZVTkYHepyYCR2aFM5f9BJtquxSuxPVjQfNmJFJicaWgodh1j",
  "key10": "48vK5a3UfCGBtaFqVHcx9eCSj6mJ11S9D1DKEpjQXTQ9dr7hKk7f1zK6yV8M6zQsaNxasd65MRLYadRctgPrKzgj",
  "key11": "5nCJ5yfqQ3ooawrsDXh7bktazXzatTpJKUjC1GimnoUcE8zdxSZW7yiANDqqAF3dGzJw6Uc2YpUf6UeBhfCMHAoS",
  "key12": "2ZzrnQAFiUHp8sQtWJvjdF5DWDTVE7KfepTZiTEvBQt8YKawcuuTUHonFXxvwVwaWd9nBesxnukV8Qoa1vLZ77qy",
  "key13": "5mnEXtxxgRLfjRMP939U9RgGAqENvgAxz9V5CgVxKD4LxHX7rSfP4Uj8zfy7Ef5q8JN5oFD9rnqwMSM9t8svjfP6",
  "key14": "51rReD9PZCG9XsYQUDJ2n7VJJtHmYxqwcdBYQowUGqTWy5FcaKtAr9opYm8YoCH9R78CvUkiYgLfiseMxth3uQdc",
  "key15": "4ZFoJDRFUcArnM43SobNShYpz59vxifUGRfSpePiYnLv1S5YtDthKeAcmicWsVrjzRwGzKwAP4iA6dmQMhoJ8Kua",
  "key16": "3bsGCWRkkFWfqrC3gwkXkuVG9sjwZ4pnpaNNbfHdJXbvv5nPpYT81Dhm49LtEtSrm3iquWbf7HKp1Lr2wHJYYFVg",
  "key17": "5d3KHNtDRGw7d2VuGiP4TM6zmTmwXSUnfYvq8KAsFkGMPfFQPfQSX7XieWyhq15pDycPBrGMrDJk7jWshtpHsjUM",
  "key18": "42FA5NPa8ugdMVBwtgN6ryfrHVvqmYz17btdBGbhMiXCJENLLMd9EPJnQG7JurDHNvVJ7ykeC6F5afr5mo8CxRMm",
  "key19": "5SRzFgmBUDUCExsktSR8sLvEZ4tuibJeeWSA7smoQ65aNLKk8G2BXT1aCesSChBZNLEHX3zz3uPevXpHJgYLioPK",
  "key20": "MkMFFsCL4fUxpPqXXXs1wXUrvX4uovc6AAcbyyKDMdjofPSkYwHkFgvFhYxdFJD2aamh4TFapisjozF4yXnnstr",
  "key21": "2nhjnjNMdu4W7ZyGDmQmy2f3KW7nAVY7gmrF3XjZ65A67G4zPuniFn9FaSsxco9MYaCGkao3iaUzmMqiiwBPWjRC",
  "key22": "2secz1tUR32bJ1fxCNR9EWrPwQutV2ik5xoYiwz9DokbaTjxgSVE58vKxPPQKnqmRXPXBwopdkrJW1v7W5GSnAjt",
  "key23": "3EegSs3X4JuxRDTks6GMAuVpTRvYg4uGRU8Q1R8216tpdHeLa8xh3wpKhyUnqaPcDah9jiZg8H3ZsxceAkG77T4z",
  "key24": "4ww67gZvD17vfAUe1k7xtiwue6UDmYSKf6BpUKMdonukgXidrDrzePjgbbUspffEC7mZtUxG78k61v8ALiymfNMe",
  "key25": "3CtCTWbNdDsC2prFFL5Cx8crEzNoNtYsjabw7AKbKT4vLC2U2tACTwwv9PMeH1CxKx6wbjrk8fkxXknrYfaAKLWv",
  "key26": "4zdSEK3HMzErwC4pfby82DcSa7yL4Wp3e5j87LggA3qSCuXKFBJ2w5p84RL9BBwHAnZcB6WApm6SMtH1YqYWrA7e",
  "key27": "26wbPBeGYZvGBzvVoryFtdA8jubekPrNRtNRHKW7yQrXeuSRDgjPWWQACXdd7E8WbMb4kE7fRckPcvJSyjFTk3Qy",
  "key28": "4xeVMcHXDhqBYaMibcdHytiP8ZN6SZH8GvhV92QLKPqjwhAiwuwH8CRBJFMG3i6sDnqzMWPGqPJSe98hALZ8Fpsu",
  "key29": "4kB1h37SJsCvf46wtvXecubqeKMAjDxm22hBdAyEydtP5EeBxDckAmQCZE621smQwpEYMWJ7A8jUdREZMSnJohzM",
  "key30": "4Kms9kLT6Fqubwd6Yn6xf7cnK2MQqk9NSFQCSrSt5UyguMdLmd9skA6Cn6JRi58Aohaa6dS1hwM6R91SoajHALjA",
  "key31": "2UT5Eq9eR75uqRdQvQBrK9c3PJwmG7WyEBymAiZx1LJMEbYU1JRKxnu4AdwqU4C6vJSnojjWxkL8QqoT69VGr5JN",
  "key32": "NdXBVWxFadcAt2X36EiGyF1S8cr4Fd7dtouydYm8iv7hxqaZYbx2RT6P9L53zcS9S8DmtjJwrm9oWfjP4kG7LJL",
  "key33": "23RNk9QSGrxehY5ifU6JF3SgPso3xEhPi8jt1mYC6bAPSqEkv8wLFQvyCqKwQYWJfGjZN5tCfb6EUscXK4uMPUD8",
  "key34": "34B5qApjEEJgmFJjx7zAE3GDmhb7DypCRQQMmvrpiccvjgjZ4b66PfpgmnQEFaZ8kAZXxYptptZmQmkMVhZi2GfQ",
  "key35": "56SfLTdNnaV258ijMPL7vRRVRt34oSUsKpLSCPSgMSLmAaAP1126P6C2HFiwLViPnw2uYj5v3Mf3WXysdMHq92dS",
  "key36": "4nBUNa6ytTJHaY7Us2nxNBV9CZfzj8n3dPqRYPDocpbLAcuub3QTR3UTNeFwSQfXEnEah5wGSErU56wds6p2H6ZA",
  "key37": "4djnnTvJf8h9aCb7Ax7haJEdKexkKUvkcduvmk2tqJQKhHAinrpRMr4wBcBkZBiAs4dHzo3kjzmfnJ7RnXYANtyN",
  "key38": "kvyuGsZFSBS9poE11yG2D3wEALmpn2cnvZYLK2Dsy9LNiLck2Mz7nStdAiT73LaqiqdpQocYyNt9UVcsdcMS2Gz"
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
