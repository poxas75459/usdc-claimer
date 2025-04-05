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
    "2VQmtyxXeTdkAgqPsNnNfCHUcWapimwkcmCtGatxeHVDmvzJrLm23o2x3MM7FCTfgwpJwxcguNF7wsFmxU8U9daL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fjQXwWai8KeMqjciRcZ2dSBcY1tKcYVePbbp9szPZWe8M3Gxr1TF6TTifeeRx5QDELZaqR6EDunJSWWufguH5x",
  "key1": "3YYMztFRBuoQ39BpwF5FjY3GFLRamEhCPeX5ybBqPoePDV8gJUMRHqm3QQMinAV2anSCbaoSozBcry7sx8Uhd4tR",
  "key2": "5dvaZnN7uSs54ouD7AnrDAGZZfwSoe5EjdgaAry9oji5Q4VwJAHm77C4yuU7QCC73BVtfKGWbQmYa5g6dX3hVRZK",
  "key3": "3mHs4EuamCd2f7ZEeNXCTUPZv4PsH4Fnq775h8h1y5cbxnK5a9Vqfa3865RTAjfAgAAPkjcUrRwDUYjUq8XdT3cN",
  "key4": "21GHaqTX7dPuK5NLmJsGYNRu1J4LWRNkA9QR5srjjQgG7nJJd3bjw8vchfbCuUqW9NwWLogPiKrjpaHpZEyL8KDB",
  "key5": "4XefwF5NpHgJagCojEkzioY1VYiDVFAvFgQmhyRyN3yL82gv3JXRtMVjJ9GzKz7ecKUG95czUrdMSpDFqzk96mg2",
  "key6": "3WSZrW8S4rc7RmkYiBV5UujtdmQ4fso3feDvj9X6nxL4jQk7eLdmtEvh3f82S31TbKhyiDEEA8tY4kYZvm3Ek8xs",
  "key7": "Y7X5mRPmbLstDd4fEW8EWvh4xSXAhuwLtAL7ZdXvN2UQVXe3ZHuCXCU2p5KteQc2Zayraik1GLpekbeMmXWoMxK",
  "key8": "DvyH37zVxvH7J4NFixT5psh5ihuPt7AdDKFr49HrJQiU6edvq8T4BvC9Qtw2g2vN7s49k7jgDCCbGssYRKndejZ",
  "key9": "4zrNu2Mz3kkcYtpohU2WHLdJ2NiHV57mFmW4JaJYknpYjX6nms6KzqEWzB7iAUVFktcv4cimTdPN58zfyJ9LcuqK",
  "key10": "2B7tCrXdGkxBbSp35AkebT6px4M2L44BwhHCKva71t4RnKhN6vc5LXjtzoroPKUeCEMLPSUpsriSgfUZYjXhD28q",
  "key11": "5DbyYR5bbHYGP2sWN5QzvvMRhJ7Z1ibjfe6MRdVRaBMAXSjtBCY81GjTkRF55rmmpe7WTjFWVQpttAUPQ54zoU5R",
  "key12": "dyx9EcsW2BugBdZpz38Xohp9Nc9VzStsGRRDFJaeNeeMzo1C6MrSP2yCuKHjSpRRo4TGvcdTGsQawHd1Wmfnr4P",
  "key13": "3jAGhLMuHH7zBtCXtvBW4xfWLdcHqKGKLsUfPk11qUTpooXq8YFp7UV1WP5LB6YPwCF8R9WM3QeguxQkXRXTmfdW",
  "key14": "NAQHFnoraCErts1jEThgPN4g3mekJMUhsVmjGtyXFUDfES8LCMMkXXmgEZaBxRHpaCFndbxVAoAoR4LWjy9P2LV",
  "key15": "3qcRqkXzZdMPxgYqLbekhG1SPTEuULDaVpeKkJC9Z2jN48ZrADyNaYeho7syBLcRFQVLoa1t4jbQ9UfHhMBtCNZU",
  "key16": "sx3S9Vs39Z36Ed52NnmxNPFeZh4ARHXbdpfWjoL75pt8twZjimBGHBzrFqM54Ut977TFpDbzi5NNo2uCieFPc8v",
  "key17": "3raaqMb8xJBzUDq3iZ9bidh8WzS8h9QTcw1h7ZCHgg3k4gd5nyhNGvPereosmm113Yi8KpsJZfHwYFkSdSuEWMoJ",
  "key18": "2YSdgYzRjzeBoU7ZjKgWP7W3yEAKy8dFqD9Tx9PyWWwNXvs8sAyWdd2y8Wap1uUJ23j2rVfAi2Cf45vfddJx4smw",
  "key19": "5go9BPrvCAmsQf7vFtjMoGUumirMeX9Zk3wY9p3DKAjc7kwHCghjpR4tvq5oAbWomZGR7eHUzSZBZKiD9JtoUFkn",
  "key20": "3KFxQbYzPPDKhZJx45hNpUQgNMzDodUctMQXfsmrV2fofZZ8K79tEbBXfJ11twgrjFqMPGuBhMRvvQ8An8ZBPbSs",
  "key21": "3ULmQZY6SRVqomHSoSvp7DXhSmTnx58GuRgTbsFsWpzaeKQMw2WodHhDW8XjaLvMf2PDDyAP5RxWjp9BGMs9t1PZ",
  "key22": "5GjUPnSCs1zuNTqH3g6rMZ68SZtLfeE8z9KKmUukifuBNqyP5iwa93NMhUg22gEefTqeZxcWLkzNZUKPkPRWg5HS",
  "key23": "2RyhQGk53mjN9PTyPzvqkmuSVtvCatMJ6qLXbpRMJwsQxZpctFDZDvh7NqroPQXQiGAJqYm4TfWbxjm9RKGoJ6dy",
  "key24": "5MvuLAghPEGw5FDA63QyjEDb5zNkGfZcLQiuqLgXDjghxgPUc1sRRVocBxtMJYM6JDFaXfofaZm9bJQ6sRPeyEs4"
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
