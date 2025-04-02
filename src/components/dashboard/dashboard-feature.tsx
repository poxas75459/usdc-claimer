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
    "3hyNt7PnpgC3LgQ1QWEvkkX2Wo5SZZVmywRkLFpHyxtdUb24rJaRJGwFnkGV5qYGdaELhBdgFBG8kxEeEtRzd2G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPADFUggEYyfN9PSxbTreSnZ5KqKYHFG2TpdSY7PjNJCRiKrfgfKC28yQRnnUu2nnddWkpkkGHNMma86o4VQCpu",
  "key1": "2P2arBJeFnSDLWTfm3Ta9UQMZS4G5ifRZnvoUx5soRwTV4nPHmJ2zYaJLAvVYRkkxQrvDmRZZW2gcf2XutxCzXUY",
  "key2": "42YgaXCec3Rbf5Vkcp2GuSYzRWAQkR6SQQ23TTt9Jn6KsrrahorR391c3b2DQs8Xzmb3voJzeWw95JZJ7Q3YViNR",
  "key3": "4ZKXiKCqWspbs8VodcuS9CcfMSL4Gos33aQJRwjTuDwNd6xkdnPuawJ2no93yZLUJYm9JfhxRzHC5Zo4Zyc74HgC",
  "key4": "5FpD6SdifaRee1NWAexExmwGXyJ6PDdR6i26vurdifNDwQgkcLPiiDfizJrQZKR9uiuH6xSQrErGhHLojVKZPUcs",
  "key5": "3zU3PRmYTbAvxL25gkHtru99Ppmwu5rvmMMhA3bRTBdFFPpLCA11WykXzDsH48NvkDpugMbbc9VrnkKZdCWXKVaR",
  "key6": "hb94yGqjy49rig273umyuS65tySYPV3Ah3yo73Vv5ZyRo8mypkLKRfnAabeWFKfLgsgnHkxrfSEhKi8VSjzQieQ",
  "key7": "ihKTqwPBtshVjKGu29fEKwFRog3JGdLuqZEsoduMhsc53Xco2q1Pz7NgiHVPjS2SRhatrm34xs6pQskXZCXSy1a",
  "key8": "3Sj6Cr96Z82TywfcQVYj2vKPKPVwTrRjtoCgVGsxeaPBzizGABvHdizKX42XcJsjmXgF2pBJGETCbUqaPKwnvpmE",
  "key9": "2UwrvjSa58JBuajA5G7oU21Y57AALZaoSCsZr7uiuquYLKWoiXEYA6hqsmwiDRs5ie31chWdwHteYSDGME7qoKVn",
  "key10": "5okphYRe9m967Zappdx3sUifs8CEtZATBLL7Btqkv4RTWjNThv6CfirWh5KvcbXAY9Qh5K3Dag4tJfpF9kNFf9k4",
  "key11": "4fuWfcnZtjB95Fa5E3bvrD3TX2RvLTiiMmfS5K9UBaVMVFCkmBtqXeqRrbSZ2EVRc8D4tywXkvLCJBJhjASW3VyA",
  "key12": "5BXMYtj1hZF9difh79GXumy11Fuv5QaaQ18trcB6LwCWRbMWL3B5RzUgg2duWk6VrfES2DyKAW7xSVw4byc2sAv4",
  "key13": "5zmDVFnjER7343baUzEnrHotPSQwpq26L7H8X4SzySAUjURrKN1dt9N6WUSyJ9DehniHRXFYjHPbyQjHahZAhXM9",
  "key14": "2yuiLaaC9AHSvfwuuQzFhXi123ZxKKMJsXaht49HBJ7q88S3MpjcY76Yra7ojEa1E3cxmTD47wL6kKqHbSjmGoHR",
  "key15": "2HLbKSpvZgGjxyZSgfSFkkSKNn1qpwAF5AVZ9nvPS2rfes3BgHbNELZ6mb1ayqf7qGLVNzFkN2tu1KfDSWDfV33H",
  "key16": "4qD66bv4kEPJYK3JZz6FHWMuo7YaP39BWmzHd8iV517TynSodSgEECGS9pSz82tJ8JDY4jFi53gMHPFhYWrh3wps",
  "key17": "5xdK7wLiq795AmSeEXtKBAPoQnkxm14SBaD7L54wg25JNH3ij7RPHXrexkeZZT4bUC8dWVXXzT1gZcXXeqnQy9Zg",
  "key18": "4kYoBSTqidYhB5uYoXQdJ8Ra9iB4C5qXPxu48yqEc1ETWSBJJRX6GenhrQ2qJfDhAu99z2ENNpVzNiNUuTLw7RTC",
  "key19": "YPmkQ5EDP1YQrhjX7HhHTHWjy8rHyVQzKoyxSrjiddp6TjWwdzn4iC9Ki4A5rggY6p42gTpjiejwka7Fj3APpfn",
  "key20": "659pMzENHVdMAeJcAobjhLavrJ4ZLzFAwHsKcBRE4eEVm26Sbv3hzzrNs1dRtAdwpfP12Zbc97JSfRGvzKPSMmEQ",
  "key21": "4JAPPVQQvAu516WSp1EgBMLPFGHk3LLevWcZ75wSZVYqBqyHEXKs26xwP3pChGzSCSXsjjUzFtUZjLh8xdpjYpTG",
  "key22": "4J1XynGzJJnPcZseFx9ie31SpN5qy24Z1Q7G4LQBYyXf9QghGj7HqDi4epWJJNcKFz8VpwERM8SCvNewfgyrLRgq",
  "key23": "4UJWwhym2bCpWg5WLATk5k8M9jq5jsKrhYeF7jEJWxoLjzR2kxZMaWro5VU6Pd7wvBeWesCHbZgiGNTZwrYRQ711",
  "key24": "SaJ4JcVLLo3B3W5MuJH6bN9oQ7XNTD2gLmaeLcTDdqyiQczjCiUsMK6QnvApuMgXA8Qg5rYvcySGFW6yeQacFPd",
  "key25": "2UBNsDapNjxuefRHqYaaXsShD15dwLMHdZnQhBpBxFLiPvt89gSgPp6y73dXSjmzodF6784nZD79WFwGUxz8r5wm",
  "key26": "5KFGtjjo9ukn3R8GeVGDH2bDokfsWP4sV8aX4KjJX5EvtN6u2TWDxBHa71jvsGgGNPcKFLocf6cKZVA7CgKMrW1j",
  "key27": "2ckAXjWEd9N9xdkazKRMCB5LPxnw5Ydh4SjJYNvSSrBK2A6MKKx63WUVwXA8RnenEbxUVx8tBzgRRrdv95x2ng1h",
  "key28": "MqgJPcFf6pfJHW4R7Q8L2gfHw9p49EWQsZECCea9EFjwhcTpJMBZLhTpuyJ4h2KTG5E4xxWrMpyXcfgWWdJVT9P",
  "key29": "5HG5XssRpJ61S34LkBfoTuofz7NoJV7m8q86nsEYekAsFPXT2HqVGCFYXsR42xhxDTrSsPRD9HPsePYnmbadvy7T",
  "key30": "21mwGupEcQ2wh8FE93qp5gb5Kochj6r9xgTg1jqHDh2b94Q2oTQdyub6DoC4RGas49ZuEndLDYshfrEiBxBEnM4t",
  "key31": "QNJ6NNNt8s6pdJJwfRmFPStyzWxywuSCWkTvrmydfWbExJZm7CCrzXge1q4ANYhEWkrkuZ8huai23EVsaxiuWv3",
  "key32": "3Ao3Wq2cPPphn6MHZovKXNg4npF6ZMTnE65VN8Jaoyqr1RQoYHNcXnPe6cmejzSPpaMNkTHgVuFp1f1HyvnYaWmF",
  "key33": "gRNirgWKZ3c1QEeQGhDcneC5FSMEYQ2LtZdmWcsNWoGgt9JErwqQToTTfv8tZ3nBkDnVPKkK6iJbQfg7sxPby4V",
  "key34": "4VnGfAoK94k9xQ1kkrpCuUf9WwUdcKYrDrAsVNaZxQca5ANhSoJHc1sWkDNAM5H1HcwhTB1AjL5vgWy9qJZvnCCh",
  "key35": "3SKAhsMmdabQgHQmS7CaZDqcCUVmCCcmPN65sDQZDaPVjgM83SiyYU4sMg5UWNbiubLmqKSG9bFLsCrpHwhKDF74",
  "key36": "2pP9iHbwDRVbNrZncQUQ5cAXrQr9NcVMhDxk4nEDmfr4yh5rpLcAvPd27QAnSt5A8JND53wgS8H6rri5zvcUZQnJ",
  "key37": "7u2Cem2wsVTJQmTtNb8nriHsba4dVz4thk1Kwipi8yZqr9nqjZntASXqUXLRZXUtMbDNLd7U4ueRgevLfN3Wkzp",
  "key38": "322pjCYLwe7t5VTY8csgohyTHYLty3GppGJYCoxaF512CPTzDJNsVyVgEKzXrcVXqNBg6X3Bxg6A3qs2FHsJTbyo",
  "key39": "3A6Xd7bJpUyKJUg5v65NtwYSdY4r5pm4zXmG97hdGBMVKo5Q83DsHPghqqmRLeKxvrjuV4f1oZx9THmt3cBhKQVk",
  "key40": "shBB7ByEpw6vREYsPVKAyDz14SKF3uThajMy3GewYW4SjnwPiiYzhBem9iubc3sd4vfYzXnJcYanZb976hpoQNe",
  "key41": "45UtrD2Ytg8DVcyszXmZUsdP3ZvP8Www7tRndGx1HPcjkMR8nDWJNpwMwSNgxQjHiy7Tyye9RU1YX7uMuqA8QDkv"
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
