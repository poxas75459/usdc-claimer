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
    "5gFsVBK4atqdFTpTuR3HugKQXFfp1WVB1JKtTEydv6Vr1yajiAkrpfWDsqXbuxtqfUXtnvM2wSzLq91aC5U21iNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49k9RJLqHR92hivibdvS6RzU7P4rMAp6EywwWdxfbnt1oFvNU5E2xW79cKgwLqkDrXMehT2GmSzSNm7ed3c5BkzM",
  "key1": "Fwcc8BqsEcnZJeNHvnKVPChJWboqtyWKfBrJiWJNVPM1K35FatouAE5APkKHNcgHyMnfvZvULzvyHPZWayr1mvW",
  "key2": "3dduDEAcT3xGYPYV2XDxKgJi3tBLoTHmHAHZAJKXWuyGYAjZH23xbqEAZxQQBrMMLStU5LGArG7LJZXJz88ovvDY",
  "key3": "4hFkAz89S9pkGgDHuAb3Gn1GgoQ9MAaJsHCR3yNmuTk4Eq69ydcoqRuqJtwHSxNQoTMziyoSUjp25ton6j8cEPhR",
  "key4": "kXWhNiFitgNp3WJxVNqWAoEjfS59EGtYg83yG7tFe4fh98rRbw2jhi5wqnz9JGYRHz8z7GPaJmZHUB6HwSXkZd1",
  "key5": "3fACoMSAhFj7PG2nEeuamJ8DdDR9PQ5RNmv4GYzET8qQh29nEhSLmfPYZk3uR8FJqfaTeXfDRRB7ZTtJzEHUTzsK",
  "key6": "5vLY1WmVdoSwV8ApDVWudgbDrVES1xNCMUysvNCku6gqCDXVKLTfP8biH66En6yyZrhBFvfetFaouT6dqFucCGwn",
  "key7": "3LBR9cFPkmBFLcsskkF9sJkskjusZ7bd6ibBzAGyDHim7n2bfWU8RKoaf5K2GXMnRQ2f84HYQ1U6BvSJQMpEWoLC",
  "key8": "2EAnUGezx3xZTZ3mAbAfyFaQFxSByc7goMxF9fHcSJt9Sc88gPcjYrmuyyo6cFvmrdhs3v7EJBAvwW5yNURCHJRm",
  "key9": "34pBRTqgzggNmLoVtSsbKh7cty72x5WyJ1tpbVmiqmikxyVp55xeW11j4D1yAHwQhmGXhKKBuNEmwDVzA9mCvNha",
  "key10": "AVAGEV1f9HCtVTzPdTtLYZ7qhyJUzTc94FNZVqyQ6b9fadtNMYyg7EJRMDav5phnh1xYCNnR5fV3zVJjNK77mVQ",
  "key11": "24e22S2ka3rdTwtDUbr44HBfzbXtXdfAwdhcPitYQ4ucsv3fq6S1L7zZwW9i3uih26wKMiB5CAQneRFyQ6KZ7dbJ",
  "key12": "4TDwXDi777EivMXJDQnuNNHdS2JrpTeQRHkiRZX4URwkghmbh6fJazUac4pWW6A73zrFGB2puvYzWe3EHGhyh8QG",
  "key13": "3dt1tFo9cGRuywfvpmvgVCcgnfs9jN39Uv5cJDRg3adb2Kxn32ikoX3LbNKzcm7PqeLnFcd8znycGdUCmgrQ4iob",
  "key14": "2Wk5xhZLdxrp9KhHdkEuYjPJfhnRWbhB8ftAUe5J6mHKrqEZr39LUHg8LPErgjtPCAXtCNjTE7jgzxmetBbnAsno",
  "key15": "6392RAVRVnSjR5aLkZcDW2AtEXd8uCXaxGmHW79WoxbRVGi8n52YEZqnFA5AxaNbZnxhVWjhQtdTidGSiUHJCsWw",
  "key16": "2HiGutw4e1zZ5VG2nFaqFTXAHJQUsbTp3YD8aj14D72ZduPTE4hiLvzYFs1eg22UscKhzHxJX6DNZsSNDomTwUTT",
  "key17": "sQ9ZfqjWsVsS9gS78vPMTh1qFWARPU1baQmz5WFpCc4r5BFEpcgbCumspqfK6jCLcEEPMfaXuE7wgsJv1jnepWY",
  "key18": "3VL8BRetqNVuzX8VmqCLVZgybzPv31dMmmMMqKZ9yLJk9Zze99iXYrEMBMZUasb3Hs8SXiwCXn74cpzTdirVbBwt",
  "key19": "cgWn7PMZdpoMdZMMeCAGaw9ogE5wnxKciCaSukA7SjpP7D8n7QjKea8Quk1McKSAeNoYHJCPhcQesgR13VienWf",
  "key20": "5bzKwA7AZA935BQd9bmaegX5k6Sv8tWuf4wZBDmWHn6KXPC87mPicXY1zz6RE4bWctN8cxCwa6SEFsdp6fJ3YzFZ",
  "key21": "4cU6RXsbsGJiGdJjs9UeRfxejzm5s8J597hhBidfYhg4T7Xm89xf7JY84AAwFjs7SP6YrQhzM2PRjqVUCRcrVRx",
  "key22": "3gd4LomVSWUVXmrPF3J2oa6EeLTt6KbLZDh68pUCm9SCT41faQeaGZwBefQuf51AEozu1NPULEgEUF8hZZGoGpfr",
  "key23": "3Mn23qorpQV64JhPEZLopqbLrTG7t2NoXbF9ZmKxL8Rvks9Tao268tYhBYGTCwc3mGdxUDhSzfxHVeUpNxAcpAVP",
  "key24": "qtL9YgZebziwzRymqAsZQbLnmZADyaLVzpzZreXvKAsCQiVcboYUjyNAZqqjig2xq5BicbDdaogw9aVWRgUm8pQ",
  "key25": "2VHhC7TeZWt7FGGF2cWrpeNPXmybLFGaup81Ldsk6FYCBgdCgfQ3F41PFCQ9F2BV1En3F7r4GdGccTLjDBeedY1T",
  "key26": "4pEhViUoPPZ4NFDq71MvqUsn3dRpz9JziJEb5PFkGhVAjLCZAH7o1A4TVaQkt1ruZJ8a7Nzf11Z7nZnKArLPsbAr"
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
