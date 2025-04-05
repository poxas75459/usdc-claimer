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
    "5qXrJHwGC1McEpUKDV4Qax6VGG6o9knWGU17pLc6Ug7QBboYbWQubgmQiqTMMMsgC3DLfvRgHk2pZZmDdaJEjKM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "upHQFx8fzqH3jMi9HN6CqdQLNrjXWVcPseXaDZnJbTQuHwckfzoHSRnvdAgydsnPxc91vtUzuAN5wrqgM2itd9P",
  "key1": "4kLcetfBVKqhErLJc3fctRjQCfwigcboeA12QCLzk4AVQTD3hz5xX9rtwx2QUA7ebST4Wkdq2Qv8BnhxMTUW1RgH",
  "key2": "3SWeBBijrSRFKyCvPqFctP55ZTYRPqrE4SAtcCgM9UTmtH93fiqbHF2vHtSmeSmt9zUWrntPA7S2upV3JaDvoBR3",
  "key3": "gRgAoivncqi4DkPB7V4aXrUAENpb8CXNH7eJG3fJxMgG3dgxhc7B2zy1eF69xPfi1dJc2wScnAP3X2zVBS5HCdL",
  "key4": "5ZkDnsJGZjk9mthy2egbMgeKmmUi2Lew6MCAo3r8L8B7uYW4cCMke4WUQz2zCjZJ4b7nfR5jvvtYNvL11SRTSKvb",
  "key5": "5KHJzt9n5fRfZNd7XqKNFLugKe3ZZM41oCCavWtx8KWf3jyhZ3EjeSfHNrDCFxisKDthkLNLkxpPpbGUGcvPNfLW",
  "key6": "3jxBMV3E2gNfWQCszr53ivijoyXiiL5aKtJBWHWnWf6WaDqWp7MKxmPwKgTdsec7hHzhLKYARwFpNDg8QcxgyvhY",
  "key7": "4UbgeHYimCSyDGXdfAHjr8wG6R8x5bmv29yeyhN3cXV2Xpg5oKxLnTyVLTssubCp2e2LM4PR92SsYRmAdDqLfwbR",
  "key8": "41DPUMYTawZ5HCq8K3wc99UcNnVQFyyP1qumd9Naqgqrj58zQSzdk63c5jeaEtMxyCedM66YwZrfpQDniaF6wQbU",
  "key9": "31XkBfFapUZxxVkMGiuPBLc2nn3ihqT9uazkCiPEbjhghU9NpsfHXUkLBEwR8snDAaPJNQsa5LnKz49h5x7PzGMM",
  "key10": "3yHDQB92UNJFhHHGUtpjLaqVAw49ZwW51jK9MSAmBjpQR52giUU4oiRcAgbMczph2Q9nffCfaGDYabQMxabXzKA",
  "key11": "3SnpTn5H8fRVZqiCmEtdi9PHsxhZjidUbYQi2zyTcJkh3zGYrpCA3yja2XHCy3dhZvj8Avs5qCDK96pcxDdYeeSh",
  "key12": "4f1NT5mifoNkp84S4J7XXjaQr53FWNwRnsdtGiMd5etUubTRaeQzRbvQyaHiYHyDwciXhcEEFzzuj4juSKzG9G9B",
  "key13": "2NqySyT6eh8M6AdgK2NqPjbgdSKUveno9NW1wahZQahb2md8dwGVb3q8KYDGSNgkFX54im5Vd6nbHyPJbkWTUYPx",
  "key14": "2pS7xARRNTaUNmnqBveXXVqEHiACUFKoHNG2w3D3sQQAU5gPhmyWQQqDrYUBbQmHR1ZmQkKd2ZKgHSd3GM6R2d7Q",
  "key15": "3RRyQwenEM345DRchno3f8xEzRajeUD5nz6HLZcvaNTt87sSP9PdDnsGuWxsy2h67nhewR1dRZtpFT6qCSueemCe",
  "key16": "26FaEp4NAA1ipjpTwBdCTPaiJuPCAf4yyRVwDP6QdyEtQkEhww7Qw7UUeaBhoMKPkx2fdRHkuDKFF2xe4d5Fuy5N",
  "key17": "3hb99DwWeuvMGtrjT7uUKH9nzt5v4GBrq1sahzzqCnLx57fV74UfkvmQbDqoyu1yQ4qaEnJyFnNc1Rd7bmVe9c7H",
  "key18": "4ofTxwL4mXAkhQz5T4i4qaSQcDZLof7gsu5yqZWojvzXy4CN2vMXCXfAFYaEde1srYRGatqM3ZodfcLsgRqDaK7k",
  "key19": "2ZGnuoAh5nLRDkFUJ9NtcGhD3EmtVLoY7bsXTGYshSirnHGRY5kekau6YTKb1CKM9YNgum5nahrNLjWtWV9Dm5bE",
  "key20": "5ns2cGff6JP7M49i6KGkQKCfqRW4zw9qVU2gyaYe6MYJeyWPXdwTdSFQtD8wjCkxRTp2D9crNDCkHktnVYqH8ZTG",
  "key21": "5porwm7n47Wt8Pdy5LU5cri6kaZpiWq3Doc6GFvN1E5WZgwreoyJuV7F4AaWB2zSovTiJgdzvzT244UcLy8aSYA3",
  "key22": "tA5f2RbaBgAnHF4oxSUfZeMVizwPjkZgNoEKBRERTEoABjZWEJWQFBgTVku2XyYvpjsiL2iqkuGTBMcoDNr8Gmv",
  "key23": "62xChHvU28JeyjHNWPvgZk8Zr2i3eaJhx1Xp2vYbm7XnPfEvCrRoLZeaiW6ouXgKftk9Ho7HWH8j9WNXD9TdzZFR",
  "key24": "3x5KMndxU95VhnjowBbZJ2e48RiBhkx5Rs1oyQrahjV8Fk5dxJ3bHsmWYW3TEwLpsL6cQ3HyrpuTJ7XNdo2ZjxVS",
  "key25": "3jmigBCw8AUQeUcqx3uUpj9KTMkFtkuUP5w9sKeqrUcHGwiWhKzWk6X3h7kHh6Z7uxGPvK7cJ9zHrGnJdE53xjks",
  "key26": "twVgqsBkMKxX2bPe6xbJY4inoKHM4xnuXBoXjBFPTLJwVaGoJN6rJkeNtWoqzWsJb5JFvbUEZ3Pz6FWUQ4umNQu",
  "key27": "3uBmU2BEBBiaN46rftp7974DDmrD4yPqSDYpeMkuqNR8Dx3hBSJyEhVkjwwDuEPVDF4MARgGyokW4FBKk2VYaGLi",
  "key28": "5C4AC53GpqSgqnMcxKPSXGdm1FkuisrRJorEcukBBan3xQ1Q1fbMqg4ztJwgE1nQNgptc8iUq9siuQ6hwMMgKdBP",
  "key29": "5uCumAFsQzYSGTKXpZSAn6UZ7ptY89fmsGST1TGcSKPfD9FCT44RJ821HhcMN36q2gpWknkBr8ZMj9LcjxChTpkF",
  "key30": "4f4iDc71pxdSirS2nBmmVmT6QCp2XPZ2fjWdD8VeZh6JrmApu4aEfyCMXgxiUc3iNLNQz9eCvmUZ6xjBfago1BL5"
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
