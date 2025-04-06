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
    "PpvrVF4iDY6UtLQR6nEBBDY1tJ7s9zm7nGyGJf8Q8Pk65bMbLqbZu6JNnTS16iYEdQBrPkTUKdC9Uo4qhZywQ5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gaHwEwX5Kk2fXAD4naPcQZGqsinLp1gbnmfueA7J17f4PednWzNbuWDGbxuCPVNDLLGhwHLBEXqbRSM5jF8s39",
  "key1": "2X3mpjXoP2bXQ9FiK9USvETMpELL5YUx4hZJKwWHgLA7cjN3sb1Vio6waeWHw6KMGcaJzRbuV7tFNNsifswyzdXd",
  "key2": "39gAKch5tSYLZwNN4wBeHm6Xg1b2BmsEKX6SXbRNZ5q9gpmnZDzsrkQb5jpNqenuKAEvrdXJ7FEccQw38XXpnMJx",
  "key3": "3aDDfsCbNiT61EU3pnURMaB9zWjeFCcJaMhy9XtThdwKJ2UeEqYMouoABLsZvwpqLUKzPQ5FLVnuXXF1NcXjAejN",
  "key4": "35H3AzC3KwR2xGDSUDiY3JuEMBpvF9mwRvCD7gcAj3oYF2N9fpZBWh9doDQx1WAipJ1MBia3Fej7ZttGjWU12Bt3",
  "key5": "4QLzRwm1tCNbvd8Q4PeEoHAURxQEGyAB5MgUyhWPnvxUANX4X3CYCndBSDFdu9nMMgeBPB94CcBAoJ1qp17bpXg6",
  "key6": "5PsJMUF5iuyjcPLDaLPCg96WNghdY1PpALLi18TZybXqZS4wErw7nyy53DX2cfD87KEJ6vas4WQKKhjV3RLa3zra",
  "key7": "2gXp41zAT2JFUEXuSGXoBBcVe2YAVqAZYZfxPeacx99epS7S2trENP9Ke1UcBRWxdZVcBApcsr9EwCEb6qomMFdq",
  "key8": "zcHNHWe2Km2YxDZSt2oCgA86cfTZB8LiUoPSfTAeVNNcanSF3tgAbZJzixuaNkApAz4Ng42UKiVvwCxUQzw6VNL",
  "key9": "5rckbMXeN3R93t8cifemJPAeeS7Ga9kZnCWafBPhQ5Fq42EYm7LnpEoTHCaLC6DoDo7wE5ooX9QgPA8Xna7pUfQC",
  "key10": "2Vyjfw2PCdsz38BJ42bK4ndFJ9UKFioWffZbMGx6Q24tNBZtFHZJrgi9Mo99SuUrjq44Tv89qmadLDXNWYTPmaAD",
  "key11": "5fH1JsCAV4G1sK2LjQTBXMpDuAn4agSVDKTtg4ENwWDiyzwi9dcvmqXHC9wUJaH3bdEangZrQthUNYQAiRczYZSo",
  "key12": "27Sv6xv8pvHomK4sQCSBx4K1mp9QcKK18d73WAYrouJQtshzEBrAPnAk32JLkdubiJKnmKPfZ81rug1EeMREqDB1",
  "key13": "2U3YR5Nud7wXsixGqY5ZYrhg75TWgx1KWz8BBqdqV4qJ5WXSARpvioPdykNZ2T3nbcFjvCs8n5HCziy1saNZkPYo",
  "key14": "4mHxAQ3L6zMwjiyJfxn4DUiHtCCMHfNPWDJchVxrhfYVr5EK5JG55s3LXaJyGGibv13zH8Y2CPwiYi1MufVHJrZP",
  "key15": "4QZT77ndaDYcFjTnHQT5xBrUeEge4khaEY4jsW1G7nUEacSP6BsTCQvLT24RtAahzyavifuj4irnNbZ9r6BTKLMM",
  "key16": "4wLBfGff7tWY1ryNJ2DxVnVDUKujhDaqXLM3EHnnDAdeK6nrjrVUh8eBSiD6qw9uGUBWz3SVsHM23c8D1SSiacbQ",
  "key17": "3eiPkrVpJfMhjQ7kdy4bezeusV7Jdemc2H3aGNYk9P2QRfEi78ErU3jGE6eE3QodubqM1m69v7tYGnvcmWhWWVZT",
  "key18": "3ii3cNQFLgrZyGxzQp7BQgvdxFrnAangBYyjyw4EpoDenvJp5FsrMdPrWVVKaAnpvBSpjeCKbJL5KNN6qUs5tVUj",
  "key19": "5b4pYmeGs21Yqf5P55pzonPZtFgnPaBvfoHXxnsbVxbng7DYyubtMMUGgWvVYsEmCKaKTiqMRYX9AjWJBgmXfzF3",
  "key20": "4ZbF2x788WUP3j4Yw7B9Px9GgaVHSdNpRLaSCMLsVRmT5Tq27SXzo4H9br7nujZQrVtC8hp9hj5dMGCyfLMk9XTz",
  "key21": "4xwUfoHQv8aMo8TsUFWRpWUEesXn35s8ysSgZKEMAWznPE7a9Ahg3rQ2HrcSk8KbEDrfKgPgn8WVeiRu7Qq633U7",
  "key22": "5H65bMLoUiLURRzic8WLAskJF74cXg3DNnVcWRss2aSexcmoa2PVPqfQda8TPvDQTjJq2Yef8sU84jJhoi4HGnqc",
  "key23": "3TVpM4P2TQ81opx59L4iHTeETbuM8CvCHJqj4ZUeyUPcxtrKEsXfS1p6sCDNHRVqcbeKNWtw11CGUKbdq1tYzcus",
  "key24": "E8ZW5QeTnyuzimM3r47iGH4L9Wsj16kL7ZrNUmptaxoJs2WN1K345w1vkndLyzR7MbL8GmqJ5roY8452JkXizYf",
  "key25": "QWEKjGGZZ2ReMk1yDeQ26akJqtf4E6sncauHvN8xxoGq5gc2hkZzzHP11fAG2ZXr9SzUn1hi4H5arHUKYg8Airf",
  "key26": "2cZxN3h66UQzcF1BEW8sESvWizedtDgruqypj4a5cuua4nWJk9EYiYQ4b1ggXWHo7skpoBmJd8Xre4efqP1s5PmY",
  "key27": "5vLDdpHcpHyHSmH4XLYwQbcnf2RDhENWoxVzjycdaueGwRpUuuVnyT6FiqqugCKSt1QfFFo4UoF2huiDHYHebp1p",
  "key28": "DLDWBt1hDLD5WrRA62DdbBwdaPieL7fChYPoN8fffn4xPurg3k96B1f3iTuu1NKKasV53xPo1BkQxoLeL2DLzwm",
  "key29": "4LcRwgTrmaxDcZ5UThcQV9K2fiAESfnL62C2UYNgV9GvYKUwDLxzPJazaCBf1tK4n2bYYKNJWcNiz88j5Vio5Fxc",
  "key30": "3yHyPdWtbqpXoYS2j8Q7ugzHNDz6HhbA5X6J5SxVjH8YX7SVHCzJfKnGjKLFTZnEC8AMvHqF9KrkmTRopa9gmUyT",
  "key31": "Aed5KxtzSjRnWswUy64FoNwMyfdp7vxVd5HfHThmj3TNzbyzVvNxQogK5x9TDLagAYVs5R5aVQEUZLsBjH5m8q9",
  "key32": "3xKiHFvg3rZYLat4LhUa5AgT9YnMjudjmPN7VkMz2V7fA8cKBX5U3SvJf4SihkdFQ79VdAmexeyumcpzc8hX6DZ5",
  "key33": "5Zj21p7RqxiY1oMCejTdcr7fXuTxSe8YoRuxGQma4kAHBWk3cZzFwvk7Y4FhB7itxNhGXTTVBgbAgKqeFDKdxQ6i",
  "key34": "gyfNvxvanPymZbxvw8i2FPuEtYbAfvUbR9zL8BLNSLoh2pi4Gsm22uoimFnr7ALpS6UWHSXCCAKD6Lg6cebgGPu",
  "key35": "22QF2VjwxnUojKxtyJZEnxhCAwhYNHdiWF1D22emYMGqp5nbACQAqsjnS8kQzjpWrnvwLX52XzoS2BU5LHdH4gTB",
  "key36": "2SULD4odpCRkKyFksiKGHnyXVV9fHgJSDSWAbnnwdY3NpbZw1782S8CfK8wEV6pgxJMFgzbj9f8p8HnscSjzkjVg",
  "key37": "5UMnxLNXeHLwYhMmVYJrxgwgnff9Sr4X84sa34iqCuHbnZweNX2NCk2yfN1XZh8NqBy3Jg44SAf9ADMauQgnNTRS",
  "key38": "4uvPy7wSp68z2V5LwumaALTTpXPGUqSQNZ435yo1aVmsCFgXUWkkvCw3m7VjzMyk51JDjzbbFPZ3s6Zduc6B2vjc",
  "key39": "3gVkJfFtWC1rgQywE5T1YGifCobPVwXBe1NfjB3qqkn1KqBfwicn8qq6NmiJyq6oDsm9Jknuw4g83WBEaA398vJ3",
  "key40": "3EEJPqETryZNLjiUKMhULG4XSkQTkhRVAXxxw1BNSKBmkSfj3i9KCcaaxESaaMUW2kcjdoucdaNvs2vpKmNV9zRs",
  "key41": "ty29cLrLDqBBrV32de15ogggyuNmEoazjw5hDLaA2UVTfTBoRZBzuASkMWYsCHn1qAVaYNbWtdTSJtr6Vd1oHAu"
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
