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
    "3oKANazJj9TBZoWG1CXKPkZHNcRFzSqoXYt8aHETK54NG9oG5vCbGVkx2VaXYtJjZo7zQR8xFHALdchbMwEY6133"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZnWphVFFqPhvScTFD31EqacprAaguo2fW5U8cKoPgq3Po742n7S1aCgn1XFbedawyponzQDrFUmd7mbKKY6fSm",
  "key1": "4NsyvPyoKsj99ZR1nZWBihkdRHsGsPJPrR2m43SMBG9bqVLSsYzbEcdAbT5jYGvQejKSWbyFgKuZkHLMnA5AkG6R",
  "key2": "4mGJV9fQRooTxT3rKrAS3erR4tqe3VTy4he2NC9mZK3PLyxUjt1DTr2xy96yvcxbSmhVUgX4cgdcqWFC1ihgDSLq",
  "key3": "5GAkmUf4DrEPPUnXbZ31NZGN9PDfz6XEpqmEyfLhQRGvZjxptYXyycDDGW5WoemGmtSsvzNFj9wVMwFAZUQrq2s3",
  "key4": "4ZmDZyYYmsDb2o2zGBn2MYo77d3SCpFX1YDiVtCYVr5DyoiLBrxihM3Xup3RyFGhUM42EBtu9yzPrMyLCdijCJHp",
  "key5": "k1HaSBFaAo3MydqcyP7P8GX9YenpuK5CZdvCXwjzFFY3ei4nsD3KDMm6H3gYPmwF56uprMBcnS8h6LXmx4YZWV6",
  "key6": "25GqECTHWb2RkVF5f7iYQjTqAkZcZxHsqE2ZmzjQ5XLzxtBpPa6M2dDf2zm4Xghrp6ekcAGdfumFRXWaqKRX1JZ6",
  "key7": "5oPEPwLLxw862PJ5E6vCmr9tMve8JY5fDojkTn1Xq55J4DB2NYqPcKyHVxA6D71DJ2n2TBj3yHeSxPqTkfXnCdmo",
  "key8": "3DUkB58aDwa3ortHMt7QGwKh8uaXZGod56wnEyVHgqgDZQbZBK9PyoV5Hj8tq4JGPCzNvG2GLRZGN3pSU7UmLKoM",
  "key9": "3RsaLYmSPfG8rNKuR69CNf73fL7wMsb8ZJWuyA1LYwJeFGHnbT4bGv7WLGMpndkuA2PuG83rUL3bafxYABT1pTvB",
  "key10": "4RBiq39ng3aa2XRfdCrviX6U2caTqTJPqJm3oLdftbckTyHBfnsD76qZwfYmaUiQfGe76RsX9N6mP7V2azU4u23a",
  "key11": "22PnWTHj3WgYMnioAytLvznk6LTYwGFWx72ME1Zf8eJhQAyXRaugRzFWgBUzscg3WMxzJHBtAjYveJDV5Ce2apx3",
  "key12": "4a63Ek8wG1eEbyzdu2DLBi3TqwiSFXbKWXXSHZPxUV3jaUpuuBe5MVpcWV2mVovg7HRQoRNtscUgabgWrFUkfsyE",
  "key13": "466FLhjPAqsqFnicQ3HGhZaki9b8juLhJ3YFWz5vfQzBhYmDZFeVdqfhtRamDa6pncdy33RPyBgmdRVvv9MF27BV",
  "key14": "4LbvdmjPwovXTbXgNjhPV6CBhjBsnMHBwFPiVnQ58MccwX9QbtwxMm9zL9sXS1EtNYpw45E75JmQ47z5cVaTwmzf",
  "key15": "4CDvtdcqhA7AtjFhusXVEBFz8Vb7fjoifU6xqUTZaTiVEihBswcpW53vWshBQepvY3SohAYYWneG4XzCLafsYcER",
  "key16": "5Fc9DnbYW6SFpKeShGxWTayAcyXt3oHKQFuDjf4qYeojRTJCV7tkszwKXv7HbqV35UyusAhLukncfYboRCeJR6TZ",
  "key17": "3GDxXDq6pYqzg5aeVZFiP6hv9QCsSkZN1fvbf1wkEtjTm7zXbm1BVj8EN6mycVwq8cZpEGTvzukWMoiYEgP1B92P",
  "key18": "5WrV7xeGRLS7uUnJZnxx9jWqReXHNsJj96pqSRqLLLh26JNsrRNJRGvgnWrzcehfKfbsFVBeAMDTXhfvguEu6vrM",
  "key19": "5nxxKHsZcMKSQdQur65P73zkhoCYfdnK9PFTqH8pGsnomLdteh5LivvV5Qe4DUW2x7ZvKRa2xfsUgh1vpFnhJsk5",
  "key20": "3ddWV3eK4DjG3P32XeCjdrhdf6TpYGZUvypWpgKiRQBd5iuLjSEHTn9G6Ez5bBoaMeHw1isqE2GKQHzP4NSVbp4v",
  "key21": "5angRLDQpq25LzVfwxCRSTXgyE7NYzLWN5BgMQrQm1zRRzRNjNStd3xZM3qMdoN7WFjfqcuyiNeounueBiYP3p8c",
  "key22": "2Gj7oiieidMHC5And2GNdCR58xJENHiTjjrkrscwpJ7VCddBkVhD6a3qF4L7Eakh88dH7za3DqMqiGrcVAj8X7sx",
  "key23": "5EAqgBynRxLWF5PGtnbmHfsgzQFZvusEpwrBArDRrv6KiwBdmq3sHfLqBC691nN4EBKCAUmo7TbfQ9J2b7B8KTzZ",
  "key24": "2Bu8VqetKaBMBbZwVEZVNZ67GUi3MYEASCWWTyi7opd9BFL2B7QoJ5Fg8NfnwThcd7mXVzVFRpmwUwm18JWiubzL",
  "key25": "4PxACokbwuVk37TMQrLBYASVYosWQ54d6dxGaPUGK72ZpYiiNX2DgBqq4rAPR8tVvaEoYhE8rPpyDMC7XxgbMzgj",
  "key26": "2n9nat74dLh51jx1DtCWEt7ArWBZtZsKpgFKBBv6broa3rcyQEy7bEvhftjezsM8ddZVhiUS9hijERtVmSgaCryg",
  "key27": "2tacE1ZvRAurJzBJL5co9WE392bkRAKx2ynmnvy2suAn8XXZg2e9GQ8QhrCDRAxu58f9F69Bwe8aAR5cbNKxhfHK",
  "key28": "2Wws9gaoEmpwyt72v1c4YbhrcRfZi77QAe4AMmLVDCrRceZprfuoXXg9j483ycaYUBCZ38uHt48493yy4vHWtdnP",
  "key29": "5NFmzBEsCGV9aishDsYvg9NkgBLdPuBLZUSRYF6gtGBpzNqvjnVp92nZwPtiacsrP3xF1UVoPJ7YXULYnEGm1Yna",
  "key30": "2F1fdmYYoBXJWPSHC5p82beHvDBustMdXXWjCqSqRXkty4BydJaaT78Lr6cLXVqdR6r6nyztFTVE9m3kysWFyAwf",
  "key31": "4Li5P5nHv3h4P4uxepcPHz7eEByuncKCSdn9JKCbpe2NWvZ5iN9rBxdFHJKphysn2Li8aJmtbaQJGTUbh16u21o4",
  "key32": "M47gK9deD9xeDLEvqfHgxi7MEnzYvKfG3m79tm39HGR9CcQ4Cr43uYeztvGHjBwRNdGwUv79otDRkytQqVE2dBJ",
  "key33": "MtYyZAA9X5rfBotmb39G7DYwNhfFxaUNMqi8GoB5SwQfA4MBZcwzCmqonQ4LrMke4tkercmdNtjaXNiB4wZpYdB",
  "key34": "4b7x5ejgxwLQMUN4Rr5bTt5WmfZwfbHxYMzV7WZGKbNBNWT4qXiQrGfjm8h25Hmk7n8DUhfqmvYQ9wtLAVk4t3wJ",
  "key35": "51FVDw7Ai7KuxxeTeDbELUusB7qQgvjXRQ3L2txvRjGMUnQ8WPdLZRT7SZKXvgqprynByrtjPKD9VgZwctUHqKj9",
  "key36": "4C62EA7Nabd8h2f7B8rT11K2rhJYxTtuW2S59WDetjt7orRvZw9Q98anv18yar2WdmbmRMXWEAuczUbUpm1ZQqbT",
  "key37": "427ZEhmPLW2FPCX3ACMMTN9zfUaGrXWL6aDxw2GpYzDJiAoYrQNFxm7MgZxNT91UmF41vMQVhnk7Zhj6Fb7BnAnA",
  "key38": "27zbLfyGSMt8MZK1rwrrw93Ko5DP5LpZ9Xu1c8ffQh8fLAsXaLHevXhnLn88KjgHhTSWhJxmAt9SxsFDuGiwp6Fy",
  "key39": "5jvMP4f1korA7BZXvaBtegvTNxgykqpn42CS7XBfPxZoQMjNZoK6b8VMeQ6xvarvdjXywm5qdBNhcfPcNF4NHnfy",
  "key40": "rF8BH5y6yfWkwM759A9DbguuGqB41FEg8qyi3Wd7oNuLHYioxa3qyVSeCYAC5uvHA7fV3rgQAuDVqKokPeut4GT"
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
