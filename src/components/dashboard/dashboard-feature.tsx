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
    "gbc2oRMQrQztg59sJJZhTT16JQV68PXXYrH54JX6zLedaFJo9GmPGtMxA58sUFYWexSNj9Ce4SZjQbAHodSiZDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjEpkizFDtSELxHuLTGHF7BGSkDQ6NcJeUmHoVFPbH5qiQGBNS4KMSjAYu2ZQns51BGeTTLQ9UV3HtohGLNSH8r",
  "key1": "2vjqRGHXvnyNvDyJH2UQn6DVP3SMkqQXeArXbfnWbWKQHWjMSr1ui4ZwMAX8nr9qr6EZxwBiw4jY6SfotaqiNmGd",
  "key2": "5HwSw2WfCjdQPKRCbgryEQAnijrhHa3MXxWUMBjg17dxuhfDFR692iMfRNiVuYSf6KBV1DeDrjwMqEMwJogJHV3d",
  "key3": "57yy9SN3PqRpStnsRGUKJ9SyssR7N4mqZDRk4Kvt5gpjdTP5C7XWohFy9nTUzzWTYxgjnb8Z8NzxNPtBsMziAesR",
  "key4": "5GeXZVZZZtFjUe7PWwATTfNXp3WUmuScUx5bQRFNhFDGQzsaRRcNn7r9MQTfthjvYRJFB8mJodDJ7H1pmaaPgMsZ",
  "key5": "3PZsbLvozouvSENZaAnhf2BmwVWuhJCRcc1aLksz99Cmw1J7ZWFHqtSD26wNTUn1iBrrTRXNtYNzhkx8LE5BKNuA",
  "key6": "3qb3ZWhbi8N5eyxSp1455Fd8Z71hkeDR2Q4W3hw4BAMLzQXXt9AL8PVAQvMSUTPTkwDWtYuC8g1KgSQqhrc8famF",
  "key7": "3nGpQAHRtAw6UC5ZExCecPq1DimvHSdFxALJT9LzUqEK4Am1oicPz9AyWZCYtDW8kyvbZRC4UFoZ3n8e4HhkF4Eq",
  "key8": "61S8n8MuSax3hr7YuQmP6Ww82ZkHNV71ziyGmrHX6873axwH3VuUwba7cqvMnqvzGToRspJxSkqNak55NmoEnuGw",
  "key9": "3A7fKKwunFUM5S4HwzwJL8ombizSUoVtTJcRam8FFY6hW9XAgze7YVEpJSm9YLfVpr5RfzbdzHCjzKrMTkHqHqwE",
  "key10": "3hiX7uC8RJqGVio3akdEsjruAEMgzzFANhvkoBghL967fywfXcMhL8vMNNSEFwTr7ud1rkgH3t2cDY4E5MWjPWzd",
  "key11": "5TuCYLR3EbSnNXunK5MxwJfbYTkiJH31LftEVutMH19ATngNYAz5Ayxxwdm5NBAZwdKc3UpKFDZ6c9FiRHd11ReK",
  "key12": "5uNkMhL8hpobHuc6s1uN3W8jToV4JScS9gxBaiD4ZJGu7bgZ8mt3gpZpXY18JVU4GVpJU8MjWUTB5HtbV31TVYKb",
  "key13": "42XqDAWNLyWkMvtTnzSjd6MLMkXXKTnVQEF3G2D5PzMBcWewoHTnwLza5d9GN66VA3morqWVH8Qn6NC8v2bhdW7h",
  "key14": "65d7TxA47KnWhbm2QMPEk7Hq7icrSJ3zkdyKxokXuwMJaUfX7TTyBR7SFfqM7NLUYTARyUgtLAAvtp9YFwQHVq2z",
  "key15": "PmzJ6Go2C3psQk6z2wfU1XMi9kiy2FSnbCNvnpu8iGugBckcPuDFYGxFE1h46sncXxPAf1qRtcSthsouQuLHsyy",
  "key16": "2469qgYPg2vaSCr5pAiY8Jv6LGnWyNF8qGJWXG3JKx26XPPbf7RHzoY3cYu2oXDPSvccPE9HQaYjtwLGzxtw9rNC",
  "key17": "47gfPbYf6vaQNwcvrH7Jcmy7xTf2DwemBJfjvs4XTBHAsS9bYKk12aucPrHRniucDhBBpBZuz6dYuCJL6qFTyTwh",
  "key18": "3nWKPqAkiQ4fUnjm7zZ4fU3UQH5mkcq5FcJja2hoZt3ZqhTdP82chXvqVBhXSgCphAxu8DPcpLNs7hTUBRUetGBP",
  "key19": "3gTy6ovqQKKYyVMWiifg9oWjYYPGtG1h7Rdjo6RhdyDgGsPLF65fUN3ezBkiPc9UVN7zoV5eaCVbkQ8yp2KnWUrc",
  "key20": "29TLQAMuhJgVQAi9rVKR5zjXCiKzBbsuxVWV6HjwVbEaY9mvjSVQ1hA9JnVcigUi7WAAGBU1tG7kCEMQEkqnQ5ic",
  "key21": "NyvGPMn19q9V66aC8kXxiriCdPv3BzBZoXdc8P9GzcAGC9zUksqnSKwHCors82Rtnx4w5E2oxKv1Yz97NCJ2MKp",
  "key22": "4bZTD7p5TzJ1MtnJoUgLnBYGXDoErdySsjkC4Wquei6DdvWztTdnn7UeorTYy7yZoWzB9HLvfp5JTRw9EHDWF91F",
  "key23": "4PyTh1HGE8N2EmgBGoT5KAYfvH1RDrfygfEtUXiLdKJPXi6oTgdxMygQ6WUsk72D1g9YyT3oGrDKEJAeLmU7X585",
  "key24": "2tBHZr4Mo33R7sfayg7bFVqFwUfnDWbQ3vgE4QWYYeQzWKk2mqe1xBUYYUpFuU45bHo6nxE4c2zx9iVjNxq2EQvU",
  "key25": "ww2gmkdttU2qoGtcCrmMPycg9phNaBd5JfMyQs5gTiCncEt99UPt37u79m5qRPRKtrPvopuWHSV22sUHGrpdia5",
  "key26": "4WeQT9iA1AbdQFYWV6YHAuDgaTbFLLNLq1MRJN1xKtxYHnPy6sc3VpyPMmZYfbmZvZ9y7svhjCgizLCMG9pVZzYM",
  "key27": "4G9kei1bKqRG2TrFbGpc471nPA8oW1c5rKbrnYifwCGHEFamz78cekpxreqLbN8Kq8rpuqiCipRqHbgUgoyezPm1",
  "key28": "5bwVndii4jEKeW1VNsiGKyLQFGoqX4Yjsupk6FKVyqyPgNpZnUMQVZFA36RQqPmt22c9q4AZ1yGkfjzDMu7p3Da9",
  "key29": "2VXYenCBzP6kYAjK253CWmvfARbF6cAbvipDjD2wjfaKWhqTspnCMr7jSoj55X5AoRA2Rztt2nZCmSAZjj9kaYoE",
  "key30": "Cb6KQFqjHDFtYBr46yKLWCHmbZ566H3mzXEsZKfJYLDfxUnHgqH4ZrHo6ojqin5gLyADd6TBDXHSeMAd9sYVmEB",
  "key31": "5qhtW6WSX5Wvyyhk1ZSTGPXSSHBa8pn7ucntxh4F89oPL378u11fBddfuP9VagkqajyQCpWZdATZ1qmSrAC9CJVy"
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
