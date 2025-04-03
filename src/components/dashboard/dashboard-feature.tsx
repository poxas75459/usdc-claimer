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
    "5X5JYrdeoNM8bm3KE6qCC4CRxeXDULtsoD7aNc6qDNj1yePwu8WTMnKzFGHwE3YL1fo8ZyVQ2FsNeDnZ3UavCnC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XcBMWRuBznxRRJmcUcZxJEuo1LshHdB2U3qMrmZNZjApFieqZYSkr1bbp7sLxdUMfpKKkW3qj6Fp7qj5D2RixCH",
  "key1": "wJhNk2i4ycnDpmuxsA2yBGoKSzb2oTJmCWwgNUMstiNExwqLo28xkKnGFY5nVdwYJmTCqCS5toucxzrMnzS5jkw",
  "key2": "5hZQzGQinmYMbiyWctuYmmuPPmMij1s8rFZgGXmfTXK8foTauNTmac5Cwrx3q8TBDW9wC4NA8hC4RE2wqU9DEUxU",
  "key3": "4P8UJaVmojHSGxRRCSf7S8GfBhd7ih88ucJahNEA4prVeFWHNv4q6ssHsKMa2fJQ5L6mX6Xu5EHbx1fWiYUqsJ9D",
  "key4": "5mEgQSRM5qqNCPPQmCthpHPQeSVQBYRTRdP4ZrNKiB7hfNZDUyNDy8rDhwFKf21NKUBaDK5FjR36S7DwH2SwuLn4",
  "key5": "3MPgMDZCCyNHNjx5QYPQVgSM5fBDaVr56XtsBAmCdNeJpjMzGcvu2g117nQicPCYzvn8uJpH9pXCGswh19KnuLPH",
  "key6": "T3ABxcaoENoQHSjNjhxP1VD5gQLAJPh2aS4o5V7RHtFb6E6SPJR8oBd3ZikPnsu5o5Csqzd61KngrTbvT8S1mTv",
  "key7": "48MqFBa1PbWFmuEdwYcbzvr66xHZLnoDEZN4UX13STU8bfATQjr5Qj3Zbq1CXxdNTX9htkCbHc4gBXxc72kkdTv9",
  "key8": "2frJdtAEFtMGYyfxfTTZFpLu7sBekVEczJf933EPa5A6ZfECWVyE9gmmRC7Q5JhaGzqNGDXP89es6qTDyKAzgCfd",
  "key9": "5duVJwKzDZLh27q86MZPYoqZvNR4oJRxfeqgGfCZgxpvpcxXEqVYMSRNQQE6m3o2nW1KkRRYMShgGS99JqWq7nck",
  "key10": "3dxjbnBPgr3da17acAkuffNLeBbhp1xP5JVj8VV6iHgnd47fdy6MHrnhwvXYL44YjksQK7erNSKByCG95JCfhq1S",
  "key11": "57mkuuqgjScaFYxYRzYeDJRUJtNf3Huefd7ZiosPNi67dE78Dkz3v79QDCQu43wgkV7ZjhBMj2TyoK5PNvu26AMc",
  "key12": "3U4qSzqHWHLA6ieeFjEadHWZRsykqrzFezksQV3uLBzjjBvYXRq8ctnKTzTnQyhbHmDEikbv1RXaxFdJpkRWtgSp",
  "key13": "59hYmZxNBW2xxB9Z1PxXYi5JDLCoujon2LUKG6TvFRmsprEGHT4BHmTViQXDP7eZEHGH611DbqiNSZaGTvxyVMJ2",
  "key14": "2D2q3SoTuiFHaRDwVyPYvcmiSYYXiVZ64C5R7f6GmC6jk9EoAN9TGJmpBPaTt4ezdU4x5htoTkNuFwAevssFeswa",
  "key15": "5rMDYxBoFwE5kck7oBzAvxahiWEkymjHvxxKQ6wtMxVLc2exHtHgo1TZ3CZgCQKtxZfMLQ4spVj5srRrB3zoaQrc",
  "key16": "629CdVqGJJKFawUY1YBr64x1BgvojipD7PPDtS1NC5DPa2HA2GFpkYfsWJnzDe38tPkKD9XEz1jCADSnh3cqwW2H",
  "key17": "nuwbNSxUujtTkRbMvqDDFf3yuK2zistKAB4SWVtw6oB5JeS3HMJYtA1HEPDR22FkyqDKRpTbspyaFk7N9vVjn92",
  "key18": "2C812xTL3Lm7ZwoLwFxYEq7wJFAHtXtvszsqJm7WqFpfYJL3uw44DcYyxKzPHyMaCxQQroTbnreHph1DVtyt21EQ",
  "key19": "273vWjS6tSBP4p6GSAhxfqab4BeYDD14m34uAcR4LvvNFEbGFXKKPi8H96JapUymFj1cuU11Ag11o29DVkobv5u3",
  "key20": "m94FC2kj2tP66Enr2ATyD2PkynRM1DWLzgAjbJGFZE1h4X4eXPNoYoUz85CombrYceZEATbDRM6Uq7PT59BXTAs",
  "key21": "RkDVo1giRy1owve3SAJXfsV5Savxtkqn3YpN8NPHcPsTAFmJWFPAZwedvLvnduWXS9NSh4ENEXTkNhKzZDQn6uK",
  "key22": "EjNNe7we6hmJipGrWXtbt4TYubK2pEG2e6A3tKgMneEGMH4vW3zuMfLi9fmQwEVy4LZpE6kCEK2X9abr68zUhMr",
  "key23": "SiBi5ABky8NS8J74PXbq3ew42hEZwATJteEUQw1gfPN9F8wc6suj7KbjqYJpYWt8DHCq3A2guuoEPZ9Dqx2VZRa",
  "key24": "4mobzEvsN1yHw88LcpR85jHcrjwWk9Dt8Y7QD4U6UZn9hWyrjRbLz9CimLL1dawg8hNv2oHCAbtxixJgVY4J8NUj"
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
