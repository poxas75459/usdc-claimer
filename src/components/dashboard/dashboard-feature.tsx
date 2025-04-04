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
    "3pw2nKqBywEaRqB4FgVFBJRosM7e7XAZs9jPNmmUrzaxJoPWSBRgqSMCX3XMKLe9Yw81282dVYwSER1Utoaikbvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCG8QZBVohSNeixZar5aSPKRL97W9pNhHj19KtiDgva7efe4jKGaqWAtSqGyC9DTT5ZCmCyQ4wXo2HJnV19yskv",
  "key1": "5B9xok4HMF8KqnsvGdxi3HEdJ4aavGuD8NXBwBrX7fh8RF6oTECYweDmgXDgJ68yXg18v4BKs7rrWhfBGZwEZa5L",
  "key2": "4TVb4yQWMFsnk2Vp5MWGyR5VcDiCkXBg576eVM7hTzHNVoJcnbF7Jn4wkFdTVaiXJpSD8dqkpQo12zcZFfhKWmYq",
  "key3": "36D1wyHz2o4hDcBEpW36JyZiHq4Vx3U5TRJGAokvp65PNeAZAEESd3wD4hAfK8zMdfdwrTGGwCbaHwPdJpd2dbvM",
  "key4": "3Siar59p2nnVKdpUARCEAHUpidwu8nSwwiT9NZUmiracVMnJXkRWQucZHH8gL372z3gdNv7CnQywfLWhrJPJPdK2",
  "key5": "4d7d6FqBHHydeYhDy237JCnJE6JatBj8cY6Kmg9PWWe6xpjRVLb5i47ECKc7PbYRDTb38n67HntyrfEV3bDu3hch",
  "key6": "4SGavfMaU8R1nacXyP5oX9y29vbgrFicTC7jaxYnEe8dLozuRxmHnQcs6YrkpELAZGK37hnAEtjuRLd1xuU7FLH",
  "key7": "5A4Tt1KPpiJ32BEUS5ViSsNkzwuzpYvEgo7uvT37uAFwp9mDSVcz7tsmhdo4v3iS3BF9DB2t8B7ei8akFuAarFBA",
  "key8": "3eGXnxVsutxF8qc7EBsPUNY8Wc1VKXk3HEaeSfkdr1i6j1MXrhYy3G7kGsqPDFPLqhdgaW6WoMfTEFwWmNsEXoeS",
  "key9": "5n9aGD5RE6kbnpMMoojb3zbn7fyL4duzPx9wFzpG3xxxdaHY6vFmB66vQuHuW6JDCzqWAbPqFTu6BZyb1e3G9L3w",
  "key10": "W7KLSTjPBbpgbw6yx9ap3PZHBanCdtSZxf7mZ63X8ZhPzeTYASEqbjtumDRt7boREgbbWTkbNdUizQmxk8Lyqqo",
  "key11": "by5X3hxNniHfFLXaUURbQmJL6D97cb2sEqALBcT65K1VewM7tuaHL7YL1MxHkztdB7PJM2qGYsre1bD3nLcR5jM",
  "key12": "RRkegBuWzM26eBG1Bp2QvWV46ZisbWoCbJ9MkjLg22B7rAjVafRww1X1P9butafkS661H29psDXqa1uwv4dwtTV",
  "key13": "5tKVhkXSEKwoMbGLxN7YhKaXipV38P35awx8eJ5qP1ZrY5Cb2sAHdQBCbEnowAbdcoCaL5NtBb6TmceLWrCF2VzU",
  "key14": "48z8UBjbyC8keUwKS1AGRiQUGF5P8TaaUQp1Yzq38yTS5nn9ieD13TcEVyRsLSfdQDEhz1Ggs2ExkzXY9F5ui95i",
  "key15": "3s1XwPJDQy2rG7JLbiYg9324h2RET8NV7ov1B1462NiEEyaKzHxiknnxdL5M2uujSkaB8kLmpytCU6TUHhr24E4g",
  "key16": "33PzZFhv84Rhtv7sRi7Evf6gUGtoJWUNCnNzgwbZu3rLPvcAEPFUW5HfuffYcXu77U7DNZwiYmHaGweqP5W4LrSg",
  "key17": "4mfNbA2temv7hwLt1ceFxkxBFP2p83K7kGpGKDKdoJMNsu9aaCyqy21yNAY1cUyvQpv9J7uiV2mdu6JQxPwEZXLs",
  "key18": "3oKhwakjm6jaZXEF1VYHPTscJH2urvt4gPiZXjGBoL9X8FVMMneXmUFfiH6kU9SaTm7BkRwSVXA9tCxzznbrQhdX",
  "key19": "2NRGSvfh3L36jDMxJHjsD3BPQKPLckZMwEGrZzg2LcG8m8yyJtYS99cYS23evyc1S6Mgmo7Q4kxnme3PHpVVAwhA",
  "key20": "4MtJYfuodSBj2f7tbCuurFdxCa2z2Gp35AZmTU1fYjnj6wF6BS3Z3zNmzw3B3vQ7GyxgJF9eTrWwuu8TWqupnPhV",
  "key21": "ZYe66DXSAqCaYJm8LQkHzmDdJ4c2LSbMW3QXLHoHE6GCnjuW1EysKUarUWkF6dayCJs364S7JqkCX2iXzzwoFRJ",
  "key22": "2SU1VdqMn4PM1iVJqTLanJTrzx8np5tk2wEtLCC7JUZ3L1eWVk4G1QnHnzWbd6L5h1Ui8nqpmJKxiCYqqCCQsdha",
  "key23": "558HzZPbhBKYphZ6oUjDwbScg2BTg6z2hMzzSfHDVeYmJWVkfmHdgL6mdtfSR28CymjRhgJ9HfqipSoSyNMuPdLw",
  "key24": "3LKGX9UcEXXAUhwxEf5H3vdW2J33vQjqHuoQvDszKjMVtJWvMBfnjw1H3t93EZYXEmfpKvMv5gowCfJuyYekbEQc",
  "key25": "2gjrEnvHP83h3FCJEXogUatLgPzVYCfeeByYRN9MCLDCzF1Vq8v7oMpiUfPFZ2Aa3JARAwuSHoe1mx19kGXSn7eM",
  "key26": "dP8zBipKcXsfxZ5wwjmswbeAPBw8mzrzXJxr4N3BbrZKex9rAjjjsp3E2AqbxoifJAKuqopcbTAV3zNemy1mMCC",
  "key27": "666gsXqFbZmQDCAMfpxoVL1sq1nb6ubkxXJjNqP6RNPGhi5R5jhmn6e8rP9gqYK33peQyDgWERP4HZ4GghskEk35"
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
