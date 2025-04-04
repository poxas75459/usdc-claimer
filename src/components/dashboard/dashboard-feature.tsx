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
    "2j1HrZMUSGrJ3aX9bm9LRhnmwMXvN3JEjQbHbiowa8TTeSTMo1dhVKEcu9JR8mBmz4cPf6hNaSzDgrHqGena3KqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4fHK82M1c7VyQR455UG5yLvSosGEDSvM5ELoPALUeWWyWc9xrGop9afbhbC9jNKWTGDLVy9ycQXQUB6kXkraPw",
  "key1": "45X2PDKZNr7knsoq3oTXzYmkdGMcZqtWbgC3A2Stb38cVb18Bqz4wgF33npf7iDUYDfAzt2Bh8RJJP6rcEggoQhw",
  "key2": "AKm1FFfTxZmoSQKsT8oPCytABDtwzACuhZdLez1WSJpRveNeu4EWAyuTpdE362Kktxiwj8D3SUyjRGP6uNUX3xB",
  "key3": "BYaYZenqrguEYxKSvkkdbyRdV2fUeon22kWdj7v9YeDimgEZJvtUKRigTc49b2ZBF62FeZySLJnnudfuLPuhfqJ",
  "key4": "2dC55NDGYMdFWTdXcpJXFBkE3yZpWYLuyz7pxMALoG8Q78TNbGF2sbuVB2D5jTmjLC5qegHxLpzhdwQK3uoCEXdx",
  "key5": "256CtuA233BUn6Z2bFLM6X2VEoTV2gbLZzQaWFznprHDWtkirso8kQidhGKSDD8QsbHPgGFkbC84bfXn84EShrKv",
  "key6": "3RtetXcvWMEAcvYp2eP5FGvpGa1rKmzqW13rwxbinkXYJZ4GtFMNLTg2XEnEaQnurYBBP8iMyiFJJLVCtPJR6b5E",
  "key7": "2769uxykstZyNnQ23DBFfy5H3nD6ZLt8qfEkt7a6eahjVBtUs9ntUF2puWiW3dUofQGRQd1ybAzHkZRURY46SzxW",
  "key8": "2anvrWt865zDnNLzDuaiD1VgXEmYFabGdAEYn1g84Kpc7CGvDR7X3GDVcDDsC25sBABCU8rNTj7wWbwQ5WxcAv27",
  "key9": "c6bEJeYBJ46dYvJiQApvYEEGs1L22prffcxbNzS7a2mpTJdpo49H7j7CZ6WFMm5dnGtS2c7qtiXY9sTJu5V54js",
  "key10": "4NGLngssrZ4M9fc61kTZLsbA6LvaxP6Y8d5BwRreQgRy5WHRAQpoHADS8conj9wP3hxdUi5KNkiB3Gntf6XJkJf5",
  "key11": "7TQG7MuZwCk8AcM4eWQuDffmkPwK3x7DKTjxp4bEQ1j4um4htEpSUXeajRGDfoE4pkAVyHCDLweg2d5jHuezSt5",
  "key12": "29bWJHFEJuEuNSNCgti5rbt1xr2tmz3k6uQ4nXHg43wChCxJ5rqGJPhTEjtJukQpxv8LXw1CJBo57aWon7NEZe5g",
  "key13": "5njNQVpvW9EoYckgni76BGZ85vtAmNiU2USSzERAPXNasnFqMYrbViACmnXcVxdHZ51RmugPt3vKYEcV338foevK",
  "key14": "2gT6G1LHB96WXFDvrfbF5HJsGPzbt1AFjtFCsWLutvte2vQJTHhFQNdFAmFYLNC7EaC4kZvqXpWZW4ZfSfddBFuG",
  "key15": "5Z29NSnRjc7HszrAKdWWbJiogRPgguAkZzgBfoahxWPPBzgKbxmRgQgXMMg94kzLtj8W4dzARqkd58RUMpKRMHkv",
  "key16": "572Yx2crTUwwtDFWmvrSR5w3p9SQZT6g3bEf1zvgPWcfHXDgyMrgLKhc8AZnjEnNCJ2maxB6WSHJJid9TV9Ppnfx",
  "key17": "YjGaexUj4NHhsE4psSzRue4Qez3zmQYVXkiL6QyVfM9U9MV6etM19Z7AcyJfFyeSTZkac1PyEvAnbJ15gn2qq7M",
  "key18": "46SNHh2cj93s3aXG2apNx9GeSZEiU7hPtMqVws51KTCCKuqZtXjhZDsEHW7h7st6bw5jJpc9L8snCF2KzFkJrCz4",
  "key19": "5jyTx27gt3tyMw5VD3PPWrLTUSCgUSkR41bHTm1ff7iPyyMw6YGi5gLwsgmDWZTRno6jCTNUQ6snVYyQL6qezQKS",
  "key20": "4gGdJ3P3PoWpYuoxLJ9LL5aKjXAHMNb1JPZw3vRJhQjK8rZuzyuvbCJPqdmwKgSWazgPoiyEMTVddyeJs7Vtu9d9",
  "key21": "2xjdzhm3uRL1hcNTCSYsiQ1neKASXNAA9PdhNeW6L18RfCDLHYEYJy58CqUo7SnhKTrAyJmbyNx6c6sxoVxpeUyH",
  "key22": "4QwMj83RVa5tdXmrPBY8q4J4kQP2zpmRbCTjGqUKBWzh2HcYnMvvVySD69yX95i7kJ3F75LrdVPbbWgPLszrCQc1",
  "key23": "62VuyfttXQo6nsfwoUHLsNeJEDNG9rsY8X2G1YdXwfTMExS3xeJt4bRRn2LnDS9qubZPbXP9Y9aGeUuw2RZfujRS",
  "key24": "Dw9XuuDhu5pnbNf4kWhvV6qcXHrojbQQJ8v7SAi82YjNWifvZ414RyeoAkeXzXZeDp2tUKUEH9pdtF3wLZeHiB9",
  "key25": "42rUGnL7ZaR9pqTNSAmBegtC2pHrJJYpEEeFf3mhus3mEFUYZYHWbJTUyDnnVeCTs5F3sxLdTJtqKtXqrwsR5FUG",
  "key26": "2HMw5LnKAN2i7AYpd38wHqWodjjBpzWoNngPJ2VRY2QQR1pjLi4pz9J7LYzB2TVGeztPUVsFqEd3gRVxjcRM6mT1",
  "key27": "2UBNy3z8yDbEPExF9HHwTCuzatdcftNygoCBPAZkZBZKJMKLM31j5XhCaW1g7nAH97Hf9irrYU3DZBQrsv65szxG",
  "key28": "4XhCZiywtYiGSGLB7tQi36cnW4cbf4mnU65kAEuQk4zCR5Ha1AuCEqUUnYWhrtjFfuQM1tgL95Dsde6hU5jF8gjp",
  "key29": "5uGnpN2Ft4GnmFaZ7eGTsRkH3pnb8Qy4jXsAZGmNXXFVFAmCRr9ukoKDnFZAMqSdP9tu1UsYJGNQ28ih7bum9nWW",
  "key30": "3bTJAsET7EDKyS3hBc6x1foJYvRHUQpUoJB31ZbSHPVc9YRmyk5bsMhKJRndZrvxfMMTDEtKqQpxtGHK9svNx1As",
  "key31": "2v3Qa5Pt2bMWJ7aDzPD3nV14Q6Be6kFhQWYDcj4XA3Gf8WnbHy2adgyGehZrUaJ31gCYmhveXjq6hoXcv3bAQMRN",
  "key32": "2s28pEueGNTtwD61LMz9KWtkpUVKWVRojxuYM65EYTouNRhLY51MMTZ5LXmCL1qZp9Uo66zpnAFm7SA5XpM2aUud"
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
