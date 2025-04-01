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
    "3FpmzgKpxkEUzMe1DFbnf8dV19chgwp5EcUYgQdMNBk15mdosuHmzdAPSJBu5bK48NYYxcPJE8ushrYK6CCVToXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zha6SL7Mvg3EPvGEZ1Q5UfcuZsYEcmM8VPNYe8Vp2WdybCR2vvfhfXdARCWEr5oXUUXcWSBuyz8dWraJRztUemB",
  "key1": "3joPtsLQhxYjyPsx18JTWraTRhnS1W3ZRAPYbW5wz1U74oeFM9VAmHgFcNJ5mj4yA5nm45vpknyWAXEejqn8vyki",
  "key2": "46RtNdWgKL9wNBkHTbUwQrrT3ywPgHNgW56QYQisKzxvijfvF9XMgP1CpUw4ggswJuQoZej2PsZnAt7dgADBFCxY",
  "key3": "nrfF4peUQHL5mANfEhLgLfRB72nYgnzsTaGFZw9wfBJKpWwmV2TtqXQVKvcmmjGPuCZyiDBT7He9SR4X1ihccHQ",
  "key4": "53hjoAbqnJuiJw8omWw2eZzsyJLsNjcT1JzD86ccYgNkmQV7qdd1Qx4xs5RoDGeGmZhXbBQuNKTekfzqMrKL61e3",
  "key5": "2nickxdm5fmWkhTVjQj4WdB6cnp28mAo4crmnk6GCJ9aFvETvBwWrPxBatKFMnZLSkVkYghJYAZzirtPkRmhUPJM",
  "key6": "67GR6HyKH7r58p9vjgFJJiVE8czc81y7hNjvDtsykFQHXQzgZUwQsmi75mB9ULJrFCc5WwkxaLTSAjSjjun8seiJ",
  "key7": "5RTrkfkF5xxZbbM4dUh7spDG4QDsXvj5oSgiG9or3GKFL5E3GjYGdFn4G2XNUz8oCb41vYaMc1djZEuRppnPqwEd",
  "key8": "3uN2v4c3yXc1QeuCJ127Ej5qYMV1h1uGbiiDbUuJgDT8pGoFa88VUtRsGrET8jsh2srsjDA5ZuEsKiFAHFkR26Z",
  "key9": "5P8FuUvo8URQFFNwyrRr8wvYqvAPAJ9VMq9SkEwVnHXT16vW4mWAexozMxrb7KWygcoE9dQ6GqJG9n5BtTvqnLpk",
  "key10": "4E4rZ6UBRyPhuicdeRWuDyx4wvUYcqUvRYRHCpaEgSgD1sPpC3vnvyTrpeqFTPrDDZtGGhRDPTZhPrLiFCGKSZmc",
  "key11": "4i34nT2LfWLxqtDscUrwMaeKuUFsL8oKfeJLhQUoTLndrtTPMNrwZSG6iNrRD8k1DHN5C2PEbWZko62aDuvNjfSx",
  "key12": "4AoG3JSK741MZxkQcZmqSokrYAKYYWkwuWpF2zLHfxb9NmwKKf2rnncr1wqRZNgwceDRntJom2TeTwWEpeaz12Dx",
  "key13": "52Yw7Gim9SyUhxFshMJ4LNYPmUsWTtvQERXpwSiZmGBkhLG62KZqwokhh2rzG3mQxdp2QecLZixVT8wUXFhtAgVc",
  "key14": "JDhZHfgjL7xYANHnSGBhoHFMdJhCGWqxj1io8WrdWfRaRr3TqCD7HHacetKx6rwgvCYG53azjPiLFBb5AtrVZEd",
  "key15": "32wRaetNd1zQ7b4PCQme3BH9FTFnCDKv1mLCStCr5j6P76KivnnNJxarh3LXgeVtPvZR5edXKuf6GYXR12ZKh5HD",
  "key16": "3EW6QEZUfzguvTJfHB58W9YciCWUGy4DEk2UQzbQ3agstN8NV589hFXa4k9zdXcLpBw8cNVAt6mUdUHYKmEv4Sq4",
  "key17": "Tzc1tmh4wEwse3BRUb4voMkjyoqkXsEg68dWsCGWpMet8wTNGyLj4ZzVoCqVmudk1S5jd54EZm7QdHzJVDVmLq9",
  "key18": "iJQ49oSUyhFnJPja8JUNKym9YQD7zGHqquzAGeVpcB79tR5AwfW5spH94g7LDDjsuqVGDDb6Xe7SJPKPYCpoYLn",
  "key19": "54Jy5B5JCKTgd2k2TbPcHFnz7EFfYRAfSVzESoXU9Yo6UWcMp9PYindjosXQt5om5znbo7X6m8hBbUctFUsXcSZJ",
  "key20": "2cx33pg1oHbvedRTV5zk7gUnpxeBU29qwJu7MJjQdULw93mGfrCrxbotP17aaoVmw2VniYZjJLjaEnVWNex17eK8",
  "key21": "2DaJp2bvUi6RuBGNeLZUG8316QbKLdo7fksdkhtrwRmMhjuahi3eMdhKXESDUKFQcibzK34TNT8TC3Na2HeBipTS",
  "key22": "3scFWHKewvyfRgGfFBKq6kdp43Qh8LhJLu3hULmBzC1qrryCJSm1TrZKMuFSJmZLKYhd4A7D546grW1q6zENhx7y",
  "key23": "3KNCujNvBRt6Apb3Xd9eV3Wvs2pe2zeBxBEXjWKUDmMbj8d6k3tVMWKg53U3pqcsBbStBvy3G6RxbaLDKaCDPG1q",
  "key24": "2xZJRVxbPjc5ZqiCsiadJfDTYpyJtiSFAfBSv9g5gMC9XeHKKUGWVkVXRHdRjJ1yk5eL7gu1dMh4AtpGJdCW77Gi",
  "key25": "2YQmxzeKFqRChYXcRzhKm87vSNTC1eBn9vD1qwh7f2XC1QrXgp8EoVPvaJTjaVomUiq2zSqX89R2hp8Aa95NnvPH",
  "key26": "3PcEc9jnokhRQckxwUHEjCPnU1doBUmxdo3ZVh2AZ6ngmieTgcWBsRE5qB15nxAAcGYgHfNpmexnRhaT4M6DGg53",
  "key27": "4AYeb9Lf4DxriLVsHx7Zw9rmGu8F4B5dSDAwBPjfDpSUWjc4ecWpN6QVC115G94pWxZRGQ8s2yjUe8qKMVJNQMz1",
  "key28": "339Yoy6bFWamHdq2eJ3BujPUoypd8gi2khc8gHKEUajqgdpavD4SQj197LXNnNqbmPgpU1GFmM8b3JWryQDvwsRt",
  "key29": "aGTAtGVcnPHC3fsfxasQVcmW97q7rRyajivMvoo94DAnfZCLE9qxVLiv7TCAQ5xZPKVU2gENgqhs24Rim4xrmrb"
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
