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
    "4S1Dk1V3SNvjUMbTvbExf21XLsAJ6CG4zxhBxAPTYueUt5SFojFvYWb9aYeXvwvKs3pcmcuefW5VDuiLewu9wJMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNBUCbsxsG6T4BJTcionNwSyZTzZLGFjDobktcZiuUtiCrSNVavXsVHLjMWD4Xe1TJvgXBc7dpv86rd36s3vMQK",
  "key1": "2TQ7NWu6d5LeZpVuMezv3YzdB3C6ha3cWKjnKRtPo3KB2cgciGZw1ZJda5HLrH5yn6RTvNavsCgEcePRmJRg2iRF",
  "key2": "2ybGBMVMTb3mue7YmPwA9TQTQqRa4N5pf2uoULfV6CkDwE3Xk5uQeFbufQZF1g7YzswT7wCe7PZ22CwZanB2vxtP",
  "key3": "2waGxfPCtJL5Un54t11QsMp6a368BQ4JhhTuWuzpAazZApqCDjEUXadsYNDDoYK9RqoeQNyuhZmHAjVjtsFN52C6",
  "key4": "U2H3VRswqFQwkKQjJPHPo9pgBiztuormKss21TMMFCYgCXftkDweFbgu72nUz9fQgXpacXapdXdzzhHyEx31P4u",
  "key5": "4MLtikNNB2RM9KhktZG1HgSP7iEyse8cfJj9FU2CPzbWqJzkzimxPpZjPrBYsZeyLs6PZxxGt5hFbLE9YucXzMeM",
  "key6": "4znEthHM6sKgfEKr8tfjqUe4YPDzFtbQHCi1BTEMsLUKhGoxCvCHwM81Z4jSHDfjbWBeZi9CMQcff5bT5aQxa755",
  "key7": "2AvA9EREV7BAzMwT46JN74HMkR7hyqKGTQewCxqmVYXWkD8i9D9rHNfM59GY9vU4fk1bPZ8kXBLL5a1rrPNhwcyQ",
  "key8": "2RvYrpzJG4Mo91TSbVrQ6kbUuf3UTg2m5ezp56dZ4ZLvPMgLfu43JYDKfx6oydiMmHpg3owsRHhDrJVW8yFq2y89",
  "key9": "59AGizJkjDYcCBFVPkXmsq6ZJKdhEgMEG4V1Ao93GuybTm3mpwQpt2oCkSfvyL2NB8UBrXZabpYNzC26K5sdPHKN",
  "key10": "4HEAJSph32syuERLgQQ8QTW3tAvj4iZByKaHNKH8Vp21bsW6cRp1EBxwSHN6aTEUWP7fayyE9MpSgfwxNvkFjU5G",
  "key11": "3EYfYTwwhDp5jKdWYdvy7Yu6AiTkz5TUgmU9jTFFQLy4VdxarwiqRHjSqeHbR4w6aTTVazdDwcU3A3inUxrfumVF",
  "key12": "2ZTPWyoGwXZ5k4vACYAHvuzyVv2MQeXQJQzBE64GAc2EPRymqSYFcnHbo9L7heMyC4cpALEhSWsTG4dS8nRHTNaj",
  "key13": "4wAE47BcbVU1yTguKMUGB73nKWXhbTVpKcDjo5NA8684stuZEiMB1e5vrz4ZgZnZeZb1g37zG8WeJXCCFUvMWJFh",
  "key14": "42jvfgfnsrogQoTgRfR3bn1pWBw5XNGYhGHMDE11Y2tYCuHmUiTDjcox4vntR4sxeg7MhG759jfdLTham94EKsR",
  "key15": "2GR1vsnx1EqtZHbnWGgmNf5FVkhFKTRJEwF8WmKWArX4nNcTDFvb7yGV5Bk7SQoFkqb8QKySTZqgP8ouYayoKuHB",
  "key16": "3N7xjvs6uQd2iu9CU6wSiiDNQ5PuRgSNUJgYPGs2aRQ8DtfzniAHhGiueEGxgND4qD4JKfGQqVPdHZMTmaXgfkx1",
  "key17": "2ohfR8QWQLCQrtkVN3NV4oGFfoodC8H9PnD3UwRzVeWBXhhZkTk6gFFkzEHEzcL3bmC1MhKhxakK1nKn8t4KjnzB",
  "key18": "4GnMrJ6xkxF5WqbkXeaeiQdLd56sTfKb9JEmHX4h6mWjtCL8N1J9j86yB7gg8eANv8dpfLkhEdvu8iq5azVNcEPa",
  "key19": "2hVJjXcrvSXzVN37dM9Z664dNAqBXL49kmnybAhSxkQUbbJdsQDYaoAggjkDBbYDpdFzPPAVCzQxaEffiuzVsxL3",
  "key20": "x3HYipXapvt8fNNvjim8mRaoXjUgxZCp8DmLSFBuSnXD3Jb9FqywKH2ccBiwAtFZEPgqdM6CZC66EY8533EFbDH",
  "key21": "5kZNXsUAbJUpC25kABNuBVq1JaVND1hwenvQjCNJEDnoRJc2A4dQYxBCj5tUe89RH2DPfEecmAda9B2wXKjqXNSk",
  "key22": "UEtvRfwKLoS6MgZP7Tf8gnw1AZ4kSRseJqMKfbCt6H8k8wbX1fhHMkGr4VFQrK3ER4kk1cpgGdS1Q6V188uzMnY",
  "key23": "5SSohUxb7Uaxuam3JcJdNbgyL4vLgcWJT5nV2zrsgyhZNkq8n8CkaSbimVrZzhwS55RAwNJyjgBi4N23kFpPJ12D",
  "key24": "3RPHxVrTHbbzPm9ycXGZZzJEpjkPwqFSmQ1g5gUqQjwpZfGKuRCFfQAjtpqPgfou5ByoWSzh1xuD1mAnRYRVuXXK",
  "key25": "4QC6yU7qAzbbT8TbTQeMqb2A4LFXGAvRmzkDNZBjYHdAHFC2pD7PngwqkaD8rE9weboPNEH1UBkcbxD6bFooF3D9",
  "key26": "3gNcnWu8iiP93iXxhSnXgs4BsD2QM6hAVwHmojuBWBZFWNjLz6jWFr5ZFZJjgyjRmprDbtMqbdgGKoaDHUYFNFM5",
  "key27": "2AxQbT8Jgd4xVXV9z6mTMfcjhGTvfdXD67Br6DZ4ajSYBhDvSQGekTZ93EZzaFDKt65gpizLfiYHTo26hKiwgNqb",
  "key28": "4tgwPFYkY59LMm4C4Z9kv5SuEY2PUPXd1jgKYJ7zAAxYaM6T6PjxGdAbR9fxsR9MCfFBURozkd5HuC2FS4euwKYW",
  "key29": "2p4g6dSAPrmURQTXLKAToqajfyiuJVf8HdwFsgKt8w3jug6kJhM9Cu8T2mVar1fC8QXgWnTvDmVdxYtwoiFCAHev",
  "key30": "5Ha6rnXYjvNcetGtKeXy2r4AtkvugwuX3BYbNwueKd9vSX8kDFGPiSjsYAtBsyPvS15r2DaWJGQTLVPyezt4UhWE",
  "key31": "4dap9KHdxRtXCpGtENnt9MSQzzH6AMpd9tR7mGGByuAUS913rApUbr1xBBc9QWe7zESTT9V4tfn9eW2He1gXndmC",
  "key32": "42jDcEmHC3FeXV9yAhVJXXDpuCxxvLWuSGv2yW6KXskBaWE2yUDTxMnq4QagXgpxvmYSKt8XY1vm6rdpcdtnNsve",
  "key33": "2b7ex1G555esyU5yufHRGP87axUT7wZdzE5dnb6kJ3Mmps6wxmEsQYqFnL6tMhNMEThkqeqEuvgZuaNu3j4PbGZj",
  "key34": "qKvPhkJFqP4G2tebtkbsZS3AprPEnrjrdS7EYwfwct6xo7WQRShVLky9sDJf1yFJBxH7DdgS288y4yERwu2K2fA",
  "key35": "ecRJvnRrN6erbDFEpte2L48PWeNLxRYYPqqawwUxf8X8XShwPZ3yjZmvKQbB4AnrGrUGJSdQqs74N2UQH7sVokT",
  "key36": "g38CNu4x9FTW37TiFRZdu5Rb5AfwWoP1cjBtznn6hZRXcx9sZB24yHvUQCFgZ8sdjsCtfQ7yCAuihdGrRHhifcR",
  "key37": "2f5M9tsJRT3JG252nthFi8ULjLX2VJdiKq5A8WFZKtN4ZcbjBtAmvur5u6ciwHqaa6vjWcggWGU4BnfNpwGKrejf",
  "key38": "39pCtgUuk9nK8D3yBJf2wrpQ9QJ7BacWaWajopwTSXA5xkCTiqzo7oCN2j2shyidSGKi2fZSBBGmEdKTzszhaFG6",
  "key39": "7m4N72dSqH8RMVYHGf5GBW5EbxppsAaf7EedBVEqyuMBVZrZD7Q9qThms1AXcHeGMZZmp8QQVDQBvBzggRT3dnV",
  "key40": "4eogJHBvaGaxze9N2g1rURtjnWeu3dcFLdijVF4H4mt6zTdCdsCSJjDKzYg5SgYo8Eb7EkA2HBkrpSkGNNzPhuSD",
  "key41": "2PACrUnLwRy38mVPvbAhT63m4z86p2z8xMqacFhVrgvhnZuPAiiwtRDuigoavkKDEFb4UVfKyCicgDvfqoq7m3E1",
  "key42": "41Y6Dsngn66d6DEA3KVMuHBvqp1H7h23mvtKY3L9XNktSGTTZU7uWhyLc89rEyjNYZpcW2AZXc2jD2Yr7jVuzMqs",
  "key43": "3JtANnqFUTaCmZ2yHfCEM6WnjZnmBPdizPm48SREvE7JZXVLSHCSx5nDES2VL1dfy5BCWHfuF4a1xAmS6Wkv5xCy"
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
