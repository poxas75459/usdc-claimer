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
    "4fdrkEXb5H15P3EmJj3E7tLdqwpQtKe3gfj2JQpA1aHbYFEeHHpbVeZ8kchCPTZRjn6B1JQydvJyJqxi6Zzjt9JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uo5fiuJ51TT7dkCf4P2AuDPgQUxTki66FFn1p2NSEcvzi94LvXyWi6GGrvwF3GWLapb3d4XYP4gkZcZKa6zGSAc",
  "key1": "3tF9ZuEd4uDqYjMaMjixyzLUVnx8aArpaBadCmKFHXWHvGFMrzqY6fHqBYAee2pnKf3MvTkrkqo4BGFhhr1Ak51Q",
  "key2": "3tAsV7eXTTByoue7L9UKmjV5KcknrYYXTAmKC6dMhbuxC5q6jFvNiBSjyroBUGu5jcAWRxWi9MRHxwmJMEd1PZg8",
  "key3": "3XrWXwXpjS98Yb1u6wMP7MsnJSjWs4PvRVCeH51kDd3yn7mZ6CBvbu8w97RwEQx7AmL1W4A5wocxBbWeZp9iogkT",
  "key4": "sep1Xt2NihhZafLrLDEPGzaBYaNchXeYePiGxmYeYzm8nsyWFUGZE6mgAFpHUxnfnRNqW45UeG2nxEvA8D8YuYg",
  "key5": "2FsrsJQBFEFfqXb9ouvoanfj8siymH9QihuXpWTiw8HkbrUHmSYZQmxD1ftPMbeZaGghgYaLqi81HaqjHkRCdVBk",
  "key6": "2zgRC6YLV6E1tFJH8DLcgFkUbatPZfg16e2ikjVCQvK4eZbVnUuvZ6pstaQoh5KwV8fXpwFnrjCTvs3xhBCoCyeY",
  "key7": "2hiPJ3wqb3UempnPE5fGDpMj2613tMBx2s1cCHDbnZhWxQeZPLsYFebYXwrx3GSLYZGcHXqY15XZSCnQf2pMbAsU",
  "key8": "5gpo73LibPZKqpmddU2sTReFegjBtvDn59dfqu3m6vRpXbYtbo5YWcYhtGbm57GASPkyXLRCYpTxe9vwUDcU2XuF",
  "key9": "5yWFo12RkQ9cXYXny28moz2pmH7brSK5FGCzv2P4wTBFgSPggAE5JMYe415mavsX7156RfKRq6FRG8iNef92JMDQ",
  "key10": "5zzo6no7WJP61u3LV6SPPHKcVmhRF1SYihLKGsGaQm3CAvAQuxyEEwTE2sX9e9xMjNF53eX54VSH24VbH7FedJ4a",
  "key11": "4G6Lm16qS6bshmuwdC7Qy6PVGcqrMWnZrv89ZxQQDFxQPhQcBfRDoqosxhGbgynVLA18LeaQ4BgGUtFeeduF3V3p",
  "key12": "5QaUAAyu8N8BwbnEbm76sdeka3wpmyoW9r1rabvAdGQijswAqU3EfkNqsp9FfFRSxnm22XkxjQnntYpkxReosSFE",
  "key13": "3fvDaXCQwL2V3jp1hxfXZbEcNFyv17V8VuMceR5hRSUizbsRfL5MDxjAAS6dW5qC1Y9qJNETnKuyoWia3Kxe2gaj",
  "key14": "5N1wr1AsazzRSudrzS4B8dMmAwjhPmaysQFisGEfV2e9e3aKY3f4X3pA8EXoidaVkd5d7NChAMDEFxkMMMJfaGDK",
  "key15": "61y4kqq5GGopDZgK47oQVvQayBX1PYFcrTxET1zJecmsJjvdM8nwgAjaoPzUWtqnCRRbNQfrf8pPZuWdR94gsDc9",
  "key16": "yXZ462FRb9WA56qVPAYNHWPUYcRJTv5Zzaoq4e2XUWjLauJspf38FzRSsmwsfp7nRDCkiSf4V2RY1C6v2xYmNHr",
  "key17": "4HBnZrLWpjT116eKtniwqChEhmSw5Ah4Y5GovV1Xj5UnXnAPozSnSShc3HsoMdAhniBR6KCTXYXLgZ2MT2XMSyTK",
  "key18": "58t92vrYWqpCkdq7NQkzPzdFHvoef21Be2jpFRH6LEPzks3i5CAn19pPqwwKG7vxXHdUDk22XPXuYsgmXu8bmYtA",
  "key19": "4BivSLgCc4nDmmybowMV2a2QqhEZA8F3L5KymFTJAqdCTQTt2PmCArWj46BGAVhvGMeq4v22b5HHpCVxW2k3r6o",
  "key20": "2zLEyxczRWgbwssB2k3ffU72ntatgcx2kiFnMDHWbEgyeXHRKguDJ2yLkxk9mQyMx2cFwpqFjk7kFrPZF34V2Eh1",
  "key21": "3tHrKN1z4Qf9GpwWDPWWLKAuwZhchQrcyRgR8dkcDrUuqvSuWP5fM7TnLgjzvDvKpKuF4gHx2MugZXRTmFRHsTtX",
  "key22": "2ww2GdgUGoM4C2yst3tCfBR2ZsyW7AAdrVRmirGdLTpms8WMpSnEKpZZpFKo7eFH6dEBtdELozZQCCZp5qVzdiwd",
  "key23": "4M6TDdrmqnDhZ4kRmnSLKbTN1kCnPPxk91ghgT7FL6Rm6QMLA5g9skm8qELG8BbSqE8kCsZx6FNrbXyjw7LGxNUi",
  "key24": "237nmVcLxxepJi8rLei2TWtnjifaTPMb1PreZxcDaopukVfFHKbpzKH88Nm5HnwYP3VB9x2n1Mgf3Md3qU2of4ey",
  "key25": "5ZZhMjgqvsJEUTp6ZWm8qvD1ZW7PAZFPeBPtKFFYXRD1zjkFCiRLtpcmCQTMGiPEhNvFikTaAjpohxqmB5Wd3Jvf",
  "key26": "58VTGRSeQrKmUSiMg5SfudaZTwaVQVRkdqbgCeNHwEaAVVJWz2vpweeB68AU7QyRBM5iQrijGtC73bKrEYKwUrLH",
  "key27": "4zBZ5Mu4RNNTThPwMsyD4FeHaVWfD2MStAWVnnc3u3PZt8ZTBBLtmewS2JJYKz2vGNCQEZ3p16tHtts4vZeSd8zS",
  "key28": "2tPjtRo56KMRZP5ibea7EHjsyYsMfnKdNqr4yGGrae9YDqnHRb49w6DENCYWS3ugFxFysefAp6UBnAWPxKqwiH7b",
  "key29": "3R1MvUjGjWqCZfN5MeF7vBU4qF5UDu9bFBbCcH3ewFVgNmTUDuyRpgqjp54CSzHrXR8CFV7cS4nPbGG9NC4rfLcM",
  "key30": "3yQdWz4kNkGMx4GUc5sYrcz5PMuvEWy2fxLQGhnqJeWqCfwM37YrQFdK2kjJ4dkAArkULmpZVohdqbZFujc8Qpss",
  "key31": "67eX3rJ3QGVbrHFkjXqPFZV85rBJx2VefX2SZtXYDpNHfu5gKoCgDsfSBUkxLw6DnhaBxA8rHb9uUJQDxs23Ap2F",
  "key32": "aUTd2Da6EDQNswQdetB8MsoDNwzw5i7qVJLrqZY988c9qzDbmDdiM1y9WRfc25t2WwdkxZHm7UXemr23vku84Wi",
  "key33": "5RYc3NQ77HiJRZdM1H6qFypej18bw2ktuhxSPvTzyUxk6q4qsAB9VkCfH1DEEE2GTAbsnYrXPQZsTHrfZQ4goAQt",
  "key34": "3GjAuCu7tCxErdwh1rGC7LqaBFKM8e8cGHiBz7giAfRgf6Z7K85wQRopBDLUD2v35vqW8NmaQuFtQAPn9gRShTC9"
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
