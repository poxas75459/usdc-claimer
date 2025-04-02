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
    "4neST5VyydPQzcpie6Z9V5wUCq2uc39EWz48QqKgSDcsKMbEpeRaFA21ueykPmeA1Gp6sLGFYxUYY2wb9ti9VKmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1qKeskfkubgwCkC1tPtB7awwSkt6TvEwukjsB4omohjYvx6kCGEXsw6x6rjKRJKAoVZu3wd5yFavqx18Tmjmxn",
  "key1": "4pVYwFjHNwJd3ijZufAdZAcbv7BNRBCtc2TLg5gA3epY8HeDCzHNBeizMNWYGUU7wmWLKeq4k8KT8fUXvRUpekXr",
  "key2": "dgCmeLuM1fHQAuNnYLxqkHo1mzAU6iURdVJWNFu3fa2Xy6jWKnNeAhFWiz19yJhiPMrvBb8UEvp4DKSxErXAfPy",
  "key3": "29QkReiCdgZPJg4CKxWnUnUzBSxRQ9RkaWPkVTrnXVHKwW99gf16bqAEhH8b4rjyZFgqBVTPyJ7vFHkeSLXtBnuD",
  "key4": "3M41HkrS9noxt7eJvyBzSxJErjQ6gHDonAHffwECFdcEVaqABMha9CJcLP1jGFYC7TBxkez98nr1ozM4rK1xTzex",
  "key5": "2QVTLXJ2Rg3TwaRhRqGuWZP12Vw4rk72v94USFLYu6dYw98xS3Qjoo617ZxjamXAzQtevcmfcVAhrn3h8XX7Vk2w",
  "key6": "2pHwRDVRJr2XAanb64LPjp2u4ArP35X9GNc6ParNg6FRM2KH1j4cJsCBXgim6ZZB48wMzLzAuXz2SAZccKMYvskW",
  "key7": "64q8umBLsuzRU2vs2Hy85vVMRWPXqTef5wkCbcvF2gtooE1nLLieBdt7JAtB3ktR5YZrouj1owqh6fu22AveVqvi",
  "key8": "4oVSAzLbz7yGBFR13Nz1mCLZnqnyEcabuzE7z5WHjFQY7LBaDtpV72LXKfx4W6MffEGUqPn18KABr8eMEkX7eBgA",
  "key9": "4RqD6PVr4L4QwTm2j4W4USaSk8LZVuaQQ6jhXafM9QihfhsxFwPESsybgGdXK4HWTFNM99CWWLQ2ZtS7CL5yDmnj",
  "key10": "vmKWH6YqNTseQL8qGpcQCwpfpyCctq43gccTkvwzgWiNtzZusf6tWo3ef97Wf13cTh2mjBtCgtGxKCFHC4CasD5",
  "key11": "jGYWnPqb5No26r7D1ViWMGdxLELmBq6ZV4YkhvVZHY1wGTJhTiwHjKpgq2a19H3vtSXPgRcWdHjue7zWwMpJ8bD",
  "key12": "3xhtsioZtQs6Mqh2SMq8tCERcKuXwwzYx9L2NoUh8KvUzbu1EH6CkARELEdjZUeqD66aBBqmrvyZXnUdxK5mVeys",
  "key13": "2Fz2vRR8XXZe1fkNArsPP9eN2h4pgAoaLyUe5g1dUxNp9aH1NnywihKXW6ZF3ZY9rZySfVWLxo8p6SR7fWjSHdxw",
  "key14": "4BKaMyQCTapsmT1MzR41sXcWKLnr4FEbY86gZKi2ghm9nrWu5hQWRLVHWbntS6FyTQmcepkJkWgjCkDnozaorViY",
  "key15": "HVJuwfG4UVVoQMLYtb3V44ot9Ybe7zPDMnQD3cAF9JqjUwtygLXqQafuuebv6NJkG3ABFe7j9L8r8NRgqv2wEoZ",
  "key16": "3gQppYGGgKATEVY3eLC1apcovVLK3b68oGGnyfGidaAQMF31p2Ki7Paw566MxxhYAw7ZRP4eXegtTwkJEwZVY4HC",
  "key17": "5bg6rZqQKa13q4dAsF9zzt8f1Lj1QtBvKjtQZdrJTdDt4DP32MEXmCAbkQPzR2GZ1VWa9RyQ1jdX5eXMweVBbNRU",
  "key18": "5rpdHUNjq2sGUR4dCv6JZqH3k58jkxDdZNN4darcWtLzMjgza6ExkGi5MUTba554KDah2zvuPAWo1ESJu3pPaibT",
  "key19": "4U745qQcdoNPR9w3stdeUnFkmufEiwS9XtmMAf6vWgW2idemxh3eEqxdpFhE221kEYL36g11Cw2uc21FLPpScB79",
  "key20": "ns4KHLBSoYPWWNkuxLw2wbN1yjSKFoPYgyyrRTMHGt2ZybMaxfftM6ZhpNgLv1aNanr6D8FoABTmYBvM4pHwaqy",
  "key21": "2xNqfuznvtgo3f5d6o1q3KjvH56vGgjp5Yk4b1mD4modnZmkcpHRRmX8ARU9F1wu3YwjMbR44NeuXEvJ9saheApa",
  "key22": "2xErdHjskV6DiBvRhyi5CSqSDQdNyHZyGFjLmpJPsH7XRYB5GxNbWd7dSfa1KFCtqP3CCvMvvv6Ef4zcgUAf6YT",
  "key23": "2AmUCruDZ4czBiDZByp7JubAXvpdmSSJCXENEiALS6xPRxgfbeD6WB5Tx6moExo4GZwPQL3wp6WY7xq6ihuFespv",
  "key24": "26vccxCZTPXASMJ7ZaNUoSfNFdmi7Y9T6KK43YYmxtqzM93EeLuk7hX3ivpDct8UCq3dUsPDjN5AeF8sSTaTRmwP",
  "key25": "5pZvYZKh2v4qvvLh4FR5unemCoACynwZDLmPa9TMGp8GpG4gtGmaY7si8TzszNfuTbDZjeTKox9F3Qxr3DswqxBK",
  "key26": "5oyRZp8yFa37Lc8SqqZaV88dGGPkskBjZpjRveZ4c1fsMkyGYC218fVHxfz8FgPC7BVYnH89mDZbkPETADw1QP4g",
  "key27": "5LrcXF3uLqbzRbr2UHB1YecWtZU5GM9QngS2etefd66XUokt2zqP2rhxPc7oAvyCyDSURsfJSnhZL7AZ78hh7VjN",
  "key28": "5wpYUNTsG4q7EsSPEBerQJ3Jmr3sVw68oxSgZrbRtauAnUNVdJsPu1oVTPS1AvvspLYSCK5Lo44K3xjUsTVCuJYo",
  "key29": "46Qm1SLHHXmBNGHUkXWUad2wX8a67Kx3aW1VymXus2wTEdf3BcMuHjrHUvxp4CzCEcLTBmPkuw5dk38i5Zrv9YuZ",
  "key30": "2U5r2S8PduP8hnj5nuxW8tRZFMBt1B496cHPSrZ7j1ffcKbz1BdLVJ25Utx2PgBqF7ox6ngyWy5LkGkduHKejKXa",
  "key31": "4bDDmu3PWocy5PKgzWsH7qejEjzfTqWHqtfT25ua8yoTehJArAhqrHSrqyvyATaAMXwKKpeRA6EbJS6V2mz9qMgK",
  "key32": "2CokhFzTuYn7Xdo96ueTAxQq6eVc9oEd7QgLRrWhVDUBXvrkNdak4dnHzJHoutGY1NYRRcNhJkqxUSUePEdhVC4T"
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
