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
    "4htzemys4zX3paDePz177kf7uxgfHxqg2e7GfsFVK1GHXieu6KfDiBA8S4FMgR1ntD7zMNRju9U53N9pvxcVhEXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKRiLP9WyTciBTT17HXc5W1HCQMWRpaRt8qaXmrjp8JS71owEn9WWLYnWomhTtoNkrUQj41H4QsTQ9gypn7DhSy",
  "key1": "3JkiMx2wUSWx8BEKiB37p2Uo2rUSZEfL6FdzHcTmxjwhRZAxHHhYNkTGcEvCoWcVco3T51hxauvLn2A8BXeaoES3",
  "key2": "2UmvVJksS9Kw59rBtvgn3qGRzkteUZuF3Yzs2QUKHsnUy1iv2kRdomxiJHUXfAQZK7DwabZe1j5zmz1W92kT9YBs",
  "key3": "3CqU4RXZrMDai8tpD3sRKZQeo5xhp9o9gFzU8ksviFx5wjSBgGWBT5E95JaVNTF7rJ6fBjz4KifwQzuhSAKPybXN",
  "key4": "4rQtDLFDWnnUB6HGZUvHCr4D6amR6tmcH4bc3GGyvw77AQ9yVGYLaHyU4Kxe4tMbFKsdeykeEcvjzkAPvxuEDUF5",
  "key5": "64vX1FHi74hs45RqRjqieJ5qEahneWY3fCmQCaGsMn2nHABTXvMara76rByi4LhsQFn9SmpUochTyq86iLyT69j2",
  "key6": "52veKK3ft2B1u7a262CH3XugHbRdHjYzDAi4mQgja61MvWhARoxVQDf6aAmDSwTiy8NPoaGPNZ8RCaCHef1b3TMD",
  "key7": "4B5MRKJejXz4BduyMU3gdgDEP1LkiVMjojZ3EfTBiuFYv3bG7c6kezm6apwf53D3MAVPfUaXj8Qfzr9aM8R8t3UX",
  "key8": "4gWNx69vAynq3BKZDhbbNZpqzhA8SY8zq4Fdj3zgxdEHBRr7srazi4ZZTxKdwifVq8QhjMEibH5hYcBJtbNEdyiq",
  "key9": "3xptnyWYF9x7vUVudieMNfWC5ydoeFoKcjpkpaQEHCwMS7PksodHNQYRTETAor1Njt5Yy2Rg2UDSx9kU5zt5Puzg",
  "key10": "WMwikruEFRFwSR6BmHeMr8A8X1N42uPLTf9dHW21CJuoKCPXDbAHsFgxX8DuFoSEJrSNHfFupKXggrzazva1Gcn",
  "key11": "6ePfS7rh9R9RMdQj9KKF65hAv63eX1DzmegUK8iUq4a22XPf282r44wUrWFAsViLjU3f8Q53tkA6VqkAMx1F3aU",
  "key12": "5S93HcQ3Lz9BJL2nQL8MyhcvtvQuWT5MVjk5MMwqhXvo9eXHcDRRjEXLt3XcRypUv6wFv39ZqrtdbyL7efvvxM7",
  "key13": "XhCzgLXW5vjmHh5rseNyxhdX3haZdWyJ1Q4oADfBQ7taA9bSZUZqzxeBE4jf8bYKWWWnUwjjrBJUunTq1fv9hJa",
  "key14": "7RbHpHe8DgpJtQsqoYF97DYz8xPN1v3RPs3i1FToX96CRcQKTh8dfKutJ8X2SBfzrvsmBzV5P5B3A8dsmiEkGWy",
  "key15": "5KtVWV93pFesNQZzHJV9hRjUTESryFnaMi1MffUZcrTy38h23xuKUhobVwyFwktTD7d2XuEt6Fue74eTWfVkLDLU",
  "key16": "gQTv5Xz2dEA8DGLc7NJbM85EdcyKXSjTPWUFoCbV3BkCmVbteZB9oopH7RBbaWUKKFMouWwSbi4ghnyy52ynL9Q",
  "key17": "5CFCL5XDMsiLMEyHTXhfs8Z3a9pV3eHjG9up3gQbrZN66zLnGRmxirej5EgPpiA6VDwiNP464Pmc6WqdsB798xHk",
  "key18": "3MyiACtQtzXoY7UmKzCLRbMQt5iWmBz63BohMCnanAcTerJtmNs1uDcBbHhFuKPzoKhWEu5WrQ6SkknoBhESmGe6",
  "key19": "47Xehr6h8gvxVwWnWecsihE1DM63vbDXcvm7RRuTLa5CS58CnaYNgRkZwyY3QkTYGw29mmYTsJ65NoK371yfJ9Ha",
  "key20": "qA4rZJMCRZdWrMypfJQyTpvHXfhnRqGU86RGiRsx4tFNQ8YcMqr3S8fd2bk93wsSVYCNfYz4NZ1hcAP6n2w9Amj",
  "key21": "5XHAHoFLjWSbzZ3VTZvyYZzAJyPH7SZ4coBzzpvQRePpPB2ms2shhup1D3BvEhV6PtxLTq4RGymV3CiVj8t1ZHWa",
  "key22": "5ND7eN1DUv8rYPSsH9RJeJk8AunjLX54VnZgGD5dwvtCDg4DtVN3pRzgAHyYpSwEo7WtMK31mZGx4y1qmtwcFe4p",
  "key23": "2yo97fQjoCDAjNqoUx8qiKbHahPtpJuG3BBLqkuth8BrMXdeU13VWAr7S6jGTkNKWztrAa4sNUBM8yPTQRBu1ek3",
  "key24": "3a7rUskrfXHeitVqoreRBdUCNb7gafADsKoPLeHih2MZ8yehjGrME8RTjY3FG5VsU56ertr8ybgoNC8E7rtoTraG",
  "key25": "25LUEVZA4Vicn7BnV9yLYE3q4kapPrvWmKJzFHZRPk4EztEWrdp4tVHkd7TJhbLjqcFyCzc4aFM74HdNcpmQviqa"
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
