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
    "3JhPRLQpzoyqcGQV3iujNUz8xs5NMwndCE1i5LeUC1BdPxvjftk6T9migeBvWUi4moUdf6HLD9Ve5WW4SJHBknm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sX9syhMqa9E9sW2zqWvZpKZXfxBGagnFzNWp8dujz9jyyBjYp6pYF8gjY4qgvpXQnugBMQmdAWpzDgCxbUbUGjV",
  "key1": "z3Y53YDH4KQTgmtyXk8rRcJybV7h7AnGTcYTBH5ndV9VHiFQAu8sq9ne5W9x3VZ8nbyVEytiwrtJ9dyv1QMcS2s",
  "key2": "2Fs3HxAVG27g6T2sUUi1ijsY7tsA9mkK8aUTXBmVVCdxfjzr1vjpodpwSCcGdyKsujyC8cTEz1TohFhgG5cmFb4e",
  "key3": "5QeTdvZzvjBq7fEdZnPvWjviTD7w1F6pTvBB9M2kgCraaVPrUCzsKZz56PDwwAo3Ui4xmi1jkZ9YCJhfTjujnjHZ",
  "key4": "5xuSE3tbYTkgWQegU5Zr37nb7Si9tMXBACfTQ2wdT9bxGUoMqFfLhN9YqfjHsCJmMYMkEGiKTGtLmDyss8MxfmeU",
  "key5": "2mqT1LaWMihUx1ezjxYz9UAharwdeVZbWpbwotv91t8kGvB74UPMnHrHob3EHDzU5NKnHkknrYsV5wf8U4wgmfcv",
  "key6": "5S764afQbjXf7SWHARgrZHe72jGiKRbaEqyovtSkqSkppCEptxYfqUmRkUark2UTrAQ5vSYLZWt1K7qbVKJLXA7D",
  "key7": "57wvVB7nHRyyHSwkaouYBJd5fnDTwH6eUC4rR6jPYUw3tvq1xhpQGSgv15TG2eBUAm4uU2vg9eYrBFW64qpEwYmM",
  "key8": "5ESzb7ZFYxNb6C2UKG4gF6uhtbpE81CypDTUmyEfp7o8urc7TezxjA68SNE8SMTchMDEoGoFFPbavSDBuirQdi91",
  "key9": "5tudL2RHo1p9uyfh4bf9bxzZtnyN3UBjykUSpkZ2kijZeaW5Htxau6nEug4Jc4vow99kHKcLb5QJy3RaqXHTXimM",
  "key10": "5M8GTP4GTwnbpVpvP42yLBoMpEjRWNaRoJi2dWVhdmKpMyE9Sp8ngaYT1Roa4YWSvUcNiDhZMFZovhFifFDLTKkF",
  "key11": "4HA2dYM2DDEcLutYEDomgazRaZBAi3r6zC5QQkEz5HgfmFzxqJRe1PFMQw9JQDDmpe3wfhTj4xBdE3zti1dqiwwh",
  "key12": "2Ww8y57XKs6vmRLsYGz56UYJSSWzPns7q3VD2wfiXH96vLLR3WiFrrYk5MSXe3VYWL4Lq2JxoHfrRWmAS3feX9YY",
  "key13": "4Y6bfEaLHbGWANysCpmjy9iyeoKc2JZxNXk9cdDhMwN9nMRuE3tuYKt1eRafM5CUPmTpXLbMp8jHa2YPbQauAHb6",
  "key14": "2bwvENPQ4zqZQnndfqNowTbadAp19AhQhFXsV2TnviHcVf85chFwgaUXBmXQLQ1nhrw9ZzWM7Rrmqmn1njMTZujv",
  "key15": "5QKrmcXYsH4DkiAMVvzHN76HxiFp6XzUr2gypXtWKT9ZYFk5wwRGYNJQKbR5chNkmBps5BPYxKSDMApgGwTWxc1N",
  "key16": "31DuGcMFBNhQu87MWKAFYgezvgECmEUyW4F8k1A7KVnS6EJUbEcJda4dssxWaD3XPQeWsxHdSfub5BjeeLST5BVA",
  "key17": "5pCTEKwjpkNbBa6kdFZWjQHxY5iNHvDrb9k4Hyqp75WAGvKxvdTGPkpsi2NGzLzjexoUp31LoYYakEq5Wb2fsC9F",
  "key18": "5AsujFLomrfsUg8asDu6vMwE8JpnefcfB1AdWcwB7p8V5K3sXYan8U7oW6xojxddvTtiHMsk6ucpuzPem1GGnANf",
  "key19": "xob4Vwtv8LrTbRiwE23MNDFAW1ace6CmEfzt3WVc2SkqKkyTboFmtpbtW6NA7vN2dJnMoRdBkuqB9RcKP1bLu5H",
  "key20": "kDtQNs1ZLjpwgUbq6jjiVvoDmQ4EuXanp9Nde345V9UaiaCbeAi3RbdsJdjjFeuqmLr4W72zvQHTCwsrpbntsc2",
  "key21": "4CAy95bT4TVNHiKAamBSd3kyjNUj2A5C1TSLBTdTrXXxLmqdZmdtSJSC7e2uhXBxAXvXQG8cNBKcwM35cZyM394C",
  "key22": "47N9K5Wxu5PfXajqdM6muxe8Gfbo8UkV5uuJp6bNMS7Ry3hEEdgdpF9sD482vELjHtKzGx8ddhCc14onRYfKncbv",
  "key23": "48L8wrTUTgryPiniJPB69vxoZnbP2L25m9kJJnWwnnfU1AEacmvHhmbSNBBKQGcaSyNd2bksP4pRzGiXSRks8Web",
  "key24": "TbgNA7kqn1iBy6YeHLMxz3FKDFVrQGRwRYy9MkhodMmzvzxuDVRYRMZKNJjb3eeKQMoPeXxSyuwJzEuBLc6SxQZ",
  "key25": "4XDjdYSVMm73gvFTHww7ZJMTUjuaAvMwVSnypKeLsUiometughnNRxz9wLePRkkSvr5kchUFQbQfPS17CoDECqir",
  "key26": "3sgCkh8LjuCK3tdpTdxJg34mFw7Mnh8TdUve9uhFX58L8wCxjTVTwqB8jkVwq8AwEB9GVCRHLTZJ25DCzxXeiiXr",
  "key27": "2cdegkRVYzcVxCoNpv6pGjHvtzuQaSh1dMK6fCJ92xQsrDJESEy7ydjVeMC7om5PwvDHYLivxd7GjwT8tWmYcqBv",
  "key28": "5G4guncwVwKpRKmoGo7SMRpKdnj23mZ5sPR3yaV4wVAzSnWo5oijQSU6mq4BBKVcDCeBzJg5YSzcQgEeFygAzj8Z",
  "key29": "5EKfQNawPJUohUvLq9TefKyJ93817reF1wZ5qkSuaoWbxRzzMFbJnTJz9PZhCmCoR9x39RdpNgBgpScAyK1b2D82"
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
