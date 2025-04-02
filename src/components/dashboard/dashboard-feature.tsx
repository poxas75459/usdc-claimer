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
    "5b2fDyY56TDnFXPeqwdMRZAWNWDq85U8oUxi9osR1LMFtweuk6JAbuDxskKjVc1b2uF8KUo2ChqK6852du59zCDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aZMNmj8bHQYFnr9y3scCiC25AkAZNstgDV6rS1cvedr5huezL5tupa4hV4h96YXi4N2hYA1ocmp4NWmr1a5V7C5",
  "key1": "4NEsw5SeoUFSCn2Znx3a2XugRxYtqued4NfV4QUb7shub3eud1QKs1wwRumE5FvfnpUJZu5YiVhpRDmMpqvoxcGG",
  "key2": "4taCnMwVne5CvmmMgvQiTrg5zi4Rs4YSNLG773w6MzXNXRE5UTvPCDqHcxA52gKAHDnKwu8ftLQVH3kbHtUbgqic",
  "key3": "NYmRadUnPfPEPs1Tof8ZuCmansattyJKCr54WCyL65eXK6kzU5nc8Vfcs94BngDkbKwPkrfL5ECa7mvZ12dbgz6",
  "key4": "5QepbEEMLVSXvN3aiQToDYcG3bZpiWF9F85rpdbJQev8NKnT7H8TnTY4ykUcPov3BJtfg9spjbDojkx6NYdhMA5g",
  "key5": "5dgiHwvBqhk5JWQMst7ajsJd8MvDZh9aufLtxC4xiXgVYetBcocpoZGJf9q1U84TtLQytH2wwzzX1uFrsJ4oTiz",
  "key6": "2bLbdGtVZ3tnx7ikFp5WgUwhMUJb97vJmphXEixoraPEfcyHUgBB1b8JFw3kkKxHcyeKYcgDRLe3r3FjBMmPoA4V",
  "key7": "35cQe87nvHi2dm9o9Lvx1RCcTnWZkHVvKFXW1YVbfHzQo7HSA3jyv1JYcwPG3nEME6smcqxGZkDmB9p415ea1SCU",
  "key8": "4FSnAP9SdUy93ztLX68fjyEtbirMNrNfetTFPadziSTso3VjQLSBNC85LBXsTWJgTQBEE2FDci1Qz7RTbgHijs4f",
  "key9": "2hXSNDWcBzhsMthei7fc924tHz2NyXSkaNGzfcxVWXiWcoHpAWAvPD3VgtMETgv4BVaDMiB2cWD6GXJgYBJ5VCGH",
  "key10": "3cKq5YhjdS3X8gS8LBUXsStyiEXAqK3RhApvusRy8vU22FZaMsjnSxgeC7WcDxdx5PRcHNc7gtzCiQBQEDgreHoL",
  "key11": "KzaEXY6RS2PGSXfT4AAS7Ur7V4K7j1EXp93FQTXn2vSWaXoSp9oFbWKstzPvzwpzZz29ha49LH4azwD4XYHM3JR",
  "key12": "2aB7djG2UgoX5TNJeroe5nR7wpdERqdKpN98eMHQxKP7zz827LGotajJNDrDGNe6Nyi4ejLGM5MMsmL6z3KRA8CR",
  "key13": "4TaFcYGbya47w3uVbYF6iN9bMdSVpCXKiBAf5YYUuUtCYg5WkBPTng5taEyNsKqJUfHVVZmVxQbysFrodueCBev3",
  "key14": "2gGcSBewfU9zHKjf3GPkCG8LoUviXsTD5skWfLCwZ8P4pAJuBLM2bCamaGGQdYjG93LAXrxumgEYvS9F3jC9k5Jd",
  "key15": "2JEW5VbMhAGBM9434vcxNvgL7RJjoMG7uzLXUkXsaZGiZsWdhxsKKgVwpJ9bSXuD1afEQYux6tgiktn3RzSqafcU",
  "key16": "2xjDRfnUv4a4Ztnv93TXoHmmEVYiqW4WsS26FCjnUFA9uLZCeYWahZcPPFPX17ZJJx1KuDepCLKpy5qrth4Axts6",
  "key17": "KToE37Kb15km4AWH7GGR8Rb6tCS6sQPSZg2HHCANLoWHg4uef6eXikSFmMCYH62jAyeTzs15EcNbKEqYaS669WU",
  "key18": "45n2sc7USbRRcJp8LQVShyT4cPpAEgkAufyKPfwxFQ6sypzoPNUpRJMfTXHypyTcpt4zSRGCwfp4xkJvvx97erE2",
  "key19": "62neVVwpZoHe846jj2RSSuF2Lmshp2axzerjzcieYhKQyaM1PBYNsMJUoRDDtwHVes1EUqxibV13kmh4sCPmMobf",
  "key20": "5kpZQVbzU21GodEHrZ3bzdGwcVFJVkcGcFYfvYZjoUqKtqSeFHq6UiT2ca9KWAD6f8ALrbbza9GDqLCwqENLF477",
  "key21": "sW6ZXpKUrKuYSwE8Pj4eAv8hZYPLMEAuTwSXnxQGzBWs1xYaEqnLZ3oqGFNQz5t8g5NbkxtgbnFyQmJAHFK2AHi",
  "key22": "58odtr4uFz34xqKRLTSS74adoosUnnMUXNXzhfdXehuiXeG6GoEn2SteWib3J3pXXUEMy9eZUkJV54uQddMxKU25",
  "key23": "598YBSmYSobd3gVaPLRrSqg8UuVi8V9XznxD9sftqe9uzHaJikYUwULgztwkhGDyk6Qj6uFdwHVtyYoxymcYVvbV",
  "key24": "5qEjMLhrSvvzztqK5nbvcB9U3u7Qk8RgQQiaG2zhdATeNQfwAxGCFVX92jmKeYmLYwdgYFC5gB85y89zZXZkjkQ",
  "key25": "5V9W6iZ8SQMhHhYvJR1nq9uQEPwa5vVAh4pC8PoFAGZmVurMd9yRLwCoM2y2sRruNuT7BGU2AqzuU7nUjZBhJ4rr",
  "key26": "W3hdHPyhgrgxgCWSoepB5JGZxWDGE8mwYjeBE1kyeZLS2nnD2XVi2cwKE38zButHVZKGPe8X57SH7DsMAMaExqz",
  "key27": "5DVzwqJJKL7F1cqTuD9K7hmB6nUNz9ygHwMFVzYpnGoWCtS5xJR7DA1qEC5zzZyWBgSaJyzVNskcYfHg2fFEtH1w",
  "key28": "528wr7e4mDEVvGcv7BiRyLnJwhmoHfgWLUYn7sgBa7QT3sCTCaXCHC8AtM7MF1x6vjYbrjmNFqUwSU9sYuzPSHvN",
  "key29": "4tGGWh1FY9yvfR7iw2mhG62mmcwzyyS26ptXD3yGqtQ52nUEhCyv48BtLrXJ2R1EHbfxbdp68temxcn8t6hbssmy",
  "key30": "6JU4RoVDSWqo2X5T4BqfA1W2NhTRySmaGvWwLSvB3vLpjS36LFgeZwyanXyQi5vRgSrqR9iYG7UAJC1fzcW9NpM",
  "key31": "4o18g9cmGYWEF8PF3daiDrfHp9GMx3p73RQCtUn2hcheg5t1vweyuZM4ocjkPVVLW5KS8MSSTyVPXdxTyVK4Uqtf",
  "key32": "wTZkxF9Ucuhh9DG3rdvWigf5ABivnkJK3toDkkGanBqVd3ECiYe52yJRbLbKRDNxQwq7JNhc7ErvA419cqUG2yg",
  "key33": "fVJHDr4kW3LL1bUng5gfKYQSj52D95NNQqAouFasJggKNzJUBBr2wWW4qJuKHbeBdx11VRqBMEr3bywwSetVp5E",
  "key34": "2mbX393enziZKK5f2QoBr3cN9XhsvUjEyW5CM9z7S3ZM9YDBYiGvhzYb4fEGq7VcbbSPnUkrz8sGz8qG2ycs9HHB",
  "key35": "5rWsgpwvBqMzXoLwGURfPHWw5Kuq8FdND2Rb2btRzovkeXof5u6unNYzNtoBSbSADub9Hfkh3gyBsEoYu3cKS1mD",
  "key36": "d8ua8QitXHW8UPHAdtz2DE1RdrRzmyhKAPkqxpgwj9ZFKcNCjHr4UULpaDxZAYzhsVq7k9mP5jyQnsKCLeiWmue"
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
