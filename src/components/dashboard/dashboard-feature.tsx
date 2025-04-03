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
    "42XyQZdmgg9WB5fWrQ6ywDuq6YA9gNRJWLvUwZppYAfAUQz5RQ959d4y3bVE3sHgtP8mEeoCc9KNY1VTzhS9dN1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EoEf5thM3jQesTk12825bprikmnhd58e7WLafybEM1nvTErShuk8JDWc9RkWX6Cdfzj3k2fEZCthmw97mq3T71",
  "key1": "3Z7dxDHUCEBxCYMagXUdG6mohHNjccNaZSt16wWVK5xAvh2wtegi8TBszZFsVcjtnRKVrktcVoCJTKjJbkHaM1JJ",
  "key2": "51qFKa662Y7CDobNivfU9oik5jiQ3eUuoE2cEqwp6QbTJxiX9NgJkkumoSyVnmVodMwUpoD5SwJom4aFkFHzUfp5",
  "key3": "2HX31Zb6nFuXgqWszDTq4Ni525GnYPfP5ocCPo2VRbgKXjrZLjTPDQajKbJ6NhaNgFzyuwaqXFuxXXZGwVtqgk2T",
  "key4": "3EjWZTqZdHvmvcpYNiDVi6M58bk9i57BRzcTUTj6EFQwXfxCB5Y1HSuD2KGmk4oU7Pu59FEsrNGNsKSPUkjcgv27",
  "key5": "5TTQdvs3ar86bg3BJ43m415ETN7Kp3G2Zgcj9yXbaHPTcExWjUGuGYKCtRVjqPdJ1EWcYhpeEpSuAUutnPg9YqeV",
  "key6": "4EfxPKYw49trXhZyJVpVvNSdMaRcgNcPwjTktn3Jz2fhLbewvaVdTzD4Tj1mEsaBngxUAv9adW4qtZU7KoXiy6Zy",
  "key7": "jXevMWUGm9xkjBUY3XE63rfBsLPXqRBucpgrWndr4xXjmqPH5Af8ji6tJCzDP7E61PSFZaE9NSiuHNM23jHFBpq",
  "key8": "61ptsqCCaMeyWqXiQzq6bh6az2sQAiEx2hWxbbi4Tipn1V7ENHcR8wmkj4soZyjV3uAN3nhFEPqdFZ5jvLsmKZMS",
  "key9": "5j22HkKXw6AB5BpKNzcvLSLxiyU13StmBjn3BqKgY2g69idh74WwsPVuT5u17V92GQgPJPCySR9aqrNci7am5e6k",
  "key10": "3zXpX1Ki9tgp4SuAU3eKZ17P5wbqGh2rt8zrjUWYDvLToYNsdrfZSZTxDYw41TaZ4ZDHWJVpnWTUvKTN6QjtcFvi",
  "key11": "5HbCxSSapRHEccGMTZrUpzg1oV57cZmFSHcPNjXcJ8hGLyfTr1FQechTAfDNf6P37vjPjnkHkpgEFEcYsFdhvBYU",
  "key12": "5tEPYQq5SQhCkP64Zt92izveTxwgzJmXwaM4uekQrHZwBp3pgmZLtyS4ijTKNiwbkKMeYoffYfhciPLUJ55FY6XW",
  "key13": "8EupRmvGYLZRmUw395oytJwhHM64Q4U1ogFn6THMTv3rpACuwATsLssSxhVCc2TqAiyfcQqKu3Gdv4GhESKjLxX",
  "key14": "5dT7ax728tezfQwUbdkLin8dvDtvVrRdc6LZpbyPACWZwbcSGEMtwbB7G2eaV99X6VjvkCYDrmGEbBBRKPaPK6nm",
  "key15": "3M1H6ogwRAGqzJvv86kSTAW6fcfT1AuJiMecdzP9Nkq5r39kd8kAmTgNCCfAWVKVPZrxZyRk2EwAgDWUpXHLmNro",
  "key16": "4zN4eVnHL6eRUKFBE5YUnZBnrH1m9mKBos2pmGE5bkY1weZMCu2KAqXGgJVjJHKczvDSHPTSjKGeqmb5VkJNn3Mt",
  "key17": "5uBxGJhNV1SteTXutfXNJs485JFNimPVZwhthZcKMAQogr33Be2yZQHnPpFthNQ464xoYkspN8a6AL64g9L9ppya",
  "key18": "3bbafg1sSvjvVKBGTqTwcmFeKWhrtgSnwYLC6WRFziWDqy5QJ11nxEsfX9zZWqHmKYiqpxQFKaNjeo24bci8GGf1",
  "key19": "4XFvMbhpwdUgtN8FyBKCf2EYQF9yxcjfVDdX7wa4ZFuv9N3zu26hGv1ZqmibgrXiN6XGytTyRGUMtk7pJ2jk2Uze",
  "key20": "5MPfk16fJmMZyQ6TgR9wTwrZ7h9CQfsHf5qNDxSpfL37LiBqNUJTqYScRLWW6mpeBb2TSGNLnvcaRMyqhQRtibCW",
  "key21": "9bgS7EW62Qr8yrTrPEzuWeJ31LSTScKCYeuVqsCZ5ydoJB6j9c9REF6PBWCu7kgwZ2FGyDN9kmj4cJUkkaRXu2L",
  "key22": "5uiXoUBkjUBya9J7sTZEsUneWbbRP5vVRKLAxBpEmfD8VQCEpECnTtHU8P1j8ssgsyzan6xKFjiuRkqv6ugUe5GN",
  "key23": "4DmWyh5NqRsyVTpfMAZgBBJuWzo2Q1jtKzGEnHhm3dtofKvdiAW2B7rpczxAhYxqDTCPxeWGx4QmH7uJ6haSGE8o",
  "key24": "4SpEqQpB4yjYiJ6byBQPZCx72svs1MtzX6sbeHbkdCZ3x7kFjLko4vx4pF9qhJXHB2q4xpTQAnEMLeKPbQXFc9nW",
  "key25": "5x5irwJEvzLWLNf1XcukuedoJwKq7se5VCqYLE4fkpkCSAqDhs7kWiZCJbAq4mg4bFbPKAp8WgMCe4miMp6QCMYH",
  "key26": "2S6W3pF2GXDXED4bpCtXDYki2fd8dQN3xQcM5rGyP3gzmBgAF1HsYLUC86HnZicAwPSU1puoxCBf5Sx4Vb5MPVwW",
  "key27": "44Gzugw2EjAUTpN3ebWGyd87Ercd798n4HZhH1be5oSEAvshZrXHBobpvQLkTznMTLKVsTknJXdV84ixhWwbjydx",
  "key28": "5SrBDAHbbML3SA6fiGjkt5oJ8ZHjBgzHasAMyqQjYgmt4Wqub2fohVeauwShQU2kZstUMBT3zj89vG7qCjjVFZs8",
  "key29": "ueLLPKTvL2hufNaGDkW49dorBwhLxorDoCCH27z77BER4woPhvKWYTDs2rf5NYavyJmv6EMrASsMZQAefdeZ1dL",
  "key30": "37v3wvfAj4Na5Kdt62VR746hZ7usVvMqQgWJ1PYG7wS9RPLvxvWR68LGgUzXLfHHfNpivH6vTDQkwngGjXGH4k45",
  "key31": "2KGqdyCop7fqPfKi5kmRrExUtej9fQmRsSUCwJLyzTP4PQuDioYfJheVYmeyVqgaEJYi2mLLRtK2YN9NhkjZhXQP"
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
