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
    "5j2AfCJqjFBodrhXFjjR82BBMJX3pvnZadvZ3FR31zELRDYhXriQ7TSAtuCXYrJ23uj6AuvX1zKtXrK73UXi3hid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SvHuCzzvfr6pCDR9X1yfo7khZp5mPuAA2d82A9xHbHAtiyx7Fzip8bxy12SgvF3khvfgzVfSbgStBMUtwgv4Smj",
  "key1": "4VbQWLndwLgVuwZfgZmHpzDRdJZBfDbsJfjhZzD64SpHN2e2FuRDWrsLQ54rPmxxpxn27MvDvoEWbp7MdJRgmBtw",
  "key2": "kLGKwHtCAXTZwSzoHaDcjrPBFfwCGhbFDanTE5tDbEC3KfR8mA2S3AjVHeHukbTGDCFSHPjv89sJ2o8LB5h4yLx",
  "key3": "ohPZnHnQAUbSMmKHBY2F8MrAutY3pbHpn2wEKPrNcLzFKjVB71y8vTz1ZJk5XouyWpb8r5DJ5q34c4VVZVdwjAE",
  "key4": "2oUGGABssCMr5z7HCbSdkkhMuqM6ib6cJ9fAxRp1ZK2km761t9RV4ibEevbaJn369QYfJ5bMigKsr3DFsqEUy2FV",
  "key5": "S6QFc6LyXzWwWYPsR26EZ72BV2npEDQnhbUt5TCSByY6hmCN4Lr5tPCxkXyZnzpLZqP46ZNBW2XBpwRQHXA1pHd",
  "key6": "ZNcqpbFTisT4suFW7CrmLshAeX7rn9TCNNBawoRBrvMDfG9yevL5RSkcwckKqgmUBqbdQu9Zw9xFQD4CZ2CfbGE",
  "key7": "2jWZf7rZULboa9PTKtFncRD3LFa7fMjyMZGvn8qQtUVFPE5KqVvEMpHikBi3Rgvh39a7AqcFwS62qePuKNAkVMWq",
  "key8": "g3XtoMdqPNNdXPNcfJLYtSYMfLmLnaCGNTyqhAFpCYbx7SJW4NXLkGDDehVCygCsYq1CjUjdWKuZ1HRzy5VZesL",
  "key9": "NahwjeuT6L9usKLexn1cZR7VFUWQsCcifuXRNHxfERoQXromSNxYwxMEBxHoKaZpDFD5Po57GWosYGgcEurthBB",
  "key10": "3NzZYKA7PXSyt8k2V8KLatvz2px5WjkMAPekHNbKyfrhA4ewfiMRbpqFxQp3UaUmDR1RXFKpadmFSzKYQp37SNG3",
  "key11": "tXWDf7Hqr6oWkUEy7xjf4EX93QBkgh9VvJHKavBxGdSAxwy6x7giM8d5s4FtAGW5z4Nk5qNhBkqPSDEUnrG5ryj",
  "key12": "4vM8qNB6XoX6iWvJWVqoeyMKjWSX8JcFtFDepGh4yMZovnozZFo5RudLYwFMqJycF8DN5NkszeiGcBW849F3Ermk",
  "key13": "54B9pDGVmXFQYSG9JUhCFsFKL7fSFCzVFRxY1QY3zg8SBMe6vY4GPsRcuc1bW8EqM4rdWPkWWJq4dSm4dTckpDwv",
  "key14": "3SAVPpsdwVbQK6uQFXmroymFpyTCCUin4Ar4Y32orrnxD8ua4uRe2ETkEGatgnp87GUveuJ1ZTFYyZbMR3e6hY5E",
  "key15": "5rKejWHEkPn9aE8tLvev7iBJX3gBY2T3VEBPK8gderV6Pi9DG8jpBa5E8m9LctEFYRu444QJNWy4oU52KvAKHk7E",
  "key16": "51aRGJ1YMbZZpk74vM2PuznErkXCga54qHJzpy6zPHxp7wmdKUDw4EoQqf3HXACm8k4wYP2QcMPCpVrj6cqBCipP",
  "key17": "JRejtmamexwFVMbXTCtomrAh3ypTLa5487zHLPrWzLK72V9GtmGyZE9UgHDHdQCpnR8RuYXbRCotNPjJcaHZUuv",
  "key18": "3KnfHdouSjZE7qVuRhEaqTU3zoPcHk8khiZ2w6EEs8SjjnZHJThGfWodCZv1zaaLSS93TNUcYxVS4JarPHWGt7rH",
  "key19": "dqcqdhaTwUNuVNfEaYwE2HDWTFrHXFECV9GPyp35a5DDpuqCWcA3S62egPcTTmNYNAjbTL8dPqYVb29S1rvyKGe",
  "key20": "2WjPRnwHT3EALzX8ULFQfFEv5hvk1auPNKcWkoRS6ab7wAq9UhFnbhj7g7txf7bsLD5cxTJpbVwVDh2ZNi3xXqNq",
  "key21": "kwGFaECfQPbaJmTPq6bHConUi62paieV9uD21tE1jbodMpPhk2gGKuD3AaD91f3XvGY1T62o38T7fM24DnJ3csn",
  "key22": "nDYAbdFro6guBkDMpRvRV2ZaDH4ig1RmSxi4LNitAsHyGRiyDEeJbFFzDNs4uWYC5BCTpw3zPVmCQLyp221gSVC",
  "key23": "45NJR9FYtzCn9LEui169KZLaqffTpvnYmynpQpc6tEgqrYTtewkXZaM4cvxMaB41JdVfz9Ly6PRq29uwKeJYBdSt",
  "key24": "4bY4eZGXim6Zv99jqpSSvTEZN4yGLqKj8x8E3uH7jEeuUednxKYN5fJPCg72TrRYNgrnaVLcLriyJBaPgDQbVhS7",
  "key25": "2QWb2mXsq1ycjDUr1rqPhVyLdXNyiBn3mnNT8TTm4L9AHnBU3zp239VJnA5jAHuEVCi74xrdm5qTfgVL2zey1yBY",
  "key26": "4ZhLrDqcYp1ezx7Lyyh6QAXADPK6G7FJ18RjNeGVt96jS7Z1XtXSurPapW3fgetpvPFgqEkjTQGNjLsToQjAGjhi",
  "key27": "5S7TYcMBo5JFKYfqvtJhLDwnQvarC7saabiG9Xf4Pzja9k565h5BgE6ye4yGB26LKtWKHhBcjhxAutw3ejCxiThy",
  "key28": "2HFpLLyeygB4bDFytF1h3shK7wXWvBCSs4Jpb3uxWfaYSavc5MPDaywCH1zoM7uWCAXawMSYLTjgKJqhBQCKUjLY",
  "key29": "5ZgHrPKD2QmoLucgaZVxSHYj1LPQ1cLhTqnUQMfNR6R4vSYXaP4UhkYq7wdbBN8dFVm4kXYSRMJNiocDC7c7hd7F",
  "key30": "2y8Ud3hR16GquTHeVCw8j3KYCudXdVoSZUFaPwVdedjq6WjBWFEXP9UEChZChJh8FweciDx3kHpuUc4AfmKnpMRq",
  "key31": "4MtQFWYka67yeXrHWvXeLGqtCkK7qmWpk63LwoCXRAYHk5GJ5SA5uJHJPUXKmPSv2oKSSw2tJ1oCWDxTSXMaAE7L",
  "key32": "3vXrDnwyM3SZ6XagxYUqkbTiwM6PB9b3EDw964zpssJsdEQRLHXogQDmrid4syh6HVjag1m7QJjVTR5U862mayU",
  "key33": "5vrdRBTvVY5isz3SPugdrVA6QAdi4G9YY8BnbffYDd9V98XUhtwf6aAuBShiAK9KF4gb28bhMK8uiVZKLJdacsAZ"
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
