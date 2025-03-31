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
    "25h6isxZaaFykS6v1mAowaM7zqFKkWuq6d6AFFuu8evooRp8tr2bhYfKDC1nxxuem932V8YRo8hESxJqAYU5tdSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cf1JHot2WpCTXye43Z5WfHbeChpwbGYwoCTNiAthPHu5vFTmQa3CZNDFippb8AQBgc6UhBXXuPMYwWSL8JZhXth",
  "key1": "4ChzD6W2pnyUj8JJGH7TVXmUvyzreXa4CGNr2mKiWGVaZw5GobGYNn792nRhEhL2CBfWY8f6PBrbpZfJbVf3hTpq",
  "key2": "25QHFQ6DtBaaZr6Kf93nCFy9YBEW5crsxuLjytukE1Y28JdU7wZVH432KL2E5NGBCDhY9mVxfoCs1r1MfHz4gMNw",
  "key3": "4wRegQs32VmX7dnFUGG1GCiRhqBkCfSojyQYbsYqPgqkFYZHg95VqUrKB21AAMGzWbTW9Tbx2QQkWzQubUTiqMhA",
  "key4": "2cmtmctjuJXeeu4rsRo3ryfYHpcjAgxMTH1MLyxtzEzEfc7tfSeV1E4ta4yh6cN6Tq7jQLc31cNWXJkYQow2cMqj",
  "key5": "4P11QmKeWHFAJL1RWp65tY7fqGbWmLxVi3S2ArWFBdibJMZpJgTN8dcd1iDFWjxuSGUUE3bZDX4jkTrMkAcNm5oG",
  "key6": "3hD7xfYnspQAJvpesKd8vdPhLmXUgJrx9ZUpwJYMuhRm2wxgDB7gcRy3xefbcfA4RAq3uem5sWHMyYHVrd8miDAz",
  "key7": "HcfmHgLGYe3jvWYFjhHxZXq7VTMSxtkiQmGXNarV1DdyPwWMKpCHLQjrubsdb3kQyczoFnHXQGwGAXvCDVvfv44",
  "key8": "67meELVdCif9GZqXdFpg48mdJgKdX2KV7dLPRieMtdMBZgA5BCnAojHXajDBGvnMoYLCPQT7DsS3WT9Tw2LT8kbY",
  "key9": "gNDbNkBT6Eh6vGUcFi6JoNUNui3f5KCd9R1D4DBx2MREszaENA2Z68okBVcGbgJVAFDEHUhaDoq66R9g6E68KKQ",
  "key10": "3f6wuiJUEYZiqibCDSWhL5zgdWKn8TTWyMDJYpyHnfmZ7MPR95Nx7fGDNQeT1Yv9ZpZ7mm5K41t7mi3jso5oxyQA",
  "key11": "3HDcG9DpskAafbnwa7R3XMPwBXCGZYUH4Wg2hniWBtRjH1v3jtebWGJRY7bG4gq2kw7douMrNTUawVhpXn9XNrwC",
  "key12": "3ZKRJjS7amdX8r1B6MS4DjAeTq5MfAdZMZM7WR8ypPu1CA98M6VgzHJGkREV557SZEh6JRy6JRQ4ZCZdNfrcD4bi",
  "key13": "9ugCpx4inR2Nk8wS1FLkUvuCVCDU1i8H8K3p3oTVgkU4VpAwq2dFDSnn9iBWMNzjLKymbaJBSiUPxCSanoxSaws",
  "key14": "wfyqraVSpBbcwZPXV7qMVJRstva8HW4wLT1KpuAe3L5J2iC1W13YN7NAhN42xy7y677Fh19YwKxJ6wYTyLBDDxF",
  "key15": "1Fo4ePY9tokpqVvcmpfbemM11sjrpGSijLQ1jmiWppn2y3ADUKs7opxQPhJQKbKJLmJry1tddZ8cQyUbbadiufn",
  "key16": "2D9TUtECNhMt2WRFmAcVv8JSH7tq8PCJihiqMBmbrgHxv5kxBYqSzQoydfzW5FBzmPVS3Vc6KyXRTJY4QBBqYhaG",
  "key17": "S2NTsv5DtoYe8QwnXK84gApd6JuHp6BnaAn1GGygFdt3LQKvNwdV59mT55PrB69k9B7zrmMfAQBCr3k4VkDi1HC",
  "key18": "2qQPviaxu7HWJh5ZpsGVMVPUmj3Kg7u9VRhgpAmoN14VYNNom664Ez58jtWaHewkYFdHm2XVGmyHmUxGKE9CLtrS",
  "key19": "RwCYwkXK18ZXkbMxpYGSzyLouZjYfsP6W5FFkUBKbJEiHL2TuezCQYgzsUJNiLb2TsuGaNhoz3QrvsT35oajikF",
  "key20": "8dm9eUNfWyqmr2Cow5pDUbdxobxEdM4obo28kg1iNzqUTcYz5Rr3ZgrSuQUn6P9qg7Jaz4734xcKWkgjYK5ouZX",
  "key21": "2oysq7dGDuYoeow8msXPdeKQDjKX8MVEdGDM7gw1Bq3XszbzNmvmdaKaqy4pPbyEvdNzoWfLHts6dR7gRZCE9b15",
  "key22": "syg6JnTL8fK2CMXk5Q2W1Durqh5wVSTigfWPru6d3zQHr9yCEn96ufehg3E5wnnHZp9UciGHYs3ygeaFvLkrXHb",
  "key23": "42AeuZP4daJ5iGsaDrfzWnFr72PThqEL3bCPnYfdWYhSuLrPUr2jxZXjcxUzT7CDMebC4pd6R15tC8QTk2GdeuG4",
  "key24": "3T7y2NYtG6ea4PBnC31mqK1zGuWpR3QmTuEy22DxJFfnzrgSMGUruwei5dywxppj5rwNAYnxv1n7e3D3NpEe6MMR",
  "key25": "3hNXkPLYhW6bt9Kv9nooAbbmEdRRG5Swtv9pQz4UijxYKjG8c2vmwjhFPSCXEtdDBMkNRk84FYPcCLBt7KaBq646"
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
