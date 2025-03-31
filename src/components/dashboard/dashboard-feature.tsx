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
    "NjU8iSsNzciP2bSeW6Ca5gT8KJFw6CXxQNKo5Vd8K55HCFdYwkD83yWDWhpc4Y59cWzizx6Qbion3579M2cFR27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtQ9ny7HmR213zXTChWhA1zw7f6SarCoSacYH9dUfMxwK1wUe91PtZcjUJEWNQdDTmmpKV8kaPu9WysyMfa9apm",
  "key1": "3jY1fazr3gcPr6jk6jYHmQYA3T9eLxiyCAU9PdemMDTZsHMuTmmocepX72s2SFZT4sD5DLXbHdJPfPHE9HXPeskg",
  "key2": "5ZtzRVkgx7SCYEqREshAESDJqMF4cZCmxBMUaf9mQssn61ycnDPMDUQ9XvGRJWttPbfHQKykcjG1BYBxVszSYmJ",
  "key3": "ruAZX2GTtGCFR5J9pqFDkVjhLMTQTBipzyCPJj3UNCna641GZkUMC9h9WEWYPSBdtXsEmF1m8p1MHHCYFEi3eiJ",
  "key4": "36TeYcG6Ceoe1pMDNewm9ELjTfnbQuY5cR42628xsTjGa1aTXEFtg1vhfS3mxBJtVuJWZifPs7APmzNwbHiaaV6f",
  "key5": "4ezi7drYf2CwcsUDt1gXQDZbLjkcZ7LZKShg7AhjETkbXquGpEWTD6h6GvXqLw3r4SdoSQVa6yz6Za3YoP1XKV2A",
  "key6": "4NkRnjeXYJ7MN8epcQvKVgFri25ZtM129PaLQHcra8AqYvNDfANEe3P3DiAgGm7w7gws1jNi6Vp1rePhAHvD6LbF",
  "key7": "3ZoXLVvWSMLCMA5DTwUVL1gDmG8UZnSaDRfNqN3tqLbsVL1i5xrsRygFkBvRPhnJVojojNCDVNQEuJda93FzcUsH",
  "key8": "2qApfXwdurWZfjWLMwS2yaLeSxbjuS2zkqe5AFdaBqkW3eMfsmZE9gz3Ay62PPLpcY4VpuzFadQn8PKDmqJ6BYpb",
  "key9": "tabJs2J1Bvq8JwBXspassBrupWbBivk8Y5Cky56jEUAcBE6m7SrfNignMM25UkYvgfkhpZftmjgf32htzYpP933",
  "key10": "iFtqpn1jqPTf9nVYsWKS5ursKrgvKPoEXJG5WjvwEeBCkYnLRujGMu1wVhTsdp8EjsWqbSujicwmxprgdfjT3FE",
  "key11": "4gywrUZAKgw2HGrLBHaBW6BhDtzY3LTu41xWGTdUmprbggW3JZMdnPUPcy3VJD3BMhu3wuAES4djU3qh6K9gRfXo",
  "key12": "3WuqxuJcydAN26aHNZAC78xdBStzFeQ7V6LrWHamGVLJ5FdrzeKBQcRBe9PGoqQRVvtGCxNQYPGvqHCqq2TkZupx",
  "key13": "3rvru4bg1aZ45MUx5NmzH5DMwpFxLHFHAVQwTMtV1XjqsSArE8yLvDDGdZxPZyowA3aLdPS1aF2a7qcrD2Si93dX",
  "key14": "2DgMpAN7CEjYiHvJ8LTKUKByuwxrLFWwhuYowYFY7hLPyBjQrtsbeWQm1uQNqRcdKVDBTHxugvbiMvTLx4Biecnk",
  "key15": "3UcH87MxVckEvUHNQDeDB5iB9t8r1MpnWhVVwKpmyJiNXZdNURicrnhSJ2rGvGRBUY5EXZAY6KxpEMPWFKGcTTvX",
  "key16": "2UQANDrkXhhfJUSuMkzsTk4AqbyqfjXfG1mXnK4qt3RBn6xwKoHgPNY6SYFeoEoPn8Xu2TNsR4fFLrdEmYggepA7",
  "key17": "3BmLWco5G6mx9XxXqkpKWQiBaCJkrPLVg6uPKX9TNbK4DpWmrJNn4eD9a7b4q4N63sWzpd9UqGvz7otcAusbiQrB",
  "key18": "S9zJnZ5dUZMGVJyh5a3RXQXK134J32xfRW3wgKyxGTPmwktKjKemkPfwjHYfBf1VhSyz9eFKVwhVxqbtptyiZeB",
  "key19": "4HJo5aNbKYPgKrMzpzxkz9gnbt4cSDUiz7GkQL91yiTL6nmSMHACMB4g5f5SobB83ezWChW4jeeorxsNB14zmyZt",
  "key20": "rCMB4XuSq3ndgPZ1AbvBLUAXR8d61BFvrEHD8c5jKGwyiKp1NiMqBHcTFBUPGnp8vMxWpBNo5Lb9vm4Qq86r112",
  "key21": "3rs4MQ3pdG1kPgmbvsLR2fb3WrFnGyZcnbK7p5mRihXyNW6rbAn7FkcGtubdbEKE49kTUtReJgVDRkZHmqbtf6xc",
  "key22": "2wz7mCt2pqHExCBvTLBJ6SJwU99Q2PPmmhsvAceHxNm93sVzvj6Xn7kcBu9XbQkgjWbDGgU5yMnfCYL12omXcd8q",
  "key23": "5rbKapx12AT95WxzmHUYtKpLcFgNkkrwCdtXfDLYXtMv8EC759if8CsnqguueYtwDKGuQw1KMauefeCEL9RGRkLv",
  "key24": "4UG79msmKK4RRP3yVdG7iiJSrLe1QEETswbvefta7TNsJaaKv5heCoTNYjS5didUiT1VEdo7x2pMmZp9YNDddyCn",
  "key25": "3ATSmX6AiV3w8JPhopx1ukF49FcYX83bLmURfmKYaNgvaZbYei5FxBQEyruVuvYHe3LrivrhrAAoGv8mVMUYFTaa",
  "key26": "24uQwmwDTGCey3cNpoye5QKEw6mmuvXUaX31RPEnpAfvMkdCE1i9pLwm89ZbaaZRdmgSngV2rJBe947hKaB11qGv",
  "key27": "5fmscTa17BjSUrtpVoy3duqgbmwmmm57YhwhS7HtfZFqGWBdS1tS9rpV8YsyyPUb1xc9ofKMN5yqPZdqJXpAMMSL",
  "key28": "s7LahSy1NBH8v6gYhjhhcrDRCt2p3hDGznzyL9vVqmddQfhTCk3bKCbronJuXWNqQBu4CCxdURNTKsDvEgRiYds",
  "key29": "DnJXX1AoahGeZ5chQzjL86D3fFNJ9TEsUZXkMTapF7Au8NanQb1iFeG98im9gAi9NhhobKSDFiKb5CTkBkXofiB",
  "key30": "4BTyfJ5u4dURWgtT6LAEnKrVAZJ8EYmZaw2Jbp7cvCwx8WrqGoYexMEQH2zc4AZEmUw6JJSkmMrjfLdNnHGramgs",
  "key31": "3ZoAaDK2xzxbmfEAhY1rbpBtqbb1K4nnYrQRKoxL8deErZMp5xbHu59N19HzUANJT56sp7YkCqxVNQY2psuuhFy3",
  "key32": "24Vkniy33jk2mKoDwSNqFS54MQdxn41e9xZczu3KvG1WhejeCdg1K48GpHPsUzw38PBVSsPxCesJ6ySZqnLxq6ho"
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
