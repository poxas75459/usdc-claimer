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
    "GzExfmDeDf7MHZB58xz9cD4H6tkbNfZq1C6EetDbbasdwB2oJj3Z46R7CEnwiCr8BmPL4e8zcVApFyppXbzguxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HL6Vts475Vs8j2jUnLdXyBqAeg4WYYrhDgftUNn6kjjycduq4eqobfY5A69TgiuBt8bJYDcE9h8pKnyb9xHiekL",
  "key1": "5oDa3pQWyVgJ6a9JTAp8ze2EKBSCnYzFXS7y2rfc88a6QvpsXC2QsYWGpgJ1YF2xMASbsYvXQhXfbDMAvRonZqfc",
  "key2": "4ecmpGHnh8Dc3WNewAqF7BVf7PHi94i827A5MukAEGvWhzTf1VnGyj2cBHEh9e5Zun82r65AKe5vpopj3XgCRrtj",
  "key3": "2MoRXT6csLhvKEQct19LeSzoswgJEYrViEXcD3Rwja1ygUgjJKDt8vZBc12EP3FjggweGjsYvz2jKxx2FjDXkF7K",
  "key4": "4dMepTxy9ZCQaUqWxWGgxpnGXBibod1Ub5YR4VZX8wvXR5prQ9iqaPtKqz9YZ2vu3LkWJswZmA5WBR1GwDypgD3n",
  "key5": "4wTk4s3yarPQzvx1TAXYBcQLCAzysyiqzGPNKLnjLsUPEynCqazG4iU4XmWfekAeUdJtaVghS23bnrDAh13Huz7d",
  "key6": "4tj38sXcxkEvPk5ebF41cyNejE9XpYSCmmugwqK1sP3nChheYVNikjxPCbwP2u9g9R8DxDnWfAktLZSPqG8XkqXU",
  "key7": "7i5cqZjMvCtJFhVHA1DkomcwcKSeGJzS1LR8jAcQVEnGr1CEfVsKBV29i6fcoSKoF5SCwA68aWXQb8FmxboEeLm",
  "key8": "5n63tSyzngAwic8iBkGp28UXydF2H5JVybgGTwqardzzpZJsgqGxFvMs8yCz3RT2rVSauaV6TG6LApSna8tXyou6",
  "key9": "2rzrbVFsg6o2MAdoGFwj645FjUeCmYxmbjBDW8KsiLhkFddyVU9Wh5FPnG7767nFi35SoN2uUPKfXsMyELJ8We8F",
  "key10": "2e7r3NBsCotpE3XZP2NjZxe9PEkHti5qZZd2zD5RpCehkRsAzhoritZSBEreVMhRZ8wdtu8GukjPmpadNGZiD7hD",
  "key11": "2qihaBhFwd97z8ZWXHuUuJe1md8sdGejc2ZS9Q3CFurCmU4ECRLSdmNmFRnu2dUrjVEoHLLJHFWvLQJ4ZC84Xq9w",
  "key12": "4rh7XH8tQmrB4QXJAYiSPYkRnrtVKUQJP6FCpvWVSyGtHodMgi48Awpnme9cjh6wBQRA9pDSDHcREFboUn78QBja",
  "key13": "5FVMmSnKJG76qf77sesef9PUim3afPvMryyop9htXZRgupui6YWQjyhrf5verbRpBbeHn13KaLfWMgtqimzDYJn5",
  "key14": "2fs922UXuUy4pQYBJCR1EkKaSc5Kocg16zV9NF2HuMqEviw5XXtX8BXyT2yej6eAbSZTRhCk5CJsgYtLqHT5gUWK",
  "key15": "2Y12AwrFAqo7iytcACQEQojkKsKU2ZC7dTC2rF2JR49u4zageSyfdk2PwCcTHRC93g4ieWQdSzkg5jnvfG7J2C3N",
  "key16": "5v3E1tUrQQamCobTG3opchyVX65RFK9tEjRBQ4NMYTF3xCJd9wgBSZB5Mm1fvoDSMeCh9VTsPvzjg2YEiTCwQERz",
  "key17": "HtbLqV74z2oeMHX85pNb5hvzRLhoYLgQJLH12y2zTCGopMgubnYQ3cyMJMYCyJ77AsKgFPrgS3C1QCnYpYUsBub",
  "key18": "viLkQM1SCuRdvKrbWN79CbnPV7mvtLp9iYaDifiDZzqVSFwFZGRo41fsUfnmk5Eqgze2pwdk44so2Fs22DjN4cw",
  "key19": "2JXdERV59hNMTbnEX9YTJxxWPmdexQzJHH3jy8T4E1gtxQCmejpTmwbKPkmMov2GPfCRNJ11rxL7wyfvk7hYdALv",
  "key20": "Zcnmj2eLph7LvJ1Fttgjxdqukvc1Ez1iL7FcHUKkKwDFGrSEyDJABwgL8jQLM6ACUSjDrqcVmTm9xrz1MggXh3M",
  "key21": "4U9nvNDH265eir2DrnXyRjjmEwbhCf4ogTtnteBcYNzmuTpmbSPRqHAJVke5B6hErnbUd8Z3d8bo7SSJL4UVMJA6",
  "key22": "4zpBSpvWY2dTm6CpA7gpdpktxnCoyRuJDw1C2FMTkQChtWccSX7jtUs3QXjGtjLVhZ2mX7bcKxL2vkadM2USLcgV",
  "key23": "2WL1EvjAfx4wLJQa7yKGbWcBjw3K4ugiov9JdAEKUDySGyuMqwTPfinx8rBSrLEz8A2JHF58hQnQnvQayQ9NzBf2",
  "key24": "64NHsDChXxd6mtGURjQvRGAujLpbS1mMQm99HkGcHJnXnoyta9Uh8LFrmp4xzQ64SUy6V9jHSCwMk2DZp2Nnh7fq",
  "key25": "4zpVeWt6kgfth9v2NePS24jTewwypa9G1xDFBt5LLTbEeMuKSw6qjm3zyVDrWkxKFCvDnoctcCqs262MJYXEjZgW"
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
