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
    "5P4gGrKj7JmzR28NsvXUGoKGCkPpgRschpqjTWyg9ppWhLWsqaJsfccsNX31HR4i8iob5i2RdwcxwitTiZ9HXzDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEnUVbASBMLMqQi137hSUuHSyoujQ2so63hqmwbho5incjBTTeXY1ZZeRcLtFvRxxc9hA7aQqWEmmx7fhCMpRM3",
  "key1": "3sXc6AFRVw5pm1TgV5nHrmSRXfc65gGkDCNnRW4eE5knukZapRbt69LQDX7L81SXFPzzToS4cj5TcHzwQwS3RjPu",
  "key2": "4D2Fsqs11pUKsRQaQhMnjbtjfZCUk3xnurXoCyTFJyzpmthJJhVPgumu1nV46rv8DCngenrJEQtZGDsREj4mPnJz",
  "key3": "5sy8yFvZLWb8YsDe5RLHfFLCiyz6Uwd2pEXXF1MQPvAW2TH1iBV1qamKARwwSUH9hgRyajKiQdZn3dDLxSXCaLB7",
  "key4": "3QA7rYzKyVySpeWbo69Tdk7t5eLYiSKaTsupqHsdqiWUnziLAYKL8kyQTRX41NJ1A54zcKjrvznNuJhw8M9VZKoX",
  "key5": "4UYGbgtU7q4ZfY8uB9GHP7mUs5mcjVtFHziaXuQptbTtfb3LoggGViXkuCK851od5rPc2o4q77BjVscYswBrS4cQ",
  "key6": "4z4QJPBAvDkbkbsu3CdpSWvuSHfnnLcpa74NA7kPSPnfwF3bh5Lw3Tw8v1EXmkM7Gmmw5xcAN2vp1JGc1iASNRDZ",
  "key7": "5m3DjiHsYVjNUyMyUFcXk8k6tnevPx7aFActxrYRh5fpgAc4fDBeYNPhX2hTgW1izJJiHRzacjULaXCDSxTvMsrr",
  "key8": "2hLxMd8qhajkshrpwYJXpCz5dwwfHddyEozeAUVncPLoVSdmfzKqquTgeDY39ZHu5ra7C2inMkE6tcPHV9H3hJBN",
  "key9": "65CZ7yCB5qbv3wviMedF35vcXo1t9QU8caaSDVkMsEpskJyynE8eeb8ae6rzd82UhvXHpFF4pvnP5UfBqoEgNYgK",
  "key10": "5aB5A9QUWksgzhrZGr59wfFZp56dKmfAexEEL5JkmWcUfZQULYGmdh1XtiAkN7Aob1rUwJM3Szqt6PkBzKUcjnGc",
  "key11": "22XXzcbpUB3BA7ngDu73Xdr2JjTuAjjjG1tCraFHZMqGymCuhMb7c5zMwSoPMDsfnv4esr4AgE924Ktj2HD2T5Wj",
  "key12": "3QHegx4Pkkgn2879zgjXVXmNaKyeY2fCufiWmPs3pshUfuqV3rF183YWE8DCcd7Ppm2tKBR2dZNnV1uTGZj4CY6c",
  "key13": "xvUSvv2ttNdqEpRphwhHFEBegzBgAzmpbWF23Vbrkd84PdXteUtAoZm4UyQFDp6N3PnzWCf1o9u8UuwXzkjmq6t",
  "key14": "4RzNjtSaLcJoPy4ejzwtEPdXbMEowE9Y6dbfA7ZD96PsFDQBGw6trGpAD642EnUoxgi9CnEhRQ8q6SiHNwg5TXn5",
  "key15": "3tMEjYw5DXx8cB2dhSXRGqyi7rBCQr15iNV56R4cFeu46RCd3cNRPHj5dsq4nLjCynGoRFYcYwk7y9HEePozk85w",
  "key16": "4deKRc9GujHtbBjJnfEnWs6tGBFS3hkbnwdhgnoCsM53WpV7PA9TwdT9G8WnoD3nmhC99exNChyTK8faEtjDDv9N",
  "key17": "5bAanF1Nq3uwkiCpDV88o74AAGxq393SzuYGCN2VJn5eJkyrnYyS3BTc2nh75vwYDpBxA7khdx48x4HLmL2QbdZ4",
  "key18": "4p2qiSM24UqZDFbcXPYQC72bpbvwfndPJGmL4dk12U66CVh197YmN2coFtRSLeYiF1ak8jQj4vxKsXoET7osuFHZ",
  "key19": "nHMgcFNB8ThT3gA4TAQeLDjvinLRRK9B2kWdfNsT7u8CpcMHcVQToDZKDx8rVAf1ajnzAaNS1TuhoqQQ5gJ4y9c",
  "key20": "bDib9b6tv7LU4xToVTPKfvEVCCiTAciBSKKEdESni4U8HDSu44DGhms6Ym8QQQ3HKymKL6aXZd31hFPvGasVG5x",
  "key21": "ci2u1ZqCCGQijRLcUzZfA9ZGEkTHRf4oEPM6W6EHKgNYvvHCMuatZgoXAKzT5buah81GphXBWY5KoQwYcZZ3kQs",
  "key22": "54S1MZqKKDUg36nWigNoe3en1b1ndMiz8htsfDufTAzxQUutvKzSKhsQ59QRuwqEQJbix6voYwRQqXj2diqZ6QHr",
  "key23": "2eBUKVumgm74RkSzdTh3UFfPk7rPhk8XFaeaN8THXgoAxdJ6nvNo5PFv31JEn6F2KmhLpYYK8Gd96yvRd2Pdgr4m",
  "key24": "26QRdKVK7i5MSMHpmmk7okwjQW8GYB1RuHp5yxAELa6ZUTbChsyeYVhmrGBPZVPE2txnPyeuxjDXh7CEK5NcMESp",
  "key25": "29xR4v7FYgVtM9hUYLbXhKj8hQS5DFPK56epKSNfQcSRNqp6FPhRqLPe8YMXKpjMghert5NBfbvvNAst1TGX1vrk",
  "key26": "4k6ksvU9tPJy6Pg1RhPiZGGpvweHS7U4yW6KqA6mLrQvbQLLKZweq7NfiAs3xxkSHFjLpCgtrHvuuwmd8sSWtXWL",
  "key27": "3EEXkHzoa8jAK1DVoVz4S2TpVh5hV5Jm25EWFW1MFZJDTjQpF37XaQf3E1WVLG69n8iSSowvR1kCk6W3XjsfqnTJ",
  "key28": "3JtzNiKBUDyGWJHjWFpLbKxigYw5Loc7HGyDsCVQBoc36qeSTQAQamWikZ42jRV4DxiHXKScKY55vSiEgu6nkB3p",
  "key29": "3ccRGB8xqRFoD7qVAYbABKuvprWigaUNuPzEb7FLue5yeXUYX5tWT5qHGcRuNVTdWhJBY5aucjBTSjFMnoiAxSmB"
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
