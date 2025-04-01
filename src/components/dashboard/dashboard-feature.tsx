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
    "5CPPfEmHZZvkEGn3eTSBaUegCJVz45JWroFe3FwMBjRWE966zsqr9BfwhhRRVearTRRHzMk1CuTmYKSXSPNUHSq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNjU2y7F2VFA3dbkuU89JKPG3GKBSMAs6gUQLvXtCjFPXaFRJ7gW1QWuH9jBorTL1ThHrAPAmUTDrNJx4MBZ7uw",
  "key1": "3oWKaQWBpHr8XckgjRLeDzARB7R4oZL8UQ6kfmhDoxvN9nGjxjWqp8M25aLVoWkZtBMoHw8197QEwbjDXjdvSzqr",
  "key2": "33c3znBqo1ubfpayRe2R58Mi4UTwwFw9x6xyLfKGVTFZigfpCMsLqRaxRkkK33J1hF8sJT6DTs9jYTvCGM98WZpE",
  "key3": "SSGLnvwdgVmgQHXYznkCyr31vNu36rS14NmC7rKQutxMTGknfVvZcbj3H3fQTPgh1mLxSTgh4GDaDgsX1zdn5Wk",
  "key4": "CnYj6arsJe4LzjGy7WSqLiahB8eeihrsUitxkrgcz7He1N3Efnu5eyqRjjjwUDufL8VbybapJn9ToXgfHJcNDzB",
  "key5": "62DN68J5UQf1jZAYCa2qYtNAqHDeVzNcL66EX95adbPLFRuVod5TMVoi9V4t9NdgcpYaHyVrc1Gi3pUTv2u2hmVT",
  "key6": "2sWXyY9vfY5A2fEtzyVNzBj1TswqgbjaK5TW1cPVy7va21CeopwBJLSUBuaxQR8VSjvpY4wWjgmitMMKPzW1Wut9",
  "key7": "5iXyTdJqW8osV4HTHewHQfiubBKjHrBgFwiwwoiBagAcwLnjz3NxLEBTWGbfYvTzifihJn4mJbrFUTkCZahkjXZN",
  "key8": "4ivRe6SFGDecgzt7t5hEhrmhpvaG49GRGJXFiPwCRNBSbsxwRXyNh37KMYxQ8YWp5CJeJ2o4Rzgxu715Djeq6Fs2",
  "key9": "2ASD5uSByDHhGoK3NvjLVcacA3JaN75rVE47FHCozDmogR6NKKsvdEDzAF5E2Na3buuYdeyfQydaVQFRe6gSeBUu",
  "key10": "4FGniZrcAp9McfmNURtCWt8XQZrKNbkZ29r2S3U6RpDoPpW9ypduGCfXjX3FjiCNNUQ4NvugCLQ5oAChAjbUvs45",
  "key11": "3PSTYTUfS5g4ntPPNoKDrJQ6jgjkkXDGeYXkW8a2RUNjpMZt1S7Nzee56kxiSmeaiq7n5jHPppkrD3WxuWMsPyHE",
  "key12": "4mKUDGpXzHSihWtDDuvCDAgoRitDsBxsvJnaCVqZtLa4EuXxZCdeHygeJoe4ouMBmQfoekkWiQjjFKu8Va9GknvR",
  "key13": "2qkdJzsGJ82HZVGpN3kfH5VGaaQfvaaBhjUcnWDV6jzNv3uqHrGnfTgqpsEmBQ26enLyaQb778FijkYZYFtdLZ55",
  "key14": "3uJS6VT1MR4Fcqk4fgH7Ys4t3ZiyyxEgWBN6MHYymgh3R4g2fYiYiNpZYjDJuKG6Sj6SRLxQEY8QhJGPZeSwrpsA",
  "key15": "4su7RX9nNHCG7ERui1Zqb5RhX457eDYevbaKtpeqzbyzRyD3sKghqJg2udvkTUbQszCwNsGHdEiu4HZiNA4cDH2f",
  "key16": "2pXLEBLp3h9Jqnk1kyAuvKY535xN2cPiT2aqKKbWCPLiXREyJWdY3udDQejdVHftqGd76ZSidZqU3sFi9MTVid9h",
  "key17": "5L3v4tbRPPg44mM6WEA7Z4Px4GmLo2aCq3GxVS6bP9kkuEyjTug6as7aaFqJFBfUKGXwqwSRjfchYbuwUHYaq47L",
  "key18": "2f7iJxRpo9Fd6KLKDdVDSy9JoG7AUTKd12D5NRUCqp7Bit2fvkiBuZwAjvMMGS9gSHCjdeDC28ofeDXxapRNUGpB",
  "key19": "259S1RGga4A31sHDzfSbtseWLDJorUSscVB58oVMDuASHLNP8YR6HdWjZAfa1dWYRWYpCdxmXUo5M2t3NdsZMWq3",
  "key20": "2kaMdZiyAxDConzooRbmewpqpAAsn6g68K3V4zabq3aGe4R7csxBXTNQ34zxj2TGp6xmwTT8mNDW4QkD1yWuhHSp",
  "key21": "2nDbwFvJES6Yfgv5Chctbh9HdCbLd4fA8WRiXp9Ng3fn57fBZfuYRXx3V5X2TByVm9GaqStUQh5nGCcz2qvxPfYN",
  "key22": "3ncnafEeAty42VvYtpp3FgeXFRYy5X2Lo6TJ3syWbBrrmWRYG6V9iFeLm5Bwp9YoNFmbyg21tYvVStKF2iEttg1y",
  "key23": "2vKxQYZStetDRgE2NxF12fEyxzeoTKZuG5dqEj99F9gGQVRk32wMLP2qsFZEsB6wkyoQbZ5W2cLXVUgrNiUx5yBY",
  "key24": "3deT53K4tFguN7ZPdBSm5u5ZGzbSXzGpsi1utNmTAXuA4CCnJkeNzNC9aCEkPyf6foPV53HTjXtSkF3PkPKcDznv",
  "key25": "66MgbDzqdjx3bMDzABRUYpeTPtG5qpwjYnXBgxQEjQntRPazpet2mqEMgLcJfgLSnBsDSufoJSY59pgsgWp39dqC",
  "key26": "pDQFgZiPQpLK7z93CeY3px2yd7L3wsKCJTnkyj8fAQo9krscf6xUq2M76VNEM7pD5mwHmoN7ARZMGH9RhPKVm5K",
  "key27": "2jvvSSxAhbZqUoWoaAn9FkVvw4ebdfwENcGMiGR9wuLN9bvtFw7xazidwW1kN383A38eEnXDDif5rivnY2WQ7H7C",
  "key28": "5iE2kfNSUK8T1aMFZp4MSrVeJVTPQMgYCDBLpj4vVApTn99E1VuhqDEXWun3SYV4d8Nca4W977EgxBNfbGjiPUyc",
  "key29": "2mDTL7z4UzuDFQvNnZ2Rki2QDQnNxrBVJTKGwXFUVgyLrqsi9YKezhhQoaSv1NwiGVnebfdE7XjEUjmQLKsvvECB",
  "key30": "2Qb85pAE3tW5BPgJJ97vpRM5UvqsnBSRYzbPcdR79h4JWQh9tc78pCantFxLTzBSGpUxvbWa2JLhqj3QjccWBkL2",
  "key31": "3pHnt6UkRuFh2SwHsPfms6RkRshcgCfqxXbnZtjyvhdx8YaM5bLAN2m4BoS6KD87d8K6GTjU6zTimYg9TVb3hdH5",
  "key32": "2a4evaddpQjXbLz2pgksDdS5JwNYMEvHq4rmmFyGBbE63fpaSquKkhuqM9ApB6YAjKRN6FsqpcgTD9nEMc81Vy4M",
  "key33": "4xbz5Rp6JSk6vc69hDU3k1f8votniBEGpp7pTe5HytWNBFv7mZJFfTREMHWgo3EbMKwhHtkBMjpF85txLT7xpor3",
  "key34": "Xccu9d9hZAmCbm4zVdREahQBEgGqAgjPpGaQ1LoJZheLhGNNvYUp6mkKd6Lvu7gcbdajvS2shDXGyKzPytH3Pb3",
  "key35": "3bEybfos2FjFY7dNAhcPWHvRMm18LdS1teHPbgQZHkmW8ZBYJRPhxJs7vTgo6Lh3sacEDuHegdgFAXMQyK7KFaGK"
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
